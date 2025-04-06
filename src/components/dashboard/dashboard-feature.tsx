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
    "2XAgM7649pg36x4MxKX7pn83wyivRtYZWV7fgJWmPbhewtjrpGMX5u53KVYScFx4UTuhAiEj1Vw61z7EFBLeC6LV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38f5yGxaFFFK6Hd3k6qYwZhsuqcvAv6rWtD2H7vgpe3SKnju2fNYju5DojCubpY7KkXZGavAmVbHRsHqFYLx4676",
  "key1": "5ZJQQ6Mki2qxYP4AdsoQk7CsSD78Lge9AGgV1gNK1aAHqYaMGjTcpVRqtvCt2bWeqw58qQHK6a1JVh23EBj6Exwh",
  "key2": "muuKut4tmMp3P7Z88xCUki6UaWdpf4hheD3Ac3jAqbs6G7U65YeoiyiKzZdwR5knrbgBHVHtUXnhEsaapZdbNDT",
  "key3": "5EURngCFcrRYvD5CJ7EsxgyiLsy7TgueRrwCPgGgwdigPgrKsoRSp3nESB3my8c3TqkpSXgDE5dePkP12fxgz1FE",
  "key4": "5whVFXccLKus7BfgqJXCe1sBr1ZjQTpZReNFoQo3bQptbssbYmpArKJ2madcKpaPdB3dy6JqJmnc8FKdcmPVXxwq",
  "key5": "4m54tZbEfWjQ3ifwumZyCwpqTohpsKGo5JsrtNbkSjtXn7cb9jNaVKmBhmueNdUMPave8nNnU4Jd2GehUKsbBitQ",
  "key6": "3urvzqQJuEFA7ZJkdeimY7B2droPdueHf1iqRtnZgLy4FSfCVp7G8NV3kMUmkZCQSWFry7nJZVxn8ofHhvZeTEWG",
  "key7": "3z2JK4dnDqWRpivAx6wwkYJsxEgfyYdjtDd4iK1LxjvdJGxQ57JdSfNzkGFZDja3hgVV6ibbEC1D12Tjd95xHg5K",
  "key8": "5BMuUvL4jcYBsnRCdPuVrBgk5ASoZaLD2D26fjxsatksKJP2m5wF4TVh5gzmjhZJgFZQVRjW5WwwjwYznS3ENnpj",
  "key9": "61dT8LDsKddNJf3jFDzcobWhwsFTPwYYZYv7UA6iqZ1rGi4V9GwccwFUkFbSNEHsmE64ZCyrsLmhyU4L6yqqnXgb",
  "key10": "q7rzF79EX784hf5KSP5Esnw4rx6ckmcrohdvS3xZzK9Az8YJuKHUSb4KS1wJkkUMLHBcvfPpgUdqaksWrsFRWd1",
  "key11": "385ksndxhBxMGBkHk4k3pK4jB2b7ftrjN5XSUdcwEJuqUjc8nQKTNh3bgFyz3MtqVhGb2X1jotyvYxQMsA2MqkC2",
  "key12": "2sBUYHJchzKtbSXZbZ2oQG4KA1xz29yiVKXxZ4LhQnT9Bdr2rwNnoiQY9nBHqgsFaBVpK89YhbqCs8Axt366BiLM",
  "key13": "2gxKgbCYtjbZHtQrhNRfNPKwjzxx35TbFA72pj1DLt4UWBRQcKfNKti5yCNpm9RQ26EZ4W3CjbEVaMazEWmiqbGG",
  "key14": "Pj8PH13V6Um2FBKjrhAhUcXZTP5ugpoYtzSNQLKq44JUHqNvyVVSrbAkRLiQCzvX6EEE1en5jG2VqNVpMt8xvcr",
  "key15": "3eCn3rMZTUH1rKUDZc3XJxqTyc3zMkYYgPqF5Hikqc3MASxYMQw5YZqi5Y91Et2e3Q93DqdLo49Md5eaJuayTSwU",
  "key16": "4S1w4sB4zBXxmXGiJzURaKc4eQQBY4KTHiDC5Q2QvNLsypuGrtaeXucUp5T2ax3dhpHE14MSrpYpwNnAxoVm9esp",
  "key17": "5MpaNj9jyPssTGmUhNdQSdwe7KS6AzcX2ZM2aXmxuwMcYKTSXzgmhtUJfX6i9hvVtyA8FdkC5TPxsxnBLVYnDdF4",
  "key18": "5W5SHNDizkKKDjcZRJE7Dkx3vMrQrnRhwhGyyMZ8JjJ3w4V7uLLDBFuD5w3bBJmquPjgnFiNtemce5e6P1fXJqAK",
  "key19": "6iaMCrPU5a6PDeuzLJfHhdGFymenfkzSXDQsBMkTtLrjfioC2ktAnKhQLkNvmqM3mAyerBy2S8bCHZFtuHvUDtq",
  "key20": "3aofCHRA68zXfWMD8fpQq2x1hoC5cjuMnaKuvYpjLtA21UCwzTdyaMUjx1gQBtexZ6iDL94NRDnngEehvv8htUt9",
  "key21": "5aLzjmB8WkJ1YLBTjLpiTkCUDRi6RBVp8xEHx2mvVarnvwxtfZedRG59ahs6DFoBSHQGnDz2rHY9L6Wjo8TdtYaa",
  "key22": "4qFanYBxWwM3jMHJtiaSpKxQFKMc4eLJZ3z57b4PpBEsPSDe5UEv5NGfwdqRcDgTBoXDKyHYyEjSfbtvfXZN4S5j",
  "key23": "5658ecwpqd46CVbEQ9eSBrieRzoQbNBTzkBLs2v1kWvDfYcf9RZrZGPwdVoGvCzytvHzf8N2qr25DwYPq4ZA7ck9",
  "key24": "2rapRoGq1FC4qDqai46MnanQD5vH7s2UQHKh24Vj1QDAZ7Uf7Fjk6QkXKh8TXwvU8mY42W6WL6J92VCLwge7ZofQ",
  "key25": "x5UKNHMpVqPMR7uVbttL11Lgsg1kd2AuvCP3bQqboUzVAwwX8byW2KfiQJjD8WrSnE1yQyuBmadabDx456HumMh",
  "key26": "2xfKnc313yADGGsctZWUBH5X1euFCxyVmQ8ThFH9CiTwczkjchjQLKJCoatt1PE3FJypVAKhc4picY9gxWTF5vKK",
  "key27": "ej5PAvRR45X9JcM22E9nKRuvhv22D9LqnUd89DZZwgtfc56F7CyK3fLY5Aa3YUfpDag6BkuzXmB6Yc5cRWjEyxw",
  "key28": "35XwJSTYEnhhnzaADBh26SvuyFiYBV4hxmQzzz6EjV8GZMTpZuniogHB8JxJQzQhF16iwYFrrec42YFTEC7aqruQ",
  "key29": "2N7KuZv8c461sGmAthmppKrn5kQ1UZQCX8zyYorLdodAyPcroxyWkmajHjpTGyP129zNE9ce8PAwoFFkxiV3LxAx",
  "key30": "4N2gSQFa2wkQfTUiLGmS1wmaeTKDfw5Fk4VQmHpQk8s7xvrB2mAhmDUtzGKRwzXQzQ1UxApBkGn7tbWJoDZShGdr",
  "key31": "4a5Ea2SKk9yVmx9N7bc2W1wVeZkUYbFQXTtpQApc5ofaMpezyVyWohQymc9LFkDGF3jsHhstpMWcRStwgaqyg2Jy",
  "key32": "2oqdvXPqSPkdLexK8iX3WvcHds9J9ycq3NuxWiYRcrFiGALSqr8pRcqPrB1ipMJiRC64yS2gLGpDVyTSEMZ4igUY",
  "key33": "2EdASL1JDZrS8ZvHAbrnJR1ZRGhi4qXKG5wtSPpXx69SetNCqbzh1ekcv2TvKdwoBKvuiox9cCRKkG9Tu7pDj7yW",
  "key34": "541Q23rfgJwzixLbx2H7iHJ1RzdyNuzxiykfB4pvHN5RSgLWGXir5ttjRjCpuScVkTYy9AsJ4A5CePEJVmx1wTKg",
  "key35": "5bcDQeF3hFaZXM2CKFr6piAxBjnd4D9bqVTyrAqgbS9db9ZEacyQAM9B6ph1K8DnSKsZBgug3RNb4gXSDmK4zygU",
  "key36": "3wuZatWcTjSHrYTpUa45LQq8R3EPg9LyWJ3QGBGxEmZ7C9zzVGjdndmyYHY2fnTk7ExKGpRz9NcF7B2ViWdsu5L3",
  "key37": "5YHWhxUZWJWs6kgyKoPDktZRFJGM8T67vV2pzAc7LW29fc5dgBvmPTzDxgDbBxBXHUr4qqCUzhkwXUicGW5Jow6Q",
  "key38": "36LgBo4aYhgnHMkqaSRpFVUbrQLg3Rq7kobysNd2y7qsqFpmiGzmm6cb7sDEuVTgCNkNrv8wbkJz9GDUe3RZStbu",
  "key39": "38aeTWckkBomo7NfAwdocd8imue8yrwydack3kKPs8GAMvSubfvGYvUiAnpbUgS8dW8ZeWN2RskEJJpf54c2ZZgC",
  "key40": "64vN5c21Z8L87pQshcGfKxyUzgDx9WEGhGpEEvW1UtuzcZN1HzeVuQZ2JXJZ9Ae2Tuoi933Q9WAwXGBjAyak8DwY",
  "key41": "3Q7Fx5akDXUewyxmr3tkPBXarqVFKwKXxuqcWVBXntmWKzfy2W5tbR9BpP4BcJtvA4EubN5twJdXqabjV3kWBJs9",
  "key42": "5mkwGWKwj5quFkz341ZznMBnTVfRevHgqopAVDwaJvjWbyqaR6sXzoNCSwQPSL5jRs69oVDBQ9xZSdiSe1rByrCq",
  "key43": "49E6cjNyWUf3qGX6RySJXtpMhaT7s9q3aQa1JeG4psS8z9dDXUMcwsR9LAN4DNqBY8XDGgpXX2ZG9Q28fmmk1Vvr"
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
