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
    "28rv4B2z9aWCEC2XZ6zqbAdAf61ghwLDZrgMGPoWba5ucWjsEsWEPqZcPZ2BVjcfqa31Sm9gybVF14kwWjdX7Qcs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fwDs9xDAgdKdo9WVuMZh2xeqdproBDVvniitsXFFYuvmK7heuTKLp1NQP3bX3hffnu9MiapsRJQ5K2iFqoiWfGY",
  "key1": "uUYAdRYAR6aeL646rQcfEMnohFDE7i1MnESumhnt4QAMwKAmKQJoXtwRzCEBvTQQ1zvivwTYVqhFVpYHP9ePeXk",
  "key2": "4abJJYam7j8vajPdv6gNCHieMiSDCqFybF5CYE6GQ4QSYLpd8vzH89os28GGAriJBeCnPjK1qXRMY2fQxEPpMWXr",
  "key3": "ZJwpmCraS73qTVR8AzyvUDGZkMQ9kPeRkWNA6E291KkhgPYgKTNivSbvoDjX5tyb7nYFBLWddJMpaK9THrEa66e",
  "key4": "LWqCwmkFgJ8NDnnCisCRc7JqS5QNdyBNvuQFcfrhd2yGq1x8WbciTyhQrC1Y6zPq87RXE2fJroTqaza2NbLHUhZ",
  "key5": "4c96bQZMLHoogcjNjSyLRbWVwXtjDZ19YtcdczjuFL4E6UpuEBrrVLnY6JcerkWtoYSdGgoJFy9MyAMvCk9neTaH",
  "key6": "44fB6FaciYRdrezjc9YoRy95tge98QXjT5WJTUiELXaD9pEQaB3K8piAQBe1f7vkpdiMDg75TBucXrYRgRDXiREt",
  "key7": "wEe5bRkkVMF2m85QrgqrpugmaVCqycJbvhXDubebWuZZfKsfHTShZVq9iqVq381N2ab21wiS5ShbRzfbStEBexv",
  "key8": "f7CKAmTNQzQuGcbReFzroyn3n4QwtUdDcakVCdD6cBm5aaJZpP4NARqJCphk4WWripbYi51f4EtGuS3j8j8U3b7",
  "key9": "3M7nzH95bongRRtBm1Ssgn1medEzP8vnK5vDAJvR6T5EerHNW7RjEjVyYJpDUCnjNsWTxdfUCWg7zTEZMmUwUEyN",
  "key10": "4yHDR43cy1SMbk8wERy6y9ySRk4Sb7TatEpQK8QKiKP6znArYk73NHb7pfkButp1GpgqfFe58ZHa3PHqNgoSQJZA",
  "key11": "3YecHBfWFJv82jnzhofDGGyCdTqwrphJ7LHdkFvQxpcmTHkXLFJXYVXVRFhbxSCfXmaRoSRZebsF6N4Q7Ro3dnaj",
  "key12": "4FeSzENZjmxvTN4F64mBBCrqBFEZ7GYPS4iDrVX1Puit7vJpGzAeT1tim7yvsYQEcK8AfNNS4nXNMJ33vQu4UzHd",
  "key13": "587uvkHp7D8xANkF4N6LcPo51wgvLPPg5KNbcukN9rwUf6VsriQk8Bqk2vWf5jhEsmyk8PTzQXiB2dTtDMc7gRVn",
  "key14": "3TccTJjKg9gDo2rSunrFsSZMRXAib4FZ5ZGMUg4fCh5LrrpjDntRqgtvJUwddALAkUNSreb5N5cwmcmhrh249BBL",
  "key15": "2m6muqqt8Y3tXvHoyMCeFGm9m4C1fJXX421ryppV6xu8ePK4zBb5nU5poWxxeeXw7mhFkhyto5S5eb7k45Rm6wkT",
  "key16": "5S6CgmEoTqEyceqmUNyfAHWeiZo9BskdFLLAyg92W39bjdJWF2nGM6rJFjARE5bKazqifda5n7Ga2wP5dA3MZDh5",
  "key17": "4zDrNfy9TbAH8qAJxNb5GLCpfUXar8UQtA7LzMMmF6NqW5KXyWDtrGbTFmY3JAwzMrMQcTU93Y9V3P7KTo7UiyRE",
  "key18": "5kJVDCt6ixDyYKgsqPW6zRqYyEyXTUhuwLa2hrhV1Us5RTQHCh4fXXysHJ92Mb2tuJFbPmodvs2NhMzFSyXna3uj",
  "key19": "2d41AsaeaMQ5a5qCWgm221ZtP6uCGNZBK79q8C5qhs7raoQRgEFe7ekEtizVZZERpq5BSPqBDvMHrmdwhWhMupRp",
  "key20": "5XmozJumwvUuLjZMo1DQjiTvYX1kopsbLwkDgSstcHXeaNj8Y7nXAz3XmysvPgsYJ8RiY3phDJgyZhozgVMcvhVa",
  "key21": "2rUhVpbxG3irk7yW9Z15n5S859pSJMwoiUP3YLSzHmY3YiUpzxCfVQrBKjzh2TmvPBvtX5CcA1wXwfJV66gTeY7s",
  "key22": "2yAXQvNc2qETpaN5zamGYQGRJXbyi7DH4HSE4Qf5cDABTQbLTe881pSjR8BBZBmMaych5oaAJ6uMpVGdY6UUVHrf",
  "key23": "4fXy7RfTpcJKYVhqMv87JWnEPzneAvmcck7DE7qF59QVUpjgXf6XxGZzay8tL6CgBP8X75sBcv18ykduCcGN5jA",
  "key24": "4CPVRdyk6X3EskmsUFtqUrynP81cw6KXCAM89rHoPRfEz8k8krPa7HktDnir5KLcgt3biqkYDXiUDPGw7HTKNL6B",
  "key25": "63bTcWdibZabqXt74MY3BbKWGor4LjZ7sStGacCBow4E67gz19r6tGtt2h95o2q3f9rsgxagS28uLxM2Th1xj3vj",
  "key26": "ZXPpRAYpvQTM3ToJMCchYkH7dKRF2bh9ZanZLozmJAXuJ2P8domnuTZPTmSocwZV7NRkqtXpKs5EJpkXj1Jbu94",
  "key27": "jjME1K1NBLdatmHtiJdBhAcSddbkMECGctdnELv8qBagxCvwKxnhCXn3YGp4st1b6APRWz9hhkW2oNR61fiVtBE",
  "key28": "2QkfZpeE5YFLkW3zH82STYNZXTkD3aCNqV2q8JYWiqwaZ1U4pZwJdXHRB43pnNoyJtkgJ6yDomnNUkAivgtufLQf",
  "key29": "4p5e7BKBLUxochRM22e6zxBz2h3g7gCpP2273BM6xeoVToRXEWkDfPtefyV3MPCoHkYZGqcDbhBuosvb9kXgMeD9",
  "key30": "eMi3cWj4hZXJ92PyJayYmYcfyWBPj6vXD4knYumpXx552HkBaaSEg9XDsg1nU4erPqWzgcYjS45x1ZjYzLrdQRi",
  "key31": "3NiLf45rjBAmE3Ss3vw5wKsCwLrUnVkLnBSxweCznuPqTwhYEEu68nxfgS4Ldx1RRxNqkSFgdk52yNUCSQBHGtDH",
  "key32": "4SPjqb2yFSKoCkYVxHwhWddgJadZpcQVKv4ASBkWWyxS71msaQSP9n6aR9GGzoh1vkdfYbtkiHrbXtBW2TMadFpR",
  "key33": "3HYEi5eYXdHbzE7p1KdyS5aAwCuFkxFt3EYSBRqExA8ZvPEzYKDzQyY1UhMq5RrLZmDtS3LQn1quAWseoLDqRPcE",
  "key34": "2bovyxLv9RohjWdTxqZk28Tor54W7NxL4QFWHE4K7seN153VxaC6oLYPyNJDAZwJ1AFzFKxKThWFvLMLxmuaMC87",
  "key35": "Ka8yjquNvKRSg76EMD8Z4qw7skDfNGdCGLbK4eU1jn4YHRaYpHM5F8C7Gb2k4uGTokfriec5xYjMhJf9GGfgghK",
  "key36": "5c1fmNFwWooPUBvj49A7JpCmBtrhhRSChFtgijPdfuG8WvHFDSnSJdxziwSF79hK9PJ755xzLZBVxS6n3KrSc57G",
  "key37": "2wnFziRdTbycDtQy4WwhpJNLJ3vnr44znH6s6nfmkXH5oPYFX7ahvGUz2NRpTNDuj7bXX6WspcXCDNB9WxTN1xFU",
  "key38": "4UrQPtCQTh4A1LqcYuqvnsdKG6733pLVHg8RTcA2HwuFgZrm7FhLujUpWQ2HwA59jQocknMVsXpMPm3GLDFnTGGC",
  "key39": "44KckH9EGHmEcs94QCjBCVbyHNwxRgsBUBLF1QT5sTHKdBoSfujif17Adz35ANbVAPayB5LWkCdfUvMwskhuHQQX",
  "key40": "2S33vg1zd215xfqhsFL7uMrPe74Q2d88vn4GfjkMSjo79VriLiT8bqRd6yFLb2jxxQ6SdF5yzwUzu1VM9W7eDeJA",
  "key41": "5cu1BrFATeLnZ9nQK2uyzrTMzM4mTLVNhU7fMixGAecuY8vqZnUd4xx9zzdD9Vw5sMjvsx1XN3We3wG7xiCCQZic",
  "key42": "Gc4uk9zK566HXuYrjTknp7VT3Ugix3EZpMPTPyrgKLVRSwDzd5c2Yge8ed98NHub3rq2qMD886JRqNa7vRiV6a7",
  "key43": "2Q56EAnnqxxrGyhsFoi9je9S1mnowgFv6HPaJoYUK3uk8tJu19Ca6ozpZUHyuqbKNjJnZ75xpg1LMrnepFn8s3no",
  "key44": "2MT8GB5Cvrh4fnJ5FHL9CfiZDANDaM4eESwtoLjS59CST3JC8D4Anz5qipzj1F8WVpR4d7v7xVzr37qr9nokt28c",
  "key45": "3SNmbesCfmfy1khgX1L6xdNrZfKWRr5pAJgnFTdbDnmwALUts6BinCHZ6K7L646JqB97MAi6vXFdNRLQjYN3ynXx",
  "key46": "5AdgWD2dAndTVg1Gy5u5MFgaZZP7NfNPr9ZjMNV6eZXPp9DE1xFj7TPBCg79naSGiBuUywhg1UbZBwzsgeuvoT6m"
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
