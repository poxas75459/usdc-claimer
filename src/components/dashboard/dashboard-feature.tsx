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
    "wo8eJzSjMCtpmoVxfFMxQ3Z5jbKo7CJUx5DfdgUzWsPEYAYGbiaCDsV6E5goQQSbruq4SB59u1rsCT9R2qQTyWP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zBot7SGuTNMJgW8hmpFEp3SnMnA4XfGz5xtbEhrqDvUCARJw6ep6QGWXDvgySsPDP5KM9pbdbVWy1VrcfdCMDX5",
  "key1": "39AnbPkFw4j9CDt4sFb5SJGizhmZXyoEMMweQ5QGrVf41YKxmy46G8c33UWG4Q8tPatvR1LcdX4jyJyZPGFMGD4N",
  "key2": "4qPGf8Fo65RZMg79fskyzhkzK2ZG5TBbQhe21S9NWNTpo8Kmi7vrhiEMXf3DksVkVeEvCmuTfkGEGLUN6VQpBcSk",
  "key3": "NzGDCUdsiBjLJqPh2FSGyctTqXyj1pPoKvoT7pTFRVD1FctB6XjiF8vkEtQgcwiMAsHLhVYoCMCgYQaRo8tQLqH",
  "key4": "TdrXDTMHvEMiR4A1Bonttzd12GXByQ2SbSsyVqceQHyYxiXyKp8H1PgPk2opqkje1Z1moD1soHkJU7kpxt5npuQ",
  "key5": "2vP1V1KnTgF26CYLPJzQFhCBVHfJF7S9jwL5Qc2XRUh1E2h4b9BbSCp2r1TbctuRBaop4vo4738uLpADhS5MoXCK",
  "key6": "2BeuiCCoNutRPqmpfwaDvG2wZEh23dvckjsvDbyerkkpG14UhdeeRjPuvCRfVSjenfz4xNvZ2Zn2pNPWtuZhi7m",
  "key7": "63pMQ42UhzTkUAdypGY5cnuGv3a8YViGFWKifKasQZAfp6KSAEBRYNw5R3wcHAN8KJqo7QvFwbwj9taxoqScnnLT",
  "key8": "3xy7DbiLiZWkc5CdiMRagxkxYKPthjoZMTAoG653oziF9XsfcsT8o6pXEaTCCnJQPhfCFUCoFoLcTYBdcQrp6ja4",
  "key9": "4gY11fFzsPQGk4biDtKKiVpGFRQLrtMn1AhLaUqmftSJzfaCR2ofe2ZJ4APXVKijGrssZHiefQ4fndF7LsFrN9Mv",
  "key10": "4magmxBBAA1dpQeZkp8PxsR3vLcyTuiHjEvb3UrCaadH1X2AjeyUeNE8XFSoDo5yWsdg9sfuEUZefWayv9J6pXY1",
  "key11": "63g7KX6HPeRRKw63Xr9fSVU576VDyeYDRZpLC27BZm5QL5PrUkXuLF1qraHqFnMH4FdztTd5y4qPzuFyihY7bihF",
  "key12": "4AyKytbJoMKVV9jyr4CxZhRmqMLx96K92AgMm1vfAdK2tvRUFTXkq6Y5UoygQghc4UrQXXxBxHajDWzJbzP8h5C8",
  "key13": "5GY86L3WFZEKht4eKipFJm9PvFmnqagbidp1kUu2vc67BAXDsbtRK9ZVBy1GwPQLo2yd5VufRHHS1RgMfofQZxmd",
  "key14": "4mZDsz1tnVonBkoKrKdBC86L8si11ZvGmR8PnGUaWdzWjGkjcsxQnF1WPnEjSoDUvJ7CuacqtNQ6Q7UL29xUGPgh",
  "key15": "4UfjXrbxuHSgmp7aSD7A29A5DTuiCDxW1EQBJaR5UW8jZPqXsnqK91aWfWTXCV3XAgjP1vDSoV6UioK3j7jMHXyM",
  "key16": "4LrZWxSesw8vd93qhz9cJsR6UYGbtrMJsbh5Ab1jEjUy5eVpAmZtJqNGYwBD2Xdah3VnfeoPkHmHAzLFSBKZjQXs",
  "key17": "56jrH7UPGAUEi47SvW7kvkc1NSMnYBhMxHPsvWQDnFUU3JRJGLmNzkTWN9nDDqXstgyjmFEQ5AhGTs8RBgsS7MX6",
  "key18": "3WsfiUqLf6u7dc8BFbmTWXu7L4ccBJXaaHnAicKhPnzo2YmzdhoQ9r392Pj2A7YiFoHinVVKGpDkJgTipsyS6KVF",
  "key19": "dnTyPwJwTCMJKB4MnBBGEuqEYgAiCF81mAewJZgMyhC1R8vpe4Vin37j2gs2UjCxGCs2doVWjJDSgPTAaR3duwn",
  "key20": "5FAzRbR8bPwVknmiJRFpCaBPGE14YS2vkcV5ZC7L5YGQpov393hcCA8z6eqUHjQDaMaeyTiQGWxZS7vb4QFgX9d5",
  "key21": "2aGhmhzmsicfZAfx2ehPGwpHAmMETZfgpzp2AYugfL3SD7wvqbxmPxayPyMvKX62DFWqtQAAYfxKceXhZgG6UxGF",
  "key22": "nbaK2kNKJuUunFL2zoeuAwfZaVtjVWQj2RpYKvzAmqevNJCd1p9H82zA97aPDYeTJgPBQF9Vi4kcd9JpU4DGitf",
  "key23": "oK1EigG3vF1dZuVDVuYPt7cjzn2QvG9Cm6N1L4WA9CTamdH3CDXrSvLbPFWGrmqKP7K5Nc9T1Uff4sc1XohTSvB",
  "key24": "5DKNgKR4T4uyX9esUp5XP2xzQd9XQtZ5tFXJ7SPaHs6f2pkcXMjhwXX74dWf21Y9EWmCJJB5RyTjs9b4rxrs295s",
  "key25": "5a3dNV49qaxBuzzypa4J3i28i6jyipTgUJFcD6cquB5448uqDJCzJTAJhUEWB6PRtKFMMoDBgu5VdNXzfbGTY8SY",
  "key26": "4wzoru4jaZ3UpQeoyZerba2vq6XCjbLHvvP2Q3Ry3xVBsC965pEUsvJpVhEDXhvBJxWdYAUF8uUwc8K7zfnp264c",
  "key27": "4o1fYtqzEvQknbfYtqirZSQqiq4jje9kP6RzQp9W4EbUCnJ4hKPLubbCoCwD9d6AxgN4PEhxJSLwAxaMmzex2EaX",
  "key28": "4o84kpbUprXLt2HXqtMmfbmQ4xW8emsy5Xsmy8TAYocu3jZYQgUziePXKtAutjr3EoQGsidAbzwA1XcSWdRUmrju",
  "key29": "2cubEUknT47WeBUz2gKu4uNq3p4rt11T6FHpSh4hTByfTYCCAvwSDcgzwCivYdU3dimbZkgLLdM9vjU49DBmKwiG",
  "key30": "4jGUTrXNSgpNREGayV6pb9p7RaD5L658QmqbcCAgagAojHUHcKfVB4JRRN4XtDF6UE7WsWQmEwuumvth2jDF2Epp",
  "key31": "2HP8khZuh2sL4zD7srMxueVWgJpN1uYVJvAabF431HYHJgXYSkSWvBinRF8qTtMgrmanfSoQuZupYBUwgeh78Gzn",
  "key32": "4Bb4pNvY8F4yrhWrVRWBW8Af8okxWAYmRWqihsgGahzRcpBxnog2kHhAYYQZ1mrjfKWYvbnyfL7ZUst8boBNMAo1",
  "key33": "3nGXTSuVukPfdKX8xEHptNcdNXLDENX1V6LmhMQMxMHtj6iL9qkgHnVRsyqhejUyksukDDL8JxnSaSiZpwkkCv4G",
  "key34": "3n5XvoBBguQJXCyEz3vdpo3Nw2yorGa9z2Dm5xA6N6bWd79QKzk1VsuRret7kt75ardSWG5VDu8cMnFMaMwTgjjk",
  "key35": "EeZPWz4XtHkkkTv4MBH4f65mZPiKB5Nh4ZPBHhiutCtnCnNn8KyrPqbBz16tPwkzmf3BwYX1oohxt9voLCLNjkF",
  "key36": "2vEmFdKcgsecxk5FsyB1A4jyPMN3pcB9WNvq4YDVrJYMGLMfPF5LWcNfU937fdsdErcJ51FnYJD2YNLXVEqf1WCv",
  "key37": "2v7moSRbMivB1UXcaDukG6Zhzs4JV3NrKrqa7RciCSCiMEkfeKM3HxETCvG4QXBnEu1bRg3V5nEcsSGHeC4SFMYU",
  "key38": "3KNv9cZLfcxy9juRF6YhwsgrQDTRi3cWF4LrQQsEGxKBDsW5KAhU6NJempihkzP6YQW6PP3qc2k8q95Dn2CZx7ru",
  "key39": "3HoWs3pvRkJrbwLzJ1XECHEDYUwiirzcn3MqrjNQgNYaoicZLxj4R5tYy36K28R2F5RkYRGe6duqLeYKXSmZUe75",
  "key40": "2QrRQr2dnr1JLY5BCxH4VuS6BQKLkkSNu2YTSQYoYFBRQ5aYTEbbm3B6ZdC9z5wrPsifqFQP8KKhFCjNMFDWMrXK",
  "key41": "3y1qz9Nx88Vp9xMg7gstJnmHEo6WcJGSgpJDYr6Q7x6mcdjxjvoKpnr66tQRBNrR4BQS4UCFxGDyXvYwLDFqvofJ",
  "key42": "2ujAxUisBKGziCEWENXfuKkqFC3m9b5d2zK4bo2U2nHzeeSqf8dxurAg2uDt78V5dgzN85BvC11wYZ3iNTiyjwio",
  "key43": "4vn9CfC6fTQJ3xgBwgnUyh36UrexmksvgK9w2pibMgqTSAnsFucjf4mX5Ns4mAptScJfewSVvPabegAa9N1jQXSA",
  "key44": "32CuuRoLWS5ikT3CLMSY7x5o2s7pJpFz23FjdUVmwmPMsKWD9qViqoFFdjSw3n7A7SKyHapM4HwfAY5ynxGmsuG9",
  "key45": "3VePZdeu1bqWKHLG6jgp15PJGqPW4pB3cgjvCEgcxWkLapCp1YYtBzYk12eNu1VJbCnqG4dP2FSEJXS3mdYQf1N2",
  "key46": "3XZ5JUib6pbXXwrtqCnKB4qZfz7msbux9JkghbqBTNathBoa1ux9ej6h8M5SYESDw6XghoTGYPVgZkGeEtFBQL8F",
  "key47": "2cwfVUJaSyaa1BGWgaRiAJisU7PRajNpWC5LagTTffrdk7FY1NQdVPa7SmW9dmpQn7Q79XfPzxMbkMLe4v1xojDd"
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
