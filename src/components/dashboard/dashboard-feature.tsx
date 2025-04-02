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
    "4hheEBoFYXUJhQM7y2CKRFqNYKAe3iSjEaiLcoZ2uhnqo5ZbPFuAGR43LNJPYnMzddUh6YbAY5zni4Y1kM4iGwGb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CBe43ESBiGRFKMjNjYJ6xjC1AqDvHfujetGw1rbqZAeoCUWxLiSzA9SZhmRcDL6DVRKHu9SE1zzUsHXhRPoyhJw",
  "key1": "VDFmXsNUsmk3jx1dGfGnk5DnCtT1Rjh8HAdPdyKBpzLRaYhz4qP9KirdqLHX7jHWwX1m6V6J3Re5JmLuJfFPMDT",
  "key2": "59pddQyDd1Vf6tpPYPZ6DiTWgdw1Wh6QiQV1Q3ZCCizD6agounfcT1yVshJr5BBXpP5XZVqNswDceBapA7QxmFoA",
  "key3": "46aQfCQReNJAk6emG2zp6trroYe7hUrD2kk7WBUR4CnpFyVirrSVKeTk8emRaYM4qV1u8ahKpgYKanh57qSGvVaH",
  "key4": "3GQD5yGFLw1fBd37rXHFJ7bhqEqCL6ERngtGxhkiZXZeevKQJBHfsgXZeWmPSG2hUmbRjeht7AqgEuD9vmhTF4h3",
  "key5": "5sLSw67edonoord1XEEjoTgaz7o4xRukmNu1tozmNmAJMv4DXm6UABGNBgc9fnwyAgrUUqLxSznnD53seeojHM8a",
  "key6": "2v7rknZRrKHMqYGj3GnQX8yoMK9xq8bufEdmdweS21RYCydF2rvtWESLEabVEp1bUcFpcw1qKtfbggR3gxjQUtaa",
  "key7": "3fbzKrUDuJbwsHudM6Y9zsqwZFjXNUmLgWwtpAxxrQ2237KyHwfqqhzczRmf9mHEXjFbPumuk1vuxzNpkuSeEGgj",
  "key8": "YLNBtbrVCuZeS7tvpwBgct9H5Bv8rwagJwF9PReuS2YgXCeE9iBu5jYGg8ciPRE4uLfmHu1rs4LRoGZt7LBUwiq",
  "key9": "GfkmFZ3sm7tgnhGFN7R31Lji8n9XHAmKfp14sMrq65wYaCYzc1ivHV6jBSpjiCSwvmmgptYbp5rgCdF2qdvfWBK",
  "key10": "4RtCbcxrAZ6GYwvZumfaH5iw47voCN6zpxHjp6GyTDjsLTAvaWC8ntWs2EdrZ2kRfp7ig1KJbps6a1Q7Dg9jq5X9",
  "key11": "3auSgTcXTxrBGTGHaTSo8wkip2V7vBrLDSHqeE83cBakxuPjb5ckFj9RY6gjEiknj9eWTzp8KuBrsVgdRak4PtfN",
  "key12": "4rs18UCmxAmWdexNWVYV4LSYHPSZCPoKWZzB3ZC24grUYMjWT5K8aqBPTGFjWzvrjn9dveAsmjveVPr8JQ3u4LTj",
  "key13": "4UKU99s4NTXAqjq7Hk7KH7e2BwzQ6TYF84T2cMX9UjKbZuXh45zAtFS6RSiWm4BtqUgm8ANwjXnMJvW8gynmGwjN",
  "key14": "MLGk2Uwku9w7jNtcgDN74CXRjF7iuqHVHK4ZNb5iTEpSe4RmYAmDXxyXo6o1kq8d74k57PDwqFeE1SsAoFbbe2C",
  "key15": "SMYWHPS89y4gAm8xYJgh8921VMmTAtytz6FmBkKEAo9xoiNAr2v9KKf4o22U24sYEQggAdAfCCSUHdhYpPmseoR",
  "key16": "4JsKZ23byWEURZPxRCa9xcfLe1ERMthcvUVFBR7TN8f1LrBXRMfZmyQY5HDe9iFnmmvLFL9jYnLGMGHfhYe1Rch9",
  "key17": "5Pem54wmpd3bzkCdexhxXtJX2k5gtJtCbD8EeaAr1rJsBYvKfzTDsVq3dh8iCBKdn3SeTNo6WBm4iAxCZCGzBBWg",
  "key18": "5dn5grsCoKmvRsBNmYy5G27JPDHsvR3smEejgxLcZZW4ztE8nDCQGsTZ3iGDJsF1bVRG5ZTi7mEX7TkD2DmLy7As",
  "key19": "5HGsii1L8jhUG9gQQ4Uwoa1rH83HCQsDWVmBFywaeuGKAJ9CDw5ViPTxo5tSaLHrW5GtmzyE6wXNDLZyL5zCLbEx",
  "key20": "2nWrhStgLYmxZgyttZxBn18dmPwywFVvYdbvJtURt7CpBQNX1X5AHRpM5mtnmGGZHFudy9roxbDKfpGZ7G9fsT9M",
  "key21": "ej8zb6VaoHrb9vfwiSwZS1pw1nDnbKkzxGHWGdY8rNeWpWdcjKhg4KkVFq7rw621WxWzrhmFaMA6hPEPFTSUUnw",
  "key22": "5iBzNaKhR534EgHVdUzpZtFuSjdHFTzmdcZ6Ezc3v1wr3zgnBZbnndEj54kKxgHBEP5LJGK6Z2wXJwjztrV8RwZk",
  "key23": "37iesVmhXEgJk9f45MRugKwfp46oUwaixXTjuFHAUWcWDwPymEX4cy4Ashemj1MHwhSfEuAT6hfQS2UY2aMmF7Gh",
  "key24": "uW9LqAptb82htStaTWMPcHyubVjQ2TgojNv7kPqVj7swqogcP5H7He9tkvbwEfUc9HSs9RrLQBaj6Zfr19nDE61",
  "key25": "4mvkXxNru1MATGzH6zKwdE6dN9XqcAhVTzRhkuMz3c6tonuQSNe2Xz3R2tQSVfcKrxsYtoKEXWo12pVFHmfaGWyd",
  "key26": "3PSwkTxQb3EBF4wVJhwtceTmwSiZ7gP5RJjypFtXz48J3KxyDcp5oR2mdpQvbCT2FfzmkL2jVZL7rgRjLzwAEd8h",
  "key27": "NgNrerT4CBRpRLbx9UCLWjJidame9VxGqHUuM5tfUTBK6Mb3wFCsLHmVqrF3j6aprudaQCPczhKmF5qT3bW3gDK",
  "key28": "5k8xUwR2r5SSt8HfDbkBXfAkmAZ2TdcYrKT2jzRTRQhgoLRT7WTNCyJzZWh9JwL7XMbUr9SKuz4a5vXeNJ1MVFM5",
  "key29": "249LiHKqq9njrg4zMmaeg576zoqB8iJoC1A76QcwNi8QtD48WXaEJR7rg4ZgVYrmWczV46KjghkNFK8BAA715dgx",
  "key30": "2rEbnckLXYsdgiG1JKDV3DgV2YG5gd15FphW3svVVpU5YkU494HGr8HU7KgvMZ3fTw3PHqGsq2wfWbkWqqcNHZQ7",
  "key31": "3vBFDMvAkUEbFitRBMkfqVcaGRe5oio7t54AGKbnnjhpPkq3detSFnfqTnuWBv9PLCjSkFwfCaN7QhPw2mtJSdLj",
  "key32": "3wwBoUiuXBREeUFTxJowxPEV3rTofUG67Ph56L7cBYYkUoRSQStaNPLKKKAKWuVSyQSBdoHU32Cug2ihyYtrusgg",
  "key33": "4GtVPL2iGnV2M7zc9Wmj4KWSzNtn7HjsHLejZdNEeJtydNcYt7CCvRAsr646WvqGtSqGKWTQ1aMnwoN7civfUsF7"
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
