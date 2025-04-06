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
    "3Uv7ZAyqGxvmf66p1cEwsvgoL7CTMUNHuQyBvNRAZ6j9TEx53MuW6n18s11vCUeSabsLwfJWGtHG5iY3P4Z32QJj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61LWcPPFnchkVJzSgQvtDE4GrBTTPzdMMis9oPa2TSEiypfJ5b5PNM373MR6mXh85b1xfk2he6ke1treXfSBnGAL",
  "key1": "5EBBt6CP1MhwvsNYMz3yQkr4a2xvdSr2dc62nXqMMn6v3GKCoUYmvXa8LamsX5UkAvs3rLTgiyuW8nTVTZivvBL6",
  "key2": "4DvdcKB9NUAtFzi1yCYQ6FfkCry2pSRxdZWPcWnXjoH9sxPHKawwquC6riqVjubgUZyWukb9m8kqDB9L38AoN1yJ",
  "key3": "4PNGba6sKfLnkTYqZ46wQjdUJWu1nSmoGHZEDRVhfSevCBarn2L8BmSUaAWwaDXxT7o3z9wpZznvt2f8eq458dMk",
  "key4": "3hcKjqQrzNjoQCVPUPr3MyvmmAg8hUPiiM6KcbE4HL8FhwqvmGGs7b9cXdW2a9tNMivp78YUTKijWrHX8yBNCB8h",
  "key5": "8wLr14522BgnXQpAMhysSZFghGh4yBsBRhC8DqTagtxwsez5SkdPpZLmMWHe7qnMWwFGVYfm69VAwUauyBKuhrb",
  "key6": "51Mgo4EERFcvqUgoNvtRQ2iuFrKmavim56NaY15XKDnEE8VVtYFAFh52bcp4gLZEHY4hvjAaERu2W2xyEVnvUMqs",
  "key7": "24BnYkwNeUFmY61atDN3XCXPHCraCg8M1EebvsDZ1bG828x6V5jf3QKJpCDazs8VihgBHHaXRpx4YN1WR4k24aYX",
  "key8": "2FWHdhr4n7iTXT81yKZ7cELMA5pHiBoCsBJktjT11T1spEhe79KLcD9tRpRejvJKB6iebzvFtAnNAe2nJ1QCq3vm",
  "key9": "2RizCPxmmsaoFDVcxCvmfRXz5E7XQegM6RBRCGow1ALAZanWrdQJphKbCrc8Uke8dtY7mqt7Qck7RsFrnL9n5MET",
  "key10": "MfpuWcvtqEe76PhgwY6NtNgvewJPbd8FgLvDn2VM8QkiRsfSKojhbw33J6QwAFzcjG3QzSoF1SiuvYUyK9o5Sxo",
  "key11": "4Tea2Vi3zJFGkN4pdzLrCj5dvZMJwUNef2bmhLry6mZwL99u2nJQxruA1wDHoUMMAX7k4cbAQK9Gn12tsqGCjd7c",
  "key12": "yYqDMfALqybDV7V1K33LQQbDpzEFDtccgrVYzS6ZHcAVU4S5UYaGFMmZ26ukW2Uzon7ijm8dezdhEUVL1qRnXGH",
  "key13": "4msxWvr6wLgu4L6spHaRg63LVPi4HLcPgij5rHvugdQsTPWqpxf9UTJGP64hPfagWbRVeM6ApR3zHL8DkRLgmp7q",
  "key14": "5886NFYN16o8jJYss13xfEDt3Su15c9SYqnBTesXCi6h3H8iDDRNGezsw1N2J9Hpye4CiqoLjMeCL7LRGYXK4j2H",
  "key15": "2z2a3KkDezoLXmfpBEYxi5ioRnGfRXsWBdkzwCBwe9nQoJATYn6vfF3DVPwtNL4naK6YRLczFEN4WgZ4nbu2hdqv",
  "key16": "4z1s7TBfRhUDZM5VhLUiNh1r4oNj7M4onmaqSpE3gfQH72RPxzvP98J1ze2XVBw99wQiaPzjdptKBxJEMkVSwNeU",
  "key17": "imeeVyMa63h9QiDRowzUhYqgYYsuK4XoxqctqkydenyGjWoeUehSuTCKJwdhmT94Nd1RAQBzrdrK7z4WpH2GQGu",
  "key18": "5EP37dPRBzTkwGoeCZaTrc34B8Z7mfTXQvzYkoiokQXR6k87RK8BMN7ZfVPkJKxcRmWKGVDEQCzCEbMHZrTQe2pc",
  "key19": "DUVXQBwXiMQkR1uHH36bJqG5nyF5H5eCLjw6xjA2gJAFsdd75oJKpvJvdeCoYw63pnGaJdSmJfZhY9nSs9Bxeoj",
  "key20": "2CgWQi8ZsU99GHiHDjzmg8dAHTqf1n6HNnVbVtDJ3oYv28g9ukak2A21dGU2JCswwjqMX7wZyVMt9WVtJ2jSbuu7",
  "key21": "5e8c56DdDCC8fFBxaxyWgnCaLhVZF3Ruu5sPn48GDk3yXo5A2STv9WBVRU7s5cBqLo4vxnxzwcfmPDedoTj6Eqnd",
  "key22": "2DC5d8tKbLVKsS9t8fMEhTiNw7MLU7fWBUEqB41gr3JvtzstTk5PVoKrnGfvx5bakwjEmgFzEMXJ5pvqkcEk7nGr",
  "key23": "2Ttavar7WWVVW9yrC6211uwEpLSieodPkZGCZHnZknqNvMMH7nUwAtwvzzzgofNWmue7fKVcXEy7n8RGLg6e7yAp",
  "key24": "3VJQEK5o1G3jGxLJNtsXCowUzVyPhvQ63HGEfvaijScMYBg31KJYnooE7yFHvjKsiNyMJXU66Z4Cx2FskzbjXTGX",
  "key25": "5b4Ti5rrGz1uE7Ck5o5WuWq88eZrGb2cMkJMGrd6h9QDLrnA3tzmyVcWmSKQCiQr6sjZQsv9HKhV34QhzK2nz4rs",
  "key26": "2JACRSxY6u5DPqE4uTEurErdNdZYLUQu3AsFwRkLiba2DenHjPNneRY8dUNvomrZWNKw4CWjUioWmXdnnhx9QXgG",
  "key27": "98xZnWLb24JZbpWpSAmN5c5LYPmvR2Erb1fnoD9RrtxwXVPpNvR6Ymiy6MuieJHdEvnfoayZhZSWPG7L1Lfjw2w",
  "key28": "31w4CD2VWepH3xBR8rVM8pjuHY7GKndSHYhTtrpQwzxnxN83mBpdbXQxe5ZJ9BufPoGgSTWA4TSbXciQ3MekGcLF",
  "key29": "2Bahi9i92Tta2rK8cX9aUYPKuonrECTVnVY7zGoqcRQ9JerVW7vNVLRtrpcxKpmhSwMPqsBbW8AnTbLCSscnBxW5",
  "key30": "jJEGFmyzokGy8fa1GyHJk47NN97LCDvLiL4hMzG3z9S3KdxR3xWLNr9vcZ4uZzrhjd6LE3iH9vyEpKLsBSFZ8yr",
  "key31": "5JrSRK5SLB8ABGCw1cimw7F4RfjUGL4qPcApznou2DLBgoFNUSCBqE5WVNWYSQSidPNkeXNNea58uX5XuxMGQcWB",
  "key32": "jUtuh78hYJDruoEksV84L1svbvVnhDbzJH6RAndhaB3kvhDSmDd3GCKy3vVVazEUKtnjX5zGzFtq8hnMYy18825",
  "key33": "4yRxJKfGBfunxanA7eKmBZEbTGk5yo7QnzfTj9MBXQerKWCdYxRyojZef8s5YfJWyD1aetNSVyxRncG4Sfe2S954",
  "key34": "4GD5kRgrRBduxyRE1yr7S62q7nKm1yaYtrwGC4VHLs4rhtUT12iW9C7z4PpcFdM8ctpGhRsh7uEGk1Rwv3aTTGat",
  "key35": "2Pp4TUh5u2jzUcqiX3xJrDUGwFxQUnKRysxUz4wzBjHk868wts42r8pMwUdU9m7cUKJ53cFnzKX2eHfCcsFFuLE",
  "key36": "4ANnQhYmgFXA4LcrrGE8vJ3xTztFSfi2jyBnt4PCU4Ek3ZhC3QvyhVsAUAFikqFg39B7ffZgkwV6zeNSMRvxQFd1",
  "key37": "ZhQQsxpgRr2o58ewW6dj5ZemNxesyUmZWPdL3ojUM1YJXihqno4KjjCnv5HMS1Xx59oLeRfd1nj1XzQHxH81Aym",
  "key38": "4Ukvc7tPQyrKdpZ1mtd6CgbpzqjgTTv3Ze9A3YxpFd3axGBChAsKNsdqqZebkPnDLeDa1AwNUPS1GhgNYpP39wuZ",
  "key39": "32UFHeBEcoVu3amgJkyKLm1BA3c6UdXk9kgQVYPLpN6suGWYLR7zn1yrahGqvbfQ51uRtE8C1PmN413MdXddTEvF",
  "key40": "5UxwA6o8tqCSHnDNE8UE5568Xq3jUF7ar9XGY6Hn2CmM4PrwzhyZF4rkqN1yAmqxmEHnQ9UL6z43fQe71yraiqdj",
  "key41": "2NzRByQSL2R6XTapGsjXTmUoFt34ZkTVXVzSc51Nozn5wk9ixyg2ESoM8SWq2tGufjjyk3kgyZGAY8WyqHvFVeFv",
  "key42": "3Rc3ufUPwnjmyCTTtvm8SUErfk8LConApKgQhfyCFRwZVRrCGcwfxSWoLP146QSRZd9kVSMwmqhn8Q2pxmuKp7aq",
  "key43": "HyTw4A1gFTGq3Mk6DWYAyLNTpkyQVrUPGQCbycmGUQvhVbcKGvSJwRj9HFQeujX34fmKpQgGCc7orRVkmGmth6W",
  "key44": "3QePMC6MWZySfCXfPxdVnyjSRnSmd5pVScaEXR52EVbp6YrGSxYTZ3PvYVmHqCtuY1eoxdDMoPvg3FGWvtzPMRLr",
  "key45": "26CcYfrXoPRsGmFTzpiyEhKeqAfD6yXUnoUt3pvDAxwLScvGYQJLQH9Z6qQZ9pXsA1Sw78Ewks2ZhT65ANmrqymU",
  "key46": "2gfkMiSduxbERZQssGDyTRmw2QDnZfDD26u2DzE6UhnMT9w5378n5yWK4y2tPQcR8uKPZZzU2eMNfEEomhjLfqfx",
  "key47": "5SYx9e4bgPdTzWekYVg8ubhCfVnSzdKt6eQVkwP4Tafewgz5G1YuwA7QPqKyomaMZeJJEdgBF1eFzL1Qm6RDy3or",
  "key48": "3JjgW6gEwm9HBDRWg5LbRPVqR6MtmkKgwNnNUTvvdZqM8WqDK99ABfMiV8mW598cRaAkYfxfjrrzZpnX2n9AqRhd",
  "key49": "vtj5Ub712eMkQ5bYZiYo46P1BCuJYfsxdRxXQsKBprhfAyBAmKGLbR1ck2BwSbXLKzzJeQQo7AXMYBnP4eYRiFf"
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
