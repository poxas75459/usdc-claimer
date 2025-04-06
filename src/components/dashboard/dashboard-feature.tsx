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
    "39oQuRwm37vKYULUFhuy8Ffo4mYVv1uDkBzQtnXDggJfiwjK5LodmQfeDCRBsTBHBZAmeMxET2Dwm1fUNKNJdCD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RqxDN1nFEvFXnxVuXrpuaAnLtEBNFcZMyu6fwzpTRfvhQj9Uqsy1DymtGP4UjrDZzGTLA9WJyF7qSF9pRMxLsVk",
  "key1": "4p1Dd19xrYusehq1uwxFLwsSkVjwZrSmBBfCrfze5JuM2e5T4t644wBqjSGQbuhhHSQe4tM73KqQUwp13X75wUkA",
  "key2": "n61L56EAFhH1o7oxMZRHJUySdgBruf3kYB5bzXVTAq8Dpo7uTWiA2WpnuGYDvi4w4br2hMtCK9ic9FSCQjp4p67",
  "key3": "61pR4KVC7rU2fXvEPRgV4Fdp6bu8atELAckMe2ydgqN41mHgWemnooVTGFMRCgZXrTvUVi1GFcVfSVP2mQ5K51yt",
  "key4": "5khLhk4jCUPrgh81QQoVGrCYJ49NPQH6TPd9J9FAMGxjiFLn6D13ddVjHr711RgdW1oRqazxrqTZQ2GrefHKMHsf",
  "key5": "5XeeoNNmaiQhkTRPH7NPS7KYfcKEpqkksqaPLBRAqUu1jwgsEUgNvGQNRdV97oNc2xJH5EyJbZ8FSDmL14bkJxs6",
  "key6": "3VR9T4yhYHAci1RLjjvPnTEFfWmEeJxvZsTFimmjanUtxdGbGbfHkQYbkGbxwLi9PcdP8cJ48EctcqYVrSTG3mNg",
  "key7": "5iukzPHRAQroypT2tMF4pJr7e2tiFAj6prqBs6dykGqHmYoRPs3PRJq9XxujUFfxB77DEZsQcHY7c6ArNPHQD7zG",
  "key8": "65SkvqD7wZkC43qnqYaUjps9sAsX163XTdAdr1q9GCZA8cTxzDAeoGzuJN3b66nE95tJMihh5QHvHKYG7CaFihKA",
  "key9": "2iu3gEP8Mt3NbsTZCz1iZ1JmocTHMP82SZTzYTs69WpTGuw21ucUAMxE97Lqju6esvaUU1qRrKDCBUS44EW5VaZX",
  "key10": "2hpGq5cND8chgbWcYvNyxhEnuHrs4x3nC1tPRAhstpCNDBFzTVNRuVFMFAGejCPKP1yusQ67pjmyuQFaCKfSEuh8",
  "key11": "31fShLJeDdjnXZ8UDbUoLNPjaWvVb7m4XX4s2ZZ5pC5KRBCeCe71m9wKaXNBkXxgoCPXGYkcjfp5HMczP8S1zrA5",
  "key12": "34pzYb6dVjmiPnCXhhXC4SXmk5AZEHvYaBJKRBQ3PcypX2B9FdbT5Kga8GxzvRMBe61ahP1V6hJvyL1zhdH1fgNu",
  "key13": "2Qf7WJpvbSK5tCXtbqw5kN4WmA31UNtU1FbwR2C2PFoWJMqvvcXBAxYnMRx6FinaPwQrdQXiBYQvrwWqWfnbmvcs",
  "key14": "3n8f2Ym315iJS6ETeF4VR9jwbHiRXdGcbzjRKohVjRR5oBqcKq1Yv3KpsazwddZXZ1C7A4oCVuuwoqeF8GoNwsQG",
  "key15": "4gxQHXe6zySk31BatvFJCypLVifkDo8p4N259jrwwPiseoDoGrUkh9TH6WXnGeNnb5mdcJ2w5eUudcqY6SGLD7mw",
  "key16": "RRDrzcCKBrmTDoCYpBh8TkrLhQj2C1t6UuiHWNDJw55tURBCsk5g3mAh5jqVidcpcfPqw1LQ5ZGNQ8JiqDsJe31",
  "key17": "4iGbPoA1aAcNte8QDPGGFtPTD4i8jnKLoMiksvUFnzZ4jKmkTyd6LPtpBbUHUwf8rVr9T5jrfLY1DMZLhL41AtYQ",
  "key18": "2ZXTxicjnqpojyQAMghiY6hwvC26WwuJF5p6zJvzxEcGsirWFDmXUANxh9sZg9WAHnXfPqoq4sRzwR7g7gez2e1g",
  "key19": "3KPNGecAboS83tSghPfLdXXaZM7AJA2nYseTEKmbdxFnRgJKmE84qa64QH66V8eXoNMTQybZ8qzLkJsxxMxNcfa7",
  "key20": "2LTerFE9MSQUpUC283UZRBzGC4hMgxmXDJYyTwXwxGYLukKFh7ehuX69K2p6phv2gm3X4JuT5LP76uq29uWikneV",
  "key21": "2JKHKMA5QBweUvEbvgX9apxqxyrtkPzEQtBEPYhGDqpW1YY9mmzP6QbZbFHFK3rxhZTYf83d7MsT7Xnsvgam8jpj",
  "key22": "4Wm9eiipsN3yxDo6EANU1kAzJVa3fPnaFiNX8xDqpqSzzQrej2WbRNh3sWGZ43dpjESrh8FmToj1h9WGUPhyskeP",
  "key23": "3d6JdfwzJrz1BUtEVDTKNiQ2QexENdqcZnHwkMUefqePBd9rAh76kch6RVVrXF8JULCisoxXtmm6AQm1RE4X5AoD",
  "key24": "9qEstergKuX9X6p1Q7AN6343z8Qv5hoGCzNWyP94r8nhJ773Vfw7UiBUAN2Dn4QBXRaPZndDyctzuVoTmAdvYt2",
  "key25": "4qL3wQFqndgj1evtdaLy92GW7MtfpLa2PFXhwaoXaYYp81sq7F5hALuHPxVpEpp5WEfuRkJ9Qe4KM13KrKu4QXR1",
  "key26": "5duSC9aB4jntFHqopu4YpFKvdXPQVCTSF2dJUgULejLoZjY2iCCCP3yDWJqLV4WcCbtL7cJDcFWpitpCU9L6FxMh"
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
