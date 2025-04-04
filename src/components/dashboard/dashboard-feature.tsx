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
    "7zwzd4e9uQJrTtJEW4uT4Cz9886cGdFyW4TpT4fiJiWn3YzBffNJu87UhV5iiQKR1RUnTu1ee4iY9mopuGMxJeZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y3qjQoU1CqgsYjYSLPc7edRX1Xhm4K3GEquykQJ96h1abtdv2tqKWy3YZWPzCpA4RVVwLofbaVJP8XH9rjKsANi",
  "key1": "3E2WuSbS5UWxKovjSYW3c49yReZUubL5vKkxxHFzar32xabp6ndsdYArX7J9aDGhMDiUZYyLpdJUQWW8j9Nb6eRP",
  "key2": "47q5S3w9ZGvXSv3q6qhxwDKA4DikfRay9C4uDUcpVpsECzXSFcMoHWFk6BR7JrZZPjW4tvtH6she9xEx6EaJ15Up",
  "key3": "2wWWorYeBTfqZFv8vXaJWffXY6Yy89TCjbk336DhXhp28urdyW9XjJTWjhp3poiPtExcbaav3Dmiz2zyXSiP3xq7",
  "key4": "4BaDHR8aRgxVA47J4WH6ePpMBezgrPvx6pyqB4DLK8Phj7gpdeeyu2fVChnqGtYRXMmdfYaBSFJr7Dj1PwvupPoa",
  "key5": "oaoKxNULLmJYtpYMSJjatz5hCNy9pjY4UpC5Vkij5xJyHU3Nz3tafGv9wZwiEGXSmBAdAuvykX4Y2sTF7zLs7Af",
  "key6": "2i3sYu4e7vbatiXQZ8NhEZXBUi8bGdTsXS4U7Rg7sNRpPKkm4X1jZiLioWZvPVi48tC1SujBgZ4vXWhnU2YG2T8P",
  "key7": "4Dwom5neJDd6AcrTUCPZip1zZ1xkTTudBSnXMyHbVj3GUTEmu5rbVZVTCu47A9V5wVZrjT67rqw9cGeQaQ7ZfoMB",
  "key8": "KGc4W7SyDasQ8gFb74ch4Zyv8qFDvvXdZHPyAA4crChZ55CuojvrTCC9nqifjbNG32sioMC1ZMJshUzXTFEPUGF",
  "key9": "ydDExxnpQjtsjMQzPz7ory5HsY1N5D47CiLdasWnZjNxZR48hqcoTYh6MVMbxvmv4iBaeQ1QCpCBLUmpWxngT5U",
  "key10": "5r4PbsE8UVEXE8bJ5mdtVCq827zEEfknfAUNThogmu3LEFteGZHhZS5owcQHnHRZsFSfewuyi1MFpq3NvuWfm9K3",
  "key11": "5Q9gQNqDnvgZmuUN4Aicmv8v3o7DjxJ2jcjQsciGNKFYqc3SWhUQm2RiHaZDTk7KVcyrQSkrCH2G8sGEYswwcHCH",
  "key12": "55ruJaXegddnBsoXcQnhLRV5nZ6mFaDDYepuAEcP5F1naNornrW9FGpQb8cxw9hkKkNTz3ReHUViX13xFu4rxBr8",
  "key13": "DYepCTK9DxBZ8p86VmheF4aFAf8nubhrEumE2ogx28Ydq674cEuXM9367ssqLWbkbFxm8tb8v3o6XWfoQgDU74F",
  "key14": "2L3kXxunAgTr9BjJ8JbeLs7tSQNnu5kR1BvKXSMGTS2fN8hdEYjY3YPZkL3YMx183Fr9gdCq8ZVdtiU94cLKSVMp",
  "key15": "4h8ceGaEnrYVxWXjAJGymBpSTYSmoVbBiazJpME4o4QCbXctxNnFD3WxE6BBrxVjPptNxGHzzxKBrL9swq2afYZt",
  "key16": "21wHB3JnEYRQhYeM7QycdQfs72ZnU2nG9gDPocc8WHLo4hSTSbCtNPFxMPugs9SGhccoezb51UitGrKFjde5NzXc",
  "key17": "4HoD3w9M4yY1x72cGjZcBH6Rfct4wdj75MZBqqEdigw12vvm5TdEtmGmW88AoeLckfPNKNBt2LmsjTYS5LNnLafb",
  "key18": "4KWkRanDKq2ERxawNTSkRRuLfgDNU86qsBkMR7wYVT8so8XknFghfp2YGFa7fyNEKh1Y1i1acZunPqRrXLCvKBrZ",
  "key19": "4o7GsL8qBTLe8c4qJztDsLDh4kBR8mTpvyofrnMbJVFBkYYWXMByX9QMDVydTXAk62neDTtQvRVJfVcmkM6H249X",
  "key20": "3wuzCvwvK2oeHJL2wYcqaHEYddBo6rgXUZhBYhYXrGyajwsc5x44qcAhJKC4jTPz4kdKpL48Pt2LPcRnD4MfBiLK",
  "key21": "E5tKWaMqKvSZXk3hZWePwys4Mfd4GAkPZbUPFQg4FZSWNGdgCG3gmQ7J99ASfbMYy2uPiDTqbxtL5qj1iir8e6w",
  "key22": "5AdmJcZV87ZMzMBRaMp438xwQncNCbNyByWHs2Z1bR2U9YhZb9CPRmmeguMqLSA7u6euxwPkHYkUxfZLyiuodbMD",
  "key23": "2jqmHv5BkxSwLiTwuhhipC6eaf1p7tBiq7nfEVcns6YVBj13mMCz3mx44XKD8SiUPTtuULjreN5j8S9KS6PCVJj8",
  "key24": "4FQgy9LHX5kkWTdfLocNczWnB12aL2BdNAMNK6ozkDkAfvEZsZMWUkcnzWggKDBaP8WmecP7jWq2Wk26sCohPrxG",
  "key25": "3BsQzDGJYJui2XcYu4pQQis293iHuYeTPWe2t11V6TwHxzFoHxFR8VCZKuWDtReBY11v3d5gGKqZ7yz7iHfhPLYX",
  "key26": "4wPRF4E9AgatN6WmepYTrrU9SWkwx63vR6ZaPsTacZDPee3joRERRecKCthtvpLyR3h3Wk4mRYWgRijXg4VBspra",
  "key27": "5XKhKoqRQfQ7mtPDSsQFyNjfgPc59LY3RB9iwSpfhRLVNk3QGxMhtbinNopUGkExCmcL6pZBCxJTduaa4rSxU9b",
  "key28": "4oktsMdMn663TWtnXktvv5AKVqiczdAfW3TcQPWMZhcpxAeq3rvkPirdz9Uzod7Nusbyy7h4w6dQagx7GTkVm7AV",
  "key29": "4QuKD3tbSmsj5eBqhbdeUfdwqLvKCXJez7FJyq7hbqi3ikFJcQqZqLpAEimU5SCNxSvBMDfFApJEsU4om1P9uRLw",
  "key30": "5Xw7mbNXqmqFveShSJNRkYkx7AgzgaGWsPDCjP5iWSJgCetsVie4NtXo8VS4w3zY224RoLztxHX84UKdby1XCPhq",
  "key31": "2nZXQwjH2nWdPSL4fs4ESdc2jJcYMz3gyJr5uKB8ndsPeRRnhdENLFCQJ7za27dhx1Jz4b897zk1mTjd2ZGoTVib",
  "key32": "5fW9io6Y2dFCiu6GwVCgJTPpfaTSUJdAqvWo6axEPR6K7PpdSHkpLYJ2aQU2YW2vFTPemUeJguXbJB5EhVeQLH1v",
  "key33": "pfoqhhFGgX5JFN18uAR3v894Y4HMkXAKTJmbh9jXMQ7D2kkkUG2nehH2T1JpTpWDqfiRgXNxhAN5nwrPzTBp8FR",
  "key34": "2WFQWYjFez3JtWuHQH4Z37AtcuRaLtZG8jeKCTM96EGf6d2Naoe85icuUdzqEpb5GHiQKEVXyQNnkB5vv8PLuqXu",
  "key35": "2gftme3SR5MeW2HGYJzafwHQvbUeXEcejQSU8wuD2mftAQPzVEjtQdP6f45The5SAMiBEZHmz9b8yig3ZmjqjvdJ",
  "key36": "b3VvkRPTg244b2DxNbotQM8G78iWHFgf1AT7mzZqxQeBzphuvC37FnfBCLPRD7N4dtmtZ5L2t7JjZdwFTGggUWG",
  "key37": "2MvFLZ6Xf6ZLoxgbD1QyQUuydcv3yrHmzros2YuJKPtyMRtsFLfxaL9kS9JjysevMYooic85aYNHe5C6M4LjWGcP",
  "key38": "2CdScEqWgnomCfRxZxgSmkKYs5oCK7dT3cpbTY5evmBatK8QY4MJRza3yMUbJkFm7wZsDxmNCmXyYTH8gNxc6xDF",
  "key39": "5MnNjcHBYiKaXqpgFf6MJkNu2GR9K6o3oo5eCkoQQtDcie52CUfaUppps5kvied6kyYXcW6BRVdrD3mvdU95YEWE",
  "key40": "nV11BWaVVbA7dU5eNshDqY44BxToV1PHUevd3rSfLG7roPrW1Rac9e4yEV5QTvXYwmp5P91SgQ64uhUNYfLbHR4",
  "key41": "37MhSNFD35mR5aid7PD1MfDp4SDNkCpzA9mK9GxzHK2J6qL9wh5VKP1GpWDTcgCcMDZFVDtDFMVgg9gw2T4XxqPd",
  "key42": "5kwAiE536s9A5UXyzXVtLbJ8k3Yb6jEqhpdKS3RxuJww9ygRySzBgPxTfKQZSoZNdNJDCTUedFh5KZ9EtvUDpNBo",
  "key43": "5dJHf3ZmCuMg4xsiRjD4c2kE9Ryy42u1s1KdZYGx9VZqyAjDVH7qYUa2332NCpQtXkMyKp1NyybTwR6vtmjRQAYu",
  "key44": "Pjhq3nFd7CnWiWVtoJ6fFntdWLnYVg1kJTW4x7bJW9sPzDpB9n1An3X16yXor1tW4dQeTztC71nbEBiLf1Z6UGy",
  "key45": "5FvsVDNm7S7xHUGAuNHtEnfvD9znDUpBzzos5qvRJLm2b7wpjFahZfwpRnBc95s2dCKEPKaAmMvNu2DTNv52Fw8W",
  "key46": "5g7vwydoiBrn8mJg8f8r4xqkHNBqvZ4bamoxGqtQuefjoSeFjmUd1TvkKFyb19vgrmKBypBmY3q7op3dMoedNZYs",
  "key47": "5kW4uw8vYe5t6CK6cYoTdvq5afu7LhqukimFvQ3mPAChmKR9nnJGpLKo3sb6raTXuCHL8HH6d8vJ9rVZW5dsbH9i",
  "key48": "2hgNN5LikGadGaS6GzAUJQvoqp9Bd1jEKZtMiTvX78zc72oaMZCAtYBLFHsebxLMMmXptMBzC4Xjy8rLZQxrzzdw"
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
