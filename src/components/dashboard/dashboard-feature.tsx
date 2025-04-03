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
    "FMRxxzSZha7ALfg7UAo2xw5G76whQgrZqBiBL5vFPQXmbcWrXLCGuxR3GdS2F6H53HUr9kG2WMQXX9uRevZ6Rbb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "71FxJn4pBPW2pWC7Ghws2LvkhPm7qsefnCh1pNfEn9WgW3d3deaHDFxQ3NXBxXbk8bquqoECV3skms3DftNC48G",
  "key1": "5414txnaWZ4vfJ1Z7Gh9rbPMnu3NHcsFZ4dKFQbiNMZmXGQuDxtfJnjQfqiuhoeHzrWDmn4t7WDzHXX7R765gJT5",
  "key2": "2Jub37CB4HeJpQ5vW3Fnpv9XbRwtcYu33Hca9VzpYX9oyvscmjMcQ8bCvMhEKFtg4MbBFAjKKf5PicC3C6FzDvqm",
  "key3": "4Ypwo7XbLVe486qG251BHffPUhATTF3ZQs9STfeCqejr4dzfuWNDKwWMAv77XXBX5o3BYZ7c3ws1GP7qA2xPAeLL",
  "key4": "2iHQdyixaSBro9TcfXL5dLAgbc9hBfgjBrYG7q1VceKW8ro4fgXXFZh6BAG7j2UAp8PT7XgUCzoawAfR83A35qCW",
  "key5": "2CvLSV8wnjyuMFJ7hnQ3E6yzUyCDx8V2j3apmuNdx6Gmyb8pLfyUkRjrAm1kATNAPnMzPyxn5UnM6pBtWYHnkuVj",
  "key6": "3RXpESUzG5qPyYio7EMnugFZeHU34YgLuAE2nTVpos2aBaeMSitaVV83JMyW668fnXEqLVriceLGPRZaWB5oRNAu",
  "key7": "37FsJWhRsEp1jSGTAACptyDnNVxEQbZRb1Zd3igfyNco5vk5t7MBLacV5hvZRJNuHxpwDYfEpDJgrTWpvt3kKVpA",
  "key8": "2c1UX5Ui89nJYidZiiD4CDopZ3cecRjXKeebLG7uurnNrBK1f7C266oQYPZcZy31q5CEdkksWwgfc94awJSakooZ",
  "key9": "4nF6yqQNLojNmCsmZeCp9hDqRdTjMemLhFhoH6RyRpytxqfNVbBiBQ95qb5Dw83iaBtz1nCANjfiwxyBxfe61cX3",
  "key10": "2DzdEMoEbFXSU7yrgdJ61NLrAsBqVm7pmrGnbMLCvpp1nqz8jBPCE7BCeCtdoWwA3etyEFYynmTo79g7iJnnMKeA",
  "key11": "2fDCgihM9iG7tSW8jZUmngyQEMkciFWCWhtegy6XhgVX7pQ6umqJLq4h9eM3HWbGHoRUm4HKHVZuWQJE2dxQyJRg",
  "key12": "4xFYJDvdhXoNKE1EUD8uYm3NQmG12ZLH7mht3mRDf1t6377PcyrE7gfDcST2WFziU3Ar7MjbSaWZNvRnjHXEvfYL",
  "key13": "3cceEnYGUxGLBjozoEf5fSYBoPwfczticMrGgAn7XMEjMuXww1htYU3NzgohxiZp8iHmZpMBYPmvCwJC2yYFCZ5s",
  "key14": "4bmczUPKKFDUsAZpanHeSyfKzEnEDKATvzM2X1TgzDXGnuK1MvHHyBvAp4MdVmfTSpfdYUUQHZrZsE589QgpbWsH",
  "key15": "38AZrPcjMzReFEDvvY4x4RCif33g3wpELHD8nKxQC95wqkbUokKeNnjS5w3UMzARAk2P976GvvGvw6CuEEagqtTt",
  "key16": "65kvNaDb2demJvw9Hd58NiLmjm7WKxa1WQPuDwsNJBKSp83PbC3B8BRGBxma24462Cj4SqgSFpxWNuYQNC1nPybM",
  "key17": "5zq6bgq2tLjwE1eK7QajBjeLMCshudMXPJMuTKtHqcvmwa7tc39z8ZbCuxWEKtrJZ5tXC1cNvyQbRsTuEPfhabD9",
  "key18": "2uHpahBLMQMETsTqgBrNav49DeLH4LFL6v6LN1tyfWbhr2zPvQ5pi3TfPBW4YpcXo5HPMYA9JZagwAYbGbYfpdft",
  "key19": "qT7zGGf7LoYFLeqWgNefq6hyBtKopXZbdzaJN39ALGsdMarFPwJcFAvZKaxQvin3diiRQDumyX9v265PHT9581r",
  "key20": "4YSwKVZDZ5sGWbjp8s6sUpvAQg4aLxBTxeNPwq7gkZkMGnfsudrkM5JE4MTxEwGqWYh9zLtZef8Kyyfjsjws6F9w",
  "key21": "5sUYnW3viKgpnY39651fYGK7ayvNHXqfCQYLLpE7P7YJkT6K1Dv7cQjKa4M3PCSN6vAd17LYLZ3XA9LZ8ezbvAHy",
  "key22": "4WdQ5X3xtCon19oiKH4mTBiTFah6bLSSN1GnqXkwvzFkZmbhRSfRviDindEQDBwLQLYgwZZtdHSSmN7G9i1nKy4X",
  "key23": "2v15PnyKoxZPuddndGw2aKSiuJksavdU2oyCE6DbrX4dk4JGmKuKyvH87q76pisBGEqRCTRvmXGSgrWtC3rcuYmk",
  "key24": "56ezuXK7k5qkuUPozrr3Najdt48wYMF7K1vNdZXmVTZoRinEj5Cet9wFEGNqte7tazdVjJTaV6KMhLmVP1NKoEPW",
  "key25": "3yJNfcMeMycS2SjNPsjDmtfWjtbjgJoUNyXSsURAgRXGAHn7SsNHe6odZZzr88JHK3o4indHmGfLzwfs5vnPnpme",
  "key26": "2UcNbbx3oQG5sygkwL5eiNqgJZUYb5wCnLpMPMTZL2Ge5gyk1ecx3N3wDYj9bRaMjaM2MuA73bLL5Fqxk4bNK35f",
  "key27": "4gG7LeonekRmF5aAivABfM73g7HWvGWv7uJdCEXYSrxoeg8XBTj1STs9UJrYvMqjhdM6WCSQ2wsM71rUMjmh6L1T",
  "key28": "2v8enBQyTRnShEZpJRPSJE1ybyphehksaEP6QaN571RmBqZNxzeAP1KeAKcRMHe3sBDG6PKRJkDxSo5uxaeTtbAv",
  "key29": "GaYQPSQWfaj9BucxeJH4D5hVvkoCAGtE4VuxkJm15SADVkMftPjNuyPQYYaDG8iFEXw5qqDNwejk8zTbhtR3R4J",
  "key30": "4tm5qgwQPYYf4Rj7Bz61uMn8ijgAxWqoq26SqdDsRAwQJHzMuCceJRQh6aCr1LKozFdRreE1YGG3GyAxFwmZTHmf",
  "key31": "2UjsMB3u5LP6Jmk5gs4czXKRRzqBx2y7UGFBEufhE7586sVpJyaaTntkzrgcQCcyqcAUFtW6zo1r49NEoDiJEVcx",
  "key32": "4MrAK5H6c9oheMkuad27cYExd7ehAusRXmHiJ9wU8bCg3isDaHmA5Tn5VNTwJVWUwxji28T5G7CdNPwin1z5dQi5",
  "key33": "4xLVPsN5ea7wxt24te1QVW1DYJrndKPiPo9fwn22PGNMSwaz1hva6W5jd92VvQecHNb7kzhT9te6Qom9RtnnPQ3R",
  "key34": "AoXsigPPk2LRuhQaLPpyrUsjRJuSc6xKYrWNaYUdNMmw37tRdLefFQTirJJnyUnD6Qrg8UCCPzGnVzx3rk23GQe",
  "key35": "3Q7uatcKrmfJzGvceoud4sv6kvy1QY93CRGeBAvztNBhrLy23DMDqbdZFv6D3Ass8BfBPhxcYFcot8veQmkK6oK5",
  "key36": "3eNeD7AgjxCmJpEeoFbTQDbkRoqSgPiVyQNVZKLefVZ3UfNYhntRzpgSuugMs4cNGT1KQxkMimsu9YswnWscqX8F",
  "key37": "4XrvZQz5kujqxCQxAUESqpQ6ciRFWfLj6qSovCZM2ZqdkPfaaissRxjWD7SyCmkPviNNRmg37MSejaxe9jyH3xQc",
  "key38": "3mdxx9tigsuWCFzXebP4ZNdJ3fvSX8G4gGmLnRhDaNGL5x3JvMe7d5fPSVx5rCtdyz9jTLPXzmxC3L89JsZLrJi4",
  "key39": "31zVx9sgTphQUau4hXT7ug8k8iHFtfVQLWgZGe9FfbFR1gXQVLiFBGkS7DJi9ZXRqggBBQbX9xRBjxD7xTnM8yDz",
  "key40": "4atD7JW8Ap8CYqkUAWLRSQzw9f5Rz71hV87JghZp4FF299Q9uF7YVA2NHG68ZmERx3aiJq5Zms2nRghq8Tisd6WP",
  "key41": "UdyFUj65rHRMed7d7J5tHtz2MNW5ML6htoUaHgB9ETmpQaxUinsbUj1RanapgPmVYktQLgA8KKZYVZ34RWDUAxR"
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
