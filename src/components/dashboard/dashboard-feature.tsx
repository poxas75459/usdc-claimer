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
    "2qwNSjsFSy9fyigcCAQbUaiNuC3yatMcM34riqiAhEQjGYASKDxeKLjhDcdn14xC73YxxEEyu1fLXPCAJiBtL2US"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eaEN3DbBJric1hFqiwtwZ8ojgH3SQ559f4BaqLV5SRoNkCTfv73HDpFPPKi6kaSgExJteqeCpFTd5mKP7r4iHXV",
  "key1": "21bwvAYS7TzjkwGCunhNWxgTM2U8RhMWSjxZfnER7dtsRgXsse99xVNZvbz3Nbxp28oafNKRDQSumipH4y2CuAsm",
  "key2": "4yP9VVZm6BE7pB8ULXEpzbcMPJE6JE7NaPdKRx734EwWWrNN8YNySdMwWJaxALUz5HyKjr8ZXPJrPs9gm4ax6LnQ",
  "key3": "25RmEk5jeLTdbYj9g1bZubJj76cc8h5KVqQ3VtZfgnbBNSSCjFsA8itKZSH9rTzvRxGCrsQU9rpAgnGNT8tbxEhh",
  "key4": "3TT2QvJHRCMuCAFynXqEmH4cZ6FH6Hai5UKrebCT5AYWrzXZ9KVmwirmVyUaV1rkurPeyUBSA3jW1344Lctgyf7x",
  "key5": "49RAPYGcvr65kiD9k4pc5pns5AohLGEAsjdXg3P4mitdXVzDBN7sBmCDKoLtmJRwK35MqTPvaSXekXV5Y7sjNrfg",
  "key6": "4kikA9AArWnMr6c8R3d2jNMJiCoVxAu4wDFr6LbLFnsiqzcCJKhJfdLTGaoeEXHEcL5r58suarJMS5aKsvzxkL2z",
  "key7": "oAktfzKXMhK7KLJcqSksTrLMz34V6YBgArESFDkygT5JU1svmkR7YD3ZvSx2t7FdoyuJjLWvAANQM5A7uiWsi6f",
  "key8": "2CPwDeNMU99a4xBMBs1gpSMAMRrXnve8w5JrS1Nfp4VMVyMxL4wio1pzDQ9vZdAQ528VxoqmkrsGF1UrbHGP6p42",
  "key9": "3hvKmEZF7xHbRNjbaecsGuM6yMfcDJGpXjvuRYbQsAAGhZ4bukSfrU13hDyj2NFHBGituBnngjkRsTA13wFZaowF",
  "key10": "2hC36Zfaibww3PD3oHXDZHmcSfk9nCLtvAw4NFBvagtsbweDQmjbcQ79M8bsz1BYqho7eFYdvTcyiPc2HsXfWKgN",
  "key11": "hajKFSZcBzDeA6jUELddLdmxLEz8JVW5kEhuXwqovTHFe9q1oyzt5JH2vovCGYwE4xJpntSsiKWaAGKqLjXghLB",
  "key12": "EmGtYEMZBjkmFjRCW7ZJWS1t8oxhH39bPWrzv8RGwzyEQJKXdSroizCgbHAr3xEr5jtmNEupyuepzDCKgzd5Ag7",
  "key13": "2XqbSN2ojys2V45wQeX86HdAeCgun3zEAMX2QpWTEb42LMNoatU3JhVc8BLTDEYDsMvw2VgA5YS2hRm2R949JiG5",
  "key14": "5nDsajW2RJmpgE5CK655sS3jgS3UUNExHnYwr1b7pxdDoHbA44d8ffbkuSG8kmtxMvFfsjGA1mDN5Tu51Jm1XDMW",
  "key15": "5QQmnoctMQL9DoNBFDokRS7HA2Ti4DAbZVHthLxKrfbjZnvwbWjwK7Ky8BVMRbQvGPCAq7AxRQt2jJGBN4kpp33U",
  "key16": "4RPwprvHGkiHeKKLXSfpMEnxvb8BVZToBqFsziPNAU88mn9sXDfgn5AeERa7NuosjHxJaRm8vcZtNcTBZV6bQKjB",
  "key17": "2XguT839mbsZJWHMbzjizq6d9bxjEwuZKuCsKpauQSLeK6pYnGew4BXk8VRtszDZD1rtVixqnKD1jFnb7cJxc2B4",
  "key18": "4imngNCwqnpEvWfES6h4xqYvEiSk8twcadBK375nFM3MBuZHE1W2EmFTeoJnoneAG8kPTjjFkUcCVQ1VxGCQTStS",
  "key19": "3cr5ypP1av1F6uFUfBaqJZzzcm8tv8o6xWkxq2mwkxERP4jp6ZUq2oLcy3x2SsbRT42xrh6nSF7g2ndM6FyzPs7D",
  "key20": "56McTpMzLfJkGe1UrpfgGBdsntJGeg2z3fj5tkGMPjL5u2szPHEzB5JiR9ws31JdhnLFGEsVFsA8t3erCAdwxA36",
  "key21": "5y8nEBfDqJxGPK8BcsL4JCzQPP495ALd9Q2VUrSfyzf32LofN2mfE8Qp6JGp6A9RZPK8RcD5BgDqvx25gmc4mLLB",
  "key22": "uW2sbNNKmDPD4NUTvyer4QmZJBM8T5Q5Lic5BuLCsdBJnLPMXjKNEJMafZzAujQXbi32sB84D5Qdy49jdh7Pivz",
  "key23": "54dvqXqns65iLp1VuT1orf7KGDcvn4MHn8qzLuUNxvVKXqMfUSLAy11bjna3j65TJkbDnUKFFF6xRw9ZdEpdUTpZ",
  "key24": "66RNMk1yWwHCz1NfLypCQFuA1HwvzWEGHvw5LNrAT5HHY1TSdgSKU1AiKwwDVdqK1jbnaEBfbZso4ywtthDsEpJr",
  "key25": "4UHw8CBymR5TZwCrucxahpDeJgBRizy89yArAfix8s6LSFDPqYZUQFtMXcbiHNzGyE61egAufaLY3b5yPyCKNzzh",
  "key26": "4XXcferyihHGMzBePZLQnTnBn5XChGL8g3CBiYsFgEiBBer9FQRavTWj85z2iHAodWGC7biXpTkerB6nLhPMqrX1",
  "key27": "2DM3Asg86EX9tKDwZwX5RxoUBQgdanGb7b3Sveb3cqkTM1vFM5nLhsSAckEprnfJ3w8noxj7MGB5pBmpr3QBvkys",
  "key28": "KRfvpASp8tEfPiczfLR3hd9ej6CRnBQsRWgmBWnymNmkVgA1grfSM4jCNduFqQ9T9ssDGL5MZA58vGrcEYeW8As",
  "key29": "3uKxNKdKGAZGxSBAPhqEbe2bDSJ72ck38LXfgWbSNFSAD6APeejMH2yHVLLHTSzmsnBaoF4nfb6CWdkm2DCvzsm7",
  "key30": "UqoDZkV3br5nZ7TpTAuWUa3rd1voGJzQQgMhECKoxmBoygCf3Ky127PTApZAU7fyFCX6ihd49Q4PFYrghzpwmQr",
  "key31": "2egfe9ukZBa9z7N14VyvHReVck2uuy59iaFnDJH1PtK8sTKjdBxL8Zi3abWWiYCfMehRBjj7BYypkTRxEZuQ9quC",
  "key32": "nhJsZuuDF5gWV2GHuCd7PSy4pwg6nM4N88WdevjH39jLQ5xAxCqxqAfQQ4MFoWaNbfuWxRtnSfDW3XznqGv8wD7",
  "key33": "5TVG351ERrUXeQGfu3XWACj45BqJV5ykjLSK2X212rCwJsu8vSHaG6itN1TkrsGy3PTwAeJjHtgUFb6zrpw3y2af",
  "key34": "34daBcC16951syMmfrt166JrexaUK8NUuAsBi85P5wbY7gnKf3jvftTg7UWGQpN22CtLuUWUq8oiyPctsfRM5PXt",
  "key35": "55wz6xJg7YUcvMNEvMuwEzyZs9kmtTNkF9qbqDfE6mXFytMZ1ptRii3WS3FbTy2sPtfspDDaLNZULM7ktQVCaGBx"
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
