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
    "4wNLfoG8e4HpDaAJbVheeAES56ER5G1EFeDYKMBreXdC3VSPyhERdzY3Sth71bG5An5ZqKjr8gQxsxmZehd3BkuK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hbFW6bdLf1W1jzwpNq7Ah1MTUx4pMpd8CRKAvMZW4Hfo2vtvXHm57Kt35fqNisYNGv7CbJC8PojBkPoCRVf5rVA",
  "key1": "3cyfJ3RuN8TXRsSgAvsZZRdS6eHtMmQHRbKXTaQH7akf6mH5RmZDQrKRj4EabFGHHvNkEpPyvwgq9rzRUtmadwhV",
  "key2": "3JyZZjRgdBA8gxKqf7FUc2VnCqmsBzg8m6o9gyAudWyVEWcp6oa4sLWwUH6cadSGWQdCauTGb2KAtGtK8AM9fkAi",
  "key3": "4Eu33JmkVb62sT61YDFi8dYtd51Zk51wURKH5ivrZLtyHx9zK7GJLLkmXyCoGN44nd4azCBCFjngdeoVJ3QKVrfW",
  "key4": "38o9bNG3iADfnVsqmXNSiheo9rq1KMfKLm9FbGPb3HTWZ7eUEcgbecEJEDiFX6eV1scdYxLNj6AFagZwttdfPQ8B",
  "key5": "2ySKMFuhsKJdTMhkbX2wdGtk7TSw43MNDy4hagrJBwx7S9vKBEjL1j18T5xdb5xAn92MudWD1GhyysY7L7NB2U2t",
  "key6": "2RbZRfBmeitxoSrqtig8yKLcSTS5ZBZDQ3DmYiT77TozcWRvDPpBJ9kGUuPmdiFs6iU9juENn79DQF7mmD4QD9AR",
  "key7": "5ZQmEofnnUEnTE1omyyymsUeKA7wPRXtC38KTpL9wdq1LmAp6EL8RB9R6SGTgmVPMYLZt6eSytR6HHngauoqkZWw",
  "key8": "5KgP4qWYiCNfjSzsvavvr1uE55hJ7GhP2b4D66CpC4sb1VTtDzGFk6P5xj7utgYmpG3748KuZNmFeeqqMF2S6Lox",
  "key9": "grJUSAbUUUtHPWLnKV2QsQ2yQmUhmAc1Tkg12huxNrtY4YzxsLNHzXytPB7s7CuJxFEYkterK4eR1jY5WgLbWvC",
  "key10": "HZRKncVqkoGQqpfmMq61sS6UCSvSsgXu6AD1aWpwsrbyJmJ62KwnXaPHirYNbVP3fCLAPSojqeGTRCdMGB8oWzB",
  "key11": "43piAcafXxYZPE4z2GAXkgKuJhsU5xH7bZCEkTB2Q5yCY6w2g3pyPPT79aWCvY8KUezNgYxo8kJUBkHbwzCwV2eg",
  "key12": "4mptQNg5AGZs3QJzmGWeGSgP7qUsLwqr21KhWqaKKVkXd9YkEszZAUZs2zaaMMRF5ViXwyK8UFStUokS742BL7gL",
  "key13": "5aZwE2RgWzKvhbamBx3yGrZiNxrFBT6MC9oHdkYfcoKictHJaVkHYtmYkTLHzrTcja3KFpUPMzfXr8zXmQppEfGc",
  "key14": "5SkMwYkESnhSdUkg2qzsyVyDzs9eArqPrrSJLa2hDdMM2aDtsUjBXZQFunUuPnuGepxyk7fStPjUSNJaZq135eaz",
  "key15": "4vjcoykNea7nfZ3wfYPtUTkgMHwpB8XT19PUpGyDGqo2s3SvAft2561mdwCR8J2QxnSt52jJVWa24wiLL1d1Kkb",
  "key16": "5roocfRtno4DDiMRFQ6BdpEyA5GaLBpacGntWBCdUhqryrpAC6Xdh7tCUbYP4evaC5hRHAQqMxsNyVLCu8WYVLrN",
  "key17": "QYiUQwrJCiYjEweygDYxLZgBcD1M1XJ1J6Q7PLo393xwmLbjFu4HsM2xynGY9frfAKTvVzWNH2kvcs2dzaVYELX",
  "key18": "1Xk4b6PQ5J4P7w4BXRwzh7KW8mGxWb43nJmFBiFoh7P1uBWQ32wshTdgcDU9Bhj6LaygTbKJqKeC5LLZnSywnPS",
  "key19": "5ZmHvLZQCtKycmFBUhSFvoRExH1sUy1WjZGUz21UyCbQhNJX6JcTkzVeta93nH6eRbpaPjNyqAPbyQ4q2H9w2fut",
  "key20": "PXQ6KXc6ySuWYVj5VvfXBKGyqhwEB81tr2D8euFCjRWUvgyqTenndyHfpJBE2xyVUw8AvFVQEHQwgfxnrE9irJe",
  "key21": "4mcXbsHTAfK1Wn4eicLZzPihWgniZH7UVLsCUVd2HhVLUWyrwWU3mxQ7sRAhueCpQ7uzRr8mcc615xX1X8u8CfsB",
  "key22": "5G19D97tBvRibTGt9UTMjiBqnAjUSc5uqwrpdjUx55sLMp4pqVUedC38MSTcGLpBBbFr6E1tKtuiHLehhrUnbRjC",
  "key23": "2SmTiaV19AU9yt9jjuGWzHStSR1KG3hJRcUA5dMeU3QVL3Lsd5R9wSL85J1ZeDTyyKTazbNBRonxNh43uSsWxZEv",
  "key24": "2YEAv3bAdus6xkHMmNSZbLRRmshJaT61nTiqQLtizxtpBcswFsBm93xDaWaub4WbxdsXcZ5Lpi3Lpr6ysXYYgjjz",
  "key25": "2sLCfpkwhtpJWZLU7mEX31oRmeGnvcsVguXZDNAC5juKFYShKYCgvNE4hy23Jh1VuQUfoF1mbBuz2cnPCoFUEfGo",
  "key26": "5P5t3jSd4vPNHMpenMJwCtKam8oin7MFSaHGCSbVXfjwmy52BPYkyVCfP3q3NXeQSywfsbWn2ZqjS5ZwCa96ZWCh",
  "key27": "4Fk3nJVpB1BsgWya6RQw4Hk4XgWFsUkPFRGs2LMkVhJiJWFstMhrmV3QmDDt8dLEfSYKMo5Epw6XRS9jAKXZCfxF",
  "key28": "5FkmxrLMJDxjLH7NfomDRjpK3bexBt6zX8XnebGtVRyLBeWCR3umxy3E8sMXwEC99BfmqHq1PPiB2ydYpcdFuZAR",
  "key29": "5fJquge4xXw73GvTvWu3gEp11FAhvDexqoTHX9aJ412QxWLAjj2rL5LAU3zoeRq4kmvy6XYVrDttGiRkCKJYA3Qx",
  "key30": "3PrCvEV3ErC2eoLuLJfsc8q5ghF2DSQgCPB58v7LKCuwdc8ib9Nm5QJt1roadjyr17zzXuw2ngyi8vMKqJUGNysU",
  "key31": "4YsDGQeLerEdTCm9g15K81sHHYArf3RDrErtDwqwdStp9of8t9mk5RxS72jD9xc1zzueKKcXmsnK854bHExgPJFh",
  "key32": "2mV69z8wPxBe7msTRJNS9vf4UmB5qpxCmwMVYbZHvoKiA2afj3uSatRNWe61HtfYANvGx74Xdcrk5uxcN4cYbC29",
  "key33": "52hmkeYpb4FaCGpv8xmQ1CLeQQJvTwaWtbnBoxESKXkFgZRr95yoj4G88WY6nVYkacuxMTpjoLAmpaJijDE1WTrB",
  "key34": "3EdJMHnwzR6YRhFzo4ZBDStbHoUiCVwVWRyg2LBRFFktRxHq4U5do51JvrjNbZnoprSZRSdSMGuHZD96BkSujNE",
  "key35": "2r55WSn7FQ1Zug6J8TLmxvdEreanj9ddAMq3Mgrd9yWDZpDmBrif5ZQsLYgou7TXtM1rGatgANFqeWNcqgM4FjXY",
  "key36": "3L9yfyNp3pU3SfFPUZwy1R9MZnGdmsB8TGGATBqe9RRwKa3L9tdvyQ9fuyGgEKpQfvZX3B18tsFDwYboHnPbj6nn",
  "key37": "5sysx4o3WVkNjpuuvhMPr2bwK4YgRC8aGZ2Y8bLXASTn6vfS1VbVgps5H6iZtZZQy3ZPbfcZJy1c43CLQRVhQcVq",
  "key38": "5naVX7NiaDAUj7UNa4T5ps2h3hwMeHF8vdh55hHwgZtS8X7ucfecDvgSD64ycbvaxQXDvTDQRXXWFyRDkKevr2ZV",
  "key39": "f6w7sjHdkWsFHPj8fxDLixyBUsFQfJNPKKEchMGdGS8WJwuQ2p65SnEQKhwkBWQavK2jkj5V1ibV3KSBqk851Yd",
  "key40": "7WhqmJKPQ6th2PRu8MQHPe5AcHWkGCjSeCguAzH2Q822UPgTq6ebZALbGGkotH4fYjT81yECwAJS7nccU6PBdp1",
  "key41": "3GCqHA3LZCLJMcqG8XWDdCx8YJAWhALkiCvsHzvEY3mz375Ey6SYYFCDoMXiReRwZ8GGgKRK4WsjuSvQuW9Eb91E",
  "key42": "5o3ajeqexnJwrijbY6utMVC8QGrsHwpwX8oRajpfjrABzfp7ZKT95FGWioa5GmZzDC83Ma7d1CRRkXDMuTxykkW5",
  "key43": "TTDkajid9XdX98RA8QXHBTrYXYnsekisbmrX6bHNqHWo84BJQNzjDpVKUDjBgYR8K8aSb6UwmBGuhTNKo1fjpzf",
  "key44": "VFTU3XY2jwRJNpMFou86mWoYNf7g55A3QSxygr4eNNNmn54B4hTEopf5g8tazyBoLoMZb2Q9fJuSzY5ZwcnR43y",
  "key45": "3TKeRA9Bx4EJDCnKUZC5jGnsYfQEqYj62kyPLTbCY7S9f2jrup1Ccnt8gozGvbh4GDCJy6LjXXNcpBfaShmMVYuY",
  "key46": "wWCiXCHxPmWTbF1iL2WnE3AuxDaL6DbuxowiRwYdJfDUqkvRpeangRd5qzGpUEba8yy3YcAo91FdxPn7jdsEMLH"
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
