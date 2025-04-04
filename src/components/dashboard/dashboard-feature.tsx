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
    "LPkAJgZNJnRs3Lbqh55UeJvQrKX5vDFW5cijjscYhEaVFiwjRfrgw9TEyXmuMjeDpa9pffPBNnHCAXpLu8kbeej"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ap7tggVBcBg48RVWmzXYEXyh1ikH2iHDj779aE5nNycQ1sQ6bjTSrHP79HCELr1Ha2fCrGU7b9xd6KwNHUP2fhR",
  "key1": "2P1WR2Us32UVXs6bxAFCsWqEKRCCewsHef9ar6yt7CbTJRv6AVpJhh8Lj88FSHkiksvt2PkMWmRcQ8eZs6CVpCMe",
  "key2": "YLQuuGRnq2m9YfrsTuA26BawaqysQaNVbdaNCvXUbPcMSZMeEePBmd3qXkSU9hGjf3o9PkVLdKh5QBnzvrCfz7o",
  "key3": "2siiFuVDdUqu5sXudnfirkwnD8kwMiWnAsCs2tGyhitm9ieErS4fTVX4Ukw4iakeUegPJ5i6gTa5LKZzPneYBfiF",
  "key4": "3HvVbQ6xwFjE8sFzM9CrBoXFPqvQztAje1zJq4Gj28iEwuwDryZ8A6p5kovy5VDMYFkYNYupp9xYy3zcggS1caft",
  "key5": "4Yavxo1t8ATJQxHF7vciadpojVJR8RUwGg5gqinqiPhMrGTLyDgqBUhJsov6tL7JP35jKjjCsj61qpbCvDMBxNwB",
  "key6": "2C4vw3erngnZy7CcpJxT5B92JGuby7Z7WCzLn4bvqU8r8pprZkD2MMHYgMAUzzdDPZNJ6nHkdiNX57Hs9xfxeG43",
  "key7": "33et23P8xBTy2jo7KSeaUdovwRC8YiXyjpLtMtkivbSqSPuHMYpvqv21DrVABBbW1J4LumEmSP6KRoK58ciX216W",
  "key8": "5Y6bnKNTXFEubgVN4AqpbYX7GEaveX8EwSp2Hf8xwr9nsy5ZFzuBdSRME2xApJEbf6nGdxknVmq4JYE1BjXdxgpg",
  "key9": "2Woh6yYE4YDvdjdQZTs4nAh6NzcdnPD83BdteUai2sxUxQ1ZfKBYksDdZjKVQaxc4W7iTgFiiJoSwBbRvEXMzXv4",
  "key10": "x8NH37xWQSXghvEwbnAcxcsz9cNTnWKVudsxa2fCQ5WJa66kKoEEYRM3V2f49DtGRxE5hggfW2qP86rvZaB2KLk",
  "key11": "5vWgFDkMbdTn4LtPtR8MZbXdVjirbrKKZQkW5b3C9Uyy47FkDtB9tGvg7Mz2zw5fw49u7TejTo18imjCZDKgZF3u",
  "key12": "2qm59czuqz6KxoT3ddzsrQYUAhAmZHZK6mrF8LYt3yatcPGUm9kHARbiUkdQke2ZQ8pw95ZhspDNSpLH7bnGnajV",
  "key13": "swG3dZ2TaHG3qtgTR9gW76agrozaHUKS9PrSuYJqAsK8VYQLwfgjMaSCdn3qyQgMFnhcmxeLMxw3ts6sRvX6WFD",
  "key14": "2TnxV7u6xd8MgbmJEKT45TKx7sr8ciLRse4FnyfSYi59J1UVqYfdySQLbmAojnqVpeSFAQVNmVuDwyiRkhyFkRvC",
  "key15": "xVbTyc1GsNV71AiBqyX6MMvQ4MzFj43Jj4WfphLNafFABktDj2ERU7QWyuFcH6QEsUngB6kLSY36r4b1VFgxv6P",
  "key16": "42yWSGz2uDqhZwNPGYRCb9U5oZyc9mQQomRv1A5k7ZQzUdZWwjzN3tp84VLaskVbNtyChBpA6PCp284MGwqEWuNs",
  "key17": "2GRdfBnAjQw5ytmPz7VhU6qEb8LYviFriv7YUwhyCDeDByUoc5ZV84SbaP9vwZ6eEebNJvEtQUhTS4TuvJDho2gP",
  "key18": "3XLaDjA8gaV21YhP9Ff9LVJCmeRhH9Sp1rbJktDHvhL6iAkgx33pfUa23FXB9kce6zbUuasYbrmJbKcDrBruRYYv",
  "key19": "B45G4dBphS7UuYU3ufVYQfhpskw9hWL7mpdmSx8769ZRaxw8m4gEyjN1Z3AWeGEhehBv6RjyfHwghiqKrhtUqHs",
  "key20": "5Xwd2zweeEGSnL3CXDAQgo1LD2Kp8X5dNNWHHx2mkHgQksxjduFptjn8sMBsgJoDjaeiCv4YZA9SWHht7EDUK8mV",
  "key21": "3b5paq78vyCdJTDWNEpjjjmjXWLe6xw6bh26h6N4f71a4iF8Ucp3HzRxw6V1FpntyYPRQfpihG58jS9MHApuzcPM",
  "key22": "3jveQbbPELN6biucj49uBwaGYADXJpVtXNjQhfVVN6Ds7Ztwhk7UM6Q4dJkMFFmSfb7PgsWtktSYaUD7oNSTbFq9",
  "key23": "csfdW12GmyKxBnNLnC7Z35deWoFHMe89fErb7TbbVwKyxqZu6iS8RwahncgtpwHnJtxfzmCD3WJy48ngpchrCTH",
  "key24": "51kj25HYtKpzoB9iQvtHSc6CLpRDe6q1ZuVPrBYqU5DfAUQ1bhEDKPW5rkbvLANUQNse18aAD51gkdk7tN6S8Qok",
  "key25": "3ePxqMAEoBcvsRoAEjtPieAfp9TKDn54sTW6ucXKSBZymTwkZkJf2nUt5N5PQRYHpcghTLjBcfEowZoxUGjCRBiM",
  "key26": "5uFnD4Y8Wx6X56BsFj4sDg8cAzJzzBG9VTh9wjmoCbMVpcMgsCC8aqxtVKLzaL7sGXxSH1XKxjgxB37rA8FBvXbg",
  "key27": "2cbDSPfZPLTR4UVh87E6Lz6wCb4fDdvxeqsostwWRr3NbuGfGwTu5Vnnb2oUiQC75zHybHAZcXM1yGYkPZLrgpiK",
  "key28": "3bkVzLemwH9TbbYZXDLE479aFvN71pHwG1SyCydXXCTkuVpQp2dgiBycf4WJ6hmRBr2W8qC9ksww7smw5BMQ7Rf3",
  "key29": "2beYa6U4Rgvuai9GPcLrt5eBB7LSbEyfTqqwXBVF2fdRDu4hoJwzWqrZHVEUMxxfoZv9BdSjhjiSXLCj2mRdSm1o",
  "key30": "Lgs4y93skxVACHjPj1xYKPcXGYzaBao65YqY3CxJCFyp2uoXBZbqjKtCxJnbzFNY3YPRVmnTvZAmLu5tJQ3fKrk",
  "key31": "31MKkpPe3uxVomq58RavzjQxQrnJnfRJtJAA9Tvd7P17oc9nNi6FmJLSZPycQz6A7PjUBaWsczcBFn9aukQqCrrv",
  "key32": "Zqoodi2GMmpVFdC3y3uBY2Lkqv1oz44LBGTzmiUyDAtLzCQ1MQNX2HfZ4uXVgjbDoEbnkqBpai8rypAGaV4uj28",
  "key33": "64LZqDThDCJJkJ2G1V4qg5BnVScyezRkHgEQnir3zRqNEaHPiuNujrPzgYXidEeKjj2biuPjy1pTc4p1Lb5DNCFW",
  "key34": "2BC4ZYg5xXqbxnebJtmAwYX3hhFx6sYqigBQfHySrfdursYirXQdvPp5XpvSo2vXy3HCWbCWc6PV7JPk1aM16hiP",
  "key35": "4HWZNx9T6NLjVab7LRFSwdgEGUm8B7SL4MfGy4R8EuKUULYXfQw5CbRsxoZigff3HcuGsqdSSL84D7vqC8s24V7C",
  "key36": "2ZJTaAvegBBvEbk3E82unxENpyhzvVrpjaZaasre62JuaqNPh5mDmShGVc1VysfwiAi2AcXhg3YHkbwqUJM6AuW8",
  "key37": "UfQGzbhsgh63seQcq5j9eNZcvb3xHa1rX5W1rQsywpbbnjncAwjWFXzn2Vj9itgT5fCPxe6P8ivy4p5nHKKeGMS",
  "key38": "2fu5R9YpKuxPnv76zSP1FVwhvFjj6zeJcK4b3wARH7RNdxNCsE8E3k7ijguWom5kcjVXJ8HgyNnaJrf6hvJryDe2",
  "key39": "5spBLNLrGEPaLb9Uz6mFAxez2B8tGQZRTP7sA6kx8XxFZShA2ywR8DZGuuB1AeqXq3bNc7HswNCY7yDWpszoXMSW",
  "key40": "K5fyGQMZxAz52xazqp3YYntP26r6CUCZKvWv1b9PqLKvUGArwEqH825L6VjQB6ND2ichqagVyQvhGDkaM67xJGU",
  "key41": "5xEWHLjj2rydYB3Kif2U4uPmRcmn8vPHsC6JmKZsm5dDgbHWbxrPuqyibDEBBPXqMAggu6TtsG9Zp1BVtJKG4b7E",
  "key42": "2h2i8fiLqjC6jG979MkzTQTu3dc2Aj6Bk2jvrHfCKeUvt5tR4ysP6fjSz7beNVyHJW8eEkENrqVSEmb5bF9R2W7g",
  "key43": "64twUWfhhraBLW5eus1EvGAvPg5cTyoXKyHaZi8B4NamVVcLpvr3SL3ssz7hZtF935bYyge6WAd9EFat9PYVxx1j",
  "key44": "3NJiQKjAxVoc5tiNtvPp5Lrm3iFjkeuhZMNiCDbcZBEtXrvGRSUmHQxy5hBPmW11ZrwYt7tH6yrux6ECXJT6JLug"
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
