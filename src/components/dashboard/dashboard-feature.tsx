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
    "4uQapXLHLnWvnVyFtcgSvdNa7D444yNySZ8QeXXuBSEEA19RM7rCypfYE3CC1ZwKSrmMeH9NJ8PkeH5teZaUCvSA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZENihawPfaWSxB4burhAKbC12xG2KisxJkAuuNHnPb43mpf2ER2JBSSqqf9NQxQjtyTRL3GNdtnCpJgnDqQrs1t",
  "key1": "48wQyQJNKp3qYUgBBsnE5rhYFDVusXhFpeunzoHFuacaVFexX1cazhTre2wDAqEzXN2d7fwuED9oTQA58XvKnsXp",
  "key2": "3wXFC8CCpP36KY5f9nRtpMSsbTqh83BcoCUEXC12UgkrRhvMdK3vE1zzva85cat52Rv6uunR53tHvvxHdqpXr82Q",
  "key3": "2fo2Lnu9yUtreM73Hy8eDS5kwAbnywjYzEev9JbhkMs1ZDzKH1Qo9hMXcqhokheLdqhrVdqSDDgpMBZV67nXK3qk",
  "key4": "3edyBwnc36wSKDJf8weFqqJMhCi3B6LRLeNdCqktM2c1zWUfGmUpbkmHMsQ7uRJQ3EezfJracfKtA2XVcZcqasUe",
  "key5": "2wv1yxjWkgetF5zj4NgMsjuQaxSC9Dw3phbgJmhJkGtvE5DiGyDYWaa5VbobbMhW1dVmW8v18cJXRxgPN8iTQLwQ",
  "key6": "4MPzPZtpeAtgwgKa11mY7cnEXtZ5TyMYfX1Mbk83jfCPSKtVtxn7Pyzzh1sUMhYXv2o7vW4deUecFr2yGcWTCqZ4",
  "key7": "5hkmPytr9pcsoenxHu5ZXhAZkt5gByZw96XXPd4Fcp8Sqq3Wnyw1Ti64ybrBvNobWNvUs2JYNVmKZy98Q8E9qZuB",
  "key8": "4FGgNFX383q9Jw938YE9oG59QEE39V9d7GSKsfXJFC5jMjmEUfSbWfpU8UCmgMnZCNhh1uSKJFPPtTneKEFuTviQ",
  "key9": "56qot7rgQL1LA9Kj5AeZua4NKGA6p7EE5Eewf4pQ2Zgn5LYR6xkLMLwSJiFfZihYzAiky8D91WdarVVwPzwrPzfK",
  "key10": "4z61nANPuERAa1o45Ggeb4c8L816AQfwLcsDZKSaSzBreg5Sf7nfuBBQBurRTsJRuCA2uufci94yJC7MGr73bfxF",
  "key11": "5CWFWfU8CjzfvLdVG2vBFdKSDWWYu2GuKHvNkCtaVq4zaKkcBwspxCt2h465iALh4bhDkCTa4ya3KMN3422sn95k",
  "key12": "5NiRbhbUrsEGtLQTFwiThD8kQ6oonYUWDX8iYhJbd3TewoXrQqg9yWWgD7yJ1botQKgdAaoEdvn1W7P1KKvz5Cjd",
  "key13": "tte8G7czxKF7c83rv7TDweBiqZ2pjWLEtUGt8Bm2wdF6sAxbtPyGz81bSqWGNAnsqkqJY5pTSTfYMdQ7HELHE7d",
  "key14": "4yXf6ZzKW5TBxkBZ32GB7WWu7BsdKiYSV7xajpRuFe9iKyH5p4Fjs2L9aieweuoAL4UfM2F47U9ShhWn98kC8koe",
  "key15": "2kvbUYo7VYDwhSYBHw1uQGLrBpGQRYaBgYjBdYS8nfofTnMv6Kj8DM7YtJuAhe1r4KfqM7ikZLAUsBWtxHG1A9tx",
  "key16": "5fJxmnVCP8276XfvxqGjDDrpb6GV3YZ56VuNRHi3dnakr7dqgQj2oNmdYTYtJ6gMA8KLZ16y7SfXEVUNsNdLfhi3",
  "key17": "24rz9ufq4x7HqZpKKCRuPBwX6QtTDddeBbB3aHSkFvgwhPAy75gJSckc7QXtoKguG4WsXcGRE5uTyLoCD8td5qu7",
  "key18": "5U257ZF5pEDLBxwX4snBz1QU5UXhNQ8bLGGu6qT8fNCtx9RPooU6rpdSQBM92kiM5xR3AYN4imaQGxNv4Vv1HorF",
  "key19": "5aespvz3ez7BhMeRGYYEwEEqCNYvZ8tTCvyLVGZ7RPZLcRsQBCikq6EwTwaG6h7vXce3iWMCANcWAUqhDrKq2V8h",
  "key20": "57LuCdSUhHrfbFtE6P4WCV6ZerScGHMoMg6SAWFHE9BDDEqBjxG64SeQfcT8WBbcp3HnDAX9fiZo1qFV4zjgM785",
  "key21": "4KY7CaX583W8wX5vfRVW6dzKSfhPHwCoLJyW8o3cgzG5R2oTuNX1oiyTPAmB3VZVomwrtYfLaojaQxN9AaZjQYY9",
  "key22": "3cNGFyb4difke1XGSX9L544Pexr1BkgtoHbS7UF1yCp3h5HDXpZ882jzHX265bk6adqSGNSHJSXuP4RNhkrVrtxt",
  "key23": "4DriZKnuLJ2jn5PAQvzJ8XHDXNPMwuPUtk5QtvoDSjq2nTjZucsvFcHPQzATapYeXakbRYY8V7A3Z1KSTmjsXQk6",
  "key24": "2PpqwBPzfq74xxeotWQPJnGwVEmvVc1PQQV9d19gEYkz2BA17GpJoMAYZTDA5VNujQcNCJ3yo9guhW4RsbN3ijv3",
  "key25": "2dvsKKZpFLVLpszDKyboJq5hfWAMqqL4P6zVrVzi9s2V8cnvChexmmYwgaiMGqZpnchAxrp1NwmWSmmTbTKNWxLS",
  "key26": "PgFVy7TvKnQSgcyVgXwz8idfzAkYprenJoAMZPtEBQvNRUfesoXBfHfuCpVNik655Y5ojBokH5H1qgnTPLHZfvr",
  "key27": "2idyJf7XLS6cjJCsKTBfbHH2NdZiyBDZzDYQrAu9wRmCWGfD9hg3GaRZ43fbfHZ86VV61rz6Aygo1Rt7Vq13zYot",
  "key28": "tEDF5rJ6pZMXu6JjKX4oEBKpEF8nSGHueFcX7DwP14L9oDG4w3YmPuiNeHn2rsLhha5PaxQM8qjSt66i1JGnNvJ",
  "key29": "5jo6HTLrXK9tuAkCf9wgwqw51VXZL1hsmAk85Ej7WPCiQH3vgu7NRo81VHU92rC96T5idF2yMTGv6PRiqGiz1yXb",
  "key30": "5ScZpH9J8yEiwC7TueBEtZdAPcYtzW5YiJ6Vz78iMZy7zqoAEEzwHZyir81yL6u2fyRrW6VMJC6gwr1vPNi3bLCS",
  "key31": "3hqrpZm5nzpsMBn2KRjbNcEiRKQQ9GKsCKfh81rrP4ipeSuLWF8Kb6kxkM9kFjep6BHymhXnGq2ggeGU7b58AmbW",
  "key32": "3Q3TXvkkeWpQ5Z8QHRPjYZ8mLdYBabjHrjFiVVrF2ZiZb4bwEoyQbC72ZRrqBRZJUoEULrkmhoRS7aEak98cQPF",
  "key33": "5w9ZLfqfJcrpLNSGC5ApNoJSr1v2rc5Z1aGiBVpYx4TCQVaUF5aRhkse8PWxMMDB4xYuyiv8rgaXEFtRHmRAwxN",
  "key34": "3P9WYc7opp51xC9X7gDPXGNGEDC7VFc97ErsnCmuNvXvEadTL8Xb1huw8dvfTM7xmCisoN2eeH4KwyxyMfkFwaNL",
  "key35": "4Wy3WNyNUppfV6KXGsjELXbyJXPvsLBDxpqsQvWaWQYuiTmdLK8yJew3PFFNZxvQetD3DBW6bh2sjZ8KnD4YLPvh",
  "key36": "4rDp9gKbWvZpvGzXzrAop3L2uz1MSuNNH4baJaWtCdqUQcQY3EcfPq6HgZHhMojCtwgMwhWTCwQSr3D7B9nVHpQ3",
  "key37": "38o9XERdhffNKEezkL8tNoLRqyTtMDvKCEsQ7EDFXY6prB76Ws6ReYkw1gHAtd5JGZ7Y2vbmFc7jG3Jc2fZFxHr3",
  "key38": "4sVrFtGt6esiP3JgzZm3ZrVeGUANgMxgKG7V3MgzJQSWUyKZRgUWrxGCjAvNyBdB8WYc2J4cbBMV6JD4sBsFbapW",
  "key39": "2RFnKjRF1dTCv6aSXZGtFAEwcJvV2LJPhoP8MLytyY3HiicESQiqpG2a8VDxf1qdKh5Ppw2Qp5CL6ubwhZKYmoaD",
  "key40": "2NN3mJ5Wdh9Lofqyvu6rhmFkLJrSZbYQUQ1XkJSSyY5xeNXhjUdim9m8kEmNJwynEueEG5gttdVu4CVDv5GxPPAT",
  "key41": "3afn8oSgdvrTNdviwNAJmKfkfSrCW6juoaPpKMZ7GhLi8AmxTxcDFPRisqaej9opigiq8Qr3JvVtXCDXZuFvym1H"
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
