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
    "3yc8rwhJY358kjd3fzom6cJHPJaQVzRppt5M4TuY8K3hz2jJcRxRmZMN7QppaHR29L11PW5c9XsUFGxyp9eh5SWN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tnHcHgyqYoQF5Uuce2K8xGF9BMy9uVpi4rwsSZbWm12rf5G18KuqArKvkYBU2FSAYvaD5bHvr8YvDTUcyokLzYf",
  "key1": "5vS25Zp4SBT7k3Dc7BYe9CwHXjWv2HRUT6js34RaTDYMkGZCns26U5jmHUMssUC4oRHZsBWnQ2RzfsizRWzznNGN",
  "key2": "2p8X97MwuhngzLu56qDYNjCqvMxpRzarq4tbBo2dZzaTQNTxH7MfxLmesYSoGDJWcaTkkHWVGGQfXg4eUszHx69v",
  "key3": "2g2BbWmwFziC4yPCCVRYj3k5bbcVzs83PQdgJeRV4kZw6HNFHDenf6jWmdnYiXLJxmzqvHmLwQs4oP7o4vPj5tk9",
  "key4": "eUQ92SFCh3nbemDcx3d2rMekX4MLJ4T3a8GqT8QFEqE7wLmf67bTWYRa6pzx1pJFpqXxV3jt9c9MURUnWDRKcTF",
  "key5": "wtdNUSw7TCDz7t57vw9PjGuqahj1UQa4j9j4TYgGoU88n1i6uSQdDFyXEiyxb8i6cfnZJ9BiCsvRkwYV7QhbH1q",
  "key6": "3C1fNnyfKvraC6wGEwarELo1dXtrxsTU9rjBfEMd9AbmGsUb5tFGvcjspnp8W1Xyd9PqLfd4aERxWNfEZvDpb4Q5",
  "key7": "hubXukMA3ZPeBg7NGE2nuD1Gj5XEGVVWXRqADQcqxeM2ZkrbkrvWt5v1NJhxtaeyaTLJjN6DzSAZp598judB3x9",
  "key8": "evmForoUFr2s4HHCn6AGBXPHwHeS3sJUiZLdKWFVHxSfppZWc54nWytdbAXPv6MuUB1G3FcY8d5w2ham1ozTL1e",
  "key9": "4ykGHh64rtequfDDfPFcsLvVDyPGJjnR4btUndoNpUJnF1J7qzGNWWpbFUmvTgUXcrGaYVEe7DtyPqqzxCbAiMbM",
  "key10": "3zEKSmtNLGTxo9fiTuYko7C52LtjMpgWKiCey9DPqQzsCdWyoBCi9fCmAEJcPZbAjWVkwkMtqNxtkA63fucBzTGq",
  "key11": "3rqcXJpZVqGuiNZ79cmiUMGFgr1dQkpVDfJwz3kGdNjepsVNGB6Cra3RoBRA9nB22QEamiWbTsc3kzaspKZD3kPz",
  "key12": "36wrauAfjT4qFdNDspWh1toUv7dJcVYmVbgQUvaE9QtMcChXaqvmaRLHcCDwbfxxWGkX1cqNDc76ANvoviiUxQBm",
  "key13": "Wq63PwB4bTkqv3tr2TrFMhesXDTiqE9d2vQnpyGJv3VrPTE4NYBihy4c6NQGhhagqMDBR4G9BP43uXsEkeJ1aeU",
  "key14": "3UoejQgJQ3PNDaUjggDUJjkUqB2zDWuCdDAADztiAX2Y5HKHVM9XBJ3SaoA8yGD7kULasSwSEkjeEcMP3s2jTTKt",
  "key15": "2HRegaPzhAEbJ1SmfjS33JiEMBV3mGeLY3XGhDNJqFcrWtCSnKi8NDW1L372uzkjaLThkPcmPnujCvvvVfUgfEWY",
  "key16": "46u3bqAaCvcBHJLAxyb2MKxrcKfWu5u2m76Kf9iGB6canfaYQ2MyGxbT4RqCu6N4f68WXBbp7VVahfvMu3EQpZ4v",
  "key17": "4SmAY1J7g9q3KMTwSyfjrjFDLAohAdM3iYPLGEneE18B2gC2ZtNNLrpjgXn8EV6nSy6ygxgG7EjTM2kg1J7ZcEjo",
  "key18": "3zr8dNs5adsA2Mk1EsrhzWYBwP2wZGn232T3HcufdC2mbc52mkuE4jBzRaT9JZQxMq7QgXzJa6aF6BAX6QaFLmhR",
  "key19": "3ggAAxZyVWHCkdtpE2DeNDL2N7UjZ3HsT2kyy6DoNk1sr479wB6xxa6dEpFxe93scAhKacTyKV9G1U9GYZDLQAuJ",
  "key20": "3WnPSmaqUkWLRPMrEtmGBo2HSQsTvWtWJQtKpTDU1Jw8yQXrjgezMxzsoj6FzwQ3W7zgKjFkzUMkN91XgE2aawKM",
  "key21": "355uLRKDctp9UChpP6DV8Ly9wcQx5MN8Yk5JVYTxhaXR9uCYf5D6Mrksrjk5c4Hy52NZP9eyNfxmLFVaFC452usw",
  "key22": "4SdFpyc9r3rmNDZiLspzLaVmruHb9yKUYPHJY5whvckDBxNpCCJXHxZDzePsF4n1hgnB9un5RJhwwnuADBoB28hM",
  "key23": "Y5XEf5ybCHdsRCk2eEXHp3Dnjvbr3RGSoonByjgGp5wTYGdrKvWm7KDwWxfDBssYteph6fXM9NHwTNKkYm5B9Kp",
  "key24": "URLjuiqvDecWD2AqVJSvzFEJ6TJ3cHZRjuVABjJT9TmXbZ2DvrSgp3DY15A3UwhK6w47Knh7PeD4S9uim2fNzpv",
  "key25": "4zPvp3Uv66QKkDUydXq91a8AcdfCDzVX2xYVduv4yo3uyP5UcjgNM45PJUaD7Rjc2oqm2ikQaRfoBAfYP8WtBXAa"
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
