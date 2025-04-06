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
    "3YPRjZawiG6NQFSdYzRHfkFdVn3ZetHvxw4itbnGYkYSraBMeBZQ4ZjcnzMtSTGfhDKcnoo9MJktrJ7qhSg57LzY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VKkbB14ic6y4eT7K1ztbWcJYCyhfjG4WC3hGhnhEuUWNxvT2D6gaHvD57QKLGc7zmgWgfDTrF4SZxwFdtYbr35Y",
  "key1": "67jYk2ZfBmDWD1S2F7BajX3xt4rDDCxw5MvemCqE6KwHYUEXXsVTbF1UZfLqCMPkEStiV54AAnjNiWZpkkU4X5Vh",
  "key2": "2996uzHTyTegWfsUuJkVkZtM1zcX4mdfN2PkBnrbiJQC7DEFVrP7EP1MN4wAmv3FjhDVUor4bw5WccmuUB625QhQ",
  "key3": "UoyzqrT6B3DXvjL4j64QU7dnSwFAfVjx7yokp4a1frQhuWwp6vEu6xoFddpEgk4tC7D5UJo8umfXiLi3s57L98T",
  "key4": "2t4wvT1kYHSRKdk3QoUyX5EkBchYKrtEVfHEh47bNrujW6voBEVy4rJAwfdDpQiAaf8g4aqyq91cVS2irAcbPQi5",
  "key5": "5pu4miu3izp5kSzZinSGSd2voPaGCNZobK8i8QAKCQrjEbKnG7mXc9tgViRiLTFVkiWi7f5iNNYt1DjypzZA48G2",
  "key6": "42QdMMnEGwjnbgqVHNVgcvb6t3ZhWyAmxCK27D9dKSAyL5jMqH4c8ndmUQzpRYpnUrfi8kFz8h7ntmXf8vNyxAPH",
  "key7": "2Y61HV33V1KxeZzVpUy18yUMhNWrGHPub7irvhTYGn8hKmQpcwkavZqrDdyCWtwVg4goFbU1thDPzk3eY7jfnyez",
  "key8": "3c2MzWzzLG31Jct1NiCMfg2W2vqPcBtB37hi538Mg2cSTm7CwxKwmUjUFgPYfHox58WdL8kMDuNhWfCDQj35McET",
  "key9": "ka14F5LCw6XHKoa3RhxHoazchU96bvvyUFRQoKQuDiLQ9SF9v3tqbufFbGVTwZF1iSGU2JiFW43MNFq3WJ2cU9P",
  "key10": "2KG84XSKEKgRr61eyeAMxwyxcghF833qVP8oG1YtLrLasL7mUukzaRWYpNyvBL7TSCqJMZSjWeLxz1rHcxjCpmjV",
  "key11": "cGkpRQvf2yosDD3ZDUdCmrCV3B5jXMor2QYvYfhRgn62sWmaXrhK5FL7hwNifkn5b9X6aa4PwYFV7WXCG3YWnKC",
  "key12": "DoEAXPZsckD6vgDZ2rf6vkZGADSg6qU28FqZSUF2czs44qn1j75jfJgw4RbEsWYPNCmVjsAf4JSYx6qouKruxM8",
  "key13": "3HF8APjcLKShiQtQryNEqoytWZQ3fPy8Qi4QbuY23jev3pHBk9HVmdcp1NeMzqp6yEEfzmnM5Ct6d5DRgRDiTa2N",
  "key14": "4AQ9V8tZZq4kYKvzQUao2pSCrDviLw1Mq815cGikDSXG7UUeJU6vh3E1tFm6w7HZJgiUpcqk64WHy3D5nYkZDeQ7",
  "key15": "3v5vvSUwHgWJ6mQtWi1CfYkjsZGK4od4nUCBo6ABcdy2RYgPGg3Sei4GTpm9tLxQfdPbRgp8HkT3vedbft82GS6x",
  "key16": "gdAvKfCQZ3CcwTNLeTcjbLoNS2NPtHHwL8BjYkHGnNyXzLDM2QftPJmPWaaPSowMJvLfdiz1y9wLFz4at9GxzX7",
  "key17": "5wUZ98Vz5htUhZVvCvpqF8J9psCsYQpjeiL1tG7QM3nTZe8QjGsPRu1VoiHhDr7MXogS5pNFcgVAdkakUyNkb6Vp",
  "key18": "4aVdJXsvX8qxCav3cgDSyuifqjqFXCRKPaFq3mEvEk2LthC1FKGgjjSckVjnaM1K9zbD6Qko2DvSSSbsK3vARZa1",
  "key19": "5bMhzWQ6CLwrCv829TkBpiijowuJj2tL6PNBzakrRGzzMGiYcj6etidKXSMq556vu4H4dRF2pKmeycZka97ntkAm",
  "key20": "eQCmUnrS7KUZGgD19uuSVSNph8Ei5jeVzEE9wSurPJsBYZt2X45NpzhmEGPUsHagV4GLzw9xDsnfoUfYEzuvMad",
  "key21": "3ovE8XZdx6UewNrXXWUxGpD8Dyg6B9QgGtGZsCnvWZ9v8LAv7kpy1HHejyPibwZaQNXGvy1wB8dMWz4yjDMmqxbb",
  "key22": "3hUHMPrb3UqyNUu6KpNbqaZyLjsxjKY2myYCKUGhzMcS1ggRc19Gm2NiR1ySK44QY6WdpWai2VqztpJ4TiE76nX6",
  "key23": "34TGnDDPF3GSu1Lk2CUZZY3i83TxBKu5VBhDox17eD8dVr1kvxRX2KZ5athb1FQv7J9nKQvvML4KdXiKFXvosuj",
  "key24": "3cfRncZcDPHbaz5nzW2tufVviLJkU6n7RxAXdoEEk8BRHeGcnnedYNTBZf1JX9c66iNGahRTZfgi2jWN19NgVmHf"
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
