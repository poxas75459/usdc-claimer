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
    "2f4aFEuVtod4iBqPEfD77EhHm5ZLuoB4tt8qoLZjfMg7gpa4jacgDr14LARBnBGoVABNgU31HoddCewAjqakWYPv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xkipC3EnGFSnyF4awnV8hoVnffHRA7Njjqdjst7KMrBAjwRY1UTbkKxSkbtaoPUUPMHUxx2tpZDDVXYCpe8reQF",
  "key1": "5F9z8HTVVn7Xxt7NXGQkzoRyUjW7ZEGvXUtwHii68jBQwcEt4Kgrice5SPZ7DcsPoKAZbUw9tNmN9ATgae1RHTcx",
  "key2": "4Cz2adw8G3Lkvby7MH3nm2NDTC8Gqx17dG3192zP4zLJ6bfCNDsUhkqJXMpbC3FAKuHguNdRxixoGSYn4sQLjiYK",
  "key3": "5yFGAjP1jnVD8JyrsZnHLSjq9WvnKaUBzFGJ37uj8oVnZHLyRpTwU6abGa83iRS8r4q1rzDjBuSb8m5RYUonyexg",
  "key4": "1qg9AW9vgvaigLkkPMcdGkBJzXJ5f7tnixRDCVXJ5YgJY7Bpn1sCjR1oHxYoxmcKLnE9MV6Qt4wrgedijurfikJ",
  "key5": "2YnjshZhisyJb9MdyETTVzNzkLwKfKXP4tZFVk2ExwZZXBzqs1jVQw2nxytZ4UUn1X9K3myEaAydMys9MNqVzx9Z",
  "key6": "2kuNADH1drFkXUaLYRy2gu3G6xNAmQYxEN1iJ7ZGZHxpe6Tw2QQeoQ6FETCGHBSDBNiMXaqrE2FyyMygCbgMXcQV",
  "key7": "ic7jgBvXPabeyRDKR1vPJpsEE2EHGGYi1tNn7mbte3yK4KjZv4Bpvko9ipNjot1uSe1AYg4mzTvJUxTFk7vCeMz",
  "key8": "vanDGPd9DFf7rzNErYvRTjz9GWZsXgSUqAVZTRmPyA7S2sj33N5KLQiT4LDMXoixjBfXcr7rXxEmeFoVgt96ZUu",
  "key9": "2CLutSm91SYah8B8DFgD84YhevfLBUEXUCbKrWRWtXtpc1ssZXkRKjYTyTMY37FQSi8bbXfd38TBre9FG8yvzHSQ",
  "key10": "4X89mePnBroj3YyUPvDz2CQswtUhXzudfpLdgr7fufWFtnLe7nVA614ZSiqD4nUPgsgWbdBSFGnxRU5ELcEcC3wf",
  "key11": "65icQQBg8DXvF45Pm643JuRTDGrMpGtTcej11cpTzMYHoQG7hX6CspfMd22EUTiyxCwr7khfHCbBz8bEymN9pQMN",
  "key12": "2PYpA8ahKtCRygDiviJobu6sJkcn9XC1RJPvJWMNoRh6jPhCM21yPCjjwaMc8PiktizH8SsgAQjAt56zZAWzmsug",
  "key13": "jhGppVf8eMHjDGDqBkMvURrLPzkrWWwGS3UqwEiHKCAHLrF7fGn1zXs51PwoxfQbay3452JPXaiB87MrRqN3CeJ",
  "key14": "d8rt5HPKV12LKXpcRxRVEtic3BraX12GvpzhPLfQwDTY6qRMN91Ng14VMW493NqQxEB7VGgE1V2yYYgHN4Gz7sr",
  "key15": "3ag4kqWwoEoMfuf26L63tQf4bAfpaRewCUpG2WGxz93eEKcXLy5Epr8RfJFc8zVGxvQmLiPK9ygBXg5EL2tzBRE3",
  "key16": "2ac7eVNmfFYDMhv9WyarSfTB7Ygfsr81GCpGXnEUrGo3E1Cbhh5CpMsBpvmHdpYFpqLAuTQJZt1h5StyBL41xnxH",
  "key17": "21erJwtEJBAKeeo9qQ4ske8jaHGbDr3Dhcizda3dDXccSGUgtHG1urgDzSGQ4nKFW2rMrwnRJHUPveAESPL76EXe",
  "key18": "27Nqzt8wNpC4hMz5VSd1AVTGoKRPkF76Pd5Ngtk9RJxdtsafoFWjm3kGj3NL9Z7VK59CbM7zWv9aayDeeMdYg2FN",
  "key19": "4ffrH53We44hwUYZqCGhgQeNSo6yznQCetBdrc4z2vzaPUY6mabP6gUoxR3XkcYE4sXa6DTNKfKq4u1wAPN6Nw5N",
  "key20": "5T1CR1da87ECpPjXhBF4Cx27uZbix6kGQEdsWPFpMKrfq8LrBzorcnb6CWWFgnEy3feRaJ5q4SqGXiyLhSSuFaQR",
  "key21": "3eGck69xvEDZCXprsC7nRHZQWyUryHiN8Mv7MP8hLKd716UTBHK4LQ11kPpj551kWg7kGKorfT3JG14dM8zCetAk",
  "key22": "5LCzdiyfHCzsDXyKjZLCLHDMnPspjAJLocvbpKygyezgat95hTfgJFyqfLzSjhcW8mjYBoVPrGnZeRfVA9jK9e95",
  "key23": "4XSqexw6hZ3Ep7GtRSKcaETA66ZE9SacFfrGArFjXe2pCPtKbfVKjjgskzYMFobwEeqQQdtLSb4w6LggVWWPas9R",
  "key24": "2BTHHPsSbKgWndynf4BMFeQpXRPLi67sGMtFzpgT6mYwLbGhHn44Xz9nuSCgsQJQyLV8xyy6UvaPbALuVJo19D6V",
  "key25": "3ABkuv6tNujYj4RLcSup1abUD2mJhW75Z7pri57xk8VJGshzkp9tWrgyKLE3DvWvetVKbkWdJWQg4RNTM3VMSgvn",
  "key26": "5KJfVxVNSaDBBkE42tcPE1SSjqVi4AGAJhoYVtKUBMTxZ5y8Dqd5iWGK7tN9GTZe9MP13QKqnLSSMkgMa5VRKQVr",
  "key27": "4VEV2Sw6xAofLjCVSbfkeqNA3ZaYUs5UKqyJ8WixVhuEdWi6XLBuVXtLJgNbnvke5eHKo2EvDvrTEuYXNWKzfqQ5",
  "key28": "4Fm1AWAvFTe89WrSFA2ELQdhxy5epa2Vn3qoFdYyrSoZ7UnuT1xeAgL65kH6Fks4MHiUyhz6W884qUWj2sxBzokX",
  "key29": "62gaECuKotjfjW6GaMFyZ8YBMrD7E8MzqJ8JowmwyfegqsTa4yen2NMxmZVMYfq9XZGxX5DX8vFBFr7R7dVX4jKN",
  "key30": "3ZJdGW89yTbYKsaevWbmkraEMaScnfGdudwZgP1yac9TERkAjJky1RcWgDHhe61gZZK7vEb32CECTKjoBgGdB9TU",
  "key31": "3QciiQwADZc5ZveKjjBfmgaAowPB1daM4EwLS2XxHJ44Knduj61wvKxupQ2XnMcS1uxRaee9K8CLxk85BGKUY8xf",
  "key32": "2SEXhu7NC9VHKv3K5d6hQRditDLd9Q3PJZY49ympcWVY1YuFrmhLzeo2irup2spHjghLai3KMQNDTURT7YDwGL1S",
  "key33": "2W9TMD1b2phYAv5KPZJzkHxTmksjonkPSydnoCpwNYYoQZWsidZuXM13ALzkrfi13vrV2GRdA25wXzDZUzBujLbH",
  "key34": "K5b87Qbv9UXFbEoSwqddjXMScbD5gAYqfgSTQJ6mT9sNKXTarZHpjB6vXHfmTTM5nXBmaYHjMuuFNDQ4S1imLNa",
  "key35": "51Jk3tT37U3qLowXP7RRNaFNz3aczszpSm65Qi7nsEinEqhP7H2ZY8GnPNfg4drhfSyHAGGhZL1VPmzvgrphnaaV",
  "key36": "f3NPENSxarzS93dpE6ap9wSkye4j2acKWMJB9KHvfvc96oiNsZs92QMo721QPrxgYZiEVuB1v8GiwWHawtx7rkQ",
  "key37": "3z7v3C18t1fGPGLPi5RaoRaRCXGbBfKWHA4ijFkMcmgk7KVtJf9E8Rzs4mvCSB7AEPJ1QfKzcy95FkTLdbXHC1Hg",
  "key38": "vBRNw5uhShtcUXgtvH8JsXfSaLUrCcymF5WCmmsPnaJoBjkyacCpb7Z9Lbz9NiF5V2oXrQb3HsHg5QxQ2utqUrJ",
  "key39": "44fqzpX4LXVw8FqDidJf8gcC1FgmspHYwXBburD35YUvemo3Hz4hL7w4ayM8BT9u1tSTGN8BE4HiPrKsCnsFjUg8",
  "key40": "5aV26ZqYJWeqb35xadCz5TxQqV2Dr9bBYBjzKX8wZdsXuYXrXwqgVJVanxD87YVeQDP381nj1zhekSahVFpcYW6o",
  "key41": "4RP5BieoRAMz7Bz3b4eUuHgaiXxqmHikLZR3H43kWpFp1LdSesxzEb6Erb7EaJjFFzhtDxvChTZ9vjkPWv5Vm6yg",
  "key42": "33XVmLVZiDfHnxoUDa7mcPg4xg4e5mdM5S9Z873UDFULjT7F3CFHQ2CVXzePS2VXweV4KgGwZoXszAaKo3PrcMoj",
  "key43": "3Hf6c3DMd6vr2PRLcWkqdei674WJgoHHpzMhdvaTS6MDVxVrofu95Tquu49fCr5DfqJrR6pYWJ6hqN5vV3xC4yhb",
  "key44": "2YR3Qh81oRsWMmyS4kx49QiT99bPQuXHVzfNm8MCbRZKZfDs7qxZAxaSew8ykrtuBRZW98U6tS8Dma6FVHpPyCan",
  "key45": "zg7cVBjjzowxVzd8Do4Jvz4rQ11yPd13C7SVMh59DfJoyFwezCxSitGxeDiKJHUYrVxVX7CqddYLA9vrkaUjRE7",
  "key46": "5SGggAQkmsRZSeEfQcVRBYguQWQYUFenF2CGZ9B6NNDnnHpZLT5DiGN3Mhj3V2BzXBb2kGfm1wxfBxxDFWuvQHbi"
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
