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
    "4myo2VcTc9ZEdWzh3V7DyXgzrxtFpe2mowKwFxEJJh958xVakjjhz5sKRoNjujoxYaksA5x9ZAE7oqthEprxGJpf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63qk3TYWRHW3sputeTDri3yfdLNPoxzHBNfVHv3ze2v6R5TeNGspajMk94tt4C43XVyCnTaSqYM9Cxg4ohHjaeGi",
  "key1": "2mAyTGwNS6j5fkG356WTzdQHvQMdNdRF3d9GeiygecFiYkiBWfHkwWCqQw23UWSMk5foi51ea9PgPfsVwNQi5KYL",
  "key2": "a7W77keMkE9iPJWRBYzJW51hBf4ozGnUsMBTa1p1j6YveZCRwHkohQQycuoATrHHZzvN73QQAxSfC1DGYEXiZ37",
  "key3": "eaCvDJvSRGKNFraDBtdrPuK7e1YeJawEwb59B75JDHfppiDvjGZ9sxpdF1mU4J6NUwWExY4Ms72fdPL3BtjK2VU",
  "key4": "5eN8ntZ3CXZiJQkmZvmpNy5GEbJcdTmrAtYgSAcNEuyao5oR4nubJuGrh1JCw8hLvWbfQaG6yGiErdtuZDLuzn73",
  "key5": "3yhHxczrSeDuj7cF9XDaVFYo8cy4tMg433yFWwr47VCjAt5pMFGNJ7JfbaEyhnC6BeLLoguHnH1XRuBYrczuZPev",
  "key6": "5yQDxXNxHJ7ZMf553uTNkkRKpsFuSN3P51rWwqDoRbizgoDR7GHvBVxhNBQhrWN2aZ2Hd1NVu7rmVedPQA8C75Uz",
  "key7": "5sTdwTMbQQUzz6N3jaC6qsFzxvkTwCWh9nwcqwPtiXQN34ZZ1Cw84tN69CGuuX1HT4um52S7QXRPtvvJjT51Yiqg",
  "key8": "4PiMGTZQ9H1zKYh3S3ticQzZt9RDaJLbYKxnAcz2tEr9pDmrM41hDRCkw98URcfaAx1hTht9N9G9DHRKeZbVbtj6",
  "key9": "4QczTM34woKE7D3ieUgLLxDwFMDTsyaC1wE9vKqeibAAZDvCyqLG4stgqAf3X3vLKP3FAfb4Y9M2e8eGSyeypEoa",
  "key10": "5uVvfJdSPdR4ggFWeStstSKEYpYqFRoPHR4DNrFoRsuRDmzdHZwCRqcMBrWRSocxLhbDVrUtQtHjPSTT1k7H4Fs6",
  "key11": "3fw8wKtaruAB5hQAdzRMfWN2p7c1yXgzNsKBZJkzbraNBsuLNKpfaiWqkQCEPPgYLddvwnDfJ92beQAznaWGPxKr",
  "key12": "21wqHa55nFywZREoRsQYkS86jHqutid7LE8u6vwgyjDaBZdwsSQe8RM3d3akDjCMucX2H23Bwjso6adiDawHVmX9",
  "key13": "4q4gJkVfKtubXwQwqTNtKbEqSSGuPkcsbtq8mxcmrVFuTtuGDeHodhM9fC6ssdKdwVsAm1XbLGt2xBs4Cv9yF9b9",
  "key14": "2vq54GJTp8F6NHFFXdkar36Mc2N4ovSyjf4r8BrAPwAoUKgZkM9Hj31xkZXzNoqXRTYXPuB8Xzjz3oDcqdtaNr68",
  "key15": "4dNrxuzmvw8yM8cEwTjNB11ja7Wde6FUAuRhdfZpqv4BHnpix9Jk6VmK2i3PjTvtLU2xKoSdW2TdtmC2DtNgDF1J",
  "key16": "4eNkZqpKGSu8ZnfrWtfRhACb5zumQ6emGzkNfveF7MYy4ijT3qFA8eAsKWXjfLkpUwLrjPDXz15swqST2FbVbiX2",
  "key17": "2FJcjE9iXAo7f1QuJeeqZ27hJGyjxUDuMH8rux8z86zavxLjMDpZJfmcASRiqapgoKmzmWLXhAANHxKsAgDJT28J",
  "key18": "5WXywgoLvF58efYpoapWdLpu56gVNBtj1sRM1xJBCrvyZtTNASeQ4WLArLPUNzc2XcXnNBKFfYghFNRoTw6kyLL7",
  "key19": "4mQpjXEiWnhWD7fpqo1sUbY6GDkEWCrKpXj4LQzCmZvz8ZHng6XmG1EMs5fPUrzZ3z4npnDjWrTaDtYuY8X5J2UP",
  "key20": "cP1GQ45LjnBJB2ApeLwgsTFTA3AzDRp1Hji4M4vNK8bhwqFYKh47Qz44LU2pvd9dXjdn1hAKuJP4cvwVjNyEW3Y",
  "key21": "HM1pTgowk4FnigEfV5sFxMFBhVgMWpvMZauKio6RXZrGyzd8U38FD5HtGbQPVBGRrCf6A4qHsGh5fBBBMTD4QRy",
  "key22": "3Y81dVT6qoGYWDjUYn18Nyzmw926GvG9LAyVG4nAZzssLh83Wcxy47JjgYHEc6NnUkzBZEA4dttEzeptHMYvLq25",
  "key23": "5m3GW2LTa3t2JbtVGd6SnLitwXhyd5JUsGYYetbfWB9DVLJoDoqyDWsaWNum43ZeQrmVKuBw9BK3fuodGbJue37W",
  "key24": "4wGgrWy6BVmaEPpRZz2DGyWEmZxgABfxuq2G9U6cK1VdF9Ry6EPeyrhfaDtJVh3JxXAMSAdKZ3JY6cxX8n1kskkK",
  "key25": "2tm2jjE1xTcCyZFrWc4guA7HEV17e84JpdaKu61LYdsSAf81QP5oFjGGtcFZnwpf2VeWWriNLzLfrW5AXpqR8j7s",
  "key26": "2zbebjuYAHzhDhjPVyXcsKRExCNQ6fQTDHQEWjERkqdmfX9bUfS4W47fur9yz1wMW5uaqbAWxpD93ZnUSq39AWxj",
  "key27": "4KQkN5Z9tBZ2kGWP2E1ewcKWKEY9KSVc9Gpnk93vjxuShpZmd7W1r4PhV1cjZdsDXhME9HfNrZVzsJ9JPGWJEefu",
  "key28": "5xxWrnesqEVBS8LQgChGi4U4nekhUz3fw7G3UP3otPBms8crJCTTzA5N5rFfW3agcvsbxf8cCvr93L7Ez4PYBMFb",
  "key29": "2x1Ter2G38MRY7ZoQU2cuHnhSQXUzRjrsGsdNfVNuY9DbTFF584vkPfb1SrLLB7xDTEL3NkAxNfXywGAa9TrDfrX",
  "key30": "3MDcuBPXHEz7c6uqiegjTNrPghguA5NPoXzJxizuwNWaN11xDtRt5tpfaf8Kc5Rjo3cwK5Qunx2XiHVqmufKcwa7",
  "key31": "42z1v7HgW2Cxx83zXYvmnkFHqGkUCjB6ZkLzanoBnYVerN73cAaKffLfWpW7aexJDZTsk6vtXXEmg85iHzUTbRuY",
  "key32": "5788brxQcEQvpTtpghQsmA6fxbg3qzCgxbX3Jcne5JBGfoGJjmb3QXfvCo19R5TG7BHr236LfXF5jc6FHXYTYpus",
  "key33": "5hkPnrywjX8kcJavDWfcmnLmZB9b9rCkuZVZiJews1RzCaz6yADSAQmXBTFfzssKQHdn6FCQiS4rms8heKRsT2io",
  "key34": "5f5Lu4eLsWzX95uRAkn7KDaVQnfHrABtYEWDMH1dfUymkaTB1B66XfCXqn5gYzqUpt2S9AyPHSYRa3Kq5hHSajV8",
  "key35": "45UWLNotCNmTxDfTEnTZDVRBLeFDi8RMuo6kf1Kaf1AQUXYjhMnRBAwQPdbYQR3iUDmrQwAuoitbXmjRFEsnBmoR",
  "key36": "3uTwLGzsN9qUE1LxjYm1DSop4iExZagZnhAuKQjWAGccvpK5B3FJ79WQjsi7L5MtfKG9NMMgSRKQRcAMDnb1XBZE"
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
