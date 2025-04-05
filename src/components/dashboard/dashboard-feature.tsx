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
    "5Huv3D7NjYGVpBbiqVRBkAPi5M8zM6Z4ZT9XEMZshMPVpoaLb9rxFGNwqs96wLwkRG8ptbSfMtVo3YbP3Bke5MQy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Hp8Ar213PuerPVqaigpUq2tf9kGA1FdojHDqSaiPoY1oA3qpx61RQChSvi2o6te5JqeNBcvMYeNwovWgtqbL5vK",
  "key1": "5KporxvEfUjmxqtwZow2ATxjzgBDYh6ve8vdcippiPzDvP6Z8g28px416Tw5uSG9oHbQDAYA3cBbp9UjXM71zV4N",
  "key2": "65XvxQ67bHdWRkei5JC2JA5R4WEG6LUF75H2ZbPzEHCxMvsFBtBqRPU8zzLwvrs4yY6TY2Z7ZCuWbCEwfp1nVjEq",
  "key3": "5nfpy2fCw3oRkWCL3uAxkyheqNkpv3LjqW5HNXeDdyoDFPiN1WVp62DSrhXBwsTRMAVEXKKSrQSzihVu163iTcXf",
  "key4": "3vxh4ZSEo8ACNcA8kXrwTCpjpHRaLY8jEWarCbVZ1GrZ177HsNMZRTmRdjkjSZGKoPry4VXHqmenQ28X45oXQeo4",
  "key5": "4qnkWuZpeaLQFnsbp4dmpFAfMzCvKmCYvHDupFgbJEYvhDpCt3fciGm6kSYtP4EiA6fwC6swDxQgCSaVQ3E3yCyP",
  "key6": "3W8Hk836tfeEwSNoAPTujpSmvhwPuLVECaga4MwiVaRJmCidrXS5z1NXikmp3nwR7rNuUmEjWWopNsFUPV1nU2Zu",
  "key7": "7ngbTm5Y4SYrShXAwGMH5reHMjVXYaYt5isKYSSsjaxVYm1NDtQ1aWLFgZxBWrVe7EtuLP1jSzR2L2ACGZKimyn",
  "key8": "4S6whnjQuoNn9dnzkU3ud7MRaGkxv79v5LFEHfNF9u4Pmi2zRoSarSNoquMSaJkb2gc7VWomthZgaxAyF2x1WivB",
  "key9": "4UrFZ2oVf2aKsNpqSXwE3uQf7nBWWxTGX7Uw51h3N2aPS5w1xHxMH8nW4wBDB5zD9YgNCgZRrve27iq3UTKumQav",
  "key10": "3XDWjrzm5PN8kbWaKMpaXTtJGQLgipMEoChynUAXtg3TAYeeM7q1L2HUEDmeh6VoGK4yqBUVWRb7SKrMhDAjHHRG",
  "key11": "5VnmGCnMsmpgBi3tfAmoWZSqT1pdVPsXHR7FBeCD9XvwGrkGTeRXPZGHb212Zxvh49FfSYeicLmLdb1RysNQVovC",
  "key12": "88xbjRrvSbs3tuRUPvxntDHFxSCLZUSy8B8BcMmWNTdTKX2cXpySer86svZFV5DmDVxycSvH6gwzhCMfS8S4pRY",
  "key13": "AtM8RGnhgfquGNPEzQ2f5haBJtoY1tcN4BFRCjePcWYyAsHrHcedmSxShVPWvEop8RGLhv6Dz3jEQvje2fxWFrh",
  "key14": "3KrY7iDBvZq1kW7kjsG2mtEZgzNRUy6ASYXU1PzDsfs6LAiGziZwSY6xB54Pw2bQKgA51FVvK8QGnJDSum2Gcaz6",
  "key15": "2RhgQJKMsY1UAzSfwmK1p3G4UopfsNzgg6T8GjV4sqfWsXGPtiVXRZdv6gY22fR1bnmN5ph1qhn64ofv368Gav5W",
  "key16": "5woUoQKqE5RvKBjHhu2dazxqP1weP6uJFF3xbYZyrLpMQuugLjVnZGL7AaRd7K27mRT2t4CrN5Q5wXtYuob9NVkC",
  "key17": "48EZ4ahhdGnmCeyQirDMaRPx7LKD9cauFMdmRqA3WdswEHrgKANhSfGCfnTKr8ueuvShkiEZgLSPLdrPAiXM7TSF",
  "key18": "3uZ6R8xnHXGyEz1bCYqt3RQPTgz3Trd3gsVdX4HPjRm6EaS9hmShNo4519PuU9DRqbDJc4g81M2VbwF6b6bLe1FU",
  "key19": "388S4Cmr8sctz93vdara8jyskvXxUVvejAMXodvCzixMJMgZSfZzWNgVkNfgLjUmyf7gwionbWfCMY4nNPFifbw7",
  "key20": "64DA4y9VnhToVzJnDgTSRQ2nWxXSV2f2jibrLWqpWfvQSzhhXU9ZnD5bnPxiSC825rWoqsADgy8SrXPSvUbXPNtG",
  "key21": "3tqgCcdkQbLymGBqeR3wyDtfksf5uou2zWMaF2JLJXgoncHFT2hFSgx5QjzLUvAxginwpT1cFQa6VoTTzMjpfrnn",
  "key22": "7vkEe9rHXZwgmdNqGFytv9auGzbyYN5gP9BGkc8KxgP39nNxswenwJhN756vkrQCDM29g7yceu9BWHdm8dgGn8g",
  "key23": "TCGztyARhcr4nzfiBdrqiy1T6QCVAfrCApJp3vX8WJA9EDDDkJJvwpB8x9Jtz3tVDRAkGACpGHKxGTZysrKTZp7",
  "key24": "5ZB4QMDfKr346EwkpMpB7JqwQWYMGJB4VAJFdb8DeNe5huBp9w4yysJkPa4KjXSaXX1hzWPfEtfh8gEbhV16J6fb",
  "key25": "5fYYmEUB5zrLmCRRxPXxYasBz2PgFXhopBAEEM1qphvfWy7ak4PjZ5KrXFoB8mvbfQwqVGp5LGupRBGUU59zLHjZ",
  "key26": "npQ1wW4nxyNi4LHfPYJDQBRLRCtecDkSbcCEZc5PSjbgsFcqkHovBMDKNY2VrsXdtTX5ovCMu5tmxWhGDeVewZu",
  "key27": "3tiqWwvhH1rqgLVE4zm6YyukXNmYi1PUFj4PSiAn43dWtCwAPUSHRR3hycChQAVhoUC5D2jtXsHuP9heBehe12JL",
  "key28": "4T345ZPGK5bfCbPtcgek4XWzzabcnyqSJXuws9R6kS4iWzvi3pQwLR5qwHduRyMNNWoSqmcGXX5FEjyH8fDWkC3N",
  "key29": "4UJgbyCESZpnmMKpRA1YedhomqyJ1pTJx8DYqCJFnujHvQRhzfz796tbBM8cDK2fRkQR3ku21U9xag1MBMyBwYF2",
  "key30": "tjnSGe3bND5mpct8pLyyM5sg99Js2xnfcGsmG9863zLfHZ4unNvs6T3ohM33Bn9rHP1cAsaWxtBhNeQp9kjGKt2",
  "key31": "4MaHpg2Zph5pv8XasRwv1Md12ihDypHVfuP3oWTbddNpKDVoQKYH4xU6WHo6eBiZtiRXmZGXXkmhuovUbemaHk7C",
  "key32": "4EJKrccoA6ip6GhWN3ye4r37dtoNKFbusTKPRgEqt77y5d333ihMNvRRqk2u7hwhoj3ap2DqiN1EUysHJ523oZfN",
  "key33": "KxYJGo66Cu1xT3ckshJnPRm5hbp6ZpPGotoywxf8oTnDPEQh87dwgmnoSH99gbWtAGwDk5SAh5TQzJeiz17vujp",
  "key34": "4gb84MtACAUeb2Ltc4hYU8nfsgxchoDN1ivCY6KB6VSeq8PBQ1gQKCBCFFuSdkmRhKsd7dqsCCLLujB6zzczj2RR",
  "key35": "362nqG6YwkuyC9tqf7Bw1UupHwnvDHnrNYHGHTrZmTC9ES88q5TGL298cAPayS71v1pt14CL2HN2DmxC9UgevKLu",
  "key36": "2e8ySQSQmjASWwkPkbgLHoGt77gTMtJh6DaewyJ4mXrvksBiNVRRpNjDDyQGchKgXBwGLwdzqdfeHo3vqwgJ5DZD",
  "key37": "2rCUyF85WLnJH8AVkBw4oo3RmqkwFRPdXB9njAwLH6WHcmVw2jct3JJuGjjGyMXUYT1vPYzNz6rEdDDKfSH6oVyU",
  "key38": "47EyZmqo5LQJvq4zuNVywGxkQf8ej9gt3LTmw2ZUFgNqvmLt9v8J3raWTzDnkG1atSERWnbVQfGNip6qVgZ3wFKe"
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
