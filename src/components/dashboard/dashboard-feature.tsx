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
    "5DcJKLwRREPnbuKMTDCUCZDiUgrTM8AS9HmB66qNjKGG7exCF6G4FdJqiTEguzXmCE7qQXds4d4D8Rt8nQ5GZLeW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dVk8RfvUcahbzpy4NKXYHAhTKicz1gUywK4VFzyhWmd18CXSiwz5iNRtGQJBEJEx7cor7QrwQQjyCJJdQBRebxq",
  "key1": "5pcYrJ4UtF4CSCaofpYRQVw6L2qLG8dFutGsy9F6JHM5eYyJZQGo6c3E84YxtY98v1FWHwLzCc3ER2sC6raLfPy",
  "key2": "3iBEtjnPPkm35K8c5o3k8FYvGGf4zRnfJ53UyxmH69DpG32Txq7Comr7Bqkt9Dycx9anMZsvuiqGUSBonZz674DW",
  "key3": "5jFm7UXg9rJoNvc9f2PjNEyJns3tFxbF4wEL5e28UxweesLFCrCpCdomK18evJte91ZMg7edcj1c2j6kBQ7mbEHV",
  "key4": "uQP6791yvNd5pLAzVLHT33Ridzg1nZaLWNUgHbpmCvaKV2MpnBd2g6v3L2CeuBCP5c83e1bPNFGC9KeEMHTMXEn",
  "key5": "z1EWr7vPqcU4BtHDpLmNFsGUHeBE9NATnaJb1Ax6moJ3Q8yMY6XQ8R3nmmCt1MAJwzoKQJReMa6MUPfrtpczSY6",
  "key6": "21Swef2hFMKdwQGhWFbmJRDhCLcZkXAQnYUM4JMGKVnyhhDcQcyQFhQ2E1xasBtDev1RGREUwNPP3K8erE6NQ14G",
  "key7": "2k9EQRKqJC1uuAesicDYYRJ7aoC8CJEERSBpPjLx34LDdvUtbavnkWPTxisr9YmLhH5HCezo5t8RDQorq1krqJnS",
  "key8": "5C7KdX979whH2ydXQPkMtD5pL22yXYU3QWDVBmjv5TVAsdaznRQz5u5jWgNG8iTBEmoC6WYkV1TeTGUFt6NSbZg4",
  "key9": "D6UFjejFrC8T4bXax93x97czinNLhurG6FG9A7bHwNJ8ZeivCAz6cTJDn2kw1GkPFZLr1991sJWeimpZwbmVKTq",
  "key10": "3KPVVCg6hhrCT9sEPthVoi7cq7yQrsttxDeHz5zgyf2MTw6CH8yLCfYZgEceux3V42mp7PDPPg6MEe8XoD1UyQi6",
  "key11": "33L1GZhgaAsPSswH2uzzzdJcWHcAZdirYFJvfRYwMtdcrhT1VY9cNj4U72gDF2frrEMtqwcxXJfDNUkpMBvQtjoQ",
  "key12": "3SR2v9UVeKC7a65tNy3iKFydDZuGtF4Dc3ZxxiodJ458B9X2bTdpaf6TyHTajaRtYBdEnTB9uCZmv63gdXm9CWkN",
  "key13": "5srkHLnkRYubQjmbgz5T6wNnrKGyQu7cn1pTxJCKH4tPvZyQDefegK488x7bTWTR2E4ZyzTQ8NKQywGDWTcoZYWe",
  "key14": "3NeHF4YEtuejUzmyJeLs8xwuDCDJzUDqHLS2VBVdMwBeYCTrFLJqiKyhwdrgy3buQhoE5hJm8Cd6sdxthxFFM9MK",
  "key15": "5StLK75w16XChpiRmVgFYrMfVBFGYBknxpdB4K8NxQQhjSqHjFjGrXnE4tLZok3Er6Du6EyzgL31J8QNxf7m5Nut",
  "key16": "5EngfbHdLVH1EwGQsjigKW6hNtHrqE8FjPsiYiyfnYVrKRdLYQqYHuHt8MjQyPBSH5kDZULi4w1Nyco82rNF1mby",
  "key17": "3FWDt6MLeP6mPHnoknMLtkgDv8uezrtofJo7EbC7fMaqBqpAmv4kqm7y7o5wHK941XFZsDbNYZ85aztZ5Fr3Tx5N",
  "key18": "27cPRZb8dYLeF7QQkXr7Bn2bWwu1zjDRJoGbDH6veaSzUbHu3YAjc89hC9R2G31oTe5wEXJ2AjuMdgjyWDFkeA83",
  "key19": "4Ut48htWTFMBq9WxYaytfJSc2BmaRdZ8Lnv8g5Lk57GbmjGXhLBkZJDiX6Z57w6Gwk4PAWsoQMxSmBAGf33rCPEF",
  "key20": "9N4hV3P688cySj4qpqYxMGCWvHGTXwEUuStCiw11gjh88JDHNAsg3PygBcNStf7F1uZFeWE9qiuj56kXo8km1mF",
  "key21": "2G9CwEr5exnWapyhg1WoxgXDxuGoT5nZ6mhoG3nRvDoWYFcZy3aU9pEkHDd6RXTAN2Xv6uarBfCYrGk2Nqr89fLv",
  "key22": "1FVr7cEaUhLpggJA6WPVLW4LVjv4gpo2W2JJ2cmwJwPHKGCmsoJsKksQA6w46g8tyFCPRdRW6K5XHzcBDNGgNHF",
  "key23": "5Vxkzjnn8Q1yHYwnhw4S6FK4tfMajgQBwmdabs83KaJw7vjXij7G9h6eQi3tmzeFnL9kadzXcxLMmLeYY4ooT5st",
  "key24": "4mpEr8igzSn9ZRxQpcLeUrLStzbctWhGUgtrJCpZbCN19bveAQZviAc3i3YfjDgLdPcSSYDFECRwh6GkYug2Hhjn",
  "key25": "7ausHmPTdQwDmV8Fb3BJXSSiwigsbsfGH3g782Ekfc46R2eH51E9xsTHVPcLhGttuSMqphtccntEbpFLAFJGxun",
  "key26": "4hsfNFkgXov7qwYp5kE4bcBPVQpG9EGWH7KKcBBayJb5HE79XWey3hMPzgJ3YiymgtKpouGCGBsA2CnXPK3LhPVk",
  "key27": "65LAuc4M1552PgNXV5uqdxDpFiRsQnK59rvDo62NRR6m6vv5SmX6KuS5dRNq8eV1jztBCFyvyzqb882XXC9H3yRi",
  "key28": "2hZcsExSfHhXHbP3gReZ1kYXNwwvHFr161jys8Adci3oYaiR5BehgSxMv6GMnRfzKG85LdP4Wb2Wp86CwjYxPkUt",
  "key29": "DzXtmAsrVdiL3iCvESKvjsLSdDgB6k4PjC11Ni4nVTwtwNQWjD4HDcnkuYQhDorS36TgAJuCPqHBN1uyqzWSEYd",
  "key30": "24JLhNYZ8XJgAuA64oT4Ye3BCnLNGWmCg28JSsv4swdx2rr816MfANupiJ1G1VrGnUPDPqTYdcytMgcXgSbS9Dju",
  "key31": "3YjJBkBHvRxwoe4rsNaeyZtFe6i2UY6TDRHotSUijn74jZdt9uf61QnFPwEx94wwQYcp89By8j7FPkXcU7VwR4p",
  "key32": "D6RhUm6Pgb3ciMsKLQozRHknibZxLfQnwU2CWCNa2XE8FDi9AdHJzgGHyxDJhAcs17eP69VjeJfPjggHT9pksGh",
  "key33": "2wF3yN7NWKEtmxQjXeMB9Etng2FH8JmRmM5MqADHMXMXBjGvX9zqokf9ytgQynowhveJJaPNrUa4vPDgBvNvCQf6"
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
