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
    "4XG64LoconGD1xKunwqTBYfPrhFPhGENjzSqatmBB52UApKx7WfR8EzrPrP1ByyLr34CRTcgydFWNjdMoJXN318w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zZ3zZpggux7r8dMx4hcaZTnsiQW2RWjvg72tHjDGu3aLqc3muS1Qtv1xH9TmBVWKrEnzSmfuiwtwtMFUDRGBCFf",
  "key1": "5X5MxMee96gy7RyGahpL1uehJqsmSEJaJYZtcgmCFBXXZgpKNADiH9F6ce4zFK8jCXHdjifHiscgVB9qsuoxuDyK",
  "key2": "3xf4sEchHw1yVpTRG1eZ17sW623fbem7cTZBR57nZWDVU1RTxmzYrLuESAnDnUQXWGegnxxSvqnHpETfZoUe3X8t",
  "key3": "5r3ig3AWccPykbAnz8mrMGekb6QYMgU4mvG6Y2vnw4WzcSoC972mc7WB7mihAMgVeAoDMw3dBxBYjEZWWaAgsLfs",
  "key4": "3H9raZt4kdyuFPsXKFgoWyvGPcTZ6L7iSUUtUCdvGsknZQgUo1qn6uJSLM7MU6W16GCy3jUYUvE45dct75jw2WuF",
  "key5": "42dUhsw3ZGdYTZbGb1Yz3VuxFJDR16d295C3Mmq6mSQoKaFrbs9unqgxfU1rrra8hSzrVZzeSTK6SKWrQWcwd6Nu",
  "key6": "4JQ4UkUZm5PBxfLb9uV3w7zG9K8D97Dsozp7jfEqUorKXPvx2fwVLum42gq5fLMLd6WWmHpkGPjAWvrcjXJBvuFQ",
  "key7": "5FuXKEE5ic9g9csR3116w2fm8ZFrCfqmCLs2hZUF7PGUShWwKYqWDy84zS9WeyTrX4Lvnx516QSscKW5ALDCHNTH",
  "key8": "3oDyitAmGduBpezXQsBCyWwB6Df8Mby3MxBzKDmmrJegYcjRKo1npvM434AQGgZQB67Q15voGuDCCtB1vuLk7HSB",
  "key9": "2wP99aF7m5oBwB9h7LwyyVvLpBj1VBeorLxw1Kh2TqPUkYi25HS4SubYpccGGckp8Z9GaumMRc67qt2E6TErUi8N",
  "key10": "5GN7ahev2ntmVmwdJwvkz9d4Z2ergSmDnRyWFPj6u7HCgf4EPXAVR2bnxPVEkBvas9RK3NzYfaWREiKmAAN5xeZx",
  "key11": "2y6wVHEiedbYHtXHY7AQ5vq9jYgCEMUqbR3Puji77wDayQSvr5FXPCE1hyGzMSVS7vFQPEPLFrgKFCyNE4tDPgu3",
  "key12": "5Y2YhcgCABn4m3McD5Hxv3e6Ac6uNFVdP9xwH9rFym6StpsYvUmXF8PQWJHp3e9nXkG26vg2qa4gMUxpZbGJAEdb",
  "key13": "4iDGxsR6XKyNaYXh4WDKz8iWd9JArt7N395iH4De6SmKRaJtATi25vQqwnLUk61zNPyRqBr4SSCPW5k4zKscK2po",
  "key14": "36unQMvgvZ6yHwAtMXdaA3fjWDeu65RhFGwEaCvXGCv9ZcgmVMCxZS18Pkc1fCNwmxdtnPG92ZRZYBjJBfwYqxt2",
  "key15": "22GirAuPVqUknEDrXitLDgdocjbtUePAZPiGrRuunFhwVFPRiV6p5xU4mP16cB4T2kRYBJzY8BmBLMSXxULqGrnJ",
  "key16": "3PwA1pw31jGcemMvTjjVD1Bn16Eu4iQH24b4TDjyh48ChMrbdNq61P1V9ix56XsmjqW6GnQH4XYKRfLG8LGcbf6P",
  "key17": "4KcKLeKBJBXaiDRnVgNisKcFuknsihNKT1P5ZnGaqudZgcJYK8GaptVcV5QYMDU7NzQ9HZm2cWSSWQnGaWFfSqGe",
  "key18": "2jbQ6aT5giq3bYy178EG6NDwnZdAVVfzCrkYcJ3qDY1uVTzj5LYrt7hBz3krrxskj6bcyjFWK2Ng7qVKx9PBG358",
  "key19": "3ixSZdYTWaAvSKLogcSxk4jU4TpkstExPtQeeNgCZ686c9CA9VV8aCMgpaCdCHT9EQrCogsjnkNjPDtdyDW1GqD6",
  "key20": "526E45pFuDJvcbWCdxKWupSeptTPqYDuh2Sryd4gLi1WTK9S1dj8eSHbJdtU2E7o34Ti6r1K7sfQSruUZM7VYh9F",
  "key21": "4V4DNEfF8nqDmbFXav75muV9nSNVr8pATu7PATMTW1dQuhGqbiSaDQaGQZLgs3C4x7oSsR8oaJnKVLziRM47ZTKv",
  "key22": "47HG477MQDiv1AGDKidbFy2trQ7UStxygZbewamNPP359zUQ9ttdg6ZEFf8b3amLxGJ3sRZ8eMsF71H93VcXs5PB",
  "key23": "4KjxgFgzSMGG5t6p33uacZUSaG9seUp5ULNxd5n1wRigrpoGS27iLWZPmcq4L7uaKSi1AywhEBGGiq9PoewaCkC6",
  "key24": "52XcngDgBB1apMeFrbJTRf7ZShB92mpErQy4mEFFiAWXTi6cB5ZWWeNmtm8bSVfyPe9cTQAwsvYVVrrfHQdcCKf5",
  "key25": "2tvG6f14garRJ8BVax9pKmAjQqjjkK51BWcGLPM1tt9UB8txB2dQXCkpcVka4RncNy7Fm4AXrX3redToJ8VvJfev"
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
