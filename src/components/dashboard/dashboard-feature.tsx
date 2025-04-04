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
    "3G8CoxU4SqjPsKEWAr5EfCsJQWCukgaEZww5P3gfjhKkLNzQ79TgX11muSJYYy629u65agcBVGSJT8tXobEPxA2C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Uy93MtDRJe5LwbzxK1KppPGkrPktbXJmSkeysXJZuCLzViWNFuYMrJUGsEGnCi3VhbxgdN7ESnFfMMaLXn1cchL",
  "key1": "4Mde5uHsL1Y2asTKK3hcH8QtvsWHpVhEXpJAricLXP2WvJNqtqWQ7C7NeGCDHqAYC9bjkaossktErrx8VL5ec8aT",
  "key2": "4vHPEzrxSmAo7fpnDGqgyHn72VLFa53rZY4z91F6TaVXiXGBE6sPn37vLWXcRggSSRDrsA2bmRJMwLw6Z5VmwofP",
  "key3": "4N5V9zkDUJ4o8XP63Xx1gaqHCtwhmaWuK83raXtnRqZqjocw41QceZpkGhcCwpEyjcQA6CJPu6yNmKMvxPbaVkV4",
  "key4": "1d1JhV2RG8KyBsrwvWvaSq3iGKoLeNJMF2KTUF9ndz4o9cVZB8K4XjycsyNnnRPAaYtXWJpy5Ranb4ftHX2qJar",
  "key5": "7MywuTyzYsAoet7Ti2GHVsCCpMMVgrL15CdUz9A14k3rhAHDdao6rKyoZk2nginD6htVj6ir75ALw1KiD1cLzCs",
  "key6": "2f1zpcL5zq4VMv9Y7akYtqm8yKdStUF46QZ1URiFv36pZuEGnBPYAcL7fB8nTCLGHBmJrayVT61Gq8EXwXGcMQEX",
  "key7": "5tWeiEfrv8gCgR3EJK2KrSFFgGFdknZRz9U8xYu78ZVVXKeKrHaQzgPHK2KG7U6yVP4uLGdV4uk5zNZFYAMa86Df",
  "key8": "2bnWs8vjNDZYve2xdBv7oZKQuLmQyxaLMdoqnB5ya4pnGXYAd36FvJruQ4CLMWY629D173rR4bC21NnNVq5QVTVb",
  "key9": "4nVqkUdVjZdp3a1ky2RUoJm2SYtrKwbDzPTHkT5HYGA56AoFGaftSwVAqFsy8eEmAzL3gspjAysHTxtwupDwPBWU",
  "key10": "5zzbBhkhTPYnHPo1CMVGT4yLHkuCZro9XJZ1qMehogiWvCK7j8YUsYyGc4uD4V7ghMDb29UwE9mSTz2qiVLovk58",
  "key11": "2kqLQHMZQyLZ7tozzWPrCaVpd82k213GEALkwvW5PMqGVaa3RFaBFrNPmfSqg91gV2UMXcbiL1fjEpFw7YP8p64g",
  "key12": "3CjRn5minQpLYpMwXqACuWW1RQYGknuacnqjSBAfh9cdqssL5bBSV2hyUQDnDPTE8Ts4CzuA9SrGaWr87Uy58NpR",
  "key13": "5xJcCSbKu9bhXgHLLWLkMTws3CXykkZvF7XDxzuPF1CTF54zYNLrvcTg8YHZuMHR3ormvQE43itezra42FMxG5Sk",
  "key14": "3XD2k4ukgw1mgSkArv7H96haqtpXYmUWDt6vh5vpLtoDa8EW1MRSYH3TAYiEFqFzQTgwwAsRs9BgiDv6Ypyr64vV",
  "key15": "4cot38yL1BH3TiXcTjJYBhpa8UQ34cawne3SVcb8xnS4MKPNMSr5cV27u4qbs3Gn5GccYQS8FpAvULYvMrqRw1NU",
  "key16": "PaztL71uuot3bC6Y2KWYowhmjkJigwVhg731NpwqeRJWrYBMVrJS7h1pUhqmNEi4RUWzLXK6zR7jVwHEaoEEnLA",
  "key17": "wVJAyfNN7j2qv3i2bEd3P8HhS1J9nxdEXxJ7Kxt2zekmrob5Ksr6Dt8eHYHbgkAkXPvDPn6TD2kZHUUzZbmZPPe",
  "key18": "5AjGLpJf6Y4PAPZDUm3EV3Y7ojJ3itwd3w5KKRWt4FXuGDRYxwTE14p9cya5SRYz3XMZue7xnKwh81SrGP7yBYHJ",
  "key19": "63qQ5CVJTmHp4A15c3FvRLh6GsV4GGrq1GCbUHN4rtNDu72aBe6erwi6cxiezyxngwUtHKJCaFFDomJPvdLJDxoz",
  "key20": "5pZBVEp3tsbhZjrCKonmoB5ohVdszWgMY7883zv5jKYoNsoo3igmTFi4GMuhy7NQhHGkQFnWg98EgsKtBvHrbF29",
  "key21": "wqHfuNDPspsPPymkJfrC6PofY6VvB4BX8kjuKtC8zRW8W7obD3xpfntLDgq9UDb2YwH9Uq6DHKwpvVywx2E4pkh",
  "key22": "2qMzhrywRC7J12692VjBZvFSRdRYKBSzzLZGZestCjQBR7cByiLhj1Kw8neWtsPnd5GW18nxGnphC812kvrm6eXC",
  "key23": "3BR39yYigBaLfgDwm3u3jFQ8SRL8p6T8DJ1huHuJF5nfMQ5heMLMwvdAVA4bN4fczfwVcmKWXr7bGmGiKvCL582M",
  "key24": "4XeAmdjYtdpcTRcUvJavd6XwyxrY9m78fwbjqq2oT75WuLmFcLomqMHKqbhPAoZq6p52fnpsK2YDGSrTaZMLeG92",
  "key25": "2meeGGh97ZVq5t2cuxkQJY9MVyLJ8TyYsHG6UA3jfbQhQg6rKFAFYgsFFzhGnHXX564EXzgTh7g9JUuSyfKrqJRs",
  "key26": "bKrUP8ozg7D7yKnz6tuZT3pdewJmV5dGDACjqqYDGuyxspgJXXpUoacKudqG59FmeJdTjvApyWf973iM7FWt2kg",
  "key27": "2yirziy9LHL3p7jpPiFXEVBe1yLmHMFiE1Psv84KKeWNjDGbeMpWQhhsGT3Dvp6FoRePQ7FuGkfLyQAMte6wTops",
  "key28": "NSP4oSDZXAh6kjWGw6CYWewDm57XDv8FQm1d7pX4kaHwn3Qx9WzGPAmS4dsMdYdLyXx9dL9eg8Ub2DDHYwGEnD5",
  "key29": "vGsr8xbnyXwKkbhV6FePXtjMAbtspDytB77UiJh8zBcyk4pWAq88ViMaPgRoAYgPuF6JoaUd2MB57mXMCmGsPSm",
  "key30": "4C6Uf5czDYEw5QPuGfDrhYsXUxwkLbnHJPGXjyDd9BEhABK65LY3gGc5xDxJxe8dtdLiA8FSrK3mjZS5G1wkU2Vy",
  "key31": "5xa4k2DDb5kfJ7D8dWAKr56rP66c2EiPLAYdEEjfwGZfCYXfPoVrmQjYjM3XZAuqTi5onR3D9JqUK5bH84YovoZg"
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
