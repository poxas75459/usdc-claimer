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
    "2pQietbx84WCxVAtG4quTwY88n4QZExW3qUYmzrJkWW4qA4YxzqoUDBzVfpdT4AhhpALHnHGmezLqh7n1pf1hCvL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44Yax9pBxLGq2YALtZz6j1bZKW61WTuKP5waXfn1hmVV778oyUWcjuFQvThfHby3CaKZfLkpU3XoRptHd3K4pmMr",
  "key1": "3zqd1ecJtVhNm6skYzh7KEaSoaPM7ju6Kw7J9Xi1aNnySKYj1Uzc52rdUqeT8QvA7zhjYLDAr4WVwowxG4HTn7Gk",
  "key2": "2B5HbNS8m1iDqV3zemGTT1HYEH3yQspMY8DuDS3aSErmGFJwR7aYhAZFNw36Dw9gTcaoAVESKgvXvr81ss84Q4k",
  "key3": "ZqNWBhVutU1nSBuueNNy8xijhJntVwG2p1yQsmCaco8z1cfYHxPpBWtCZdRjvomK9nh1gjP9uuJ9YLejskYts7H",
  "key4": "3GJAZDiLbpgaTW8DrXwsbXcAPnB6CLoUxgozwkfypRvbqnziDPHSp8BjUtgoLRG6piaDfnooVuyGTzTmHNNNy7hG",
  "key5": "4Fmcymxg9A7s81ZdXnAVDmRpbQwe3cXUGuvaRJ8euAZoLchx93tHBwPu8PeWCBzfXNRNaD6CUSxbs8GxDdAaxyHv",
  "key6": "qsWyAzXswNSHGGLMbkqZ4MXWAQizAsCxrC1bECQD8Lo3iPtp4nXyoV5Tq9fxUTbBL2ezpbgtBVL2X4EamMGHDyF",
  "key7": "3hoRGmKDjVqaXHv3Lqdessui9kZWkvnCaVrob3SZq23EgBPKGuf8AfH2VCnwKWvyTTwdgQbbFJs9DFw3bnxEgbNY",
  "key8": "4Y83NSSHiaEXqrqcNxvNNgy8jtGPcNGrQGaj8aeBTWr3cpWpVYH8p6iPmheuVGgP361ctnJxLWEG5TfjJZ5H64ui",
  "key9": "3eWA62xYmHR2fF8HDnx8cSw2fnebbAmCWiZUdSYCUZRrAm4r9WCHpjh3ezwU3nnQFFHMNk9m9vbSWsbbs7WUA2v8",
  "key10": "3rBcHRdtbtxbVWFAnhybk2sjBk336teYSz9WxhF8CvSJ2sRPjhEbjejnvs9zGxFCi3Fsd3pcoPsq7UUHFcwwbA2P",
  "key11": "4LxB63ffTKRnNiJZr5toghugj2y43Babnndq3j159frMP73HSaJojBdKK53ndTeiKUgZvE9eh8MR2sM2AkbQVDr2",
  "key12": "R471WxzHmdT9rnJvrRMjc3oTEB1JdmXpkYJdAKzjNTk8Lt56E9UXqck6AH1Wvx8XmhY8neBD4vQDSDUYGTwBC68",
  "key13": "4cY76Uj6R1ipEiqa7Yk74XpQAinUC5yqE1WihcB9NYiYpYPfSfxusvf7P4UaXk7RAj8Sa487BGA32CL4jfKRLPTd",
  "key14": "YBzvknR9LjcC7jUknqDx7whichFw3wy8fEraazn8XTFhUFh9WRYKWvXDi5hBh1qWK63kLmFzLZtuMnL6ccGPNaj",
  "key15": "23u7XsUpA3dTBnwJBEjkAy9dYFj9VmHGE9mJJRZCPXPyN42enbw1GPMyFAvocUQVPKYCsZBevEjisCSEA3w1fUnx",
  "key16": "2Zg6oaXm1ujyQyxG3jr7wzERwSHMbtxG5ByTY657mdKcuJLdhVEgyhRGTmWvLTad7Uowq9w83px8sVEmugABHGWv",
  "key17": "4qPrkHENXshvBfi1mCTTs8KyEvWXAn8zWHuSp368Pn2Vf9juTuBgK1vYYi7oi1ksgXH1yb7MW2pfc5kjGuAzxKU4",
  "key18": "5ZouUYETUGoNcB3umT4E5tfYmFX7FbFBhwjo6vEwEinv6uJrYT4EKjrhNooGC8oPTHnVZu4ofPQV2vWoHnna5Spd",
  "key19": "4FRt9QtqFh2uMfHQqYV8o6y5c1PTNn12J3fSxzuhXFFxWTUSUarJZu4942Hi7fh3CavcEmps7LYvtchmySWLMfrp",
  "key20": "2iA8LxxJjMzZDujueZfyr5rQoqPTXYwgo3ZNFiDZaJANSR7ZSbDD7XCfBYZsFz7igkNNnUSELoUaByZKfFCaUQyZ",
  "key21": "3mMa6V8EQ1QqEMA8JL4CB9AqDcvaFswwrCug7AnVxdBVMByySXVFcyt5xoMtefs7ShTbVWnNdz8qK5cRwV1WHZ1h",
  "key22": "4dUjNzYZktxsGMMP284LHZpjB3rBJXuGiGJUpq4mg5zVhpqhigjxFWn6vCoBguZ9apLvh65dViPXhhqpthoQeAfj",
  "key23": "5rdgwqSirhHf3nq8pPhohc4qUaugotLxvaFnj6nsDjLTyFPXtubXEScNksfrTqE625qqigsbzKJcU4r94keAcTi1",
  "key24": "4crFDjya15QJKj3Hwi2ZppBQBgNAKeNUzVLxJv6wLghwJDpSVmtMFVQQo5UFrwk7pEQLPYc9cLwPTjV7MxrvP5z",
  "key25": "2hNWnBPoHv8hSrZhPps2LVAWw9fNCDjtXif3chcFAeyZ731Ac5wpc3GMAiFfyExp4gqCAMq8p6NfDKTKX4EmgRi7",
  "key26": "CUrmMT5F1JruxcPmotAaKjCpAxPWm2UNtZj4weEM8WacKcjvqRHvbipkuwFLqdAXktPuk7Sr2iYkJodLqCKif8d",
  "key27": "41NB28fRP5nm4RL6FmDnmbMvYBSBhGNJvqGEib6gGdpetkFQpT5gjmrGTCRZxzfTYpLdKqCN6Qj2PEwcbRBoDUHk",
  "key28": "wCDfzmAg34Ls4zT7xx5VrmhRN6vbibNVZug6sJYtKAJgHkoQjF9aUfpvyzs22bK1MySfN6i64wTdd1imFtsWxtV",
  "key29": "4RMcrQwUaDWmJFQrpKCTcRVuGVzwAQmgWcPZhZqB7vtCmb2Hvhrt8GtXhXbTc6jMehSnDEDQF4Bd2S6uEzXb9YG5",
  "key30": "5anut1LNBCpKnESNShw3DjLCgFXw2wynxFuFor1pB21wLfzEzdwhCXELmHCBASiKccsXm5EC4tL2y6rCVEUFv2RS",
  "key31": "2FfbpdcPn5iceMtxJ3WtnvpoMeTvv7ugYYZ7YV1GmZTBzX4xT5uBzijTtM4ec3qp9gHzcM9Q7ybYgMCMZy6kMah6",
  "key32": "3EtiXtyVdgQ56MucPzZVdW3BEtnSaHuZjT8a125tkdYFf3YSVbmHqhRKVFv14jyM5rEgaFPmp6Lg7PBDuUDyRwRL",
  "key33": "Mud7wtj76CgBaEiNBu3RD9UQsSHPPvVxiFeBk1hdqCYVuiCJzrwPLtgB7wWQX3baDoK4pwwYst6hpQUXX7Cfp5a",
  "key34": "4QeX1JvaD8MzocwJrmJsQZ6mmYhpwWucjHC8pCMzsGBaA8JFk3qsYpyF5GZUHPS3ztPSEqXMEjhT1Kzxp3SqQiGe",
  "key35": "2ryG6ZpfhzSckyRtLBWQQeQmELNaQFSNmtkNWbscXhkh5gq5vo24zfCnfawoLCw8BWvn49xPdhG1eQSxPfjvCoWM",
  "key36": "2PDu8DjuEXn5KCBw6gr7QA4f5ybFymhVE2ykdc619wUqGDCM2fNAJurbyYcLgF9BhGdtfSdfRfn8PLSep9ynPt96",
  "key37": "4ScSeWXyqpUz5vdJ4uCLPTAtEgHuxSm8wNDKeeGDspXCDmW8YVgDFAzLmHWRU2C9CLv19exdeDkdddqQ1E4LR82E",
  "key38": "5A1noER2E2ziD3qUPscnjWq4XQe8YHqerGtAgLyiFRkXZuv4H56X3QXNWLYGgyrnDAKeUE6YYZyDStJt5yFwKNnF",
  "key39": "4CpivBYvc4itmVwUGTyiZebBNrg2QJLyRM3PfGzmRTynrRZGtSDpe78zUrTR8QVxk4Qx72oxux3HLSnz9grZaa8L",
  "key40": "5Mbcn1KkhUJGeB3T8GX1Rv34B4DM7sfneu8hTHofpgMURE1uhTX6kfDYZyykAgcL3uPSngrAGTh2Ppmg4fZBWsFP",
  "key41": "2VoK3qrCxeGpV9W5DGWvwWmkHqsxUtMpzKGotVqtpXX9s2dL6gE1RkzxQAP5XsYRJQPAiPN2UDpMzJ7dVeT69dCj",
  "key42": "4vD2RbtnFVQfk61UVGnJ6FbcA3ukANSzrkGxfcgWXDJqtHAxQJHtR7hQAN1HgG9wdAJp1GN1pBVUUjeGNykEEa5b",
  "key43": "5vAmCu5mN294h1SZY3DXay1zhxCtbzczVtSv6eggi1yhaqpPmks2QLvMY5HvVfi6kqqzNVivVWH3CVozUKhVNZaN",
  "key44": "4RcxX74moijEbwsTGZSjoPuyfbJGkAZRfxqu4AW8nwEqFCFN3sjjSNXVEaY2Mi54eaEUqrhBNHdWwFWppTTxdQGU",
  "key45": "3dQZEsVmCws1DvFbT2JbKDDymTCAjRdzB8B1BU4gjD4MhWFo2APzuicG8zcUcPmQzyZ5xU7WBUnpSUseWmLzqfD8",
  "key46": "4RGPcUYFMqyzmaT9H5yvd7G1k7uRtApAoQYGYfvXaxNyPVAAn5mdaUznVGPLTi6dRaDNJgdQSZGta4XATjcddKbs",
  "key47": "45MTUFbPy4R5jyGpWdYrSn3JffZbQiS15G7sGtKn16RBY5CzVPKFfxyAhR2SAX7Dt7G2NC6F2vm7tBZS14TxQjLk",
  "key48": "KaSosCoebK9VMKMfSG68Fmn5htVvVm6BwQz1pvZrQmMWYRzSdTP4wGP5E1BXP7UnhWP3sihEBydEfDZipZvJwFH",
  "key49": "49BpEditUTMJ9zhQvt5CCSUpdayQh3ayFpEa5EVnhuNSBjZrQGxyDhBQhYMF3KAeaB5TXBvjcGGHW7uPLemdoJcQ"
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
