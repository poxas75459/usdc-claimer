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
    "4R4Kd7DX2wxsVevdRnHWFDb7E8Udp1YFmhejWDZMqbz8ZiDaK4oL1pfFexDMje7ooU5DaE4QK3qCq8zzsAckRhqL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PV7UcWqvoPQ1TEX4eQiD8mjcKsBtkpdBU3V3onCEorp9TFDYaoNyAivRFnNBcbqCB1ZLnLjPVJQhAP75yATNV82",
  "key1": "5UWsGSA4DGuStf1GMZQqP8PMKgN5HvophRJGiyBY7DZMdYtgu1wbJfcJNZqjDZbiJvgrzUXbMVn9LCbExcCrVe2n",
  "key2": "3Gf7VQnNgWmqP7C5vASg2ENj1NqCEwj6noDkLpHWcRwkuzSA6JfocMWReigfoHXKz1bdvtgoL2t6B6EfxR7HkbnX",
  "key3": "3xNFSfqGwQJj2cwYDfr3kyoVE2vp3auP6aK5KTWvkky3hHwr5G4cCDajMzt1XAao7AaqrcdnEDpYhmXsPhHea7UG",
  "key4": "5diYf6CpxHfrGy81LYDYF8ceLim9vjWM3zcJj7E9EJuhsf1WpzxERKE7KuevZ3c931JgSsAadSuw17X1xLKss8nS",
  "key5": "4irqBtnykKqvULcWJAWLJcijpPCbZzcb758dirR7yokRsrF71QeM2VFafDvWYTM3qHU44Epo6ZTe4hDXL5BSbPuQ",
  "key6": "3PxmE57D7uGsNd53NDSevCgFXT4Xv3unx5Tu6oc4RCBttPo9S2hYEjptNA3ZTiinQyWsQ2h8t8Cj4YoyyoBjU9dV",
  "key7": "3b26gfq7k2bt3ABL9pvdcr18Gat3Tv37My4MjyoaoJgCHUMXQanc2GoFw8T7kfgSMTMfJpcfmUxSL2DjNCtcQ2Lh",
  "key8": "2rxQuVG6JTAwm58Q5zp7WaRW8sMxpUvpUFmPs4ri5aMq1zjDCPuJz6WYGHou4dh6Z1y9tV4tvZoY1JYCnRsvK4wu",
  "key9": "52sabah3AiZFsWPLP9k6iAf4ksdq7VyHLiqy6EF1MWXHKrHFp4Dw6u99UEm4C3i8RVFeyzXiLShUciyo5yh8MwVm",
  "key10": "2xbWZfnRNXtSUtBTQSWCGbyBgAwPmhWRMw5uX3FL7wMkHbUdRrs1rQNfSgn75hjuRiXRTi6GzzFhthnsATj7p2eg",
  "key11": "3BzYCJwkwcEgeNJXENtB4xDVhkUU9DismkJLDvXS2SMXmqkWqQpgwwE6BVLBoVGEtrrz8ZrUfWGrHmjLxbzWSNHr",
  "key12": "FfTfLDrae5uN5seRt8nX5NYC8HJwdWuUvSR3fFWPHLv8Bpg2FMGtXNtHMsCYUabAhBmRUUKmWsrpWa9665FZypa",
  "key13": "2fXgK8hHmwuu5DR5oJoZxVJoDFYr2uJCHCmSyPJ6fenwu1KSf162ihJukGNZk2GSBTptEK3fUYFnHDxMqNSfmr4C",
  "key14": "47UDXYVxiojWspHat3vVQX3yL7od51xP7vM1CEqaQRw41hjDooq9yov4Y7fsfJ91ZfemvWf7A1W16ayRUs18WTGz",
  "key15": "5KWBKJT6d3qXtkNv9Y5YYSn5w1LNfiU5yyYVbctLhJyLJBtY2FqS4F5BqXxwcrCVFQUMGWKr1cdJjaGSDyG6WnFF",
  "key16": "4iQu98JrSedWydEF7JPDbP8PiJZZtg1R31R5CtVXpEhEuUGyy7TEkPHpGPrVdHYbFwzZwPNwTM71mGE43Mf13hGf",
  "key17": "3AAetM8VL9xr8LerNNWGV3ncPZU9uhfjrQpaykvQ27L9ysXxWicab7Lqr7WsmZFKQJA1QKcBJYPqTMdd77Ju2uNu",
  "key18": "oBw6Btx3sva84eU9jUYQ4GhiArLHqKGknUhegESUGACSWCXnFH5jo4Ai6VVx4rbzfRnw351adciYpCmq3kMcruT",
  "key19": "5f7s63e6tV2tK9m5X6RrERLccGUp5tsStAtsSui9ao5SFY3AQ9SVBfhcRaLChamn1WkRZ7zmQJfw9kXC9xrL1z7E",
  "key20": "9rQybFupdmNxeqNn6ZNaNKbHZKBfaCm1Em4RB7GWWeuG7wkdy1bKDrUn6dUjmNDG9sVSRgqSZ1bAgpnxbyCgGpb",
  "key21": "3HcFihrSpUYdyRrpv1nrxfXWWavpeDUppyKPbxboCEorit7b2LmW2fZMxCYjpVgeDBqi8vQcWrxEDLFDAZVnNk2e",
  "key22": "5xdLaK1ZX1jMVFyQgf67Rf7NjMRFxyosopdM9PD2Pc5goMyrka9Lmo4FTuBN2cksQZPdsNtjZnGaDGkJ9LCYzZmu",
  "key23": "3y8q5nv7gdvdyvcS7dYAPVpqG7oeqVv2bn2UQoeq2TdmqBR6spu9BeeVNQb1fm8aBMCiAWN7fpFNPfffRLcBSKWH",
  "key24": "2doteFK3HcGRo5KszMPQpzRPzGkgcFLMJfB2x9XtUyegiHrDkKG85etMe2VUWpH5NyuBeQd16qGDdpjimBku5U2b",
  "key25": "LFhTmdjAwYFRTQtF42od7bQW3HhKupDrVjq1RXJ8yTKvWaNAJWE8Gte5TJ4RrCeC8Wnkrqa9uMBP1NxLfppuY3G",
  "key26": "3Gar6rm4PSQLmFvjem9nrpDkzpSLQ4h63P7JFxUvNsSt2e3JiBmjiuozYtnVXd1hAVSV3kB3T1LpnZQAJfjmymam",
  "key27": "1Bs6Frb3nCC12xHZvWqxbHbJ8DQ1G9J5DApCwB86zevpVmLryS6HwzGVu1YRXkN6besNGs6AMGK3b4tYvXXSPEg",
  "key28": "63ik5opY4rumEiM7h3Dh5vZTfMY38XZ4pqAvi6MgP6LLf9aDtvNqerdmVgDzctbJgGUXT6XuzdduJPHX3tKfVdzo",
  "key29": "3MBRTZBVrpu4UUJ4LnctPgXSrf7CQrg7rBXvvrnkQ1hqswrQtBD4x2uUB7bnvwBqfHRJFUgNE6iTvyGwVrbFeRAu",
  "key30": "4kisaZ1YuAwfJ1Q72upqob6gyxXAXpZ7xaMSbuQKQEkVhvaTb1ad8668HEraWvGXERKDRsEHjZoNyk6B6ZoRGs66",
  "key31": "2vinr3NxpqJnJTSwXFSpGNAo9LJTN1p22XrcfKC6EAUaRRwWuc1jcSb4HJzBwY9a7y8ECFPDbSe3RyFKozUdgesj",
  "key32": "2n4SyCDv6iciQGArYVG1Ypk8FQwemBs9HavVkHWuZGXpXjjtFeJNCzWCcAYg5XbZQczvoGJNpxkTbzBRwQzAujfm",
  "key33": "3HYm7ku6wLuiSRNS8mRhx7sU9EYd7sp9L9xWtY2a1CMkTAmfeZczrtiCzny1FQsFrFjUTXiSAFEwvWYePjAebia1",
  "key34": "26r51FbtjeMYBiGGRQtq7q2WiLahiPSkLewxvpDSEExKe1Ww4CS61yqehemS6FFrCCpTvYEUbbeZufxFn77Wp3eb",
  "key35": "3yJgFD42TdTejpipVKv9onjtiB5LfeSsvSRCUzZt84rzXYrbMR2dcQ3iwty2EbJZs2xMZzznWSG11xQcz9JKzU96",
  "key36": "3Y3h5KDYJxmMBURbF9eQgvXyxyMjzhyQ6SB3qSmK8AmEBLvDtrMnLsNCoSQoK5BFzG4EH8jntupwow1GYSrAXVi1",
  "key37": "439fvpWpHp4iGkrdUbHCHn2hwUfwPpLfTjVKRNyT4xoqe9RNS4dQ3LxTh78HpwqesyECrM7ZVyhp9vBAX4GQvSRV"
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
