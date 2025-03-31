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
    "5uh6asdar9U4x6vnWfUbwHPp745rZv7UveQS7cpfHcAX5Epa16Tmyj8kjDkNBrn2DUboCaZvZwzZ1JW4rmnp7uqp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NgYDzHqvXVwGtGeRx1MWRKb51vDkpy9T49uwC1pbnruaSjZZSDhftdxg187YyMAJdavMUTdxxnxsLrURWsoeMFZ",
  "key1": "4Cf5CkKq2ygFynSmM6Kf2kQYa5kxP4MaFaMEsVyZRBRFLNb8u5gBSBJkaQmiVW7F6NiykSFJGpi4H4W1uKK6yUkZ",
  "key2": "4C6tVC5DYRbzaPHr7HPSZ6TMvfQidcXW4XJKtfZLztksBsMKoXwhmNkBzc63GnmzcMHiLUGnqnakn32XtzEY6VFB",
  "key3": "4uswQcvnssdZGLcXLxQ2W8Kq1teKKo2f6yf88fJvRCspCzWheY8NstqEJsXyY5c4VDW2owouPJhxn4Ee9MeQnVWp",
  "key4": "514cQ2bVrzpkWXDLQuhskpgaoRd1YTo89kAi4saQpDPQwywuaiBhZt2AR5fc2yySbqEV7opcZ7mVQu8vTfESJHQx",
  "key5": "3GGrSAEz2xT7Ru1PL2iVgLg8aPDSffen5ogKYZWu8RALcU76BUvm2zJ7RbsWJCCtShBQLJmkv62pEL5Nw41j6Bz1",
  "key6": "23G9fGiMCRQ545oJF1pPVUwRPUdRzpEh9T9Bxadotp8mrWnkaFfBEgkaswWHB9VifXiS4VSuybkSVRALpBTkvpUb",
  "key7": "S1ekV8inx7AEvnp7zSSzCdfseyd4Rr5oWgSifuPG1eXwA15egotp8VqZHFGpE4yS9gsGFoeqtSxq841Txrqid6n",
  "key8": "3Gw8hUWXwg6SSEvFvLoqTYbMXABAwfEaGp4oN7E5DHuVUxWsxdApnQwb51u4Mpqq6DYYu48GibMxu8V9uzJqRQbZ",
  "key9": "zwk1JkCUqpPAr7SH6YkzoNbF4CCaBU6F6GCaxuXiCJEvvtuqCshzAY2DDqd9jt7X9HvA6yLzUqqL5HGkDtZBeqf",
  "key10": "4Qs1GtZLpsiZo13t2f3FWicdVJbggmh8PxhFZJnznYWzYkLBpN71Tm4YmDBgvdSsRP1ekmmgn7EGm85izTqcbvrC",
  "key11": "3yN5HVbSJJhHtQhCETmPutMwdRngwhU4GZEA4799eisCXnBZXSnxrft5G6wZnKy7TXkVdenEDQc4hn14yNnwPhTQ",
  "key12": "3z1Y11brVsnADkJc1T273RMFg8Skzyi5R2MEicGmTamdcEomvWZmurSzYpnpKdxjetPDGnvo53gFLt5QopFuLBiw",
  "key13": "4cuqRwTVUYW14BeaThwWXdKyURsFPMNsHdS3QsuVgvLwcweksY4svTQ1RdNgn7TxsGAKKebYL9TGX5V3amHdJyeP",
  "key14": "43q29zX4hPj6WR9Wr341gxAQk8rvEqCaoT47cRcH5p4NuoVg1fE1VeGanpDYUVAQYUFeR7KpXERpZTH2GXdGP6ec",
  "key15": "5uYLa8wozYraSFg9uY8d56AEwVtGCJdRE2GRnCVDUkwiS11vNs2ADFtHMrU2dQc8Y3CGPi7QzQF8EwpfswWzAgGV",
  "key16": "4gXH1t11FKJt88gcdUwdWDoC4ss9EdK8oX1azYVF8fazegiYwoJrgD7pjTUWLkf9jhpAy71Yqpa6PBv1Q632VQYP",
  "key17": "3YE7FquhTFZVmocjeGNRGAgESB3Tc9Nk4WvD3oANj2Cg3CAMtUjAf2UrDs33U5bguFWJziapn1vWvgen2BmVNNbr",
  "key18": "2XzcuZWTX6PT9eXGLZmzZ3K5UnLdmkuaX2wkvocXBPEGkjooaMUXML9BzErwnjZF2bjUsc4og6f8ekyMsmer6VHZ",
  "key19": "52cs27Nk2q9pXxxp8DZTmoTTWz2BMkC4CF86o7opziTz43uqbA1SPTijnZBMKN1ihdcGtrsye9H1MTduDYozcU7L",
  "key20": "xAxCLqoK27e8XnSaqRMP1z9m2VmoszRL1yVuiVDTdLZ9YqpGwauJvq6qCayj1gqjHb5thVHzuKoBpaJyMd9f3C2",
  "key21": "2sKerdbrGpDjU5Ww87zCGwu3JHXTZZ1f4epdt3xWKoPNE2KFR5bhg4ZrXzWsxkgCchvo1DJo3S6MfiDgxcL5MWiq",
  "key22": "5qLPFWfUCDxaJxwqy8RDwsepdg6ok9YrtqSdEr4NW4fwwaGd8JZm5TwjT9Sq4szi3rV3CVdpi84Spd9kjjyp3MRj",
  "key23": "3xFgcD85E8YTdi8tWEGv8JSRRqZ3UNqGfdfMbsEqe2QoEVLKDk64rJyQ7KWSUPmxiCQmpj5GvoCeqyTf2tVV8Rst",
  "key24": "zz43BNfGuweR2aoKknLh4GbhWPYaYR9d9PiCCg8bv3cutxGpdVG23tGcVMQ2jRJvWcwvHQg11QxNniSC2ZjFH52",
  "key25": "2AwGntYKqLz68PfJPffqiShE9KuqUB9HEZeF5nv79Jm8mNr8pGUQ9aGc5g6xFi4py3pcvuanXXBDLtKJXR8QJC5b",
  "key26": "57dHqB3ooD8ezyiCdueqgcyjXdvBcDo6GkN7SFWsHmZQcaHWBp9HRZXW5V5JPJ5kCpjvgUJtgHEhoJoEV6wae5DG",
  "key27": "3mQoMwFgABg9MAXb5beSXGPwfAfZ7bqudqWR5VT6hSwwTZAmJNFTLPqCiBbgReAeW6WdM5F4Ejuec449bioFEBGN",
  "key28": "5TkMe4Q5rhQdJjTD9rV39TuaToA5u4U1aShjmDxaCjJh2t941fboE2dDP5k4Lr5tDmTtg7MhrPL2ttgJBQnSMuVf",
  "key29": "4yM481TN9A3z1QKh6rStYWHN67Qhr8TBTbgsSwpfH83GWAM2mvEzzfgdkW16D3Ro2ynsb4oDeGbPDw8guLygNenm",
  "key30": "3MuPUTkK4w9qmTMNDTLwq13LcdTV2S3RX6RLtTmdt6e8CUTyS1jtPM4WMXbpmsgjf8ddPWzwVoV5T3kXCvApPi9A",
  "key31": "5beqtWejWQ3owJBzvWYZsDPkuuyYfNDgyWr4U2rzEqS62SPavrs3QoUE29A9FgFpFffgfav7JJCGTNWkSVWywLrC",
  "key32": "3zcFiUrMKv2o1V5g9k924o98DVqms5oSH3aTeSonUdGkztFTeuY4RTM7vhaG1xVwDVnGf1Jibtn6XAybore5jvJi",
  "key33": "Jz6zzQpWnvAhEFhzeukQcEEgsWT5mXmChRJ1KcQtFtHMSRRSnWHnR4t9X73Bq9QusKntDYaxAftzSBGikDRKTfr",
  "key34": "Fn5c9GdvEi3JxLnpki6oauTxKHdenJCaapjA6kkVxjf2v4iNc3WYPH9ZoAM2xrXcxGWSCYG8Q6XbwnguGxXkZ2o",
  "key35": "4nyUPrTFWuhAdtngS9gNGApqz2zgywfzmw36UbUPD9VNa43b5avenBwewkhiF1ezDd9NZjwpk8jApM5SwwiJkdB2",
  "key36": "3JM11PVqS3pd5vVxYKedLCPmttiuKUCrEGqkoN94XhZGVKjW5NgjJWizfethXYYVdrefqvyh6t1MBw7SeFDLmx3B",
  "key37": "LVuuEXv2K4BgRroetXK9Ph21mBwe7UQHGviurA7FW7aNgGPDjgcUEpezuBMzL5eZZpxvLwF6aTtCFhyegzH2FcQ",
  "key38": "58EbMAr7Jihzc2nKwXnPvMQTPF5Kif9cfw8wVmzcfJXnhQ5yGMFZtDwyVhpvMBPBLWKRVtSfmVxWKQrEfYDX4Ton"
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
