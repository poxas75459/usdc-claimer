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
    "3ZoeasPL7JWwfSEmSxS3Q1Y1E7CBfwq8XLvrm3Q5ssx82DqDyyoQkskqZuKrJpa9cWXVEKBAung9GrqDGCmHVS3n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2P8zVP3FLwy2pBZSLVh47xrV6JLHhGuC9ryL7bv5aKCtWFx6PsAWgBG5FLEesRdqiWMRKPXbQUp3wfk8WmAKuHy8",
  "key1": "415N8iyhfNXDBMjhM2v4hCaJodaeb5VBLkGaBSroYVFnDk1N7vjNszYqzoK7ZyQA3Xfx2eEWxxfmLhgqRtCYKiXQ",
  "key2": "45fQWabwkiGzUzZhWGMbCdsUDBQWayjUx7kKVgREXneciavj629FomTxX5w31rBMjtuvEkHNMHLcg8HYMf8BeKnG",
  "key3": "5rszEfst7mYDBZHcAuDgpub3c5e3VDraS7Q2AyCUYJuBEQwTM4GiRXBzgexmiw1Vfbf1QLfLxXtURNspkQ9WLPxz",
  "key4": "FUj9NzujMPjiSP8W1VDbKbbw8FPzDijdbXDf1dWmr8motZHsHH4V7zFPH2tigKJdLgvEP6bcf75wQwpWf9mmsxC",
  "key5": "5LuuSzLS9mdkhETZFPQxkh1FL9iLy8Xc6fVi3F7B7njUowjbrawp6gLDsCs2P9jXjjbNrS5KBeX8BiQkGgYu62LE",
  "key6": "5jKY4DsP9uD2ECXE5Gtyj7mA1za2JSLRTQ6L63RT4UR75pT2DHJUmffmE5dan882qPoWrNusD48GY8AmcEoragem",
  "key7": "5DYcL6TyeXBWJkQAufRdeQ1gDivZqWNSd2ZYgqoFzQpQ9DyisgGsq4Te1P6b74S3wxkUjdK921PoEJ6dk2gxphzG",
  "key8": "2Y2kHQN2bazjiopijf39nZFP8KwUTPwo7m9NWeAfo4LnoZQXzQhk9oS1UoByogrUbUEPLtECj378KCCAK9Dr4ZyB",
  "key9": "4YsoABPZogcA4DCMS6rJtRyut8itb27EtqJYiV7dCHah8qn6g7q6pMGdarCGmgMMzj7ndDSY3JSswuUExJQRDRdR",
  "key10": "2HjVNEDqFkcmLGWJHjXoeRBAET2WhVhaX6FxTN9gzQBwfW3JYYTqW5Edwsu4orBbKRsR5xiNdNK3ptMEpwUk45R9",
  "key11": "4FGECLZkwJnihcS2CXqhmKtTc9Rs8CtWWEnit1eseZsVJWwWwEXFpA5aPbR8aQE6NzzLomxT5fzdtufgyJB5NzLH",
  "key12": "8h9Qt8t5P9LCog6LcydSr9UHJ42d6tACxvCbxSaC15q2SexW2Y5RvnjDqaDD7i98f3XmNYCFu1c7rmhATPMobCE",
  "key13": "2LASMgxuVkgmHWNBsBdkVc4tQR76bEjgeBkUNsc1XwCfLecJC6bP8sYmFST6VfNFNRHJriypBVMzo8t1Knn2Y3Ln",
  "key14": "3SQapZq4LS1kquuGjki8GBqbt5dmUofsFx2qUNgKkCc5FAhW6eaAjbKYX8ci7X3Eq3Q1uU4cwXgz2uGU23zYEVJP",
  "key15": "64VSQ8HZkFsEbt9VNxGvUbDiQPEJc5XLKk4cJyFk92V3CPbkkZaSagGwYmzdq2qseTAtAPbkkXaHyLDnMS1h3BZX",
  "key16": "3RnYHjCmz8gyNqGxnADLS6jWbTLdTLo4C3uoicpzDR1fu3G3aqX8Z8DPcfQUD8YYDtVdoBxenVjMy2G5FcmpYcjN",
  "key17": "43VP8H2cUH8rB5CXG6QPmVohcdmTeFWGU1GmrRtS674RfDEw65HxLQTpJmoPDt8AePvxKZb1shugmmcsUwb5jPDB",
  "key18": "3TupMxCfY5iKo3NaWVECWuHd4pCPBCSCRZAFottTK5thCNGSU8aczwtgDQL67Btyfp4J5vs4CGy33y1WYURW5NZU",
  "key19": "2HtRu8i3ZLmkmqRkyzaUUWt63Hfz1wGbepMQguh9TkXLADSExG87WN5VEkiTuLwkKPrYzrSpMVaSD45PQ5Jg2uTC",
  "key20": "4aP3DaJ7Fj4cD6qtKvwBfEqBy8gtxWxRgdXf9vrHHDpn4saXKSLptmJv7wbiYFfJFXSZM3yrD3EUWaiCAoEjL8a",
  "key21": "5LL36EFybrfLuKr7tuN8ZNreCg8UxAXqqMtjHREtF92P3ZEZPrpEvuY1kMw6Syww8TYCyXmw4J3HLuGQswX18vSi",
  "key22": "3m6y43Y6aEn9HbsTa7MbyN871GbJNVD5NEipTDn1a7sZXaNPzqvbtHo7wBwXyGr9Dnc6E3HKXAwRcXr2s4Dy4BHz",
  "key23": "2gG9v6yDKfWYLKfTcdAdFH4zyh7Evc36N2tzmVZjxk7NrCHLmxZvkWHfuPLVdVf8koCxZXFVKAc3FPLExfA4JNgB",
  "key24": "Jz1YDRee4NzJbV13BdSVMaDB9Z8wbSBw9mnhHGqouaKyuADWRwGvuQxhdBPooqiCaPaHGKfKKU6acTJZ9d8V4Hw",
  "key25": "5rAh2UMpyc4zGpQEGMsFRvocJr5EPweJkFC7u3NfpyhfmYnd5n2ZjhuwuWD7ppnXB3aqG9jwxtB7kyw1SDa5f4iY",
  "key26": "4PmKK7Co3q7m3femDnCos1dBv5baeQeaVVjq2tJZEHf3hUJZHkuMotN84LpTFQdAUR88uTmZNE8RTjpMWPTCfCq3",
  "key27": "5ub4H9bFz46qiy3q3UaYQPJq2uybit2xgiSWYBQPNy5KKNTvKubAbN9KCMJqaJPzgfTLTQDuauR3X6S7BZygRJH1",
  "key28": "4yN1gB954bpvFaMemsf8GTXmTng7KvAYU93zCBLbjwfpnvwvXpNj3rgpNouPkjVoufa2p3Tt5b39rv64AksyhBbC",
  "key29": "546ucdsjQ4irzj4HH5Ph6sVwyTue4EAdNtBPe1qKRrW76nSB5Pn7cD3o7FHwPTcMtBhYoqwjN4jvtyi5jqiy7qwH",
  "key30": "5iXcmxkLEwhHvYnynQV7Yo34gGJLgFPmhFEk1vnNRJQgEBmLn7Ugx1GL3xXk6WBWC38eZRMhemv6JiR1Kjba3NUW",
  "key31": "e67cTUsiD3FQPSsYUbB2ujeAgxL1bLNtgPrWvvSjwyA9sDi2cYMEPfJJHaF5C4WQC8U5REwx8NoYrkF12RvdtYx",
  "key32": "AKwLMKdEkvJvuMDBJcoTaK4NN1PFAkXm3aVwT1SDvdEeafHxMZ7q5dE6PZa8rEAodvXGkUeXBbAKtmCfWtBoR7T",
  "key33": "5prD2x27RFyhbntnrPbe18LoBgYFAnWowAcXTa7GYK6pp2e6mgZJTQpXL7hknXJYeWsX7pCVWnauX1s6RJ9QPjqs",
  "key34": "5tpmhYKomY6ei5hmqkPV8mmTPrynvZCDZrBnrYdnQD1fqrB8VW5Gc2GVkzaMTTcqnj4fQJh2qZesKbYnuDh3qTNB",
  "key35": "3v3CeRSbDxtod96FmMobqfuu4wvHyi2Rb7tUhJAKZWuvesVtmfBfscbZVbMzH2BoxaBHzdh2o4ZM8xVEqKStVS3r",
  "key36": "fpBJJUaZT8Uw4VVYXEQqEtGvSy1kn3KRb23rrn88uWaepKWiYhz9yBtxv9RV5fZUj2q2PdYPakhreU7gudtmZ6D",
  "key37": "pmom4dXTVms44c2sWpNfHYsGnqkXGHL7TYiq8XSLN6dzGRhkwAZb24gFZVQdQ8shqyMWi1bpA5y8h69KDMp5eFR",
  "key38": "2XG6JR7ouq7AV5t3U5Fiq2Ls3BELHXfm4LSJ49VzkYKLfUY9BtZsdVNJXcsneNi32VA89URwZbwht8V3WYxrp7RG",
  "key39": "5ETMoHYvyBFAqFFDnM997SWEULAiVrbJyg2sHUvkEv7We1sGZf3TGpM3GdtPQJRKhTGUKrtrchoxkm7RkwyHZhBY",
  "key40": "2zSjyRyixx25xLFg4nkTBEXeKqmg7dLYfqBzr2e6SdUCW8RhRGDY4Y71qradEi4NyZqfPSjqVBw5mL7s8BU7BwPM",
  "key41": "3yWd7gCoTpemvuJHVNc25k8GVLGJfn4ZzYCsc5AU115Zipb63tye87ejoUsySN4HX9y34JVsUuFRQhVtWyswtUWa",
  "key42": "3t3zwCYv1mQhW7cwaEoaQLoa1ngRuVqPSb8DFttV2pyhEWuZjJSisWmop8UVccooGhJeKY4MjhqhzewRPuoPpYUz",
  "key43": "4WHCd2gBYBXwWnnxzwsa3LKPJ4QvW29TPa1YS3jrT19mE5LKLp2YeWLbdJzc9AACBqukE8P3sZe5K4bb5uYj6UN9"
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
