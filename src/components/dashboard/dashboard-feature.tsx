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
    "3daJCyUpwduaAiAjRmpdjovtcy7ZbCrwYj5dYdzTrioaUz1hdo4gF3pPxyX3c6PekFmnTTWvV5pX6nF61HVmSXoF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65vPTNHduhRV1dkpwW2hpAhmLForiAmZKo4KwYrT4iHyUuSMr1RVjs9DtBNTk3Y1spduCVS75KpVT7qDSmcGvaAM",
  "key1": "2TmcJuFkiLQqTWyVb5az6DBFaNVPRWge6uv8A3Je3cc9SsjzGxk3wuEAB279JnHpzn3ykgvVyiR6NoGEqj7qyVKM",
  "key2": "eQKn6dZx1q3prNMg2jF74BZo2u2hZUW69MeLpZeHJceuPq39XKZatSfmzTL33vTQnZcij5pb8iPMFgCc9rKKhfi",
  "key3": "QJJMKT3cRSRZVJvtzzMvVe98oKKjWiWCDSzGG95MonSr8AaBXkGT12MnMEwt3XsdpqwApzXshYY1StSVe4NGz3J",
  "key4": "7HRsEia8GmF5xP4TdgQqio5SPsewuQyJ41guNyaPephsXQQdKjAyTaDXBS2u858PPESd6J2M5pyWSbyhnrmPPpC",
  "key5": "3N2dp186Z6LTHSen3L4Vnoa2ZY5p2gVsUXFqJoQtrYcJ8GoU7oa4km8YCnK2AGeiBUaf6yEbm92aQNA5C4ZbaL8j",
  "key6": "yfGYNRB8D53vesipSp5vcMaBQenCmASAUBMEUAeuGUrqzvJKPiZ6rdjJPYnnbxs3JkRBEqWxd5y9xqwpqu8pipx",
  "key7": "QoQLL7MoAcLzhU2fGEDDRJXvHhBWvts3wkuBRSFUmedXXeUPYhvGpjXqUUtHxvotzq3dVe3qJBV1M5eK2ifSkSJ",
  "key8": "3mb2HqHqU8HrWVnF6DudzpJcAZQicwdByofyx34PuBApgNvfcZrhfpaxHUS2moZsJruFoFhSkHxxELo3jitMwBry",
  "key9": "5EeiHp63i6h6pr8ybPgdr9ssMxxkbZQkCC5ujUmeRk2CqxWcwCaFjDE9JnXBQGQZzsESxuNkNuWNkrPwr7DMCW2j",
  "key10": "45ChXM9KS3JfuWMeiJaZDx8Vxsj4WkDgb9znQx1Z3A72pwwuXXmRXZfLgNiD92Y5vxjobmvRy7i1vrW6Qhrt6BGx",
  "key11": "4wZkBtmZjbxZGZYRTSgDoHh24eSHT4YX9DZfyqRUHrFvKqLWoQbY7JZZA743NhYHgfWGqJnZiK1EiYWBgVFN4YRm",
  "key12": "4VW9tfHcWuXTb9NNcpaoQ47FmozmjsfVm2gryrzUv6f1DyVsuc1c4za6Tnwru4TaD88GAemDiSqjXhobugeLBieu",
  "key13": "4W5kNnrUN4y8KaVBkSJHSxyfPeWRnhdFdEipGcNSdKfNnq6Fd3fZkBZSrcpRCUQCxbCpLZimiRogzo1z3kKmQXfq",
  "key14": "5dro9HrkrCDLEVW2eRmQ59Y5EDQhmHsRaMiZSr64dYpeNH7P3hV74XEBhB8YJkbpSfJ2hkx7hiNKBZMsncCRmMBi",
  "key15": "2HwMbqCa4rJavNFmKYx57Bf9355iJqyrgCQjqW9ZjpBSPmahgwbouDkcyPG2CWpFYMyA4U5XEWgtExNnPR7t2oYv",
  "key16": "5e236AZHvRk89AyLrodWY48tEdEqKij7nmrj9z5bvyNVAEPbe4ki2Ec5V3nii9NoFpa9gEuzH6hBgYK3TRnAALKm",
  "key17": "5Br61VJiTcbc5r5yEkiochgukSAbFTqUszJagi7q4dazvdhrgF7XuxfR2kBEGwzMgs1ocZLcu8Wc6Xn8hNZrN5Na",
  "key18": "59rgJ9akqXsVobRgLY6QPbp7udspewnGc3ohobRVT3FBUNH5mUNGHFbP1fQyFNArPq74eeFvuQ5jrJwNNpY91hyH",
  "key19": "2mbzXtNZYLjMGazCzRDKQpyEyszygJ3ktXBLQ774Kindb9d5nAhZhDbXPd8SEqfoMRQGUt4qFuDwkvNnVayTABKy",
  "key20": "5pMouDCZM2vh8hMjjktDD7zZv8yeHERfBQyVqzMqZaoqQDiAZKD17b62K8UwyoMqD7i5AgvuLD6GE9CKwBqFTXA8",
  "key21": "5Wzb1ho5e3ffH1cgKF5jsZ8MX5YGAfYh2GRhvevWf7nMFrEgUZqLkx3bCScc66XLoTeSFASFAYHQnZszv6fSg4da",
  "key22": "41955B7MTkPezPDLYD8Rb7oq9hVERKkzGGziQP8kKbWtbD8Z8cyEWcc3DHfa6yTDHHJibgdMw5QYX7cU83c5N14j",
  "key23": "44Yv2TnHA7CGPrt6EjurasaRuuMeWpX3FN4VZWpX9QcSdPnUF6DtTAueCX7mVhisYFVY2CL7triwq8qXy1V6fN58",
  "key24": "55UtGjduGTgJEhFetqFWgFRs9FWc3YBRTdDSZAEsVApynZEqV55kpA7imYRbkDZeUNvDs11rN8EH32oZx6RvmgHV",
  "key25": "5emsNpnrxvFaWyP6ndRWKUeFXJRJmyPHV8CrDq7dBK11WJBkbcV6mdLFZ2P14Lu9p1LM3GeKW3E45xesfVY2DKVd"
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
