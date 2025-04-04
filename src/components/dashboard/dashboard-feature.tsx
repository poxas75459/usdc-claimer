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
    "4ZqatBUNdV7yqGWZ9nzn3bnYaD7G14rjbNzvKP5fgtRMrQGqm1Z8UVDffgYtamVL4jRwZM5vwZGyNkmjHEa4sfkN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bNAGaBKQRKPaeQDLScPeCrzWMSzYXyzGdkYamH7j8tj3Yrc6BZAhxVr8YTa7aLLa8ZDoFgj9xw2TTm1FR7RzGjg",
  "key1": "4f1mKPXGeY6efoB6vbxNqcLQzZbNKXWtanjKxhT4rb4q7ME9N97BjYiZvnRN7i94mCNWLxiZ9xHKbvzXqNwQWnNQ",
  "key2": "514jJTL4TUEWJBcfb2iDudVoBENMr3REm74WSifEYcVVzruMzF8VL3W84Uk7wqu7NZhVXWzY4UD436VxovrUAQ8D",
  "key3": "4HxsEYgkVGy3wUGEzA3LRF6R85mxvAL6vFoqzK8YNSizvzJQSY5cASgVDMquu7a9TtET9bYQVaTpmjPQoMz6xNCN",
  "key4": "3VBAVtavnrVcjwi5hjJZL9DWtu4mbX52x5NqYRNchsm7azc6LiR8zEF3u9vRone7TCmFDPLHiDCL1etDtnoe8avp",
  "key5": "5c7D6u7HYQ6eyvMwmUWj3dbq7waq76LCGur6ZEQKfEF1Y3Eubtcy9mXEYw12bEd9UcGSS8bhteQKaobZ1qtrTgCR",
  "key6": "2XejPWiSCinrkP84jMYmS8EYq9eXnvQacfU531RssNn17bb7481XmVrXK1pkCtbv7hjHX7MHzPjGZ1yH26JHp7L",
  "key7": "31w4cntG9azy69u7T1CsFJ43rbZNY46baYrbD8k6BmuFWsUE6eLZENDCq2SxTV6SdftWSe86d9MpeTrMEGyo5WLz",
  "key8": "5Te2jFY9KGynaCcUcggF1vqiyJ5FMNbJcFP4FX9tH4SMWBQZozUbRqDa9hBW2zzZwrU9NG8ZtwMALZ96kdpaMfUb",
  "key9": "2dXRki1DisdiKUJKtb5NMp6C2ZCqdkqs9RziT7Fx9oGHn6dYSGfe6Rw3dz5i2QzdUmJaee7pnFEChrngE16ciMtG",
  "key10": "3YkVVKHSpV5y8VWNLjRxXUnV7CSAiSeZzgexMg5WKmXYDq5tXgtNgrKiRHsvqfV3ogyLR5njzJARyvgGNuBiBdyf",
  "key11": "6ScYYduusmdve2mftFqWbJzZ9LynfZaruV3Ks79JGpgZAYbPJWhpRWReWrEbMiJbZxNgTgMMegYVRRoewxLmM3f",
  "key12": "iW3XqgB3PK3Tm93kKjbyNCShgwFQVvZGhH3uZvUrroCy5ifoCCGohxwCzCvove89Q44CrmYjdpBBRo9vKTUcUuu",
  "key13": "3ABuVVFSFdjzP4euEmVFACNRtMpVXLGUn1Z2nWJd8eTZJJoJqa1keGGRqQTtri323nZ4cax4GNsgNx18itctCi61",
  "key14": "2dot9m5U8PcDNDbtjTWySQ7M4N7tUtdi5icjaA7u6mm3B1D62yThEtQPSaP8t7bHM5ApoajYDbcvatxGzarowBda",
  "key15": "UjNemWAfd6mJy7htwcT9byMR7DkzRu4rCvQmoeeSU5GjbPY3EJLLYHNjE76dThdt1Tb5sjoKSEmTxYW2jTCRbJh",
  "key16": "2sK2vUAoZhJo23us6EAbpjj7hyY1LSEAtsAVPH2TnPuorCUibBTCemjUm7DcHQmNJQi3aNadBpbc3J7NvBMPK3yZ",
  "key17": "eFqdoeU9o3sXbSwAciPZysvAodQe3HkGNQV1uU3ATgefQgAyiq2jmwDbFuJstqwazLrSu4mB8Cj4FiyWmTAhYTw",
  "key18": "4xi6fRKExQD7pY3Sz8dGzWczG6WBrVNpPyMvese11nweJthvgVfSfU1vwRn1v8jxrhJ64L9rSfCmKmUixyvuMcHa",
  "key19": "4aU2D9QL1U4tkm96qNNaD7qAgrAZCnwo9dXkVF5o1gc1NGH6CrRfpmVwhvatHH9h4hWkym8TfAqa2MpggKfAkAVL",
  "key20": "2UcqYTw5pMencVaxPdiugVmJaeuZ7oaMvdSu8ZD2SGDbcLAUFRNJaEt1U848YGyaxk5z6czg8Q99JdcrzUWQX4U4",
  "key21": "5e6oFT6vYcYFjJHznwqEKHJ3Z1DRxQSmHusp771NsHqjfFK6SsZHbCLaAwcKGVNW3ZT7yrfBMgmi4v1dhzk8naGB",
  "key22": "YmUjtWjp34tEdHuDMPddDJKwohAMhHhtRztZvLPZdnW9vfvRGe8Lc43XzjcKTZ77nzgCWXWSNr9cjLBouq4hHtu",
  "key23": "2gkHjNJBoB7fbz8Xsov84k8wLxeExqF7ucvVX1w39SfGFKnJs8stKZa4XKPgeCh3U7CaCVqwrezSJCjUmdnFEpJt",
  "key24": "5XfsfwhNGP2GRqkjMK2Vh2R2arDNhcBApDBWJFGzSgUmMZPHBr1X1T2s8YvqgWTAQTLhvwH4q64DBPms5v4qBZxd",
  "key25": "V6qMQWwNgqMHwQbyL7L2UVMD4mE3kf52DcKap2AzuEPT5t1VCd8ApYUbYhFBoCDH4dcmFxjhzoR6G3HtTbpSoGd",
  "key26": "58UufCrD2qn6KSyi58aWz95f8rw1rF5DK6bui2qvsPkCppSga248jaKUd9NkYAo3jmX8wmLdpV8A4V22tYA53QeL",
  "key27": "2aGZEZ3994KgTfqk9WMZfuvuNMzXCQ88xsu1y6AZxYFx9PQQzMnEx1osfmDjfhv7maC2EJK5W2fEkpGxXD6Qzjab",
  "key28": "4rurCDjQEMndRpQ2iNQoM7mQp44pSDkSeUGF8jSeqhK4gtquDwg6Ld71zMHGUVsdE6WD9q5ZE5tmFAg5jwtXF5CJ",
  "key29": "3XSbuFwnJ7t3wKtSSN1fYaHDfZEN3SsYADu2uyQkN6JSj8Nyhg9FkQtgnJtNzf6Sz3jqjW8etmiz7YbZhP3mmVF5",
  "key30": "5QoFWACyLw2XoMjiFbRqCCcUFAJpMW2WgT6GrjwKTXq2WCi49iQ5FNkY21fqSmiFg9T1b8z2Pro2UQGTtYpUVVr1",
  "key31": "4tcb9fiwLvhWVG7yZ9oGjwWbwGZqEZVdCZyWCvK9iyxeinDBLnGwGy8AMLU8tizyqHiDg5qTC7T5E4voQY8TeCyY",
  "key32": "54mZTojEijEvKXLtUsUyPf18WzYFTVXyfDxcy1x2we31heB49LCZEw9Co2bWKL8yCmow4UFFy1n8XwSuj64gw6JS",
  "key33": "YYzSgAAjUCiNdKAH6JuZ2Wtb7qH5gt62p62NA3qmGyGoerEYLBbpsSTdsK1c4GjCEzW4tkjHmv2B27RuJKLnqgv",
  "key34": "arqnG4kt3ZWex6iwdP7MD5zod32DmAnD26frM6XUzopJsUwZ1LtSoPKhQKDuWpdsUwKwypCpF6WEpenWXnXR16p",
  "key35": "8VARGRJeiBYFxdVxNd75oKTsRSNJxKyja8S43Dbz5FoKQXiGx51nbc5uiLJvSifgw9Zm1q2h2ZisiqhfuP4Fr9T",
  "key36": "294VyyJMw7e3ibE8QWvR1yWTBG3jUAfGzDxoexWzhcZHBghbigS1afNxsPii9jBfhfwZXJER9o11VhtdAUQEfsbn",
  "key37": "4ggTjSTC2xYsJhcL2bynXivJgoRLoyrPuBcA5DSMvrX9LmRZbq5eXLS2KJ2RuNDWjT9yiWxJhgXEPhCbQLTbWbPU",
  "key38": "2H8bkEW5toKoCSsopb5vqtDvJvGUAGtJK68oZFzhn5HiucpGQgaZctk3vDkKQQhJFA52KcmpVcFG8RLZuQwFHCED",
  "key39": "2y3thWxeSVLsACpHhFFQ1JXTRCfBcDhkNiBC6BabjbQABL4QwFCqpnhiF9zKrfTDfTeqbG1DEWJS7pTH58EvaLWa",
  "key40": "JkkjZ5T7XWjEr53219Wa4wCfe3m7NJQQdkma1UsbtAtpAY7F32zzAWzQ9tK2GnHNiuCzYTfzWoNUvqoZgKWiZyd",
  "key41": "23BAMx1MuTGdDYW2BdhpmRQRxgU1bByq12gKstmPM9UkzufcjvB8MGFJLMUyBKtTATxQnkjk1waKwxEnP9GCrCXp",
  "key42": "24wiuySJ1dNzS8JLZZnx7XtBpkv7SxtFYQjdRoWLpC3dtUSXV4WSMYDHkjQ1zvoHpHsGF4JifEKWcph5hUbykYct",
  "key43": "29vP4GrpTMBtRNVu86ctezVxkpoiZoATcTHWaRuyhLtvwsCvYQ9AnvQXTgRFFWbUdFYAzp9b1jkh7yCQQn98gXb5",
  "key44": "3RWTbDCyt7hqUtsTjnjZX26ZMcmS8oSCvywv6xvYWAXZAB9Gt3DU7hgT8b3JytZxHAqWUqw3fAXqRbmtNgNgPjT8",
  "key45": "A5ZL35qDUmW2RKQVDs92MwBK9z2PXeDGJixzqCh6UzvKdkj1DGLdh9ZANF3T4fueZk29qEKVcB1myhRm9QEUE3P"
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
