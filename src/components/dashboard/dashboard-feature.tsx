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
    "2B41Kcd3PdYPjqAfbsoAZAMrwp6SZF8hqtAJ63yRzUTFnK3PDCDsJuqcCtHGiM9K48cMDyZZSZa7TMdLKFu8AEF8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WqkZYHtByy5cJz2CbKE27g1SSK3F83gU4tfjLY2xR1jjm8A597mVtdP57R5KfNyu3LPLz7uwj32WTCU8BcRYGCK",
  "key1": "5ESpghZ4gGAi9BvCKDfA8dZwg8JPwoB4CWp3kjpcjC1ik3kstKPDt2WKUm4o8FSoyjcjjTPCUYqWJTWnWVfBj7rs",
  "key2": "3GStfjjmfCX8gtccq9LReXSQEaxwDJzr69DCM4HKdVCzXzC1RwQKXTBBjtpBuhTW1vrK6JpNQt6joapnKJrsD1P",
  "key3": "3RsfCPTdksCPALW6XLPY3N645fjDAQ727LVkSLCrhQmHWAJ5zFNX7mZrhMfrrFwaKBbprqPfgHCyp3UkxhsgitKk",
  "key4": "4X34zbYNtNLu2VAWcWSG8rZSBCMM73XSxvx3GGKKx5wrZu82iKVYcDsdwsqF26w9y5rZ4yZjuLfGB1fVddYntPTN",
  "key5": "5WkAaXSD5UtjJDGgGmi6LXQKeg3PnUkdzPyeraUhLQ4B3vhjzCzih73gnG1dEqYufocPkTqAH4zJZTwKH4jzkWSd",
  "key6": "4Rw2ze2X5p6cB319pin85hsKWtUMBvozgVY96dQFxiE2sANpt11KiQJ7886ixGsq9Xpd6KBPfbzVxz2XMcBsuBqo",
  "key7": "53WXGvo3rGspbEaJeTYbG8g9iGTREh2FNtNeD8s2rxz3B8ZtLpiYmFmcBCbHTufq5FfDfLUGv3moshkqXkfVrDB7",
  "key8": "4yXBWeKPPMcXz9buh6zgK2jb5BfaJwv1Yb4J6xtSjrpeUtpd4tH1mLrZuBTWzAHWzZmTNhuaBwQpFztJ2iHpStwr",
  "key9": "5YgmP1vm4HhRHDSMm3tL3JT15wCeXwnVW3GH9QPrbWcj1GLaUCgTwBaKCTc6qyUC5XDwd73wVvtn65vQGHwfSAtJ",
  "key10": "3xW464BrHWDYBWpQwvXhrXqBnWtqqY5kmBB5Jr1c9zbsJbiKWa87mbv2FX8cCm9vruqaBo3SRPCv8HgosDc5Yowh",
  "key11": "yzzfqdWYcCst9kLADuVPYDtb7fVp6sfzPKqPktuzwMh4rPoSYwzGyWHs5j4vxWgfMUEbxwPSMVu6YVbhHJ3nx3R",
  "key12": "25QFpac56YcccXp914wgqXEMdi3E9LxtYvcyBawC2YcrWg79cf18UAUAczGV7ifrkipmsRUtANvzFT6UubPyKiRf",
  "key13": "2evQ3GxEwyZRjnpmB7pR5PN9LkEe8TVfNxevSRqMDnw6JT5uxy8iCY6tMtyCBTYdHgk9RxTPaex92K6LEE7NBZMW",
  "key14": "43joxFQpzK38BEEZv5qeaoQPQtgHyfTQYCy8RdNv7C1z9U75VoXso448Jr7pMWZgYu7s5yLwmSs8FskcPqDVZbrd",
  "key15": "27TXaNRCnufPER8Pq9KJnkRG2UxktmS7mF9h27VPa57LGAcV4e697jHafejj3bXSDGQHJcrZ7mUDRhBKgBhmFmJT",
  "key16": "4kidraKVJkapQaK5p6XMk3M6vb8aSiZcNfAp97NuKZPGhQZT7urNwfjN64SomT3wqkBKJrt3N7G2YCgHjcNFx96W",
  "key17": "YUWhb3GfhbHPSAJWm8PpuWWMabshBeabYUsvJzU142xQGUhRphTVNJ3V6MGa9H7Ab7s65MpLBxvXMPXy1A7hcjH",
  "key18": "5rNK61wFqjN7yivH8MsYLGzFqz61qoqomCcKe6LfyFdsVLDRnr2S9GQ5owVfg5Q6qzmhCY5ztFAozSE5e44NaLcJ",
  "key19": "4VPJVU4PMG68SAuUbptNaRGTXiHw2BYcjKPViVCXqHGFXnum64xzwQfngqYL2s7pN8mPT8ivnWF1KWpi3C6fqksG",
  "key20": "jvjZNZ5kDuyWuvSW4PtXJsVTzNukayE18deS3MrBD5A6e5zd4rm9vB4mUdzVvT8FQtPJ88Yr9zc7dHvWVb5uUqQ",
  "key21": "3Y8KXA87nUnAMsbcHtFxc591oQMDAeSqvpxqk1sAHNSD833mD2wFqrt2iMwAaDnZep1zoBHSwu9fZKhmg7bhWn8h",
  "key22": "4JRaPW9XXBsdN6cUY11HrPbVHuegeZpm2yMjKTN1Tm6zrjxDypnQwbvDFcjYciFNHVfEB4FAchVhGxUY3gxsTsrd",
  "key23": "4PL7KHW4yPpK3RVmu6n7nguRdBsUXSBRmx9V6KDFT3tPRN71LG2WDxHLjDQXURRqeRSxdng6CYUL135dDSTn6Dev",
  "key24": "Ruau2L7EX4E8bTt2udfHCds1SxLf1LWgiWnePokfHP5hrFiXQjHjahFZ8gVxECww9sSgBgj7WKjU1TUxbdX5anj",
  "key25": "3Vezm26VP66FahsY6i3i5pPyFykaTiyMED6zGXiokHUKoHLwbBf3BNUrPhj3GFBaem6pgvW1WdJSFRj754msgbAw",
  "key26": "2ouh9LYk73mCVyEtyYRnuDsWaM3zpvs2ZsD6qBku2sgPSpBR1ag6AW4ULzWiJqCJHR6kx9G2ZLSc71M4ekj21KzG",
  "key27": "PKqo55SY65uFxL268NHPzox3oktBxsWQG95ie2TVd9ZEdj2jNsah7H2gPWQL2Tc6SWhYK6KCGy6dtKU55Nzv1Qy",
  "key28": "3t3UXz9Yhk4aoL3tSWmUQFR8JwEbneHniAmi2RFjpnMoMYk3zhRAQdbdBz8akmyp8ug8HU9KWCCiMwV4yTmuLt6Q",
  "key29": "HBcDXFT8xYie8NXoESGqR3BEAdirZC21F8rsLSBxjmyc9beVKnqWsB4uUBXwSdV1oMge6mRKdajLU9Rp93aF2V8",
  "key30": "3TKPRDjSJL4QzCVWiFWEfYGh3pVyBWrT8f8NBBPJdiKCVxCa2Un9FWrq4bQRiMDcPQ4GJLiL6NJE3xaAELxYfNn3",
  "key31": "2jmkFmSAfCVLHGMeri3Cr3qSz5bbHNC12rnUy9Kx2RmWPkBVZAXQUvHk6P6hjgvJjgG6zc9dUY6t3WYYFAH7yQZ",
  "key32": "WbobWBHujK1yQhhzkFgZ5z5X8jSfAqQJQ5Z8dmo2sqYiWfm9hN2X8unh8FyJBsATNsZKrZm1WuiFGjwCx4fr14t",
  "key33": "3BRT48M15dizMuEkRTRdHxX8DxHAHd1mLnuaWkdXZkaEWLak5eQWzgbUVoiwLA49hBjX8tWnmaWBMZBngPq7Pnvk",
  "key34": "36y9SJ6ti7iNUYXZcRoaJCXdymWjCgcM1SyD8i3TpQjxEMgQWe1uNBLZJHmzMSfLctyfaiGedNkWRTznnXjnVwc9",
  "key35": "2T1qBPraSG9uE2fpdRvfkt3zyU5pkzGVejE21HReRU5sqg4tdUkjjj5NYaBuDTK2a9nQSxvLKZ3ihf9TQVgVGmXp",
  "key36": "2mhbv83FQwm3nz485UZA7EkyQLM1nhpg8rd6HccGMVBtDrtQvnG7H8XCXtxBLPzFSTxH8c9EqyD5oFfWV9x9V9XQ",
  "key37": "4VfFdT9TP3tEYQ1cETRiz7DSSt6JQZairqkqqAS3PXELE8Z3oaDEsLKwwAWYz9bzy66tBxBEdfGb4yXtX1Cb9GRk",
  "key38": "b2jpi2zUrkymVMDr2mWQ3XccMkgGV4oZrDmSc9BcEGCFAJt8P2P8EvtTvGocSZAe8LjvBtbeMPaqpLfLMe5DRXE",
  "key39": "3UpYYLCMgPzqjZjwqAsjPh2UyHpzNWBryAAvaiQUZFprt3MbhSJkktXocXXqBgXNZUhHPKkQzWQZvj86MMBM946P",
  "key40": "5c9LLTb5sZAasqU2pjZvB4bSVG27VYW7eJP2r2LHhfyzsbNgv2r1kDEQ9qeqX3yb4qF7XFrDsTGQmR4ctMRmZqb9",
  "key41": "4SdezaogsDo3QypEKZ4dF2LHb6UzqFD5a3md1sGPBH9i97hm9cGCM9s59F21TFgLASmWtSW7dWUJ79ux91kH3GAT",
  "key42": "5SudiGaBAoWMSr8QwEjHWHWby4prw1PxD3FdNg2gj91a6y2tAGbVXPi5uhPgebootztpbMN1G77v6C3Rq5iDCLw4",
  "key43": "3HVU3TUpCdxB6kDPwAJBCRdWEKwNSjiZUF7xgErEKcDh38MJXawyY6abMGFLNNJaxTKisWpyGTZ5d2HuduYNmSUB",
  "key44": "G2y48dEayyF5QXC52erA181iwXWiWimVHUB6dWtSuw8j8s22GMGwJiiV7QdKDGGvoRfvYRKZ3G8rNsdegAcrYgf",
  "key45": "4bgjCoCLQzKYbBa3gGQxhj4GWqG5P3wL79dvNX9G3KmJ4PxwRFapvvYdMYkb9tmHSp78Tk9roJoBkCPQafEDQKNr"
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
