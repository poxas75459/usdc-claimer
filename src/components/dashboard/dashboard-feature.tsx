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
    "5x3kPU3WZsVQYqvsZAP7jcHJjTnK69D2MGcNYhoaeVX2cUYDduGEvMz1UX5Lufspnie2YVigSv82bMCavLSmdby8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5emNM9txJKgf6Y4L5NqzWevtvjocyP8wfNTFgAp5HdM39oFhXityk9eaXhG5FhpM1SVaueQTcuE1fGrcLS2jEF7n",
  "key1": "48kbcLQjU6jgxXfTidSE2RtGq7v8qiFj6hCCga5HmXkdJhPbm28VLBwDdWmWmSjG5iBXwV2DQKoaCJBmjnitHBwT",
  "key2": "3fRGHRdKMBoXeoACzytTFuBq6BWGE5VoTPQCJRymiiww1ZyHBLq6k4FukMcDmxWQ7LB2XiKpHD8uUknLwVTB3G5k",
  "key3": "vAppHnBuAG3vw7EqTEWceKv5gU9wDSTphajyo3s9cZQRiEahPM469FbANKL3xQbGFkihNEe1Mz7RXPJKStmg4iD",
  "key4": "3oGd4xF6RBV6o4iQAq8rn1A67XdMF3YRhLuJsRHfk4f8j8Jv3jmm6FNB7esWCBL3Ubfbj1kw5wT4PivxGWdutNoR",
  "key5": "3CFG3Mf1Vyht2uY3i7GQUNBjmVfDQmqdX7jHdxj8n1v6xEP7bq4Cdc1cXu6sBqaF3kdfVGfLKX5gvSNgptYT7kQ1",
  "key6": "iNz8VoHNjCKwASMx8d6LfjxV4dNFkMUPXudz3iVpyCC7jkFtX27zXXRFF45bprUiiC8vgSfGnFjrzptSnVbykJP",
  "key7": "2DyCEmDJgigGhYRcBtpfgVgdRt9zQfu8uRU2YNWrj2utUZgCihU7oN9HonJhgkGpkug4j9V1qKiZQLmWuCxmVQNy",
  "key8": "2rmoxfc8SdULTwe3hjZGwcbMsJ2Dnk878YC9cd8db2Dny2QFejkzzNbtT3PZvz7wMFHAN6sdFBXHd13mYApbCvpf",
  "key9": "o2wRrEL6SQehEC1BooTHN3eZqgoj2aucQ94JGgedu9M3C3AZzWpRDAe6Xz9ZCCZduERDiHqCo5z6K3cAnapdNT6",
  "key10": "5EYhqJtVvrT3egyZAYqxPpzzwfFKBB7sXYAacbYCRyLyoP1qi7x43Nked7wU7QXGJ2wWMfWnkmEnBvmQLPh5Z3JA",
  "key11": "45Bnf84bLmMMkENRa6xFi8xddom6Yvjtm81novf6o18o5QCmupQx2ZN5cUsSNz2YVFSro7TashFXU6wYzHTtivTQ",
  "key12": "kiwXWSgbKBSR34YPUJSkQMXwiNmRFGpGktERZbKhtU5UDaok1pbdHrcHqQutPbFLupHmGGPEra9g7bi47NAq4mp",
  "key13": "KTRHrXBESvBJctNvgGgsnhdzo88Smw6ZhjmXQyTVDxPWa31Krz7TnPeSdcDCfmM79YRPyxkd6FRnDkQs1c3cZCu",
  "key14": "3VEpZajADiexsWZrvMQN5eHWibzsR7cPK9NBCQ6mawtX5Ab4hm8mhkZnL7QJgeU8z5zXMxdsxSsi6TeZtWYwUK9e",
  "key15": "62ZYnifebPzD9FA3GogiCuM7kdfKyyVN9VN141Jg8YhzY8qZExGmpA3EhwwcjUAxS8XzytYiQLTs9jLwPwjZodJ3",
  "key16": "2fU8xKFW17mm2Mpy4YNPotXVmJAxDWqk2mrQtxeViadDdHe2g6ecsuVgBmeubY3b5HVELgy2JiB55VKHmgAHnEps",
  "key17": "5ujmZ4Dc1gwRpk4oa6832Z64rjXRhXjycWVNyxJGuUA9ejfMa5KQEJ445cJZ41rcuZMoa9z1SCTVQcLxMuN1X81g",
  "key18": "VTDA2eyc8vtF4Dc8SNfoomsgYKwJTmqjJDQUv1fHWvbtRu34ViVLiLZxeoNKCuDWSpvC5KfJhjm9t1i1sGPx1ha",
  "key19": "4ctVUFfRLhYvqnsQmYwDdbeRardN8JwuotZAdYa6DQmNRyeDmMJtxEZs1QYAnv6TurWXSxd3d5fqitbRGbJBrrio",
  "key20": "58Fj2QNRuHqboJEsFgDWnJw7LYtnzUqkpDxqnyQkuwQAcfkJVF84PAwH4oPh4SnUbxRiSXZ9yiJwNTE4bUi3ESQD",
  "key21": "4SfkrTU9ryquZmyYJk6MK4FxtWwh6uJn4ruoFYChFce9S1zpcCwnyz67pKFLfQJLa9LMUaUmjxLQeJXruedFjgHX",
  "key22": "3VDQoeTAME84NHRLDPAoJAZGMJ979k6Du4LTSpH4VsWV5nraaRxRyfo7TatMwJbRKiEXNJ8yb1gRRjBsNdiakS4E",
  "key23": "5wdyDrA4v78i29fqRcpT3JMeFj9R8VozxMeUb1FbAzeHMuaXrDr8hRdCSkqG9BZZMPN31CkvVnsqeYaK5eNbRaG5",
  "key24": "46y8mzUzbnBp1uswhPtfrfx5PLhuHADCKNRufd6U92UazS2nvf6CYphbk8cEbiRpstxg6inDRnaPYR1Tdsdi9cmq",
  "key25": "4G9iW83ofj3rbfZG8iUEwn5WNxqxatudibkfyJ9SJm6qQGvh7UPgJjUjL2zf8Jz9pwauHpQUrsVs5sF9dggrfcrj",
  "key26": "5bq1QxWTDVawbZAskrfp4LyuZgBgQhNNDpbgPqNf5fD7m93c1jThJzJCqaMWHjemTwYN2GEcdCR9fk9iv77VGx91",
  "key27": "BXdYXmvC4Ez65fQxGpSAFy8UzgGskBvXMhqg5SVnaZLyhf8ebZiRHQYYJyYP62fPrHQbkmE1pmBUKhw6jURyMof",
  "key28": "4s94FJAKmxkPWpZFtsaZcxFvFj4ywuJb8Th3SxksqfQEshV5Jq9kf5YC7fRcE2ruYAgFqUPLAbGCXtDhyCohXsub",
  "key29": "2BwojND6BD5v62yWMXJZ2sY3iw4DixyLU3PzP4G1bw7G4p6WVZUoyAzNbfd85ysyKBK3dgsP8yGYSLYt7TnRV8q8",
  "key30": "3wFCGfnS4nptDzcDnCdhSsssxcfVBhuGXo5rqVsbdHFPj5dkjAFjdMgTXxx7H4XK297235buCnp9qijnfx3ThK8g",
  "key31": "29nKsQf8Lxg8m9AUEp5CifYPDVC1tCmmWsgiSnoSx25ToWmavhYhNtBZJ49u6suN245726PP9qGhzb9cJ1hJkGSf",
  "key32": "2gAMbPzo2CXXMpeDXZL9dDi7xC7M2G4ouFgA6HiCK9u2iQU7p1SuR2TzNQzeLGgths5Sh7k4WuQzTbZ8tukqwMLT",
  "key33": "4mQJBwBMcoSi82nytuFUWz27YejJmh41YZHHuKHVVH3AgFPHKKp2FochKZ4J1cjsf1THqxhHmSUUTnNzEJyB4PeY",
  "key34": "4GLdwNktVa7SSWxTLDwLcyRCuPZbBjciLQrtBDCPTPrN5kdY9vUE935XxojffVNcVivKSKXXDtveXysndwDFA9FL",
  "key35": "2jJE1W8ZwaRPVLzjNe6fE3KyWhswQ5iTjpwPhMbbDyhpMEU6YCEdVeDFm36oHw3WQRPXyTq3nW5j4RzAHwdPZm7L",
  "key36": "FqwhiEXqzxYPuzuzvjdwLzLptVgpVHV4ZcmWFXhkGc2UCoZRv2SXsQ457GrFEhNfaPcFEAxc7fyRV4tpFKM6yns",
  "key37": "5Qv1d7F9mYHGBfWSA3ABL839P1gPtvAUwbuA2GzwAqWa5iocjrigLGMfMqPtHqGaL85PtonjNAbQPBsQBEEu1dtA",
  "key38": "472gtdEWZN3wYQ8uiogLUaZiDhnwHt6Qd4UZm1ShY8GnSijn8ZnAFGqRYYm1H49CfgL396viYGToy5QyDphVc1rm",
  "key39": "45pXWSZ6vchAEW2W5KVKG1ToE9ebNS68Jd4aDRXyFRUqR89RmTdr56bRCCxHu9uoQH7NZE4TiRw4PkkJpYEobJaQ",
  "key40": "2ZskX22FEUDXortEUYuvrfhFse2VdvB2GWhKtR8ZCRKs31FNZTJuf9CyEFVv2hK7SJntyXFbRG9DjLUzhtb5Uyg6"
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
