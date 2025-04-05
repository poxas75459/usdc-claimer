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
    "3ZyNhFHqvNE7mCW6ktE8h51d2UtBoBBDaPsvxsM3DLusrZJBcE9n163RanzDLcjfC8dgqGRTLcijzL1ndLkmtdGZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QYGSkeMNsMq21juq4DA8AeyZF1VJmN3B7QAG11mAWg135YuzLDbF1ScY3ryvXabrephRVHa9Ww3XiErADVC8Esu",
  "key1": "3psBLSA4iKHhksUkdcqo2Posfsi4PVMh2RAF6VbccXe9boGwBQDyZSqtQKRAF3PLG66aCo8rThVLavuhUaMYHPYZ",
  "key2": "2U7AsNkdqXCfM28SUujhyJXs1aXmahouH7LFzdrQmREs4Xfms5Scqg5PPHBGWF5zDsGeoeEj41UNZDugqv8LuQtZ",
  "key3": "2mEJegknr7J6GESpRMb82QXiYbg3mj5Lx3BdNenkumVgKBtvdEEzA2K3Kx8E5mmHr2HXA9JoMTg9z3rgZ9rgwgMD",
  "key4": "5Abhbht7AvnatcLaxZM4btmwKVpRMjNVDpsjiXVRVATKHjE8rPF9vWpQeDpFihaibBgiNbNQTvbEZkxkXrzV1JkF",
  "key5": "2WbHEkLZGvFjEnvdMcegPgaKhQDJ7kPPniypD8EaMHXcvQ3oSqAzrB5SrgCihGPma3vtFtkoKZqNL4ZxQcS38nzU",
  "key6": "uzPY1crb5DDVALQ6d9fzSMPdk5Tj9S4Y7vgjPNH3JcniURMYKTJ1E2JeBpv7wY5eGPXL7HjcSGjxD36zU4EAxch",
  "key7": "48KE2J56pw2LKjrZvR4VRSkgUVYK6YzSNYFdbwZ2rv8fFztSpn9K3hnuWKGp9GpFBYcLBp2Fe1uux7CptzQNrHsV",
  "key8": "fYsshC7Cb5nxpBpKiFdUJ7zVS6KzP2TpakaH4RyFtKRtwkHAG7bTRAtLzNnHGHYVDFF55CXpEcx8RzyQKttLaoi",
  "key9": "5MoQxoJuBKoQkGoMq3VfjizDMC1aqUgxUCD26hNXwRXhUm1u7RZHKUmkkDoTT9t3WqwCa4woQJVrSuimejEShjgQ",
  "key10": "3ND5LU7SvR9JfognFZHwFfaq2Aq7ev72Dt9oDEsKbv4QPWPHENRZiLWA6gDqDkRvzSkcP6DSuwda1e2brrpRFZnV",
  "key11": "4zA3xxZ6ZM19BbXUmKKPJLrKB8dge6MtiRtZ9sPT95rjrt7pPiDBmUbifPWntjQNrMBsqYyxVpZEhdjMhHq8jGin",
  "key12": "2asDUpWWztL6WuQmvhobBuSoP6vx5ZNJ17DWfSzMZ5GScCzY2vJf9DrStLyjN4M1to1XHXkqxzgXvPzGddhSTWco",
  "key13": "3qpBn4R4SAKEZ8uw1SVb6LoeUXJUk6q9BoQLGreTkFZvrE3fjsg6j6UGDssJEB9SP2zdzPnhMMB1c6Vk81DLhtV9",
  "key14": "4Sdfg5XAQGHDedB91wUuJkaZjR6HRdV13GkmCZDjTVKnLvPbXyq36fMTckokLXVpbmqSwG6Q1ucjwFKy6u7Z8DyR",
  "key15": "4Q9bb2YDeMq4VkxZTsSoCjdyC41LtcxADVAbEcxPA1o9koEKmhpX7LUG4gnCTHTFe6bu1meSzBVzF5oF1e2FtYKb",
  "key16": "3egnZduTQuawT9PtKSBjPoJZ5dA4vywmjeMkrfZYMZmWedF4PDDTi5PnmDWEiZaCBgTo1HiemXwUyVWmvLbo9hw6",
  "key17": "2UfPH5dkfTuTPLCMi3h2wDkDDYoMAwtgV115mz9sSMNkMvuYpW1XVD3frnp7vV46yHthrGdEx1NJ4pSqtTg6nAHP",
  "key18": "3o6TUpaGNhz5RPEVc4LUXXRACKLx5cvBLZTJ5vgWfutUvfXBYCy8fmXaTozk4ZAWFco6ef6CTutDhqSXNgRFV8We",
  "key19": "45pzDxMeggAz9YC8G5KKB4ZQiWx7Y5YoanYqR4VpqzTSeW1MK2aYbbmF7AApbCg2viNv4bUxENqM77dULvcYBrcK",
  "key20": "5X33adzENzGqaKi3K3SQB5zw6Pz9hnFZxxrGEEyKBmbormPzhX1AyTppyT92U4QVxVRRedgeGwXzoAgysK4TFnEv",
  "key21": "5SW9yogafCFFToHQyth3mzhufYtNkLhnsSFabwe9Zjcp2a2RwbJcNnUHrspq7M1zq5PhPfJMP8vN6LM7uE1Va7Vq",
  "key22": "4AzbKis8P8VVGW1Ux8Tunh5xXuowRe6Tfx5c6ghhJBCHfv2DrbZn2zXTpaAdMXPParzaYKM8PJb1s152FR3bn9kn",
  "key23": "5iFhUQ69zhcwAvxDRR7J89VyJgda94sPRi99ML1AXhUcRBvKnAX23jDfMSbrCfcbUtkCub5nP6aBmV8pA3xpzAMS",
  "key24": "2FcvvB4JpmYe8aUpvy6d9Jed9oedsXniHWm1bH8LWd9a8qUeFLTjCHLMihNZjJUSvfCmNimkyw6GW5oTKbtocLzK",
  "key25": "2CAEcabVSj5cwDoU9Lkvi9xfUzdMfZN6NirqTCXxiRgncVMzodpQ2GqRogSkJmBJuoJ6jQ7zCkkep6XrdZbedxwk",
  "key26": "Dd3eyE55H7m3bRDxcDwGhpnRCWxTTT1SMU8F3CTbwiAiwUnLgs93xsqPQbpR2HXZgc9NK3AttXNrTtkmHBiVTiN",
  "key27": "LoKaNq75CYSrF4M2ATr9rMMk3W53FzXSEa3xwRhdX77X9kDReV5evfjK4AqSYSC9vNDrvS7URmSFjgCtSJbqqcY",
  "key28": "2oKkHX5uHXt35RPEPKYi5Dc45HjD4GMD6sV1cpkfHqN4LYYBvPMC2c2qMzvnMQZqvfG5rMTy4ydnvg3g9W1JFFkn",
  "key29": "45ifZtdrSYo4yizuvtrARkRdQXgdRqsCHWqdamzMQmHPGcUrMkDRTLcuBYNNNzgsRHEH6SdYcnfB1MRCTrjB9SDg",
  "key30": "M2uoUDo4ktC9wrj8w4QkqxXJjcJmHyy4bHrcd5Qin23ZFaCyY8hWnpSNgufCQvFgppEK9an1GcGaghHPRfDegs2",
  "key31": "5BqhGiuRZ9LMqoxCedSJmHYVTvgnNfiU3Duu9QnQm7yHUPvfmUK4S3XbZi7D5wgqnWitd6iwNfMM5Wo8x1evCL3g",
  "key32": "5sKs8qdsTYFYeHdjNg7B6wGaBGP633DNqo22HXmKTWcbFRkwwtPGadPXya7F5eRP8V1Xrk832DaG9i9idmj47Adf",
  "key33": "qe6x1Uz3VX8ViG3DFD9cgrJVnaeHqiX6jLG81okU9R31reKQz1F3Lpqv958FRCCx69tixMfYUJ4yKBj5PhEsf8g",
  "key34": "4e8hTsjTxChHQsY5pqFFhP14J4hfZhgHgEorZzUMiu7oYnsrzi73khFbuxWh2KT4gN52dQT2XtuKqAKUGZYgzFyQ",
  "key35": "tBu8Csj15hXD9Gf7zNTuCtpfeVgDMr6zYhABbkp3ci8yg1dAsUFVjfs1XxyUoyUXEzZzLtijpsXMCp4AAyXZnJM",
  "key36": "4spBe7vpZL33CCEgaNaL1W3VtNQPBYtRNx8KR3BCbX1r4iYoeGHYZ5KjH4DAHpSF4MydHKtLCjGYQfZTgtMWtyb5",
  "key37": "2mMq5rQNmJAVYcTFxwbxUuqBVBqeqUaLeVwzgi33eR3dt5kxY1PeBkxiN3anainXwzzRHZeYKFs5QdACwwMm7TTC",
  "key38": "2CxtARN8sbbnKVrqVLQY752c47QGj6oqQ641nurX8xWUNz29o82jjVcfkpf2rQmpBrF5HsBfnAscQgPFzezWH34A",
  "key39": "5g5Tr7VYGa9cANSvCrqqEMdTYQJpwTJhJmeMR5yMHqDNQ7hsDjDfTEHVhNEcCxnLqfxXgGpWpivgJqgy6jxsPucx",
  "key40": "39PpPthaeLyLZpkL3ApRWTkrAvWq8J33myQjXrk8z3mpy4UmWHQRAsDmD9xRm1SEci4uwqWTeYV2qQoa6YmNonW9"
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
