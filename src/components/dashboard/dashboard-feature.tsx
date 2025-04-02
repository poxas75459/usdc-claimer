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
    "4qZWovEuEK9LeuE3JezshdibwvwvDcHrQqqu3cEw6jmNzjbRDdHa78JKX6qUGraRhy4ZdKm2m4oX588yjTN5CJFw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CxZ4obzMHpW1wxfyo4quD35zt8MazstWXaBeWBr73QyGCZCpoZxfnxU8joCMnWWhg7crNwbcVqziovqjRmeQcrh",
  "key1": "5TXfPJEmDQaHD1CJNTGTLwytGan8JLrKQCJUSbPCcvWSaqtLp1Loj4vP87fYKFTwkTomHTbUNRzcyu6qrwsprm6x",
  "key2": "5MhkmNLTAzS1T45H5HQKHyhBnb6MVPJtwMWQyr91eqpG2E3H8NTVy6mgtsaGAUSXfhnnjaPyiYia1Kx7b8h2Y9W9",
  "key3": "3ZfVh2Zu5mypfgCYamRN2bvD65vuzDHwYX9SqzeFer3FoiKwGbkTQ8y1yGzcocKYatxrivvWcGWw2nHxr2Qb17gi",
  "key4": "YsJx88k4peYeYxSEFjnKVAWG5z6SQBGk3ruwzMAawDKb9JTwwynQxWGKWoiq53FZq1BuUVQFapBnzX2cwkhvimV",
  "key5": "3vSL34sF8sxXmAVN4KSFftQonGSbRY49kDm6Zy9eUavicxTiUY6H5Udb11Erfox6CmcyceCWN7R28kCt73PTs1uG",
  "key6": "2Rtcn5z5cRHcFD8DXpP5s4NveLSpkiUQjurxfBW4JSaw24aLLassjscuEZLwow7zSVfa3v5b59qrRwgwNbMGch4U",
  "key7": "2YxpKQXSN2bLRZJu1s6YkNGQv5NEcqHysWb2zVVysvEi8WBVzYZPM6nd6XaPb4Cryo5KLLGS26fdC5bGaHKhb6DV",
  "key8": "5CGiBUSWcpJZxpYacfgGM3J1ygTLTMSL8r8ApVb51sq94wFDCeYQoM6TUowfbVSYgSFKUPVCLwoHXXfskUDdYbej",
  "key9": "hfVVZVv3PNUPUovuePfVvFUrRQuPrrQHhWGFxZ54yBCLFvfWQKECDL2K1SrhfFo7SjPW9rhXgFdymJXjhhJjxSv",
  "key10": "5m4E15cdeuNXExnzv5bscJzkC1LKdxoko8eMNdyTb4rBCZiBQVPtnb7xqDiDcrk7Sr7HXmc8cJmXp7YsGLquQX8a",
  "key11": "3de8nxCNRQAYoiz1chi35gQPki15GQ8r7rWuuzSe9yS1o5jJKUqFRkTKBfEXoQGHBDMjCauc536DpQTQTvjXuo8G",
  "key12": "VjySkyBF69ZZ6yPipFe2j3fYbhbpPv32HXVtYSD3MBvg4HUp8MQBhQwzVWkEX9wKfj9JqNkhr71LnPY9DyWR3YQ",
  "key13": "2WLLX1QmeGmwZVqnvM8cfYeQLDuMtbyzdqrnXAUvd4TNDstnUR1neb8XCDNEUcUUyydKt7cNaZgdEkMVPdeY9b98",
  "key14": "5SzsEYR4sk1gHKMMsa4KMaSmVZ3xzrfFDYov4bP4PgFCbW4j7WfuRc4rd5bQRpSNFRbPo38avCFdh6e87fcR144r",
  "key15": "ZyAwP61Ngaw4Q6P4fSLt8KfNnjEBtB4696Pw6MfK8pdXy2BdQtfG46HqdckNhjhie5mEWhNyXWKGVvDzbYHJZcG",
  "key16": "2BJD8WDKA9sSfZXbjmauvS7LRkpg3UfaoGrWXabypWVZvZuNMkoEMRpcsW4Pk4fNPGgExgoU2MEr1TArHPTEPRw3",
  "key17": "2AAVWJ7BBQPrqAHEZCX13FMUjjkCZHv2nFYTunVR2sCmKmnmZfScgXhWXuekgcc3zDYUkYRL3HXqb3jaQf8Mxv4K",
  "key18": "5J8vFb3g1JeTXW7xFztc1CY7dXLM9KJo2vUjhfnKP3nmtukhmLQqFEWBB7Wz3rvBpFr9CHURCm9AK8WudzAM9x9P",
  "key19": "3VAreKciJQS6AZUDZwn3MBGH8xmPMuz8wGTGQBTT3VLbm6imBhzzugxA8Jr52nFGZ4siWWUuVbifdSxJBKMbh2Lj",
  "key20": "MdoRnZ8aR8HBPatmyGcFT3Fw4NViggxGjxSp7wmVih4HuipNFLTzxpfT5fy7huQyWWnDx7WnYXaN6j2iEbAwMv3",
  "key21": "2zeV7C1AC1iC4e7p63WRDy3t5wWLEyhbTBQcNhmYpssaMNK6yo4uEG3jVdv3NZQcr8gYTW1gkNxvJTR6QqSxSx45",
  "key22": "1eTntomjMRh42raa2U7QkXACGmjyh7E2BmGRCLh8LsRQUUw46JQgmEhbZNT6ycZa1DDA6qqLqYzdCHKeTqzmt43",
  "key23": "FMzid9UHwtRc9ospxZpXMYkVyYgEq9ub4f1vS29TZcvyywS2Urv8C4sELviHugWwdRTPqJ6L4wzcPZJgcJT7qSJ",
  "key24": "2a5dGqGdazDi93WuiehpRxWKRDygQSM7JJmW9Ahf52ygpfNZ41dKnBqgK9zo3gzXBRvCjWWj7zxQnMqJiotUjGMg",
  "key25": "458htePuBdAptWP2YJvWumeooStWfEtkUMHJpR4bXa2NSKk9JjJ2ocNfdB3mLD2EamC3tZXNVTy2rkSrX3M6tGzB",
  "key26": "4nC5R2YyNi5cPzzs4JtbnMdHsmqqhypGFJLocpnvDadiEJ8PwEs5kds4rM2eAQSCQ1BpLdXYYgLF43jEPBvD3AvW",
  "key27": "qdpVS8nsLxnfkpC1RoHj7byibcbRqYJUfBG7aVwEY9nf1RcwPuKPCV8UCqMGJMYGj1tFQEnmxn3m1djZnTehafp",
  "key28": "5J1FkdxJLGNZx7C1m3WHXUG8eXTg9QHvgm1oHqCCFso8XkHW3bAdSHwzeyHub24BLKZeFrm3NAx6dyNRYUG8Szze",
  "key29": "4QgKQEZ2XTujeFpFFBALRdYfNAnnMC2VfcrDPpaxSfECMAoEW9G21gdpkekbGcfdMHLG1rrVri8ogWzxz5sV6ja4",
  "key30": "5bK8DnH6zwPSxhKgG6x3pzQ5Y5f3yHbY3C691onrNd5gSeyyJPjK75euVnwKe4UDnHAn3YU8Ee8HNoNbAQ4erw8J",
  "key31": "2sbrE3N51kpCSsRxXMfuo8g5kApsQuKVoWBfZYops3QggGFMtU2Aeh3Y1ebSFG8bGa6qJnKFG1HqHFY7QXhTvPA9",
  "key32": "5Tp6beskcAdMPt4c5MLaMk6bwfvsEaXn92vKdWjNcGiSo56oTgVg44hcbV3HR5exkh2nidb2ciDChJRFvQmSUEBj",
  "key33": "36vQNBjFGMk2vAkWudCUodAHxcTgUrubhXyN2kLhnh7uXEmPyaX2HmPk8s4jLKD4cDmLmAcdYn5qe5VhcQyototx",
  "key34": "21ErTqzsbGgMXrhFtjq9MPXiHmB5hBdkF9YNTt8y8KKTKswwS4hJccofUwjawwTnzmdFaBPpL7q1SDRrPe4ba3WF",
  "key35": "jCEvcNu37g1xrDSpbderS4SUw8bdswmXJCZeBE2NWwHy4kgn7EufEyrhDuJzwQEhyp8iDdXipkLvH1uGgfANg8L",
  "key36": "5cuSpuNy2CRJ7rKvozU7R5iPoxLLJSiQVjs3uBLKWW4nr7Je5Pfz8M1iESZ36RfhYgQ1Rm7zX9r335WkqRW8P4tn",
  "key37": "STp9cpdmDYMD5TzsvrHBg8SYZM6yCaPAsZjJRAMCnhad6iG3uSNDMrj66CSChSddbEcnc7wNABHXuTui3oCVciF",
  "key38": "2kMuZBriMTA6EUQxTrhaxdj8AzHEVMhhwxRm69docikzbBXDMihS59e9ELFmMiUQvGXaW4PFXecfsSyYADZZU2Tc",
  "key39": "9hR6sqcTVct5szvN4iiQhwWsEmjveZpqomsXZojTMnoxeXjf9CvEcbY6mW6zRKtZ1vSfJNkJ9751hxQUNGzyHrJ",
  "key40": "2RsAcegNUhhgXzb4EzPhtfN6U3EEmD21YJ9rosutGq193VXGbF99e4bg8Ycy7XMMsEezjZwizrn56mVbud4JKrNQ",
  "key41": "4H8b2HRS8EV6SH3M3csriparUKJ4NRVddfDbXkW7tncer6TCaUgTFhJnRWmZPbYh3BsaH9a1J3z9RjDmG73QCEgg",
  "key42": "477Z7SP5onQF37Yg2P1GfoMMirfW4NW8DEzzEuhgLv749DwFfDURr1FiHVCFFCod9LkyTJu69LAxpUbKGtP3RK12"
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
