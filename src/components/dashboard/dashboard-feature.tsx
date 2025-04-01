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
    "zV1Bhws9F1gHcfSEKM5dCaY53aWELZADVGSh9GoTja3ccBir8xXzomcbweFqbaARawNHCfqAxMo5TiyvVGtoZEk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mFrmuTK2mEDpajQMS6jC8FUr9FK9piBPYqeG28ZXe2ThSeoe9MKF1FVxDGJF5J2RpWWaTXuHXrd36XRxjaLkNG8",
  "key1": "4oDfg3yZ77c1LT6pfAYsAtsnMtLnhgzz2D887ouXxZzKCFxuYswpFLhbG8nGpk3v6xdPfBn1f8y2uT124KRiGcYv",
  "key2": "4ZZK4qVXZWMiXEoHwzcsMgGbDWhhpENorVPJKDBhwhxTnxkEq3kiBxRJ8utd2J4fatSKhXeGHkDYkgjLorn2dRsR",
  "key3": "2J1azEJo89iVBKKVWiQxYJ7oQ5NgcSZNHHJJccWTM4VyejT7dSd6825znwzxEBb2r8vdJEArUCiwRQWt8WbNu7gQ",
  "key4": "5JWwft9v266u9MZb4QS46XBc9qsoFesXgtLMMQqX391T2hqkp5di49W1JmRx5bT4ynXQHXbzJv7zYYn56hAbwVJq",
  "key5": "5jc8hAEdQ81U4rf6rCMTPpLAUTGBDJzqASAr65tiYQ99dg1dAncqZ3V3dt2kPAA5HB7NbpUxkfdooD5W9iB5dRth",
  "key6": "29jRQxeGvFvYL3vnJZok8E9Gt6yeCPLeFBt4dRuVjVDob5k3MfB1bzVNoURsCipuDFA94bMrYsVzSRKqc18EyfDv",
  "key7": "82pmHHQPYLkUHDme1w1euvgEzfCyBAPEsDDox5V6EibACmt17EiswU5fh6jKWsx7CmLVWgCkGMoaBEqX8ahRTX7",
  "key8": "EaxsrYPWgcoo5hNepoMdZjebPLJEMT7iAnzKEqCZbUEYow5Toh1ii9WrXZqCTgWivLA4o3wvPhxK5ojrQcmNJso",
  "key9": "2TaDN6PzPQ1NdPY7TEJo4bqbZW3Nx6o2MSRqV3ozk5x259LHSwG2hcE1oyrwjJVotxq9NVdAaGGrGJGmLtr2VY46",
  "key10": "hHAAKi6mr8hFqiP7mF8DDK9NRif9DZfyoZDjtPN4Bpw4NB7WaMKuZAgCuaY7q7jTuSRKpcLKPaN5Sjy4bAjFvu7",
  "key11": "3hWMoXLXNM2w8LrGzrtmJwoED2Nt32DBkLoGVoGvpCGCTzQpPCSFxzCPpw8RsCoTwfkt5JoGKEFVBkE1wCyEtfUp",
  "key12": "66rWB8VmJ5DGKRVXbLWsm4GLcwRHmEabbxLajx14dMQTRsV96xa2Kdak6T6ES2bNWA9Z74G2E6N3HobB3fR4Yyk9",
  "key13": "3Q5sSNtWFhoMr68xXWwCnmQ99oQFGRtdmQcGrtUrPeq8V2NCRk39mxhfFxkERwhV3Qczb2H7AjarC4tEDGCDzfKQ",
  "key14": "3nqudj2SR1UvZPReVCUgN8B7iPBjRaVp1v3uJHMX7fmmTw6Ngzw5PAzJXCoJXPBNTPzFwYprjxK1YxjhJAuCfkWn",
  "key15": "2C1EUJrjwLG8CjjiUkgJUK4uUcvKeuxC7JHmDXu2iDfRz85iwFDunn81bkVTr7kTgjcGLRWJPLNCuEq7UaktDgxx",
  "key16": "vRYUg7dg21StKDJ15RvzSfMVVXyJ1zDv1ZQrBx7enhjtBqSDe7URj4dWTDyFQ1gEii4Gr3s1x81wqUPDbmsvT39",
  "key17": "4L6M2ZgkqZ6Zz6gcR5sB8ajEKU7HPVaPDoeBJ97G1HRV9bdwiyeXuqGmwBLyy2tBaqRMJ22tBYnLCrf2CMyaEZcW",
  "key18": "3HL9Am1ivG73p7abD81hVvCStVad4WK9vBjjD5DWXBiTJrYMu1oDXcL37pQj31gkefDcxNYwQQUdXMXwrX1viP7B",
  "key19": "EMP216ruV26UQwcz4sQTXau7bZnYe8Rx2mDnJiveYuxFBLVC2ZfHVLNkmzrR19z3kNsCunWTgB1yKheZGfAvSBK",
  "key20": "4cgE6mF44S5siWYShA183Kg5xi8bUBC8TKQXW67VbY3bAu7otKGyS7odcJQ5CBE16kgiEUNuBow4JvnVwaXMXiam",
  "key21": "4yZSmnQZdRz1a56maQfemURb6spL6rUcvFHhFAihvzPGerR9gQienUAGAeWquULx2DwdasKJRjSWUPaizwDGLepE",
  "key22": "3oZLWMufURVzhRPT8tJpLbM1G61VVuDRtYLFdJuK89JkB8n9Vs29z5AHzwZ7MLmCddmwe8bsuh2emx6dsDYBcdep",
  "key23": "2ypmYaXCyBKUaRhgCjabkoXcSYG6P7QeDqNWXgFPkFu6xSTsbzo3escfx6qgvYkUisEnJ5Ci4jaRm5z4hVjVUgHE",
  "key24": "3iCZCsgMuwsviSCCE962dRrqNjxyQZcsw2uF2j5zr3gR1tmJ5cKxU7QaKwr6wmXF6hgHUudpzdi7fqXYr5tPJBCx",
  "key25": "5JhXcnioYThpXeCbVpGAJmuPbd8Q4k8EwZEWuhBmpFcAF24jo4NEKX6AcvPMQnRvYSZ54ReRqB4zCt4BgDH81MAt",
  "key26": "3s1ieizHtYEZJcALtuj55Jep1Yf3kqibznjqDmmuv7f9N5EhBHGATAijjK73uYLeZo7WQjTntkJvGBYA3hDjePZu",
  "key27": "3G4pY5TUwFZFkfHihy87exqZnAZj4WM1AeXSukZrpCcfegebYQNqcDeWmZmViAKJxFN14sm1gZqM55dJCisBLt3V",
  "key28": "5ygHFjCzhzSfaxVPB2Dns3oPnzT5RBYbguaNhjQNehVbCbUJ8qsjU6e6DKkGz9VnVhGqmCFg4yo9pWf1myv7Re1X"
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
