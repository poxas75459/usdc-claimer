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
    "5xNH4nyyKQ6ucASjRE81fgz3M92SigsBsaR14sJEAjjLT8R8d1YFcCw6wo4Fm6x2cp2WSg3uDArnQTBCKVyyU2vK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a6V7TbEXNDVW4FzSfk8a4FGSMb251aMaAHYxy32MLSqR4uhsCTw949BCyTxUY6CZAm8stiAUhFzvSqQwcPxBsMq",
  "key1": "3qPRMaUG9V2vXBVf46smFzRW98XcK8TcRdXYNj8EUJHQg2CsxNsAt35oYuf3cgXLNMWaSuyawifgrbVoD6KQiKxi",
  "key2": "3WzuwmjWniJKtdnksUR7YuENs7gSqfCAPw2EzUide2rVyryW3ra419tkaNLkK9ERho3avqxFWeF7ur25BnULjWqj",
  "key3": "U1pn2nqt1Dr2J4WNmTvTnfPEsEZYjgpRqAspYnz1e1b7MwzqtJd1XkozsNX7RiZNZrMFGFF98igtPCC2ScAXCRg",
  "key4": "4Kr4wnMc3VgpCyBBbmZ3CUxPTw6SZJW6Qzpat21VFF3hgyAmrTHgeNQukEdJqVNtQAwkpqdYieHmyoW1WaVgCvMe",
  "key5": "2hYVzUvHFqf5nogzXHEXqPJguedXTAhUoqCLN48WYs4Fe4SR5ynTkoRsC5jcRJesimWtFk9yKnRGXnsXuzJ3t2W",
  "key6": "4Gj2auR4faxwL1np3FabMPVHqrB8MfkHKCvCJuRWqhBgz5acwP9hBnhS224GmEjorsM2bDzbLwuhF6f57oPWk5yW",
  "key7": "241vYoWQMYiLQpgrJrafnNNYZ1CUBnDEQBJvBfcgxxGgBdxyyHBAo8GNhRkxSiAtNiwcYzRxtHWBYqZLeYypVs9x",
  "key8": "5Cm6YPCWUFUK1VqgbndLRbiEWPt6MKGHXrENS778WKGWWtdMwguMvMqe1dsp3jHncFPZnRoZYvPsKFioczUde1Gc",
  "key9": "4xtzi6tn16F5595RUuh3wWvFWQYHoDgFmkYfTH3rVnQaDbxUomdEe6Rv4SBts9gHpuZkYzB7UhGHvBrJWookuUuu",
  "key10": "4aW9sudqxHEXVRnMXhCW4pmfjHuyBGfWZuUDAQcRG1kxrLgHx9qjzfXZA4JEDM3yuGtyU3jV6FH2b1yX4Vz21A1m",
  "key11": "264yCfNKSseSbRtLvbmLLQymbKuiB39f32vUGKjMuevy12kpZZFQGKAYmJZJY1a1FTdLxzuKr9iJFvXXUtzVZTpX",
  "key12": "3b2J83HK4rdFiS5iC1hQo4RBEPYuuqwDqG9jB5qUVW7jAhKXTaT7jZfCSNnxuhUH2beyevnogQNoCMnw2PdXcFXt",
  "key13": "4QPi8sgfLdipJkXW3UYKYWXZ3XxpAXfozwWXFcenoZAbLSKwbU9ieKFgccJyyQruXgxPJRUuvo92mMqQnZ84HcZg",
  "key14": "PT5WZ2pd3vz3vGn29MMeiuKZK7krzxViLWFv5LTjCbdfgBNscTehvjLhhPY1bUQ9gpmVtACnPjxRTiPcBjxMpAZ",
  "key15": "4wMtLi9ePEgEMhr83WfV51ZZwTUQA5qTvzeE2p1NvzoYgfWwUbdUYu1xrHygudqAcVo4vXAP7nzWUfpewbmxcxMy",
  "key16": "24NotKYtZ9NjUnsYRx36pAhnY46pxXNGKRMt5o1sAvv5Fq1yBXeYubfPFtTQTKz8bvtEE85LALo7MfHXEAPGxjwW",
  "key17": "22kTYEFEysGn1A3ardD5kNWQGABn7zbybWXeZTmHuBTceSHqibi6wuiPAGvcyBcr8Fu4j9DBzVRjEU76HaE3eaBH",
  "key18": "5ofFetM4HEs4rEsqHB4p1YGgwkHeWZNK7U8ewJd74vpLZvoH71GyGcnjcQxUpdxq8KcruuQkD2FE6fvVaGydvEoL",
  "key19": "249wQB4MKuc1ZykDt79xpDZa3JifDxps9pSTnD2D3coWAfVv8CVRj2gGCSsuKMMft1gHEbnMH8ghLyXM3AcyQvqG",
  "key20": "4dRWt1Y14P1iK6iFkgqpKHJJGztvXPDyDwySBFdqNfBUPYGLKd5tByk6oPRBh8QuvYjoERRe43gmZbh7Ak5jsMwM",
  "key21": "2H6rtNCer3gGJFSAsL3DTZ2pHNp9LeM9GUV9E97331wiwta1mG9nG9UWapMPDRGqmxcDMDtSCvmYJQUZu8xJAyHV",
  "key22": "3zyri3M3VZHwnpqG8EemSK4jc5kggirqkKgyzs3FYknqu7mHPzQ3xQHVRDeAP7bA2AtAuhRJZJcrtas2CiH9rztq",
  "key23": "25AdiUWb496AeqoMZqhDt7zpgMJRBfB4xiqkLPb5vGyNQxZuPy8Her1P4NrspabTLG3wxFdWzqB2H1U5XZjZdpjr",
  "key24": "4MYxAutPKc59B6KdatbbYjQtsFQtxcmBRUs2C1DScWmrUbVf2zTW65vK6RNKpF5spB46SqAH9GWoe53Z1vbvDEWU",
  "key25": "4BmYoCpedJKGq5SCZMUcCWL9bm1GEdMoqB7oZm7XtVCUsHjynqCFAWvKmFRCE5bjikbLBaXqjUW1Up9sAQPDx7fa",
  "key26": "4ynCZNe1RsSgTQ8Z1j5DycpyRhBBinpYg4pLt5rGN9aPFH85eRyz8WEr9iWFPHyv1nGop3pAhiWxi3pNKDrocFR1",
  "key27": "5k1fsUb28k13CQiJjqhJkubA9LGgJn255MzWj58wm7Z2Rv9GAtGJ3xnpiU79NQFcjTSnJPDML9NMnsFZdXdjh3L2",
  "key28": "2uqsAGo4mKudey51NDjdwYsVkcz4niY2V6w3hRCZY86SCqzs7dWQTAxQTw8QXFsPmTWavCoZxJ4hFPwiHxLjRWD",
  "key29": "54nvxYMJ3PNyxfbrxw9trbS2khwseB6tz7biYSL8DudFrQnuzBtmaSUkhYLvaG153N2fLuMRJjSZccyvKNY3YrP5",
  "key30": "4a2FqSEcdZ6cGFEbfAEawedXRSTjvc5AnioEE7a82XpcnTMZHkQkQMCVxBgrox2eej8M5vKphAsF5YFqoB3vNRiA",
  "key31": "54f6o9oYEtNos8AqYuTUxp3eZzkdCaHiQcfivuZtiYPSEa64bGXoo1zWtYKSHkC8pfCMe42Ahpa1Aez3WNBz1jC6"
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
