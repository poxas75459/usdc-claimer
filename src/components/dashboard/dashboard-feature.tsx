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
    "36ssqbTHS8xQDhyXDut2RazymF8uBxTyx6KiYQqfhRsSrkXNVT4z8YgRHZELA2RoWLM64CYeHy5xGNLehL2pdD51"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aHxzkvkhq2jWENuBqkQhz5p8kwpatqmEdiCQgsjfjYKzJk4zketU3xYpoKyw4kivKx19z3Rjj3hbnqH5r7YM9z8",
  "key1": "2qPHqnGwkkiMoxZ2ewGL9r5ZcoaNMpABU9ZJdYpQ9rj2jRvQbn3dEKYHVNJEFX4iTsmBREnE5pxFb4ugV7Ge5dcs",
  "key2": "3mcwowAjdAKrGLR5TQvMnVPv9pUYJvodv5C2yfGJ3vWB6ERBBUK3aVK6Dj4H3E6XJptVMC17Va1vbduegVx9Xhte",
  "key3": "5zQ5dZQKQLhpAU24gehGebr8nusmP9fs2REPArtpiF51GHUJCKoBqqjHpof1yggBuhMPXhSBPejy6KUJJP6sS6Pv",
  "key4": "3aTVVkjk5JsBhwsQ4jVCgQz9d1FBsAHb2xfVbqEZNkKdaMek2ixfSAHT4rDPHXbLGHJdVx1AizkKQDVASxJ1aAX6",
  "key5": "3oRP1TQGysaqGVq2ME8fX9BT1BLCnz1DrNXMZGYhT7KC587PiX23148CTo7qCfvxx9QnVSqY688uwRmUg7ECcf4n",
  "key6": "26zYH8oc1Nyzyy13rcizSBXc48qFUketWfDgpzFbFepDkdiH9usyFnhnGMBNHSZSutv1xcfnhKqpGmtm6YMszDwM",
  "key7": "31xvWszxf9nNCKy6yJEvgLqhvkDvpPcwKRfX6Xmhd2eV1Hnfe7hMYRbH93dT8b2rYKV2hoCpg3sjzWZiTa5kwcZj",
  "key8": "5VWkLajaMJjjXKrQyRoF69nntDR3f4RTTdLnXXZWnnV1fEQB1pCE6HRigFzqZ3EnCGgYc19MSZnKrjj4wPBhirV5",
  "key9": "52A2rYGxPo2nughoYkXgFwycDjM9A4jT94jqZPffBCXcjxTEqkiKDJ11EPiR8XLFexgzJEZa8MLKWNDghXkoA6nN",
  "key10": "5RLpDxizAHUezS1jspaWiiKQFfgMxrBjQNQBevVPdCgZqnVc2CYFdwBffyG6AaK5b2XvbuZL18fGzK2CLaCbW7iV",
  "key11": "4vz8jLHrBt7mN1pcWwNv4GmzX2LQMTKvbPgND98NhWmVXLYbHVs8Fm8NFdpcDb6QPyDWrN994Tdf5LZDbPiPjgAQ",
  "key12": "4WNn4jfAfZmcoGUdVY2JLyikX5dZZCuAPYPvmawezT4jrZbxq9KkmGrUbYBptG47c3UFcFHz4Ug8H9JZA5HqZjbT",
  "key13": "2rc1E3JkAJamVRtWQXzm2HJHtpFGaasWB7Sd3HyiKst8cgrYv9EDWKLFxRKJi9BNzbLySriDCBXjnpMuCWKDyy2Y",
  "key14": "5uGnuDuQjtSYGAoWtJhLAaaAyHuNz288QoVZLEbcu2WALYL3922b13bTemyPYiJrzamtK3KgMyybWHBU6McBt6ms",
  "key15": "4EZMvdWje2zEHsvFeo8wq7h62syRNJwNxq2NctZU5sT2S9d4XyK95EWrFNpLXa6p7YBw38HcibX2CeVewmBv4npb",
  "key16": "4aAj25V68FNVkywhSAiiKc6a38b6m5hRkVtHLJF3TKAd7DNQ2YebCMq223NgJjQCwtjW59w7qUyWdh3cdsF7dVRg",
  "key17": "23qdHVqJLUojghcAXch8nWP9kM12PTCWDHXwRhPdEF1CkiU913Tnudird5A1MzFQwNvu5vXLoNpkxpqF3Qy2F9Xo",
  "key18": "2DYKLMRgamdzSy3HsF3D5Ya2qkeDiam1H5CQKw3czDwQ9m1n3G1whrpfzT8Z8cBRvvipidkvzb9xtMGwifvJXBTZ",
  "key19": "7sM64c79JcJtGWm8AqAo8SsuyVDJzSdjkjpVBUHFUSC9uvLdZ11qUktqSX7b4VEagmxcEFdE918ahmSYvSRMZsD",
  "key20": "49ZktvhRgUrhQCnc4vRQC8oaiTc5w1b2gkJzkWy1JK4BBBuYAUTZyiKkpxkRDSFM5sYkVmR5PsVwNPenEg1BeUfu",
  "key21": "MTv2GdiC6ggByeS7aEVSKEkxd7AKP5XtvMhmvkCvsb31KM4tmbfgdPfRUTgaJ8CY7wfxq1k5diJtmrWvcBqeNQo",
  "key22": "41ezCALDeseCjvF5XWJM8FcDY9xEVWTibks327vEjXNwmzYUsuUedTYXsakmeHfpsE1f5Z1tXUHMcdpTkFefTT2K",
  "key23": "izjZe7UMXNiLw1nMzGhUn6BE6JBZsJUHvfUADcFeXSQnvWmoSmkRUyAWt453X6CKoJxt857JbAFuBnML6H3Vckp",
  "key24": "5G54A7UbJBVUBZdMCZqJ9AdKqbETyhAbH15Qi7faJjbftyyJbMDbXC2gKx5TDhKhfkEqdRrQK8VzLStNpArBRM9F",
  "key25": "3H9Nv6BbsMZ2GSUpWmfYypjDbp5MBReniqpPzY1dMXNgWxVR7DNm4q2bERqK6bTKokpUgTRa5n4zSsRDwjEaqhn7",
  "key26": "5Qk8YLcJrRJUW1sMvtDqKk9Ec8JHoPeZ3ZofiZmsmgGTmHk5u83MBpkVE1tp1Z913jLxwjnBwWKSaiJWmupgtosY",
  "key27": "3pTBuxVAsDMZSDnjaTopMDruWFcrsNu9V8FALv235P3ESHRhM8RVtou52CPc65HnhjtCQi7yMWXFferMXtxppVzh",
  "key28": "4mSNc5YKpNPppKVSS7QAetbAaWUDwRnvP7pUEpPaDhNaA6MFVNZgLp3DzR25eszLb4rfE3r7LrFuAaCo2q3H1twb",
  "key29": "3rdm7Vzquogkm1A8TmkmfwZxBDtvezb48aKHi1D1M5oYYtAdDFjkbz5AxTWNLLMaXhyaFtb1dq3GXUTuq1ibnged",
  "key30": "4uVrqaqkWcdKEdQdX2hkazNFctjWqW2uqX32HWB9fEoJHZZJ8qt7DV9Z3dsqat7xDRxVGuapw5MYEEkk6tqhMhup",
  "key31": "2DEqTUw4QwDGFo2joa556GUsDiDbtd1RgG4khnL2yAFY6wybX7N2e11bQKpsvH8ypcmJoiyxKHMdSewdPy3VffLn",
  "key32": "31puPNmT4mTbaXf5GjLuNQMpk1wpg9nxPoXDoPVZsFnacVexN3uA6EVaDf77PhWQdTxhUhE6XJD3nFe9eD6YmLfi",
  "key33": "5hSiBa7zJFuYzJhBKLwBhhg6Xs71mQfkVqSsiDXikbwN2JhErZxsAZrcfdx6M5WLJFHtcWqrvTiGRsuBAufGE11T",
  "key34": "pUxRnhe9dkSLuA3q6r3nFJZJkRgxZF8mFggnUgMN6h54TKKt3S4JtGjmHRviNoADvKNWMkseDmcQs1jtzTCb4oW",
  "key35": "4a6649bmQZFnL1jJNbbgfQLQVzUkrwA14epMeQUe5XxL4w3toV6pgC5nYQPa7UnNFZcFjEPABogBfeiToSooD76k",
  "key36": "3FokSMZ42jhEtu4AnX7LChnG7eLRcU9CLLwtmTzUEa2CXRGyXRhy9mzkKKuQnr8awxAfX5pbvrRqZr8U5raYHxxc",
  "key37": "2zZkQvZD7DUiGKFboevn3mtZBtApkfmiavWnyKvZ2iEbHjP6kHiPJ1AiHzn8vEhrgv5XQRMKsZAJRykfbe1yVzB9",
  "key38": "34vJPSPjyDGSctajX1opgpDLJYtto6xkaKpr4Fk9iAxyMj4RJzyccUtu8HzVDUbWixagmUGfQAy2zGjJXkcQM1uJ",
  "key39": "5eHA2iyzhQ2gCSPQM46639wTHjPvWHjj1v34bNTRoUrek7JjLZVvFJeVMetRagGpjawWu47qVbXx7HBwttkf4c5Q",
  "key40": "3gFUkdwN2hjqS7vzxjDEHAYc69yPZ4ZVZ2svfGzCsmikxL6LPuGr83BDfdFdrFsFtHzJPsMqD7mJVvo1JJhtJvDM",
  "key41": "5Wcqk53uw9mmWEpXaZfYeDAY69YnpoXUhe3CzjaESuMzMUq7FAxG3eWBrtec4WSu1dfMsS7WvSgweDVTLkopmv2R",
  "key42": "26N5nLLcQceSYPbqDkhL34WXgZSwvSvCR5CqQ2i1GLr39kDnu6opLDKmpCk8cSTrjom433nx8ZPiZDNoSxzqPWC1"
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
