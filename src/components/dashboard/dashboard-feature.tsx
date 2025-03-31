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
    "4zS6Lig4zkeJQKiEtqz5kFkoeRQsErUkZgiaWKGB8H8gukzAzzKF6r4Yx7XHS6iHYhJo6nvUmpwR3qSVTPvsyCiL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JVrBZUKVMqKDxLyNc5nKKSh4f3anbjBHjVdPEysQK5iNDvuRG58ysRemdaxqzJofDk8h6AMHe1DBSBTH9wMD49h",
  "key1": "W6mcPZkQGq7XhNszwVDr7DvVmgTBPprrKSM9x9q1ULzkQwxjhoCaDG3Uh3Su4mqnvDVYRRB2R8xVJ3Z3pvQXkrV",
  "key2": "2csiZoeZ2w7NGBJZKYPkMSdVgkfWnyXTVre4pygz6YS2SxZmWoesnK7yCGomREwCPTh2aFykVjbxzFXuXKgA7XAu",
  "key3": "4zC5YG6BDg7t7pd32s17Kx4DupDzM2t2TzsJUKJBJoX1poXgYfGaAHvxwY6oJ5v7a6Tmpk8SzbbWTb3dXFZWPahm",
  "key4": "2TnVK6XsFMT1NqzcrSdS5dJHxHoZV3sDCYHg4WwGzDuupQpnfV2VJXuCc3B53YZ7QoCBvDCsPUyuF66gCYJ7kfrG",
  "key5": "2a4cARThTjAc146E8Zm8Y4cwDk6716NnLbbuETrooeYgAfD1hmfDLbfGm7oHc9WLybd8QKJACoK4Q8TF8dVQYScU",
  "key6": "2qLQqJESY9duDX2Q4V1z3BzhTmr8uP1mrL1aWkVmcNJrGDKNMHstAYH1UM8W5ab1md95V6y8BptWrTckjH4SxCef",
  "key7": "zsxgMoFVddJmKa56deo5y2HfmMH3BFywwP78bqV7cScr6StxmZjjEWYohnok2BBUiBk7SgfZ2wmfxgwV1nHbeVR",
  "key8": "2k1gapypxb8Mwp3R4b6etRmcK8GCUdXE5zCsfbwsgApTtAGC4qx4JU5vHKsWMQyQzGsYJA4gK3hMiPn24QYkLBwq",
  "key9": "zh5qL77ps7TbchpuoFTvPKAVmdZEWPpjFdJcbHNBuk8dmJnuXmGf6DMWvV5TLZ1t7wsuPyJKQA9w84fXNw6wnom",
  "key10": "3KLYpVyynbadVW9wLZXu51SsbtE3JR19HEj9ez4cppeTDnCw59A97BSbVUii31GN7iof5b86Q1ghMyAq58Y75Ewv",
  "key11": "3HmzWdjMYnrAg7b4XbguFe2u5H7t9uStKvV9YXgTfdm2XwCAqFgboZxi7mJhoYugZdaenfsixWeidWzFbdmXfPyr",
  "key12": "34NLaGKwG1bGHfYJR5msAKkRE7GRaZnpPbKMYhsEozSbpRJDgtmd5RGx2hK3WT2qwcLPYUAdLVLkHNBYNeSabtEv",
  "key13": "2q2dbUj5iWSaF7wNE5efot9Kc8ESZHpvBuB3rtpMjowHyzHoGpbprvrXrH1wgKz4yfwUqb7mLr4rk9UeMKsTAAeV",
  "key14": "32AWjvxSye1QV19sc6rhfDiN7RNJbVJvfa6Eq2UNBMFTD1wczUYrwWQbx1mpB6CEQmbf9hZmHfau7YMdzh7qAyST",
  "key15": "4a8Rur1e1fm87mwvRbkH4W4pN1tbRjMeqUGwbx2LMdU9cnghJiTApSe7vi2xhqtRVShoQuKBsVK1vNVUo6hdRVoC",
  "key16": "4NbDsfzhH3DJDe1CM76H3ys3aPb7RYPhApwSTXNZzbE3vjAY124pSDkkBHFdxSmTyTMK3Yhpt3Z1zc6qkNzvJUcP",
  "key17": "3rehpbgwk1nUuSEDP8G5YDWTGkcGWSHC2SQ6JmG9syZ1m9gSKMM4b3x8dBTo9SYyYzyuSyj3eTTBVKd3oi9wBeV6",
  "key18": "5qCR457WPYWmVipPxvBLprJyrWAr7frX575SmcCFLsn5nzoFTUmbtQNEUSUY6F9yzY1m27REVvYai7eEBKGNvbaQ",
  "key19": "weZgYuLYUDE5x8EAVkz3xQQzFiYpKXj3VYkfRAH9e7XDCvTMqYDb6tiGgB4aMLAA4w5i21RM3L9DKF9XnWJdhhm",
  "key20": "4jmoHPK9EzGBK2xZETXk7mjPe1hXQrSUDyoJaGhi7gRUAMn7AWUQjVGSLF6duRnnumgzKKVBvuHBRD1TU21fQfN1",
  "key21": "5K3Yx2ed67WDyyiiM3HEoxgM7QBUMGgeZoXi8ZKF4uQHbvwVbJaDRhxYv4kjRRpiKqF3oEZEJyLZ1Nxmr2nghvw4",
  "key22": "3kKUhK6721WH9hkwjyBGCUPwCzTJJSKUHiTzPFhD9syAN4AaB3JS5jtUN4JHLLtTUXNk83TD56zcL6sxsWbedEE3",
  "key23": "dJqnTYQUsTUy71u1MhV11M7na1DrwKhQ8KkeMCVXvjsrouN5L6N1UMNKV4UX9H84fGvS5mQVjVa96c2V1TAqh7D",
  "key24": "4fomdJZk2Tm1yokoK2Dk6PD8g2wSdRv5ujK7spTdVPWXBEWVy2MVFHyi8NPCwMx1am5pPivRc43gWcfdx8477ZDD",
  "key25": "2vo3UDp3NEZh4BP5WDhVWYBDbEvEV9mWAVsz8RJRP74whnZGbVuWf5YJ6hcMZMJVCdcGZc4YzLdevYJWaF51sYoU",
  "key26": "4TzERtdGdw11QeQFpoR9ELcuNF7xiazsLgpsAL3Fr5JM5VLFwvsZTUNUAA8QK9knros1UMUaMioovMo2jCcJg5cX",
  "key27": "V639TzmFx4Bj1meimmumB8Qi9jXafzPEDFDPGeFBDPgrYs6oncXP9JinsjJ9XTZMpZMcCLfiQCVBYMgsAwFYRts",
  "key28": "2xKPqaA1RtktUAJjxcMtaMYYW76GvzYcXTZ5kSTmHu6kqDgrFSCN9Qn73jzJ1aJkK5udsfWz8foaNqYx7y3E7tS",
  "key29": "reGrjm1fGZrPjpnsSs5ZGEPoojEqrE1HtogL4CEnMKGLGt89xwsYJYFPbLTLKKbMkz4TnH7xJCffQDmVic5avqy",
  "key30": "2ASJtSHTLqhtehdyyRHFsgy1AL9FDE8WkVU5RmBC4f9vN22f4gijzNekxeyeH4v4NZD39DjMr8Sp1pev5AeWU2cB",
  "key31": "koVj3H4mqLGXJ5MpDuYSge2vohvefqd9UuH82stqNMJ35E1gBCRM7tgPiyrkQ8XBNC9GUnDmr1GatxdMcsFmFFZ",
  "key32": "ADzbcU7eEHWyn4tVyVTSm4Bke1Pw3fZqQpqYDk6QnAtBj1BdbKnmXe54sXRpvRTZee2F5gMbQF74KssxzZ1K2y8",
  "key33": "q4naKgur3YYZzcCr1zni1QPqdGdCPGNgVgPAMD4dw3ewAfCTt5rWQU7ArpHMccrcBbya4rjHHqPLtHQp2AhNfNr",
  "key34": "3VrQfMdYU9mFJWk5jAKoE99co47un57zjNCVZ5Mpg5cUQx77GgqzdwSL2VUrdqsGA8MUvBdUhfREDiMhhTvBufbk",
  "key35": "4zxLFnzFuC9KjA6GH3tz8odx8ZZHvmfnqNiYEP1J6TmtJyoaQynEMj1CBGNnURGvttd1YDYZcDSypNMznrTYjbas",
  "key36": "5T8YQzPC9HXUnrAc7HgXtuvw7KZ9psWiREQfaoGeuGADbb4M5ExYdU8hMDRC1UmJmFfvF9uFSAVzBHd7YV68DMXe",
  "key37": "pujtzGndGt5ppndGMRCm73c46RGA7vieutL2pmwepwc2yTPgVr86PphvcuXas4Ah4PpqMtJ1Ckkj8Uq68XsE39c",
  "key38": "233Dc32DeKPates5HuWvGt2jJaUQcJp45yNvLhkzY22db3hKoUi3K5XVajFoZtjX6X9q1YYh3xwSa3aYLcpxaGUX",
  "key39": "aG8hVCuFP1vWwQue6YwzfqqF3oaMAFERXaHbY15dF53WzTdLnaXhVTLcTyNAAJfeYRTrFM7asLzKLrvfNUsWjHp",
  "key40": "2NQ5U5zPxaVQR9aMpDz2ef7ZGH7tmSDKKkkuMpx4fMj3B4qDYRQHTjoXBfJaCPqAGrS9F27x8ESUcXgKgxZya944"
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
