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
    "47dvLwGk8cPBJp7rJyibZKJyp3iAFRLrrtLEfsszXKpsw6ChsJCHMSjsEZS1iRPgbNPsRRjk7M4uxkdgStdjfba4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41JEp1RNpMG2rYbMZLVtCgWX4W7pPTge5GByBNQchW4dNo7nSJSdU9sjZfyYFd3TqSsxHo9Jc1sAryXWLbR8BjaP",
  "key1": "NTMViJGEZpgAvAT91dEyRYKGLqZZ8tERJdZ6KcvykEtkZXbnfN5HALF3NHcu21kvwnDvPy2QiL5PtJ5DkiNrPP9",
  "key2": "3XXHcPUZF5YAbsWkKQARBoBS5arMoWpvTj2Xhf3wyqUPDJ2Vhh6RikPQGw1Jp6x6GWageU7AbStQFc4Y1rr4xeeA",
  "key3": "3WJu3sTVN2Gj5B6LzFiraemDhj1277Zc1Zwd4VwwB7FfVR71Pg4jqW3CLSGyx4hK16BzeKxQYdxZFJ4kubmEmzp5",
  "key4": "2UT9tk3TxdRxMtoAy8QcEuTVw6tSQJRKDxxZ7HtYG25JBrpdLuWX6aBkqxfjFJVV7ET2sU3oh9Vh5bUpP7b2QWrR",
  "key5": "2jPR3G3q8gL3vMoRSF8iHPDmhBmr7A9HdLUSaUKcohTpxddiHHSTo5v91EShG5aGEBUf6hW62Rw6MrafzRfygKh2",
  "key6": "4Jbuc1z5vw3XXyMPCUL8hYfdCLenWuHma2MxF5P9k7Y8E2THzBe4omsteYaFWABL9tx9Hk1Y2RncgqrMkHeSb9dd",
  "key7": "2FjwYgP1Nn1Yh2EcvRgqaa2e1umnPQpnX5FcXPFz75U5mpSDiZmrYJNmsrMf8bsdYQmU6eZaR1GFrGbEZjssufZV",
  "key8": "5qX25BZnYaqJPQyRi3MmmVkz6t9PafbaJKZb5Xe51tut6zRnaygyFrFApGkiGFDyoihkboovA3VsJ6ZJgd6itxbP",
  "key9": "ct6dSLRMVvsv6D12531Hh7k5mCMtzTDSr6LVWezE6JKDxkLV22Y9MmTAoHrhC6mny8nV2g7b4Z8BUYxMW7NxRdP",
  "key10": "2jJhxRYBwAEYsLiMScawF6nG6d9oYne2r47HQ3xucfN9WUmMNWM3cm2TmcCoVHEQM3SMXtWM4rFeqF1J2dcisS8J",
  "key11": "axqfSpqAc46ben4DqUb1H7NTEgDya4nVQLLKFS4YEWaiGaAqV1DxXYyB5dgo7oe3jVcxA7QiTJNHZdZkfVH3bmv",
  "key12": "2b7MzYa5T5gpam5X68NNLxJrWo84HxSDmcFXc1nsv3DTD59NTiQp7ftnMRDHzX1udFAoSKDpmq2XzD9vZF6yqfbF",
  "key13": "4aNwVpsjrod2N4DqCCLJaz5veBuBbKWY7rY7SM2zACnhAXN9CtGxrKwtQkkLCq3kxUhgnoNANe4EZidcHcBepAtY",
  "key14": "3iVZMKbxPTJn3sRxigoc4WsavkXmACV7DFCDzTkENLiJHFiGAMhW99w3VPfVPEm2E1UtCmRP14GVKuXoHH7yN7EU",
  "key15": "w4SxBdCkZcp4ECVYgz2zqkJFPKXMzimQW1YJu1WTuwpGfZKgydTQ4rV1Y8u1Z8AwrEK2Vq9x5KutqNLSHGQaeDF",
  "key16": "5BStksU6HyiCVxEBGB3mtgQjcpDGQ99nVwMowGUgPSY2rmi3bDjutqvWmbfSP6L2keStaU4phuZmLzrrE8DonmcG",
  "key17": "cB1PA5g8VPQ96t9d9jJdoQ6E1uud2LJUgEJqckyhtTd9gz55NSLxTwsjyyTi6jLDj9H7hX2prWJAQrcJCnMe5xx",
  "key18": "59zesMzScucTkYNK4ByQFeHauxGQnikYYh4iGyAAch1DJNYNV7iy65PFQj98K3ijSWvLrQDbRJsvMLCnwa6vyhvG",
  "key19": "4MkFi735iun7wvCF8X16vNZBgD5mcdaPnKCHHK63vwPJxsYsrYJPv6FC8CRtXyR3F87irm3W9oh3JzbmzxdYFSNS",
  "key20": "37nSf1B369FwgVN6DWg9itupNvfq8u1BRWTLdxaKQpQZfWk2gewRgEydFqd7oZ6ycedLZG1yY6yqS296Z44uJh2L",
  "key21": "PRXBKwVZ95JCZ6F7TUkP2L3n6C2LG5wnbko3VxGYKqijofSNnSpn7dtGuAuDTCrDXTCcSi3v5ZkyDgTzVvWL6C8",
  "key22": "37WNG4LMBSWoGFbzzPnU3U1cmoReG55RpoxmWJPXyjjPwUtmTrKJgmr8VkPyYvjBeibYJgfESAwB6Pcu1rehWaYC",
  "key23": "651ii5r7KxdWVdTUDS1E3vQ7fYagJkd6KLHm7kZ4JBdpkaaf1NR1WY4CmDWzaA3Qj1YfjftjMxiF4ae3TEUWZLtc",
  "key24": "61yXc5f2hyXBMZiVFfRV4P2MRfX2A8Ka7X5AtzbKuxS24eAD5ibG2seELyy1sVFj2aXBuaRReye3hzT8dLq5HKJ6",
  "key25": "5WsDX7RSm6iKSXqDbDxRXzsz2dsJMqqEzPJ3guKguUZC1zwpZJVsKwnLeC3mLCSDVyUmkzNEBZ5MohSaZXS1iTxP",
  "key26": "5CX8Gjx2B5bC8HLBAk3uC2g7Lb2P2oyFRTjJ6cWKPXunnjk8Fb8PvXetEeN2ULXTJH8g5o2Jkk3jhuKQ5iEy8gj3",
  "key27": "4PYsjXNggEKdME8zWHeaWWeuNSsaBwULn8Wc311rn2NEBjNc7EJmegY6xUJZkJjyd9dLedanoFJJCQwHFi4r6jrk",
  "key28": "2Wdc92GscCjDo5Ah1ks2zZADBWxr3tgyybMp75DAGUdyxrpFXTAGm9ZFyMytiwz7355nWzySjr8shjvT3TdDSnfq",
  "key29": "3qVMRhCtwJRdBLgHB6va9Z8YZoxin6nK7nXFxAP9p37hZXtkK8RmUUyLS8Th5ZTzvDmTs2pWbMnUFJbLMKvT5NeK",
  "key30": "2S6ZDczsryeUBPsQtsEE15hwrtYdnW5ehEZRqqT7py9wEFsunwxkSDageNg8vrySKgKLDLTndhmvE9JNENMYDMPj"
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
