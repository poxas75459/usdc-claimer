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
    "4vqtAr7J56anqRamFqa1RNmSGNPoXx3deBiai5FBFf881e6B9PDCX6ZFWEwiJWwQNKDx1cKWuSBcZAdhVC8rfp4Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BiTeSkx2yUcTHdjUnWhu5XHiBGEeRVqMRHDdZLURAvfYcTshNDzqzwZLDg6yPvMBe9L4ZxkkUYoKxvi7k8CHaVr",
  "key1": "2MwCKfUS2oPmMHpiY4ZATeJnqMyVfKLpB3fqk9pfahvB6msj7sVsv37GbcC8BviA2dwuGX741kHNjoqQsu83k9yM",
  "key2": "34wxxFxTweEZdZ4eUcYj9afRj1KexcoXrA9TjWXRCaZ1C81u1fA1xqxzsubjLri7UQpwLcCU65T5CLAMFGPGXc7s",
  "key3": "346p65sYqjLvTi58My7Lj2ZGNbb3pMLcTPJkaV3a67wfFacDw1ca6GMhfn6odB3ycWS4os2KmU5YyGiErTSxYh5Y",
  "key4": "grJVJm187AqNeNgf2s1NWj9zvbM9J4VDU2ARjQGmhVUVsa7S7F5KnrBj5RCCj3syyBemnZwU5i8K1BtBEwbzaFW",
  "key5": "2D7oX9gU4z46wB5LaHDJHs1uiBbXuDKHpdm7MVgdXhZvzwwU9t63EzELb187th5VKCaXBFH16DhG8Sxj1sTzkkTf",
  "key6": "sdeLXHPCE8ENgmoPgo89gWxiceRciFtnauL1uttzEWXAvrhJcLdwTQiLSdtqhKCS1asoeSaRwNXGMoGDxF1f1EF",
  "key7": "4gYFz5TBQFh29HqqEA2wbJFXxVJDDSQCp2igTMsah7nBc8jqVwwauzbtS1rsLJtn5JsjU32WKxYYjMi2De8EYnQ4",
  "key8": "29P4MSvo5i8J7aYP97xmS3svtC8uVQtBvhtjbiijuBfnnatp139i22REPDkAggwKLkEdqJKDeXMme1jF1EsUQsg8",
  "key9": "4Uh2z6aoqJJU4CGVnjF1RdrAjUw5rZtQWe2zaxLYrKDjDWi7ftn6HHyof4no45TZjBczNytRNgVuKE2LTLqimt8o",
  "key10": "56XZvvpofvWjyy3cfxcKELsL3kFiF2RBpDCy4NeNcTKmqmKijf4migwYoRNQZXA9cMWMtVg2eizCp3qyyNgLTuxg",
  "key11": "49ymB2nB1tXBvv48GD4W7dwrzVRLn3xGcrmb9caAL32iTPNNkY6BGKqnwRMpc2WRzukQsCcWNPRFVzvUMifGPmLq",
  "key12": "5T9BcjnuLvLUCvDumrFuyx6RbBX47QeecjbaGiS6BimJaw3pNnco8qUHkcz4BDTbhFo5Th3mRQotLV2eG2Pfs4gb",
  "key13": "5bfwVAq1CnvBwy9jGVN9qvYYp68Y7JEuiivNeiR2Xv5qricQiTQvoHEJFwPE4LqeKV9dxs3hVZZvNTBVyniRK5pq",
  "key14": "4VjgFJCgc9dToLpFctHRGQPuuXWADqEUqaQ32fofVGcJbN6VxC4fohvTEjBSk9G62H6RiBYdCNaQTTZ6roMxBzfx",
  "key15": "CMJUgiZBPnMrJPnVcm5iQs8y54UmiyZbDntMYRLdqxdRvwgjN6FkgQ3TQ3FbZo858queVuW7cBjXam65yC1unMh",
  "key16": "5a1vscpzJNAbeZ4sZJ91FfpShsyuGpHbAqXL9p651nmRLFk1yL6VnWkk1vB67dnSusJA6LLyWmW45P3R6Q2Bwq5M",
  "key17": "jrHPUetVK3gCmhcNf2EWPjxXwYteRfGTJtm1nSWXLReuJfejnjMZHqdHpzVkH5Y3vCSoxX6D8KHHw5j81gqJkAf",
  "key18": "2JiCUs82GiohAno8E2siTbRdnD45WXXCMzL5ov4VeNkrLRXjcZYXurxVbWJ3ARLKNozc8utxy46PKZuZyPqtx2MK",
  "key19": "B5JfTKvDcVBHZGtxDfj9gekh6ebvuh6xu7rEtqHj8mZmKZNE4bwAVSso35n61CZRmNnFMtkAzFByP5FYwpxoyqF",
  "key20": "3DCFLYDmHDYvx6EPY9ReEJiZWyoNApN3HrZLUMC3kj8A6Jg8uKnudupFB967nvsb6AQHfTSusFQFSuA5S3xyeHuq",
  "key21": "3PjGd5rE7vccb7MyU4mgJmnBwavH4TowPzi3rTrXqx24SRFC25TFW4D67FWaLURMo2Gq7m64x7U5i2zeA6wpQHpT",
  "key22": "2p4yXAircivboHdCnEqZCeDU6eXqgrWTu8jQPZ5yWoJgWZcmKoEG3QAsLk7d7c68oQLERbqQzhRb1NgWRs789wwb",
  "key23": "6771hgoUdkDWJjFBqa5njuj2VuboEVKYkRv2ToJVRHzwfSvgqcdofCuTi9TXh5KNzEWzkzhcDjKwNMFTQWwN95Yr",
  "key24": "3zSZqYFCcgUxCR8hHycgSgtxBvc3UfWR4s1D3vDJ2RQcMkPBV6XSkrP7ncXyduTuCFzMBmPFuDqHnKFn1j8NdZoL",
  "key25": "5nkS6dPpBnyeyDueyNPHC1mbAJFb7Tbc5SqLqtWMD9Vdycnktix3vykHG6VfHHz4sQ8Pt5xHsKf1YinWQrfExH3K",
  "key26": "4BcYLdYLLMaobEwRStDLysX8NDBXmJaWcN1tmJMSETqJXtv8R9R6r8TjUdMcPHCsYbGkyM1c95pFVVKj67UVbnJ7",
  "key27": "4SKJ3FAzTHYjbWsk6jgcJxNaBae3tZtfEPGdmWZMttABJHieM4aSCgjSEX9uQGSeW8AQA6Ap2praYnhnVLWU2RFD",
  "key28": "63o3eFdYST88LyRa2rmmcFdUwXoHjeghy1wrWMAXqfyuKDwm2myHxk5hEDp5N5wwev7wD8x4Ltr95NWy9MzsJYTt",
  "key29": "5cREpe6ma6ymuzxGripiYfrN6bsWY6uHD9UhKNbnF5gjakHUd16YJHC4C3qzZuKK3Rcy9YPJK3AYL66TriMtxta7",
  "key30": "5BneRNNAxpwGbysauBPHrjni1ToADWfQqqHy8jGb1K23cQPwVhSPVF5z5FDdErrsktv9K2CuSDQG5UScxEbM8a1a",
  "key31": "5SiQ4dmTeYRY8HAVWtUhiQ8tuewKRfwtx8jTKE6dCmh2VhzT15JkPgT6KP3LTE6KYDbuXMCm2xx1ixSMRcQ2A6EU",
  "key32": "LhD6MQhgm8X3jivJvQRK434UuZHdWPNrpHMHpkMvgPpsz7UJyQdrLxx9iwUL54vfjkvXkrtEu7AMzbXLKsjVot4",
  "key33": "ScktPB7XtVPeZLnLCEg1Fu7rd9dUdKkGakFRcbgXd4gWkdn5a6vgHTPKpWksXfYDhwznmgoqv4mSiY8gk2vYJjs",
  "key34": "321aNEacLBHsGuXV6bnJfi8eLRsrBBvLW7GN1JBbWdn2D9mFrCpBLJ6BurodxmLLMMqHkJC6JmbJcUBmnUPGdFxf",
  "key35": "3VAsJkX22ETsJrBm4JZmEkkAXkkaPt9qQZi7Nxw5iNJx1Wt45MXEpCVZywTdxRrFzzvEP711FC36CFbjdobFeZ6J",
  "key36": "4tENyrS6uQCvGFU84N6ir5rCjCwu8jb5VNxbaTbYrkvry1F5EjeQHxP2gLH4CTyqGKEyKva6unZyXMESrvv6EoDD",
  "key37": "46hAAuBibuX474QMohfUy1Dy3qDg53LwNZfWBU9aofQZPq6LHbPAJwpHg8WdnJbjG6eaGFpoVJxmUYCwraGfj64D",
  "key38": "53ne4AD5jQKaRhhghJNx5upmRyW2vrkwEdokm6N5hZ2FbEZ78cv5AGmR9E9EKfgbSxRCjfixuEcZBNJ895n8npH",
  "key39": "2FkL7hqgdzn87ihnrPyeozbMm9kkpEUhK9z4xGvYjUvwk9uSCnB2Yr8v7weN1SoLonnXgiUSXwGzzfNzYMe6Ejzn",
  "key40": "5KuUaic4iWUcsyyGqm41gG7Bd1Zud5TAs6gGWuELrwkowghYNDXtVHtwWnT8ba528oX7e2jW4ePjP3KSNuHt4vFa",
  "key41": "5ws3pwCUVub6yzsdh3pwY2U8kh1kpJGPeWqYvcUvbBLkKeLcvq3GnarVbXS6yH383DSWKJbv7foMMVEbE4wMZC7D",
  "key42": "5mnVzi5ZsYdgrAShyGq1g8XKvSHK3zfPCJRh9qoM8GJFMMxSwcBn2ZNdgQUXWfHbB7v5rNgCr5S9drLo4JcUK3pD",
  "key43": "34thLitYXUDNoihnR62UcjtF33TNWCs9YjRwXzUiyjRKP8aZ39zQZd767dL6HshzrbBdYcHUzMVedaWhzKsCS3SS",
  "key44": "3bmEpa5AdtFVzbEKHP6d3rG4Ceeyw3fU4CLJ99u5J18veFTSTch1xFvJLsNqZgrnfwDYBK7VRVbk9o94pkXAEcsq",
  "key45": "51UBmyUV7NTvP4DfTzTcz56oPgXwYBykBm4PBeuSJ7S4vLPzhgeKaarLRAZ2pBfVVHLBFtymGxZVmfeE8uE1LEbC"
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
