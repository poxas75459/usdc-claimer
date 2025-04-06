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
    "5vztb34hVpNQaFf77JbYoxKd2Vb8NFfVz98F1z6BcDsAWB6JDxtyyy91TUSinvKZHtnhFCVBssGjnhYtNtUZbHVn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pGFsNANf9Ue2uFdptVBPKXVzcBo8Um6rnCoxK1iitiwGNsXSnRNJnNXvbdbAnrY7YnFeoTkwVcXdhTzUp6gKnwS",
  "key1": "3zqDLTK5FbJtPpvQVJckpgTeRbhfpx4z73dYZdssZRuvh945WTyQgkV2raJBvap61Uk7LfCezp5zf5jvMEBxnFsT",
  "key2": "k4dxLNCRGvMqb92sGZZxrNAUCVmevUTYjtAayrNLusht7YRpToUTR842ZvM9fFz8tyW4RJK9KzxufCj8LhM1ooX",
  "key3": "32rxj9UNGMhiPngBCCbYDL5WYzouAWh7qEBj4EcdrYYA6trfQeTrvsxKNtN281X7oY4B4vfnPs61HBN2DG1gFpbi",
  "key4": "5o2s1x7J9Unox2bcJ4nXuLZ5tAupz8zBkEU5gidtJMNLPp285W17xSkqtqJq1vmzXtm2YDxwDbnKMsv3gxwhCkoi",
  "key5": "5w1omLVDKTa8fxxXTC6pH3uN6QzYaUky8n3ufmkop9ZD6pdK6xGGEbn5RTuPs2thFT1DUvhoEwtg11wiq92PAxWT",
  "key6": "3WEr5gf6CRtsC3zhtLXzymzK7fQNm8C4gqDCgicnMyjUGqp8gbZnrso8NbSEGbK12Y3SaALMJrQihKWkmmC8EzoK",
  "key7": "uRLW2oFqBJLbsBW5WS1EcRA8pyn1XvNmK7LKsHektsYcD8KmaSPUWZghyLmtvWJsodgAoBWtBccagPcPdMHBaKb",
  "key8": "26oi29siuWtDBPgQBGcVtksCAMsCHRVfuciKYx55MWXd3yDS4Rn2gYSYbc2mFr6zZCNR1sQuGo3ninNWvXRVoYgY",
  "key9": "5qiBzKmoTWeT4i4F5WtXHvG8BojEzaPt3sU7V2PzdoPqhpZbbvHNK1rRzu3uJEQb1CCZ6NvRB6sCXi1p8RP2f5h9",
  "key10": "4rV4DBnkZ6EBtm4Ypbk7qhJ6HAZAAsmMwSMnoP9AuPPmESGTVD34oEb89tEW2fHJUGwxzYmf88f1BTgq8Lssns4Y",
  "key11": "3XzW6NKDBTbmbybERjpGyptevUNwaGkfie9RzjMPKxjP11ecvTAcKUSUe5XE6xEJ4y6qPKT4RJBy9kazHUfCkdoF",
  "key12": "48Bq7SHCBUmpEkEvtomvGEmb2MgYoJnTQMGvjJjhYkxgoB9R2Z6QmUZndK5fCsRQhcfo2o4ZEWYu4HVRjxWdgey5",
  "key13": "5LXVAb6di1hC3tnqvEHviMPAZTiCcM2LB9xkMp4XrH3EdHRA2WjnNSFns6qTNV7R9XmF9cjDpaw9dgaMEBqLN7BT",
  "key14": "39HEThggPVeHiMCw3oZNhqBd1CSWvdBx7ZbYUp3XCUJEnmkpx1VQEp8YnVXbRkqpL6NMx6YwfjqvADsGmpHbwryi",
  "key15": "5rSXvAtG5Rt1UMh4nuVvd1oC8z2nvNXbQRbW3XPamtiRPwVJfFg1PDE5uZiRBmCz5Svhzgu77JXfFg9xrrU89ZpK",
  "key16": "H4vMYFQdFbGj8uL9odqwrwZ78pcLJ1BNtcPDPM3FaKsneyh7Esr9WsLvfTFvDa8Vb9nPSmSMCneT62sbQiEa2D9",
  "key17": "33vXFXq5eWp9Q5bCziD5im3h4k1j1msC3DgXAjkMTckA5rCf4nSaUy5cxFwgZWHmdsRhbniLgZk2isFabsWQo3qd",
  "key18": "3Ubjr1V6LzgnZKFdAbF1HpZsTPPcbd1JGMeFUGv6uSQAsPkM1bHaqG9GKbbuCdynKGWshtkUwgWHPrXGFwNkRusT",
  "key19": "2baMKY8GTVusgQYjzM2QdzYdJ9YqsvFjEQzeCyR6CzcqNX1x5YgPasDozNf2m6hHEMB1pUd6HqDoegTEWJ8VFTHi",
  "key20": "3GS9hgkzKNBA8JyjZEtiVy98ePUMoNwA3Ffb8tczPi5ULyRKShTxvQW6e8nPAvHQX8krkDzfiGt8qwuLPvhYdSc2",
  "key21": "tjmHcMWy1GG8gSm4USaZ4Fz5FP9K45KTHMVDARW6vmv1eLtWBys1GFAQykUDjLJEyLhk1ohtYdojwNSVz9ssrUn",
  "key22": "48YvTjAaaocM1bRN1FyzGy6cdyfe424Ns6NPqsB4iVgVyhzqTFDPduU6bt9QWkHQvCeEWzUbF4bmVeZZ5mJ1G3g4",
  "key23": "Xk951PYE5Q3Mc5sDadHZH6Fchq3YHw2AyCQZcX87GDv4CoDK2hHL4eihuf3BEHBk4Zcjvcvnxxrgc6KdguyDPnq",
  "key24": "53FRs4puLe7k1zQx3k8BvFoeZ28EPgtwf6ywXBTaPbBuX3wt9mDK4i9Sa7LfRAbcXeixmu4hx2siX7i98fZZBVFC",
  "key25": "4ZyhG5LnimtHcDbpz24wEGGUrdVgGNDBwMcsCG2knTnScxFofduSsuK3YAhaQ5dkJ3kwGNtkMZHH2uZB7mRCvtZk",
  "key26": "2R32bh2H8hjc1MaBKcaC73bx2nAq4jmb9gRgB1s6dMawY8QG16ZUmN6CM33eWabnBtPbSWN5NP38m54j87e9xtTq",
  "key27": "3Gjwg8afJzCxd8dfucEb5q6HEJqeBR7tb1NPxo337PMxkKQ4FeFYxiEZV1rR4td25xAEMF96spJHcBPpegY6Me8C",
  "key28": "5HXPWFgVig2C34nBcsL7Aasa7ECKxVE1EiktZv3cqZWmZJc8VAUoH58KnFGz4MMYWbeJSfSfQrxba9WKtXyAs1nL",
  "key29": "4ksVgKfN8y54Dzb8rkJqPi8ajmLtNsLk7AwppsRHD1JaxQRhfqjBzFgsEcWs26sceGJsYu5mF21F5Ak4aFhvRrsN",
  "key30": "3ZzWskS6dre5kmbmXeVy11yH2PVJoPGNz22NPjYSrP4ju8ALiv4dkt7LHZmsdbweykFtJ28KWWcWX9Emu8RtjiYF",
  "key31": "4AUdZX7eS23k3w1VBWDqBciqftb1nq3heydAyCFCai2z7NK22mQDcoop3qSGF4XvzUH3dwwLT4ATyvgAMZRDHrB6",
  "key32": "fnBibbW6gMTr3pba7cJdTxHTREgPLAFoA15GtL7h1Fppp1j7pXfaGkoLQQVeL3puQC77ZHd8UycgmFC8Fre76jZ",
  "key33": "48ts9Z7KBviQpdTxbVQTvjAA6TskMsZ5iDXkXB7moDskj8cx3CE12q8ttfaomMv8Ba7js851H4LtBf9q9th1qG3",
  "key34": "2DrZyTy6Xfiwh43k3uGRQuHDf9PMJeVq2qrvniYBvwLVu91hq2scjTB1u9JJaVDdMdMSCLTavPj4VRK2m3hygu6r",
  "key35": "3zafQKDtdDBn8SxvuaaF4kGgmSXbLc4Ekiu2QQKhUHGdVzRVcEskqghmAKqfrp9mnDXMMd1p8Mwc9LSvH6yiC7xY",
  "key36": "2RUCTTCnpCw1VStkV12hrvH6QSw3Ea1CQ7GefQRVa3ANTbwJngeTDBoihvSJ8uvpV1HP5G69ZdtJAPv8gFQUpd9e",
  "key37": "4TzfyQET9rt3UKfv7Wk2Axbf9zQeDzXCmByKKwJNxBm5XmdKC2C3S4dL9esUULn9u5ypot7znweGoAQXMaejmV2H",
  "key38": "36zkp4fyrfBr9CiQobhyzLWaqgCwFNib55LntNvtqzJ7mvovAoBGp6mqxccuPrpfKKSYG3B7Mi2v5CSAw1daSJPM"
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
