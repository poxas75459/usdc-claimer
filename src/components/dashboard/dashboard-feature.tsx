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
    "88YiwC213MQ8JiqthVARhA46nKjT2Y7h2ELpagfYCRhfRW9RBJBh1HLcRiARXZsXzdA28eesYY48JAa5JvWmBoT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HPVsLMaMeebPsgoWxoTtmr2Xd9paE8NWzn3jKqoHh1ZwNJXmGC72h8YNzvUT8hWhATo7zoyu5mkgrbGvV92AMMM",
  "key1": "3ASeQd31amUxKqVmsUfXThcDZHXiv7w4x798hXHUiai6D5TLwRKCfPphb2XRW82fcpFpJAn8cSCWHtkBK55JtkaF",
  "key2": "26UKEDvm4t45RAVoJRtbzwiJPperz3w7MzQYHGLdHJtvprF5YeWMqpHCYWsNscnHLeMcAaMBJ4LnaKdsBnSXZmMK",
  "key3": "7TwE3bbtzEiKtUUqhuoMkxNGFoazJqaob7s5YKAhzPW7TXnXH4dUcSeaxUcbRUZeAiRv1FJ6MCvarSJGxzCgHuz",
  "key4": "drtgGnUN1FnY3bR5eYxHfGsGexXJBobjPFGyBb2RpiKR3tiMRFDCFzdzCPiBuzkwmh5L88Ck3TkQKJJrtuNhXuu",
  "key5": "4YDc7Yc5oKnC91TrS6KWPysEHGpCc1icfEYVyYpEYMcMuqK7Vp29dJx7sadBmGU5zBzLt95RnNDdFgJkJWKELCBa",
  "key6": "4yxjgu6RCSGYZTELH6Yg8P4TgdnvXKNqNvyao23RwMbyF1aSSVmTYZkPdCK4ndZzn5nEc7wNmMZJELynGvPJFAND",
  "key7": "4ar6P26jzEEQXYRntnuWv8pW3FsJaD8yWGwt7hiihJVE3Q1u56Pm7PhpQEC8eiYiRxQrSCohWs6fwmewby6twBvc",
  "key8": "Ty56gWMkBzxaSYCKXp1ufB3EW9NU82HYaA26veceCLGpf7LZmiBFsWZfSHkVakNjMAg5NykCQeP4qAPEPqDi2eK",
  "key9": "3KchPi56ntJBRfZ5ZUrsFrSkGbyVHeU21s2rjJubni3CUyL6hXCafWZVTFne1WVfBZVKrMupTJwQUzpK52c4ZAPL",
  "key10": "2H47Yw68Gm8GRuymB5dn72T5gQcp8UjMFNjQWfnZEQN9qyLpW6yCNDe95dYHwbuJtPheGmNivWukeewjZwMvB2Vn",
  "key11": "57yJaV4Pz7dnRwGwvbUJmdPPHGxhYUkCDA6s81bNBNkSgZN569rTzAowY66VuKpRWwsDwsJUP2EPpZnVVzZbEqJV",
  "key12": "5xMLdHUjC1pQKQ8y9gZzM4y2LoFgzZK5Xjvbt3PfG1LBZhJYaikUTLkLrC1fGCX5gtBcmbgG8fm349ZhCaPFKXb1",
  "key13": "2cMfvGYZRFhE83FdvUUpyv48bKXS6j49HBMMKpNsmtxvE6dhLYGZ4t2YVfnAeyKntnk5mGXrDjmd7e6zLk2mt6nV",
  "key14": "4EUkBg6RMazD7JxN77nH41uuTmzhvopFi6WLMfMzw2Cag6Y5K1Zyvw7M8gjAKdcJrEWs1Gup6XcCj6F5DW3L8g6y",
  "key15": "2fipUDw1WtgHmDGCYH6RUmZkoLQcKaAWtqcXRJZa2b1i12eVGsS43zJDSTRi2sbEzFZaAkUuFV7SvB3ZkFLPYsNP",
  "key16": "3gN3VvTNGKhf2yCVsfXsaYsaARWkd4BQxSMnGsTvQevNTFeoUmsRmhK1rJgNS4pvf6Y5bZb6BtjGuPrkxJAedsHD",
  "key17": "33LFv9VuGnrhStH6vRgEuuT3LfW62q9f4n11mabsQ1yPjmiNenkaXGqSHwLFc8ZyoVDeWbNkFCUX9hHgwDwohSti",
  "key18": "EumzMUshFvjtaCGoxyMsZQQJjo3LUXTHCzQw9yFRDWzcunqYbZAf1tdwH9LM5Ug2pyM2wXafdw1xq5DgRvd795E",
  "key19": "5LceQ74WdCfXT5TAcAs4UF8VrctFbKupxMRNLEVXuyeovXzqSRNhSQSFFwz4ZoAtP6FYJU9NnwkCZ611GiCB1HjC",
  "key20": "2tBPMF8MwcCRnkfgpAa71gzYVESfRwnwDHS4RzbpHoRNEnMejon82j6wFmwKsA6TNmRZJAS4cGaajTHvhJFCnj1a",
  "key21": "2zctXTdDQi3n9PohXoESbAgmJdVcyXH7pkamTEQg5m7rRkEx2pVrMHv47dQ9H9hu4vtPwqaLpoGCYQMGjCPv9VVE",
  "key22": "2Rwew4RfyivBHcY9gETyeJBdJ4JU9LNQjcpWnRskLLbxNo7g42GzLbufUoQ4HwRczGKehoXQEiwt2udGPV5fvH6Y",
  "key23": "gB4rKKJqe9zpYYiZeeCUCHkaahWp8cbV2gUf3uE1DmnYQb9NTEuo16MSV2oa4sFrVq6izzoBXQgB5TLT18SBko9",
  "key24": "4BVL4PfdGutmMBc56UaLmZPr3ZmFEfXWAEcmLQkfsUphxc8BgQ9iaTTN2HGeQmJhADbW31aXCmSNZPRCDThs4pMC",
  "key25": "4tY9fdhx68gc9jd8bRkimgRtVpe4eqiB5ob1Dy83dmdszFZdDhKyqor7sJYKr6dcMGSGoGmith8WW7Md7kvJ7nJN",
  "key26": "3ayDuY53JmB6iVRvzKmSY6A7ts9Xr2tVdr7Kp7soCZPrfGdzgRgLJKUzuLqVPDaP8Zw5HEhwVrWXwhEz1eB3tFs4",
  "key27": "5hxFeuQ8EUw121v1G9NCMGyeg4T5H2P9bN6BaMaDYSiLw8mU3LJamqCfKGRGmzGrPkACmWw7XPEqpS1yYiK9Vt6j",
  "key28": "5VMTQoUyaxux1X5bMy3WGKBN3N1TDWKuf1K1SL7DzUEEyDYsfxqLxbP7tTjnH16eByo4HTVzqWdJLEK6PWYx3rj9",
  "key29": "3VGyFP6z2VQg3tzyHkGxzbUxczrzgbGHNRfNqDZ2Y7rrMm4SYvaDsHmAER3bSwi7yFLWCNyyHbRedeTsKU8rc4f5",
  "key30": "gR1JQ8xP84dKWZ8xGEYxKAKZ2r899wSVxVLZJC9HToc4UpQhpNsvez7w378CEnWDfBvi2AQRscs2mut4seLcjai",
  "key31": "AupNwah8F1szqcaBW8DLMGfYRUWdmy2PAucPPh2EoX1srE2kUfnX4vBg1jXQj4VssphSv1VNX7qjVBxMniyBTMc",
  "key32": "24XLaTBbT4LmJn1Wvd6mUR6fmPdsUHfaKMN6LpSsQXMkmXH7qfgRLLhVoEC4gXhKQvvVKx6PCdLUhdtMM5fx4rGY",
  "key33": "5XUzGP777KfG1EqysXgYWCWPJACtttkDprfBK4VK71PMryZCPMHnA7wSH2gKYe4ZbfLDjtUZmk151KWdR75tPLU3",
  "key34": "f7c4jWKfF8oqM6DJGjfqKmoDQzXrSjFKtZpX4oGju6LwErtB7dpQsRxNSS4XrPJXDdcXvaMiDbaPUKd6asLxwzs",
  "key35": "3AUAcCxothDPcjTwMCs4sQEsWtuD9jrEHU4Hqn8NY7p6v3D9DNDhXkCDi1oSbVEZJH9d1kijDcg1coXcVYxun2sD",
  "key36": "2B5bBo1gRQf9nJ4ZVjUaV3Y4B9721FfQhp3HwxMXLCTGaJTnvtkwmWSMGy2g2LxShtRPddXBBE4zoa9xv3biZZ98",
  "key37": "w8PwS1Lfj9XWb6Ntpji49gbcnB4AZ93tTRiTgd8hbYXscy7CCnqRv2gGpF1fuZsqrBf8AkmoiHUKFNCoAqDtn9B",
  "key38": "opVD2cuLYm5o4JUfi99GbeP1AVp3wXYKdAKiQoYfzrHbJBWHUnsCtskYzBDurnb8bN1QC5xj2QAyNwAMcgfaEPh",
  "key39": "5EgJRGvbwFiLg3CecmohCxV3qeDKvvjyBrjsPfYZs5E4PPTQfSMc2z4hQKrufDrhMgekzB1hb8P4DXmUyLGxVZ7q",
  "key40": "2nENZ47U2EVSNfnSk2uxcZUcyAGc2yb9x5fitQZgoodRH2US1JHrYYReiUQujaoepGEGtE4v7baFxLeLjMbVngAS"
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
