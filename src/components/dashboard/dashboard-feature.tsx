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
    "423N6TaVFS92Jf56b7VEKSHXB8Z7gUgantiNhQ2YcgiXWRFNfw43dpYaEhQkd1QWAyiymFLkV5t23BuTPnhh9Twp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sAXMzZheSgrRNMVcruKN8nnA3XkEs1n3N8JL4yELkpCisWWBGwrmPqau3UvLny7QnySUBVNpCFnUwEtqKZAFLay",
  "key1": "5jrWTKdGEoBtfvW5RgTF2ABY752NQdVYsztVdP7ETc46kY2BFBEV4CYU868wR1JL3JGci86ZSEUJQqdTS35edd1K",
  "key2": "2g2YJzZMsfE5ALVB2c3qn9qbZqQ4FcyYrC6Mqbwf3x1Cbd698ty8zcxQqdovDyTJcyBM9c7gQQVbRzG3pD9vPWVb",
  "key3": "jDKKAHEriaqeJ3RWcT8fbiCwvehTKHuJ8MXMsAxvzP8Z1mWDwGz68jiTQn6D2EBvzEQUAMV5biGhGHPSA3NCHYJ",
  "key4": "4ZaZGKDgXt7W7h1nHPUV7QoUMegEuQFnfVA586JQKJV5Bo2Jg2tDFUe5edpkVhnphd9JeKedH5AofBK6PR57UvXJ",
  "key5": "34CfhYVN8F6UaT7FkT4HggVSV5wr8fijxoaRoR7WAhTXWEHS4N13ZoFd7DRh7GYW4hAMV4CXS6KQ1cAAurbc5KKE",
  "key6": "4r4Rc5XF5fuqpnsAGttgrgMY33jiw7WDQXxPU8XF6jBznwwmT6ZA4TBz8KnUsEANq9hnaq2dFPMJ924ahZNxiyQw",
  "key7": "K6NYUWPLqzwYsELMPbKVYPhFJ9WbYHVbyS1h7C87rej7upP1quRg5o3LhDZFMiWFGLdeLomZT43hadzPEAL41K9",
  "key8": "3cW6oZ4FYnCZLoc7XtW8Gz3qNF6pep1rX75dwBkLMYjBbaPYzGeWmnL1KDzGz8AtVfHDx4pbvrgpDbUZeay9v2sy",
  "key9": "5iNrx2QddgdZcXaRU8njFg6tS1wSJTVteBVy9PfTtDTudsKphaGCjUpgoB8kyG15hX78TLEHwYVmTK5SYB87GiLw",
  "key10": "2ijUhBqTp4RQrvMUHSnhFzfJ2gUawNycPGHe2ZxyY1j3kiWF8w9YYwy7oEJwU9yJjQocxsAoZ58koGqx7xyemzeY",
  "key11": "2WvsLYefg8qHZYoeF3FEugup5tBD57rACXPDJcDN1Jrjgrt79uP5Q9ogLaAwUyPmopUMgXayMB9P76yCAzUEcPGx",
  "key12": "yMnhuktwfd6RynEMpcpMyFgPAqHSUd1V6WMo6VzuMqwyVCQmnbz9Q2FdJkxTWCZSFUEqw5dUcbxBU3VzVpKNKbX",
  "key13": "58oDKs7akFVbpff8aeshXHuaBq2D3aYxb2Tkirz5C4GM5HvcoBoUfwc4BE6Fen55h9rUo21qA5WRtV6yj785EXTE",
  "key14": "668GqbiJU1SBKVxf13UvqqXQCEZXGY4miXoL8ycRr8kV9j2Tzn8mihoouqjE2Td3Mb6Z4Ntsgb6MMpvTHYtXg859",
  "key15": "qCvvebbRCLNeGT7WU1rxd7uA9JLTZ2sVwwBwqmntzPNJSfwizdy5qKz7tTdpyFda691Zk9LyoSCqGnsrFMhG678",
  "key16": "3C9YP2v9nixb6SZTkoZ2NsfqJWbVQvdAUX9KR1r8kNWkmKmZ6Yu4N1ZKKh2E81f3HKhFwFKjL7wz5TBvUrLq1CEu",
  "key17": "3Ve4T3tVdRDU21buHbUEgR2ZxqXXpwoWaPQHdL3NXYyVzuFJPak4jWhdAXttiN8q5wH4Ey1icbBjqcashdvHHpkD",
  "key18": "5ZMpJxNPiEQGJux4nxBkkSys4VNA9Kfb6XorRA4hYydNPkS7AiQVgBCWX9MJnRKhswq9XUzVHad1APiNSqczamB4",
  "key19": "3nNwnJbghjmiW2hFCinYLA9XZ77JCL9Hgc7Rz1aMCVYUNFbv31LcvtTpitGaUWc1q4orNLcbrQSS7gU46GAtn7pR",
  "key20": "ptGLosAnEcxs3PMwWSg9ptTR3jyrCngP6N8dq9ztMaaYpHF2SWpYeVDjepQY8R6yVQLvdrzHDhVqjRfTFrtZdCA",
  "key21": "5VAmFf264ANg77Xz72DkTRPEXZBFHjECa2WndJ2xUChwqur79ULYuAvcN653PtLtUqqwRTKLt6vEr4nyPSjuKxeF",
  "key22": "3zjFpqPwnCBpHkn26ctQS7T5XaR1LvSMvzS6t8HK5tFz5chtEPp4Jm9ijFtPU4jR48mkAbnKt6E449BitaFwSNWS",
  "key23": "33VaeBS4BgmiiynNfkhKvVVXJ1nGm1CqWcoWRTcTwAy1yogvVhXypKteDGSZaG6ZYLYWNRLKyskuTfU6zvsDDvuD",
  "key24": "46TcdsDQCYYdnb8uRepwhySWCzoH6AFJvCqm9ZiohxSDmMvgStu1xC51b3Vt4zRSJb8nVP7ndRgamo8zVmgBD66N",
  "key25": "R3p4BnT2PkzANE6bxCkjTrBE8PABVEk27pwtirKdaMc2vHHwoWJTppNBbKFSTqnvr4GsXpJWDzWZEg2SuK4N3hj",
  "key26": "2TvgnqSinu6Mz7BjKyNFz7sG7XAe7gmKfEsJabUyE4FWF8Nt4BcSz65rr7B5kLusMQEUkjtZYvhZQQrcNfedjRKC",
  "key27": "5GPMpzedR7rGQCbW74xZerNvdpfMrXRHoem6zyk13nGcNWr627jojh7wa1REKm77bq35RXVpnXoK3ixFfpk92Gby",
  "key28": "pxJA8qZwuSfLsJs2v274rnK3c4wDgDNgb9vhkLamVSiJyofsaRoU9oSMr7Ebrcf1H1jxnU8if3HWEQnBF3Kac26",
  "key29": "4Ze2WcWedeTk6EdocFgfwRrn8H8KcKLJadSTTdXaaFUo5jQiqCLLuoesXytwQKtKYezyCv8yxdoiue4rS2RuXUyv",
  "key30": "5WCsVQZGKZRT89uAF3qfSK6bc7eoAAMyjz51YzJ9f3eiz6tGsdyqpDmeWJqh7JCGg4i5gRppHAAfHU8AKs6qG1rV",
  "key31": "25MT91btf9YUJw7wiiLLrHaSJqU6cSiFphtXp3XCfXVHV3G7B5AgBpdzf6Ps7sBT59z8pcigLA5Cx71qGaDNnHnD",
  "key32": "m4apFQ1Uhq6J9Xh3FEZ2HARzVYJt8Y1NZtMDbE3o1qkacR3vfxaJHdw3Quv9DPHyQmGxNppc5nu9n7MFQDoF1FB",
  "key33": "3bkzxE1TNdJ7kgT3eqiJzaMagif2jAWf6RuaEMPFQsnH4P8TV7iXJoGbvyqz1uNhzNUquXBtUSYzYqSATupq9vcM",
  "key34": "3wXR435m32gwup7Yz1YYAjBsWp7wVKadQ558QRHWEgAmTwwmGALpuKqx2YUS4KcvDs4BhKKWwSg2CVQtyZq27nBQ",
  "key35": "5tweTDu85nyjarU4PiWMFFBhADsc4o17BZWk6TB8j8Um2y3KBSdty3YjnFLiDsvgQJoK9SddZt5TA6HffdY1e1rR",
  "key36": "28MthPJNSkshMDnRKq8yPBG9WH6w6XphaXCyYe6TxmhgVJYfiPqLDt932iSRoUmeQ44vUgoFPBauVHMy8TediJo2",
  "key37": "v8VdBKh6TC2xffhsK3QcMp46zEYoCYt66mtwH5FeSLy9XuJsEDB3Cnz9kk5d4jFV268H4wLEyyx7BmDafTmBAVg",
  "key38": "5tBzJFz5rTWEVCQE5sUy5mYQVgPF2aEdMyKsQH9kgRZAx7vS7K3c7mGYUFiyxRgSZdRum2THxAnebvqk8ys1JgVT",
  "key39": "ADyarSHj98HdXYsHH6tnRLraBLWfKMsLaV3oNtpPf7xHF2YgwjDB2rAcwapTcygYM9U3tZkVJcrvDtDmwpECtp9",
  "key40": "CE4Jrmop86PFkGMEUJyePjfS6kw776U4DfYLZSdSnptt7WjYtuxJVbved7QZbbPT87ekHCvebeNbPnRCwaYyjbr"
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
