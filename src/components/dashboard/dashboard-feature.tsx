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
    "5CTLrzpeL6Ns17odmZTMSr6MxZzXgSJwfCw2v7PhgGjSSiWxqXy93KVMLFj2LuvcnG7CgXKx1Rdeyv2LfqG9syN1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jjyMP1yHBAv3ZBW4vHFL1ZgPw2ykj9QcFjtbL14ggVdWVqoEvfRR1BZ3x4XrnkCrYBevR1P8weNCYMDpCwjrAQw",
  "key1": "e7jw2ysYBzQVzUGhemSo8A8hMdpQwj7aphTajPBC7cDVQyyYqfqy2hjY4DT7MHoe1ktw4dKx6JSq9EjUfh6xUc5",
  "key2": "3vyXpULiYsunD2sw8baxjmo19ohXJu9CwPy6GULocWDaPjERTwYTmdKg7kYQc4RTDtVVKYQkoDdaQcvQhnLC2nSi",
  "key3": "gj4nNFVg8nBHnAMrvDJuEKt9nLD6qCBcQWmXru9uqCKMVGzJkNQq6tMaYBz1kxCsmode7JdpEAmymj7zAeatora",
  "key4": "3L8sRxfmotG9G84jaQZdgNtobvFSNmhxec2jtNkao4LX6rJ35YCm6TQJv6xattMJe3WghumWxDRX7sy2LBnhnPwo",
  "key5": "3rcNj1Hd8Uko8Xr1nxr6Xtz6tMZALAbBVbaGRB89UtXQMcA7q35BYf6T1KWoSp5ikE8RVu2wyMz1fXR8Zn1kWdHV",
  "key6": "2JfeKb4k75FYvX4JSbzgNkNXE5TQVJiWAb4ypcnqst3y7uTExSrdzV53gyYFnShwHcNhzkBfcxmNf3ydrfuebdVc",
  "key7": "3wLfYuLrEUd144hG1wHr5TiKrZceGKM7c3xeXpRWunBW85ERGopLd6xnysXwfjq9YKwUnqmVcKRn8yVZysnLfK6Q",
  "key8": "5FZtK2uqiAGwjDz6ra6WyEyiJBFgvDpBFEevnTiuEU3bDXPAwHcr1TaH2VKG332ZHquTeaHqAwYFughD1i1QWYLo",
  "key9": "4nMDHj9jNptmD5SKpbdivcAkYwQqB6hHPqfHERvPZgy4WAQoev1XbTmfjFDU2jvA1FS49HBSGwUCp6FoaKCqYff1",
  "key10": "5mmqJDxzNyJ9BuxErcJeewGj7Zi8XFZS124wr3sKS1eWVe816Gb8Mva69qEDyCdjtsQFkeGheh1rMUW6o1prokg6",
  "key11": "b5MQYxe9goLYnJkqRZrJxFCfLErmsLhvjydtpZefmtwfYKFwb1JCiD9LFH2T4FeG4DtQuxd33DxF5aAZmtrt2K5",
  "key12": "3S37WnADrHSGWiDry5xjFbrjnaQggU6YZoeyiJZQpoyjV7Gqzg8UZyLi3LMwMFeSFVBYE5szErEE6MS5r6qEUVVC",
  "key13": "hyQte36iXdbJy5Zq1fMFxZPjhYty94MFF3EmG9Rnu2fHZJcAgmwVp34Sm6jwEF7sjseWNHdPzVibrW2sDvui16B",
  "key14": "N6Wrhkg58raDmPsQg3AFttazfo9QrPRM9H4DWhFrUUnh6vvishXjE3ADeJ5bZcHE8GFr6ERmUCng7tq9B1r5Sex",
  "key15": "5SDSTSqyY7gb42po5Yrz7KqfpoyB52EcziL1fwXVLFZPM9EmAkByPaRL66kZeL9C2CiiZeScnqCJQ79VKgmbjVHs",
  "key16": "62UR82gd2vtWtoo5Git5vSxCJ8VawmF7XTRbW6aCbWoqukYshbaZzoZNxFkZyCU4TYCjyg25WEA964Yt5hp1eFq2",
  "key17": "MhBRMY6jJBvLAzqGMhp7XrCF9LtkHFYanjEXYkTJgm2uq3HV5RmQA17bLmGwXwzPvWUfD28Gav1J5DapqHxUAg5",
  "key18": "3AmYJmQabuz7MKjLRBEh1sin2dQaDUFc3beUapHhLJtirkegmYdgjntrAMmo8HbQaJ1wtFnt5SZEhCfSmdMchmMP",
  "key19": "3cY8L1qGM8dbXLkpb8yZxMpXsVLbhRELMTgvioSnTvGQKW39ocsbzoX24YasCGTCxcK4MdQLcF1BRkrtc519aqjU",
  "key20": "8sEq2yYFFk5apVqgYsMjEbGXEPkndstmUmD24EWteQgD2xJqNurR6v5oz6adBnEcqXMuiPFA7EJ3XnD3d5oML6Y",
  "key21": "5PyBXeNFhPthV6zjeLeEXoRwSUEWddwxYKER3oNCDQw9RvcvzYp9tMNcAYWvMeKbUsc68cs1X89RjvUrKXovJPvK",
  "key22": "4WuXSkamgGvGYLGqWaLN3xHV281wzAg7chqudbgntSLVcJqGqRSZfxnbwYhXvAvpvzZu21bkL37vy3oY26iYvQPP",
  "key23": "5kA9VXmesg5i1HP5VTdyXrxABgP4Rkfz8H1pQQX3sCUcw2qkgWF5z3N7Pbddazcy1CPdVftwaoVSV9FnE1B3Nk9o",
  "key24": "2LCJm1srinbVyEro7YTDifrBrc6DUB4gA3BQ3V6s3TsjQSyQaFK1p8GGyS3u2RK6EGMFr4ZaxBuJjDnQTn2NDE1v",
  "key25": "5reXb177UpKHgpQdWvqjYS93Byi9PFnyadzP7ywezy4wT1FGbuZQydN8HRBgZvuYrb3LWFrCd9ps4H3Srz6KDXyP",
  "key26": "FavUGGwfamZnNDHT8Ya7w4iPkzJxzhS3dkGXrocjEbjGr6KAWxC7J5pFbw6shuKSficZP7Q4rfPeXoovjZDdQZv",
  "key27": "5LVHJzdWahXY1CMkN2cgKSKHHHS3GvHMznwqK8jBk3714f9wrAhJtPmMSCCe1Ago7YSSEYRgPnteeUux9fiwaMk8",
  "key28": "4sq47bos2BhuXm3y8QdiouaECB6QCz2tnHeo4jk2oWTnDk5CtUa9SKRjysYzo3nL4v7M8m9iU6oUt1zFpnoo19y8",
  "key29": "38SsKUWM8Jk5wEPXWU6coFZ4JgTRuouaLUUvWUxX6nnkBh4DHHxqXin42EPxDKxsEQbQLeBFTFvUyhGwUmwTPe2a",
  "key30": "3jcb2bh9cs9W5vcpJphX645zjbhoN4dqEzHZkbYPPkY22ZzrgoiSbQx6LooY7BYWNbMwrjorvfqXLQmE59ZWLqJh",
  "key31": "5Qj52TfL4gxFZWbvggBRjb1aC4AoCh7F7rpR3HezKvxavxAqvkcqheS4peoUw3MLSiffGXkPzKVyW2CAczVTyDka"
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
