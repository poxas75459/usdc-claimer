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
    "2BsLe7vRxHtrXPsYoU26bRGup2An1SboNRHAXakCwhfjFw2dCMRVByYorgZUG6e6hRekqmw1JRSGAETfCEkdNgb1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bj2ZxhMn9Xa5iACRAT3JoPGVg3z3j84pm5e5KQDTqMKDjC1FoqPShR3UJjdsCo89nJ6qDhRs2W1Su77F8xcZi9x",
  "key1": "8Kj5TL8JcvofzzvwLDbSXdJs829wWaj65tbuu3HkDP2MaRBTWwCHLsS7djULzjwXvAXvUqrC5D73vx2voHZnSjY",
  "key2": "2PU2FvnpkboBQ7nmXVWxdJXreWuETQ5XspKv6h6k9tYXsiEoPdKpndN9u4pk1UCyFkB6HRyw6sMMXsvJ7m5T4kGR",
  "key3": "2UzCtZnmfv6BzezfEUk5kk2kaJ4FwemDWp3MjkrMjrBwsDtzPrCPDfyvfWbY2VvRYjQJiGs8xF7CR9TUqp261KWP",
  "key4": "HyCXGbdrMNMm4TXcdEvShyLdued8mPGBogQidHswnab4eYvZJ9LyUJQXTxMS53frwsSqdEdvvce6gwayhfBMFiU",
  "key5": "4pi8aPCn142Pin9fLcEhwiMZDWgoybhikCJVGsaH2sKsTcP1CQTVw7niyQkBNN1SvgL9HGFKW4Uicz98nETzqr6t",
  "key6": "3K7HxJxwNu8vAFybiL33TwmBdbuFM8ojDo9wTNyLKpJ3nopB3CFT68JJLbwiPB4PrL5XDGFNSVEaqqYQtZLqRHQb",
  "key7": "ECAW1Hbs26k4zW8HRDGmrCNPSVSbo69Ykap61PXHpVaKkQtWddapzdVxorCQTTMDy12muywgEPhzm9pdf1MQi3J",
  "key8": "5WwX5eafVakCDoGr9ss73Zo2xJUduxUxZMcC18GJnENz9uajCEhdW9hAqPYsWThQR172GpPPj4ek5mU9L7qznQc1",
  "key9": "51BBLSyEBUy63Tg1bu7fAtUJQCBqapg3HVjuPq64FHSf43qYjnbJ98o9J29uEwwXdPTyVESVo2yNt4zDGzSu7X7s",
  "key10": "4ms8x3dXnt3tBCgbFgLkdCDBfdeXfCZPfodmLo57xmSGvhvhbrmqoWhSt1E9oGvmqh3tRMq7fLHzRAst3K7qwhHA",
  "key11": "48LQVYKDFSe2YSXGpe6kp2DMjsQuBoWH14LwxrwU16PmR2z4rZBxFfX298DHqmL6T8WsuChWVK6pPYb4skT5kDdt",
  "key12": "6678rdwJeeCHFyd8WPsQshfW4GmekJunVPM7R3a99vFHEjyK2uQhGcVccx2k7hdFEv2YbMRVpKmBcLdbz8w1ok15",
  "key13": "3Lx43bF3sGjbHYuRAX3CFEpzGVEzjotsDfoxEbJotJA6QReQAneaduakoq51HN58ktqVbqTyp1c1ffSwnWcfTbEt",
  "key14": "5nVRngqxs5a7rmHrDPxS6fNUvrMdVFHDHfjHH4o84C6fcZcs93bQ1TkL3EAWmtV5uRvigzhh1jK4QjPVigt8YPLs",
  "key15": "cBsF15VtzTx5VvKRsD14cvSaUajy9YodEWg1nrHscJ6ow1bPNHCDR3Hghmda6tM47SDopuvkDCVWUwvF4TZ54z5",
  "key16": "4ptjRjmeeZi5rxvwL4SEuuRJRJWjLK923y2mGsgZVg1aeainrnFxtun6TGZ2nMsM6S7n4SMdL7mEwiUL572E4Cgd",
  "key17": "DXgURTxbEo1QCCf7jVz3Y7ewEmpu8QTVp6VVWLQXgh255imT9tobuubxU23yuzAGPMsLKqgpW9hCw7T4ZxsVoJU",
  "key18": "3MdH7YwivF2SGPtVyYG5mehxoKmmiKQEtvpwgmYpYmnW2CSgUm8nLeASVXhWyE6ZcVL4wUX7aaUFCwsNkaWD4N6P",
  "key19": "3hxBamNhkjFE9doZ6FYKZCM4ezFAypaoiYWiEdfQ3cQFjjAXmCYcZgf4MSqQeaGCm7WFeJ7joSr3tJNn53YeaD2Q",
  "key20": "2LZ4GyeShKJA7NHvLJTnnAkAkAnoxCtWpEhs17z3hL6csHN2JtzurUkoGCS9eoMG2rTXQw3wkqeyATcotRCzKCyz",
  "key21": "4Z9fLQxvBp7zQbXmWTJTJcPttMT7p41MADZiFtzBndiEBRpm8JZq9Sfm9k62wGcEGPCVvn439BrogKQerKh58bV2",
  "key22": "WQj9htY3EsyaVr8uYVWpoMc6K8rrPLTxm4546dvR7aTKCSBXcsH6YXRZK2otXTCLGSM8F1viafTyzsMtYxoWDxm",
  "key23": "4cduDLiNsPKgjBAX3aLYoxxWKPmYMcAk3cyN8M41UZBiT5pxVjtc66DvTsjma9m9A7ZU75WBqSLvvjozeeyxh3zx",
  "key24": "224bzTJkg2yarwmy8KhAxWDtoL1Yoq3orfWGEEfhGNxyzCqjXBLFCcZLK6mgBRcxE5yqyE5QCKFxWuKwttV3PcRo",
  "key25": "2ApE5JMq8VzbZiMTsdwDAoX39nL5Men5DEvtTTaPw3wR3PrPsLT7onRQKsHKpBj8R5cDdGn1nUZc96cMDu5Q82NP",
  "key26": "2kL8j3yqUUFvKvxbiGfVMfyUaBsDT8CbD6fy6DzXHMQLrPUfegEDdD4FjsTHk2bGWtBPwZ1XxagqHHXvZwUTstxt",
  "key27": "21fPb8gvnL7GMJnuHQKm7Y1qU8MBnkTKBR8kqn9XJyq9z1dTyDjB52ydLUiDVtP9hutNmKz4mmLhnAy3Wdm4vnvP",
  "key28": "2UZGzkkxnSp352kjAT872YiHvhX8M37Q4yAP3j6cn5q7kGoJQGzQhvX9E2oxTW6BEQHwwYvaZRmbXFrqLdzveTRt",
  "key29": "2s4iRQ5Yuw7Xmu9dVTvmkXWYuRmTfRsZVM6EPVhGMCrUMyCV1uGuVJhkC91LSUJfqtTCrRrxXMfhAauYpJQmsvf1",
  "key30": "2iPXzCtiwZBJ2vwgGoSKMiMJRjy18y9Y8LFs1QnfVSLwAtdL62qeMS8EKuA3ikuNEiPmigoLH7C421p74vJWQWXw"
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
