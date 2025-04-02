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
    "5VFWnaKbFkxYY4vpJnmnjeHzUBxfcQPzCmFPwRgxRBZ6oUgUpPEWev4bLFCjXNmMP8gH1oiPebrSgq5vqRC5MKi4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nUeLZm34HnZuRtfZ4vRdzVh2WFPuDgVa5i64nWmnbnZLuHzj15cKggw5HbeRQSaq2LV6yvsjrEg1CNy7PYeLftc",
  "key1": "2ZQGeXuEx2yvyV6ANpxujutmBEMaQG9dZyqnRF9HhQrosgupaGAUqpTfusv1pMaDino4XqA6F9LiFvgmqu1e2wV1",
  "key2": "2FXVaaL15TDzxhxJJp5fgp6Z9YisqT5ounNe8xLRAY5PVTULtsKRLwWSaTSJZxR8qVCujGkiceHwWf9rjpwKL8np",
  "key3": "5fivBPf25PHma1L9N6un6YbYsYNWNXYPEPucLkTuJATS429DwTEDoZonmbPBXLzURK7NQkcx6QycsjdCWWFifyKt",
  "key4": "5hvBaMe7UBjxzdPXmm4kP8ZccDkZ6KMvtWcUagi4EcSw9RKVtF8AvybRBZChXiUuHVQwRcJ1VLFxcv8VoXo5KGLj",
  "key5": "62sRYYdjU7bqivmATLZmtaRpaK7iyMosJNvW4iuJzNPJ127YPgfZWavnGqERriDYPeYyTj8SqThWYXb6n4Y1xCG2",
  "key6": "Ngm5XdrmNTZd7GmSr4ru3Aa1ZDYmvrvv71acMU8SssrfqCaUEd5dZ1Z6X3LgpfBnypzZEVW5wXkPrxrBpgXLw8Y",
  "key7": "32r3f6cVhb94BFHvyvxTWPXLs6WEFUV1TKDVa4h7bRSB59pQntdmj43uuEu54B9zUUmw7Kmnd79kffkehMGGhXDs",
  "key8": "5bMNTshtchaazsCWrqu6dPkNtAY3sPJFEXNgxxtPtQBjT6sPZJ4J1NGrKa8YL1yZHSrfqHZ3xwF83v9o1vPcbvEq",
  "key9": "3xRb29Swob7aiFVqVa5RnsYK6oMFWFuNmRfiWw3Xzk2HM9UCZcuRqxZ5CGAFw9AYfntuGZyVkGTJcu1BozH14MUt",
  "key10": "3DbEy16w2x4VrfRrcyeBjrjmkFxxrScz6pFoZcWMied348qYfe3Y9ueVEBJUPMsgnSzoWhDTsnzffLfhfGGvi9tQ",
  "key11": "5g47ggYoTop89sy7AhFYW76s1wwqVFnkAYxwVGxHaVCr81dksJrrTYPmhZTg6NNwbafH2pkEoUEheKi4U6zAuJre",
  "key12": "EnbU1dXe4DBvHxQCQSEBHQ2QDHcghibyPGDuFE937bwjrSuWTt3Ww2NxJdwjhWnHv1iwysNkSBmkvS4EP7Nf73U",
  "key13": "3Qt9FzEFq2Vc9zUhBzaPPxvKJLGYoj6jUcAawkfL8ij7SpQ5TTzQyxRjPhBSHJDdhVo7h4KHPT9rYSGZmdg6qPVD",
  "key14": "47jdBxCunJJisKhN9qLym9vJEao9etzSTAritZ6gTyR47QYjsMWS5XGA3xJKCLbNT2AiREoa5SruTEabJjLDKPcs",
  "key15": "3tiYeem13ZXPtx5WfyoTRRG5hEN85gcNwhDPZUgvmAC6YdnPu6VUUr5yGGovKAo4H7mXmmS7FVsWZAf6g5MrM4gm",
  "key16": "5dTpnd3VgWWY9agioaXhExn2FXLRDwuMZyzcNRZ7YfWMZVpCWEvxvLVQ4wyBYH9NymPddPyHDdArB6pBMsfrAdmF",
  "key17": "4LkuEwULA5gfQeDQW9zQts7WHmRp1XpSyhYzS3Pss6HAPd4KZ7u7LF2qhiosbF9rxxZAmva6Wd2vaHL3RNE9bmMa",
  "key18": "4xH8dCY6Yiyejy2SYxu5YHktsNzZskgdRX6HKz775SfYGg8mDZb6g6yzRvoF8TSSuwJav6S3MCY9Hj1C6TY4bvHn",
  "key19": "2kJNiKyjxgMUCpKFaGtLcrDLLN3gdC9XCKBJWXH8gAaXLj74T2MRp9Dzft7CLinjkWzB3cTxoASwCER2ZPHpkb29",
  "key20": "2RAjCGbSE6agafKiX3xGM39XH4Yh3TCXc8iVhQwpuH5M7WwRiQ7ytnXWyiSQFKMsmiK9zgKjTDGH1TfrXezsr5Bx",
  "key21": "2xUyJ9nLQCc8AiSiEN3vpfrg8E1vorW3ckNWb6nPy4N8CkkiPCFbs55ARs1PoTWx4chiefiss2JSvwVthV1D77GP",
  "key22": "2ze3CqMyoPnpNaziBp9p2zjdwiTmjucbEeWkYMFVCq9CRUe3tHumWQhsYouSVzCdJ4hTnR8XvKDxQZbrHRzRS7NA",
  "key23": "41ZpcEMMQpabR4JJVc8H5w8yzguw9i89u2NSFcRrsPYQp8m3XjLDXJALqrdAissfCF2sEoqmduNDCoTMkGU1VmW3",
  "key24": "66wkvdriwyUMvMmsYetsNB4cV4ZaJqqMG2Nus8xK59esMJjVonmwyzBsWzmMXeqCkkUtHSc2n93426Kse7MF88JZ",
  "key25": "4mbYJkDXgeCzgWeM9HgzcnKNZWxpZ3ZRMVq5AT3695GWPaCuSREyAQNRh1XJTfXqkW5fgSgcHkyaxQ2uUaVKM6AK"
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
