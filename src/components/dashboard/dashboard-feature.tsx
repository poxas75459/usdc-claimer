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
    "AJidhaZTRsYpMawMPmTAE7CoBEwPewct5yVTEdZ5KCRtbZHZSKav9AbPGJu3hGDghXzsWdVyjfVa4JCFpSjN3K9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X8FoP4DJFda5RQTAnEUZtmMLgwMJpFssbd9n6WdVuQVdvpVVzzSUXXgurAsY3NAPpFPWT8d9gMrK2jYi2m1LFEo",
  "key1": "2wKa41YA8VhgvWd4VMU6h5n6f4yyKxsX6PG4vvozVLi2jNFXENvrNTw2e35hzFsfUho1DHmxbhWTnCbV7DVEApC2",
  "key2": "avyoSpqXB4eU11GKXmb8yxP1YUdTR3jSiX4ywUSnoho83H2BPnfg5RcW1hi2sDpS9nQJkc1BkHpDRem3xnm7bE8",
  "key3": "5nxSgxhD6uz8WRkEZK5FPDeeB6o3Bm8AEweEBcFQ3snxYngp1wysG3WgLJPFbzQzkn6J7Tjswp26Brkhy2rcbUk8",
  "key4": "4bmdbcuuf7G6TuQKSxmB3ADWETxpwfRzpqyepi7LNFXJKwc2ET4zbakkMGKbcuuuoUik6zntyCQGqkjN8qD7oZKJ",
  "key5": "5Z5Q4XKkbUnk2QaWL7y1FdvUy1HfM7rk6Sw7GUKBZzgmWqradTjjvahCZ5ng3uiiuUdv7eEJHaK1cMahqoqoWTMx",
  "key6": "4cTtrH5LMKXWcHW41YGNkC4fFVAAkAT31RhmmEVqZK31x2UeXNRgL4Q115Dv1b461ymgARP5rqJEpK1WsB39HXtp",
  "key7": "4gv5YboofpVoAg6ZmRcMBGrid71qGAY7cehrvg4NEQWz6qhHVSnpvXrYkn61P969NrJBzb5kTfi9U3BrcH8Z4ect",
  "key8": "2ogEofQRP7XRuWSzvaMaXncVRZ3AUE7BYb8eJ1UaAff6XN8nyRLzbFFARnaiuh1tz9kG4qgi2hfNBMrf1Gf4Ee5S",
  "key9": "3EUTQn4sA3SVZc4TWaSKSFogsnTRw6dvk8CYTGkPXvSrQaZRFN3KwAjWhmajtC6caYA8pEAXuwamoYCdgerNPoZj",
  "key10": "4DGqdHDtpGsshqHPPe3SRqdKC5gwdRvPeFgUNTv7DWmAu9LfrvDP6SpPKWp33Dbs2gJ78FpUWAx6eoXEc6uw7NyY",
  "key11": "efEn8VyXJKPJPvAKNA6dYWtVnX9deZFV4AmRiegbxZSMWR4L1pVwMdvwL1K3GvL6PD1SrWGm2Rh9jGJRVPuvFdP",
  "key12": "5cumTz9sYnE3nWcS9Shh8y8Uq9BcfgSY6XEbvDQLiFBZUb1FFLQa6JNJ33rcvgfG1hkrRhWjxMMViw3RG9BwmiXA",
  "key13": "5j4jwBCgrRoVdiueaxLUSRQTLHAuW3S9xawjMRRdRckafhHkceKbBdvqy4WCxp4ko8LVueCQ9sT1sTsGWtmBYQ3X",
  "key14": "4nPZqWged2VHvnyD5yghVuNaTaKc7tmVBPpphvDGrv2H4ESUxDhDmnbiQGMrdmizLGDAxyjNCeoZbh4Bp5y3KxNs",
  "key15": "5AQLFtBtweh4c36WsTpx7aBQQ3wiAVQgYH8exZBB7aJtP7U8x9hCWo2ARGUnMkr7VdoAh1SX6tbcEkkK4Fzx4CE4",
  "key16": "4cmZee1Jf8REMYwkc9Uit5ciAZkyAhWDxzWSy94CHDjCFrEh975uvntA8xSrZZRAyo5JboLqMLcKmHrLQDvQvGEM",
  "key17": "5yx2CUetKC1UahCvn4QL26aQTerAzg28VHsRSnduki7iK8MGpyNx5EVE24E9oi9hgyXcu2kRBnz5ZMzrDJbJhJjo",
  "key18": "4kBi9aGJdZrSgW9cLzTCiNHZQ1YJrEz1prz2tPBhWuhYT6wWoqAHizVT4iUh8aL1971DyUBsz4z5pEjn4bcbuZm2",
  "key19": "5rUhUQVhdHK9yoQgVF9wsjZ1yBTwQU5kHnqZsDsKtmR1HBpn91EWGkVvYu592wjKPzAiEsdCiUuKkajZMsYjLNKx",
  "key20": "3mJSp2rWcxBdimK5RftmAnUfW9HkjPU2Abrd51YdefYpQ6QUbVUDw4adPVmKYAbF7KGuqCDL1mpk37EN7VPTXM4m",
  "key21": "3wbfnkoCbcbieBGbkjNprAfkNny9C6DKvgooYk3Co64QZv9yr7vtDazjHdKFoqMDngJpEXjEZABf32VLM7BF1u21",
  "key22": "29egNg1jvAU6MetYzdSqPSuMchbJK4wpjVKAqVQpEoCjxRpdCK6nq4uWwfU5gbh6ShQH93zbMV4nEpRyqHJsYMpq",
  "key23": "2rgBtphoHL2LeJEkkBM5jGbsdBTZFjQFj6suMFskQyoKwbzFJWfnXRiiBrbw3SXVnEPx2xXsQC5tNtNXsMq6NbRn",
  "key24": "39v54GK6624d8TEfwDKtS3wyckhZ8pGm8oipY1T5MUiYtEbiRHzRHLVECVrQWzyt4pvyMRJ6XfGiD2iMXuWqkA86",
  "key25": "4w3v2NAYvKiXT1hFR34vUw3qyKgWtSLRpQ1ASN9JVX5Rxh6wgV6PbUnsPFQmqcgeRwYLY755ftzqoUsCzDZ41aJc",
  "key26": "2xBirtdVTB5CvkniucubxJLKdBnxCQwy6otDx3eghSXfrYqeSnKJdGZbXnyJ4GGB36byqs8PzT4UpDjzbu6kKXPD",
  "key27": "5EeNTcCezUdeAWonkDadjm6ShVh2gaLWhLEUGeJqnFUVzCWSUH18RJAA9h8QD1f1oTrCKkaK993HY6aLR8w1Tk6s",
  "key28": "2GFx12yFrAnj13VDgXg2bwniLPp9Muq93ZbtFPmyBo26ruPRzruowVoohDuu4kYuExMpyHsgFdnmS21o27xhoZsB",
  "key29": "2S1fpVFtsuw4igD3dTVWQxZRtkvrzE78NpiWD3PsDm2zddQ5A7XL9DJM7RWsiehf6N3U3PLEmrKmwgSpp59je9hU",
  "key30": "211aBQx4d1YXuPMejyBJSu8gnmkrtFjcxnmuUVqwNZKbw1nGKxE7nEDk4vkw3H4X3SFfapr2B8LrqhbU383Ec6WH",
  "key31": "3mb4GRqib9sZJUufhuCdgCzCf8H17o7Z3bHadXciNTxhYzzf1KQfHirXVr4RkzPWqFjoPMVNCVQ79DZoPY32v8fL",
  "key32": "5mvajifs7duJa5fFqneGgGKuuNQxpmAE2ZbpVmrQuspLdC2ysoerDPKMYKMak8EwDM1nv9ZRTqkkAbofvZFvni1x",
  "key33": "3m2NTzUbrZnaRYcBj2W6azEwLjtq5aoCoznwgYy3BJ8yCQ5ALDG7or5QCML7mq8dh6BLFFmpPTpYHFWLFUM6r8rQ",
  "key34": "2bY1DWWSNi9jMikCoHMCMT8KybFoEJxiBhU6WYPKNcAnyZNbrbjCjbWBWVruki3gq4migaZ65H18c1jCBCRXMfAw",
  "key35": "586ksmtzF78pFCKarnExuHsbQ3dFCEMBPCo2cdpBCqjDpkRR5Nc6xytV1o8kVT3YAHcL1He2SzPRUxTtCx5Ejaxs",
  "key36": "4ogqpSUp9d2PEbZs8cj5BXG7sYLcgBKZTBeLEo38ZVit5PQBq7bh7x6jbcTPfTxJz17PPZF7mv2RB7U4CeGgjBE8",
  "key37": "5tz7pzrfsUr64F8euFNomxKK9D7QznqbKYdhUpaT2Ub1DQrzhmFmU7sgDBR3koPvLaGqhs3aWhN7e5dxx418Cdtr",
  "key38": "5yD4gDEb2yyZnHAfiu6NYcvFGWGeTQ5MmTKDHAaBGyrzvS72pgz6YNHxRcXahCkDmWuPQe7U87BwwEDTCaiyM1Cx",
  "key39": "4E5Fbkyxuf93DbhHc1eLhTgQ6Ymw9BesFmeVXL6oC1xVeoH3Nnu3VwnhtZUjEvYPS24jBy7hzubsmnpk82esiv5P",
  "key40": "MCxkkYVc1yhABXRyifbYLNPeUq45PFWu2ZojqtJtoP94nEfTu5jvBhgF56jcWeJ9LpzEQgk7XoGob8juCLBZ4Gm",
  "key41": "B8ZtV4Utk9fjPgfNH2sySN83puoCpofk7qQ4wCRVTvFnPgDFMTwvZcyayNP5HRLg2KoquQ5mKJnhL2WMCYHZnBb",
  "key42": "5S14X45iLrfN3q631b17HRHBMMaDejQ4mm7XizhQg5CX5fLC7WUL6skMZ22qk7sLFizTdD1PZwNFewVyAh66Bo3Q",
  "key43": "4DMctxWHvSKq92f5GvsKskeVm2sW6zJmU6YvVibypURwHC8YPxPmzVLuV2Fn5gCE9vJufprmzGTph36arEqvWo9Z",
  "key44": "36hc1B1McSzE3sdNoiHFy7KJwypcvQ2hXMa8JB9SxFdRG6oMJdjc8W27xGXroDYvH5Zk2zRC4nQgoWcxVgmTvESh"
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
