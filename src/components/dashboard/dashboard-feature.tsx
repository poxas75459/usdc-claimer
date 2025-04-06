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
    "YNsZWDWfjTo5m2vb6DNbMG8trPDdGaM9CDC28vntsbSFEqFH5sHgPUkkBuufT4nKFrXj5ocRHm4hRqTtVU6LBzi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MoVvgGSxKXWVNwaWeRMrdMdggnoHRaPxKyUbsLH4PxV4VayCEEYRYpgC7gyu7bHPejJnT5wB6qFXAzx3oizCtai",
  "key1": "543A3ZP7WoxytT7V391zQqAmk4QuZWjzJuExPGrysmSj2VK2XKezpQXnQbDZc9t3ssg5kVFBPQUhBCLzJ221a2AT",
  "key2": "5S2Czq3qNrnajmDykvNZMVJpn2fzY9BKVytCBHbAhBjC94iKBPXMWjst2pJ2YsMXen5A7JJfZ9Zr1ynP6Z1Djv7Q",
  "key3": "ZgvZ8GqLNB4RCWWJo9wGt82fHcsgZL4tP6B69W7MkjNeViNM1RQoyHa4rj6JqdNnsv8BHwLsfEo4ZQopDAA5iBz",
  "key4": "2iAcWPSPq1snYmgaDFYhFkG1WaNfp2rjQLY3qcU5WCzqcxoEE7sLpwGJzckkjfrVRLfvT2f29HacWKdogjiHzV9V",
  "key5": "swFQ5SWM1K54zPn1kgSYrGQDp9Y78CBKEWPZKCgFLzkftoZd5vYQ5Hr2wyTtm7mKu8HGvTne3Dc4madRp8gREEq",
  "key6": "4NTXEnVFwN9UqoGpGAxLZvjWD4MGiz5FPn4MQgVzcujZSLmok8UTciyH3MgfPRW8aN3MktGsXPpnF1jnPWx4PGCU",
  "key7": "3XsPRb3qPxTdAeX6QP2vuNGfNRhSMMcBakVy4Q8a5eudhC1VYnwgsDcskaLmvrfoEKY54xoDrTQJ82oNv4bn3rF6",
  "key8": "P6SBUaJSSsCpk7HcEKVBtLJSeDvNB5TPtBH3gsoyux2zf3aH1u9k6TymQRjupSMHZ6TUiebwyPofNQDdpuf7TuM",
  "key9": "Dz7TFRfd7L6nmSdYUUTMucewQzjpPhDPqhb3J4RQUKM1VZfcxfD7fMBvCzTbzUDXz11xpPfHkF4WRUbxWCkaoLL",
  "key10": "5cVJg1hGeSs8EmsZvEgkSBpfDycumMDYXNtSt8QjexzzCF3VSDiBUuiWo9X4aRXU6KPFCn6J9GVcPPT9Q6AeD6cF",
  "key11": "344drhFXW32m31WVY3X8wwnbv7Qif31Q1SkWrsKLXtm1msREdGQUwp9KRGbDsuwmsjiWVMuhcrZjw1ZB7AdzXaEc",
  "key12": "3LN4RzwqyZ7m1cXRrUKRT3zUbcd33zWPv92Jo1vNFAhqX4AxHTrNL9zBTHmEz1TRBRoWpBeo9c2ckBy8uxomFapb",
  "key13": "5SReZLusvqtZzxB5hR8vBiLpM2Z7KewK6rWYmyecVakJs4tzcJujUbxXyGMT2MxWBSDk119LMPBAZRRp2cMRCmy5",
  "key14": "4xr7FSuS4Q92iBgCC98Ytj3doSgeionGLiZhrjzcQzqfhpBmGnqBjL9FEQyqeYBpJTA6qoT4eMJ1b8SZVUkBup79",
  "key15": "4W672GF9sxF4TWQh9CCq7y1arVn4rTMXFaoAKYT7tycmxyZo3pMYpY43vXCBye51mRud69JzGZPC6KvGdfwTNoj6",
  "key16": "4tdsZwgEA5ZShGPdCp8a6QpfEt82wyeLLqjCy8jNqgEmxNFeMQ8oWbkXNVTwGDBxZ7xpDDt1hFVWM8D1zvvbsABb",
  "key17": "5Ur2DV8iwR5NbXC4tUWYjwURjV73owrd4YVV14HCvfwpnzjE1iuBLmvY3vd23zTGjKv7fDdp5Yk84RkQxi2QizyC",
  "key18": "5MQDD8kjKRpjNo4Kpr2DTLkmV7Yrn2YSv6aNKvNeQmH39UjZLs4vcfeB9K9kV8yCch9o8Xh5wuf6EmMMUuh4crEM",
  "key19": "4ropoQRt8csr716JAU6R4CTFfLQ2PJGNXhc9uEWR6MmdKsPx3XkoYiGUDRdo1FXYTpdueBRNxwxSKZ3xG1QYNbhB",
  "key20": "3CrHi3Cted2ypc7Cmb4oSHswbYXY7MGYx3GS3uQe6riNoV9e8GDup9hTmN71ZcuEFzPwLrWiK2LbeHKGuGKHjuXA",
  "key21": "hyQPwVsEfK8DUkd9KwKsVEpz9DttwFfNzZ4uZHSSV4m13VLogzg9S3oDf3vb1infwhN4VYEi9YqoJUZWYUcscxc",
  "key22": "ZWZFUPZcdwMXyvDscWF13WFk7AVDYGCD2S2MnBXHFYWzKjddUHtvAuYX41LuBTsNsU8ycYNRBZVCd7cbqMeMWgc",
  "key23": "jW5sdjKDjp4xvfyMmqugrFi3cUWsQmuJ9p3o47Kis69zpw6EVYUcWSqr45VGDqiw5AfJDpk4wSXDNAS4pEkX49k",
  "key24": "3Kig47EdiJXQpcP8P86sQ4Mw28WaY5TtcBG7WJXekydB1cM5qwGoZTrc6CCiAQya65tgF7Yiaue3VE8om271naq7",
  "key25": "3QLCbq21gC3bhYZS1vaKnBmAodBwBvXD1A4516GqiLTggYakZbvE6vXxJ86PKHiQ79RgzG7Yv3XVK3uGGuUdgDJo",
  "key26": "2DaWJCdDqmhcPp5hbieCm31vwnicm7cBsmU58BwKFv5hoEAijpD7eWEN212dtafW2uesjK7fTGXFFNsJpWKLhLzZ",
  "key27": "2Sxt3d1RjbV3htGZAs1MyAwoy8aWA7jzohaced579S2kFiwAbyCpoFVN1QoGkZaeUYnmmmRV6FHbjz2zrhSSo3SP",
  "key28": "5ZoZ4mEeBNnVFS95KuUs8M5KvYLv27m57xEhbY3inDqERi8wg5od3vP9JGuwDegKkVs1rmA5jEB4DF72iaJfRFNe",
  "key29": "5SoStR7UpYfno7hHTeoR2oyzFmAvX255SZAycckytkKFyj8yA2FwpCdGbvwu82foMuwE2E3biuSPt4ohJhpp7qne",
  "key30": "4h785wfEE8EbN5jHWChf38W1nUubKkEwHCtWC9yQSMJxzkQZhViccpewmqG6kGUPQdxePJVeUoFNbPZRwN2fNg4A",
  "key31": "3SxhY525sYaKhrypodCEKdf1Xntm2HDgv1iTqMGVPSkLABWEnUJ2DPWs3yoiXkN2kBAw2DbmfJeJPfYN1js1rhmL",
  "key32": "Gdv6ZwHYyDcToRFm6mFmWWaUSN2Rmv5jQ4vwjb85B8uN4n5vSMBkfMxBsw7v8sNisuEJaAT88ySoitDSb6iEm7G",
  "key33": "5yRwHUaNZoEbNVYnhRU2qv7zgc6aXVSSkCn6q2wFLHmM9nE6z5UBuvkgrGxVaCwmb51jH5KY4A5d46Tw4gLq7Jv5",
  "key34": "4yDJDLBPwpU1DncJqwJ8AUUfFPXmKoQBkQbaqmHjas5VVkAXz6sCHYFNWhfnXXo2QCK36GbnTDjCD7JfxHNNfoRQ",
  "key35": "53u18BrDpDN2FFFNLbJrqUNiguuDXZcM943zisK2A2eutnEbf2StQ65whraXLd6Qk6LcAz3MqYbvwiqAsxvnuhDk",
  "key36": "2GhCkVKnDQN6YsYRkjMYjRZYrrzdxny4qrHkhJgi2zxLpWygWPYNF1oxor1SjTwJW9GYrX6ZnqpQ5wyTnzjYGszW",
  "key37": "2LCfovhPGyaGAZ4ACpwtrUwA9NY4KRyGsH1hnQDohrNDsgetjPbvxHsqw5QmBwsPBTG8KnSQxpSfsHvCHS9NRuNf",
  "key38": "aRTazM6RipT3GrJ4Uo3KzmTbqYJzdarVQoywxivnFugbqoMuev89ED6SFkNSBijauJL6cTzk1AtFJ6i41YgaGaq"
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
