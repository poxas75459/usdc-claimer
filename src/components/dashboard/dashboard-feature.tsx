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
    "cGYcJHzuou1UhPMTFYLcFqUxw57QDp7sPyEtBqbSmkvAqjPfNRyjVf3d8XzDoyBnGpA8rcH1E9WLMXFrB7R63zm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fD6KTbz4a19imd36qjoM2oRpYnQzRgy7gB9yP55MMyvmjLEipquS8kQKttkxgyVMGRg9CCjciuS5XkZ5PLRSSM1",
  "key1": "54APQU7QTiV8XuBznksCrwnKP2ARY9uyAGVLiiWJQRuXXUkcGf6mTjaddJxBXNsNaCqw3Ng3pnjpRbYWwM1kTqxp",
  "key2": "5FvhvpGee318SY8MR39paPPYB57jBquoawsLft91MUPBFjzNgFkkwHKJLkN5zdxt3Y8pXzxHCKiyH3Yw33V1PRFj",
  "key3": "5BWLTJgeirzfkkRS3Mz15TsJiBjgtkTZaLfpoRiqZEUw74U2vnxeG3gHgAcMVHNJJiLhZT7Hk3dzoAs8Z4BYnmsj",
  "key4": "4eVvE8fmiRx7pakuQEgUcC7Xqr2jvDUeZXaXFZDUidKDZFT2hUw3bUgoAXLrX68U2QCBrxKsxoDhMnXTWGbjWoco",
  "key5": "2qdxwj1cbYHJ329RLqybxU9Gc1ZG4nhYRp3Ewvc46Dc11D4UZjfAAXZxgYcQyEXq6NAZGU88r8HFLURLUGjsxDww",
  "key6": "2nza8U3u87ZA1EvHbNp9SYDSQnHe8ns68EDzrreQ2buHY21pBcfWxFa7DAztqaGEPAx5FBkSKM8tahkJAiJ3Jgyh",
  "key7": "zjagJx3sKMesuJDpvDngAdJ38BnBnqRJSoqfNcjn2mCp84EJhyMM2F3C7zXLG49FUc4Hqu9SZihGwMpQHNfFUHp",
  "key8": "3Wiy4ALjdLeo1AvWdRiNC1XMid8FYYuGjnGQomAXfnk3P1uaDoSU6EiHcy1rYN6tHnBrrn86sEDwfTH8XYqJj7N1",
  "key9": "3bxfNGyrjY4QqeUmfS71ucLeaERwgPQsT4MCjoBBrtWJs16nFZy2fud423S9Vh7eNaB7jjDuqeNbXXby1aY8jB5V",
  "key10": "5wCiA2qka1UDZ3ejPzE2RnN3jFZ6xAFX4gvntc5hfXoNbJdtdjjVy4ZYRSj5smhuoBsTeMMgdbsUdY2nrYMkXHGb",
  "key11": "4BCVY7vCmXUoUGP66Lv8MtVw2wzKrBYtXqC7CjgTRF3QpYQcptwDZePd3xEXSPfKB1gji25zAkgD1uJcCtW3dzvM",
  "key12": "2dv6pFYSfsZvGzfABJ4J9mkvzzQVs7JZLXdLix753VA215o65SKjA2GgwC1zGQzHyTxQcrPp9jsMCDyK1ciVLGxG",
  "key13": "2QbbCVw96xgZKLyhdiisWijuYgQbPurGdxEFBe9Wigdug4NZ48Hrau5SySCNKfWT18gyMfMU4enSZnniaMiBzy7n",
  "key14": "4CRwrJyoHduGvwTvN3p9W8gFo2zLuhEsxBZy3yXq3Gt2iw2yDrDXddzhwLgqkp8it4in8jpzXToswzBjFQx9AnEH",
  "key15": "2AXotRszwE88ETvbUimiiNozxThUaT4WRQPeMzDCCu8CRJP5KXnZNRvqX3FFmMAcqkgW5x7ATdtAV3hbHejT8LGQ",
  "key16": "5JwhMLfPQN3Q96PxuWDvtLHu6jyhpJxCXuDVb6r9MZXJ1G6iTYx34fGb7GHKwcYjPrDJeAToJJqPWPhP4B6KHaPX",
  "key17": "3Y2M6DAyAFuvgL7FQfM5NxxzJD9hhT8nTkSieKyiyUBGwyQLohN2k4YepHvoTqhxNjwDM4fo6zzt22Pr3jzKTp2U",
  "key18": "4kRfVTLnN4qVMSFaVdqyJaepuzwv46yqHRrLD9DLm4znyT8k16A1BSSQBwvV5bGPuuejTAECnYUMSyCYmDLfQD7y",
  "key19": "28CYRB5raaUFmAg2rXUVcvRKQkVqZ6dWcQzXL7AoJS5EHLMrBrMiyH77zBriCVVkp2M5TCrjQ5CKvrjBBLPgEs7J",
  "key20": "5LPh2rZjKsxCWAjF6Nna8442qcHZVumM6km2dXKZHV775bL8AkLH9o3JgFwexQLxgdwr2nV6DGhGDfhyVr1FDHKk",
  "key21": "PEH243wRmqmThgvmuapm9e8t7MJnTJoyaLSJhJ3GpmQic8kQ9x3asBPHsn3u9F9XmnZdaqFJwwpmfWz9qtmQxz8",
  "key22": "JTnExzcns5A8rM43VHk2XfHFra1SeeHTN9nbFrCRYAD7gE8cLMRHwSZSWpBmE3a4CRKH7r1QMpXCDfwj4q2if1D",
  "key23": "3ePMShxgdTqV52QH77QtYPBSZgMKP9HWrNJzWgkNS5QzTyxyK2fZvYiuXHJugbD9K7BEyK72CbmtxWQPccWZgRVy",
  "key24": "3xwiaoABTewiCpRGdbq1ic4pqqVdDBZTq3AKkg5mmrkS2QAb9zEUZ4smHJDRf8PoxYyTSXPPav76rdzEt27QLHaJ",
  "key25": "5WCutdYaPjs91tUoT516Ls3THaY5DckZEHSwJnm6AR8NAyPwwMmNo7ojp72FdtQbG32V2SAoyCnirtpgYqBjTXV3",
  "key26": "27yXtMrVwwR5TcEKm1YyXzZEiDUiA9QBS2iWHtZgVNfA62Hu9iUZnZzDuYTwGd4KjijXMYMXXiwgfGhxiSWWNPuz",
  "key27": "4kq4UTmvUwFKCJG865L6KL3W4xKrsmgNMHvMRJn5e1fQbEgmsM4JwSsCTxyFD4th87XrSfJwGocRQQTaF6XFaaeP",
  "key28": "3o7qPPFZmrQAfNpZLU89XRAyhbpx3SaAxN4Kpq9jU1unRdxsM7MR9G6skYTuqUaDXTCRA4oqLt4tuH2qMi4WbqfX",
  "key29": "HsRAG4ZiSUZUD1crkGH6V8ZSR6hukj1r4oeZ8xu9CLAuSa9RV1aGFz2kixTX3b6tuaAYam7UZiRwWtk8gULBBK8",
  "key30": "2T3zEbYRUeyn7Q3j7m6gPezn8BsxPGGh2WRrd7txpsQhxaTdTwdTefUJWTvctxhqs4NwNxVjMc5eqnasPJEGspbN",
  "key31": "469G4i3JP4AKkoCNw1abuEbjv2ahysHJb32xdSqY3Cud257EgH7jk2SYLPYN9vVwRqBmAcuaoRZeZ9dFXueS6vDe",
  "key32": "7syT5xTocNtjdZhGbGCAKrF1qA8D7noVcGZUi9jb87CFNXygwUP8t1BzG2sVCKtLgEFH2KaL8TwS11SB8Ztevkk",
  "key33": "4HURoo3CSAgJrpjPcZpjAPHih83yzBehaY1qt263u2hmoqGfztXU52W6zLzoCEizKeBti49hWhsvW1FTLn4V8Ab",
  "key34": "2cpNXbKhhChUSM8jnEqvqkn5NE4hEKA1qkjHyAFtY9btoUakjGJA2PwqV58P9ejpfxa7JvahhUPrZkfoizLiC2cb",
  "key35": "5SFJZhCU7cnja71MrSBBuBJa76aszYLQsBQYnMnHfN3ipLnoKVcMxSqz18WPniQXorAJdJqsJ13jm5JGR5YUWVjg",
  "key36": "35Y8BKwqCtrD9cyRYZJd9jYzpT2Vg1WJYWkoVjYNCULNkPXdPLr3xpdRNvqWNsyhAdfW7aL1GjqpWXu5gwTaLJGm",
  "key37": "4AD2FEELSs77JuM7Y4BzpRDeroNDctWqyq6xsP9qXjmbKxm43Au9SbAwhi9QwakWig482StEpUBDDbaVAV45ZBi",
  "key38": "3zt8YeB9tGZ53YWntrJA8twqXhKeH7PmHMdDYkJMSuH4GXyqJ1AvoG8VvDsX1TLpD61u712EVKRAoD8mtdXGs1f",
  "key39": "2coWH1rkcLbSQ4W6toRTsutpBWwZXgRACMm45irdtRTjGaMEcq52oW9FV8sTRrc2T27GjQpi49aLvgqcPMMz2neG"
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
