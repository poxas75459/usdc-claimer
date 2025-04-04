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
    "3xH9YcFFw5X2AGhEE6mE2SL2VsYE4Usii3EqBiCtZZBBhDH5CeApAZWiXRv91x7WdeLznEqRWXyi9SMxXkrnMxde"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mukxq5JoK3rUJVVUVC6P4Dga2y58umg2TSUJ8tAUygg1img79sTQXUH35fZaN9CygXCp63VMEKiDEMJfVzy6oy9",
  "key1": "3SPDKVHwvMyb1afjjz86GXuFcd8gxuifkmrsQuuHUcJZZ9BDt9ikpkyvV5SWh5Y6qHTnswu2oreTYbtxhJ46ao2t",
  "key2": "5QNeTEu2xkb7KkZFA8Tjk1txTRzRrzbki7SwtsP4ZvjLsVdNCYTqZGdvBRfaC93C341Kq7AxJShc1L7L57467Hu9",
  "key3": "4Ls99eZbfuu2g1XuhkhfkHKHZta78HyoZ3sG63sikpudtyesiiNs6gs1zGqjSZEXRbZ9z9ReLwychvPLwY4bMRAD",
  "key4": "nd2m495ZatzAaudn6qWo4dMBxWJQwwqdyLcNpMyaRJFJdyDBWJeYqgGrE1dmcGoLWFTW3W7Tk49pk1WMvcf4pgD",
  "key5": "4iRUBxX1AKCGQR5EzLRWT5zCaqU6minT4Zc2BweNhxRmbqn92LE1JcRTKP32V37jgpGGTEAFRMEjXgdKwCnQKLGF",
  "key6": "2XZGSbyYgSKGWvBQVBFrcZqrZAUewg11CejWgizGr9nyxWknHTq13f2DhiTgmNpHLazeJLigCyZM2cVvZFvtMoi1",
  "key7": "4e4WG3u6zaY7o1dhoHt4jToYk9frRonHUEs6MF9Lr1a9XXFkHaip7SJigjcTJkXdxrHavCHuxfVeL7Dj6idc7Nfr",
  "key8": "5V3driELHYp94qHwVNg6xpzYbz8GHwirEKqDmpr7pEpbEmYSLvfhjgE2dLVYKhi1wbzJictuktr69arwfezyYPFq",
  "key9": "3aNrHRCZJ5pTWKk8vpFMbkXFwHXXaJHGrWFeXZcE64BPXHzdWBxGwEcYWKkMiQ3Sd9vMeMtDoUsc4LAU9GoXYQ6F",
  "key10": "2U5ZqfdmXUgMc4dULLm1qa3P7BK8qoKMfNo8A5EufmUU8ivgUsYz5R57ffAU92zxqzzUoA1M9uvo3i9CeXwJvnrH",
  "key11": "3QeHvR6R2irsgkjMjLnbo8Yjfv1NuQA7gEASLDEFuhHhb66nr8FuNxygHZZ8tvxTi4HF9xjpZS4Y4hn3zhbc3v87",
  "key12": "2pFWof72pVVZBb1cJNXQyxXzoYBj8sTmdo1c79CZEVoxxmsSJ8iwMQLG7iesL9XcxgMhNbrBwWW5cgbgchdXZRWq",
  "key13": "2P4Ayoeb7HRuzvPhCxUGFh99JhGThgUgogK3mgnCEgiEQAw8jpQvRjKHJzp2Dcv3aTYBorQ6RkK4Je87ormFhKCW",
  "key14": "wvohEssWiKWke4XRECwHNt2PGrpyLibKtQn1CJvPjrm6rQZBqYvDAjNVY4d35y4AcsnLJsUNbpFc3hLprdAVA5J",
  "key15": "5D64tdin19GYG5YF7MGV5pWby29RWFEGZuhppAcH4PVRGfrmHYykAZL4LdwKmqaEAYA1qZRYkVZyA6sU5M4CJaNX",
  "key16": "6fCC8234XZykrcPjuNwr4tTWt9K4GDy6hezfn1y8mxh1UhUda84oQinw8HzrA6zT6tFEnHaTfeybWeBbmvphQA7",
  "key17": "3y5fNbF8UGFzSUktTRQGVswxSt33bpj1ArC3VJGFxwQYcNQPdrD8RUFdW6wrsnUK5CgdvhdCDbEuRK3yWS2nDiHq",
  "key18": "3LCndeRWxjjZmz4Jm2SNXD2Jt3gyQ9sRC899VNPazcrmt99xL5J9Pma1ttPdKbxxXL9aVsk7VmyLt8yaA2teUJ7H",
  "key19": "2xqFa4f5n2m8yyBkCtzq89W4NZMLzcGgL6uK6EtWTgTQD2yUT22SAHxx5qesp2yF5BNFGNB9Meju49s2xkTbou2w",
  "key20": "3gh2kJYoCTm22LhVQANMmdeSMBC1RyJYtKHL5755gEeB4ci5uxDCiiMLnuvdM14bYbS34igRUtW6S7y5Rs8vNUUJ",
  "key21": "ecJhgHsUDDAkBcTvRG9YP7ZZPLw4wpsKqV1C6Q1GWhqx2RNrDMWuhpVxfHe7jnPTGbE4b1911ABhrFgh5kN3Zzc",
  "key22": "MtoKuNUehGx3YbrS2H9WZrGRKGEiVQwFmbo2DkSMJ1uzT3A1JyQomKA6wRRV9tEqmkGkA9zjsRPrcwny8jBCsfJ",
  "key23": "4o4Gu7mtoV4kGYL41hjxdhd4UxPjdcb1ziDzDFp8S4RTsdXrN6JV66bu1D61V8vpdTaqEXK1drmQkLrS2jXhMQMx",
  "key24": "2yFeAqgJKynxR7QXNvk9JLxF5XsWL7B44iQhohS7eRw9LuTVTjoDawoncnrjr2BjCH5dPPNpXr57EAresX4YY7AA",
  "key25": "2ye6s7i2qtQZEdaU2g2rXxBZLFv6Nr8m8oezX2s3qrw3rt7vXzZPDXL69ZCaXtEzBM4tMBfekCpE7mhzCrFBpXZh",
  "key26": "4iKnz97QqoZFbYfJRupTZNgZZbeBpbZQBTbvTT5ZxWGmqugcMWHP5yWeX2bisLi5s1i7amM56ZBJoLzyzMkvECxe",
  "key27": "5kX2ahiVTh8zZfbTdCNuF46riG83Gg795UcKVLCU98fLtv7Vn1sTcoCnNW7gucoENSBu5JvByaE6UJm49smMA1xS",
  "key28": "4yytAdDVzTBSsKpszw5dYHRRy9ffoB4ekPCQX52FoNmNhzDbhpoaimPF3F32uzAqojm9Cms5QgFo9ke4tszTjEwR",
  "key29": "4z9hcwczXX15X3qUE2YCyJ9p8zv2GT5MwLat9cCY7pjBerg2mcR3LwgHNBwFDFSKHMgFXzkd5VjBbdWmgcoxnmdM",
  "key30": "3FJ2AaEBYrpQq4dLcLyUwhQQjGb9Wkn4hw4tFTpPQAMU58GuAgrq4EEghHT8WKwAkzsiP3WkNWA1wT4ewy3Gkpjb",
  "key31": "4j6P5wYAkbKBtW42dwd355ttbUD3LEnwDBq8NFFxbSk1KajfNqNyuu3CAqNRtAG3WGKMti8k1t5JFwq7A7ojyd2k",
  "key32": "3AcyYpEewdDPU6XF4kUyQutqxyFVWMPr5YfHdCWnkmAeQFz7RWhztonFK1vs9Cgnp9puD5mVCsxJbxLNcLkoRz2Y",
  "key33": "QQQWq8Eyr8ejYqG8iyXGkySngWEJBcKQLsWwm9nawgTyvAxri6pbLvMYtKDYLNYZr7MnajuFajn9hY5nrJj5gaf",
  "key34": "3FuZEiWLbr3BMgM8cU69PqbgHoQnsj2qa3zaEWZ3G9VrrKoH1oW6fRkdGCfkMiVPNpioNFRyTASb8xBXwoo638c5"
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
