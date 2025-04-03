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
    "5rforXabwHC67fmZ5wxhjn9Euoz2hKvXB4WhtokHXZrr2GMFDonAU3WYm3zfYEmhMQ6G5chWqbGdstogNm8vfnuf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35NxQ8j69HjQZfAZB9ugw2TCUTUsoVnVQyiocLNxzFtMe173J3bNZsM1CCXtnNXVczNE1YU6Z9TRnYjNGNLmRzpZ",
  "key1": "56s98EBo4qJEYAz4fgy32BdjUxpRX7oCoL2Wbm6aK437ZkWQZMBTYqKDmUAZWqqNr42PBdjcMahMR3jEPpufmALs",
  "key2": "5FSHe1FCgccP1qh1DMzjZh1udeKwCBeAD4AFpHpTcDUiWSjyjQBAXeVwr9EzgUCJCAReSVQywA6o6JchqUHRJojD",
  "key3": "3LKtEgR7vfADC9KLPCeXmGM27cBCHjJvEUWKVpQbMfpgcH8z7QdU5u48XE4zEdyD7Yqc3h2rebjYswjF321z95Cq",
  "key4": "5iz4yuBJ7SqEGjizt5bdoCuuLgWxNSYe8W5X6HAHZAySCA14KYDh9iMCCrHjxWtJqjtbnv21RqQJWP34ZsEujXvw",
  "key5": "4Fg9eH9RPzsYSWNUvr6LSvnxSfhm9e41qnmcDQFG5Ec8e8EiDwj1GDbb92EAtixAz5rGkaZEfVtxQjUUaNDe7UcJ",
  "key6": "3vpHxUJiuJXiVLonMq9EoouqtsnGEaFgZeRc7fB9TiSLmHVKU3dfYbA2otQkyTVwcnVTGTRi5qgLLte54Pzj5jNu",
  "key7": "3SwetVxVBZmB51wTWzdUbcMsMfTSrJVfhWefo7LhJgYVJKWzXY5b9NPfTJCbDnL7EpvkCM4UJWmmuYHhuXsknixY",
  "key8": "CNbETVxVjqRnXKQzqoFq4BpWKWUeWHoZHcdiKeQkKeA85RYCuHc9C4uRv54o1y78khU2G7TTPMrUUWjKuRnKSfT",
  "key9": "4aQ7dUEUs6jEs3Fj1DBejXJ7v1EA3FSn7SNJrPXTxJCTw3hxWhiU7zvdBpmgKm71b1YCKmKMAkSFiqxF7b9oUak9",
  "key10": "2VDLpN34Gy5fP7FBvqju8qJMVvgspNYnZioRX3smXa5acQAjpN7Y2MHwd1XEvcBqd5w5erCo9QtyHTGLyNbtWthU",
  "key11": "5zPUpmTJfPftXFNpfYy5pnTYxxtRU3jBrnasnEfA2UhupsUnxCaXPhrnZYmGavrQ5gCnJoYCa1BADuy5KeATFMVC",
  "key12": "4SM16GvPiR8fgMgUrB3zwxipQd3s44Y5mGCq5BSohJumuxCJMjWaAAq7perFDz8i1dVuEmFduhwtzW5sHLcMPRgM",
  "key13": "2pYRnnHiJSeozimbus9c6kc7ZxBJQUj4RWHP3miXrAo3gP7Pw3esTaxrmfvF6kvsUJvuEwDAFQKzRuTpKzYdycaL",
  "key14": "32kq2eJjLPQ1Be6VVE3Poo3rPVgWbxdUSdwdFdBt3q9KXJdbCQaUqB2Ev6EGn9j4cTHfqvfKhfqpLvhPUcTTUXnP",
  "key15": "43K5bcsvtk7EKYqWQQZVPhMxFAvSbdm857M2VeKsqJAJqGWVUaEWJM9oqkth3ffdKP7egRwFpamtFBJD4wXkN93K",
  "key16": "3ZQr5Shtxfz2UnvQyjxC56dqJxd6t4ukmZqEsfckjoSKaXEXkkER7imedzVkr1JkP15BXC1LvrGaaX5XG2oSb69u",
  "key17": "4aZegzkkHo8WAJFxrey29P2ni2Jze4BWSQbkXXcBNdKVyfwCoeNo6ABAjPr7GwVEZjxhCDnijLsvXr2AfTkJ9XXS",
  "key18": "5LLwM9ikvZKzZYu53oHDazrSE1jMKP5zi6ga5RPaenLUhjwDpVAUtHbgxsHewRpLzsMzRr791Z4AK7y4HcYb1fxR",
  "key19": "N1gUfGVXV6ecLJPMBMTU4nTV1A8ncxa4hwtvvPJ3a41Eh6gUVZiuKs2ct1PK1MvxxFxN72EdkaxG7shSFuMMGfQ",
  "key20": "5YXSmcJwWH2X4HAScNDexjGM1jWvJmNucWkng5kN6rWjKnThDiwxoBggCZuSiYFEoieg2RGiuAyjCMcuiNN6jwzW",
  "key21": "2DkycGrrkGPbrsrrbveJZ8DisX4GE6uvB61LP9PysJ6z8Pp5gwPvSD4DJjdpPkMLYdPV2YfQmKcYqvbDTFtXAFdW",
  "key22": "yeucgqjaMWMy8WSdwunvdey87qd9qdpzkSVWa6HvqjuKjVQBMmB8La1JLEqE56pkZ9dVWqfeHQXesXF76D8v5HP",
  "key23": "5cNCFke4VDc5gEP3fwbrsw6iTZ7nW6Sk4wZrLRyKPYpuowYC4CnGWNenYDDENcFwYYzWeHgHvWALnQJfzgBvZaNd",
  "key24": "38memc7sD9Mp7qSVQaUXCEvt4r7cpFNUeNb6Ma4DBNersgYTKnTPvZsP8HAPZLyDP74TmuCUpZmRNqNks6SAoJ5m",
  "key25": "5iJRM7D66AbhV6qJCCPj5bpkjVYbMDkJtciqdEPRSEpkz2ByKn1jk3VhQu4YiH7i4BdPaj3eyrL8dT5ajuJa1hky",
  "key26": "4NpvyXtccaMvK8vb6Xf2km3cJGTFzx7KzesRaSLk6GBoL6DP3KXHVauazKSrHjKMx8ebVrj1YJFvGB6rDJdaDheU",
  "key27": "472kSfYZwuY6fm4PJXb76QBbGBYREvijiUCu348vYHYbWMFxC2fP3BjfLzMHqGTRGLgiGSGxaRpmEi5yW5XLa2kJ",
  "key28": "2mLdjKicXeNknGdw1QTTaAhXVGhzBBbKcmYAERVb7eFSHXMwJn2aRs6Z1EZc8xhPK9zHFwXMEpa1HHyrwBjbQ91N",
  "key29": "49DZKB8Qd7yQyfLyug6R9nS77TYLUDF3Ju3FNtzGydVJhV3xQz582tjFrr2d1mEg4Ds9LeFuiHmn3p3Ai98U2o8V",
  "key30": "3PBb51oJ6iS9DRiT4WLEfdaEKGWRPpxQpq1b1kd1XynKLo3cNGbTpCyoN49Vnd6uTqV56R8MumRTTGxXXX6xVzd1",
  "key31": "2tjw8XmCjxNWYe1JHgkX8jtKAaKQarEUkXpk4Kxzz81fgAsaY4fdsscMoGnBCjhoE4KJpfvQy71xitmDQp4bQkG4",
  "key32": "XFRdDw84hzVv6nY3SQ4Tk3cdJpQZ6bKr7N5JDofcGPKY7tPHJGZmEYa3HAQ5Nzpz2mRAR7rKbLQksSQAtQaWQNV",
  "key33": "56Zmt6JSN4kLNmoxqHXUGKUEB4r75wqSYTXotypcuBcp9XJ9VaGgGwEaFeqy79zBepYZoCcurFJ1Y77Z2CJpnyyS",
  "key34": "2iBiLmz9pxq4VUKqQFg2VPrNGPk8E1uKK9GH77aFAi5mxVAxPYiH6k83s9rUJpC9v5afLPyVbmxFUiniUeezxVVG",
  "key35": "4FLnnKgoSRwTU8hjeEVm4Ce1TxLFqQrq69euZqeU1ucpWYsB1oEMHNieP2xsDSwcakN8JQzdQ3PnAaMxQnMYLEpE",
  "key36": "oEDjvcCc7VNwnBuuJMromXrcGTgdWvBxKvPicsdPY3ypqHyjg3iecjSmgBzyg9rnPYDKGfrH6ziDAL1AGuzehk7",
  "key37": "2wym4cqk1om8574NT6zdAvNXkfGMTY6hhhMmfUzEp3qFTjspgKBZhCbEH8JxBm1tfZXqwG3nYroAS9ASQrMDQ1i9",
  "key38": "KqdNVzpgit6e19XzYGm9Yzg3Hie13EmqiwsGUu6ZTbPEtUBscht2BMFEB48dTKRMqMbMry16tvMYcLTAHkLxsmR",
  "key39": "oMwiwrix616vLkaWWr56vx6ff1FdFRDneZRwofDhUMCPsqZW3TZzbmpW4sz9bUjTCrMGjGukwc7eoXt3FNE2FYw",
  "key40": "2wQSoka3BQU7YVk8Nv1rwzdnem4DiZUhMYNk9kYVqg9U6BAo2hLCRBWerTWkDKpMJzxTicMmXwVv7ShCHmsVsp6Z",
  "key41": "43ZnHsqzVSi4NxAVm1dN5eLwZzCdrkeEbeedV7Ywc2gxz4tpJVyTw9DJbjrzUhV9PSURGfsoK6ABizDjcSMbirhz",
  "key42": "ZjHiJNeDJ63FL5Xy8UKokdmdM7XfHiHmo8WSCh9q3EVoRPn7Leq11HkovJdKtUMpxfz9DfTn3GxJCnZkMuidtx6"
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
