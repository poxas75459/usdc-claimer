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
    "2T4xApqCz1tC48a63UWLtXijU5iUsucdNyFrEVjxj2ttsANcuUMmpWcdhgsDwURodMi145ZBbWbAcne8YvziEqVR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53PXpEDyQWEE8BaHiTgFoiBJpkaBbpzgTvoN7EgEQYDd2GT5VKoj9LNqiPfjeJ76N6DoxALb1ntvaRxpEy5eGSTp",
  "key1": "2JAUArudCB5VAJDyAtSku75RBHUUoB5a9zAcjcu7RQjyw25xCV68Q3pkNxnYSkbaFXK7Sf4ejRTTYCRBVuFf4QWn",
  "key2": "3wRPN6WLijfTsnZnQjQuzujJanf1rg2Qmd7K4yjgoLajAkcr75LY9tLtgLqGNhPheQGp6AjqK6hNZNw4WpVXtQfm",
  "key3": "5SqVP5cmQdy45KR8gFcR2nvU1AYcByb7WWrFZNw3nCgpe76tN1XCMZRmBSgzyxfr3waTkCvsLYHSpX1JSiFuBojY",
  "key4": "5Ftz9x8UbduYvfPgpmgVq5GyFHJrJRJSmBsmYKgsaCWcjqEwsCSjc2S6PWTZrsYPiEGZapcvy8zPNbur4TJJVkcv",
  "key5": "2TEFtaXSFsztEFeLnu7R4Pt3E594qw9AEpN41DQ45aMrwVgCfZ2GhK3vxzA43fsRN6iV7kRqBKqBE53FqaJZFckz",
  "key6": "3nfQqtaMB2Fkb9nVvs3xiYM9Qc6yifk1FjGyhKpZcSoVYvdib97jfmqJm1a6peymySkV9sA6BJkUWeQzHnpjyQxi",
  "key7": "3aMAK8CE6Ysmj8S5c4JN2a7536J9s8Zbbu564CL8QGikzQyDRvEstgKyEFjB3cmCbiwBc8SkQhUKK3jvHVUAWGMm",
  "key8": "c74Lfs6fvM7MbYiy16rhebZK6aeRfeEuXAJvLVAV3uv27QuJeCPdtPYf4n4VTBSngk3KziCg8Xaf5awCyPY7VNU",
  "key9": "boc1wEAUPBQszpcfUv34R3998yEBQRtQ5GJwyaZDuez7bfSE3gDJYvFYTTQsUp82mvZ1beUGESZdy7rxvcBUFDP",
  "key10": "3JTTeDG3LNBAmgB4wAT5eofzjTmKqi45ACFznSG3LGK1K35KDGVFZksScPeqEmyErkTVtPGJWETf9PZrmLi1dtq3",
  "key11": "4dyM7P6ZxgqY5pFCLNwBQfsuvvegvh81khE9jC5UpvGDk6afL1yo81ZnfcbeEBBDpJRFLiPwgPG7esbczDwTb5xB",
  "key12": "GBzj2BfR68NBB2SdJKo5kS8VLB4KQ9XhprNkRpmQDeWMgrvfFuweUcEYekNzNGwdoxq8hQAFs6z7RyazNnQzKUR",
  "key13": "5JgNZd63g5sEKwHpEFmooMJ1YtnZvmveQ65fYjxxTrihdpqXYosa19nBGnshrTw12Jo48Ygb5op6hDPVK9gKmSkw",
  "key14": "297jfTA9FNLUpbnHJNPAEphiWAoFUnFq1FaSkXxDfziSkmpviZA8s6AaRpvzcidingi72oxSeu98XwcsHN3Kdax9",
  "key15": "3WP9reMrLvPt9KNyZKTGVMU95FpwATALo2JVTZ7KRQ6XnMEnRHa6QrqSoFk5qAJXnpx1vRfJkYejDnEGQVUpm6JV",
  "key16": "3MWy5WoKkBx68yEKbzaKZVRBakRriL35ZN88uUar4F3gkXx6X3VwaJp2ymNeNgjKKmRXcZBkueYUcZi26B3jCnYL",
  "key17": "2528Q6eh5GQ7DwfA1oj4r4EUMeCrmLmzF9WCcxG7BHh5Qq68xazjBoL1EcGSzoZ5iupj5wKpnvgwro9KLNzi5WnN",
  "key18": "4T6bevE2MpXZJkYs5Xi8irHAaPFHsrG9cT3EdNdodKoAB4T3boTHJwuznYuk6wDvJGgLyrPihQw4fWKrHive597n",
  "key19": "4EmLmuan89x7SRs15pz6f9inyXN1KnAkuGTZUmud19nMQPGJqyhFrXeWpoVXjADowTod58GgjF8poHvgsbwqFiWS",
  "key20": "3WMoBHwrkTg7AHpfHfr5efedcxx4j85NLCsnLjQGK8aNr47JpwLhxrD43em8H6oz7W22wyc2zBE8VSyub43pESgm",
  "key21": "6UvAbEXiAK2T6GVV72dfYfbytLpnBjz1RTBgeeD1rkTxP3bxeLBwQqfXNT2qdBt54XAwPUXwRBaPdEqEBkVPLFr",
  "key22": "5ntFbo2BeBXQkZzMvbnMW4V3CV5h4sk1HSWxmb4YYUAqVfgdDFDMryUkCsFM8dBkZiaHsTiEb6u5gGP7wydcWush",
  "key23": "nDnVmYV1DSBzamSDBsgTKCdWLwJx5tRCPhkK9H7DTWs2MjLmQy5TBCCb6bgwMr5po88wcBnVuzwnFHbWagCouA1",
  "key24": "4ca3Cj7pRkDgs726Hr3h6xu3cKHXw7wQ5hK7GBwS8eGG88D7qKUcxRj11B8zsAGaPPtLHbBMSWxxto6757U4BSQ2",
  "key25": "59LkED3dKtjTRWmAe8uW2pqsXHD9iM3FAgaj2pMvGMrZVrhDZugagGCkdMVxShEfe6J9HZKv4KpeSkbKPG6TTRHw",
  "key26": "2XAoq7vb1eRLUsEkpUAupNfWRKGbe7GVxkHmva17nXL6RSvyULv8h4gKL9SpW6SFwxaW534avT917oJsfUiqwcmk",
  "key27": "P9bob7Wq5wwGyaDDjXU5DkgirSnLD5nGHxpQXvWKJhmSezJU4vDbsxER9FveLxb57pKwqyBJnA3PbJ9xJsSKBo9",
  "key28": "5GBa4awc8HXChdKKVTxoZbM4oG2hr9inDJJZCm14NW89hKnS56aoapePk3GCBh7b5SVBkxJ1Egax9BuQU1Pw18MK",
  "key29": "2F3ysuVNft7uAzgL2mYroDBpsVcSAaVHMvqFMQ4DVs82ddJEuQ4VSHrSAb1ujYQt4VJzG7i9JNL4YVk6prB159Va",
  "key30": "3JaHBCrU9u7NZqvTg1fja4jKnkntmbnVMxE6MTi5ZwkWgRrLt44Pbr7WfDdp4CzGyay2jkuhVE5ssZs4YX7Sruzd",
  "key31": "5dhNJsnR79pDdV7xtXXbfFLqDC4Rj7tPAeWTvKAhWi6Mqnq9MpmoYV88zRcjdfAi2hQwPMQLo1gBa63NxXsojUCq",
  "key32": "S3G17eSVj2U32ePtanSaJBTiK29SYAGDtJwrprxNmPXYnJ4EDdvHocRDCmUrfSmZDP29GWTR2YdtSUFpy4ZAoLq",
  "key33": "3WBamw6nRPHGGkfbZqcg2dJdYKeb1zpobHNq2FZ2xzVCfjnmknZiDorcT7esEXVRUy9wcHmurHt2f5iAE9QCZN98",
  "key34": "33qjzeEe23Zp6Y21e6eGVkCuzjWYJaMQ3iN4CUeDksHF8FpVuqUD7PDKLBaQxWDPcTpjVG5HHG8njYxdrPoqmgvb",
  "key35": "UBLpxyxb7J6NdHS2A1aLSPi8PX2VyekL6bsZfNd6828aX42wfhe87weTCJdkMhwNSCbDzvfax71C1UKaRoFVBBd",
  "key36": "2962qksRZmUWY2J2ZPrnK8i3ZJLvCUgxuhVVZXkoU3aLoPxso5rzZqYiz7pbQ2ZtU9XBFF43aDZz9vsepmTNd3hy",
  "key37": "4d5ocZENuc76qGXdPCbDAC3gTCjHuXYt5Bjmt8JtJb8Hd1QckmgktbYoxt3CuzUx6wqEpCbLJQsUf8jLgmpzVGzG",
  "key38": "tt5cGSsTry4DVAEwmgDWL6CmX6vuyQfYa7JB7u1w6EmAYYWHDrRzPzsjWpckYpjy42YZhwsLQW6jezPGzaGMW4a",
  "key39": "35yBBs8XMzCuVb3bYWJ8z6wsXo1tgsF69ieHSaVj1jxwJ1n5Qp5i2bfWb5zJvJ8eGt6BtwJAuuKpqST2iFXZsNku",
  "key40": "QPfb2qvD94De87dHtVLNVqHnM6tzA1gEWMChVkhof6LJZurUaqvgAPWCxbX9vdpPvEY9fLJ8AG6gnX8koEwDphy",
  "key41": "56tJGaj5GYqX8BoJv1xuV2XTf64yPuhNDX1RGzCacMK9nmFYAPMHFNSBxsEbn6cgt5Je5pqJhG3hyCPivVYotKNK",
  "key42": "sPVsj57s9sjDZsXefXoorKeurpVCQ8YGn2hRUWjMPu7jJRSYr5B191tZ2FUfxYMokanudhNn9khEzWqeXkbTpQJ",
  "key43": "5YtFw5Qd6cwD4pwu1K2oaAhY34hSWZvvS5jfP6FJ6DgY4n5aVNtGjYBj9pHmJgbJurPBQSFZXir3dMNTS3Wi7u8v",
  "key44": "27ogZbisNraB5rn7R8ESwKNbd37PERswR8BR65kSpEck9GXjHHJJf72vetiCYeawHzjMVKjtFswcYBw4BvvAUiZM",
  "key45": "5tWQHnDooSKi9uc5qTTfLet9w4LSUswozk1UzAdV2xMDmDbufhZY5JgUc7Qda9noXptwmho8CS943CgJvJUn63D1",
  "key46": "2Vz2PDVaNpnezdfSZj4U2gxpjsXaPwPYUw5Lpw1RJDAYNNZbkxBZ7PhTWM1NAN4R58SaX4inP1qeAo1vMwLtJwf9"
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
