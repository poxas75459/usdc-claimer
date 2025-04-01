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
    "5JCBEPJPRnC26GoR41z6S32YFdpWhxGp5P4hPFFV2zZFhipE64fCWBJMzDqjNJgHBj7vAFDwhiLc9PAy7vRDB5nF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zdBWnYkKcWmyozJPAzZPZYcJeW3AneH3aNEpEsPuVkvm69wuP6MbJ8rBCKgi1UnRBXFSSucmzWviCzcPAqDy3rN",
  "key1": "5JsFHsEMp6NgAiyxjNA2WSAxUk1pnJWgh5DiTMWH1KMeyhWbTxzd4gKK9FNnsJaBHg3aKf2kghBBNYj7p9brS8ED",
  "key2": "2iekVx3uVYr5KX6zUPw18HUEuCsPN2zsQ8Ma63AEAEfoZcLp4NzTF1eHanGY2FsQPwmq7bCYarsrPSsnwANoxK9F",
  "key3": "2jzZPDqYruBfMDoYwGyDkGc2ATUK86tykqCoacQ316JBPUAycstdfXZE58MPeQAMASL1PVZh4sBPiotRcJkzYbBn",
  "key4": "4qNC3X1E9jsH7K3tvik3YGNvFzWsKsQMbofJv8CPkvCC6bRRqbqD8HRiaso8jRDKyLCJh9KUW2dp1zcHJTGGBakU",
  "key5": "MbnwmAHd8J5qUjUo6xcsVkccGF8VMNqhGAVPiJwVnhfa64hzKDDgo2KfRd3fQn65MyKo7eiXQ5ADQ8ByLwFGG51",
  "key6": "3FQq9iSdz769ydgZPeCivLLqnji27jPqaaNUSzzmAvsJwEZv8kGDjRYLJShjdiPPwJuzr59w3nMNrEJ1Rs3B1KYa",
  "key7": "5u3sbuuL778tb44gzYJoJnkqvb73DfWYEbLJCbtaf8JK2GsJxPzouJH6jzthknMyF2aEwSw5gx2e87X6owSBQwM5",
  "key8": "4gREZNnjFQxYJ48rGHLpBMeSNy1ADFZ8pGuu8dUVkpGHoYShnpbFPN8mNbVqnqYtNd9hTTXc96L8jqehUqicoBEh",
  "key9": "4K8pzKHppchpcFMdJtJdXA2w6g5EADbcpuJUqJ1YDFZ8H3moGFmfob5LJybu3ijLN2TK6LJwD7MrwmpPf47UG7FV",
  "key10": "2i6SfXtFErYeSXna9H8m9HSeedeyGNy2k1FB7qP7vGrez7Z4y6pT8ptSGpXztUc8h9YeK6emLtS7aRMZhBZGMju6",
  "key11": "3g5imEBfttLVp5wNpis2x2nfzV56H9NBukSYip6Ug1BnGj1VE3LAsuChjNL5nRTv2JXey4tyAaJnYJS2iaGWeU4x",
  "key12": "5iKE4UKTU1pHEyzLad1d1sGADHbd6EEPEHcjVEarbd3oFvhJFuafGkqYLPG9Za13f9Jbya4YSgaGmWjE7HNV2Qsx",
  "key13": "RdABxcnMeshNFRJFVTctaQwrkigxngNipd1rHT6CzN6ZVriymx2tvFx5FLDqcAx6kA2wrJqt1RWVAu7LojmJVr4",
  "key14": "63MdS53FgM1kdL6miuuJXdEvoEgRTYX8AHq58fYeEBR9jMyWqcnAfAAzcNSH39DeK25r6UXYFoy9rdSbVqEmVu8H",
  "key15": "5TkrK1Aba54eN9Cv5UeJh2tNUaUPDNgZfEECyvk6YVKJYfZhi3KEnJVQgit12biYSsteYshVBQ3zenuy5XqJQeCw",
  "key16": "2tT1fGakMNM2jE8UcoTmcYtYZYSdRoktfdC2MQjpvmMggGTCHDbUaTCYKKwaXiCkKLcwKTfw3FADotRtXNa3auYZ",
  "key17": "2b1mHvQTxhEnGZhsEmKrSUJFGdM4D5rENSdEHU1fY3A8RALkkphaoJ8sRE4Jeuc9a4oRPNquvQuVRyANEnRSoLa8",
  "key18": "28jDj3RLqgkdo95BnY2GwdU1pvjfcb96Cp8cHhcAc5t2BzJRm63WZvW3SqyMhDnPXhXjx4vUFfzakM5XAwgejgio",
  "key19": "5oEjVZYjGFAWcc9SrnpHWRhQTqKhEKAn5Eqh6h9tx8ZNss6aMYyBnkZJNAZVTmPQT1rDRKrnAQKndrcaLDpVZGCD",
  "key20": "5r7zgDt298tEsW6DQJzesGg6ArcL2H2m2NGxt44Y1YBFdwrDavs6DY31LCWtoKpXpzEDtQ81xEngCmqh1zApG4U3",
  "key21": "4NrBEmQ2fkU5hvLiPwQRJSad4qVrcxjQDi5u9ccCNEX1LTezC9Fi4USNsJJepst9gXbFYWnZ7DWdwoeDZdd2d8Mi",
  "key22": "21H96AM1bFNrPs9HmidBTGNqAzK6bpoYGxBowQ2Sf2NfvPHrdR2KfdUq6Sj3TT8TKVkmnKow5ZfGrWvtbWyGYsGy",
  "key23": "5bF7Dz9AaveLHnPUNRi1A2aZNGw83q8U4HtbHn7NARy47WyBChhGWJ3DeLntrtXPTYkwx4joQLBXgYXFn9VVFHxc",
  "key24": "46qY3UgKRX51r3ERAMHHAVz14XrekkC3Rh2SPAogidCPM6vZXqzH2L5bmkEezoFQQGX37kqBiRvEAkiCuSRReVUg",
  "key25": "3oHhFtGGU2MUzm3ABgxRMSypSXqne5faCFxRD2MATCkhnF61UMWgTuZgRCP8eiiVw2bKnRacq54ySqwcnVXBEixN",
  "key26": "4HqRYADYZPscL9fFwjCWTbjGSrX8x5BG2c1L1YfD38CzctK8prW2uUZ6ay8DQyRfp663AyaK6GymnExUXXxSLX9f",
  "key27": "2GEZcrEwYcGYjfycPawCY6eHKVhoZx19Zv9WjCizzWcS3eDoWRHZ3ogPxR5T126sweTVgMVhvkTTdayLGC5gAHbT",
  "key28": "2m4RkRgxi3WK56QRwbWYUiGpSEhxmYbGaJQjiQnxqMujtz8HBLKdPe3BixXdmpMLEeYxYZSeBxL8RnJcitDpPmTW",
  "key29": "43c7Xp8EEdDimKwvTdCd3qEK2YeGoowzyrFCLhjbDSwER7rKWYHcC51yNDF7bbaGyQbX2MaJ8LbmCBAMtYAnEBbF",
  "key30": "3GTzUhkeM62CEKkkaWAN3Bzz82xrHFHKiuecQJHizb7iW9fGuM27YX2gi7awK6htVKwKMdHjg8Nfe2GkeSTMSg8Y",
  "key31": "5TLXWCz1BAEhGfodPCzesidzV6bkqQEsFKK9CicyxJE2RKFwSMjGUmkKRvGfK3CmBdY5G2UvLYz1sm67xWSJNdXd",
  "key32": "QBXJpuNGeGxMhLM8cZAVoEPDNRA391pjDuZLxhsjy5MLKL3Wnc8C5kXrGPsse2nLYE8DT2u31h6jPBkMr1pefpa",
  "key33": "73LcMpKNNkASX1CrZvydJVRxjrHWKmMyZgyzcLdFKNoroDw1gQeCJYRowyFXnprWEbHof4x3ZUdftWDu7hwkD6c",
  "key34": "3Bx15QanZ6EWF8XxucJahJJ6ckPcSDZCZFEjWGUFyKuphFv2xwhm6NznSXN1APR4DWeXorN6pf5uzMWzKWPjXiXn",
  "key35": "2zHof18pbrB6KmQWAj62vqvjmpXLMxzzGWRZeuF8urHLEHq4Rbr2Kwfta9BSYv4eCQcmYtumqGioFYQQbswu4YkX",
  "key36": "2omNkHhyTkjhEQh2yJPaULhPuR5VyJ854zDUKPNexAKdULE8x34QWuHtKDHDYZTGLuG9JdvCjzCnqX7NrAaWfcXX"
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
