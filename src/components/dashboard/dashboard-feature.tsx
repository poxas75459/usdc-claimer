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
    "2zYQTdvNdk45aVoNjj2aRc2seHd5qiVn8LqcJiJvWZGC33xBsRQyu4LqmrnYAEbDZfHr1jmujnZoqqYhLK7UJsYD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s7at64Xp71WkHFYYAGd6tFxzxZG6bwMZoNzJB4iUs55Fgjpd37Stc2VDgpGYJ2nb1QmPbZQ7Y4Zcqivyh6hPdjh",
  "key1": "4xUdDohDysdqtYbdvoCRsd1qmhcXLNpXhcdrmdBxzGj5B38Ua9NkzFXwocEacMizzN3a4xrzC97355QdG3knKx7q",
  "key2": "37hDrHtyJ5ybhMQYAFwdh4JMd6ny93D1G7kxBSJtDTrrVMHSFqRWwTtECzoicSs8VGAN49FsXkUMXa1g8iFyt85L",
  "key3": "5LNmGccFLbJRpHYcFkVNWr6wvjTvz5Ns31GHpEHKkSCYHLky5EMuRVxje6kf8Xzku8wam4PRwUh811a1H4BLGN51",
  "key4": "2AoGiGWkkFdyjY1hZKuwnQJif9ekT3MAPA1TMQQdvSiBv4evncRrN6BiCS5ejxTTAcYjVLntQmbetikM8wHTkCEb",
  "key5": "3zyQjMbk1fBL1KFtKXu3gfuCxYmmy4WrFtv2JGaVtA3BGhxdee9x9Cuzq18is6L7ifD4zucFjpjh3rHPDv5R5cZt",
  "key6": "5vruAkxAu2vs9ERCTYanVu5C6fRFNdx1JVs3mrioUp9yncFrA6qkSjjxTxFL7Vnx6d1h5pBB8BSeXNPWNHawXMCF",
  "key7": "5FHyhy4NiMDFX7Jm1rS5sfCHPU1N3JcNPPQGYKKRzgkUBepTYfJ4e4xt1Dpxvw6aC4b7v6eBr774pvGjpig4kJ4n",
  "key8": "aPXufViTL7RSR89p9AjSZyRrHCSndR5PDGHtpPGz1mbsMvFkzqF9jNhd3hqifPFv2r6BofbnUY8ERWU8QWzgTjC",
  "key9": "2CkJPjaPoiAVz4rUau99rjmnMaBMRB9dTrKuYiGjWCXUARaGhqQ7U7B1FadQi7bVK3Wg54zGPDnCfpH3t8YJygjn",
  "key10": "4jFd1cBmmMkZKgobPCsk7xC2pfQSuNLnmjUyHJewJxZnjxJiKtBevT7mEFHx2N4qkaeTR3WJVJEc95zXMTv7su3y",
  "key11": "2W3DFgWSusZVjQVuDc26AFsANA5b46Sb3muHCu71RHH71cTcy4zPfasKAK98GW56H1hP1xFKJUDSceTzQrvpJZfv",
  "key12": "3x3v8WU4cho9e4ZewaA49W1RMML5eT51JLTnLLr2zNeb1KSwtPjUYpgyJRE2Pn2BpmQCtYax7W2fFZJ9KbLVswci",
  "key13": "2rXRmPqprAt73KzYE7K5hp72JqJV1GGJXWJgREmue3RS5JKqT9FtqFNTkevGoUrfJyF9DoAXPyoJoFgaDRMjuSaR",
  "key14": "3VThYBb8pL6RvrVGic9EXRU5AW1HABrijUHaKDessmZzNKtziWbxkvJBomvXiCKf9wpc7oHitqKSuDixv9LH2tzE",
  "key15": "3F1wWoQbbk5CoDngt1GuDhBnjkJoujvy8aZeDVhCVUr84sUkooDooxGw6d7WL66dmDmvGRtM1dNmiYfVjk6f9rET",
  "key16": "2jnF29vcWUoBB6QNfZxoQzer67x2JW2XgzuoVhoeFhi3S8Twxvnsj3xGtXS9LGGsUvc8vJM3EJsBXgkJZ4vy2kQ6",
  "key17": "2mhxLK6e4ALomUubFAzNq2GHRy9iUnhTHGoSJDqmBKAr95UKzGSNk6tHR2zAQAFjTnNTx3ExK7CFvD4eenzvSer",
  "key18": "QeveJoyf3f6fHRoeVtWW4BemHj4PoGS1C1eB6zmQsjGksLTzUN1KSadgTheT3GKozdQohiBprUSCainiynQkWAu",
  "key19": "5wnaKBQzTmMkNNj7jV3148oPV7HzAKX6D5ipDv7x7Msk6hieHRgwQGKMssJGveWPiFC6N4v4mziWf2Jqvcechs8L",
  "key20": "4cQk97C6tkWpPVYeERcFkntebmJZh4D6Uyo4esp9c4zsGgUodxA3zWqngQ6FK7ZeHBw4npfrxMtTRcVSsoth58jk",
  "key21": "3dnWYukTYv4K7mez3cUrBwSY5QkpuDQJ59EpqL93f4H1Uai5CD76npyRg8Qv2YSJ2xDsH5L8vL1dekmh2os2qBmw",
  "key22": "3qN5ks8fqkjeZVSbUKf6s2X1DqugAWb9jBJ3CfziLHL9TCJAeBm2iGC7dqQ7oFH8oDg9YKSJNTKfw5bhR1Sr7mbv",
  "key23": "57REcgKmUPULaqGgiYFgyqMCZuBugxupHDoqDn3CDjX9sg6pdNynVYEL1MZr1rznsjVKFtSg8gFDHrLikmHd3ppz",
  "key24": "433JRgLQq7okYVTgwvZHGmFibAjMvhCRBHY92it1EVVhMeYdNhLPZozhcpigEkPxSVxzUUsiKKxbaLVRFmt9HNA",
  "key25": "5HMZ1jr518Y1aWYWQqLL48uiDivz3nGpjEbhGkYNDmECyWerQL7YnBpoftVXoFN8MXz3pURk8FSGTi9a82AdPSYF",
  "key26": "4s9mAjZPif95AmP1DgbZiTc69E31nzNcgA4PjVABs9ANH39pMLoNdE7dJRaiirxyaVoj81GhfmkB7B43c68roXPT",
  "key27": "2iM2MsBGXC4tiiisuSrFz57Che4zpPqr8FWjGFjQwoTpWFy7yGosk7JezERTworxJxJtmRQLyj5wnjM82S1uiTbn",
  "key28": "3DxBoR8zQVP2gFnmMJ8xniEv5ucE1JgrEDuqHxQMBT1RcP1RD78dM9JMfh6rMTbAMS5dWnVnd41iEaCbZu9wCwb2",
  "key29": "5Ygsv4qEBW4JBxVy6pwUgi28yVPjKb64rdJWdH6npuBoGdiRDzDo3HyGeoxqEGtJbz4yru5VdanVvd2NP4Aem7bd",
  "key30": "h8WFj5RU2TpTR9YWEGuXAe2RVmvXsZN3dTaurZbDxMSfGbWtGmBYERgYbdgYVgRoweJWHunb7eiaqkTspLrC5VT",
  "key31": "5Q32CxiVVeZx2N5wA2pU3aQP9oykvxvPMsuwPaHeGVoyXWtYMW8VQgrPaLAv94Yd1fy5rbiEBoYLBZd6eRCE3Pvd",
  "key32": "5jNxfTgr9aWer7BhpCm7n629C5wrGMQjJ6uXp6mf75VoEDZJ8U6uEi14mrjH8ogBbEz9236NBwfVfbEnucswDehp",
  "key33": "RgNaoDsztQrwmwEM6ksULswsnbkQijRVWkJuHEgM4eYipXVJA4sVSm5BhwgAkwNFfdVjAp2oePsCZ6vbPECkBhz",
  "key34": "5NqZBF8UH18yvyfRd33RnBkYqt6EPLV5wyGbAsjRPURsWPANSZ8ExXk2VSuD81hCP6teHt4uhfMkjBY6hqtziQav",
  "key35": "3MUfa1nSqwSsLx4Rkch7He5x2zMrqHyYYhGgpLtwQxNnXBdfkFVywemS9b8LVqhH1KCME7oEeS86h7Ri9Ajcw8ju",
  "key36": "3njN1gHebMAP5MANm7qUHAh3LDMzk9PUz3gxeuLfBNGAJ2FfrurCAa4mBkUJ9ndePkCSphs6dTTBrrmcaEZKW1V4",
  "key37": "247PB6ZpFw2MwPP6Wumd5zrCXeuRY1ravPGwpPvP6HnvPsVGu9B2QtwTcYSu2mGc8TN1jGz3viv9SMjfZoV68M9U",
  "key38": "5QToqD7MPn2o2jvLtPYz2vDjeHuzd4wvhKuY4bgsCMsoS5X3HrWerPbRpCU39dhohNLEPTLUiH9NUkesXncqLT1k",
  "key39": "4vCSMZ4tSgCMuwQuas9EnFjktmceFsbsA7zfgpkuDamWkmkFLDN9fiFW9EdHxa9pH5zDpW4i6YWFEiu1QPjZLP1W",
  "key40": "5f3UmLgZLTyUhMWGmD78xa86bgymDjAMdppAzJ1Xkmq4zMsoxQQzd4rrddVE813MU5vH5hwNdUS3oSwfKGoRoz52",
  "key41": "5PUX62ccnNnPd6jm6ktL4Kw93e5AGCH1TTbVoJUnTQ7nuYYGr1W2wQQswXR8iiixoQMw1LctRK7jEQTX1xcYiECg",
  "key42": "4V8mYfFxRXhuL1uwd7ijNxmFGgtbC4V6Tq8rhmdoQHpqCN72YAUW75kGQxotNcgCgDnqXbeRKmYtEKAGGXqhrvZH",
  "key43": "4QNsNS5MwmdD9MdSH3whTX7Ye6ZfEfvykcFbTTNGFqSww2sMtGj8bBXH2NDy2QKcDjDtRSjT2htXAxCkiVBNc5fM",
  "key44": "3DkA2r3E8HjfRgoqrLmBR5a2Fbcmg49UGdKFR6MXuzoNfaSHRxf8gNDRQFfnWUbFqJjw8jAc5ocD1F2pYaW3tr9",
  "key45": "2sdfHVgBFYRbjtwVE2ViHUnGANxqEsZjQhJ8FuL6mK4rfeRdAXSY8cfYzrQfTAD7K9kp2ufzzQJ9rj3Cjxe3oGxb",
  "key46": "5vWN4bDDt9CbpyTFT379mZJcPw5QhTDBM8ekUNUYa1xfRwQQE41amgAaZwrGUFciBqCsWbVSy5YPZrJb2P3ygFhN"
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
