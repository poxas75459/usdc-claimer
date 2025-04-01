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
    "3bjKRVcq7C1cQza1gjZ2JDpjGzV9FSXiNeNMKBbrZouKG6zuzXxFz26ymVsjo3KGS53Abz7ka1NkF37cV17Yg41E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cwz8E4QKykWm3nQignZdq9vczg1r6hpfV9a8bzo6sEkabn2MFCK6UkehaqJDmFCiRiSTAUB5w3cJvMA5QvYcFNU",
  "key1": "VCY56VNME77N2DNN5EBamSuMgDe5zE6vBrUXsH6yqnRrycJz7bPWFjLsBpy1SNwHAv9zD58djHRJB5pDBQzFH23",
  "key2": "3MaZZqLfo75GUZHseRGGp71oGRr9vd7yUrXTokr2bfCePJitcJHucT4ZN4S65GjDVjr7u3tsDQtRp8MfDoLohQUq",
  "key3": "46rZjJgaekMcXJ5FkigsMJTps7c2iNwnkhawHwgu1FAj4J51vjbgWL6bULpC4wtSDrkhDPkPfmjRZPK28WRvcQGd",
  "key4": "2Td83VwRqQQKLBWzaSTBMbHSGoLCMsza2UaunAwVM2GrdJEx6jpHepfrjjckA4vGxm4xGvWVMW9trtvjtbvRt216",
  "key5": "5ToebvKoFipx6KLKJd1AJuww5WCJjakFnkBhBSC8QmQPSgbrA8NM2srQzLNCZunUUVgBFfUSXvDEPP4hvf482ioh",
  "key6": "2PXzstDgdMrNfbWTXHbew1KvScuoZKEL8FhpEdsvvgaGiDGNsXY4VgBeuoA2LaRoFcuVJ4t14W5buTkbpegfYvbZ",
  "key7": "wufTsyVpkN9qFDgGPVKRg1Ph8PhrG7Hk4Fx6kfF8DPRMW5jJ7B6NnDZfef8sa8hr9Vq6eszcQkrTM3pwnxw623c",
  "key8": "5QWG72HwR4uKrd8n1ssQU9HiNU5PPLRmT6odDcJMhmSNUZEs5bFN9tRBMBNKHvt8kkMtR6MSJqK3545HuFKgrZNg",
  "key9": "4GoHY4cyfKTVVMhZsKEny4tY9dYjvWuYWkDwCJoHQAEUK5Z5LxadJVfWQ2GGoSrBWqb1FGFExZBPxNiX2VZfwxsc",
  "key10": "eNLwGZX1RLerkMmrqVDTgtrXXnMnCVRDvd9iFNXpnFQ48BdDrpG43sHNCe1A4PpKWxcMAVHCgapW3u7WCFhSK8W",
  "key11": "5w9kAv1MdtdL4tqFujv4Gmw4XiRDM7sNk2rQ5ZQMiyhA8J6ywYYPzQxyb8xSPDddzHz99gc51p9UVFm8suD8CLxv",
  "key12": "gpPfeoEPSs7ijGPCSj4gZUVua7n4TUUDDXZX1uPpu6v5SqKfnaaDzW7dJBTD8d5EGyoke6bRkqSdpX69ipjWtKw",
  "key13": "LeCDCwyMXPJ3Tt2iW1Y4jQE9bSpayQgMhhVk4Fedpv4Ata5bu1ZDhf7jkC1HVN23dJguxZAv9vokFffSRzScm53",
  "key14": "kDK6b4BfKWyoum3Q4jz6WJdYDcbfTANGS16bQ5W3UewheSyRyjyzbqwm9r2C3CxhGNA678PTjbN8kLwSWLsc4y4",
  "key15": "24vxsrDpwqnrZgEzzGBXQou6maWe9sc4y5EpZz6g9XNsm3fA1oNZGcNUeRcaFu4qSeMHv5GopzbY78SUSNiwHzHH",
  "key16": "5hwRpR3KHV5r8Y7UL2zTY56srtMANDMmsLzdFy1ipwuV1g15GRq67WVcPYWCjDRHRJoGmTvUy4Y1HHsXtjBXw7jE",
  "key17": "61TdBNJ2Aco6AXTmv7aoPa8GWmLwCW6DBmCFn2EjrQHfxQ7e6aK7MCKQ82V8kE4gsSFv77teFdgCrEt9Ldkr8ZYR",
  "key18": "2DqwYgbnmKw94etHXqu8QQpTgd4YAk9yJGanAworEdjzQkhSdqA749A3mZkD2ygYB6Sd9CGSeNUeAxtTwqQSQwXM",
  "key19": "ZjPMSU9HedqJi8FrnfQT9umWKHUanrJSSjCbqEe1aD6TZ9EwHz4BFAM9n7UoYinHNLfJZYYCXRBqj1EABG9JA9x",
  "key20": "5SN162TERgzuk8iSbmNB9F6dJVgm55o8ynrBeQfifukpJ9ysrivkogJk5vWzgCkciXGzbdP8rpaLp8yi59XsE39o",
  "key21": "uG8th2k1W4SDFDb6J2Kd8AKBjb45fKoFhMGZ2SBC2GncXB2ZbZ2EzhVYBMpRhbgErb4SxQXmzyDSNbLL3a4UBoQ",
  "key22": "4Tp5JUWDCFuWM8o8rcah7ofkCEdvQ4J2q1odA5XHHQAh5pY4dTZyn2RVFsBjo81yySCCgaQumn7cmuM3wSVHAtQG",
  "key23": "5WWvtcu53D7oMmN5pTTNLzF5FfW54iLGbz3V1xwyQM5fqqC4wjdVD9nJLmwQre5zymFoMvwNxg79voYSSqu1rgBN",
  "key24": "4FUZyon5LQQfBXoS2VQcViU4MMt1cou3zmwLBKszmkjm9Kt1R4TNn2wTDiLiGMD77ZP9id5Qhx9vD5VvyJtT7a58",
  "key25": "3cdtHbY3CR5jVSv6Skbt6ShQVkRdN1bQVqTTuuZu9285HeE26LPCayYXKx4dPgUYUs8SvjmG5tUBcHT4nt9yzF72",
  "key26": "3HZdaGXg5udNS7hcfcgv4T6cYnRksAzgp2MJqtiXJe3nRQ4YZzHks8dfEWc3mQnqX2TCDrdQK1Doyj5uvwzMaDF8",
  "key27": "Kw7SoHQTtrAhjF3fSyXiZLDWo4LHZAgyAxMTKLFZAfp7ArQZu2uCtEhpcgcue5W72bzGgiSXNtMa1P8EvasZ7DZ",
  "key28": "5ZMc9TJM5pGjMKDsheAPh3ct3xUyuhLb5Bf53k4g8yZWTr6PDkEiWu6NVDEq61wnoM8q9CpuVRYXyycvoeLfTtuc",
  "key29": "5pqt7TgBcbxFEgkG6C5Tav8xoVsJULK6CLGdk6riDT6WZfT48L14eAscXxFhJ6NGPmrwwVLaeAXouomJiwXDsF9b",
  "key30": "2GLU8YqUBwDd2LJLxu3YxoBLAMSZNbVWFFFzDRGLj51qXHdSggqV367FuNcipNAdjVaVmLRaDWCDXGMj7XZDia9X",
  "key31": "4b48DR8fnuBTzWyKLhuk9Uyy55YUriDmdSUrwDxttoFLBfHC9rYAVTLSTBRED4N7MULyzCdrV3DbqGs5VMSJ2t4b",
  "key32": "52bbUZGYWmrNqAdJ6SVVMUaP4Qit9fy9SiHYfQqPiHEd36LLN5CFsGEfq2HibvnadkjnbPfbprBdzCLUMzvY3xiX",
  "key33": "4NpuJh5Wc2FMceSNeJ6r8hP1NTF5Z3jkMHYgZhNGHUrcAENfkYKwvktuX8DzHQtakDLBtZA1Lzxh4WskSSY2CVkB",
  "key34": "n12Z292UGbpodK9JgWX9rc57Ev8jYK4FothPzacq7mG4YxDgqcX6muSw9Y8VnVNpjQXA982EPSF1YCR23KKmdus",
  "key35": "277JCxudadjBooCbFpUDBCjNpgA4WeWcwr5Srz5UvyS6sxir9YUiGn4vBgdddLWZpDk5zmJj6VeQJjWvMBTDx4oi",
  "key36": "joecicsPbmc3DeAGCPizjgwoaeissuurFWNbfV1RuSpFPvhnNMPMEbQeeftibEYVkWATfwyPLtyTbhJF8fHqR1V",
  "key37": "1DmH3pSs3uofZhZzX1FjAu1owqUqwVM39ijYBDanNwQHTBgt4AmyExe1gDRwficR2dvPLQvmVxQxJ8GofqYBxMQ",
  "key38": "3Az3divVZxBv7gjyZKuaUpUD4E6q1YQPMSwtWEpyWTjnk2DXhervagR7E33sWsiZMcY32E6gfp5EnWBvCbesURnE",
  "key39": "5VFuhbpbqdzokGkkxbsH7XJvwoSBn2zNR9KFUq6uS6BxiEDYUtTVkufD2URMSSsYErjjQLWi64xDiB9sKhhWYiCb",
  "key40": "2GeZYzFvxgs5jvdUMP6pweGzTm2dRYA3CV2UmDjwCwDnjNt4UZKqc7JkEjWeJNnRVr16W2fHXccAxy5eD4q3h9fL",
  "key41": "5NEP4vWm4dxsc4Pw9GJ5iUqUy4DyWxGVc5RvhzEhSBPya69LDgxgRGf6w8giKxVQSVeryYwwDSEA561w55KbUFsq",
  "key42": "2Pj1PmdLHfFEFPJ71fkRM47MDmY2DGVdJi73vgT88ii2Hd7YxnuXNbVHdZqLEMt2r4v79wo4MMZDgkTdz7oVePjp",
  "key43": "2jQFqtJkJD1aSEFY5TQprZRi2sHnebfGW54AvK2VeqrEfJbxpB1fxqt1nQKyDkyEkQGDKo5X2oBw4oVQYKtUtdcD",
  "key44": "cXXqHVyRTobT2LjqN1BJJZz9XvXp2xeqJP2BkEVAqN8dKkwio2mYhKEngmBxyMCPaGZEX7GgD47FZhzspvoPoka",
  "key45": "4cJiDi4X7TkCwEX8KnDoTVq6ZARyszQEBvNzamdxd951DDdBU56VsHYULfGZh2DEwgHBaydZoVX7aPTiYpv2vhx6",
  "key46": "2PBPPXgHraLhUZBUA4hXRH5zJHf7cdo927KnMH8kwwMBGYzif9TvJSQBwETYjPDpt3oDgPeiBrLqY3DLMcZ2gRWP",
  "key47": "2sbGC3rSr5JhcQeSSrwtSQgfhSxyXmxsQUYMXNNfdaRLP7GHUg4KmhExZgBSTQmW82UtTxTCkXymvMWDKidkuBbe"
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
