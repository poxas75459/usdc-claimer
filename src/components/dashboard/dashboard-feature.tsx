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
    "4HoMr6YvuKxmSfjEbaa4tDxL7BAx5ZZSMXCBdiGtSgw45HvFUDzyf6whorhz9DadU15GGVWVvSWuq7FwwhMwt49s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rRKKFbrwvQnAnm7FGEXuTFHnNXF9GbQVBo1KgyGGa9eJG1knBRrf9AEpPA57ytSjuLHQuZN5dxFYxpcczomVWYW",
  "key1": "5VGoc1o3h6pyoJ7khES3fJxnifzfJ9a3bPzdRNThzyLxV1dq9shUwjYVypTm9KUiJbWLXH9KiZrW1PNTRs1TbhpZ",
  "key2": "5XGu4ytoPXRDb5P9YCLdozqv2YbqZ9jYP1DRxHh4ff4xrnv2gxota7F4a9UFbuLX7kq5Qy9stS8cFkx7s3RKP3u",
  "key3": "4thvma7A8NDMWYwDFHiKSCTi68ZHnDoJ7PELRUHhvffxHMMN3WhEGAtDiC5vWCkrkuS8rYNRtjAgA13VVwJDayK3",
  "key4": "2J5jipuCJHCCA89HeV4ym1PcPpzwnXhoMYMdnqPWL47TsuDWD3y8MG65uWFr1opEev5p1GfqVTx857As3JTqf11S",
  "key5": "52L2V2yW6Ggv5joMuxQShBWNs29ne4hsaEAgW6BeLv1mGmGFGrfVNBkpAMNYD8RPbefvEPxA2itavf27a1AxTUvc",
  "key6": "4ZAuq37YL3TCCJK5VxcWDmh6UNZ8ERfJo3DDxEy5XYcbBEFjeGJiZrdMVJBNTSt6gs3rTwnXeEbshUHFFS9qwb73",
  "key7": "5XZR8HZPGHxo5zKdtnccg5UhEFQJRz8BQcTvvzHvmBhYMkyCJCbqsS7u7CMMAy3LFsdQJzmipBim6aGHUEye12ti",
  "key8": "5yMxRJvBvuyhAYLZRu2uSPVjBpg7obDe2xC4K7VFDuiTJnEEGwJDZncYDqvwRkDBgwhEttksPYspsMGVHzBwHdEa",
  "key9": "2KuPjxzxHKPUJi9jZCa4wxYZq3pGBqQ6Kd4wdwTv5sutkm9cqkp9EwQBkBmQyL5MuSo8ETEoGLUX8mG4ZfDTqjiU",
  "key10": "4aTSzFhzXuc8s9nLWBvCWcBuBvHGqhEZy8fKx8PnAguVbMB7jU6XPTi8jva6CKSnGf8g8MrPMZ5APBgbyBefCTrM",
  "key11": "2HQSfvHUoeeXFPY1N63HbXDuXqUg6fgDJqh9Whsa6KPVKCABdCDSG3vGxvhh6UWL3twWA9b5mohyatPtgFcrT8ym",
  "key12": "46D23N6UQJtXp7zXHiw6yUHY9j1Gx7tXjdMGuwwgckptpd7fBWDgwLjYV7KJK9QgFkLDdn3GesF3yqZJDXqNcfex",
  "key13": "ruG798MKn92Qs8NbHamjsgT95uS3Wd8PqRpSgksKWRn62q6wEGpW6b7uiVw79x8QqpR49QenS7ubsw2dFVn7Phu",
  "key14": "2DJhrMw4r8AD53Nbz8A5bbN3zNTReMUHG9QnkyapaMfDAmkT984Gqh7F1PaqMKFupYLxAhoyGqCczTPP4e3pQVnT",
  "key15": "xpm3n64wwF4cwkUqiz3jc8PWaenees4cvxdzgdMPxGSAZGfzMqpWKt83hxfWymgHmoZFr1W6zshk6GuthLJUbTf",
  "key16": "2ARDyt5wWs5KrSjfVwDp41BFhaBVQwGMGsPiTziokLDnef1obKZwrhs55evK7ZHDkG2zh7a7dzm8MvLjGdZstvfS",
  "key17": "3c14uLy5N24JT1itURP43B72d5BFNNMiHDnxZ97xYdsyRodJWp7wQKe4D4QAv98GtPtnB1ERHNnZw1Aw7SArBoSN",
  "key18": "4nbEsQmkpcnKhAUCZKmq2bcYwfmNxcMRudZH3nVZuiedKUcLGyYQTD83cARf4uuNoPsAxYEpVLE2arZo5u1xbGpB",
  "key19": "2MwHoN6ZT63HQbmAEtRtxuoJZRdyQYxUKCcjqaxrdkuWnbbf4b3No9U3My3WjXzKHL2GDGDoTJTaBybXpSfKym14",
  "key20": "4mgzRfVMUrTeHdZ8VZ5XpBqQapsG7nzgjchjppDbt3CUq94BUkVGNhJMTPsKPT6RDoHZeTyxPs2KydyodaUoXNRM",
  "key21": "4ppbtvNQPKLS3qo6UGkGoRL8DuYQ2B8iEp2GdGRA1RYtL6np5LZv3xThf3wsRD7jaAnrV3QkuQRHFvX51rCZL3kV",
  "key22": "QWM2cjZtzbgyEFLsNJu3aF54bu6MwNz9caFk4fjs2RCt97axyH4N5UZGuR8qE8fhPA61sZszgb5nag65iRP7hRL",
  "key23": "5fZUXszrbNhAgRAbRXZprYQN2qEbA8y8HatFZmPH25Ezc8fukBAiSXBs4bx9eh7m56zxTqGrqWnGAtt1Yxc8ak4q",
  "key24": "58fTEE25hvQCacEYxwFvhv9u3JYEDSshCexB5bRMvFihuqTvZzb2zF6y9aCSpg47m9BnoF6hSd17wiZUDzpVG1Jo",
  "key25": "XWxC1dBs65GGx32rwVMLXmx94gbz37WMqY2jYuaYCSBWgyHyyNpsLbnvqyr4MSik76iw3bRGUJLWmCTaA5bUPBv",
  "key26": "Rhu28omWGpcoLyXxTB4dWHz48zCyMJ6kFoLkbB5cnV7DtbmsgWR3fDXC3Rqjpzc17tiW7hupQ9vSRheJz93cVLS",
  "key27": "yiC6ADxgJsPS6bEm6aaPZw2cyr7TdGLkUPS6Nf5SMNgx3PYHMo6XxQctospEdTdDUh77SP9hwYgapSs5ipBtt6n",
  "key28": "5MHuibierFWrHrYZ3sab8hxncEcDZovVaRoZH1uEC3ZdhDytPm7FxVd6QhvNcbu8yx7ME96dLF9HbZBQRRy7LfMf",
  "key29": "2hfdw45WiXrw9VPuBAnRYPx9jJHSKF9zXuSCsqDqFQKY2mX4kLd4FfwC1KvJZiF4JHy7wFVKsFgdhkpwXwHVyWRu",
  "key30": "9KLwN8hD4s7ULNHPdUVcKuL4EzgzRUqWrida9ay4ZzNpLhgAHK71oSY5vgmp3dbVdfXaM1Mnz6owBgX23VfUNSb",
  "key31": "3zn7Czbn2vQxz3SnETs4hRXLd8QsztnBnFQGgWBcXCTcZjyhCBQEZwHZdmrXuYh8BvvFQHgpg5vZVkSVAHeaswAk",
  "key32": "PvKq7hnfh2PbdBEVUF5F2MxVuEeRKBWmJ7273LPZYgbaCDVWeq8185ZTPwApAj6em5aFv4A1u5LvwiKgJUWfSL9",
  "key33": "4drreCwYqPUTSoUBrvcGBho9twUewwfHekJyiiqqaxvNBVNU4iRHzSLFQj1WU6GbLM1kABMCEN5hUcUf2Z9C2tgG",
  "key34": "DDRHQ524jQKbewwPmB2tngGeCScgwKf8JsBgNbbjWiAFWEMQoT7oHv1mqxwiByAmL6LC3vkNbzhUp9AJDLpnVuT",
  "key35": "29p22msv1AYzhHR3rU9UQnv7YwnEffaasWurZJxVm8H4trJf8Xz3PWkC6epDzSCXpkoedtoKnQzY3Jd4XhrmbJzR",
  "key36": "4D1WFWeG9GyhVNRZSjmjrNwHAiJc3JuvnZZi5aTuppmmakAiXQmd8SHtoYEB1C4VYHDR6sEEJi8Zed48rzoLQ9bZ",
  "key37": "2nqCuNALNadbwjJzu9X7p8wPeaEhfeeXJ2MGG66tfLLvxbw6F3RQvJjeVJ3x3zbWjzTihy5LmQpkndfmpv2qRzi4",
  "key38": "6485c54Tk6AuNUQw8igq1sEwf7Hnm4sA84dKztK26xbbaMCXAwoCpLVECieaBsfqDZibiSfrHCJt1auNF3V8fHGF",
  "key39": "RTEYLUBD3DZ9pw2pvXjU1MvsDhoyaxYGy37uqehfFhXYtf5oHZYRPpWa24a71hDxiX2k4nR4BBEAQ2BNreV3Ate",
  "key40": "2e225Ye4QCNXNooGNv18Asn15PAtEwgnabU3AkvLnMuQmUP4EybXdVfhg53kcq1an2nGWFghDgkic9tQRG7vMx42",
  "key41": "M4xk7cCuCMk5hQdbwRHV53q7FytKHFUrRyDX8RrNcpsaCVM7nQWE8gLtSmeGT7KNedGGPWBVoSahegJJ8GBSkAG",
  "key42": "2sAJgWFFBBkgDDhx8ZpJSoKBuC4A1dR3xXy1DzxgVZ7LzrgvtZDUbaK9af4VrmpmyFRZh6amL1MJCMwvPDwKpv7A",
  "key43": "dc9rby31wrsV9ooRDZqbvdUDwuHuB7iDupc9t5hC58pGvJC7p577E8fBNqb9Vwi6j6cBe4LmrzoM7vLKQjC8VEt",
  "key44": "ZqGDkjyqtjafPivqnXd8vfXPaUp5KoVb5xXuRwMp59giQMSs9X9um3GCCsbuEZ2EejpAme8xxNTh8n2YdYoAKaw",
  "key45": "5XuiTrnpuJbg7h5pWQELPxzwxscE5JUW1Z4CUNHDJgS6UBZRG4tYEgvqrGzhZ4eTeMaySPC22uDzJ49WR6E4pC4w",
  "key46": "4JiJ91Ws7svJDqqmRhxx5L6Wuxe9aTmKkHgK3cQ6nNyXcbEYbjc5YYYSjmgzD7dfm7BR5uYfKjgfmdXk5wQ29qbP",
  "key47": "2LanS6KbCCEfx9x62qgHdUkb6SZ4VN3uHbEVGphH7uH4QTcUE1emKxkZNPnV6hvvYv1EBZaRkGHy6Q2VipGf7F8r",
  "key48": "2QeKFpk7JPJAb2MaFg6YSStKgNx1MMTjWp65SCXk7RMt8PY7SWSCwUQjyJhHuUFMfFebpr5pJEd1FeT1Xbp1Jv2o"
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
