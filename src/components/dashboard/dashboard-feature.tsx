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
    "3uPmN9TbYH2jdyBqf7EzJk3JBfHrJ79tFGM5Yqt6csWPDcM3FSML3xr9NUCGwfZ7FfhAb73BS8P9TipfAGDeLZQ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CoSaZ9hgkfvDskPzgunHL76iWhLQC8hriSRLqw3zhKEhbcGCguqA3QxtBmvKRNsynjg11dNmyQtT5vDtEXrfoCQ",
  "key1": "hbU38xEmgK7PnmwAWwbbnc2btnv3f2oY7RqJuntDGJJZfPxFVU41AqBKo8MJ53yVYyRLFeYA7Xi8LFeJuQc6m8T",
  "key2": "2ucD43DmUWEFzNFJcfJjGyNGN31y4H3W3zzktCJiHZmKNnotaMzmCLygPbiwo6XioSU1qXsZaUafej4LrVZrUwBg",
  "key3": "5g1xX8HSA8i5naDoY4au3j9SgRzsrkvjM7Jaa9YGzksq4Vj1hxjvnn9rSKYbiTnNdDSTKiBgihfn4rtLXxcPmFhD",
  "key4": "5PJyKSJwTzkZrSQLsFYoUBZMJBYb4wJJMJdzWrpBLm2h6Zihj1b3k5Rdoc1GLWftriRdLfKqGVwZ6MbzzMzgMo9y",
  "key5": "2wMnv3Xiy4Zz75kqwJUyTGBwQkqiguRKT4FcLVsJXg2ChZ61gkeJRFdCWkeF3bAV1vpfs54PfGGZsPYa1UtatP3D",
  "key6": "YeGohUrDdWAUdedwcBssRBM3sEh2xsQZbbGQN1eiEbB4mgwMHYQQYPyhqkpNP7iYvDWKXND1MCC5ZWd5jHieQ7W",
  "key7": "2hVKysMq73a2up4PR7M5DKyWpraJrG1N4t4tH7BdiZWVDkxwvvQsGsiUEioDER3Q18mSSb7FEbDhxZy5yVnVMbD6",
  "key8": "56ibPPTMfCT1Zv6rG61US7CW3em8iTy2AmJRbf3d4mbXyzbf9Su9C5DtVR4Da1YYyN8F7teRYxoDFEtUjiVtz1vw",
  "key9": "VGVpxxkEeT16xqQCQbVzzGSuU4bYpDLTchKLpYtbtBiQRSEPsworRZ2m7SvG12BTjknEi5MVUTCPFhKXGau9z25",
  "key10": "4nXFGLrQSa2ZmVR3GJsXAN3sR1A4GAvJqZSQh3AuTJDtPVJfGAaqun7tpkfhzgWGwfjN9Go9z5mGr7AQxL4egiT7",
  "key11": "2a7wG17aF2y4JBjmUzc1zNmVx2khvBBSGTTFzvA3LGibY4gtcNP25GpxSwMBrXsFUHfrw782ZhGgwKg3friQKrd5",
  "key12": "4z9dihEv7KJjfDMuk8geoyxCbfCCZcPmwCLnsK8rvTB3z1UkPQUfp3phXSg6dAJThKUHCnHBxyJjvmojbEAnrSTs",
  "key13": "5ZxPFEDcN4Epxku8cV2tSXw8ayHyeRfaSUHqt8AaL3AcFUjyKBxKqmrAjPiE7YtdvDG6sw1LfB8ZF13fUgzFWvBC",
  "key14": "59ZRyHqsdfZQReRR2uoFKmgogzci2gmScAZ4Q3z31w9Hn38Yh4siUG6TezMhoUXRhheRZBqprrUBNXy9eGajH5Tn",
  "key15": "2X2A6aXqBHJhwg4H2tTB6xaGNynzdXyMW7mcX33c3ZwaqrLHW4FY93ZE6FiksHg8VXfAKcFijb1sKRvSD3Fa1Dbv",
  "key16": "2GpGBYeWE2aAR6oB8cVmD37n7FLbTVd6US3Vu5nhn4fVqYj5tBxeZgJRDDYrf29xheXavRNSGBUhPFxcJDFpiZjv",
  "key17": "2ovwbNGHxSXRvxfJEsoMVC9NpP6x2h3HVm9GDVGTnF6k7HZswMwD2WC9CTjAB2F2YLzaXWZL9rpBVkcVDfh3THp5",
  "key18": "5zT5UhQ6vaVdbx9Qrzj36QBRKDtW8E8Rp6bjYHpHRj3jKadKrzCBRiBbfYWrafrqkfYtEo8YREoMzyHUKSDu3sBe",
  "key19": "2c77Jk4zjme3QDaAHYPdmhTNEyWLMqpDC5CRv5U86PYHFjEvt1Ca9h9ju54pct1UPKaJmg4JrW9tVE9obM5vXpsk",
  "key20": "37SLjSqApXKkCgrxAViWaUHYe9YLE3APeAD4ZBdmwo9aGjY2N3HTGYYAfADdopXeHdx8fk3veSGqBtQjBiyuo98L",
  "key21": "Z3hhyo5Hw89fdGohESrnDUac14qEdQsTNQ5wuQTArEJvhLj1vAFHkFvgAkBGPmrJ7ZcC8pvETw32Z89ftmgvG4J",
  "key22": "38HFW5K9Bao9c4zdR3j3CPZ6rBtNySjYtEkpmNa339BvYGv6tRbV7186zhUMH4BXEycfwsWfLYQFFs5BQRnuXe31",
  "key23": "5ErZ8WvdurdHT6g1iKNXTNWX48kpZr6UqSedWfesJ36H1DLLW7PdGsPZjr2M1Zqia8FDUwduEg4Xu4z733YDx6B1",
  "key24": "3WS4xTYAzK574w1T6P1pRFsMrmuMDvnCr21NASD1qSVAb7vBoLPZ35mzM73N8fDZiV6w9GsXfFah7tYDBvfwMw94",
  "key25": "5xfN1UWp2JGYWiTa1FBSXkTWoyNrZ4VczGavc5Co3L7vEjtvBzGRNdFvhDHvEYm9u87YX7TR5tohByZbiGgvrj8Y",
  "key26": "2DVJdkdk9UBowiiPrBsS3k8Jyv7qp1gjDofHUk9YakdY9yRNaiSm5HozgDMJZacdZZCVHhAm1FEdHH4Jr2NDQYYD",
  "key27": "45hi3isXHKsL64RoPkHw9quGnRt4NbJz3YgqWpLTVTNZhc3bguTFVXrJco5yps8QxmyszK6oGXeQUTyiiWmbqGnb",
  "key28": "MUvh6RgroUpFHDBxPJLwyvnQtExXFdznevwMoVLS3idfUbq1QFJQuuAHhM53Jo751tB6rjXF5mYYv8JFsmyHPmf",
  "key29": "egSKHVKBTtbQdEdkCS4bhDFwMQ3CKWGwQqvFnWD6Y94DJ2xofR433TcLrVa2Qi4Mfdiv9yhyMwXvg6awNAVimLp",
  "key30": "37fWsspQ2CfFRF1MF46zqEdJCrr9n7yZcYUjeHhxoXWSiS1fsDZW7MPYCzs71XpjE9LjSzQYZhYLdFUFbyhXAann",
  "key31": "a3rsx5GrxyQC2xu7r8PL2fjPqWkiDAE4Avfva1FbrdJD4aQUNMtLaGwrBPFUHgjohdHbBaaNMKEKJoTBhpqSAdG",
  "key32": "4ddk8RnzJK2sXVRDayCStGnygvtQ649r5yGrrPrG5C6KMpRpX3VyC9DT9usKJsGhQ8iVb3Fn1KGb6NregM7QqA8b",
  "key33": "vLjseShw5UCKCSvzsCDWPyP7ng6smEUoGBmUiFs7nJ8gqExeSEA83yRzwEo9VyytJ2VShTgtUaxK4PWKqmNxGh3"
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
