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
    "2j85qFQnhyrErAw5RYMHMg6vbnYpCSbjakJPubujkpsnfNZR7xQAaFtfYqNkMEhiyLgoc3B66FfCjy1MkHwPMUft"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YhiUDpVBCZSkDLBLCEU6XUro6wwhThiBwupzUtvtjTgdZCp8ZGswkDCU7nRiVPxx6cDfo8aywwAS748SMC1yAv2",
  "key1": "PxcLTrfR5Wva6MvMWKhu2SeVUkAY2S96dBQcpQhz9kdXoMUGzrZU94vMc9ZbtaLMV2V1hxn6hbu8AUEwvosJi2V",
  "key2": "2ZuJxkjTQrAkSm8U4MbuL94JSTMvQBqjJQ4UobEbpqwCV2xz1pSLK5uSnmaKV28ewBRkHNUH9esLDxeL3joUU1F",
  "key3": "6ZmDWAnZBT6qVBCKSuXRwmrXQ4TFjJkz9GaCBHAC1gbmeCsUP8DifvfMtS7Sdy46z1hp7twXUx8LGk7c9FyjFuj",
  "key4": "sw5KZ962GQiUn6hFG9pxj5jLL9z6LayCPeqe2iYSDVu3d77viV3pUW8kNe1QRiHEgUtkWvhu6Zh7Tw3AFQnaUXT",
  "key5": "4Ehj4KNnJBBKjUXtV84D8t7upvqeyRy4FAMKjcCNWEVV7XPD5CQXT51w4yCk3xvyW8cU39XzQNovcPi5vPGhe5F5",
  "key6": "5CgzhmnpzicRXetLvaE2Lxtyjw1nk6wRbTaWW99dsjrm6QTYGw5McYUjvya6TvQshoWLUnNoRGPuDdNNKQTsNtqg",
  "key7": "TMne6CDkxd7zZNWqffECEaGVepKyFbHYCPdDjoskDTFgJ1KQXJRXXfeBxSSiMgGbCFBqvwGARANpoZ8hc2vo291",
  "key8": "2ZG69ZYd4jnaaMkdWsUdTyUKLKBRcYpZxngjGSfuSiQN9eBH5ooEqGgAzrYwEYTXTCFjid9LALWV5oTPVmbnjsB2",
  "key9": "58ELZ1yvLkaErEpCjQCmFVVqzVUxFj5KnQ71N1Lq3xdf3Et8jUVevY8RWohgHS5gcMFL3DGmJtcbz7yt7ZMk9qqj",
  "key10": "4nHL2fgFQcWi8pX71vBs27Qk9JfpjKSj8zNYXzjSb4TNE1niJuGerP9Fp6v24zFbrCtVB4YNLyaPWDDT3D3nLXGE",
  "key11": "2H6BJEUCcJVhbX2kbqJny1MgZ2a2vtCkccXsNHurybwnLskYDuKJ6ZwysmNY7f6PhAWYSzi5agji4nyhrXbebdTR",
  "key12": "3G6hQPfNWx6fY9DN9yUeyBUuAcUy3ePKcxwM9m4fnozru8QBtwHR9Zxrdi72xmycrwhDGYfkB2cs99942u2xAYQY",
  "key13": "Ec1e7adzshLiQdipmJ7BwcEzYM9mEVR3Arn1MydMTLx7SbRFTgRCMQn3RPHrhaREo6U67evfRVUGwi6toWDB6U2",
  "key14": "5dQFjqkfUaTT9FdexKPtpiEum9bwwSfK1PV5wdiSHfz9iDE5dv9RovraAX2UPG4xsxViJPV4TDzDaYFvWbHt51Xx",
  "key15": "3AYTGGZ68JCvRSHGj917RmSYDyeYXxJfFjUKwrLb8Lz7UhNjNTP4gDmfKyTSKhMtvZPBwGey6sCWv7HURz8FHuXn",
  "key16": "5HGizKtVpjxZbvyUDYLsXVYYTfocvXMKwqMV63urhAvdD7Wx4yXPhmFVYM9HAxv5PdW4AXX5ALLDWS6F1RFQr8Zg",
  "key17": "4Y3tJ3JfinqdB7s9cgN4ERFgpEuNafPYGiC9KzbGF3eqwmu8bNcdUNJ1MwMJkBUXfAsah77pSvZm4fKksYiQdP9o",
  "key18": "3nLTw7xguUsaLFhjJdqAeFqoVCswRRysWknk8vx5C7QmPUmQMnvbk5hdoNBaE4YuKgpwGTUPL7V9Gogf8uiy9FXS",
  "key19": "3ejsVBSM8Zzb9ijx4LUCWjxS9zTiEr1fE5Pvu2tKNGjpJi6de3Vqw82HeZnB5b31pgqoin29cr9TuYmRCRzBMSer",
  "key20": "2jdNvMahocGUGNUpHkNsiNNgRUTjsJEbX1noVYAuMweJeLWLrt2wAgLirR4ysMSdamjWjCqmv4nzqjqYeoKTyxvW",
  "key21": "4z9Sg2LdZzQT9uRxa2TkG4i1o14bHXT1UTAoGrd2xdzpQQVn6bxzgMXTj4XeuQwmqwJmx4H2MyA28ct8MJYeZCDs",
  "key22": "2NeWtZ62cGN2hxEovNcpL4ZPBozbHGMTuUfvu4bPqrJpVXctchUQriD2ELoNCamWmEKQVnMMijAtMUZxWmV63m3g",
  "key23": "5VaAhQnYCFyAfcZCaFqjMDHNSELUKUDiTQJp7aQYxPz7XfivxmRr3REYTkZGfia5Czut2XUgrF8fUg3ned7YCRS7",
  "key24": "578HYyqAnthzX1xYag1vnd4K5FtfQLW23QDfuUZF7DGTHvAq8VixpFsA6UdvvS3UebHn3NVBwq6YncuRMsfQ9N2j",
  "key25": "3pskQrwnS2H7PqzxwwqtrULLowhcBFd719JQQomfDgfkAYgcRxaiYrYu8t3KnL4r82xqBkhyhTpJRHpAaC1Wsjap",
  "key26": "5bbrw3CijLFgtgBDEGeht8j6ZBtonM66HqZFvuUHR8Rh3GtRrX4RPvt5mZpkq5b3H88ewjGkX4GdYt5NuJfCLWk",
  "key27": "XEcTYLn2V1FcYzYeKFrBX27vkV16GkfyjBvYpczt6Z2qW1jjtASeSi23TZHATFVE2xTuhmAqvkyoTaXsPyA15Ho",
  "key28": "2uZwh9b1Np2HgN9ov3kdobypZbaSkSEoLnchsZdhvM7ywcx6scTNZ8c1onFjSh6XU4kfn7SaUC1s7oL17Y5QBxEC",
  "key29": "47zsNKnt3yU8bxoothZnTjvbset6eUKzmyQvnj2FWcSiRgNnkpS7AcU79kq9qMbZQmAN4cbpd4QRub1JgUtSKjRj",
  "key30": "3s4JaftD99qkSvnQGFABVSq7X7zPTN1FghG9QwVnSDedkF9HSpNT3WDVjYVtJg8JcPWYhNLTL7XYjStq3ySpGoKu",
  "key31": "4WFrNzNs9eXCrb46N2xoQNP7tMqamA6WwAQMsRGYZkomDw1yk9oE26fGpZ53cDTVfbENC4ZgZu1ixi3E1GCB3huw",
  "key32": "3nhvKzrJ2rULAZK1eGpku7qbPQnWBcZLouAGdyqoLgsT2iKf6xqKxHCWFy8s9ktgsDkMbicby8MV3vEXHpPbbT4A",
  "key33": "46CQvbDT6pD1nCr9PJzUjXDdBeVtrzE52LQynbJHemat1HrMNiRbJ7b2kieFywokVmdQjUMCAHNcvKZo44bFpqEr",
  "key34": "36MSxMq7a5nTiW2NRZjY4Zudpbz3xbyKroaPT1pCR8nHWRk8hyQMM6wMRHav24ApMSDHv424Mrg4FGShA2hManCw",
  "key35": "665JEky4eaL5tXreu6MAd8t6gCL7JqvhESSeopnrZ2wgcUZZxUs72kkeF7tQgg3bgfh62iQny51uoagvjAGKRBTE",
  "key36": "318n738o6YRhu2RpvYX3vcaAJA6kbPKTNKXLQWCzHCnGXRYVBsfuRudfzXFAL2QTgcvn3ADQaJdpVLfGNiTsmVR6",
  "key37": "358RtA9PMEYqzrG8nbh3fEgMFw5GDJX6BDDUBA81bmAhfciKqFeKwuf7UkVXjHkQ9BySTd24wmA7zck6ry2t2c1z",
  "key38": "3J1jGTuc7LW5tUQWf5mPVrsvDPdPVeS1dqAownyyL87bJ13zwMT2ucPyHN3ceNrGAW4fTEDksKjDJDKKQuUy62ED",
  "key39": "263gLqJxgPBjPKDfz9mCmM1QAVNiNuFhWaeonoarWAySz4RbPYyEXtk7FGgqW74dY4FeiFU3186tkkWeqPy7LrSi",
  "key40": "4ZQn6xAuy6Vy1U23doTLm9e3Cz34fhwMon7MjsTudJhKwg3HuBu6H9JjwRsuXeGgJ5VTS27wrSsEt8KvLyz4HkbT",
  "key41": "5dCQoiZwSVQH13wiuiLJ9Dk6kkFEh6ZvtuRoaAigh6WQ6QVK8jnxig11tDkQUsrCDjRgyUN7pPe15U69DPBuc2qv",
  "key42": "3NnHR5kB9auHwvHAX3ZcQGJvFNwQArtcfAagxk44JzrWoCW69UzUtfRzXJfVp5CA32KseqSBmNBadhwyCB6VN23f",
  "key43": "3CksPo6WS7pv2ady4WfKMPnJv2oMPPrZPfEnpgLbDB1ks1AQfANaChUSyxLevV8i492A14me68w55L34E45goZwm",
  "key44": "Bm5aVs2ZNaBaAFCoBdeDR4cyWyh4Mo6D8A4zL6F2FPYS8NGmg53xEvEmXpTfHaW5pvDXBm4zbLCY9kyhL1NbfaM",
  "key45": "5agf84R6A4sGQvJeFqnpWkwYkprE1ALgE5zRq96aiPxeB5XmGijhGPBVFDaJu8M4uXCDQrKbGiYcdELUwiFag7h7",
  "key46": "3j7wjS6GZo5xAERbfUh9kyWPMXztdxx2gnCKzHdsRZTJub6wWprkUfcPt17RrmAEBjJQLCh2zUb3W7D6kLE89ZRs",
  "key47": "4DRcr27e3TjSzgG6ZzS8MttaNLgCeGjKp2AjxDK4QHBeAvkhdwVvCShaYzDDZ5zuRtoLLa1fs3Sh6Pf7Sh42UvSr",
  "key48": "5TE3vL1W6hbZWrwsHJkRpbHWCbTSXinmxQFaoo6rj7VzeaatGk1c3NGmPhEYTfHMr6ozshU52ttouBtyfbkG2nRL",
  "key49": "5KDC5XRSbfXfoo4fxjJvTk5V1wbZBofoKqc3iGG2apKFiKD1Qg5wSMa2NRFa2JXTM7BCRshTgN3tbmqjYNcGpeB8"
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
