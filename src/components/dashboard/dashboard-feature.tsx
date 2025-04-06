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
    "5Lg2CAZFh7J8MEPwYfiCCgv6mfQCT1Z8NKA31579SvjeyWwQSBSCMht22iUie72uAVsmYVr3f5KfSWh25PbnL63i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UXE14SxZkc3UVbfx89c7NBcqeG5YBT62mDXSMzW3pDy2RFuX7YZvkeoAe4pJFJ4JYArFqNnfR7RufCzhaVfXEYr",
  "key1": "3QHenxw66cvdnR28ADK92aD3RyCv5d5YkDh1tfrNFreHi3bnwSesNJBysKG9q7LTMaavPAF32cUYSgp7zJHYfw4y",
  "key2": "mWmneHiv4XFa2TnfTvkmiQ7jCpscj5MdvRVi48KWsj19fYNoDS82crwaaAjYTJwoZiancwJpiKsD3Wx5FdofCa1",
  "key3": "4q5gJnNB869or7qY8dtrmgwqjpo7uFJZTAGTiVMZSnZoRYPL4eZficNV6KmYkueNwsyudnCBfw7v1hdXakAVECKB",
  "key4": "2qL5Vhz8oZWMWGDxXpjyG1T8298tTq1vXKQW1cWgWpev5DpxZi5u8CW1bA8isFg5v1bspSvhxUG6KeFzy7WPEEuT",
  "key5": "3apcwKjqazfjqgB9zzGntXbMoZKEMUdnhvTbQLbYDjKffmXi5dFth1ixt6Aef3f7R5UW6ZuiJbRiHVCBu81iNsxo",
  "key6": "4iUSUzta7UCZA1su9kqZrBW1AacRPqV4WHcqthyXboA6GF1Atugk4y7MSPLpYAyn8agZLms2o9H9ccRqGb8FF8dY",
  "key7": "2uQRTgZErGoAiZa1zJX27rcJxD6XrqQYNVN48ZnNHimhTkxDZ7HdpVaJedQsFjJvmj5FCoRSC6RrQLF9ETdZrnGj",
  "key8": "3Qir8yXntgARtru61CKx2qkaXkTbB9fxpTXxaX4k1Vzto42Sc6qSsGJrodQHTap5TwNjDFpH3xMbRptrwFMh1N4R",
  "key9": "5kNUzh4zn4oVTZxddGrAKjBaf6aQNFUYx8UpyyYDtqFiughzGMyfPQgZVaF38WSjwr6KNLX7GyfrjNg5xByWWDGC",
  "key10": "2UDzeByS7XEGrhtxpfCEEPSC5KEJoFe8ZPWfVUKXh7u4RtCbsiHE7iZ4g9pSxmwLPqsGkK62T1Yupa5yP1mkUujQ",
  "key11": "3ng2aRHEVejSg5YngoYnu8k5mc8AdvxtLRSYcFKBiFbVN83TaRMEqBfU4yYS79qwgJsfmNGn1YhdWVvmfkpPdeu6",
  "key12": "HyNgSuVb5Fjuzb4NZBtLqawtx9PC4yJzkDegmnJkTTZr2wzuxDja3bygK6MvndJ5os9knjzzw6tgcPiFNQK4tvD",
  "key13": "59b9dAcE5hTsKnGiRQuo3177gT3n46ZEzUf68VtnT74E96yVNuvYFyKFwGCj1VM8FNMcF7tXapFuzW1p95zsMPQJ",
  "key14": "5AQQggFFxHKuot9YFX7bXZjZUae5jw28spKVGViKE788P6uSo7tiRoF8qmr8Cgf586WKXC9tyDMmckTjdxLEvYsd",
  "key15": "Qie6jSVmzpCu9nHNCtBYfowDfMxdwBCWqM3gpr6s78USqp1pgDqgVamM79gLzEJV3Yw58QHjWRdCrCgBfczHxFK",
  "key16": "2m3ug2uNeh3HzvLDfCfoAJ1LpJVVus6TRLwbHSVEqBvWvXKiVyPSyiusE1g8f2NCrybJoSuQV6eyF537whgt6nr4",
  "key17": "3dR4u5xM3BdXsouLcKDqJDR4a8tAyDGkYioatJKM4tdeSFZbJkkEsWPn3XwJM4LZS4PJW5EtSisM8gjFnsVHhgJQ",
  "key18": "5FkJoimHrQXqrarz6b2HQY2Wq6tbiRrsP9B1yk1V52gdprm576YPHp28biGAjQTx6zJZnNTK3pR1acBTB7uq11z2",
  "key19": "3UhtGW2WLfVhHqWyvvpTtcsyeHovWXX6niaUgnYuj3gHQodRrpYL1iDsUVx2K79EPxGHFPVpoCH1FvwsjXnttimj",
  "key20": "5v2GwRqNqtAWBRb96oFSHepwvwnpdZYT9zWAgmRQtfm4MadU7akBnLBbaePW6KgShWuPmA3s1aywZmCMPJ2gmS7G",
  "key21": "3zS2PsjjQcSggLTSKc6m1AxbvNXGThKRww5qaAG267xfnhg8ivdAHefoYGYXo13BtxEdiAXvXUPoUYaznNT3Z8yK",
  "key22": "2tr2xRcVFKQc4zkCmmF539yzYLHLYKEM2THHuLUM8P1qLQTdviJGhmC5rUoCszimEDewcZ5tZZLyM6v3X4UTyCXi",
  "key23": "5HcQW9Vqtca9bjBih9cuA5822r5v1bWSKYimdCAtE9LrAyo9DY2Qj9osGNC6v3ACdKdDfAH9BjoMaTtDAnASW9Vr",
  "key24": "2najEWe7Q5zytM6xgNDDveE6gQF2WPJJrcSwmqrFwuPmFfGgXbWrJc65AuASnc8pyiFdmosQiyL3BdESxabN3XjR",
  "key25": "5GYD4WGkNGxkEhKrjUDbmtDWVC7obuvaXrxNU7o9A3AkJW9itvYqwkdSDE1sA4zc7bAY7MiKY3Hd9vDkpLcUBm5g",
  "key26": "2xr3B4sbb4LGr3iuPBgfRdAFsPXKefzbg3H8ZXGHwT6kvFKxS7iEUueapZkrVWaUtg1WrdUq2anPHhrHB36hP15a",
  "key27": "4QTgLoMk4GvJxq6McMcP1y9WdS79zwL1ijhvZjrLCMcBiykA6susdTMZdXLzvcnQgddAdHNnaYjDuF8tgMBL6cyY",
  "key28": "4Xn5mDAGpCfA5kzB2WKj2kNXBHS8FzyBVRnbifPeWJ4wuN3WDKDmHHCZCGqgBPwJcmGpe8zftaJ1YNg1XBFvm8Wv",
  "key29": "yJ38xpN9DtF7JASrwHA5FCmKRz1gnv4mvZszbXBvthXHxSGxEpkFhYFCDmQgABvA7GSwaVBjKXyMs34UpxQny3Z",
  "key30": "3pCTtbE8fB7uAPBiRDtp4fDUY8C1nvBu8po6iAo7tEQnjJ9LChfCtwAPb2QBXhjKGw3QZSPYUou8EYXG2R7UNTku",
  "key31": "3jFrz5L5sTth5H91Dp8uKnLf194a4kaJcJ6YwUeD9bnwfZ78vdWCHom2pb4eKGQ9fzLVntREwMiJPmTP3w3KXzif",
  "key32": "334S3gvbAVUTUvdaVFWzCFYg6mN2u7cVowTdv9t4Akb9aVwEJi6aD68TSXGPj1tMvAxSckpZsYVCAs9MYMn4b6UA",
  "key33": "3pvsdHvKDrbjr5hbNFegkXoFWKn6LVGhZa9qDxyrLk2oTruQJMxZ75QXFJYoqdTQk3J2Xcy6fysJnXu5UG61s5kb",
  "key34": "3cubBdcCXVHUhtfkCa8fTgZyHhVYq37dWzabeNg6G5YBd7DEUa7VwdzvinbgVZZhckhzMu6UFgcubCPWL2RuopWr",
  "key35": "xKN4N6trYhQC4SrTUsBZXBizNCEX3aVHj2NaX9WAHG74gBbJ3gHv72G73dZTFi4dgTErYeqQmAGpuj5PooSj9ih",
  "key36": "2C1SrRd97ymv2jrP3At52kDp8nX5gDwEAd1YPtM6cuQCZNtHCRuq9UC51XpGpUyprYaPEybQZo3vohuAJ3qh1Qiy",
  "key37": "4xHm4S883xW1scJM34wqShGZwJ9yfA9WSSk3FyLUp87oFq3kZHyL2Q6oeQLXuUKnpCuiLwE3cdMZPHHt9sC53gyc"
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
