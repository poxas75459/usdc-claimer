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
    "4KwuXLoRq6QDmQB3JamZUP1hhHSQZkq8yxMpPYinBqFPgrMsvWJ6VUUZgLihpu2kbpJKHtBWV3qGsxqdEi64vBtE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37sD1ud5N3NtKouz1N1bZ7fXifkdWB7L4UQSP7VC8yNSU3oB59nj9ycx2CWmbJNqaZZ2hEiwxYxBf8xuBNjxQsLg",
  "key1": "2MK5YPRaFQ6cdXYVaZLQzBpw2qV4W7zacSevkVJUhFoVxRxFPASq9tbYMLdxndGB6vbuNXaBEWXqvgx6CYQYUPNb",
  "key2": "2QMyQYDGRDq5PKthGs86AJkDWK6jf3N6wd3BN57HkyzJ2SLXvADMRWhnRqngok1f87oBR4cYMhsAVwdeXoDuzi1q",
  "key3": "4dYD7d5qd96pEx3USKenLXKM2kyfZ1oVnbiUqHQzG9yQvjEkTW5TLAU7ZDBeiHoWoEFx3XBGE7TvtYhJNVybjsXd",
  "key4": "YKFk74zpC6UovUMncn5D1VL3bmPaXJHzXKwiq7465jxCvREVckKAmRm76iTQD2w3wku1PjTLMfagLtbxaKiUuXu",
  "key5": "5mqAJM1RjN3FTnEdF6h2sNiKSLLwzKHqY8Qw8RUya7UYJdkA1aKA7GneFvjQ6EGbKapk7SwEz1NgyveGg2PHYncn",
  "key6": "3KH6xkYiH98rQJoq7BAGtR6xA9tuw1738dKq4E9jvv6Yy7sTUd79nE92V5QYS6WhTcFkC3dEQT7hkQvyZjTLh2AU",
  "key7": "6nm8TQxu3CJQfkhsH8ZdDMkQVt8JnvVr6hhxoZsAiEPhjQzB4GowAdBRdvfASUfPNfk6qm2VtN8Lq4z1ynDUekS",
  "key8": "56nxGHRHP9TxMYqXtwriYbv4ZYss4Fx3sopiGnuEiHbX9mGB3NoxHwuksKrATvjeqLSkRrHwt16CtMat5E7gsnmG",
  "key9": "2UBcpmx2B2jrdJSgP4XqgCEH1qEa6maHvD7iHEnepUnefasQWhgj1SaUdQJuaYbuFK75ha2mQrrfSRCBhQsRSAqX",
  "key10": "3AZSiHCfcwFQYVr1GMzMDj2KAtY3HUWfrisj7es6J3yQWoo58zeMFiow2StqaTna1oBMCq5xGhpWhHuPmyXvHFXM",
  "key11": "2AhwSHXsJg5B2AgY5gYV1FRu8r9dX6tSQFZPXgCSJCPeX5jwhbAUaZYRJWbNNkFewqdGuHgAjhy8SoFwdkuQX7xx",
  "key12": "4Y6fuYA92E1rUANM56jXcT2DPAgRnN7BuN8cuEJJpEgmMEAu5o48uCzUT4DCC6peCqvNbqVtGeW87caHUo9PQtov",
  "key13": "5yYKsboYv6Vg3GKdBth82hzmhXHuyW7jyiyojNjPNqWj1cXMtpidT2isE2zSAyLNhcf67ShczDjTxBav2joxVdeU",
  "key14": "3fcr7qfHGeJCH23VfRiiciz7qH8yCtN13fbQPNHyfpXkvb7vnQYKrJUmkFiuqWhEPLpB15XqbyvfzBJ564EWYyQL",
  "key15": "2XM5Y8ZQe7Dg67JxoJ92yLiAcHWDq6smr9C2ABqwGSqjkuuPtfHZQijockDK4aeFgsTiqx4YEikfPtT6Stz2XEDg",
  "key16": "5i3NWM2zJjPxsFb5FCZRMVND6eRewTCr3G5fsApiubyTkbdMVha7HfEEB6HftdvtPoHzCMQbc9Jf7K78ZDajAMKP",
  "key17": "29TJovn5K8jnn6tSRuBGELPxE2dbW8WdtV4c5H1pHvjWc8qvrE2BK1wPW49pjxDbbWgf8ht5Y368wqGGAE46kTck",
  "key18": "3zJmdPwzD9NcrtNVVWVwTQvt6sQcrLwUDKjoyhE9EoNW9k6KSj2BDB3Riz2NgYCSJUCA2NsHJDFBpakdsv999wr8",
  "key19": "2qxW1DzCAPut7A6PW1zE97oMzyYjTtG4SJSaAdWp6JQUdn6unPXVACqvGqN2FvzZHPVmY4A42HjYzdrLe2ENmuf7",
  "key20": "373GNivRuGfeNonhj7xSMsJfktkyzRgJ2NffDTnwb7C1XxgrRQHtavnJ8NLYa7r2TR9LuXwZppmfJ9RZtwVB8SYc",
  "key21": "3dQczhnLjz9BpAgT4opfd243vjecZqG1ZVKfBn4jCwur5zEAhwrkQ6PkCDtdXGS1xUYLa5X6JT7MKv5YRGu7XhNQ",
  "key22": "44Xj3o9uQeg1SkLH3LSEen8wnExmN35sMFHtSL8LjRoFDwYr3k4facChfeAjtWm6HuvSWfpyu5HquFBiW5QA1QhF",
  "key23": "2wCyn2TR4o4qxBpMZPpk373L55gY3689kX3kw6xzDQPZVfJWECpFstiDGjQCEMjdNYxJxupxza35VphA92MMyDAh",
  "key24": "2mhgxd9fhRZKdMbEfzQGjbMcSRbJkzu63S8qVg6BnrCA7MhDxXEYGToseTJDJSGT6HKLPzyxFW4ms9tRJbzziG48",
  "key25": "4yf6sYw8SQaNkGsxMFMbYtpDbHjpw1e1QwN3BJuuhEzWJBLyCd5Hq6BNaB8u4nw3f71t9MBkrvsaB1Y29kUTTpEK",
  "key26": "5WniCn7596JhWK3dpCSGgYhoN4Lbu9xr3QmDRGeBNpDVgM8e6cTd1qQidrRquT4pzeRRCTju8aC3jjA9B4jcpHzc",
  "key27": "24KnzavJgcF79qassVDz69LsZbqaSLxbZ3BkxTuZ6LRLUzNaFBEaP2qkGVodufUvdTeDiWMABxkCCap1ooxyBvCH",
  "key28": "2LT8RHB1evwnQpVvQPh8LjCybF4w8LtwjgpCvVoEXkvcS7MR51X9ykwrUKhymxdhzDSGimSmnci1kQN7iW48fYSi",
  "key29": "2eAQHv4GAhu4nnxvbiuZgFZdAy3Hr2jYXNzkUpqxyArAvBcCwjpD3wzvPkoGseJkgStRnJiUc12yYiBPfAEWzqxs",
  "key30": "5swDbSfwhnGpEnJuLKKoKj5FWfdBwXwqZ8FZMyWSoQhyWoywNrF2dwDSHjHHPTK7KLDTbJXbG65eaANnd7ZWwwJr"
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
