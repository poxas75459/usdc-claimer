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
    "5gR3WufxsdgZTDpUAqheTmxdUPgJfr8XfFzxwfKndRHBhXqJx3xXE2VrDb263y2WeNkQGk1R3SaNJnFD6M7hXGDh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uumaGtsN96C51hPukQcv4FL6EC8qv5qWz5cGzrknoeZFc1Qi3oLm6g1ZW1WNMk3qTekxXxNgBjJCMTK1qqqL7D9",
  "key1": "2kMUCCnYsfyPoyVX9A5BrUzSEwH2U3HKJCTEXpL3N4N3JsZXdWSR7L7j9zWo3nA6qKE8AhvPGjA3kdLoDRKkiNnZ",
  "key2": "kuXB7zzaS3JooVt97No5YA5VUFcogkr6W5uU4cWWmpf8E8PtjfMcmKBQiDd5DkDPLqas1UpvuCkgpHNmAF9VJvC",
  "key3": "3RjeADbCQq9e2LCveFqB63yTjLBXPQcyMfkMk4e9W58jWsQfqDPqMFVVraHhJ7MrDfVreyEg9jrccoSMoVqti6M8",
  "key4": "2PNSismDbqq9vi9GEVh7JSodMqeWCjnbwVGPWL38EZvi1n9duGtwj82rLGEAUtfDxwroC6zcXSD86R9kppEfsy8p",
  "key5": "2eTh9e5cGVVnXNFmQRWequq8NZuqfGJ82BwCociubbEtM5NFqVg5GUT82k8HZ1BPPgRfnrVZ38UpmbgTfFsQewQy",
  "key6": "3jLFfjeCBzEEeKXBBHNowy8GAaFYRuxmMgcPqm1wA7VBh2Wgy3acdLj8PWrsnGj2tBrwvnNbQPkaw6uWuV3FfEPe",
  "key7": "299aSsxZZq4tDrgE9kY6xSRsMKh1yuhoTXkCjUe4KGwo4s95vAauwUD6CjhG8XV76hPYG8KA8YrUUbR8ENLmuUfy",
  "key8": "5Lr5SKrkinhf5UDJ3ze29tmHVovjbwjAY4XjD5ZXZYukwnVCo4XEwi7cBv4tGjzB4vYw8aqVyf2trFecjhXEcBcw",
  "key9": "eifFXms97ZBsFGjRL6JNWJ1ekHEnxeWngRH69G36xRfLRzYPBAAiswGEfeREfG57ZYaVQJuxYwvVvrWokxDqc72",
  "key10": "3Qx79qbLYb98h9fqvN5XQ4q2F9ZRigZzNRTx37RqVT6sV76ZwfjooCeN2WsfincwkdSdxPMrXTHm96dZRjaBzcBX",
  "key11": "5QeF2PQMgW8Ah8YEpwFBskW1UrYE8tdKTdfB7dKzhaYa4pDyLAN9wvnNvtiFxGNufKpcaLpZWT6LSUp4xpcfLjGN",
  "key12": "4Zoe29Ar2JicAUR1DPJQ5ZYFoNgFattpH3zJqNTWLqNhKHhXc3VFFMaq7YkLVCiqFLaKqdGNjmU1759tNFHyLXUT",
  "key13": "5n4yCzaAxdnHejJQjvMbWt8448nHLwfuCCYLs9UZHvyAnuEBySPxDpUktXW8gnp3WHywMAHbaadM8iZy448Hvepu",
  "key14": "62LWCJBChVYSTqibZxifSbbaKFCnyS5Dy3mxmFU5L1mFCRPXE2VHaG3yDeWbxomosAp56Yz3ahbVVMuSGiUyVhHy",
  "key15": "3Lw6pX96oF1qTSBbkP9f3QjjYP38m6DgNte7kppeRSNHrppmAmD3Arfx4mdxVVK4YSqWXu49xYfMfA1aanZZPxUD",
  "key16": "5oxSReou3dXfCgm4u15YoKEAcHSLAZNKHY2FmxSQHg7gxPYRk54u57wYJmyKKWNQE83eFktKHPXwcce89JxLvbQB",
  "key17": "4QchDAN2AdpK6PjYrhw9AU93atXtAoFcrQbGC684buxb1VwwL48LHN9nHYUW4MBNsyYnNjbrL3fA3zBzghbU5JEU",
  "key18": "4dbe8pWhZp7GkHVZyJsZLvSFpvEYBYv11VfdX2iLvRpSMjhpmzqH5Yro8AQTcLcLY63rKSR9UmcuVbaxybu4LDR8",
  "key19": "4FyJ4qLzfCS9q6yLJLSBfqYtMX6ptRth9NAbrTXqdrZf5uw8u9fmqpL2rJw747YWrPp1RFfKpq7aA2UYg4pL9auv",
  "key20": "45ncSP7vD2K2sCumWvLdPrJoowodDfh9vrBfGbCRavSSMjKJgEHg2Wxnb1HmY36n636hqMZu2TFNiJQ4qwMk1sHX",
  "key21": "2MRC8sbDiysWhVYUaZz3RpGDGahRGucoz9hjeRg5fPegZYYSqbMNhb4MZbp6GwgtBS31FsgJyJhvwGZhgpHjuHhd",
  "key22": "2sxoBXvH7wMeNep1uC98EdvN5JdZHmmKZEpZBKBPbJn9kpAxWYRZD2ePQGPGa1hxoXmDW1JkL6P9uaJWvwV3eLVe",
  "key23": "3f1NDKmd92nZxhduD7F3qdH8GK2Ffjo7B97JwgHndUNfsxtVWhMQoMPVnja6mFuKVzVz1WRKPxXXkZH8jMxnK49F",
  "key24": "invWwnEEnJWw8YPxtds11nCAsFPFEnYW9fhmYWqdd9NyR6AzFwXroTwdv9hC6jBQYG44pwjL2pvwK28bgSmePgm",
  "key25": "461wNPEnH5dsqMFsrDaQCaTZgNrA48RBWxsoHViJhddQcsxDJYamf66E2fCBiR86izqEsVHYMugF55Tnt8c6xNZk",
  "key26": "5zc7bWJ5kerqzfRp6RcojcrQr6DSXb4Sxn9ZjETDAdTcK94TLMQhJ9nCmxemJJkspRG4VHURAPkCGwHrFZKVBVBd",
  "key27": "3utoHgzWcXK683eTCKc44Ebdro48KCVDKzQaQpTa6YD2Gd8nAJVTqCQoViDfuktkw9NCxGZh7YZzDvSbJorFSACi",
  "key28": "rLScXgeyWjE76CcbgrJ7zTBBDY9BcdeoGUCQ4nvRsf9XTvPGq2RSqPRvERNco6L66DeLd8bYyhQGzJrV1nMPTuk",
  "key29": "4P55XmA3iPPmgCQL6Faq8LiSoS4viV9it4mT4G9PQFMDf2ezeVDtJvq4jr15VYcTpvGaph9unVpBxg4vuytgxzsi",
  "key30": "5UEig48J5mFRUf6tYzVwYwGHz9XQZtyxgqLxPusq2Edg9bdN1AL32Q9KeogNaG7HKTWLxsMfcceZydC9RjWhnhjv",
  "key31": "41aLaDyLMXmmv1Mp79umkFyvg11EPdMGj7gWyYLramWNzvksJrYLksXhVPy1ZF8ATsvPcMoJUHScWnKyteXGeeg2",
  "key32": "2zbpMmjdUHhakKepjoug2wXJqgFqMYHeQxa119EuwPjgQax8thkLgzYF3LNsfmy2hXRd8pRY9hkNS6uuyQfWZTVd",
  "key33": "2dqXbFm6d39nQ9kXEfm72y7nDk3GZ5aEohUjhAZbVyWstNv3S62KgyW945zWPPdWeXJCMd8RDESpxLetCNMce5Ko",
  "key34": "564d3fieRqovn8m1uFowdzSK81caNnd18PHT8JSpp7KJc5q1HFF5Zte5RGbgbe77mbZYAhnhhQbxtzAVUeWzYZHf",
  "key35": "5x3aRQeZHGJoiBA7Ztiu44Zs2ecKufsCy7ZmRoFtzHbCUTWJijGiUicknePg61tQo17fPRS3mesFzB8BGcEbF6aA",
  "key36": "35ek2tzkTDJUFcKGKxmW25hUJAeLUstn6mshudfKVtTyLZ5GeWgkVxb3rba2MqNbuvF7AL23memXYdFy7nNs6SqB",
  "key37": "4MVuk46ny2C33nzCbwqYWJwrhyKkPvF8sunmd2FdTJKjmSAikicFcfuX6Xzm7AXmgZyPY9P9EZHphrcoAWXRVgth",
  "key38": "5egz187ejUsHeLreV4AZiBKDCW4y241QfybqHEAp7RYze4EkJKHQfMJUWPuHD5VNj4c2kCmGm7f3eCh8i9CCjR6f",
  "key39": "mvLyNhsb1DaoewZm99Dv7eGpXXcdShTw4bSChXkefSPHoDJUT2YfstVmXnHxkhJBDnzXTmZ9zAn9cYEaVNsFuCT",
  "key40": "S52uCQyFShYQiYSb9Jf4YQyCwCN7b6gJZzzvHvVumMu36aD8fkZAadQTHs5rpcV53yG6T5brAhkiDkbNv4NmoMp",
  "key41": "61GAZfekQwHWbdejnXxadAiuYX1HU1FfcJ3cjHsuGc2h7PziEieFfuS6GYoCQro7uNeKq8v6pmdUSvcgXUSGmSRf"
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
