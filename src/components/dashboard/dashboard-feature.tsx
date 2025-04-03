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
    "5wSiGEf5ztbC3De6m6y9gvVLwAYQYqU8bFuJJx32yqwug9QR3hvc1sDbPsoSqJ19CmCwHeJAcJwKj9eD9ru1t6S3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CNmS9PeY2V7FN3rGRXdYwXaWesdDsbeijfTCfG35kQD4F35CMeHcHfnoYx15qjxa1EdpEd8pLVv463Eo1h8KEFq",
  "key1": "3sTZW4npEvJ58zadAvdQxYdYnDcqNZ4aSgoEaRAytqYoXLgtkVweoMYZfF5hW8p5dnHNPBnQp9mBsSug8CMCjqsE",
  "key2": "4NS14eMCktQK5GzR2DSszMtUjRmyDivnMbKKhypBJ5tzH1umdqfjmhUUx8pzkXMipbZRCDFoc89uzsuFuEMavzCN",
  "key3": "51JUcvM4vRBApYhrHrQEhS2F375TQDZgbQmN4z75rahBVvMK3UWvPyW7Z62k7N9LAvuDYtpjBAehohAZ8xZu82FE",
  "key4": "2UeipFwBkzgB9nGrDKVvgtEqCG4y9C7TuvAoYCen3nErQafaaDxwHzr7fg4Gb9gchpT5Py9wwAKGTsMz92G3sNz9",
  "key5": "4dBbKH7v9iy8iE9FQv1sWpcn8xiNTuxnQAqSaVBN8Y7ZZKS1spsWAFnB9khYgBzCtwD2gKQ5XR2KLT8rhXuxpVhV",
  "key6": "4HewjgLNCP4ZwjHsgRRgPqUWuYpo4MHPEXQx96RgwkfUuYp8WRQ9r8uAC49ES3Y7UKnF7nsax9Ejr2EGUWBK5mRK",
  "key7": "4B7Yeav2yapRYLdTmvveRYkk7obqeqAzaeadGDAzkmEJ4qow2Y1DUgdFjXk8FehuYQagbSZcvtigAV16sQbW4Dwa",
  "key8": "3uv5weAGug39iqbnCuKktoYPBJ4NHsCFEK11LPtsLdfLpACeWLYEEwaeGafWkctxFDeL6mUP8R3ht984sZVU8UwG",
  "key9": "482L6T3gLB5NxX8PghoUTYQhYiiZz7fYVwAB1k2Ndy7JaRYMsCJ5C8UzNmZf6KSrVs26LbeAUFrVHGg1GkVEZh4V",
  "key10": "5Pv8ndtSsKZ6V97HbZNZ1gd9Ek6kb8EuD6NLhHtNEwvx4ATtptzmKBo4wgBdwnQrqCG231UMVPrEyK5DLuDhJTcN",
  "key11": "iLCZBTBC31ZZuv1f6v1SPm7DAtCKPYpZZNvYSh5VkiqXNsTUPZRXusNA3mfFVfX2bQVV6g5jhhwwAGyzW9ae8cq",
  "key12": "3RD3n51jwURKLXaLg32y6RuiLDfjoYkqYrYD4vG1MWPLtKgwNx3hqc8sywL2DCt24Q4NVrGgaPr1wXoXaALFYE3x",
  "key13": "osSRuqfz6k881ujPADBi4oUQ6348m42Yu6kyDL7RuvDGGsaNCQ5ba4P5nHYJKLjNnfqbDdyNAKpi3FULSDjvVhG",
  "key14": "4wJJTfU7fYcrJy3Mx3QjY3RcXdGcBd7tHtuXnszjTdTNVjMNMZrXbtHX5niM57XCoQdBopgATZFPe16eDEbCcoE5",
  "key15": "2pk2ZgvsyGSFtRAFCfQWyBTJAP1N5RsKaHhhvJ4x7e4bfMHZ2Mdrr8qoz1SUcM8w4vLAadaS3dF1ofwBF8TycCbe",
  "key16": "5Mm5hk2ZPiz84m1UTUm69tUMDAy8jrdDe7Zoc3ymCViHyTymvzdHWyVRXGGsKVeAZNiYSVBDca9rT5sT18ZyNecj",
  "key17": "5rW15WCJhw49Q8hubbcnf3hYECyYJTYANGpCwnZHG4uYwT68QmiH3L8EFUt64WgfZYduyAQmGSSqfzwHeTDp72A9",
  "key18": "5k4p3FmhX7CCZ7nEr9jQHkUetH8KEqqhbZ9CRi2CwduiCrS8fq3ZuUk5k6DPZUSWkFT2Mi7NZ9DJ8oi1KmXJddr9",
  "key19": "iWoPdvqE4Jzd4cWqdz9K77rtw5VrabZxyM9QPcsUT9ezCCTSksLnnrdwvcUTtE4kabJQGpAGx1ehz8h6XFL51Q3",
  "key20": "5DKj5tcLkvWL3J74qsiKqHHDzB2CJzFQreksydDrftgs51qa6AGb6oJCdHZ6wXoN2zVB6FhHmXbi3AV9nakmdh8X",
  "key21": "4WCVuzppeWubs61HHFu7dLBmCSn3fAhhdDWwgqJXxrqD4qUYKnrGa51aoLYJo8q6kW5oUnwdCwqqVAsmUzaiH84W",
  "key22": "56GAreJnR3jmupAzyX8zsUE11F8dsGGZyoPn4ZRVP3BFQRSGswBx4jFhgNhKorHTw9Xk6VHwLcwR22N5vpi8WfMk",
  "key23": "3Wr6Rdp4nsQmCBFjKBDEmiiti6MXK55LLuHSeJcaohN4nHckZ3V4mCHWiPqBE2x65JVcv79WxvJK9XSxj9RmvLZd",
  "key24": "3fPY9zfkqH7qAfLTRz4KWpaGpsdCBY61Qm8SdgBcDrTQN9rWDiukdg4YzJRpA4RJ62x8jBaqMD6C6TVWL5yVXKMg",
  "key25": "3r75fWxRkCc6u4MnvDN7dKUuvyKTxWQcNYRhgnccnmkBG46L8no9JcnXTUgWn6qe4cCzrBi7ZXuo44nDznjn4MSq"
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
