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
    "2gPyUEUPgtdxRzjXN3gwgt35KEqPKSsJdRFFXsuRJpmwtWimunzZmXCSWhCNrY3GUK8xP6ts1buYcCE5nEzMQkXe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UEAs9nyBfCPmCt6rafuKRJyBP9PUfHS4U86HpWd8Rv3sLkrwxo5Uij8MjHgkKSKx8msedPLmQ53YZcykNiHj82C",
  "key1": "445a6Pjsv9wu6FUFAemrN7pNxXeRsMXvvnbYPf24dFV32qrpzj685CGztX2irJmtC19MxNknKfqq2QNLPVSVtx3T",
  "key2": "5ViPcmKCiTYJZu98LnjU8qjxm6xCAwn7snQShrnmuZ815PtjpthgMyfAnLCLXddXdnUcwCyuKvVG8paDsheB8VJa",
  "key3": "2g16FwMgLKjCfDq2TjPY3TVJov3rAkphnFE1Ys9Dn1jZyiDZz7eSmmWoAfY4j4yoqr2htXn4gJSHafLJzAfSWRgZ",
  "key4": "uYjq3Jx2RM9aAYL1Uw6ZqVhAVhNVU3G9R5hXQuzG5NZnbpxZQUSC28YFMzEpoZRtSf23E52tZZR5y1TaCbJNvwG",
  "key5": "4jm2de4shJymyLL7yMrWMCjJpSVHYXUuWjUzB3BVePfs3yGkc65X7XVQsz1upLWNiRNatpCiWwyyVVyUqee9Wnm4",
  "key6": "4ErFWEZ2Fv6zNrJkxkAnd5pYEVUuCPeSc4w3MG3S1UN3sNmxLzYoXyYPTXPo2y6SSq7iDhZdxAMxkd2sCyc1Zu7A",
  "key7": "4nB3E4fi1pXmbFqZgX2SjgAA8J6UAnFxhe5sUKKVJTj158nuVjG9Jx5ThYwQwif3SmW5gMpUuLTScKqmSaVuPuHV",
  "key8": "j2VTjTNCKY6F8eJMuv4AdANM8vyp5iyKuBbD8RFYjo1DsaXiV2QnbegwV42uQtst4c1bstrDBre7qW2j5H7vZMB",
  "key9": "HBR63GcEN53KFhJX7HXfxLZLbUDLH6scMY6u1GtRXw3MsSWLLTApGF7wuABobuS69VeEmQ93EZG5ffNFiyqZqAa",
  "key10": "4ixWb48D2yu6s8RZmbzWVfaggBmHEtPGnpqYzdUZULUmKx6HzMAawCJCcsSijoe3kvHTx5DswnSSJTt58ubXsEGe",
  "key11": "qEhYGsVwufscR33YCqUUpVbxLN8vpv2u2bi7BQLVXtn5T6errPFYfBN2Z9AHmKY6Wq6UPXvALVyNpWcggWim6mo",
  "key12": "2rmcbfxJZe8fRuoFqSxtbG5JTA4U2SSoToX8JNEgshNV7sHR4kXMp4syNKB5N98HwWmpwxRZ2PT3A78UMNGdmUvm",
  "key13": "515KuiuT74fiC87FoNRtbdN8ViBdbSXqEshFEKAEGt35y6VEGyf4JdL2DrTNMwpGYiUNxneewakvY92tetFirCzy",
  "key14": "594RRxPAc1GuYNwrHD6kWepyuoA25EfYxnkqLunbGvGJYLmSeydNRWEsjvzCYWrCfj12MsthmLT7THmvfBxsTBmf",
  "key15": "4HNU189U7aiidHs6x5VhPJaB8yip6V8wiYmBaCwdLcsNxyFLyCn9zup3PGNDNa7rcxTSrZCT4RcBd76HAuR9PwhR",
  "key16": "12Hokgia2y33yjhSRT1jXDbRZhvkGLUWv5AHky6mJvkyGCT5herw6bKkEvPhfhqjK9fjGJh3xubBwzyQssdVdw8",
  "key17": "2Lvh62C2ZLH9WmzSjgv27C2LRvNMM9TRD9fttervYTN7sZTEcPVRjDtYjeTUR76eXkZbB18uuZvfVeLspSutoG6v",
  "key18": "VjJ9zzQa7znkt3W1UvFYnKsy1C6DBSyyY2E7sZaeva15noM7bvn7k8fEsmU6r8BghdymxVFJ3qZRGkke2TFZv2C",
  "key19": "2MwywkZV6Md3FPqJZr79jw161EcbYv3WyJXobA23Y1ppfUxJZjotAWYm8XQAi1HjivTjyvZqw2fAmwzJDpt8se5s",
  "key20": "63Q6UTJzx3NYZjCAciU4UjisNWt8JBGUsWCZkSBERndAwKAVC7UqALrcnrUHhBgke2qUMZjdcZRxQPD5Tt2WvNED",
  "key21": "2ZmVaXSx4wPcZvvkmfGoxrf4fqemEpja6dFcutFhtWygMHxP9Ejas8SwfXg22Eg3z8mXbcX8JKqrHuJrWrzJFzMn",
  "key22": "3aTDPYjL2mj7udJWoK4E9aSKeYgzQaqgNkCQnUttZ5TaSN7xZjZzreJ8kqgdJTRsgW47PgoEPUGtiBDxG1MfAoDo",
  "key23": "4yP3c62SS4vMcVcHjoXvAyacP4GZLUJUkdQjZdewnt8mNxEQPbsFRwpWRJNvFc67xBR1g9hU2uw5kKYwhHga7Xgq",
  "key24": "3S7dh3mHHauqrXBQ5NTfM1pBLkhaAse7m6YnVKWeViskFz3uFgcHxfLfAJotbbVQY1SSd3nj3K3PvAVxG9s8M3NA",
  "key25": "2iQZP6bonHo7gqcTbSjMLnANtLbg9eimL71YxQimy49ETNFe2Kgs9XkUNbcwxfzVkSkSwapAKmAuzb2XL55WEj7E",
  "key26": "3ZbDtnvz78V6G4zCjk2Xx1Yj5hSbHcKRgJ5h4zYndvqNEmWXgWJZKryNxxUJjZ6zYwjWiSacNDQvNJiw38S8rAeJ",
  "key27": "5ri3XmbAaYzN9PnHzpy5ZjrtBts5d2kcbA5s9Uz3JadGAbPM4NSdcgKNB2TqhCzj5ijcXP5kqBvtH48EBVC2qA2X",
  "key28": "3vTEEzBdSC7wpMmdnCojRZ2qtBEQTP7D1WCFFqARoy6jffZNdSy3u5xhJSRrrLyCpbfpofHGFo1RJ8SgSy7dwysk",
  "key29": "SGjpUUFG1RqjkbcxoPA1AdQRVi3pqtcNZquyniaETY7Yet98GvnAhn6ANAJqUcG6S2rT71kmKMXSu3UEpExzat3",
  "key30": "38U5zAViCB4eT1HiJ7RaKnaZKwfcoUsJzME9kVtpRezjWHaLEUb9evcpk7sSDLkFfhBvikxjDCgfkbb1eGxiY3j8"
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
