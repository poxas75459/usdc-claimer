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
    "4T6SwdxmRcmccetS5Wj5puKL5gEtxEi47Z41EUCf3zRpJGDoRPS2n3j6ZXAfhvbniGi63wNw4Cw65CKDnqbFiLwx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iLCiLHjSzruJLf6iB79yXHgbMq2bLMFRYJJWH7zSxwbEZGnP4oZkiDYeHdTt4cnrmLCTMy6RQ321nAnBFttfDEJ",
  "key1": "5Etcw7VmzCjgDHNNfg9RKSC5WGU8pstDGn4qP6HpbbX1Uymn94GwJpEFdHkkoNmEziZAdErhk2cSPRaQUnYcHF7z",
  "key2": "24ym1MayPbtqP8x6fVpJqW5dKhPr5U3bLj4npvJtir8Mfaq5CfkAWMAnTJVqiG5Rt13Mcw2VJnHTM5V8E3b3wN14",
  "key3": "4uNkVNBpp2zR1the7REWduFM1NKmAt7EHMwc44WqhG5WUqgM31z256bKxUBhVwbUxwyJ9ZuTXkbvNf1sjE88DbUU",
  "key4": "3RQ45qtkfky2CkjEMrDCSZvpsbbUmjdY9ayEp8mceCdg9zaYKVDPHjgfWHepj3L7x74S9bgf48a3mptX3JSwqhhX",
  "key5": "4nyoLB3dNApz4MtUeof9yvTg4enxwWcgoYDUd6WRTnX4nhyjyY3FqjaStBHurrWCzekt1konEEXUNMDVoRqHSQvV",
  "key6": "2s19Y564L3BSnqahqjhqb55sMovtufCojiAcW2Ed4nNBxFUe72adwxaxQZBQenGHdUotDQno42F5DRcMQKSVo3Wi",
  "key7": "4iaB99ijmcNx3FjgVTyqhXotAWSb3u1my2KAEsk8LEdcF8xH1JYfbcbmEGgVbfsyaDkyj1LXp8gqwYXWaZTFsQSm",
  "key8": "NdGDUdfBsXsSgCuAozrQ9wnfJEXo1kUSw9G1vzVm4a6g7yGUkzkbjyaMFJgN1TKC3PAZxfUrAtXGifBEwFdtezs",
  "key9": "3g9fLho4v89fqdAsXGUaje7kS4Ri2EfyD9Aksk4hthR7GgZBGJuVwAMWLiC13di1UdSWrhkW32Gkdj3Dpooab6Rq",
  "key10": "uwVuTM9EARm985QmvQH5Aciez4ZQdt7bhTwEZyAp4Pw9dLrvG4L54a5dZbH84sWjW7eHWsxQuqyKEourRuys5AR",
  "key11": "4NLpgcwetnjQgeo8QQmZARuG5z6RBjoh3BB4Um7pv5etL9UiHjQkB3jGABtkcF61VK6qHyicuPsQijjFZG738jW4",
  "key12": "FLh8uFApKLi13hmTDu3hEmWNz6zB7KBWieksDfWyHXX8Q62GTBcEvvEgWWCsEgvnkJuVov5izRgHfWHzDjXyKjA",
  "key13": "4U5Dihc9zgoT1PkyC12FqZ4r1FSpzFTYAR6ueQassniVc1aXBXj3WyHYN2DPZhfX9151zNgy1FdJNiwqFcQZbMZc",
  "key14": "5sN2UdagadBoY9XJJ4B7eS7B1Y17pLNaUeUNTnd2VawTxFYMhQuezECMi6UpEmWVXBriw6cA19HE7oAovM6Kgu7c",
  "key15": "3N792ffgUUenWA2jwsD49fnEgPwQLu8FP3cwSFn2ASuk9MtCQtkrRpvatjpD3mVLW1cf1jcNVXNEcrFL2kJrEXyH",
  "key16": "47BuvYtikGeg6hpLcyEVcmvrFdDwKf61XpJo2KcZfVqa1YjLGVgSyMAwjEo8XcBteLbcPqTKg6qd7TzR7VE3WQA4",
  "key17": "4sKkErH1XzmNSUWkX8nHuytCNmopgNMxDWgiAtx76NcuekMV3Q8uiPiuQfZPrc8BzC93fjXj4Nivn6nYwarWT5He",
  "key18": "4hTaqXMGcbwAqecBjV3CMiWvZAUZwtS37Jn8ebURKNXqPiBV9viVtVQ9mJUazQ9YAE3uNgJ7EJvVtPiGviVPT3Xg",
  "key19": "NHfQAKDw4ohoYHeiTVd5CD5iVMxr3gr1DLPXcQ2jk8MZUEFk2HTbsshaoLjHGoDLYTMBUx7RHoMtz7mhFtoj6Rf",
  "key20": "33ddS3tzQaCJwAtiFaSRgo98nzYzQCBemf6KtrWLgMzaV3YHoxzqDTPnkCrfkeEYxEnUDdf9GbpF4UdS8pQ89oQi",
  "key21": "3nrnREuXbGynWMuW4DcsVYmWcUTmh3atYwitYzfihgKFPdztG9wiMwFo9WgFBcBs5BggrxWvWcrDZEWAL1gsVCq4",
  "key22": "cbmUNGdRSiUVcGpUz6zi9hmLiGk5HhJtwSaDdDYZF6c2rxcvzCpT4rqgwdvmT47zSJMZkcCeNjZx7m75YH6uACj",
  "key23": "2G518Qczh2obxSMFPY9er9rNfKBk3q9U2cwRPw5q7B6Dfb8wMk4xXRqtutmzasn7B8nYHbVFNgAutKbFJmDoha37",
  "key24": "3E7BaTDY1qqUX4SU2XcmZA7rc5uUWA5XTpByLp4ByePMKkcmkBQ2DFyoou6NbBpHdZwZHiqq16MvtjkDtgqUnfYF",
  "key25": "3utepaAYfhgBzPNtNE1EcajvzPAvtKShnyifdDhtTzFjc7M56tT9vRtDhyc2JLpyu94PPJA7mavCGx9jBNnH2raD",
  "key26": "3AvYaF1gDN6huTw7LtLqSNNYXHnZiXjv2kKjxkWcACRcchhFuXj845UCAfYVfpVsnHZMKTKc7nyTBBZJknUwxCbF",
  "key27": "46mzL7d2UMRHsq8qZhLPVJzc8vBEY91uP9jWyTuWJt4j4af7LdjqDC2suePVJqRreFHSJmsKDFHj421xuvpFEgu3",
  "key28": "3tUCufa5Ec2MLkVTdFgKqc3Azq4iYk1WG4N1Ciag7ZqyoFEt6BEnoCV9LYvUTYDREFf8e6rPRRbQboVHK2furyGy",
  "key29": "SUbzCggbEqMBzF38MqsNrCaHfpSK5MUJmTxYaGrcog1cukRJtcaiRanFv282XD4yfAcqYEk5AB9G9YaRJcHuatQ",
  "key30": "2iHcub53FzxuP9j6cdW9XnyZaJjjYkzziLdmDuEass9dC4Z7weNLZE8CCQMW156nPASZWHEtNPcmVwEDHH2f5RzJ",
  "key31": "37nSY3oAhH9VhkNneWVPnqCWnGU8owVSrBq6u5yFTGaQv4ii8kmamvmDRhoqUR27Ai4ixsPsZUdjzMdB51NHpopZ",
  "key32": "4umcrk6Mbrp64x3hX5FLvbR54651xCYHZpimpEkDEGjy9Cv7QSQqWQ62yNZeQWUg2DcsgXLfrkEYtUgkhoq1acDX",
  "key33": "3YR4woUzD4qDk6e88fda3PbpvcS4FZmpiGFD4dTymdcWZzWT25k6ohu7STP6WHGNVtn67uyXfaS3wsUYzuVV4spz",
  "key34": "vj9TxD5yBLBB98V1Aj4Gxc31vihKBHsxAawHQp6xWVQSLm72YzZGgvqxWig52bQW2gcnZfSVjnZJPDZovhzqHqV",
  "key35": "3UVwo5hbqcxWFN8AV1vjKWtXsdpirPZhntLw4m6eft5uQAsfjNoouMyfz15nm5ahxsBd9nQA3kL46Asr5ayZJv18",
  "key36": "3FT7ecJy2p4mn7aPpvNRHVCUMWZBBaDFApBdoqcyRPkpcUKCuHMKMsWbedEeDYBAqx2kQdrW5j4zHzkwganFAZVs",
  "key37": "za4CBDUoTrRtT9diJdfGLdzd6D8u46TzHg3BXGqcGDeSC6ctBkAUBuNRoeNChjmgeQLJyKBcmZGpiRuCmQkdADQ",
  "key38": "2pKzbm6exAnSoYGQ64JpoHMcj1qfTyrEV7D8VKRa8KQTPFjsqXdAy2cPPRP6t6YHwzzUXhAz1RXWQ4qxLYXjHJhT",
  "key39": "oHLtbB73yDZWkDdtnN9SFidz47RCAczeGmViSEdd498uqGCiBHvhXZVx4APxMPrte8tknL84vjNcTTkfH4LxsxD",
  "key40": "4tw42zJJBE5P4jKiT7XzWXv2NSezurV3pnpq1cnZKgKVTR6oJ5UQBSYSWRHsxp36drSK8LERMJkc2wF2yx6D2HRE",
  "key41": "5Ycx9Cua8Rt4GDfRapKxEB9wjZ9DyYtfTx6AoqSxsVL29SwbYHo3svvSWXpfwd6Y8PNRsCRVNSqjh3mmCBb3Dzsi"
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
