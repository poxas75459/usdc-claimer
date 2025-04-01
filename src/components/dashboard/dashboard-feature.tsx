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
    "xX7c46Zs495s7zHUffpYL1Nvq6dBAymsPhGP6UrmSeRohNJk1fQHPzNvPPiB6RNNenewZJBpoanJ94hzvQWK81P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62TkvQ8bq6WGtayNtZi8QpDGcUc2YCPQxPkFYsRALqjPTPe6NdFpkVFcFXE67bfcoppyyN1X9d34tUi6zSyunQrj",
  "key1": "2e3pTjrG3MFbfCw3efNkvuUv2V1HFBQ1mp8gMzi6hNcr9vUrhKTJM6V5CcSN3aRQJafcDiMXqqN4ZgNorQX5re18",
  "key2": "29vADDaUsFg6Va21ke6QMwH3aVrUdT4KhBr5rrNscrKwMh7C5LAtCQVkyYG6QiDAXUF7fpDaBWgittQNQc2LSggt",
  "key3": "4b4aEyLTDUabyQTgDtWq3HEftzhWnuFYYdcrZmh4Sm2g8yYivnJjy6xkqhjkXY863cAmJ9UmB9F4MZCGbrHQvR1N",
  "key4": "4uzUYe5XG7YQDxGXiZtk8Wh9m1PeX7Bqmj9DBDUYQ1NZya7Dk3sUqxtJqbMRDrszaPSgTT9Y9jJgvwF7fzd3iHDh",
  "key5": "2btJKxTmobi9kCJnTfeKj58vmZkq5wbM9RKpudTE2FG1rpF3VZdSW3qWTjqfpvwxw3wyYjpHn2iqHrKSnNeTW9XF",
  "key6": "37NQxMEAgQGM8oJTGX5UQ7XbcfRfeCwbroK6kMsguSnAjJEVT72XmRi5reUMWyzqh3zhFUTEfPEK1x35cCvJnfdh",
  "key7": "CzrQVpbgE2LgxmqJMQM12PBcgQVRjFfTru3vcTcj698zLnYPLFc3Cv52LaUHL2oaPbaWX1qtYReswEqUbfhjBCH",
  "key8": "3BPoTC7WhejqjCKS96Gw74mvG5im7Bdxc9UZGotYJVWqtD4d4pQe5zqbCGYpPQA1387iN5kQbySpoicD3z7X8e5g",
  "key9": "25RysASxLF6AFDcJGvAYQZHyoWpLa3C9zGQ6cmBTfLLu9d7EuytAHrhXuH2PWLpP1UFFKPm5rXUSsRwt1uiix6pz",
  "key10": "5SAoLFnBmP9FGwjTfgSBsejvwA7HKsKk17AG2yqEWw1dnJ2iwQmLawd9y7xETuP8po69Texbhf6beJckpp1onjvv",
  "key11": "LMRotYt4jfWmhiBu6Pc4JDBhzNHxNmV5PwS9BUnMjkdAcSJ1obaK2xRfaSSKJfh3xjw2DTP6CitCT5oCVFgVjpm",
  "key12": "5FSTUeURLqERtCySwk3TQL4i6MGWXFXEoGyorZDQeiu9cSmhT5cng9BG27cBta68Dv56Wprwb4p28L8idq33PpAF",
  "key13": "E4BoLeh4LkLYj3p5p5MkBLdMwi2DFYkp5CgfCGaZw58MiVMe5WE71pfmm93h43SZf73c1gpBekt6wCBZXjGMEMg",
  "key14": "3UASXquQa1NoZkDQvoMbxWXFCNydUCNS1qw8Suz4P3sDkBMdkFj5okuk7DrLat83SJF1R2Lxvh3YhR9PtdABeiow",
  "key15": "3BKVbgMhSZSVm21nahxGPf5giUtPWsgJxNGUqZYv64pqu7hupXRBinq8TyspQHv28Wcu6jQW1GNTA6sC7cuaY7aw",
  "key16": "5DEyMTk3VToEbqNVK7a7cq67tyaxzsb7i548aPtR2UCBrEyYS3S41BK14z8TY8KnKAVEWrAt1sbVpp8XRLq6rhqe",
  "key17": "5vaxSyVw1W74n4NgLn6Gbryhkx5Te7KAZxFXkQDs2CViQKrFgPdbGw8iiHrHntf5CXgvxyT1HyiH2dDw3Js7CrZY",
  "key18": "2zR7tEXxBnEyZjQavK5Dq5cBgAYJC6H6HoaPcgrhZi6kgk2jMEeEJPA4ChWa8ChcRuF2ACH7nho26t259hbwCRY7",
  "key19": "5aCPRUhXpruH4pBBsukVrBoJZ4EQn9XAav8Csv6V2j3CojKi6gdczNNGbSqXetiUk2byfbBWUw4UqcQgB9mnPYYR",
  "key20": "52HuUyVPneo5PnZ4UAcehf8GKrchA4d8UfFLRVdq9eRjjCBmkfCAnQ9xGKHLjQ1CagxsAQJgzsRrYLb9NTSMA8dx",
  "key21": "UC36QWxcV3ry3n1DP7QjnbPtqFVpabLeuwi28hx5CXqS31Fbpk7zUxpBhdGyHrNM7GERYFmpKfqMTzbVVb1BRDx",
  "key22": "yGjBqRxdm8mwo3tCDLjQgg2ygQYSMLE9kBtUQLkiKrfWwsmQwDge1761tDGpMN4JufPTEnWndrmFBuMJKPrtukN",
  "key23": "4D7EVGJf3v3Q3G2e77LKpBbgmT2BpCnEUdAz3iM3XutVFEJ2MTLqjgSaKBRirqWiBALMWumqBaG41y35BfT4FUgv",
  "key24": "fz2nXqGdbrta4sKymcQQxSEyHUQcuVAD24xRSwa4LrSYXUmXpamMFq9f2cKDyFQdPB4rSuVV87iMQcMPZqhvrHD",
  "key25": "2J7iCPMGXBmARfvLeURZ8Lq6eMUE9AdzRihTnsJSiKztXJeHvWNw3CmnKEFTKzkNteyeSufhfBEvQzhYLvSijcGV",
  "key26": "4nt4LCyoRptm92FK5DGcDBniGxKotaLwcjQ3YqnfBTdqJKZnRQH3cV31CZuD2PNxmr4A3JRa2G9gM8DkAEtvbPGb",
  "key27": "brYFTyVjwvY8Gw5vVHjNqD7sH49VXojVYrrQVW5sqfgoQPNun6PLqd26GYdedswuRke3JDfXqJviBzZY9BCo7r7",
  "key28": "5WR51ernXFMBbhQau6q1q1cd7L1aP3Ej7uT6RVXDgtEpzWitB9fN3xpeNvqs1d25uL17SQemqf9JsYSCu6v1qbbL",
  "key29": "34E2x7ncQzfDyCXvR639mFkci7F3qHt4RZiccqNaBakbqrPAnFwjALHWjasuc7GYLMzG3ptsFBF8vx691Za6daQG",
  "key30": "2sqN9jQvMswM1JBYKeK9g7fU62sTz7VSR2cyaLuKuEcY3oLzu1y93bbXCLh4FwUpBPPoxonnyR65FKTg8BNvXsCw",
  "key31": "NBwERuweZvFxmeNT2347uAZRKTmZqqpr8s3kBYQcqeAKTiBmc9MjH8VdcxMb8ZB65x8p4QfghHXE385bxqp6zuZ",
  "key32": "2VR9iiGicVEBGWh51LqZMvdrw6YkqKVyrhus39YqCptv4DsNiDtHPkbWFCA2UvgCrWbYUnWfK9M6BhAUUs9j6pTK",
  "key33": "BQz36Gxdxa1Bmxkecx41whi1diKubZwMgt4NWLn9f6r2ZVWc5TZPH3UjBXDgf9wLGxKLDwDYMz9hXJ6fQ7cRx8M",
  "key34": "5eCjeSQVqTXaYhTjfcZL4mbtUkND2pyxnTcZi8Q4NAmtFe7xYFdYMHCVdwH66VnXu8cwk8WNpek2YkTiV94FBtSn",
  "key35": "61yRxSjYsy2BM2HWHTsxxw1gdW7xQyA15BDb876qnFN1j5yW2XX6wAaKvsadmjgpn4WxdX4SZSwMk6EndgR89uXY",
  "key36": "HkkTZCzUKgLkgrQDeiiYHUoayyLmScdJibtGjwCMho936imjUBRUbD8LYCgYRR2M8WBEAkVhVyzgsagANgLB2bf",
  "key37": "5BHSEZSTHhqR9xt86X1cL36b2UunXUeRRDc4ahiwUe9VmxZxWbpGikotBtSVYa9M5nnrDN8h4XU25md6FVEw1Kja",
  "key38": "33qQ5DGc3Rp2XmhwMFuhtJzPmdR7LfH7cLZYhrWKq97X2Ho4RYx4hYsetis3LurhuSaoFm5YRdKnmHqVzyDwVZzm",
  "key39": "63oSLP6yhbaSxPikvHLCGgbJNpN8TfrFfFYKaMX7VReidBbWEwpHcyCJdUUCH3s39h3a51QGmBy1utNwVNRNh4MV",
  "key40": "5Nu3wGgzuUbiyFKZ1z3cTe14DPV44JnPGbjqSBBXK1Z5Dp6rggMw8PtJ7LQCe61RZhGb3e9h9JpwioE8gbqvdSEC",
  "key41": "x3f8BnpfXDgNpd6yikDnUcTUAossWQvJUpFvhySXzGYbdsRyGQPLedYBxL6cy8kz8dh1L3kv4uCaEbS1DjZRvZc",
  "key42": "45RhGkhoZ6Y3nyzo3yQ4dh1rfcbsh42pJWUdgBxtUNiWU3kmqN4ov5mqmAmFNG4WmpbUjDLN85QZSV9TE5ETtjGJ"
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
