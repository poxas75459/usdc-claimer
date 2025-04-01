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
    "3dmn6yhiozxdxbG5TPu6whKWoSgRqfcsF4oJWXNdSZYW7b745C4pQrrHRK6ML2FKxpYvGDY5nrhNhAtcWeHW7ztv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YuTpvVQG9LhzAfKsvQNvunWKr1VeuffnrMd5sHYkabNTQUvgby9HDz9LyNnJAxLeRuEzkP7T8Wn5R3KsDGhcLCk",
  "key1": "2FFgjT4EyULJkHfcmwjNr9V3w33iDeLrskCY57X4HBTGyV4FCPP8yDVj13qtwj1tpcXhryidRR3HaKk2TJAEjJYS",
  "key2": "5kxJVCNfQGw2pFCNksnwxrBM9SAdY6fL7oRMtc73tGPGP4Zidr6eetAkbR1q5riWEpAtLpjw83Rhgz2qikAFqvTU",
  "key3": "5aptff7k3jxVjS8J6qwbTPX1ZjQutpznZpj1AuQwZYfeBVC5MrwoUKhbkXmxo5unKNh7Ugo5b3AcGWPF7LJqh9Go",
  "key4": "288qWJKRp1qVDpS3aH8DDx2FV6EbBiHQnbYdLx9M2fzFvu8DHSjCzFnEGWWhT9XkdaaPb3LatoqPhbSoTvYhPYMR",
  "key5": "4Ee7nDZqewgmHFYZeUqpe52S2FLRT8xSetNQZ7NgLh9eBy1kaNX4YZJBAoeH5T7DxmodgCiaWCeSou31XaMz8T45",
  "key6": "asjfy1skM5hsNrK4mLhmoxHbXKzSHzbf4ZnobMeknL7YUvaoGPv5scoBXf8TNsmFRyv4sdzWxpp3HKEQSnU3BLQ",
  "key7": "2zmkNaSY63oA4QWftcLmHXyUzc2gBktAgbs4649kkmsNqex3AqGxFX6epBQkRnkcEDZL3zobFZhBLbcJJumeDd8r",
  "key8": "4UNFev4ZC16GaFzGZVARFesBKwRvLeGBDFCRCMz1Y4oSNyDMBoVEeiMkTiqSYQMQaxJ9LdrMokT1sEicWNfLetA2",
  "key9": "32Aj4RpVuQ3H2Fm5hf5tRWguMo6Fpr4LqqubK4XQXwxcR8SEq2Laghe8PPJ3AAzob9udjGgfRH2NGsnrNTcdhNHi",
  "key10": "5dTCgb355NxA71QmFEvRCEDpoJHDdjzJN7U2Hx68xkDBNyXqSP9KV4DCrPRXLZCztBXigj6yEhADYSyt8CD7hheR",
  "key11": "2akTmuHFTUfgn4ZdbjdSHYFryKymeQDbDrLsMQQ5h9ud6ZibBMZR2ME5eXiwP7PGDB3TZSGtqHYtmB1sS9CSYaJH",
  "key12": "7EAeVfKYUY5Q8ACKhEzBwVGx6tfBpRaaReuRDZJhuL7MjftdMk22FrH8yq8CJTe8KWMXZjP2CjQLPShR1687EDh",
  "key13": "5gyDRsrLFCaNFqEcNDxjQ7hZsAWMcXQ18Vafd1xNPtBg7uCJ5Zb13EU4DAQqksoNBLiPRRvpf8dJNRq4BjmoqVmp",
  "key14": "3h5SRDwkXNFzMDhk7uEKjWoiVaytAUWkLRFDBgP9rX7g4K53Fx3hJAqyPM4zb86QyToLJh78KdnmTaF1xsB661y1",
  "key15": "3joJsZhyfSQqj1bs7BxEN7sMe692U7tLMHsx6N2ekdN9eGXUhhjbA5kcLZA6Tu9wFi2iuH4od1hDXxMvP2w1CCEu",
  "key16": "58fqyr6we5zn69KL6skoQVyHX1RtdeuBasAX3bqkzQ3ZKBJcgeVe5hQWfgkG43drae2HbPL3Dj5QY3g8GVGgjQQb",
  "key17": "4XLGRqd5GM5cSv5Rq6gbLJ5DPLxQ8eDqZyxdmZQaWMVqHpatJTgEUT7KbctF4uViLGDW9aTH5pXV89bD6LMdhm5h",
  "key18": "4M8PfyfswV84ynfk87nG7BN1hH8a6P3q9x4DBcA8xxPvSKH3jpoCzKZdM6rfrT7NwvjR4sCgLN631zGfvvnFRwit",
  "key19": "2NCGhnt9cbYjgWHpQJ1ENeKNvvnr7zk7TdqVoDAHDagysEtqenY6gmfNT3zWMesh5b7cgmVCCWD1rEBMLKnWd5Vp",
  "key20": "398SuEbFmn6A5pm6UxR3t4U4Et36uzTov8q2Wd9Jhyq7sVcMkb2zo6nc8C9XvKuiZXxxoDEW38Sgxp9kkBdrVfvh",
  "key21": "3iYhJhYztA2om1wjBRMTi3ifJ655p4HLKqq8eFgvcxzZeTZaJkA52j1iCNVHQhtwJ3aPB25QHHdbECSWVTJgV925",
  "key22": "5dUW3wF6gGXqdp1vWgo52FYik6C6N12hEz8pveWDHc9Z34tGvb1LWWJ8r56qd8aGQKqDNvtUfyHqB5bzFskz7b1u",
  "key23": "2jBHZKrSDacH58Tjv6q3pRVEDLrpXKQM9RQfu53BGGLjN89prC4ziGe5h4euo2oDnPcGYPdKX8r8NqUvYoHUT4CD",
  "key24": "66WogrVrCH2hyqrwMh56rzmyYnXFJSdPSR84gNJ5sNRV6x3YkLPgb9iqA8RZRrAJaaMAPy2RexDbCBwpqsvwTrcv",
  "key25": "4unLGwXBMYvZKTQ2J5RPL3Mg5BpQgmrcSFGnBj5DSzYFS7rsyVjpRofDGgWVya84Dfi6ST7dyW5ZnmFNYGKMELR4",
  "key26": "4HwihH5d7SpZ4DX9vMK1ETTArqdyHxCpN8ewmCL62h5Z4XKnzX6Wa1tmPYRrn17m1AisvZ4pgpgg6RKY8bPwWQNi",
  "key27": "43wERVnWNweSdmtzpjxTFFnbCEGYiMNkqQBcNRUQda6KDuUhhSvspryL8GZWQAF1YVh4BiZyXPvBcDqDbQz7M9t8",
  "key28": "BGFxQKgxCPk3YvMTp1AXJ8Ysk5Lj3y8AxzUYn9fn6t6SvT9oAHJP76zyCSzCi3MMxDCs4HaHhnssUS5K3Aoa5Pv",
  "key29": "52HPtWbWK8u9fX9Gtn5A3LbhHSLK5HzwhmBfEUNXfZV8KryYfCokTN56TyaioWnWDX9uMzbmHpJJ3zVFvmx7oebM",
  "key30": "3PafqHYAVqanhWbQxXQHrwDEcCffZQUpJ4sqMMb5YyTqJzx3zGMxmQhm4sQGpLBRRxB2Fx7ZqX1nkqQ31k89uTYV",
  "key31": "2qXRWaCJ2fyJpLU1ULZ8NEGmLBESUCz6izsqsDt1j5zPCBmowjAmtaG5iyKi54aceJmVDig1nK4R8cJ3JzR1AJ5W",
  "key32": "WbKFGMdsYpKmYtBJr1yEMPka887PCHh6ZYN2qnEJ5rFv5a1bbsYU9bKVNxuQEvJByeCSquzx2AEGirCxTDF3yCD",
  "key33": "5LyjsDu6gGiCBmEwTXWcb52vvfr7WBfffnyVfBtM11gRsZ9S6npVPcSF9LSxXYTBJ71nCcJwviC4PfhrAJwcLMyi",
  "key34": "DPnRMjBajFNsRFDbdiJTvFMVsfdyHuPVtwJuXZZ4HLexwKPnZWLJPJPmkjdefNSjUVn32EQ7iKEpTPm99u6hfzf",
  "key35": "3EJmzb1pNbkjwtvpezp92wwJHRHLfYgRvko4UAcYsm4rr3kKbMCjiLTpjL7FZ3fAvbNAqvVFy6Jy8u8UKAPk9Lpo",
  "key36": "38rHb4fagiynHxe8cdJkKWchVQJEu8dnbWpZiKxHenxYEVeHVV9ravSMbzAQPt71EbLhjpYcYmZnTnE8PZuWA6dT",
  "key37": "5pAo5H13dSuZNctxxvt7JTCa8eAmmFbu2zbwq3kVNfavFFbC1KvAoU66MhiJT5BripHybx8oBWbpCcsGxEFMx31d",
  "key38": "2T71Z52pLNoZpBpdAVvRuJMZ6ZyDirFThAZeFxxcH4dK8nBkSGN6rQGheyS72YPCZLk3KxrTwtBi5n9MvooPCkpa",
  "key39": "4WwXmwy7XVYoCtCa5t86DYdsqcPWJ2xjNNji9Thgc2XWBRzH7TCEHK4EULBD1cwHKZZFWergzrfhiQs74m6sGNVc",
  "key40": "461PwBqSmNqEeyhWBBAXC4AGqi5RbPti3sNRXoRnvH3jVi3wukAkZz6XkKMEq9NsugY2QmxRkVyXSBHUwx3Jox8U",
  "key41": "bz9bVoX2iQReMR3f68wVx2aNoKaXiDM6JvefmjMSgPkhtj849CLr5hfawyzLHpPwanLCKbGE6k2WnNVw9Bdom96",
  "key42": "67rAMjCAHtMvbNAd93ttLWGdrmqPwSydJLMxdq9ES46kfvwn7jfHMDGW58AU99GbaNvLR71PQNog6tesvEYeyoqa",
  "key43": "26xrRzq8SwbULGqsHTTCdoFVRmRXdEwXqTLWBnVg6eTAsuaBcJDgqsK2YhbXvndVqACr4Z7K9zDzYnofKKSU6Lhd"
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
