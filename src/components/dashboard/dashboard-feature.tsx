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
    "5CmUYwqKJ43GP2epP2XREUZ9D2a5GCWdaQf2E5AHw4HM2Kx7DWteHH1LRSJuKMhUpiRwNMrwDDgdvb4xDgTcwJFf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q8rA1FSDYDFfn48CBDDmwPiADtG43U1EAabVEUjTQAUW9UdJbMJn13yE53wTyixRd1awWa751gqCBrtqCoy11f9",
  "key1": "39rzNNTx1aBYrfPe67TrWB4GjhFJPcZdDKKSC8HuuGbx8b2X23PG2ZNcRq3RUH39kBK74wHkRsE8iyaDhhNKejTC",
  "key2": "2YWp44F56PYaLdmwYEHM8PWLWxbzjhnufVhzUuKAhaVUD5QVqnL6miFdc9eXeHYnrjsR2HibMzf1w7aNtw1LBVZD",
  "key3": "64o5kd3xcKj3w24j8JBghmne5yaR6V9FiQCpr5HPhcC7USb4SZ45XHeY283WpEhNrAkdQbZKfq78DDsiFAP5xYT2",
  "key4": "2ur32dUJ9vtjsbAnVHqiDbhixKukTdzL8zB9uidhCPAboFxSfJBFLf5BEPpQWECmPhYSpsYHUg6Gn3hwDTamzVGj",
  "key5": "2x17MrZgYyEsC9HD7BqGgA3QMJbNDjDJPcmQV57zNCxkzogNY2hp5fqfsUmE9auaG6di2yqHoZyur3HPaz7skjcV",
  "key6": "5FBJ2Z8Ej5DW6Xwm4Pdtkb8iGVTFCC8MTRpn1aG6MkJCQ88M2izRQaVdVKTfbjKnsAfSU6VEPCwp6GAgbnxtR5Rf",
  "key7": "2cQfzu3UH2K3JFc1AAGmz6cJ2im5Y9GNodkyvsskMBmYBq6uvtCnQt92NXKkGRxa5xkBoTasvteTvwbhY6wwHhrb",
  "key8": "3y74vRtYHsssUnoA1BbDaCPLi1bA5ToEjEv5Jq85NSmbteWevfyxVVvDLZM4Vt78bCrrXEqY78Lf1xg6Gkpm9BxB",
  "key9": "4yYjQ387AZiYD5NK8KJ1HX6MfxhGzZH1btY6NXwrwMEWYZgfXWNbW7btWYkWtUcUtq5MmrXQ6sDA6CgyK6bWko7h",
  "key10": "67dGFpEUHmcnffAnQwbvRcZ4pZtN3NzBmd6gDsJ1kuZNcZuWXToBNH933hNJpjfQGwLa63LdtURDDRePaCigyZP2",
  "key11": "3P6uAanKhrb2MMWvmzVbNBEdZskvPHjCpP1pxfSUZ65PvZpaADSpqKuw7EgSmmxXBBE8HRd2R9KWqPAwmynNhTNK",
  "key12": "5iTzp1fiDuKzzZJHE3CSBYEF4uJ5vNKQ7B7jYG3FD47fztTkP9wcwQjJQc3C2hqRdsYspNd91sfKyyGemW5VTJCW",
  "key13": "2UwxFD7Yien7QaJhpXoEtxhthkUqJ2HFb7oiM9FKDexnrCgr2BjGRfHZcdfHLdk8mo4DF46g25FBdBFXXet1XkHq",
  "key14": "7xdRR2ZkLeD8vbfUnwxGhSCpJ68GyGUmZKYaypUyFPCQx2QXLK1A8x1PNKuboUL4tHviPgRW6Tnki9jzQgjmF4g",
  "key15": "2HK91o42VqvFMpe9f4iYfAJV6djXLwZUHgJx9Us78DofbN9s8WDcvMT5U2YuUPzfmbexthsWG1Hzd3m3KiqzHobW",
  "key16": "3suWJkeKMhMGqLHsmLoMRXVbRLLMYzV9GFzALMfi2iRCpHziXHGV7gC7Jx8EtefDh7Lx7tvz4Fj1ZYG4czupZBkz",
  "key17": "2Y5xFJZbEw6geWkKGhLnAwudt3jSH9hnf8NrLCRMwVHgMwoq1iZqmEM9zTkHUCu6At1PyoHzJ7YcDsZ3TW3vemLD",
  "key18": "4wjggXcRxGXWRnXCd2Tp8rxTk7ygECsZYPCD2DkNYii1QdHeFi5RtDBcpCF1d33pJv32Me3VdmZZ3QDVkVX67nDt",
  "key19": "5z7T9PJS3yufeMpJX71KF5Z64j8EhZqopQJ5u8Raa8UoAzsRtuWHJcyqSMhYMdj9wfRW8q6gfaaKQ661UKvRH9ur",
  "key20": "2UBxmBLh62HTHdLcaFtxyhWvFg2Spj7VduU7uBXyE55pHsk4gBdPhAC3k3u2ESGRSTWAwvUR52U8ecpKQ8tL6RUc",
  "key21": "37hSua1ngskgfnKXE3uNCPWPNcDmrZaM32fnLyYuY5c4h1LNTKZsvGeHVxFxCvyZA29k3Ei2YBQMJFDvkp2c84Vq",
  "key22": "5qe6pcDcbcgiB4XAnGGpWchb9XhgPHdBb9vH6pfSc4chfR2htnERRKxGQu4m6WnKaZF5iXTdSBvuwo5hMbrm8Y9Z",
  "key23": "3XUkY7bLiU7sMrnP9rqk3KAE4Ey4EV8P65ZA4kBgjn2x7yYXoRGLXBynjtW9Gzt5qxu3ipG9UdZ3VPWAQvWTAhvM",
  "key24": "3Ct2SroW9gz1QY1MLhsXQ1j1RuTxqrcMirAbwWUVu5K21SeJSE87iM8VdbjiVBFtoDTy4bfEueFnfLoMwxWafUC6",
  "key25": "ADSkZyEAJ4ouQRuMMJMr4ZycHPH2uRhVs4rHrwpcdU6w2ewNEUjxtjs6mQvw13Ejhponjqmz2kNisxwMxaCiY2G",
  "key26": "41B3JJMcGKcLoJkp2ZfSXwhm8DG2v6UL5wpDG2q7YtqYZoUcUydhTV94rwotjfBgCHReiCkAyVJ1w5jckzfwWr5k"
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
