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
    "3xszHDFh3GVknHwceEtCysQz4DsgwcD9Et73BxXap4o3Jt2RF1yPqjb5osWxEcR9356PSiS2MCjXk98E1Q5ctT6c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R18h7ZHa1KQ3rYaPUJuVcCET8kVSgvhvrx3NiBFQ7F6BDah1qeBg17KxPWFr6joKEQSqtfT3FKT2Quf4vkDSs51",
  "key1": "3C9ctkUbwgqX8ebttXXJYb3EDCH5HGCrWMaxMZnC6U5H4EU4LHroZSVFtfP7yy3gT7e7JGseXrrQHq57ipm72X6R",
  "key2": "26fRUQ5hjxkFHhLhXxRhnTc392K1mh9gxzKBvGGGKef432wiehfk1mmtDJA2MNjCfQ1ug7FuKVUhHTQDtiv5uqCc",
  "key3": "2YUBFNYFWcUatoXpHqfGwDq2MHekT1F7vapmzYq8qCs8iq9AhH14fLANBJm3n4y3nTus2LLwFT9K6LWenqT7TxaL",
  "key4": "5TASuyUBLs7B6MVL1G3Noa6HhiaqqAPnA74d3jJzDE95vxz6dnU53SzkHHrf2VkYJxV1jc2H7vjWWQtNW26TGWpj",
  "key5": "FjKq85jPANr8QG8MhThSCxpqtPjM1aNysRfaawEnvMnfQTNveXRrn3skbS8zWhT8GpKq6FkVPp3RMZZF83vwKfi",
  "key6": "3tNHk4bwJGQeqvADrRPWfSYGpXvZ2dfMa9rYTVheVVvk7NxBYj3qp8rnFuR2eXvjeXPJ9Za7VgCnZ5AfDaqEZZx",
  "key7": "5aWQx2jzt6eDMk9MDmfKuPL4YGBXsrRHb6Ykz9CAFEUJcXUkxME8BMk9ZtHs6jqwNn6H78fvF7UbzMSD3GJ7Mu1H",
  "key8": "47RBKyDaY1NPXTks7MRkTSzR7a8hv9XjZTs87Qn9sd44hvg1ZUSGudGQCrVCTH9iPhZJeQnrdRhyway98QpfCtV1",
  "key9": "62hzkZquk1ocwqpRGC7JYSs6PouaifBjZ8rAB7XCS1Hu8ZfPM5hQVR2ti6uuGchEXfHUaDb6kpP6Necmgn1V1qAd",
  "key10": "33KY7QxmFu6ut8cS5PCvuY7GYNaL9NXGgqquGwqDk7bzvPuSajGUcBbGEDBs9yCd63kRuhYxa9mTEjh9QKnA7fCb",
  "key11": "667uSRMy5t5tcD7M2ZkzRmNUPjgTzDQHUSPidQL3BLKY76p29ZU77gJgeTLebuyfTQyts5GnhTAzPuNo5Gpuu18U",
  "key12": "3qWTPvx3yggoGY5NmtgH5BMa6FLLyVNSonhnButLeGHB9cqKGVoauRqPNyvxCWhft75hBXkWjEWiqqF8bPrrv4UE",
  "key13": "5WBhFWP7pFjjvZErtfFwEN7d6pdA7xBqMD3RkMwpiUQ9xNDCdBXKi3dBFigmoxYRF249UnC2eQ9UpDU6sXCuoUVf",
  "key14": "5jMiXSA8GWW8n7kdGzBcJBQv2bQKvHi1a2Xm8hPfP5PUrrjhGtMVDfF7EvcbRszUZVBxywaCEp6X72sNJqiDZqYa",
  "key15": "2vYRD5Fdk9EX31LgVteV9dBinqrk5Y8CJSjC2C9mXB57UN9rbtUPepRjZJERM9jSt8ByD1TeKr74LupRFRq5EfSc",
  "key16": "3ki66Akpqv5x1f3aR9DBKhkzRBrevdwNxKUXXgyYnqy6kKVpXCpohLhMaw9UgnSkqGm4CnBkjDVdCbiSa5oQDRWN",
  "key17": "4mBasYFkwWKxq8QdSwTaYyxcgfNcxRrLkqUL2jcKbiN4FsHAE2k7cNayqvMXuydWfwr8S8xGLFYidTZVVFPHaKQ8",
  "key18": "5gDq5zshU47fH5EpJtEDvGSXSQ8o2FiYmnP6XM26C5RePdu3iwa7MQ5AT2xwXFppeWZzZZxXZ2uJMPFVRMNBrsVM",
  "key19": "251a2LtBvC76wC3rXPfA2qPQMEe2nZ2Qb525LAAmFAZ5MtXbsbEzR1Ccdis5nr9CdCt9q36wwZHwXhxaDDh7hxGo",
  "key20": "2GBRttNwegUb6QqLifd6e1P3Bfm19kVW76TPKB5U6J5NvNT8EZhgqx2ZVS9vGGQmwNusKBMCapgHGMP4cMKRhvzR",
  "key21": "2RjyjgCHnWV55s5odxWsgccdmwAcg3hAGbANizPDPiVbguLcJ4Q6qKwvsgAtTBFBVnv5MCNxbrWkx8MHWNuPhTjG",
  "key22": "664Y5vhB3i6Em57yFmktfWCqruwZ62FBykXkXQUrhMBHzmfBQMHNdeKvmqYSJvpmdwboL3tfbYksLc24xzqqQRb4",
  "key23": "5YJHG2nhqCTjnRPoonbRLrRxgbvYciFSNN7m2HK2HnNwShJXtTcYp4vV7jKfgAitFWQpbarHdTneU6Y1KPBvaJ5Y",
  "key24": "4S36ehjaSw5W3ZRiawzxLq8RsePxAmmukKADwG3U7terTF97N1Xg1t4BCPjYauXFAAd3sx1m3gXedx2D4ge4KZmH",
  "key25": "3Y9Zc3KWxMzzd5HuMqnvUymtNx95dTkXujKkcgsr6kyC6Nmqq9819fndg4WSLTTa6Lj9qu1s6sKXH8jQKPWVQTAh",
  "key26": "4E32jWE4hf8Yd6CboHcNYbxLYya56ZupgLaKr54upUfQ4Rhomq17W9RTd9ACKqWTVoPDsSdwZn18ai8eoyGAGxSg",
  "key27": "4YWUvaYX6Lz4tfSfZcw8vYM14g6tsraPSWhovey3gGrzkkEve2QQHZX4Zvbe15EKgcV1WcKEavUw8fGm36KSsr1A",
  "key28": "5vU578miZwMxP43NXHHtqDwdtXQAd5fPjjWVkXm4KSfSGeJbpMpo28cdrz3ZnKmY9pi7ZXEKYYEJuCUa1cR8VVb7",
  "key29": "4fJU2QRASkpQZem6Mqm4LxY8zcgLeGb1toHLjc6Ki9rsJy9JibZg1C3bc3UngRR6ETQU9QJ3zGMqfwPov3cwKyoz",
  "key30": "4kDga2TgriudKCC7o1oB9kCkhnqVPqx47AKFfqGQKSD3P1q7tcgkbiVPy7xQTt1NKPMZonLsvZS7Rp3Q8kknj7wE",
  "key31": "4FVFPqkjo3pGdeAThdWM5AoPqsNzKezmTzyqcix5y4Pa13XiQADKXvqLMkLpD5CuBntwThLDnvFPaobiidmfjoS7",
  "key32": "UCfQXbD2pK8UBByEtR8UUBX43AeCn4sivRoamQ37hNafSpvknnu3nbpMLLNSBXxsZ3EAWoq96Y4HnYT87NfGeDJ",
  "key33": "2Z1JP8ekS4jo3CUxN8muPZCNsjkSCn2SJdgf8uUGQ4vGvGQ7JGzDZetUrKr4cDwhoLoySHxuvBCR9gTW1cc2toua",
  "key34": "3ky9SmETezYjLAUdki4K68AyomKWhBWHdyXYd7HviGv7wrFxwk26chBRavufKKffMEkBU3SorA8n6F9gjNh6qy7m",
  "key35": "5DN8G94949oziYWhoWWU6ApQVe4QkrKMxyVCwrZoKAv5jSf8VKgB2R7FFLfDSSkhSA1Gp9xLoGx8CVcQrZ9UvZLA",
  "key36": "2hG7kTQG2mzC9zMi9sUUemd9bHR7T2BPYRxiPvyABAbkmQP33rjKYmBTE1CrNAkmc3kwdhoqrUjx6HQJMiDAMGuu",
  "key37": "251e6Uo297GQqdZeUbzZ9nvR2n1gHp4qgRZ1F9P2TwszH6vs9quUujbfX5K8EBXLrFdhqtVbiHV2bxSwvrgACFrc",
  "key38": "QCkks9ifWcbVoUuh7dox2Me2kX2RfoXDg4t9kP86vVNJcMP1d9dnPJNMVKsf2nFvNNCYV5QbaiGpgEERWdbLciW",
  "key39": "3mvVHRdpLCFwN3qriLBhAU2g6Am2yDa5xD61WiXvw1ALTGCBYQ8qWJw38YCdoxFSq43gM7KU2PbmvDBvnMRpKeow",
  "key40": "yVpxKiaDWM391VPckscTb4AMM5bS51dZnxDvFMx5R9zbCyEFaTSPx53NskLs9fn3rvtivwTHzkRnt5U14mzKBZi",
  "key41": "5nxMUKYuNoyJ1q7PwcCgcrvh8EtXnPoPtV21ALWeuPbVbLX4Nrce1EnR1J2oKid4KGswk1yZ9NHGwk1dLfXNLTBY",
  "key42": "5X9SLzpveZMYgMsQSSy8wpw1pzC68UAvGCHY48HrZ9MYK1yBdQ1XWaVsJwM4axBH49Fqs9pff6josfLpk1c4Hjko",
  "key43": "5ksKP9WrhwpdjBaYn9UMYv5S7zdR5CoBRQgNKPaXZem7XgBVz5FGEpfQpAChkb5rDS2odCZymrh8H1Su4NVbu5oJ",
  "key44": "3Q9jt3pRujhApN9v79PvA9CkvVKd9czyRmb7JFrrk3At3btk45AbyGLe3R2VyJQTsfMgQZNLcUbvrAXXsTSoCGbR",
  "key45": "4ELXXZNiDtzSjDY65qrJFmespocdAVg9PWNmJ6dBszEragSYqpWjputPaUgb2yxCWWDVZ9QuShR6LYcrnsvtPoGE",
  "key46": "2xPp6HcC2SXRWuH9f17ve6AwtfRtXyd6tsQG1ktPhQtmkhNZPCguPGBrH6eYauu2cMpDP7GdZGPnJ3Vywab5dZps",
  "key47": "5oaHrMjZEPPSSyANeJqd6FiezLTwsrmHDpLTEu2Yk5rLxMbbeatYCK85A2QnuJVdSxGVhEDoQ8dLSwX8k8cMdg4u",
  "key48": "1h1zQZSyhogTtnVnjzyakjnBN7QobucppbcbyRu37H5krHsJ2SDPkJdyKjokzNcRLaaSUcg5PQYg5ot6YWkRiVP"
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
