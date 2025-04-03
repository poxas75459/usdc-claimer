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
    "Au7w6ELxUZfEgQyuXVM477cEZvBUpG1AxjimMPFgRSjshFugugB8JVekd6utEZdbVhd6XqC2zK3q17GDV4dJonQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oxVZ3HZSUSrhK9AfaZWLHnNrv4tBJwcZJLDEBtZdMbuqzbZDexTpZn5h45bNjHazHe15x6GmLopC3tJ2Esm986N",
  "key1": "2JRmZrHxGNH2A6tkEksKwioEnVFveYojsNYcuVvM32GVBs99ccRBRCP2Qj9eK6EmQPfJQ4e1LonVmwVzAQHhvDAh",
  "key2": "2CKrUXBLjEPBPy3UmYHX1E5pcw8HfVFhaPHLfVDroixQtaZn5ux2Eoqr1b2XTqcLVEgcuVqZfDHNQwEVbeVr9u1n",
  "key3": "36mqCcfJYrNXF3ugudSbmRf8cvebpbipf1SvY8m8jytF4LDM3hhV8rEA8KtdtT78AiiadK5PanDCNgY3Mc98wVwm",
  "key4": "3JeJwcvrtqctrDPQMZYzdzgDPu9pnATs1BWfpRL1FFtFFh1UovVACnQnpqE83fyswBBdVosiA8UpWZDULngCDei1",
  "key5": "2hJSC8HktpD19ktbhrA9EFyXuN1adFGrRwwZ4oCTeprGj2D1664v27xw7wxcet66KuFkcSUeNsxACxZS1BcxFDfD",
  "key6": "3SRdBbTiDKojrmesupKnLZyG25AYa7mr4BsDSSvMoLy8sfdVZvjuXAr8YPkcSSxLpE6PSLqr8SVCwmZh3tXoqRC8",
  "key7": "4VqZvrQTaxNiKrNhzfPpWy6ywGT4jkGhRV4YKSL6SVSbVA7m1Vc5eNqGt4fFTWACex1QHGAobd8ZYwpsj2HqZGvT",
  "key8": "2FZ8wX5wWk1jEZU9o7tEaptJNTMCYMd4vZJSepWhoftNV8B4dGzjqcqLgDTjcGV1R5hH13YNPeamPS9bXtNwg35Y",
  "key9": "4Jr9iySWXnQqz1C4368G4MK4a7dEp9qXexe1nFQaSgHDGKdTXPDpMoZbeXH5g5HdSdqpgkDRT9Hdb3Jwpn37jgHm",
  "key10": "3a2eVJ1ng1Rg81wnPyWXhkxz2SBjbzVa4u8vVH5nN3AVB6ETY1FxBvnfNuyndy2vNvjj5aWhNxYkdCDV4qYGVFzj",
  "key11": "313kYx8ZgyTwjKoLADbYdc6D52nLgcGhsU5uiGJxDMot59S4n4M9y8iuiV3RdjjctRT5fXcnLeuA8dhBuked4fyC",
  "key12": "2XYeb6tTuYZXiVRYMZBQuTFmRoP1RRwVkcteJEpxA8YDhH7eqMY3miRGdKcWS6tt6sstY2WQuCqS9b2PnuaQkZP3",
  "key13": "3eVjMhC2S3Hck9Q6TQQUn6GHSyn5ASkiorqm8kdPhMitxV1DagTKEVBmai5LZoGf7FpdasrqWgJUog5Z3cXyvD1c",
  "key14": "2ZMaB9LZtMCFn82KpV6Vk1whvjuoSmrFPKBhnNHcmGuwSTgT2yB6LcrTtLbVLPYG2X3qmbF5ddfmLFs5d6nRdjEu",
  "key15": "2fRKrCtK4q7Qgpb1dJRc2QmC4Vw5eoQzV95EAmdoLf5woGVsAc32kkDTFJyheSynMu5BBffkHx1DnvqkgE6PW2bM",
  "key16": "4GeeFCPxrqEaJwMqpcxMGUeAWFxikkubwHxUd8BiEQZ2hQKSzcfvmtCY6XPJYsdv6n8NT7eqkQuo2N1GN4juszrr",
  "key17": "2mqU5z1AWh3qvtcXgvwmzSqcF3rzXPjuRAjUyVLxtn4yWYcKETe6gzFErynqUNUMMKp44qeRo9g9Si3iHT1QhzSz",
  "key18": "54taGrXysptCCNtkquxnKFC2UNVmAAymQ3GWa5avyT3Wj4VG3pqgnshs6z6rdmv1xFHY7whwJ79ofcEq4ZLKSVEu",
  "key19": "4tcGzJfmLP542GNjS1jEoJYVXAPUvUQka7xdK6EqdbiSHq1vsyC67Sk16ta6itL4AYkzW97YbMqN7PWQDdbozm9f",
  "key20": "4AWVrsqDDHqA2oCHnRvzZS7UCys8AEasZHG5GAMGY8Qfn3h3ri2GYVHXs3PZNc1Xg6QstZMQxNJAo6rhBtoHUbZe",
  "key21": "4xvLnXFtTF9fs6LSN2u7E88RvtVSj9WkvwkNLKcTJT1cVndzJfq7dQCctgXUXdnkTTtQBo355rAnkM8TBW2ndjAk",
  "key22": "4PZuWpvwWKLYDDGwA7KUaRNmzqC1f1iLrRg44H6whRFeA8e7SopQwNiwX3hu3iXFaWu9asQv7X9KcuYFrXt6fWnf",
  "key23": "4YtE1WNWncaKY1V5qbDztGit36DTxDuDRbNMySSbEyzbRdrQXu9vASWYCzc3NKDsgVHpLyAcBuLWc3zk7qWMwiyJ",
  "key24": "3HwQ8sWH4QYSWMWtRgAFiBa33eBkkmjpRgRtsBSWt6X5CrNPawm8yp3Nw2SCYno5Hhv9ziow5MhLsGoLkJQSYUUx",
  "key25": "5brKZPcL8zCB2PcpxieueheCqH5twTicbj13X13X8TD5Ae9zodexsEnKnXTkh2G9hHjKNmGZrNw387JfWMHnncSh",
  "key26": "2Q9qL63xDF11xMPkqcYS8HfjCdreArW9VM4KwbHPpGS2hdBrr5559vHGbfzaxhgQs4oW6572arMNkPfJF99Vjacc",
  "key27": "45FYn3Vs5oJ6RkuoA3SV8fSHsvkptWFAKwN36ah1vNfEaCeVg7ihUAeiPyoPuVjeqftbGacrzisfKtjCVh9mRZZm",
  "key28": "5pjh48YCD3bbyrRdHR3ywPi6JxLTCGqbVToaCcXriAiP2n5EdavmTuv5L2JyxdubuTaEacRNtomaUkKjTStLjnP2",
  "key29": "2PrG9rGcHk2dWxAArCWbwHFsb2AMxPhnW6NP8tFdZ5moHKeCNvDkmn8yoiNoRjmRfm93H5dbKihGV5Mm872wnsBu",
  "key30": "4FMDsiLy2KJva6BEhKJdLKb6B66Q91aG638xyUbDobdNK6DCqtgNpFa3A778KRaTomcj3YXJaL7XKB8Be4JoA7F2",
  "key31": "yTzw26Vbkij4gZs1JfzKLvBagwUa6S3LSJ6vLt83a5j68pzLvXbT15zvNDy3c1kPZ7sB3oCQooxxGqU6MwXTKVN",
  "key32": "4jnFKH7kwvp4n3xrLTopGeHTNhC2djgiDjQ5HVBqmRKJ9kcoyZNC24VHmdVfCLvQrsF8PmMRyWtZcFiKBUt8vU6L",
  "key33": "2mAuiMmp3Jkd6VRP2TY5mcjNbQKQueXDZgpjjv6JXiHur3Jp4oyeTwjakh7YAaXqihdjgCiJxBdkowk4JCDPDAmH",
  "key34": "42RHJT3QBpvbhXoDSrJzHXwdbFEf3wNsrPUAWM8b1G8ZxB3yyCUxsHAUxBF7Grh8rCWK7XbzSUrpi9gr27Gb1Hvm",
  "key35": "5mbeLbBQJxmitRSaww4EzF63aJx83T4d4YFpFUKmc27udGYAk6HGpfP6WCE8VcZ8RDciPvXGEM4BTWjTMmBAKKzu",
  "key36": "4wSfiAUqtJCRRpqywZ1PbPFP3mvSHfwkgbtUESvfHfsBQ9Ci1JStJdQqxHGqjzQApxNagYgCGtvzAMyBYHzggp3G",
  "key37": "5v23St7QSiLbTx4vvuxgZq9VgGqMS8LWnsg93z15Mo1wSh7moVx7B4RiJBYFmUqBftgruuSsgvLpW2QYL1WifzQA",
  "key38": "2EAfC11qX66b7RRC9Rs4RFoJRqYJriEySA2ActGPjYd1ctgLt4hXfUNWL3CU9AoPkbgxPKyBFFgq66abufDWvJAG",
  "key39": "vN5S5kpZkZrCxdhQEU9RZZYvvUY1LoJabsMeFd8NKXVL1A9FGs4pP18obFm9nGus3BhugbDnTehRmEcSeq1iGwz",
  "key40": "38dzmRLkBLJQPofkeGPF5t3SvEXjdCkzugXe4C8nXsebqbmcbctEYXvHD1E6Mt6RxzZhRTDoRqsREodBY17jYR1f",
  "key41": "3py66kE9Y6ZqeAGY1faRRaQf2MmDc7soE74Lk6N9f8B1xiKnzP5qbXJ2Me4ysr2f5733WRP1hw5nVyJbehVugVu8",
  "key42": "4ECk2cVE2DBTVJBQmZ9hjDF4UCzwZWk8v1ywJt7oxAe9mAcQkWNNdq2NEMyWTkyJG7NZVPV5xQZWqYyziFoVnZy1"
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
