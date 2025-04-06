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
    "58TuEUXm2wwr5tF1o6uyfrewbhjJVxJhWM9XuobvNcWuB5mhWyRsjjwEcAZxqYBqppCC5FEd85q7otEomYizywTY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29BSiPH4dumbGjbAJmUmae28XbjNfSJYTT78tcV1oHT22UgJGTjVGtKFgKqq1hswErYJFfEzftTx1TgTCDdoDGdb",
  "key1": "3bn477vpWurMxnNhV4DdgxynK1Es3Pt7WApvv9BajAyKAUzdmCoFPEPx15EP274W7WXvs4a631ABEhzPhg4Qa6ap",
  "key2": "2oXhY2cAZpJkbNzfbatCz4nE53wuhburt6Kd48ZLo8A94vM7M2puuYJHfff2mPDRbZ2uPhrNcgocsfWEWkdUBByW",
  "key3": "53THiKrW37WQLWRCLMJytc8SZdrECnjNmArfdsoSqh8MgbNUnxHUKuzG9XFH5dVdjUAb7hmx9KbjMV32Lc5kbvZ1",
  "key4": "4G9uy2bwSkt5dTtZLWYFxgPsvcJqwcz5gQM8fkEU6rsbFF3QwUwmUmbW2KCV4h23qzSZMU94hAek6SqZ5z89hYhV",
  "key5": "2B6v7wZq44NanV6W3Y5HxxGQqUzQ2Wd5kUXsruSdFWWxr92D94KcZzsKPdyQQCftQqn9W3pfeEDzG8cBcRqCUWum",
  "key6": "4i1wAuz33PPwcBV6a5Eey4Ry8NEBf5fugAPR859MJgyvUkjgwTnYyEYv6c7dk7tWLWbym6P1rhKVdRXjrirQZFQg",
  "key7": "5hGDXf4962Qv1SKiXWJzVSVnwNiurvYYYz7DEzhw4tfp4M2v25upbfQMxx1B9pdEofWiWLTt2FvCr3enwWcSFK1U",
  "key8": "2eDYwhUKUNaAz9qJQYKQHkRahzUzwo7UvbJGK1sX9v7xvyHePgMEN4wcPFKKmGi8vhJwU2xzmFP73BK2gqxXN1CM",
  "key9": "47rTifQyxs252fDc3qrwkKHz3yPSkGtfxwGSDvp4J25aBs2RjbMouXzzZw3Mj6xATDQQ1ApYojTNcabA6ZJehy4b",
  "key10": "2fva9CQ4PKKjbL8N7oHKvjPW44YnqP2xV39egyG8Xe5JYtEsR8Wh9juwq5vzHFmXw2KHxTkmFP6BkeBCCCHBMxs4",
  "key11": "PZVwrsM25Qsuuh6M2WZMT7PvYNuD6Hg76NFRX4qVYJsFojiaqjvbkAxXqp67n3UgULPTTETmbfZUvLMxfJ64K89",
  "key12": "5udjh4DiJZ94fChgVXkYef1Ehg52Rd4XJ1VcWcnVeWNUZLU7Fu1DCcRvX8TmrFiD7ufyTZTqmthXzi1vzXEQXRQe",
  "key13": "5zSAFwKgkpPw8XaA9WNTXrQQdfqsfLgjdHJsp6ZYcDeg5yqZFhVS4f7m2PjoxbHDwSbzWJhQRCEBnvRgsTveh9NF",
  "key14": "3NHhwNbFonfMWVkCE4u9k4ukrmjzwRSF4ZsJd6NSKhegqiGfwxbepCfhHXxNdgxfYCdq5XBmEwR5SSrdjuVRmMPy",
  "key15": "4CKSTr4gpSJNLJ5VizEv54MCiDVyWkK6HZbyxvZ1Knm5j62qqUG9TkUjjskZzE1NM2W61mHp5esaHPeWUy17nneX",
  "key16": "5dK1JC9udeVb5U7GiRhhbwkB8iDPoJjjT4LXBgANB2qRwuUFWy1LmPwaHvcGLf7p9rshNuaZVQ487uHrnENXwzPC",
  "key17": "2pd1odpAbv5W7zb7Cxpui62KJtZAFVSeS5FqMwo26eawHN5MnMdcricipyRGB1ohYn3EosrbCiTXygjaBtNQB5Gw",
  "key18": "5QDco8y8FbfNLDricEZrwD87pH7Mr6bamKqvthvx1jTVqQBGQcxq7Y1mfQpp6iZ8mGkp8FrSobjXTWNhsU8izUuS",
  "key19": "3pLYK1WimPcg6Y9fsjzUCHivA1b7rTpGsNkrJeiqX8qUBCTWvDL8bLuUKaDVjfWiDv8VgJF2Kr92Vcp13dgMoays",
  "key20": "37wuaXLxtoCXLc7vtat7iM8Z46hVoXh5eyjHToRE6pTZJQ7Q7hjuXk5kGRdpd7Bn6NgvzEkagKa3jsRHzw1eyf1A",
  "key21": "2mJPQgPT6BDRzCVj5PFRkTXzMiHx2A5K8UzpYWgawDyhwwcRbfPPkF8T1WjbH2KAa8wgyLDeSHAbJfQPHQ3fWa2z",
  "key22": "49MkwZin6fDMo3kLyGtCQu2NwFs6CScCLZotYYFbQyE8ygCGWTe7FzGVXGdcVhbTFeZq9MjvrpGLSfpyaYLhZ9Zw",
  "key23": "TNx6PGNFaoyHnMJWzMrCMsyxxAjHzDh2kMsCsV97dAfNvCJ5VNdpDjdu2Am9d7LPtnuR6QrQisK659NsB5gCRpH",
  "key24": "wYTTGNimeqY9M15xvKtWz95TR7zA7DYuYFwNCgvtSsmQKAq7T4QrNa85sxioNfPZqbDekjJvY1uV1wcUErhbWyx",
  "key25": "2MHfWS1iqmqP9E6cJYaq7PqxavqX4PJuYqjJErQ3BWftPtZYcZZi9ujSZbSqsAt1txFJ6TzNnybeWx4cQySmtkCZ",
  "key26": "3omUDbscXVGe2VKwgD4uxQLxXnUsbMtHgAtGEb4V884MgPjKDQCFjr3Bz5jnXPmU1XpWuEwGCuoQUMhQaDigvViD",
  "key27": "5TDKk4238FMgkBEd7SP1HFZZsxkjJn4WJSMf6Jmnc8Be3wwJV946u8y9Dzs7WEukkb7v6M42ZigESdgfrMN15mCM",
  "key28": "2WdXdbNJQkEb4N7m6MJGss1rchXVibjREod4RvQD4ZQrsNyS6SNMchYsnoyKtEsEF323tH5Dp9iFP6udev96MzLp",
  "key29": "5utCxdBH4LUDgJC3NiuLvumkdonwG85rmHzaoX1QqTGinPZ3tMBMn2X1XsMRYWLiEumzQPq1VVLyRQh7jAcCNogN",
  "key30": "3tryfNuyQt8xxX2KN5U2SNHDNAXKVxnx7Kyyuiiu9v9RpdyMfUXBihEAecnn9RQJgTSxH7HATocGNuQsc15bwBe5",
  "key31": "2yDmn1L3bxLBb6mn1KHJ75T6DR6jHUkvteaj89GTXuC4EAYA5czJrk4S9fdRzf8HaxaXWKXHDUpj3eCvwweUHwXV",
  "key32": "21jZZbZdYBbyNKKJ3gYuAMtomJmhbVroaQGmiJydSNEYCzCTFy5Jm6xyqDTMMXUF2sg79kGEqePfT4E7vuoXwzfy",
  "key33": "4w1Upr3QUfaFSfmgv7beQUYLgc4z9CUjAtMJyEfiPh2QY4LBNuRpkLXx6NGVZ9qpjxPnVPNdyJLi6GxfAzE9uafu",
  "key34": "csXHFfEqwD7Z5x69D2J9kqsHgVMjZh6tD8USXHw6VryntgGZpPJWvf5KDEggSFkjuHCyubdH6cjWW8vaFyryCLj"
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
