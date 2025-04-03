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
    "3gnjk96ZccuFt43vHeViNHhi24cF9cTR9VZ38rWCeVLtPZ6iLDTzxxxikZWKnkAApDXaHGj1zQD4QoHLUVM6gjJx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EVPmic4sfDyZxxFQq9PRnRt6FuE5P9nA3tXjPYMMrzddfU1RxJsKewrL1DD7tfD6Cb1gkh3SRQnMyKEEJi2VNip",
  "key1": "57qUqSZfhm9r2EwUPM2TKuETzpaGq7QbtvVbwvFct83DSRCJxCfwmAihAUmaPZAFjnRN3eXEA1C1rJQ1PQwd7CZU",
  "key2": "36tKWCAQ9WkF9upuNnNMoqYsUrSFgZnTQFtUhaPay1r9PvAjopfynBwL7eLWNVxRo2wycaKshMqN9TNJWy8xfjSz",
  "key3": "2vciG94hPJfR667ABYZp7Pn9RvU6rmoA2vS9hBdGvHxC4iXAmFe69wiLJdifnu2yeabEETFGu2SRq98Y3ZuHGHQk",
  "key4": "62V4CurHsut846zsgWQUMExz4jZ7KmK3c1Ba7ad97Bb1VNj7JUWpVYdSycvGCYNovA77AHPzMgHUFyb2qYPe7qiX",
  "key5": "2NWRRuvPgz6vVbvNR2eDGdDbeS4GKGhCf4WXQSEFdD7pyKEWD1EGJU295G92y21X7i6MWaq83RAkS8aoQoZvsSQu",
  "key6": "wzrkqEif3E4VHSNvsaZAGG9orpLi2U8KdXygdTUH94XEmDabHwj19eyqTTZdBcwszrAXB5DQQNFCcjJRsT5Hq4X",
  "key7": "5X1W7jG2QabnxiPQDRBZVF5gdz43NQLEo8SvmMxS62Fmhe1EhZ5ZK62yfk9y5nTgRJBpHvRZJBCSrhtnFBUYuyVv",
  "key8": "2UmKrnjhi4qqKengyDsfjagbFq6gZkkVDifBAhwicarJkhZnkRG5bsPiCKLFp4nvFkUSPPFmXaAXnpUpb7PRJR6R",
  "key9": "5Gim9i5jn9v9UNvhR8Gqhv7ewmEnN6ZFXjGC1wPEQj45AL36hPkk3kW9fiZHGiP9qUL5NCgoCpVrdxwwdsBv7X22",
  "key10": "FnVCSGe5FDTCXiazf35fNnbCRqNjpbFBu4FRisuLF19wmYgMSkH7UdU7Ss3Dy4ttxHPs7ixfDBpjB4qKACJ2kJj",
  "key11": "3chke2h6PcrvcURRBZffJ8VTVotyrNXCe4aPr7pxYyoNHcGnj8XANcPhUCoyfhkFDuwPmRaubUWfJF7JZdnuXx45",
  "key12": "2Tm85FUCwyS4U7LJxJ5JQn3BHkjS4VuWwFC9gGp5eyX5pTPsZpf7zbufH6aWAyMCXZyGLNDna6FAEf5bCu9PTroN",
  "key13": "2WNRgiwN8wUwKRWHxpreww3X9Q6S5GhaGA5GbANNRirELVzCmLLYKQJfSfu4FMkU6cTaxGosyMhdsvjRLjg1rPAB",
  "key14": "6BrLrRhXAe1f52auZ4qCyRTZvr4SAt7Kph7LrNo6s5RMb5LWa6dorXMi4sbNQSsG162zSNZHZbbzKJ5P24DzQyG",
  "key15": "JxfRabBwhVcipooCEG5YX9zojYcNRKnGLvtjJV7HCuAHK29hmdWCHmNtw5hmiamPG1LHZTSFoGbfKmnmK1soPsu",
  "key16": "2dM4ciU8PjqVGVRFqLsB6297bius61ewxw3ejzVYgw46iA4SYprWiDNDt79NZgEv96D1nh89H2VrdHwH9Uk9kZdd",
  "key17": "RRZSVf3B2eUEG6nYPTiwYgYunNfthr2g1JCmhhaWRaw4NTGvwi7hNmQjVp67zTJSHCS529c8uQVj7PqY7Zufkyr",
  "key18": "2MBeGeAurptxTh8U1Uexwgw2i3AxyVb4ZdtMAZSxopupiAVFfegJo6dVV9WPzYdpJ1segTfBshgUM9ZBuuk9zBYM",
  "key19": "3bWR7WCDPxbtWzCn4kq79F4uxKGqnrZKpqfPKyLRbwCJ1cUvXh5dLomuunNp2n7W97VGqtfVEcsey8Zbs2qp3w8",
  "key20": "3tae2ziyQKg5HmTWxfumXcWYUgBjuMPMSq5AbYUzfJigjEZeJM99SscrEjBiqKmmDqF9cqbXaY3rGZbFcCWAxmZv",
  "key21": "2DDP9yCcRRkzrBZXCeBPPdCag5eCa6yN2kKwgvTL8aZcKXp772JQBkm5CjQ3mYkEQqtPG3SRrucvfmHWZ5LHjzM9",
  "key22": "5MffLHwaCz9u3ysqdWa9n6midnLNDMKmJd8e4fn9dNcQm53cgrBKhrkXxPJmSXa7izsJ17dkEeJDksTPkNGW5fRF",
  "key23": "4qz8Zt8Zx94Ky2iQDNRtuUzAtRi5D4fYenSG1u6U7kL8hzeEcaFgn3zsdDFEhaZqnmrsmzihMu7ctWzDDiPCzx3m",
  "key24": "4mrorHEr9GG94zXCAjgGjcd5BMg11gQzi17MQASvSFEVc6kQWSyR5xUcRuDngvJiasqXaCqCLhLadPrEsyZtBHCu",
  "key25": "2A4vGNvjbAwwAi2RKCqoAnxseV1hQdM4nkb7As4kcY6f6qZtmz5SbjrwQdhPefVRyL4cV8MtQoAwsDdE6cuj6jDE",
  "key26": "4RryF9FupQiAyncwFHv9xmmkZmNcvTExsuzPm6pMhfof5sxDJcaF4VQGJy6dsiiHv5YDPk54wG7htwPW4NLtbWR2",
  "key27": "2evLKuu2nN51TLCJnTCx6JeZ5VB9fd2W7wnM2hQdUYM7tfpgyMmqHjzaWpBbjnaFQa3Ea6VW9Lnk6y4ZJYYSQ3Jm",
  "key28": "2kRC3Em6tPusAhv9KEk5EVe9NEPNsrda7ZUsBUnUtTj1tDBZmvwRjH8u6WpxRorDDsEBYyUTfW1ZdMKanbZxHbg7",
  "key29": "EnrQpSAiWiaxVYceydZLEeefh3PVdAYDzLHQYidRht7ENT6DCHUCuWbHp7ihh69akzh8tUTwXPUavCVxgVkPNRi",
  "key30": "4jqtHLuoMBq4CHXL583qoaWiwu3YFqJeMuZ4qr8tq88Am42P2V2cXxg5ad8xsQMXPzS2HEMGcBrsBpkSrGvBX8ia",
  "key31": "61eiBSo3iNBs13SAhBettRcTRWZR8GwZ4N5VHA3bGeSw6khT6ZY97NaKSELbhaiy1q88NUSu8Sypnvh8kTUPr95L",
  "key32": "dnePq9CXt8U2QYTyDQJR1igGYyBbQ2RbJnJpNVGiLWNSahM2FPKamfpePsqwgpwJ554Ss7bRkY9urNbCXoj4z9e",
  "key33": "4f4Tt8VAkrwnwqT5ZQCZvM2eAQMYcXjvWiA9ZaBGzZU3G5LcgQV7DDWfPQ3CY7NJKkNTZkRRoiunwDymCFJUY8hM",
  "key34": "5gkYFx7CTGnCvpFshjMFrsK1m53opNAkTNL6wFUPkEVtTVN3fSaGLsmqUr29xFYJkwNn9TWr6cK4bFadmYwnkXZq",
  "key35": "rZf25XQnhDdkWsuMAnrBGJx6662w8WE5BoaAV4B6cNQCWddmXfovf8ddRGUtP2tFNTEhPJCnq5ieHH4uD69PJ7H",
  "key36": "2rQesh69foNgrKzmY5DWi2bpnqcgCUC6FMdgWZXfJiSRKdqHT9m63EF75fY5hsDqw1uxHaB9hQftCvpQHCAvdb2T",
  "key37": "5iMGMZXDSSuBecy5RnhdacRf9vALEMfnFS1NuavEiUcPHw3rw3G3EjfsoyKS7HQp785jJinxS4Uf3aDVbaYeNQNT",
  "key38": "4PiXd7gDEgeonGieMf3aLucskQBw25GMiGZqCNNDKbPSK9bAihWssqPexarnf8VE92LZg2hQQk93xqfsudUHgfJ1",
  "key39": "arg65QrUUgh24ue2aMzZdyVShjc7nHGtAvKxUf3HHeD2FYdfa5yWqBnZRZPf1rJuNBesme4dXP41tVYwYAynBZB",
  "key40": "3TyciUcEEkAKqQp4C3SVrh9jMrHzgyAMuUnFTViNG65oE2ZkYogLKfif4WHRzuX22XfhBFPVbvVs78ttfrp4tCxf",
  "key41": "3PdLDe6UGse3ja2dhbBWgdretQtyfd6wWMxxYLsikyxEFjbbhoQzqqLjayVsMvf5yLGdjFK3kXhrNiS8v7yFbjXc",
  "key42": "2QAKzeyjXbymFnr21r9Zd8CK3K4kEYYWkM6wybXtaarREmLhLApvTrLUTScnfPMNX9zM8bXUNT3rkgYxRYL5JZHa",
  "key43": "4AAPoR5dqs2N3BMmmhDG4eVQEDUkn5S1cJJ1rLkBuyEP3LPmYqKV1fPscsgemCeno2PVzPgyA8Thx3RVQh7mPX41",
  "key44": "LGLuu3VEvgKB5aXxb8ugwbYg67LMLDQwCB3RrXr9tLdwNZhr7NUfyRXCtMFbuzXXyUDogQaFM8167gMz5VvoetM",
  "key45": "48yKdAnE4xRetdDQA23CaViMPxASSXuPYGFXWTra6z2TfCXUirDE8ABSXzHxjVBCRwsW279okvuE7BQbPb4GgFn5",
  "key46": "5sHc7hSo4ZSfqmkmEMQ3rhTiVoY2ZiYJx23o6Hmzjq7CntyagJh8M3BsvgbUVnyXouh8pTvN5s7ApxdMkJgquWW6"
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
