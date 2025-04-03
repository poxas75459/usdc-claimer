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
    "4n1nAoexknPb7W5VznTESEF5fWcJqYDJKgZ9DSXPEwDHaXhH2QjnLNuHz5UJbzqtZavzm3NkQo4BPaFdEUp1wDFa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F2Fo3zFmseZorvmjSqYV31VDJ2tSeshqsh7YBCzPdKjwWQBonokCAXswVcPX63zLN71TdBCHcDTmL3vsgoFPvCK",
  "key1": "379cdcTf6gRg1SPfKG64EZWpdd55XMqMBnTARZbeJuB4DrYGVv8iBZfBgkabTn9ddqrC6HT4vSPUNu6SsPFoBAbh",
  "key2": "5jTXVPNvmAh3ySvBUdw2q6GMpKKHVVugfMxc4NnAooavfHuKqC2vxeRcH4LPu3cjJACn2ghevgsAHFEsUeWiqKFT",
  "key3": "62tcm7YxYaF4FjhaeZPa6QzD9tZkX8xXwj1Cjoyx46p97cQq5XPscpjx5LDh5DmB1XoFHUpHGasB4oZcjqyXxgsg",
  "key4": "2krgArmYPRAsgNZXutevkaW9dYmHTdPBnPSQreEyKpPsHcB5ZqeWLHyZtKCHNXypKGHTUQe3n5r5GeJ6kc854iHC",
  "key5": "EXt3MgGnPE3C1QajkFVqzNhd21RzVd5vmLZQWNqyjy7cxMrtMAhhBWABFd7VMJgyH5HLVUA5jG2uE23THJyBKX7",
  "key6": "3jzhUnsVCHFa57z7NM5BUeBn2jPTveTvy8hg8nY9YhdKi1verXZwZAdXYkR2aL2qfc5AiP1XqFCRtALNkGVx6CSA",
  "key7": "2UEocU6HLL5nmPucSWkhoUaj6QobF2DCNCFnFBZuSrfBkZWaSuPDTwjGaSFm8VV7gSxCgA1hH7uHn2uXrVvoeXoZ",
  "key8": "4Xq23dU5mWJLMUducpZXgYp9SNourvVemHqHQc9ECvx6528pyq9Myosf1C22mXghpK1CJEzJfYsfh6id3nhahjqs",
  "key9": "5j2PBc7CLNLU4peiwDExAqywF4PLkPLnwR2ES5KfDSqCvtv9Wto1UXcaadWPxpagH7JCosoZZGqSqNWdbJs8sP4q",
  "key10": "27BtnmCPepPR8LwPR4VdYWieuM6t6joEsQyzyzipiEjB5Rca9eqR4d2txisbPXkWUgkeKp2DfWghMnQSDt7YpDHq",
  "key11": "2TmrbbSti3knbSYg5Ag6m3EUTqK3A9S5BDgqaHAXWVFj5GZQrbuZ3zLf5em9Swk68jJYmcq9b1S65uzSN3WJBW9V",
  "key12": "5EZJEYD5RqBU59vgFd5wkVunjBHn5S9hYftdb6wXbCMDrjWmShbbtkN1KKZyXvLydK93MrQWjP94ZfpiLEx5QSBY",
  "key13": "4AYMvoYhhAS85p8g61egdvuLhkSs7kPLwke8XPespkar2bkdzwLLofQvwJc3y9fb7fdfVHGFBiQ8HweUDfNohdCD",
  "key14": "5ZrQe9qprxpZg3ShHvkS3u7Ehosbbs4tqfPgtYtN8fXB65gjuLdQ6CgHrC5ZkUmdsnvN2qdYFefcGesFDde6SwHF",
  "key15": "4exZwQojQT2GTE5Mo9RdXeGQ4J8hntqeK4vXxe5ZG2cmGmEB8GLvt9LhmLCtfAAG7iTo3UfxuwhBArigrNXztjy8",
  "key16": "2dfYJmD6nnUh8AjUU6g9qUqLGZKYxEef29gWh8UF7JTksD7hwNhGRKY29EmUFW2Wfxg4q5cjmGy6Ek7jxQQuW2zP",
  "key17": "2txWJdcbjckzhAX1t8GM1SBM7Zyz42hBnw8THeivJXQt8AMu9CK5fY6P82YVmA6VvN4AkamvkeeqZTDiRZPsV46Z",
  "key18": "4GFn9iiaUDKsu1ZgqbyuFTN41nghKK6qv74R977bh74FxYPVZawsDbdDmog7TXJGd4qJ7CCko13oUiXh6FCYPDXN",
  "key19": "D2BwzL1TxSVNmuMDDy9VkXcckmWAFvbVS39x9q5qi2BzP7VUMyDvqGR5jtse4ZWk8xgMnJjhMk2KFpJrpgMYU46",
  "key20": "3J7ofMwHkyaef8cHXjgsDboYCox6pUJvRRWBWnjth9UHhXZZJeKDuVtGeADscUL7TouGAbHYyhe38avBFAdgVU9",
  "key21": "5ac5mRmPSqZ6uyNDccTU1ijpXjoD4LhS98vPqt29BREcuEwqcxAaYfFm4zTmxSdrkWsN7pE6o9CxPyvWYXfvFm7c",
  "key22": "2kXCGc4zPt8ViMqkWoN7udFSKzZpMYL43iGAaSLECQ7ZWyqFnzSkvqj3eSQGxpYzqtumJhqkdYaimBxTUVWoSaFj",
  "key23": "3PihcagKp7rqoC8a6DVyvmNT7Wibp3dDvohRCzkkRZ51vJb1PVSJNcTZFnCYQdKWNKKHeL5rwyCC1GvWmgSgckRq",
  "key24": "4Hc7fzST5cGGMFhKDq6joEgqqn1woiokoLPbtVzi9CxErAiafAp86jFVTjZASJSGGs5TLoFD9pokc4NC745xVXwc",
  "key25": "2n5GhZxBNgiDbHnsSUfq2jYnJGWHCKKgtCuEob37C6hKiNJrdioBqeQ5BkScqWTwW7XeGuT5QU9iPhu6pnaBiCj6",
  "key26": "5o334mu712id3j3BDxSSpiQHtox6bNrpTmVUm1ZPTcAifpjaFwpNuviiTkSu7B56CikhWGE3qhL4JJof3F5cceNb",
  "key27": "49qKxHahRiPr5RWnDQJAFiS1jEdraj2Uxg4iQwpxXHDpSdM6qPf3EqCF5444rqRzY1wJ57dNaUKKNCCEFbrvYCgX",
  "key28": "5WVKGU1K4VZaavCFdXeEmTKpswc8i5x9rxTSw3APZa4mu7GMRJ1MXWiuaoHUDgyVM6yiASxhfshuGqzEHcjU7ao7",
  "key29": "5BQDhasDPCYsgGoozos98Qzcrhp8zWX4n6mVLVdRaFVWbqY5swz7Zf3Fpi1MbU8ktfZacZADm2CkVbnh7uWXjXy8",
  "key30": "4MoqkWQyevd5CAMBs4EbEko8zf8A9sStxV9B9TFeaWoydLKw7ChjLzcjh5JbMRGCATMYPSjZpT5V4jiipjCkqsZa",
  "key31": "3CcnBP4rctPYAsdK1nd3NucoWFsevpWpuTvVq3KLm7knELTnKo9W5JczDnePSo6YZY4P1htqyUe6gHtCuc3VqAQf"
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
