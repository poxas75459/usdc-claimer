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
    "3UmJj1GEZV9EDTWSSRvdBP9DnU5w5LkmDzjw996vJLTUM6Dhik1QkLtceSbszXhvSZzDo1eDaeoh1Hqu6kbUjeG7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46uyhdgWZPeAtoBdtAhEbCygjvEet1cYhdLv4nkXFmL3Q1dVLoRy7RCPd2qbvjkBrrsaa3Af5eToRS1HY2hxFWeN",
  "key1": "AbJo6ERuA6xCTDo23potC1ot9Kiiqx7Ztrrnm98rgRncBQFJ9PU6eyomY6A7thv6XRePrp1yrSfQDHsQXeoZeTi",
  "key2": "2k8a9TT5iUuPALqjqjZDCWuScZM6nb9MGP9zYM9eAqUhXiqvy4uYAZw9zNYzc7QeqmPG2AHTeFfCTXbrv81yakHx",
  "key3": "4vheFm8UYJXM5udcCmKPnsNfKgBVTHUzcnXMUN8CLb56Ex76hHiHRCbkffFmhwa2UfrJ9Gmjy6B2b6xGne8VFe6R",
  "key4": "FbgwNpoYwqAA98U3P5rdm6eRXUMYouAouGVvd4Ev5EFwhTr2hBHmi3sFrdWayWpc7Q8YtysBwEzKZQ6y2tWkHkA",
  "key5": "V9hPJZ4V6MdeG3sM55xrKQratNH9ed1yTyHAhkFFwbKcTTRqbbVtT6kLAJwGRcMgHLHPM9UsqBa5P3UqDFLQFjy",
  "key6": "2FMLCYUo1i2bAdi8ic4TgrceQ6RPJgvc2x9wLXaStrcsqw3DZpCzRr1vpW4CnXHcorfEzZFXjqwpyVuW6n7HiHLx",
  "key7": "3nSQzsDsWSQPY1FNvSHNfQXGVnJmSbKqz7ehjn98CDboE7kMiVCCQ7tSG5ERNVEG7oVjNP5XhrZe2Lnw2xkzWKPv",
  "key8": "55Pjy9FZNdi1yyYDAW4RbjD3cE4ecuJz8K5gvrC9B6u3uQyi6Evsy7T7D3F3AeWmz9ZFGd5NQwpsSxU7Zb8aQjWg",
  "key9": "2UhEJZgs6djege3wJaQwtGK9To2Xnum76Jkzo1adWU3mx7gakR8pMu4cwyiLQk9xthCDPeWWoa8Lay9FzSoJUPP1",
  "key10": "3yUEcTXz7WgjrZzoGEBWkez85fRQ5J68zEibiXaWSX4YoVcqTrfW8ArpxQSZ6hJ6CqNNXKFM2thm9bv69o6evZpc",
  "key11": "26NtZdJvuYSiDo18bkSVXSp2Mk74eZiD8kgPrDzjJTzX9axNzZ8Kqgd8n8HakUmEuEdXjTy57FnTSnGEfKW2aqMR",
  "key12": "3h5CcFu2rtGeaDGu6KQQrfELitxHsLNQrari957aECrXcS3PTjcUW7RaJ3nWFrYZfTpmLFkPkpMxRG3ygHm8DAVZ",
  "key13": "2mypFSPzPKNhvR27T79Fh23VN5agSS5AQy1uSn42EEuEoWdthZmiK4YsDaBj57qx6BakXL3LpLc426d9HMuVzEJ1",
  "key14": "2Cf9gwvNHizjoKmHGbZkd8tRe6ab12tXncLYGnh9MTYfSKhWvHki3b1CC25zL2fGePMkqyFCA8MDGwRayzc7Mfxt",
  "key15": "4hzAygJUbESxBJ6yTqVaoFXNAEvNZB3GcVeUkEYcHsLD4HHpMrKeWAXercBX1vt8hPVPkrtMgt2nLYxcFq7B7kH",
  "key16": "3s3dPZJ7Ebc2bijNhriFCXcaeGH72bRJ2jSZg6YLTgSrLDcyZge2aKBUctwkN7om2cXraB1sxYacqUaTMUUdh2d7",
  "key17": "4YGexA5bzzeN8Tugomp4hC4LAgq1YRhsB7F29JUvgzahrax9mo1m87kD1fZYvn115ECshEs7LPj64zE51vwLpwHF",
  "key18": "5RijWxoHbjfi7fCrEgwg7m9gDqJ7P2WpKCv57CxFFxFZgZPqTyxVS9cvzRr29dbED4r69TLmXVip3ZDgdaLMFS8W",
  "key19": "GsaixZ7amUu4wG23AMaPAGjXTTukyQLFEQRMZNvBLgKh9ZerFWJ2xvbmnmKYimrgVt69WpKpLjGiCWb3AQRk6YS",
  "key20": "5sj4fFZujmqeP1MJa7UPgc51mM38ud57r8cTrMwiunKMuc3Fos4rWAF116dBTPz6rDVwgTyQwpaHcvxSYgXep3n6",
  "key21": "4hrMGaAG4huxEgSTmtnmH4bPY8u84WZT2rKzX557zRahrfUrSbupsG2LGiBi7Dfw6QUidK6GRv6noBBSiUehhuHv",
  "key22": "66LLaJa55XkcNB2fdhw1RXti9HZcp8aYPE6NC3ZM3Dgva6hie3SFzD8afQrfBqUc1f1zbTTiFSpSeYxFqqMea5J5",
  "key23": "3DdoxzTkJ1RQqyT22Cr8RG3eunyiyt1GfybXXMiK7VPaSgAET9mTU6YmtS1gpXZcFu5sQTUUKdYHr2xkMEo1VoPg",
  "key24": "3Yt7sjcZBx5diAHSSWv5SxSpn9U8DnVLTNDQy1pTCeyxKRtJr2gqejQFimqw9W9v5GXqfSjDsCwWZmMX5ojXMreQ",
  "key25": "v6R9ZdjgaH9neKnhksg7A6fuJRNzF6Y9MibfnmZJ1J5MueJhLMV14w7oUY2RKuwjyMyqbP9gS1VogXh7Ms11JRw",
  "key26": "4avruF5eFNzuByfjDEhFP1xotLy1ioTWRFgwYEVqV9onH2Pk6BiUfEbByEk7HKwLgCPkPSHEH1YGrxrWVeKzk4w1",
  "key27": "3wkBbxNH8tZB1pkjHdtLjigGaWRQDguR6nxZFejPKDreqty5Q4vZaVEvpJvdszg65Pv74iH3bFcrKPzYa2wTR5cH",
  "key28": "3xaZHajrm7P8o81y3QGA8sHM1Pb7gQZdyziNNmYgUS1QEHbVNEhXEGxcWKgZeFAQidNViwoE7ULpVDdphyLRynnd"
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
