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
    "5E3UjWonXjuJBuMSZefmARoNCSDjqPF4BEFJppUreA6YSjJqJG1RLiK3cFsgjBKrJ4Svrp6kBQCdKZgCAPpcnE2p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b2t8G3pE2Dq1rv7SZfCAWkZiX8Xr6HDKnmo54XYDQe4HG5AFybKCpbYWezvxyo9v34Lo7MNuHJ2HWEfm7ePmTjT",
  "key1": "2BgoWSavG83gaB5epbZbFuKDuLbAdNqGfx1HDCYJxNdnb5YNE1W9Hd7qpeGzMYTJCzuX3agL2iqQs3EqcYcFCfpB",
  "key2": "QSkdn1nM7pKga7s4AUCBoEksyMy11piEd9V3KrtedMxcKFehEmHgc3dM3KzPR9CdUNeBiufb6M8TMEVW67a7V71",
  "key3": "2gjVAbvAKoZvuP6UVGV4ad9gZfsZQyxfNJef2nRV55PRjwtSwQBQUWiKyYkydNnUbddRvfGuip8xtcoqTZxSaesR",
  "key4": "4wxopwHi1ZejJM9btXd67QPQvh5uCbKTs3fkbas541YgVV7peKrU6Dzqn4dP3uaJbLsdbta4o5an47QpvanGU9Qc",
  "key5": "49yH2UufzxaVgTatXtSeMwNH5gCmQrb6kfEAH67jt9gGz2Cgsqtyt77wpzhH7eFBaPGg6Fm1UN3XfyExzpRfShry",
  "key6": "3pQoGg2Uudee5nuHBqNpvT5RgK7Fftkx6fpWbBUPajVFgAf8tZBzZzYRVV6TbMQuXX5Kwrc8TeZe3gsuCEAkNUH",
  "key7": "4k8XYvnMXdDz9AZMMmTVGPsKSep8LtUQBpSnwawZMXR98JGXiREUiSdHakCCP587v9Kwe433Jjopb8fj9NUhSBmL",
  "key8": "5tt3rWbdKw48KEcotyiCB7cw8q3y8cK36BrTrLBmM1zFSe4c39MMhLed92jWk3QgbRVGrwkKkgLSXXBAp6JfLT8C",
  "key9": "4LDiLfmwFbLLNLZoDJZh5doRwJDoR4ekBdLtgodjTpGmVKB3BUwKU8ShJwsha7YhN9tnKjYFkHCkqW4RRKHBgL5M",
  "key10": "5d5JpkTSkxhByVs58uQDjTEJrdxJPXTCxEtjTUTUvz7tT3R9hhhR3c15iFvSrXUxksqkLfsxq7Lhmv2FgdJJtL11",
  "key11": "3j6tSW3XxntUTb489xEJhHxLhabMB5VVkZZpSC8u4vnYb9DCF3RRXTNRqXMpsZXzifomDXeb8ZqWr849oJLPgUpi",
  "key12": "2nsC3ZtqmDzxMR12L7UEh25EosA64gATM3FqQEm7tX6tmEuSvmNd3Emd2Pho9JScQWoXqmMzUtDBbjqZF3bfaA3h",
  "key13": "4d4iS8wwVqg5HDPtNK6BvsnbBR9eyTwBncAXxU42uDkidgop7r4iUbdUgS2WBo348NYqnSPa1tgLraYwzxqMuy4k",
  "key14": "47nKFzichqV4HpzN5ensXSaKfqtQLVYGoP6x4CRfbAW6qcJwuauEDWf1otE9AaVE3igYVibProKgvT9jBMnfdvmN",
  "key15": "4TUeW42zWRurHuVUyw8cqJwyp4sHpLLzrwa5JbNnPmTDmdD4fLDxXkQtp3hRefisV735NuczsCYeMgLJyiGrWDNm",
  "key16": "2MiQizJRG2AY9vJZzd2BHE93tNUxHssaHpRKQqspDGWQC1NK6cM13WTSUYBK5JPxs5xGeUZm9DmUCtMcDBVszo6G",
  "key17": "3LXDb2dgaY1wkgHCJPCyyPDxstWffbM8LhGZKKaLgjCCrRCDcZwFanSq6vzbLrmmVF2bRh3zUtB5fQ36TXThaBxH",
  "key18": "4JuNoKebx3er6xCCiZhk4nKEPDXbzz2drLLEnUvV9ivGAoFfhCh37a2kNa2CyxZLQiSjyJGtJy7cZ3mQhZLk5efZ",
  "key19": "59npq4fY8eaDnsudfN4j2tKYdK1JxqKRng5Fm3rQUd3zLcXF85HWsN3LkWvChTbAhmybQhn8oacKJGfHuakxBFGL",
  "key20": "WYMu6A45wEiezn1duk72of3SadzR8qsGTiLFgEV1VFSPeNo2azLe1xfAxvaR1M4ZEf2pJsR2gSrP3JvstZmuaYE",
  "key21": "4YjwwE83fmwc2aXK6smnfRjpDbMEQFnvMKj3N1UbmqLYrMSn7r2aoSKMjQUrcDw4R4H1RFd6Thp9UHA4Un5BjTnN",
  "key22": "3MvYZFFVacj6S5X7RBmq2pAM5z2GJ2Hs3CLrYbDURPTAuDNx7b1xgasFJj4gGChcBgfw93xFkBwrEXCZHFRXQfWi",
  "key23": "5tuZMJMKiAoFPE6L7dXy6pGo38q59eqx6fipGYafwuqC7oBtm2ykou7RewyR2CMqKTysSo5gyeKG8ThSzHdmXikz",
  "key24": "25sSD4HtnSyTDc4EVUhZ9QB86WwTdSyRSUEDXhAMeXujCYSPUkxyZqZ2Xa3x8exeg5zWm95buwpoTv5tUk5R3Wqr",
  "key25": "5d8LGWXLK48LFqMxsq7BtTTrNaZ5FKyCXt2CUBha98BmagjLepsuJa5epWYZYzC43XnNMoAwRpqZDMNTMyaxi5qV",
  "key26": "yAhqe8G6opa5DmN2B2r9Mma8WgM3aaFpNceeAN1aq192W9gTtEUYyD1uHHBgnVQmdm9pBG4HYvgCRRVgmKndzPL",
  "key27": "2pMN6aK9Q7mXvVaXHd4tcwo92WuEHx4E4VimpQTSPj9mBRyn94b2wo5quefaCWJ6qYd3bgX1wjD8oetv734o5t9W",
  "key28": "5sA2fC4VqKek7Bk7Bp3rLFDb468VHPsZLHiRXtCWJ9xJqzfaynsqi8pbkzyaUFv4q8GSAyWJhxDK8mENrZ9mr4yr",
  "key29": "3y7YH4BDREo26K2sBKpdvEAoh7VUyD7Yn1D3Cs9c8veKDaNbj5mDbqmx8cjsK2QGLwRYwkdwxDnan1idoZrPiQ2B",
  "key30": "5XWLHyrYA6URh467YKQXy4FmqhF5CnViduMPe8JYNwQ5vLsXwcS2kFo216eCjB3zaoLzB88JBSMjxP5X17QXkb6w",
  "key31": "C4Dro78Luq91jB1yHcbR6H2FgbYLJHSyAGCNpD9jyxwPjx14VRHbcmAYjwoaYYKDYpAQHeAaTW3e6f1NASYMNyh",
  "key32": "59mDjhjUc4pHRjH272gHfzXEHU3Vdz9osqsPxVgnSy2UFBJxPWbX1Dc9441touL86eBiT1Pb2FmxmXxYt8NZTAa2",
  "key33": "bARnmeojdV71xZWsyKSzUzDJe8gXcnA4vU9vyr77fAFUL4JYQmVtQgRpB9fR1dt8FnV4LvSMMdKs6QiL9Lcz9oQ"
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
