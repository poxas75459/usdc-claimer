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
    "4d7KWS5qmWMfMnRErwjH2JuMs2Ye2t9c8sPsmD8sYfkuTVX5sqxyQsKfZHFAmURKuKubvjFNn6kuqmQpP1KYNeW5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kE3erWpVLcNjqv6eQ6x6KQpSDz5oHTtLUyMD7Po3Dn4RhwvUxF511KT2tsR222MA4wsVLx2xSqsaqMLY38zcBq2",
  "key1": "3mCCDTaxp9coL65TYSARzoTn4gWim1ST7D724EoLtSTsaYMduU28SoNfYVFoy7vrMGLY5isYJtHDsNp8hPuKhD7q",
  "key2": "TEuBdeZyEovFRRG1SDRPXczU9U2SJipCDpjgAuHMXmUZ4CnB1KoQ3sFXjxqFvDFYq7rN1u1idTHEgNTDbpjU3PH",
  "key3": "28XBU2paPAnXAfkeLPuhz6eRGK4kG7h7AxBgsTRKWFJwt7uTwXpsuQJ9Mm5HDV3N8b6d5KG8k4t6hjNbkFwGvk4j",
  "key4": "2fmUMYDcWoxZpe2AvpC2213pDuRDPM4utg28ZdwfBy6XEnXKNzBTHtZrgjS7ZmixwrDcyMYYAttC64XbQXXKKW4B",
  "key5": "2DtvwTak3oPveXNkHn5JAWZXPL2g7NdEEQz2o14hgfRbpvybLANZ5P6Ths97xnfiKAUnAUXnNtKvN63TAeiJRNnQ",
  "key6": "2bzE4GnNm8SaNGbtXQTdJ5w27Dq1j1UoUrqPT7yf1RQUPek9hHcY3Uh3goWSqod3HCeAFyPXGoMsAJTombxmmSNT",
  "key7": "4wPGAvqGgsW9sJuciUiEoPZNjUScG2jZa9yVmYnQLTC2AAWXBzw5c8TBwrXsD1su1rT7tiCGPsC3PJZXKCbUai3d",
  "key8": "27Rk6zbV9iKF7sNcvb4E3uW7fP9M9yVVyVo58GzxSaWXW791Q8RLXePnM9xnXwJQ9Nx6myqH7FaQ8VmQ6WxbbiQj",
  "key9": "2XSWLxPhbT1gX6Pbu25Mxbnry3H5NmCaUxPamYstCq4xUxF9m4LwMb3sY7vpRtdiEjVsanrpbRCZGGthqnF7kgVm",
  "key10": "494nrwXiZ5diys1BQCgFjzW4usiqYhhxRPrQMz5nVsr7QLpeB7EKKP7QFZb1YyJ5Z48HY78r3qWFgMtehMXHzvqy",
  "key11": "WCXFtJ57PoysrQKD8TgNAez9hHzm3UDkRUzBkToFNDJYbJ7j6Ctip2aDMYCF5UoaAjPq9XrtZKL1UDvLMDd3eBy",
  "key12": "65ExWWc7g9rvotoZHbstq1s3AEcMEsrWeFHzt4wN9XKvUhFoGdoRAxLpJd1HNMp4pwuruG4yjtAuTK3ZV6CbmzVE",
  "key13": "4T4qpvmyczjJvwR1NrSbt2Gc4tiNomoNXpDZ6TfhcP15jLAd2NJz9Ua4EcPnj49qWZtNzBEeafxi6GLUAjtaqgeM",
  "key14": "Z7vosXLjH9SvHSMyL4a7EYTFaVuoN35sq1ak1KxPRjaprrhx8WQZ3KCpT9B1ZDkHy8q7sXmfyxEPepLhwQrnEeE",
  "key15": "5bXQq6EoHFXnQem7xRpYPjaYzH36ygARsA3UCDHzTzvKWYGdZ3etkG84Rz4T6enjZuY9HYe1g1muh4LD6QJdHSVt",
  "key16": "3PQ963ryxdbpcs4nDf9LK3n4Kx5xNTKxnDDjqf5HTDywAxdmij3mD3jm7X4116a28iy6gQStZf6dEAUVKtZRZn95",
  "key17": "5WodV4AvxpUrjch5dLStT6sxRjS8LiuBvukcdgvp5PZekpyb47ccJdCThZFspbMSrKnNnPEKHQEGsbbU2Ygqq9Pj",
  "key18": "2PzCsuVUxm9C2bM11krz37LfA3CeVcGLgu2UrcSbnAbNKgHCHLzvoku4crLSR3aWDEjV3crtVZJ3zbdiutGpa9RU",
  "key19": "2hNWPQTFGeeY2gCZ4NJxqbreXccdzi1wkrmtPoe9PyC9Q4GgDLZrH4KogJDrjwiqwY52rKAuE15XMPWrDivA7WTP",
  "key20": "5kuroebYug6BbfSshRrLbarMP8SiFmrhDvnfdi1CKEDbSLXsWAXLS8q7e9jU7ekG6BGX7mLgz1pSkiSFev6jD86e",
  "key21": "2ycYx7H6tCrcMDsEeNnwjCzfy4GLWcFcmHbQNN988FB3dbtGn1Vpu3HVk4zv2jMB5vtRQLF3Px6KFVGBZgD3ZHpC",
  "key22": "45xhXzqqq5zdVacpzJeuSgWdyCgyQv62N6Gc5iFJwA2ssSYAMTdCJ7HVc3HK9tVatv7MGNWSE6yiX6vqQzVKNL4S",
  "key23": "2WFWhgS6mfWGJiNo5haMcG1bZsmCJYxpPaLcuzY63Qp4DxiPCteJRUgD4UiTeysnqxANFJDfBrBxmLpKewnAJm2Z",
  "key24": "f4GU1stAJWB5rTvucWFtFAn3BEfBWPVP7oHNEV5SKn879USfQcmodNdUeSgn6oYM8YZFeeFGJ917nXnTiuKAFJh",
  "key25": "3DZtRGodJyUXkzPhJM14t743faGpNjbM4PS2RhieTYcfhPKFQHorgpphQFeeH6iDpAC15kkYK9eqWt4A3w49FQcB"
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
