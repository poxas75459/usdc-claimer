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
    "E8Xs4UCswK36Av8CG2fZCW6Cr7f3vwjiGGUY1gSSBvLMNCtcKDnWUU9LN1mawr8StqcowmCisbf9acNZ8BA3E4w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p7M79HQQ4DSMpg4QS8TQ6FhCewUh18ZbfS8172byejTWHAra63y4YRaUhcGTuywKp8FXzHGV5hJPjJxDUpzv8e1",
  "key1": "2Fs1UR8q4TELn88FeLqCuv8aokGvnVKtUzfNAYgviMh2rWw6CaFFkBhvcziGn93h3maJdXGSTWkJKuoJyJTHZD6U",
  "key2": "5PzskAHSquvSy18eMUinkr9n28EmZPeE276rMVoLLaKqupB4Fujr6C2HasBtzGWve4DjeuomWU3QLYfkSu51CcsE",
  "key3": "4SZLsJtHruG82KQQJA5xEk8mnwxQzFNgisbu4hqJEypzAigZhe1RjEGetHjt1uknBJdtmV52LZ1Zz3i9hz2VD9qV",
  "key4": "3pEKymRCHueSerRu65mwNRmEDfndqPKRL4i4LXdRMu4uibMvNBqF3BRFarHzCiHvLHnwF5aPqvjxcGpeitKbGzjM",
  "key5": "2TcwxCz7mpWus6roipBuZDwWvATwtERvkri48j7esHfTEno542czeeEfd1HhQ1gySm9vTgMDump46kcv3aC1WqJH",
  "key6": "65NB2fQab8DvHKVK3YzGMAtkRWSP9W9r3SvcVwNUTBXUfqDJh1k7T27FKa1rTyJd1quaQtcjpF2T5aMr52BGtPfF",
  "key7": "3TZsA5FxQcDQyBDbJ955kHzaRtT6iQbDV7aDFKXG2QZja8skzuwHAXv26CP3wjDXdCWBxwBrnQLkD6HXZkbG7Pw1",
  "key8": "3ht7qhwVvfaPhft8XU5ZZux6JNpjtbRu1yZSgnpPFNFXajcj2L2DZC2AdYLU358jeXBWeWgHwDyWwQhW2XprqG5t",
  "key9": "3HyrEdbXma3y5DjV7mR58uqM4k3PqR3qbvUY2cxFQ36WMTctnTf7Y1jRKyU2WetGevtmWcHC4PXvDMPd26VfWpZz",
  "key10": "3SNX9btXHJjzNWWbCDaFyUgWpsKQqTnabiuPZkSMWfEUgFgGtc7S9oHLz37PidnoowQmjFQnrfSwXsakMFggELo7",
  "key11": "66R6rr4QjWzXqtPhBLnKL8BDprWAxwoN19EeLHHV181fk2S7tmjA4fnVGeSXgEDEah3wiEXQDH2wRa12J2Hmzhb",
  "key12": "5ukDyg6fik9r2KuiTjdRraj1qXufzUmayUPn4iXkjas8a8HhW2b8DyPJGa4e5sFpJwewHfFLHAbfXS7ZbxhdS5s7",
  "key13": "4Ur8b6f3yvadSUvPDXS9vXQa8BRLJzbyB7KFuC1DEVVwi3HuwUx5yudFrZzPhSSQg9xwQUpgpRAmmeCXpzLbFLP9",
  "key14": "4AAM9BR6TpdTEKkPiYHkMPKjxArJ76MWzMtLNoimTLb62qWLMtrPGbA9foXtK4Ss1o6whZ2BoqvQq2RCpnYp3vpV",
  "key15": "4P4kbsubci2r5UhGjRCLjw1RdwFJbjsFkVeN6ex5KEcmCK3GJ7y19FqvX8vA6e24r8vjY9YxedVorgCoifB1iFjY",
  "key16": "5noM8bvTfgEWWhDb2FkUTeYqzrxp8qEsp1iYwFk7NngZQrpVynCZamXw6yo6B3cBd6BTnmHuxQT5zBfjoCkpWxTF",
  "key17": "5L3eTF2KQ2riTgkgf9XPUxQYYH6tzofuXnKEc9cEuuF7a7V1VCfGddaQMt3t3xfGhLG7sD6rX6ZTAwsLWA8CMYey",
  "key18": "3wmL4tMg3RWF1nH837G5Uj86vtozEoHSPbZeeqqLoDP1JiusjXK6u2JbR3rE42bE1GAVWBfKygxkfJykzbHuwWT7",
  "key19": "eWMJmnDBFUUWQz3iA1TiYUBSHEBvQkksvzLmbgRjm1FyPvPpgt243WKbiKefyX9hLrhfxQj4Bj3X8HunhpMzUT6",
  "key20": "5uvbaW9Kac2MaAtAt1Bxj41C8pNxQyppRErKRNDgjpnE8DwyS8Mesjhgfy4dXboTiAYyb4hD2yNKKbWZDrKrADqt",
  "key21": "5Z8Lx15tHGbw9zG94TbSE4duVUVBJdLL8aqNUZbqqEeERpiwrK11hhruHgr9RCXaHwBTiCasAr1ix3f8j5hvQXFs",
  "key22": "2C6BLxmLS5uScBzSWaN4BNpSD6q3uSGAVTr9u4SvePj38yWa4ojjBfPzMwt4GmfaNgt9RFkPKrQk9VjPtZ94vCQM",
  "key23": "5b3MqqmCREa91FYY3C6PzTQhH3RT1xBaKpfVczvo11WvANPvKnWFRkSnSkEpMexPeZFeLike4vCjbhMoG4A4tFMD",
  "key24": "3Dr5oCkh6VeYWcbFVxmwD5ehxgUHnQNsVPyDJ4Cpz19qo8sVmUJ9J5BnKYYtD98MeVMzmK2eV7x7kR7TBoa2LtD",
  "key25": "2RWokzPjGjc5YZ2mXDtt4H5UCdmmJBtwLsGiHYme9i2ikEdz7FMPJwffZwoAajQKsG8M4J5vpJZ9EYAystnNLyKv",
  "key26": "6xTKAj5oXwWZWKfdjDKAVW334PVcaQwERZvCv49YfGwoHY34SdsZhsyWTvEenxkhPpwpzCmAKKgv2iWSN3eLxGS",
  "key27": "24AcQfNDuV21cfxZik5f4PV4wSfGEchWZZgEQHqUuksRMTE6sbVfLPdYsAF8qKoJU14sk9yLsLANjHFKeuD1GX6U",
  "key28": "hEchotbvu2pc5DKnRWHwnvJ2LadTgUfjaCQpa7YU9rzH15GGdJXC3M3GXmqQsmRrMq5PaxNhWBHr7PYtX2zm1WX",
  "key29": "4zCs2k6cCncaJ5kPpM2giq2DDa6Lw6381LDSdunKxbbxXc75ogGiLzvEj2kcBdZsLXWuFbAfJH8dcjhwovQjx92G",
  "key30": "3sVVPpMN5YnxVmxmQ867P9G8EzCuTenBZqibugxVe6xQJDofYLqwbjzcV9nALff9QM3Ss9joRK7jDWymDimJNpgb",
  "key31": "3hdHq4YKicMYbKB9pmc1TJMzjxjCtnNefpL2GwPd1kxLENRRuUceP8K4fMwV6pZJYSsBFDskQNHJmgdsRF6FuZp1",
  "key32": "3t8bqK1CJCyYTT98umkoDrtbrxwvspxNFFNr7XgLEMYvfpuWfrz82ZmxxEbKkSN2aHtptCxfW98D3PL8kRJQnwCU",
  "key33": "2rjBH66Nfo2NTzXfQ6aWcoGJPgKt5mfM8Xnq1wLgTDhZibTfPR4zNvUgJmrw6Ex51WQ2NQQSrV7NMsidQxnn8pqC",
  "key34": "2cLAmo6R7kAJXgYJ9XYiFeRiUZnBTnPyYTArvcEkfa1NyuFWtpRf8bTDrP8NfMgdYxGVWDv5yD6GKNhgH7F8ne7x",
  "key35": "5ogh7xLj7Ts4LfNp6VdDH6Pn8cBuwnXyb82TGDkKYHDhtKpz27fYHg1ngcZRNi8QUR7CSUGQnz9Mx61AcUrqZx2M",
  "key36": "RpEhZBZkZvqqHFPqeuP9cC3dFE1k1v5jTBLy7u8c3vtiZ4CQRxvGBbG4Y84nnU4uRdZa6YsimXx4cY61QoFGQYr",
  "key37": "3sXFfoe6qLycDSb2isH57dbYtqmJ6HjbYVow61WoDoyqeRyEiM5M9eDT1qwGFwWBkH5kUprRJZzaAQgaRHGURtGQ",
  "key38": "3xBG19DGgkPKXiR7QjzHrLviPADqrFEnKgdpuagsawpp1hY454ZoRacjTvj9VdS5SQmVDcbXzPGhvQ8GcxfF7TpB",
  "key39": "5joAsW81iWX67u68mda3abUeHsrSrLEpibDpmdZaDD2pYGsvAjagxSmxgd6d43uAr9ADig4Z1tqkafNALxDSAXPN",
  "key40": "4GGNbuiuCtJRzhpwZx2SWstqNQebr9mCF389iiJJgS2FnRh8Zwn8ravoj68SiYDiLYKez11qcTxsvW4FJRkJZFEh",
  "key41": "4jcqPVgkiy4gEa7zkjUzk6cSTmtqeLEJigAQE43yUN3iyZEsq5i5acpKWgaZRbN4VpSGKEJku8eiCFdbkiKeKrir",
  "key42": "5WrpKmMqtKBoypGnm4ZpepNv7bbW8Bq4cztbTrhN5v4RGLmCP4vJmU8N7qZY7Ck72e4quEif9pQ9E77mNGdVZCgC",
  "key43": "5WQwfhMmWqKzGH1PXQ2GZrreZihiJqd9kmy3MqjYrE72hTg51UjN3Z7ggbC7xPjhgkYsGfcLF9Y8b8vvUAr1fZX1",
  "key44": "26QCM4xBq8EfkXvqJhNkCPUiBvcFPdaAsM1tR5sfpFzNo1xv2g7QDgLk7QNgsciEMF1iDAVypXwYkUxxJQPnDtSt",
  "key45": "4NYnjVK1dbaFpRQ418mGKVPHYXsdW94ngJFXEreCKnZEwx8dbiwWTDSKw1aefTZ8n9JzyPkayTuj4z9eTrULahRh",
  "key46": "5tmtwxCR9mJ8E27xmKaGnpEiRadHmGjuFD5UbEq2UifreZe8im3uA6KKBVt7Y3xvxhUMU43zjgyDePBgjR1HWEPf",
  "key47": "31Q8SyMc8gjEQ4uCV459g3CW6SSD96NQ4SaQXkhoAN8JYhcZc5THx3QJ2Uk6iq9A5ypjRUcrdZ2AZe6CjYArieGm"
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
