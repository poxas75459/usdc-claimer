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
    "3oTnQr1riP9DkeZJtqz5dXnab86Z1oKZy8cuTCRLNhrhBLQqsdgnmRcHPDH5ShGEp8CkywpNVLMFovAuQM69zqhF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DvgUQoVySUbepnFjbvvo7LZkUxCMfzRiKocs2wDR6TLobLZUbJjYsBeFh5AsKii7sKZMRZxNP3EXoJnVcXDX1VJ",
  "key1": "qJXBVhneUAJB9NcRfEnfyuMbnNSFqSKDjmCmuQGkg2T2aiNnf2NkkfwUAW4vtDbK8kYLr8heATJy3QFTzuTm4uX",
  "key2": "kGSHyUv5jsRWSQqFK1Y18YpqzAt5zwEqHTB9ZueGHcKTVuQcdbnuesHRiGn73Cfss9xsqRhXsF8om1NRma9xgUQ",
  "key3": "3Pt3FFKuFwST9EJtKyYYxxcFUFzpKdNuBfuoqgTkJ7PMPLt1KqGDdV2pSjUrSwoDfmH3ax3apWgbM9UTjS15LEPT",
  "key4": "2fDpTZb9SJKGHkJadsjpp1UdN8xWt6VXnRo11uheG8Psw5m4YsZR7wu9SyuthDrZW7DbZ8KsL75YQvnMX7N5YFA9",
  "key5": "4q5mb8ipr9U3332YgtEvXzmPKRbRgTzoSihqwoFxdJFLZXRpaAU8eo9c4sQcGgaHPLrVJKR7JSBaJRUm2X1eamUf",
  "key6": "7haWhThsSbF5YhS11M8UnDDbRvp64tKceexctLPag9Yc4WLD12GuuCvj1WFuQNDivJatmeE5NXrtTgEwRzknqCA",
  "key7": "4GdV5cqK4HELr3p1r5YqrQ7EZsFFLUKyQjyxRut3sHAwchH3s1uhakc3dayvd2cNNX97q4gjtXfR111taK81hwzx",
  "key8": "3S1eSXuZcrqwzdTbd3tRFQfbsjgrBcj6rdxhhzuhJS5prjteUgqXG4oKAxukcX7yEWddMQV6h8rYb8fcNrzmchKo",
  "key9": "3giLMaTdsQQqxLuCCubwp3ZS6zXFuTk8oUWJWsyVJBNLdCk22EaXPeqVJ2A39CbRqMMZg4R4qcn2iJJ6n9XGxzKn",
  "key10": "2rvtTx1SyTujLcnMw5oNEtH7PiRvWDqUx9NwgqMYHiU4NWYZQ2Hrc2GiTgmvnxNKUDxFT7pDU5LJG2pn1w1C2zwt",
  "key11": "34wyrm65ZHaeWj42RvB7fj6JwU6tncjBEStyJJ3jEBcjCc8q5eRRZyfSgbpusPPuV9RaToULoEyTy11saB5cqUtU",
  "key12": "2ipBSBMVTT6Lkms27B4tTdfU8Z4oYRKzDEaKtU1aXmRT1BqdeF71CvdA478rmFhDUWLqghqKc38R9hbKdstqeqY2",
  "key13": "4k49eRg1WhrBX762Ac69m5oLQNhuBrUsxFJxTGKQaNfKgjUre2dX4EvR3RFrcLFcVHQmBy7gKZRcHUZSBP9vE1wz",
  "key14": "4zDn9WbkRUB3t8WpzZLPLLkUW8WDUZ6FMhEaBxb5mfrPaD5UXtgFLo6de24ZnfYV48YPCWF9uKksCnx9ZALodAwU",
  "key15": "4CuBtKNvWhqGopacbbjxJx4P87uHYUoWNhun9zyM2iSx3eGuFgKCDK3QJbgVXH3rjc1tbcPtE8J9GArUEBdvHrzL",
  "key16": "49kjvWk3mwsKba4Yn1rNfBNn551d96vvTaQ1U6FmHmaZjVSEWV9JuFJW6QJVoGMYYDcguQAUdH4Pr8Vt5mTnoRj1",
  "key17": "5ZGGN5kNJAhGPW8mm2u3GYoc5eSYATCuTQJiEVQRwjEJqKemtrRqMo55XfQ7GmeyYfKt9LZHBUctU5K2VVbRDUc3",
  "key18": "3Q6SLoHv2JfLwzsWsEooW3d3ECzGohzvN5sVRyjR9RUqZ2rXcR25HB64Kd5DBXL4ACgJirYvdwoacvvqhh53dfZj",
  "key19": "3yLtpMSvYbHt7y6xTCRDZoPmtHSMrMjAe48kc1LdB985RQ6pFKxUsH1EKLx7Jh2CRYQoBy867ghjaJCiFdfP5PxL",
  "key20": "4FKhTKAzUdZGttBYwhhKDKztcx8it9UfPevqPvPYE63apQxjkotyHw3oQvkryLveQoc6v2jV4MBPof9Uq7rmgKXP",
  "key21": "5DfbhTV4XGu7zmAWdDiEjeWXWtCxepNQzW95RMidErtRyFbQabPMm27G95f2Y1Vi1v8HA7cpfoNmRP7ax9Ht8y8C",
  "key22": "4a76fTmoDP4rt43ruuRg3ybAS9g2DaJLvpzEMvp4iBYQdmdt7zkXAcbggP4E6VvvwN9WCiRJHJu8Csw6et9A7K8A",
  "key23": "45wovaKN9YzxSaEVedFy8VzCNTfo8PHQoQQyJbHMyD5K4jsxFjXdACRwgYRh9xhESoFLBTDUtewPxmpozUaFFBZY",
  "key24": "CAHP5PUn8dKKwusY8fTfVEooHqv91U3po6phaA2suq1i74yDjapgUkWo6THBNYGgtmyySg9kRGyjeG96skqnPCQ",
  "key25": "4hy3tM1rgtWxgJjsb1dAgkTU2QMfJ7eNF2f1Gj1iex8VHo1fp5W4n4FiHzsKm98PvrkQbE83qh3DiiNCF5kvN9hC",
  "key26": "12NXiz9DSpv47TnDfw56d32KVpCWNzuywQ6VDAHTM4swg2LRy3euNtvqQF5KWErQMKdC7ZKQc3keW8QNpQRoqmL",
  "key27": "5jzJmuVjG7N6ySbzB3ism1ahm3bont7222HRBoAPm6fvDe3faXa6JFgMfmTZHt1HE4wbobkC25iAabuQJnz7g5Ad",
  "key28": "5hDLCAB6m1KoCrHQSCP116pVGi7jvbkUbSEFjYaWhK4LDN7nTXVLzVGNeS2DsdUACgXhZDKapJHDZVvebUaRWTFQ",
  "key29": "iRVHCpnQGjeMUAKTWGHUtMD2S1DiwEP5rLNXH31w1Q3KS8BUra2DR9Cs17oQKdPKVfoWCjkEDGyd3PoJDZhbpSC",
  "key30": "uJKHXriZJxng724yos8ubm47oVKccjbm8ngym4kuRUYzp4wRGU6qoWpjCEur4P5PwvRYJWPHckXwy6Ms2oCRm4j",
  "key31": "3EUi7qZYCyAEs5A2jfrd5n4Vea32QmYB1iKeQyz2n2k64kGR3SBZCD38YG3niQVyv4Fm6tGdqY7uZyKysiy8yaLn",
  "key32": "KdgKEonP4zZn5GDGXThEbme82wMVVDAFuP8SZWzfGFnCEh9SsApjQLBdgMUNigokWWJMeX8u94pSYbFvB5ATivB",
  "key33": "FWUb7CtDrbL1knKKVpXk3x5u51gToLB3cwkDTs75NbFtyrLKJ2BjM2bqfsqDanFLfYk3MBiuUX3xdND6TF9peoT",
  "key34": "5wxn95grqAJhYNz3Fte8bUYY1p1YgdwnFEsksg34JBREp6aVq2MbmHzjeVfz2MB1yWViRXir84hkMdADBvK6jQaa",
  "key35": "2XNPsAkchY6ZHtW9KMdhwwLUQxd9s9Cz1CGDNrhtdjhJrEQrJKTp4o9P8m2Zp5iAsecLGeJVhHagQLc35eg15ujj",
  "key36": "4Bkq6MVhXHgfkmCj7z8yEks17ihTbs1GeFeHKQFHXhUqjuA4gJ7Mjq1mzEXgFgUSH74T2D1qYk9oaXCp2N5ds6Xc",
  "key37": "F6HbDA4Jswj468CdTDf5PXfGNMMeujpk9jp4h9CFH9n9JyTCC4M6FD7GyDvoDFDbBnTdAyQ6VTPuw3EtAnv9Mbw",
  "key38": "3MtUgGCTrEbDGsq82AuZQ38kY9HNCyJnXwfRxwgUgVL5kdWSv3VDPG32mzZEFjFuTnm3qdF1nwhxQDfYWaiLwsHY",
  "key39": "5wF79U5YjzvaxgQNF8QuW8EgK7SoPUKdMFrXSqt9jZzui7asyprEbSQ81Son8dpMGuXGrA1nsP78MR96WjsmrqXr",
  "key40": "5CH5P4ntLLDJKEQXkGh7sTsskbimUAovLsUhmvUbE9Ar9UZRtR4K89K2RfxkiasySFGyMd51KHJUgihpDF4WVfK1",
  "key41": "29E2VeUudnVj9sq1hT2kjY1J52YingPtuRoLFyGNoXjVXNWQtpLPFJiGJX7JF52njAYmLBH5SqAAuT5P9KCBhemb"
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
