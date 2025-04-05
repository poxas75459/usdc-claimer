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
    "3dXsBW1dubTFSw1vwsJ5yELUZy7YYsDEoYc3BFjYVth94hFS8RXpzk5DosguBC4xPR3suLEXZ2UFJtT7U88suAhQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PzFywrvxLhJwirmCMRfTNz6FtcYmgFtyfM4ckmkaJFq5r2Lc5BULZNAfA2oEv8SLeGTZ81EpsyBg4PWcoZufNo7",
  "key1": "4D8tNnEocqr6fPMsC6eVr4HhBrWBm4por7JNnaXRv3Xe1XWfanmJ1LKEArX414iJNPM9QjoMSeftcCFUxJhLCEFw",
  "key2": "2XWntsUSTdj5doyziKiAuK3wquKGcMF2WoV1LRcbWG3Dy9qiSV5e5ePJeic4qteop8jUwtVimNhBrvAYD34tnqSi",
  "key3": "3rXSbocESyL4ruJ1Cr4dakaCScfVMbaRYJf1iHE1qGp6xEiAFuY2AtZomKDsG6jawqYzhSTMj6NgR2cd55TsvHas",
  "key4": "HLe7UcaYWAxLTtttXWqcPkknmWQSaZjNhArK9SSuopHaTQY7WuKWAutavjYbfznc9jrKaNmj6zN2zyjniCyKFgC",
  "key5": "4ZQrDnMQQ7XpciunM5NESSsjHzDqybP3RK5QEEUEPiYepRZTZfHtMGcHfxxBZEgPS1zKvEsvRDPXgj7dkajpaJqE",
  "key6": "Mj78qkXXXXPPafGiSyLzPxFUJjF7Dp7bMEeLft7vL72BkP4wzcyyngxoE1QAitMAfcvZQr5Q6noo4vkfNQtcBJZ",
  "key7": "2LjqDnQq7MBnLZ8zK76DLjaBoUZkrquhaYJt1N9Cf34AUm3n4bbqscGZ4KatfaFYp2AtgX1uVcXSAtvdYP9tndrA",
  "key8": "5YT1nyK2o6dagjsazx1bXoaNhqveebBDem1Wo6HVbAHH5u42zifMeXZMX1WjZfYgpQrawg21MW3zKWwdyFXgMQBZ",
  "key9": "RmEjmSJugXxk6AfVCp7Dsx3gcFnTDUKHh4CaETPQ6KT1JLd8s3tbPpU3Buui62ojMTV2tNp53pyYmsZRodwjjQG",
  "key10": "4ZezopPj5dwPmCBooG5d5hAVjWTis6mMBZuqHU9npRL5qASKbGm8rK5TvmGqN7cQWESP66GsF2hm5VpzqPD8pJ9V",
  "key11": "2eKGHNqvFK8GVKfJEn1bnVYYwzD3H5wpJoG2xpdw7sZrxWRM9oEMdK3TY2uA3peBFnaFcVtm4vkgu2sLKeVj7AWL",
  "key12": "t82pVger5nT7oRMdbCfFHe6JAjkxwo2pjgUyutPviZGz2gUKF5DGX6uq9oQLm4txzRkhuBzWAwF97T14zKbQPYj",
  "key13": "4TVTYsmKZSwDCcWBxq6xyXujx4tjZG8iWNhfdP6xn7DgWKWSsHbZ9ypbKrjLmeP661ECGBZo1AYrua5LqZvm9Bgx",
  "key14": "5VVd6sWzLxM6WfyfxqSjGpHWEtfdYmSmQNZgxQDG2xWfkdzd2fmGJRFeb2cMkynGuodGQaJgBsA8YWGsa15SYNhb",
  "key15": "5qGpvpijddnNHa9UECpqqw2WpC2poa5CFZXX68dwjKLg7RnBEhdvaCUizm5TJERL9nGYfbQtB1wfUh9pncycfmPt",
  "key16": "F363wKno34yUn6tmH4t7resDWRd9RT8E9bBv3JuWBsuJKWD4pwjUM7QbuDumUTQrEs6EcpHXGzmcKVECAhtGvsk",
  "key17": "4NpqPJ6aU5FE4m9PMhH3Mn9S3UNx7QS2kTTUL9Jouud9yUgwt7DNyb22MUSku7coBqhh4cN7Xq8YhPzrrT68Nsjd",
  "key18": "5bDcUJEhuou1FoSD1HAZckxQUwWLz7q9UP5Rwe6oMPDMkqLZtWqLqzYDyrrTRVcFm49e4p9Z8oC2rd9oT3w7tJSo",
  "key19": "5rnhPG4kybBKDZsNkuhD1GZa5uVWCU7xg18kgqt1ooTBafEfb629NutyMSkVtMg4GvjnWDzRNHStbo9QnTJdcgkv",
  "key20": "2jGPiUYdJMwVjTs83FBByyCFsqxaB2kpxZyPDynqqL463BRbpVo1XTQB2hqsedEwGpV6xAfMBnqz5ye7y6mX6LKc",
  "key21": "KcL2vrpb7vbR1bfPCYJGQuqNfgqGwQtMoii3QNKjzCeNApD9Uoo26DJWtgo7uuxAjzE7Q6yJftDx5ecPAuRnWsz",
  "key22": "9nRj4GivooUC8Vq8pLLaMieRF1dtNQS1une9sGCaj1MVALi6GDt4PN2u3xpf5bYpABJZm6ehAFfygV5L1qiauAE",
  "key23": "5NvhhE4SENjbokr1FJMr5GQQtzcPRmXbo3zvcbXJdjGR7XNvw7WtUJLBcsWTszpcVbCZEAggLaUrZaWFK7bAW6LV",
  "key24": "2V1QGCuFF1TZBTxaYSFj5ZGPRKaqSHUeQg1xi5JvN8CBeViXCfouNh2ZsHfonWqixcmX59Mfusb8yKKaUz4TYG6g",
  "key25": "3aNqmWQ8WXpkyVie7RdHoHXkiqDNLP2WA9eJuVupFWjFobqDNk9FCSRkn9w4NGTRBWsDHWCoX4qa1vEYGa2jxY8V",
  "key26": "5FgWqQtxgbj9uV1SLGiZFin1Ttt4Zj3xS4y3t62tvBCZHB5mqggDrxWXqc4Q4oNUrsr5xzwtx2MbLbsCQBWeVEob",
  "key27": "3ibe3SDNmWPa7ch7vfCCVBn9TLRU7U7ZgQ6Kt3JqzNDYW1UvFziW2uBWvKF9b4QWrzabWKDFCk5LosiMbk21GdwL",
  "key28": "3x96DJxtxzg6pxvGdjtuTnwv1Khnob78VMcVJfQGV1jLWM5ux6HARrkZ1mLRJDRBLyDKTPE9UWeq3Gi7yY3WgKH4",
  "key29": "41DNFB2hfFLvrEJDrjzENjGCA2ZTtLewokn2xKQwquSCUwp6NKefqsExoS2NptDSTsfCJrYmbHj3HTmZRnbSzBdK",
  "key30": "4U748RQaqhbMx3mUTYnAWcrvoQ59vnNFNd5zM5m8eHxPdMzE6uwe9qAHZv35ifRtwxKJ3FpyKM4AyK2SJMceurEQ",
  "key31": "4yiPNEfhFMhmiRNnidkSTjga5DJE4f6uYbYg9JKHSpc8oitvHnf4ksumT1G4Zvd3nVNLNhEDLWemjfAyy2RB4Skg",
  "key32": "KG4Nsuu3McHsoG3TYKEb4X7rgQv8NaDfCudyJJMzK11k1147ncEBQ8HrSr2DDHS69odju2HueJkDmcde8YoUBKc",
  "key33": "5uubPMW963F26HjQTHpcK5HCxikun9wwYmNxQViXmZBzML1UEGXrwmsNskmKJA9GPnvAzBQTNEeopcUKcJmXbkBf",
  "key34": "6427aZs9xPkAFbHNDTsbvCKQ91pRpgRTjwAvemtdUZxoyyRcmYNPbSapXsvRwo5UmMY2oG5yTuCmoPsgFxh4mk73",
  "key35": "M5sCEm56tzxCyhnePjrxnRacFQrEuQb5V4a68QcrSSzbSkivkj64TFZS1BaoMbxz8NaernAFidH9eR4GHimY42d",
  "key36": "3g74E2BJW899FyrpHfu9v5KeM9J66NizqHTPvfK6Wy754QdALAh4Ugrh3X5aNZ9iUpvJjfo8nTFocKFTHMjBUw4r",
  "key37": "65bFECkQDnifQGtmL3r2KDRtCZnh7KgV6qXH1aseLy69bbRE9BQuZgaD1TdevKvhc2essDYjEcXeCn3SfJSxMVQ3",
  "key38": "3akA4fZf5383AFPrfdhWc7WVNa6SWUaphGq43GdTNs58KK3RqbK6h8JRNV9kZ5YECaa6Z8N3ZomrrpFvdXMDjzsX",
  "key39": "3Mp3WLFJBsbHzfd16KcpgLQEpGMs73qg19Eus6M6j6y1zbZa7ThgPfnikbPEN2HiYeRfUjAXzBfGRxZ1SjVaABnz",
  "key40": "5f5yKwYHHUmQxqgcaXeFJ1DRnXYA7ep2VLKUJhre3oqc7EqeDqNuWSRDbvUGvZidCg4KXEcZcsc13YY6hjJzWmCt",
  "key41": "3wyFiJjv9oXfGD2bwbDg6Lhf6Xok6mDfPXmdWh4RQZNXxHYEKAw38P6ogTpQQUpUXXT31PA3XbjpbaQuorWd7atF",
  "key42": "5d7uXNpQwMB5Y2VeCPMtXQvFaA4T6KnRgxma97hb3GetkRb7WrSFY87puRJricBYojNekbGWycA1bqKdXP7nLpSY"
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
