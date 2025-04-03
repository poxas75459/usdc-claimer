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
    "2JpREYr12hZ66uEKaNWRhiqndKux3rnmo7qGJVCn2EsGpRdENRJAPZGqQEshsZtR4Ma47jysmR1mcNwZjwxK5Qum"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g4vonzt3EufYJXbYyHdDGruTEa44add2dWBkNqyYDkB6MX3kY7CuDWtgriZPkvuCAwzzakasXvbijf5F9pVZwCy",
  "key1": "5gabbpgqssgSu3JBgg7wNhGJfrbYZ75nJ6MY7HqEsEce778vtmr55t43zfVe9CezgJueXAEet7QVrUqUaNGk7Skq",
  "key2": "4AX2bwcwxQYtCjE9RqyBj94WyPgqykggd6QXZ9uknw8WHjPVZ79xKuPLFcQujyft6CmBxs6T4eEZawJ318mrtbfp",
  "key3": "TPQqpNVgSQt23U3GBdPaZipmk9rohukppdxMeaMfPh5QDYEXgALRTGZVqJa5MyBqnp3xi8fDhmR4sVbC9KayFXs",
  "key4": "2TEihUfaachJAQ4Aqsx5Cj9mqTF1aZiP4tU1UUiTF67rRwhhG5Fh5dro1SbQ5pAwW2nGyPDVBnrccd8ZLnmzepvt",
  "key5": "gcN2RtQ8nkjqS6sdNAViG9ijibP84aMAHBwtMK6UrwTGK3fRHtbWMD7uJMVQprZvKwVrcfP67K4D2AsC5oK55LQ",
  "key6": "2yL8oG8eMxndYG7WV8ETAGeHL9ivB6wRSF527cfJnFzwbZ2gqQjF85m7UNMh64Bmvpz7PT99P7iaYZ7XjRYkkgWM",
  "key7": "MCfoQvtTknWKYkRZ1HYwuFWKa5WUemEQrihTyDSccbKQXaViK2SYi2BHmrJrH1TauLZNi4fhhL4T9UhcW5xH13R",
  "key8": "3V3aBKr1MnLbbJHg9JePn5mgmTYgMgUApj61tnL15Shy71WdPqL1XLBVCMs4jLCytHvdtJ8XXqg5nimVo6YBmY8r",
  "key9": "26hXLrvTEUPw9Yzps3mp1yxSS5erEjXDL3WdAK23mdmQi7aBRykEY5WbWSXpbG2g6QjT36jFV2cbFdm5NUEQbu2U",
  "key10": "56HYA1foQjXQ9vS2FW4zUtZ6mETiA63nsxDJu2eLuQszJca33BYz3bVAbk8gTzxqkEu4oCduJyaJrZfe2ms5QptA",
  "key11": "2XvSQrSU1B3uxEq1P814qcrk3gtMibgmT9WCRLWJeWnuaeXrFf1weaVbGk8KYqVLXUPrvLiMUrB6JYWi65a679br",
  "key12": "SWL9Ab3ssXCGat5fwCsJ7qWfJBtZRdEHrG6LeHpS75Py45D3579KEMxXmGgGG7zXwBfEcyigBba5HyhvSqkZRuK",
  "key13": "2EU1sq7Zp5Zn7TQe1Vxzx4n5pAoXnMfbwRxdhZypHVUAHyZrdkmEt4JQVnKRfmfYUZy3aCpeYTVzPRdjyeJTQCvN",
  "key14": "325H4Ut4LrByGthiMHZJMxeaiNindsL2mEPXhLhPihVz22Sc5eAAH8gpPB84d2YzbCRn2c1g6k2n5TTKrdSdcm21",
  "key15": "3AMLRb2HsVhniziif2anwBYRHzYsP5tdsukqEP2V7raWoCZuoZH1VRfprkXnmXpinrpovXqCQLRx6v5mh6ZyWLxp",
  "key16": "4pY9HZ82RmwWRb76iB21XTuC5MwN8F6FVnMPuHaHfL84NbPu2k6XMom9uneQEkodXWHfnFFB4n8a6ye36DKVa8Li",
  "key17": "4pJecojXqjar6GrtgD96ji3mKQ8Z3THxh4RNBPqyzDVGNep2dN4R1dDGR9w6P8Ye5TjY8wyU6mo3wg99eFHk4z8L",
  "key18": "3rLngDhXUcSY4xWaaw375c6tHPQEryff1r2o8Y4uaAu9ixitQepgdKYJQkQwcwc7PVLQ9xVoMAhsMYNXQpVVvRDK",
  "key19": "4F5LmhWomgMmbP5sxN4CXPxFDSXEiLqgq2mxbhhZtZUkfPUAoWbaTPiQ1D4Yacx2jjoGjAZwSiSYg6myqUE74SFy",
  "key20": "3GHzR6CNzptFkHG8nwXB3M48NF6YQsfqYUt63ZvyQ4M7zM4acmVs8kyo8kWsVbMrbSwmZBYo5MsK8uzBu7eNXTUQ",
  "key21": "2tSUufzLizF78mT5UszbtHYXKNAg3sTdhaqfURpzkbh5GNRn7RE8MBPzFAzXETsDWhKYiaEgPYj6QDNtnrMwx6wB",
  "key22": "vnifpQNqq9AxPQHkTVibXSHsVJQJTHTCznwcN2TtZopXrugvuwuDDW5WJmm7KgcaDMcLxrBdUfekJPwxQHgppre",
  "key23": "5vqqZF3pk7BSUJGfQ31BZxsnqZCzW3o4bgeWy51pUJ3pcHRzP9xRq83BzwqzHqD5WMt4xdcAtHob8bkyRE7dJcLi",
  "key24": "3kVSq6qvwBrxgD41hyMXG2wt5Tr8hpAhD5FhmM2iH8DttyUd1JTmMAi2cCmuqJEAhBpVmXDz2E57GsZTHYaT2PoF",
  "key25": "34oNTTjdHJwpyZBnCq2CDpSVbA9cVy7pmRmyiDv4F9wDv5PkZpwpm4LZ1ZLyaecLafewJo6U2eQHxMAas12DWibK",
  "key26": "2uzh3d8Km5czn8356ypHUrcp3Pr2wZ2RD77NnvZFGyUp7FEM13s8uTQjmoeA9jFKQM86q6jCwfbxgKqpHiD6Tkaa",
  "key27": "63afX7ipAULJmPSBGY5qNQ9LByDSiUYHroRbPu4Q3JwRxfHPLQu8ed9AKNgwJp2ZiqX8fmVNF26igceQ1JKoRiuB",
  "key28": "2oZqgBswSLvCLQbQjwKStZkqFKeSmCEejPjT8GEQhy9Gsx9FKjj5Qzj6fqMu6gww1rTHQStd3yzKmqBmu1v46n7M",
  "key29": "2VQ2sCPqT6hpQxMgjKDE6iAfokTU3Zz3atvMiNpQ5CyLCk2TsmSFWHMzgaYMCiLNHTxRifmPmfdszkJiG3Y9jYTm",
  "key30": "2YvBYwo9CHsTmYD3kqxbLvgBuDEAcEPKUD1Z5ERLdikSk6V5kC2pQxsny5VjhA5S9Pr4gKAooeNKubWNDegXMWnA",
  "key31": "2zvnfzAsMDtkEyS24bveNc2U3xGx8CE9VnUsZqmooPBVGx7zxkmcvTq7S83Lx8UBfxRm7nJff5cxosMjDiY68i6f",
  "key32": "4kdWMmt3QnrBS8FtKG9eFaTAmN36KS4za4JB6gDKPKg1XtuSpCcM6p5yg24WX9yKpfQqJYqgWBrrPvMdcuxezCaf",
  "key33": "2SbCPDcLMqjWCiRgJwVSjiaobLvNJZagD5KHSjyeraYfEcu91nWj2NPFXmegGKKXhCrjys3V8cDhDGZonmCgw5JZ",
  "key34": "2mkmYChdk5f1PjW3f5mnPRFPbGwq41Yz6fdESBABKpXNHyWEFgukgLM6vBqRLCFMT3fU8VMs66cjXqtpF62KZTX1",
  "key35": "Wg83qbgVaBieq5X9i43JZvJDPJbG8dJtcymiTdJrQQPKPfgWaxzWG9wJyWqBbJMZymLVtsLP5tU1TgQ8WL5q8BF"
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
