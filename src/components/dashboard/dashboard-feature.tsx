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
    "5rUxT1nRpPTSv2Uy99QaKLXYdHhWJaSb4Bazk6SqvH8rdFyRpxv5y3B6VTXVcrYM9QCM3F69cuHiyG1RYKmQshCw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eBZT5CossqRjxwrdXqLJY7FLqXPwsbrQQRX2p7VCpaZQPGiB7X5Z9GSe3L2XUMG4oQvz6KHJkKSeZ3mNtgCSZ4m",
  "key1": "5GFNB5cj6faPXqLRKPjjHXX1TofKBJJuYR8qyMPHoom2bowQha19JLtnoT78zRMDGSPKkPrTgMnPCZmmzkGmgA8U",
  "key2": "2avnnH14vjzqQdYkjvpJKdRUcngoJ5B7UN7ZSSEwqG42Cmq41Z441nX5jY4pacTA6dUJ6xoVWJvjM9Cu1KDPhUKC",
  "key3": "2wWnADNARzbptVMwUQjYAVB6nGMZroq7NRsvVqd61M8hGZrh3rh9sqVJF9ubWZGaoe5gycYfPvDSEs2BBasBTwLS",
  "key4": "TeNu5zkSY4tFtnvdruZxALmhuUZmD358rBcuFGgsa6L44RKsunvThsLtZt4QG6a4S66LbXR4e9naD259Fw9qo38",
  "key5": "3MciLSoFLvfTbSCpJu2pWHQDSgo834kWLAeaNhgNssNyWMvF2ecxogwSD7nJAxrPKSykKnoYkte26Wx53WKFbKCa",
  "key6": "3Hc1MwyV4icMjL1MeBEamQvw5YMRZxVmBW3j4T5oET4qqA1XfYSE2DEk67TrxZm36ZUuJPtZYa42Et7bV7Dt3fXb",
  "key7": "EHdB6Y6dLrxhq4CQsYtpT9idmLYnMGDgKBdGdVZXgVPXSCv72fX9nV8KTFCHx2yvDRueWmY3CoKgNoeiHDUwgcU",
  "key8": "48htQPKcy4RgS8aA1ct7FX633bVufZvRKU8P1vYSXHobwYbNYoKKQxShkjzvm9kYfkAMKsBxxmKAZQUngxLJ8kX1",
  "key9": "5mRvKxXK2qDcAsipFWfeTrspdpn36nRZVr6Jg38rLysHjBeh7vTdXmR8rqNxbwBeAKAredofoUb2QDsVCguKfVZK",
  "key10": "2h1t1qGmJYThvapcCJzy31iydEQqzLpV531Lr15Je62MdoczfConUYk8MC1oGhu1c2DjTBER64ZKFXx7of5RwfXF",
  "key11": "5tLW7NFAPF5eLCkMiypqbrxAskboRi13rTyJ8D2wRNYwnjaQLBNWJntbq1rFmq9aV2bJsBFpkFAs2LkUm8Gc7jxQ",
  "key12": "2uBtcoT8mAmnssYDCqNG8WRFymo7H9nx52vv8j2FzAJszbJEqHvAKZzSDcSvbguVCi2PqeG65WMdMVKHVGLjG9NU",
  "key13": "2QsGvoQJ569iqKZg1SXrCLg44eu1YKp3pYeCCm9SEQv9YY9npFofCh9XMwzLkyZVbXHweuDafitwVVy6qb4pjhDK",
  "key14": "41k2zvyp6YZ17cd5UrBRVWuQa6MGJEVU6QMAsAUxSDVm9b25qE48npyFc7RZUfaZ4aHkWEFypbxL2KxhQdR1GGiM",
  "key15": "eRYeqc1JDCvBhRWcRUu4k89msKEhCZTvLpePaFGXY6MjAhoESindVdFtDN3a442qWxqopHAKR8j3HcnJZ6vyXyy",
  "key16": "3tQcDxdA9mCv7RRnwNMDq1VJDjjB7KhAvRaq2BD6agL6rVKgjxVNQwwoeEMWP47A9nqLzx8MTENTuGdCgnDn5bnN",
  "key17": "4nzXK98n1pJjUUjoPJEisdgRQ6xTxyT1PycVaVrDDfJZP5uEAuhkeE8zkRPAskzjNNXZBf6MGCXKpkfL4aQdjH9N",
  "key18": "5EjPvCNkJFF64TtLj2WwumsJ2nzV1GZUJ78EwYngBmrkagfseuJrxfCxENawYRLG4w7T4HtRtQGQBLkUjR4pfjPc",
  "key19": "4yitah8hATrdBvXQvY4zHzJfoAmfSXGTk1MvDYNrkSHuTmM6G2p6XHmtvVMJdwABr2JCGNfBWbsnXqybqrczch9A",
  "key20": "2mZkW8ehChUunridxow7zrVbxzD3nhxqSkiiL5USYn5WKpAjTEceYY5F1pbrpCzMFcQqGhWQ31axPLWupXhreubj",
  "key21": "2F5wbJromE1x3tNE4WjivmDzpLvYUbLz3TcCuc3nJa8dFcfyNfjaiQfnh2mnDmM3Z78fmvjdEfBUm3ous9dwtzUE",
  "key22": "4ecSJNVNj9pLF4btZ4DRFUdMjmPevjM5YPgmNPs6SWVWM5TJXuZTX1FhtPWwo2E1eLSNUGxSCh5dBDtbUUFYaC4v",
  "key23": "34N1xek9RHgLFjLX6stBgUDmCtiqWbczXJoy9wNSkGwJm9J31kP4E4DEoYkdmAYw7s9tD6uXATCM2GUrYf5v5aSs",
  "key24": "2CH4w52H72Jah8U6iKq6Yz1TFb8cZJnaDNPZgcNUuWWwayhyZ8nELQAxywLbyQzjFXfpHWmBuBGv4y6db6kbRUvj",
  "key25": "4BDCGEHpWG7SMJDe6nMMNUHnj5XL2PMKL7GmmU3j74T5sYED6s4x2DSuqfHTStRRxp73bsvdcgUJPUJhKgbGv6ho",
  "key26": "63KQEULFSJGgrEudGnZhUAPs96w8XGzqfNDMQ48x5fB2RPjPGTv3LTzuP1BNZtPVgSMx36WafBdbjX2Q9ZpRUzVT",
  "key27": "591aos2RiBENfHwWHwsg9dCGd276SiLxNor2rKZ5MjFFvBWXrtbQ2REQPadhiDCFa83erXbfvvY7eq3rT3Lctu3w",
  "key28": "87XXCmPMPPhcc8vCCNykqjrDDUDb2AohdnH8Cofv8qAwrvb9RKDDkKDqhhc3r5eomcfLbPZ1dhE5aaphMJEW5vT",
  "key29": "5XMmHCiWiUGtfLyPUSq8kTM3PFYpmckZRBEM51DoydGpuUmjtyTtxQSWLgw7akHbrEm4B4u7D3wmoPYeC3DRjVLr",
  "key30": "KTkXZfDxdSzf42o44vCiKJun7G38xFR5ewdsMBA7YYG5rzVJASKhv8qSkEJgFsjT2JtQNaY659AngFJdpxe6s8B",
  "key31": "2L2CfrSz9aA1T8cydVTC1pXh2fLBWcMqdUeJeFm5nrnGFVnRJrDRHPRjkCp8TS3FFCBx7UVbNCkrBACVHBtfjUgs"
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
