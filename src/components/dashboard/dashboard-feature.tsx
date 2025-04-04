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
    "4wYzQ3FQVTro2fqsita9KSFKzHjNcaXciQxeyBaQvxqr8icSBzh5NekHNUQYYNeNieYykPvY6HnC9dWqyfaKMySk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "588ER5BEZLZit1E3vf4aK7a9UvL1jDDzmX2vB3i6AAk7pAodbqtj4fz31CEZBXGkzSgarfaP1guGJHz38afUYnFY",
  "key1": "5oyMM7pe25QYWh7dM5yUSZwZwSdwBrXpqb1mCD7uENwH4ZfHKENbELjs2RvFRjc6pDMxLXJEdzyTEky9x9FVpodh",
  "key2": "3uT5BPo5FUWR9QrAgCUmPxyBkvoxFeqw8QbVNtUpqtEPVK1SBGqSQ5X43MXx9hRMDN6gT6g9A4YoJ7WTetUrTLHZ",
  "key3": "3bTe7mBhHSTCF2MjB5yYphUqhx2EsMgJa3PAgt1KgGWVWe7nPkNSpchR83UJFXRWDK3xMx2ytMHWAKk1e6VqpL6Y",
  "key4": "64KAyPAzwArx3yWh5nuKrFJ31Ahw6PxgLNYmxLCM8E4BGaZVQ99hfipTzTfujA3LJQdzfRkY2HQsvpraqu8pNKMH",
  "key5": "59fHXMFeWFNN5ynTUEiSaUxp3DuugWWEagyqZvS3sx2igs8G6DTVHG6RziVPg8UUVa6831vTnQXuPrtaNcChwUG7",
  "key6": "iSTn4iBXgidbKaLsheZQGQdZoneSDkGRVRmmK24dpPS5okYNYWgBGQNbkj1ThFv7U6cMb8ChqEKXCU3mwYZkTmv",
  "key7": "3yE64XYovUmxw7v9aVzmD5NhH7CSHni5UeBrgZArLVS1kU4tXY3paRETsWFKZUmqNzDUab8ujVqbhoPVCBKEeBzS",
  "key8": "41UUNW4Hgid5ZpZo3mgJs98y1fZK7p27DE9ofSNsudxvHim59wQ2YYZDMyQK3kXyqWika7C52KVbc4GBXNAi8ttr",
  "key9": "4i284JkJvNE9skx8BLR5tyuYNQR3RJDaPBXJ8PTDYvZc8PSAi2PxNqdjwann8i7no9wHZbiMPxmkneHuayUzJYxa",
  "key10": "eaDktaua2FtkU16QWTEisqr1z3T4VKomH1t6yBb3p9VtKnEHXumoHYzmghKLkDJXtvLjyvrukJu19q6Y1nMj3pT",
  "key11": "PvAx651JEoggXnc8gp4CXZPnhktNPXpHEDtTgM4prWwwCGhTCW9927xxQq9LsqwMYZpRQKLeytyf3dA6pSXWJUv",
  "key12": "p3zzD7MJGLqCuXmbdg1jxkv2chei9aEtwK5h5HTn1h1eoLrXHhq4FvKzUp5JgeBG4JjVfGKHcS2bYcBHGEUgQnM",
  "key13": "37q2TCuZWi5pePxcX1hrTMwgpzAAHjna6cZyih47RMVJt5ctPR7ZbXdQbqjb6FzC7fDgAbwKoHvyxAZrzknxoQpz",
  "key14": "3wagA8coUDhYcm1bWZCrYQpw1dbm6oP7ZM7ae3vrqF7yiHfMicnbPXhshYPHuuP13JC4NuNnuqNwvmHhExpDfr9L",
  "key15": "3wBnHjCk75DojbxywmhphjNeKfiuMK3yCwcQzKDfFsSXxrmFwB3nJzkZBzoZUqgSgspxo2qLgikvXvHepx2RcgTD",
  "key16": "3HDfp7XHsHPv1SnUZ5awcA3KoWUyZJKCQQMAbjL3oWzBsDxLvgwKc74qbWRxTFYsuadsagfRGeZ33ZG4LRj93iFk",
  "key17": "2ah41en9TDw9kJtKdL2juyimitt5AYarfzxY3foE39Dq2vS81Ve9Q12AgfkTT3rVzPCkM9LJ169eYrReiUFXtUip",
  "key18": "5rkyL5mEaK85aJ9gRmK9M3tqURmCMHLgi1qxrXdDy4CnfdDazUot2pAhmH7n5N4GnMvFwxtj3WzcoCK872PFjDP8",
  "key19": "3pDeWtV1CMJF8es8wveXLYDMejGUAnYAPvLvPc5CyTcMpG2D4wkayUB85dH65P9aGe6ctsX367fmXnehJ2fkB2mU",
  "key20": "4XRwmdFzcYARKPV2R27Kd4xBp2xMzzi5q1zWMKXXdqe6xVLidG31coyg1vfEqD5en1oExaTQDcuiGeDEJNkjARzd",
  "key21": "65psDaURTqE4xgfvXop227CwohDRaFZdtyjuASP27FsxiC3itmBKcczmHxgo2wZwMV6Vp7vjzPneBx4LZ9Zh1NyE",
  "key22": "askMrNwXCsfchSJjQyu3zQpPdgNM38LyXQXS9eipD4Z3iRFFd2poEs9L35fGfpke7f94QmvmhmwCBi6tP9mB1ct",
  "key23": "2e1pacpoYkzBhdK6snwdZssmwRPE2oDHsL1YZBiin3PURXSsLFAm4bLp56dZNyJ7oNimuoj2BZdz1pwxvWjA1L7g",
  "key24": "4cSjESYu2ZbjRfHvHpHJaSvWJ9yRLMfy9TTBcNbRVJbR9AdGkxi29WjcCzo64BQZiguku13PrtLcdRLnwF27PzW5",
  "key25": "342FvmZnKcqmZ35Ke51chqnNaK3gq8X6Euen9QTBUrG8itmEpXpQUQEYSgD9mXLV5XNBd7YkaChkEd38X6AZig3W",
  "key26": "5UrwSBzks4tmc8ai5tGe8szpBUdw4AE1t1P8fsCPbB8L2PFiHgxAP3a1tQbpBQPvYGjRCssWESeqAcACrqaJuhBt",
  "key27": "3tnb4rmJYm2pgS4x9c9XHQAHjFzEBdrHSNg7ES1XoR1FUZKgbwYvhx52iM41upKzH4VsDWX6ecMJiPrE9GNzr9aM",
  "key28": "45Fxksmp7gmD6QPtvEh6ZX1nEfwPwXL6RkTttuLafm4xhA73xjsr56z19Eh8XZGiKSA7cz85bj3s4288R2zv6mbd",
  "key29": "4sPrDu81A63HjXCdK79Ex8JdTARTyBFxh9uj4MvpepPf259gzHRLztQD7xZwdmpi8RdpNnkQP7qEr4VZDACSv9SN",
  "key30": "3TeiQRDJpjHWdZD39z4daFjpbwqNeGvJxsV7DJALjS8m8c2XNpY7zi4U4NvzJw9BMwfJsBkLgahZETJZZTQFSVQr",
  "key31": "3KR7mVK3dvaAGPt17L7qKd3DhpctunqFrhCyXQ1SyR8bBfEbHdJg1Tcwncw9dytEu3S6mphgzQZNb4fiNEk5fJfN",
  "key32": "5cP9rmRTNiC92tQLyEAr7KhUxwMsea6ZYZ2DJgtxqcx25V3UT6KGQ6PeHyi5u5hm6nX4DgHAJSNU7HHSgWjWhoge",
  "key33": "2wxte4xMFMDqXGpCXJnj1VcVRZE4NwaYaUkNniC1iR5Qz6swMNGByj9K4QZr6NGrGMqr5en8EnCznSGwwGtw36or",
  "key34": "5avPtdxKGLPfL9NJUNbkyqDabM8z45Fm1bMcEHAYehW9t3Mw5rcte3Q8BMNvj4F7W9Nc7F6hScLAKgnkSiegvwst",
  "key35": "5CToSvbuJdEQJuUcXQ4vB2Xv7BabfL95GRBZc7CLQ4yrWKKqNiMv2xCR58zR5AuWRobFViwA5ryePHS9zNAZgVtF",
  "key36": "5wDJzG5rSarbjPNrmDsVf5jkTzrDcvcGFSZZZ2pswwBnZYE7fvykwRcbDDtsELMkuBrFVJGqy4nCnb6Hta3WQ4Ep",
  "key37": "4rtj47qkzYS8NNP7tusJyV2DtC2C5jUmP2PA2HYypJvUPykRiHMcDtCrJ55jJwuLSRoG3kJ1udGhYbipwK3vxY1a"
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
