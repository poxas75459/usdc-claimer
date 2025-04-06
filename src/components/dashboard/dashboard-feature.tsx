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
    "5gqJwqL2iM2QDKMCGgph28MLNJo3ggbg1PQSxawDrDoyE6otXMfZVpqbNA5REpR6eJZJtfF73dkraYUgXDYMtLAT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z8yNvKaCiwTWijjdaLQoQj85bbWdTbLKK1SDfQ6jpQpJ19ku3qE6bRVapDdAfgU3LoMe11MdS88hKQ4Jcab8AVk",
  "key1": "2M3YUcM2j6DcLyCkepM69RWbU6itCdU6ucZb4z1czsrPqxUAPqXsawT4CnXpB2CAHRSVf3DRy34zVQz17MPCuuAM",
  "key2": "4B78jf9Qhevz2EQebFuAE4pjpi6e3pfArxBPjCLZfpqnhtBKNdLtVr8nSankiNecPwygDTaxywV7PyBfWRUsDHxG",
  "key3": "2C3fscQ8PbSXzVFnqzY6723KPoRLQnLqJ2ZDjJ7UfKx6vf36TixVYqesNcnjAEfoD3oWmVq2NsuDA2oibUowdC6A",
  "key4": "JYoaRbSTAjWoALHjGRdE9xCUoMXPx7hwpnPLyNbNSMi8EML2n2gWhnU3LqmjmjcH3CwVmBcRPSMhYY589bTbN3Z",
  "key5": "38WkePCkr8ti2advsyYKWmb14auju8tjvKuQkaH9Xj7biYARRR1gN8Ggx97T2JLYhwq3jJVSAjMxTiXR3ZD1k7mz",
  "key6": "35VAqvZ8Y95Eo8fHzJT6oZ48drbsW6s95HZW1bVQcjyU4Vzvd6SaaoHRnymH6wWcLpNzBnBE6joRSyvdLs5C1Ces",
  "key7": "2UHi1bai2GYTNNcaHWkxGPyHVVXNVhg5fPyM1g6FHm9fvp4AdHc8cB6MprmTLhHuxAGXhqjeL8BVz6vn1UWPf7ed",
  "key8": "5ZJBdqr3ouqkah848i6KeoT7ZECgeCsqTc7DM9id25srD1EtUeJgVg1Zxy7mxR4X2NcnYnZnWbDCNoFKGH7rifMi",
  "key9": "48K1DG8Kb4sKXk9zg8bZi7jZz1c9fW5ntG32Wc4Qy3C1cHw2HMD1CWaC953QsGP7iAuGK7pVVW21e1Nh2dXz3PjS",
  "key10": "3KZzovMu5MShhWt6zN7jve4pks1H87dnrxH7WgX72QXrksGdsoNZ2NAaBynmTr574Cdh8nWnWuLuTsRLvwdk4M1b",
  "key11": "56iJKfFJvrfnNFKnzJX6a4FkWdeZJGKtymPwb4j4v5DfFwBBZvRkE5mBtPrW6kmgdWa2Do9dBXE3WRnHUtnbdxxY",
  "key12": "sgurNCcmbShrbbG334nm3muWmzE3uo7HKHkVYuE7rKCSVqF31mHCRDWsN6mRHXSLcWxVL7Nj2No3NNmjoGFvegr",
  "key13": "2umVmrnwWoqvKC8Pnq1mLgBNej5p15BoeyorJJjWPfYQHHYFoo7b1BDNYN8X8EYAWLAQRgRgRdwm8CQXS84aBbvU",
  "key14": "wJdZ6pAq5g68HnuPtDjiatNUtMd2Auawr2NRynAFDCpKffp24hw7RZDudPzZedxia6zwh1Gb4YPfmp7GsocucKz",
  "key15": "3dmgSP6QhZFMANMritu6QAbaWGaKHeKrtTHhEkqkedgqZnkoQeEMj849gS8kHTPCatmt94uZs6KriLx8S1FMhpWp",
  "key16": "3p2VcBV8CFi6TNrqup7eGP8LQZ2UNjHPcUxCU9ZfuMcmJCa592VREbSG71hYMKH6UJRJjURk7a9aaU3WnTv4P4P9",
  "key17": "2cXXkJeVUQWJYaQuRr3irY4gdzf3MyskU8MAcnCjjCXvL6xEB5cru4qWZCkwz89GQTpDurCRWH6E9GjzdLZPxU8K",
  "key18": "2XJUNC9SvdG4rxzBUeo23wXUkTWFcxyPPtDko9DXE3DvWaDi8hb8sKxVnFMF2tiDH6MpiW1bVmkreZcqvgm9MABE",
  "key19": "43wPK7eZiBo1sotUmeCbnbfQrr2VyrA6YMpe8AoFuwAG8ZgirRD1aEXc7mGFjhARBCUXpknrT7RRknCG4yFKsuZq",
  "key20": "274ZBsXm7FbE7n9Z6qDLKLSrKonAiaCP2Z8xLjB3g2oDB5LgqN8F2Jra5Fvn6J55JCto497h9PD7QQvm1X3uVpoC",
  "key21": "3BEFm6B3fk31wnkzEesZac7NBDUWyVJWoBfqbgrwJG4ksqdVamLaFSpMyC99uLTo4X2ckbN9Vp2whRCgoqNBWbdW",
  "key22": "3pLN8UkpwJb4FeLRghzicLjmXxjaPvXtpaNmR4aXdWhyV9KiDcb3FaT8a1tEY1j4tvfcYPz8MoeLDX12rK1zS38L",
  "key23": "5VeuEdD81zK1hkyuyV6RBQ8oRFfZgX3wzwaN7Bs4yicVZbKYjCyhFJfERi9hbo6d6CiZAAkgDTvwP8rKRHh3T5My",
  "key24": "2qcqBF9C1RQCFkLGuvhwaLqXhrbKDAsWAxNXKHsUxLF76YxorL8bF1PH3fSmfSAK1a9CifiJvVEUDQGp4kMYM6sv",
  "key25": "4K19wi7qCJwpa5w9J1XSQc9BuAiAbfWWxndpRbw3mc4b6e5UcGKjuLQjNnVijJNVJADDdoxjzV928aAEsnAY4kRD",
  "key26": "4tV7vCyMsB4Bjg3V8mhxAV2apWDx12bv1u58VDqeJg8DhjqR17rdKDK3YtGtZRzR8AqoDK1VJwkQPua8p1gpTfeY",
  "key27": "3ewKVEDDBEYisoh56EhvKsoA8Fhy7CrvvY2eHidNtquZce7peZHNxmDUDjbjUaDknucc2cD8bHFAu7j9yEbgmRoo",
  "key28": "EJRBwHza5pCZD53V34jzkdWV4K9dqJsFWMbRgAgtowpjgXAxV34C1weMiw82XWZL314Hh81y18JuPgT48ENo3ZY",
  "key29": "2BkYPnuMYh5WRxgZcYogg8DfNFcstLPXFunjpjfWyDBw8kDwc25ehmzLwEDKPMMMtGWU6sKDKmc1YBraprpdKCrd",
  "key30": "4gNwdSRRe5DwPdS7dZ3j2SVRunsU8giv5ygfYcWifn4PRwYyRbeaSTpNCoMo9vbBDMbPcBh38AXL7extbbHq6xVn",
  "key31": "33sfFQdMoEJJv36NzUMnFDijW1PNaPg1AMWsm72ywM91iNRfdpWVX1iz7buJVVy3K1oSxb19zrb1YTNyWKK5k7Qu",
  "key32": "5jULJ5VW7zdudqVCU6FwcXSkstyFLAE63n2rLpC2n49TnPC1Y4Hi5myWpeBcBdwW5Z9sP7JdTt2oRU3jxpUTT2Qh",
  "key33": "3PjWsL3SU2Tpudix9Kk7pgbJuA4rktz7LYq4a2mtRppHwHZ4QPTaDQ8CmmGRFgPFbYsY4AyfR9xno27vEtF8DRHb",
  "key34": "2MrRbshWGhLNyWg2U7FifxMxbWFJz6BR6UFtpp9UrbN3YkZEH1SWR37oGaVESXW2L1YqigQBnh9bbwY4QZci8sk2",
  "key35": "3fgbdqPfuST9o2nCcuGb1hn2yGGyAsz7wE8hJ8SYR5hgXbGW8bR4Zdz2WMVZks2ZxsN2tyw34jN4xKNXmJr6mFQr",
  "key36": "bccjCJxJd5PBXJnTrBjkjZUdoKaYES7HnKKVHoZoyJYJSpFBE6x92psyA8PvW1STAh9DXXUR6sB2VhXyCMVE6i3",
  "key37": "2ztPLZDdNChD4CrKdHv4qqV17UeAAUGJb38HyweKcXzahRbXwMiZ3FqsiEPyVCgqthGcfvAMH6jHzgqeyfyRVwkz",
  "key38": "8JLXCFdHLewVW98xqzWk2ZsmY7EF5piwnT6Jmpf3Fswg4dTQXHyw8wf8bQa8mjri1enzxoBJC2oDXKKxQsHpccK",
  "key39": "ndgTxeu9D4x1aLnGvA2ox3Agj73u2o8qDDdbNS6UArcaDJ5pkwgBQtbDX7cx8AqnUJ76nw2EzTqQTKorTYu7Us9",
  "key40": "3gbyXa833LtgzJfhZY34dFKjRd5WtHH9jU8Ux65RhgW7KX9Zm8eU6cMr4ZpiRsbT5XZ9rGGt8FthmccjNYUBVtky",
  "key41": "4sshh6h4L7GA7jj8YwWVeBPEPW2gCtpiQTkUhVCLviJjKBUmxbpibQEqzSGUHVrS8uG48braJW9vp4HJQ4Wb8egF",
  "key42": "kvxQ2BdhVVAMdJt28Xjbhm6etj8Y9eaKArJCFev65vM5AkyCcrLUPoAJPtH2TEMFpqPnoHHMU8ixAenKPak4Ndi",
  "key43": "4KxE1wdxyJeWYiwcuEJKW3fR4fCLphDa2j3crja1p1t136dQFhspUJvmqP1Pwa9bLkR6EEJS877Bqx14LXyqTEk8",
  "key44": "2A1U8pve6FGDBZfhgYJEYoKBCAGWGise6qZFUm37pBrMk8Zgengi8UNn8uKe8ndTNJ4LpKpkUFbAkvUVb7NMRkiz",
  "key45": "5jReLn6WfusoQwBVuYsYpnXtE9EU2sqW7PSuKDcr6EvvLRaVH6wtsaTMjEjbLGHdGatcUd8s6kgNaDQK1GD47eW",
  "key46": "55GwWTXjcF1NPmtu2ZwDJLWH3m9ooKMGs6y8F5UsdRUAzTeqQqPZfqKb2mpyqp9tNY7JKgNCagJY234im73gKCDG",
  "key47": "pyaxJNzrSiqDmqrPp9e6NuUxQMrHRVWwfpyo1mmGtLTmAEUctc5Z3kBswNSN2fVepgsastD5Exx4mfXAFWPvkTg"
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
