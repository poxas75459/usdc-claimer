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
    "4S1EGYe6wQRDvyBtoDXh77iH5SgAUHBqdGuohhhJT9yiNW2jFoGCs3DV6z2KhK2twBH8vj8p2dXZ1PingBuMmVTG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PxsfxJbnAcUNCGFNwidQUpW8hCb2P6r2A8LKKqhx55x5a1Nht3ibBn3A2xAbveHd9wkoLafKrKDWY1cMrkQZjiv",
  "key1": "3FLQJp3jEDaRGYhuHUKrQnzhqQDnHcjAapomuAfUmu7kg8ERyX1e2XunQFNfaXgmB8DuXkmAGzCmu4Ydosb2hoEA",
  "key2": "64yJz1XfAH9G797LMM3NccPRYwCuc3QUofhttKXkA3mjMEPVht36GA2kvQReQrSrabVAzQjFfoD47nLrDqwsXLqN",
  "key3": "62Zivv9jDpc31qfhgcF9eG8sKqnfMHuUH8KLyEpgHi7Q8yAvZ3vDAFLE4miNaF23M2f9QAwahiRy8NVExy8pm7YY",
  "key4": "VgfjiP8B8fNUNPzrLtC69JxqVYyEkHA5oHvtCpCjnCq5maFb1YMgcwLdc8RbmJcPu3QvwFSq2JuvtuSMXhUFoPo",
  "key5": "36DyjAUzY2KGZhr4MXCGmPnX4jrFV51DfUfmvDAq7tLax1Pc8L9zQuCqpAV28R8PDkjjRgBGrEeBqWmMy6yQ1qxT",
  "key6": "5aPEsEWfzS4ywhrfkyiiqVCVLUxEanB7jqRnuLWBLqMKud3rWHKanvrep9K9Roj8bQwbkNKvcs3fFFq5G3CiwUvu",
  "key7": "2yG9G766s7f3QcKcKN7GDJTA7Pphrdmkpt1w3VbEuPHH5ZXfuHk5fEFvUXu6vCjsBs3rY6ZyNaavFjAaknabB7t7",
  "key8": "4PkiKfQpLmkdZ8WcFHSQzcvN2jaUGVwtjeJnq5g1D2frwNuhKCGyBSyD1NmWxUuE4hDxWVYecnJ36xuHsV93qSw5",
  "key9": "5NzPaP2722SuYza4WxKAZrP5ueX7KuQeHaSdPwsxwewHaUdEdsewyT61dDDVB4JujBR9SLJRsFe4xoJJxGK27jZe",
  "key10": "4pmniAMUQBbSkuGKmRPufpcKMNC56Xwy43kAg6q88zmi1xCM3vfySAZxnNB6w7sD5YnJZg7Bahxgb3Me19Fa72K6",
  "key11": "5F3nNMiAA2ctwAirzwwccuzoPB8YhNQ3zS9enh5gY7QKY1jnDdyWYSy2KEgHyHGvxrJQPFX7HNW5WxQW6PeA6DLq",
  "key12": "Aa7NxEkn2EThAQyJobvr35kJ9suJULnb2655mW5fqc42YtG5RzyxHmouexNecD3UdDLKw1wkgfhqJRmZGJQes1G",
  "key13": "29UvKivRX4zrYwXhpUsnXTHfNrG423M4Biwo1mMgzLKzxG5Q4Ct6p4nhxB7UQn9vpCmXDontRXyVy42Fzt4RWASp",
  "key14": "5Gsi55vVfkWgP5FjtGUAETrgosH6iPyZtu5ZFuM2YZKSKA5GzcoUuA8H3R2VW3Q4NpFn1RPQmU6eMGvi9AxZDhTE",
  "key15": "3R6AvB7S66LLtLriEb8n2KXdn72DRpXF6yLrTPVgn9pthmNaPdigGoEPhHh93MKgBVpjsevVgSWdUm9dN5e4XZmB",
  "key16": "2iLPhtvYzKLpXK3ZrSZ9WQADF239QgJ67jAydJnaDJqkdnx2XZ2FNhTEymTC5m6VrNX1gPWAaeLERJpzH2LnDVJQ",
  "key17": "4MDL8FZUPvfKiKTW6b4GyM8pWh1UZXVdsvWjfRiVjkZkELB2NtRW1vjfLBp9eHaHbz3pJufrrLPXow6cpCjM2ird",
  "key18": "E7VKM3RoaHe698EpNSkLB93GJ3xJM6DPk6E2cirWfijsejb4AY9uCWHdRcofMrogk5BkhpUYxyijQR7wfNgFN74",
  "key19": "7bKFZUagzDEY7hdb4JXXGUxSCM6xsbeTNsjkmutG47wVk1Guik8GVSghKS74cqj1s2EA6EDPAop4A18FtCwBWgY",
  "key20": "5GCDCqhVa9kTu8FrcdXrckJDc87j7KTpM4YHBVmymu37dR3PsiHRF7DadUGo77bQZBGBbtvxJ5GSgJVBjGvH9Zg4",
  "key21": "5VeYsEipohcbG42DsEjysB2hYehVhGCoadFPNNszpuJL1xvGi6JmfuH2jWCQHZ796gEjxJ5hV3koUbdL3CA56LBm",
  "key22": "vTG1i96wxJ5EN5LKgtWHnzobJfzZ5nepxNuDDr5gAhfD7DdBYAJJa8ECDwv3D2en9JkZB52zRMgSqru1jDNZkF8",
  "key23": "5Niy9p4Dt1Qsbf5VLZ5UiiGrLrJXh2CfWc5Q6tkahWHB5oZGhLCRKpvHWVx7meW75VKw13XqtY9ukbhzvyJkL3dZ",
  "key24": "5zY7wa8Dm4UNh7AaysUhBD13R5poAkmd5doPCxYunGc6VJyoQDBiGWPX5yMkFmnZ6YQwRpQTPtLwm5Wssb2piSKA",
  "key25": "3aGfMy8UjTpN5uF9GzHDBPTsXaiFLhqmcN93zmbQA8hNhmtDrQRBCWZMVwq6neqQRWoNnsNj6f3XL9zYsMUYkqJz",
  "key26": "3pnUvXyWoFNqu12wwgJZ6XGYiWRj2FAMzPMGjeCnUWfCUmZuiH3wKekdeMWsT53Qx13XEm3zrfQVaZCiXH9dLMsF",
  "key27": "4cccv1hb4qiBEZbAMC9cb2w3xKhprLSMnLwYh1H8aAwq7dWf6GDCc5yzvTTPkm979zsobzNB8NaGgd8EcjFyGnp9",
  "key28": "5i5Sqp1YJgUfMo2A68nC5tFcpaKLndTzgZ9yKwuuUA6f6BND1hkSpEVbksjY2HLgMud3qZ1WUKptkoBMoCWekDUT",
  "key29": "2RBAXXaqsokCZbLQcJL2t8cfjoF6pFeAsrQSo7GJBe3rVEt4No4PSxmB5rnbd4yQkdJ4iNevN7Dom2JhyChZT27Y",
  "key30": "2aLxK6xikdMHWkmNF9DT9TYw54ttQxqa3uXfExevSmNKTLa35G9TggEja5CX6jE7NYYV3KtpcsUreCvcJfvnncEX",
  "key31": "2HLWo4z6qHkwDJbWK2HbvTrwcqR5x1cbEUPhgTKDmuHzu1UXpMmfR4CqDxULFj5akJi5GPiA89kZ75PteZDP79Z9",
  "key32": "7dWJh4KNyzAHjpsCkg9Vs3e5At76GVNEE14nPteiLJXfoYyGg6cRgoFGAfkWPuGRA8UmRXA6URgWoAWRbap7VFt",
  "key33": "4atEBgPZM1qPoznSQMgYKakuJhYgRmh3CLRJ3U21ocFdxnyfhiEcS9C4eoPidi9ebP9djTrz9WbF4v72DbSCrETs",
  "key34": "3vkFXcgEtYQU4E2UTjv55ZgD9DQVL1mDaMyAV5gd4nBmJYFgX3VXM9pbabF9ZrHFGuNrxpR4N8efCvyAj1c79U8C",
  "key35": "62aiS9W1zBpLtqh4pgDZND1KRpCcZ5wQK2gkabPacyDENHr8hrwYc7dcZHrKfyjqjEgLixNvhajEUhXWEGyLyrTr",
  "key36": "3SahJ92Zk5FujG2KBCQcfTwy8SrhDDpA27yRNCoTDgSzkTCvvAyv8ocGidXuEJPFWtNJDWUQmK1MZaSiymFtCrBP",
  "key37": "3LFZ3UBA82tqPGTEBYkXvAeYNou3bHAYupmeH6mWbxfuGVKGcxXFDAVPW5VpVdEkt3YRnGv2vJMkDAdEgX9JucEK",
  "key38": "4o73yExpXyPtF4ci71iyHuKSJu7uh5ZfwWhiucVw3SrrkunicbXqukvMTJAvbYqWwEVvibCuk1g9zNWcQWpPLaCk",
  "key39": "43u7ZiHzqqKQSXA4HyPzfHpiJvegheXK8BeRVYwZbSsps1FHwogUwDH8APQNrHGaGMHLRTm1D8N8Ps3xres9gYzt",
  "key40": "31BrsM9BjveRwyDtBzfX39rqHR23Ww5kxS23fq3FYy2PvcYcVvGngrnbPvs9mdgQ1ZaR9nEFdEUkx931crkY5HEb",
  "key41": "5dpNPwFewDLNiFE1GcVvmMwyED6iiGVvxjgiLE4YmC8fMR28SX2bmVFjjpcagBHTJ9zMw1msuZFJWQUpN8MQBNaY",
  "key42": "2E5qgw8Ry2uhQ7vtU1Pm9txchPPHVDM4ucUgbiCekcsN9h6qEaMS2qrBsS224SsMAW1MqqC4XsW47o57g9FV3rpZ",
  "key43": "5PCJnyQH9xD2qx3BXiWf4bNf66p4X8NjEkPheGYkATZbpA18Ld3Hqc7YrKUuRw8rkByj1GH2fFkMvqvp12ANCrpf",
  "key44": "qh5vDKHEpoyhC3Vk12b9EcaHEKKko8eckLo696TAdFV7ZYLmxrBoCCuAspipZG7KahCPPamPfh6VjeTrkoqUaor",
  "key45": "56NtgMfrQtK71iMCWsRyywUQK6ihoe3Swwr9GpqJ5swQFDZB4s6xNXk7snsTU9mzidEmmvcP3WWt78L6JiqtVPFn",
  "key46": "4CGxwTAgSemhXiw94FZ5MVFJgrwGTWsS4KVnZoAmgHt44RSjSPVpvaGJojUsZsvA5U4G7ArjUqD2HkPoTNWEUTrD",
  "key47": "3o6M32tu1qNqKZ271Nfk1qiW6TawLNN19MHYYXc5FCQ7K7LYj1x5UGVgRoSDabdvB7Pq88qAL7JKgKRgw7cAmBBa"
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
