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
    "2sbRYhAewbxEU6BVzLaif6L2meEUXJtjQB9ys1RkR5ZuoxrEzk321zDvUrWSuLcstbguDb93BGKPNr8ai6xPk4FL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GsERpNX4ufHDbDkKnWGxFNvaWffHcEyrLu2F1z6SCg9Y6WQddPo51nRNLqrTTgB5mNGqJ1xz6SZBoaNbjWm1zk",
  "key1": "5hWj661f3Vgf33RErjq6sses5nXX8LuVAeu9iYgnPVKkAfocqFGB4g7LXBVoGYxKWHVEMeCavB4fkTxgbeNWeigD",
  "key2": "DCrQxxEbGhMJg859Mecxo188SUpXwZXSRHqknCV9hpeAZQZ7B1CX9zcCxSBaUoZHjttEfjfsd2G1RvpYQ65aqhG",
  "key3": "4gbwGHemFAFUEces6abKgo19V2gyUAfnJHfnPPVjVRLm2oJ1KBnWjYsWuh2LnSxfSWphxfvnjEehoqVdfmBPa2Uo",
  "key4": "4VJ295t5GArgqN2k93TUm94V5zGrvWmEPdzx1UuJrw2GjCEfqyH8vMyCcpPvMy6viL9zH4WwSvFqE3uJ6SbLoiQu",
  "key5": "wfZMMrWViCvSgHh2Qk3EkcCXTSnDXAmAGE1GoNWZQMkQ5ugC2WxGqBPFF7bVwtztQtQggfT5ECtswWdXzEYA1pY",
  "key6": "n1kvkSm2VBefV4M5hbvCuf8s6MPqBzRAFndbwEGyv3hmxHBAVfkth5i7RisHkpwpqAB1fvzx67CA5etoTiGzcBj",
  "key7": "2FFgyq4ECMWsem37LWnbRnQXAbbkMAtmtavSiXAyBgaCJcR8qLmBEbYYrUYTn9qSaHPtA1bPe6rbQxBeTWjW8zmx",
  "key8": "91vQnyEeij5XjWjW8S7JFJz2yrAZZGTge4jQbPnWHQdz5oTGBEyj5sJY7ie5eK3VVbw173L52SrENSsc3nLjony",
  "key9": "5rT2suDRY35EAQ1ZF1sxBdtr4iU6GjBcmv9ngmEkxunPxWtSLkFZu6skhqwbWXzczL7Y7JAZLnSZxWb1GXHXfvxU",
  "key10": "32HhafiJjYdyGMcYfXK8par5h1Vv8arpfdjfEBfHNrEpiiXyXeG5Rau5Xmhes5a7Jap6apcqxGTALx9BVQzZPYYp",
  "key11": "uiN7vLgB1jHVBmVq3FH8bdxEJxmWccNg2AyDZmFH8nReW2DahsJovsptuRv6snNtYqhzNeDNDiKPcHNrCnSkjkG",
  "key12": "2kjQMr2GDgWVNpszDQVmoDrcF9xv7JNck6omxEF1iotevRVVxsJTcG27RNJzEw3FoLCSozWTmmuinarVWWS2dukq",
  "key13": "4AhT3y37NKuF8ExxSQjKzhnsSa6X8xA81dTstdAMwBSYj8z2bgCsWpGopHHNJgfrba69AAaSCKUVuzhtEPr6GQQQ",
  "key14": "43mNgF43F19eS5HKNh52VFdVjikwdSJUkLdLUS6TYJr1H28RPyfj9QNnE7Q4qNLvrpKfNgPyioZA2dBjLXYKTity",
  "key15": "bMZNHLXYmorWd9tduCUMX5oYaisWXPhgY1iLTfBrkKozVnAgaSFnmVhkLXF1w5iEZGP2xHF4GfVRCaqG5HhsCWt",
  "key16": "2Uuu1d6QF1YF83P8EZDCtXuUPkRBjG69sHU1ePhnDLFHytdvoMmkjgNGiMDtxxjGXHji2QfnHXZhy9YJmyhbm6r5",
  "key17": "F8NN3pnqTpySwaYwmMmAgFgWa6Pmi1XJgH4KbCzG3vcsWh3hLTWLBUysByysTsyXv2owUArNVK35ae46iMaKtLT",
  "key18": "3u5TuwQm1DTtv49rX72cCnjz1dfPqD4BDcVJHPhkDW5igszDaWf1yz5t23j3FEBncAAnjUHRAxtuJdPPXTfpGwHP",
  "key19": "4ARRJUV5eSndrHMijb92oNFv1YD73PKrw9FkUE71Chtm9t975XmARMRCbtfeCpbvCkWMHPyv36ue76YNEH1yVADr",
  "key20": "cyVzKhWNTevKUEp4DCmbF2zTqCP9bPDJKYnkWqhMHNH6n6UXKz6djARRzeJe24JdFDzrin3jBD4r7UQxRy9VK7S",
  "key21": "3pVNv3oRgnMsmP6DMjsyEvMLjaQ8mCodPhcaf8dKEGzWV8cSDbcgdJHyRZYFhunZfyrgaRCUFvAtSHP3n9krvyhs",
  "key22": "3nFfrn8SBhhZUto2WDxsawdSvHP2bd3h6Tzj41F97DmZkKyi1xuCVLd53ynM6vBT1QuWmar1umtV9bZr4CRDZ87s",
  "key23": "iFiYgcSkevNv2RVXuzwi8oJE4DSGphkTnZbot8HgFzrn5g4dbS4mRe3t2NaqvPUnSuwkJ93x2QhpCGDWQZrk8xj",
  "key24": "YXdxMjRxq1NL1rzxLrZSZKa8DbwLfPumx8MDk8GGR7RhA5ip5GooLCujVVYb48JVMysn2sxyrNxJMrMfMiQT6jD",
  "key25": "64T8J12pHsvajEitp2AfAeNFLmxYEzX88snvzqqNkwx42Nbib2Q4enPHvtwp94CWykL4i5nzaY82vDekY4ZAMENS",
  "key26": "3gKNfpjdgdhRQn4tq3awzitN321W4wgsGmAnkdScEmvkuSHShB6vN77tYsiir85iBRKtVQFMWHyYPbggYfEXNHYy",
  "key27": "NuycjZkKMGPVXiRYm79L7hyyMejvtB41ANmjUsKHD1MMTenhZqFPwnSt7exHR5xisqaFGXXEh5HS386bnP987kD",
  "key28": "3SBXJZZDmmU1JPkzjxWQZomZxVcCNEAja753KpsntLuN7u3zdj4TgbVtN9tAYhJaWrTnKAm69nC4A7KSPbEHG1h3",
  "key29": "2AesB9Qpbd6MvRp1kSfGihYVEst7oTzR9G4benv9GD4V2eFH44Q1m9WDEWhi72M1UhrQTLG8xaRTg58kA7HxzJbN",
  "key30": "36zRgKFZi25g2fwNDcRSWHWShbMmEsi1ZNDdqPM2fBdiTmmh3bj7hEGGLTmeuXtoYngoZjtevsxxAUJGGZmjXkgd",
  "key31": "2w4goc1DoDiRUAynSjPdKoDpt6FYCpUwPk7389hFJu9HU6P4KRbJe7XNYJdYDk9PsmQD392BWMF9DRQWsuWSZuVF",
  "key32": "28W1ty9fVNvmmpvbZaBYqP599i2NV5xL1YqEhRMVDV4h2W2SdyxhKPGM3dgt4tXaHBZUS4o3jdwQo7hFVQFGKybU",
  "key33": "3cUPcc1mqaG77uX7c65w77S6dkoruxuPsLPJE9LTKYwePSBaEJdtFQL2bYmxTh7cRLQKYLKEmpnCgR9io61aRv1n",
  "key34": "2xfkfcafLR6aJgaug2EBdqNDzV7nEKzYW4WxM26jdPNxTfWEyXyytRvJRZA9U93JTqbtkCTybPYvQoXM9dvwLJZz",
  "key35": "64htLUBBfE7NKQ3zu3KQayRchcY47bDjzetqXqdquoMjutoYepT9KavjMqjbfDzVXBkiE7wHVHVB9rtZu7nyQW1X",
  "key36": "3YLbtDy6GgdMwox15R6Lih842afqnMJKS8eW5CyxwxufVupUq3WzaFtvEuRQ84ZgGHS6wqssMQiLY9WDewzrzhef",
  "key37": "4xnzPnnz3E3kcKE8KbhXtHBJDnZVKnW61wx1yXZ8Y7nRcj5vHzz4oHnWAtNSHyQaHJrmHqY8kB5oFfUrN5AP9Rt4",
  "key38": "5EpCC3P8n9GfsggipUCj7Lensf4PKeaqmuvm1wgFJJVywPsNcTrRyYifdMajtFwqGzfUKdXxN9HWWvRDBe3My1Re",
  "key39": "WJ2UJZ8Msj7Pw2PdpGUdxbvm7PghwLKFrg5zQrzhG8RkTWf1azdTuPiRh9zwUYsqTCxTWMeuUrt5NzWhbpfZsPK",
  "key40": "B24sAPyg6ecNtvmijw18rKTMKTuhBgL3RA6VueF9TDhTjNyeWtChXMihNGa3rH72aoc7YzVwYWQVPi9iUX6d4Vo",
  "key41": "3g4wpw2cgT9yiNJTHTpvbHAbJeVBVT3S4GgeXZzansVanV8DsYi4HLa5WBL68sBNHputU6ecBUXCCNaSeqPpr7VQ",
  "key42": "51kNyQc9tgFR4xQFg2BArPPL9bFrU3gVCoLp3jVHVzRLkvjJ6FgcB3UmthxESNh2uu6pckUjiUb8XjSmN5JNG4jp",
  "key43": "48nmWiFtAxVFYSVyUCbwL5vc6to7WK3TXSXxJVYEfY55fNrybxcB1CWoRq9RJ93iRcHFZ7XTyYnpKNr1Dy5tZ1Nb",
  "key44": "213ZzNCTknegSyQmv5BLozNou8qaF5yzGv3D7cA2wUSUpFv9kuLoZWuV77w9CjP7GdAeH17urq2uubjCCAP6m7Bj"
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
