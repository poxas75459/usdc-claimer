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
    "4mmKSm8HMPxUUpfqsKFbyqwuD5RN8axGQyr8o9uS7nkdhUXpTvLCPHMifQyRShjjJc8sKUrPB6Hy16Axu7pi6qsQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zQjdVycUtV2ih4Hs8kdXjkRLosxXeofEXFW4uGZoiBBVAiqD5kLQgrWsp8hMnrppzcYyBZmRMmXdH9uW7As9K5s",
  "key1": "2uWZm2H2z6qnroqAe1KXJY579vAs74w7385PWaMitbnSvaJUTZgSS6KUi8dLaR3YzAfVgrJnNzhxKAvVXHTHnWM2",
  "key2": "4k11oXjxHPg7yvcD5Km1kH566bLHQAMzmzTvNbSKdQfgndWUPnW4khdgbQqjwkcsff2KT7e66mpV9YpbePbc1BsL",
  "key3": "4EvMTfFCCiUm7DFCrqwdmhTaoLbMn6BTDSVrguEmuQFHC9MDcdbAJg31AVwsxxhBvAthnmshphscUweAAYWq4cT",
  "key4": "51gCvFZv1c8J1m1gd45QjAayS78cpS8pRRMLRjED5CXA8WRuW2sKxn1FKBxyU57dAEYWSCseaGn9EQV81XNT9Dtv",
  "key5": "3mR7NvPBroK4TSFvKLJuwQZ5pTceshn5LTf3b6rB5ndBR4uMmMm821rcbPxvBHCUHCuY93PB6Dd5S1sdRx1Vhtby",
  "key6": "29qHz1feSBv6ymF1gJpdv5kCVP16AWcT1Tfn3b6fC6CgEJ1jJtZfQCGHgupLYSqMknny1N1BAjxHfawh4JCkzxSE",
  "key7": "4f14Qiz4jEdDmyESZSSq1g9UW5e3gKFChiarV5SxsTzFJL4YxFsVqto1WmXWr4wkia4UcaAbrARX2r9EGu5EVXBR",
  "key8": "5GWURU38kn6byMfronpmebRtKjivbvT7kb8VJJEkA1FG8gPVAqJvGFkuPzLVPheq41fgTsFop7Wdw9C1CCBm3yEZ",
  "key9": "54BTQMHKxSuDre3atNwYcGoXHBTMP1X9BZg2Vc7KdWZq3GnsQ2gcQj9Q7m4toyn8guoXmLihQLnxpJUSKRod5TqR",
  "key10": "255C5E6KRCH3cbxPyZHGsJ4J34G8AUZ9i6iYoBkyQF37uAjYb8SofvnwsNM81UM4U2aNEpN29YJeQL6N3aHyNuap",
  "key11": "4daWwX3mR4kQEQYzNPobUSYLwkjWKwkdtBLEvfrKCMY2A2FDmy8gBuzRsUH8Kmuoygi3Mu6vmNkUb2ExPp9PPCu2",
  "key12": "5R9qNBxEhfrVo65yh2vYBYbzf5kkxAcCJUvySmSaMW1tFj63KZbP7kDkLStifmZQVhAZigb4wangXELjfmzQErVo",
  "key13": "5o7vJpb8FzvYo1147jngk1ooAgvLr6ujjnUrpEWBenTScxBzWcicRsrNKfR7TXayomUUPhP6xRZVRvMTPDL6Tux1",
  "key14": "WMdEjco7SpFdoS82hNbH81YSxFdAWt86GK8tfMgkCEEZdDqp9Csnk68rpb75PJ3Rj3LwsNPziMtYAmsb6NJFiiK",
  "key15": "33CT9nybVGUJx8rtbke31HAcSZcmnisx841sAEg7AVWamFSfHHYQadocpTkU2WqqWmhvJx9jgQZ7oTMJSdAhbDt2",
  "key16": "3u1fim5K56dqkd8Ex5vBW1swkrmYCVnarUXaBWn7qgcqbQNgh61XiW1sf1DG3GMczKnoWqmJxhDJqe9b9f2g2PYD",
  "key17": "2mAHzWcU6HGkZqizvnrezq9oFrfKPobptCTPR5hn7UT38K4MbSNXpZy78FeZuY3GjWKG2y1jCDtH3Fexrj9jYCLC",
  "key18": "2wBgWpTvbePZ8r5uyKVfrCZNmjZ7Mmyubj12kqTiANXYXDAVmNQkpjEPwgxWHL9wxPR5yUhrPYeXPUKTr8Rfmfmq",
  "key19": "5nb4KyGhCRf2cP3f9BMsZAHinuSK7AMGAQXDAks8z76yfWBDvYknxqnAADYAH48K2E1yoMxZc2AamaMusZf9W4Fs",
  "key20": "3anPLiCUPbEh5mU7GjT51qvixyu7nsCh4vteYEhyv8n7Dn9XvjpNqUqjqjzDLYmAB5ScUyopfAKXgj1Ym3LnQWbR",
  "key21": "4bAiMiLULEvoKzsU1UvDzBDozBFsdCnzFTKHHngMCxCeGSvRjMFrvgdWNmtqhumptKeembSRrEXFkAxGrUn8bLaN",
  "key22": "2daDAgiaxv5qNo7nFBxnwEdfEKPxRdmo4f918kKeVN6hScTmYuz4pQD2GWQDGqXLWfL2ci7SBVvymUBkmXqWdQ1N",
  "key23": "B8CYDx963TZnbEe8p1suykwXbh8HeuAvGAW8LRGAtKrvsKSCK22hXLQmychiM99giQM3Qf5rveyZx5DGyi59izF",
  "key24": "3JuFPjkMiYhRqKKQzqYPm9XBhdzuPBMoYmLMtgsk6Qy1dGtPZL67dtf8pSZLrFGE6pChHd7b4Z2cAwmbDHkv258R",
  "key25": "5oKukK9K8p8uZDADTXQ3w1e2sF1eaG2DfKvro9nSMh4sEeH16eukQPRPpHTFwJX6BXx7dShZUgeeRzdruLMptr7x",
  "key26": "4S1BFMTURJzj8qLM86UarTS7KirxPJdXU2kNv4fJ3xkXYzB6cVxYrxAADjSmjYAH16wjGzwJVVJh8LhipEu5PtJp",
  "key27": "3cKvBjEGoPrgaE7479QGXHrucjJAkr4j9PF6PkVfT2Hxsk5nbPnGzdcYU6AVADEnSWjqTyAE8oyMmvFWH6ejvVKf",
  "key28": "5B3MTYqhGz3gFRjB8dhyuNaxbPf51GZi5KmuYBQrWUB9GMBaMrJiKKArW5Jvb4MQpB7KzB5Rf6KUrHSu8GLv5xzG",
  "key29": "KcYhBcaVjs7uLiEiNy8RWvPhKzkKdcLNqwhHQRvCWEgrSLxT5RabJ44xc4ShTm5nNwXRRdNFxXAR5oRz5ePz2y9",
  "key30": "5AitddMkvQsxBQ2xF2H7knGjecLoTUxzC22xowJxxaJtJwkw84jjXajDG7Qf73vep8RZhDmKX2oiVyWVFacMkuYa",
  "key31": "2ycXA9ysSb6gn9RpepZ82rM3WvaqXcnFNkwuMTdReZ4DWxnR4uEhqyQvJd4EW5KNB2v7cJmcRdhqhkjf36iDtQLM",
  "key32": "5wEZ5EpkUzRs4gnKPaQxpMp4DFP2Noa88urj3CAaf8hESeB2DQ9kgRaa2WacaBUrda22t3ifbqd1XW58uBS6hGS1",
  "key33": "2E5BX2xAEQ1MWvv9YUGKopVveBLWEcXcfKXCBNpzthREdG87YHyhThJd6MXq57kPHr5Ss3suQNuQhQABpNCszEET",
  "key34": "121GuDLFwBfdGQeJKjeQvSyatScrXKuUnV8DmTiXgGfJ54KU4yScMACmkRaAh7eidbJMUJVFQ2t7iG4LFSSNBY8c",
  "key35": "4bQBUiFGvHvT57iLFqfPfAdcyUwHS7MnHRh9rh9nkHKPKkrDksqFvb7tAwHMCV26F1uo21ejbu9Mz2ZXieJesEcW",
  "key36": "EYbGhKSYQp2JzgdarE8zwujAKAEKSLEAA2uBbbFWxKoG6Aj1pyNeDVCuX5vJzadAS4iWMXvZCR535hTiYHTuCge",
  "key37": "3DcgF4QXf7LHcRbVbLRmeojNkHF4aHxiGUSiNRkPXzwzKfEJunEyg2geV941cj3xXmAnKNAsjWpjSbRv5C8jEBBp",
  "key38": "2thVfDnte21Tw1ZtRe32R68sKmezKhc775osTCNuCNBScFLmKP9qDjPdHd4hgbQSfUXUQfVPWQAjpX3Ya9GwfoiE",
  "key39": "4AmPKgmFjigFn66nTgDcypM7JQqAMXJBv37ZHkQCrW1xcTUK9Uk27r8dJ6rGdkJPPjiQdga2odbXUKX33hsQgEzL",
  "key40": "2xzxzrsmBShNpkNiAiBkvxvdYunZNPhTY9vgy8F1fvTuFPxkcnYVYWmVjrZPNyHn7JTKXmLi7YdF5fTEQMXBTJLz",
  "key41": "57xmWuwq2sowmfzHiKNCL2vrx4833nUNiQ3GQemVCS2Yn676a2vvk4A8a3MG2Cdf1eVtE17iLEN98miKrjncPYag"
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
