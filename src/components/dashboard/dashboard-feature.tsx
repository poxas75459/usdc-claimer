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
    "3EGDqzKZ62bt2EvFxswGHEFhzPxrsjyECzgCfLhkApdQeRQx1kfuWB6F4wk8js1sgy98XW2DFZ2LfGpA7Kas8UFJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EHrnwnCVHPW3j6TidCeF1k2PiJbXbRfd1KJG7eGn1jRVJk5cV3vnruXshAkQvyGHdzJWC7i6N8Xk9pA7qjEu6H1",
  "key1": "29zxLZpQazkMyQ4TaKa6jVvXYAcDR3fsiayaCTSmcZtd5Kqspr4EbvcnDf7qiE2vt9zUG1n1rr9M2V3Xk2bvpw6y",
  "key2": "5Fd9uNiGbbQ6Yc8Hdo6P9ge7eaHpNAEQkninxp4BuVEWL73jkfxeG42Z94pQ7gRVPos5wcbakuDfJhhcg6ZtvFvE",
  "key3": "4EedwRF5K22VUkWxqnwEmFpEz9h4CT9jFs1ZQxnSGgENVwvEGX6spq372qsdSa56M3vUQ7jUi6YZ25FRLAVWiVCe",
  "key4": "5L25Td4UM54DHiphhedTo9eiXb9nMB4uGgDDBGDjkJ33kpMCVJGthoFPvT72kKaZTyJVzXQrpG5BSvm7upmTTjXy",
  "key5": "3wRfz98SJdmwTaCdqwGLagqhULkDDAfJfSNkkiW7i7tN1qHH69zXAqZnDC1ohVHYajErQbvUUPjtbTpYw4tVmTiJ",
  "key6": "3ksArMrJwzyfD9bgkh7iy37zD3abfXm3hYFmr6vJNJFrP4potCsKVXDqHJA2N9aMVa8WAUvBnEK9ay8772xKmPyr",
  "key7": "5RrYDVxmbCxCAZ14LVeE3uyrg9chZixkekCBkgZYbrMseCdSeovaj9sHA1qjESMpsxepoYMi4FYf3GSB7AGYeuG5",
  "key8": "4gsoom5qWwrzt8NnToME5zG2dhXXuQTDVs4ocriTj8CAMs8L72Ymuotb6qxbq31KmdcHwEqnZAAvpwB33i25m4ja",
  "key9": "2Tmx2E1ni2NLtFbLpJHADXgvqwQVoqTjrVGqBFzz6Xm1D4pkuYLUjVTn3mvNX81TJoBvU99NL115f9PjZeh5Tcna",
  "key10": "5PZFEwEKjVe7RPtGXBW9WJY7VqTe6c8bYFzikuNVrMXzs8fW4LA4UL4iH6UwXSVNz2HfpUYeYRasZBgt2E67CyNG",
  "key11": "4Sn2JzKitkfpFUY5g6t9T5oEujxnaBpb5J64sF66vzEjfGrigUkiRVxK3z3Q5cCch5euZ7RFfCkyoXrjpKhsksjr",
  "key12": "5ADsSgm1SbFwNwfabqKsaED9UbzaeJ52nCvvmVURxm7ok662nm85vBs5sfwY11RhhvP9H3azsr2g4PivUPE4xcZr",
  "key13": "4ifbz3363QSttyjZTrfPXUrS7aSFJAptx8NnVXZ8jHQpCv2645w1mxGY87MDLXisBoFibcYT2T65BkjY3PMqTMbW",
  "key14": "3EXtPUfZQqx4eCyrkMMm2ZLxgCgQELsQRW6tdi9Q87XXyHVKemqd7h7fK3SEVmnVXdasNZ5WBBmDhshisN7BoDub",
  "key15": "3mqNEvS4bscVrtsK5FZh3chKRjGzAhPA7PKAdwnhGEYSuZSCyUSmyMQE35MkxazAP2uhm3XggevGGwT6BnaCSQ5N",
  "key16": "351LvgSRoKUKinSoGA4bipy8buVsLHW9D6Pz6npSPiD6CvahrVYGKRnKs5fSnVpZdQV2wT2J1ZK1JVtQnzz15Tau",
  "key17": "5NhLz6LZvMwP2mVD76q7xxpHfsvNzNgjvuxTcn3DatszwnXsUi8Su1UBsabfNShKzDnqbQSoUodXQXiEfN4qrsJo",
  "key18": "62EfweFgMvxoa6Z2HwLpj3VoSbgzW5GgBueLx178MLxCaFSNqxq5GVMqyrNirj578vNA9uzMFMLKBfW3UD8HVsFD",
  "key19": "xpCy12PpnEvesaQc6KdwGhbJZYt9zDyzkuy1LLdnwD432QCHqsD2FGY9Rm5nGEewvf63tFYUBbCTE7wiRhMrFAK",
  "key20": "2SEoYWzGGLC8XsSFfc2oRwrgu5zNTGqqaQPNVoYGR52XCUp2CpioQo8txpLkRZX6SKTPtKQbRBFKHXd6RrKzy12x",
  "key21": "4tnMuWbH1D2Nv8ymFgvXrGSorpWiSfn4UN2YsqSgZpXmUKFV9o2dRP4xrPmFLuvg7U2KgEGGvnnfrFNPfSqMRYPb",
  "key22": "4fSoF4RQqmZsaeGEWj6LskNY5GGMMDpKbSwrZCkg6c9dG6jhELWr9dosECUTrSm8QzZs3nysWyF5XgmZKBY98RHS",
  "key23": "42Qwku5gyzfToUD8MqAeG91QwwbQgzfLn2mkcrGo4YGN4TbncZ9vaxJh75p5CCiHu2WE1SMCDpBCxAxckVzYT2zz",
  "key24": "594MgeueJHsVn9RfHt9Ds9pxvTiqRcM6Gbf7btNfLbcNyAVjsC7koGxJbBLatwuqGPTArwqj4FavairfYZW2GYKz",
  "key25": "5xXcRVJVh4bEMLoBchWfcf9LRFW7Q7UgbMNg2FLrwcS6zHz3y6wFMnUpm9zE89qg11zsVcQAAUz8QvZu3K7qWBnC",
  "key26": "515Qp8ndRwtc9Q18juq69Crd4HRsmbvDE4n4vFEjPB2eYr5MqqfGhTsn4xoJqzmSjxiPq3j3cRuRGy8iREffymSm",
  "key27": "r4rVvLAs6wXrMFijLUfBLriieeSoVSMasDeNLzr4JxdfoQtiCUWGgUd991b58ZGtkda6qNqdsnp7tzNUiggRK6W",
  "key28": "3d4XYte4kiBq65VEVqvdLsxbMUKUFuVvSBgXKoY9Lm6vpF1iriPyjGu9bfPhRmYzgaEqVKGYqJjoArndhPiAgi29",
  "key29": "66MbAeW8fyUTvx757Vkzdy1EgD2eUVYTv7m32irUhTjG11LiKMRikCvnaMnK5GFoBktGv2316HsSjxKLzFgywc3R"
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
