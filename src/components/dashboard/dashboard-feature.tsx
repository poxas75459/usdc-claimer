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
    "67iRqDTMHDy8LLkLMM8o2E9jZX7vBrAhNUBonWeSRnRhzSN8KMVfFW5h3UX9jz64UaY1cAjGk54EfMSnHz3PFB9S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55ZTywmk9ehu7NdmqV7G5kJ9BBmet8t7fFSY5WXY2t9WJjs5ZxEn4BZwzdfoMaqnaRbggdiUPx5LDe4u7yzCWWLd",
  "key1": "Xn2CD6QwNgkCfBebKAVGNRDnLQZ28Fac3GBTy8bQwkZhKF6dZ9DnL782WcZs3umjMnXVjhwPB8hbCP6qC6sByzU",
  "key2": "cLTHurFngpjCxSUwxC6PCGPoLmQeG2SPgjyhdzzoyydpErs4QeWhqBh6puJrZ5adaU2yv6VRFhZnwgU7ZmbuCMX",
  "key3": "2bz7YjbbsGrG6Tkjd7ct5jpthpBb7T5xHJDtX3tm267f9GqFmCG4CQ4jcYPswD7q5LcUzjvDH5WRUeCBVH9QS6x1",
  "key4": "5K5wNk83PUGUc7tQ3XTjrJ1hzesVvg1AJtYQaM44Ekg5ahKb2ut4vhZNGwNxjesphDAPUUXASwoGZCT6tD4dC8He",
  "key5": "YuVWWuUDNuoke2ZtViAFt7FmqSwUGMhw9eqXX2x4WaVWsD4ySgQjp7VvwNXNraBAyxsseqVCPvYxZXAV9bnCBZL",
  "key6": "2GG79nV22JiTJGhzrKCUVsb2M72XSBvN8SwG2skDxgUsjFjCZRF6uwu7PknFv5p4uvPxRkeSypQKkiNH7LP4si6S",
  "key7": "wy41fuNYNUsN8E5ZXnYxjvrAchfkCtYCFK7rNzHsYxRZfkCbCcN4n1ywNduRy236fsQFatG54EbTmgDxTsH287U",
  "key8": "4W8PC8ddh3QkvApn78hHNWif7t1UtA9YraCZYco2rsN3ZMFMU8rqHCTASa7dVCpc6adeDzELM9EzWdsTcEFWB5w6",
  "key9": "5qgRPmebphmKUFmUZVQwBkupD3MgNNPipdy7z5HzVfTcbZYU2XBuxHATWxEuNvrzkms11rT4EXA8AwgNamDZLuvP",
  "key10": "4Cj7RzGeov11kFUEtqDQxmhQFHsket5Bp9Ld95f1uor9T2QjVv6HUigSRXaQgju5mWhL2TgaSSoJ9z7Rd1dhrDao",
  "key11": "5cKpjs6cCq3gjESWe4orBZJSbR1VaoWKZGfQujF3nuXQrxD3oUuqWX8kntpqc7PtNDV3DgoUFZSwaBbKjFWptrVQ",
  "key12": "3Vi3RMKW9RoWcUde5r3G4Ez5FEGNen3PwbPWf2U1WQSgkvQqraqr9nmxy9o3NmiGt7ujuCXsUJYLixZ9X499X8gX",
  "key13": "2j5U3fmHFeyUqBqaDK6BwF9LTivva6SNuW491CQGDH9fihUvbJweQCrpuXCwMSy9jxAJ6ETQ4mVP77P6AebFjSDx",
  "key14": "3QUTZZi2GhLJ5UtMQGyYpJAyoQMvUSCgerMxrhqJSVU8uR6uv5LeTUGsm523fyYmUvisSpz4wMwTVJm5jMgXPYk9",
  "key15": "3iCHsxKwLBB3ds79Yvpeb1mfHrXpDwr7ZXcDbP15ifckVLF2Mnnz93EJSZXFswDV6o6D26nHtLsuPq6EmXCJKF6h",
  "key16": "3vy86giLPPLXTo6DM8hMrFFgHH4hRF5TZLbNA2T7hMoWgDF9bejPZUeqHR2n7STkxJu5BN32dW1R59haWTcrzUde",
  "key17": "2JwRSB2SWCwhDN7qxkRteCXJwZfGaLrnZKgp9Cs43eVLrb89sHwK5gBSNH4cV96T5y2QsqZBNz95xCQJhaN2cUzc",
  "key18": "4iFFstLZiDrxaEKkNF1UHjiT1xkWC2NV9SDSduZxfAqTKJNzjDFj1jzsjq6m68s2BiAqEYnPD9QQa3Z2EdhF2WdA",
  "key19": "4pkXbfNPYUwoejsSjYK8U5GnbdAg7PBf5ZZcRMWBQFjszP4rKVCcDktpmbnTTFR95S1HVEhf8KFFNSaT1QJzb7Yo",
  "key20": "2P1PUKVucHMnaN2texoGqChknWBve1e9PBQTrx561ebpJhukjhJsjqJh1o6ctjGgp5huutoc6os9BppWrFEbkSsx",
  "key21": "5UAzNKmPx475E4pPdqPy2N5R4v5CVUCogUCaSD62m9iZLy8SmKn7Q2AjyYqS6Q1mY1g2rYookyzwKz1Z2nHbyjr",
  "key22": "5hgZknqq81yjtaD1mHK6bCvBrrGBUryYULTcm7RS6Xo8RacopkjH46gT5tWLmBfHU9Q4qcYjQYReqanJUVTtBnZR",
  "key23": "4Sphg39Df6rW5g9jHdnN63QDvXgJRTh6s1FSdDD7Qx84WfchT5jGNTMQLnYAaA1ubzyy9KHU3UEcJnEWKjrb7tNF",
  "key24": "4y7LKUr25WDjtcJ2KpAESKSAbRc9rYoRQzu9D1z68C3YbarM2W1Z6PXDHLNQgQANSmfKUaJMcdyoADufbBmiE8CB",
  "key25": "25EWSkkJatTuiHERV8nimhdUwHhhcz6nscRcRYUiH6AYvsGSJy14QywZ5C8bXxajK3wSzyJSuhCRWyFwopCVF9Zx",
  "key26": "2xkxiZ5egjarXdwdsCUhetYrme7A9JPSvTY5mtsw5M5hVi232AFDugawCUfnmcA4zJH9Hd3QEms1DS5xhvAXsrcR",
  "key27": "5qdvThiUtkRV8YYUY1Kyo61cRDG8ZE3QJCxiqVTUx61xstDqH6cyMFkN5zzaUbrpzL1Ef5b3BQaGBXLScQz7yYy8",
  "key28": "4GJzfVfhtZYHqMPUK1SSwD4QqFcRnJP56UDiPdWb4fACswoJSKPDuUQA3tGgVos5chAV9no15b2VBZXzo4pT3ixR",
  "key29": "3gpJEZiNLgRGwvri4Sc7aqwFAUtLNaRauL6d6ejZ27Qg1i7Ts4dyktqj8Md5kQoAgxpTiiNuNDiummaHEXej5RfZ",
  "key30": "2vE332LLfa67yzRgFiw5Ldj6EX28aKJG4vuGwRDQ85aMCT1vDy5BssSED5dAfxJutdMbRRx7ZGs1EMLAdHDX4PAf",
  "key31": "2ZhegqSMxzdBdQeYuKfJE1ao6zwWDTV5zEoKe9f2NnXLctozkp53S3imzkKgtw7pH6g9xUCqcdMmGTKfxAY9yzx3",
  "key32": "5VNEEXjEG4U9fk1ycUrcfzWjBRyrQnbAaihLYftkq2yWdQgZnTGq27xCG5WMYEXqZrv8wD1R1gS5MafcGWj2E8G4",
  "key33": "2zwfd6cWwLWfEpEUxERaFF7PkpzhXcddMYEDtt8GybKGNKZ9JTuJ5474qae8Y1fDWjyaMRBY1qa3qZt4KhRP3m13",
  "key34": "2y3WyS25J6kyVzzawqQHNhqA67XL8knB4jJ1qDhHZ6MAxDuGTv13U5agrmMGYxxW2pztbAuPSzADBCKxNtTPEVLg",
  "key35": "4EgRDFsYXukd6XrkQ4AMTGzJ4XhV1iShmks9xYLiPgCuHVQWuiFjmeKETvwbwtwTXUjeAak7PiT2Vpd9o6YdEoF7",
  "key36": "5By3x6RSdumjv4tauEjx9HmJcZizuGKA37Qxrt1fukWRQmxpdNw9hpbRBko8mCxANd1HhvP8t2ueCVnaBxnp4Uh2",
  "key37": "3wjjN45cdAxHXTdkWRk19JWAm99QcCZTZwSqmzWesDeABzVnkkZ6DFYa31S5sKBAdmYVXkEfxz1jpyjjqfLZ23nd",
  "key38": "5fLxKpUDpXoXg5L9YozxBd7GU6vwNRbktWap3XWFMUnXMnSW48YiSnMVno8qT18pzLrWW8LbuUP4KTCgKQ7dDhyX",
  "key39": "3T6mm4PGNq6mKV7dMPWKHdU2uRvg2Ny11V5Zrbxx9c8Kjdrpb7uPsMyrtE3qeSdjq9gBTduMDNZ49qr5B2aMwCxB",
  "key40": "2LZhLaoa9y5Ze7p3e5mL6kDoJ2tUtDaiA2Nj9acB8NGARdtkJPtHHGRc1fWdEFMJ3svntuqTLXWRs8cpsMg2KxrN",
  "key41": "4wWEcCW5kwAL5NJMjQJYpGiAMwGN9aZk3ahLkyHwsd83qZArSVyu1ZkLFU612EN9tWEZFjthq82rgxNzwgbDiHba",
  "key42": "2qvzqAXy1Hbi12qKnK7fXGRbYoFaJ7W7XeGtt7mYekPi4aur27t9PT2W4Hpnt4hX8Uk3sDeTd4PRqizMTEVNNdzb",
  "key43": "2ysZLmyYXkwAyJafkuzQxCMcG22fXEjg5bRK5UJMwGhpTaLG2e3ZDtq9h76gqSQPd4F2qMLLyxUZAwwn1mpAXtBG"
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
