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
    "3UPQ76VnTAzN2duc9YY4FEqnc9wsikPWebZe72gxp7cKFjmhfakrxyEFy8YQzgZLotgHhG73RxuygVMpf4Zub3N4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vmcddkGhHPS6nCWXaLZh5rP8zGmLzFgiJGPXg2NqtWEAARabLGMi5UpCuFUrENFCNguXF2Pu5ub7EmeE9LMwFMy",
  "key1": "4SAeniM3y5WtgssitAwkXx3btW76WbbXcp3tMM4EU4s5na3DQeRsGmejEEZ7qqMiXv8Bx4tqkUBHMsDJsdnbQyEN",
  "key2": "SvaCAo9muuUDwxKp7zFyBS7pRDbv81KgKT243J9XqBrjCmpf4gRe1BnLtqWLAo8yPBWKhMQu4EkAkvfC89eo79T",
  "key3": "3UjH9EvJMsV1bTeYNaBXu59SL3UCKpFgJxh1rU8KPcNqqzzcXPi89EbZqTNVCQspERw5kNrRx8RqjNDccgGNuH3P",
  "key4": "u3FH4zvVfR4bXmoo8W4yJ5i1RNiqB1f1LNLMJqfe4EnaeFK6ZXumjJ5Q8kq4J6JiWFUhY81Y1PhJYF3f8BnDbfW",
  "key5": "cMDUzkhpDZzdu7y7dee3KMxjzu73HrZHfFKJjwGM8dtcETJjn21aTp2PUqGcSNHKun5booLyeNYL3WoEyiYV7DE",
  "key6": "c12Wdf9XdjrZbemGb96XjyvBLR5uiz665zo5LayuTJXbixxHtEpECbbLVjFpoGjqMAMewVNnaRMWknG3Q1tq4fH",
  "key7": "4VVS4ttcdtp31UY7uHyJTHkQaDpWoiNqaNneTfvMcdERBUREQJh3TGs1QuHM6xi2dhcrcRKVJX55mtKQ3RNho4Ma",
  "key8": "4oYoQW4oH9HsPRwMrgydV6m1dy3m4Zxy1YBscPDBU4PeAwjQyK6FKG2CC8753wGCECqFzCRd1u1x2knmoEZCEoyt",
  "key9": "DpjVqCW4bLDUN2oEBbvHEqWedVc329X4PP8cXsaUcFGaDmwzWuBS25YzA8NoQTeManYkAn2WBGsS7YyYL23tHRX",
  "key10": "5sxtCYcxdGBDzWgcHc7NuftJj43etMwwSdykoaTjXABhgYMG2BMZX21TaQodbJooc22p5DBrzPNExPXBtLWMmeSG",
  "key11": "QaTP9i4XgAVvV3TKctWYp2G72WUuuoCcVLDq2Wpj8p5t5RV29HtDVyDrW4VaWqtKUh8TVfsPbLyzGyjSDCGhDJS",
  "key12": "4uuCCG3SxwYm4Z5EqXXN5sF8SbQbaXCeq9aBYzpYZaYD9QDKss81EDHncaZQK9ehhpu89XT6UgGRii5h8vABv3Dj",
  "key13": "5M6MTUGaEGdND2VbdSXf2xSa3FJ2XdBvwTE2qjRgxgcaJ8hHwKPqYaEjf7iBgCNWUoiqLLQxptKhjgDWVqKcEtKf",
  "key14": "4v9urJoFbcydAskFU51Rrx5Y5v3gg9pT26aCpdSgyDDYEqE2ZhVERvP1f1Tk5foT1DixYUBDhKop4QfZ2GKKAPwY",
  "key15": "2pnP2KR5mNBFsTx3CSgBApQfoaKeqA67sz3j22YAufU8k4qWQdwdaEa3Rxo4LBLRiU3hCGRTvF5BZ6Q5iD7CSGJV",
  "key16": "2gxCLk9NGyAt1XoRc8jVhreH94ciX9V8XzWeNf587smdvM78mmkqy6yTQ1W5EwjJ5CqgnGB1MsNo2zQbL7EKaxjL",
  "key17": "5Jk5EQZs1cjzhKkmBk3c4hzT5Dyt4at9u7rWcGVJ7SrpqkxJo4BEPMjvBXiS5DTDxtB4jEdtE5g22PfivPRvvqWj",
  "key18": "43cJRTj6jFyAYz3vHsHjk2SZAMvKDy2s4nvaJdirroAivLXMmeKPXzom7szPMQF3jwKHuhYjyDwa4WZUMbDQ69VZ",
  "key19": "awb4rZ5jyV2jdFhD2sooxnUSDLNGefCei9VWgqYxhvwEADG5faYSgNYW8SN9oDYeNq7ZxNY9i7HfyQ7QpYaNJY2",
  "key20": "3as7vmAp7Z4rgrHGr96QA4hrjjJwCbr6dKcD7PxoVH6omnMCSGWCEpooWsdXYRqiAnc2FBbkgjVmfuYJEHqd8DkB",
  "key21": "59A9EdMjy58uzr7R3M2zM2WnNW4j5jRNT7erLp7q34CvkEkGmQRiswdFzLHsWyRY3mZMBHyU1zgxEcw9N279VJZZ",
  "key22": "5wfWKf9JjUszmMrCofmmAyGjXHAadiDdzMFXZN8ko26nnugmPwetGWe25HbhMCYczP4cXFvVbXzpTErDzq9xY7Dg",
  "key23": "uFrPaarKwdi3nQK5NLQnUFV9obwZyvUyNvSVELCbngwTE7GLB7uq3qizRKqoU4aFFaotg1mHjNuj2brwRfecPxh",
  "key24": "2qxcfoMmuG38W8djSncNMQtL1NDfwHt7ez3X5i7W988KqFzJ8tpGcac5WCHWkszSrbgdSdfygBAha8KCWaVjvbME",
  "key25": "67oMXFsm9t3vJWyivDZLXw6LjJovTfvEipb7ugFBoYj7uoZQitQu1Z6zP6k2DP3qdovD6eJ5CKNPR4LDqbWi5F6H",
  "key26": "2WTX92d2DbY27kxz5Dzwq5S5aqZ5nXvGSpxGe9193wRfivxCYhDH3BXtgWxkZsHzGoq6rVudpaH41SYx5ARhm2aZ"
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
