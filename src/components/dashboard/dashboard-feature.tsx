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
    "5kX8wfSFhNufXGZhaBp52pEMmHJbU61LcJRwP23Y3PzZyQWtFE5HNVximrCGA2vCEApbbHsb1n51EmzPqy76jMo1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38jEwC7HFMeRyDUREZnvjGUMHoLJ5u66kQGNBGePoXniBB7Qxk9CuXk7Z2ECHiJ2Q6pPsPj3CWsXC6bFL7wZcqYc",
  "key1": "3mJman2ENkCabowuhJ9X9XpQqN6Z24gTrgvERZr3PKM5oEy32uxzEPoJqWaPCmNVW3ro9cCMu5nahvdKKbooDbam",
  "key2": "wKyg7yj9D1bXXkcmkpXbXYqT5gHChzcy8RY5CAVHjvJ5CvBBBTLrcqkZA41ibXCT75tMfh7N8Y8KfSRTDFVWH1m",
  "key3": "2Bw55M2DUDhgbmKZRev9sgb9rM3sQdcR7pC5XE8fYTKUESoT9CuMnLQyua7tGkBHiTtu6PSBfZMvF6e39eAnLQHN",
  "key4": "3CWdn6dP91vQaSoEvXjBYdv2mMnn766njqHN363pPHqw2wyjt8DTaLSbeBfkqRqjAyEPPN1TBDUyvvFBmnie7d53",
  "key5": "5PJJCsvgk7cnVt7Boi61pNM9ao6MQVVzYELNDH8FweYyBWkKVtAttXzxNLk9hwyH49kBMpTEHAnca4D4BLDXt66P",
  "key6": "4MGBkSM8ybJxxv6b3G8CAzSycS9EbZUt4CGAtHHDxYy6syymifCiDodkHsrH4JeC1KecxQYqFtNd9PRiWwEmVTCh",
  "key7": "YKTLmcgLVdXmKkc4nfHjjGPfM63WGnvywMZspkPPP7MQV9Nka6rirFAcf7NSLyCdNcYTZ5T1SV3P7uM4sUQg9mN",
  "key8": "Ci5ixq5skzAeZbHeEAxUAkydYUjQftwe5jm45rKzCWUzej5yVHAH34WN1d9Z53TZypDBHaJ9asFrN7Uuq6mFmzd",
  "key9": "4vVCqPScjfyr8dvgmzMszsRFrBABvFkANbbvrtgYiAG9we8PQDqCk5eY1ugnZpTBwiFrw8efnW4LKwTxuHfjYfAY",
  "key10": "3DVtm4uvQt6FiJSZh5RnsTAXibWZxHBrKLimd28rzVXytSe87J7xt91stHgSpMZXkHPYuuuZk2oFxiimDnu6jNkt",
  "key11": "Tb1zVgniWZbKBdAN1yuqVY9e6Hz1v2aU9ppWv1MLtDNBwvZ3BRpNZkWSD9VfZi2QPb69EPrx21aonUqKYTop9Kb",
  "key12": "GJkyBXaUa6gq5pXHpL2hPnUBYeeC9Ji8qCzMTCucyTSWUppSwjST6sDrY7jccCAqkN2StJZUUppsih6P7K6Q1je",
  "key13": "3hh88CUsCzwaiV1X26dTAHHShj5WYoqJp7qxUjsSFBpv6ziJZTzrpJoYbdqRTg2wVnBmxS5buKMXqt8cUDPwKUCJ",
  "key14": "WVSnZTrmvAg8orb3V2RzvF4ci6LvCKspaqsMYBCQ7zDmEqcmHAchNbD7EHzhGgsWTNAgQxio1HSKiFrPTHRk2Br",
  "key15": "5MVezQxoJJT7QNS6WpW9yz2cnrNLposUfCYxxN8RFjuAhJGEYUhX4VXx1ggdLaG8b8BUPGMpwRw7Qs9YDJGzoTqh",
  "key16": "3PMgDPvroDra7e1YzuwfgDauQVW9mzHnrZmHJ1KVNbRAFM1k5sn35rmMj6HuixYBRLKgM77JkC81qpUV5HUq5rtZ",
  "key17": "3R731QUhW9rqXo87XXrMnXSxGtBt5JgMobGykNR4Vt3MGSSz6vcU72wEp3hUGPwmfSgAumvM6ZPgpUSTCRWbnUQ2",
  "key18": "2Ly4rPp2gvsib2C1jBqJCxGxKcGVCUXQ4rTmY2PPzLoD5membTT1b7VJmSorPKnt3hLTysbHNVRL7cG9hYMoznkN",
  "key19": "2S3J1narNxAMLukiR1xCgF5Lpmd6PhgsKKFy5kRTojEsUV6GPCwoKTKvAkwpZtgtKTqJjhVbnMnvUaHooipeBUof",
  "key20": "4S5BTpv9Wtrd6c3Tc8ZqqCBrS7mQ5MogA55RzjsWVwLNmnduU6xzorJfuzzEaZZWk3UyenGQpuEwKUGbRL4Vouxx",
  "key21": "527Ep68gpMoY1j6gSC5JZRcWfCHrPFWffpNJFrb7UuYbUHBBXuyPXRHoUwQYd5MYcLZGyvi3unpLrTsv7Uix4hUd",
  "key22": "4tTtM5Jaj9rFC66DyHqevixLhba6sXoX311ES4ZZBQpv11Kea9i2DmX5WRKhZoc8jbL4QcqxWha3CD5XPSPhoVFg",
  "key23": "5X8z3xuMVsJhMw6SDXy3b39xFrdD59VqqmyNNNq6PAst1AbnaZjM4P2bdnL2R5dCixD4BamTRbtNjsaYYgVMZ74N",
  "key24": "cU82e1587VkbDbXgjpCUTQ9F7WRsAh7kFWeQcztyNYVmApZFYTE8EuDQLeXWqdP5MnxfTThjmuzTL42nCDP3fWt",
  "key25": "652aNrfboconwRrFhh81WT7tQ1adbDSA9eAJSjd877pg8dK92GCGGudzkoJwmN9HVhtYw32t3DhmbahRo39u4wf7",
  "key26": "4C7hDP7zzJQqoWgzXv8gxtBPCDH3GqwfR4HggqtZy9xti1DusR9aTNHBRJMWYcf3XrABZw2p3V6rDVjweeeBZwEv",
  "key27": "5gJqdwVdXYBBED5Y8J21B9R7U2rXqL8VbMXpqQXJFBoN1fKuAF7KYEhJGfhxDMmppZqfqB2WEW74XnUjCy5hCiQK",
  "key28": "9ZmQaa6pFZ55MXzNHajhUyEoR6i5y8JsN1i4ukRcbyD1TcGA7tnJBHrsQCHLDKcfS68H3SUqjgvfKCc1oKbQ6QC",
  "key29": "2MRG8r9zc2Byjt3hAjqJkn6E6agwTwEoYmTJSvWWSq2DDQqfLXYAPKPbj41izg14WLTKDahfMXUxsYH65V7ELMJY",
  "key30": "451ij4v3x9y45HZwwz9y1LA3Fq6B4jgHAS5tQT9Jmg35h2JV4NbDEmaFKaCADgQF4VV11Pn3bRPDbUiyNwSEVRLe",
  "key31": "4tcD2ZSRwwhrGUCqNScMffVgBZiW1td1ag9jH4qR1g4YHoZceBqX51kXuRzJFCqWusjWyb4GQcegj7ZkheeiSe7S",
  "key32": "3MfFQLchAAfXbgat6jqC179CBCXfsXLRCE6tPY67XDuxgdvimbp1V3Bda7RxAf3G2ebCyNUwY44prgBqu2Toku87",
  "key33": "4F43tiaePEz3KNwnyd9fqhzMJLDn8AJ9tjePj9J89mqQKsTFS6RsC5uXHr676PhCwFSS8vmjToiMmkHDpzk6Z85",
  "key34": "2eStkgFrGrGp5uPMbT1FPBstLZFB8qd6HjiQwB3XwRe662wKWvnC6VLQVGb8fNpBy7SPL1YwBv7gTHQeqyzw8PSX"
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
