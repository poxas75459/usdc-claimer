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
    "ftDedUW6aswoVhV8evvE1ytsmCLsggE5wqHX5ofxw7YXbN3B8T3Q9rVcKM5pxhrrpi9sxW6KUqSWpX3FGiEai5T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P1TPcqekvnHYWK1dkidUNDHfzmRYodxyRuL8V6ZKFNpqnaJwwseDvb3mVMefkQw5DBfRkhmJSxAND7EM7cU4745",
  "key1": "2L1F1j9Qd5ug8zzdMitWDRe77qkz322fs19ZBJ84Z9gph1XYVvB9tNSQKCek32HFr2VH7HJdY2bkL57BxdjUrwu7",
  "key2": "uxShDip7orJ3a1mxqvTCoXeSZTR6ijDUzc7VVMcBJroi43vd6igeHjYVZqDr7zXmV2v6tKj76fq3VN6etS5hAPY",
  "key3": "4jJ7ALKRVzLwzSnNruQ2WRrSeTg75rZiwCkZdTHswTN9ha1EcE84jvKJyU5ujdRPwnhKNSVAFsXmBcraGKfL3jD5",
  "key4": "cYAj2Dd1c8rMZqjWeMrXAQ9YPhKrFLnKAZEtY7SQAm6u11rTQVd79CugE8mhK8mYBnRLav5tmdFrjogS1tSXGHM",
  "key5": "5aCtnDPyP4W3QNLvHhwwSifQYZk9LYG9AcUvymroMSyNqTPrfHg4BDTpH8ca4yJHMqDGa3Z4rKaLC1bkb594uz1y",
  "key6": "2wP53dQUBk5Reah28x3K1dGJAKjVg2ho8aGu2zkPj4qp2MVbvgQk1JkL5eyREYzytFXRY5pPMSpz9uyxNhBsrYKb",
  "key7": "4mCFbYfomhek32vkdBYzZssXZvL2UgCAAwqB6MjQFXFgGCcoCj3RY5p9HH3UTXpcxWnLRHiTt7WuyXZCYDExJ9hz",
  "key8": "WKqfCisEtMwE8cqtMiZWv4iWGNFmHq1Z91mfHQie7HwCMCYTn8qgrxHPQ5a8SYfgoTnb2Rm9VZvEpADo8P2haTE",
  "key9": "3sBhu4JHfk8NauTkcDqHctunHekExDZvt2UNFif347cxJP8qyBZLS9h8aG9uDfAQV7pzUfZB2kDFLGaTEmQSNZE3",
  "key10": "2wQpjbW9cgtie8JmRLFSY34qCY7RZ7YyPbdpaao71DujVGf4aUNZbJA9jnG188i1YqAuFeNZRsj3moUs8RY9F3Yv",
  "key11": "4yFkwUN6EvuarjMCXX34uRomAHKwzaRvRTdGTwPUwKUgZgUet3BA8hyJkYccD1eLjWZqQurJYt49cMFHUC4XWxDD",
  "key12": "3RsV5NUsjGnXp3HwYMST7wUrRny6Mi8KHAK6aVFFqFWue2trKir1nzRjCb1wqj9YXcTELWzLqiUgA14xrNEz4aFf",
  "key13": "3QvKKW3fgDEVsRYXmwEE2TiPfjp6KzUwT2ZzWdMutK8nqQRTtg732UvqTPcbgZAiw9Ey5vYB1FXBJrSK6T74GFJN",
  "key14": "3BeTdqg8YKezs29aLvNTMU19QdKajxmMBqwKWEVk5oF36FMNPARe5hyei7YCN6HS9S36ihUsPjgQ8q5NK8JxiSjU",
  "key15": "4RmCiWb3q2JHQs57rSMwH4P1EZAMsvGY2isWJspVRH375q97vAPMKaWzmG55kRJZKuzmHhyuqM6dedv3nZWQpkct",
  "key16": "9Ct54GkQmfmYRenqrfAGpjpbStPkiYYzwfQU9w9WUVMDuWDJoDVhBCXWwX6HG7onPyfj2pXZAqwHYRx2GQDzkpH",
  "key17": "4UoNRKWeNMVQvV35nZSP7wz3iCU9gAynMN1UEiDEhNz6mKE9KKPztMg8EaapXdPeG6JdmXwm36wsfP4dMjDrqf8T",
  "key18": "3pC6cpvjbpFKQXp1Yy9xzVvd7A1dQCKrUMT73y39Uj2D6NzqoMjgGQJiAzEReWydVTAFKqbaJ8MooLxYzqZ2c3dm",
  "key19": "4tr8rFWKTkmavvdyN16NEHfndgoAR4KZGUVc1YGXE5vtiYS3JXY4xiHhzZTGHm412R4pLksn6ABYtEh7mbgqUEby",
  "key20": "32Lch27YnWi6MNwLY9jNGb2PS5DnxyBQHsxP7RCjg683qFLPG37F6GiXVrBpEA8KFtwfd6oFTzV4cdfBkX6WBRGq",
  "key21": "SF2LN7JRuY9Efq858Ys9dbQnQz32sAEWeR9hEEram3U2DKkhCcq3G273NbRiGLQX4Gh8CyDoBx2NSLcGfk87F6k",
  "key22": "42ppWgtATvYg3ByVwBEuCPfMCYxCBUTWpcK9WCSuTqvPPMhH34V9BDp22e36TDwNRHXBwXjLcXdVouxkBiEESDki",
  "key23": "5XYRB9UFzxqmEmypSiyUhhd53Z5HFGUzxzc38UdyATtXNn7UDL6EF6awAL24mXTMjttH6zZkJ6E7dk7YT2E5HC6x",
  "key24": "KQUwnXGECoBuJZ1hW4dxUA1Yi88LW4b6tbHfo89TACff6Hb8GrcPUPciBU98TcV2jSRx42Zpr9DfWf8nbpsWT9J",
  "key25": "2ocpmt8BLp6obYM8AT5TYyQBzC7GVqp7n4KJRcDhKchvPpZg47KQ981GtEGtj5VjosSeEiWXirBwAeqGAfJ7QtKS",
  "key26": "5f9ibGX45NhokMcGEUtsmVWC6V7V4gZUGh5YTEVZwVamnJsYZxNp5GAasP5ft4jtuPXYyFxWQZTQ9jjdVWuvMCoQ",
  "key27": "4XGvm2V5kQ4pvToPGyzNhY3XoZUNJmH8JwbpYVPn4DYQNs4u5PrVo2cX6CzHbUhZ91eXBAdnzsyLX117c8LRuf2H",
  "key28": "5Bk4bn17UoRzbbojKovt8ywbWDFJMbhprfknEVx4XxLKVufY6p2AAG5PLtAMc1P1xxJKYPF869f6ViicSo63jGCK",
  "key29": "2CdY577WYXcaSom8PymciExDU5WEQn8HYd1iNHHG578WbPdjzY4vSgJs2d8VUeVG7WAMzG4PuADVGjC7x7yovV2A",
  "key30": "Yvv4gAVBs2BspcMMy4431fH9DSJAsRHQuMp1Kv6bvbZWQGgxVUeRiPD9eMKsJ2HWqaB8fq6GwELL5dYErmBWqN2",
  "key31": "LYy3niKNSmJRUWHTUUJPpZxScXCMoV9uanTCQLf47ucnqyE4ckh8rkLnFiLZBPCRUiMPu7S44sHsVrpReQtknra",
  "key32": "2EECXoNCLokqh7c7eSpkSg8XUR8W2Af9ajkSY3LVCsF737rzVVidy4grtv9DK9kuwd6HCwKqzb4EEDYzbF7Lkyqg",
  "key33": "3Vp7ZLuTvV29QxwRj1hKxLqMtEgoRLThkhFLQfKo985Nso3HBTmUkegAPr5dZ1qaaRTH6zyTDADgrS7ssN8ikXHd",
  "key34": "4bVGqXpDQheNTYQmBhu3kkdLgJ6yJn1zNRhePLxMoBk35FwvbwQtkaQ3ncBW171FeP858kNjMV5gGm2ZoECpEJWs",
  "key35": "4RPcLVpRQ9yncMdchnCG6EFCYe9y1hqjLgPoS8KZtkVZJErmQs3LYJ6XZ8dJTRzEmnKeFBQVxiMwPd73fU7th4wu",
  "key36": "2TL6TvpaRcFnhm9KSJUmbJH2ECWkDQp5EUJZdS13muhoovXAs2av6akSHUDZGR4syz8qxGHd89VS8AXSKeZPLx1q",
  "key37": "NMutLLdrFSHxXmNc9wUhaELmzhVcrzb4bi3FnaApaTSipwoxTM4GL3gLHDvvAyDMwZxTLTWs5mJvnpofc8txERY"
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
