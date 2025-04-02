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
    "4RmB3KSsdQHjrfep8svew9Jhstf512u8TTtJ9JgHvQeVGp46iith9s2J5QSbd3jVx2aPXog4UXiLoM1bd99jBU4J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53NYiHJP9sW8G86QKonAtDMLCuULoEW7C6T94JTXzhhaSu2UNSJdtoNNeoA8gDaXLxXhTMU7v6KH5fmPDTVyDp99",
  "key1": "5ALoX9yMBUr51Kt19PzaSD5jriWstrVonDA26gQiTtEKCKa2mWrmMLdRgmgoALHtsFZt9nc5S86a6cdjQ93ouqDw",
  "key2": "674bE3Afztx5Up61M9yS37iBXLkc5NceLxAfjji1mPmGfKnMdYEQDXSds4hQLX4Ueq97u6wbqqvMQLng3Neqe9ij",
  "key3": "549r4Gpm7L7iCzmKTTbbzjTpNc3eo4QA31gHewSyyG3qAwMx8odwKYEACW3r3eMmmUC9sgqZtN7GdCq7RD326iHQ",
  "key4": "3gbp4kcPNc1AvCJXGa46uxeGPLeX6KFTMod3JfoWxrYqyJxVeu18fJhDNqdamTHx7tazX5Z97tFpBS7g4AEfeo8w",
  "key5": "4G7YD9LAaKDkcWQ5zfGaWz58h3ypkuZEDT9PuEQpaPnd4isSytoY2zGLw98ExzXQJsDkdFUSTTHAxEGjzPPCNz1E",
  "key6": "bijRbdKEegsAPZRsPHGeXuAaAhH9jG4SbR9CXWZyd4jLvgYDUgrePZZaqpgPn2jMg9kWPrCqDzdemy6Zq7mfNqt",
  "key7": "2z2Dn3uWA9DQYH4i2riasGUsT4ZSDENHtSCvAAWdvYUJ5GAo9Cr2aTf9aMnJE4cMSBqyfsjtxebk6DWGc95Eur3D",
  "key8": "46ejt6dmKGU2bRbjDFjveFLLa5KhZqtdeHqJG9gvyDBakStwqEKm2f15P71f9CawBT1jGCqvLnmPaWvGBnyppBaC",
  "key9": "3pgjH9MvXcKhT7YWxmv6BP2BM5A9JzFqU4wb5JihCBgpTUkz6bG7HEK6KqypAPJCZrWdNihojpLaHxLrZMDr8CDe",
  "key10": "2qawdxXDcPCRBxvGHzBQu8C4hEMM7CYqP5zyMuFaxEmySW1aHZDsbvWWRHmScQXisry4YATzSC2t92U4nXxCUN1b",
  "key11": "2VBdZndFghEEvzzzfKP7pDzyPqSe23LncHetJKAbAKCoXzekppUDdh2QjGaoPUZwxkjrNZCDkbMV5qbqdFVGeSRC",
  "key12": "3ywad98F6LyJNNqXZ3HXWXwTK4J6ZMzMQBBW8CDmScVZxC2N6N7FCdNPqYP82ztDm8fkn1Px17eWkm419KQ3pYco",
  "key13": "2to19Z2KqBWxaZRbSFZGijoq5cz2Lv2Dd487q9pQHHV7wb9CVATdhdRZ8eRa8QXEPLZDcTxA7GSG4USGAQaq94Sy",
  "key14": "3ba9zhfmfyZveMkmha6jRZmRzdFzNeAezYyjMLaXtJpfxEKtoybXLJxNKb75fLWRatvGEBKygkCLLVkjtcRUzn5W",
  "key15": "5Q79fmQm7RnAnte5ntJ5HgwbJFXvmDaVoViozid4yvbTwbJhR7spCF4m7bnV97CCjJFThQr9h5Lp6grmdYfQCkfC",
  "key16": "3kwSm73DDJrnTXHYh6voEo1DfYnNFWcRXqiqJJVf4Sja1YVrrkkCjLsHu7vCYjQLcDLdqrRDDMCtkmP7by8gU3gU",
  "key17": "2dtnBupTyeo46fBdm3j8z5CFmzN3UZcG5mozpax6MiwdGDhV9iuCF1CMmvyeNRtCqM7N67iXRpjq2V8t9BhJR5o9",
  "key18": "PkBzJFjUTYtaAPRUnqbtMgbm2C8VQze94n3hGgqZoUCTWtze1T1fj4aZAkcHvrTWt9G9Vbb6RHFRVwZEWLcGMfa",
  "key19": "WXABHK7xoLuFCe7aTRKKd99WojJrCWK8EdMjBHT54GP2hz1Q7Y2UcH9dR4f3cNro8Ya9ynnwnywu68nqpS2mea1",
  "key20": "5YkE9iNB2fwUYC3PP6pt49ZvpuUcwqxZq3pxQZhMuxnGtYMpLGCzazq3bAHQvvzKeQnzS7c4nX8gYjCsKK3jBfCF",
  "key21": "fCao57gmNaHYrkSNHB7hjJArrJux9rkCKWbEswzhjEUS6pXdDPu1R6GWxenQT6evecuPThEjjM773YFViTtdyNb",
  "key22": "3dyJxsjiSzrc3DR8jRHmYGJM168G9b7LTyKDDZCitqZPKpeJRobsJ5j4dDoK7p9HyfCe8SKjZ1kBsTRHfdiHxMsd",
  "key23": "4nEetgEGr2kScuVx9qgXhRECUstE5TxGS4YfJJs31Z83EBSMqbNrZ6U9fa4ft8PBH6RWXBzoqYD9wr3aFcMtLZbv",
  "key24": "56s7YZ7FL5Y9tJCQou5xo4xAvLBTyZtJ78y8GGudm4pdbCFRovTzeENxFYc6Z49sFnNdpGBguLUZb9idMbf33gYv",
  "key25": "4hXn39PRUcrCpGpDG4NWUK3aDLwzsC6FBRUvNwiWVSxemgHJgkWC9r8tyVE55ijhyDpnpuYTm1cZv1FKu1pbqocA",
  "key26": "5JNiMiDerSkQkrmRpWQXBycSGbNNydtDFj88MiGDur2KXs7eVDaKcTYF96Nbyb3SqS5Vhioq89utevrNe3qoErNM",
  "key27": "3Js2DnQpUoeXqAE2GAehXb9vTKNNQcCUMYaBQCW81yXkk8T55QvbMJ9dnxugPVJQsAojRVjPpogNwW5Yks6t8XjT",
  "key28": "5K3zN44kNL4SAArdyTQVP31i7FYfgLAvsN2XFrJJh7SFK1b7ro9nUXtMVxT2q26Fqm4DnYzo3fGf1aBV5rJJxQF",
  "key29": "4RuudVUNegFcdBcR8UkpqyD9hBwdhHypjpk6KjhroSn2ZSE8GXzn4iwVbRxDn3yJxFt1iRGfx3hzTh6XBfu2SXpw",
  "key30": "5XAfAAXpF9xyf7TaJpqFjcw3Usr9JD3z4ZJdozrz4UJEnheGsmvnqrYtSpAv1f2SKRpEL6ahkCyDes5kvkwNPXmQ",
  "key31": "5LFwjNjwVRF6GbtSRy9m3vqEwpmrB1cx5MTVRgb3AAfEBHqu9waxRgemm4KgYKfWAHaucX1WCptiKUAMW5dTPpns",
  "key32": "5VdwqQvdtoSCAhKz3wJBEHh2wXdFJtjootKnMtYwfdPoWmqZ1neFk4hUZD68eAf5UAZfixt5xsJSrAZ5yFEbcSkr"
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
