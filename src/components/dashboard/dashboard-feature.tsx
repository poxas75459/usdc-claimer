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
    "2vEKXih7SoXpiatrLyWCQVen8CG2eJV7jB67cyoJ7ECNtxhns5NnPvjxCw4p17KkkSgEfs7u4HyDiVipnXK3nETC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aAPs7bHWhJyzBpcpgjFYAZCjs3VgL4QcYNUjja7bPwaJtE2LwaUhgHA7PWpRecaveqrAHifohKJqyiK4vz4sfPL",
  "key1": "PzuhUwLqCT2ww9ANnNyq4tWKSK6iTDJH7pbctQJwzFRc5rNpf1qEmqN2s3Nq25MRzWMm1Miv55xDqsQVqy5p2Rv",
  "key2": "4JKt97BxxUiv7UnwdDKcuEF8c96aFNq8C8qAKD4ueZkPQia6wf14Yjcx4tvwDfAqVXtQSi7suWq559LZ8bfoPhYH",
  "key3": "2RvkjWQ5pFFrbRurkJRZ5PcVKHEpR7LkEVKKh9r6JKTVzArbZF3gxfkbztPbackHNADS7c4zXkLnfQn79pbeee5F",
  "key4": "4eTEtdcDhjjrwN55unykGdAju1wtynZv5XDtvjHF2Cxnr7ob1STu4daPysm7yvy2nPBgVunH71TPoykzznWyLo7v",
  "key5": "EMMHtDMctcPprDTSXeAVwEVL4RzEJkXHNDKGiSPrWztJkM5iZPrtgsC4n1W1JkngHzVvvUsFHn5rY3Rd91XuMtH",
  "key6": "5kgyZSHrStNjdus1KGYGihZNV5W1UcFFC5DMMM5y99ZzAMN9hW7uR82PUQgpqGG8o6uVvf13u32r3BFCwCsKf8HP",
  "key7": "52PVuLuMJyxAq1PwkXPKMawttVMAP6NtVMAqC5fdpPzwoS41vemvEqe1mgybo9HmAGndgp3FqMRY2Fjvxr6S98g8",
  "key8": "4tWBisEhSjAwGrUJ6sqBb88e8TYQM9GzMe2Sgc8JnGMyiGEHKbnB4x2DuMd6kMeqVBHg6Yekn82N1Kz22GCjFrKe",
  "key9": "2ePmscv76caM5BSt5k7wp5hgnQR4fUzGmEr5UXNYTbBgmWKWpAoBBhNXKktVpCUMZwV2gry7WXXou8Lv784TEq99",
  "key10": "4vw5hdZFdkJRynYw41VL34eZ9REphXUAKjA6LaYuvbX8HV65ZwF3f2L75nd38U1wzmhFKZRRQ3RVgVcVmtHeyH8N",
  "key11": "43zcxXfPT7SmMSWZX355t1tPqka9jfeXxsg293qtokSnqCVpgh6xffNm8bUnGnyL57sntc45rp6xBdqjkpAFSwHV",
  "key12": "4VnZjy79u5mH7vnca3xGepGAGkSNe1sfyC7WkSTCSRTDs86s9QyEm6JqnpNpZokVQH2r7MHbzgxdXLqoHLkifnhX",
  "key13": "4GejmhJ8r8HkJDyLqiivnFvbGV7kD83kAv7jGeopgw71UnsBhKfgd41FAQuB792jTogsQVamUBi6ZVhqK5SXNaPu",
  "key14": "JepNFZ3i7fmzy7hKyEYnvLKmNhGEmBsnZtbCvsB5GsGGrPwvS87cJtoXHHr52kyUtjiU8KdjvW27guQ5d5fET3M",
  "key15": "2D5be1W2BmLjaKQdp7NwKmPhfrY6hrWrTSK7d8fK7as6V8Mx5NEfpxnx3WFwEjErhuJe2KQAjGMywdhpq4o4nqHv",
  "key16": "ZFEPcKt7tcfCSk7Z5F6Q4R6p3KGrmmF6TXNg2QiJ4X2gRW9Fuz6vVykRFQQiLNnjmHgYQ2dBu3Z2pWRSrFL3uv4",
  "key17": "VLs6LPDfhu1ut6DQJqF88HeZckemvbH5PMq8jdBQc7uPQXSrQjeSCv1ZkTxvw1Ra57FH57ytt7dYC1bnzjfYR7v",
  "key18": "3mMpaFCvDh84g4Ddk3FseTEBzJsrc7zUmw8s3kq2fYfZs9ZqDb6L9FakRWLMLAkuNVC2jAuG7EoEzr4FU8C4AJaA",
  "key19": "4aHVCTnNhVj98oXMepaFmpBNG45TLaqb2n8kgNBQParhCHHVZC2PYTiX9xZhzGPtcbT2vAg58ke68St6WcR6eqvC",
  "key20": "278kHzM2MyNubZCxLGnNmPBRimY1F9s63SwGX96mNcyGToHcD6KrDVx2oKkgZRRFn32LLVSmfVbLQ3t66sR7WKM5",
  "key21": "5dwn2kWD2nVfa2sSCWeAnUKwkDf2xGA1exqDdJmXb72DSh1Y5gsH46bGhqigDERAskSaEFGVGAsuaAnbTn9b1RBU",
  "key22": "kTJfeRbLXdJucDHz5HwgDjXMhbiGTPhKGtrzV6rdpCkG2LtcUnh4frF2BU3tKy1bNtnNuXmT9KZqe8wKAK4XMwN",
  "key23": "5hy75Ns9TiSnopsAJUtLjnbwKenAo5hqGeck1VghnxMR28mv35qxXgJmjWnR1tWG7R1RCREW6UkbfGmVfePXmjzr",
  "key24": "38VApRHhvbbvAAMcK7bRvYHSNdLxaaMd6AyJJGELrvFQ5PBKGMRhJsHbEZJ9hajmrXNBuZNDiwho7cr46bvfgLPS",
  "key25": "43CnjpGuvxWqxuiPZS3REt62hWZc4CKvf2T3cS3rUFvhJD9zjVULjxoitZjJHtune3cRmEmC914nBGY9fjUnJ4nv",
  "key26": "4hz2akqp5cTwrVc9fot7Fm1gh56TMkG6n1Sm7tAWnNmmwePiQHYpcKKk7s6BG9YcASaCR5gCyZCAomWX1gfzmdoF",
  "key27": "2VRnTLf9Ao8BKJ55dohK1JVhCor2Lawvwa9q99Liu77NDZ67qktbs1BHroJnBcgJkAFu3CXWrx7ppAQW3VyGg3BY",
  "key28": "5wwkCm1LBjjMTdbcaMNJLUnxULXwwBFpe3mefJhn6hck3BVEgmaSVuuh5UpjskAnXe8qYyMb3UmcRANfauWzcBfE",
  "key29": "3nx7GYjpT3Jj2uxoCS5B5GTiuNsqcjmHo7ArcyRYSEwzj8c2FyajGkGAxki5WX19AMkbeqx1azHJk14yWYkZhiNn",
  "key30": "piST3tHYrtPeZociZaDwBRuBBVB8isPw5VJqdkmNxAJAq3ND93J4aUN2wT8GTT9w6p36Rm2PGN9zUKokyhvRbYk",
  "key31": "3QevGeYZCkUH7YjkkeqXg5NEJHCw5LM3YCuAaaWV8KuRC7asW3BzEK9U5rF9GdUmu3rfzhqNjo1RQBFt5fCYjguk",
  "key32": "4k1vYNbfV56bqQSR1F2GP62S7ge5ef4DhE5eqqVQmVnM2H8idypb1CEdPU73Tm92L9Lcthyuq6PCrqKkVMFJg4WG",
  "key33": "4ZqxujrrNpXVEmkUrxA7Hu5anJCw5izgrNvfkdZayoTwrP7S3F6ZDNN2R3s16Acy69rnEcz7zAw8ApUBH7V3qi6h",
  "key34": "76XP4FwaPMcksro9SXNjdP5S9uJuHjN4XETGid1xUHEuCD1ps89qDW66V7Vw7M9kZ5BRH1E989C6NnWKYDQExb9",
  "key35": "5xjZF8BBnL5y334RNWjUhKAaXjZ1WGrNzpCWB1xtNcfcBc5Cn284BkYcjBwvmJDEbKidvPQsqoDNQ28RQnWb2Vhn",
  "key36": "44xxY6XMSuhRfuD4U4qqMsMDjt4X44fkQm7bVWhsExfk4wTAMVexNNz9gdJCk91749rUEaCTa79QX14YxATFx6sT",
  "key37": "5GvaC1g5BaU6snfcHq1FPDYLNAFfKyVbADjSrQtKzkyfXYFXBJH2UhonfG4xzTNa5gSY83d7n4t7H3xaRK3WeDy2",
  "key38": "2xpWbUCTqJ8Ns65tUrAnBm5hHUX1mDAvBr75Uf8msbTmWfF5PbNtuB9ci4PQtvqbKqa8ukhi5mgpu6wwCEzomCoJ",
  "key39": "2TiVakCFvtNnNTTmeJusp6V7AxZU8GVpgfa4d4qUCMb4nDECEHo6GPPEL3bZfqRJMYn831LveQ8pxrrnrMwo7fDh",
  "key40": "2KzYQh9muYyfGWdtZuEruZHyYd4Ym9rsDx8eexjGGBdsDBmiVuMHvopJsUSa2GVrWn7MTRT864ectR6mbQpXyKha",
  "key41": "3TG24Lp12zrodjcCmJeQGaajVWAnhQhii2GscRNq38QuzkZb5fY1ffCXe2VmRJDU2ciqqcv1LPoLR6ftRa1XH9Ac",
  "key42": "5c7gydMk6AApyDaDD9cxFArbuZ2FXEJ5zumxHEZzcfkzK34K93a7QLFUXo6KzWq1MvzRZYQmzVhaoAoGhF2X3QjD"
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
