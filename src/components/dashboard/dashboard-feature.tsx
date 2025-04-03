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
    "4iZhBzs5aAcD1zG7UK8m7w4sSxVguajGVPFJRyzmkwRB8ZmmRamUft7mhuz4CKunPTPKX7qypfQPQ1znRzC6no4P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gDtfysyCsJhNwHgssmLkvmEKDmTjiYXak9qv5qYoLU9QBFKUH7ytdi96F5Zuzfk161V7d3PuQvt6D2TpP5G1A5m",
  "key1": "5VLjUCAWDH6trDPiXBP1DxfKyuqwbW6LnCmaCMZCduzTFBV7ya6YpygDUktZvmm5tPAyUbpqCrFHGP6nF5zpraL9",
  "key2": "Y7JEHNeWMAJN4Fa8JrGYZEKx5R5XSiohemJwmoN1jAgdT1CMnCy8Z7uZZkHHb52f5vUHA9J4YTeM7mQMJwo39bV",
  "key3": "4U9fPnapkpBnzzAZgFNDbwo946SkkVRJWgDx3PkMcVq3pxL4Cqqvi1UGzvV1Xq345ZZVFqnv8R1i6b2rGBD7SrRg",
  "key4": "2oMmtDaERH77nCqZjb8c13KWKoss25LayuvDc4srjFiPfYZ9qYjUX11dm8htf24gA5VNLG4L7nFhL3AdE6CjgDrV",
  "key5": "2YFo1v1GENmNH4QZHivNR46TmaT8N38ZvctRqkbz8oGpwzp31Qn2N1u1t2cCpJCYygQCosTwQLfg5xCSj8MPsnEF",
  "key6": "5nQhEsDXQyp2HAoyEwKpGKogt5aDjJS5JAGJpNDbAatcCyy47az4FuFweLcYNz9ZZP9JoRWinsbkT5CeLYippcfD",
  "key7": "4eDF1WgktEpPzB4gyUAbBXCPvnKnByBitgYfQSuEGkGcRK9Gs9HjJJf6hMcZxsubc6osfeo2jBWWXr3DVfb7zxB",
  "key8": "HscnTZQgtXJqhtnNd42iZEDUvRZWKBcGLFYpfTF2n4Kdp5JvWSGDMHRUHkp5fYU136km2XuxLKafD41zRwFQFen",
  "key9": "2pfeoRBVLeveAKiofdgwhoKg9iqYAmU3tNxTrAxavbnzRw4kVXXT5915yq4e1mEdFnNJHtqP9yddqy1HGU2enVa7",
  "key10": "5FEy6gLCXsfDgDtavLDNTT7hy5mJoUJXBbe9FNVzHeWe5fFUMKQ2GViaDc7aaciPcyvTPX1TnvkLxBQszKGsEnTk",
  "key11": "3mMMxusv11WYBbFk6pKjC8cCYxx1Xpem9WPP1U8YzrCJF6RXSp1DbkbNSMVWiNmsVt2Avu1KutpvbbPqWS6CHqE1",
  "key12": "2D9DmkJDnSQYmr7H8QjCk4t8Lf6xkPEZng554NbKBK1aCGhuZ7jzYLhq5rNjsFb3oH6UiNsdR6dpxu1G8rqNyojv",
  "key13": "LzKbz1PtSRjEv38teXmHuF2wDRBG9nQqD5ps8BjYWoWDbNYTbS162b5dgLKcz8mgmSyMvCbWohKGfqXu62M9vVg",
  "key14": "2efuXESJmW2Z6adsWQxW89MzZug8nLsXWF5umgTB8z6dpeda4DF5baW1uf3kHyyJhSgh6H5DpRKyqRoKkSyH1meD",
  "key15": "2B6sKK9sAQ5WDcMY3dcpzQEHYxVjQT8uLV2zPfdjG4ntMrEp1QcgHSWJ3pY5PtkL8skiMX6U8Y2Got9VYPR5eJn1",
  "key16": "4jkSeDrGUnpUDgisPE2KYF4kqD9bGUQ6BKyRrB58n8ypxFnSAgXkUsorFX4ZmZCdJDXRpf5jiJp59fqFX445SUks",
  "key17": "4oVoQ7mnicyzvzAxMppwz8buzdpGEC79cMcbzcjeZSkuKsxsZiGtLW5zSzF9UanHr2LLPLheX8z1ewuXphdG9by7",
  "key18": "47J1ut3Pa8SAzXLZ8kxa5SJ2N29vLweUfuAbii6eVxnMx8ipJQvy6guLiq67Y14vBK6qsWKcbeUkwcPpy869pt4Y",
  "key19": "5b4Vv4thfNfYRHsdea8rTQAwZmoSqabY7Dw3SYsa31RJBn5qVm7MTjTKTpbYhCmny9mT17vkFr9DNFwKCNHVZkwz",
  "key20": "2rpztE9nbfCCtwC7Dt6eQEFHwMVg2pA8X61TkXuBHhpuTEuiXBofyMR7MZuC5AyHKYHZfmybiT3uaH7i3CihxAdH",
  "key21": "2uppN5pJ838b8zn5pCBCMsL4wreVQcHBihTXDgL4RERhN17bHHWCrwiuW7aWLAZfW7QFAGvdC63WaScNr1K6Xqi7",
  "key22": "H8P9TfcVm2Y4neknkruNEuqjUZMHQ8jZoN9BGG64x3GTcCyk77rAQsqfLQ4QUGa8G4V9dGeztVkP1FUALuNNq6z",
  "key23": "26uG1P4r7CegokzvQqrKw2NU3AfJ2rthUuDeSfJex28QmDzGqdhdkwWbvHJj5PLVQARh4hdapCM8Hw5yEJXznQUM",
  "key24": "4ew9PjMiW9uEoSu6uTuDejdV8btTN3L8ZMf8uUZwy6SPukRDQe8DnVi4752D3WFomrN1Te3kDJh5tp1oP5s1CXLa",
  "key25": "5kzGkDjaWtS47rQZJHwoFE3S96tD5N93Eh6qeRg14YzJzkSxZqXjhXReuQYSxLQme2VE76avmwhUG2q5CRwADrge",
  "key26": "51khsL3pRxJKoNdnPN57BwHCzYJGziBGVbXE4ScWkocd47QvFGxUbXfzu7WLiDnqgSkPz3CqLDAQJ6HomU5KN5VW",
  "key27": "4vwTmdwt8BsUmhegc1xCYYjmvrvf8RvGhhL8rSwaukxH9JEJLC7msqggiqiCBTFVV44MHVhTxuzVatBs7bHCBj3f",
  "key28": "4qLN9zZeB4yM6WTWBow43mY8Bfcdrbfc3H6JrKhsdYF9nLwa1bPQ3D9F75WcA5hUpDsgH7HusFiowUTyFAUgtnwa",
  "key29": "hRAR7mU8uzHrknAiS5GgmGp6GHj2Q7HSJzY36Jds4DNU3qpLKi6hF9ziY9Xf3nUzXk1aHthZW5bgDkwxhyQkCqV",
  "key30": "48zhduSbTMSt3zzwsQxnCmCrLuGQksWGZjiEcCNGzCXYPbsHR3nzTwYgE6NsimtP8Q5uYesp4F1A9B373RX131Mr"
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
