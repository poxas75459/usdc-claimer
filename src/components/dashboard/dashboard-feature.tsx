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
    "kWz5MVWj73nZxhZf8grwh6sCSAJhWSU4FmPhiFntedG1foqv7WJMajkds5D6S2cbTQ31o91pt2JQbbKJmKHFcBC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YF2N3mXNuLQMSYnQNQkPAMazBsWAujo6BnokPzsr9uECMjsJwAK5rLgLgA2KbJzqwcfAkfStAYJZoZ14ovJKd9C",
  "key1": "3RLTtVn9rKMA8EnmBwgS3nEe7eh9DAPax4Qg3LW9QEvVNmUdMoqmobi7EBC7FbgmSbxRz5HNAsGxi59e7q4XvxTh",
  "key2": "5f1tax8gmFQ9fhB9FNiqm6dsoccGMBPNq2PGWGDYfNua6GJ4KRFS5htrbfXCHjYJAaM6EoJzSRJczGvxd1acznZ3",
  "key3": "4wnESWbyxauf5YXSMNH22B1abrvnp5vyaMSGgEA6tPfJsRu7RBzohU6XPHAcR7Bm69ZnFeLNSq4RQ5DgxtyDwFvW",
  "key4": "34LSVPgm2JPGEk1wgfkh9emeLkb4uYAJo8pT3XFHBfkW3Gc52V1RPnGG8DmAEvRi2rSLXw8LR5C7zaD3WDn1S1ut",
  "key5": "4kDbhQa7ZRPz7RhyXxKPnvByqDYBY4U9eCkBxeNeTt4PnCTrtmw4PrBH6xAxYxoV45EKzyTNkg5fuea5uusB1CzN",
  "key6": "2teUFPyVRnmEJAzHaN35Yg5FaAwVF1G7DoiYg8cCX4AQChhvuY5P6dvUaTr9jtbXnhkg5iCMgDVTVenM5JuSfgL3",
  "key7": "36bPjP1XyofnPjgP3mjQQaJZBmNfKoX75G6xpCzixDYngdAzVDTCjpUFCjDJBNp3JD2zzewJ8Mn2UyyDLJgTKkJv",
  "key8": "5WCSrTtPXcDRBA5QYzM9soHVwBfQvNm1FGGAcM49hUdBmooVxDtokrEgcQmd5UmbGyBQ9QykzYwvyAvB4kF86Wff",
  "key9": "5L2hpkFpvaTjC9M2pS2ueZhEVavGfYD87NjiApcCmqxqRZy1aKYUTiUgKTh2xaFoZ9gS37g51kAwYMwXv63jm3Dg",
  "key10": "uhtPGSAxZ8RLJLC9CW349YmT6YhPiqwN6sAsUQsMmDkDcPRUxG94RC1CZ4YncfRnBStyjJ76FkF2pv5bxvg6bMW",
  "key11": "4Z8NodKCNWspnJ6JCc2YVWyZu1wcRqdZKN6XBrt5GzZwSiuASaT7NPYnuePxoshCqebh9owwUt99rVrpSB7jmLUE",
  "key12": "62igFNW1HBVT5oS3RkGSKwtHrtWiriswCCJHSRtfwzYJruiunUCgHeVTcx7pPsRZWrGFUcDjjg7Na33zjvjcPVtZ",
  "key13": "4PeWwzBzxyYT7ZbfGsYWNwma79ibcJPRmmARHj4Nm2ew5wmfUt6gc8MLciyJA3ViQfZEmWs5jJcKoUDcyTZ6nUuo",
  "key14": "AmSvDdReJkXWGjjPX7ENMzXZRJZMe6mGkNVgJnj9Eo1YhMSkaxYkbb5gSd3yy8KTu5A8KzDayCmW43cde3uXwYZ",
  "key15": "5JDvPypPqYdXdiFEzoW26SXt5pjJgfEnFHWQXv2iwnmWtTtEEbyprSy2DsTnyfom64kdDbLzyVbsvLB7hqwX9eKE",
  "key16": "2umNTh5iA7H6Fnj8H3pdoKFEAy9t4CJ2z24tzBz7uWcxxQN8zrbiTc9CNPRuaPBtGUyfgTNeLh5SCcAGgZoNq6sS",
  "key17": "KVVPKiympPpgqTcfxYMCeNtcnDdr2KiEg4qUpkHpwjKFTA6GX9fjveVWFXBd7PPhFLPDuDRAUMRJZnLAgEAVF5u",
  "key18": "5LXeRt8buhq6u2pzNAk5226vGEJg9rtNR4Wvwf8rTgJt9nH8XarTENLxokbLmfFoNZ9Tsi1xP4APDgdSUcC14C6B",
  "key19": "3fTpehsHBqxqcVxhphmN5LdvTP3Pke9gFW7o7wtLygYcZ1iGp9BjKiPLTFVyvbyA2k6ny2iwJXjJdBsM6PsZGrXE",
  "key20": "2bVGS7e5pebuDJSDKEEyx7xyULwJGVD3gWQzjNUxoFFojxBZhWaAaiYe6eyTVKc9Ggnp9n2Vja1wa1LYm1zo5Yyx",
  "key21": "2F4qmKMg6yGHqXmxbXJSFdYdNwixnJvSJtJN2YuexfUDPygK1buLrEPXBHsssY6dXtXyNcYrPCwNrw2SJrgdSw6x",
  "key22": "46JFGAHyHtqT5h5WYnqmZBmJtjtHQeu8Z4haq8crgfiRVzLkFseVR1EaB41nZerzkYVV2JRMn1B1t191osCPR26M",
  "key23": "4JEDKm1uwpCXNsrLnRXvZPVz2Jn4tmZSsdpLQJcCrBRbLNGxoyU8fuvc8278bHuPSBRqUySZnkhcsZH5A4tmBLMN",
  "key24": "2YZHrkb4Kck4NEjKNSx83x7c8518TnCHB5BSNYLsexK99iad68iUVxjYet6Lyxvdmu2qTJkhCdsuLqpr5KMnhJXA",
  "key25": "2NNuNK7TXeV6VWaj3yZMAHrGydDKXRHzMpFFsMGUZTBPntCkttibwkADd5MJkVAdVp1N3p7a9nhbnHUGLCeDzgQg",
  "key26": "4YFwzxShx3x37Zs2VGkAGhVaGg6xepSy8gUM8Ms6jtzxUZfzbGnSTRVcDy8btqrtteDPt9LaMd9dZqN4Q6sMte6k",
  "key27": "4SHueM7enGP1vwxTWtBK2d2VTZYNWNvzQqETZLRQk4THnXWtKY7LtsuXFm95d6f6fpCYqu73i9B1JUdALfXbTNMg",
  "key28": "388mEVV7gowRuRKWGBwZkjXf5FW45NMvRQWdbvBySmSS7XTu3doatWKpg9YFqxg3wUkMm7N5mp4K7AmYGYJiHDck",
  "key29": "2pmLiiLBgNraWGQeZRftGLbeVrYiavj1wAMtWBvQCw59AZQUe5kPnUaaXrcTLGGgkKQvASJFUwW97dd5zkq76tga",
  "key30": "4Negy6soKYtHCRRSp6o3TZ86XxGmdwnxCZF1JiSBiCEFpdzhwBvJMcoGU1ojnSHAjfVbRNsXpkANVJwUe48Vk3wc",
  "key31": "425FxGvLWmvazQcDzLHJui4FFHFNnZFvzdnczZcPRo16j6tcQdyhe792HztKC6dbkTHkNhmoo4knSa1Zx1bcnUYB",
  "key32": "47BDSjG6HGe6SdyFkM3JzTdHxxN3JrLjVQe5wPW4uZsEi5FPQo5DnRJHLKBD1Ky1ybaXV4eJwn11n82A6q9DYfn",
  "key33": "5SctUoQoZte7eZEYGKGbcBpYXkASgG3GTaAsvponaKbNNjTZiSH5ajijSQUAbxmynVizHPiqpDVeGozBhHoHd1A8",
  "key34": "3ymtJxwyYL8fMN3KHQhkCEf52m6Ej8g6h5RKpGtRS3EsWZbtPZVqtMMuer9LMuowGLuL5AfgSdBrBS3hLM1zkdnr",
  "key35": "63C3KznXNHgoScWofAS9FL6ngncUFBVtQikbRPxa32VPynnDNXCeFtLECmFKz1jitrWzCK3zd3SsVdLd5UX3ueYm",
  "key36": "2FJuSQy1hMh5f5J9CuRY9LmsY1vwFSMMfC8HmNZkvEsCGutUmDohiXuQSvFqmEwTQavSfTuGfMxFq1arsYLeWGRL",
  "key37": "4isdWj5vXhLqJqmpbbLWesexoKH2nHjn8LrjLFDgCbE4r4fFYFj38641tuWHS2hvivPXSgvQkVkkew4Z1J8DFMeG",
  "key38": "2gRutPaGv3bTgd44P84gdybeWqt5Zv1ZV4xk3Zzu3oedtrkzgVynd7FUqNNuNKM87VAdFDNg9865aga8rRFd1Nwu",
  "key39": "2ZGmPr4kBguxDQZuFKRPprTF8P8hYNSAXhkHwKE5DfFJ5ww2DpFkxdjUU5rQsTErg8U28RXqk4fwRoEPXYtcKo2o",
  "key40": "3qDeyFaYERhRoLiHQwvpcLkR1zd3o7LZ8F3CLM2b9XCBcpMajoLBrsuc93HxmttTmhaBAKviKqLfwKNzHMR68A76",
  "key41": "5ZZJv7EKKCdq6XCWCVnW84erjnUMsLznASgG6yTbp4vPFrC3a5WRVF5qqCapjbuM7QV88rMtUDDKJ31syAJfdJt4",
  "key42": "2pR2A7DHqdgqRGJgXZJBPmLPnAD5JHV6rKarJc19qoWViJSoF6fBuNMvhtgoyzzLy83ntLF6DgnfxRnwNDAY1WhA",
  "key43": "4GCk6xYHPojz8hGiu4gEoNMGoeXkW5qMN2U9DmvjwSJqP7JEC91Dgb77HenwYAwyPjCPLB6odWHeX42TkrcW4pJT",
  "key44": "ZAgmssoFH3g2iPdjm6hHR5QeuchWXnbNTLnJSmCqJbLrpZej6EFyX16T9JqbhyNqLN4YoP8PvzpGQBjJYbN28nP",
  "key45": "31e7xzCfpPNxteAE4PJ9kAbpKhz4RsFkWWnPntnkfgEwk6xMuQJxNw7Ri6gUj2eUdKyBTM4Evd1zQ2NmPjvZca2J"
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
