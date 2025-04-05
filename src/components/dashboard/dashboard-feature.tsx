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
    "62ijYY3yXgcRcbhKRwoHeDPtDaQ77Jb4Qtib8rxEaLypA1YLoWDW4iTSKDJMRgLaVH8exPyaeNQsYHJjjJcbzwnu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FY4zj93QJDBJ29re3gM1u7NaJQESAgRPzCZYV4DWk3PBNpMh1esco8eCSXqRLgTyAFHRVoqYd1jKxJxTRUBWUsz",
  "key1": "35WRQFNNFH11M1HAdZS4whnn6dZkdX8yxzbouu1P1AFcLLKW6ravaQnPuqtMaj16tQpQsaEdwQsGbd6sypQTa9h8",
  "key2": "2tihzgNsxun3YbvtgUhX1pv6n2sWnYCtFHofoZ9x4QjLbZZbdhE6DNwcSJNCBzTWJignYCiJeG41xzLUifA6whwL",
  "key3": "4oiqAXLDPAwc17FeG92BzDTSYjR2CjffVHuNV5JNMAEeR4AW4LZiwR4PSyZ5Hf193U6dWYh5aBpExaHc5JTG7ZQZ",
  "key4": "3MvUfbYrqvoPm2iEmWn6FArGmUsAAL4pjp468yqTEyNu7RzKz7596RU4juW8BUQZ7oUb5oFEZddGN3KZBHEdjHbq",
  "key5": "4ZdCjjj3wECTdNXubiSgoiFUiXQXdmY99rGWipGCKGRd5f8c7kpKAANXULetgcUBJdXUqWwoucfiWdgktbgxRfXv",
  "key6": "3uvwsKFWVURyctiVkq8re3jCYou7uxQFDrM747zuwWyw8cag5fnWowRqLoAeLFqcmPTQvy2j9qEEsCn4UVZcQ79q",
  "key7": "4wYm7gPdJV4SLmZsE2rXAM1PTZDh5HxhgEKFZkDwcVN9mWE8BYMNjbUBDJM6nabD7upnCLv2fdB2nHzG2y2zhSyR",
  "key8": "4Za4ZZT2XuJETUXsZ7ksQnPJB1rtLQjbwJYS5ywNWAGigLSZrKh7xLnBoyZxt1L45Rk9xVU3Z2eGVHGBTNeMWkUS",
  "key9": "4yAJEXb1wPNeJegh7A9asoJ71dBW9NWxFWshRueSG1CKNY7PKXmo2MDVeVqqpAbFPsC6b73sopYGnDL291W9FBxS",
  "key10": "5fvPCHew1j132GJMtB9SsvJJDLDsafnqL75DKVXEwC3TjaXbGsR1HeE2mH3o9NXaJ7taN1NeHnbrn7Xp7PqzndSR",
  "key11": "3qV7A6Vgu5wVZ2V2p3sRrsxA3e9ADBR5RwVzvc87ACMwnT4HxT5gj2rT6B3z9UopSdbjS2F4QVaPp2NDKSg5AQ5T",
  "key12": "5tp6S3jd9UfXRt11Mo6kxaaubc84wi173rr3VpMQfeUfzdiyd292J5caxdv4QoNf9ygtzgLVUxeLx7oJKE8kCXdo",
  "key13": "29Eq8QKHYCht7514CYkibJKDLa5LAhDA3UiuY2kwFMdVfaunf5vAMnbzSJVMpTNpvDpH7cakZA4odpdQ61XyohhT",
  "key14": "4zrCShfdYNEEb6m85ACsqhtFySreQFeQoSXBuCfwEc4YU5w8jmqTEwFkKiHA1AFRYQDjSbJZBMtzsEPKpF7mFcZa",
  "key15": "2N2s1ZqHykxugRvk3gqpyUcEUB4esRGjPZdBo3qz4X4ukJPLDSUrRk3mkHohjE9pdDHH5he8LfAE8eB8fUZZhRnR",
  "key16": "XDv8rk39ffMxAtDvc38AftKAwCFxoBeyVsk3ogCJaSTrRuwvbwVuQGMwBHSPvJfJANvEGhw6yD2BKfBcyRoquza",
  "key17": "2bQsV9HS8jT4dD2UgukjaYJDfzTm9UqAcYaCmeLseXzzs7VFNcvKsmH5FLE1bjeaXYtjUNWuHuDD2UFg63yCjGp",
  "key18": "2FqriG7PaPgx5TAypkAKeev94mqVNEQa4qSVihWSyE1VJQvN6ZgQpNEfqG8PSZZkbJukEJiEHkaX95wYJWf3wmtB",
  "key19": "27su7koYZnvy6bGyrKJTdJ94KBFD1uCfN8VRByG8bxAA3cosN7cE2TwQXR3i9N7Qq4CKrchcdeh96cicHcNAksC7",
  "key20": "38d71vavfzJQo1LqF98GdyxdTdqhF2cUuH2RNUtQDXxqURzzGKSehf4BrWUPcbJzVEri6MxHVKeqa2qBFvFkvDxe",
  "key21": "4EgyQrcm46GHZdcaHzps6vJwt7a8E8ogGVYJsAvuQ9vgP828eBs3Z8kNMNDHoMgDmfbL1Pk2GUkUT7bVJc19fCnk",
  "key22": "5biGdDAejCtUTqWPuYoyyEBZpbXVNg9xthqKymwucQExi58o5qrGdBuRfHE2nwuY8CtDbzP8kZSVoLP3dHjaRdje",
  "key23": "5ACKKbYSgKz4kBLQzTmFmLxv1sN2Xzn7jQFymDBarzdh4uNyC9H9Zybt7KLCVksEX77aboRwrnef3zNKHpBK9pBS",
  "key24": "677D4TCwVSiRCFjWCs37iCx3gNWLhMHfNysX4wA9GGTBmtpX6QjYSPqK8P39TaW4w8Qe8W6wVur4V1jeeT9Zo2yg",
  "key25": "4efNYzDsJjP3AfTNK4sUCEnMq8z8aNyYjGG6Ahcs5aQ94cdJFK9HWcAYimBhMfZHH5WsGYUBUzDeHhPcnbBJonA8",
  "key26": "4jLdt7bk6Eh1yXtPWZ97aBaGFQK93xAaSVYoVTKPTVz5s6FPgwHwnk5DpgpZ3uSbUkq7zXP2R4BZ6Gsjbn8gyiof",
  "key27": "2GFnKrnZZgyDZ8JvCiRFZLf5BksdVJv8TmfQgccbyRRmpJJQxJovi58xiShPLa2hxdkTuavfewNWmVUTbGe7PFNG",
  "key28": "53odCbdfkN5KtVHGHRvzfFY4FFXRC6ibpFd7cmTzbZMNoPwY4R2nWDD46Xprxxv2539RcABUCx7FYJS9GZXcTmo3",
  "key29": "2kHefymxq4n26yeEGLaC9nfD3gKCxcZZyB8Sv5ka9bEp26m8TgguyTFFZc3WFHfdW2L5ZDMtsuXNTYc1QutvKkad",
  "key30": "2pundKjCtx8ZM8Pu68BoUpexHehfhXZ2onc9CywjBoRUrS39JR1DhmpuJkdDkRVG4TvaxNkBZwqECA3M5DS6UF7Q",
  "key31": "3xEBae4JYs3xAWL6NRdBHhBbiKf2R6VgNTzBnpyd1MMNKRZDRizBSS3dpY8rmMLADfkDQRQRyZGuETpac12qCGTa",
  "key32": "2HjRPUadfY1KT3vCEGgpWXNjJ7Zpm1hHmQNPfyLe1xyUog1FWA5gRrPadyNwvBEs7aSpyxPwcn129vzLQZy62D1U",
  "key33": "3Bi7dMFJf7SPoauy1R5cwGCC4gkRdBsSTPjpZhZ6rhCAnDMAdVKZFiddN1WKAui7Qaait3Wx8tdgmfTyLY8Aadqa",
  "key34": "5UNx2u7mGyq6qUT3JwvPnjGqxBue6WrQYJnA7TCqPrQhsy9mwPkpMLcqGpt1UzmWFS9UDFEf2UGV3fBtcUrpNhZT",
  "key35": "1RNKDrPsXcAM9skK1mha5tpTyLQcLsvWErNSWsw65c7ffqjWK8be4UdeLBQc2oZpTYeRtmBM3bVNQdDs2rQp9vU",
  "key36": "5KJjj66Yc5ZRbDvLqTMxtg65zQtzVGR77YgBng6YjF1QCjiWSLt2NpLY7Jz5NZqJkN9SwRwQRZtempixV1W3gUt3",
  "key37": "3r3TNCZeWi3h3XhN2HR5pSnVVZ62G2qbxEjtychDUapKS3ravpX3QKpqgZdBWAt6JQ3wechtFXBKXMkFTJS426XK",
  "key38": "k3Zs33gHvk5NN95cnudrKXZmkR4HkpkggqYQSeNyfYkvqiwb35ddMaCzukPyRNZDkXe8Da4tmLhDUqZXnaQUisY",
  "key39": "4RMS8nYPaBRfjxF1p4jimswjqEm2BAD9EhTe2dBSiQ4BkWWh4KDxt337igqvTHzQwrQpj5AJoCG5rw8N88714s51",
  "key40": "4TvqtndQe5rVLngHc26CYV5GAs6HKF28ZWYHgbN3sLAq5k2bM1H1zUAJw5PxZ2aQcVtAMKFFJ2j9StFsuykt79Pb",
  "key41": "4nbcHDpkdsSS4m314vFcRbdJfQBVeLPY5u7KD93ENUdgMzaHA6FTSApuwdrTfjxVEkJWdiBkACxPdWYYvxz4Kzab"
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
