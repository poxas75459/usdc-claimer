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
    "3BFdm7iyeSmRbRcQpQq3huUMbxmdAf1ApvcFkKWs8ZpvvUi3i9rzk1mP82qU8HokVdXKEjDgXMpUpCQsSrSN1Lhp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HrAsu86pzXpCjm6rdezdYkS2im5VprfyNLtmgZ13Te87JkTfgEnj1DWW1CYKSrYmT26yGbL586DzEGfUvDrwGZg",
  "key1": "kP1DxxCBSWByJJhE7VqdEps5t8kR7j4XH6VGYeGPj2tWA5ahY2jG6VUcVf6xBPrNPyE5XNe8TP7AvdzD24A4zFL",
  "key2": "5fpWnLa6UTFvmntwABG3rCBiqnZjGR63UKxbaWcxn2MPAfFVnKahaCv3Y87aNSJxZxkAoL7zygQ9n2WZqnzYeGwb",
  "key3": "QH1fa36ExCwbe5zvqPdDw2eMdFCDpRgvZUzH1Gu4sqcs4TjUHWthir7USfSYtj8amkxeBwvK2Utsrd9y43wdZHd",
  "key4": "4R4FtaqsqhENx8CSXJsmaCoNycNCtm3i4pYyRidYGEWkk47HQP1Scpt1KteFi3chZ734DomspFKTH5YDD7JhW9E9",
  "key5": "3SsznyMNV6W9D9S15emjHBbtDMijQgquAMGuX8i2c8pqoxpzisvRnUw9dABNz7t86KWUbRMHyQsqDbbf5uCTBgFH",
  "key6": "4j2fU5DPMLE3mzF4jbTJfMKvSWqxmdJh23ApJUtWuFEDZkhZzMpsSsFhYHgra9pVoVEG18crJHtVwyRDeLexTF26",
  "key7": "1W22TTSKZGRTN7sivXnMNVsiPF2jxNXtM5TyxUWNXPzUxrjKjjEcpSRM4W6y1xHNXQed2UghUg2ckWKoBDPFfzg",
  "key8": "5R3YmvsgMCtbuHB3ffrey3uVnQ3dNV4tYK61J7vYF6G4c8bshxHGaurwk3eCJPeVwpPXYyrLSmRojaBe71w4GiRE",
  "key9": "2FKsxX2ZmrKvYSnz1ovnEBc6q67a68NrymizKwTQTDEF1CZbZNrZfygvDP4DcP5QAK51sSoVpDhH5yXCYC5xByCK",
  "key10": "5DjVJiXq6w1437XCfzFWLPrgUhnRi6ihv31jcN2NpzVUxzxqZderED5SxHje6sGdCxgcjr8URrxMM8c1JUnCbDyy",
  "key11": "opeahr1bQVGvmnx7YNK98eHaGy1iLJ5BaNikhqxNGgJ4kMwMTrjUzESyvgX8cZ6zRD39NPjSPmUQcmb45t3dDTw",
  "key12": "3f8frt3Du6wqHEUMBGm6qaYkSMJbo3j5NQKG7TZvJKzxc8m9cWAkcBPvGLzBaW3GpFngnyZSurfTH6nkYgmVsdSG",
  "key13": "3fEg5yAWbRQUx1hB5Y6ZGzfdKV9Sx4gj8GAAtGLA2j7Zh3vDokz6fd1AJdXH1SiS2a6Dur3FZB7re6ZiKRyexkNq",
  "key14": "335u23n7Ra4nu4rbUowTjiNqyv74iXX6ukTpCqY4pJvSJCHQb6MxfcrC6iqodHjAMaH7ebzLe9mCZLonnhgSSm2X",
  "key15": "3SzMoTdzYDTEJesggsZdCLWZ3yNTYKmsKQoJpuKgZ5tijELffZvhyBVja3rY4CTBShMvCC4Tqi79kU2XqyGUB1PD",
  "key16": "4LZfDdoVzzSyU1BM8gcRXyXpKyrSRPthMiLoj57eosuxgm9kEcuaN5Rr2n9LwLaVu9KyHwZWvM9AnrQ24RVo4Yad",
  "key17": "5QJF37G6fXiW63otVNQ4bFEEQBwm4XjmnFvNkHnJTiUpLjcniPJACJoXUz7wLg3n2ZpuMZKyf5oaCzAkasnbktGE",
  "key18": "2Vq9abRDxQ7SU5QoM3gyNY1mCZiagDy1pKcWHSo3UH6RyjhsXFqdG47NNT7T3pnFDSBQ6TDRMpmL6CF9SWb9uTtj",
  "key19": "MazdtzuouNiBtdJ5sRPairVhJmHGnbEU3ruVpfGdThVk3YGVoFvV85cS3PqRaxXtGfZYZwht9fwBn4couTSmQM6",
  "key20": "5n8BqzfT9ta2XWGQcjfChW9ssNdoKMohUKxa7ztFqgq3FJbhiuPuGnUeYT6RQ2WtE4giWYjvLxP3fhuxaKLLbbVA",
  "key21": "5U2oa3631xtfasQqbooYKJCGoN9KZH29UU5XdDwscRVcukRDbtxv8vq5kyqz6NSJx7nw1XKFjBUH5jdaaKADcHNc",
  "key22": "5gi9duWmCxbDzpPBuZX4XUMijiXV75x95SDiv3BGRemzDTWfJRymrJRRVnG59KbndJDcDjZmTWJAVVNqp8Ge9iar",
  "key23": "4rvSXWJ5tRZuqoUNm33SvmRoqv8J3NJgp357vYi74Y1xhStxNRuQJ3XarddfRLP2hG59KkiYdtjELhad5Tv32Nk2",
  "key24": "NSP1BfB9Ty1uwPT7hWSPNtZN6CUKP7pmN7nEEhBKp7Uw9wpUX1fray6FEuZCtkHndU3br2ENtBGiimrb8LuLkKp",
  "key25": "2TDMq1Hg5ayfW3EgfPyawqqYobbYEb3wNfZcZy4WGTbzWcta9UvSZwPPb8nTcEbNuNBgAnhaMLtMpvNS2axxn4Yv",
  "key26": "37jbGZb4xjcq9ZJWkgrYSZKRtJfT4tTwvgjFV6XoEGEHHvVyX7HuAPEjNH1K8e8GAQwk25iu7TVioykyPygNvpvZ",
  "key27": "2piEqoARKq6VEF6RJpFsQ836vhv443s4srvSrpiepaj7aBUAaeFnQfrN8fkPWU1Qrj1XJzSj3jJnYmf7jUcXTcCE",
  "key28": "3fMppjiUYXz5p2STz56bR9A33gMrj1kCrsKubbwCNhoDABJSbwvhMLdcM2jBxXcEZZDDa6nbWvbgUN3TSCXdoQhE",
  "key29": "4rLi1r2dmGWfmvvYSZh9nCYGEvtU359SetYX8W1rKbUCc9F5x1GkxZ9NGEjhMiRM92Rva1otAv3B9395wdCVrL35",
  "key30": "jn3znQkQ4r2rv2kfFSQgbudbXgCME1q3dTaA2TGLKra6tcBXSWLFs3fEvNcjLaNSxzMdJtf4z46aq95Pp8aDXwL",
  "key31": "qF9aqPVuekpFmSHT8ZAj3Dxgx2MD1TKq7XNdfJZVANPUWm8QoxU1fMvHaVFaCpuctbMf8zLsRScpWsxbSBpuzFm",
  "key32": "3sq6rDYS7WxE3HWfy94rgn3bkZrfoacCBaQKfYxgA7AN4UCaC8SrVWnsf6iyPNqZLBnTHfL36KVuzsMPfTx96VNK",
  "key33": "3mE4C1judmHVMfZ2XoKz1M99KjjxtxZG5syXaLzxoRzM72NjjgTjUJex8sgDCoiHPaKNvZVcipFviN9AQ4d6n9rw",
  "key34": "4dKwW93tF8un7pEfsLBmLJnovd2Uy3sdAmm6CxbFTf272uJYMgziwfc5Y5nPaMt9TodKcismaTV6qbQrEJtvrg4B",
  "key35": "2Tn5YaszWy5yUTWCniDGGCxJXECowvPfPxzpvsBwGxVMU6EuvTnesRwPdU1XWXTYfY2YfdVEyjvrozckjJ5myG7c",
  "key36": "5n8wC8PJCBkuWwbGwJkSK872D9s81pKpoEktEwpCU2C6nQi2N38u8HRauWfS57xzivFodXgJKDvSFL3txaioC3r7",
  "key37": "5TX2QUqmqXsRLEcQMbSqaLAQMenTgniNWxWXp7f3PEXE1Qb95FXPYHAvpxfuEF3FdZobj9NNuznBxgPRbfj1Z8Ln",
  "key38": "31bRTNF1gxLptNWS6rWpwUzLtYe9Dj6tAiVfWRPvU83p8siwqrGvcK8DrVbXW6Vzixj6DTt3zos4YusQfVGLZqPZ",
  "key39": "2xVGo7YHWZVhqMsDo8CU1naPtC8eFwHHSziLGjEnUcXH7ANTv3BegSX5N3w7ScryjFCR6barKVj6dH5zJaDZiqSM",
  "key40": "2seP48ZbimbqZdktabX1DZrkj8E2vGvGCvVGo7gAm2KDw92yH5gQaHWFo1WGUoYNfDJpbDKM2CNnHiepiw3YVVkX",
  "key41": "567zgWYuUeam7A475M6teUuCsZVSdWbpZEPK1T3a4voG9HkHB3UGUigm28VAqt1WzTSLkm8SKohvSAU1Gp7KoovZ",
  "key42": "4Bin6yGE9eok94K3CPJDuBNwSJFDtULvFuY8wmwhuMyjZHfHqzgx5CkQEpNHVSahXXCUy33esHQgDF95yXzU9eSc",
  "key43": "3poVP1Zp7rjBpvfHucfQiT3rXKfWArTrckmUMck6vxVnkLJgkNHpcbUy16CiQiXWVF3DUtrrvuZbQ76PZ576kXLi",
  "key44": "4CY1mzYJEL8GYv7bjym7DsZHqWAd1oMXUgb6yLYhnm9XHLBArZxDAcegv3ty1GPTpzeLq6tkwiZ3WPWNk8iB6QNG",
  "key45": "2bt8Z2iDcQsouYbs3ZZovPUa21iNfxfJ7WFtgQtLxSpt8b42yoFGmYehYFXXs6GatCNMKxiCNz5isMZ2Xs8obU3t",
  "key46": "4ws2c4QZb3T5oiu5SjRJpN9Pj1midCrLpsLXPywgCX6CxuW6mqGhckVgTyfVNC1TtjmGDUA32v9UUM3JoqC7LSoy"
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
