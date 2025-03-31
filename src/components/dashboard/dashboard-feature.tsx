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
    "5D6Hq5Bq3DygSNHkPfBsaRVNFg5nsv89ZCXpUfmDn5MwxRWqv1MU3PFys3E3gPmzt7WMr9RjQAWom1XtdBVtFYbs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hGK81Gs8zeMy9kbk3PoFVb9SDDiVUnstL32bHSmFinTLp7xhEcSptrvWs6zgXW5USJ9xdxExoQsARJaYJJJSJ4E",
  "key1": "63Exqq85CAHRNgqvb39nTXBaji1ZkUe53miYX2gLtj75zVjom573cXTA8dkmYU5rYrUJJNTmjyYgG8bMMDiSAYKp",
  "key2": "2aZvDUunqkQcTCja6qtKpVCh35FR3mVzLiyY5VFUjhC2M7AV6TdqgCPN5AD5obq5tzuRuFeCGte4AEvCwXvm1NVd",
  "key3": "sCmLMnjcGmmeXQPGYANUGfopXLCnr5Ygwxhe5grsHcaGbRFMQTpDKJoHvpJFqR97HoV4GXJzzPMaei9iTQsgj7R",
  "key4": "4BEuB6DLNQjW4ZHbEtcbJMwbF8Kp3J1pWZLgfZ255exfNNdbqok8aAM1Ro1uGhr5Ctsf9N3xkC5NiMV5E4UkYuGX",
  "key5": "bqUq6Roc3CH24uYPaAM5MyqZQvuxQDhzRCpwDH3DKeAULGafZXMSFV7Ha9mdmmXFiHptjtcvx4J7p1MNTxUWvJy",
  "key6": "2ZAsEbQwNVzHxcRSXUbjkXo86Nh1Uert5WFKZ7Y9gzqKSre1BxcaWYAQC8jBk9LKapjjPocRu4SmEtWiLC1yDHCq",
  "key7": "4Sp1t88Jk7fm88cVjYuEAYqz5N7r63BsPzgZHhyw1Y4NvttNHas4buTxojbMdt1NaSKnRaJUvfifyepjt1Hum3BM",
  "key8": "5nZ386sxrMrSh5N4KkS3yhsMjKdfRyBnZx2B6dvVHn4h6y5HuUVpLFLozMVEc8QfihbuEQXxERxKWs93h9VYQ4rg",
  "key9": "3WuEBrWsWJ8MNA5DtiH3kHj8ncQ81Jyg6vRHo1EqddFSP6yPZHL5CoCtKv51GcPf76PZxXCr9rttwMnxLiaPei8y",
  "key10": "VLg6TVyMbzQXVGPxkQDWUNzBfxz7kCK3J5VYQdUnhynWdSsgHYMJydWeCzmwPG1S6deKujN2kjSdXGRm8kt1hPf",
  "key11": "2AycRLfWDi8V4p5QxqJQ7d3WpdUsuMt1dmfT7EJcFKJXFvGw97HfHT4UNj9ZMkkfjjrq2JaV1mRXipNtP12PScb8",
  "key12": "571eyf3bmRQSjJxbtExZPrtC3QEcamNmt9jPnDYsAWpgazxaV98icCEKkFGZh7G7VwsTBhwnJpLYUNk1ChAdcxpX",
  "key13": "6fH7tCF1EUKX8PRKydswqYRQbveN6kcLZnjy6gCTgCx7yRwbvTt3pHs65Rvk9cYHna3jkQkLuipHGwNSeMMy4kz",
  "key14": "2CEfy8mnZNZiULiNm4qM9zi29tCjiQh5KHaCXDHho5eqF5H7BtXGURrBGE8e4KjitBt4HaMyFnVZkvQ1aMmB5hLC",
  "key15": "2tBdMc2uEYekXPoYat6xq8Y62ZGPn5DmofXSt4BmQMiUjmpJdSPxsAamgJjYELqQfV1ZnX6ja1EpEDuBYMH7ZfLm",
  "key16": "4KhvxZisbpzeHG4B6eKketNG94tF8kUrjFG9SjWtGvkWjTHuZyj8cPEktkX6t3xEe5XdL9w5KS5NwayNUynWn7XZ",
  "key17": "CxWEQewCq18633RVEWDczXipGCyBQYatHkqZo4KcL5tSEkPZPW6yYQ6SkmehoP3ArFoxy7h2cS6BhUVJ9VcZB3V",
  "key18": "3KXTChZvTZ38hEFmcfh2oomu6MiDGtUt5nnVbJQyGD459MA9QpW5aGND1rwCXW8nGN2Lo6ogXYWLiHrCvgk4Z8hx",
  "key19": "62eTEn4ApFFQ9CsxDNPrMjZik5e2NhsUGRQoEUykqqcwand4HBwkuDkwD859EuSK1rkwASBokee9ya2kwGHUHG6m",
  "key20": "457byTfUnrgT59QAvC7Mf8jbmUHfU4PwDUwwpyFMaSBF1BpiBmF6kR6i8KMBfgkiqoAjF3XF1y8wBkWrAPq3fAtm",
  "key21": "4gSrXgeJNZvAhZHZB7vUFPeMSM7yqduEHJvhhkwyt9Dp2fRFv8mLyCnGbiszk4rs37fpSJQNShaMTrGzgTGaTm79",
  "key22": "45fgfB6V8SmwHayFFmYhCXYHX3eEkKfwyhgtxXy9Pokeg4WPAeh9xQHYBx693AQfzQAKNs5aT5Xd1xeaWGCmhGsX",
  "key23": "5bkmWmZx65jMpYwA21kVyLNne6bSLjS4ZRdJwABX2xb2TLp5uyPrz1o7FRWDpr2wFcPbV1WFe2dv4CTRozFpsgNA",
  "key24": "554SAPHWFoqJ53rLmqxby1tbxqgvTpWgSFZMbPJhJXTc7S13KCeBea2HieTrRQfEMDb5Y9dVCy63BKLrHqtwxNQW",
  "key25": "3Xc6Xqzdv2CnBLP6pwaUXCc3AjVXww6mgqn3TwJ5Va1DDRGVTTuKGNf4Y9HzXrh3uZcgPTqHXi4uvQbW2dvGZFAS",
  "key26": "3W7gpWm64Hwd3o8BXewbpWCqbuCgwJ2QHz5rZZQ9ZYAdrjgmpnr4sWzC1Fe8yr2weKXDdTVQUAmX9o7LvqrKo7kK",
  "key27": "48fVm3bq3HsqPH6Jf88cocjprdPiSAor9nZLZxMYMTfSMwY5sCX5eNbzb3hn8uLbFktLVBf2qdbkoPAx29sVKsdT",
  "key28": "2BzjWxNMG5AXm34Mz4aegqsbf25h29NhcoZ7EgVpgGttVK9ZaAkxUdpyhFGHt4RCoR3ZNHs1XMBn3BmLP1u6fhwD",
  "key29": "54x3NN3zrr9ndLir3tMjXKv4RW692RVxpVceYppzoVL9EB2qgxBxhfF6UHLUJzfhTBa5SEcsrMVkix2n3q6CyLsS"
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
