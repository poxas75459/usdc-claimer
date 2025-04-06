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
    "24hKqLLJkCXdCHPCvc9oZHyCbPZ1Voq1GEfvZfpqr7sibM1Cf1PW84HzKzbmc8bJ3MjzT4Sb4U6qKDJCqVdyYnW7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iEizbLpdKMafQ2WD8d4bRME6Qp8rpZsD8whDxDuyJDS3PeT1khZ9YUNwEzYtQNtjHmq2YwBd6wTZan9Jju3NbtX",
  "key1": "5YJRibu7ExPTiyhfRPd4sCHPnPNcQnLKLcCMHN7KYSj9sgrmJm9nD1nrTWaajKSueGWPJKjPnUkjBFat1n9y5g7W",
  "key2": "2QUjFhbARCxRpn9XPrm3ZuWcGyVV9u1mzF6d4VNf6QGT75CwgZeYXHWLqCZPbXZPhMj711j5zWCtqDoiVnDYV52i",
  "key3": "5CR7zHUP8UxyjAixkvgBx5AdQz9bEqZMnaPq9SFEKn5VjnV1wiwv6CT5txBjqmDGQAzRZbktxLLGnsNXLNb5At18",
  "key4": "51M3dBigpELZy1hp65H7SkpEP7pYKLcPERkxa6fXiRDo8nkmt448LTmbyShbzLZ392JSof55nbSZHv5p55GmqkKD",
  "key5": "4DC6M8M3GMeYrHCUMgKVx3yDekWkBugdqMshWwGHiVqiR9asBab8gXbJaV5W6ySQBKEwSdzmNgxpKPB7M7Ea5pWK",
  "key6": "1qDE5ztYvJjt91AnY1BT4c3Vj5XaGNEJbtTRZgZ14zcaFro7EXgMCPBKq7YR43mvpdeNx8FcNeesdWySfRdjfhE",
  "key7": "5xLq71Z1UeZdzTrKX1SGWKLt6HmTXSLtRTnxbjwLuYiujw5nxVHWeXeQHjEw7d2QjiWhT4cLkz4RgSCKXfkLFQno",
  "key8": "483GeZv1vovkNNXJppjSQADxkyD2Vk8XMTouwoNs8vpkG9gu5Kzva7WHM2Jkz9UyrMnGwJfSpNABr4qduHM9GWcZ",
  "key9": "3LWEfUKnPVamEvFBT7mTDf8NANF3DBXcy26Qgku1RSZXVSiuofMPiE5DD4rT1nq2yPHCNtyTRiLEzdBbN7awDAV3",
  "key10": "5qgvGsZzd8z57f4wcCQf8JktEb81PzVaB3d2y4sHS6h7ED4GCpn9dxpD16MZTWxgkGK6JLPXd9iUaNJT9r1KNugZ",
  "key11": "46Y71Ru4zSCh7oUY5xufiR39sFFioGET9eLPVu52UknfpkyY43j5UFTiJuFVxf1rMB4K7viHcT4Mp16Lj8Nm7Hx3",
  "key12": "4MoEdc4bGdAKAWH3AqWX2CeJRjtapm8z2YMV7LmBcDboR67ANyC8wj6AtPJYQMJT2bFR7XoCbYx53ADwFVtDg2nJ",
  "key13": "2yitquRvZda5nz7Hj1B8HYM39ketKbpB4Utg2uizVNoeRSB83yKyXQY2QuB4Ggv3QeV2obTy6dYLrJCEjaGbdrpp",
  "key14": "4wLkUtqFrmu7AxELzQhrhsSeAk95nJri1K29w4v4TWiyLZRNrfaiFUhU8tu8Wpi5Q7rB813ubUbV6uST799oQojj",
  "key15": "2WZHgT75xxgibsLNrTsk81pEjdMPXqp99HAU97KGsJUSrHEV3nkYCnPUC2u1bzJUGo5eraGCtT5ajzrb5B51Gmss",
  "key16": "2JDz5e2pwfMnfpocvngUcjaYQFHEnVdSXwFs3EtmZonvbM3TcSuTwYravatPHAMihPJWZargKxfQpfS3NcqajAij",
  "key17": "uNfdQ7ei8R39cdJySYfSDwVk7VGAiDtd44FFXRfE8qgPbuvZbRWAgcML3AJfME4D8AtMRJdDiaqm9vjHNH8LffM",
  "key18": "4E7DjkcBnVugRokRnpjbMVQCgdk5r6hQG48md6h5VoFdYvEBerS5ZZNBC2JT1yz2FwaxnoHVC4RtpdEzER2SWYa8",
  "key19": "auoqvdJ8XyKoVAQKZo8c6pSMhe1Pv8ke1Yx7Bz2QaBc8a4ArxJvsW9Qr7oirjLJurpdd8noBCWwPXtZstgH7Qto",
  "key20": "2Nua7pAsWbUMYV5UDAudi8Y33meaZRxaTz1NPFrtDvYoAB4cpEGaf9PhDhecv8DB8nzcZbEMrRBDoNsLLMaEBwJZ",
  "key21": "3nPz7RWoErdjHBEoyPtcbVwyEJQXtS2dvq34qLfaYruyQCg5uLKG8iB4TUGuqRG5fcLguQhUPpGTjpvPjLAN6Hsy",
  "key22": "5UrzPnMqb6t2zWp5eDamikxfkiEboiCfkiiHqHkUag1MdjkRW6YV7JrJywDVKbivDSpgE5QsV84gRmpHrRRKPWFT",
  "key23": "5Yugvtay5gZnTRCDYWjCnNc7HuREFYBNB9F2JSJ2x1ffaAbPBSFqYdNXqTPPrm2CJmcrvqfVVg5uQDFkZF8JDpBy",
  "key24": "3LpNy3BeKofdDXECEND2bFH5Pppnz6KsvypLNABwsHx7qG49ozCKhH3ApfwTovLfBWzxrfp7mHLgCwdPKtgxfJLb",
  "key25": "RtZoCtZgVxnhSXFE8ovhKTK4kbsNe5UhamMkqoY6VbRzKPT7KwCa8YJBv25APFDX8t6iHE3SojJHJttosZLwzoJ",
  "key26": "fSrG3URX1iHF9MFLBkgbYBv2JCuJY2okH8siFb1k1zrXxYr76uEVDJVsQHAshybWiGVxBPM3NMEUWacTLksUxUC"
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
