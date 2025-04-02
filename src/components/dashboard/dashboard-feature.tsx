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
    "3ynRsGE967EwAGb19Tf3crjknzy8mCKuzPcHCVqB9jEDuEorh5qsLkj5LfC3MNNC8oVNkGipVuFa8sD7nfPdG6LQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44WLEBK6RJVFuCCRd9yTLfAnqNr7eC4NMwmQrTKhGusPYSFTBU8MK8PpFte4ZgzfcvHVpQvcB1FuTvwQhgaQa1p3",
  "key1": "4HjPZejcjduswenha5rGNL2fxmvXkwnLsQr1cQEyimfonWSPcW1nD2HHUrMF6pspfZgUEu4rtpBqJGtNnFJC5ufC",
  "key2": "2giBGtzPHU4P9EP6j45v2Bu5nXybba1KrazoNmBFiUdTMoQynfc4YepDjPXABRBKCP9BAHaLzKB9CSMJaY2eYpb7",
  "key3": "5xFGm9ncUQ1hJXbWidMdrRv7GoVKQAfWgHgvc9y7aZrQ1o1tjFSTrouakGB9JuaiaU7VRnnuhRkFee6wAzjJZnkm",
  "key4": "1fbXczZ8tepfsax5YQxYCXVWBzMfgaRG7Tbr2k2GhBL8KeddSqCVMkSZWd3C59Q278bYbpducVuK3z1cfFzLBRe",
  "key5": "5e6BBcGRvEUyuzCWKvDffMr8BmwmZKRdqso4TWSQNsLvehAw9KXUCdZBeMbhpF3WT79tH7m9HGkhe3YMhrKHTi9v",
  "key6": "4Xxz3Zn9QBC7HWJ3mvnnAV6H6Zx6RgK9aKaWby9FPHGzdSNdBtfaLKWWDZimdtDF3kYmzMK6XkVFNiPX3ocEjfqS",
  "key7": "3gm6o3Ypkh9PGH5de34EwHfsgrgQVjfmwztgBQCYjksVesp4ceG4x4dqTRMBCueQ3H6KYXCed1rW4gT3fJRuTjRA",
  "key8": "27xG5Y5NpPUCmCpXCYmmkffKb3rbG6HvvJitLKvpxJtvXfLCUCi568DhsHSaqEisZFLQWVpsx9zGCr2YKuxSGH1u",
  "key9": "aTTqw5YMMar2F1MGHT2RjtzSDmExrVtnMt5Wbu3iEdiy5c4BnbsM9b1z1Nr8u6Shx2wAh8FHgAHmDkpLgf8LYXC",
  "key10": "2b7tR9SqSg5153nBUPzybG8F4nemyTQJL3LdtxsWKb8tHmmUXze5H9ueB9kkgQ51rBiRb8KeWycfpA31sszP94vA",
  "key11": "2Yt5uXQUUZn32bamKi8ZSszCVSxf2oXtVYTbKTXBLCdG4j7gLv7YhAFBFWQddWvJC6HxWd4HE6SNEYpzv38CSktr",
  "key12": "475papTFuAeydz9QLrmp4Ayzxj8dKzVCKuALC4s3Q7TA3cEMGuRJporeW3jMob3p66PoHqAtFs1t2PscGaQAo6Eu",
  "key13": "4jM3AUCQenb7QnR6ZAWwBai9LHARAv516JcP5yDsXBuWSKRQaU4XAJ9QfUVoPkp6QWuMyCSaS6k5QETh3n4RKMyF",
  "key14": "5hRD9yHjc8q6sinZriAZvwJsqs29YU9ukpgoQiuR7AmBjLc1LVPgFG3XDJmCpz2yVmJEQGzBHrMSqZYG4f56e3gT",
  "key15": "CHegJASCVA39KD9TXzi4VZVg2h32Z3stoi7Ae4LDa53M8Wa2digvQQoeunyPtZUjL5DhusxMMCtkcqk36BAD2rR",
  "key16": "5kGeH3ntb63QNyKKeJjAFZotsBBZfJXzf9MtWedYiayHoK1ajRTUkbDR2yDjKs6P2P5cLH3H3Sb5pLnugae4FBz6",
  "key17": "2jR6TXpWpV4XnhFzqiNJqu5wqfH4D98kAA8xJ7HpajvUNZQZxMMK4PoLnmkdjgWMKXT9fQX3pqvvrDV3fyxTg9rn",
  "key18": "4NL8fAi4LJxEcvfvkgLC5m8WUpguuG1dvAXPtskoZJi2vzxGW9Phe6RsRcNQWhcnYniKxpvfaqcFfXsuSvqLAsa9",
  "key19": "2riCKbQgWCioHLEbfPXtarSUFRV2RUgeci3eWTrEWeMYznGBAkfh8bUH3WRPzG7Wf292ADEjRkYELzeeFKsF8BXC",
  "key20": "4U7cggcHyaekk6STJU68wpibWJzGrE87QJ3UDbSxApH5V4hotdSJxtmpRvihrJMnqX29LVJ63UVckLCQgksHXfSb",
  "key21": "3X26R2Wjz6TnCSV3CT1JGimjC8wY9GRcrhD1vbDMxg35ssTSEuTnvWtbuaqkxuMTpbxZzCAEhujRZgMzkf9Fu9yc",
  "key22": "5F2BAuWfV7iAKPiwsBDDjnL3WzHLj1yG4DELbEaf7yvgZoWJ3bq946pGeiQBeRHCLSgQWjosW8LWguwR1JGneCr6",
  "key23": "4oqqyGamvpRJegmfFgvTJ34HSYXk883YRfSVpfJ2jMA9NbxqCQGmb7Y3DVtUagbSSttdQ77eFkVwoMrrBSeRtjTr",
  "key24": "4BGWGYtBZ1Dr5b8soZXQvU2cGEBDcavv1UC2X7hBsrZMAZBYqgPamhkrpJgVYsEiFoRnqPsQxqEfPuCUVSo5wtkk",
  "key25": "5fexbsM874V6j19tnadf5iCkSN7M7CZ8ayx2WqrsUUcVjnVMhjGvJmkMm9oDgmBdvx1xMcHoP9JRC1wqJGupejsL",
  "key26": "5jgy1sHJR7nDbcR2h6n5EtyqSxk6FfsiubyAQGFCNi4kLF1PUze2Td9ZWoS9pHHBxhtqsrwHgz6xhChZYAsp1yS7",
  "key27": "rftktJ1bEPR7ttPaRj2WbkjJbkkXTsYkxcv1A59WDo546UAchGAb7SMiSFb3hpz3K78JxhCSyHqHNiVdd7RZPj2",
  "key28": "77nPZuFoWCjnRrAK6WsTrJNM2C8kMp4DgXUgpWAyAttzVqzW9uPS6uYCsCLNnNqKXQ138JF1ruykN189KYK4ZDa",
  "key29": "4cAq25UQsn1FEdKKjLTgm3nQ4QXowrpNGkZkjRvyeBrZCBrAqDTLfowZdTk8Q9Jac1ZVNC4hiDGozau2kAu357tb",
  "key30": "5CnMVNWgwCmfaEnew9sMgkGw9r2ZEgGBdt8r2Pa2VnCACocW81UtW8GMtfY92URsbxzboHuuVNEMcgMd71TqxpLx",
  "key31": "5TxqV7qcoyoexC1v7vJ5k2BeCccEKQBCzfwkAP7EGiQudaNekDrk425NYSgPjMwGwrnLfqm4YqjAABiHjadF7HhW",
  "key32": "4FnoKJcQbGsJkP3YoXiagcJs9MfuXSsahEeJPFD3qfArhEUo2dzZFZaNX1kHWSgjBYr7CJ5ktJbJUCqRTv1e1Ppc",
  "key33": "2gCNff1fKPTWNVWahkdWYZj99Ty3vDFphDMY2mg3JBrAw5bXaJpRsaS6XhS5YtoWrKwtmkn7nULJ9KpMRFkuWGBx",
  "key34": "3hq9HY5MvqYkwQm72bXy8cBtzFQrBP1HaEDx7hy3mZFdhknWxrvqoBWp3L44Xha8fRs8QA4NDQZpkiiY2QqF9UfS"
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
