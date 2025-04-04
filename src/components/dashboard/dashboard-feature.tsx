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
    "pEfB9wuHBVeMEhMcobnszDPHLrT18ZyJqJ8PkaaWXYLEHPvSs8BU7GoLYjhPAaiW5Wabgq6F8quA4hGgL9TiNhE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KzQdhKFkVtjSm4ao2GH1hMUx42SifM1EcvUrLLDWmTWfa8hu2PQ18aa3ruNh3Pc2GXmtQBeWUWUEzJBUMHjn2Uh",
  "key1": "UmYyt9yvUWeUN5FFehG6pYjE5xK5aURqnrpnH23WSL5oGNDYa4FzDPnds4wAtfdk2UCvNsCgGboXQhopjcfGW3f",
  "key2": "5LgjKYQgGEVgMvZVWzDfcfwDcADB7wZo3s42RxU4QT9KgSWnaabcHGULKXFo4puRwUYPGq8JZdr8cX1ddgUYPCoC",
  "key3": "3EGFA6rTqHUCsPjXdzmH55ygSLoaJdoK1vL19bnwvitwB7r1KRm18cND4dVoECCTQbHw7uLzFymX91HjDL9krp77",
  "key4": "5esSd4R3i75vCC4oBEPDUJycjYoYXQ1kvzc1cdSJEsGDGu7Y2vJejdLsJ4BTTcyuB4azm51TrZR1E9Z3q9Aznd3R",
  "key5": "2hC2zJBQzqjWNKFGPDkhPHdiYNgNP8GQdyQMvipSUf9PDiXRDnP5KpzUN1aRfm26xn7ThobtfFYfPcFyYHyHAXPq",
  "key6": "2gHVob1SD5x6X3zfNaGcLwQCx91EEkvV6hsZEtnRZntcNRUkcsNCFxygPHERNnaAUktTHk8v757px3U6ho4Hx8S8",
  "key7": "4uxE9L7gnJMCiybVH7nY46VfhzRjHPWeQJiweYNBvYSiBRYYgyEkbScoco4PtHcHJ3GaEMmk5TRQAewLTcXviJxt",
  "key8": "3cktVjMHgbWcgeSFeaPrjWU2mgmwfAEUMuxok6fuggEZNdK2ML3macbuZkdCTN9Cgab3p4uuit5edMupAfYgunV7",
  "key9": "23j4mQJNN7C2CzbB7DEsH9VbMCZEMBCxuF6528AR2gBgy7w2bCiuuFgfnS5xT5mVuWn1jgb4TzF1JC5xjY82wb8z",
  "key10": "KTfFkN8nYT6DKd2Q5YhHMfmKm6Fsw9g5BEct1hVNHJzKZe15YyaHRYLXsF52Roa7ox74bUB9dHx7VehPtBrtZCp",
  "key11": "57H9xoQzzfikw4a32z28ThUdJ2nYg3bTNrpxJtH5h9RpXsth8mqs1sDdjRG9xAGWCWtqVwE8RkJuyNwoXREPctGC",
  "key12": "5FTJNZRYP2CD9q2UXBTrphhZxmAbCCTnV82LVFr6Yb4wWEdvZR8zqQRjJdJ1w46Zry6Whad4D5mR1df1BfwoRacF",
  "key13": "3ywuuR4u2xqdFPtws16VUHn2pefkugFGbfMK8gGc17VCmrDFq7kcTgoUjNwVbnDQajCZ7HXArdVYW2uAa4ZKcwMC",
  "key14": "4XnBpTqCcWLz2j3dv7wJjodYu2yRAaspgS6pspxCqKQovevMQCJ73joRVWam9iMNqaZ7Kt9xxeB54R7LvSDQAQDf",
  "key15": "5vhKXdee8gixk2dcUdVDBWM9tmqogdS8JqPF89H8VnWyHwjDbKN32qDxZ2VGAbiAFgrPFez3JJRWrestNNd4443p",
  "key16": "3ThCBWaig8WGxbrUf691w6TXu7V5ZtrH3QzkYTtfAckBsHEpvgs9M7EHPcek6NzPnJCxDoJ5jYjcD8N3EZnqgW6z",
  "key17": "4MDSpb854FiyeWtwrt1oqf6SNCuGPCPb7moXfYRy87KHr8VYPk2Fw1vjf67LRaz3K1gBdkyh8BQMgEYGqX119PwJ",
  "key18": "2CGgxF7AzQ4mKqLNe29EkLPLgAjwC4w8xYBvCsDDBqHFdnJDAw6HDwfHK3Fc2WfUvzAXZc9j56PhWW78tgYYuQrf",
  "key19": "2UTFmbibnFAGqRm7QZvxKAt1YdymbVeyJvyMG7EtzibzrPHKjH1yZ5pjYw9i2jNgWXDGESd2R392x6zfVgiXFBqf",
  "key20": "ZYYRUL9PoZ3wZugFwwKEh1c7YyMirCMppMqYQm2cCbaT9sqyFDfQuDWSrPFwrGQhUMuDRkmGxJ83jnjwC66MkLR",
  "key21": "3T9rjyPLKdQeJuF6H3CDHHbCygqQah2i5SWvGgSXKiYu7JADYdmuJSkuwZnEWwbsd9G9hhzezre3u7i98fR24LCx",
  "key22": "2dcjgTtWGGrbqEfbSfzPuffnSKyRcF7UH5oSQPxVHN6iuXJ9GQpTFFVoRJAj6WgNja3neh7JNqcfTfg8573i2ThA",
  "key23": "47uyQdxEY9CtAbS53Yd4QGeR4yBCe6sCkrxy6EFBoo2kCYy6Tpz2sCAtZxmAtrxGTtdm8FKr5JSPmronGW3gPNTy",
  "key24": "4nt5QCyFausACTF9oB91SRw1tMpSGLuxws7Pngf7Pk1KPS3zGyQ1Ai2K9UqfUDrpyjFbynar4mTQdv1LwBx4KdrU",
  "key25": "4UnPxZGLZBNZL1BJqbVRnaiV3EPgvFyrPdajaEvE5A6jDH5rwpqjZhjoQZvLKBG1x9c4rtFsMvpE6isCeRaTjWUX",
  "key26": "52w5Frk7prjReYmqkQvVe4rvkRXzLSxbcnKYBQvFAQoBHHJjFxW8DWo9B2PdiuoxUajNHqJzHzPAGPBU5bywRzb5",
  "key27": "C4SaE9nZSuvPTX3EjDhkp4D47fmgdJGgQterBZUCSCpJxG8NEgxHzFv1VbXQt5C9K8XVuxuaPE994TMu6rgTbXW",
  "key28": "28vMdd4cWhuBtbAfqYPnovYkPouvQPPTM4CTnCbAw7KchURVkF81vvBrVn8BH6h4e8BX24HTq9YDMv6Cwu2GZD24",
  "key29": "2dVmmGjrGfQQHQkt8mxrQifNCRiRLHc6qsjFQzWGCY2ZnXPwbix4KqoUeNAdv9dyc2MMmTy3sppGeA38Zp6JP8Lx",
  "key30": "2584Tfz1W8mfsSn5mPTA4XpsWMsd2nT5LoBtcjij8mivG57RuX5we7QYbNEA944j3Nxmwj9dBrN3g1voe13ujFtk",
  "key31": "67Dno92Cu3hNcMnUEzsynJzsTEEwcdUTph8o6pBMAXYFA4MxzWVwEjJZ59CbKCRLqPYyiXbaCu5fK5myMs7syYcW",
  "key32": "2Ebth55bbo5nx1VurqL3H9fnETnsQJdu4iSs3UTFfH12ZUecyN7NSbFhEQX3i6S3gjkEZ8KtTBzgAeY7BFqaCL1M",
  "key33": "5XWKQDXuXStDYpTN5eLq3FRYNibHbN17ZpxKKUyQfNKMH1t5GwXdq4PuwHbjy7PVuLL7oVwjLLeQkefnPZwSoBqp"
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
