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
    "4aoLFt9htRoQtKdR6NX9U7tJ4Nbab52tJgCv4RmQYy5GGSKjYvYq7djbP8WRQyMhiEfUtEQqk6XY3wb7utguviEQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UZffgxhT3j9F1Vjn67N3wP5nyiMycDicchKXoRBYZcq7od5qQgp653qbTqw5iwWraxKBycPG92HpkW5BL11vBWu",
  "key1": "6zyrLs2h9Rvmwwt7X7ShVhs2cqkcLqkt1KapZ12uS9JtfWnSzWyArpsUXwRHqDq9WchgKa5NeX4rK62U3wW7SQp",
  "key2": "gebMyXr8efyhCtQQg4MJMGQwZ6Mz6ywmvFEiWesN4ad5Q16C9cFeXEUd7xXfJbxDgTAoPVqckFJq6jiqyg9XQZR",
  "key3": "2jLQKshkq9JdruGKiZwFMLaY92S9bzZdaxMbhcUuDXfjtXw6kA3U3cCpLFsEU666EYxYH4N2ovCHVX37yMkr2nVM",
  "key4": "3Cb6cVQzT7PT1apyxfq5pYCKu96FXN1BfNwvhNF7U4z2NCBZRmJ4u4PztMz56n8j9VDMCUgnAcocFGpjsXStN2tz",
  "key5": "2fcZiJYz65D5Y9sM3LHK3M1ktDQZgW9zFbxuk5CNfSBJsqytR6A4yiCKC3pTE83JF1XGbBqcRWVxQQwy8CbKjMLY",
  "key6": "2MpaiBdCGUswRENKeiNZLfn3ETjGbAW4ymsRZeio8CCxB2LS8kEvuGei7RY2Ec3fxUNSkFRZzAV3reMzVfcnbPro",
  "key7": "3o9ZVmVuvhkDZP59ptEntZvu6XpMPAr6yXoEzndw6UvzMaWxVou95GWJ6uVeozGp6LpppGK5yhuK8rseFhqbSd6c",
  "key8": "3kCzBKtHnkLzthFn972xDUXQLfS25PHkhDmTKrvEqzESYrsFWnpoa8juC2aMRRF5V7uV6rxYaFVbwMgZG2kUupiq",
  "key9": "2DZCqHQShkqkhkjWp43BacNw1AjBwTWsSewT17VtQGnQSZtt8UcC9czVDjjDGXEAXTKeHvSEVouC2GyJxM9HXpxx",
  "key10": "4k12SwpS6qRUVNgPjsFJyKXm6nzGSfUzT7R7HtGaFxDtD7BFgfvgtJXgmFmmd5u3Qz95kpZ75Y1BBTwNTiW89pyX",
  "key11": "3gFngaHZFGkqebMvssAEn1GmaE61GoHn2utA3Ap6oeqtP2CctUaLPT7PnQByz6zvn7vwgsUCGcZwujvvu4ZcuUxn",
  "key12": "31rtfjdbXyuncDYo2CDKzHdhrg1LLJQNQAZKHd4yLUgAzhqWcURpTmcPWkDrB75ZrFmwRMEnrqaVAfubDuMpyHkX",
  "key13": "3fvSfb6fAi1uPs5buHxJeeS4pCKf3qWwXh6rf5tHydHb9rcSzDausFfEn99q8eFBTdaGC6deB2wpkwxLNVSPqdEk",
  "key14": "1f9KNYhDeZ1KetXu6nwfifTTArBXWi17ejnkRaHnSs8e2E6BcusjKpNHAchD59RgBGvNZmZLa826JrFtVShpxqQ",
  "key15": "5t8KAQMCPyBWJTWzdf1tKk43ptPtjG4MhUuq7PkDdBhLqs5JNXQjyMfEovudMZ6XBuUvkya75pKA8i8tUenc7QHK",
  "key16": "5i8LFe6NQ7PgdGBzbrEDYZPJ3AchSwePpDCCsKymBp9EBHX6hfpQjjdRDKrkg1rVe2BKEo6CW5jSKQ5uSEbuJSCc",
  "key17": "yaBadEJttAeaHzYJpcLsMkZwgEVRJ2SZqiYrXXwBVXcJuUniZ1C5fASdDrSAB4CVMcRnCPoohodPhmvoimBLJqZ",
  "key18": "9t4X6unLKjRftdbfz9hSCM5prMm4SqqJfYHWoZznbAGQoAw1DVsKrcHkwdaKegKz6TUvvvaDwvuKmHuyCqYTWvJ",
  "key19": "3shEjM3vzg8V6mnWwuCuaXahp8mviaXKkxqi86PqefXKQwZJXKLRaSnpAitqGnMTPWQgWnfn8m4N5CWrmSAhrYcw",
  "key20": "4CpcPsrXvkdnb7qAhr7bgxd8fgjh8GyZs3E3VMGiDpJvhPPkkbryz6hjyGU9cnMCzqWmWCrAGmbe7iSWgMPXMwX5",
  "key21": "2zZFQW3kDn4LHD5BMq4FXmLKx2TRRDTAVEor3AbEJPij8ExpRP3uDrUXPVg1sowzx9VBSRy5j7UmKfbwnV17C5EJ",
  "key22": "4edqnEHGMDMDRFnn4xrAyJ5r3FP7BgXc5mv9sDL6YsCDpniZJVSz9BdS7bsAqS7PsM87Bm94c2KPqkEtuzixbC3E",
  "key23": "5dSVadGyG2oXr1uMgVjGnQmBR8XBcwQxoxNTrqMseN2taTo3FJSUjF6p1o5KUyvuVtVxbnUaCPV4JJtiQkRmWk9E",
  "key24": "e9RMCETU7Mh55mn1pEZ7tnZzMAMqpGLw7a3J4Dcp2d6jDoiWwsE7B5NmmCZi88qt5SL47yehLDYj1zPjQCo9R41",
  "key25": "59Se7WyWvSHVJW8ojWRu4gdfWBhUDKnAbr9t6B4AKfeNMxhVBXhwaekSMsXz83nkmpXGEDD8Ha39ZfwyPa5HG91U",
  "key26": "5tjaSt8prGqw6TKPgrHqZGDhEaRfHXjdsPPPsLr1TsBxcogPBtmv36RHio6uQyP5G6nUHeSRKNCcWc9MjntWrnEV",
  "key27": "2sWWYSks2yHfaGYfo7t15tfnwqciHyHKvdV968bgLfGYbWpVnuHM6g1LThxQLfYGkK2B3PqW23XcivPvGXeukVco",
  "key28": "5cRdWYUAP5GyDuhyeFQg7vza1sNmn2XAjr5M7o9Boc8zxAsPLTRYvtk1bfxE1esu3ZEteBehn3UvfPHxWx5HquqU",
  "key29": "2dHXpvBedt9eHQ4ELTaHBt6JpbPaJa6SbBFiq3prrhwLgBHCTJU79429QR2iRPqDdP3mKUCcrLSUaHdxxPB9pkSx",
  "key30": "2Q4Z2xs83FwAakhAg8uxw5pMq19kRRpTDU8Q7B8XnhCZTrn1ynLyHcS3cGMbwHhQpLtz67xyck1JSm6p5Xk9gA2z",
  "key31": "5kEYinDf3V1M5GbxLdApmG9n7CE59W2CBLxtYj28Ux5rbMEQ3LiHYk6J43A1cTcHz7WDzTw3U8R5xvWrA753bjFL",
  "key32": "3niFbnnHnbvYfF98w9QQSELRsbbgk9tTcLvM5troEVymQU2dCTBbvvrJdHEFoQ9fEu3bZVoNJQfzdJ1Aa827v7T7",
  "key33": "2Jvq3ve5hFxYAug7cQHRujgsNgouRbnhjcU54Z2a3My4M2R6mtQsVrr8Lw15saP2ii8pG1Myr54HmXwfjnkMD8mL",
  "key34": "4jicJyHzWxxCehuSnTyweT3UGvzDX6wcAjxp4Jq1QUt3YTTEAcp5AfwJBNHduU3ETJf5puQMa8PiKo5jJpgKEK4o",
  "key35": "43fFhPFA7UprXN32LmKHBTgSFivCCgZSPGLr3TZHqnFkdDH1CxF1pXpdgzHXa3HTnLV9AbBEyHqpPayM3FxCjK6w",
  "key36": "2hEH16EdeZAWq5hk1NsTdj5PL2CfJQriDsCH5VByEmbfGxdiGFaDZufnfXNN2ezshLdvQpLr9PRnPiQB8GBDbymX",
  "key37": "3RUcStmHubPUgwm21AZDrVpZtnsPaPGRXrdwNznRcy6HwYwBoBUmzEqTTComhFco9b9ozpsPBMcNfhfGPJWPECZX",
  "key38": "temPRSQY3wwhAoGARDtiAYVHp4Ptyu2pKUfHFmUXNB3raNrnEim1LmgAi2vmwBEj6UFT4GLJUhms7Trm43CPxQW",
  "key39": "2CHy1NRkXmnDwVz8DS3NTKNZAFjQ9yB9bCx9eGAXTdgqa4wXKVEv1vJaiRE2yZoQ4MNrQexdJQkuhudBzNzCeH7Y",
  "key40": "3CmnsC3FwfBMbxucXCG19ZHCTXAatxTtGoDUe7G48n3McpytT246T1PFU5f7H2PoStAJ8YEpFqos6qDn4dFhU1qp",
  "key41": "2CFM8fF55DtusZ2gmSkGeW7H1xLvyyBZ9YrUYedophykHPBPKyUyvAfzSNvyRkaLUAhjdnDsKVFNniVAjHf5WBCs",
  "key42": "2USCBLmTeLnsS2sAbabw6JsipwtSC5bgwuzT74vd4atQRrgpZmwCYBPtqCB4sLcyhooCFxVbvx9mqKMu34D3arK2",
  "key43": "2i6uBxQUeegAFizBrrfu2SCqkXXPq8ALMvdJ2TDgBPnFWp9AE3mb55QJSMRE31iey2acoEhc4TDLyhFJPQ5ZTSd6",
  "key44": "5AASb5JbyXWruVu7EUUyQZMNJ5QA5B19wyrKvdBBmUWAukQVPVxGY1RPQhcxH5kwWy3faQwp7ccrLjuKQxW4peKx",
  "key45": "kSveLp1fsf7zsgpm9zL3zsWZ8B2n7Dq9MKYXboTz7s4W7B15uiT16gg3Q5r44ZJ9XgjRvV38eSmn4mjgw1PB3GL",
  "key46": "5YFo58hdZMxzWHqWRBj6rtZ6PG79auxG951QLvBeGNnQECveLA1K9rTqPFPDLprRi5ynXCZ8f3eEdDJxDVqx7phe",
  "key47": "47sRv8AXPgzGVQBWDQiaWLULwN5URGkF762ube1KTtgin26fmgSsqsbZwRWiKhhPv6cVXqJd1H8hYJD89rh2z83Y"
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
