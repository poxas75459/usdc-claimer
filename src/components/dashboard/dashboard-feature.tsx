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
    "41NQnYcQAxFhUT5X7tnKGr2eYXUFi6Bawjd3WptcHtC1VJv2xk7vVNRSBtmn3n2XuPXcUHopVJg76n8FWAdJ672w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FkWDbTDZ8p5PKudPJA4rRaCckc3JyJpSBjPtko9bXRtm2LRAs7P5BREypnbs4Ybr1VwsgzNX1FtMu3NinTz7Sbi",
  "key1": "3MBAZ2v6dfv8AQDVnc7DDMe5hLBSzi8SYuFLfcXDd87WBtaM5ndY3JrTZSW3m22uEJgvEH4Et73BxU24uKb8Ys38",
  "key2": "64tRDAAjrMTrLevjS9H2SCwmEqucsjWVkqW4ZJwkDFNj4g4Zd4PypFFS5n5qMWs1AtthDByA5Kufr496BoBPBhrX",
  "key3": "3U3Bz9rWHa6vQAYqG588444Pi8F8ZL4t7YwMGNKmprUzvTaxirxMhYM9KodZj9baRFK2ewuyR8UCnNri1Uvy5b1o",
  "key4": "4sPAuXUVnTaP2CJ6zrbLqmGnTRnCyB7u3uqujqMBuyxr21Cjq5uRHHXcXvXvrEv21SCsCYDmgA6G7b51JWuAd9HP",
  "key5": "2FLuHPUSyh9SVVkvbWRw9Y5zfhSdXXMK8U7EZmMXTutEvHdUqTWWD6HxGydNgabiyMtWKFx116KxASTsb28YBfkx",
  "key6": "8GeRitL9Bkx9yGAuFf684Y4WtTPXRCHBRy5xhW2qorH6DbXchDVQSD8fU1x6MLA6atM7kstbds6yWPoVBwe8zGb",
  "key7": "3S5NHsLjFWSJK2tsPxmUpQ5UoApZSRhitApwvc7rgGafFpG9uEPqtCxfxAY5mzMERWGj8feypxPhKvTRCrTDRDtB",
  "key8": "4Nhnpde3i7WFychtewy3Q72EEXo67ip2wP7jQJxrXXpZUXS6tphPoXV4zmP2Q7djmQawPsMJrXAgdLsS9YSGuSei",
  "key9": "prXsR5SgGsn53ZJ3LHvX6Tz6pmT1qZbww468p36wB9Goo5Qi44tnSvaK1JPfxp9NdmNfRqvhfYo5Dt3oNVJxh86",
  "key10": "34cuS14jKG4wRw7PHLi6Dc3zBo533BgyBC4wQc4hCft64jjpVnMRvYCCDsi6gWcaqqPNVXokCu2jdsqbuZfmmHtA",
  "key11": "4tHg9zBs7gVVFUCCx3fbUchSbv4GzsQMZTE9iuASr4kNspwtEipqCz9rQdekzcJU1o2BH4P8ed99bqR3XHZZVGvU",
  "key12": "PbKgwe9hXrPzcaAhn3sTPGHNQvg2D2JcXEFVgEK2TZmCpNrwyrY6Esg9SqyakjhQcGyyis9vXcx78cBaE8NKKoS",
  "key13": "EPxFqdHV9QSci1Eorg4pd5w4HtrEBygNnArAM3bWtMjp8i41TeDe2cyHxxX5p6wWqqZUtvpoUKdDvjSnQPAJkwN",
  "key14": "4EHt9QhHPyNXyJFgsTRY9EY3zHND86UcWZ62bpvY7pFApPfip2ViESiynM2GQP4pPrqD21qLoVvqbXQAz74mn5gh",
  "key15": "454vXG8TXFAvDtjD9qkuWFCLBQSjrKK48rwHbgqj4FgLNrkVNfsDuvuwJ4ZyWG2ieb9CecHzVyTjiG9xd8KNSMSQ",
  "key16": "62GGk4gr3irETGzgkcLGWnkK5RZEaNzLcGHkdK2MpPyznzjfqsy8q9G3HnM52ic9JRty74Hr8ffzNP8K9yqE8MWV",
  "key17": "5n24uipdBtuitoFZqP8C4AbEiExni9HKARLaQSdhDLHSnbniZEBg8hmmMwQpbJWnLUH4MpB4GyE4jdMGLJCPmHTo",
  "key18": "2WwiCW1Kg14xQ6ri6bzeW3826x3WpNf9cDyfpLvrqy7yf12KaMrcrj3kbe3qHLbm7TfP19ZHeRSGdeebkaZrNYJb",
  "key19": "4avmrg1r18DSRZMDAYWEQg8ZU8AieaWmuZK7kyVtE2WBTzJYa1VZCdqNtFuRShwaGR8gfwc1zAW8VibSGtMfhWgF",
  "key20": "4wZYdAgSXpDzLr7S11L4b6tLvUuQAFfJUMQj2w2F7N6tX9srdgkrrAQLx8mP8WrwYBy5btADXegZk6TCoGqGYVvs",
  "key21": "5JUJJtMXL1MefqpbdUaD3p15vD1SXXtWxg2qTDCPb3Jj7Ab9v6SDHxu1KxDgXhoH6UA8e2DWGxKa7Hd1bQbwJV1d",
  "key22": "5vGFE4WB8NZgHVvQaGv3bjhnwPP4t6wuCptaDz1t3vDV14AegEw4CYbUwZorYtWUiLwYFAhkJrXKqLcTzfrmg8wq",
  "key23": "53fsQUMqoBduZHXehWAkHMQcWxXQyPte9FbYFb6vTxFzpP9sTCPLh31zdYi842SEkt1dP8tbpVMBKh3ht2nS5u5P",
  "key24": "5yhhdevdWSKWAk4eUYGZuDdXcGZs6Dp55UF5uu8uJaHsqnAbGjghP3jxpqDTEdPmNfm5qz4jfStVdG37knebLhDd",
  "key25": "2wmwDVyQHpiZWbYLKsdkbsp3CNju6j9rCRgt5CA1hpLuPU4sjNM39wJNv7PfKmybqoewqFxYnN5W1Bn3BRFYkbSe",
  "key26": "kkkqe7t983jmNFti1LJGKdnNeKadEh71LbVoQR8oZoTde6Rm6dQJYN6X63rceDWwhuCV9GGLRbxqhY3XpkVEGXk",
  "key27": "2Uzey3L1pD43VdjQhQ8RTzzdW5pVf4AUtwWksH625RSZ3ZvYwvGekspo7tWXBKoWvs7EaMmPCgdcut2aJn3mSkjP",
  "key28": "2TR7GyfcHbEHgdWB1rAeG6hSf8iAszjGL7eSZhyvHQF9t5yi73ZSqrTdedaRWikW7KMe1AoA8foUexZYZ3DhrX7g",
  "key29": "3XU4c4sUB5vLEumDVqHy4RqHHCcM65Jowqs14UYyVe9pkkeYSQjfs8hCzMHjM58tN3dEFXvLmDfzYWdmo1yaVrU4",
  "key30": "iBQmU6WciSyASGudj1ReHJctG7Ecygwc9rLMgKTXnLWgQzLtXmdfaW6rsxAKAzPTuBK7WUTULAVRje9KAya2ojw",
  "key31": "4XdJsr7sntAcwCiCARPy9BnYmUXRXjyQMTPznDu8h2cdLn9vju2H4fo8W3kKehBjAhpNTEQbiWiZuP78888kqQqH",
  "key32": "51YB9UEtLL1bVVAYoMnoAYHpoonUZe7JAnM63TYKrjU7kEFoETSQwEkD6HtqMBMzqZY6WTvaSKADKSgmWL9PfCRJ"
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
