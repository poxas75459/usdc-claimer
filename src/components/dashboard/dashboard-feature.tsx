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
    "3A8YQRVDMwqyXiuSnCBjuaNaPBqZRy2cLHi2zfci6Ls5CokRoVjmDHhMWgNF6376DF3kmhZSLHTW4dKF2PfaJWPt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x4BiWsAnph7TX1kyYoZwQmaqNpKYPxz56wr6mywYPCNBHx4fvkX7HuKg1CbHCFk6C98MUxzGDZbEswJxR5f9j21",
  "key1": "5Vsh5Tn2ZWp5qNxMPWb4TFeLTcJwLpcwveY2YypDbteAdMromuSLxwHVT1MBqhSCsiSN4tFfezJaE1iKk3UZ6tC",
  "key2": "5fw6gtf3dXrb89xRQTjNugJsJexc6BL1efqEzLUtKwcsp3zqg74f9dkFADZwC3YdJextWt1qgbj728jgSbg9f22S",
  "key3": "57Ba8TiZ8V2ATGwkbcabhhLvKGjLjZyARtULiRagjQFnVctS5Bx1SyVSE4sL65VczfgG8qUdfXNXQVkC3uM3kM4Z",
  "key4": "3mkPUxxXkBu17RJmsmSrNzrJiYEEsAjvf1RsGrycfbwPTmgfA3JMRQ4rDAXwBRv2685VsfWJLXJczHSk9TBdDWBy",
  "key5": "3iiiTuANd5vscEFp5V872zKx6yWvrShRWuEbMyPvFeCsHBN25k6yPJDDPDhPi379Qeuv6oV5Ztp1Yr87ovhj4SYt",
  "key6": "5LeZ5YPSpNX9qzFiLDshBfNMSAc5MjREQW6CztZwmbhMfLx1HfKDtxSMB81sFg7rWaTjY8uuvnv6iXztoYjAtArz",
  "key7": "3DDACrdVcttvQbCioRpteEnRUrJmVdCDa8e7A5gGQutzHqpcZMtz6UTNgP7GqyeoKp9ZTehs53z5gpDZLJU3eU3M",
  "key8": "53HCT3YtBA6EJuh7szjitJpPptcqFyAS9kFvhBDWDbJUnKLFjqF4fYzj3MiUV6Bk3wDyPv8kQHEKmw9jh6GucN3J",
  "key9": "2RRhJguB22nyweRaXdhJniqAUkBKm8rTnke6XdZMUgn13WtWzzTNjoms7BD6kZwxV7GRZurasRy1EMffXWetnXKN",
  "key10": "2MYBqqhPCQbXECWGxhg8AhmsVSjx6LLKEgm4LhW7ebLuRsFdnq775wjQvRCSWoTKnoiC7SMyLaGruAviKovDYpN1",
  "key11": "47NXUkdouzt8hSqFfbp7XD1JK7igxt6x5UH9LK4VqXfLwWvNxGvpVRYr9tq7uF5uv3G3he8vfYe9Jdxdgq7HHXxj",
  "key12": "HfcfUVfdDrMy2xatSGFVYsPgjeMLhhCAaAy1Wdi3BhoLD1LSjEtrsbfRbQgmatTWteMK29377KYinYknYeXoDNx",
  "key13": "44v1vRLBUs33fZex2oxvL2eEVpqjRJKxzsMC6kSYhC75k5atnH4kBkmr37bkbf6u7RrfBa6ZRVCU1hiw4mAS9aZX",
  "key14": "2r6oAgVqN9P3nWSKmdjAXPVtfBVQUBvtVwJUQESH8X4hNEoaGXzdXuQWMiZE6nGMQGitfAUHaVrXSHCwang6HcRx",
  "key15": "2Eh9CGQgbqyZV5uyYqTdkvZmQcn3wefDpBF3R2yt1zdpqwXdvtsBffbFymih23RX5XzRs2XxrQujoMMrXRAbpStV",
  "key16": "3qkfsqRcC7w9DHf9k3Z8WiKMn8o2jn8VAGd8u4bqSXMgHm1vQAoCZqy9WN1BU7xHAVBViphvkK3srQm62cBjip1V",
  "key17": "5amZ6JcDcfntfdndk7cHXiKGjvLrr1FGHUzva3c5nQFWCU3Dz4osxdpA9fGar1wG1LKPVA3v2mgEGCdh6BfBKqt",
  "key18": "4UjrozCU2GK66UYYz3pYVP3aHuGRe2vLbDsbe79TTnykyNSZhyhNk125MuQWqomXZhKXgxCKpKxTW4wnvQhbbYvW",
  "key19": "5GvaEy15RABmNvV1gcaDQpy2VqmHjFzLKTgoze1VZRTRiYfkFgFCBMdQADsSckBeWNVvCVKxfCqWqKDDnLDYrkEL",
  "key20": "4Lu16wui6mkeJJgYfThRRtzuhG1VUfh3sagHEDk6Z7CCmZo51YVHujdYYhApMhaSwdrj3K176MDsf9tBiHJtEeo5",
  "key21": "2XbzgNF2D8NhojZzbQcCYK9z5j4p3ZHM2MtFNQCYyLCGoqh9Vnpiiq2phbrFrHq1b5EF71ufpgDQ69YYfcaH9ioF",
  "key22": "4bKf8ntPJxYmSXxvgMTVbeCc3qj4LSFZUfiovfFowaeowKJ86nxU8w51Zv2oi6bSXAVzZENEdyLYvMdZibA9ZbUS",
  "key23": "5YNqBUuzyf1T4j55zK4NEumjJYSCZqQ1UA7dUDbsUbFEMh1R7FrMUZL5LPAQjo2UZi7QA6NwqNX6A7eo1spqMmYf",
  "key24": "3FqM7RegrY7PHUUSw4BM3nMCXsoY6CijvJ7yfiCru141kDtDhQELHVXH7wDG2kumAUGHEHsLFUZyekbnfG6i99qf",
  "key25": "3m925Dcr2rCeegNh3j1EaUnNWVbGPH8mR1nzbnX6ZMt1KcMwFREJkgZzyu5sru9AWrm83FpMKACV47aZqGfkw39B",
  "key26": "5tGVZk8dEDeVA7Cu7YDi6DP8DQFH18cDksMrtWfbsK3nn7TnSk6KXrd7yKEzQF3LPig1c4YHSwyFzb9xvma67i7X",
  "key27": "2iRLfYaLZgxmGXokbqTurLSEvzJ65gmjS6TLPPdg5tBntrVGemAFHNygBSLPAqnwktZ5eW23NKSbbBf73fGiHENB",
  "key28": "2wqyNobM61kkEkskkMusug8VfvjNVfoYWKor95sxNN4gXb9bXcmiiiZELNSZQ7FmErzs8GhQRXDJAQipi7eLLukG",
  "key29": "3B5Wx7DfFkVYDehaPvd2ggZE3KLQuumzBCK1Q3HZhhu46US53XtW1GeBp6sUnyqi4ZXwk1X7vU8epUKSwXvWjFMP",
  "key30": "3qF8nf4HnK4tm1GZZyQoSXtctaD4CD5mfQt1vWK2fWyKLMimBs2PVqgjraiCfojdZqrCVcCXbgeVEy5ysaAqTcnc",
  "key31": "FAnc8CYsNkZGAchVD5oWHbTmxNkAKXQ14xbzyBzmZxX3oC6nhprxymRW32uMpHJYiQgutTRQHKgMvBt8PPuDqB3",
  "key32": "65iPtziPni3B5huJ1sSYt2rvDUf3Sn4tYZwrH6xjeYummGyQZvZiXVMugCmdvMDdFR7pQxJAPSveEzJwbpEqQxpr",
  "key33": "5xShPCSR7MpEqD4hTwT9EGhz6zPp6nRGYy9otpZgJtV9FgTFsxEBQwVN69YUY8jAu1aaCLfP3wFScQxdeUKBaryh",
  "key34": "62nRi1YvFFTSorRkiLskWT81Pe8zpcMrY3C1QnpAHbDBLwZswapdqSZqWgictVvp7vHRbV3Sf3Txy4qv98qmgyRR",
  "key35": "pPXRdGJriydZjFY7f3VZAqdtexe9jNw2Saanqth1fq6u771g6xXjMG76Y1Y1SXktkMMHQWWQQr2zggNVMkH69R7",
  "key36": "4ZUC1w7Cco7o9R6GEJeNCK9iSr3gLKQJp3tEAa5qn1BCdfbb55pjuM5yfYvGvdhFe5TwUFQyeN76i2sbvBchkaaC",
  "key37": "2FhmZvUh2WrCF5dBLSRc2SHZZ7cKavDYC7E1UogpxsNiH5rApVShNmGeTsFcxJritDbyRSRJETsgcCXzdkSd9Q5L",
  "key38": "4GrRKtpT36uaxxzjMH5C1VWM2GULm6Nbt23jnDVk2iNbATaccACsRySwwBhtgRGmH7k8sgLUcdA7yQsWR1DjyXtf",
  "key39": "f1isCAkpGcfU6NMq6ghGCu16JM3Uh8eF9MGkxq6tmzp8jgkJqpEQoZrDU9PLD5wkiNB5YkXoS8LNiApxTeHgo6Y",
  "key40": "uyz3i2UpZ3ddfXLpAaWJwziZRtxQhW2KJE3GU3oKWmCLkBdbxYzp7SCN1NdZ5p2Xx48G1dPEeYPTNX8Dogetu1z",
  "key41": "5zahh5ovT5PmYKn4aS5ExQoKxkHx7aSnUmdWA6iBkiH57oADpYyzvp2CjFX73SpZmZKjLcu4uLhKAKspuCbBTJiQ",
  "key42": "QDP61jfeu5CFtc1YBU7tddxPoDJcrbbgg7vqT5x3QpwUraqigpoU5CxAXibUkbM2L4E4WK7yZKE3zdNaid4DZzG",
  "key43": "457ws3ZJedpYU5haytuMZhbfFEqyugaTGnVKjbUHATXD9m92dumXzphAeA5qFsVUkrb9xyifr9AfW4eLAh6myf6e"
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
