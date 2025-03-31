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
    "4qY2r3Eqkb3fZ5E9XVmqHyJvePgybhkuHVvttP4hbpFL3z6fSLuuutjWS5UPgW7U66j4K3eQh8c7TGMAKta9ng45"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32oyWiuQFQb5fy6EmCnXA2cAcjhQy9MusaK4eRJrfyR5HHL2h2n5V8LuqEw3GvS41NM5rmomc35ncowTJmMeT7JH",
  "key1": "5vwJS22RYDPkTtwGBeaAhJiQ82w5837aQGGfGWJ5g9nj83ynVKmixutHghhrVr2SFoFoyAiUADzDGwYVVn7ppJK5",
  "key2": "22yyTpKV7fAr65y7eFbCLZswvB2XQa6XNWN4rx5SZ6q8LZe8uTruK6dTi3tgQVcoaawD6JKN69pGkT5nQu5NzYkb",
  "key3": "NDFgbNkaxdV2is6Khu1oxjcT3QvoU7vp7jfRxE8xTNvfDSZXX36nCDU19qW5uXmg7ZZHCaHoeyh3a9ckixTfAEj",
  "key4": "5TCvdLamS2JFexhPsyYoHUksHzVHCWxAAiDUoGtF1e4kfVTcJXDTW6Akr4scw8SS4S8XuD2wXdk41wXTmMJnCskG",
  "key5": "rAUrnC7XcmhK5A5coFyayr6jS4A9CsWSNXfkp3WAD3S4YNbPez1SUgUPtxYxSaz8zL5HBh9Y1QxY7Kdm4muPj62",
  "key6": "5yeAVoqUfJ1v3ajv4xSn1ME5fHmzAgUtk1ZBKhpdtSFYGF2EjhzL3JaJi9e3HpynYYMJ57barEGtgudMenNrGNDd",
  "key7": "3z3BTqDr2XJJPqizu2f5ihkumqBGzWeAY8QK5DYq3RQKidrgASSsmaVNpKUPan5CpeSpTuRo9vM1qgWExcLQDrWn",
  "key8": "4Ps89QhD4Uw7ahduRpDtrnBZDJGni6Ts1KfiTxNRN8NQRFQfwcfJ8onEiaSLJYGxxoyn9PkEEgKEe4Lo4mL3zhsa",
  "key9": "2KAUiCYjzmrAoYddmjEkyGMxsmmNjp1r2rbAPUXShX7pz6JSPDKrepkJ6hc66mQuH41qFESmzkacBmy6phhcZB8Q",
  "key10": "29vEBAbFc9ZsMQ99sSfGhoHkCaDcGr8iKXr1AHK4n7Bu1KkQCP889S8L8uub2F7uieQZQsDsAmAQsfoLn8Qu95Wd",
  "key11": "62ypMLrFkwxuyKw9mroPpHJBF8NAcGXDCxX6Tvb9Xqf9ooiS1H3BWRTsviKvwWpMd6wLkCLod3Nw2iC3R9tzG3ZG",
  "key12": "58NVC5rtvkW737pNEyJUtRJ6fr2yG4qhZmYh1NYqbayFYKLkuwnaKrhuQCDyw6XQ6pnCFNRqwtXR1SPVkSK6czXr",
  "key13": "5KhUJrgM3mG7xtvzxShCzCpgCTwcSVuA5RQmnV3kP7MRqpaQVBXPA2c47Ebsxaq8yRW8u1mYVDAwHYCMxdRc7TqA",
  "key14": "3Tkd3fu1xwr8vuz76myeRsy7zybeyC4nsYvnstRwWuhHyE9qqKwu6NvQgPXvFY28VdM37T7GNaL2ZD8aAB8JAMA",
  "key15": "5RU8HpJEH1iytLoJ6uh86WFT61pAo9mH7zoTpE9jhLz5VtfynHWgMCH2VMyZfmzF7bRepiRfFLoW5es5fQAMpLf9",
  "key16": "5qUYkiwwZDTLMmg3oShEuSFCeVAceuZepZvxrjxyb9rxMYogcy54vmQP5zSz8eZUeS1rbzgjz6mBE9S33org9u9Y",
  "key17": "qSz4aMH3xEZmxGmk6KQBBWNeMx63tfCcrHVWH4ttr9kv3AsD7F8s4QsQXmLSxBwLNPntsuZVmD3JQAPKTwWenDb",
  "key18": "578kSvpZ5n3mQ1sYED2YfaRG6wouiN8CwsCbK9qPCBGZWTGE5zwFkVoYNUhg19kmL2hHiZtqKe8Lc6FRsDcRtTqJ",
  "key19": "4g6cDVdN7kcD67Mz9XbysC4fQ4MP1zjTsp3mTKf7PfankH3MRcAuWY3Kp9dye8WBqjzQCVmZENbhGDH9kUsHqdDx",
  "key20": "5rdMSHb7bFppSfffUUUGUMTZi5FzB588aczz1pryoAXnbRhtK814uwFaY46GkHh6oEgpBVket8vfXeqiFwnhD13N",
  "key21": "3zJJzsf7xqWQeMjwK8fp5voWBz4NKG2gvEogWDzdJBckPKvgtUJT8HDzfCZ15eMY2gAHHkpw3Pj2zVhHszZZvAGx",
  "key22": "4q2BBWsLhZ14oVGHKwCMWHeaBgxh5Ry6GVYzQ3jUk5NuGe9ZS4kxCYREFVkMaXaBNPyoPFW8NVEcBL7Z9dBW9M1m",
  "key23": "5AbLnjQDnEhohuyf1BZSMSTQYFT3ocqfspniREJskc39o3nTnGbzRAw2AAr9JeKD31TmpsGtsXHNZkYbQy8JhSMb",
  "key24": "2FsexdqTnXXJLfCkMtPgQAGRhHaquMxUvL7DhQyQe65zX84dtuebg5cgKudovXEKjAQ4DLGuXNzUgcNkgRwdp4vz",
  "key25": "5zBoVcN6FuzE6DUPVZkPCcpct2259AqWTYRkan1fi3gYrj4uJdJGnvTb2VE7JLD7LU9FFs427aEWskxXNvpJp4yo",
  "key26": "2sUHXFPo78EL8z9DqhoDrqf65Q6fZpmu3DgVFmYJLDBeKoJZo1wqnhCc6pAnKdQDCVcmdbao7BkhDxaTrHRYutfE",
  "key27": "2GHeeZMXNPx3dT1rXnmfikKZmaeARwB8LNok561ukfdyNGbWeoEJdpcDJEisXgKmhBLpw4XRgG3sthXN8GbJfoWx"
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
