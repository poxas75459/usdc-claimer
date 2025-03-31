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
    "PFAqPHD4G1SNaTFJrD9W1QnoKDeyS8fpLYkxVBXmp2MfpJmADD551purGTwBBk5b1fsLiJ8crxCdJ4rq2SdNFGp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HDwre9KRLg9bNHspjUFawVSMW8hr52JRQvUPi8FKCdFND3xmVswKDsHxePXRym6bViw9nWPvzVvjdmn9sbmdNC",
  "key1": "Z1EJ545Ck2L85wje67eHfqoQGYBKJeTRNCq3uE1E4Dr1WPVMb2oqnZQjJkheXKiCCy9rJhzdTheaBjRdynekFLa",
  "key2": "3nRq3s2PYqtuqx5vVbeQpMr71egaXarsM7N94htKZDaccXAFNAqbbdJaui32XZ1ubpeUjShrRdCRTsHBQjMjp6nW",
  "key3": "5isHgmf1uL5Np9spXUNQzKSxv7fj89a1tPpDXPTngc6MruUkpiyPjmU3gF22XRrKFsjFDMuC4NUiDuy52WK1AgLX",
  "key4": "4o9Z8iwmith3LdhT1n6j4MqkhR57nEnQFHLisVVRMEe1oCW31FsFyowvUcx7MB5fsCXXmRx1AEo9H8G9JBnKzTQM",
  "key5": "2tZef3h2c2wU7HUaEFVueS5PPoV5eaV1xH8yxNnVtuZrpfs2HWT2c3aQXLXEYNEtz3itZzeuSycdKauZsxHoQ87C",
  "key6": "FZJUbJ9jXPFbVKmtyKr8AdErUAAF8dHHFoYzkMMTBe3vkbaR8iQR2B38kQ5yZssz4TFfmYq8zD63jnZGJXmejZt",
  "key7": "3BMuupemDPz58WqvLVFodcDB8jg6CBTozkgoDRpnDUAR9vAKGgH8zi5oD6YkRFsCkVebzJZi4EoLSSP6bTJdLb4Z",
  "key8": "2YyCw2aZu7LNQi52fYXUNmwNHo2D5db1nvscwVnwuVLqQemd1R67LcJ9jt9PCAdkYLGs6oaqU4aw29a28BBrMjuq",
  "key9": "3HzcgmcaViqztvE5ckugBoZXmsMB27EZkxF471HXexFRxxyoKtKVMEsvJvs3Jk7gFTQMXWhYTZALGbNPEYomumN",
  "key10": "dRAHsy7jvdCQ3aNE2Tx2ph4stQAZggkGKMmfWFHXVn6TSHAUjqptFYomizMFKzKy3h3mQrJExpyENXwnfLzEk5N",
  "key11": "4CtqD9etrv2tKM6h6RWtzPgg38qpNLGw6ZC2oz6qcMK5x6VgaAuHN292GoaXCQWn1RZozEnSe9fNPuSeMtcqwkJG",
  "key12": "2FfwVi1bWEpz1XejB8VfHXZ7DoaYCXW4uVfsF8fb9mMuLesQeuz81xcgKJ7zdxVzCvYSisQeziExiNC1Cr8CqAGc",
  "key13": "JUfJCmHLvZ4orU7B4mLWALZ28j9Jb4pJQwN4yK8vz1gK13AwX4nnR47ETcuwNx8QpSmZLwTZgHSksLvZSx7AK6k",
  "key14": "39KEWdAg5BUnzU3WQLBxx5yRnYec5aixDEvRTiZjbm8g6JUebHZF2fW6KK4mCBYf9vtJgvtLc4PLZicQqMi9tKJD",
  "key15": "28hxMMZ1ej5gthGj2FbxBcDPYYpGS99oCkjiFcJDQd2CqLpgGieCfYzTdV6vE6o9j8pjk5fbrszuWXTSMSQwzzqL",
  "key16": "2hroouvhBfLoamZf2P6mozAQtAt7obz6JgUJ3uzGYSwk3iNHXvg91y2ATsSy5jgch5D5PuQY2zP4Cd1p8c9faN9K",
  "key17": "5B1nYYuUd4Hg9Sow5JPX6yBprJyfxVqi6yYdjNbFXJuXYT4FMbzhyiNiStqRGpPaSzb5yiBonsU3Z6r6jemyo8SP",
  "key18": "52uJ6VwS7cVtcpeYyAyHFUeybVk3ryo2wFg9u2PymCt8fLz3BWjLiR2kyL5MVU9mfesMiwHpPbbojBqvjfHfSYa6",
  "key19": "4GBa6EWy4uHHi1i7BFihh7wnAorX1ZzvsQVBYky8d2JE5P3Xdmghh9rZctJZKcEdWyeoCchxLQ14jsDz4pmxetL7",
  "key20": "27WBabxpAqBnB1DqkNSjxHjLc5DQYYckfeFXvxJtPW9YKkQGLTcQBooZxkjXehsfigrc3AUxQE8DTMcmyLbGLGhQ",
  "key21": "3MaF3aENy6cUcgLPDFx4t4ByY6Mjp4x4AVREH93AHmLokWJmNwPTR5bND7ubMsJqyadhujmgHbgWk9o1g8zpmosc",
  "key22": "4cmArZyf7Gz6dHyLurmxwUCVTRtQ4BjuK8fucTtuNL7udfr8BsHWt3R4uhnuKmnYmL5aNRzxg3juJtMMPo53MLRA",
  "key23": "4WhdVNBA8sgLS7MEdcRvQjprpqa2Vy1P8srgCMF1rtq6FwxNsDQ7ei22qRP3sM1jsbf24udvf5MdksWmZ2Y99Pfj",
  "key24": "3wyBYHx9MD7Whudqe4gxgyLU3MhEHkmrtJxmWx51DVMAMWQyAngwWadfTkHxzVGMmhBikojHRa8iQ8Uq2ibmAikC",
  "key25": "4zZpj4NCps2yZncDaZwBmUshFZz1Yrvdibac6DChaiJ7N1RCdyhvn9SUvUwVfySHgDYy7j8aZdcXKoiNAMpa2PSM",
  "key26": "8VmtZr37zosMSbC3LPt5i4ckv5nP15cc8nXcg4yRaGPn9dkLPaNRSndzDk3ZFw12vJzJbFyXp3vLdX8onfLhSuU",
  "key27": "2uNW43dkxXCuhH26v9DeFBBsqyPzERrMYdkpyKQmK7ggR5V5iUVcbDrjLpU995cELptcHpqQdyyAQ6yHC4rdXiPx",
  "key28": "2gwSLut37p9fbCZgFbzGq5vA7orG1RzWJ3zon4rAe35dwmcpz1NcRZSBVkJ87wXZAdSNv5wzJ5aaZo3nUcQ7NLav",
  "key29": "51NjswkR8uJQRjohWTvgTPcaAs5fua8Wr3jkQS5mpUysB4Ji1dznM5R4kxSgAoou2Xhp65PuhG8TbiLki3Xm5N1W",
  "key30": "4xDH5FSaAhwfsouHaimJhZry4Hr59i5PH1V3SMH5w9QgWJBtFz3s8FhfKYYapQCV6ceWpMuN6dH6x6Fx1NytV4zX",
  "key31": "4kYXtf7qi3nbi2MWBgKahn5WCNU1LYvN26jB9M47mJxQ41voNXR6zBirP6AavPqkTJD27WH1AZXFgZLVz4oACKWG",
  "key32": "59LGpy9wnP3CYatLWubFWPPxGqfMFpmiqso4Sjd8vveUVYJx1audxZ6P3Gons3SoVwnRffgCSMntqX4dpnszpVj5",
  "key33": "5PLexpwDtqQ3tHphMEAE4wRhpT8q2Mf9yEgiFSbAwQVQXGpPXKmV6HMna9TsTrdFKb1246iPoPaBcknNDhTg25hW",
  "key34": "2BR54mK1KnJFp4ywHCVkfxSuZPvRky58iwYtyut4vZcRL2cw2Ayq2aCRVK6kZWePqFDTnvcQTeJweQsetzwzpjGm",
  "key35": "vzrDVd2AsdvjbPcUDCfkvKvmH1fcGPdcfkS8ZSFuSzMxDBP6QtRYQwk74e1RHCzXNusvLkRLnNERoHWEaKQUoMQ",
  "key36": "5B7rNwSYU6deqckd2RFr2sXeP3cRYyU2w6XZPKRs8mPMfZFHFXt1LyHwy4egBrDiLz6B9PybJ3eY5iC5hZiQhbcM",
  "key37": "24jXjaJ7o9e8PiXtzf55AHnGd2eDJFet1viMXuKQygW4ea1shvETdRXbdv9qrk2TDs7bEKHPY6RV3dgKdJzh61c8",
  "key38": "3XcDaXTaLP4wGo5uw1BM9NpqNQRPgndjMqYnvCsGN655XBsUE9GAUCg8zg2oFuP2tHRZtmaPxz52Lkqur7zJmCtp",
  "key39": "2qnZNq8PPwdCARbrGK9RntpQY1VUamyAw95h9CimbpeoqoGn7qysqcFCX9B8yg6fj9EHuQLFkGy49xCAXpLDKQkK",
  "key40": "3F42UfQqNiqSeU445sxy8gqXnxxa3BysgaPQcJqTA4UZDUoKgAqNc4DpRTA67s3gTNkXKzXuFspH2biFjfd5khiq",
  "key41": "5bn77dYeF1qCR9gacAJYh88WMjeJqJbcjBj6YU3k6R73Myi7amFv26YvTQb2WuiT81XLwMCGLzQzJ5mmfNwaBkg",
  "key42": "2Xvh94P2h5KvcSJDUdYwcP5VJW9B5vTEYgPDD1hFLGnBcEWK7jhLNaY5uKNtmHP4t9EVKtTr1ZrKU3udQiobZxpX",
  "key43": "621zJs72Ef6BSKnoTRw8U1MVDyr9axx4Hzv5F99XMeMWfc6RtsqhgMAqGcRyZ9j1se7W2ZtX77fjb5UxFsGLyZDX",
  "key44": "kT4n7wQZTo36dvtBQH26sKuNpceebwW34UtYKpWe8K1tqjDDfJW9jdftJjNoyaZH2JF6u5pZiSEUK42r2U16qgi",
  "key45": "5WKn2ivR3R7hggsDRyysUJwTNvYt6NEnb364UfcYeUKGiCyKz2fL429rGFtDx1Z9tjs5uVvNNyMRKiSe9BedSgp7"
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
