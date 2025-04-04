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
    "4SqmWJpDi6QR7SGMETAtdFNAMCkSyNafh4i7JGxeCWZiEwxss4bXWnNrZC4C6ubWSWcvgRGRzRrzjX4vb7xZnd3E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PJ7GT9EVXAvXB7289z82d1vrpigi2CaqjJQe5Ry4ZpFrnvC6F7mtmBLxxVTBjACx5QU7zSzPTq64v8UnGXzyhtM",
  "key1": "eyu2F6vvzwbNJdXUpHvwHQtFxfgRNWCqgF2hiWnxMdTr5L1CH4XJjfHzGNoNcJnmNQbY1ax1p1nQFNSQ9jFhpNQ",
  "key2": "5FwCZX9ukT99435ewotBz8cf71FwPBUVcPT5h2evVRbst552UchjCEdetWicvLDL1yQ83vmzZwwcWcJhyKruWjgu",
  "key3": "5GbDcBZVDbGQxiz4ud8kR1B6XFhHjcmsXmzXYvp1yQMYwsHLgwiEVqEnmDntDgijqgDiMGtBJfoQsQV8CjgwwWof",
  "key4": "5tJbaXQJKwEPaVfkcnn264nXRLThZoZJWELLkQyYXU38F3e1pXd3WTq5xmYedZmBjNAVYB8qpWdXiHXE2nkfnE8y",
  "key5": "2YB9jY7piTCjEEmDgpnoxqX4KD4b8e85RixzgeA8ZneZumuCNAdYPsmygMFz3eUzvridQs5veeSYgdytpL96GSri",
  "key6": "5cZS6uiiXJYLKYGYAr96dFxJB2nEMBnFSoCRWPwus4tysLk4jpKGH34pLTwXwagznVz11rkBVUJ1aJpNPpmpnxCa",
  "key7": "4e6NCQYpcD18T8fdAyqvu3Aqf78oa89yVLaVTumQD86hBS3arYDydJHDjhU4dT2cgZhzNz517rxQ31X7GCvvUTeh",
  "key8": "36agbczxjDwgbs1TTkRvtkRyyoryX7TRc5P7cQFksj2oL6xobGnjMtnM69dewmyZmJF27nzfVzv2JtuzXWrdpus6",
  "key9": "yGAinxLnYUNS1iEuCTyLLwXfK3iCYjSMzLYZPQeR2W78k8bbcU2ZLLrc8V4hA9Mj4Qm3dRKGrJKSCmrtNeNkQNf",
  "key10": "4cUVyEEzZWWQo4fuimCj97HfCZtw5ZjAHSBWoHfQgEyJ5fzH9LRqbANTXzqbsiRGZqpeMv7uS5um7wJALpPUdgjw",
  "key11": "3AMjXb3AfkWef2c87DqHC8NwTdw9SC52d7PGSWAXUKYPQ68FYgp2tiYqdJLyJ44ygW8tA486MZNj9QtNsg28e4uK",
  "key12": "4ZhzuATAyyxq1QrCzheYDB9VEjXyHomvsEobevg3JXNFXwFHfQsiiCWBt1JgGF81UorXoSt9NNcaaK2yfKgjFpbP",
  "key13": "2NvK1eBGRqeqXiBCkrFk7dxpFCVpQYWj8QFoJFGBNdvVTiLS8pMMMknLQZEbkJSJ2YczePCVTtwtW118U3RQH6Jv",
  "key14": "XTZVjxaNB9LqcokCVzd6kBx8u4ysT9Bd55ApfyNK5wEL169TgM2aDAjcQYwxFA5Ax5Cpay84n1hZmSgsXGBfDiH",
  "key15": "Nak9xePi2J1duwZYxkg3VBHSaDNWgkoUKHb5a2nswofFjzb6BFuGyyHnWLen2UH3ic4zvpYFLtZnciGT2JMMQm4",
  "key16": "4etT69xy2LCd5zKwj7sCN2jLtvTPRsBKxDaofCoMqQjtk3ArFwuhd7kgbbz3tw6DyrNT9CpK6CFN2StUxBXNwGCi",
  "key17": "4aGrrn9dPtPSKmvEZzybTMXhQWTqq7buHn5gnZ1KqKQSExUP6BPGmpccQy9qtF5FGAUL3aNGoVK4PprLxBeurqK4",
  "key18": "2LKXcrUATWQYpsGL6fg65uoYaMP6jKwYSwGsnteS6bxJptnzpkYrAedVReZw8WScfXEW619GnMWSHVVPhUqozamx",
  "key19": "31c6yqvfqhUarnX3tWkzFKQ3QW6MqTaRGJTNeaCtoTqXxudDPSgPummPnZHAo6ZdHhtpeHPnWEtBbi8B1SCTLimo",
  "key20": "2rJFWYfpo1WtRi5zYDh8YnoEkHs2iCg8qVhRsiZqcgnkGCvHXSNZdGoNkpFSpJRViLM4jCrSsG5P9H1odkNAs73B",
  "key21": "oxWyyaz8mtYyW9gtxWYqaLF3LSw5zu2KvUEReG3fRpXY7kmAHFvibmnV3gcfL7YeKx3A3VqzisTzoPe2arxYqpK",
  "key22": "AjPnhNHPkrAqtDiPGQJXRRyt3XEbvqZuZjmZFxX3a4wkpyerRHxjrberUtXRvGJnmMda5bfSXukZQn78QYECAAB",
  "key23": "SbiXPMzMoCLkwKi1Bi7cyDUfcJBiFuQjn3feX4LjfohErTirVntR8cUQfTTPituoQdnP2rbqEN7ToDs7kBXUjfG",
  "key24": "2PbRh5vZMFmWuLjqL4vwZSqKjwoaTGVzV5HqhSmTdY46XsfQNmFCj6hmv7exkbqoSW7dgUovQsJuyG7FotUaGFeN",
  "key25": "YwxCBEbhaGYXMJAFmVu8qgRej96yNFFNgJ6dyQHt5SNDtfrypUvuudWsFK2xf3LE4TsHo4TsebLHbVXG1xNfoMa",
  "key26": "2JrdP3sdNBScK9tDJQub5Ci189Trsg75ioPv6AewnsJDNFqov7N7eaArgadhvn1FZVVQurmsytztks7hd3V4c7vh",
  "key27": "32bya5pSqRAK9wU9gSq8HGjdezQMkRN39tXpsJKNd26zx4i2f1U2E889rx3AVdt4jLJFoUSv1Fzw7gy1ku3qPpgq",
  "key28": "65aemPtFoqpdkhqH4YMVAj3iZEVGgei9aMKMhcpesD1o8FyFWMvDzwJ8kRr7opWo5zzh1nQ6JPJehz9Hq4APt8Cu",
  "key29": "5omvu1AFC7VhaKnwmrw1D9WfuBeWK4Eh77gyoLJcyeQZDeg2QqZJdwhLQp4sKN1jc5LZtLEwLtJCZTSSzrfFZVLA",
  "key30": "24YiGtAJw5qzkrbW1KMWxLyXd5c8pKhXLZLw9ePdFUis9mZkEGKTiT32uhRuWS2iNcjewR6jPmhPPNMuF9dTwod9",
  "key31": "5iHuf7qwnCDeq5KnwdHnRo3f7Evsf3mHLtrpct4d7W653czh6HEzDHzsmA5C5MgJBM1MgDYiJF2uH2hbNbz9SLS7",
  "key32": "2AFzzQX24bu4vwxJL2eKFmLGfy4VtsfTPVrYgahwR4G7hYgqCMK6HXrGYRSsrGx81vZWkmep72no3cvq9y7mgjEy",
  "key33": "YMuEpxAeZGekTkUNjiu9fTLtDFyq9cbet5CMjuvRZJbZkZfEkXSXoBCpAun2iWXnL82aufAVC9bJjWwkbMpjYFP",
  "key34": "5VEpgnFMShkgYpraFVdk3m3TKBWysBUP5Vg2qd9PXcHry4s9uWjqsgqjXSFB3W2odSbQBwVRK6QdBLmWsFuZHu4F",
  "key35": "5wEmtwxpfhUK7qaoEMSg53Tn2HYyRwh7SVLQ2NPnW8c6zMszH9nqjuc3zMizA5WNNqqDuid6XZ8qU3uxjcFjaE5M",
  "key36": "49GxP2MUQJrskipKVNxUAQCEsP4qUzSwKbrFB8pR3e6q8nGH45u673FmMbZNDaJQNKbaokuEdfk5RRMVJT4XNqUN",
  "key37": "3dJHts2dGVzexa1XYQZPM2AV4JnyyYQzxMipg8HKU6fHmpRJSmhZSFeMUQMk3LdBbuBaSDi5ud2j3evnadupHULP",
  "key38": "4xkxDokLrvsXEB7sWhsEEJMq5YZRJaRG2DCQZHyJxrQ91Rkg2YcFTmEA1FzzB8gxdNcZ1xAgvbg1TqGeKL6NVLST",
  "key39": "4dvN4mGF5tSr3DG22ywqBiRkNBnBfEbRCsLn8ZoYkgzcgRXragfd7wmjS5F9hG9Q1VKBWPRxES1VgfCx5EquFn2D",
  "key40": "zygWGwb3RX5P8LaNfHxemcsBWCuHJSvpYF8374vqHFCRMmAyTpXhxPbjgGA8Y5kVxG795sbw7HVbQWK3bWrfxmX",
  "key41": "5KDWQigEsAnCxnN6hCypbMviN3iCap4nQVuomE3Bx2JQ6jstRMpe3Se9LZ5aBfm2q6cNwW5bdoteV9nUhad9VaKM",
  "key42": "47kqMco4FmJU1LyTyCahuWGah4iYr5fteyTdXnYgKzRkWG36bvQaU6qW379jgYtcFwUdsNqmjeYcYJnTrZindE5w",
  "key43": "2N6m8QTtxRUvHPANeDZi5S6pLqp5LKJHTCUsimdNoKomummUPT1v3E5non1GcUDAWfPLDnRNNRQCab7SFTVdbCPE",
  "key44": "2s9tE2uSHb5LMVjr7JRLfE41vUeHHAvmM1ees6PJPGsPUQPZKrMsmyoUG2sAFcamL6iLdaZfSVhrG6uFovdVp5uf",
  "key45": "2L5WZz82FPyGE9DjtppuR8m85DCyn1ZGKRPgtYHJQXYVHwciVxSpsi2rDQ2rJWQUzry6dPuNQ4tzyhpDayFRWgtd",
  "key46": "iGAhFT6oW2RKoJLYTsZeDueFkXeShNTcNcV9xqNqWRPkmpJMj48RwEmTW2y9hU7JDeoBY4Chf4woDhD86onj7DR",
  "key47": "zxQEhHZShYjoaqT4xRhmLmrwkQh8e2pG75UusHJFNsgwXhrpDM8hKMNDQnvi1axboGGhajGNacTPZUHdVPNTucq",
  "key48": "3TT4qkKZpxWz99PFAJdxHnAVYWyuvxCQ5X4XgvPrufmCMPikybK3Gw1cVCS8DzHcS1gzvm7vtp8eB7AKwPinhQES"
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
