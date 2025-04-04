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
    "2kkov6unyyC5ZjMRoWCLmGh7FUoykwCwpBDdnLBSaEYWpguDryZ2puXJi5Tk4XMNCYEaPaqyckzJknoh4EEQdWtu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y8e3PpN1u3EKjUGEDkmBuet6mERPouzp7gmmmYTbSfAejwcNCMJkDdK1m2gjcXKeeEsBJBGJBvMNqVWUYmCtZkc",
  "key1": "3VVT5z8NP2rQCu3JKo4rVDM1cC9JodRKvHwxAE7csYzRcv4Wc8cLoXishkJsNZWcPvqZjogBpP1TvYLqn3FMBTH8",
  "key2": "BB5Q2yetn5zkyg85kE7YAxfzrV5sbNMRSBt7rAuYAXGtuk32ULYW5o6T1DLK4bU225jETJWmvvdgYdBAfX8UQhy",
  "key3": "3wo6fYXaDwDwxXso8Q3Qiy2B5DcWLeuMcH4Dr21Rv5mtaEpVM8WZF1noAkLSM2uEw24hDvu1RNAGhqHkssRX17U",
  "key4": "3iKZkerMoyxWLgoV5vCC4FuwDF5WwovZXMgM3Dcp2J5X2ZGxCkgg3GvaBXwGbA7vcMrztoyCrETPaDPHaGDvEEBK",
  "key5": "4B3upwXUizuE1ReTZFtPEvk2s4btTQ2HkV6Q39Y8QMGrCK8tnvmrXVazYoakLRhuLZ9UmzVCtUjLw1ys8wfD2nGY",
  "key6": "4HjDdAG6SFNVX2i7mFCRg29QM7S5FxrUjZ64VQHcbU1XBLdbYCxgCUJ6bZYxe2DDqjshHJ1mgnauQskrZ2BEEqV7",
  "key7": "4nTdSzztbdjEtqd8PUsuNby41D69W1p6SwcCiiuPLhyey8KjpaSHy2MXPkzrZ81WfNw861YoNJdUNbFA4vjSKH8w",
  "key8": "5D42b7yhPsa6UqnMq6eiDy3sp2VLhERemR95RhrhhqsfoqsYw99v4WdHV5Bhtxmj2s9TSESpF2fQxApb3renmSSN",
  "key9": "4jsf2w9nTJRoTn43n2CThtFoYmWPjuR3KRdEy3GJg9kW4NEb3B9ZXEEb3H7G11rp3HTHrK9AaVtkhqbTMc62obDq",
  "key10": "313BV5YKCqpD6mjYeiqx4hRCkNkD9adWa2S9pUAuDxVmGAYRCZo1R9BzB4Uhs171UCrownuLRzdnQrB8RdbpGHWL",
  "key11": "3S18Xh61p2AcocmpRSVFvtKHr667ZomFxHKNcUpjGmnEL9riEXEizekvjxzWUrSuh5YBfYiTRA7LHYNSdNhC42W8",
  "key12": "2n7WoB8rQQu5dQkptBQNxnzFAFJVdqV3zZiXByG5LTGXNUHe1zQVdnN4ydCKk5jSujg8fnrMaRsLP1yZMZMJHj8o",
  "key13": "64Z2P9CTfZgYo63Zn1hGEnWZqxEsqMrkSu68auA25hyHoKUm91K1PFpnwLp1MGXzLRxtqqT8edofRuU7Rwq5NtMV",
  "key14": "5KvdcJy4Bg4w8bGc64xzxpZQvp6N5KMHoNJj8XKe1NFVMLoSBmxeuCGEhvoHxwPBFXtodMhkqWfouBnzDDfZUwW7",
  "key15": "26FMVFE86mSHVeBu2mjFEDv5pgmHWW5V5U3o1UDH9NES374AiRinZquAakC3WTFva8k4Zeb7RzDRiv7Dby3Zzimo",
  "key16": "2cj9g5ffpEQYX2Unxt4uR9vA4LXUmM2A37eQu51CfeTEbMHFsjDLFoqwPV6eBouXmEL2E17NCjQENiEMezJp1aAD",
  "key17": "5MXcxy4PDetAqL7L21ZVZiTjJiffYzX14JQP47eNC66aTWQR3ufKC7MzHkwJAdVF6P5SMeTw7ux7MfyGs9M7khWx",
  "key18": "4Kb8iM4AHPmJjFLYhxZk2R9anJmS8RJSUo7YDNyEgK5xf7gtUUxb61LrxDfRN4jBsnq7gFZDPUiVQMqEDuFxFemm",
  "key19": "5Ua1gyXTXdqTG8efWrSfmwUogMooujPySYvgAATzZtqSFegHyzn9nvnGwg7HbpxEma1o3FEbGqYsAdFFjVQaXZr9",
  "key20": "3KsmNsgGH768phMLRhXMpw8pkv1PcjjCDRxjQhHmjeG4bEh2L1gvqG1CyuEfVVfNy5zfKauHkasbqUzqSXWSPNh8",
  "key21": "5d3G5HDCRLQc39Wp8zeFicuVmeACdP1c5Jtprw7R7SR37gpJG7rbDS3QTdg9F9iTLwbWRvtzo9Ys1GD2WMddF21Q",
  "key22": "cCMEjdd2DbyD49m51C9aHDYmtzQdwTTeLzLNWbmHJi1ZB8J7SMwBcL1hg4EVfNP5TbY5D5Xhkqj7jfii9eJD1jp",
  "key23": "3XLVBSUi1ppzyfGzUZj3YEJ9Ts1S5LZdrc611QutraGCnFSDY5gDMMLRcTufSN5jQrAFMz2UMobRqvVF6DAqzyZG",
  "key24": "3ujNXfxenyweC1YJarsYbzVVfAQ8kWqa8cF2TsURUuqYFhPYeX4NS4daF6AbNeDK7gMXjAiCNGu8sqPvGzyfA2en",
  "key25": "5L98PP3TtqqLRD7HiumyfmAMdengReTPK42iwqVS4mNpS5mpmucZJiThgvufNu7vmuMHPtrgnfoTVDFKroWSH8K1",
  "key26": "5jRzBKTZUNUHKaZ2dfEaDotW4Yqn6FxQNXZu9ejbg87uSKiAcqfwMKvuQBArdQezAqnGzkKbehgZuCi7AAPb6SFw",
  "key27": "5XWTmCp4gcAiS4TQjBYPgwdF4TdbK2AebUZgVr9izPpeokQiaBGX4WdPfrMAF8ULccJjq5vvyTk4dHhbjTqkVcev",
  "key28": "3DcVjkM1qZk5kJJeBhg9LikDsyBG75iE19hJR7JuJwfS2wHH1c9iHrWAdePXzBpGw9pXQ8vE27ytGkbWhzDo1aaJ"
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
