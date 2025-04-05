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
    "3bR8wKizPv7GuNS9XUSt2J2o69rYjnaoyHPt4JPzNAU8U2aJtfbYEpY6ZRG4zfe33GM8k2s7nuw2wsksxF5K35ob"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qqhM6RrvRfwkQpbGggvmQ5UokuUXbvRTT2yHzAYLDh6jaandyxtenLCNquwR6rtbEWK9ivek6TiZXgWNAJYFKun",
  "key1": "2szkz4yBoEwvvWhAv7pdKsfJEHzyQzM5Lctgub533eqQmEAHvQd16iRpYSbU1Ej9Do9KowCwBzny48kVSo5kxbNm",
  "key2": "3ngfmRQmJo8KQhzGnA7cBoQPh93w8ZfHKe3fgiuZpvqXPUgMhVy2SaF3Fy4jyXJtirBRFxL45sN2YyEovXhiJn6c",
  "key3": "sm1MuBhjsfir8D6ZCveUBFRDXC3fFcef4JEQaASJiZUvs7gtvruiFk3kbh9MuHmUp2kLux2MSjXcvJa3pDVxA2c",
  "key4": "67LNsf1AqGc9wkcmMg81a73TdW2hzsuV7SRW5MMvzgLwC35d6ZRaRHZZJU7FvQ8W4gQdXZpFUjddwgreEgbrtvcs",
  "key5": "2oDvydfAWtLR6AytmmWShQXTPfGx8NdoXdDt9JhJ5ctibipTcDXsZKjANaeiohUgEREe41KGnG6EyLxqvqcZj8Zd",
  "key6": "2g2gKedVq39rXxdi32cDUnxP8njdkezdzz1tpWpaQTm5nfRixpndwQ1Mbi86FUG4D4gzSLtivWaMWZ7odm9KmVQC",
  "key7": "5AuSQDZt1Jve3V4tibAjRkWbPdP32DbVGcQ5Ls3YfLrn69tQAi9brtzySD7ddhwtCVbVBrttzgpVE8fU8mer1Wh3",
  "key8": "dR89NBUiEScp4cR6k7dkXwKggHxerxA99qFKxJEp4etsdxe4iM3AaxZ6g1LNh9hgM5BMUGccGePueYAYaKyMVSv",
  "key9": "2T7afWqwPjzbzMJgmTfrYMv3w2AAw5WYXnN3JcsEiYozJpwUpkDeWxE1Jevi6jQHuUo1MWdtMcAsoXn6KMJwq8R3",
  "key10": "5wdqzfYj9Y9Bfz28aaJ7TBNE1QycH7UbQhAvyRMkF5APnWvqAuykFfDAxH4Jzz5CqujwPffWUYruL5fMcscr31HY",
  "key11": "31sVfyHseeFathnKFPvfXVPeX12YvN7sKPiccyyCFrLnVBKNFSYTf3iMrCUeQRh2xJjmigHa57d6euaBT93GLFWG",
  "key12": "5gdEx2BzQfAqLNqTuxFq3UH4JVcSsdx8dxKw7G6UMPPbuJrYM1pyWFRPRYMxhgsAz3AaJ2fZoPWKa6qCnvMVjgWE",
  "key13": "4jGjdwjdgsMWtDAoSaJB1ohByaJNJtef9LForbF4njd2Me3WjjBC3r9dauZ3MCKkVakZwoxyeSGjpGN5QYEHVs2b",
  "key14": "5P738ayv7jfnbkExxLhgKn57pH4Lru9aPpCtZ4DrjeD7ML9JFZApuLFurqA5usQybbwz8PQd3hCxtpWDnDPYtxSa",
  "key15": "d6d7MNnwwD4m9Px7AZ7PYCRhW7kaqrvZCfAs2zGXtfCZ59XLsqsM5w6RUzb8uyb3cm2WpyfR7ncqXVey93ay9bp",
  "key16": "4CAxDq9bB8UGx98Vy4qV3tc5Nh8RxmyfXGD3YFsNHEoug1jQucgdLJPfWE7buJzfeDMwcE8je2A2P4SuhZ5rsqRm",
  "key17": "eUTtSSCPXdLio1sd58HsfYzWZHBaS3gycvZzrd4hBtMH8y81S1KgeYtYi5RFxEAUHW1xftcjUo7oLhRGxebsHBb",
  "key18": "pu2Rsd5wSWaodrqkbcS5h47shUd371Lmbdjti3mfiftvCHYG4V6EuWZGxUFbyEzgMrgoRgf38s3mKwLbMAiJtzS",
  "key19": "3qCGZRwqNmYKG5XxZ3aKN3UbYA7jqdQ6G8N7yfFSog6YfemvqDj5AFC9waW47WhC3FiY9mDU7uRa9RgA4ZNXssVg",
  "key20": "AEy6wBPQTnco2qLXiAzGnnvCostEeRpJQ1Y9iBuxMxP6qHMUmKGWJrzrGcC72fHLx2XCyNN82jp5o7kcUvyb3bP",
  "key21": "3fjXCc2YGSSUXPWBH66jVtkTQnUTGY4gv7zU9FocbspC6BMCMMmY3wYLdwB8wE7Wqz8CvBUxaNga4RG45MTwXHpL",
  "key22": "3ta3qz5tCwF34ESszUyg3UoiFMhrRqokP2VbPqxk5GAnGr4Sk6d3RFkavz1XavaGktdmrCTJxJTCFEbsfcPtHjPW",
  "key23": "2DVN9hH4Zsag4B9ooPGpvWFvpfuQg8Ra5zHZxdWAhMb9ycPw3cuSNpyxSykqq6D3N8wyCJMeZFnhyoQDLKACZyBP",
  "key24": "4eMkBU99repBVBMZnEi1muwndwAfUetaNrsWqYGcPN3TBmbgy5VuwBHHix2r2Y6Wq8rKz2JaxVV4XG951K86yAmZ",
  "key25": "3FTrJkQawpDm7SVbQiHPSW3a2BC3kyskZoQXm7h3cWLhhsmyeCXWch3gU1Mnk4pL4ByPm5gGZkEoAFPDWp2ivyGM",
  "key26": "4MQeq8wQYkNfJgcHTKqgHbbwy2AtVa8H6fdGJTyFN4cytBGCvajJjK6rX3u84t7bCkzcRLPB99EmRRcJRqnxZLpc",
  "key27": "2DQ6PCtP4tZKCfjbHf7MoqHumTss37QzDwsidk6ArKWniHNzXX7iLyBhJXUeYCwUdtVwrGWSqXMmfngXwDb9CcNN",
  "key28": "jWJptzoqqPkavwEyTkj44V16LazBMjQkiCGd9AYZu2DqicuTcWw9tJw3kju98UcBzczYTD6X9v8Y64tmBNrPg1e",
  "key29": "bt48XSkH9Rxg6dTo449fT3yELRvfW2QxTK7ZjuwiKJQrkfXA4fLDuquuEvNdXoDFa1tndrQBz75nLyN49wdGTE3",
  "key30": "5qhq2F2JWktFi5fGAWdewntKR7J2B7gBJRD4j6JF6B1v3ReT5A992G8xLtTpbzXz1KF7xiZqS3kaVE5DhA9jtPtr",
  "key31": "5V6Q44UzZFxmSwFQmT4mr2EMdQkNgDGquP9vPoU6Z7cFtses5LpJ6o1xLsdDXntPSoG6qW51qALax43eM1vYtZeD",
  "key32": "5u4XiHrbDCBCeTBbtQNiNTBh8nju6oG2ANfdWRRBdKqxKRdhbk2zzQWCknT4TQmtnjnGPenMwBCcucThgriturpr",
  "key33": "3McFsGvPZ4aMH6n3J2GXJrDjWs1o54X2dVNB4F6dLCg31BggzEgHpNZVjfKapPwJkkv7CLau6aqeAfgj19AgxCUM",
  "key34": "4QaguMNBLCt1Hzwm4Y53hnWecmFQLFe5WkhhcWsr5stYM6JD2QLadmcvYBk7aGX4zvrVBAmTE3DyGcX5ziqLiJtg",
  "key35": "xSqMhDAP377qbQCE5dFNiHV97DvJd12xpAhCPWiLYVe4zJWARMGg5x3QSdHso3MHdjV76q3zgyJZda2VYZP9RuK",
  "key36": "5Uuvy794LWRTTByzS4FggMYEtUVS9QSCymytao8dBRCRMYHNqQtQm8WKtoGPVjLceKUMXtLrngTC7DYyu4UnEotn",
  "key37": "3nv8EGLRzuAkgWEUEm1fbe4Tb2DBUSageB8WAAFWswR2D7HsWm29YaMhK4dbnmpbAPxKqyMR5EkVTTcswj7ELPbv",
  "key38": "5jFQHtbaU2A99Z2Toismnn8jwv9Vo8H3XZxhqzdPdkSNBiXHjQgsf2mCWHYLLMGf1EN6TyejPEQrh2s6GLT8uEER",
  "key39": "246JA13oUevUCaqvhXUoWrerkLVgXVZx8uLfXwwCsVWf9EXBBiDpH47RP9sF3LF683ypemFMd25dqHQYYrk46dBo",
  "key40": "2d6DnifasjLkaKjij334iMw34ZwwmNCCavm2f25BxGMqgwWEXQdNTxd43RKA8JixvaxkzYFvVKFpSJcTMkQ49Qxw",
  "key41": "2gMqXoo6oxj9pmV9L8X2JkVrdC5fAiwf1qv4szQ3BFzGLpFV4WxNh3jQBgpze4cKiKB7KwgvKhdiH9a1dPeXj2tF",
  "key42": "31QVxQwzNmqJQ2F4PhopKTCaTv53svL1ZftqxoFoP5cDZThRFnS74jZpBMubLHisi3im4jJPx3eejmhyUrLm3Eu2",
  "key43": "5DJfnCVo1Pz8nHfmrjZFJM1Lhd9QbR6etNbq52xnsmccseJQ21cPXXHP5nX7iXhXZ61khhVEhgHxfhti6chcWmsS",
  "key44": "8FDAuVEn7Ya2adAFCtkHADfwE4saQcQrHtnomjPCiGB2cRRhTJJNX1f3zRh3aAj6MAJHn54YnjTAjV5VTyzRPsU",
  "key45": "5mkT8nsPwXdrWwwt6bWEt8eaJECsF1xESW64epxAVyWcxb9Hm3tif2WaeY69EzK3TZDorZS9Jq92V7YphkDi2pDz",
  "key46": "4MRvpMugBPdx9iAQqA1ZAkntvXM6LA8McHTvRFuxrgU9s9eAYm6yWNKNLqDwVnAgtva5h5mGPRYNu7RcgArh6CYa",
  "key47": "4RHd1hcJXLfPLk58D46L1M9zZuvc9EeCyDFFMn2dHuGt2AGif82aqVtwLwhWo7KukJ3NKS8TXDz1Avpv3n8fgmh",
  "key48": "4x1jrgrTFnAAxfaK5P4YNwzoKmhFHrzMcWASke9WiJbwzcJVcYaqQiRwDJBBfjUvAGpGCPzLLyFNKPXaAJFqzjKm"
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
