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
    "3d1XsoDm1s1ViiqkP51QfX6SwprwY75CEUaVTEsmn6rqzpmjaHmRD34eDwkizWLPXyRaxBAoMm2c3hwL4MkgA5UU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L2b3wHNrpkv6PyqCEbQNvzfzXyLhxAjPtwQhANUBdruae8k3LTKBG5SDayWTeXmqyWHzUhsaQbk5wWKYMEtUpao",
  "key1": "3XzgUszDFt97TmdMDT2QDvib2KeRZ2dDMcJWP1vtAs1tqz1Tggxu5hJcoZgCoB8TFtWeWtvoBzP9LGTP6k1VJmUo",
  "key2": "2VCAs6sA71VwGqSB7ayYgXFY3oqjHfUF2xeH9pS7FiZhc3Hmb9hkMYUFD4spgsoaRgYSLnAqenzWu7DPMYH814Bo",
  "key3": "65aukAFfq3gZcWePTDeA5H2UP5Yv8GEM9B8NpVfS2qJMg8Zf1PoMnbXckpwohRwEcd1EW8R5uam4MJMnJUtuM8XD",
  "key4": "2b2WaiyDoHJLe3pPreLi6No1D1qwiZG1mPtVd7d41vv1i4urDb52uudynqmxKGVsEpWEM4GbgGCgpUyeyiJWwupz",
  "key5": "4UpTM3jexR83PFZs4b1b8wsoBqvhrEbzdXdYgCMByMaXFGG5myB8knT9qN3vd3qwu88oyn8V9GA5QTsRcV8SZenX",
  "key6": "48ckAzLdKVukXDcJiGNNXTcrvvHSgvYuxcsHZ3DosGqZAXCQthqAyrkgmwAGnRnBwDMSwH78955dHrLr3NKfYHVd",
  "key7": "3Wx3zGGwkkvby1oexygkzfacZbZmqzw9xJJKcZqFexR6ouqhf8pcwTbBoL6GjxXfhUPZJTM9Ng2zu3GaHVompE8V",
  "key8": "Wipvn8iDJy8z6mST9BJTMBncsiEwqd4Xn79YBLBnvyXT8kkSv5Z1qWj519PRuFJS5dK2PT62z9SAhKmhgYPBYmT",
  "key9": "3KW2VFaS3KH9SFvFufULs6USdb59ujEcd39o8JzE54b1hbd6bcUGMMBA46aKjE4A34B3uQQFttbVTvUzBMBbxfj8",
  "key10": "5c1cmyrNubT3Cpg9Gse6j4c2Lgb3gmcZtC5fQE8cLjRK54kXPUSEu9VKcQt92SkPCXREML41DeJxZ9UBwyXeVytQ",
  "key11": "4242vCBLKwT8SDv7QcrZP5sgZDXDY9swx5Y37WwJAU8FtNdKkVUsk8j6SzWjTrFAUDAczkLfzYozpEdTQBejR8oG",
  "key12": "387xMvDmiTUYxXtVeDfn89mSmJ2kabs4CfwmhKVUMWJda6UTYHUmSfDeBZrL3GXWP7g3Kk84Do4aozxQnCvt48vw",
  "key13": "QaWipgVQXZ66NrjBYmbpuLo2L3U15ZmoAgiaNUrjNvtP9868wKqFHEf4mdqY6m25d5N7R3FB1EcgTWhCy7TSSwr",
  "key14": "3vGjJMvDoCMJAutZteTSpkrEHHcWpsag5TznLYguSTC38g3wqnGX4Uh5fDJN7ccf8oo9mKLxPGrYHEoRFo4sQRxU",
  "key15": "5uM7sRfMnRgsapexoNMV8s4cbQj2rdjVDp82K25jJi2bgtxehotpQzX273HkenCmkatiy5BW2M2gvRfFR8SfBo7Z",
  "key16": "3cXpqpxbpFZViHajUwK8rMSgnSyNxjwcRdJKtpyxX1n4WtJf9ZhSZasueRHYyPB77hfwoFjWmUBtrSNhZNkBTupN",
  "key17": "2qHbRtn6D4Qm5nuhZuzCXS26e5KVJDfmHdLoeWXtfuXWycmbbHzAG88Lk9SHVaNXTHTPQc31fPV5JmCTaCKdsL2K",
  "key18": "jVHkNGqu6Giv3z7V4inm1WuiTqysG6TH9yWTzkp7UAxe4URJPFzzgE6RhcSR45dRshMpLa4RZcPmxV4BWQmt4jT",
  "key19": "41Uj4n2vuG8oC8EPcQ4uF8eSWgDALnoS6H14HemSSJuj9wU4ZbRfRMA84hnNUtKmD3YG7qVBANkXnxTzuhhQCLrq",
  "key20": "5ZNGsBayb9UzMiAEq6V5ZWLgmYmRuvCGPrdYyRnw3pvqEGJ9L8HvyDTHmBRZABbCRi3tM2X3NQ5KT6FZaVo6pKxB",
  "key21": "3msJfu9fpF5WfdJSsaxqdTyuchRriAAfJ9RL8kPe9RQyi4PL1c8THrWGTepx8XHZcJrNbG2tNUxwXsDuc34v8f7E",
  "key22": "62p5XG2bRvi223X65D39C1pjzSkjiYWhEN9QrSMBYsGXfmrYUFinjpBn4yiAd57SRtnbde7zqdK22o3FWAH5T26M",
  "key23": "5gxkiXGsvjVEgbLxuQwCJA8uXxVcPqAJVvZ1jvxmbvYAvGQhtNcMehB5gQfkZHQMucvnjwPWYX7qWLoFXXhByTPs",
  "key24": "f4LcEwGs7NzhKnNrsbqf6sRKX7iasAJ4ZvsQWsSimd7tmuDX5Vxx4AZ9gf5YzZurZDTu4Ngqkr7vosULPEoEkWd",
  "key25": "57S35vjU14dhozuR5gbR9sRPWMfp5iVjBxT1UrBSto89pTtQmv2qtYdCZDZUBncPxGFNgKfUh8sHXJmasHhzoN2M",
  "key26": "4KLQJZE6bynB3e1kddL9jNnvY7GNoQWM2pnVwzgZ9SR8jdNmuGb2gXtDwkS5xcfVk5MiwQqe3ZMuiV6vLtSoP4zJ",
  "key27": "hKKgYT5TJU8onV8fMaQnFiqtCXaYjeDZv8mq4b1vidQPvzF8p1qiatv81igohCPe8rSTYZEB1wLgRTFY2teuDCa",
  "key28": "2FQw437qW64BJSSLRTVK4yUrsq5MZYoRzhgFxTUh6AViBzd6zfouTrsN4u4SwPrPMHRUFw3Cv4puQQ69VGNiVY12",
  "key29": "3QyX5Tb7TXpctxWvE79dkzBH9Kq3RNKHMeqamhJXCt4xFBygpZwDcdcV9KUiBZgRgT4brgScC6c9cdFa6XD3p5sE",
  "key30": "2N7UirDbfshW2gpzfp4sdsVV8jgHeMVt3DehgHRVNHRXonuX9HSM7sVBfMnKKfUHAbkxPj3gaQxCNnbZCoocUnFH",
  "key31": "wN8GERepUAszxifMKu2yd7E4xW8oPUWRQ3b3Ph41HhaF8uG1uUa4LkmmLqMztoPcdVsb9W1UAVfeBPpm2tWtJoV",
  "key32": "4jzLR5duCRRKyNT2nmzNXEKerJdLMhBVFkx1hc82ji18RxjrgCSbGnACGp9zvSFQLHdufoFabnEQ7XGPpm4FNgXu",
  "key33": "2XAcKiB48EZ2AQ1GFmUeDoPi5avuaZH85Enu54ZGwTfkK8ZayoeuqLwGo9ncWsXBFyy4zw83HMyvUw2hizo4Whi2",
  "key34": "3fpKYwdZmei2AngcA2GsPMa7xsNKBy31Dkdab8sGN23NkwxTgtCp52AH1eiFPczc8XtRvJPYDYie6d1ihaBTiN18",
  "key35": "62HioNpkZPJ5aFPeKSXcYcngH9nNpxhiuQdJWePLNwYjSSnFpzgtkRiPzEbP3zjAhybvkW2zkS27shSoVXVEfne2",
  "key36": "2FDtagDCeYEvaV2pRuNAMXtbvfLEs9zqcowPjsKvdawRiMb9bMsvHiwM5iAnZBjz2TsxjwhhrYo41ytwdbDVmBZ5",
  "key37": "5zVKacmp837MFRBgLEbpkUMwB5aqGo9zsU881L8RT97MtTfXjx1Mwuv1VCN7S5YzjL2kXdsck5EoY8utzsFkxY4E",
  "key38": "2fm6LaEhDs1NakJimAXwC1Lp1nK7afui3vNhHB35hwhGS95zLTqURehzJW2FbY1y7hHezPWYvoF83hhtxqYKYnCZ",
  "key39": "4cA2ZwVvcPSnQHRycax1jXZjdTjN1SzgcEf4khoDQfZ2wTz8WkjtY9eSMzHKaDaBBZKM6yM8TEhR6BRqAdCf7zW2",
  "key40": "4DWeCZ98p3hqFZDuaYqeGscujdhDpG2A6wyP9QfeC5FUwuNoSS4TW36CXBBd6udSZPDRKsqtjeFPR2SCQF82ZdE4"
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
