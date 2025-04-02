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
    "5QyVAtxEB3VtgQ1TaavyMAnbVyjSfW5GArmTgJRwa6oe5D8322Mr2Dt8vnqoXZREbwH35R3ad2Jy3PAGF1aqkH3i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HniK5PyAqexYsvWkAPZybBJVYMfooBVoE3vk1yTLv6EsBg1qcaT79sxdmLfuBG45Cf7HArfHpqhBxuWh3djcDtB",
  "key1": "5iRRSyu4DVvKceKhUSdxBhBcuQ2SuHkSCfoUGfRfhBruF4kuLb1ciKFmj51YHZN4BvYbiBKZchfZpU9ngfUuF52J",
  "key2": "4PKt5qN8m651SHQN8x6Qa8LKhSNCodcLMWwWnVqKDGLynGpgDhxi7GENfgQi4L5YvC9kA25VSBavVHSBact4AqYX",
  "key3": "2iRMMs4R6cat56xuWMHv1mKLEsKQGBTNzPwuCpj4PhHagaZybiWQkf1pf1wLMHj4SMdZDKrd4o6MfKSSTzM1qmTZ",
  "key4": "3x7gdnmGXxJrboN5zwJBnrJVS6HtBwoVnTZQyapxLG24BwfkCmobAf3NgJbATBQdKWbw4zs7MCDbur6TJbYsfFx1",
  "key5": "D8GFSgMxRNuTQZ6bdYVA8zB5cP4qX4CDScpMizVHjHEmMvBTbzWA1hdSspufTtyo2VR2ZGUmWVYzwqnLCcHhapL",
  "key6": "YH3VKpPodeCjV6vY8UfPXDAJUk1S1iRdxs6YGGFWWZ2sPdf4erTxpPsoohKNrApP8XZZ5gSiDgyvNGTfVVs5fXV",
  "key7": "45iA6L98p4rMdga1yUo3wnVx2E28JHqy3dB234zKej6xwFpaQzJ4HSmjg7gfR3rWzvSAmiqREG7Qr9gjNvyVR4Fc",
  "key8": "4Ujsk4q5LxjkYmQDEdFLSw5M5gZcovEcwZ4bPWR8TDrdhmqiNbxkqkatsG1uAPmYXDZnCwicKvV9LJwS7KtRTktB",
  "key9": "UyfAeh3WjmMha3iakxy6RgFmJ2XxCK53YcpimDVae9y2AZLQ23iSdXZyioXcouURpFhdEpB87Ugsco1kJmxd4Vx",
  "key10": "5rbTiGuEigJHghVPoEJmK2BGaJCXcDUr4K2i6ueaGgShyKdg76y894VkUweNgPAKWu2WV7E4VeDHtkD4ReMaZQHd",
  "key11": "3kaTaWHr1DEyx2iTAKMjLe5dwWQcYcuHGupxiJhS1rXJc5HnzktLD7oeWMe16MR9LhoEu7uNs6feN6yBesgS6n6d",
  "key12": "ZM4iDUoSgqodR75vb7DWLjzYWXooYDzRGY3ZCZCAD7kpNH6uBZGfRh5B2xwu9d2Lwh6wkSQu9GAj4EqBLHUZEPM",
  "key13": "3aXTWoLwcsqTPM4K79gPmGePwg5ANcHtActVYVXKgVUm1LXe3iBuFCT31WrYzAtsn43bMyBUfhBW1akcvqwWbXvc",
  "key14": "2ijYLppTRyYY2GSDHSzFv9nLFa1PvffwFZVEmGEXyADg8NApjor7EtDfmUKWueenoJ3JzwC1BqH4kA2yNkabQwnc",
  "key15": "62vCbiTt9Gj1E5EAsyqTXSggozAJbXu2oYDT3HEMtrDvofdHv7Xe5CxmiYUWc17XdD7a8RPXHjkaDCfmuEmG9sd3",
  "key16": "41k1zzRo3ugvdhsGEaDZPJL9pipaso8uD4kJZtsjtYzMdjK9H7aK183ohxRF4QyhfGBVPfgeN67WiCqKkXU6y4Ri",
  "key17": "KkNnLo67ZwpA1js6Z7fsbsEQq5ugG6ky8zwvLP1Xi3xUxGtpkCxz777ZmarPsdBpTmbHUXAAE1Wc3ZeE34ECHyk",
  "key18": "5LY1hHRVsdJTJoxLwMWQdvrBxccRe1C7SDnhnnaJQEUmohsN6ED9Z4gD5WnHxGYvNrmfnUdWSMRGVdWpL3o7wWAZ",
  "key19": "2ApnPjvge1K3HgBg3uverLcYQF6VYbkMKcTiH6e2dsBoSUYCXZH4igQFLVriFQrhorf1S1ZeUFWMe9HaxZ3rVHZP",
  "key20": "3KgaLkCn3Un17qbGqVtzvkbv4oJdC7FohDMjqrdvdPVdGKALWUtCpmTWJbt2dhudmzKR5zDZos4ekSsERv3Tvqjg",
  "key21": "4L3DK88pYpwCTnLpoCDJiGpUTarYdcBa548RgRvGwQQ6y2Rdum3oB2LD2BD5i6ajboByiBFuiMpFdqhg5WUesf8N",
  "key22": "5TiP1RWGvZZfDKFwZzMNRh78tUFHNLZuJ1PN4S66ch795yRjCwAbbgfVFp4WNCpYs2sabg3JPRfryb7pQtzVkdt",
  "key23": "54qfvMnBqAiLZkARqaa8czVWTaCgnCsvW3kUPgLmDM4LYUod23AHFEsRzEbP38v2cSgwU2hX8hmwPBznDDkYWhom",
  "key24": "4dNwrF4buux7ec9GPz219cip7iXHRvPngfE1rvHF16ytzga5Wh1c6pU6VbDEqVhGFSn5yrEw3DDQ7e85SeNS9DUV",
  "key25": "2PWMRSEs1Rjhdi62vs7y8Szm1gYV9DnP2cGonVZo8SWvjdpdFaa3ypDRjBQpmb3oDh7Ea6wuRksjRkJJHbjLKxeC",
  "key26": "5yQqFfbgRRDbAkfnVab1zD3u3BMaDa9X5ZH3Dq2DfDienwxj2ba6pSXzS9qNiEXvbLSy5AveC2xVPnxvHMg5MdB7",
  "key27": "5zKqPuqkVhvg8RtL9Qy2mBC6WfVaFT2wEgegEPvf3GLE9RePn66Yohq8kRVTJQpS5NjcEM2PP6qYSs8nf4QAdpgA",
  "key28": "32DPzyK1umMeUocLoD5n8w2JBKiSodSh76EF7opizTL1DfiiW6oV8cowyxhbVKSFpCBJpWxyhdGqL2TtUK4RqtG9",
  "key29": "336kSRy11XTg9sj7Dg6zRFngM6VxBBweHfNWvNk1GbX4WVymM8Q4n6bG96RVfCR26A4bNzQYfD7ffvVnvmz3nFML",
  "key30": "2iHpqEq44uD8apegjianZSnbzkPkyWiA2epMFs6aabpbP2si42sH5k6WefoGuzz7mSvDMLQ8YjkWWfr8LS2hrrJC",
  "key31": "4HVn3wCPfRwWRPjQMnK3XH2wC4WmYrJKrUGCVfNbkJgEbWaPco4L513FPFy4wXtrSmnwAeSYzf1DSvbjSyVtPPZT",
  "key32": "3baPLuxnynYbnxe96Df3h1M3Q3szh1AczEX2p1R8Rgr6xpiwsDcYpQHuBwUBpvzPPovRyeE4ouH32kh5hy8RWNFe",
  "key33": "2aCDnyFoRCBDVGttUjJGyS5MarhSNYW75rVGj8tu2gLneBRUsuRNR5BsHDrgeBaktyLHtwSGiuWsEQKpg9D4pu8e",
  "key34": "25Rb5DFeawJzKtcHrzZbCBeau5jfdhmUM2bTeS5tjMrQ2ULy9EA8fFHkdwEcEG2kLxmZEuuCDAg2MTSDovThdVEP",
  "key35": "5w4MTpqGzcvRbBF8RNRAT15Z8BgE3jLBgtHHtSjy1uAggpurkcv4jvmrBVwogh41gnXJvyjxEFLfNwSL5fnaz6G",
  "key36": "3ZiW5pGB5s2eDnQjfUGJvPEpdWLv81amYgwDkvQT999ytJvCUEmgEQZAEz5kzLZ8JY8Apb8fsgV82nAuZWiLD3Lq",
  "key37": "5vVMvVMjLrT79wjZjjxvFCX4xRpxARkeZgcF3mwvkvg31Fx5mBVqHQWnLzvzdLwawhhknLMVjzpVZRSic6pECavs",
  "key38": "wfCGUq2d7SkrrmognSy5kniCWpW7hbWSmq2GuF459jWjrty3WSYQvvaq7oXznFr9ec6nCA1C3kKWpFjazxzF5GS",
  "key39": "5HygVdoigTEJR27UBNJVUFHf6ahA5dFyn9XmJgSACg249NtgRfpo1UZopZoYHGUVrAW7eMvKiRnJ2ga5Rz9TjcTJ",
  "key40": "336PptcqnT9Dt36ABw8ruExBtPqh3dqhkk6arVn8Jc5iC44MJfuQQTj1C1hP9mVqnmcMvzYeAQBJPBpmedTRCgVL",
  "key41": "5TK5dk1xk7UWvmuQrZQR1p5UBBbWVGyPeKaLUSUABznyukUD9aPWKKpuK3iGtybgdxpcF3cCgE4uKUJNzpw4SSqc",
  "key42": "2UbuwQcadPtT1x5naa2c2Eo5Q8v5peSdi8ZtmddVSPFphDmK5qHVZ88uPBgt6SH8mtGqGZYNLetoAd6PC1dfuNyt",
  "key43": "7Yskrz5pzWNVENF9NLRLQ6mUBaUeaNGESE7SW3VAvM23ZZ6ysDTASW1N7SM17R3eqkb2KCQWLCcfEMtKeiim3sL",
  "key44": "3hFGoeCcChESwR3zfTJzJbyXy6ZAwqcsnDkVYLEFieF5dHBx4BvUqJjPKJKn3vjeT1QA2uyB2LQwokMhrSofjRzn"
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
