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
    "v8hhweKZjeN86GZPyqNfs7VRKzsboxA4MH2eoR5hh86SuqbDNkHLeadLd71dQfHBL5kAaJZ455DpneQgBm2UNn8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24SuWcjS9YF5pM5pkkn91rEUQtht5zatWYLwr2UBBFmHb8yNzDGgzodHfvetFciAhc4u7Zu6jmjdjGpeM1AR2PdV",
  "key1": "2Jsp35ZMC6jAKoVW26mf7w9ubpisaSpgQbmRZYnV17xq7gvsr5wmow6q17aPf5uiQUHfzzkzeL3JeXwrQPMg5zfA",
  "key2": "porATuq4EjRm8Wvv5gkrmP2ZoSqqQa9cNfy3tF9UntcKAb3wud5ssstsHyyVyKqSPu9BmHGc6jLcKenZC3f6RjZ",
  "key3": "2b1sFdMLvFY7Kb8AoRukESnchC97Dnk6ZuvjWCkEgP63jcLPozej7sDrTfToKbFjr1Etr1GpUivs8acVZBToEobW",
  "key4": "2NAV3d2j8t5Mb1eqajHYUkb8GBHsK3tSPAapTqsBsWynZdBcaQ25uDRZ4X4vm78rr8TJDtEGypbW388fYRfPkyZX",
  "key5": "2RYQ41KdyfBkBdstReSyLW3adkTwbdnczWwBNDfgWYr3VLDARJHso3wpy1bQ8rrb99xkXMunru1C6oVfeHMnNTAa",
  "key6": "2usDLU9LcfqTagUnPk8fGtz6WQtStbFJu1erA3LBTVysCRGe67qdsBoSVpni31o8XM3EFztHbJ59VgUpVjtvVC43",
  "key7": "2YfER8it2KbnXygTsHjQRhzshMHuGwdf5AUeBnYkXqR1ZwqiuYLgJTmWNmwbjVQzUVck3rnSwy3pVko9bp9B2csG",
  "key8": "5Z1A4HkWrXq8PSDbTmevGcWZqb6hhibyYzcGKTEn1Yt3cPVBuhAwSQREc7hvUSUEa4BgWwyvL4K32mM1JC7jvxTW",
  "key9": "3WYjT33LW7pza5RHJXgisBKAm2BsFqJbQdbzjwdg6DwEbYF8WyExCq8fLo5ehZezTWx9oxVWCwfeSJRLisN9xTTx",
  "key10": "2DgT6smfY5ivX9bSm5Cp1Dv7EApDfeLqF97dAzJputa3auc9UXtC3GkX6mMPiCLPxnDxn4ih3qHbticmppLpSTJd",
  "key11": "61xT4e77tNypiyZiVHiP2WWbjDkJcGMe18Sgzd9iUMkbPWHSV2YYWTL3L6zyEDERdWwLyXbg1JThyPmJiUW9qtPr",
  "key12": "42wvTk8EjvkozxkHuaRGm6wFf5CXiRModnhtuY41TjHenuWEfapqzXQKPjGeT6etQdWqHQ3Qcz9XKcz9KePpDg4T",
  "key13": "3gofVyMMbSJrZbPL67dJgaCGrYQwiDwRgxMN5s9BVYB6WA3kvz3zrNMiYCMWjMvpmzmvWCa5NBHJAfXZPuwrab5a",
  "key14": "3nDW3cmy6fEaivzLq3hr2tmNUpC74pKCtT4yuJHnj98oc7CDHEKd5XT7bQhQBhoPxewju6bftEep8i2dADVSTUjJ",
  "key15": "2gxNuBsRhzYGQdDD2591C6XmARVUr5snRjELgbdsKAHurNazyAHT6gP4axg8mgirFPv7DLi56QoUytsd2utaQqoP",
  "key16": "2ep6GQJK7zCuRZRxmXKd2Qk9JdcU1v5YJosuUE6VtLMcBdvsBQ8rbee8c6u1Si5BdejQatTMxoyJhw2H1cwcLSXr",
  "key17": "5TeMouF8sys4TpywyTTUaXasffMALRwywC78J8Wf1fyMejfNY5NvYhtLSdNAKr9LAjC6cZRTcAH4ha8Ta77R5J91",
  "key18": "JAcUcBoWSthizscmUoAXMXNFpdQx6TyAdLaCvSqGBoDRkEaR4s9dwiVvyZysCKPhFv3r18B8jdsjEE7kYh23hB3",
  "key19": "3RFMLHcxcgz3bhSeZYWQU8PJQMUsnSp7bq8GtDDdqggGJE8j6Qhtzn13oFyMZu4mA2MMTCaaK3bc7wMnRQEBXjyN",
  "key20": "2opTTzcQYvY939FT6Y3N953eMshHhsEMYFg6sWLTJ239dQs8i6NyDns978yTELaFhHW5M8VPuPiXa1TR4x283bsA",
  "key21": "2Y6ch5M41xjuHRDpP9YCcYjih5YefRUdN8T9Zi513ZbhR8kny9xWQcP7mRTyBd6PustfJmCbMKdWYkdr7XqCwzDE",
  "key22": "5vb6wGkBdK1Yjm1w2w2PoP2VRjS5PcGhQUquJgwgGxTnR5VNvVebcxvAgYKxc3zXKHbPbNaYJeE1buX2ThyvuC4c",
  "key23": "2mNWCBPrCwpTEV6eBZ8eNg6Yp45yB85tz9RYzqcdG1SQnVeUizwsexPS8BED91CQoFFHJahAwdLExfgUfxjhPM3w",
  "key24": "514bTAEKrMRYL1e21jeu225ZdGUDnLHDiT8MNcz4qdQU3QnqUf4HuaYpqX7ngZTQdKzkd7djzbEt1AUVsNe1RJkF",
  "key25": "3tsNx8KZfhw8qVaQ9T2xzyA4CkZ3obx8rcJxiyswjECwkQdnKsfzu9rNEuNS9bdo47bbM9RXA6fYYrZJetKxLWG7",
  "key26": "9EpQNazmgVBv8UwaN8BhGs1B4SBfsBJ7HQ66pLK7NTHP3TsUNQV7W9g3fpX4DLckGJi5ShHEokVT87KfjsjrKUE",
  "key27": "58yq1bfopgTAvfRREasA6nwN5uJgPxq2SvTQ7b6cHDm5yoY7sM3zMWgEdQMEazQcmpiLMJyavyg5aWknqNbDVUSh",
  "key28": "4QgPm14xfjfvoMRkDAHcj6FKermUjNUD8KZzPMhBA7Po3TmwhDb9xABrBh3hoMdyzqBZ1N7mvj6EHXfwLQ4cdydp",
  "key29": "39uSr8Bg6tEeudD98z3yPfxvdNrKQptT4f1LSa3vBkZn19hkQHWLku3rjypq3m4QuByDrVn5D8qnfFSXcnj3fFGZ",
  "key30": "2eE48thpP3qN4tg7zxXAxFKhDhDJySoDkUcUtrcvkNMSMboGLDDJJBCCzKSmxEcH94k4SZ1ifrvLcbu3WXouE6S6",
  "key31": "4VoBpeNt5WT9q89Z9HwkLuw5nSbPp2UhipxmmeuQErsh3YTFVNKvpb2i8MuZknBf9ePK5pW9MvQ6Cs78pPD5hJh",
  "key32": "3UefktXeqnDfHn7EUqR2Yy8VrSgXduPamWGULBQPdSju6LH9guzx1CmCfCmP2K3wYdYcALWJJLyjZBbve1UbhYu6",
  "key33": "5m8eqEvP6t2GheYgXAyjXcZYXnSjzkrQWtPHqFteSGc3uLE6f3SfLfa96pGnpyyVqyfPZ1Wr8DBbNscemZVtWstP",
  "key34": "2AKxzJem88oYZztKLNrQyyan2uftLkxtWZAF6q2wUz4fEwFk4SLg88jUoRBjYeHCbHCArJHGNhnKMFC49GmQpwuc",
  "key35": "BnFnSj5b6q38NjP5M7AiMBRCEP6PhCFmZkJ4pvG5jyhLNfEFa7qRLcXskHMXv9YvcntEir6h2eLt5oHCDUdH3Rm",
  "key36": "4LPZQZXmAYzLbvJCKwNKbJnhupDPRAjJEpSHaq6hHpPN7x85EtcBVa8ZNX8UhTQ6UjDoeeSEEntzqSCu17ioEWDo",
  "key37": "5CNwjxkCzw6CZxy6VhmQtLxsQac4HFm7M9mrGTkkDYMDCMpmxgkCmha5PcYfbT73RTHy1CzYW5bJfDE12MApenif"
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
