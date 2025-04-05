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
    "oLbnQN6mQ1ADjA3QJWRJprvwyjLACgRCJw9rcbpBvinJDK5ivJ3A3SW9S5QxiWpFJgWpUXmrduHFgzgvW38DJYp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZKYkFrgaxXksttQ4aU5LZfZ2a6iMViN1h5DpLzgqyrsHA1UxDTvAqkXSM6wx4yCntA5qxzSwKjeMSGawhWbWHgS",
  "key1": "5RLq96uEk46wFd1FDVgoEDWBtN4P9irHquuv4B7cEidcwfA3te9NcNEcZxaDByBkDVLn2i4m3nS9Gjf1EZxZMCvG",
  "key2": "5htaey1bCNTioJ6ECpLZKKyqARmziYgMWJY45Zdvu1RZQjistk2Lm1SKT9fd59sk6Y3eoEC6aj6Z4XRb3URs3Lrs",
  "key3": "5o1zXP3Ezbp56qfVpE8CEV5biscVyNJjHWYK4ytt7Pjha7o5QXDujZWqxy4Mi75nrwsYECBZRghEqtsGfaDg7Lv9",
  "key4": "3HM6rrYbzvWsJBE778qZZeQdCN58ArSu7eeCs2xyQk878wMqYjvQvX4c5ZuXgVgeLET3g2GQBug6geMGxVU4T1ZA",
  "key5": "3kjoCdkj3cNWCMyvPWGf71U5Q7tkNgzsYqPJHcS5wSp7hGGw3oyVVykCBTUQjWj9BqVujKE6JfRDn25jwVasRLFa",
  "key6": "3hHJv8sP77LjnJA7o7ZUZCnzsPS6jqF52UzJ3nG9519YzocMgGYzAufH28cr2QuKUdFA3dXUUKapRPFGa7UytjZ",
  "key7": "4pSiQTwnAK9m6ceG1aQPW8kE6CjEi6M4exH8ZDkpEJsk2wp29MKriSVytNAkWNepFq1HuSuRsnLDi3ShgRBtE4gQ",
  "key8": "5oXaEJ6df2m1zfmvZGoiWLwLMrtoXBujSdXdBq8gdrz2fsnu8uSA5iR4uEr2qdsx1v5syPNMbDZH3aSAsQNdAUSb",
  "key9": "35hNfS7TCWmcrzdnMRALsw2YWA7jVDEthgosVLvv8H8c7MY6xKU67du7cjcW8j5C1PzxWUsPDgfYh12LS2NsuXUr",
  "key10": "4kcUasnc8dnMVxW7Cc6wjb8vXqdzQN1dLhMLUhnMJioK5LoQ5MzACeZoqt8s6Co8zF19vub7sdqveHCRAh6n8fnU",
  "key11": "3JXHqtAncyXNhimWRzyK3rXgdmz1C5VNaWQUMEeFAj6VNGyezbvpSbu7KTLXP5QLRw5XB4VCHooBwuEhsqWff6ki",
  "key12": "2t4siaS5v7efi4ypVRhTtPrQsPh76vhgcT1LHnDgqw26vvL7ikbdBYYvkSxQiDjTvRR7SoxDTEbeYbspce5UcmGp",
  "key13": "5qKSqUUgD1Vzyhj3Pj1RUHAHBc8AHfhWSsVoaNUNafGGKNA48YqwSxedEdVyAJ6uqtu2f9dW9QCgvcNjfvK2xej5",
  "key14": "5ZuPVwXRMooe8r7ChBLgXvyTpi3GDt1rVVCBGp3HXzjpkzuGPmVsnMgrthdnYKVdmFbmLsiarKdiuNzFM5St44nE",
  "key15": "3pReMjfndLztMEfeYMCo53bRepDcSF5ndGymaXh91DWLG7pNd38MNRPgWp5TCnVBa1XwoSyuCoDU4qJNKcSjmckf",
  "key16": "3WX25oTWMcAr4rowoVfy7Xvipsf5Q966XYiJ9PwyByyQ14EZBbAThWdFxWwoVbrJVvWUiciWboi6SKd7dyCfPDuJ",
  "key17": "56piVfxo6XfJDq7LAEVssThbN1Zfqifp7qpKdDh6LisPX3Hw1H4eJ3q56a9UFvwaDb4RbS25LBpajyRNG1SK1Dep",
  "key18": "5Nxe8cVWczSbcTj3zkSdeNbqBReafV64zU3f5336jwYMyLbyD1fw4MRftMysXurN6eSypdh6UwwDqkrcwFTytBwj",
  "key19": "H4zBFrhdPgn3dis8QB8H5aLPhgHWKmxcuZHTchRy96oAQibEHP4csvkPJEVpAz3112ygose9QKCPQtBhGQEDTVM",
  "key20": "YEKtik99qrcZa3pVUfUP35s1WfELFDtjERaEF9z1E21q7Af2sVYicSivXYpxwFQ5j2UKNqdsLWxLAiKhk5Z8PFC",
  "key21": "4syNvuHgVwk8DUKmkPkUXsJUZRJj7pvDYTHaeznc2yYyMsnq4xwB17CE6prJCd1aQW6CckEAYi6tEJ4YdwvrSK8D",
  "key22": "35HiM34R58Hd6ZFqBdqwSQDvKQGgoS3wKVmDYzgUULR1dmjuUk1ojEpqMNC4rvxPCKkytCutLQFcfVbrD8Cmoevd",
  "key23": "3b59v7zD5tsw89Bq9yp3Y9RiRg4K5dvQgWgZBB92TediCkey6yh1C7SVCdxc1AWadesfvjS4fmiZjXc8we3crwN6",
  "key24": "4iMjpzUt5H9mXcqNjEAn8vsZdLURaxR1FJgeJCbEjZasVT4TYWhmhG23yAcLVzdB99SwV9rNG5B2YNhhXTG4jb3k",
  "key25": "3GNGLUppwAAsQ3xxEzQHnRq7dQNeTn5FomXHcHnprgy2N9WLFFQWFt2ZHC9zXemAbrS9wvq2qdB4W64dZiTSscFH",
  "key26": "5ZEzvZDKLQQmRxWdGFGqQanNJWQmuKbsAV1EKPHKdadVT8nTzzwLSBnUQFRmWJGAxbof5QW147cAs84r73Udqfez",
  "key27": "57UxWiAX684McBDbYezn6SwjxMirZG9o79ee4tMhkm1g6v5HRrLmBaKAj9aJvPECqKiEWr5e7Eqotw1ZGyHeerj9",
  "key28": "nwPCW69Vp5BBc9dj8sXouG2pTrANihkDfeYj8YLqXk3AywtYY88BdVhze8zcr7n8PZPwuGV2b4FydXVctLUk2H7",
  "key29": "4QRSRANf8UfjvJykeweZCoDibSMMmFZZoKx6D646nd4Yh8378UKw2hGPpugQSz5rzu2yR2PMujFheJpY1tGEKyFs",
  "key30": "3PvoUG5FnRSgCC5xrtR2Aju9ENvZApZ5kmvNDq9eZqya9hHzKdM3AvQ2fpCQoLc6AcEEvQZ9m347fTXjZMpeBM11",
  "key31": "4a1Mk8DzyBkuuc4urYkZq3nF48EgriqLMmGMRxX8r3mEQxcQyip6Lbbg4eD5SumfPYEVqcdCxeJo5w2TA1Py3hYx",
  "key32": "yYF4NNVRcRgog5iSADhFumjihgEiq7FVouqNqbHun9nXgSj3Nj3mGKzysHKsmNVxU7YDwsWqKNXXtzXVbnqHHqz",
  "key33": "2bYcYtAA36MpiYL1q84iLUi5qeUvGPELvB81FcroRGnN2PnWUJQPUdP4Fpjn9NTwDyN3QUopkZNwAUXWkSmjVumo"
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
