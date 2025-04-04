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
    "ZyMtdfQjXaR96VamsmLwUT4hFsVTkQKUAchamshoNswkP7hAJXgPpJdhVSCxfdBWVytBWGD9qkDfKE4HvaJ1GoW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Nxjrnif1ABoofL5L92eBcHzyzVzSMpoxvo4zNZERXQyvUt7aKuByzjFcNUHCRY1tqpeowSnMkrfREb28Ag8c9cF",
  "key1": "Bum1GshyGcUvmMnzeL4tDtckB4nhdi4TZER8cDssj3a6AAUXyc7yYGMN6avJ1vU2jXGyHWxt5YkXkvY4ufn7gtQ",
  "key2": "2Hmg1vJzP6NrtcDqkWCDiuYNgF1s1rDfCKCm76v7z5wNkVP9kujzkGeVhweY3mwRGvAM7qzt7RwS21xixBCGoxL",
  "key3": "5opPo5s4pHAeQBSzxAr8mszfop2ZyYzRBQ5D8TjCu5BeyBTzTuKRrhgmY6Lgnvp6H5QvhYSm3fSyV9jbieJQ1ckk",
  "key4": "3JRWzFQ66BqnEj3PgtgPU5HmAXx4FWMZ1SD8BUNtQZmxSU1UCKVWv9dYVYneSJp8BNWHuNMuqTCmcH8dwuLDyvWJ",
  "key5": "29USTmMBbSwHTVan6D6AHsqtprxdzPV3LcuZsnjDpxWXPtxhVWTJjF9RG9Y6XnaoRBQzrRqeNqfizoFnbfc299Kk",
  "key6": "3HhsnxBPXaGr4kEGTkvjgx8b4smpWAd5fh2HWKfyY4Ykb6nwoVLvLzqmDPSRSdDdDDjSRnEvVa8ggaciypZB4L8S",
  "key7": "2zmYSmEUyHLXMk6fbabjEECu45CJ9c716fxz3gUwjbR1f1Qoy8GZ8UZXSuz7RV7ooBJPY8jvJtSFErwTqwQjKijF",
  "key8": "3GYyMNJ1KyjbhU8dV98doGgA4ypbveCTapGn4N3EvMk8GFeCuQbWg2AHqiKvaeMdUPL6vEZXSULgy3mLXMPHjKVc",
  "key9": "4aR4S3dfkwExSPPzNkjZTq49iem68ejmo9Kt6qAz5Fi5W2haDzqRePP54trPNnL2186bwW7nCXUWC7F7GHyd9f9S",
  "key10": "22tvFneDx1LigArXqATLYLQ3NnsMRBSTkunkMH9YcNj2YaAFBs2KYYzL7cMntmxguP83iwqULndyD5rjb4BYRyAn",
  "key11": "5WkWfj6Cb6njDxxVZmAHR7gSwNKuu2ZMWhpnh3xeGf549xLj7PtpYvJ8rV5h1ts8VP66zQCmjEsMKfi7hkpYWMBp",
  "key12": "AmHaWwiY3w3Ft3hBuPWVoq6mQs9NksMJ5tCUHYzJhghtqr9ACQUw4FWXvS7e93tDHxj33e4FGfgeJRKnQpNFR2X",
  "key13": "4aqWNJMH19uLMVyvZDUi3YQzTLZyRZWX7mdBcpYj8wgRDdKbwsogdBYEXgMFUzHQ7VPDFtxceVJ7NiuCXm3THMPH",
  "key14": "awEyvjz5LaTfiVGVfSwke6LL1zSzR38Bs7RJ9y3M3UewMc8DDj24HzdeWcGcYKAkXRPxTToFSvY4zZAEgqDJHK8",
  "key15": "2d6P9GNUZq9UNFdRoATLqNvsvvM2CkMR99ZFRLY564KMVXq91LS1pbKpnWiaedjbcYED5Xdah9ayqDUGEpCV1Shu",
  "key16": "22wmPeUVn9La2PYLzRevqKKFY5WSdES8JEVBu7DncEjZuHv2mRw9AvP9ZmxrTJDiqQ4KG611pKBBpEH85v9F8qzM",
  "key17": "4vgr9mRuDq2L3cH8p3vqa6kwMjk22wt5WtAgYD1wupTLxcMmM4XdcBWKPSzGdxL52bn3voaC1pg3g5niMGw96t6e",
  "key18": "5awsphnMSu6ATFfrSqGAWzbDK4SmRcDRtALuyHM27eifv6WhMGUBigJFvqsotij3TWvkLJuKt5Fe7VLYRXRNqQkv",
  "key19": "mSXm7MHkm4HsqenAe2M3UZ8nUFuoJkaHBPeptNSUudFfbDbRAYB9ck5tMkHHZagFZzoEdGkDGhAgjcwDK8XhNUj",
  "key20": "61EMaLUeobtauikcWUT99zveeWVdpRn8AKuJGTkTPWx9P7K6Kd5L5FGgbhwnFotwRYs4ymzTzC1EYZ9LvYJhWDEZ",
  "key21": "4vTp626p2jW8pyf9bvFwwssnuczed4xdEG1cWW3wECNJxFzmN3MGpHHZfQ46fmDiEESrc7WntUCuQgnn55bhVbgY",
  "key22": "24z2DdZtvfM1CpCSHtTRk27aYpc6QFVUjWTChfRim8HYBDuAZH6CN4oojkAvLnd1QfiDPfzDj4WQuyYd287i5K2F",
  "key23": "KYc5iaYSSxMpUEfENMB73TR3PgMVXobDHi499hGn7BWfJHWBArZViSN54bitHtEw44JPB6kTQ2cD5WXP5rNny6V",
  "key24": "5Cz89DzJNc7peyLp9TbKxpzWcoKp8j8R525c6c4ou7bBke5fQMedmFwPTdT8a7veyLGsHJZfkMVmkwdiAqJGqYHR",
  "key25": "4toBsgyL9XgdJdmPAHxTMihRAGNYxGxK23RZ7q3ungeKmFG6HoEHUvZ2CSnV9ZVXx5Xcnc6VdoPEvUVJdWWQPCBa",
  "key26": "2W7T5opaAXPqp2J28CjcSNpV8X28ULK4UcMqo2gn3xhsCtvJbErUy7Z7PfbNsEj8EFf7QjRtJEnEeQQtvUSZDPXj",
  "key27": "4NtbiDav5QE2wmfTRQc1UajuhfqMPcm6zMsDGdS6prquTdy3VTpVrZQgmNvMeHMBgQ2Trx9YafH77bp2QBE596ZW",
  "key28": "2hekrbtyH6ncQdqoQFK5URNS9ZnaMtFsQP6cgY3RbTWE2sxftzPcNgtrj6FGi4KkMw3Ri8t7eTBVNxTcr9WosM1W",
  "key29": "3aDz8oNUpeg9QpkRzYenCMw76t5orLDPwNg3oaPfHQsxy94ZJfPqEZzh2HueBNtRcEiTMLUfn4nLEiK5sqhUYeho"
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
