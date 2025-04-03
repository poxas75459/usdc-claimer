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
    "2qUh6L3x7K5sdsMWkgZCNbA1nXDtJ5PJztevHA6qC9Smp7qyti5d1XR8Jc4nMEUhmLg5UyJ98kwTgMAGrQRF99Gx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZFV25dh7WDW3iRu8vgZr64hYVkX3aWxA89W75MH2sk9KWnLU5xdYmisVH1ViqyJMEvukz4XjVCJQBcLn4KxSUPi",
  "key1": "34JS5sd3gduEzVH8pjy6x37LvAENjkQh1z9ok2SsH9ekPG7cJKdNWvwxSW5EVWb71E2drPkneqksCWN1RaqX1MoT",
  "key2": "EReSaJncmpnEbaedtC6Rmbzr9kGqrftgr3XHkw3kqesiogoCavC8D67eEfYND3EUgzvThBpNnPZSnXr8ZV6XHS2",
  "key3": "5qJEayCDJdmrhu4f1KLSQMuvgJ8sXDNrEztRR9Xvmngq6jSNMD8uiR2buq4zFZHKM4an2QuWRQNgVTqDuqfCVgSB",
  "key4": "5Sb4KWd9SN2ULrJQ1cEJWM2naCTeEjjaGcZad7TPWn8idijwNQKJv5UVHWBsUQRqYcUxVM8M2T6fvfC3fX1Fh79m",
  "key5": "pQp5WesrN1ZgHJMqQzZVV3gaxVpHB8NZKiqTPTTHTuhJNNJDmN86cyqAmKkrd3EcKW51y1gVzTVt4DXkSizHU1r",
  "key6": "4Vpub5Mds5VSVt2ck56y3e3j7xipSUrjpgZrAS1CBaPgHzPKL2kXAY3AmcftdvxYw4YQsA4aETFrkZ5e1v1JbhN9",
  "key7": "3VtsJGU88DwXv1ahvaUhsskW8yo5e6iccijVbMwxcaPEg1UPi2dznyAfGuomxcsrVyCUjbJWHhCi2RLX1xp6eqdy",
  "key8": "SSc7DYfNDauZQnKyFzMv8Tc3SG8y2PmFKj98G1J5PSBjP63XvPGYPqmMYtyjwGyaZF2DtWTgoePApBRfcrRS1Pv",
  "key9": "3V55Cr4e5vf6v4Cg1HtyDEisKNpc4yFmoZccjrHpeonmZxpgRXCcfBcNh8osisKvZ4ye6dzW76UAsaXD7c9AqpZW",
  "key10": "2ZnNJ53Nk9FjpDNnKQo38PzotF2GpHKiU3Y16apVsnycGBDeCXaDdYoegGcT8oWLacSv8d84hZLoLHMD5ztNHKjK",
  "key11": "3VddVwks27yF9vcPTdTpTyo6KGRbQJQVt19g3P1ooHWMFpvAL3thw1E85Kc5TbK7MSTdncVEAqrRgsZqxiVyTkUS",
  "key12": "3oujPXNXWjJTRDPKC9kE5VEFPyc9RxPn4kVxe1gRUcWM7BtubrvoEr6oytw2VHtVKJabpraJ1LTuC23UzhUFzfBW",
  "key13": "4FNbCBnxxG1fuphqyFNz2X8BYEorPaXNSJmWoshFyYbVy8VZwwnnhZJnuhvgYPbcE2mELK5rNBC7qAYQb8iD8NDE",
  "key14": "41DBmEEZW1LR2L1B8ccrsnNVdhs8ZUv1KQX13bu95VYjD3HZSH342gDpBfEtBZzGck769qxLxGi1ik3yh7pJuw8n",
  "key15": "3KQKg5vteNvpbvfS8WZxPGoTUvJnCcX5Tu5rvGrGZzRVnuwBtdTSsVcxzGvKEmLhF6YsqBsr25hqdthJqKTeDUuj",
  "key16": "3EAckJYnAKBnNvynfbDnN74CexdE6pQYsf42hQ2FXzLcg1dZd4rvfiexWKkRV1CQV2jRWXFfKszw2rsFfVGMmWrJ",
  "key17": "4Q97b5wPQFNYiAk5jLN3NZwQMN4tjisL8s9zbdkSCSiqAgzoYYtY932FPEg77X9ytqEGN8NHvTRRFE57tQjyrhiK",
  "key18": "ybdQga5t26PTmHX36L6fo8Pet3EFDv7qMvMjPmS5Gzjhs1sJZptd6pxK7AFQKU84BYzECMtMa6mR1X7MpYo5Zz1",
  "key19": "2LdD7vVviM8RftAk3KMkpUugJR7sMTYczy2s4WqrXxGmzkPhyhiLnJ5dSVY3zRzt4ZnBgf7P6nCntZedXrFJFh4a",
  "key20": "2eEiTeZfVosHqBDzgk1XRYZuv1zhVW7WdiURMQCqaC1SXbWnoNEfjYC4vjw7efHKJXXJjdgYHF1H2FxeEGUFEooz",
  "key21": "2c14cojmA4uxK65xkDcHC1UFBVNFFhfCL6mRUPyL9ckwCDpLWqXJasw3yMvZCrLXeJeu1ZYFpFR6s5iSUZ7qjT3P",
  "key22": "2NAaERqz14L2udu8TpeYhTSWUqbwkfXHZwHFfXhfAPSS1Sq67p28hnCbTpMUzmMLi4xFo9nbbPknL3rZFXDmunjD",
  "key23": "5aLWweeMkikfUncqzDSizwN2NPVZuSL6apQRLZM9uXqCAgEPWTnuaUGLgoLDvDaBv4iGyZeK5mce4NyTw2tsHNNx",
  "key24": "3BBRpjbwMD6wLxNiMtoAphE6LUWG8VvrUfPr15uwDwMqQSEcu1d54KGxN58xyUBTzE2rqVWUP15iPUCDfhwd7iJC"
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
