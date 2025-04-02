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
    "3W1KbaHdR2HTE8de7Ja2STacBQ7Mh82Ej5heQphrJ1BA5XuzXFvkgjZGv7866rvrB7PniVJizywZpxqrx6Xi7NkZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "217Tud45HjuvqDTThLw2swYmjHrKQMguh58NanN94YoJYJFexPb38ERSXFUz8Nur7CQizAvGTTow6dTbEavQxKXd",
  "key1": "5SP4vtzY519jFFMxPxVgMBgWbexgAF1MHNG3rpF6eNRgcc59FKYeSEU7QLwN2sdDMCN7GYbjRFk2EG24nkEBsYaT",
  "key2": "3BzjJaDGsAJFKZHPocPvpSC4azPzeWy9qDAv5L4rTi3tPSGRe3XsaxPc6joLRoH9UjaveuTX1oXWbcMcni9o4aob",
  "key3": "2ko7SyKVEtUpVhh17pku723GW6ihVh5CVtdVwmKPSTgYgn2g6WzHrrD2AAEnh8CJR7oposiG5aapnCH6Wgvoo4bs",
  "key4": "4FE5yFbwxsHPGW7f3928YNX9UnY7xA7pyjkBVs4Hq4vA1RMzTmTE137DUGGtdhiRR8DHTJpg4TMQfDTYDdoMvTB4",
  "key5": "48z2DCJWMnFjABYiSQEs6HHy8gS57S98jhrfjdg4FwZetLHxXKCTWFDQvhfd4fs9uy3wBtZ9YcpWZY9g9EDdNCKa",
  "key6": "5TUESMhoKyHxWDfCHpbfnj6fRmUkApMUXx4fnmzfRj1xnwrmtg5ZDkZFi7kNmh41KzgF5auSAPRTGzXKNEfZwY6M",
  "key7": "JSCdspyXPGj2yaTLNPfTGg8BQdwJWnYUjiAMsdm7zigKcHN9teRSnGHbBzdf529hzzoFc2Moobzvdktups7Fh92",
  "key8": "CoFES6amAN5u2WWwKaSqyhVCo7ctfeL2pmbnjGxrvvDuJzzrXAB6iizoM64h9YJriTvMvKFNMA7DpTZxNjfEvyP",
  "key9": "64oBKDvuPNZj69v7gYgUW9zfCjb33wwoziVoCcxB1e8hVgq5y3TS8XeZ4WhqteeknqC6eozencJSVYFqBPtjuSf8",
  "key10": "3SrFvMkNdYKVVqzh29YAnUvXPxJ1Dr2Jw5PsSb4wcGkkjDkBKonL4Sz82JZv2VMjjpNE1fL8gXcE3sLmihyRc164",
  "key11": "3ptLuerCm7W6S17pa4MYQVDMYF5amr7juki4tsAoyggTNr24kxyhp4GCxjPfauYJbF8vg27ugCCVhXDo9EN3MCKf",
  "key12": "5QSMj64X6WWLDb4gsBASoxbLqGXM3kwThzs89BTSNgxDaCJtqMf6TFA7v6KxReEEjeS9ux2bUnWpA7KuXZT98tfB",
  "key13": "2EN1DzkbYxJSh8up7qs6Rn1e9tNZnhRAL9bArLbKtpKBPtXavRbK4UUH6g9ho4v4cjneW13HZ5nNv2SpwEV9bH9n",
  "key14": "2cwaXbG2Kxd8vknEaRAEjMhKbUrCCFY4ZvXaLyJquibE4UyDhaaq9GDbHwTgiwiDTLARWZerfgSeSdxiPPwB9eev",
  "key15": "5wd2iRYZtmw2sKXDaUgBi3ReGT1h8BVnC7DhuQcPvdFGN8oY3n1NPkUGEKH7mDZPNsRvLxtozKffSVfb3yyYnmHc",
  "key16": "Gayc2j7ff31yuyAjGkUHKjfPWFwPGSbZBfqUAc6YiEq3gekaWsBZVKLLkoWgenpc2kqK3t8FxzbcaQXhphieEZv",
  "key17": "5p8xG6azV7TDPyiHu6oFq4PKB7gPjVjioqkZBpG7uaZSZWwaq36xeSTJy7A7HYR45C8fWXBpjRgp67M2zjhSpk6J",
  "key18": "3GG7TVCtVVy7ybUz5Mr748VzW1FAtwgniCNqX1kBbXEh1mLwQNUWjoK2bvsJ5yk3xUv8syLPpmC4YZsY9G73HsvH",
  "key19": "413XikMeW938PXvBZVRc3cDadFi79DDhFGoV3BFW8zEdobNZKcCufEDsu9EKEWDnkgXM6Zy64STtnuXP4KmjqrLv",
  "key20": "1yC4eq8agodGJt5Q7E9u8sSFByXwgobtDo47zSP7Ga3i8FYCSrTm4QY4fmPNaatVadQX6MqDUVdkK8dXbeTdk8q",
  "key21": "wJ9tBkXtfcWkJ4uGtjC4vAGd5oz48y1HpqhKHHQBpABVEBuWbw5hSs4YjXLPtHoEcdxApBbcsFYueX4ViT6x9MJ",
  "key22": "4Nro6T1Vbd4w1dbUdEw8exZZmqxwritLMs737zX6PY7q3pFjsXn6VD4iAWKBR1hLfyTW3ARygRTijb2JkUqCkQnu",
  "key23": "4N8A1Xxv2C2UKgkRgXKdVoXatNGA4joTRedPANRrqTnATcbVMJ1umV7Ka6mLd2vnWoHAoS4r9Jssmz2Ysi8bRaNo",
  "key24": "2AS9bWrGH6C1yuMzPzxkmFuTHxMwkd4waCFtJ4yZ4J58ZcXUYGvEXUoeoyfuttSjxTWHKJgnMQbYcYJ4ynyDsc17",
  "key25": "2bd8phnpHk4WLSm49wrDfdNErtCAeTRNM32x8ZwF1mcFdtvpUfAchogpSLxuLov6JiiPArvs2Wb2xQJ2nSuFSm2p",
  "key26": "2zcCBFprrvCV2wKXZN4nLUVSN8QqZyfBJFCTbYPY6NufJQXox8gAPNssJHu1AFpKTxPhnyesqGTdbWa7R2Np5i4E",
  "key27": "5kBPs4BJLT4ByfQZvjFNbwQuC742LoGDJyzPDwut3knF7Yi9g1ekgaPLs4q1r5tW4AxJtJiEUD3rMU2EgoZx4CaT",
  "key28": "41cwuJG5kR3aEx2BntkRsNsVxN7hh3Qb7xceeum1F4upSmFoVwPwTXYg8swAUPAgnT6JojFwRrE7E8WRnRrMZ6QT",
  "key29": "5PKKeHgMRwnFVWYyqCghCPKP5xTYCAuiaWvy4DT3nGCn1Z2kTvBH5eu8yzHkNTZfAebktHzCxvitBZAryfveweb4",
  "key30": "36EAnRZ2SxiRJdCFh7ttgRBjgCynX87aS1PSQYJv6fTUshfpoLhkmJPWowET9PLnWKAhtnaiXBiiFWM1hgWyzujv",
  "key31": "5d98SyScAxAGiA5WY6E4Dgv5B9jw6s3fSittpBoA1rCdDafkAo6JNFTVzyqYNYhK4dagn5LqwXquNdyJ546iNaov",
  "key32": "2r5jjEcpYXb3w6v1GKmrZE95PBZFhikuqhbCdyWJUMCLYjjgGKa9ogDe8duZaJx5VZ7QAGDEsNiqECDyDkKCPoiJ",
  "key33": "4mxdgwWee9DsPRiMe4ugP2kkqQEyCaX3Uh9rF86fsWjf1q4rV2DL8SF6TftUEQ31EXj5cUVYFJC5zsAWSyVSQyrD",
  "key34": "3fzh4MMv36LGFbqaTLw2TXGCw6yRHPp7muMoPwbwXmdPNbCerVuy3Vw51wQLdEupKWjq31VWgWsqyGTtJ5c9zmZA",
  "key35": "4S8VveFW77oZcARngGo8pFejku8ajaouCN8FZbKK9yw2LFNK5GMN8FD7WE4j8mYsNKvhtupqCeELrZxicfy1jKm4",
  "key36": "4D27FRUELVb1GhuFatnoHQt4f7i34AXLnmSQwyCJ2fgokWd9wyDihTwboNBgsGdJdP6og2UMFngja5pZFMeHdyob",
  "key37": "3oCAQDgyygKfvyqP9cXh91XK7EUoFyna4YW8q1DsscS61ynWnarkCoeEJ7y7dix5qVmUFuynoZ9nYTXswYsRaLc"
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
