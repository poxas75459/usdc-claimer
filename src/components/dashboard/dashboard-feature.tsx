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
    "2VjLzSHWxdzhjh9ftCDTVy6dUmBKJ39eH2Yd1kYfgG5v4bwc3hVTG3Fahj7oWQqqYTFjFMy7is5j4WpkrTgMpYtc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aBfjhAMS4TK5f5uPxJZqqcHNoyU753y5b5HpfsjGEx2jytbswAmALniSiPB5UzkX77GavhVfCFwHRtPXq95Cox7",
  "key1": "5YV2naPMVnvT4dsXVMHfjmDaKC2P4wKnTyLrymMfzVt5wHEvD7RKRGToz2fWZJv65knPengiSF5r3pNBD4Zz5PfQ",
  "key2": "4rk3UPBiryWzBr29t93drg6MaVM2HaWDFQcRf7YvWda7arWAPYSrGgmZe9frZcPzQgmPLUAwceyLQcWmu9H3nFjG",
  "key3": "4ca7gKPv36KQ6GLQ9eeCiNqWefYcavADEeRzgmc9xvjRpBE2KNNJ1seAdSkTANKbbiS1dsGwdTcoCcZByfQWNufe",
  "key4": "55yqjpfqSAm9iwZP7Sx9TD6joeJDt4nYVuTEYXGgxNCsiqn3suwxS5tvhVNyLtqRApDGuZGoRkb1Xxvgv2tP3AqC",
  "key5": "5tzXQ8yD96D1aBJ2bthSpHGPzSjocSE6JK7VMbB1rGFGmZyMSztbQ5UdbwTWmA4vmHRFrk5skyWJVPhgH9SQd1Sd",
  "key6": "46ph2yMhK3XYPv3oVsaAbfF9tvCRjdm1aXyRydcNp3cq1dCME4uUKcL6pB8aTWfFXziuHJpi6sv2sc6FmfXnwi8E",
  "key7": "3pwJmNnKEHxUEDeNGPYTPDrpkfvWehrxpVyQCHXVCWMCUSzYBG51qogf8vZkWqTfkrTc8dsqYAtGdvZcZhcG3qQq",
  "key8": "4fjyJpiEAVBECdCQpemLPbVw3oQeNuwVxeUQ4qYkQK41X2UDye6Sdanof1sUTUEYLrKiGwia51nc1pU6tAbLAj6G",
  "key9": "2C3pVgiZtGa1TaA6Axs1ZjbS6p8uH4jyy1huURV3ER2os11yJF4qe1GnN6wg8nEFnCveAG2sizaGihZi5xdcqfrs",
  "key10": "3zWpniKPmxTMhxVYL3or9mm6ooN3qvumGV4zesdq4NPJVt1EFzkqFEhPd66xKCbmQfrXTQGT4E8o9ZuJDubqee4V",
  "key11": "2ZSVEy6uT9b6sW5LQwNRnLJFgsjTXWFzuoreNos14Mwh7v6na7icCGt3JzFptDFWtyWxC3HojmAADVkYPzo7mVJR",
  "key12": "3bHRYi1zfvKxMXX6QCuk5WqMAXJBVfWtCWoZYvSptE87W5k6CMqvUM3433Z6hTmRdYcZ6F8dMe44Z1XzU2Jgu68z",
  "key13": "2SpzrRwizyAxCrrFdmyLnG88S8uvR733PAxMuHnhvsrss2VAEURESLzWxc9sokXrJHNxuWSb3pkefxL3EMFCof24",
  "key14": "3xYYGiik7hhj7KoEEZUaAuHyNMUHGwJ8gC7atdNv4KP8BVudzaiLznokZELJdnPhepCA1ue35WdXpBsAog2dNcCw",
  "key15": "3sPNj3XgN93Qzyeb2TeUaMLEPHNp4CwNC4SiriVQhXbBGDHBDbF6srR1QmcdDoTGbC8v412ikad1hoqPXC15SVT4",
  "key16": "3uGAV6KMxYw2siuBXQ3k795dN6CQFwuiiQr7eS7PrJQipHje2qK2iNxw9ErjBCPunwxio1WdshnMgmMYgTemk9B8",
  "key17": "39j1JRUYxqpc18cuEGWuDo7ZXTSZHc4NLSL21pdisLKxRXQNDuQARKPPgApYXEmRXX9hLu3eWYshEXSdhBQFXQGS",
  "key18": "5HY8PrgEeXAmNsywNSTYo5oVRWreytdYUGsEWxGihLaXPECBCJgd9PPJK4iaVkQ8tTy7PToZ29qEjFsHjzd8wf4g",
  "key19": "29AGY2ygyk2VJCuVcTTsNwqnouVsx8FkJFabAV9GgY63vT4dHB6HmxpSPxFYXcwEsCTULQ8GDWtWDSgLFUFmMXYf",
  "key20": "FxLTwsm7paVSAupvFJsgamtgSFzVH9M5BpQCyQiprp1pUWscKpAQDM8Z1s86sFkY7wpEa2vQzAfwJLqg84y63zA",
  "key21": "27Ee1aqptUWRrRYcq4f2oK7qksxnZ9byFCvNqWyP4cbXhnWqQ1JLng6Mt2No6525XRSXktcD9932B5jMzN4nUbzy",
  "key22": "4eYjYm8Apni4vEiC4DenAM7UVrhdc6c3zaJ4uKCE8hR8NdX5Lr25avERwqYtbdeqNSEnDPiatzikePZHMDMtFcoN",
  "key23": "rtDfR7oFjmZ73NYC2vSQw4XUvxgnWzFwRPyUHpd38MXbRy89QG1Na7R2eZGdFNo5xVCeQAhXFu6kLBvUea9aXph",
  "key24": "5uS6GgyfhMaVSCFmKcCcAWJLTkfHrrCgVcYXBtywupL6aP37BqkJqdJ4P351RHtfacFuqgq6U4fFae2BiVihgt1E",
  "key25": "56VarrPcfWanH3i5K9kVZR4Acq2S3g3rrhqevStuKtrYy6V6qbg9h6oJf79sFFGBaAWKXo6EWqNDa557P9Uhq5kE",
  "key26": "2QhuPcGUQoZaTHpUFD2jPac363epLnsL9tpwvMLNncvfzuLsqYdshAZ1z3kw29vKqnFYf6U9ca43DcnmFbnKnvUj",
  "key27": "6kCCzvchdrTnv5QtMLYxZNu11xyBHuMw1cYm2p8uFBb94xjXcgjXhcwAgQkKEGbF95P7Mx1miC8ZFLQqbsv5uYN",
  "key28": "3YH7K4EJETxBswSj2xw964HemTCYwfsNpahQekU3Z2bipdrzqtNdRHEh7GTB8jtt8FSbo5hUtbsUV8nzeFv4WbPB",
  "key29": "4LkJe1NVb171uayNKgRszY3UWpAaWzW1rJXMuGBM4zXWvxNfuiyoW8Fw5kG1TCuvKyjycG2D4mC3adGe16ZbjRb7",
  "key30": "29eQKbLjeZHT1HFD9FzsWZadix1kDCCEc5TgCvJ3Toca73v8z1FxDMYHnsY7eUYqL9HVnoCiJYkKBeKYgiTqYVJQ"
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
