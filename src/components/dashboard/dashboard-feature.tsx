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
    "41YyHSQwHwUJ7bTKyReEGbHgkLqKSJEhctZEF3DHAYd94RGxMQAA6dbm3yijXp3sPV8GQ7YfFDSTUqZeJj7rw9jm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5opTFy4aq2ec5P7Xh9WPN2K5nZa6QhpAetg9HhurG3uA4GLRFffaqNMah4jV9JqNFtXp6iP5TJD4DbUKqHuRxdyt",
  "key1": "2AdhZnhKZ9WRGohnR6pmJmvUEv2MsczUXggqd6GdMGPcQLf21XgQPFgUcENkUruQC5GqqYUzaftYR7qLJ3W2ebU2",
  "key2": "3gMUnKo9wLinExzYJAWGMb7h7E3GptGUs3kPyq9CwhhBq5WLx87GxekUSiiWcsnuSx7C8zzWTJ5PbYLJNy5vuRt2",
  "key3": "2eKLpmMRpHoTSHini7syXj3FZYUragAWy9LXNpWEy2sxcGZSLf4mR59gSoQ7ShZTSHoV5WKGwwoJtoijCJGoX5Ex",
  "key4": "47NZ4uDrioJimgoB9GnypKcrdz2TyTk2GMU2VuiPugLDdhyuGdCiEu7hmVCjDnQLb8YQ2LWmdZaTm9abQ2vQT1Mc",
  "key5": "3TSwgYippeyBfg1BMVX8QQZpNWxLk88rPz2PS9Zwk4pbs5aH72JiuLSqrVvMSKXm5i4a2DmT4yTF8qCHvnPqkUGk",
  "key6": "2B6w8ZvJ5R3wjSPe9wftLTTXM9L9hGhHpyp6oYH8y7gnb6pqfHmrhFZFgVK1cn2AtoJQ9XscigJK1TzYNSKN1Gxi",
  "key7": "2j3ThApMJpZZT8k536GdKMzMNfRizPxk6pC792NC32NoKL7Fhh1M9WbkszQuqoqB6YjzqpUHwwb9RM5KLqykaLRm",
  "key8": "B3SFtAii91b4H9FQ53xoDs3xLJwhx81sxuDxX6qAiVWE3FABw9UHxVggKq1N9mCjNFcuJFxsin9nNJJy54B5Rph",
  "key9": "4ANSfEM2yof7EQ3KuDxYMNCKD1qQYNHnqSNg1idDhZKx2k4nZ65sxitjTiTpdUzJ9X4knkDKJX41Ra2RZ7tG8GhZ",
  "key10": "5curv1Bsw7ELKuNw5z2SX2xGPdxLxuJQY5ZHMcp1Sm69mJ9WUmwzczXHsBZnSRgS6HJsi22FdEXbvJAHkouVvzg1",
  "key11": "3bAwacfZL5Qw1bW5MnBZrEoM6HDvFCJo4HvaLpWK3ir5BRZdpBLJkwBBJwiv2tDVc2m54QYYeacav6GNV2ZmEv9n",
  "key12": "5LHh6SpB7xRZRLsZAMtVsMPGvgNZe1HT3FFKmdgYHngWsyGapMJWBYeEbFvxQUHDr7fVrmqktaNYDjttXwJWTvVS",
  "key13": "2gNnhcCgQdPLDdaStQaFv4CfrdXnXj7BS9hwwGgmEPuWwrjaEUFGQapHnmWmhnhdp7d9kPKih97CsXsr3ouabyUk",
  "key14": "4eWyt9waSyuEqdjBuq3zQUxu8v3TVq5piVX3nqMG1BQCzQ7hVxfydcLQVTMfeMBypiFFhwiDhvUj8jVTbN181ByR",
  "key15": "4J7XqJkUJi5ey9uVshmNGKVwqM9q24oDgC7Lbjtwuuu5Bp4M4q8ifuYYkmGDZYGGeaRPVmXX1rMeEYaH84qLZ9JF",
  "key16": "3JK4E3bZNbhgSRs3Wq3GbqtKgL1mosi8Bv1ZQ6tr4erUVkYDSc8YkFEi9X3xHCbdYJgNo6CrzzAyvY7oZZsLk8Ad",
  "key17": "29jvYC5GJY9E7FYmQL77QYLkzyPFtJ4mXouZGrYXkTL34r5Uci3gH45yd7osPTNjRZxWzavWvzNKy45NWSLXAaQD",
  "key18": "3BtVKffr4gaVXzXwh6xoCVdpraoRWGk83nujWaK629s5GLbevnBNUmCRP7s2Pp5UqZMksNkoZdWgr97Xi2pPxtt3",
  "key19": "2GMEGoWoqbnjECezUiZSQ37EUnntDjtTSnHu3g5VuW6Hc37ABSbSxCZ3BnRLmu7273qyRxmVqwB79wfHpGWpCooG",
  "key20": "67jAeJ9m3t6bjoFKWdj3ii9k63SkQUnp1kwQchPrueDc1rEee3ApsGms3iFYCCst8mvJiUbghNRNSDEy9M1yPA4b",
  "key21": "5PcbJhWzAQhTpksgb5HZFkDiQn5pAox8d8b1p6wofHUtM8VkSqNCASjAcmZn3F6FArHMyW4ogCvpheBSDgD8J8jb",
  "key22": "5Neg4Jw4vCnnLdWagxyPqsywyNDn6MeTSaQW8vokyEi45JB3ynvzPP6BedD5PFkiijuZxGjf3tFCANXJ4aVpnxTB",
  "key23": "2JNpNvCtnYxcNhQN65662VFWU4D6ETNDeSHw9Fx9AXqfxgQFnWV6P4dTqMQxWVn3D2MVP9MoxHgbRTW8ETioveKU",
  "key24": "2hrXYPCKoJ8JGYqqVbs5W8pSAcm7Xvi8L1JHZ1X4PU1WNGfY9FxaGEp9iDv1PhC316Amwu1haNvwG4Cvq1grbuK3",
  "key25": "4RcP29ePTCix8P9SB1epbCtNDL3B4qknBgpgnLvwVE3dYNPzP1bzPxKZETsS6BLMq83RkCen3DRcBe5wYJ9Z2iD2",
  "key26": "5SdvefUu5vQgzhuTehM1VQiKt3hcyBxs6gT5VCheK8Forkcjv29pDU323u2et3DXVWEDo6GCVT9KQtrYaZrumMv5",
  "key27": "2PFXi6oqVKXoxsG4ey5AvA3PUbEVsdj2bmSMF65uTBmL5uu41twi1W5EMamiqrYPFg8zESX1dHnBxLi3oYFXr2H2",
  "key28": "5oihfXCVQWEstG4rFGPRB2sYXjtxkALcQwL3mNU7nDouh34w1z3zyQR9wiBsFUVayV64pfZmAyokekrrkNJ1BprN",
  "key29": "3C6TWtNGzXxDYjCkY96wAjLX8T9Ns1sncVR5j1B9HpPUP88vRnBwgdWHsJDjzXsAMCt5oCxCDxes8jfj85m6MfbW",
  "key30": "Thg262XZ6nn3JkZ4Hg3wsAduScEBAVvCFo14L69sLhobfEgn1qtPLji8qpV4xddEMnv6zagbMz5CVZXfAKp7eEq",
  "key31": "2y7XmNQvLQNXHtstcteH4XFVv37hWc7mM9NX74JbR4piuMq6NT9Liv5eHropnmEtJgTRzLYzy7GZYZAAsmjEZy48",
  "key32": "TyvupbqdUDM2NeKhGvWZCHs6qhnBAwwm11o6oYP8GYncagyoBXi6xGiQok6CXRK6Q6q4K7MC8VbzKoYKnw7TSsW",
  "key33": "mbTuc8Yv8JkxgUSDHAmdKz1F4VW7KqkDvgW9jYCNVuXY4tsRPJdcvWeaDvtxHf45DdhqFC2zZQTBLrnF7b2tZ4B",
  "key34": "4T8c6x933Qmea1uZCvH8sK4E3SUt7u7SuAT5xu68vxWpvWkaUNCWYhffBunue3USKJNHXnrzWSzTydeW9UMV8tj2",
  "key35": "oLd7awNaH7modH88MwHBMTQxWc9DgeJgHZz1YEjncsy1g8hunFJUCXSsCTUjCKPwRtnC8PZeBWynoq3f4r4yRA5",
  "key36": "4JJsobRrzqHTDC2Uw2PeQtUPMp7TTyv6yTJ4Pe9oKBEjv5kqco3S5Y68XF54EMub7J2p8bEzMRJUnTZEHhakchMf",
  "key37": "vvWwqAgcq2iMdgJiLM2p29XiMCsh1wQmJdJCdSdkeoLSxwNNwBMrkvg3keP4BiKxaUb4cgqdXn5dFcm3kD3MbbP",
  "key38": "2dVPJdMRhhwA9wM4PCiti84iXK2xQCHsmsJhj2yoGfkPCkrJaGN2TFBbCrXbfKaU94SvfJYZMDk7hqSr7kL63GmC",
  "key39": "3LesrXcX7pajcWQzCGHGnLXTr6m1PZGwdXoKxxSHAKXLc9iPcaiHFnEv9yHZeSj3xkjWRJvEDC8Kr3VgJGggoBi8",
  "key40": "5e5jXcseZmC6LrwKuqvKWh2koZsehegCaTnxXMFdJ4WbeuVseNbRuPhKYV3XyQcvqZVEGSgad4GMmf22qBQvXE98",
  "key41": "nYEMi6VBD4fNtHiYw9y4UUsXxvYXKhWoxEA5NhDjh3kprpcqc9vvPPoeJsg4roWPKJFfpdFFaExa41M8GqjqW9G"
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
