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
    "55wRaLn1qxXkpJY2GgKo9YYd6g5Mw4wnmnnDj15EBzgDKmXnUEQzqVXQDXmjS3hkuE4XgQJFbaJUmvZQB55pdF3m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NLQZPfDvdB937szxwVZW1fqHdVQoghPUnpRoQqJLRzMehLYiYRjBRvuktCherC4Mj8N5fMYyeg5CfgydM9QjX5p",
  "key1": "2gFpANpzpPrUskdFPyKmQ8CGpae5DEju3vcf8ia5MRdQMSAZdWNLShCPytiDcqicmeVL4PtnxzhYGFQ9hPy5MXGe",
  "key2": "7bqNk3LmShh4UUr6sm6aBXQDS4VCJfD8c1jo7HEzqNHA9jyTggpX2t9u4CQqfuCEMyzT4vLs4NDNQk4hirBvC5e",
  "key3": "3MzgfufduGaBkpDp95Ex2SLpTXXUV1cxv46fCyGhazDnWUs4p9Hp3XabSt513PefBDQYdNHDEzbPqDynXw3PgkZv",
  "key4": "kPnXi2nmD8FJ5CppTxYkGLZwyMgVXUVoy6ppJYzusyKJ7hAuBeu9Uh5u1V1eWqr7H1fgZvrLGVNsFSpCnyUGwa7",
  "key5": "47MYRjNK8AqXiv1UcmRZkAn9TLHyRLu6u92GF8UEcZUNA1zGJj6RBodHsiDoFntbJugsWY82jkk2WMRFHV1RAdCm",
  "key6": "kuVVtXCHXapRy1SvUdd16A6DCpFZ37tv83LzxrTtZXdgS3ZUsXTQXb6ybpbVfeUPbnaLJN8gxKdZnbxw2XVUAZm",
  "key7": "6vPyNgF2dAjHu1s9vuUgmPQU53nDCvT65FjfCtZa93nFneXutw8SPXsWvevXmgzhqRX4UBSKPdg7zx1BB1NJWuc",
  "key8": "GitfevSQ4QAgMcyHTqr97mAtEbqWkWAktfUT2rELqKYbBmz5fEdJoPERHg9Ln6jAnwjxG1CNScKSmqjbAts1HUC",
  "key9": "4U7gFgGWVvJtXGbj7pafKCazVMpbbmnYy688if7FFjDNBhpVt6vghhQ9DFGsKELdSnpnq9238cVR2ywxPDaGzsvW",
  "key10": "4a6LoR51GfWrR94z5dXHSRd1a1cLJt7jBwKRaoFCxTt1CUFwuzVLqedbkn5JnhooneVC6PW9TUSyt3pjNixeUwt2",
  "key11": "7SZVVTUHHSFE6GuRPhi9AdcSESfcQUZDnMaBX7Kn4QUYemAVGQ6Spp5xmAbWpz7GKNnQrhB5bvSRcaNJVJyndZu",
  "key12": "bRiQySxkmZzPbjVmEDQJFbUnNGAA5z25rVn49rYKzUBCgNHdsHE1dfdsp8Yp79MEzaSgpujNqeUuAmeXooFy1xf",
  "key13": "4gGush4tPJrgfjaxMZ81DbtdiTCGctA3FHr2n2qy7tqUS6xoKjwKggA721SN1BzabghYr66iHqVRS9EQ31MVCyWN",
  "key14": "2Gt7eMyUt2t7SCue9mKUNBhYqZ4s7pbDoVBP1NW6p9gK5TTLdw2L1n2xrmk4RQ3KRZyqKoa6YDeWASQvRXeAW4S9",
  "key15": "2qN4VwXimfcnCT7bgxB3oCiakowX4w9A4SNZ8HgnLpGW9Pr18Rqj6G3GfarVBv6noWmmoEKcjBLqTQ9p1enHmCDm",
  "key16": "4Yxb1DdUZHRtML1BE7bnJrykeUa1msECQLQxcezAmRSNLr5gJezXpMSzcvffar4y3fUowoRJC7BtvYxtp7Xb8znk",
  "key17": "TCS6F9mjabyUJA8tF82yTMcdpU4SkfVanP4CpFJpW5gjve9sUeqeabrGiJYPXttssBUbWDU2QKkWUtpUnPqaUur",
  "key18": "FEkBickXfN9PcX2GE8AGqNhHqLuGG6XCwPiDoy6bd7jhAWx7UFv3emm5mq8jXNNts26M3Xn7FpiseXdjBNHcTwG",
  "key19": "3D76CfCAW8XwcVowT31882usR7gQzEA16SfQHwZbikBckyMm9jMYK7BwtDrxemTAscXLBbA71gGWzcyCYFDM3eWu",
  "key20": "5kAykDfcrqMMtGTDyzQTs8epvHn1AWEwt6GeaTio3dzS4LiV1b3Bzh5ueNJ8c9fi8eQ5X2F5H1onpxN69rFWKUTP",
  "key21": "63Sx9xLwkDKyHVqFX1VWdAYd9Je8QAyRePGty5p7FE1aPmRYgBUqgTAoKG28X51yCxNBCckqBJJaZH8GkDjPH6r2",
  "key22": "44xgj6FdHxDRmjRyAT927xgCzaCcMVB6Luenn4pdUz7eaXew1kUCBmMm252JgaQSWpjpBCAbDPKnxG5VRFAfv5GT",
  "key23": "1B8APL46btjMgDDqbTjiJxUNKNcLPJYsB3gCwDcJ2LAwDYjFzAzWEMwhcuju8TBnbvmxaNL28bZF9XQZsc7ASn5",
  "key24": "DKM5jkXSSWcZEjhCpnEkbTu4BLFe4cgo6Y7LXYRZkbcVVkURKbXXdiE71EcMiu6wkVSKXvhfCNieDMZ2rbPJ5g6",
  "key25": "4bsgXP33aq4QggGBjfwBr4VRzw2uJdsEJkkZ25dyEcvsGv5dJ1q8aDHkUz8mGVN8zXtYVNJvYrKD4Vo43fvCMo6v",
  "key26": "3d1EyjSuwSaBXhpNCP6ynE629tootBkdjHQ19xyiMHFwgXwCE59AZcJjqz5yQFG8ivF4Ezhu7wGrG2ieuL9cYhYZ",
  "key27": "2EMcqx2EKhr5q7FNvozYh3v8MaGC1o5B6dgdWoPTJP42VoJvwnEvTYhgp1UXzyPabfL8ARKU7KWnPPAS4nNgA5ew",
  "key28": "2fdbMY7X3AL4XkuVtCYtREvAXFJP4TnpbbYeT1xmcPh3qq3iSuz56pcFtMG1FbXek17beqVdA5GFGEzpAYHvZE8e",
  "key29": "2dME6czepAiVi9e1Ej1a3Kit5Nwb2aMmJoQt7uoKxvxv78XLuzqUD6kw8nRsJmt5KGj6V6yqcD7a7S337WX9phN6",
  "key30": "FrGreewjVkHY2UMiepY4hMV6r26erXg8W3RbUkSzRxeCGbJCVQEKSEqyyXPG4XM5pafTaYEACj2ZuUsodYdSVQK",
  "key31": "ZjEaqR7ccvmkMSUPkNgm16jtnbJBPnZtG7g5bkLCssT4XZbCqCsPs7FVy8XCrNto5sHG77r2t9uNHrUcZs8A5Qu",
  "key32": "5vVrzTFrKHgXNPucdhpTbfKjfuknkXdvTFZeap99GJpDdumyaJSnyEqAdiT3Bi5vcUHbLKdC7YPKHBPbCu3svRb2",
  "key33": "56YSbidzf3bAR1m2Xd9Jkxd798x2Q1u87rTPnbN6Bp7V7V7UfbNwLHtkRKZGNJBSuoxEsCVhpvc49FAFVz2ha62Q",
  "key34": "kjjk7wUTF5jCFJ3zFFbz2HWkoQvoLJoqbrWzQGmFqu5kz7cJ5mGuwyNvbpYJNvgpKmdawDgjwRbRsGbjLxjSD1J",
  "key35": "3Cuh4BrawysBdkhUfv8RkZf5nTf1MAC7CseKGzHgPRjV8ALo9WN9WDh74NtwbJv1SUCbTYPfgowkeBWr2irzA91E",
  "key36": "5puHzRsdgH71ani5AVgqF3ddWeAhjJBrVxGnmiKF4QzJia3hMEkAypBgcVrPXkPJXy8FP5xPzipjVoMgMkgqPhup",
  "key37": "32QPRHPUGJSfCPNDqPQkTBMjjSQTiiGFAH64WypfcCu7zHsxzdvaDopTQhdGx2Tiwy3mwb98smTPhubUgmvwemtW",
  "key38": "5ymkKLcr7RGhoQ4RbbaysWJ2pnKeGHNobh9AQdHDv1jqGa8PZ5DzYxJ8g5u4hy4wopW8ThPCKACPQJsJVgJF8qbA",
  "key39": "2MNLeJJGDgD26VTAc73mm7U5B4ajARc3cWKXptPrTm9T59MspGUP7VPg2YU5Eye5m7YXZ1KdXzeJ7brBqciBK3m9",
  "key40": "44BLsd62fKBeqFLyjPrRwxih5612j5hmrFEW7vfm9piBFccJXDxMMGto1whYsiv7NtjoH7vxcSsFJq3eu11DNsMT",
  "key41": "313Ve4RXwzQfXUkBqFJrV2V1VY5q7ZEmAeafUgqScm1RYa8hWHemeutYFsbw57JcQeeajvWD4tDeHVB6yWMMjZNi",
  "key42": "k3XYCNC7HPxyapVSZqojHucyS9r2sp6KGgpb5EM76jx3uzPBnsmQB1JmmdViYeGhHyEUjrFo9rkAj9ii7smyQJx",
  "key43": "3gPXhwwpb3SPWsMfh7RXJCCLgag3DikTaBYsoJhQ2BZ3HdKj3eWLbswbza8uMW3NvwsfjmvxJpGkxr191U3R9USn",
  "key44": "4CVYAMNEZxdb8d2pP8LpKENyzaWaq4DpeXdrNqekTj82qM5EU5gtFYP7Kg61x4Ufup85cye9UwGe1fBzaKrbcmmR",
  "key45": "3bQmmURjvY58cpRZoGZm6vrfi5rzDtvKAKbuqBSvXKkcjnSXJR9N9BGGNMDUTACgi3xoEcBxJKv8czsU8bU6zxbL"
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
