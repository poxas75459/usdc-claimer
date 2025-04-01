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
    "2QXahtzLMxRE6ZrNyeZRj2hocnWL9r3VvyLAYuDJeoXaf1DdDyyW7DuXQ8cDQpFAnrjbLXNgrgdj1q3UMZBzytZ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YKrXWHciWVuQbz3SAZhgPuVP7g76b3iB5eGZnQw83fi8qwYnozvjVGDJ3exS3uhiY27sPFpdPq3jvHD8XfxF5vr",
  "key1": "JuKxGYaEe5hekwqtTCedU6cRnwYcG7nKZicM3yWB87W59cuXWP4KU41wRkvQy7a9oD5DZCidPPnZV6unfioQpLa",
  "key2": "56aHdia812A23nMeJtEwK8yXnvATvTcGGQmHLU4KkoxcxLamwvG7mernif9evVufYFej2f9pYowMLRvg3ytsX6zk",
  "key3": "4dxGgykgYKuCZHFZG6wPmhkCSgpPG4stDtY7sb1m6FXYQYVNF7EoeqVGRAPKF7CF1iL6Z7UPdNW7wjjLm72NRUcz",
  "key4": "35e9zpb6Tm42kQPswobb2RsEJvppgZGoeZUEhEUM19cAP4fpRLrzj4QLChFmMiwd93LFzAVjG3RDMCMXXhTbdpei",
  "key5": "3BMSdKS6b2R683Q17b14grbvEqaBiUT5AuAsswk8zSAJDsCMEtV722tkTEPkNMaEMQeSFdpRsaWm67T4VRNk4c1q",
  "key6": "2B37RJTYaGtFGYe2UryqairBgTwooAbKo3MxTam9fhbyGfnfuPzTTMJxgwbuf1ydP6NatPjSRCn7PJx2vWxx8H3d",
  "key7": "Yqn5PQ7PJXKXPRDgRdH2V64uSxZhcaewTJuy6aBd8fs3oZpmqBS6SdCVgJXHygXh7bRPGhu2TXC47gFM4vecxJh",
  "key8": "o3oLdtDuBUKCYpuLGhzj6dxi3ZhNfhcenvD2T326YNKSns8YU4rPw67BA7VmpKeVaNpYfm9t79VmU6pPAys1DPx",
  "key9": "4EihddmV7hdoAJo3gmDMdiV9RRPejyAmKM6eTXB2WqSKqwqHkQr4xNqEEhuwt4WDKUTpDbfGYNbuaSnvYouCLyxD",
  "key10": "pC6e6NTAfiZUUTDdMy5WyMNgwg7PWN7rf2tg54Y8rMn6ziTgDJqgk2RPoeTyowgVVfGm89j99bspQHGfXzrLp8F",
  "key11": "zpdFMP7dQVmpzFkN6dYxDb7dtKPjnLbkJsfyxkkYfPz7MFFQtbxT3NeLFJPHDcMH3vxvLanoS9Lg6yn2PHvCMaY",
  "key12": "XQ1VJi5FromdtB7WLng622utqEVJQ8H4BaLfb8ZLTUFexJqybEqgMDqKaCrzooz2kTTdXq51mJfsWaLUFzVUsFv",
  "key13": "5xHU2D8odNEJepPrFGAsk2pQzcJKNusiPsS4g1DHK79Khi1u5ENsX31uyjWWfBbwc9egncPZbYFErknP5NJ6Sasn",
  "key14": "2E2YA48nBbWKnXtdoa7dYV8GtkWNfgvZz6PweX4HexnTCaQja28PXs8DXV2vQcMPPu4ojHNnqJQD1tXm9gxSYhfQ",
  "key15": "3KvYxhtRSB8YLUE6yrAwcWcCrbXeUEKhddDVuxobjbhSGs6HdvMzpWHczKin9N9swrwQUkJin1YRAcLvqzuFqdWF",
  "key16": "5qEmffVCw7jwKAp75dG2ymr4snDrB94eQpnC5bakafMLj2ttQnRu6SouG1FsRJoEMozD6DutHKgqKj6wfsoKtyHq",
  "key17": "3wxKnMZNoCii8Yjwvse39quwJ9aWs7cUx9jqm4yeqvvVQ4m1rU6vBmyDpiZATHaByhgEBMnVbvFea3thoA68BgLj",
  "key18": "3zifSpMFDDNgpVLdhUAa9ZbpW3B34cuTeSrWz9meGSwb3wyZWgEA4vkxWzDuCFJpeAAqR5i1zeNQfyqsAuTYB5ED",
  "key19": "5euhLgAwkyWhTJkG1xtMJ5i4Yz4M8KnvWQCp63WXq1x3vY71Z9gog4snD9G3Ry5yX2ocyjtD7MFY8hPwb9bgNCQ5",
  "key20": "32LHpxA4vYAc5BKNQt2bz3kGd68dQ1QREUYXTbcNBvEKmqZ5zedGyF7oyKrZDcFsa8zpE3taYi28Cydrp98cHrVE",
  "key21": "xbC9RJHAcLCeE1uFyUon7VzjuA4ASHzzZFPHCBeYVjCrEVpCAMF6pgfWhayeBWbHNZwAHBfsPjDUCm6A72Ypqtc",
  "key22": "7Z3QQCWUdnYM7mnLShgACT9ocLyQQh9Uf723tKnrgbUzJGDPYGCbcvsMLEdRkac4mZ1bUU8eWp1GSKE1asLpEsa",
  "key23": "2wiyeUkJRm6JGZM7EK9T5ZPprec71VVn36bfV88k4epyzh2Mp8wySkatTGgswksj3afpqu7KxKYez9E7NxLs6zuz",
  "key24": "3JZoRVE3WLRD94hUCyYqiFQ7idcDQa7CQCuWhihKNREDdK2uws4gPcLTZuK9yQ7uGLpkXQ33YHiuYzurQkr45J3j",
  "key25": "3p3wYtfmiSjEwVC1qhpVCFD8icPr5oPCC5kvMZXrK68p5EdppRNfrt9wAzqassN1SvBBETxGaMReGckyYium4WxH",
  "key26": "2hNFpZSQciN62S93nLZ1FruqVujHkGuhhkLDxYbfWZ1jKBLEkMHc9s4ZqusKZtyafoDp3X7VhhEB38sLZCW1L4m9",
  "key27": "5sfLtiuTbyiYdbkyso7wNjf9m9q7eZGhTatvDE1BnJWwwA8Wbr692EkeP1BTZujEd81fYyoHQEpo4SurCxoTLAf",
  "key28": "375kQbckeKbztbLTnrHUmYee8BVjnPTczYSgAzfQicw1nnHZCJgTqUYVaT3Dy6VGiXSk5zMr3Wt1RViZa1HY5dWs",
  "key29": "3wTRTQvkHDYk9m2kyjNtXYhrHAAhNd1iAVb6SQ1V39RyfCp2gMyxVD4ftQghkr1nvweBaWjrxd1nd9gwLKrscZrM",
  "key30": "5KL933vsN4WWcao9zgrCECAN9DaWxdgerbTgdqwoVgUMJFuuS2UA2LaKB6r2XJRebHkpgwYNm48xJJ7zQjxM6aGL",
  "key31": "53stX7yy1RUaAq5e4pAYy46aUUuaJ9HRRqZ6NAfyhujmoGqT2xB4SP6WuQftyhH2itiyQwEUaBJsoCc3AYPyRA8x",
  "key32": "zyzsD57NUtrXUdLF2bxemf76RFhEWNV4f9y8vzxrjt9x8fT5TMdnNSyJqZZGAiZs6kCg1NfXT6KnTd2oRxdRGPA",
  "key33": "2veNDCPYiXiSAF7CgZozCHa2RgWkvnpkZjBJZuDK7NSsqbhrHJrjr1YCrczcn2afvwBrgBghx2gTHbGsEtwyJQPR",
  "key34": "5syEzj8HeTMaTpTg6EbK1TmhbWjeNe7DaxrvwpF9o4Qp3mD3bsvXMVQkS5dWqRndi63LyAqYNBthLWn9tFwkafMD",
  "key35": "2yXPXx3ZrzTAe12vYpFrgmRsJv1L5NW5tGcrxvvobdqxA2np3Z1nj2HHYgVheHH4Ju3b6xk1qHTxbRnHm3h6rs86",
  "key36": "2NDj3JeGR1da4JNAfWUbUtZmEeENJvVmYjkRCoMSux1gvzsgXCdw6RsHqE4SVkiRfGpR6k1DLzjkpM9WpGvdsCsM",
  "key37": "3cNAWhq7pukcwo6uiVZm4wpPHn6KFuZ2h5GWRTqzbRqxT3APQDPsb33t1ZF6nN35kStkVdxXNfPmx17V4sYA2S9N",
  "key38": "5xqvTVeCVbQHdNcHAb25oug2fHDEzdQDHpegqU9QVR3Y6CDsNFHCufdvgZQJCY7t3ryQazi1gq53kwLecXpayChv",
  "key39": "bJXWNAQTPzAJd8yoFsqdaCCVCaMR14dFPjaNzWfyEBGZUjF8PKdUZCFRbz4ZuLSZfUDzsiCCEg6CkJe6u6jP83R",
  "key40": "2Fc9r1HhXLZnfZPYbvvYbv3UUDYUQYikSJYJouarAKBQE7G1wpvUGL3aJMtfmxNDw3SGYk8LBqK5rchmrjYjzkGJ"
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
