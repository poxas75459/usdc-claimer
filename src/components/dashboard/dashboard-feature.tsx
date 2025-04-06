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
    "5J5HokVfyrahuQVDNujkhhGpsBTYKbyNTGXQXC3ufyaHtHMjM22wxVbWQwjhv7ZpMzTYgBhuGJ7BXcofxizdX7Nq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "W88LwZxoy9ooWGDos7bS3wMPFPvWPYuRRBBGhHxafoiAKPvjF3Jip1qH5fdTEqQ9H8Gopf77ujBsxrdEQq14gUj",
  "key1": "4wGyUouSdvX92kSHC26B8xuyifEntJzuZmj1RsmYk1NzxgUuqkdzwFL2gwQhqQUZCmKLQuZN23kerNQMhYwJ4KkG",
  "key2": "5MXrokvCMxJtZB2CrTvT1N7KgNydTzbMDyBQvePVqS7mv8GmxUmUcA3X9LbWC58kPm1RAkdNhaohisYmRqLbFmza",
  "key3": "49Qjr64i3LpLDNm9PhV8PfXzxZ563tjH1dXKzy4r2Sj4bsYnYReatsWyUGG41Ne96p44J6cgdRc8XhRp9qJWAstU",
  "key4": "4jdRw1GnaugEXhUweD6QEiXbWACss35gT9HEMFrfKDsk1AxPTZ6QDop4PAeeXatNxHn86Rorn9FTLR62Ub18pwzk",
  "key5": "3fVDA2Vmnj4HAaUeU1NqUkgWhnnj92HRaXnDCR2VFbxky28bgnytmaqUFeQdvRcvrKSpD8kYfD21Dk4EGudcXQwx",
  "key6": "5ctYHKkkFGjzfaSp6HBtL2RkrQaZWmocC8sJHEna2LZjW5i5RzPJVkuzZbBVDa2E75NijshPRhg3Fcidik3vuvrv",
  "key7": "3qjzVKiRaojnRxXwt7Ygvs1xD7N521u19nqR51fjSN6W1B86GdvZFovoq1LnkQQi2wTTWGj7b5dVop7zMTmFW2qS",
  "key8": "46Gh2ibymYtUMWuAcmK1LjSZrNeZ5JnWwYy4HXEqzTC3FKPQpV9G8fwG5B5hkq6UMabRw7gMiJx6SDWxXdj4y8AJ",
  "key9": "2PEczKc73pmW1ApYB7pFfDxHMiGRvFNevNFbJ2ZZ7dg97vQKGZEtSxXhepk7wSG9JLN1B61hkK67cL86oSTKcbbo",
  "key10": "9FcWQ1SV76reYPWLLA64VvkiNUPrKLKi9grTk1nNyXLCRQGkqW6C2Sv7UE18r9XLbzKNhaGrB4Zxqj5pyqG49J3",
  "key11": "DuZs9Nwwr5t5KATciPeRv3agKzvyVgRuu7BqvWvN3WKzUeVyMnrA2jqeLwiHHRa5CcJDLAKUrAsVkp9gktYwbfr",
  "key12": "yhkipCbsWWBqdm8mLDwJTojxbEzfwxBE9VgvSFb36WNwaP845hEHqvLbF5uc1L8pTJhAhALPmUcUDBqYH6W3r1M",
  "key13": "3woogt5WbdmEZed1WN3Kxx2XYwmKuz7pcz3NBmCpDPgVaKz5837eyAoJX7EC6KETdsKJQWUFuJMFJRSjProoeZ6o",
  "key14": "knQ7vvnGtfyXGqSxcdrhg6gXHbxBVBcJJP8v42Svu7w8WDhEt6pkX5EADmMTg8KUn9Knsx2jMieG7A4PmfmG4NS",
  "key15": "4kmtK6rQc1REuD5xQmXbRbULvYyHKmjyUv4ed6JggJ86ucbPtwx4xzDitYWWkV4wpy4uUiBuFFWyAjVE8tK1Ap4q",
  "key16": "4rc5qUxyUFde4viy6xxrxnwc3csn5A1p1EwVbaqmc6JZG1hbeRN9W7T3jaVn2PTPt3FrcHqFoZD3rfXxyWHZsbnx",
  "key17": "2t3b83tEUSLPqujhQgRvRrRL2HxkH9ZZVVUgQRA4oy4qyuj2h5PcSnKmTq2mDk3kS9bdpJVFkG41sEEGAjMUbMHW",
  "key18": "3g8ftnyzQ63HZxdadb5qzVHkArJdDSurPqMkpzNwnc785fd2y3DHj92318ZyYEpBeANDBxK9awuNR8peNzxzBEGP",
  "key19": "p5XtrHNE769LVKWYezBuzVYdPTM5YFwrfSyLxC1cWCQXSKKXUDVy4LCdPbQhw2YBM3MM12ygqxxQzBbQAAxMgpa",
  "key20": "2eDZUMdpX5jJg9K7XFY2ipB4RSWzfdJASA1svipzKQvMeXbpsJmUjthgPB1vxw95hBs2Le3Uk1M5L2UP9ztoHLZD",
  "key21": "5jBFSUebno4YJjwH9GLiFozY4PJ7dmm9HZXY11f7TBB1goGaYaop9V4ozv7giikfTNz1LAX9xvrSRhZEEmrifvPG",
  "key22": "51dtfAq2dR3SbzQrKwuzuxt9pZTRzgfvW2QT5ceHXWfw2g4sb1gXz9h9n3h7o23prfVzcw4MVBoMQdwWveDUpoSc",
  "key23": "3pvVekFBmYfr3RzSb3dHsbf9smjf54RH8NeJpeBDnKtfeuaLY9wDydd45TCABa422deksCyc6MyYkQc24Mzidin4",
  "key24": "4wzESbJqpRXynvdSjVW3fYPvtNHbA4GTLvY354joUiQnLVJbTFqiBEbg1axSYhU87ZpeX9TwpV7s1hz9D7MngFMo",
  "key25": "5YgdC5p31GRLHNHzMVPqZ1ohEZ6EKSWf1KNzVSyfohCACWi31degn5MxUYF8ReGmJYcrvJXhP1a2H18vrDp9xTwj",
  "key26": "3bcARniwPAgeZ12jGoZ8mDSrZGYmV9kWspWozkVLRBn842wTYtujSFedRHVhe5gKLz8dxNfocfMniYqLaVfHAeeh",
  "key27": "3tDKJVbA5C1TRhRVFLjM9sAZygBELu9NVWVLjrxAVhB8GpaCv7eKsxSoTQruTVdqCrtm22kmgyFmHyP9dp8r9Jnf",
  "key28": "5aq9tXy6MnuBFTmRP9SpWaAf63HzmihGwUausrw2K1qVGHcdiVAC8cU7kFpCgEAjUq2sVB86Jfngfn8fwEf2jMdh",
  "key29": "2Ro5P8UWqQtXQzENNbzzwDvZ8W35rTYDVLZ9veVn5rnwBMkHXZKSJr4vaQmxWSvdVH17iKG22zZApvdWhxkWYN4E",
  "key30": "4rXLW1DTF9XHPUGnh3QYSkgt9fhn9kPwuu1cbFuoFmoz8wviBUnM5ne4sdMa7caN67YizMer92DSsJavENN2idvh",
  "key31": "3uq74Jv9w7ZtAy6j7zDTQ7zqbsqnP2ybQPvLoXg6WStCx82DW2soxyoiASrPGWSvADXiDNy8NGroWTkzcKKxzZcu",
  "key32": "2Hcsmrq1XadamhQXnot5r9aPoK2EJYtt1uzyLM8pBZ88vdscxqiJwETQvdifXpuco5asNerxNndqucwEQPhDxihg",
  "key33": "aB8AEkyzRT5FtRBfUVg6ksUPexzNbvsXoSWLVHoNrheS5MFu7LcZ8EJCNh6KGY9k4fsN4aYonJ9mmk5YqV9fEkN",
  "key34": "4owqUJ647mbTeU4UmbynRDSMfRFzcCNHJUym6mho2RS25W7REsgt9E2iwuaZT5SsKkPrRos2dfWU47hGnRJg72H3",
  "key35": "2R6V4RnJ3DMFttUYPqwkXPmMj5N7Ztqa6L3auuwLRFt1YkAQfFWFpwpqPKdb2cUAGFdyUEmfGUkLfjvpWPnhNsES",
  "key36": "524JSdGrdiKuWp89uecCquxmVfUJRpVtq7QjogAms8eMwCaBd5kD3qJp1joC31Pgg8ibj6wd8wb5K3Vf8eqs5Uj9"
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
