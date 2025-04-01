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
    "5TdRa5SBRz35j6nRzUT52ceqVZ1g6BDnbA74oR1mGJHkbns567PHYam6rMuS655dQWGhbGAUTwh4RR6GLjnJwLX2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xmWkkBhzV3sv3cHDUJ32Jv4gGT6k7XRQu4KBZpfrghR7HdTymoazWXt3gzDsViTJdpvN3DACQLcqgH7uBTNWbvU",
  "key1": "2sdm8ECnnGhLSUV2sa3pSu3AP5i7cFuKms8UCa688p5aNYggj94MYMHfxMHvFjNxc4n6ufRK5EDxJZYU5xQpK3Wq",
  "key2": "5CuPYcwcreqhvfhYJbr3Z1eUStdZ6Ms8TDEb1Qyk6DZLornsfrrPEHk3ETWdqvdqPBE7RoSdnLsDbK3Zv6HrzwrX",
  "key3": "37HXce1McFymnKczyiXDKAenQv4TUvvmV3xZmcv59a48wKk5vpfkQYihF9uxz8kaY8k6c6eh9UUGxMck7hYHfU6R",
  "key4": "4NhG4qvTA94bEN9hJYFqZ5sCH3TdJhpBNar7VfwQkqTmvfV34qAzv416USLMMDVWF8sR7yqnEvqmGCUdB1xSyH57",
  "key5": "5k2co1QGNpRdz21sbsd1KYZSVPWajCovW1vHczRaZVCsnTkTggAneTwzsmnNzcxRbnAf83ukUsuKbAkGshoqih6N",
  "key6": "5oqnG5cb9YZ7kMMKhmeY48bJkj9LncZ7wFnW1jcMGXHdgu3kDSYwXUY74dvzgkRzvmJUX5kFi7zZizHqjnTh9gj5",
  "key7": "ZYJWN1zh9yUoE2jEpPhKdYe7GuxU4Cjp8UxqAKMh9fUhfAFxgXK7ncfttqvjCfoavSvtuyNNxGvbeSXB6Wof76k",
  "key8": "XnrNq8BAtooddQofezSHJdPM9GJmt6Y3X3wjFnXsLD46HWyt7JgwtxpmEduujT8QvoM9jVoFoxaExN6rSDe9roU",
  "key9": "4X4PDw6FygsHWobqBN92FuxvXu6mdGBfkCHM5hiQ24oc9P9PyzVYnhKS8zr6BhtPFRn8ZiefmpNg23sEnrzSBBKG",
  "key10": "2FnKKg8EPjqD4sv4e4JuD4Qm2RDiKPxWLfNswVkmqMrAikLjb6hEvAPmKTscrGTQAT3PQucbbuGSYR9boVH1oYN7",
  "key11": "edZB8G11wMWqntbg8oPd3xTKg9SjG6Htdt56MpgGn4shscV8UtUxoqCG1dtjXuXNL82SuV1C7PMyWeyHbFdFREA",
  "key12": "5G4Gw5VgvtP2EsMDPDmonRk6vrgMWAAdvwCfq1Nshjy169zknLDfeZfcX2L7N85uDHDRY2UqtDUGdz9re78virbS",
  "key13": "2cBjPCxp75y3BaVb1Dpcye3EsLY85gHjkbRuXqChdn9dHHBZzdFSt6454ZMCW5Dyroo7hMch2xX6gb1LPgbgKfoG",
  "key14": "52XncwXSz5gz9AhisRnHx9hAgFXPeLdNhPaDgmHb3FUmWYWoRPT4pkhp47uxnFtb6rM5pWjhxyPqogASb2rkWwyo",
  "key15": "Ra4YGeQLBuo2nbKXKy1hUCPPSgYkfbSfCARBvc4kwbpdouMY13mvCcFk2rMZcXF6hb7SvwVByTABGBsrewDbKLw",
  "key16": "58rtQkHxqnbbVT6bFSLULf9Do1KaD7BRAqfuLx6XrTfP95vVPCyjqboDgBh2ETCvqFNNTZ7cPcqbY4d3VaoYX2XL",
  "key17": "4LVhQkiUPuWiFs4uLnxiAxJvQuZdNtLAXkSVd1uT1iXVoNZD6TjMMPqXz8uBvuahUSX47kSVoZMn4nXfZy4M7YmQ",
  "key18": "2aDPtRhgSBw4qiqk5ZimUbmHRXohwUWGEcNHFtCX19FNxR3VJfhnjF8VDSCYZXggAowvMUth9q6KCoX55aJ9RxQB",
  "key19": "5YT6Hx1buH4EUqdBscVh6P6mK72FJdS4MwDibKJEz1DxGGyGQ5B8ynNbx1TRFHjjhkxzuRGnauriJ9bDytcakv22",
  "key20": "4VLgZzPfSGEg5gdz1t7GKLe5HrcU5KKtmQNR3TSr2yqaD2GY5NQbaqw1NTsvvB84a7EzQcveZYLQCSCy67THF8Lb",
  "key21": "5X51ZBXeASvP65KWkUQcpMLT9xJVKeaKZHi1tdLDP2r872h8d4fXFbyPxiqqD7AAfWXWjdRwLaWw3n7fpwPSULxe",
  "key22": "3zKcKhgUS1iGNDtNGYb6kzP5GTEbxBTvFwxPijTNyJ1rTwDisLaZZHMiJ6H4RhKo7Lf4chUQm4e5HJ5X5GcDw27Z",
  "key23": "5fjf4783RGM6xR5uuvX3WKdxEjfUzHGGvm1sb4Sjy7Vzobaiw1uMViTeETHCTjbDqLtebTfhSUZGFcJyxWsi4nyd",
  "key24": "2bfVASb7HWEmYrQknQrrA64pbpAsDb1HymvuWmyWiR2PEcLAKj7HmkHSG5ZXEhTE8YJca2Mp9MbjU6zSuqt14SQ9",
  "key25": "3pQU27avSKbHSRpHWrWpuPmMoDjw7hsANu5cYkPnCvoPjMwDWwNgRctqagBPPoXKbmivV69CG6sX2YhtUbEKVvb3",
  "key26": "5HjejtqhZVbPheuj4AUXCLYbVWBq75ZNA8YpsvgsitZMM9rR74bTX2Zx4cDmDdbSbLA9gwf4w6QzyMkLpSXxgBP3",
  "key27": "2Tde27wCKf6eq4DtLz2zkauEhTS9WFa2Hi5UwKCDvzjBKqVQji6ZMbspp1XtsBgzaFL7DqcnwphubaVE8vUr4pJF",
  "key28": "2cm8rrJcp8zUUg55dtFTBPk5ychr8jhokPT7YZcheEqecxfs3WSWFDCo1XVTo9pGXESNwHaAawDHSBGXLPdbuayY",
  "key29": "4s4vSGYf446da38Uny8nbviHtXjx5GHkfedVdjmL69wgaL5FMpGVqNmnuSdnKk4UBHe7EVqDLwHPNBQzNzQw8ucu",
  "key30": "4xVJXKDW4SSMNeLYY8kGQM2CZxgcVSwKQdCAz7SuVJd3hEiWfTiexDVeajzEtjc9kyAZ6qwoYXGb8244i3W9NUBZ",
  "key31": "3hcqVunmFKbYd9dtR1yo32RsrGx16vCiZ1EVQfbXgujMfXZs8pkNnkmKf6afYtv5Mrmkg4BqMRjmfycuoC76bwLW",
  "key32": "5TFMN2Fwuk7oJYLWCD8cS4BaAeMjn7m4jhv1Q8Y7rfZLRfVLCs4d66AkPCTs1WTdq54TcxnehV3fw5vBYXqJrqRo",
  "key33": "3q6eB9jPRj7YKoPRT3ikbFeeL8TqC63QZW2KwA3qec6iEcahhJqvfKtYtmioXCaeFwbfn5jdGa72dnA9VkM8W82J",
  "key34": "5STchrMUiFdHnPpUEUREiZLfaoRbXtZEiUsosBbRAD4yAAnWhG8hj338opS8ukuG8P2V2fh8UC9Cdkc4WC38Km1B",
  "key35": "41Ctxnp9xNZ28fx8A8K6XaerjJQt9n6owz5UXrmD3nvP7RhBWwSYT9XNNs5d3sAsLT17TyquWtdmTnNzvM8Xuvji",
  "key36": "p5uyybYeHBJtEQtzA84Jwp5RkFCiy3fKdpRzUsiuwNFD6B6AUhPywLfAsNu46zGKHiguEYEXik66ZEaq3btmykQ",
  "key37": "5xFe9iDWqycdRwVccBBHQs5cszip376WSudBRTVebo1zu1kArU265nNCzjAjeBTMreHFaMzgm3dWijKciDKG7b8x",
  "key38": "54cUgTKdpgWf5mas7V8HdBebCJ9kdnkrRMfQfV3L4sL94hPTqBCkCbRjLuZsHhbP41w8apSJg394c8sJYbdWcBKY",
  "key39": "3Qzxmg37bPT9aqu9Gjo55kupawh5gBXLDBBKhHnY9xRbbqRe29FsfZDzm4f8a8jV84AVNZ2hz9CGQtYmuc6hmkx4"
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
