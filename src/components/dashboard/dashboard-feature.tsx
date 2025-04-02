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
    "36bnmy7G49i4bSGtwRGLAxBowXaxwNTfewZx42xMUT1sCaFdgXdv2k2pjL9oD8bM75mug5NpCiyxa3v58PPA68g3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JRFbskSnQFvMhibq5goAdEtckSo3esde6uAH4JFqDAM82v1FgvcRmgwy17sHnmTPxivWr4srdx8BqaJpXhqdzrg",
  "key1": "5jc85HFLJcsU8cgxS7XuquydoSqN89EZJ5KxjbiMzg5Qkqn3ouokuhbEyhoJwkzkEhbk3hB4FMC6T8yp8uCWk7PQ",
  "key2": "4EEez8zQekjbDrocCpGWkhpHtoeD884jevoZAKHKZqNkvF5gfS9o6AQTLtBRjFdBavwhBLX5ZeDUBo4Yv6N7BULc",
  "key3": "35tCbyLWjtdhKn6qCkxQkitxCdC7QwFgrSfdJ1pREWjwALd5bomi1bKp3hXkSrirh5vQoj2TgBYDoceJ45ryDL2a",
  "key4": "45J2WZ7q1i2dTf6CTcxatxpH1WbNsAPxGGy7SdmwPc1GubTMPYbZVUVDiAXjQfPnfqkVgF7JiDohU6UGMNyfRAGa",
  "key5": "5MfruYHiTxy2V3mgaW7KN9rAqXmPMkgKTVTWgsjJtNrhJxP3Psjz44g9SXdqyB8BxripMWfiCHfunfTxVGDzRb8Y",
  "key6": "iCmo11uxG5dE8PHDf1XChgPSsCYv3GnqgQE5isWC6Fipijr6XUXHDgNfNYwNZV77CiRDVqn9N34iXnUCnRDFbn6",
  "key7": "6595U37fX53tuBBbtppbqMSsaY9GMFetaU6LZ1fbQu5f5gaaa1EKT5Vwa2bgvQJjcYWEmi9AU4EzjzZ9ye3vHbgQ",
  "key8": "5dZydzmRRRReMgrCQ8zLjDwdUg733XkRK74YRweG8VCRfCNtusCrTLyVkSJGzZnf3PCA1MeuSX4K8jxayZfr1zjn",
  "key9": "4tf2iZPFRHRvm965fxHHC7SYgXJkxwxN8DtKvPrTFp9KQbU8PpkLaMEYh1ArgM4EYStGs2sNcE2gm8LHB8WFXSqG",
  "key10": "2UD7AZyS3eLqSRrbmBgameNTvUHtsfS7g47w4ndTBNZHLneFraW7zL4cH1yJH7yq2cemvm1hPaLsB8zM8sep2YJy",
  "key11": "Cs3Tr6xrBuA2NHQpCBeQEAESz7ceZyvYj8ygxVYP4yPGw8AARjyoLRT8qN1DNfHaEvhES3izrgj8g9wBrNNFhNt",
  "key12": "25oaVVy6rFXsUzAoLyRqpxRvBWSfSBRszBJqracgT16t8zAtPtcBW6dD7LkzJ3ckyMn2JX1QkqPFfNuXHtpGBrqa",
  "key13": "2he7mQoU3USAmvwWrCc9W3gY57GdJ3WZvk8e7a6Gt9rcuvDoqyUWwxcYX8iPTHu8qfF9vnsL37zVYqmKqKH8UXTt",
  "key14": "2WCK1Y1xoUpFCF3AWhHZysamNxNRrpepKSZCPH7PTPiwhAx4QTG9sEbyj6fFpbPHmhk8Q2Qr9xBtUYCmQ2rUdusV",
  "key15": "3Y6eeAfiktnNXyt25Wurh46QBquLoUidgvKBgZr3HRviq8dh6tSuuTWAdojotJ9o43wHZyJqoorZKGiJRBFU7Ui1",
  "key16": "65FnuN8jzZCyfJs55RtRu2hiPn5MQ6LNCEjpvgSwNBnsFJWQ2ZDHheBJj4JaHBQT4FHsu3DqrkrVPcwrj9YotMq9",
  "key17": "SwCWJAtfc4Zog8VYY9GxCdX5gTXz3efQqvsizcdve9szfsLU8ZtmrQio8SYS4L8E1WxsRt7gF22FGtVZ8n7MSzh",
  "key18": "3e5fJwLTAReCXQsdE7ydEMVM7QxTZWLgpYZ8qtyvy2VrxUvD6ttkbCTvX46JQbGzuwNh5C6hDY3onZEN8oL7HJHr",
  "key19": "5mbaU9RYKgzPPi5pCF2PKfrnaCPExk6PkriZXnszWrLf3YVednGDbgGemtWvrEomnHWkoEnk1d4WrYPU4bUF8STa",
  "key20": "279i8Gbb7dydq42jvh2zZLQ5mKUC2UYftXMnoQcfQ9ekfrMFNik2CwqPWnDvKJ6RcjW8k9hgX7SX65hwkbfQMP48",
  "key21": "4NF2GSk2ADg1xA2UNcHfPUwE8HNvVxuUd35iUhDocqWRgvGZmDjoAsxJ6fErw5XGthUDtMRaP5C2vyNRYXTeuNeM",
  "key22": "3CW6PwJL6jqE1TEGyrsueGtxCXPUuKzQWfpSp9YKwVXDJi6r6ERwzEtfcievCssKNCkUTF8tZ43weicwA4wYmh1h",
  "key23": "2yuJa1tdDNn5MwU68h5AiKmg4K3rGNBxcseE3DZXq5SHDRssW2HoEe2GU6E9qFaYkcptzTYrcTawBBjabQVuf6jv",
  "key24": "MKD5zaYGshRLxUHUsqoYpjbJ3Xam4G4yUDvkuj49wPCuumwN5KZxNfPWWwZdSZsNBWNw8pg9a7bFhLRFNT5acDL",
  "key25": "2CPVhntLeAWPpDwX6pDXepgspDHA6CXZSNtiuaxkK2NrQbfjcC5vXU3xjHa6i7a6RNZxgLSLmkQ1nBC2bpifGo2C",
  "key26": "5YgKTjx55RWmFxKL6fHowt4ryq2V1mBzvu5GKKxvUQZpSeZfd3NUggCciE4qyydFzMuicybmKAJeVKAjbgnUBvjm"
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
