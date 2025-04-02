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
    "5nBqTopJPdPydHeCGirEQxwSYXaQAuT6yPGRccHMMJ7W1sWqKBcURZGCb375g86pExVfMehnmwkQsXJgBzATHZ8Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bj5gJPuDX5NW9snpRvnob9Ur68spDeW9Kov9JPDwXDwzi17cMD767uTUH7P2iL7enXYiCSyJvwEiWcVbkQ25ag4",
  "key1": "3EfovLWuevFFUrTyMEuCRZumZ9VNguMeEDUrN1hg77yYHtDJyw8zH697tyk7d9gWXNwQNqQF5fKLAwisA1QiBQ7X",
  "key2": "54X7BTr8odABh9Q8mcB3sAiQyDGQAe4ZgXTbemRtVjhrRLecW6dHCYcXxMNEsCSc3J6fkEn37qwPmRVJxvLAxo8Z",
  "key3": "5f2X6bjoewy9C5sZbkQjDwqcQmX1vB1NbmwXiWjSkDaYDLpubeXp85ghHVyYYtzbEcsSg3DsPFmeBt5235zfRoN6",
  "key4": "66zArh4FWYr5WkSu5x8BmTH5n8gMhCSQZ8wm1wkuhXgyENc9voak4CefPD5WwrrNQpQnjTrF4ggNUDZZYXBTKJus",
  "key5": "64Sh5fsefVvz1HD9299w4RZTiToYJ1Yveu7b18pvvoXNJaSYnQDG4ihegNYCEgAXxroqWaxcPUA1B8HJUAwaYoQk",
  "key6": "2QR1ziGqSULqqYyHTqvM1mLoQF9wC2HEfmzn1jq59Rh4cZMQekzQG9aWxC5rywF8y9mnXzEPfJKePYcgMpRqGesX",
  "key7": "5zjzvb5XYoLUZmxnTn2kEwD9QhKsqxCec8uMBNYxG99PpoVxScZNf4SypQMg2obwdEabuyDZgYoXQVRwmyDr98HW",
  "key8": "27sM8NJYUMGFxWiXg2psnQSdaZDoU4HZWrNqESd48ntfARyEiSieDHR73oFYk7k5bMwTNYXML8WyCa5JLWDmB6Wb",
  "key9": "5mfy22MEiB4zASBCNPJzBRtABU5J7t5pXe31JceLm5QLwqYrqXdA3zxrVGBgcYM6c7ajzDEh8LwsWcuVXnVhTRnj",
  "key10": "s8ewLnPCnRe1zfWC4u1MMJv8YX15uEs39uZweohAypbxQGbpPt2yBm6m18tzY5zUA9n7m3mHFQBRGCP459rCCVz",
  "key11": "2kAFtvaupAbQaL62P8Ai96qACP1pxFYpT2K5vNYEaUXEnY65Y7xHmnDwn2S6d9mp9X8KJeUw9qCQTM4Uc8AGkfTb",
  "key12": "5eRKFSuZQyjPWT8zHF8JTR3qmxqsardJALzpLxF19Xh498yGia9MSXibtvcdVVq9y17XS7hX8GRTJhWqDDLx29X7",
  "key13": "5TKgZJCoCWmc7v2mgiChxnwF5VgHLES5D2TRTgCDH5zkhZHR4nsD6tiMe8ng7et2VbD92RfQgwevtVR5qDztTRE4",
  "key14": "3iQ37CpHHwr22FsbzMxpxyCPpxRGtHRef1wPZKCopr4Rf8XE5baWsJZ8BgLkBMLtorcM6LyoZgPFfqmeDH57N4xK",
  "key15": "3HPfosFPHsiCHCqjWwNtQ4taTwYie8fKvnwsiZCC4mfizsYWprt6gCb6NrBJ3tBzbjH9CcYxLDPaesmK4wxR31W6",
  "key16": "3vys1i2aPdRZ73QsGe3RvuMXfhukqqWasWjLkXYDX4CR6p6qUwBdQw9yX3CfqoCtMohrtVMhUcCcJYJBD1YBFdn4",
  "key17": "5ksGq4q2P6RPrd3UmvvaJc3UhkY4H331jDwC79zGexxrAVdkC2d6duiEztJYLbCojnbmnmBPsJb88ga8NY1omGe9",
  "key18": "4n4h2FYELJaY3iPJRSCii7k3rVJgJVBPYD8HPNgQTckKwZPfaw2dw76mdvs7XHvFajuukq14w5D5YZLzanPdzk8B",
  "key19": "5LMWXJ1HVuL1t4yrS5Zh4EgBmpmRmXqKGqd6t1n9RFG5i15wkSvdmxPU4fjmgDTabAzLPVVaDSeYMr1ACqy1978d",
  "key20": "4Pbn9fAu6ipmQoKoMNMunrNFD1L82cG7zvhFJoobQ4DKJ4krmoM6YYyKAcRcaNW7EhPEuvgazoG2YhdPPLhUB9Dv",
  "key21": "5UVHJxixwvG3cQwNnyZrGXn4vdGQ1hQKYaLCRoq5xw3e6RSsuScbJBtisUFBK8dsYM6p66WpRS6tLumzFdvJZFj",
  "key22": "3FcVvuXaBSujB2MFJBtdrQdB5cbHnPKrqYJrL4jMEgDHg5GYZt2cTSr6uHe7HRnb7NTJpyfuegb9etPZJsAexYzT",
  "key23": "5t2CgHr9JvvYw6M6vzWxMAhyhm1XiiTN8E9aPCA2uF1e14rzcmFpR7btms9UUDdNibw4Sj6zSfyRZVPjQdRPW2mz",
  "key24": "364AbWhCC4xwALJeX2z7LFnbJwA63UirvP5cxuvvHJjKD2ZoqX5sFHjBiaBEiN274wP2vgMBqndELFAhs6uh1SDL",
  "key25": "5VsFV63e2YdRsLsNjmBTjs5WChePJqxMEJUjoL4fVs1tbra5SvLd7qeJBBQq5fHUFioCG1RtU3j8fFiKdrQXfFVq",
  "key26": "21Q633pkJHxCw6XEhmBv4o8rpKrqZpgqnuZjkfg8wVNqfGd5VJ6Fj9bkzT85mKAuTPbpXvPZpUqHbwPqH8pnpjhA",
  "key27": "4poL3h7ZHD5wxSLVhsijeHpADDLeXegFUhDyMcRhWMnGS73Qc74bYEB4t1NHhjQ7pgdMvFVFB6RegGYZ6bWeJVMW",
  "key28": "2cdZ2UrQt46vG498X5zhbKzRd1ajLvkCdrxgrSxp3s3Wh3UJUB7dPTc5LWt4g3g5hdorMYhjhve9Cf9HRLi84noL",
  "key29": "2j5qeSsgre7mXeedYmvqCWyudXBWzbHCuK48QASTG1ZhHj7B1sBbAtpR4bRU1iagdnjH5HPUg9JLZgWWp6i1uHds",
  "key30": "xGcFduvSp5W5XTe2jhWbRmUQmNXpZaEVcExUHfk1TkS1cYxLrgvwFrcCGfgmEb8hBE9RvH6YS3vMJ8HvsT8QwWD",
  "key31": "575DPqJRaDgqRfBtzac2Rdaoxvj3szxaVDpqstu73fjEWvT2KZ1UrMCudPEzc3esu3mRXbBoMLQGk8J8UNhwBhbn",
  "key32": "4CRqQv93Y49V2nvdWfGcDpEE7NBEVAvZwYbsQY96NVyjBGhZVMZgu8B2dwgqwCJDqdjXU1ypUx7Zua5g2EJYSMwc",
  "key33": "4tKv4yksCXGwxZK328JFCks4xrCTujXmaevz8cQcybTiqqQrTF8pxKuZfwbSCetkKDzKYHQVSaMD6GtnExW4cjJo",
  "key34": "2MLh2eZGJUuBFqa95emVoizitA1bC1wXqKxm49LCizna8duUCNPnpi9EdTGXvEGwubS2cfRvm12iVEixFopPz5mK"
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
