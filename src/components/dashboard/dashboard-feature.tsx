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
    "eSzi8xrrN7rXYBj8DyU5JgoWxY2v3PsCoZPAGCaZiNDMAZNpoKSAEXFtdkaYeL1nzPZAuA3K7u4UtBfkvdiqLEe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nx1vvZxHRPJtnhqpKz9v3p27tu2G25cWx8ExzGeywxkWuLHn7aUoC6f1AK7gPd58jU9yceymyzwTJjN2wHcVjuL",
  "key1": "CrmzE4JxSBHY9RkBh39sACwJQDvqkVakVHwcjXsq8qMeKARCCnMZ2mSePcJmBiR7D6Bt5b2oEnfPqrMN4ko1zj4",
  "key2": "5xuJTkEyCDW37cF4bBwihwyKuvPLvZpBx3A3CLLhX7DwWf11s8ChM2tA3YxWfmMkqPsfVPkNXF5hkTmiYFHSpJwx",
  "key3": "5oEDmjjXDiKhh5WFp5Gxgr4VKpf8svsUzQi5AsQVXxsfsTw9MwSwgbdBs7pSqMVBLkrDn4HgC3PuAyBpHgmKNPWB",
  "key4": "5UFHNG4Xdik2FmGFzoeWBmnoejN6YXWHwk3KkbMFr4HxUQuYneB54N5fQgBQEEinhqTqpN32AA6ftZeYCBHYGrt3",
  "key5": "3MrzATEjM2hfh6qoJC7xjztgN75XnbTqS1Fuci6U1rLx5fMP9KdABr7CXP2BLDAABqY5tPAKwF7Soh3NpS8sLCoj",
  "key6": "2yCpBsoBEE1az671V8UNqffrCffeTAx9myEVkQzW5Toy2Ra4ZXkMfmUWBhVC7VgECJRHfKnw7FJ5zKAgEiUxqdZM",
  "key7": "LzebsEVYcvNyVoMa57Hy93KKHMMv8yMpS9EP96oFmit6CnUE9AwVaZ7LQoiCW2EJEzEAcFMQHDx1DF1odWZDA6Z",
  "key8": "3EQPSi7ZLNkRFC7t89Ywf8eQrUPzkXW4jMnnFFeZzXLDkrt2ry7YEB1MXB9mMrFFd3N2fo1YBFA4HAJi34NYqFME",
  "key9": "btw7QD3jR2DDfsREYe3TT3qFc8SDwyZTM1YfDzAHruGbDoQF6Q8J1v9JvLaBp2CtCzSStVQ52TCFjaG4n6JbpC8",
  "key10": "A3hub3C2qbv5RrceNRZvyeHCoSbMj9xcHmb1m4ius8CinqfAtjahuu1xUVMFGXN229725Xam25YqMjmFqs9ZACW",
  "key11": "4YbQkarNsEhcPBEXJ4iq8wbh1C1Vrp6GFDaeCVZCiA2eZzcGq9B9vyFK11WC9ZdeQnF1qGLuGZL6vkRmYFvitfb3",
  "key12": "3FuQo7X1oS8ygZqYdQHcBnM9n58Hx9iWirpPTZzXy8f8pXqdAhNYq2obZgb9iMm59eDGajXi4RuxgiCbG63p9RJo",
  "key13": "9hhgzJkDx5ZiLvs95ikGGZ8LRutfAoFNsLC4F2LH2B2DGyPSRJNvg6kHcxZY74sMqXNAzdarARnpKJRMGQRHp23",
  "key14": "tPXraU9nBhi3aXvf1qz1bBa55ZZHR5khsVdZmfQnSguqcQGaBXrCuhgLm6MMxPB6GEP8gpcWrzGbg11nAakimoG",
  "key15": "mabVywnQ6fxrknSG2wkJPq2S3FDauSeU7NQ5pLJ4buRJFPvDkhLrrfNPUvNfsZwRaboV9iK3YR75rx7ZSERJ8QK",
  "key16": "2axy9L6Y6hYcegk5fykMxqcJ97gB6tW8JpqqEGUYdGLH4DSZhvNjWzsq9zcJHmUA6fvhZBH4Ctey8irtQG4bC59E",
  "key17": "31XfnT9YCyCPnx5cKQAm3A7r59wxxo6XTspoDAz6GptbhmqrdLVFvLM6yArxh23qAr2oQkPuN2h19kDcGgVmRzhZ",
  "key18": "3gbGXqhxHgmib9gK5gC4WdmUcsuhnxV7abBAV1cirBDQ3Vq35fU1ZanKpkvRQbcszp47c2zpaJEPAdxd13QPxabM",
  "key19": "jaS6vb6GFdXXaJGNCXmvhvpgSkwRMVMAbCj1HH5ibj7rrWLRd2ffLjePVRSx1e1jjy3XEm4j5YP4vW72shp9PXT",
  "key20": "36NpizN3DUemetHrweEzkgXG7KaQnZdygAM7ERc5w1TMyEWy4fTDTCPrLUAB8bmCw8K6oJmBNG4gsnTEXsBdJ4hY",
  "key21": "5geRHmsYFAbC7jTCzJ62PYDkNQFvvyPVFyUwdBgHpo6snCdrdBvGRHTU2Ax8ruVd1fTgPEj4ickkV7xKPsUASX5v",
  "key22": "37gGtWYvqNsXj5ps34QBNhkkYU2rKXw2N3MtaBWdupWuYJF8KJRPE9BmKZRjfwtDMRuc2qS8pZo3HyJXnvattFk8",
  "key23": "45zPZkKuG4SaCKPDoxuFYK3hNYRZs55vxxEXcxr6T7zPmJwnueT6MF1PUhSw9i5Vzjf4xd8687G3hyr4WNLZX747",
  "key24": "UkLm4mAxPAWfZ8p55Hiq1Rn9UkH6K7zWZVB7wVp6tSyLQEy2TXyzx8eQMHdka2ERaA5Tgge71J3fY1SnJkb5es9",
  "key25": "nRnkJFtcCCpGpJGA56igykrSh1tyWZCbpHpvTc2dSS7NiowcEkbkvgqKnov5eaF5PoCNcTkzTkEn7MBGgQQhQpu",
  "key26": "3nhGS5JQnGr47LkKby25Ci8diKSLC859ZZrBSmh3TypWGbqBrjccJeG7xUVpRSphutALEbz4DirxSCC41bcXYNGW",
  "key27": "TenAevYA7ZLWKV3HdXk3NP4kzGoZ9yHatjpRuwJ7Kv9MbCLgy2T9nxKTRc1VRJ4yFgDbyvVypBMn1gWJabt8hTF",
  "key28": "3gVFLBL1Uyt3Kx8w8bBGupJ3osE6QC1M4S61ueqS3Qh9Tqbmv8GNXj9pWK93z6PNBRo9qLDefFTmZ9NdoEo2yv1p",
  "key29": "26JbJWXzt6bqguSP21e83rGmTSNxo2xJNq4grqtHUa8mwAQ8CtGDotKfq12KGAYRHxqBN4DHBmDRbQHmMiE4CKzn",
  "key30": "2UT6ohwSZbUWL4CLfdKoGw3D2QmhKTgdHTZgUFijGHo7CubemwJSRMxNAvFeuQ52r5XNU5o9CMbyL1LdTEXRdkbp",
  "key31": "98E6qeX23oo32Rc82t4CBNwR9558cY9ZM3XymriBgaTgqgU1d7mT4YRzbJqcRwWKtoywQvTS2BVwED7wehcTbBE",
  "key32": "DdFJcsyjEz3cVQSaU15SeUB8KVWV1LE8zDHbwBjtXiBuQBcyaAPMNfihC6ZH4NrXyVjGkjzJrssciRtTMSFLcGq",
  "key33": "2vsnj3Exsw4UT9pfmL1GRubvci7JRMp3taQwRrKPG4Pc5Sg1WjRejx9gwFcg4SdTnJAEWZShTGYQRBHS2pEz9k7r",
  "key34": "3Xideyvdj38RhdDFMiohqfTKgJPbhT1SGTKWJKTP6ZpJUVGi1wpkuSJBE1ftCSmCQLMY35fgkjxqCHPghg1JXh2X",
  "key35": "5ELcpNnyPbYwXeAnVR1DDqL5pJdxCAN3oYtMARkMJZRW9DHL3c1pXsDq2D6dujCPJu4LyMKDMLFVJsQNtgLuSEr8"
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
