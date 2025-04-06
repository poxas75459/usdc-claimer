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
    "38TRJcAU7MNb693Czqz7sGNpjpE3kwQcsENUrXJm6oocSUx5dsBRaMn8tbHBkgFjLU75XD9ZXreyfowToEsJM1WZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cXVY48gvkMfobXHdypDMe8BgfP4r3vNkRcU7BXLuxeHaBakxj3JsqHLso6cNvb8q54ABi21k8vgyG9ebEcZiRQg",
  "key1": "4KiocAGJ5KXHg3yATKfyAr8JUVMhd1ucHVpA7B9i9cTThJ11VZMaGg43u7uShgcDPQBKG5pWNHfBgw7g4dUmYE53",
  "key2": "4jT5Qfs3u3dyME8JEt7jF6z6FeJZMGZSghQsCJd6TUxdfkEWJ1Dg8BP1xLX46zMEPWDNnWVUYvanb8ZjfhFTTqjP",
  "key3": "4QGfZRxWBw4mJTRAhM4Wgncm7Lfa9magBRmCbYfKwDE2cUNNMXMWdg3nA7tHA8cdT8An7MW8MeDTu2keu33puEQE",
  "key4": "4LehHrsCvxUMfrGZu87n5PLy4HZxCeuD9dcG9F3c8umh6FEyP2BahehBpTHsRvAN4jd2ZvbhLnLYeJwe8vEgX4oR",
  "key5": "5syGUxK9yAEgRN9Mjoyf7jYVBL7ZuxQecn5EmBzeXLz7djDgs7C8c1EnNyuLvLqGX3FzrRitq4rCpfrXA12ug4tk",
  "key6": "4E4ujsXfxvmhDddERiwzUVScR5i5vie2Xrbz3Ep4FNWCa9MdPMWsq1qXvR4aYghtJXX9Hgr3aZsPEz5dPhNLTGX4",
  "key7": "5P5T3WiX8vNyRT9WH4hZ77wH7GFAmdDinFCcP4KKzTaLVuxVYdQbVCEMZf8o4cgdPpiLMb6yA6aUffPDxx6AY8fq",
  "key8": "vkY6Vh5oHo7YXAwfnGxuyJzF2vtdUihGaKkLXok3sujA2a3HmbeMHKFu6veyCWZWEBqxqtsSAzcZAf8rwGLGM7d",
  "key9": "5XfaNTR9w7m5JkZaCLBEz4d4YnKrJxkWAm2nuXfaSY8PcWPjfHb3HqRjfauLCLt1PJhEjBmy1xBx2LPfXtJFYovN",
  "key10": "5Nic8ay32cQAzPEdKLecHNA9t5mrF69K5YkzF6io97pQamcV4JzPJD9Hy9q8yUmkRLHKtKoyV1gbaoFQGtHFrxUt",
  "key11": "AdMuK2Vm8sVekpFGow4BBENJF4ZoykjgwEaDnJMfTcrpQ3oEn7AFQQr5Cum7G3inW8MBTHDSWityWNcVshkEPZC",
  "key12": "pffE14w8iEY3MBKfR4zKpiUoWfrmh7HDjuaoVHhKDc19vxsaSwnKnPzSiEFiJQCHuCGUDbVm6QGCmxmBJj52mCz",
  "key13": "2QCsoKrzVWwkv6VdqBFGiCnHWsVZ1Ckfwri3rJMXr8SsKY8NsS9TYWZyZQ7EruWdWZbBrumGKbpysEpQtTHis68i",
  "key14": "7BfCU3TZ9LwG7G9JjUVzCfvGCMBR468ZkbeXMAzPkoiTMC5xeidRpStdSjHss6yNVY7UV18LMuyvzYpwRuzC1gu",
  "key15": "CcmzaQRgj8fXTRvVp12ALybcrEsMxCqH2NVv78UpYCeiNj86rdCb2RCva9DU7TdrFVTH4JaARAxmkHHBFaDhTuE",
  "key16": "2SfVHqcA7hKzVfUMfKpoqtpN9yoLq91BrNZVrTM9QAHSpZ3MHPHpbJfm2gA91FJg3XEwzbvTrQ1MKUib7o12b2HF",
  "key17": "4QNg7Wnop6VhJWKvJ39ykLkypgGSZL1GrDNTfsjhuHXAJTos3aWtJJewB9YoVAqjeDVHZYUbchb5kvipRrDVCRvd",
  "key18": "4g5tjdpWtF2A5z4DAgb8cDr88hKKoUgS1ZJzEnjVKXPuFDEmCxNbz5TrnvXvCijcg13EBnr69fMVy5GboEhPA8sM",
  "key19": "2bXcFE8r4z61cpryvdA8nPmXNwec7pzueo4Zhad3NLYkJkVrGyWMnhMQBJwH8Sz9EQNcj51C2mq3pzmvQnvREzmm",
  "key20": "k9Aft1VUSWf7PCqe9w3wUTZb7uost3hU9C8eVNpBintmFcZSixH8UAmx1mJEtX4C5bSiXHzB2Ny96aSFCFm6M2b",
  "key21": "2M3E9ZCLXQKXEmcjT2y6a7t5qptzbqQxr2QJWhaTh52Gg1kxaFKwRJJpwgSjwriPMJjw97PRLVVYbgbP5eDwYvdb",
  "key22": "2tqAaTZHBiFcdVk4eLQyuhoEmEPt2Mz1kREDEbyR3zf6M8V3fA6VaNLWHgAKJLwoZPruRHUBtzmqTggXu4cacKEk",
  "key23": "373tDPqpxMgnVuhDHTc5kbnCaRXryngBuTboJhtyFxUZ9ERQmuMW35MXngNsn5QCYi5K3KFtgRm3uNiyo6aHwSdk",
  "key24": "4EyZ6vnC6AASuBZZ8RCwdBNJFHXumJgXXJHUUhfcEHmtezJ75gGvyTnWFrQcXctem25jAeU1Dw2w3YdUerDFWoWc",
  "key25": "573XtDJDTGeSE4C6M1VL2zQfoDZnCexzQ12SiQDM1F3PPCyedrVoiTntgHdcapDnueCTwrAnoQ34BHbeCcALfive",
  "key26": "3dtmwbY1zW8YHJ2ZuN7zXFfKrN9uv26ASBktDHb95SXvk9qxmgnh9uLxcj238tskJQgwuSrqcK3gz1u9Tueh2n6e",
  "key27": "4PurU7D5bh7kxyMXoZGFdiWv8sTrcPhTmqZjVsepAZUv5czZ6Hua5ajJsVLHc4fBdUw7f3WDzvh9MLKnhoymaVBc",
  "key28": "2XeXfjbTbXhKhCf9xnehrgEhD6aZ6p3tLPDbDufKcqExq6nKVRpsaWjGBReL8Bt6UqdmtNnvbirnKXuvF4fsnrWF",
  "key29": "26itDZhZzjBjMrKJ5bJ86NUy9B8WDYFWHXW4GLzMa3DEGb48BhCzRqHFxGSbbNCF8TTxssqzJ684kEAzSMbBGGRd",
  "key30": "3pmbudqWT9Kop6Aj41CEFjxwkVyeUgN4eSxHvP5yGfap6BpfPcdu9P8nrVkMwPRcRb8bGGjG9G471kNRuGMuwkED",
  "key31": "5KqrjWPGe3rWhGHZs996f7DxTsE7JJVxYdp6JiG6HStwLUD4vxTdTKPktFLUwJx6G58P4AtxrGGgxrhrMgWGqSwB",
  "key32": "3wic2jKqQCp7woNd5NqhRZgEmN1Qzywmo92WrU6fknagFqw9dBMQxj5Qdf5MRVf3U6p6VnH44zUNnGExjPdyiYep",
  "key33": "2YKPUNGUqw7EmP9CqswG37KpTM1DJYJGLxbcmSBsXVBU5QX44nhfmq5xoKP23Gwxnw21VWGoGqEhvYVGSU9hHkE7",
  "key34": "5nCkJYhfHi2adRzkzoVvqwUXVTjJ7S71wfhQVJ2dX689D2kunVsXKFayzuYujUcJxiNpPB3ULF4X64F3XSdaRbXF",
  "key35": "yK51Ge2RyvFHCdrU3ALEgfZqMToV1zBHVonhM71AMhVuFVneYthKVG7hnmZSqU89aRKG43G2ioAGxuMf5u186CU",
  "key36": "BEWDo2RECSgHTZaTodzB8WASgZgsf6FEqWqpGRfU5vhw2AE4H9sjxYdfHW3gzZX7w2eruYRHMjqh2C8786H9rrM",
  "key37": "4BjN9jxv7RP7vuHBzVGroLe8tx22RK6thTQcvGNmCyXeiEc3ommDRYQ4mVrsMGqrm7cTi6WWgsy9wEb49JBWHuqJ",
  "key38": "5kAhHnYoJPHVjSrHi9fdteVbMujo4VQAFkai5T33o7bZn5FQZUGTiDiN6suNYNATFhUPWPKFV1FbHwsxMpYaGsAH"
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
