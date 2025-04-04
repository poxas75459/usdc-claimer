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
    "4uviMC28WBeARAXJKh5fwoWgDHqpYfRffSAGGCjGQSphCrkQKrnNAtBde5EtF67isjaRw5QaJ3soQANrFgv69dWD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kNJx1jUoXCPs1uzGfFMkResjanFTrkfM6gQh6pP93cWSX7gBANsRxsT1Ttq1tSxfjkXJGD5pJuBnpsx3swCXDB9",
  "key1": "4muh9mV8Ynh2LTFoYDLCpTi2ZwNE7sgZzsgL8R64dCW4U9F73Mkq92m4yxrWcfdjmssZgf2K8cTEaLduaTqtX2cp",
  "key2": "5PbBSSzoToEz3J49dsKh5B9bcteXF7CCH91hKbkNADNovMrqs8YL1g1bd4F7nohs9cpHXNbk5tYP7FrKd9FxgKis",
  "key3": "32HS7Y2a6FG9K3f3GHC8DUWooVsADtS3PKomzsTG7uA3bB6CrYxTBdPWh3P4xYdajLtf6KZQdPPLjPKupboUMcGt",
  "key4": "ttvVinYt3TMVZ5rg9MWpRHjT283AFF5oEyFhBVSKLJMyEoVRo1PEUhtQcT6VaSjbDFdq2RQzgBmBXkr7phvtEgj",
  "key5": "zKTbh7RR5XHxzEhZwepxcPHDCQBCacdyreKRBYD4bLZhKxH2VV8iw4xJjvrnRpKTY7kTX6xjUgv42cZYC9yt4rb",
  "key6": "ZBpkfh1P5qwDugeVafPtYE64QDWDmjUoWo9TpGii4wPgzKvDn8FHwR7qFs5Q6Aa8CBnwPgNSUG8inF6QtaMHa5Q",
  "key7": "2nRKnw8RpQetPMu1KrjuVFmG2Cq4fjQiaww8uYcHvrDhtv4DLPdcBdhEjshpQDjeXxDNNtE7K7jXVAswaU8ML5Tw",
  "key8": "4TSbc7FGuWK3NDvmXwuJGen439u8nbhawgQvs2dWUtVdXEhc5nGLn9WVu4EiBAFas8k4QCv32rNHYpqfUanDFi8B",
  "key9": "zZ5rsej7FtUH2APUBwqTfukBHFbaau2tgyfJ4mLzEGEyahNkVkArgoWdHQ8jpxHyRQWfbGvQny3Ve3rAADiB3yN",
  "key10": "22nysFXSiyuVPKUyNYXThFcb9skYpvxWiQVuiuwsAqqWrpeP7vgQjtjN3rgajxPSbzpUvFbSuiVzVTL57u7tMy4i",
  "key11": "2YQbS49JoKuA69WhEQnVurESVCtq1FGVMBx7vfw3LAx4LrFivv4JpX8NXjX37HxffWEcRKtZfT6JVKj7CAuGhw3Y",
  "key12": "51DevEH9xchjv5MaoZfwtrMVPaZtnNgvBRkqjTpd6mupQdKrQTVTcFUcoUa37cNdUriwcEAvbk9M1c47v8z9QMuE",
  "key13": "3LMAE7u2mKBJHapmw9QRNhqpcYhzvk5bQ8gVoE7KESQxqaykY8rv8r5sYMErEdpJXeAp21GTiDQdhq5odWwiDghs",
  "key14": "JJaKC9Mxn5vk91nNPVoBoeLqgZWaUQ7evDSg9BteekyZmLXAzaddTG3EuLckT4rmHAcb1jLrXs99gm1ZUtg3H3W",
  "key15": "2819A87xd1xVZH5iTeGh6eiG9h8yPgDRVj3N6S69A7vYfTEfmXMTmgULbZix9vAYBwdNVkgtzHCpnmxFMeER9hCK",
  "key16": "3JvAZDRKX9yLUJvYTE7M6xUZV4ruz5JT6kBZx7LqFJ65YkzN9fQU6zWwZiKqA87UAXMK2yg9w1WHjWCYRErHoFR7",
  "key17": "tCduwjRECTTY68WCnb7PU5MqfriCyeH9YAdMME1JAyVhfW3e7uyk4cLTn71uSPgrQgztqC7SaHDimMrqoXahF2G",
  "key18": "66bz894cQKJnkt1YuvWbwgogMMrX7HL3jTJ1KrXyK73YTE2kEL1y6FqMpi4kCueYN5Zam6h36paDX7VU2P17m8Pt",
  "key19": "1gmXqppPX4N2XnqP3TdBueWYZVogL1xAGrVk1s7b8MKyEueCrcUCgbMF3WZNJwabgRGV6VcMu4a9aofrX8HWs1X",
  "key20": "5bxvAtqSkR6vS7wagPtD5qLtuoXMBuMwGPZZKckkEFu8NJqB6RsoaXRejTdWxcWdN9vCby1PAf46PmMQM2qoRopa",
  "key21": "5JhrqEadF4VGWGVqiQdQc2ToBoo8P9dGwFoVT8djAzEQmMLVZ8LTof5PMz41o6APxcY8gKMFy49jvYGXgt9hHJPM",
  "key22": "RqJDoWLdcKqy2fVUAC5bV5ZpbMaRjst6ZQXJ7G3cjSGamXzhGjrND7XNtCEhYk31tNNyPr4rhMwtJmcWTt8oxAm",
  "key23": "35GnXqnomVjeiAPhYDeY3fBqN1AfuvdvckpQtKtepJ8ZX2zwUfSqXjmLx7y2HxNPbQ4kZcQqavXoSBDPCqDXA5rR",
  "key24": "2zZDWdjPdfkrsnh1wPgETfXY3ketWJjqnnSw8sXgrsvP8ZHiiSrqH4BrCnWsjkUGkazJnYaP13DDJ9vAoL12XbHJ",
  "key25": "4Rdf414G69biwykZpLSFXjbyHbaZsG1To2eFHQmM2ggYS2PHVadTf9oPKEy3xYYFmiMRcLEu5QNP55XtC4By19Kp",
  "key26": "2Jc6A9BpeaJXGzqXpUZg9UNwHp3yCp4LAGRT8AKwVgdX9bP2LcNsbiHf7ZS7YvtZXd6YGGn5r4eXFeH8MVaDqmEU",
  "key27": "5yexoFznw3PXUAMPVSvBWkhEsioKLN9VQhE9HXKoFTiv37bo2hxrx2v6jP31TESJoWhH8Z7xGfSDKKSe27qN6V4U",
  "key28": "4q9pBZYPXyUYpRK6Xq76qzgSwAuLb111imSHLD4d9i5JJ6QzyqChf89X9WDszfm2WE1yhQjbYBim7HL4t8K4QPeA",
  "key29": "4hxqHc6yJ7yucTd3mpgY4ZULbQs5quivgCjcFzQCsSYE7KYc7yxQabio2aGTcR8zDHrYo8bdXGqDBupTSgSfKjiJ",
  "key30": "3XGa2PASGmUdEZ6QrwD2y9pmEXK2JAETzYq8PFwAYQ2hmCoHTo1PppsmPLFBxTrAD7fw6NfwAaEhL2b8YgUFwce1"
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
