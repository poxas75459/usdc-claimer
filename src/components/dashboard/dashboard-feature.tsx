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
    "8K7cmx3M4W66BybdSmy3HDLMN9p1sTe3FPrnZsL4LkYd9bDvReJ7ZwjggptarkDEHpzybCBAzb2GEXt5AGxP7Tg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bMDEYHVwpeRCXPRReZHCrYnSgTho5uxbdThmwqa2dM8RfF6WzzRTg1KLRskp9hjmeRAgBVAGCwYseKCiAxrLTQJ",
  "key1": "3JxyX9SikZ9XxGLXDJ5sWotbwLBgfSzHXQiDurEe25sKEEA1mbrdnaz99eWScv7o99ExEsJTqSNBr1gvgEbX6JoM",
  "key2": "DnkhCshG1sasTHvSE2UKovd4KoCg8K4n7munh5EcCqHq7MrMGmiFf52dFpjR2hYdko4KLGxKNdnBBof9fZMYsuD",
  "key3": "ZtoCABXpLuDm2TyupyjGyhwSwrbFfKWcQzdv8DXPDaT7cjFLwVuR5LWK2puKcjGkgEDcbowk7DLzaA93mFrn1DY",
  "key4": "3NnKZw7fBwqG4qz7K6UKYKwipaUinMthSJpVpWGXfEFw2feG31syt5jPYAywGgpUeHXdsStDJ5aBA9wcfBvzjhuU",
  "key5": "5V6i1jTGeqwGiYqYstFPr4QajWPHf6QDf9wxXZjTyiRHEBMxe76vLaBrTS3wtWsSEn9t6HmXHPpQLkB6jK9Zn7vd",
  "key6": "ypoHW6xXdeomYv2PVA8Z7baGF6Fe4pbVKt5HC5Xda7JiKCT5fE4NnBSCACj5Fk6Yg267iSFg2oUED1UMA9QT739",
  "key7": "y1HJHGL5B9J3WSwQNPSkFooBKokhR2kmnruktHWF1TxZvRm6jVYKc45bjpwgZFDSXYV14Q4c155duPnYYwq2b9u",
  "key8": "2gmahTXBdhzHcfm4hcWYfzpavKEDzuprUfo76KAHTao185ecWbGWr1gCjE7Mgcj5LBh6ddKgrVh9nYNsComRjBGP",
  "key9": "nLbByeTjMT2VkrouZodvGWKRPCtruXhXkS1zRa31wn4v9oUJHJBNkAYvom25QP2pgaiMf5mrz6WDRK5jiB6fy8t",
  "key10": "4ewVpiTew8d5uouLEfyqzhp6sFm1Cnr3e7GKG1X2mp4bsJJVv3QV5wANH4HpXqPCWQ6ZKXnjxTtAUeP3RXwnQhPB",
  "key11": "2zJr2x4dbUP47yYz5U8V4xySyfHHxcRU337kmtdmRkebZtqs4jJ15c72yedamFmppdPKhib8rSBSvJXesf8hj222",
  "key12": "66gyFTvDYDjuZb2VuxckUr1S8EZv6cPAo3EgX5UtGmDFUiGZXegFkqZh2W85y7PUsHFznK7zzgqo35MKGBRZUFEq",
  "key13": "53vZbeg5RhPcNUSg2ZPvesVbPa3Whb9soJ7jJUDctFqKmETyKsNYYG78JfhLJLwcmVqzxU61EwbhhV2daV2HTkKp",
  "key14": "2SZXPGYGKmSFVpKzXN2xN1QTjEefo1SYBAaC5aBWsQGGzLzoa62Eo4rYDHPBBcH72ozMLZzgqykZ8mH9poy78a2W",
  "key15": "5aPcB4ztud3VvDn4yWBBz5DAPfX5Ta3GQYWMxpuUa2SjU1ViSykcNJSt3ZQW6DCrJzuJgVmwrDsdVhY5e1GSyveK",
  "key16": "3jAeozfFgBnz2T7WkzUosxLsx7EEassVcjw8wFW78Hk3BcrEsBEpvfQKcFuAWpaFQwKAhu9sos1EeD8TRi5Ck4d1",
  "key17": "yvrkLvU55AxRgHS8TgFBX7TNvvHE19P1as4rjQ81pkpRAyc2bL5jgyuYC4XexhbeuP9i5yUmzGgkC9rPfu5Dkjk",
  "key18": "48xZFrBTCD9GmDykn87cnAETB35cGZvDLp6xFp7mjr8gK5YHNzRKCtHhurHrB759sAjb8Ggt3jNHWaVUQvpg3Hw6",
  "key19": "5U8g73BV9wqLY1uCpDHe6SnuMEBQyXRJtjtHsafnLdHB5NWGTgAQRfccpir193t8zMBU1uSFkX1U1WB7mAYzFn25",
  "key20": "5Ri2njh6tBJmnFqkrRrFWgDr25X7toU8ap3XL1UAJRAECqyRnsgqdW4pzU7Pb4jeW1Y5G2TJT6kfLyug2be9FU52",
  "key21": "5XXphZGncMPa53TwaHwLPGyhN6RByvWJ7Hn4NUi5yLZik8R5GyUBeKDcghrkaBMLwSnkSU8SG5jroYV3RwRhFYMY",
  "key22": "4qKST2oV7eb6CryspYRJ7PfhoNeaYGxqJS8gxUNDZukoHtEh25gBxSaxxuom7ziKG4VtqWhpFNXf14cKxnmvfNsX",
  "key23": "2ebsULGknh8uC1NjkFBh7u7PidtEDk8yR3tQ2E6PcxKeinW7PPM8RvNni2ZBvL9PVPy8FcZLkn8jBXmp6g57vjHM",
  "key24": "2AD4nhQyzRjdPXG1gY7g15PRWeFEtAxrgJSboVKTKppLovSkPHHZrNCH6b3WtrNcw9wzTuSXnhREXZDo4vkGcF5b",
  "key25": "3Ez5u7X9BSoJRtUKYqc6JtD54wnDTFutadT7z9qXAz8GjhmqocknczqboNmt8Sx7cSbYtSu9N1SpJXVQSGfSDMJB",
  "key26": "bQdU3nXJJvariwRG31oAmi1pPAVPy7wRN8zB4dEzcMaVDnjQeuC1wPNqHM71UjPS4GAdSJhfzC1GzBdwMVkstnd",
  "key27": "4K4oHgFdcVShZf9GEB8NZBeauoFtWFQw62UA5jSkD9AzcywPfZ8GEdHNcg3NUpk7uJ3z3qzwn9pjY9z9uzsgQsZW",
  "key28": "5V3NDKMCmThBUwxPrsRP4s1jsn4Yneq2Bmh8KeJhbZC1ZP9wzxNkgDe1FxqBWMs3is2zNuCJKgAARirudBYBaThu",
  "key29": "5ZJFkXX1aNVhSVrdSCofD8ra5E2Xw7wmk4YhSLNE25y4dqRfXZspPPsBPotyzfkmXcQnYxT3RxuygVoTmxb9FhTc",
  "key30": "3PGyMA3zmJpvaBsrJmDhxiHGqPTv29XTRivT3ECpZsUBAGmYACxAY922tPBnRPcwgb87Qgcnhn8jbMC3wuyGCUyL",
  "key31": "5swT9Q3cAg9vXPhKuavDF3GtgbMAGgp7hjaxmMqryQfgZYjGjxrQqtjb9JsHb3MuqQxZgmFqkBnmHJuxS89Ktrzw",
  "key32": "3wwQLWQh8MB5hQfvu3UdoQvCpgnr6yGcBJPiJbh4uSRt39VsDGeNvGtedZphb3rQ4QqamsCKdPq4X5jMaTRRAJBt",
  "key33": "jqVt4PejK4YvWdSzDB9cyajnzwBkR9Qr2GTJsPSQdWQGAhjoiGv6EXWCmrqMch6xHSpkDtbqsdoeEGvwjswMMhK",
  "key34": "5Uva734Jing9Lwr4LgXAkGiZYBWvx9dJfHiAbHnSwnia6J5VoqN61jR14uKQcF2xcfJDbwn84Wf6uv29tZwoJ8Sx",
  "key35": "3RnCsjKwETQLDmZxBkEskPnt9abz6sAbXUWeYFJYLFJg58iUd2pMzSmL1BZhzthRvkdocnwXsHYApm374siWyQPc",
  "key36": "5BJ3tVuGKyxgNtnPBNmr2u8PBVVHhooMdkPT18T3nyWbJ85Vx9bvT8AkBCErsgEHc7tmkT7QWi6YuCYcHFKJps4",
  "key37": "2CmTg6F9EchEBnJyQxuENEPSjWsEjQ55LpCMt8Tb8iQcfKGauNEqVzESvYChSLgcy4eJXg6pUvdmKAB4fW7Xjoy8",
  "key38": "2cZ2LP936iEU4xhAuyd9zxBpfWBBAe211Aks4AMeESaorzBbyCcrbSUGLtAvMP4bJ2PaYdrLWF8K2wjoKFuueKNd",
  "key39": "21D3ZJuZZBNWuzsf9cB3wKEcxvKdPsN3qek599wpsdpLxstvXprGnE4WGDJNTMmve42tk9fWk2Emi3TKioNsSmQb",
  "key40": "u5hAeaRUq7aak6N1TUVBBZDgZAQ9bNe3sBwzkuZuYqscvYujFe4WPrnqrksZz9xy7CmFGaX3YXDoNpCt1VbRvmF",
  "key41": "5afyGwBCfKmwLRXJojJzkM2auDNya6JMoesQbJXGhdb1BchKg9pPrto2KkHdHgzXE1Cxf9s5ugue4521sCr1CC4s",
  "key42": "HucYNykMTdnpz7pG2KQhcxf23PxpFjQzjP7AhZV8rzCERUCD1trbWQEiYpowPPVcsgygM8kQRqFWMFtbiEb9Yrt",
  "key43": "4UuPwRx5YN4iQjtTTbbqkchk579cssCvKanKzNgJSzUwHFRJdhkbuUsdmmY1zuT8xqUCi8Wfxp6zxeb3VV1PUY9P",
  "key44": "dk2XmzPKwjwKC8bgDYJp2JTzBT6ZABnC7MsxnoVYLf9GfzFCw7Xy9Em8j6C21fi1stgc4XmM4Y8io227cvrX32K",
  "key45": "55ue4vUSFuBDa8RLVWi91ShvSMkjVqayXayv85RTDLaRN2HmcySf9oc7DszwT4gS5mf6jDL9SiFvErmoVPyCWaWA"
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
