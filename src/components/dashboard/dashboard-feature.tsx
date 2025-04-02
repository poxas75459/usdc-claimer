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
    "XMpUXejous5YqSk3zg5eeWLuhTiZ5h6u7PMMTMedUj6TQwhupWmEqo9vzLRnE7A5ZdhNLBerzXUV9iU5McdwbRd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VEc6yi1w8aAFjpSh7gTr4QC4KbfAvaDLiZY21CcdQu8jgHK7HayjYJNtAEsgnShW33uviDPUfMFQmuzwx4qn5fD",
  "key1": "5WKQ34JoYNL4oT4L5TKZEEz2B7FrWrzRTJciaqvjuieaYU2amJBHJ2Yy9Rm62yNMTSwX4ecg1asb78roSTeg39DG",
  "key2": "5KYPuRbSnjfKR2UnNPSVR3N6LRpqCdxBsut4Th1kaahby6dwiVwBsgT3finU3Ngc3sLmm6x66QExhokqtuBeYqz2",
  "key3": "5yBMNCRDRg2g8Tw6RpJUSGP3FMvYWJCLSm12qQWHWeeVRRwTk7WVPi37r83XkXXC2xFbHEtTYgCQfsZ9VuYfVbDQ",
  "key4": "2nyXHjW98Uz5FtDw8hZcGqxW1Y9fWrVUHCwTaWRqxMuuotpuVRB3sTSpoh818wdBfzqaFpQyHZReG6HxHjkcS567",
  "key5": "22Cm3NuWuY4i8EZRMDLDX5RNDbKnQBi8vGxnZ8rJiHHz456DjkgqpQvgsDxM6kvC3YXS3Yt3Jud1sKaEVdWttnRP",
  "key6": "2XBqrwNzznfoNouPKA7CisqdNzutojxMYsQY4gY13KoHoNTChGEjsbWP1812JUyZz2wKWg83W1uMQipkKKtpTtin",
  "key7": "3KsceZAaE4c7gUwYDsFR8fQsAgRX828C6HPS2qBT2Suu9auycUE6pGmC1FmvcyyHB7qBh7wX1ndReUcF3CJqT2Xp",
  "key8": "4u778R6okgoipxmytFvJmWDNGFhR7CYHRdGgc9jHde7EYEodoWhi22x2nUVsY6cJrQTc1aVuqwX7JmHjP6UJT4Jo",
  "key9": "3Zfb4KhR9WWxUfbB2PTRSc5qJC4z5ifXBXtsTNzm3DxeALD2Ge2p1twbTsUMbnvEfKcUuKcfTaKib5eK1GwBPd6X",
  "key10": "2aj3jU9313Eafe7xuWR5HnG2YKKsECSwZVHDz3LNBPgtVonEk26vneQtn5dRx26mk4dQLgLNnR1DcccY6GN3WoTe",
  "key11": "61Yyvc16oCFLEG3n9Pb5AXogCyHi2PvEm98qf3Ad3XajKSvxk1vjbxg6PdjQikbP8dewRv5sNUL5oRxYUxqBSUdY",
  "key12": "2RKBfLCvqAfrfL3JFMAiUWBgQxo1mXY7JaqrrCpLbt8FSK9UnL9rojarDB1gfgspFtVsJKxtz6hvqvPTNEv8Su3Y",
  "key13": "5TuCmbMjbrrsHaHXaT9yHqEqnLNdCqE5zDvoUuRQSEngCE3ARmULyhjfoUqzuCBuCsdRCBpKgSvCup8r3Y8ec8WZ",
  "key14": "npwzWUtsvwJezDtm6o9QaY4ZM2PrABDoLpEFUwYk679DeVTBjaFanuKG9wo7ZJ3xA9kw6okxE8Xn7fsfU1gYDZV",
  "key15": "3cV6wRwzM4YzNFbcYZHGWFF7DcV2Z9xQHHRFfJCp3v7TYJSqHNDAV2AeM3v2zJDSFJ7rVm7TmmRyA3GL39ggHrmz",
  "key16": "2ujAdqmDzacTjLJasBuxeM68aUvmUhEvGtDsr3GjRE86XeH5fPcXfxrvMp79nR982uoozR4hKyRZNNXpTWAitJhr",
  "key17": "2zQWrSxQstafE7STCNEkDKzc4ZbSH5dqoiiCiUioruq6kH3DhNDMVgz9oDPdBpz4cMFGULmwDckg96LKiVS6Kb6U",
  "key18": "3uwL6a7GxDeojsX3gHjyS9SMx4EPxeLJsTTZnbf3gsQFMrHFb287xnyKcfmtme8fGAtEXFJRApV24J5ApR1AJSLw",
  "key19": "3jpW9KVUPzScR4ZjsLtmAryNWV2AA9WdF3Mco38T5B1SJiEviC87NHttZphJugZBB3fba1qMkirKLmtfTiEKtDte",
  "key20": "2m41uyW22uPAY3Qyv3jQKqR43ezATucMQVbMAjVV3HJY5J43xzpnZNtwt5kQfKkFtsewNFExwKcw1yNhSBx8gAMW",
  "key21": "4qeBjSiz4RiseWeRAfavcctKcwC1C5oFNodmvqBKyafaQEBh2hdstr3X6m4WpffDkoqgyLbQfN5DXZhGSw3Te8s9",
  "key22": "3NNRERR8YRmeFFRBegxZVM5kwCTeT4yWQV2VHojps8amHk3ZucnQS5V4Bu2MJN8aWReyciVqmDn6wKoxfCxVU3DC",
  "key23": "4WeVnDL4vWrqhuxkzRdvW98ebm2rPProYyH41jACKQTXMetj3hAW2v3akRBMzNo3JGkwZQ1wNbfSsPjyYBpeB3KZ",
  "key24": "4E95K3d7GWW4LaoUXAx84movD8GCJsYh98wqHRZ2A5ibQrdidtdggFN56JJj8eCZN2X1c3KVgm1G3DbyotVmtBEj",
  "key25": "2LKfKe94aj2AqffTamy4R384feWvzhBD7QNw958yK2iJoMT1Tp7TgXVz8782KGLaG2vGDQgANYWvb68bMs1PFqCv",
  "key26": "28PUrk1i1kwztxkj6oFfGZDdwuppTrLvHdKnKK4VSt4hriaHw1GrKyn2XGQZue11XubpohmUD9BjN7ziV7qUUF8c",
  "key27": "61xiyA6NGVmD625Wn3F1ixpR5iucBng2cWLwoV5fPfot3ubNaHvQpMuQbzcTWwdDfQYbt8UaqKuWzjA83wvFB9TV",
  "key28": "4WwdmqXm7Qmx9A75wF3eAGXTqZAz3VBuWQAPc3drSqnmai9zjhirqQWkRioAXw3TwctuLCGUdj5u7safP8d4EXfG",
  "key29": "3xftjEXoGv5VZ4NAjnYrGYYsDgk9bp3gkDjx3Xmndms6Z7nsPATVUfcCPAmMB2g5PyqC7mnKP8WkgARmweYaspXg",
  "key30": "2wiLuv7WQcwgaof78WU6FTmuYrSdQQPWUEJWgB3GiDGF8mQqBurtH9dBYsKwPcZ7CXFLsFF29SNC98ipm91n1KgV",
  "key31": "3FMQ8HHjMhRW7ZL8DX47dhwxjPjNNSrDRJo6M4eTrGHLyBTtwkuokkvhB4xq4GMLkpoipwW2T6xgQ8SH98pUGDXS",
  "key32": "2t6krAUhpAn4uycLaFwpqsby668wjX2ky57GMzG4gD8sMeFWbH1nZjBRCth3fdb6eY1VjSDfiiC5R6wzmr1W2yFJ",
  "key33": "9XHTyFemcFWRN7Ue9new7jgbPFPeG61k29qw7BMPi9yWkxkFg5CS6i5YHCMyKE6neVBDT8Fh96MiU19ejQQDSJD",
  "key34": "62WKsp6NUiBrdMWSPV2RNSiQDFBAXeHwibCy2MQTu1zMsxWDGzfQvBCp13xHdrXBzJDFEWQcHtYt6RCgqWkvYq1g",
  "key35": "5tAyuUxTqUh9fCR2sAfZEuEqwayvoyEhyLjK8rEGyfDAJLaYDvVQSHLNw2iQzy6BEiHqZds3DNkfMeeF6ENrymVc",
  "key36": "UsaFxZLT24rKjjbFnD9gLHDb3YCivP1rtWXNEXge7s7sVmsQnZWibDud5MFb5HRoHkfSmHLRPGfZ4f9Ss8Xmv8i",
  "key37": "2fo1RXxVY9MHygrr7KeqorevzukuV6bUY5Km5zwSVow8hnjpMYSEr5PuW75MBRi3TURaChK5L7oinGrW9iQnUVCh",
  "key38": "fh8dQxnJ69f6ruDNN5boQRBxL5hqQtiYyEbjbvaped1pfKc6kd9ZiBmcnEUh3Bvfp7fJ5q65kZjxzz8TeZNwNXF",
  "key39": "Rugmt1A4vZmfWwLeZBZDxz518zJ5BF7dZ9bUbZLQLMeMptF9bxE5YhCvPq3rXZEcTESYsKNcWZhmPcxWShBUywu",
  "key40": "35TmctRWM5AyNTN2GGhJenJt6EkB8DzW6mi9w5eyzhdJCB9P5zwZPUnPTSC2QaMDbmK9QDQRi9wuSyoV5wfuCVoh",
  "key41": "3Mk9Z9yb3Gb3FJpNjCJweQpRh1Da8JEAzrP2CyGkUNvRm1QveFWibxRVTuUyWoamKEy4NxCva9vaFTSJAtfLDgAH"
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
