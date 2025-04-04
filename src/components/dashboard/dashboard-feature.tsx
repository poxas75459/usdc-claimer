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
    "sBryiuWfWY5cXJ21DNhhSi7pi7v19nUCgx7jcf9ZNcJbjeA8mWZDMmFtUefZ5jpK1j9hgapUnnQuXDARD5QvPwi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ktaFY72Ha6ig2AxTsK1Ac469BSDmEtemCbgfWCoEaz8gsGLqAQ9MQLSYMCPG1KtVrEorH9z9CgmR695viEeJ7vm",
  "key1": "3sWMLhYKNRzFtqLKUEnvaRYLNFgxHAwt4kn6afftLW7tyy4j7ci5Di9jpphsJYwBcMJ2Ng3KUTUfHjLzfG4ucqPM",
  "key2": "2fWodWQDskn8T4fyb5d96NMwpxfjtQ5yBRRpyuVGxJmeqrPnH97eFK48TsvC1WqwsqxSVmvLVwoRb5MaeovbKyhu",
  "key3": "2bSF1Vbqus52KoyrYtUyEVq62z8X8H4QZzFisbPiaZuKV5C4DJU5Un8eDqHhhb1sL8QSEhrtVhT6vGMSEF4onnod",
  "key4": "2wcsryibErDgcocm9qJPFkK3QceJWtf6SYPjR1H2rRGZybK6r54ivGd28QceB3LtDhmknUvn6zcqsWLTBBAibViZ",
  "key5": "49SHv79iBFZf4vw7xPAAzyegsRX6F2Bp4nhvgLePb1Bhp7yzTfQyrAGrLp6WCuhdaVBiAYzD124mg2MxLAqSDeuN",
  "key6": "43suqvBbE1CLgQsXi6EhqwvVpg85xAStf58wd7SzS74vdBTy173TKdwxSeUoDjqS3dGDHfxzJu4wLrJ3e222BjgT",
  "key7": "4aFxBsa42A5ty2YBU5o3YNv5o5bZTKQpRiAwkYg9UaMdBJSPMUNyjGFX1MPVnsNn8ZfDVvcNvsnPzt39Kw2ecKGw",
  "key8": "2vRjUV1JYKvPoCPaMYnYLEPuCYaRNidz24vgB8Bppurb2bfPSDQXUXThBGHQZVhUm79gUGvByjiZ7uEU365dxKno",
  "key9": "5Sw2bvtqzqt81pUqfd1ohNv35bBDCinS79rjNXUNhaxYEDEKPhZ9BEfbW3JU4huSEwuHnBpgBo3f7WHsWNeqpV3b",
  "key10": "1jeTMmKqrYaEAuweZRagR5JKJZdsBasCymikALfeuWyhLVpqnRbuvdjUjqXUQ16VHjYry6buUhnGS7WohSuEinu",
  "key11": "3wvMmmoXsuT5osGJBwiVLsZZjoE4YqQf6KqkohDk2cQ4tqy71GrsiXREoKL1NdyALTU6GLrJJA2b6wPA2q6faoop",
  "key12": "3C1SMf7pwk7uPNVkHQ5GjXaWgPiiTYPYWX2v5aHHBwJrwg8dgGBagNeMV9b4ZyhzZzKiSytm8uvXZwPDCjpZKTYu",
  "key13": "44YHFzatRwBuXqJn8StKd49z99HUkucqsHt9MSUEbxVsRsnJBVDX6JW5Wm7kHz5pnQ9Mz51WP4DskZh6qRtWpynS",
  "key14": "pqGduzQ3dVBzWEhAPu5uyyLybABcr78gBQvFsTgjjSkWybaJn7xi2WHm2SHAwvbNjhUgG5igEXwoGNrTfitrjsW",
  "key15": "3VtDYUkXcMVbHJ4Z5AjrkNM1UknpmEzKmyqMqrE2G9zuJXdaJkrG1kv5M16ooZXftBQKUjWoSmF3LLcqBuWiZNuA",
  "key16": "2CFQ5a86oYuVFcJ7LXSBtdZ227JX5vKfbuvHi1cAKSr87Po7vMCV4rtwT8HQALo6PhR6HC2zbnisgoSHRCZTU5Yg",
  "key17": "3wrVL4CSQ1UmThVuHB7b1dPBo6chU3PipuXqdKocWLRtw8XcjrhZAjd6AKcJCpWJFof9rpLmUwbANGLgxRtnK9x4",
  "key18": "4hJBCchUh8Mq9RQPeHbUB5XuhGzjpzenBEf7YeFajuQKrSZ82auvk61h6QMqExMMRpP3ooYFcfcV4EHHxGsjha9P",
  "key19": "5FmAmdZrKAxw91BXZPHn6GTZP2r57W8fAqcRaj5xRjJSLT5cjLyyAoCrvRshymzX53mCdquuPEMJwRAbwzh2KN6i",
  "key20": "2u4nDe9o7zYMcrtXsF4AKzcPUQF89WdL2m5NU8PZNHjcmbcg73um9Nhgn4hREu9As9CqjSWfyjhQpNRVbLZFsfPS",
  "key21": "2Yd7pkFcQSrbrLZJPjVWr4C9N23UZnVW3CofXVaDA4svM6h8VveWAAFPxE4R5wVnnicjzfSUvQESLXM2kbf3ThK5",
  "key22": "52YKwmaVDznZkmmiPW9vs99kKjjHPfkaixSgzyAmG7m3CTge1xyxF2Xjw5kRVuyY9wiJRHRxyD6hPUgKRo2Nbp1h",
  "key23": "5jWK3MLnJKVH63HsN5LY83ioR32wfsBo7bb1cz29rw9dhkWq1PT85pw3tBP7qt3xMoZk7gc8DcrKwYGp7aTZUp9H",
  "key24": "5iZDzR8NzBQnyaB53MxwizBsaadqfZuiNFAjaxXRd9aRiNgNoa9adwzgebDtvK9prcU6WGJGQepJhiLw8p7dc6K1",
  "key25": "3yFExvinPpVrSvE9KfyEi3WiwEEyc6RUDfA1u3e44w5fdxxvMFQgqqpj2SqqeNk7MTeEcDP33QMS6JJYyXGVGLQW",
  "key26": "UhYYS23Q6qZtrZ1SLYZY6fj9vtN27Ag6bJALmxYRi1ATKMTqV4513NGm11h4hZepxc9o2xQXjrXuqRsMr4szDgL",
  "key27": "h6ejb38zboDqnLhB3FJCiB3tkVK4QJi6bMyFW9ojxHGcj1rydsx31NCN5FoodZNNs4WyGWbTE17A3LUuEB1GpxJ",
  "key28": "4TVivTWkZRgYHZpgyekXbPkKqYz5GyVuGMKHk4GgkeEHWKXdFKQJZBmsqqdqZyJZqu2j9Vh7vz7WEAjQfjBHL5sY",
  "key29": "5ZnBhPbHTFdf3LnmwJKdT2XoFj2vfM12rYESPk7WAu8PiCSh4LvW4j8FgDdiFTatcyqyZJXbkpfJzzELvNqhvXSD"
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
