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
    "52aMk5mzfwfHu7KGFyKniGqZwzF2zYixiHjGRRZNQ98sxvjVG2RAEPTbZ8Y4r4mnCoEM4RhKSxjU33tjqVtr8Bzv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25GEHf8dcb5ovmvu29SKGrD61ZGjFyEfbBBDJcsZ2ZP7URhaEsUqLdfErTWYS9DrAV6Jf3nBKWdgDLfCMaeVhQ4W",
  "key1": "5eubcpdd6BWtPDhFnLuhU7nUWBXQ9QUdz86hZws51DdCRsELrSR2tFeMaGRyXAjzCG7kYV6nhX5kMgfBf7Cf9QRJ",
  "key2": "5GHzeYAD9uwUkXHx6KoZJRvhfoshzMbPSzcwwW82hNAJEvGFuMTmdNA1UuepHGmcuMNci2n8dMpBUAvF4rpGxMCp",
  "key3": "5vp3tXHKBKuMNuguCNWVfh2WZNe9MT23fE6b5sg2nsvHWXcqCWKiA1tcntzHatXdhHgX2xgwhWWVYfs7gPoV66Er",
  "key4": "5ZtNEWdoLh5wNHqVfK6fNp4AT25W4Z3yriKbQqKTFK9PDgLDmSMywn18NCktx2RoqAWjsrrz9tMHXJNgHUn5mz5P",
  "key5": "2C53zeUkEGKihZ1kn5QBTHm2oM78YLRg13xKQDA6k9HmDZDBpnz5xD9k4tijFzevR3k6cA7rpReGkNtDaiV11E2S",
  "key6": "2q7Z6rk6nZDBR1HCeA2jHRPa5ganMab6jZ65enMdik9YBBoDQaLA9j1Aeu3CPbm2b8BhVU2gWvXA21EtjMeGsrSv",
  "key7": "kik5iHZ5K3xXzXCNJWh5PXdkjUP4Y2Vd4et3QNFaET8dv5LgseRbr1fh5r55THjeGYqE7vsTzqyX5NMt6nnca2z",
  "key8": "2Z4GRA5Hpq8f8SYtqQF3qrerLJysFfTnEviXkWVcBg6hbFRXXavEsWYosPnor3CVtrpULXR5Xp2habpeBYdmN46Y",
  "key9": "2WoXRWbJYb41texLrU4UZ7HDiB1hWfcwxg7EoQ4ZSP9HsAFuvSmQmHMpLG372Rq6Q1QQh3YJQfQNHZDTdqnXfzJ3",
  "key10": "66FJ3szLrQa5sZ5bBPwjvnBEc2s5wAuaPA35s27C87feZMWHJJeG57j1wiZNr3EbyMsABvRLAU1R1XEjmK5mnjnk",
  "key11": "2yrMHHCnTdQ5mz8QGvjCJrbRQUewi9ExhpAWCBtBzcSy7A5LCeBcidUUkjxaA9kyWNaeZ7V1g9MpqZ7MthniZ2ZK",
  "key12": "55uo3sZQRNWScJUd4L2kQs3pi4jEf8kxdtRNLCMsq3RxUzarczUZUaCQ9fGUW1kh2CZbm1MCfmUQmMavHHbPUNw1",
  "key13": "5QCthFeaUKYXmd5efs1pSntQm6DgtJ7wifUv9QPVWMjazCvxLoGAUcieKXofoHMLMhHbq6E9nCwYkELUMA5PSV1e",
  "key14": "5hTP3UKb2YBz1dDirJhXqMKPHmbUxhZPEfVFNcXWZGHNUbZs2hTvTWAp3PNcx83mCuBxuEwfWUVauJLHVw8Dk5X6",
  "key15": "2tTh46WhrUvU64u8whRNQEBEpwEjuuHQXiPzJDJJyWEp5k2yjj9DS9dFaVAdccS9fQ2w9Jf6kxvL3txqok34bqaX",
  "key16": "5cTuBnfMsrMGrn3BD3HUuLYTka3FBE46KC8qWMtiwtLyH2rvqhQJRcJheFZi9QVPFjSuEkCrGN6JGfCowhDoiPJx",
  "key17": "5qAuvUVBRkyHfcNvYYgrXfrbZs3StDPyLEuKMNojtmG2ByhQdPBpcXh94izGQ9jNjr6BpuKoSmkfHu9wyzdf4tag",
  "key18": "21nptGnFVXZSN1dFuogGGop1Ux82DWUojMK6YhEDQseuhvmwRL8FktJE4ZBQt9eYc7dHkGLLM1n74SqwjMp6qMas",
  "key19": "wZY9DqwY7uBJv9nXzggoGrdnLXpn1EB5VnC1V7TvLsAE4VJepfvtuGBPkjTzPS1Esdv38Vk8a4Ywm3GcBSSTmdQ",
  "key20": "5gL1CF3d49CCd6FWyuFMTsBcbgZ4CXRafF4xbGCrrchBZxXMPxpY7u3Q9q5SbCRkBmnWq5gXJYvL2xrhGtnJKxQk",
  "key21": "4dNHbcNUb3W89fGbNuAeZ71sVsByS9P3JZw97Q2wnrDpzURxFoZWKo4tmmjWYXri1Y8CqHDMw6rRsbQG7czML7Qv",
  "key22": "2LnzNsUJZbiTSnRJ3dexWd3tiDYYd6z3ByTGwTHj287o1zbpt7dhqyjsSMEXwgnSUwZAFVJ36u3q1BhSWL5DRf2m",
  "key23": "PvJFjWdTTnymbMCcwyxjzvWBGpMbH8HfmzQuhX7Vy9hQqLcnkzZDnGw8HwMTJjCjKpLLfb4jDdN2XRQoU6kBan7",
  "key24": "2yCB7NiayAeVsiYAqhUudRh56tLZHy9zMHFd3FSzKVPyA25BQGdgmhSs7Ct5oh3u6wUWBqzEYrrbgrPHwBN8fFu7",
  "key25": "2pSvA61UpPDcVsT6r3PrMgZwZ4nEdCL4C1VR6i5qoL2H6FQNuKWmy3b2cs93ewF4cb8HMHUQ2gGt3tXhjagedaEb",
  "key26": "64B6YtTAdLpx8LF2nsohRdyThzBaii33vyLR62W5QFytLWvYprugWHkewdrEVjjE84vhjsdrrrhDh7cum2yMZLS4",
  "key27": "3GRkN2oW2KXh2ZiqZ7M4Wgpgc3WGRdPdYem8bUNn8hmb8KSTmjTMWs112odY1X5CDVyNisUmbtQUzt6KScfAaCtA",
  "key28": "4efo4pYQL2mbdXGKeQ5CYjzRvfZgea3JoHQtTe7McsSNMmgwwyGJVbKrnzNrGAyeMvpoyqcbAfoTtkxMGTsd2QfT",
  "key29": "4bPiJkVGMUpT5Lx2Ch4HZZcKagAM4jr97VKDRXuxTxiCHYGnhAfRTdej4CRSWXz3z3GBFhrSvTatnrYVvogjZ1pB",
  "key30": "StP4v76TG9SarU7DUWvaVN8NfZFL8t8yDDMdCZCFSjxiX7NBFyVQCLF9qEjWti82YSFjkqsvd6BEb3kWAELcSPV"
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
