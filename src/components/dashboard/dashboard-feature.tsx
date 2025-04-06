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
    "2uzWFt8FXSM6h5E8S6UKVsrGTUyjWnffq76PPXXrmvxWq2NZPdDMVHZYzgMKxep2VD4w2RGwjwdP2hH9NwA1L5m8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vC2gUPL4ycMQi7i7dq249L55KTejkPpnYdXKtwQwK8xcus3f9Rg56iyLr7RdY5zcaW5cyFSFkm2ouMhfWNJsYN7",
  "key1": "4gNjk6wYEnU8p3wcddqZvVJU8G7dn7ym1NKi2CGvTpm8x1vsmHac5RHX9vWvjv6X4asXWEqQNVr3nDpPk9a3zBYm",
  "key2": "5fAn8YNYg2gK9z6U7dirNvjsSypZJpGBwFBafDfvRbLdMyX5WaJYTLGpiSPQpW3AjThcXvv4pZeNxQWeyV7QfZea",
  "key3": "mZHsPRpTAebaV3DJ3FTGDxsvLsx4ax4L3NDmm6vh2ydjgv9z3HyZ5PRtmEmhAsGuKK1QLCsKGm4PuRb2ErnZQ7m",
  "key4": "3mWUgSUwEQyFqeJnBfUnkR6NAv8gAiUAeKCbiVQjcmW15XRvmN9iQ9eAaa7xTy7LxtGFJDQYfPhZnmnwegWnoJRR",
  "key5": "5w9Synr4EbEqHvvYAaJ4x7nzwNJHcjXvE1d3NPKrGgjhs9oeJLudyJ3MTx8dTetjfzSjz2n8bG4JoSPQUQKFnb8X",
  "key6": "8uktnghgYNoVL5LxiqPQVFQhRoB9WnbjmM6YrAgVWd3JCo2RJbZ8FqrGGrExax3RHtPN8zGVNuwNc8mt7oQ927r",
  "key7": "2yWvDr484mWXnTBhx4tmkC92n1n7CWn5wCPawRvFdvUSQn4AdeX9MTF5sGdMFG3rxvaJuPYKwRepL9uizm27NG4E",
  "key8": "2kw25Ew2Px9zCLbMpPu1PyNoxv7ptV7o7Pi98xyNMjqjnRdma3DpYQqpNkgjGvGKrHYL55dstvBek8bHac7qNdGA",
  "key9": "3fjfME4uD6TKmThQc4Be4UKauW2waF5BsgRtw1SjLnwW3Dn1Rz3H4ZQdPSpfGKPnKochHtVebGK8raqk5Gdn4pPt",
  "key10": "5FBV3iK4KvC1YUndq2zEXHLVpkWE9ZWVAeHV9ro9wPaX7GrCL1TGCEDCsdxHFd86ruWm2PAHjf9LcEdpjv8qfirD",
  "key11": "4v5uiaLhf7cjonr5FmfKACD8zJgXPwfpPQjkLSSS8uqxpEhZW7LfPMdPTjutQoVr9a2QRrpsDf5fxLjDeHjZLuc3",
  "key12": "3geqi7ykXuLSUPyy9qTuyMnP2scdTmCK1rVJeuHTwyB91GPXyZCDkgy3kQQ8YkdKZf1JZ9RQJ8rqFyKjfaAHrAGA",
  "key13": "5Zm7jvAi2tkEWMA633KWXq9yQBXE7EaM98Z8CG3yZQ2MXyScj6CiAwpdzi646uF8hnk69tmEvoSSC2qBJADA1gri",
  "key14": "2cKMqmgAxsrakXphzU7ovgZnPhG5YEXTfjY1veyupehuK8ruUutkzGULgUiJnEb4hn2QZjGT9sfXKsRqqzUGhxGh",
  "key15": "3WFi7y27F9mG1Aah3LmDHkbqDeswvLZeHytsFx53wMkP2QcUBcHdG8XhxzqTuQEqj8H2VzA2X2Pu7dNvE31EX7vH",
  "key16": "4bRWhUjJVzabUiXk4RaBFNRmmbssLZN3Ls2xBf6BY671T618newzAzRDdyJZUYvmNjaEqSBFnZyGWXRBbS21DEJn",
  "key17": "BZwGAjm3uYeTcrjcponzBeCKyGfYrbJJLkJMiGvJqgyHpzUZJy88hSE4fSLp7w9KvfptD5TPpnCfWG8DKMYrukh",
  "key18": "4XdGo8gvprajxW8mjqsFE7meEdMi7Sdibsi1FcX7Rj2CgHU4ESZPHNDtPB1xRakTxp2TdWyriAG4YUACz2kGXP9B",
  "key19": "3518UJMz8mJJHQ2DwkWVbFJRuwLhNVyU1JuzUXEHJJB1YpaPXtuxL1YZCFVuzDu2LR3YHnvg61WKSP6MtqHPbwv2",
  "key20": "4hzJREm8qETjjaR9PhMoGwXZu3BJ9g5hvzcCbcEqP6EGurnB5XzTG3rXt24DHPwM48mkG2juAg3hCQSLbm4wJqM4",
  "key21": "38EV5bjVvbhdaJyrBpcWbhbjzsgkARG6mY4S3366LG9q93fP8ceEhdEZxMnYxpWpiqoh8oUATSaDAUeS7CdNUohg",
  "key22": "aeVowsgBhVDKNyhxuH6HrxCpLEPerwP3Ur9kXwDyUndPBnxsM6QrgYEVtvTeoyoaJ9ztWTfC6nNZHuf5r6uQASf",
  "key23": "w8LZSPU2gJqQ9q7Lx4wJV6BRZUkyUzGjmCyFrxRCqYj89WHAEDLYWnfUcDcJQcCPxCeBqpnqP8nmcBiWEMexuJg",
  "key24": "5hjjB2gTnxtcqUzA7HFFMyefzztQ7PmPzbQkECHWDtAuZEBVGiDqhMURx4Yo9EfubLVDpf1uBkwbyRnmYRMgGBgi",
  "key25": "5bBK3DQVVpDqP7AugsXZDUPskfC5CmspiqbNoKcQc3hLwCk6fJCe7ba7Gm3keZ12ypodhhCs9BhHPketi1kF9Zn3",
  "key26": "5gDip9PCUhugpQhz4r6HR11Wd8xY1WLhc4LuaL6fsasEwuDNB5KbZrAgw7r3fhFxznrojBmRi64P83hLoy4ZGZBR",
  "key27": "5qxEJgUvBLTNvqHVXviMt5uexXUbwayFA4t2jBqbFYzMC5noMC94v2nwfLxuhoj6Gy2din5gNKryXu6Jwez1CpTC",
  "key28": "3Qi4xhkZpUuTuxJPUHcdzRifz1nxx6WwcwzyZus8DvvvWR3QBER14v96ZPBWZ3JBW5cU3vAVrUjMixwUP57pHyTb",
  "key29": "5rG79c22QBAzm23R5f76MjjTyc3XsfeG83ZBUpJTfaDk1NESqdJDLiwns2TDUjBokxxG8fz5Z8nDeVU4RetPMHoe",
  "key30": "51KNXJMSUGL5NRaVRZSCUEaootHrCciKSpR2oA8w5k8c56SVKkBgjbC552HbejNSH7CoCPtir8H8PQJ3kH2Pb42e",
  "key31": "5BTsTCw43RTn8HJkiNRSqEM1AWZ8sCRDgjgwmzo2Hk1kwZ5i7qk3U3RLZCzbrdYqyaRg5U4HBRLmey3RLXG3MT3s",
  "key32": "3S1LEK19yJ1gQofAJq3cs8QxRRt2CTfri53kQXd9CXYSoFAvxqCDSkMEGueZtCkhLYSAody9UHrRrqy64LXhHSxM",
  "key33": "3y9cYLyMvreiP5WyvBibSGzDsFmQrnwERBxuY9DYeniyW3Cgf2GX12iim4RqmgjxCZtTUgJgtJVjubWQZBLEutPC",
  "key34": "3tekzwDwViG7jySLRQpR9PMRLefCGqyTizLNov1gyurtoKxcV9zqRN1j25qAUqHTDncFcw7z2L9UZ9zXLcd2Fdfd",
  "key35": "3kUp4v7SXXpVR3EvVSP6Wyk3EbpahXs31t8b8EXTXaMRWXaxcscgCnzo99BYhxi6oNEGq8YnyuWSf6PSXjmj6YtA",
  "key36": "2gUAbvyYMEtNaHBWeHY55sRA8urJN8kYEY3jtAsW1MumuG6WMfyj4pxvdYGf6fTZEwgRzSNcx419B6e8NTbsdpPd",
  "key37": "4f2Dx8jYtmMVSUJtsMdD1rvdUrAiM39ATvU5m4NEkpThyX34GHK5k1NjPg9Q1TP248mqD89QRnGRhXzxRzexya8u",
  "key38": "2EnRdTKVjPSos4Z2VVrLeB8reVVLBUrPivttst8PjBSRWspfLwjLtpL5Md1WfKZmwBL4djrsiG5aMPWvyyCBcvzA",
  "key39": "4EEihK9b3vL1kn6V3y3mr2XgFshzb2PTYXyH5SndsSxhgXkrDdvTe1975ZD2pfrt2Te1ord2bxKHm89Xg6Q61P5X",
  "key40": "2uTewicnndnYJXxw4u51KoVuyibHE2URNhHbnX6RanBagn9EHprXXbCKE9XLKVUy4PqiLc1JmUDQ91h2G4w1FpCY",
  "key41": "4EhYzH1esCvXvG9PA9XBvy2jabJRCRNGPUg3GpuGkYYHh9LKXqKnaQRxqebPHtBTgMH5sWmfvpLHmMa142WTpvq7",
  "key42": "5QQQiW9SSqJZynqNaW7Uy2Rg1GBCVr74GvMoF9RKY2KEfqRHXpKAWg82L7XMseWySquCcKLpfShfC83MFRhuBr2c",
  "key43": "3HZcVosG8yQjMJJEmuSzhkzGV2Y67PGg3nfHjjmoaHKN9LMkR1BAn7Tj3J4anFFufjgdAVY1FaWWs4PZ4hawWFvP",
  "key44": "25uVYwpXfkf5hFzK41veKuM7nDmnKsT3w3JjmcUjzHtzd7SHxy6naQemKvhisvx7oP96WdBNmBjLQAcCmxBukzsX",
  "key45": "2o8UgoSwaCso5WSbtFZYH9Hq2XS9KD7Y5kGVomYHpKidXFTk9FXSY997iF2CNV41ZNN7zhk9VPpXB6u6HVZGhtKG",
  "key46": "4qYX2iPgCpiL9rFza7zPSq8GxVXHZ1PL8ZwgFMWxA2kVtHaZgCuuobLobuNg7EEiprJ3TfsayZoEupuVonZppDTF",
  "key47": "4vPGMSAuSj94cfvUU4USyuTLXqu37bveAaVoFBbnjeLqGhLmhoa7ZT8MLf3hxiKd5fAXgNqVkdcECSZGmqbywmqS",
  "key48": "ZU1yXd76Jcqik6Hc4THgXRZCYQWjtKKa8Rb313FPQq4jJH7WdVBuQ2vAywtXkTNgzezzuRfibADFouXjEs3EC6P",
  "key49": "567QbmFQEBPzHLFVuw5L18Lpk81KveGxHd5H8if6ZMuKvysa7ARAX4JiVg4yo247dWoXqH9ppvTZKPaUmn4mxTuK"
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
