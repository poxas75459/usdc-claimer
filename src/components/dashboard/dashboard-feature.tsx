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
    "PrmATPYjyLJU3QtqQu5qhMu6Za91viQosBrbmWTRwgRwitNqELnMuhfiifwA42SWp9B9HWB8udfn5AhGbSvZfvd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iUepwin9cvLEcDuZz3rYQUoJsBCmxWeoJ3VQj7Yrvm2LnvrsPj8LxCHkicA6zn4W4XBuAKAcjE1tFGi4hCX39hP",
  "key1": "4eWZWu7jFbj57tB71o9QdXGW4mh9jXVLhYt2WLRdQN5sQe1YJE7Rm9VQF8bpsaTivPk4usteUpJAEoN8FcwVcCpj",
  "key2": "5vT9ckAyJZvZVghbwbKRURxDt8BDoF5fQ87gEqy4QqPUVFkZN2HbU43XWhTfoiS6k2VHqFNxX4AHNwd9QqDiKHbe",
  "key3": "345aDEAMudSxYqkLGFoxa3f37XQURvjBMeiyNQyYzhTTooa9iS6R4B9tu23SLYHfVw2EyWQqRDEnZX2MaeVUXhmm",
  "key4": "4FA9Hap5jRU3Tt1a2nSZuDQDHTS3PiN4xYtS1pP2AgyLY1wihLT3QdduNA5XLtwr8pcjKRFDmqA1KHZDCjvp8jLD",
  "key5": "5ALsSRdWcUSRUgGgWcviZv5DfxD5g8N59ScXzEfZHejgn6g5RzKook9we7tBqT1hhDUkVi1ePPfu4nRVhKUMGJyf",
  "key6": "5fgKeiV8Xgg163gkyUCz3SGYkp713cRvx9VPNfokmtqr56XoaewbTiwRsmEu3VaZJrkbF28HuBEnFNRcnC2BBUsR",
  "key7": "4dPut9DPmNqWmpRPJPQYuB7n4ry2UnAcGgbxgTxirGRD2LTqTckSxgE3t9NG2s55Q3rmyZHByZTXn6uUCf9f3sU5",
  "key8": "tZCqwFwMSAg5GvbtSRvD7n8CDFqk8Bc5ZS9g7xfhutuWVD6YSrdzF1jj2UxfLJNCV5kfaqqbnqZEPpD9bJRcTmE",
  "key9": "2q4vkDLbNCHurgG3BNvi7syvD9bdagrsgjbvLdEugTaqMAWzrUt5XA8EzLoBijsaRsfyhgZHwMwKadTTSF2ZQUoE",
  "key10": "3NUaCrfzuM23CXSAYsQJ4sm6a1ZeEPqZ9mYnbiXHbto5MWAUHej6KBtEyUcV5ejhpecWTrSxABGQkjxDT8r2fwsZ",
  "key11": "38AKgHKKMzHXzMFYUZ2HcAfQp4r9JYV4ek1UQVLFcyWpShob3VWj7Ejb8FvnDGsQojPztgRjxa9qkPxu3wTPYYKD",
  "key12": "61MmBLVPVC6fHLuUR4aDBRQVeboqbHAeY44tJPXQ2kYZzpVebGZ1dtTwqUDKxFfWfzqWvTZNboU1BboHdjc6x27S",
  "key13": "55DsfyF2RrVbKizBLmKjA6jQ964mMxZhDAqcCLuXiwx51HDdvDFTzdtQyqcBA8LvfWZHZL2NDTYQ3UPueRhCVw2s",
  "key14": "2GJ9H7veZfAgpBHTn1sCKYg7xpen73TJhh3egd6c3CaJ8Qb4vto6k98bRLgvUmD8tfw9KLkY7N5ckt7s3ZPV132J",
  "key15": "2jMWWMNkFauHy2H63u6geVjXbimn2QQbmQC9zMuQK1XXvqUAKfwn5P9FEqg1tkgyuWeA8GmDptg8rzcuMn8pkpBE",
  "key16": "61FPuqLuuX5RdgmP8agk8aFYiwDAEGznGRNWBhME7ob8NQq5BXFWM2CgaiMJhjodZYigujA429DzqG2cDoKYMsu6",
  "key17": "2ASqYyzLbp1wBa8zyg2YitdJ4LyKPqU5be4gS3AzdA8QPvcgB8kyjxEtgvR9XADW5dvFBuyr9xbuqXv6KiufXyrA",
  "key18": "3fZvTfBpPTpr1ZR88s8kRYJ8cu1z7cH56xu3qedtKQnsyRYGTqToCJCz3fC4JuprubH2CfMzPwKvJjcCTS33jvih",
  "key19": "3unZZ2Vh5ZiGqCkfWAiLh9HsjUjmEgbb4ktyZA4nKFPiH7TMvVFuNhGi1FHoV4Jdmn8jLRgwf2mqeyRumJFyTwYU",
  "key20": "2dyCaopJPhH1crraJo2Y4bVwAfX7sBxUsUbRZaAsvizXTgUBSYzVMPiuGEF86TVaw9EwXAjy9aGYQk4CcLTfPvjj",
  "key21": "4HZQJfG2ZangCDeoYVVumSExKNN5BngnAYrAmMbZB3YKNtiTEw6nWJMnj3NFLkT58oH3LC8U4EoWxFSNrPBapkbR",
  "key22": "49scZy9v1STbvPyvhJo1vAendks7zk5xXq2fz2aGJdT2CY2JA8NG9ybaqMsL6u4WEzBRypzrYeXuBUaTPyQychoT",
  "key23": "3evttaJe8HgKXNPfEFFvBTzbNb2Kvn2TgCk6fBvedGv3X15iQWoirXuoYWBMkpqxcSWzyUcRJmjgR8us43nQTtTn",
  "key24": "49MFQECAqSQJZtDgQGHu78qM6SmpyhNCL2LeocktX54BVWErXWXud1EavV7zzj7m9bFSkWQsBwPtMhHK5Zj5Fjxb",
  "key25": "3zZJMe3KUKNp8CW4LzYqdSW4TbS3Z6uUtheaYNctQshySPWf3Y7upC8HYbnGj5zC28vMSoLHn39ddztjCk9yPWAG",
  "key26": "2B37AAV88o9sNvYNEeRNidqLgBS9mbdCyr2PnCMo39NT1izmABzrtiNQbVJQLZpA4PRrEQ6tBnSNfkgUrGLkLrye",
  "key27": "2H7PMQkVYEikyLUQJ2enKypdEej8cfFi2zYuSFX3m6LzbrWyUvH11j8v8zDMWu4TtmzQsaDxypYvxJxj3jeP98jM",
  "key28": "32npuvsxrXEkKfAxRVK4KSueYR456dsoXGymEEKEkEJqQYmw3u7SiwFiW78wbgpcqQFoLkRtbaDVUJQWsXHY8UM5",
  "key29": "56JirsEnxMnaQMKPyzuzY9Hboo3TGvFs1m4TZgGKtTU1rB98SjPycVXAFNogc2qhN5fNux7RkTuR7QM6WgRy6p52",
  "key30": "3wKXtzaKk5mnGAu9kzmgxYTeafPMqXXmxAqsdwXphcVE5y8wfjrxLePgonxniHjbBKatotR5ZzPFfxbPNBhLHHpb",
  "key31": "4UsKxesaDKukgxksyJqZRbmdB16ZBegjb6oCvRVeaLSEjuXkxXihungayWip5wSceERMUvCd5H6pUVdvXSRnmuEv",
  "key32": "5rYPQMXjZdUqyfLxjkv9rMXRrw1GB3LipT1xi9XWaVyALJ4HHg5G2JWh9KZbGpFtiGge5XrExNzwpG8YsQHRxEdu",
  "key33": "3eFVYTdazWxTfQyJ3ayAENSFCRMfpx2DDu2QJeDQaaEzQQWrKpC7cYZYR9bnpYMNYfjRsWnus8HnXFmkxrKhWZ9D",
  "key34": "5RfSqgDAwZkskxW2U6Y5GevbK7ZSV6J5ELPEcnk1D7FBDJXeXmndwskKiEisH55e83sfTjbBrQpgEeiHYaYh5VTS"
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
