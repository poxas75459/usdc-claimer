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
    "46292eXLeoXJfzfDb3VNEjpwf4MtikV7XC18Zd4nhshpvs72BZ9qHmHKKCt1AmF2U9ZNLunM6dw2BPx2M4Fg8brf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WC7X1B6oF3B8wrSAYYjutZNrZhL3nKY8RDZixs3uA36qjFT5q5KsF9ZAGA8w2ZAZEK4LR1D9tyvmum11CZ72mZA",
  "key1": "BAwNSRqTEzuR5X6oCyM7HCN1bsYZgwXWufneHsqPX7Pg7ivWi1GpyAxFFTe4F1Y6jZhf5FCztd9pqe5U8WMmTbF",
  "key2": "tuuLJxBbcdguP6WHqT39ch8TfEr11LWBE3CdN6nGum4VopmVo4AzN2YcywxhQT1NFkc7RiWZkdWG4iY4X2LfCHM",
  "key3": "wwvWFpG4DDMvHsoWAWMp8Mh3CZJJEignzSg1EZttkjcof3dLjxWDEU4EqYWdfmy9TuaBEKpWaZkHyaSUhQtnTUx",
  "key4": "5kMbBWV1BzsGzzuaAVsgEqMbEMP3sRKuR8wZn4Rs9KVkcc5gmRgoMkMpXa4c6jiEHm2byySn2zox89hKjeaEGhfX",
  "key5": "5gc6zWqeKNgpBMxjEwiHF8EupwuKCCJXDmhFhMLrzBnN3RXk38jYPhA4gvkYDS8hp4MDUYvA9AtScJUtzcQP1RQq",
  "key6": "5JR6q1tbBAfpxLZuR9hde19WG13XjrCv6x82BJAZKBYc1j1bw73HQRYF7mPcomGQCL2pShPAuxTzeJWWhRkWjdwf",
  "key7": "4dQ5HgwoBWkFGYwH6jKL4yyNohdnzhtwkxhYtJunjkbGdhsAan7926wAfUg3cZJQhzpggNiWrWjFEzxMyYdHFxZU",
  "key8": "UPaqtg4GTto86qFHs7nPK5UQPTvP93E17CzAY7Tv2T6DTEmjBYLApxeLmAg3RnekjmprawF43b1xUyuyuYMQHyr",
  "key9": "2gkey3ar2RYioevwrGepeAFdP5mW4WGzJvKHcxfy4YxDHvZHk325UizFzVKoCEzP6cuQqiEbCiLRRV8sm96eFRMr",
  "key10": "2edsimgkZQk1PPQNKtBoDMpzqtMgKWoNdpWmKKgtCa6HD5rFV2asdNXLUH6HCmAXYn7k1YKcuEPGhhziFWf4aMVw",
  "key11": "3ievz9djxez7yB5ihkeFhtSa7aYNZb4i31mZWDGpa77bN9J5m95UBcMhdDay26awxWdFfdBgoxhpRjwpT76zmD4W",
  "key12": "cd7GuxJvrizjS5XdjrmZAUr4i6urdNzaNmW5h19zaoPfUY7boTcX2sVEUFUm6c5nyozGqn3pucQ6Zz7j6Wdqw5G",
  "key13": "3JmdBi7uurG8Ue8cqKTeKN4wDQuwMLzpTR516PQMC3H8n2FYgi2kE2oeKyVhGJrnerUR65utJBrwN3A5vzvVCXMj",
  "key14": "5Krnx8JW98TFmJER59i1413EQvVeuUNDBurZjXsiLUccAkuPK5QJsKKFvuUHzaYYU89knbYGnB368eM1tKfWebZC",
  "key15": "5A49EUnQt4MyujboEjuydQkvKfS6HMXYucaiat8koZtvaKrCHkLqJpiJTmokWp8BhNaKMJryCY4vbPFeD9Byj2LX",
  "key16": "2S8aa5jfZP8Las7xPtMXaGPr3J1ZfZShKQZBaSsPL5QN6Thmxr9KigYt7UfwoCEdyEz4EsxCLadWKyQyEg7rxTTj",
  "key17": "Vd9drrsdno3KibrvWAUcufVre7AWubYz4kva9pjU3JK34VweLE4vwTsC4izY8D9dk98N6TeHgyAJiFYuw4pVspU",
  "key18": "5q5hv2JWTRPPtivB7YDaQaH3WfeJnV2VKrPJjE6pUVAV565qNzc4UVZM9oRWLyJuHQ8Cdf7719NkyqSFdaqqjNTq",
  "key19": "4ciKd7WHiDakFgucUJUGfsSG6MCg1d16dvFfEuyaUELQLxTjraEhRCmELZaZvi2UjFHavdNLgDNuHbHndSaGitcQ",
  "key20": "6pDznDTeV6fsdoVc2bnvio4aAKTbo9dF54Ww7vZvuTFH1413K4zf8XjhtbRaGYfK2s47pcJVMQQh4jiGKJVi4of",
  "key21": "2RXbqFUb2Z4bUYkD58F5926ekqEbC1bqX1WCAAtX8XRmfpN5P7YR7JvcvAHFt3rpv4Kt4aLxGW6HzNxjNnubYFLP",
  "key22": "2EYzJTQUXWKhYzEVvfDxBU9fjB6Zfuw2hsrgCfnicprvaRuLqvW9JVaHYshjppmZers8gQtdWoSyr5iX9aNGVeBT",
  "key23": "3njnFKSL2Lk4YK9uzPdvyz2KwpmdcXGP8giZcXhpx7iiUhz7qwQZkWwjAugvoYSY4DfWiuuHZLhy6E9Wsonx1B4G",
  "key24": "2PcsJ7CTCFPbkV9v6U15cFEFGAeEKvKziG9vNpeR3Ts5bC1UJUqvWc2AGLiCf87kRuXjMhDbnkabWXmoW2UNEJek",
  "key25": "3H6bghQzPihHJCdrSvPwQYpzGa9TeqJnLCBRv8JdKcQQ3FZ1H49fxVmJyQ5xaXLmBwrWHgE9FW7KQCv6RHqQQhtt",
  "key26": "2SNjNarJFXKZr6ChUbdjvwUHCJBUTCwSzgowTFjjb8F9RCyM1A2QfE9TfDuds915ppA2tCdsqkVtUZa9iNB6enRP",
  "key27": "3qZ5pYA6ggD7A237BnMXZXQp1BMo7okD2hmNkZDnpgAWmb53vXsGARNcnERmkSELB9j4HqwvG2r5tTBz4uKjvXPC",
  "key28": "GHtg8nvwNPxtsvM7U8qpt935hkiL6B5qCF3uBNWNoB99cAEZmy1PrWCo1yoSxKaui9eAoq22ynF6wJUUxN5j7PZ",
  "key29": "29R2cNKYcVcF4ygF8o94ZNuH8oc4TNdv1ZRsiX84YqyUwbNQhWz3YE4WQdLAi5ydn7fXcMFsSopRT478VzsMjeaZ",
  "key30": "4ygj22MRQFoWUHHYjkpmTEUiFcF97hHdwb2C9CfFzF5weKxmc3zL6cskdi4tw45crNJQcpS4RJiu1pCgqC9gp3sZ",
  "key31": "8qjLDkC61fZZnA3ZcnxJ4YhPv9MxYmtURvFBCbee1SZhqzWWaJQvBoqjrden96rMj75ycVxdsWpizJHxoNSCHRB",
  "key32": "4AocoYBvYiTAhyeWU3mw587W8g6ZZugFihRwFY4ySuzh8ijUh54Kx7HeC5mJL4dxj1gQMQBr117VoXzKve5UbJLQ",
  "key33": "5CkQ4y2cfdvfoE7DBza5Jmq9Bua8mN6uxiRtTNdjGgEp4D4LYdybzwCnhs3uWhUAg1XGhhdeuDRS9jDqVL3rSYKd",
  "key34": "4aaWQ58txi9UexwwfJjcphwVMP4qL7o9RdAXKuUmHEJoPhJtbqNdWp18qVPpEWXL2Su3Xtcnk5mJT5NgZWePoUd5",
  "key35": "4ykD1Wdb8NGZ5iN2heqap1QwijrfMxXdaA4KtxRVq7LP1HFRdF3EjKGU5Y8Zrbzvvytv2M9p8AAv4xuExoAJE4Rr"
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
