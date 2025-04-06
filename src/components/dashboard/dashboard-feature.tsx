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
    "3hZqVZLjw9SU7HE61vRyYQ6g4nGSY5D5Qu66cxJAebnzsskaocQpdvusKR3KRMisYFkJMi39yrJHUjbUb9n9LiWT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DToWoPswj4MoissWqEx7CpUtwjhi1rFwm4yPpzs6dRmHCaEuRUQ6WFmGyjHpQfwYP3hLndgsgwLbHUbSFZm8JYE",
  "key1": "2ATuzwE6LprQ1HRndWUm5PR2iGdQtk1KvebAdQZujm49KtfeaLJ4DiQnfMatKG2y3wCmCkKutRtivgwbjgU8oXsw",
  "key2": "3Kkd7iT6nvyWtttHqHKQ3XWpQ9wiCSc92FjeFzinW9Wsaaf8n45DAHhHVgSpFweftWHU6zy3m1CtvrufapYRFxtT",
  "key3": "3YZNarYqm7SGSAnr7My4gijTgJunTK1XFoVgFC7kXd36Yb8pRZh5b6jFGdZcnec4XerCzfKdT8aw8NQAYF1ja9FA",
  "key4": "picejQp1DiQn8vFAHpDhCuo8SYxm2yMiwGAvRMZNDwfU44ZMBfpaSb6ikKNDbECHWjEgViPKdpSF97Cht9dNR5p",
  "key5": "57WkcRik1ACiSWPrYsWGqiiSwDk7N91ddQM8VhULTzqUbv4aw19mBgNS94bTRUJmFcYQW71iExHAcq9No1zG4Cdx",
  "key6": "4A5pvUEgVa51EMVsCqPKGGWHtZeuF8g5xiHx6zhRV2rT9UDgK4AcuRd7Rxq7QKRFZ3jhPjbgzvcpbm1HYK5k9k7Z",
  "key7": "VWdN9JgJphc8P5jpwvKJ1sqgxnWtkz4tf6sD2jHNtGUM6RU2ESz71TpJbLvjQGcTVJyWzpKL2A3cTEaVe4hBEUC",
  "key8": "5AK8kgembnDY6jEuquKNpovNfDy7ZB9ajVVoq99kDpZfNyoWAPobpT6jawK84KkpvkLXWx9eUutCzVuqqDepAPRZ",
  "key9": "5g7rTe1MBaKE512YU4G3rqvW1uCPve4JZkkAV3TsjdRozq1WcjJLNp7NFbQEwNpfi31wRRT4DVxUyAnSfQPfjPym",
  "key10": "4aqkLKbm1KBpA15gtrsH2AEsRScXAAoZN28Lr8hECG6Hi2kyhgX34wDifAR8Jr6stzfCBrGBJzKdznXMAENW7ptK",
  "key11": "qfmR3e8B2E2YTu5JpjHfyhoTaU6HMcdvjvsAjNXLDm8SD7TWKCziq9SzaabNBbwGBTScotmFFqvtNzJaXCtY7Jt",
  "key12": "55YEa43RyQkpi2VbBTtPg98VspiHyUa6FqX1nLytTHkSwUp3GqLMpTaJCz5Nwrw1XLQ9Bn475geLkfT7cD8J3b79",
  "key13": "2URxSiPNXcTbPwWLBx47xsa2x4RrQchwZMvEQtVAp7dLrr9vLwbELCrPcDWG6CBDmhex2Uq5SE7kVe36AJ57eR1Q",
  "key14": "2LJrqEJh1TtYkNzvUgew3yN5YwS3zoeCn7iqkdeWbdwhPE4K261n4q83FS2zXsGCPFMs4fhyYkXjF5fPR2PnysqB",
  "key15": "etDE8XceuDC1gZqUL2SNwqJFoA8okGzaaquVrQpcYrV6upSQZ7GwmReaN46iaGmRmoLD2utVekY7po1g3Fg6deA",
  "key16": "3o8ikqQBPZ7qN9PgzDHSSxtH8S7ygg4TGXpMSrDMmaTUoypRxa8ausFx1v1KsJSCzLT82zfx7SGBYXYJrzY12j7z",
  "key17": "3dhfXFuGi1D1wA3A536XQFrJiZq8hRDy4DVYrLrs3nWoNodNzPZV5VGSKUAFNDcnphFG8roNqn18GqFfoWhy9Dio",
  "key18": "2b2LDdx3ByceS87mrmKiFadChvvhvDYnxCdEVD9t9n1ayfPL5hwMFdbEU3hYsxM2wFL56rg7DeQSsbmSMGG9foUF",
  "key19": "3b8fDpu4dfSow2fQsd8DdUdrjmorjfJMra7ScEsKn6cq2UnewSXJY4H3qaSD9XmcKiabgHgpo6THxKiVM3bEaJnP",
  "key20": "3f3D14BpaFFrzZ2gDFFSD3rJNrroQAcegx6WWqrsDHEPuXUWMZ9dcbT6nnktM5ya8i2w76Sdrp9RZv5gwvGM6CUa",
  "key21": "3cr5sX8Rg8cWje4LgrqARxttftasnvTs3nmpDwjABUYk2Di33PEEnYtdq4TdedmvpUY7bRy9r2bdoJS7Siu4pG6",
  "key22": "4asWyn5eP9Dr37CYuZjLpJNB7LoGv1PqdEQyurYMHFgBVQusxWgsbGEYaLpScpgXLisuzN2TExkxFmp7kvXq8nnU",
  "key23": "5Feody7XJjzSZd3cUhSVhjxqUkNvn4xsVFZTCRg6S186VqWxvbkQjnZDmF5iDaYaA7RMjZKPHm6hzgBeP5FZrE7G",
  "key24": "2ZZWCXULVz1jWG7EpoMFxbnhyiCQiRswuEBiHq9V39hsa2yWZa8s1khJJsLLvjWFmoSRbwUo68pfEcJ3rmoinMDt",
  "key25": "msBQ2UPy1V4qYqqPWQtDMKvh8kESbvCkTkDJoqcGvWRQ7xu2Gp2PZrR9UnDzvVjqwpyqh8cApei86TMAmqqkm8a",
  "key26": "4ucp2akm6KYAiyvgUQ34nu8oEiy5HMdFTU7EhMcHxAmJ28EYCNf7Fiv7nP6HpU5TXtGSH4oWcYTt4pnHN79UtrrU",
  "key27": "Hm2nPBMjytwbT9fqEm4CoVnDbMutHQh7weHXbqKWQPx6bcVe5uPpif8eL6kizUKZxAjUSTCqKLctP4ox6vrmqoG",
  "key28": "5Lb2hZwWusLLhXUh46w4YJWoU66TucB5eTUXBXZ5FrkHQ7EZFmWHn2b8rVpAruhd3AfgohRknjKqiy1DDs8PVjos",
  "key29": "2EJ7rVqkj7BYw3ZWwVAJemrk2ua1NyjHT7RUw17UDTvi7cXtH353CuyLFwPnjPB5AXvy7KiFyvYSD9XExhcpxBGy",
  "key30": "5JHR6PtUdmbQPdJT7y8Trzg495wPmWuCErYCZwrXCNzKiUYt1sJ5frayU5Vk1QTEtWP1CLT9qnCT2qP7TbsBDvsd",
  "key31": "59Sov1M4qswsBPwEoKxeYrRXa3KNy8gA2sLLG31eVipkvnnCDot9y1dp3xpaV4qRwiu3KpixBfYPkPzp4wc33ASG",
  "key32": "59efu1KQBV7eksNf8K8cVwELEkafdN1U5EpgBiSnGsSC2m57csLiJKZhfpcXYgQXXQ53MdSMMNVmKyy8KwaHdERS",
  "key33": "5QvEngdkkBRKv98G2NNuCVdWRq5xFmRuAC5bVLfJ2addiy3QfELYmhdsT6o8LL4zQ6eaP832DuTKKYF2W4UiTepk",
  "key34": "43aQB8oA9fHW2wV3TEKBMaW8RkQzguh2Q4RRfKj89kR7mFxXd1wptnbBeWbYRECgNFtHe28MXoTJjzkVg6LMf3M3",
  "key35": "2mF8UG5t6S1wYPoYCXLh5y32dhQnFDastQzrXsf2vAPLp7YGsD8XgVHq36MTCJnHjYh6wDxH7hKMwsQ2RGm6TL83",
  "key36": "5ASPfjAKXi4m8yZC9TE1YX988np6oxftxscowVk7Qbuf6UcAZ13C8pALxw21AUCykrLSoNKoua9Kw7WDMNFt7RJi",
  "key37": "4eUQKfkNbBaiMf5gWpFbh58NPT9tfFLBbELyfuENFhr3xGHaFp7TPcfD2iD1Lr5gVQeNWF1e27ThVwUr5Be9ZoPG",
  "key38": "4afts7gcLvrw9CRMuBCXBowaDzEr2ynsDKDf8psD4HFg5ZtZWvpuL5i7x6ApHhFDJ8LE6GJstGkMGVzRi5N6tWee",
  "key39": "3aESoNc8qjFZpG1h3my1PxcC9XWWTGCbZLMxN3J3zcY859J76tvJ9B1PU3ScwnSGE9VkAbogh5jaedr7GpQBTTQJ",
  "key40": "jG9jZwDNeqiXZ8iRGDhq5rekDfb1dHStSPCKMuXbZpmehumfVvgpZ2CkxL3oSR5BtQMnD1RFjfJyxeSTJ3kAaRi",
  "key41": "5iP9jdTJyFbRcdHMW99iGtAc29ZNhNjGN54a3EoBn21WgmCBzrtX25FsqTe2BikFRF3v2SUMB4zyw6UpoV1jmQuU",
  "key42": "2n5skDNqaPhwwQaqdwiQvQhv1YBpgewHJT3Ns1pyL3NpcN5HEiNv9eB6X9XrJ2j1591B8M7wg1hqASnQaz6wmLV2",
  "key43": "4G1NGNGPZyFMbSUKxPc9zHUppWtgh7TTiKet6YRnc7qu7zPSzgTWN3aHqY6dQiMgxoocvkQYqFAr7JYEDJu6RKuV",
  "key44": "665ZQXzLKFvbDVgzBCbSbW1fseFgwiMxUcNG5qS66EESbWzxNU9iFKQmz9usuPCKfCTdtT6dq1quuYW1QVQB7dSY",
  "key45": "29ZYw1BvQXrGPoXKxrp4fT1Bx2epyCxHEjWDHTZuG75pkGmJhzgVJifuXbjLFgx1uxFsFnBVE3qAVwN5hKEDWzf5",
  "key46": "5JiiRkxoD2kJvWFP5Uza2Rpo7YXQoij7MpNgfJ3nuPhtrkNTTNmSmMEVZx4Vim4kCXkAwp1yhtQ4iwLUbZWi4nrc",
  "key47": "2ui9gsbFotxgxsGgRm34X2KYJLwmJjpn5S2hzsx8o9WxNKEJfdWHHzYrfxb1aL1L2XGtDa1XTiZw1EUNF99AcYxE",
  "key48": "95NupZ1JjGPpsLM6m7DULN2ytNK1mHrAXDpRAiwxFgTKXR1e9xVc4nXmLFQDd6qsKMC4ihBgLUdZPgGHPXYian6"
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
