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
    "3hoey8AjbBekBJdh6begxE9ZteqKwzJL4MH5ExgG7bKRipf9mSpBpYX5xWgXBVuysJTqmY4kSAwBTHygXsDsShFS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F379zZKrtaQ39aQxqcjtiigyNk9MnnnLYUGqQ9DEHaSRphYevMUaq4XvUVtW3hCY4QzjH7xo6JYEqGHHzuJBiNn",
  "key1": "2T1ycEKEgodXzbQXGUdPDjqdgcNnrQW2RVBawuXiHXVkeBgKoJPNDA4tjT7MWV9oxow8zJnyg8VdY8wDK8cp27NZ",
  "key2": "Kimq47FrXSM8cNYFJXFj8froFZdyWfMY4oLuCWdXMbo3hNkTwm2cs1j2Dfy5274bSa9Lo2zET7hwYuG1wTZaZBD",
  "key3": "RdQJwCbaWoqFojMxV9ZKHXbudDJVHtyrhQjMCfFgBdu9fcrdofXpRQvZZp3enHkLCMHayfJKvcY3qRGCTQi9M7z",
  "key4": "Zfg6VYa7jRQNa2dx3ES4pqouD7antXXc7L8xrgTPr1tCTVwDkatoazngDrQMy2Xo8NWTbz1RHcTMoq6Zg8rfZkz",
  "key5": "Nt3gWbErDyfLKbFahDXcJEgFXcpX9iRzYewcBZyFVpoh32Zk9ofgDQqNcZDC7TUxrJaRVXiz91wwNE1zDqfyj7P",
  "key6": "2bcFfx9hy49t6C4CbeF82aagkTVBXLYe8e87pN6RAnGjB3weCyhFeu9Frf42jwZJ8VC86GGm25G6m5afphPrDnxS",
  "key7": "5nVk8wQ8P5GZcofYksfA1L2NHYNiXPe8hE8UFGBiacMQZmPW7pkLttJvFg5rHZri6cUYKVeeAoXaePVAY1R6rMh6",
  "key8": "2yAGmJXPd5QcQQirLVQZzAH4mjJQbLU9fxMpNy8sXvtCejKMka1JZHxWWDs6Qy8sHBEsyDtvqQ2MedGfhtdqoLB4",
  "key9": "4N2jtSeUULPbSqBjwv9HVWbgkPvBkd6Nd8fJnNUsHtTooKixyz6jPXddEmjMikc1x1TfdgZ8j3XV9V36ibKwueM3",
  "key10": "4id3AvjRugKFqxE4gg1Bq9nvtbKZ78WqGk7PJYerg2BxuxrUmXFL5KebJPyJgAQyG9YVtX9VFps7261hgxGJ12VT",
  "key11": "2avdm9nskZUzhcKM2RVcv8SCdYqNfks69LA6LMavD3p92eCEZk9f1Av3jqCyt7UvxE4R4JRtYVHxWDXaSnG5fWLe",
  "key12": "46REZGFGA2DuZsrFZfDWqdpMaedqcgVBDRbyuZ3GNHCjSwtX9AzaguCr8oR8X8T9w2hZkskk5K7wxASxicGJ4mwZ",
  "key13": "4oKXgmaU8B3fY2swjX8GGfKjYLfwBdfJjcn1AwgYJezk9BJ8zZsojrzVv5MM2kHm3Rvg8fy7BQtrLWFNUaNeoUkA",
  "key14": "HYyK3hURV7AX8acEuXyroyu5ccSfs7ki6aVE9NR6R3yqb6T25oVbEZi26bYhCv96Tc8To78dDprRiiQrSSqkrGG",
  "key15": "epUpghWw7oeHP6soFAJrjhYk6bMDGcWtHXtV2Yo4MMHeJfRnpEgvudAsHCX9dTJenTMc7cjdp73mJAQDL27cobs",
  "key16": "WoVaXnj7uaMVVmqyYjFAYh7Z35CRChmsPKZuVeD4Cj6khK2u6zFrymbyADSj2LhqGUfckrpLKC7f32FKnB1N4RD",
  "key17": "5K3VrhRF3N7UYy96vnQHNk5YPLwgCS2G67W3nkqxbKfNFhyRy3AFT29udNaKeGtsKvkHMERotAdy6Sq8TLxbLxc2",
  "key18": "4imNVySoGzY17Jj9Szqnbr4NqUDsjyuzqrRHLhoTQtS6KXktygUcDFvq4nqnE1Dt5xAJkpUW7VbTwanaFVjCTxLf",
  "key19": "59xgpuWgdFqEfmTqzL3DwBWPgvpGGmZi6UZ25XkXiEhXbgB6zpujETawAHAZGoCdp4RuJ8yDvU4DscF6qYbpfzW6",
  "key20": "3C2yU9NzejMUgxo4HHYfdVGgvJMKZG9jER6LuRvBMHquj15vwPZS9C8p1Cy8sSrXMsfPKzKkzcSWRruKxPEMNib8",
  "key21": "3bZo5u2Cu8NGUAuJiFbNYdJZcunAn6e2ooth4AqNZtqvmtkSRY8zMynjaikMbBUADUahzqtdEuuNemb7PG8GLttH",
  "key22": "4ryKkXzaKaQC5htAAuVm2YkHWxRqpvsa8pLccgkexZLkHz5fyYEYUyP11YH4noY5uiur4umij36w2Wj9fHvm2op5",
  "key23": "4ZFhXEiCmv8qfSjbgHsdKYGsE8SeJxxXLdxuFoimy6XruAnVQJEpDZY3CqBdP3xPu9yQpE8ekJLhvRf38MRedgp5",
  "key24": "3AEgRqDxYHE2GmGePNHfiyFcJzvp2eCu9hYvjqzZPyqFAk9rCWdniD7sJrdKXw3hiHkXeNYhR5Rd5vhqQmaUu3Ti",
  "key25": "2QDQ2fHGfDT7gEbpVbT6A1jaYbUQpWEDrgjXiU28v1V7HueBit3jKYq8bvpGVDMecHuN3ZiM2TgQj3amt7X3mD9J",
  "key26": "3SPftPzQ2ZxNeSh2qADbVv73SqJq1k58HsCfnUHfeFVbM118vn6i9btYMX9WNrRjwDyseasbSZ1QN1CPis2dshpX",
  "key27": "51AeEivR9tmXb7KXDR8g3wfNY3G8Lgo4c5X9JRTWAQkEDDLfNNJPW9zetr4VVBET63vbgSZjn4sTQ7nWA5GAxYFr",
  "key28": "4m9JomAd4fqSuZmqnZdmdHTtFc1jeuA4cRfbMrQhmAUbBcZaBfc1XADFVfkzZhJJL6c3s6W8mo3tH2GSgSXp8Au6",
  "key29": "3rtQb3FsQ8V9zBn8BaaHUhJk9LXPjiMS8NbgLjT6Vt8wy2JQ8hAADxSnEXbPRamiBRvRAsdzuuejMHQTGevkP8hN",
  "key30": "3SASaGf1Qqh6UEnQb9UpjxokA7jpxufFx8FAJfdTa1Y2Df1BHZVPQizqE3pzMLmpP7utFpRFXU4Kd25KX1ChuwDv"
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
