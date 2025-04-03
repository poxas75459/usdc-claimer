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
    "4ccpHUeRfeJ8jrn2dPRBED1avQDrshXfFmsYgDafNRS1c4YFHcRfTVqjw4knNEyydsFQNp7jCucPmK6L47oUg2gJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CzEGeTQtrWLJQ7TfaTjjw6TGUGZbswhTfo11fP1mgSPSMsrhPPm4D5v7NFcEmqPZnnVXjCAx8CoTjuQTEgw8Buh",
  "key1": "5v9QBnpBvJfWGvgk2MdtGx8V3wQESbmkiKpAFWGVjEmTL8AvdfQK2EEFuVSH3Da5PTYUTchheX49TTzaayjY53g4",
  "key2": "mktQDNKzBUPSgrjpJ9Hkvgh1JNfMRtg4mfvGmtp5Ap69FckcQkbeA8WbdUnngvyMo8DJHn9GDNS4aFG9CfTjgqZ",
  "key3": "2aGGPdL87PMGewPzojtGuUyyQvEvwkGo3MHz2c1SAMZ7LoCNWy1bjDUc6EV32QafBaFrMVGKx41kn96QJcbvbmKT",
  "key4": "4vdfg7udQdmW2XRd7eQXtDEAYVDbk2nnt2JsejQLxygLTDn9hPAEfSzo2a3ZL3Mx35yydsbDgh4J2P6dcvUZcvZu",
  "key5": "5G8LUbYSoq18JdPiKUguxbBzDD3hjmyPLbdAVt2gi9wpcgf9474aSBFir4D7vppsEo7jeu4uz2YJ3MXyjCRu5JD5",
  "key6": "3GmW1gHSbncDVjFxPnKogFMnWqba1Lu2w6p4PSaPY1PQ5KyXDaEpPF38zndGugDk8rUz79q94Yh42HJ7jYK3Vuov",
  "key7": "zaWNDAw4QUUSuD9zkEyFD6ofRPrG6QRwy8o28ZBW4kB7Y9E1knBzbqrJkHEiDQikRmX5GXMXJVNEbwzU6a4x1zc",
  "key8": "5kBWMSJDoUxxm5UGBrNrhm6PfWkwKopmbw48Pa7QKvjjq65a2mJpreL1gHmjHZEfXYX2UckQn4SWH4Efh4UbRXne",
  "key9": "4k9bsTrZ1ounQ7Z5kVRkS3QLqJKdbPM83dtTVLv9iWsouBPwt7SpwonGSWgHT6TM1ocUwy19x5EKy9xNpWifGgo9",
  "key10": "36rfK2JYNm7MBS9uKJ543aVdBEqewurYvhvXbTd5vsmwaxhptPV3XSNEiV2BQe2wummU9ArGE4hA26t9Ckx9mBnt",
  "key11": "aYugjtadB2pZHNTUUZoZvoC8wwxpP8sne7z3F2Nu1FNB4LV71EGzwdKLVfNf7n7fxUxfN7cKhDMUPag1Ksy2y1f",
  "key12": "3uFNF7rY3vK3zkFzDwZeyhFbJdbTy4v841LTk55Q1ZQ5rchrqMHUHEWTBzHJ8HpwaLKevnzGR9SdCFfEPHYjxNPy",
  "key13": "5B3VoBqKw6xn9cL6iVewM3qUWTqvaERdC8PENogoj2iuQQnHMpcuDn1pDNPPZ61ErpqaM8KcWceScMhFrNsPfbjQ",
  "key14": "5coZwCaXubNWUhxarYHqfmBv6ajXAoaWBjVci5zRStwVs1jZR9xj7LWG2fERGBSp1Arm49J72rib6rqS25X9XFx6",
  "key15": "2SqX5nSECkR6cvGuP7DkT7adk3CMMKU8XFFnuxNWwk1Txtd5x3d5XuhyCeW6w8gAZA6ptEhkYmfKXgKxUNSMJJeG",
  "key16": "4yPS8B5sQnNL4PCQFyQc15UbNMy6sFL6L7fwUMGd7NeeKu65peV1jtMnEEE8xerMJyAz1mC75mXTmx96LBQ3rDmC",
  "key17": "4NeHGwBXbJwMq2tcLmiXenpwbvnB3F7vycUQrfDzTJ7Chvs34txXjas8PgZVAdCx54q7Rywuo7W3XqJ39c5DBB2",
  "key18": "3mBDkxU1VbpLbppoYvN8qbVAnHcrWCL93CeQ2SyjBzwN2tBox18t8fFtGmDqAyVd7pcRNC3dv57ZTTEVyQroP7Qr",
  "key19": "35k5m6ChfYVA5U7byBFL1gyGpzNnZtk5KhMwndukVg9CzLhKdemA6EFefuUYeu24pF94GpCXv9Dk1gQPnABSR8hx",
  "key20": "2epkZCWyQa2vXbvDr5vboKuDnygXcdtuJ6yf3u3DA5fBHyzCBAGXhE1KxpiHfmL4o8FXkk2NrkjH8qjBVT5AXjtW",
  "key21": "46weR6m7CEBshPdB5MVX3gvNDL7KK7aqcfeZyFerVqvNYQ4eoHDK9c9sTYMUUWmcjure31y4kXtpvKe3zwc3mxQn",
  "key22": "5ZSYKyvwaHzbrMjgTe51NRUdbFLmb6r8XSF8PvDcpCnR4r6XJtz5bwobfqByb5gVUbsSZpB1xvQtPj2wvbjmu5ge",
  "key23": "wRtPEB1mpiXovgtseFtgcVbxqbpte1GsGqdXUwbjzNUDeozJV8GfEm5b6gRRneA9xHfTLooJofHjD6CZtjHveVY",
  "key24": "5NEnVEz4mHiptUKVu32P3s2rUUV5vu6Uo8ecZyua3iWygxGwKKtZUKgDcMPY5FoYcznw8F8AZvXRRqZZ6oieiNmS",
  "key25": "3EsVdfuZ4DTBMnGxvsto5RW1UX9w19baWn4ard2WpzbUhXjj5H2augKkcK1wtESWyXfpbkvem8cQaU9fbVSZ3V6M",
  "key26": "2p65R43BsG6DKxZNaNQwoonB14bLvF6WhNT7LdxPW6SS59BCJGjhULfMigqrh11KrsUP27ZjXQUCzX3FvRfsPAKT",
  "key27": "56wZfkE9Z2BsN6s3yk5EopqfsTwQPN24Z5fbNRPLPrrnJcAVuE1FkZ6nSh8SURMYDeqb4Jbok1p2CMspDW3Sb6FS",
  "key28": "5ZhH5eGit3oCwgTRYZ3GVQc9f5tCKson2YL1nKJJYtDhZAhRehcJX8oUPWwzMUutunXFfuozyWwnn8FbCtjHJM3F",
  "key29": "GbPQeGWEkzVu7nq9NA9vcPGxVTMX24BfHQxCQCd1CrfCY7kevZymgZAcvdssjSR42TuXPY1zSF6CYnc3XKycdHK",
  "key30": "3J2gqWzroKapGUL2WmTUaUDUG8QDTMhCSoMqFETWfiP5rKa91enbRou3sd9FeV2QUwW9hb8Twsys2BJxUfL8dGkQ",
  "key31": "4MqZU2pMv4UocnLrrtb2siMwwsY6L9vjggEuLbi2Rf7BSbPaf54DYddfLk81jk7ZSoYtoJR3RQTVn8jwfLZ1ipRr",
  "key32": "5763kpf9fBj8mrVisGHbLF14LyW6DiejkY8ujQcoWozAgAXRUMTcD9K75JTdiG9YerWtj5SwLZkbffRvsijuPYLd",
  "key33": "24JsrKXLwgZiovqhHapm9MJa3JML1GY7AmxFnmQehc6GnNZKYfhArqhDYMsvGoKSAroVzsKetvFusgetLZZckhEZ"
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
