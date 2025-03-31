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
    "GoTftZZhHYP2hFvp7wC9kdoXX9iUsF5buXX2wgPzR3J6GAs61fXwv1x1hts4pdpAs4tqbZWcNo88LiwTzoC3bAM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KUxccNMtQHkmpEJDz94ct5bQ2RpvaBJuvVZG53fC42BRjzTdyHFEPMjTN1yo5BNjSPijWLErkBBb6JhFUdqX1xR",
  "key1": "43UNDGEuGw9sxk4e15a8tMETVbd8BxgbdqDFGmP14DNEiQBJ7HgCYdTK5ZUHarm6wqFkvp5Muw9sB8wNsyF2828P",
  "key2": "5kcruXTyHQAT6qDNXCJFrPpXVMdtrcvuKZ9N4oB1jZQk1SwRSv4SYDGJUMUVM4icG5aArXhJNpbmDJj5sDhH3KCE",
  "key3": "59Y5jN6muztYfs7oJpDhKbciGbLizgoqHVGR5Ce8bnHELDa9ckvh3pdDgdqXhc5mQrEGcvMfRXdfSbDLeWhD9qpc",
  "key4": "5MC49YKfVtKuumSVj9qkdp3swAMKGDR29YkvmzqxfGm4NYPMVXNu75F1zvbNrZXRvMqxX31YTKv79Pn1HvFUaQd7",
  "key5": "4cJf2aGzwDvAHQFpxna3a8o54SqtQJdEH7zUZXaW1wYs5FrAXgU2ftA1j1hqHgKgMs4Z4j8yPTkUJo5exrKj2Pgq",
  "key6": "5V7PnLuse4xR5AEXUqig7i9rthZyh2WMN26zudxH21h4133TpYGcBXWqTnHKcUMWqxaZc2DxhRSHuVP8eWAj4LPM",
  "key7": "4yfatgs92GeSZaiCorAPDCccLWsgbsT2Z4Td3Wi1U1UJtMBz7gGpdHpB5h6Y25CHLdtc4ihFoV1vRZScgoovt2Gv",
  "key8": "4oY8UsU7serFyzeHqkh3o1zKNwDJDyUVg5V5eF7ogoy2tyYAB6R5XbBFfbLBywfv84D1L6E6RXmpR3Kpj66crza5",
  "key9": "A9Z5NPKPHXPuL6fgEFqc1tWyeFeN6BxRtMVhwXnRKJCJqRWm2SiV1fDjtaLHTNRecU68ywyCVJfdrrBbSNc9ivq",
  "key10": "UFcy4gdTUwXa8vPQ46NgNNmHg32YjmeYKRAV1wfi8VAzZyX1325TshLEQLqvZ9Fd2KfSBV47dvVxGYyuWUFLN1V",
  "key11": "55cmnJ3soQvBfW9j8YZMauc8CcXK76c9Q4AQMbGoPJe1vXQtzY3tSDtwU3emeGbiqMXcPWzy3o7B3n93w6oWg8tf",
  "key12": "3yohLe9dLrQHvCJNMEgfKCmFpHRvBW8jD86HPtj2tcMMNsLweur67khP2JcXnmoimySU9o9Gj7h64v4taEkcBC9p",
  "key13": "38StsLGMC1Ld9648cddLuSNvtrjwiEzjyEG9r4i53sf24ffNYErobnoiDDkG5BnM2rnzveitWi2eXmmiygyPF6Xw",
  "key14": "4wY8pFu5SvqsWoF5DrTFxx2PXLPQjEW4nJBimFUyRXBGe3ABBL4Ng3XQsx4R2KFzWahxXAvZrgSBbNgPXQreAhW",
  "key15": "4ebtR8rXo2yHQbYj5RaPPbdwwevu3pYYo8bvs97hiW4fyHbPrGGQynmwEowPVeZw8Wyc3hQfj1cCEPGvgaxXxngw",
  "key16": "2METApUa2UqNCszv7H8ViGsTcLbuoWU8YkqQKgLxTEJiiUKU62AKdpjtEYbHXb1myLA9F31Vd1y8FWmBLLueLjtK",
  "key17": "2G3MFaApFRUFUvtM8jN7GznxGHK1ixTEBrM5KbT1KWQjVkD3fN17yxNXUrJmgCJ1tzB5DjpvvgF9WGotgYWT9tu8",
  "key18": "xsi7X65iWVg23TZftXn2z9Rt4rb8PsqWN6K4Xd1RvXvVVdjjQ8eJucZewebNpJdRqHgB7epG44auad1y2nH8A4Y",
  "key19": "4arZQYWagpxDuB3ynViqmvK6UWUyGG58S6BNpNHsaaaouHCSvACp8VTtwtkirGfSZDThR2hhcQQWeYM1nEfwajAo",
  "key20": "5C56qTEaBG8qW1yom2pZu1H5Zxbh9ihPN336h7pDm9wRjBpdnQomDteJE9wSx3d3B23mywD2xPrgvJcqGoqaWPq9",
  "key21": "3ubNVwrGL1VALz65CnK5t6MZuvQxYyN52pJr7Qhr9GTrNchd93DiDP3q3B3JUdiQck7eENcmQbkxVP4wHXdjjhkA",
  "key22": "kSjy2xzYvWiN39sMnuNTyi2vfTnWLcPwX3fwtUMb41Ki5iKNyD8xTJQuYuZJjmgtjbCtN1S31LDdQuNM8ntdfds",
  "key23": "2wDJwFyFmqc6e7Zx6u493zYX3hk85e7qy7MdpVNZHZztS7nf5HShdPT9As7LADU5q49o9FwdkXvW1oDWfLYnvRpf",
  "key24": "4yqJQ6QrkkvKQWCMwx75BRnB65jFwbR4uq4bJvyVP1CsxG36wdy85vAUbVWYNpAXYhRcugr5WkoKkEFjoWuJruVf",
  "key25": "26YvD18kBNx13dGyUx4sShXGSdSWSLGoJH9qN9SWTTeqxbD9rFLdLG1jJSsRTan9yFos7W1fWoearVWDH6EztuqB",
  "key26": "5vr4wLSNiSToHrxZPXo6tUGub9tqKHt4DGhXKXqgKdvucA2aZFGBS7449pLAdWtNJkHYPsSEx2pw77HstpfJmQeK",
  "key27": "3nch6uiJYrK5kkXGSB8eu7Z7azxDbQTEXHkVfVbb2dYb6HhzWu1nvLo68nwopHvtimc2EKNi7wciPXnVWJWDz5tN",
  "key28": "3euxLWZXC41Vh5RZEoN7q4eZzrrtjP5oiGJFyTdbhSVRXXudRaYALpvFnJgX1Z5wHGRJ4uz2yQUVjMZfc8sbHvYp",
  "key29": "5PzGtWo3s8oQVQFzW2Q8nhjxBhrWyarSb6PsXctkK6D8Yv5miRyPSenjboc7C7KtmerqvTmfbJVVzjsHD4UHCuab",
  "key30": "mnqy39GAxn3DieUmtgW2q33561AFmU4fuwxdYQvDZun3unoPoQwSyuSfKyqGBfHWiGZbtwe6bDztSETGBFqG9QE",
  "key31": "31vEmVcNmWwGx8dSPuLDwRXmmNsBsgiBDtXZQsAFfcQjT5Q7onQfDvmSs8b67N4hxoU2za1n8DSNL6pN19fTpW1j",
  "key32": "5Ez8QqNw1N9UH3MdZR2x5xqUgFQtTKVnUcc3wrgc3LYVwwQZWuvTgcchFMPyApXvT86EQ2JyfFLGeKDoD3etHjLP",
  "key33": "56HYk9pFTLUQt9jeLGAdeMYBFsEzYmr1oDQ5kXedo2bxSD6FofCUiCQ436wS6QvDvvHcLNwUFE7nKxuVuuYDAGBc",
  "key34": "Jf7KKuPVATiK8G49R6rUozNriXsaffFYSCLA68ff4S3FrYRgQaHP2tYvpxLXqTGziLwAsVBBSgoRLP9hHwpKQX6"
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
