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
    "3RqM7vkGFDiLCv5xGHeFx44CFdmHdqwjip3jT5QdAvS4QjxGYnKdvRQpv3RwpjQshjx2Tx9mN9AFDfVcMVDCMeuu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kbHqykSnStp7N9zX5GywrEMj71tCc1GNsqpM5xfQL8WmmJyiZ5XiP6BA1m3P2bUCY9h5NWqxqASybXi99TfSHbY",
  "key1": "3VGUMG1rvsXivheFhE4DJMsrKjxgDAXxmFHn6X5kVBBXoCEBGxL866h7nbYfxAmMcGeGGX28SXKjEZq8bXNRHsem",
  "key2": "5SX7Wt133ckEng3oXpteRWNSLN3BbRhEhHCdp1py2vSne6ibdbxFsJs9BY57j5ECdH219Zj7HHEkag3WZ17bJDsb",
  "key3": "8Y6McYv11jUU6gNvtnuTFKC5cyzwcLGRFQZQVBKH7LddbjfmvQaRgBeJDpcKc653yDVXoqZKgovwtVEMz8XzJ5f",
  "key4": "4R6fibEit41Y1PuUbAyL8BjYMXT3eb7DnVYALT66aWptQ3yGeuzcDjKpzu6ew7WcMdhn41j3XA9uP2qGFkw1cgZm",
  "key5": "5BjsiJ8tcbppV1A9qeRmHu6KSB8y8DJ6KuVW8kViMi3FZTWmmVP2BaPkXqrhekGbJ2H4Rhc1CDJTeyW4puR5CgDH",
  "key6": "5gFJtomKVci6bhz3mjFgy9qh9hv5VyKuLGyPxW7x1DdrZH2LJawiP4tDA7jqh9G8TXnkZaYjP8THxPGrfGff739o",
  "key7": "2Bg8MeE1B2x6zpFFNThFs9yKY3JjU9hzJ2Kkvx59yWJwCTdj6XpGMZd5imMHUJ5uZHosnhs4LM5kAtt21SDRLhyY",
  "key8": "2JNuKzLkteKBzkHyyFPBqAbhXNvEVJub7GMxzvDDf5VC22S79BtN2YMshwMQ3YdUiSdRh2aB3ryQTvM6v86Thb3L",
  "key9": "282D1bpEQ65Y7rT25m2XmDct4JPhxabsQUvptQHaJYUCPPH1jyp9ddDzBtAVWAHcfni4X6F7yUow7MNbPJYEgLRa",
  "key10": "6545h3EcmX5p7cf7d9pizQPeh8qWdJeFF5Y2Q1V6m88Z8aQyygF4ZHcZ1Gc2XUiaFSLzeJ1ZeCej7DHc4KAREp2T",
  "key11": "312jr7U1Vo3YtKSkCE4rYgbKfb929G1yxeEiPRxg5PTTjHacSk6RwwsK1wPSo7vcqVciyYegLnRh9jhh5kodAiQ5",
  "key12": "5QWNdPuDHZULFFZZq6s5tvjBAxUZyiZZJptfcKuK1VABjbfYvhVFD4o3nwWECWszm5sgqDGrf6nvTqx6KpZ9rpKz",
  "key13": "2p4bWXH9oEYjp7onjZth4s5ePReUuJkvK4TUzd5V3oFfRKjLDWXNGmvCN2PwtBGC79qs5YMs5VWSJm6wu1QcdW3v",
  "key14": "EpssdxukJbrHrCYtu6q9RmRrM9NZ1Gf64zxg1yCLhcNBXMTDocsYSDxFzvr59xxb7mYMhAw9jpgUsZa1YkpCpe6",
  "key15": "PJGjudxVxZb26uSfoANNKMz6wW2Gp9Dryd8MTo6aNhdy76XiwxrmUruvfSUcy2DNKnex1vimu16nwiwn14c37w8",
  "key16": "5Q2VBPRq4CcGdYQts5UGtrfnCZpxruU2BP8EVQcWLAvUAEbWcXF148bgN4ByGbrmKPqUskDdbjyDwSK6DbxBWbTG",
  "key17": "4tHYjdAWfbHACEaSrYBysnZZHeLFJoCTwPiJfchsUJ5z5mJtuaXwxfTySULeJKj4tZPivTfHo7dD4UBdbw8Z6F7W",
  "key18": "4J62hv7QEnAEQ7rbHUkQNBjqsBna68DKuTABfv2KKJyhbpeWM5BaZPZc7PBn47E1ZXLxNvkt1QhW9QjHCUgaXNit",
  "key19": "5gRUhveZubhpohvmQpea7FDmZFMXTjSfLrZyZjhc2AzbE7e9rE8qLeVApaL3XPEUYVcqDfWtn7ahWDtqvUrLVJ38",
  "key20": "5YjHxowP3qq8YYP33BfvNxtJgUrBDVc36Rutzy4yi4nLQmD8hsK2Xb2VxgYaou8QnKFHVwKgZaArG24BSwqBcPgg",
  "key21": "3zC3xmHJtUhfzdL8hrqLCCTG2sK3j82eXHgakDaTf9uaTdXqCDD25JnjTLiSLMjhWHjBZpLc8oK9zeoc6jib7iiS",
  "key22": "4rXiDLPdK1bF3xwTuk1fc9DQcsvJpbWTmTCH88KXnHtHpUmHwMztm4sLMXwNprEGSxgQm8YpS3W53RuGh7GPss22",
  "key23": "Y6yqQR2x2et9Ycj4avWzhdj2R234gg4znyiWCyStbFAFgW8cBckocQYU5iWbVa7ECP1cqMdGYDJTB7rYo2ACC5K",
  "key24": "3ZdFzt42vWXi4pHmFEiUCxiuMyiZdwr2VbZJTJFvrjMdFw4wqb8TRWAbK6sTPCS4tHrCWdjookNBn5aBdJwrRtDC",
  "key25": "5yzPSodGZy3YZ6KYmkMf8JyHEWWjDPdLdQY4vWe8iQqADH9RTRFjB9MQmoytxu6kQ4eGY8AcKzLxA3yZY47DvSfa",
  "key26": "3Nat5jCqgrCtq6WP33nwf7QT1qi1CoHaFR7sL9X8rLJhhoHuTJVf6PHped2XW1aPv53ytfuEAbNtZKvkESscnaSG",
  "key27": "iPsW6wjQdPpgL1fM3yPufBmiEcjohYZ5JekGvPfXcBbZSVTmR6s6vNxkW4Na79a32nvgsLP5AUu3SBB6JSN27k9",
  "key28": "47Hq2enTixKBSBLFwFP7QpzthsknkzFR75pJN2PNSSUBnd8GPAKk5EbZYqPC2dn9AVQo7CmjpN7aj6nrCYfCjsDb",
  "key29": "2eTWacS6pBwDwfGcJhmVX1R5atuyz6nTCnsY1R3FWYT69KS4VP2PuyqCQ9e9LipZas9FEdmwBhN4T9YKMRGN1E4P",
  "key30": "3YjZ9d2STkKSyTrKv2ecAb3ZpWxQbscrWB3eV8Mb2CYcNc5iGhJZzt93kpsScxHk4VvsVyHUeaqMEXJ4zqRFWVQ6",
  "key31": "5xgcTnCnWWcCGMG3jptceWYg8A7VVxoXzXR25cHancBM3fLqW2uzg2NBBsLpTNbHnkiB1WQaWtRZCnhPj5wW87EG",
  "key32": "4TPFBPeMP6CYaXXWfaCj9EJZcLNTDYrTarsxWwVUenpKsN4VMw4CuHc6wKJBWvGsD8LY3mdzynk8jmJ2rMynBvy6",
  "key33": "336L9bSkhk9P4mTc27zQzGs5d66nnmZ1oESGFrQtYMPveKbJNom7ZKSyPz5YuGaDeo35zkMwi1W865J8xzCB6A5m",
  "key34": "5AHxJoQvZMZSB6iSd3nNJ51wpqqvTTdwYdBw56uHGdQNcgF6EMF12XZxj1WVgNir5LySmSTXVhgvtgeCeckoj5hc",
  "key35": "3jWuqGEDQTvx6G7LnXHXQHQq6MQcN8s18mdvtpu6K5CufpzqUUB6SDfPPqH5dGnKxBXmCzHwVZ8z6of9KGs49gmn",
  "key36": "38kbDzijnJafKaa5vZyV6vvNBASmNKjxyXaHL9epsVuTqfTCQxDg4WKLA3FpbfzMUfqhekfVRgqFAo4vpguNJShM",
  "key37": "2yX9MirabL4A66efiiGyiVGec2ETgLFRv1zungNVGtuNuCAePdHBRzSCwZN9v7WiE7mErN279fi3KdAoi7aNaSaX",
  "key38": "R8wmPH4Gp6mQizZve69ciXFa5mKagT6K2ZmpSk2Z5Gc11t14zR7AUGB8dniDjSVwPA3iJvBryfiPSt2TX19ZxLW",
  "key39": "36Tp37c7kWhB1zuK7HJKM2KBxGU1FfDegGfR6gb7BQsqefeN458DyxafrSfd7ZjkpbiQPBdV1GzoucvqTcy35kq3",
  "key40": "3PxvyY1Q5ndUH73moeKDVnmt5S9wEArGqct5UvBHL8a16z1xLAfuhHQyUuywrXuDwtfAjKFPdMAj2b9J7zuMPtnG",
  "key41": "3GDGkLNwayjbCt9etUWmDveKQeBwrehgGV2CoehDdmgXKd32RGXsWH1vfpCZLrpuv2umttvgMenj9NtuyXRYv5F2",
  "key42": "5qm7vEeuEbBrN4hcFipNCEAKCYGumdzPAkrfNH1iPaXss3ibnBTqti67kLNzAMZGLgFoho22ehiCrpgYdQx8SemL",
  "key43": "3XLJmN7FDg7YE4BfkUQkb78VoxKtuVgeWEHWN1LdPSheiDE2h2aFrf8Ci4Jdwwf9ss3yEgxxqpUVcFxQYFCm4Y8",
  "key44": "3bJXCNSsgkrUsX7kpF5iSj46XTDg4FiopzFZCnRaT7p3if852LaYmqV4KiSF5uKjT2T9SdvBWLTm39awMr86Tuca",
  "key45": "4WqsF6ktBy3RgxJXqGhAkuefvy38ekEXidpGnmLXbJhbViUwtrejmqFSi5j4f91SpE6TJnVsvGNCQ7BWqmvF1zLQ",
  "key46": "5xeJ36Xc9JY9zA2NZnuqNYk1DpeRzdK1xr2JTUgFRJ9uNQkyJvTHAfE974Vj8PXu4hsERR4SnTieheFBeVqWYtmn",
  "key47": "3AkdcaB8aq6Mbqy5a97eweTYquWV4mAUqPTgffuzGMvHQp8dRCeYxA37mFje4s5pD1ACPBjjR22Pn3p94HHL5bVf",
  "key48": "5eaQ2ZE4WeuvnZPwpjnRd183VHAtJdJbv88XU6hVT7ZFaj5SR3G7o8fqbgE55tFu2mSGZ6SaJFNPJPFfCTRP2ba5",
  "key49": "2FeM3n3HKLd4K7Exuz4MKPFeKWhD5T8qASiScSCNYQZRcSjMoeSmc6ia9pXGKLXDASevJtNKTxfwBwTLtaGubjGW"
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
