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
    "5t3w9vcvcE89vSvqNP6WwFKJrzsv25D8HnyRZUqvXAAUVQBzLbGJJpycUdFmtyB3h13DkEt5qGdyPa9AEv4KbtA9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QMr7QyyWkTqZuxB6j57Lf6xxpGt7hSkHcGZDAcyxEPcKE7g7eDAZdgVewjCN8uakAeJJsJXQELpNdwgcxKd3dzu",
  "key1": "FwTk5kBXq2pj4eK4qm5xffVgbbBvsa7Zoz41LR6DYCKn9k6SMRv3Dw5eJNa9w5k116o9EQ6zCjtAh6RiWbaDhsq",
  "key2": "5KTgM9hH6HpqEmn51errHCpf9rPsiqTZtEyfYe4arELBDw5HR7go3EM8MLMRfruCWirbwDD8cJ25TXeby4X56Gwn",
  "key3": "UXub3gAtSAWGvjYqYm4aiXXjs2FDn7W3ugrqtbXTmz6qzJFnPv227oBpim3XVWoAswKJkKPeM974NEWbbfcbZqK",
  "key4": "3WASYGGD8itiWE1r7whG552Hp5qS4qxjzDKondN9fTcgKNC2jCkC6GRH2BhyW4ACjSVKFYCyzokMkju4PVNNyiRS",
  "key5": "51jYsfZqPbPbxGzfqgwzQERHYkELBqJTdUi423zKumh7pbsrbZXxBykThuWxcakqLcmssnKxXo4WjYWSLbM64CJ3",
  "key6": "22zW94QsKHP664Q9ke9SMai2yhSDBQfdh7tw3KC8AxQSNyRraKxwAh4Np34CwFn1GuZzYcRAxgcTJyRmj99Danqo",
  "key7": "2tarDNUMhsmbQuggje6dUXRjJosfLHMtb4Q1UuKJsMuGcp8jcjYxB3xcBG3psoWa6cEqvtUb9gAZP75BPGbEnJkg",
  "key8": "3BkMFdq8y5C81ren9wBFm3uzkSzocotTf9YLh6ZyxEAmviQxBVFPwKVbjxwSBv1aEGrKYxi5sLzD2Pa9APS3FMma",
  "key9": "2Uxjkev4neEyvvsPo5RutNHr3JinPDdudaUTahyYGyrU4DXLGfhnyh8nqoUM5gfU9zX3W2JLaEbYfVwSygsDATvf",
  "key10": "4i91GrmaXUS3ZuAFNZieB2XAbfXuqbZKrHs4DYhBrahcNE4oaUdhtet1bcncKpU2zMvvMr1vbnWhVU4BKKcrZY8F",
  "key11": "3SMwoDTGCbqixYGG7Tv7q3ZCgJd9zoX9rYwdKHyjFvmCgWcAnNU6Lfvqq7nwUM43s2VgVnerESyNkP7hM8wg8iFy",
  "key12": "65Zjmj1scRsfdByehUwg78LHHTzUDCwhHyzvo6K3muwvjzsyh9paBzE6mdK3bwDymoz3mifAciwZPdPGiQ1QxTbA",
  "key13": "43b1D8qnuYkHHvNq2JCBvNRXvnGjKqasdhHn8h9GA7qaHUSrBmcJc3N2cdkUxXbvho3B52MkZMttw6VgW1u3SfFN",
  "key14": "2vsCDHx3WJXWEZQGoBfRujyZUAgYWzHeDYuYMmn4KrXPcZfuUUmvKRVhaCFEkTmzzLmcLc2MHMWt4DqQp9CFbQfZ",
  "key15": "2bRytbnAYa2xT8MdgpfkBqT93sVFV8g1TVNYeZ83eANbB7wT5axfsFPWXMnDwUXdGQwQ2VFHFsDw9PaaXbXtY2nn",
  "key16": "31RoRi8GsENMsLgPHyBGpwUPqL8jWQLUqm2gSwbacpWKR99QVd9YxQHMgb8RZAc9vTbNDUmrHsUkwe4e4cWVMkvx",
  "key17": "3gMTbJxFWisRm42SYX9aqUxEhFWruBFVeMxQ4apaiiBq82kGBfS8tSUGis1USKJvU264dVS3hdHQCM6L8KfgRdoS",
  "key18": "5jEAgWCoGnRXYYV9J7tVGafnd6EdB4w5Fa39WTJaC68H76xxHM3SgYHoC3iB3ibZ2ufTqii1f1mpg6TgEhWv7QG3",
  "key19": "5BqHKt7PqndPGcJGr2a69hSvdXKcijii1JrcU6YeVoGRmd3oZx7sK1jMUTFCe18npZzM66LVMKJ6GDgwX6Bafwuu",
  "key20": "3epmSxDnsJEKV9NmPFAMVqRewAfNYnTM1BwmNCq78b9x46GhRMnREnymCGQCwhTm3gVVwuEFR2e6UseitKZ5G1N2",
  "key21": "2VwYxHQawVZQuuScy46aA4DdjmUCDeGwp79YAzKz6j7oG9cT3ftmmjy5sHf42r7CTabjsTM7kZTiX9PxtbYLwXrU",
  "key22": "2U6w1yoHKJ9FuQNZGroskKEHHzBMDMJmt5t7w6kwxhUwgjfMS7jWLTT8zXTAQVY4ofohkwGMAVYi2Zsc59oKvFFH",
  "key23": "5e4gEeNTUXRvxBkf8rRBv7Rihg2HRzsXAh2xbHT9khHeSUtnB1FYNyiAgaoaDmKUwVQnJdKg8wtRKXFpFJ6y5E3V",
  "key24": "516pAZz5unTEENr4yFEX3kiJNTDfVyrKqKWKYtzWCGSVBkJbYChMtZYpC2JYuQe1cKigPwUbn7Q8RA5NspQ2Vj8j",
  "key25": "46zE92pFPfGBFYYvLNCWuwTu2gu5UAbx28swQEGHeHRFGyG4igYmHHgK9sU2ftHVtmjtTkyjidoaLZ54ZPBCpgWx",
  "key26": "5DcXpRMtHbVwmNY5JMRQaKuXN5fe7cq7MWxv4SbdGj5A2WXoLSqbi4K1qLxmtCBfP1HrVB9BfWPEaMH9TFDebdUu",
  "key27": "5Q4ARyd3Yry9Dj9MSDZs2owVFmM8CbLUA9S8PfE1cBcVMCh7enAo81veQKtNDVTnKLGKtN47yVoFwTphBtrNgwmS",
  "key28": "428WTa6qjH5eEKwDN92qVjD8sBYMW4eJ1CnuEui46YJLD3vbR3F6PHEQXEtaCYBLHdSsq9DJ5Jq92ZVTtV2j6Z75"
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
