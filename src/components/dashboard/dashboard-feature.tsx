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
    "D1jirvkB8dLc4kURp2aaq4yZDx6DVz9D23xAMoztpEWfoPi8DEZowuW4V3NUC87dCxTTK8JjdmddgTvW2tMvYSW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H3JvMuPTgujE55CsYztc4j2AdqRSCQxMSdvyTRpLDpdYo6gKNVhYEKSUhamrRTjwQa4jvT3N2YNoEzF8r93x4j9",
  "key1": "Q895cXqXbja21VERJDyDvoTUvZkgpwpyGrSnpXs2Ci6iLRU5LoTGUsxZK1V2Pzo1RiotaJLjHNykMAiQacEBfoy",
  "key2": "39WSh7B1hY2UTFiWq2RPnXhtMwYCSoe37cEGvWNdmA5LFBrSiSWz1tUBvv4HuUvngxD3YEZEzs1xDe9JEZdZEo9V",
  "key3": "2h8iPP4gbFrDjAUpvASfNGuBTkWLF6zoSPwX7EhV4CHZ5gbHikKFfgeaybuBGo2vrMUoincHwcLH7SGgroYMJxp",
  "key4": "3fb9reBjCQ6b4oGgoov2oCEbXMrEELsaGtRqCmrRguUywiNDZWNXBuu9VSLNc1y1PdV4MUg9588GsTXicQXchVV3",
  "key5": "1SGjpgiDi4fHyFoXub58yuJSHBGKZMwUc89HFVJn1Vu6vwX1X6jV94xWRNWTKAb8ZtWd7iuKMp3Ey366V4wzgSo",
  "key6": "2NCfjRx4XFBkKeYhtPtbF4PFjTyiVse6NdGgmhrdEz6z9xHmS8XZMz2xTTq81HJyPJKiDX6CnwuJhr6i1hZ5v7jz",
  "key7": "34kDQPJ1uHb82S2Tv4b5RmDi57iR4V1NnK9VTWwKvSfUCXXrMeDi6fX3TVBnKtuMRJcqBP3fGgUt5GSZk7grVyQd",
  "key8": "2FNnPtqrEqx4wPXTWfahiWPA6apmJWq349K7GzsTJJy4i4LK3L4wJrgPFBx18woYngr7p8c3e4ai1LHMxhwtnsv3",
  "key9": "2scZL4xp3wZ3z1GZ69tXRjBbAspraGUb5af9Y8XeG2o1qvaNohtFjr2XWie5Ua5ReCtDkurXqVp1wuXjeTudeEFL",
  "key10": "5wfaUzE6pv4XCVcQUqFULcK3MQfzED1hVUZb6GKfYn9VR19J9XBR9Zh5NEQpfuhj54UyRQtfa7gz2uMge2TSWUgB",
  "key11": "2YwNmLjc862eMSfdMdjEryDSzLaubnzh7hHHn5PdAzJmXAQNv9YANNiTiyuui13DJsT5hAw552MpfLDa36ntpppa",
  "key12": "5sFRJDSvWY3Pa8KgHiDGwsByVo51R4aij5PSTZJ1qLwSdUPHvKDNiLozjhmTo8XtP4g4MyjSFMkRVSjnadt2zvQK",
  "key13": "3YKy6dC5jBkg7U8wqjJZ4Z4naMRdbWAteLA4LXUNz3LRiqJoAmynN1W2cF1Q7gH5UJN7jebRhAyEtfZnacthww8q",
  "key14": "2JVsZf451pe7rHEUVxYaEy7U2b57WhPpKAD6Vyqm8EQuHzJGmzqiFAgWkcuij7gHVrHNwNe29gGvtNfbMwBNDpTi",
  "key15": "48beRHadcXhacQaovno1HmYfmSiaPe7JyDrTaqQJ76vRb43UqZHZAV19iV4dZcpqS6QsmMmfcpfasTFh2JyoXnpH",
  "key16": "4tNh1THxJW39Fc2T7tU6KaH1nGwu69BCcnJnS9FFXt5XL61KueFfy6UuiePhyeFQHQygetavg1pWSECUYftwfw9h",
  "key17": "3dowyuavx8WBYpCbKtyu8tRXcL2ykWTgsF1XHioNEypwJ7jAsJngry6i5g4kDCNDjYrYfr7iniscSiQnMYQYFZjw",
  "key18": "3gmsNgjQw9j9N6nT98h2YDqpkRdFiA5wTu7vvro78fLrynz2bm8EtqC1QoWrqm2HsQRMFypa1NmsHLijxdU6WLXd",
  "key19": "4uey2CHAuhVHvFRkbVn2ZDwxtqMFHFVYfkdXabVPtCmDcgTDFYMiK8nfFaMstQcB9inMhpiirVTNCBuDJqLFyt7c",
  "key20": "2NVfCrTLhdFai4nYUfxjNvsxvs5VxzjWq9CGCv5ptL1BY49sTfs1Ben76tbJbmDXzEG3m1X3vC4ksKmJddD1rsRu",
  "key21": "31pcumKVdQUKiBXMpoGEqD4cqnMnZ68DNozExRazde7LFTBpeRrkjSoh6NGbEECStf6Z7r5EgbnigTZj8ZbMw9rS",
  "key22": "2FG5XjBLDZJdnLSCVkWPfLkPZPoT2J3PB2qHszg94sDCFCPR49v8zCR8q9m2C9FoBrVxPiVeNgmL3UFEbPgBYzMg",
  "key23": "2ZrWkoPCazyZaLnJcaKrMg5rn6vbTymqGZEpvzgMeSGx3DUyZPwqnn7AZMZ3s3pbSsYRnsSwdt2twoNXcE1PYQRc",
  "key24": "5y4ryC6BTXrdotmsQm5BRWPofpnCyTHFVzmzNizXGgB6C121c72qKg5AZKhVJxse9eLPqTLvg18ZDyr4A6BsuUqk",
  "key25": "5tr3k83FkbyvbfasuyuDc5qa8UbQN78hJgQ3w5gDKdHifhwue9SxKJZnbBwJRk5R8CkdrXwwRVoP1wpMU3g9Zebd",
  "key26": "31zRXBG2gcpCP6eHCEx16JAitBEosYCNwF17UVpcAgUjmuSHtNZYooEiGMXkhMvNmXU5giFoG1Z8SunWWBiNbYsV",
  "key27": "4Mh5dnuusgSejUWrKskKGaq5gHyEfh5Sia4fYMkMWTYHNEf49Vd7c7gRPKwfMd9iVQqu8gTJJBuWqJjp2cxAiSPZ",
  "key28": "54BLXugYnp6HrR9LFxBiBno3Cj5xztJUMKKtZSKKjXSv8Rhr2s8ohe1LU5KZUhU3SDzpeuZwg881mWX7aKNN6Uqq",
  "key29": "PhFYeXm8Zf1Q5P7bvkFXJMvWAd4iwiR7a19sgDB4fqdCNzhRD9BgsCyViZSopJsoLZCqjzHjLJx4d3d1vAoUUhB",
  "key30": "3v3kEw43iKcgLBgotA6vHZp14QmvggNirDvFJ9yNcnsp57UJ5XjSPEiY566Rbcsm8KkC7VkWRUW8Xr1vkQfR2W5F",
  "key31": "3VnQTtPnzGSdxLFJEhobuNPvuDmPnEXrimNUUwNkQmYqvRXJJioHFWXnw2Yy484UuYnotuTbPkce8QS1oaxAeGe1",
  "key32": "4XEpr1sGiqQhLAchpcrKtfoHsyJWuy1vgsH9BDQ9AR8KYfUFMXZKPhJjAFMr1QaSgrbtkGHU8bVrpRu3Xcdf6uCz",
  "key33": "4yswtjheerNRZKZg86ruLsHr3XvYadnf9MWSQZwSdLWNJ7P9Me4U75GGWL4b9dRRG54gq1hnLbBspnMN2jNCDYWF",
  "key34": "4p1tA4Sg1vavwFP9CKraRETam5xBUpyM89QcNrYhCiTGAH5CqKoLJQP3mVrKfWSyVt4qNFBMM3fQf1r2sp9GFBaq",
  "key35": "3DWB63M9hMBeiK8QBdLQo7DM6wC9PxwW8K1N93YZuJp4F4Tw3cPN1g2Kr3i8omKihAoC3LiHGgX3xW31r14DpzZH"
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
