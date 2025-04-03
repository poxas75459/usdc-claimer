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
    "3t2VxyBH19Tdb83UBNmF2VbzpDSuH8aerdJgFtBuh3zdfyNTaumVbwwq2wtFeP5yahKLxu3GRo9ZvRUESYDbGCEm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MXTQpyPC1763Mhck4Y3kscbbp2hnRp21fNhyrnEjiDhatzSEpUhNVa6cr63ad2wLf1eQUyBe6jJaNFhDoT3CUft",
  "key1": "5JR9LU8NNfygHR7YZnxgQN4hvaZV8XqKNGVfSt5tv6CR6WwiCQFWp3174fFLBF7R9jzsvHpU27dToN82NnBaBc52",
  "key2": "27hVeUGV31CFvBd52LJUwNQjTDTKUhKkTk6GaPWc6t1JwiFULmueCMjLNYScX5sdEUQciJ7TEtH2PaTwfy8pGHqR",
  "key3": "2ZUrHh7fA97ZyiLBucMVrLR69D9ZSB6cy4p3mNTkQicoURwSc2bpHUCZyohekC7NKQmDBKspWmywBhZRLG8h8nSx",
  "key4": "34TkDB8RT8T2QTe1L4VNLNYWp8K9VDcswCF2NUDmXSABBx4bgGU7D8RNy27gKP3vzNWocw6bh1xYgKQTLfMMZvz8",
  "key5": "5xcyWwS3S23eX5PcU7GfKFBH25Nj7M6BonGnETEfSzpFiVqaHhcZtcJYBQVeH1FcYg175DRt2fZmkb3KYX3DmkGN",
  "key6": "3CJjvjQQ7ZAqUbB2wUYsYtnzG8ZQYkwDGaB2pwCGLnBRwq1SiGNsoERSCPseV8rbkMUccuH8qXL4FdMqMbYu7Kag",
  "key7": "49YYhKd8PJhR1C4p3dgtjDzt6RKAGpRFmLb1boT9uhkxP4XEU82Nayh9q34FArJD3VjwQqYMpfbYspLvWhRfUL1A",
  "key8": "3s9tAPBMDcJdhuzJKGmbqaqab8GeMMYLfMMy16Q2rphA6uBMVHrvpww4hGeopKKh9kNtGPSWPf2a4h7CanepNLbY",
  "key9": "3XWjcAMDEQZuPM4YkrM2dT4ytGW1B3hYQjUXEVvqnsuu7UBkMySUcvfpb8YMBviBJyjWEPTVBCiQnjVjRUiNfuqw",
  "key10": "2ZebjcJiAbF1XKRmC3YRJviztmBAiUeB1KUs5rC6QCA3L8gZ2C3uTXtpBnVKWLdoP2bQtUgZYVnJfJ8rGj4ufdcp",
  "key11": "4j172BYWdHpwLkRUsvfnNPdeBt6EihtVuzUvskyp9qCg5VpcbAW5iENPzfmL6xtgu9F2Kpz2PjpgXkTfni66u8fW",
  "key12": "SQPqKpf72GtvtHxAHYaUePS9pMsYMFdzYxBz77H3PYc8VPBKEy3BJMLdu9hbbvRKXePtsa8xb9XLDoBER2Mprjr",
  "key13": "52Z5GdRNneUMQ3hzeiobjbbR6Eymb1a5jmXLQVMrZMXLY2XDcXvkEVT4P5ekfWkd22wAAZ4m8pLXZJNHoMpDw8Sm",
  "key14": "3QCMPk17nSRt4jVuT54ufKkgsLh97Sgsc3qo2MTPFNvZ5QytkWxT5qx7fxuuPsjpxrp4TDbMU9h7ofeF19V2vrBb",
  "key15": "3rCsZQNYNEn36wbqThoY6kc76TkWULEEboXLaZFeqRRWZ9w2PXf8sceSTYToiwXFGxfVqpJCBx1upFUhkZpNYX8N",
  "key16": "2qCdB2JhAGNb8XApRueP3basmDYmWAjt7wd21xCfhfTwE6uKTDPFe18AcCWeF7fqZWm7qm2DCJ56N4ddXYFBHV1F",
  "key17": "3z9ZL6aZ7AMnkXk9MVs6mhDHRVqXenyBdQGCq4yB8b6YowZYi6R5oW7SjB6Ujin2F3NACGvFMPypU6G53ctx1rU9",
  "key18": "3R89ZnAEmJLNgVcifa2JxdYuqRPUECKT5TCxokZbrnz3YBCwvk4batjLJtxCdX9MhL6JpPqeQicLRuFmkP2ruWSL",
  "key19": "YXAHHmjDfD8ot5y1MAyBcxiDwJAHpiERNteFWBV7njQemzUQo18QoB7S8jhZbhpKwijPwsDYsqdQDvf7mNhA5Su",
  "key20": "2oFhwU5pKkuub8YxRHo27AzMJVaNAc4bCPVTxcHAjChifrKfEaSkCJjx3h9cUfv4na8iTgELH5LpZZpfrMZFThuR",
  "key21": "3f2qEb6hBk4s4rQDVLNSZc4k13ArXmgfnNFKMbxNUzPzDJZitAuahr5aES3Wqz1LUkjNZAWDM3JQA6wFuCyZx8fN",
  "key22": "3dJpaZz4Gff4shbTq43tZbr4awTXMdNV5TwPVne6GxeJXmPq8NuAyCEtto1AMetV47bfuzx497NXvHf421qCiFc",
  "key23": "4PwybjmQJK6dQv9u898YDcMgCLdmHWsRLeYgak1RTeF1T28shENHyZQU5eZoCV3x8Z3kMKFEGfmP7hH39h6M5Qp3",
  "key24": "ZS4DL6cmJ3Jd1JCkFF6jSBq62JCAKKToyEbYknHT95VPFqjC2cGXGvt8hUSv9yfbBq8yULLuedwPAw8nPxgSJ9S",
  "key25": "3txkCcBS7LVnkkyWXXJkdKWPBPS1dqCqHHDorpnuiLmegwwAwkf5rnvWGKLyXx6vNHTMsmur6xUHWE8nRTYEyZB4",
  "key26": "32FEuK1qf3Vjibc12ooZ3F64uuuFangpzhm8A8Q7ceqV5jrxUsL55CsAnpjf9L9oqhYzdK1K1vzDFJgiWPRBK5zk",
  "key27": "uguiRYoX2H8dLEMWdF494aUfDpviSpR3PhbngvY1L77E5SEAMpnwxu7gJZdqfFnooDsK88a7BSz1mCcRGJ1BnX1",
  "key28": "4G5rbdsn4dfJzTamCWRPAyZeq63EhCzZmbgUrUN3Mf2DM5p5VqWnSpU8wKsZXWnh7s4it8eqoKk8Eojhy1WE6F2z",
  "key29": "u84bEMvcWV2d1oKiitBAm8oGPzMHfrk1YAZ6pPk9g2f56m8eVqvEnBZFa4TsZFRx97RDRZBST8CR8d3v4daLxEB",
  "key30": "5JCN6bEpK9rJEZRGAtr7ZFGdtnWX5nUXn9r2Ad3GnUFC7ztk9PwA426vZBqTvVJAw6worDPi8RinCLeZAjuyt92e",
  "key31": "5Qft5WMU54JsmPEbH3hw1vi4wu148U5uhPngUrUncuDbM6e59nuo6HaYReoCs6k6FpzJaB5P9LZrSRzq7gt6ZYKT",
  "key32": "VgaXVPncWruLN71AsKyVSgrK5gopQYKZCUkBYN8m4WvdVeSBYEc9s4R6zA14B7sUAgSzSPASEXyZGdh2RLdWzCF",
  "key33": "2gLmfoWdUQm9q9oeQaULP18bbJvMmBsLsTL3KPUq2omKd6bsCdawgKp8CqGiSkxMiQ3Rrrdq4phJzsFfi38BE6ms",
  "key34": "4F6LrS8yoeri9bZ4UDo9R3rDusLubkdyTbNLjHyqW4tfVn8Rc8UMiRG6T13cvDgJZ8wmsa5TrXFc4YcpkPP3Sai2",
  "key35": "3MGF1X5Tm3jUn2h6v7ntfgYA5PJ7Y3iSS4R6bHURdWJtBpwtRgcgSZcap8Qu3A6ZAiwUKmzu5xnyTtyfwoM7Tou7",
  "key36": "e9erzYT8ZXRQmGESyGMaENG9aQB7fy9r3TX4hYWa9CsMFqazRZRKbptdJ7WbCsBuc7nirKbiiwHKv3pKKWctZ2n",
  "key37": "juKwsNLzDt8ZU71AikNPYAqU6houtAZ6T31CousfK43hibyVy9rAaRY6GGRt2G1hAvmK98DnwV9FcrLR7M1NVrT",
  "key38": "tfUQ1XcdWr1MEoEc7A8w36Es6Zw8jyrfbU1VmEbJXS8P1ot4dz3bJJsqyRdrHHbCJ5sbgLUzr2dAdKd8QQgRJMC",
  "key39": "4TCnrWHhQvbuJ6X575EUnAtmXxPhkYiLNWACVH76xoy9P5yGma6Xn2WWDNGAcn9qCnFYaRyKZfobVhPP2Y5TMjnz",
  "key40": "4JnQPinUxzpPWKcm7dGG6W7YpZvGgN5sg33fuA6WkBgtw29Gif49NHmiZaf8Am6z3pN2m9mjysXdKqUYkCLmJioh",
  "key41": "5bhV4eDmAKzz2MQ7PwapzB8bgZwD19ApQKTWdn51t7bXSHqGFTQcv7qwRmppjdKoAsfHKEqooa85DcDQ64X6hAAd",
  "key42": "4aELkjmyG9ysPCCiabasRPFhTDShHX3JccBs7TFLecbPP8XBBoPG3D7p19Rc3a6R4FREFAbBuCZUY3RCa7aLmFTj",
  "key43": "2KdqHiEcWt325rLzfGXStWvciaiCX8HYeoWvwdmFBX24cS4pBZYrHnYxGQfQEVnJJbZsrE4Uc4kYodzdD6U4acz1",
  "key44": "5uvwC5NLvUjxWrD2dLoEj1eSbHpXRhP9si5832LugXwCWyuoU4gJz2kzgt2bdgCfUGQH4DWhTV3r1aTdPeJRcEHY",
  "key45": "dVNhbHt2AEPptx5EJ5zmvy4GB37MnJof3eJXxLh628UsLufjP1AFwfBNSS1haFPbQaJpKKU9jjfq8WPXgc7DxNN",
  "key46": "3Df9BRtUXpaTCvzGpuZQFpsfyNikfsoCHLjLxKM1Y7c7CotvmYiLhDL565nfqBzSu9qDAJoB8ecE6dhcwT1UZ8PW",
  "key47": "5rwKw7W3L11evpzyGbfKS99d3w4uJ1Tc1LvCWefpgU6jzZG874byWxS26e7aofBu2PzX86f5SQ2da9qu4pLiwdmq"
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
