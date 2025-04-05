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
    "4oFnAAdjUK582CDnS97BFTJQg1rEqjy36NVpdQ8qpc8cZRVSv4oyAgNZ8hugYY3kyy8XLPMx1inL9iafuabA892Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pqxNBW9iEtVzY6GV2JZpsiVYt7D78k14R5CBcQppXvUrNn6ofxWWUY8r2RgcEx4YQw7qWoARvJcAHVYzBGA7wMB",
  "key1": "28NKzkXqbTudNxMDFazkGLsJZbsyH8Sp8FNGwvYrn2X2rrYNXmx3JCB7jBmDfZZRF1KGUqie5KWzsuQMdJPhKgGQ",
  "key2": "4YzkURk2AXGKHTFoUv82PrtcrcLsZ2pjThs1E6CosCtqjeg4Lwoa2M4DwJcDGArimp3g387ZnMUtpTQpB4tyvRWE",
  "key3": "4aos5VbhrDUg2FXxQM75dKfwM8sBwatDnqBEf4hJ4yv3K9ZypbVc5Y6m5GgnvQjuQxhgp1mDi46MH5BwA1xWXx8k",
  "key4": "31iFJDo5GjjKMFN4Z2DHAEo6tCvX3DY7Jqz1LQQHbAVNcj1Zz3xm8SEgKoBoSKfoKHFoQqqWRPtfLna4HfKpvkDK",
  "key5": "46R6wybXFsnQuf5Z8u33guqsiKdPmU5krWMUdapvtyw7j1Fsq4sG2UXS7jDDUMZHXFYvjjRmnsRhVKzbkDAtcS1g",
  "key6": "2uHhjvzKuP35nnYii8y5887HaY17tJobUXHNgHoTmVJa5ADLUaREWCdAHU4B8Hp9ia9qQWENUqDVBtS5k1FT7P7V",
  "key7": "u54NHiCHp1cjRFRodPHv2Ak9Ky8u6mzCTcQ5CaTybCVN9bEq9drbsMLzi9RtSEDSQxUaTv8VSy26Jr544ZKRgvU",
  "key8": "5mm2UA5G1cnRKYLn3UXxKeoXCwTdjMrjkTXmUzQm9ZH8s5aMcHzT1mzpygSgUVPnBEax6aikTSziMFGErD5pJpew",
  "key9": "3oKJAck1zTBbzcvx76MbLSDxASLd3qAWBwkvciThJuRBtVn6f2SADinZxPEjfdpnkWhnuaNuDpHboawnjkJst2o5",
  "key10": "cPDeQmamczETksZXpLubm5jaeDY8s8nmLbvwr3AQbA1Xf85CVHCPYPquiQnLQAGuq8GikSYksEjnqtcr9DQQ873",
  "key11": "h7xKYJP2zXiTCBeBoRGVndhxyKy3Zm3ns1mpAjfb5RhbxQPeeUepk9XCiTzmjBnPf8JeLk6W42mA2k8uRj6ENLv",
  "key12": "AB8PnjDNrdpSq2W91r874s5UtFvhbSVveM35CauQgumgh2fNJ35Asx8m9JR4NYgnUAnFjbC6oWuiCYY769tburV",
  "key13": "5kRiosQ3TBBmReZm3txjYtpSC9vsVqZZ6UD7bwoebNroTGBfq89SHuFNzxfA5FbBwAp5nfpN4gkcXJbPL8AvaKGQ",
  "key14": "4ZqsUQ3NaHCVExwVsupkt1Yu4igUaXk7HYdNQzWL1RESNJFhyn7v9n6qe56XHcueBwJZdM9k28MB5oEdLGpDez5g",
  "key15": "5C5M91BHSgBzX8Vcj2wqijYtrPRh3XrbkR9S6uwn6zcjwAoQquWcvCyQFVyrBcf6v6C8jakT7tKVL5Zem7vpkB5N",
  "key16": "3uj8imWP5v2wejYAkDYDqoKELq7GcfwbSfaenY7yX8xmxa5GTwwtsLEtKQQzhooAMXJj2RZHoJtfrByfWK77GoBy",
  "key17": "5Rmyb5Tdm4R2G8qcvZofaQZ4FqMac7ngpzRCk3hPtdw22EJMidMNiYZapdE7rJ5oV9GenBFK1N32GST7DqAz7y82",
  "key18": "4rLN2PoMMU3Wp4CHcWQSUWJn1rJUM1L5QSPntUHcu9jsQqbLq34qtXpom7qz1g5zKc1C4EvFYLtcSvJCAKcHRAFN",
  "key19": "25iKkw22pYDaoJ6p1wEYV5SyX3Bqyc1qQTtfsME3pgNPgsGVogAjxrMqdqKnMxKcBMCbxHPg3cxgXrZ2U2Qh3DFZ",
  "key20": "4hDokACw7f6wmajhXjqyqgU6h3GE25g3YYEenkFpVjAhHoeDB5Ck7L1PBz11ph3N51FY1U9GGQr1DQ4cFJfD83zX",
  "key21": "2HpDQz9Zd4LToCAHfWFyLAcbwrRyDa3Df7mF28iCk63Zf5U9i19qyKtZv9SHZYdJf2wNN6jd1qpPfW2usR65KoWs",
  "key22": "5Pcra9UM7mVCFyjYt1aD38VBPdnvpDGi6QNAF5d3vyBNzMe378hh8hARr9Ybxbn11hBVqkwpHpdurxL6G3eREaWZ",
  "key23": "2So7JgwDzLjMWonW2i2u4N3f6Shu4SnaFUkCNAk97cZqnqGYFv8YzVLWUXsd2VPo85biNfHLfTN4evmt9N3ochpG",
  "key24": "2RrgiUuK5daG9twSYbBZiH9ZkUXXmEfdUezZzGH5TDAsP88Tgy79fp6T9kPNQGkcA8DZNRhAzxjFdLPCBDD2d51T",
  "key25": "5gTUjJcNXhVmLrSDTURxaosfiUsQmmczwBZHCM4AANqmPYZgpHFBDbuqwgakvUQbtQrXYv7TYViHyQ3xCr4X97zr",
  "key26": "5RVn6YBhsRBwNVGPLw7C7YKk5ErXk6FPHBC7q4raMkWuy43ADtwWXQnZmiKicau1kjEWtsZKwRHT6y6hqTa55c3V",
  "key27": "Zbwa7Yn5LXv5xFGja3jDqQZrGbRJSWYdpCLUd3CQiJDobFQeZ7A64d7XxYNUYADjEBRwRbjK2NMazXfKU15RcgG"
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
