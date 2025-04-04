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
    "5Yzm94tWL4RW2ciSBDFGrxvmE6VV4fgJXfcgrtFJZgC2Ed2GVio6haMwqAg6kJr9TUUpU9fnS1kxnVigb9Xcycv4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "671mWZK7VajT2MVbqBaQPwfShdLaYbpk3TqGeW5CuVTjpBU1rQ37NDJrP6VV66AzWcu4HvqSg7rE6bv3VVyFZqmK",
  "key1": "5JmP4n7bKTUcSUahRVqGVJWC8M74VZn47muJFX9vPbCsSrfKXV6yAHKjicZMhUxZ1N3k9GPRDscLKVCCjhf6VaQj",
  "key2": "2khrPGg2pt1BgJKK7Xd2851S1Lcu32DZxdoE6ZeuxSVukENRJBizmiTxZVhK3GoLa2VAJFrUVn2NGZ9jLuJco84Q",
  "key3": "223eKhuWNxuXDBfA2zA9hwNGPG8H45fLSaQuRCAuCjPQuMGNQ7fuLr8c4cjc9E9A4qgztq1oahwKGk8MWhS82Gt6",
  "key4": "s4inkyMfopze5J2Zz7HhC1BhgjsNLxktebRrQmoFGj6GT6VqnztuNntWrpZcHnFXTN4ACQ2197VFx8Rf51QCLm8",
  "key5": "5SBzkmwQYbJqgKbxFmEZgrRycn2GbZvWSf8VMFgxz8akT4MakyChDySs3qNVopWuwoob1eV6wQBvh9LmBneHp748",
  "key6": "5jHe16WHaZo8AmhBd87hL27MjAF4jwz1cgMk9V9GVEYe8YTEfo88cHugbtu5tukMbEHrs6gzynpCCutg4Zx7FVBW",
  "key7": "4Y4TxnnYmNMgKhWwwt6yfUJghBPDt3Y8uVf7oGp6VgpJiYcLtm22q4LKpsxYCoLkaDWfURvfsGbeTqXge47KbD53",
  "key8": "5GymZs9sSaQYFTcyqPRnH17bHyPfG5V7Am6xGa5AEQvnYP1ZUKsrJ3aN1FkUHV3zbmaCHAaUDY2RZrnmCFKg8B26",
  "key9": "2BxihyeDjFfmPiE1nKrSJgG6wwPRPr77DLL8QbMUVLnebtRmxjUEi7T9BwLSqx984coj31NH3ydcNbZnsYvXXk6d",
  "key10": "2cRq6r4YaiPZBiNfBLCJcVH86nWcdfB5dSkZJ7tRonKMtbLnyhywhjzo5xp3k9GK5hC1qGsRQTRfPGLonPSKSBCC",
  "key11": "6WrxxzqqCho1rFUcBBo8r9GysWX2JSoKrswuCyg7dM4kXMpFaWe6bzynZC3EudyVhsrMEWFvWro7c2p8BcFZA2A",
  "key12": "2NMfYN42L1t6NewBUx3vqYDCE1AmNrJtKJBCu4ofy4S1c2PAXgJWC7Sa48bhXLcVicR8C2Av9kofUjA8kmATBwEf",
  "key13": "MoiSGRbjarFFQJQyXRk3XhUmn4oRaF3Wg57nUakPhZFjambDujyS2iS8LBAa9W9foCw6tZsPtGiwQ4nVKWvzDzj",
  "key14": "5RXkfExEpy6R6N9q9k9fk5G8ZAUQA1kM9wtmozFUnYaZHF7wCEanp8cJka4kEUtYcy7wsL6iyXpWQ4Nai1EvidQU",
  "key15": "4SkDNsY7YpexzstNcWa7MjbD5Qm6RHSvs7YhYEzRAhUuUWZq4otjVc4giB7xPPvczXso7L2FRTkjg9Qvu1FgyY6",
  "key16": "588Wi5epozcYQRyahyWQucePTdk511mmZ7rbvdL41SgRyMGAWm1EQhrLKLTgJAXntux1EsHbcdU7EXcuvogGtL9M",
  "key17": "3Q1zWNw9k4erveMEq1qcEsf426LQf8TKQ2wD7EEUHqqqYLqugUj5JedBa1yMPZrYKKpSSUPgqykKvnVjvoRjPNRc",
  "key18": "4RCST3ADMQTSTursoW1aAyG5bMNNzkma1FsgMn2vrkkku5yRf9busPramkPNmDtwTabiknYTko5ivvkh4cyHSJxc",
  "key19": "uG2o8gMYJxuEKwHzfL5RoZCNjnV5apxSGTVLmsCeP8Prxq1pwRavr3mgrB11aP1VnSUmUQVxuSZcDEWCCDh4LkD",
  "key20": "2K8mgYja3i2CKA6L1BAkWRC48HiSW4uWzCn21zXw6er9yXqsZkMpLVKEyd7mPkVUZAxBsBghGSyjkTBkNNAyq9zw",
  "key21": "2d163uvqjqFBfdUmHSi3Q8wFfxAKxnVtczKXpxe9K7CguqxcrgKDshJMEMCiazzZeWwiAEiNLrHKpJYUAXw2LmAM",
  "key22": "3NFXVwgUcT4j5hVzfftQbJrZSSQaoWPv8BRbcZF1wQ4bGUPQU5uPjky99MArVUJP9kTFvmqRc63LXkpSV7Zavp6X",
  "key23": "4rrKmYwiKdTGDWeTriaa3CxUZ3qxcoShZzfkouw5qdhtMSp6yD5KkyBbpMfA6VNUzJ4xUBTT9M2aggfeeUKSUEVj",
  "key24": "5CjxoWKYkqjQpugm7yfooKMpBBgvAbgmVVnmrssEuofTX9imXCbaYCd19oQQZHZh4uwVeHBuxa3JiGxukyG7VtB5",
  "key25": "9VCjD5t115CxkQxQdfZn3RVPB2ztbd7Ksy95JjLf9Y4o3uW5ZQwtJkAF1YBaXdkAm6oX7XymsjyK2yjrMqcEKJF",
  "key26": "3DFqBb3XMQc8pY5dWkdTvuYQ6qYvErnMVF4obXv3EiECN9unarmDgbzSLtAvmGtzEQFYvRvwDF4rRqFWNjo33Hgd",
  "key27": "49Z3QqWsjRGMc3C32KDMNRXYRQB5Ps28DarK3UzLYJP4eBdRHs2qDfh15sj9D1uz9SPTx9gA5JSNENrjrTgTu7Vo",
  "key28": "23FCRwbEBVMYBEQbVtyw9uACsJH7r8qmPLUhswdLbs2bSzmhQ1s74j7F3cDi8XiJMuFPH1sTSV1RSLxJEMaqeKBX",
  "key29": "5X3dFV2KqH7fEFQNBWAExYvBCUBbrEeEGm2sBrwHdU5SHPTvHhK7fYbdZHMwq7UXXagf7GaXfe1joQF717Zs7c9U",
  "key30": "VcZfYx1XxtRPGhbAs2umkuyt5Kxdm1ntuqKuu2yHNzjji53aySDLqYHVUxd9ap9Nu4uctVcTU64s94geJfTc5yR",
  "key31": "25RGFqzDroUd1wsCG5kCvBxEXCMaLRitVLdCcX7DspZ7L17N5v6SzX2QSprGfAzEmchyTohmUo2awZ9tzkvq8m5a",
  "key32": "5J2BvHhgWATs6EEMfCc9muzL1pRRwGQjPV43MdXLksxJwgmtr5i9DyhZdtu76XdxHD9zjaY1ohCZU8XJqzt1afxa",
  "key33": "VG4QQv6NhJ3YgeBByLaK8yuzJtxZB35nmTVSegeMKm1oZ2YFXe5nqRek9PvCixGNuRhrgG8LeEdvqiiETkbExhv",
  "key34": "3kcf43xWAMLWhBwSTdeKLUBk6NQvC5Bvx3ez71ncL8WNdfQReNro7rrXG5bJngZ3FSePsr4Vvt2AMyPomaA9GFX8",
  "key35": "4MSo9dd4qZfard6G3w8jn2u69htB69sUu7Bmq1gmVrEgExqZS76jdqmv1W5E4YZDnXi2moHTa5ZjJPxntuzAhNvv",
  "key36": "A5AArmejzzpAGQFyqdSYppq7zw8p3hRRwG1ZRczrWH6wM9ud9nozaZK2zaVmc6ota6LA8dabejpLw9ef81hAYUd",
  "key37": "55VDqmYW2BWSQCzQ3SLzacN3A2EYC2FypvqEpideuJ2FpNEShvwz24ZqonECLa6nfrz7wY4WNrEtkmfTZh11zAKQ",
  "key38": "2o9uuGmajVkcMEvffLDBpfcN3zg2JZQfhsZ4w51Qm6jNiuPdC6k8CgyL9Y2tnRw2ZgxNopJ3Rx7Gy2bfAy8TRLdo",
  "key39": "2pFXu4iNTvoQh7Wyr8SUvcYWNVM6dgNuMAMftzGQ4Trsi1HfRPR1psZzFEYC7uM3t7PaG3RR9Pin6Uzb9Q3Qo6hp",
  "key40": "hY73DVh755hrepfuUzWmcpu3AEAfXuDTqP1ByuzLjRSnXiGyHiMhWzPpfym5ZVn52yTtjjmwe8ux3TvmkGqg3dK",
  "key41": "5ybVxMxhnauUf1ydPjMCqQzkLuBscj4kW4NyQiCnn1FMz58y63MukP46Vr2odxwPuvTHzBEoyGviWAaG1MSA6JdW",
  "key42": "2Y8tDc7YD1K5LUnuVNy8CdN2VJkqaYNDUFv7Sff647kEmLg6zqEtthampqZQz7Ya1KFavYUjpn5tDWmkQGpPniLV",
  "key43": "5tNoiYmapfr7WhmuSJ6R7Bu67kjA8JSnqXxU5hoQmf26xcUT5H8pqbSYUmfjEQrD5M7HmepkaTU59mAGrx3NaGLE",
  "key44": "3nxYDHoyK1gqPGfUuNVyThfsit1L3ggBcX9drAw81T8DLULqRfw9kY3ESmsbmUfYfJ5KnHQmmfgxC4R797e6x9hm",
  "key45": "RZ33A9sAQWpwYEuWwQu1tAUQnY359hAnE8VS6wiTkwmVmBheW1XuBHRvzWwbR1hdAt6nnPzwWvg6mRiGJvi3wVZ"
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
