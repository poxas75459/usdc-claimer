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
    "5PCXmEGY1chUMTC2mkYZdjn6NH7gUmMWXdmNqGGoTTrYYwNkJufXujUat5aG9kPsgkd5KNCn4qky1FGV5GyPvLTo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5saTHoVjX9usfFsJ2Hj3LYao3HNR5yHXPg9YuhrkphhGDvj9wYr2iqSxpi124Z5muiSuqwpVhM91m5Qt7qtVXfEP",
  "key1": "3BQpsMVeDAi8puPkCgvXvZGvZPAtW4N92YcWSFSmSvmQngsrNJSz3d3Um9dyVaxstordFEoMYNdy6C38ZnZEWGZz",
  "key2": "5Po7DxsBqVA9t72tAmBgNTnrnvpPDMH5G3iJK5VFhyUJTbk4DFcMvboewMWXn8mEJ5NzMzgPn72Xd1qxc21JU9Su",
  "key3": "4GhzUFqd2pHjsbvDWUWSg8EAAEHWZJWXjqRjE2ijy5MrVzdy46r4z98hETTRQEWtYHw8eUrCRiVnGZeirdtRyUnC",
  "key4": "5X75UaiY1bjoyPjPuQFhD8aZRaT6pYa1RWnUtbNLGu4uvgwdevGv2cQi14D3FbDLyV8G6sFEEeBp6xzD1Sv64uGq",
  "key5": "5rHWUczwdSEQBy9UMGtngjLynwbfKKdfek7NkZVt4YCeG15j2gkrzCYyLtQ5DKpP6xPQ7Ab9sg4DYnGD1UkcyTJF",
  "key6": "3BCgCVFw8Ej1LKxsEX1FPCctvvLiEKmsHeLqtb9DtuufV3bYvgFnYh9VCzTPYou4BfXbVq6Nfxbn5b6WATLJhN3f",
  "key7": "5gPWv1b8wRRYZepcRisq68WESaXm6CpXoKFYoTb3QZycYGc8BHYS29JgcP7EKNxSbegtLzHHoAwMLL7vxc7VwuJY",
  "key8": "qSW6R8Jcsns2fd1NKcwg7Hx9J7e4NWkRNvSpiV9WWDCJjCu9d6Za4F1AGnQvav6A2KvwqKnQws3Q7WLT6qCeA4o",
  "key9": "q5fQM42sZpR36LwkevchQVcjqMP76Wqa9hcSewVnraxUb43Zu7M7GWCzM6khLZCWa3xiyLtj8Jb3GZHxMYRXL6S",
  "key10": "4CphmbotdnY6nE716pjf8cwzLW5KYt9siGFLvogKd9ZXWuNH365YGa39hXc9LcbUm7xPMgNVcbmxQjWN5i8J7obp",
  "key11": "47dcDRKZpk9e9UdJaQyUdgGiyti7Nkh1WSCeh6HsdWpUjDEYGD5LGELBpi1aMQ1xWxei7uwnGXH9xH1JXzrC7ijj",
  "key12": "48FoNb4Gyq6KugtG7Hwv4VjwWGYqxCCW2ZG87Styo4DegNyaGTNYch1JGbZ5CmiXRDXehs2n9U1rohxYTbSfvJnN",
  "key13": "2uvqZUz9jWGMKX2VyJ8q246zfDReYEGb2gRxMAs2NKbc1FPVdVDx5Xgf4Ki6V1kQLwanx2aGvTBGraCSPgkS8APi",
  "key14": "GmjVUGDCedovx1DHdgRGoSvmCAUcBBMBD4xarQNzzu2PkEX2KWHViF99GRSAHmQNTHcbQAemFKqqdFJG6kcFKxp",
  "key15": "5QJrksJaLYvHhXSvjGCZtWCVjcsQWfr5sSsTiHYWCiQpBfUv48kgJ3NYXManZvban5YWt9KX6PfsfsHjrN8BM1kH",
  "key16": "5QLrYnE1Uezi97zGuDogTFU33MQnkFZGMfMoC9V3WZRPHRbLq67d1tmZEac5HV1rrcYMS9BGjMD3L9B6xSV8ySL",
  "key17": "aw3Mj9hskNXnqnQma1SQQ7zLrWhQjSFRk6Ly7VdF1Tx6ETwJPNym1Sg8GyQEYDRfrwxofKZvxZSzpdRyULb8dhR",
  "key18": "3NnL1YWxJJU6X6UyT7puGoNPTo3SzpuUbP3jxATTJKsbskZhTD96sPXWPxAmmKG7By3oek2v8BGmaEdeCaJSQhBk",
  "key19": "uSV1sGePGW4pv9NdV8PnzBqqGhghTisCfSW7J2LDAgxrUjcUvanXCFTTUGegCbUUYApSr2ZsS4Hi7mYgJvh4ysb",
  "key20": "aS6tHZ8dBQS7gGzgLTk1uPa7ehws9zyRUYYDDT3Y9NYJyAEPAadXxgLXbregmGWZ7ia7cHCGxwtDk73Z3LSv67C",
  "key21": "5pYnCNvi4sqQz3Dg4mbbUmJ8eUXUQESFQrfWt6afGyVZmt5SFeQ73XLyizvMNpmDHkjnu6FJCJJHSrfsRh5mc87A",
  "key22": "2Zhc4fykhuoP9bsncvUe8VRRiAMB6iUgHkyizzrSpJqgqJAWnLDiPzgaLiKJAWpAJVAxb1c3GgFMymV3rcBpejRJ",
  "key23": "4hvKVxp2uMghnTN7KcsZnDPEMbsMZNZ6NLWV2FLLBC6bu5gfXSgYdA19uw5xK4gyqtacqZf39bS5rtka6vMMokBF",
  "key24": "2Q94nC3jT5qcp5G1BBTP5ukFTQHGWsKp4Zt7G8rnoTrk2f9egEfUMWQAVhetgEGN1Wwqs3WBQo8fsmjg1Ts3xmxU",
  "key25": "2FCExgwkZKY4jWSq42PNibBKkExqr2ReDExMs1qLXDBEY3j9pfxsy93yxoKRqbzqZdnHeqQqniZNiLDzSxsX9wEt",
  "key26": "5dgtdztCptGLKPHc3n8x7fhPcHSLQbozo8ZhqikYG4sAXevfraxdicwP4koFiYeG495AGQ14PfKs2WTcJz5K74FU",
  "key27": "5gCHhpP9w7dSsjA1W75WCnRMceZS5VM5aT7XcBMpZWsLasUjQU3nkzfyoBfSiBnGy2SkfXg7rWBDkq1hoNZkfcT8",
  "key28": "66s9G9xaFLVKo72UwhqTthjc9yZ55sVHSVrEdDeqeziaGG9kU2CU1WzG4UKxjgEEGqUkpgyWgDBcjSrYukPSMjU",
  "key29": "CSx3UqTfwk27Fs3MZYb542ieC5EkG2GKGnrcLAvRNYRYgDcqGBZjiZoeiaLcBQGtpoLAatJPcE4bmEoBw9RDufj",
  "key30": "2esorvhnDUdMGsHGo7jvnzyx9SvBA5BWbMCxgc5u2z5DQi2hDN4RD9SRd9SULGqmgofce2j8C3Pv5wa3ihnv9kSk",
  "key31": "4g3ZJxTXBcefavScWoxxacnD5YkuYRSL3ocBqzFc8nWXmpGn5Bbx745ggLDSXqCLbDuYFP4H6Ti2g9VJdvhVTFXB",
  "key32": "3s28UrzPHZQzKcU32kyxPwatkQtQxyqA6WHaCNtxvDirVMS3ZzEn3Q77mBzEBnDSFCLG9SZA1B2YqJfpXngRx2uY",
  "key33": "5xuczWX3LR6VZZ2qwf2mqzpwNx6pJTTspFxZDNqxfJotyXBywQTj3UhM39Deb8U36jBkE2wpaVsrsgiTPzBzG4sa",
  "key34": "3fWHB38NyyMB26GuYknwsQ7Fm9UUqNRfELvbXhruDN8cNbMwDEcT8oxirjnt1PE2vM7yL5oGiQkoE9dtc6p4Jv6K",
  "key35": "2dW8jPaXezZC7WVNEHhCuZzjzZMD3pcFYfuCwjC3TvQC5qAp2KfGmrDU5t6pyPzTFbT4WUGHjsB3uHg3xL1e3XbP",
  "key36": "5ifRopwncJp2YSxmrRMY4f8jVy91oyHBBL249VCwmd299LPzue2soRWxTGyE8Tmxihnnev3pSP3KwXMHZu3kCWrL",
  "key37": "GjfevXsA1tjHAwMgQKh4q8BEA9DNh7cMDb5tw9gYm4nLzMn3WQYwWSNXgi76J3HB8tyXEfAAT8YQUPYb4d6MFth",
  "key38": "3mAHHABbnhSpYZGZ8bEy9gfNC27eXeqDNWD94Ea8yxq8WeAe7GD5MTLqZ7pmZ9tbRi5TxGuCd3XZ4t8ynhYcw1ZD",
  "key39": "2FBWDumG7oHUwRegt15RSesb999Tte2cmWGfDLBSdj9zgm6miVZwv28GHHt4LPYLGWg9SCP5RewczKPCWpg9HjHv",
  "key40": "5BRpAri9JuSgkTty5tcDN1bCseKMJXro59DiE8z2MA5muDgxRcvBK7pWJKet9xJ5avjjDpPNg9Da36h63LuVbSjM",
  "key41": "3PzgMBFVpKbN8DSzVGriBXDk4bgpbnJHFRRgaeUSPjs7rQdRMRtNVsvBCi6QjWZwQXHZmo3DatANhJ8Wuv2kynze",
  "key42": "5g6eAVmKzxJutdnS9ESpi2GWr9WgZXx5FfSqa8mVRrxohmATu3bvCge44FaDQjCH3CiAVpdaJz65bk8XJtrWmUUb",
  "key43": "3pwhiz2NnUHRxdRRnRgMBviW687dN9AkbxrrD1m5oobcc4vg4vXdnfraNEM72TVf4JQdSMnbLcX3STJtQMsrtwfx",
  "key44": "2JB9tN7vZKGxPtkSSpgNk1LK5xpCjoDkfPewbBbzFnEMo3wTfuq2ivbKV5DxVpTZSCqvLAsPzW3GGAN96GKNo8qt",
  "key45": "3168BGcDKj8ieWr2Prn5Zts515vcuppdyCWK6YgQ5hJa5ZWRgQkuNysYhEX4RvYeSJhWe6JFsVMjAvt9eaeXjsNC",
  "key46": "L7YFnNDjs7tB8dkWhPgYEe8pAMwoubiK8FGxjPpzQ9UswBxWBgLhf68Jz1gRvuMfv2uQa5T9XrWmPbAz8TjtmPi",
  "key47": "4fQ9RbvJ78Bwiru5aFZGMtop7thJiuM3thE45qZRVbRT6y4ChEQzTEFHwuBzbmhGpHPME3ZUWQ45b4ghkdbEBPPy",
  "key48": "4dMNQPmrQhMZ5Y4WaTZrtvRZvv5vxPbG8DjpiWtDofyPBnA1sSTjzDRdgJFbFVoA5VRemByjBobXkNMP3Y3roQci"
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
