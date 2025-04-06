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
    "4aTrbjZiCWpCqHDmTmNQVovAuBBCxXqbZCvtnVjPPZyqV5oQPaqSNC4dj5RNS7ahMVYxde8CJJhyyz2hXYugeVq2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GrqGQsnKrDZW214cB1zv1H2zL3743KVPVLBUFNdhXe9pf4SHrv2XGbMi5RYrmgnHNgUHBBLry12EKr6pzcjKtL2",
  "key1": "AAwKJfvDDmo888MWWbNrsKprsBtQEJLz5r4V4EsitXqDwoCScuuJyfNfHUeGne5JL6fd9z4RUfDS9F3SAmbnofb",
  "key2": "4dyYFNkMp8DDuTP1UVpeSHRduq3518HLAjTN2i6UzQfE93dsUWYQPMjsP5wfSvYUH2Tffb8gF2RnuC1uoG5xaLce",
  "key3": "2T5X2vBW8xB8BHVd2jRrFYopAtQ6cxnrSw4LddguoAEeEh5kcB2Rv2fQs98eguZ58f9QJvBRortEPxv5X8brUgXc",
  "key4": "4tts7QzYC1fWqkx6i6TpQmcnpe4oZSmckfNKSZ68vuD4mKiUeiu4op7fJyWjPZNxccZVJatQUA9hxe1WzvCZwATq",
  "key5": "2vpQyDUihnUXPhAtHz3onYoUMsz17NJ1Nk8rYR8KWu7b5UkZLwmmfSd7PZrbDEYSd7yuuEz4GsiLrtQkfyEvLuLt",
  "key6": "2V3pnb8WjXRxui81dgvY8DydWRomjKjrFZzqSyE529DTrrs2hyWbU57CSeiLzJpBGjdgHDRzMUeA5A3nPTbyFSGn",
  "key7": "3Zw8gz8NpXeayQoednWTTY11TuuDkPAgFqmDiVNEH9zKHeQ3fZCgm4sPH4EBfmWuSksxeJB2fiYfzbjMSqiVGr8e",
  "key8": "2xusRzPWNhtkuVa7wRvCgJqRLCUCsgkVH627nufigwMjvUgMPvJpuFuQ5MmFKWL51Dj58zdTxcRpykejAkgrJorn",
  "key9": "4fhDyqEjiiokzSpW6UAJSYbU5LFmRT52dnMVxgTvp3KGWTKHJgivuVCch1G4bm95F3zhRfnLtMVdHi2QFBX82tto",
  "key10": "56EeNmVDyje3gmuvnzhU5HAn7eowFnLEDZuYVpUdEGKBU71dc3MT99zDDVvvLUggp36Ezc9SMHJwiQH7twjvmAYL",
  "key11": "CgCKuWdQGZKCUtFwuE12vdjfKYwFNAP2CB3TufqVeMLYxeQbDSfYqoJ917Mq44GnXv6kWvVsAW4qQgvuBFRjzS1",
  "key12": "4oAk9Hq9Tb4LqAUvQaA9EwCTsjXwiev1qqngg4YW1a1SbUxB9qatBMpS1UYrC84bWQ1RPJvHEcR3gbiLdm69pAn4",
  "key13": "3xNUaC6UdxaYE6h195apetSL7Ni2SCbpA9TBDVVTdcCopUTaWtKX95AbCLnAxcWjzzpgLAYNXoEiegL5uDEkmoEH",
  "key14": "3gEgB8Rc1DPUU84d4ejQXBWeZwa4yuXuM6C6XUoo5AHLu4w3NS7fA42imnwwnp5Qfo9Yc7T9eKj9WphAM8qFFJUp",
  "key15": "26Uvzgdbmo9m9VH7CKt6rJFwVbkhJGx72P6ijsizfJb58PuLQPRSnKL4SL7rJLuYjVxqjXLGGNm92DiLKxMav5Gv",
  "key16": "JzcZSY91u91m581BGX4GZ7tbmqVjnmBQmnprgQKYbGp4P75ZyWQ3pwnh31E7os36V8bNfNCF5ehMGczcRj7cuY7",
  "key17": "ty2gduxZQPLzKV3oQJ4vauuD8oynmHfAoFziM72FrG2ZqadoLFgu1NUUHUjgCrCnaaiBHNHj8mYi5f8hihs7JnA",
  "key18": "2VyZzJTy6ZpHTSJsU3R3jg5ZwMxSPjxU8s45KUiXcceajCKCvvfnXVDUhGsEGDrsv9xh6SqW4TDM9EXjFrwJmYza",
  "key19": "5dUjsytMy9AvkBgcV3sps1uFKu1EXvJQcmTcravAwS7WXt5CKLioK3ZUtZaCCngVBBp2EzQmQA5coxZto8rTK77M",
  "key20": "1Ss8P6DQxmhh1iYaystKGL4B9KDEdcqKaqM3VVahbNdepmeye7am5z4WymvfUE9ye3aSPf4W93wN4tRqQae4sD6",
  "key21": "43jrXmTTAE9tJbe5EwoZLn7vr5W77r7fKodFrRi2bwvbEHK9Ur5mSkVF1GPTxjuMNQ8zYeBNNrpxYawpUthp8LTb",
  "key22": "2yqmZ4Tj6brkrgDPKUhCtpUc12mYwJjSMmYyMKDT9RrAFCGVvsvgoBKF8H5XA9Yskap8DR9e6V2eiLi5KnWXXPb1",
  "key23": "AALb51pTcthPV72DvP5f6RwSgMpWZatFz4Aq2B66XuGFc2DN3Sru9Hoxk2CThSHcfaiLP4Wqn3jXPSSiBUtpjYU",
  "key24": "5yTvtR8bss6x7dY6RujoUTMAn9RBHcBqsrirfbyemwZnQ9A25neT2fQUsnvtAPUcZ6rq97mca7yVid4ArDMYqy2h",
  "key25": "3ekgrpDz2pyqb6R8y18pnCPVtAfp512er2q1rLxA6rTLGsNBM6BsdRFVYwXthxSDzvEyCL6NiYDkhLPMSmj7qqAW",
  "key26": "5VLbKgRyHDBjGFnfhv8nqww1T3qX2wU8QoGHJ23fHSfENXpVSS1nJkqX9Kyw3tovq2Tv6tbkSnS9TUVCNs2RQgMX",
  "key27": "3RATmDSDbnJgb1tWz82Fix7C4nNP1BK2iaGPu1QgEFQH1e5uRDVmnc9mLbgi5RernirvWGbmzfk94A3RVsbAt3Gc",
  "key28": "2FeYSqbzifu1U2NJALeGCH8VnpZ2Wsy1LMt7TwpqEDF9g6PfKX7LjEm8YW9Aw2fi8CMwqYHTSd8ou2qCrKsVLBjH",
  "key29": "5ziAfYAu4Ku6w9GNj38FxySfEDSB8LszD6LoT2xspkPYKuijqdmAEViLuFqFduYhmnjNZSiLT7AkHxXg3ivKsyDt",
  "key30": "528koo6Ws7bDUGXP7uQxpswtSM2kTKtoMmfeDv6NQiWVb7q7BofovYTgx3pmuMoSfw79TnfoiZwRPeUS43p63Cy6",
  "key31": "5MAa3SruBsntPR5G5EqsR6KdDZdQyvtEkrcPfTyufsUHw61SkoJBSebAUZMWQHpW5oMythfBrdBcvWfuv93RPUcq",
  "key32": "AgoGoauzAUd2ab54wDLYycddojUydy86ZgkfJzS8Batu1bVUFr79gbb19di58GumtmZYqaTBygLRVphY5w1NgCs",
  "key33": "MYDSgQbVUSGgCfAFg2baJBhexRCqHi9mfee7ozzs4SsLzGaZJEWsor8ruRXuLdPdhbgey346QfHyZKBEP6TMcdK",
  "key34": "2GFgK3xg4R7dRhLFUZ9AUYCUagcEesHbvXPp3VupbaBCCaA835Z1eAX5bQBec1UdSoaFQNEGY97yxKjgW5hQWP6v",
  "key35": "3U5dhWBpfP3JM222KYALDYgDAJxQBmEEmA8Cgtmkq6qixFWCShG4QB8FQAu9FewcMTiy2KnuHJFNVmMwgsAovpNJ",
  "key36": "5gXTQtXGqanwaUX32cboJwH3UErj6qMQsa3d7h4UNqVgtEVrKjmyNWkYYdLeXYJQ9vnv1k4uPz8ZscHmGomVbUYm",
  "key37": "4re5KrCv491FkYsd44DZ4PUxQVMwZtN2dguCzjEFbC5Wuqa97p5m9FRkQw64thACzdd7EqRnEqM5p2An1nsNA6KS",
  "key38": "2b4pELPRSm4iiyQKuiwZGXbi6VL9AzHzrHVZdzdT3T94wDcpfyHe2hkY9ieqrQ81tKSno7jzTUVKMDkMpTQXboHb"
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
