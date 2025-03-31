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
    "jKu1zUTbSjaigS9fd3RXwrxXgLdXthARZSSuXZZSKVvMBL7v2SUdJpCTypKAfFbpeRETZs5XsZYHctKNwANu3M3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42yyiAYBWRro5dkL2y9GUyJJFzRRfe9e698Pebdq7qRzDEbmuouZzdppfg9pnxvynG6DeGf9YqW7XfGLXAKPbdq1",
  "key1": "fsMSTXjXtGfeQSUtpWj5vAVGgBxiNLZws8GrtTDYLmB66V7432CCA78nXAAAAyahTrAVJdkd3qsR8vNPkUKe66B",
  "key2": "43CDzk1nDF9c1q94g4MpuPaEHzHPubswoB1ArAopmCuW9f9Aezy5bsU8Js8nCFSskCnkVy6YivSSp2sqxm8bWxiV",
  "key3": "EHYhRwH9wNmpjzhbYYTUT12yDeH627pEPA4jXYnRYhtRV8prc4MTceGWQkcPXG1mjrYe7RFn7NuEqrkDXqeDywz",
  "key4": "RAfvab1nsfnhpEWTRrc3yfBw4sRdwYGJEnR4tr4K356PhSiJ5Gsko34FWrwEDx53WrrdqtUm6SFQ3ggS3NEPn3G",
  "key5": "Qjr3vMrBgebfzGramp92T8cKa75EMpn8UrUHNWrr9qMsaLHyufpNxPA8LaYT1WPAhXs7UnaXEACkfTpWpwYTav8",
  "key6": "3cnWYjT667Fdf8kyBQvhBTqpmJxDsKvBqaLHwVia1LWKL8NofVtPaPLgF27mWBZZrZibUwxoUH6rJ8RsZmLXp4Bg",
  "key7": "5HxQDQF4ypvnr1HmWQA44Q9ru1AbuXzBtcxtb1cJty1hR9Q388ea5zTitBWe75TsfvRPpFoobc5S5A16Mf4dWa9S",
  "key8": "4ufKkeWj8t3KY9a6mrgM6hFRS85KR2M6r2jLLqfAB5stGc1pFfrCP1nDn9L9RawTvYK2m53NJzdX69AztH4ume87",
  "key9": "4vZiAheSqeoKES45mjhRuJSUDoWRAi9PaxjzGfadsyH5V2PBUmXtXyuJRXioMHoCiHF9WB49W8cKd82zT1Z9fcWy",
  "key10": "5XgpSH9MXTHZZa4aj9KoE4z39gpNwfoFpzgMKQ5g7pLty1uSCJLe3T9dbxnBgCjH1M1zrLvtmpLiHHKBt996pWR3",
  "key11": "2CT7WsuLhX13r9a1iYy6HqS9uvk58SvZHqbEnyEzjJ6Tym3VEX41M5XdSABmR2aWYSh82B43yB5fucWuvesF16aj",
  "key12": "5hAcgT2YqrQbcL4QE4yGWPbF6RXtsMJbCRpVt7ixG5wZ7Ehh7CsBCcxze7Jc8K9qPUH4dgZCKfg7yqGXKH4sM4ix",
  "key13": "a2xPZSHcWXDp3jVbb1Du6EK2rSyAhzCfidCdWhM5uPqstaUWafXcxVYZqX6eTbC4SCemvYCqpaGka8XyeUN1Ajb",
  "key14": "5TwqW2TKDYRRrgaZEHuM7R2G4D2GthMURBeSaidu1Us4iqa93bR1Pm4c2zAY1LbELVi5iZxUUwZPht1hgtg9aw6Z",
  "key15": "5MC8TQg75C5o9RBnokxH7TMDrrasRH9RXhpTe31bU6PFZqbGM2x4BbEwbrAiNngMbDaShw53sk5cax89d5ubtNhi",
  "key16": "5bh3JGR1n5rQJwwFWHUrspYt4WFjzGQb9xNqRUK6SAid5SyPwAT3DCfinbRTtbss54ZdWnQ1prapyM5W4xs411Fc",
  "key17": "3CJ8yYrwpqFGU67mA9EvgJvjWVLb8hV7HtFBTfhtGAwDXX8RTxLnWWRJ6QPxbo9Xakj5KpZ9LLn7RTXZogjSLdPd",
  "key18": "2Y9KqYR7vDvuVnokV819W3EHcGfY1yh6Na1u8YwY4ZxWcLwXftjhcBn5i8VQWcvbR69baXgFGopX7DhiDbYhmcrs",
  "key19": "QpuohJk469BRZXTPmoqNo1etdf1Wj5cG3wa8jDqaGex34csfCYX5F1ZMWiGDVFfLg65Sg5kzXPfChfNNuRzCqPG",
  "key20": "61d5hrbLX67X6RpmsMAomHuNYmg9F4qHPrfKmN3e3qQPBXzrrG1AmZLzuvebqNe8PF6PGsvpUttxjAS5fJ4pwoyf",
  "key21": "5ahcfbi9jPcd1hF6vVQrYQfcvsDG9oh2mmXD321uNkS7yUgyoMPMsB2uW5vKDiALKQmRBmGSxLoWR21CLMX2dpkg",
  "key22": "P7mMB1ADqU86GdfJ6g33kSfcs6T4PDGmsVjRPeNzDJ6KUT8ij79yyurxu3TVazVeEtzvqULpsXKzEZJamRYaR1G",
  "key23": "kWCdac6pd6tWNLR7a6vj8jj8cbTD3JHMw9gXWG9Q5q9QBVPih8UrQ48Ju7v3KDTarekrr1Taaqij2eoAHctfw4s",
  "key24": "4NgwAwhS45zS7kxd4ssS6UHaxfRjthqHKVhufiBFb9Pqwrcq14AJVnHEpr9pBRvBcnbsczooDEZfbhQhQ5L9ov1k",
  "key25": "5J4AJ1GcFZRkpvXXsgNZEoh3Mg3uhANDXxogjzjAy8vARsiyFHFb1Y1KxUPpqDRAaS13wKEgBxUs6fANZWEimWEU",
  "key26": "SNEFMwjgJ66ZXzxCJZdjmCKjsXdP9RRirznj3DWAadd2kxDybjFs1rqnRYxCDtLCiznENcECKeF6yhydquRQ6Er",
  "key27": "5jQBzRXnWnAGGD5VQ7rRqkgTWF7ribwH7dp53CAAQqHLbxKobzAfgzB766T4jDFbJfD5xAti2sckTcDSSh2yCq5V",
  "key28": "43QjbGmTpXgZxtXHdiWKdN55iwL2okKrkvfxnd71Jq644eKvyQ1qRw94xrvw9dDsrPo8cE4iE4yfrvD7RnDJRGYe",
  "key29": "5SwVU46FVnTw1jQoRkH3oRdNsLyVFH56Vyj462GiVboYoqs6Uk4dDeCkPGvkoZ7zakaAknf1x7dkJYnbfawZ43Z4"
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
