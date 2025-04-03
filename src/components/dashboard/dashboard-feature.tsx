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
    "2zZ5UzY3SPfUNLM98aL1endPHdZ8uVVqfeFGAyN9noycaSq1m8ZtE15ZkbByNHzoN5KGFax5RP7GSFbe8FLW5mtT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FbA2Boo7WzgpYzwWxDHtszmn7TSo2Yknqcmi8jqK36rwt4dhPb4gmEbfUH4HJABoWBKnRivQbcH9R6r9o4xCxZs",
  "key1": "4naVk4xtd3d8k65Qtjuf2KjenZTgy9EPsURKc7Mzm7U1HShpJoQzfzfZoCu9sRPLThffkxxWSg9iMrNfCVoZ2dG5",
  "key2": "38we6xjrHGdzJczgC4odgNPFudGkjYshqyUMU6NyLzC7WwPcXhUA465PkJNgXetxdfeAADazHEfADkyykihsb1ju",
  "key3": "25mZfwp4L2BcXLPERPajBC1jETDYrwMa3ZiCMcoHiPqX2phu8zUs4E483txFXfbUP3igvVNGMybYvmGyyLe5fz5W",
  "key4": "3vpdxikM9g15EYVszvhqCtpKSHuGfL6r6gnBzMmkjsAZad8XeTJDWWG3R5Tm9ZztTS9xADsAQ9FC6z8BQPoFgLRr",
  "key5": "1y4yHJkXnTSudPVF1ieo3FBAQRxEBDR4U2nxapihWgfUPBhzGEgkAUgkk1iXPsytfirqG7dRMe2pecxMVjPeoNh",
  "key6": "5TgwLAtcGL1H14XFfdXK6kLcAGbk1rnTmiTL34PZWo4GcgCxFLh2ztD8ViwVYE1Jgb6kwfzewGwLDL6ZrhRrMyh2",
  "key7": "5kRoPizXpkbsYHYCj3ZUaPStj7w6gffkT4txE3WqdjrnA4o9ksPiUNs6Cnr7wn2Jpx54nKynQyeXA19qPAcsAnQP",
  "key8": "2Toa779jdSix3gNNfdx2eQKhanCQwUhLSqENfPCg1G8XsKSZ5yJBpqZcvY4V9wMEK8iKejEdg5J9w7KVgs4UKgLf",
  "key9": "23X8MxLLwPWJTJH1pudAGj2VMfwxLiXMqAWhFCcduQxSnMWJYRkNanxP78UazwKpsXqJojbjEU7DdbXfL9dfi1iB",
  "key10": "38Ab37tnA2fYW9q9KKCHkvqHQou8CSapwsKf8PRGjanpdB4NRaKU8TucuuXPMBooEkk8uGxEKVLv8uBfBwXmBGqm",
  "key11": "45FLrU7VXt25QS58seqx3qG6Z768DoDKveEmMnigzgDK97FpqNFna1Sf8G4AEfEyeCac8i9W5Lv37yFKuAvFg778",
  "key12": "39XdtAYYUi1asxWTtdaWfhCt3xpC2EkcohuKe15avuXnFPQwfNSvSuZCXmjq2mbbB1TQRPitt8MPfGTeNgqDN6Pj",
  "key13": "3ucD5pv2gjpuwJFTgxBpC3qZroR759YGFbNFETtJTBRXD9gBjYfnov1CWwLkdk3imkPRBoudsJ3z2uFx9VGiFJnb",
  "key14": "Kf57WMRnhPgpTZFqdEekN18cPiCXzUAZeYpT69b6DyWKu7KWgSAxnsVsVg7pktgindRm6wGXkkKPKsBJqWHKqLQ",
  "key15": "3Hm5wTo6Ncq889aFKoJ9nLNeLZckFrsexdFQWwH2a5APqS9jdY6KvKAYzsELGxVoC9x6yrVBphNSxm7UrGhJt3o4",
  "key16": "vDEAmLtKzSc1PretxVQVsVy4eyPYdWVvc1tz446wK4pepjsTCMLA8xCojnMaCVUUuvvaBN3toLSMWWwYFCv4vR7",
  "key17": "28cfCmhz63rFNJysXswv5LLe1rhQpgF5aJsqSdYHcXao1TTHNUyEWCrwGLyicWNTGH2fJjVDyeuGaLHZu2euZbwS",
  "key18": "H98vgmtPg2Y2gDPvmybuS2vCLKSzcQcGuXk9Meg22jHMVJw66AoPsy9C4yUPu8js9cqRYpp36HWn5VZ8FuM8QcQ",
  "key19": "hwgWruqtMUXFRZmjgD8QdrMDfeHjgTaPGmqcF6Dzy2e48buSsExUCjoi4MxQtx5L5b5yTUxvXBdGJjTtfNsQeHY",
  "key20": "4sFZXkaSRndQcjdc9WimgsUPrnVgxvoeAB4iByCb5QEEgZhge1XQCAMDWF5fEzScdSkNWRCC881ytk9BdwfAwrCE",
  "key21": "49655T2oUzKpLv4qfJLx9VaeN17JL2KGcmtCC22Zkn4YwfApbqn8UFqrvWgnCwMjJ2DkQRGoydnfA2NknPc7izps",
  "key22": "3Rhd5U1KM8n3mFShwPSLptDyTPgxqnYAEJBLYXSSBNzpRbHh4Chs8oGmHzCVbjLaUn91BFu88Ui3ENh81eL7X7Pz",
  "key23": "5t3bNHJ5t2XdGHj7Uz1FFxR4QHQbVqC4S9AKjMGXMz9NjUSr1AD7MnCAAe1inVmetu373gLCF7Q3Cr83fGzaRpXT",
  "key24": "3noiRLUBuDQy7gSyvCdypsaKzbGeQL5T4vMTNRkVg3sUBw9z3Fm1fjKK4NWgZtoGA3knSnLEnUofXEwVupYgqCyK",
  "key25": "4t3xe2eZPE7ZBCgXkiSa5JoNrLfKQT2NvbLgHqUo6UYq9qDtCr8XvuFTGQVbDByBRumt4UX87F6uTGts58HrCv3k",
  "key26": "4673w2rnEUKXgL7T73duGPkL32j9yE4q6zKiib123LZUniNf3agpNSqhURxjzUuSRTLTWKhPAzYpFMzg13xJHbff",
  "key27": "3HhchNYMJofxJdPDSYtCCdudZARCsPYWgYDrnbkMUfse1baDkrhWfHuSPtatcZwHX1ZsBDaYZkiBRwpJaCmwxMvF",
  "key28": "5HzQj4KRKGmED65H7q8phhLyFCHEtPeQRAz8GidzQq1ggchgK4VyKtAU1G42pPKEJ3ZdpDZtYCiwfHUh58TM3buZ",
  "key29": "2nLn9i1WhUX58ySKoPrSY5JbiAcHjJ45ra3Z8rG5BoJeRJ9rGXzSCR6a1NvqC9pTY1qYBLaw5Fh53EEqZ18aGiA7",
  "key30": "3RHCXU4wd9FdLVURG9qhvV73rpv5gRzPr8ahMymmU4oM1zJyvnuZCSb7XUSCdHTRke2TvsXTJBTsLQfnr6wW9RiR",
  "key31": "2HjmkWhbwJXPZ1dFuEqxFUg8mDEtUYaGsRvRcYURR5SHUJaUbgTngp8bUDDqRnYQKjSfSL6WZB4U2E2zzzfhAYPW",
  "key32": "4HyEMBMyNiGqLN9dkHDSvy6piburrMsaNZfq2D4BQQDiktZDkexChhYAod7s17Pyn4X7n1SpNBbzpzKWtcu4WWCP",
  "key33": "5dmQLQ41ePzsde6psW4oHmdAvPjAPwdxpFHLuMbxnyC6TzdKVucaK7izvpJq9sK9S9LVkp24fn7QNaXmLjJGNx9f",
  "key34": "cfMmu3ZZwWPmm71pdn2P4XCfP5KudoUNPgyph9HJA5Pa26WKivsKW8tQ6eD33wpRh5bU7bvpnBkVB7H6jRRfRkg",
  "key35": "4D1iXaEtsGzU9CPs4xZVQB4hB2DfbhCPft4emMbqqZmaZ6ZPp1qx2dZYUmpoHJGTYRJGc7aJeTLrVpzBKhAiLLLg",
  "key36": "29bvCdoQHWJy6hLX4Bxe4EnfMGhhTFzwwb1rX9XgYQyfK8dJX32unRCoS1XFSNLyxDkynMZdr1qMjkpNL9pQJsRW",
  "key37": "3azqWTqYwPD2JNfND3LBmKgyJXYUk6MYFtvjAf9HM8sgLDbdpXHNjwg7VVA9MMXuFM9WCAgtpDHmZ8L93YgZh2iE",
  "key38": "66fEtCKEkFG4Paj8GhV7oq8KfwV1oNBzCe9wByXpYL61sUWmHURY5Vgq72gBWySTMkGRbFqetwQwkPN7YxMS94xH",
  "key39": "qRy4qgYBzG2BoYbvR2xc2x97h5z1y47WJHgJeTXiPRUL3zaLomMP7by6zgtP2o4bvvqZmpysdP4Va6A8pKDtWGD",
  "key40": "2rByUjtY9MPW6VcbjBHARGC3X5cN86K4JBk34XTQaWmwi6EuFnbS79gbPjSJJVQQS7MffsasPurnDqwj28K4UCtQ",
  "key41": "3n2fqPW8AoMYtXG9mikQrhws7zbKxzxQcqu53Sc5QMqTiF6Rv4f1MuCSapr5rVomtkeg3oY2RL2PfUhKQCn1eKpz",
  "key42": "3EcmHUTf1gjXEtZ8ZvLGXPyMYHbFYq3oA2gfZodkV7tjeEnkUWBiNDxoVzszWwjM4mxJeVbTwo4shNKWWy3tRRiW"
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
