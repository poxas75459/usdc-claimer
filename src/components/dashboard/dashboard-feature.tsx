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
    "4YcupmHG1SQTMsaX1J3tRDco5Xvdh6hwGJongBmvxJ4XPMAk4KcNkoiupEWRxbQr7o8jmBGXP6BBoyZsH87zo3F6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33NB7fSFE3bantRqgtX7YrfY6CumGtSPTenftzW5C365yw6WH6pUemYZx4FM1HG5o7ENxJd67ZWq1MG6iSt56YEn",
  "key1": "CEjRTGhCwUhKqepnpyH7zxvEJnEHYLCGUKQu3oXg9Qs9nHUQoX9A1WSzChA1dtFCYhERL1QdDVgaGcjNG95vWC8",
  "key2": "4ehiw3vGnLBCFZPjnu5tQrhzi8aZa2JTu88asMfTzqydCN9RgFZaeVwacW7Bap7fFStJXdw7qwL4YGA8wd7TG5rH",
  "key3": "jvdk4LiLmxbCiCik6dmpLQoQYAekBZTEoX5bbjiswCQ1BQqo9JbsVBDYMA81gFm4FW5ot3iRFJcUJ5vu5Tkgfas",
  "key4": "eMuYpmfKuhu69GuWC7CAUbbB7byd2qrjtXLCVa3r6GunmMx3o1vgYM5T39Z4cseu6YoE6c27arFVzW5TV9ACCHY",
  "key5": "5aeAW3kuMMGWQZbnBLCUeAQGGUWahrJcsZduYpQeC1BHLrCujYx4pprzDVJp47JXrVDE8YyFhNXFxW3LjqG9S6st",
  "key6": "2fp6DgRjknmuDozBXf3WQEXAUd8s43dNFxCUaPCu9QC8Y5MXkbHnkUKJKdcKBps8MkbWi94NKkyZt7ABFLesLige",
  "key7": "4b5w7nYLf27FbVjB7PpDESTecYM9S4bDf6YvDvrXHqb5YaiiCKgH969f8Dp328Guijs99tPBunCR19wWd84niV2B",
  "key8": "22hLE3PnhFo1SBLaZiHDGaBZAn4Fyo5ZoMwzEqAwkj5N43H7Jq8TDEJLcrZYNhSnpZrcKN5JZge6bz5iabYLVn3K",
  "key9": "2rLXE3pr7kr5mAM3Y6kYxM3aSkLWyhbcpQzjaVbhkU3rqvo6T5A6fLoadjYLD3XvQhV8EWVVBFqTfm5ZcDXW2xC7",
  "key10": "5sA5E6Gvz1m87rEadbqfVZ6gLs5mbwzEqjbqDTfamZiwRe3ykoQA451m4ELS1LciNVvHwiG5B3JLEgkqyAwmrQ8d",
  "key11": "5guoPa2CzZbpHZdQ7tdmKiFpNRoQX29BdJ8JBoLNokaWzyyv2XQiWRft21YQoFHpwfbuLjtF3yKgDdfnRwJkWdeP",
  "key12": "2YJfiSQNF6PCu3U548HuCUayZ2fqTmUsThEXx5gZV3rJfcFYzghcuNCFHdpiG3jvdi1rV6B1gWj2TLLDjh9yeESd",
  "key13": "31MyezeuiXZ662zB237rXLu9z72HmKk2ZFtiFjfdYnKEoWSDcgDz1rYHuoVYmGAMLY3pYtY8df7oFn1DfMiQQMgb",
  "key14": "2hNS2RczQkmPGNXJdMKKo9xyEBDVaybob2pqLYeCD5QrBd54b47xaWbXYzBxEwGNPavvryQEYm6Z7S29wYRJfeUW",
  "key15": "4aKmmHvMNcpyb6ivGfizGYt56Y6TMCy5vtzwWCq2fyDPGdkxVGBsCGivnWDMfYSsXbuiJnjSGcHmv9W9iPvq77Qd",
  "key16": "4GByHXiJdtpH9uDtjN42kNDsLeQGPUqcLi9DWBguuNthjY8kzVRk7SGQX69NmbpXgukat2G1Lx18SYcMYQwDiwoc",
  "key17": "291LLGLwHkyiDBBGBBvzki7hGHji9QEJ3j1junnx6k9aAX6QExYutZucuoTdv5tykbYMbZjUDGfjVqMFu4v2BrRV",
  "key18": "2qxMt7sErka2BvXMXXFpec7uB9JhYejXrRzaEvQdLQEKLDQ5rnBxVpLdhvrc8o6NN84iYmLCtmgGQxqZQjixoUbw",
  "key19": "2u3LrFWwMv5zp9Srju2VUxKEcSJXeDg2674Ss1FyfQ2yDhwwrPE3A1CTdQwWHaWD6EnyLtdG1SmqjKUuCiJTbawj",
  "key20": "Vn8NSbR88QnhhFfnB6zxy8cXaVxZXdnCHXTsdgg77cv2RRvfHsd5GoVDCPHst5pj14TTs7W2XbeMNYoL8qf85ZY",
  "key21": "2DLHk2AdNoriuBvunxHY1f1Zpr1wqMawJNK8UjATUNV93GmscT9yjeHSigJzF1tpMtFgQ9u8qRqPgPvVHm18emcg",
  "key22": "4dB5BtPt6Se26nPxHTT8HxYJC7iGEUG6ASdUqxPAPRDceGypQb5TGXZThFXQVjK9YhiqRVoQ1eftpxdnhNbyHMaR",
  "key23": "3KrasQXUopQp95mUDw91cH7Byf3VpjXUkFc4RuGikExa2BUSYCEUxKbgKSZq4wD4KZw2grtdFLsZJ7hLm49B4xTj",
  "key24": "3wTx35B5XWCfqWjMXemuP8QopuiqyKBsbhEUwJZiqZtqfed2ajfE3NizNAzxDxcnJmptUDXMemYHJaweoUBD2UpM"
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
