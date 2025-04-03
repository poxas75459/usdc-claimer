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
    "37YScN4Hz882eLAW3tKzPyzGnnSLnKtPHAk7KFwirB3pUg5cF3ifBKdzu4u36uKQUHzqMys52Uswyq1GpVZsSFq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NLSWHyhvTedZrLzTNNfmn5ehTPdV5mPUzBtjEt8HwKki1V8WuoxcPyDqjfoTCzddoHAUuAhVYtEvZa8gSAjrKqo",
  "key1": "4DLhMcsGM3V1rMo6ZqC3fTtTyMWeQH78t2C7sQR4ZX6oTLGcEvhGWS9BmkYvb6Wa7iRb2AjXk6xSUcXVnR5CEXBg",
  "key2": "2TiqBuFNYVkfQN5QfBEFrV3XFXUMcYUR6VfK8JsxyS2Ec4P11eZLeG269xiGhRNBoeWFVYfvv9phZB973vSPfwSq",
  "key3": "52rFAjuR2gte1wQJrgQFXcCjNWwsza33RzZHuqhmDXVGzy1ruMiVGP6hjNDD6XusUsaPJUMBVfhpMJJ2iTigHgpn",
  "key4": "jkcs19SAVYLHmTMHHqUafFbN6nkNzyxrHWPZo5bTuFmUbV88big8QDbResrWMcVBGn1fAY3X9g5FigTpBsnbcLX",
  "key5": "2R2fE4Ht1bbZvRFY81mx8bqhd6BY4eGd1TJCuBLngagx4jr27SWWukcz9JiUQZZD5QDWo6ZpMfm6H52Ru2R3tNoY",
  "key6": "5TPm1KBeN3YrAT4BZq6aojC4wKindrkGp1SVCiQcWFjhVC9zRzWWHoEpuG62sKj3seEz8936KRq4GjNY5ZweMj7K",
  "key7": "5TrdStT8WUFhXhJdCyPzLDWjHiEwtGU5aStQm2GxqFbiKM81dCa76QseXbTCJLpydziAFbj7G5xn2mtW91i38D3Y",
  "key8": "3E8BEyMJhZvZQqKfag7p4FpaJxRUNxRjWg4nAucvTJdUxueKnv1fgPEx7cvKVe29pC8kBacc3aRm9wVbcvqy3uRw",
  "key9": "41kPkft4pTomt7c9Ej1iKgEKvK1SxeeMc4yRxRKFKdHFt9YdsPN1BoAyjrCUoor2Tor6PK6S9WCJMqt4JA97B28",
  "key10": "3ns5rpqNh3aKpg5xUxg7553YZBYqmuqbTHrQPp34NYgZeoo5mus3MTGUjXLN6Z3oeM4QRJPNZ6wbtisjvQyaiTSA",
  "key11": "5rg4vMHa6onkZ3yhkGtHNyJjMZkcFTtbFhjRzyjwGRMXCGwqpmw9UM7wxkHYnbjEdeVXEVcYw4skyTjMgiorUa7s",
  "key12": "eqgbLJZkvDxju9tribCws2sB4tvj9hjxu42ZKvDnRfbjnYEz41TfyG1SwMuhQ4i6STgK5n8sfK2qWbVd7wAPL8Y",
  "key13": "3zajfFX6tdHSeFRTMpkP9arkayn5CCznpdDJngK8bT7gqxTpANapq8K8BTGgt75tRNBGrrAy1Q47SGcLTzBWBPtU",
  "key14": "25RvDvHHMYH1UGJJnMoU4JRRJHCVU3bqmXTgHC41SC6AF4ERUQxKU1MmChX3x63yJkec6Y4oR4xGo7bo3Y5djSbK",
  "key15": "5NLUr7fhhfAcbaPxXF3bNhEi94ZbZoAXhzicFsmbELwzBSDDR1x39fD8yPaip8FdZNzjmYFYKrjanQKuyLsgRhZG",
  "key16": "2VapBFRkxMfimCbdJjx9XSa8Q1Dia657VeVSWJiioTYDYthBffmCErPLhfNqf732TEbBCXWYpN3e97y1gTHAqFgo",
  "key17": "tSqfgrzBnpyABVFKY9K8g7GT6U1VEHbxvZFpkzCvD4hXH1ZY3QuHhA9iBKaai2mAxw3PDW7q4XCkZtFPJB3bKzS",
  "key18": "3SgTxWcqRK2c9DMw1PYxay9zgue1UUbj22upg5xgNGEbg4YxF6a7vsgTiGx75bJ1c3evEq5x237BEq1qc35QGZh3",
  "key19": "4m2ghcqU2ZBCbQcHe25B1QQ7D3kofCjgHaAK4nr46R82WorTA4cVwBx1VHYWtqU3vcon1VSDyaXFiGBfgfyCSBxn",
  "key20": "45bw197a5UU1jD889czVYzdzJorWE8D73nXgP3fmEQEE3Wir6eTkXNyRvoEJqBnjrtnfvxBib4VmhXdgWhR9WXPR",
  "key21": "4AGLEk7pbWtNeKShWU1kHTfRdqzXxvNeH5bTEzwRYCm6PuGeQfRPRkXVpvT7GVEPCSxDh44GJLuvD5FFk1sfUPKD",
  "key22": "4v76ioZCQ1gB2ZUyfKSTuSFyH72PCA1HmZ4FxCnLaRUbeEEvj9CxfG6Tz3VNicdHnPoAdUc3947n1PGha4wUEJxx",
  "key23": "8J4T7D5hUgoSckmJ6JtuRzKK5PqUECTDoPJyRnineewZBrYNC5my3x6BJz32gBYbApLgqDLWcneG5qcjdzuQrC3",
  "key24": "5U7nW3AzBSSyeMGSUsuBH6MVWUS9cMU9L4xZTTBLyb6UQ6HJdLjpuBBGbckxJBWxrg5i8TkRjYZVUdWLEMZk2Z6H",
  "key25": "wXBLwqUPs42DwyJx6b2uCrEhAoXJrtpgmd9vsEeEcbm8dJkqRynBVvkT7nDVezTGoj3gRUDUwzMXf1yD1u6sLX8",
  "key26": "2a844QgK7LXSwufHf5yTaMqUGW7hbfMEpUKUZicmNkZeQWYwoNZABmGSusub3RcYHAbhu8NWitjh4T3xddWogKhG",
  "key27": "3zEDFJCt54grRyV8VWUp6FFCqGWxzyzBN6HpkuLCG35N25UeMhPNz9W5kgyaF1QwcW9Nm8FasVRHZEE5FykpybrZ",
  "key28": "4xFbTgGUjxS2Gbfm8RS2qQSa7HM7baRZb9zza4Rb3h9LLVZwSDu4BSimGT2XeBo4qsdtzZQD3aDu8mCL1M3FiNtV",
  "key29": "635YUHVxRLvBGqJeGA1eKAcMHuPGqxA166NcPeRr3fkvdsnQfy3W6gizmGwBo2wQwBEfWCRR9v2yCzvorEEef3JL",
  "key30": "2hUWBaN159omjTJvbANJzbXX7vJpMqVo5D3bq86t3wyvkgUnU8ykiJWLUsxANqHW6yTthBudGYAXZ1SQydFdj3mp",
  "key31": "4yHQiKJrJNN3Py3dV3JmS8HZyZ2gLteKhA8PDHm7AzrLqAQ9SWxLKdZZJT7PvGLPeHeesMS1igetzmoX63Jo1GWx",
  "key32": "2Vqan7uMFEpEqaCVKZqkZQK1B4cJtb2dLEWJWYGkqVVHZkUoUgykaQevgo3nHx6cV5PTddVKMcU3wcLa9gz1BxJL",
  "key33": "1SAy22tBFKDfz8TbHJRgqULWHpNd77rSL2QbTunyn4mhByDaTHSo7UeAQKTr1yR3HurAF52tbmzFuE3jXFBAPG9",
  "key34": "3vm8wd5x7LUBH7YyA2AjwoNour7kotLd2YusjpUGTQRXsVhCn7jKgbsxTCmV6fPRApjdvamgfcrkRRyB5Qy2NtBQ",
  "key35": "4njpuHY4y24s6eh1wAdnstBDTSKhKSCntodc72DLV1sQQ9Gc9XPKtCq7rkSokPAX33UxDLVvk3Ho2F8PRCSnS7rT",
  "key36": "4wv5tM36R4oNRW3jjiJEVh4MeviSkDseJut6fJdrarBZQ5dMfCLZXEvqhcW4EJecaaXENQ1XkJ1tD6m36AHpx71F",
  "key37": "zpGgVowWsVmKptEndXwVPwyYrfpqpG9moYr3w34Qnh7iwVEPwQyxYb6geNLSFzaMVEzkchb3UPpTEWBQMHWQx2H",
  "key38": "4cYwM3EtB4WMBz99R5NHcGhDB6GJopXhKBFy5fCbBSoZVpCML1x8LgR2nPavZo7D5UdNqtxiMMF1mMFwF7EZJsqd",
  "key39": "i3NxupHQ5mW2WXJfnN3isrKnP4iBHNYoUQgbnTEeiJbssqwffUdGMVrHCbux3nzfeaRbmU6gDeETfqfdwsBbMag",
  "key40": "3Pwbo9SvevRNMhLcd1Y6zNFzi3su1UsiXj7FyA3bDzSpRonyn8jq8GbCNVGun84op1CcFhSdy8D1xiUkUsm6PaPH",
  "key41": "3wUWffsJFNF2BJ8BhH1uBG9rFPAQAALPGfdyXhBqT92NSANAfX99XGxYAsvQH8jCugnz5vMPKBLuP1eTKKGXWSLR",
  "key42": "XeyQXuaHHumhLSx6smVPrLySN2KwwBD37jvK3jiLDCefXK3QMPzYhc9zxwBh1Utsr1qA8NdCfdZBxPMq4PNXsNi",
  "key43": "3Jnb4NJTYQ8rrgNg9HcUVWCxjuv1P7jkrb6x6N6o7rowTKUaB4qFFcovfJn5bsNo65tWFvtN1oVp18pBeFH3Fjgi",
  "key44": "4J7rioSHk5H23PMkpNasV6KWPohJSbLFx5bX15i5Ry25pj1kYQR7VnLtbLJ5rroLXbYU6VPnNM4N8dmHrNdtpCmC",
  "key45": "yeNXVQnMV3PEyPqi2v6LZvuwAp4A5Lzk9uAYsDgdoGkoy8AczNqk8bytJZvBXJZtXbPbGo7pm7m23GkwYBa4rWR",
  "key46": "KTRPuVHscouT91vy9E893Cw4bvXxX4jTVJJa7FWgssbizcaFnomB3LGL45P9m9fbErnWJTx34wQmfiX5sYvEGYS"
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
