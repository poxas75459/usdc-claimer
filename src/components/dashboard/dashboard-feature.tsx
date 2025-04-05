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
    "5Be3G6KEC6JJ3MKewKRAAUTbu9NgcAYfd1kTAXxhRHN7jc5ixAQBqsPAHYG8RWbvbDQQYwpLCFFw96FEyysQoDyk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D3WDLGkyuQttsnyjiRA9rgxfqa8TB6gAiCoLDJAeXaLuoGXYrCLR5UcPZfP11yHVh4F4RV5w5BSmnAmG4GkBfVY",
  "key1": "5jngXnqUjJh1qh9zqtfax4pp1Cbzb86xgeA2iyWjrS3bz6bcUntSAAwmkwnmPatQidgV2UpVW1Vj9uyykg35q4kB",
  "key2": "25C8D1D1hDAjJeg2nkpkRD9BuRMYnEyNCiZd8dMSxaySEDeLHXnGg9M85kTjjYBSuHSmx9LhGYvMcBy1ECkXzvAk",
  "key3": "2GrHV8EiwSSBjjazNrANSUXUCZGe1MQLmDqphkuHfSncga61MQXapwu3oULHHPAQnXUfpceQMdkFN8TvvzWMFMjg",
  "key4": "4uHsL2WbjdwxqQhQ24JAwFcS4JHDZtVhacaaMoriNbpm7HBHqe3Hxx28aaVgTpsnmHrAkM6XebkpqDaRLrHdwAqM",
  "key5": "3Sh8yKFHsEnDzX1bbmn6sYtXSrehmUkpU4DpfZgk9pChzDJiMA9K3ycJy2TiQSTQW3CYriNXcBsBv3FFHNYibsVc",
  "key6": "HnxPhghNBRURNEApDjzVtn6F7rF6eCGCC3448mATfz8nmxV5brjMg1LDMRAz9ER3P4LRjzxuLwwH8eRHkDbfiCX",
  "key7": "p2tCv3iKT7rDL5bYNVCinfX3dR4hwbHS2dX85EsDLNyuYTozCgEEoLehg1ycmnvFq35jrJ6JNh7rEKFQS5BQnGc",
  "key8": "5FENsenMMxq94ounEmsdi25qkfi76TWooZFCg5NU8V6fCL6Vas52ZHRucXxB4mPY5T29G6421GGDkMtQM3GEj8rU",
  "key9": "3YjwxcJUi436FyFzjmwGvxMFYfkmCYCnpKzKdH9Qru2aHpVRRAjGnfuYTSpFZDy9KAcDDeFxjJuMa5rQP2aXkN7r",
  "key10": "5n6qSf8qGCJrStFxfK1SN9APW3fBVRDg68f9raVxRwWXBzRu26bsjZuqsRzTmG5SCqQHzW9XBDnvtFxEmpapg2Lf",
  "key11": "2Tbmda2G1SUMPJ1w2GQNqGFjap2ietZ6EcoZUnxJJjEKuk7vCbLgWTozfEJSHueGZ2DorrhRd8i8fTdEB1sTgXhr",
  "key12": "TPJtFPeMzTfRJxUGejT4cA6caBosSDvMehxSYqBwUhsxkEGqxgeGZdTkw4Xrvs8xfA8hgRLwXZoXp9PNusScAPw",
  "key13": "3G8bvKfKPJr2ZPpNvsNZGv6oYg7NVBp8tVbfXWsryMgoBMnya7wETY3mdieZBxSECC35NEDS8UMeDTT1LUzp3Gkv",
  "key14": "38h5J8rCGwAo93F1ciHuQn7LBnusYbmEHxuPzPs8VaiG3NCmDaR2gstVvn9a9dbnXCcpqJqq4GGEek6DkggrTboz",
  "key15": "5wHYJbCpNjEz8k5KHyLbBat3xU3HYoojNwVo9DXYMiwqcxzS12MUuzP8UyAtPtSL5RsP66Jyn4BAgLP6b7y3L27b",
  "key16": "4sMNAGaVnjjZaYzWPXLv4gZFGaiJfAk9EnWqboRBwsR9EMbb8EeyKynJSEM8CDnRwrh89uja4t8FjznLTDPrPp8x",
  "key17": "25ezwGGPFGZuPzaEhJwWYNeYyt99scmEiFAco8mf62NsMamntMzapxmUhe6DDsYKuhyY2cZv7ybCMvYVMUHoynEc",
  "key18": "2VmotdPyc8kFBp9KXX38CujmeG1RYGMBt7VQcvk4jANa9Etu7LDAsdJ5KaFtxx3cpWhsfnUL5VcSAQNwDPtyCp9F",
  "key19": "5XzhzMBJA3TVXWmngRp3JKPArowPeVfAwRgUboEjZwDThP7UMiJuM8TrW2m5t2MChYHCLgELeKs4AReh9a6yf6ia",
  "key20": "6391vsFyZEb5GdKZDr4v4jbT4NWAQ57Sf9xGNR4LDzw5gLWgq33d7W3KZNSfpGxjfq9ooBWNpfo6c3WuJ5v8Dk8J",
  "key21": "5kvBaecEDgv93Lw1aP2chTj2dYtKHYBbqkt2gBAAfC6b5PBxe6NahY1GL1GRE8gKRefj3QQXiHhrws7xmAP1AKtX",
  "key22": "2RQo47HGhqY2ya4xSmcDZdpR7X2AubuVNioshaRU6tQCr9SgFsQ3KkB4EfRgieLXHDcHzJvx1fddwjnpawXw4yX2",
  "key23": "2xbfUVyGcNz5KquAJL5u637764Lm9tNFrUyJMdmynEbb8BKUdswk48Ao3edjLdJcUHRej2i47NF951kQmyh6wYac",
  "key24": "4Za3SNDuF1obq3YGmf1VjgXA6eMsgU4dFKcoy8DoP69QX6iwW5evi1NaAuJjsJFHBgukKMJtSf2whjor7kjTLYHg",
  "key25": "23pnL2jbcDjNdDGEzZH7BssjSuRmufruu5a5V9rHFd4Vsk8PWn3MXz73vN3ZAFNSeSk9TJsWjAafaPZCGuou8ez7",
  "key26": "4111DCu21ewmbaeiLgAA9ViLeREW7f69MZQi5tBoYffNTg6ThZrRad9GmePqDphzbAwL2LNgXa5hAm6fA6bB23Rp",
  "key27": "8o3NLdBqPRePXBRERG72cch4wKL6aiciAv1J3W8rSHg3NmDxG11FiEsaxyAQWmoJYqhF4KtfDJ8ec7Z85qACDTa",
  "key28": "kXQmWyZJW2BTeamrqbYMZj4NhNwtboXzVG8c3jmkTE2SV5gYCvyULRRQwy9mmdCBNepiC6UmAmfAsYrW1fqNfFP",
  "key29": "2BaXpJCp4pa5y6y7NQE1RP7N7nG31BYJxHHzCq6VoVvCXwpEZhrMNZ1MMcSfPfCqAA81nyWn7scQDw9w8iNnyPu8",
  "key30": "4BZjKKdUjurgr4BfrbgcRubAqen5GLYCKkG3CAuDpmBe48AbHM3tg9pWmscPWcZq8JP3P2MeprKsJntTnK1UBous",
  "key31": "3MU56dBzFGeq6QTCkP5F9YfNbFpGbzty5WzNTHELnpqf88g8afcS4bZPQvFKmoWDgzUGioLyNQbeK1GwJD6gm723",
  "key32": "247Ze2ahRjn61rqrvk9enbCcZpNYL3ndcnNWfYNSYajSJD2eeY9KUdj1vtksdjNFamXCp8U6qUrmuXyePa6m29Af",
  "key33": "5wciXS2DvyX8LGPRyeScwNJE9pyDPMVy2qYxyxsKHMtdiibwBRYvpv3bJx5YSsaMVCpVKaXQWaQtBh2k9T42XW7y",
  "key34": "iUAdBYJC3EmQRP6VPKhq5uWYPY2KZbGJA8CJXyvw5oUFjTrfE2Wi2LVCTYFF59P9TtCztqBzdeUfb36SzVydrrF",
  "key35": "2A6YrhdZRsrYFSSbTukZQJFHX1BkQ5zKSjt8FWrdgMt3BjJknaCjD8XfphSjo783qR2ts5CUgdptGNkKnTkKvoZX",
  "key36": "5TEneWtkT2YAh1ygCx3XCbQQiYiV4WzZSKr6FTyYwVFVEY2v6uneJqyKA62ABYBkz3u9gHShqjdhQ2hP1BsDfFXA",
  "key37": "5N179hF8VhQryWRJPdPAKdR7SoqLuh2R76qYL5smWHNgmD5qPgCiFvWB4HpqLfLj3iYVGQbH27X8mMWVyUrpGaVw",
  "key38": "45ybsEyKtCBt7noA2p4UMoqgHQQQkyK61Ujyg34aS5u8x9teL8KiaiXKBy4WeZnpaDnyEv9S1HWtaZxajawoT6r4",
  "key39": "4tTT5AFxgmJv6z5n3WUNBC9abfo4EgNY1Ah6hFZSADY31XifdzQCzXzzbFCTXERL16nJmErPkeNvmZQrqKtb1SzP",
  "key40": "5cBE9ZziUeVpm4ZbEoBZEhfEiDX2VppiDEaatXSQU4EjfAqUzEvwtAyQHZgdCdCvdsq8L3Nha7o3RG4eV14JeoX6",
  "key41": "SGtHUXbyAWZEd8MEkxb8dLKYKesgQct2wH72gBXgiFVeHzDvosFvj3PvUHiexG8A9D4nDTDzwCRENNXFwSfBff3",
  "key42": "3ms4RcggsXJV6eJTbqPpZoYKinhQDgTWNgywrKcgLjnr9XabRj7uxeipovJM4Ew8tJQzrfTUbMxyh6F1tp1CnZK7",
  "key43": "5kHeevPkEeh28egJS2gTMLM1PGry1677k9TYkgoarF6ewegYGigzAFyoSo3FAAke5YNrzE1M7PvPBAzHZAiuBWAe",
  "key44": "4wLHhKGjMsZCADyCL47XUikUtA1rZZsLFULzMjAJxR41TrJmb8n8zSS6ytpkv1esZPsRwsmWK5KqU5aGVN5Q81xC"
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
