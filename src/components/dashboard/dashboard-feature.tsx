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
    "3SbRXFQjBW47Fzb84Mw5cQ7Y5B56V3z6fbe5HCR1Lv6q5dCAGYSuG1d2xJ2gDseBM7ir3VTdGSJTpnFMQmcjh64D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uqtayyqcFQgiWCVgMf2CBqzF49pYeLYr5HLcgtaskopMdx24mhtCvS3uJ9EmNTuosgyvbXFVDMdqGc1bQtQSFxr",
  "key1": "4rqQN3tfExK36iqPALVUPHTSC4EQVY5CmDCvwm4j1kTu9PqneVWtbm5GHPLjSGq8Q5trrVcoQPfDpTB5Q56J9Dkr",
  "key2": "4eg1HbXYwVF8EEQjZVTSPcVqWfxNtmLQQh5LGTeAfqvfmr6QFLnmyE8h6gwAyQ7a1tsuaDqE59W5MKSwsbPnfY2B",
  "key3": "2VuALfg8oBrYQverzXv4zPrdt5aGQBFDYhf7JtwvpU6p9HyRRegWqjZWkNuDbLfqyK3xdMk8hHCoi7AhK4mcU51a",
  "key4": "5oZXPjGsY7KwGnaMgKVStnimmRTrXsuNPrBi4PWgth3CeuSSFoHESJfpEE4Axzk4ZEF1swTYuedocsTWgapvBr4p",
  "key5": "3Cn5VJU9TCY8dTvptADhbpFguy6oVTzC2EngjGJa9Q8AQpVgAnDP82VtmMrmtViZ5FkAGRUuRXcWKhBxKQCWotrc",
  "key6": "2XANJpRQeVrXwmoSRtRgHhKT5uwqbKjcVYeHTsjC5kDuWR7tFZ4L2XX1GdBcaauTdb5ruc9m75HFpud4EHQp1d4w",
  "key7": "65h9EkTivHg47DppR5SoUKLkw1aFPG9JhBQJ4W39dpQC1fQev7DZiM8BS6EDZqHKktaNbVPihK1NtxpMSmaQKVSn",
  "key8": "2oEM1ExiNDesvtNU6o5BcmAfRKGEuSizFotokxfs5grVeGWj8Gewh6XS92U3ogcPCgPeV34Bx8GenFWzemP1Vjm7",
  "key9": "3RYEA7AGjGLJDGCrokxHKr5CLa218kcCEhg3Vf3sRiNLDFic8DEQmAJtJmQLc5ATpBxvY7icpQ37gbMaNfHXj3kq",
  "key10": "2mnKddFyJ45puDCaJib2vWfAKg7h435cYtjkvassvQJewrq8DBdyYJDEgXygFP4dw8HhwB3vFvDfpD2QC3Ws7FFC",
  "key11": "2Hv429AXoRBS7GKGaPdhWat6S3PDfPUnh4wvLdXzcoSYL3MrjskX8k3J4CPrSUE83LUiACafVSZDjXxcLBsSNigs",
  "key12": "2ZnYJ5WuvjDF5Rcq3FnJbFZRHfrHmuKXT9Vnwh76ViKGzoGTbRkeX7pPg2HFMGMFyUk3938XLAicuHnz3isStCD8",
  "key13": "4PA9i92gkFeuWzt2xiAm8TNgsUv7U3dqh8tVyjEa6gGdbc1zZLobUk3zReu27g3d8ZMxLDKHzc4eAYPMNWt9Ea3i",
  "key14": "43SKfNuMDjFRRHdEu43SU7ubLubiTedu66FZ1tJDELtkb6QA49zhVHbW2LBx2oKLSG9pnVAaJ8RCnDDwKkvNoUw7",
  "key15": "28hyXC6GShmeWrWb1H6g9gDPS2pdPccKbTUimezFypwurSVRcbyeLpUFPRpZsXKDgZRGaWq7irJkgyKAXgsBzM1j",
  "key16": "5snk6Yh81cVjwE5Mp52NVPcnWfqN3ZxAW8XrPsFxe2Gob1t2b8jBMvxTSoK4RfMLMy4Bu1SE6m5avM8sbBHydrwb",
  "key17": "2zRAmuabFXxeGH2CyR7sBbuSjBhhkNrGt635e91n27E1ZFKxcbf1h9kdzHeF8W6ZhCqz1Zdu6E7RAr95TWJMwZB",
  "key18": "5Nwbc9XBEGr9hc2ktsHJwQSyD8YnedNCoURAfDkZge7VeVGFZJE3bBcUWMP8hLU7KSxKdCQrAf713RrHPhEiuco1",
  "key19": "3CfNLfcNWBiJD2cG2N3Z8hJA9RbXidi8cjS35d6m45ptYUwqQYgD4D3jsU9CvdoNULKasCJK8UrwTn3yoPa59kBv",
  "key20": "4KiaY6QVsqr9TAu8mkTEam4aQFkFpwwbPvzucx817ihXd8Jo4h8pu1k6qPghxX6HqhnkxHKEUcvEU5NgyogAFad6",
  "key21": "2gorz4fGMJXwpJqU7jLZ4WZiSUN9huhXdNLbVtb4bTkskweWyQWrYwaRrMruwqu7hyFB4RwQnhXi8xHWoUVpGL5n",
  "key22": "3bUL2xowgYXm93b3RS77iJsPagpiuZKV6X3fm5KzkNQZW5UBFvxFKKqES45jkApzxcv2uT2ZNGxaUb8GaTtqmhua",
  "key23": "V5G5B1Q4GifwwTtVApWtZguSddEv5wV5DZ6PJNGe4ckQEnujysjM3HhBb4Ck8aRtWntr3eTKK7meUVtAgUKf95S",
  "key24": "2B6gMwPswVxJc44C8SgPwqHpNinoCFestEaApSyXJXy7pafkbXSzDeNgrAE9VXJ1rE6DjKxsidhgSAvaRn8w1TvC",
  "key25": "3c897bEqkHm77Ua7vgwrViutPUA6i2J59b5FxJbURShE2NudWj6BNcemcZShmnogaonkC4rWmZBidWTBieMzkXya",
  "key26": "3mN2ymbeZsV45JdLvczsDoSDvPjxKBnKGMeCBUFeFfnE5e35T1h9kVBgFGR7o37AfPthfiRL9i4PkknfFcH7Wwyr",
  "key27": "3C3V6w5XGkRkZwCG6TpgAGpRTzWmVg9Dm8LNbatWQqVbV6fkLajzbebj5TSqm3dUXZzuTXEuriXSvZxGtngg8ZLf",
  "key28": "9LMY5tMUTwGN8ZV2S6gqUmQ8Mpo77o3tV8MxjMJ1pJuib7spm9dyFFAAGMiksfvtkXdEaJHz4VqHwhuN7gssjg7",
  "key29": "3yaPPjPFMkhPc1DioX84VyyLLEtku2ERYxio31HmAHYstYS7zK8jJvtuiAYejvfGuBhGKrQtACn5ze8ZUeYeTumR",
  "key30": "dntiEWNWMSZuv56dQK3b6C4RVJJ6VAvb5kzoU8Sy1ydQWPhQA6j8vyWj8gft2xP5kWCgDTmSn8XhsTUbtfoYXtM",
  "key31": "4FErbA8D1fa4abue1dFmHjRTjAEVR8jFHrx1ST5fDXqMQstfiFvVtL7rrhEdaXUwk3GJn4v7UvrtEgk6K8KMqRtq",
  "key32": "3b9yBfkxSkRXFsFC2fykotPEkwbCfcgVXprj1HRmqabJXdDupLrismvGywXDQgR9pzhGPNy1Na4qYLPq6x4vsLkL",
  "key33": "2htmHibFieBihhVT5gKZKfNQc9mdsURCe9Qxm12XHe8yTguhLF63jxkEHKMZUKp3c2qkv5kvaJJxNLpQV4ciXKB8",
  "key34": "56NZ7cVhp9BPraz9rZJADED72yN5yH6zeD2Q6rZkiUy9FvYHyPvexafdcetmbYdipzvD5AdL7dJ2oMyctAy85yGi",
  "key35": "3VMAwAi33uJnwbMUCGbNV3aZoWhzzfRBB3WMWSXtzfBTcyd1GWRrJ6SQn4HiLjmZ6suRzkDXgM4SrCDGVZFYUtR3",
  "key36": "2VRNZ93mBLewK1ixfMBEBcp5uQ9cyfCHFXWZ1PbXKN7ocUcqEi6F57i8oMw17yVHuqSbDskyhtuuKevw9D6ZCrYe",
  "key37": "38ZUSEGjxck924fwUKA3oChzEWJJFmWEQFpYUCQeiZzf98rA1U5nJoDvBxFZYi8G56LV2t6QZ5KQi1nTwc9kC5pG"
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
