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
    "5wGLwGSz2JqCnXpGuCcSSojyis7KN32WoHDVz15LxP1VCA3anRNmRSpiZozGK6sSCGVxYnCBu7tWFWJxrJwEZmN1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vGyRAXD4aMF7K6MygnfY6k54XT5w8L5bNEEWWzYLTs8qTwtRXBKDAEAePpkijonBC6EvRWXm7r121RLwfCCdces",
  "key1": "3PxQNb3BWfwrojiNQJPqWcGoyD8WHNsqfM71P9Mnv5vuP5fZm7bbw6YJrcKHoM31QEot5TGzXV2oXXZPkTttpRVA",
  "key2": "246LPEwCvs245Fge7hnbPBbdxG5iL2hjyou1tPg1n5UA31EYx2gs2UHRfNGRh1Au1QEcBjkYBwVB9wi7D5GYZgjm",
  "key3": "5ZzShDomA7AWTwuwtS8z3ANNTdpWRJZuBDyxLUdC1Z6u86FX9FPxMa1TgDbSMwBoHCu8piMzacQ25pt6diL2txgj",
  "key4": "6554jJLUb7yM7jfzfDteB5XjqZ1kCc2WoRkiMxGnmjhajobXjdFEADBBRGVcCTdLDQmijKPr5RtewKVjLBeJ2HAW",
  "key5": "3EFuSdNagd6VEMTVuxzxscpqSJeWn83qHz3MS328ep4tYuJLKRi8mfRqNKt5y3YMam648Q6qhN1Z4ERgEj1Eukwa",
  "key6": "53QT56MpQ6EMMEr33iwRMCjXJk3vp15k23b24U7PXVhUMcFYpRNfbFoLJ4enyTFmziumhaRL7XyoPLccSYFYT4SL",
  "key7": "2eoeYUmoDBHCwCv134tkt17iA8ndgZrdAnFekgCjpNxzFPxup7oEGyHYB9xa9eKqfGATtxy9DqUj4uk44Presz8L",
  "key8": "3hnKPVZ8U6gzQjVqp6zZ3aQ5vudSMaVuGyRkAeyqYxeDY95LEcze7Yu9W987oYxiKz5UmQPqbcuRpzagX1fNRjdM",
  "key9": "2Q6AvNeStPWYNxpstsYe9uZgdVJKrqHg9RxzHSQFSwipS25wVNoLJjR6jFwzgkJUN9RMNJ91H7VuR6hregcqctsS",
  "key10": "3NeumEdG9vuTM43ivjSTaQLXPV9RpjvdCrXBU8DFatZemXu3trhTFab2HFvbAxcFjAhKrfbxRkBeTHdYQmvU4jAi",
  "key11": "3wyVm5gJTQTLGAF1uspdEVtEnbtzau3jQGXZktihMPmpcFPb68hSp2C5Y1YbX8GMHCBSjDYzpJZXPtrWSWJzewhn",
  "key12": "3fbXxccqb3qjyEdG4Pp5dwVPtDrL8t2AmroXzzsERDHCCc9ATSMbRTNmxbZHJiAogcntEC91KNTwDpBMMDkkcJFK",
  "key13": "BhsSnCCDfXgKcseYnyx2DYc7M2tKNyYtXtNFs64F3tAeuqRkoosLE22mv8YTCg7StazRH3eNnPVVSQW6DiRiqri",
  "key14": "3Q8NZNyq5NXGfVX84r5GXSey4GS8nxZEYQgpC6GtUXHEQpBnVEQpd1o11tCNCDnL2tXi6sLfkFmj8umeZ3GpPS97",
  "key15": "3b64htxdnJ4vCqghgpX9g8NngoGszv3cP3S2oHYjM4Y3ejckv5RdLjQRu8oTMhzc3jZonwNgkLE2gBT7ky7oQfdT",
  "key16": "9fyWu26ARyJAmZYvD3z2Ki1TvFXAZYKWe9Kgz4ttT6j2zZaLm2iRXGMGWRFpn4SM5Prs9oEr7wz7mWY9MLY75BB",
  "key17": "6YKjt86R4xRyQerU46YNdvn9mEA98oJvqpyRyr7d4FUp2b5dKgVb7e8ZpvrNvrZyo7XD45vwMG27VSN99Zc7uZc",
  "key18": "2WJp7aYnryWJZtsf9ws8KbQVAAGjVmKyXoKrdt6ox2YzFJdJB3ummkfyzjLUAXBEAKDopuDuiPuTSmGomcGp5puX",
  "key19": "5kikJyS28opMYFp4CJWJawM1pJ3bvZPcYqtyUFKpgFSgvciKUvmnrfPP5x2YQQd2sg38v1Tz65dHAMJGN7EA2WjH",
  "key20": "4ssyfv3eX1ixUAwynvo7p3CfhLBrqu51UAao6MofnuBs3R5HzRBb8X83yBjuQmFhBdJ6c9en553Zj96t3dk64kHg",
  "key21": "2ukiBWf8Rv9Ywz98MxaQveq6voCRKJAhMhUWuhbKSrUawvJ8Z8gJn2jtkzy5xYfZnPTKFmM2LNJBSo5mtKgh4WAL",
  "key22": "52WxAfo73eZAGvYFtPKCS4gdUdnFLY1UpUJMteYvmpxGhMhTYhRDWg9HX8SXcmxhJEunmkqEK89AmHcu737Wdbxd",
  "key23": "44cLv8sfWTXmEEaVchJMEUAyacRnQ6tt3Tio415DCMaYBuqC7bKJuyBMCq4WwKcJmC82Lr1F46FPWYPfHwJ3QGBS",
  "key24": "3V5rB3DrMVMVm86q9qz5CevBpUYUfteygYAFdEN1enQZCumUAZLY2bFXgfrS7FUfxrbVgujHMo39Fyf2nxLU4qEu",
  "key25": "2bFCGpkyX2hnP9kQMFFTThVaxfC1rt8mFu4etx1r3kbKBeVdePpfSyAcqcrvsfpCmZ4U51BnLfvYJxicsLMWMx6k",
  "key26": "2TnbCzRNhjGnFMC5sdV4DRA1fPpyXMBjTFPyDfu8KgHuvrbeHSyF6x7b7VWj6VERnEC87tKT3K74m3BAsFPZBncN",
  "key27": "5mAW8YfLwikD4HELvX24jcnKGCzjnRgjQhujR9PCgPNdf4BDBriRnU8ZAx1k2GnTok1V4KjdqZhLXHtjgoxUCJKd",
  "key28": "5frdgzH7hrsWpLcGGtmHefzFGU11AFoEtmn3vBzJiCakdQQhJfC6JnKdznim4MenFt9dva75FW7eRG8s1A7oPRbM",
  "key29": "583CaJVH6XKfQgAAgV67ou8Q7JcS1HpWYnS64i5sA9g54KC6MBRa2cLoMP7mMgnve7UcaNp8QWXTzrruLRmMM5Nb",
  "key30": "2AcDcQfHMBNw4TWC7U97zk9pCgcFB81Jz7DedKUon9JnnuffAHLdUULK7oAsK56wDLahTYPsvZCYhtyyZmJJz898",
  "key31": "5REUZLKVQFA17Ni4Nkx5yUrgS5NhRiVLWL5YauMSRw4tiMQWrjGNZffMiQ3eqmXbyA98pFabtX7d6dSv1QyWGgfz",
  "key32": "oqnkPueE4PEjvrruqR6h46WXDJrzUuxsXxijUH1TVsfT7VwRZsVHqHTFdAVbzMJz3qmTykXKxQ6jtfDvNPagrWE",
  "key33": "4qSwTxrExxRBqTqKM4M9MxLiApAe7pbmHae1w1PURDxrsuXKX1gZQgp8x8uFDULQ99WJ8va23MKZ3R7pTWeyro8z",
  "key34": "5zhx72tuUTJspRBCfyWYjjTrYi3xrNen9eGufzEuLF4vnM7aWx9UUVZXkmYCMXcBq2oLF3ybNHCMisiHw1gHk7QL"
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
