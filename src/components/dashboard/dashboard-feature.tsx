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
    "34dwd4dwhhCH1k2muqx7hAiKSRA9uj7kWkhyZMrs5cKdcM3QtNxLMhwyae4s99JqaXjxpYQbbrN1bfYFiWG2q2fm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZUa8igZ95oPzPqJniQgv1vKPuDRimCUkc9b3QNs9rWdFB7SL656jbkwjSiCkwV8C5fsDPDZrPWsdXcNYByzPdKq",
  "key1": "2gjYcsHqVVsio5wVHVrCsFyCqjyNfvyyYRswFogUUmVmhPX2c1dXLozXwSFcY25X32gJ61rB67MiHjSvGY7XatxF",
  "key2": "65GhDwNg6bLHSKPTe5VG9ZGbyLMj9Ee3QwxZBTcFHWampo6k72GHWoDV53CLYNttLLw3sYY6eKbVByqqURQKLAKa",
  "key3": "41aH2zrSEmSAMNwQep4WfmUyBWKM3ZAfY5W5cjVfTMgFUwrFaD5qMUDAsXugwbLyfEbHhFxfAo5uehSoywStzHAW",
  "key4": "2ovH1j7iBrC56k25LBDAFw61qvi29mMnrrhpSKfvbvEacxv7FNRrbxM8UHXw7MQ4LBDJcnVxG8SaG9hGJXQc3cn7",
  "key5": "5QXEQjV9FZk5F7awhTn6irUhh24tTDF1mSpUSPEyqauzgnzPJhSfMSSDd1XAw8uf4HVkB3Q8Q8vWDWo7fegnC8B1",
  "key6": "3jEqz59t8iymDQzg7kyuUiGFDB61gyxkR7zuNS44F1kcdi8ry4ZonsM6LDuP6tykmjqP3DhtvW4jguz2QQwTNuxE",
  "key7": "nvKbaREeSz63JM8i7NzhNeu4kH3pg5UkRa6vsrWrDdrPmWwBPA2eANSqcNbJaxgNAgLsH5wERLww9fUE73pNRrw",
  "key8": "Qfvu5k3WfMzcmLatK4cqirZLZ24vgoHj7JzJCTdmGechArGirTCZf3SqHGxp9u1CubdrgcrvTxneZP1fb1kLYor",
  "key9": "2LmzbVsWtAqMjJE9KwMXFF5FzhqQt81WP2iAh2oq4bxCeMwUMtTEWbvN3ZudiczFnEdHxbC1PCCjjzzZ8iN7GQY8",
  "key10": "5u8gFVrfpqXAA49UnFbQheX2WJ1hKmUySGTRxDhqRgYWN437W4cZVwSBvd4S3KTtiZarVLiPeu2eLfJeucSRPPQ6",
  "key11": "2FnYoxPcswigeWYnrhYdHr4oPBAUBqmCzDdqZexCfaETnv96Q7NXwMkjoRWMvpm4L9X69wKXhY5Fw91SsWRUvZHF",
  "key12": "61tqz85a4rYfN3fQnEfc7bDx74EMAieuPSpnicuUXVRfVuQeUcPn661wUPZxHVMpH9KkzkXNwH5jtZj5cm15HAct",
  "key13": "4usghn1EveZmfDxGw4bbcmghdKgwKfU6pi2pe6ni1Z2R1J8LPsDxSmUvQtpNMx6YTR3TmSBj7s1acWAvUcMAc5zQ",
  "key14": "5MfUwFEjqrs1TfRH8EcS9tL2MhHpCebauY3RCugRdyGb1LJQFKzHBwyqdKqWRXutZDAojh9LnNckch9dAkZVZY6F",
  "key15": "dNZnhmZy5whNfoy7EsCWnD6nkPbkduqWYzGq8uVJvGqCFtSs3EY4cX81gixnCbQubSU4H9vkh7EjhE7uzKro1A1",
  "key16": "3Vn3zjnPvKLmkqWyHnBDdYTaxWiN8Wny5CJL1iH2vHJAqyq5fGXTehDaipkqCQtSkTLS75CFtVWkJQrKzUHsgka1",
  "key17": "51dvfAij1A22PkWaPy8C23ue3PVt8ac7NSxLKZMHujyV8HqZGCbLQga8Nmo7bqGDkyq9SuydYxbfgc3ftmXVXMJx",
  "key18": "ptjEavATfepRjZhBwMWk9VztbgWvWiHpKtczqGiJobmAaoDawsVc8dmLiqCCVK4xAETDrPVAovMk4BSeVaBVGfS",
  "key19": "bTifZoQFn1fpwxTQg2ZauQkxUHNosReG9Ft9aTSt8rrx4zPKbHYFhDhBib17581q6N37fhtymN7M45TEbyQd5LH",
  "key20": "et5Ao6Zg9uLtoEFS9k23VrwFoXgcuhrVX8cJgouJszBLrBVcjEvyPLQKEr2VSNJz5bbf1WKnRGdx2exzmLNXcQ9",
  "key21": "27KpbsazPnGfEFuYx42LoLDYLMeBaBvP5Uaj6wkWZbeRd37VmsShHNFpcUk12XiXfrTXSr5q3zgqExeCSJfuBVSv",
  "key22": "WZAD5ArYZG9rZRU4WuXiv3wTVGJaD4hWNHcN2qcbNNhFj548AgxLDmAP5EMYjhopf5EghVQQPbGthHLeT8kpRyp",
  "key23": "3wSgFmbaC59Y8NM62ZocZqxndXb3hyaeQxHaKds1VHdS1cBQC176BCRt7ujuHfcfZ7Np3tvd32Z1mc8fggzt4LdX",
  "key24": "4ZJEdjHeoomHPktE5HZcEPyPwNq2qxxwAkdN7FA5b1QMTKgQASBoFW6sZVBkYUQaBZfP1Logsdz42BZzhY3yogmz",
  "key25": "4VJRFRZJa64KUk1P24bAc7FcENd9zrvARtLd2kdDsErwzsqwxeN4SvdsCiNMG7jgvBghqzRuhVwdMQSZvhujYCgg",
  "key26": "35P1EKrnvb5jhnbVTB6LZWMyAEVhM3PTcYdX1PgVFt4gJ6UqPYWoWhiobwWizYi58GAs5Vu9FNYzmjMNwM7EtxF1",
  "key27": "G5KfSG64mRC7i15nF9hZ2AywWckSiUtxuqmsumskJE76pZqPqwZCTruiMAq1gUGUGpXHCrvRegP8Rp1rCHJ8RGr",
  "key28": "4QCGMDj22awzMAZfixW74doWdbBWhBTpBLHLFxXWtHpbqhs2oH3GTuNCwHUPLwZWNiEX6feq2DViJbPe9NcFPCdL",
  "key29": "aLX38Edq4SgzJgNkMGzygnTSxRk5HXz7QewdFVpoeyP9zrh3BGBcEZ11dtEUtNC4iXSrHHx29RukUrhJqxyntEB",
  "key30": "2zTi2EUUKhydTd8z7o8jv6wNZsa8JZDB3cCkWUqwJQbencscrmo227X6Lxyz7hWnJn7ChMHUS8RBg5AvdoPMLM8h",
  "key31": "65HLZEYffTerhpLxn2USjzPhk5MfSj2gELGzgChu18GfF2JKRKo5mRvXNQqkvVTLE28432HMuG7XQHegGQMFS5K4",
  "key32": "4med9pVWhMkxvWsLKmu1dLKegwRZEKQyfgsnMBLYMNkXYPjCB19oR4C9f9o5yREZXYuocAFmNcQoRYw8kvM37FrR",
  "key33": "5BtCw6vr737CryY3SG9n2kutBuTvEbZ1Rk6BpfqgK7X6c4bb324DYC2vg9zyrD18i31k7yLdy7PQrd9sxq9y3Zni",
  "key34": "3p6LnCvZ9sLUsPh5XWiiUi5LZTrsHGftwPVEddvmTRM6Dm2MzFK6r9uWp56SEmDcu7caKpbfqno8uh78FxvbQPiV",
  "key35": "34BdBCkyMDk8y5SSaeRKG6qxkiGbMVyDmR1Qg6qnvbTHJ4BFs5Q634B18n5Q7rKaeJDVYJ9H7GLunne2PMa7DcdL",
  "key36": "2mo6FwECZsBLfoew55VJkbi7AbkXeWNyPtag1akYjYYEk4Qczg79jSoMVduGeMrVsov2PTra3JpbXGEUZyVE3gvj"
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
