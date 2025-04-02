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
    "e2mrFnJGEWcbqbarqYpNAFyo3R8kcfaG9FfYnPv2Rv251LhxuETorsxkR2VZcFSqvGPyBGRk84HHXNJiiGo3zZ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o75jtBKu7fmNixfJiSkUYzEPqmCECWjBuMhwGLxP95p57uY7ceuj6hvYFpBWbqxjLuwG6eSHbFq89wuEPQx2HwW",
  "key1": "29LPQJZpEZzyu5ADMXQ14dQUSWG838rj8x1JWwyViZb6WPJUtBD3AuGRKtRxnqeRxUkdK28mZKLimsP5CTQ56ZRQ",
  "key2": "4tfg5gVjLTRJXxV7xeWBGAoTWubh45zFywvSx9vZheQobKGXDvF2QDsZPRwVZ1gSZrc71gfcJ5oGTSYmQ19jaz6m",
  "key3": "5oPWMXXqKgGWcaUDBKGdwCrtLFvXqH5WpacppEqtimkAJMxSCyrbFjPk9BMpPuLN8TwMs2mRKeaS3WoCMsEL4Ypw",
  "key4": "2Y94nawbdzz8obD6zbr5NeMgE5owZb673Lm51bccLaPw58NdyV3bsTmmcAiQopeu7H3MWk7xtN66udHGnUVFJWL8",
  "key5": "4r8sd7SQPLMny2xFeCneznfq8PtA7RsQCt4MEyuVnzhDMRg6Jk6ixAWcapq29sioT4nHueTxY19EbazRe6yT9GS3",
  "key6": "4H6sYd2chxG4ofEShs3w8ZztgSGECoEN8LLVEB6YqeoB7vZeRjSrARWao2RjbPY4msB1rrHLNFcCLc5ccnWzULEb",
  "key7": "3Kh1pjxWzCE9qWeDGhXSh4ZSKqgMh153koDoc7YUqiabCNHkpZ9GKPFdzanSPa9xmjEJiGAKq2AaAWaVBDKonW7i",
  "key8": "21yQCLEiJLgKYHGsYRe5HcxVYEArTaYCt1vdX8QpwoQyC16wkRMQDXQy4v5kaUFuhiyVFtyKNWkyfXrUaiA2DaGq",
  "key9": "4Jn5y385MLsgnWrVT91fUxh3AxBVoEPFJBgaAecvQLWxtLLbVy3fQ4AivWd8s4CgyNuPJaUfM9MCzWAEizoYuxzw",
  "key10": "3TNSDKXwDeLt1pc8mgTkAsGqzaQpZr9hH5pYErtuQ9u1aKQ4f5W29RqpmvB9Py3Cn7SKkT6j3pEbcbwq5iGVyq5N",
  "key11": "2u4AytDi6sq1edNkGzZfBQRZy4XpdXBr9FmVnsW23FfXyQ2aaKMPihXa1rkrLwvuC5BvHhQo3scfHGGU77rEJf8E",
  "key12": "2XdqJ7Dedutk9YQeB1RQR6gxmgYTvymLUH8TwJ6WBbfKgrQ15jvHhPHPiWf2b3Y7r5guTfPSDkHGbv3Sqxz13UbX",
  "key13": "3BzMUY3ik44AQAMV4zH6qcsnLe8oMTtGW1a8WqtdYFqW6Jy4SMcYcdzHZEzq5vXABKRe6zoXBrVWLzWWgD59eGAC",
  "key14": "3vwPqEhVRXfhFLDfbGHctoRP393eyobGn4fiPrBfsUYX3PyLMmQNPmdsR6WM446E3oUT4sCXZ6LgBqM1vX9D1frm",
  "key15": "2TbeZX4RVmVH28kJwyBcK9rGT4nt4EKaMhmWsyFV5AfWHCZsju5PJh6tfDkvYY2xpAykJmbqbb1jaGk6pBirbsuw",
  "key16": "3gWwSHx5rzy8nAsLFxqRRocDH6kpBxiHZHVaJZRuycbEbupeSrhqobqmTVcx9kjhPpN5KYezF43d2nEzAfMLNdw",
  "key17": "3mURrm1dx4i9ZmDqdkguK1QESoUS95JawKxGmAbmpVRkAQMqWx6p9GPuzKZceFuEPWg4NwtXokZ7w2FEHg2czYAM",
  "key18": "4gtgD9Xyia7MdhnuxHNg4R2FwSmiz8MDCfwFS5mTAQ24WsdYBgod9PNCC2vV2Ycnfa9xknwbiyXJaacwdPQ4FBzV",
  "key19": "2LcQRHVLsyWFeLUNQZTM8fTfG2XXDE6ZEejz1uGsdfSPgQE3dNa5ETkQAfnf628g3oiEfww6Sy8NfJnw5nEyQW9G",
  "key20": "FnPLxARJk3n86DtLz6Jhqsrgcuv2BAEd4rpnGHPypjRHo5zuq5UCuPgFExgQG3VmifCDU2SmfK8uTBvS9LL2Lc1",
  "key21": "5Cp1btTsfFDwZQz5n3XpmRVVwi1hDbFK5qqbXk2S2XrPAZCdKuLH8StsB81Fp1qzgFqBxUhhYio8DTiKu6wHo2NC",
  "key22": "5kRvTCUbkEBuMyziPHZzfCxAu2Wabm7abxFZQG97MiUbk6seX2dDrgav6cnv67kPGRtSCXYaUthD89XCzXFNSHdQ",
  "key23": "6CXAFUaaBfwaNiVdJKi6sJ9b3k5Xc3As9fM3NT1UTqdhYsSVBBo24vM5eR8MKVbPXjuPcBTzpCGRKm7WtTFhd4Z",
  "key24": "4gYDkeaLRFHp3bc4FtNrzyhgqN4qe5vzizKhEBtFp66v27AwjN1tAmqxYkbiY5GQHVTmi7Mz3CWoQjVqjsbEXm42",
  "key25": "46Lg125C4uE3ZC7ssZUjNVXDKNFD87NTuHyum3ip2j8Luru9ZVtkzv74aoJ7anBnz4sTKU9zmkzhdccw6o8GFWow"
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
