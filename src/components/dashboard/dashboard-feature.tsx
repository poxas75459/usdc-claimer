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
    "3DejNwX1jkzRHiBHQ3noKitiPLxXjDJ1gajcG1eRsHhdTBijve82U6rgEQ9fmD5uXA7uyoqeWQZoDxHqGzwZwWJB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S9ktNshL8QdWbfKCNZcuxuMe35tzLZaEDKKc4eBord9wxeFNjwvE8NM7ny4XtfMcc5tXWJpSnFDdoXTpp6eRcYR",
  "key1": "4rhCAcZ9t9XEbUZg7u6vVyCbeS4mJnBwBppSs2C5GgMGGQPeGMRQv9vUPKpUatx65hFtq3UDsBBhQhrwAAKtcddB",
  "key2": "5g1MHUvzo69bz47v8asTNpY8C9YigJn18kpvvLHYjtyqWmQC8MqEiwv8CxcCpcJhqaMQP9otHzXrGsXHvNDQkkDi",
  "key3": "44egKw3JF1DAc7Ui5nNjQt6jSRBfZUCvscRLwaten8NxDRoQ1xWod44Rp5HhvHAkvituSddk8d8Q3vZFHmHbGtA5",
  "key4": "4MecXihaQfmNMoGPY731we8U9oAW258GRG1BVBg4coeWCATwwX5fv4vnxuCoNhn6sgc5Y8o14uofjA9FaU9ZbAQM",
  "key5": "31V8hAZGwQAAX5HjM7GCCjsbxyDcoVNWVhaQA2kd9S6Pr2mud4aLhf5TWJq8Gsp8ZMob7Xcus29n9NZeLig2UPZk",
  "key6": "3bMtp6rv5rgWH3TUVabQQnqcQ5Z8HDvWQU7tHEBhhAbptW23mVxcgCseiCmVX12ky7ZYwkzmUtBk6phjNz6mDwAG",
  "key7": "2AMsbuWhtam7eBLY2D3NdAq7A1e3KCsa1FjiWeiph3i8pEzuT6wS6tGca4fcVkdMXEJzDaqf9HwUJ1MZvE4Eussv",
  "key8": "q7adi8z7uJd3HfoTaS7Mi9NbE1WbQEybt4gdLe4ELmvE8YMmGimNBkriwwSLfREDc5syVmteXPhBQ3BPm7WZwWr",
  "key9": "4pSnyGkc7t8yuqqrZf8rMrmMMjwFeL3P4aSn6CcafZoWUduAsGeELKChfEADeTk66rGKMxJQGpqJ6J2muft2tQbr",
  "key10": "5epXXkGPr8erKe78irSySx9ZuufNR6c5sEkoYeSejPLb6EDctSvgs9Jti3CSPqWgYYFFeCGEea2tb1eZ2dK7gWSW",
  "key11": "3RKoye8fNpa6znmr2Eu6x9PZzLBDBFMTTz17Zk4XENR6XWXe4wEyvainReVPxjvVmQ2JYBZwpuhD5zfEDpGHuwqL",
  "key12": "4ywGYK7byXQpPthpCwC32u9Va9knfYgBdUwMfLWRhYKCKYEpVxn4P2Wye7P6vXP8rJkRdCv9yrYKXQmnrasZ3bsE",
  "key13": "313Rmsty6FgTp1zyqh92hvCMv17PvswshuZApuJ1FZnk77UmHdnVHNpHXFKqwhPqFEkuPkkPpkr7EG4qWk6sGKLp",
  "key14": "5VPg8F1KjgUjV5TomcuSULeS9mY8J6LQQ8hk5WmkRQTWbeFDeKSB66tn3vW8R3NkJGTBQfh2rmvtusMxTiFU1eXv",
  "key15": "2QdHngnPFETzdDzjBjVv1amwZAEotcAoHaP6X3KddEdz3HGTXhHxGH759cNcaqNQDzCVoHWqEn2LMjTkyxSKfCsy",
  "key16": "4jDZmsrFxfT9V1zDX1nPXsm9UdNJXmPdX9TvHkBUyojmDuD1qfyrvNcFNEjhtYPxfufRwHzg7TVFmhKTvzZ6sx26",
  "key17": "2KLZqLxPabYpS9zQQfcVqAYoFtyWm83Md8rchiLHAqLtqqmVuPNqYiFFbUbLyZKc4eGUSrjxic2RLjkvFrkF18FC",
  "key18": "4CA288nwykMCp2oVNP5M6dMDHcQKAid9Q8jHyPmHHs2CVNw3xqGYLRkNdvwpSEosXMyyhvCBgXGWvgwZaZZgnxoy",
  "key19": "4oUPmw3b5ZTEMjn9rSdKyfAcH9jmSadczg9AaQ7fRNtmNAuiDmAaDxu9Dw3hPSVZwscQtMepBhYS3MzQfz5XkynS",
  "key20": "RzhfeDeHxE6Eb5S6j4KhnVZeNM6KrNzo97hbmdBtNaZ9u7uueQ27w7oZAYq1VMxEt9VT2HzRqKgALSZvaeqBRNX",
  "key21": "4LaMuBhDatyCv8BywS8h3jyZhSPBFaMJx2VsQYkWLKsdJif4rxgsfMgrn5qnijPFmkrPD3renxNpr1rZV4b25jDf",
  "key22": "8MjF1kpvDKUsEiW7dSjKGnrHmNpxxuGSLinP4otwqpjvEHCLVA2DvFkhXUhMCKPmogfgDTTBjBNXmxfg5u44eVx",
  "key23": "4c86X6mCp3KFjMyFbiPsVeDzRJ7npcr8QZMrSJV2un6den95DXzwKpAjVBrxJk8ia4QBczXye2RVaEPXfVaZW9W2",
  "key24": "2FX4zNGNZp2YuJAqZ5vR4nL1Xbhutb2D7uqndJYKh8tTrZHKptcLFZhnErXs78DdSSNBtucuGLpAKjWK1ietomw",
  "key25": "4rfKz6euj2jDYsDEhLATw5uNvLV9mBXPgT3aGTHLJM7SR84GdoGwzjEpPjbd5aNU7QhmZ1j4PDQfu1czq3Wt4WC9",
  "key26": "2GPPv1VmNXYsySnRm1xiEfW5t5gQ5ZQBijyPvMBCmUWc2iQmb7VAEuWRn5BzGNtwoo7WSR74QgNQZEdk66Fu2vEQ",
  "key27": "xFBg5gYXGy9Jg7pspGaGCn5myPh4US4RfWr2L5b8p4EwLD1LWeyzgdojA41EVwYroNr3LUN4dxcJobP4EJuQVq7",
  "key28": "wq2fRYbvAnkb4hRRhJJgh5VHhRYKnJizA3n1cAnF2NjdJ1y9iKK1pDJJ1x9CKyhVFe9dBm5XuiQh2UmJt5atVHw",
  "key29": "34GrpAXLmbrLSwgTNpTekVz5dC5LCjURVDsEaqxJJGHAdoXQ1DfLsdWaYS1G45HjL4RfugJ3YJ8CE4ScQbVkJJb2",
  "key30": "4ngnVfAFLf8ajrXixVzue4TF9Pq6C1HZqENDKK1CzXair2tBdojZCpBhYzwy3nJKN6Zc338AyLeZeZWq3WZXtkiE",
  "key31": "4VuKk5zGQi3vsNPDQZR8xEj9FK6t6zWorwZz2rDo45SpU7SoSMKiJ8EdT3fmk5pduaMdUKp8URDYKR6NT8LrKFGo",
  "key32": "62SG9xYbQcDY86AfqKy58cXe9BsrRmh453zG59gGaBgJP9gwpuhtU5Js4yHXirEGfYwrMDgWtzsCwbGKpi7Sai5B",
  "key33": "9LZgTMnq9FMZXzSqSsJZt8pTzT32mpnvUvXdmhM9rsvphxj6NyaisifMqja7qUAUhx2cgxPA3go1pV5yWLB3cfh",
  "key34": "3Mb3R3vRJYsVmEXTrAbYLWvMvEp23CBpY7UvMnxZfAgpy4he4tNj97r9ti9RMmQ64x5p1ZPMXgYjhw8rf7pLkjHb"
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
