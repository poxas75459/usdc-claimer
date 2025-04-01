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
    "HSFg9oGH22ZPQD6DYetgViDAaKBUv6nCRG5yYzK5wbif7L7dHAwwPsA6E8BPnLZFWkRJx7wwDGuf1ZLoEQHs6t4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QYTHL5Sr4XFaaiQ9dMjeSHxv5Z22HUWrotF2czuzMQVDCF93XCC7Y2po2msRYToMd2i49w1vZRZ7XtncxTQ4En2",
  "key1": "2vgR7RDQKtsmKijbqZUvR3ae6WVzrXWTmuRNH8h7x9d7tSeS2MNptPS3WcdaFUEeko7KNo9vo9pmqNMc4WPBegAn",
  "key2": "4WVe5G3e64ma2fe2GjDBo5G92wvDkVEdpwqw6bgDwFDa1mYpRyQJTMxgva7J8RSc2b5wJ54ZpxSbXqbjqhRDhotR",
  "key3": "spz9bMXWkFRSUrvk5vH1r2QFujkoiYdPnVUKFRe5P9Tmw5J7Y9dvUsf5CS7zpk5zZRgtbmytr2P3hX1naBwzNR1",
  "key4": "f2YidfURBcGVnSihzdJUMG2RDxkHJsihoSNH3hDDMRBXMUQj8rYGUwoNbie9jaucNcn68B1ndBB887FeVqJrmhP",
  "key5": "3QDopi3dj6YsNGdo5xpRbM3NEFh3PYcAyjFc9UaC2nBp9vdzZPtN6rzLQjMwxB2TGCob3qzGrPdoXgxJcSXieHdK",
  "key6": "5LX5FhrMxE8jAi2voLFS7Fr5Mv5DCuTADe6zmxvw9WXNx7ZXtxMKapCUbA1CBb6caQQredKnhxMeVAAzrmdSmbLa",
  "key7": "QcR5HyxUVzC5xsJQgkznduxyZHr8CWRvQfauX4zDDorde8rEDp43dUDpBBcYYBVnswhhnxbadTjH9ku22LGZ6n7",
  "key8": "5VAonWgZpvVv2CgYRt39ijHrGiT1VUG1fjPPMYrSB5w3rUyDtezoGp7CVj2o8M79cykqpxaoPSJYfKZjKryQL8ie",
  "key9": "4ngvKyR8HKvaNYVEhtLe7xAcrsrpP7guTtTMXUzsUuGkNkadGPCiBJxyfkt81d3JDjVnMQiQ6htSxc5cb5siGJ9F",
  "key10": "66pbuV3NQByuLs5Lsr6ntfwWLdiRStLPKjqfNYQxSM2HvT2kEk1jyMcbfWrQV6QEKoaG8QZiA69rtt6wJVwmcd9d",
  "key11": "5V9vtHhE7BVxauXTacgcXauPFamUENTkHtab8sFNY3xRhYfgGVaTiSdqXxcegrwFbEMUACAmnqdL1rkunWTyJpMm",
  "key12": "2DXu1gMV5DNLiHXpBHcVSPuYjj6uRjpXBvFcxyTp5T4hQMQk4dLGLPMqMvY8QsvNDuhm6J5WHfQfBn6cwJP1yS7v",
  "key13": "64TY5Ph4k84eXBNfDHp417u5X8fThZDPviQiGAwKczERnES6A2BZAGcaQhXHWjwNbhyqPRcZPFyRSU7brMxdPhhC",
  "key14": "5j8GVHVLSgoBf41FxBW1NcLATwwcNJYNSbPBdV1LVy6s8vwkE9mdrm2VsHzaohieLZMZTcehuPP2R2EfskshigMy",
  "key15": "3253mX7CzHC7nTKVLGU8vCewVqMmDZep2b5xJageMUXpaxVuLx5p3coW4s4iWcfVCud737Ni9gzUKoHoXKPCENcn",
  "key16": "3FPtTcbrdTCC1Ds5wTFduq91FjwmPd7mxm2rc7pWACK556ck2zQ43iXtADHdnoC6JYeEiGZpXtJjNLXWNUvqWLCw",
  "key17": "wkxHMuqaAStnWyiEggRbQT5V2X9z2C3otK45yZrXbeaVbyCjP3XXUhC4KeAvxyQAgU2dhhC9mP67UpQidWBVVaQ",
  "key18": "4vGoZhTTzBVYemLsi7cnW898482A2MXejG3fe1WevGgM7xk7Xqp3TVTNWkB42GJpss6rSvUamiGqxXy4A2zb8srV",
  "key19": "2tb9KStxR1PxjDRNSXBtBJDTrQrofwqmvsgbtgonLLLW3g6P6MXWcgQb4bTMtSesVikduAqLeXmC3yVrx9PQ2w2K",
  "key20": "63yDAmd29mND5DwQWrSvkHRntSRp6rUwANR3W4HrnQEf4mRa2N1bUJbTTDnsFvJrDXRf6ysZEWTtuSb41Liei1nE",
  "key21": "2dKLEXUq8MoAhLF1f9ZDVEcisvWdJinVmbLFUZYM2Wsf3SAhLhsNhPzmhsHQg3Ly3itcx1yRGbxVhZET2qcckUDR",
  "key22": "d3Ge98SrW8U1xfL7eXAFDhEW4zPe47Z4bAnWnGXxdF4c6RHSTDveXGSJ1HYrTmrpYU8vM7j96vsZfdyKNPJNx1Q",
  "key23": "5AEaFLZAAHKTPfVu7eMUniXsH2rhsXJAxqweV1G71VBdeVyTBECXcLrvyJhphepNXdKmFf2G9HqTqWEAHMWfLkEc",
  "key24": "29pHx4eMCbWauqHhQKZzoA1mAVHX3scRq5Ym1vSRqfCkHVbbJAzNjmUFYQ4ME429viFrmsZry1podcZrd58wTNNm",
  "key25": "32ih7RkBnkJDE6U9ecvSEht4AACd6puVMm4ythzdnaU3q3QFu3mxfaggn8AEh5dx3S3Btav6rmE2SERb2R6ug7h8",
  "key26": "xcjXY6WbWyjcyzyC2EXpnJPo2AAkyb4T6XTHeCJCeqy1whxjBZSKdf3LPzZJHY1ZFgGTBotWEJiEaQqNrkGtAkh",
  "key27": "3K7azui1SJ7smPD8vVBDtAxxB6c1SBZH5CYVVFULF7PkM3QMq8Bd3b2PTH4ieA3uskBxrJS3N7Bko7XRYsnkGcAN",
  "key28": "48cdybdqF62UX9xpEKwBTsSHaeDYZEXrNSNVDErRBeKVsejqqmEyZtQKS5UxwjFaJLo3hwqFQGSpt7EY4u1Auy2k",
  "key29": "5rgpUWbjo853wXcK6VbgdJkcab43epbR8rTSU51pFYeZYj74oAihSBv74N4SREyYhKoaPjNKdznCz3bDFnAv5ram",
  "key30": "3KbPw1z1XkZ9x6EJKCUWN2r13wyehA5p3395Hk1zZh6qWZkDXZq5zxVm5ScrTqD6pvDaaNzp5dCUwgK2XAXtpncx",
  "key31": "4tVEpcoCjB44QRH2e9nnVXQR5pDdbNBuhw179QbQFLD9LUjmCpXhdCVuQzFX3Q1H44yci87oWZtBbpbKzVMiY5W7",
  "key32": "4mroZ1LoWjsihaDP2iMwzgQ6VY17LyCxoQBnSntfcfU814Qt1pSeG5DYcamvPyMpK3Bhzj3pvrGvuDiS8ZoXNxG5",
  "key33": "21TnzH2khCGnFK26tciU1v4D71qbNvoh5wGTLsK19gqByU3zLDSN244LCZtwFjWkfZdTwN1fYVhgaKDfojBWcDFV",
  "key34": "5o5i7thPpiVRjvpSQWPJDqvqYpB9EybiFWZUQ66Runmepo3SdbJhv3ezC82NKswLo5gfq9J26yEnvvY6JzTcBkNW",
  "key35": "LDC38JVDpknopQy8ZVCxSPbgK4mvqw6LeDw9DvMKy48CLwDqxHBJKq5ptSiHLPtHC2v7AKQsTMqg6ofPSa4Pf4j",
  "key36": "RA8EXmSeaFXBvSyWgReiMWD9SUH9YSYGWsncsrrM5AbYvhttEj4wt494x4pNZnfvy4kSEoWBU1QDT59PsdEfjs2",
  "key37": "vAnNhbBxVm5uEfbSNiGEypMuDRiP5LCVB4MUk3QXrA9VCajdjjhNGd1XRuqvMXEfZGjHT33ovZUTeXHyhqG64Am",
  "key38": "4kCcdfiYPQJ7LXKSzFJuC96FZYUqyS5ML42yJg8eXt3eXEj4wEQWTm9uyTHeGdeotbwrmebQxJbjKimwqvnFBXGc",
  "key39": "2gNJqxesBpYj5xqU47gMXXBsdA3J4A1GH3N7GJd2rzMoYcm2H5RcjqCwRsnS2i6BST9evtYCcRGUhtPKj2eavUab",
  "key40": "2yVvzBUvXnbZYZ1j9dG8ASoiZqo7yfMjPN65jng639axTusb67ZUrAx5NPkDsdWaRyHzMcYUJDz6zMhGAQ6QoneS",
  "key41": "4R4jRXu3uSWQBCDKZtE6BbqR1HkG1pVgYS9L3UcVpXbwd273ojtM31QJePPpUE8vf1d2Ktux6XP3Xr7ZwrB6mGP8",
  "key42": "3qJQUYvTkGVhBguqDkNhCKgUDYZPQZHoY26YUP6sfLmqYLx5zRQqfZZG3ZpdmVgQ2EdK9aNyajntVo1kP81VRYGG",
  "key43": "2NP31X6awy7u2Gc4jTyXmPh2M9aSFTnCNcAvL5P64dSHPv2gYtkhWDLAaZMXUmS9CLB5Dt7beS3tyoh1KoQhvE2W",
  "key44": "3XPtjzR3UzS26qmKwEahvigD7QNUQya7eYfmGFFcdn7L7Tni9u7cAT8BiKtxgCBEbsEyAwx9on2z5WQYWrcGk43Q",
  "key45": "447HkPoH1iK62wGhjVz3rfN17DmWLhyyMYaSgLyn5znHAdMtX2oAer3EwYXtxiaB2HjfPrwwxWV3bEb2r4pFrTtk",
  "key46": "3Cc3rgo7LTxBaf72Fn1zPHR7uvomjgjmixpJ1snvYxbEDu9n3tCVFLCdnrdsZbmVT3zSsmqquvzssFTVcSYYTdko"
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
