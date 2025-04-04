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
    "5RK6th9exQMuzVjL7pKw3sDq8WuqexKxYY9AJL5qt8kXJYQJdKXneXbboeqXEdFKdsLdST5iggu2B3KABgpkvin8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35c3Vj3z1oFmyNNdUwPB1eEqRgPdd9tFevf6adgaPb87rod3MNSuwwJG62rY2aBUdEjVmE9FfcvKrv3kkq7p2ndd",
  "key1": "2WJYvPgPxYpHWLgC8HT2bT9jgzjBHRqMcmuVsmEv59rAd4E4vTrEVfh8qi6BwvLm8ifqGrU2UGojgAPteePBfPFW",
  "key2": "5d2hdMbyxn2Bh2j42RS8pD1sitEviyrfcgSDoEFhPgFFwf9duks3TrWqmNQjyyABC38CEg6MBgZQ9zXJcaHgTB7F",
  "key3": "4WiA9cpjKqZ7S6kaSLjgq5QdBkRgzsSiojg2SW4CWjqFxrrMnT8AjLQGaKr8hEEup2CFCJf268ktGHYoSFP17Hj4",
  "key4": "gE94xF9cPKGR4BQxCCG6V1KGFP53JtpvL9qScDUHYUe9bwc4GdNwkqqcE2AcTAAGAKCraLUgT423DXV41cx9v3B",
  "key5": "4FVC3r4pmYWej9NCZ2GMRNDBDwpxp2F1bCQL1xGXhLfm26LVJ2cpXGmzFKpewdMMpAUchmJTcCYNfJqCZFtVFvKq",
  "key6": "5p2kdWrmeX5KYmYqai9dwJ3iSgneJQpfZxTfFHQkBfAhTN9dRrYC6QKBa1J1Zmxf1XzJbkYY4ev3SnX4c2KS8oqz",
  "key7": "2hmGMwzkHeUG3VAxivbhCKEdECQCuSk1D8jWkjLAL6N8wWCRmGrh8Pj85yKVQtN6EekyueCYDJ4tnaq8fhMG19Hu",
  "key8": "5YoZcZ7oT962qhNfZLysNPTHvna5TaV5vjSr6abCysKTTKCpBQDvZry956HvNySjWGUjiBFbRQf7oDPH8TGjpYa6",
  "key9": "2UssUnD4wXzPm3hFeUv8F4ep6eMVDQZLZbvwk5kFTKkqRJvwpSUoYHvsS2HM7eifdjrPbgf1SYC11i1jZHk3G5Mx",
  "key10": "3nuZTZCvoLLD6s6xWsGhzduPheHQ418Njq5zn64Nw138jWjZJJ2qhtpV251VNGWu4Uszf4Ga5PQAtzXikaec3HNt",
  "key11": "2tMVEQd9KVN9m7Q7M4ricseAbs4tKnq27Qb4X2hjsRKXTizTUynG5xNuitf2Dmg38RvxnSJRR3qRgWWuZMCBM88V",
  "key12": "65kjU8DbY5NgBmUESSEFfqB6iF5Jm4et2zPu7HKW4RiB45EELeAkv2EdU6u5bXmRHoLVvU4eSjJ6kzoKp7LEXpFN",
  "key13": "5opBTHX9tg9HLErxZBtTj9eDEZQH5vE4AjjMxD86xVT4jtvhd7mBwbV1eoLnDxb7zqDD1Wi8VdNPncfg3q5hoaYR",
  "key14": "5QP8vorQxZ2D8g64bqmdMDjqVEct7JXBj8j849kWbu6FCLfmkSYLkLrdMAtrFcweGvu78HRCR8pLU9izf2ygUHpp",
  "key15": "5cfYUZ9uPDUY2fWunEEKkb7T9ybHWnwHVxs8meGvdSeSkrywK4AdVatUMxFdYwtA7GjAWLHyjVMQ2QrZqVsv4xAb",
  "key16": "28Eb2FXM7RE3u9hBFpnDpiLVBFyYKrNMFCsygLh8wJyFSV1CaAwthXgfGVyFj4kbX46FVHpo8BPrQ2SeE1dTVKhj",
  "key17": "4cz8mSHFDXbRh6QUcE1A6jrrsZPw1JYgNe3LAxJeojWQDhrvmHJS9k3RS64HCEFoMypB5mebrxTrGrE9nLEqXpjY",
  "key18": "m1PjnPUtZ7oYTCaR8jiWaRro2s7XugAxrvkLe8b6hpKL1oqstf9Ha9j4fXAPBd18KryqLSpePBAn999421f9E95",
  "key19": "4MtAsXfMoZgnT9g8ewURwLNVx8Lvie7dkGu3HNAfDFmXJ2K72guM4FUmhgFCqPh2fLqr55LNq5GevLnMkKPosi5k",
  "key20": "5Hjnn4L8EyJfPuWq8XWjWjiB3vGQtyUBW4NEL6LAde5MpXtwPXSn7ycS69i26Ce9aWm5J7bF38CRSdGDx5ygWPri",
  "key21": "3CYJurH26efHjuCg6c4vZ8st6Jdgc2MebPmPwNaGdzy563pd5TNFkTG9AphVPMVHtAeqd4SML7uoY8LyPt9jR3bh",
  "key22": "2Vep95BJ9KN6pyVDegk3daoZuE5eRJQjzS3EyUfsqAJnGXfGJ1oVGu6WJshDYFAvXGanZXSkfsxLsHnbC9nV8xWY",
  "key23": "3T9jhjJbq9K1VfgTRt19qyqaCK44JzPjdqKgsK7RFxNeFfXgntaGfaF54TbEWFD2GwLbN9bxgHpLi1DPJF9UmAu1",
  "key24": "3LjE2x6zP522vfHFEZBJcxjz7AYrN8uCFA5sK5fVqLxQpZLPTE6nTDhCostprmuXr1Jj5BNumyZGN3XjyGNSPXAQ",
  "key25": "3bhiT5NoHjBoVWwAVLiXtWb5J14gjPGhHbDjVxUr5u2daDsEze6Q9TNwwVBfGuNsUKLdo9EhmfpP8DaXuiN8E6th",
  "key26": "DcgXs7wHMNuANcaEQ6gpwM9yfeVQroR5CbDVsnhQWbj3GR4Twn43KrNNwiCgZgu4WNXaNurdfPwnYtJ7yJRLMjZ",
  "key27": "5GGTg9fGWHAw1D791KB4Sjqk2zQqX6FA74wonu4uuMCZ3T7XjgAsXa1fxurwBoQf9yZUh8AJVBHMTd6Q23yNV1bF",
  "key28": "4z6MgnuHuQaEG9PFy3YSSUM85CnxR9f13t9T4p3mSet2bFVkKYS6uRE8VTvLoe8s7xVTNeHcGmsGQLLKJTJKVufH",
  "key29": "4AAqPesHfg3Cy7MAJMzEwdbi3nV6SV9iVCNSiiRw2C5QpFmMHMfZDGsHwwoV94pCrjgfxUe9SwbQtp4Q5npUHzBe",
  "key30": "vpjsqrHmdh9sZ8xJihxVCv8YqpFVh1vX8ZjRk2tFQb8Pv22qQ8vGmSJBfhYEgdfpZ9F69etbjcuKsvTnjeoNc47",
  "key31": "SrCP11usQEPi9evYarsY67u1xSYPuN6W6ZJpVHL6F69VhJfafXDP3ZoLdZ51wb5w1KTB8rHrF2k5mMwLpQZai8Y",
  "key32": "122CapfvKqYigiayfrPFUur836C8uEi8uqfjzFj9wUPnodzAVpaFQ9dGECzucbFoeCsoM2MrmJ28b2M2F4kq45M2"
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
