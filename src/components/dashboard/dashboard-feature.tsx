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
    "3ULGD93bcJKVY4MjXs1pqTz1xPtonqM2nnxAivauATmhqa5tMTN1bLMFZjX4iBsg4TQxvvEhhB5pT1YY4hAicD9h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X7WCRSBxGtGbXtWp9y5n2mktywKrFkxVZg8u9wJ3j8Jn9BnMPivxo9vEnBP3auE9VNZNjpS6ng3iJ9yHN6mtybk",
  "key1": "eBeXfNFfsebGtoFHPsoazvgPQEnQ2vBkiMcB9ccmepjugwLrX4aL9zAJEULUrfHsqfEpzWCnTtg7wXjvrym7syt",
  "key2": "4x7zdmraFAT1k6f3HyC4CAXxMZZ5pJ51d79NzXE5A9RK9sqdVC39oxfoTna2LE1j7homZJerVTpFTjYAhVQ4gSN4",
  "key3": "3v7ZR2ZiFPNyqeXaZ4tWepCcfDGearpbgmzafipZXG3hQfNXNn5kZudxc4GtgHFHayoCUB3mKHbYhd2Fcc4xuym1",
  "key4": "3dfvrzrbeB7CJU9TrmLeBwyMieg9aiGBW3TFwzn2BeQyU7U4udce3SuJhQ9jrbbiAa4MLfXmes2FUFgwKGuHf5PS",
  "key5": "4xCQgvWprZpSoZRSGynMEinrHKaMwMs9hT9vu8oBCfVzTp51yT5ei4EBhNo8cipsBadp2ux39WTznyG9gT3qiVt8",
  "key6": "e6pbKAVZjbQL6m7miwuQNsVPc9s9sQ2MpYfn4ezWESNPWTdmaw5RbineU5P64DFXSbmawVifhK1ecRcPTgfQPMY",
  "key7": "3CHrqfLQYW9qghkM84h6jvVN2VsUmmTtSGTmXa8kFBmfAsDFHFzAGWNNcLAjKUdyy33kYHLcRUWRw1gxGTypSYhN",
  "key8": "4xkVuMzAhVLeXhX5wBdyT6QL4NjE5h8DqMZ4ud2nNekGaihrARp6jTfbY44CVFwdB4ULoF5RUKiCMV6W3QmUFYCD",
  "key9": "5FPVJ5Wk3RrZb4aVMbtkK7zBrQEUNynaBYzECRzb5PmEEG2K6USa8zuyD7RWfrYbkWFfqdeXnmE4f7DFjBtVsTQy",
  "key10": "3GfoXKHvCyVJhU3nEpB4HP2MCJdBcoyzJVtpgVk3LXk5BnDPuykx1JR2oArDCAUF64gvA3AEdVFfv8WFM2tsKtZz",
  "key11": "4zEP3h5cQTKrY9wgN1Vh3sLrd4R4gvfmDBeBZUwTWCMagmJbLZP4AvEYp4WnZSuUM3Qw6n5J3UL1ZYNCXspLHqtU",
  "key12": "3XXeH5pSU8UGTCFeb4F2VKWZdjfGNcqzDymc6dzxF3eYQfwXy7jpGu77o88D3joqgJazzkvZbbK1rYYmqwLrcTPR",
  "key13": "e5rshBCC6sHW7wjNmfgF5WE1eJgrTYBiHRsjjc2Mm9HB7qKnxA7MMxJVv7FY6RU6Nv4477R5M7WoV8ANsxxyZYe",
  "key14": "5x2VLyXw8V72s2weWGbX3o3dnEbQ3mcya87NQWn3jFQFthAUE79dWTJZEV3nbrqBRtQbohhCu9iYwqFC2u4nymce",
  "key15": "4MCYesqQcixRicZkaADwaLavGqHvavLp9evoRtmN25UJXmcSfxv78ooC2t1juovmt1R37VBVvxGV7JortrZ3Yocr",
  "key16": "3afTVrSgNDVpUowMX6q8NgMeAe4ny3kFU4kpg1eUzRwxdBLHBQZGLzZZxHMx4p32mgZKEMB9KXgWnXi6AcgSfMe6",
  "key17": "3XajsbAN5HwL9Du4Qny2eu1bmTtc8iErDhM89fBWT8StAzuVS7tMVvy3PAyHF9d2zqPiSbLRLHDrsR7a33vKgh4",
  "key18": "2JuBD4wTwZeczn5SKiiLa2zRGASNeY8KNCcNCxwHHLp8t52UxfDMY77e7hrsn8wHPe3cHZgrWph75T2dK59oYuvp",
  "key19": "bEZ1oPSza5WAkxDWFEkCQaAx2bBcbS29X8jGseASNVGr1CFbKq9z5oY1JZspnyxfJA8nsCnadqRE89D8HCJakPR",
  "key20": "2dzMZtcURQK2gAkqAC2DKb8H86axL3DFf25uMcN3TwaqTeeyMbs4TbC2zSFt7oXZoRqaBSj33wjTfVa7z3AE2kC9",
  "key21": "25dRwZrrBUCHMn6mJAKTr2VtqZLR3XFKSnNWUpwt23Qgo6CjYyi8g3Ru9UJh2wQamzrsNZveNyvdcqqvvz1Wk3Hq",
  "key22": "5mBgPncsutzo9Cmkdyi4rsUUtm5PCDdYvBxKABnnrpYKqQTcEMaYt2myzMqESEmAxftcdTHCZdUu7bnRF54dkXZH",
  "key23": "4QuMzrKHUd7wwpSoXcAwfnLJGJvn5e5fbsyahPdNm6dyzyA3WAFyjrHPr49sE1SG1L1tKELFmhPtJd7wgRukbSrR",
  "key24": "4Z5vjcXL4tnVmXcgTGeq4W6snDPU8H18kNFiUH9k3FaZVGLVsw32YSL4GtBtNwmzEh3Tuz3ZKk1J4FjHYqwVkEE4",
  "key25": "RnBxqgQMvtfy2yQc63cLmooXSKWQcPrfDDpRN36svWsfbGFt3zVDemrzv46FUAADjCKBRETzqNktJnUjPLNbo7q",
  "key26": "mTkBFnYw6vGKZ4ErnBWGbD1kNrZxP7dxYURxnX9r1DshTjQT5qrLbWRVvhjitgMTmMrQX2c6AHoes3sWL48bG9z",
  "key27": "5MpMoAya5YzCME7zdPw1uUbpf4GCKy4uQUUCbG7jvvYxqz9GxR7jKH6QR3vf4WwhZR6ZiFsMZh6DzKSoYjzMyy8R",
  "key28": "5kAhD49PDeNVKkkNt58qBPgopaiHozrchchCoL9obupQN16rHAgxueQSxFMCYwncDkY99fiw1mFBM8Pt17BE1bV1",
  "key29": "5hsA2vMfz61YimX63VGNJTi7PY8GVHkzoBC2WZxgEK89twT4nq6cVpx6M1Lp7ZFgq62vorZn99Zea8JThuXdfRee",
  "key30": "j9YerfvafQKX5W2bThJe4fi6LejND8icFQs3gqbhLYaJWQ6RGLTk65dG4Acqf4ZDVSAiaSjQ6hE4tQN7HgRNGFD",
  "key31": "4YZGPHUvTeLBJ8YJvhgEw4hFbEyCGPZLqsC4V4kmqpBnCLQ78CQPJSrXy4twT5Pqutr3ruSpxzSY9Bi328DPSM3D",
  "key32": "2iFgyfaKyo1CPP2LdEHj7fkYVeaq7fQwPnjNHiKFmZ6rUiTgHUXEb2hhdNpnFkxnbKQQdSoF6Gx4ehUAAgAFYWAd"
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
