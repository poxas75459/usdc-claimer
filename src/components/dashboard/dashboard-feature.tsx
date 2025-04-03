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
    "273JDccDVoPC7cf5UYQZfDRU34pZiVJirL6AuXJTusHpdG9kkTaa2fZC6U9rmEWnNFxUTta9bqWtxy1e2gxCpY3x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ivUUoQs9QyPqUqvapUMuewF5yAAPKaasiLWe2dRj9jirWr3GpuZGGGdBvadSEjWgctTX4PZrTjsCTzNc6EeWF8T",
  "key1": "3PDwb69Zv5NET82mxPhy1BuYL27CduhDx8rkLydnQh2AXRoFZA8hd1bsgpEBYb7ios7vMMoFVgtEZf9HVrPs7Wif",
  "key2": "4Wzamgcbe29JHnrksVV4RzA139SXWUFwHVvpEEt3gSWpui5DEQJnQ25Ejjeqpfu9X49cJupHSXVm6xJz2Y1ZTLNp",
  "key3": "2osXNyCxuHuTgfB3SA97Vwsu2L44iUJeWhcyQHtJ3qBLpV1EwmZ3pVWi9X8CXLroGZQ6dwdDgVAbidiM6bMy6mzZ",
  "key4": "3B9MwXL3DcsEDHdDSHNun8vQxkCNo7eDNeMWzTgjKfjVLrNy3C22TRw2wH3vru5bvHY9WqGNxsR14HCJdU4uzc8T",
  "key5": "2yBET28k2CB7Y2fspFzJDqbZg1kkMf3p8B7S6tzTFmSVWrCG2ybZYvWdi9QGPKscAfbkvG5wcpythmYbEvkZYMJi",
  "key6": "3vaQQqtzzYoWhBQKvU86Wqe3HF12KZ6k83VVR4N28jMa8mv4GtyzY26VrGgmf9N1yUZJsx4cmZf2NCcWtkin8PL2",
  "key7": "4jyBccEZWyJ9YhYPm3to3bfvyNHMHUQnihgk6Y2PPmNAJsbHEiNx2MNfQNVxv1tPgjoZ1gn1WX44KFgmfgbjav3e",
  "key8": "299RgFrN2HkBszcMTKiZWuG2FFELPtxHZMpiK4DnwNsXzFdakrq91dZ25ohNXAoqa5gFayXcmo5UFQ7wg4HnTuCx",
  "key9": "52xD29CYuWGo9zuanH28xAs2pL4qmBZ4r1GXnw76xXFxRqjTLX3nyCKtN15sfRjx17Eet4npUbJ5RYhtyqnuxtnC",
  "key10": "3CpcxwKtJBAVh7p8LaHvXdDZJJVU77fhQxZbUX2QyLLuQ4Tye9M3gX4Bs6D1bVCFSLUC9ARnCA2xSAmQ2KHM6pnj",
  "key11": "2grgkWdv9pPLESwo5EJ2vwC6EEKKQTgaHuTLyrCRAHAtH3ftQhBL6B59jRRhkYcgjdMPuJZ3f9pL2Ddfe65cguLc",
  "key12": "3skhFvdhUmn6WFuyKj4nB4TCdcJQip7e6wQYdnQcVvHg6C69G9yp1oANjtf8beanggXHLRqsU6ENm5jMAJDMPfbq",
  "key13": "31oND4wJuRjg2VfjXG4crDhGXqFYkki2SN7BzCYYQMEyC7YSMv4gPSwjy4Q36mwryzW9yd3v3u2r6N4SGvKWQ1i9",
  "key14": "hweUKbgeDP33SiQEiSiHruiDJu5ZtywvGntfFfo7GKcvAe6yN2oJnEqEJozEEfE39QToifajDA9oyfNgc5PVLJD",
  "key15": "4XDKDXoBYAHKxZyh3jBr4hawGZnmmSzKzqFLs7rKciBesgfimwpQ3vp7edF8yZg3qoSThWvbDw8eVsdqzgBZ9py3",
  "key16": "5a5B45khjmby6r8KyPCaT6gNEGium45MHYaUiD2Miqcs1bHm3TYmTPq1Wizoz6YVhSwrbpTM43gzE5rK7hpdq7GD",
  "key17": "4eNPQ6tjVwFuiVdYu1H3Njk8mP4CeRMUJJjejrg1LFbLUZwsbgtRT8VnMMQqmAgFyHFkUqvhztoXPAfWoUHsnbVm",
  "key18": "3E6jVP1SEZ8ehjQKVj3foSG38WY1ZyhXTfDK6cPok1RshvE8rNupjoWJvqJgpgAwzJPf7GE2sTiqbv6d1pDyo2yw",
  "key19": "2RyjVE7rprWCjxKBEWRAL1ZGmS4iMS25zayEoEgYTPRjFuWGPXSkKMNy4asW9Xo5CUdPt91CDv3nMKuPfcb1ukgL",
  "key20": "3zbdttqW455nUnWzfLuGfXbamEteaxYWi5f1aytCZ2rdZWW61WNkxVFyNCEGCK5ChEVjVDptncgrsC6XygnvibyK",
  "key21": "4bD5YC55WQUv9S7mes3PDJUnR92zA3tdGnMUyUGd5bgr7Xh87KyhFi8eG8SbmwwyhfN4pRza32hW9dWQWgyxG68a",
  "key22": "3CUNRktzu3b1bAjwzvVF6UKhDEWWGPJBPri7BRJBkpxFvmdn4XtLaxeb2wMhXFwvxnhiSwkuSDKSCMmwTZgYzKwD",
  "key23": "4PPeBvjn9GywCWHRH3nNSv3sLTeaPZroCafyrv3HJeo3ENTFigJ2aCoPn9ga3QTAqNT2btLBEyguRFyDbX7wgBkr",
  "key24": "36ySBjhEb59M3nqLD13HqrZy64poozUQu8gbkcD4wZHjaSGMxhDsDhiUWQh7DCw6VyFChgdB3m5RiAMQd87gnDr2",
  "key25": "2MrWchzv2JrJ96CGYPoN5eQLtF2Q6CEMgFMVa3jRvoF5H1HKaHHRKCefGKKVQbiLVS6GWb8QCFnhvqWuphUjP9xT",
  "key26": "56LbDZD631SLE8NvByLk3HdcKwrtM2179PP5sWRe7BYSVnbptA5emdRJek4o3H94ooxC5qBFSui139T1SD7Lx7GD",
  "key27": "MmF4VAuzhBFpSrzdfaRdXG5snUTJSYAkhGeTe5y4a4ytZyM4GKGBNVqeMz3DcJ2nYY7KsArpwksMFX8rQ9Cwxyi",
  "key28": "56M5iSwcTxL83Tc1fzsvwiDJmRJ5PbjZHrXcw3wJtwYk5PuwHrDwMLNqeF6e1fc5LwH5WWciz5bRjoQib9qD71z2",
  "key29": "2RgndkKXiixyQNv2iEcBM5wVFvNtGcd9L5Rdz6AHd1NmVgKBoMid6ruN82jLchBNso6x8B3HuzEVx9ky9oYhpm4A",
  "key30": "3PUGH4Gej9cC9mDtF7UErRhqPg64WvzAa1f21LyPpf2sUMo27zvjPzFg5wTmb6N9CJWhsQ9x5KirH5qvfabU9zWG",
  "key31": "3rpDJvaoB3CBvp5usAHFApdxXk3HK6WhM5w74jJn6smsiSm5F2tKyA8LKv8GqYiUnTqtcwqJHiCqwTVv7WYcZChs",
  "key32": "66SZPDiWsjnDEZtg1J9Xd35rHmeVQwSK5YCT8isV264MJKghArGC8WVUKvRdwB2Pcy1FuSHUqFL2NNoXJwWsiUb7",
  "key33": "2xzewwAFxhr9z3WtRzyoig5oY3aUijyU3V5NGprgNYZ5eSfnSBbi8taU4xNroh9XzVW24vfQGya5TsL7QuY8fJbR",
  "key34": "5CYJNFEN6vdwQyXKF9UMEf1huik4jaBQGtTQMpeYiQ7a7nkwBPiL4LayJUBE6wQs8vdRV2Q84Bzth7i2NZwjt9t",
  "key35": "acXDZXBXpg2zNPyFJkgDix7JZZHxLQD4ppw6p4zfKSA5kw8MZzxJzkdCdYGPFrX8rfQgDPYtHSBDASCZv2FDQkT",
  "key36": "21JEdhQGiaEpGVE5HWVW579Qk2ccRPvGHFuqG5GuxBLWhXatg1iVD1bLzU5U8NPB4hUjeUzAZcZRhiGYXWysjEDy",
  "key37": "5CHJsBJfzPv4rzxntWU3okKhWVPShB22cyoMSox6wCP3TsHiHgB8KmdX4PbN8ZneNwMpTAJW6mVE8f97zCECuwyi",
  "key38": "Y5X4tx6VxXwcXoTzimDrraWHfAerecv8TrzxFzyeUDCpaC6fjARvDJkzymE8UTxgoDZ3Xb4ttUMDqsvbdJ6hr4d",
  "key39": "5kcnzL4ZorUwqh26yD6au9ADHKu13nZ9aG266iUMLiVESwTKrUGMdh2sFuVB4bXsV4pyVmKHhvB7fmhQQKBxHAeX",
  "key40": "2bUR2VwtuP1xk3ZbGbyRgWUKbhEVu9tQ2WyEZipechPC6zcPUsnFgqvRYrs1wHAXZrLGGmizmKLpT2bjUnLvTq6A",
  "key41": "5XqPX1EpYvNWyGcEHXN6ynC4pfb2jZB3QJmAYWQdU3V5Y71YLAe19JkQJfNjQZ8VUMhVwhLQnw4q4KAEVNTCycS6",
  "key42": "5WDkRXDWTT6qNR77MZwUaqWQhAeV38AvR368AXBPNNYxxc7sNcjekFzgAhShDieRbjUcEnYB5xDwPZ4VWFotHC6W",
  "key43": "2orbiWw3Q3gNZSkYzRjp8KM1oDdnaGCokFJGgbQZkDihSzar1YkRpDoS3z2k2aTFR9Dr9Vw5p2tcMvtm1n3gnwCh",
  "key44": "5tft94PnnfxnmAsemjAoi7hNRbQcqELLzZWnejKAm8rYtZYmiTyvoYKQ9s6d5WJCD4xzWY9xutJdoAoWjqagwdnc",
  "key45": "5aTNMfZVeNZQncpW5bC2166xUjtQheospt5G5XSCmrEThaRjEUYBSqUSgT1AYRGUv4QvX9HnKaJu8v6vPVkimEtH",
  "key46": "2RDkQr7DPL7gKiohrUkrtXFk7kgj7LemHoMRN6akYF3JqyUEVgw7rA7TQ63ZA45JBQtBR1dfngFVWBwKHNyFMEv9",
  "key47": "S7GRemGQ19mvwzXXmxaiD9BuwUUNEnpgjZJquNoUEduSUBrczbdZTk6CwtnC3CAVXp4Jg6ghWzCtd7c6mP4ARQC"
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
