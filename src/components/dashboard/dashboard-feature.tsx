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
    "2CHjeydpoJLxJyNWhVcQgxUjbfE2ReXn5crFMhQ72cwQ8iMAMTi3sWJ4CqYda29AsuisR99bJ3hFeusL6bP2zSro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EUJyh65iRLz8gtV6eJ9nkKdBQGDfTFiNwopjwVPr7XhtbtcfmkqaXRtbcyseuJBTvqkksqoxjQ7MyJhhXGDhmr3",
  "key1": "5nKnkJ9DL8UwBC535cQQcmTvsYN8LyMDcz6jSPo91wf9yacXrW7Frj81SuBtqsn97jDgzMkcQrDv8oop169SE4Hj",
  "key2": "2iEdrVDs6t4SyuzAgVGyef82bDVfDo2VkjZ5SPPtSpatY5RPRtxLCpECbY7aTmYtao4B4dY2J4WEbsmtjoLodhwQ",
  "key3": "4Ds3EwMHusLgZt5S1a9bt3Mh3FSTyymKsFmDZ68xQhg2SXuQNxVtSzeqon15dgYXgdiXscQg4ZCmLEELZP6d6y5s",
  "key4": "39KPREsXDHW9NdyueVTbqVNuJL1xRaqQsu7nRXV9co5Q3W4YdpcRVppSzafc6RsY1x3SYptXBu15ByWam7HZVF7U",
  "key5": "ZD1YAPD19LaMWFDtE3SMsBprkmK94Z9VVjCTUS66GPAAUvYXL6g1swy3fULhmcoiN9eSyd9FkQwUj4g146g58b3",
  "key6": "3jQa5LRKxS2cQD5jSNLcpD8SsaiWqesxQx7trvGwQ6W7gjDFwgBJ6CTFg4XYcY39MVWKVv8rjmCzZC6a5DeispTN",
  "key7": "2dGiLXQJMSF25CC5mTbBQJ7qd2aRntT4VU4xNaBYBtkeRhfdYKbckcqDx3UjebsfEiy7bgTfLy2fzoXtT3bC4y9m",
  "key8": "4HKavDfmoxhzRmCPr2AjGmVdstffVDQywtQyQ26honajDcSE4Se8jN1jffFQMeEhPEqpow8h6R8WaB4u54HDLgXq",
  "key9": "4YeoU1A9rRQDEL9ACfkwhmysg3WivtADo9X9vRxuhMXkSj7CS5fBRXexjheFMn1wjHjo2w1KTFkngWKvNhi1K2Rw",
  "key10": "2JF2qBuKWXapfRFtWWg4TpRUfrFFahVUeJzoJEihaSZ1G5n54X6CF3rPdSyfYgMWpXKcNztK6UvAgsxxwBA2cJpS",
  "key11": "dBcF7HnqJP1fXjpz5sTPB7m5qYqPTyzSGAFPmQeH6WcZZYNouaGQeCCcrXerhYtzfP82BcPQmyPLYtcbwckVBVK",
  "key12": "3JMmY3gyT1PmAVn887E7B1Mr7TkNwbCCJ4cSoycWCYsQ8nTzcke7fgYWg5SqvjjmQU6uHbba6Dqr5Uzz9i3Tty7J",
  "key13": "42JXx8HgeVUQbyxjDDxeGQ4WNrEntPZftz9YJkdiGv4vc4KwRpMHYqLwzMDszcuMmScTU8XWRAqyW3hzhrPCrXUp",
  "key14": "45imQCvQq7HM6perKi1r31a36bBGTEoipMiDUwFnAynSsan8x2AhdEhDUgniWBuMGiPiFGwRteUxB968vXhwCBrU",
  "key15": "51JB2NJ9CwbpnD2tAYh4CTEhygNSR4A7g5XiRhhtqTP9ZX62xHX9uAMcsc2Qh817vVExBgZo8dnDMET6PrKEvmqz",
  "key16": "2ovkx5sLdzV3mfNG9g4v5FnVRXGqoxqJzAYvTqDV1DuSs1TueNb27pUhy7ZY5NhYH1gvqJTnm2ua3zPdop7a4p9r",
  "key17": "5zPdLPf35eEV58jvs5B6UTrBmXNy6xKCsP21J8A7WEtU28L9whW3y75JkDM5GRDLpanYgnKfSV7Uw1hMnJeN3Ahf",
  "key18": "3rwtzZf2BGjvJLdM4Tjsbe2wKtqhFXQJMGjmyAr49xczxzfVJh7yi36uswF1MGBDw8Ea1HkhXU3j4R6HLQBkwc9h",
  "key19": "38ZkRZQi2k8BCo9R4ukqp5DsyXJGBYQyAcPTQgGjLVhBfhm5bWPHRfBncd4VS7exh7LeKHWxBfvTy4WrrLf4sMuN",
  "key20": "2hMj1HSkYM2xkNGT5QvnLaLajm16JuLjdMhFDBSaUvJWJMimq2X54b2oNmU352qtpfpasAsLC9vT3Mo2vUvAqoCM",
  "key21": "WV228j4G4PN8Up5JnMAiMqkfjc7w5JoLc5nmH28kmn43hjB5fPXiexUR6eXrAXY2wSgd4DFUxDMQSoge6LU75Fq",
  "key22": "5RcKdKkXuz2dVqH6dgxWgmaoNPoLt1Q6R1L6GmUByTqXwvRCpXvBrUg52SKSzWXV4Nb19F9uBGwSXKYEhYVMeQmg",
  "key23": "5p57LXfcYL8cpxegqukrnvLqdrzgyaTM8g5XDzoaSFUGkLimCZvUsXbjm45wjp8F9KaUpJ647ZgxgYG6W9uLWNG7",
  "key24": "3C1D2mhPamEizSnta3gzzaHTTQ7ToGS6c7RQ2yLsAGmNU8pbcdtVkcQDbGis2C9fT17S1ZH7LLyZKoWUo4opo8ay",
  "key25": "5kCBGVR7gTPMmrDi5tg8L5motfsSURASQhwySctsu6gwXXsRi7ZYcDct2nbYAi5yGYuviH3iwwYF1qrAsNNn5u37",
  "key26": "3DkwaA3N3WCdoTjN2y1ruAvE8eAmFdtyTAQoo9otrk83mx7omgJ4Zjy6Ljv3LY5yqjqhWauC8KQUTYzt15TuDHnw",
  "key27": "5MVH48hjb5PjLQLC7YfMhcEDgCHuKHwxQ8Do27tuXLUqvM1FCYjLxP5WDdMLsZxh5khDjgRHCpLoFjVzxFtZ23Jx",
  "key28": "43VKaLvg27YttmASvnhTJRQUQwDfeoBikuqd3ni8SyanrJ1rcQbRNaiYzA1BoipPArDgBmgwX2XDe8FCWs5tPjpo",
  "key29": "2xb1EDv7mDPdJm2hb5XvUy2GsPpiJBnLqZ1x4zrr9ZfsmLDLXT1bkzG3yLB2krcKekF2xDo1b9WNQtw2NUXAS29H",
  "key30": "4F4vq38tu5up6pEaMNQvA7QR7PkwXe4KnfvSergJUQ1yamhJ9PkSwqnHRfocKExm2RZAdnHVVVkq5Yq9pLnNU4Ag",
  "key31": "3tW2canRND4RmoBeaMELBGng752916a7gfMNo4ctvZJRwpve7jQH3FcrJ9Hjzvucix5RHtXnFRBywg24p1M9pFSL",
  "key32": "3nNVwsicEsUzHotTri26PNAuGsAMRnYyJoFh4Ctz2Up7LusEgUtCQc4ZLsBLELZkpTw5aMTxYQPJPMUWwLFw9NA4",
  "key33": "3g41rV3ezJ63tKyLr4NdrxHSikHt1ptjBJgzn7QELqF4eEXtRpRUFKssSHE3YZ6pJ45s1wKwhi4JMtJaA3tcCiht",
  "key34": "3WiuZxVNpQr52YuWTCR9bejoYxgrViPDwoHyhsn4wbNYYLvJFJPTSaSEbzjYQJSH1bu5HpgSU883Pe5B5ceHoG4F",
  "key35": "66amoBUCegjFeEM6jDNe5tSRKaWsAewPgBJxSbpCSar5tTbSQpC8GNk3oLc1YnnVyMdiWVT5bsFvUqpQzTomqadS",
  "key36": "3D9ctSWDegQWhjk61XnkLYHBa9sCU54WgXQP6zh8UBuS63sKFxoHc5fUX3gMuWzTMwQNgzqXcZfzF13yfSnYH5vJ"
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
