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
    "48EAozaUgxf4g6oZRSUTgKPb9EW5Cv1TE4imGSQsATaBdGY7aGLJiegxBLNgb3uTXFPjMJopxPyvCtGgYAKsKVfT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EQRxw2PCCRwAwfB3AKeVaF9oSTuqkU3Wm8r7FdExdeukNKnrrDzepQzvbb6wDKDf16fWLtCYQGQfNjmQFZ8UJWw",
  "key1": "2W69GAMHTG18icCeuciLhbf2nRGbE8S4BwdWEgrTe4s3Zh6vJ8qEp7Ptd2PrreuG2ez9p8LXaoUJNwTjALq11mUc",
  "key2": "J5a7iyFevCW9qEMS7pHEzk5rNb8e4GjJ8wWDMGzyXwopofK4jGa4UYuLAefpdkTdRYDg7FYawBAbmYZSyQXWfMR",
  "key3": "4bxpsPZn5sAjcxoECo2jujs1i69xPDWCMnazs8yQStydpQrYyqTveaeDmKYKTUckAjACCBd1BctKnQNfAVcgPM3",
  "key4": "obrjPMgAKfE4msnJJr2DrsPdvexcg8gcZgiEYKh6YwES3CQjb9wqcwTVSVx1HZyMCyjYDxsUh3qbpShzHAJ592t",
  "key5": "5XnBJkjf9eEuJYSmRj1nuGxt8B78F5ynxubAtFbvmz5tQNrfbhTkp5P9R6NfbEoE4LTT6Mhmbzsb4EZJAisFRJZF",
  "key6": "48USdZBkmustb6FrB4tSSCmhAiv6jQVKVD6nKAD3p78RKKBAA93BW1aVKdvG512kphVNiKszmogvDbk2oNWZd37T",
  "key7": "2Urwz5s7ZtVPEATkaCkupYZpKbj8RU7ifA9YhYxzcTmAnNREG8rkkJL7e3SYasVM7MKkNWqE2AzK3cytuGDmy5Jy",
  "key8": "2gxpiT7meWf52ZYVK1F2houj6kdS8subuJGCk8tot9338AY7iuFB9YdRsCJh7UMhcbw5L2NTZyXvZopd6z5SPswX",
  "key9": "3gqtr4CCwDzaXENR7SNSpFSauLsvkwzoVArRwkjPSqwpg13koyxTsZA8GF1VZ9UM78tPCea2YUNBGRH9GiWQmGqL",
  "key10": "3Zquyf1ZCfE2DU11TAoFfV3RsSiyCqgTM9SLZ9L9gsjpkrnpgfjgitiDxDBtXtMxh5GYiTM5owd1poEWPkDanXXi",
  "key11": "2eeR4BXm8tkmEeQ6BRcaSXRE8fq7FeC2694wPNtwTugM8oViDVt5Zyut9awbVXvquVJBzR7k9emEHxdtwFryK8Gp",
  "key12": "TB3adJKaLeQjN1TvJFndM7KCxkF3hUgzaDMDbd8QLamcsmwHNNfBahYXzcQByBZs6A5rJNoGrfgAV7VpQNtxHwo",
  "key13": "335o1rzckmjyBuGVEHE1HXuaeDfSKrPdHWoZxGXzL9ECh6dimaQY3L3FsZVtSsaJYjvCj8FXU3RPLEBQnxhxBTWr",
  "key14": "5Q5sVkvXbJVQ5arEdt2N5fUn2t7cJzyQA75wv7GqTkSmngtPxuZQJDFm2cX9t7Xk8W8Gj6f7wbC8L6GNMd2PTFKE",
  "key15": "3gqgxo2g4DisBbmxpxGjcLv7nATkibpm3Ja3ZfsfnihYhkhAntbfcc7usUxQ2qejzXevrhKfMfwAS3twwq8tKJDR",
  "key16": "5sSS7FPHHcvtVZ1hKg3677ct6asjRB1gz8TaJ7RZ4gdj8FhJ2z3oH6pgsXMD8B6VWwxy1rzs1h8DL4yL4Qta6zCV",
  "key17": "3yAEUyAPDtS4mY7DiZpgWjTY61Z866RXU2mawAbEypPz4yuRJh81XNgbNhefXjcDJY6bUJp3Xy3Yxjb22XUMv2J3",
  "key18": "4xvs12tTG8YiHvM6YAcZtrKo3Kqzgqz5TBXKKgmxAY8U9C8LTfSG7MrW8tKpdhcwMKM7UsVf1xJY1LNARHuSNPrt",
  "key19": "5YbyGonFwxAL9GW59bpseuqbkNgKFEguoUKX4hSefexrbriP9RzuKPcfKBD9jXzBP5EEDvBciqqufbn22x8s9Rv7",
  "key20": "3Mk1rqcrfysZSssR46KRB9Rrqk7zAK5tfi5AcSX22DBJouHxnDVkUMjeRJS2BTUtiKE5vBsqMnQw4eWwHXYaamuM",
  "key21": "5Ac3q9iREWs2iE2BsGKzhCdmDXL64Rm29TF31dQJyrMTiyHPDjT8tVHVA8zATBDAhDEFGMcbEqwtWL5C22Hq5TQz",
  "key22": "3bReMQGZwB1QKiLEpKMebxRD6RSTUYtqQZffAs5PLKsF4JEobCW85F6fca6KV8czdPDUjWNTASyGg5ncuqm8oa8P",
  "key23": "5MMq8cTwR6rg68VZVwEEmYKZUYwdN182md4njjj6A4WKZ6vHomBMSwMz3oykXY11yqa647r3EAPfguNUBeTJi1oH",
  "key24": "3iSjHUaYQAgcB1zo4CL6Qamkpw7KN6rTZAdmc6TrVhvHUK7YEJ2izKw2YHzhNryECQHTtqxenQnW27TaiVtkWFNT",
  "key25": "4KtPvqJB7BUfj36f7YwSaq4X4NfJBv3Mt66igsEuqwBcVCmwGzJ4eQSesQeLEmcW2Ni2yho9E4KJsPieqUPZMz1",
  "key26": "U5zxDp479Kq76qwAYQCFac8NYuQF46K8eSP2bpNU3C6u9CbLVCcGAdzb7E18MTpb9vnd4Lnxm9DFu1TX6rC8HEG",
  "key27": "2keax5ECr3M1MuGy3sS4TBGc6zhDDNmzgeSiFEFu4gZBVgLqxWP8QuNjb7zuDEJeRtUHXB1Fs7mPMnFaYdxmwiHr",
  "key28": "2mm1YdfC2ZNJsjHE3p8aWANvsSPWdZvusBV5Cze99sXuMQTQW6tpBDkXpfCTi9yKAkLzWLCtNhET8H7yT7WqEozK",
  "key29": "43Je7Nz84T2cCzu9LyVLGFKic2FQ5yXZGNgip3a69HwVo5odpYBDBpcyy2rW2UtBpXKcYcdtuegAgjBjrCCQAt4r",
  "key30": "5Pc8eEiYbyjDk7XFSTDkYDru6bXfHktvRHSUUaeEgYGspnAF9ezPSkrfRLX1TcqbKGWtC4ow22zRsw1o91fJYZ3p",
  "key31": "3V2cNzdot2ZSSVGS7tvjuENZ7mFPRa6DJwgiWTkCieEtUFWgUDP3LrTdWjiBa5Po2jzpyodtG5z1qmkBfB5x7AM3",
  "key32": "48BdTAUEKzm4VeCRk3XEvSjw3xhxaSb5t5X3mdD2TNWB3znNb21FFxmShhbRrCs7FMCe31tsC55Sg7oHTM9DSwpg"
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
