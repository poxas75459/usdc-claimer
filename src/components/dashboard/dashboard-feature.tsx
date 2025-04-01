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
    "gXsv7EM54ukLLb2DZhBEMjHB9L45JXpt7hKUErQw45wktmHbC4pUvxDY5gwQJtVDeMV27bCsnd97Pu3UGGipB4K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hyC8Lpxt3mAPkZHVvg64tf8UwS3bJ4ncrftpnDj2i65ocGgc6KoX6cvqSSD3hWLFKWPu9daSx4ubJHAKECCGT6k",
  "key1": "4YuZ9uiPy3vf4BH6LP5SAVNXk3Q2tGn4o7DSma6w1TUdQDYcKd5NBELQXd9AS4ag3Wa9uRMnYNDA6YMERcaFGCBu",
  "key2": "2ysmadFnyMAibBPAUYmVESCrdurUxwatfKczHD5QX7raohMuh6M4QC8SnAdpUFBca8pS4aydc7QMBpRzv2699vBn",
  "key3": "4Lc1FNNWjJpmhqG93hegQvn4RcjNxHwgsd6JTzZC732ppscicHcTNp2GtWo26mQZz4Vjvca5daVbmdtnueJszWzo",
  "key4": "55N3YkyKsE2xqC9By2CCMn68NmqpqpRn6HNyf6e2RSdcUvrLMWA5RgoNdNue62yo2SJjD4qCqpNYwt1Amp1PXCJa",
  "key5": "3fVAhc2swDwVkfief51Qp9Ayqcjbdiu8gEM7vkpV9N38hZttDh6FZ4XweELfUAZgkjLQEFmPm7Jgky8YbAMiFaoi",
  "key6": "3kuSbdhyGih6YpzeQBhcWYKgCK6e3rpf2DE73sXki2AxZ7uJGKestYN7a1qg3K5Kp6CLxc1m1ABfLnVKgfwZ2d52",
  "key7": "eRjrkuw7faN3uWxgtN8btB6E3DHDnVjdLG6rgKcBcx5R1ZtmhjvMfJFj6mVxte29dWxzXdmkVKHH59NpvNeVFiB",
  "key8": "w9VwWaJqPCj6cVU1bEo2kPhV39q4GhXszBqHth6LAxVEZky7qzCmms4ZNKGD2yYEajbsuWRtixTAXWjpF661AcP",
  "key9": "3Ra3iyNFpXnvATUsArqMXMACXdbgv4awjtSHUVV8n6c4nYiEaeyDEkW7VzZJund3BdMvXqZTtSTHvKYPAY9HgGci",
  "key10": "5zzv2Qk6mbjHpb2uGuVMTsEZKBAz86oyCR27xVBKpkkECwWB5DzgZ7cKqsyEwzBxUwvhNiRdNyHJUqUspqnk6dan",
  "key11": "CxH8w3gTgQqVGxWBowzxMwWNcPycVbvvdzzDKb1zQd3V3SGKjPVGqdGWVCjNeoeqkHnEBas2SoSFBFTtU5CxZi6",
  "key12": "4tZ89LjZk8Uau66uNaau2ct84jo6QsTFWAkdM4ZT9w4cgz5yTuVYQXTuQF5eokGH8fCCAoXYnMLwoAijnCyau3yK",
  "key13": "3mrXMH7xVrJSk6HM9uju3svDvHy2TN5ToxiqQiwfxXZasSfRh9aLXFuFx673xP7aktvrzbt97czzKp4WGGbfi5g1",
  "key14": "QkZg3HcmzvUoCkaPT7YhhHLtNQiBjZes8TSwoboSNZq8oCEUGLWvc9UidZGPq9YZcxvnVWi7eGvNDmTWHSzNLvb",
  "key15": "oFndNvn8RCQKCoeMhgAPwKjQNkpsso2KT8GxjiEjVvTdYutRgVS3qJBzYsD6VykTSWsdEjzkWdNoB1An4YR6Wcq",
  "key16": "4xdn1i3Z9wJjVcnWHfpf6ZyrubT78nDPwUe7WGXErYrmuZQaCa2RF9f7heXXt7w2KxZjoxVZRVdWGyc1vLQz4EuR",
  "key17": "3zsNVRexrALuqz49R6Y6qNu6vgsRkUWwMb6WCDBXUjvx1WCsWY1S5qXrbFVbN2ksBa9Dh9ZEc5yD791cREsJERux",
  "key18": "5KRPLodRyqqwuozDABCDye8ZBXhUa8Tx28qVHgYt1ixLVHRPcXYALJA1F9mRcu77SiXdvNX1NGxzEYKBiUuYrD3K",
  "key19": "4Eb5Y2EukygZLnG4V6UYXy3qsVJssspUHzQQAzfHTR1LseTPCUzirDax2ed6htKxmzQ8vL6Swif4S2ud5pWNwa17",
  "key20": "QQsb9UKQDgzEnmcMdfdVt5Vkp5zRH2X26rwn9QvVToLWhuLmNYv4HxierKkvxKrAD7crKe1ARjAHMEkNBfsbBjD",
  "key21": "3Yn5FLbEmDbQak9K6yVXwMryFB8MsM3MKkJY4yWcNFKaAbespPDG9WRL9JkMzuWLG7FqyyGTkG97FzVopMB9sbC",
  "key22": "weCz44gornJbs56emk6J3Dmw2UrsdWGGZgzNEzKHrwUntkd9XbiR4gSnxFkEnAYB6J6WmmD7jrmrvv2bLXTr9zt",
  "key23": "5C4f8P85HEDaJQTFEwQXuUJjqebYdeTHZ2AuwYVRRdbRX4Jm6LnNmdadTc1s97iVFMjsdgQu3b7rbztTZHScHyWT",
  "key24": "2gck8XDZd6ZzHrNy6grgHcyTGj6xVhcgjNbCtTDrq28bCVrSvgsZgyWUcf2GJRDWjTpiyr1SAxQG1XSAyBWHFGZE",
  "key25": "21KSfugJjcoYPXMYFAjbb5nfrS87ksjBNphEZRymiLpWJuFHS7WjwB65CARpnKz1AGFCbrfWXbAQ8SJfMU5Eob3p",
  "key26": "4aDnRyG6kyNLWb6MTvpYx2o5anUpPDY9JvPJPPeCJzDnh7JfLKC7LoprxZryYtPe8K9YjCd8VZhakBJCLJ4pxoi5",
  "key27": "64MfKWBTd2Fpx1qb6NnzSjSM522uGi94X1KfPT8X9Kc54JpCGwYXEUixSpCWCCUpUSRV1pND6ryCZRwbRuF6pCBA",
  "key28": "2Qh4CpenjnwVwAZx1gFhigAhoEuvhidrP4Gz8LuZz5XkZY3rRsRiMu7ks6Rc4DLjSY7JjGK8cvFJEE9wK2rtUqhs",
  "key29": "vDJZB4kvycdiiwjdvPj3eJFGFy1coy8uEP7Yhk11pWx8PJooZTZgLhyZz1EHezYigC5dT6zE5AK2G1sasRSVXvs",
  "key30": "JgvvGZ2WpmzjYBDNUdLphDtixc7JASG2pVuohmTLb1aSqxPwX2gt82eSBAiVykBcNx6cddxfGTF3UdDUByw2fhP",
  "key31": "2xrrLZMN3dLw1eeSmfxz96GzkaZQENoUNXcajXJb3GhyWGn7qbvnrcicirFogLhD9YACzRfButtcS98AEAW1JwmV",
  "key32": "4MXkaUSdL9NnwCmLuCaCXSrnf4hZbUe2SoDuXXsAz8FiJhYbmWf5tzy9Eh9PKRg1cECdNFwPhsR3dCnTfGqdeENt"
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
