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
    "4M5YgU9NY5D4eKA4iaJbYMHjTPNSwbrLAsc8eHHrr77Y2znZyGjR8uNhLp6TnTPQw8zgR8gDkRC21eFZnAUibXWL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sFLy5SjiFnpK2WsHNQEZ3rs6GoRwvvGvYqimbSb5ipBA4AvKXnqDHRQ8HaEuq6w7PxYbKaqevLbtfjVMwqtzPWQ",
  "key1": "4tLiZVg763P6Pwu5avSfnbq4ixqKS1cMKxZo9ArBARyLKRaew3PAPdwNnKj3DroQnDR9j76Kcj2c1zFGQf1RfsYh",
  "key2": "4ZvznKtsTbVWRk42nKjMk6TdwCsw6gkPFsiLjPXJKgra4qKbHVHzgTTu3E7dde6joiELuZzaD4GuLkEsYMec3tLP",
  "key3": "QGov8fR22cqN1EUXsTz4zz6c8DAJaKkoYtFPhJsTyAtt1k4p3pJwveZUWrK2s2aWHC79BtHKwBAEZ1apFLNDoGh",
  "key4": "38cRqFsMC9Grz9ZpNUPL3dozuoPuHvTTruDLg2a1yTB1VRGGkRdkra2Nkd2uuBjwtHbAAKewkg1uBCKZUvatMVSW",
  "key5": "5iyHA65f4cq5UoHJZEDeW4t6t6JYLoyymMwuTk7pm8vFMers9eQsi8BFkrtcmDAA8H8Wud5xpSfmjvRD3oExyozg",
  "key6": "RjXqwWbQyzv6KxSrqpf5tvfRUm8vHXc7NycrxYvF6pcfxm2mXKdYCnAzdWX81w7hdXFR1hDr8t6ZKmENcqZNoQp",
  "key7": "4gUd6yxvMU5WtqpQxwwtAjNeujWJGngSCeL1iDRCXHwZE98vW2fjWC2R7Y4iLELFGQ6F2oME8jdodmoEEneHVePa",
  "key8": "5RAmn7aQ3yF2X6qQPHq9i7KVo1oXvmShX6ewbo2tkoBGg2yvBVyWa3vpzsxPyRn8xxwvesXzgUMdNvfWveLCbTA7",
  "key9": "2fBicw95kYFBshoGenpXGZcHX8mYTZ5nkVHdtbYJ5KTfUSzoHtWvagcs1Ba1M4AVPQ4knQ3RR1qFuqU6ofbwsxx8",
  "key10": "4ezk4tW4F3iueqVp6qJZ7tmdnDWWyZsT67afx3wF8HmjMR7jPyZ3mrS5hz66HX4sp2sToQ15nRuQMKuoMQgozuo8",
  "key11": "4gEprdW4KWoy6d3nkhWb7FwS4bbuVNBq49VVmvxj3VNoWDBXCBWCs2XNz6mhjApNb3L89vyuZooa7YKZaeuX8kFD",
  "key12": "3mMfi6tvwyGQGaz2ZKKJBvVCmXUx9rqLzAbPGgYxhUE8hkgNy8Y9ZN13JQkDTpTvHXEyDhJkQgheurLQqjxh8oBj",
  "key13": "3EpZFtQDGCS9oqcnd49pEHupqvfvJxyxWwoqTDpxFZFASmrJfQzgnZDBivnvjhfHSdPqr4j2He5o8gYjSL7BbHbi",
  "key14": "2jPTiiRkRW3qQUY6TfWJZyrR51sWKrEsvzZ5he3EggVJdG8Tu54XoqNAJiW9VRxCFG7Zuhcqw42siimB7nxu6CVQ",
  "key15": "5Y5FXR5cxKavXKnw8rUyXcvJT9ZCmojNxCj6rHdzxwDvBtwRd2mfwK4nH5v6zYkDKfSpJPHkBqYTDMwbegRYEV25",
  "key16": "2wst7jmCmMrcWgpi8MfAoLPhCdiDcLaBbzCT4iYY7st7gKocMxnLeUyZDDLFg1LYevaY8eKWyNwNNETRjwLEuCfN",
  "key17": "63wSoxZT89o4wUPmP8kxw1AmAfLda7USSWRb3AaHenDfcRXcr6LbLJSsgobmnxQucSXVYLvTUCSMha4pEuh6EvML",
  "key18": "3dB2khxDA4bXPGzCJpasJ5SSuLENqjmVhBMrWa45e9mgGofaoUaUM2itWPhZii86GdjzjDHqVqfwrUBXLGCJBVap",
  "key19": "4cPEcKuNM5m2V7nMYC94rsb2fMf3yHYYobZ1HQFuc6MB2FUexwk4pcQyGNxBMdXPC5GdRY1aiBNV2kqkqYR3thvQ",
  "key20": "2SeGXSKhbRYJeBE6GLdAvvDDS27zFPaBunUqzXh3gJRNzMjR6A1rZNegfHVTvye72hDZjkvrqnd56vPZrZ5Yw2qw",
  "key21": "26EoQqDHYNhpNCx7cp81ruxjTuGTRtUkps8zq3nhAqsjVYKwzq6rhVtMEeheP2UyZgahrFeb47CdP2e27RgsQmYV",
  "key22": "28wJVMBBSEdsbGZM2f4fd8KRrXMuZJvhZ6wKdgCsa1cQdEbWwtQqxAN4DckK9sRDwKuJ6wMzALFMRcVNY4hyv54R",
  "key23": "4ymG1KkdEKgE12wYxRZhqLc3oYTvs9f73GuQwBSpsham7SFCiKQTcXa55vqm72YkjNuRCLPpfbYZizansuynuvNc",
  "key24": "5PsVHMBc6pdAmx2e2kdLxL5oDEZwaeLEHdcGwfY4vdhpVnpdMToc42ZE2nSpqKMjMjATrKNiELeA1k9g5CYUH9QK",
  "key25": "5GRteFuQvzaheoFJRKH41dn8LscryJ8Za291dLM1BrbJAN6hcu6Z4E28VJ9mLy2FxdAztmdqPrZbwbTLBQFdJU77",
  "key26": "671RS78kNP3yttraLPPDFM8rsGAJ7EAJEBzSS8DonnYMuw4ez17iuZ8EhtGb8xpBtCUMFhNQZ8pxaqveZ7QDNdWz",
  "key27": "49s1iYCah8gYvQWwftVFMXTwe6hCpY5LHYykbKrGsPZddvVcwmKdA5GS9f6yVHFVdZmhxLovHSnbZTLgak6ukChs",
  "key28": "5rPQcSQeYys9Ex9Pv3xjw7HcMawUgh98FxvJxqCqw22Mf2WrYB6QL7PrDWJpUW1XsEjtYTds5yYV79UuNzPH1yVA",
  "key29": "47BTshiZU9VdpnnmoL6higroiPkQCuR1G8wj3Ti7BmdGorrirQAxFK58zuYTLT41vBR1bavBNdrHzp8kMFHv6zAA",
  "key30": "5GUEwonJ2iPqCqYHzEPdveBQZoK9EoLpN5eUWq9qo6VT7exTDb6321zTq9gEddmyZN36GbVyu6j8j1Nqmn9RYu9m",
  "key31": "2hnVyBPe7i1BcPkEH3msvGL7bsR56tVdxGz1PdCuF8SnY1xhtHijGJngtGoRYJ7EKTFtKHXWmosrvhnghYtLmEd4",
  "key32": "4HMbQ4AAjNby5UzGxuCpft55ezZddMUYS5XEyuCmkhRG4GtdVowXnsgeJ5xbbtW5XXmL992JFZwd5paXBgg3WLRx"
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
