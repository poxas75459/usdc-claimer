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
    "5dAH4AhkpjKhtXgQoV3jqcaAx62FMc6wP3JxpicZLhuzdbcW47RqnYHPEhhkrdQo3axv4VbfuzSMkHgYYUd2U8h3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PTvfDk62NDxA27Kbg4KKZXEboorvj8BES91DzgYvbxJVnSUaETBAAPqZMULquZswDdycLgwjfcvCHAG5ncR8MZd",
  "key1": "5z2bJ8f3TkZ5C9VxanAdf4t8YqsT38Ucg2QMiFrW2aXKkP3jeFA6gPVhaczWdeVUcCbjZmTHTu65vV7xZ2UmpgwC",
  "key2": "51w3suC7yA41DewTdg8kXS9QNQVe5wBSeaECvAucvymNyxb1AYPncqgBjiufZgprgFMehCW1q6D7s8cooZ6Tjm53",
  "key3": "3qMwB5ZXKpj8B6wgrKtrU1P5spMW81NUKGD8b4VXRqqgdq89JJzpNzSUB2GXXcuqkcpQYvo7RLK23Uv5f1rN4GXj",
  "key4": "5y2GuUcvj5V6dHEVpEPtZo7VC4utb9h5tXmy5qmJa2pgHkNGzdGDC4jLqr3dz8kGkMJsq4DkCWeeqPkZTfQKBKof",
  "key5": "2c1UL5gjktyCyYi2rQfbFf9Z3WjPdhsStzQZJW3AVSrz2pLKZcnknQt9igjSaQjwVYKqJ2UkXZRKZrkrquLAyY7T",
  "key6": "4w3piFzL6ivViGPfgURP89KMThNfKgFGVkaNSsNBTcqemYWN7uiwLCSAYVKtoWwqsBFP7xuDGzHBQwy7s6fbb9rG",
  "key7": "388GwJP6ccht7kgMjurDkadTtB1spJiz562SBpw1A2W1boVGtB1szZSomD3NrrahowPaAmzyG3ju1Xsfsrcf8HLY",
  "key8": "4JR98uL7AZVRFPfL5JdTjXodRCFrtu1zmBNKTAg2R88noDKNGwh4udJuUdyFjjQLtcUeV4cjARt6T2TYYjy5BQzu",
  "key9": "3yjKxCWfw23DvepjjLHtEFenJ3hVVARqiic2QmLz1L7zM5NUzmvfjJeM9Jsmor4zmbJMbnkzvYw3cPLUaafgBB7c",
  "key10": "4pcePjy4JDVJ3q4rq3aUrkTgCBMx2GUDPWT3GCubmkg4Xr4oftvqH5psgxnueBmWWPRzrSTyqmotFNAzsbCt9arw",
  "key11": "1LTRLCr2Ukf6u33g4B4CPf8nM9mWxw6s9kVcGorpqxJbnXTscRDRNxP1js3QtNvxXTaSaivEYjLXzRDeR5mWbNx",
  "key12": "4nFsNTYKn7pMdAxi9xx3hJhx7jc2J4Zi2v7q3GE21GkVni2yhaF1p3osCodW6XN64bgixWVPqLPSUroYuij18FZH",
  "key13": "45reAEmQfVGvw3w3oBJSd2DUeokgJphkqRH6Z4DbkQEiMajvTkeERNFpCpFaPAkNhJuKfSY8vfAD2YrDS2dcXifJ",
  "key14": "2KutykzG5KynGyZd7C9hd77qXo7SgP56LtLLfp6wVa3N2fkp36VCvYAF5pYPQwELD56YtjTu53DviYcrKqBZY3HT",
  "key15": "3hD19H6h9XhweQmgTCqdM2tLy3BQYEfybQwkPKRhwRr3WrP16zMJNPHphDC26FauDvAQW7qW1CgCM2ZRMkhWtugH",
  "key16": "3saNszJh9F5GaxkMzcrwLMWQdqNTZZTcFFNBJPntjePM11H11YrVnnaFg9ogUoLQ7xrTRPRUn5zSvuKDo42YavWx",
  "key17": "2f6MwhERLPjZC3xUqf2vD1stZmBJw2a9TGLTf3JdYFFebftrXrAdK9ftnWth2JU8iLNcWu1LBwN68xsTZULoJnGn",
  "key18": "5SH8ugzi2hZukusMhFKN6wofhf1oXk1zi5FSLrgobWAmtMnQpJjCY7UcYTFT4x2Jf2BWJ6Ypk55pTunZq8sy6ps1",
  "key19": "2eaBjTzcfQGZoKRHnUNFr4utJcsqt7vBWpehBLc18tFyMuWTDmKZuo91azxU6MZywnn3bm5mHFgkbcycdFpwn21q",
  "key20": "5vA9iu6YstpEZJ8EPScZQD6chMYR6WU6Catbf546WLPzHVyaT3k7xpQZ3ACGJVJnMZGP8fLah6WMi8TqQiZ1psLX",
  "key21": "5ZfVdrgMpUZ4KZAJaYTxPJRdk2EWBQQh82AujGW1z2sPrit6MXfZXgpNfy7PvbSMxfkPJBEq6Bp7UK55JpWVe2rv",
  "key22": "2dhnVWTQHkujpRgWgUcWK2qDTkCFB18tHrLqseYKCsZVp4mXiVGQr2vQByDPaqkSdNbmXCvj1oxaGgtkgrzQZeU",
  "key23": "3dDsCtTCpc56J7BSLXCsZPwitZv54DYoky38TmniWLgW4gLUfkK63ANqZA1bn9RZNkjHPEheXYACGbKBzNo8PfAD",
  "key24": "Cq7r1NUvVitumKX1EfyCjKHPSbbHEpbruiL1xpBemFpCKpHUgCWd2wKjKt6EdyZsunvMa4Zy5VZGBa7QtMm75VD"
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
