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
    "4FJvHFguRkheqEHR8FaXCtHPHJSG3pEzeFBPDudZPsufPmsccKJaJDm2M2cKQhbUm3rkdSXKcR8J7L1d7Vh9CRb7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wanxwjACR8obsxF3fypN1kGjAEn2GoAmJB85yvvgrEKnLsayLkf3vJQVx8ZebgAgiUPeWnKWvZXtK5u5uWZN8xK",
  "key1": "2hHMwaU4WDBbBnU5FKxqAf6G5aBYnNhpQ8ojLMJPyv7gUdhdkbVTMQfD9kY4uo8jupcmL5rH9N1yQWMUkHhbTNdq",
  "key2": "KhmhPAUtrJmp3cDBZjzFSNPHN3XDgsSL1n8TejovtMaFXPtr2MdBeiiG277pDNUhFVNH2rCDuEZtTjMJnVwynFs",
  "key3": "2HMmye7jy4V8S1rnVXCwdkui8WsZHW7Pqg1UEAmWWZn369MVrAJ5FkRUnHXiXQH8haheDD43GAiDfFFBoUyCvqEE",
  "key4": "SM5d8aXRheBq9iGN9LdZgpydiED398v6cTmkt6Q7x7Pr2bmu5T9LMGP2qRLR9Pv5GfiwGF8jMqRZWZmAUkpBCNT",
  "key5": "4x4HjbEuNHSZHHbzDREQD1KrBRGieh3mVsn9wvKobX1dJfu8YNnBouo5d5KmVVHBAJtFLL3qm12G3n4znmR1U5NU",
  "key6": "5dJFnivdejhRbUTgJfp2Pf2CTwqVGo25Qiiwak2E3pSfQZ88bzM2fAhttEap2XNKcfMWk5voTaaxGPWTJ1nmR9NA",
  "key7": "4bBeYGAczzLBotgAXsHrgHJzJDq8VcdFRoAMon2pNKA4Bsmt9SFXpMxP5E4zqEFVnWJipvm6b7xYx41WwQrRnik2",
  "key8": "5NuhNcMNBzApQexyKyspcMJYMTBK1P48bLFnGDj7YoZSCgZduSN18zoeVssMkyx3fW47bbVkosr76SWSxEtH8423",
  "key9": "dryRLeeDMrgSCB8hQp1ah2tq5RHZjCX3h83cFjydR2KMBprmip2EcxF3a1DVhN1D1TgaKawFXcZkYsQ7mAo5bWr",
  "key10": "3EoY8GJwLBensMYrJAdGnqPyCjCVeeds2XWE1gGNmQHpx5bxpQJXHkmr6ZzAz3MMmnVSMvRGd3WKo9C6BWd2iqAC",
  "key11": "4wFhei83313i4ik52EAvRok7WpkLeGdDavytKstVhDp8Fz821ETjZUVW8SXR3NR5d14ja3s31beBZaPVKEBdtrn6",
  "key12": "4Fg2WYqsWB3VWjjvDFRHXcZegeubQa2Wuqx2BwbgDzMsuHfARP78rx3kdWetk7q9Sg2nAib7DNFa72zG21Ng9KYc",
  "key13": "krosfQXo5NNwNLPP8ZMqXFHXJTKH9eAMcvUCMBGb3y57YiGWZ5wpmW4NdtELPn5bfUgNUQiFwhYtNpgV2nAsH4N",
  "key14": "3VLWAYDovtcWFfL3gArT32f4yvKutya36M7jqFQxqRyEJJMY7ZcctTnFGi8morL9avz8P92LcMqyPLzeknjtexHB",
  "key15": "2SPDu1SNCXMzBYLPxmsYmRP1n5SH3sQ5SvDb2oQw8nzPLw1N8gYJuVmWxUE79drj3ZNtTnUTtULZaQ7zQdh56MBJ",
  "key16": "3BFV2iRzK9JUUVcUWLSB16akvxqfJULeavcJ9Nh7GfBwC97zwcVbgRfUfE3DUoQADcPbGhJx9rAmideamqzZ4ghq",
  "key17": "3viGbHcEJxcH8JtKpD6sEmfNxUAuE6QGfQYWCFNbSArsXMaaEfKUfUtahGDaH6XvrXdXQafATXnqXCnET6vZufhL",
  "key18": "5dkUUTHneSHfBdq38yKYcyyCnEfkTmp5rGYBWVKFn46aV7ySLV8KhRJJSt3t7LEA6NhCHeVXVwFBoxnFSCXhpzvm",
  "key19": "3SUvDH7ZpSt4xLS74V84SWdAHnmtsLcLwdpujvwtm2xKDfAaKWQqgXTrq77mDa7zg9mZEkxxRgp4XqYC2djQKuZq",
  "key20": "5pGNmnrtYosHR3S4NosQymwwTjBSHo68XGpv9roJZa94bKxEQRmTf4cMyzbNsdaiDYaRSUA5ZdKb7NthrB9JdCRU",
  "key21": "nW5J5KKC4vLX9iR7HrzT4VXmcHWbwJQqx4dE1ZbBuABzYtfCyz2oT6h4A6n5YcM6zRh2SF1gsvZRoUughM79sXD",
  "key22": "3wFZaaWGwcp3RWPUfB8kKKHDHdY2hMQRQFVW1wS5LWTjjwAhkmSMeR4pk5D4hNqNfdecaxp9UhNnKvuYH6nE4NsV",
  "key23": "feWnsRa3qudyPSo182zNbwFX8BjCMEtyKN4gvBJVTzwEmMGugJDobMDYBRYcf8sWNgR6iNASb1Lu54KbvwKbdoF",
  "key24": "5r2ufKHB4VKdEk5eNMqaei21AqdXQozJytDPSPQWM7SAazS22yzXEauRimLSMbvrwYXXR36npyXHJmNDN5GTb4cT",
  "key25": "3zKWViemYdATbBGuA1gTfdCbokQmH8dmo2u4WhvGdENR4PMK1vjaBt8tnFgdHUaVzhd7UDFYtDNn7JbGqQm8QewN"
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
