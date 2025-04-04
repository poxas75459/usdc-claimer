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
    "316M8iBQe13iPSwbSfWyrtKmH6dcFbdMHfMTis5eVad3az8wpGEnbJsrYsmKvDwcE4AG3A5kgDesCkSZjzBwYstJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mopRyDMFrGdaLH7BPzwbCAyCftwEb9PatPFJ9o9grbAadneRhTHqsYvzs9aWn7g7wemwpRbix7LaMAY1wQyTZQ6",
  "key1": "5Dzn5TYniNHHmzxn6kRzQFsPSVPte9t8dSzjkp38WHfwvYxbteHYfRsh8mZDYYjsvZbni5DDZbRvU2exEKcit94m",
  "key2": "NxGfgzEVjthEJe8CKmK8VKHnTfK6zoTFCjLS1TvvRAdumy7ih6whsAYxpxFfJMAWWemNaotP6f8njNrwf1FYA7v",
  "key3": "2HL7e2QFhPwxFEwd9xaioyyA2yxDfATsWruSPftKL8yaP11JjpUQFCE53DRZ8w1A5mKGn7jkDugvP8fYsJD5op28",
  "key4": "64HQKJAWHSJWuveRThfzUkeQVYr12qvocZckksmospHxywG6GetYCon56hypoP7Hf9fbCHHAPCoxEnW86RZbUc1V",
  "key5": "3hw6vbhVKY1jfQQbzErtAwEPEGBkc5Bvq1FLJD7KErYc3aMjVQLWzxj8bGYY26K81tzUnsu73dDzvhPUNqW3j8e2",
  "key6": "4BQFgRCNAK22VgDBK9nM66Q4ZG5vTfmqgv8AeLpfwpJBFz2DveZa7SzZJ63jLuzWqy13ftSDXZWdvc9rWhJ4FDJM",
  "key7": "5VpnnqztVVYLHhF6j3VHCaeyEkkq9ZJ39PJEQptsbsgyDHGhsXHvh4WZoeQpyd2C8SBzGZJ1YzzrvwAui22jemDM",
  "key8": "3J7Y4RMwAEKwQRYpEMsJmb7k2ZPVGBaQW7MSof25KrUDmwLPSNoLkq3KVwkVLg5tQAYLirLzsd1GAgmxLh3YF4cj",
  "key9": "5ZmLtZYVyWuREUZGmp2xz44aqXXzGLmnidwSvy6iCJsDVMf3mrgENXSWv6iRVGNMoSdukVDZDRH9GGwjkjwUD2j1",
  "key10": "2jw8xnj558e3gY612fZHLBL7dKT5khdUGUmqutC3oevPEtd4dpooYSsSBPpdXdsRw7iwB9FJVMHdtHTZ8GkybHxE",
  "key11": "5Q9LMXSPJhfwdhJJ7uW8F348FJ6rpx6xYpUZHckziviEKCHovuaP7s9iaPWXJjfZEX5wcGPFs7Mo8pPizsFTXPc9",
  "key12": "5mbKmArKd5GPuNdg98pkzUvA61zsJdPbUVSGb6JMHyZwbCP2tVr6AMrxFgB5gZz2AQXYev1HTNAZpgGSdABFNm5Q",
  "key13": "gjp4TVWpUEAZ62zStpYJaKR9tzfGXUXfASop2TatJvooQPN5nQxDcqiqc4pGA7vdcHwPzSMCkEqnU819jnzy1eV",
  "key14": "3UMzfjWKd1qiRaXyWoyzbzXbjw82ZP9LysBghmAX9RNxbTTCFrEkC415T6rDpbRufs1CuFR2NrCJ6G8GmwVNrdUg",
  "key15": "3nC2yHgVUe6kFFVEr3iMBMtWaPLJQ5JUy4L32A7c4sDKwa54KA1aRXr6xDbBE2Kidkig5UFBnWEJiZjdZU6vP45j",
  "key16": "3peBCDfaWKCNJkGrxmk7CD5wzi3dyzCUosWqo1ezEH1ZeUkiX4APodrTSgh7gimXvSbwYYudF4NDeedzCh6XSSJD",
  "key17": "4dLkEyLDyhtCwqL8vTgKJbfww1Zj9ZFLfBh6vaMANJ84ZgTD8Ke57EV9HnRftfDaFoENTvmGzkHoiRxgkRuerUX9",
  "key18": "4555uoPVpfV9SfWuGh3rhHYB74z3ZJZUiNwPAxxcMu4dxyj6r7QFEq7XoJmKrkcyB5UF5hVR7hjvC4J9HrNEWmgR",
  "key19": "24jA2iH5NQNDUQoKWctfYgio2DHDxUD2cewYT6qQ9GU4F4CDp3mny79cuCXrrdKbFE9Gy1dLy2WqrsNmQkkzGRSx",
  "key20": "4D8ciVTsiESUEF45kLS7CogY2k7JhHh8pS3rA5KWok6y4sAA9YmhobTQwujA5bHH6PgRJKEhhDXUbswqbSGFWVFM",
  "key21": "2d9Fe8R98ZP9uUAyqn3pXK6AUAZyTR9BndXeYte7PDipDaxh3JkyM4tYq8mHc6ZLBvuYTveWsSoCubANDUKwp46L",
  "key22": "5hXzfWE9jk7jMMFh5ZvqU8SPZgRDva4ysBN5umdHW8eUZQEuxMtGcGgyxJfEVYjRZbJ4aoUvaAA42iWPt8fZi58N",
  "key23": "54ZWq25Z8c3LXGF1qDwdLMUuA8oP2Yb8Y9yKJsnRWTfxzAK6PEcaEKmpnrX8AQsCUr1NrMpCJKmuGbfAHAsp4wwR",
  "key24": "5RES1GkedoadeERLW4c5XzPg1t1B13f4YpSHcYfSSSSxN2RUepdyFPF6krcqa7an6V2vvAYBz3XPWWNEZDMmRapB",
  "key25": "5DhYFYoYrjj3RPqdk7xmw1qmsS7wAhek3k1UGgh6LUdN6nztMLQm4xMsch4rUdtUUtZJ9N9UYrAS4L79rD2P8Au6",
  "key26": "2T4yL9z4GnCsk2YSxeX2TpMSmwBaki8obCo8ycCE4WcZ1Dh9DDTkatHuTfZhDPUeRqjcXNqThC8uVcTJaEJhrz2V",
  "key27": "4SwPfKSYB2mcSjrvF2MgkxupdhXzedfN2cQNsnqDEY4WEUdX6UqiB5qdsGRzB89uZSYJmtNeAhLzew9d2x3G2BkB",
  "key28": "5Coawpp8nLNuC1pvS31j1hXJXLyrnQ9iqCFk6mGQ6tQqqWC23Tpy8BtSbczdafRyaqDcSW2QVWDwaA2MWWfj9P9t",
  "key29": "dykjSyAyPNTDQpXidaMQ1KKBkmmp1U3JHKkc4kxFHSt767xU6mJtc1x9Gt9YqFCT16jvQazLZeaqtet8zzZA6NV",
  "key30": "2UDkHy84Bx7us9tH2i1wXJN8MdQRvimG4E8SfKPsm7uvf9mPnFNgHSLUwSqbGdZ3j66xGzB2MdGuJThPzW83b6by",
  "key31": "Y62rU8tnBTqxBi681RNDaAEgQpVmaVQwsywBP71sLBt8FPHvbriVUVL5VhJK3hBweKAqPJN44xM27vbdaaunRYy",
  "key32": "5ENbed2wqgWx4KbS84BpQRFcrvXHgQwZKp44PazBGeBDHQemMLC2E7hkP8RvDFG63Qeke6QEyKaSoV52fv9NDZvC",
  "key33": "3UwLeY6TEp9hbX6Vs92SYbSoRUrHuwwdEysdVMeBMaYSqC1Xf223Xtg6imN4fie4LUH6eScSo2hMPLmy12nNKo2",
  "key34": "2uPbjfUyFPfWcbGbya3Nv1xMdBemknzZhpbfcwPTQSTNsq1amFKsejfdfFiR42rJibjYQ6231zGwv1H5HX3ogeTS",
  "key35": "2n14X6oqw6VHMjmhcb5KNtV5aaaAXkaLriYPwzJBH6B4d2YEVxUmHMha3EefRYtWZbmzBSvBkK746To4CiMsUpAr",
  "key36": "23ve6QfZX5ZbR6PedaFjWCRUKjGMYgoN7zeuDyuPdiu4p4NawUzd41YdZHd6jbTZ2Tefd3Vgd3aVruftdCmoUSFD",
  "key37": "4NQvWvywH6k54c6K7M7U4T7rmo9g9k8VYwS28Rqjfz15F7ZErf7cwXYQdLz8Aafyj8XmHooxrMzRafPFZVJzfCn",
  "key38": "5vop5RNjEBPm6E4jmu2TUmRANTrnSPUvFhQfLQ7QPT1DQBdUSnSfdcYKUA3rGNMFAdf452TPhV9CxL5zR1vc171P",
  "key39": "5cTQE5ocibeBLFPgeVJEYt9T8KLEvuhuuwNjcymoCAzU3wNxAi2oqp52LiUxksW7YnmKAonHwcxmEVcunWfy5fKr",
  "key40": "4iNG8VnNfCp85r8jLEZQBhuJ5CeH3VJvpCVVgQqmk9s9BkPFnNhgetYf2XqL4BAjffhJvLf8qQVLrZVPG3o3xfwg",
  "key41": "4R1EFs12Ee3eE9Tyhs1M4WZ7kFi7XYBaMCRQJ9QiGNTvBjdEojpyqqduaxV8hif2X6U5gMKqihkWZFAbqFRY1ivE",
  "key42": "z9ywSyMe5ToRdPqZPQrRYZV3BTKqfoA9L6QeuyQ799ADDpe5fE8tsnTkeL9AszUAD1CwSFYu8LXQoi2Kx7fPw2R",
  "key43": "7YZvNunZ3HUTWNaFkmAg6ZcZxLekxSyVMeQ34KCDZK5wTwJkcDqbe4nNbqoS4yhNMA5ow5zcMDpgiqfohWokgZh",
  "key44": "3MZrkvNYVuaPj4Ee1pbmpfcLqCiZgeJP3ncM1mxvH6ssCdwHWwpher7K7r8UdYyYEKFnmdYMQ2fD6uV5M5YhkN4c"
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
