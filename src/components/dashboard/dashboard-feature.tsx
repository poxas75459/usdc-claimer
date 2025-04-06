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
    "vfKZTeLRYUnCmsa3qRC6sVr5C7tu5tb4VvLysdr9AAirshivo8i6QB7iWX6j7cekBoy8HjqFjMLHhg3tJjEGyJZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k671pTA3uk6QoHfSwaPLyogti7WSLqo58AzAsbGDoVUKiBirUvtuQZwApRsX7Ss91UyXuFJFCrpUN9Ks3XWB8rk",
  "key1": "27ehLx4ydMRvuPtCKYRd8gYaMq4rwQH5XKHdjjGiN4aN6NMimwEiFZQ8BoCsbEjbXUrkk8JXAwf4yJnxHPLYfJ24",
  "key2": "2F3WA8zNpqcgjvvvcymARaBLnJnXPPFWayUTfKm6EmYr9VKTpbC3xCC6qwdRmhzUNT2gX6ocUBNKze7bsDPmwSn7",
  "key3": "2239PpNUUFg3kV8cGpMH3TJoyi2P1oPPNZGnQ86w8zaCN1LxDm8ZGybURU81STs2KaNRDzQCRZrb4eahJvc8sZYa",
  "key4": "3uGAF7KqYMz9V5MrMfqo6PTuNWJ3RgkdNTfqRaXXR9swmms7SiLYPKHcHBSeDfuiNV7LuECmVAmGDv5qMS5AKXVs",
  "key5": "4WVuVjFxXzYCGbvWUhGoT5hZGXeYKpEUUTGrzcnai9snoendW51hH9swj6n4Kfo4HMK1GPqvxLkvtdUzBxURASv6",
  "key6": "3DBpxfBvGC8YRPv1AWRfdR7V9vpRTd6HxEh4cMC5p96Eb1d1FfRHrs7ijVnNKYHhfZVAZrmh2kjo3afC5QLEywu2",
  "key7": "4TF5CgRnVZWF1gpxKdHHzSqb8BQyMXspoTF6Zn9pdvRhE9yTix3jX6RwNHVaeK3pWNSSgkXB9vThvfu7CMM7LspV",
  "key8": "5BKA3bVtFQKaKLEshgi6dZBYG2zSGxjGfFJwQfZqmDmfTwLqcK9RAcqpnKm5JyGxy8MxQHY26be2PRJVyAodPMMN",
  "key9": "YYLYCNK6FfEkQ4FMKzfT5n4bgvZmM2RxqDMjY9N2MN6GsgiwWCXKfnRzNbKfCygoRvrqU6eMGA377cgHky4NiRC",
  "key10": "LT5nre4CRdroNDhK9PMYNad2fY1VgPd3eJ67guRYdWzT2FfwUgZt8MNtPPeUNaURMFFdg8dse4yR7v6yJ3knJPd",
  "key11": "5R4Zgyc1sAkJF7JWZGZ64WaFeyDx7v4VXviWPXwnccxJSZ8fjiw5SBsGz4ahrxHgf4j1PhG5M1J8d19iSUYKrNzq",
  "key12": "2Yb1kcHM5vDAYmnDY5EBG7JyiNHEzkU4zPYvkjwzVaiLr5KsBbJUmnXDFabyqHpwZCCZgoKWvgz7d42Jqbo7KUYr",
  "key13": "GKJ2NT1rft9a7zRFJF1TGFGXDrMyg114Dy2ApxxMmZtF2VUf228EhFdLayCkHtjRze3yf2ExX9czuniUDD3H5mh",
  "key14": "4xQtGJkBPXMyaytVNYFZjyZkqN22fAgwe9kGPoWhFP2NyUVoiruQekLT6zZLW69fz42WE9MyUBBVagKCN8Rssk5A",
  "key15": "67qZp3ot21Bu3V8T2EKB5F7j1xtiwDWGvFSZrdZdDSpBKcirorkLwnwZ1eiy8mxenW7qYD739YF8DbW4zUpsTVaz",
  "key16": "3nV9TQdgKT2HwWcbsP37hLtsYDrcRiLmK5PLMbupU3qHmjpuorbWKkCELKKQ6KrXo1CZifZFvyBynmvcVyPF1G73",
  "key17": "3tY3TGcGySG1c1SU8q7exjt3m5ygoQdbqsZf323CP1HtE5ALA6AZsKP2MeD5zZsM4WjLTAY8FgCtbQVi87Ro8Ryn",
  "key18": "5jMbUbs3ddCSi9w8W8xLQNsTKpbS1T6VooVmw13rt3hP27813oKZe96TUDgXkfTCUCTDt3Wfg1gBNjExt1QudJky",
  "key19": "N6gGBw89GWx2S3z1sRkmznayV7z7QLuq7jxKdEoX38eBc64QefJRoHN7TrFBJdpYHC3TvjeRjVSZrAmN8HrqhEg",
  "key20": "P6WXL9qAzWKujkpdEwREUrBktQXeDJH6nb17FxDmRVMx3qBYoVGzWmo7f6bxzseMsqSgk3evRwH9VMdEaZfbHR2",
  "key21": "5ht3Ygy9b58jZKoar4oK41D83ii5SvQaMoKACR9Ugh2c6AXkBJcmLBDY2vUSHok3QC2LHVopvYmTr5BDgFLRdcFv",
  "key22": "mrAvaKNWtHkbwrceUK8oEPrYVohnYQ5fy36F572jEJUncstSAwud187VL1PfvmdZxvoQHwMmystkBB1gRRNbS45",
  "key23": "3MXjgYDCHQhCMRRFY1ESainGWUAyY9VVkSEEzTtJCbz3dpYtdfFMuW1D2RGgYd7dcASLEiE9g6oC7LU2Hp1Awf7k",
  "key24": "38W9p5ckFtkWL5YZiVrd9YLqVSNA6GRxcn6fa7mMj7Q8Aty7nXEqmhzJg22znCX4Rndjhm4qNerCKTUjwFiEKgs3",
  "key25": "zPCkhUNKNok4Avxsu1fpDmYNH6k4XyWxz6G9dgMjMKyAXkFC6bpSptZzrEecZ6DkyF2tvWUperJUtAdUunnDY3u",
  "key26": "FrJyui2fFbMmfG1SXhBCvPJqgUh38BxZHSoJErXU6rdH3EAoDvcu4sCEMaxsbjRAX5ozGhAmmWkBx1m5XEz1aiQ",
  "key27": "2gR8VGb6kCGys3CQ8vjVDpK6Wm6CyVcC9f2fykK2GfqrdVayRAzMirTmrjkqUFRsfHy98xiY1qQREUqZaaKjozig",
  "key28": "3J3PsCUjFWnbZBVMPUffL98XtcC5YrQobnKZjBtND6cRcxaiKC39pHbM8NfqFUZR4vh47jYGGuvCnMVHKPKnFqUv",
  "key29": "5zuVjAt454UW5jf1NkXrx4LXchxhsthdHNVCYMH5PYMBKjbtjD98ncBCr8U82pDCgXxBKvekKdSGzionw2mg71Vu",
  "key30": "3oyYHGzExaLAttYJZ5E89RZsdLC8w1Bym9BcZDStrVRhNLsLgVzUU1j6Jw76JixDFGNKq8QkVyUACRYEX8bdMtGf",
  "key31": "2c33WyqZw5ysqapVFwk32AdBUkB2R4gx9axZvgLLwzBgG255fcJ1qchMc6WGBZMv3t38VqtDtjS18bt1f7dVphjF",
  "key32": "3s4AdXiHVdDyi1RpPzfJd85yogf7LXCP3S9Ro1KY4uDnXKXqKK3cBXY1m66nQY6oDV88W639hjiMFmAjkTpGjqT6",
  "key33": "5wgRv6LrzJxgJR1PGiQDZFz5wfbaEQhZUbgZAsh4uDH5GAPoGjUhsRPsJUwykGL7X8Y2nVAV2HUQVdXka2nJRoDQ",
  "key34": "3cpQqE1yAL6uUdwLCF6g1eLNog7S11uURVtawNovpd5GXjiePRJWJEbL7xh1Rx6tKDKjNtGWP4JKgSu2wmqBTirS",
  "key35": "afo5FGMaDAbq25qftsor7pcP3JNdYBsvXz1ELUWt66ss4bHNaCbPFrK6oR6b35Kbdja9idQnh4JVPuiVyHR1fcZ",
  "key36": "51pMEQv5bm1g6pusGXpBvo7EiEhoVjBNvB7SSNsSk2dXkmVBj3bZAqyVorAZPwuY6N7FFQqrHgpcsuW1UxfCUfdz",
  "key37": "4kTGYXWgyAA3gz1pb9mmirm2JzGKJqhRHe6n34nEPVWZMGPDLRxEQNp6GCBUnCi5p6u71MLQJ9g5SoPx3yTs24px",
  "key38": "2cyA1D44onNRqrNCR3cx4KD4V6QNtNn4TKTVj6JsAXGrBvURvBXASqv2HAhFvBbfTvHxbVkqQtWftbP1vUVehexf",
  "key39": "4zT5cd7JSQmGbaqcoFG5HrzEACNDTS11WZw5YG9pAsd2AfGdp99WvLgHsShsWyzK3vcYSuwE3eWZfpggVPfDq4ug",
  "key40": "61L9vvNhQfXG95FoMgyVkBNceU2ysh8C4WdgMTTYfEfEZ3CV5AUi2tqyHaQiGXDCFuDDbZZS3RC2ghvP4gBR8uPN",
  "key41": "4krmYcLMJJQ192SHtMdbkPGmf6DfYmuGBmRqJd87gyMJaYBuEZZvRqZSm9ySHjGmqEfLr1nYYyeiGobbukq6UP4X",
  "key42": "Zo2cU95Zf8pc6nEEgQZUok1n3jsNBR1kHPRtYoxrbFS8yCWcZrKvLMZuG2mNmqZaHDiHhentygwdJvgqdZ4ZHoB",
  "key43": "4PCwobX3FGhiw1Z5hVVbTBUnMzdv7Ze9pDEBDHNYrW644o1Vnp6EgTwsprve8wApy4qSpJ2pjGhgvPSWb2LCbCEr"
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
