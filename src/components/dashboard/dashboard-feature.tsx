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
    "5yNnhckWsWaA9JNB8cPiLRicn1LEm981ZskpMwLvtUU1XmU5B1QYoz8FtvvMQYCNJzyPe3D7JA44BqAPDMAZycAJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m5nqyvChp9T4fHoTi9kmwuaACHhCghkGtvnJbXW1EwWBHAWRKfhTwyyjCdTA5XSNK9gVqiaM49hvyP4GVw6QSeG",
  "key1": "445h9AugJ7y7hECvyQr8MK1e7HLS4XgTNmb67JEy7fPxEi5kCrhdRtNpcN1DGpyVYNfDneuKqFxzyQe78QNGdoTA",
  "key2": "5fxGaeYb7VB62NbiwBnzUztRdQyTPnwyDksbvhTvJq36EmnmsLgsdeWNCH8pqkHdpvPFzCnXeEm7PxzQHgaVU397",
  "key3": "5jQYFVS1uXk5VZEMQe7FhT62cmikycrjuBP673zwNXYefY8PM3pHqCyPwRYLABFys8ixREtvVmn7SsYJZyEi3gkG",
  "key4": "2tAaLx1Dj8keZRSddcWujUVZnFeQhmGUMfCQdVxaxSyjqfZGEaS9JKsJSi2LCt13taP8dmthX6moSuMT9h7gxWWA",
  "key5": "4B1WTX6kN1nD6qhdDvncriW3zzFfue8hW15RKbACruQU5WuYirXEmXUdHi8vmARGRrM7BJFft7GKJR9UfZhNXsTa",
  "key6": "4LzVxPRb5szD6gSaRrXqmJfh4kavmv4XqAzUASvzrV2PpKjtmgDxQ9gwykGdXpDspJQBg7z9w4GmE6dGCR98fNNG",
  "key7": "3kd1zV8uyWjr8yAGD1C8pW8T4zs2zn2ieCdjspyjZVH6UTpUNwXjEVbjCRyaYWKJLpEA9W1kQrVQTcf7E74QY8CL",
  "key8": "3vJQZcu8yrkK8ehoify1LYN4Me62tBV4kF4GSw1pAQX7eTgWRofgLGoiEJyhkURBfJc7vbF5KWFQ7CSLBuvY3yCr",
  "key9": "94sg7MGpyK3hHhge6Cr39wQjebLvf5aukqpV1bMezvhqQKyojFCQLzmYcotbMaWcqAW7J2Vps65Wx3aLjUXobLh",
  "key10": "2NEYDoo6m3i2vdaBrdnMQzNaf8TScLx3tMYhsuAsP9GhaYKEPCEoye46y2AhThu1dab4AT8WXQEZ3eajDMYFmvAU",
  "key11": "63BhUN1qYWsRxbdd9qKXyQycNWqBnmz3Cw1qmdh17J8SvX9jT7ysJCobNibMg9wWkQ1GuQHUq4qTfSdLfHyp1z8Y",
  "key12": "2A9UhJ7oN2st4qEsrvTk19XYKrGALcXdouFSLe1TTaGMhAYbz2evgrZ1tF5KgZVDg4pLdBFzt3be7pm8fKnE9bkC",
  "key13": "4fmud1A4N9i7r2QyDKwByYxF94g8Eib8viLUWmnReUtv2RVpaDbbS5Rd4Jy7wbNcLjNEAvMQBfPtZAgmjNNm8EWd",
  "key14": "EULrfd74B9CWCT4QaanzrYPXAwYqhiL28QF4F51G6qwYYQuFSC1irEY7fESorqbNdzTU1WQrtYFFDUxVnjdeUSr",
  "key15": "21svbU2JAkt8FK6SyyjC5HBrzziFbGKNTNPyf2bXBtoraTYznGemyxhCsXYajgGSqjPvjCqvPWXAMDQ64ou9aNUZ",
  "key16": "4z9WeRgTmdEHCBPxBuGiMAS3MYBs9CSdZx9jqqahWPyRbGZuUs7fc2u8YSGHf6q1BzBgHXvyrnKBPcCGvEWSyjL9",
  "key17": "3BUZnCSmuBkLDkRuDyjUzzXGZ1HYzu9perFGsMuAxhk396YZgteyS7zhd1q7jeTq7JugdenzrfDZehsvW3YyonQj",
  "key18": "2qnsjF8JZAJ4XgvY3CAjZ3g114H9JAwdGSqJ3uTzBSEHgc5Hjmtm4aPmGMYr5N5smh4oFCffpEWbcmUcAKqeZPQk",
  "key19": "4w57jyyekJiWs7peE8zawywtM994ASyzyC39PtYYRnVpQRkxudyuvnNHySRmMBheebmSkSMoxi2y4KprGv83YH3t",
  "key20": "2pMooxdZaxhxgMEiDSBxnT8Aq3zvhQZ4djbyMrXRRke6cJg8UARLNF7tkUvhypmzGrhkKhPYhSwXLnE3wwNvvJpY",
  "key21": "4NzwYkKSbZLHNDNbhGh8oTSdUBPxc2cfTmmzkUzcr9qwknD27jaYs1zJxNSpBSD8nLrfrrNP5uwDSyLUzY1wc7eV",
  "key22": "5i6wMGymQSg9kN3AYdLga2GRXeu1uC6KrGnspmSN78Q5TZHzCD26bL33nfmoKqrDFpcN8L8qxa2G4RTRJtWpWoWJ",
  "key23": "4UQbD2YDsw4xsBDzKcwAjhTZGZw6Cu5SrZpBKcrQrEzsdPqxi5XC4MoTucNpLGa7H99cDhuTQytH83UB8MY2qSCk",
  "key24": "3xS4FvTa5zegtT3eUYeqvNm13iKpkhx7eBehCwTtrKsv5nm2wnzmRxHnmjmFuFXARVw6VUzjPBHLjmdPp78pFQw",
  "key25": "44cRLt1A62fEenXUuFdSkoihALj9JArSpA4BzFTPLpJuL6agh8VXmdfXU1xMDw1Z5NS3muov9tPiVs33cnMdgcE7",
  "key26": "3BpRZYjyyA2qLqzfwSMdaAHHXPMyKcSryU4xAkJuYUUuT1Leu1MmwZfYFqQQZ2z2oeb4vBSssuWuEomVkVrsV27G",
  "key27": "59YKku3qEPmJad2mcarM5ThZmN9muNzayxAvpyCVyrmZEjeUvZPLFcGLtXLNEkgxW1pY9xTMRBs5pZhewfbXvj9M",
  "key28": "57K9Nteqt7uxuzKqPBAGTL5XnaLhqLaC7say9onpBLP9T84JMTeeBXGb7srZcQWWfnv6c5heSmXXqKYKYjNTMvk5"
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
