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
    "3wW4Gyz7VBCxDCbKM355yD8G8wAWmDbaY9E3XvutV6Tbe2FbdzppBzuqryGnSkroCCmUv5HCimWXKiCdC8oLMZc7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rfpiaV8CMMShRU5qsiE2JG76Npn8BA1TkfdbmrSDrDsJA7Nj4pJ1ioyicbeQWcq4QWakzDWajZSY4ZLZaD6v7mb",
  "key1": "3FNkhrvtSDLJWXtD2a31ES8NkF3xkSPXqmvf5VoS4uHdnCiQBcmG9ipDqfSqJ3mA3ccoRqSDzUfCeMPixSjF5beV",
  "key2": "2VHieLct74Y6ezuTgtybQkPqL1hNrdq8r3BmeSTH4so94bCdJcnW2DcfuXKSkrFTJ751SSDxUhNWjfzQFxASvVhK",
  "key3": "3N6VG7qTkzyuitCNmBGVZcMuN2miV7whwiuaqXDay1rvcgf7kTwSJxMMYLazFjRJ3hYNFxNkyuBf2dftZKRSPo49",
  "key4": "2PQibbFzaMMGvPRfQcpYkT99scfztfNVm1VPn6zVAcUXoqs9PbMjur9h3TBh2MKV8wcK57f6iKzbJBayzs1Bjyyo",
  "key5": "24ztKzJkvTJNu4jMWgpngCd95fvPzavj7GqKuYKnyXi4qgLMGEnADQzt6XqBXV1hyvfPdV6MMSxJfvEn5KW6zxHY",
  "key6": "4hvktnSyJpkQmXrXvbfDCXzwn68WiPEWBQrMzGdHWAG3VzDG6TktRHrQyWow6wfh48HQAB8bavDAKTKBZF4ovebr",
  "key7": "2YsofSRuDF9qWnpwdRumXjFsd8hGaRhSLLwWnajCdgdF5YLduFyz3zSgaq4iV4L2D7sUUVm5S3JicyoomdyAwTMv",
  "key8": "3L7ioUtvARAuQE8Rxipa95jMidjLJDKCbnhg85iJ9Yfr2v13AHq37YYseCfv3MZAPohzJJeh1AD9rLo3GLXC7TT8",
  "key9": "3qcP4xaSwsfRUefP7aqLPyQ1QUin6YbgcxBNK7uFFrwjkWpMx1JtnKM5kWSBaaDvAhWzkrRHbk6J8knJkJRDb2P7",
  "key10": "5URRMCiErKQkTS7FsGQMaVpgnMzwMtUUpGECzBdJf6DQ31Vm6XAUJRH1yydWZrsLPjXmb3iSxTcYJeqMZNudGe6Y",
  "key11": "2bqkAtan7JRJoyp5jJR5XaMKUSXee1t2GtHT4FAZHctQ68CYA2PA2uGTyLmoJJhhuCS1a2orpzKAR6oAgCJqCGcB",
  "key12": "3h5ud87ArXtjTCZDhp1di19RvhJCmsZqA7zGgXhwmDQheyQ6zRYkMYG1NQY5R9Eu9R1WVGD33QJRPKbhqdHkZnLh",
  "key13": "58wL78XVfeeAMp7qLPpaWQe24AwdbTtAkkfJhDdnFJrUzGByNvnekjADAZgnb5WAEqrXV1ksuS9XDcwZFEZCymty",
  "key14": "4MAK4rGm9kZ1v5rxJm6YRmXtYj6EXxJ3eivVDdMsuraaQP5a6ka6W6bx4R1LkHTx7PEwSxwbdgC5PoKTxfwajS7R",
  "key15": "3A6CgCMKBfQF7m8AKNomJtEUx7GJHtvLAcowS8qsb9zMwLmEJedYJ4rntc1yLYB6CQEZmrXiSy7iwKb8XuB8NUEr",
  "key16": "59NprJF7ghmZwivytZ25QhtD2d3RuWoTiMqLKZN4woivWcUAZQ2kdcZtzPSvrQYCXA2iKJi7CzKc781myHjEdrdG",
  "key17": "5sDsAtVnVqswx3e8oXeycCe9aGgocwiXbqcDzuwb28nFxKVgqVnWLqE3CHtdGUkniroDnYVUpR1X2dWQ1nfFYBCR",
  "key18": "Batjmbos2WKNknXiJdswnHXpAAa4u1c53GrGunxqf15HsWWrHqPJAGqKXa4ptU86XgxFyBidNhGZeX6aCD3UKnz",
  "key19": "rfWUyJfonrpxnPooTcqoASvXJ5nYX4qpMHpQB5ikHbh969TEnrnfW1P9gLmLD7BFdXdcPr6ACANKPW2B9N7pnBR",
  "key20": "5Xz7ZRzPH9Hw5YX9qTZzDBdQ7f6ZHPisU1CghdcpvkhZLM2QJPwvaFZ7nRuzJ3su4eXM7aWPsdcJm1djNXQnSMtU",
  "key21": "mvrW7aRebrzo9gFguugVvcc7xaCkTyp8rKkjLFar1UoFZL6uUeKhQXSeSHdxjzifSwhuy7L5hUUmjKUjanTy2qo",
  "key22": "2mL2MU5nY4pmtsdTvn6MquRRKbYbP2KyouEMcdZ22jb4ySKgyV1BBkeK3nw4g36Cpf8ryG2qsszJkYnXzSPe42Gr",
  "key23": "32ZnwjagXVUNxDJVxCvEfhjosG7V8Y1vuSQpBaB28f1DojM7qT8VGoiQ993VTAuheUBu3b7qqw6SHCy6zPXvF3uL",
  "key24": "2xxfhQCopoTojJG8wLNs1whfihAgdD6vzDnxyPy56tS1MD2i8m96zfrWgf4uBtmmrmY7Z7WDRMBXkbTiZ8fnXUxe",
  "key25": "21ZsVwDuiUxRkbFjTdxiFdUQAHMgktQamYxojoZKT7wyPd66B9XQ8yZRFdtTT4Gr8nMN8t9qZrmqe5mmPD76ieWR",
  "key26": "3HPm4nUa8Ps79AKenMQ5kydBp3CWKQVFwDXpTbT6GPqbX6oSeCupTjCqq2YoTc3XjEni49oWMex9FaBAABJLnFmx",
  "key27": "5XEBuSWHXbMdpKFaYYDFP9dkozv5hdgBzTwx8Uu2cx7zkFZ9GpcJBwkVsX8W7oH1wWSUJLsmJKTCQKiL9Lj7QVnW",
  "key28": "6iDAJ8FMfPqTQKLpCWkFDem22X36ACnWZz4A4hKiwuXgPhRk1G9nqjgYupgiMkFb9amHbbAVzBfyzLfnTstiKm5",
  "key29": "4ZXYubpxqGxoVcEQpCf7pfpzgKJs5krL8SmimFGehRogWtyixw2SY7gXvFbc63soQqKNvPHns4xiWHZprphn73AL",
  "key30": "641PsPsqAeFYbCFGcxjHAmE5W4Yk7r7sRohi85PyLEVB4uKYBpS22r9Y97V8HAK58EigohS1sy5fK2eDgHfXUk6m",
  "key31": "4EJHormKcVDwcRA76DrBzdXW4F2ca8nSFAoTTnHsKsEZ4AEXsLgTJRd1q2C3PeAqaxwdGyEHtYVFf8cvx71sMaok",
  "key32": "3HtwwgCPDLLvANd2FnGKhMr9rYLT8AGpQM9idfDgJLZJVTf4ZSxAUWMRxAFj8rp7KAE5yAhLPCqLSMFjfVYdsPjE",
  "key33": "2sURj88sMt9zRrvh6QqM6qG3Hj6svt4ZtQyKMAHinvNFaBcd3XJXAoKCnxXBcX8mQMhigQQXqKr1NHSjxzFLHEfH",
  "key34": "2uh5rkYh4obnybjZyTaLBXFm1neiKt2WSc8Q8oAHASNPhzNUBUYKjKDfEga54Z82GUL4KNuGXfVpspHarkAbbuXK",
  "key35": "24wm3FWqwdUxtdCdSghWZarbJF74mXnXMW47WKwTpA31rAmcZGvrmrMMJG2MajZX1WAMYwUG95Z8ZeLU166UeLB3",
  "key36": "kMD3nxdbF5eYBZKgXhgNXyUoSrfEW7G6RBQSTTmooXo8fmRE5NxHh471GaXyh8ViWXy6MXdTEjRLZFnxELCULiR",
  "key37": "5ZrVhTJpgSWHToPhwuUqpvb2r937HiJ5SmFEgnoCZhnxFZvwNwYovvSstRrvbsPKuiacuqW4Tu22UiGxvYVumzH2",
  "key38": "4XUKagcShVwCFmYmpNRUqdzLbi8cPxM4dzJSTQwcxqKxwe4riDeSERivxphX6rRiyShqNRZmVdjKeUeyecTsr7PU",
  "key39": "63C1fPpx8HhGoBvdxs1dtX4MzVUiE6Ap6H5nVBQbdBBDucW7Ji8kNAKhj5CXeL5c1hBRxugaJD3XnVyKARMcUcj4",
  "key40": "JmmwBMDMmFMHwWwGCuMBggougwjUbiCAg2kmAVvWyTM6agakz7ThXpCFHoZcKFuTQkGrvme3XeRTPyN8rtbWsAE",
  "key41": "3jVrhi3UF19vhrJn99tVRbibDg5641AREygZ5Wg8gBQENE6aQ7swXePeZf2X79E4paPkiFU7GWfmBxUhEk9UbTGJ"
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
