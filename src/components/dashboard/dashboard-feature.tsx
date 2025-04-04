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
    "5pNx7eSNLKpw9zP7zirNgNw1nkjimd2iFtPAQuwRBeBED3iFomsviiop7BV5zLW3TW1JWdouv5AvTzZSpZa6Yv58"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ka8Vj4vGWZoFjgQCy1axqintPb9K1a8Nb769CkcU64Wh8UjaTQbzKzpDGXicqEZj2d6aAdduQkNsFxnbJd8X4Ts",
  "key1": "3uB44gdGjzdezk7h7PJ3NgfLv9S1xqmVFMzMzCRAwJhkDrb8V4BRzW3oAmx7uprjMHdJ3okXHjkMTsbaqZrsGh9n",
  "key2": "5Fin7TSKq6MGRxiR1FBgoY7RqcgQmMWe9mWx99tqEZyr1JF1UBedGstyA1HcrjA7752U6WaAC7sg9YDmgZQ1SC5r",
  "key3": "5Jvxs7ktwBQmCaDyETXYSUSXqmfjrYY25h1UUzcjx8gbmUBc5roiFeUscgLGkH28ru4j5G2H5LwpQQUF1Hyk7zRd",
  "key4": "3aeFCgQLVNgGUxjByTWuU8FPQcyEy6qE86KULc914vdjhURqTFd3sqNQSw4Cu62mzs3hqhLiL175eSabcvoom6Es",
  "key5": "45UvYoAsjpJKY7MC3xm9t2eTgCPNhjhWRTNeSQBeoxNQHg7NjYxcNB2g1JrvyuXJKZvcMmW9KsZspjZUr8QiSskL",
  "key6": "5vWERhdbaENAUAWRA7rtu2NpgsaiTHSabrfq667YBFXfW3UMZY3LGwgf14MiuLbcULGaGDbaWo7Yco2ojddB5Tfh",
  "key7": "22mE6MwutgZ52cJrLgSgyxx4RNmuVX4mFNHXLewjb7Joi7ctva3mLeD9ngqjXNVBC5HkTH62QSJXFWZMsATy19DQ",
  "key8": "3ZXA2wybHbpmjEkjNbNYGvo9UqTXc572FeeF7x7bytEshJ14BbXWCe1CMxsxwqxLHEwsQzdqevGdRF8FcpN3sS8g",
  "key9": "5HRWMghU9BS8aBAts31HawMXkCYpAu8uRFtpPqpyFF6ERsF2wo6HhkWvuEZ1EjeWMBafWnce6xy3434mqRFDSJ5Q",
  "key10": "3A3c31EfND71dGrqR1PCzeRG3DtLKjksaXC7x6618SJBufQqfT3GYNQpPGRPXTi4R6RVjFrWWzjdXPJK9jjoT91f",
  "key11": "4XA61fQTD83ohayju7JDgwCYTTJeHL6dz7PmbDsGzQy84UMG9WxL1C8u2c66Ji1YxruPzWWYUzrbvGza6T9cRwDa",
  "key12": "2j729dv1bdbnCFFnaJQRa3X6EaVqVitgCxe1Z4yaXTHsant3gPjpdhSxkXzUSqmupXMMNM2ntA5FVDE2toNoKiCR",
  "key13": "62myM9hydu7Bs3rbcrm3SeYroTKZuuXXV6PVVLxzm9V8HYQpLa5GLM4XvvJr7kxzGZDU8dLGYzY2xXiLnufjzQRJ",
  "key14": "3qc73xgoNKqiYdRcBsjEMeyAxJkZYf8ypiXtZvhLYQz7YFQyybVP4xY1aKczo3fYz1bSgGe3M8eMmbEHFJKTG8TD",
  "key15": "5Prc8EXfTA7Qf6cTP8AZSqDb7TK67LM6LRQxHD9C4FRJJ55phcGPNymK46bBXgjGXEz8fbFGRpsPJziYUvQdoiWg",
  "key16": "5gXp9ee2pVBe7PqSX3ijimkSsp5GJwqKxgAzibQdmQ9FhTotwTNZ7i6XN2n8byGdvqeaXYkaHfbB7dD8UtXdhsYq",
  "key17": "5vDwxuTMreEbaHZCeLjiSmGEn6LtfzveKXGS9w4aaKMtEdCbKBC8KXiuTGD9L8ofCHx4CkbVpar7uW5ATwEjGcLC",
  "key18": "4FduciJbrMoruAY2SQJUzxZXG1p217PaHN1aAt5w8TUVZVE7yhu5NNYaKzvhPjR8QZcd3BjEgxgxHxYFTCv8Whkr",
  "key19": "3i1nASyZi71B4kxtBGjux5RG4Hsz6buoqkMTz3i3xiHZ4qKFTotJAMMgF3fa2Qjyx3ttuCxforJnv7rWSM2YhH7z",
  "key20": "cqPGzK9VuWgQDqVr2hJMGfrPVWDhpG8fHTiJ72LVh2CHJqaVmNtALrWi1Q4KuXar4dJaTap2WTLGiaYxnBFMgGL",
  "key21": "65iPnQiDeHhUwD5J6WwL1HnvW6xuMg5uptS7Van1dqZFqAoNPKtYhQCBtmkmPfgYhv8ATbUBvFiBJrHuigVWbQ2C",
  "key22": "8KZL7V4wpmrCUmMUUacD8eQDBPiH6yHGH4wijmNSoNLzWUDV9zm9VrFnVyo5zWh69NWfV1ehkv9CRjLSPyutzeV",
  "key23": "4gkpuYoeTGfdNnTEF8mYLWwhjQ9o7tk4FQWzuA5WtpwZKxtfgfMPRRgejFT2NvmbK8pgGuYvePkfW3bGPnreFpwG",
  "key24": "2AnhsWz8upC2MpXiBrw5kX7Ty8A9ARJtVzccPkWEE5pSegHkUBUBmH1uUZB3hgesnk3jprXXGu4fu3F5vPb5ii5b",
  "key25": "msT5Rm1Cy1qEFvKMVBk1g3vuTZEL1mVSeJJ6it5Ytn7iKSSio3iCNQ9MbbWf7ikesZPpGuHy9x2F8EbENXZEpKK",
  "key26": "5PCV6KeeVZmLRssVj83pikQvsVJZ5GAoYoWGCNPGksX8yrQh9V41CvPoCVMDKhHte3QxVb2RwFiULCTxVQLApQN7",
  "key27": "4kyHb9gSV1JxmYL9uJraThrUmA6RegSP5YmrngX23DdouySnsErTrQXKQieCa3QU6KzWkzyuthwGpkwX1LBphWc9",
  "key28": "hbTAUuY7eEZpaebB5TLofb3EB8vZwxxDNqKJxYoZnoTu2jdvnKsD8ty6ndjtCQDL9ZqFhWW7i3A7JBkH2tKKbMy",
  "key29": "5GPUMeVYUwns7rrpiBV6wcB9FR8J9zq7GemEc4M5X7VTJRetNRbrTHpBFr1tf5U2Ee86FNZLcko6T2WDPLogNBbW",
  "key30": "4zX5Ly6ThPL4aLg3ZHbCJGA6X2FzUbY7Z8GQy55qABieeBQqPoi6JaSxKS5Q7Xg45btkLYLkxf3wxsQSyNa6vCek",
  "key31": "5NLgbRNLtBTxAMrnySVirTswUqEAhxEVbanV5Nh92PMvCVyp94pFUGJZ73cmMLtDzVYE5K8HP4KkRqbb6y1upzgQ",
  "key32": "4cT6qEyhFbZkZQHhqzDbg1JFWMUDAYaKmXhESeHDPJeL8bp8jCj8fwZFvBjibb5bMFbagjdvrVe7PoEGaiQi4S9h",
  "key33": "2T5Pkxm3qZXrqr7ZGPqWKC7BNNBZLRYS5wwvFXaH8fPDzbhi9XsfdJVV1dHCA7xPAySfiYQCv22x8z6y9PCnzLGd",
  "key34": "yTSoYcDZYghkuundPE1V3zD9Vqud1QVZEeCm182rMmRtd7FFCB5FFcDVSaWN3ohspPB5CHajm6ATcbmJTYbRa8t",
  "key35": "475zfH29xJMLJMUpGyHyGQfK17Qu67U1WpMLXXgK5NJ5jMpVmkXdt3L5y2vENmu8pmktTPmy8mntqXfwM2ibxEwD",
  "key36": "3utiBE7TPAs76nQVXoYrhjUADjjy4uvppxBYzto8Dvtwse6ohus3RVk7hpKBAhxxG3sG3RNhFdWaTLq7Ur2k8sgi",
  "key37": "5gC2t5rzoYDrC14TmZqrn8cgZ976XGgNi6qv2KME28gp4ShbjL9Rt6k6dLZb4FzZBqcZvdUQSxkWAzTqEE7GJqHm",
  "key38": "2AUk38KVEhRSiVE4uXwJ5esqhPVwT1WgCArNbbmqUeWipsRZbrdHA3H4gRc6osoYbJ67gCTdysG58gXp1URywS64",
  "key39": "31uMQFW7Sh18iDz2oRTejyoqJMYo8RLfasva6uC9aPzp6wZtacvBLAXWcYh6yEJiXHxLTNhqdGqqUqq6X8K8kkWY",
  "key40": "3ffSPryk8TLeKWJtLGbUQqWikPyRZYjurwo7ZFHjHJeWUNh8Bo5Q25iZKHy1ENdbusXY9GS9JnGPJUMJ2pJuYzk",
  "key41": "2gPTTC6ch9PL3eFqq6ctFm9xVPSbS7qCHgg5FHtwEMMUBcXT8h2D61JeotrvpvcFtJCN2nvSbtATevSmGPCixAA7"
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
