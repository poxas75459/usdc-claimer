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
    "5mwAZFrojRFmvb1powKwkgS7paUz4J4QztQ979qdscuzpT2yCMrQzmJXB6dP2GijmAPPAVYBVftDqYNWALBw4qww"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wZLV9pJhJ1TMX9KVDMzSj9MKTfPEmtLcF2itdaRghupx3mNHTpQQcJViLMVtvb1FqcJXuQzZRo8TQ2V3JqDim6P",
  "key1": "EVykoPaUNFB3T2Kii3PjPVZKf6FCU3C4dapJfFuiKEBrxBJGK3N8ctMPYbw1zncqbfB4bB6WsTuVCFhrSFNGtSM",
  "key2": "2cxvVcdiX6wtrsSh2ZjEGpDTTUv1WSSsWW13ZrbopzyfipAJX453nVVZ7EQmJKSKeT5qbDFihoa4Xfw4B1uwt5Sw",
  "key3": "3oocyLEvMH7Rx3XEYrVZ62QpGCHTZPmXUtcNUKZpFGgJbtTYLinjWHF64rAjdb9nm1xVgtB5pVAKzdubV2cpyFLs",
  "key4": "3rM36QZqHzrfDuPJRea97Xn7xRY6tbjYwsi62Ne8WCuvQ4VrJr9odcGAy7ZNPugrKBUUTsjKyJSUC5qgJcDqMu3Z",
  "key5": "4o8YcqhsegD4mNDiV5zye6ztJAWzofbL5gRUSghMHW7seLAuKuybhjaVH58SuwW3sr2iqNMJHXM8AYPe45kfxtrJ",
  "key6": "26dgtQVBMERtcGtuzxH6n7hBJmkZetyJTTafeQmB4B2uNCJpz3fKfUyqFm4wGsTwYYXfcXtYn59PrREwYxqjuHbT",
  "key7": "4K1VDLGp1spx6M9MzBib951txjtBKy8W3QDhCHHbpfJ6Epc7AoCiAwszo62eRkt14pae5sTGvS7GHhuxM1cB9xXW",
  "key8": "4ACUGhh4AV5qwLjwrfwwKotSpAGC1cHoXU4QGW45ZQaaizjnvzS9f5xrnHpthVj5KhUGEDxetAgnkaUV6VYRMypp",
  "key9": "3kBYn8JQnXWS7PcpvqkpjLF9iZteaYRbjxhXqjGCa6cQ9fA8PewQ58oaAbyJ9oXX161u7mrqx2obdGREXEmceJUD",
  "key10": "4BWHm8wsf5zA5o9DrGJDnKpGxUjziBcdCgkpg8KjFX53c1Neq9ds3Ctf37rBoP9B7nRdZuc1Rwi9gQKiMKRHZG4h",
  "key11": "33Mpi43CtcSFij5nmCLPpBkTGLYn2NwxP1yXkmGXhDZyprDuFFsRUuUoRjuC1z5KJcezqKoqEqDeisfvc3byxFnY",
  "key12": "5CCtS4DcWweso7wEc9DePQhr6s3vFdmr89tQJgmjPMUoUxcd97by5XBEJvxUFnpKEnJrgWgYJYsmwqwbyGBVf7vu",
  "key13": "4kvH6CNpjqZjQuL3RGMb3rLmcP6yG2M31azUf64DEFnhRdtRpDPLFS5AJeo1vqTcSxtzbcnJ7kunb4qgYyjMNQ8t",
  "key14": "58BsL5P16QyiXXqadb1XG7DpNv5jyUHUrKnSKxxwT8Tg69BKuTf2RwpX6p7U4p3aFx9iBhXzhV5h5vRPjxNJDe3b",
  "key15": "2RtneVfUjptip7WCZAutQm3Nmfi7hxu5iFFNvkitevNKnzNYhaqXQNRp9GXM1uCDMiC8hZFWrhYy8fN9VP7hLu9j",
  "key16": "5e63FCcM19yE4ApZcatKHARhokegefY5fbpo1qnxwhPt3WUyoSww5zzkSfGGgGKv5A1zd1p32ZUegFqt99JzWvn9",
  "key17": "5otDZeCZ9eizFXUoxLPoNktBrwBDEUJ1hFTSAFS6AdNSU65rrSVpim2gNMbedgknszJvBs12VbmhDGaq9gvHxdGi",
  "key18": "3cGxpjwUH6pVE3SSrMT2W8fF6bWDd9wKTpLmT54bgphhgfKFXC6UJN98XkLiQL7KRuS7aFXEy9yY7ni6n6qw6CDr",
  "key19": "5pkeSiZ8xKn8u8MoFLqMG6eEvAutFZ9CgPC4gQRtyHd9ra56QghKDfuLTQUNMFt3L5r8AmXm5B2m1B5FR9Pvtz34",
  "key20": "4NzhAddXWybLZ7qxB4s49wpAs6Dwv5LYNsd5DmEyofkTsYxdsH4VYeXvBi3uKjmrYn9vLDW2yvWf4fHDrLosyYHn",
  "key21": "5v1DWkYJDpCZN1CB5MDkwduo44yjt7SCCXwHJUqRXJUFUtGY9JgNh4W2GsTzwTsKjuTQKkQ3mvVY3gopRcaWyF95",
  "key22": "55RRu29LwvbNb6tTnTXLrk96kwQKgz2eKVfPYzMsmArBti72kK6jfA1wT1xJSR3dAg28TY2M8i8uNz1QUK9xQn8f",
  "key23": "4q3jMDvSjo7MLa47RdSXg5TXviGcKcBMZSTUCqrBUdzNqmWzH3mZnPp3ggMoAxqae3Gjwd4vfiHbM5daGMSeodv",
  "key24": "2Q8eBy6Kb6oyZ37bLBRRnrsxn4Gs7aLb5wQnA2VpZwbrsPKciy7TiBwMhKwcThTQ3WdkYZT4bwM2Q5XiF5U7wzYg",
  "key25": "3xpFqY2V5sdxGRDAHsndpWbGcEQbSeu1EPmBnGSnnDf2MKK5STPhzL3FJE7UrVtjuadwjjse3zX1pZVRUYh3Wt7B",
  "key26": "5UAudhBFWRqnCoj3eSupoQk3FRXTHp4pTxSW7qyZ15STqPvPLbWBGCgjDRYg1bBqM29fBRSBAHSYt2u2LU1RKjaj",
  "key27": "55MsDZEN2Da8pFXnsMivrUJQB1r6JvogUrG6xmLMMWshmFf5qGGewr4ydjoBanfDhoqCAe4kn4uuL1Rv4RCzfn27",
  "key28": "3g258TMNSXhPhxttJLBAMPAYUfA3axnfE4ZLGPs2AYSzxhyhbj3PvSgqUV5WoiryNzzfkXetfkCqHn5cmhR5rSr4",
  "key29": "2DdyhrsNts7EtUfVW6ZbKBvxPzDkYFUWkZLYr2zEmb46LM2EbdSPFmi3V8ootXPpFAMmgbqAxTWzHssC3tMWgSiz",
  "key30": "wNUwHxtp6b48sqfNUsUpKsTyocXEFsnWm4TRvSj3nGKDTt6tmeHfW6jAUXVqk52JtgGni1tJLqdfuab74JcuFjj",
  "key31": "RH6qGekN1EJ9DWKh1Ckrv8t9GZmpSNZ8NnqeRVbjdFmQsxsTvFGu76oL8Jdcceta6ab3fMiNBVH4Sg5LRXMf3CS",
  "key32": "8uPDZifNTGewJ8Y1ZXmPpg4JjsTv9faFJKXKmf3cADthWQKBMwJxoMXC29KTNTHATd7dfiXr6cpkNAiJ8AhRt1U",
  "key33": "45kqfyLK87Be2WsQC38JZimYeuBTnh1QuUsTM2h37uqb9VdUnCUJqUMWdZqpkquxw47qmbGxZTr9xpGbSj9XUWiG",
  "key34": "2c47tXqaExkkR58RuoDCK9VGeGeb8UAJmJrHW6vMTG3VckFAfGbiq6VnwhmrnodQT8GwTsqty9nwCGMJ2acjCVvr",
  "key35": "3SLfexz3krLbg8bFceJU4Uz3hzEKhktWS1hRTYDQtMVDiCtbZmiSBzPJbk3FmnJdNfUex11zyKXc2EY2b8QD1wRW",
  "key36": "4ZbjBhyULVBQ7Qep6U4MVmqKUrTH9THF8YDcDTPj1ogE5EMPczFhuuBxCyL7vDGSc7NhacM6omEc57iPWggBAvkU",
  "key37": "4bkybhAD9CV4Fh2DWcb34uAu4vtAmrVvasi7KmGmg5TS3MirL4MBsWmir1T65WQgb93KGrKEKZsaH9SSUgu1aF78",
  "key38": "JbVB7X8qLmSF6m5Vy34TDZCKZ3WyRTeWDU32pPqjKW6xFAHzpvdicLeAbLvUaVJM5KBtMRsW12KmJDcdtyZ4rCN",
  "key39": "5VWxo29zBC3vv77G2Z7dUhbFdw4XpLfZiSw8fFCn85fNsWVKxHswCQsWW1RFrFwPunAkz64cxrmVozoWNFmrkRnh",
  "key40": "3EXEj5S7Xtcc3eLpZm4CmkmWe5i91yeDbD9QrjQ3HwhHsxFDWfSezxmnmhGa9v3b5YCgU3VmqCVZJVXtnVtLpyAg",
  "key41": "51zbcHBuUQuvnjfxJ8t2p6LPtDWp5sZcddSHavc1X2QBYfbPBr7q65BWb39EbHrarGTwR3iU4fJWX2LB1BzBrUjx",
  "key42": "3bPD5aeoWb45p8feQumkQQ9Fukmbx7FphAuazchDqpuKwCpunV1i5c5kMuWAiSrMQutHdH1NCtDDSqpfYmmGfnM8",
  "key43": "4o2NZgyXfj43FHcncLso6FNM7xdtiQXZDFPomWcpp7NTaFs27CSrxJBFhNDRfySV5b5qH7B9dUZwWzNz1a9UZDnp",
  "key44": "2S4csEaVEPkM1JrVH8TE8jwZ6hboLJQbYW9zWiugiwd67udLJgHy5PU3uB4WTSQwo3J5UiQBiY2z9BMbSMFVmZn5",
  "key45": "2M3ZZK9ZWo5nxqmD4M282sr498HQHoMe9HdsCDMhRRnkXiBNkUtmAJddDy6s4BtiLb8TAssnnUYNk4yGwHuHhxwa",
  "key46": "2ZJeVvzonyL4ajcHJ9jvEmrCiETawDAAHHwRFgmyCyUEPEMY19Kurisg1uJLsGgeFNx1N7W6wVbSSkjptxphp3Jg",
  "key47": "2ntNTF25p7E74vdm9c7XC3gYrAK7V9R5EqTC6C6Pcti7Pmyv9SjDXz3joshnVPnJePZYPo2x8bksDykeBSCAdeaF"
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
