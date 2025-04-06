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
    "2tEsmZcakMd7p1onNfHchKNUSwrAmiMxNG6RUDFHiZNmNyhjiWQtfBqyzX599c5j7hHxQheDkCjX2SMM6i9fuEU8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pLw2uYLe57NGKvQdiUBix7QiT3Z7GUUwYAmx2uLTHa7kX9T1sF4goPzNFKGmCMpQzP7eaXn6UTJNWX2cUyqQLZB",
  "key1": "27rLhohCSnhE1RhHu898UvNCbwhcUqUsdigbgrg6xpvYziK2fpMwqKowdbWk87d51CGmCAKQfRRWjNirMhH3yD5T",
  "key2": "4Psdet4nk7WQ2iAKB9268Lq32wYVExcpeXi8mpRSQgJiGgAKJJ4gPCBWusPtPnXNe4dJJ6zLgevMMmjzUoPdmsaL",
  "key3": "4GuWqLLdNLt3SSzGscW9NbrQAWoTqzN7JZpq3dYWmPYQMyGLj228QPC32Vj3VR7dhobPxWKjdVN766iiqaRhMmKj",
  "key4": "67MdTUJU1j5eTtVbS6zm6vBtenED4ET5ix1WoxteTkkK2TirBrHhvWks7V7MxtsW5ryff655PTnvQcCQHxyNNL8b",
  "key5": "4vKXvf2Bmde1c3eR1s3Yi6AAW8A6tdz4nqAscoh5XBrV1rZSdkab251Q2ywba5Q8tBoDSUWEFrUWaVhAkZmoqEV",
  "key6": "5mf2TXjfXPUL4PYTwGDDfPx6YLizikmqByGYiCbcgSFkRETTaCtDkKZwMrp2ocCr9qqXJQpSaMtc72STQ531yG8K",
  "key7": "yVXWpCL5biesrp8a6p6hyJhVd7n1S74sK4fr572S5wSH13E1HVHU5w7CAF79kMYpKgdEjVd37w6KVvQXBKKCUXj",
  "key8": "k28UnboDGMecjxWwruQYtE6uFZhNZtaj9YyhGH8mm8jhXWSRzDVwVmrNzrWaDzisWvSD36gt2RLSXfwVq98xUmM",
  "key9": "3ecL3TGF4CQhcK2csJ6b7UKqFPgTQQ1mWQyD7CpNSsWC9yFoiz8sTTCZbfCjNniKiTfRuZ2yHTearBR5pHJHr7XY",
  "key10": "2BJi7RHC48Div7gnYEcNaZawkSMm6QVSL7dfne8m4gBgUkCtgM9qTpSgUcNSxv167vzti5Y92HGWZnEMG7mko3nZ",
  "key11": "2UN4XHeFzQt6dCRjbfpqQLcJvCx1wS9Vaez8B3NpsVYhtSfyF1WpqGwswP1ZrCpUosZFEX1zzYKgrVpG64mrwgcN",
  "key12": "EFRmsTqyUbRhuj6W6sepcaDDMCtawgZAuo9xEec9LkAWcmfiwRrgzciNYGVSJF3dR5KTDhXp2bkXh9GwV4Ab8ob",
  "key13": "2jvAxFdmdyCgYnD6VFGC3P6iT2AdRUoVGUY4gQt6BDPqsVVFaRs2me5ndCQY5bs3JaRU4qPFJR5Gi6VfUJJFe9Hs",
  "key14": "k9BEXREk42z8Xm6h1TzStrD6pEVGssRE5bCj2UifeFH6mfcZbECTMhZBMdTquQzCUK2qj9Gs1xSqTLBn9JJRQJd",
  "key15": "5u23S9Wi4GyNmH12jLqycqbyk6YvAQf7sPm9DZrrbrykZGww2rzJyVHSL3iVJ8ax1XPMDxPba2PYJTVTuLqW3Hwx",
  "key16": "5DFKeUBcgN9JoCq9boPewQW487NQaxttUqjzgB5fzyPUhAst3tGvLA5hhNeNdQh7bP9yuhhbwZeGem5XcSo7DQLR",
  "key17": "4drao9t8sa5hj6dQFnqDRVjafMRdx2K8rvwtseo33qPEWCQydofiZdzMw1i35CBqHQcoqped53kNzAtULy2CVpvL",
  "key18": "2qmv7hf3kbEkMdtPLB5WQB2FUhxC39ViXKnohuGUMQSuxBYJa1oL9NoJc4ikKBCVEQBp3NQWbH1d7mdXK6ATVACm",
  "key19": "53JiwEoZVWChNoNT7DQt8YLeRCeC3rt4EY1rtpx68eSfjQwLfXNJh9tGMEqGSMz2ESPr4wnMF86Qoi1X22jQyWEf",
  "key20": "3Qr8xUce1MJvcd9QzxL2GzLsjBRP9aT5u5QUQFJfJJrtpSsVdcAiWRxurh9ZBbCsZco1Cx3yqfeWGqt967ZNKoWu",
  "key21": "2wfqg48s2hSBYLPoAxStQ7kJNfTzRgn56WtGL3FihWoMqm596sDpGVqSY7qVg3Y9thh5XFQogeMQQShF8w3PQXoj",
  "key22": "3DkpTwmq3eTFRCVBCg2Y4MDqwe7enUM69v8uNVBtfYGfTXiF4kWtZdPiFnFqYiUQicY5rRE1zR3toVYFjiXA8BgU",
  "key23": "bugbZmqaQeFGPjG1n1kMvgmESUko4KbdJeshp5ezrR6b6CUzMLNFZiA1RNNg7DbJZN4ZMneZHKenyzCq281Hfdd",
  "key24": "4EZWD6LdtUFDmuauFoZH7zZYQGW5DWhWiTVGznACKfZp1hYVJVLfpwgFhmxBoE6NeGX9LGfGQK6AdYtLg6NyebB5",
  "key25": "5EZT1wyszfoTtwY5gRVdz2Ux32F1ejZs7qpWHuKwouU3M6crVE1uABx9x1PAi1dBcjPVuRXER2ruSMphQPHGCTGv",
  "key26": "3bXRX3VvEdD8BWYDQSuUYrBU94W3SyM3E7ug9C7KYQqjkuBgqBNb7MoG6HThx3TMSqz4Vjc7aS1BfdjVuDPByXPf",
  "key27": "45cLjELVZA1udd1krL5ytxeu3FUv8CespgUyQQh9NruvGoJ4SgoyJ8iws4KSgttAD7cMkKLWXspXk3rCnEBENRhU",
  "key28": "4eR5gdrpjk891UK5Kf9y8izPp1M3KE6kzC6GpggyuxKhy92GQXRhLGtE3cgPWNZjWFpxJ4eC6bampWEd3GcMDEon",
  "key29": "3sQdF3LyZLs7KUsS1ndm7c2qfzgHHVfyLJgkEotjNGSb7iphcqNdWgmbduti9ejqa3jnzkqTTWhifrcqh4rp1Rg4",
  "key30": "2bQjbEhKkVe38pGgiAMQCfFUkUvVdFKhnP2exWWiha5TnN6xVfC64bz1ApxadYGqEPyizWNW3Nd4p9uiuYEmBYss",
  "key31": "38Q9MKFjMkXgj7k9CXMkYPpnMnqwXBv6zd9eZnVagZLbV464NwfNYBMuT3Dhv3aBxFbK1gXkz3ARqyk2mTi5xS73",
  "key32": "5LaxFi9qS6g1pQW4gKH8QXLo1DEfam3ao9UvJ2844PWgZai7BwQ85qf42d8Nm1pGPioxE9V7HDD2zmaiUccL8Mpp",
  "key33": "3dwQRRboMkQJFNugTvtQSRHb8qxYiXANhxxGeWodznzXi1fmU19S5oszZqx6pmrB1KTPAajtnk72tbUphtkhV2dY",
  "key34": "21mNgAQgYAuFKd1gmkpwcYRt6zBNreKV45pwd5KDJZiGLsaqsvQLfbJprAog2G2JZDJgL6Qofx41RLZojPmvWRZs",
  "key35": "5R7LhjDSxjG9vegFg8MgnmRykm4uqTEtBY24b6htXBJFmEhFHADH8Gx8dqUzR7gn9rjtEcU1Kkc8bPJ33hXUsBEU",
  "key36": "5vFcTDNhMdywNMKBpKF5Bb8tJjHFhYpNNW9t5ErUcqCSh5hVtjBBtjbRH1Y64R3K1fbVAL9HeehFE7dgGZoD4Cki",
  "key37": "322vPjRHoi3onquJwTwHY25f1nHqv4WK812hN6T7cmM6yNLfHqhu6N9YxEJ9dY4EjdDPMG3UhAzX8bwH4tojTS6y",
  "key38": "DmjgScE3Zv2heHqmRDQP9qfshDCVHF2cq8gDNrtSTkiaeWq3CkRmgh9hpWtp9wqW45xTcr2CxeZqmnSYewev7zk",
  "key39": "2J2MPPUqabtDSZJTaBXSKvzoYh2sXXvLNG8U74pm1PBNnrxRJE9VKYzqrs5kBvpfbNJdNKBpNXFLSk7NoJCNy5HK",
  "key40": "5DCfFDb4QbDapVjt1UtGbKDyRsgg4EjTPLshd6gaxyozwyoNfLCpv8aoXV8G9yhVKuf1iiYACwggCNmEwQmVPB2n",
  "key41": "55T9me6PApgBLrzVG3GZGZt7kCwQES2unjQ7XK2io51QhozvsVCYRNDc2DFRNCqFQFqQmYrMB7RJWHaCKwjYPcke",
  "key42": "b5XQsCg4F7agnv3fJfpJDjxA2rb8G8L3fTxXMymMN3ajZfi3naSGizQeZH1Fjm1LWRESZpYepPtNnszHY4cV58A",
  "key43": "2iDNfj7VHkPeSyvi9976hG6YFQLNRk7ChNV2BKvB7opd9n3CDLG59Nt3KkfyRu1Ux4qKGn2zwZzRnw5zcVqDy7av",
  "key44": "2pVkLWSCuuichEgpwGrk4ScrE2ryHjJchsBPc8zeB98pY2zQnL9zUAap61BsmErw3eUZCEkN1xvYV4KWe2CHNZGa",
  "key45": "2LWTr8pa6PkiPBQzFAe2485gSCpZ4Y1jKNyejXSXyewiDQR2sLfjfpN6dyeKx2eoVvwwPgKZqeFYk9mgf9V1MLr8",
  "key46": "5tAHdGed41KFXAGEkigZGntcXSJ1XGsESyKrV14hegjQdsqPxWrGy3gKFVYUJ6QRDgMTjLvzzf5oQoxCe4hjPz21"
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
