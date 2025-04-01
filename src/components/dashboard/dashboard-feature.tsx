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
    "3mXdB79jVLPcMtcjWizWx1CXsqQaX8QdctPB1Cu8yRqWGxuwCw1e1oY142jt7cAykUMusYdhpCW39WQNjDtQDB9w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Yo3tkqyXVhB8fEnkW2HQ3F1WefSBxMYXG831kkhsLqX8SyuMfvaA3RpUer5WFsswpCNwCDdvrjWsA7ccQ2CBD1F",
  "key1": "4MGi1yK6WdQp15dsBi74MKxh7vP8h8K8bhFNePfrD3yG8FAWs2177bKNkxFynVxFFEjYQWEzqwFBu3UfQLjTTzr",
  "key2": "4Z2cr7Gy36XkgnpMN1kzVUbM8zkkgLZ4HpyZ7NCrJEunVvJru9BUKaLgogReJ5uZvY8Ee433N8BBUMMR62tfCCNC",
  "key3": "qRwYvvXrATn6CWpado3tExdrWR2QUN7oG4n86MQqZCVVj47U3VtMuNjrmLumh8xa6GHNGpmDEam7u4iLvwYjfZ3",
  "key4": "3eF7eH8JXWNzABbNJ46D9Pk7AuwWNsX4RwB3HkSLjmozziZdwvqo1TUZBsYY5jpeVTWoxaenMFp21C6Z72xCPoeR",
  "key5": "3SzaqpLfSS594CmkizmfKCLjJD7fxoebDLohhxfkwmAu65YbnqdZ1kGF3ksimFSkqBsmhBWUK9NaMDoZHRzNkgUk",
  "key6": "q7Gm9eZXSSoLrBHeQZc5NnFwTUCvu4KstWuTkdGpxGmtn6cnZA8MpfEztyCCJWrijPk5rnNe4F1KznGhprPEA5n",
  "key7": "5s4D3wx76mCi7bJX1WWgHoeypPH5fKSZhLpqZpd64VvAjCRqCDeeeBRfsoXgMUQRrPFLVaoZJhUK5juVvC8F6NTz",
  "key8": "5j7gc3jJV2CJmys8hvEfXQuUy8ZKpFNmQgcj1xs2Nr7hkvJer1n5RTkhL41wAuuWHnnmQjuL4u1tdMTuVwLTe97",
  "key9": "4bmi5nkyo1aD6onFfhYmFrp3ZqGNgSenBA8wyHJfHjZow3AQyCLKiYAuWK5UhoshPt8QicZPhmkQChT8mYTFU8a8",
  "key10": "2jwCSaXz1hX219TWFinGwEcivKw6hbcHT9sqgTasq4WMdPHs61YNyctqyrz9KMZoD8ZKc5oye7hLapDQ1jrp5m6Q",
  "key11": "4Ki3aZ2dYGxmZ2v98TJdtTAbDSmT6jhXmZUAuY7ZFCiQMJiea9sGWMa5jWP7WLqreVEtnh1FYoGhVWVwCmpPSNHa",
  "key12": "2iG7VmZChKdHz9UaSgAj2Ti6Bia67SDymfrhYMeAStRPwP1PM8aLKxPkirqCLqJWQfqNEmqZMwZpsLL3B8uM9aEV",
  "key13": "2uekr45doApUhHqyFAT6Wrd9hzfEtjuT9GLNwDqu9rP3HSRSpeLUQFPNEHUMX4BFFa3N1QkjgMcwYn1VWifaKKGC",
  "key14": "Cw1t2syeJrdgFFfmb1Z9Dk1WapmYaWHbwygKnz3pTKTAGX7ecYf2zTMC6XSc4wfbVdcQRL9WCUtNif45NxKrnz8",
  "key15": "T3mnwp2pKtwjTZGA84d5Xg3WSzHn1Yesns3WVfACvS5bbz3QEP1Q9joovFXus9WpK1aw4rBwpxidt1vo1jji1kd",
  "key16": "2KyJM4DJf1Y8VxDr8h4zc1YHAnsBa52LhSBVE3QbXyE4HSFEVoV3Z5GUmCUmpunjS14tPi2uB7vEvSXcQ3x8rAUR",
  "key17": "fNUU6Bzohy4CZAhcSkegXnvGLFQ24i1YnGmWo45tFmDc1xaFBPQaPuvQobvhtjNV3GAnsQuiuYM2mFXmh8rX1j5",
  "key18": "4TTzSw9AAH88HS3p5HmCiR9Lj1xTCCyT8AqJzL88ReJuihAs6XefxbacHMvf18JNLeb9cah7pvtuC92TZ6g1jDVY",
  "key19": "4e19yN4WHzH8ES1s4xS5AiV5q3SDN4Si2pcjge8wHH6Fo3N6hR4KGwzNYEPCvvNa9q26RzEAEysHVwPpFfKCqASM",
  "key20": "3FwtBK1u44R17JoqAt52Ud4LVxM6dE3vJtsDT3nTGgjVS2ACztFArTeurjhP2kTgKsAjEmqwxBghkeQT1rbjNCqi",
  "key21": "2hb6Q5YvMHja12ojFgT2EACBa9hbxm2TTveA1fyCpaeJeTB7AaCKnMd9AkJNjewYBExtPnzgVwXGXi27FHJdVQcq",
  "key22": "27YntAPj1DXrz7k5ugXN7QRv131XMRrcWcRr4sGvVF13MpJBXNLpL5kogTJ9kU6oGYVMAPjENPwdDzRQCUuGN9jk",
  "key23": "5oNeKoj7wBhsgS1NCqasmvxwKxAQQ3hJnKCjM9kDVnTTaNor2rozzHLxBUzsEWUkfMpAKW92YX8TGwNaAc997jbM",
  "key24": "NBYPfmApsh5GB8GNchhjyJnLFfBsRxk7M3fiEZK5CT6FHda2Rma9aoL3drzw4GCUf3qEQpyVYHY2BJyPPomCt4m",
  "key25": "wDADsSEoxAjcwv71y4wCFxoX6CV9ApLqkTwBCaW7qTg4rfsyS8EyQVHBVr6U1Nn13udWMUwp6XAKkktHzaPzTSz",
  "key26": "4xGc8z4tNKYi6Mfh3yfWEZTFqdGf5CGGfbZHVk7fvq55awtZboWc8GcgomjU7drEUiKo1XFmiUQmGfyYsTrNRMyn",
  "key27": "nh7hxBDDrgQUqRfaUAHYaDeA83FrHBRkVDn3yfLJunfHF9rAEC6waJGSfTBePStRP44vQ5RkWBPKwWJDJXPVScw",
  "key28": "cMe8W2khwG1weBsQCGJobGo34js2ZpSisn9EnMD2T1VqNuZmqkhNizLzaHcqLyJmZfBM6Kn5MpJCjmqcwkVKLpF",
  "key29": "2NZeoBkF8cgwLiZ119ZkSwyGuHW1QTdX9dUxc2HtQmN51vVeCaN97QfHHogkm8FSgoa3PexyTSJLu1A4hnv2yCAK"
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
