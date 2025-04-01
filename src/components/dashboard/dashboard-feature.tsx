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
    "4NSi73ECMwqosRMnb2iu74SCJQypxE81jBXVFwuZNJAd1VoPjxvQSoYwUE79mLmvGRcUovihpiVLVTK5oJZNeKut"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H2yV5Cqsp66TXghiHTjJW5imFRXazVEkYdVEqg3YGrWNganwsdXL6ozvA9uaZW9DMfzcbSyUgcE5hdBTxLZnXAJ",
  "key1": "8xHje8yBCQ3JT8A1bWfuuv2XU4XCeuz9SbJkLp7PXCc2J7NiRQmVZwLEqJYhnJSGkQ2ZVqePGAfgwNP3xFBq7B6",
  "key2": "3CV5kY7fj8Y7Gt7GF79NnEhxpy2Mw6wtCC5jgV52KFK3Lz7a4waNWwDU571wZgUwTqBBZMSoqandiTWpTwZbUA4c",
  "key3": "5CzAp7LJyxc6gQqE1dgaoLjDYf2mutqzfxy7TQ4fTjmPQGu1Bbb2qnYubUP2M6k5YTo2L8jGpQ65hMnbYLdMpksx",
  "key4": "2WuuBGpheVX6FyAqe2LubwNAVGJamRcExtBYANURDzTLffzhthNHGVHZbZTJ1XNLPQr9Zak4P4DdsZm7Hy9xksrC",
  "key5": "H8FDg54g8M2SMWoBYckJWhM99xRDVidbeC93my61DNoEW61rAgrkAHTYfvpKj2AUf4Lg1uU86hruRpdHDV615n6",
  "key6": "3RXBodD9SvmKrWhGdtoJ75DBRQkrtJoqc5XEaRj9a9tWzFuiPsTb8CTLZDeeCfwpRwP8Xt8FtTDMK26tFPsbXVT8",
  "key7": "2tdGA7ZXmBFJCus76CLjn6Bo5efR4sv1AKNn8N8PrS39m6YLVo64dHpKkcCg1GzwMH4bxHXRnWjrAdYpAgsRAvEi",
  "key8": "i8WZb5k6hx4uE6Zzm4hYy95rGsGtvxd7axtmLP2qVLRXPgih4TSr6RpwM2AsyoWyuPr9c7a9NPx7xE1VY1FP9Vv",
  "key9": "5CTRFZWZaJ2JC9UeeZQReL84mY1bDT5WiswoK7d1ALUZEk2ozpEoMDnbhC2LqQq89cqZ8iBbxZLaWP9Y2t8NRGv6",
  "key10": "5EbMNyh5DEih41UgLZVMtKtgHzJWqZpvnFexM7QrtjttkoPRijT9bLzdz6rmEBJLJz9j5P1EjcC6fmvVmoidbZvL",
  "key11": "61JQ1P5QQ4XJp9ozysnZfMUqHsRCCPbgK2HDYrECTQdWDiDK8xWVqs9hU8fM2VtxK4M2QZcePAk5FRguoYNLGfR2",
  "key12": "NFfMVEA7xz14QyJ65YJYqyKdR9287m69dJRTdmzr6wJgiPSeKvczhQ8TN6ZyZqQsh6M1AYdaqPoFQY8c35WKokH",
  "key13": "2d8ddSGBeswLTSoRKDha39tLyLXpuEqCPdvpRoa9HojnRCD3SRRe9oDG5ZPtAs9vs8Nggr8mvBTm4WKWoYpWJcuY",
  "key14": "2viM1xDXHN3S8xxoWk6VLLdYJzQExbpdxAogoFhy7Qh7GiteAQwuAwaJPdufQ9j9oAjAckjK9up6yyjqKEfhMJ8x",
  "key15": "zP8tTb6aDuy4rqWwFEBeGZqWheYGFEQ1RvVQazghGMwcaJXZTgL1KMJwAaUyFoHgg2G2hYg6PTE3HE2pyZmAecY",
  "key16": "3WDjdBcN9ukuYzptfbWLBL7cYLLYeJwALn15oS6Nbujc5DptfMW4LziiVVVV5rcCvMtqnwbgvnuvokw8sV3d6iQt",
  "key17": "MFQ57aZXFSzvdttnwr44jRDxnuBGsjYoFDJPFS64CDvDETyyEqiXGf3E6Y6agsidbBEbNU3eGxCLG9HV5zcoS9L",
  "key18": "4zT7KbBPc7rnjL8YuW1iTtSZwZNfY9bSqgLueVaT95nN89Gq12bWaSgGTFYpUQzwbFXS196pnKk91MJWYcJzAPJU",
  "key19": "kmNyVBFTtjsU7tQKXyeyBtJU5sGBZNQFxmAFmz7XUYoZZvZxtj6H1VkEQ36nv6ygnTeAJCtd3xG4fxBoJm39JWH",
  "key20": "iR5ABJ6NR5L1D56TP7nLLTB7oHFBDGKRuLVsrjTc8UW8jVRVpBvJ1VZcmpGcNfuDPXdgiZMPZxHWHz5ApyKFzvj",
  "key21": "va5M4c8EKpEJhSd9esdxWCLrE13HXNg7re4McqnMMREmNF3GWCgFsS5ErWavJUehnUGnKMhxcrYcmjJpnCtJQPf",
  "key22": "3w7aGbKH5GQuyehZmGJfCQmRTuywP66pqJWnDiyLrkFBZ8v5137M5BJxHr5VkiLMwhuYCu1WMtNEwWM4TRVnxyXu",
  "key23": "5eNhChVKtN1wPACen1XySPK92aDHDLBqPAcyG6Mdb8c48RUXz4jXtDg8bf1akSUXmkYmm3o3Z6R5Mfmqu6LXh197",
  "key24": "4WFM1cDeivqRkK2n6Dpk9GB9ZLKredDnZqKyB2weZgEZypXurazQYDpxWdXi64u8q5TtAGHAUaVab9fzxTmeAFA2",
  "key25": "5q3mrwH7EQ8oFYppj5FeqNP4a1KrTMn3PHkBN2R6DcGH8jhBPaSmjp2a2yRV6osGW6nqamsgmdLFcnSkExqwLwe3",
  "key26": "bUEHixaHD4pYyLpcRbGJrgHpH5qmvK6BR31ga4no8WUKL81PUcpthdN3dHLxMDR2hjKu43qe3Fdojef3oZG1h9Z",
  "key27": "4cCLEC4Ru7pX7vHNYy63toizNyCZ9pVHoPWTYpdQA3wZbLwhwTpt2mUxkB1qetZiuox1PnoR5Dd17wGpWuaG2yA3",
  "key28": "2k5sG8PCCdesr9KF92TYxQd9u3kAxpdB8EtaqRbFPiSE4YgYXK7aA4BggmDxvP8FzjvmpPft2RhPBMTWvFK4RtNp",
  "key29": "3RDnNBAsCaT4VtLi77mFMCJoSrCez7H2QLjZx1RLKmYj2cJRtWSSCikyLKDFYD2rexL5mMM8xUQxh57Nhcg8tc16",
  "key30": "3xh4u1qFDQT4gRQsSUR9iNm9B3NEjpjUG6pZjTnosPaXnHDsUXFeQKn8aFw34Foo34C3yfaq4gZZXZTWE4jgwfXj",
  "key31": "2nnCwFXFfxEuyfZksPUwda9XxiiaeyDXkHkevhpJBfr3qkENGhM4LhVDfkpm9ue5T1oMRTZamFW3kVcCrEswjcgF",
  "key32": "5rkBKb24g8ebr51PY7h8Afjy7t8ou14VM8YsGawbB6u3fsEbGD7wXU1d9HnA5BEyK47KQeUXrChgUfNj7APCprh1",
  "key33": "5YJuT4GYmAZsdLzkMxS8QgjCHBQt2Ec2bsq9cWtdQ2jgZXK8HTPaowKBLyQFeQpAfMJibx4RNhdaRPAMpubUF4Fj",
  "key34": "45NxJme4NbWBCcZYDGFEuuXcZyCFZTzsxMB1w1TvVtwMHFgLc1t2Y4moPRcxPMAZoQyVEGSvNKbB85Sc5wGfJAra",
  "key35": "5k4RYkaSXWc5SvPB9tvCuR5KbmbmYYLjQQohAgAZ3Tb14r9fzdFiPqH8cWbFU3aRrfMVezuYmHwT1xszy7eqEycM",
  "key36": "4moPkgtrdcJ8qyzzqyXwACnze9m5PwFqwaQKqJdnRhkFzGeEWAzZ4xEWAJbEKchusEEmHbCtu82c22zJ7JG9Gofj",
  "key37": "55tvy6DoSQxQSNv9dmZZaUidRYxasACHto45sxGickvDypFbFdA5qtcLMiV3aHHXGyihVJsMkhwpNX9Zi6UJaZqE",
  "key38": "4TgmoQzJWTgT2b7fKdunZ7fsh9eUseUjffKNTcv9kNxjRWS1ymWZG29f2Rk885WnNAh3ieqJVyHmEzdH6yNcwRJD",
  "key39": "2yUBKXg2q6hnH4vgGhtitkKhFopExdM3Pya9CWhRYHVWERVuTNHKRgzM8qRKD56RWm4NGwGG7dDJ88oqg4ScWShy",
  "key40": "22uoQWF8vMjiXP1ottxoEySALeL6eMkatS9aXVYb9tYwyHfmKZiNvupjukQV7MjrFfVF2qULPwTnYESAc7iWhNTA",
  "key41": "5opQXiHrxqzpnHMrpR9RitUDubCEinpKAo5NsoS6TxRdAEFev7h2hzRt6vaej96Dkc692fZ7K3keSpSGEt37YE1j",
  "key42": "2HCvE49eSQetKniMVW2B4N2MCiQq1cLeUZmTkdX1RMEUGNSRGnrnMjqkWwPCiXZ839B4EbqhN6xGJtPG1MPpu6Gb",
  "key43": "4j781KmSyJBDS8MazXpkWbjoS29F45fYUQjEC6utiiKMDqk1QWcfSuSBMpHwfXo8JkoLtcyTn1J3R2QGRaKjSzg4"
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
