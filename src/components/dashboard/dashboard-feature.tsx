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
    "36kkoUdY81fvd3w3fHMy5e7ywU5HqEX4b1mq7YeikLMWTEioxupSwMJMAMh6dssj3CunWwnc4uYpmZKECFWgBdza"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xci8YhzM6V51gVmA2iz4fDGFATbJPQH26ubHjT7fA31HwDkExQDjCnhJdmkB5cXWgPpt5Es8szbPvMk6QPpDDQz",
  "key1": "528vkaQMPGqTDG3fGhf2gKrSVUJP3znpFC1ME1un33g9ntNH46K1U5Y3eTf7r8YLdVzLNjRjDPkmT9RGHnMeMQKq",
  "key2": "4TqRNmmSAJpLS94fwsGc94m4EAgU1NYRx1Ffo7PdKRB8UW5WRQBnttgwEg2hKsJMwdrodPjN4HVv5vTBaiSresyT",
  "key3": "QkUUsyBCjFG5VRDiEXtkd37qdg8nZwx9EXcsZ5vt1tNPreXjNrYRnF9Axkmn5yedt7up4BAKQ9LQ2a2gQZ5PyBQ",
  "key4": "FUBQ6bwp5t4uhZ4TFhkvz6CZPK7uSBUesMZtwDfkNLLpxNht3TDLbg1svznYccuAjKsrHDrykhu8MWHmWQ51esQ",
  "key5": "44Gak6AnroMc1xrQE6TayhspR5TdHBPcFGyDU9t1aUJEeoA79di1pBzKAo5D9bjYreSfnG99SiahdJxTb8a56Sb9",
  "key6": "5J5Dj5qmNbYHZLCYgrBdWAiKFZpSfxnayYXmfupEwNFAJ76o67iWV9sB2Ug4NMhTeWmLLB5UwDUXCAQm4b4HbbAn",
  "key7": "4dK7j7d4qoQEaNHro6x6WuyqCxKDRrmCPnd7geuR7ZFWAsB1PoN4VHZvkdDKd3L9tgphtVXTf9MNxzKwsrv9ms3p",
  "key8": "5zFyb8U5Ubq2otZ5xxGnrFzTADPsAySVwMCbPECJ8iDn35Fo335P97Hg9y4XZp8kGCHmZypfBFoM9jzCZZKc5bdt",
  "key9": "3eRTVDTYqSg1iAreEnmsPuADvfwmcCC3D5wBRs58CXLwd8FKUmbTHu54dDqfbsq5rpWZnrcNG3gZzfmmH34VfxB",
  "key10": "2W7qa7bg1BwzXCntgSE4DAXT7FwFVrVKNBgkyexkMSo9mzNr7DVk2rMpWPUUXw1wojvZoQGgwswmmpRiCTDZ9dik",
  "key11": "5oB5fg44S78D17s3CRNyGQBzJNmE2LEaD4oMyrVHHSDtBoRKcE9X37VS1U4vJzjbHdxBKiVrV56iX48Nb2yH6yks",
  "key12": "5r3rTLWpgwJDcix9SGGGcf3pFBaGKrykacWVGL4JLkJo7LAt47bhHgUxz6C2CYFFZPfTZu2Fus66fi7Ltj7CNoVe",
  "key13": "5zfpyqiSYU678HfCXLxxsEy1k9BrsHoNf6hPi5HKXL2bqy8DvexYdyc6Xx13JjZ2LkELduYjpqZ7Sigp5DTJ65sP",
  "key14": "2rYRrHhGigWyUZtc9ivtCuhTbimWecGVumKauSo7cAdehDFCCc9py3fH6aqYo7snLLLchqpZykFV8x6r4sz9KAoC",
  "key15": "2dSvahwFpSSpv9xMe6BkVRF1PUQSLnFZGoHet4j5X3UUZLdspV7yGZaVnoGQTkdZWvdZ4gJLtppLdijFw2NEGCcE",
  "key16": "5MjkD8LbjHqnMYMYs2h8JtCF4A8eKSXHaazqWemsztJL4MUp1D7Wvw2TBtAL9He1YCXYf6yd6JZHcNFYUgcbwRc8",
  "key17": "5igWjjTt4oRU18hvE7RamFkSVpWbZAKmW8JfnTSpxSJ5TimmN6KUcakZe2C37UMHYK6KrhJydGnkxDUiQx6n4jqU",
  "key18": "3fJoEsNB9XTyhafdg5J71kG5qKFXH9cfhjmEtrABHMpyg1EshhDjhPa7gtqS2jEBMwwrsAKZL19XTNP6Er5mBbwi",
  "key19": "4RpjaUhzNuFWpKJCBX4gY7WyZJ2YCDLz2x1eQgDTrMTPB12XaHGiiwsPArHzBytcGM1jCSPar6X5aMHxuiCgoQ6",
  "key20": "56iA151krH9uoyxX68XsWP7k5AvC7VUYfMu1bjfdxbVSTXHzbHfXVN7dLJvDPeW1HYMJqpGZunyDn7VzTZHCjfNu",
  "key21": "4gyWiYTJv5pLdBeCE7ZXF2UEWpRu3d4CZb27s3n3eT3Udd6yLCMSPxvGXpfERjbzxxXVuRW3ANNS7S4JnUmhyiWq",
  "key22": "3Kqfh2GGAV57bhoHexMQYZ8hs9vDYytgUiaiz3yZoajYCJ7B1tKrZqk6Q26oudLsiDZsJMmytrPhhhkNrGLWH6ai",
  "key23": "5xNZ6kW6oxhcmogLGsYFpYBEgtDyPxUwGYANmuNuKb1dZBFJErWLZzhkm7YEmaUF5BiXiSXmdSfxzxKq78kbyKCn",
  "key24": "U7EwwhuGvVt2pibHc8NRyVutqTtHYKPmmJRJ1dY25dZ8SSxWS3xAdnzE9cSpTHFMw3ooLFta1D4qkxGVrVfg8cE"
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
