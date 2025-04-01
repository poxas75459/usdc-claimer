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
    "42EKxqWSi8TqAHq8WZ19WwnWwGTYHMi3E7L9mnroWG5HyRyxVZjNJbXd2AfYgC6BiMvzvjLrCwBVWgRsAMdNsd5D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "462yxtQJ5mknt4UUaJDAqKiFAANVgKha6carTbxXfauhRj5gwHdbPk69CZqGM2GnkkwBm5MrtjC7vL6L3PjFMyKc",
  "key1": "2K4Y1L4v8HJ8zPP7DJJJm3WUQpZG9RHVn416duD4L2SGXt62u7fQFiz9gEMzxeFjebefTC6Cnw3W7sfE229qqQnv",
  "key2": "2FoWm9K9Cf6AkR3jJLZi64C3RZgBryJprarQ8MqZ4rqXaRcvy4gSxWcKqMGF6VGfjKHtSNQKTgN6MSVA7FZKhxGw",
  "key3": "5x5tMphfkLuUfDnPxcRmada7ZmYiNReye2WXrgynZoP5Qigf6jHEXd3bH6pFnZJh7RPhZj1Qs5Sw8bSNsKpfrwwJ",
  "key4": "43y11mm49p6LUxgQxkohczQkYaGX965EocPrgxyinYLLUti6G2WQtrATZ7phKLtQGRsomSmyBnd5AagxmTbcJsnn",
  "key5": "3oNtRXfG6EbUCcLwmrXMnKf3VaoXpY8bE95VVgKDLfq4gcJ1i3Jx4mkxVjnZS6BfZ4GNDNRbsaHsVFTKeYzgAdUY",
  "key6": "5cPVfnoGV78WAJs9az1aJdtNeSpj1HYbmqGJxb7VBg3rJZtNM3DJbvUE3f4DCQ68iuFKmtNeJjwKNyD6ec2UMVPV",
  "key7": "wirvzFbG3aYFRTbTEgVpaUoCfpxvbruo2LnNo51eFyyQFNAbrmFsKGmcHB31z8Rf4KvqqdWaw6MvGdXy6YPyVAg",
  "key8": "2XdLUT1DwG9aeZjFxkvzZkQvkUct87bw9Tr5WVTiLpciy4Upd1HNv7rvYhzrfnpvSaG7LQUYGkezXVz46dsmwbr",
  "key9": "23TxekRkf2tnZv1xL3iEdsgGQvEBsmAmBkRnAK4Kkt5kzDDM64GaSNBSKTMsrm5MSFWntqXdZZyg7Arr5Leh1Rx9",
  "key10": "o7jz6BcUiFDGVFXEjx1BPSHPmNgjvjj7NyBQAsMYZ74VXNFVrAhWiztzEQydFZJsQwkN62Q9sxCN9fSWTpApgES",
  "key11": "5Ba3o8zB8UT1Kb9CtYJWzcxycMByAa4A6iAu4y447Hnz6L64LkHgcvyvQb5VBsUZgCT2KNfrVdr193CDxipQfrdR",
  "key12": "3mwyP97xg5o5bFSsyBbrgywcwA26kKoTFFhaq4GzWGmVEUzWWRewUR6KZMLBetogNGGusvLggCk3qgF6EYwbhTU2",
  "key13": "6Rq58UQhVw62kCfBLfqXpi6Uupg3xdqHkkamDXePW5As9KZn1a3goJR8SBudGTzoE7PuRrM2youGbxptTR92XrM",
  "key14": "Nfc2q49dxiY6diHd9cLHiCQUYgkeFdTxqHY6b8cSWrejRWC5pXQDHMA493gH4xKLwueyLLTexqcXucvgrYzgRq8",
  "key15": "54nxLi2K7pFjy1u9tenbpGKz9ysc5QWt6fceTSMFfwb3tseXvEkgWn6Py6YqW1Gt1XjRD7ZtbyGzfrFbrvFZPUQY",
  "key16": "5H6mnvejLTN6thc7gyjZ1Tyn8u15BF3srm8QpaF9mFMvNtVsnangKw9EUEaR67iD4Brw8VG3ngcMHLAnZVi2r5ME",
  "key17": "33CutquiSqq9BZXbn4XwKFt6ir3oRR9j3vCmHebzvSq21bKA2Vh1pRAKnsrjd5gzpMjN7JQeC29AbpkYMqRGXirm",
  "key18": "o5YY2dccHVR7y6egXbqqKLZPRBxsKJ8NZYj2rYsFS1CVV2H5kb3BjFNcdvTbG3BZuWsTRKTpELJnukSNne61pNz",
  "key19": "31dbAVYoySSDdEMcR1LuKVuG4ME4xJED2545gsFNrrJm58wEpzuz5mhpfyynZbWJrT1gy2NaFg7smSWVPzvM5Gtf",
  "key20": "4gjoK8dGAPHHJtTpDPfvaJuFUBaH63dLBkBZHFBVtnvZQ8zCYdxRTPz6FaKFAYn6VtuJkkLbkfVFovQvpN6p8qnT",
  "key21": "5mBSER9Yjq3Thv5XSJ7xVVZiK7cwyj5kDHzeXq7Kh9mZ1o262d9FYD5v78ebrnUUVchcRXqxA3QurV6Et2KnABiF",
  "key22": "5RQ8bKjZNeshpYNE88tvh1uu9gVkoGPNymvFQLDmSkvjqpzrwGF3gpncWMuhc4jAFquqfDus9h1wwAHHjbf6Bcjh",
  "key23": "2GLd1JhfrLiREiwuGwp1DRq9RjT4EgjHgkfytq5FPpSoN782PdbX4smm4meMQ8pN6v57nsHRjd2LkGtvReRav2FZ",
  "key24": "ix34ybDYenyDQoyGrEgSLUysvivnQpEEkbFvhZufnwkjf3HNPSawpdWfLNdZQfeCksWduUwngug6SXutAUx1EZt",
  "key25": "4rU75jMajL19KX2dn72UQD8eUCE1qEMJritVYBpi36paiC9q5LEHxEYiw73NZD1aqTR37YH9qqGeGPLwQ98jUMpC",
  "key26": "XcAJt2Y6Pn5dUnhk2wRVu7yUTaZsL49fXpqSXfSLhGdmGdgSyM7oLrcUTjDP8qQB1dG54HbKvPTNJWgz8Cn1Tx6"
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
