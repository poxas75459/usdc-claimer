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
    "2dWzeb8w8BBrX5QPf1USUiKp2oZD3MPDDS9Ux2r5V2cH8Z915Tim6qaXgZtGStVPzhSxPXipK7iEANY7EUsGLkJi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vVRsM6oceDvEPPVJxWxEcFitQAtJPhcKF4ghb3yj7d7ythhzAwnbXXztkJ8FM4sA52nDXz33HwRhZtFwZEbapKY",
  "key1": "487xy9bGWtheBnTtuNh9wfC9EmeGxv1PnyaaWezSNSTiEgTkgTDn3UoCLfZhUgJZE7wgkuxigcFdMstnWTqXrkr5",
  "key2": "4EXxiG97846UkLMnmSgXdP1UHKyCw3redEtHAE2fCQ3ttaAb3iVUhaHWQVfsVKi4aSNJjzrMKNgReFne6MkGLbz9",
  "key3": "5vtEs7hgZNAqdKpBBvGLQJhkYzUPrsgQJunbVsWJmUXzU3tend7oK6CVhoriJfVfHK1m1HU7FuPnRrCXZX2iaMCJ",
  "key4": "pxmhWSWNsEzZ7PnorNVuGcWVhsZrdxBUSrLiPmSqrDkc2S6gwAXzpPXjV1wCyqGpjrtoEXs6vk1DYhGgu9oKXrz",
  "key5": "5Uaj2XN7EYJQA4Vn33Z11wApGKYw22Ab8NSkSeRuPqb1enJhkJkDF7aoHk6RW4gPAGxXdWBfYSpt326BYdZQy5oZ",
  "key6": "5jgeEjsEr2XVJFDdt4wJGq4VwzWH5VfGTGWcUfXvhWSGRmMMJnZ9QoSLRVVJsp8XuJp1GkSDrDsJ316GYG7CkWU5",
  "key7": "5vvNtK5HXiQdaBueD8JaG5vK219AxQwb1nFr2nWF2CAQ9iEAVkGYBBjeN8XUYhNztW1VGFK3TT347p5pce4RoAR4",
  "key8": "DaYXMZ2tcLorwJ6ujXd7y7C7PB2Jot1YVSFszk7YgU8RDTcS7rFTdDq5J7QHgLVxtTCjpeVjo9kfau4hqD8RcDG",
  "key9": "5wU2mYUanfUsQ6oZ4QbZqMQdPzzL4TeXxJk2JBmWg6Yd5FnSPikWADqZ6VLsnHxqZSuMFjFkDi6sjkc8EjjL3ms8",
  "key10": "5qtH1E2PTojMaPfXWVzGdYkDXPRVNMWUvRSw6dXLrgmjqfpDXtPEyZoEQV6ZDAEtJR6KnBguyBeApcHqNHb1DtSq",
  "key11": "6142tPDsDrnxcd13qgxTRUj4SWcHjpuXnWwcuGzJi8s2ZovoPHpvvs8TaVnaAkYDnh1Mdj1cGz6bBfp6THxaMiFS",
  "key12": "5M4Ua2JE27LjwyBy6sYM3UNkHsrAZTEAfQLGaRwys42oHrB9dBhhFUKYa5PQ41LzGXTTgqXDXDtx6jGW9xyhXDVa",
  "key13": "46fsRa6RWUKga54PhkvRiEgUnwPqpF5bMy887jKfA2jHuvJSUpXJQeTRoqjnsunQme6PxmAqUZDfs4RDJaKtg38p",
  "key14": "5ewmaUKDDaR1XCMHPbAJ1XD7scvb7MQPt71Ztsx4wrenurKF9aEdrPWyE5e6b21soiviuTRX5rYCwV8QvqRRgwkU",
  "key15": "3E1XL8MUjuvMAvA8wGzhQVnMMazRxb75hiK4UEgG3C6v6W7MWNyVHpQ86NbxLK5suyDEfBBJBTsTNWajDm8CL71M",
  "key16": "2MpTABUcSndSijLYnuT1r6oei1eAwXiakGB3H7RJCU4vQMfZdEUXEWFqNKSrKtttReddMFF8vkQEBWprcKMTZsiZ",
  "key17": "YyuwZa4a7MQ5M4Zga2wiSKPJ3Fe7EhwN8L9H1izEHZ8tKCnL9GRauUJoFBrrVZBoRKRQnEoR7r75MvsyasGwrbj",
  "key18": "2ybnWAzPr8jszyhxvcR4KWicV7LLLnXvAjuymXv3v6HtyZ3JB75ei1morAnQeG64dY2K9F8PZqhFQJXPM7mhc71A",
  "key19": "4sJoANWJttZZnXqUjQtT3uiBEgZHgVxsjZ8ywpqzJrWyQXxfPfvqE68wmtVk3V1uz7moWnykxecdsojYH3ZgVm2z",
  "key20": "4NsjKMwsRBHBYv7moTFsRKzAXMzMUA4ngrStons838Duos8dYYj2UjNCDnF2ZZtToaYcotEQpvFTnSnhTpZmBnX3",
  "key21": "4FrwAsELMKXJVDZebUVniWHxPcURNPZK7gPoctTqbaXzfLgbjQ8qqHVqdqjPJgyQ47JVgEb8YVbidMn2dTXwp4FR",
  "key22": "3vjJRcGAZcgTRDnydCDd5wbPRzyF9vXpcKECfzAhwHEFLVSD7FUXaMqfgteoGZyeSsuN6f12dwqFVphW2uFkhuhP",
  "key23": "5ck1aErGCwcYgZqQKGuez78oKNz844uyiW7EG9UJQeaafoXAGaW4aVFFNQKeHWLS514WYWHyeRm3yH3RkFb8L8Ut",
  "key24": "5Xm8772qEMVm4nPkCp3BwYyRcTo3YYPdTjmeuapwZtviRqCZAd7dBXR8winFEyNc9qFZmzDLQcM9X3WZpRyaf1BJ",
  "key25": "4PYddcETrcdCvESqDT81VyTjyWWxkMfVoRVc2iVsZzeP9nEfDt2Q5xUAyddRFvsC5kbteLpHp9hs74pxEUK3s5uK",
  "key26": "26axsWYkqF8stUAdFJ942bCfdFHTtvVigC3EV5QHqLopPRgtprvGRfLdXJtmWN4cpq7MTGLV2Vyn9WNLF1Rhmtzc",
  "key27": "2fkz1aEQdNbBr5GjPb7mJZJGN9TNfoJwcyYPic5gjiuhYYzjgfMB2d1t1c3csMNy2aYCUsAXpx8AxSVML9EX3utf",
  "key28": "4EgRwa59HwmsoGLCR3BBL53CgVSqxZtbwadLieJ4sbaAiXRSGsBihFPkw9cgsv7zLKsEha1AztaGTPH7rooXK7bc",
  "key29": "2V6tnADaMrZcq1k98jqFPrcNfbuZ3jkts9YJ1vbV55tef6oV8WiT6NcNgQdr5oy9ezbQjN8R3G7X7UBrUSeazp1X",
  "key30": "2hwY3moGBBe3uVQDLd8phQjgr9wZaJcTc4HtjKWdwAjxgDT5ft68JuwRxnMUb4AE5M9Ea8nPFMnQ9PnPv8nYcb1f",
  "key31": "64StvwrsZ4KPZMhy7oVuPagsVDpvULkvfdzDJYYPx7pXPMu5fujDJgJpBJ4V1pwPaXv6CYr4DjCorr9MUcsfJXfm",
  "key32": "5JTUCVZxih3AYtbkEkwh8uRiXuCjXdWBGvcr5PdYRS2NbSAHJCUyMnxZf9LCCoK3fHsxgGeBXihYMKcnJt3WqhqA",
  "key33": "5XUYrohcyAzF7V4tphxxcAZWivFqu2xS4M3dWya6bVT2w2EctnhQtez2hADWmk8919Ba4Q3KR1N2x18DjbYodS6P",
  "key34": "5gxL9bE1n12PKgDiBpzuriXvdeZReZpZB9RuU1NNdi1jAAhMC6Uk5oWpazvDNuHdZXeBjKt9x9w1ZdjzP8BTr6Y",
  "key35": "5VtnVr39fyWQs6qz4FKe6H2qnbpTXmWHkVLdfi546PSEJJ79qWBUKPMrrx3PuAu2yS6NFYyv52jDwbMSZ3TWX9Mq",
  "key36": "47uE9DDxX6d35PkTzs48twXs12kNwmWF5QmMNhKgG7eq2Ttfhurh2zdGu5CJg7L9RPwBv5yfeemA9Qotp2NTXy7u",
  "key37": "pZtqvBGmeqbPGHufqtt8gDNtFsTa5XG6qEsUPURbUnbdKJ534L5nkjzvYRycb42gvcimYYWJ7aHNv8XS93Uvux5",
  "key38": "467k5agCB5EAmQUcCTVubXVL4vXRFb6qtrpP443weVfpYLdDk38m1yKUiQDDhZoQnAqigu2Zwddws9ApV5otZJCR",
  "key39": "3AqC3RVJerpHGdFf9U5PYtUqp9nF4R9FTeGxWg6uYysKLAKwDv86bawrgJ2HEUBbTMe1qd7MCGj37MTHrkyoHEfL",
  "key40": "5nACWnhbHDmJLUXHqqsb6Be8RdE9T23Kd1ptrykjF3BTxajd5vN8qgo94W3Yc1cVbbJUnxQW2Tmkp4kM5816oGvg",
  "key41": "2aJEd4WcKazDMP9yDzcnqPGYVmWXM1KSCfiQpoVkLJ4ihuMZjRnefXFjZfE8o1qLLLYKn2ghECgvzUH2mMsgoVbU",
  "key42": "3qPTpF7uKNbEtVtyjxs8D6W5AAcxaNYHw1z67xpwasrsVKzNVE15WW6v36jFkHi1ryXh9suifghNWzKcmfxVqjWz",
  "key43": "26joouzAj7yzrXHwsk4HbxAydfXYwtfBbCPNynSKCQbZTev5AoVaWybq9HJEYHoCr4baXze2ZSAb1Qipbp4sJSst",
  "key44": "2YzERrM8frKmYPdCgY5o2CZCzbPb7SNBWwY3dhvdZLV9oBtHBQdx1E8FWCgPz44WM47VYh3ARAwCbGqzpQUo8BD",
  "key45": "4MDCXNnkZ9mc9H8X5h1XoQKxS43TAhQaaJ9ZRyvEqie3j6ShS9WrPJA22scRM2PM3ydXZToQuEpqS9VK9XB2ZiBg"
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
