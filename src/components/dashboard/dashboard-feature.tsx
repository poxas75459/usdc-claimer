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
    "4hRwfqZneSeUDcQ92raAiFpVosNYwMKt3MTysoiwcsxyGH1VUNJpPbfU4i8y9Y5c958UyrsU1mmD2trTtDo1uyQF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qhp1hrMd5zMow5k87kEaQY5qFkDnApB6GVEwTkMCJ5F3vw7XoPn4VkEbvrkLTcBPfzLfcFB7zNTbVaR1viiazXY",
  "key1": "26QkgK5f58Eswfn4jEYLFVLutaX6UzhPUbZFRFrmKzHZgwjXwdg7b2osd2fN1ZJbEgzJUTdhGXXvUe73mY4d4DX8",
  "key2": "4JNbbrS4dPCrCpcPrGZ3XaQVtUGeq1b2UWAy18FtcDXcPYiHYkErDoSHHavUoVXjEQRJpdw5yusY2yU5nrmQaqPJ",
  "key3": "4m4Mh3c6nj4J7F94WiSQMeX9BGoQC3aZWss9LQwyD96R6kvQTUkmdBRGLF1FFPHPdmqhRAYH71cC3WhYNbb1UqFi",
  "key4": "5EbGwVDYWqUwqteCjtELeLyxCGeAHQ15wutg1yQNX9riFUqEPFvm2cri8yUu6kECHPofD5ZQoopXsB1FWi5bRqkH",
  "key5": "66ysQDvtpYmiTSddMKqeWtP2XdSVbCCRnDwPEfYsmQoaFpvHagreQ8MzzJ3XHez547SrU9wcTfZar5n329Xnbhwk",
  "key6": "4bmUywpRNBKUARoSaYCYEkqTmaKbGFn5XdxxktX5g2vBY6AgaEWJPZbinrtwUXMh6xrKYyJNveFJzsme6HP9dgEB",
  "key7": "64XSWm4N4ycfxJ6aEh8zL7aBn85d6T3a4e6Zyr7fcRb9d163T2acammhA8xCTxapQpi2ctsGZVksgeT7SyHkYzPy",
  "key8": "TTbcaSYnM7W6C7QLD8s7VhSG97VygQjsj1DuB8kk34eCqt5k97XefkgNLJxeMqEEmbXCVEjkz3nJhrZaAzuZR1Z",
  "key9": "wzFPCNBEkcwWvxAnt4dmgmp4PQgbzEihdwYYhecwB3wJvghzBmzNoFcxghM7YqQKvNpudbnjpAuDaNxBfhY7viS",
  "key10": "4hSHhJJYgeLb4wE65m83zZfzJuuEc8Wmq9HBiNXip8BXwwAFcPFtJdU4udrbG89uN2x2dvHSMuk7HBNffVuZhwPw",
  "key11": "5Pt7ubWU2kg5tZiUyZV6ZG2owV5T5iRX94ficBuPtqjUbGVW22cPsxifXQds7sEWJvxe65dGw28pViyCr9JX8dWZ",
  "key12": "5oK6TLkycrPBvSifgueoDzvKE54ugLw1mNmQo7KwmjbfsPWY8xEeYCWXPbnH91kDpJNSYk1jJTgm4Ym6KUeaVxmb",
  "key13": "5qPqZx79hWVKmqnafnAR3YLKwBL4BW8nSmMNKxpM3Ut1AWFYJbBMtVMHnLxmeNXMMGmZ7rnV8hg1VnJ5BiXeKM3d",
  "key14": "2AG21RrzMUEKD9WxSit9qTvzeyRpHhNCrNYU2ZqrFBT95BHmNBrjfa7i1RmWdxEH5QczTiG7bS2E1R9hjQ8BacFJ",
  "key15": "49tTXZjKtoDMap2y4qxDhCwmWhRNBcm8x1J37iezLRMsoae5gezk2Vp33AwfTrd7gbcx2ExsRdgCUsEGaRu4daMi",
  "key16": "22cd25qTxncirJByy6dHoXkhxH5sXGeCMbbfW6shDJjiRpUWhpe73Uqhqk51n7eWwKHZn1HUsJTQkXSxPY2kf7Yn",
  "key17": "4eg9vrGwDcJbo6kDN9ExqCeBzV6417ezn4cPpWtE2qJJ9wMVxBeWXoJTiKaXGiaxGdgu4NVyeWFeLSMnzmBiUuyD",
  "key18": "42sP9KPKSPDKKEdrpQ62iNt4jQAKhqZQe9Udy1QYM3eDfADLCcNkthBKsvJFC17gAsExjEJCXe48jw6KCUcGzTmM",
  "key19": "2QgdwmVfpifBKxuK4R8KdEwZcRwptttbd7pCa5QJUYmjd5vQEFcZLftwSd9x1pomZCsFLWaGkHgDwcMm8bn8Vjix",
  "key20": "4oaEbbhrroaVhog7RHrUm1cezg8Fw4YJzN1scDV9hBSxBTxbt1X1SoswDwAVixHbnhGovXj6nmmYnFy98cApE2oC",
  "key21": "5LtKjHwqCHdFxnT7Ka6fxvJ4pNmFngi8z5VUkMjWdLwv9XrrRbs4Bq2aEJGuuecTjt4hCSZNiMBqnEtSuaU13WBu",
  "key22": "2YRiFRnUoZDWEQwmzt4xZj5dd3ng7FBMUbyLuNFnUuvSVFob5LC5wGh3DkJCAmcoyu4YtUCr4AkB4V6xc3WcKrWS",
  "key23": "5ZUsSXCZUmyv5fbvPg9jkUCPz9RRzNdn2HTBHSL3vW3411DxxC8e59oW8kZc1FxdMsY6u4DMc2FNBDAYJFWzYRK5",
  "key24": "5JVgvN77iCwepnUUcB9nHAtwFbYytCBhfKqhEhq6oSeSYW7XBVhn2iZdEKEDRigivWceSZDb2xjGxNryn1SHHZ4b",
  "key25": "4uELNCmBLRhEfduJCAGgy2LTjWW5Lk2tRkx3NCYm2i7Fmu6Gmaqn1VN7jeSWM7SFRwAie2AfbNLfAisXksHLNMU2",
  "key26": "2PBqFUWMJjniJE3dkniWYbKekXi6H4yuoSjTxNPc34odxNWCDfBxz5JxJTfasBLgJa55fqbh5DESJJyGtucnpesk",
  "key27": "28HpkNxdQPsie4AQBqT7xoKBXHA9bKUHXpAGNRF3kPHCCpRCRCxHTcfsXmDu6ZqpSEHaAL4cM5WUPAohmNdnSyMD",
  "key28": "2xLLvjjJQrjUi3qiTTBGxTDZZwasg2Ykr4AZmSzUXwaBuD53wViE1SYNM3WDQDT1adCM6FidFMQTxcxENTAkvZu1",
  "key29": "3u9Rvvn7jTGc7L1KnUGkxDCLhHqNCRhcgbm6sTrKWmNeF7Yoq8nuChETpr5nQuUhRSpeoQJXNyd998XLwHwcUxSx",
  "key30": "53BagB2JFPEYBdbfQxA45W9cWoGTVYr92LFnsGBT3wsc9SBHK2vNCDT4yiSQY15UdgDXyNq5oAgQ5jKyjdW1EqUE",
  "key31": "3p3a2GCFPphV8hTGYm3gmxNnPjtg566mc3rRx2pj5ZhTcqyqiVPuUMdcTFGWU2SjNBdHz9Z3eUDH2NRSJDV2rF11",
  "key32": "4mqpZQL7tp3d1WzE6gDzfsQBgdPL6dqUMabtHNaGEMMHb8rAnhK48D97XoxrHPrXfpx2A7SUADC7xxKscRiotWgc",
  "key33": "324mbrQA6EtaHqiL4jYa7VuuRbjj8BP2ez7xocK17kQj2k48dFgo6RKL936o9xgAFjaiAqa3RSr1prDr3VvgRHhb",
  "key34": "4qmYGEwGmf1YmPbkF7sK3KYAovLYh1gnEbSwMc3hU42cs1vacCCEnzCN15CqEtXRCpCZTP5koGUsxE6yKb6adGLS",
  "key35": "2RGokyEc3PcotHUWknXMQXF5iep8q3bDtxy58kxVHXHbdJt3oZmsmGUcFVgF43PVXDw8vaiXenQMAQPZfecNa23U",
  "key36": "5pGUc7vi27np9gkVVqmtqxaHUahqTv8GdCdkoktNeRK7T8WHjkN73qG8QWRsrQd1fq8Te9iYrBMWGxdAPkYw132W",
  "key37": "Ys9sN9JFMUjQ9zFw4R65abpzG8REnJLcLdEX5VdYJN2x3pr7eDz5EsjUEcCshgV8MPmZLaJtSMcpHJq5jDZsRJv",
  "key38": "4BFNsRdLjd21N7m8974s8f8KZzEGCutGsPC8cBRfYcjTfK9VNvut9WbF74irJDdhCj7nePnT1UanJTLqNdJjtpGM",
  "key39": "JFwFWfn75hRvwB9XTGqw2UrKgug6rL9SbQ9w7DxHY5fPu1qB1ur5L19S9MAbARGXBWszLotujEFwRHuapm3B4jg",
  "key40": "3dm2gZyCY4KQyh93rmFFLFh7FdFeCvbSK9x87oGkH8kVybupZwXsK9KSCEMb9GFfHgJuiUGDc3BJTZSBTga93PKV",
  "key41": "2p71tbzj3auPejRURK7TL4Fove1ceWSHo3wTWaM8Wy3Efr5PvckRvBiTg9S7TToN1i3X6E1cKkV7862U9rYzwVry",
  "key42": "dGfo1gqMgLfnXTzxpKY9MW88hpQu4HQcHrYHisH6Y9MUkcMc8iY3SRJUuwwrwVNmMmQhZsuicMmfS7bZwVPsbeb",
  "key43": "2MRjdvPx4KLH14CpTZcyMY4Co8cqXw87ZrGQxQ7rSzJrT23bJzDTWKhm2dvUUArsuKr5ZrnCqzMaNCMt2CfCPYvn",
  "key44": "4uw4u7V5SSafgZ9R5QNKiFoJ1euFsDG4eGJLJFhnmBvZKGQKbvzjCxckMFwUXoPLUqXMYAYf4PtPtxeEJ62PSCCL",
  "key45": "38UmePb3BNP5HHaRpWRhvhKojW1GUs4tjgTQdLmdpNn8n8oTGVE52r1ntvce9nwpAJ9mVRYAqtqxPJGooC4LGyWb",
  "key46": "bv5qprdCSiCgTmELQz4cnb5yh8vAPF33ZZEhbvFCUq8kCXL8yxjb6eoNRideGCy8LritZ71vxYcyWWNRzkfLS5e"
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
