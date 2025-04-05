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
    "36iBsMb5bseRSp7UjhztaYm82hJDch5BzUH9sGeTjvkjQMVeSPVruop8LQdpR4RUwdSDm4CK9EmzTYYfMMCejw62"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ngg3HZNs3eVSvFAWoJSGuFcwoRa4PuBzfQahmTe4aH9hhwPkE89M1c8GhE5XTF36JTGf1TYwn9q9ixVszAsThW4",
  "key1": "2WA9fUhQkD5usgAw9fZ3D1VZu6Mf3eyLPC4ca9KtwGRYsFWQiG3eSczKHAReBvXxq9LFBnqUYK8FxErXVaBimvYA",
  "key2": "Yz1yKecqiRcYMan2dUBm1YQXAidLJ4PzsABziizQvu5tSYAuURiKkRoek7VhEZUJ4yeYo4HcjxihuEJvwABE6AJ",
  "key3": "58t4qk1jgBvAhhGZpxw4ZvRbrCyiC5rkdsxSFcNeRKwQajELec6ToXAcWGNg6YuqP9QFWKZoMGTsaCaG8seVVHX2",
  "key4": "4A9CDxPHHktdFLHa4xcLvXtcvUzpPzNTWPzX2dCaUNwx9sHuaJ5vByY2vRSVywViMxsnmRvSsyG7mDnsvXP9W6wP",
  "key5": "2ttszJon7xy7jLoFSpxr7RiSb2cZ49PELGcX2htuVesYvJi8bYzvaTAa21LrTfbdTeEdUaYpkwGpXmfe2juhtrw1",
  "key6": "24zRcxmANQs1qrYNmMhozvaFE1WqBJJF6wG84naDNsx6VfzEYNR7GHyEe9rq5iTPwQMw65wTyS9LYQgbAPANV3q1",
  "key7": "BDoyJcVfAkZUgvH4o3QM9r6qd4GdLGpp7Tozxx5XEoe2HbGKCPog58wmrXFNVok8VhtUxfY4NcQPVVkfKPXLEZM",
  "key8": "YsFd8wVsjAY5R9vfnWHg5d76qW9tuLUjfDyN5fn4VYPrPrCjdcNK9WemWYUe7Qvd75hRafvSN7aQcvvGhHPc4Sp",
  "key9": "4BqEimQEcfLVPwkssN8FkxB1tVpFPgyK3NNoEod2uaGhACrbfexfVLbn6AMc35PMMvJECBhYzRYhpopWYeQDaa3x",
  "key10": "45yvujbJ6wRtgi9G3Y5aDRCiKkw7F5ri6qP8b5KvorpQXDzJBsUQ4ffJx6sx6nBnGvMvqCsRw1KvCsNqUP8DsExx",
  "key11": "3uLArTms6EdTpHjMoVLqxZ57NgGuUSX2iPt4Lf5z7tzfNsuwEYrY7oT4a7Wjj95HzUNT8oxZGyoWpRMrwXVPnhvh",
  "key12": "3sSd4z5w612bU4nusvy6Qn8zZ4yRHqjDCKVM8ucAE2co64waMRuEYLY9ViZghnvFuGkP3yC3WApvj5JZHp5rroiu",
  "key13": "55oBNU7cazJB38yUedABB554yvWZcrdqLABH985oW22AZWfqVq8KBv63cjHmDQb2sEdGG6joG1WBrK4GpD1RVVPj",
  "key14": "5pBoLrCnQcNyjaURD5sAnH6351h3yT2kv737Msg5QJitTGtjbA4E4YP2VoozjCaaGxFBn4pKCFvBZPPFBb1wKa3A",
  "key15": "5KtRP2u72SM5aRhDEz6Lb3g71ndtxV5B8aRJpX93sVeRxyByddBYpWJb4yU8d6HSzurczrYFHqM6Hyv1HgeRoNe7",
  "key16": "2im8VdJzTxZ9roHNQFqRzqkRNTJGt9WyVfsazJYSupxWM7GjFsqG6U85WX3vY4nRZdsdmWfiRBZXueDvPUwD4Dfd",
  "key17": "5sma6DtzSrajpDTxLy4bCQucn1W1UG51BTS4k9PDQTKn5vqyA3gT3kdap5V2Ea7qEzzKYCTv7egG8JeqjTLLxrh5",
  "key18": "4chyT5YAcsqHcginfKXwUXgi6h1AxdU2Nnd941oEk8dFd7EXqcAHe87zm9gkJJrpQmN6jTHEuhyioErEQRyvZH82",
  "key19": "jvJb2ZtwWY5HRHvGQRNzxMg4fmcC6RToAV1H8DHL36Y44rwiqCUBreg1sL6HUSwK1PDLPuoXfypSBCYDgK59aZd",
  "key20": "232MWNi9YPMdDkjZyKigV4XK1fQAJT2baPs7S7Zk6gdL4H9K5iKd7RCs942cHSeRcmjieBNDEmUb71xCFfV6xAmQ",
  "key21": "4nYC23dsRCVTkbWFqZU9mp7Ys37EoUhFVBJeuuDUeSK8VpDPjBEkw6EXJtdPsWMTn5kR7Tv8hX3cozvW3nYpnWG6",
  "key22": "67UmBP4uUWjW3JnjYSH6fpQst7DsbaNBxefXHexGVfJ8GS9WkigbwRZHjXFCw5x2oHzsLTR964CukZNKANmSbBwC",
  "key23": "44ATSqT3yBjfzhDzAdD7RZ6xFRVyYLj5adUvYcr3WPoCNfH3hNh1JBCFCYRprMfad7TGJ4fEmYwkPvXoUAYtF66A",
  "key24": "Wj1QZvehNhEace93XXZB9J1kRr8cuPyHt79dHURe1SPCH4iMvaEAGNdYjoMLEz5RYmEAVTPpe7HkD3WTk8mWeuU",
  "key25": "2DjAUMfJxHqqoSZEzZJmUUCUByvPmdbDfdRbDJEBW7VzKZQHckkoJUzgtsAV1SZivbcoqMqEaDTV59qoR3wMPden",
  "key26": "25uh69ojZsBZrXsGh2VdjQTBvZj4cwD1i6piFpXeVozpFuTa54F8gHoz3FBJpyNuBynoWRX97pZCUET4Mo3uh8pM",
  "key27": "4Kh395bReRVTMv2otrQxD7T11stwGDbSeX7TCBcTmURck2bEr963rmMN7H3FcKVUoMwixr4jXsGGCcqtRgqAPd3",
  "key28": "4MAjQwZtZLjEJhedi8DEVPVmKr7mGRqTMxvYgHQPnVmW9cW39kCTgjSQCyFMjTGDDpGnfLEFp9dYKLJv5JWECCLc",
  "key29": "4ycodv8PBxubJUooRzvqYbSA1kr8bRYFj8uZCxutNwHi2EDoGghgTshc2qw4VM8dC1c5ATjUkBZZ7CZ51nn8ihF8",
  "key30": "2wCiuo51Li4a89ww6jN6z3gSDNSsDYZ4ASjMHT1tV8fWzfvxBxjK7aaAx97S1DVpXmer4SAexqGSEagMWFBUmeZ",
  "key31": "4qPdeGMaobfMYdsEB3mLxb9XiK6cRe5vqJgTAZVAPxKGDYeoaAcJckeUoCoDxa1abeN4NacYgYFtEaDLXmZHgQY1",
  "key32": "39eZgv8mhuktL6mZ2pXSwSJzSYKRMqRZaWCQCM3WUfKwvGce1TPMmFAp5NdivXm9y36a9mKk1qtxw1ec6fpR2ihV",
  "key33": "gx5CctJj8DvU8VzCfUNdpaAm5QhY1v6n4i1Pvdy8Nwmrp2ceHH9aGTzbsLrNZKoaXMFM5Aht6TLGAsmss2zDcvi",
  "key34": "2A74gK4Qq86ok3DM6HeyJi4FcCkg8rM9zXpr7WmLVeqb7FqgjGTXfjP3gWF5hVTyyFfpKrotnY9FdoaksGXQ6Uy1",
  "key35": "59MaTyXJY144McTwy4AVZqwfny4auMtCcjfVazuVMbpvSmFJm6JB7hGhuprM5eaSQXdko4oN5Jz45R4GWqYssJHt",
  "key36": "2rSmQVxZH2VfNNJvAciqwPFXqeFGBJtcRJSTBFVKtVQvBZ7GApmy7Dwmqo3AoU4LnPHHvJmGc9VkdwiGd5znqKy5",
  "key37": "LbPy8w3gSoGHkgCHTJg6HrwGhR1eMZXTYUoUsyXBwwrJY5dnXTbtAocYrtgC6jgdasSZn8w2f9Zd1uTgfzx7KCJ",
  "key38": "5V3yitoe2ZiU9UnSQS2u7efWNnBrkP3S2dWt7mKM8YqH4C73UKofLVFfQHzeqt6wgcAfJhF42Qg5hfVkSki8nVjH",
  "key39": "E1AjiZyMfqcX114YSwJiyLTaJNbPryafodiUsDpN4wZjKDgEzJkWRqTdwLPUf5Qh6rQQiSUeWc4VFVaj9BFkXNe",
  "key40": "3rbhoX6aiWZeoknMhZpKhL4cw6BuQaLf6EDuhmweRn1PQnpRH6wArVwcgZaUX1RmewHds4KKnXqyR89xDmVSrjHh",
  "key41": "4HgfNYhnY35gjMStjHsYFNRnodvg2jLJVGXqULJV5Run61SA4vMzYUZ8JjnXWF1noFYpoSYgmohSnzNsT95kxo8M",
  "key42": "4RNMM29YCkUs13tLppBcLaXpm7Evm6JndDf9WjQ6x9R4ZNN9PzYz5htQugqcMkpW1FdXqKbud2FMDF18Uzqp8JSU",
  "key43": "jTM74f9RHUN5vCPzrbwqofyVqCsks1Wo5uEycw1wAkZAgEErjEqzkEMknSaBMdmafLxwwbCYzjMUG54xQUvrW14",
  "key44": "5CUGtepbnSUUmABxDDMirS8kPDi4hw8tZWAjTsQr9XwZmWG2N7m4aLeDKuaBK9RJ5WA4ji7hWe4GCb5cCe7HCjnS",
  "key45": "2v32bDKUcjpvL4vAqXNiQ1y9c9zERV8PwsZvMx3ZJLKhG3WArKuFwPB4e4pbPZrzG1UKqV9CNkQmGFKrhhZvuhis",
  "key46": "5tzUk9ma2rfczExUH1uJtTa5onUJv1DGw1hqmfzTm38DQRrATwunCw1pKjSN9TwmWx5STYcXLUCyhbvr52fDetJ1",
  "key47": "461MDPKxdCfdyEHHoAk96rE69PkX3yVqHr7TcFm778wCnX93BErMp9paYd6JBV5kMr3W7iwoNdhLG6orqL8QpJGh"
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
