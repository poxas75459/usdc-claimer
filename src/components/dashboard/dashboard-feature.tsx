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
    "4833nvuRWzeozbug6gAWHucJbxkZpLwduZCA2iCUjiqtVayL1vQNpVgBa1siKPcK27GcjnvxQ1buQV3r3H8hsYHa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FTquFTzUng6LbyTup8AoWEQi8upC3DrHVaD9AuKKqD7Wx3KhJyDB8pR5bCxHgBQCHZ1jJhuCgeXfXFM9BfsxhuK",
  "key1": "4zjSXhzxs4S7y3qc31ngTjbbmAb4BrwLKX4ZNnXKEqXhvZfqzThwLk77c57YfBQphoLGJW63Aq15mUuLhjvm4vgd",
  "key2": "p3XdmqxgLBPoMsy27GawPykfS7t9PBjRrQcBq4PbW771Rz7XEa2wLS3zBXepReHSybbU3SMRe5CvUVrCntqgDb4",
  "key3": "2c9WANnMUYFW8uvL3uSSiMkLnZpZNZtKMsEcLDEGqVHjcAFfhNBA99xQj7x75VCtSZrx6qd98Fa4NwsVHq5NcvUR",
  "key4": "3tktXQ6dYcfsZGWRTyAw5ejjARjooE4WfATdpJxfDfpwShCaFWX6YDJdfoHiuoYE15kUbK86K4JtNpGgK81TLkVT",
  "key5": "2DSKTSbMUuc2sAjabctbUuv1P3LKKKfq2KgjwkwwfyvvRgBr3PVxx5q1R88rBJMwr5rBtkpc3GSZwtCfQAQqvpm",
  "key6": "2ArFMER9tVpPTVhiyoJnoKzexJCo1uWX2QCrePcW68UWHFMHkkRdYFZTMYbJqxKSqM78ZzXfFpsaRofvKnkpGNsU",
  "key7": "A8SPboMneypLFUMvczjEYAet6zXVddjxPo4X5M4NHT5r9hR7ZXyj6N2ivNkrBVdBgQuxzTNYDKyCH18hcz8gsJH",
  "key8": "5D5LmgdAP3r1cHPef24QRPvvJn25v3NGZVDABJgEgzpvaG7BgwR5W1aS1B529KwK4cLLmWS9MosdEnsupNX9NRwP",
  "key9": "22VCsbSVi6JgumT1BnjcqFeztSQkRvW5utqqPqv56DcLt8EepmULMtBNZT16HUTha59vvtHstFqG9HFXny9vDkga",
  "key10": "5XZDPfkiwBVfYPcywR2q2RmgaWWsEnxip5AqNnfDonp6MPSgCmuLQrrWUMTUBYgS6YjtNq6Xo417dgMP6Er1Rq2Z",
  "key11": "5GFRLTWUA9Le6rSW6WVVhbepVg7Y825LK497rx1Bq9zB6UP23WnLBiDzxMyi8eaWnFY6CMaP1asd12TU6HN3Q7EA",
  "key12": "63cHYKe9zwpgDo761on8WLpGzwMaijaVR8RttxzE1UQRcSF5UPPpfSbmj8DnBgreSnrAo7eDLettKXCQogWSfsDZ",
  "key13": "3sw9u3hQ8NRMchSfvxjP8MjX9L9LcfMFDDSuDRxaTN5zLHgYxn7hY5tL2fFXWi7CJ9oo6vKYAtyDrYt8pwQBnbMa",
  "key14": "4AMWxZtnFpEBXb9gvX3YLGYueZ3n8P5Q3GZ4A8cHMJS1W35VymLZ4QKLnPbh33vx6Np7bbkS2dcmt4mJtVZFFuAu",
  "key15": "3HJ3zy1DHzxVnwmYWMu9yEZykQ3AarzHECVDxTvjmq5jmNxR85R5XuwZNri42KCwc3nsuj2GWSjLM16w28scxf6V",
  "key16": "H4GMhDdfd6chaUyTQLU3GSxnY8qqJNW9jn6txqS9n1H9ga4revovKQt7KDoEkskEjR9ow5YLkpohMcWV5NE88dx",
  "key17": "moW3tYLrNSP5yWVC5q1ioBbWPTyWTytKc7yX29jB6vDKMH4SE5xuBabkf2Tjcd9aYw2cPz1jdm1iH8ArwCAqrcb",
  "key18": "2mihAHDMBCZjXKo5LkTjEwEP1odGP1Mc1SxRVVT7UUZkYJPpSYY31L9E65QCUEsLKoekkptwQdJRSfRN6qXBS9PG",
  "key19": "4gsZ7wt7ytQtgeKxn7R5vs5sXHkWvFdv26HEBR48vfGKQophDCsPr24pyXFsEfpc8RVwBgbBvSWN9gt5jF4R5ojj",
  "key20": "6LHUG24HJ6WNa4HEBX4wWTWBvBACisuEsbwvau8cR16DnxRShrRuQRTkiYVtny4xA2jLuRWZu4ZupSvyiFiAsx8",
  "key21": "431yVQEAqouCbbGBmBhmWXZ2Zxz1xJzmX51jjXpC9KirVZzzcRYCmA7LBzkm4HaHfYVDSTH2tDaAcxAzvJAGrjP4",
  "key22": "2QCJ4ihStRY5LDnsBkBy9vv9Vhm3ieZBT5uc73ofjaBSLy2wysv2stJnbrd2X13Ph5Y7CNgsoEQMaUdHrSGbzLLA",
  "key23": "3zzdtwasvajKMiLuE9hzLkLBt7Hw1DSQqtHCbvbQNPxxwwq31tNKaR8RKkgxRMMv6mgyhoX1oU5zyctqoLzfQwNP",
  "key24": "b7xjE4DvKHYBQFQzmUaFLBgtDBWX9UkqhaEftJdQr8G5hev67XpPuppaNodMm4boTyeFxPJFvgvzsCdPTFd29oo",
  "key25": "5hDvYHKSVffviXbXD6YZDuTZzJDYfprk1UVd3A5m8KEQ4j1VqiP5owc8Qsj7wZZiyAvvKdDZ2NMTLenY4FmuVWaX",
  "key26": "3JD1CoLmX2Qmtgdsw9S3mzCYpYz9ftH4iRsdXouK98MfLpnAUtjrTdfXURS6XgxGYhjkF5vRUARM9GS3WZPsXngZ",
  "key27": "4ozS9VKftb3oofihRt38UFN5rvHq7KHFixccWGpAmHixqBhw6KuyAuKpYaV6hv8TrED5vtysieQy4eXFUXEkG86U",
  "key28": "27HrA9TtMmXHLznoQvY4zi2H5jhxvT5MEjoqePP9r9oqtNsbENzSUY1mUs8hFFbvd2pdat4djZ2XtgYA4HejtBEL",
  "key29": "28k77ZfoXLnJHnYWnmpH1GuDfZNdFg1ue2HEFropB8Ds4SGSzDtNa8KoQGhRGD86ywebH42HW5ZZpf5m8nyXTPiW",
  "key30": "4D5PiwRyDjPLmE5u9GwJzJ8ABdn32nRB9gdJxSMYzkykSwx34Y1PYPUirMy5Y8TbCaTzJe7xq5ZmHjhDUC5SRvAL",
  "key31": "ewisgMcSvQ6RY7o5L9QXGULnxJC7dy9Uewh16bNei2HCzphFSQnn79cz5LhmEKuGiu7SPwDRcU7zs3NWuUJgww8",
  "key32": "5StuPDGswXRGztxZMiUZj9KJa8NxuG7iLwH7eh43V6dvYZkDkr2MiT8hHTCh9dHGkV5Hocbu6Y1Cisau7dybVL2B",
  "key33": "3bY9bjFE3PaFpo7aGF87Cs6qgBqjoKKBjkjt1Mac41eiQNMrntcrCxM6kV6t1H3dLuNMRuuHQ1Yvh5mbajE2QifP",
  "key34": "66vtaJrxEWKPcLoau7PtTgR4T6UNquCWwEq83UGVz7m7GxNk6QxcTjJUFzEmNsXHTruUayBdEwqeoWkBbqV88B2o",
  "key35": "2WzukVKKNHAxUEecnB5JverSbx15PP131tr7hBpk4RuCcWLWbB3rXfNSd53GWS5rsPeR2VSiQSVhNaBwRZ5VaGn4",
  "key36": "5DsvqFQEA2ohM2sBr1f287KKgNXC3LHgUUbJCrqoTXLXkusBBYy5QJZCZ8CYaHbrAnbDDa6TehifMs6PVBBb1DQs",
  "key37": "2NH3LBqSvud53RzFhQsH8P7dLrQfoMopSgN3ab8GzHLSJiGXrqrryfDpA4Xs8bzmuLoaxX4cidxQ4YttET3tAWCE",
  "key38": "5vjtTLM2K5je5J6AuUQPgr3Ebahbmc5f7bxTxgp1uXaMe3aEXqWKhWAnjf4mRnWL3ryH8ioHVZ2sALgsxNNQeLgn",
  "key39": "47Gprd31KnaHpMJPpUiQhcmjiVpp35jdQAfiBAYCU3yMDeCfo1jp1Lj5wkHrCgnsNr2WivaEh9TNS8jyNtLVEkDE",
  "key40": "k4wuigBnwz6x3mS2buwmhoiDRAP9ccmk1Gsf56xF5xya8tW73E66Py4FvAC32zsR4pG7LgDQVQzjrH8XS79NTM3",
  "key41": "4KnunW94VRpfyezBF4UmLZUwz1PVm5icfUsxX8ZSSsyMx2mdhZPPVooQ5Yy2SKjiMJUAfQG2XsAWdnbRAdpSQ9Aj",
  "key42": "3yD5aP1wLDEDrW3hMa9HtTpTwZqZckA1mCSEDR8nmm1PDftCjgrDbdaw52WEP63t8N8EkaTEbUPHS18oX3LRLczM",
  "key43": "5A1iLeEpJS9u9vYGqWxKeGGXWQCCxdPHNPMk6GdQfHJH4Ei41RuXqRXo6jh44Ff29VmnsTzaSjbKAnRMrGNsiPAd"
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
