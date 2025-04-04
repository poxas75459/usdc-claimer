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
    "4KQm7ShhmbhiRvt7SSMfbPoJt5Nc2Qbtw5o1pEVSQGGH9MD7fyKejQ9AffFccHptfKvQvDNKySNepkJSQdhg7h7q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s45hegkxLUvHF4ihkizXfD1cSkDqcgkrUKrbY9uqXYGKxwJVD18b5Bbkg7DMYJWqtYHJFEe7zgduWqRCany9Xb6",
  "key1": "49MpNRnuQdrxCbdrfvzQhSdsyGiRLQGbW2HKt6BXYyg2fLW4MJCVvxMuKxTvyd1eWZM1gzH6DQdhN4kpVF6w4zad",
  "key2": "3ePTUSG311ZQwPLqpvkw93ZJESLEAxfw24hdbuWz4uw8vARh7a7FHjq4doixLq37oz1peKAPPJDSWZZGAo4j37sh",
  "key3": "2L7ejGYUMJfRsxwPPE2fzra21tpz9aKnbT4G9ZeUJWxaTfiZwyKSn4hyw8MFBMuvTN91idx8yoTS1jGYBWDMwc2Z",
  "key4": "2C5VFNeG21Xn2wCrMeYsQkhCdugHyhYXC1wNynoKqNbgsdP7CHHMHinH72sM15N8T9qb8cULLU6QmJTEmsB3dSfX",
  "key5": "5M4skWXxYF2f2vBPPZ4XMocX9ZfniyhK8rgfBedit6wLKyM1Pdh9hzxhMd3PzStADGTHf93EDDbtNJGkXBUgCX9v",
  "key6": "3kqDdusY4kmhwy1ftZxwJxEQrGoFuBhJfzBDjha6E5XnxYpUFdS9zQ69mzVP9jttViUhZ9aFc6uAxy2Do27BbRAQ",
  "key7": "5DeJaYTscYoFrpS3oTPqXPJM3Pxc2k6Gw3qh2diJe4NzJuayUAYLCBWjUaSLAjmfCqL1fWiEP6viStYABHnxUC8v",
  "key8": "2TAvix7KdVo9YwDxeH9DbgZNLLsbS6QAWGsKgfygyjUYSHNSJu1i23tibbssgUS3DPTTkvxAk4iPpPu8bAg837tR",
  "key9": "5FsuiiMqW7m4YobK7A5Dt7bkAE3PhvQJvZWd742Nr15xnSnFRBjQnXVgoFoAsyHu5E2uAMJHEMYd4SjAKnKs5GnL",
  "key10": "4sHM2adrBsMA9ifbQj6PSrNYRtgQqpNaMTkrueTAHLPA9W9G91DTFZbhVK98bsEyLpbcB8J1xGu9L5LbPPS8QZCm",
  "key11": "4LfpCYKaGR9Bpy2E2HQWWA1fwyKTSXJeky5a1Wy5a6HrF49v8nTdKkP2MqA1EbzuQTBSaT7dJj1v8J7TETtErDhx",
  "key12": "54543dSZt8hAjAcDw9ZBWYr5dZZU6f6RmCfRRTE1XkAjhREwawXGVEBeD5GGkPg9FLSeuWz9qp6DeUQmbG7CEjF1",
  "key13": "4Xco9tCt1m4bA68PNAvCmxDrDuPP4cCxgACaCZjhTUMGfgdon3MDwV1VB36BB1GRzwGjUeZzjn2QzjNujHbN7oQg",
  "key14": "8C5EpejN1MxNFT3EYckbCgU8YEDHqLNLNc41LyX8hQygpthtcySAw6UUedPhgR9ci1MA1KFtaZoNRY8WjaihdDE",
  "key15": "3USChEoaEcSoyhQm5AJkyGVkN6PrLyM3chX8saR6nGY57No3RU8rrdH38rJTjauU7ufuD9P9t6q5hq4X75QPyK9z",
  "key16": "YdLTy2q4SnT5YgkRMDmCtxgV4o9XmGNGY8cHUxS6pLgyJLh4vYBBFkL4ejP7nyJXmUuebmk1KVTZYnfXC2Qbikd",
  "key17": "4vKHs3Xkuk6aMZuomwX8szfaYAZcLJg2F5whkovGqoAmREkPJVewgjLG3H2TRHFU38bJDK7v2hpLy18cmfccL2D7",
  "key18": "2yJDZED6YA8zd1h2QH8eNH4SvUrz52z9gPCNVhn8m187xP6jRFSUmHyJ1r1UVV1QEb3pdrV5QfX3zAy2mQiWLcC1",
  "key19": "3cx8mdjpz55cmRRFGr2yxXDEBMUufmTQs9GEW4AiSu9NpXcC3veAiu1wPC6c25t7hfQkaatoTsxqR7cCWGrJ4kiK",
  "key20": "DrojKFxmMvLYxwttL1e2yCbsABd5iycCj8TiqgguRWBBWytSmasnKJR2L35A3cQrwnBT8BxUCbApBRLySw2AfwA",
  "key21": "5EZsoeA9V98f7KuQ7Cg6yTRPQbxwzCz2BQABcnZqwLJmNevKk2YxMbL1kj9nWBWCqQbdwaiBfvX2vFnBmPZ8dgxZ",
  "key22": "4KmUjNhiUM9KCBgqM3pVmXf2zoGPbPRQroNixirEJuzHfx8J5gVKMAE1aZPpyWk7DfoM4tRsvAzpToo6RfuUP8s4",
  "key23": "3rYLWy35pPkX6QNgiT3PXVG5MRFvKDQGY2KRHFLyVMP3VDmR5XFxK4xsxB4vtYiux9XN9QJLyFtfBvGkXApWexPr",
  "key24": "41pwJvCe4vtWaewuAHuG7puQ6ucPeCxBetRHDhH5LTe2asxr9QBJinohtDFRPiAXNZKGT6m2W7uLzJvHmFBTBZdw",
  "key25": "5bqcKtsKsEZu6ZKCpHgXxBGQdcV8ELL2g1uoiKHt9p6GpRfEZYjQnm69WUUaBm1ouD11UtP4B2hM8a9t45VxDWAG",
  "key26": "5Vpm4Fcdss7RHd65kLzWM6AYqWnMQt3R1X7ePw2BL9npHdm1K2Efifs5ga2Phfhavxqoa5kHCktBCJJRUcvtUTu3",
  "key27": "35Gu4WL8zHR3Gm87XNS1TLimJ7yctdynPVDPKjcDnxHhuKQjc6YZHKADhGXu84E4Jjgtq8hiRU6FxSQSYqcc2mhF",
  "key28": "cApT21aJos6mrfxZe48kEsntRqZskTr9nWMK1aHXiXH5WNT5D6DgBtA8r9GEk55QtmdyPh5nJvAtH9pfA1Ys4xk",
  "key29": "49kcmHp2FmnZSB1ZsUPgDe1pTb2ymxeaRNGwMgm1bqkcFtomjEirkFZMZVNZhEEUYayUt9kmH9zEZzuyQMqzhtxv",
  "key30": "5UUMrPsqKBtTyFJfwDen9GCSvc862r9Qy12BHME2WyFy7PEY7muC8EqNQSk2abLf6pLvHoEZsaZrGEzQFuGAzWGv",
  "key31": "sSYq2Kxy5KHKt9eLAD5auny3Z9J7JceYrpR1ymu7ZjWX31czPyWAhjSNtuFkCN7dzE6qcgzz2Q1Wr1ziRPAG6CZ",
  "key32": "3Nbm13Ztarn9wNfLcBKkuuAHnvjkVJ94UdKW9Dg7M7r2yqEvYjTFKJXomJxuJKAahAdgs5uwz5s52mSr3cnupxM",
  "key33": "3Qaj5Jq2qiTW9y5g9xPE4mnXgukFHNMZpNzNNZewDeRQh4PKRbvjrCWtUYdaBaEgpBnXhR7anhEULySvUqeJb5jY",
  "key34": "27Rf3PxKk1o6F8WzA4GZB69XBsBFcDCZiSY2PFBN7g7kwSNHQNKeiJ31R1aET6p3pmJouSWgXm4gyszBYFKkSXPa",
  "key35": "J6Q3aQA8uNduo7rAKyUViaZ1R5KyT4A2L1ehsAJJGRYBZF4rVcVWRHkAswWjwcsJYHMctByC32mTVBXZ4E1Kozs",
  "key36": "4ojVyf3koaZmdVmbi1QVqyEtQDFDwQurSAtwZhKR3RbGj7JtarnT14upJw5A75ChHMYkTPh851EQnCsDiL6wSQUN"
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
