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
    "NhPEbvVqEqRs4tXBWLy5Chxkbwzu3ZEdGTPzstY6rWVuMZcmsmjrcpX2Ltc4fLBwLKi8MXrF5Mt3Uw8Sptu35FE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UPopRqpDGgXgmbBayqYcf9K8jkTMKxfkpVQhNnyy9XTssaqZN8DT56wBa1pufDho57s5zrgcrnKVbSyrWyBsbTN",
  "key1": "45yd3nwUJifg8znwdmQ6zh2fmvQoGy8SqybND4rSKkm5z6moxGPPHZvsWaJHc63Dri6XcA5bN59JhvwHnchu8tqK",
  "key2": "tnDAecJbLQjHgRogomcqDAjo9ALPqdvudwBjtWG9Ea76zwMaH5E2zZR8stCByr7utJkDyFnZUWZsNzJqJfWobvg",
  "key3": "cLR18fBK5WerMRfXsJYW7gaQpGHBfRmX4Whu2rN88mh8S8d5xFhxHphL2jjseaMBpVXwUHV6pCHVj3mdQ1jFC2R",
  "key4": "49kYjecYZE5qpnX72t6V255KZSiR8iYuT8riTFEUtitjmhCSGVL4iVptV7PX4vJuPNHMqvcXh8kNDbJVDSEBGqEj",
  "key5": "3Uk67EEEzXhjyaayaT7HSxqghQFeNBBgJUFgz1aBuhEKoyUZHSeuxB1T9WjDFMVa1v6rUvS15tHsp8c5Y9w9EnDx",
  "key6": "4tVURTyyBSaDb1DWhMfzwgxRYVgciKZfSr978Gsf9cNHabyssMekSGZcvnAv9BNvsJeWNf1yVQ9zTDiVYtUTCBKt",
  "key7": "5wn7cTD2NuGY3RmgM66DWm21igkDf5n7EXazBLUg5Zg9wxKL4aq6s14p1yBXjMBgV3yvT1onJ3vDKFL7byhajwp1",
  "key8": "29p1QQmkA49WcC9TAjd78Sz1U8yi3C4sx4sgMnysNpZAYfS5Qoh5zpzn9Q3a7hzcQSe3n4KksPhLzs765fnzKWpz",
  "key9": "BvvDdkgJgMnPxsg4T4C1DkMY9UkzBM98TGkGPXcZyYzJsMvipuQxnArC4YnUybcsooL4y9ebknQ7gvx5ZM318yr",
  "key10": "58J4eToUNTxjA1h8QzrwAe6F6Zqnc2dGA5n2eGkRaCNRMPJifMUzJxpbmHXUZmWKYHot4yT3ys4MWfZtL4rVuDJY",
  "key11": "3T6hWTFsavp3sa1cHa6kU99JNdexDxrBgyXczeGuJgCYGAX5vcFh52VzcQtuChH1vzmL21icgThAZPMmDm6VT8Bh",
  "key12": "4JRKjMX11KkFuJFW1bkE3daihX5BDJbfkZKgcdjL5f84cLgDMArB8KVhQFfpFUzCohpxHU9vcTFYwwsPmBUzHraw",
  "key13": "2GjjDocwcQsKhZCKQSAiwkdxX7wnywJ1pgJ1oy8YBVZ1f49XVdKdarZT6DZqZfmegGCPYmotX1DGEnSEB5rxdtdY",
  "key14": "52eZrpvyQ9gY1gDAsChkPtK7eASbqrJGvcN9emoyEd1WHxWdzECM84Y98gyXaAHkWHhn7gRxwVMbChDSbPzj6HG9",
  "key15": "5iub25h3h1Zp4RXQ3NtwuLEQ7KN2nCBzyK4wrmBYdjkkD6G45n3MxLvuxhERvZzt8boZVLjXPCqQSMntYQcJcsMp",
  "key16": "4jeDhy3rC5awkvxmxWrJjHuLvosMKrSsJGe8QwXco5owEUp5oMLGrpnKRz9WjyKjYoZPZEuyS5svLKFjgRbo1Hxi",
  "key17": "1uMRLxp2ape7iuNMTeHgcn2QPzMuV237HXHTvfkGT7oPJkDfADRSSCmnQTfxeoitSJN5s43o6FeuVubcjHhrcZU",
  "key18": "3jrkwfPyUEb5sVcx7918WCa9b4DXeb3D5Q49KXzDmMNtvYZLi5uY4DsLb8Cgdg6NWgsxf1ZTMr2cLxAdoqGv6T3M",
  "key19": "669DFL9WGySVerAMWchGBX4hobh6QDgJ5hYtCDgTZ7DsHfdp7WDPS99JX3onn29SrxDVVHkbNa3rgWfgfoLC2u5z",
  "key20": "5jp62zi1iAq7HK7SdW8in6hD5mmMSspuN3ZBXNtLCpwAVox7rKFJ6ChEomEQkaaFM9dkrEwN5ghE35dt6Zejru6S",
  "key21": "4KCBb7nAwTCg34sYTv2v3H4ULxX6Uwkdsz3w8roZGwmwpobDt2EXyPPHg4VNvKky9L6HHredf4X2QjfTk88uFADn",
  "key22": "5TV5ThADt28vG9hwaTyrZKfPRmTRAcBXFPJKYN6gkVL2pMrmoPYWJUm2eWR9MCXV1UDVK9qPs5ABqEr74mYEEdcU",
  "key23": "5dSu5thiN83tHvVntnMyX3UkLe6eBywL8NVSnsFEKEamvPEDzW7RhD6DJKcuseLry7MbXEVNnkW9yfJCEP1tM54y",
  "key24": "5Mo4LH2FF9gz2QFUcNNvc2h9WgaWM5dfE1hVdQyLot5ekNQdPMsTXLqjAVR8nj4WwtJ6KNUocue5dmGCvh1C5PZN",
  "key25": "JiRAyBcchzVTvfshuEUuAafmzq292Hbx7xhHUmJy28qG5C6caiSaXAqYSkrdyGACLoQTyUJpuSyjtH8nuRtV4ig",
  "key26": "5CNu5BdxLM8Ep6zz1SPU2MpqsbfmGE4MGpj6W9b99A367wDoNYzPR8SabTQ3PcvKJqspCgFh7q2XJMcVWB11Hvbi",
  "key27": "2Br1nWEfUohXJ7Wydj4jADNzzemnonEFUbwFX736pM1FaLxtRX9DMgXKN8V9wYBNLQxEHFr8CDroTFcBvYyiZNCc",
  "key28": "4KZzoUGvYy8JpJDSzEpS7ihRDAdWzyLqfKH1MwetoS9FudWkJVTCW99sxCSPtR8jjYeZTeQicEChiikf6iPHKKST",
  "key29": "5YmtqiMh43NXVprDsfmdWsL6ofmg3afgmdKnJpxQvh8VNZXTSA5AiWgftYtDd8jUYNb2cNEoShUWQjcHq5M8zmAs",
  "key30": "3MdF9hZg6X94wPKiywpZrsLTtHidwmhq4Pnh8Y7CJMKoE9An7GynH8EMKHLj5YaRUSXm3sXFacdtWQHgU1XVzaXo",
  "key31": "u2ixtePaX82t9hcBPxVvSV1ShE7u7P442pkiQgFCCLAtLVmKD853pFDGktpS3ggCdksfsKcZeJvKzs1YVdX27ks",
  "key32": "4yxjaBJz4pczyBM1YGba9XS8Ps4gEyYS9D3ugZKTjVe9H5JWYBntGpcVsxjBmfYa9r3zvvVARUFZCugLSfZSLxzh",
  "key33": "5b5tnkUcoZgZXEBNAyHu1sgbAdpw7e6frBK14jcCLT8HQhvojTFjT8mFC3ibtCcAzMDNHvJpHabX816wh59sVo8x",
  "key34": "SLPLbJbD1DdFjUsLJmyfPcJeFdFyt1Ck9QwAtQNtwxkoHg2UYz9Y3pZJrkBtakbsApiqf5fRHfNggnNyP3HjDdz",
  "key35": "5QXaCamW2uLSxk2xhVS7maTaurUHWTWK9HSSAx3tSHLYhGrYpkKhCRzxeMffVTumCaEEifTxDGfUSZzysZ6e7EG6",
  "key36": "3FskMTKrVM78AJUC2efNAD1uiTE5oxWuLDfjSjN4aaRMMT83MDLsPn6n66K6pY8AuUwBW6pguP9NPWjmEQVpvABS",
  "key37": "272FQtmo9rk1gANNF1sTfETqq23Ao6gfCvypqEJ7LWRwSpf3MzWZ7Y2HbuMiHAaFVukPh5ebPzEpoXuW5p4DtTvS",
  "key38": "VcYGh1VhgPSyCo3e2gPN4TiA4ZNuAkh6CsKFJ9VpoRMe9PMGhH2Txfjd8nrmFAWt39b3habTQKHoWFCJjCMkSSC",
  "key39": "fDbpoYKRAyigBGDUVq4HV2rhBp7RgpuTvD6NueSfUdPcoa5aC8Apoa9puahPvV7pfsdaLmjqe8bG2n7Nhmbgumx",
  "key40": "5a7ZrDBRKpDyw5muYT4LmFVWtBSQFvq9eigz5f4xpDYmySiHzeBYVKgArXNwyU5N2DYrcXCExbKo6Za1GMeRHU3j"
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
