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
    "2HtRSRGvPR7uAzdTufNnGLsyVr6D3QhL4MZ6SUPbBfoihBiUzYJdpPicTd4X4Cg3Vu5TvfEdH4fNX7PLiyJpbgYz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62w3hwUBarcJwY4xSMWFyQZUSCuDDgdjJEGgsLrip2EQLBgsf9etZqHYX9Nr8ZUUy9W96Qm2qCQMnMZpJ8We3fCV",
  "key1": "2j9nqZFgkq45ZuLuSCBwrsQY9bJGvReVsoxQJAE9utffrqDq6ryMbT8mybctqECV6Jsqe9CfBtRwRjb4PAcvfkK4",
  "key2": "3kaErHPPNp5KfkDc1vGGwXoGh9VBpFZRXCjjdncLQ5qKd1rio8t2Qf1NDuuVExsfrQ3J4xEsqWK2FGQk9V26xptk",
  "key3": "34auSkBn4hvF7M4Cq528Gu1w8PEu679ND2smSaHoE448ReVBwgC63wyh8rciYjSNmyLt2bQnQUuS6vkEtDpZnP6q",
  "key4": "4aXDuQ9gTe76o1V3S9tqMQNSPVfd8aAc6QAvUkWFeJAjtYdvDchk5juEdSWALtKXGeJuq1WWAFtDY1526sUTSGcn",
  "key5": "2gN3wPcyRhpdJqrRfBXCxSySBfyLLakj1PRvari3r12xreebTLA6jj2m2kmjzn1DV3geJdHpMy2nAGYrc9av3QF7",
  "key6": "4tupiNGryPXrdvtJt51bwfFCSpFkd2Nyzti5JazM9HJoTZCozSLKgND7uC5DQoPSA8uuB58AfyTyvii5UaCcb1T",
  "key7": "2irkjwMci6deQQuxoe4hSaqtmpEVxJVxUVj8kuhfDWyoJ1hTDmV9YCqyUDPtrnAiFEnUZdViBfnmPVHt6qV2ddSd",
  "key8": "5iBbBVQdbG4Pwm4ByVr8eewf4YuiYLA6CMWfw97xh4Axbq4F6pgkXuc3zDECJK49ugrEukGriTdjxQSSgbbuqoHN",
  "key9": "5sbHZ9X8mR89DKd6UnPRkkcpzYzmHD8u37CigmeqXEH6mzzSSxKumZJLvdMRmxVikrX2QhbgRecwyfEYyoo9HKx3",
  "key10": "SsZPGQAbsNBpiWeREPKxDHrPSnvB5rMoH4VnbN26KzeZUxTtWiu7BPVxHNZg7d36nuFoXCtizbBzGoVjToDKhqu",
  "key11": "4maZPxDjkwVpwMtAZzN27R63GS7bfMvU4EXxBGoANT9Wej3GzkPeDfwuD5LMGqg58cqNt8FkMpeQZhC3pXrrVhWv",
  "key12": "65YYBxsuxkwie8UdAtfP7hGgsc4JBYDefYRoPv6Pb45ab3yYhhxG6Ab1xDv9E2GcfsuAuZuKkrCwUpjB5kKPuUKt",
  "key13": "3iKHSYN22pFmPexGunK7UYkkrNivhjxRhp1kjPdBXnwWjNKAnBoLCHmdTqdary2nmEKkAGofChUHEno2ftB8PrbB",
  "key14": "3mcR91WGzL89C9VJeDHo8EebcuTZHACUmqZANrauEfnvGNkSVa4asuHn3N2KWotHYfTDC9yc8dyG368hBgneLLRh",
  "key15": "5Mkb7HqjqxsyQqiWiWWQWh9HnT7kDpAe1q21TZE2T8DHtF6dTuA6ZUJV4oERMtfQPaUB56PBbmwe9crCQxKWJJhW",
  "key16": "3HMd1LyBDGjiP2d22L61QacefFLVztGXvDJYBRh9iy46xzJPoEKzpBuHYZx6hXjvWt9JQKyZTBMYxfa7J7ujGV8B",
  "key17": "2fjAXvMJKsQrfXWRyZVWw9Z2n57evr12saCvH3rJzfUvyzfQQgDmXtnZGkTSwhxAJc5uVQVb6H6EFgf29Fw9QvV8",
  "key18": "2uiuVgLo2rt52rZrJ55jFA3ByLt5FgM2vftTQUXwGkz4CB4nX2L4pG4RqXPfkr8sfC4CDTBNv4ahtpJXA3ecE5th",
  "key19": "375b3zo4b3DBWZEhKg6wEQhN4PqcS2c6A8Z6ttaytkrMHPXZ9uLqy85tfhsnDfccm1y3scssjg7p9noDMbCL9LjX",
  "key20": "BNMeSzmK76L84BUJ2m6mZ8EPPfXQdb7HGxRfiojPBkVS5kmQiFj1LemBtgc9SnmkqjdckfoPF7V2A3Mo8sBAwoy",
  "key21": "3mDYZZpcVYs53BcxweYELvWjCcFVDRiYPGbJ1hRxn4Xij7qZY1b71qSENy87WCBQEzArMj8HAyhy2K4L3ga7n9Rg",
  "key22": "HGC4iraR8nZN2FLYzbjAf3dgxvvbGe3kuyv1Z6AaPvzczr4PtSrxy4uDyVTTdAAtr9ZaVxMXUcJAFpDPVkdBiFU",
  "key23": "4Na964fuM8xrYrn2Q3YH6LbukEpKz84capXuyeo8bdC59wz5czrkdUUPUXznPnWbSPJZ4FA7PAZHrYrWS4wsGVRH",
  "key24": "24SNQVxKZzA7ifd2x94YCta1F3vmoFhoVCF5X2RBtqnKEBoTK61rWwFPwh9BxzELWd7iNiotpSHCbxAgz3KKnqV4",
  "key25": "4ejceDMYqrnjuYxWZMvd55pKrLRGzqRaTx25vcfYaMyeMDpj1E5K6kLAseEGbXn1yDoWCxR211a3SbjxZphfYxMJ",
  "key26": "33p86UNX63zyuwu7sB1pwmXa827NrzQJksCunxsmifcArzmaA7oF9MA1wzwgs9jhSDVjfDd32sGBqnbAYQcRyN6A",
  "key27": "5LA1FgJdcLgnin2NoB9mTRv9sPJg54u8ynCq6yrpvPVDgb2idaxA8HoCMZF33sstiPwmdTSJSNgFBD17jLgyHKtW",
  "key28": "5CTBEJbmk1eg2UKMg4HnrGEipnd4mmNza1mma4ia1ZgQGqnaN1wQCqwzPU5i4LVaj9Y9UsJqSoa8T43KxDwCYvRf",
  "key29": "qUPD4rzsqJhEfTX3tRFEqxp8gmbLbi7xgueWbibAA3zPVccbZF2rRuS38Gq2i4a9cdQqLqsf616kCxcFdmqT4LV",
  "key30": "GAMFCxzuUtbTjYAwgrWWMY2bY4Y7LX1NihzH8WKVR9JwRWYEi2zT6AFfRTXnjn7wyC3vxs35SiFNKmhNpULQMER",
  "key31": "4zU2JJMYAPpGedUBiRVLrHyB5J9pvxJUUmUYPTzKV5KpRtDaFgWPpDD67FYkgKNgr2sqxMG7AnUHULJesf5FSuf3",
  "key32": "zvd7pBVVTzj64ukQRQWtEbSXrMG9X53jwVCvmRkw4M6Nq3rUoSAs843AC1Zyp5pKEndj661xxyxgu2vcCAZ6aYs",
  "key33": "33nLTV9yMkGNsCe56VxTX6TVwVnzT6d3sQD256TDvy9Ds9vfkBXZZRL84KyYRf99Hg1KmTXo1KQZHehMPxkzf2Jc",
  "key34": "5yRAvNnQdzRbC8vyHjFoaCtLxGHbHjDSs46gbXb1tViNWDaSgtYWJASfCFMGamkgivNybUsJy3dR4XxtgmsJ56n4",
  "key35": "2Y8XfwKJus8cWfn6euknoDefDANaxEw48UrwttNp9jQ5Kf7CCREU5icG3eCSmXsGckfmCFifx6e1pZ3z6tuip48E",
  "key36": "2pjmbpKBkQVLiyBmtQErzEutV7WxwKQ39jJEMqBQbaNYtvcuVBLbRpoN3kUmPN6sLU5GZBB9sKzwXkarHYgiTwLY",
  "key37": "3rcgqVhiU6MNrzPiABERjvfdVuvUWES7mjF28XdQzMuoMDkLRiv4Esb2k3eMaCiSBm6XFnvJmYtBAeKKCi1sGYQo",
  "key38": "42aE37HAGNdc2GU6mib4tcaDkYoAgJD3CEKuz8eDzW1ufuDhNmAUwsNAqnYUJcjKtF7Vz6ejwabDCRqrgtQEzrBr",
  "key39": "Lryr4VkrRKdA5BpVbzZuuMjT8tzGLhgK6ScofPKfX3ZmW2qxmeuAdsZ263CKc2iMq51w5BMut4AqG8xeQLJaxAg"
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
