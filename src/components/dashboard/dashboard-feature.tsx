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
    "5hYTRmuBBFapWLtNFyY74v6N8EUkYYRB19N6ZaKWkxXT9VmRBpeLSm9UZ8EyGTNtu857q74ohaAD92jahQEuqT8y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LA29S1intuQ3DAVKJYaiSiBKkeSVGu1SfLbQf8tHsTYh3ZPhM3NAeUYveW6BviDdzMWt7iHvJuYMEynQVnrdjA9",
  "key1": "4cAxMAs9hL3nVfNDgXbbn3TQz6sDMGkeioueCV8KCWWNP6fobX8rqhPFBL6gsgfuuJbyiu7xo1UbQ8HQy8mnFe2E",
  "key2": "4F4Fd99oRyf98YgEXGuoXGRuRC1yMaDoym7R4U64Br2SR3K7o4PaCL1qtCLc1R6BKtLqtxdwydoA1myTZ6jiboo3",
  "key3": "5GNJMcRAjY2NLVfQEZFrv3kn86vj7tAVPZKMVFpaeyePdjrBQg54ybMu9SoYKhWqJzWxbPVDHLsmsgGp9bTLtQ89",
  "key4": "3jhqwt3hw6z8CXmu6gRJ8o28G8pvaVWDMsq5T2Ezsgm4NX6BTsTaZZ1uR6EA16XiSQbtpzPM6xaZnMRHy1vMy938",
  "key5": "3o59DStU1N5BJaJDWuGzpFuXW1dZqBpfxiBMbZkDnjUfEnFYczGRp4D7hTVWG9Mexx8J8iXYTtFLTHuG5fsn7TW7",
  "key6": "WycRGXboSt7ZnQFUmi5dT9RxNPUCpC3hhJtA1zuDN4kjVKu1LxFS5U8PmD8LcGo8mq2LmrMhTuM3uS8E69kVwD1",
  "key7": "29mqdK9ad9egYNaAZzTrBYnYf4hj5C1kWu3wmTpWhDHUdRVAXKBwUEfdH8zwMwCQijotF3QG89FPRmnCfaPHxpVb",
  "key8": "3C2cSwJkqRDHgTbDRocoNnchfTmamcXiAen4yGQV22y9daQbc9A4D3nehRPhzoSWLGW8dVvYTeWceD3qT3YnHf3q",
  "key9": "2VUmhrBBCCS9TzvXYBovBkhB2mw8U6fZhEv3qiuAE8iksAYtuFon3P4TyTE8f18qRrWhffBxsJnZtsqkUkf6UQR9",
  "key10": "5gmEzkrVJoPcNXkYr7Dj6e4SPBA6ZgADcpbzUmuRJHBZnhNqGwfa9f5dEAPYK2BjWiorYf6XdP1Qietui7aijtxP",
  "key11": "QtHoEEY7TaP2Epss1WTn5FkKzB52cVFTKhjfnV2ezbMF3wXoaeH97DGTqgtmW9XarZqerB5SeSTbXgjoFRWfrdq",
  "key12": "43W8NX6JeMRH6Zvima6Bni2voFY6foXHbC7FX3AJcAvrw5Gv333tTCV4gkDR8N7A22Sq8A5cFDDUNEnvviK3jU3W",
  "key13": "24VCxyKkZ4tSkQudQBembC5XUzn2o4sPBYRnK1sSjQJMDKCuTskLD82Q9f6tbrKi4t9roi4f1t5UA1qEvgCVw57y",
  "key14": "2dc8tqSr6iBw3MyVZQzJnrwh1cz4MtwzC1bnHVZQm1e6xZHUGcPDKdZM82KCurvSKTqraBteYiagN1PExn4sap7w",
  "key15": "4gxZv1sYMdwX9qPWbNZGPqx2H5f6AKM37uF43AF6uf15nd1n6d4gLaDhgD6zfAMHDGjh66aY5r5L4NRVyBkHq6iL",
  "key16": "2V5abDvDZqUdtLvY9NaQNrLPk2HiG1RrzG5mMkp95rasTBx4qENiUBpHfnrSYofeysJjqk4ShCGrJwoNGYjX1vTD",
  "key17": "NiYqKtsycd9gTWGUpzUstdCkCKot82m3rEzsEdgJ8MQzQ5254FufDeyQUwEXBfsjKgUECqAEiwj1dezwXH1sYm2",
  "key18": "2RBxX1uLzQ12Sh1sLTahVKb13BipAx1Hbcr7aNtZxgzVdK8DGAi4isE2NNLjR7BBBxFYcob6x5Wd8Nt61tjw3ULm",
  "key19": "4Wzj9EkuxDc9XHAaj9K1qWuWMWnES2Qc3RhTatcuzFgH8me8gw3xuUdcWmMf4bgGQSUsX5L63Gy17mhn7kXYFxwa",
  "key20": "4tV6Uqa3WfXx34ATePVcaWqEuQg2EaGiMinr4vLe97g92hmBxacmMRQnJqJMkVyHJpx2hYeVVP1HwXtZgPVTnMds",
  "key21": "GuNRG4Pq5pawu17vhmQGefbf7kFMuuyhujLENYMjV4UK7TBLW7WfGvT14AhAfLmvx1Af1LD9TQBL18RV1f85GMZ",
  "key22": "3oTsjx5A3iNzvN9P3ChkAkXSnQhCzGv5Pw7TVhsbTyJkcT6GLZdDany1TQvRtYyDj2edH5GJd63KmEVHqj7kRki4",
  "key23": "5DDhQFnfbHZvKKND3695gTMKbm1rP2YFYsPNdkXzjzVKjwPKdngBdw7AqVK2x71vcYBV3NZFaHs4uuAGz6tpcUqh",
  "key24": "2NPoJ3uJmo7Yo7Z3vBixmZ4pjGi4zdV4ewbSmys3gvwkWP6ufAe5o1RY3H1YYy6G2TkMwkKcJR3NuRsgEf49udBG",
  "key25": "tCBipYoSsnmRLsBoiLeLt2BBokPM2fztMKzhoMCbLFSV4XfRxRUs1QyT5NkSdpxd4hYXgAJnbfQdb5jXEzjqXgL",
  "key26": "3rwMtd5dbKFXEhxAMWzg4owky9xgspKjXtQZhSrHqbZU2J8E3PATbkNdughCVGW7cFa3wgFAFFzMeXwTqcTmcgLU",
  "key27": "3CY5Hz6Q7ZgGYToeQcgusEsVNE6EA1jbBS2XWEz44CM1taSVYtZooivpMXMyE6cv4bXZD28bvfqBYDUoy81jc1T1",
  "key28": "3MLTxPbHPSJ1MeLxEEmNpzhNDShUkKuC9F7HdhswBMR6gUCu1JZC8bYZcSedTbAobioCzcuehbRL5pSXkHXf4MWC",
  "key29": "tcSuSgUt8N8GqJaMGvdjhHK9sBHfgU7tdNXS8cYiqLXaEpksf39SxHCosWckdYuZyEppBDEmGiuM6WFqJDPSN5m",
  "key30": "3D6qXbcprpuuH45iNTrShhsQeSs9Cw7KvetYtqhy1Y4NzYffcFRQEusLsU3dP4UwYzQyw7AoHD9K4qvDhMrTwhrm",
  "key31": "32FgKw96Cd7HpaBDejcwabz6dnK1hsC9XNH4K4mV2qk9ZgTmm6JPeSWFSuWMHQ6rymNNqqREMHCQnrqeJragJegh",
  "key32": "1WYxYk9YWh5JuuN9WyedKnPjt9xB4qHSRPbvU5yr9n7GRqbNcdJUhtHfcXZVtsu7ostDrz95hGZxrnyF1pvBdDB",
  "key33": "4423amZT3Do6q8WRgNZcat8xPpnmdHCqw9SQApRvThzkYmRLXFVL1U7Xqe4ZDi73xGdzyCyg1bZ1deFsBK9WVR5s",
  "key34": "2FQvraubL8TkQKj9kG2wbgZB9YBddQa3Jr9iRc3FLP7MUWkZoHLKx3mpphQky5q8cqXKHXZzFQ89FxwQ8xPKkygf",
  "key35": "21PQg1UruutDH68TTkZWMNW5FqvNPD3vtArgJaJKUSThd33Y5Fix6gZBQZwZYXDGgUW1DkrN4vtSJKGqANnqPwR1",
  "key36": "2UGnxkGB2a7HSBaodyHMpDDCXa1QWkZxTG4x9nWsE6feQRwypcGdkh9EV7EBSBPobhGTYHjNzFZxBjeatetYZpDQ",
  "key37": "JgVgmbYKk6VbpL1gjd2RYcLHwSrMmcmhmQDAZ8MRD5XB3uyuG5Xm6VcyYHCAm1mfENtNN5gMazQDMXAsETFnN67",
  "key38": "27h5M5aqvw6uj5WxBcDZ6gTpbpDZwuKg4bFKwq8V8gsVkwcGBn4TJSz2GnGL4AqYBN76bUwmdJtJappHDa3ahTwc",
  "key39": "5VrCJFR5vX6qmbzgebKCD48W71XVKbvfKU1BDCsgfd6hiK6vdg7jAzSYxgkhNHdbTp7wtCqy5mzUq2eXsJfEn8iw",
  "key40": "5bsdSEuqx3bWNDPM6BGzaHSirhjqjx8WwFYog9KGRfrrSD9GXBFTJVgVbQZDsNfTo8SvMAfc2RLDtY8EDpLP7Ftr",
  "key41": "DdGppR4YAoBMdy7foULub9tqbQwYaDM3n8MnBbdexh5yDMmkSnmJbiQ8zoYAYVu3PJY7EiJ75vAt2QngbTaVkbg",
  "key42": "5okS64hm5fgkFxa3ubUgmG6iuJCq4ET9V5RLXBhWmR5gY3FuB6iwQf9bpFG7Xyzv7SLx2ef6kaV3Pz584hrMedwP",
  "key43": "2zvxQUXVZVBu6p1qYbpUbYYrEiLrFPGuYyorzA95zHfV3okWSU6UMfCdALzqgQdZzEpskmmDK83s7wwouvm2Agmg",
  "key44": "35WsfuF5kP1CPR3kNfqvxE928gktXShwoaggEmfxfbkjcg2mghLxC2vfLVbWLBXS8yKk8ZxsKezoAyWu8mNNFsLb",
  "key45": "3TA213jHd5UNhebmHBKGeyNno5oV3RJLYshcyEvM9jf12mg2uAoLYqRfF6aLb83BQqwJwRTAAmuWmD6ofpuSqNtF",
  "key46": "2ETPXxfWpWVu73zZuMoCpyzdQQyqQqD3ULZw7U4DWYBySEABvJvSRKR7ca8ixfJYU74XibTTTgsBcdtbHEAw79Av",
  "key47": "46Q427FmRUsBeRLb7uS8D3hxjrGYHrAYC2DgaCLH3UE7zUxNmLaR7BabqGLJ4XYV7tpS7N8WMGZHUc8wfGmwsJqn"
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
