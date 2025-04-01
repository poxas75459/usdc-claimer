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
    "48wLqZLxe4GA2zsiPJYnzPq3RyFHybzy2teXTkSECz8fKVdzHdTuMyJ6X7NLqy2rQxZLhf2HWZyQuHQBXQkCtyrj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48iUhrHwEtarr6iKdyj5JoK9yoveeShVHyNVoahccWxLEriJqNcgkpu5TLzHEGnFDdSpcDJTy77KA5nCaVybmnJw",
  "key1": "2sC3gUFBzcRP2ozFQct5gVDiFYSEWNpkAsVWt4cTfN9nvLXMx1vR96TwkHUBqRUWjZUFGBxUifpNGW16zmLJEJfo",
  "key2": "udL19s3EhmNioNZEu8WpuUto2VfstT3Zbwd3Bwbn6Ua8a6TxgakSeJQG8jXnwhoFZpnAJpRF1dPzwNfK9Zg1eaQ",
  "key3": "sAic6XrgLBH5BfdPApFJsvHGQB6ZhLsaG8fRMVQQPgsVD8CTVt66ZUnXQeYWofppsk5WVHZPv75xfhTtazkCRVB",
  "key4": "ciUacc9jpagQw3zq4BY9iwitTkxo9vMXHiT6QmbYUvGuWGdWC3Fd83jWsFEFhK39iU71fAmbXJnNJoV5nqaQvsK",
  "key5": "4z7GAdpoSaqRdXqh2YbHkxMWpDj6JCFfjzPPwcxsae9wi6rsL2b5uUJrKTEVzR1yrM4FVZ4LRDq5r8C9Agxe4sNu",
  "key6": "5gyKhc9FFAC9yo3rsh1Cy1gmKaJehXjw3fimBQpUQxnnq87vUVfU5nUPvex4hgC8hXjW5aaimiC62kkkiXU9DPMU",
  "key7": "4dEXD6FE6tiKV4xa6H8z6YFo8jjqgJ9UqwaqHA5kT3j4XXQcmnb1vzDVH6m1UQ3hGA3n6cmQjWc2LseQZ9FCWvDR",
  "key8": "5QCjNy4mYZvAr8ZUSgyeA2VbWRmBMdth3y3TtgFKpwipbS3Vt7hEoK68VVScHWrLugxLeFvtRS4whSL6YRor7u1H",
  "key9": "PqYd84NCK2cSeX4vrjwccKwEMgPzy2fXhedrh6GusFW5Bc7wgVu52txaCCrT6UKEe5keDnyLbjBKLxPa4Enhi9j",
  "key10": "2NmZg2baw9nkWpGNKLuiCrbcuZPTx95kFFGuCYudLmvgcyhTUfBqVQCtgdf7wEJfoRSjsYw2j7Nr4pkqf9o1DJ6Q",
  "key11": "2aFYF819nBiBVZdUm8CdnAG6Qvax6MR6txvvEPFbcg31VRvcta5mEju27jeRs5nX5SDs3dTnuERs1KonySzbUqVe",
  "key12": "3jFFrAFnAmhAskQkrZihUDMnGx3cjRRt4C6SsLXNVB4V2PYSvBTMPguawGqCDzKLL2ZPpUvW12GGV2yzTRMu8xq6",
  "key13": "44sQFU6jhi8baxyFHrE8dG1iZ3zzL7G918BGJ9GPCKg6ifT9nkSDj6nzDR5iowW8i6Pja49RdcCg82H5RYY1XyD7",
  "key14": "3waZxmC1YJebLEwbaE5HmgBFDd45sRygG4eQWLqxpXRXW3kqi6sEdQt5tmf5X3bYjJ5vjtryiJtJE4CCVhjyRLwU",
  "key15": "3wRR7i7MjFrpFjupTUNaKD4wUyXtb5U26KH3sFauPUBLfq6su6pX7uBGvcz7exBpFrC4fTeG3fy7fg2ySpPE5fWg",
  "key16": "3sWbKbmtfTZQCKNefFUeP2egACSXJ7fqusZHtBNY985NQxaNaSB1BFFSZGnJT6BPhn1CszrRrY2UFy8S1fugURyA",
  "key17": "quH4z44ZMb5LgxVf2m7S65y1d8Sx2whoRb5cDt7SMyQH9MiHCBugZ31UhH7JvPWQgywPxczoR9odvqGJ7uKYkCD",
  "key18": "5iu8j7ptcC9CVZcVefAkL8qDxYCC9NJSdrKrpwNjZMFaTo5sFxQ7TxshfmuqcPhjBkbLiKB1NoQLhoW8speifBKA",
  "key19": "5Pz3MJC3mfkZtGkza65HQ3BGR7cNSVNyKdwNdpdkDUjs6sKsTenzz518UsWqDVkyAcZh53mTRxqqi46Q8h1Jeg9s",
  "key20": "4aggR2Zrd4PYt99664KXeAAcNJwvHizFM3mgdAKfK47fvMFjSvC2wV9FJzpKpFuhWBEsre2ZCVvLR4Z62yd9E2bP",
  "key21": "4f71TTnwsxouW4uBUnaq7MAhmtEbdpF3iXVtPjUH8qgh6P8o7DcNoeqgKJnB6Vd7xUGEHAhFByAJGzygdZxZsyEL",
  "key22": "2TJw83VbqfL3iHLN1nmZhiMgYrEeMNYEckUbmpHNwxvmQoaF6sCCk2dr3nWyky5x4nKubcDUSELRNM81eTqDhk4L",
  "key23": "4G2hRdsBiPm3E9DXybc4vAzzB6yGu2ZEBPy2G4bsYqrvKMRALRiK1nb7E6hsAyHY4dxLUkVonfnmxHuUDUe7buV3",
  "key24": "4mJ5qdprda61pXmmH9k22TumCxJuTkMCtJSncZSWo8dFb1RpS5SDgb6NAAThTcLMRSeGwciQ5GAheESEnVCs5Qgr",
  "key25": "2Lztx3cRUhnd4RfSfM5nuBrLvM6vM7tKZp1nZw2ApnApjyLYocq2YKBhWEKkDJLWUzfJCgzssMKKbfKeaJ7hkMto",
  "key26": "4cQaaBzh7EnLKhL9BFiznhzydknqTe9qh7kZyzo3WnUezvUDEnf3Zg8SpNv1EdE8a59BayCrRXC9cgUSr9gAQUHj",
  "key27": "2YK9cu2W9hrnQqnDQXNn87AcbntJpqAKSLazobAaGxSBoTrKR3318cYwjHXmhqZu1akBXf1r4evUh4TSdHa3aQXi",
  "key28": "JJy9HSeDFPigbtHJXQmdNSeCfgUYEze9tro67Cb6xeFvXi4Yh7FupGsob9XoyL9AS4mzH9VqC5hwwugABp6Qt4F",
  "key29": "4NTYHej3Ew7udtZjZiQKAsgLfBAneRyrQAw2UTgyRf9AssdqDngC3SZsxiv7FnVcnz33C31iqGhLCLbCxrENorMu",
  "key30": "BXu11wSaZMdeggFWxq99M5DboK9cvMW4vy54xv9uuHaNVvV3cnh2fb5NE74scqQGz8yZ8v2YadxEjHdQKnJfQPp",
  "key31": "3R5ymhTNNfCzMsVTozcbCSLcNsTBkbieUuyTqzHnS1tYYMNWMSwkDHN7Dfo1Sx3WZjiVY1xdq8rz2PSS4ico1cAC",
  "key32": "ZznAFDzKziss5WUE5iN9jn6x7ATFS4ZQLNTX6ZPKXCEEW1HGw77L8vBp5AQXwNbzucqbDdH3tBpQTBuoVo3qyJe",
  "key33": "3p7YgC1QQJstyMt7DeAr8JocLdcWX5B9C1D2v9taHjE8bhgpRRixLJNhHt7F65SQDuSU2J9xRoeAmwyYKoRDGwn8",
  "key34": "2Hfan3JcVFutMh3y2vHPzbn9eVQUK13kpiJDeaHpkxQqMzNrsi5ckfuVvNaoLW2EFZcAv5hugtQw2KAhcWjDHCcf",
  "key35": "4e3seriD8SPFLh679pzzCnXs1YsfZ5JcAfYPuUy6unrxEhseJbifix4V4WBdxK7BUiRpb7cY7fMCPgb8r251h6pL"
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
