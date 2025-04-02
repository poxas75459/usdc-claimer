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
    "ixzR1GDeZACMYzCdJERabzufwL3aTRSoBSRnJdpUKZFG15LGgFzyBaQsH4Z35LRfLcviFwXmri74cAf7wEiHtsF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xs8HoqmvEDBybV2s7KP4k179hsSemyij9rSHBzFKHLFBDV3LsBGHRyUmHiC1DFVCJuCMu5yKzSvJHNbFwyTfm8r",
  "key1": "42X6KqSfULEYvwjVDasUp2SoRzHwsEknupv8wzjasfZXTSuVeUe2hh1GRZmQ2C3dJeLzUr3jHFCpCF4sKV1Hb5c7",
  "key2": "5oEmr6QfCzoUTP6mA5shgaoEeQxYGdZ6At6XhDm55RdMj3wfW9BY4RYKRnTmnrGLiu3x7RLiu7SJa6rHG2W8mBay",
  "key3": "4m25M2FSaXSFvKDDogM5VXm3Jx82PuBb8zMZy5yTKtf6JWoXdzSTLZgsjwj3sN4zDC2HPSb8eSgqutr1CFu18id5",
  "key4": "4RjMMLrweXf3CYT7SgFfTMzLD8wzChXLDHeKbP8cLG8Qvg5So6xpAc6BDs4PPk9WXVgw8Kkge3UEH1RAC4RQtvi8",
  "key5": "65YuF8VqMrb1hn2HaoWLXzkJ54FYhgBceBXDnqKwQKDFBkimdF5JGCxupPJq3axG9SRTuaAaAjctDqNdoc5eiAbR",
  "key6": "2uSa3QEf8Q93AkhchgcmiZxJVirBG4jZwBBvJceaz8xVDDW9Re6AR32cj5Hr3FRT6Lu46wun5C6SxXH3WbbGVmZ3",
  "key7": "u7RAVqqbNsoe7vn1NA1xaqEFDNjbvmWv1UVZPD6icuT3vxwT2iiC5pgmwAzieShyQ7s9s6a3Arr8koFFMJ13yK1",
  "key8": "4Bz2h3Xi7gM2yWseVnPcmSPuYxFLAZehPGYBaEhxvD1mEu6Pn4pmN1bsS1D39598Nw2Le6uSU2W4BuAV69boPJ8t",
  "key9": "5gsHC71TzrNhYhKwCfsowTZ2SSGuys2vfkQkAdjuK284TKpMJRQh7W4CQMh9oTZm43uHA6EZyQrcpTo6VTsKJxk8",
  "key10": "5nGwXCcdUZY49m6TKDDKw6zEAjbtN3anFzJxLb9RnjHHQz9KDQte1DXMxXA2gYQuZmzGTBQZYeTpeFXNVjFqXzz4",
  "key11": "2bu3nKxip5BKoRfCxXwfnwTYUcLCMaWcLqNnMwyJhek5VAEMftrvLvKwhgMRffQfFvKkJtQgg2jtRNvzXSuHPTdB",
  "key12": "5nVHDJTuMUcbB1RN9RZ2TUAQWJsg2Sff9d15GsEX9hQ7mxvkUQXmgXSv1Ep3X48NR76B9PNMY2d8TEyLMG4HAzZ4",
  "key13": "2TxiW2NXGXFk6XVsRfkdAyUDbys4wUsc1DYSs9cL9s91fZ8Z8rbJ2RgWKfrvEFhNf2DW7ZASPEwSdK6U6LDTh4A7",
  "key14": "4CtJjpVuyYyu5mWnYo1H8cg6ebyC1apDW2SmMwGoMS8eSiVLdAhXDF29rL2tQLNsmhW8t4vAMrRK8xBe5uYjEJrj",
  "key15": "3ANafMK7ZeaQQqrDoA7DNfoJDNnMM3QjM8gtKvpsNQpCqtH9qsaa3tkvK1dhw9fk3Fx2ApPSb66ihSTRTtYqy6sh",
  "key16": "3nhwmomDSRvee8J8qhsdc15TyNQSXvNeybtxf7gSodWGGG7XMSEZVbK3iczotdwESk5BzRhvRAUaV9cTbvE3hzn",
  "key17": "5AfWHh4dPoRh9k1nwnA94pBNtaL8YY9LwBFJfnmPxmx94UFQtdpSQRE1KqKP1NPjStRdGvMFQSivZtCMfL6orLN8",
  "key18": "5FpvYxmd9X1PE5Bxpo23HJfkXcHVJ3NHk3izxbca9mEjnHbsjMLPRmR9oqW2Scws2tydqqA5dddJRb7nL8B2rhA3",
  "key19": "ogaYXx7XyrA2zFCsoDgSSt2GfrNNQgRJAwpj8iijTFgEjdCmoXvk6DmiZeEp1VxufKYTT62tnoYK6iWTVD4nNrd",
  "key20": "3adbSctJ8PJfX5BXQhygqUXMEjWPE3PUZeMNaKLtPTYczp5xo52ks4U4Da298QvvuS6tnMKU6qSkhJhXoyxmfqfJ",
  "key21": "34Xj38KczZNfxrnZLTE5k5NuQA1LXq4djXrioCXvoZAki6ULEwyRdYNE4htKF2Joast6Yer6Yzmwc2taMBJGxtjt",
  "key22": "126X7V7iL8dAyvXN7bY8WV84tP3sa9dsATZb6uSZYK6Z6znaAj6Aa6V9WGFCiBw2bkW6w1ocNc2twakQG9t7jByq",
  "key23": "Dz1S1rZt3Fje4N5zS4CSKzxSASEGCUYrdwc9qc58HvMByQmYjFdYaGMaQEfnSWLoLBMQ93E89oXt4ZWYxNUF9m4",
  "key24": "2AtfgwS4VkvGmprZp88DxiFsvBKzf6BMrAUkZ9hLQ3xgU8wvd51nZHcDbMCcbVwSfbLiGnupTnFxVRzBNgxynkVC",
  "key25": "4ee6kGrg1Dce8WTmiAhvmtdpU7zNeRhgxibwibBmN2UZBx5wBfarBPkr3b36K44hATPnSV8mLmVbFMwq3sVjBrSx",
  "key26": "4xGNJkMuMYquvCnR1HhNWTjW26Hv5SPFVKmipiCyaaAJSVnWgs6S7C7oj61qGYKpHPgzaSCm6xRFL42wXnWyfGuT",
  "key27": "2DLnvXFsVyucX6XbpdxtgMSfpVgSdoi3Nr3mrrGgsfwpSyykcW3vVvywf4bgYcXFRU9kF7CsTmpT8PpuFYJpSgMD",
  "key28": "51VT41genYAKgpixtJdm7zi2uTKjT8ruVoqgxRBxWCHDneQKw1vV4aLjjz1owMuYbgMqvP1DgvQWvBK5xuGcT19M",
  "key29": "TgzHBa6RUh6fDVNt63nAc2ommeFdGgx9fjUdUTuqaDsb5Acii77AqCMgRepNPQtNwe99omoYmxnB6KXJMgZ2jfq"
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
