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
    "5StENZZQBdU9qyGRCsCJzzX9HVTav9TuNh2ZwLXGGLiyXHdw3pTkSTecuWBaPyjqioqjB7PuGtxSR97Nd6aq9yvp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p8rpsxdihqdwDT7VRXbLjk7ASnLYgtVSvPpwMuvHE18jFJVDWuxQBZdkLDHeALaCqoepg4rAyUH8xExT31P5YpR",
  "key1": "3a76DVqeW6fi6exwEuk7CQQkjqys8tb8PETzP8F4PAPov7zq8rS3mUJLk4bGrSMVU6Dd9Pw3eDKCnKw7x92TN7N1",
  "key2": "4riLs38usiApo36KrFVAoBcQsaE9L6Hf2GumYDwfdAQwSUA7KB55de7gzo6oLTB1u9BbVfBsTcX8MhoCjppyifk9",
  "key3": "5F3MJA9xkaRgDsHz6d8QVsNsixtsEz3CLrHUgv5Bb8LTbsf6vPm5SAJ5kAseZYTYabCR1NjRhsDjwExGg6bVjAhR",
  "key4": "64drXLPB9nJayVv1Mo3ELiy3nsxe5swZyjs8pW6wEWgtSW87Yn8YV9jhds1n99EmQCvDFwkNBav9qFgdHm9KjwaL",
  "key5": "5Rgw8EzVtJ1fQ9GABYqVcTJaH25drP9WmBxBxPgbGv6dDYeVjnaGKMc7GjPAAJdojan1YQkbdLA9WExEhPPhqJug",
  "key6": "3ukB26qyR5HZaN6qifSB9TnAjQTg2BaBHBwbjFWja2pAeBEcb3ojhcy4WRX9rqCdgSAQSrCyeZkC4TTY9ncKMbuN",
  "key7": "3sQa1tUZNzVUdy7RvGLkg4o9Fg9YwdKo76YtbTC37wzebNH5DMRTViAwnwQLbEvaGjnHDE8UmpENmDfh851c7R9e",
  "key8": "3Fb9JGgyEdb778H82TqcZJMo9JUn3Azy77TTJn4arqW2SeZQ9PgofJgmrFXPRvpxW1MvkCMS5H8yir5xzz7ncYQm",
  "key9": "2r2EFk7896aqE3XpE3LgdutDjEPa6ot6MyP2F3Wj9MakrK1sKeM6LbX9Qn5jjnAuwHX8SY6WfiZCYKB98wspBSeT",
  "key10": "33AzBVU5YEArmdDS3bbK4L1UtARJ4FxivGxxPESL55cCjWZYzDNhXqpQdYu8i3exz2hLGgsVCtRTX2uKK6DufWEq",
  "key11": "2bepximf9MGZxS2767aoQeCFo8Wj199KrkuZtbSWvdbYApHC3bDezErdUz1KE8tsmL9vDLMjT8TtpC19c4rCrTaH",
  "key12": "61zmrChr67Rbxxz7VnH632HVcoRCd42YNaX6bKg28RK37zMH997DtpDMCxri6CaJnPtDmHmhveWtGsBUycD1CcyT",
  "key13": "23F7WevZnb55jEGY5SSRbcBLZHH93e6uHkg3iQNkcTPtxuoQ5sixMzX6WP5TwoaUrKVW691obEd45K6MKTxQaqLy",
  "key14": "4Pm5QEF8owr313rtjWhMez4ZELLJeUsBY4jdeeUHkfF6H9c7yNPnLwxezxB1CJdy7XGGKe3MmKarbq6sCYYi4nKf",
  "key15": "58UGfovDmF9LozxyXr6UUpm3eUYyHZBUUX3Tfaf8csTmgLmhTbBsxcPBtH91gFnm9zZtPxRv76cP3aKzcY26hrf4",
  "key16": "36dFda63bhCxWfEi9Tb3bkgHYfRJCLY1dTLdZFgayGedas1RuN8AaCXreamag3gYAH9BEscSUtTRCUMqqBPeF6Uw",
  "key17": "cRbEX3oyBsFTFH9wV6UtoSWX5cQXZGiW1pyDb8zeE6a54EGut6mCyZhoadUdZVXYgByDTFAjQKkycG9JskSfgzr",
  "key18": "szpKpiEWsvxjHAoWvU8ECmxnyCPZ3bw2rH52VDvF5ghTRVK1SpeFy3Brerjf1hxRYnK69z4osesSeEcbidHj85C",
  "key19": "ngee4YYVqFJaAK9zeV4k8SoF1jqwSunYY2d1tRkwGoWxFo4gzyVSxa3du7webzWCjxc3Kxo8oQ764XMnqXJYQt4",
  "key20": "525qoHwQ854eJRcfnh4Wzuxe9neHQhHTDDHaigKnpdRXsh2VDjVM4toiuagH9jLp6no9EE55FPuXhKhVLP3zVuun",
  "key21": "5x4aVbjwxUYe4C1VUDpBpqAoYV8h8Z72eRo2Mjx1yyh2HP4JxsNKdfHnsF6KkP6oZpCgRkMTpgS8hmsj13hqaTyZ",
  "key22": "ArAVMePHFUwSkk9xzTrqBgBouVUPYKB84TJQ8NJD8BgsyEntJughEeoUGsWqt8MC9LzNaDJc1NDkajf3VTWKpFT",
  "key23": "QcNjuDQC2t9B3Pn8Vot6kCATGsyjBAncpbogW3wEHBTQphMkQbBqmbWZTKh1GK1yUadqFJyx9tou85nQjbrgbDi",
  "key24": "1CZeGoLVXYFPNMqovzgJkU5C9mWkCvsi7wcMuMPcEuJ9sPTHxGj1eh1HnK1tJUNh7Hqiw1Dznr4X6S5DGSeXiYd",
  "key25": "3Wfz9LHhYeqH9Ju5qGeBzevGq9Jk16752d4Nn95CatEHVgvDR1hD6WaLfJVQ3KK3TbuG9nkfXkabGnBZbmWMwSdD",
  "key26": "zZNBFgMRak5nNDf77BUBs9oKMXuXc8BLRp2KbvdH6f78r8TgKPgwrLhmo6mLXi5WpBp7ZEBAEPwUbK2tGfebC8J",
  "key27": "pDztGoyabs7nf5XRRJXoGiGHygodkqm6Zc6eFocdK5y1zixyKwjWnN5FYhcg7sgntggTeaieyn8z97cRigBCnLz",
  "key28": "36c547Y9gFYWj3fZ4e6am3R6WtLBLmf8JSPUNiet4k1JQ69okj1Dy28R2W7DatgcMMCHHTb9Qvw7Hj7znEueK5w7"
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
