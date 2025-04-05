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
    "4PHye3S3qwZ7AFHkNo3Km8pkqytG5LnqawNc9Nwea69URtxiXy2RSafgL7kxB9rFqi965brXjqvAacQLVz3xuVYi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fUYV13KzypzPUdKmPzSNv2ykEHEUZTReA6aGH84xLQkCWUKMqW4fsEdXjurGVp3nH14JtxfBGWpzkYvGSS8SQoX",
  "key1": "Swqppgvxb5pJAPb76fyHrtr3tzXRMAEGHC7szPd9BERi7tTwYaSULKK1XbtvQpWwH92T33UsZLdVywkvM8EAerJ",
  "key2": "3SN9ATZCdpyuyN4sbzSh42WW3QBQ9vjQT3RnhTsBRLgZ2NWo9E82tfJGjVFzcar9yJATVrzXrre65xDm4Af7EdD8",
  "key3": "hUNUUSS1DXkoAwaK6yjt4HQRHHZzLYEe1fkou2QsaeUCXaynx34CCwrcNycmoQ3E7LZe78o5H2ryEMmkk2ociMp",
  "key4": "24Gy3YWGCkvyUsazJGRMVhXYaFtcsx3fZxinjMR5XbYKTw6Qt8Rcab8dRnUzMEHzCR92uzirrb63tbSF1Q95Wv5L",
  "key5": "4PMSXzGhdN7x4p5Xysr3UUSugDV9GYznB8m4XC2YVD4Sj7QBzGmV3YBFpJDdVu1t5nF7ygKLKpKNX52vygm9nKvN",
  "key6": "3zEcjRefrKG4aicXbcAij5wE1c7bMXMENthAJAe4QrzmrccR7KsYRmFAKHyv2QWAEHZofuMMAqeEM3hG64PvxWGp",
  "key7": "47ucM4y8DHNRRawKZo4DeptsFVNBAJGvCsPe55aPo5CwKXJSX3YBPLbyVAjCGTisGFRDaDb9gMz3RfHrCTUjnEiD",
  "key8": "GtvnwGu8PhQGuvc81VuaWbkgB76TcDxq3oPqStdwf9CHt5TVnUKXvHgi883ATi8ch7T28dYCvdpnCpyTcu9gEba",
  "key9": "hzCEdmMzZAkTZHT4uyLeP94uRuWHqwPqr2U4nm8iX7ppmEBu4z1bdq1sZy9UbXQVnNc5bBEsk3yw4zMTGJ12hGx",
  "key10": "5JML74EKmUUacFxTAz6QBu2151GGv3NCRdwQQJoezF1UkexACcAdpCTpM5N34q3WPSfKNrMV2zLaTDXLkmVUUqa9",
  "key11": "4r9dDYJhBUNYpZfCh1mzpgp117LK6z5PWvgTQThjVeAGh5CsGjKVyUAs9Ewhd2TsibWAcSUg2v16jmY2QAxmwkTy",
  "key12": "4jkJXrzncmpo8eTL5VGDRKznLXyzrB8iBR9taqkwdNRKFAnLfo8wMzg73CoLQvKppfExFEYX5rpJceESR1bGJmEf",
  "key13": "2dd4LEwaMvsdNfTKLNLETBxLgc2fmkWFMuzCnNDgt8tG4uXPoCdRYuVAxtTvi5tTueKHxkMK4bqBNNM1peJECEkV",
  "key14": "2vaK1XW79wtfLEpkZhtVg2UjvuEWk8a9PMtw7Aihkm4f6gmW5BRBHd6H9hMPsBvzSTJF9cebUXkUYrbm2eqZK8A4",
  "key15": "3eFpvqhYrcsieL8CSiDSpzaodadKcbyRReEu51j3vcwQ1FHrVw4GLUJUL1LRyfwoj9z1Sseg3mr6rgEkiXdsADzG",
  "key16": "2YwmVQ6u4eUBPHuHKTFRTRuK4KC7VKgKdkd6tQT6CaQgFXZVnuk4YKrDAKVVc6xv8y13F3duqC8oRHuiLkJRv8Lt",
  "key17": "4q2xZTgLJ7nyndDZsdk2ERksD1MMRvCJjMWMpRMUh2SUzHuYfPRLAbkd8miE3bZvP2ZoCzXYXo4JcrhWfrK8w8sq",
  "key18": "38CBYqC67bCRJTVQEAx2491EFyvzCUqP3yVVQipjnCc2Mo7w9JaZiuWQLiqAMM4VpQWSjLf2NBPp8KzrNiG1mHc7",
  "key19": "63QjziCSsYXBHNzfdNtYJwrFEzSngC47o3mNbYsYD1986ggcC8FNB9NpWfDLBZCPoehrChbkAf7e9nYVhFrpLRs2",
  "key20": "QpWmoymhjJdWTCEe5idVs8dya5TVgabd7tgAKQMYHbzdiYQvuXjHADcJAK2zFfpgDmbaKyK55PzmaTbKLiCkWUZ",
  "key21": "59TPN1Qpmy1CS8Th6JY5Tc6kh3pBR7iB2UxsWayCJwrNXxRHxUsDcVMJc6RqrZTp6engTWbhf31SdWrp7dtDom2h",
  "key22": "49WQY9SrdARkwNMo4xR39jDYRGaM1xPQk8SjwxpGzgPLLw964Dn3hcGkSCucSRPFqw8RQYX2UWKNBMvDs1vuBn1e",
  "key23": "3eTRA3Lm9zLgDUPf5WmMARf4FBgPpEe94xFJqKGFq4ZLjjUTLF3EHhQDWtKSy8UjdAbGZcyV2KEtUXkk9bY9N1Yb",
  "key24": "qP7qa4k4Cj48B1znuBGUQSz1DZvW7EZmHuBv3mQE65qixPxmZqcZ72veybE5i364WbJxhA4MBuq6J5ehP3HeC5z",
  "key25": "4hZq6wAHfTmrMsz7hUrDxT4hkoW2FbsGaVsYzE4dk3GZrNNCmoYW4PPfBAX91AoKKncumPNxaAEkSbfrVehw2fMv",
  "key26": "wiYEb2XEEiiyUMoqUrR7hFJRwxaytYQofSXcVgiZ7NvhKmadMfEqCHGX4mMLbV7TNgz44z8UpWjoLHrkxkjqQTh",
  "key27": "2WhpVaCXM23HCssT9JG2fiWeiezsCKdEb5PXQwYjLJ4uE344oVBoHThbUAKzi9NGmF6Guw2SPjGeVsUNZgLZ5mZF",
  "key28": "3568qAXiKMjYFTq7whaNSBNoU2sZfE4a2JtG7Z5UrYDDLGyyEMmgSJyyaGjk1rTXehGGjQbEiZ513tWZZXWU6aV1",
  "key29": "5XoZGJW6359c4rdKoHx5PMcqm9Kk9LzNJxPaULjcczVPekzvUPgopX3oRA3CWpLTEydH1puZpxdJpodQhqPK2Gb8",
  "key30": "4tS4fkg1HsuXFREHLNw6xeVDeRpi3zmzvZFjr4yVBKnBdSBusZjocxvmPtz6ZyCXv2spQQv4LZMumYGWP1ivKRCo",
  "key31": "4Yf3xwKZtnDkKS29Kct5wnqTBTJDiasTN2kQ5QxDVqVc6Yf2neVA1ndqEPN2LeSHJM3SoFfp795sYMNj8b5AN6uq"
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
