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
    "2pPUPeJMZczyQycVpjCDeBSRvtTnUsufNYAYTh9bzrUhrJZ5VsMceiQP9GQfusmQ9sbU9uN4hGa8pDXxdqsMfwkb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XUjb5qGZbRAnPJiJjX9SK4zJTr8SGmAxnci5UNkP3aMx6h6oaFuodFmAW658f4W4tCbpD6ZuQGJHuhSnTbNdcJG",
  "key1": "2PDVHpmK7C54KX9mLpmi5if9byZ6AGeF9iUNAZnidYp4YBtu2xwuJrnAQ1mvVs9qzxkaUfu9cpV87impB6vgdvZr",
  "key2": "4hgv3ZT4wjJLkJZ38CUcGvSsSRDNtLCQFUGAYkWzsMHZRwNbut7WK1hKCrxuWrQyhZhnrWqw8pwvreTkohdH1zfu",
  "key3": "4woYzfK5o4uE5A9ReyLTFcLUzSk57PAJ9DMETwjYHQei4bg6APXswvRQsbRSyb7eR2cUNnZjSTk3dMPt83auHavs",
  "key4": "32opnkM4ju7PT35RndxYjSLzspH2NfWDFKT3tWf5xzaX89ceMwWbUJHQhd4cQ21zXZ4mrjQDDpSPjUkyGbVghPQj",
  "key5": "3tBwfyd87RdwDT2rj5oQJXnQ3b2TE3eDVKiDP7GW3Fnijzd278Weod9eQXUWUG3ffmNmjc49xsAPcPWPbpo465Dp",
  "key6": "SpmdM2WkLbzVER72fCjpK4gc84RsHYojtC5Ct9E8wNxUSan3Qgb3pwSwrhzdCECeNCEraGYF4S9kTXeohic3Pc9",
  "key7": "26ssW5irDtTXrd5rtDdH5aWceaFDgU3sNVswU4SfQooSSjAKsFQBKPqA8GMasx1uX4CsPafkJBsvrhAALvDWEV72",
  "key8": "Ay15dZpPcVfeJPFA5pYMCVF5Dxu9dxB6y7P9ishiLPzYoUkyGaWToS4k5G4w9iQyiH28ddKvP9t872taZKTkxjh",
  "key9": "sm6P4uKLr2ceJwaRVU8k7c1WbmZ88LD2XY22uj4DhgTRUqi1GKEDsPUuXbJGnqU266BAeteqTrh9UakNNZUmEbw",
  "key10": "3Enwr4nVwvMNxnXBy7V7fqi8y5F4tP136yjKoviq9cZdEs5CqA4kuXsvEtaPgud2pVRnX6dNJX1XYPd1dcRW27Kn",
  "key11": "56shaFaHJzRuTtCXiRAYefJ6FwQjFbUyKqfAABiDjGykZdzhcFDdhPgxgLZ8Hkc6mhTVoTobxkeCEBhyFUiNKJpq",
  "key12": "54hgG9LRdQfKfyoFhjBTWnZcjpUWt5658M3zSwdvq2LFvpZqvq2jZYhidA5WuTPuLsoxZGs3eUUyDf2ztRNknUFk",
  "key13": "3ZejCLJJfSEGWufddJuj4Nk7ehWk8QqQq82JrKevA73PhkgqnYCoUb1bEeC1ioXqtcF2VAhCT391KgUbomEcfxsK",
  "key14": "5kDHc1HeZG8cTtLJkySHysDqKVktqoM1oKUsLzStmSMJhup9j4syUwngnpizUSvbXaiyUbnPPihg9rojT6xBywMN",
  "key15": "8wD77YkngPUmMLQEcrDCv2LViXoq7oh3bf814be5b5fyGZrm5jpwhy3zBQJKAFxu32pFHYb3w2xyFZnGE6yDBNi",
  "key16": "4z4QxWkxwQCV7V9cT5P8oLJ1hcMKjPxsAt6L2GYKh4vuNVaVJL3VoEcEiS1t2eEwRDuPMBSKugSA5YV4Yfz3KFwy",
  "key17": "54ZQxvFGADVSGquG4mNAYWTTLsL9AkkWouqmLq6hx374S8iNmWzYUH1yKTCWtvhV3gdZ5DRv5SLtsyob5ma2nbBe",
  "key18": "4hc5MWyKRpvmkmpd8V8uJyVdMtBuwqDGWp3n5qVynWvZ814t6CWAaPaaBwtmH4JRysV6CK4xsEjirL21MMccYR2P",
  "key19": "3ryLpAFGi1f5nximSGTjtNcjmfMW1enmTCimzWhiqHmP1nYEVDjmmmmL86S6bs6XvEB9NJd5jFpjL79V8RsdBqNK",
  "key20": "5Ch1FnxQhSZnLLyzgPRLpsFqJAAKUt1xRQR1vqyhtC63NdhvFbAqGAJt58YofVbL4rb7snXCdKSFr7JgmRarDXhc",
  "key21": "2oqYuUUGmu2htjH8g4oy6mq4sjRonZLGbqyJaGnzXQyKp51z5iyJ7hrzCVNpZmUjfMqwu4Bbi695FB3NFkZDCuJ9",
  "key22": "5BskXu1KSgqbjYamyQdZAw5Z279QwVmR6bdW7UZ3FqXUsLBXrj6jhQqcsgUKJUvP6qg5C18zim56m4KqeB2udtNi",
  "key23": "2CjQP188RmUUShDdNVHVuvTvk7N7NE1hxpWygA38ZRTUfHuJvMpYgE6KVSMRbii5NT3rkt9nnG4YiQuGaUTWE6Jj",
  "key24": "3otj3Nucw6Vod2vjEEiCwwf8imezbafkSwEctXovdS2D7kUjXj29kCBiLmJfhfXevBm8XaDNkyiBuCjhRC7f87BD",
  "key25": "2SEkMnc2rPAwyYZaMWeKz6iDaJBtPVc1M8QAdZsssA5viXLEy5WzuXCtd1BChWwckP8zAaLv1FKAtkio53FRM55v",
  "key26": "TwdeCahJ8CqgmxNRNcXj6wGpsfd67W1MmDiQsptdkBRLawCvsukcMNrDDnGrqpL6ww7Kbmji3D7rcASqWFriwMS",
  "key27": "cDez8WZinvGyftY79X7RKFSWfLQYEQTeJDCb1PNv9yryzQgPt4LCVd2kUJE1ohk9QRQEMUZdod4gw5UqwPw2Vjh",
  "key28": "3FshiDNMwqU4nHhxun4DhRCsihxVotZxZLSTUUM9HQDbvtAyRUJDNMjjWa6gPK1tRScZQrgTfqbYTaGNj3p8Nn5r",
  "key29": "rAqp6A3fKQbjKyuSUoKeFtxP2LMJhrXNx4GsQ6qWYWKjZgRt5xqEkARTuP7vRd8W2nY9CPstabAyaZK9u3rLQz2",
  "key30": "3oCNg8RuYjSBDF1QDdNNTr42fWdybCTRgeknxsKvyBgzNSnsY4vEKQ3Xv5GRqB62HFRjYNdyQ4VNYrGs9Qzrv5Qe",
  "key31": "2tEjc4wmtgWS5XPFvY9N53mxpE2QapqqszZmeSmkRSPqwBn1JDXtdhw3c4T2L38LPvAU3Rgz8D6JRY8Jnu65z15c",
  "key32": "4ZihiuYNHrRCuHaCtf5t8vJAVPoAk3ELDvejKfFjNj4ipvmvX4W1djhGED4kKMwgLe3zvKJDHDamjrnBP3hNSHtn",
  "key33": "J5jbCs7XjzpoG54qHw3cMAKSKdYD7hZsJJQQQAHtPtsRGN9E64Pyw5VGrwhzmNQTxzsqwPonBJB4oyzfcjPYtiy",
  "key34": "5wjUhQKY5QREgAXL59ndjRG27u1iYAD9x4NGppCCep7HpxsMKyKPDoCxxnyVnGamZqJSunpxFLCRcpmMiFtSDNaX",
  "key35": "3A1Q6mVgXAcHEUmbjg9WvuoyRbbQnwsuRosYpyCVTW4kUAgDFd7ECHAUQDFApKKbHuz9kAdspswYXvLxAC3mgAM2",
  "key36": "3tqmhZpeCYXp8SYfnrmYRWozjhw6Zt7v2G3x6FJSzjrgodJXpqv4qDDURauye4ReQXEeywCMzRgQv8CWhUntVt7d",
  "key37": "34sdTZUNZkqDnbdp4Ywh9k4W16j93ihHu9pUz3wMEHn9sSKG2dY5Bxw9F7ocFuERRP8sFDUP16scD1PTFF3tBptZ",
  "key38": "2WppHoMRM3aXA9gaT65Hux7qBN1izUzTK3ByD8swuD91XgFF5ZLFTwM7o5cvRpqRgJvCtJ1LgGavP9xWUcCPw2GY"
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
