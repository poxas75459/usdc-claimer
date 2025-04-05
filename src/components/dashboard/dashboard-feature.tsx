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
    "21AxevPL5Zuj7nAzFjK9GpG7SKVnsx9fLWPMNP93pQzG2rrHwiRdKqXXJozE9sjCW8Wu9G7frozhn9LLeUyX1W2H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JMvFnD5CZJsJhFL8oCnnPc8BAwbd8CRFbfha97ajNVXuYbG26UjDHfBmxYXNS2YVKv6EwU5f9NKuFAox8bEXqdE",
  "key1": "4hTSyoAdEiD6mWQuT5xmbPDn9ax8rzTp5XSCP3VNDXP57NgY74qvNr2CG3o1wVd62gTW6kKGoQhaAS742c986UKN",
  "key2": "5mHMEKdFnfj2tyHgYarNQs88gJfu6GJGmPmd7YvPo1Z4aQysHvi1dKHxbFMYtSZNSagBrWvHsrsBjameHszDNpqT",
  "key3": "5eFru62YHrFqgL67ycaqD3WLS6vy94eYqF5TTRQvAF9RdRzozpyE99eNmAdwrVtmf5At1Ct4QgmzMibkDDfvun5Y",
  "key4": "PgVzK1PtZxQkhLzdRWnqSCfn5uqi5SYWibyevxsvTs52FAEGbQshFVFys4ctR8a2gLg1VnFZYDHnvZFwHpMtyVB",
  "key5": "4HVZKT4ZZmKhevH7hsHLy1hnpEAW6pXBdaKVqPAUvcYoU3za1AvGrztKUzddD1Ef1eQfewzY8aDSB2GCKCKdBYz6",
  "key6": "4yoXHg9jTbxrtwy3EZPLvamGdBdMmNpD45reRzRxFrmTZdcRKTMuvS44yF9HWozu8TVYSAmdW7Py9JC8US9PtzG1",
  "key7": "2Boy5uJ5trbdwd8g1HSLvDa95muyxtxiUtwyApwr3YxW8stNWeJZCDEALmwj7QebKGSjD9KEbZgATZyyUHA1xGD2",
  "key8": "4rTT7rj3aazmj5FxK7vN1uQ5PKee2CFFxhhxfYYSBHQnnQSFT8kS9jRbJPLbyGdhpqYXsJRd4AVPcrfqNPHU46ug",
  "key9": "2tw6HrxcgBmZyzgGmLL6qKw1rJ8YZrVmcLeDhqXL5bPc5TeZ1Kzm4j4UpLsmsiLxRjBmT6FkYickbsnSppKTPMKZ",
  "key10": "3CsH2M5odK6PWGodjF9tpwecJjSZ5YFhGnyDXT7sVhZdUQT5dGqKwnccRimkgcjeAeQM8JH8ug9R1AU8rFLDFWMQ",
  "key11": "3MGqA6sbdfa1cF9ERJKmRyBwUMv4Kq7rbHpVGSRy2RrtxhVTjMdXvkhKZXNG992gRNRq2zy9PX8QWYv2xAdNhV6V",
  "key12": "2KjFxZS4as7ihAaXiveu4YsWa6fhkzae41ZaXxhW9mJuniWDUDR9xTUwnUUuEEQ2597s8jihwgPeVQnSxLBZSTVN",
  "key13": "5QM5BwbGXBmyyeEqaqQyNfrQTYobMdpawpjmDUvuVcb3YMx3vmgHo2y4Q9YPrM4k6vBDFN48sxZEUyow9P4AtExi",
  "key14": "WPQ5wg4ayRk7J5wD1RsVs9cv7ackdUeY9tj9f2bUifbLojWMWn9tF6vpwPwKCde6KcPyLi7qNUSAFxUzh42eFFJ",
  "key15": "2pxhTyEXWpHFMHzqnSkZmJsjcdgRU2ak2ZXiyDFPuAALibgwUoWRzA7D3pZdqgupNY4UHEVaGANmcqjzRqKZuTki",
  "key16": "2Uy8Cc2tFdEoVaBFeJWwnqaeaxnXWz4o5uL2xy5myFBu6oYXKJmhY2BeqBaiCzYxsHHKRrYZvuQ1Ss9tVX8c1N4X",
  "key17": "uy8WG5PfnegodQNHc5Fpw1sdsLfVnRqCEw7KjHRWC5bdJmzYrEvuXATGgK8UnnNCS5tqvHbagmngGcNLJKdgt2W",
  "key18": "Shky33AAENtBE9JoKh4Bm8e3trnQEaLYcA1biRU4vmDt1FvPYgcwDmWTyEYWqTvcTmMQW4fzobXNT3r2Feox3qT",
  "key19": "4sGrnruELys5sja78inWp2WcGRUZbf6rFkwoiDURhzV7nWcfXMABLCsV4Kmnv7Mm5shce6orguABJNR2hoVCbzXL",
  "key20": "3sMK4SM6u6oTxEnhx8jMdFBFuqqGVWiMzyWSeLBAUJnBSLrixymeZhgUqcNKTeRQv2DiN7NLrKAx9oXCcvaSLBg",
  "key21": "2kNzzgS8sG5LcK9JTdZSnat2CogZ8zzrN7hFPYn6Z7HiBKBPRcDF8B8jQFsGrCV3op5pmzydrQLF4z7XnaLJW8cM",
  "key22": "zLvAB6z8vyeYmTd7YK6ev88GykkBEKyMh8HdcAkeHAuqVeaCdwAd6u3rQ8iJvFpPDKyqvkfCiSGm2vdbBi6jL1y",
  "key23": "4XafY286ZQ58iyM4KW7w3QQ7unbtAeqhk6tdhHEmH6TCBM75Kka4asQWLTkY9g2PSz1CEgGTFXrQQYi71usDThvq",
  "key24": "2r2kazZF35oapmSZMfReizTtSwapPCwZm9qoqE7CWSgAqpnZENBG6NHpDASVLhdDnYVjFMSS8hqLEsmioq5MYuPe"
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
