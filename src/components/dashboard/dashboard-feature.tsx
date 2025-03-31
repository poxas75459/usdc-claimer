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
    "5GKb1R7BfAn3rY5DmQZ8jFxBy1wYikPNTncV5vYjJqeeQqg1bDcyVCFrUCDGk2y7UiyEHuvjDE7GCMSAkWC7hDZE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hyQ2eJXSkSwnCczAQZdJ95PeMwidbTiMz8UYdHfZuHUDTpFrVNy1SgbKxh3M13FZ1Hx32vfYWApkjJape5Cs9as",
  "key1": "3QpoNX5QeAEfb6M7Dw7nwMZz5xsLhdwZzWYcSEiXYJWFJmUmpbpsyahHBjwUPqBXEYU3iY5UtKjSXwz3c2ZeGBZu",
  "key2": "2LdzLGQF3AZkYiDf4Yw4AMneL8KntKrWGrHKXNHC93pCWj7vEx8pVvD732G52YKd4jwLBjfczXUSnc1Y8NsbC9HS",
  "key3": "SKWDfoEm49vwPcuU2gDuN1R4eQ27soJpJKAMWWd4XRgMArDnkuSpmLmRTFxtM5eKqT7zujntqTG9GrqbEC6brYR",
  "key4": "4mrCzB45Ha1skdtC37FzpdToCQCZhDg6TuKdLyna7TgNhG5PeBV7CPjUEw85re2rNnJ8UxUTHt2HMpaK2gXgTY3m",
  "key5": "4Pb1hcgsMj5vEif1kW7vP15pHyDNb6gUXSyHA65gywxsVK2Vn97ppxj84uw4eSzQjvUiT3yT6AbLyQfc7fakbizw",
  "key6": "3aAhaDAq5rhDDixhBdBx85CuWWELDomFUTeku9R5tcqGRwfRBs3Yd4N8DpUUo86mf4gqtkNRS25c5wfPtmFXqYwf",
  "key7": "Txpxe5WzanG2eaat1z7TWCV7zVpkWvn2Yvcv7FFCzmFkNxXq9WoqSRnJaGSfe2ALLEuQxB8gVj6Vzavtp6soqsX",
  "key8": "4Nd9FP3XwW9ErTywouJmknvdZRwGShVEYLjnGnDkGkY4wLqPB4tkBhYzqbYbuzW1BPFwvPTiCGD6pZQkLroKsSr7",
  "key9": "5LXQyMCjwQrmC69mPAZn299LUBfpenP28VzFEzjQdU2ZC3LjVvmprkKBmyjeMiNv277TZhgZZsw9eJEZumM2jgyy",
  "key10": "3zSmKfLKxEBW7tBXku6j3ttKd4o5WrZKsQceM7WudAHwjWR3QqJqbgq7EaXBPQXyWAcyKJUr5wAswaUNhZrgHBGR",
  "key11": "4v4ReLy2nnRi5MPHxwV3UPs5dcV6L4Lq3j8yKVzzEMFHXXEge731MpL6gLJ8xF2Qy8h4FgbKKLRfRKSeTjNrBBhG",
  "key12": "5wyoRGRkSoz7JWeVgc9qbKPNKA3SyvHAnKHfYZKQhq2v1wJNYiECQ9nB6Wk2ogEDmvEQReiytbGidtmbzgwnMK8a",
  "key13": "2X5ZSQcRm9xfxFahH9VBDFTzZ64rb3yjtVPTBNcbtBoGGHB3ZwLUksZ1RbUHYMmdjDKpNiHVJpGkFDYm7t4fiDsi",
  "key14": "3ExaY5BFUjD1Jezrm7sjZzh58Tz7Ut3iq5UHyVzQ3agggtucPDV8hdBCdomXTYoTLNf3iyZZFvhsRvAXnSz6A32g",
  "key15": "2iDJCaqxCKKTQ7bYNtf8sgu234KKArAzX1qXjarBB9p9WDohuX3mWp8xXeQhqrYrLtEC5zCFmGLKrqy35N9eTPR8",
  "key16": "62nN9dLZNRQEkpp8D6X5Lh4gNrzEGXh5WVm4ikTuztGNmqo1CYUSWFpEggcfWiaSktaPzpCGedHMhzg9CoXsvXem",
  "key17": "QaJrngRa3xtE2RijFHi9iXniounXaoKxjAk8Xoc1bhGrgBRu5Kwbgv7ZVtakpZE2B1iyTxYLqrijxBfUgPCZdVn",
  "key18": "3HnaTumqJo8SNB7GTBmmiZ6ZEsjBxAYWwUu9tJMs2BHR1v9EyeYyvmi49swuPrbYUsLnnFFeWEDk2dMTvrmiQ7CB",
  "key19": "3LxX7S3yjBMc7KC9WmvXdrbEcNMizVxVnnxBgZsfuX1fthxmrkzPifuxj1B7BzYnLAE2eTvVGKixJ5De4JhVcTuz",
  "key20": "49aPAy8kjK5c8GCG9RAWaRLwfgNKp8pMg4UmuruiMrjNGYMi6EsGgdfi6ek5W7SgSFKrQoYD7q4AzfXxt7goyG2j",
  "key21": "4zjLCnPm1o47FKggL8VpzsW2Gcc2d75oXqLhAGFPiJrQtsGUPWRofmZbn9WCtZxVXVqF9Uk7cJjnsbV4M47bc3oo",
  "key22": "2vzxwyctcqqRksZ5iL2iTeZ9DizYXu1ck4h4mgyqfBX1jwruS9TiQyvTX31mcMiRPzGxiH1ZB8uiEaPSeHxPsq3H",
  "key23": "5dteKBAhT5ECTLiqxsD1VYUXA8iRTqXnTF5HXYrGrjRaV7owsL5qEMg31KvgZV4FyGYxVUz18X7iwMHoFSKK5SXV",
  "key24": "35ZKgtcSvG6frUveNPPaitXqwyrerN8ySvfHgTuTRyocxebedgjswskkt5ZLKyvTzENM62g1SSJe5LRV2dvsXdZB"
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
