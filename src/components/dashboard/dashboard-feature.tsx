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
    "4pAVSzhYEuNEAsSieHPYmcAzTxY724uxDX1bUPo58vVXkWHe5hDD9awdC6KJTFPGgcYk2uEG2cmMWPJ46qsYzBK5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fY8N8SLdbR4wB8Lgh1G6iq5oJhwiAxUFHUtPv3fhDQMzM8JZVcFDBK92QPU3sQMxYFJq2qjNZ2b1S2AQ1fcV6R6",
  "key1": "3hHTrbfC1ZPF2he6GnYcMBY6MRLzHwSkyG8W3L8F8QyS8xUhXYxuyvH3J2JTNQixgbvSxLi6ACKhdk8BaLTCB9uS",
  "key2": "2hXcHJDrGYz1wEg7tPdQiqZ2paKgMAnooyvZxzPpnvyn16tAHvWdQZHEWSXjYTJMp84mSrzYKwJnq4d8vTa97G5v",
  "key3": "3MoJ5sRTxWqASZDk6UoFK77moiYzz37hh6QmgYctUNd6rizumCD1T8sjh8QDTveXSBbZz7ApUVDwtMJNDhxAr4Si",
  "key4": "4c7QB4ha9KSG4rfJoByY5XkmoKbYVgRbSjLUf88nUQ1pnCRNrc1jGZPfGw61EYYxXSAYt4qRHT1FstuANTj9PuQM",
  "key5": "4VXa1W18aWeB4JErJmCVkm5Kh5iubWkXt8rWnHvMdGVQu9EYa6Lj2LvUC6S5CdiKD32j5o8bLYbwRTGQG2Gf8Tif",
  "key6": "5Dsq5FsQPwPGjjdhChgc69aMPpYduJGT1hLgegojNsjnWFvgN7YudtrnkDV6CCE7hzyCf6J5d6VrTmM2LR6NA4Db",
  "key7": "3zYxraKcncyAgFutorh8Fv6pqXL2rPxpNPnESKBrmfgFU7WqzQS3V4CpdcrVqoQ4GvWZqe8TnXqGDkzi9vCgk6X7",
  "key8": "3fX5wBCiaKPw1py1wiGixa724jM4sD68PSdtoSjHKQo1VGG29AxfaeraXAbbzv8M7xX54j7zGGaG74b35Bj8ijcw",
  "key9": "3c1PR7g8DSVTKojp9EDg129AZP1YaiWQmbgGJ88VDQRPUUyESsY2Q46ZAsu9qx16jqwgouQNP1E8ZWtSSaowhg6S",
  "key10": "jish3GivuTbmTbfavXdiV5yk1tR7P6V1cUWmF6kFD6snSJYYz9NHfBAXejCfxS2qm1MYuRfZ2XYmeCN7nYYrxW4",
  "key11": "3XyAinPRobtoC8J927XVLDGABvQtmzLCG7p6ybFevLva7seTzadMnddJB6Wp1GcC9U2QiVcbJBjEurFBhKJbypnj",
  "key12": "5fDMCBeF9xtunP4RCTBbgdPXsqLwZDSu27MHoFEeBM8M2G9XhSa87pA277DTc7zLEQBmFt1kUtNBhQQ6XkdkE4eX",
  "key13": "5Tvpa36N6iRULGKKg8RZbN5rbTJG9kKweod6vigrDsihce7BACTvn5bMbiNsacwFmfswebntvo3GAsUtbMYfEzef",
  "key14": "4tefJ5pEz4xt45pwvbTCW2AuLr8QFVi6w1FJ3NoA3dSgqJyG3egws58Y9gpCk1XQkzSJetgX3Qtu2rDJRSTLWt2y",
  "key15": "3afCBJerNKwP5AJhWScy4QZvnsEsRygmLD1ojC3iUNrRXHf3aMiGmwsAuvQRouNmdAh2bjbKu5Rtk83KFfRWzGCC",
  "key16": "5NyYNokbTbAENvJFK4cBKuWgqA28G4Da1UkiCq9J7VLadZU9SqhR69ZMBV7hGQTVeUs2uGXRbmPpopzDC4EmcH3s",
  "key17": "5WpiH3gJ7ujA7yuxVDiMB7EiiK6Yi44VshdrfYGz848EkxTqgZ8jD97pCK45voDXWFptq1xLN32mEUHnRnXzY19X",
  "key18": "5vYhJiVxFNvKBRrCMEJuUeydr5mQk9a56nSTZVfgfm6rgU8vQJeWqQxpzV29k7j2MLMvGu2Xpv17pQGYctV3qyWi",
  "key19": "3NboHTfAtt3tK1i11koZNNupBZPRyDUesMvpEZWEsYXS92ALSuQQdfv73sKv9H49rbsiVcV1fykQpPsUDzp798ve",
  "key20": "2AmAoYUSAxD4H3Z5f1y7h1yRbZQKUtih5UrxRiyPQYBj1Eh4sSgtgc7K5EW1AxwDoJgzDQQFXogNk436RFe5zgmx",
  "key21": "2tSRCf1cV2jvW8AVJQLwMdHVeQnerRq4YrCYdwypoMiyud3f9Le463iBfRAYQx1wPfnuzaUU9jecoHiY2313xuMB",
  "key22": "4t7SBnu4h4KtQTordK5Ygq7JdaXPVSfptqUGVoNtMZQtywDCbpNnEUARxQsxdjMtiGJT7T16Xq3euRR5Vn1AmBw4",
  "key23": "4Ce4UbDSyi9phwKNUWoU7ZfmhEpZwaxb5SAv1X5KSLa3czqZN7GcQGhGLyhY5FEnx6PkX18yRtRHcBaA1QXYn6An",
  "key24": "3D4HAPfsdqAuTGCWEtbrrkepa2ExczwyCG8wP8zm2ySoQq4K9Ge61nsgGLNAasPuiTXc1z38YQoYfrNhRuJYktSu",
  "key25": "654oBpoQzcSvTkEfzn3w8w7gJjgU7aXqfrr15hgSGVSXZ9K6p2AEX9cWuywtafynMP8pAhwCDWdfhC1KYpEtqvUB",
  "key26": "3GbwaiMUgJG8P2jaFUWaEiWX2UXuFqEFN4mFEZqMijNgQ5qxBztprD3goxLp8UZW7EVALAgqHGgw6SurMGWhZ8Bk",
  "key27": "f8JNozzKqeP4MhFpJXDnjXhqCf2dP8XfKXjRafuWTZPSRrEBCAzJ39TMWe6kmhisf4941yv7CNacJyKZjEFsER1",
  "key28": "3PjTiVDUeckMHUi5EfU5zVZMmigCjuMx7CEW7jrfD97gfxeoMmHqW9XF29PWapUjX2rc6Sd2CpwcMUrhmZCij5fi",
  "key29": "4yiDo3TLS2XhouHZ3FvYKSF8jB4sJL2p58MhqZM1AzCt96tkhMZ7tP1EtD5w8Y81Hqubw6ucpoecZsVacZriWcX4",
  "key30": "2QNx8JGpEW3J3XJf3to6DBLRAYJAqPBiZo62tbfp2Q8FSMKWiRUePGus9jGjGZWysK8aJpYeQ5eypwKwnN7ywVMG",
  "key31": "YWEXxiUPgFuDrXtmgcaFE5jQwnDgX8C9MnRTBHyFwE4DyTaUh5xyLH8HC252C5NmFnudL333K3tZ6FWQ9JChGje",
  "key32": "2Vx1wwYndHEWSeYHHqp8cDWpBqKKgL6RKdbHd1cp7BBKE8YEGtDhPKP39r4JnWWWdpFbyjpbDS6j29UPPAqJC987",
  "key33": "2koMBR42i2nA3YrJBj1QCAbYpWHUayphpTEK8FME9jhEaakXAjmJv11Dqc4Vgsg8nday1dN62FBpLZ4UTk5rULFa",
  "key34": "3DiHzeE7XcLPq3P5usoGMMAFAiSBtEidr3cb53vGu4t2gxounZyKBMEHELKe5vvmjN8gfHXtoedQanZDj4Hm4BPm",
  "key35": "2MMjnTN1oNmg5xSEjwKDDCyyc8dieuFDon8J9jbG8nj3w4iyBukZZGF7oXGwuXMYdjVMJ4xHCK6fJqfieoNZbAn8",
  "key36": "62hobvmHs5oYKorKMgbz2dx6BfLNe42RkAcGLbFHWNm3NupPRP81Y8C4237krUBsnv3hSRpkqnLg3UGvGZrCy5d7",
  "key37": "44EjVNNqzbLkck2MsWRfaWMBbzEj1LRb9LFaWUi6vpYXCPfNMhW4oow3Vgfa7jKCMtDCoi4isX6fWZ6ufjvBwTjK",
  "key38": "4oDKEd6fiVsy5vtF5chavjMDTNvKcuQwySbmNW6fQMCHGu51jtf4J8YYbVQSu3UrbfnJyBm9sij87fjFuThzTcey",
  "key39": "4hVSAZEmipPgcwxZnSfQKFVNaZRnnRwxkm6RbdZhfGjfdEGyzohzGZU7G8RMcfCgE1KWncfep92cjgmLrQsrVQjq",
  "key40": "47Ax1DrJF3tWNoiJUffrXum12jWnSdsUmqHBXSyLyjPUdNQJNgNWPCgJYbxQdMfKVYEqN7uFRfJzT8z1dHwctcKa",
  "key41": "4ZvoNBoQGd5aXhM1GGVzFxu5XwZpbZ9u3NZindrMAmi3NWZqEKA3qjH1e81JHiBB4c55hnNdHn84nFeqBApicphH",
  "key42": "3rPKVVaGMJQX7zsE81iitBBPD73UJBejw2CQd4o9i65YBejLFmvg9qG7zeo1K2ZJZjdKppxxF5Rykog7KgLCHUN7",
  "key43": "4Sm6QsyZb7AvWrUjACF4MCqeaCJhzUSoLyf7hp9aGc1X8qNF1uebuYoWrUbDTozE3ttT2AMhLVkx6aqRTCBoLJ6t",
  "key44": "3YsnrHTwJVHX91743h7CSSioVKvA7Lnmft44vTCLWoGWJSsoxf35eQzSvNLPQPBAwE8TYTkNBXhAi1F6U7fCTfef"
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
