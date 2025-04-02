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
    "46D7noDdb4XCWm9VjhSQVGjdAr7CGX2afK7vb9mKKu1Yy165ptd3BSmJmt8eSCvwoHU6nhu1mrVBdC7RBDqnAKVA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nxov85EBGhwQFz3WBrYsZ2axrvTUqg4E8ZyVLkmnecbuAA6xCmwTomFtr1RDAyc8kZ81jdmhN4tNa73pS4MKSuh",
  "key1": "JKhMv1dj6R15VaAC8wsTcGXjeWFSAifxa2wB86P4ijXH2RgVcNWLaZjAKias9gHh8Hy3C6rYSisviBEBes4W3Vy",
  "key2": "4AnfoGQp2L7vtZxFx2QxZdNktC2G6BaUX9oq155qTqgyEck7bs6znRNvV59i2yBEFgxXrVwRcqogaqQEXUSqhcGX",
  "key3": "4Wpd3qK8CRTARtnUeUWibm7pHGPLEWyC7SUidYLRAgCP4KKX15Eo9B6CVhjt7SjdprMCLp74wVWNMiYfmUtt7pmm",
  "key4": "X4sqRvs5emLe6GHew2cLSdBaqFCTzWjCbBq15LHk1YpMBFSy7KT3P2mZPgFEW3HCXPCD5vex8sFSSVhRssuQeGu",
  "key5": "3QwsAA1ZbGDwX9Yj5LoninT3nfRxfGD6qpsi9RRxU46Ze5JQB68SSWSxPYGww1JEz5mwLr7Mt814SUejoVS7871V",
  "key6": "3Fvv2bLRQchtFwSGkMVpzdHfQSKW9c7hTzoCVjDbUA7yyYXi3GVKADXVWNah9ZfakWKHTWswEk2894ba3LF6eJYE",
  "key7": "2oTW6EACkfygQcmCntzdNpRR2GcUDcsGNKB61kmGSV47EYRbc9sfRGLacBaKpTAYWSvkJGdUo2ytVAFw6Qqg2km",
  "key8": "5XX3VQjV6QvYYpiNG2PZCHTGZdysKfwhJg3DytPNU3WauaaA5gxS1qW5uCknfhgJ6EHeu9gWYobY8UwPVohXTsvt",
  "key9": "2aPkm8sHi95GHDhKRy9CwW6RbLVeXsoJFKsugQVjAMJXL53Q8w4X4MyQjRtaqV9BZwbkg1eeFekL9qzvwqyDACMD",
  "key10": "33FeaY5BHqP3qBzFLtACQ3DT8gC1Lupw3PJ6yepwjzqQX8fnD9z6iNe5ybk4r51JfUJCLVXK4y2a6PEbN8JyQnUK",
  "key11": "3A3mX8AGpSggXYQAAyR6o4JQs6ipVZaKfCMFLEZQ1YbVShWh588ciqnkh6wukkZATFUHNjJcGxqqZw6Pv8Tyi9QV",
  "key12": "2Nhc1QLHUQUTNhU7cH6MTYUeu3x4TD745WkbaHm2MGtMwyLA9AukqbCKM3HUZxeBDzzkkWtEAJFN2iQBXcTMromH",
  "key13": "vfddwH4WAkoZJZvx6HsCSXUncVvmzDY8YxUMKGgTuhwZYJF5fGJzqU6P1qBXVEktCfM9kmmFVc1hYd9MeJWgCc2",
  "key14": "3wvmfSdBFcTgbQkTfsKf77a8kjUTiFFhp7iv9zyZ3Ai4uTRaj5cmxhXFyF8dXRJ5zUKUJJHnCjpzWMUDPtgucGU4",
  "key15": "ef1xdGmgsCpmNfLSeBDg1XNKQceJQGZ2Aq5vy7bzwRfaspGS6oPKART76AqitEF28eStJJ1qVMPxrJhUW12mGCZ",
  "key16": "tihGQMp1msUrWosjpzsaGJB4EwpKW4ZweNdgR8Eky1rFAHaRAjw8x2uT1LdsJKXY4CM6h6nuRWuGXPu6pKNEzrj",
  "key17": "2gh5hKN8HFm6febjdb3LwuDFD4ZAExEobjRYEKsshiFmVBTXqUwsPBHhc17Hb2Dz7Xpjn7KAoJSMS9xSw56K6a7Q",
  "key18": "4KdEsTQqihxFEL3jcU2gnsZciUcS1iXJ1VLnBiD8pnKvgnypJx5z73t4ajb91vvc5rZZUrx1jmNjbpes7Dcxh8ou",
  "key19": "1qwjCtH4h2MAqQqhz3qT4FCp4SP3j2JK1xBX5j3nCv529NDuBsdA8WzR7RfPgRyFX6mpUNWDXTQwK3gN11JtWjq",
  "key20": "3jfpV8cEdRqdxvNZtT9LemRV2sjFQd9KTBANnvQMvXpCB9Q9YxdvtfcJfAs922oTNwSW4V3fAksPMJSYCdGjHu86",
  "key21": "3UWDkJw3KRvV5nbXhoqGL5iF897PGnyFPcn4zKVyXZSnz6BRZs7akjrxNaxmzZY4TLUH3XAGdra7wNVV6kKuNBkG",
  "key22": "4PwT7L1h61XN9BhZthb9SZbGK6VRSKqwiTvrRPekarodbtYQULXG6GzZ6JbfZncrzKUJ6Fb5iebyQ7u7hDT5VzHh",
  "key23": "28AJXceqRS2N6puKF4oyKyT2N4kDDkcyhxSWWJUXqwWJJMdoGvuGZnam8y6brQ8NjBGsCUz26U9p2NQm2t85HaMy",
  "key24": "5WZzNWAsxhzDkLYCwW76nb3c1DmH6n1aerEmdfyx2FaxzwkuxZqAFck4w8nopf2GcmMh9mUZmvAv96qgjW5qBmAB",
  "key25": "5iyShd4tc4vtdJMpxZoDroQdazbcp862ktz2ztwps4nYj2f7sdrc2P6qNqkhkMesMFEGkpmEQsNfYne37r74eGDD",
  "key26": "24DuaT64FPjurHb9BAXbo6wsqi1tudtsLkAc2xiE24YXMVpeMWQQS85uJzjiYhGVSHESFyaWRXZnnJz9aNrp2DQ8",
  "key27": "tGi6cykDwdTYzWpfttrqPpyZBoAzp1Avr7S67NWo9rkxGNgSDXtJ161WxWrXhTZJ7rSUpg7jTaPmZ2xn3ujEaRw",
  "key28": "F7eEEFaGT6QnSviAyqRsEkiHbueL9Pge8uNHkwkBhCTBNwpKonRBm6mg5YhuyHadbxUtrtQWM7STNjmMtEi8X1d",
  "key29": "z6aGgMBF6RGdzPnFZ9XNd5xAq5f5DMYAF1fTeeJ1GEnETV6u2XtF7bSViuW3wY8TzV93EbWsm4qwTHkmbfxvxe1",
  "key30": "25TUZqQ6WuxHGayJkYkKfPx51AuNPdsYuhDW9eh9qcK6Vkwc4peNN6ac3W4q2jQwNo8bUvsHFgJ3CnvjWnujpFHn",
  "key31": "2qTZ3o5tKtGmRo9tjJnTfaDq9Woox95gUvhmGkG3U5TDbtLzVMYVaHMXcJETwKTKbNzUpmXmLfivpFGXWd1vcxbu",
  "key32": "37NNRsGEHQ5KVx5yPRpVbdb9Qs94sdBzHqSABY7rVfNPj9JNM3hvJ2sR2Z4BWjxMgRvsi2nnZ6v5Jfs3egVEkGmQ",
  "key33": "3Z6dP6M7r2W41AaJ9P7vNriiYzvtnZr5GG45uN1AVd674eAWj3A9PGtfe93MBSPPGFEzPdFtwg5dY2sGxvJTjqzm",
  "key34": "586BqA1bX912LGHncqNEaCq95t2FsmGkMpvah7FPU1xcP92hgd6EVCs2ijY48okBr9b7qadB1eG8wXxg76bxqpcF"
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
