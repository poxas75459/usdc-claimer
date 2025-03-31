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
    "5UhP3YGRoS8uxAjaQigGfE4rduMqmLpyCBRPmNdMQHuVYwqR6fyX6X1Hax1pi5ESLymSuJNGzZD5Gqd9Toj155jk"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "4HKYs5ZjZEbfC2ANfzrk1acawTBAWDMZdEFTFcv7vRTvii2mRKBTjdX3JmQ3qd7eHmF4TZkEFEc38U7N97YfMby7",
  "decoyKey1": "3LQNSZryyD8qpTqpp8TMDWAb8A73in2c6nTXW5HzjgrUpJyokBwbNDJxJULSGVdUKggtXrEvDX8UfXzVSPwdDvkT",
  "decoyKey2": "2PHjHsFZ5sje2zvga2RAcGye7S4qyQ1u7c8kdZUBNTmKyZ556h6dS6R6up4cJ3MR727gwPJCyd1NpLmx9FTiFvrL",
  "decoyKey3": "2hSEoha1WiyKRVdkHYLuCcE6rRRU9hDXKLMnJnMGuxbKUACu6qwR9UHQ9XinVueUdYcPMaFCxUU6W6iZCSZ3k83H",
  "decoyKey4": "hGzP52YTFHWhNRrVsaqXM5ovfSVxtAEDmV77BEJQjQBxJkW2QRWTFdJGmoGAyuLmBog8kyJaJ7JHP9Ec3YQLRkC",
  "decoyKey5": "58MtNAeTtRPhGr1q4iujADrGQoLNxAtuANUQnb4r5RGWGkhEaLKYyqxUo31k47b7tkiAs6MwzBayayweBWBfaZiD",
  "decoyKey6": "4LutkQXDc3qrRcWtRsDiAG8ZnBWkk4cMoLsjP7pXEujmVoZvZiocXsN2JDwTqqezWyLjKNd7SGGoAK3zL54WavVy",
  "decoyKey7": "2AoupNVExvThe4HL3GygiGKPtDC9ZYdgtfHuy688HajYTkYDg5dgSGi9SueJmTSr98ihCzDd1uythNLJuUCxuyVJ",
  "decoyKey8": "3pbuM8TxZXa25UtkUQwuRH4BPvBNEpy4ENMQV2q9hSJbgc3e4c2cmKKLR6ZbTGwNpthVvSwos7KcPdF1UXHiH9Qg",
  "decoyKey9": "3jmeDj9zrfcGTKNssSaFrkeLifZ7zGr721trhuBaRUGqeoGPf6z5CdH6jNh17Dh8U8cn7RnnpWJUstk58Vx5weAw",
  "decoyKey10": "2sJQGpkDcYr2Y6WhJitWa25kKZLGDLWf3HnJTBjjHYU4zxuZRZXMDW9Px7k69srX7agnM9WoFGn8MKeZH3eFsJ1V",
  "decoyKey11": "Pm3pNu7AwzGWc6ixZAGBDmGhHUGEXeF2znFdnfeGLvmm5AUAmGonikDPhoaAJPGwiefUDaQdbrmQ2DLGof2RfeW",
  "decoyKey12": "4z5bMnNzYGePX9Cz4AhWR7Xy5KL7EXYQreTxH4Ybh3yqyN2bZhaaJXkMgpcU4cy1TdvR3j698DeADCrA6PQYj4N9",
  "decoyKey13": "3ASJ3a9Xd2MtwKagXkVviwECrB3f6HQSChox4NEA9874pY8RE1s3TzgRUzE75nHwwQHhk84HGaP5rJ9yxcxtjkyz",
  "decoyKey14": "4NhS2qFFJpVpD9imEKWQG1jbyZmBYsmLApiEYZcWJvAqJPzy5TQJBzWQ5fkR1QCa6MWbrCiy5vvz2tJ5sHmokqRX",
  "decoyKey15": "igmbytS3SU3M8fLywGqEZDW1ryeqMBb16oTRiNMFBww1LTYCu8yEKw62rQjsxNzDwJjskuFsWGwwNztftv7pwEz",
  "decoyKey16": "3DdH2M3mx6ipwz1iRW4kW254sx6UuTJwjWX9KDUzSM7ryxNxY9gNh7US3ATCUu5kydKwmu7RorNPFco1Wv3fUWfQ",
  "decoyKey17": "5JFmFipT1AHruJVR2dKMameRovVxkFpUjL4pxVibcN5BTouTnvk1eVfd8M4grrr3UocaQ8UjmWBvk4UGvzLzVmnD",
  "decoyKey18": "3syATgbjN7JsVrgq5Lqupkc47kKpi46SEUWw1R8ezxFocVJs77wE1b3soCTozARoAwYrfrp6nQRnpos8GhSEnTC3",
  "decoyKey19": "3zVJLzvzeSVw2f3g5VpdY1A4gPFfgoPbGaja2j1yhfs7nqZabE3448eqkSt8PGNxoAWJqtfSQ11TyL1ZNMaMAd6H",
  "decoyKey20": "3NNzcJhqLgM3oSJkdqsB1iv3dGNj1qwZF75erPMqVV8LNdU7hhBkdjAXTqsHfM4W7wwPzJyivyw2kcXr6Lq6ywp9",
  "decoyKey21": "b36Go4NZu5Biy286o471Z5omPf1F4pdWQRXzDB4DbqGUMubpz99KMcJZtdqBH1zqsub92G7V5RGVPH5CuqFFnaV",
  "decoyKey22": "2h9QCa8gKbecoiKNBA7e6JgAC73M6oB9ebk4YPwWJsA7iYMAECnfDudR9pV456ZCwLjz5DFW8ioYio88JNJQLfXA",
  "decoyKey23": "fXZyDMFTBFd86SL2pgWk2wCi8zCD4WWNSu1SBDWQX4xTRKz59zskFUVKQvU5W1TVYt258g5wC5ZkHUVpAhTAwKe",
  "decoyKey24": "8vzuo3YW7NSyWAfJ6S7mtu15xunqvCSc9t6jaxuxXR6pPWYaUdUSW47xHhNP5HkezkneK1gdQ5hAkN9mXbmSH9K",
  "decoyKey25": "4Uo7jzmxvibLf3CE8c91X7aPZappakVq2Mgp5xH6jee9T3HoNvn6ALk4n1J2w8iBb8WdRh7mkXFwuhVETq7Mj4JK",
  "decoyKey26": "5xNTDhYUB9aLTmsHp7sCdY7ZH7kY7H8QqxfbfcZ1rCEbptJZ6Uwsp1EwGL3grZEPTRndtPyVmmeBuXWsgs9on4yL",
  "decoyKey27": "2U7AUYFkC5ymH4XcEb8vZJfzboUHFqvyJan5PhQmQACs77PpTRKmrSmGztDUYfC5cACq2wERzJvYSgN1uappbFwG",
  "decoyKey28": "4CTcyDF424TF7csiYX51HYXfBeXJa9rbEYAWgr17nVomcFrRrjuceSn6q6nQMk1BHLkUbypajViryoxyGLhJwTpV",
  "decoyKey29": "5spi9rZ8jZzv8sRau1Y6wcB2ibGj5wGQ7qqV3JZpAQJ6zKohpB7iQ3rZR16GLGW5BmQsPGy2r9F7JR63YXYKuD3x",
  "decoyKey30": "5kN9DgPiqcYMZJKk4PYhJPfo7NpHy9KG8QfRKmro3BnazG1BjwzqF1merb5A4XRF3XrnAFNK8sVYQXJLPWwiV5VL",
  "decoyKey31": "3XiQQkG2wuttQngadMQ4oQwq7VH8u5Q4JrUgkVznEaAApqS4MSFYyYEF1ZtFuWG8bGrnFQUFwQjd36oKgsVNhTR5",
  "decoyKey32": "kEs7v6R58KdMEeGPK5vwVPgZPbWKxSUkn4PthYBmWgBGb5jVXHDtqZcKE9v9XdWRwFyJCWEDzrw5MioCkAswABv",
  "decoyKey33": "58CAaxatctjvWwcSjJ7hKS6KsKroME1KfVZmDD4EJJrMNJ78QyDkXtwFMgtgevAcvc3nRemHKa5DH97mNHJyVh6q",
  "decoyKey34": "3Ttrua37UwmQ95faHHNNgN1sTiwVW42x4jsgpg2QZppbW2orPpHHEjRFZdLUwSjotnDTm2HCRqwDo6585xvKkkM6",
  "decoyKey35": "2gbBjL8DShgGibeYWPJ9jXJnNVnsZQQ4rfRu6LEamk5LBHEHmdkbmAmbdiGX6rPMqJvdeiPMvSwHErqST8eKtSso",
  "decoyKey36": "43sAhZ8nrSVRCiqnx52ry61p2e7usQWFhV63EttyEufjmb6qk32kDMTPXp9zpbuxemPzDBdKGyhz7WSDS2oCcuV9",
  "decoyKey37": "3k51o7DLANcPgnZCHgniDfS4vskU1tBd8rvopyeJz1L9SCXFVb6EuUdmkScxLbikkxJFh9Uy9kKcfrGD61Jd4x7t",
  "decoyKey38": "5K89b6yZzuaXqCSF5qTXAbto2brvrThtYSCUqnmjtQZZQywUVQwNvvFDck6D3CPY9QosKEfrVV72EMprroiUzH7V",
  "decoyKey39": "3y2FRvMcgDi7UUvfbYpRTZvWbEThmCHd88c5DhNU4HM5bPPKaoqC7ksrGDP74sv6q2oZtzAFrbsiyZHUQwJqB5ia",
  "decoyKey40": "2wN5u967aYVCeaMJyL8tWTbJXfJQ9qZdmFkPuFecn6cNnih8zQDiC7BvEJj5MJ85PdsLCEd4LRWNdMxFiYHrFLoC",
  "decoyKey41": "Kr3rcxhm5qgeHMT2wuTWD6Gms4nMFBmPk6xvqpWyMjQ6LNeuLNbAaXXLxoXBdPqebextNPxqHFyjgbMJbtzciB3",
  "decoyKey42": "2zHfnDyqvGsZFbxspp4pJnuFEW6ExSqc2TEmSsfbGRggoQ4HNiqPhwxSYWKXCmQKjwQJod3FRjYJ5yNo4cvKLkR7",
  "decoyKey43": "3CvqGVgdBCCJ8xM4PwYJQ57KfxSiuTXvVY1QnSgb4MFawGu8r5XrH4L9Lg8AN6BWc1UpNSaNw88Q7yAZdMdBdjuC",
  "decoyKey44": "5SqwqK42NMrpQngdQaV1BKJphbLX7jR5ZvpQJKurMzSrK2y3Z8DuX49N58Sk24EazdbgdKA5csnscsb5x3VPC1WN",
  "decoyKey45": "5kuUyzKczZckQpgwCFj6aLKJH2G5uxWzqAGV3btNDwXD9xNvfQbJKnivsC1QBKz2KJhSgPP2wpZf5NGSBCATMHeL",
  "decoyKey46": "44URz5y1Cf1SQvFza2k7kxy9WHcepZyuoKjFomAcLtrgheF7iF6hCbMok3SLQtuiHStFkznTarL4worBycVhH7pY",
  "decoyKey47": "44gPQSGhTzPJ5tPZoypd6xECsJfjegKHNCCaoPRrZVboQ44A4u4p364b8TWDv9aACpP8UCe986rR9Ay4Yp3HJ7vk",
  "decoyKey48": "5B8yDDu7w4uVJXyNDGNSF3GpXGPmDWKSRevikY1jVRToUqrF46k3wR6eAjjjZHdRhNpZGvtCfeb8A3QmZRodBA3w",
  "decoyKey49": "3YxZjgKYzxZdPm77LCJyuU5raa7LpNzYJ3K6L6dzWgou9trS35ULJuJTtGXSACnRhPskRDiwCmWGo8ndaRKMywNV"
};
// DECOY_KEYS_END
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