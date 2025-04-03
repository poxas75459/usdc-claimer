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
    "4zCBd7mNghYcUzsAn9aJHxSfFqPKwo3v3DiEVZNqiwAiCJ7uGdA7FsRWqECDEBpfMtNpXCDMrYGzkv1eiwki4fBa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Wce7pi65BkCn785q7FfbsHyJsvXccyBNBGQmPNCTVK8ktscLxcDYp1YQnz9RsX6nFT81KNjj5emchiSopuWNmG2",
  "key1": "SiqubL8gYMBhL94Kn9vDKLroxFx2zNsVfEroQXvk116Au1hPrJfJqJ6m9YTJTPX1ohcqCo4zqfXnu2nqLLmRuUe",
  "key2": "623b5A3g45TvcYYMKoKN654L3nYCbNPurWy4bJ2bjV6kwRGCMeFtHmyjHT4ketxvbR9Cvd8QtDfR6gTX7d4Fh4LS",
  "key3": "5NkHQLRUujwtF58pHpi5kcqWKgyjLqrhNan6fazkJm4TRsMiqREuxaTaUWCdnSJRDeroP9AimkBnXXKqMmnwrTQx",
  "key4": "48z4zmu1gvUUzLkbeK8LN1g5G5bXvmznGtZgZn8ieyg5FFqWksbs12VhTF3BPAtBXhK953K4161F3LWJ85VAXHLG",
  "key5": "2ARzsefaRJvVfD1BGk7KeCBg9BW6DwQh4c4QstA1GVh2YosTHPqzyzXcVnCmAc7U3LeNxQzpqhLfJEvQSsVgF2qi",
  "key6": "5BPnno7n2Spsvc4NyaskBQezbstixt6LHYWZLozBy95oJZqqxQdnxykAAnJfmdsS4kFRW5LHtaXftQNqh873iSUy",
  "key7": "4S7T679dDeMYVwXuYvt6raaQGfLCjhuvCuwaLVhPwqGheBV2Uz49T1wZwqZoS2mxfcacYMKte52qAZ8NH2h2KJy9",
  "key8": "BeQeK2bKRurvbHBbVjUKCAoatrQ5dB4wxbJxDbNR2KK43M8FS6vuQBUjS9fmFG2LA699EtRYvVpzX2pXdodo3zs",
  "key9": "4Z8PXkUD1HFnf4Cztpeg7CgJdMKiWvDrwQYkE1WA7YMyQjVbWQt57um8qRgESKXBaywdp3QKzJGtGNwk2t2UZm1S",
  "key10": "5BCneoAwemyCTMNTqGN42XWE2LHKBPCmF9pz9Wt87bLkwBsGa3zLmfc3kjz5n142xbBdv7iUu2SJMkqGQ2tRZTF",
  "key11": "2HNjdXDwkmk1yL5PYYAgDcjXDiY3nzNg9Q4FZ16FSSkyjHt48WDgxpUphiWngrWgCV17a2GT8c5BFpYFN6MEnjL",
  "key12": "5MeyHSZCSUJrVHLBGX6s7KDBeg5yReyFd4mmLKwiHWWU8EvcgLep9abbbHg5ovRQQTZvRrffeEfXGUEGakPfmFDZ",
  "key13": "vtYrbafvCAWUnB5KQwZy528YAiFaJHHV4sw1wgHinCoPcbkX8PqHE4BhVx6NZFBTVa2WZdb48Fc4gAYbSQKHU7v",
  "key14": "5Nbca5iGWJzQ9Y5dKHvZvjraQekpN3pZFDUF7GNML9ndAdzQVrHLacGPgLNhiAd6o8cGsBrbTjZtGL1PXn7rtVmC",
  "key15": "zy575GgQmTt5J172McvB6dW4Ziu1cMR3JFv9mg7xfH5ShGdgM1RMWJY6bRT5fE6Fx843dveTuGN1okfrqX8KCoM",
  "key16": "3cnQXqM5kFQb8xDXkFdVAPX4fHXKDZUUKSynf4nxVQezEYNpVpr1gKGqtctZpAsHuiEdCD7C8Twv8r1jRWg5DhYK",
  "key17": "4dZzan6Dby54dyKQ38VMfxgP1oX3KugeX8wAwdTmF5xsxYxJBbc7weyqQ7sWSbnXPNCFVo6u2p9nQ7h78aeTytUV",
  "key18": "2woPtLbqWNrrQkPqpLqst11S5iw5CntCRZUAJkapKZZVq75XqkgoJScNYGjcUVw57cjyP99UzbTiogKQyRWe9Tno",
  "key19": "2eW3ijWzUKrX6zStshAaMWx8TVjj2QnBQxStwMufZhZ5npPEoC3v8HZgu9MPW9RC6DXJ7sPueqKC4TEyfHFjmL5L",
  "key20": "3MFugEUZicDkjMk7KFYS6qYCAiABz89R6NrcYDdFkQtPU7SEFcf7WyCSRQ9XLc1BgGDGGWsrb8HVUHFrJbYdtgJh",
  "key21": "2Ssip3DT9Eisk91nfknJJ3ot2FJ4NvRkiQcGnzjTxQ7R8Rc3k7cTEvgYAe1ZKdGnBfncNyyiCpGwoFtXLk7W5KAC",
  "key22": "5NtbYJAw3gpsFdzcN2c2SzEWTvW6h79PkpNDsDp69gRj9694xsY98cH76Gg7YRitfm9JhFgduwkBRcCVoR3otrXc",
  "key23": "3P8hThkeGLgk5r1iAiZwUhp56E2Srv4vQ2vNz9ysfJbwNW1qx9Uv7Vt369dN3ChVy3aRQpZ6wwXDUScoVUv962SU",
  "key24": "JpesV6FWq5RYEZLYnmWGov5dZ7Y3ESZb5gFGX6c8bWhsR5ZD2StsyrMNH6R2FDzobSDFYLReMTxD6kELfrgpLCG",
  "key25": "3aXmy6fyAKZoRdqiEP58kfRAA36uMoAzga456AWR9HU31HKuGnUxG4PMqR6BUocSEbAXqa3Pv2zKR4Ke3o8DSPYx",
  "key26": "4yEGixgRrRdjJQPBeDUR5DkaQvMpuSbxgfNtwZGcjJm3ePqUGUzG6THb4UhCcAPkpccdjFyaaRqXUAc5rCN71EtZ",
  "key27": "2eVN6ANKSPR2AfzvtHCTZb2BCjWT27VgQmhsXP2EwgmdkAtujA9StCExGuCRHPNHFLigCcDVjx3kcEjap6QRnRCw",
  "key28": "5RhELRuRrCDs6SuccYLh4btR8dCkD8QMS5C6p5SUwPYw5VfVrAN3UQaxnaLtLf6YiSU9L4yKAHSDt1eJnBkwUvAn",
  "key29": "5VHupTC1DaR1KqK7bU8tHW6XboJ1oWHDmoripzzznpdsCGKL3tcEkAc5Z5ypL3csocuLawY22nL1LzeKNYWJWTMU",
  "key30": "3Fy8QCJpdHXGpjMCbCcSsXw4Dg8XjuayhXs2YxZVSCacmvSzWYWL7zzGGiFPbKUu1VJF5kKd52r8Z5nsso4wymGK",
  "key31": "mCgyaRvXo17wVmLqu86JPCvmxD2bguXJSREHEn4B9oWWHp4gPaDZc3TnYaEn7c9sdKzZVtH78gTN3uMbyViyyWJ",
  "key32": "FeB281xLxrAzFTHkeGFcawMBC52SxWBt38MP3iNeDH1jByGuL6gQtwgQQrAusTELsruN1WyX2ZPJXuHfudNeHFx",
  "key33": "51uSr3TQbGXr3E3K2VAt1dqXnMWGjUtWYSWfeymNcdRyLhQ5Tf82LndSfJJaTKTQfKuZcF2AfVe3jhAtQMeRycku"
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
