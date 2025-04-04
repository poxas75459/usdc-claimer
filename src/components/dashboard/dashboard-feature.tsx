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
    "2dwRVeME66tLKN5B1Tg1vJ1aSffVVJZW5jefFCFEf4FGKovuGSUQksQyngexvmeSKKD8r8pFWuER6fLP8eThGhLD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hESNff7eLaffbqSCfdFKYig1SCEoVeqXwdgJh6SHMMmw8ekf8VRrhH8chQ2GYjjPtZ2mRLg3zsKqj8L5WBe8XS9",
  "key1": "5zYTJjhN52mmKd7feLW8S54h7bLSDW683DhNR8RU3LS6NcNm2YjQApsc1rJN3CtmbUYMJrR5mEsSedwyaVoiZwQt",
  "key2": "3KByz6FKQ9acDoXFbzzph82KVPEePUSwHz7EsQDD29ZBLweqU3GkLTV4PzPGmKAHBnZ4SyHe6uN2aPwUe2DpBJBH",
  "key3": "3Y1Fvmcv64QsGRBBhjdEDSrGFefN9s4fr3azsdhdGgx4uy9XfAckS9ooaKjSyr8gzCBJprsRdzsDBaJkjvEjJKP9",
  "key4": "4mK6UBiNMfRkfr3uNoL7kAnQM7891B9w6ZEzpc8NYGC5EwhK5gyThHSTwuugTy3VggRzF9tpmACfTTSFGKavpKKB",
  "key5": "3cYg4a56DxZe1mAVUiB5LPv4j7zHMiCEsA6GWWaAd3T5uQ5NuQQoR98a59RjGthZ6eHWAWH86uYogPM41DFaFa4R",
  "key6": "Q3MsjJxSGBT72rE9Gyp8yLkSqKKwBzzqXibpvMaFpFEqT1GqKAvfpYYVms1WUcyZtNG9B1hr8E4ZeDncdFaijiq",
  "key7": "5RLqnyzVCkY2XFt4ArFDrp8YFFvDxuc3Vj4g38XQcXbY93P3ynyXVU69UsnJVLj9cbuBzkX3WDpjMi5LwmJTVpot",
  "key8": "66TUVM2pxZWhkkHvnW6AjobHcyW94pFkbsuJwuqKGjHw8L43msiuMUiGdxcXej76eX4v1RFGUpB53eeRumjJz9GY",
  "key9": "2zKHJhXD6AJ4zcEWxY5Ke5d2d1HmT1dee5VkVN376qm4hJP9N2chBi3respWguqTbxVMYvGeVjUsKTVvL7SY4fse",
  "key10": "43hhu1BbymQw4MYf6LWM7Vay39KViDuPMTvG2ncAhDVMuzSVzbtdqyMVN5TqWkmqxbQMpK3fLpcSNpCuX4JinyBp",
  "key11": "4kFSJgH98HXMWJ61iC7WgbUCV8PfLaHyHf6UfRbgQ8trrFacCcjs23X4r9m9Bwwyn6HhUgnRV4wJqHC8kkLcH1V3",
  "key12": "24h82Xub3mFrP27R5sqVHyaPATsA3fz2FdMRgwwvTLLTErVjUt3cp2U6uT39DJUou3CqvGxUyfg586Fx3hBexnx7",
  "key13": "DSffpzTT7tprMBHPT3j6XPzJASKztrhsVYgqKfD1XJp8VAKNMVchEqFRmbeLVDSFEv4rpFQb2RgnUFLfLhNGSSN",
  "key14": "4BsC7RmV7pteN47Be3kF6y71uyMJrWWvHXyTMwghbapEa45bLNbFRwXF6PiBNmHsu9fCnvfjS5Qq3YSbvcfEMj6E",
  "key15": "3o6hoShdKsPFCrQmK7aej8A6LyQoeUQtJCL4rqiXstAuMLgeYjtdfc5gTqF67pdKcndce17DrXUsa512yTG8a6Tf",
  "key16": "2eEZqgVLBUynaqdDcYzeK3dy32ZDpzpbKPEq7C7EQt9mQjZUcEQ4ftsVJknGyHMXZCHUnxSEr96g8D2jPf1JQT9g",
  "key17": "5EyF2cMusEYPMKt93fiF7wVbhnWRqt3Jqef4RPpHeszx1roiUaJ72g9z5aSkdmgZwktmvG9Kkf86PcsByByaMwPD",
  "key18": "4Bi9jwcG3qRYHXE5y4rSraL2vBfvRAfooRhwEJqHpDkbHoVJacyc7tYgRot6P5LS6Nm4daroR4njiWZhAGuSHVf6",
  "key19": "5Y4WZvYVL2db4cpPtdzwAhPZeyfGGKWBLpGKaWABKvXWpwVuiJKRhXicn1bSAVPaFMVYdvj36djoWYejayecXzpX",
  "key20": "2HETN9iNpAyDbCSuVuShvTYNs5UyKeBdfVwi5fdeKaR7HPGF4P1MrddWab8mvtg1hdccmPoWxsAVXKh24CCEZ6bN",
  "key21": "53cTopQgPUh5XNGxurjHYzEXcy9BSteKfTuzmVsXT9XyHfkqfXV2CsXyGUqVE2jno811HFt3xY2jPM3BGjNda9Qf",
  "key22": "3z8XBJkbBTVt7sC1T8975K1TFqXzsvr4n3coXQgvjC3RBWaAsUV9J9jAZrpf5BNQ2wghYZ4WengKWGo9KhrowSaV",
  "key23": "3VXCNZB3reyA3VX182ykdfHsdC6Gy3xoukRPxr4iwHwmdimsptB9SV5JY13fAzwxXdspz2GgALKfydvLJpo4w8hh",
  "key24": "2GRxGrQmJDyQngA2G6f4wABLfreyjJjUvqJZhUs62MLVVgph4fj6PD3kisfZRckFsqkfYpmcqBYB7TztSr9EfFFx",
  "key25": "4qE6ARWqKx9nojfXPVbNSKZeewfMJ28e51JkbNccozvVC6uTTUDqrshUM8ts4FdZPW2vy3mJZSyogyfmgNDPEWMH",
  "key26": "4DU3KXMGNit5boQaiCHkdXLjQb8ivAK6zjWaw9P863cjqUtUK7XXReyTjoBZPcRTJVSyBSsYcRnH4oqHM3Ct6tMw",
  "key27": "3u5k4DbVKZajbt1baTSBnZfKPyymYmZemMrotDcYqyribeVfF3kK2CsNm2NqPJCwAfRJpbpa1mb4zjgEJJYX2ryk",
  "key28": "3sfqbJhYS6uzvEKs6tzM8Dv8R9FwZ3hjo2iwT6NZCAEDiKXY8K38H5J7WiaSGQJrpPALcGHvcwSTCMg8Pi4iUZfy",
  "key29": "4ZFFBLXQYWW4zDqPjqiGrAdGKaqj28QPeQZPRpr298VjJq4JyocDYngw6LJVFbMGsjzuAuzRyFgeuYtwbwCCRa4S",
  "key30": "3jwMoGZndwcKHR6pqYc48YWQbiTVnDbpuVFoQ3Y2D9P1muMaDRsS5v8rjMC6ZmXJKyQwsoqfPVBRtq7qTiJzS1jB",
  "key31": "5cSedj2w97LuN4KmZHLEiSJx1cBFaXzmb6xcvPVgNNrwG2MJrXKu23rRc2eaeBGv61R5oPudkgdhiQr2Ka7tnygP",
  "key32": "56tsEPk2ZspFVdXjVi2XGssmuKQFLsM9QeM54ZtRjU5kUhnWcCkySRDQxhnjaKdCqHrHGDrb5q7A7qahqm9fQWMr",
  "key33": "SSWhJD5MeDTgmgTaR8xiPo5nXbiYVCnFQDmtzYNSN7XuwLAVQmgPrWAAZoRctQy6v9TYXAHifoarhVuXMUKAo7U",
  "key34": "5Ap9hQ4zLeLqt9fPriZxNQwhmzgC6FGmeUitYz9G1C9MFsatq17kmn636jhHre6BauZRBSUN53dV6juWpux2PLKu",
  "key35": "5F2y7G8giszH2vmMjqLrQLc5Bf9KAwGC71Ef494PnMKHPkQtrVV7TTsB1nJ2tduDRhrRAmdyV67fomwm2pbVccjT",
  "key36": "tNCXENXqPHYSky7PwBot6kRN8k4Y8oULB5aoLZSsYY7uhR4NEf7BQFHGuPPN4F1LE7k1BDAtLxxts3Y2TjABLLW",
  "key37": "4vihM3sK83SnwYFtBZAnDbLPRSWTCqEab8aekkHx9QsQXiV6fwwg56bwxREMVXdND5aN2ZxePDUgAm61Sbwmmqhm",
  "key38": "ap5dQTmBfbxx8qxS3vne2xjb1n9zaGsd91WefpVX4wusBq9zbc63M8zNXRjhGWBHXSWrmu7GFMKGWDfL5e9STPi",
  "key39": "4Ep8pgNyUqoptrdT2mAruwaZSvz9bxHu4NCV9ZiwuG6wAtjuVvgCZo8KnxisiVndQ1t5JHnAp5ed8bpnhD3mgsZ8",
  "key40": "2oe8GShBePtbQSSQgCDLXARSK1cw6vUq9SC9pV4BgVBrMDN2L5z3fYbm84Cu68dLKTPTSiTS2Wtt1uaVETHnUFAN",
  "key41": "3o2wtzC8P5QnwrnBAP5BDGyzV6WTGt6Ke8NTMC9tAjxvG1ATSwpLGv1pwZ1weCn3Wxmth3V1hoQ3wS7ntAuGj9Qn",
  "key42": "3YbNbSF9U5BCRmUDZPGaonVEsxq2EDXUYqmYSdPQ1MtkiCvKPxyYoSqS8d8he6CFmB6gT4opTYL8e1VzrTq1HMQM",
  "key43": "3yZiNL2jnda3tWY8xYFgRpn55qiZmFo3noeKo8Aqhe8GTj3Pw82q9G5cAvahcC9dZtHkfdqNfKGKahktrVFGaqGw",
  "key44": "3v1ezp9hMev8xCT1yVRFUut1bPKtNDzSMUsSzAzrwxEm3K6bB7nhkNGznDSiTqruKcf2Y8MPwW6Y23oPJdC8uPzF",
  "key45": "3qXfGFP7bbuzAJDD3eVCdMhaCB4MfzS6diyUV4cS5CjhWCgJvSu79PtGHyuDAg58BNBqB7GmGdn7PaNvAieZn2kX",
  "key46": "T7DVX5V8FF8uZBZ8CdVVHSwmi7gSDF9d7cj2r74iW5FRHCz776f3S3A8zJaZdgR2NT2N1isU5DWSqzKkpspyQkz"
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
