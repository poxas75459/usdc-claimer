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
    "2CAiRuhyopuq9HD1CUrEq7vMdgd5gB84fR583WyfQcyBJB4JQyiftHYhDNeRYKpChfiNxDJfLicTXrPWHeehWcD5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dNemztsA8RPgvFgQ3JG3uYVA573vHQneemJQ4hUE2DxPwLKXtczsWE129bSMRGByXtNs7eRZPEnbtU9Yak14Fyp",
  "key1": "5FQER5h7E9c6aouBYd8jWWEihViQymTanHgje9iyRyMzzcZo7Pofm5YdaGfT6kBpnJLWXaZSmvf11BcXPDB6hcnQ",
  "key2": "4ibM2H8GQVTymLVuPVaTr8xzc45S9pgZ29jafTrmtiLyGiHoNtdHhCixLqCLZkXTpER55zNuvNNgouwhMeLXdNKm",
  "key3": "5F7nr5cuFUbrewAZJKtpJw5E9r61954J6nSpEegQbSmKyVpyx7QfabKzwpGfz5Nj4j3SiddbrqTBd8p5Kgt1Un3K",
  "key4": "nJkLj5NMtfNfbdPkV9gKndEUeiLvFmjiTpahkLrtxcUjwfFpykevHwsyUVKPWP9h86mE6LpzJyHGdoyFddCEEeu",
  "key5": "G3AVd4jpJ3V7fLpdL5c4bb18BUZ5hy4zry4tsJjLyfLAZ7oqKJ9vpa1A3fuo9f9ZfnXizJuEaGCqWzAuK8ggY2S",
  "key6": "4U3YfLcri37VxeJEKDT9nisp8QbRujqM3WhQdEE9XbVAyVdvTVcX2miwaCvsbd7tDfkj1QyrMN81VwsZF1z5Dxvx",
  "key7": "4Lkgz81be1nbt9db2yzFC8nd71k8EdiMaU2dKxKREu8uUyXJ7Ai7HLX64KubGUMCfvqHkCe5yuoM2oRvYXM4fo11",
  "key8": "5BanXDUrzydaZtRtHcyWsfVLB8d1Ekgwg1esoNEwickWroKNha69qfjxqih6D24pP1QmTEqGaWBt8pCiCsQxN5Rc",
  "key9": "2mEBryG3mLUPLuD19a4Ex3FC2ATB3f1gDf5WNNfXc5Ga9CrGwiXMZn2hYJGcN6LJ73CSCXzBtQ7sX5JowkSu1W41",
  "key10": "3p6KLo5Wq8W5KyaAqqyCqca8ZXVKEskJ6W5m1swN4Qi5HAyoUL3bk755pFabdwenQ6wBmRN8ZU72PgGT2VzMR6cZ",
  "key11": "2jqdkq54fWNjcQKPnRi6h3QLqWNQoS87H1sBpXN51G6zyoqCE51umsxbRoFEnBsSyUF8EzCGqAG5uqB6aJeb58xt",
  "key12": "62t1gn13MermTGQApXzDY7ShJAwzgQdNCbKNimtWPpA8DbtsaS3oHhSqXgPoD11dzSVfsfxzar6TdEVQ58o27Wiy",
  "key13": "5TYUAHQaZrRfUwRji7DXcvXEAxvDaqjD1wN7XkWd3BQYWxRF54jjh7gTH4XSSEHHNekjjCJt8b9c8yWD4hvoZtft",
  "key14": "Q8F7Aa6347YXH3T5kcBc2z1vb5N9Y31iWCXv6KEibg4ymEDgbZxByJ72tfFqYJpgaHqvo3jwUPxhNYt67vy1KiE",
  "key15": "3VZMqSVJ4hdA1PPMvxqWQPVzvXZGgMVZNEX8TM4ti67J7RwhF1MBYPhKj9AdeiSEa5QFvQvCEUR6sxYQSNTJw8gy",
  "key16": "4NPUN72K5HYAbqM2VGfBNNFnxKSSdR493f4451ymJ3fbDbrH8TcVXPUJbX7122AXFrWNM69czMHoDbA5WCdnJ2Km",
  "key17": "2An9HnBXNstFiREtt9vtwSNk2RAtjgCkuubYEjubxi7G7RVqety9Ac54nCE8AYzCMntcUdQuh19vVi6kjbLzg8Pw",
  "key18": "3JdvAEvnKVPeoawo4aLidFq9HVskVjX2UVZsnTBUBicedfAoV9hsLzjNk9sXzQFVqhiUVyBRM3B6tc3apZ9L8bBh",
  "key19": "4xYrUsibmdDz1ad5LLF7ZxMULXajWX6Dotc3kjm375GPpGFkv4WakuUrRLFRpj15kp8WAuhXkEwNCnzSsGn1SDaH",
  "key20": "5xseDJjFdJ2mzS6jFfW7MNMCAZGkyJniDcwkY5dY8zfxSA8DWwHYxL6CL87GYZNksoVXJEoSTuoRcyR8hV5bsD7M",
  "key21": "3tadbj78B46SnK8iSxYqERYExFDFPKGspKuLmgscTARa3nUdWGjnCjVpiheewzv6H9DnJJW1o5uzRWv4wGgBnk5v",
  "key22": "4ZN1S9xmqx8iQ4sPXu17hpRLECfyW8FjZmrdxqB8Au91ZiBmcS4BktQywhQkaW6nDfoGBzeaq7We8agxEcahWG5D",
  "key23": "4fh83ija221JRE9sN4r15GQvxh7M1cSa7dkhDyYR2SK5X7qfosE8cBkTremcWwLLNuAwYzU6uaSwZBrjuEHrvy5j",
  "key24": "4ifowwf1Cezo7movoQT31sKxFTb7BpLxCJtdtVNVgXYQquNPCm9MoVWtw5J8BGA4143S21SSSLf5dzkfwJxx2Ndq",
  "key25": "4PgKfWvkF1wvTT8H5KmK45VsQ1w1j9XLFzEUycVo5xuk9HMeoNLwuNU1fJXuQuXTfRdFosQHda4gA6VMkQKzTmgY",
  "key26": "x2XG4j6crdRfNMwyuMthV6yxocvK9Fzb8SgvfLa6Mm73rupbnoE8NuwySwHUYT22LUWJgKXJEvjGVGtwsX5SVaV",
  "key27": "43yw5qga3P2FxAKcRz45NjtV3gxT5m7gTQRqPcW9CENqFMwZp4prBAe8btXW9HZ5RsWjd3EiaJU5zeNARgBWQMjo",
  "key28": "35Woxt7diDsiQEaXgRGQFx6YMyTK9gTwyx3mwVxDvzcWWWm5ZeaLbJKy2bV3aUfY1dzaFStuGw64dizeSeaqqfdB",
  "key29": "4XbvBPVEvnSAGtGDzLMHhaN4N5aH3YANemu3E94VEBfv6jmaEcXxdDdzuMVaa5hS7a63TdDEk2zhk7ZbTbeusCZD",
  "key30": "TBMN4DTK19U56e2eQRgsW3Bu4osNjFYr3cjsf2kn2JCdRKb74rcqEDnEQKE6cSccjAa94WeW5rkatb24RDm1D7X",
  "key31": "5pugMZLmU3QoviDURgLkQ9F6VhZDKW3bf2vNdcq2d3TRDEK9UEh3RQuQTzheAPPwySBu8E6BhZVXzotzv3V3HALr",
  "key32": "3rAFE8rcJPbsk58GhGrBTyTi9dmSru5BijPhiL8ZK7zL2wUwbJZb2wzao9wEJy5ppUetJ9QGWsrvtirL3UN4pwfX",
  "key33": "uFW2B5tyDfrZYFn9VeyQ1Rn2KsqB7kQDFuTCp6TvqrA6qrFbti4vv9YP2JMz4prPWXzeF6GhdpmmFVKmu5cnmDV",
  "key34": "3vxSi9C4bfZcQHrxHD5ToRWBSQULZiWYt1q2MNrAohZCd746fcb7RnwXqhKrxDSXSM26HrD1k9iUgDEM4m2Z2DsH",
  "key35": "4FpPZMB9rcDyJEs9JQVy1s9i6hDoY8w37BdQSVEMVvqA8acaxjEKJ8p4RPAegjDxWota2eQ3CJd4TZHtRc8W1FwC",
  "key36": "5Qo2muVeJeTeTs7PhmDqzz6WcXFJcyaGLxCRmYXWsqMCZQ9N39akYBbM7LU4aXDmorJn4s3UECsQUyjLuG6yp4LS",
  "key37": "43xuzU17Ya9TxWMjaafN4cHbkfyqRuycBhkU1QESmPVh3QoUusDyKJv983JnwkLt2PPYZHuABKHVMpGzUPDXwbmT"
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
