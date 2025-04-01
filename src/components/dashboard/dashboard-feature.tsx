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
    "5ckM1DdzNT6SUMv1yhrVrx8C6pM5DYR2VEvPV3Az27ZVBzMSw6ejP6gtzbq54TPH13mFwnyhJfGXSRMbpPQBstbE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KVTEW1jjBEuf9nwhi7hdwu8Y9k419cXYNBqBJkeAy7Bkjf4zX8LEygs9c8H8XqtfihupB2aK8UNpJ3HSXmhW38i",
  "key1": "5GdAaU8rFvmqFYeEQGfUh1k4WWkJBMfKRFbdVARoGro9LrfPJoHePrc71g1hH9CG99Nba9KKSUCHsHEfmYQXLVsk",
  "key2": "31ejTnXtwfJdSQeDZAo8vGXi8NNgy2cGn5i1uB9jY5Fu3sFNEUhaDpU2gBJUorQuHJMhjS184QBwATh2mzB6Lxp5",
  "key3": "3owwkCnWuRtCH7Zx7p9cnoAbbpwf55Xor9CRPJLruJfriCfV4GcpGv71fp3EoXAFdPjtrs5EpQag28fRAtiaZGLr",
  "key4": "3yotcLSuwYnFPn4YgeQ7UL4oKvbGyrH4Lpaijjkn6yoxHS2msnGmPzbtECUBLejC2oYZubGEMP9JXRiS4BFZg1Yg",
  "key5": "pUsLrAVQk8Bw6nbDwytpekE5QgGX556diSoTLxtQhksJzathVWYMLq8MdHQ1M447m3bkF71yZvE2K8dmRefR3QC",
  "key6": "2F5kLRvQveGnBeJjNSQAjaWx3ZMq6GLiMYMK4QGwapBAMJPo2HyErJj5x1kiHtiGMrGRuWyxR7tSxswEwJNrrjE4",
  "key7": "4qfALn8WssXZdpDEXj8KttTdGELbPmQN7d8bKsVsrCLdveXvYC7noDuwwYsNujLxrxnGEdcbCxHp6B8QYdLKyskH",
  "key8": "4W5MN3eBjqmjK6z7YrEhcCz37B15u6orjLfMoswuqgm5HUc9WcrzNK1qvYWvpybWZT1cFcBkw8wNZnVunaShZjv7",
  "key9": "3er64WCURizLmmG8R9TRt29JtoXoKv1uZYFUKq8hddLGBEPzN8mF9wpWp2FkcpXSXA2w9ZFs1wkJ9G7JJr6pec1d",
  "key10": "3q8Kit6aPmLK7tFSEh5i9iKGfgwCaRap1t853MQyemEu65iF49wjYdSgxNx339ptGnUX4rJPgXaeHwQ5Bp8hTZik",
  "key11": "5Fimq25LECYkvf9tWQGsPhX9ipxEL6dzkfc8Ldg3uJZFVT9ba7SDGKFEACLp9Zety4vvYCE1ceXvGTiEqWKMojDX",
  "key12": "3DeypCC6BXLozmyJ8EFjm9VGAo364oCQH7HpEokKGaLhbcnUJSNdMyn1nyshzV9yQeDrfjWrfmfTL91Z8LGHar7C",
  "key13": "5CsEoVZdupMqYYjSvERTTVfizRANjDw3dnFadYqvLxG4MJGDRKV9vLZDfsGsAkdFpAA2TvNyC1tRR2bPhfJwZyGo",
  "key14": "uARXrNfHQqA22QZSnJ9sstzFX2iTz6Zkza8Q3zXzXzXJ193YJva2cSTk9ASpgWKb2xVApEeDmgEjZmPdSWnpNRU",
  "key15": "2ECr1KDKmyBMMpfxxnZqLPPv45NYBiMPBrk9QarUv3d9bE5XM4QZH6VtTe13sqnXydLE6PwTULNvmjnXaP4qNvy3",
  "key16": "2EnELFQHKZeLtoLE9R9TeTqNqoCaeuZSEeCUYuppQ87Sry7gPsXS2tQSFxCo1zriPTkEFKZaS5Gj7mugEMhwqN1d",
  "key17": "5zN4cRbCWLY68m3hUgGxm5iwWfuNvuK5PLixLypSiEQ8hgNQUuDRrtDhTHcoAgVBHMSGXG1r6kbJBYX73h3AyFDp",
  "key18": "5WXEoNG3fTA9tqoUH5gXEfxAjYhqBhmfg1hq8t1NGNHpXbKjhvYnqw6CEgbyN7L5azfkg2bm9Jau6Tjmuw764KaD",
  "key19": "5zHJsERxRYWBTf2PAaZ4rEz29Atd9BbswB6MPFyc9EyawD4EdJNQ8CF6gZMQTGGZ1QW9uAWYUxwsnAUDAvkhtY9X",
  "key20": "5asPP37YdeGm3unfE6fr2fN9kjFoj7pAxKrRovJbQsVGR8T8jPDt5LeSmg8kxqULFpaGqaRmovVxqAWsJC81iEFQ",
  "key21": "55KfDTMPr4dqsufzvvAeFHi8ZHNsLATmsyaeWqE8GdeJEGcEtiSSJ4ivjXT1gJUBZQpGxRPxeHu4LBHN1ioXBcWS",
  "key22": "5ZNABWRdwGnb6LnfLuUzSwnrRB3QgmYKawkM49D6VM9iPGZFR5RvBBaAeofBudmEqxyeCPDLXfosVpgC7wbV5eT1",
  "key23": "eq57nCPnNUpLSuaT8dFqA5CvCWcBvrriqfqeoXj123mhU9oU4g1E3nDWty6bSKnyGrmgsFvq69BtS8KN8onXP7K",
  "key24": "4ECKpYYA7hvifg6Wn9N5xtZNZd78hhiUx7WeffQAYL5va5MRFgoQjsroWcBry2Jk7rgH9aiNBfbPazPvQ7iW13kg",
  "key25": "4BStY9urjHeFWTUju6jeHH1kFf84JCvAzb7g36uiMojhdkYYHRALnVPjYr21sjhYK4uQS1XwyjXsXLkdxYoonBrX",
  "key26": "3JTLYTJDDRxuJ7E1kVq55gLrqyayyMT2gvfBDuGWDjFQ7YNM4cSjJXsSJGCfHPespzousMHRvJM9qTGzzbGGPvYM",
  "key27": "4Yo4hJvXnk8Ywhm88Yoz8E14UKZPvdka5zmwiiKn1xDPKifuYpLY6CKz9BQQLqpwwUt3NjQLzqfNiecrpNm9LJkt",
  "key28": "2AEnLGCvSb2NspEHV2cD6FrvajgHM6WYvmAAaTrUdPrrUXnECQgMpojinJHDSbPowNb7hqgUS5K8DDvFwaEpwPRZ",
  "key29": "4h6icShQbFH6mcLZ3ijP5BLXdScMoNWqtkL9mCyPVHh6u8yUEr9Wyv91S713jhmAgBdgUMrF1WQ5mdGCSPfjYsUT",
  "key30": "RTxGgL4b2Bpkwq2EQikSKTbS34JK8dKWhVTyKRi1PMqn5ji8KyWaJNi4NRmdcP4nmyeK2m4LR574zj21AKhGo8V",
  "key31": "CYEKTnHbZgegujdRNUPDjLFtc8XMDxanPbGs5Kh95GCyWEAFSHKcmKhpyw6cmpcbLfRAbTpW5mtpmeqETswYBYo",
  "key32": "23GS3ErQatPftgzPgqX1vJtqN6Nu5L6ANQgZfvvuvDC4uctpAqsniZP3PkV5vkoT7pPJuBon8ArZDmcomXNPvP1V",
  "key33": "omGKnGmQRp25pNnGeKpVjysG7VdQpxWCT9qPw8q5a2wfh9obUCJGVAiw6N2vXszZZfentzqn2bBr13LWmMZQCf8",
  "key34": "4kRuQMYYoRf5fU3RJRe9ZyUs5FM3q6RgArNcE8cvhR9xuoo4xt38BizXHUSUh318o6uNynUqrKZaqM1Rac3NVzSu",
  "key35": "ShfAHAFxpYANeDt372biXedQ1tW2oGgu1PM2bfvgpjMbm2BXitttLp7Z3SkVQvBA2xPyJXFTJvcCPqVyTBjMGE7",
  "key36": "5aMGeV2o5AYQNZ6vAPPMBN3VUA23osxt2W6QHptqSbh2WnqLgzFMy7FqXwFNQWAUNjLgFKWBHArcKPRRP2jBVAK5",
  "key37": "xbL4sqJ9L1bH76ESAggmQLrErhBc7ke3rHAk4xPytemH1SVkQ7wdrwwwpQnoGMMytsrg2Y6sNWe9wLr4r9uEL1Y",
  "key38": "5qumLM2ePvXuwHVw7sTH6PVRV4kSogX4Ged3iTUug3VKQZucruQ1889h25ULU6ZaCRT9Ad37XXkE4xDeUS39DNzb"
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
