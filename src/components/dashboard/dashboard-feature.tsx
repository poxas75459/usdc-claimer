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
    "3nu8o8aRN4aXToxctvgBWDCXjESG9CUo9cesqVFvr8v1rdTBv9PZsUgGW61VbF8jeNVJE475mKYEfkv8YFGBumMa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H8qxR8FRD7PkKyE1qGWgpgApFBYCTCahLQnJ98qWJ2rk6bKv6jHdzowP1bCj3CLyNQ7W3jdXXAzBhaVZ8Lc1N3A",
  "key1": "5VExxCswwz2rfGicaG8zVdnjDsUdE7vzELbKQXe4p4Bkec7MEdrv9DjUEytNVuqf5E6yzUqLfHcVJEpp1FayYuzZ",
  "key2": "5cY3UdZJ6dm3HcrDCn6QNB6TfgRD8PSko88EmVhi7qvTvKoFjUupKwaGQxjVKm9CdQtk5baAWhNzoqRtwtHdZD8M",
  "key3": "5kZkEBD5k6R6AC3DDzG7cLzQKpNCmmsaefFee9M4fRRwrX3fFgwNEQNDyTHn4CyUuvJtzTngg7FJhkYW6iA4gbkR",
  "key4": "4azzP5gtw71Jd3vweNpBwYhz3f8kwmVqm2jYhEfps78Mr6YxE2vwauc9iEXKV9yXxHQaRkdHjS2h1jqk1r1HQxnM",
  "key5": "5PRpMiz2jLdY4BoSCczCd9VwtXE1dgSsTGLdDSk6pCpiux1GAEvNCiyGyMdeyxQjHhSrTSLPAc86SCMYbUhydMwQ",
  "key6": "4QFC6cdUAAEHTEGCRGDhJGUTLcYui8kBYfWyazxX1wnZZUKXERdagRwyfJQioBr6qHNZoHgfLiFmjbLNJRRGNKPj",
  "key7": "66jhNYFvDfz1oVM3QduynvhE9kPWndBrjrAqLeQVkPgwi8SnqC9erDvi9s3y1yDk1oSEdFZKZjbtG5c4caeWygk",
  "key8": "65oempUZLMgwqVdXgBcEsBxQgoz8fT1j1g43fWEyAu9mzuCa3n3aX4aXiq8JBJWpCdh4oBJGNaEg1tS8virEthjw",
  "key9": "21awsB2nKHNbgu9mqktibwPy7Cb8WXsieReYdYjPArTyb9px6FxzdDbiGKsxRewF67wSYaM1fEDzNhVdHD339pKV",
  "key10": "24nbe6cKaqS5CdvHoqowVUUtbmw3k1CorP5Ukiu8RAenhsAq4NEN5kGdUsbW2biahN7fNWVaAZgxYDoviKjBDNth",
  "key11": "28Fb4detiCrbEZKY9T1FXj6Aank9ycXGuaQvTcxCG5DZKAHKXBvfVLBvadQmQoDTfoN2aQeuvjXgnzQvWEKdvw5t",
  "key12": "517E1taifkKVRGGgWCgvfio7fSdwmdJMv7caLtUpv3LH11Kepr7xa8f5x3Gwvugg4oF94fZ5WXjNZxUp5p1xf1HC",
  "key13": "4DrDukmYLxGy1ASRCPHdhdEsPihuUJKm6LWn5ddLkMrJ1LgobNZJNzLkhb1mTD3uMUShjHHAX4ceg15WVuGLwp4W",
  "key14": "2CKZ14wbEKSrmKt5b7Wv72E1iJrdg64UVj4PL4rsTyqmWJV8wzydjC39gEXAPBuovQFM8qzrCX11tTqswFiyfMv3",
  "key15": "4Kwc1zCXrDtXSt98WmEBd8JLRi79FhxcAtMKZNrDx9aKm9LVCniWd9DoVyehE9HegLR2YJwdyQcoThR6RbP9AoGy",
  "key16": "xeV2GJtpLDAiYtTH1Nq8FRNTfYbfaCGrETBzXnnCMR4DuKR9UoeSfMTpDoPrAJ6JLbLKd9TdJwjCAstn3XwDERf",
  "key17": "4DUsbXmTQovCjUm8dT4Js9FAUacfZjcNVJbmD7uxYhH2HHf2B9uWASnYbqNWTXPA6SAYfu4d6Ue41s16EYBJc2TF",
  "key18": "4jU4jc6PwzYq9LWjJcYEM61wkNc5QaZrYi55TgM64prwQSBNK9x8nqVrA1DzVdvnF5kCJYrCyeNvsqYdELYsBoR2",
  "key19": "4vB4fghMyT7h5JifERk9xKaNMkxebqPwNRgC1ev19CA9EvvVa8nEJAHgRGs3fjLmQ36WKDpWZd466epriQdWxavj",
  "key20": "4kiV2epSHv6tEoz4AvmZUTxEeWA9hPeuBGKTW8G1z11GTooJfMMwuik1iEs2sbpkAGzbqTcgAAjjKCg4o5oKr3YQ",
  "key21": "5Wrgx2BB86yhgQGxgPAm4DeF5ALovaBUcc16iW5j7zsrTkEBnU17Ti991rArhoVBfLopYu7mt2tMAP3Gp2XH4Vqk",
  "key22": "4nypKpvcBabJPJw8Kn1AEfhRiWhFtwy6CQDwA78PzYJ3TUwLo1kbhUuV2RtfqdQw1WbwjKpA14su3UCvDi1AuUJf",
  "key23": "4A3ji2XncJDDgm9GPzUXhXfnm7HQAPGG5jnjhe9Gnp7eDi79Xj9A1XP2wWZwKZ9tcJLFkg9GbCfC6SDdKShcfj73",
  "key24": "4fpvwwYuCbpAASbMdY4fmuZCRbSXFoZUDirHUHAJq8WfrhPGTi5LTB2H5wfvdv1qvvjSUwQrhkiZCqQ85ukLfsoQ",
  "key25": "2uSaWxGyJp1kRBF7XhqFsHvxUpmvutocdGza6yP2RDsesF5XixRqsEZJcbh4jnfFZZDqDtxHvXPbvLgG5ufKt32r",
  "key26": "2Ez2vwJ5Q24Vgpug83VsEMXdxoVytPqVArCz86yaNRKPkv7JpdMMxinAneZzq5gLA9Qq2VHBiMo1FhhSW3rP93VL"
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
