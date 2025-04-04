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
    "4JYwHwbzHY6rxa8DMujTyA15FoMA9KNvE1wQD9xLbbgcywZgW8K8PUQXkhk5ArktAaZtjGRvbVBWeJvWcdSoCikv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wzYSW9RDHPt6yT7mnecawT45K4kkPzs3pExKr2VhVA37Fer4kKtJGDV3Mwne2gzZ11haBpsfwYpvVP3ucMM6kgT",
  "key1": "2TE6e3cpjNhEtbAnAib7FX5eBsJwQCPBF6HUHyr9qcqfmsKW5h3FvBXqPsji4a1wMtGcB3EHQbb9Fxz5dMoNx5Wb",
  "key2": "33nuPSteFUzfRzrKwWFUPvUJohX19fF3q18ewDvL6qaEwawobhrN8Qc86RTnwf5KAnpr8M6PTvm6sfZbbJ1nd1Rt",
  "key3": "4siYSJQ76Zy5FscZGVpPHYt8hAEd4HQbeoJswnGVquXvEpxGFJEt96DTF8HnC17scVaQSxsu743EVFqGwbGwb3Lu",
  "key4": "5TRsxy1KinbFueXhzjrBXcNzDF2p3xCQiQqxByY2TDHFaxy4om5AxP9spuDu1F7rraYPWYQH61E48NPSqabXd962",
  "key5": "LrUm1KSP8EQ3FX1qsk6NByp3SLVm5YrKbv7wBp1b4EbmY9MQH6YrNVca1nxDYixmf1rqVcAvMFV6mewJ3uayzcc",
  "key6": "4gBAQQnJb4W2GWXTK9GtrqvqsnWE4aLupyisiJ6p5V1x1wbBRSAe8Q2zTPbzXvgHDyQ4hhcb8xHQmvsyMoBvMT1A",
  "key7": "vkZ7ckS5wFtuMw2WHrs9Jd3rsFKcZFRBt5BDMovUHktGmLf38r64x1aJCMbpr36CkNLonKbVNRAmCwhWzkPDcAa",
  "key8": "5FgWkMbEVR8qpq3E6Mc7FbjxkaA78nxHokxJWDWKBLMfveJ94iohG8C3Kaachb5nAu9WRQrbUppytzSirToAALJA",
  "key9": "CmPpCuWDvVaFkccPBXSFjGFe1SCHGQSsLAXzTDeLTgnbvnJjGiAPvZmz6Tujqwt9kiNRTUo7rqZMqpq6xJnH55t",
  "key10": "5wVPJcyLiapdozaQGBinwruZyh1WucSG3i9qj8kVubSoegUxwHe37kdjmdScYJbJrZWoCyE2wa5GoXtFgVnCiDAk",
  "key11": "2RoyGxdS1SE5tzKz63Bye1kJ67v74cuYr6DhbsezkQopURDPW15ZM8w6NH93RWoMaXkbcnncLHrBv6HAyRebjmcT",
  "key12": "2UHm6GQFSjkZRfvrsrFqJWcUiYyx35w7Hh4EpLkjW1LzzsBaaAuzBYVYjc7bJgqVYJW5wPoAomjTNfZ8WEbskVcA",
  "key13": "2atRV6aSkuvXdt4Bd8BWWLr2ueVywtxvuT45PYZ3pFzs7DgSzadmfty2phu55DYbgb9XTcxkmJcRYRzQ4XnafEk9",
  "key14": "5JvjzLfv1Pq4fqQ75iGZUMY9sFU1dSFmPcHBiYVPdT6fSX1JxyrSALA8FotqsCrPCLfU8ez5tz9wTcR5xCaYBQM7",
  "key15": "2yAhQpLWU1ztHptEmS6c3ohxS4NVwQ7TCY9EqKEc5q1tTE7stm6hunceyAMKwWs58ttU29ZJvwHfdc96qG11ZVbJ",
  "key16": "4VToEM8UrKFgMdVU1Gta3NLqxNx8uMGk2y9Wat4ERuAJo1CS51pDuJX9NmzLfRDTRki7Vjjfe6QSd4v98xtGBT6B",
  "key17": "3cqQ2KjcaujK9P7dWq3RPeWXEkwqpr39BkspS3Phr1xsrU9mfRQtRCAg3Tavd6vkEBdCw1vH9LoC4M8JRzw1qu8q",
  "key18": "iGX9ZRrrSLgUkbVReUyj1K5NuMYCSYNuFeWMAhbxh8TEkqEX6qdWNKjVfyqe8SVXTf9bYihu6MAGPEfEtWCE6Y3",
  "key19": "2PzdKMbSZdAvqRGekD18j7L8YnuvG9aVEj1k4yRgTHK2iGCVDJXS2kza3oHMCUxPXwADHh75e5k1grjbpXAPNdNU",
  "key20": "5UxpcaoLrm8kGk9cU5cPaVNZnGb1PFWXA2yKHDJQLB426uSdzu9iT97htvworNxBMp5xC1DoFrngqeoaNrgwvGi9",
  "key21": "3CWFMyXFaLybUFgFSTmtTYgs8rfVXRHVZuZFeAPGWBHDM6hZni1jsJMfSJyTZMTjsEiWJNrS4Q2xrgt4f36N4Wtd",
  "key22": "3pgwKK19nbXiiCrzbtraq5XhVniWxC47jkPyf6ooLge1MY76ysGuTZvdHUabGn62PBN3ngptV4BgivKS76gG3pED",
  "key23": "4bjhr2UtGRtMQcCJSjsXycvuWj9AScPjviokgJaJVZSLRFEDiEUq9gwJgqtEVWaBhL7vCsMzjQHLfYBmxVsfUCHj",
  "key24": "3gXmhi7i5pTCYapmb2u5wDvLgn3Hx8qoJM1yDFC1tTKQ9zsm5hKmkMkmxXcjxQEkXPs86xAdTebCFpQ3gf9Xqbu5",
  "key25": "5zRPL3dzY8SN4CjuWVoz8Fri8v7W6PpSp3R87q7jBt6JdgaiJvNFhZWT3Dp9KcWTuVSCvBDFmsZQdUQk3VuDpnNC",
  "key26": "56pgS6zZtaoGy2k2pZz7sxdHp8VrtjAmFcHQ6X1UfT8eexb6ucxSRfE8wt4FSDkiw477ViRzV5j3HWJ5LrhBsLdk",
  "key27": "3LXvsyp4ZjXvU3CRQqoyjTixaknDCyiRcumM1MzrDosDkJxPb54zkkAsXMoEooGuoHaCUPti1e9Y6Fo3gdPms79i",
  "key28": "5HDR3GLcpa9bmKjMauKxMCuaZMxf9BKEvotXhF7Tjb1UD5duxGbXt1sAJssijmbR3W3vZiHSTuGAymsM2WNf64RX",
  "key29": "3BRE1rvMDhrkTsheegJ4jDNAc6AfWgmf2UCqZmKQr3RU1j1msHLZ63xHLFqkxpFTN9oeTw8hGYovW9AAcPAhmLFA"
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
