/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "ffAoukfAZ7XaX9dAS1ozVreeQah6eekRDf24eDp8h52pnsbrdRMPtVKdSHxaepdmCNSD7Ew7zsbPpSMNEbQYcj8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WWFafjM1Qrz5dYcrZEK8aAM8sQSAa5gNdAtYmZq9nCz1brfBL5VQdYFbey7SaPHhSno6NbfZSCDqb4fWNkZjTSa",
  "key1": "3YjXVmXsPL2jnNX41McfiDgLSUhX9Xvf441GY14RqqPY4fL9pFxj4znSuH1CxpwoW5HXTWtsJxgE3AKH2bc7LHyX",
  "key2": "5DAyVzHJJXYdWTyr5Wejf9m9UcPyVG2zsgMNbzhiM2dYftpbCXUVV6qmzJ5KjeqFbrMFziZNf2rrmUCf83CgyYsY",
  "key3": "42Wg6cSEuDUykXnDEQUNnYdqUJc2VkEvNExoBb9koytwQipp31xrsR572Ng1uyjpbN6Qo2NcvCVPwSXQEdVmuw2c",
  "key4": "2XqX1txvbxCXVLBnQLfjtWSo35WDRVv3b6D5HS1fowKnsevdwQ93df9Vg4o8JFFrwEY7UU7FHaPqoYY4K1VCtF3k",
  "key5": "2ECrKHDmBwTvvype3oxU7cmsvG5UioDEkpGc5B8acYXhAmyCFFHQjByb73k9kX2dxxAYEsFc6Sbn1weniqZk8v71",
  "key6": "4zqV4sb9Ak8HHZKhjF884WSrLpgopFw7ofkT7fkdfzgiWU4GFgE8XKjNpRTP73SuXfaGifTyjQ5AGTx2juxCTNxC",
  "key7": "45NyL9sFcDWo4DCDnD7S3HsBmUT4QyWZ9Fbu68DZNHVkH6937kL4Lh9zWsCryg2L3T8rV39M2JBDByc7dKwBKp8s",
  "key8": "59hUM175GbVponMo4d8zxRxYFfqipKzydWZ1meoJT1MJMDjTZ8TxMfLihhgRPA7HPMwnN8aKc2NA2iWppGhH9WYm",
  "key9": "Sbvb2vctDZW2sP4J1zz71AEUCJSxJRVbgnabjqmfTZKEJKBUysTWuWqZ8XWmhTqmXHrd3GevgoVvKYSBUTQH54d",
  "key10": "2zSnWwKoi162yxjXJoBGAtZMoSbQVLcBix6m2ZerTpof7nK9kWE5ZzqEuBocu4Zi89MrBRGy8mjPX6nwuj6K85Q8",
  "key11": "3RESoE1Hc3fCSxgLa4tr3PMqwioi9itfqKbY2eDVFDPqokuuhiFskoobKFhZH9mn6iDWbkB3GwErDRyRzXAoErsU",
  "key12": "3tZKEiUgymcYAYyxtHSMGmEgGZbnxQaP5YMzUsCUdUzHVrMgoPRcuKfHau1TcTPeJrULytNkGgQaEqs8FConhheu",
  "key13": "5jyC8i43bWkhYGYZcVMvyMiaBz4NnLiSYQAgVph3LadqQsZogkNzr7zWSY8vTyACWPuCGJxznrr1ptL4xt3akskA",
  "key14": "4jqKx77srA3gWC2aCdAU1BciL3VeJ7VJftzvSEcuZH56jBUE4YJ2jW8Rg6jQpbFejjsRXeqCCttM9Jdt6BZ59yvE",
  "key15": "2FFJ92pvUVMhjSLFsvaiWBntyaHozJxnuewd8X6ypVzhDGzscqZZVTZu3YBw2RnbDqWYwUtjrBg7ToBJkxEtoUS7",
  "key16": "4f7ydS2DeeyRpmh94mqh3HnbY7Jx5biBBRB3Wo7JkW9Sprt8JrH7GyL6tXyo2UbeMBKkG5ShLTRm9hzMPZmTZ1B5",
  "key17": "3NAyiEZFgxCNpBDeZcxSdR3KCPgeExzAiMGgcAbtWpPPquQp3uyQgtUURENe45Vr6F6BT6K2igDJLoKC3YofLjFk",
  "key18": "2qKUWXzQZ7SgXc29atvGuxg2eFKeqbq7BtQHqMNg6am3kZtYANoDSKJBjuDALzZQKPGLF5B5Pcm8C98RDryaXY9n",
  "key19": "2k7UXfnCqhy5tTG9RgkrxFuMm5nuut2StymQTZvNw9C15i3pSkm76M4aeXg2eR1gWDJu8DBRpufR3ao43tYFW5pP",
  "key20": "65aqqQAQ3t1kEyTkYCq2pksu3HFWbYDR3Daq4DpWwKW21hZPHJPxE76iFiMqVNkwfPurtdw8eE9Z7oMhqGd3pzox",
  "key21": "4cfUcMhtATaWToLoQDbPbfxniEb6PnxEyjTmcim5XRDrrDUbaAij1TxzDcPxoVm991GdJpeWmjTJZ6WtuXbz1PJi",
  "key22": "R35X6zEQVqFPuakTqL2uvXTFzyaXZfqhVnXmMS8BuuZTAFipu2hnWJjBZiErLQLaT6dkq6uhZzs5kJ9iC2nr1Ea",
  "key23": "27baRPVNH8YqZ58go28VtYAE4vZ47nhuBpzkEgZsUvDm5aPQsUMCrcmw46rrRQBvz1FrFQd7FDhTReEYp1RFtGjB",
  "key24": "39Fjy2tZWxTuVgpaSyTa8wNWTKpwGGFZQqNn32Qw1Fr3hJiSUCcV9z33YHeuSHFTsZBosV8Lxz2kvrdy7Lv1AdPg",
  "key25": "3xGQfYQtc3WyooainqxUz3pS3syecjtGssiBgKyafV3j7kRoRzGS5k31N6PjACay7mpHWdaddNahg298WHVpwE5z",
  "key26": "3ZkUcLQ56DEYKnv7HG8we2yuGHLrScMtb2QcA7KMSpmz85td2x8agatawy5FczSDady3eybnA4Tx5D5sv2kKiYUh",
  "key27": "3LtmHb2DKMH3PvWY5Te1y6mpaT4MpMcN229PLgMDXZESHy8SXHkz9nUarK775Y1fZqPsDoQNRJu9FjeeVm39GCBq",
  "key28": "35uvCEvof4ThrqJE1qLrTV4davxX8dz9KT8ZAAUWZoDfASrNWE34m5kFcue1nmhS4hFGadV1aaftunbL6rsAkpdM",
  "key29": "44p2NNoBie7CQUjGq1ZQLVgpaDiPt4mJVBoHkqhftWSkz62D947JKsr4kD598WQM6D9o9hZH83F23fcKzuAza61W",
  "key30": "4JxMTRYFVjYtiejNfFKCpmAayWqSpJjPmTWZ4F4YJ7gxuEh8PWSN55uYmSScoTR7cHT2MEjX2rpuj8SiyujQfFN7",
  "key31": "3cGvAsifGerrS6S3WD64UYLU39wpHNfyDurPHQxJeb8E7ZHmhEMGELsV3ryVDxc9cued2TgS9uzc7z9KazWZWtBQ",
  "key32": "5hTQeVVGh6UuvkPnHehRkZDaXG3uoWVtLZ7gcGBqyWhww1WzX2Eh6GnVvDYCS9EbwbTMcxiPfxZo5eHJyG8b4vFM",
  "key33": "fXP8Mp3dH98QJVCgPQhxGN66hMxVxxcNpWypSLvYMoDiJhYttLNkewKCiztA7oJGZnFkg2hZS4r1sNswfdVGbu8",
  "key34": "3EVABVXfTHxhVW3NqQKuTGrjrhU2nzctciqJBF8hhciPFy5Xyoand4WF5dCgx3JYLdBnACoHs8QW4YFDastigHgK",
  "key35": "4qrRRxtYbbCkUV2Q9V1F6hPbUY74GmjDF387pLbv7789QSUPbsMi4mMW7LD8aCRpPXWFFBiAsxxWkNDDuqbHBvzK",
  "key36": "2gDkzGiHNshgAxrA8UFbLnm7RApAEQRe9RacGQRzb4EkuEGxsHf5QF7oALXWwLupGsALuesLM9teqBJDPBzApzSt",
  "key37": "2evuMyEkLbhVDRsZxJmwGZiE2J7tr47wnyrTryTZz6oTrWZPCKzcLDtmefng9jy9gWwGmLsNU63bUvmfLMaXWAU9",
  "key38": "5mzNjJXd2r9gCAfFd2CMpbGVesZaTFUVcnm4j6c5n5oAWAPfNbk9pXLQr1JCM3JjtMqMqUTpmGe7wKTXDxt8czbz",
  "key39": "5z2esAa1wAoudZHJQnwJwzSBUQrAh9f9Wuy5qRvvtbCbNfZZRak2rjGNVKfcarnjALaSq9C4sYigrS7j9E82WZA1",
  "key40": "2kcH5wmk3H4nCisq42vi8cPRYipMe7nxUqFHmVFqo3tVBEiL5MZBqA9GEDXUbdyymSVMZznKQNwMPVuNDmPsGPdv",
  "key41": "3pEtLyC2STHG4XQritFbHQ8L79mNU4vUCh5JjMzwSDXatDotSv9fdWpMemUuSDdJC8nMi1L9PGXrgRo3gx4DoAr4",
  "key42": "5safkqtuZvw9tdKmQyAtWZFLYZ8DRckxiSTizJqNufGE7fmnSvsQBgNRiDWuqTuPYikPNdA7v8h7RcSKTjT6s4Ka",
  "key43": "2vtKseusgWqUsPLGGbxtD88dbU3LTaJyvM31rNGWwXtQ8G1kqdNE14Ae5G4wXPSN7JwNktFyhbkjcrrCKyKydzM2",
  "key44": "27KQLNLpLdaxuqBevN2JTbQYocnjumgMjn8M7Gcev4Dqq3dtbbUhN2pJwqhRG5LAfGp8VYfgpCRptZvW16stCHag",
  "key45": "3mCbFBemrkuTGYWLxiB1ZG2vkSR9PkGHAUAGq7fZwjo6WRnNbzRRPcLC7aJsVusivsGEEUBCFQTbEwFuLgHFHS3e",
  "key46": "DtY1dk8Q48ruFxq2kJzWHmbHiPNhdYPVjUP61yHrBTxcgeQBEkLPdVRz4enUVbRvhmdGw3MwdZNKd2Cigzq5W1x",
  "key47": "55Jn7hgL625N6qdj7qPZYioBSdkHzLmCuSoXEK64Y3UZuxcCKJSyUkTuVF3zXd5AMXcpUV2PEMyQhWtuRsUB5zBG"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
