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
    "3vbUGCRJj8ivXDPTV4saNYGq4qtyC6chy2u1LXX9JuuvoFW9ggwrLtMGMoXJuuDsQkWVKfKNjRRLKTqgb17kYnxE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VppJtvNRhZERchTxaz4uTgkotWmNXVjcDNnBVtxp4deLS5WVHzHS8YcMJZ14fCuogXGzDsaqv6rC4R8m3N3znWS",
  "key1": "qsko4n4RSGxyqPvkkKqoA3RJaNbjrqwfzD1eCu9FniMU7Ft4p7uyF9egNqWtzqHXscdjw64DKyZGk16VSPkb3Ya",
  "key2": "4nF7uQhchP95hrxWPgQdf2pwbn4GE97agz5rv1ZZdBnY2V5GSCSaevkHp8JX14keWU7jxmYFJCJGAcyKq5cHbg6v",
  "key3": "4x5LHwyq48qcFebCmgtCxY7p6kRZ71RR5e6PBg6mqC3TDgBdcSuV8aCvdiKYNfRR3dqNJTPCehiEipM1ZPnDvXSH",
  "key4": "2CGdU4MUZoNLQXTFWiNsYr579E7TBehQUUP9W5PPWdPzWApqeiSBQ6AdFjJXeXASVcqs26kkK51Atkc4HP9Uh6rk",
  "key5": "5GwKfHBGzAU7fMXj7kbnzhgo9XbJJJskQiB1ZCnLnDQpfxfgXdCFaaGv5YFPQfGqTYTiDaoGSYQy6iVYxLPwxwWJ",
  "key6": "2wafQKrCZwQ5LLwxswme1e8ahj7DvAp3BeXisxU5TiF6s2YgMhWLJNxj8j9mCvMWerJokKd3syBMoeihzD6zfx3j",
  "key7": "3zTDrs7GPY3xauhRQ91BNUQxeqdHoX3nEAidsxG95AArgNHewJF2reAN5to7HhHjv9zcP6piy98YVLJ4nucdjzpY",
  "key8": "2NvAjkFZG1a1nW5VMXeVM2jumk6FCMXqNqHmmUPYd75GuAT8scwprrEEyhFZhabFcyDaCX1XXm8trQmyUGozXot9",
  "key9": "G6npAtR5SfzxN5G7r6GKudy6YzyU72QKMqGPzWazz3iz37wq19Hbuoc5ipUz9xA9aj96Qpj7fnQPKikSCqGsrg3",
  "key10": "UyrHo2ugtgDmXBTtFHWtHZptjoJesPmg25D1kLpasxM8VnYh63Vsd63VhvmReCM2Nbcbpjiu53EKDQFGyCzH9vY",
  "key11": "5gDMzsmHhmNPq3eJN6FMRTTSq7dBz7WJJwFrEco3qp8KPHYLf2xy2BJpd3avTqQPG3EvAB2xSf9sJGQRWzNFJRCr",
  "key12": "4GPWEyBqAMfBbjwEY3cWygB65exwqaeJL9uA8mAWALRb2kyNjK7xU1BP7jFFQ2SbAEbXCsA2BvP5pjBDmdLyCLK7",
  "key13": "5bKKcCdD2JT1BBvSVb1uS5Y1sMUzPQ2E5nAP6u6ujSLx5kE4aG2u6f3cm9NDopCpJ1r5vCjqnQ1hDmLmx6Perp9o",
  "key14": "5a7LqaDYXHb729axX57YwPyW8nYQBbG3xfDfKZfc2DSdvdHWh13Vh2HtXPky5yMuc6fH89kqWvWM3WU6GVWsFyK6",
  "key15": "UsPQ9YF8LRRyXMJ72erkAhH3pGVnb7Y2LWT3gtb66U1gz5Q9igoajwMvStj7xsFU2H1HptSQdmcnnMsvyaqzSvd",
  "key16": "3bDpPKLniPyLzapViBxeStonfuQuTj4b4uEAudq7pL9N4cpr87bfeWmUoZK8gBmfxf5AxQCT83VmbnHSkivCLSdq",
  "key17": "3XEbc9tmn34Sx2rxXTKrcpfk47UjhrPewf2ndzPV1F2upGFdR6gTLQiJhkJ6Ebr8xopc4RKi42VFgbQoqG4AS1QU",
  "key18": "e3MYSBVXygfcqa6hwJcD6o3P9Sic7PwWbrW5hFbGD5HaMHuJFiot4jrydUvdj7CQr2MDwfZx9DTh9djqQCAt6cS",
  "key19": "5b1QC1KPpoFFJLSYKjk4rMEKc1U1uD2KZ2ZG9z9KJtUT7mzdzBWyJxb89taygomTKcZ5NZpu6vXvsPYNTqv8GJ4L",
  "key20": "3z8akQcxUuKjKW2FN5Sfh4m5jyFxwq5ocjE2HJswfdx841YuYCR7D8pTE9ajergi2G2pQkYsxZy2wDgY1SjVeuwu",
  "key21": "4EH8XLSbk7qKnaKAeHdsyJLvQa24nmQcaABG69ccQ6RPQ87nEbRqVaFhTcow6ov42n4oz8r1krAxPGYCkDccdJ2n",
  "key22": "42XYEPivSTBvE8Hd1isV8ZFCtmaR9FDgVfaxArTC2CtMvEBjX3sbmdSjYWXnzbbZtiasbYY9Wc4SNEzaah3TU72g",
  "key23": "LFJ81JjT1eUsERsad6W4QXwwtX5Q5Uj1UDABaRY5uEY1TmyV3CpYHj65j3zi844UvWRDPosQLsKkm3TEg6pDagM",
  "key24": "5QTvDguuuYG9BypTXGLJFgYdsQsUq8BJ2fZYDLYzDFcCDu6pauBE9dc7fhhDA9LPq7MLJHo8yswoXjdWMXVMhT81",
  "key25": "2dqdBmVNyzHhCWzR7xPG8FCPGKJU4C7RFWyDD2jA5b6hbLKoPT5yhVpoABWojWFKP8PnLzrajCvy78DzhodZYni6",
  "key26": "5U5BFPSzsfzuoHaXJwP4AH8JuDCrqS9S6fb26wmeYGBAKm8xyHr2ufdmWA1HjKxSD7Vro9BSaQ4ABqHUAN1354Q6",
  "key27": "3ek8xar7VH7FffiJtF2a23Y6B61ZWbiavR8jZyzh19JXfBkb67LqgvckQ29Fi3pGpy3X4PFMx9571Bih4ArDRdtr",
  "key28": "Jg22hCH3TmAPm8rBN74fsdNdBRrENLr5N3xEy4wKevtvkPcAeSevgwdw7V5sFDUcUM6pL6y2fNs7LFDe9bcfdgK",
  "key29": "7eCqMKUxwiDaJYCFM1musF7QyciEtZWeB2U8VNVExxTFRzWPvMCBsXtDm9J1Mex7Au3KhYHFT6XNqkHM3MoeBcd",
  "key30": "3ZZmrZe3ZnSwPJUfTUysLGpbDWQVdsZjM1SPByqwRM3m4obmsp2sG4jdApzNsF1ugRUTcYQ1m3mm3xXTu4SKheya",
  "key31": "3oZCjZKHzCaUgUMB13H9bCfrZfHGmUuwJo9dNP3tKehdp9DuqEWafRi9bQfvvVRjuMxkeHqyMGYPER29qDpjcE7z",
  "key32": "2XHbd3TDyPCXm9SdSkT6m9Vxc3HPa1TnuPptPUQpA66V2vG6YZqWd8UK9LekprLeGnpTtRrZ12jXZ4NVgSZ1RNew",
  "key33": "5cyZsMUfKKiJJHfxZ8SAKMC8Q2w8ipVpk9MtTP4CHoRXfrtYdGHNHszCKgoxfTqemyXpgWLrVA1m1KytcRTGoPWG",
  "key34": "4CQznzDte1SuyoUo7NH7gF2xgxRMYvNvxFktiyuGjThfUMBwVDTrA8t24J8781R23qJfA85AXvkri9HXafZobfWY",
  "key35": "gsfN6DtuCvn1tjEL2TUQCwEn6JT6QXhhCjiEoC1SXnyjp64gPaQi6QxSURD8n9zygjKnCQqseEo8hscBUF6VWrK",
  "key36": "3Z3H6YjemDxLSe8VSpxbc8LSst1nxY8ns2VUAQYxEKE3shk9k6uHzWgzz9867CiPtkVdScYvzgVCRPYneMiaZizk",
  "key37": "2QYtuaskhSfspXmWvuq1VnL27m3iJGdytXXTFjBaQbpDbbAsjUY1aMc1348cdyf2Vtgz4LSWxwiseMNNCtDZPxYz",
  "key38": "4YMLQFnrmShYkWVutDCmiicR2dwKVLheNpiyZrjegH264yHvUFUYriUYXPeG8ajepqL5wCSnktudBSpEJYFNk1at",
  "key39": "2vYKUPF3cE4zU9ahFcCtK7WCUE9bC9uD4oHXaiks7M9xzf2B2TUfhQrUWzTqTACHCKLAKf221SuH35QMXQH1Uu5g",
  "key40": "2XLXjNVAhz1R1WKUVGkeciYXKAMo4VwqoaZEpnBtxryWzhfmk8b4oFtm7F4rBaCuPbzrxGss2tvH99g84RWjR9e3",
  "key41": "5h2JkMSzSD2PYj79krhefnJ2Xpd2yvmeCu65UXLUV3bVvZXstw5wHPhWhgUn96vbeYXGfauPAv9KC76Gy7HcUrJG",
  "key42": "5PCmwvXkC4h5AXpFqr7XGr6b4yPCqC1Qu7bxoKTBx7L8k1VPw9eFndF3o4t4hjd8rKJ6sp1dZG62dorYw2nSVE3U",
  "key43": "2YqsdwfWqhshhwLx3yDEeWNRPeXhbNCxJyZhHMQb581qJ5AcEU5d7De6aDRkewdsBRh3AV4tTBxVCMRjUuHxAEED",
  "key44": "3ERSpbnDGxBBkgjCSy5dCnm94h7pXqyJez7A4iwLVYpEYnsNRFyhLeDPJbwN61oXWE25BCXDrZQD5i8m7bQt2aVm",
  "key45": "313hJeKeBSzkmUhGhi6mewR3vWmyH6qpUPPV3Tm2Egmb6583YRHvBYAm9sjZ3V5UcLCyqUdjy9NYP32SAc2bPpAa",
  "key46": "DBkiKRLx82KM9X1GdMKCL6oRGCuLqeERjZKk2rA46zwkbNuQ85GRxGXZd7mJQqXxkpBxJMAAko1gR4dcxCJHtWU",
  "key47": "5JWuUppMB3bt8zhLZFJ4d9hpUkXx2qM6yrmh54m2DJvfTGVFXHLfzcLUQaxPhjbxK7nZxhxCRaXpzN3vCrRqPGM9",
  "key48": "5VVhEp9m5EzDrrCnBDN11qh8hEQnh4WxFogq8Xaan9QjNo1tsYovy2GmTERDg5g3aqKdBD1idWHpAEPstmU6BF97",
  "key49": "5y1ptRCVVytEWsRrXNaPiXDo25F9w7Ja3BQ6nWnxMn7rBoMYdgamAdpMyYX4QJ4WsKN5x4EuKYum135cHeAjWEzW"
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
