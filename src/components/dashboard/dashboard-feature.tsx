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
    "Hx2JrNECd87zvDoNHtjuigknDFLyvivzz9k9PmxSpM6Qos6zs1VuEeckH8gepnPJisGBEL1yysHVUHc8rz2kV62"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6VbK3e2nJZcuNwopypNHtNr7Kec3wbqteF6JMYAqiq9Viz5efj5anx34Ch64Rme5XQ4Ya7ZsnVSqWfL6jFkBTf8",
  "key1": "CCxNkRDmHudbkwu8dWJpM4sEA9c3NzBcztZKpLwHo8FM5zEybgfQ7t9mARcsMuuVxomQxAGxfc2zjCQZwDpzz7E",
  "key2": "dYPx1YCoHadLrvc6W9yMA4maUx9ZwDNQ1c47cMucJ6HaLgcQRSLdFwztVFXevk93WWCccQsAtqmNe15bnMezNPB",
  "key3": "3ZhhxPDEQqiDnRjviWc1aG1ykGCNVFFrip2Z7LBV3VxXeNmy1Hn5LwdyiWd7RnSTZZo9QK9WrAveThTSRJJsadqa",
  "key4": "3yvcrxr1bQGTUC4WxUrksHjX42uv2uq2fdFZTQwfvgdSBnFD1N1KqYZ1CbHMjJpr9FxRZXwtykxuLhDuztS8PKfr",
  "key5": "4fLdLwYsfHKYxqrJ65baVqXaigXzs3Vs174YuUhJ62Fr5q8cexcSUDJcXerCoeJcNECDhu7cPc82PbC92GMEwvHw",
  "key6": "CpEriVJxxzSMHBLzaDsT1w1dYfF8Jn8b9sx63XYwSVW73NyhzJyfyFvMkVhuPv9CxEWF9SF76PZ4MG4JD6Jh2PA",
  "key7": "4upHXBwvFRAkTpJpzcDGeZcZoUFtwjgmjVjtUFTJkc8RwxwNvS7GW4aa826Aa7dHurLUwNPfFAqXB1c2gCy37ZSW",
  "key8": "45Juwdxk43qpMhYoxzufaVMiTFSTzkNTX7goe2VxvTAa1dWKHVjeWBce8oeSdotjargLHqFTzY79uhxp8dPQKmxz",
  "key9": "2zH4qgDhWU7p1EL4sZjSfTCapXsSkkYAtzuM6ZDsdk2kSqXRwq4LqxriKAN3pFnpH8PCAjuyQBMUiYeZJp5ocRF2",
  "key10": "3Tz937YauWQs9oGscjDVXL3Zr988YtVS4jyg6ykgqzRCwdEbF52S9ZGsFnZQioK4GpFCG41bfNAtvQybj2CU2paS",
  "key11": "5BCdPWnN9Jyu5DM7Vw5iDJXcQwshYfhDUsEJJy5Gq2WAQQZoRk8Khj76EfVuTAtRGAAHJE6jauPNxNNw7QTwANfx",
  "key12": "3qNU3LU6h4qbxLf2FD9W6AaRLx5qieGtFJGufkjsE64TTDmm5fGj3bDFb5P4vb9EavYVqjaBBYPg3gGtuzEDBwxf",
  "key13": "3ppbKo467dDg3sJYvXRQYvXDs69mABCEeMB4WH6fJQukiBN1s9FUJxmTaX1ZZN6bspA69MX3C2SkNJP94YjSvgYU",
  "key14": "63qcZTvQzK4mhsXZEfUMoYJycbw8f7vk2FQHsP2FodyjEzNdSk8aoY8KtisGJaZYKsoTokeu8usZZUmK65xjwA13",
  "key15": "ACKX6uzfbHEKMFgcdo5KC4sN8W4fAY3Czkd67bLyvPFtLJQW5pLTKRwzkJJraWE8jyEecLK98Drz5tfRURtK47K",
  "key16": "XaQNKGZjBGPziQ7ebnqQB899BEiRAbVA7rX2mcwjTvW6qbhA5MifAZGQAgStDrMC5NrKBk6nM1zj6FLwm4CRShq",
  "key17": "47vcDxqLnRer6uAcLJyqTT9754VGAXkpMVwAQrLPJKnCwWgt3sQnxhp6eGUwahQEGBFL7Bax9hjuhEuiLPYmmmXK",
  "key18": "2J3jGokhZGw1cZc9yJp3QNKJQ1cXAtjYQEozfzzG2uR1VW5df68wjnch5sU21izCxXVLC3hzySDQBbaeZeVqZEdp",
  "key19": "4TDDkEG7gSNCQsqYA7ya3TuXsczxYPYfbcc9QLzc4vPrcSSDJUkHVWrJ5jb9g1rHxvG6u6ze6s5eyPjGiPPc9dwr",
  "key20": "3QVf97GUuZtPf4owkCJGHqiNFLQL8hZLqFoNvrkRWgDAqKqNohvU7LkELnrkEgtDVpvSbJYq8rCiYnf5eHn19xyz",
  "key21": "2feohGVzUKaZ21kMzVd2UuMskKX9VEDEfpz3fLE8wvzdFjE8ZzKyz2PPGrpktpVh6s69k7FVqDYJ66ursHQH8iws",
  "key22": "4KjPSvXbjXnNF35hdDfxRNdiAB5Y4VuKaC257BERuvAZpC8WBz5NjWNwAbksnfs7MQieMCKmqmgC5DiTk4gtNgYE",
  "key23": "3X2zXY8jMN3u6ZySXXexoUsYtxMKLS7RoAG4GZrSygy63CiTGD4bpDXFfJkRSgPbRvVCbibChjmbHtgEf9z9Mv5B",
  "key24": "3yNAFCTsXFoMidx9DNRPhYJRNJ7eKSjZ8tdWFZvoRqYxTK6xKNhK5n4T5Sqp3jWL5aKoSDGokP7iwLet8gD5gHkX",
  "key25": "3aHzjCV4sMwz9WKhJ3yAuDaTG88PPok1274QPbPRDeKP56gJSbpzzYeSXseQ53cp1vWvkFtukqo2oG9vkBC1kHHe",
  "key26": "c3cWmGB4BzycdPSkEM7QwP7eant6CQnEz5iXTWFVtA8DvSxwtwudf1g6UasMGbuqHRQhv5ca4QH2AXemWCWLC2D",
  "key27": "D2Y3qJVZttGJN4uuZDEpJVHDsteSwPxs944i7EB3aJNJEvLk5MNs6ZEmavhsViKnUNCz7kGkbS3cs5FVgTz6PB5",
  "key28": "4NnyiwhzdjdngCZxxddFbRyggiz5wocBMDqCBy55F1TeQr9dYFZpwQGeu6QcpHPMdCVGtxp5NeLsf8aRo2i7TGZo",
  "key29": "a47ei3f5Y2dok2sCiBoaeF8WV2jM1maXBxyWpAGxnKrWabn1bdhCv49MfidAb9uZoKFCeuoaTatvsf2cCc9WuZz",
  "key30": "4kS6uCnVPt2ocK6wu8mHgrk6Bmw6mpugQ41Bq3kgRzHkFdHKDhq7X8KF4Pwo8fBR6HhBpNwm3kn1mK4m9cESS7qP",
  "key31": "bZACpSUxyqBDseA7mH2rFmFp6NpGAczngPXccoj7iVA6wUgwYB9C4ZN7v36iu1o5LoWrj1QAA3zqcHfSr7hqWMq",
  "key32": "54Nw8fAG7DE5dG5NYgKP9MDzZmkKwGEWt7C7BU63QbRMG8L6Q7SaYzyWAYUZ1dVLjKaHz6VBfCkVmmh7oDFanMpL",
  "key33": "Ayq9muz1Yka4uHBuT3TKpy9CV5EdXR4T9FKaNwsVzSRh1LvqMkeiubwzsqUBSLMordqeYRdZNJpndKvtkumTbzE",
  "key34": "3mktdBHd65uVk4go9Sygv1SbpRchDno6veKxZNHTrgu6p3fsaHsGKAm6yma1355b2b63BkBZn819Mtqh6P1BjTcK",
  "key35": "479E7oRirWTBw48ftKqt4BEsA4afCZTaLoiGvnCieqWavj7eTF1eDxQz5h3yHKhz9HCLEiGwWSvUEpSNvV1YZsjf",
  "key36": "nyNPyRtMXTCcNccAuYQU7DqH1K4Bc38jDb848W1ioL2G8R3tk4KEwCrYAvGpzvv5HhsNUVGBDdTQ4k8r8KrJDNF",
  "key37": "5Jvon47eYQbBHieb7P6oj7dHt1JyhbkddZ5wTYNkbkqyXG5purEt5iGUmFpW69hs2eGZJpdoJzzGLQCoKJDCbZ6v",
  "key38": "45Z2smPQw9DCw2Qqc4zuRC2Ay92TjC1qrWLTu4CXtUQs7ppbvRLxKYwZyPxsW5tZjBM6DyX9CqkshKoqXkq2ng1X",
  "key39": "3b5YESn5BzzFm5Z84QkTfV7uRMfXQvTLmVxpDyJcSmNWcDg6cUeHhFQGaHskhpy8rDFwQrLxHD1JDC15DiytJ7AK",
  "key40": "3iuExV8oBhXqucNqWAn1K9iSCHLemaE6j4WnXQQXAifH6Y5sdTvX9pr7mPSSVYjRsDwTEb6EAdG8oRjH94arRQbF",
  "key41": "2ZWmB7RK2ciH1kWJpzC3eprT7f5Rnoxu3s917pzWQ9P4RpcQuWaz1t46LvLCZaM9nHL9HvDc1zqs1uUQiem3UDwx"
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
