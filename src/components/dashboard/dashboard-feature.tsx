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
    "3PU9nZ6nE1Ngb9oDFTatZWuyuhSurtqYtyoZgA3K9sHKCZ5pyMCqfecfDuTsTAJ4vHaktGATarYviQH9R587UB4Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VPnRMBqqXnU1mCKhTB3ZbTqUuF22VRS7YvYjfYL7gfZ6j7KaD1RydLjpKDZzGJtRMDUdqatR9zauPjxGapDn7kF",
  "key1": "4EUjaB5eQy9JH1vveeiG44NSFqWQGsvY9iHB1UYaeNxfQyKNERNrtXgphHhgrMz5EUnvey2yH6rgpGauUQUSj27a",
  "key2": "24x7Run1KevfLBAT1v28AeBBVXimWuQ5McJNEan4wygF4j5eAjoaJr3mX6a6QnB2su1QrDo4f25hwZuTUqr1ftiN",
  "key3": "3yKa1d6PYa9EeKfE3v1hFeSQ6sugAvcW49ARpG8oBhozXJ36vyfEoFp3HKLB4tNEPiogEs5tS7HDcA5GWoceDxFC",
  "key4": "zXnxcLitbhraC4FuVpFtQUqH1i35nub2JZfLL7nWUoTrNbE6DXFniMdVE4Jj6fTC9oSKhfgMRmAmBTya7sRM1pJ",
  "key5": "3v7Qni1UJeJoyfHexaJ9ch96pEp5G622ft1QfoqQk1Guj42g6FaPsSnsahPcSvCKkZTKQNTLF4aSS75QKncuBXtq",
  "key6": "5Fheu3c8Cj6rF7KAqaz1Xyd6dtFatUJfD4RDDMSEeQrS24RSHukQuyY8SxqpEkKkbuCAs4kbcWDJSJKeYYyffSLn",
  "key7": "5FExaPrdYL78mU33XQWwG7rHL88hWfjRbf7GkX6aitPqWnpFGd7mTeDQG2eP4Z5Kfx1FnY8wKcPmzwpMAYVbsFwz",
  "key8": "47A2KTcncoVtC247PwcXtrC6fYLku1KnsjmUuZ9YiurgZPGtPvUQ7B2vae2rsVRgVXYwjmkS7mLHL8naw4F3KG2n",
  "key9": "4Q4v1uCFnCfCjEDyL2wWzErgDFSCGbwFkwaxX3de4oD6nLk5VK6Tatjo2x8aRMATnxpCyNEZKaDFhVBwowZsyGNg",
  "key10": "2jEhWxRTw9LFLj1TmH5rgpviRUVEyXo5LxBQm42j6XPrWzGNNPqdj6CKPQ7URbpiuFjeattvCZwuRbtrWDKBRF6U",
  "key11": "2wkZy9h5bAsapaGS7Jtz7A1FJdJSw5jf1XC39fAAFmiJVK8gRNnTG8ZqkGFe19EoftyeFbCgCYpDJtoZD3xeLkFQ",
  "key12": "Yo4H8odfb63egVyesyw68tg5rN1frFHfHrur4pyYLjpSjjnMciukiw47b8zDCB1EmpYTYGRFBTcNbfTgizdXrAW",
  "key13": "4kN2bQZRLVQr2PaDwL6G33nk3EwZzvHU5Abt1aNFz9LQ3j8atW5QjXFsftqef5mNNdWRn7hJ1AZcFHCQr6wv6tor",
  "key14": "4M2NG16uUrHR1YnPJapaWWKLGkN1e1qBqCRU7cAXsH7C7WirBWkSuq9mAVCungCMr19UFWY5y57PyEaAwi97xv3j",
  "key15": "2N9FuHyASFSRXzdabpXnoz36ydfrZzzmpEzwiye6e13YF88LcKDhbMAvmb8Ymv836tNqeRfzsp5dxLJSSJuJwVsp",
  "key16": "FW4aKcqGQF3XM8HHuvBcaJGqGmZhs7yg9d5DEfYL8TRUEt2aA5DKeeqGEn9o37EwBRRKJTif3AsgGQjmaZq6cLk",
  "key17": "NgMje6BCCesL9tc3at9JXhE6VuXEzX17qFmLFBLzrEU3f1WmdmAhwUdHjuUNaLjQDZY9d56NX41hBV6bsn1J8sH",
  "key18": "2yTFJsBi2cR4aZR7yqiGnEApa2YAWDcnBHA8W1fQYxTGhgvktPreHH4poGWFZzo9WeAvKBX3gaEAYaayyFk6Qyvg",
  "key19": "22gr9XFRc81umYrHCYFeCEtP9VsxzkdPz7QiDQPf5QUmGrHAdpPrJaB2TksY972V5mBPzuwL52qMMt8KVoigkx5C",
  "key20": "2KnASNYsDYdd2aEyePpCgs3mbssgQWHtTXu4tr2WeSM4YU7s6Cc5PxphabyKiBah2A8jToYd8nq8svPxQeqtDErz",
  "key21": "3qq6SWmbzvARXEVKNge732jCvgXhigPutuWLh3Tywnwv7tsCcNnRKp9sUugdPFc3bGTPEzdfVZXCq29gv2pwT3iP",
  "key22": "5bQ5upXKC1SyXqPQhpsUJyUemZKGUHrzWiGUaLxKrD5qiUbP4w4iyEAE2EZws5zhCFF975632yqaoFSVZ5DUFec8",
  "key23": "5KjWsrpktWjbS8xQkDLAgfDBeHf9D8cPipgso6NiAoCzAjVde5bVC1KUJ5NjoKMidSBuRNvrgpFbsewttYMvQWP3",
  "key24": "3iVY2Hb6yhd58VYN19w2bxZEXqn8D7K1va2oxBovN4LkBWPCnqxXTs8kGXrczmEPZXTXUhaF1Vz3uYmhTk5W9UNN",
  "key25": "26fMSY8MnzTucaXUxdvfFCr9jCMCov8fg4LaR8a6mbQmRtNtRNQooUFEGbWPGceptw5x5Ef8FhaN1WgSRsDxP1yi",
  "key26": "4b19XWKCn5udXVJtWDoX6XFCkXtgkzDzdFgiWBMpFzdzdGEqP4dP3Re51fLf1P63eWwm2hcykvksvNnq8mNFaT8e",
  "key27": "5YJWu6qg9jiZMsrdn2Qtcyb5iYnpbVdUU2MeBHXM6ncC3k1xeD1NTLkRNYV4aQPem7Tis7Qzr5MKA9yCe8DcwHut",
  "key28": "5gtAMcmm6gDyT4s1FsU3JimCJ2qgVvQVLJR8nArJYR23QYcQegACJAweyGLQYok5C8pEjqBEaCm7dtKwou5bntwC",
  "key29": "4Ygt7yA2joBhreWJV1HH4E5q7p69ZbQDbZALJbxebZQ4AjbPJxxoFmd54ZVJyL9LvDECa93ioZeNDUWxC6WNks2X",
  "key30": "222g7xGUK2UsPWXydLtc2p1hGa8Lt6A3enZAxbTzBM9JdhaUZS2kxFic159EkhJjGyhYaV7gmvFb7wm97DfNRXnC",
  "key31": "3hHdvVfoWJh9QxP1nJkKvMTzNTEHG7dDtCAhGV2eknaNbkgP3wf5PW9qnn34efxmf67ncscFdwrGngvT7iLhWoYo",
  "key32": "3tsXYAqx77FDWL8bZrm9f8x5sxmEv4wFyrEx9zMwMzYTc16VnevN16EUGHATJD2KsTgRTsZ1b3HhgHmEwh6rEhx4",
  "key33": "jXfZcRigma8JdVmPooQzjrUYrcGzoLtwy8Ag1QQW6rZE9YQEsMLXY8jCW96RqT6Jaw95Y3TDjvHYtnxvbuC7yUK"
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
