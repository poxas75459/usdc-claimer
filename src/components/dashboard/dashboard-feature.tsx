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
    "5teufqRgz8zY7rLpoBqrf5iBj316KxfKAxLk67fWsqgQ8Wh4YJjZX6MGD36nE2wGYhLw4jKmUNBh4w7DLWsTEGbF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pm7CVvNENyR9mNin5mYrHEN4fywk326jm8G6CRRmhUibKibyEZCgpASvhTRefak4AsvbEqM6eTwk6iC2sqF5WQY",
  "key1": "24FR7zTzEvZ1LunXPEVhpTVxPUpMDKGC8JmVjXvEF8jn6kdxaaxYgFsfuZzRKqqXLcDcF2njC57Ntjn9NesmA1Kb",
  "key2": "3kwuWQU7EAJ4stZJdqaqdgwwrR8RCNe9T1TgvzXossPs9mHAFc8WgFeRX3g9BX9Ze5foZTopFsvTx1EqXLZsG2Vm",
  "key3": "3biLQdvgnabgEpDJoBCK4kfZxGR3uxXFdVfYxq1q6oisYGV4xG7ue5C4D6DEmt6fLwfxNNuKBVjk3DKAJ4T6doDK",
  "key4": "FDns9UvoFe5XbNVqbRqkZ7NFvCU3d5AVxTnhx6o7EzJc1AM8bEM8pS88QANUuW6G84Zb5D1ikRLT3PQQkLCeorc",
  "key5": "4SKH1tcP3W5Cqop138pZXftP3Pq98qwVu9yz7DfsXe9r17kJFoXAxNXcMR1xbqnLY6dHWauhZAifqVzS4izp7sC6",
  "key6": "5U3nsGXoRnZFmQ1cyBEoE5RfBJVgDwzj9AJMaKWWsWvvE9FrU5uWr5dYqeBoKmB8UK7bPfka94YRtc6V8Mi6ovpv",
  "key7": "boVJGKakiTMfw3EH42FgnUw9fNBCaJvjcTC9NtaBGQebcLszFfDbN8hZJHewijPUmYqLk1Gp3YqLDTkRv3a7dGb",
  "key8": "u6hDPvkfn8Spu1MhZpB4XXdcJD5UwDfmQvd16AWR9yVbbE6mFQU6TaKmokuR4KMQWKtKwsP9txNG4MEGTLHUZn4",
  "key9": "3K7wDKzJTCh9x6AdWb6aUeBCa6E6ek56ZiJTibaEBEQvw5F7eBHTVNYahtxGpNnwHxvkmLshe3UN1X89ru2L6K48",
  "key10": "3z772kX1hRsxUpWWrJYVCGfbr5zjdGHUC1YSxudb2SeFF8ev5dAnTxrHSv6C6ud7fUFTQLPf4eFCD4Su86f4NHEQ",
  "key11": "27EyYf4hUvsPE778RvJXiQCSq4wnvpe8kDNcqYW8opsxTpv9EpS11HREyGSXcDwL547zV9gQNu3JuCxwRKUDvDex",
  "key12": "5JNYhtba2K5KMbxNGdRnMBQjrULwj14LL5ZP7cogZb8b9Gmbr9vRBE3UsJokxXqn3A9EBJKxcdcC3QbG99DXAAwN",
  "key13": "4A9i7ECa1HGmkWLawdyTLa12mgGi9DzzZejMuP9aNogHBGKmJChqHadW2LFrwRCHZjJuNKXPvdEfGAS88NSRugPB",
  "key14": "JKnCdQuotgVbQYyySgB11m4gsPMPGBZWisTC6Urbst7a5SP6eZBiAMGA8suse2vQPQ1S98Hsf8T586BVExNjtnZ",
  "key15": "47KfP8p2PhTxwsy3L4seZnD8a316JLfS2iLYL5FCaUvmaJZTYQE4A1A7Jp9aTmw5giydnXo1W17WFPUuzBDVD31R",
  "key16": "z5nTXnQ6oTi92T1Dka7YQXBbLsZ484sUPZxPdk4BgyWYB7aTQnsK61WpXtdm2o7NqqaZqmTSzmyDzcq1cymuSSa",
  "key17": "4kxBEbwfcW2tt2yZasZ6noeaet6vvCdPvchXJCLqTFfxBnoN6UQLjHSFauKA3XkYV7GLvneUbiYxgo4vWFqjVQm8",
  "key18": "5LStxUsvKtmgq1Xvw6otaWjz6r7PsuhNPcYaLSw4aPxi8Ac5JXodWo68j7G7SnL6gXsZ6SoQE29YqW7DXCzVdKPJ",
  "key19": "2DYZbi1eFf3iodUzcQX1yzHu3RZcKnZYwWMx1Cr2WvHvr4WZdUkBgztNEZzibPpMNd343M1zwXEyVoM3UfB1w6fi",
  "key20": "2fh15TShtx6WT4nkETrjfKDUVSMX9jfxMEoXLiv7WDUrhUvisCbwfsuznaWT724TzbriBLbLaMNunkvouLdpb6rc",
  "key21": "5YrsRqnZzbLJqg8Z7WnYSHfjV2c5eyhU4L7TYAoXtJyHB8JMQZejQ4i4ihzm3X1Nbc7bSQnBrLKJLx5FvMRafD5u",
  "key22": "4EREjNjuQtTJw8Svt1JvHC78bEoQAYt8Eey6eHNkkZnLgAsHPvxMigLbVHrQ8kFojLTrrV6SuvAwPS2QskkLJC9Y",
  "key23": "352n9ZkJtvK7fzDbHqVznBVXGiLVCaGeRA7YkUqbCmKEk96MyBeeH757fSHEwtfvEENgYiemiAvVtfEGEjR2ymYS",
  "key24": "4EZqN5eMUb6ru3UuFp8XKuZ531Sduh9uNgvCJShbUiQvNEzLyBnxKQM72YquTHHLZiBeMCbDromgipdUW5JP1QX5",
  "key25": "5ug5REh3nYK7StJiaT7ro1LUTXvnBcjATnMsuy8mN8kADedo34AkyWGExP1ZgcoiDB6AUTHLu54xTZEXaMy6Aj1S",
  "key26": "5JUbhRVmYEunxcL13a1WKG8enE3a7YwAzdrUKGVp9qp2kv1ssUSpyAAfLnyG54tAdFPyUd55PJJRWHYTG2kFYt9k",
  "key27": "3748jtVd3vVTTQYkWcezBUT6graPpYHsqGUB4VTSwtq72kpcRtoVnXE7Q5oZSmESAD4dBjQSySMqHk8sPhZXztYC",
  "key28": "3PeWGxx57eG1ZRAtiN6UTd7Yrd1WWoG4KS3yfhwZvY2u9UpLrJ7sRsw6D88j2TNBDJ9nH68sgvgwaBPfZ5eYymEU",
  "key29": "3FC25EgxisezzBCDoFhbeCFWBwdo1qBMiNniRVgx3PfxePSf2DbdGtWnEenYxzM9t4PJJ9MkQoK7hJhaAquBtbo6",
  "key30": "4rY6sHqf5Qp7zTAEugHNSSTyyXcCkqtifArfAshZAgxPD3PfCeV6zMLded8ZysXuhnfZXZfNXHj7N9iDkKiV8Vzv",
  "key31": "3FQWY1jQTrTVFoEbjoNcaNTcmAAss5LzPNMogX6JSrNpdvGVrt1giHcxHpayWLiszh6sPJZe8Hf1RnatYdh1UWEJ",
  "key32": "2Vbqw48KQokb3STQiYVXLbQtGm9rvLzMrf1ynqGqh6J7TjH9NHcoMAPT3gWGS93HGNTjZKJASVv9C3qxbWePG2VM",
  "key33": "4UhjPM4rdpT329xnmtDTvfidt6f52QiBK9XpaME1hzorMj6hK8zmH32mA7aSr3E9ceLqpLZx9aHyEfJQc9PPEHKZ",
  "key34": "3VwGYfS7NZfjNxnUPNhpcuyCJ2sPmgRyqPVHMgHFwpVJXCMMkoEhppTDa7oQrKt4LsJ7KbVS64xjX9tiLSVt6scr",
  "key35": "63gEBHgEyUi6MukjZH8c5sQNKmLupJvt7oNcR59TaCqGk3ZEmhuvE9x6bCytrxc3zzoLDMAdHhuYw9rYw5pZbvnh",
  "key36": "3xQdqVZYX48TTs5HGbB3Hpb7qxdwj7wkmDViz8p5UhkgsXPZpricKBbercQpDvEJ3qnUjHWHMaaVWaEbYDb2KQbs",
  "key37": "2RCFHJNUxVnX8a5CidqR4UHFcaT89XrtTMpq9N1fSv5Jzmj4gYUMyxLJbmsfTTR3fPEh7YpnL8vE8b4KbzCvSAy1",
  "key38": "3xv7JpREmvtJ3CpmcmurT1oeCiRshsizBk9d7uRvBet693VJwRSsjahnWNLEGLWog7fz1FS4mdKAe9zqvDsygCJP",
  "key39": "3tb7msqTG3bUPzsWGSj84fVxmX2hT4T4F87wBeWwwKFYzfpSuhrPc8sf5SVgMSU4ts98ZToUVhxncvyHwVh121Qb",
  "key40": "4bsYr2ibMjggjF27qrWGhbjo1eoVtkw5XmN6BimCs7L6967rWQo4ddWRpvBibeQjfPGtbK2QjAGFb8ZFkr2GimMs"
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
