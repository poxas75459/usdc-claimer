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
    "4pqN84J1E2tcft5aqthfWd3zop4fnEEdHRu9XgA12KPby5sLvbjDxiYzhn2Emqi57noQCHS7VvG1gaUpazS77g48"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D6wByFZnukf3yqLXbSaiazTwjxR2jf9MZDFgHR4kbDyFXPDmagtst45YCQyP7Gjxt2caHAmovoCCQvEhZbPbqqi",
  "key1": "WkRXaXtGy1kuj5Lsg4VLiDzpmQZC6G6tpnWnrVbU8rPQ2YyLASo9S692NiqmdW6hTPDAZnvmZxToGhGB7MLRizk",
  "key2": "3GM3fr6DuimfhVu6RHtxPP2znhUZfENeS3GiRwv7KWJXHkG6ML2DM4qyxKkYpN8pdv9b8VkZTx5u66kTSpcpon5a",
  "key3": "2Hvw97NSNvJU5yEEAa83J3b7LBxcFKspRns8tfAWoVH9J5sCXM1gT5zcrBVjNsEAPi69rEsCi64zWeectgi1pGiw",
  "key4": "psa28NPq1r8iAA7wokxcj9tXmmhgUN2F5RkZmyNcq2bHkGDXw3W34Vo9trLQEgVrhPJ5WDEvVmT724dRQTqxDVV",
  "key5": "4kyXnNFqJRu71B5WuCeKthkbavn7XAMaB1UTFWDWE4fGDQHHczr3NUZRWiMXmeakLqoLELEMfbGEFk8xCScDQ73C",
  "key6": "e86pbFFNcdcaNn1PY69XSRrTwb4kk4gKGPvB2wCZLU5HnPMNhm7fJEFaJphzhhRe8JpyZ9W3xYNLKa1ubXahidU",
  "key7": "3bhPTUwW8rZxEFQnZdVmyV25NGLZNhCuxKSCywzhz5hR5knMaJxp47E1LJBbEpfEbKFG3wHDwXxpiW12v3NyQdZ4",
  "key8": "21TT53EXURptPE9nnRVd1kbsvCTU1uCcN7ZQ4kh2TbtKxSeMXh3yM1ADPPnv7QH2XuZ5A6iUdqgJyj9ZFbJZWAEh",
  "key9": "3dNsaT7VcZ3sHWJeM4fMnY9GYBWQx85K1rvwfFTVvfVxrEC9tQroV6rvHmRU8LrWwYJzC1i64us2KQiPHtVuSKdm",
  "key10": "cuPYQBtqrWMnq7mH66ddJXLcez6qwgeJAp3PkKYqxSaVPceGqZdDafBBqwoJmUKyVtGtPQajScPaxGnj9KsC64X",
  "key11": "w6kQMaVGVLGdHMwR645mmpFwFbMCu3gEYtTVdt7atPqq8zWCae1Pwk5KzAfLjmmuNo7ABRCM5KxjSYXTpqtBbn5",
  "key12": "F9cJsLRJvexym5PU9K9vk52c9dRSdck6juxb41EPC66TA7czcSmjb73yirSABVPMETghvSzTqVj7d11L4nRLLrS",
  "key13": "44xaQ6mwuz6nLRTGU8eJezmJwkq1NKs9jYnJvys6wvnoWmGnKcsMaSwoNAVbPtD244cWRoLMXaZ8RMjZPXTbVfsS",
  "key14": "54cQ2T1jJPdVkw87LPh7YmdPkpjkzaCHeZVvxK4a3tENXhZhse7QAjx59rnuLjGtjgjR4ExDUdEVxGHmXQaAAUzK",
  "key15": "CkDNHeYptpd5i6oWomVdHC7CW6yfoc9EYarjcSZumDp62H1MAMMhoVd7HcDaYyKwoHUE5wXhVpYb3ELuyPSSwUV",
  "key16": "3VB6pPemjqsp9bSk8ajNPR15pKNKmwLNNRtyXcfQEBujALHijdxJvCsPYcjoN8jKNn3uU4DcPvQhNN28zJrtRiR5",
  "key17": "3ZRd8rPLrk2xNNEj5TNeWMhFe2LKx9Y9WHJLW6jizheDAVDJXoDtH8ae6AaDx1nzi2V7xczkMAMiszrHUB74eWYb",
  "key18": "3vbJrDCVfUKPNcEtR1rL29mKZkfE6Nwn9Guo5VrDJfjUDuqU9HuUyNmfDg2YdZpaoE8G9bV1LWMEEM8qDSL7AXaD",
  "key19": "5Ao7KRp7APYP7Jb71quee164XzBicU34XzrmMeS6438qagL8ioPDNQdFKm1Q2kjNKuswy9FWxsmp5aHxVYDvy6Ur",
  "key20": "3Srn78CHw9DzZHcS6Px7EMaCNoBXE6XTNceQvkFLzYWeSAxhk9ygVxEBhmj1osRETcNUghLQcrTj3SQd9rzF1UEe",
  "key21": "2PPkeNy1DeiDjACBZabsApDtKBpxzLyYhUUZEfxgmdPjbjfH5fxjJgdibr8pcxe7kwLPAk4W3Hp7rRZss5zzZR3M",
  "key22": "FM1tN23ok9Z6Kp55CMPEfDmVrXbQzoBUYX1HZCLEhjeEf6RKawu8CguwDCC1Mj6b188ApR4mgX9H93jqAXjwkzL",
  "key23": "A6AYfXffLgFLVQJPMZmRmH2mySKFbT8A9W5gxoa6z8ty8vzxvYDzxgFWECC2EhMGd6mZ1kiEZTEKqH6522AsaQg",
  "key24": "N9RRwndAQPJK6mPhf29Q4oyJMWX9K3qTuYQi5uxZknG2F2qypoNYHGK2cp83JRgz5JqkcortYGxpvk874hfs6iB",
  "key25": "bhAWiPNiQv1DTah9hrBguENSZ5M2pvyfXnZR2HnZcav9ksThT5q7iajwZWGJnfETvRygBsiRVuVuRAZSKeVLGcf",
  "key26": "4q8GcYtobALt1RkaLDZZzAkAXBEUtsaU1K76eHhLHYLLFSjNUeSpAPyXaG3TpwjxywwejFZ9YQBMSehgRYRdGAJL",
  "key27": "3A6Kf74EgZYz9yHmZEskkurLqdrtQX7FpTM3sRnDaioFfPsNbQSUqmBmEqFkgdR1DdY3z2qSqDFSnA6CFvSoZPth",
  "key28": "57gyNDtBBmaiX47YrtoKmhATw6oTfweRzzkPZebVWzGJzVLuKq3Bd3TFdGxtFAuDbj7QejzXCDExES55tab6vcrE",
  "key29": "27ioyDijBCywqcX5P7yyjpQeBYjxywNt7Crdykr6tvqQdDuh1Rz5dUHsNxEVxoGBuHEsuGomhYDDmAbDjEfMocG8",
  "key30": "4cEqBwjiSWjLVN6FjGSvBNEPEGMJJBZTKvMyEbkikLXiXLRNCLg9f2mAYSksDpz7BQ2Ciw7K63dvnTVfnZsduuDF"
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
