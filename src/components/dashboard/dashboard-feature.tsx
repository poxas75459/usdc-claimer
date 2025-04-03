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
    "448HSQm7RrcNa7gFsWSYzjCwMMDBtMCvDMu1bXkbjG73fNbMK4jrcnpYZUGXRLtrXgNBMmSWzhvPXwYAs6F3M6Th"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NQ7a7fRnK6LFbT56FqYdk5N3xSCJ2ebsDHGQV3mqH3W9iz8hGdyQppd3vVB5tLVLjnisteqyowiaRCs4iChyzCh",
  "key1": "EkavnxxwoTpwS2mP22hBtNoosYXSkiH5TReTr9suDfNPCfasRxCeNk23LNM4jWeL7LrmEwkKUrKtvG7dDpxwdLA",
  "key2": "Bbh6NmeZtwL7hzoKL9Ytr4ircEMdjpPUP9AjRRWUYjehKbNFoxg3NyTxhPSoSaB3GY4B6N9jh1ihijy8YgBD927",
  "key3": "23igcLdXVmSNL6Decur9e3cqwoMn8cxhJ4FpSksXRsXZeLwo5yJbwbrU2HXAfsqkt3WPkicqcaad7XAn1vrpggZF",
  "key4": "4APfw3jKHRYamExD5du9fJ9YXwtDR7eC51rqnkcYJ8DreTCerr1hqSGybsuiyAH6KdbdQZLHCH9v1t4vAcMyKQKD",
  "key5": "eRQM9AvkHj1uZCwGHSAUMym4pF8HmbLUYqM4x6paKEU3b5xV8FraxwgcvPbFRjQrT2xsvqukfjrhvQDKdiLuiGV",
  "key6": "2oJg5Haf4jF3kVTtdpybr8cSK8t5sp6taMog3zWSAXFCcAoSKpyWf8smPw3QcEPUTMVTPd2qrxb92ow5iC3z2YW",
  "key7": "399pMNPQ9otUzAfQKXwFyotSoVyfjUd3L9T7ktDZM7VkgtweGop32vTjKQcnXo6CBmM8AtQrSugg4dqrDHMzgaDL",
  "key8": "46vdqicje9qNxpw5TDVRXANnu1fTzQSybrNwQN3WuauRLwTURgaANAWspG46n3QZFPYocMqv9b9mhrWHwhnBnbCS",
  "key9": "4sz9nQeyfmwoL8SDSmeZx94EuiwkPZn8dnmB2FSS1G9EA3A1gT8t4oLBbXkKTNJobgUt8QSwKg5JK8LWCVirGRLi",
  "key10": "2xs4hkKUgoDzgaj57SUbTPw9bVhUCJ7MsAHy2nwNDYxo9wArxVt1j3au6EfyJeyNPJyERrJXAQdroikwgQbUdTdJ",
  "key11": "2vbtm8A9nhwgHgLGdqc3jwuX2hPd2Z2hFLp9doKBXqN9AmLKGdERU1moP72BB5oXuGXaaXexys4roeKNBfjNu3YA",
  "key12": "64HaFJpLctGtSCtBv6aZ6wFY4qmUYZm8uRo3CCDx85D5ZeN9hDcgGn7nWbksN2YhEht7GVGUz5tThR3FWRDeMFap",
  "key13": "4asCryGQF9dTy47FwRwdhWf9KB8ngFbi2NrwA8sKqDBiKy4DDtL6CCHPFLivypL78v9HL1VCCzdN1n3jueN3rbsi",
  "key14": "3TN1aDVHAXpPsAxCH37xuDeodFQiJfWfxKqvVP2Uq4L3MGp8rPME9BYVi4Xsvk5K7TpwGPNkd5KJSoueV28CJjc8",
  "key15": "zTXQ7HJQGFfeNKBkuYJSAeUz2yjQ8FJVxkknm3d6PJShjXYrF6jDvWGH8YvqnMKmMvHVtjkonsf43jCtoBjQzDf",
  "key16": "5U4ZhH9P1RK7chYZQL4bYUYXj4CKVoB79ZHtfg2XRLAXaUeabDzMkhKPxDGkZXz47hsG9sZ6oZg2xHb5dctMdBPR",
  "key17": "2qE2MpkJNnwYzadkKmzqZQhSvjyv66d9JH5Dnt2oWr4BuWKA1YujymCoZAePsf4GGJYtPWSb9PDdDLE96tP69DqE",
  "key18": "5sCE2dpaYpArJtChdrci6q2WyyDaHxRu3xDY7p5Pb2BMRnmmACFg14BisHg8gwJg8FPnSjF9bssJTFL4yFmnYhmX",
  "key19": "3dN9XVJ3gtx5o4CKHE4wVE9v2EG6fBM87Foa8uFFpNjF5wNHj4pRY2YXu2ZL2WEAV99CSCv1cevFVX4UrZfMQGkE",
  "key20": "42xECii3hVZ8mZbhNuhUncNxGg7HRjgC1WNhkFymKsCUeDesv3vgkwnBS8b569X3DnL554L5eEYBMMVhZKXg86Qu",
  "key21": "5pRpUvh3qCwk1MZLwA4MFjEzKMRskvR8pDj536VJWuCYr9TPqae8wNpEzR6UgQCZwHjBFmhtveashrfzomr3tjpA",
  "key22": "nQHrDwZZPTY2R6Kf2xpdhedjWb3kwrW4tCUjPiHqkYRJ3Ls9cSNpiDYqomi4AmGvgwyhfHK8MsMJ5mE36tERyfM",
  "key23": "2dLmTswjwSTHeu2knE94PiNWHS1dhx6ibtCLLzN2oyFZY1MKSS6hXX6Y3LtHW2M5sQsZwh1o9wXcvH6rK4iXjNuF",
  "key24": "3zJy7dHwf8aiRtbboRFZPszaibc5m37S9XBaEiTnPznUWseUbahEMTDnaGdDkvvckvjvFMbWxfAVvo8Vh6G9M1s9",
  "key25": "5uH8VTjJrVFCNqJmnUTptkHKSN9TFpFfML9zJpATzdy273kr9ersqVhyWTbK9JXwmpqbRPw9dQB9D5DB83DycfMo",
  "key26": "wQD4Pmc3P8SojLfvFKSTA7ofiTccqoyzTyyXzfS5txT8xn8EWL2C1RB7H6FcB7FcozKr4jHoJZS9enHcgUTxvBA",
  "key27": "4eTkn6b8iDuDYKbCtgqATF9CmaU7VdDjyQBWLxGY2pMRNShiSGHtzNQ1uaLFpXResLmeXtbV3v8iG3VLbc9BhM1w",
  "key28": "VCc2wujciTPWZuaVHNWeeU3AZYQwsweqBGF2S2VDVxJZLdHgHT8F8J5C834d898CYZvra8JUUjU9skLUAWyWUrp",
  "key29": "5CQca8rP9gueLs8ikKu7U3nL3BmGzHn1xCLHDQu27E4qJq3NPYV5E823g1uSx5AEib95vPf9FdpsoSdeYjjp7SJ5",
  "key30": "qQzmyX1aUjvaxMfGS2PtN3jKh6SorJS2P1pSuUJbKNJ8KLU9a5NjtMhLpW4j2N9vXjA9UQ21rxKFhwo7jr6ffWu",
  "key31": "3mx1orJVn4oetdB6ERFq5q2dyjyRW2eXaWuBM1rinQ2MFhbwGirMrCp3onjBgxzvS1FQZEYRAp4ReR9XTaPtz1Do",
  "key32": "5sd3oxynJf7WZoA6ergn7WZpbocEbAfVjTrioKEKa1gkA4WxeUSVaQfdgzg7saxQ9gS3mNXeM4VF5tfEofQTQwpU",
  "key33": "4vSjuFxP6UNRnENxmo4QrLHgd7TKAqqySxMZPTv3vQUhLvozbnk5hhgR55AaDXwXWxfCMpxUit8j6WsiB8N3ZzQA",
  "key34": "67DVEJt7dhUbSn6ezZagEPa72Zy3zjkhNDSqHwoJ6Q3f6HeFuZtQdCojfbio5enuCT1AvfTE8kkmfRihQgUJVLbq",
  "key35": "tHKXtr3QbdF3yyN8c5SH3nwRmc24BfopERd2D8bo1FdHLvRnk3KGAVKxCVFhqDQLmPoYBMTMjZBamXC8VqkoX1v"
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
