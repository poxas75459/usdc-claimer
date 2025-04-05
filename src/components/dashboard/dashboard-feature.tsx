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
    "4dGQCZ7qBfj9PUywBaAokUyUVpF8FLnX5GwRqpEhnEopy8N3cPuRYugk9xZyS9vatus7x4HzFT6QKxHF6aYoicjq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DtKeoXC6G6iYg5qMcQNbgNe3mJ9NuQY3JXxJ6c6KxdhKmQ1gRPhM4EjxM18N2tMq7SWtbyd8Tk7vXGEeoUScFNF",
  "key1": "2Pr3KoUJJ2FJykoewCiaQ5Exq8Prorjm86fnuKDaT4kKPiAVvh6gHK2J7tGEaNnkcjDCCwEwT7gs9fM8gtHyfVTW",
  "key2": "2RYNpzUj99GDLFFHT5bXavDTfRxfxxsj8KoigTZKvCzyxkMjFYnZ1Q2kAwPYGdzcwzHHFALi9haPr7h1gc98EA9K",
  "key3": "85m5BDX6GzJBbExaRocnGsYCF8DLJ1KLv5MnyE1GYvTH3f3DcVrzqMACsknb7bkzAB3PNu7B8RQxjZcVRQ7Dg5e",
  "key4": "29C5MPeioB2ACKCuXoxRCeayrkKa4tNdmrSN8QTV1wkVHpHZTzaLQ5bavgtNRbvq9vkiD5Huuthw97mHd2PfUbnA",
  "key5": "5G2dpvkEWxGgt29aJ5CJMQoFAPMNsvKRnkmrSvAmXeAyxnzHrKTAKTSUx6wjqDzQ8KxD22W81xTZR3L5FpvH2goY",
  "key6": "3uWVxmqKjcS2TfHiSPNRs7erpMhauRZDnsdvgfkFHEtFrgN8ajzmgxzJX8KhnTt9jWxQBCL4Q3Cqcy9zHc6yTLHB",
  "key7": "2LzstyUwDT8ZuEdQ3etYUHbVTVzbywsVj3dR2y9dUr7p4qGxC7qdq4FncLnTcGVMFe9viAzygqJazpAoe8JJrNpt",
  "key8": "4XZStDYRSfKgAwAEYH9pQckq9EDTP89TSEGUX5aLBkhVxxCj4bzG7S251cW3ubvAL2Q7PYkpRst3KnhS2a98Qyyh",
  "key9": "36vpaR7j42Din9f4MqLUtEFP8PkRBu8TsC6fZjhR2phnnErNE3XiuWx45KHiwzVaYiax6vwrfg783ynLPEHdhYLo",
  "key10": "61dEzUBh6Fg8df7cojqBV9XaHMtZnDrFRFpFHGytZUUa581pjPg9CGgnvCS3TTYCsZFmAnPw1Ba1s31Fb6y1sRZV",
  "key11": "2PAUhN5A4fZr38BmAfA22ZTRPGrhQ8Q3ZiiKvvfxQVFptykQKGWJibidsEez2JjHaFdpCG72Da9cpZtN4z4nZ6Lm",
  "key12": "3sgJbY29VjJd2h4FzxXYgspp6Kknv8dUYYqRXS1vn9XRf9ECLc5JgfNG1D8fMMyzqPRpHSkxAHc41bhkRa6PGGC1",
  "key13": "3CSkadyq1aQBE4dcxRR2xkYgW583q5Zer8gXcftGHcVgGP7LpSAKTx1VGbqUZW5H7g3d4UdAxDijiFf4j7qZjm1d",
  "key14": "Bg9gDXSgFukL5tCaKp8FkHXLDqMixtNqJR3MgFLewhJ9cXnTSNPeTWfuj8WTCPUT6M8HJs9mj3yPZJLbfmeF4XL",
  "key15": "293XcarxyPGMYcFUb298752zaoMSAMReh9iwQG4f6xDrgv7GErvTP7y7KQCzFQAE97oZUmP9Adkn4zkw8AjYB1dL",
  "key16": "2QZeJkDDpnXp8kzmUZwbYgohY2DJcGxt9vCiTkE9aKyCPoNEyVWwC8eaq3ukftg99mFZ5p1PMiXBgTEW5wydKBAP",
  "key17": "4NnNww4tACuAjfwJosGgnDDKZH7k4djcxTGR8xW9Gk6jgvvBeSAnCxFpN4SAaMqfQQRNXsdcAVNLpoeZnTpc6PdX",
  "key18": "5TuG4sNmZZyUwperfkaM67MTR7zPWc7SHLeh4bNChrZvSDBdAnvWfE7YEdu48CRwYDaeT6AForF8b3wrSGYPegnH",
  "key19": "3ULHMj71Lzmikod6NyuzEo4Yk1dsVkdhhFTAtHtUbok5yLWLo4b6Knd6p7EvwMheyZq6HfMkSMU1AcZj7CEvBNq8",
  "key20": "UD1m1jUSsS9S7PSmzA5wcueAGutJLSZ8p3xZKGqyoz1Md3xPfMuV3hkhFTLvCMGwUUKaCaHvfGJumiitirKcZtg",
  "key21": "2Q5PipAXAX8jzWBAH1N5VtC7em7mpEwbzNQAoVfoeWz22bLySmv4EQvC2DQRohka72ehDQwk5mDm5t3EJ2GTas5v",
  "key22": "3USU4VetfVBnYyyDvX7Z57ARek7AcjkmRQvutGfQ5aEHLq8WWEZdFDgQMyJAKDSjTChGoTJfj8rUrx5MgibgdX3P",
  "key23": "3UTswk9FYGp6T4MQnRbrfcNiGCzQt3pXHoUszMNgBoxLaLzL2VrKM1G2qVc3npsgNvgbx3QyAs4eypeFFHgVofMC",
  "key24": "4jjQQEjVbeGiR5PAjNWshAGRrdGyyKBQVrUs85midymzTBzupZmzz9RZ81QLRgeUeb7QU17H75CvLCJgovPeZuZT",
  "key25": "3EVaUQWtEePwfrkJadWD9BqVAMGd3C6jv7mhXAataXAXVg6G4mnPjwE15s2CmiuHnXZHyb1VM1WiT8rtL9Dhw1HJ",
  "key26": "5oA663mVMHfokbszdbAi2zC23jjDHERAAyo8TZwUJKoo5G55owpsVQFBSR8Gk5G33QS6MmHVpxHucBfnhe3c3ZBR",
  "key27": "opq8pKtPKcfuNPTZ3aSaU4w1gFcZdcW9rVg7oWLvQdCxvJMn1fSvVJ2Gwdo6JV9WdNdQhX4X2M2TYBef1BYUR6o",
  "key28": "35sviCRcRNiWxb88e2vEM3tVEDTyJR2cCK6UAkX1wR5qZiu6gKo4AGAnUSYt2yuPWWvLGv9iDodxiv7qDZKDXSG9",
  "key29": "2vM9wf6nMcTvWteuVzvQw1EYUB8dqxBuk1JHBVEX7HgorQ3g5FoYXuDrvbyMwPKQHnabmyz1mdQgMe1f9f5LTM4V",
  "key30": "5apYEDzFdpJuMP8GsHkbBCft5nYNJdQv3zR8jmh2oueJXnNpA5mseX1qk2iaWQ1ZXvHv7iDxKzhHwf6s9q819KNm",
  "key31": "4DxVFwLLFW9J5YHchMTwHXFW9Szhn7Hxf9HspbnKtnvWAmbQqpmEAUpcPy37d36CMds5EecLPz2iYq7RCdu4eHvv",
  "key32": "5e4ZF2QquR9TiuxiRbH2swXKoqLiKzKGvjiboCfTPTPVttsDuWPdHFB6ZndmjacuzHMVqwyVjWCzMujoxkDsYyuW",
  "key33": "3HhHDzX3mdNRP3CzjKbQT6xaMTkR9DdfzgEQTPTeZjYPmxzzAtUGzPfmq1iZHChibBVMC9o4ykVuDACXXTqjPsEU",
  "key34": "42UoGZgpLdYLqgXTanQ2CrgJsewtXSHRNenvM2rZDAtx2sSUtdgPtRpzUosXmT8kx4taXPstCP8dWQ6Czr54Tkze"
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
