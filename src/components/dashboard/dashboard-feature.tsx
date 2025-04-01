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
    "2WQ6EG7Q2gDM5r7YZGSFLUMZQxjFufjcKBQwazCFj5rD4kJYaAmWfZ3t9gRVtakTpNLsGEcixiknDAFXFg4ydvff"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nwpnyYioBATcpdrgpBDH4e727YDfpSUFT32GfNjbUn9NczCRPvHprAcW9Y1L79EWoEM4TDzRbDJJKs4cxQ6Ayyy",
  "key1": "2maSyr1jUSY7FdZSMnbsysk3D8HT8hJ1bJfaC8Mfb4idY68Fvg7Z41Dj6se7NhYQfCpo58PQV46jdFAEqCD8DfER",
  "key2": "332wCKHiJZfmxv5Cugw97N9cTPW4YAMC5uTkxF6xuAdmNkyJk3oweK1LQFwnFfpsH4C6A9Uzx6SZWJt17tqB7wcv",
  "key3": "3cWUwKvywFeVNUxuGVX3K9QdQddCFR7GJEuBc1a7D1Q2QmqgyNeCKckmMK3dGKRd1fqUymfMa3JzL3jrX1aymqgM",
  "key4": "4kTwC3K6aWhBr9bHnjV8uMy3UWfBdCmMTASMRZYJKJzRNZFRZDtDvHYaLH8UZT8WwVW22j9ct3FehwMVmCKmWzRq",
  "key5": "Da5HGJtwBJYvcGQyPMJYCUdMnKFYL8KYabZRLNmd5z4oWVxFCTbcD2Y5C6hNao62zKYR2VT1b9t7KvsL12ZnSkN",
  "key6": "gEKXNGtS4VQb1jNBZbT5svVCmkFYDLxgPrUp5k77jQ6FxjgpXFv4Gr7SSok3JSu7gDcd9aHvLiJBGU2nLsp7Kub",
  "key7": "4DMmaCLJYcv9ppFJDFSejQgsPg3HsVvMhnEtMkZLWoUrF94Rvy1tgQB25JRz7seiZBJDEs46L9EgbtKC2unWrhk6",
  "key8": "5u5zytPTDRJbNpS8tgJFX4We4j7qDuKCbg1UqFmZyMgkvXKZiKktsTDeiB7VL8LADraWYgRZwBx8s5DJpJDpZVxM",
  "key9": "439qDTnsV56Fsi1iU2fmW6PLanaarH6oPbUT1gteFHuks8PakS8LJC7N4JWGBCeXmDbXTxFZyREE3whmwM94Gn6d",
  "key10": "35RfzLcE59Q8r5gAe7erjqBhD3bc3j24RzypTnT8hXkHGZLqVahZy21Z81ATw2pTZvMfGr5tYotBmN9jcAAtqPsr",
  "key11": "4GoDRc9BSH3Qa5my7nvUGbMpLt2ZzWfanYv2zNnqrHFrHU6DbZyXjk9DbFf6Q7ayHF4FNRByJWEUJQeZeWBdX9zp",
  "key12": "2usXjZT8hU4pBVDiKd6fcfezu3xWFRRhJDz1eFaudsCJNMtuD1hxjrRay6mqXwpbRFCP2Z2YW8Zue3frzUHHH1i5",
  "key13": "2WvUotnXvVaTcD5uYxTt86om4a6J7934qH3wPe4QigqZhgJe8xESfZ8jhxXLAXLi3PJuo663kDmDTYn4FnHXY59B",
  "key14": "2LtNsWKke56bqHhUpo8p5gHBCcr9NdZK7h4DSFu27epzBo2dYU6HMwa5jAuscHWGMjVmQo6cG8Eb1krytTJQxcnu",
  "key15": "uuE3Drooak3vPXLXyzwKvbUU7Et8xe4MVpYKwy6AvYCpntV4iJYn6q4YcSpNzfRFZsDtDfDsqGZgdvZWfuULQ1Y",
  "key16": "CGQLEbQA99xGqsdghDzc1PrA4N8WLaAQ6jHcYxbyAuCJcSSEf3cQa6RKd4bYax6xUWxBWHSALeNRRfJQzp6ScXj",
  "key17": "3SPQhUkASq3wkp1fjJzSWopi7KquHP1PDGXEQFx2JUkMXrFfvgip4hXuwk6uw1RhjXqrs5U3Ge1SXFVW6jcpdZJi",
  "key18": "Eq1NYpNY42mG7v9oUbZEqJJVAxC1B3NfVEAgib5m63oFBsZTJUmhDck7MwMjUXWJeHmSNTxBHpUmiRn6HMaU6e9",
  "key19": "3817n1UtU5ufQrjmFNuQH3S71uxKNeBkyVWLUn7QJfKjDCNirxGhQpW6fp6Q1ViPCKqm9Q88W663vjNG47bAPAdN",
  "key20": "2UfHTmZhc156XkMDjbBL5ZbgGu3FYr6u8UnRfAKvsUhctUdy1pLWYR9vqxc9hbaNtUiL5xeJVcYKRsw769BXcgYo",
  "key21": "GBFTV8RuhxXxLPtGyuTMZmuYMwySaJcy3a6BP3dEcvohaRw3pxWJyoZ67KmQ7Yf9LdaU9Z2kN1Am21GH6Psbppk",
  "key22": "QsGucCWkH38JREwN2BepQm5F1AiwEMKso3Qj6CShhxYPm8aFc6GWmeewPPGggNfzjhJWzxBtwxb8ar1W7xUsN27",
  "key23": "4su8q6bWZsi5Soc59orNSofbwmoCuhuSLK2rmu8946FBLgLmCHHPQcMyCYFypdWxESjXpA599riQ8R5LpV3FPPfd",
  "key24": "4x1m7kuRURJgFPFAXkQ4f4T1aBZgZy5HyrQXnC3DkcG99zsbQwqDFgyQqNMQK5z9wasgaHBaka2zGNXnpenvEndL",
  "key25": "4HUNABXA5ScqvfqDa3FmRg713SFss23NsHaw7hJprvMgL9DfmrMWou3WmEzsrgjbCcwQ3RLcjJksLerVP3yVbsnR",
  "key26": "2FMgzMgLmcnyPrgMNYtrZhZ5rwQQRpeKgZXosqxwBmytC11jTZLxTTzTBChHKQz7qo8EQGx7JAzP9yABCwQAZapW",
  "key27": "32mghsnU3sSURHZzUNr1AeKPauZzUsqPTWCiW4Q9np8TCPupbYbipAp5rcFhSSNwr18M87sWwUzBjDVoAG6fn1Zc",
  "key28": "5hqQfXWU8xgCNjjETMZyvnridcW28vYY6LPJ5kyX5qg7hxih6JjkneBnCmz5LCNd3hFP96CUzsyhKVYSunpLq7aG",
  "key29": "5ZF1M7pbJBzJutK46wbnfty9ygoeKLUckRRjz9iZ2S3MycszanDmVfyq63MGQxW2EAznJpw5UvpB4Qmq8aoxg9L9",
  "key30": "415CLfqT6moCJDT4NhZFrwsZVs1YhegqUgm8tC2JRzNASxrjfAFyWsnRKyseTmyvSrDcstxGzjHMfRa4xxkMXsjn",
  "key31": "21zbBMruGfw4W1Ya2S78jyChGLoqhb5FNHsCMqB62zQs1fLrdNDL3efwtbTkYoobThywUkMvfC3h9R8arAzdqKwF",
  "key32": "43TzA9diuFbh4pAxaZXRQVaFFBPyxV8uvTTogEVRPqz6LKRFBJNQA4xQ9R5E4HiHp84tywLSoQWsj9UoFiSQyYWi",
  "key33": "CeszMo8dPNrR71eGzoKN3GAaqfbay7nub1mT8VxbgZr1d1P7U9XkoHgcbp6XmH2VPAqhVRYTcqYGJxLwB6wMjfC",
  "key34": "2tSCg1xmFTRbx9YaSLYsQHcrwmqwFRJCRyXC3cZ8BRUiSkwBAc1xX445ftunNsoCxNNFzCEqPYzZBhxoeAPwFkYx",
  "key35": "xKMi7137XzgSmRNh4f4K828Ftma4PxrLHXnbK2owDQcdzj1N2iWE22Fi2UN9EMNKNX2VS1NJWAF9fi5mjenR2R3",
  "key36": "4GhHEhMgN645w6cD8AgJCGHrExhxQUac4qoQCtyHcFPFTXtwdvrfJAC4gbQrsYw8zabSKCLjWACt1u9bLEgghbCB",
  "key37": "5WF8TroR9YZ8XZocMvjJrypWsPA7aqxVx3SmcFQ3UjA61JKeFUMyu53mRq6Pz9k6quzKYeBxwfoDWMMke3Y9KWv3",
  "key38": "2hkXbgR2CDfMz4H1i5K7S4e4YGM1pEToBHaxZmwY79PtrzMncndQcEnfjnRRSvmV3Bpav24umWgSzYc3H1ZGePAx",
  "key39": "3c8cqnnxArrX49jDNLtogMsxFbP2Q33mjE3uf8En3pQaB8rT5rjKT2q4avJBBr4Ko2NqEDjXxY738puQ9czoUGPp",
  "key40": "2NH8ohYyjVErg8CEuRrDDMxfdMq4ZruDWQnp2YPNqnjWyqXpsL6MdeMmUGGXudUjvNDwMNwPfoXZdhiRDrZDKbn8",
  "key41": "2DYfmC6XRyoCQxoJhmYUYCp2EoE1iu8ZU1uPLPtDmrKYVRfqnZWRL4JLvY82HKRSs59RQoktg9eo5DpZ4YV1vbq9",
  "key42": "2VdykCunXSKjaEvE7PjaiMExk5Y2kut3z318Wnm2QhjYs3jeGEDC3pyZLaPSMk11hjWbtnKgsQbDtoYAUuei2akZ",
  "key43": "2rELqWAUecQ3TK4QP6opeSZj9zuL4n4PYn11S9x9g5N74Vu4du89mymqcF96Rtz2bUsvx13XsehQNVkoUD8cbESZ",
  "key44": "4JuY16mh6yQMm7GL5Pq2F7qPDYFP94n6DWE95FmNWrd2WDMZGTJ6kFFeJcaYf4YRwzDr9cAtXuobiSwHE1m7KQib",
  "key45": "4HvuzLZw3RofWnk8b3hFnP2ytz1mkBh4UVmSAcF7dSa8pm54DXNNsGcbh3zA2Ns3drBSeyrHa4YxZUp3R8KAXUtk",
  "key46": "4QKA7oLVGwrX8gVWC8T75kWNXxVuNDSzdtn3EfZEJtjGtJH7mZPGXUhCVx5TPHTw58f4j5evNZSMLY87ixQf4ewR"
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
