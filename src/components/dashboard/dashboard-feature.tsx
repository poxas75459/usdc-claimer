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
    "4htAZVhP6gjm9LGfWskSfcgPTXd73bFrGPoihPiHZmKCYXvrByvsTCVZBUHX3XAbpS88TbCmPA3dtWWc5KZzcdZk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1y7RvgddLUQYUmfwgJyMbJyBSgy7JQqisXSF5vbZANi3XcomC7vrzURCwquRnVt1eh9ivuqogX19FcyFn6rcwEE",
  "key1": "3RBkVbhrnRLr5fzVANwrQYK3QBjHMXBK5ZnBUxUMuw4LRFR4xpJyuiBWNuEykJsPST2nY88uWZedDp8uy7SkK6gW",
  "key2": "51fQtBCjDM88audwr2gWQ91riXokRcoTaNrzUR9gRXZWJhKLv4jye71gVECWKjk8HZerRfBX4KYECfhuizUfUjN",
  "key3": "42eFMw2NYPncfWDP4S8DQZCwFccGxqv18AQnvG9KpqNbKpERdaeWrK6LRMmewU1e7SZuEgs19tNy6TLbdYBKbRAs",
  "key4": "Qs7QLd6ynJufuNX3mQmVxPsmsbNtDGoPuKAw7ZcQUaC1HSdBWwWsdAcURS8uw8PPNN8GKfXePHzVkDBckkUqRfE",
  "key5": "2o71HCdk2KJfTHsKPtczJVhV5t6FqBczMgUc7vLNjJ5WzZkLc91LDZcwsxmSa8139uSXwPPmhvACM73BesScn3Si",
  "key6": "25tYbAfwAd6x9VCAYLRJd8D6Zb1etrA55esWk8VyuAGXJ1M5FhnjKT66gBUo1GouGnQvHH5PS6wCE8LiK5PceRcM",
  "key7": "3JpMjUW1SSjKv1neCYv9MFkbzJsSuCbWhKXjpVCYJav5itbn6A5mPfYnau9XYaS15oKwmkLtKRczw9XMA9xHegbz",
  "key8": "qUTkGU6cQjRc3Fxd95soemgN2xFhZjacBgMUeYkNwMyAAPneMr5MwDAZ4ytY4sEW6VqeqA3R4RAACcfp3rEGvi4",
  "key9": "199Yy5HVyNfjp31drxR6xxtkuQe4jV12bkS4Z6azTYzFAij3MLfxW4Bw312GyWK9oyfcvYJEBQ6qUak3Az93fV7",
  "key10": "26ZztaAnLjgmQx3jzE2xCZHh8mUEX5LVqSC2NhJhxKxm3bToSDsjWT9EUBGKHXcZgFutE7LKAAN6QbfgeRcs3acR",
  "key11": "4MEyhNLTBBgQueqvdUTD4bKSPpb5qfHhP1TYye1WNtQ3KJ4z4b7CqthhoPjga6RdhUb4ES85Ny2gwuHeRPS198Sx",
  "key12": "5UmZm1q7sh3irqVSy5xK1SrX9gd3fEJHXtNYYAorkVYHysmP4AHgq1hygCeopbM9RXrbu3JberiiwEua7pfc7uLV",
  "key13": "bun2pG9FRC7hTUr6zFjVxoHsaDKdx5zwcbpiizrs71g7mFz9c8n5YumZUgXkyMaDDZKaZsuP4tENhE2Z3tZF7Ev",
  "key14": "5cwTYTHsyLJc7qScwDcrp57Kref3pC682z7Wx3VGzmZxmX4G4Zd9tks9X8bDsi77nLw6H6h3tdFCkNiji48KbRuE",
  "key15": "5nfkdHbZ6FgnsSXGJbLmMGceeQJRHJXpnTrTQucpdR2U5C2kaJRbqzDqDDpPyA3mqYPkNM55t4aji8GgsozFzNzm",
  "key16": "G1dawua2TgusfTRFDRfwtbtwAYo16Cez8BUATtZMsRiXRGYobNYTQs62j5NcUUfodJLtheTSzxKutwv1dkqLjCx",
  "key17": "61cgxD9DvvGbomCqMCMpCRkmjzEMeEAeEqAv2iHwLDsVBi7m52giVBfsENc8zUV2ehUXJGHyKcCWQ55en3aELMHR",
  "key18": "29QmYZf64pzjU7SyZJAvwaG3raBzzaLPfFKGpFdjGMdrDfEM3RdthaVnaKKL8QgSAphM6HgGEySFYnUgDdLssPPf",
  "key19": "4br6FR3fgNjX29EwCXDfUMaz6Ri7ZujinJ16zW9D4935xM8yLZHuhyd2bdbZYhYriFY8fBFzAY8Fkq81oaFwq1ek",
  "key20": "2C3ERwupdBpA6CAKo2xvCu7nFiibkvHQiYmm9vNauyfCQkVKUvR8QwcHw1czYPPBpRruH6g6D7fVZA2yH6pLMomV",
  "key21": "Rj9HuVfig44237pauB7cUVytQvrussmsdp9NWuVUmUkfWGqaSWBwbQkfrX5b1AkMHQgM28k5KAgzvGohYoVMuQD",
  "key22": "3RNWLtAJPbkWv9RMZF5hE8Mfdsen8uUS7b6mtHgmLPjMvfK4ZVxjUbnbSD87w7YZnG9h41m6mggAzVE9xzxWwGtK",
  "key23": "3FSJC4FHLaVBiK4UmS7iQXHiRAPoCpDCc7NxDMXy2mi1JcBb8HcYTbCHsYg1MuxfP27ashRpqK1yhefgoj1Ggrfk",
  "key24": "5KAzsmgw7fj4VZNhrbi85dAQnjAwLcDrdBp5TXF1BQELv8RDfsqxyEZvGpTB8gXYapqy5EZXcKMrSUdaEouVqW42",
  "key25": "3wQCmPaVZLHKhBzr7pPgBMe462j1pwnZS9bd8A7Q459EZhPv6jmw5zgNXyVruRHFAwuyUkbTQ14j7T1J9pux9PYK",
  "key26": "NiH4qS2rEjeEjKNTbbjU6K3xGPQ3ToARCo5n2ome5ZMxTgEzYW9eCCozpYdR4ShxnA3Ez7X84VkkKbb9mfuZ9qY",
  "key27": "4cHzfFeRwDS8oxt3dzN8Yfj8eK3quJYPdE8WbChf1sR38Enf7obtKw4iwB3ZQtPaLLn3kRFPpc5iCKDPdRiG1mnS",
  "key28": "7qbiGRCDLFGG2b6jXodDEFgJ5H8K5mpCig6rkYMXqR92H1t6atyfmLQYFys7XtZURcvfQ1xY7JxmcCeUbtopYib",
  "key29": "3EnZLdXm33BBUMzGGGwqsdD8u4LAiqBRD6Z7GohwBsHuC7rG4vx3Emve4oSWwy1Wce3Dm69HtU8adzYiHYY74TLr",
  "key30": "3zWza4GWpCGxJd8dFx6CKPtD9QtbgCqj7PqjKZy5HQQTivJycwqtHWFhFp5BTVFAs79zbheVJyoP2zkTcJ4xJKoc",
  "key31": "56yzFw6Kxhfa7CGXo1inGJsb3mAKCQzNwDzFnUrTEmsowqAo6imtct7XwLPgwasK9giBv6QtRXCYbBeUrZBa28pu",
  "key32": "2oea7Kv8Eof9i1z4VGSHqQbc9Qq8G27tj2erz12qVrTL511u9sWdVFbVp57ifmh37HtMt1yJVxnWt1nsF16zqU3g",
  "key33": "4YZJv26so5sJdsR2avAfdPkrdANFV728W7a24aJfQJw2nJhFvD3XtZ4aaqWkjwCPsrh82PgKEspJYuiQZMH6veQo",
  "key34": "2mWzDCAHrAof4V2kye8m9dpGxbhrqJiomYKMtbieTApu8Mi2hhSYMT6gjWogGFxRR8iTnHQWuJnPy6HsrXiwCFqf",
  "key35": "5wMvsEYMJAu6PDQrAUWDDH8LC76uavnKj1eJoXvTm9gx3gRJAvS7P6yz7FvizYGynKoCZyRfhPjr7wcraf4GNCMg",
  "key36": "2GLeCH8z2CJveTiMTkJajhTKzaokTNgyqhdaSLWc98H2DsQCBBEiEKDF28QwVuHXGEfxmGGuoYzovjPFvFKE97pC",
  "key37": "PK9JyEXsgTZKRFBBeuPS5twTo2Q3ZQKmJZNCzs1hDV7h8nqQAb8LYB61wJ9GbM6a3SbY2NU2N5msKuM3unP4Dos",
  "key38": "25tAVvqP6xBGvWBC2pMvvqsUDKEFvjiwoxuYBB11UzRKfZ6oApFsMJ5i1oBNEiPL6L7Pqy5yZzDyqKLS66VFSUgZ",
  "key39": "3B5cjh5TvtDsPyMh8ULz6FTS1g8z19SmfPgABAkqHcGWnkmSqatW5AayrqzPRY51bUeTJCu16VeQyxhDB9Cxx4hF",
  "key40": "24vLXdqZ18k5ib5se3Y842f9pABXq2dPAtuPZYtCTHVoEwCv6FrzgBqPHKydZ6SN2tRRcjMK5VGKiYeHcPbYueVV",
  "key41": "4ZfQPpm75J2FGem7xBT5sKiLj6ZWZHg91znYPCKqBup9H5zqcEskV4Vu5ctQHRj954soCUYTm92AaFjeJezrwoGy",
  "key42": "3BvTAySVUZHfyPPpn2WPxggt6BRh7GM54HnWkEb6m5E31xsMQnihMFj6A2KoW67j6Afbgv3obcqqwbw1obpBb8ND",
  "key43": "5oT5eThpQKQwNhzg76349jXcRA9ELvrhV2L6kSvk5xWcZc9z6CxQJU89ZwxdCENwizC5QdJNNrFs8twuqb3ViZ4X",
  "key44": "2FdcFmccnmquvTzovEYEMNumarphvDy8RQqVSvHcWQzFgQP4WhgaPLXgaBfsK4AfpcNM2UGXFRufhYvXCUAxYkEU"
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
