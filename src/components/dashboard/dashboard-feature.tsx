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
    "3ejR1NhMSofMP96es5i5JGVAp4Y6dZw3GdJYKVjH36yHbHvPo3UNaHBPa7duPUqzdJtjJUswqZqx1prvU45C2nN5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pYoutU8GJ5xaMhFsuwVqh2QwnEPjrmjV4qEj457gyhQba7EC6hH9RPmk9CVdMoPb6Lof6ZxxNzvjyjQX3wige95",
  "key1": "zbEJp5APQC29ygaJjZh6dDKfzz8WdsxvceEcnTqXrHEUerrGV8EPCY122SYKsbCSubio3J66vPUYG5MydJnP8F1",
  "key2": "5dckWrAWHf2317vC8U7hUsBdsi9mAkWy3bi4DKrJSTMA3Y8tSZqEronj3Gb7oiaMEbsizVjqKELF1YwzTzWN1vpJ",
  "key3": "XZsNVk7kaP6kJZP5w99S9oqCzmMtT15Vyv41z4ZzSbAtqR2S3qq6b6p3ySyQ1nbAfGnsFyA6VxxUjqoTkf5ycpE",
  "key4": "58SrBBuxCbBmmTsxAZz1cx9rn3PxB5uQHy8ExqYK4J8AwhKisBRQ3V3dvjupfYctA9TpBMVDb7gPHXUNr1VorF3L",
  "key5": "4rV5jgbSM4V7nVMNCrTo9pAkQwNwAd4f2fy4AUh7ZF77C6MBJhpdiSXLQrYefoUY8GMx17AjXyqJaSPYs2U3ZxoX",
  "key6": "2TnFJ9hNNUmhxBjowF2W8YcwkxWssycVPRHrkgzi4pgyag1pzAFr5wrdyRB24qHRAXFbmzupwBnRmp32saiuofYC",
  "key7": "26sLV2oRrYQtX3DmS4oJyUyx7oEcCSHeSA89WQqEvQSVBSLULvek55ohQF5c7tnUbAYFA3FkgzzgrteD8FFw1wLp",
  "key8": "wLaoenCn35CsFMTVNCxJdKmTap1ipeNizEkZfF7zjAUjb4x5x5yv6pRgsv286M7WoD6Jyy114k4SaKCwnGhJtVL",
  "key9": "3FPWa2nmVohWKhuH2Bx2z2PTZJ7LHjfei32wTaLn5W3kAiES25yzr5LKtM11TrtJ7SyQV5YQbG4LmGaxeRPun2qP",
  "key10": "2tFYtCfk9nSfBQQZWznaHUp8duLL4KwncHe82pNAUs7YJ61pENLcpsWp43D4qmj4AKw17VBfKwY95rEiFFSe51k3",
  "key11": "5QoNFBr3EJxWuVhQZg26e4J1MZijTKjyxKfwz34BiSHUXuyVGVXnPUf8QKBFg1pKvEW51t4SmHEMaEy8tcFVL3p5",
  "key12": "4hFCT8YgfkuYNisi9M86aYmQbtyJWEHgRRv8H1DFpNuGiZts9v68SGXjqjqmkRduPZiytUq4Pog7Ve5tStJXndkS",
  "key13": "FZEL1Ch6aPzL8Pz2hSCFD16ptT4QRYAnH6XGBnKkzGijpHqGniMBE7BAhs7M6xhqpmVHMhLahx6svt6jnf3foUy",
  "key14": "4DQoGN5j1iKMS2Y8EwNyDx3vdZowmDYNAdkZiPMk7myg7pN24VmMQqUW3f1jmWZK8Ag59bxGws6zrMtDtBfRroAp",
  "key15": "J5BxCiLozEVZR7aim7jF67ry5SvyTVbV8DoKNzVoUG4CtuG1u4s2wuG4Uyy3cnY7pKn7k5GYoSWEdVtiUTbDFrk",
  "key16": "5f2CTzyceMsaNaTdTQ5dJYiHxtpXnDCDNsb3T953ydn4EVR4TDB5rT8zMo2opUxuUJqzHi4Te8ib3rZVMV6FMDQ8",
  "key17": "3pPPJBB1W8TDQwJ8LdC8t1mBE4ypVoNH2Ckw3ZB8Q5cVJy5Sfv2q5zafC4sgsKHQFMiTf7RUCJcb8qEeoqpQj517",
  "key18": "3pgoPFX1PzhRnnAzk31k4eCBwjLVqYNZwsXbeBqsFW97a6MvCF6dXd2yZ843iT9wRZnKeD4jft5rVyLWvTErsgcF",
  "key19": "4LFXmtSYKZyjqA9ugr2HKeg4hixLt2kzdPU2ftBncBuokV2MydQ3Lk8LTRvJzEjwEGb1sKQgvVMhXqsKiHKDyWPQ",
  "key20": "RJ249L4odEaqibhvF53qNdUgysarg6cSXNgG53gYLntg81HELRpe8NTXoeo7yMQx9CdrV6PKhQfLmopcQ5VuWj3",
  "key21": "BEqjjGTEBdzRW5F9b8CnKeX8FLP2fjMBFcEuB61iZMPjGMdKsZPsvaZQGeprLQqXiwnfUzaSpPn6d8DWaauPpHt",
  "key22": "3ZzmZNQcwUrGZaLmHgGEzXrxuzPKdvbY138eNsmnCbxK7odNBTwAzod6vEAtNHYcj8w4y5mo28giAvq2RQFM8P7X",
  "key23": "byF5EEvJGWovEWeorZ566tRLjD4ETfRfTk8zHcdRCN6qAkJs8K15YiWJH5r4gU1pgnirC9g3JkkHyYd1eAxgPN2",
  "key24": "2ZbWZCyu5338c6MjNbuvqmYzaNXo7eEmd1EeWwpZZqXKfXguhGtuuUgmvxQx4bpkEDP67Mb8iXp63SXs2uJusHMW",
  "key25": "3ZA4sqhon2MrqmboX4yWuiLzDLbCRovAF8NZQHHvZ27yY31MerPCvnGRZJ9WJePj9uWNy4Z42DguRnymfkqLwC54",
  "key26": "3NiuxoFiDvbzzdvwZM6xfeYjtcnF2chGqJARPDr4hFxJSEDxL2zJohtvWPg4qvMbXqZqXoT9peeTLBBsFMYEQusS",
  "key27": "35jdsz75gqAkwpNzJtWEXoYvNZBDPBKNrm1u6LnAo3Rfi8tJRve3gdyAjj91wstFG9xfRLTSrgx3mj5RfJBXkES1",
  "key28": "63nS1o2F9rBqhuewZ8HJQNFD8qTLPJkffi6uKgrpg7dxAYuFUdznKuhEL6YhLU5kEtD8gWTAZcz99PoLJwfMFqyw",
  "key29": "4TCdvhgaoLN5gypFr51bv1ttxsWyHLvyJLR4PSifuDURKhKpTaSZER7xG1R5rZR3FGMpG8xBScrijPTuFQVxKZpM",
  "key30": "4eGsN6RYczB9AdNfpcPxXm7VVYwcybjtsUegEFmA7ngqLLSCncVpfJtd2e8HKpFYgd9ZyBP8PpyEodNVKnsVtGDc",
  "key31": "46UxDPwo8zaWwdbkvb24pV2SmL7CU73jS1uypUr4dPdRE7R1rcWyTBDRj3XQVki3923Vb8M2fapY2JLJt4jAhdLd",
  "key32": "3TJ9RtM81q8GczB4iUbuVhJsZW2xHdEpnETKGPDe3aAVQsfJ5KpHmVQRXq9Eo4ohGGStvysDqdh7DxfsanNGY7Gm",
  "key33": "viasXd9NJwEtZcmi797GZ2QuLwiwKqnk7La1AR2EunScAucKqmPTohRW3eBvTxXKx3qwoiqyAhUNro4zpGg34kD",
  "key34": "3NqNs2sfrNEZSppj7qCgMSBmnBtMBrPfjWnz27kkeJ4Tvku82ZUxXtebZmE5nAubcs1PhWiBiy9hyJCSRXBdmaWR",
  "key35": "5xQ3847ANkT4ZJf15HNWF9DGHJ5RNnsioqZS1ou26KAYpgEgeQjsHo5U8DCGvAhxBCfjikdE9fT6kvmzTu7ww2mY",
  "key36": "3XgC9zHGZSRj6XQy2JzZLjQX1a1pt31TQCdmX1jrnC9KrJpY14mkCCUW5BbXtk6CixjaNumu9VjtRXeNgjdyR2eL",
  "key37": "4qALrwfoUBFsWMrJ47EBpHwt1s7QZ3RtRcTyy72CgcoM4wgDTwqxwLaxSRtchJpe49raaXHKBzwwCo5VpCGoiwWW",
  "key38": "2pPLY7dVeLU6T312eY7kHLJSJVrkKqZPGqT7s5QpHEUtQ8NKzNAbK3t62tb3zyXD28veeR1YuUt1HPzRfmJhKXbW",
  "key39": "2kpgPSFrxGtq1tSX5sh7NB6Cu6Ph96ZojUNCecFTMwqpSubBZRgZb7N3ErJsA1CvZWwsR6M3HTi68g8aBpsyciLB",
  "key40": "4Kf5noQ1cjZ6dNVJRDsqrhQtdN2uL34taGCakmKnhpM7P7yhoxTDTXK7Qokn6RSThdZ368iFS9BhqZ4UKdzEBb2g"
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
