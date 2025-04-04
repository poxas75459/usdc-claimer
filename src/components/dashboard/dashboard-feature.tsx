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
    "jyCVK7gBDnF43VFkgGT1EXqV61cDWzZwsEv4XNCpu13XqcRTM7mkGNC4V1Pc7ZW78CjgGQL1ftbHUwdusE6n1N7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SXxcmBaDZE3X5vcZps1UmYo2vfzqRF98r6NAzps1LXkM7vK9NtUBYPdFJgVARUXGwDQ7S6cUPo9ZPXjCSQ8kPSS",
  "key1": "wjBqZFEFFByRqidVT32wJP76x7EUyexozyNdqK51w1a4cv45YysDYwwVtAVkXqSt49cFSKNoHyz6U8YMzpwW4sQ",
  "key2": "3jgE54b3rYR5dh9nmVPoYoGMHX2dyTn6u8BVCHw9ZECnr3zbpmDYNyGmfU2LWEB2tKD8kURqqypLaTeV24hf1H4R",
  "key3": "2uAgtMGhizLK7QqRwx1CXg6HbaKErctBcE19SsUFGA2G2ZW7SN29jb43woDJdzvdphzX4CHFa527yXk2QXS6uKV4",
  "key4": "5zHfoDCZ8Hi6fbTG3nyxbMu2hXuoWbzTs2tdXocFvFMpgpfpfUNL4FM9jRGjBxVqaoyriYJ8ZsRWhTrCRgKNPnrA",
  "key5": "2fJZ6N26kHTtudZ8ztjKSWGujV9inzpmo8atpjmB61xGMCk8CkWS8UPejPAwp2ejAhg2XCaFMfeFtogcENrMWf6J",
  "key6": "2NjbP1TzGXTMgEHcs8JbmRg3FVLPpea1oe3Q5RjDo9VZAq7xAYDpFFp7MWkHkrGia9g7JKgtxrwtia34QcfmBEYE",
  "key7": "2Zy4niu8uinNXc8gYwGsNyKEWXJgfzyNzjitrJWZaAu64BYCSiY8gLZz9zb6vbRv5g91WJMxuxydBpWN734ezipr",
  "key8": "2FyfN1XtzLuGnTYPtYQepJcsJ9VEt1cvcY4qjjTJcigWky3ximi1MoqgvqDLRHbyeX1FAPVy3w4E9QsJg9cDnayy",
  "key9": "4uPjdY3fRReUjua3XWVC7tW4DK6oQ7iFH6PvfiYb2JeZQQfcnxXsaCxXH7WAeawJztDwApacuBNNjQagcd4e6Smi",
  "key10": "k4F5oCGvc1x8fRcxGRM7X6hYH4kh6PhVTDQuRzjF7456hjSpcSY8NePNH1vXXnm1c2fAPXzppr1Czq51QSXfEnV",
  "key11": "2ZxaKScugrLjk7ECjjQ2J8ZLRNCDALTYiZHyyGGew53mEehks9iwtRX2J5G7w8aKCr5aqxEtasSJa2BVveQqDqst",
  "key12": "4XKHn5bMAHt4FfpmaY3Nfqd1nzRT3K3AAJdqGpKDQdrQzgg6QhEZbU1j83CZnsdDXmXz7jx1rvigZ6vjYttzKTeY",
  "key13": "66GUPw87TpqyKBX6qPAvKhe9XG9wmA3vxXc91R2SBWmN91zHngRgvbV6G1UbfQW4qecPhcnav7KEpePz6BpkQ9Rx",
  "key14": "2xkBA8vwFghdDdtvJ7N3AFCJLMvNjHRZ66xok16NTjMx4S3kSVeCCGx2CyTNSeYJYvWPAmRKgQ6czBL17nMQEXpr",
  "key15": "pK3tvqB46AKhtDftyp66ATJWfwHfKQxY4p9D3jj3cPSqRXSReSPB74ZbFkFjSq77aiDjn8sH2g4bumxr7yTrqoj",
  "key16": "3AGno2NaCr6xYjKaeW3buFh4mTiaLGDp4X2USWpt4YDsJ3sJ8VqaR9AicP7sUjQ2f2R1YvrUrWFD1uNgvUo2S8gn",
  "key17": "41uqFyYYhwKNmmPBLJbLCrPbDsyw7vRUqC8ggP81zZ7HQA3uR2jJc8Rr7LQ2im6PCZYvKEamHe8FmYg5wpGYAkek",
  "key18": "JpurSxSLmg3KxzRA61aVPnbeMiPVopakzk1qhMHt8DJrEbjAngaMCxGQ71o6zDohbHUZD42bAvXDr4fExyX6qVd",
  "key19": "XUiPpW6Mrg1s2eywk13sRrAugJKyfDyttg8ZZ5QnXy3qxxLTs1SroqBCzZTBiRFu8viy4K2dPV4mJwhWshuBt22",
  "key20": "3mowqnWW9yUo6VhqTGo9F4neoAgtvpvHPzSMjLW7AUfMgN4XBxvkZqydm4p8fvy74PQxHCX9fXxrU3E8niega8sA",
  "key21": "ocvPohajBZ2qqCmwwudgSYUJ3U2k6hHs62SMGmpBdcJmsYV4KrTnqeAjYuuk9Nei6DQP5BcWpe9AcypX8v3gAeK",
  "key22": "4mhRjDrMYuFKTYgVM9x3QwmgCZZVdHvpexhfu1ki9w6XGrkqA5X6zHiBSETH4jLYBFExYc2excYECZUkJL7ujowk",
  "key23": "2uXunnpFKn9unfbqTuTMXygHZxYTzsFU4DnEuaZQPtQE5sV5FvSFr2DmVHTj1E5TPPSu4c3kRgDb3wLhB1DH2bqU",
  "key24": "5XsoswU3qFMHpRYuL5P78JhNLQVSYovrCqaAPdm8h24Z87nnX6i39QCwWqN6FNg9WAhxZ7spmuKYAyJi33ABvC9K",
  "key25": "4fxtr4MLFMVo7qjh1u3XLZbqsTemhaALqgpJkqLMoLu4iVdJ9TCaj7FtwSvs4s7upAkDeqtm1S8zGXRiKGyao78g",
  "key26": "4Ze6gKYxXB33LMyqhR8icDmd4fuXJSSY6fk5n4vrN9LgUvbxCPGvoHG5Jcr1MDwvRZibJVnTBn26JWADHTSHGBjF",
  "key27": "5GUS35e5aNP9a5VpK2kcmAK6wiCBGPVsBSzu1d5HLs61THrDN1bPoLupfR1a1uvxCusfpgKGuvRMvU7dTHPh2N4z",
  "key28": "4osdq5NiQDsjcESK4rywCHTm39Hnf3kqv4MT1H7pjDzQLrmwQJJRMDFFRiaNi7LB68mEEowo5VHui6mHE9gsQqYp",
  "key29": "4vJ9JiaEnwugWZGdxHvWMRmc2u9irzfbtJARyo45SZo2rakF32xEkh376VCMcKL8Zyfs4R5kJndsae6AdTsxqNAe",
  "key30": "4bPE84JFdj7Sn5HpYJQMyEJW5Gv2VxYYX2wSF5wBVAyjR5kPoCgvqhNUKdzwgqf61QXfFvJkuXGHCVRT62fUFu3u",
  "key31": "48X72NBwavJ6MZ8HLEa7692GJqTkB4VvoFmvsy95A1R77XY1C5a8FJYe7zdbVaDiwQmNx8NDNxKjmZzwaZ8T3YBc",
  "key32": "eiqxzXfDkKgFaqmqpZa8i73tpkmfq2q29rTcDjiP9oP5Adb6DYDbbqN6KydLWygT7KW7RTMJPH5LhWmufqYqrgc",
  "key33": "TtErdM42K6PBQd9EriYiXUcDNesC9CtBWCFDbn4xGnYgikP98ABT9Hj5z5fixWmRPnvceUZPsHL1eS9e93Eek1C",
  "key34": "4jTmXPt9jjAiTpdZm439cmkA285wB85ZtdUxsFuQN2LCFQRoBVvdwERBanZ1NkA6qJE4GZ43wDGzW7j8xEQx3QnU",
  "key35": "41A8DEXHxM8Jr3z2VUWnVDQHgLMwWM7iABpa9PU2YZ6b7Zujju12KYuGLYgbUurjXLzkmT5yuev5XqS9GDRnnSNc",
  "key36": "4iRKKuNXCsmrE393eC2bXWiJYYVT1XUR3WU2ncLKFkETdgpJEHFQhpe41wiMw7x3qnCBaCruobry5myimYuwfkFC",
  "key37": "4eaGgdEFm4Xs7CRkuaCduYCMbs2C63ReEZEwkY8k3d8kGP9UGvNDEaaaA8nyFf6tURurAswTjbH1xnHQ2Sp1toaJ",
  "key38": "xjJnNEtgZGH73totwuSTVFobDQCnM1jbdXR95F3pnhwGnEN2RxRW5i4AsJvaYPAkBVtWvpTub5e5G1o91T8xHnp",
  "key39": "4NXPyCHaGoRqyR6SdWuNu9FD9wQQitUVYRbwS5s5Z8bn6d4dqxg6qp3q8Eoj2eYQRBt7vBhw8MbZvpG711LDgE1h",
  "key40": "2U9Q4WeqKLJ4sckJeSyWVkPSdB48cy7HsVqeaLcAWNTLsS8o4KL6jshqyX7NUytTFZZru212nyFsFrCfUn4bbW1k",
  "key41": "QLxSL24NGoDaiqLN3BYr5bHgDBDimWQZC9fWNFti5txcAxm2b8ftTcPRyiuAgGsUwxuyZZp6fFBCbBGBs7UMvXz",
  "key42": "2pcSU4imQGduJa3DeqF2rFBTkPippYoB5S5otW8RE6r9KuejaZRGQp8ft78SUaaYHn4jwsHvnjniViiBCYbZbaFT"
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
