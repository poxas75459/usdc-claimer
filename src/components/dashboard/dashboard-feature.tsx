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
    "5AZXb3ERdTEa5ZWrg3FrYyaTcLwQhSjV4FJsegoyTfy65qZZved8kcEDsECBB9U956vLhtHN6xYyUT4fCoUd1sf5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E38kBGz7F9zR2rabnWqXrUJHmp9sz1irCM5P1K61Rw3RgwSEtZtKfFzuWdMqCkEYCgvsFFNA4nur4cbSSfNPb3r",
  "key1": "3XPXtKjYbZQAZjRuoGq2DrfSBbCzEQ1FwstqXMpLUgmtaHX4Ccz1gLff7eHNTLCiJM6eHjbXqhKdbh8ZAJD2CV1D",
  "key2": "4HXSDAQA9PCumD9Nvy7nf9CqqXJ3vaDXRiWSHxfCZPQ552qjosJ1PFaDe7ZjEY3QJh3GcPPQVepANodR9JEtQrct",
  "key3": "3NszNFde8kEKKaGhiFo6fxqmUDrEmmfKRjH68br2m2kzica3ucsFub5Y1gqGKY98HVXdrM4ZnbJqdhrqGixAc2fM",
  "key4": "3U4zSrGmhc2AcfSSDdgDjXiXb8qNX6Zd7YX2Unith79cugZn92BZ4q7oC4wtwcQBpERirJsZsbTh4EVhLcDD4uuL",
  "key5": "5XthxZKjHLUCXMU2f7SCxXVj2EpkLcK8pcafs7xgkRQ5zcCFuN2qJtnD1Rx6zoSVo6d3T1PPHyN7otUGmkQj6twW",
  "key6": "5qfGmHTScV6gwKPJ7PfR7PVzC7bBzZZW4VPx5KZVLymNoL6MyLXjAXFZ9dCPC9xuszqzTDJ2CtD5x66p1Tqork8G",
  "key7": "4EPKVEyrvX5PwQR67PJLkD5Tunp2p6Fb7sBkfgPXjw9K3X7sUjVzJhd7fTRKxneF3BAoHhMFrJYLVCLXamqnEve9",
  "key8": "b8CVnNTzoEMgCoAkXaz3rpbagbmsP6EuwQVkdm8QpmZcmQd7N7nvMb6iufJ1iFjN9hnPNGrwH3deetKDB4tvCAT",
  "key9": "ViDkXnhf9H3U2AXorknkCdjFdaxTkAwYeFrE61MQvFoZGiJJdzDD9BnPxePnEz4bWvWoNf2S1KVw9w1WNTUPogZ",
  "key10": "36qhkJCWHzPJYcS8YGMNHG14QENUXnJAREg6jwCPnkF35qsPRwBBaWK4L7dQSBSuLhVbDTnhKmkAtdpAS5mtEAZr",
  "key11": "YQqrUm4LJ9rQmukX2HRqr4gqAqTzBgC3oBpyDAM6AVwy2pQ6hLjqCZ4av4C3MTi4Mrw8MAiNdvKeUXFZBvUKTE6",
  "key12": "3j25XGssFCyYNyFHz67psTNBYNYP3bRtHzS957EXYQ9VLjhCGaw9p8bnwWBMuLAArAXbmwX4AQyJHmDNFaVxyoCv",
  "key13": "5jLe4jgp5NriKqWDygUqLvSuieNnU7LCCzSub3dgNenajAS1Efnw58vnv7AVnbjbizroWCdNcW2peQtuEndJC5pX",
  "key14": "4pEkmCHSBf6yBdm2GVgtz58nXzRP4rQeGRaLZ8N6GUKsShgX7vYAjAK8ZsrC4vqR6JMxrwxxfJYM8zwFnXCUvc8F",
  "key15": "2xZujXW4BHHsL2AdbKg4T45e9PoRp1Sn8SnZdWEHkWtKobd2bYwxCG83BgRM7FVqYrc3NurhbjhHBB2yBBk6rcHR",
  "key16": "2yBDM5kTp3tMH3xssvqF8V9Y9i6T5PMrD12Bw7uNeRzh5a8pmETE91Lnj56gfvUgJi33aiFVE8Jyrn6A7WYehDeN",
  "key17": "57MVaJzB49qLhx3rhGVcWLA4dKCVesdwuoKNNhrqeEwtNL3KkRsfth6QTtufhXthi5iSvpxYvRK2ep2VdeHzwbH6",
  "key18": "rXLyWs51FEwAo8GfiDa4z5SETDu4dB44tRAQNmbbxhuY9Sfso72P8v4NwdkMYoen9gUaGnBBiKDgS4hfm8yZhsp",
  "key19": "5rSiavQH3CVZwzncZTNDyiXhgoDN7LbF1SYsEFzGCWUFaPwKWswGLfLWXtyYRgGYNZZWr9dUiarqshG5KtACRGwi",
  "key20": "4oo2RWXLrP3oVnheihKCP7BDfY3vq2Fk1U9spRRbNFYJCxecQ2dKF1Ti5kixDcEcjcJGNZkpjGupaNN1AoBRPgjC",
  "key21": "3HtpY6PT8wkrkcjbCtx4wkzKo7EDYxiTZyPZJYrzKkrqyHtytTx8FrhwVhVWn2pFJkL4nm2z2BLEGzKVyY4G1xJf",
  "key22": "2RJQd67BNmN5uWX5jxJGgr3aP1warUnkFgSdGk3etKeSSeE3vQcNj6XzSqPrE3pPMJTqriFitZQfhBEAhaLAJTmC",
  "key23": "4MTHqiKb4JzWMd9D3PNhYBR3aYVcxCWLNyXF3TnebnTJjjM6dx6yHMatrXx9PkT9TLMGWKckNCXhwhJPEBpmgLKA",
  "key24": "5zrDDvwWm9qDBapD6BhqMZn728m24j8ycxtZxueTcSSCxejsQDxg9Xb97xdY4nSCk59fjcK8R3NAXUHAhBKgvXBy",
  "key25": "2hpk6ZSTAQKVshVWn4VHFbgYzJnzNdtKNr8M9gSKcAVy78u7uwyXeDUyA6VEaKVq7B16LnipigeoSAb4kweFsTs9",
  "key26": "5a2pri1pQeebAYVbRkw5cLqKPyL8iHBzEnfH78iczCSFznifAaKXfSwWmfJ3K4s2449HxnYjiuVyyHufVL89dhi8",
  "key27": "2nfYUUzXExCPcBmZsPiW2cG4QeCZif4yKtozekU347mHS8WuwGqyp3PLecFqwxBXucireqVmdjCKvDjm65QY3bG2",
  "key28": "rPSTXzFCrsyEVv1PMsQ6v2CnjJiY75TM5z1HCZwmSLCAFYNoyvKeDMtAnYUDMH6S7BEip7gGRFasyPy4QSgikSg",
  "key29": "4WVWRZhuSyohudno8G7LRpRwSJcLuRCV77JdSaAvgdaXywHyRhKsnpLffiVEF3PtAjuCmU77rKyxS5QWj6VTo1RY",
  "key30": "31pAdZnefpd8mKLeGyodQL66q8g4VfWPdSQ8zk9P87nUv2eH3WztKbee9AMvqWFWyezCNBsk9J4DzW3Tuqi41VN",
  "key31": "2gyn4Q3nCz7zHcwy8hFG9usyBMpDW8A1MNMszLHsqGby3eioB8pLFfwqaqY1iVmuHd1xfn4m3RQ6CGEshd39oyRm",
  "key32": "4EUPPZW7YZkVe8HrSs9EHSzVCipeEoN9HgLG4WJb71n3HY4xuNZAUAzgqFJqB6VQRNEhGWrb9N3EmsMBwAoctDiS",
  "key33": "2ZU2G2sBQLvXjNmLARVCbNMBCJoz92vdDbHedQPFcjMpm5ZXTgwSvP3HZCkNn2UbmGboXwENfC8LkiwjCcNEWxcb",
  "key34": "5EPx8XfRzARhNaX7PcQjPzB6Gfam6qe6Bj31qnU2ZuA4ecyt73kfZboPzRWupKvccR6aCANUznxDzx3Rj6XS5R2p",
  "key35": "3ozkEEv2wKjbmrJsJtBJt3ZCH4VJ3N7Dc1Juz6kseeP51xXd2e8eGDtmauuc4fzC3XKY1pv9ymkzHiiXWwRzKrYY",
  "key36": "4vSfZvUvVhgey5rNPi7KZEwsKjJiETnhqHhLn6UtHh5cECGnBFEffpzh4Wcug8tQZbfDBQ4cqo3jRgJowoNRv4ki",
  "key37": "4MAGuw8JYcLvkkGxv6D84whHFVajKVpDDyyBB1jt3gHAvka61imEfHWgr9rPGhZ6zgCnotTo8qJr2kLLEh9Uz41F",
  "key38": "2yLMEFc9sF1JPeQmyDzpRtKucrCtMNmKvPomWU6ErYtRm3UhJPXb5UbHkQVpam5eLvdAokgzQzvaygtSovHzzeFi",
  "key39": "2vGVY52xGr7upiAGfcFxsRPgchJkw7RAS3bAGZCQ2EcdFjnPJxwmpawigrMfc6hJNFqWthr7M5gK5CJvs7zLUvMu",
  "key40": "2xV4yYCy3JvnTZxY3Jnsa6qqwv2EoZJnALNpb37xVw78RvEL2DHMkLfPCwMc1hBDZE2DCykfwutuy1GzrsNqEayY",
  "key41": "kVHvDmFi4sTT4Ru1fuFZgDcUKrxx2Z9CidmoTi4NMqgJL2a8W3NYQqHgDrjiB315kz2wFVsqhmCXkLwHPLkSmfd",
  "key42": "3yAPEAM6skZ14fhoWbF6zXjdFQuL4ySFSbmM4AAFqEJhyRm7VmJJ3vFkwbHFXRFaheF57MogJ6bo68ckeJuWmvXo",
  "key43": "3eXRbV6VnAhMoLCXiZS19AbqMysSpZtcZ8WsJMt38De7BsYkTBaMQ8p1faXdgVfDFsEGbJyAfEsdW1oH8VaEXf6E",
  "key44": "2WF5ToARrCvEqaCxxLZNV7w3iE8Z9q3EdHpQFPgA8zU7aHRohupgN1Zx4avTNnxsNbGwjBQvzKXsdr3MppgYBQM1",
  "key45": "4oQcT9r4Jcmf92EjUyuqgM1r4uUwrXZeLXfFAGZYSfEUwUUn13UwuTy2Q4QBPDQM3MUdYTUaU3gnaRZ9dYZWPk7j",
  "key46": "2zYLCNbskQkHj2iiiQbwWASbJnE6eYVfdPgb4reMuL8fj8gELD2BwpMS861YoWURWsihcFNyVsLnHRGQkLAAdcPM"
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
