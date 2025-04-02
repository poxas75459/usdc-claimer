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
    "2AQEbY8hnnq5cHVo4uFHZqUxroCZDF6DFPM9wUuMTwVoTm1gHGXu4JHsPo3wpL4Yqec392Tpdvg7oecNsBTfFPkH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nCq2REqzB3AnHFFtK4bFApjrD9wsgFjz1ped1zfoFKG3WW7hKDLnHn8THQxmCabbwWu2GzCTr6ixngbpFh4xxxS",
  "key1": "4mAqnsrZguHWPVLb1gPrACa8XsW5NLfmFWkeB1Xoca15Jd5obnDyk2xYJW9K44a3sgpsEd1s2CjXUGKy1TtdyuTV",
  "key2": "49P3RsikhZNTcJShQAZcSv39Du7tJVeY8m8gBwQu8ouFEgfCyF7vox62T23uvCvwfNUF2poykquNYK6Wn9Yj5R1J",
  "key3": "oGeadRqfwSFmTDEZTiTjb6SBReAs3jCmiH9GEM89zNYBDkmuFFrpbsSZ9Ks8kRpuaBrKvAedXsLJuxqaVo6raFF",
  "key4": "4Yq5wCniS3TJAY1qt4h8rACkVmVf4FgpWjdv78Gn63G5sXJV9X4vhjwmCAmkinMNKfRUn4M1CA4bNaLeZNeHQbUo",
  "key5": "5ippkcQ2Ffki4Ts2Q8zTN7SyvBrcvgNEmNAi43ziuGnQnGCBDaR856MSXah2dYyuhgiGgbQmPnrwKq3JwebE1FqQ",
  "key6": "3P73xW5khQhu68V4CnmY63TByUreHrfGvKf1iNTfZFYQc5GrA6K3RHZ1aVn5m5dgFP7kK8V6D9DvZT4AyDFQEMYK",
  "key7": "3GuLdWr24kTxqGZwSoANHdtXgGGFuQb2dG6m2qaUffoNXyhodFDp1HaD9wtCnoCzcgnTTVHXvXAbQmCLzpWmxi19",
  "key8": "4VKE6VL2MMvZk55H3QRvFTdWsmVTfTowFuzdhRqNG3sqwxMC5MTgGy1Jt8uxWJd6iU6u4Vm63Ut5arhKPgGSXm3a",
  "key9": "2x41Aubmpi51e1M9f8vi2eL7cjgEZdgWQLRmLZ1qtyPp2dWFxqgNnmZjYkoB2MDt6Lyd7ZykQZAVBxPtWVmMcmQe",
  "key10": "35tpfU7Bcs9RQscmeao3H1a8k2vMnteezKCanMuMDdDtNmEjiGH4SbCdp8Y6TiF1LDU5spsgFW1KHPSWWwPYDf3E",
  "key11": "2JXZWv9EsqBJKBTSc8Bq9hV4KDTpvgXT69WtPm8Av2BAEePPBRXu3Ww2TJPs7nMCx3maTddoZFmP8Jy7TP4zXnha",
  "key12": "mbKtHQsjGieNVeNMcZ6rtMhdC1M9xpR9Qzp3xHU2GP5YkmKogtvp7Mmo2PB54k6XxAuF2s6zr4tgosTByYhXwo7",
  "key13": "48hVG4MaLnVMjgH3UkPZ5QMRpTJc7NHynbuNwsRuBWjjfUkqiscjyepHjGt8fsNPVD9fmhjMvCfxbsuEaUH1ek82",
  "key14": "XAn5LzcD9GYJCEpvJjaXPCmWdTCEURQ86E1F54niMQNqC2UZd952byVnMxfCjYWYu9GvGLaBezPyxubZodfE5Uw",
  "key15": "4ZRUtfiQgtKbwPMnZKZdPRgbZnwBpXrLviHxwNf9f9ghuKmtJGSoo2KkVNJCQDw69N1zzj4bx7ZV2Wwhtvgeddvv",
  "key16": "4tpb1h88uiNPZSPWMQqtybKbwWzx6TFMSLLGtphHVny3uFULdbU9UnWf8sNsJ4F1H7okKyTMtE2mD6o3VubZGe5u",
  "key17": "3HpjhPVHkfhyXEpMtwTvWVHEMZRRJDH8y59JrifANvXy9Nc4T99eN6127J4jKwRy56Lwixysp142h7WewuYeA85z",
  "key18": "4gpq8mbqHLsuSaxNVtQ66a82gcdL2Rfr9yhFpbDNVYaXwng8eRaCkY7KQdA6ghVQv8NEHG5gYumRMFPjbdnpHbZr",
  "key19": "47JRcB84tABY39ia8WKCwe1k5q2XTfD7HpfYA18FhPXuRZ76TnbmdZSUFPZsiQ41UpgA3d68DNTzJaGKLGuPD8jM",
  "key20": "3GPxnu4uAf5TvDXWrGWds4tuiGhxNwQYSMEmwTcSxk4vFTMJuRXCjm6uwwFBh4qzzumALPCFN8nRtvq7Sew265Vs",
  "key21": "38qje6hSdzHkCtGuXWjMDvKh5EUWqa6VyiqkSWrvncs6KLMZbXzow99sEeDs3RBy7Gk7zi1dXPWX5heU2Wu1f8qS",
  "key22": "3wNiGc7Vx6SMceno8c6yDFN8w2Gb4koj5HnGjvtq4GVWnRsx7raPExR1jZjNiGK7VFvatwVQd1uu8HmvH7yxn15W",
  "key23": "4SWe5DPeV5dRcLTPZtd2axJQWFo3XTC1gomJXJ6zpTDY4UzFzpCCNN7EiEG34ULGEKf8k1gACxeMv1h8xJzyQLAU",
  "key24": "3CNCdvofD8WiqZGXSipRJ4Z21312f6JChgajKamhfZPYx4GmA5bxvo4xCDnJUYBNMs5y9Qss8uhbv11xEr3H2D9U",
  "key25": "pJVemumTpg8HwWzzQShLjW6EbGzX5TiqbvUgJQKxrmEANwgXXePWpAMGtLpCB1EZKGFoThjKEY6VRPDXckK9R9p",
  "key26": "gM1iaS6w1ev2VrtWdbAdkr4zXaewYgt6cKihAGqT9StMZcLu2kYXdn7wY5uaCgHv9sKsabxaohKzbfv82DKGVWs",
  "key27": "2irPqzgZuJQwuwk3aYQHtVMrbsa61MoT4QFKgcCRDHRn3vqgA9n59Q7yZo18GdCZeLHWKC3G3bXYQv3WCSdU6vTL",
  "key28": "34Y3cHrdLknsyFQe44c59sFQHBXbmnaVf393JYeTxvqvhHRVWkKLn4jZ2c6ZjETQEaehba1N95CKDEBTFiMEBD2W",
  "key29": "3akoBKLFdXNVYNbjvfEQhdKkjbTJPwqkZeHerh9CCVbg89gXEjq4BQ1ca3EjpmkQwfHLuaxGGq8wgYR5CzyTiizd",
  "key30": "5fQCJZxsgbhJDhneg2QBKWMwTVdkLBYEt9P5FfQPAMyWi9hutg2qJCRQqvJHxVa3RCGS5xZ69pyS9CrL6A6kYmzq",
  "key31": "5QD72CeAK1jFfcjXuxxGyCXFfjJ9qbEfKrxaG2MTkqVgBXvqxUcVvHer9rh6TsP4aWgtgEMtBirVfMZ3zJA89ACj"
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
