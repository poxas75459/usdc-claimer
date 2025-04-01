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
    "5ip5tb4Fm6CjC1cv8d3WsHn58zF51N9YQEk3oAMh8E1oBk79iemWL7MXym938K31dA6qpibmHjYDt7Qc3oiPaDvR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h5WCpfRS9zQzFmuKT8GapMDr13EQykxUZ41xycZFQaVbVMyiijcYEHL82nrHR24yP5qUfDdGp1ZPuJG4uS4gkNT",
  "key1": "5tGcFEG9RCAGifhTXtmmKDupCwkbeUgUuE61VUhGE8ivfUiU8gSHm9NPQLXyAmgFr3oFTnBUS7yq6mM5oViqp4Md",
  "key2": "2bYGWsPDauLUxUJdGpaPivdK7EFnyqt2ixxsDojwDdkFzTyXosRsp4tsHhddj42qH6XDHmNg2aCUtJsR696wHJra",
  "key3": "4ZquT6mMxLYEsbQ7vKZAjaUyES8UaXAgcmMtgQUNa9P7kBx3kwV25U9VhqQMYRvFQ4efuqCYxi7B97gSN8zWZkrD",
  "key4": "4zsaGXkYSvMiJBfDsREWrLdukyenUnKbv59Uwk3vLSzJyLf3hcKVUdEyVF8YBjznSzeab2KZ6Fzr3DDKJBD6UnTd",
  "key5": "5SiaZLF7XwcSGbLYCVYwpFy3k1JGs3geACbnQbHSnywBwCz9WM1SYogCqncapGYVHnVBtvSnhx9pA4ywcEiKL3rt",
  "key6": "4eUvkzK6JeJYKdvk2QpS67QeuGxTYLXhRg9wo56oTHsCPyZ4UgKqfgexpH2iAd2sUkj6X4ne8sQ4Fjdmvcb5hU1Q",
  "key7": "KaQgxfxemi5faGCREA4YgS83aC1AWdW9GqzbDMyVeqC6pNisQCTz5gE3oRiyZ2UCRcaVWKxgw2HCvt1oLFTMmAv",
  "key8": "5jHqibxMjz2K9nia5kDUoctQzk8SZa1WFJAN8jTmgmeVx9QRfTakBhCH8UBt6SZNoqPL4smykYoHe7NptvGk5t5b",
  "key9": "3hPMiwBZEw4uNM3VpAGg9gvAGgh5eEcKzfWAtW9JwkK9ymNwxS9vtPmrLA1eX8evEm85q4m8LkpNwyaAucPNqg1L",
  "key10": "51uGa6pyeZmiDfBw4N91DusHrJ33D8vPgdzZj6Mu6nSmVja961trwTuazkBHGEde6J2yNwSeG4FbuTek6UHfPrMa",
  "key11": "3966XT61So31qe1A6u6WLHb4aaeCdcG5bq27ZBWMyuDa8t81iM1nEwrhmtE7xfCR7k6z2ZjpKApK7y8UmD7Hjv5u",
  "key12": "2Wnxxg6zJLjdgsmP3H94qprJfpL6ZkqUsYpd2hhBajuntvdboS1puhyhLK6JnVx23FQikipVbqEVXcmbk62XFdPz",
  "key13": "orbV6KfkjpNeThqsviCtHAqMEK2hC4uhJ8Cw7Tw8tWLYaFyk4PyapWeA19t9PkhziDBUiQq6kSzngFpsBs4pPMh",
  "key14": "4AZj4T9ZvvNpnvApsFLoePwUXrTZYEXRSAeZ5UFCjPU9BphHEThdG6qSKqpbb8X7ZvRZK9BW3NSC9pynL5X4P8Jv",
  "key15": "5YXjwx38kxu75ZDWjDD7TruMspsHVzAwjQQivcTuvwnsbRJXR2nC8fRjWF1anXXEAyWxHbYgXnGoJyQYqUvstBAR",
  "key16": "5r9A7PRJQvH5UGz8r1sSoKXJu3cPs3SK6UMDhfjhUk58YMKacbRE62gHYFasj1TwwM3Gh1fmjDZs8F1LfrNy3WQg",
  "key17": "4AQhSDZ1c24165bf4TtaSCdN8yYanBKwHTQs8mN2NP7NWJqCLYWvMqzAecvYw6QeBxGknGkUFvY5ZRmwas3BHF7R",
  "key18": "2qXvvfSRXqG43hu27xi9AnyE5SwTwVqNDVHpyLpVyK4VoGiQamB87UCF63Kk2Qu2UwwePmrUWTgtsuudcmk9BKvU",
  "key19": "fF3dd5VbBbX51eGJRsxQXxJBKzhwQh6LVC6vcUhZ6arSVujiVDMbX6H2ZH3cdk2GRGcoNjjgnZs1NLQFJovp5dY",
  "key20": "2VweXAm76TNoyW2euf8gjDKDwddojEfByiJU1GpZC4YmHHYHXGu9tpLLHSzBgfcdPE4P8bNLESPS1J2Z2pcU9oau",
  "key21": "2TzyAxY1a4M7GgNQDqfw5xJmEsHUm2Q3xk2nU167j6GaZiPCk6KtG3rXK5Y5Hh6xEhqrNKTTC2yxVFBhYbyMgtdC",
  "key22": "W1DazKBb8GUihD14ubRUyXj7BsAXvK2G5tRoNfMsNnVs177BkWYUd1ja6yZKNLHMk1JcRX6fij6BzSsPPyJGnvU",
  "key23": "54iFHrg5DNChbHS5VYxLbZaEwSed64ddDnLcNdKrk636e9QRfx2Kfu22BQvWohj4fDMWh7dC7NkcDKnSA4qy3s96",
  "key24": "3CT9zzZaHWGm1DkAbcpzCeuvTd5MeTUkW3SfrmsU9wGcKqp67b6V243ygqdHGuGvm7ekAFzvufUDu5ouNp4ucWyp",
  "key25": "58878xuhFwfkHKyh7rzLB4LCjeNLMZd7f5X4dsw81551GDjDFkBiVmBTRv2bYRrNjhzRPY7NfzJbznuPHQzsTWqX",
  "key26": "5FdzDZFaYfKZSNbZUMone7kxRftw8CiDZ3AgT96Lv8N1Hq2VJDt9KhXB1jYkGaJqE2joRzdz6E6S87oEdhm1UmnH",
  "key27": "A94UMLyKyCWgDrizB6sLEYKq3wJdT4M7Gkpbya7BD8r2EmQ8FREzcmTUA25vgD74Y9HjNuSZy4pcqP2VVDjkbgn",
  "key28": "5K9SxRGSNJZfshN6FFqsMjLicXP7pVJqWyytBPxHqUe2VhxxqZohvfFm1eaYFvuWYzLLveMFPsTvMwQxiSDW8iqY",
  "key29": "5B4hXzwvno7yTJ733oF7w8T49S47s7CfKwYCd4o4BdGVWFoW9hwpnhk3mVfD1JCqAvFXq7fDFG8QkwwHsdHHK8Cx"
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
