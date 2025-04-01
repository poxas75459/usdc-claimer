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
    "2r6TdjwcDz8hjZk3GPCu6VNAsYM2g29qz4Ms72gqBRxXWCfre5JNnZw1SeyqdmQiF7zAxXTpqpmVBpcRhRYgdo23"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aWHFdTD6GrBBWqCzHyHmdRjgTsfzjZp8dFprQYHRTNfNKrBecpV7ZiqWXAwJazbKxrR5zmK2cvmnq6iNeWmxFrA",
  "key1": "5raBh78F3uuU2TXcirKtiNZTbnJxACCsDh4F3hmpenn1dynv3hhgpPxfQVp6EqnLWKZjx49e8LjLomct1KwKnZYH",
  "key2": "JFCYfx1LamSBrfZ71CwrYwEb4Vu91dVa8fUN1dDAKU5xok9M3z2EDuhPQiqsyBWejUHXu9U9dJbkuQAHnDKBUei",
  "key3": "VjQBZtPxGF1as7jbR2RZMWc7oKqyoSV7ysuwWAe1ruQStzUXgfMFzhu52Jx2cUgLmFZPnung2kZ4QjFZPc1MSfH",
  "key4": "5epqQpADydjUCryHgnrLjXyn6mF4GsXtNhYTsK2pSpTYe3RqyVDUdHeXcctiWTLXPuHU8Zwx56axQXXLJXiXQfSE",
  "key5": "5Q8gm1jZeBcXbEPddwpTkMDYdoUvXWctcbkXtF8S8Caw8V45JxjPhcTvpUqwnvMVnc4tK5z9iCtavvCrARacwaAS",
  "key6": "2857NLH6qqNWph5u66CvM8d4uLDGRDYmBDj3edNZTzHRHxGGa511ussdkWZG3N29K6mfj47pPzdxZjpQXm1Bavcz",
  "key7": "46HLmSJefShZUX5nLvNuPy9RMvXzK7YferAnhpiaGUuYMs2ekpKCgniAQVd3kqJj2W42h5NX6ZnKXVSKSrZFDHeE",
  "key8": "2g4TSgvandDBc4LLbEpwwDxuhBbyABxFt33c2hYWHkyjvEqkBRYiBfLBL1FF4y1HHzHb2hLKGa8ghCat8PFYV2p2",
  "key9": "5B3hVsst7UeJY6YyFFbepiRMAatTqyNpoombeuDPT954XdRXx4XtUWrYgLUNGE6B22G8UXPBNnXw9r2uNAPBwEti",
  "key10": "5PEC9ZA2BdPq3UdtriCRVbje9W7CMEgikwssfsZCiPeo6MTLJ2oepctRL8Np3nTye934myKf6Ww5x6kXhLNCVVbZ",
  "key11": "oBjbkM4LjsvkTzjfeqGtBJ3Gu8dkB6JxsN9xwiSDuJ4UBshhjedwZeooeoHVEi5cD1bYYUVEfCfPgmh37FCqk9T",
  "key12": "5ThqUaTxEFJSYnPm9V9U6XsGLRNW5569rmESMVHapkXwSSoutH7DeCLGznXGtBEZ9ed8Ff52cWHayeMAiRBCDXfL",
  "key13": "3vB9A4syB1qNUot4vPhHNFoDy3v7LixGTAPWEoV1UZ3NRY8SadJxgtPvVKGwh8iZ7rdXWsCd1SbV1f9TWg7eARAU",
  "key14": "4pNwzAcopkb5YJ7fcHzfSHjTWWBbUuNxkRq7w6M8Za2u4RyqDiSh3hrCZ88ezxPreRncfh6pddVuKVNGw3DLNcHj",
  "key15": "49g81PwerVarikhxELxHGZFoNzwT3NwjuQHX7jo5KUSPkQG7wVA9VgTvs2x9DcRZagLPBVsozvix7ftbwVA7Jjqb",
  "key16": "aQML9aaifzhia2gGRUJyGneeddptnksvDzBbi4GfmAXGdDH3PPD1AWwWSvSvypAunh3qWPe1YCngPxy6vPuX2bc",
  "key17": "4ueMizhvrW7YyqWPvrYvmRrWRK5cRBFGvudZepN1Pv4LnZtu8VVL2DC9YS2SKkpW2PPYMbXh3LSEB2Xt8tvemGGN",
  "key18": "3gg2zDFFeUbUcPSjywCHB44UFJAFyR1Y5wdnQfkB6PhBXdz8LC3MJ36P5b4oJk1SBAYvyxkUXj8NMNM8ukagRKQX",
  "key19": "5CFShy6AbZWu4hma2n55myU9mjt1pmjC1w6cdt9LkfeJhory6YM9KdtixZqY6398KUmKkJmzouGCzpxAt8PEvLDu",
  "key20": "3NCefAd475fDdE2yZ35BWaKudB8Ws7g8tvz4QuEJtMLvfMu6Q6qGi3sdkpNcvDzo9dAu6N3rVfSGqYS2FcsLkru4",
  "key21": "2ucWaWifPHi8Rrd95fHNT7192xxSsaqH84o3bYgb3AcMKzjCFH9eQ3neKDFTxLWjdk2NoqPRTs4b1L1RPk4E7zNE",
  "key22": "a2nWZjs6zNDF6wsV1BZ8EYw6bLPEVzDxYGJUy3bmLWjTeCWHyJgB5WDctfG1bYSY2oW9Uv93WynF8KMx5RGKbXa",
  "key23": "2qfuCdWVaiwGj88m22eLHxrSFntJoQrbkrSB34NRH9napgGQAmQ27T1tuRn3YReKz7VmwckTtxeEMHtr9g5F2Pmn",
  "key24": "2adeadyySADykwqFJkFD7szAR1zFTdNx5t2Bm8KdVh6tbvwUGk1daF8tYa7TUnSurXquWrKmsGGbspTME9D99447",
  "key25": "4xLWsqmCV24AQ5eUTNzuLFB2nXRSjM1Ng1vNvTkpRQzGJCwro464bxCeUy4wjpeqc7EhbU3oc74YezM5BCUpNRDo",
  "key26": "sMRkrushWNHGWhNXxe7dnzVvKnG11xcpuZnb2E5qGmt61BYR1N7TdePwG3BLQWX459qt5UoPTQNbHG9wg1Hs5J2",
  "key27": "2eV2LtM3drmikh2T9RcfFMtwVBRE7C3XY1oc4Xh9mgxeHpfSiEZzd81DHgKFSFbzV3tThmRM8i5WrqAS3SBiVTfz",
  "key28": "4V71BYT3GcEaf4YVBzDXh6JnvDzYj3pg5Btoxy6Fd2boEDb42f3Dyt2wbaNC3gPvnFt9KqK2uYd2HRRDATfSZMZa",
  "key29": "4W8kXPXx7G29UaXGZpFuADRVsrnvPFNQPLe5kazyfRksispR4JoBdh6kEPtpHgUcfoV25A18xvcq3zdzzi3hvc2i",
  "key30": "4CAUEoSqWVxFPTYR2pohd5xH7GFLYWV1c3Auv3HbBUncXGsUxcoRMGC2ysCVvQp5PFyaLxY5m6CqRSLBJ7j571a",
  "key31": "5kDfyBZJVtRmJfn4SKJCmMSEEN93CBckctyrydzsiBCFQJjwL92D6qt7kPbBXLDuZUSYX8uDffDAeX7HbazynW2f",
  "key32": "5mXRq1xugkuaSCWBTjzVGAERtWU2KrfVoB8UMJ5qhuC3PJEzqZCSTVXi2XMTxxQrkgeWNzeD3fZm5q9EJ5k9gqFU",
  "key33": "4xLQEcc5TdNhZx2kN2whckmGuLpFwFyqMmBGDTEhatfSpFfjKRdvGBzrNuiXoe9VyaCFrTZ4DcHQceqBY4zjqRwY",
  "key34": "3ES7cJaDYtmuUXu5CkUDbAhjFPrb4kzXFhTYWXojZ4RLGhNkUXGw6nRrRpwog2QuNxypbwpbMyYH4yo9qxC9bahN",
  "key35": "5YMs4dT8JF7FCwQFv6GokVZeP3a4KSs4hqWWMFsxrjAmkgFxsLjHTcMJk5LL4isMx3PXNq6gLPVayoKqnhypUsqF",
  "key36": "4zfSG5DUxqJiKtRJfC6H5vmo6dwo4onQvw3xjTmprmVRDCEmPYGF4h9Kc563fGXW1Bv7VAyev4bRDx9eda3fYjqC",
  "key37": "3nvg9Y1jrKMLb3ztR5B1QNmS5CZ3Tz2dokwvszCnPpB3fH7dCCM7NNb5EiJ2R2M7N2rx92ysqhaR8yaZJKZKi5Lv",
  "key38": "4AN7DcYYeesjdRNaVKUTFesUazeGynGNa4e2Z7bNfVczeMZA5kZxUDmtZZJ53vBktSrfrbjYgVB3HTdeR1UVPGab",
  "key39": "29XDc3Z2b85fhHi69paa9N59HUov3UZMZ4RjJVqoZjQN3Pmo9TPtYBJvLmgivmKbUypMH3stnoVY5o2fDW2Soaoq",
  "key40": "2eP3jyYfTm1DRiXzDQJozad1NktYQ7V7ft6dCgH39cffKnPWoJK8tdL9tgFqM6jXFAtXtPdW2Wa2Jhynv6A7uSv2",
  "key41": "LYZENipb89MXr1P2QkBb9M6xrbrPLoHT7moN6xZ8qLgqLGGpsjRrjHkiy81uD6Rv7xHuExbAZmxNoZY8VMuTq7Q",
  "key42": "38Xsd5e858YhgzKwWNAh764veV3QR84gh7UUHnrSqYcn5ceNff1BqZCMqAvECruKpGq6WGtMkPWN9zv7YWUYWTrW",
  "key43": "GCWL2Hb8xEUoeNvxGnKhFi3JdHPiugC7vqdK9CFVSYEcypVYUBKMUbRWRAFtWaeFJ5h764d6gwAfi7fQr4dtmpd",
  "key44": "5Awfw3qrgxnKyj8FEPE2FqjTiLFHHXUu9uxWEqsEC5BCYoHtoZz2e1TyfJVFGcfQje87NaUtCzy24UAeJpaZShfz",
  "key45": "21o4HvG9GhCZnrDrmyphb69LLL1Vquccw6QtrnRw1gW6vRAy5ZULpKf2JToftRmKZ8JD3U9nS1hm3rgg3vrguFhV",
  "key46": "5HTVosVN3UuSvTrjCdnctxtWxa7PM9EE1pvFggVGcDYSJA9zHjfR1aS3EE5rdDZ7THda186WuT2KNKDGvZZEXTcE"
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
