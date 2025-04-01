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
    "aF7TyKQPcBbmPJxyRtJGi9SgeWQM4j48FxXLy2hyxQqmudj9gXvgbpRLmmWX5nwo1xv8YPo8eRHLEVULoNGQeDM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JmoeWf7d21D15jWTe9xcNq1b6XDyvDn13qfN3gCcWzz17a394ZwgA6d2VZFQS9gVHDHrQE9wYi3wFPFkZjJTkST",
  "key1": "3hEUKK8FUBCeMZAv3aEzRtsXooSuA4YjLEuZHonnud3jodspQGgUbqWkm5oWfPrsyDCsvSHzmCbTABo88h1c2wCj",
  "key2": "i2v8ShWibzNq2bzUWNY8y84VKgbJzQRrqJmzo9ZWpcuiDG7VVVqQkqmquHeJrag9uzBa3jQsB755TSfUFFCg4EP",
  "key3": "KQBQk4iMK74yxYAwEWBibnAYx2ytf9sUvtmxS8sQAxD7gbcad425CPwt91J4yF2D1fVnhGT2T4CBStD7aHF4Q5c",
  "key4": "Kqr6DKDPGTt8uF9wAsssfaQBkCQbD7zLpa8Vf149zAsWuyGN24MjBDJ6pockQok9ze9NaWfy78HgJYiY4x131Ee",
  "key5": "5Cfxy27nwRdAYFGhMNK8eznKN7AkhCrbjXbX5tgHgCBwbeueHywtx21v9mGuS7grrixLvG2SnAfYUsNQy6LQKksp",
  "key6": "FSZkMUxuS2ygKRgyPUvya2traNKGksoH56kY5zfGrtDzT18rkSEmgrhREKnncVKYdrChCjjnDQZKojhd4UA1BRf",
  "key7": "3dnLsArG7ogoGrp7Tq8ttpeFDzRBPzryyDDYurQMCUbgdpyRpRnNuVmx3vJfWk6bV7sDwCdrAKZMgDiS8ZWS1gV9",
  "key8": "2FNdxKk9rqTPSY3XxU7Ejr2d7r89NU3yjQriSkKHWHpYEFyGQf64gTN86xYLXmCKd2w3V1YCKpxRNY6te4TyJRG6",
  "key9": "53MvGpK86XVxWAF8caTzUHnGv4HjeMW9V1X9sucF3ihALfBxJBVz1eH8ED23GZ9K2iY5DpJJXtg4NNi9AeEz3kHX",
  "key10": "32A5qZ4QTbxjg9L2RQoRvWDjjGBQC83k8XRqxv7poUoM9ru5x7XdyBqFnwqnmdjpbQK51apKLpnPXv4uPacmXNhB",
  "key11": "2xiatbCwPkFwLCwYRAFb1to97K3f3R7hJot9fr7Sy1BYGUcAnazTqTY8w5Ef63AXYdtFyZkNdESBekJbbRPr3LBK",
  "key12": "4g7tJZya2NqJcGojYmitvCwxJEG3j56HorSTHE75NgLWochEPomW829BJ6DztLDLvGZ3JiJ3TtBCQRXLrddBT3Fd",
  "key13": "2NBdLJwFKr52hJxqDgf4LFKG9LiJDNU3F475AkJJvFH1DmzE1ykd4g6qDtQ2iev7gSVRP3aNcGeux5b3qpASN8BG",
  "key14": "QTqycBvDg8yDQinxin7qTs94RVDDDNYRK5Ve76RLHdh873We2TEqJ47BnAQT8WZVAbxZhn23566df6oFYgRbSYE",
  "key15": "4KdS8whSB2tDjiUzcZjz4NdRPGMFbSRf4aCi9CunSR2pSBAaL81ZrNZAHfjrrm5362x8q6BVFHVxeHAtZkG5R7H7",
  "key16": "2dSbdG7H7EyntW7DDt4r2mnGvpkW8BRucKzH5zpxtNSX4J5xRWLW1vTUEYiT94pm3LRgP7NjW8CUY7NE8mK5ikdx",
  "key17": "2PfEcBponzVM8KQBqBoFQqWqZrmXwaArDyWWUHn3tK2Y6m7iGJv2KHWt9SBLCvLePUr3af33UUEEBwTe5ipb9moH",
  "key18": "3KqqiSXp9dAUZcP3W643KC2ywYYA8DMfNhpKMK8RPvJG32PMQ561Sqx7Ci12NHnsF1knZMNMayPP7rfPTcXaovA6",
  "key19": "3JhQYTdS93PhCA3nEqJrVwMXxgLyVhH74RcYPe9W1VtkzVsyeQ6vyuq7DEyWgKZyek7hy2jkZQNcJxUitwXFV2Qh",
  "key20": "VhVMUAMSWWRMXLF6ctMdPgXBFpWtkjCADZxs7rzNpnNTgdG5hrpi3ZhgtKHqTsjYKZfk1HwnoWfE9WCtakdh8He",
  "key21": "4rnQRfXiUNbfozdA549FtbgyrqjUeJ6DHkKW3eaE2EMw1aDupVG6RFWjR49MYsghswVyC1LWgkKJP2ACvr5w59um",
  "key22": "62htASh8RLUjQup9NnFAoZqEnef5Fn4JAwbExebyp26jbsppF2KTcjFchKVi79SnRgDBtzenx3vSoX28guHSXgb5",
  "key23": "uReiVj3r1QNRYjsQn78gtJoUyzNo1QMYwLSq1JwmZmW9cBw5ZFRS5DURn11hH4DU81TF8bG92w25X9B2kHK8tzu",
  "key24": "4DRghyoYvej5ZHGqrVgkMwngTNoNGJSG6eba8BGDZZm2tGzbEHV9HGiiyy8JZXWqLxJsuxr3L9LNzdACgQz1DSWi",
  "key25": "4XKxVmFp9ced9JyC2vYDaKyM2dxMKcupeVoYBT165DVaKCYa2wivBe1uDJNCytT8BpuGhARwmEtCvbhvCg4C16fo",
  "key26": "4L9BcGF7TbnmLhoRSkXSZfK8VANr6rugQtojGeA1aJ9uSUxG7oaEQAd2YxSK6KDLzgjoZwKVkxa43Rp4cyfGWYko",
  "key27": "vD93djx1sqNo1NSk8b6UR1yS5MTr56ASxuxGhuRT2kweGLWqHrtra9HFkHPBthVD5S5YXHXYnPXyZSam4eewdDx",
  "key28": "217ieFiRXahGK1bH5LZ4bmuaLk8MhqLXxYSXVMJxmesS3Uo6y1WcP4HdYhiTLiJJcdTcrW75fuBnirPzVuvhDZh7",
  "key29": "WUtpQfnG1BQkad6pfUnCdrtc5v3uZkcq1XYZYh2oEm3iAUyg2dHouSfxx385fsy4DGe9uoXb8emXGWsxHchqT3o",
  "key30": "3MaxB55x6tEvvUFQancTrnJRPucKFg4uRDivJj4LikGHRjVjJjAp7fevsAgeBJDgJpuhQcuJ9vWpFHB3zb4wpG5g",
  "key31": "4dSJYRhDftktdyYjBTDHM7czdsA4oW58kekz3wHmAPEQQoVB8qHdM5CBZAHpdEas2MPGddFzog259rP4T8cgjXVQ",
  "key32": "4hiMnqupgsnkWo857wzxHtKMuYA2jYhdBt4r1WhweGEdg3Ct2zcDGV9C4gGJYvvZzVvUwPJGd2KBj8dNZcNPJMQN",
  "key33": "4XatTymGNeNNQVWGFHepYrnJ1vUcWb6QUSgnwCNFXYixy3ZdvaxEWnSeTUGXeKZ98s1wdXTapWrnCm4eg2nN6kZB",
  "key34": "JCanZh3qJuBWKdBdPjJowHnY1tmZYrZBCdfYUendTUN1uNG2LC9Br43EMYZqMkP5oniU94YSgqnvKir7Mk5Z7jM",
  "key35": "UTMGFNKBPp5JUUX68vUoUT3ujejq7bWxNovnfLEqGJ76B9QaPttGwZoh48n7okS4UuXzFArCz9zstmZjaziaDuk"
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
