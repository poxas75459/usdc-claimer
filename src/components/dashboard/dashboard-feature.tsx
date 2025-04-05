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
    "4irccCgHfvbNM2TiVVsNzcWxg3thDQQfZTNmqUgpTB3J8FHF2N4nmwR3w622kXFyMeysG1vH2YZjTTbZri1bh3JJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kTLbMahPDXaQyvh5rRnx5wNibt6Wu7p7VYzWHpruwzcra7MPk5cse86FNz8dqdG4zEHZaxcghewgu4AyZ1pcAhP",
  "key1": "5V526h1CYNF4ppMg3agz3PpUeoYpNBDUY9KKkKQCDhmBPSXzLhCsCRKcRbQ2oZQdbzPWHvNUhwtj7hDM7wWRZCU3",
  "key2": "53V36Xkn616MF46LvT65XyykH9SBZr6iDzXpr44D1PW4szbJQqzWKsCAkuxybHr3AnBhZNgCktUQvoPU6zpcD79a",
  "key3": "4tfjsLMRDHkuGanmj5ZXsMVsqJcf4wfeEv9Z2L37afVwCC8LSD34HzenkXSLVWcEBUsxQCWqZ636CMvisDwgxTSy",
  "key4": "fDMryoyuDHrE3RhPSXHu7HATF3sm8drhGU3PqSztfrWgbDe3KfKYWqKRhR8WhBeq8MaTnBz1P6JQUNRmJiZdGyN",
  "key5": "5CcL39pjG3YaoHKbyMjTJJrFsDnCjJUzfjfammS3bjP49LA9dxpYwkEhLTV2iis3fByUwC9ZhELPWVKMTtkmLZC1",
  "key6": "5js54bXf4cG72tKWP8eKXefjLf74BtSPxN7EVmJZSVsc7en63DFs4j22gaMvxZk12HWNz3Ku1qxgbpAVeZY4KwUe",
  "key7": "5fNPmCyXVJEQwgTLWmNXHEEAWvuMKsaLYLJUDPVByi1Xdz1jC7tBZptKs7wrtpEZmcwdtt1dxE8rGTxvfzKKKdpf",
  "key8": "63wu7Ph4NSZ9fDD7fW2nonmC3BacPWNBdN23rbWXjw88rZGRD7N41k3a5m89xgKhnrT6LzT3qxXp5jjcSaYa3cqC",
  "key9": "5MS472xD8Cp2RoY5s4L2LcgjBkZLfaryKGkEywZqHPxpPkdQ2M25mBULqmLgnHvfuSeBvTNeoZ1TWhvUVyGyLDfN",
  "key10": "4rScfGyHVWJqkcPPLNGpJVRgzaEaGCVydXidkbwi24oNxDG33kfvSJpNrEvwXtrad8aWz4rUBisaEAPp4CQnzHM5",
  "key11": "5kw6nHkC2ELgLTZ8tuwWdanqDGZ623dqnQ4xuDSHY5nRf1LuE4LZK4cVZZb4DMb7nLHxLZzAx114uywjc6fkFyZH",
  "key12": "64ckMYyyzxodeSKLgXRfPDGTLf1RdsL78yZqbf5qnSvLnmXFB3exQerR5r7kC6jJyMJvKi1unyUnYayfNHuxJWRc",
  "key13": "28cMYK9bV24tdgfCjXqj29vcNpzVKwcaMVs9nUVNgTCT3hwf9PBtpkLcYsVHLHt2861ar6gCvH9awggzkKBSpYkG",
  "key14": "3upE8c8MMBUqFoUpSyih2d3eM9yi3nU3HWWCzUQfyWCaPBGqXvEUAeqwD6pjx1BRBaN1w7ofBLCdHNrQSx3JYTKs",
  "key15": "XHjJmaoDhHtKuHy4WwH7zMcMtiaFgHYAN2MDz4oBDcWWPqAsWGmUh27cYJzN151xr6UNQ3xwKQbSX7AjWSNep1A",
  "key16": "3gjm6y54Y7wx44AMzYwkrD8PofmWWjsz5Mgapc4hidDmR4GRW1h1B3mmv1VzUS4Y4VixGmx5QNBQRE3a7Kh8wqbP",
  "key17": "5DjS9ebMg2Y2ieECMFjp9LfkF3vtG3upg1dutbbmTbaGmziGv7rkpipV1pVDTJ9suWQ1uvv4mmTbCFjerKtgsftm",
  "key18": "MeLZst55k5YihXqb3eVLgzK7w2ot2gWa21AyqABmeTn9nL4T4yuAYkmxuhzG1eB9K1w1SEFyeyGLDgksPjbx1r9",
  "key19": "C8HMHndBhzSebCpLB7iG11FURZwZ5tiSWPRZ5uarWGYZExXFjqEhDzTK95UBkbXYtGkHPV1xSU47KRmgfvCdiPR",
  "key20": "3dDVFz21CvRqE9WupEPz9xStG7YUoweFg1W8D2P65ngfUJwyFxYSH7zbvpSnzJzibsji4ZBPCix8EKZRACgADBFz",
  "key21": "2mdqf1nspsNsazNY4r8bzNxQd5r41VpfaR57b17R7V8NG9fuD2ZuwWL23wr9nSQhouMzxiD8KnoEixN9cyKhBx49",
  "key22": "5UcqW3sNc1vuDSApb4HRZjECPNzrmp4KR1HgVNA4okJbmUn54JBhehtodgtkJKLbNNJywwvqcgKF6thHpLP7ELJt",
  "key23": "DwTETKovyVtXe9w3yB92prjfHWnQx6PsyPasoEu9Fyx95fawYESTiEUT8We5Anyn5JB6YTttjHKXKWRKbZev7nu",
  "key24": "28gUzHLDyq1JBp11byM9VaEJYhzEbqfMKL4maoLxmebvdX3jzmaNUdfW3eKtLzT5jBdz7HAhdGTW95EyiNyy99sq",
  "key25": "NAg6Ho65zpiCa8u5YKvyNUmMmbcVT5FjCVTVzVKnjJiHCKy4pDWsKf6aBwzeQ9WMdqSriH7chq3KxB1SLPNrsxF",
  "key26": "4XQn8K8pkYd6jGoG1XGF9RcHpK3SDRpHrqb1Zya8sbF8xQsjwzZ8nAbjM5HMjDUAGEfidikFA3bmazzyK3En7ryF",
  "key27": "3q1mi56QTLvXfz79o1CdJpMRhtVH5yenSL1S6qoFspT4CJ5asM6EtcnrtgjjrALesErEHqJeUf7DBvjxok86jP3M",
  "key28": "3p8TdTHy54eKnCFHj6HW1HG33EV1bjLTge8jCpYcXom88Ei91hdvHj7o8oJGgzJ1aGraK6NqQ88JfkX2u9YaZDfg",
  "key29": "4hhFHFLB9JfL2p4nY5F4YoxN1xgoEytmv5zAr4GzyYNQkfrCsv7RUmpc2EbTN1AuWbY5Mmq9XjqthEAicNmvGs69",
  "key30": "Bn3tdgnoNcChxp9Tm8ZqqtNjmXM6YgzZB2docA1p6UpD8SU1QWqALiiPbpfTogaoWhYnY6ypkXu8tNGwsAUjE9M",
  "key31": "noe963cAHkxic4fvbRFKJ7vEWTugoSzq4xsdBjsiP3zYUGLoF5wDzp5TZqLzWZur6C8ZRhFn5u1jnNhw1uSNEiR",
  "key32": "3jQ1GxUv4bTbdZrCSYA2M78DZ6iJPzXTLaHn3G7yn5YXvptkAqsbV1cqB3RRTSy8wUZi9dgG448y9d8QjiJKRrZz",
  "key33": "49WAdZVKawXJMcKU3ifibhk2Ff1vLQYxxvEnXwe8XonFc5bSTP9Ymup6Nh6rQxvv1Ry5GKSZPqrDWk1UD4mUVu1",
  "key34": "5RMQmPTMtLK7erWjsvrEJsS55EPzZLjnG6tDRUtE3x4V9oUKgpaYEMe5DBt9GKrpynKUSxgiRuJeV96RmHzQXB7w",
  "key35": "bwN2Am4jwpXLQGZcBrsL38vzmfXzXaRfSVDxysV281oGzj94Pf413zf52sGievsoGqQNKyxgMH48cH48GvXCzby",
  "key36": "7QrwJBbJ3DihP7gjAorF1HVQ829kYUGdM13Th9r9FG32vrTJcEiVcyMrxykwrYFuauKazVXWDdpGodus9XoakTR",
  "key37": "5sV7MdBgAhEVDNX7pm4KWGZHq7DDTtWX22CGVBKFp9a9YBnanz9CUF7qsvZhXh6g1jVwpvWrKV5fVPW3wdo3bSSP",
  "key38": "3qttvkHKNwvSYJJb1CMwx4ZKW2ytkwY19yRDWnBog2ihyAn4PbxvVAVfgn8a7taCTSWMExrvVZLGZXE5yhF8SrTQ"
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
