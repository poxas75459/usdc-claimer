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
    "3FiJM996DpEdrJa187eyT96jd75TMb6vzH3TdSvd8eoykdNe2fJjF4KDbG1MYBaideiGRyvXdGXEkgbGR45MEojF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o9VmEurxanLep1gmJBj9qnzCNNSRD6PGt6gBwb92ezS7xab17WB2rqfsgv8LL5W22gqP8MBFVQg1XL5CS7SUXVq",
  "key1": "5QBmFYooS7s8ukekbChosoyQXmAjvbb5H2xWyVJus3ZNgWzBeaENUoNTd3WZGJG1yxWLj2LtgmJi7gssYR4LYxC5",
  "key2": "4UKNqa2jxCc6CexQvE22Ht66VvuCHu7vE1f3exLGuQU7yEiVQPMkjXtPfhPYUcRAED36B6Pi6qFR2btD7wSks9XQ",
  "key3": "35sE1QNuspvCzWLVfW6LERyTaBAxgFWft8JTpgZSp4pdNi4xnE3QsQAb92BgcFVJmSc6Hs4hGn3KAm4gbJ2xJ33X",
  "key4": "CiMR3qbrDngY45jKTZtR8YsfVYPvL4sedGQf3GNyqjJcZemxaFuVYURciukW459M5peRHsjRUZR5wT8uECrCSqD",
  "key5": "36sDw3rdHbZbBuc1VZhv37cLryxfxHDCZmVgvCpFUD7LhonynSh8CfCkcMqJigmpenioi5KUP6xm2qo9PNSjsUP8",
  "key6": "2Q76QdXqxAAAHe15J3fp2NMgH8PLrMBFMgZSGQrF5U8c1dhXkr9WuqwgwNH3y96aiqepX59bnBPtjMYSYCuetkTg",
  "key7": "5j54yZiPg5EQVsMaCGNPCXTfY8FwkgeQ2ENWM3VQDtGNDsB8LL96XD7CrTbQ63N74gu5UwoiQvFfKCtN3U1ZhdwL",
  "key8": "2VnMPPoECxZq5EkxqB3MGrVJEEgunANLRux4T6BYbpiqrXGGZH966J7JDkcfJ3aG4pP5wDeF4MtXYTLcWGFmXa6L",
  "key9": "5HcYh7A2GECuh6tMarWsebNo2XRjcAqx46fxmxijyAKwbAWLaQbmfevyAgBJnSc4C7PwRxMYVqJrEQfg2RPNUGi3",
  "key10": "66toShHKSr7QzFBFfW9RiK9XVWwq9658d8Xxq9wafciftdmnMByRnjCydmzC1RXx5YDpAuojzAkgQ69mjjpYgtRB",
  "key11": "45LViQxsWjA3TFheHiDf8gD2VztbnRGT8Wu8yeKJVAX7tykG2sXiace95Zvc9p9x188q8D6hWM9RCRHwgUY99B35",
  "key12": "2Ncsy9Yt7A3ZSQG5cvWJntvd4mJ7PLWuMSgzReD6RkiPq9weHFRyB8T6jpPG9HLPVseLKskss5e33auGd47JkBVr",
  "key13": "3tNUvBBMxFbN6MEmEBDZk1ZG4pmzb1RaTJ1usYM9ZXgRKTWDFwA7yg9Fspg7Ak1NaheK6fSoHfQzvTcpcs6DXubc",
  "key14": "3aoesQye5WugCZK4dFwZnutFaQx9QqU1oVgnh2oMpzPsT81JgHhdBNdhS6B8rWGo1wvL62TTt1tdLUuwLnKPuvUk",
  "key15": "3BRjQ1Ak9CcFX7ew5KViCb7UXw2gUaD4k7HTtV652cFvrkfPUC7vkpo8H4jDEZfdkoQsA1kPeLqt3zHhTTKwmaRY",
  "key16": "Z2bnoHjtbkFjYoUarWXtp997NwLoWkdW32PwbZgZyMHJ6n8uRXjxiLHNcxJKseviwKbi35jLj4eXMrgpAm7VaCs",
  "key17": "SaJ7GWzYFeMBTEsJYeJU9J16QDiQpsp3y2oiPcv2d1wXjnpmEJMa9raKwrznVArE3vR8uJwVQYvMKXkpYTpVfjC",
  "key18": "5N8knHzeqoKMRDA9nUyhAZMDxgggLGDRLiKuUABoCZRkBNN5MTqdJwRdo3tF7YE9RbWaezN4de4h1GXrYrkwYRn7",
  "key19": "2QXiymL92ecWwET4dQuGzwud7Ls8NhCZEFrcejEjBdjkA3gzbzf2uSapwbrwvPy5vhojqzeyKLUUdxYx9Vwd25zM",
  "key20": "jMGi9gkmyQ4Qak81L3HLzM1vWPcpw5HUmpVTxZrjeTFxqMSR4Srkz6zRH12qfdmZ8qY3ekLkVxY58nGKrBuR9yT",
  "key21": "bxuAbDKPLKBFq9hJ7vLEkjmLoYM2dVkcbPCBDxd489CstHnM41W8DCptr8JLF6DsibF3Y8cFPouSDf9zFzHPL95",
  "key22": "S4syVuFDmY5ZAfTj3EdHTpACYtEidg8PAT3ty3ESfwKUmCEKrYcXjBqB77oZEizBYu5RBJ9TJMZUEaMyoxPsoUR",
  "key23": "4B4cN4VZRrZaKLkQiwUF5xKBaXZZ5coNT5sbgAKq1cwpp8MZQCgKn2Sau9Q64nLnNnRGm7oPciY9hoLMfyrv1onV",
  "key24": "57RpoQa2JbqVirDdBXka7FQBmW8mX3oFjCvP3fw6R7xLaewYsfzKgnXa2fYZxz1p9JnmcvHFqVyserwqvyKQETYD",
  "key25": "63c62UVx1znZVyZ2vADsF6ugEr9sYnEDPMbuVoCTTzvxJSu5nbDr8YJEfeQ8FFcyxtCfzfWZ46pfdkiJ4jhBAA7n",
  "key26": "3vLqPW2kRjyeuCabHiJ3YiWKrU8GvpsKkBcCzi1gmhoT74dRYujQiAppnZr3RvPc6dPGFifcBgD1UsedVvCUWLNv",
  "key27": "NYwguDSjGYQy7LTJBUAuivMH1WHWz2vcyr5CgQ4vJq6eKYHiapxezibSpphjbpR4wPZRtcWgMjwhxgUYuJyGiji",
  "key28": "623q1mBe4ENrH1ZGymqSkChS74RuhKFPGp4u8UP7bwx3xUGGNvByHE4nzyDjA8rES9m5m4rrs9t1Lq95pQj5LDra",
  "key29": "2goAKurT9q4kgfNrdrUxWLFv565TkU1FagHgFy9L2mKgsVojVmrNnagZ2vaJQG312wX1yUNfifarWkATDEhDTPa1",
  "key30": "3GviuAA9LDbN4DmwNuL2T8HNaVT5fNS8rQqFhuNn6q89m2ARZ9ady5zupW7UFHzTi14ZS2Fp4xMTs9D9eHrrZHSa",
  "key31": "2vcNNuX6RH5ezYq3wDsQ8gtpDWLgoJS5HVFfUTCR8w7iuHrbRXqzJHSd7K6Cf5MLkEra2dqLQBX15Gy9CfHVt9Wu",
  "key32": "28UAUF4Tadh2dDRhH6JtezXWLtqDnDj6wGmGAor7KCZh7cRt6szpUmnnw5n55Zd8fG5FtTJh6s3kqEw2UPoKYnEu",
  "key33": "XvVJvJaAmZRMDHbmN4Ms9ZG33udzmvMKhEk9ufRpYYyuUyWtoTEmnYroZGE2zH8yQXq9TPMmyys9jR3cnJffZsN",
  "key34": "tp931Z7StVvXRVRbpNgJcGNfyfnbeZ4rRccwcmfNK5wAdxSU1h7owEcVPBpB9mQJ3Xkmqv9R4AGiSNjkDzi4dX7"
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
