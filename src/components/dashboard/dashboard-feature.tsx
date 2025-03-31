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
    "4vruWL5BLdE6X64gH6Pj2mgTMV3S1pRrUxsBJD6A9BoFsQocnRkFNdDvDGLWrVUbRxduiZtcEUjqQC6qN9dVfJ3n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u4akuEfw9dkFh9WVfxZ3YyPVqpgMT7AMm8wcRh5Q1RfYSWMGSApPZkwazGkd9FSUFRbip9QrgV1sJUNQ6e337MB",
  "key1": "32HJi5VZMpHvm8wcGFJTbNdrdyjZAbNNFSw7Jan69svD7EZoAAea3isoeGy82CWt9xZtxKYmzzHDCxnESM1im2ji",
  "key2": "4i6zWi2zmJAFBTEhkCiUGXdG9xJWCd6L8edRaP8dWq76ZTrotCcRKHD3Po2faM62jMMRjk4zy5LeiveHDCorKPQh",
  "key3": "3gh4miBgQV4u7heBWpnKWJLdx1hHYxnie9zVr8xfW4x8VntrSHw2XjMNPWW9KLv7fx4GPd4d2HShMywzxWYGeEQK",
  "key4": "2eAyc5TcmxbmQHZpw9HXYDNgo1eUn7wJ62FEdS6Xh8pQ3Vt12zqa7EXJpJJLkxcYpBLWvmoz1j156DNB6vTKwsZT",
  "key5": "5nbKf9Jh9tiHK1MEVGwJtCU4FK91sGTSxMuTgFv5YaN8vETmSp5pea7nvKEiXhRw7X7Sm8u8rKqUb7EymVwxE9nr",
  "key6": "3SKCigWeedFfGt2tpTWTsyB4LXyaF4A4m2GVbwev1a4YdfhHgepfAVPt79oqWhLWHku5oeabm4eMBB4xoA9YCKY4",
  "key7": "31kvMnq8eVKJa6MtekqYJUH6PFzXY3yR83J4Qfns8cfft1gbS4JussM1uJJ2HzYh5fkgHtw1fUhjcF753F8RAozn",
  "key8": "35GMoMzhCdhkFc7CqJAJaFrXxnEsjFYQgdaDzvbUkutrSSPxzKNY6f5CufqDJ373RvXdDGiSSHK372JUCJFhJPf",
  "key9": "49C1aPsgbEB753t7jYEV7tvaQANFwQJFAqua2RXdodrx36iNCAzrSVCSkKK3wCvzrZuD8ARtqws7EbQKrgxP1ikT",
  "key10": "4gqn3b3pZkgdDVhDCj52UWUCKQQ1weonfXrzxhCY1WdqVUcXXFm426rMQ6NHPLzNNaw4RBhvzzBEnqSXbVn58PCk",
  "key11": "UCDym68LBmjfrx7CQvt4kwxEJT2gMNsNvdRqhMejMc7Kfsg6PypQuBN76e9m5RXL9KZPWLvUWCQeK426bp2teGJ",
  "key12": "6bQwBsQsQ4c75YGVgWx1QVvajVrPe3SM7CsCPQLGz4HdiksQZJRqGqR6sjt8aueJif4k6roQFnszBK4RL68cySu",
  "key13": "3dQaVKvPSaBkq6R4k4oo4uxFfg2ekUWmWfHs2XR3K3L6CKHgrTtdwjGu9ftZx9HAVEJEXuJTu2d3QMmPsxnSg6k5",
  "key14": "3X8MUtybTtS85PW4qJf388kcyBBxGcXpPJymnb3EMeCuemrtdYWa2s6duMYY5cnr2GshKCV9JiRhmFnRCsZov3Qh",
  "key15": "3fbJNSdzV7r5iBr6PnxPejjhkRDR7V9zkygPSzXXRnhKfzE2Rf5g6TcQzLc1byEyLUxwBdGupzuWnDbnkuTRqjr8",
  "key16": "3tVg6xDLEPWMbojQYLe5TJCoUgQzHYSjZNw4j3vuZ7jzFpiKBmvkG79JdhiupbFzrHQfpZtmKbiwtvvnuWaGgrvz",
  "key17": "57TNp37jnRPAQymMqwXPKverVYZaFHq6LVSsHqNypDoVUaZte7UJzkJ6Yuh8qDT9RbgejzGp17Asn67xqJUUs2ed",
  "key18": "5aCM1rH3t8BGJxaWQe47NiNdsyGgwDiBFh5ahNzvfkj49hxfgihgfbwQU4S2hab2fkWfwmG6vgnpoYzSKDwyZbrJ",
  "key19": "3vHTQrcURG96vQ1Fo6ERFtzxnmGHWKiU8MGKCsfcxUdMmRVxVVz1FrNf2JpfxgimPhTfWrpyng49mcoptqcibEeU",
  "key20": "3X32oHogPzPyewG77cmJNmDe6msz4cpwGN7pSAVss8AiY9zA33sgMYz1ju9bBtTGpDF7wPpbQbix5SsXTGMAuwud",
  "key21": "FDFquTcugXBypcy44B48dPYHePUAdTNzGoZDngBXRw9YYoDmsRjw148GmtRsBtnWHfYpFXPxwK1SsjJYMcX9Y23",
  "key22": "E3odXa9NSHWwRb535bjYvG1Qv7cdtjgeX5PxcAToay9CSwdViKrRCvo4pj8iveb4bBFCRNf2ugLNswCou23844J",
  "key23": "5grc1yVZSNAUZvDdHvrwmZixQW5QxERq3wxe7vHyoaauKS2ouJjoERnD5UZnuv3zTAxbuQtaTPfkqmAtmbnrh8Y6",
  "key24": "32CPzw87oXXkHrdjZroZEXB1uJ4DgFe7M7BQwtNrhds6gF92JvJvooameB4kXaCRCk2XqHJcfr8MMb3NdqBbfGxD",
  "key25": "5cMYdUcoj4mma18acbHEAngFSYfiJddGkT1wJLKsUh2V7GK19enCQU1yxFoXHuvQBa3DHircDaCCXxwL1d8b8DLh",
  "key26": "3dQyWvkZvfWcbhmq9hP9XehiWkxZdheUVgtBBZnJnUPEB8Lnyez99vibfKRfyAegeo3c99pQLPs7KVAgjr216G4T",
  "key27": "4viJBfNicJeoNj3muSyx4BQmDdXRgikUkt9tDQjezxqexE2s6tqihkKD4KMNCS8xRT7dX7DnroTt2vAWYxdRTzEU"
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
