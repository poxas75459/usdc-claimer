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
    "5hPM6QZNxKVLTKRJAEPET7jzHbcZj34JHEvQiiC4EaugE9Sfp6f9ZbgZcRK72gZsYGZhWmLZLu3NgQi5kwp4fHJR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B4LpMPhFKZW2jDYU8BaTsKuXWoMZWGmTmLmcLwp3huUubSwddwDhGbPhaVXMjps7QSPJ7r6CCE8vHmD2Tv1FzfF",
  "key1": "5MP7Ncd9xCSnL8w7QfmvP9WVdjqP7yvcdWB4sMAaGKrRk13BugausRSAtQ7M3UnRDiVcJYKrqGqw9KCzpyFZyhXt",
  "key2": "tHjzu9365xYrPZoLhpzRzWfov63Bae1QeEC92ygBkfLXJAJuZshrFuMhSYgMCSzMNkti9uNnL139ANk3CmbeyGV",
  "key3": "35eE51m3uUxnB4eheFyK594C4CHqqn42HxJkjUxHp3pVgAzqKcBnvkcxpHnVDGwUbFaHwWZXgVNUuAv4MFyrChks",
  "key4": "7dntgfESxUWASunbUtkC9ewDMCF1Dwfv9qfaFySNgA5TyNF3oPe42aJPWZWYW9q9ivbxApdQ3Kym4nPiPiq18NA",
  "key5": "433pPYNNcPQb3Re9ZQhFbDy8apZ4pAnbMYxj2EqwR2LVCn9LgtwhoWSFsWKX8R5wgnrJCGtJrk29UQqdeahNWXwE",
  "key6": "e6t3Rv87bFFjETAY6Wa39KbrUqrtkQRsnRceRgQViwNmu3mCpomCfXPHuP2QDhTR4pFdgQFA2tYxW2ZN7soPzQm",
  "key7": "37BYGi9PYqhZMyFuCMeCcWa7QBjib5BMkwcrEuaRnihEMfKjv1rBTfWqG3box21ernYBzoRwS4ML26sZc18kZ5br",
  "key8": "3Dd6eTAczUDszeqwHCqCzc9j1J2NkXcV3ZdXtHhHC5w5DotxV3MyKAHiGZ1fc2LuJ3gNmLeiqrkWmoympjgyrXDn",
  "key9": "5xXkytijGpz7hAw7pAPZgV6vQCy6tDi3YHZUTD6hiqZ9YUBpHbiUFkURFaKdLXSWppMAnMQfjHpPKu2DxfAp5AVh",
  "key10": "kdWfac2E26QXZCd97bznsGf35Gi263A2tv8QQrmNs2qZh7JD9mR6uS7XB82dhnNSvJ8pMZFmG22XuPTE67K9nsR",
  "key11": "26MPHmbu85SgnmwM5zDzkjjHR72vhVC7BtyDyLjt14p3krZwQ1V8FgnK6nyo6uUYQi5PMwHEHEtkdyqEmyRgS3ZH",
  "key12": "2z1WEc7PRaQ3LGJNeYdjcFdBQdWEFRtnzdX9CPapeLqgyuLqkD3wnNAfeDcEAMunSuaWmhR5u4JBZQyfSSAMzHj8",
  "key13": "622ahkg2DQTXKfRF6w4z4DWiiw4aeyzBZq82QqedxfM1cSei8PGCxUDJzu89taysBeutT1tVp9FP7VfzWWoAADup",
  "key14": "2XvtniMMQgKUyvAcRPm9NifL8DCV9tjDKXQNu59JHcYSSLvo4gfGGiBsdQpAKHQLMBD8gjnZvi9JN28g5cw4EK4X",
  "key15": "41uDDnEd2ph4MWqdFUkJfgDcHdLibPm69BUqR19qj7ePZ7NMNADF49PzCkWH5a9uZSQLwLgdzZwpFDq72RNEznFC",
  "key16": "N3ZjqUfRB9bJKr5VSdDnTEDsYTA4PzvM2kkYbsSbg2Wqtd6iQj77x5ERoP7chu6NoQ9a2zacJXMw3EAXA3SsXrY",
  "key17": "53zLzvJQxN3oLf3mKUYUDkzZRd8NLTrdGxi1HQtGqNLwAMxz7ST8jZx1M4JDJedrbnhyeJYqqB5WCN24RmJnfB2Y",
  "key18": "5GJXZk8eN5qfQ3bQhN6ze74f3JRsTsVtQg6EtX51oJDReTJxjVnKGNoQ57Z2UZhv8ZFSfu8NoRtCnZ27jePWQEyx",
  "key19": "4cbHxEo39yBS3R7dE4ZNxWTh6zfco4LqL3cZt3u9DF3dn88AumRrtN6HZ8fLoDknagXu6Ur3418RrNZAxUiiiWFD",
  "key20": "2NAwa9yz6n1Jjb7NnWzGeAogWW6kSD7BEdF3r4rxhsE3hmVLdbajPwtqr9ZTJEDuQJUcNAVwDKifFb5kNMTVZ9b9",
  "key21": "3rD1KdJ7bk8iyb3UU75guWQd5aKhWuAnDLC9UzZJQeCTVueogyKgjxz8xP6FF3bNHNXY6tvXLUZcbzGgMsg86YkD",
  "key22": "2adY5uu5U5WaDvDKeVr1QA8f6rW8eksUN1HmAFMRsoB5mPrWhNvVxEAHCEWvtbHbsKkKaatrvzFZumm6LugLm3wX",
  "key23": "5rk4RLkL7635NjPWNxkrQKXdA2JEVyCpv3PbLZ2NPGPTM3KypctnMmC8A95BCpWcN2T11MgHUjco4kxtgEoLEK4g",
  "key24": "5e26p3o9QaBtKWDpjfZYiYx2wyeyPWGhL6R9cbAqpeuvHCSi3YvEfaigPqA46Dp5wVvs69gYnZR34obDVTQrYyMG",
  "key25": "4HX9LttUmty2BeyGnredpvUPQQrE1B2UzkqABdhy9DKne9KM7Gd94SwWoTQc6wKWv5d1B4SY281XeqKnR8Qk49zK",
  "key26": "4MNtvdtKbcQyQgrspz4B86LZpXnrTePuxFnNx8HiGbah1NCyAiLBMo1GeKacXikofEzBRWPMhqPcrLkZo5Q4ELyE"
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
