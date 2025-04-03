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
    "4d6aD4RCTW8oCHUaaNX7fquxXPVLaQzgUM9c6VGVqqC7tQEi85oKSsCYHK3ferkq8pQUSbFKc2PDaqN7S9pjBmgz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ikYp9Q9eREQzg6edhjyAnXwzs1uZfZMPvqqCtp1o3kc16bWnR8Q7tURuVFQaNJk4b8orPDD3j9uD2zP2xxQDE5n",
  "key1": "4FgK2KScdvKv9H1JSCnckfkvVAdSGDXqJVZpsoUxJQTYTfSLL9fEHaRDm2h2Bp4SyBnVEsAUMpAMSwDkQcm4TPXm",
  "key2": "3ij9gDJssxJCc6veCYA2G2w1c4xu8h4otT5W7JiVbgjELn7JJVFdzNQBqYLcdrmTZAc3RuvA27D7KHoo4auL9eJZ",
  "key3": "4F6VydTseFQRjCFUDgUwjAaJqNJ5Wfy37yB5QroQjB9HQ7Y64jjFQ8q6TJGF91w6hoF79AzSSJyZtj3UBe8pwfhA",
  "key4": "3Ms9uNKyci9414Z8qsBJ8pRkWE8c9DQo5kETxvsy63FDa1eZEuwgU681KCj7nyTrLCD4kKbrmaY7GHCVxo3yavfa",
  "key5": "3YQSEnXNagb6FmKLNQi9PQjQNVBkXM4kvp6W5L4vYBEz4poVZc4DyENcgTUkjJWMBhrnKPH7h92rmJjUJgnPuACQ",
  "key6": "2weC8rDgx351ZBDCjw9gqx38h6F6JaEGBCSGfz4jP4XysMQTJR3ADiaLaksMNdh84RWmzSfpCnP28Z1EWptAMeWw",
  "key7": "342rN5zf8YH8XZjEQHoC2ZjT8fJBzqGbXu4r5EUSK8hAUrkmsQaQgJ4mqapnFWaFGQotJS4vNLFYAaWWTd82XjY9",
  "key8": "4jFeB1nUw3cEV1Ec9ePwVJQmytpLrK7gNXk7SvMdnT3xy7LJuvUCsvBF7ANwcqKCfKXbEpL8CTQrcHq1YXqzPCCQ",
  "key9": "5GynQW9WrV55SSqUNw57shJeiwTnVZbgEk3UfTBUFb14J1CsHGvviRB1FNqkHFNCZuRz1austMTqhM4m4o8Mb3G5",
  "key10": "5TpZPzo6BfBzgTzVBdYhcVSPSiiXx9sqgpqu8wuwnGyov2ioTBUtGyAvUpPB9sQ3XmjxWNdGVs47PEh7itDJL4xg",
  "key11": "3fLBR3PbSjDVJKLmRTYNx6X1JyFGjcCfUxnTa2xzKyUCSotVuuHCii9JaViEbSKVsMDDSbwEkpQtzVnyyV1coFcZ",
  "key12": "3JNNoj57huPoufZf7FFmouN5QM8FCPpcDaubBgzyxaE98wQh9ZFtgffPBC7eyonvgDZKvtvDPH8os59X4USrUmYc",
  "key13": "qSM99acmR62FwYd1VmDsYkjMeovYDyPcuVTq8XLWH8aGRWyp5WXbZmu2kTZ96757Lhj7MeZV7Z14SxcY1q4M6LM",
  "key14": "2FvX2h9YZCdLwqM3VN3Ri9pg6vLDKhUkpr2uYG6W4w9E3nMo8SCLeC7EeJjP2csa1q7T3xRnfCXMfr5eFJcyFWGK",
  "key15": "4CsdEaZkS3VSPPXChw5aAr5SWezR2t6ver89hhdyRybKiPmDHNDyVVt5pprdeqE1mt2AaRrhVChkBaRsXxopvUKt",
  "key16": "sUsVdtMmsLb62Bxjgj7UkNV3wuGPHbhECftBAL4DeNMMinn4ed2Vmv6NMeSwumaq3UwharUqX5QznDhutNLcb2H",
  "key17": "4PdGEJPt56gxcFPMLGX2sNudH45xZKvYpo96cKyBYdx2bjQNnd8mMXijUaVnE1wEeEQi6ngdt9mT98vAjJxmpNpF",
  "key18": "pnTjprpP8i9ptoqVYbVry4Lo5DsHmmqQVbRsD5n7ghv9BzzZcAfVYmfHQjuvo6976JcktMqA2k42hqdvrzMeYS2",
  "key19": "4T8V6DX4Tc3oP6zkyaxxDG6Uu2d3f3JPrxPR6REaRNjJ5FM53SNSYim174zxSYvjjF383vceL6qPBquMHF9o4Yzn",
  "key20": "2mAcjMp5yfoNpjwEGAhuWY82Bs13zG3gd3zo548jWDXR6V3aQag9xKqzUZ9ueuWFPbPRGV3QkEX9sy4kNRqMhyaM",
  "key21": "65WJP8c9gafbqsaHCjL1ZTMqNuBdC3X3XFWj1twCsekaAAneypscxmN9ZNVjSjsC4DD4UyU6XNHmHycUXXwhsXNc",
  "key22": "2b5SBDCxh2NAafdktU4UgXPfprtb5hPVvx4dkkmH5Ebz8RRbceyx2b6PSGxEUah9Vr96SFBus7mnH1hKobmuJLXb",
  "key23": "45UeiUGMNrKu3mFz2mXQBPmXBMFNZp1SE2nYrkhKRz35vYaqd9opCNkEdzy81PQMj5KAWvXUSgfqYoGFi4DK1UAr",
  "key24": "48ZgDuFVodp1aKKqwLRnqZ1fbgLNpcxoHXS3o1aFcnD5sZsZMmrYbQaUAvuDr3cgqYsF6trUYyiP3Sy5kCkmoMPL",
  "key25": "4KtGr5y2wQ2mbGRxxbkd5KqDCFAHU1H8aXwbBdtKDjrkcd4S8HdUECVo4wg4Fv13Qqnec2d7PNC1tsHPJwxCytDm",
  "key26": "29xo4rktTn4ECWCBQv2ShTyxvYeepiXCrPbDBt29WBEhycZHqY2trLxaBpDG8uzn2QaP4DVP91i5VCuMf8vqJo3W",
  "key27": "qvobunrfCNicsRBsSp759Rrm2HQXQrY2Dm6duTNUffp6Xaii8pGULdZxyGmv4VJZkrKFDdHHqEdAJL8CZCiwoQr",
  "key28": "5WkcZXxAzY963xVj4raW9S7XLat1d5zFhczd4QhjM9cKPss2U1QCmv9VycjdHT8A8v5JCKfu7urkEdxrKaavee8L",
  "key29": "ACheFG4mCHbgUincx1oNEesrEe1Hg5CMSpYofTEnxb447ZTAYkoUTexucufCRgRgyjUH9LzBdZ6MSgNoBYhxAWX",
  "key30": "4nnZxWaC2AGSSkP8umMkTBep9kCvmQoKAXTsmynWP6vyUuYYtAKju1ziHekDPFLJ71KvMZD5ogcQ4JLQKGRFy4Zn",
  "key31": "4GRzY5vXcSaWPT7ZkHwTtpW1JR48TLqSTuejFGKEm9mtsdwvNuSQ6NCQqkYp1mEGwpFrPH5AhieMnuCXmrQoJPNF",
  "key32": "e5NXaRWkWj16DNKJAq16xHLLA5kURdS2WwcjMGCs55cYVwjJwXraiJsJRkD5USLjNMCvzVVTkaJ5aqLo16ZAvhq",
  "key33": "3Qu4Bm3nrUqbf9BFtmeJdhiFdVT7GZAUMU9ckYVEHPDGSJF6dmCL2kiVUXYga2EpuzyX6PfFMRW8T9NB2j2Rd5V9",
  "key34": "2pUd1CJwmgYKmRRrGzk3QbtGcjpGnZ7CznAE4x92adxJo3aEqFVKG4qEZ3LNvs3UR5GhguJVELgYjZkbmLECoCyr",
  "key35": "3JWneAFqXAP6WfzADETTMbKb6aZEbik5cCC4kz9X5ZxLXiDbeWc6DcufPrcrzyW7LhciaKvZUxUXDXNGykfH2SqB",
  "key36": "38u3pzo5qmspLNCr7jmii2jbHePJzSSZrnUu6qWakb8jeYPXbkdTQkq13MjcrLYDKV18zsezEK76josXtDxUcYmz",
  "key37": "4cEMKXnF5fNZ2Ss7U7Q6ArNZdEEHhwUn5w2wn9zK3gJCTnLtddFWUaz11FXr11D2DoeTMEjmmTENDSWjZdFRVCvv"
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
