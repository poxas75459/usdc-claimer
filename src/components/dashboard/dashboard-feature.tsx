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
    "5zTceEKw4oMooG1YdwvwxUcdET68c6ihut6dtFgitnavaPw3ti8kbmART5s8FFQpArhVsAPoUmrS6j4MR4Nnr94"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L3jmLx7Z3wiuA6yKwrYpU4nmHv7tNUZaX2DTeZrxGt2rv4WgNfJ4gc5WYNE3njQAWZ9vPmS6AGk3pqt6p5vRw1K",
  "key1": "4Sf35EEDTFZs4VXQ2DThg6VjSUo1xF7wnMHiJeZvVmecvZhazYNpxJGDK5HPft8f1mu8zQK6vh6W17MLfVsjH4HW",
  "key2": "2VvRW12Kvd1x7hk2kt711LuUqFFrL5YPzdLUUCKZgoNyPCUB9Me3KEKDxtpQZ1198KsAbiPFrjcpZC3W7xd48zdy",
  "key3": "3b5DsgVJsXRxDUtzcgK5m8LecgMf3qQfSbbAqDcDaZUEz56eAJyKkVmNc26p76FWK6xsgt7E4rkR9AaqXbRsfCYr",
  "key4": "4C14DmeZ2ykseh7HomtJfY277bk8LRjDFRPdfoWeegQTBUt1S8SGoKLWUsteo72Dzgy9xYXm8jVzw8KTrqLrk14M",
  "key5": "Gtwef7zVcUCpFcf9KDk1dEnED29jPVDd4yUMRsd8iBLjqxysTYukKYT5r7y2qG9vikDT3isB6SVXiLzSMG8yfoB",
  "key6": "jzDfLTeW4BoeXatT7oSsy3hrNq7WL9MCMAXer9PQYro76FviwqoiFsGLWw7PFiiXLpArspnax6hoeYoPcnYftra",
  "key7": "2zvJz8djSmsYsW8tBfPzJfRtBJbymDcTnKrb1RRoajWb7oiRUBfB1sf5RnGHe8k62vW6p3ipQYMVyUHNCgNQ9nZG",
  "key8": "2qjAJjXJvXfKasMohDqDi5vFLqE5qKAV1pX9hH1rfVmY7AyB7fVBZ17VQPTpuscjh8J31DMzVqdp6p8VbqLneHog",
  "key9": "4UXpNQQSCRyatMyuB48U5jDiDr9JQSsqrNb3a3TLRZZnDyR7HUsiFEWgWQT3MxmKuFKSsNmabcgA5Zfa1Gsvgr7P",
  "key10": "463Ty7Hg5a5NhtcTiaKsWBczshutvgFC2UTrLK35Crgehf76Y8asFuwvQsqPJdftcGzafac6Pz4UihXP7QzxXzBc",
  "key11": "5AdMp99EK3NqjRDBAcw9tnjzjiNbfETm89pefyfGKCgy8jXCKFoUf3Uoh6qYmGh1VogNebqPwVPYc4ATRE69yHCm",
  "key12": "2vdCEh3yRFiiirkZ8BrQS5J5PSjxT928jrFjHbb5wdyhnrSQfMhEkHaWSZutHMDYRV4EWGgtST1BTZ7fuLo4bXy8",
  "key13": "KgZ8SoX3oQaVjUdDAV8RPgdPNtMiuUcPu4bXMbwpiz8iQ6DFnkQh5C9aX74qvp4ePaqorZ7m4sSHYXnpHsFNHhA",
  "key14": "2DBQ9aSAY12FkUzZXUuS2YnScUYH2jcPJVG5fGjKhZ3D42MWgBCQvYhPAxVGGeRQfH2SFghodCEtrdYmtgXegnCc",
  "key15": "5XWwXwcMbVFzwJsgpu4fgwEUDEC8qhuKmPokFR81QqqpvX153qfQrmfWrDcnRnGdECQazQZTMoKs1r4aEJDhzZiK",
  "key16": "5vVWrtKGv3dASXJQm38fZLhsBPmre4Y374qr828uF7TGEcr8sFR29vC8veejF1FdcGzjA5V2vbawhfS6c1KGvcsq",
  "key17": "45fPxzbVXpNphadrRiyC9w3KLEhhdyJB9Fu36b3j5hbhh8vd2b49p8wLX1Db9rZk1GgpR4425z27jCn7swpqiijj",
  "key18": "42muNz4BUbzjMCM8RMpwGvBfKhujwxeCjbCb2PnvkD7r6fhZxUYD4DirZyatVpF9Hj447qJuEhg8uTqNZJ9ZvGmR",
  "key19": "4GN9wKHeg8AakTbwFEhb4GwJMbzZCGevb5CLZRNyhd6bzkmj7t9YDBWc254QCrW8Jxf2XFboLiU2boANQXnAdyW7",
  "key20": "3fgV8ujjd83foiXb9DSmG7q2DED2YnmfojcF6JaRNsViZgSBh7TcbkNvZha7xv8KcEbkRa4CGpYJtp1LZoJSLV4T",
  "key21": "3o53rfE6osGQKaQB64Ahewtii3wEjFeHVUF9Vx7XmGvtYJPvEPhMxvaisiAE9N4K4Q4T3Wxfv6xB2a1TRb15fWHW",
  "key22": "2vfrnxqhs7fRhd9FSBQ9ddAimAdzDk2MpApKSanjSvzN5AKxE5YHnuxGjQbc3Lv6AdNT4Gg1T1Ak2fn23M7RRXGb",
  "key23": "3GCwFN1zefH1te1rcktwnK3fTkq9LVkZRid75CBw8NwgRCmUrVBBHx7oQcdKyZYLYqhCyGj7UZLgxaM4NMfFamXk",
  "key24": "2uei9JVCgh5nzhsiAfAWXBrk7z6Bp37Sa97Hk32aL87aNPe9HepmKkD35DvEbFaqqMQCCrvttEdYM7AqQNojNHbS",
  "key25": "4wSSfq8GUXuVWAwvhaznJNoBgSQjrAGCrSQPk8pKFFNEV4SRCYgsWPN2teghtgBvXDSQK325jPoyy1Cc813Zn8ZH",
  "key26": "586qaT15XPXM1qiKs4TZqtfJirFBodmiKUSfnG7WtjUwihHso1NsgCUfzQBVJWtzUifAZ6KkJ3rMYfrAwzgnXUik",
  "key27": "5oDCRan9TRiTLejAvPdynnYuDKxeQ2J4aha9CM9hC3PJSURx1rm5SCmtJXQtHzGusXq4gChbGS7oXh9bvLJ9BX3y",
  "key28": "eV6sAnuRkNwLGQZZMpcfCHuLumc51VxMDpXP6e2mJA1Xwi2pEWbEBis6AhfVHCT9143PYz9z2ZUDmmrwocoxfp3",
  "key29": "4C8r4hTzngWXRHMgMKTjtLSZHgViXUuB5PZUs9dRstD65zr1BKGZikfGtPtftgoX7egiKSi5hDoUTJV1ujPG7AMe",
  "key30": "3Ets4ev2BcYJaDpizqAvKe7ZDkXcBGXH7hgB2QrzPc19DAyUKvp96Ev5LS75F3HHsSDGJUWVky2y3pmJQcKYqg6w",
  "key31": "3YBGYPwCHJwoAPHqp2nocXck3Kb1ZKWZtDMbjZJC1xWuRXGxR8qTjpVThR3uPbvzUKL6UPiVcqduuYR54xMcUTJW",
  "key32": "3k9fdmK61BAS8HMKpWs8S6feb5b3HjbGbMhyEQTgf6o1V6vuUTa7jfzNiT288Xt6Z24qeTUzYwm3ZHAjzMC3mv9k",
  "key33": "37j6L18gFTq9DUDQbMa2YKCVqTPnCR88xr2aKLvUXzHhXCcMcyx9imGRDtDc4Q6RCXMH23acCpC2NZvYU2YbKGkr",
  "key34": "SurC8f9VL6aZGnfuWooSew8aMTRRQnwiQxFZdsGNhG5fDX79SvPa5abFzjvbNqSvyi77qK4NFtbihfQLQsimfmb",
  "key35": "3HCKudBCX37qHQg519YYFj6xXxrCqRtBAq8PzsCHipLfshqNZRbP3kauPsjQUvk4MZM2akvxjDJaDe29TWwTcgPE",
  "key36": "5zmgbbCtojdmVTFu2it1485GFJJAmVVj3uZv5R386rsPS28rib14sa592qqpAb13Sxyd9Poys5PuhNcEVbmGbg2P",
  "key37": "5MMbdaWtVSDf2YaoKUCd8KdQGQib3Z9wwDeDbadXvgKtu6fRbHMVETDqX4FTZwSDfDWa9tdzVyrPv9cqFurSZGBc",
  "key38": "2KGA2bNjGtk2Yi5LVWyvT5mqSJn4GM9dmQvWbKbh7PT9RQcBwUNUxLPUgp9uVSWDPYpjBiDeGv2ySV2VbCKvyHLU",
  "key39": "5csGmkPkTq5H9huB7JgjeLZuXeUrPKvS3PrvMDkEPf3DgnVsssoHBC4HKz2kSkmHmn989zp3ftCaSjZpn3RGRtuX",
  "key40": "4PywygNT3z5RNk3cEPo5aAbvGWNosPUtBksvCQpWvD4sUCDpddV4ThkEWVd8Acd8zjbExiXsuspVKzWbJrrm9xSr",
  "key41": "2iQbCc2pTE7FoJcg47M7nnGKfSJkNHpwBRMVHAgu6JCK4t1RAuHE1KrekXKMDEMvaMqUuxxwpQ64SCF7DWe1RMvZ",
  "key42": "kiLRscf6ZxsXHQxndg36smCfC8GyWjWcYNX7TB8EXRQeDM9NdsQ3aafcBKWJA8eyGhk2532gfj6jCHSQYb9wztg",
  "key43": "3iZRxA8AVX1n3QH7niE5rQ9b72yMbUSTB751n8PMrJrU8miSmH7gnmph63WNkni2Eu4KAyqFCN6NLdGSYgsxNM4r",
  "key44": "25z5oXbKCGwtqXLD1SAgVWWAWwKgUkxga2ZETqnhdTxERqiJL5CXpp29QmQf7abpX7BQ1wmNTq5CZ5jeqjKZxq8j"
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
