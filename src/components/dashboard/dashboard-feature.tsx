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
    "3qnUaHBkCGYtd9JWPgoBhFn4kbuSeas52WmwZbXf3FhsXBAMEyZx5FHHDabZneds4mY5E5mP6gvFjJbSg7zw3x9U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wehpLKFhF6wR9p8vVo63T3mfjLkK5pHVmWSVQbEPNQeQf6zFzNLn4snB9YMjmt4qgKJE92ZUG7H1ozVdeez9ERB",
  "key1": "4gWuyTixGitYEEesxkSPLBqWsxEbBrEMAREPsjuYvkudwhZmVBRsmkZ7PebHMRcWrxwcqn6DhqSUytsZTgsjSr8m",
  "key2": "3kxfsrQx5gFSpDd3FHob6uRuFgGaAfMaXYXNpRmyRYhESPNf7ak85YQqXfMWnKRwny6oPT9tcGyyiQjQXkgjf61g",
  "key3": "2GLHkFVmwfgBjK145GybnknUeCrAG86KSkzXgauGasB3GyGeoqbdrSHBFtMKFLa8MqRc1Z8UJDeQYNtmQHcPLep6",
  "key4": "3hgES7tKKFSkGut244vjmMWXwDFRRnoSyv3tRNWLrYsG2sSP6AvqsLYu2Cbex4JpJPtPetyAsymmABR3zatp2Lzt",
  "key5": "393jAhh7c5rrDTdpfatrdtMKdkQTfNdEy8YJQV94rwNm3mPn7aEtEPZbs4KXgHSKJAJr6WphY775xDizX7UKdTzP",
  "key6": "5rETeNSAChP14c3znfx7iNjRg1TFo7LidaCVYh71RUCXAW9ogVdiEn8HJvuQt4JKnZNjcf51R4iJneFYfJ3w8osU",
  "key7": "zDJ7DhrTKGQj6T9xTERPNS8Wou1ZhEebiEBNQKRFbNEdCdy2oQ1z6YUFjD6kW8HLEQsznYvEVgEBCDstUTxWRYt",
  "key8": "6733qoT44uzDWih6iUpgN7M89FL8x1rEAWsq6GAn5L4gh3BuNF7uAAZdCRoWKwQoUMLgBDLHteowikiLRJot2shE",
  "key9": "4V4bw5EkgBy1hsZrzWUsx4wDaaqhVCDXLZEBBoTejqpPF5yqyrLSykXQmqgbZPgdoPcuY5g5pquDkNEMeuWviv3o",
  "key10": "37EWkAo3VCSTavD6aVybpCVJeSJg372PbuqWtRG5g5h3wJGbmFF5XviphsjvXVDoAV5Y3XBCu7gj6SXbUJQFKUXf",
  "key11": "3ge866sAUZMLFTPW26MyPCACZ9oPAZ3WdWarJGCsjxfZiRUKeNkvRUsxEYfduCqNRNbzLX9au7XPszmPJfVJ3s8S",
  "key12": "5X2oGqQFHRaoisFwYnbWjeR5yCfqbqtMJKH1kcjtuGzjMN1G6H3bQzoWpKpAsHu2TSg9kqTrgR3B491EedrUMF5p",
  "key13": "2m9wuDRxWejGA3wRddUqmDNRi2sfjePV6KByBykaES4TZzQbF6uQinmHnRncJPXPBFoNdU53QtLc8ZJHn34AC3H7",
  "key14": "qh6ZgNugs43utJKH1h7F7HzCyhRMBFpDjAy5EJZuFa1h783BX9H1W3sk3NfH9zDGGqWesQWaw4uZ1ZjatoJw8VX",
  "key15": "3RLdpYwncHLvzqVzCNFG926uFFvyJk2UKRjJY4uXjTiFGpFS1x5At7Wy6fuVdGYmy8Wj8WZJ7fTGC6keNUps4fET",
  "key16": "5U8ZkfQ38yXj3kMbYfRsjn1oF75Vzpc5dTzhhu7Y2W187jNNhN399nDJ9dgcexuxYp74avWF4JimG23Sy5HnqKze",
  "key17": "5o6fZWF1bvcsEAf5htya9btYfUsEFBuiquLnqzUUDNSKrvbapVq3hQk3jTT7ZtLF8qQ9hYQpmZMpKP21Htb17774",
  "key18": "51TrWDB1YCkWLAhEnhoWADy4kXeipYwwm2RCzY7bjc8TpboCiCza9eVnhTxb6Ywd8AzRgDDXG2yhZTXGoy2uwXKf",
  "key19": "4Zb2NB2NQTVqxRNpfZonLufG86yc9HrEXRcyqHg8ZWzhMaJYZsmfFtf2tc4nBgEoMqNkzc5AyPDcsC3rGLxVuYaU",
  "key20": "3pAyEeJKrg8tL8MyTAo8J12it1oMp15LKRk2dUwXaQ1Hzc5khCibFTabMbireUX8WrFDeS5fc1foaLeK8HAAVNUR",
  "key21": "iLw3axupwytkhhBCf9tvGCTCyLqfRBac7oAAizdSPt1QtUgHwAAuZfQ3PgQUpELbdN5hpxcGzpjtMgoMURpVFvF",
  "key22": "2LY29xP7charkMjL7aFpcP7tT4JLG1v2LuyM5dBMcM2p5hU1Go2amBCaZLh9GoCoXxbJN8nPNcQBpq8ym8eTGp9Z",
  "key23": "2gDLehE7cmNfPWjtipgUAVhkC9gARdW8j63UYLQuT8SVZRdqFrjrmXyyVdVQiJ91LirTRwrTWZiDUDvqkemgQxwM",
  "key24": "5qcWdfZ82oK4HpvzyQRoUvtU7RoDC78vzPB6RLorD2XTddd4C73SJDhWe7wGoNMP3W8PLCqba4k2LjhSiGhPCtXc",
  "key25": "5A6J7Gmyhh1YdNBhafQShdwjjf4SPsAB5XUDDDFRCEzqyRgQn7N6uM9Fc8cvpqa1QH77RHLyssTfW3CpXLUB46Sc",
  "key26": "27XWUDpghcuqoUktPNaZnAJi65cpUbLAmhKXkZ71S2wk89oUUm81VgtjjoHeH4MD4Q24kNXPhFobZgi6VjNy5Q64",
  "key27": "JcVCiNMmgpcD1K6dPBmPHXAgzJkHLQgW3LEPaQ5vjXzDaAAvrc67xfJsv8GXwrMjcz7FY66tYRewVWNxQoVjEvC",
  "key28": "3vzAhQAsf3MoXHTD2L77mCiy7QWrk4NgQbpSkKtX4JJLyMEdt4AweG11CUJhzq4kavrPrfaG9mtM53bvFccmMxy9",
  "key29": "4QeA5DwxVh26BSugVcwHoEoy256PbMW5iXX4YAQoWLNSGZe3PqM71K9iF9RyYH8CFVDmYvwGXnLaDYEh2Hdm8xdQ",
  "key30": "ipjuuR623QpdhEiH9qupk9BEGE8HzonpQfsjMWZyn8SeWAEBAukfx91XBpadheNhfQmsfv5xetg654Z9eqSXo1C"
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
