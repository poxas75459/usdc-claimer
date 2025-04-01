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
    "WZiRgfvFHXz4JtUNeDA6JyXHdR5pDpjqwi1X8sJWUNzYHzMDGAsJWDugwPAzkp7uPsvt5q51Gti8QELaD95H1ah"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PaxYcHND45dg4ND5NvodZ3L8weFEEvWXcY16Fe3wSZZMb3Aikck2wAMuiCi4D8fjtpDGfL1F6ULhq7YnyQkTdKw",
  "key1": "4hgYH9L6epaUK37ZzdDgh2v7xpmPRbAMbzDajPDZABbWg4iN2V66GVpgh7LRbfovVkt2XPTaRJmVcGpQq3t9d527",
  "key2": "vFpioniF89vJzrTcujd2T2ChNEhybmvybcNGRrvouLyUmqTxyDcw3EUkkGLsJq8xRceJRDsp2FjDFWPevs1TuKX",
  "key3": "4znX9cJmpncrjVnKxEz5CB9QU8F8onhbez8576wHZ4v9C6pARYaMYNiUKk9xiVoVgTBvmy953uoYRYhQFRhERcch",
  "key4": "2uxedUGtw8tDE961Yq5Lj3nPCECbmkuuT5G1EbYWSGPThZzTAHqZNp7AfNyta9Hq3yVL2ZuFL4vPtXKvqSaHExST",
  "key5": "43Q2wrZkRZqYmaXhuythEnRWK44iA7L7Ew7cZuQHtCCFiMnMgZwdcC3D1v8CKZvYkozHwHQ7GcBkMgjuK1qXiTG1",
  "key6": "3tG9miUxdmnhkyGaiRMkQBxvaUDy1qMeZSw3phHuX9EkMwfAeurtXRqb2c5rHRse3mRJhs4t7L5yn4xcQcEyZztC",
  "key7": "2nfEaQe5MyZSF4194EFcVdW5994QSNVRutCKVUiUSv9coLYkF8oJgt7PgN9t7fLJLpTWn3MhGtPbX7fFhd6QrpmQ",
  "key8": "5g1iJdtHJvWWevQR8SEkQHpi7JgCjzS3XnPn7R66m1FE6JXb3DvgbFhT7KefPY57GMdTZRC36moqLoMUDMaQuoBp",
  "key9": "4t8SH81szQNr1JHDomw1qE7FF7iY4aPtXbihAFXij3TWX5G1YpvdsWNw5SApboNMrR8B36QGYtLrTTuaZSoSpdmc",
  "key10": "fWDSwQq4Lpq15NzspEXNfJGSEPwnE4J8vEkE4j4L3ezh1adwaU24CTGuuwC6qWFKCqy6FT11ptwbB9ovAEPGGJs",
  "key11": "5m5YSvv4tt1jakUu72xuhQeKPQkj1o1Cce8tb3MDCSSLxw2k4p7pG2UpPBcafi8vWaSC3sUncabpoAQWDqUkCkQp",
  "key12": "4oPr4cq8ebvZckCE13Cyvm5pxgRqvbghpStri9raZNHKgtvPiEbNR3rntEFsN2gFQmgipw8uB6sJ2e9YgoLVmJ2",
  "key13": "4ctL1o28cC9XBzMXfBL8d6yVXUaXytiuT9DgxHoVm85RtyxgT8VwdqZDGoJ5vsZcvdPKAf2EewcBa18CJX2EAi85",
  "key14": "3gh4QwWHCpggGt2N3Yi3xQ3gkK2EBKpcygE8juafR5PQjKB54kQKbH8xksdchKKithv6NXCYcw4Goun8YYYS3JoQ",
  "key15": "4Nj1f9PG2mMV6NVQGYGyMm9WETLEfjsTNfKMqHCMqg4BCe19MknFp8aGBpdygsNNyJDjJ7Uz3L79uyEAwPn2eFf1",
  "key16": "4Azbf4fJFyrkanbaiJQuXnQPr14GJoukAP4QEUANLGcuQy2eMXcebjG9aLrPyFt5EfjZoMvHnNZEpLT2kmf8pJVM",
  "key17": "63Pyxo8eDrcBPZw6nqH3gYKzkW5N5nFxuiUbPo58kjCY5YXbLWUbJzREBA69BCinuMBTKW1Eyr5kXHH3vjxLtv3n",
  "key18": "37XE5aNKXHJvMESMVp3HJAWHF248ESicQQEX8yzVZv6WBMNFbNfLmwgis3tKAc7Fu8KRBgqghZ9GhoCHy85tJbco",
  "key19": "3prEvQ2gFJzPeof3wgoP1rLdDBbADyxAs5DHQbV4GSm3EtDVEdHfWB9eqPJbxyKmAd6RNG78DRstq3UhELpYPWiy",
  "key20": "5h94jHbCbEZKkdK6L5zKYG4MWmu34n6QyMAaynADmpKhSwpkF89xMW4agsSSGStBunqrPA8dfGgJbXunaPcC46gA",
  "key21": "2XzdDAo8mX37thREpZbs1phEVCK3AiUVELhvPUERp8jFvt6k4KbeNspV37qRFBv9dSN1y4fwcfmwPXGqnhHiBjZ7",
  "key22": "3gyWyqwoMbwEkrZmWn9WguddRmCTfgjXaVT772vDcaAkQc1bFF9DKs1PQ1j2SKSuruMLSRVAiiurUW21kzJ4Wxei",
  "key23": "3U9LatnopcEWFRCJdat3VPitrbV1Cu5zQtsJ1dqz5FtqsGQnM4dCpCLhqWT3ZaT8fLbXrPSvwciYVRLe71B64DHk",
  "key24": "5uMiaUNZksLFcdggrMV5C1J2XdtzYSVFYy4Sxoi1D5en3smsyh2fZ8K5cowkjs5KLLrJmmdSLXRQK5gnkR9CZtri"
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
