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
    "2CfWE51KDRu4LW9FqW7Bzy4ViUimedmHFujC8xqfhvrh67xrq82cyR4CWtBuJE3VuFu3irZeAatkVQogn1kfZAGZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FgzzGCJM1D9n7i9gkkD4PeL9rGLDPm3eePKGSvaMrhxjR18sQUcua88DwAewvEe2FLzJCSxnz65XVrU1yLRY8Di",
  "key1": "5UuWECaRuwaeGtjfJq41P4WgBwAzNTvNhm5TRiNtUYHXrpXUKPiN8VtL3EfURxXqAysmDH4g4bCHQWtAFbaoCHD4",
  "key2": "3GXSi83p33dqa2cXfK47YUbnbqJaTY3DtpoVcv9C6GwVs4u3BtdwrucBczy2TR2KQLxvftRv9r3UJswCj2hqNf7B",
  "key3": "62gDdTN2ZNSeF4rJZ6RLzK6tiRd4uCqS5vGaDMZ1B66ih1TaCtFqxWTceUrJTdJjvBaD4pzzU77kwwkJgqPHrCMo",
  "key4": "MGuJvy31uprhY1ci4KRMRAUuXT3Qtfz7PaZtrECdEGDrmBSL27sAoz3pUPE1vzCVZkr2FbRh6JhftqhiotAZo6J",
  "key5": "4t9Fh3o9cCzit8H3kXFHUL1W6FNhcpNJWzLkcFgbiHdUdyZhd7k34ceqvS5EvaeR1v1x44woE4hXVSuqHFFbK3eh",
  "key6": "2YLh1ESri6wW927bwBM1zzxY9Q7HcUjQ5V8RiaUpJMG8C8pQr6oCgRu6mWz67WSH1c2D5hNt2ytmhbUsprV3hYgz",
  "key7": "5ShgDvEmhyUy7kRyRbmP8CkkeLfmV4R7DX2sNnuLAJ9QUUvZHe14is4D6r8imduYbaHAkD6rLwCMBqSKW8aSEtUu",
  "key8": "5NtxaiZvwXzXWtMkupdLRKhMnximKphC2WiLPV7haSfT9R5HBaiqy4XZE17YVcwhyFXCJxds9KFfK3teA4P3SeGz",
  "key9": "4qRytdufEMyo8fEFAXcaqDLWWxmLDXHoYvnGD5z1pHxVU2PzBX8oHyFtp3Y5kQ7b4qJkSXqp7r9sstQHtR9XttNb",
  "key10": "4jqKArpfBDr8gqyoqFRioNEyrk5DdYwzNMx8LqQp4RPMxy1f9rYA9Zg9MSam7SzWcy9WoDPEED7rtbNTVEAVnqNR",
  "key11": "4PaPzasQCMJjnS6C4yPZ2teKJu8tLowqtWLiamyKv1f9HjYX3hvW74LyywJfqNFvjiYofSzmVGCChaVARaCZnvo7",
  "key12": "3esjrZ8PwV9kHhNCFSrLbMP8bEkaMeC8wfezsL4NmsNJBhWtUGMS6VeuKCy2u4ibQEWzKZjfGffD123HiWFddRdh",
  "key13": "5uJM724jrdHZCQYnYPQUpr4BXc5p34TQFHihQf7GQdREryGQqwuRaCeqZA5PLdeGZmGwCuatCRkuhTked3KByV4b",
  "key14": "7UvtmGZS2TwqF9qucXCo3dTttYXqQh8exxMjfDZFD4JYqEFmsGC87CijFumKS9Srt32WJmVp9UPzRYXepSGNkCU",
  "key15": "2pP2zZ4dF3DeQ3XohLHoMr8xh6uvbSo8MzqLKWdWXZv6rjDqUhATXSXCpmr7HVvzkdjNUXMr8NNi47Rk64rfZTiw",
  "key16": "bR7vt1soni16sg9xEiKJRJ65mDWE2qWEdhjiY93Kt9BUJBTP31oohKLtLbSkYSauEZP3sqav6XfTwNNDpyLJzu2",
  "key17": "ExG3hXphB6cvEegKUcPqt1AmqtRz8KKFN32YvKwCgpSjEqoeisgGoJMdY9BFTNJjavEUVeVnwbCgGRT4pZUG6ud",
  "key18": "3yDCFa7oHnjAgBfQfEAXPzDLx4Lx4RJZz3916aiV1QZNq3HpzsxhXBLdGjowpnExVReb5y7TyCgVVkZS1xjwFfUv",
  "key19": "3rKmnA6e2iNP7gmeYuuR5KUxeoeYzek4rNp58CJ56ptXt7752q1RF7ib7vqT12c6pYUvnKAA48fxzV8vYVnCc6MD",
  "key20": "5we9buCKroSEW88r3JPcM2HhreWMCYEcosXfEqDtjA6imf3nrnoLAsVC6ZPmXsDGYGktiehvmk3zqzcUb475boh",
  "key21": "3oBmpH5AkBUMECuMwxbQbouhp3RUsB25yu2FSCEzgmEjJTBKbtE6neWzCTjjQR3hZPMnL3efGCs7mQ7hzpFg49W",
  "key22": "D6uFQFMEQi6ZPVbiYUN28WtM4codoWHL6LKhzp2KnKAmGzkSBxowGGxK4N8swnxxYsQFeAjJ4bGRBsbwuLGQgUZ",
  "key23": "4dmwS7H4Koosnj5Jc2ya48WdPUSwQEm2U9q2t6s38Vuy8nn4u9XVtsUjcNzh4b89SmtBwZtan84T9m8ooj8n6xxs",
  "key24": "5UMZmq9uwAcK3EwzMT3QyvcrrpifBrHKhaah6kFJCtY8CfmSe8E5ec5JaUuBajVp1e7AE4irkULYgCGs1TyD2Cuz",
  "key25": "2EQvAWkE2zPtABydTZNtxTK8gGtgP54vK5xQeh9YVqWWgqXeHBXU9ZQJGiU4xYS9tuDRezfuC696gZMLpZJD9HB7",
  "key26": "3hdvhCuiJNgftWaM1WeazhCDQqBer29tdi72bknzma6Snn6nTivZVDGDjS364i3cvqYmdBEeDcFT3J6SSxV4Ha4o",
  "key27": "3XZA3GP5xP74AqFJmRLpPJCwFfNmA4J3pM7wmywn6Vzs4TnbBaBEZFp9YqHNL96FUUtcAJ8W1gV34GdzneoRstGo",
  "key28": "3G1HkGcmkNYZZ464XCc72R9H76mkrNdoePvpksnq8fiZSdYSzd1sE6vuSYCNSGr4ADFQuALWFoW9F8QuxNQxFYJL",
  "key29": "33KnqaUnKkQEudJD5oMjLQf3DfUfjkyZt5mDpkvVJbkCQpzujhNXUdtBKbZKaLbFzQ2B3FLsh3X1oVYYtGWe1FSj",
  "key30": "23mYwRxT1acvs8zH18g2udEWbc53KCKNjCVDfDocF1bXP59NsoX2LxTXNGr4mb41MkKsciFrCZB3AsDAe6Eud7VL",
  "key31": "3anedcHWmSQF1RP4bEGr371nhE4uLSSJvUGsfTahW86v1eVTVyQYtUnSMH7jFdaRCqyzEkv9oi26caD2uYTsdGV8",
  "key32": "2iP45oJcTwNB63m2hTArJxJMME1Yd6pHUiJw2P5r3HTcCkMcMSwY8RmQ1ZwAJj3qwv4SufnBa26yrYrEShhNAcca",
  "key33": "3AxXjAhy4B1cteg2ATgtERLP9tHwMC6f2HjrDj8dwFXTciEQ5pTBeSKW6fs4FFDKDLFrfms5N6UBuRebfT8Nhowr",
  "key34": "5dbB173ES49cTyMteMY4djKBQNSNKzucdyPKsYW57ar2ncKeccXksyFQubJ1bEChbPeAUGEbHv7Mfhf6ooyR9rtm",
  "key35": "Rmhfbas2JzQTyJN1Q4Gias7qEGNdfUkkc9QggAmHVvrjVgdJwR6tWt1D2KGRWGBWUBuKEsdRhARFWexBbaXpncB",
  "key36": "25JTLVLT9WsvHrB7yWPGZU7c6PwQwijYsNfEtyRoj6LDNsR7AATmLWebjusB8a4GSfWPi5HzBHdZEXHaKgC548vi",
  "key37": "5YZRDJKNBjj8gz9SAssYgpByZJGtkvbKe1JkviX6yNfuswwrdiDQshSoQkwucwV8ATcWFZKZvyBkvThMBZMSTFRJ",
  "key38": "5x93CEnTYSiHaLRXajw5s8PrMPSCvZdvN8RjCi5dvMY9CiU2UPQEPsnEKppGyG5iJLqi4aRygD47Ci5bg5R6J9Gv",
  "key39": "2XALoubAoVP3EgeMXs3JKa11tnPLxb46D7MA45n4cU5PtTbqU435CbQVjqRxVQq9iDCY2jQwZbZgsGBodmUqv1v3",
  "key40": "4BQx4G7hANpYjBWsbEHGsgb1EQe122FXM19QiNFnCJnnvnwAYL9QCDXhh3vBRj4HXCDiMBbMQpP7qL4SPzzJrcz6",
  "key41": "5aMRDoKUFNNwiA2cc8TRuYsFYiY3kY1XCD1XzmrHehCRXE16r8936exKJdbmnJqPhLKpFy5qriUa9Rav6B2WpKMb",
  "key42": "3JuKw15zh2ntxZffSiB6jfJPDgfnrK9GsPM1779jwMpDQmoBZTEVrLEgadzEsvDsSS83gvmrrgosuZo9sYy9J3s5",
  "key43": "twkmv3zcvPuVjWFxDKnsKMdELgydwpoCp3z1VfLKiiJXBGHyUnkqZBcmU4UYz7N2xfxzER1m6UrWdXEp6krtjxd"
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
