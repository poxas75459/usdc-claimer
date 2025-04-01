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
    "2ktKEvuLhtVdg7WxFnPkoxD7ZJySwjZePRH7PviTcgRWcMGxdav3h5Q4Nzz8TfNbSkirNqQcFYAKVdwX8D2aUjE9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tXwYUDJN4bz87WpxHqfrNgWu9oYXQL2udjLYzHMJsFoe7D3VqBJoGuwn24JmgCNzSKY7XPunNFZ7ckN1NmAGprR",
  "key1": "5ehqknAfMEHhWEfxYgdWouvSPqBvgbTeQaHhfsiT2Mgwpnky2jv2hvp2yjUjPd3WJiFs1LuEtqY3mPBYjudQcxGU",
  "key2": "67eDYL7paMAmbs3cJZyauwWhEQYpHjFX7A2YGJQG9M4bHo7UuDJneRXERMjwXwnRU37wKmB8epY9dRrcQGrVDeP4",
  "key3": "3qeWvjcfdudfZXfQtWCuipQNQHfGXHa2eBccqvnHqb3RyfLqPhe46d9zTPLaX6M2iUS6f1mAMjntZLRXCzaoJKeL",
  "key4": "5yqbdT4yf3AnS24NE298F7R5Qv49sVQEW5FdFxKEDkSQSQUAphBHX3zrUFKYLscST8LjpNvjQ3U9HDzcvatjfW5B",
  "key5": "JUU46oGCpyo9iCq5iadDY8bTRfLzyFwXpNFbckZLExenPpX1QPDKe35bVEcMzFgBxVuecZ8csBL7aJkdb2UPwNz",
  "key6": "4XrJzK31VkaoYRozmXQG5p8NepUY1aCiMuRDYSMnNyNao4xA5tmEdnrDyzUTVemoaRR6oippvA1tYnbVmTTx4wVE",
  "key7": "3bJo6m2R1wc2FSNeXML3jyggcjfRzENiYffYNTm6hJwa7E4oRrUQoQGgfV8yccLzYdR6xJ1NXKcoMSz1H8DGzHX",
  "key8": "3M1nN3zYqrJaCJDaR5tzLon4PzvRu5EcMTtcAFdkXZfVoCZyDM7E6av7uML8JmFK6rfheEwgxTFJhA9J5iWaDEiS",
  "key9": "3uTpcaUs2vSAXSVSszhMkwGzg56H6dDXc2wRfEQAWCwYX3ZMK2WuqJeR9YHMC9Q13hmtXuLkK4zJge9MXf1Vj91W",
  "key10": "2qS18juzf7s9zn1sBJ6nFyJ9fTmSryz9MsYTzgTpsLJDB9Ni3Ev1ZegVPfYutrEkPnLWUUDUf2Lw9n6eGGoMqm8y",
  "key11": "38TLqDACwccfAy9AATb4vavfiEMFQzmAx3awF55Y4TuFJhdqQLVhRJtuy86eZ3GTYXjzqN65hbjZDhgP7YWBJpDW",
  "key12": "3EiUVtqNggsPrHE4CzkW9M4c6p2Ge4qsyUBsJ8ACHGBWGTYAvnZbo9CLvHtc3hSgao1zzamah9G5iZKmFteh9Can",
  "key13": "3CxQu8TuGV4qnLcH5yJ3Cs6W5m6tEV2WRJLqAKZXL6ucbVkbpt7dSC8voxz25TJpnJwGK3qNpiEXEPedA4gygSW2",
  "key14": "3MzH6SCK6k4andvWPSKo1ZMAbE1pR73MpgvyuX3ipFsXHPJAqzr56GrWyezapoKcUnZKjyae5o4UPc3CEFAUXeua",
  "key15": "4DfC3JPHk4PXRqo5cHcpbcHZXq5eCKfm2UacFMFdxP8UwvbCy4a8za1XW1x5Ed3LkdcujYLzgmMMwefwMGA5zqNg",
  "key16": "3phekqcnRswsR8TJdXdDgqTTizUbgVxmocGrWZFfyMe2cgxt3tNKDx1aqR7YqJ1dWcjyj5zia8ziAW3i9ijDX46H",
  "key17": "2RD4RzkpewfybXg3N4tigg5nUdfpbW3nDF6QGXZEDWHboKxjd45LF3cVfC4hM8rUxgtXqjWxi1UgbNoDRHVrSUof",
  "key18": "5MGhcvPzYo4HUD9kPHGKcYTwVmeppQGUzQwtENT4yiQHeHiNgmHHcz66CqtPD9S35nZVPks7NVPMnJ2d36E8wciy",
  "key19": "28zs8zT4AtMhL4kxN7DK2YMBCkv4VQmxGdZgF5fgffPf4VRAc3tamL1ES8i8h6aBsb3h3QyU4TTjPzaJqAfqmSK3",
  "key20": "3oFNGRUGAf24TLSUXMS1TmDNYg7s17eY287DNjCd8gso1x72tSBT3sumQxUT6JcYU6PrUkYNr9PK6kBNb73geRqj",
  "key21": "2FE2ytowxcpaqNdU9xnDfDhVfDUbHbYcKh2jtN6npnAjfi8xCgx9MLqjifpJPAUg9g4bCbkXaT1L75XTWMmFNW3F",
  "key22": "eG1ScxX7CH7khRLBdc3yC4Z2puhGPTSh3phwCHc8zU9PXPpGv928kxr3rgNvE112HDW6x1XXZS4HNuKihxgWVu7",
  "key23": "5wbxYXTQA8pyGQAa8KrRY9EhiXhVvSsRLnYUqgcxUNvpCcaRa5mXvv6jaa8xrZcP3p9w2LjQx1dLDjFosprKYq7T",
  "key24": "3u4qfiumENvEHJB8wRz4AjziSKYnLbHECZEm1Bbpni9zz74srrvZ1HV5D1viKKmz28ZW9WCBYLPb4MaH4qrcbF1V",
  "key25": "3CkswfScdghQpswWXrT18kKWTZAdQ43ahb6fgF3nPfkdRHdGj4gXHgZHz1irSPyiDFiKLwtLm9Bbdr7B7NNJAgLr",
  "key26": "QhLhKbTruGGw46cwqht5bMZTBpqCXLi9TBThmFjmHMh7jhgT8XwcNKxCn1WXGV4C755GyMiWx3pDa4WYhJmfx3U",
  "key27": "339wdDPQzrQoeVL3xb5ewdSVujaH69TrsPg5y5zaB8UTYgBTuS9BAHqTtjLwJhkQyp7BQcvajJjTXZwy7ucCSmPj",
  "key28": "514C33qw4xb4da2cNVVWmy5jXdDjb5RMotoWkKT9mczmQZyvCJDccuDhdkce3MB6yE2oHp3Npx5PCoUnDkjU8UP8",
  "key29": "XFXF2t717LcQ6kWDsTPt8WjLxpuSGTmcMbCKUfbAscEGGCgF6VC418HMZLrQ59ayk584eKwBCEj3dyaFGrdTJFR",
  "key30": "2hzDHgpauiC9JNz6c96FHEWHtfVakVPP76oup8yVYNsHybDk357Fi1EdyPmt31tWmoLwLQgdHBN9iCFgasoXwewo",
  "key31": "wNcuUGyDEMNErbxw1HZwVU4otAaESX8tg2AZJxFBYntAxkzFwBTcZgT2dDKmYsMEa8XLVSTMKMdky33FLgF4D59",
  "key32": "5hS9dMmd4gWBTv1qd48GtqhHZ2JERMh6fRfQXPSYjMbg23d7NLdMVQyWQypVCr3pircUnHyyCGzLQu45ymwq9mUz",
  "key33": "2bNr4fF3QnpgV2ifFjUQXW1EYscZjuDjmvER6BnuuLqkFkq27iggu8QRtSaRfD86k7KGmFp6cG5qyBC4bTDVA4es",
  "key34": "4jbahti2ASENL1tM2Cm8KxUizY37fPvg8NphY1dhTLHoq2e26qXRNk6D2i3TaG1PAHJKNmF9SwURhhaKXLCM3zpV",
  "key35": "3buBS91pB4Ao7qhDjHrTtq9mFj9g46ESwnAq46qW99hviadmH7eh3bDAnFHoV6HVc9xveSFs5tSahtYDdYPL8YsS",
  "key36": "2kd29dfMSjMwd5bjQ9pTVeNQ9JuUnemmaKPAumDMWyG2QaqZcvDdfjZdJU6Z4htCmb2K3dAEqPm4Cok7P5AoaLgG",
  "key37": "2erGiNGNuK6boxo4U5yfr9VVsGGWb6PpBPsxutRfJY8z4bnpb8b9kDiSqCfTsYB8L9zfWK2mdkpPxRfVTmdsNUXE",
  "key38": "2N1ub5cnLjuYsGvAe5XBhtt3byb6t6qSnW7egeKddsTuYbDLaSKLAiKGRNLDLPWEQFtTdaZ7HZnM4ipnk2yP3Lto",
  "key39": "rhjJzS7oTE3HJApA43DSrGtJm7Rof7u2WYK6uC3S9CGhKXYuDVPHVckMYmoNsKkaKEvjy9mnmLGCAaXwtRzgQbW",
  "key40": "3VWYtahJEX3AUiiegFzCK68oF9gYz34SnPP4hxaGeddPgzGBPosnSYLCPKvHxynhZLbJ9hytXEqE9iMQkysirQWg",
  "key41": "4YA5q8j8Qti3vwgAbkVBLhyKiCAeCUfRdKzAPiEU2cXSdJtkZWnFVaepJUqBjdVD93nqvaKGZeDz31tz62t3AP4L",
  "key42": "67FNiMHEs57grWzPmFMqY95rNx7wSKvioPTecQ42vYy8NQqb81MVkuZuHCKSQ7mfyJ4vAA1dccWpuNAVjcdBKYwS",
  "key43": "4kxahjXWSwCSnkmDsfJY3MgpyopVsDirBq44tq3QyJE9n3CqwaPexUeyBKbot3s2CVVrAJpFsne33pTaAJRkZqKh",
  "key44": "2id6H7wzSLdpTY2bey66rY5SVeHqYNGoAYeieChZgy88J66zHBvEPGCTdGCV2QjiiJseJveswAifWfxCrUcqwio2",
  "key45": "3MEBJ7xxG9N4DWSd2UH9uYcE8f4NvmQBFHdGn5xN6NSPik1SK6SosPTaE91oCp1VKA7ckugr6XJduKCr7NLHt6jz",
  "key46": "2R2ffqup8Uo2zFJiVHiQENERxUpYD4Lqwwd8AJRwKLux4Yps3RK12yhd88iMs8sBduATn5DgpLqS6fqTaoPTGmL2",
  "key47": "65uMShLBfuLiFeBHcZ7dX49SPSM2g2Yr8ERfbGLhhz1jH42uHVsQYVdtm9F2JfaHeE4gtf8WKR7rsAAEa9fmuoTv",
  "key48": "65G5G5CC67U8QfYjppRP5SAwotiSiAps9m27nWSVBUDpCgnmQq1MPNzoAPdchg4Ff96CcReiBxEPSu7NwHD2QyJB"
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
