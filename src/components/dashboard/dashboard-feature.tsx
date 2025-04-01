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
    "5TbQd2JY3Dk6X7sSMHpLntVpoWGy2DxGQYXqPgSuBxEq2tYi2HdCrGyTDpiRVR7syhziALyG1hAxhCzhj43TbNzN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QMLj7qNq9QvPxxB7YC3nJA9xAMoJpNVG997YDmJWAaEUuNSzxNsB9wy9bjZMUPmc2EZd6a69ryCGVy22pkxvf7K",
  "key1": "489boHSycYFuu9hcaVk3trFRxB9DaAF234x3X9stsN9vpb2kHEF27T3k1MinggZ9Gsw2pbhZmSLWo4hwHy32SmA6",
  "key2": "31q5sNSwS6sCjPTMLomygeL4JMkZw3ji9kudSoiS2ckXBYicBXgMy9Zeq1YFgaLL5YSb2S66DKhDrnYtgj2iLHXm",
  "key3": "48ZcQYG7madWW915C1z47iHix7hpCbFFhjdWTmXymEVmRA2Xzj3GfECG74VFLXz36MbcZnteqjR6Lg2RGwFnjPQe",
  "key4": "3FgReyPfsGgGnUAtHdPhnSebVCP8XqUteT5yVh4WZemzLJQWHKn6pPa24rwQp6gvavac7a9xcoNGwV1nzuWVEA3J",
  "key5": "ScvgSYZcnf2zNJZkZuimcutTcsy5qPqircJkSR1YUUH2vSUmJagKEvE5CMVHqA32pM5pYw8VFhdxgubnp9sA7wS",
  "key6": "2QHH1LKBqw8jDQDtCZ8G9pKpm2FjEU9PyoUbkVA4T64dVwqZSibH8auEPmk9fi6a2Bmsyzqc6ZgSekrw6b8Excv1",
  "key7": "2gvYAPhCjgvTVfSJxcAJ4QsE8ubVPKNoXjwxSGKCtiG6J76KQYDs8Ks27EFzpCZqCWV8QvDdq2v955nK6kFL6jvc",
  "key8": "351g44u5jyqiJoJJwtzPZo9WmsEmsQbzb5VKeeHTyf8abSmesYNDTdCUfT3mMxSDGiVj5iDMPLT79fEHSuZro4TY",
  "key9": "SSUUci9XfXHBvyTnp8mNjfs7DyRuc3ruchrA478z3HtDeh9m1hvfNVJfoUAE4WQPrkmsXA8kXigDARhdkLPk89U",
  "key10": "3h68THaozQDrKjCvoKT8qaZZePtjUt92tF98NdnHCJzq9pVb1CrjxAz47HcW2HadU43D9TrGb7rgLfSW7bEDHyiW",
  "key11": "4x8sVosVToL3L5zAqtYix37qv4rfVksx3Ene8CcsumxV3k2nGZ11Hq2g7csfe5z1ZdBrBG23zoqMgw7Vhii9qE4t",
  "key12": "HDHfSnXoXXBd6PmyKmmmfkH4WzE79EEpa8CneGMPtEnY2NPM4g3CqFJFYrRUki1mkugaQwjppWVBgT3vcHZ1gBz",
  "key13": "3HmxPeJAANgnXbo84RajVs9UtedUnkNLWZQQpq6tw2WjotVYD8s2Gcz9TyHGnKwVXVY4hcFrdMxSc4iu2AbyuSDS",
  "key14": "36De83oTPv3q3QPdimWewwAo8DwjBcNochhGuVfSWBNwmHqDgjbDJEs65YN5scMYQnG1YKCf2vRwsTGyNny4mggQ",
  "key15": "4u51CfwFZFaaazK7BmEs38F3j9Hw8LZfh6ecGTtqub7ZndZ4nzh2EzubuPsHs4EHgLRMtjBT8B7equSjsgk5o34C",
  "key16": "2L6BQ39kZLuktDYNvyPFo2GoCwekTBCSoK8PXFDH3LfHz63ZQUbP7ocGfQ5hmwJXUjJ56sRy9n1SbM3942UVUFh5",
  "key17": "cDZU64CY7w7T3MW4Yndd1PvXnjwr3PdHj1Z4QaT3eqMESZfg7BmV2Po4qdngwhDXd68iycA8A68f8HgseyrVKjA",
  "key18": "3kTGJ7SSi87zZ5GSmUsGJXZ3r8mTGZVGmZ8PAEMpGaZKaAMGeNiZWgezLkXzRHTmDKyhtEUwSwYNhssSz7HGaMo1",
  "key19": "4ydEb7Hwzp2c5QqxkAf9CfvcJZvafYVu6rnGKRXxQPfpfdAcMk2w9oWaDQ5RSG6M8a1cpgCwdkfjZ9N1Xezt3SNe",
  "key20": "5CXVVbKqrZZajjERA6tjVu1LT6bZ7JYcEUk68xqW4spW6aGrLQqFKrFzmfaXY9A6SFv31NFRHmBVzFLuJTY894Q8",
  "key21": "3LHeqwZwbVDprVZvCmLA3nQnHc5EMSUEpjGnBmAvTVmV9FUwiDfeYPuFdxE432qcPdVsfsvhc4jnsLqqDKRoSJnd",
  "key22": "oPdXWYHBFeMsqeVKhkhbrhJH5PqbP4ZMSNFmUK4z8UiPDK45wAh16SDdrutHVy8xNP51sZc6U61GCNpp4bbMUCo",
  "key23": "4eSCPghmH66Hy9ecZZccLjpno536hm19nwRwZz1x9LAXFJn7JwwiozSzUjUx8jz2LhTQMFGh2XSTFinF9SRqZRug",
  "key24": "2H7FDB1KNSdrj24WGaz7Jc8wJFoMkXqRF4rM7o6rYxvggWCEoHFAggSQZoSayzPtiV6Mga9LfKdDyiLcn6NijSKq",
  "key25": "3mZjy8paN9xNHDtZNvoGs3uEhw7fhDx8FRpMBHWqkoooAWBPe2w1V4g8iyzQqBEghi1XkkgLJqixWi7683qVNnSX",
  "key26": "3PuWYuUTbPbjxF6JkeHAUtGqLspRoMC2CPdpZbTLMDQRpyTUdGzQy58iUKkh4BDvBKF3eWLdYXsdcjjwTYkML7Pd"
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
