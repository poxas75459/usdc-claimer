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
    "3MLnbC3T8jgTmTkfTakr9dKv5vvhvjKVKKUM5ugAE5rPsaLXki2X85DbhiiRPfZFnPEMk5r5ufCsaQF5Ytx8gpMZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "269yi72FNyfGKwzWWMTtXKr65CmEoE2fNugYzq4AH5GcVUCKHL77ngG2QBwnHwR5w2EB3H8z2pUkbwb44nyZspZt",
  "key1": "67QmMtJnEp6A31fSKnGzQz6uJMgWK9M5jywE4BXnaiqUUu7Cyz96xZQ4hmLYB4snr7doXP2JYsmNXSJRMDnyzpCp",
  "key2": "1ydzDkUHApGtFoHcBkAKhQPYmw1nHiSHmYiLXDogPTqwapSi7MR5kAYegvQv7C34dd3Qik5y9uG1SrsgjSr2Po",
  "key3": "DDn7U7fy9HrfBsR1FU2Mx35Qyf1JvhjWM6Mu9UFqrTfTCV72JPqHteRRUNnmFnuGX8rqGfPRnXJwyFrQXvgxFRj",
  "key4": "3ocR51LEA9EdAUSpB8LvnqcrRi4i1SMtfDgtYEHdGxfKL8aYMm1dHfYapgTHe8rcnaJNuRegeLTPvzYWZJroLhds",
  "key5": "SnBVT31UfRUqkJzvEgaeqJMxBtquAD7y8nhTWFXmfYF1WTF7PtgYFVnAPicRejpSntkqSMH24bh6B66z5VRXCzQ",
  "key6": "25Y28hwKxQ7GyZWkHEsiUeRk8iub8GhJuAqMhwsz64fh3Yaj8xKRTqCmhNMjB1eef8fcY343Bs4QNb56BMuZ5XwV",
  "key7": "DhwTYBR5U2WYJZEKuctSzdTsEjgcjZjY9QZBZQS1nVxgvDsLLYpz9tnph52mmurvyq6MzdJu94A3XBzz78XRVag",
  "key8": "2rXW3rYxa7ZV6ojmBB1DfkNbsf9zn1jDgvXnf1QmY1o2uXrUKjSqhJUZUtBSu9Y4H5SScrWnvKc8BaCd9r1vZ6G1",
  "key9": "4g2PKmJn3xayo6ZYKG5EeFrycCbZm7MVf1tDFmz9PvXQ8DEnwRmEEAYEZvhdKmSFkXbTvmakRq37vHRng6AUhVwb",
  "key10": "2yTjn5p2PFe3CsFF7wwu7AypxUmYALBZqtQ2uGNxX5Fxq5NmZMCYM1TGJSfV5tgaFubJP1efbk3Ho3cb5zh6Fy5A",
  "key11": "2asxqsEWfk4iEVEA4i91rn9LiJwTgxjkc8HXen7F1eWBVbeeu7vAMudn7uyNycBnib12RNmX7k89gsSPztYtAjpJ",
  "key12": "3htMpGAscMPbgMN7bTRdxQy5fZuHbRPS83pnKCSMjZd9FmuN1pimdeYrAEezPwgNdp4S65piGXm7KGa1fiXBwmyR",
  "key13": "2mAQvod21zGDnjSDUefsmV623TSiqJYcmUiUf98eSanLjG1TNrconR3q9mftFkPQBNd6b3sivPq155Ab6QkFDNZh",
  "key14": "27FwNzZMTkTeSS1S4AqRDut63KCzrZDhRv4Y6UGPQXrpEMHeJY4nYP2yFPfHpQwGDvMbf6eSj3XxdjeEwfYEEAdS",
  "key15": "24QaZACc5G3yLGuMxTAVrGXfcQueMjg6Q7P5TLg9eiH8QwtcPoKGV2pBm5g75iP52RUZH4mQgdC7NWArZCaRBL3c",
  "key16": "2sNYrGJWbb4HLoaqYDdtCCraX9i3d4iLNsLgLhhyF2zDZcx5rbbzJ55hbycfUsr1PyVyj7y7oiFKjXER46ugPxu9",
  "key17": "4ahbmv4uqkVUnVrFRZpXfCn7sMBm1XxVXF7MHY1XZvCzUKnCz8iVpUAaJAGC5S62f9uXkLkLAUfPzF4sb3cb4w6G",
  "key18": "28qpu3MzfSJoS4KCJLgJUsHqLuE1NGWct21GceNqXRDFM3yku8nMuFNxgkFpRSdAAdd1kwQzHZBobnhzKM6kDPtU",
  "key19": "5GBuLRcWKFL88ixptroQmsAadJJnbsmvPhKa6oUZWgktcFXZz7q6adKkGURpN8tvZPaqgixXeQ2wZiJ75h1EJkPo",
  "key20": "3dm58mHDpDGsCKfQM23MNc5QmT39nKHiqA44c9R5Vg3CUmr7bkG9HWvwiWpLArgD4o3jA11aHbRAyVyTGA3cCDdv",
  "key21": "JqsL3uMnp29qCnBYh1CK5wYTj1vDakwxVawrzABuLiXvMF9dMWZVmxYeRnHtXmnj8sRPD7nSEFzbjaXVcKGuWbQ",
  "key22": "2D9vBKVQMtDL55U4psaZCKWCURSns4ViKDx7JVwK2S41hytLxeT2FZwvzqiqwVhooiF9Wh7aefyqzMKf6Z5PuNjE",
  "key23": "3jEDs4WFeBvaRAWzxyrPzWRvPVoM7yFfnx8csaK7utz65RgqJydjaFZzADGwrVPx8sNFPAPWDomKhYRK7AGNvr2A",
  "key24": "4rdKd2wdiit7wjnfXLFpCBgzXdvotGKkKKcFA2PdyZ4z1E4nRuvPLisdwFs9JbBst9bogjq85HiZncHShKjvDmBK",
  "key25": "uGGy77pKHcRNdhAynEWLzQfMghC38JWkJMdJtp7Xv3AHLjYDZbYXK9b9f8vQ1KHsALEFuLTREwi1H2gNSHc3SAG",
  "key26": "bE4o6mM8YcretBCBkqi4wmfUfLbSjdbLHaXBTKhG3YJwhMAGbm4T7NZWdZ2RZ321TiKqSr1Bt3sWCaRgdAMqAog",
  "key27": "NizpvyiyHzGAwjVGFPbQa7ipiyjjhZbiskRfBbohSwz4Qqvzd1gFCGDZ3iRp5w43928NU6p9EqPrnuewC6nZsDR",
  "key28": "VoT8dq88T1srwBbTuHjvhawyW8PYXUybgKYtbgTYfEwfAdugWgrWaB15PZ6djrc3ZApMc5cccWU3PCsLyoU2LS1"
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
