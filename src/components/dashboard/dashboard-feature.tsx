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
    "z1RhkUrRfXuxP696kbRtECGVvxdGxnyQ9AYsT3ycr2AxEELFTa5ensyDkApDb8WjCgEZ2bsE6HUL1ZN67tp3UfD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h4jip7F1cusxwNzEqm9S3Ft3k3s4xjfUG7TCGBwWCA2S9LUHPZBid1h1bHA7cbzaEVR6aM1DaL3TyEdwMHCk1RY",
  "key1": "5n5QqbCGtakcmcTorNpM8sKixE6ZnhaupVmsh3RW2YYvbxYHkoiunH6vw62GJZVDA83XbgGXwYsYz4rtcHG6phzW",
  "key2": "55PfidqYp1DAMMbGogzXQpyDcuZe5E5aV7XWvtFjx9xNEBTspCUZvny2k5vxwPMoBe7VyGUTadjifgjBrTccUUcu",
  "key3": "38NWbhfvAxzNjqHvrN6mYKM1e2VAuEoKWPGvtt3nnpSUuVhtkRhGE7tzX7Lnj9hGS6ix1fmvhEZgwp5j1ZmBZQJi",
  "key4": "5NzwrKuXZHfUuPzic58v2g6sRCmQ3eDN13hcXieTasDMyovwa4MipnTY3FStGyrWsasbBfnwjXWqupWVUqpbx7dA",
  "key5": "3wvo3iZ5xrybFffucVq4msxU3b37YMU2BzigHTwZzrQqqJzNEWNqX146tujWH7NoJNMTawz5Tyq74iTVwJbjUYKt",
  "key6": "45RY5CCXFFaQ3X7t7aQq4A7t9rNyPjEZHeA27rVnyMdfqWhuVLwp31sCwmeX7usVs2DfCDHvHebJun4brK3XRkMX",
  "key7": "3aisiZZhYEKUZgsGV51ndR6kkMGBsgzy92Azwjhid1K4sS3ieZeadcWCLMC46d9J8LzaBoMXqUuK48AVEZukLtbe",
  "key8": "37yC41k3nwkoZcoj2p1Q9hduXW4wPBADeemt4VJc8yYjKSLd8468yj2FGFaisuq57wkx2Z6oL9xSTWxFkfwKxhtn",
  "key9": "472pavPFsKjFkeTMTF8tCkF7h53ggaenpjT5fAqmxn1Z4ewarzNTxZaV4xbP3YA5Nz9dCxthm96RV6QymXuwBGot",
  "key10": "5jK1kSJUkbcLdBqLWkQRbcJXDmfNLpg5zNQRsZw1qLa2zBU55SBaRysjSf9kmBDXvuV6synKPGtwyhb4VVh3akRv",
  "key11": "5SmEX2Bu1q5cDFGLRquSfYLdCxpCay3a6pGLNZwihQUybzceJCi4UXRdcqeeHDUiRDG9q5WuappoHX5q9dtPHZHH",
  "key12": "2fSrp6PSCuy7dG8fGVpw68F3R2RM2tZafcRFyyPVWg6HPYJXuLrgR9izfyjhA9BrCny35wnUKPfsJGJnYwesWkL8",
  "key13": "nr8MaPXKHpAgAK4w2i9RKvJFiWdjtYY3nUzrMPDGKQFjKWE6KGiEoRmFQSef9PshCG3htRnJvzroMXcyW4fdbao",
  "key14": "4m7KCr47MbqFKWvTvKYc1nVCsjcoLkMEvRkLZWNt7hu4u78w7EWEBBUMX8q819Tyx9ncJ5MuzPcG4VmvZViFnakh",
  "key15": "5BeJmdtTgWouSPUHzn6RdgWUqeUB5cUHEjdtJgk6dvRZ6EfpQtoWvqVn7xTQpxqFcRjUqtDYD8m5GbHbXT1RBeXb",
  "key16": "qVe82ePP4BtYNC3TA7CKjPx8oGEQcEViANVuYzZeLGJQ2rvvosoeA179g6QjBf8JvoNTxwajAFe8H1TFwadJzb6",
  "key17": "4tfns8BwHtBhAh8BYL4WQGwr4wPhytSXiw2FLSDCCxZZYfd7uiEfpmUBszTKxYbLkDZvJnZeHGTWacav1GbWX3N8",
  "key18": "2vFn3eFZKEja9fgKG9FtWuoBJ11RvjW3BU7B9L6ijC8TVdU6kU5W36QtMu9HX6D8gskmd7maet7zgx8tC4xjSLLV",
  "key19": "4xGMmLku9p3v8EucseaEZzDZEZBBFtdi5RHS92Gy2B3YboHforeLfXwyhFdPThbi4ZDPoPYth3q7g2ndt8cesFug",
  "key20": "4z41cfUPfHdokwnpTckxydJrzE7Mr1ks6f7xU6HPJBZ2A53RdmLjXyrVSRbu7AihL7yg3At2oPjCzDJYQ2gTwUUq",
  "key21": "tsg5GrZ5798TVHRVsSH9sLGYaWRmDBSWqkGXYZjf3duV4oc6HWsTTYK3j2UHaXJvrYb2Zp8GFEgxJzQoxojYF3b",
  "key22": "2WyJGwQLBbUJqEgEdrYQPSpvvek2iFWiLYDcWyRvZgjB8dQcuP1vHjbxXZKiRNzshrquXyri5CWi1T1Dbvqe8XYZ",
  "key23": "3MUbGp6SpeA1QShDLrjjXftwPmYsgFG8TdfU9LixzGA1fmMNpaa9NcnDyq5doZfobh89382nFHZsNL2gS3DYAPLN",
  "key24": "zhKQvTPYuz9EhvPp21T33jce3yoWSLvxgtbwn7rjQvFnSgdKyZM1UuvNSiAAxyqtb4SB6k92Q5i8DSGYoQRbBg6",
  "key25": "1hWuoFQqRCpG2WzxRNqPxH1gVJmwkw7u7CGx1G1Bu3caT5obH3Mmc6njfzM2EiePfw112MQ6uyxfoww7RZiUp5z",
  "key26": "5hdxJ4nNihMc4cxhdWxV3XWVqsj9xUa469eVzLgKWStX8xQEufi2eogtBNfzVQ1MiE3Rn42pD2XJvTc4DuTs2cpt",
  "key27": "4SjTHZ7ynQxW7bytjb1NHcEhabfDWcSkykGZjnvrVmVLtR47ycUPmxfiyXxzHcZg7hsGKVSrK4tADXJmd1EjQXm3",
  "key28": "483FXy7sTX4vDnvNakkpGiVr3qNgxcKPSHC1CnUAMNd4aWAWknJoBaiNfUz3B7VU5ZsPTkYrWiaConTDHvAvB2EJ"
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
