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
    "2WcMZYCUa2mnFi7eDFLr9gtiuKCTKgL9VPqEckAP1hZHM51c1Dw1g8P5yFtnaF5ffj9E9JG5QhK3AZtbcvwkX4Kb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DZeVJdmif4krUhhvn9aN9cVvBSGMiKWUP7YdCt9hDu5TYojQGVNi55T8NNXNVVh8h7sofPVSEnMNSVe53KBFUAm",
  "key1": "2Dvk1scyk9A2JME32bd9YTeS1GLDobyPT2U4wxwn835ERsJz4GihmXqfPAXX1jLXe4EdJ85YL5raCj1PFj2DCWbg",
  "key2": "44QfnQk1saoCPG3jFgcraJ5gBrECvVei5uqhvcRtrdg2M4ev8Rut4pRCysA1MHB7qdE1CFZUEvZCNbBnvpXnMbzg",
  "key3": "4wxFJzebRq77LCDfMdx47vZz3gYqEiMKuYaBkTJZ1Ta4eQNNLsfWwkJFrAJruHy1ZmM8c55EiuFnHKwaMAq6ubRe",
  "key4": "35KPVcR6NowoLfF1rMvokdBwMksoxg7qwNsfdxni98F2HReiAutqR2sGSXUx5RMp5UQb5eVAmT6isJyjDxv2WTaA",
  "key5": "4eZNfF9tXcHB9P73sTvMsXk5QdoroEijWCY33uqrq4PYsrWq7ekAfTBEs5fz8Zfpn1ud6U95ztAayghUuqd7Vwn3",
  "key6": "4hHTBhr54F4N5a4Xnq28DcQM492uecnKkEuE8P65PndUtnPZ5ypkJTwoBuLA1i3mMooMrLg9RSELGXzx9M8gkuEz",
  "key7": "3msvvtNUE7c2pAebwNcoeWeTgKYk9YZMu9zmSKdtqxisVcNkA4nHpgoEABwnRxA7miw9aH7enkVVvqAYbr1TjBVD",
  "key8": "2kWidhdpLU92dUkRB85wcwHbtmNsEjTcnL3pc4XUYQ4qJgNyWdYRz1zCde4CRPXgRd1kzzZbvsgsqAfAavKNXbzP",
  "key9": "4pfHaE92K2LX9BT2CY7A8SDZ8QE27Vsb9mAAPjWxbZaAJmY9sg5pTxcVimrWBg1XjaCPe1TmvLkMJGxg6rbwhtMT",
  "key10": "38uKsc3s2GhdSRgkNC8LwYh6obFze1gphc1cbmEGDEgn4jh3qn3rWSq5PWeuMYYemeMhZ4JFMZ5epe3YJC8nCAmi",
  "key11": "wXuSEuyuVKRUQjf6ooXRqW1jHQ6EMzxKhxxff8pP3FE8Bqd3PT2qYPpXZWfzpNfMBa6Tcmw21Viv1D65ks4J8j2",
  "key12": "5g4kaGfBR28JB9cgtGnDeH3LtTLbW3cdahb6UPjdCEmun41T5rZzDAd5AW1zEzD2jQR3rKhhrmkVo6yyPtM1FSdT",
  "key13": "2sKafTQV1fBVxVx2iBaFrHBRF61sGSfY8gYbxZXomhXqiG7AivsuNSvKz7sS7UsfHAhSTWEeYgxKJ8KLNC8AJ7y1",
  "key14": "RAzA7eJAvLvhFHvwHDfP8r6fW5kbrtCYx3LM4jQf7fhAbEBSwoPJTKt1ptg72gkKDZcWVscVW9mu7Ns2NohPsWu",
  "key15": "4xfRGN2AN5F4h4wgP77v3f2n1egEweMrwF3Gy4F2wiudQqaZeoZF1UK7mhpjVDtvbV5X1qHazBQBy9jiNct7mPPZ",
  "key16": "4tRXQJvTwK9NAfkX7TNyz59zdY3UFhvkuL54evepgVyKS8B2KghGS4iVDY8bSBKMpZtYXnFdoGaGoryEUdEyuPat",
  "key17": "5jLiJ3oBtvqBXvgT5VjcCB3j34ZyeKdEv1NrFvmBUSJ8cV8oc9PGs6YxiJjX75f4L29LkqCut5U4ccmzdBcvebZ7",
  "key18": "2szqL3u27NW12Lo5vuFKE2ezJHaZYTwTxohZVSz42GzmGZopY6rawZPXGbDBxMD1qPLjec5RRh6mizqFj75V2JaW",
  "key19": "33Zg2JqDR6ANmdip7WWGbi4H1rTNyGWeZvBBBGkNunWiQ8RkrwFfDh3CJzkKZBrMSbnVs9Mdwh6AbSy3KQEt6mKT",
  "key20": "3PaGGqrjxP4nZEBsp5V9PrhNWukm7xGVjqqeKKRGA71arZhwQ7vqtFoGyMh4CwnF16v6N5agMqitWQt18JRCc6vB",
  "key21": "3bZoYgYCpCJSqnQK6X5WJyrP3zFGGTHanAk84iP3mqMvNXwhWUY1yA8qMPra7YufiWq1bDNzUjH45a47SeQzNEXg",
  "key22": "5KmNapTg67p3kP4VqvH4rodiFnkfU87jZMMBRDArbMbspnx1MbQD22ETFAAVGyHui4ToQkEmYaSpn9fHKsedbFKk",
  "key23": "5YNG9WTEFxdTmQb3EzQiizMRASwzX49vzyyXYqvotm8j1BFRTcupXFGoBRLNjiFQevWGaY9yPNY2LdeFDJ9vdPdc",
  "key24": "zcMZjuzcdbuJLc2ghHB5AqdxvX2Lk773sWQuPHRmBJgmsMUig8c8qMTt2QEePhFwBywPnw22GYHKp29e1tXyr4c",
  "key25": "3hY24dwrPDDhWg7CVqeg3XpfHSAdvRm4xi23ErFGqLKg8uLGmbRShu2vBAtH9tGoJ5s77xbeKuFaxLjXPSVmWPFE",
  "key26": "2PPNZTVVEFPpCKs2ody5eVDeQpnsJoLAL1TmfNMUtHtHcYHEWG7Nw8VqVzETuEmTZixGhjKaA9Ns2yLjYheQm8TA",
  "key27": "3gEaJBMShw4bBQBpu19th5hkkZdM56jtBN1GKrx6DJcJnFB92dC12zSVViaKuaNWufah1ehcngD1w2NRPW4fjWmi",
  "key28": "2tM2cvfhUjbW1EeEP1ygT7btaSQaf2rWAFA6vRoV4KNcxXJKSQgWsEkDzwTNSVSbD2o8i9AVLpeMzZHZEtxa3N8",
  "key29": "2Apje5fdJDLUaC3z5QmMCnBhdYjHm8uoqg3SK4jaxaZxqRkBTXaCd1GSYGx6DFtzKgQ1QupSVGyMDUFjLq1PqXaL",
  "key30": "TtWDoTbirsuYkekzmYib6ybajxD9eFg5ZF9PH46UjEFxyxcNEia17QkikqypHhBkhDQn4YTxfz5aPdBtTMMoJjb",
  "key31": "3SozCPM4ojp3zfUwsxsnWTznEENoRsHkBP4twCSuLjsjWN44fGzGxJYNHfdZstSK4yJbd2GufxHAc19tEFRGTySS",
  "key32": "ecc1PQ8jUsojmiRkkiAJXBFeC7X8M1tLqyqTdQXdmxc8PPXEmu5xbv6tTpserYFNMgVJi64TyNuJ6oNe9zYU4jY",
  "key33": "3w7RYRePbfV9HCfn8SZrdsvvf4J9QtwUqUrgiYzhB9jRDWvJnVmhXFVxDCpz4ECKYmPinSoPic7C7uzT9XMcr3up",
  "key34": "4AoXBTHiUe3kcaqpsawGAa59q2zYxrgXwAhPjFCKcC4zuBSYFVKiactz7vfx8F4vEjqUhiYHz7zHeGD4tWAGhKMR",
  "key35": "3RuvafEWcbUgv9Dxd7LFUZeMyZqbYkkS7fGLqLT3kxaLEabriKzp8Fhm7bGudMN4rofatAycFSYSFvSapgdj8RvM",
  "key36": "ZX44L74DArkbCTU6HA1Craj3b9CGThY13bZXe5KDEm5xM9YYL5gfL6afauyM3Fs4GkN5YhsuLC9EpZVXrwTGv33",
  "key37": "D9Kby2NUPVJpCEVZpkzhDkA6L53vjfy5fvB12p2oPzajEq1PwrAUg2rj4WLccQDqgKJeCmBtRT4ZQifzF7G8s49",
  "key38": "q8bYsG5djDgTXuXuJvNqvvTodi4in1NwTPdA8c4roHpC9dRXAibxSSwjvKmcugp3NGkVkR6tB17RS6JQJSicA6g",
  "key39": "5MkcWDNGDh6xvSq52o1uDLTMJmKq5mMwoCH4DvDiDLufvsaqyqjbSc4V3NHWQ4QdyiD8Vfv9JC1QcowAitm3BELp",
  "key40": "44hb7WB7emrdn2ZCTLV8rEnmHru3d1zWZCeQbWfEKHAkF5W6QcRiQehbtrv3qHMpeHKw7uC55SmMySEpQFoshxcD",
  "key41": "47o5rytKU894bF49T3HMfoUd88qZX659Z143FsryBYnjNS739sNbCrWXCkyHXcpCYB7VCX7Xmx1EtjTarZwzqgw3",
  "key42": "4rydPRuBTaptTdAyA6ikFh66NCAKn1hnGG9Sc6Ek8iGLhcRosgXrTt6fXSCiCLZmgUKZXLgLPY8SWenrS7a7UbCb",
  "key43": "29VdYuy4UcMWSE629MgPEbadeHDhnDmCr6SCtaZz64rRLzZmaSXgNNk7oKBTsFj2vVQ3nU2utf5UFuhoH8DTbvnz",
  "key44": "5emSZo1grC9esUqpvLEwm7fdXAoEYPim7LyTTDVpfb22ZEoBczuAVDSX6VtwinXkVwo5Rqm4qEpmJtZ3ucbbrXEQ",
  "key45": "2sqfm9qKm2fJAjnRqUWsXJaJPenvv2tcH1VNVLkRw8FuVVpEVheE5ppLnbfDZw5AtLi8g1hmPSisPzacczUBCt2g",
  "key46": "2Cc35G4Rx2xSXyZ7kYroec1QumpgbzBo2aCMNke4eMnkE93rEsCRAFReWPHWEdqxFnR6EoW6wtJzVgomz67VGSrv",
  "key47": "53Hwsq22e3PgpD1M61oHoLE17qigPpYCdyEFhdfDngFH4Xgdbh59y4QjBE4ZcbwVoNDf1HwpefFZgA4DPJHp9xma",
  "key48": "3fdgvJ9eATTGBsPac8ugqs7kpTwij9RDDCnpbA7xMx8xGs7L4dCWtWC9sj2urLGNfzzQYbzSpZfn8baqnWGUmu6Y",
  "key49": "2K6bdsEB4My8mCyZKainqfSrV8hA954BTMm8pkzah51RGRBqGkJeCZvz94BKjLmX6Zm8zkUBY4d3KGGdZvjnp8kE"
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
