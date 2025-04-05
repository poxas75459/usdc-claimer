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
    "5RejSADuAJJ58dZDoi6EyK4ggBNqwuG7ZR8VkANhFyx1NRSaLJFCGj3ehJaXe84foWZdHKaCuCKhGAeW7GcUuEVP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25Cm1m7JnXensqVuhZGmiCg3fB4nF4Y8F16TuWBUzNfbo9SxxH7ieYc6PAT92MrUdpX2aaaCpG5qt3BKfsjyRhPi",
  "key1": "2ZF6cRCkXQoUMkFY8nxhvy3EFCDsAzida1EBFSwz92Qc7d4DfRYQQ9vCu8Dz7Gxwt9tdvz46Y6FQpt5DBd3yp5Xk",
  "key2": "3ajGKzK2eFEhpemABd7DLrhAEqKEeoEr1wv7i4k7z9BHyfrqKvkwH4hGBzxdodHG6o6ftLicpC47pHyLtwJS8utz",
  "key3": "2GQMLSuqLaUCpBGYWt7XfwdU8QczEytF7FcvPXxb2iZWZP8QTK2egndLwgneJcHMKx5S35MpVgo9CAUC5ZpQ6Mdg",
  "key4": "3BBHnxFMQc2H3estwRWRbmCLoyF48AYDibVyihq33KXxik2JzVgNaufpVqtEcZiyqyuWCvEoyrQppeEdyvRKXTvY",
  "key5": "5xZEJoPcGdQk61DXxqchXJ2v42YSxsMN8zFyBEoG3JmdPtm3hzFozJf2PSfQEKDnwaFrLDtGutrhvx1kbfiifZEP",
  "key6": "C56m3TD6FQQi9SP6za3Xiti4ciVFqDb1nz7euriMv8Nupr1ahDeHSqPkGNK8334ubi9U2scoj4XcPZZyi6Ztsgx",
  "key7": "5PvJETRc5oRZHc3WjKU7tJTLfFDeDmPxbonALybN9Tm591WWqVkqugwN6jFoY3iuiJA8wq42FnHGcHsjkursqRWf",
  "key8": "5m2i35msZej46Sq4p4ADAxRb4CSqbseszo2EfeJ2frTRr9zLqrefKjKwhXPzcj3UfUqxtBjvywm2qUFBisHeDC5c",
  "key9": "6Zvn8oGW5HEpDk8PFghc5RNmEbwwZpmSQQYrRqeotiFpHTqRxetmo2uyn5HgYQVL3bxF1xqwen2xjvnvnKwUwZ1",
  "key10": "UKz9Vgqg5fQ7hPYu812DY68PMzaFTNHaevMeVYJxQHnbHiNmcpLSxqx6NZpbYBmwSFA3hahqkndqkvbTmBtcPno",
  "key11": "39xTNpgeaksVBhkRyivoek93Ka6u1ibh8Nff1wuFRa28ydbcoRVUMboqJ1bhvsG6H5dzYrasDt6EUhXs83fjJ91u",
  "key12": "5LtbpexhZet4oxBuCaXGMemJxCgBtHWRogUhcYEMx88WfaL3uTAo8Gg9Xvf7JccSeF8HsT2kaAL5gX2A3wDF9pfY",
  "key13": "fs3snAyMU8JghbE3QW1goQKybg96G9Mxdzm1o6XQP3sADLakVnZhfJCmupVoY4CUrtx9UNizUeifoaTk6gbSFw9",
  "key14": "33y3teAH9En55nUe7HePST4EEAsKzynkgbaggawpe3gHC6VCypWJQB2RCtcen4edscA8bGUMo6cVXUyTCp4S5Ggv",
  "key15": "4GeqXiH7beyon1Fxja9U1sUcFAvFhBbNdyPv8yyaVqzfJN1bihThAAQtw6iRnUcAx8FnKdekdH3xU4F5oBxC8m4s",
  "key16": "F3wAPa9NqpNMreKQTKKGrtTyfHne1mKogn62Mv2sbEHnZCWQk2o8vgQySsKkPAx3ErDcW8XRuH88BvDSKDXhHwY",
  "key17": "2gDq2ZACB6NtzuLTa3JReTjpjSq2WS5Hve2vvdkSKxwHg2k7WSgdqWEtPtf13rKNKD6BF6KZmR9X748r7zPEXDWk",
  "key18": "kgZaMAnsrFq8DextQS8SPHGwwhXnnne3AnXBXdmhR8abCnmW8KivE3v3phiyBJRWdMbsjK6f5t7u8epaWjz1jbh",
  "key19": "2XPmS51VQSxk6w2wD3B3MdpTXh24kAAko8tuCMA13nbfxoJQYUsVEizP63KRuzKWmjJvtHBFbXoU1toWoQegG1xw",
  "key20": "4SURcRDJNqVspw7drfwbqja1BMgXLXjcW2yCkYU9DFXwZoFK7hMNnW9YS8Vt6n8gC4dEF9sqP8DdYZ1aH18wZr9j",
  "key21": "LKZsTEu1xwaXz1q83H8jFNHzHB3siT6hNNnRbVYQJiEys1NGLKc8gUUSr5ACik57ktjhwbvs2hxVTX9yanB5EDp",
  "key22": "3HLhrHk1ZGj58ocXyWw6ZmZeo7RH9h6ruuH13FXV8v68pzz4CbmC7uAmyZV2jysEkNnAHWvLedfDmmgusqHf3sWG",
  "key23": "4rR1ZwV9KXztHtM3gfcUZUafb2eBky3uKsCBnRmZvUJm4XN7BrHg9ExFtyqKespaq3gRMdppPBbqFKWNT3Ctwcpj",
  "key24": "GfyvNcAGzsffYrJ2xJjNQ6VxoqyHUa7QdrHS4QFPucskafX4npvpUQqzYsnHrSWpocf8ZmrpQSug9PWTSbPo8Sd",
  "key25": "3XMCHjNZ4La45kJh9KrmLxEgBPKKC1RhpexasVbjwhRF7RipEUv8pwpcHTFCx3EggsQgFBEYe3HwXkAGjHFtPMi3",
  "key26": "rYkUPBr2APv5JPJNBiTk49heagHAGxv3AJXpUXQQZeMJ1KcgQevd4rrcja3f4MdCdaCtvjYDXvkzuXju5AgtHGy",
  "key27": "9ef69fd6CFviTKzJ68wubaq7ye6cuYkVHQ8qaRzp2dCVdeJ3caUM1zTuhc5zyN2hSkoRqFpdUrLKcqYcd3HC42k",
  "key28": "5amYnddgTPzyZiuGdTgi8bZRHSrCJrUfCu8XMhkLYSUtavkBrhkg7MpGZ3xyk1SvvV2Ak2qxuf7s3AzKE4rFAvrt",
  "key29": "5teq9nM2DUqBa2BEjvRSL3bvFsoUC53SoYGMH8wJ1GAs2HyHYdkXXTbqWxR5znWqxfhFcw5QentKuvNb9htSEnLt",
  "key30": "2mYhEmqb1LTbsyEiPiFhnRXZPcduXMd5nBYVtZo9wuJMeNWaw5BfF694oAS4A3YXHu9xQNWrZ7rsBHwA57iNfVMU",
  "key31": "2o5LLDWwAxKpNcV5x5ZniwB7sojCkJcjvrTzQkwX6qUe69J42xadU6W7HbtXz5hLiodbyYmzvdTNi2m37croxCYP",
  "key32": "3LJpg7dpfgmAY65W8QzRkyAAFzqYpWVEPXoAttnAqHdYLhPwWfCn44RnEk14KCWSFKcYREbyivDc4rrtq3BJgMWU"
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
