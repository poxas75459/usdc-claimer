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
    "5XJzfk2S4x66WeNRz4YB7wwB28FysYSk9N1b6hnLuLhQFJWbfNiVHgfcn3TvuGf8zZDWae2S17HyRyHp2t5qRZGx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HGStQ65sBEEUs4F3U3Z3dXYMJsSpH1x5Lxw69sPsJ6J4ohUaXN2dtdJVRVhVbgHrEYo33tYJNjkWs4Exbiwrxcr",
  "key1": "38PtXT4LnGzpUYyGB7QWic6pt2U7i1ggoWBs4YbyntVXo6DLdCA8HmMANF94NjBiupFKEcaR54DAbhWLKsdhmdQ1",
  "key2": "36J4sDMLjHU79NVqxLxFYUtzkqnTnFrJhsFzfACcyRukLb53q28xgJ5JCtqA689aVR4fjPZbdRDYqrUrubKLrRz9",
  "key3": "39ESdk5ojKYjYHPeT5bkxfe9C6rgypFZHGzLBRoEy1X4vzHjrtfxQBtgtwHRKfzfxzDCpityAqKVfh1nUT14xXud",
  "key4": "2go7SfgNED1kU2Kz1zNusdpHzHeYpSw1VqTehqxstag8tUpsKuj2KEXsSTAAuiWHMaerjhfyrrv4mBmWGzYXiCE1",
  "key5": "QcY6DEfTASs534G3hqPb9kHQBWaLNY9DGC85RqgfFUkL3FKGFcK7JboKL4bQv79NQ7VdxcEmJ8ThpgAD2D8XZDV",
  "key6": "3NShA45HkdgqG3yBWeyKL5num2kA2SH5wBoYTrv8WDyxYduaL7NVosMdqj4rPyRZyRMEywrDHBJ26qfXtNQa2cq4",
  "key7": "5xi9YWTa5Va77hyPXuALtinzJouDN8umaAXi7sEp5PZezJ98DTrQt4YBoZuJC7KufJyoJXBRMCurNgs2KmXsR3WF",
  "key8": "4ARRcnB1EzKn9pcecxmZ8MFMQtdNAJL75G6V2QLkDEPGdZQdAJqfrzeABoB3NB8GN5q8cfPnthsU3a1YzUpAdL6x",
  "key9": "3VLEcc3nJ1DgW9BUH9JMyjsuU24Rb6UoWysaw2bXk8hsBfn4zURMormqToWRtFh1rocG7TJ5AA5Uv1j1s8qPexLg",
  "key10": "3ZNswx2E8cAqHwVgWPxyf3LCTrg9CMZ4rUYppQBYXV4NBqDnZNYvo2ebzSA6mYX2petbzDuJmRBd7oVaxCzt9g77",
  "key11": "2nti4CCoimCgJnwEqXVhi1xqdwzmmsVuULR2GjpRpa3HTiYxms6omrTE5iwn7767py7qdcDrfoBiTN2ipHvGXw4",
  "key12": "5EHJkpxmK2f8F7MvSTW2uu62c9DxRDopnnSQXNwPVYucUGHnHSZaMLFQWdpUxoh25tEtUngKvxmGR6yj4hLx3FGN",
  "key13": "4FzR7Tw7wWDNeXRQCYXao7j5pkvcRDuwbMsD7bwmDZj2jjy542YMFtf3R1fCoVAkFSGxcmAATHso9j5tRA13eDwm",
  "key14": "52M9oZgmS6sDoATpdCyCxGep4YMYUaFDt5xzq9kRNEYfwwaN9uGBVTuLKNzLcC6TwKoDeK2mWVy5FuC8sF8rrBTQ",
  "key15": "4beYxs3wBF1nrZosEgAYhkT8vz5ZS6iQnQwZrF4bQju3MdPrLGfpPhC2j9x2psA9F9UqyArmxo7dcxXve7VDLaKL",
  "key16": "3jDdgAfetzHKQ4NcaZJAiUHtfR4eR9RUhDYsNCoHnAW8U5EJ2qUYaXRiifaeH4fvAp3gaaxrzJt6LM4PLEivAtba",
  "key17": "5q38gDimph76Bzqay8mL57VrGeVwrSZkg7t4dQ5BYQftCKxumT4zLjEmaBciNuV9ACAziRD3eaznhNnNW6uvcQvN",
  "key18": "3e4DStYg5LJiqZDVfQXdCT6QNnUSn5XmyRFJiL91irjBAYi8AxCCJeWWyrsRyWcbaZ9GKFRAWhXsse4DzsMEKon1",
  "key19": "vVvqmeUZzz1UfWD8U3cayPKKrCFjQmKfTXxNVBWnWmn1P3k9X5mAdXabdgXAjDbQfzq4nNu2ffySVT8wu1NPpoF",
  "key20": "5YYcjQVYLBjrbzbFPZfauQ42taFSP3tcvdVu6hE3YqhNwDKcbAJx3mH3cWksNzSS4UV3kEn2XH5MK2ubccycr6Y7",
  "key21": "3BishF7K66EzH9vGb52KoDJgTcyZvGWzFgM8LbBzPDvDXaxE4D95EadX9oC3adEjNZMWqAWiVpZdWb6L414c6ZQY",
  "key22": "wtbR4K6Qj78uPtwy1rLyqcHTRg5p8qnMKaAnMeF1M2WdoDhkff2g7cbAJNH8Ca576wVbhCb6RrbwSv3MZgiL3zy",
  "key23": "4G9KiFZb15v2DFZgrPSbwLsqvBRK8NSt2SR16LuCYo5TdjSMM832yR6xYan2v5qgmgANbWFTP4GtcqxFCc2LtkYw",
  "key24": "1q26CA2H6awuFZkrrT7dSrxCjF3W3F3zw3Jm4zieB5nfqA1bnfMRjFa4jpKHeVLtBmrrnHfPboJcv8uMaqZkmi7",
  "key25": "664GEQnb8iadgxXnmdhCseLvdDtzvQAfTbYfcRMMytjXtekCbB7d9XB345ZFpLwqwJRLUcpS4h3opARnxaVqNNuB",
  "key26": "3Jxuqg14Jab9nstZb8NSnEiHoTMAkyBMs4WoXyrcZ2mJeUD7D2niRLLK23bTwavxQoBHQUvbGtUsT35jiVt3mXdP",
  "key27": "2f5fENG3rTEjj5ySGLWVYGfoyaTA8MuQBNBuhPE6s5t8qHztYVuMhFVZ8TYkDzSqAsYiB4bHfYrxboovyUroyDJN",
  "key28": "3o8NoCg4YYgcAR7GHPw5dwF7vHhpYoNPnHKgPyxuwvWDM8LAv5y3s9qn2j6gSZMHpwjyanHygFbX8UGAJ5xQV1XV",
  "key29": "yPhWcHgasaTWbPC8rjNwXi6STR6XxKmnq6Vf4tMzb9bj34c6rLDTPt8LLvreEB358sUd22ToSxBVSaR3HfWDe2f",
  "key30": "3JFKmCJNJRS6GRHGW68rxuUsGiB6Gc1xGy3zDrMkcgvEruwh55FKHjLicqXyTYWadyyZganwyUFrNc5b6y3UYWJs",
  "key31": "5JspCP1ytx8gYK8sKg82E976EqCGt3SUQ4HpwEhStFm3n8uPagi26CyTQ9StDqjMHh2H2WKLcqHcye4JYSZibHqB",
  "key32": "5qGFxxPxNmfmcTmtrTtJQd6oimtMAiHaBYaUspUUf1HMffEbbCYiXRiKp6MdDiBVBoqM5eKeAGgRNUaL4LuQogKU"
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
