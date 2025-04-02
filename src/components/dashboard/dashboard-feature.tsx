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
    "oGSW3Zreoo2gSycbzPigk3wtKaVxghzTHu1CfEifySmE1zj4XHKNgckMVNwmaqPkXjrjpJaVMBmZfE38pgYQmA4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WWVHtiEx1Uw1wemXpvNaAJwnUJ655NrD5JyBXpRmhzPo5oy4j3iE3y7R4aBPabtM7KEDtndYa6FFMnJ9BSoEFFR",
  "key1": "5Hpd9vaLTyQYLixwhFNyMFbwvyX7AcyUQ49QEZY7VwyV4GgcAxQ5CQuiEWxaYEwPQUr2BLM3tqoDFVW6bztpEr7M",
  "key2": "3RLigRBa72FSdYdcDshkcvVibA1FP8tKwym4YiYk9XtJq3e22vDW3jZtcQcLMMZj3q5xJLDkuZQYrXfSrBkLqdgH",
  "key3": "4M3XDuLytGdVoHGYABEaRcpXsM2zU7KnajmFbhTnTu1NYN9psE5EiC9SpqWB6PCRdxsGsc4X2w7mgrcAANhRcfUZ",
  "key4": "5zpPE73yVawu1xW4JsttMeU5ehmQcj7KLSSwSxc4U9PVddjqUM8xZbMMuEVJMYEnpF5zzUSXp7sC5mwLTuFFEYty",
  "key5": "5gcvBPevsky1eCYQawb62bLToRgFAQxroG3nJ4i9ZRP2T3t413c1xV9JTdyw1NKbDpep7Ajn6dPE4ZZcTiqvVLQW",
  "key6": "4eBoTyB4Nne1i5URFH8DWr96syTT7GehriL8HzWCfGuFK4uS45B4HYTd3BrwujSuFMAFkKsB2PiytBYejRBy85UX",
  "key7": "4HFFw2zQEzER2MsiBhK7aWBe11Bk4pGtrMHKYxtTXySzB227HZSZ44qicSrXyUwCm4rS3f1qJvaNL1GWUQzpp7Aq",
  "key8": "2bHeMjhL8HUNmQDJmZo6vRVBfvQugy7Z52gCnLEMEu3wPRiMjJDnacJ6zB8t2g2gPp9kLbc7KZxp3fiBcTHr77DT",
  "key9": "5yqfMTGw7hDNeKxQnBwmiwBCTW6d9aav1nSnP4HA5xTWabB3TcSXi5SoJ4qBk7NDZHjZNeUBjokvgXYaJHtWQS3B",
  "key10": "5ZmjB3FyYSwRJ9G6VDjvCGnt2L4hW95aUs6mkbGSQfbSDzTeshmhx1qdiyNGttFdirC4jjmZTC84gM7HwjYEC5uM",
  "key11": "5qe74kThLHUd6C4qXfHTiMYRoFA8aWfkmuL19DdehHwHXfF2U8QWQQYh5uPnLP9dkziN8ZyjYVgSsNouRm3fg2XP",
  "key12": "3SJjvSr6RBAes6pBGyh4xarEbpWDcJx6fsMvpxoFfnYKsU732gck2AbwTuZiRVHc2WwKoQudQeaLckJYZ7BT6ujp",
  "key13": "Q6spidYkSokNGYLjwTp7PA8VtL5Dwpg2e21zwT5vdDtgKecC6coyX1HmYLBihaZ569KBE1Pn5tCfjX6SS8wXx3V",
  "key14": "dKtJebopidyKPHs4EbY5RwfcKctLg8dPCorturJF3P5ppnBAhNQKA2ZoFxsgudzezfW27ZnNgHKeprwq4PDRzfC",
  "key15": "5Vp7ZVfrPGxFRt4TRf1vEfchsbApg9jvmBhZMfz4r43KHijevRGBC1b3vDhek9Rgcj1h2kM7JbHizpJ6ZmsAjYCQ",
  "key16": "64omUnetRt5DrdzsYJcP4CJsUno5hXoJpfvEv4nPyfj3jDYQWHoi8D7E4LaXbtzciom27jSyHBXG3Tm4BVukMcpE",
  "key17": "2PQ8At1SN6Xajn5iK9k44vQTnpA9cmpUdSWuS2sEMPyFr7vyZbrmAv49jNXxdhWZuEqdbp4wLS7nY5sU2H75PiNb",
  "key18": "2sEGVfjiV6DG6wLevjfGYPoZ8YSvv2MQZbLLL8yhZ33QXcsHAiv2UGUYvXW9kxu86yFNkB4gzTtcYD5J1do3jjNZ",
  "key19": "5TFAb7DxfeoTmfJdLR6Fyg6pD8EKSNJBreRifisJSzsjDMMsd7KF3PyQueXtZBNq4sUaTiXTDaHhMtrMUpqY3pm3",
  "key20": "2B7NEGHj6VCsJjBrTtSTRNuUR1L2fLUWxDnJhuV6Z8wVjyiZj7KcerdvUVtZ8PSoVP1i9xEhYBw9TgfpZiR1ZmZU",
  "key21": "3AXF1iKZYhGAkoWb6GLVLwFjbRoJHgbhFKGM8gMoLyJfv3KXqSfJUHQJfjRW39zdBVApHzAK5bprV4Vtv6xR7PHE",
  "key22": "2PLS4LRpkBQVrEGzJug5HzPt6SZFijaTdpYxrFZ3p7KJ4nzCG5Ssyo6knVfkf8S7SAFqXY7p93vbQmFj5ytH3wyh",
  "key23": "3oifuqnk62jwyS7huCqQgrcjTcRFU3Ad6kbWCQJK9ArpW9vYUCpJ8Q8Mx2i7MYWTSXUzfHTgCb6R2RZCrZ5C96Af",
  "key24": "PpiwasKSxiZXmd8aEgcJuWLPVVVXdzEktDrA8YeacEL7uEJRvvN7PuJDeG6gncfxmRqRunVhghboR7ECNCdctKg",
  "key25": "2L26C5mk8CpfuLgHWvrKw2EjPY8CcNi4x6f1oDuke4WJQhuCrYtoFWMC2UFMarQNcqLTvsHhkFWdnPUTsRtZRd1w",
  "key26": "5yNwE7aJxpFcsLbq4jHxdhc5g8cU4F1XAqGyGaSVLgFdaR5xt9TSXA8RXSxuirXcFJJYjT19ZQumrYiMLc4n2Ng6",
  "key27": "4qmt1oKrzvP4q1mVYE2o3w1nCnADXqTfBkUJZNSMXAMQi4GdMb5uBCyj3AnPsfoA9pRLJVh6yLtFjvP3bR9XQxRv",
  "key28": "22F5FNQGGzojZHakcT75GKKhha5C7wg9tGe5tfoxXhknz3xAUYmff96qtq2Ua32o6i3YwRp3CDCoLmM4M3VexSzw",
  "key29": "3LHndNg9MWVh5WwKms5e1z5h3RaNBCJ1o699KyzeRx2xxEWDLkEpXDekf5EqCebPANcKKRFcVd3mwjhE6a7Zhc4q",
  "key30": "4cXVQfRXDK3Vrxuzun6Xne7CK5ViMXc7eQDjeLy2YQ37qy7QRJS4c4guuo2UvmsA7pfz8HUviMYoMDJoquKQvudC",
  "key31": "2RBNxLxxPfPVoLxBuhCk8EQcWFNAb7BNBGJJnCFtjG9bh7mYpEUjQxdfvcVznB1m2D7aeZ3vdVZLGywjY9zbMMd8",
  "key32": "5YDAHkFL7uy2XNELp62632Lhw3LaJpRe8WwDMYDjujAqzpoHtQ3m4GXYuwL91YA4biBNgp7zgVxFB8pugTVKpVi5",
  "key33": "4EV64XUGgsiyFyjssDvw3Ui5oKdYP4Zj8D1QoN2mGejk9MeKFcMobHfxtMhSZX3A4tmphoupqW1s3TycxpXZQVeG",
  "key34": "voWGS3M968LGS8Vse1LMijv9c8RqBXJRRSHWBzZaAug9KggpdkBBGsYZJ3TAtnXCSsp8Y3FheCriHnDiQfJQ4BU",
  "key35": "MwnrUFw5thfWRG5Lic8z5JLLwj4xsx4rhHLZvUwDMhY2kHC8UBiPMWZ9CmqpRB71Qo6CLqa3JJfeU6KtngLkAmz",
  "key36": "VvEsKRE6HoqpLfXdK3gRDMWW7vA5GSucdroeMzaEdDSGstWmAQ55TVsqydgXKUEQdjnWhzEgMHZoFdq3Zf5G6ne",
  "key37": "5FPW9H4XsQ3avYjwmByokUTPCqmrG2oJ2cSZvFkEnbebhJUqTJxpxrm4GEhy6Lo2iU86QKaFJdsLT4xoV7pWc4Rx",
  "key38": "53s9awowqpB1yiRWpbQhkwUTgTuvNzkNqERTjEbGxzAdkTbX9U61NufWp5a6hwSf674KsbyGEbvStevZNtYpP3iZ",
  "key39": "41FimkZ4fZjUTawFc3ATjDDzU8E6ZzNyhwwWzezWaUyyf5emP8f4LJ4j57qbb5bjmwSWWh7vrtVoTvHYmXm3dv3x",
  "key40": "2TTfYBKuvFefRicGxXnuCy83kMLDLkTfzWMNsSvmSqJUPhRouAx7iyDFFdSD6oAbes4eQRsy9KV5z9H2n9Tb973C",
  "key41": "4xVBYZSvYhayF4SekLdv2e3jXmPFLHjNr717aqkPpVFo5dxu2dtRqJdRN94SnFMmrcYBN9ge39fjEVm3sVyoaLHQ",
  "key42": "2CdUi8WK4LnhKrWez56FT7vhL4ZZMMD9gFASUbj9wR4eSomG5x1NxkxP3t8wQ2MhYnisfjySwFjXTqe34vw5kJWS",
  "key43": "2wXLfJY5PNNSXC7XkxrzpFkjqUsmyDrtCZAwGumpC8LAkbVJRWSUfKP4CEyac4aQTxdTnACBWWByj7USup7achNn",
  "key44": "2RKsba8YZgsrcdK4dubQaygDU18NBf7wo7VKeDo5fRuzevHm2CJ5y5pbDtY3jKdaCx9sv2dHkwuCXzvEJwLU6qm1",
  "key45": "2sGS8j2AtPJy7ycMJkRkNe3okLDFoGKbphkP3LxYp1FEwNP2YVhw6mqNjimMvthrVJPRGPQU5QiKhqeCrqTz9hBk",
  "key46": "cNd8UxCvYDJ9cWphi9VXKkpRETq7sXJoWX2n4MQ9XqbiQ3i8arT12gNjbLp9sH2SteWrzshECztfm7N977xhozU",
  "key47": "cBHiLzeaavThKjnQWEvxn9ZLoWF1i3F4bVyYJMHjPhMmycxeaDKCa6GpjZeS1FgpAWXec5xqSpcogqSKWspYUoy"
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
