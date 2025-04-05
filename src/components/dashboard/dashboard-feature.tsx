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
    "5ZumzpipsQzS3WWBWd4JdrA2YjbHpYjEsfXoRbpwggo35BQkC79h4K1VZn79FAmLgTAaWhSaZT2arXZsFvpRSipf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QePwsPqV7CEU5S5YvamTDSDATaNwVnT4ZKcQdQrNLov3rkr5RK47vdXLrFQNxJ831QrA1SVPR81FJCchzrEkE7E",
  "key1": "5feKhuL6kEYvhnm74WKcayMmSkqaeK2j7Tp2okSHxxCibWf5H5XqmaCpxruSbanY94twLWcBku83PZ6bBA11SMjH",
  "key2": "2AzoZ88Fg8k33dbJYMNQbWmWenrnjUVFDn6SK6itNQebQSbh7Fx5542XDdEow7oh7gthAHLubS74U372Dg2G7gK8",
  "key3": "2XwPhaLuY7NpmXwWPvBszxYgR4qtz19rAjk2Eq8XAUjMRhx7gGpqp9dALiyT6Mk2yAmRDVuWkXJCNo95puCwC45D",
  "key4": "4a2EXunmUwYT1ZzfvAUFSFFBFi7JGt9gE9PGzKZY4YcY1pCxXKJcLjP6pqqo2wX3N9aiFa93db3YmiNWAfPuvVUL",
  "key5": "4HTWHfemkJDFuW4sz7bDvEBpRgSWZrpT2g9nSbBw3YtpibXgbJd3M6QEKpkksTgCUYVMkHGCjCkzN4Cj2CXPsinT",
  "key6": "5c9LNj2vwNkwZATzpaTw5JqqKGMQuNScSjX5JMf7rhKhaMjjdsmxJ6irPS7fxfoSzEUqK5Rwb9q4gJYKiVWGVxCX",
  "key7": "4mdiuv7VpgG5mrbtDYF7KNJFbJx5WiWyuGiVivRfgziXD9PjCuRAVmr2cwchboyJgJ7HKU8E4ttGHzQzuCrnTr5Z",
  "key8": "3UwLUT7Fs1qLaEa1dqykxuMLw4qg3ug6A6wPcuujJZL4g9R1563AhHQTtJY9neGVJ3kR4ERkdcPqmbv7k8inSFtK",
  "key9": "57X4nEs4ajVecouvnYk1igU8khq1omCTQLGhDr5BHcrWYH61Q6ezt2xXQsj19dRy5hSSLKpPZoKvcbjYjyDA3cA1",
  "key10": "66PdNjMMcbDG19KqWdkW5oyApogSxNh3Rz1sCghY4Mx8CeXps6E5EMKxHfj6BkrfPSsZGhJzrUPBd2VstPcKhw9H",
  "key11": "3YT2Hz4cXxvHXW4kQ2YNxBaE11wzGfaiXKPQtTdZxyGKGXT1qpM32NgxrS8xfmHS1gjMfbHreyKuyKTyELDitmVw",
  "key12": "4uc7Q2yWpSiv9w8Ed5e1kbodFd1ENfo3SCJsJMdEu7W9tgQByntjMn2JEaKBaiGWbr5LrDx6ep9FdBqYjHunMVb5",
  "key13": "3qXrgjpbKCUwAtSiHQzDQR2HQArynY4WfH6KccNU9KnzrbRdbhomsN7ucEjYd1yWboQGJMfQm5wV8i5Rks7iprPD",
  "key14": "2YoQg2TNdiA8th9qSFS1GWhSu5s7AGsQWXnkfSEb484cVu21beVDE8onmyr2HHJxSV1zJLobGvEYRWG86wfPVdzY",
  "key15": "3NyjHks6A5SEbNXAkUHcMCbNFZMf6NjuabTToJmessek7DNpqs3o3UMmUufadstU5np2ssS7GtB5VJ96FjPLuqR9",
  "key16": "65jiEVGMvLmeUa2jdSoJcE8cqRC92nQCcAt5GustwbsQNjX7kidkLBoiAchxNvvFwZvNYSJpyLuQAHG9Ygb1dUHQ",
  "key17": "23ZG2FisnS16Cxe6LjMkYRqL4kpXcZFMxgjJm59Ne3QgfzWf9vdMn6xxHMQ63iQAbsfHqF8LQjh3gjfXtMXTiX34",
  "key18": "zR5c2ZR8u7BbevmgFw67hYewDzZmtEx6oW7qud4Y5SEsiGpmfrovfeKJnuNrhQ6iKvYPjsZq151Si8mmcrJ4Dn8",
  "key19": "23ftZP4Y5XnnCEXodhnb4fnQJgmu8nztPVSfiyhec6CH1sqZDptjujaZi16EDXWvLotvGK5WQoYZSWp5gAyrnspz",
  "key20": "54b8y44C5vvrBMeLn662eV581J3DaqbUa6FXVvD22PNxwMZkvKUyTr3XCuct7j2nS9iTdJe36BhaSGh9mJBt94pc",
  "key21": "4Sv31NruifWoUscPZJ64NU5k545WUutMbbwMaEjNoakJLLPdUVr2AHvRsYnAVujMGHuuq4EgVr3kWJw7ZqPo6Jkp",
  "key22": "3awXNs1zSgAQGVttmnzKtz9kGWFREKD6YQjANDDHXqzhrKrBuLfYP861xMDREWn5tT5vph952yEd7VfVdAJJGkH1",
  "key23": "5oY3B6WtNg6RNrngTNTxViFR81CJsLdJhFnJBuqLuno34fHcNJfHWx4kFsvVkCeTnZ2WrzT7nqfZLP5nSKDPjXMy",
  "key24": "2YqXeYM9pLf7wz37w7DXWQ4tyrGDxrocXAWbCk3X6HApzMd77hJnDrh3ebpUZmyVdc4r6EQ3KejwWUMKYGMxBshF",
  "key25": "UwBZuXRNotHTSesmBvZabPvmuyx6w5RCwAMiAC8G7cTZDdDCBWnfYGFtDWRyEvHb8iAre4jQaMiB4QsuTeoC1Fi",
  "key26": "4dzJJNjaacugr2q5nJshiEMtqsYx1m3YjvFKEdAChAjmztx5XVjrgXxQq4uFvz9JaYVqrpxBFmjC2Kf32fcAj1o9",
  "key27": "451YfPVsd9dmHpARoPL9pn1JNFqdc4WdCKDcNT39isyTuKTT3V3TP364FnvP72iqEhyxaeRCcYzJrtFZ9Sv9ngLH",
  "key28": "2LKGgJozads8enu1YpWGvNw3vyqsvmXxCNPru6jnecubTTnffwP9541RfVvgKHv7SzAv98gjaLBwJtfJdH5PxLrL",
  "key29": "2k4TCDv4217qzdUGUPo4XNtGVKBPUj9YGEQxBvpMa4hFtbbeZeXTBUyyXtw3sSEmjqKT3FaXBGZLhsgPq1SgAzKt",
  "key30": "2UePDgbajrbsuweJQgyTx4FQsVEuGqsXAQ3XVPvmJLQpw7igJVsTUcr7x5SgYiSXeyBz1Ax25BG1EGvPuR5aVknz",
  "key31": "48RZUM8LnmJjqJiwvFKAkvbwUHQp6bNiBwTBpRVAFF2WmaBn5frhPmwfqCqAPmCjCrwvTfjyExNxrBE9qKkVLZL",
  "key32": "3BSBPqMXvbz3xuUJG9oHYt18ry4wX9Z2dBZBzFfhiYPfFMF8ZPHozJG6DMv2b7MN88wnCJzahCezY3dV4dKzj3pA",
  "key33": "5YcSSiCVcV8LqAvjaqUJDnK5dFmU812G1KhSCsHC3d7NyoZh7dBMaPosfEdSHUTifkuFyV18AbK152HrHoLWJGYc",
  "key34": "2kyXHpJmUh4KhyBgkYmf73hfz27Hbp9qEmQUoQ4JoBFMuhrAhWe9x8kviswRCGCepGiMpok5nUYycExM2jfAsHtm",
  "key35": "37HVt7UA5dB647zAo37Bdh8PZDY3V2qe1kzgqd1XX88JyW51i9tt7NFZT57KxMY3HY12wnwaFbCL1nrtZx67a5mR",
  "key36": "4oPxhdv8Nzj5o3z31KKdfXjTbt4nCj9AZJfuiUimFyjpzbH9YFdxqTW1jugquP1QZQZqjYEgWCnYyqt5PkKnRwsw",
  "key37": "2Qd1zg8LGqmiS6QTY5iDZrXYBwCjStHyyutwHAn45SatQ6sAC2pgtzTJE6dW9q5uVJE6mUqHh4Teu4gN95RBpAnQ",
  "key38": "5Y7TTDP1nbwqP3Xk5LJHyd8bWXJKsVfHkuGfvtRCbFzXMdeMSWjSeMa983f5ooerqALsmSPKAY1Qrnyv2MqE1zKx",
  "key39": "2f5vXDhSV7vjBTB4Y6ikW4rStif5bTicfBtd2x2UFzdgamRNaqn6E2WYujJSPn1n8EyVxZuWxDgALxEpna8bLeae",
  "key40": "5jGDkwa43yoXfTZayAtnHYm58n636FGezx5zrpRWzC6ZHDxkkqteQeq3amyfsVUCRB9sWbgnHtDxvYhJmXh93cp2",
  "key41": "3ZqRANivRWjVTU1YVkDcVDXBuxBE3qDyPgqyQQ4hPMnswV4oGewZAzdy92eXUm2nXmV7Cui3eUBypQsGa5GAzZdX",
  "key42": "4kiXYvUGS85qpwMHAtu9YKHCBvxpuVwoL5Sayz3VWMBJ4YQSzD8xoEGbHHkTM2mWZ2vSm2v7CXTte3A1A4E7AyGr",
  "key43": "2tjCnx2gs9BRG3tntuJV8xN1kAW3KsX7JHxVqE3J98bsVhbuRcrFdsLephtNvepYCxPybHXqJ4W8i14DBa6FbXtB",
  "key44": "48GHmrKw77sU7v7Z2HFSBkD57vt6bZxp7h4xTzBmyC4u7iYC9QoXPEHmgAFqAQTavvn7dxP2EyhS6myC9Zcf2g3P",
  "key45": "4QSdBf2ZdkddeRMG9GViTjs7THriymMGLKEKeHdXKubLrDoBU9odPCNykVEassobuQ3nRUKEhMr6tN5a2Q6tc4Xk",
  "key46": "LCgBrwEbP7pX6NXFnV5SFr6DUtPLrHPfha6Dq5ATbCWgJDo3wDBwSGmryce8ZpunCtELCejS2agnyS1ytqKpAFk",
  "key47": "2qdkyBHnFLjMP4A2wfiFQv13CMt9bLs7Aqqa1Q66p28KZBmnrUTbbJLYbuSzcvq6DzVoT2AhNaU8cRuWf6MDKfz",
  "key48": "3UoXKwABMdm6z69YUJPWoach5Bpx32dKu3FeFZ47raDuyU6Esoj6a8cTowAYs3mgqi9EtnsuyQP1r9RPkMQGrwr4",
  "key49": "5GrJPwfb9Hs8pS9Q9mW3aHzbDmcCybB3YQbjva4BeWWX1Yr6JYQcSdy8eV6er1EA3m2MYq6qPc3Mg2M5FGZ9Vwqc"
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
