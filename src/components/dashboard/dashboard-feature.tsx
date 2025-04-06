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
    "rFrrtxHb5AZUQDBA6srDgahsKHF2Hx3AFuaRjE3yuna89Uy4oF7KYenFs8jebPkth42oxmGfLxb7EzAetDtykdF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Hqe1yXY85WadczeABEptDtc7yFfeqLhjWwKfRZ3jKgy6fn7uT7ttuVjajqCcmiaUXnnCG3NEneoa1kBaXqRPwmm",
  "key1": "4vhwpjCV6bwN8TocVDS1xtDD64EMjKf6Gsd5mHvbdYaEPhMoagoycRmCdn5xqMg9ks2ZiQb1amNziyBpXPNWnmCZ",
  "key2": "2VGQ1Db4xPfXmK2PKSfDTkvsiDoC43YdeA4fJWxNMUvFN6EtUw3sAA2fSQrfaJKkSiycbPiQkRv7cQQyrvQzFyNf",
  "key3": "44xWFn5yJTMZ5xhPgpmR4ZxLeb3wLSur6Vu5sbZRuQg4Z2FNZXiBEmVLrq6pRKavPiWnWmynpiZaqhREx9FCQxqr",
  "key4": "6ARPh7bEf8fWygHhjeDn6n5jqCMoshPgj1AgMmu8pZMCqUWuW99fvd7d3XMAojGUcme8ZrTWRyf7gFkaUNwDEVa",
  "key5": "38vKzwUY6DgeqhxthADPqrdvHWmUZxg9UCPSagy8QjnZBMf6b34EHcxhGgHy3JnYaXSBKsY948YT13WsYmPc1EAq",
  "key6": "4H6xQSajvLCa25pUKd4ZjwiGrCuK2F8zFLqkLXF3K1AHLU7hnpgZEBPbqM4bMw8FmQTgnf12pdrdsDnt9aN7TAWn",
  "key7": "2yamzpDm5ZKi9LiZMaCtTgt84AZjGunVcvkcusaQvYtsyBsAsGu29hR1U6rxYjczEM357kv2JuLAfz2NTVygc268",
  "key8": "5dJqV2Nww6jnC7schLsQdffA2osjLdm4mPgVL2fCmC5tgW6TXtocNrLEzNW7uU2Q8BmSVco2wRgkd5pCdyBP5Wjo",
  "key9": "2fC6C7qHvUZYo4q2qXr1D4KZZ23j5eiH8nLfsjFZUF4BjndxCYUC7f582KotZZ5soHHHC98UPQZHxW3g5F2j1hFJ",
  "key10": "5fwvCohAaXhnnywD7TohCyeCPFsH9PP8uXAzxptN3pZL91Qz2g9bBrZzxYFJ64nmpFdhHo3jUHB2ijbrMTEepYwC",
  "key11": "2QAh5cMKxKERkS3F619wcX5Vy7kjzgF9UYkYx1f5S3hXtuhBQRdfKCLxfrXrG7RY5ggsQ7zn3ajrsbgiaaFWF9XF",
  "key12": "GQHMe6CZnWnwj2yWX1uXbChoLAE1eoDARFKKYBHRKnT43TL1x3CoKwU3RMNiQmG7PTkQjYpKHsM1s4RmJwkyd9W",
  "key13": "QDtYBr2dLrFiuYQJuKxv61JyS5bBMsbyK7ejWvdwUA4pxAeUd6duAAabrf3CN4WdzPc4X4FNKWWx577DxZoFEa3",
  "key14": "WQVQLgEeUKyfU2vxW8pybjgpJGnQ45ULhuJNLUssZGpP8SSBho7NKoAWkYvikxfzL9SszgoBzZ8T4uFKJCPZ6yK",
  "key15": "3Qo6WLWLaAC3fFgBtx8HuYPj5ukyyQKtfr9P2pFPSamgcedbWf5GxAPA9Jd9RExizV1S4rLMPyTJFD28u1B9e8n",
  "key16": "2NPaKwYQFKKePo72H3q5LsiscovjFG4yAQMwaX3qSQvWaRDzs8XZ4EVRhW7BotdfkKx3xENNqvVys3pmM5XZ6hgJ",
  "key17": "3fbmVVmkY1mC9WFvzT65JjWY24C5yDC7jHjj3kgewwq8W2E7WvRrwuYYrJQy57r5zacNoSnyYtkyYWBQS4hQetBo",
  "key18": "rv5GxSYao6us9dAx42VqtHkHc6RY6jcSpvputhpL5kw6FHybBGnNewsmtWRHsTD1qNNc1KZ7iU8dM9aXtxk2KW8",
  "key19": "2zya6mkbvksKXnrk5W6BzAupeen9pzCrwUn37LTQDVjiHcpV8oyrUpBxhW8ygoAE4GnuEcof66dJ5GaDi1opjYDC",
  "key20": "XmEjbH9it1uE4LM2bRfmEE7FwsPCGkYSBHkAyA3rJqEtd3HMTApwY2EmYbV9Hqq6uZQWC4BtKXoRSFLvM5YLwNE",
  "key21": "4FmtoifZWkrSYetEw74Yqxpoa5712JLgzixEFT2pNJ95rboVifJvKrBiC46F3zqKNMVP3YmbYekJ8nbtTeeHpX62",
  "key22": "ReGnUuSCeaPZ7TzHYgnd2oszMv9igBJ56SzuLuk4MdiCDj2dx7RZUuv8QiQMqLQM8VYWHnykxP2yT2wew8uTnFx",
  "key23": "4PQrWEAN8f9AYGgmbEqPfrtq26G5SQGi2iJ44DCJZhfFV3NAxb4k6ejwsHbYRmzjEYPy5YKTuNB5MUq7zwaa25T1",
  "key24": "2P68rakxtfz8LVuPCfQZc6Wf4LTVn3MtRgAJ8K3aa7SaL1GDdkuT8TknTfFrPm5rJBK5MWFLsLGkj2GKvGGtfoKC",
  "key25": "3Crz89RFmn6aqtG9ZuQRwv6QFc4ArfnXVntZCtNxmrrNnFANJfES8dtBrqF6LDbbyMUZ92NNM86HDUtwjGhJ78fa",
  "key26": "4aS7jqQXszewDj78NK9TwRQ8v68haBmEUrdpJ8Yk8KUz77ztgmxKTLc1c8B8nd1krDK5Y4CkyHrZzqWvJxvyp8Bu",
  "key27": "3YkSEhCvcq95Gqcef1Rd5hLTwPpYnihGkKAshzN4S1VyQ7XDM2Youymp2HY23c166ZPwCHsD2yncNunAoDoqjjSB",
  "key28": "4LoQXPCn1nZpgP4Up6J5exNwTYbJVkhWQVJ2ymNpL8d9T3YiEKga5UNy5PLyL91wcFNuBo11VAqPuUM1Bb43YdNE",
  "key29": "2wjGA9CUK46n9xHcNwijYyQ7XfJRvqLydtTJGiK44tkg23oWDpMc7eT4s4UbUiXRPWyiz3K2mppGJzoG2YL3xTqv",
  "key30": "5QFFZ4hvFPFvmyigqC9z7awmjTH1EtRzBKMuE1aHHFwjVjAs5GPBtLMye3xgkV7hE7FUyjn6yW5HJkSzixoCMupr"
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
