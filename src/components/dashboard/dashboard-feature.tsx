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
    "5RSUnhB9sA5inFSi8kc7SXRpaTR1Cr6ozPnNiGviUJgrzXLeWoJ8hq8qUbnWy2NgUjjk6iS3axG6gkdp7m586QvG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kWE1yGs9kDYcceXCqnnUXj1c2xaX3NAeuorXEnXHncnGonMzfJ6LhxgwYy63wTGhH7Ca8zxcE4YWskPhWpgbb3G",
  "key1": "5EVbqNrGG4HZf39dxf23ramFWVQBnmsB5Z6o9c1YZSYuFjEPXhYoMHMmMy2MQTdSF8hejPCpPq3HoSPp1ekbi8em",
  "key2": "3AtzM9qCKFmKo6qvxpMK2yHEQTaoteeBEDqsKDjura85AjJ11d2AvvWTyWHx9PjaLhqDUktbnmSHG6XfRn19StFR",
  "key3": "3ZEXzjf3nZdMHnVJucRtC2Zf2bQVfKb41MaUS1bugJwpvZNNxJxR1XPyghne2Au33yumGYYVoHALSfhfCd6ySV1L",
  "key4": "5uExXAMc7iaW4XrqEadAVxFQfctNFLY2tZQLQvwDJGNLsRQ31Mu5iPfCeEZitCSkk8gChMFnmJE73R5hZGdVucHq",
  "key5": "3eLsRq21EN5YrCK99XwPFd3i8zLPwVZAppSqhSUUR8zd9kwxDVKXSYkYWrjRgTwGApTkFuWxtcPexpDkHUmb9Lws",
  "key6": "411zwB9RAuo9G557GSkEwLF2xDurxX6qYyj4sfwGrMzcUk12ChaL78pqPt7jsyQPqYQL7WzttLcZtHZYJBrgPJ3V",
  "key7": "58hSqJP8jzy3nUdy4eZ7V34a7S5c9FNG9Tn1xXmcDveF2gnmQbPdFhAvmTXxV8jQbwFtZHHnKPradpRFzZ1K1dZt",
  "key8": "3BAh1B2tgksLdRE6Gznaw3huydJvUpXzWya4j3VJNgXvmznmZJ9S8SUrCj6JuUMo1Pk4RafuQ7Z4dnufwhMrRXeW",
  "key9": "3ZBnFyndBb8Mny7WTGcWzsQf7nhrGwryfFsdqfc53yaGcwctfKWWAn935V6MkP7C5jKsUy7SHXM5iKgu3RyrkG3w",
  "key10": "4dJ7fPFCnZQrPWNVWDSsNxALZhSbT7eNF46gwx9TMczkGKUo5aZtAk5yn6V6nscxWs9uPB7fD1yHD9i4qGqfbFPn",
  "key11": "cVXxsx7nEnssTwgvCn4pGfzwWuCEewCJ4y8oLdE78e2LFnbwe2bGWDCEAEW9wM2pNeXASQrNedxTxH3xophBkSm",
  "key12": "4edmbiaifF8XQt9XcruUs5grmEwG6C1XsCnPBGwDsAPh6MLBtS1ZWAYY341TAnVQ6a7My43SW4EcdaWktUToLt4h",
  "key13": "5XpBfsa2Yf3CoxDRnuktddkicva2rphwLim1HDarsHvYLLWiCSQVgbW9vpHEcEPo6HTujSoQWupV6WVQAb8SWrVY",
  "key14": "9WrrkYg4b3woReifVzHSKCjSGvEzdRubnkXmqWATVkKX3K59LtRNE2oWozaXAkKRUYQ57iAHE1TxNsxkMQ9bbs1",
  "key15": "P7JpZSmCvESZC6bZ4SfzfzmPm7op3sjsRkda8cnhSHsiZtc6FuiAY6DJ6kiL2s6eb11R56st2Uaq8s4HubBSXzq",
  "key16": "4fLjZioJMXr9C8jCd4V12SsE8myKdsnFRVAERqSYeP3XAguhcrC4frEXnuq4a4vDXq5qKhbqRoC2NaBukHVEETvx",
  "key17": "we2vXsbu9NDfTFixMLahwFJqVRykWmDFKyU6CRcjriWjugZT9xDDqekXEJmW5iyqLYvXKuGN4tgGF7EzFceNCoy",
  "key18": "36m6odAetUFaNhRnqwJDNZXAZ6XR4BCpeDiii6hwy6qQTvAVu2bW19ksaiFRUWsfHferiPwa9guDzVmRYtEfNThS",
  "key19": "4fXR1qSJNpFgCYKLJpJc1cFeSg8UamxKVNhdqrP4wSySr9TUySMhKTdvTZNr628aHmuV7jiANSDiXFfKW2xjkJ1X",
  "key20": "3tvoUxuyxj7jXArwiWC6hEhSFu6NDMGjJdTwxPXkMjxeDkMZ3pR6TT4K6mnnAR6kND7AGLbNLah77ArwTiY1KJVk",
  "key21": "5NXXLdJzNZameeEbizq9v7EqFruKhf64z9UZk7aEUPihnZCuUTWWJ11MENPSWxm4npc3H4xNU4sTQ9xEq6cxgT9z",
  "key22": "3hgKvRRUt3ViCJnRMPe6KwC4iHkAfGoBmyghkv7xpFpbxy9JbFE45p644xkT5ST3GwmfbdSjSFdGQc5m91ChXDJn",
  "key23": "2tJzQYAh7ygRNd578L1g8iYWjKKc5gTuKFjB7oGRDwHSzRWRhKkhjTWNrc1c4A8vPRPx6NeRzFyDBFNDrStmzLxf",
  "key24": "2aUZWknVK3g6if7oqDuYSkyvWy2tiKnCCQD9BNvVgbKwqrxiKdvkpYW2WTaZ458oRRmxepBan24nv9xtQMqkkNvH",
  "key25": "5oMetNr7BEQa8QYYdBGoqZnCn9FQKpN8NyigDX6QFqXiCPP7vLxMPvrU7KpNGDDZStAcRLxLwftBZf14TrgYZtCe",
  "key26": "94KJ9vHRTdbDUKcKi91shE9yHjmiqQ87Z5YtgrijXThfqEkfVx3c1icN6EaNvRZymVGGmxX2VTXFwWanGhbvuBM",
  "key27": "5yLbhJeaPEMxrz96ycWyyHoRHWgLFcCdogbxAwmMXrDZY6sixiAf2iZpG9jw72rNiUfw8PcXfJg6EzY3kjfhwYsz"
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
