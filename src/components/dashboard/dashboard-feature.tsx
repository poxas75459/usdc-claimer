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
    "5WnXtJCjhduHp6ixacRdcsPr7rGT4A5LghABBLTEGFHiXEMrb3gUvJkmouRu1xNdzXdx5nRPXsv9qCvfvHAfTfrC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XK45TmWm9BBbk9fYypCZBgrFhwU187VEGhb7L5WuR9rU21Bkz64thfZh2Tb5ZjNv48Kb5DmuLUCQJ7MYPj7Pdz8",
  "key1": "23hiB6AY5ZeNUp3iUUXJ1aU3vNau1sGzFPHbtCE2pQsXytLVBJdLRbaGLvYeJ1TZups4qAR9DhXHPqkjwvLP5UzK",
  "key2": "4L5JnabX3BfoJpKicU7dJeEGwgn8LkW4Y7JsjLrdJStKPzToBWRTwS8K4QVDMCbW156DeDd4jBHexdNBvWNMiEq5",
  "key3": "73ui8cLn6UYefkiFke4wzeBzEs6MDWc9Uw4aac489nPgVfuMeGKAtWpMowhu8nA7vhqmu8V9JE26BBdjP7sVN3x",
  "key4": "z8K8TtuK3S9ZsfAcLx4Nu1JHGfMB6RALXNd7fh4mrTK2XK4zvH45WDUWbxqrWWktxpuZx5kmhb47bxT3fCktJuZ",
  "key5": "JXHFA8jxvq6gQLoE9uNpsGWzy7Fne2P9J9rHdFSw15JxMG5mnQfHVeN2jwjXYVmUX3SQGU57SvZd9TvHLyADo3g",
  "key6": "51F7e4tHt3ykuKCc5dTknLUVSuHPQmrmYUc3vUfsD6hHceizkc6JU41LXu5HGF7r4cVfzSx68aooWFEN4Hu92k5r",
  "key7": "2oJUb75hEJ2JX5VujFezSmZCUiA9Xejr5VMwS5yS6NZGFdKQjLTeazFGr9uyVdNif6SqEPBrygCYryxdrjutkjGi",
  "key8": "55zfcXRxaGAKNYM2bJMwzAFVgDGUMGAvHKNwZaUHfo3jZGBuiTkGarByL6FxBCGaNLTSLPAhejsGuwKnnisddbiP",
  "key9": "3QUA8TSQG5HgBBD66a5S555B7FvqQArfjdcJ2ojieyAmNcRPmLvmGeyjpw8EMEZXUbeAwbpjN4pEmQsdqDfyvHm1",
  "key10": "3GtdNG6JpcYFGhJd4Hm9JGpPtnLisrxofYBxvVaX7HV4YxinaNZmCxc4uGuWMkdbhxWiFBYAvjJNmGEyrgKqJmLr",
  "key11": "Kp84uyBEv1KTDA8f2WLLmrKjGk4jX5oEQo3EKtVpVbnNiVJvb9CJuEHNiuSJL5i3eWMaLZspCmk99ei29cGsXeH",
  "key12": "51cDRNFhyYAJ4BZTG7vykXPetuFwZzPAmngDJrF5PuDZUFdnjXhSaEADYXqoN6PHjbbQqPcYg5qDfvepReoEQFse",
  "key13": "24mfyUSVz8sHNuaXe64uXWXbhDoyNvSgrRbZpCHpQmypqeZih6iKgRmw12HmMEmiAxNSgypwvHLYF5qAtKiTi3ys",
  "key14": "5TqpZCzKghXpY1YDXydo6k9kNqSzzw1yKEFWHu6vJ2w5odzMJkUDFag2oqPqwBRXhKFTEqagGKEHazWAichK7QDa",
  "key15": "5Bi2gGuR8aos77tef4Mw4bTimJjS88FVAj2eFCPuJxjcGXMhwmeusFudJqdjfCKpZKyx13smkSjNSKpD6yy3diHZ",
  "key16": "5kqWEnTZ4hJhJSEx1QkDugVPEoLDUqhfNLEhVUGhjy474qN57SU6D35NYjxfc4Qy4SGkHeAYjbahtRooNsaqp94d",
  "key17": "2pBZYYx8o7SFLrU1k9Vv5tqSfih14w7ZYu9G8pNEkMs22D7CXMgWedL66JsMANbMbeSrPJuUrpgFnWhvB2te5VAe",
  "key18": "49hfm3FEtSK2UDouHFSGphF64guZzFgKp4cjpVnorh6sv2mxR3MDShP1dJJ8Cyz3dfPkFuF7qx9zgmUXs3u2yhfZ",
  "key19": "4tFASTpUhLBDEbZtHGM2GYLA8Sv4xKTWJsGTuuY4AeXywjtvj7xRn51ryAfrqC1yBhdjayP3vvJU9A4CAjCMdfRP",
  "key20": "iCTXeiuRtZ2EcDgNRxM7KdYzWcqTL9PXPfMXHath7V2QPCDS5DvPFimUU1CvuubCCrUMBzAavQXgB45AvGN71Gb",
  "key21": "5qWGRzacmnpTdFQipuH62D136vqSXpGbM4Eta4LiGFvBCnFAqborDoUrtAjzTcBvTxik9jrjBTo6Vd8Sk8trVQty",
  "key22": "5T6t5hC7c75CrXhVD1XhW6nTsvtkivx6bNno1QpFEaw6yDV4YC4MWBmnoFRQZUDY8r84q4A3Xp9zq45MJzgKCXfB",
  "key23": "zEPsMXG7w63ZQnKhaXmaegDhDZwq51k5Xo8aFJ3apNfBFu89wAC2cGReMER1P4y6FfC2hFF5EWsnEhM4VvKzfsc",
  "key24": "APh443KfPefsiVkd39qo8NwqCiGGYRkzAwjY93vNQmTrzi9AfFUyNjKQAckVhYrytY7JHkk5qUa9FNSnuRYR6p8"
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
