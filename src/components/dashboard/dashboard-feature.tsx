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
    "4MYUgUDr2r52MXHhv6UFqDLX4avWtSZTZMrKTNjzerzn8A8j6dHVejvdwXYteN83Wb7YzBZcfoyiPtGyHxXrCvQS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2evUQSyUHauDymeHsEZ24tr62isixiLNcFtDTTkLK43noNDVz6RVEJXDbXrwu3E2NH6NRXBBCxbnguwzEP9ueD3t",
  "key1": "4dVkxvpiYbTv3zg6oxXWiRjPVbnqVE7bWzLX4MSbdKjfgoGWBHHLD9ECEPmfkBVxyPuqJcFq18Ztiw5P1BGyeVFG",
  "key2": "5bSjmRt1JnVf8UF7sNWeaZoHY9pYhQ3JT51dcuq5hSLgVeKPjXvrecsWG8hEh3tEMxJioxR67XsuZifdU253gB51",
  "key3": "5fVhnmzBVJYriReSW5ZXMebB8w62nDykx33qpYTASWDVhGNH6A1ha5PHJoawE8Tc9UTNTUNdr3YLxz5LAPvVFxCb",
  "key4": "RydoNF9WJBzVWk1qxfneaLpr25wWbTG5BHLo6ySuPFDSpaSmaWF5o6XisPs5X8NsEiJo6wuuEm4nSYtkjJbhC2c",
  "key5": "xWNZADjNiQ5ixm8PpzymffapMSJ1oZBheCePapTuXBRDjAHAPkfi4fnCjFA5bv1gvkheuvxN4aiTvn7eiLehpe3",
  "key6": "4AAnATj9Dn6wDHwWsrfcxsQmg5nwSLV3HfMrQu7upynxSFDGftWbxi7MGBNnBJkYrmigJJqvxX1CRD7wJd7kH28k",
  "key7": "5gvk53CMeNTGzKxAQb6Ga5GnmEECFBmRA1DH67XAZRXWJVJ3h9BzTWnfHifYkD9ofR8hv3m5ZuvEYKWQdvttWN7J",
  "key8": "3JeL6ePFU1fEAb4qSpGvRkT9cu82GBJBLKoe1ShVeNaEyh4XzKfHWAtbQxmd3dxF9jYvx9seM9uFZZCB3QsksZTU",
  "key9": "5BfzJvzP5xGgtbSBLzvH5iA3PpbUeaaWwhuvvZNmEs89hcPFCkn9iaetyaWfn1Fq9VMpmCiwcctfJ8fiVN8Cv96q",
  "key10": "5q4s43nJQqQ8gg6VHFpsHkLdewGmkxptyTJvjaSb8vfeQH6tjdiJ1NpLxQwRiqqaffdquM5poTsMMq1A3mgL5D6E",
  "key11": "ibiyt7wGyjkpvwGzN4QqtArBgCkAwfDhBwZm6UfRRbnaZhFqeWGSmvFh2UiYgn2FqdPpmaPsnH3Xz1VdoiqMDcM",
  "key12": "5mzSDww9QxgqKt7eVrKJo2dFLKtAjngih1VC7MkipynfYeias2cv7RoYCD69cVWgEgp9pG77GtSFpGCCN7CKrKL8",
  "key13": "hbHQZxvmcT6TnCgNFqs2yk6KM7a55c4WMFJA1tPPVsdWww9Zx2myS7ARo9gTpYMsTZA6wfkk6ENNWtRDViyLihr",
  "key14": "Qm4DNzXj1kU7RzYuYxkXjTmNg22bpwE1zCManYBkfJEN6PM1nQ8kaJU5q8jZ1SLu2maaFHPBFHJTVZJ3cYRpTAm",
  "key15": "qj7h2p2uCoJcjQNE7mdABVYkkqfdgxgAStEwa5xBuvneRgGqFVmqSouWe8p3bKFNpkMuLoagxf9z2jF5pYmq5Wt",
  "key16": "3eiG4hMHypG3fJ1qTFSLWVEvxodFpp1iEP3wjjbhpfTUkyve2jb2uvgajQUnkjt6ei4hYGfj6MJr3G7VZgegsvkS",
  "key17": "4gpYSqS747rTePhkaFLuYVPfzdw67LVUJr7wqnof27GQaa5zFjHsZdg4NbzPZEqAUYFsEHbcyBXRLMie3rTEYVz2",
  "key18": "5m8LP46DC9TnHSkNA4fNxg8d66k7RYJpYLHMDoMjmuzBUAjdx3czKcq4RWokL1S9FQjgutwGnK2rqNSbGkDnw5hX",
  "key19": "42HhstaaBQBwfbhygbXNEvmuLsNMBgwXauVj4AVGRAWGbVWq1fhgySYvCkZr6WvEP4GXW1SoE6Mgc5tfS1sHuiaH",
  "key20": "4ffxoizXqFNBF1Atde2JbvAZLHEL79jSbgnYxrGaNG3jV51sGBn76p1kAXV5epAaJNRhDgNgLw7xSzk6DsBf79vV",
  "key21": "4vDGHjYEeqfUipTAPzzMtYiVmxXAXwwttP6ofDwbPUaHDmnmU5gjqQzGWL6ktcFioAXstCmmP4BzvQtCaWinHUQw",
  "key22": "65TL8oeDXVRWgPT6oo7yRC1vdvyQRcnFU8jyU3bVMXJFm6VeW3GYUzrg3sCNrw6skUCEWVfPLUrRH1qpmj2jUNA2",
  "key23": "3FgEstgn2y55tJUz8RiBsJ752ey62iJYSFUKBZDH9gC68Uh8UWDHq9TjCxuHNcag4RJmnGf4m6nNp7jMGVUd9teN",
  "key24": "AQhao7eqT1qvZ4QR9c2CRFEcooFPoEaAoGESGtn4CG9wXGtaBqshv25kQutNcyQGf1HZKttGE7yMwZ86PvrXQmD",
  "key25": "64RpwRuwjJMhDNrHPdZgpWQ1voe4JYQqpUPa9ddyrGUw4VoVh68K9td1mD7vRj9wZM5w55djAQZYfcFNNjktFLTw",
  "key26": "FurFzwD4y359vSp5oQfkaCKftk7fVJuVaG1yey3vAsNu4nD6KBd1Yaf3tEBye5ty2vE33oX91pf3CCaiFFS7gkk",
  "key27": "3itW7PXpz7j3Q12uMwbQTDitaVt4ZiQbXFW1bFu7a3J3ULAkg7xGZmkpfzrdrgsBdR3uZcGdRnvmiKwVAs9mB6Xx",
  "key28": "2vbdcY9HFYZn26mSi3YskteTENjczAEowRn9VmZTCGNEMBX9YEU7rbwb6WzNWr4WhBnWCSCofUUokMfieoK9rhHG",
  "key29": "2cEcaQ8aSe4mPwNo4EKcJN21AAjkkNZP1ZoJXLj6NioAbburAtYX2CpBwNfPYouBvqhR9R3dZ4Y8fwd4g4uPuEhJ",
  "key30": "5SLpHHRdx9PX3zuJTuUd2aWXH2A3e7XytDg1VBxoHdW64M8MPrKWu7GYGzQkKAtvxcawRrWaMGVoJPn9v1ApoNZ3",
  "key31": "4gBHP4wdd9E8zefJhmqaY99CjK6fKAyq3U4xEzkFUCyNpuZWuJQjMEaapJgRrk5bVqXP2fESw75BNZfHL1KRZyJ3",
  "key32": "5NQcQTEVzkAokFtJqhfL6mSFvdAkCB2UwBtwB1xXkhYeqjDJkgcVsKR2WazHziJQ7KUHKTWUye32xj4Py8Qo54UK",
  "key33": "4novv3pN9aqLH16S54v9aS9pztnKLZF3Jq2z2YyGsvH9P1wBhYossrfiEecxpTasQSFZVzrzPmQxLfAiYA6wGNNr",
  "key34": "4PQhDtUotXRDEiKvbFBm2Z1i8KX2DXU4AxGwS3Rxb2TKSLqo8PjXSirtmSo3waLeHNiV5yj1GxE7yKTxSowVx5S8",
  "key35": "5obxUiQFnB6ic9b9Ga83uu28J3zebKfJs5Yj17txaCWFshcNHdLYgmEUqYKntSkin47roo7hegoh3BfjcF6knKZG",
  "key36": "Ms7Zq1pgoYMShv74SXT2tYUJSeU8TkLCT7jTiThv1d3d2Y5LGS7TYYSYnSwdEC4hcPBi1KNeKbjt5XgPD3Q16Ej",
  "key37": "2PyHLwsaZMSrmctr5XjL9kWEeQdpiA4TcxfEimdVUYNKgdEmoef1LochAkKUBtGMa5hcxPPvYwzFNPYa92Hr8nTV",
  "key38": "w9GbQ9ed4zZft1BvvqKCxQtkZtW1W1iVPWPc8nZvroCWJx6MVqWMtUuFqZypd9vEmeKmCFy2qpoQejiocEAG4eq",
  "key39": "5MMuSvyHC5JqmYQmBd19ugoA9vtL21aW7tHorFeuDd9Ah72YYRmzjxaZ9q2h8xVEj2rAib731rx2BUXitBUYvxU9",
  "key40": "udrh5GqSHhp47p3pPcDo6uSDChHgEcsjgZRGNgyhb79zLCMYxHQnNjmMUUQAkKqjyCUsQGaSUzUQcKydjbkViP9",
  "key41": "2PDpLX9gtTUBbbmxN3pXArrNei84dXdWbPtAsZxrM5kYsQjarJqrinwtb5enYJqhm4mSsstz1M9Gxe9V4PHPWMAm",
  "key42": "2P7thsApwpBFDR6Xv97kqa5qm9hu4AdkqbxSGWkqjnBdDUo51NZ5g3ezbTstBVn6CLWY4ezDpxdL8hJZnX71zwRZ"
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
