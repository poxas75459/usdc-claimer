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
    "4f9rV7CVwHSqQTpzkfs6xLsv2JHGGXo1iKRftZGubXSWvL64vp5J8P4HoNAPDwd3yjPEZ7JPAGWqXvNAB1ptKu5s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Em3n9ManyLQ4bTjCfY3jQKTMumA6ZSkx16G5j3d6xzFyazNjARoztQCigvJuNwbHh2aKUc532KEs3V2TaaQ5iWa",
  "key1": "bkCdwdtBFnAgrJDzpH5BZofDiFo6f3hvygyQ96jjLFaxG25t2TMcyQ2EE9hYioAuiTDJGLYG2ABmzNTaRB5FXKB",
  "key2": "jZjKkqpuWq7YyAGatE7Wzv6jXyr2U9xgyzfpa6VQ4uGq8LEraLhi6x7HseDx8mfKUq4kmcrCRZZGet6yz2emRyM",
  "key3": "EteejxKRtoYpYhPPRjdgT5iLuWXvjaYDUUVFwZKSMCYeBYWCuYmXYHZeiSRUBeZqtAmA9nBv7dvFDE4YQcgvZew",
  "key4": "3aHtC6ToUzmEXrHwwLjJfeVfgDrfBso3kytKVndPxFnywoyYTXfbDG2xrY54gS7Jzyt2fQcQfPTeGS2LS9CSzDF5",
  "key5": "4BjKZFRjG8YRQec4u5PACSV69PdG5ks8Tt2TnFCvn5BNCZLeFFxN55FuykbWWKipVPKjtPhcdJiCNeqo3tqBmZ2r",
  "key6": "4nSY161eTN1jB6JADNUMGxfk4eYdvjHuRAFYjsFR7Dj9pAhgg2owxjm1wJojn3pqX8wQkqh2V1jmCikHxS5V4d7b",
  "key7": "678U4poPT9tTc2RAjq9gf8Yeoaodxj8xqKqZYDPL6hTpkYbnezpJLzLMced3CzRAMku41hMRrJixiwHjzb5dKKzk",
  "key8": "ivguXWz1R5cmorrvyndJYNKYDgXB4SWSBe5REhRezLqAeSaS7C7D35rWy1dY3QaSEzGSew4jT4GsGgb91cDfJGA",
  "key9": "21sBJv9FfedXdNHVhrRF1KWRkZcR3oYp9vDjpavAutSRTjBKoJm7SxMR62a2bsizcsMpheMYeiwES4HWbVZN7yNn",
  "key10": "3hi8ahpZXHXfJsGu8UZ4H1pQT8mHjdT9cGwdixJmcHvvJ2fZ6hUWSaY81wYLW96So9z8u27bQQ1LdSmaKdwNM2v7",
  "key11": "2hoDiAxixTt3J2CBp4E5GfdKnkmqZMMgbv1qENZC9bgDHmqL6agNhCjeSQSu5Q33QkG4ygQ9hPXfiwb2PfnQpsBn",
  "key12": "3bDSxbLm2Gx6KZo5JqHY6FupSWreLGK4EimFW812wu9pDfC7dLAdzJMyFw4iCPBYssVrHoZ4CnKT8GnWdkF7XYFt",
  "key13": "51iaBFKV2HXdAsrXkwTVbCpDNR4KGaV7CJTxqm1yEVPL5o4WMMC6zZ7HCgk2zgrBXGy2ZKDYhjGJSKUGM1Z9bkfq",
  "key14": "21PzYWuE8UEMVXukKba95yJxAjQDikhkYj543pXxMNuzJpumWJF6bTVmvDUDrkYWLoGgwAogXNM1vQLQfwQ8Zvhh",
  "key15": "3DGqMjK3aRzQLVFSddjH1xKF2PKSJEFuDbMkm6GiKao3BfVgZQh9L6mkxnBqCzFaEtiGTshy8m5hJeXe6rJNiGAm",
  "key16": "3PVvCByMLdMrDNDkQDNuCTapTYczCNrPmi4Mv8S55cERFhMs15MQF7o89xvxoZyLJfY9DuWJkXRdoGekZ4jAj2vw",
  "key17": "51fJCY8QSHpxVZDBXMAKaCq4pjLTHiJE5RiwEjZDLkp3znUzgTZVs5xab8FX6FjkHx8dPXLwCLxGZhbZxeqwDPy2",
  "key18": "3b5SsTMHgHZUm6wgkaiSwiGGv4yhSZSKp3RftGZyCxBuCTCbqD8iDh3fZMgDLdzFdFrBReD44oM8UXVtJ1LgpiYo",
  "key19": "2bs6LJgQFw3bdgtgFTDhLHmFHzXC2MPdYzLJQvUuNSUufxBBwRPFy1FmHc4RTX2HwLNyfWKRqScCdF6uGZwdqNsx",
  "key20": "47BFarwon7fybmX79EjhyApG3UJbZUMHv2NcCcbz1vPTZX9rfapvN2Ygj6eMoPq4xmXWwL8QYVGbZufw7HiGGbZW",
  "key21": "3oJ9cUTrGy6fw3VcVdhZvYCoHGUoP8tSSbABdcuiUrhhbV2NgyN3sJn3K3QNYHzYAZqjUWcCxidxccHbxY29NyfT",
  "key22": "4Vm6RDS4fKNFs8VgFeXWf4hMDa65BBLppFfFcGga5phvyFPjdPC2UmdkghvqJ5hna73wX23aMs2x3iVgi33tQoAB",
  "key23": "4NtihBJfasSLnARNqyZCRbCZjWygQwcpy3wECriVgdHeTQpRMF76yCZ5Qgwc78CwSgZCvDWZGF9TPzFgDE4UPKPa",
  "key24": "4Q9NJTmzbbJfA8PXRtdxj97dJFDB1nb1jpZnFrCp1y4XAReqEqRSeMmnM3Aw9Bw4bL4pkvcunjmoC4PXQkNYAxfN"
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
