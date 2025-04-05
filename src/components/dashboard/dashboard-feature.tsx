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
    "5jckTmMEsD2dYTCP7v2AxyB97wsa28egu1XnHnNPvTgiYUvMiLjU4df1WQ8WSetWa9CKrzPN4G4S7PCGYA6vVXow"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35ZUahSk29kBYJWUygLcRMjZU3EZXWQt8zVb9FKnLdR9N331C8oy9FiEGs2dW2Ls44uNx3cCkd4Bit6MwhL6Q2M",
  "key1": "5mNeJ3W2Exz5fyXrBBdx8S6qLAejdjQNVPrT2Ug3gW6qRL4YydNN6YW2BiDFBEJaookSxvSNz3ELiwCF1iTjDeQ",
  "key2": "49VT6Wr4hagAvwa4w5jeeN12aD4jQ3pQ5s5cjaVfRxcoMy2RRzyT2PNUMcyBgyP7KKKm4c3nuTys31deRQrnB2ei",
  "key3": "5TtLnUeSvpXUyjjBZRngdf9ojwY1FU7QVTdkzNwuQcEGEp6DP8BSNsJ4PQ6yqbfqUF89PB1HGEBvJbEJajTrZbfs",
  "key4": "UgwbwxydyHHn62CoJG3fUixoo4YLEX9u3MukpPjrQ8H3NSV5DDZieekexqcgpQWtt56eWP7H4hALdkqHhFEgfio",
  "key5": "2xefshR3jz98HhEZn8ihYVtTdWVJRMtGkvh2eRFwaqNijtyMoGV2HPR7GU4LmT7P194a6wAeQ31itWHGAnBsmsMH",
  "key6": "2vKxzFdqhibjWniR7rxMwbNpvqxW3HTnojmwrjoF3EvBN9qLet7djQTAqrzidQ48R848ePWPbUTP68zbf6pF2Khu",
  "key7": "3ZhWtEWZMfkPa8Qp7Axo8u2fFfdxXgR2a3XFqxyEiqAnNAkJPZBCQZj5zRDvXzLjd6drgL84ABJvcQ9euYxvUkf5",
  "key8": "4GSgjuMZri4G2MwSzrM7WgyFJ5mNF3QoT89ieBLkCYorooEBhi8qnXn5SaWuRK7zeSu7qW81bTrfbzT83jbExWLp",
  "key9": "57AvytZCG5dPgwN4Mgs7GB5m4mcm5GkMgWuJ3kq4QtheXpgho3UD6WqoLnAReAWwGd1CFW6r2H2EVw3GNWGkhJkn",
  "key10": "5yyqyibXaAieZ3VgseFWRKE2sTFRjEtcBnJryx36gPeeYwCwkQdMukN36Epu2vxA2VZJYyVh51vvseUMsek2Sfuy",
  "key11": "3zVbDiLScGzRoR5oqd9V3oKjNR9PdBDnCvBrK6tvo7zANG4hgidc3byGuv8hkwBbNuh2hoXs8eHTsYZvqfo7J4SE",
  "key12": "34thbDYbWxpmmwGgGmi1NSAoBTeHZRj8mVhRKcLY1gEHgRbM7oV4ESN3XSBqLrZTD8G9Z7iF4uXdek1Lp3U9K3v6",
  "key13": "Hmg38N64m1kaooHaD3PLQLXdeekYj7ecKbjerRy1B6iRyKLWP8r4dGkSvPGEjwJvzoooGSkmHrg4uGi2mWB3nRG",
  "key14": "3SiVzFXN7x3PSiqK71QnUDgiPvL4do27aQkf3grex5RbqaTN9GtiZmjBcRRhX1rdnbE2mnVcGZVjqDSKYAkfCzje",
  "key15": "4CGZY2jrR6DW598upbWMbmvEDRgF6VXAfhiCJ1qM9mQM6xXF6fAhHSjWDFE4pC1Zx76uJ3etPmEDvfzR5h1T7yYX",
  "key16": "QuNxyUG7FciRGcKT89qgTNqVwrgcPyVVNNqdskDjT1nSJryE2evzdx8QpjNj53dTv2y5Mh8nkeBgyqkoWq1d4hH",
  "key17": "M31tZK5pUV4iWrXbPzYgj81rpvrVvL4BZ2zuKD199Eom8jYSdHXYyJ4YBE8Ur6ZLYFGga2fEw4a9Vf3QzfNZBh8",
  "key18": "26EZr5KABm1SwNJSe4JavGhytp3aDe57YYSyWHRuSpuDWR736iA4ZjQx7tipFjf4Mq2cvrq1KzXv3rT9Q7YF5nyL",
  "key19": "5rXRw82o442Tx8cdcVwHgnX24QZvfsrsbwW3F4PeNedKLDvXTqar7UjAAAHCupXkCtboH5oSKgpKrDg3UGmCfWWm",
  "key20": "4uSSGFABsJocrJDUeJ4iqNxx51Fgxtw81twqSAWJawjrT9QT9kf3zXESFChLRVEPs4yj81BYasPLFQxjx3iNWKEN",
  "key21": "2JjhQbGnR3Kjx2ACXWvvfUvbsVNxtTRddz5VDJpLXZTzHAedfH4bQTewMZ1Dvjw8JTprkNQMMn4yVNUBbD9XCrHW",
  "key22": "4mvRzfqWD6etrVKb4qKeVWsB89F5frkSPCEPrvyH6AaGfDYa5KcGT6xW263y1B6mLbJ6JWv5urkGGFcHSx1Lembt",
  "key23": "2qXySfWrnfi1tgHJqqD4kFrPpCYt7yFufVT3ZcNzNK2vUeH72nTjGg2mUTSFrrnpoJyQw1K2it9wTCZTrwjqhweV",
  "key24": "3VgpatRnpudiUnVv6v3wqNSue8uynz2NMrxGh1dqqB959J45dKN6khS8Vnd54NGq1L5HGPTqpWkhS4PQMKdJ7jqK",
  "key25": "54AgPJYKJUJsyGiVwM6akQwDA8q93j4obKNzK84vmBjydW3LNMqLQ6H6oe9P6bh4osKjtU4jit5FLe5oZx9KDhMn",
  "key26": "3QvGRcmadVcfsBYPZECCHSyvuhSLHTTcDchpknJgfhcvnj1WZkFL3Q1eLRDfesb7J4Ur2RFfcYQmVxZ3CTMM1wCb",
  "key27": "63dxfvPZ45QrsMkMJRXLhC8eXyo8VLopan1Ze12QbbEZfQFY8rQdJykTejjc8ttvAekfoc2LJNrMsju3mAkvnZt9",
  "key28": "4UDKzwLgUzjWRaAfKVvQZArX9GAkTwdpkfjxNDWvbaymN1CzoTF2hQarXCoE6eCuh7BUduXhGirPZbLkSkDeP2dT",
  "key29": "61TCj4vurzbs6dv7gL8nubdvMiSWgYrxAA4scs6bPQWypMH3iV2Rx7qe8xq4EAQzVgQKaKV6srhHPtTHhFv9MxVH"
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
