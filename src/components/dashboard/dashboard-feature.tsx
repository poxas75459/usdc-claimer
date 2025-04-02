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
    "StsAXBWw4weoHb4wYgrvxryuu3S8em9692TtAK3eLKMEo5r24nFreBuVpwtnr3TUWzgctfGP1r5TVTmHp6voUgQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34ZJ1LSYGEfSZUDNzv6R9V3NRYCr89KM4c4H7gQAt1pR8y8mS2d5G9QKn63rxyRHaupZu1w9nMghshQbGmgMoQQM",
  "key1": "2TM3FSKW63aJbgZR85RvS7oQyckN47EPdes1cUVWT4fTGHcRBqdzdvBnjECtZhHTCHd8KT2em7Aw8tvPu546Uyvi",
  "key2": "5UZrdtf27DdGe5hSsXkYgyeLFh85LomMCiyGhxxAdQqQQHHCA8d4Fwg8aZurUjrkG7yzVdcVQ7pVZEjYzJGZNaKT",
  "key3": "4E6Kxc2RhQumMKqsRKZywHweatGZY3xtvYUB3wvC2MqSTJ4to5G8YLNYaJVnJ1aCKMS3nFZabHbAUBzCpCGpSLdu",
  "key4": "5bwJviDBmdHRzwv9MZ2of6C3cim1R2gBJR2P3jZoeeiHHmFtYXo4yGpPnY6T1nknsm2hjP3SM75ddTaiRmXnvLiR",
  "key5": "2jB37xk5Q1CNUAPJkcjJ8bBkshjw86KtPJX8tSbVvDYVue8Vv8bs3eiE8aiSUoPzULGstrygSAcBf856iUcsPPcE",
  "key6": "3Ki2F2hogH52AkFLeraPFzQuR6667JmNwZq8MvzpURGKkbfhNVHdQQaXMKArFgCTH2SEirAvAD7dginBc9vHEDe5",
  "key7": "59cKsMHoYrB5Tna8A93YfdH57ZSMZSF6zHKR2fkcJFEqALciPjdDqLJrN26vPeWRsL2u1ejU7T5a4QUW1TjTyRb6",
  "key8": "4mM5B9Mbt82aqECVhbJFGq6gi3THKuSsMGQKYsW5RG5i8FxqZnEG5yLtxtvkM1JsUgMtXWmzzMD5THx3CE9oEJWy",
  "key9": "58Ekooh5sWz3mSAeaVaU4bqoEZYBpju6pBFXHZEc2wMryDiuq491o6tx2VWVB1TrnG8uAbjXidp9QLcrE5jHuBpQ",
  "key10": "5C4HhJwfc5gT7fjA5h3uqgrs4PDRjucBTvWE389o6jTQHRKGyTuTS4M2Xf6xMzofVRc9DYeSGd21dnytEPpcBbE5",
  "key11": "3naBbFKidRbknu5kAJWkLPMPKpbysrUPwNQmLsHd1NzHCRYuQYvvw7KGcaiNvDdyKvtz479QYmqWPRpcqZxMkkYk",
  "key12": "2jY1zdTFPHFEmpLkA2UNWtf8q8DrTwVhGCdRtWhjKy2MQoAo8wFXS32Jz6ZDBpmZkC8NaTa9SjhuxPyuEKWSxkaB",
  "key13": "qCrkbrhSBpR7YtmRAFjNX1fNho9yY9MRTVQ6pm9bWU7GKQ7gK7Pd63peMZQvBJenfJMrfJi11MyyoW16rDFiTgm",
  "key14": "3g21thzHfs4GpXpE8rb7zmsSNvPyFpGBUvNTSkmy1Hf7uYFZQF4ThXMLsNy2A74ZQonG3TQZnqaRL56HXLCLUoi8",
  "key15": "53nzqXRHBXmpsrBnFMavmimGrFpXKdieDfS1pTVjNgSphSKV6RVUbFAZoxurkCDq2mMf6AG8uBs934bWyUFt1Bwr",
  "key16": "61iNyNoqvqxhnYwinJgq6mLhVBz3W6oJL7Hynm4aoPWshjRRLJ9uExWKyfiwYKJhNwuQapq3vatNDnLCdFPGtt8v",
  "key17": "THxKYYDYkr7gRrnJyhH7E5VkUekawpoiHv4UW1tixp9dELA6Qh2PcPcaDSnGTgtBu77AehTs4s85TqVw6LMH8Kk",
  "key18": "3uBBNPpJtwH4uVEbvPdWFNaxUJAvDLfUdRNTDFQQm2eD4oZfEEdHkpbudieDHPSkkvXrJr8GZZy8cQvpWHdNKLNB",
  "key19": "5aP8nW81g6dTpewk1cS6NVRcehthGzLjHNwTTqWorRDCVRDddDuKt9161q7mFgoWRxmTqPojFQjTQKntJWV4c94K",
  "key20": "2EsGbL8HKtK6ggaE4vvE7YYNo2fomRz8mquvA3bJ9nVBKsPEc2rWcoTBiCFHNs7Hk1TXvnXQqjhrdLnkP9xSSxfk",
  "key21": "5SjLKh9A1rG1pykiH66HhNrtFQj4ats6kLe5nkeUYyBL6X5pdyDcbRec7hA9aGtXF5S2NGSoTWF4xXHp6ZGu8dNm",
  "key22": "33oeMEUjhnR3PUxd96cthuiT2kMLHVzWjBR3WbuJu7jM6Tj488USPEvv7XtbHQ7Nzi6dhNQReEa1YkJJrdwEo4dj",
  "key23": "5LxP2qBm5emtK57TV8d6bhriZuyZPcPx6JZ5Nr1xh9zYoiZVRtZrZyQLbM3VM5u618ajhMcANeXgaUESEfhnkFvc",
  "key24": "3yJ6doAmQ6oy6oooSPy6ptadqkHdswaBdhkpq2QZ2KJDE22qRMANKXzUEpiMxFfDLwBRCQzzNriUV3Kdz1fdFkUe",
  "key25": "4M4tKisCKMjkEvyWf9d5JFc9SzMSRgsYvV9endkndPvrBqyBoj2azzhYzLzen5heq1qz855yioESrWyr524Y5rEk",
  "key26": "2viKwsv19wf4xxAxUYVSJibpMP3NuGw838L7TaarqYJumuaWNovgzp3bAspCWp7C7A68LnGrUH1yZZuaDxjq7hzd",
  "key27": "5apMPdDDUwG76UZn3yFamBKAHQ7JCHdMU8gkinRVJNaLpwSp5PkJJYTLuG7y8cZCKBf5HtatyCyb9ZkDZq1JD6nq",
  "key28": "zXSd63tLNA25vWXYRJrjk7mczaGZQ49dwopcVZmZdCBciALPhgMAR58J7UyJLJgJfqX8HkvDTkN7qWJzbWYrWXw",
  "key29": "2qkfh7gFyZFQHmT3ggGaRon8buzCb26qNDk1Y54WXBnznPxRiSA7CHskrb6qBToFAqsi7zrvyMM1ZX9Qdgj76sLA",
  "key30": "4FN3Ls7nFRfki1eKMNevh3PQX3kmrnWf9ByZurz1RoKU5FKt2NeV7Hy6jCKAkovg4Pu7E6f9GRM3oavcsgZjomLF",
  "key31": "2QSHHtenGTZ97ZLAFeGaMnjWP51ywTr9oqxsipuU5mAH1zemUkg1omFCzUXW93dmVWvkJxPBoxCug5oWU3z8tF3N",
  "key32": "5gRwCb3ku1YCJLbRPcCQ1cMPutyz8XiJgaqBMfCMn8dwzG9TCirRTq6a97pqWYAvqFwNQnMfFZCaGPMjaH5KYMmX",
  "key33": "4YfrKUUp6pgRQfbhwH84xAHC8FRpN8Euj8aLRtQGuSN1fLhyzBUnt4y5XVCXa5Q1eBAHPNPtTFzHX51wfwmfbzzf",
  "key34": "2EM9vtmoBsEsGjcxRMRSXnXN2WTd2P1ibH6aRtDyTGTEaC6QP6tSBbjvaJgDf5QnZPVbzsTDnKvEmyZjgY9K9FJY",
  "key35": "2LVdV5ehv2TV3bNTfmtoGL2fisNoLruwW8TAfybKdesKbdi6ddVhWrCxuLmtmdMCNW8nKza4fQTGHACDcoCpaVsw",
  "key36": "4bsBh4bUSmrUujE84ijRNUJKFRKK7cmLsNP69s6rHZkX6eEWtk7bPt6b7wwp7KA9t4y6RMKMkeiQBbaKSsiYQgyE",
  "key37": "ZF1R3FEevgGJwsG9DFbz4BBrkdmgcM6uM5WPwdfpCbkmfeLF4SqY1Cboc7RMEFkSbaXnr8nGcNC8XZtVVB6uRjw",
  "key38": "y3PnxGshWcwSsD6sFAD5kXxkuzN6XZxHmvLEmxgbiZ4JuCQTxEU13bvYuvzUKdQProKiRBNQg7ZEHnkTZLRHZSp",
  "key39": "5mnuTSZxzeRssE1vAvuP276Qjzv8bkux1jLkaHuhJ1RFGwUQuhkkmRnzRm6H4Lkzmzhg3ovdrU2FgoeCspXJAtpz"
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
