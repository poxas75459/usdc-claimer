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
    "3RQ827EjYetbBYiBmoJKTBGkFJzWTjjaAnnZaZThsEHzuAYX3ehre97z1PoNoYqvW4Jneg6NRaykHKusNGxGRxWr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a2Q18ktBNXufxEKNj5WyEo1PtwxSSrFR3M1QijjDvNFxmps446mDxajUWv7zDqNiGtGj3KBU1SUHF7Qn7bZS69q",
  "key1": "x1nFmwi66QyGVPH2AaMXFpuSzusE74TFitZsQVJ6B1nwtszHxEvDB45xH8CKytzhChVXvv9McewmWc31usARKnm",
  "key2": "55AwDTiy1ENp2zNzKR3WMMkdBo86eJu8M9X2gT3TtqtkWdQmPWV4jeuQgtu8L9Gzvpkr7f8RqS7Ry2DHuCaa79rR",
  "key3": "2EPsr4L4Ue9CpGvy6RgBPZzn5M1M7TVGvwmH8ez1imJrzdBALH7hbHtnRWkd8773bXgTkS8Xp2EzmHHYEu2A4DrD",
  "key4": "4zCBS6qPUK3aLwBjMXiti3bFPyYrMuB4vvFwqhv9i2iQVYvbheb15xUsfRh7UUYzms9AGPgADZQPg9KHJx1Y22ut",
  "key5": "3Vq3MnZt93BUTmTo9oc2aaAuxn8n2sEKPZ8u1wSACkZ3VwZNyGvnbEPTAxwi4zEiLCTB8TnN6L1pJ5Y3r5MWcToZ",
  "key6": "N1FCaRS2UWN1EcRwVekqTWgcumfoCr4X3gfosnGqunjATZxjbMsHi1DHk8kFSwSzLDsb1jvhs8R3xakZYuhsdBS",
  "key7": "44kf27jjrDSpq1bTskHtWehuQMGNsMpGkFWbLcUoxjQTN4ozaBMaJvuU5QmNekKGrMe1HmyJrx6B88jN5cxPJfH3",
  "key8": "3Kv8gdpgfZK3yviSxAhA2himSsP2RGY2zeUr5v5mBEJpqRJ5fapap5zvrmVwcJAqx6KbcQhq7NPh324QjpkBmroG",
  "key9": "33bB7SigM1g2KZWRH4d4TkZSs92serKt6o7GC5pg25SUj3VcLZTo2882sCbAhPxkc6kFk2ctYWt5HbXiSLNZHcWU",
  "key10": "5MSbxaChtqB6X9KLUkwhKnnEyZAXpnyWEkXBTHNcTzqHoTcFjNvoNcb3oxLytLuTXGE6nHvcu4ebVBjoSPR41HLa",
  "key11": "3aZ6sGpbirLyzyCXngXqjkBavNxJyHSFCA3Nnp1hWg6g3s9BHruZGtEng32aQyZaKC6ho5DUMD1LerxUMjoLwToH",
  "key12": "3qzJ5HhH6dAk3Hu77yCMrh2cnTWRDPtsRmwcC6uE3U2kbna1f9e1kYoJLUbUYcdtysSrZqQ81tebtHTTR2YEw2Xz",
  "key13": "25MpuSFi3jdLWHjQZQYHrXGug6cc52WTKFk2zf9Ez52PtWHthMKTabhDatbW6HPwqiZxM68Z7MJiVzD8NneVRYQD",
  "key14": "2Hj79PksP5Nr7AnxyNSWScx1LMHLhkYSF7Ku1PEWXVsZkrakhYTYcTYuSETtHDjJAnY6immLCkkhz5XcpBqSfAK6",
  "key15": "3BLyCHsAUqEUetsosphfap7phSJL9yf48pSJa2Teub1FyXXLWEY9QAoJbyTzNC6PJQu6VMC9ksJ13NJPHZh4GykU",
  "key16": "4BEZS574u3FDjReD8txU2H9o5y2aHp5DZG5BUhuNkRdjTD5gwmLnLK5B7Xi7iMRHkHB5rMuQHpPJJSpZxmL8jmuN",
  "key17": "tvxzVruqWkmKJzu8BgLu77pecdomMVKH3XjEERkZY6Hn7S7iYGFtxfPQvgwraetvnk7dZFAR9dHWdB69Cc7Q91H",
  "key18": "5Bj4GV39vNDJks8zEE3mUsu7D3QtHDkz6jXe66NSHhtiRV5FFNftoCeyZcYkYC6Kz1ktoQSCgoC3uFetah1sLcf2",
  "key19": "3pRMeBAcCEA9qGTDffj8cjQQw46TdmNzTdjJzg9MKmMhkGgPAFmYc7N7J9E1gvuSZxmJiDeUxeJmEg87VaWzC2qy",
  "key20": "4at2HR3ftgW6wQmeDM8YQJDBqzihfXx3hFS9B9UoBMfp9KCrEBuVVVYTjcH1qdesHfYYh6ZDNrUPEMzyanGyEMSJ",
  "key21": "yncqgUyoLS2u9E1MF1VnmkHTd4HCG27T1hd6EM2ZcBxyYhCp9TA1XcMNRM3LNU3bgvstsJoBDZu7TRDGiJ3yCQm",
  "key22": "cX5yDkNJKPMUdkfsvZn3PGqv9mHf6tGQhfj6qYSZsFDbetyrdSFXezGdHWbwPPeCBwus7YB38nuZ8UYzCmVKy9n",
  "key23": "4y4BKHzbAmS7pHJw5fGo5kc5d3XLrojPcfhkLuGMYsLL9U4Syi8pgPkRRQT1macFuEko6bCuxrrtq4zdbZw7gtJZ",
  "key24": "42M55m9Xxt5nJtjUdNRhx2zw3afaDxMKYGLgnYqe1hztYvy6ps44moX3B3TyAz1RXftqB3Fasf75sUNkY58wQ9gn",
  "key25": "5fKaNntikDXNwxSghYMGcqepxfaUVyvWJYHjmM5ZBaJo7QByhyVdhWcGaFZmrGgo9xR47X1pGxFRZeiACSpvL2X3",
  "key26": "2jeVpkShyy7HNGgb69o7NTJgwMWSFJ6cwxz4K59m6Jx1GH2uEPVK5VyQVVupoCoTekEdpnq5kJ95NqKR8CnxyZqX",
  "key27": "5TxBrRv6rjoLztTwtUqyMaSZF9iAroYAHPJjhiXBh2Cw4uNbnuH1vU2ATH2KUyVLvbEzrKxPruZPLBiQFuAxeh6t",
  "key28": "3iajAawjWjZYNbM4btQ2j9mRHqT84Aefo9TbD4Pr9UEYUDMBP1nK3nPncmRQZUTMNquuiceTyuVuLLQ5Mn3BMkYQ",
  "key29": "4X9Rg4Dtn64j2MyBtEy7gYfYdDJY6bCHEBVmAywKtw8JZsYRJUgMZuxC1VFxW57kYFTHdjkPdzdxs8Q7E5CbNuyV",
  "key30": "5GFnFiBRjJeoS4YRWmW93mFbEaudemRqDhyhmvfN8CxY55cszg959w5eEhsxRsd53uig6NP7TrBsCNB8zY6GCT3Z",
  "key31": "5ZJQRcq619A9T17YdvPwH98PJ2MTfwV1va4uMcmZAiyGeBXVV8oR1J5bYRRcFbvQTCWbXnurdNtBXUUkYwEkW4qP",
  "key32": "R7adrV2hknVNtXLLgP4yHQ6hE2DCEbai4WU8jaBqdxUiEa8DNYX24E8QxYgFdjQUrGWp4E9CBr3ebS82ycqu1kY",
  "key33": "3wJoLgYLBZ7Z4w6VPtQJ6o3vPCj3oKNa6WcDsJAnqP6srVcuDQkJ1rkqUNo3ESeRWBwhmTcKHzAdwGd1995ydi1D",
  "key34": "4fM6mDKkSUrs3FbmwBs8o2QQjbShQ6SfS5f9Pias3kjEBYZXe3i4g2FMhZWt1kFwqsWFskxKyPyGh9TR5xBjUS9f",
  "key35": "5RBATKKBFNCwyicTpbGnaDmzjBzVWSfcP224B4biPPJ3FWKxCTjMwxrxEHuSFb5XXXWEiX8tV8Dihv3rAEx8oce5"
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
