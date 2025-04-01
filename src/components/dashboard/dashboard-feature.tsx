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
    "ArU9UzFerfrnUXqKm4MKzmmnr3JRtVpGXVQSdHqgonuqZKXs4bMHfYJiMXPTBzA6eS1eJJ4wqrLGhSX6XEXW6yv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47yjf13YmZtJ6mniZCoeQCbAJo9euMLjCyfogr5XinhKbCSRc6zjGAXzeeZjxn9JmmBV19rWBffP4mx3txtohuSS",
  "key1": "2YFRQLkNnG4aEU5o5knSJJoAUTYqTFvY8nJzU8SA8CVqQB7XyJCiq5y3q3g3jM6rj1WWBZBR9ZGKwoJwFcCsRPud",
  "key2": "YwmAd3Ha9eo2AUde2RDCwmu6pYvtFD6i4X7e89GZiqG9AyFMCiTbu7hc3PDrbLizWXNLpqo6kSfMb3Yj5AGKysm",
  "key3": "4CA6cSvk4YAxAdeVEUwbdxa843w6HqEmhLYrPpy2X6hiDLFhvJV7XeCZWcVFa88suFnQaxpT22Yx4cnh8uNxXYg1",
  "key4": "21adZKisGA46QyfdgdQHfZaHw4PpYGtDuvBYqHDvoMGgWksbSSHCaX8hiMnzcRcJJWPMmM2CprqZsb2ksQMwYg8s",
  "key5": "2YWjsVYp4yVHy8hxciCVosgHVGsPQnDRFn2J6xhMLihB5wcQ63iNDaTe79pfQ8JwLVa7RQupRiSC2PrkVUEuBNJF",
  "key6": "f4TezuDUo2w8sqVRJRG8uUo73yMXk1ZsUNtBCmUF626feGWLKgqRSYF2DEqr7qLCwU1bX4aQtRVnPLPT7szM6ZF",
  "key7": "2D2a2A7kDLLpnZEtDn8V4UeJR4vNCjU4MPX3GRR9a5XBX9h29jxQJNkCjozV5VKegMKyDBqfDcGHBuqGRmEXPkSG",
  "key8": "2cLzCT4N72WZZpi5Ssu19rys3yT8wfYLcRXYN955sTbczTWxVATntPwt6dSKugD4fUYY4Abp26VGEu4j5yUtuxmA",
  "key9": "dYG9Ekg4LUTmMrRVqeoFiKwHogYyjR3kVUyVgD1dHQAHFMAHVsjT9UpL7S6YV2pq5iYVD78N1ZmPeUqDgFE6bK2",
  "key10": "48yoW6ZsATXXMobheGR37DBg9BnJGvRB2Udj9UkTnVNgLu5Q5epjsLxCy5U9GYqvASaDtNdSgVG956vSNEVS33yD",
  "key11": "zJLf66ZQbrDxtnULtYq8JuXG78hrfj5xon6AripmFXTDZQZ62NSUugfsM29kAHN7zrMb7fdD2mtrFTdRm2d4M7e",
  "key12": "3itQ4RhSznsC5Z7m5HGNByge5fvUcPtwQyzEusjaajBC8rJj8KnZixq298znH94YM5KoK5ex7BDNWcWuctNmYDyq",
  "key13": "4XdCmjcN79nwK24jWxRXmEpKmVzM9eyqvCZ8ukodCNG34Sb1M5ZbXqo1FuMVAMf3UwZtsp5BhHUJfgzR54w5K5p",
  "key14": "4kdt2Hsty8eBbrjTVrg6DsRGcnGTxeoDm6Bc7EMQARFzzTRSKAozT4nxhEahpVnYXUA6Q8RNuHTJsshm8CDT8ak7",
  "key15": "5s98Gwz9H5s8VksJQP2JdT1zky3gYyKWuW8UToDfcpvnghaK5R1fgBT2m76qxmfwEsDWskDXvcXgpvyyvUBarJLA",
  "key16": "cD5zZna6fPZnJhUX332Hqgmz7UqbdCZywLtWSdJBr5r1juuEEVmth72NAsmzBByYgN6ou1UYr34aU6ajUPT4RZL",
  "key17": "5SHUyAQsyTRi8rPBhzMQ6phES8qKJcuUJM5Wq3h4Z2kMtZkvwYduCfRE62Bsm4Le5LTtgfVr8JZTKVRUrHfiDAcu",
  "key18": "4mpJUKHm71Vzx6Ca8BZP7jHpvp9vhgep3DQuJto3QbEuE5UpEckiq8merg22F5jiL4smxcUCBeegHCJcUpRotpxQ",
  "key19": "56gAUwKm2sA2XgaRQVaw64XZ81khH7Zo6xc34yURY8kAqzXA54EeUq9TvtLUzQx2gRtA6PttpeUvtymEnmR16K8J",
  "key20": "C4usv7jR1pX6NufifaLLdWHwF1DKGdsw3MtTQKCwSXcSgTKETiSMnTPMzFPhqM57RduzY9aBTA58gwutRwKGZGp",
  "key21": "5w9JbxiN8BojskQTW3ezzFsWqbPQcLYbxRTsZxFPeZU84XCkUqsFguqQ34KAweMPDrmYktt4aHLNbA9yddRX8QzU",
  "key22": "5wf2cWzSwBNJmoskuZw4bqfHC4GGzVrPMHXyfP4icEMswqS5m8xqAZ9yuRdMZo58iypVq5nU9XDZ7LjD3VhgAtRb",
  "key23": "3fpVzSinQmquScyuLACBRboMhz722woxrrMCXPkkVavt3Xnq8LPtHWGUhLpvtU3iVwu4NJic9HhGQTAazMCYcQeN",
  "key24": "3Czm9XoX1MfYbzRkgc74JUeYt4p17ys3hpa6PgpX6v4vr3oBzMph28pHDoBk7aTzNifW1gM8FZcjDVyzhtWrxTjB",
  "key25": "23ruus92SHCGme73RtJ7WUDRu29M5A692wCaPh6UspegHtxeSkM1qg34ETHpJDiG3fdCLPm2H7avuwuobqVZN56Q",
  "key26": "4MxqWFqsaHXF356nSEpzJuq8nBwnA1miLSEzXzWbmesEKEDptXxAoSNCGPF17vULMi4kN4HLd6UeBfoSBYCZjzq3",
  "key27": "M78Nre196Q7HaaN6K6qgJKnQ8WX8qKZ5RoakizDPgL82yBSxEz4e8sZTYcuwC9VavMfJoKDUCAfth51CeVBpFGp",
  "key28": "3cztTJE3pUiEqnDKedgm9pjqSHooDdsot7T1BwAF81Q4FCv3Zrmdpe3MLXKL5TL7Wm6W7c3rXstcw1UBNg9oh1Dm",
  "key29": "5FVXZBPzqKPZaovXrGsQDscKASyB4XiRrzk58pdtpyZ8nSKUK8EWakrETCTkGcquxzv4Kxo4yNVgEcuaWmXjZXun",
  "key30": "s4DqXUdVAnApbCpJpqf6eLDHyAKhUuShJSJzjqwjtdb25AvXmm4NUwV6YPJeYCvLepsYJ4rNunVMJDqybam8CTb",
  "key31": "2MRqY3fxA3syw5LAVNpf2qA8Dy1Xrvudprx7FmtnmB7SX8hqHvKvJKHLeaYcYJ1kGtZi1X58EVtf6EVF7R8KRFsW",
  "key32": "5w8MKgKwWdEjkLTbbAYRE7pd9muDnpxpxtPpANNyipkmm22oF65tL9nA5neVVoVMpqQqzWzTHx2LeyVibn2WAKNH",
  "key33": "4LBrNBkRUosgDr6aWk6PxfPBZuGV2CJ6Rn3YDMt3uZMhWTwx4re2Kx67stDFn6uNS1CE6BPGpuaPLGKhQ1sg2jxH",
  "key34": "4o6We2Ua8GMaHegKriY8yz48Bb2QBDXsCzhRtBDrvREhGsYWPkrKEGBz3eue9c4zN6GQ1xUGWWdKYKAAqFErX8Bc",
  "key35": "5rq9KL1GfGi91hWEVStwCQWCcwGZkd4Zq81THYcy8p9rPCMLsHsP45ho1oGmKxiSmf5CcpFybDqMzDF1D9UidShv",
  "key36": "2YmNRECgmmthsHCj26yuk7mnAe4oVNwCrps4de52ic37rQ8dB7YM2XTcBdynPYLVeC7JoWBkCiDZ436sbedvKJvE",
  "key37": "5BejbdTDB6M6tdQFwM4ACtfPu5VkiBuw9PmMBCVAzLpAJfJPfKCyjeMg7584pkAzKgvKaCQVUpVVfMoA9fDMviKs",
  "key38": "2RqA62k8rpKAG6cSN3fzZzh5UsdmbgtTiHfPeNKe19ugjWoDeffdwUgKYTpf14vrZQzUWq3fHhPBy1mP9kDXwpFJ",
  "key39": "1TzXkxBmZp5dSAADCepWwGcZyvHVTukz8MWa4zqLhvQYqwfAvkMmpCRhtVFaKLb8hGKvcbqadVVMEydAxy4xqzZ"
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
