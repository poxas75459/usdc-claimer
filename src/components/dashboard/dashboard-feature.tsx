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
    "578fXbpSuFRqxtjdo16fzdw8yiGCDJMiyt8Evqhh7THc9BpGmr5SAiwP5RdWjf223Md7kBDyJ5Mgn5i7pxr5UeLh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pRvwBjoPAarweybKjnXkf6fe4SL6KnDXRrTRwaNEaFv3eAiE5YJg2rZuouFHTfYHZcqryDoBCQF5Xqv5DyGZtpq",
  "key1": "qKSPuvNcSSperqir9nrNQnccYH1j5PdG6m25FQTSpEtKVpp2yxxbNxXCe5uR5h5BfZnzaGFNJWjcsCUAuKQgPRA",
  "key2": "4KCGxtcvyfdYexW2sbtRbDx1HFM37MNEEo5678kukgAcG9A8ZMj6V3saTH5zLuyfmRK2eZ5i2fe5zEqHuvYCVZrZ",
  "key3": "3bzw7ambVSXUnSLkcYef1CgYbtS4zVQyD8z73QF4NwD3ipQsUBNrNephj7tnqZngPNNLynxHjWCGodVBj7s5aiLJ",
  "key4": "4RW8in91jVSL7wWcRCyrf8Y4AxMCCLiq2m4C6ynBd4mkPkt3aggnrGuJi6pws48sQ2T8RJtpwQBT4TmWrcZHopGy",
  "key5": "4MUBtCUSSAHCaMF4WUrjjxhncW2SUHazFkSbKRgiQfPupv3EfYHZ1Zwoi1Wq6Pz8xhFfq5LWVACjFsYENxjttxRB",
  "key6": "3TyejtJApygYT1HSQQV3MFp9noFfUtgcgmzu8u87F4Tb6byV5xmyH1EYepnbgLvfxaFnHSiki84Jde3XhJjpjdoi",
  "key7": "3dwMKA7596rhrqF3LxxHYo3U6rwgj2r1KCRfea9RSMMuHUEga3GRZbUciwWjUJuDXjBCgh2at4TvJkQt9Ws7zB7B",
  "key8": "2uduTQfrazgtsRgr9FpQouLhXeSnmV335YrrDMWZ8Bwk9wxH6iS5ZxVxMFfPEe3oLWpWT5mAG4MBS79bmCEaYRw8",
  "key9": "MNbn7bfM14g3sfJTR6N3cjfwtEU9TAUk2CCCW9JvfRzmNf4yLjueVB4Sezx3EyXyJQj3xDvrbsVA91ayNTH8asW",
  "key10": "3sCVeUUeWLnKfmXgjBNwGLAjH5XcvzMtJUmtk46NMPXigABQVSw3FhovY7zXjyQhoiTGWQ3Q5Y5G262AUfPR7N1J",
  "key11": "24NwUstLZ4zpGwHmZ7Hgpu5yMA6Cw4d8ttKEnsJQZVywcJTJCaY4geKxfp45YTeEfyEBhbHSswctsmPrvsQAYWcu",
  "key12": "5NtfjyZXejyRaYZCGnoFq9pi5pDULRdDYVeQXLKsEsmD4s5rEiZSEV5HgE1WuoCh9rh7ZSqPj4fkR32BuWqiwUTt",
  "key13": "2dUz7pAiRGaXjicTP8EEVaHqRTKmjFSde8NS4ZJmGGNV8Rr8nTfw6cjoHexTUnbWWT7F2vi2DR6TzwdgXybgZRUr",
  "key14": "5JbJsQQcMabyBGnKtGBfoMx3hu9irHviGRbErjBFCvNmz9dPotphUT1eLpJxTmdTNqB1jvCLd2hn1iEzrZvodRBs",
  "key15": "4gfJ2jc6bN2Td9ho4YHev7drdeMEDYmTSiAswk8sMUzbjsF9qPz6hcnMvCAwApMz71UGs9Bh8wGLdYVhSuMzUR6o",
  "key16": "4PCTSs9kXcdsRQpHXoWA7uVTnw9tpcnFPVpHndXucGzTMmkcJEBDuoHS998Ve361wtYMb2jWGDkyp74dbGrBMk9c",
  "key17": "3f3rjFuhH7CtWDZjmn3AD5XGxXramHBiJe2HDDLGA1dQiYDES3kKHXD1tqiXssCKEFQ7uEx5epXhHUNVmPC7DxUy",
  "key18": "HnthVAzA9RnLyXntF2R11WcB68iV3ULhvPoceCfR8ZJ1SoGyYYJT8Ff6RJ9kLsPWLR8yrrnMff5i42LsPViq5f2",
  "key19": "5FLo2dWgTjVsfKCjPDN4mvENzyQBRs1Zn48VbwzaJWFDeL7zd5kwMFDQqRiAPiBKuLknUu2E2hPzYFh1dJBvaRuc",
  "key20": "dKwBxzsVmfy2E5zqFDbUkWJ4VhkuaYGEsw8BiTCDMFR9vavKRw5xoKNfyAYhroM9iuRXCKUXsdnvk4KyNMTq6y3",
  "key21": "4nGjR51go5AMiRXLBeo7rToKcQTdpjL8ARHtVA6EcvtF8iPoKTJerCQNCVxHn2iygSSZER5EiYqCbTcZtdm1dNoZ",
  "key22": "3LxaQTNXPxBjkUaGS9gSfBaMkDBd87zzc4zwSG8ycwmiFsTrZuFrYyVicbHLuEChBuPMFL1AQAZdQ85VH1UUdifm",
  "key23": "5iuRDPsD6vzLSJBNpi7Gqx6nU7RPfSPGhRCkn1jkJghK8msAqsFPaPBKBjmqdKpT3thtBDPFrBUNEhcgfEAzz4As",
  "key24": "Y9HYaby3TMmdo9B8viEuPquCdjV6z8wQ9A4XAn7rEZ2uPUnWZPNwBK3MvRtRywjA4bypuHhpT3WJWz2c1heNW8D",
  "key25": "4oiJ9HsVcVsYN5HGP4dLcxzDXf6Bsc9uVT8W7kTxr6j2Jnh2ALW99DA4Q52Px5iWbzX21t77e1kbnrMDakhgjwzk",
  "key26": "3zttUSP4K5fqGQVagETq8tGygbSWw3sdTTnrF4Psq9NCcAnU7pUZpHKwCbpjxtkgHU8GoPSSh3xjjEcuZsi1LTjb",
  "key27": "266raoiQngsZHkACBkywNi1tVJxzhSVD9pRgc1JweFWA1kb8sU1JwP3Hj7DegKSDZkm3cee9Ec38Hokc6NM5NAPJ",
  "key28": "fStJ4RZqsEYQfbNj2UEG5ntX7xxGot3cMZjXb3KCXZA8LPqhqGJE9Ztx2nb2raerNBesNstcAkxHMkvxsgndNAg",
  "key29": "5FJ62gZhhJrPPEEYnKyVuvQibL5iBShaNXcpVVhS8V57jMHXhyGmQxu5yWTHt1Xq5ABBWz1c32v1sfSr58af1szV",
  "key30": "2WSnEotz9saGcw4NB9EwuomZNrHK7muWReL5vJnHY78q8Y7ytadkGuX2ND6XkkKdw9fEZ39AheSk7KPbJWmZqXUq",
  "key31": "2oJhKPSbaiP4BMvJUzcqntdQj37n7kwAAK4qkDfxsJVSuyAuL4UUhtJRiUKw82p6ptHuMXYN5n8hCQSfNQ5kFGPW",
  "key32": "Lu9YkSdpeKtGVWjLeKaGVMeqnpw3BhibhgyxVcuKqgFUvkQ78vUCGFGYtc7HSp7wYq6KwGRZjqPpbTuuLhKAqJj",
  "key33": "3gothjXmRYrRfJsLUkMxisQmvxejv3PT3TB1a8sV4KuVuqygCNDC3Jdw4PKdtVXv7gZUUgizJJYZSt8y4R9vwy1U",
  "key34": "4q29Qf7W6fog6wchNV6hYUpLvosbGNfk2SiPPBRq5zrgDAd3686fYoC7UQ2g96zkD22MhvgdRvjUZ88pmngPYrXH",
  "key35": "3eurFKHu6t77zKnbzSQuC79u3XNGJuRHBfycq1nvsYAW7wRBDKSYvWv68xjiyJ1GA5avEtV5xsHXNrJbdoBRWmhF",
  "key36": "3qqbDK5dahATkdoa17cWrocFufcTicQd1S7f2oA1R2adAi5bSvg8ddBospXorwkj3K4XSAUUmgzPkQLXDNAXe4BQ",
  "key37": "3eRMF8hDvRRprMoJENgo4qJARuUmVwFujD4U36o8baQ7rLMeScc7Mz89VC8BBeMF1LTAzeaamKVkpAUkY7rXJATU"
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
