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
    "127z6AefLjzmDQAuhhGcfsNAKuy8LjssMG9K2nndKpshBcakLM2PaA3K3qAe235TBqztqfJivhLPiDXW8ByucrAq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VU9TGxLRfgNJT2TdGjyhcZqjUeKa6Am3MYMeWaDzNjquGCA9277RJNLz47dBra48uhNZ88F8WfFX6491WAczVQ1",
  "key1": "2a4e2Ej2JSPqjybBRKzG4iBXMPRaoHRZmv44eTNhFctPHecnq9uDE7xrUkmNpbi95xHTPR1ERUcazRC3RT6ZPmbe",
  "key2": "583MPGddLRHsZrr7sKhToVSH9bkHSuGVfQyBJeeaFKiZjb4R6rhAQYJHiyoAqLEHgSXKXhi4ACChQzEm2S8yrneA",
  "key3": "4WVX8pRmMGTp9hYbT6tvpoFmNaLYL1TWVqifBR8tGBQmmdxRuyKfT9cJscXGRpGqXefbThPb8ky4mKsSbNg483vL",
  "key4": "3xrstTNEzK1xvcVAm4qKnHtBqV6JN72sAR6C9RVYskXobqxsxhhNACSx8f8ncTGvjihzdiapDVg1Rb9VxfnVWqus",
  "key5": "41ywYnQyXs95eztvdk6PGySnKuzspfbynkuyE3ikYk7ZpWSAnJTAN6x4qxXX3FYuuS2KP6pwnB4uABrqfwZncvVK",
  "key6": "5wZu8NZQRHLbviMf4PWp6AbWAsR5BZu4ka5PRccYXN1bboWWvJV2ZkLuFyKx669qNWmRn1Bg4uGy1hvo7N1maSgH",
  "key7": "J2xfPfVXu32H2rM1njnEhTbrczFJNhSpUR2tdkv1xAzhKE5QPenAaM2DQRVh65dhn7hjtaQ2pxS5evcnCUFFyWi",
  "key8": "2g8ZUZaA7KmSnVUB4AYFgB3s9FDhsFGfamtXEwsNPmJ2vqMq8w2P4qFSfrCwEqVBjPu121tZeuaYs11dij6jsE9f",
  "key9": "ZQNCtUujeZxdo3Msw7A5rMnJdHeZsEg1tjwJp4yGd56Gobk8wWSNr217C7YMJzYhap2JZA2oY4E8GqR2msKziHy",
  "key10": "5ofd8HXEfmkARLUCx5Vm55ksH3BjWQqSpKVkxXjeJbLEiVG1J3Sm6iVhmqBsMHMHXEYxc9AnECN5sfJmt2wstMcn",
  "key11": "5Zet9JGU35aov75dQqJgeFQRqvK69nKP2AZbtoQ6EUzj9G95CLC2Q4pCNQ9DPCuQMBmrTo29DDvFSE7PkcsMCzSR",
  "key12": "5yzdayEYhmajz2f4THJgaVp6Ux64KhG2cSLmtofbuBv975jhV6VzSmgZ3MU7tusSeSoeMCmNmmyC9jCV986EPyVT",
  "key13": "2sQeJr999LYjg8a2rxSjV6KP1txtgmmgYQFjKfx5fr7Mq2sC6G7S38xLmrXDMzH5vTwpQ3KCXEzvvKAcACcugXb1",
  "key14": "2E4rSFjiXx3aw3XtpYKvFL5T47RuCPCCqikPZAVBewGJKU7hKiLph2CPJS57HJZ1HxfKkvt8w4LTSxkUZ9nQeuAk",
  "key15": "2ZkzhEn4Rn3nHbuJkZRtJY3bA8JnWmaq175GGijP3FuJGsXs7mhhU6ULyQtEarHcGeYw8oB5ZMc1y1aTsaqLTuzD",
  "key16": "qkYuDb67nnTv3efEnFxdbLCm3efE5UUGGuaaCBq4ZULRFvswhjroREs5Si8VD5pstJ2Wc798gYJEx7fQt1S6Wdj",
  "key17": "5fZwLSZNNFzyRkcse6Na7QVGAxNNkECDMmsrEyr9X6UD3DMgEGQ4HoUiqEpS37D1JSo4DBTjYM8EEVQVDBbhLX53",
  "key18": "54YK5UbTZcut54ET5xoBdj7NqdApz52zZJq2QvbJb9tAbB4XiFeF6SsbXVDEGMtutBggcVQqSChWfDN4jLXEggzZ",
  "key19": "33xbwVbEusbTnpodSzwvrnw98KzA6dbQ7ALkD9oxe8nAN2kR7eYB1CupZWpR6V73VKnhgPDoc3x1NJMfKRUS7M4L",
  "key20": "3uRM7G1V1qzGFfoTTAZGqb7bxA66SXx8hYycGgYW7YvPrbHMBmVvFnM4DCWmVXwiK8PGuguzd5xajF5TJvkjg6jU",
  "key21": "5t9sYhswL12FgLjdcKxVX63wmyykDP3BT1iaDGyrJWcCUL9JjW1kox9iaz1eB2dxz4j2s2Pm1WeDPeSLh8yo4xZM",
  "key22": "3AkZyFTVWhF4fsRi6tmtRNAtoqSBCCqqpEBsaVJEREVZK4NLzypg7ZW97jTKsga6fQFbeDoTXMU1ZGgqwPMxzexM",
  "key23": "2UdwWEFWtBjfqZgQeoYg7eu7rXyVjxiWX9cnFJDnT7Gxf4Lb3iHHGpmKss4ZoMHW5VB96Yt3nJniM6EgUfJuZZ9",
  "key24": "UEE9ncgmEasYLw11NkpVWBq4v5WJCS3ppaXdwA9qjL8Jauct976mf3SgUgSkkfhi1YjLuTAAcmQXYGFrUyodNSj",
  "key25": "3e28vK4NnuENuz7Eoj2CcRDs6E9HEokMkmZQixrMmjf7swD24ZUFWJqTiD5D2pCq2WYFmNKFQLQKL959vYJ6wNSd",
  "key26": "5tQDNKZb5YVZNaHCZV8PhaX9xRJ2p4kTD7JZ76QSBS5tugnhrcG8inerPuASTbg4pbDpY4GTRBZrcHYw3d35bPXB",
  "key27": "5acjT93nVx16xeeWirkFeBB3f2F93EkGgXhHSyt4nBuMi6akiJCp4hfyNUEo74YSyVKkEVEzsKVkwDqweSWSHp3L",
  "key28": "5YQQhJtGPbsKFT4W728A1YnUk73VxAhbGjUAjrPEC24VgJYgB2Pss6NgK8mZ8WyeR9VR8utLfJrJwvKGhCMPDEZP",
  "key29": "5vwnK6ZaghzmJ7EB1UWfhK6Wd9FaxVtw7MJcW32uVcLHX1kbHXduFNAwSH5schXCTX4imLb7MM3moSZ1axd5DT22",
  "key30": "2nshEw49uuLvsPvs5fCL1ByDKYjiywKxM6raUfv3NwV1QQB1M9dKzW8u7eGxqC2jwwnVnuqRpfnBjmB5HMmGde3o",
  "key31": "2XDbzFbcpXvy6ffwgd3GCvzJmSpqA25NVUcMZdRMNSKPocoz3TzPkNvgoDNFXZ5J4Rz8wnHKhAW2rCMxxi1BGHw2",
  "key32": "4rFyKURAwdp16Ht694X2fcJAYTompZXAgBH8obkHzDxkKmMVRj8xP46pk6UBYMhWT5oVefsVyGSYCCY1Q3aEg9EC",
  "key33": "4JQd1hZsZhKJVjEh7QxfVxAhf9EpNo4s5qoVGCJKgdr6fUztjkDGeEm3JP71nyqJcucs5nfThGVrNWQAYTQkNsfz",
  "key34": "3Yx7Hg3WTySEdjhZNp7SDCg7ESaGcWEpG8nboCkFoRWzs8tbCfvrEgzsaHuMb5AL4B4M52e8SbzboQb5kZ5UjKfj",
  "key35": "RcC2NZQjwaE7tzkV6eCXgD9Vb7bsprTepWsQeem1pFXcSNCX6uB8eKCTYXdRdDDPZggP5krDFdeqdMmZZkUNxdX",
  "key36": "3q6jfNTsJRZvSoCUeGttgQ1F9gTq3cGqSfg6mPSXANfc1dC33nXg7L3HVT5KkjE9vmyJo5VUWmsTgSbBarkYPTiD",
  "key37": "91KAQbidBGbNFCBTmaRUsLEzCvj6mT1HkPzcT73jS3FWMKGJqiro6pu3SKajNBnGMq6tFANDWfQtt5oWk217MUm",
  "key38": "rhSXbnL2wTDSSC9atMeZTYsXqCM3VnGwcGGcHJ2ayKQZnC87tNR6FdpyL7ppbiD3zZGhsP1jpu4BfRy66Ux49sF"
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
