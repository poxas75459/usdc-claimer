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
    "4y61g6vWW7tiM6j3UEiErHZCCfQeD2bwBM6ZB5CvQ57vAEe214wWYc7imXceLv8i4mSX8JVpKiZ3WNmi5sbf2TdT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MMbBg4fs1DMeY9t5SFJyeiTHm8ZfhrVbr7wyC88v7ASFrV8iaDmiCu387SCXKAbhaHFmhEFFzJL5Etog67xw5fF",
  "key1": "2sWjRjht63z69XERiFnCpjAcAn6nWusCeHnrCNNt8wqA8gQ7Ce59NcVS3a4yGGMYFz5JmmMLHhW6T9Sn8C8QhVWK",
  "key2": "59zdKV4bKXhFUi1wends1PNUxtCGzf6TuUm3XH48GsBtyxrgNnzP3E2bFN1zMhYvnEKNotCH6GeGVvHtLqR7xNPe",
  "key3": "5Qx18qjzUApAtC81xZjpacjgPZjKdHqmiPkTqrw6G3V1wNMpk3qA513KtXemCVE1xCKe7RdNAjVULy3Z2ZAs1EF",
  "key4": "67hBN27d2nR5tsXTUy2PvjmnFFxrvCEgh2t5a6BuTqJeMp97ivyHd5Nej6aNu9u3y6aJGCkEoYc3Yiv2GKdLfM8S",
  "key5": "3oeseXVeqdhK3M2YHE3nCKUu2LP6G48eFmtPf4NfhocCdYTD4poHXud7pi1WqHW7Wz9WSR3PpSvFNF9ARk6JD5tU",
  "key6": "B2oC1Mwj61Bd8Te6aYsb2G1A4xMXS5WYXWw28tJwewmx2eyZxnSiZB1ZEp78fCoMXGmW9WF7THznwggxGcZQL1i",
  "key7": "3D9Xb7VHdfMLXCmo4L2HPJene8xCk4McEPbBT9kEuubifCtVqZSzVQboumfPNQo63CSzZtHGsKZbib4W7iLegujE",
  "key8": "5YqUReZNnJUrG7AtkvfhpvbA61RaGMk7yfbXG4jws2Hf183ohwQ3wyFh4ZC35Q3Mr2GCnbR6UvgLu8sCDf38NP5d",
  "key9": "2SXtTNFNeyGhmEKykHU1HYVMwQZCTwUyY21eYqFjL3BVzNGYTfuBJNgeqsfpDeH8yuZfpmJmhhXtAWYYJu8Yzp3g",
  "key10": "5DzeNJBS7AkdWzzxouWw2CWnastRHiMhq9FXED4x6YaCLFcyG9fPYLLp9TDKQrV6jt61bUhM3MWu3ttaUJQFLvfc",
  "key11": "24PBVRKLmmhRiCbPcDoEAvSARBfX8ciMpV4YkphgD7XGeSDn1mRPPrix7MwRpFGNvkdgwYLFEeJmN1AGRkf4PPpB",
  "key12": "5VDCU4PRXRmM9xzKe1qmh1MNm1SVMKf3e2X1qgZLTGfRUEfJmV6m4hhJvgH5TpfqASybPAgZv7QCfDTWpwYpegRC",
  "key13": "5ZdTLeVUkX9TytvGaVMp8QwLkcYbBcxSjFE59CtqFfha8dzBypQ5BVSCWbjQBWV8rrHxZPFq9md4xi2mW4m1narG",
  "key14": "3VJiar37EsiKdeCycA3kwyhQmsfbpPQjR1BmYkryujonkfyx9Gb8cBGx1kusJyRDhnKxKpmPecrj2Npn1HPioeG6",
  "key15": "4NimsQU3ywW8C3x1qSjMBFgos6WZBCretLVwReci8qnfjk5dnz2CZuXWo8SXYfJ9PpjbFokybJX16oNFb2csWbUA",
  "key16": "65H526JfkWVUKTjWLfbGegda61ANjqdNjKffkFpLxfvhxjdsDje2mvtKmy4WaAHP8i1hC4Z7Z5crwqEErJKxfqL7",
  "key17": "n9chTDsgv6Wfbo5NmAfjpZwnTDDMsbabEqMLWoR2AoQmPD5u5Sjazj8HUW5sNMUGDcPdJyEi9ygY5RoqZMYzfU5",
  "key18": "5H26wwdAaKVRWZTtiL8QFrFWArt97Jz4FxWscSFHGrdv56Tav5xNZMj5GG6vfZQTJKfGyPp2rNDDhfAMZod2Fhr",
  "key19": "2QfUwNAM6FR7hDQQePxonymE8F3tMRNoF155CB5MPZwvNkCNEFMP7W8B7vaqyudMpQYEukAMucngruJkRGwSCDpV",
  "key20": "4nTp5oMRm1HjWQTMgJnS3SHCcAJpwShn97h7NdjLjeBgavA6tU4Aj5hQL1HE9cT4iMefohaDeR2LPfKnBFDWKzuf",
  "key21": "4nApqpPWvrLEkLFQCTuEVSQJrkvibAhAH5BtyS6d1G462tfo2sQ5nFKVky5WKqASevv5iWca5pnkmANFqBTfBJ9S",
  "key22": "2jfWiueE1Zs8B83C7kmja9USm8m65C7ZG78jeXbih2HJVuSifDSUzVrrFFUfGh3MozQnoHzJPuevKmCtK1aZ2JsB",
  "key23": "22ozQhVwXRCH6y9PbZZomJciFQEvhKoF4yxbeiwTLGaXdDwiVMvQD1JAcTLMMhY1c8TzENxE5jMYS6gQfTd5Ns61",
  "key24": "34TBTTvehkKK1fnfAobxD8Bp6AchEhAdJcGSbTzyp6XXBgvXTbqj9ePyAzYdoRndAmeVioHJjNZTBJvFPCnXedM",
  "key25": "xFJAiwDfhSUq5x7DJMtdpzMZJuYqjbjqTFHRVzsnomPeyAr7f1s65wd1BVs9JFzWTFbjeUsrVWzR1HgKZrKE9ai",
  "key26": "2C3p53tYXUvuWicireb9uBNF8k1TgLacyBFQ8sWjCupFixRS8MVE1JBqr57BtgiRkC2f3Jep3h5GHEyuidBjb5N6",
  "key27": "4N1XEEsAG2duxXCryJkj8BDwFEwrDcF2bL2PPTxda3w1s46k4XWR8v3Ve5g934zPgF3YP2qbLpCxC2jTY5oWu2bL",
  "key28": "2eLQb6giWzLzeqk9H9pfiNXySdXQLkadxjbB4yaraouLxyQdPtRFe5au6A4TF2uRX7XPSxMBfWTiMKpCfh615fVq",
  "key29": "jY6oFLzajypotV519RZpQxKzaaWPNK5vauXBQUKSnkdiosHSB3VdzZsFpsS3hcCJHHfF2fFV1Tt6z74T3mny6qK",
  "key30": "31FwmTx6EaA9hS8qxGotSaG85Na5HjWSqzcHyq2dyC1rUZkus1h5tMt88yc9kTkn8D21dwtqCyfri5Sbz7f15Sdh",
  "key31": "4iA9qc6kfkx67hH5MT5zUBSceTXAvEFztvcgtsSaqwMuWmLDBWdn9xtWUmZvacBM74qjAUN3Ca2vVDMYRqf6L2Yt",
  "key32": "2hJ4ZXnSk5yDLUPW8t6Znm7hdpTwP88wF3DbpJtPgdsdfYuzjyA3w2yqAPV8F6Frd4U86TKoz11bir5XRDx1riax",
  "key33": "2fjjtiCB75nTLARXDSQzQZLgbmm92zQeTDRQiWHV5tNAvLqvMwSyj7gxhhoyyMRiK6w11aCUDtU93wwNPvQZodYG",
  "key34": "5k1gnTDK3iLy99Ti7izf1npZhHFYMAdiZtWSnTYPvAAvMTLaAQQJoWp8FEzFCN3a5RkV9dBuLcB9ifVKxQgpKfYX",
  "key35": "2wR1Y8y8iyygLEkYyzQz4RXn2vFYk4ePwBhar1zNDuyWBSy4jx5duP2BecDEQ3Ems95xLJ8btrjCGk8U7YQGXpgE",
  "key36": "3c9LrYYcDNYjwvQ8xwu25FYxCGZXFiyV6wuGJdJNYfVMGizrLoc8LFmnFhYZnAH5HByPpzJvJnrGyz6d8MpDCkj8",
  "key37": "2LahDAvS4rAiEePHQCjm6FBjTXyMWDcvsGmEEpMJxKnPYAZSZ7TRjo6mJBZR731xbj4ebXby278fwWLnVCb7XNX6",
  "key38": "4YsWDAnLJqvQFeHAPhpDHShVk3fVCnUV54jTYKAK8AgysUhyiriMMTLxrXQhVJaFycghwRLe3398nYekMB8HzXP7",
  "key39": "3iuT53N17uPTRUTTngVjb6pZKJNKj2QcsL3P4xjsUp6NZwVYvGGCfjWnErZANELfSpoUWnKBACDd1ighiwoDuBDM",
  "key40": "5Cf1SkNEhADToLi9Zk6dvZkDHhetFg8uk2hweeYVi5E7rjrnngA95tq9bvSaRTVJU3L1vrA7DMWCbE3jy72CsBsi",
  "key41": "4gL62vjB1SKaHzQKwn9HAfgvQ6cHgXDrB3WhNnRHFvq3jZzhhjvVx4De71QKcQvq1MYcspKiFog2ptMgH5BVs8TQ",
  "key42": "3j74zdc2eppQPg2J7EgYYqxWBUtVxGCh2xP3XnumfU7fW3RzAGsoEDz8ehtTm8jsfCLikGutTiDWj9mXpUkaxkcL",
  "key43": "3cUxRovgV1Q1iCwFAagkjA74BbWCTQMZSVu2YufmvpEvctDTqJ31jtESGarGfP7tALzjt2sT8DDoJ4mDdAryUqCH",
  "key44": "2QhCDY2guFnyiMvrmWufuNYEYNHi6EQgHNmcXbG8Afx9oaBkVfXVmmmi4VytivjHzWA5C7n7bm3UhtG9SgoTM1WL",
  "key45": "2padht6MshWL2CkAbJvevks9AYEJLmKbkjbPRqMDvE7dKryy71FrpprGr4EmJBZswZa5ZMaTyPK8PpYXdSTfsitN",
  "key46": "2wjLNVcjRPRTNvojCTQVbRrfNNkNfBUZ9kJA9WoPCvvnvQTS3c63ESaeSjpFbh1n6KKXtBcTL2PNPx6RFnWNMbuA",
  "key47": "3DmCWEn3MBgEC3pWNecWHpR3qmhzWH12tshs3n6EVMDGNUX3vQgYnGNi7TWnNT1p63F1UjPdKKGU5LRixUgsPLp4",
  "key48": "5NbW87XA7gKsiq5u2EtRsYBPSCrr9Ht5AYodh2r8xDMSmAai1Uty7EY84qMvZQyFr2Hgd3P1bTdYNJGunKGd4agc"
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
