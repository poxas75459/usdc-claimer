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
    "3tuu5Uova9VJX1S17ndTF7Nmb3MMRjK92bLZ86WN8XAyTafWBQRDg8uhf11uvxqFyBeNpRK3ydFxNXgvyrXb7tvG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mWVV6NvgLd6YbNUR3WqqaoEwaC757eaqJ6fQ5Y49YuDApYKDLogiboGmZq1nYoXXq5geEmpUZSKoUQXyNJH11cr",
  "key1": "2DYiYpBFCBWQNqMvBenvkbcNENqvf9pcL96aYHPmr9LJruF9tjru29X2xiZR7hBVLsAyDY4ymfbSgo8GGyJycXY5",
  "key2": "2poCF3r3WEVepiKU9izhLWeiosoKWia3ZNwpFh7o9xfRMEc3neM78TivJCqxDqtZCH3WiyfuPaurDSVeQzapjGYD",
  "key3": "56XVqjQ5jW2gq44EvQLUVg7xNcj4wnohGdabb5Bjc1asXA7Y2s5cebnA6nWMwZ6yy14jk6zrfmZkzDUuopqsZERy",
  "key4": "2k8Fu3tkJyCC1F4cPPPjbLCLgYht5NMmxEDH44iBfgPfRtCt4o1S8jKDKEaNpYCKXQYVvatTwRD5537rG4FnhKWo",
  "key5": "35jdxXkoxmEWJjiXzBsmaJogW6GtbxmMCKqoD2ygC43mXhNouj3mzwKGua8NmgsuvRGmWRig3SCs1rx91BvE1ckq",
  "key6": "2saioJyEbQNdvHspVUQZmdCBcQDi1YsY6KHZAMbFNDdyfV9kfoUSSDt4rdQ3UeesZmRB5H9HcS2sbznbAHMf5oL8",
  "key7": "3iTDTQH78GfUxA2aPDruMGuNZZ4GJZM2uEpJh7jmehzFu3g432yyeP3SYadcARF3UyTXVZuW9xqkhYjtqiJKmxpJ",
  "key8": "8rs53eCqDHybRRsLew5wbT6P8q5TyWi5ePE68wm7r5uq1nuZNC3Mc1eCiSBJMqoLY2AEjosFgt4ahTnyExMWYNn",
  "key9": "5fg4vzzkmU1PxuJB9Y7jTBcXJSicS5tpCDbGaaS1DwYV4u83dnfbgh9rcN46uw2DPHdV35R5xv6W14rJR3EBdqPZ",
  "key10": "WHTABFQALxj4jwx7mY6Gpakmsp6kuRyVUX1Uxnxy6JVGgCiFGFY9bnnXAqPiMwCTvkRCrTkwfJ3Z7WHvueSfJxu",
  "key11": "23mUBtL8Yx5d4aEmact8v9eBhV4fWDoAionJ1dspTFU5HW7WTsSDdEoq3ZejfR46w2ViErqqD721StMARmXGroA9",
  "key12": "HStZrBRys7XYEJRq7eekoJNtinNwNZaHwir829rqBx6DKUYNxYAc1n1DbZXfyv45RQAsXBfgD3Dc8AJSFoWsEX9",
  "key13": "3BS3wwUrrxdesqKDhM6VcN4zk6gnxGprf1QNenAugmBhHJxUJ6AxdvFpTEHGSEZVSgF29AWUXprPhLiwSjTSyWBy",
  "key14": "2BqDfwXpjVrCBZopQoHqTLSLTLpga9RLYSZVMpFCJmiLsLSSb1kUkVfPo2yP4dn6wT5j7f5FfpUAnwqLKSjUdJX8",
  "key15": "5f6B8YmP6hespq92VEB7MyZ7iZ3ZV4ec5UuUW7w2hJvHHsHMcLuTeu5cgibEAJNVmpeRzEt8VkJfNwTD2ieuWrSn",
  "key16": "mPTdPrHdFXAFp5exbaLFKFLFJikg23o8oMJFV53v7J41jYt5U85ekMd1toKNRDzeD5DcUbLGNGNG8rLWUh3TT6s",
  "key17": "x3jYch3L4stSZhXGKuUJT9NeCG9EwxvuJbqZepdB3cg5Pe9275VKKoMZYAE7zGiUhKbK5CayPTdCTXiAvdaqqLH",
  "key18": "63niBAuCd2TWZX4tfXuJ9SDA9THUE81mt56zxpzTjf39YKT9PZpnNSeqDuavkgDSh1DRLnFiTbnyKCKw3wX5B6qQ",
  "key19": "nmuMbjfig3nZZ5ZvoS9TjCRvkrHCKuhvMCPE5pSrGfwdfMTtLT3TdckXWkLFevoJdaYGfQm5rx4suaKgAfyVuzk",
  "key20": "oKgx3poE14qazZUx4zKc8SCxcquQ7PNrQFE7omFmJDAdbyBGQnKBBS5ZeMAWM9BwrTMLgLizeLTKBrhedwGo4bG",
  "key21": "5zd8x2WLC7rBqqE4k8dLRC4tPLdKzFCqYwxDFGicJGkbnHDTwcjvbMffPsSxAtnyMsjDeaWsDgxQHhYge77jXBYK",
  "key22": "675n5vSLU4CTufwQxiySf7QzP9kEvet66xSPbPX1RCtzk7Pr5SaFSGQn2KFdEzRc6v4SfqNXyQ3bRtDUUSVWRq6G",
  "key23": "2eUxgiaEyartFYEi74QfupLDaYXePMURWhn7BtFvQneKNtHDZ3d2xXabW6eLr77ErL1iQCBT66hWQL4RuHYKj1Ln",
  "key24": "2QHXzjwKrou5CRkTh8obSXQzQMb4J3VUTGYiqd1Uk24YgbWKqPSuAECMQPebrykynFvepgNToQk6L8Ge1vcGmZoY",
  "key25": "4yzVDzUsJhdmwVDcgzvQ8cJi3QnaqVdoVbpYMLHnXWUv1PGwfSfCLd2cqs9P2QEompVSbD63cW3MCg9XiBG7BEjt"
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
