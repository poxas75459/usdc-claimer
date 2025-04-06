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
    "4VEBBz3rDAocTUrgvBxrYhA7jU2LjupqExSm24BjFz8upUrPNSJsfB8QY8YZm3CVAygotNdswUUmQ6xvo1JkZLeg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rmobKdPwrv6odhNUVeRfY7hRYhbPGAgFRcWNm7HQbWLXebpqjDkThbR9t6wdCR8gsEURmh9RfrN4WLCJhTgWqjs",
  "key1": "2pAVLcN1fTweA3JY6Nusu7inxb3usKNHbbSxxQSmBEAnoPemUAExERKhTxYHRa8nCo6i3sHoEHy3Va2kgGEKpvLP",
  "key2": "64aaK5Py4LbxTcGuqwJMBKiVJ8CHtjBmxm8Rh5mJiEypoW7ydRtUY5ksyXXsyFFJL5NJahZguUNTWGv9Uarixfvb",
  "key3": "42H4cvwhj6gdyJtx9F9pskHu9syEQ4MC3yCR8qX2iA7ULnrK7AK8pmLFUeY52w6Z528pUKMKhBCoYyvQesxqWQQH",
  "key4": "28oD9sc7HZ4kY7kuR2NTesc5jAeKKzkL15QXQ8iL7epoydmw6u1sT59MLzcHQK6tFUe6LieJuPbm2HGimhNbph3w",
  "key5": "5nx42qS9pQTX6hjtNoqRw6BEexsF236eGBaLpsNSaWByTgDaC8D6gdLkfFU41spCxKkBezwCYnKFXWAmSSyrCVUn",
  "key6": "2q7Lsiy6MgdW6cWgmxMVsYAUYvUECupFQjTyJ6Ye7FXpTiqoFisLJ2kSMmM8AaWFuieKHKANt6D4STVKzp27iQEb",
  "key7": "exedH5QGtko1TMS9zUSgtZHn2g9v1ymbhqNUY1jfmepdFCqvdjxtMdmHhhir9qkJjgTbT6KeBNVowosYXepx3mY",
  "key8": "UmkSAZnUoy2crqCyBuCKNQt43YyY7STZQDCpX7W33W6EreKikEjusiFS1Ea62u1un5Rs91WeXd88cYGteLjs3Ei",
  "key9": "NeVsYJTEMX4ZHU9YpqDLkgh7mx9bsExkg6bcAdJjY2CucwnnQBFnHJ35hWLPrPFDkLkHmxoCytYLCbqm2iPgHe7",
  "key10": "5z5C5VqZ2nHoWtBc4N6bu978RRTivhivTGGZt9PBwMdLXykKqV2DKN3xwvUTyewcXWzBCN4JMr4HR4hb7B2FixE1",
  "key11": "2Kcw9eYhc6nHZ8eA9HK76TYHxyGmEZdkzJw1DVusgqYskJoSmT9e7cGyCyFcpM7HsoTbC9WNKmoZChS3Q7dzvpMY",
  "key12": "3KzMSjeCzr4VhK6giEseabvWEgnGUfdu4Xujj6FtZgAQz6ZwRsc2F9PDNVAnRU89EqKdTyBnPp48tYcTzm1wqu9f",
  "key13": "5tJcPprZVwGammZU9G9awT9w9u1AzoQuBY9fP2qWq5Smhyg5fHzcosJgeMukQgQupkGgQaibbLdnPMQhsF1qmz57",
  "key14": "53aH6bLzQBu4C6BmPkD9Jh5dcQFqYFvDhZXv77rVCyetWAmHXngp4hcS1CsWGwix5bz9LuDTvCA3GJQMZ6CJumTN",
  "key15": "5pQ6oLUyqgNVqMUPKo6BBSSEf9Un6swsnoG7oxaceKE4JXw7VgTm4WAAXLxDVXQ2CtuJLjTWKDqbuZgRpgaqrU8e",
  "key16": "495ren3Q5hDAWohqrPQZ3u3cTd8Y5Gqovau4yp4SVrv7Hz7sGM9tc8eChbYgcqkeo5w7P4fqkRLpR2iy1zx7b2Pd",
  "key17": "5qzoTRk5UyJDS1QsKV2sQTVeE5t55YdCNZydWhAaGJVXb8a9xoGFd7duCs9vT7gXPSPebpZs3rLdxEDcToQaseP9",
  "key18": "2tx4wVAjtP5rAan7V2DEey829tzhRarHaUxzEaPRuyxpcvnWLSNMZGm5Zdz8pdgGV9tPZQR32VrvNEsnJCsUy1HH",
  "key19": "oxQFZ4KEyh4fhCojD4stiBuuRULc7M3VQ2WtCunRxmPaj8EjxhtYoaFQP9LM8gj5FRLNJxzjcwGo4haMH5SSLAw",
  "key20": "cxmt2KsqxhNcQLb95Mj2SNrh4UJb6DtLuhvPrAQtxZvPqgSX5fbVa3zQFaAHJ1ZN7NsBiJaUECcc5iXEibqgX3j",
  "key21": "5B79KnLFwwM8sLHJsFeitPqoDpWb8ayjkvdK629EqcJ1QvU7L7R8UyqnNzaiopfNYtGEzsvs31jzCfUwLBdp1NTh",
  "key22": "2X8sJMb8ss8Jrymdv8Q3E53CRJNGm6RzBf8zVijNn4FNSvaRXMaVFzcFkwNc38A4dWEDGLVEjtGLrTWbKZcrX1HV",
  "key23": "2B1WoKogBsLvTXVSP23HJ5dBmviKbbNnKS9svuvATpLrkoU64ZKnJ8vWEk9AJiPw9iSKTuCvXYandV3CUguu2qug",
  "key24": "2JmnRjuC4XynXAw5b6uAccS98PRXyrbJF9NFrL92iFWT6ncQvzbKQbu5Xrw2GtW29eVXaxMMnmCjJTvqNs34YWCa",
  "key25": "2Rmvy6gVZ2NhQRPkTBoZPsxikkQb5JRDNgiJ3BkYiJWwzz8V5QTSqyxGahY2hvZEnzCTiCaMi4cp8XQ2gCtuywKS",
  "key26": "4PtGohorRDf9iUdmtD3Hza353ZFtSBC65LXaYJs8Zin8F3pk2HjWZxXoaNLGRenzE1HorDsmwyQ9UC49iAegRVqz",
  "key27": "3S6vNq7dFmDZVEcR4ATDqa6kLbwxomtPLJ2fvcsr88k8MuFDwajSdLdkHZKyjFAMaTAM6m5w2NckpqHn4YH5pUA2",
  "key28": "3BRSc5GLBGuqDapBJgSrdp79tEJEwUTzFtJCSGCYgpAUCxEyNmKS5ToKPtfQJXC6Dk8F9BdpSMFAt9L2p7RL4Aai",
  "key29": "5NDF4m7xLHVSuaZCHpFk8iY1DYD6nyYqmWP213VpgASjp8DrPtg4PX9jXXBpwxo2X3vKCK1AAaqhYo4zrpymvsnw",
  "key30": "2L6ghbcWC7eyqu2Kiu4zzGAWFxpRaWAFupanwdDyPbFp4QxZaQ1gALJGeN7Dsza17RoQDkPnnqxtiGkBAM4xWNSQ",
  "key31": "3n9uxtJgGjGgZga85tPFXqxQ4cGyokfAEi5reVw7ypVXUyAzyzPKQ46psvSx3BfuhZYTZW8VmC79oYndgE5o5GbG",
  "key32": "3SCMS2kvAGcMW2gP5aZHLhHmMjB7a2aPsof4DbgCiHfNKsGtVVbEK4YKt4PmxZhZUCv7LmUZK7M3taKuq8PCb9MD",
  "key33": "4Bvq2GKMgaAWpo62czJUjz6cxxfCvMfRTQxodrp4VztjjCSqXH9fV8k6pENQatHWRseD4B4WPSwqmAuacmfcHFFp",
  "key34": "4Rop97EGrgPPnUWobcxMs3oXrHfTw21KbMD4Tc8hK21PqXqcH8yLddEZszK6FvrZTWiWFo9Fby2MBkMb5VZmur6F",
  "key35": "2g8zKKJgPcpqSN1pEW373Lgnfg1jNpr8yuwUCZjySAuMmX76h8bncVTbDXAsKnUSQcWbgMMWTyXXkQLuy1hzx83r",
  "key36": "63rBsf5eEeeVRQwceJ93ZTVfsv9ZU2Y9EawkN6FuMoYGL1afUHqUgXoNiozQyHF5htoMiyiVvNzwepo1PUDicUhz",
  "key37": "2dvc7ssCLCkbNMYPESA3PNaQrp7buLJZYHazj1mGSK329bRc8YnvzFsZg6WQ4NxsPLmDe856mRYEEEwzjokXNzpN",
  "key38": "2qb8bPNMd4hShJxM13yxbgZSHbPVVoAF4BpPX6Hbt4XeK1sB3P4tL7eK9184n5pH1AKKqRMxVGMpoJ2VVJSWq2Nj",
  "key39": "4PKh9eDqQcqRnTNv2xF7PLjzzy5X6AYR8TCdUcuSD9Qv24b2X47ntgwptcHQcYTzbmY7uVdokDQSDpmjW72Ur7QT",
  "key40": "3xm1we4UWom1uz7TjttAjHu4bpep1h1ygdYh8sZxV8i6rD8wE78kEqhk82DZdUd5MWMGionLGF56QYMWWezUou2H",
  "key41": "GDZzQ4tdEU9MCPtu31qMmYUD1Xaj8et3VMsAo6FxviXmHXHZiz3rDE6w7SLMhkYvs5mxEV35AE3YbXRHHJG5s7v",
  "key42": "5mkigkVzNH3b2aSiTQqfxBDjrgUMy2qwc4VJuZnCaSr92QefTu657kFeagmEwnAgErX6ZM3BXyMeTLDzteThdE2D",
  "key43": "2rT6jXX97UeyWmVwdfaRY8oBeyuxmSVy6m3zsNDaixkYGikWR28pZtg6xCy7ke6b4hYCJZYhLRnnXQJ4YurPaHeT",
  "key44": "2AsXiKKqYhb8mzoeyu1EtQPS9rJFJHJPqcda9CE2PFc1qoELmByuzNCnwWhfdEwswdRJrNyFfJpuByCDSGAyFgv",
  "key45": "22B21hPCZww2vdtouBq3Tde1RrZCNd6anrtBV69dMXq5vwzSwa5WTjW3RDce3mJrG9RVA4fDBSRMoPf2FyfcF2ns",
  "key46": "F1RDtNqDrQcPqyCCjBmaG9MzGnM87aicjXznE5F728jCjCYJMqGYZRCWNnPK4HYiASmXRi4YXiGXJD8rKUVenw5"
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
