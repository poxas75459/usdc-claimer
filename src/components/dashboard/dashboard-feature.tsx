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
    "2FHphWAFVfaHWMX8CtcsDuqmDbWGD3SKx8T7fRHMqNcGG1onqMqTLNicp4GjcPwuu8tFMta12QzKu9yihkPiQGjT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sdYZXArCavGQmzm5Eu9LkAbT5myq1SSMnUM1QUo1otZiZrotE15vGENJukTqERcdRHApGV5khi7ZbwuscC3Z83d",
  "key1": "5rnPdbk3LFQKkvZeCXmj2otrSAsFB3Us3XfwUYmbMHfqrrUAcdXTLYb2B1pVRP26MfxNqrvxcBy2hmh524AQhxP",
  "key2": "4QG8y2B6aC1PktQk2ehk7V5aLV2S4uBPQbgCR1U598b2GDyXjCKFSKdaRUh3DGDv9XLQQ61XeodAAab9dehMAUYj",
  "key3": "3k6jYDAhMKJ2kxWrKp4hk3d2qTjKEHVferSdsNu4QanUA1XC4drJm65kMnm3w2FVP56dGo8G6meAbivFQnD4bUf7",
  "key4": "3mmwKGXWxT5rqcVhYWEWDQ52wCrtAAA9pWWTJZgCYp39Xnz7vxSkXwYDep5K9bZNYy31D49scznf4XF5ehVdfszx",
  "key5": "4dctqCsJRQgjkpTLobaH9vP6n7XDPqXV1YuyurKg9UFwLXZ7T9zLoSJMJJNmxM4rGWnknhTrxKVWG1skxrnMbXaR",
  "key6": "22P8rHRxZfoQU2fGUGhDvsJ7oZrsgA81nc62LRBJtSLTJdcs7wTB82T8pjd2MbGhyu6hfBff4cNADJegMud7eCQ6",
  "key7": "55xBxc7Ct8JjsscCE2aK52y2sZiYk5bx4XajcXLdQP3mkSgDh9xhwDAjQ8Yx8ug3KSqr3GcBU7fSuMt1BL5RHrkH",
  "key8": "37kRUrr2PRFBFSACKrCnrdTifkqX3nGrkE2FVH3BLW5vA4YfSDLiy3LSfHUqfCQeefrDi7ZQUPnHRbqA3QX7XLjw",
  "key9": "9qijiEzA2UKXEXBjp37dDzEuRQtC9mqUcQte3icnBzaJPqj52ePEFHWuAZfGsW18AWsM4FQTaUyh4DVxdWwd2Co",
  "key10": "4mjjJYztsG7mWUSEW2LoQkVCLMEeeT3CoHjBzyS4pNhVE5cSNAzGTQ4Y4afZxzkxQQVNeVp4Q7u9Bb31i42H8MQs",
  "key11": "4CfRTH6XrXjaxKqzG6nGVpV3FNgnGRVtsZqbU9hfZszhTN6SxuZwmy3CiDJENcArbynxZ5rk3zVodrqdYvu8yBmm",
  "key12": "3Gcfic8CUMGEHjvXdNeUnsjDRqrCf5uvFe55hw7qLopgaiKH6SYu1nJ97iJGaAUHnCQdhnCJivLixsEnoeGdVkVD",
  "key13": "4A4298T1zoxjoXbyeuGZ3sUr3Jvzd3FqxLJfiU5fU1kej4eim6XRVCxctpNHKyXCHhkAdZj2DNPZ1meYeu5i7azd",
  "key14": "5SDpi8pKroqXw2EC2kAfTegv2WW1iAtyZXEgkxS8hSAVbrZPyMPzkP6yM2M3tDnrqY2Sh8nY9iEcSnL8yHzrnBZ1",
  "key15": "2NNaNNR66rnqCVUp4FHUioP7L1cewcrUEHAJ6pctqzYQ4dAc8mDt5X4kjHE7xq7dBYc5MqgzCmjMXtuTzaxk4k3Q",
  "key16": "5qnrq5Q8hxbE4rjznc33XVrxyDJVmJ3koxVJbYHh9htWbUoHtNRvyP3vhWmvNFH7LsXYuW9iLgND5beMcRMgstpN",
  "key17": "SjEgjyBA6SVrGkXLo33JoT3afFhh2qmtMZXhCURfpyErjV3KpbcTjH5XZNfhQX6Gnqp6t6CcCtcxsdsRTaMa9hY",
  "key18": "2XsqP8gKGJ3i6mL78zv8BuG9waZWwRkhYZQMRoNXhDzzvdeZTu2D1mCNXRBBSakCA56tnMjMBPscRFbHeM6zR54g",
  "key19": "5TNWTQS4kV4YJ2FU4UupQrdWycgmeL5fBREH1c84thcTwMLfHp8YpNVfCgsgTx8ddX5fC5LcDqB6f8SD7dxqb9q8",
  "key20": "5SXYZMWBNLLajQfWjAzo88pRBnLauPQ9gp3McULBbVHngPn3XPRaiC2xqCArK4QPQGTF4GGNq3rB7vuekaUq2nLD",
  "key21": "3TkG4bjbUDUd5UZDoSeTt3q4Fgadru25BsLdVV4bSjAkjqz1EAyLWw9SW39qbBmHoX1m8sAk57shMPPtL1S38AaR",
  "key22": "2xWqzHXv8AdC2HoAjpQH72FxQVApTF7cjpXMbACrmHvfQPCjZcaeh8mLK2Hdw8oWpFo3zeN78uE3EeftwHEXUm6n",
  "key23": "edv1ShC5zvKMh56YHMwThuki5aMiKXvEh5T4cQp3QwxwAL5i9sdKE4YUSdMm6XrV1Ez9quouT1Cn527wrYspkjC",
  "key24": "2wxRYhXSBw8rS4a3rrf5CamJxqN3yiQQoDkKcWqEM5yUnquSbqfcx5Fd4qHC3Xex6C1Aswupm1kA3bftcunDdF9c",
  "key25": "4ZE7RqDiAzyke1mYHPygkSLx7sYPpWdEtdaC1UVzquoFtQbAmoU8KPpMnPvhcQW7ajAeYUZNnZktneswVXNaZ2jA",
  "key26": "4LRf2jiXuGySJY5L8xZd5W38L4c9GSjmRZtTypk11iaRp6nu5nRomYt2Xx3HtzL6sXsnXBNLuABWxp3fb11YYhwD",
  "key27": "2KjCg94b9C2wcVViPngmBx6KHf1LNpSKeWJJ1hC9m3EXeZd4PKE6f44u6dsXnW7LNpFPtYcsLj5QNiKu5bc8F9RW",
  "key28": "54nkdY9PZxCfbqQPVyhFt2STT35gzHanW83N3hqqxyGUfsZvVzn4r7Rs8UB33A5LdpdX4cXx9gGtrMUrwwtXkfPU",
  "key29": "AVRbDix3kcNWCGpH7Y9dX2qh3is39r1NuHyZHRx9x5Wu8uZuHefsddTRHjSyyp3QBG1usTCWh3YyB8WkwSef6cN",
  "key30": "5QL668gQjY2j8mj6XgTM9PoWoSit2ituwunhv6Y1n3ng5bshw1GnED7A5MrqzFc6ruSi78MkhE3qx6pqTrjMZXGx",
  "key31": "41WLHVPTFJ82HT7mubRRLqtubAKrgC8f7vQB4ToGj2qdtEGH8bsRmLffGvYnSCJPYQJMbeiZaj3P3TS1hUcxgdrc",
  "key32": "5yrxrMbQnbXsxJq3RAjosHKBcdHsDWeWcMZR3c8mGHbBtHnyHhX66eG2DcqHiEuefkJ64vtVC5TrNiFyKo88QfJR",
  "key33": "54JaP7ABRYV7TmejGhTFrsiT5pNMAxE66BWVTmxQUDAuRCLoYsvpLgWF85DEE9fWWiphKM8GfY94U5FkREtx6V3J",
  "key34": "5P87pJP9Vpc1RTw9sjfL6Lih5VbmSUhdQjg1noP2buCUjYXic3bXzDJKA5ZpwKBZrFL73kYvtrPSP1xnKzmp1stJ",
  "key35": "CJSgXDXffmNmLWKCSYRscn4f123aUVFUUfEi1y3KMN8FRx4Kpt2wuLnfZoqgWm3W45tN6BBa5f6cTCmMoP9okTC",
  "key36": "2bRSjVFJhru3m1Qvca44nCkGtYZaZumgpnRibDNEsWxvRTCVtatQ6ZK7nSBhUnn1fryotu9Rz4sj5VKFeMCne7CD",
  "key37": "5Yvs4y8c1oQJtrv797ZLy6xQmqBuKLsAmMHYrZzVtpAAwWoANzQNXJ1hpbgFv3TskFxMBPPf3fYUJbB9pzm5MVxL",
  "key38": "3LmFbobn3fb5jJoeeByohLi3bVg5WNp5S3BTTkLxiYnnoJQJEiSHZ7NBc5hQLjKqT1rSpJ5RcM8WpRoroYaJHZYo",
  "key39": "3w6t5FAd4mUQf9AoWUySVibnpUXFaYEMukSbJJ8uvnfUHbT2ghVhfmNkuQV3vttoE9vBfkmQ9w5aUCSR6zB6ySZh",
  "key40": "3KnjGCfKb5uomGXAzCJiMgjioFgeNk2BiT8bj4bU59V61DvsbnfhqDGgDf7j99GaDV2rvDuAFfWCybqfph2cktBd",
  "key41": "2bmnwpF3SUD19g6SZFQUDA1wJrtC8hn3UXRLWkS5ATtg7Sadka8pShNNQxtQFCviKBVvLa8Kk3LM6L7tJmLcjYXz",
  "key42": "5GKp8gsaxcr89e4gm7A4Aw2wApxfYX2kc9yHXjv5mbHpY9LTCXENzV2XdEe1SNELWpvLWEMLERHrLeZdoLyzbk2b",
  "key43": "4XZAnDS3Q2iTmzWPbqYNQvh7UBmrc7uYEuKKftmv4yFKFfYmvXEVzxHZAqGqguvGsmMUvpKUM35AcgXVHzMgRgS7"
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
