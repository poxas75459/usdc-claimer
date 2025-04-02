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
    "5YirT8sbzqgw7YJMDA9C25PmqLyWR3sriNNcDcjCPjDu62zdd29TDJw1KfDiKYW21Y5z9rEG6kQcMp3KUrrASN48"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gFREXKtFxo5QvUKTeDkLWnsY9gyYFdX2SCVh9wiQQDoV8wRzvA1suXiuY399C8TR9kLekCVHMKpLPxwxHD1Xviu",
  "key1": "2UB5MF6uJHqMT7n3B4cAKKiY8zfhPVLbeJSfFu5C1mE4utmtNE7P1wtnWnRaP9gWm8c1w2dydJBLmX4yUuP9QUTs",
  "key2": "2xUcq1G8DDomZKd1FZtvKXmSW3WUmGBAcQ25h61Ktvdx5dYAyYW6UcRgU7RuL5ZcVSFT1D7cbjRK4cKrA3WHpQfX",
  "key3": "mktZerhC8TnGB1t53BspNN26RU8pvfQnjL3AAv756rhn2HhmKdFnuYykSG9sJJ5apB7NuAJ4WitqScQPibWUhCB",
  "key4": "fBsftRGSHwqhAyfPJMeFymTkMFupTxRoU8fGZbMtAN3kHzKq7vzoKrGfm9HXNta6MCdiDWPy7Emvcz3XxbkNdSi",
  "key5": "ddtxN22w7Uh3mu9wAv3S1McDLkkaPMhjKqSKt6FFDYBbHqM5Z3a5EKhw8cVT32ftH9A4zkPEQv6jzFkaE3bSGss",
  "key6": "2AWct9fdv5VJCS8tJ4E1iQBLRc4d8wyTACJzTqKTgjWNZUqRyjguTRe1EEKVU9DXgednhBmSQZiTahMLLnTTa8gS",
  "key7": "3r87mPxSgxPKcopULF7aacQpzmqHYsfyLuV84xKNtirVz5SbKbP27gZTFtXCxxk2LX19KQSmUhvEKJh2JCoiCDPu",
  "key8": "565ZRkyi58QuzfNuQYrs1yzHYJCTDZ9vErs99kLQxHPH6FaBaezeNeGg67iQbacBcwLUBXZ1Cbn5FiQw9CA1HzjH",
  "key9": "BmxDAK7b2vAdZrdBCiVupnhsXz2TfX8wUNXXRpB3DvRLA7uweCZpK3WhqaEzPoukGi6kX8kWZvaPBJU7GXkkyYi",
  "key10": "4KPZhZZ6ycd4Hbi5J3HSsDEqYrnXLqPim9LDJXMV1BQNZgKXnNgAwTtCEGB5TsLNjozAku5RLUvbBU8LAU6Pyju9",
  "key11": "28da2ZKkEWc3BcjCxt6ris5sTM8YFfSyXxgjvdxG82XGqY4RUWXrmpHatf182FTPqoMiaHoWVGiw19ZHG1V2jPZe",
  "key12": "5j13kNduVNhaaRJH6dwPtsJADHosyzk1GnbdNXK3Cazj5vpk8kiHtqJy7HBmopmPi6jbCPEaRtAdZWhKAYF65aHS",
  "key13": "3YafZn4mYQ4uKg1TWqWdhMQaecURn5dyGePRcxau7m6oFfV2nUKV2Lz9PVmH5ACb8bJgzFT9aVWV2dCdCunapgDC",
  "key14": "QCKR4K8LLAEwoKjBKzaHFc8Ve8pamnAvHjQ2WRM48xKBuVYRH26wZmtZPrgqVChzF8ENySC4L6r3X5c6fuRL8y7",
  "key15": "4Ub8iaGRa1kQaSX6evC4HYMFefpC2xmk3x9BvmcoQG88v2m4enkay4WwbKLG4oas7S1VPNpDL6U44kzqE8tckYoJ",
  "key16": "4MFLT2KXzKQgD9AgRXSQA6RrpjZjT9HFgUd7uy1XXzWHa2stfhkf4VFTnrbKEDnrCLz4dZ4BjLdVdiy6YxcRgbCe",
  "key17": "2T4An8ZetbKPX7bWp43swcBnnZVNsAHUBCUojGxrYwsgjtyXDkct2pNGNxqedxdwRUhkqX2GxUoaEbEsGoK1MKUg",
  "key18": "5yFXaXhwToSLyxyiQv64afDPtwM1eG5ZGN9rhKHArHc3ggUimzcHAWQ4KVatrXS8szDxkwAsRpx57bbqsmywvGs8",
  "key19": "5YwWBpgu6jbrJFT1jjz4w16wLgEZiqWQPxY536b27dvJJZoYyndmPxoi5pkvD6DJxzSWxpApwn83DvQsZaq425P9",
  "key20": "4DUGKh4vz7a3aLbpDGdft5hGvxV4Sy1c7G4HMWi4X1P4F7uvuksRCfDW7mDM3KgKJnnJSP297BsB8KK9EUnxSJwt",
  "key21": "8MC7Qi5CPriNSWLC1JDUZCGHXdp9DXDLqS9NEK4Jzu58gKJcA4C8uvQAy5AjXCJDmGWk6rvizk9apfz4rPxuwdv",
  "key22": "4uk6Wt2pMM9U4iZka41oJv4EhBGjwq8tdmbeBwbBhVXNQ7x4RVV2oupiyJSjeHMRcsAKH3CpwuRYv5v5X6Taobi4",
  "key23": "4AUEHfL9eUByywMnn9oCqyYtHiykHzDzqhSZWMmtJnfrMgHuFgfbXWk43qdhrWJR8edps4tNJer8f1A5LJeehAnD",
  "key24": "3TxwxzHrAoGTkgrXMZ4EWeLnAUKktjmGBJx62LN6ybHYXrybnf5Yt62w1hPJfqaDE6DAyd4sEbfbd3pZxkwC7uRC",
  "key25": "2Lo66VeiMBqGpehQXHemSZerouZQvhp3sbKijfzuKdGie7CfS5LgtSmgkRg8WWPmNsEB2tdfomEBb7pv7p4S4FZX",
  "key26": "4m7TqtFHnE4BRqLbKN4VsScrknTTftWpZwpDZUsYKxfhGDtD4mNmvy53ChfZMv5zPjGtMKMRDsJ5Do7norG3tiCe",
  "key27": "AhKiGJCQPpFg4wrfTMppHGv3nurY7o1419uXbzAT5bTfNzBMNyrTPgtrnXzuwCcKLtJobtfPdKmgyzxPjwSDykX",
  "key28": "3tNZP5YKfkDEgdVxsBa3p1TQidq1hSwQ8Y1gaBB7PR6mdgcise4QbsQ5GGNiHzDm2eUbP8tqPyaV9gW962RWjYxP",
  "key29": "76jPLP14ftHyE7kqXR6Xx7kQNx3JSPtKmoHpgpjRUArzcba9qdLcroqnQN91vZNUz9YiMTcTeSZHkjgXDnoQNso",
  "key30": "5KYcsiCZadT1wvgxrDuYXEruENjX4ajm8PSptyYQxBzMXUxv17AU84JfesmYFoNJKBPuugGLq4kxPQ6XRVcGDZVi",
  "key31": "ZGuKq9Qgkcfc1ED4mKcnkSGg3bKnGHazNZhW4BsuJftxma7k42nsqzLBP4HBrLcgjV6UBfwdVGayCa4p7s1ZEhV",
  "key32": "562q9BivR4khRDKXFL67ywFNm2pttdNScKBXN2ZLsPpYkjNjFoTaqTtMiyZuQrrBbFFor84nzTKEKrUMHoqyZqRw",
  "key33": "3an5B9k8aiGNXYBZxfrhEgdrsFg6yzhFS2FMdfGRSFb8nd3KVkJ1jgzCvZLBP9KZGFAp1fcZNcUD1ME6SxxhYzh",
  "key34": "2XeksSmDJ3WSrmtPnaf3kXACJ3HrkHgVQjoCq3Vqooh9zjMdbUW2Ti66asFrN5T9MzjwJ1j7ewHGcwGEDWPwFp9r",
  "key35": "2a88ruYLhiakzpg8ov3cCY7CedVj4YeTpPDBaui73XoK26mtCwehaZcpcy6hbLayBNjQTKhsDSQX6eMenbyXxvJc",
  "key36": "2QF1bgradm9kj1MExRuyQbXouzSnYmDxtg6tVjraWMxf9JP9S2Jx4QGoKZCtJ8vB5jTF5iGLYiggTKytiWmhEoVE"
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
