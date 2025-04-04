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
    "2vpnb5woHFkd8wsscjJsw8qjdyJyF49WvQZTEJpSpR1RZ2E3o658XSNQtV8MTES1MM7GoNgZfXCenNkA8sQeXW22"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Rdq9mL9aHZkz4QPS5PtxmxXNRoLZRK6C4fELbjXxXPnGe4PE9mx9EufZAZQrH7FGBLQHm4e53yjBbzp11g5TchA",
  "key1": "3Gd1ZtgtVQJuAv2Lu1CSRcu75Fw12Z7RYKh49nBfY8aERxgDt5v9R1xrtuuQcbJfAeH2UTj8tzQafLHL3R3s29Lg",
  "key2": "4J4fXbxd1e3gQK4sfYrgbVK5SgDZqatibrA4AWsWbxpHn3jwGumwGZ1fMDV28XsdPqbffBEpc5s3Pr4Driz5bkvi",
  "key3": "aMUKJBoHr8JzMV8Kw5u4t5ffNgxr63NzGd5QKHXqSwRwziGrJVBL7ML7jW97DCsSVQwTtS52NBpkD6BCVLnY9k3",
  "key4": "2ssxRS2pLEwE68gpnB4N49tcpyQB6knS3ePy7vLTWUv2h6UzJ9H8fLyGBa5wjd6NTBuNeDVstWpQ5rCB9NueVmMk",
  "key5": "42bVcaEUtj5hfUK5tpaJ6BqyFXDiPD6AAms5btyK4uoCYaqeUfiNFcecd5AjB371aM8Fk9dsgNhHBgN783LPjeZX",
  "key6": "3GSq1yFhn242bsuVFg7mMVJ7hUdpZAXoY6ucnZpMfeDvekriZZTRY7871NMAE6CwGFkSG2f4Vf8yUPSbpTzREz98",
  "key7": "48Ai9A3FMAE8QVS66LAfV4oJShNAyvTCvnYyNmCvUdnDszvhT7fj3ziudUoWNnL7QPKokmgCYdt3FDjL8Q6uSXK2",
  "key8": "4sPSybuEwRj5AqxFop1PCn3Fet4ymTybgGEVuKene4FwTnWNqHZtq9ghtiXPQzkqi9jaQ8XpjKqAPz2QuGs6VNkJ",
  "key9": "42WFu6cFRhq6Mt2bEPgvoeJzFw7B6trfY3cTc5eti6J2W1QW5KbwLYwPFqygQyHpj5wgrLtDbn3ZeZRvAa1Z5YDV",
  "key10": "5awscjvUVXBRwgUAVcuJ5UDgPrXjFw9bA1QCmGGatQvAVtiE6xifykxRYDU52fHzYKaV3qjYFe2XwKjpi6RBKDay",
  "key11": "4KwXN85CFp7L2pqeAgF1ANgqctdochqidJGkrL9aga9SQA46od4EHqLWepvQHydWbiTaPJRqRk5ZdUpTFESnNgvj",
  "key12": "wGXpj37MMZGZqmURCRuwyXkkFCYt3USFF4dU1NXJG6xSmy7SttTj8cWVrRvWBeXNynTznSqZRBUzT9Vi7USqGdu",
  "key13": "42JJN4t1rm6qyTkEg4tfy5gWCFSf4LE9NhaHbDcBRn6ziXmd4ojBznKUBRBXn9P963W8f1MWK5n282YVcGMyk9yQ",
  "key14": "2CSqeXQVzj5LcQRDwoFNqhKEg3d1Vuiw315NzSkC4k7nCTDqpHkbEcaGqA3Q66kb3wPhbPSzwAJTkjufAVSB95LB",
  "key15": "NPpSt8YeVMbC4DNRdnaBy8NDULqWz32eUwwYr3kC6Ldgndf9BJtawomsWmqMhGt7Mi98NJMQsBe2wBbxyKRrcsN",
  "key16": "3UqaaLLQTcGRy6ppF3gsvke3fSkg7DU5xPJ1SubAHnXvfqnWkUnRs7Q7zfnvHhE6oz8wiHeZnArhN5k1cSzVe39w",
  "key17": "3SM9vZkitLgB6Aw4eieV4z7Ru8XZbYCYcV8r48K7UmqHRVd9Gu1GHVSdzCxBK32rYWjCBKEtEUPQSePaffP1KM1r",
  "key18": "3RHkSRjpepdVg7oPGFifoMKwyKCktawsHQdCSXNnN5D85GQ3cXLuuMfHjC2XrtF13TvywYF5P7GaHoshNfqNLLUB",
  "key19": "c8n5x6JeST5vwmFfaG66oxAWPQqojVJkudUpor7MWiHmkWruyrQq1Nw6cQViqyxS8Um4QoHjEjbxf3HmeEu12tm",
  "key20": "4Vcigz2D3ssTbr28qA1boboBRRktd5UcQUxrK8Vey1fUKLGSg4QjrfKQ5WyPNqW1ZNktmhBqQyktWjjiFiLdBAtX",
  "key21": "4ZgrYaMDyHLQe1tcVrwPzgjVX6LQdPLkWEt3b9uKQPGD1GJmxiMmaQW91tzY6LW4wxvwUENsmT4y2VTUJuihtW27",
  "key22": "5RipfZvktGKwWiTYX4BtS27Yydnveak7uUHWpDbZ2SR2m4aYfZDYoXjZ6qBdYTHDe9DEfGnEETs1FpNeT5j2NNks",
  "key23": "5ydWQdm8fYnkpkTqD3qxEr9peHroCvvQMDED8K5nKZqbu1jBTXQHEqw2iYiWXB5GtkMiuUteqEvawaqywTqnjH6j",
  "key24": "32BoDd5bxE6PbAwUGbWGz5KKdEA44e85yUCkGwMAWJhXC5vgjiECxDbCD9CrFK1wSEnxR8UceLB4t2Zv7SLhDxAr",
  "key25": "5HBcx9gn7npyB2EKbBsxireG3kzJimAKAi1VzWMQxCUov53fDU7SmfWXuxtvyQU6roEQ6bpGt7HQr4kZEZXDNno4",
  "key26": "wTuJHSZhihaQSdahJ1VcMjpmpHUho3N8Fr1XYcVX7Z7V4XW64oQnbzhWLsUN44za1gugdDU4MW1atEHpvhiEb2X",
  "key27": "54m6T9gRfdeJm1JjSaohwxM5AhGq3M4gycdqz8aY4bjkKfR6Dc8eZChK3adeLDVBL2YrUH6UvCEWCMeXgBebMME6",
  "key28": "4hxt9TKyekyYQPgz2cC4K2pXgHL4rqB359CvzBunyifhckiATh9MuBqFhgYHQ833KhMf48ptmGsoZwaL5Vv6v5z7",
  "key29": "3iuNf8b1ncn1Y1mYn6CgcwcA9S57EugcK8yv9gYNFkxmpDq9Pk7JECUwsLzGYEax7aQHYi2nPNhqZ6fsbposZNM7",
  "key30": "4Bvaq21s1kg6UXPGLq6LzW14dCbuKsPnN5RbGxvw8qHuwd3JudDxtc6vzTdnrseJme9yyr9Yg4ytd14EsZjYndov",
  "key31": "41R71bWFZ5vDpfCJVXFCgZW2Y3QMiuwMXGkF8j82e95aWUasWK4kPC9PnecrsVQqh7VxX5zj3Nek1HL6yLS6Muj3",
  "key32": "2JyrA1rT89xARLQWfRqbBSpapF9gkKsCJpAY7TJiCpuhkLFtNe4wpikna4b6yfsaR2HR9vBpzC71aShhazxRycqe",
  "key33": "2rbmdhZRv8aRoCryDTXR8mAya4Sq1ohK5VRfoq3PeJ7h8Sy5oUBotZS49Z6z9vpwLTYKRq7RZsdL5zBgmb6EwDcx",
  "key34": "4Hz86vwWAM78PsjBqGWQ1CXE3DuLbwSxDK1XPv5jw9KSrLzw9Uqu4r13n8GpVPxNajCCSseZHLgsj9eVpa9eAifu",
  "key35": "5NrrzMrwd2gJ7v7pgst2AeNFQwbzMctc5ivgMYBRc4YTkk3SesgxjwKJrGYv25nTKMCha6ZD9GuWHkpQSB5HUZJZ",
  "key36": "5jNQ6NnF9N4NjYirRxkNkJRGsFAJfuhYtL6rKKoJeKCqNXaJRZhbw5LsV2hAo6sw19XFNKrFNN6CbKDYnkQnmouy",
  "key37": "3HQ4zqV4VdcPHtXBveCbwaMkF7joXCK8gcfxQ4Mnkpj6notSy43iHvoTHRfZz4FCrABdizcjLPdra1Pz8fLKCJp3",
  "key38": "3yAzvv1WamnU6xWJKztVNaRRV9Ve21rB5FNnfWXHaqFns9PdFqPgnP1ghXn6tvN9ZRdigrSgt4ogUkasnRs1Fg6o",
  "key39": "3Syr6RjC2CbJic4Xa55q3XHAqhatimQQCyt9JTP1QZMGbT39E3ab5KcZcPtUyDZLXH5FuLqbyW7629WvRHiAwrTk",
  "key40": "49Dr3VHgN8BEpMmx7d5mzijDF5oqJHyuRrWtDFr5yF7w4ANnkpEmbRHMWXDdqVBYhBEWch82qyutv6ni4TamiNFk",
  "key41": "3PrvcwrAckpTQDhpcxkRGoXbaNCKMXPgx4HztGJNNu13ez2efjnKKtVrJQuZJHNCo3wrcximehD5BKcjcYaXszqC",
  "key42": "36Z54gSWoDimZvVGxG7myxQ3DKJJ5JXpVJwmwNzRj6B36e69iDQ5WJZVDYpkTgV3N94hjGvLZE6eWx1a2JMBKp8W",
  "key43": "4FK9uo36piyvw28jcEaeeDW4EXceuxJNDTVw8QGrKWzVu5YGuHXjTLdwj3nUA1stBkEQ3LLXwhfo9JsuXGfHBPMZ",
  "key44": "3xF41yNXXSS63bqYHhFD21wgfuv6Qrag6HiBdPFg42wQdrCHuEqCm3KSmQh8UiS5ceBz2XAfM1NQYPXpFsKnoEPq",
  "key45": "kvJUA4A2rcd8ZGN5FmSNrwYacmKv83CtpMynprSBMUNreVWt5cv6kDZBnqkYKgUQVejMeiPtEyPgxqeoa1dKozN",
  "key46": "hW35P5nxw91bQuPg8nXK72f7rhRMdQ8WvB1iKMtH8symHMaeakoDNdSKPhQqEQCoj93eSkVJQdz3keqeUNctcze"
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
