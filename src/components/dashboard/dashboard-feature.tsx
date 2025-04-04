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
    "5mJRNjansWLKNz66bzynMJpeUh2b7qZEHtfbEwqWzcA3kFpRekCJJtpNotyAv3ywZgiuU1c1qo1hTUtSceY6WFsM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yFHHkF7CtE7cZ4TqJkKE55mkjedurh8qu3GCP3HpErUWcDV2gRqqMpXWDTGjiky3LJyRJoG2bGatruX48GHRpkN",
  "key1": "4NdNnFVWQprGnK4Wsx4v3TsFNEDCGkTFqzAkaDUBjRnoN1Y2LgRP93Lmy52UUyUKdWcV7rxhDaRi5m8otBKGnTKG",
  "key2": "2q27xKg6p2T5UMAccXeyz2LvRA5gKE348BeZw3Ba3apDXDVnATgPJXnDBPnTs2XqSaZDA7e3ewEHnNUiXkUPxUuT",
  "key3": "2PyDG5karSkMyHztYKr3weZkedEE5XgWJfHGBbNe4rPrKSDg54YedUpKCrGx7g8wmBXkCkk547DGECNwxvdnGSuc",
  "key4": "7rHTQrwX2maiJ7Dnqwe2WzxPPvqQoQ5SPkTUXBKVE56Qk2zpQgv74zj3z5fYVhhsjM9q9hiWkHuZvzxdGS48XZF",
  "key5": "qaLSAKtTs9D4zFgYCC9dJapKQ3msEibrDGy5fxSGYARUEKqERw9jqLfDGvwLN8dYgbwFee8Ffy3Ep3KGNbHphzD",
  "key6": "66hFWcvHmUvgcKGSHDB5kQCR5Fx1T8JrX1MTyns3eMSVxKYNd4yH1CJotcj899nYPxAnTRyp2HrLgvooW7U2YdXt",
  "key7": "3vdSB8V7UJfas6b74D5aLCUf7Yd2eGtsTMLzsFAqBrqCztCYTfQX9RtS7LdVzQjd2SekwJCoGNakTYyEQEBFtyBw",
  "key8": "3DoFEGoENFELCGYxSoZwXZFwZknvC1xs4j83UPbyRZDCkW32YC9u4SmGqzZzg8K79RtoX9aCCwe7QAEFhsp7HoGA",
  "key9": "2gYnSXo2YXnyKhQdQ1MDk1YbXVM7jrTZXqZTuXxK2ZMsDtNZin3gHgQQGktWUB6zxK5RrmBVAd4Vmd2G8gobTknM",
  "key10": "4WmCA5mJJBnfxwrcD1xWCp3hkFsJXx5LQeCEBq2B1Po7GGhC3qiYVtEABjt17agjfZ1yi2WSdrBavzx5SSj9hy3x",
  "key11": "2piPm9ShrqLGi5AFUv1PANtj73EMJBuHkbPa7B7ZgbbJKMuZe5myF9k373mMqVfP7xriDT2SWSMUrioY9wAmDWFJ",
  "key12": "5mopzRLcHcWvo2QHCP88tNSymZ4MZKAvSYcZsu8xDTCXu91PZiB7LdahyTZjKe2dF9iCZKfV7KZtXNKh9gkU4PU4",
  "key13": "wPxjsfT2Kzvz85SBJfUJ9PSKiTgsYuq8pdn1KffM1LmnshH65YiQBTz16fGwS5DqLNpvLJvyzpoSGZrK7J8Thka",
  "key14": "4VUaEQAQ11UoE2nFA5BVujRoYPMP8M7Xk7J6bvsTdJ3Nz2vWnWrsJfRw3vC4t53cfdTqbktJ5Z5gQHzVDpXyYBSp",
  "key15": "5m6SMn3WQhUHzDi4xbYgezGXzhCzU9ymnndvJKY9LEYvR458j2gE4zmN83HEkYugbGKQVsf8yLq9EKkHLuH1xLr3",
  "key16": "5FeZ9PEDYitVx1TTtakTcx2Zeh8xFFjQorqdNWjdtBweEA7H5WmUh9qQBT7jX63gEcfPWz7SbfnUNS9TuheLdsYx",
  "key17": "hzHg4WNPCC3i8YH53NeXFYKfkUqZXqvnXAoWdETsxQaVNezTDpEPatPvxrg6SBHVkqdRvxF6ghopgWjBUG4pTnK",
  "key18": "4WsLqPPnSaqhN8d7aUtH2rAox9e2V5E1SGguw4PqQPu7z9aXGTWzkG614VvHuAx4zDsmajxhe3JScbCtHVsTbxcf",
  "key19": "4zv6C2BvJWfJiVVM9mziP76Jv7ytmq1vM2bR5V7ihTPCZu1DfQqsbPEqCm2SyZEesXxMqnfMxC4BDdNQZGATDZZH",
  "key20": "4dqmEXcnESoNBBJccE4bW6gA5kib42NHjnEM6qBLkQoLNSiDRprJRHykD3gGVuxSuXckztkjENvUSywh6St5XaMh",
  "key21": "2DdpMUhe7jpVVrpHEcqW5eQ8do3WgaxWRdn3vHon5rrRu4Hm2Yrd9HERYudTiL4HZcAHHopXDEGwgMxtUd85cyRN",
  "key22": "L7i5WnrkBrcvz1kbcJzQH5TYm144CA9bPBP4DW6DTwo8Y5rWdasbCmXvwAgm4HQEV6ZYT4diSnCFyYBp3fxg9vE",
  "key23": "3r18qCWEW7AhC3VB8rwmkEdZLuqvkrFRNg8F3ETqfgrv3q1pkHLS3bn4fdffYpeQyos3pVTqcHHTgaAtdo4ovvtF",
  "key24": "2KTU9zrdh5gty1R8vasQRYip2rARHS2VedzteCtA5gDpMeTy37pKEb9XXRgekJeWPwXVZ5nJ122BL5DjS1Hnh7e4",
  "key25": "3yrn8BDpHBciif25MoHt2TnWssgZ9Z3XhAgTjMRaJSibZ3pcXeVrcy8Lj81sHCCgET4xbWfhe915Z6dFFR5pPBGj",
  "key26": "29R8bsKU8htt3v1KGATemG2WQFfznE7gpDRGM5xVJaeP5u2rYWVUmLBxYgCgKM5RKicdVqRvKKXamXDDH2YUXeqy",
  "key27": "3NV6kXVsuYEgM2J6X9m8qnt5jgBgcm2pj6hFVFsM8LKA6bsqCKMvFp5ySqejbq5WSMmkVKDvaMnuoeMtb84RaPa3",
  "key28": "7pDmkGBJ9c53nFuyBFEcDRK8StHQgoiFYN7rX2adjYZMY27PRjM8jAMgMWYiDwk35HtpYQ8KV7hW2MrYd6BZATm",
  "key29": "3Ua8BCcvumKhYpwGDytthqUTQmAfXLhvTL1k63dpCZ94BJCxc2PQCw1Ki2DYqKfZFgwTZzzMHMVbARRD4uWvhhBM",
  "key30": "2Pdg2c3guo8QSjBUX363jjY9V6Cqt8aGnLeyHAnwRewqBoWV2NpwS6B9xNm3KiLe6QLBT4Ky7PTQ1mS9FkReSmkE",
  "key31": "2LQZe1gDefCs9PqTTgxWf9qPoKwYnCsQg3SADmVRevdZCtQhPJnPn44mJkfvXMCZdqoDjWYx6zQo1Vss3pAD67dB",
  "key32": "4Qvr9tgBpRfK1PqCh2eaxU3V2fmvhUrtmKJyvcHXuvWMgY3yfNoX3s25yp1H6fC5GA2yXNmYcfFz4hEf6eRgDDAR",
  "key33": "32LsCH3uJU25z7oAe8GW2tjJTSNkMofyAianysr1BRqwUJ5tRtEfEZNt119AZPDny3F3En6A4Wiu6Rv9ptoqraoV",
  "key34": "5EThHQTdQdH6z4RS9uc6dyAsToLsSXdVrXQyiit7GjDoDxp8LVJfyCo9FztRqDvkYSRumTsGpvc6hVpDztUjvdMm",
  "key35": "5LRpCBADskZGrXtGfTEZN2pvB3dc4xJMWQrXPVy5E7Z481vuXb3kouyWB3N61AvxUfbN5ohJLQbE3oQEVxSzvieE",
  "key36": "2NxSMbc88QFQwQVgvdKj2zQCJ7TorLpUGQYbvHSQhYk24p7p4SCqmogGBy9PiZeEu5aNfTMFJC9jpMUHt2YFZKdg",
  "key37": "kHRboRTHuTeNgFVECpSHK6GdNsm3sr7rkaqizpwHfQKnUx6FssRmBLsSZiGg9kwUZ56EAniVQuMRytZHCbT1c7J",
  "key38": "5WToqepucMRLcw3FCL5gDh9cDmvywSMP8C96qFUymXugVCna8SGhhHuMLZhstn5fkdn7sc1cUV6fXttw5npFuuoq",
  "key39": "EEmeciMZUeDd7zrrwZc5XPJmDuetf4gJVX6we7dCSpyvSNZcUYWLeb9rr2U977ZdCVh1d5C51JekGqcAs4VKq1s",
  "key40": "5hLtQpCBZAYG7pgf49PwvqsxPZhiXrUFpPch4tmGmJPJmT1AbiftByjvTjzzRE9FHrRGQfntnyPAEbVqfAWiyQKj",
  "key41": "4N5hVnv7TQEcUh9xTGNyctUFFappbXUMgoNh2iWXWdXAsee32UXA5H4xdBeaGe9e3f35UCvkGJ8E5PJKkaCa1zim",
  "key42": "4ik6wcUZbyuN711MVatNaNL4tNQ8GjSHoxwh87UAJVHaYk7Kzf1vubnXLwLvZ2fhrnHuVcM6f7FTYqWtbuNccXNg",
  "key43": "4iUgmEySfAZ29n5mGQz2oTULvr3QDcuLo8CvMFgX2ibMZ4vw1JJX828jCRR8ZiY69TPMoytPTcDj77ybkMfF1jYj",
  "key44": "f42ysNhPVMiJSxDjpfpz4uTyj83T2anUsFWoStYhHCzWqdt7KtoSSF1MrCpshHAMnJMpFAVXSwiTkk6DxDn6yBK",
  "key45": "2UBJY3QK65HgzCmnLCn2YLt5V1DcNopvNPYMpVL1XX4VDxXgWFkeQ8x4RxUaKfNyKXHGQjkfvs3HMzSqxU5Uguz4",
  "key46": "2xAjvkeEQXBZgZ2L1ZAaj2shnaYCeWezwbQNdv2aFHyx4WXaxk5dQqhWMqQvcvv7MQDCqQpbrjcYak9QXJsCyUAj"
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
