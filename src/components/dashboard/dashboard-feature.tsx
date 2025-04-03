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
    "5mhc2o9tzwSfUzA8f2fKxhSajaqAuJbMtrvNsJhCTLqiupYEN4SUtxaZADWxEM11osGzfezD2WkVJXF52fp7FaRp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e6Rwr89ghX8gmsBcrZsXRQnsMQJw2yFEsLYVZjKDEQnrLxXmmPqigpK8eABc4euMPNbeGCGDtQfArc8MdBzwbCa",
  "key1": "RHyERn7hn3RbZvyD1iNuf3jtXV2zRRn9rvFCKY2cns3dXgSaChbhddFypT9HmFYJ8mVVHLSVfPRu9ZJzX2bJSBH",
  "key2": "25HDwAF18QDdVmjbabhjoFgc1bxV6FQRgL4pTpszwQQBTgjKHg7NMjW3dHAAsN1eJP331DJ6KD4i1vpxwQodSfe4",
  "key3": "4SCW52EYo3J78S3eyuQziqVJYvxcFq8SSb2cEeWfRmVags66dMCUohN1zdwj3FTajLoqQJM5M27ZPmGS8AucNAK6",
  "key4": "2FhVV2a6vwYpUK18USg1P3cBeN7wgtLgDBAT7jLXfbAGRXAyTXepZyHYUoD9tFGKDtpG7NXstATJwnGeLE2qfHGM",
  "key5": "2KmoGwDfU5NQdxKwcqP9vLoPbjNweW5kScg1TAQep9QGoruUpXXzNL5MEodcEk4uF9fSc3ozY8VGgWeVJi6YdJd6",
  "key6": "4AgmUs5QR2DJFAu1FKfuCS6cP3j5miZvq6JhmLvA1sdZHm8ejGnWugJwS51ibuUVsUr7iUBBuE9f3UV1P33YK6yp",
  "key7": "2bL9nMMWEGiHtuBxxRZfGEE6KfkD3AgS786CJTvbDpike6CFpKjgYpNibXXHBCEHADWhZvFAf7qkpcwpDhzpnb8D",
  "key8": "3YYodGyHXHBqP1PbxdRNq6jWB8WdBFvNcnbCFASTnojroGz6WD1FcMyGEX62iBs3euNQZx4jpmMAQ3oacDRbER8Q",
  "key9": "2zsj3gX4je375YW2x33kj48BnUkG8bZq5atvekiD8QdY3ra8MyKMmYcutT8UhGfZVVBNZ35Nc3N5YmDPtvJ4UtFt",
  "key10": "2aExXsmUGTYJZuknVmNvHjSQYiSgdGkWGgWeAJZHXUc1S1sJgYYxaVVnJExJAyRAA8sy4z4cN9tJifqAGaLNBvC6",
  "key11": "2dtyoNUrQPmvFE45hTgGURQGat1AHTwXA8cu6XA4FG2RExu43W2zPzSWL26gchxGveDt9TGZBBwwsEpYH35SqtZu",
  "key12": "3g21dvJHjobQjKQe89erZ3kvrtpLQibhWxYuyMa48s5xLuY8iUGx2F1Q8Yd4FSCtjApxMjjVVcmpsFdKuuAEPqE2",
  "key13": "2LhnKkH5ksqKga6uURTTEhknxRvwb67FoyGq3jEH7ohbW8RHxvQReKEDrQ7W1dZ1mZNtkL6REBHQdrekGpagWb3M",
  "key14": "2EQhHVU6hMiEWfCKm2G6MjdY5rs8kikteSeAiLdtFi1oqKf6Y2a9UwgCXc2PFEJgs7KBcV62ry5XtbAk5gNhZkrQ",
  "key15": "3KKefFFo4uZENCJoK8emqXsB9Y3zViK76pgPPbQoLkyQBinff8Q3ns3C2amkfX29hQhGkKDxcwd6WXi3F217H76Z",
  "key16": "37APEkzifaxncYv76DwtPmpx4TAPW6ig6udZT4xgpx2nPSweh65JkJKBp5ZX4nwR9TM2waaHq4kiteSxDPAEYLWE",
  "key17": "4PzCXXAq7pcxRoHrMqVt2J7SgPvsKEzj7ovuUma8GLmwmi1WFyVE1WHAD3owh7N8MvCk7CcX76twVhHMwVbNhSmR",
  "key18": "4ptHSYzXExQ2dCvXcsgM5xojnAAaA5BVuWWREhcMyXkzZhoZQuLcnFYx9eVDGEBeeK7W3tqK3xTE6utxnAUN3Bf9",
  "key19": "Pttmc2NAu2c4aEFtGL7ctPHMPrGL8p2JqFcZmNF8QKnXuf7tYsHoSEXmTmU6KJ9zKhbzHMuawmgMGwuuF8YUdfB",
  "key20": "3N1KyYXd1DrpK1pb9pv9Nm9YeSQr1dRax9N6JevUE6GfAnMNeVU1YoHhm1J6htC1qx8arKFF2CJK9WnWKzQLZ4Ad",
  "key21": "obsnBeS6HqMhm4jDvM5GM1zjGQyRmie8XszQ2Q426xkjdC1WsPJeDTEQGUoJj8cg3SfnFgbdYe1mCKEkt6dVccB",
  "key22": "3rBx9Nh7qV45QkrZPzn56c9eRwc5VBjuRuQJxSnym1xiZ5GSTS9CmX7E3aDHSoVN7BsdUfzpmdesqrTiTpgpoqvY",
  "key23": "5rPTrUf5QLZaCYg1UW3PRfaZ2KM2RQzDiGJWGbKBZ2qg3BC3Ba87BJNM8dzFjyq84suFJvTSVx48yUHRknrjEz3T",
  "key24": "2r4MPkt63oBzvXy4s7BGPDCX4dnMis1mSUCC9wnC9yCc2Ans5KYU8jKGiCSBXNuCqeNQbdbFifHVsDcg1gB32AGj",
  "key25": "EAHVUYnrkzPNCx4pN86Dv93HY6w6ciEvRbQjQ9vCgps4PQYTSEm8M3Nx6E3VkPv7XFnavorDGffGwEQuc5EyNom",
  "key26": "4zeUk3e1ahgPPHZSiMKMnLDDk5FZ3egnNwjVCcJaNu6DkmRoXygDPVQU2VXzQ2EmQk9RnKrgR43oNCM3DT39a4FY",
  "key27": "4avUVHg5nVPtBtrJD5DhH18XGvcnQnDkqM4Yt5gjDmWD5Ha3pZNPBvHs4ALq7pLHHxogRd7dYCKXMQSDatxPSKqr",
  "key28": "2EoSL9JznyXoC1bqRC5D1uRMCQvDJnbY21CwTWP95GohY5RZ2UnvfLQTC4Vqifkrw53HGcQocm41uyqDQ36b4bjm",
  "key29": "cb79RpDt3dxbttRaz9mjBrapLja1cj1zYih5hxTN7dGaM5iwdZajUf4UWqVmykKHNYDTTS4ys6w667cSvCWfEFH",
  "key30": "486xru2R9RXmp98apWK8wdU6FaLK93tbUpQ78KSDNAmDVsryFdRPmYKxuHmypyaqb2BamwgAspx8XxJ6387EUQ6e",
  "key31": "41kBuVBwezU4Bq2QRdLTNSwCz6Lfs8yGSqwAyZQ7JbG5MeWpoa5VRahy9ksg17fvz7TK9bhNRnRChorPqWQtgcKL",
  "key32": "6Afn8T4Wq5pXKAKnMDgsaL38pmxQmh6xa6vPAM8pLpLcdJTrKv2yJkcDo1C7vK8Tettx9coVheBxvXpT8GBb4Mu",
  "key33": "74Xzrm4PaDbQYkeKhz6uuUt9p89Bmn8fPmCGe5JADcxSfbhkQL4MsUnKwzyCpDke8Zy8rQDR7irt6AJPvxkF2eS",
  "key34": "4zeFhaGjUP6Cs7AWjK2jPXaVtQFdnQehYb4xJf2GkVTL1oV275qBCF14UEJsiKJT4ZtUB4egavMzrYy8XAkQTYQu",
  "key35": "xTmp52haNAFgDM4rxvBktEfYUmZqjRRauRrEo4Vj23EWkYrK7vT5kuts6vXRVWMNMMgdGBhsFengTwbQDPeE5Z6",
  "key36": "4VeMyFBN55w6KUDTXfnxfwKzATKhEVKcTNAz8K39vuL1XxCGDJz1bgWpjXjhDHX9KARx3WcqeLDNpoNzaLNSnBKj",
  "key37": "WeSVo48jrFm6qi9RDwaCrufxBWdKYP5keaVjeKwVmrLQxtC4r4ML2cyiagARCtfPzYzJNqiexpHfBt22ZvQDTei",
  "key38": "4PQGYnkYj3KENikfSKBaA9k5NY9eXUrnym8o5WX7napG6oMPhS1ZQs6v2BRvtfZRjbyWZ4MfTH5re98UXgAXEFiq",
  "key39": "KPpFXUZjdkA465vKnWLCSPqbhjPZdMzufyneEWNLETB3u7dcjoRow8hxmGsnJ92KZnPCGxAYuu8qhFL41Ea6TG9",
  "key40": "5X2jjp1z3piUJLGkLsnDihV8Br58i9SmADuKS8vVdwcgJ7W9y7qsz7DGqCLATxdct5UJYa22u42xr6GbVphZTGEx",
  "key41": "3VjYhwEyr8oNrV7ayMzeqFCHk4ZriMgm1k2ovaLs7C9DXPGMgeLFZWwXfYfc7VsFr1bFbfJ322vWYmLs8ovBWfSt",
  "key42": "4YAfPGU6WLvx85vs3Cj84YB8vaesV2D3ysVmXaqknkY4rSXT8tKT4e8QNjvFdt15DCM2KUJRbTfViZtE68SWtCYg",
  "key43": "37HtYv6PL7ctpNAffgKnEHjBRQhocyhcynwvBYoqYsqiyBXWZdjzaw4CcY77FBcfSMkYFjHecVLj7zky2nWhRBQy",
  "key44": "55kPYzBNxzBryHURPgqXAaeRG23tGSzGMZytchHPreGGrqgeQFphsSR1yaKEQsq653SqtFgGfvenUTMYjJAy4x5B",
  "key45": "3rxoY44F5SBJkypokDfiWsxCyx35j7w9cQvm3VPWcPPpk9s9mpoSv1e2wcSao9gmFSE6SMCWWJtBhgA2xj8CznuB",
  "key46": "p8UJSFM73XGyACt3sejyB6HWthusXifQ2vBQvgXqePXf5Dj1Hs5jm4Jd8qQR33B47WoMJg6XKwbrgNWUAxbvdUd",
  "key47": "DobGCBU5dBjVs5sPQZT7nTJEixhPosffrMNUBBNNnbrUFHqMdfBQKnkN5UfVYyvNXH82htYPUMLGztCNWmTSBgd"
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
