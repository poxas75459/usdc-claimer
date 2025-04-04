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
    "KtCKtABrZTPUXXey72u2hWmdoyM5bujDQKn6jLKAu57x36AJuFZVbGHJRwwFHvhTdy4vj4ZGgwKyYXLEQFTR6YN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xoChaouXPJYMHCouBDQ21uL191gb6noin7AY5yunN7AGz3o38UojrxJCUADf9ppv7T82sBHq23HtYwz2e7xPsDh",
  "key1": "3sd6fy1EbnXzsa7JvNv9MDWz9p2YmC4h2W7KxYLAXPQJFJWjf8sH63UvgGXMwk8SdXKE4HhTtUpSuL8YvN4jptzU",
  "key2": "4V6wvm54eXgn8Vxthbyq53Y2NKDBg6qfLC3r98L8LcwVxspuDSWHHAavsL6ycVHSRLXPnvYCyn2sipFSpLxfAms6",
  "key3": "3Gb3KVt5sDbqn9y8g1snscDkkLnDFmyjTttuGduzQki4Lw34XKe5aaXDN6Tad92oKi9Af4WykmhbqRg5oFsvcttg",
  "key4": "5j9JmV8s3Vug9MPTwSrMmgrdyW2539TKAVWngb78fZT8b2tXHA15t4ARDUWVAXwZ1ohGFHzqPZKSiRtzL5R9w4Pq",
  "key5": "3fP9qRJcdqb37uC2YWT2hKV7gTrPUYff7v8ZuhEqMXbjqZFGCKMrp8do6gF5Wbc9AUCpmbLiRM6EGWGiEhBYzFpf",
  "key6": "3Hn5iJy9hd2fV7iQAKiR757JFPFCZnk2nNC24NSH8haU987RA1pe6K8s8nyfXYuPJK81JkEh1z5NWM36TkXCgAEK",
  "key7": "5rgb97Y53wmbt4DnXhrDZZUfx6Pvw4bK3vqYau8DQSFn5CMm8Hj4aR8j4XbfEWHNXBRYCFZttzuAjR8R1PtR7GsM",
  "key8": "4FESUFKDw8sNj3roD1SYHK9L4Sq5bk9TdYWxaTGmJCNbFVcq67DwRwwmZSvGD5piGvsXbHmTXtuTiF6YnESjhwZJ",
  "key9": "3ptgz6KYAjyzNsc53SzrjURabvFNZBrcNCgSURMimJvn1Zo8oYKEwFk1iF5fNoSTBEoBDX1h3faC2cP4vhFhu7yk",
  "key10": "2zxT7BnPSrcXoKXihNqgCFoTMpPmpPJEwRwpM6zh4GoBekHvsp3CnAnA2mBbLMV49VsDdHCwxu6tmj18dNy7DZt",
  "key11": "uDth2EdAiTSgeky6QGVsR75wRtuzFFYM6bbzg5sa2FWqF9KVyg3ZC3Vh1Cr8YcJjoo31sP3TAVzTjEkK5yCbsLL",
  "key12": "5NzGwm1GsdTRhhUfsbSrJPMLzzHcm3LC8BJjGyZMK1P1zuFb3UmWWgFFqoWQGGLdv1T5GkCfxLRpZ2HowNCLspBR",
  "key13": "2SrR3gqNvDVLBzfUviyXNqbY8Y1LCfbUpVFSdtnUieUJHQrP98qKTPUs4SNHHbRpiteDZQsmK8tkiZdcDy22EPMi",
  "key14": "a4G6LSYdMUq7eQBg4VT3Awzh6TweYKAovHqBfT9dKgD9MD5N8oKd2kZEnwSsVoeb15F1tahTRVJTvfdxxMaXvrx",
  "key15": "nASHnKX77gB5XWin8gU3qrenvLUSwmCEUSR87R4PUe1Q4BibSFFn9iKqBBrTv5WoHQ8N8UcM3Q94WBtPPcnn7de",
  "key16": "4G91ah6oLDRiE1bQrFbc76pbWSuZ3udQsa8z4hBgFitRGUSUAkg8o37TV8sd486cEc6EvqpjaqDPxKqqeHEB2xSP",
  "key17": "624nsigYTjFiaPi3na3Vu8c47j6YgWjBgfNkqfX3iHUKJSkYWto1EEppi3ZtayL9w9zHz5ZGCyZ5m2QYgaRW2HjC",
  "key18": "3omCiYKeY6BWrsu9u5YQd7dBuRY2zLDRKzaAgDB5WeGTk4VEzT5y9YeT6KPejwneN7ixEkAQfzp2aRc1ApwiCD5A",
  "key19": "2ENiTP2GxfvB9ovB9A27q8ZNuq3ADRnsqFbkJ7ZgW2GLQKbkTqNCkFApQ1qwwFHD8ThDdh3Hv467TfvhurduKTjz",
  "key20": "2KZYpUnTJnFeHFgmSgYFEL4As5oS2B1ZivdX3pbVwQogvopakrKyULvmk1a1wng2ZWVBReubXRXBkR11SmQJJWY2",
  "key21": "4JBXNBas5yrn2Ps3vzbVmcTy2qyDdUFtitQVPoQVnrqz1RpaJMK1hNfFtYyDucSKiJrtt6k55xQcx9JuEUXSrqcV",
  "key22": "2piBPs9NJ1HGzXG6RN3wnX3NDEaBHjXSdJqRkTqdf6i9dLEXZ9j543aPKoiLwD92GJ8n9SApd93R6fgE2WWufrYg",
  "key23": "4grULTy2NUYURwghGS4rgoWxX3ZSJzB9JmHdwnLbKfQByVyXN9wkQSwn8hsXPo6YRByPCh6xeFLdMSwyqFa2yWws",
  "key24": "bt9DxWYL4DYCEPW4AWpuN4Bik5VjYLWGm7ojf55TD7P5cXxYAX74p3H3BCzV3HcLMHow4qbx3nutVVLRLqd4WAe",
  "key25": "NzPS3nikcrQtVGw8ERfgq1bd7GvHcGCfN2D17BsnRre49mwoznPoTer1a1u418SFiX3yi1jmJ1pNXwu6AfABhUk",
  "key26": "46gTTt7ZyZVWLdfeSov2yytgZzuz5DbMQsADX2C7m2AZUYW2VFZNhzxjFXZD1LXANxSQ4SPT4eAE3JKzY3pusFXL",
  "key27": "21ZXM2fycmrHk7uBMt6iES9MbB39mtXKw7jvqv6bDG3nZjaGNwrx1t1MvoD9JH8b2MRYEBZbC5mjEKxS1vqZMDg2",
  "key28": "b8r7wyWf49WVVowqnxLDBbfpVP3uEc27LAoU9mc2ffE9hjV6T2gAYz9pBKscznRGUGFMYoeZHii8oqZ8h1Yndm7",
  "key29": "KiWgfWpBUb5ssWNac88gcrsoY1JAbDB88DnKpGSBjVBbKx4fhYWD3qjVaE2GLh51L8t7UFY3bDB3M7tfVLzVbJp",
  "key30": "2DC3k1MP6nSzx2vdSJ5iXdy8JeY2t8sFPZwutH7zrvPk6CezrMTRJSoKAg6JGzPFCqiV6sKc3bWpaeSzeM3WSZ8o",
  "key31": "2KRL2f29ALUiBP37VXyi5baM9XcpnpeBMgeEBMZRuLinvgaoPZi7zTqmCxFE4VuzpJPB4CgMkDRd9kwkX4FCBTw2",
  "key32": "2z3A7g4qM9iw7Cur3DMXASweTHBKPE2jTuBwZt6rmWXfNVLSmw1Qe1D54TJo5gKYyP4SRFTfCDcyFhCjKwTndnaf",
  "key33": "532RwcivCbmYUkEvigJDixQNy36nuB9ZVZeEizNaaTPbFpLNeUnLS6FhJyYu2T1H65r4fu399gPgRLbmRMDiq8B8",
  "key34": "65rmeeegTX9CifZweDBWxdX3RjybnCqn3PucSRS2saS2MoBPs8BpXujNeZHixcyRLidhuPu6c61UVDX2nyQNseSF",
  "key35": "2EJ6n932PXNfEWGvHXMQgxTjNTvPEVzpd6HzZiHSU18WL7yte5fV6tBbgXgsAT8oVjG5CK2yVwkTBFCcaDf2eNPH",
  "key36": "5bLVhmq8MJeM2zv6RXu4NNccAsHivhXK4sJeyo2YSbHSRDBeEmqrUFAzZsuRuX7b48PXn6AHLnUgfnoik3DnnY29",
  "key37": "41kZMmMFrbtnLdr4DQYT2cRQjYQYr2xTaf8WDXSXT4H4KPS5Q5izugky1Xmo68es8uKEs2a2P1NbjsHXRetxidGp",
  "key38": "gYMz4UCRZh7uZj2wWkyBnV4jCRQ8NBYAiYYNkN5KSNULY8ts1fQuhvbdukdQbyygKjakqCoLqnS4dRif4pHrvum",
  "key39": "4dpjy1MAD6gpSTFZMJKA4Cy9k4inXAqWiMxMLFmdXgQsDcCBycPzePUHde5uruPyizHadNiaK7VMkTpnQPyWZJ1x",
  "key40": "54ApkHzYjaHyxyANcrMUsqEspMWRUPHAuLtc1K5ijxxRSVzxoPv95QjkHgtDZprNtFanHxDTAMnwtRhqRyKSQWeh",
  "key41": "2Vse2pMwK5fziiLhfEX9qv9LYZKcKthLFV4UntKdyrjRugTUZu5GNzaorYQbCUd9wNGCf2Lixr2pf6uKPPZnYjV6"
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
