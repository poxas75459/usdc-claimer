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
    "5mVvTcavzeqCBHBZyjJ4WpPmgiQr9QEPjzFvWyogrVM6XUEbXKajmeKah2dBqTjBvUi1HrQPbKCf4Vk8Nst8fkhw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uCWWeef5unubcXyZfomJP3n1fWhF2FzkM9jcyz2KADqmw36ZRyunC2k1LXKXU8TCQDD1ZeQHCkTuMbLy4eubmeZ",
  "key1": "5Z9dHVnmCbjVoHwLs4utzjs42kevA6Ko33z3AgcfncPRfmgbzxVDR779v2MLdgFnaqPChQdxDUXkfyunhThu9RgE",
  "key2": "29SDwTZiuVvpC8xfdsTZYCjz46BdVfUDGdg5CMTbuzviMzunfy3hW88wydXvDnc36xWiXUPhkwvR8xKfxJnnpUkk",
  "key3": "5jfmRN7GVxC2ga7wipHsWnaVEvcxF9k3psDtMfTZrvCaj6FCnPLLSa3xbwUS1ZrdW37vXF1bQ7VCo43cH8LzXvs9",
  "key4": "S8gM4UEENB6MNUAC4C9FXqVhamaedMj45Ae6ocJdHBQiR6YncxAC7dwk8wEWUkzXEvdNpCz31EywK51LcxJ1P4S",
  "key5": "2RZYoLYD66etBuVyyL43ZnwPm4fbq3toRiN4w36qd2XrMi9WuCNd1fq8xjr9wUGZsQmxrv4hBu5LKZhbKVcpy5yB",
  "key6": "2T1PKEGyA3sx8Exo9yKBFDnXB5PCAULaG6u8UsDULe3cjRYBhSgqiAPsQD1akhqvkrZptnrPbQDgncF2Mk4PiUwo",
  "key7": "38mhDNxbQS7vaTWE8UgsTvvikTTuLvdm7fw6iJJGVAkEtn4BSU95P7sNm3beYEeiKcr8DjNLe1Qh7wM6wkrBpmzK",
  "key8": "3dPYWgne9nnCBjaLQzuakKni7WdxAc2zHDyguHj1b91XZ29vFSSskr6LujkGMnDSydVynSaws4qRNkxmBWEhA7XU",
  "key9": "kRvDGFjrVWuxyWVm5RehtAWEriajdfVcuLJXafy6GD7YEx9SHjDbSKcbBkHLfMX2SutLHUBh5yeTnusbGsEaGm5",
  "key10": "4BRSdSHh46Z8y5C8fkFNowKrKirpERS1dHkUorESoHK7SvWtiEibYU2bw6dRsmkA3acv5qXGipgQg19btzvD7kpk",
  "key11": "4dMGv81hsCQqVY4U6SZPXRZPRiKm6Y9Cg4CjUtx7vphVNaE6ePf37iDJ2h7hhfB1qwYxnbxwzyfSqpdLUoeQxXLs",
  "key12": "2b2T7PNRwDFudTJPx6f6D2XaUyTVQWv3wW3qDeTrhBoc7LkPqp7ccPrWH4fG47PHtz82aqgMLcV6s4Qk5t6MZeri",
  "key13": "4pDvBu3DYwBjEdrCrkUYk3z2vpy7PjqZDCBfPqbhhV9256USVGKAQDBJbzQef9GXwH9RQmniAPrL14o6dLazaLRC",
  "key14": "4s6iHnCyp94x66BwjonhFbNSBCsr9KdhGbHcjYj16LdSRvcbsWPwperggBt7EVSgqy2HLAv7kk2VidZhumVY9mCb",
  "key15": "56RyQ2phQLQLXYmPK2zUktUc9nWfjfNiSyJ7ug2PH9S3E8DxLsuT9PH8DjgwS2xqBK1QxRQ5CrMeKA8RG2kfwCEB",
  "key16": "3GJWQ9SGvMxDGUNxG2wvUHf67UQcoqJay3tBkw3i3FmqL48StgKzXvbNGrkqbSX4jambXeko9gLUVGY2osVXAGxu",
  "key17": "4C3GryqyoNQnFPGPMbtR2qArDu4BZiCPLKfrdoGgQRiVZUski7FFoCysL5JZhzaEj9EXzGKPdtjim9cYu4bsSE1q",
  "key18": "3FqF7Hhg7JXQ5W7mUfU3251mqs6DXiHN2zxckzez9of7dQBprLMjvNqvRv8gtMHsuGoZeJ5UJT9X1F1S7WPnNCXZ",
  "key19": "3jVWjz3aCqt4PCJY8K1N8qfXatbBjj5zpP265yrh8TwMK3Fdjq67jS6qANvXDyYSvU2UybfMVHJkv1FmE1tpceoh",
  "key20": "2zLpskUPy9cquACro5FGUPvCbM8kwZJG2ieWhJ9hEDfKhLfR6pkF3ZCa5UW5tFaxAbZQPZsobQL55jqLY4peanWN",
  "key21": "2AGWjq6tCEPcugiuXjJGhP6fnJTPVzmWHq5d58xgBm1ynMhDQvzZMvb6z6Xa98uBZuRfTBKMHAVH4hyhfrEe96cT",
  "key22": "5y4zQkgMcjs4wj3AjFSJzXrvWmF2AjMLrFGgaCJviaSvDzh8YLTC5GBZispehx5jLuBHy4CqryCdafJMQ47drmBe",
  "key23": "3FMJxGKPsaBEdEGxvBimcPXRz9niZqPscbDUpd7vGg1P6owp4U9BxZApEGyFMjuiekM3yKAmV7xYdjm8TiMmCYjv",
  "key24": "5DfvvNPyPNpSY8BbLfoxb58wRAGe5q4o7U1MtoyrvTVWwCfNp11xURBExMvNjsYVRu6QGCmd41sngrfv6NdMzS2m",
  "key25": "53da2HLc6Mk7fwxieAbAzyd2ra2WcY851RittniXKLnhbZv2vvmxoFwHDmVJbese1pgxYrywtu1jHuQBCvDKzkSF",
  "key26": "2HEi2hBuA9rpEs3Mh943esuBLDHuz7Za8SNAZYFNuMzMMfodEsSj8FeZEnZuQEgqntq59pSYcT7pAKY1XBqv8zZD",
  "key27": "CsQ7CwDDybG1dhibrwJex1psu5dkkBCMA4dq8sTep5X3m8YFgw3FQ4wJo4kXzmPqQzpZT4mYoJd7WmFeyPyQB6D",
  "key28": "UCykG5fJmoNzrzQV6VygDxAPkHPMbqFghwVvAzaUmNjMqxGKYkBK658648eiPwoq4PjSCyHUaDBUBMdqg4Wwjgk",
  "key29": "375j7CAenawayQzakEz42Q61DcksnFAVMvdCPzHgK5BX5oWNbvCuBLiAfW5Teixiv1GvUVgrdJgWtDdu2ouP5KPu",
  "key30": "wVUSdmFmgtNnNgWmJKt9cGGEVz8UP1YwJPbEgfAvcgBkM1AyqMrRdMFZ47vHS2EdgXuciFF8oBLZKY273FdeFYg",
  "key31": "52QEsy9NmnJCZSY5EW1LE3stJgkrKeBjDgB6iNePhDr4ghiJgoc3PwkgLypuvWndyjHdTdtCsAy13swg5Qq7X8WW",
  "key32": "4BTSHdR5yYDr1HoC4Ho6r6gLSMRPcqCeooU1m1M1bp83ZAPGuqsGsaiiWxtb88r473Btx1Qswd42tRSjimRfaxVv",
  "key33": "3L5Cicd13BNCZMHBWdA9bVyzYvSQFovToLyLB8Zb7qshmZWvhaepyPadHQGwCFbxqYaBdryZ95jVYx1Q6DiwCikg",
  "key34": "ARhE8cTbHLhRgAm8LHDZyrNHq12UPRojE5XipV9TTieBy1rZqb1fm22RfgYxn2kMdhVoCupMhhkt98KXpxE9rAv",
  "key35": "5Fh8vXGhahR65LFRShnifCJExZNgkBp4QU5fMBj7fq6NYWm85z8KeEG9AxRN9uKX7WNSLi6qTuFv8HNwBrfUSxzm"
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
