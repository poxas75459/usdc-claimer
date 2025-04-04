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
    "GvvuS2iWRwfJhJ9shZtqpn74jejNPgBznxuyy4F7DUsabH5xaxs2rxV7DkGAE6v7qDeZpLd77PxszbSBXwvzZxa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28ziTzwPjJRdKcPprUtp58EvfF6kJp1CkMpTQMjB8KXE8zLgv4cc3yh1mqRgZ1S4XtmLfpXFX3oaN8dMF6Mxk4yT",
  "key1": "3GwyAfEDEZGmtF7Jg3Pc2JW9cawK9Q1urh418pdRoqw3VFxo2NPgQjHLBok6MjsYF6eNLx8xVbRSPe4KsJLyymF9",
  "key2": "51eYKXspPqAGJYFkYyciMkZdhhsww2K7gdhJXPti1nxta3phx7AiE59r8Vudq9jYes1cugX6dJgACD1iD3KBZTGH",
  "key3": "3T3tijaRDPV1Rx8hDb1bdwB2dL3sGw4LHtBcFFgkTyxpCoKNyWECETwfjbqBeqo78aAZsnZAjYzAw8JBmRtyq9Bq",
  "key4": "38wuq5wFefGoAJyJhKa3AWxNH8rqAG4z9zodmgXfWwEnB15Ycj7bQPQdBVjZha7K6BHQuk6oH2HUDY77Hun5mWpZ",
  "key5": "5FYgVGCKGAntrGrKoAK8zibFwQs19yq7dWM9XJ6Wi3CKgHPM91LSZM27NukftbJLs5NS2nZYf9EFPFsnvDQUnjFh",
  "key6": "24mFbzHjhsza2VN8ConzNBHfdVW3C9Ct8kV3QeSvQzqsjTfznYDjKuNKmLVgFavkP2w9m2wGnrqHU6Vj2ALzYCii",
  "key7": "5zsnMY3gNJL4Y4P8kumd3wSfW5TLCMPh2ZKiGGpD9abwNtXgNM8QM4htZpALaGYReweZKHZNV9pdprtuZY12ww8B",
  "key8": "f8cYE4A2w1AqC1iAeNVTCmmRacjEsPuny6kF36WBDQA4DAZgTLT1yXcDMxpENo2fnMdYZWxLw9ze2FZhMWU9P7x",
  "key9": "4z4PbWZPZi7zEiVf2w8XBRZmqj5qZKorpF5hTeghSNRoAeXMXEW1fHNo9o29PSHvxCYzgakmjPKsUhxn4drauaco",
  "key10": "3vHhyNhwvDdbZ8HBiUMfEpRjJpjjKDkhRXB6LGYCZ7FbmkCasKiVpTGVepw8XQNR3YBGDW57VFWZbwXEhFRTN8T9",
  "key11": "49ed5b426QqDRSm7LRUJwJMSC2Tk4edMmTvozuAreb5Up5HLEGgkrLWbVHrx1AduVvqTk4TncdKG17QKnBKG63vJ",
  "key12": "5QgjTGNcYfnzVqN8qnfThGddqDtrJ4r1fiZWwRXnVNLzpcUcyq2TKfLWPe55hJqjArpgKZHfqivYePXvzPwpEvYq",
  "key13": "3YoYK6uTQenmKemFtcpVYrVRcXRtYVKd5fDsDPFjMq6oo7J9zfw44ct6U8zMZjGiChg2Y3yvEfN86DyxzvUQEHHZ",
  "key14": "L4r1VXecYS98dTHG5SyeTnkMqGYMmWTPBkuDzev3K2pukJmp3HaCF1UKhRzJWGYar7FEubErL1FNnr5rbnxbyRg",
  "key15": "4vpLh19q6zEJRaAA2oTuD61H9kkTqK5ujNiTJGQPJUDRwkBjCGCBNHpnrUPqooTG8kXKmEXwpHr2nV74MrKqyGzx",
  "key16": "5XyCk6puYPLCMW7WtVhqWiZ8wnmX4WHv3eFrzJUNTXjcMtF89mmNURkHWNiK8syhkwMLqKfat8Xf2r6qqya6MFa7",
  "key17": "3UoBPeYeXS9kpq8HQJS6m9qfKXjEVs5SfKqWjd3bZF1iBZw8H7fcUCpv4VbpNC75veruUtTRLEJsRmEewnAFuTQk",
  "key18": "3hTUFbSfZoGtMwfLHnVxmZLHLJiqcQ2ZyhLUMeAibhQW2XWHMH2xjRZeFkZiwxjC4cZUxa5MUWDSEw1ngxfrhVWP",
  "key19": "TbWL1TxSd76rr6m6LmiGAurnfSM1qv6dwSDkKkayvBsTJDiX7rxSa3DQXr6rwduVgabvukAHEWBDkHAfwDCPRFe",
  "key20": "LktPStFUq6dUgyKfPGBsfYTETrpnEG3VDZuDL8XHd7EjhApk6zTkce5EwrFR49WWgzrWdaCppQJ3utG5Zq34Q8u",
  "key21": "BuY1LYeK6hrUcKCBFrBkHCsR1495si8dzCNZhmLYxGXyZpyiR5xgtwv8vuMUYzKyJteY31mjub8wXv2PEMe4qVs",
  "key22": "2tVa9NQMuVeEJM9YzV3nD7dVFtHQQ7CeQMmKYUjfQiEedETfBwS47oCfrCZ9ZCELb1EAf18F5ZZnxkMNyPTe3DSL",
  "key23": "62wYzCFDy9XeqohQaYyTadoYDQMMGeLVHtv3ZF9TSpgYeAVHN6gXPjDeBPDrXcitLrN5aiEVfGs6nXauSQhGJPzF",
  "key24": "y1aCVr3YeW8ATUGC37Po48cbZnm1J6c5MigbCv9xZNejwCe1FG3DMMfmBkEFWqhBq9XwtBM3vzM42EvYM8wBCtt",
  "key25": "46EFQd1D1cLK5vdjUTLbmm1P6F2kNGhFnCK2GT5FuwHJnYJgq1XkFNU442uCsYGvkVV6DnnpLDVvcfei8BiQqQaC",
  "key26": "3NH7HHYnftnpBLSCYE3Dg3kvGnnid4tanbSz7B5kzEHy8tAPTJfUDTn5WDDQqEKdaNeViTx2rTTsJ9XFZssHw5Zz",
  "key27": "2j49AXma6jW1puJaqnjqEfuMWhq4bVTrhv25HCUk3UmiVyHdVHqGWQ5TqtzXdmazqDRQKsxCg8RRnUxLCXMdVKew",
  "key28": "5teXJPzEk19ZqAMcjAjiNqFYGbrfxCxrvEWzn9Dqia3V3qgznqVNt88euTWAEg3zRFwTtj3ExNcNeyPKWdYo83RZ",
  "key29": "1JvyA4Q3HkWxHi4Uk5Cy61HPXDFRfWi2a9UTVMDqEHXQormkZbQjnNMmuBQthKr1CRVpG7agbqkP1jRCAj29Riu",
  "key30": "6NjPs2QEGfByokyF9873AU5uzBmdUwkt8EccRWwgzaWYQXur1ZRzdmraWFxaXYYF5z9wVRmLrcjvKAmDN7VsuYz",
  "key31": "3UoorKPP34dW4hS3AxCgLZAuoCKmuLGk5LXP1MLyACqc8fMKM3fZcPU38MRdJrATCFFuaLJBpbVfSd7oRtRH4RCf",
  "key32": "4bi8fEhLQgtASDPESFs2kz3N2r811zxAvm6gSna8wzQhyangv2z8AhaRpP6djuAmH8X3WDaGLHGvVoP1sJ76Ptsn",
  "key33": "5h1CVJgNiX26iyXh2fEeHCpWLAdB3NnxcNRU88ixCFh9c5vgvBrqacveqTqaDEfvHfZuhCAz6br3qT8cqRihX4ih",
  "key34": "3a9MxDNuPR3DaH4PwJHG93gucd5qtHSpXqKi1zjN1h38aEJgbmawmCVsUUJztqTbUiz4fy1GASUwf4cmRSDaB9ye",
  "key35": "52EB4fsd8sMkg6qk8zkHiYaD5kqT55SkUQ5wvitji82PNkEUFShA98GhiSmsr8nSMshhdGZhJfrhLvjBZafYqzMw",
  "key36": "3PFLGtuDdnZVGfrt7dgZNFT6bYn9BjhfQvfnbYmAutfnTuiB7qqAUi9nTx8xCrdN68GeHAoWEyvTgiyqsqpQWEvP",
  "key37": "2h832C7dx9jEHriV3hHdQ4grgPAQYii7bMVYsVFanYhH6YntmTkqWEwASBcoZHgkGegYTUepnnGo2pvszTxfMq88",
  "key38": "5zoJVBUhrrpEKrCyNqD5KuvnJATQ7AyMy8kGq9vgctmeraBp7w5YH6U3qE36HESkRVaLqxXZUKbTAwVykaLZ2ynz",
  "key39": "2fxEKqBjPkZcsrD3JxGKsB3nAAsFKop1EqjUH8HcYoj9mBtrjM3J2JL4qFGDUG9rRR58WyNdLinCNmdF9fkGCfWk",
  "key40": "5jgCLTfD9VrVjV3R4ZAHCan9UgcMukV5ULVuWky8aq8EQ519zsaqbjj8xQ3wmWruuPN4KLanTTZRm8TeqahUtXEt",
  "key41": "48V9y3PRecnSgdLVh2VwwHQRPhUuQWsZ1XTx4UtWotWdQFmYFGLJdR36buuvUjNdgYvLeZa5knwEyUBZFaKpKbpw",
  "key42": "EFqWhRM7i23uVo6vi79KR5aPCfoPvKJPZNwjxL8TWuJpakcPBDPzehmWAQ1ciGtwG2En94QxoMt9ofcm2KraJ3Q",
  "key43": "4mrx6eCqgXEqV1pMfgpVRtZUMxgmBEKiYpfPCL3gAaErgc8um2P1K4FNrivP6zVoQXvBB8dSY4Qq4SUdPuFjHnzN",
  "key44": "2URMX9AaZj9oCZoaJr2R5hSeDR18atPTrGooN4FH9wzbLWRMNLrRARZvTpsTZ8cqju7gCFWGgidrSnqpwCxV84k6",
  "key45": "4AvBMS45d4wHrf8cNppotJ5gCKz3GkbcwRQJBD7gkK16kuoqYWrBhvrkXSa5iGMBWXYG3A7MR44NAmastCdKNnVz",
  "key46": "sTEM2HW93uGGexFCJQbUDH494T8j5QosDo728AgeidhosDDHR4F8ShMhqF1xctrgxAwUt7fdaoYzNZ6zroRfikd",
  "key47": "4Efs7PBA4WMHZr7DpmrSCuccS7Sb8p5KdxVXM48oNPfmPUNtp1RgonPUvQ7CHCmUDRy6pCSBh48mAAvwnM7XrP6d",
  "key48": "2o8r7DD4uJpxQLzzAVy59dWhJpeMqyijn8MRY2ifPpoN8r96Q7h1ZdnYMFMkj4T5RkidvRs83CF5bxeKPdxcAU3o",
  "key49": "2mh1SPztLi7h61oQyGEfnZExAy89HQbv2Rc5wvm936ya4eYQvb8sTbvp4HmPUpshfRAMD8Vb46xeTMfbsG3aEQpt"
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
