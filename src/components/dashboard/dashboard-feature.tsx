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
    "2xKBdeYSznFJgc3ZfVkNedUNHhXSxoao8LtD1wcwGoNsk8G9fTZUK32Xm9DCZ7bazqRfpzKWZgogS63yUvdsDZDC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32QNiv9hJrJC2dnDZckAvM78WinYZ11Fq3S76rcxbxasCEPspJPj2GBvvp4UBjyDwWiSDZsSRrMhK4v9MZYZRucJ",
  "key1": "3JACKVTCdG5MT7UUL5LdRFJ7s5H6gkaes8DYTnoXEaN81wToK13i79ggzgN1wjxN3Huoe5iRZFcWGz3GRu6gDHAM",
  "key2": "TwiXoghc53dWrVLA121aL1123njJVyY3c4BiWFjnDnUpr4a2fbhEUKKUvmYuNLK8SWi7mqe7o37uk97enWZKR3S",
  "key3": "2X3kpH36i98sua8yncWNt5aNd2gfayyiNApgUo74ak5AUf1HRv6Pd8AyuR1d4ymKnJteZfaUcbjfYXYzJzwqYG7X",
  "key4": "2nrqeu3MLe1oiBbzGzhqcZkZc2M1Cy3Urjptdh4iLmvZspkrAAPMVw1BtcNzUjv5W3dj2yKyBLawsunkSe353y9K",
  "key5": "GGkZmPnno6i9zPSZXpmAQKTt2hygryvK3HFwhC7ZBDZyUGrU4XzD8idJgCNdbcqY8Q8EPfdeLtcc4nyr2mXSHJi",
  "key6": "58PVJ1bfjKf6jB2MHpqyPcvhiBFNci7o5fJCAzvpj6tkz1JSY5gvVLcWbSJTbos5vZurwkA9vtGVKqNLpGRWNZFv",
  "key7": "eXLBWuJEJrHwnM6HtXPGRUY2genrf3HkKpnzRsas929qVRyALJx8dsvU8JeSCDA1AGQG4YVjACUTVzAVNYG8vMU",
  "key8": "4aqE1Tg5EZThisRpc8CR8sLVhymgcHDbXWdWSzhhhgoGzzet4rYg3QhiFE8KPxMrNfTyGNVELspjUTUH2ctCodo6",
  "key9": "4X3Cwb2kaZFiPYUvqK82P2z1AmQe7MgZDGJ75AGsijW9TjrgSQBUwfbJBp9C3Gwxf3kPM6g8mWt5eDkL2P4PYqm1",
  "key10": "3WDQV5vbEGUnGFmXAwTDRWudCFMkiouT8pC95Nvf2D2CH7SCUjB2rDMYDwYKGE3x5EmuPkcq7HTbpLjKVMhw9LCq",
  "key11": "3yoNq7Pto7aX4MZWU6wbST7T5dHuWRtP5FcC1dxP2Q5UqTLbXEfU9FN69hoUAGmhnQCBHmt4zW1VqsTpVfPVF7Ed",
  "key12": "c6cyKESQL5id7EToUjvo6CPtS5XfBZWE49dJwBrCqggu3Zkcjj3EX2A9UdPYXWNSmRoBneZm9peEY8YvvfL1TEm",
  "key13": "Uy4AtvM14mgeq55BEGAGzij2hAJCHxDSiJ3qdp1STKaPL6VjEt7gycECwWdaFix58sb2nbrcUcfW45DCWqYZoa3",
  "key14": "4xp2FsQW6yi9rJ3othHdW6T7y74X8eiMqzBLkE31dpPP7HnwDnfF1ZXMMu3K4pxrkio6oCL6ZpjfitYVDtACq1zW",
  "key15": "291aFQrbRgF64ofHNRGFcyjYkXEPWrnuvCmpW9kR2QVJivV4FyQ3Ezquqb6NNVu4oAHaKvvHeJdvupB8L2j9GLYS",
  "key16": "2JCUnzCbP1C6XGiednjZknGMBvg9HQoKvg8QMyjQWdvpcgF29NGDJrtcCZS6s2ncfVJ8FCnTZNTFY9e3LNXByXXN",
  "key17": "3nUujEgipCVxPoJiN8uxzCFFud3QPMvDK2jpzKHprsmLGKF65EiGJhjfq4p1rGsBRsyRRpdBid98r4dSYCBdF99f",
  "key18": "2fCRQXutMPEgEckguBEgJVWAuGeHeMtB4TrM65TxWEuB7vSL583rpC8Rc7Aty8Dh3wiG7Fzq1QLFPHBb8YUtNARd",
  "key19": "LeEgjVv2Z2935nwRUqQwzBnHhEGFBebSgcAQ6wPZLpM78ArWpm7diXWrEePT2XpDYH4yb8PbTBwffaXkcTr9sq4",
  "key20": "2G34Qdo2YQLFzKSziR4CWNMRC9iteNQWMZa1ogSx2LLxUkm1rZomYZcuffcpRAghLepb6sXjmki1VfAVqMAAw3mQ",
  "key21": "Bo4fAjsScXdhnb6PxWWFhZc4LGMRTf4VUbUD7FDNDRNvAy87RQhyMQ5WwXC1ssuDDSnxoYm7yLSnLQku6cp5CFx",
  "key22": "5ANLjN6cENubWgcsdScQ7qtCzoZQiW9FUqcSqHmS112wpHrooW3fcFo3WGPha6nsgA3woMJdDsK5LHDu2fxTqwKg",
  "key23": "4cARs33ALnA5oCsTEtNaLoVSDQLtR2Q8KtZkMb4DTkiMWj9FoTbbbRJZZ4qerUZCU5fysiUA9HHXYP6Bjp3tkk43",
  "key24": "2ZouCrwBLKWZzStjZ82wZ68mYvBHe5qZ3XbVzBFmmYhSVXHSKrew3aXC8ShJ4vxLsLT1bPQofQwypBi3DxyXNKU1",
  "key25": "2UnLdbhrpzZM5YiL8mULJYjMtsXkqcRhZDxwLdJhwkoh9eoHESvY8V8vzTWA6pL95gwdrP2cPcVBEYgdycuZtjtu",
  "key26": "5vKuxBnExoVtsrbLhkcnAADkdZSGdTa1G4SZ6BaVBs9wqUMqqeVgb7K51hWTDoa7fv3VDGVGPUvo2fkKYokgpPrq",
  "key27": "4HNXgJLmJMJQHtf9zvrGTNT7BaEa4n6g4scTPQMSV6YKeNm1gYk59GD2oq5vCGifqgBSdFGy9vimnnxWDyMhSfGi",
  "key28": "52Z2YV4GmesA9YB3Y4cVhVtutxaJ5mZjEiDcD4xoREphYcbbuX34noXjV2oLaCTXBPqZkXk1jAUAQmukjsWcscGB",
  "key29": "PuGCoChLjyoSHt1yNV5vykPfA6NZQp2tD2ijDBSjTZnVk1MJY6un8MD5Vp5uWdaabvKGa39UhN58b8g8pqF1GC7",
  "key30": "3wY2XRyzpkebySAdbx6CMPauniiyd5bsdFAYQ7yCis2W1tcyiyzvHTZpXoDRwofYm4EiMr5WimAFjN2B8TvwDzC",
  "key31": "3QeFmuzaJMtbpPEngQvNTstcVFG4wRAziTKFmbZaSZfTCZ3JsCXpXzQooGYwE9ZNGgZw8ozHstTg3zesFKfGpPEL",
  "key32": "5GUVv2cRZayYLeLiymUmKJf5nEaHJDENd9N6MG5DCR7N2LDQm5w5SE79sFsmci5gB3d8QAMWuuBnSqyzCH66KWjT",
  "key33": "4pMxtQoQviisrXY4rAo2nJYifgQPUvmyz3mNjUZp6YuJJ7N9iVA86gJSEg3zhBpYwT3zT1oQe2kwLh2DjFWRJ37f",
  "key34": "2BwfqRxPnQV849XEmF6vhMm7RDmV7efMoXanWgLu9YmqUSisR3nF4KXW3ciQ6m2sTCKqMM9BtW5uSFQRxhfQjamm",
  "key35": "5sHYQfafr3jGD5WTJPHDXr6XU5B4ghe4kiwQmMaBxtLXEHUMHN3ybovpuXMzZ3sMqR8qPUvq3wKQjkF6mQsbwkrf",
  "key36": "5v6f6M5JzA3XC8Z1R9qYHR8iUJo4Tejx2SjybnRWCyuw2eBSAhCmSxkfy1ys85qgq2r4Y9NpCmgJpoE9pEQ4btHX",
  "key37": "613LwEH1cSPKKFdjDXBhp2YpVUWKFKLXmEg8hnWdqi2NjrJLJn1Moz6qVDgJ9UYmP2XBoqhCgF8YcUNZ2ZEfYUU7",
  "key38": "2yZmLkaZwp5ubYWpdpRQZG8sTCKt9P53YPftJwPg4e4kB4r4QNrBLWFyHYUXkQdTx3CPFTiW7iDrc74ThvfSZumy",
  "key39": "67K6mxBvnfxD1cryCu2FLpVvnV1R7szZueJiugactLpjwMxoKsHwzca9obZTLbZFNe9Ae5dX29wqcib9K8AGnJrL",
  "key40": "5gcFT6Vu6XzZJAWqSDDeW3KR8HsSPG2KFbM12xYELc4fLPUwunaUxEQP4Xs1iHYq9QUVeJSQPyLhyY8oTn8Wz5Cq",
  "key41": "5bVzyg7T9TePLU7izeN1dkkdwFpaTkMMRkQw6z2QDVgVjyQxKfna5xXgyFGeenaMVDZCoYdCnQ6SpevAvjKXALHo",
  "key42": "5rC3j2MVureLtDQsGK2ETARGfkso3VT6a8aBDZpMb5F8J8TG3dhF367HJp8LpXJVAmjWgLPZd9ETyKvYt8anKVWd",
  "key43": "3gdkAagd9x5rVW15Y4iqEXVBxD7M5RdDSWFukM2KQQNCi1p2rCg2TnkNRX99u6tpYjhhGrhKECt7ixjgvj1nDhpo",
  "key44": "SCmYzh7P812x4HWVSA3YiRN2YRWCb4kg9MbiZWyurWVUsjbh6JGFFL9Rt7SD6rUWq6yJt6pbGUHopUBAMTtDxpL",
  "key45": "3hEiyRdh7jHdUK8kEfkpeRYxBVbgyFrms87HD3Ldjp1V9sHCtLB2dT57pXx6p4h93V3aN9XNCNHhr5hR789sZmLz",
  "key46": "4mjRwTXzRFSQhNW7uk6QUCFM5Do2SCaMiNzwnNEGjw4iDckAJtZKWJQWvfgXic5CrQEGb4SjDCMXCpjVuX4tazgh"
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
