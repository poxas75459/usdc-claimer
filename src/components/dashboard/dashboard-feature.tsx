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
    "3qriXM7qnoUyKynGDVvrxMWsMf9gqEoPqi59t2jJWZRYSiBBVxmJiFJAnAqT7EheqTa3PVv8bkUngjodfHaJ6DCx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AkoB1xFbazQxP3JWHgCpF8gwUz4QPyAyzyA2usfWH4xTG1iAP3AxSRKhyDEC4tzskQ7x8oAyKboaC1JW6vvtEHs",
  "key1": "531vL1ZSPGqfhmEQNbQZcqVdcLF4bajY321LXsk9RGEhMEMteBFomhjRiswBKJoY6D9U1nQWTx9a5ACqzb8jkMx9",
  "key2": "2fKmXRZ7yo7yEqFrenXxVUE877UZdB3LXgasNrmkLaamZhwwd7eFEC63AtSGymqAiZ6EpPUxYB9Z5B1BfnS2Fs8m",
  "key3": "41zVambtVUXkbjKCKkMRH4JDUpXmKUjGiKYgjPNU3b3aT5rutSw5unzPu7k1uxv4KV69g3DSSbPP2W1hu4fjiMAY",
  "key4": "3QWtpmhibK43jEyWimcK1EoZLQf41UMmthUNX8mhZYZVTJHNkMKd6KGuagbarwdAaQXaDXoZYiSFMMQKg98yAPYj",
  "key5": "Sk8DQGaM1HEo13uVuxNW4feqywLMs8KEPD8e6YjHmgWYMK4AN3dbBTmFwg4CPPqzbSUreKHMAm3eTvrETddg2oZ",
  "key6": "67mX35kivKpLiRP19X2nBCQ38HWgbPus6sv61EPrc69GeGm8Eo5mYDg7pXZz5eCbAuDb6N4pfEbmshMT8Qj6kPGk",
  "key7": "DKp1h9TRovxEzu1dgGAR6LEMuPFRz4txpmqjLhRpFy4nDqHPytqpF5b6hLofTqMdgMUfJVMqyQ2dP2KCcWQdWer",
  "key8": "38Mf2w2kEFRmsJmGMnmz1qvcE4r9uisxM26UByHUu1UXiMrLMcBAomTRpSCUGumVnvMoB6wwDjG3et12nZupwGDm",
  "key9": "2G9WUqy2FKpAPBSNn1e1SiTLQkQZiC6fxn6FAFeoBaDbF1AQADmQZQxDqbJpsTBxi1VwFKtrLSRuFmdT1UpdgzGE",
  "key10": "7bDLGbYFqsab857qUCE57cgzkZq7zgNcBE4exx2d2aBAYyhH2qjn9berzFgcbGoFRXzg6P7JRXBKTWHmTk44j7x",
  "key11": "3LujhwCGJgi2HxBg733HAchYoDZyYReYmFVg93GEjpFW3vyG5sznBqKTAoXWfbAXtqyPyNfZQF8z5yHCfpfqz4WS",
  "key12": "H8sGXUGnu9kf5DD4QmBjBrXteLwGXLvcm4GHCgB9mR59kgV9wHkxPmkU37GkZc3SyEkQJHfXewc1uk8RmbqW4gH",
  "key13": "5z8nehs84wRVDQi7bof1Ad3Bs1YCAyXUvBgbXB8D5yBQPo4xShUyEaopaojR6dw1Z8Jy8JmVbQKfddsHmkKMmTX9",
  "key14": "21xrEEz5SKJ2dtKXtKWrXJhHRvA8j5zebrPs9APKhmocUUuZpTgdxoUgsJ2rnBWsyhBAs22UPjZjQDTV3BArJ7yS",
  "key15": "2ndvrBismQ2d6eFTaW2CuRaY5FDUPZtQ6xziTJB2rjxK6dKUbkiXdFfJM1WWs5AGLqGccU1ZQ5wTCt8wWTKByBfe",
  "key16": "2jtG1bYD7oFC67VYWRKyra1cMNY3pSMYeJWtKrmPbpmJV2SXvzyik7QQeQct2A3g4kN1ZS3u1296k9n5eqXzR3Ty",
  "key17": "1X6uvUcy7p9kQLhRcvX65hnc1jyjbVpP1zfVCTnPy4KupGCwtMWDkdhcGXqoGxS3d5uSXARQm23ZAJow82cnSno",
  "key18": "2UMsJThRpp1wcpdkT8u7vR71TaZzU4nQjLHS45iqPEZVLNka1vDmPX12dXmJtfV7sFEPmny47TWUNrnenpSNjNCQ",
  "key19": "4UgXYfF19MPVdftqVhn8RtKp9NLnpu6nFMib3NUtsr6rw1UQpMQi62VqsX2QktSyCqeNP4QSLHSWNWNXAd1jFUK9",
  "key20": "3uBm9BuKsi2BxwUcayNP6jsxs7vT31uA5YfATxtSV8EVQbdvLepLr49hag3T6wRjj4TFqbiXQ834vcTEkjV4u7PG",
  "key21": "eLQ2Aqwdr8DaL5JgdDt4tFmi3BxwAxF52mDuByqomYP9VJ2Yodndp3wZJGtgmXkS3xnPEkVRbd2NTbnCBTuV9VQ",
  "key22": "443jy8xK44RuZZypxcqHfCoUpTE3RY6RXWKm3Ms5Lby3XDBGqanRwpXvfHzT6iBjCwN1K5ARGYhqnEV36e8y47dc",
  "key23": "2CfU7tBnBwy2MsTeY2WzMavViQoVT7GiEC6U3gcFg9DWWk65U32g9NEPCu17Z8MKST8DUhBLKfGLpdewkJY1btTj",
  "key24": "5E4e5QbM61TYydZzNv4MmEmdzwCErz5sLuKb91YwTk6Xesp9EycKXYYSZeJkAnkAZbuxRwwjsvmDQKAusWhqEbp5",
  "key25": "9w14LZrjhzAW61okAQE56h4tj1ydWFHigdjHZxz9wYDNNPc6Db8VcdCLu1qRDc5VM9dZ6LeASW2wW1jugbjudZ9",
  "key26": "2w9hufJgkX6qtBrHfBw66FpTAYDpbFprJidei3ms9NojhaYQoGqy67WiZHSp7isc7b3qeRhCF74mfofSwCMRMtwF",
  "key27": "3H5MxtpySyNcQm6v2Fo1YPEH4MBX9avJVwvc6vSDqGucN3Uqu4SH2DET3zmt7CV2BMuJ3ZiFdy33DpxfAxBP7EyB",
  "key28": "4rKmPtYwTPFd5dDWLcYfyGSJzCTn24FDr2PDZS6HEqWDvgR5oRqHZizkivqkGShAh7NggQxPY64JCMmsMDn6c1tq",
  "key29": "47BDM85C6wyVTbT9iGR84Ls82W8LDgYN87Q1JxHJtsBmB1UN2iogrPA6L39ReL71UtvmYhUx61zAo9eycQLixQe9",
  "key30": "22RTLcr9zvnFNt9Y3ewvVdt3ZyemWWf4M1mrh2exgtAdU6YsEeBo6k27A67qgjAawmtzqW7hkDYWvyAphA9QLEF3",
  "key31": "62pryoNTz5dTrWBQkMACETtGrQ4u7wFX8FQUQ2Z9dahDyLK4oKb7DNHGQBkdsDnS86YDdXQNqE8QfvsNdQdubjvT",
  "key32": "aPxtMWjtQetq3YZmeqSvnetfo5bzAS3pcMisiDUnatdWLKvigEqJmiG2BbdSLZmxUSGyV75zvsT39WBgaK2Exbs",
  "key33": "4GX8VfjciyTn2vo2dZ94pEy4oscB1BDFsFzdmJX6jbqgxLmUhpQisy2ifAzanK8438JGyV9wdSUkjbQqykGLFfvb",
  "key34": "3pVZ3XfZqMUZwnEa9tTg5ABMHvVoqYzBtByvg6Y3SRfP83yUWMKkpV2wjwpftYeYsRzismBcUAVG7q32WAYzteeG",
  "key35": "X9yAbtBW2Y3ZFyAQjPsEa2pjkxiCdZh8s9v29dJJKGb5zwKvorxBdDsVBkxJigbPoDbSaSrjEa1igg8JaTEdyQM",
  "key36": "5UqJtSqmYW2XEUJgexx1ebMsaZHbQbRFzbuhkuK4BHVFuvBwFjKmcoNkjHPHtZ8KdTD5M2pkVXs5DvgALeimf9ys",
  "key37": "65m4rYxYcoVBnJrJ4mFKhp7PiD9gZfnQmePnTidv6RR8Z53AL5ZHmKPccKYKAkbejRc9sZZtmiYY4wfHf2RW6Fy6",
  "key38": "2eKhNW58zS1s327BP8Zai2u11nC4ASGn46uyXwRufJkqCrZwgG6TmoD4xeMfcFvwSCaEvgTSjtorrYe8XoE7Enob",
  "key39": "2wVdCKR2DweoDr7J85Ya56TGJX3o8t4UeYgdHvSx6vzyhDYEEb9rZZ5eaW2KQbakEdt6bkBtY9meZDQi1Lqu6jKR",
  "key40": "9Vuof6FbVzU7oH54KtJA1h3NhNC1QcvPWREGG47mvjyAHwQ3x6uh3dKy7ghWXRd1SnS6XW2Wafa5YGhHdM2NMUh",
  "key41": "5uyxEk1ZrpZ5uffA5SuxzMtgwejg3RASAyTQAyEVfs2gLdKBiP5CSxYQUgbxBpCKmSy2MLRE7UPV1kDxxEwQhdQG",
  "key42": "4XjssFTqUT8GJtJoz64wuxeR7N9c7jS893TsL9nUkTs9yUNJRnmVZdnJTZyyLZmB67q8snbk7WRbTbbVeSjzjE2q",
  "key43": "4UuEEjtvojGxLxKi43AKCYXxTpdzC8NFLcNZm499ULQYECfWfrM9cfZyzgGRcb5yvLeaVicwBTkGDobMEj7dfuBQ",
  "key44": "5vbSWSUkPFBoMxL2dbxRWKZzsH8ecTE5sUX8Ja8VZsEBztxa7Pszq3yBSVSpd2QJHANUvFapDG3R2oj3WKHfnpHS",
  "key45": "3oc7wB8DbQpQsZr1eJ8V3c2PZKLr5k6sMiEFKLfLBuzS4EVYdFMiaVJTKvoXtH37kEoUffhGmw7gYhx7A7g1tiWt",
  "key46": "3nthozmuzb63BNjec6dKXrnjqHUMw9bkj2yY5yJqwBSXUstNca4EpsFr74yxzzCymuDEeyM3wMQFfbgmMRjf5fyW",
  "key47": "2HEoWruaXG2wS4bYGjUseTCAKNe35bnUDUeG7DSQ5Qa7bGhEvrrghhS3iNuLTtS7rvCfTi2d8SBohVsxxcTsjv8S"
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
