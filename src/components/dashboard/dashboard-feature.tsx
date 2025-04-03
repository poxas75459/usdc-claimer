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
    "66ZSh8DYrkYJKXmx2yYgLzosm6uw7UdHoom4orhkmYtzWh8P2RPk62vdXW7yogJqzCuxeFkeD2CYyb5WNuEpgSuz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mQFeF68HujvNBah6g7wpHZv2AwsX9mS27MjJbY9wCm7sJwDRn48bJVPHdE9xkxred24gJzWDrH8E1BZGAU8Lxkd",
  "key1": "52eEYTxn5v76zZPLQMNPnXSRVkbwEA49tKE3Ces1X3t6quWp2gzVn3eLPH2FzMSdUvw3aAsw3H3rQ91PgSHtm6nr",
  "key2": "5WxCHSH7bEWSqdyAPLCno31UKM8mKz8ZdYEWrFpUhhnFKF2kQSDK8hC6ap7Ja1m6UUuVHC86jddVpP7uXvHeXAED",
  "key3": "61MbnU8kW3D3uqd8BaWKJ6YLeNjUXfUs3mvrAs1trr9yvG9WqE6vYLn7HGpqpg2tU8MVRUCM1qkendpDLPi3ednX",
  "key4": "4seVN4V1ZXmt88tga1WbPFjEQUv8SEaRHdMVPukcKFw7jB3eJy5s6PRpEsJ9sd217PEzR1Z5K7fYW6HisDUc9Jeb",
  "key5": "MEubRAqCi5dJTY8tqoanS8hzTvbKTTRirX9mP8Qi52nxL69EZmYty6Zv7LbDWFANpRvRzNS5GYpmcgT3xLT5xts",
  "key6": "4j2aoCNq5LWCWv5xjhmu8GvEfUpFzSNznRt6VoX71SQdkj3pV333g2HdfH8YUcY3LBr4XoXSVHbi6SpqU7pb2mwo",
  "key7": "4rGY4gNSBzMxHYqwAS1KT6TqgsyDdai5V1iM3QBh46FDfsTMRrrYwY5tbQ2de9G4ih4YmuCioaudrWGwVTgs8pwR",
  "key8": "2bVHCSGDobgUqwkVWmA4LwhbtughQZySzMLHs8auYDx6HfQrcBEEMvt6mqythJYuRtmyoTbBBw1uGzcDG1mCQbUb",
  "key9": "3cXYyRGjx7qqhyU5FBJwXSz8ok3eUmHXjUt1A2GRx4At4wEQSrksqyEfAi1k2SRKbtuAfBGQF1LnPQRr681kTh3s",
  "key10": "5PQT9Fz6thwstjopTAceUUZftGrrppK4s39ef5dWKA7Sf8HqaiZfrJ2h4DdaqFYLAhxHawe1KCjSZ8GiX7EJUGEq",
  "key11": "2rPKNSBuHSxidVSiNDYUbM8CijwQgfvZLgwRM5R4VhjKJxQTEJG2NvN4ksPN6ep4Ty7Lc8MrvcfWo7VmUWG9xqmf",
  "key12": "4jMaRM1kyNURSJpYisbfEE3p9eLvJWmDXfQTfvVu9uG7xDAkDi3o3gcaXo5gRc6nQmGsGGUpmF8USHHna65RC8x",
  "key13": "4CmEBxTG8UqARMkNHT3nP2Mjo8qyL4LssmmWUWAUdY46LztpsPB8xxxHwh7bgVtG8keMGTTuBJdmS8JbMUBc37YY",
  "key14": "54PzXpuTAw78k4DviRiso7nrL3RAHnbgxBYMAsJorPNBoB37Aybsyqy2Q2v91e7yGiPRWUX3S48tyHjK6NiEeb4B",
  "key15": "4xrAzLXPMG55Q2yKnRrrw3r7WHKrudeUxf2eTV4UTQc7hnXokuTtgPbkWUWkRN5b64ti83LNrLsTKn1PfsQDXZtR",
  "key16": "kVynU275esAKGXvNdZtvEJa9qyPCFA2H1mZrKsDWXUJ5KuxerqzCFpDCMHvx93beZRYAw3RKmv66Zfm3fYFyJfV",
  "key17": "GRncnNzcTBLDs1ckzrW9DKmoZPzyHFdHtzYHYRvCRUochfqrSZfmWJ42mjjEP1gXn3CA7efuD8a2Y2DeVsFdq4T",
  "key18": "49e4F5iAokU2XfDuwCbdoBUPFxyp4WHKZoiBmydBTB2xxy4u99JXEbCzjaKeo3cYsLNeteiXiDC7wwX1yRfu4Pni",
  "key19": "3EnhgnFrw6PKQmcfApZBhoXfGUr7dcyjXyMWFtBJEJN2enbt6T2HZCrgPdxs7KQTt9bzQMy4nvFbQ1d7Meqb2pGT",
  "key20": "2gnRdx6qCaM5ULHJjaUCC9RfWS48LLPuAeZeDCoTyfvUzHA7qXthD5t5DSKzKKmzjNpAomPBKJTMWuJua9NNw4YQ",
  "key21": "3efkrWYsuPxzKTK6AyxEukDs9MowQirxv3315qcLsWBS5UbbEKGATna3CpTqb6uUaxScxcdonDbMR654NGQAzZuL",
  "key22": "2me9n8oZBWPBkN4TNHNnEPDrCz9r7ZsHwem7x3HpePu1JEybj2tG9sAkzKkbiQphPnLTrF5x8icQR6cQyu1uS9Gz",
  "key23": "5Z1DmcRgzUK7Kj5ZCJvLeP2Vh3uFpE9i13K69f6iysaXV6aqEu5XHCTtQPKweujVeiZKh7vZSbCPeihGxU61cgaF",
  "key24": "5hYqj9gDSW37iV3z5YmhhgzsmbyVEgQaFv7sMg22SnSuMFGrVhNbu8om79ahXXahUcCVnTKhQx9WV6DrMHtN41Bw",
  "key25": "2eSDVvr2Ev7G5VV9H6yiMwHmAWYsKtsn12fp961AjuJHDyZd9rNVEbjQ8pNM45YD56m31AX7LL9pkBJfkM2HM7ki",
  "key26": "r1VcngB4RbkMq2NNAvbk3ZjQCJ658Zxw5FfoFpNZF5h2h2FyhaVGxyZZvQSzauhzroeJWmP1eiFMaf71r6bAv4b",
  "key27": "4kBpsFwdevnwTFCepzew4ns7JG2mMopXFWW6vEXZTEZBUujL7pacTbWvH86HfLHQK5FBsKaNNT1oBE4Wk7LFFGXQ",
  "key28": "3J4mZoWHjqDhuv1AtHyQ6DadEi6eg496MasmFNpaoUATSWiwTjRuxZB15jBdmqrsgzoaZ8s3D5USTMdATH9hk7BP",
  "key29": "29qJUmyQUtcyyjihwBvyeZFsSrv3XE9V4hPT5HQjacWRL4EqYPovGYvh726Db6AARERu4KFC77C2m2GPPvXbnQam",
  "key30": "2kg5fAuoTrmF5kWDybbx3S3erjiwZHbnDjjbYpdLsVDad8yCKbvvR8HJZAKGkzegX5FEuvMdFNpE1FjK2hj583Ax",
  "key31": "5DAaPrrm8cr2ZRi38pWrUm7qzuDiCXbGhKez8gFYANda8yjZUVfid6Ur515xnUUGHeeZYdKEDmreJji21jgQjCc3",
  "key32": "3xTP3qrkvbnhHXqit2MK7y7Gh6QjF87fC6ZsYnX2YNQoqsrDyWQBantZXMMmtEVKCkMuLpXHsqrddEk5hf5STw6u",
  "key33": "mMje1ASwQZNerhPMJmV5Ci1ambLkacMfLjyirXJmwn8h63bJaNiQzYxNbQxvKHgSjtaN9g5K4hAEzbmwdSVqbW6",
  "key34": "4X3cnfhY86cJL6h1YP8BA2Wt25fW45UYt185zVahLJsiLLRBddAkC5RfYiwNkW7qyZ3y7jDn84PKWR782YW3wYPV",
  "key35": "2QmG6TopgYiaSe8URFSc2Bs1RTtPg5WYQkMZmWvEu5KhhdSXXXUT5Jsxp55dTGSeyGisfqzHhvvBDRGqBRjnjKXc",
  "key36": "5qjPdY1iDuvyxLr34De91KBRqgVGZZywmcdMcZynfdbiVSZRYfx9ZNggYX4q3XVLmExtjCgL1zpAxyFTMDnqKGaB",
  "key37": "5Deyzv5hyhymjWgTyLSMScLCP3dqYT4UrtFgWvHEgRDFxAiSy7PQYk5n3mywABEA1hXmt7wdrHGq7VoCZvnp4Wd6",
  "key38": "4nnQDdoChnYh6tV551rA4ciUBWutLjaHTHCcPQoTqfRWbAeWADgNy94MMtZhsZsXHq9GYSG9igDLHvDqf6XSBozf"
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
