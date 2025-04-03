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
    "2csERzkhGiYfhQ7tk2NRMXqHYVsMSFqU6hiGNfosp4B5iL9SEhpyijXEzSwSqb6q7kWYSTvGB8tPMbzBbm3TC6qy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pfjT4TNPfKN6QpgGjw8cDCAQRFgivxz9jsMZupjF8ykVHV2KKekwYZfKS7L7zJxQKUsL4VZKHYF1oTsZJPLrtG3",
  "key1": "4Wtwe9kPEUoCVxmFyfe5UTqoXkhvWpcQVDhJmnoAUQZG2Pp7PPspm4vCZDDHeBw9GerH9aXHyXwgC4SwTkZZWwFf",
  "key2": "S8WWU9W3PK8DJiEfMXvqdjore77mCv8AV5aFvf3giddRB9Scr6ZQd1GUiVzjKvHjVq6aRNhgaU44TaB8ttPiJbY",
  "key3": "57oFj1W5jowZuqwEuGphATjCPbAJViNPEBSd77NwgW3daYcs4ZiSqNgZvVt3ny4VNjDdnXu6m9qPUVtsEjQATArP",
  "key4": "42eL9XzbWU7ciJkZyXvKvY5cxstjKFpTPHN5JLVrzpK6rLaC2tDqfijApfHVZxtsgWp4PvZ7FG79x5Q7iQAn3xFP",
  "key5": "39KvrWYAjCUXPtYBtpbQLHmm62m3YLjDzUSKd6QR4gSJKzxJek1d679kd9snuQcJM5ZHqhHGkzcdpPjudvhUk9FC",
  "key6": "5ZC8AsEdNrdgcArc1718qYAgJBf2T7rBAX6gmAacoX8dN3xFvyJvzi6H5qDDeLLCc9BMoV3Bnmb6MhoiaFYKJ2Qx",
  "key7": "21AuCb3mcLWLoyzdzcvchKv9don92EtDKW6fgKuifz46WG7qhZGujSFwmT5hi5p5Sfmv6xpi8w3jBvZeE2Ci7SZM",
  "key8": "5P96VWMEv3FwdYJXuu7CN7WyDsWoeKkRLSjkp1MH8z35MFVx6VEB2qjCsf9G3E4srNg1aXZqQNFuP98rUcwNkwqc",
  "key9": "3Sm5z5PPRMmxjAeeNW9zRBoJSLhgSVUYrUBgQngR9RQY1kv6aiHcpqUg6HiF7HUTHMBxGrT2pZYXSiYvAwPThQRF",
  "key10": "5mka1zCePEVBHLHEsb44RRAmXxK5pF561qRGyomsLi52bJmLQRPQfqkq5dcHQ3xeHdGeTn2ULCrWfXhbDcnCzyHK",
  "key11": "58QeShJdU5yeJ4yUWtDz8eQ9Demb46qPEN3KcFMFWTF9aYy5j5ABi2JYa4PK43qt8ZWcMEiTvFgHVWJunJau9ZRp",
  "key12": "5wjGWfN9WyJW68zW3a5eYoHGD9GF3shSviePWJ1m6w6ntFzofa57nHm4TVnP1Hsrp1noDp6h6mhYxL5kJ5hZVh3b",
  "key13": "3NzEXVKDJae3v8SBkfkwjR2iHUmkznK7ceEMpG81ZWywBGArzCp4UT6RNPb5okD8HHM3dgC5mUtNJoWUN4J7mjv",
  "key14": "3hu64RZTMffukxPFTteHfaqByrigoCesDh8S1FYyeQR7j1vEabed38PkHrxB4zpnbG8UmB1BrRgHnB7KRtyppLa7",
  "key15": "35nzCGmfeJmENsj9e15XtA9dWwjGeX5SHynSzwE4YYWCUcSG4Zdb3QNXPpXByrSMwaRZgz5rupZ121UuDFvNq1pu",
  "key16": "2DEpjc8UJPZmKj3NrwSKLqUBuBm3H5EFh4cLWbLrinuLHeyQNHa4za8sDCJYe4dHYkpRxxAkGRiw6isxfJay42do",
  "key17": "5nBhuh98uunQ9nUpZtQJP5K7VWFuWc2ncqQA6mqgzsGvk36uYugjnVxRg8tuzvDXRzjMes28oFKKMmbPk9oHHp3S",
  "key18": "AcTLqGWUye6d1qxyPHJf5msbSxrbCjrvGKwkBeZZ4TCwjSEC5Lw9caWhTqqX43htvhJnjRkaUFJVFLAtg36qi6j",
  "key19": "4eTnFWvBfPXrzL8MoKfn6CYebcVaPkw6DvScKmVUQLLcMdvroNNPQyw68HxtyTcCHAca3524zztPik6Uh4tr5v52",
  "key20": "2TacWYN4nYaGVYRVQPK8GpWpugdNVJ5z3tzRCX475QzQYVUz3kyCf571bkUzydaxAL2GkjdgUgQ2UUKNHGdnkN3x",
  "key21": "2zX2qEdvfts3jdxknKhbr9iS6KnVHcbNVw4SFLWbTLBxbCE7QTo6Wm52LydVACuSHhkP6GM8yYsf8KZ2vBSwzSCX",
  "key22": "4iDYjGdEzUcb7rHhRMJ8K9EJxeQC2sPNoj5XCfAjS4sWSfZpjcZLTb9hoCn83GeFTAPsZ1rXRVrVidtRrQXxvUb6",
  "key23": "219nWBtJ5WS9cAfuqA4vrUcvePxjUWZD5uEQxJ1ZSEJWuH55Md4GmrDjG9HT7Uzr6ApwGAzgnPWHmkuRVKcAf65k",
  "key24": "5QHPmFEoU6xtT8WfcRPicmPJisJ7a5KvFznqPjwe62JrU1nvWdogHic59nhSXWh3NsLYc6hNwHBWkmNKSRwYU4Nk",
  "key25": "34ChmhJcvVbZZKcgAXsw4tZueFz8SwsQv3Jher3Pr4PcYiDtqatWXciaf4duvmmdp7MGHzZU91uQrHp3y2GuAV2N",
  "key26": "33G2sNwBHHxrGN5XNaXC9ZaeoKgNp9AVWxUXFnjk3iKMnDYkF1JizzjGnmfahSAq6gCxdbnKH8s3gWwqVdoLbQR6",
  "key27": "3x3VkiW8gfSHBbGhTLA75ws5hkBKiZ4hiVzxrLuJxFaHab9hYCDb1aCBUCrXMoo9gcA7mVSWSkbeVWyo5VAoXyKv",
  "key28": "2hbqyrJ4C7EpyNp3To7bKiq64xgrHSfvP7LrH1GMUKPaeCKKMScT7rwmFJMxMRrEUf8RbJ65NVbvkfqvmwjvj7L4",
  "key29": "3DPYioDPFmTxJKvvtywnrAX8hdHbXSx93hLh4LucMbmy5WecckCemxL2GAN5FV113k1JtCqvk8vZ6MDVUHT6Fngd",
  "key30": "Vna2xPmjEEB4H9CNjyoyN9TF53GnkzZt7XUwZoyX9wbf22MCHbmgQHVkfa73Feqtgotp4QByHkxwth2uhQbcjSX",
  "key31": "3nGwu2bkXoq5EUGWese1Rxqw11FzzAiQb59B5wgDBGXM5vSWHj5YBwyTno56pDWPq4NPH4kk2ngMHKPYEWBRY5eo",
  "key32": "4szbv1t9AZUdSPw6FCpDm5VZ5LkjYJjCNT1uyjAtKivxip3vR4JhYUUopWTdjf2jprJDjTaa1KQ7HJyzmQ3H3Xdu",
  "key33": "52W6YjW1pdLXXgbWS6tKaVuz1jp9S89SLDkEf85XFyJWMJddmWhfoTXAfnn6AndQJsBX89nWUgwr3pE63jvnp4JS",
  "key34": "4eiW7cjbXBTpSLYpTMn5KU3GgFMwx4AJpz5nnyhXiyqyLCtu8q6M5f9QtczGjE3WzNf5Rcc8KbYCBTRpvePvvcLG",
  "key35": "TsmEMp5XTQqSCDcs3kDpt462W8rtuLYyfo7x3BSwdAep427r14GZfVNoGva5S7r7xRxA6YPMkjZ95en731giW6C",
  "key36": "F46ve2moadxKDm6kau8AVkF68KiPMiKXzSo8k3k8wDqpNEaD5Jgxgvou1x8tyTWFKA61xmLYdrr6f4pWMJtJibQ",
  "key37": "3REaUaJCKNy6HFUufvxDV3LHLuW5VFRZRdr8iJrJRsTTEmN4tTTRvg4wdqzokYywfDbguRqjrxP7wgSPT79cKdCS",
  "key38": "3aPzJ5ALaRZwDqrHB2Ycz9kiGMrbHNyPbipG2jp9LCDy3rp9HdZmr4T8c9pTB96JJ4yXwbFc8AvxaQb9StDtcLJg",
  "key39": "BsgDM8jpxBT341tLQMAC6xGE4wEDnAWjQ3qnKWX9tJTHe4KycjDhhDKBKWbQNR92kwNRCMGT89fcPLr7FhiEBgH",
  "key40": "3wPFXDYigrLscVX6So9TAVGpXZt4oXtQq8j4ncFRYUiZ2AbH96dcHjjMFtaGJ9JUxD1GQ2QdnB86y2Q6gK9sVcor",
  "key41": "3Hm45htJ5FGok6p3J7dHuHAZXG1Jp7xzFphv42LXFJ39Bg7QqXGnuTZm84253akmK26ywsmZqWhvcjaiFTT75onN",
  "key42": "3CDJ3S6czxS4NPuLKqDfHqH1Yg69cg8ECkrceiw9doTipvSw68BXEHMXgtHXSjM1S5TmVrWMpstgWn3nAmrQYj81",
  "key43": "2RpDm5ZnByr4ifKTxeoJmpvfwtVv3Kc9zaW8MiwjiNeWynptk1zExfUxqL7CRW59Jt8xFWwpp3qx16ad4Nit9sNh",
  "key44": "5nYyVtBcXKLWW9fhDXQ7YD89K2qPPLuks6CfXqBpQvfVpUGKU3D7m96BUukwBBWskWVp8D338PVsx2GE3jbRyaoC",
  "key45": "3FNktF2xaA8diUzHKWd3SzN5G2nxozUMrgttAMPjWVaaWjzgnB3u8R8kVqqkWsrwxiovBhKFgHritbJuQYfmJh7A",
  "key46": "3PMpdiEo7a6B6HvpP1tojdhdCmYZYDDYdWntsGQwPJBRdF8JiUtqSNPyJApY1ZDMpC8o9KjuJtsMKrEmRxC56gc3",
  "key47": "5SsybkRW1ahXs977rtaSrvnu3v4EqzNqZJDNmVAqA6ARKzcmTnEnsRBVkEztToY5gzZSpotQuM2cJLsK43oWw7xY",
  "key48": "2DNADoTkPafzkWam3Ek3f5JFCHzfqHhHJFEKnwj3Tv4n94GRiPgA7UuVG3V2yoTDSC2se1LBM8okfe5UtMXtZ4WN"
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
