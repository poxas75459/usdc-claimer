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
    "4JHAQDrTvfrMqZFgxv11SmiEFyqQMM7TpQJv2PuZM1ssMLzciNxCAvGSQirFkr7iJp37yqN8JQuFnPb47y3w6HV8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uN1QbUhaSktTGd2RL5TynywHYrniDacg78cr58x2ghSJVoLHWWeqKUAPCdkEeuDK1HtazTC5yFXg1x5TLAxJ5zd",
  "key1": "4H3he36bRQLt9dQroP4Eutwodv5HCPwZ4nodavVvmzYA9wrQ78FaoUcYCHziXDVtWvYf8ZQ4NWf9HpCzA19sVCYe",
  "key2": "3utE9Zd7vaADAVWphpvXz5Zh71D5mdZ8Nm9UZ3UvZQ1RdrqzRdxuHL54AiikTYovCMxzcinCmNmKs9ropnBcfgmK",
  "key3": "2zTyKoCgZ2bcXD9qtoCKiDeJU593rKJQvJp3Gsn8on3sSpnrvnuoo7KpfimZwgjvvKMZGEyZYNAyqHXzz31igYHM",
  "key4": "28PfVBVVc7gKnayRhLuGidRggq85qKoXJ4zHhhfca9bAChMmM3GoMw16cdhbePYiYqbPTwfHmKHWQrZgUKfka1rw",
  "key5": "sxrNkxCWFur3Xu2j5phDGMUvPDMC6K2VW5QV1FXn28wYWuMMb7X32rXspqXRkLUJw1PSkHuWyHWTopm5qydmtNj",
  "key6": "4JuSQxuZDNi28BMXhwx48uGbexBr8ARFazcCDrUNhEWR2KbQvLrobzymJmyifGo4XEHHJTSEVLztiayoEKa1v9Sv",
  "key7": "5VPgdrgdmCpJM8WVNAtL4P8qdQ4eHbSQHyyJe4xX4f8E36aYGsNSPGjdEtATauyDxDhv9VFGHQMjGymAXhhUapQZ",
  "key8": "3YULEEYTCPCFYxqrEhdg6tE5NsvfLsqveSZgL4V6YtQddzD4WMju9ryfAgCcSpQ4SAoDQZyNSEWS3KSQH2kt9zEA",
  "key9": "4uA9GjumJDwYxn2jU4ZdRFpKA1xnvRWMWFq9LKR6tpU7asRDJjs6Cu5W7NqgPC4m29m7TLuKEVenz1uu3vj4TK8Y",
  "key10": "4NH2Y2XP1PTwDZ1NNfkvnZZv3XQMVhbgJ2yAQANp6jqiUTm4mDy5Z9pwyWMktnoUdb6A5ufc4A9W6p2V8hdxN7te",
  "key11": "5CMHhjy56T6TxQyq2PaCK4jiR2gQuA3f2duKNA8k4Kwci3ptGnx6a9MJXQhhQEUNHsdb7DW34eE6T1EtRq2JX4QD",
  "key12": "4nLzkRzQcp95woXkqWCwbjuXxMi65ox1uDVAESa9ovaRx2cnRCrHvw7zQqAwtUM86Wcmmb5a2NH1Ak9E4mqX1DbR",
  "key13": "52mT6tszWejjNkYQKNMesZPhgScvAE2Fsy55zZPsKjQw8zDSE5rNw8TCgnb6vgCj2eNeaMWUjYMxbBDNsvWkNLHj",
  "key14": "3PicQ1ntUfsJ4YtAfY5CtsXfWe7BQGtLCDJC5PxLXja92Yvery719wii8dzuU4EsMLuv36iScsFBoHAiBNhnapEK",
  "key15": "2MxAjrriojEywrYMZoZrRe6b5gk8Ue5uioyzvZz99hB8vUtU2rhrUKjpK4onXS58rymthEff8Vg5phAXn92QB5Et",
  "key16": "5Rp8RuB263sfJdtDkDJn7Rytvc5cyhehvFhhCBzqpfaJhEY5PMDYyzefVXQ5iTzCHoZJTtfzMY8fhg5mSdtkoFh8",
  "key17": "4gtBpZc6SELf8H5hMKtLB2MhnzbdABB1uqpcUo4HgkeVnemrJHVy1WZQXsEm2YdqLcawbwqXE54vEfjWboC7FwbV",
  "key18": "4o5uSrssh1NJew9cCFnb6UTpC7Es7tDf3sH8hAiSE2QJuY242C4wE2azbNgaBsCLi9gEEKMKKQLZD5bSYUWA6Scx",
  "key19": "26q5jh8cFTEadUUFJdPP8Y7hnXSP8XiWUnfo4zsUfhVTukwnJzZvzshWrVCtB3PTzNJduwyzs4QtPB2vyreF98pM",
  "key20": "32Wphg7WP65efp9kPPQESzqmtY8qNG9Y3wR9ebfBw9qey7JFHfgX7gmBhWGL4fbVFkUPf1rUTu3eFsBqewJUovta",
  "key21": "ByCVvFqLccxpuibB6RRh23AFnfj8BuEdqm1Q6LDvpPVdXu2m3fYZnN2qqfTY7cPXfFyEWPTDidEK2Y2d9YLnBxb",
  "key22": "8ts3tJVDLBFwJFmz738tVE6urncQYebqJBELWvi4REUqwJRwzooDLaQ2EYqzCFee9gqciuMuYsZHj6ZzyMSykKh",
  "key23": "2gTu2WS9GbjwNvTQ5zMfAoQ2rGyyXDBFhyo44oCXYCjp8L6EEUmPBKBTe4DUEAGvikcF3NoHap14U4AcciCFxfhQ",
  "key24": "ySAp1aDEVvYbyRxxDauHHA7bFdG7zpavuRvvMp1LPmti9moicTg9uoGCU7YdSorQxvNBXJZfi4n71fxmLhmTtWV",
  "key25": "4wC2aLLTR6b6PWJ33VKXYFaLhasWc6ZBkkUaqQ39ksHDRH717EkDGv8i3QXppixUgy84sJAUq5J8Y3Q7yeHMV9zy",
  "key26": "4iCkn3SLZnd59GxnPrJaofLqZy7afQUcNT5DFNQnj9sZCWEiwk7tQFZH71erYeC1QdiE9DFCEYdAhha2hX6a9u3A",
  "key27": "4QMeiPuFUmHGMA4RqckJs2M2EvVkkNXZNAainqLsYkB7KH14L1mLfGn9o8RHE6YtBdNY4VhN52K7J9RRn9spEWhy",
  "key28": "4SWiKK4GiQVzebFKmexKAH7k59ikda69t2hY7doWxmpeLY2jNvQX8QBSnnyTTiYqrbUSxVmTYa5ZbS3FchuZdE6J",
  "key29": "58hu5LBdrnkDtGnVkwXAswuSco1pUt6k7fktV1oa41b1GknCtJyWjmRQMSytFuCzgm7iCx6VwafmVxp7SXhrjqc2",
  "key30": "FG8GAwcB2CeHrQFNGz4FbDf8AgFJrhNxBAr29Ug6dWqz47m4sEPaxFzn4yyqLVgptZbYkeCp5z1U1zdkmoDTZw3",
  "key31": "3yrDE3hwbupNJWzt49iG59X4EvBXegEnHBtiVeVbS5B1hnjGQGv9p5WQinPkDGH62wWhurgn4ATgDoh4Jhywkoti",
  "key32": "5b9dDs5MhSEgdPmgspm7PuFSXgcHw1M3uDE6ATZKcRKZ8tbPpe7NFTYhQUY3uxHshyi23p56u39QpoQEcv8Npyvf",
  "key33": "5D26Y2wN8kc98wdvtut7bUtdtzVmXVtBpwwimQH515yX4mjtCQXTRKLvjrgW4sNzsQpwtpJFYmeMPG5SZNgYDEEJ",
  "key34": "3ZdJYNXoHm3HXek9S8jMZ2H6u4Qg4jsS6UHmn48dHwxTyHA5Fc11Bzag2xz5yzGm9gUnXyUiMQ4AZzui6pNWdTJw",
  "key35": "4NzwEXAh4L8rQFEp7S3kYwy15tWJT2Xwrz9cEJ4QmthQFTgHFVeGub19d4fVkSMsF8uFRYkZCvjF6TnPUhwgNQsJ"
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
