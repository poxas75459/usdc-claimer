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
    "48qe2s7Ch8V2hS8JdHsUPQWZfNoMQ2CFexjwRfNvrpaHzigTGiXMckdo4DZNbeHcUSRRKux8xtYHGJcgisnZJAdC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QvzhgA5uFwvLZgYjMheCTzPtZTfr6XGwqxN1uMRxRP3o95EqKQEqgV4xazABD8dwPGdwuXKYuE5rV2kAh6B7zMC",
  "key1": "2ZQDbfuaV2mnyzF4achzAv5G4QLPmH8uNEUnFfxMCXFMZSpS2GyJCZAMfMQU1i8XANFLvyeCZFfTB88R7EM3QPGb",
  "key2": "2rzpyKcAPHuEYPxCrDspt1xWuM3CQetMMzubdaUmyh3BGWPYShMcmfu6VDpgfD9JPuNWbeAdJ9rvGqTSbB8YHtV7",
  "key3": "5H9ufB9ke8JrE76hX11hiXpdbZGKqjHyPQCgPWgWr1wQmT8R5zRpwk6eLYzWPSHBsXEUq7SaJGV5pTZAvnV5zyjP",
  "key4": "4156RCpH1DNtQy54eLdjtx8BrYxwsRu3sroSffRSu1bTAp42oThgEJvV2BGrkU6SADQHxj3cBjm2Us5GJGTKQM4v",
  "key5": "6hpwXGgjzR6c6qa4FWVAEh1onhzpmczitevNh4thBokgDHdSkRGYN5otzQBqjyF2keYSgmWYjU6XEuhMHdHBHoT",
  "key6": "3JbMBPcA42uPDQQFq656uXYKJPmWdbJYyptgSD4fgJ9tu9842dTzaEYjxqNPgLtyg6o5fuUsqE7yNCGLcxqsLQXP",
  "key7": "3nZf9ZBPD26Ja4jLEDP4ecqwKEPpLqPm8DF5sRn2YrLUdQJX6YrbgMQdCLg2sTMVpnVGL9KUEN4enwWfLGuQu1ZA",
  "key8": "6V42PgaGESaqSZ111N2v7EgduLhWYxEjQiZPW7CEghCXhd2L5f7dKNbAdnFn5ZQ6tY1KvBVUKAqmZyDeQVuZwPq",
  "key9": "5wUaQTPb3Z7bnbDHU4CvEd3JSZ2GUEAcJrC7EstuPNJuaYqwXD2j16mS4aHrdcGps45Wso74QtAqkdQfnspsfevA",
  "key10": "4vP2j4J8qgwMtRNqaaVFxp6JzzGLF2YkmjcLY6q5SLmU6pgmwmnQnVtQHmFSbGsQggGUEdu1snN8PDwnixpADgsb",
  "key11": "5NhYxQ1J56bp6xSf4EbJMQrwSBVUYH8m4Zdtq8P1Uo8Yngicg57uhahHUdy5vXmoWNHgModv24thRBgkBskFnrJk",
  "key12": "36deMuDoy5c6ovBnbzjKuz1kGVu1x3VsdwJbpk8XZFdXpr2oJ8C82MxfsgV3yHx4391wsGG2N89dcMggsXRAtfUm",
  "key13": "4qoZuviJU1FHAR23KqQ1VxSTCrmKpLYAvhm9ZKt9cfKyemMZFaGqhTnRwMV8Q9m8Vy6z4jTaD2q6U3CXdGMQHMzj",
  "key14": "39hktTAxBPLAT7zBy5rKREy3DYGQ6WjEJd94zS8kZgQLsSPxY2MMUYFce73LukScaTpTCWsoXYGVjDwJqfLERYha",
  "key15": "3HjMUMV6AHMdJbFtZscpba6DUjaGivFi5rYCBTYNGLqDLepaVQ9j6KNu4KeXV7nFK5uR8fNEchTZNVZdNMpHDk1z",
  "key16": "3cTgcX3pqouNmAhi9357YmDctL8iNEJzQ66gXQznush5y1ymXgxpSwNvJb3LQZskKJYqMXFff1KznCuym34gTnQ",
  "key17": "54NvZfp4mD83JFUcdPaEENKMZrKBr6QNE9cdjPADXGPAMAfV49L4MWvran1gNbisEppFPPFyGSUvrZe7hiEQN3gX",
  "key18": "5qi4LMVuY61FG3fpvz2B4YGY6dft7gUnkkwF2AguU3gPrBunGN9RTkvZiwk2VhErj3dFfUFRmFsCt8QEpMvrPYZQ",
  "key19": "23DKekZKkD6pmkEPnNN1KLTdfEESit7cGMNk22QXchLoxZBw9xi63cF6xddXMsNY54qDaigJCNRb1eNosLhqFPBy",
  "key20": "3K92mWHdoTn6BwpJt4mMRcZ1ow3ZCuFP9Qx5CdJ3My5FMPnrb2kpoEwNiM6XT4tjkSCju5T3EGBCfBeuL232aUAT",
  "key21": "2qnMc6qsA2R3K9CxPPWAcoxB7EP3spyL4QcvkMpM7qmbiDfdpakB1RN7VGwR7aCiefetzLxBYefqyJJw5jCK3g72",
  "key22": "4VYH2pR9SR8WrRPwt2iz4vTHrVdD1S16kW7kXaCDTiZGVBAfnqu94M4jRvebxLpGxtki4apjtdgPAiJJstGtGYF3",
  "key23": "3LQuxKhUKoKz2jFb4nkwqs6uuxrHL8j6xSXv1gjnDVALgMqiK5zaSZrPB3gHDqN4sXmMCysB8iW4UoFTi3YE8PmJ",
  "key24": "39RJAfB8oSkiKjnP5fe4X39qxn1Q2qFzXFLo13SVNBd7gAGLkLrMQV1K1xXreMc2qFFtKVc96K2eRSj1KQVYgUPM",
  "key25": "2pakqb1VCS4Djdmc2uE5Ldw1qm1iwd29Vyt88ctgUFiHQDsvDtXo1CyieVCrVFyE74ZUGkHx37P9Hvm5Sakv5bAo",
  "key26": "4rir77Vng9vjKAKNuVDgaUSqnLcMGvCd6XGJUGbzw1t2eBUmezYT6kcPCq5LqTGB8YHmoxa5S2RMt5soYjmrVGYP",
  "key27": "F7tb2VJkzgJDyx57RCarkZASiCjT4pkWdGNnbtA8DhJdyQTjLzTV6MicZGdRUgEDJgVnHSByGLLxm9CR5FMtwFj",
  "key28": "21ugNAjq1H4ZPBSwZ5NQc21xFmqRAPkEYh2jzQ8hscw6vx6Z1bdA5yyWzwxiNZmK2FeuWYthVTS29qZxW7D8mw2g",
  "key29": "CVLd8WaoNuzBApGrg3qFKEKtmKHyVjVs7mNyBUFVtVDwdSEd9co8AYMddnzSXpydL9NzWqgV6WZntDnQas41THP",
  "key30": "4YdQPF2DLVGiNcdMbWaF1m4ztMxPBf6mB8VSrMJgt6PXCf694fq37P9rFErHNDKDkB1XhDL9V2PFC2Y19cqtApu6",
  "key31": "5d2FnNggS1879smpivhtkxnx9SjbrLzELe9rj2g7YizUcpVD58fNFhff1j9sxYV48Amf5Trzpbtk9ad2raHqZwat",
  "key32": "kZyiKPifaxLYtaZrqKJ3Q8zyJdhKV7AeEYxHgv5SsRxd46KiC8S6eDntd3NDqC2H8jo43YG3FrCg5bPwmhziXtM",
  "key33": "qziwPP8bFwUv88dgfksokyG1H5eFMUVHMVztYpadtjNvnTMa5UCXZUW37XkrytuZCXpXFBCBijs6txugqgpritV",
  "key34": "2rwwGCXgoh9GMFKggNbyCStg3tAPUTvh7D3vF2PpNnNJZPgn3VrBxpDhEzsAVmMjmBNhfgezxwDDFyn7Whg3PPX4",
  "key35": "4CR1WhceKjGdZ7upsdTcY5CexrvDWS3t3jR53FbRnx5EXEe9aVGnLT6wdXvvHG9tMD47jejNquAPstBHbtaYD4CY",
  "key36": "65vfr6J1mR47mNEzoLynSAjZCeqKmKQ9CmA2te8tzWGHNAiYdgeUr2NSr2T9uHxXMDqewBc456KQM4ySZYL2zV5h",
  "key37": "4L6eC17oj2c5HKzbm1Y5mfbnDXfskviUeDzvM7TAggr9AHfMERpx3wwiWEyt9wkVSMZHa8rQ6UU166sf8NsYAJCH",
  "key38": "5PrnKgvAwGdgNBRQYxhGvKKMAZ7TUNEvhvcJiSnCX8e4MUwfde7kN7ohL8zwdRuYFd1rVXsFgg1zEW59o5vBQz44",
  "key39": "4xGFZ1SMTKquw1CkEzKUizUd7jEwnPL9QukJerDmHPwCYgGfBFQMjXPABYMeT489nPkgGSZgerAHsUnq5ovfjHhL",
  "key40": "3r3Ge29L3fiLd3tYxomzTDeVkCS2reCgmgQkXFZvtc3XDojLFgXC7rdxC9TCgbKoBJoaT9NU9PriEbZqNoZycw1n",
  "key41": "2XSWPg3iex5oXX7kvYQ3sA7pkNPzKje5DScvsrjH2itjx7K4nevmjK1rAcE4FyCn3sAamzi6eic536avqNcaZSqd",
  "key42": "2XJa7msASYXotKNBbHuvpUoFPfsKJCuwQQtMm7A9DWjq9zgH8gqhFBXFFQKZf4JLSCTd1x1t5y8JBUUs1K9seTfL",
  "key43": "3uHDAmNH3kec3gLXSCFGzhUUpfBCCk613CU12j8bbn6Pmdzj8L33ZMRB7Nk2AxE73jLi4pRwkHUuft6h3rtUq6ZG",
  "key44": "2nJ3NVFLYbD6qQZrfW1aEHeVAGxTBfSkdz33eNMtpZkDsB4fJQDxQ5T6LxHZ7RGEbJKCTau4PSadEy8qiLKPCPHS",
  "key45": "T8Rj2p7c8NUo1NKAXEQeqiYkQgLGd3VqbWCtUrVTFQQEVQpjXoDjdY4K7AZuUQhTZu8V2n2oSCrUgMAb2RrKjp8",
  "key46": "5eC6U5LnbsWo4T9iDCMcC1H289UppN9SEjKneuHS8mUFYook6cvMVuB7tT1AyBkULXCsfsVhUwmfM8tQsKQpUJzc",
  "key47": "3hmuFuZfZM3q5zj4K1z8H3AndZYBPJe6Xr7XgrjFArLGjNTwGQ47B3ywjMDTwd6CCSHQkqwCqYqVuR57EKcj8AFD",
  "key48": "3SNo7Chocht85HXcYi31GmCU5U5csnntmcBWbEo1K3scQGppbUppUAP2LRdxYN23U8jukawJUgtN4W6CqvsVY6mg",
  "key49": "4itKMFWRdx3tAVF4Nq9uJK7nirXCtsWeGcofv1PGf1LRFqCGMZG779k5TwWZZhaZ3Acf2okojkJG7Uhgh2kNagUA"
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
