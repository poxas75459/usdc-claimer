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
    "4DJ998nWcVa3emFH9LxUvF7agowt1RKgpJCeJDXVPNjS9GhowsWafe8ZDMuGaXJHiyX9s1eKXDPRSH3eqssiheqQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VAGqaeowaQFsFZkHD9JfvA4GC6xQ7ppT3dCWcNfDdu5uLWHWPiu5PBSp7dBm5guoqL9NcGaNzHsFarboUpr2ddx",
  "key1": "5fdX8Chft1XHwjQZBLDn431MdSHa81fMQ4CvsE4WbzbZyVRUr22pJ6RVhmhnK5Z5wA1Ro4EB4HfFu2hhupyYJNSD",
  "key2": "2BMwP3b2TLVEc4NXNcf8931KwbRUg7zJShPPJvMX1U5qHQZJpVd5qpjSN4ktdfKV9LuAQ6psd9SkcroMb1nyfdRb",
  "key3": "64tRii2pYYsJkcQQivFvpbw4C9DhoRPzjj2wMDpZSRwPitN6xz4krurDgkhTuq85cQy3nU1FMF7TCaiEpnCprXft",
  "key4": "5jyivt4fHWhmZXniiS4xHWovFHAuR2EUbJy5DKwenKLsPYG6MjzEQXDFi3neSrbZVLPUouRVziPkNkk2gYucehz7",
  "key5": "3KPGLzFK7meL1EHuvkGqjjeg3q8XU9nascgV1MnsET51zJ3aBEnM7YGbapSv9mbKUu7XiRobaLAC5BjNWzMpyZYn",
  "key6": "4UVXU1HSYGViQ1JX1Fw4jbJXV3KUt6P1a8kesbKaJTf5Z3VN1HSYNowFUqCzowgHLceEyVg98rVdTUoiFdVfzwG1",
  "key7": "XQ26W8GJ3Fg6vr8VubrgDny7hTsfrVVXCTAwwq6YNBkRMKgQkTJHNnZJMGWZq1fmdwD7Rhv8qn19VXfCy8Mp7Qd",
  "key8": "5h3g1bLHCur87nqytoJEYUG5zg7rFczW9z4ox5hTxx8z28wYWp4AFgs8BCia32cosM1NqDfq5qkYbo7hnywGWr8m",
  "key9": "NZQySCXGFGM7kCqgGN4y9JtbkXxL6GAKrvo6UBoKPoxdL3hnDXgEyKBw4zi9ikz87K3VYW7z2UxvJJ7xtK2vZni",
  "key10": "35r2kuD8JQf2qSXQMHG72pNXvDYpDDf83rXHAsXkv4dxoxMEno2Enk9NhAz2Tm9Wjq2PYZBKBGxtfaBXANWHKuaQ",
  "key11": "N5iThKuVsPmVWdvJPm3s8wwcEo6pofa148aDFDPiK2YAtDUGUVeofX3mUL8sATL3sAuo2e2uSYg1AEBYvNsCG3M",
  "key12": "2JXiwLH2Syg1sx2PxieVP8JpxRyhAAz7Cpr67sXornzxTsSgTsPka5THgegQ1iE1Uha1pGB1Nxc5VExcscVLP1fc",
  "key13": "2GYURt9FTrb41QvA3wYNxy6fqcMyxVqMLvyawyDcUQnL6TtMfsmUxx6P1nurFJ2a7L55yoXkC1Cqt1qzJdzfHHNM",
  "key14": "3iTGBgNe7VDUk81TPsTgAtXgo8Vnjmu5TEZNebHYtKeGo5NjXgfiPjguShS66DvpKw6btDR49iTnBsp5pS1CpEsp",
  "key15": "3iRrSwkPU3q5SD2KHC3yK1yf53LhdTX2PhXL4KAbAFnyksC763Bove9FbDTXkfGZS1K899d6Pt4XjBH7VrjqWjpK",
  "key16": "2vET6hk3fJBZTx982GfVp9TMA2hB7kofxtBnt7DaeQewNaFCkMAvyNStMhLWFUq3L8VEauWeoZHbbvwH6T7uAoVu",
  "key17": "3N95DDK4P9nvg7WqGxR77KsGomDYZ9BuVA7ofEAFwCWXa2vAz4znHo1R1X38tdbmXa1bud4k3kNarJGARNxaj2R3",
  "key18": "2SN95KbsN9jrKHBDfL9VrSwqXyJGESnHRNi3AhoZPSFThXNHK9yCadMoJdrfMHGNiThVBrZweJo3xjLQhYHcwJDc",
  "key19": "3GeF4Q7VNuy5UHeA8YBFxDgD4ZDhEBzJTzHrrxXdiHmTNBgkN35Jgz9eF1a3Zw6JeDBiBtSMMQper14udvxYHBdv",
  "key20": "5n2ecGks5qMmcCpZRo4CB58DWEUga6559WYFQiT3T6MjhD47uQiJmGpHguPqQKFcE9Nqcgmmgpis4vuKn9sTes8w",
  "key21": "4joi7aWSbXGVhm2bTYR76tjNvtJ9mfyNqvgs7VUfywRppZd3aG8wRM1PeRX5N1G3T78JdumhtgHKjP2GtzUs4Mqg",
  "key22": "5QD42pG73exy1NTH7henK4gWtRs2AssorrWu6hc3xMiVKCiYj97PLGtfghooBau1WYjfsignnRc4CXtAoHTewV8R",
  "key23": "SqyaEbcDwpaoAq3nERV4b55Acgd7ssTAhH4rH7LWXVmiERfV9PtGhhvKwcBZFou8pcD5ksrgHebFTbe5HruEA54",
  "key24": "3QDsCwRZWkLQZdaKgDv9cr7AaoH5eakLYnfzjV3E6F1qdvMZrdwL9oZ3S3Y6DgKad1bDjXcF3t7nY6tdbZpoy6Pp",
  "key25": "3H5fn9pFMZLtDvN4WWpWet4SheZMxuTDCyaCTFEg6Yq6ciyxFRCMwSR9J35DbeiDPPZeDPjVkjN4U9whpAAN1za7",
  "key26": "54TZ5ovM8NQQwmpdnaybtgCQrTmQKbQWTD1D9Wx13LWHYfWyEQyRvqZMHkhw27eHVjT9dbX9wSPoGq1C2wHxJwKX",
  "key27": "fs58FJGr2j1LCNVJiFcXH8Rr9LkFJh37k7dnjMtpJ9sZVhtkcsWf5yiX3R9h4pvhgHpkV3KLBDCc4vAbmEjdSaV",
  "key28": "WCf7Vz7tUwn5mzNMcfRVskDv64qGfenuxVNn3ut18sNfrKLA21xopAHmVDVoooKzjE13aeEgb64sZzFAX8eVn8U",
  "key29": "566KoGmt5iSACVY3zRPe979gjZoCuqByYmfuq4zQ75GvNuTLn3jrXcVdx6Kz68AQmh2CzvFgjSc3DQdPUr9jtCBL",
  "key30": "39Rwi6FEA6oAs1z55rwnDdgNj8UXX97wAp4zqVgytGUs9DsjoKyXgQNbYrsSAVijKmFeGi8NVLQTtfH85SUsi4PC",
  "key31": "ugkG5fVjJSrrDSyBiLkD41Xtq1jtmxVFgFqurZTFUZeWUtUGErERnXsHZ3eeQWQHVVTB12Dy3F514rdtPW2MSkq",
  "key32": "27VBbtP98LUN65ndHMHDw2pvKb6u5VvYtJNWStujQ3oHRFWUi4Y8YiMof4pf7VCyZPzW8kWqoRPkQFsoyw1djiBB",
  "key33": "2XHSb49QD8ovQCJwJYdNiKHivU1MsrLhHW4JHAhjqENnRSLHr48gXWaG3y3zf3eSpHbEuT2sKAg5Hcw6wBmvjZkX",
  "key34": "4442SS2qp9HN5kx7kAGCCKynTn7FnNDvKCtJiteroVM4BqjBzrs32RCVJguVd3Wn7PXdBBnHTz9ATdgPh1bR8Zwe",
  "key35": "3vzDJ4UUPzxaEAQuYE9QGKGzYtKemUeja3BX82wjs4LG3azszkchiP6DHDzN9PaeBWDtkLPNfF9hQB8BXbUCB3kG",
  "key36": "2qxKLjXW6jXBtJb2vEsY14SR7mZV3vMnZHSDhrWPkNP6A6YaYhj4518KqWrirzmY3EyZHW6JrwXr6uCUKyZgV1M4",
  "key37": "SoDeoLMtBEfZGZ6oEEP3qt1Mnjp2QScAJghwNVwfbZerLrrY96wmJtxb56ZmeSkuYFFnpzok64dwG8Yi4DGqhEM",
  "key38": "3Ti2Kfq4KtHBapfD1jCpbLP6rQWPCmZY8n7RLmkbZRScmVctr2UzpPQPAdCGsnivk32QFgeyfQ7K66tkk4F7BnLg",
  "key39": "4X89v6CJmgnLx2CyihB3GdStU8iW3PQKpmfHba3szRKjD6mT2DNS4x31uKxd9Ao86UtHPZ7KkthSVgFg6zXQWSp",
  "key40": "3BcS4vSeZCNaNuxMXU8F6ST2Jx7NRckwqoRjw2aF8bAH7nLUmjdutXCecqayfrozBZEpJ9Qjf47CZ3EPd566sxhq",
  "key41": "55HGjv6GBzsGZ4n2SJuT5e5xgoyGTU1xEQ5G4rLUvWZgkiveqpGmxgg8nDuF6iZdoZPEgU44Sz66jMhfAce9QR1P",
  "key42": "3rb95WrZLcLLAE4y1oARFQGYQK6tKP6Q98CUd4pm3NnPaVkbSatW98pFeSw5CshB1Fsqeak2KyDKiSt7cjcbM9wW",
  "key43": "4VFYfoUHm4cFRbsaQrhqWtMiEWUmUJtSVbHrdmicCit4Zdx654jDgqnjZMpvbKhBvSQMZEJbHaHfzCijv45Kpmnf",
  "key44": "5h7Z7Zs2DjYMqNEPikf7iaQy57iG6XRspmMhBn36LpUirLam85nqEHefWmi2rZhiy59McmtxnnnUtDEU2JtP6dEt",
  "key45": "rghSm6c7zJ5qNGWepRFTwXYNFNV494Ypf7J4WTZBdsT1WQod89KmU7k1VojMZ2VCJREpyJk7BwTUJvACeBjMXUc",
  "key46": "4qe5v5pXcYicXPmDjrXouviyUAiTnHZ1Rg67RrNFY5RYvp46r9uetqAM3tTZFidYyp6aKARBvBJxyrrhqRi6tbiT",
  "key47": "4Z8gYH8Dqr65jAqULv65nHjmdc3LCqheA5GJ3ffpb3tgKGXypwNTtXR9kGYa6NCJLt9SBmHsNVPuLftC5DrTgDo3"
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
