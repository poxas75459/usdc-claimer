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
    "3YtgiBNgUvKwC5FqJkw8mDH7VfgwQ6VbPgvXEE46VGpXbTywrdMVrE7DPQKbzW6dW37vKk1nwfFVywk4CUnYkCce"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25EcPJSk9V9NU4UgHt8vAYBs22d7xQeRg4iArFfHhAa8rvBrwQuEH6X6WgEP6KMfYLR46EwhxPwedV3D3XREMiky",
  "key1": "5PNKhvS97nmNN41f3nnDLDiCwxsDobFje4grA6fK8r3MybYH1eqadTj5ALVcissXy6tGJbhMDucyV4JrQe2KcubF",
  "key2": "669atckPiBSQuLUkDKqzQ9TLakLqUGcgMMqXGTPCpstJxdfdzheDeDtNZb3ePWry1mpB6gtGqtJtK6KAaiJxTQaj",
  "key3": "KkjrT7s5LycUgw7RR49B13WzPuNeMR7p8FGhEDHAMsWZbDyraLsH9bSCG7MRqZEFtYSsTEFN5WsXYoSmvBr3eXc",
  "key4": "2kCyqvKBkyhhPdhRDmA8A6gPk4WfKgrmhPiAf8eALqohRSWTw28ufWPmRg9SB4XorEAMPUrbaWy9Pd8df5kG9ApC",
  "key5": "1Ydm3ALnY8vQp3EVrusdRQDq6Hq1ebxw7wg1493RRSteuJAAW48wf4doTTVyz2yvh4jrRtP6NkEDRZz8W4whghU",
  "key6": "3MeRhVQEJvf7edAN9yxXjpdsn6VnATbPSwHSNR3wZkr87Ag2XcGQi2C8eL1k7BUooJtsL7iGJRqp2Y6DdS9dA9z7",
  "key7": "WdWWUPL73XNf5bkpx5Rk8oYLgMuRMnFMcr6apuZfaTBFPofc8gpWbDVfHLvkHRwX8eb4LS3QQB1n1zmA2zyRAfK",
  "key8": "3DsTSoAZf4ph3dnyUHTyNupK7acNjT4Xc1HxLQQtoc3NjeNhFTBLgdDk2Krt2o48Ao6D6Vfq21tjfwU2BDogQP1f",
  "key9": "2SjcxEkGD1Jzgktt6DNNnwvd5rBpfeDWReBeMV1MCeCuaAUyStLxFn7PX43NJ1AZuBM5pPCvgsiffENHVT6H2JdE",
  "key10": "65qnHL2mzGiyLqac8dYjyqNkvPZoN7VDiVWqixue7tqUyaTqUNLoyBHp1Pr4fLKBKT6BtB86KDyMCk54VahSsXiR",
  "key11": "uqy7Ek16QtxG7DuD4eSMZ3Nx41Pk9fzQrkLvmo71F7j86MrNivzZPD2U5Za9iVbEKhQ3Wn7WSWNAgokcBpnUUXG",
  "key12": "34CHg6cCgsi69wNmmK5W1T2sDgrbFxb8A8TFggyixtsHiYr9EqMKdvJkik8GS393SeAffJPESd6txgmF8Dv2gHwL",
  "key13": "4Wxe5MPKnVh6VkQ54vxWFNwyAuDn6eid6RndJhwvFVFE1Fb8vjpajfC3P1CryPMuZUgCKrhqQebs7zX6QYjo4VFV",
  "key14": "25e73NZjZnWnLdNdZrxRhkoFvUneBJrukZTEsJBqPQtDd4xVWZbLZ26xgwGoeARfzgtAKa6yntWRwYHU9yDJRB63",
  "key15": "5VnU6Znynj3qcSPmmE6hsqDxnz9MzTC3pwF1MRidWjygBrLcg2KM35ykDbsc8jBW5JqSsyYp9uiFcUisyrWfQQSC",
  "key16": "48LPHsSj2A4jwUZPYqovVdv9rPDr5LWZNFQNRhLPUynvU9aLFQpR7mTwbT6GCcVJfD8nUinQSzWcZbx8mDMspQ2n",
  "key17": "3cpDD2PmZYZpt316LFajbxpXwwGN3sAuAGbzepzLwFvpeexqAg8i1vPYoLYNenWHSq4vTdMwBUK9JCjEsLZSNBRP",
  "key18": "3BeuYgNoD4kNNtzaBJP3YbmSdpMsK8cmW5cphh49J9xt2Xeakaheo1P451AaNyVYiiLo4xh3N9VMKSi46tCSpWwz",
  "key19": "4M3U1tkhwxEDhsfwdc5uLbVbuMWdvGgnzTdepa35vzaRmWS6ThFp1XhsDVpHuHw8jwPQrsLNQfQECNuFFkwQAgfJ",
  "key20": "5pAPWUa1VSQuouSmGDFU2ubtenpwSx5thTbjDWaDEV9LNfm6XmoMEiWePhaGugYCAa8Uf5atWwYUJC17uqxrmeDi",
  "key21": "3eri5XG4zq3QqWZkaRqRRJrH5obVgR1LPtH1fhsRJMbkpqcvza7Zb2E3cwnx9CuL7BQ4nt8oY99AAYNLCGfjZmum",
  "key22": "3htYnxn3Fi8fmsbfyDxsV3KpGBA3xEMgUz4CNeh8dWnffBVFVjfhCgEnpgSERnMXBG8jjUuU52rfMptJSfm4WbMu",
  "key23": "4h95T7KtqYibpiCJJpVTzJhYzt4eKEQr7tp3qzf3ZgBgEr2MwvoBJCTHn3Kx4yF7JZzoDLenLGBDkzoxLEU6GYMS",
  "key24": "222DeeNG5MbtTYNUfKRiT96TQ11aqZ9fCucv76SsJjGQR7JNjG749q3nKQ3MY9PcBh8E5wWakesXvtgCf5tricuZ",
  "key25": "3NjAKX3RmkNG6L6xavSkE5dXVv95WvUwFrD9R5yGibTipH8tZtLH3LYf83zXqay1h9mHrw2z9CLokT7xw1rz2ecP",
  "key26": "K1XBcredvyEgke5gXNnBcpkaEDcLSD4pZJDigGHgSzbxGg6Cv4kFcFgHLPsW3k18vKs1qj3VTp2VMsoT4NqLu94",
  "key27": "LvNrEaRdjMMpYy7DzDkM17Ux1LhJzxWhvqNXWqPoLWvas6FNgc6PhpLTRWuHMpnBaq2ohL8DVj9iDiJ6FAHYN65",
  "key28": "58k5j7dQWgynKDnjgFGMVTYZzB76tYiT62ww2MGHTNwEe4GotGaMP7nZsD1SUYMAnLxV9FpVoQbUcEevSUexVfUG",
  "key29": "3Zj8oA42HAEzVwTqSviKeyW7ZYurFwA1o36mPN7eRiGTcp7FqjHhaTD3w8LvhPL4jwY4QewKaxqrz2PGUUCDBF5e",
  "key30": "4bTa3MWFDBtNRXWj4AJT5meo5N3tNCQ2pBBMmj9LthvgQ7Zb545K23GbYKQpg5UyB4YxhnbxjWSPesmC2WqD4BS8",
  "key31": "5SiF4qsi2Agqr8jwkfbuKu6Cjs4N3fYK6TTuuJehJM7khrU93TTWmiAEtBTFGnyeyA84Ag3uNKgWtxLSBwpFNTaP"
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
