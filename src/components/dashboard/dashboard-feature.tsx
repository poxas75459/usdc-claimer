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
    "5dQoCE48dcecTBRMuVVcv3kCqATHGQAeaJy5k2qu4yaRJBbkUUu5aKg1i21DPKqDSVqFJRy9ZVGMjL2JCWQB8RVS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V9f9KmTvPRmuYCFSD8bp8sxGVGeCNtR6vPUm286Rnq1CtYhFiPh6JwMCZmC7fn2H68KujzXTpUuKQgSXzrMc2X5",
  "key1": "63W56269n7oXHM4sJavvkux3WVfUmyqbMdk8QaJ6PdveiGX8nrWuNtXx8dxV9UfST2UtVJ8SpYQae4bYz5i1u4Yk",
  "key2": "4z7TGwEzb3JsWR2G5eax5ysudrteqKs5MDJXeASyejoWYL8hjLfxobmLRo3pAuRsFwPYdAgSppU4bRuhXF6kswSH",
  "key3": "3cUPSzdcbYsT7vmR8BBgu52rWGQwBwf5QyJPK9VskJwtXoYNdzzRxHyQNCj2aUvWcy5z73nH2dH8WQrKbsVmVDzY",
  "key4": "4v6XaFdTXtV4iqyC77JXRajhAUC6yqN4HgdAAVgvvE95XhyPALpgD1vgZzkbd9eDzsWXNKw3EGG47gXv9qvNm2J6",
  "key5": "62qdkWGHcLj5cEygjbSMijayVbi3TLcHDqAqUeEo5LUYhyRLJUxQMULhTcFDtpabbJusSVEpsYbhGJ7dM4rTtRYq",
  "key6": "54g6N5UeWy9w5XCRfmBwLjR6LMKtcBx5RWPjbfChWGaVpDrnpUssK1kbxxPrMSStsnhxxT5qYK4cupJphVYR5yWB",
  "key7": "5MhoP3vxjMmzwSn1eeUv829XLVmNp8G9USGYBytQHw59EtDtyp8fc6XF6WCRNgP7UYmhpeJddDppt9HFbbM7LAzK",
  "key8": "4zkXgXWmYJaUxonp5rz3XV7tviAgyhpb6ctrFKRU2wgAgRS6ncCPPD8RvKH5yGvXUjZeNJQFogJTCYtxbTpNNgj5",
  "key9": "2UYpsiowx18LyqP3seEBCZ7bRhxf5fsGc3zVJpR5c7mjcosxYKo1LmJP7262Huq4J7iD8gB5B7HXzNLA1QMCZWix",
  "key10": "5SCKV2ayVoHS93C4is5LW5AUNy3mFHG4ivuc5btpwRVkYiqivi8Y3e6j4uhNc5kmu5ke1wgmDbtyV7hAZhyMypKH",
  "key11": "3SQiMbuLrP9rDjTyC6w5KVib365Wxrdk1VRMCj3MgACVvqJtG7CuYifJFwygaP9MTdTbDgQ1iweN2s31PKVLWpBo",
  "key12": "jHwrZhkbojeXEFwk6aztWTui22hGZp6gDw9i13SS5zwNvvgVbaT31jXNwvj68bCwnKCA9nXqhJQXMrSMPQJ4PKf",
  "key13": "4SYrBeBzunAbcEfsNAE1RdiFmVizrsoHiDPmPnpZH9VDVGTbb53JaMtgriHUPxN6QZ8BLreobbaoPtexRiVWX95E",
  "key14": "2LAQEhoLX86eGZnNp1o5jVSGyg28aqYvBFFkK4NjzLpQAJ7heArJqVzPg5uwFAc4wZgniej9VWzNzyu2BDzoMVi8",
  "key15": "3jnW2e4DFbaMUP58Qyhmfrf8uweiJbmcVD6usZr5o5N8LbFD4oyjqFxQ64rfHDnx3Xsff15K72WWYovaiS79wJNK",
  "key16": "5SJwbpf5WFXAmn4bLDgBtSmqktDehymDykiEFKmL1Bc1Uad3nnVe6HCYLZDpsirWeojDqzZFhopC58moFVJSzb4r",
  "key17": "5pR7iMeu9deYL689HE6prpH3FdzCEqvBRmrFBhb61Evv96RXdFX9Erc5zrzxYN7z1SLTSnS5J4AMnD4WngSmfjS2",
  "key18": "596ovbPCejWG6tecBr9pSyr6v8iFmxsHpGPA3Ygr3bnFoFxz4gMNyXBoNwostFejBKC5D5ey3bKa9kjEARxTJ3UY",
  "key19": "3c4PzCEfVQG3zmzDEP2DUCcwayLVs5B6wh3vFsBDqaso9E7PWzGpmJxhEyhbQzFzR83P1BbypCV7dodQt41xiM3B",
  "key20": "2ikdNThbGQ5wZedkStcwjXPu6LEodZP1Ue8Mhiv9YrbUSFMtngP4Af7qKScn4cGQm8oYf63hV41pSBbmcTvTxwwH",
  "key21": "5QGkeKsxZCDAjRGSynCGzmX6xR55CAbvbXPGszXUA2gogAmzrpzgY6Ymeu4Q5PT7D1PErU9g3J1igZd3y1xACwFV",
  "key22": "eiyknuBd95T7pxjsjFetRnuUYiwtLgTQL9jqwjGbnahf8s4MhjunKcCTTqQpc1hRCWKgGb5Xh5QjMSDxN2xMk3D",
  "key23": "3Ekv9T4iVUDRY6m7r7WntYuQoCuFFHywbJqyMTDGQGoF1puUxtB3rCgYVJWuE2A67JGoDwH1P4MXYtzZVGAHQwtx",
  "key24": "63pzPZ8Lny4N8yJjTcHUvCqjKXeDw75r8DgJynt9UFmjnKutxFTbSuoBuYr2PX9k7noW2oBfUiSBW8esa8PfRXpT",
  "key25": "4zFEm4GsFc9FHbaDP1x63E9L5hxQYK9TMw2dJ835cLrsq5gaHqoDLLsQF7obsQHdEwJ4fLAZ2rXrY77NNP4QMBTf",
  "key26": "22WQ1f77WpGrVDCNoiQrMjiCptmXdQUqprnFe5SHWZiuPjdCt62WhFVY7xJ529XBbMAcbaH6cAXoDFjqvnNkXjKn",
  "key27": "5hJRe4eoYkc7cfRjLn68XhgeMANT35iuZcwnTvCiJ7zLudpb4WBBARM3AAZi3um61NiZHApiNBJHrREChaZ4dbrR",
  "key28": "4Mrp41qUVMFcJvRRmbfb6nXNhvide1YoKjhULkpw8jRN2DgURZC5DHWorQjeV7njtVZivbYustcPSWGYZH9uuLNs",
  "key29": "pTgzsiPxDMrrkVRKvu7tkWBVEmnrMW85cZMEy1cxPgYAeuy12ed7WqxEDfGbb1R9r7jf55himdwCEgNuKeAzSJx",
  "key30": "cofgN9G9v8J8c9JQrbdT9Hu26hMuKBsuvFRX2pvU5NS6nzXTEvNi78FC6dr1eAg1r1z1GcDkuV1s6HLYS14bc1F",
  "key31": "5txmfcXmf26EU2LG3SNvXxBj9AkjDc8B8yAp8ehwUkycieouZJQhgP9pv2UYJAfgfxrTqg2ddhF95yz8Fg7phQpt",
  "key32": "5WAaehzPD9HgPQJmmLW8qje94DCk4fLE5aw1v8VbykosTtpHhhMbXzq8DbXfgdjv6V7qhyLRN7KDFJnu8wvms1ke",
  "key33": "3fR5MBuZSV9YjRbWTSK5v4nBa5hKLuPp5f5QQjuXk8FwcJeSLiNXburXc73a8FWBTESHCkp6YWzSYFeBiGuby7Xn",
  "key34": "66xQzmR4hC9Xp7bnaX99hHucLHbfeRLMPRfTUCHxco4dcw4sc814JNVg39TJBvSfEMX23s2GhNrijtBddTrUBrbm",
  "key35": "4yGz1W9keHLDucK6m36hAiuBkwiGy5boE1QZg7f22VnBjTccnDqvGm8qJBdbyJMjwQoCSxstDctJiG5SxJSTj6Lm",
  "key36": "2PUsZLExhERDo5n4qMovprU6dPeV8Sd7jKy83acqMrdmUZUKKKi2FwVEz4PW4DwPHfLiyephNB1DU1ouvsu9aGSn",
  "key37": "4EqKvgT9WgDcJMwJxG437ncAQ8ptYeH6XUtjM2h1sY7EEQwy16MAB2BvLaPX8S7F3gYwCMJvr2puKXZyBLSLTR1Z",
  "key38": "4JgFbDV5T3t79qntNtJyLdvemwH96rszeSKnBKaTjqZ2BacDcR1bShJNXcA5kbsdB8XWw91B4PtQPPNBBPYqdVVA",
  "key39": "2eXVfJ9syNM9Vt9BmPjTy7K7SdfVPFYdkjMLFWAL4tL4dYaVF6Xt551Jb8RFs6HiFxdewib5946RsKYxCYXMVhqk"
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
