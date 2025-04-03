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
    "4eYFsya17kQhcupTtAMY2vN8fxg1ZX5NfUz87dQhFi4LpTz23mWYMB43NtKLwz11hCs1G7BoSUdGNuY9CeR6WX1G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bCaXktWHP4MnHsfX7DTxerXivmmrjkcRZFNgzCRAo7ArWYR3jeppv8AsW5TLsMUMc6MVhuvA9fbLczFtehsjDeo",
  "key1": "5BDymg5szBj3YpV9iMo6wFNwAkebpHLapwntXqwKnX2gLLKyq71ognqeAqpvG1Lu6Nv4fAd9jZS1NtAXkVESUV5U",
  "key2": "2ToxbZieZ4nC6uvFofycSuX3VAJuBL9rUBoXXoyNDoCCgNTSGJt3PQvp35bNUYkrp1gVmm1yPoxYp42w32TxTZQB",
  "key3": "3Zir95Fzk6xFiAfzu1UULBemXyfHhiEQ1JmKDauitajDw5AWsPAqN1xcqodBvYPq22p9dEUmuejZVZNbKAx2tG7",
  "key4": "3UR5V6ETbPvAC71N4CzwFLs6HBbKvDykMQuxG4gh92Dih4NvsekfWMbfRR78tgQz1d4Ph1KNWU84mSsjRYKUk18V",
  "key5": "3HSD2pHnbC4sef2zvtYnjxqkP3u1ucacCtqZ3FiDd2BE8h8QTsDBrv59S3Bj9cQTF3Mxtko2huPdqJzd73p3be8a",
  "key6": "3DA3wHAjYuiFUb4o2ccKZf3YDm6LnSFPrapuAVhNu9cyhHZ2UCM6jHDAhyCdoSXj3G8nCkLDGtLX5wJpt2iUFPsg",
  "key7": "4JdewPbDzc1dPUC53cT9tN8mcgjLwGBx65mrKfnFa3Bgnzx18a5BhobdjoqHpu3MxkwfkW1y4mcBPcSaF1yRna1Y",
  "key8": "twdoLxGaZ5ah1VqvLGRtPsuqvcgR9QjtQAYxjAF16dWu8bk4kqatKineF5enQozy7GrRWR965PvZMNgjRjPNzbZ",
  "key9": "2JfQfwijRLddUYjycxW6mVR715jdCTFVD7xCiD25SpMX45pUVcNoAWvYQovXSUmkSRp39g35jCuXEavPaNxaYzg",
  "key10": "2Gb7GLFMaJuSSz5NDmCsNZKSi3MT7VmUESJRpSTHjNy3arns5H8AYX6P8BymNUr4eRduWLX4kvrJAyvZG79BkfbR",
  "key11": "2i2uToQmZbrBQzmjxYAnaAtncmgmSCcwm1VXSRkfDXoHpNm6rG6bUcG2rmJjMTGonny5yuN7V7jFy3vrFrA4CngE",
  "key12": "5fyi9Rtus2vAt6NP5aakkJPDoFEZAaSpHHM22gHKzYTiMtvqfeHvCGxwHWewtyf2a2cUGXm7M8wG4P3KPo7vtjFv",
  "key13": "4gptfWahVi9qu93FfWafJxF7mciza9efihoEmRAJQiv8hVj8zr11mmCaJUTjhoA7AMotT44JQPFexNCHCaLkWkC7",
  "key14": "3ovtaWp49nCr1HqLD5TeJ5u8Z4VMzQSBxmH32jnZaeeXzoL6ztjP3wUt56iqN2VwyhgH6A4M6WV66gVHvNrcPWL",
  "key15": "kBcJP8cWpjiki2anDacyjr5gTL5vYUejx1HStBSUxcULZ5krjQrnwYdnR32CTUVBsHjYLRNynhNTQv5VoEJZDN8",
  "key16": "3iC6yBQyEhdUJ5sVGJtKCSEVsoZ91PbFZd6NQk6GWokfNesA5Sx7yTucMtbxySv8JassZ15NaEhVA2qztVZyJSKB",
  "key17": "2GHsuEuAZDYsZypBmLQaVaX8U3LhRrpJnFyudu3JEuhMgdHzkRqYJTp6KgbUHZhpUGMBMbrF7Li7472PqH6zc68v",
  "key18": "4F8RpkaSRqCmmG2sF78PX7pQgSGhHeeeDFVM87Rst9gh8McaxCiDuyod2rV3oBVh58iRDxfGEsVyFKTwvKrxVUJV",
  "key19": "2d3V7qM8dNQdjkF6VpDgb88PbzUhbSP1H4xgXpn5PNMsnB615jdKC8BMVRgrHoJMHzPSNrm6BfEwZ7GJYuW2tQ85",
  "key20": "QkF1QGN6neaeF4QarWFHsa6uESHYg7rSHcxtbc8eEedbUFxBpvTM1Rh1JGe9XCEa2T11UhG6WdAYNUKDo1AZ3PJ",
  "key21": "xH1wvnQ6jnLgK4GicEr4nSHtJVsTiZ7cZgDWGSUkcR4hKXjqbtppxTRBmdoFFWUS2iL2HwXGSpJTpCpymjW81Hd",
  "key22": "36WiqHtDzz6xZfXGkGptZiSBxnf38K6xMoWVRXTZoZitVzs3eLmLbpicRwLrQpsN9ycvCQiuRC6nCd9uNBHVtvBB",
  "key23": "4kpFQy2T4G4B9tPBo43DhcJfW2HidzF35sgKB14tosBHuvJ2174mZrFmvDf353ngXURJ28hcV79Za1UebU7BYofi",
  "key24": "4mKuuyAVNgN8WoQBsbBYsmXb3YPCQJF5ErCscSzzcCnsTfd3jvRKJE81Wm1B7CW4DnepHvcrg8VAFLpbkf4i4kih",
  "key25": "4Ff7sZxS4EvqX6QaW2Jkp8EXoykNN4jPyjMJULYYfHnBgA9hucCae5pCUYX4Qqvs5ARuhnEKCiFSk5yM3oJUW2J7",
  "key26": "4mjnpLDKeAmyDsp4DUsSrio8AFZ3RSWSai4bhaK2MNk2fWmoMvQe1W8JSBevZ754jq9biRCP17fQzHrJgAsja35u",
  "key27": "2oerX8jYvrSWyp4sU7Hvfd4JdMeQbLXQXrEF9Ds14TCQbtDj4PpxoXPFtnSYNo2PAfv7YTotEwymkVqVj9kYhMCv",
  "key28": "mV1oSjCkPUJ98LXojiSVZofuCjrLrUWcQHpi4293PZK1HwSy6tfy8my2eQvawx3yUppbizp8Yv5PucQM4bCz27h",
  "key29": "5MAuMiU1uXZSnCbCJVXSBEe74NnkUgeghTGFpHBviVGS63qyNMXQLxgRbZwkBghQgQTVGiX8vywb4z9NMmKkrbsX",
  "key30": "5UvYTgeDJKsvSCdL14APmr7dyEH4PonuYHXgBrMDsRz5gbUXDkz8CCedBBgLXaD6CjqLDg7zRtWiodz7U9NNb13z",
  "key31": "2EhoBiBMXEByekG3smHPekyGeBEK55tKGiVQSKLu9aZShGceG92iKueGmewJgWEgyckB52G8zAYTSXcDYHAdQcTT",
  "key32": "2dKB3NfMo4tSpikZfjWWVhMn7bZj8t9u8ADFN6yd8csdXwvvqsri5eMfMVJ5ktr8BAM7hS5dpAx3cdBAri2A793h"
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
