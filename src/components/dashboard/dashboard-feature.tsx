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
    "3WwvgvRNwVXuAZCqmynKEXytpVxJfzPP3oRbhRErmMFu7o16ofFiN5TbDjuB4yVjYTFRQa7M7MokepHMfKLFGSnS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33LxXbiwxW5jappgSq3JeGdk89dpBkUGLXSgbActULsP9vPNnFy3v8doVoDy1N7dm6ihDzwUtGSkJGMw56hamWrH",
  "key1": "2vepCCVRU2r8qQxmKP8YKofRoBYWrPc9EgdjMNVvpySdJ5tNNwj9tbrQu1fTis56vowbwgradHuDK8Fukgxgg4hH",
  "key2": "5oLLDih4Ds1H1h3rhz6bMAnZx8VAquxfWkBDSPHkXod3bFcpHQ1cCjvCpvjFenGY3sMyHixnJC9RB6Xj3B8UND4f",
  "key3": "5CFDcRW3tknVdr5ocowEj2zFjCGhKKAgxSeEhTQUm1ooMd6jDsJsgJyrUXJ5VY9Ncda9LSEJoJBHuS8kNdwjaAhs",
  "key4": "5Br3NBeAwReQDmE6X97bSacXodG4qT6isShR9TC91STui3WjFUPD6FXxht3KA9DAoikL4VGUR9jKvr7KeGhS9dHw",
  "key5": "5zH71kYKd7Ab3qHe9LmiirNbeU3MvMzLejSyZ1MEdrtjwCGabeLzc2QyAVK1NTqvh68Afua9H4gsSCsdBWGQ9bVc",
  "key6": "GWk6j26GE9YD8dHEr5sZG3s6fQc9douyhhkaXmcBtxHjuq5BcZLss9pkddPj6GHhMH9hzWg4oQbbp4wApmRAZWR",
  "key7": "5FLroGy4ZMAhLTNXPpapditxN6t1vs76GbUXAifmVyDwkMzpYz6oowJAFPrKBiypUinzXKxALG7uvtKxxrnqGbJy",
  "key8": "3Ck1n4218adh56uVwNnjyxfeoG9EdcA4XZUy8oUkJsjM4LwrysvevCcNdvwZNC2GknaKLgVaqA6CyJqvPkKXKLor",
  "key9": "2S2ksuCDaLXwz6Zw4LnEo1Ld3fC51gnep5ucNS52ofaN13Y4HV52yXgNNdzkxsAPipBvGHMqrgoU8RZbdN3mSqTh",
  "key10": "4WKJZqsFu9SBTQc59TWqs7tTK9dTm5wHrHGweFS4PQ4H1eADZEN6JnBpcG66wB6Gi7wrYVWZZJqeKwqNQEygK7Cy",
  "key11": "4k3M3YfadUhtT9QHetREDy719UB94pZZm7DLi8Ba72h25BkDKs7Aw3iw4c8Yq2dwkY8LiLseEcs6rveDL5J5UREo",
  "key12": "2gWj9uyfWFutkwaDcsNi5S7VgTV8vUV1d3n1QMEBr5eZxWHeeM3zCWcFwmSnXeGN1uFEUa742ccFdtn2UVo2LzHh",
  "key13": "2LdjVynWPGaPosfBWuP2mGsMSogYSK4zyxYBsnNuUEfQsyJ9ohJzwkkJRSE1A7574svYFS3DLvpQFqzF8HAGNCbV",
  "key14": "4V66QPXkYTQ6WxcJKhffoCnVJaggfwSGxwJQbHZgjr2iXzYT4majx1pkvp95aQux5QSKXYQGyuMStUN7Rc6GjHnW",
  "key15": "4ha7d5uoRR4YPu1G4XBBJxvZUWE4Jii6BSBwpBaRqJTifesaYQnGU6gEZNWFtVAzTQwi5TVJ3QVzceQgyCZvCR1Y",
  "key16": "432b8mYkb1oueBF93KppxzqpqsFnKpExsDFVn6AWzwDMkaaWPDd5UjjETLQHq6nAjMBqEVb7K2f9LpTL3haRLaYi",
  "key17": "3v1j1YLR83rwKb76Mvh63im57sxum6DmusTnbK6evmwCqdtTJbJsT9X1Ucvgcst8xnjUpGizdRx168ebyjvCb4me",
  "key18": "3kJn67gjQ2TeRV2A3ertLvDispC3iVvrM9tikYjmf61osF9yxBbXcxzgXzb1twUQ7skUFz7Yxtxv9X2DRMGNTbjy",
  "key19": "3v5bpL6kVcQgBW3iE8MC683Jpnst5xh1QxZDonCxEz9JGLcVrpYC4mE262mh6ZzRhBV6EcWXkhB4U6fdzuU1N2YM",
  "key20": "4KxR1kDtU71kgf8ufuL55zhLPFRGUVtsrbYQtkhCPCKMwioznbhKAptFjSFwCrHEUMrCvprZdGrwDxYfsVPgV5yH",
  "key21": "2MKDPQGn6rvCP4sX7xCSy9nvw3zzcCp5atBnwZ6EvznMpapLHfjq1RT1WDmyU5rnKF73RnFLj2m9ebTt4sVpEoAj",
  "key22": "3fEAg99U6eZBy78RfJ19dT7subn5QpU6HYry3eY3SV9RkBFov2kuwqgvq2GiLWueEVmGJw8TKfL3f3NEAEnCvLTG",
  "key23": "KPAK66niWRLkisTUrUE7n71MqchPy6UNivTxLrVKqxrs4Q4R4jzQV4W2FYg1WddzhH6z82RNuRZ5K42vXekexVS",
  "key24": "5iGKzF34p7GJQc7fxi6DGJue8AWCQ8VLnv4Ma3YZEtrH3AFsM9rdKjTG3x9gpcSoLB5mDNvrwBZenZ49cZhgjbtZ",
  "key25": "55ADpiutWNYL6J6MRaUtm4JvdFvAKaR7TMfY1CZQC3JJJaiSZKwgKNekCVUTRB88w8EX62jWkgW19HB3qFLqWF7u",
  "key26": "4UDD8gSwijWGCWKcyuwqN6ct7SAPpeJ38od52B2cT8CgL1feSzWmE5upnGxFBqx1ZVGYyt2an4GYhwmtGCtMHSCC",
  "key27": "5V9QuE5PQxWTBNkFTMD1BZBtakWMckXF2Ha1vgp23StZqF9YDc3ejiNU5dxR41D5MKSX6sfDH8X3s9BvvHPaFzFU",
  "key28": "5GuMvGHy2FpqoiMJ5N3Dr3Lt8Qipa6HzBs47EXRaiyuhPe6ADjTngA9iuFGHEKkzswZiyDShpDMDDC1YgAzTiLyQ",
  "key29": "2BAqoXYmB17RfACUsBL1LEHCTsEQ6RVQaLdzx9E9VaAuevFtEaCQSahQobTK9gKtNe7dVYCgQ94nsTPf2DXABpTb",
  "key30": "3Hrv45ZxciNcSfV2MV2DCw8YdcgZxCbRbfs3fFEwQ38NbTD1JkMHejsYELqBQkbYi7aiD6KcQDVa1HZGU6y9bPzm",
  "key31": "5pUvRD6gSLee27812DbJPyt79pLvMuRyuCJRfWCTEaknDSVfv8LjvQ2twbC8WjYPEd1i52jPn3y7YyKT59AB6YAQ",
  "key32": "g6VkxnxScjVKZMXa4nWoioSUnRZ3yCvz1KXk5NbrCbAGLvsqTEnDCjeU7bJuDjYg9jHsHPcf9Gde8tXC9hnnenV",
  "key33": "5aVgpg91j2vxzuaZFDwefh2WF1p1rpgKYR9bVPapcNR59fsWy3JPH8R5cFKcspMzitDz65BMnex3rSfiyGZbrx4K",
  "key34": "63jgsvG8gh2q9dCKxnpvADcxbi1auGoKsmeBjvZLysHHLmVdjLq7PHW5yUjgAZg4bvUdb2j7fzFLSPgSFNbMnBjq",
  "key35": "BZsgp8Sq43M24QihkK5BUVFpCAFQJDayKMpbJYEiXAaiS19fW1FEBQx9QkeFEyhwqZg8nuSDfrSkvgUgNGjKWvo",
  "key36": "5JukGdVUtCtgKTgX4trNZFxhmQBpYBR4Yh2vmwnGruf3bZ81okCNM84vF451XPKoBK9p1XzGRu8uF6mPaemNnGS7",
  "key37": "JuiGzDpcC3EiLEnrGxPNPaUPo9p8myWSjUSVxdKEJz8h5gLdrZAZU3fh5MjRzPqL89Td491pKMC634eNMRFGkbU",
  "key38": "66rwTU7wgeMne2wpku5UobybZy6GEUxwzDMcRKfxKF7Ppqv4dPAKV1bWjPUKWo8cHAz5qUvsJ6a3QcRYqq84oR3D",
  "key39": "2vcPmi4CPk8t8kpAzN826uLy5qnHjLp1hmRR9Z7oH4pWiyM2kbj7bypyx6dDKH7S86vXTYKw4uq8bhRBLsThLraU",
  "key40": "56o5sMfTjiePYERinrqJkTbm27g1sSe4adyoyUC8EpPJd7W6U6h6GxEDAVYZ8VAJPwdca6XPwxn6vu8rDAmnEtsy",
  "key41": "4e5SXC1um2Uv4Q9qjufYnPXdNUhGrF66d6bQkGKJsVW9uPZiuLtpJkv8MYQxAye67pnpEYQFQjXw7pqqCqo8zXYm",
  "key42": "3PQmxfdvd1MTCa6vi7EipCaA9oFMcxc42X3YsAt15QHEQDZr5hKydK6fgCMaRs4yRGs7vZuwSZAd8DS1SxSih6dh",
  "key43": "4i2X5WhpcgDZY1aCFYPWYCKWnwJJHbvcFpYC6VxSudbLJSCznH5dz3CijQ5yDfJJehn2NmK3mfgV8mD5a2hW6pk5",
  "key44": "32yFK3ioVsr5a9LFk12MNG8EumoAhT5KgiwddhuKwqQXqMNSCg8vmSCkZhGXDDgSXai3kzwfG3XxFzvnPWRWQjbr",
  "key45": "KrwdSrukrk7rcqvYHq8aeswkgTiSHGr2ajREfVApoEV7JekMbM75HmFC3DJse63tg9UUkLm3bcmsANmKcQw1Vn5"
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
