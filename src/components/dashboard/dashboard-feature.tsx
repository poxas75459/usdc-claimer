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
    "2N7B7HWXP53U1WwjG87HY5Vv6oVnovBTjnRhSf2BPUbVGPADt16PzetH8NbsoFkKZKUwQiG5yqZ9r2qzU1cRErwK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53cgpGNkW2kR7tV58frQBndxQZ1te6kMBys1mWhisYuGLbh8Cr3wwGphb6VGawwhDFxCvtEGAV1aegT83tvAv1aY",
  "key1": "2nxiJuA3ntm4283HX8k9zKpuvSN284itxZtVMAxxjj4tipa4yR4cr5XQRJUCdpr8qedAerxE76Bae95TvxLQaDTg",
  "key2": "5v3oST8rB2C9t16AhJxsmfRUaPgDjXvokRZEzHRpomXBvKumoG3yY1YvKFKP9XgF5gzLLt4DPpvRczZSkzTG8yRb",
  "key3": "4xWyhSebxPUxmG9im315XrEwo3obSGpNq7hrt5wNdLgvzp7ArriVMjeMnWongFRnUhHhWqGGEW9oXwzkmieQGhvo",
  "key4": "62F26bBJuZr1L84TqeVuEn5YSERgpqmq11sYAeXUMc4A6bMCpgVMqBZvz8RWvCgGkh6ixR2zRhK6twVF94CamqnY",
  "key5": "4RaWkSkjpUeydcv6pv4XnpNUES9iSmxaFzACXitSMXtzgKMoPsXfreAs9ymN86WXvwF2KcMiK6Sif2prheM4kBNT",
  "key6": "2XZYhXjad8DTbQKGA7jE97dN4bEW5hpPGcq1r1xe7TsdwLJJyWcWQA8avpcm4k1e3cyEsazZu9ap5LZsjPBZuk5j",
  "key7": "42gqAUPVJtkjcf3kfyhoYXARN8X5yY2xPxyYkv6cLXsXhiMx9qpMnrHYryp6jHgJ6uzuB6qyw9QS94ccZEgoQxgp",
  "key8": "4rTwTexctqYdHczUCT6Xa2ZDMdeBdt2tKHD2gj8seQtKXRnoazQEpVSUWnxfhMfEEhQKwebo8jGcdRCTbrxyiAiJ",
  "key9": "2XAQLthiUdD9HXUraDQYwVCQhR3qXkXRPvvaEDGcLwh8dvUw8JYXQvHwwgriA4L8Tv43XjU2DL3seGueU38gCtSh",
  "key10": "5jcaqJquuRBxZrjtYqeekNZSRosm4cBMg2wbj9FYw5kVdJT8dFNz6UurVhdp3hQdyN8rAPiXmjLaR55zEyRPR6cJ",
  "key11": "2JSR184WuHHH9ELTKniRER5gMK7vjSnij1hzM5gbKtxmbjRLFSVtrxktTatWjErC3rcBYxER1wz8VVjbpZc1mxKt",
  "key12": "4EUZiQ4bazT8W3ESSpYj4XNmSkqeHqFQ7s7YFU7CP2nm9PSfbF8xn8HSjJ7vwg3XfRhguRFCcaAjzAePceYfW3so",
  "key13": "2BEBoQoojMq2cUMpSuBRR8QYjYaDGirkuoiwwiuKTCmfr1TpzuB4L9kQ9eqai5PLWURzsG355GyeLrjWe5brQiEZ",
  "key14": "57e2r72po1P1Q3BrjBWcunP973JdxpkWdNEXGjdtL16AyB678oTHvVTnAYH5vUwTGvdQuMxQyXp6d33C2Cmd7ttB",
  "key15": "4UjXgF4V5z1ZD9A2b9TAaYeVzGgrNFW77wfZ4F24iQ9o7Tor8WpHafu5idT2Hk8gZHmeZRpzSHxKCWehWrpKedGK",
  "key16": "2J7YHimfvPpLCmaTRKk2yNTsBZcFoHGLHt6YBxABL2i4YbeC5gKM8WQ1S5RFMdd5rVwJ2vrbUjrTuokKkfm3TwMG",
  "key17": "38WagSQjALo7ZmDGd2Kc18VgSG7UqRkXooWXTBuvtep3tGiuQbB6cGQPy1JAeq6Kn2dxKzXFNpFLtHMEExsH7u8R",
  "key18": "2GBg4PQVnjFAj39aacPreXQtpEY1PtdU6vAfncfa1NZhJYt3632jLXu5JzDNjRkN1XoSAP7x8oE4PqsKG7XNTbUj",
  "key19": "34p8iQvAfwbKYoUWkSShZgAKbWiaFnthyvEU7GgDCNrUMR4ys5qQ1PxSJgkxqCCHQanh1rr237DhQv7hoboCesYz",
  "key20": "4wL35BGDgLkE9PAHKr8NtfFvqhFpTGmv94DVsQY1n3PHSnwRthH78m2QRog3PrTgMcv8CkUeQjqkMYWshyci67jq",
  "key21": "4HNuj6gqbCthV3KarD1kVRMinwKqZBbPM9sTXhzVkum9cWfYj1m1pWAmzmkyTx5JUNng7RnTftrR4LS4XWTEfH7V",
  "key22": "2SMZpXN5gBTGx98vF91VV2NEXVabFEpysg1SZdZ2wcYQs3dZKKH4LYrRdUygMJKpnArRDy7paSosXPL7zk9oQFeZ",
  "key23": "2ZyjyVTisEyak937oPMezKnpYFpvxAKe6ASARoR5ZZ6x799BWWsKtwiVkcQ9fjvUhpc36N1jamYCb4BeHCShZLgu",
  "key24": "5v3seirX7vu2R41WLrSRV66mD9MPjCAvDanr4KLHgmPFJaYQ4qknJHBGX2VZRANX4VeUXpqZkAynqtqz6uugUsU4",
  "key25": "5wH2qMkMT8eGpeqyDSXwjmmGcpUU5nM2vyvS2T7oeDqpemg3MPvac59GbBk9t2dWffozKGMRPKe77XuQotEtLD2x",
  "key26": "3NZSQWsYJdUxpu25LfxZ92xk2Bz9PbxqPeLMvhbczo9pu3hwCQehnC54trvAjBgC6gFiQk2Cz8B73H6TaPyR3E3W",
  "key27": "5k3YH4a2nQhTiBhrV5bDiZyEoWvvDjaV6a9tHD3byM9ksg8wzQAhxXHtmh7Fr6DYs1QvBtcRU76mgbHKCX1F7ozg",
  "key28": "3JGM5UDYzHUXechXRg2Y3jdgsXatV9225LXWuEmtA6Q23jJucc8BiC49qqyNz6RBhPC1AmMeqjzYSwsc7rJY9SUP",
  "key29": "2Jk9L6f35sNpdRvCuABobPbp3MMkzdVyGeFaQi2wLM9nchVti7G744oeiwuF9XBhpZD9SDCvUzbJxWztSFXYsVqw",
  "key30": "4cjJHS4Kps33Kt71m4YDBJY22SCtEQ5orbQ1n7rtmid1KRXrHWd4V3A5pzKYMbfUapW382xRckUP5CADaDGK9JeY",
  "key31": "2Cua4jYy9bm8QYVrYTPwADFVmGyJcehL1GXRKF445aXAdeuViwWrURQXWbRpBKcAbzPvppb3ynJAz2fFRK4sGnFU",
  "key32": "5dwQS3C5pxXXeFHU2W9j2NzBg9PeB2eFXE1jK5e9VSv3mnEQypDp8Dawh2LrxBzUX1DJc5oxMCaF2ugCSUY84Xjh",
  "key33": "2R7VtCPzjbqMJw2qp5ct7YNfRBpBZHzGdfhjZjaNzdRQeX7ji53jRSJCT6TA5pNVNk6uGAjkF7g7hjQikBfC53bM",
  "key34": "5hV18Cjk6WubVBQxQUUG2xgdx6By8HseFLGqnokTtAPecJ61Uzcua1Ycbu253thoVHiHt3UCFhbL1Cw2xyXftRi9",
  "key35": "5uVdotnT7P5dpoZUfzLmY8ZoRMsQMz8ATheTm4saXfqYZPNH21FWAswhaeo48vUGPsew4rsmXFa4eLcaUmjJbdpR",
  "key36": "3GUVUVtY9w2xSpp8oYNkgcohuXT7GTYfApGySPcyYBJBSkRpwihrffuZJ1wZTzrfJSRZJQg4TUXXL5VZFnpANwiw"
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
