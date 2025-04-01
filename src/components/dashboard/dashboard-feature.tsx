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
    "2Nb7WUHH7Tx8W7agnWq4FwYE5afTxiJpTo7QaWnJMhq8nVn5oi1PzWRwnfng4ASPappcr1hXqofqmmmp4zPZKMPn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C7424amajWhAhgWVwvwgDHAHPbvJBqEgwDwPkaUSvQoGUGqmWPeNmREPLd1qk2PPbwkfZvkDw3qnmrd4eAHcWf9",
  "key1": "2dcgaXJFgXfi3eidnr6e8Y5b8o2hUFtWukYAqPRYj7Ybyc7YBLRfjEeF4KCUhFAqBfuRWJFF8XDoZFmwBA1TS3Ne",
  "key2": "38r71wM2BTgtRaycZrzjKjszgLtdRatvJSzreZ97t4KAcrzzdoRTsK1LETMEVjt5nDhnZLZWL4CP6Khw6Mirdefs",
  "key3": "4VMCUj96fovU3KcMtLANwir4Nw6R5q7eGsVXAcRJB3yF4XpyGdi8k6uBHmJwLBtLKyvKR8CoeGWLCqushNusCgfR",
  "key4": "2gUfvkBo4FCkbPZLRjhZv4WPEvej3mT9HX2ACDRU9DSxKhKzaE3UwK7BjpAqNFD2N87eFcRCBWeas1B6Nq2V1fY9",
  "key5": "4gpCoMRzMUVivcTARo2y294tdspQrPpfn5stTUCyz3tyi98hWe92AoMftMRJda76Qa22CcY6ToiaGEDLyJ2h6N32",
  "key6": "4WRwso9C7TV8YtDrarbw8rUNd9nWPUQi7AVuquBNFYFwGvd3Wa6BL5xV25z3Dc7MihvixTsAy4CdEvNaBguweYBi",
  "key7": "a2iWq9SP6UtxLpu2HMk7Tqa6P6KBJw7ACtRjKsuZWESxWrQnecrckg2S6Pat1QreNRthScDnHjkmJtapP7XXfkH",
  "key8": "t1mJt9CEeZ26kwhBB6TBqqjsNNmzJTgH8qAteYom89WUzp9rMjc4aLJM7hN7UuWPBEvAnSikBrT4KHZE1BFWEnr",
  "key9": "3vvqYmswcpY4yF4fNVpZNDh9wMZA6imnbcitB6RzaK82hCPMdqK5ETuxgxGctADmYU5xGakSs1zJP7L6WPoUh82",
  "key10": "iQxHkBxvYVWKoqhb3wdxzodYNfGvPWgVDwpt9GoVCLqgPdFz2gwofrJirc2HCvU9vfpUXzDD6X2UkMosWkxqz5z",
  "key11": "AGmnRPautNH5uFNLGwreoAeJ2ABnHcR1zF5SZctK9oUkujohNvLYdH3SGMYdRELGuCapztwKKx5m4dNkdBqt2DW",
  "key12": "3zXzgw4Kcy5Po4Wzsio8pXA9ttmkqLREnVr7m42jCGa3KXvmtW2gDVF26VgaUcdR9KgycHsL2ZWetwwfDB1TJAv1",
  "key13": "3cvuhh4trYFrLZzWpLFNQE9H3PuFxe3gBsCD6qy1gD9cPfS569xvM6NZz2Lc5xt4Z71GD1h1bzNUckuR4C3CtTvJ",
  "key14": "66yCfWNByZKVzncpH8Grz4LrBagDd1AEHbWCFv9At8JTyCHuGC4kHF4Y8aKhqwf3abSReNnpVQqeRJFG8SGqiKiF",
  "key15": "2pP5Uy7srwXxALn2rHFTt1mBiTMbXRemfR6DS62fBmZdtKqQ7TFWbNJfYCb4jg6jLNwZ2BqyNtwfkXk1Bwk34efV",
  "key16": "3c74EgdhMimAYr65o2uFahit3PUgRxxVGAbfnh6wVg1iGTMe38rdeXvkrVdzWx4A5UfAU7gfgwKiJUav72bPZ6xp",
  "key17": "2Wec5XEz1dbaXCgkupQbHCMXBEfTPbtWeRNJY5GY6U9vqfQRWdFA7Zphz8nz5xx5q1bkE6Cj4uzrDtF7FktWEDqk",
  "key18": "5cDGsHzPBqAk8ewkyNRCZGCD7yfmtpWLCmuA5hYb3nDfBR3PBzY9nQrBKS7iazD7jnAocxGsvW3aFpNoGEYXJCH3",
  "key19": "4Uu7GmHQevTPnEpdH5ZNs7FtY4KjDiAYi9RprC3owzW73Fwdh2mj7aoSRCi3erGrpcwzigB5jeJRFtimeFoLCMvY",
  "key20": "5icbz46sqg9oBUcCqPgReUdMhnMro45jL5MqJv4JcVaobQgwJooT43aTUVfdsH2UyoFktrmq5ANY7YPfRaY1xDyh",
  "key21": "2c3bCKQGfKiZZB142bQECVmcsGw6HFDcbamCMbx8JMjcX3RzSAz1Lo7rtvtbK7BnYiaLeCSzFgLDvSpsS9jbgaSe",
  "key22": "4dFWCbyCfP2YnPJ6sQoi9KeY5fXPWexLHjSUHbidfDbEpi8kNQ5LEB3nUmTaXoVnkS3YK1S4PGXs8jTxJFPSoeyZ",
  "key23": "EqpeJNqyfVq6WDM7571mgQ6uZxeMxe47pyGXFGZm6A2JXuoxyjf3kLW7bfm6vaYFSccQHKnbZHdnq4hZL7vb5UY",
  "key24": "3ZTm44aBW3TeKFBPNdwHMYj2GvJHqs7SkCcSAH7ue5hhinUVsAyDEfq44i2g4p4mW5sB4sosdRqVpZ7HewNCH4QA",
  "key25": "QbJTXE9TegZzkrAtZyr2diG2xN6GcHY7gmwN9MZUyvX5MHQsddjxy436eztg8D28KbzNmDPBUJYTE96jwf9kzeU",
  "key26": "3B4uEaB52rBKo6NPUSCR4s317u84DH5e79zwfAyp35hWuRVBpRtEfJcPAHonHQFpt29qDZNwtinewNFsi4F27kEM",
  "key27": "2FoSgzea2DGZe55Kpjv17nqrrzFUsyhkZuQ8Hubu7Z4fFjMAdBwLreu9pjepAgbiKVDuZtxRs5obZL7TpUn3kgUh",
  "key28": "2xvuaPU5wHpenX3XokR5CzDn6Qdyhw7trsQm6g2hWvHuVJzfEyDrU3ZF7h1aHhiT78Gt9uXAbZrCng3UjNCMQG6m",
  "key29": "2ybk5NMK7L3t2M6k3NkKQEZMs2HGBGpFrwRc3RNycyJvLWqw2jnRsqJFBLn96oQ5e35VLtN3TNNzQHYo3dLkDiWV",
  "key30": "5NEKCxpGG3KQFDLFpuSPJf7PsTDASzVhN6oqXRc2A8jhbYbBNkwij8rzdvyHBmUSVve4T6gJM4JUpgvfKEgDmLvo",
  "key31": "3SuKRmJMWKLMBmeUqMGSgRg3B1PNduWCNDr2DvBW1eRtwo9Xf69NpnSDQAT9VAVg5hQffGVKnJaCxgwXk6bSJ5pb",
  "key32": "3SgFRF6rF3NGYJU6WAodaemkiQiV4zbYVg2EPMtnhtWZUWDhknuRG9fXmSDbxwpP2UL3t3BhLujRZWKEiy7N6gcg",
  "key33": "3z7rpTWN3fHDPP5aWrzF1wkRTH5VRJ83EucTQUDyLyWMnnQrEMxvt9XTHHybmN4oAnAqiAMNCzeUv56LttCrpsrb",
  "key34": "3aUZTVmbwMzmgQCSSgsvZ3FLqhW3SttgNXMTinMxSgt3AvQzsQHswhyTjaqbCvkPBSW31gZMAf1y2HB6qCYcgKRY",
  "key35": "5sktB2P1PaB6r9ub2apWx9qTQf1VhfriFcu2dpWUo6gQPMTGbbUPWGjW83Bap6WqABZhxWQffXz54FmBQTTUeQ6M",
  "key36": "4C3zdr1GE5ha1D7JwJmpxC4oqg5gnHUccyJBdah1UcP86QCJF52DfKKHhy6zMsrDWDRRbsD5aRdE2xJ24FqxuDGP",
  "key37": "3G1Ny2QS5DfQ4ghtsU3kTvot1jCuxygkqWMKKWP9cfS36ps7iURSXCknmBcVXNcbrXBAvvEARokBxjZikTnTckAr",
  "key38": "2uvmKe7NhXFsr3yac8inEYeMtbiKZRDHQogUYecePYtvxmycwfnZf8J3ACpLNkBkkoa98Q7ad8WVZnHQ5Gho93x5",
  "key39": "2swifg8cKUJ6WZ9F9WoPhqcAUqySc9t9gNBp4DLDLrGSvFEA3vRuGLSpaUMWJm25cDzQjLGDRr6ufbzU5dSixe3Z",
  "key40": "2LN5CND2imPNrLJVMTci5Caq6QQk7D2R73SGfWFEpEHttN9925H1uSZP6DDJ2c1eYxVKJUpqsn3yFp5Kmo7CAHAr",
  "key41": "2JvXnXWvXGZvM1GHXuoibdrJmv7GrfPyUfwXqgeHJwbPEcP8hvNW6g3ig5YVzwmzv2ZdCFFPKseearo6k2cyaJNF",
  "key42": "4EUNW6GvemAQmYCg1qd5engDSi4NmTEDd5uxWUt6WJ1yd4xTE3E3hDnTigbbARRquCZYHg5ad1yimk7RSWPEm1YF",
  "key43": "5jibvFBYGHfDu33QTnyTPpvhPKSbzaP6GCoUMRFcF78Y7P559ZsDvgFS9YABPKZ22cMeGDbnoqTNQrazW24sWmR6",
  "key44": "2sBiYVvrSLFUM1dDzZGCskeKHwXt8qXp85Pfmwqb4qchxkoXdNYct6Z1tuFgVvMDbbrgGe5X6tokVGhK7XBjXv2Y"
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
