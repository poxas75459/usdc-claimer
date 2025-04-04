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
    "2iSu4JdQhCuiVHReY5bDbTistbxHQoVt3ewqXWqRgsHmqhdMRAzvCtNTmybh9otzP1ax4iiajrUdbW2iHcc5kUEM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aTv66KFqo8QxQd84RJroc7iTNdvUH4bqQXZ3JwqEo4fo95jagYZPEfKKfYBffKuX9i3vsieGdY2T5rPRN3VzAQs",
  "key1": "4vvGSkord6rWPFm8dgxu5DzuoQnCjySnB6rq7afzfYTD29GDZMEEhHWapVyQyPNxqXAqJ7nbkpBpQjVUVj7yiXDY",
  "key2": "4awmfAxab4dUpTxE9zyTwRMZUU1kaPQxAF7qx65cv3ToQjpJD4Nt1VrUHtukETyRkZLXALxZwpN1oCDCB9TwyrqS",
  "key3": "5kiHxHFFG2VVqUPhNYZptGTTV4FVVFL87bEEivZmrKCJcKNdjk1qDuHC3zoXYvysFu38VgoujSgZytx1cf81PCru",
  "key4": "zSyAvezmp3PQC4EYknNL6VdyatLaJpQ6rDamnDVw26rVc6zzomW7vCLg5yWZggZ9FKzH6nnJfdboccBWpC2ugxs",
  "key5": "4UGTg6TdgPLhL3Y5EemZ7SFwKq8obKst4dVWW8pBUK3xDSiHuL4tNMbzdiBmx5BjcV6LusgZM39FghR3Wy8nRhP",
  "key6": "2NgAKyYrdSt3hkzgAw4wMZpfxXRLxTFgPbdWWW4d915nwbJh5jLgp81RrFCdQy53yjazf941dMqQjohDni9dLeUN",
  "key7": "5q5HxXergXxg1fUfUKPq6AuS6naGjzf216kgcFTzWvf4qFdhC8VJ6QrvvrFdac8b7hqkXBhegQ1PVkQHHeRFDYoo",
  "key8": "4Sa9AojPn9kZjqtJDAXujQNYW8VeMkE4PphUZTGwbk5wTYT1WmdZ6sbAyGDCYxV42KjRdffSwPoc5LWNuBbUDAUC",
  "key9": "62nrGmTUbh9JxRNRRwnxGjXQcRu4cvFXtePCsqmGnmCkTVxH6veGogW8X3qR4dxXvyyjWgYEQruCThdcp3b98b9H",
  "key10": "47X2AyozV5WMMBhf9vnPGLa1STL7dojZNaSShKg1DnLZn7kKcCDUy2nBf3mpLHY2gcD8miVLUgV7bQarJTHxeCMt",
  "key11": "UrDaNvkyZtquSs8GWCC84aNxWMz32EJtxijWvYhMWk6f6Z5jJ5tzUJSEVrer6Az2LEYQkTtHg4D9zPK47Ux13pY",
  "key12": "4hmuojX2yAF2R4ARN2cUMWCLY1Z4uXBH6tpxmAjqMCTqH98xqiLTwQsQ8gQGfhTa2bui6oQwF24pMrxV5oJdWWhi",
  "key13": "3PwQ6G4oWUEXfhZw9jXZHrS6MUh8KAWaXH27ogyfGWuXVft7a4XBzGFDpVVGH9jdpgSqz4MfbCjuYtKFcj55pzqE",
  "key14": "3XAyKg4tCBNs8hT5jGgNMuiL8YpPsWr2YZGTj6oz57oow5nfJJ79Fpt5j5pJzvukHw9zGG1smSi2eJ5iEYgb3XQT",
  "key15": "5N9YTu8bfupmddjGuFcEChTVVnxxyau5nEztsjocfdeWeu6cL6fkjwexv8D3pU9opvmNueAxgEJ4SjirsE9erjti",
  "key16": "32tKhqqpgehhLGDaX7s2DBsYxP7a75HxYB2kKWNe5ovy4Hzfp4EdPCEZAkT74kL5jNethAxCADJ7SEqvdHFkAtRB",
  "key17": "5icURXuM8pr4DtmAYDvpwL2HLwwgzk6WkCPDVG26kZiqB3mNKaBQyEmU1eWUsMBQpZ8mQJ4e4ufBrnxYcx28gcia",
  "key18": "5PpzFm3gPLegKXpLYsMLo2o9qD1bB38TcchromWGMuMB8fPo8QcH9jLkad5Bc66ynHCQtsV43kE99mbWTMt3ynCB",
  "key19": "5khJyfQ8PM2YYaZxwP4a5DpS8VdJpk7PwdEP6CZ1r8k3iqeBS4R9MQfDu14toXnMdjEZWSUkekrkfosRXJtGNtzj",
  "key20": "4A3FE4cdn61oyE8do5cxnWXnTZ7xF3BZnnUfU2eQqRaf2MpGcF9PjybxjBAescVaisS4QYK99FZDHG4GV1kKxV9m",
  "key21": "4eqY7kPrgvxWgHRkMqzQa7LwCmaw5YwmVgDF8Zyb2g4yTkRsf6HQBNvMt4Ru4srqoEjiCZuWd3KugQG3jATTTYXi",
  "key22": "2rqE4snNHp3AH542hK2ystUoBbkD6hCSAidBZcbNabUTFtfsjjY69DWc2Du9Hbd3WDXL5QMYLV5BjgmwgYFbEWbH",
  "key23": "5ChFsf8MfujUhKq7LLoi4j67kbWYctXCZnpiW9tkeEMgWkPd2dWvW8WfGg39smaH76erQAbJ139kDwYLYLhTkpHN",
  "key24": "2319jwouZUgiDCHeuURsitRmYkxXuHQg1qo1xEzDRUuKyD5eVoyfbYz6U9SDRU3FTqr84BVZmZhup93D6VSsgddW",
  "key25": "49WEDZvpYUUKjXYxM7jdSg52N4CiZxXvh34r5kD53bGBydbF6t91dQFTgMjDxa2uMDRHQkb96Hr3VRFjKtiC2rGP",
  "key26": "2mQkjdtQnfVPyMJ5Wm3tRiXsXPU7pfUVRLp1FKkYGDH2Nmi8wiq3btj5hw3MGrfhwAFeLrMuACkbq6aybGwqbh31",
  "key27": "3Uo6BUVXcrDTzKRo2TY5UK8QffZjHZFDKdRoG4R9b5cw12XrjU3zTBRJomWjme8nxUjPSmWSFgwQ26khmgMWSV3K",
  "key28": "zhFyEh3VDcqTfePRt45PAxQaFsjVGLNxWytiQWwNeJ7HrPuB9bb6z2Z7NA7w7Y639tZ4eLGqPFH438ZYxWpcfoe",
  "key29": "5cTsrZGyU1xeMfsb6xP7kPx5jF1DxnnEQhUP1gVqVziHKgEwWknHyvv4ErTUmPTYY66T7msh7mB6skEfXGuxpiqe",
  "key30": "5U3FbuydWSDWGaQ7BbM5b3GAHK9S4HC2CoFrZZ3sxCyTDGBeQeDYQmJfgb5W3bgpzHCoMZ37XQeC4ryjqi9WtNKz",
  "key31": "4nUtALRzghqDhMUbgttaqjfsfH7HmuBkaW2Vf1wzEh3Dgh3x6Rq9rDDQ7gvPurrZmkyqXmqH3nYX8j8y2QNbNADM",
  "key32": "317HkjcJRoLpXY7ZgJQuGFjk5fJ6CDPDHC3bKrGkjdxafNbX7fm9dREhCenAawaumk3W5E6RA7tXGJNRtbyRd6Mc",
  "key33": "3GzYJdP6ApAh4EGGE9C7xgGUACJue3WBYGbjQmiDLXqvGB7Dpfq7xg5heohTbdD67TzwPCcXxJKSnpHnia3SSTyG",
  "key34": "327zgVot9YNWhNeoUXutVR3ijnoFQJU6qXjm3JycDDMxj67oHqdpM5ujFsqgRSKLHLBNH19J31DA2aZA3EFNYXi1",
  "key35": "4oMVEyeXNbmjnw2Pqpmk5fijknxwh4ptNAVwfqyMbWPXWNLQuqDw2SeUcwT2piJz4u5Mi5xQGEhpvdrywFzNvsBR",
  "key36": "2qWhsb5Afiywt5ZYeioXfnN3UNYWWR6tqzcnuD7qY7Fzx467jddfnqKMhS34bMkGa51vDde6AtctbNix9h3p9vjg",
  "key37": "447cwqSQ8hWeW1vgL6uSf7vauD9S7FViyXKBfs9BDXGDqznJQedixtcYdNGwBJrBR7Kwc5nfdhRmgdJN12witix6",
  "key38": "4derong6Lrtwb1bwS9KncQo3iZ3hhj329XUstto1CBdHp23wjqRsPgzn2eTLiscv5fwJDhDhTbqxEG5UV4tJs46U",
  "key39": "89P2xWyPvEkGg2y7ZnGzjyWCb4K49AkjJUtZdzb48jtjt5CvtNtiiRXAKXYLHeqHpjrGWWJQ1iZMkffgM5xfft4"
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
