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
    "wYY6UTSsMh31PELFVg4xb2ssEscBGKtCXJKHAidVx2Sq4b6YLMAhYcHSWP3Vae2QWkcpCZFmq2xH2c2QVS2ir4H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XffU8gJmjsHSjaq4uEWijC5YE5rR1zo9qNGZLz48rjfjtFh2DgsP2zsHvp71rJ6wmYtQf9oTzbPsGdTQuQmnNgz",
  "key1": "3Y23791FhDc2c3YrWestwpne2xA5WBmFZWBWsuC9tNFiatKAqFX83fFMfz3yphnKqu8tUSWghgG7fSMMZS5DJrhY",
  "key2": "5hLkb3xrKnzc8KqN8WXQnUQtsLS3mC4W1DdMiissg1h6ed4uNkFU4BYThtBeb75oY7ZsvhNYDy8wJbrN3iCjrpe7",
  "key3": "HMdhz3KKLdatciDEJ5RDSXsGi6rNyrin1fdXdhcveN18YraknCqx17uFViT84yTpVouhWivj2KyCqvkK8S3y2Ub",
  "key4": "5jwtHLKS9jrqnEBXVG15BHpNsjTZ8uY82GHGn6gpwecJopDZspC93iRecn1HnftqkGsRbsdp6ppwmBCXUa28S1HL",
  "key5": "4PwAHzZ3USKagxP3jkPLgaZWenUHeLy9k8WNwkMuFR63d5TPHsX1F4oJqukxgoYrptmP3HoRwhAvbduMsyza4Sv4",
  "key6": "3dv9C6GA8bZkZxy458LZSSGcT3FuHkcf5VQUmBmyKErADHTKab3dpwUK9QeauQi9crbppXKjnSoKLp8rvVRtLT8N",
  "key7": "39mH8kg12tYrbpd9eB85xBkMBt1qJqEoYnNFdd4Aixm7N8o8MUH7i7Eq4BiKHUQUdMrr4iZZEwYvQnjy7wb6kT5M",
  "key8": "4bvsYDyu4CqLZyyePEPd5N75AKfGUheFZdqtxfYAiTsScgjcwKRjE5tyjZ29N5YrMAkmExqeRaXDfMzfVBWK85yy",
  "key9": "iSZaEYfmMZzDjB7GHuuHipG3DtqYPqK67xLMkrxK6PAeWBiLhDgwesad7qdCiezvPSWWR4aXbBzjxZFxzJZQ1JC",
  "key10": "5vUiGWBbmAgigx9KgF3wkZt1Qw9b2eNan7GYpVs3VjUdaWhBbguxFXHe8r2bqbhZnf7MsRymtsBLiAbMV17Jc9ew",
  "key11": "4J8mVRPX1zpcuJUMYdz82JXbWDvo8LC87GmzdKUPJ4tpXmG4e6HuEK1NjQTG7iCBjtrR978tkwm1Jmt9xRMNMaCP",
  "key12": "ZGdKp9sxyM9j72pa8c7n86PziTZhn7bGhnpUZeYrTXaCKTVgusXWemn9E76wJRVo7Ltt146E7T9VowFCTVeNzAC",
  "key13": "389gyC8tYSakUVnnfAXrKs3KnXJDuKuJ2u9KYS1kzwo6zVGPx8My6w2a5T3UbYaWx3VB8FPUxy3iLG42eq2k6A4i",
  "key14": "4rvCzCRoAQqCwRbLjxWUkK218wMGoyRX7Zvsn16SvZB5HBnays1hKEneDJPsiAdtZUhmy4w9rUEQcNFPU7Bfz1V3",
  "key15": "56QxUtoGZdbpeKVAKUKV1Egpz1y9bccgN53MoYmUAY6iaWna7faXWf1uGq7WTjou4uefEF1KHvCxEznJ4KRLvAZG",
  "key16": "HDLun7hfqUs6KLA9ipUn2hXKYHEEKnAs1McdSS7FG5cC4QCtryaio6tadEnJQU5cAQw9Lk4TfMxDfabk7ZqfCjj",
  "key17": "5SyUvFmHpTPp6QxAR71oB5yyFoeWZL11AjYjLJ64mfd4XBXYPMY9BJ2SuQtTjKni5qqpwGgYhip7VXsD8MF5dSma",
  "key18": "5biCJiRVUNwb1qh4FXyQT1kiHEPyvjwKitC2sEvz25jJc6Vomd9D5bnzEquZPEb7XdhvXBr4EGiRJb4be8Y2KyNu",
  "key19": "3BZ5rAjV6DhmAk6JiUGZuvznybZZia2tTj4sgzZ9tGsdQseBdd1RsFf6L3V2q4gfeZppyMpfkUkto9bwPRsdjvkH",
  "key20": "3abZfjYEUVwGaV5SmbE7Y4w723AkyBoWskYZipjLXUoD5RvUtoxV2bTHExm4MdEytHXyaNRk1CUK4RVnW4XYQGJC",
  "key21": "2KXc3ExMDiAJdgtK5q7J6wXvwKYjz2We4rTp9VX37UXHs1jPGjb9rCJXkY1RFezN5E3ce484PeGCpFGDuhheLZ9q",
  "key22": "4FkNEeeMZoimk69XMSP3iGKT5e6CB2kRv3dfUQDinP1XRLpNFrSKxvRZtbmLjZLUyou8DuZF35jMNwvEmEsNx319",
  "key23": "3S3DTPYaSnAZQ5tcKuhFYN1GUH4fgk3miw3WiGWKasQPVeSxFxe2rTCmZuJrUaCoNHxERy854TuQ5yA23gbed7Bq",
  "key24": "39x7ZtVyRcftL9Unngq8b7qor7v8tEtmNqC7t8ybuVRRAyTyN12NedYuvnFjnhAYJFDPxvPwyQrjeZj5mYBzbhRB",
  "key25": "4kBEVcZLxsFBTbyrmAgX94QETyjdsJwgPu43R524FYvNH5mAPfSebV4AChqVFWdCbBDxzCWRXDdMrv9Gexj256Ej",
  "key26": "2CCZ2Hxfsy2zTKfRxXCiaqAqs7hVa7WbRxNHtaBNQ5gXuCUdp7Jzhu8P4pEe526ZA2kWdBqjnw6WzxGZTCziPGZp",
  "key27": "4Avc8H2WnZULJ9nHkX1FBCTXwzAzpZoWmJc6D3WCPGRZnwARpUsyb7tLfS3WWf9XE3WiioaDcaMwxQZh9x1wDda6",
  "key28": "4wC3VChw1mp7Wb8xp2u8sTU8kx28o2uodXACJioF6zR7utzCtgoKZc7VmK9QG9E2o3nxRpQxuFwxcSTiabXWx2KE",
  "key29": "GLXZoW1wWP7SFoy1qJ3oyYvysHMPsBH143zYFPcXGaR1DcKFYEYHcngALsELMkg456u559iLM3L9HZYCCLPGdLQ",
  "key30": "2gaF4uVEJQPqNNZTWj8N2CWYmjrcYNGHk8v4M1aiA3mJLS6EN5UmHuek5CgZnG9KSrgSpczPq88SS4hzQmxcKcte",
  "key31": "3hWVUxT4N2hXjzGnsKSXX18T5RtsrV5NWNcsmxu99uGQauubRz5wVMqBbbrFnG9WjcEusPq69GWxRZkSB151JbGC",
  "key32": "iRhfxJsbpxUS2Tv4kepAy45Qx7MmQZZdSxXwhb7YvAAWdSor3hPnUCHsDy1PPLake8ELJCyQu9NCeNkGhuM9Pcn",
  "key33": "BhKWNx38HpazEi7Vf8zyfjh8AiAp3SFvYwYpVxaXLWxj4LsViVqHUsAhQZ83nNjp1A6ZZku7StGEZGRLs8wFiMk",
  "key34": "YNeB67v3QqaQvNHyqk8CSXe9AohkwCRfVTY6nr8Jf8Hec3SM77X8Luc19vmoWwdDnraYep222bCGHWSKUQAiTK8",
  "key35": "5DoycJW6Lfen1KyjEHZpJzTKCvmAjbNoswnZnxjdbnUftzoSdMkXENjAx4mBxz95U9uLVvLDG7nZtGY398NGU2Pw",
  "key36": "3HoXCuvFdPbQy1AnwzMrbDKa162UDZpbQGneJenSiZz3dUheNJv8k67eJe2wLpVr3MQVKXf9qYiU1i4sC3wtMtvV",
  "key37": "GVMjqpdp1CkjABE6msj1R6NS1rLkAsBorELEfJedUi3zH9QZjfDoX1Gudct7UM3W6xhKcJiJ2qVafCYpjBVhFtc"
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
