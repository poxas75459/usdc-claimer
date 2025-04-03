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
    "4ARW9XS3sN8Enz5F4KF7iVabwxDm4xsJdDCcE3sW4shw9kyXXqVEy66HKLa9wehFjwgE3XprFmGYqvarUxDm9ELr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V3uHUKEd5ykBPJjoTSVdCJEGpRd5LqdC2Fya9Y6m9ekMwuZ4KJdvat88BnWeY82FC3tb6JquRipsgMVQD5RnEgp",
  "key1": "2mDGy9Dn835fscamUrjYzw3oN298DKa8SBCejvGCtev147ib3KAP6SoikdhqHa2jX83j1h8ARzJsT2jf2bMQhy6V",
  "key2": "4VWzvMkLKedun3HG2N4Xfa61ivmoM2MLvkp4p5mS4h9gXeRnzxmeN2q5fPeFad1E7MTWXBcUej6P6jkm9BFKoj88",
  "key3": "3FRnbhNqU91fMCgvoxcPTLsGEU18EfcWY5gpkFbgefsP8a5veFyVos1sabzoNzxPBkHYrzFJTmwMVcozYP9KeBZV",
  "key4": "hmnJkUQqnuk3MBD3rPAExUYhUt4EnjgPYhTWSdL8SLYb2DvyY4j3edqcq1usa5bQuaip15EcaiK7gZg6ppRs3yT",
  "key5": "3dV3dSX2zqxcCJfPMggoJ7dX5BdnkKnFFGWSp6zqHfnQwuS5yUW97vTjfi2qxcQ34hjmecxdHwrScL9BadqbNjT7",
  "key6": "E9FGYQwtsAgt3u1QM93Dvj7AAhstwdSscwTPHNvjC2GKjYKUzWDWhgEjiXKu2rteTsGQj3JESWjeuCsU6ddm2NE",
  "key7": "np7V98ViLiLsfT4UxyZU3NkDvwVpbfsS8VJRTuxiqhFrd3BRhQ8bXXkfFY4TFGVciRx8qdh4MokFXviR5LBHCVU",
  "key8": "2FqyArku8vQgiVihnVcPKfvGNnUEpGDeebiJgpzoDj7BtKGreBe9LUHg3xsFiEUEQ9BMSkJWcaRxz9WredUSyU27",
  "key9": "4KrJpjWn9Gy6zaZtrTvGz3965yg2figW35XsikTQETVGbi4zEQ3tmaePS1Hxy9ZfeJaPPc2HYJER5HXDMFE7TGYK",
  "key10": "Ld7b3SmbFsgeq1f1Z1ERLtAdv1EVrT7HLRDRzxZqiYagxXTd9hbKVyZoCrg8GYY8xLnCjfvECot1S2D5yZAix1y",
  "key11": "4F3CTNWdqaxpdNfF2AcYayB9YZXMkkvdZduEo36fUfTokPL9YLqsd1An9ZtHAEUJzZAu7SgtqfaAXwrVafnoY7q6",
  "key12": "4baqaQ6Lur2V94uzyhqc8oQhnG7y68ViaorpQBrEAXAFxuPTVi2Bf8nCabgPudLqoduscbLNqr7MN27qZeQoYekd",
  "key13": "5LCFnwt2JGHsraGys8VsUaLHkugCDUVst5whbp1sE1cdjL2WmMTRvgfFPN3f5HPSSKL3oipH3zxEU7uvnxs6o931",
  "key14": "3zERhoSnorf9aoMXp6N47JpkGZYt2rmhQTbP4zXgdApkawS5BEDp9EEPzQaZUy4Z3QBfFxdH3k6U6i13FdSfKUzw",
  "key15": "2t22wCj4YTKHowohgusVaeryR9k5AFG4d7go1pEEjrdN3N27MVUcwUPCRCV1qoTLsUSzeYMygWmFX6dBhuiQkfse",
  "key16": "2xT1du5QTDuzhnR2VBJAKVqcpAELYMBp3uKT8omZ5gvmp6XnUs7EWiNp4GBMu9jb8kMTN21ioJy4Jj56JutB1JZr",
  "key17": "2k52hnbbeTiHvQ2VAMAzZ5rqYkBY3KXwRawNvUBeDHL8Qr192GKKsfKbcS11cqZhQawYpP5rSfWsyGXE7VHxfQPg",
  "key18": "59dbxEKuLQ7P61gzgSMZSBzuecUaruk8YQHbjbUWyvykdAWpCjQtocHBQARxxADcp7btSvXYfAcTTQecmcqGr984",
  "key19": "5sE8nT8a8DDdxc5xZyuTfRQfTWwdXy67PfhZXnv2gmxFgP7Nk7AP1kkwnBS17rm7F55WhGdHqWXXVebkEhw6SkDj",
  "key20": "wtbFtoRKcwmzPtCcPgQPkniue9NSkwxgj5dJWCE9vZBMVenNqVJn6yNxhWGA42a9rxkWndiqJBT4bWGwQBracaY",
  "key21": "5esZy6kQAZK6DUZGmT4s8cpcNbnabjBYJgHAevKwf38bCCnQujAEaBPY2LGmHbknDVdXvS9fGonphHpdXscE5VNx",
  "key22": "2dRytMfMfpcQswRvSD9nTpq2W1FDy1kXqnBzLxuy7VdRGLP3nVHVyKL4bDev5ssDcrQybKuNbhybsvWEBNev8n7K",
  "key23": "bxkf6M1q2uNa16pohTxxReV6K7gbtZEMCY5NuhwCKyVgAaVgj4bvNNSGwVyQHfxbPu1oPVM96GEb2cG3PGbEmLK",
  "key24": "2TD8Q8xQevJBbN1FecHaVdScpyruVtDntqoSMx6rPACJNVMzdoc9E1Z8Yyhy2YMqPpyecJrJuNuFf2whuc2sbWA9",
  "key25": "ZJ8Le3bTaAisZHs376uouLxvyWcz5LTE3bjY2k6oXz8dEtDMo3rEzwD4tkxAc3rDsdWa5zGPY7qKD7MoGqJpkc7",
  "key26": "iLSEhDCXXLcMUi3fpqzk8qAGMYPKKqsJC4h3cuNN87MvJqEcRV9SgxYmq2DFMc1k4diZXMCGSyLL7UE3ZtEfWCS",
  "key27": "5bhnZReFyQKLETLjEHUoaZASaJi5hD1xHFyGjQJxLEexbvzmzNusMUGxchx3AHnorCiogHodeaSLSjGdHxXxr5qB",
  "key28": "2sGoDzhUMvqhpaxptgQob66XXRZfeU5HEctCx4x4ZP6VHapKm7LdxDbK69wBjh7EHyBpNc9edeSEaAoT3wsQDGcx",
  "key29": "3VeeMHp4oy3AHdbZoFwrQQn1PxmXEsfnUyczocnjUTFKSRY9LCw5XkFEAzjaoH1oR4bhNwuZDcYiaT6gWPbvK2xf",
  "key30": "4rKRNmqLyMEtHZZAWtYFrqM66sZjyjKE1UGbzSWTKtEXRoedC8J44Jms3bSAa5ZGb4xa8KYuv6HERQrFUi2uwNhf",
  "key31": "2PV5HKzkys7EyYg9ygNPfrFNDw6eX1m6jECkZy7ok5coW8QVr5dz8j9uiENFsn72acf4HaNDAkhN5ecnSe9D38ew",
  "key32": "21Cu2wtEW4YmeWxqv4wsyqUY592v6bGEvrvBNEZ7bqoQ8V7BQkZJ7iAwCecqnYV5tVSbjUXFwuq9jTufhKNEd54J",
  "key33": "4Ui8iKkCRfn3fNFfUtbBy9DVkwiVsVYBkPrnC7yUKj6VsJNADwS8tr2MZRXdYVmT37TfF3on6gR6ASjUwdsi65zn",
  "key34": "2tAcgp6YaSzPSjeuUFePUtrU79fy4XbyfBsWgF8LZgyDrHJDiSvDxnDYrWQ4HBAxTLmAbvnmePCU2SfLSE2gtTjG",
  "key35": "2BhhRyYxjq5g4M7xTKRmCqpubcvM5vkL3yuQEb1U2VQCLYEC5KyoLZHiZd34yu16Ucyy7HEWY4nY5nv8tA1uptLi",
  "key36": "5UF1aCBC5iKzGsMFVF5AWKPZHaZQw7oSsfdnZdVGS4cLMfZjbzWajGAWKcMPLSNW5ENpjVTb9Vi3LWLhDsJtktyj",
  "key37": "63aQoP9NQsZyqWkmEzEPiirTxTUsgSFxNqbH5nygHrxTCYobS9ciUFnXQyp78nXgA34jFiArHAU88uNKF8R5Eb8i",
  "key38": "4SmgeppL2zo1WCNrr9aieaoYnfrnuJ3U885ofZf5J1roJybb8Sv25Xqf99cuf8HYFSyheYTr25DmFQbGg6fnnnu6",
  "key39": "4HEcaLVdiUePYeWfihRbReQHrq5n13tsKHoHfgNWMUSHprhyof2HVCQwL5THayyRoKNbtFw2tAdYqUbTnio8GZ88"
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
