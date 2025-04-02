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
    "KeL5nQvEKYCrD1wfozu9uieQANSBHpXuWpwi9C6ZhG6shZ96w7Ze9MrV3PmoURzs3w8o3Ay4JiHyrgTEj3nBFXF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "utAUDa3n7q5S6raxU5VYWfYmjmPz2b9TakFcMNjX9YBVA6vaLa3fxYkG6nS2gVHB2byuU7j3CD4yaNQX572N8Yr",
  "key1": "hXctukULFHAGt1WuLHr9HEiKsVLSpJJt3xqBRc38zY4Eb5AKMJsLQ7nTtZLyD3EcPmxeVmsquUYEn6GYKkhh14b",
  "key2": "5FbutogGDeUhX5HUM5eKSJ7BW5yJ9ynh9gkUh18MQuvfmkAw9ZNYRjJ8k7gobrZAkv3WRkniurXFvnKpGs5ZaZwg",
  "key3": "27Qx2ouGSpnmzets9GWSeJErA29kYt276WPuqzMMpxPPK7D999bHQ1xQprUm2RfTuVTHDTXTRA23EuCn6RGdi2V7",
  "key4": "3vM5vFpmu9VHcV72VXx6w5LaRd9GCw3RqgWscLb8kHy4Ujh324ev3NhbV4EayftPu9dSnDweoSusfMgHVRroxSz",
  "key5": "3kBJJcQMhgoskFsfE6YverYQC369YVGiK2VNxocgAkxWRGZGJhsMUWQzhRPMZcyw3F1yVJ4Go68afyzC2aGA3DRF",
  "key6": "4jchL2WjRbshVZ7KNEmLY5VNjEG7B98ZFYxXzmPDK6V3KP58bN4LFayxQPotW3GXv8KbjRhhbm4sk3QE3bTxqhSH",
  "key7": "2XYEauvUCLFk9tVAcfRc8xYKejNzrNHcufcYwYQRw54ZWyYVxBgvwaw6sSkmkT3bJ3wLJbG2NEetc7kF2f4gNqxU",
  "key8": "42YtKdqNsNQDp8BRRhzdJu6JQd7AxUoNAowbeeTmjWKVBThgjMMeikvVadYa1tAwCvNp9cbzhRkRG7ZKA7G1Dd6H",
  "key9": "UcpGDY6D3j5U1ft3EbZXw6S8EugukmWpDLq68K8uWcewYNceWbfuwq3AeZGn45SGecQG4F6TajzMYxtuM2x6fY6",
  "key10": "25S4TXUg4rPHpSknkuuT2wzGqNfAByJZaLEJKLMRwYXAbHxuRVjbHDvBKbpcwSXY7wWPAXWKEu4TG6qEz82eMDcc",
  "key11": "3fnyLNTh578tFqXVvshTJVn4D1vU2LEv6MDoQCTsAj2LxwJzZXNNEzqmMFqprW9CZZPjYS1Jdbo1wEve4CbaXque",
  "key12": "giGymxBB3mNrmaYMgsA1manfj9SQc4NUrBNmfoz6PU5L9HByaerqyq2i52QMwWfV3LtWsuzMbhAso3amBkQHs6c",
  "key13": "4VjBsyz1gMUZ34FbNF4VyWQoM13bpZEhAAFvXXTwjoUbu43LPBT1ibnGyAJkVNcBUxakf7hJfcFGEA73VRZJLqjG",
  "key14": "2dCX2BaMs1631vMW821xP5qQTSfSU15mfsDREZ8Cxm1Z3arrVCg6moMCk4AFE7bJkkJ5HuaSss8Hxgox2rho1Xvj",
  "key15": "4Jim5GFhPKcnWyY9dWbUgVxohtKTLdSKyQFuFAdaKnqMxJ5j5yMEz97RfMYp6kZLXfQcpuapAjkgMnSSbvcyXo5B",
  "key16": "r2JhsDFLwXQBTLZwJdHvoNgpQaxRJaEBN87QRyrJtLK7Q5oGUp8Mp6hWN8YYrmmoPSm9nUGZYiFTYVds6PZXid9",
  "key17": "3hZuxmuCiRW45JUntGfNH5ApjNJuc9yXbcCTcqzAHUtHsHBKvE9m5xxD1XnFwLGzieo2c96dALpsqCrspbLLNUug",
  "key18": "3PQtxnCUVs3LLfG1YHDH4uiX3coaB3xfv6TbMzt8xg9nWrHHT5nQHki9CuxCPq573nPLgsug9oPNsnuTvr6xWNwK",
  "key19": "waaF3NnbRj3p1hhxdAx7KwwUmryNpaCcXHt2pvGEoDtnT7cydi8kc1ZFBn63kozK58m1JJNBdwHE7QSXFgYvAp6",
  "key20": "2XXMW5S5sPnMeRE3mVi9iZs6ftajpBiaotYwLGMpohJojpoyJ59PvB9CrAxsXpKxBweF6kPbN8g9uZHX2t4hVGMz",
  "key21": "fzn9r2MMQ6vZyeuDMLveFe1hjjYZRo1xJiKegHtQnD4WZJZ4CjWofeFcsbjgQo2qY1HWQacVp2GMhd4YbAEdwUU",
  "key22": "bVfmJZ4eCQ25ovoPUAxVVT8uDfeJeVcjVi7gTH9BjWg78DEgvD3MvRqPzHcWN9n9eriZYPFzhJtSZCW1v4E4nLa",
  "key23": "4g2rR7jQcjaJZ9Gr6nP1KPb9AbSd3PPLqzHSwYMPnzbLRofjkdtamkMgsHexwPPyXHehr9suGAchgamF1oKiyTGU",
  "key24": "Hhga3FR5hFr2PnkvZDubW6o8AYjiUmicRYwzrhmEvvKnTbgWrwiRjVkFr8Hme6SoJD8zFdctox5Wnb8U4srmvpF",
  "key25": "3FFKEgafkA6t1Mtdgwn5c9EBp11zhz5gvQDPajXTyBcKswzFq8sqr3gfDzF1JLTgnfxfLQtSqGHY51332TyZ1PB7",
  "key26": "5DbmCUae9dq5ni7XvFaFP2a2CkFykn2uX61JrZhoDstY7hRrPs1GrRrKoemvNCfFeCmepVHtnrn1EDZF4GNXTzxP",
  "key27": "5TY3kgLZbJ7FiaUcMVZi46YxJT37tfNeScTTNunMrgG4N3uqZyremtUpTTT1qeHRzRi4JjxXd6hg7KnL9PYZvFP5",
  "key28": "5LMR5XxynuNFj5QBm4CXCRjzJJiYoTCZymmk4oKJfPcz6gxtC1qk4ZifiEzzM5qv9sCZbxFvRvgYJZAZ7HAHK95C",
  "key29": "4F5E2xFPiMRxoG4Ng2pXZCf9Qcmqb93guiqdzZboALqpXGLBaBhamiAdVdVt7WQmQUCyoKKRYvpA8QRy3XvpaUMw",
  "key30": "61ArfiMS9YSS17gBBGhRduZJpD3nooXVr3i3M8ko2JMsztazRbg9s7eHRdigTqCYVxD3eP518MZj8AUsmYxFnuNh",
  "key31": "3wcbbeyAK3JDA9KUuAdjxfDK6Qz4TMAzPoR3vKP863F8N8AGGhYWgcvCjziVB3GcZe3fgDhX4dXrvesfyeCkjDY7",
  "key32": "4eNkLDUR9Ns3fxQeQx4sP5do42w7NYgLZ2H1kjygWvU81ZS9HrrUxBLnWPbquR9RqPRCaaHuYDZrXMVJ8FGdZrdk",
  "key33": "8LY7mWycMa67CCicottJ5XMvQAQBn7yPUUqQcNkmvV2d9Zft11zgp4evrvWUVtga9dh9kr2Nzr7u3UhZpaRsGiC",
  "key34": "46tYEFy7EpghUVeuRYXa3NsHS6oaDVLCrnnCNGCvYE1qVdBMzGXLuz6j382bEyiNoN7CYzyb43k5TvLh1NGTu9nb",
  "key35": "4nGFYnzWamr6ygbNZJRLNVoeo8WiEZKvxZUaRcSJ1tNSeERzVhcn2CoNZcFqVbjpXarwQcKvQ2At1gNKNXbcF6L2",
  "key36": "CwT1HNwEn3Si8T1a2XBwcfAJ6aaVxotww2P6sHBG9r34pkGyLogxRYp8TMwgqEVkibFwLGtobwY4deisw16o7ho",
  "key37": "5F24gbTDxUzN5ZpkzD3vdZgagwbHEm9czRXEo2hZQnwGPT6hTre6g8tuccKH6xS8hNUVphWf6FN1W79ifA4FiEni",
  "key38": "3YLm9yQoXAyRKHEAAQTDQL8h1pcWo1LmcVcP1Tv8oHa7mZQba5BGYvpMgoxgC3m9C3QspVCgEJgSVMYifonR2jup"
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
