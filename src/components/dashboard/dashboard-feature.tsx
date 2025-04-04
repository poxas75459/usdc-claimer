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
    "3gH29Y9tjgW6GKP5ByWtRedJtWC1LZABYjxFWcufPd4ghXvdMP6tL7n4rcQHKi9GyUdNfRydvKeyENArUJhrE2KK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9PA833QCFXqTx3q1QavxtM2izmTGLqSsfSzTHGWUJ12zLntG1Z2xvUkmptXnFq11XpKasQJbUdkEVUfHiWfTn4W",
  "key1": "2dBExboRTBFkVwii9D8zDTYuzFKjba7HhWSRmcwdvrgNSvejVUPRi9RNwfXKGpHfM9ptizYdK8PEYpNXtNs4Lzsu",
  "key2": "ffYuBajgcxiwnwSevMTvVsHqwZss32XsE98vBsN647av2T3NW39LHtoBdf7tdKV6LJcwUfHMsdFcC8f6akA8Mj3",
  "key3": "2MjTHaxCwY4XrPV1L3SZwT4ZMxosHe7bPwGn83RDosLDPjK45s7azEVTrcgYpmjjZZxzZegsTi6GXDuUup37iV6y",
  "key4": "2bQrYt975cq67yTdKYGqqBb8wejquPo51SjMTdzQnUj14SRCjfazWw9wER3NYYfdUbLViJyvZzPH9wdLtgG57pEV",
  "key5": "4U3dHMnA8ndvhmrpPWehoBdesnmmo4A4mpahS9pbHfw2uTFeHz5neUEyj6SDodrUpn4TahaJu4vq6kyrcPFCWAiy",
  "key6": "3U8dWSEBhYkjjJpXMG2RoWgHHrAkXM9aAxmZyi2mF87nZEuWe9hn8KKTs1yLB9kwrR9NTRiaJRT1ckdBQHGRKkZR",
  "key7": "4cQ2CysFSPvaHvWXYwMDNSD7rwcaBw5s4j1zQ2Z18DYJQZmTRRyqbANA5aZGLxqZZptPhX9NGAGcUi5ud6JDfMB5",
  "key8": "Ku8eT7LYV8eMo7E1GiNXjrqjGxooCPe3KKm1xciDrsa9CzXeWzZTALqrQvcz1rj2YWdrphzg3kJGA18FoQhhmPq",
  "key9": "4XyXCokuBMmU2Za4Re6Le5vhzQUTL9ry7z89BcTn9Dtb1yYCp69knNes87JQYB3mPtZerVmQJTt9sqEq3Qdb4fpc",
  "key10": "3aAQ5gjYBJehc4rtrdvxxv4VrKfHJMr4if4BTzqWgMEtHKKD7rjahywS5LSj23XDekD5QftLosaPzbvNkGviwMGZ",
  "key11": "3hSeVaMPiL5HsbTJpwh5B8oA4Bfh6faz2xBTDKJsfMogjSh3yTSvE5jG5BFcGP2hYJzgFRTLuN4j3pcnSyFhfizo",
  "key12": "5dd8pyRFg9YdL4yFzWoxjmjy6XgRknZ2NifVTmYBjdyX1upHJv9R92ERHL28pRpyMr2ZvL94TMNGTHGkMXQiiYSE",
  "key13": "48V3eioM2HYajREdL8DG5a4bhoH354SqKSx75En7nQT1zACjL6g4g97ZMV8wuUkeZ96b1HizLYT6sykBQivffZdw",
  "key14": "Yyn1tZK4zWEyFzfyvJuAa27CkLH1hpvqyHy8HivjM3XMY71d2EyD4fhNRFUQ1eDtgAadQYuBAc2sjAVTep78WN2",
  "key15": "28CNfSpstkk6K7zmfaSFD3yd7JSzzAsuMgpHuGF2JUYQDvupsseMeSss8uknoTcZVEsDfYLAcf3Hq3k9Rosqeirs",
  "key16": "3euByYuDLTfCwHxTYhXVu6HA5F25B2dN1RvZV1euXqHsLFz2Ui9PfWp5BXV7UQc4UYgkASpxWRQEzSBw88wn1Aod",
  "key17": "4WqL65fp6xDM7nLSb1zuqS3dLF76ucgY1n93ZkqSpt9ZKvDBNo2ekGFq3gVGJ5zHEXdxKk8nvcMhgjXYTH3RbKjv",
  "key18": "myfF2YkpqiozYrshGenRdkuN3kbJ5Z1VugsrdeQBJrY6UgdXjM5jztQzc9iVfS3oodVmd5UwYanRrwGDUeoUfVL",
  "key19": "3QQ2cdDGNYMKWXVmLmkcGK5vrTNjHvQvNTdcKjrEQUYmRCm9Sp2n8Gc3z6dtXLegUAn9LUnNEqA6kb1wRwSxGyrK",
  "key20": "4c1seJdagf5HHVh2uHCqVbFqvRDZcaC3wr7Tr46AkSPiJ3Y2eAffoTYAUzzwXTKRYhKkz2EQaZHy7v8ap48WCQqb",
  "key21": "3zWYgBE58B78vLAYVDYkZ91uwScsb1jvefAfRbkBYeav84MzPrrzLB1Rvprj1Jne8nEyxHaHkZWa92go2CjkV5NS",
  "key22": "5UGoBD8uFk3DoGFmVz4SJWtak8C3Y9JwZ3xX6n94zbcyBBsp544EGVyBLCatsw8qGLFxjvqK5voCBU39ksQDpapx",
  "key23": "Syb9jxpKnoW6kmbbkJaRYnqJrDwrWeHzFccmxyBEs4sASFRh5mwCGUvovd3RGYpnoAJRgs7HcAP6HboncSzsrQt",
  "key24": "2EiPCmyr6GLErwb2FjoE2JeFqAbcnndmASyLX8Sb8JUcww5yVS6giV8c1juUKGbdJ5C6RF31WtJPyDB3pYAkXJ9H",
  "key25": "4nrVrayVxFny9VWW585Xd6p6rVQpUmUX1DcewoVKpu7Vzy9zppki5K2Nz7iWxxUoj3jFo9FBHU8TGqCU4K1CVtmW",
  "key26": "3EUDytgAKmosty57yfyUKdintrer4zCyXeUsVsAmwbYkY9fuh6BTPUvVEtAUwdNExCjomUmp6Xprhx3s2VXfVXRd",
  "key27": "P8Zc6TrbwHnNGpqFCLNfgtW3rwi5Q7YYmCKhZ7JnwT4itesqmgncaQwc5uZXG3Tdj7oibyw5HBj7Cvuh3dcZER4",
  "key28": "3jcr9orwmSfBRrzJipF2cyhsLXFMSQKuHKdWaYjQpkSNbqcHgWAxq6XTtUM3SxFzcakMc8YCCzSkkv2vxVj8LsT1",
  "key29": "5dLFvprxmamPDyHAy23TRG52DBMzu64ymJnYGhFmpToUSf43MArvM2RWEfVcXFPCz2bpcGcJYPQ1HNG5HLVQDnEG",
  "key30": "2SevXjmtMdceU9nQBJ4epj1wFiL2bxNEo86ucnxbE7gHCZnUVQwbNNEfcHbm7hUbj7eSh2rbYF7UKDAJYEic1PmJ",
  "key31": "3sPCbnDQRB2L5JYbK94bUX1yBzQ95jAaFnq3hz45y8vmEH5MW4ZwJCmxtnCbLUPwauJxF3eAgFCdVXVipEiEJzTt",
  "key32": "5Zi64EFSUNpDTgomuqXEwhZovG4khMJBDAhs3HvQ1qHh6n2qTSViqphhQ1qnKyqGKPME3aaVmmA9y7Cr5t6u78rx",
  "key33": "41jhEJFuphbcNogy41Jfrr9E8C2eKZ2oAik4sPgzK3NnGn1Nz1hg2sUHVs2XJ36khC8GTwCsAtvQKBer5cswyHYi",
  "key34": "2fzG44Xfjhn2hyFZbNLCyrfiFEkVKh7KwNLj9V7WsySaNfmPs33LmRwMpUqqcWiixhuTkbeS9UBS9jsv5v9d9eGm",
  "key35": "3dYkh3q4vSxQEqYoakkSS4u8JX9mofEfb4WDPtH83KUdqWiLWKu8Lwk7yoyVhhxPC8v2jP7qrNwzXC5M1GkapGMv",
  "key36": "3Mc5GTko2zUyxNy6YrdfVp2qU6NzzXTN476x1p2ds78TwBrWrhhPFCTWQ6bTYoj2p8n2x3WX1q5N6qL5w1L1ZLbi",
  "key37": "3GTSQ6bSeAvrgKo8V5bwkAgZ3cc1JQHVMwA5Xd8vydo84nmA3GjR61nTvNap1Z2R489TK1JrqeA5SLDnoePPJ74v",
  "key38": "bLjqRUfof3qsjMohwsE9GHXBKTy61D5AAFZnGjRtiewdr1AKUiEPP2wJLPJiowZXK8t5LeTFBjwMREaPkpsRksU",
  "key39": "2Hn8QfdX59srnubq8eMJbfiAEwjvhTmLmYvPoCnFsSLpkEUDxkGZ2jEqEvCEpLPscSeoX3aZy4tbm1pgiWVaUpA5",
  "key40": "EeLUwjLKHko6JdPHwfWprgnYsKxa6E2KvpQS4LFSUpLT61EMa4RKLK3smCCvqpVhHWDAgBAM32W3sGqTCemU4CR",
  "key41": "5MaAUVCjCY2vHhK8sK6MaCEZtEN9NugcsNb9vkLA9UzL7VxAGTwrb4Kneg1xZanLpTZYuRXHKBFqdpu18BwyHbcW",
  "key42": "2f1ZVwAnk935GdNNySzJcyobd9k92QSPRW563gvHLK6qzVBADW68iKG3mE59EQXAKmKq6Uxb8UFzwdPWJpppkuNJ"
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
