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
    "4nrop3xiGMqdoM49krYB5JiZugb36wdX9PuW7tHtSYH7YfcXWXaMfb5QJqWryWnPLnVnhpU7yarStxujXRQDAWNL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1EAfLSJEWiQpMyfy1xQpFekEqsJQyAst2g5CccSeNnBXDzZ73BcRTqFvfDXyCGsNx6eKKQWUgLWoQogbvMcPqgG",
  "key1": "RpwwxgTxK9HqDdnVpgJdMyVG2uKivKg9k1gDA3E76JA8iRpm7e8QqjLtvpRBpTYVgFB4Js9KE7JtSZ6GKvi8yy7",
  "key2": "2twax85gpXBwKvMmJu89gDQY1YbiCLUuGtdkEndm7Gk2Jpfhpy7Y4zvosCzVWJHFWaATRBYmEb8W2qHo4mcTJwa9",
  "key3": "59PuuKFRP8cykfTwepd4CXmHS6M8kCiNHp25yXq8QPu7m1pKd7DUUiFcDHzW7a6d8vCaGYQcuT9jmSkgWV1VvRQ2",
  "key4": "2dXz3uU8eGtHsRwqgdJYaC9phD2xinY9SEefDCXvwVp4dJBebckrgsZkz6Q1ge5MrbFzpV9sWNvk9yM3pQW5jbWm",
  "key5": "5YNETAmfhvasnWs8MioNLCeeMR6jNKw3NaeU57MQu3oHhz8MQUkjYPhhxxN1Da4weXSABZme3uUjjPFajNryJvQf",
  "key6": "3sEyyq7MHNZkmS1VL6viuR1bNqCwznUjTy3zWL4bCosrQFkaF4SQY2K5Uz4MDKVmXgsxAzSmjGwSAjS5td9YVkuE",
  "key7": "DnBASKzFu4WyVj8Wkjv2Ri7mkqM9HATqvziBWZxVyYFZvzNgEiiP75Lg13ZxTKpurHKEZ4BULxQ3etqZh3Smqux",
  "key8": "2rPwBRyHBuuVyBLvAZQr66NdDghuwDg2qi9jw6iC8tFZfECd6sGUnaok1NWR3q88B8mkMTxaQGi6BwRTNdCddRK3",
  "key9": "2QNTrPXwW82uEhJCs9Tr759tVcdwuqkPKqjSyQA4F56ip8i7W91j9ggZLmyFUZHg5fERt2hTKeeAKqZeWje7SdTH",
  "key10": "gPbWAY1wiEUYmYzxYGXbtaKeixzu8NMsSnEbqTNadmXEDT2fTdhSCXP9Rdzzxp5HD4XaSx9ZjGkKZvLFwTjimfd",
  "key11": "3MtdbgwKB6wN8MzpkMJgiR2GbVyCe2StzkR2p1QfD5fcuwD3dJiBUPspifKq3yM7MdWA1sapnF8fQo5cq4vMJoCp",
  "key12": "5w1DKk4Ku3HWQMKJ2FQZger8J34RLAgKM7ZCsM5HbhnjXwdCX6YS3EksqGcGV7ykhdvmhynMBaAPJo3xNvNV8AxT",
  "key13": "5oyfyjVfsqGcLN9rUGMNYiNpQp9hTPWC38MCURHDe6oUvJ4DCPBLcKh9GQeWPWNo22RtMiraCe4hDRj7afChrpmd",
  "key14": "5KL4nWaHMxWxUdfD6vDG3ZtefdpqZuKgckMQX3bA9bz2t4JekxEAu8gKUZMQdJDaRuFr1YnzXhQ8es2pJXSywatz",
  "key15": "Cj1xczmKYxbodDUe2a5teJeVPRAauMQwdk6XqNgGjjicHfQxrnr4gEegfAUpcf5xjb8cpqQaziFkqAQutZLhyhz",
  "key16": "57LqMiiVWR8RAHRFDAmNUeEmuamd9QvSnKLvWv9akEppUcAgpA2X1BJSru87ufrKKAqjmtxU4CCmNqGjC8uWbyFR",
  "key17": "4u27hLkwSfKAS9DqoTRYDa1b7hYRqhJFJkLnMyLaGeTqytgCvHriF7qjawvksUt4z6owPsztqZtGXVserqUYeSjN",
  "key18": "3HHyExfFvUXjtrfqrCKrGpsAHLwXBPRPpxUH1MjhacLYDGrwumL9zdxthvHX9XLEmSagVGStdC7jHLwZaUo6w5TL",
  "key19": "2nsV7eLeZKQttTJL7fqKqLn5fpREn7MQri6V43fqs3wtnGASkvymrSfjYxZsxrUkKp5zzTx7SysTfeC6Hx3vEvoY",
  "key20": "2icWLf4Em8GRYkTXpG5FVtsuHmEc9MUZfmLCnA6M55LEiMtB2SxcA2Q6CJPCCniNPSNEaoWkhuxiWwRg3ad2JpeA",
  "key21": "47gxaFeo1nBdtjPSu9jPPtbjJyvEEH6vXdgTWWsFukHVbcQ2wv6LBLwY35JmtrhfmUeE8JkXb1A8YXJ1btjb2Sen",
  "key22": "2Y1988j3F2opFnnAt3WLyD8mLyxrzb6n72UvYicUTPANdxeooCdoB7cuYCQpBSEfNzKQZfCmMa8S3AwMkpsoSGWB",
  "key23": "61GntfqvBByMedDCxGd5ADZzV6jv14mEkNxdh9uCzXMx8PgckC7GEf2RRRxysNEUnGfaeJneXgpN8UH2rqGT4KHd",
  "key24": "4KWXsmQhbFhGthXYjX2oqMKJ7TYSszizzJx8M3XDLEF4vNhHhdn87yo94w9iRGSEik2g6mbMUUKHXCE8yzECdchg",
  "key25": "xufAFH8xpBboqSndtaqboU4EXgicicnBruEWq9w3k1irFkNUkydfAHrn214M7dpfwtLcq81udsfVgYFrLLT1dV7",
  "key26": "41zUr9vLhA4vsbBex5W49ga8hdBiHx3Jf2nWVnNN9mpAzma1t1jZeWxHNFrNKq4udkhEC4uNPBWGx2wFaKRNGNp6",
  "key27": "5tdpk8itgcooUh3CrFD2pgSqWxJAKVtcTBkHbMGU9HkhhSfWaQ2z7PZ3NeViU7Nkg5h4752ocJngXPKCLLMJEry5",
  "key28": "4pjeqCn1gmrDdCpzaQVUfKzr5RCnCJRCPwRHm2zQbxVdjo4jfY6mnDX54bnbxeumV9sBXi7dbjjjs8axykaF9xrJ"
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
