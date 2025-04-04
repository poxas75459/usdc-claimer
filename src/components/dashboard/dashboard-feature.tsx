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
    "PDw1XgeXHBiqhz6QBwzXbunvkEuG3RPeXtaaNNvRGwgM1w2LjPEvcgjW9yC6UcJThEvjaKcKchJy4s6sYkyjtwU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mCMwv6FPsH3RbujawQNJvUDqWor2E88grEzWmxdnyqc4RVxpMg8TWsWuPEPR2iPuPiMULTZRamnM1Jte1GYNwcx",
  "key1": "5d1uRvcsd9RNz3kFvdFYopDYDUaGmhKAHt2Kf4RKBUpCHfG2AVNRjWLNhLky1Wb8eiDib9D3MPTX7LwufBKjXCTp",
  "key2": "rqrebbDm5b8GbybHJiDUsRWxEj4L1XPwbHkxU6FJMpRr2bLQzgKQvB3ezGinfii2LX5UgewpKrsvCuprLuKQCJ7",
  "key3": "yjwwrk3nr5yWcwLPBQEggbyyQgmn36369QnCa8fGFPfNcRezWyrx2wo47bDm5ZmDrNNc6xQxS5hJBx7S5taaU93",
  "key4": "379UGdw7rMsqiYCEec5RaPbXSDVhJD5ajyi8jfqAgWQMJKzSQfipH8Rbd5eAiNqf4r2cHfmZ5hptzrX2oZgFFFjP",
  "key5": "Zzb7NA5rNmuKoHk2TWt1X1MJQLUYDuS4bUhHCZTsJCCmrRAtDJRLPdTE43w56RZqKHtAxSBVp7dxJN6UF8mQ3uR",
  "key6": "o7sbRHQyNRkpWg5bxtkdjt2Gkxie1kF6KgHNRv3NiyA8LSFeBohS273hJj9jmecm5TaQcBYbnDP9pJHyQhy6jcz",
  "key7": "5cSB3xLHydfrMM9bnxQExLg5Vx2gwN3tfrm9zJwWLjQAGwzucKvdDz3GHj2HjcKHkN9rURSBfKRNfVqi9WvDLPzr",
  "key8": "JTKR5Fw6Y3Thjnm4BPGsUa6W7e7tFaB6eMXVQ8ypMewGmuwVmEEjc3k7G3w35NiqGG3iPbS8QRSR7epCAzTiye7",
  "key9": "3Xa4cfU8k8zgxnCjEHu1mDHRatvSajw2eoNyo4u3z66jte5iZfgaUdbNDG3BYsgriA8bAHRzT9thmaXYNr2Lx8Ri",
  "key10": "5uRzJv3ywiAuDazExxzZgin9hqWkyScWGTBiShJEhaVKrbgZk6LXYSLVVRC2eFfAvEUGk6ZqH3kyUVwua7ZaBH3G",
  "key11": "4h1j1shQk5QiiLrwATGEmxmKrbJekHk2nBt1uzbUdgpYCQ54oZz5y21dCTybbX7dDJq16g93kYakHnTfRfsmMJpc",
  "key12": "3NKkzizdxJCWQ9z1viz4BcUaarAZi4cTfNUESDaYRG5KGWEbZjUQT1ZA6LbJxqDzskfnBSKQWs6goMQEBZczxvg6",
  "key13": "5foq6dQLJTzK127rTuSuYDL33RXTgW1HFmC38YPbaZE2fQLQiRcSxVDX3wu9fEiNMbNL17Ts83tNS3wddMBMbKuX",
  "key14": "27e6uTWgBFwDBcddTfYjnifABi15iCNtoqKD7u1uj71Hqaz9xZUhAA4ew8cgp6Hfn5zMCfunxoq3pMmhCC6c4dPU",
  "key15": "3w2uQxvfDWED4Uj9DuyHWBXJxcrxsHyegfgPnRhuSWV98TKwGLMJbXStC5YPftw9aRePgVmRR4hop6mnbwpzPDAg",
  "key16": "5dJwQi8tDkf4xQ8hcvw36HmbFarP1RqHnPaUvgJ1oefm7FpWMPfmQcX4LnKdgQnc6wQbgCZZHRKQ4WdhkTZHrmFe",
  "key17": "2goKrs9Gytz2M2EkrdxqcRYufrrffbPsAdeACD1r6zMDXwu5FQzjXQnapkut6bfmQuiQDTq1fDv8tRV5s5aZwxFq",
  "key18": "2WTvX58vDtCZC5fNun4k9fcs444YSt86McqwJL2J63Gg7CWkzyNQik2aaJ76mvM5VkmSsaUhyy8ZqDrLDT1hRSHw",
  "key19": "VXpVdn7CX6S6rzrxeJa15mnR6jMmCiowbWfPxJ6bt2Di3kTTzRzQHNmng5ghcZCysfDdt5mseTpQtcSKETm1ceR",
  "key20": "3JPXLSpBdjAwsUQi9bzp8KAucNqLrYCAcYEVnQuJH9jnmNQ39DzabBW8yBkQ53NyU2gB3azqAwdofbC8ccnK4k2u",
  "key21": "3XWYj5K2xZMFEzB645GbzBeTSZDaSNEDL5VzRRSXNPCCkNYrptpaqqzgfsVTN2gBiDSQdJQdBFMiGFA8kERWUzS",
  "key22": "4N893DeH3kWMALQozEEzvG598n3DJVREtbwfJWosiByfSiv18bmrrQE7KWJvLYsrWQsyCKJm6qNchMhTS3NGGvDx",
  "key23": "674WgMN4sBu8EBizgg8LFTqNVy5kHLxe3mjcttNk7SjFGvPLk1qQMnUzS5uFSnFusjG3vrGX2bhXGFognN3g53G8",
  "key24": "5U9eGoJ6cdWWQM46FYQXP4YXVBADf7uRAxL2Pi5PYpV7Tqg3wZj9NX7TMLNEntEZ4wRMf6PdErX6mrPgqB9NJJ2R",
  "key25": "4GXteN1aN5C8K8qUQkyMv6Asu51pAiToMxGRAM7Zv1hfTvq6U8f2sqyaVtzNDyn7sv2H1qgyso1sgcCSUEkKo8K2",
  "key26": "23UhtQiZaxpT2xAwSBQQa6c5H32M98qeh74ZZYUompno3V88AEAFBeUCKjHH1w831j9vbSdwf5aZmWCp8BWx2VAL",
  "key27": "5RKuFXAFfnKsG86uGb4XmaV4BhzXyqCTadubgfKVFgQ5LrpMzm4wvgejyGANn36k5aB4S9aT7koE3c2waY9U7W2c",
  "key28": "rcNtMkasHtYJSR6w2wbCgoxeNf66xA6n45heWSn5XFnzLieeGrtrz2A75dm6FUkYaeHpVmb9tcnRWpjhqyeSnVo",
  "key29": "48FkYwYbYW3MdYM8qHcUcxwHeboRJioNYATHbWQn2ZZrjeMXZUZqBWXkhCq1ZeHnqJJQY67TYiPoJc65WBNzsQQv",
  "key30": "n3iMvRZtxdLtWYErqfwoTD6WUwQWuvMhnH4zPq4o9NwH9YMa8ZtpsDxmUJyeZsazhPdCK4PmA9gC34NAmxJRbU5",
  "key31": "5V3sWxisFsz2zkv48Hxg3Nettw6Zy89cgZRaB3RogKFSuTWJq15JXdadHQKbKiEu6Mtv4PnrzthnDJ1YUqQrxCHT"
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
