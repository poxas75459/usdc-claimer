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
    "51sDoG5bHScvDtGrQUqyw63kxjHCQzECqLtRqNzNQjMJMU3VC21wAx824JYxXqvCwQqx3NEKwhgHMqGxnnFN1t3p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yd45ngjgraHDZUiiKKTUPHszT6Q6SbjdCVh6NXhdrG2j2oYbmUNy4PViDRSApE1iX7j2DJX5XpQ33hTsXKmgAYi",
  "key1": "3zoS5i3eHEe6A58ZaunRqnFaHGDm8m2ULvGajSaBNpTwtYLVWjMBkjNCZjeHXp7Wj3FmanoWGVN3ckPt4AqxsgzT",
  "key2": "66NijPNVEGsXm2jUy6VTra2YV7CVbVmfxQRD5JgnbwsP9DjV23RT4PYga6PqcEeZCMbcF3deNVwUzuDyzcDR7D3f",
  "key3": "Q1j8qKQXDkbtdTjx3bFfXw9yvFva1KwWrCcQcf8jE1ND3cUVxemmpePrvyTmJJKG69eg2wALauBfJAis9GcbWXF",
  "key4": "SmXNph7wajcy79GSJa4Q4s15yf7hwxH6wggK63UKEUqEgZFykU1sPGAbAeiv5T2uDgoKjkP3ps3zxDPhWTgq7Wq",
  "key5": "5RKvCX5DdDVPmVZ5gSJzhXKDfzezJYwAiKjNm5j49KSHdasACN1RhHUQKc4kQeH3S2EbtoszkxPbba59N9tMhZJC",
  "key6": "5TFXRz5g9zMsj6cxq3mL24CnzXJFbxs2tAssm6oJuNdtABgVDvoos7M62LzYjeYFNBfAhd7jfai2thPDjdUNapAF",
  "key7": "3rjZgcjke3Nsvnxz2Hfn349i5inAyG9GhS5JHkMykjvbSrUS6ej8GX98sefbCi9c5zWxfWm2zPDEEoCPhbph7QTj",
  "key8": "2U27N6wh9J6LkqWYXm83BQoEGkYwpjffAESLCJcB6ReAP1qbSvVXGnjsqN9BGR64fchwFjfiHTSSrBwYqCU7uTLY",
  "key9": "3MXh6CpLWebxaHEFyubmPRT9CLBLhYqVNyvHgoYZZ9Z2t1516jayTQ1epgLAizikdpYoGucNzhYAgiQ3JQXKwiNp",
  "key10": "ssNZYGuY8v3pYhrwjfCZHPWUbffRGdFevZmUdpyRypcLPTUs3ZefRKEDqi2ywhHegC8MVftA2vbPRXrhzrUw1qB",
  "key11": "2tWay5xGESFEUaxRaCxzqDzMr4UPTM9jLa2VAigCAGduexot3dfhJ7J1HjGoo7E4DZoqByCfj3tUuiPpFagn3tEG",
  "key12": "4Vhdd44LjzkCbEsyyhPmP2X56pua6hZitbL916N9rBtoGxrJ5jZ3bDr2Rn9YRE8Mffk9AMNJh5Y8ovN3skEf5gr2",
  "key13": "5PgbQMaxZghEHktmbcYFUk4sxQeAQ95ikuLQfM5DqFNX5mBcF59Y1yanKEg4uBT1Ks3EVmDdQaARNp9MBbGjRW47",
  "key14": "3dajWzP3aUvq3RSKYf25wuKLsPpUvhNHGnkGXkoC4MX6AjiYtfrvPC6hAwLBvsoAagkpkaCWpBFZXeUG27TvAgWY",
  "key15": "4bwzdcTbTtwuScr6BKPPrzqiJLJqTmr2vPtK1XfVdHtGREf69PLpXx7ZGbiAqMRtAGGKcp47u418RFHUvTLWX9Py",
  "key16": "2wbgWoBdGndsbrFNvaEDZUsDsyHScVsQkzPHg5NPqXx8JUYKe5W6dAJC5Gs9okkkL4bHnoLLSzX9sbghBeCnT8ez",
  "key17": "uS32UnJpwgkt4QtqPsn3KagRkVRWanJrDV8Wkh36XyoKFjr5aiLQgMmTSzJw5chPZxNEVP632BEK1qgXhfBFzZu",
  "key18": "tm3j5Wwdj6ax6RBEYh2JYzEmKBrCQXSCNcdt1cuhaR46xgcsvWoqsEvfUgEHAfn73miumK3ctt6KYPtj4RZhbgZ",
  "key19": "VLvEWDpBin6D22QU7j5VyFHdMfnXSZsUXdwrnBqzaZwQMArqznjZ7TYusSXPauVuSNg2pUSM5t71cGU7CnKpU6p",
  "key20": "4wDxWpfKW3jkqyFtPFmPyZf8tgkDp8mEs2ZxDFWdkPbFhvkHqYmVv5WQXSyDpfz2SVBhYeRF4ytPUSoWUWXmNHVh",
  "key21": "2cNsX2MPidEdT4nxiGA1t91yFDzazWPuB3YhZQYzarJQ7oaS61GvbHfek3D2ggNLAcLFASsNpfMKKrHctB5dP9UZ",
  "key22": "VvEjxE2LZchw7mMEqkGLFr8nnU5BpBi7aG1HwyPJxKU8V9mjqyAdao9jntCkfyHpVMvLLco4LzVB8TXSjQZBNdZ",
  "key23": "2JiJqR4dZZh27m8isYgcMuUBryKJTo2rGFKHUsrnVmys5MA7EjpMWg3FJBuKgDc7C5mF51hFy1tu5cdELm6aCrfU",
  "key24": "2vdJnhnU54pNtNN53TRFuHTxMD3cbKkxdsDk6Lm7BqSTen3EmjnKrxhV6ahcvGxD6yKd5GMUiEVinsqt1FnAxQW9",
  "key25": "3Y2wkvST3xdCQxDsvcQUKMqARhSr1pZqV52SY1Pa7tn3C2ZpRLGfAhWju3DXS7rcQnmiBW8oJmdBQZoVn8gXrRyR",
  "key26": "3gFMBFJ5wAw3RHhefgkgJCGFrHVyQKmPwkdygiQhDFEpxAipGLct4cScSnTJpQf7pirremJhxbZ33JFVXjPM7eyB",
  "key27": "2iP3UYrsvrcvzvwTDyFM3KrwEDcdMfmZCWkWJSubrMqoTXbzSwgGd3yVCYA9MecU1rr9fLdYWUMDZgmYoQyKBTLd",
  "key28": "4U3vCnm7jKEX3cbLtsVd4iLGFQ1TpaW6oM19zwMyuiZgxBLeALekgBrdaQmzwGPmhf9tbKL3Ngj4oAEkjfELWGvz",
  "key29": "6YmjK4j6YZYcPb6GRb5aBcYx4QHuhEV2mJAru4yvJEhcgD9zuSJxVn7zQnRwt4DUNuG8ZK3MVLTqFpXVh2npyXG",
  "key30": "5RbXFnriTNe8CnY2UM9KUfKfqoUBk8ftquH85SeSndGp7zJziFjeXwSGxhAPD99erhr9uCctrekzSBBMvjR7iSVv",
  "key31": "32odix3EsujrzR5tMPKcoJ2WKRw3p3ZjUpvsZTxyWTbVwmq2wFwNR8tEyJRkZUdB34p5Etc3xAYybVfPLby3TPm9",
  "key32": "5myP5HNJDmLWE7jvdk17egSQoKJh3gQD4454QbA6q4QdKh1uNSjyhKcjKUxHNRxH85XiDTPduvjM9e3s7erEzGEt",
  "key33": "54XseNAbEYnQ3ujdu61FLMT6f5utFP8WsnJw4bosch1XnkpVYpZr2dtZMXahbLYPK6uGfbTViSiwdQcMRt5M3EJy",
  "key34": "3wcKeFznm2DvNh9bzWzWRegqVrBCwJmi6nFYFQpEtZBcSiMTgpa2fEdRixq3iubUBUn6DgNiLWK5RfvyaBa2ts2o",
  "key35": "5RHxiRVwx4sVAewJXGckgLRYRJ5sL7Xa1hxJsXNpVZrV3xnnukbrdt57PmRL11zbJhcpUQBzd2NGnernAwPekYxQ",
  "key36": "2fP4v1W3UBcNJwGeWJZ5E7heVf1oaAby5o55DDv1PaMf2d7cAyvP4QJFVDmKtc6m6j7aVRzogJayofTiLopu5oso",
  "key37": "5oYBKQtPCUED5dryb5GMwXqXMqNcKcMHAfdv2TE6Ddn28eT73xkaWQmeo6mPxoZzbj4YdisQcDsWHKXNwPSxH1dD",
  "key38": "4rmgJYuqYLC85DMQU1Lqan8yPsN9UYBwy5ughNxXGgqPUYtCQhduZSX9vAdwES1PFNY7pbAc8hwAM1PGwYYD8eJq",
  "key39": "CLDd7ca2EhPDapHJ4ocSUMp5fUhkEE7qANVdrBdmxeM5oKnVzzGUJJWGzFhkQVwrgs45Fh6VbU6VjWmxVqcFoeQ",
  "key40": "4HpbnvdzhWeJgsh6uhw3n82t5PUPoyzjgzCFqbKhCpYZtAAuW9fWKWqVxSYzVQJgBwMnzJmAZSa4r5cnPk2FMgfy",
  "key41": "2pju1zDXHinQvmGfzggyE4N8GHNXcar3oD5YGn4YaxhicPmkKoppoPcCgjSCLEZnnWTaSKNjvHV2UbssJshs8ZAd"
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
