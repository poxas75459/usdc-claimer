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
    "Ke8TGSxpbSZbyzzJrqp8G3x1t8NNSPJLUYAm3Le2mC8P2EdbGkdMk7sHcPZivUjMebAp8KeVEgcBHtuXfXVvVxZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nPDSKzevk4ko38nCPVguvktbFTQvagyvveCWdS3Xb7g2EZNtcnS7CzfFNXoHjKsUHqfwAaKhjZZzoKcfwSrPmbf",
  "key1": "4yEjzoSYyiVv3ZoJF1erkWmAJWxsn81Tg1VZUuVfC9ds8QoYDNezREAtrQS29YgXqN7CnLDa9LRGGBwctMXpC4x5",
  "key2": "4xhGEoz72D5Lsi4YSKD6zMg1SehynFrdt5KjfhYzE7zLS4reDLBFQ4Bhx8YRpS9DtLczu5C3KF3zf84hCJKUBS9G",
  "key3": "2UFtmLpM4wUmvSWoCZgYNFvBoYwQLgfogqGR9WEbAfvX56JqV4nQTNspHGP3YJUtAcJqimP1x2x6hMANpXgxEj8t",
  "key4": "48Y1Zq4SmjH2UjNWznDLSq4DqBnvhAYpRFMkbgzrungW4CE13SBe2GJvTVagcfs6cok2y5ZNNF1Ho4Rawb4aJiHd",
  "key5": "2saWaFJLtjQ6XSgvU8gk6GFtybnACo5XasEMa7Wi5bryD8EJ4w7z39FJv98aN4rGPyvn7UU6syaeKQjm1EYK8q6F",
  "key6": "2J8haX4w7eR54qwCABofnTZa3dHSXgSmmQ1k95yaABxA27pWgSmJK3Cvk13VgoHogL9uxAYTmw7xCEYctsHZXjcb",
  "key7": "4kpfAXBNsvn3cGWY56DZtVtiiKQYaxGwRz448RVdCKPc5Jt1q4STLiU8Lc4PYGYRQ1WeknVfStbbBVDPvZjJJTtK",
  "key8": "5gnfzc8SsuYJ89VZFBy8HmFFwkgtScGw7kSWpphn6exoLyhGcii8YLTQuNN8Jg3vycz9gzawL2fJtWBY9RtFX1jT",
  "key9": "29REqgXqqk3WJ49DyUPuXnLEqSpj59wrW2JUTxJ3tGGJhKzmC36eHmr3KJkYNiGzyzzYhwWzmnKKVkdVPjrPiuCv",
  "key10": "3NKFMLgTJRA4yoE6QP7stoicfoZ14155M65zL6k75RfhugDTvwxS66kDXtSiisMxp1XhhFL3VXvGeGiHDX1o1MFi",
  "key11": "2BttgQZjnHFxkPxprWsshZQBcdQkEWSinJHwLSgBx62yUiFc749QhEP6VbUF8F44DQhTBpGYKGxNk7Ux1K8zMSLs",
  "key12": "29JMtzBcrqnDGbW6EX3ZbzdpQCQBtXZN5noKA4bXtNWEjmgu511pGU5j5pGGPP9igYASNMicPwPpdJNyME5WDHsY",
  "key13": "3TN2gPFvKxMAMTNhSccMyKCQcJ2H8pecrZvNLmDyafiGpaHEFTpF6fwnWmxrAfeYW9XJRJQaqNvQ2uywS2JWGrQB",
  "key14": "3uT46BTTCSg7iHBL1i1BP9vvffadwjGTfhgo3gvcXQQoS2JPy1GMXawAWi8zSRZPzi5PrgaiWCtz6fzvUL7C8Qnu",
  "key15": "4twx8yh8heF63XL3WJ6DRVN8Z8oHZJH5B5AWZb2vD2XgMCuQF1SHLAUNfvWNi8m1RZszW28rX6Rjn482g6otBsy6",
  "key16": "5uPhTT6U8xeEkSrTVNMJ5YajCnqANx9hGvddv3anUB3yat1RqfnpzkugrB8XrsY5AqfKnxi6BnNsNBhDYXxFS94J",
  "key17": "4MBjQL8V2AaTM3pTmLehTdLw7XbEQ2UA85mpbwxZoB7mfnTDnzn9hnHo1de9WdEmseDmVnLok5nL5CJy8cQwYm1y",
  "key18": "Z2LrBaXerk2SSGMLqW5FYeVM9pL3EhtYqBqEdnbwcd3XPkBcNryxzxVcUvNJNU2b3ZCYRufyVFJrtg3yBbcaZdZ",
  "key19": "3nQV6fDXv32iMHcLeZujZs3Pg6oNp8KAkV9FA4y45W2eB1Mn1YBV4FxNFukuF4RrXtnET2FE6CPB16j3apsYpcDY",
  "key20": "4oZTwh4GZmXqYEYHEjdoht7wtPCENAVKq35cGpsiiN4CL9uEh8zGR54Ua4U3BPgKH71RnEKEpDgpnKLcQjNnoJ7C",
  "key21": "29NQ7SBmkjNJXxWkcTSvA7ekwpG8BpwtWsKnXvSxHy5abSLLhWUZQ8JLXPiXxLbc8WnAGNLXBkyS85ZPBxg6nhf2",
  "key22": "4EuTPfXbaBQMwyChbmjGMXkfFmNppYEGW3TPf99F7yTgbYWQJNrePP7SmPYMUisQ5VFQK1r9CQ4N3jGGr8qxra9u",
  "key23": "3zdhV3jL8zQfioreHXQdBKK3iXUQ9hoMh3CooEDNqRVpCP3gczvk2jXQmoHaBr7Bqi9BV3NTyGQeD5KqTdwCmGMs",
  "key24": "61f1mXxuhq4UXzWDhbsMp8zKRFZxUgxbPgScHp2GZRiEhhw7zbtatbncjvgqyYqkv9tgUR54v8QMtoaUw5ajnNoo",
  "key25": "2tLfGVteumzritVwL4Mx6Qyn1Cw8aerVb2zt2JvbrayQCK474oQv7CrutuJj4PeRzrpxoM2EAyZvSzMMznPxdTM3",
  "key26": "4Qc7yHWPuyFUEHTPKJPUCB7HgLkJYfcrUVgJrvNAQLwx61nsspmzNhL1PHtbUGfcAiyNcgzhtuiAA3YDj8fdmrEs",
  "key27": "2xEH2DTyNgm8KrLWA1cuerjDfe7bVLKdBkvqJFJapw1pDwnQsBHtaFs3JPBKtVgnAeJVjrAyLcphx2Z1NKTpFFGd",
  "key28": "2Dzdogg4pm9Dsv5pCoMXd2iRJ3Qkc3Woke9nzF2SLexeg7Rh6WQaT2rk21dnNWWLFZyWjv27DALECqgfnVSHMfSf",
  "key29": "2gBwcuoxA4rs8FuofrGMG6HRce5UyUUE8gkkfKKc1PGhA9e4ZgPrSSxkemDX4gLuLMf5sbwq9n73LztrSgkTjpoD",
  "key30": "2ZJXwntNWog1Pqzqxxbd6h6cbJQ5mwMU3VDqgMnqUuuGA7MDwmPKtCmJK8oG3icwYXpzUZeKuFwgyqh8M55QpP1z",
  "key31": "4ykKHTnDW588yRJNv2SzAQzonuFe87aVPWcPiZbQT6C5Ue1uUkNGBgWqhtuPAZAtBqhwcV4QCGWrH1uxx1YEuK2f",
  "key32": "4Da4QH21ptkFW9EHSZtf51JEUztJbqxH5V1cQ1FTEG4CQNAsTADEmZ9ZHzZedF5sdpaquDpMb743eb6Rnpdj5mEc",
  "key33": "6pExJ2ExYHKuTgoqPk5PHELsCBKGxUQr8mmQxFjPFyidCGwMaAcxTEkHTBc2teb2QYAvd62CmNcBH8uWz1T1g7d",
  "key34": "2EPAkpW1BxjbLEzQ2hoFFgeaJPdbuDjQdoAuLyJC9AyEqtBub4cCgubFVFoJw3qT5WyXW5m68BpNNQJxsAczXNfb"
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
