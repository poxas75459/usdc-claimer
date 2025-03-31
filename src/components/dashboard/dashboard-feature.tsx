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
    "39zXt29KaBqv5GL3rFBQbNhJgXGbEVYXudQTHrTuh9DEgV4GAnSNNMiLEwWMxcxbaHnWGhrv1Y29e3aASZGCD3Yy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L1GaZxuYmGoJhdZzTNcC3mtP5YAyMDB4SDTQjhjMT13K4NhShSSjYCQyBqBVSi3YkRpB2Jrs6sBaSkFivjkaG8f",
  "key1": "47kNQPiHS1Z5aFUxdAJrR1QbkAUGCZwNNWo61VtSjyG8xj7zEbUo5GSKBxCwTKBKadcMFAzCNZ9pjhUyVamciWvR",
  "key2": "27DgMqsP3dBhrkzSqPMhXuNLBn9DgSZfJLwBushqxYeU3UHVS3JH2EVsCyFAVpWugKHuz9KJWc41WNTV9zn8wyAz",
  "key3": "5D9P31NSw2VvJ2YWyYcN5qd8R1AzBW3djUecqGesn8cFQVGGBM9NKSxsTxfaXQzxRmEJKbRFXeCMRGht5gb5R3jJ",
  "key4": "4h5vHrxCvyS1fLepqhwhPfMaXnd7JBYjXNK9mWV9pLYFGh9a8Bzv8vjMSpe7SByhRXY5VoKa4BaPkUTTjzUAaeJV",
  "key5": "3YiRMsSuPUg5ugBxgP1Pqnx9wzHkjd7A4YtXj1bcGhQV37p5xTLcL8CWcg4yVE9LuMxokqBPMWMmXF3t3dL3z1v5",
  "key6": "2LZv3QvsQnA3omuzyvM6MafMxdzuJZ2Sb7BCF91fY5uskGD4N4M93X66o7uSEH4xqP6EKMF6sjw93THtpzqXEZ4y",
  "key7": "2jBn2smBHSC7toq8ri9DsRCTUCGVweJbkREMQVNTG1ZjEnoh2wu6WgJQRBKm5Kji2zYifZCXWFaq93ss27xHtJJ1",
  "key8": "4JZ3UQqnqdg9M4CvJ2wahHMx2iE5VbQN6GnWqZQLpjkbfZABHaUSEo2HNp7iVmDNzCEM6Um6ZH6mUnK4gsdSnjNv",
  "key9": "3RbqZZeaw9PpYpfMawfwuNyrLnsQWSvHsVjxbU9bLwoqEpyoKmMxfVMBJ4d7avLwH31uBcRRT2v5i641CqC2gki1",
  "key10": "Z5YqE6iMktiqaAdYZz3EBJjRn6RyeisKCNCzVGWLUZmivoHTJBkTNB3ynZ9bYLGCEwycZUJ6RpJ4YNPFq3Q25Nh",
  "key11": "3wkrQHDCkFBuLdpBL5pDXocEfkeUZR6fxZiExTtE7wkEq3PcnVmv5Aotf74j3j8gGa8Zda9GfwrbYRcmzECscSpX",
  "key12": "3ngYcPfeuTiK44M8uNPrkp7S226iYQY66Eh34YyXZz8nbMtN2p3GtidMxMQ1yhdbgX45GgctpAwqqt1L2tJM9bQ5",
  "key13": "3LJrEgYeivQXUM2Qddt4pdpcftN5wV5CjMEY8GT5pdUx51S6wWXp3MHzk2m57BPfGn12DQ6HLEesrW7KndFvzvdB",
  "key14": "5rCf5t6jgVJBonaBnZCVCp1XV45YdUL6cfsiXjtvA9jV6wbQYuwbkWqtuesAKVB8cYbr5hPnk15U7jwJ5K2r5TQP",
  "key15": "4FkxvM7foxx3Mke5ah7U4aUa2tUudNJbpCb6RPbz7hR5xkK2UEM2a23Vefdc6vyQGQTfQTfKQqCPS3HEFAKW26YG",
  "key16": "4wDustuFvdm2yp3Bw6ppvWrdRmrs1FqrSeguUtu7sfrfiwHRMFh84EV5UA15QfmL4T7DwJkbRUShyVReDMLMj5Cm",
  "key17": "EdeggRZbrHENkeLAPRWtXazvrcGH2E7YJp2AYoUMDiiCSXPinz8MrAoq48tbdmwguNq7etjfR3uCXY6PgzW8RGq",
  "key18": "5ZtHUT3QyVhRaZe2FTCqcY9BNFa5L11MUsYYN5wruJNcqM942AZvBTtdT5TQxrNf4P3iSNrHm66yDBnjtTZdXhEx",
  "key19": "2MQexaVQTFKR5bMs5UuAgRCGZ563W7fMVS3HSeonPeQLyRXApmCurss79Q4f7cKj1nziWU6cQ1jUKDWHnZJ9v9mv",
  "key20": "5xJucpxQN336srkB3XmnheXUZjTo6CPxcY4HZdXxuhnQN2EpkUhDwnyLFUCXavAaDrK923is6KA72wom4KW1gwWG",
  "key21": "5qx2iw8FPoRyLLZUEzBuYhCLaUbikYon1JknnaJXLYShcR9Bf1bRAoEJxzkqk2TteCJQsuRWJ4m4v9ovyx9EGNQK",
  "key22": "3DL6UhaEkyRPBv4MzR78So9TDenV6fxvYh9gEGhKEUQt1xS64xRLpQF7LB2agtZqUugLFZy9qwfk4efuMBGU3Awn",
  "key23": "3VWhaRPocFqedBEx9yY9sxDvhSJ2dKvEHNKDduzEKoLKkQxy5BvqbEGkAwnc3Vr4WHiokkhJK4WRY2fS734gJ5qB",
  "key24": "2EWStzRjZB9tkXuDbX9gCYiXPY43vkybyh6Lf2NbQ5Z1my5yjC3y8iPH8cfNauxvbXn3DpCYgu1x8Vweu5anHuYF",
  "key25": "5Nqs4rFTcN8XFp1p6kMKWmesa225V3egLXeCcfKZwGQaZw4jEdM8LYktS2fyRWngpVES78Kg5PDmHLk1BS3cUsQ6",
  "key26": "63MeSK39ZS1koH18wzW1iGF42fbhNDZSBLjC1uusnerqicTvP7WgK4Z9GMC9rMqGSUBLs4SUSXeZsSQH87m9i5zj",
  "key27": "4dKRvxfXY4tGoeMrmu4E7UTNfpS9pfnovonpuHW9ot8q4Q9kRVFcQ6urhW8sZdvCs8dXSRD5RijCAxTdjP1mgg3D",
  "key28": "2vsauMrHWqcuRVrsBjN9nP7mMzGfNmyXCskLVgykLig83jvydWodu7q52xYyPcXbPN94gf42kf3L2WzAdEaFVEVg",
  "key29": "5R3wvWtfNnKjuEvYc7MABJPFERkf6ePaf2iWv7AFePQhdsZFjs1CD6FKqkACjjCtkvsudTCErYdxfs4qBK79Cbhv",
  "key30": "3CwEc9vkR56zerZJfneBkLbUH2wRJg7CBir7rAtet7K1C5JHx92dhcajKrndW51ey1C7W9UAHbdqUKsmFs2oUuE5",
  "key31": "5QTzAub4igokXeo7A9WXH5tzQbfLJvvETTY6jv4mgrNTKRMdWvS8SDqtX636MY2eZqNmygHbCMD6opvKHGFg8ryG"
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
