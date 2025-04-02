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
    "2KATnpRJjhzEiGnejqm4i6YJQwghZrrEm8T6hRxU9g3RDfTZ6JaSaKd6oDrZJk9aDVFARSiiy93NFVva9kaUtZmB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53jwtz8iTNSNvGFETPm8a6ewjesDgPTUTXqN9o9vAxpcLm7PETGDa93uGJRxnuRqWkMQHoNmhWqzp3STbcVMipYj",
  "key1": "4ztMeAFVPUB5jEpUCTLaBfrtg2Qf1AqhZeVjJB8mAZR6eXybsuUMdjk14AA1x8oCw1K4yN55YBKyhM4C9WHA8DbL",
  "key2": "2rwgfvmijE7TVTKiHWs359aEL2cE6H3dYyewieLvNay3PwashVTjQdFugU73W91vtHXxRHvJkTDt2aqksdB2jqFY",
  "key3": "51MCNeh7J5bmK95sNqASpL7tCTJUkq6UrrgqDWxNygA8YvG1A5kP6APh9BnXcRGnn5WjX77z63KXV75gsqBBaffK",
  "key4": "4Nsc7a8w5CznqDByw4ivCNRv4Y6ph138izA79dVcfgHraRny1vvtu1nnop1AZZEs9Ec3f19A5hBuBczSffgZHaoa",
  "key5": "2JeVMMFbWoq4UXzxb1fgMk4yC7s5uUzdy9er1BDF5LpdP87j6HA8JQW1amX5xBd755Bjo5ikPswMJH7S21mmqStS",
  "key6": "5S11WQy71Vqsyzo4SAoM2ySUeimnEogdJobUdtqs9vQj5gvaJCf6v9aC1vqTYwQ1rhdsY7L9vLe46X4nkMrWaf9h",
  "key7": "31a6uRWEJ6VRNtZ4J1dpbQRfbDKHud48r2dfbTA3WrhQNKZWeH4gQ9punefn81Z2qJy6gaSBLuoVbSUKV68EChU1",
  "key8": "38DaCfzTz13gZ19KSVzS9J6B96iW63KG5KD9P6PLAt4Lkif1eW5mzQR6bh5Cdg8WB8ZtMr6nL4LB35k6kmFreWtq",
  "key9": "55tRCi46MNxYBnfDfPG2MvdjerhyiVPZVqtaxLeoaB1wifo81dC1jVV5dMe5QQ8wkQsb7UVm8LjfagXh14xW4ayT",
  "key10": "2u8uJ8w6RsLxQUqrhuHuWfcRQ2up5dR9sTwXv2KAoKpxKNZArxv9czF82YpPJYBardKyHCEDiCF91NcfGXdAFxc9",
  "key11": "kETPtvH2hp3muiBSuwr52rjVSBL4HmkkLndTkdiXeuuxu1hMbPjE46bcGtVHJyhpXvvCEgXNMo98KRn48ArohQh",
  "key12": "5e1XgpFUYmLGdLD6NW2DzWMjZ7P6gT4LFBUYnG68GT1MrHm494wunWmDjVD7Y8Vx1ynvLbWcuz1v72cwwCBR7irk",
  "key13": "4CdhrEKQUEHe49Dvwy7EUy94rFj4UzfeojejFdbt5BeWYw27U4xyUiLcP4TJYBm58cg4pExETjeZMF2a6iqf6HCq",
  "key14": "2zWJmWWA3DhPBXDt6pZJLprt88F377N7G3A2tNE3rLUyx8i9oRGTy6tYnzJRuhF2VwZ7cDj78SnLCCgsrLgTGP3f",
  "key15": "5PkHgeZXmW8u2kNv67YheD4ZQTgWi34wVbhHhDAu7hStJw1KGVYU4cJsR4QoU4oZRQs3RsWjwBhF1gDUYZEpvDP8",
  "key16": "5EZa9eQrVQG1cbfuZa7CNUsqQ4jmhr38DKyqjENvcdwqtzwDdx9h2JBC9m9iMZiKo5LvFthJJhFgDcJ8WEsbBEUg",
  "key17": "JbpB1wnT51GqgSVagkukUKvkWiNPkd3VveQdjAmxSYQw355bCGHmjku7GFs8hpPL1tEe9baPWHtCX6ZTxkkUxra",
  "key18": "4PKoU3kbdN243t9VS2knr1LUovsTU1GrvLZUEK9cNa6wfcMbkvKL4uSu7RZtFVY8rsyQ7iW3JJQGj4z8jDDDkBka",
  "key19": "34nrQmdjyGwYV4U3LvpMqV2SycChFUYj975SGprudfjYKPZAi2FZg2zvnt93kMqSKtWna9pMu8ym5uT3VALyM2Ns",
  "key20": "5QC9JebTjyNkb9uhRBsNWaQWfDf4Wdgwo3dkpirnjP2a1ckPpdRxnCpEndEbGDj9fazPHXPMt4nKDFYsP5aXJGdR",
  "key21": "4DiVPUAyugxF5qhkMEKKfUUFaTbfMHNFKxCGmPMo4MbYGi3TgToatJVzsVQsdUBnniTT5q1q9RHwj1RtFJDcs2FE",
  "key22": "5J6jqQLrDVmHjvSXAbdJMdeUcVmUNkq5xv57zQme8VMW5JdecxvWXqiUzD9sdMKbwFXKB5zeP98trUMS9nyRHFR8",
  "key23": "2ruoVvuUsBiL44kfpCqsq6whrSdDsdPtYGy5Zhfo1TvY1AevUmSqV1FvqFp48bwXaF8xT4YZdZhjfNCsDD9bH3Az",
  "key24": "2raCHMnvK3hhNwcyYPxswg37sHizUHrP3avEL54agKo9WdSJCsbxBFGoiFY1FBEMZB9cijQ62ZXA8TG58qANd856",
  "key25": "5r2hBaaRTPvwvb9eaDLqBUoMw1uCdGHc2aPHNsSpK7GERfPW1nidXDV5tigr65e5YpUp51w4hbJmKK3EGVrEe69X",
  "key26": "io8vcjFaiznuoVCsuzot7hCAy7gNxZqEMvQhrQ5LcuJKjAj8mKRX7ZE1T8TSNBSJ1FiiSF44cuacFVN7fjvRPWN",
  "key27": "46sziF1Nfa5GgrYXmWYaQdpPU6tdxrrLhPm8BKp1dGtw4yH495UgYAaurAo8nMP4YHsrTssR596ZvotX74Sc31oc",
  "key28": "4Sft5oxfSxKTCCFdu7R5dPKZr9xfpC6txGL2XwqqBJyq6zzpmkEzYDX4gpRCGMqhTwQ92oDHrgqodKuBtmqLobja",
  "key29": "2bmceLm2vTEH25xjZEivKRP5AbnaFWVUkLqsoCkVwhJHUUKeFQxtBgdRMVuhVcGKr4b3UtG9RcVnDHJWPEDkR6fF",
  "key30": "2ZLXbWKTmNkEJ9wsbC4mJzreP3yxY24xyA7q2ak4Up1CuiXtDQ3nJ4geTC3i3zkHbJ7rHyoYEDdJYXDWYsbRgmUV",
  "key31": "5zBf4BaV6zdbkStDsGcfDx1gCe2fXYYAgt91P1wPrvC6AokPRV7aDy9NrprQp87f8jwyYZXKzpX3WL1pynRWk2Zk",
  "key32": "5WaL7j9ZWkzNuHdVdmDyznREDUAHiJ2mTN4BFeSLqm9pXn7eAaCr2xnQ78JvsQPY6GP71UkNa52hXFwdKPF8nZHL",
  "key33": "3kuhGcbp2MFoGNNtTDAEBTTuBniaXUTfC5f97bmeRZUxTvZW7gfdyjafgLYHSatkdUN2HZ8kQvP96PdMijoxsU1P",
  "key34": "BVtwLVmYp7v8NzZTZ4464vXDLpKN4vZghrZbg8D8atPT8GhYtC6y4TT4QNRMJQcqjCi5fYrFVYMkSo4dMdqTHGD",
  "key35": "27NT2Y6TXc3qWV22UJQC7vJnmJEfH3PwBLftY1Jk7BMmuoLmkvCxSuKuHxWDp7u8NjxZUDSx1UZ6KvHAur9YTBW3",
  "key36": "2owJ4ELgdVygqREhq127kDYskpgZAY3P2i3AFFsR5xBJmhNhmQCs54jEvozP7bBHVLN4uLNtZBWEk6GP1LRBCksQ",
  "key37": "4bsJD2WAgqZfJUiC3t5xfF6t71dwdt3XPB8Zzr5GQ7Sy9B8YSiKP8jMBiEXUgDTmAyNtwSy7y9A1FYbcchjQFoRq",
  "key38": "4Pq4pD766JmNpXi6JRcAmTPw5eAgthLi34i9AV7Ps3M2v1LVEE2bAoSTLGpnigfN2wosDVGGXhvmn9u6m3pyqeDq",
  "key39": "bu7o89we4hpr8gadEvpBqdiaqZdyjMKzpd4NFh2VP3EYN5PBLievgCE48aWHLxB8hP8he7G5gyWSqtgcrmzGHe7",
  "key40": "2iuMypkp3XMrWzNP7ay6aGpeqEi4tUUBUEKQzbwXemuUF7UvDdkpUq7rqCdkaG7yuByDzfkXbRjqZ82SEwQcoPzY",
  "key41": "3ybP4pKLBwNSoinLrY7Sr7Gjmrz6s5DmhZWfmappjCSwWN3iBbpJ21yzcH22ZD5Mc7tMbxKFsxtDG1AEUhQRJRKN",
  "key42": "3W22DCMbq5B8wCiH8FTgFDLoBz9RSnYoNRVBqYFabs1eWQSbmpvUTAkuCC5JVXmF41dFnFN2GjAHLwAf1jD5vjWT",
  "key43": "TdjZXNz5kdcYfQzrZffzMaEizBBMcoE3SZokf2e8BEHnwa2vxwbN2NkL4TrHbD1Puqm4cM7BBuXx3ptATMeso29",
  "key44": "eZwxP2Kf3XB7uNuoDTLHAp3Yt1SYQh39B19Uk8r6rkB3LdXjmWhiVfQBdySQw6i6NxiAq8J2JX3Uthc4syTz31L",
  "key45": "4AZaJfd79urcDtPHGDwK4ZvYjjmciZAuGpvWpeUc9uwczYS1CARQex7KfNdyLsGeNpozobRge7K42qLWEVixEyua",
  "key46": "AKEhEqhfgvtLsrXEk54XLZLzopBsPNJygSAgM5id4jmAQMPE4VyvH3cE58Dhx9JmZcSgMi9GJgAmgcghwYSG35B",
  "key47": "2RfKaSTUVkGuGdHEAdjvXH9n4nzk9AaK7yQ9FuyzS5tvZFhnFjzhxxnwV2GKGC9PcNouZgjQbavoDLdycRH86yTn"
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
