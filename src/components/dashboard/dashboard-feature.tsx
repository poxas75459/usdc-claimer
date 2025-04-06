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
    "4M9S93zn3BrJwXtsi2gBkovRn8a5RmXRfMQeV7N1vurUW3uuyiH9RGiMk1zEFX4r9xvrPANdTsEAC2jVBMFrWzPS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xnoLq1shEXdF9sFGGcDH4MQzDAdK72ei6XjF4wjZujJBDcPZDLhfkgKab8YMZncwVdYpNxvn4CXH5P6B3Ce1XBT",
  "key1": "3T2YRM1WyRYU2PjEFsqcQ5DHSRZfRPBcsm6YppgW6CiRfBkFyw3xnQfMmDH6sQQy6AQ4y8udnFzEVy29uws1rsid",
  "key2": "5uKksG4aVT8eTDkCmKvzqYu7x7QBBCk7xG8NB79NwoujCwazPBdYw7Ge8pmLpFVGDxLHqT9y9JURSzfRCs1jvXKT",
  "key3": "2wJKM9o87EHyutUJyZoLVhvj5VPqaoNa4ZnXTpkhb6T6QE9HauLyeAqzDRzznvkwXQpSazaaqn8a7XKWvTsDpPq8",
  "key4": "5NiVqCHNDSUuGMDGp3c1dN4oQhNdTRe4MT5zhVPGdPk9iMyhxntXJbVQxoZzUofNP5WPVQivNoU9suMLpGN9AoyP",
  "key5": "2VP8PV1S3ttQejyhVXdaQ3KUKmLcLKAWRKCAZkdDMyp6SQxACE8q2Jzspcs5jm6poWMZ2PWmHSvrLTwhGRAqFPzV",
  "key6": "2MTi3uuEw7w3YTTN4Ym5UkKLEYYZgypTjVWG6ht3X7xjpUHtTnaRSqQMLFeg31HKcRTeA1Yy9c8DACURNUhESzk6",
  "key7": "WqQvV9ib5wB4La1duQmnP3Q2V1jb3gdZWLX13wFCtWs5VCU9XHFNPfs6u3cYqvdKhcGueVgpYcn1FGy1Gwhhr8V",
  "key8": "34RurTTjwFgZE2wwB8UNw22uxpeyBuP6JE6xvUwXq57AA37fXBWGDSXfjcDUyA8j8npf2xGmKhYxBbRoX61JZGcM",
  "key9": "tLPgMZtwTDozunD5dbhCtq9AbrcTpNBoNr4ker5WFsD47Sfqr2iyi6hVGEzCaiC4rkdqtboGkEBYMx8F6CZXiur",
  "key10": "5uWzEcQo6CpbKVTu9KMkocHkjHpxptpTh6192MWRjCcGXgZcGsCB6TpSsnsbQU6HnTW3mnbNEDmBtVew2oynFx32",
  "key11": "3oBPMZCSvwWN3Zy3ro3h5e8oEkgKzh9YD6qXYDDBRLEXAsY3UXqMVx9mxyy3z28NsRAAJXSHBXZrizzeVikfKyaP",
  "key12": "avgaNwcAPTDEhjARDwzYZhktZ4EtGmS22PEVZjYLnRuXvVefvgx8Mwmrci824M4q2eP1Hda8eKexq2jCMpnvrBX",
  "key13": "kEPSUXKVe1YTeS5xJTSKwYA99AsH1avk16x8bfThVcYmLtvPwA2V421JKhdJqiWPM2Q5PSVHeQRTLaUEuK4E55N",
  "key14": "4pnvTAttYQ7ckVEiSrni9WYSjkAT9wmDx8rF3aSXPgdWtnmodiyAv8YXpMEcpsMYjrReApyXy15693LXUF2Hqgzh",
  "key15": "JH85sJ8i9dNKcgiRs62NzJSQjiepkBsYKk3KuidchDv21RA9BSyMTfcLYL8cdrhvEqWV77B268nGq6NNyiM6Cyw",
  "key16": "eYeaVtLiDvGqa9p1FW8s7pdc5RN2cNGP5CbpeNzCGJm1w1pGr54oQdnnrRfYZdGSkyCWVoQcmZc77CLHcFXMiiS",
  "key17": "2rXK4S4q7mzEZHsPQeDiDZwpzHtPons3HKPvzKoqhuFXHCehKvvvfssvyNU9QLdoHAKwS865jUYT3s56K1dHu6GH",
  "key18": "3nBe4kkr682SBxQ4D7jR3WzXrJ9ZETYpHRpKiwV49p2TidzGYonDSFqfVTWmCv43HbfCCGHL3kso7X7pAqKTa5sJ",
  "key19": "XSyo3mFACvicV7CZ4ovU7sH8ayR2rJgMruwnNqU5RCaH17e7KktehAeem6c4JDF4jE2ChuPLNg8HuQiCuKQee2v",
  "key20": "nWy5peFgaWTxbbxhkmuswJUay79Hgdnq1EwUruGsZ1nyzuVGmmAYcqQgh2123g8pPyuxca6K4RZquiuKnvv9444",
  "key21": "2NEG34pLxaFyqT4SBY6yaA5aLoezc5nSoyAeyyLkEujvLYERcwKW5y5gYJfvSVGadNAMmM4gSZzioLf2RWJbUEoS",
  "key22": "3JfNwjMnBHBmU5gWnjRmuAwAXZkHaLe7AVrLW4jRndmDVao6SiteppC11oXGfmjXHYDsjQXYxUZAFpNSipEeUWMa",
  "key23": "3qBhApHEYoc7baG4QLamSne5GbEb2czfw72iX8mnbHDRR2Ma8BYUxqbwVQmRCSj7M2kjBchr7Jkwtqku831LP8ev",
  "key24": "A54bXrtDLuzLp8ixbbeAXQbLuwHEjhKNACPcfkqwSAQxYPaXjsUJmWk7YXDVhvsceUzyknCZ3GLGgwDMEWn4axX",
  "key25": "2Xh9ML4RJNFwktTLFr1tcHNJk4EntCuRWXP5CrCQKk6ge1uLFJioyQ6ZiA5D1GsYoF8xLfFdK8cZZpjGsCHyXtHj",
  "key26": "5DsiuLuKdhkD4yF5GT6vMjkv6VBtDs8PWfhoL8mg7JEXvA2eoe4bMV5B6ZzX4VjkxwvQLybnwJEBTyKD7MisD1kr",
  "key27": "66d6tMgS8BYL2aL7xq3CStLZQyqxWtCuyzZ2JhcEfc45LiLMgyq3bCKvVp7VNUDRVNkTkeaKYpAAkiafricQRmgR",
  "key28": "4G8U1csB29TQu7BfGAwcm6Zt36XBzytYsL4DfP6YWWyyRxw8JAkotiJbk8ahUVTEkEX6NGfqmoaxtYPGarB7rUt1",
  "key29": "642WqMsuzf7XAfTWUtburBY5w3ojgxyqf468qaZW4pVmZ6in8iKLjScHhRP2SFzRaXYWaNcZohvumpGQjw4pQqdF",
  "key30": "3x1xFeKbEGtfDgtWGEcPfSVrVBiFUZY6QGToFDBmGm2iNNvhq5ZZam8Ej3cHrZwUqYFKaeTwGz2gMKjnMSexr3Ho",
  "key31": "4hB6YettMaB1JXwyHT23k7YLGA4w34hFqfJZv6QUsrpQ8veoyniz77wwW8bpuXWyLDBmKDDB4tVjLv1kZ7fxiGF9"
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
