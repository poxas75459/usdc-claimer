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
    "3S3Ko7kWBBhtiVR2xcsmiP87Fh5z5fmTTKaJRAfxxx5htvUaJw8bEQMkhsCDGEDFk5TMutiry2R51KsEVhL2mLb8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t5nN3ZfeDcGWY3hrCkQeKQ5QAAWTvSKAK9QF6Tw8PsmYf37CqSczMBk9pMrNCR7C8Mf5Np5zyqrGBYWryzUSZVT",
  "key1": "2bHntuSxzesjTas2E5Ce4aP4ngSXZL7JfbsZBj7atyuAHnc7fsEY5nNpMFZ6Ahxp1YREKnxUrvLsagrKfxeM1hJV",
  "key2": "3SM2JhNkT88BXobhsYUTJtNYVCRAdjpe3QFcvraABgZJMJescjdS5GqWKTerJLS5z9sMqwXRBReccZdsCyNDxbY5",
  "key3": "4huMznyDUpjDtNGdSJfptwWxZj8HRtvJjhTCDo9DjNmRQd5RNWzwvHkm4pc8q38sLbHBJedt1qKiktznZJ3AAsyH",
  "key4": "4bxwdhaGvjS8Bnv32tFkkbN4kDWvan8VdAZAy7b8ghEj3KCBzLZK86h7MvugFk9UXMBr6BA4uFDsoWD2dTehTP31",
  "key5": "m8cPQQ3wi1YrYmfB7iHS4MxjAttt3CgZ8Y2vQyD2VsMV7Fq8DkixPiXW98cvo6CrebNEjLWfUNxXSPcnSk8sMQc",
  "key6": "3pVzCH5aXRQwJDotcy4PVKxb9AweN4L6zhcgdibnHnNzCm8AfYojLCvso3crec8BUF7NXq5umDnhDMnQ4577dPoc",
  "key7": "5M7P3PHoPDRp6hgH3f61j7qcuHWKZyq96Ar12TM1Wumk5CmvWN59i99rvccEEyfzey7YRVwN7ztZcTMt2VgoN9ZQ",
  "key8": "3Q5fz78xVSDwxxDE7qHCq12jxLiWeHdxVtLnU5SWoPn4jv72Lsbj4eSac4F7w8W78tL1uT6GnqPMruWDjziSRfkj",
  "key9": "4v3b5TFrgXxcPdoXJ4y1QPcAAgcek7ex5UfoezxRMVe4RUyoR6WUTGZwpxwRHtSWXvsMm9U5AsmPrwkhv3uG8Fab",
  "key10": "RM5vxW37w1PZtjgfxiqYcBgmY4NapYJSR8812NFs3eTfHxvS1X4yKcrWmkJxiFzSNrkZRoTGogpKouWxV2itNMX",
  "key11": "2pTT8A5saq7CL9SLwMap4AwFGkEU6NB972T5tQog5zyzCaEAGTFNVrPa1cp63CJzzXrSrP7SXACaQ4iHNTMLBbA5",
  "key12": "2hwEoCqNBfgsFQaHC4oNV9S4vccMY1tuSjp7eBfjtZYQaM9ar4K1vtv4mxPRn7n4QEUSxJphuyrmSozyN8Md5B73",
  "key13": "3Spdy1Mk9thUHNResF2Y7C6R3K7dCvJfXQRrXvYRXffeh8b9rPmtB6aU2XRrZYoc5wECRp8ZsVqQGhRsAmCUKWYw",
  "key14": "sPd8A3YJhUDTtXK9qZnjii9x6hoz9HYRDyca14RUmcbCy2MF2KLTZUv7gkJhncoLgDR1U4KxC58VbmUKPZGx4pt",
  "key15": "54uv33vZ9mntta9KpxyB79BXBNEN5EcuB2F75js4Xn2Y7nmR2R36XCDXDycwwj34qfNXVC1GE2PgkxcbD6cef25i",
  "key16": "3wFnwnp7NkmVh23eTeLNuRYmBGG6F4zEV1T3gr7W7gF6JpLmVfbXDzBMgq58XBKdLyq9uBzzmfXWTu6pYyRzzKRt",
  "key17": "2CRK3tgDBfx5nsMVJ66cgHUzjuqHAKgvnFNWgXFKE4XXDfA2N2V9NRPMNtstJJBAcBHVouzw7rx2nhEjYTXGYRAt",
  "key18": "2D7a6PZmA6LEUGPC7duXxcZGeGqpSK63GGprNajnc2bAm5e8dCouiCqmi6EYKFExHDoY2ap9ebzNuVNub3iqi8Xz",
  "key19": "XDUi9vcpPFD3A4ggJDjnM38VVuhmj5Yvzsdj27PoKcUpsqFZii5Rx4gu8Q5gJeUh814CxXudj6iugSrR6raQ4cR",
  "key20": "3v8wY3MD5tudeA9nYAtwhUUD1xWdJUivR96kfVbGYZoDyG9eMSM1M1oL4MZnWXqWLEncUxiHtC1YXfuG4tb7rwNX",
  "key21": "hEBwR3cmY7a6cMhdpPGgSycjREsMd1JHo9sq5KReiQTR27t18Bbtv7JPEzWT3bfXcj7L3VxMYcjoCGuCFyf4PM8",
  "key22": "62y5Gd347NBgyrBMHKpxkrStPrrvDzeeHkBAuFqMZPa45yv5QyFTm9B132e8KF7qHNSwxqVHNdxZd5CKbVxsuh8J",
  "key23": "NBBwBCGo21RWdVmwjYtM8e965eDuLFB1ZEaKjeZizas3yTXhHsuKBngFZaceGGLfqMvV9AwRgtyahCdxJXR1uzC",
  "key24": "YA8sc2dPj4T516SaDh7trwFhSGQWZgW4iAjT4unFtS8woyd9AcDxSwXP1uYxXckkuvamLg9EvE9QdMSq4igug7s",
  "key25": "3aP5TUsuvRgyw8sKhctEVjHQywqghx3C9aNaXPJL2wnLiqrkcv3DWAf9AR7jJeAVzQizUq8ufHyf5XSo5FHbHoDR",
  "key26": "26GFgbrUNYRmURsX6j3wdjETzfnVUaB1zn5vB5kw5guojtaqbtSteRyU4PH6ZvJ3yz4s2Cq1KB81W34AQgKKa7mw",
  "key27": "24ySF91RjzpCWq947k7iMRHEKuv7Vcv6JW32rEAbdS9Qepo7EJ9ig1dg9Z7jt1zK39kaE1HLbvyWtRhBCxEsueJC",
  "key28": "5C2p4ybKHhidDTMBfMtJGMCJNqeEYmiAqtVojnayM8KJrC3UHaZN9AYekHxvB6ZdRpiHNPARdqtJqkdRM3DFtg6X",
  "key29": "oMrf8cyeoAhE6EArCGi6VEL4kASFAxd33rzStBMmLiGgrxDXTNx2eZuH3D6uRw2J7j2sm7x6yeTXgeiZT8ep7Hr",
  "key30": "mwv8USh9KCdxPbfnmBRr3dr2VBEtGF7diFRf6pYZS7nqfkeSd63rLYfZZbmvbK97TrvhH7DwdRgKKj1Ws4pcSdj",
  "key31": "5aWHEqr6ndv7qAfKy5T2PiUeSxUz1sJXdLVrLG183in9QA5eJPPHNgTsr3hBrGSSUNkvKhSHkxhVaC1hyhptPmg",
  "key32": "62bkMeAuiT3qqwaxqfE9izajY98GmanTRKkj8pDXP6EqQTzeEaNUvy8RzrevXrzbHniqsuWQEjZZtZSTQT3hfMiQ",
  "key33": "5LQeuFspUPWCPgLhTYEijurLT4L1m3ecFNPTcxzH3aKHWT1KcmQta6V5yuGNZgi16cwraVFWkp14rYXr6Zi9EwW4",
  "key34": "3b5TtMYUBsBMePS37cur6A9PqUmPWqRSieTqmg6dvVMXS1fcFAn7C4AwpJt9eKiC9fbeBcSmJ5v9o5JsqCeqVnVH",
  "key35": "2buBsRsZ2MnvvroUCF3A427CDXn7i7jQPaXSKUuuKBtGqa2DdZGkGkyd2EzUX5Ye6cjVQ26N5zBxuQV9HrHHdAmv",
  "key36": "5eCKVKpePxSnYGYuj2pgc8yLNivaLsiqDo6Z6GrXnBVooawsPyFfKAjFpwRBi4v4HBiuuwYajjwpSDbWSnZCtfu4",
  "key37": "4TurYsYsfcapZjcyoX649gVpSaK2cmui4Hhnf5zMHfVuKDeP72G2G8kCC2kNcwLJsPyk5PpaGKRuYwokd7tbyyyB",
  "key38": "5VRqf9xsWGvpkRqd5VyaQTLXmg8B4TdHGZzJhSS77NJtBBRsLoUTe78KnDJP4ZiRZcNyGusk4ReR5oujgsQPstRZ",
  "key39": "3U3628oJ2bMzGSjhKyp6UipBsq3Ga9NeFCA8w6Kvmo3qzZUGiqmWVB3ycHN3QGqEzAV8yRTysMvzAdRmCDFMHAQZ",
  "key40": "4AzkbtuoFRmzkDSZNSqtaDarczdtwRfWkSXbAE9hRdxYNQqUwZz2RPLcPyX5wrRoJu7qkaikLBcyHyQDDq6NL1ZU",
  "key41": "yJCStvDENd2EgWAFVQnvuSdgPc1yWtuEBxWAJPKghjfA9VE5G4meALJCqn79nzct7EGCKggT4xENFpQt5DufxYB",
  "key42": "2CkoihkAiq2bAA5kPJaf33GRnSnYCEFCBK5DEkQs6D2yoPRFGDfMbcx9QYrSJ1NxrgbfePNd1JeGLSvjuGrrE85d"
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
