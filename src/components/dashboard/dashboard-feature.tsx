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
    "BEvfMxcCHtnFGg2woDAodQpoijKCRU5jwZP1T7UqryAy4MThhxG1fxGQYPFkwHSwacPvk874UYiKpVcVX122dP4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VC99dL8uwzVvtLnuA2zpWvAff1MgV2rFkMNZcjLEgc9wa5DygRjWKpB6jidd3xeK356ouaNKyqYTKipeLQgQoTA",
  "key1": "4g6vQj4k8FB6UyZBNEDYv4uTG88WMy9wALHRS419b6qzZ7W1q93XkS3qzBpNmbEayutSq44S5LhbsGtptqJpScCD",
  "key2": "5DiKfnjBRQ8pJTjmGqHKL1fG44rsj7qVyfp4utVZhGNu6BtJ8HSU2mCuQFVrvos8J3ZVpEz8M5RNTcitLU5TiC4p",
  "key3": "34CnMmwPmN8hnXZRFgq2tATXT4p7AbHMzPfgHyLWzifGRWPKS4VQ7rahnaaXrouXecYGZpQ2aMckhzbzZqKMvTGb",
  "key4": "3KjNyWQhA8ai1jFtQBdFs4bEkVE94biK4jJCzqBUtG8psCA7h3MBijjEt7Z4RZqNBD4Kv1JPRvHgjmeotdTsQBwP",
  "key5": "59JZHFBTGPGQ3qtmpRfGep3KU8WK3y8CjNSubNB8Cuwtbb9kRtCN7xTt7yxgrwKw84pr5z5eXBKNJNgbHA7C3uhr",
  "key6": "PkaMNmfapKAzkpSP7gevahsR6BSvLVT1LPMNPA1NSKMeR2nrVUVff1afvwCimbYd5ieWpUWCsxpf3F5hbBQKAwX",
  "key7": "3WU1yUUPGSk4LgLKjovydZ6VGEYuuHRFHDfWoXz1swp2JiVC8JRhCsXsXP8wuCnj4wiQ9Mt1HGi3f2zxHRqU78z4",
  "key8": "4Aau7BHb8gef8q4j8DibXFA1Dm3WjuQ8QoYupWvjPypHh4v82Q76aAWsu1x4aPtiMo9968Rf38ZHczcnnXgF1V5p",
  "key9": "3LL6FDfhqFmg5cuHEhFg9Gb9aNrxkTHct7tQ9QkboHBdvPtQ6P6zMVdfErPUz2caTT3A4DUGmEQkvVreEj4HUU4d",
  "key10": "2KUf8dQCABuuxk1eu2iR4Ue8E8sMDyjVTzSSzHFRFqdTeudTpCVdeRdqLMGFybqrFLNWpnZgWwEG36Xevofu8ixg",
  "key11": "3vk5TF5a8dcuBGd6qeRDaPonKopbjZLsvYt9VQUP1TromrccxVmjTYQF1RmcBtcrBtMe6BqMyno6zWVeyf3RBFou",
  "key12": "66sTf41paK3XjC3BM4wRC66kswgSyDRQ4vxXkY67UYHtCcbZB7wJDU7EQ822VC2VPxpWDKzPJT67i7uQPEzf76mr",
  "key13": "UvcD2LTnRxhioTCaeq4SFtoSeGPi6R5Yj8EWZQHBfZQyRAUVu8FKgHc4fFs39Et48BNJnzbXUNGXw8azVbWvMua",
  "key14": "4xEmuvj7hazqDSkChKyHquFiqECiXjsz62YuEw9rCHJiNbs5xXpSKJxZStBk6ghQFywmPWiTizw6Q19dwZmweEHw",
  "key15": "3kbZJRJNfg3wRzV8EHeYJsdMXvqqBfdUpVaChN3rgCH94Ys5R15L8d1HdGCeHWp3hoDUrYKqNXbmkNTsrfn37kmw",
  "key16": "4mJx1MGVU9pbG92PFzTSo4RcuLZpbxWDPGSXVNAECN5FiaQVSQdmDLxE5QxYj8ab7Y3YUAKeTe4jmREcNt83REoC",
  "key17": "5rgDF8Q6cwXyvwkUNpYpNtVMpaXsQ9H5RQ4R3on52N64JvcpswtVzNEMsNYdJvGyqFSjXVUJCPANjxRuhDEx9Nj8",
  "key18": "4DZ5ca1TVBnEwTWP32e8ATRhXkqVSkrf5aEa5CE2Zb6Hogb5LToDk5TmG85Bfpy1NuEJthWC4htmeWsEZhJT7BPk",
  "key19": "EZuXDGD5z18cBzEFGbi4rqt4DpJZrvDPocRfoGDjcX9hA2AjC2WtxLncFvu5tMYsL9z2CcFTQtXMJWwnrGgikXP",
  "key20": "qiyFVTAC426hmxCp2h7SZPTKub9osDgfxyGLKj1JdvGR4ApNDPSZ75s7C8xLKMyk1FYPTFbfTSFD4vxGMrZoFVn",
  "key21": "5mvB6ku2EoYKNQ9AJPrs4hvCJYZX3KEPs9Gr24T1HhGdYZahjChkiE6ykNiWtn64ZeNpvfe5U2MUvnkyHftKo3Tv",
  "key22": "2Hgwr8No1nG98jAEzrwFTXq4623AipmgegsSBvEPdzp1bDRj2CJaPkFMtqtuYyucRuyDQjH8yULzbdDA61wLDcK4",
  "key23": "4xREBjc69oVcqMqjPeQNwtQJbYw5Cwheiqmx6Yc7Sc3xaD5ckG6qvAxEJL6LzDMkQVUW8FEPNy7T3RCJbAb3qqaU",
  "key24": "4Y9tRxqjsih2AN6ksshvuXWgYRHzcQgPcPwU1U9MvmEKQoAdUQR7LLyLa6TvzP8DwCFxXxB7ToRkhUaMmJotTMiX",
  "key25": "4zAwhxzK8WwDjMiWrgknHEwChg7uL7mJiFAWGSmTfMMxe39neB1XLLgn5653D35GYftqtJzVkrrCCtsbRcDvM11p",
  "key26": "4H5M2ddoykZsTmsSf2RoynE4zw8wY6jqKeKVd2uDaZuhdEYF4zma7yKvbpooBiDPcuTmmYzkTWUDzKLcFdgAsxxD",
  "key27": "3gaoQvKdEozj34zinWNP899Yp8brSRtDyr1RZATDQ3xJWoi3PbS6iAMZCp8d25wRTasGUkd2Dp36DrdRJEX29JBE",
  "key28": "26TPqbgdLpeeH8yC2dXdkzLR2DmhUthEQny8u55sDmE7teLoT67NNB6f4bPQ3Bv4t9GCEUjdZZvK5852iv1GM6jS",
  "key29": "4GSJRykmCtCr4oDy3DyLddcHDSaQqBM5crKzvByBEARipYKYpM6SwSwN2hfH6vKb1DbxFNxGGnMJfxR6U4JNJFDE",
  "key30": "5zNWCS4VcswuF2B3LE5djdY46bjWrNJUEkvernpryUd7iYGyk9KcPSWf1eoQudKGWsSVkW4o4NUbsmib7m6a4qW7",
  "key31": "aevivoRxwWvhThGU5iUBMTMhRnFuYMXZ7krzy5nv5S5kCyZb2uzayp4PhqPfFfhKGivxJRmab54bT5nQaiBKdmR",
  "key32": "5gpYZJJaGMigs8FB1cDCke2Aco4aMyyf2kz8rgL5aV5NmAHbzdskrvRH9nrHTaUYufK6GkFmkLJM6XZe9bdyd4fR",
  "key33": "2haEVKBDyMr6QnJuXDz5dZeCMLhpicmQ7qUyDqEJRMeg7gKJsZUs26175HAD3CPCLaryjZK8FhrC2M3ccfXR79wr",
  "key34": "wAXGvoZotSBBgMbRwGn3cQYFkfUdJhXEvN3yE3BhuvN4sAquiC1mj4TxphodXuLXDEzJbhKTmEykbVJRB6LDqY5",
  "key35": "38k8J2WsWAbg3bsFhjquXssv4q6vcCm3mgLoEfEhz99jzMzwhtdSbvGGCUp88qTFf2YAjF3mVJqMnfSbXJVLMxiK",
  "key36": "3uvDc8YEbpZGYmZAdicoGyx4fv12Bnf65nfTzEmh4Zyn199dSB3TL8DNLNXAoYA86nT54wyxSfqEo7tgDnGTFBhg",
  "key37": "5Em7MByvL5aUgYVDsEwyYF9AaU4fpLhAofnv6BzMvqb88gDAxKPMbCK1N7wMtBVsTFB1jTZSd6qhrRuCsuZ1qe5r",
  "key38": "D2vymCbdogLf7hXDFNqU89JLDYWbcVPtSb9MmTcYmVDJwEQyV941VaNQDp5VVtXTYHrDtGTXCGugBnrhfC3hyxX",
  "key39": "2e2UPrgV26DCc9NoJq2YfJRmq46qp151r6xzPi5sYKAPbFPZUCVsWpeDD3DMroqXKCEcXueZv67BEsKpMo27Xcj1",
  "key40": "h7ez72mSJScaaZtHMxkZHhkmaQxBD42Q7ZzYkAysmJpCxpPcWqt9bbu5R8zG9LqFRxDYJrd7VHQWffwtMQRtYFM",
  "key41": "3ofTU1pT3mcLQ9minYb5zvbFVjQTPwCTFRibvy34FtRgpW6CzevSA2PsE9vWp9TqsSoRr6zfLmi3puzVzHbupu6v",
  "key42": "3WQ4U7brMQKkFWZVkFrDfKyqiY43AdVg4HY5VhTB52GQQdcUchF2MpCWUeE5DBKyoVLgAEoWAFHP52LZ8yeLDXed",
  "key43": "4gcGPAM8V8yJsBGnKSDkXu6nfsPgHs84SSwPF4WHXhZHZDuLb5KCCUuzsyBRWsgAcJrb2PqGSsE26TwN4PfGv4aZ",
  "key44": "4LKZyM1M2PK52sg9LM6quYe7HwqydixYQ43GSbqgA6RvkNNrSVHJBphQBZgMY4mX6pfpdrBraMNk9BRm7jPX3yGh",
  "key45": "D8txuYnmfGoe1jvDER7dmsszesi63bzA2wC7QyUFUwf7Zazi2sKpSwrWi29gB4SPvJ5pSX2qtP64q8aqifussCT",
  "key46": "fKZhF2A3AUbwD3UQfV1TUHVC36mWTtLz9TVxHbkeifrPq9kjWggLhXPgHT79KwMi3Dt1GA1rh6UyPbUiwfdDkra",
  "key47": "5bDoZ71S5BEuBdHc3qzxPZyPi3bLeptGkTTkv1L6VxQ6A9fGFMvtFLczjqucdEz2viMNF8FEzjCquWW761D3WwxM"
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
