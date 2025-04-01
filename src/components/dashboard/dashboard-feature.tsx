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
    "M2B96MusbMveYJfH5eUMp1M9RsAnGVTv1wSs1QhUipjqrdKWgpbGtjqqpxWb519pmkRBN7zQ791G3jgFVesL5Z5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2scvvaRdtdLwTtL5DXPkWhUoVXHXv6JcSbeE5PqLeCNAhKV3kfE6R4K9KJrJ8JCkTHYiKoujydXX4o9vxA3FeZjV",
  "key1": "5Ygsrp7Ypn8TmmL6Lv4LkWvmtFaDuBmCWJDwtLbATjW92gbqV8dvBbCmm6NRW3PVJsNEa3zTC8E6bVpNxcuAG7Fp",
  "key2": "4S8T2kb95oY6vwPk3edswkU761gwN2fVhv8ffLujxFRratn5MQyy4DDWoT5NUxuQZqvLGXaVob2NVcYU7PZ2XAwU",
  "key3": "2X3WyYAySSwUAXx6L9NdE1BUYoZ1TYQgWggnjDmgaJdezPNTbotyqVkFJQyFe22NvezsZGzqmvYgncCR9bkXgeNS",
  "key4": "Hh37vcra3Qhf51XGFxLpjAJC5HTCeKk4efH7hbvGLKTQRVVsjujpMuuE4rcPrb5uyZcEuNjXEUKJjo6TyJty6PY",
  "key5": "adMija3N8RDg1EkGRXNfo2E6vkMqBWsg9kxhxDy7vRpRhNY8Y4qs3yTvoib9mHtmepeL7Z79A3ggsCbj4Z9ny7p",
  "key6": "2bouPh7JeyeicgKE71EhodpEpJn2rJ1BQYmZojeBL5FJUjwXVJs2BzHiLxqY7m5JeZarWkW9vodHoMozvwdoegvb",
  "key7": "3hLUaANnXcQkxR8rCguDbNj6NgdojuQCGJHXGp6pBFxujUJhC6iGmjYyfsfLC6KLpH3yDP4S8TRREgA4ZncwbU3K",
  "key8": "24gZHZDUsvEXbMdQZpxvk1CZpXDRJtV4PraJHujUipxCoMuw27k2CGPvpgjZNthPtTjyCmxG1dzUYZfFJ2GBeBkZ",
  "key9": "QyfhbH2UcRmKmNw5x6Wn6Pzh8F4rSPFsCtkHScDnMG1aiQPE5oWLRbToX4Jbgke63yVd7m1sbKDVAeZYTK6Tdd9",
  "key10": "KibJx6SYBpBaT9qrFRXgdaGmrTtbEQv9H95EwaZdad6HLWmVAQ1aqQYxdmghKqueeQkq4pANVEDzxG2UqUy1Zzz",
  "key11": "5VzJfdnLwhsdAosKRD64L59DbHQGMEHsCi1B9SB9F35kNG4C63kAmzpVZorvX8jYtWJnUWHTwkTj5Fqi6GyMXbqc",
  "key12": "2RpiNMH4CcpvTw2FkgUsdn3QpLisxni7Sw8xXNrCSTaggqjmay3X3XE2ES9c29Ag2bsgUaNKjd4WvB7qEyLR8Frt",
  "key13": "2c9vSLKUqa6y8VrJ92iEHb1RBuhQQ9hce34DL545yE6pX1L3EXMFRyd3Svuwi6eiAj91T8ETWSJ3HtxFBS6LpEXi",
  "key14": "57hRya5m18rf4Sx3ctA6aBBWx3vmbufmde8iV7n6VqrS97Wv4d2Q9YJz5SzZRnNFMUD8FWHeVJd7BERN3TB2DUwB",
  "key15": "33oSF4qvdJYyi2dKuwdwyPMVpTBR7ZF6c8CQ3wUbPTaxDkJW9CvsNimdMYxuR1MmuoFLcbk9TdNnqY5z8iJhnrvu",
  "key16": "gZjAtAVE515UXqr9gknTyCZ5gk8mB8ZsX9B7kSFc4hLHdQk194q4HjFEuG2YYJyUSnwZjmsVGt4crLpdFJ6GABb",
  "key17": "xPMaTzEqRDaQsRTQszZVac4WpfJkCmtMFXcEqPs46R6Afw6yKnY9zFkkGMTWkezuuNJPqVRMoEyed9Sm6yCTX1z",
  "key18": "f7fDkHRzsJtpca8X55QmZ6QhJ4w68U2VMhZMbNjERWsWYwm9mZqMcHUtfWUd3F3GR9LAsT2oj6fHmpcgcfLQopi",
  "key19": "4A2W1LGijv6Kx3cXvXt6H4d1w2An7dnHjckwrQ2rodFjzcz82ieyCz4JHgZt2XcP2wSu8ajf9ediVbstaQJ3ZwQ2",
  "key20": "5quSNdmyp27UDxEzKGcN9qKoSUkWxjFhphcYvdKRZG4JhUm4nbBUdnSExXbCf4yNzjFroydHkWZy53XRCawd2Bzs",
  "key21": "5xDA3snEAKRV7QAAA7PELFE8xxGRZgyP9J4mJ7cWUyq8VD4yQTkPfaFNcn7ye8WFgDqcSqaYTqgsKSreuJZa4A6W",
  "key22": "S19GnxMDcLeyuzgo5EDd8fRjnENe4GfZWo3ykrUWdkB71AgiLJRnBijZk5gXZvGS6TEzTNfKr7wFuaWZ9sbZdwT",
  "key23": "4Lq4sdqyTmqAwakdC6ULrvmz6VKXBbeBHRD4wWLuY1UPnCjtknNbVZL7hEYudKzhdLeBimJjbH7Av9RBDkS8ypU6",
  "key24": "37AjQjahzMWqAG4JAwqhzDHcozmnEUvBuGBiitGa9tpoUASuD1tz5Q6zuewWJ3cBS9KQJFxLSFXj9LYMx3BANAf9",
  "key25": "4HU8t1CJuRYsULZ3L5ePFzdaKWtX6PiXTucNcvdD8G1YTgTbsncNVdteLsoPCNXibEjgpSXeeBgRqguopwtjQzpZ",
  "key26": "5Cjnm1F9YbHYT59h5B2emdYhp2ue9d3a6GfCoBJhbTNU6vaLtySaAWudB6Dvij7YqVwEVoz75UBcEGEbmznVvGqo",
  "key27": "42cX53XAX2EAqShypYhs61Yi2pKPTydBnnLHtuwE1DGFRkfKw2PTZWgFWFUkmNnotvXEWoKifyWVNxcP57s8m7EB"
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
