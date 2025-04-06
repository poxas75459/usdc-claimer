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
    "5pqkaQowyHpxrH6MxrGpjdguT7EMg6vxcWS29hTHxwzkgKGgbUVVo32AsjUTzVpy9gwMNXqz4DKkAYaBjtDFFYyn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NrTYQxQnx4edo65obtRFCeGneENo2AZaWpKKnme8qjwXwgmmocMvDsAjxi7qXBQeaY2juRABwDvTirh6NdhWhfv",
  "key1": "5DpofDFfdzmWC1ef1wZfqUXazrWTCmPvKNVJqikfKSs5uXrC6S9moBtxEaQow3QSTXrkD1hYASAkjv5Yikk39W3Q",
  "key2": "5ZRo52uRrkLsmghCskioAayo6BNcYp2n2WsqZWY4nzvufMurRkGPBac3HdKavFQ3KQrFXxnHeXtdEAZBTi2Gmf6v",
  "key3": "34tW1PsHy5w3VKrc82cxZhvjMdRvw18L1KjhVLhqTGmEGfKkcZgYitg9EzsX1unNLqFaV4EEpTaWSNq8TH6yBysY",
  "key4": "4JTp1zuVxHWso99rZhmksozfXXPSdJKFQ1HG8eDmYdmGep7qQAcWhptGKPsgjrcCR29bqsNvgYwyes1KXhHxpCPt",
  "key5": "65isQncECVj6YApKFFomzqADmgqdGqvD25WcDcu1WNcvBj7n1rXDavJ3r7NeEmAznu7NqKGqnGrF1gYk1JsgCJ3u",
  "key6": "udPcwANvQa4PSyuMW85ZrV8kyDtMC7Kfox5bt9kJm1FYeewhCNaCRhEXp4qHWgSaP19MRSmbfLEdin5SJt6VCRP",
  "key7": "2V6e7KERb9tCdLbnxzKgnupFnGvRE4D8K2MVJYKfmMgur6qtUvbt9hJ4zacyoWCirRAefSubGcniFg6fFYRGcCZU",
  "key8": "5o3QiYxx7gJKc6KocgbRmyEsteDWn87Z6aMbxJNVzGvMrrgeejPzyVp8Jk13ngUYEJoqqeHtQ7Uo8sH28sPYbULq",
  "key9": "4Ppw2eTkG1M8uq3soVU6ryt1wn2SBbnN3GLB7UHjxazX86oQTFRBovMrtNtp5dkDCU7EWeZJu3v5rHjkeu6pDZZr",
  "key10": "2oyESx5xzjJJz2uJZXfLTNAeVS53MCY534AxtvDHwDReqYcm6iUSw9rhdBo6M1irvnnKCZFMJ2WZrpmZa6giLypS",
  "key11": "3r3jveqUV2cRAvdwLsTQh2EtgcdTwCFAWbKANvob4JDpQAJAoppxfnJzj7DLcrVWhu4aSeEuBa3u7tY8ZZ5LCKdo",
  "key12": "4HsNdDZKLUQEdf4wVyGpvryxq9c8nDgg9s35pZK8zmfvZ54JnvXStoJm6HhqfVfEMjGvGurdriSa3PAAo6Jwk9Jq",
  "key13": "3YdFi6LQYXYrDsnMpPTtWjUxnDsGS8PLnNPsUmV7rWkgBtxjh4WMaXsAQQGcckaBitCT6MWv2jCmrM29pKtayUzi",
  "key14": "3n9fuJ6Q23nV5MHJbTzWhUbs4Gsm7SmC1Kgj5QZHbwzmHxwLdmDUDSWJMPE5pxK17eDkxF2wATunFCjgUiLpz8BW",
  "key15": "25ZubPaSdg4uTyoyNDXYgBUCURXBZiP7XUxpFoKDLEFXa7NU9PPr17yQ4MZaP1HAQrmRTc3ZAwhjeiRuhabWQHUu",
  "key16": "3Dhp5vM75povB4FwAUsf9cW6JeFavVk4XzzVBVhoqH4AuEBP8M2DhvuWjYNcg1foayHTuAUwybBt9XxcGsEiFWSu",
  "key17": "5MYwvSXdNNmm71hAwZ9HGhYuiRAXX7Dj25gLYcR9YKaaGc8bciiP1JZXUXiw7Sp34JM5Cf7J2DkuEr3vwczumaHE",
  "key18": "5gCd2nXSh26zrQKUQiBHiHBiNHwE7zB7P3xwVTaREsswThLBRLpAjAXM5MMpMH93n57qmMmsEdPsCWphiT93fJch",
  "key19": "4wejiDjxEbvxW8w54ozZkqmhXSjPDwudnUQPY95KhRty6VjNiUjizMAuhMdJdabibnCU3fQTbhGDM8ASbquZPL22",
  "key20": "3oHANMiH9zAJytEWyAY8ZKfNtQNEpKLchWwGLTdUtrY9yHCxPGUeYmy35qs1gaDB9VAxWftUVgc4BcxXoaYFgZ8A",
  "key21": "4EhFzwqLGtBF84oK9Zg2zqyBCDx5tZLVJfwyJRzvbxAqThMq8WWHTsWWsvtaUgVjSoZr7wT7gjLNqEwopR6h9vFk",
  "key22": "3NqxxMQ6RjySXtRTahBUUr3R3P7NrkEMQusGN8bLsgTxAZJoapYjk6nW6TAVtCEnHv85XvDBhF3eP5oCMzMBLJcr",
  "key23": "52Kk7H6vBnKDnafrEt3zCjk5CnN3tUHJ6Lsrw6fQu5DNZ1Ax7vppxyQyRWwajKypXWLzFQb4kXKccrn5XZjWVV7a",
  "key24": "4S1HvcCeNDa1BrnLjFBWRZw9DTHPnEQyGpf75jUZkccrerF4DbUR54UZQPLngJXrXJ9kV3tT2xgdTnZukfyBBGqs",
  "key25": "29y8u8fD9vsYw4N4PWB4iUZi2QfnPoiSJ9LH1S4pNMsdd4Xqaa5NkXFq8XWuPnuznUZpobxvnSBpyTe3FxhE2H1x",
  "key26": "3zzub89NQ4YQ6L62jz6TxeKixqHVkNin38LehjJki6KzkfQtrW9cekXFcQZo7P9FqExBWFkYNa3B1P3RwDYLXRNf",
  "key27": "51iYX6RLRJnWZ1WH76XqY72QVv1rNkobtESYV7ULkc5s42NoAyFmpUL9w6Vm1ByvT6ZtrDnXuThnmJoBL6S7ymed",
  "key28": "2nkwjBhSBBZkCNUa3RA8DKXZDrWpapDFXYSghzXS8i6WQ4GZg2gWapHNGX3vPgeGUoLawkJ5ixa1ydwrfK1DQ6qe",
  "key29": "4bTwAJfaT56ucmsTMcesCvqSbTe3Wb3s8kpEfJBu7HMWsfgZtDBSjFe3ANMaJ6hZKkobURiGyuH45qaQWHNH5qXs",
  "key30": "51YzNntSqVkCbQUwRQVe9uRi5Yb6Hc1dgMG7WKi7HQwajnvcpYEjhN22qkuEWcoScrs6QFjSMRNoLJ9BJJNNFANE",
  "key31": "3A1fFZG5sHB6YtJYyMbbbxjHm2PJNKE4dPXH8RX4Xm2cyarHiP4wjsYo2uk69KaNdbJUqbSq7eAEH8KdKXDDm5JY",
  "key32": "5BZkrqhQaucdE9f8epxhGfhzoAzEFfGwVnGEFKywo6uzGZhJjqWT1HircwrFZyPEyk6sYjUboCYBoe1jxauxYdTS",
  "key33": "3fdsJL8YDwLedY9MPdvdedHstpWdsuubQy2iGLmzUU2QGM9ioquciKLapnxV7ME2B99UKA7hA7UaSGPWkoBLNprC",
  "key34": "4ABV3qv5nM7P2DzrGGgLzK7v4JVyFSjcGgzxbUP5XoHZ1FXhfcxSZceXFpXfneu3f7Hk7KYvsm4uCKs146RmQCTN",
  "key35": "5NiP2BjG9dwmUpnLojubhYwA83kcNQnmmoMwiMLaA3ffqzRF7Z2KCUXjNRLDWhfi2XXAHS6TavGT43jdanZqtxRq",
  "key36": "2obz93BSwqfeky8ziBksxEVUELyvFLcssmcohNM4X29kN7T4Ny7W8MM6wLFxPy3gXxDznSsNe7CfLHcfbYEvz5Y",
  "key37": "3nc6DuHgPTeuadGCXVRkdQz6kLUtBtrNHnBcseqfsheKMHEx6AJ94kn5wWuU8HTiNxkyHH5s7ijzZ3eqXmsq7v7c",
  "key38": "2NDULTDZmn3nCxN2Aqqhi2nk3GVNzjoGiitcbf1yvTvx5XdsTxwbG1x5rJ8n8Tzyn1So12nSnAUapn8Thk6UNcZY"
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
