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
    "5Rxf6hzvgQ4FqaTAguAPDhZj1QvMwQNkxQpQFjyyynAEAMDUqhkx2HTgiFt7HFFTFhSDCdnV2wUYJRd9ZgKE5L5m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55jERNB9tKZbmwMYdeCRubygQm8hNXWJ46hRmDvdNCN4CNJcJ8VgKmeWMCzYQhUBwTVodq4NCcXfbbM8eVqiLAAD",
  "key1": "MBmY66BAJ9PTRGXPNzzeAn62PkSbSGve4PNCFJZa5nM78rWey2tCywQGbFRpu1UdwEbXbZQsAPHize2gYG8sCJH",
  "key2": "5q7CB3VoJPQk9KmoPx5idYRJC7Qttos7UrLXdHL3sKUznubtt9qudvejWyPs2Cz6XwCUXGwipXDWkeH8QeK5adbY",
  "key3": "5kZPERBNZoczBYez5cz5xKfsma5FbYXgWLy5BmoFvpP5qtnk1SKB6M25NnKZb5B4CNXw3xqLamhzrCngdq5am9bg",
  "key4": "4LuDGJyTve6937URQa7HBrGdFPoeEAHgdAV31MREjRvZoRABWY1BGYroNLB4YjG2DnE4S8sF1vM4GAtW1oJELBBH",
  "key5": "5r8U1aTxQ7YCKnL21uQmYT1W3VzTadADktWp5YTTS1joj5F3upYognUyhXPu9VHyzLn9HKPYm4Yv5XtAme6QbNkP",
  "key6": "3xTnq2wnqCGJAAGCPpsz3Vc3G1JxfsCqa532BYfBX1t1wFJ9dyUDu1x1rMB8ctXu2HhXF8nBK8oLyDeq3shDWRT6",
  "key7": "4vMUmnrygdjZWcnPMp595DPPW6F6m5xUKMySR5NmkR9Up1LK29D3TejKCEKNH8wWGhDyHekLWUHEb9cvqPEzMkF6",
  "key8": "3E8KZzbsp3QfUdCY54A7BY4pLZwkxdAtfmBweRz6LpfSwKoxtUJ46YU5QWdRW1uPqXQ3bdNBwbh7tofaosvM3m17",
  "key9": "5rPSTUo7MFxPEvtHVnsdvpeuVNRyDTR856FyNabwWnfC6DfqAvTpdASBJMi68H2PjJRH3vM68f5dvXoHDghPUfjy",
  "key10": "c2u7QiAKvDrQHsaAjsuix4U1NQSVZgDw3nqbdJMuoLxcPrWj7xJiNZRBWYQ9GDngW8KGGXamgjzWzmQpgSUDDho",
  "key11": "5ma33RSSEU9R64HJGrRRQaF4W3Qeg68LkkBy9A8pWXVuogHCTcKiADbogAnwo7JcZdfaRGJqJnnPGxixT2NiX4XE",
  "key12": "HUhUqHXmKhQ2AByLC9CMuAMDnb4cXZ2Bi8acCvp23KgVtbfYoRiCvRVmqSPR2nqVtS9Y9nVbuaGaMayBsxHkymS",
  "key13": "3YbdAmiyooL6qgEqtNDqRG8p3QqGvzPtRmXeX9oWCRVD7jiumVzanbnVedueGCEpD8RrX7goGQt29SyxEdB1pBSi",
  "key14": "4Dh8AvgpgLJtUkJQioaSyybCyY92T1iQQizFi89wgudPi9uqnTp7cg4tUrkeEMDPE6gBsUiD6g716iNAGQRQ6gDX",
  "key15": "54oTPSGmfG3CkWrFzh6dq6io6vMrrkBX2LdRFZmqKERy9WKVokVCzX7a5cMYzTJMmRM19Y19f8kQ1oYRsKwteELb",
  "key16": "2nZCKyRkfir5cnkdMHpRdx5Bf4UbFkx5oSDLZSdjSTWmqM4bvF9ToQhPihJbUoFUbsWyWSQpdpXUE2YAfG8KSQBZ",
  "key17": "3htMvFDpKkdbwqpRim6CicXs6MH1We7yD9GEvRV8hDwF4z3MCCWdfwBx4RkxFpD6vj9vocDHKvmJ9Yf4E8kZE586",
  "key18": "4i4MY4RqpRokRQw9CTYTcYA7uSwZ7Xh7Diqurs7qMzL8ZX2b8gktfb8uDrgFEs4RjWLbfMP8qE9QAeqAvuVonNri",
  "key19": "5kGRKLvSkNjrZQsUgnwBwytdFgfFJHYoggw5MTpRP9VC7KcSpGLeubitYVzVBj3HosJtuWviPNAADRDMPFNFDxNT",
  "key20": "3MJVUECsdxPwTtW2UsMzdiEQnjC8TNjvtivvxw7nfaDCciKKDHv24hbiwUej7P8JGvftAueuDaBXWQPTWLLty7mr",
  "key21": "5RpDmjZs9eyKiRKKacz3wBh4AwkSecKyU1JWuwLddz5oaX5PbpuTnG88rEZKWm9PR72wKUMaUbXhp3eBiz6Vj8dH",
  "key22": "2vSCB9pNyCaajGkHzAf4zyEizBzG2GjDZ7WtwXZHMLDqJP7DKLsVYEMXXCUGEjSaC5p9YJgvvr2QRwB3NAtz9kDT",
  "key23": "5Mai3TAbv41QcCzGKgFy59E8C2wpzAqeM5WyqCtLDSFQdPiqyFwV8ifDeXZDeAqkWmvNeHPnL6NXpTC22LC8PHY",
  "key24": "66mk4gRgKXg2w86TJ2qYWyqpkQtTNSFwuRyJhMGoqMrnKJYqQQVGoZz7eC3GW6XfTVq6xUQ3gNjGrWEAYFQnpRfV",
  "key25": "4zkHQ5PM1AaQ5GngHFLjJrgs5sUaamBTX6jrXBNxsF9zvnKWoCZTaiLPpE8jxmwMhuHagai1s7QbEjjGu3eWthkN",
  "key26": "2zunh1G2WHh6Szr8upqRzZk6QUdsrmhAQdCLwWWQQ8zqDNDoa7zccMQojV5ZaGgwZkNjS2A3nvaqoF67kuZKTmKW",
  "key27": "23Zh2JkcvPZbPiePajoDKN7TktYj9DRXPnRERAGPXPvLgLQE2ynnimowA1EtFBSnQmPD9o6N9efkiu8aUmoSm8yS",
  "key28": "5inccB9vD7AtG5TfdAT6WypeMrSVGK9VvestvTs82rSKXEsV2h5ZfALA9haAtGJhtUTGokks9XBNL3YGz2At3v62",
  "key29": "3Hx1u2RhbkKy3DjVHyn9Q7cmWAPMviQUb5foFAZfd9FUDizftnGX4xMrzrFu6rT8GAtqcCBgnHtbP1NMaVnULQGx",
  "key30": "rasxRt4Ee1FkhAsEBdchnopemNv5LQiVGDQwRvNXQtoCqpGpPvz4kQpmF6CcDdJdQCP8FtteZNZQZ8xMhqRMSjv",
  "key31": "4DbLJHcPEnSvyGCwNBxEZfEdvFCqGLMTYeoTraaDULuPwAQQ2RoWY6vr9NTRYudkoF77CoodvUy3ZBT9sjq7kWnd",
  "key32": "4YfSzQ87ShdVWJc7Aj5ugmLd67z7i8Ze6QQy6mqTvah13KorHRkHwyqk33DrvuS2c3pfF8Lim51NpKMoBuYmrLvB",
  "key33": "3y6xF8napR9uniyeaGvPk68X7JbussHVmdyz6GYpAHzFd1DskMQiuE4CigvaTFgHuH5zwmUzdH2LgnLSVVVAbMTe",
  "key34": "3fA676vpm2XeXHttKKXJP1H5qubK3dzkcNMr3Mp2SG32BMwB8euuEtvw4SR6NX1LWxW1GJwDcbvzdYj7TVpkCd2c",
  "key35": "4ms5aTXwdtX12rD3jar66UZkSpivUCUFuTS6hN64G4YKXmHvLyrofy7qc2AFmy8FzbmVg6ZMPKnf9svY2fo2pNCz",
  "key36": "2c63HVCXbmnStNco4hajZezhCvmktW7nv9L1V8enhjAHVZpat7dbiwwdHePNy2hU32cVrXhU8kMqsgfSCbDnFjAi",
  "key37": "4pJ1NFfQsrhDBL8SEN4hjt7ZGF9Uzw5oRRmqLQkP3aij7hvVTimzijXCXMT8VncXXofVq8DGinNkhhuBs8vZrTV3",
  "key38": "64VceX7hLh45HB3r1ANfzHbZ5uVoR5c2p5knUJ15oCDqncEgrAMiwJgkT5TyshULibnFn2TjWVtriWEeVNbBKeNG",
  "key39": "5XNdM85dbSg3FkkGt6aF7xuhMALMEQ1VcuAaHzrHNytmPwqzi6jpBmesc2BPnFEyG5z6Cv687FYwRh1pgKFfAk4A",
  "key40": "3vHSwUieWUtJ2KeijdvkKtu7HUh3uXkzzTYuvALX5W9jnVJXRUWQjKeFxd9JRVuqCYagCJaKygZsFs4T3o4xjMfR",
  "key41": "2BQ4GTgeGAxQciET3hwgn3dk52tXtaenxQmJh2LBVsk2G212d21YTLTaf2kpZHsX9AMStXGwL927vFbmyEsHMrfE"
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
