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
    "2ZHGRUdpaQp8fRYg8PrwuNgvWkcBQSVEYKPGKhbXyKB3iS1wxQ6vYSSfGVtDR1REuH2ozKWGHb6x1kN5aQRem62T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oLq7VzYBNP72BTpGhW69zM7iY5Jaj9GdxFcEjp2YpWdNsQXEesxQbdnbewVr9dAs1BKrhH34GpzaMcPZHFun1Fc",
  "key1": "5cj3Nq5bEH9FC4d3EMoMnKoMDzewfnhoecHWsoze9e3cFAur4QNsfGY4DX3vafxRbUnzdmQRo8sQsaCb7BnmwJLN",
  "key2": "HHPzsNqX5QekYkmuuxPKZJFtMubrA2J6XWEpAjSb3kisbpSono7o66xzMX2mR2PEizQ9C13UZsAcpGPFuYRk92U",
  "key3": "4YQAiYHXhrCHYh4gFxQ3MfbkLbB5WoffYKuPH3FuF3P8ZN4vedYWgbHkguFjaFjvdCyP5PGFKKiDx9QyGf81NUnp",
  "key4": "3gFbsXAYekDiopqQcZ1kuWgKoBXJAxRi6dNNNQjNeHcM7fV2ZnC7JzKCHtfz4Lem6tAKhu52z7jtPzwszH2ixjKM",
  "key5": "3o3939xoZCeLafXJVGX61dVijLPJNkWhGWZ6gMvapAAgCuHbwpQJbaNgfJTgPCn3Aeu4DtE6HX8DmkSw2ZqK3WCV",
  "key6": "3eqNAcHbVRWtWMrpsrMycqsoN6UKAXLzhPCf8i4dr3Aa1JBfm3Jc4inwWeNJDu5mw5H2dQefF1LsTgugDfZAq46P",
  "key7": "2eS76P94N4hpiH1ZQKXwWpFAGM8BcbL6jYJQGJE5bnXjYBQH1DWxF7vqfS48n1zgeahyo5PGMTd81ciMzYESfQ6r",
  "key8": "5Gb7ZXARvVoCwP9eFt6c8tvtwapsMFowRyrRzrj9ug4o2cC8MsmgR2x2yuP7qpyKxg3S7DLQYrnxW2a7MtK4YRt6",
  "key9": "i6oQHFi87t6nDMVzQoFG8WbyriWjQA7oKZ4BpuGtgbcyPiFXCz8ub7HsarrDrG8QwqAd6aNFbbmymgZ37aDbh4B",
  "key10": "5tLpVGy777Ma81NCKnQyraxSSDB3ifMyZXJD3myFMaimJYweVNkFagtaLFdpq56UZ9fhbowZBcyxXJUtACqtjTtQ",
  "key11": "4JLShxontUmNtCwdFaHCCKnyAwCbivP1jEhJdbRUEL6WujP67djCSkxeHBxi1vjc4itL86dWRvDx4u6voSpgYC1J",
  "key12": "5GM6iPsX5Hwr4D6JsCPfPbr8suBNQTSFFUvBiYATVuenzLWGJ9ha1jAAqHYcoJA7pYnqsByVRqgEuZMQMWxtUvHr",
  "key13": "6KFbiUQSGyG9fLqreqT5yHxo6spEFngVRWP1yzCwz5cyqdvkamTcKK6JsHhbgvWoBVCk7VKkHBwMc2RWdZDoqgW",
  "key14": "3KhkG4eemnL7cExE5XhwNsY2mAVz6JtT7u3mRyaMhMeRrx89yCuY2M7gMSX66qP4R9dsCJ2rVJp9VsgLpw1mAsgA",
  "key15": "3k75MhJEj1D39X91Lpf9TGCBiSDwiWsCdq5mRZm9rCHcrtBecQBzYJLgoMMQsqy5bJn48wq2KyavLPxR9GLGinDh",
  "key16": "3t5YeoxUgBPBjsSzMC6qkVPHpFvJEHLRg22hrDSLshXKf8gCTdropLrDiCtZ5YXJskDzGDcvRtfe5bqWtoxNeRZP",
  "key17": "5qaXMU6tpg8gKQPNJBe4tqhY2ZqW4bnwdXyPeGeMkGqHMo5ikZmKJQxZx3x1KBfeAjZG6uEAB18bperpnrFcXkUF",
  "key18": "3pDH4pL5heEXRfimmwvxcXtqkQbJ7qCaCRRW8yevVT1rftsnYYFJyb3kmfVFGLrs2wP2fiG4gz3TCVosq265SFhT",
  "key19": "3jkjMXSeWRHjXfwu3qgUzhTAFL1YyH1vwXuDQewVVAhCbFTVE7b3rC3t67bVuUSVuUCbXFzqxPpKgWE24NEswf54",
  "key20": "3UFFF779jdaPH2mkfbmWiiAJxoxNM6uPFoVFSU8r9viB28uMZphf2LKmTKzoKJiDiAhwUbWMXK5Ht1GpC658JiCz",
  "key21": "49VqbEzyssgYGisDnJUk1BnJ71Nzc7pAZPHszpT7R9BhnzvFqm98yE3LFhvjJ5BXjtHJVxaaDJQd6LBLdCP81WjT",
  "key22": "51fLJtvL9omNZ99yWddxAFpt8hkUGxDCqV5ZWfTbWwYam7Lbgd1tdvGV4HhbqXWhrdsYVuovVEJjraFhQ7kddDSh",
  "key23": "4kSBgEXmP6XaQQQofpaRs3c9ejMGsajvnDneUiqoxEgzYTs9rVxLbBvQf7JsbSELMspzzxA1SHQLGoyjReBWPyZb",
  "key24": "49z2Dg28r1rKviFhGT43X6XYxzMYHjCyLBjoKei4zfd1qr5HZxF9QQxTUep3nTG4cZKVr94qXqedhKc98ErsVbHm",
  "key25": "2cHfmVMHLSCTrQCeUVzdupSjHypjBosWdZgXzJVz8b8VyuRkyvRtdYYxFgQ9UxXujQREjHicwee9mZkQDtPUm2nS",
  "key26": "2mejkbZ1G5gqqiKpovD25tXajALfVBF224A2Yv7BzaaXt7MGk9H6o9zNagPPurtA2P4jsw7A3KegS5RqPdoZmDwW",
  "key27": "43guysbpa4BdWWuP2jdZPbuxcTQGdiR6whMk1YRA7Wi8rYkMd5DaUKaGJQSGmhuPnTTuKLw1o8TjAU3NgQTAuGF",
  "key28": "2x1Y2Z78oyq8puSHdf8ZN1Q1511EGr8SFofvw6R7pjqZ9U78V9UmHAoGd4yxZqtKyhaUsfE9Y2WVkGVrf9zox77b",
  "key29": "vJDqt7A3zS53AKLBnabPZDQXG849vCkHcbWWXWVD64Zcp9AEzPaAJRb25DGzcYqpDp8L1ngaSfJpLcAqPTHomb9",
  "key30": "uio1HHzY9zoPBR4KEdiKf2CcRVC1Mek7w1PcwkE3xwgGtwpGfrddMhhb9Z7qrRnossxTTDe8mUesT5rFgWPGNZy",
  "key31": "4pgqnS3Teu77mRwhh7ariEXMcUhXswxuNRAvanp78m9Avrnu7qrF9Ajf1KS7oHGVwR4FcK3gAWWNwqPegiouAMwk",
  "key32": "2s2kxcdYHogj9kKEucU18vFcycty7e6L23AvgmX7nVazcNx89wTa9VugD2g5aGxQigu9tZpU3egMZKmSLAGS9AsN",
  "key33": "38a4VGvUha23T2Xt4LHNBQbxrKQdhvGKLPLGmxGkNtq9iCVvUXtSMHYL7ZD7tkbMCYwQsny9B4aWwr5iA2CL4XJ7",
  "key34": "51Lr7HP4TfJmgwMXrBEMzJ6TnWZ9M7Fv7JHc8K28tNe9egKfPghZ3B3JnXF3mnDRab34BCEwSX6Xg9CUT2qNHpoL",
  "key35": "JCCrZyE3pfuzDYUcfYwQ259PAHGKMG6tHvJnwtoCF2sMo8SywvNtoB4SyYEvU25j1AQjZMFwiAWF6xvfLd3PWKi",
  "key36": "GhTuguw28rag4N6mtvoHQ1eTYN1UiyDN1cyABAKqvsdgrkARgtT67E7bB76yHGLWQWsWgovcaEeHXfZNakFgePb",
  "key37": "5fRRFSLq53aCRUPVUqaGomxEW3wnZEg3DkzR9eZXda4yX6fUstxyuyMosGr9q9q51DScGezgPsjJJDWx2THKoes9",
  "key38": "LPZD65uKMzEjWtiGcFGYAennQTt1QVCmwz13CiDxWeFnKmKhCueApbzQA1sPMP1r2v7iMjiZ7pwsgai7kLqDJda",
  "key39": "n8JQ5Wzo7aRvHZ1AdoPF6tWc651fpC3wKthckq5KnA3ik8KJ6YuyGFemgNkzauaVJgayQrGpKAhnMJRzdA5jE66",
  "key40": "5v9BiADz3zo78EfDy9MVTT7E9kQeeErhEKKBf5Epts2ANqcs6m71jyJRB31wxPvpRxG4Ft5h362ra2LYiJT9NMP3",
  "key41": "4CJ3GqUXw4FKbNMfevB1ERxMUReMZtbWEvZaF2b9juUSgigLmktYx4oWrkP2X5xGgWuzJi35AqwPBUJDrLwB1Kbv",
  "key42": "3VkcwrrdAbsjW1Rew9PRWFvvRz4zjoDLzk6qoNA1LqUceGghd18WkHXHRRCQgig7eUaZXC1FuDPnmvV9iQzkKK8V",
  "key43": "3UPL6c3ComE1FvYroLQPZqPAMzofk6Anq3SJQLhjhfi72Le5jtCyDfNtRy5egzwuWmHiTTbsM6rCJReGLWzE1r9x"
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
