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
    "4gNet6Xs37WabPFykYq28Z9Nk4d57wrXGL7D8zV3d6oGdCWPr4tsDJyjUbKQAVWSexxLLVZepBn1NwRDHv8QF7FC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a5x19EJK55QmwqPFMaVtJirREMoARCCFiA55RWMivp4jkXJJRLJt2AcLfhYbBzGi1xwYPLxGeVMg9dgUruR9Cnw",
  "key1": "2BjE8zu13KUfgWGjmWFvncSfbXCNeTQCmt4q4ZkKYj3tiYxA6yeiLjNLGuBBHwBpWsVRWYtxPKmmMH5uFS7D1JCS",
  "key2": "5zNgcj5QxfKd9zWyJimfo5wzvBibGuLapi4zWAqSNYwvMyL8KTMgdcqvCeUW3W6Tw45WMbWQB1qUGMwiBEYw9sQG",
  "key3": "2akuo9seHifs8MRtcDgi58xyFURLp4qnK3uCakUymobHDT1VzsCJZWU5jW4kTxeAY4AvPpFqotQhihXtnLdED9G1",
  "key4": "63QzsGPfcdXr9uuEJVNV2B2UyhrZKEDVck3ZqxAfuYTnWxuxACbbVdXQHGpVt4mUy51mTni6hWW8wDPetKWZMvXf",
  "key5": "3iryCYf5hRPHYD55VP11tmW6mLoz42Jbw2BiJan6wdV8EsSVMZD1pgqijHKAwnbnXvooJYACc752o3UqfQc33m63",
  "key6": "3CQZYS4C3mpqYBFSyeZSYNLpB11au8uyztBXqwAsaiyV2dvLA2tvrPJwD9MJG5hexTxtPxkpD7dSn1PYvHU1CdmS",
  "key7": "2NpXZZtnX4HjideF7kN6SS4JegiYY9FGeX6p2KDiz9MxDw4KVw1NcBfWnkvNJgmPW6m3JD3ubFYy3LDNYmGy8uko",
  "key8": "5wfqXvpnzGyHFRWbyx1H5sVnenAUnPWXGF68CJwNha5LECCfx5FtPK6zyZ729VXmQvBbENh7VN9uLbtDohcrGqCP",
  "key9": "67CumAryBMW9HSfUFDpX3ESDXPN1rB73XSKx3em8inaDm5fwabbJmRoxCWbc7RwGz1iuh47iCE1dySQ2jfh9Nv7Y",
  "key10": "3nhamEfSkVitLjh4bg8UgLooSqkWnkDk4KMC5EgmU5GpoB8AasteiSdd6JY9vdghBxtknGAcWL4JMSSM1SEXrj5W",
  "key11": "9jqzkajog6mRMu6yX8a9FsnZUVnTFZJXwo32HkZxonvqzBgyvoMXCPzSHf5T1ArFhyGJV2pAJG8eH8Li6Bw8eX1",
  "key12": "3uc7fCvUXaiwJyPNY2bCCmnywqq1U2JPSAy3tCiPJAPLajRRgz4Q87Xg2snc3i74khnxd4TjTx99gX9VXAQtyiTS",
  "key13": "38RobfxHWUXL6mUppsFW7mMTcmoyEaDmcZooqjVQwjkfiVvF9P1CYBDFtkmkxbTG1LM5Lh4eCxxJuobYNnqEpkUd",
  "key14": "2iy3bZzrijGeUxDsQQ3vrFCch21pDPSX8yCbqWo5jcQeoqwsswgTyJzCSc5FqBZeY2sn1zp2aj9EjGZaM76bNQT6",
  "key15": "2RBGUPHPHDr6prJLbCfs26G7iTLrbcEhPtjPuBgXhSf2P34iiwVNoyDHKoPZTaF1i7hxEuu8uT99NR5se3eqSaSm",
  "key16": "4Np7SipmCSjQDbPqMtZJ5BZyHRhmpB7NF4yZz31QbLpzCqX86Mfkzs4tboChRLf7rRj5ZYfYAkSmNJTci1fhwY3P",
  "key17": "4oNDTZtgE4y7iSoYo7WP4gGioS7nP1bdP8GZ5omg3LiMB9Nnwi1GJeF23Emgp69ja9kD3umECBvHBUdHf8VpR1Jm",
  "key18": "4xGmLByW72K9hUAtE288NkuUQgcEHdNkbDeJoHowjARW9xZvFCbRxxJyRCvLbacWkvUTwxTJqEqfuNZLfTirxTMe",
  "key19": "osErenw4CX2QXCC2H2Cmfqb8chqmeRCuPq5UZLYpq3qY8B8v9qFWt15mpqP5EfeUBiKAZLQT5sx4k5yR3yx48rz",
  "key20": "4mPKZmvPSAf85fuRqenA7xFsHcmH4wfNktTYi4o3TJsixTmdxJfGznEN7cWBzcRLkPYE8zvL2GeiMgM7yw81QL1j",
  "key21": "2E7CqvhTDbWuHzGxFE9Tt5DYC3GvfSjEE7787ijXmBZYmbAMHVQpzjNboiC2y24wYsAh97pFwts36nyjcTiBJLQV",
  "key22": "qEuGUzKNqr9yV371Zc8h4jXYZ7KZpnj3Coi4nkPX3EWpZAMiTYRGpWaMfyqQ9dr1RJwTwAHpjcBznPmQ4ZJRqkb",
  "key23": "3ZXQwpQ7HLpeHd6mEqejnkK2jruhcU1bEgjydKenSJxqz3r4DAu8kuMShbvERtfe1yEhGXaQDkmCLgJHiuhfn3X5",
  "key24": "mkCotaYgZAxE5k8acDvSJvvktEaCpTiEdvSC16ZBBXTBJG5nGvd3tnQT2adYrxJwaPMPSnsZ1YxUQgW2mzApXC7",
  "key25": "4z5EZnWDbZXFtuKPwSUUzaAbv1sfLuV3os9Te8JDxCY8vmrgwmZjB7S9mW3Xtv5QAWkWwh5Ei3YgJt5QSdwJxzaY",
  "key26": "2cGua2FN9CZ2xMxz1h784PDypWFZJVW2CovkN4uwBUzRcdr5oNg1Bti4upvregadHdP7RHvSe3gNqHnULFiBsYWB",
  "key27": "2FLBFddNYpfAyvJpHbaWbcmrsuYDePMGT1m6E2AZyCrv2585kADEcH46ccgFY2KB4ntAsbLUxHjn66fwx2C4bnp8",
  "key28": "5ZDSdpmCon6ZB5uYbsrowAGYmCQS2i6U5gxiuRmD8WcAa1iEZHDpQbWH31s9Q69ox5uxfmU6CF9c1erbg3bKeqW3",
  "key29": "4Yzm5hcVbCuioC5d5ys9PfgHdbJ14Ck1i2d1GEED89d6NBmW2ppvBpdMSSNAmkoaYwhuWR1rcyyYEShUuGPZiCQu",
  "key30": "VdDTaaoyi92o19aP5ZvQCF8cWUSfERX3MxnwE6C8HwR96vyu9Vh1vspPwS5qrGs8itcVGVTgNjJcGcMYi4cQL2o",
  "key31": "4QfmUFQhVnUpTeQcAvm1LEFLjkY4QL8hCRgc6dpeefcrrXrN8FFih9Kfgv2bChtVcffcULKhdcYXgeaty71to4BC",
  "key32": "5eV4UoMxfaSXRGSPwonJaePm2Hud1hE7AzYJidj3SCespTYmuUuBrZvomQv2PMffuNSiDP4NgE2kNgpkQrcRgL6m",
  "key33": "rWEnstvtQEoQPSin2uAvpNBYxKNS6VkXKB6G4cqFGMVbgP1dz5iMiF912jprKMyM74C381Q3vsRZFxXzcS1EUH7",
  "key34": "3Z8EowTB8YXQ4BW5vz1ezqriW5M4QYNnzr2Z3WAf3rkGvXoAHnJ2pNEnspTyxGvaYERe362qixEhQRWj7CqRCBvR",
  "key35": "nC2uVqSq4qwNyMKaSqiBbWGKCwk4F5VN4cXvnkDJvE6Gx23aBwJG6zVaQM8Rt1NeEYPgz5rV86YABE1yKtSB2DX",
  "key36": "2peqw1urmPsdXS5Vdr86GGKVWF9chbLGRZt3Vqbi9HDTNzWAg2Cvw2MCiMc1FUirBSHhwqNXcFHy3DeTrDtHVVqn",
  "key37": "44PSYSy6FPm3w5msQSCLFSgk9KvSyycrfG8EcXwNaUSjmrHMmF63Je95p5YKsN5rkpCjoh9M4n26JA7QgD31LHoZ",
  "key38": "23NsfLJozMQ1murubdiVshd3Pf8unxByV1FYbQ5zSKyBPxuAXCJftkFCwcqTuCRn3v9nSk5gkR65qbxFTrAb6Eto",
  "key39": "2hWfTaXemhBS4xBp9858gWZYF2G9sUZtwCMG875kkELFVsAWJn5U14BkZ3nfz7D7J3nPiAsZKrNCajR3EWHyabDa",
  "key40": "5hFXNAG5gRXhnNJYYXkvneWTD6797w5FqaDLDGaGf82ydKxBDqoKznPXTCreRXc9h7Ar8qhEsYKHCHntFZN4mi3r",
  "key41": "2LS1z7DRJpRoENpCshV2fefWon3eJB5GyUFfTosqpkcrh3ZcjV9YaH7WW56oJGzYVajRTHJhAon8XJRnHkVw2UD3",
  "key42": "4CE479Ds1VVYLzSFvGLt12qgDVKXcsRRc5GTFYozrSMTp68Dqd443KUJQQex862g7HqnFHvv5mwRxFTcJmgfxe4S",
  "key43": "5AMtUG3NnoByRWT7Ck9vZXRrSZSh5mx3T2QZcd4WjJjvfxgL5oYeCjyMarPzrws79WRdKQkZx7veF7rpuRncTq5i",
  "key44": "3kGJLnWaSyXeqGCqXdZ4ViCz6YD2jLTMAxrNZTNpoMg3mKwFexxa9McVaxjY2kHhWUQB8jTnJMW7BQUPzzwecYiY",
  "key45": "mn6C1ncWzmTUR2DazwbV5uQLE88ioNhNr66S66GtTUnnP2Rdq83zUZLZSr6yVs5dGR9MVZp3FC1DEWySDb2osrK",
  "key46": "LoRDtizUXayWetnW7i6isaua9YfRZ9uWhCGMLpT2tkVKwnMLrrCBupb5M2ausjDaJtXir4jAG4dsfCtDHfUqXab",
  "key47": "4ADRdRJgTxCyKcEGKZWR13dcLqKnNbmAV2LPvPdVvmAZF9CLY8VqwoHo7jnMoxc93JBL2GtaXz8uKTCnLVVATeLs"
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
