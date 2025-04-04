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
    "5h9BqZXGxKuSmGG1pTfNepjstwvxj6g29NPfe4PPPCexHFTJvH4yE3PctvgrjpddSLwzbxyaHj2DG6NL9SKmtZGr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SXEBzXcsvdi8jkZrjwaWrJjd6YG3xWQjF2DcykoEkz7JMitEbJLDGX6LC5wNHDve9SdpFHHD6BMRX4MYJyZbNEF",
  "key1": "3CoFbW9g1QYDwtmQrNxJCbQf3aTUqj3YGY9jjeSo7kgfFSHVPzsEsCS9rKjx4JqhxKPjcgrTnDDpSQBZF88Uv4KV",
  "key2": "2CRhmSsTvGQYAhTw1ML9MBH6KHEyRFNwaS9GfeDaXq6K9FDeCUj4ggrKcihpCxNkWTajeGuZi37kna2QKH7A5aYz",
  "key3": "5CieCxWy6E2r8TgQWeusyAeQrWNL8dCZ4xT54SZYaYDpzKU7DisjiAy5AEqTCM39wDMmSMiEpDxW71Akw6bubEQT",
  "key4": "2JjyvZXhAnFaZTZP6TzLLRyjzLGhaCxHcbG1XbB1Yf6mRhsK8kvzJt8FTzW2kGyMaDprrrLmT78BFxrSLcwr14cD",
  "key5": "5kesdMWhysCnzgjqPwxJay1nhGG7pLfmxKMQAFxu981hZPLCVDMQzEruMJT4NiaUpGNYaTT71PEWxmQHsmcqqA62",
  "key6": "BxS5d8t118aL6cHPWRAxEmUMHfL63D9xn5XdiVYS362pjp3sNDbAh57U2p158kwHYEpZ4SkPANJhwFh7CoGfStq",
  "key7": "5kEdaf69mL4MDzzJuBmfu92x3D9ikyxAy6XaFLBHD9sCotVRyQbTjDDGPBqSQqRgT3Y49qiQE3hPH4xaMa3Rcvd6",
  "key8": "eh2wsHKzwPp55XBoHSv9emU6aAjd1mpe96oR63wFnQeTsgeFG5UwYLT7aWWr272qJHa7qCqMHxv8TpsxdGBgDkK",
  "key9": "wDwNCbpvRZEhVrpNcRZqBC2R3PmUf4RPKxdTZgwToaufL2AgrU2GDDbcH3XkUrZX3sdTh4qdxwt1qJbi4xwesnD",
  "key10": "123p2r6TrQR9XZsjpg3dNUs2zbUn1x68YxR69kikvi622YTSZjegvccXKUGKHtGSmHoihHnSb4Y3CuxBDQbHUKBc",
  "key11": "4FVL6q6zxpEEKnyZkGFAv2iT4FcJFkQ42JW3TvVxCtxQne8doHf6in4cCTAqBZq4TpbsPY9ZPKj2ZuvR4P5d8L1E",
  "key12": "L94Q5BqqcJnAUQzkLBgDFNu4uUyyqswcdTw4zr9qoEDYMu9ZErFZDyafRKHshVvgBJq4TJujdCAPvqBZfimj6t3",
  "key13": "59ASV1sSoAWSE4tLUeAAppDyMn5Paa35my2d6rmWkHs7KBGXDcVCfTeETzqoMopm4DoNXoD2o7ucbXoAW8uUJb72",
  "key14": "5MbDd7w4ppy2wZWys7bYxjaiXbN5Ugt5KhtpUjfGno43ukCoU3Yv2ZwMSoWsgAwj92RdifLKFJhtcECcj65FU6SV",
  "key15": "36pTFTJieKBU49QKeUSWXFHgdJDG8SDo54gApZ8iPHH93omDoN9jhEk8QRhZCw87btj84opTW4eRRAYqqCkNddMd",
  "key16": "48jkgJMDed9RrZahYBX3ZrFfUhZG1mqFybmPPCS5RWYUbibysLUqLmd3SR7G4wsX9Dh3X8YgyERudrJAYZnZ4FHC",
  "key17": "3dfyXS822giGzyP2qzxV5k4KXhhoX8FK2NqCLnpEHEYky4pZHFb8eJ5icp72S9S7GDvi9VBtqPy4Lo2DFUamMF7o",
  "key18": "3mx5wUnsb89XK6Eb5NZt2LFzDzqLBon3YBzb4Q5wRNkXKD8zy3R6x2g6Ag67ZLLYJ7ACgtrhKKSJTcDM9krBdZFv",
  "key19": "mpmrJubGhUR2NNTACjgfsXFf5zgcCGkJD4wTmMVDXeyJy8uacVHf16tRq9wzFNeUUmjDx4zYwouNrZvpZm9Wazx",
  "key20": "RStWvA1rY8kDzE7g8DnmCBkEoGJRX6uuE9btUJFLMpr24gBqCRMpx3mC8A5LiELh6d8MikCT5rQ8BNA8JLJAtgS",
  "key21": "sPhA9fjQgH8xEBAYM7JCcqPUvM538XySBWXB5btJZYUd1RRgp1vXNYiv1RUDeMLixEMcN6w8RHzmvhAzXgrxeGM",
  "key22": "4SV5aLrcMfXTFN56QX3xBmbtakn6chYfYNb7kdAxcLqwrShtThUdPu93qv7y9j28euGDw4yMiHazcW7YWxbRnwse",
  "key23": "38gnDc7mMNrkjfcrVvr93k5b2cAVGLd6CUCi6p799B9By3QbhqHpjHmrgaujaooLoJdhy5ZUP2W5g7NgAfxf1JMs",
  "key24": "3nw24M9mvpmxmKrtCjs4iVTjBcmfDRASmKuuECZA7duA8ESLgnexJsB8McWxG3U2CEazQrUkUWA86Fm8z9cUQGBD",
  "key25": "jNKk5wLRE5FJjo3v14Sn4VAdyD2KDp2zMFBqTrYcht26o9WDFm58UfdCkbNhF4d3QaXVp67aExofySAcaWLxYLk"
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
