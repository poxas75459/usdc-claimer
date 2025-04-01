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
    "4B4ptAdRwCEGDR2QCWgEtAihQyp4DvVFmv52duJH1VfhCDwtucDfqyjYigyVra3wsPfpPd5GLiVJTt2nyD26dDHr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kxCwuKsktqHEhr3wQVGjV913F2AAJCqftBf4oU9cA8vrJFEa7U55wrGgTmmm5SVa94xHgKnLEYYwvV83ENyDLsf",
  "key1": "41eHGL61C7ndipbwbfvUQwcVLr35idQCX27Y55bq8LNBZY1J6PCcdJ1DHTMERL3RLn8pi61GmihZeuSy3SnDrghy",
  "key2": "VsKvaH9pDtbHc8j8b72vp5yrF95Wc7tsPX6iAodek9fMu2MYbHc1xJ45JcYskYm17hdeCm75iLa57AiG2psyHWW",
  "key3": "3rGPJsUfMG1PRGDiMdqPSXndMpyMtqGZkVWpaN9pymB8CRnuQh5G8a1V3LTC2uVEuHHFQzTqRVEsBcPAoKYo4g2W",
  "key4": "4DVvWqLVUvKVG5J4QAZYbM9iwuJMgtRzQQtXeV8p8MQcUHfdvirAgxpdE8khnMkyySw8TXT2kmcB2tS1AXq2L9Ly",
  "key5": "5YXemYrGDHwNpGMdn6fQWKmCZTgQDpDDD28UFWs8K6U36jFXwUP1NWgGbRDjxboAZ57KaPSgf6xh94c8zFcFM7Ls",
  "key6": "CB4Ey7SWkXzFFyYYxiTPH4etoWh3hJB5CEb3b6r8s1HBFeuCoQptg11Xb2Hf6GFFaHjNTMRdPjVxHNgXZFYwXFz",
  "key7": "5o9JEEQzmEzWmNws5TxgVgsinoj88KnLgHqf2kVxASF97FxFktbecYTNhUrDZmYEtNr5oaYwiJyiPwqA4ofwexfa",
  "key8": "3NTUa1vfpT77dw9FDRGsorYDcApAdG8gm9jiV9856ru4MPZqBaPBEPmxUK9DmAqy6KdP5dxXsZAroLBGd3pbBMmc",
  "key9": "254rKGigXRUB2tPT5GAF65UP3tJuU1igX8SzyXUQG7U6vy2t7yq3K4CzrD3kGJUMA25Bvzkim9jSpCUjYVp1bTUq",
  "key10": "3eLpMBZTCmsC7WLSe5jSLgzsCs6QfNtZ7nLYW6CQHpHSdBhZXDDhEzd9uFARuHMBvtb4JJrD2aqSoMy2rCxXUGRB",
  "key11": "2XrEm4P4h6ZS3BxY4cuHxxvYVKZYcEqJzYoiT75cNridDBFnE87D8w6H31eGE9oNMb5n5muU9faJEGK4MzQiSkeb",
  "key12": "ZP6DHMoG5q3eUtxGPrxjSbvxZrh4cHoYfGy9sADr2XK62c7ZnNkYC43EMNsSfSc7EyJc4GoxnX85yXBzMMG2MqG",
  "key13": "47JmaiGCiGjmJ9auJ2mscqgr2QPfTc7xQtPrA34s5KwTekbM1Mqej2KAt9rwhtn6aXL33RP8SrcmbJbyGc2dm3Ag",
  "key14": "2xpb8YoLcMfKVfkFPyLzLoE12v6fvxRvQCn23KpDwYYpPKJMeSWZKLMLs9znjttC7wua7ogmd2eFJ9oKhTTNS1yr",
  "key15": "ZXXX8G1ngidMVrdTSqsJtZ5w7HgnSWDxDNKqpDjHzyaJ4gNirSMFaQxrmQv1JziCb8AFAejeFwr8W9HnfsFGc5G",
  "key16": "A3R9ETjQfvtySRuuU5EUMwxU24YUdjJTAFNQzok8nyzacykuF6ezwpBhKTro1gUFAhwC63Zumv6gb7YqoUMschf",
  "key17": "TLysngKjuwG3hgCzUMVkZU1csX446sdKHa95e3mJPttAauyxerv1hcjDLg7TSZexqHh31fwKU56cB7mBrA91agq",
  "key18": "5Ns6Ez7eBfSf7V6uxo6eVbqo4bc8LW8qfdBghrrKQ2pnj7Crv8z6xHSPfqidkfWrtj8gQTZR1tEmrbcD1McTymN1",
  "key19": "2psXXX5m99RuRJumJkj7mEmh6tovHeQZocbWJu7PYMprHCKVg6KZSsTxjY5TKcAommHuuFKoLeTbkMvU5weKPwBY",
  "key20": "54mTs9FSiWbEJBgEK6FWezBupMofvcV5efsT5KSLbjjVkrNGryHtcajb7i64drSBhjZWkRNWkqBJQeeQuZ3EMgLM",
  "key21": "3ToRC7ftqHdzr2gKctX4LW44v7Nzx5sk3zZ1sdFGX7QGbrkQ9bGqpqDZpZwQbAmWao5Sr89L6aybUvmgzF3UK94X",
  "key22": "32tm7KVwVsTmVJooW6hRG9pW5FAT1ZEwVMeJHE8zx5CDDmPphz5tb5vMSJj1ExFSEfVnojtDKsieh1Gn5DgHuaa1",
  "key23": "zzRZ6QUhf2Dfj3JttBy8aNzv4mb8mmMyWYMLkECnP84Bp5wwx9XjJMnbt1XR3XwHj5BigNR3wjDUk53BwKavfuR",
  "key24": "2ehxBpqfsBStJFkHsZfGN6UZsFwbbbFL2jhzbQp3MbZLFHWAtyLf3MWWmptna3hKUW4YdR1yfjHZc462JQRj9uFn"
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
