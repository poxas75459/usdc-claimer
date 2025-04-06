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
    "4GWgrygiV6db77ehkHmPp95DMnx1fiN2MPnxB2FidwMSAPgwdsM3PJgrfS3uQJqBvWxM69n35JyjQrM5eiFCSd31"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32aJr5cwLm5pybmNtVj4s6pmomaEYQd5L2dTmjLPCyDXctjB5q5PxuY1enTBJTXurRG4XhfgrcRMmTYCETXgFNbX",
  "key1": "5yY3bfcujNfD3eKMkyaRym8kBuXgWSy2LkHiXvMrbYj1WrfhWEmHukwMr5FzGvGkSDsVzbbe5nYp55ekKg388sHU",
  "key2": "5a447ybcYMb8LDtsE6M9yPVbxqrkbW8hweeuFbUTfR8Bkc9WqLJcyPReuwTTYKKdGBkgXSNyqMCCMeTV3NyXkEzg",
  "key3": "2zS3XyCmBjNPnQxvGkHUovzGvo2pwMbcFCfnAKtoAnaWKofC7ngtB4e9VovdqNP3QmK37UEfVzjbFLj8VhpsYVqa",
  "key4": "445X15atALY65dQwpgDRh5ZwXLNruDL7dkKZBudnMVmszitxzH1hRR85ksLjaNfxHRKAtMa6cnW1S4cnp3QZMsW9",
  "key5": "1n7XWGrWi1oJPMa7eViV5JXE6oTEVAkW7amjHaEhhXxZKW5Ua7dbFUeqbzqMU6SMdxdTyr2mRQQ3Fm7r4AU18NW",
  "key6": "fre6pCVQD8Mwqeac48yjYof2xxZETwhBvzy4kJBM9dj6bmZPTvqkPmr9orkKAQPNjgtuUSiBvoCaqyPBya4TuyS",
  "key7": "4WV6JiDFVG5HUdDjMamErmvsz8LyaHYbDTPh4WGwqewai3AdpHqLap3x8isrX6UGQxHyzRSCJZgGE4GdN9DsfxqJ",
  "key8": "gtJUDd1XuR9LaxknLZvTbiHMwhNKkdPfUajCnLSN8TfowzjXHmYvwBWYpZyBJQinyopGAaNmuKRhaDW68uRCgpY",
  "key9": "voGctxGPUkKGafSnihij9tdfafgsBVe93zuAajcczTcHtuibFwkDp5tpFrc4c9jdB8Ye5g4sxqiVZoz8iaD7ffV",
  "key10": "2zj2xUyn76viqJQezF3cczkQoYuT2HjYzCL1MSz8LzWub2njoKjbJw3GHPG4ty5jQdRHWCemfGtAsmqYwrhHBw3D",
  "key11": "24mZnGfe9F8ndrwn2sSHkBJ9dK5Nh14hp7dqSXCiStfwaazPVXQjkoV6W9uhGEkhKhGKC86NJYU46oe84BBKsqcr",
  "key12": "3h7T92AC8gQKne9RqhhPCiGTgEydJhwqT5kooyX9He7khn69teNopiQe1b9qCyZwBqe4jmPycL23Ynn2rmRw9bSM",
  "key13": "2hxtHNVH4oS7SKu2PGDi1cQ9y8S6Wn7G81ANkn8yoMMhz28K8vm8CDJQyu4wuMPhSwxnJTomuseHyK8QLL8si6yc",
  "key14": "4Fg8iqhhd8S6quM21XbSTyqhCNSCU6gVfZdMciNqZGMdVU5LpPKLB7c9kzB4rBeMsvZrRzuVSjeLP1yvWeC3WcDc",
  "key15": "4BWWSh9PBgoXuohCizq9MSKN51WFJmNgMJUpjc6nmqJf5aFiyjWQinwWwgvhApJSdueWWaCNpWQxJQx2UVa6Ey8m",
  "key16": "rsFSqkVbLXBpVabKtVNEL5YQjMwKM7fsFZKWzjMds3CePqZKZSKLmNNwJrEL7VNzekF8cjQWrEedxwVwqNrBp7p",
  "key17": "65fd7yhgzEuacecUm4Wd9BmGW6WhGDoWG3m2STwhn49zWGSPJTmGkXzJYnVYZ2YbPwZAjoTwj4z4grnG2xAcGQK8",
  "key18": "2fNsnUir2wGH1W9GMo3Bg7VaGFTaLhvCZDBUz9WGRsBRxmFgLhbyucnkV8sEM9Zhn4yKFv9fVLFn4wge6hWjQ6kS",
  "key19": "4ABShQrdi9HYN2WA7e3Hr2V57kHyKBKB3Kh9Bevc4GRwL9ZSSpvk2zAG5qbuvvd4oVJADVyW6hAtSy6YD7sedTji",
  "key20": "2vWBmmXEi2u5ETBADvE3XCzWrAJnnb3VpBaGcHXEC2FKthSX3zjjeYZeuHjUsQmED7smatArGSusreqLjsTqbPsD",
  "key21": "3gW48A1X4nqHrazTzYiktXNksKz42MA3BXZpQxoJEn8C1E3ZFzLuz79fAJV7oXeEvZznqHayoZFibG7tDa9tVn58",
  "key22": "3v33VLNbwv6vHeXfLLF6o2g1CpZH2RyJtN9yiWCA8QfRfdCirPvtnSetGY66Yz6otjGK9rqsPvA1PPmHf25n9j35",
  "key23": "jBBmeRxERNXwWncxD9j6j9Uk8BgPZgxgbaqTDHeByT5WQEu53rx1e1BEwRtvhgrs2szHtowFUBjXj8Z8B7ovxDj",
  "key24": "391aWUxvcCg2AzJnY4VNj3TX5Hnsna2tsfrHkVeETi3ypEXi1JsEAAfgV3yE2FW95JbbpJrfnKmXeziKEku8A4ic",
  "key25": "3Bz72Fq589reY7rjh1rfvA4Rj42dN35c27hYUPocYShNa9DJ4i25DA9rfthqLRQhodqdZ8EDj4kFTZDN5cPAps5z",
  "key26": "4eeyQybhjD83UmQeTmS9vZwDwGd9oTysbRZ1xUJGH7XRPEk25hgmhAQ8x9jBFZQztivnAVrBs6oS4gRagNi1qAmJ",
  "key27": "5gGrwyNgHe8PDceXaCDYyXC9qNxod9HxYVKMa6MHykvtdHczWmDUhPEKa1UGnQi8RPAC6kmZeAmUfhxfPbUmzvbA",
  "key28": "jMRGseJj5Jet1KUNETuUsJDqkFk4b92Zw8cxM7qQtiLa9rgYf78VVMrJQFDTV5oi1AWUmnbrP21HmQVvGxpnRiX",
  "key29": "2JzSKnj9G1QomesT3a7gnKh5c2UviWWf2ReUrodGYH3e422pq7KMXCbBJwcwN5iKeHupggjJgHfSURcAYxXmaVxd",
  "key30": "3fTmQL4jCRfgKtqpU3GEGgg1awLAJi9xpcqEntSUsjZuG5fR846ePLsD1KX8chBoff3wwcAfGqkmLjchpG1oKKmb",
  "key31": "2uhyVf8Zgshryj5U3aZ64Sh7HmHJYCHE4oDvNeHSxRCqkixxZu2BhNVqGrAniAqPJjrcvG3VpdD1aNVT6X9XAifi",
  "key32": "2MMrUy6KtaT55cCBM97UCTNHjV1dVinzYxwSCR2xMbB1LhnNGFWhQYCpd3JDL3ovxCRpgDA7pJNTtqUFNR4HhZ7s",
  "key33": "52vEgQDyXQbJzgTo47TwG7HshBVUmh1WNAWhWnN6BjXGgWoLDeoTLuA97BS5R1u12zey4TL6bX2nnJiYEnyF91Ja",
  "key34": "25UtXg1rVoVXuisdjhnvjodceuF2ACpuogC69yGUPDn5DqFQrDoTtspSGEq7J6xyAiu4NRSWY3XbUmqo3GUnx6Gr"
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
