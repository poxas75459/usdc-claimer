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
    "4KX1kWKA4Dgr3imh2uCjZQARgq8D435Jpv6kgUZen8pGjusVH3EmZgsb1vX9J3YTtF5Nu2AVABDizet3J7LJdg5Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y5Hx11GMDXW5i31LvcfabJ2FBPFfSPNBBDx46nn2KqkUGhZne6X9YKZmjdvVk69RKbbJHmeEg83tBukS1Q7nLpd",
  "key1": "Go6E4n96ANZwhXUMa6casGDEfyxF1RVGrgzADj517FpdaGeBAGyNKVWMvdFU82zZhdBMPfJTDmCVdRJNmduZyiR",
  "key2": "LoWN3U1MfSeUvHHEAYMbteZJcpT9KkvSCtZRA8GtAhSEu2DQxAJL6nmWoLzGWozZEcxJoEFi4Jgjdxm9sje9Jwg",
  "key3": "tYE5RUFYgRogDjdAPg1ahuRx71MnhDi4abQa6vVuhwD6kBnoMKp2Ubc5PHZ72Ej48EAJMKbhyC4S2vZDzB2zVB9",
  "key4": "3PysimWrEXv3Ff3DU8MSx9rcqBrYt68gt5RyqZefYnFj1VSXP7HmBEjgt9c6rFaqSqaKehxEWdJ8iXaLrBBVVSH",
  "key5": "2Pt3rFqEWddoG8kLVZWKHBMSfxC5TfiNrUSxRdbLPm2eE7yacst9B5tzNTw7Xeyz5vcFJGFDFrTVRCHNJdPfNW4g",
  "key6": "4J7EhanQWc9zmMcWN2g7DD797Snx2th6f7tCjibpQmzxyo3hGMJhA1eo93TUQVdazh1wf9GDnxfrFXVzvLy7V6rK",
  "key7": "5kZhkVP5KND14UgTfGNTXk3cGY4XgeJZ38bfyB5RpM93x5TLHwcQJPjuetd3YYwwLBYNLPtiggGEuJ5MmRWvLyp9",
  "key8": "jP7q1Cwva6UynLeBrS2URM1djdSdL4KuhDQrqmM2nqkR57zmThjHdpNg9XckbaB923kuXrrthnXhmGBQbuTdEUx",
  "key9": "5tTaNQ1hDn9yaLUP5SZf9nzKbujBHWzvpcpEfW3bfX4G34M1vVf3SvUTG8gWGwbMszUZbZYoVq9jvewLETw12xZK",
  "key10": "5UAkbFZDx7u9teKgiaDHsmCgZhi4DNUnmCnai6WgDNahcg8GCS75G2wFmmDmcP81te4895d2uSEtx1h6tj1DcmXR",
  "key11": "2vJncKoyWPLcj9KwSH419RZdWNqfxTFSpzuEz1sWppo1Uy9g6gpxcusVFENRbx8J8YpS9YFCThg5Zfq2NuCGr3r5",
  "key12": "5U4NkWq3ZcVrxrdyWuXehBtUkdLuxXgL4fPK97L56EHPzbFUPpdZES6Vvu297cXWnHdWQbG7s3biLAf5cN9s6K2G",
  "key13": "5CSRnvg7Cwy9ZKMcBcYmQDeZPbSTEifbFkradunPLo6XxKDyTXWj8fN5Y6pqJN3J62GsdM2wqeUtRLytDXAw2vHT",
  "key14": "4pMvjtmBsnkVCSEKyAhKxDHpVxdSLpTuqDdbrzM3NTC7c7trCHM5vkXGvBZEjJS6u8DQ8ZtJyQmxsa4Arbtj3SRj",
  "key15": "5a13C68huyBQERWxG6ARq1CZyZA7Kor4wMaF37wMe8QJbcTe1uuJ6Nuj3B5UNQfkA1vj5GTwe9ZcZRF9M2icBokU",
  "key16": "qz9LwD6D2tfVW3AFn3QTQuz3TZdKkuhg5b5YpDomnd644JAc1KshKMiZv2hHYXmNLAZQGJcbPGWz7ztvG4XxkTA",
  "key17": "asuyD6HbGx3g8X5vKTQnbmNFcCQvshjdLxp1StVYZc5J2YhiLDzNMynATE5XmfJ4ykszyp6L41TLKuHHpqE71Ux",
  "key18": "3cBXrU5ns1hTnjWZYm5MqayjWFHgZhJ5ibMVPYZmnkFymLUfw7cMvZkUjnfVf5o5ojdPLFx7P8zF7BRz4jgZvyC6",
  "key19": "4ZT2x4fsPQKMtFbUdm6DWNPdjdSKHJ3eKR9g9tAw3kUN5g28WCiDHtn8fZNKNVGmciaepsDuiUzniVR3GwNMn5YB",
  "key20": "4zv4cioJ6V9Q15FHsPhuBDWaDebzMqpb87SZG3x3JGVhHcNwrY9fYUe7sGV3K8AUwAAQYADoToN9stKBeoi4Kjhw",
  "key21": "4PaKWFT9NRMPUXPHxRDT5dffmNYu974Tbq66ZreLhLR6mJdMToNy8yR7ettQc5a19HkGCqhqL8bsjUC9RQt2pjgK",
  "key22": "26d8gWVssEqhisy76DBVEvpWkhRbxUUb3ixdpzmgMi85oFsWA8m2XgrVoWZLvF7zU68oRPYwzekdG2B2ABawXyLi",
  "key23": "yNds6vrFzi7Uwqj9u5AZrPkfTdyurj7ogq2PYYoCb1jiNH4C8cKNoSif5iEVLgv2VNyjWnQw7M77RjrxwDDrqeE",
  "key24": "63eFK6RtN6k1cVzaEzts89vzED3BNF7q6egLh8ex29g194KjA9u7skPdY7e1QLyk9tjfcvKu1vhMYpBKRXHBHmJQ",
  "key25": "5yTzn61uXopHr1RM81Asnw9UZLDu3U7e1Rk75yYcXz45sVmFCF6Di2pPofGYpa8ZQisESRTxbwkkmCjnRLSCp3ca",
  "key26": "4XrDPxiVXuYzLGFdfsykgWY5YFXkWhWWGWpKw3t5C6P1PxdcFsdYHxZZPqXDsJFqwyVYV9VR818GgRMXTQpe4qta",
  "key27": "65TWVQALeFjZRVAYN7J2Lmjy5GsK3MqPQuGbvZdHhNCxburWLG8a981R7f2b9ntzEwia263pXwFHniYBkJFec5dP",
  "key28": "5YaZGeXK9rWwYbdtAeeUfXH3hL3bwfmhPU9HtfaXoqVgAPvgQAdVRhZpkfnoazsvFEdmQt4oS4PCb22HB9o5JGC8",
  "key29": "2he7H4c5qDsjYjzDq4zYTzVNvrZwDgCdB7xm8jQEdc7CnDJbFqUuPH6Q2h6SohD21aP4PF17tSJoyeiDVDnA9xq4",
  "key30": "2v72gQ5tBtpwLc5PBpXNcJho9RhCun6La7MmL1cTramUcaPi1N247VoLSTPk1MfM1F53n5XxkXQBx532RAwSPh3Y",
  "key31": "3snAFMfz9CnQR7GDGR6sWm1JNm6tN749QgNiNygEZUy3ZzG5cAy4iAxN3uhDfgGRaPyxtrnXDm7ZRYwxY8EjPzq8",
  "key32": "HxWYtaiVcDcp2DFbphUjEs7JR76YWpEGdSiLvkqpKwj3Yj4zpcf4bhMSyyeR49pAfL823GDLuNRtUijTA4hYYiD",
  "key33": "3VhnzV8AzeH9u3JKZX5cksVYmoVQRqohL72Vue7Yd5xwi8VmJuwjoyHpUdV8Gg38MLth2eLhSHj51TjC1snjTNDK"
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
