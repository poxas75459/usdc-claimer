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
    "2WCHkeB39X9Y9mMZZrdrtpf85z9HBoa565PHHEunijApa58trkYohAZpvcMXWWUn57pjABn4sEu5fH6tHqSia2V4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64FeSmZYWnHQd1tG1qfwuw1hXirT69e1TFhFQyHMdb8v5DLkDbvuxawUyfsZy1THmVh2LMmaZktePGxuaktoBLVD",
  "key1": "4jpTKgSJFnK1TmNbfP4hZ7HFZdrf7pgpYYfB6PJZ66xPAF7zYhtgFCaSfDitFZgwtz4kGMcZxq8ntfFKSXnN2pwx",
  "key2": "57x9c4K1EDKbbKVfaUZxLgAVivqVGBMuCjsVjexxEsMtPEUaA5oWuqGgPKeCsHLerUJw32dmcabodZG9y38Z4evE",
  "key3": "Y2rQYDpDjVN5A4wn2Z81SfbHCEUaX7tNktBa1SaHAtNLjKKymtdRqnmhnSPa8FmL1MNp6EKCYvCeTuVYAKoKiih",
  "key4": "VMvfwG4SfoWfTSXn85DMgS5oGRX1AdTkZcD48WvJq8YRergFxoN2pXUntnLvRQTsztybjQfbH3HfbPAWbdZMKUy",
  "key5": "5JDStSezNB98yh9oBWaNGy5WjuKsEzDrkEefSNXpB2NQ9Z2vomPhHATXPRMfB3K8iPQDtwViFxEqtLN8m4JBPpKC",
  "key6": "3TArByLqrTxLzCR1RGLMrrmQtuVAT985mPrWQ3ypBFFktZLMU1aawddLnqxHex2kQtocAULR2GyVWyc4v5yEAs9m",
  "key7": "P9jn3RyNzNdqWvRAqeiiCjy3qh1f411jixdNG8rY8wdmNt97bNL94nB88Z65zTiVBWN7ooZn4GdwX2LC6ftgFzj",
  "key8": "2tGRsoNMw8XALFVer6pKbawV3MkBnLoyMfFPW5Ka4mXWBKuFBeeD9gwqCm7VcqDQKkgTWQAwXteu3GErECafkuX8",
  "key9": "2xakagSCj6biDZLA3abUqgmpaANSfuDLZNh17yFSWTPgx7tWqv8riNSEBHGoPiN28fmJpLXKoJp7wFcuwJLLhvtg",
  "key10": "4xrndxFGvrLbKUQ6YK2NhunLE5kCgBTbb2gTDjCEqFB3We9H4NhKM66R4GjQmah1VTRCbQgHuFwHi7HeE3ksNy6P",
  "key11": "3D5HNfkJXtQXHGLvm7ozHrytZuuRp5QtYrf15QFCTXfM2JgdRbftmbioiRc26S9EG2JfEVFJQQwkuv1G1Tst4pdp",
  "key12": "2NhNoq83Euqr8uUvqT6xCdVRQbXuYi9p7KLqtwvQRyGtZ3wh4phMpCc5vsX3UYkmEtuHjernK1tqMzhWHTPq7JFm",
  "key13": "2kC9EsRwSnV6L1XeU7qy7EbfoYh6drxzfmxW2TvNKSX6yjXiLAcTVKRg4y6pT1gAL2XNKhpojMMtFgZfF4tS7sQL",
  "key14": "4PdPsAqobX268RMuh9BSej5mowE8mP9q5YMGrzDxsa91jjTt3B2CF5SDDdWwbBsyC8WmR95s2A93iHWno96kZ4ta",
  "key15": "4vjnvqE3kxuSHBkm6jmpsZtfDQ1acmwJayFvjpXy82bEFHjWm8u3MkBZ5huDY1pK4yyxLfM5cxbCvmn3WXaTjzvd",
  "key16": "WJKdfA7XMQWnZsiEKk7P2UHYZ8239czHGAc42pkdSA7pagDL6r2Jfr5Z13ZCEGN3LTqY98fdk5KUijjHmLFMEML",
  "key17": "4X92vCdCZeWWnT5trp4tq6QU3hXYXN91k4PB14ousaMGDfPs1hVTVeUXDe8nNssBw7uwU7XritPF4obimz5rc4EL",
  "key18": "NxRKkskQpaNrWwkssBG4AZDxeFfPSDZxHrZbGGdXzA2mahmF4uCrTy2sqJyMTfrtweaiZYdsDgrMkWDDTvRde6C",
  "key19": "5sJR1pWFwG1uXznTHte9DZmDfKoGK4hLSoVtant2EpsM3BTM2B8oQqGiW3stQrRf15xbjJTd1AoCyiaqERnhtyYL",
  "key20": "yyc7RdPRUZ8VXjefmMC5C8wX6vj3wMrwvhm8MqyrjsTkNams4SN9XeQTrptk1wyrQ2UpjGpXKsTRJ7gJVX6cxMr",
  "key21": "5NpvdpcXhALJBUb543mpnXS3svP9RS6dzeEnVGyaHZdUW6fv9JLomDPmQvBpA9gviJSDCNpxK4hmAsMzyi1RNia1",
  "key22": "2bk5vBty2cYdz3775NtaQWLWff6N9FeNkNimRRuTsddR5LqhQy37zZUjZAD7Czb6tgBGkNt9v14Q26Now33xwtGE",
  "key23": "5uuMoBC424hiVy8R7LXdXpkmM9P5ANua6n7vNncrMiBjUshx3an8k6i5tGXENwoDf7QxMZ5D61SDkCg3m2Wjuncn",
  "key24": "34pk6J5Jh1Tj63Zv55w9PJUfktXdVn1D7qqQirSupLGWT6pWiyPkZjniJncaM7LRW5uGjYGGL5b8KQqeMwaidMjn",
  "key25": "4mFkH2zeYuVkJBPBhh5gk3ouLJg7wW2f5M8WiaiSeoqa5HncMkqsaWJZi4xjqXqXCHry5ETwR7hvPaetFgtqA7E4"
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
