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
    "3vrbPJ7BzPwBci3qLGtarsHJNve1M8T3t4XziCPekkswwP75vrqLsXgfSfqkfVQ2DJYRgv5z8ie9SE3dbEh34tts"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7Q7UhoVzzGf1sW3wm2AwKADdLusoA31dkyxu8Ur7Djyus5AYFAFRa4mFJW1KFMPSU1o6ya264vEWeyLfZ8y42Ha",
  "key1": "4Y3C8k9iJVFH329FcX7Fz5VfBdY2nEgs7iSfNoZZMUe7dtbffG5hgaeWZgpfr7bT6uZPsR9iEeq4cNzLQDueLrCb",
  "key2": "2Yxjjb6HtxdNJ2AsuaCcZHSq55PuioLR2RuwoJJqoEZFuqqWsLzy6uqy4TkbcZHa9ex8saLXbFB9XV9cWfXqd1qD",
  "key3": "2HR4n8Aevv2nyjgDLyoYrdgGsSQVHKLPuQs8wk4BomkQmgrWNSfjcDwbnitdJC65qB1qfxVoTxFM7PtqMQFg6LYF",
  "key4": "5jiXhYXzPAbPj7rGv7FBD5xN5ajBRkKbkzzKo4qKpQZXEmwTV6QDJzfPQQ2wKsc1woNLkzWKg5vTr5urVCHEG5K1",
  "key5": "2PGBdTyDsf6EmqcLtSpiBmxWsYYkMAgot2Y5UfSLW25Y7M7EdqtiNtgds3dAuy1ShyAqQBVvjGeKFUwuQhfJYfdC",
  "key6": "3RGjpSzsA7H7eqJa6GYUYTqTS5YDSSBVtEsxXYkU4L7WxEnu6PxDkHMZgPBCMy8yEHWddzGv9hs1VrEM71os7SSB",
  "key7": "63GQLWKfStQbgRzXnwFJrCQzVBUKartTZ8nKwFyTdffMwfnYQjvJX6grVuuZ6uLzLkS5Wgy2yj7eXx3CZTGUNaqD",
  "key8": "3rHD6dauKZAbDbEZkHGhUQX6r5AHXgPgnk35Mp546ejuPzm6E4HRs9Diev4XVVYAHfryUjTbuAPL3QGrXZ75nUzo",
  "key9": "3vpT57PUWDoh46mWCaazxsrvEzCx34EBQ9V4y67nVWNnNR28XtufeanAQbGU3zMZaHaYckusScQrTctUxpL8kULH",
  "key10": "5pMbiVV8thEwRiyvATDDfug8CsDnBjfv24bUDSSfeaSjTaghRR1YXewqXXvbYdHC7hUT7ChAHerW9MHHNnhDV9Fm",
  "key11": "2vGX1idAr96Evrv3ZqFfQp2cwNzS65bdddxBs2AhkkQE4jQsP3wxq4pQBGn9euZVoW9u1uGbPnBYNFCdNFo36g46",
  "key12": "5nc18tPR3YjiqoKjsDG5gudCSTqSm9nt7VN2jW3g7H1HBe75F5d8K1aphTVNwAkoNGHybVMLPAcMmHGgjA3Mxcuw",
  "key13": "28WAgpWxEqZ1Dwsrhmea5rg3wsBQx9dk8JwCBjVi7iyB2KM7izewKuu6LxWcQE1papMxmxzrKiTXtbRq4Cf72K5f",
  "key14": "5Yo2mm9EcTYGcE13tqy36Je2gifeDdhV7aqNxpKV1np1P17h5gxsm23UMAwm5QbkKnJjmgYayPY5Djfh2LoLhUYK",
  "key15": "2YxZwisM9UELWLAsE5B9Anjsm8K1kAi9V4dYbrznqMjSDgk7tArt7F1Py9qqUBgpgG9tGPEdbxhvAQtBo2c3jF1N",
  "key16": "5AZTatoDR2u6UT2BnVoGs9zXSFcgFZ7K97X4oUk9jrUn8QREzfgfvZY8rLzUyH5hn85sR3RAduyKx5HiyDVbVPx3",
  "key17": "3vWJ1KqkbM1DhYJTThawFpY8oWPt1FGEKmmAkpGPNksAxYTKqvYpiZdShED6SHE6b3Hxx8kA56nVAPSrUnpRTpod",
  "key18": "2myCWwbiDcn8CwyXVVwmykTp9c4WSTvqfTtFHjN19fe6zrTUQtnkzgNNfsNzkEqvFeEKp2zG3yRUh2cp4buLZ1Na",
  "key19": "LwnPhRRGPWC3xVieFPJLzUkxUFTjN1nzqAdu5pPYnGVbmANjco1wr8y35ew1o9shAQC5dtcfMevcpY1j1vAqNAc",
  "key20": "5LhWMG3TVb6AALaG7j7piZCtfFtMQjkoxgtcSqTMwj7kVy4iDXXGCGdPLbBNEHGD2VLmmBZY2RPGbJoCNx5ngoyR",
  "key21": "2aNUL5A6udHDmCqMxYzoB241pKfXKHZWT7g6RqXc9WFjCJCASYLf2o7rE8ZEvd528Atwsyy9LCduBd6uy4We6xYQ",
  "key22": "44ooTHyMaHmhvcT5wX8QWTdo5NsEsS38KB6z42NuwDUBw44ge1CttmJSoax3YpXfdMHShhgi9Uafe8z6ohAh2xoN",
  "key23": "61G3L8MvGzHCgugz5jgLXNPUGkiebaSKLVH7PXY5vq2Cwmz7iQq2G74h4Uk7YiBnvXUCRnDL4Lb8J1bwrsmxokKJ",
  "key24": "3K1HvBxzui5KSvdMYRcahYtdoPtw6arfh4yNBWoaDUodh5U9jaT2NxTHgwbwnvyDvv4VNyDzDuPgCGg1VZwXJC4f",
  "key25": "YshWcoCLTznt4gzVXEFezjcwUYSDRaAMRmT4uhzHhqA3AnfUecSu6Ztggksj8zfmHBoBJykfq3FkoTSfYegXV2z",
  "key26": "2cqxu1uqi5zFZ5vnca7VEu7ChuQwjfgF4DSYSfvGxjyokyqjK7hDBXgmnuuv1AfoWB9S27kwZwUiLvnGp3h3wzcp",
  "key27": "5y5BFXRRPEjFsykBBz9HxjA21eDJvYMDFdFcbMExjuDC3keZm7snyJaeNuAw6J3c438YeXbmMDiSYxkd2eZyydWG",
  "key28": "2PWPLvr4MAvMVDoUxWfko5pMZNPzCTC6MYTisCuhPTUhWGoguQokZc1BjV3ZEVWVM8ssC6RGkBkFAdJx65vXFDxE",
  "key29": "2PfzUYYyLcBFqErPsEF8UNhnhQoZK5PAoHoHuihMjmBjaAvqxom5hDo1uGZRPnWLyXvJLANh825Kf8wcwKWtMV3s",
  "key30": "52Cpk3sUdEvsE6HcrMJptipuGM8HkjLRp4gN1gNAzj2c5DGKFJNRs6pnn4zxk3tadjWG3w27gwaafW9RnPm8kQDP",
  "key31": "36FgRxmHEZZGf7pYY2yaMLntrtKdJCtD11JEJCBriDtjwFvdBDhXW4BSWpxNGBcWba56HEJ9NZvSEji3JGqAbnL6",
  "key32": "4PPn2cWFWYyAWZzKKgV6My7jcTvkHRuvkGFupXaVXLvKQvZnZiAEBkvxguYboNjE46WwfQn1dEjHVfrW4xCBZq7Z",
  "key33": "3rndmuRMYQqo9y1Wm56APzgDVig5L3qaqgHips1xTnkA9yLzRE9yWLkjNzNS69cWsQFPRpqKU3quAxcgJjRL2k1z",
  "key34": "5kdo833SndqjWMggBBFFt3YAbY2DooEDsMvt48VhopMDP4NJHLDcUjmNkCSmA9HghwTs4RE5RGvjzj8MMZAseM1A"
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
