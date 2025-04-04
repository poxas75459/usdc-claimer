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
    "3XX7kDCSeNELSsNbghkMcSTXmzp7bTpf1pVNK2tXut79FvrKTUq9P1xvU5ytp5As9Pb3SPzpa8bsuw2UsTAG3DB4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mec4EynU4Vm38jCjxBndH1GPnUB7Y6TaeKw2kLiHk61tJN9HoVSZ7vK1hJ9g7nz6biTUzNQXFA3wqy8fcpJhFCJ",
  "key1": "3SiHwmLoXSD2TeetY1CNyQjGKz6T5Dm9RWpfh9FSpiSWfXx5XJDqaVBf6XnCQJbqURXQwkzShDM9CtJCc4GDhGXu",
  "key2": "5c4D1fTqSR7qouYw1rkbHfRVpYp9KHvrnKWk2d5kRDGSgqUca277o7y23h672YjGH9bkx5dU1KcSh5vyWApH4jTL",
  "key3": "2wpLBgR3L4y4mAunHN5XhqMxqhfvtTMnDFQkmwiB2u68WthMVWyiu42bg4SCVDxrghMephY8sciN2bcuvaMoan33",
  "key4": "4JVJu6zs5HAWqPkLew74bLezSQLA8ACGW9x1AbQiuefnGaiBrd5rmsUYm5saWe5AqKuUoY5jicCFEMzd1WPMpAzq",
  "key5": "4HM1yCcKECwzVFD96pKhLPTPcNh5kf7J6FVzgaj9bdAZB4x3WkkSCjJcwoDFsdNyR92RFZwxG3deSTPzwWNyTdSX",
  "key6": "4qfWkQdD6SwZfKyPspinutDf9GCa77i8ndCMWDoh5ujRHKPMXnDHBkMU7JurBg4EAVKrSyG2cLbNDdzHciPv9cN9",
  "key7": "3qHK9389oy87BN3bahsp7Ao4naA7u3Sx6Gg4RGoQ4AxCECSCzh9MaVxycUthhq517UPpDqvFjzissURMmxrD73ti",
  "key8": "yyADayRT6zPdkoFVtK4xTD5kjaHG8R33AQa9F1ACR3oR2vs6oqvJU4H28Bo8JB32XDvCueVSxMgHzVsSZRwjnsC",
  "key9": "5d6HYsZwNpAyRStPt8DM11KhmwqyETRSNsu3KhMaBr9yi7nMchABFFdMTrwA3HmrjRz5wy2LBMpuXQuC2QmMTeYw",
  "key10": "7ZdxPizmwPMyFTWRUUwfRgsDBRoZrDAnxVqoM9kcgqX9G5A8tPybyTj7zQBuTcimKjUvrCA2MnywCQahYe5WdNZ",
  "key11": "efSbHviVkq8QqgVriEmTFoqRCmDtstCUw9mtiurpiieERMwGq18fa1pdM8vuQeYYHprA9ngJ5jvf9qjbW8ifJFx",
  "key12": "56vNC8WoYBLDNU4xCNJRAFJFj6zxt7A8qARkr8rTqGkn5D3WnUSKhhgd2xNNw6u83NXGcQdhhkd6JZPWcwUqVVzx",
  "key13": "2AEfSGhxmTZXDyHCDAeTvJgKHpSuwx22Cqr2UW3V67C8xTPCSkG2Fhvrxbcg42w7oYdWMVmLewh6xaTPN5K5RUK3",
  "key14": "2ZxV2MX6V5yywAnp1robMwWgnony1uhxY3GeyR7gj9c3Mvc38Tbf5Vpf8rcE7G4uPg7cUNwE4AzcNQYEmFaShkmY",
  "key15": "43cTmuDTxbeUc4uxR15iW1VitzsMMR8BKgK2UChpZtegzCMSpsQ2RFypXk4mQzZh4i1XXieZe8K7NhX7zHqFzpET",
  "key16": "4kxb7WDGT4mg1HqNRhB3APWQu5LiJAdCVNrTwQFTKH9TvvVUUctf3Fd8CztiCXYjNna8R9Fq63G5HJzyodiBeGdp",
  "key17": "41dSEQzhYRwY8Kh6cTfQEKxjUSzbcr2dtCKx6KoEh7NFdLioUpNn8uUWpvCzC6JZfdK9pyGXMMYhi8YKP47qPwsT",
  "key18": "5qAP5jkasmjthA1NJC3iHhqz37TMR71BzrS3ptw74zyvwMBSjZHMSpxCUkbRLk3TCDk7q78Hv4HaXfvN6uWbY4xD",
  "key19": "q8GrwD2759TseUyrdDevYgqA2b26wJbKkSjFpodLpqsYB3SakxpZQJYWf96VXoooXCGCfr3ELUGihDvjYfU5Cse",
  "key20": "5rCHn59M1BcM2tDFDtpEz7GgHXEuJ6HTBJN4KRgmxreoUZwDtFtYX6jbfftbryNPChiVSDKq2GCGBiw4Fb7rnAkT",
  "key21": "3RE5JPsASacvjVmnCTd9sJxYtKvgvQMZ1nNwsJmoNJhsYRAKAguXbUF8Eje4kafGiwakwM96gSLcY16RMw1hmwtr",
  "key22": "34Jv8sEW8eq9iktXjYpUBNPGCPoNE8PoJVvoe1gQYbD8GH48bZCZ1Rn4A2jT1pYdyQ7ikVq5vX6GU691Y2hYAurn",
  "key23": "3dHMpjuXw3gUxbJ2hGf9zz7kFVXgTdxtgwbQynh49BuW119daJ8U5xFJ99faY5uC35FfmWn4yUt2wCgcpDT1dJ16",
  "key24": "kUcUWXpFDMTTkiekGSAXci4MKXXaBpDnQtv3VmE5M1UvXP3gNDYszoH3tRk5FxZaAx6umJna81yf6peGeUBRucJ",
  "key25": "3vR73pSSSop3SQqeHfpyGfHH3sqi6F4cLwVA7bQgMDj2DWx14WRKdNTmJSfpugPVrmkrpyk49249sAnEjGrkp53t",
  "key26": "2ymw32QiNLcyXckGxkKuDoz4SujR1b9FRqxXscfBJisJAGS2YqzNuJyhvoBKFny8aR9fmbRSkCE7bnPDmPeRoLBF",
  "key27": "48vue2hxHgi8ThQVPKQXLbsMQxEEUNBZFpUukYsZzJWJjp8XmcwjhmGpL55H3ZaXiJih7oYFaD3GmB9oRnHS3uoL",
  "key28": "eYFDJLHT7FHDsqSu9mpoRtgxbx7m2F5sHKMcG49v16dwQRx4b5QNVc2sFLesTyqDpvnAKmsmqfmzq2aPmLKnPU4",
  "key29": "4AW8itggX8DAvSNvopQik9hqqUHLqndSJ9aVED3Cb89na5xcYALwFfhkw1BdULuk8wdQMhJbnVCgZE6W9gqQ4Yg4",
  "key30": "5w75iax2H6UWrWpUX2jWE3T35twxfcknxWBaoUHq4pSHGArq3q158BeGbKqVzbRAjAi8z3hqg1VfKV2zP8rRtCKv",
  "key31": "3EnBaGkD1DhYY9tRoDWcMMSibVc4m9qLWcpSuKMfavmZ16fnmWYQKa3NzBgTTGMrezeLsskYfQbSQyAeG2Ae1Uvh",
  "key32": "3ixJVFdQsiGev2LCTGYT22tpggR5DpKSGE4nP91HtVMXCRye3oz3X8yk94NhdaXDBcusvMtrGZSbyc4ZdxjeVwKn",
  "key33": "47ixaYcVPRNpjkWCc2c7fjxUEph4p6jFutDGy1RzwG7i769en7XWU7NoEjdNRPzTToPFwFdxRRHu9N8TcnK2ZVre",
  "key34": "2ko2G4KSkWPuPwXjUjprjQnjfLq74iAvJW2mmKgu7jVHsJzs8KxfyzoPpYDe4DJTBzxdjH9ugXEF4Ea9QbGF4mcd",
  "key35": "28ttVUTAWoQpGPaJkrmQ6dPRJ9unL2ufrPrL2Scww9bB1RXbsQAe6X2QNPKASKk6U59aBKRsGBsDgFDia7aHLQXL",
  "key36": "e5gqGUumEzTQxtX38mk68Mg9jwEudtKcME5t5DYiNANVnrKjcbQ77kkNChzXDM8SWSZkbVfJ6sUMfquFs6G1keS",
  "key37": "62E2DTpEkatuN9DpCjSPPSw7dEhGrZagcEPb3Xsy6mZCFYYfPyZb2D4FJNbTaUeEE19XP5hehgka1qTpWpfXx9T4",
  "key38": "5nXZwMxESqVw5xyKRe5zpc1k5TMjhHxhGTYhwk75ZrgofDGX89oWbaZFAmEGdUDZA4wHb7brjkiHMcU4hakKTqeU",
  "key39": "3TfEkZjYSkGS4w9FEJxdeZhAZvW39DdPQ6tn38uZifo9MYCcjeoebpN5wM2iGQXpkWYaMENneUCph4JQvz8EdUS5",
  "key40": "3yfS5utv1Nq3AR4YEgQAq3C3mph4NQETSyYJonQLcc8r7sgYRyd28sZPMFQXazp7vSjTnZXSnZWDpgrFAf2ACajm",
  "key41": "3NwHWsjv1KX3e46CMq2o6gwbpsRuwzHx2hmTmNeA5fic76eMcQGkZfKcsGR3pvrANLpbe7Jz6s4pbw99vs7T56EP"
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
