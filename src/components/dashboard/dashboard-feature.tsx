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
    "4n4iWQCVuR8KCYEzwjohVZTvCypKUKnLv14788hP6eYnqzsAozS4RCW18YGTd7CVCPwB4zD9snqKNCeHnDMuhu4Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V9fz9HYsRC5ft4T6wAvZbGgywYQGTiG8vdgGwJvqKcuwfwsqtcTUqnDrMt85eUagjrktJ82QSfeuskJJRdPrBsk",
  "key1": "M59HqKZAoBUC6maDA5LpU7tg1bhzzcxLvg9nHt1REQmoPr3kteFcgx4ayCrdDCZE6MSmDzM3SCWvgLck3W4GvKG",
  "key2": "46UXQDQXjUq1Jj14gxawDqe6uiQEy7UoUEfZ9o9ZKYhbppWva1Snw9J13qpbKXuvrAa46Pin5jQFKzwsysgeFSmb",
  "key3": "KetUacTHSkSCvDKnWUdkbaHXVkgRNMPEcKCfEYJGTRjaZfQiotjgNYxFB5EEPqGtQeBL8MNm6t3dn52o5ZZB7ne",
  "key4": "44fK84cXX8vm79AjXdsMTZkf1HntGvrXEzTPLS5iYR2XmcYwRLsnchB51AjrePHQQgDDPEtvydgSKu3NFuELHSZp",
  "key5": "GVQzGSpnNXxGmCN6rN4cXbWuYtSTMEQovt6kkuu4EFzZxqfeoCuJa2UDMF6oeXUNAP4b5ZkF8DiBe9vGufPxzer",
  "key6": "xNDHSCMbcURRfS8EAjWbmuiH4Snzv2qBM9QP8sGZnSPe91HXRNRjrM8QVv883o3JEWcdtysCdkpow6EGzwkZjYe",
  "key7": "4vVuqgGYsYX7MdHZYjyV6j7K5Nt7KXs4CjWtUiEFgvJgY8R4Mec34Y1Z9UWS8WufNypzWAEAg1YcmL8UzUm7jZAT",
  "key8": "2ghaDUWChZr6DUeBAr8ZvEgTUdEZiVr4LSsjTExwExqsFbYvb8J2UCuN2EB4obcd96FqxCFmYwxNdrWAvKenkfie",
  "key9": "3L5PvqaMfZcPVKMqsMd6XjcFpFcxgPhF4CmoxrMNugoT3m1YCq3S5K2Mio3u7tQfSPfrAztT2ANowFuGrCw5MPF9",
  "key10": "2HVKZd9GcJifgBgu6GnryWM7VZk4VEyDVbZtQqDVfR1nBUtMqeD8pdcwh9EeSa9MWqEXdpeox2NGXtXRz9RcRAUq",
  "key11": "48cNJoQNGADSTBc9uRSPE5N4JjKJkbWGj7d5qs84CG4fmnzEZsQKNP1T3kcnRAHFfau4g9mRdix2qr5FuAZ5ULsS",
  "key12": "5hGtx8KLePE75j5wNFSEuKnzmFuWLkH4W4dGT36GuuRp35w4LjmbeFWtEsA4S2gRtTRRGYu7atrSSR3TuV1Ph6CD",
  "key13": "5uhoXo294jGdCnqNFidWXdHJn7jcf5amtkpAVsys5hCjXbXD9fW7uTw3F7tHu2WB4v9ewA2fqqAzi214w4AGKf7q",
  "key14": "ksy4oqMtMU4rn7dHoZD1ZrWGWFxag7U9RFqXEyDCzSGUX2QRpJNadaYGkW2KUeDc6L7ypvABFP63t4P7XTesHmQ",
  "key15": "43rZfBU8fvobhDg4Q7sMKMSJFUfBst5Yg8iUMqZLkz3b6bSYn3dPVHasdUuxuJpFNiHLTKHKi2rA7tyfj7hA2ffS",
  "key16": "kwFoQ65HVRBYtojT7AFpx2dBXFVSL5nDpz6ZMif3HuX7wcF4xKeGHrf2e72t2JRCNdmMTBgLbRK8nNRd3T87UqY",
  "key17": "2wk9ivSmSproCA6bpf8dXb6acBJPBX5osZ4e2VnwkQgoqJfdo6QKGXs3UtxwHBPTSHHN6CokGtd9WHFhtsKKbDwE",
  "key18": "Pi2NAkxSTPPAJZf5qfmuo1MEhjNfUYTZFrVqYkSzrqkWSzAS1e53M8uECy9DUZHnq49NfhQvUgfLgpxXP2VbTMd",
  "key19": "2WPBavb9xAgNNDxu59mz2oDeMUVquFmjdC3W5xLdjDwK4sBhR9FvGNnPYt7oMzp7VnVdzKaHPXbyN4xfdYkundp9",
  "key20": "2xXx1H5nzp3g1WCkvQ5Bt2CmpFe4jPEAoKe5azoKdMpFZUXWYmtECWcjPs67PPY8xhYXYPC7GMSWNy8C9RPDg1DR",
  "key21": "2kVss2azShmGHoLHGamsWXvJLCoZvsnPC7frdDpdXCUbTdW43ruSgKMist5431AFd3bsFrq1zLf7qaZuWvUWcqZt",
  "key22": "YiCYrxw6YcYVWVcQwvtkedpKRSc7iXBQJBZY73hka8pHFfTJan1MH2FSv2N7Mh5zEhptCXAAZRL6nPCEncqBDiR",
  "key23": "3iHRgmwYwnKCHmyRUPnMfSewx2qNZcxVvw67QRDWYP1Bvm26To7CMgjsNgJsTHVjta81h1g74vzEzm4CQycFyRXM",
  "key24": "4L29nwXJBA9bBjJQMZ166jJnKyrPHo57PyBjZFg4bGE2SnyW1E6QQ6CAVT4n8MxvAnTTLSckmBm6AiKQwKZrc95h",
  "key25": "59FqUCHpdB1Sv6gBgpVv59JMQsUiqdeTx7jKnSDMensLTx8DvhjbkZ4oD3faPwVwyPzeVaKs9Ab4oyGw8XGNm122",
  "key26": "VcVfDCd6ypTHECEPUdwWkFeahWD93kVyLgPQgr8PSAhdn2ziT9TJJ15hHDncdVuxtDo6cdjPPye1ehujhN4m2gr",
  "key27": "66nVdkuV2wKchEcxY8Z9NJbpXpZWrNS45ePrCv2xXPT4MJ3EYzeEDTH5AWw5eimnrZPuaf2p373aVLuA6m9Mrxho",
  "key28": "5ebA8ftxJ4uHA8rBMNvHx3jPngPJLKtizWVLFd3edGvUL2sK5KZZMbHMkxNTk5uG3iLAnrNs3FjrHX5dTfHUpBDM",
  "key29": "4LLCD2yM6uoZyRwR6yDdsFtnRmX3dVpxoxrJfc52JW79SvWzD4xiF2eMSe7ajoGSnzv5tS12G8YLA8c3uRS9xscz",
  "key30": "5DpZ2WuwXY9uqP6KD9zCcahrRSZ7NCBrZLCywZHaYoZ9ZmP18tZEmJpZqYGTQFZSJ83tQbKzBdLsC4iEY67KsQ3k",
  "key31": "3dDWoZks7ZFxQC37U7hQ2LA6CWaNCN42aUEnQVsoy1zk5mTAYKPySZH8k39uh45FHrcRJC9Pi3nZfiCNW5Dbvn6B",
  "key32": "ytXfHVzyNau5Aqh9uwrcLWNLxGMdiebLz1qraQXFh8iLwEgKbbaok1XwxPJnZTrMpLVBWadnQC9Ee1kh4WxJ1nZ",
  "key33": "4at3ckTbKQPT9skrU9f5md6fccbTz53n1y5DbQWNymzwvbogoPoGZ5KmvXuLMGcfaKRucXoqxkB2i3TtCuHw82CE"
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
