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
    "2HY2gmNWnV2gWnBcPPCeHV8RLccJUHtBBbdTrdmKoGrg9Lwyb6B2E11niSghVwdbFM8qkn6bBpVqKhN18pYjt98H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ELibpQp3CWoEFH3fcwN51h2DDabfCBBC51KkHjhELaJb3sGMHvm6SqityvA2bmbSkzZXUWYCgvmhbN8PbLCJbp9",
  "key1": "7pH1yxGaDJAv7dgxCLugHMAU3x7edgR3moha3gd3JiAWyow68oadxu8CZisVY6V1fzJc39h2234DRsKxhAEz1fX",
  "key2": "3Btv374dJny9hb1tq9EhUc176Qprmz9KeZjFkW8B2Argbamx9KBd6KV4UCzGHKV4DG5WvvEx6H6SQ9oM7YxExme2",
  "key3": "sK24tGJdPKmErcJX4HgtvNVz3p3yMdgYgGsMMYd6VVXxqkH9qbKLWSf8n4QSMeSP5uPDkqRhJDKFnxANNPmNw8P",
  "key4": "3UVo9UP6jXZZT2Q3ZSoXqw1SLJBN7FicoSmFH773koYaWc5F8R6a3AihFrMeBkPfmmwPb8cYgof9qE7kyqfduL1t",
  "key5": "PKQa6KigKwLYwJRSTRRtCBHaZYcfJVxotp4yWK6QXRmiqW7xPaHC47voZtw6PZj2pKFsZVinSgDMLQ6s3bjejy6",
  "key6": "3cQBuybbnKjKCJBVcRud1DLs4EjQc2PrwF9vrVZi4LjRFriMAMaN3t9r2Ciw2uMxLujKY1QYzVnBoyUimwDHoYU3",
  "key7": "4mUBpH6hvyhKJRkpZvDBZ1HPxWz5ECd6kuLm45K52oXgr7a8Cq4cwQAfc2NsDyinuWyVtDm2x5mf7hVVEpyph8oK",
  "key8": "4noAmgkCDbfh4KMF9Y9imuAj1wC2BmkXgvKZg4ED2ef5j7KJsbUUaaAfiB2P4BgiN1Uq9gGwWAtsRiVESiZv7grU",
  "key9": "4XyuhzHMH61Mx4TTsavumgddsRrdhY59AdcmbyhSJL5fdu56HfSjwqLKGbpA8DtoWLR95wDetfF2cPZ6DQ73BfgS",
  "key10": "2rswBV3JU3Q5CdgWoaU3sgEXj8Wv9yCJe5RiyAUNfnd2tQZLzCFggbWF6iNytxJpoHA3N1AigBSDvjhVP2u4PftH",
  "key11": "66gbHVPAdGZEZpuj11roeVVHDz98qEhmhGhYrdfzvYnoqsBJgpPn9Njnyx6xmPkVgQLo4Ymh9XVGeTu5QnnWfyyM",
  "key12": "TQ8gxrzBeTwfjJzGcc1YNoz3CV4oikoUGLMXNgtmXaVkWQMmg74HfNhXHnMmrMMUuMRqarNYhfAnA8RCVaPdZNE",
  "key13": "2urt4xh3F9UkziZUziAHqVpE1Js7cH6iiKg8SLQdEwqED9zwYJpJSpQjFokvmkK8dLnqA5KmL9BLJVBH8fsMWSBh",
  "key14": "4Scer4Mab2eJDpPfRDfbZs4YpEWDGfWVWwNtCTfjp28eiKK6Uz5Z8Lxv8GvfMW9WbxH8YxZydgCLNHySzJxrFted",
  "key15": "kL6zEr7qqKB5sdT3PmUgkuU3YnAxdPH7dKjd9156BSPXx7t1MrUAAKGXWWMmKrvRYwC8XRbG5fsrjUNSDNdMNtY",
  "key16": "3QJ6Cx5M7eajHSdBcyJwypp8Kez8WDLmr2gwpnFVcwLYAxCZrmQrWnD36wojm2uoUPewt5QHGnWHvDeSxFUwxUZk",
  "key17": "AhUHMfatGDDc5FAH47zTAGqektmUZTmrWAcHijkpBo7mChTodCPXEWNE52da43YVD4ug2aCRtwJ1tZkLvc7X54i",
  "key18": "2SKEudzcRTCUwAWag5qmXm66JYhCcNxUiuAsZVvnxEYF2XV6XB99ogtQhfTtGAL1THiPse4sda26BPw6KiWpGQoc",
  "key19": "uTKRbnQiYdhxvQ5KVwAEWmBRTWweJcK4bBC38HoZG5k9MMu3PusiqkcEjU9Vwk5DRsGDVgcja9UGwKStfVXnHqA",
  "key20": "4KNcpxoRvi6aqMwbeMBJPTPGWFd9pDdtpChi6k1sR1mYD1VFuFo7JJLCa1p83dsqSb6WLw7xcvCHDtZtNyq9GvSV",
  "key21": "H5mwva4cbdy4N3uvuCXUpRq1VhzavbRi528XubCjSGSs7FrrN5RXmP43397Ak77uDq5DoqDs5vvkzsSJDCiUbyw",
  "key22": "krWg2H4jVwHjtS2wCG9VfuPoWGusVJ7jxsZLQ5uMi7FwQ7mtCKq72tidRVbKjC86xvzveB8Gm2GegAmtUowrRnf",
  "key23": "5gBP2GXL7qMF7jPvaR8Mk25RPQtiAKXHikTux2xCosgPedJK7AVGKSPocptCfMYZerRaurDnPpnwFJ8ZpCJT46fx",
  "key24": "4iTr8HyhTjgc85utxxoNJULKyPNuseTJByHYX3jx1WoyUqEpFhRDdKeLM8VPFKriPxxSiM9ZAwDGM6A8fW7DtCom",
  "key25": "ZcDFSXcC8NawvfRc8Nh99ZT5Vf8eSecsQc846e6VmscbZVcNkzFuRqAmzUvxDtGpAe9o7BqeyoJNs3Cmz7CxvmV",
  "key26": "MVnH7Uj6KjYkgEDNQW2xYNyHS7ZTtmmryHagHnN2qkjTWNL5p8wzEcetaGBG58Qpw1vPBGrk32pWxaLnLPjJ6LZ",
  "key27": "nuDt3hYE7uVA2ZsdvkJ1X67LBe7H2SpD4rbDSuoV5fwWZydiVduzofPkcnZA5fwsLyrkeikPqq5RePbFSaH9aAj",
  "key28": "52r6B6fHRAX2cbMNsH933dP7DDVd9WbXAZgNvuMu56p7kmhStSgHJwBGFon9DkUcruPoNQjDkTsv8w1fuMtQUZ8h",
  "key29": "4hhwJBuzrahZo3SieSgp5gNCweXypRFhxymDkFR91CyunTuKKoHGQfQrCGnXbphsp6ChpF2X2u9iDdFR9nySAc3a"
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
