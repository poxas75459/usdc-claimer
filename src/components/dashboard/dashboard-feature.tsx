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
    "2e3cQmtHtB55ThdRgnV7xTMmTctdgsCB5KFJFy4Q7DAqsvxpC2hcbSuoov8y4t1BB6QYcfPWuacn5ydGkYuy6thf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42GepbsLpBWfMmi4VBoFJnWp3WXP1A3rD4CDZLhYZrqUb98CDqp9WcZER8tRTaBY1bUjRh4pBKjSyTCqK9NAvu5X",
  "key1": "4mwiwWNUpB8Gr77geeHmunsjzFHAGSNWSzQfX16P3BjaEhWsGmhdcq24pk5MtLW4tMP5qz5cfN3C7kVQENr8seHQ",
  "key2": "5KvtPQ7xEqcEBbcLAhtamZqVyCodZCu9E5ARud7PGStAZNQsFtazU34r7n6wL2RZPvFrF2BTRAwwk9CyXdX43aKj",
  "key3": "pT1kVtvNHqkRcdSb9bT8RRgJvQpb4Mzof2LprzVB6jQxdF2JJ4hLw7VhSUPt26JX6y9ToSz4aQZgcXEPKG8MakZ",
  "key4": "4bLFNMhkQseddbGv2rz9u4X9NcayPpqTVuZEqBgJAcgL2JjY8oH6ySiWUMWbtvypzxsc2y9qvpePXeeGFHiQk9jv",
  "key5": "26UeQ6t44TP9VAykCvfmer2eKR9vgqzotizegu984W1HrU6urGWyoG7VWGtBvBDbRqBmgGD7B2rsiKUtAF7dQnZS",
  "key6": "3kCuDsoqWk1tR13pGHEZwmZ8SgY8UjxDwedzR5C5NK2mQreQPXgs26V8GqKvYdAEnF1sfiTynxRMgGcbgcc4uAER",
  "key7": "5wz2ThxfgoGxdcPSgK7Tf95DNK9ahkztibpGE3KxUCp139H3EVyYhvraH2axdvupo61poYhavMHSa2JGbQtiUgWn",
  "key8": "4if54pJteU5ymdE2VmfLC5ZdbKaTAJEReCcfEWQhX6HejfBqQddY3BDHUzMyARUHga6mqVS1shpnRr3qpKTu8hoS",
  "key9": "3JMntdCect6xyVdaFjE1Ae54RNRxLEaE7ionDThkpmEqd1ByvGfECpuTuj3ahuZC89TV3o9rCimCjTokD9roAA7u",
  "key10": "5WFiM1pVutMhppPLWnGZCejLqV3JVNFHok9pY3JYuSPZmjuTjuxjU4zy3epzAr2UFvqgyxxmo223DwMqXN4pAUGe",
  "key11": "3YhN8uE5KzECCeN8cxCSgSA6VELtpxE8b897rQEwNisDvPVXtsrpDarVFYFstxDCPxbrLDAMkoV775G6JDh4ge2E",
  "key12": "2SzSHpNM7QiGZbo8PJP7HmyepgyaBRFQf5zc3QMZjHu2qC8pbku7KY5mr7fzFj9bXfLkZSXEDPr6gQTifQAbaMGU",
  "key13": "2mf5BSEJrq86nnW7DPXtYt8qSpCPQ5joitpBP6MZXk494GvFSydexCB78r6bLLj7WWi6DFZgf12GXcnwJJjS7Nd9",
  "key14": "464xy5vzKDKFNyonejQoGz84vnscPh4NXgHbMkxx3w15jiAfQiRwJAG9pu8F8UVgeQ6QrnKDcSgVxZfTM5fhkkm5",
  "key15": "3fwKfguwJtARKJ8K3EJe7U83XngJ869MXRWYb3tw56To1U9sUonaSyucqck6Si7W8G2YH2hYVjmQNhHsVYev8jX3",
  "key16": "2bqDBZkGmz93mV4cfhuw326YZ6D9vCJWBWTeerDVmDp7LYi9WCC9dp46rAM9sXUgsyVXibwcjxTSedJ4sVrXQHje",
  "key17": "5cZkHZ7JyjTR3GUWmFb6XXGjm5YWvwGzbUyKEeP1NJcW6whoyf9M4eZxUzfRbjiQTKPSTQmXK4RnxTe4mG2hWTar",
  "key18": "5tJEbZc5UWGoyR1QiVkAhjZwv1qaLt14qfx57Sap8w5H22xTQMZGyKfqCYY2q8nQ3agb2uj1n3wkrshbnCHmSemK",
  "key19": "NR2Jwus1rxH7Nh9nuciv6MU4AKYcaXDHYTB2NAu1UZGjVBSAwHJpejxRKhPZKAte2oKg5dWchorQp4ZYKfBB9Yo",
  "key20": "9jQU1r9HZ7iYzuPph5o8JcuwgtZ2hdG7fPWHXEAemWhZStSMmRouJJaTZHYaSyJP8SWJefYtjAA8AuK6yHpoo5A",
  "key21": "5oYFCECJC9kaZKRVbwCAqS8cyV1dkbfVo85grnnQDCgN6DxiFYX9esiXkiGcFQSYtmSg8hApqgdm6GkuqDFkERPm",
  "key22": "6KPpWSJJSGDWi9btiZofZNyjDHk4i8Jm5KwfkcfL5MATzDi5RGxcYm8wBAPCWRgPUXwwdPZdqk3k9wkp6L8bQNq",
  "key23": "4fu6b5NckBrc7En2Xdm29V3v1XbEtNtYPeiav21orew9JjJiW9a2VEgo9go3ApURGquS6dfjx3zDWUN9KUkGgkbA",
  "key24": "22Nw8YsuLsiiZGFYHMGx2DioLhMUY5M4QbPT2nhkzvBTBKwmA6N6tCLkznhmfUviCAvxSaNkForWgYJBPGNdmiHL",
  "key25": "2JMYyJHP4gW7wa243Kx6ViPXvP7VJHxMc2kopez3texXYF8nZUSMcC3orPxvJHPkwRczKiyko2CjAn7WkFhhcr2z",
  "key26": "66tx9ZRTUbeYqxwv9uLhAwZAoJ5K2RGWuh2NK1AcDU6hswQxMdzEhwLAu2dg84ztwy8Xgv2USqvhqC7h53x6Ctsx",
  "key27": "3UkNZMcErTQ4K5LqyaZ3ciQQqgunUuR6tpryuMsfSTWkmircWSuX7GjUy9nkivk3woKmAFmYPd8QhW81SqR561Jt",
  "key28": "xduzeKUMqw2zV3whgqaxFiTEp4P8i5wmGZ4JYzKQP9tG19ENTdLPNVFFtSGHRZPcA7vopcGKgrM271PVoZVWHbt",
  "key29": "h98XKgUgik99FaLrfSUNZyMZFsjYpzuryjzjDkFnkXPSo7ZzSEoXV9Tow8Ba6L98Uo8HSnySHTauk76a1tVSKaX",
  "key30": "CQ9EPSuZ5PwTj65gRrY5RD8ZeYdZvVwqDLeVxhq87mTrDUWdPN2mnCr6JPUjPVyrhf1bVYwDumvvW5pBoFoVZ2y",
  "key31": "2Tb1KDmS18CqDFrERHsAYngnGJVRZ9ZSQyTAdd7ut5k1zAfAWvhoPV4qYa9dCfEjjXKjNrF71k8pfp8qCb7YTYfZ",
  "key32": "42RtFaKHCr6W12yhpGy98YgT2DwKTU4WnT12Nrehvzzh2ZbEZNSTNWPw1tv2toyS56mYhJqWuCnSAuDQJjp96nji",
  "key33": "2hEVtgquDF4JXKaZQsjixnmPTJJAdqweDi8YbWKeLent6q94EdPfXf3FWZJ7qFWH8sMUrepPyzT244FiyrSMgKp3",
  "key34": "2s1BfA8cLsxc6eBa6kyjeSjrC7ATUxnyrVasavM9fdDJ6WuntU18Uf6TnmpqmTQUdzTfGw6XoNSnqCpYhJPzGYKz",
  "key35": "3baGgYqzEbYn5GskRSpgY1asY917iKnAkjSsMno4Pmfufv5k2Ry9pzKWYUBH2VdMQsmBFwZf8EkybAdwT3HiqTeW",
  "key36": "QUMeqrjN1SZ3atXBwsGa4Db6gmRec6L66XVe2SSzTCKPzFrRF1x7yey3BhxWocCLYfVkumYQgH6PYNZXiMtUDWE",
  "key37": "5UYJMw1DvfjgYjUyXcK3YhFerG9joKWmgweHdgCEj9L4tVS5NZkwzoZGKdYeeND8yZj1NK5oCbpise1xFp5kipv",
  "key38": "5s6sNkbcHYN2V6rwUjPbNGmL2MWMCqEP4HDYoVW1JX6sc5fvyNNDXH3CeKaduNt9M8qFXmBtFVsok35SRp2xFSm7",
  "key39": "yt7kAz94jKbmQgLoCrMds6WmvxYByGRCPx9faYZWsDRhQ14v6QkC5y8jLnzA421yUmd1GtefYoMhdmrg5PrtWxd",
  "key40": "2NxDs7K2dnZFEfx5AQgcyVzbiUQt1JyTa2TsTjGVMFaCYTSEY9pUSyT4YPbqeV8VmXFgB8Cr1SUALgEXdirDzqy1",
  "key41": "3nCppEeta1W49AYQMNcTLnMJ9aroLuw4vQZRTBsbfQHTZowMxDFg65xdjp166G2MypC1BU79UCWZFtbrhrqG31U7",
  "key42": "2eqo8t823VeqHwhejtrP8aAvXmTAhjmo2V4zTSgXJwwLBjkQctR2FzivUu6Teyoo1Cs3sZqk2Bt6xQ4UTb2oiM5B",
  "key43": "4Z69ko3VbYjM64mRQBgexcWRBNVrQzfXiH8QGPVVz4TweE6addvGuKGzdFx5msfmzQUZRrKmQYWGHMSP1M6wEhQk",
  "key44": "2wQiQ9QAbMviYCX7xtB6gFU5cujojz9247qaWtvpd6ZJWFPUJwYzBMg6TF9n6mTEWrguvia8cQeKKavwCNykn78q",
  "key45": "2dbzVjxEHRXKZdt4Bcx6DmCaUUhCJTuY8zZc38MYgx3hVLwBRk5hgWsh1oE2rMX3FLZEDLuNp573EBvHN3a4AnDK",
  "key46": "3ZWQu9PoHT6RaogfLc4XvPnnHxcRxGneW9GP2pFzLNHFepPbhD1jdt1NfRynbUSsJJyfaG8p1Fc1dE2fazqWPaSb"
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
