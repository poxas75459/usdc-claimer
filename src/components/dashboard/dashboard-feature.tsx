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
    "3LZRyTbfPkUR9uDQDsGSMzYiv6yJ77u9nFfuS2KJLv253vbAfrDZEkw4StitMUyzP1upJe1XNcPhMnmXNqkeGiZX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RtvjMNxe7XexvHNtfd3nYL1TadvLNwzZM7ngRdskKWe3Cv82WzHe96ECyuVZxhAGMPUz4TU8CkeQSRYZK9GXcEY",
  "key1": "5xfEcPZaJptazK7a1SDJA3jUCoJ9ejaGzFgYVU56jHJLDtt6Pnd2C7ihUCQWRTV3Vhn1SzaLWvurJzzpzzZgjN3j",
  "key2": "3LNFWFgccH8pWTXqHmUMvB5bcGGvafoFk5JQFCiRkJCj9Hyb4uuQvXCuokPQCJ2dvqfzDLQNrYFixpELe3zS8Xr4",
  "key3": "2DWiy1bdrNfL9KqtsbP5JoEEzCVdqC6rgp6rmezZ9187ZUjCc4j3GuYrG5rj5gXi4XChXgvcQpy9Ydtrqs5Rp1CA",
  "key4": "4hvXuFr1gxenM4TLzXPUbBk4KQU9cZMP3kJQxc7UNdF95yDcxJfHW8ZnyqMkWJiD35j8vMkRYvD52uhAzEUMkUiS",
  "key5": "tCDEtYtw5XCwNxpSWEjFs3Kn4Ni5SRFmjZEiRxi8ZfuXXCHNP5Y1z9pW6BW8b7zeg8YeQ47DAVHHZDWtrSnT7FV",
  "key6": "391j6XXUw65bMWsC31GArvmX38DDx2XdaQaRWzHMDJ378pPfJktfPmZVgUuvSNDaLWzL9BnsmEAtYGKwDpx4hULY",
  "key7": "65fXHhiD3UMYUfNtLGbK69mi8o2kpkeRUYeqSxUUjHp4xCT2HJB8BY1f4TiHB5svyQwYQJNgsGqfV5DBDaN54Dtb",
  "key8": "3ZLTGqRpMHq96Y3vCzdFQdqJLXKfjYqaAZo2aiy6g4h16SwM3P17t6ksTnEkgrXAPrUbpzauby2yF8Y4NtpGot5Q",
  "key9": "2xU6hxzSXDQjTmr6vYcCwZhsbKmN7QLJUSMtakHtYzEpfzgDnWfWJ7UvZH9xE2XqFnYhmjTPza4LLAQtAs6vGwzr",
  "key10": "5zCMbB8e36jGQqQBy9T94FNxMX8Has8DBZi7CyTQEAiUxQtRKC8yTvqZg3d31hZsT5f7PFHro2UpFGiYuLEbFBPU",
  "key11": "5VRgEdgvfaNfP3eynf1vLotPqWPuhENJM4PDy3gvz6rhQvqmetYdNppkwkQDLAhthC9URMRJGR1DCabbaZCrXBcm",
  "key12": "44RpgKXa5eizUhx4mX7wEfxZkLBXcH9cLSYyTAa4vzjwy8vTAGsfXBQcLrDQBou1sqa62WkbgrHBnabcq5Fwvy4m",
  "key13": "65bZJ3o8JA3KuV6p9jL9VxemCzpGP8uJkkeGK88EcnL8QTSafhZrQSo7obzqgazJEtQ6pshKFekKTLBgWNaRRMwW",
  "key14": "26x1ZMZnvNNrdEQgkWxXzogBZnFzuqAMVJJLaSieeM96thT46xFt3DwJTR8tz3hYxWnamQNmt9FKTdRdL9NSeQJj",
  "key15": "3eet4mAgNo5sXW66wswEtn8fPxyB9eosP9JkMLD9HHYba2xF59vogqhsB359MuHUdWAaYQAFqLMyuvG4iiaaMv4F",
  "key16": "5q7F4ri8XMj53v4fqiE3JCx29s5ZjP8tdJTRnPhaogXFVTiFFwgTVxtK5LPQiq1AjoZMwrFphR8HfbMMTprq6KdT",
  "key17": "5U9BToESTLhPxjSikqQho4BrYWoxFnghM2pf77qVKhgxqmyiN61cGpTfkaedS9gN74yT3LwgTbk6WDBTvjiPGq41",
  "key18": "4MXsSjU6LPLKbeyQkeRaKeQUo6hUnacUdR525L5xw47sCHxDxXegsHSkKDaW4ojbsj5nsvMcbcwsdh3yHTSD9qFn",
  "key19": "ZVSe1wqVUHGgSsHBAj912YDf3hXr8dUpNiBByoh3w2EUPZSqkwg2EYo9cD3eqmaaLqEdtLMRyNqdSc4HS9oHoTW",
  "key20": "5nYuayYcguzCLr1tFsRTzf9uwAZxiHtcgVK8XccCrEaM35r76kP6uTkkeUobzHCpdsroSEWHQ7vrjGkFY7gg6gcy",
  "key21": "5gZY2zXhaDJwuVrN4AhxekUbMM71KFf91vDYobCfmzDb7mz2gMFHE6SUtAPmtucJhKZYQf46NPnQzKjzR5N9YSHc",
  "key22": "2LSuuUZkwSdEDm19pVn1qhnXQ5FDEf6a3UZ6ifj4beUaJfuXPhnUvKKWuLTa7brjBzzMDYrGJN9ANt7AQu4AWho",
  "key23": "2QaTojMF6Vy3xiVTD3djmP7KgHRZzmt1kdKbrUqohF8Awz3UoPrCFucvH7J3rTi2r8289ruxkS2PLm8mJfHKvBHG",
  "key24": "2AKuWm9YH8t4j1R4CRJLSdS3asRaRjgXcfCpT5cZpR5GjhgfCqTn7fPEf4s6P5XDBw6yST3nge9HENN4dRXdjZKy",
  "key25": "4XYigiYLvnrzMrwnBLE5jYkEvTLyc3HfEd2PuCn1Zpn4G5izc8xrdYevLNPQ7PmKLtHNcUwsNyRWWEJKkMEfTbHp",
  "key26": "5nR25bdg34LxmVUtXso1XyxkHZRvZTkSmPjPa1EKuGkWvwVLScefmiKVkqAh9iprLhoSmCTsr8DYJCkBf1MQAjsr",
  "key27": "67bAruPKFRp2hFJjNA1cJXgtpitiNW63tGnMxhAB4vKegtWPENy4T3MEZfTY2Q61272jdq2QQRy9Z7t3Fb8CELjw",
  "key28": "61dNVDBcLJkgSLtoXixoYkDBr4keXesL7mi9PxcT2XKgzM7vmyn8JBcKBSqqXjMhzE8LQkK8ELmHGm2gFGnKyxVX",
  "key29": "W1g7vX3fNnveWPtqfwdnC7D9gcfehJDjj8rTqzrM2DX4FVwPhHGcU785PmWUwMXiHRNUdmyS8ZKb2ttfWaj69v8",
  "key30": "3PbGPCHUcU11TKENw3QXHK3TGu9RtFHGS5GJQSe8GwDSE51NBkL1FKysh7yubwb4h4BDciTYbVV5UfTwNgrntGDh",
  "key31": "5ie8bqjizJSACet97ACRUu7pEht7ULhApsyYFS4FHhXUuEoC79KgJjid1rv9yHzspgSse5pzEtnN7Pn6z5q9ZHJ3",
  "key32": "2S16AdE6yBttLasG16DXsXrTM7GRBqQ1ccC6AJsmMPj9F41MnhMXj1i9u4PADtUkYD1XGLeP7vn7wXMviGSwgYE",
  "key33": "46j2V1xUB8u61f7GX3x5A5Z6utQKak4tvMJXCyZRvx1L6RVVXihYRWft5kc9wXNVHpHaL4MAaLZfQvhxUmMeW71w",
  "key34": "4VUMSVKngTfVBmx2R1JtpTRSnR63YRgghhKAXoBzD3HbBvhT8L15Cp8TJD7DwL6Us6WZi3vixkfbr3YJzdikzA3J",
  "key35": "45gF74vovVTYpLRZRxgAWmBBxR3km9XP7CtJvHwYFVpbMG6TXRGWKdtySUmpRrmnhafrDQFZwsUjpq5iRSTwb3V8",
  "key36": "25pp8Bj5FaRMGPNyqE3ZmNEAzmbWrBFxJfARYqfebiebgZAXaA1kf15HpDKhDfsWcrEqBMZaL71ZFXKNUExEeUoY",
  "key37": "51VDTPJedL3cxUKBEs1KxrghFp7iW6td6nbNSBjpF3phbmYUVs5E5F1U4Bemwaai5FmEicUAyF3kmchLp6b4xm4C",
  "key38": "5LvQ3TS6RuUcCA6MrdtpNHKTTKFqdUpRR35erCktJ5Ny6UGsh3VvjCmJjKuDbFWLRLAg3LVAat7AYKNYgMMLzgM9",
  "key39": "GsaYC8SM78wBf6m4e4Xna2qxN2cJUXgWvY7akvt8WKpq3z9TtG4TLSXDMwkSpC3fy6CqYyABNoNbt9kqzGoUhDc",
  "key40": "2kfy7aRW8krErEXfFWV8jo9HCE2N6vPineLni8hJXiKFmg4f9ChuDY57t6LBh3g5opsUoVMstFCVu6c6ZsUaxdYE",
  "key41": "34UGfj9F4cFUsSvFTwSnJCkqH4gnzQrfnTQnViofxCYR2hf1deh7gTapj8hxDNGCL2hBRtaVqZRA1aNWpXPgHr2K",
  "key42": "229dEM5zPPMJ28Escz1oa7Nb1kMsyqmkP3yRv8Mbqen8HDoWE4WcNBJ3w7kPXY8oSgVvW3C9zX82kn51wzLDFU8T",
  "key43": "2SzVtKmeDzsnNsSGT1FinVFXmdrgJN4wskMYpDnvL27hATd9HUps6W5iqfyEfNrXAGN4DSWzx81PVPKZqjgouZd",
  "key44": "XsXJHACPwoeBkbNC8nQRJJKHkEpyzKduBJDmgH11qwo7peUXdQZomk8HmRwov9pr34W68N1B2bf6aaXVCwJMGBi",
  "key45": "2AbSxZvgYJCQRgTHUiTxDoSb8ipoAFMPP2v27uwuvkQvrRyiFnUNZAKhCBGAoDqmGUsw7pjbYTjvWgDLKqA7Rnxb",
  "key46": "srmHh5qMuaMqiEC6GjiHpPVJ2ys8mJDhrhzfksACeoLUmcj9qizDUWPT1TbPTh97duSyzXekCKgP2V4Ve4SAubq",
  "key47": "5oXU6i4ZCqMX9FLBy7gH3RVcoeBWKUNg5RR1cSNLFKUzcHwpDJWiscPc9j88UwzGvDPBHWay4s4bb3zBKix6VzC5"
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
