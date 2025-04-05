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
    "4nW6WrVudjJcQyVnZiMZnB23sutxa7wez75PG995ZgGYffU8kVj2tWXufyDG4pJ1WuoLb324PbGgMAaAWGTcGas4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34LJgpbLkKQeUkN9U2P1KUKkwtBcqCszFSFapAheWRVBAtgJ5zcZndd3qWCs5ViR1o92oFBkMn14icE3trrUuVcf",
  "key1": "3Dmcr2tEDuXU9M7WMUvh7RkaNJ4eqvTTbwVywoonAoexxocdjF4pdLSFA7s48PPQCGM5yqKqkDzkcLVzVTYbfCXo",
  "key2": "5gKSFgqBcprbudKwT8wRbReijn2GovxH7a5qm3xGVgymNJXzQGRnngD3uDSpx38YtAiy1N5c8MczXRUjUhkJvdYP",
  "key3": "5hPzh6b285w8HmYo95mhoiSwSmq3nGmPNtr1gXSgrTLkLhjcbEUtcKJTu5idAQb4zrihThfZuGVN3vYdKUrBtYHT",
  "key4": "47PAdksDVwvuTUDQh7e4mRuNBcvHqRLDqUyRZK2mQfLAeZmURa1N7E4WKJV5XYwMCGqyx3WhscwYZe58XfwvdegE",
  "key5": "3TTiGcWV7JLJmnn8icGMBDuJiMXTdGbh1U47c1DdDXz9PqgztYTuMSW8zaaotPnfjdXrGPkRdTe1R9ioK8PMFaJ9",
  "key6": "5agtJE6SkStLev3LNUWhhTQ3RyHQuHG3hv4SSdJubYMMS1AzUSHRsGLURaq6chGXSASjNZVQGSNAAj9GLAqPALsd",
  "key7": "28HwXd735ENh86FBenzASKrAQXywy3Dd62i1rDepwVzEkGqi2ywXd19m7b83SZr3gvNFtLD6W4EtHP7328aiBsMc",
  "key8": "3PzrCpPs6vLrE2PvVJJuLdJTdew8Yp9L7wMNGteTBsegUJJjPCsoFHM8BFTBVzDDoLoc2gsZKp6WvQueRx5SKkwK",
  "key9": "811atMAuUAR3vTH1uapewWuko5gzzgCM2vokHkdmn3u4CLwG6cCPnJ5QZZHw7Y2x88DccT6oEauUV58FzCUgJeD",
  "key10": "3kMDcsX6aiKQRxnXBjeZ29Q8MboVAs6aweN2jYVfiA3RVKeXaKJUfvBbyYa4Ava3DpeviceX2PupdqctiLe2dinp",
  "key11": "zaCebyUSWJSPFyQ2uhvYH74yMDoqnw1uNtYvgze4oqQGfGYYCRKvzQG6jEBL9Z9DxUdMpE8UCcrZF3FEqMvvuE1",
  "key12": "3TnGtZB5RnMMd9eZk3jcrbMMUMg3AAyzzGT13iL7Ki7XqAwQPGt2AH68jp4ftFReEqnoMXWwHjEmFm5TE5FRSXWT",
  "key13": "5JzDiQ6T5K8HDNKLLdRDyfgU6W6xZZa27ut7aq8M89U3ZdauYdzLX1UJ84b7xS9LPa8LTVaRbipCuxSgEttKUFB3",
  "key14": "BzwNgxiVNZGbCnvXp6E4AX69AN1ZKgAR74mBvpPnFAx9ykHXAMenLXM5qxGaSkYFUpmMbAyDMdRd6VP4Pv3n7TZ",
  "key15": "5bjcuq7u2o3hTT6LbA7tHtJ7N7dyDXtFFjGrnrw762VFPUTpkBG5Zh7sA3NorGfY63Yf56kXbQaunkbbHnhJUimF",
  "key16": "2JauVR9UPLT1j2N7PwwenMxkB6Vtom1kFHwrJk2cMCFgiZQJMgEtMYXeCC8UZk2zHAZNAecJCHxYmUEfwQRx6KB5",
  "key17": "ZTmPPsnyUqi9oxqS6wW5KdqyzEwkhdX1QLsWNuLysSg2gQiQaxj3gjqDquoY6Hk7ayZz6eT7KLxnQ8W1S6RWK9X",
  "key18": "JjU9FTJGDVwA4eswdYtKDSBshJM1tqnyfyCNAw325Bv687kXB2fUcvmcAUAHy4mS47JtN4LTfnpuVdxzG3pbqhC",
  "key19": "4qDRA5t1XvWpuwipfJiLsdBKdb6PE76CKwJfHHuBdkNzqnj4FqQRUvrLsKb6eJSbwiypah9VTUXHfFV4zpE7SKWz",
  "key20": "VQKu2YR5NkJro3SEnRFbEVTCzJc6memVBBvpSUdm4vbJ7xW2LNBBr6MB3i7acEjFjLHdRCtgGn7keKDZLD2ACgJ",
  "key21": "51QcU63R4tjTiMKt5boxsmY35zabZhfXunXG5pBE98J5qECJYMbR1MTgpbrYSNUtjG6U8aH1hY69P6U9zync46S6",
  "key22": "5sk1LVs1sFo4Bw6YoiTdwSMXtwmm6ucPS8fXAa63XsrrkdfvUPjBygWiAyNqVDFu98qH5ZobfWAaj4zXVqQFRJBu",
  "key23": "2fBk2mq3JfCzp5gzZz1UQCHTffLWt65RS1PokuRJHVifHD73B3ZqyFbBn9yCr2dHsBqe4V7zTdpJjZsmdg4vuPnj",
  "key24": "3JGhHTNU6ZhporPgE43qqCQAx4G19P13uKmtJHLhVKAPMFakhwNpBydiw8pPTRaBzecTNwcNBsgJbCUpVPdzo43Z",
  "key25": "3gp5mzz7EZSmtzYdmZqS7XaqtB7DVxoY5rArTzPsMq7q4sGbMC4L9AGvRYYdfkcMVGG6CGASgv98fDmeXVjSjv3Q",
  "key26": "v5tc87SpSF18NJdmj1ZQ4dygghepyEBo9iq1DxFDaAfvedekYdZygKAMduJBnHTaNrPLyxRBekU4d2C4evL4CP1",
  "key27": "3Lb5FPGyyvonfpEQrgd7urA8N7Guo6W9ECpu7ya1Sr5yB4kiaXyZfWPhfNhhAcTcvHc2dpdgdELKbqjzn3v3VRQZ",
  "key28": "2JS9vSRDsduAQdNxpRoBYisXLniRycbfncCGJFkXGk7sCEsjLAncH5dQffJsz3QNJ1fJPL6G16u1BZhcxa8Nth4o",
  "key29": "5WEunA5wuCNBCCoZhfFzTjutvhfrMKs7h3pnKSv9vLBoxvFJFMQ3D8dLZjoaDKcSSWGRQtZYwTZ92ZALcubQ8Z4B",
  "key30": "5ZJmDkgiCfxzQQE1MJmGpYrMtRbXLZ8qsqbXoL9mFkKiPbFiWEvBiaJgwqZREmeV9zeUgo9R7jwyrigH6GGY3t3q",
  "key31": "3tem9LhW3wdT8BM7Ub4QN4G4e2JWkRTvQzKk81jtBUzWKcVHKH3Cke1vMDUJJFJw6YKjjs5m6HwjzQdhw1Jvoy2f",
  "key32": "61cp2cFu9Zze1kRZkMeAB4ne9ZeRQacesjs5nWAYymXRt8WetFEahHaygxvZbKQQv6xPRECpLGyo9miW9tZ2iqbB",
  "key33": "2wDisXhaqfBoR8BJ3PnjzfvvJytQvmCkr8dQgcMyE16PuLLGGAVTgA185Czh6mgiCQ3tnwES9cG6vN3GMhRpmPKu",
  "key34": "5Kkr1FHNDQz5UUZCNdWaTCdV9SyB2EYEbxLKHrDcVFJCvB3TrUeTDRCV7UAzfPBw5fAuH3WcBszRFk8Kfe4Y2qx5"
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
