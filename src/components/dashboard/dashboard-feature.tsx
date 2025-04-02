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
    "2Q9hT9dZKRbyXDv4R4CTMvjcay4ca5LuY7bhzLPccUNFZxrUFjZwRTP3XEyUsarKycY6oRM8529kUE96pnLD3Jjt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VYq3u9dowG7igstWCLU31ZDfpTZEz9vfwta5UZ3SSpu3GRJe67Z5NwswiuzGT2yuuYkG4TYhKifAF2Jdhh4VKTe",
  "key1": "3yW9pN3vvvURSzUwasn2r55VtrBEjv4aPDAnvQa7Mj1yUvVgvTDrGNSbREeRq4Msby6EXwuXPVLtBmV1NDzr4BYL",
  "key2": "5LBheoq5D2MZygSLUFU7Y7rKutPxLdMwkMGGCH7bjbVsZCWSNVVMKQEFKgeUmv3TFdppnNXaMGcLRTFvbq5PL3Vg",
  "key3": "5yFbGyfjm5LnLsm4VZTsqVx48pL9atWaoemVPYUkPgHCzZR6XWaDp1fGivT2xKumAsLQXPHanf5GShpNLj7S1J1y",
  "key4": "2srA1jzLyZLxxd89GjgmYmgYLyHouCqxrzC3EP6iQwCrrStcUEpF4pDoMAomZpPLJ9u8BjmqAqsuJDXNjmoNd1xE",
  "key5": "4zX2B56i2NZPx1MimowSXVkaXjNFSHghQazqtyDBcNjBWgbkugu5Ua54WfVwWTmmWucmH2ZgGnayNjLt73qXNw8g",
  "key6": "2fAtQnGEA5iTVo4fK8ZvhQG7FJU9cr1DonNqVeVLtWpBeqVQAgUADC4mukXAARm4znaLqZxcnXpXrX3syLjkcueg",
  "key7": "3jUKCf2Mdy6ChG24ZVL3jRFYZ9pcFwqmrJiaMJqeEJJZUCqPMe5ojNZcZXnqAb6ekCx3JnFmjcFujVz9SqRw6sAW",
  "key8": "2DhiuBEEuc2e5mXnwFiQHgcEWFKfTZnJpFiw8ttusVr8A3KveYs4and9DEf8mjBtKeNudHqF9tv7VzU2Gr4vKX6z",
  "key9": "5AGTz8FoEoR2PKZPE2KNRY14uuoamjL7Ay7mqMD9CjTgXixkj2pCJMr1hEzcrSSHHYMbU65bQPTVqtXnWDdunwQ8",
  "key10": "4EiNNYgeHqNKM43WSXHREuuRjWQpjoUC4bDWMM9LNn9pFFPYp1Xk3XhTQcB9KsEQasH5fSGjdUyLWTC2rMwMgRLb",
  "key11": "2fJZkXGAAk7Kw1G7jRvVU8fw7fn4ipFNEW4eNddonuvjtpbKv4yxMw7iitniRN9q28A5upBhQu1aD9ckR3iqrbmp",
  "key12": "2SVoXi17B2M4CTv5yVZM5HXxE7ghvxKmtw1sBo4jttLMbM6kvyMCZSoMsD5GkR5NvGrvyxxBoUProbKwqTZxTrUJ",
  "key13": "Hrvw6NYjm6eoMCLCARxF85st3eNchr8L5XoJ8nsPYmr6Ub6YCfvSVpZDFBWKTBVRqjn2RUoqtDsdYYAbsawpD4U",
  "key14": "KVNKr2ijTp4Mo2WSuTW4Tqo4qAfeffX4jH7sYzjJXteHafkmLcuYmhq4KxX38nuSGYYPsS8v5Jm1TeMaD9SU78m",
  "key15": "38BUnuNKs8Dco34Rs2wJcUP5GREPv4DQ5JGjBj5n5QzGvFbqTdX4rFKUmyAFpzkaH8YNz1dxeWXgHdNdyZbsbwaG",
  "key16": "49gLdjfH2rK6n4DEraEHhb517DyWrUsT1XWQSwZVCbc6PfQ7bn5r3rsUTXLXLSKBrMAewritQE4ncS1mPUrq9auw",
  "key17": "4dwucfL7ojAGS24zgaB35VWAP1M2cYB5juuvPtFA6rsBmbDeLyUN5AihCNab6umHRrbq4myq5AXVhi4kxBKqTcMM",
  "key18": "4mFAHKemjJBRTbSV7NvGu4RxCTqDJCWAFA3nd824uDqW87yWD3u4RxSVTxykm5PTXFHos4RHk4nktudXicamFSMA",
  "key19": "2qGFig9ytw9BUSBWkF56yqm6R5MaF92swWzZtgToG3GvpMwAFgkERp5rf1BM45oe1y8ZdH2JzFUR1hTjGn2tBdb5",
  "key20": "2Q63tXgNuHVuGHpWRq55oNQDUz16QrwEkzw9VgfgNDCQC2tSdthinSzQ1Egt3tVbZUZMr9MkPtHSxGv4DYbFUfJz",
  "key21": "qKasUReFNpjmMZMHwvL4ruBakNfjRiChWhLFyvPqbrsh7PxFTEMguTHGmiSNRgLiQyVt7Lu9McFvqhVEcsvL9ap",
  "key22": "4V2ZngoRviro6dXoL5n5BFLLB5M7gUABfQQiEqUrLmYYNzE6nFPo2ouDUKyxuARL4YCwNpQF2m1EXyDTzh4Ng6Qo",
  "key23": "5j8A7DLoZNSCXttX1sqzi46ikqQKa1qwD2vjbZgh4KaoERuLkbyMrkWods4jbhSh8HLnqwNJtAeBZZk93ceL4kx1",
  "key24": "8PtMCyY5MV6E3piNapyHnBVEvTEXQrsZSp9cPj1ksW5N1Mdf4oL2xtBAi1YKpdfYi7954sT5FRoQXQcbQDxBL63"
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
