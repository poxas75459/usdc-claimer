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
    "ogzgdksULZW79YPvBu5jKd6R4ZmAXgHnD5r1aF5d4jotta6HAbTbmhPfXvHdAAgrR5njL1s24heS5ECpHdQwa6H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4voTMqsuRJYFP6yBv1fcsExAubpzvcNQnvDJy627uAwx1wdCUqQ1wccieWeSzcJRuzAKnXh5d8YBvpbQRq8bpKYW",
  "key1": "4gXQPnXtbnbUG25wBtvns1kQJxvjnN1iHPMaQReAmUrxztY2Ju4YWXLv6U6stX41U5q5ctrZDBksLu8nEq6HrkCh",
  "key2": "ThBg8BcwT5RNxeHjfV3x34qv1w9pB4khSXbrBKhF8Ys2CBV3WF4isXyMi3Wah41rQDwyBfC4ZJHikWAprFBiw4k",
  "key3": "3C4hLfMtA5xkyGXmW42nMrPBkXgbKesSPJGYVE1h88H8goisgGw4KcGHfVf7ABdRq9AyRmnU1pdnsiiQHLLKdB2r",
  "key4": "4TXYUxTtygNvGppoVCfgQfLTfcQ8Tj7YCZqELMftp6PdeQ94oHqjf7VCaYFhmqnK2CXseU6UgFUSeeevmBxhyHC8",
  "key5": "2VmWeq6b9T48roiQRa4uMnpZQGEcKZHtZrPdp5BDimH3MkDcWZ1YiJ3s1hmcmN3r3fjrJmEuxJ5rdxBdUBPLWok2",
  "key6": "4Zbk6D2N6BgqwhptRxbNUnK6aq7ZNcKZsJBPKAv7vcA9dd3PiijxBXe9R85AgNb7bH5RQM9t1aiD3ZmiWstztVgN",
  "key7": "3iTh2rMHSXfgZqnFsT5p3kUM5XGrydEo4mmtww3tghtMhxdLZBKbpuLoB24ZVfdRjwewPGmYVVKb2LMahxwPUJyN",
  "key8": "5jyrmKxUVjFemVv3QkjwLG8wHMQYL9UsHj46F36SGPr8RFBfXYfnVciEfzQQ31KtY7Mznax4aeydNoxQ4izm4tgv",
  "key9": "4YoyLAxfa3Qs9XphUkvJLuJj89ssj94tt45DdyJS8TB4nxPead7CinVzacuFi4MQ6vYnqt4RvwSHr8dWqbVe7aEH",
  "key10": "3TJAwkfbbZi7f3zftvUYJkjJr9LKbv1swtvefJLV73EWSsYUPRyXwKGZwZASh8PLQwsA9ZacTZRu1tVbDYDkTFse",
  "key11": "3EwwpLxgwkaRn1Bxy33UV4cq9fvyWgHsdUbVAhUGB8emCQZcsKodCKrtCkbVxnXZBRpVJxaQ6ETGHKrUw9HijM3Q",
  "key12": "64nQoGHv8449wvqccJ29wssPv8jhXmEJWBLu221zQaA27w296zjwwS5MCgi6WTUQBjoGXLhhnFHFi9AHogh1WF5",
  "key13": "iDeBzSEZm1tS3KxsYUqG53TnHcjRvbhvweb7WHLWYYjdDLJkBbvo7KCFCnaFuwYzDc6SdPyTFwDpQyrK8gjmsuy",
  "key14": "2CG4THLCiyHVad6DFYQFYi6UeQXNkc1xPYwgiWcYDf9EuEhLeuy9e1NGAk1LeL6GFrCV6H4sUGVFpkCYtK2161Yo",
  "key15": "dW4A3hLMmn419S3hgfTasuaMxDbYJG5CqxHWdWhw4WnQcLq2XNc5L14VzTmeU6bVK8dSwHRQi6zfGmsUQDUJ1zd",
  "key16": "346teW6yiRRNy3xhTt4g7bx4gTk1kRSoGC7EnqjxeenWS5drNyVX9erjiiHeReYMHedrvh3iskGMSwrEhFyH9iQk",
  "key17": "XmDUx14mHTXKiS3n4PrJeTQ9aDKuYxxv1roTxikzDzMHQigubLMUX7uZGgxJX6oQjNuyYAMBxUfUwX5bZvmWfbG",
  "key18": "5ZEdL2tcDcpHK7zFWCbUvqVjK8TiNXEC3YoJGaeWBzYMDBSAbdiqa2wjR3SPCAg82WNpNsxjp3ftxnoNSTaxVufd",
  "key19": "5Qy9ZNSasCSqNnZ2Qqm4rAw8JszFodAjWyoRbPwME6bstRQmSjed3PnNHqh1xFsy6oKitn3sf1RH3vdgLsaa2Dwj",
  "key20": "4H15WsJsdh5APKxmL5TsRBZbsapZwcqu9UGwj7VNivsiTa4ShndsNzwvSYSkkiMJE9iBq8Bi1aWsBRB6yBWsb3WF",
  "key21": "35SQ1yGUn3jH8DG9ZUAW4neLoyNJhM4ib1zNioKDmdfJMDAZUfmtLU9KGRtCP1kNKHu11egWyGYJ9BiS1Q9dPdmL",
  "key22": "2rFsEQ5x1VuzyQw2R2AixYgCgFvdv1RrR7vm9LAgUu4vFCPTjNMgNTjjBEJ8Kce1JauQsNfYfqvMGfxChJcvvoSB",
  "key23": "CzBMU1Ss6ctmJ9nrunJxgdsuKDNNC4KTavmzgHpMGknSo8woK2VPqih4P8A6A1dSQ1k5pksgFiWYYNnxCobMGMz",
  "key24": "2TcET6xpeDYUromNhmSjuz3yGExXcnravZswUo4Wtifn5kH63bwBwrsQTfcHvWz4zurZWvGjK3TEbi53XLh5ruTM",
  "key25": "2b3wTsTSDWDUP2cLP9E4pcW6rB7Tj239RneTXtxz6sZoZEhbgh4mh1xUdyHKd2oZ91Lz815LxZFxSMvnEAGW2X4j",
  "key26": "3v4sow1kax1MXiu1pC5u1kgcscz6H3XxNdvgKcEZ3Y36XsPtz1Y2u8if2JNGeC8uPwSetA6anVf1dvNncECn75Tw",
  "key27": "4WZFcC5Ui2boX9JthBRs7cZzrqLks8KWugg2KXJeFryPsFEm58cXnVE5pw5knLXxRKuehESnBBE5re8mya4EkAGP",
  "key28": "AcbHFNH1Ksp6bTYmDHmHiQgxLiwTaE9oXpf9LYkLyConDbYou6W1i3p6EjRgDTGjAi6ihV3McTZNnM1FGz9Zwrj",
  "key29": "4uXpVNNYxheEbZPqR26956Ws3AA2KSjJq4cs4URcCuHrAj8TRXYBznGTtFdzHZcHdngxzBFQ3jpSTQHARhh2qJNi",
  "key30": "2nVQjBTcRvuempdACzD4EN5GeEV2feEo8Vj8hmWpEwmJsszCZDgszq1S8th2N7WKwPbEgZVLrKyfFiQE9u4yLa9k",
  "key31": "4xesJqQpn8sw6zzBoGBeFjBkvPFcfftc7UvVH3ge48rKzYjRP1BtxzqYFKobThmm4itNrcQskFpjWbuCnXsa1C6j",
  "key32": "4oQD4EmAvsUHkYnqphfzwvZS5H5gt3YSDYVFA4ckbfRwb5GTJxvJbukvBo89rqbUQN5XG7JauuvRVwZ6iyNiW8Dy",
  "key33": "3mgMJ8pp5TPKn1bRNhJJqJiYFSk78SGCPZ3JrwoJB3qusDUzHq9Vj8uXrjMsj3SFapkUTPCyyP6n2goYN2FhTa1T",
  "key34": "66sP9JPMMC83NgEtNHeCdUn6uBUK3vq6gV3T6wfBwm83kmooJzNDKxaDuM4qGdgAZFi4nTTgQzLBcMcfowzbbyF1",
  "key35": "UQxyKfJ3B53MHrhcf1mYnaJswkQybtCUZF1wG2aKyWZWqGZPgpvLdMhYAJacB5qEYKLj64EHVzsnveFg89aZmZR"
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
