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
    "4uX7j1Q2Hmmd5QgDqiouU2w1FTrn1XnPZ4Sng7WQcMRn3VBecJKXzhDKtj5K1NkXXYXw2ssWAhfrLfRge1pSFDAK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TnjUzWZoQg21XHYLc6zEh5zRtJJmmWXqhQSHegsdvFEQTeuoMA3ZYFryDCMeebSPYjgeQn2Ebu5aRt2mv933ddL",
  "key1": "3nx5WaLcJyz8NBQ88X34DHaFA6Pvv5S7oKjZ83baHoh6eh2FmQRVyXEFjReMuxFDh11ZWmfoqEmHQ7xxeZZ2uHTn",
  "key2": "4RLgy5QDCZMAsjAwwX1GCBQSQx29jUUBVLSFZLWHm4tHPfMeDRkutQc3ew3puibTzkFg8uG5ea8ezDLXy5vG1vvB",
  "key3": "2gHSzormU9SEvcTAbdmZdeuE8q81VzxYLUL8zqJqTMcHN2c5Z9wJzPoLWxm5af2t1LkhiseVFQZLaH3EPduaDNWE",
  "key4": "2JHx4iVwXGASKikCJRK7cpP3yDmmHVUWkkWR5MNqTL3k5FfUPF9kp3ojVTCwKe37Uy4PMHCmLVCht33DZXPL54Bh",
  "key5": "5yGbGnioNPCoQMf9pEsxAHdX8EwEQuDncswu5m6W4K51Y75CnG9yLSr1BKEgSUbzv4hBhafZpodxzzGAx8z5N5eJ",
  "key6": "4g9YqAiUTH59TagRn1mAyEjQYGxPbkF8tBjoeKxfFX3LvgpKMM97miS9GpUaCRfyyXPBFicqxdQHb2JXcCwjf21w",
  "key7": "5MqL9n4qbbG1BrW4YYYuBSvd9wm2sVpbSpXnQ6f8UzQPvFhqHzxNvT2LnLkzCpVRpfxNvryF6DxBEXgsDviRvd17",
  "key8": "4Kv9NJgxi4NyxASdNqnCd1P5rLNNAqZXWfqXSa8xTgHrf35Qy8i6ky44r69CW2Fci1R6yHgcExhUcBMjFvo3jfLo",
  "key9": "VggjH17SP8CUvJdgajFQJocm2Ahe9ngs5MJsGepGcUhBVVQu8WpVy8Dk4Pnj8X4EUCzmeGrY4WMMQdjWTbkgbsk",
  "key10": "3VocPXPfsrSPgyBt67fyxkEq5fgeVKE54DoDyqFQMW1XwNsuLLBWxpTgaAQnedeqxz9WqwfBkQwn67L75u3Y4E6K",
  "key11": "B5DrAT18DDyWtp6LGDXF6a6rfQzXR2XRHTA7nYZgnm7Zwe18JYaeh6PABZDbJStdZ1A6tqoLCStEMPM4ckX9faK",
  "key12": "p9Ta928HB6AoBZ2dieXKN77HroFELBjdLSyqHp55oWtvodJXkUFW3qxFky4nWNzmiqWbked6MNFGMZQWRyUT5zd",
  "key13": "5B3yJdzTSwbZ2QMVqUw5iJVQKtxhPZZ2cNBg28XUjVHPgjMFY2x2LGtmeH3zrwHbA5JET5gp1vdXfYRU93FVhZQa",
  "key14": "49qmKu3rrBDcJoD1T8LZ2oQPewgmeauaC6ikw83fW11ZokPY9U8wKNuLHXsqGfWkuVowWD92bJ6XK8CUQHcxUG5k",
  "key15": "Fr2J7fVbobaVieniE2NgA7rPuwJ6agcEyh6MzKvaSzgUMLjpQ1SY2Au93CUwjHSk1gas2muvrfKD8CHWfA4ogq5",
  "key16": "3S7catkMpaVwrApdTAdX8uxdPvPjxSC3w31h7uaKfVaWbWETmYQrPTvvZ1t9G8eHncwqpqSd7orJSukjsTDzfgrT",
  "key17": "59q6EFumrcUhigtbR3Mi6u9UzK5PR1DQQJQmjpgby9FU8f75Tw9NpUwnS5BLpSwqwD2kr7SszTXabXBw8oYATsFq",
  "key18": "5RppamEUR96wEVJTRFxcHxDSVZFaxDJkZU2S7qJV1RbRRrDaPr7XrVds9Mcyhmx6nfH5CTsUvXQk2X8dLgCPt2mA",
  "key19": "5MNw7nRxadLK4VuePTTcCEmMs4MDt4r5jS34E22ZtV9Ff4kSuxBEiZGLZfJ56nVQZ7k28Jic2JkyWf43yfGFmFbp",
  "key20": "2CfLKv8QbrEELuz5zg9svcvRANcNTQUqbTzu7qYmsypT2GQhoBjVQdLkHGh9mt8mKRJgJapoqJPo3ks4GYHS7eDD",
  "key21": "41SHnEr2TxVZ45GebRqUbLLbNkTtdoRxC5Wyi25zdh4b55rpMxEiSrbzD2B99aSvPsYqPxkCXdrQ6mVFVZomnWdQ",
  "key22": "8quCm7SZHzbSdK3vxdgMWrUWpHumq2v84jeFGiAAyDxuY12BVMfXTMaHJw9ViB3fP6d2Uh7TkErDLR6h6rDT7f7",
  "key23": "3PPzR71s3SgwAfXtaBGMAaJ2zSvetjuRVteqCvrLhr77AACsD4uGLceSxw3Qgy3yhs1KP57hWS2xUhKedM54BPpj",
  "key24": "5wLNVQXneGdokHBigPFHmPhtgv8a6o3syVpUdwMxtSnt2ojbKpnKaCEFR7nXJF138DZvdyk6FPmiAsddZ7Xa1Uy2",
  "key25": "5SSSm7HZZHXQoM83YEPUVdthZf7mg5BsQDFBc3UNczf1KfiE5ThsxsdV7NRixQbspTgmW4bV4UEDrKjvrEVYCQz7",
  "key26": "nMdyA1dvDVqAHHZCNmT9YXwYdMYHF1WJ5cG6T2VvXFFq5JcFNjQZk2VU6CKjBMwooL59SH3meGJdj55MQcPzFoU",
  "key27": "23ckJpU5tAkLEYWKfMVTyUquxJMvawh5VU6VmEqsJHW7B9BVKaUvKUH1mXMwUij6nnpdTaqYe8znysMHwbsDboui",
  "key28": "tPJ16wGhXbuGRU7cwBp9bvjUnMKB53N3c1kwt5WCHLybFVVMapmCBRzfyUWHoMuzyVw1BubwGWZYj5HK2QiSNr2",
  "key29": "5JebyV3g8koMPXhKGMXAibkgkpLxTky1iGgZLV9WbWcwYjgAA8dVzbk1JNjpFznH2z7rz1RFmAfWZdHe5THazGto",
  "key30": "JT7ysbqBtejS2jD5ftezcVSxsNuRPFxTsmEY4MNbZALZE7P5dmMNiTj85EwZ7Xn6FuM3w4JyW12ax3dZtaSwKd7",
  "key31": "5Zv2UCupFLwZe6FANN4heLGpbfoaDt4qwqhif62iFbvnXK2sGW9iBX2yc4oP2VnXcHP7bVwUf5dr4aSbX1N6CBTF",
  "key32": "FG7nFZSN52PVvWbRkNdVirr6t6cqBuVxenJjSebtdFqw4bZzZtTxxFAfypmEaKkuMtL2NtukRWb7bJsj9ywNTkz",
  "key33": "3cvViqWxakBqYEp7N7MywaoshK6RJUHgrJ7GwtSMEs8s9VW2rZQSS9GjBmZzuGHzBcL723heFtBp9zF59UCg5vLJ",
  "key34": "5mAKiS8BEJq82Fs2ZUQsqRmezC4gkde2a3GRrVJ7RRk7Jz5jEvAsYGpkkQvqxFp8127qhiNcuB8iZPCaDQX2G8AS",
  "key35": "2M71kW1wb48VEF2Zw8L39mUTGvNyCWkB4jAX9XkkHZsyLjXFmKTV2t9kJPo94LpuLrm816CGe4F66PScat8bcBA5",
  "key36": "49wC5Q72JowjxegDvQpH1eBzdM1XF5W4U6vrbVmGwDZQMzp4hi5wCNurHHReGYSPNidg6xVzv5xZX2poGQoT3tZa"
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
