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
    "5SeFZGi1JPLJmVpGSizwRH6QrmAREENJcLpVfpE6zytQUxXm2cFGp9hM4nYAHuBUT2LQBpGZy7Uijcbebf4hCnzV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sCbkrYsdhR6p6strMxkR74EzLJkW7ehhNbBZXwsw9uA6dqm4etNfJ1NqKeGgLA12NCsi8HHYQg7a6Z8T1rhXimD",
  "key1": "5Xo9noKyfHwJcuQeuk7qRa53KLWrEjKMi8Fz2LGqRKYxUHEcwcUZBbvPTEqH6eFA6Rys6GQXDvq2K9okGAXa3kq",
  "key2": "NpTh27g1svu3RqASYVGw3AK9FA9aW1ne7pfSfUyHUNGP5wLKhnuWqjZtQXzYmvS8LMCdL2HhmxWvg4VWyW3YS6d",
  "key3": "66KViWE88ydXPy9DdEXsB52c9FGcpj8QbWtV2Wdmj55DnqTQ9Af81YNFxDsnr1BppYy5x3HgdGF4nVa2voXVsbX8",
  "key4": "jkU5ntpKN63B8XFWUMtSMjL9Yc5M8gRzRWoJ1xrWfkjYPiRgT481znzU6UuMK3KZRuuj6d3n2LQEoJKUmo1VHbN",
  "key5": "NwFyp38cYoHiVfhHoGGPthYrr4JwECsywkZ1SWDRDrnj88TpkX7NtPwPf7hifqd3xhQU5GAEf5JQf3Nr9WBQRWD",
  "key6": "5vHLLV3HMJTxBpc9o5H9jsHTpX6kRL9VmHdYsGo1ZP4A3HtAJrJqeu9wNEdfrU3BeSz6PnQnNffZhSDYbjMJhXQ7",
  "key7": "4geH1tFeeMpSjf3XoFFqNJyJVfgiMYNHb9Kfwmtf4H1QngZeX65VFgUwN3k476N5H8BQpJ5QVYfjAakibmnV5gTr",
  "key8": "3wnB8zy57D9Sgt68Q5hczLsemyH9wn7VpfGFcUqUT9rAnUnh813pexpRuFnYhbgWgFEPy224WU5hFpZd6qamfiFP",
  "key9": "5s4Qk8cGMxMtBcc5Xuhi5jN72q3sZp3p9UH3tUjAXeCdHhrkex8bZPePYYJYqzx3PbgugHC8sepGX3qZmZbMAuWQ",
  "key10": "4gVVLyUcA6Tyutppu21vCXkChsnCNDFbrv8RAT1cXFeoQ5as6knRtSc9y8txPDQEvn3CoAu34hE8oFTWv3NLotPn",
  "key11": "3ivpVa68Gem2DTiogjtCDuWoRHaFJ1nL9iyb4juy2F4HFu3dvMGw8eaDvEMDnpUfquGtHM2Y97XDs4yyFHq8KJj9",
  "key12": "3JM7DTjakxW42h3M1eKKySNwZ1PEvxkGyp6LU2GyYHkiGzjpNoTfZvsGUhwgiVeiD9h52AGURAEH7dYXLmwziLZr",
  "key13": "3MxR1a63Ud6VuofkW4ZBDpyoL44DH2GHuw6Z63U8SSdQ61WaEgG2c6E3LBpZrs9wkZzpSBHtGdWkFopuSSn2Tvju",
  "key14": "2dJqJaGNm1DBTM4LAMpssMSbCXTu4UWHLK4FaRRQn9U3yRhvhapDffD4naAZDpvtbwxkAhMf8zmzMp4Po1gMXt77",
  "key15": "4uYAeEwMM7SpU1ToXiWSWrvvSN3henSgieHRHyivLpya85TTyki8G8vDkD9N8t4R4z2gWtkkyvLW7FdkwULVp573",
  "key16": "4h2k4ogjZYvqsfY3vj2NoQ8SRivcmJWEAifkn9gDYCCmPSWzGnXdTz24ZKXkA2J1EQVEBVffnA45v5cgy4QUv5yZ",
  "key17": "WKjV5p7VXkq32TjdoySFPGHruE1eAS2Gfb9bKSHz4pUcK7X5GhKYTLjb6znio288AfsnJ8Hj9DSNSm1dNaFy5hT",
  "key18": "2H8FFY85J1BhMHvpLiEs8TC1WC9w5PjYkdNJLDaFCZKTJKYQSKmKmuQPmiWt59RbGtMXc5SbXbArc9PDEVrrAFKv",
  "key19": "4rWFhvkPXb9Em6jcAmBEd5N6tS8ffwqSBHDD19kYYq7YC32nxXV6KBMVjAUPrbxBGar8UAyuMX7hD8Ef3BCLHiZT",
  "key20": "2CwqXTeu1o3zHC5ryVRbxc5PPgvvw84SgbfhHKbW3ph1gZAHi5vyXEf6YPVrwEbmSFd7GCmU13hbdetnyZ2F5mxm",
  "key21": "3xV6rTZQat1kuoHAWSEeDdgbwHg8bXLRHa7NqQyxKkc9mEKAmfXiFc1qoJk89cPQScuYsDhhRpHkoMi8ZXV9yJ1",
  "key22": "39bR4DpkmjcMZserDRufYxrLu6cLkd71RdruXKfeYWe76YZWnSz8upVJ6NeSSycDbcJA99piX7Wb77BvRVxZVj8F",
  "key23": "FuRj981z3QFbMb1ivV5JoqS7tJdaukH7cCtUGLcnfmDMRvK6B8hi74CBwjp8mFKqsEDEvvWbpDYw6qhjp1XwtD8",
  "key24": "3tvwhp2mr8AkjVe3ENhzZZwe6MaXfd15Y4n33x9qb79SdKQwdSovXgQa3a68T9Cp8nLMd58ivqwKoDjUAQimjHKB",
  "key25": "27czrjTbTxuRdsNaY2TMsqve6vNbrWvMC4VW5f9mb8ZZtKavaVn33B2aBJHo3fygfVJigVvRrDqox226uRRxLp4M",
  "key26": "5JwVU1wPyHaJ6eVuZYDeD51HzVs7Aw6cvqedJRZWu8iw2AegSZW31cqNX8ArD3K37Wj8mXk9APYJE53sVYv2bQnt"
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
