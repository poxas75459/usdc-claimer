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
    "K8fjdYpcU6qxHuK9samxLBNzSSw42Em8GnDxa4GqjWjCPH5mBqL8ejuZ9x3YViniQGvjzFr2Xj56VJq8tVqYJRM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c2YyUY3g9r1TRFA81HnN5PkQJWsBdetFBBsJdCbk5JKhyaF23iShxmj3VDbZUsiYu8RYi23iCKqepQHwJ81cgGA",
  "key1": "3jbN7vV8vdegpBXkC3tN2ECiLLetXi7BKpPbLhDzYi34RfPVFGjqTS6DhaewKciPURxgQtGrApfpgpoZ6dBpaBoX",
  "key2": "42kEkYm4NNVKrngTQbqCSFeD9e96nfn7qHZ1ibX6qMTVSoyT2y5jX1NXndNwBjSe7z9vJsaM5qwmsW3G2w4pvUoT",
  "key3": "aN9q4Fhp3riX1xWBQqDkqhYvvDo1D9rvfQzCmpG1e99TQSGHniVzB387wxinV1uVWFdQdpsi9E7vUqK1MTXPhGZ",
  "key4": "arjKDu33uvarf2x2dZ5b4XjSTFTwzKovwHWRL3oam4VcwpxM1XVYHwXEM9tMEthobm5nC4VAr6Mnbh4unHMk83W",
  "key5": "59Bi9Xm3Z3kWr7f8vQLj6367K8cQLJgYPQYsdFKwhXc65vNvKRVzekz8HLCLj7UA47GqKN2KLd9GKJfKCfXRRwEH",
  "key6": "5MD4wXcWt33U6cba71PMBkbMKsJB4ZNEreSPgcwATsZFzypBdLtybKSuLjMJL2W5SQc3uHiBRL9rskbx71wsopC4",
  "key7": "2VVib46LbfAYVSbvBEQ3MSz9rCV2JjykcoAZJQerBns5tomRNBeJZgPdTScY9boxFf8HgKccK6s2wX9kJg6CoMJH",
  "key8": "KHtw9nZqSYXzgeY9nt5SEzFQ4XEjQPyVvyfzCgPCKAw8BjakA1PitosYYUzK2M2SMCgxn7Hdiv8mkNZmXdXbxnL",
  "key9": "ACS4ePPi14hjhpieLDDspTEt7M2DbA4k7VK2fgBudXUi2X537BuJXQDVvNmps4sdLjKnV3fJ1sYEucabzm3x2sd",
  "key10": "4peAdugfiVk9iN5RbuMopEhnKRKbtzj14d8cSzZppSg12FEYQ1maGzMqAzcvZgbdvZ17H829WHXpCAAvytU2wDtX",
  "key11": "5gcRebwfQVHSTbx2wcrymdREjt9VrCRHW9P8YkEMxtRqzUHVSeCD1pCTvqogX5pQpWG8QfD1iULiRPmo6DEm1XVh",
  "key12": "jTxRwUfjKrEATbpMxTRcdQwHqT9b1kEHtVJdPFkeEC1Kbgv45JBzxfvXouu6PyBKE15PBaSUbR8maxxK8GcCL1L",
  "key13": "5Pqke8YR9o7BaxL6sJWswYP9TomDySL9EzZc7SRAZQCRsph5QhgXmhKEyHxXiR5QhvnzDXC4cVQsbN5PPXL2F64q",
  "key14": "hXn12HzBsAB9ySBhpjujhwYhLNNtLUBMBeZJ5iJGtLM9xWZdYEJQDWB2MSgpPACNoS8nvDmczduDDbm5g1BEdJY",
  "key15": "2ZdKfj2tFVPQmBnDqmRR9q8PfqXYc5MedYWpM4y2LZN5XGayQ9fonR2CdJozU6UEgT6fw1ZribhtfFCyWtDKLySF",
  "key16": "4Lt61nD3PYJXZ4BKgGVes3z92SNCuWBiZ48mziNSMvRSnBivrjA4oPcHLAYftsAYNApeaQ9AgfgHf3kZpi5cF58k",
  "key17": "wnr7fBUfvwycKrSKaQahxxrRxUspH5QYb6ye1vHx8MYqSbuBNDzT8Vrim9Bvdf35GM3mpka19No8t3ozcYf2eR6",
  "key18": "5oiHw5M7ucn1YNZLs1fXQgaCELAXeCxhNJPKcS4TitJMKKFxawq2WZMee7cUGqQ54cqf6YVoN84imsqAaVunCEQC",
  "key19": "XXUML5ZEBF44TR3ZAm6heccrMz3E52eBCNVJ2WvHcLNLXPapee1phJ1mwfqPpDLSvmGrX3NjN7hopk5g77XdLyr",
  "key20": "pSgp4aRTaGgsRGEJ7mpJj7TSVvzSSWB2pQHVRaTgfQ4Y9UdU2AciC1NpmUSiwMm8afFe5QT7RDdyvrnqi6xB2yr",
  "key21": "3DQ82chK4Nr9Dz7exwFpTWNwVQyprxhS9oamPyPGH3bfxMFucyHydtqaVzupErGSCshBUFPrZd3b2CVSHfQ5rvCj",
  "key22": "QhzN5faSDnZ5Ja3uSHcVSDFrdFbWxnVyCHfXaY9jhxQZrvGpZ2T6LyLxWxzBoBWg8TDFDnBWn8WNiACvNY9hUMM",
  "key23": "3weZL3y49BrcmPW5JmQd1S88dmWR8mcC8tRE9hnXNGH6niUxUKpkvCGL4rupDQdZtYZWPBP1wDLNpXTreKvuqKAh",
  "key24": "5auQVBtE4pFbgTWHXAL7c7irnz9gsgHFG1RHys29skWp5vJxan26t2R4HN3xvvRAdJbbYRLY4RoEXTroFhfmKbuP",
  "key25": "Saq8HBuJJJYoXioPz8bLjdbohvrLHLT1n6vpnWN2ASoNVaEUKF2iEkXCQtaZe4vZfGcZDvxHs1UUPhbzvPsZ5k9",
  "key26": "2kU6VZhefyDnR8cEu5RtjZZdGzXSFbgCRtxfgfhdHa6Nfh8nM13rDawKxR2rtmhZjDd735q7aq3K7jR4AGcDiX7o",
  "key27": "5BxPdDQP3fy5jzHMryrCtc66XCh5K6adobn1jWUEPT4W9QZYBTL2nTVMjmxCAicqknVCExmMoLtcLEAymsbZWAxj",
  "key28": "5dxF63HayYkU4rkuNLxy6nayTPSsPszNoquyHQeeS1fBoHuCKbunMqmkMi1HovXMTcr4KTRqSoZhVNS9FdrkYSnc",
  "key29": "5Q6o6DmACRjVLB3UnqVaf2gqzkQ72mfnx384PcLF1g45VZ7RRR2nTYrV6Jkp59DLb55Dvvu3543wpkfYAYrNACmf",
  "key30": "4UqJw2sKkAdQZn2zmazLisy7XCoXVvDpjzjzdT2JYWGzZ9MdyMeFxEhayhF9Wu1i1gLfxfvWQG8K2nv68taYxqqV",
  "key31": "1CfyWUPGourdnHyufNxVTYueiJFsVfV9BLhCFQaT7CfLAcHfbiPgyRjaDqgeTZkf58agzHF5ZFNfGi9VqSFv1Dz",
  "key32": "2xkxusSbqfpaNWrwFZY119onx5Gf8R1Tf5Z5GbgbhxZ4GGWkorz7egizZ4tTEKiA6hw9Y9QPaeoMeKQNgwRfEpmM",
  "key33": "2t7QdwiU6h1a1sZDPfTzo6ESux1xE5HUds7i966AoFrEP36gkeEJ7sBBTYuyoNbxihQhFEx3v7BPqb2TW1n7sX4b",
  "key34": "2KnM1xXbdJvJGFYs5dqV7fDSt3zXAxPE5X4REGb1RXV6GAbPtFCC4gknZ6uCHRwVNTY596SoQBsTgTHTdfSgqHcs"
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
