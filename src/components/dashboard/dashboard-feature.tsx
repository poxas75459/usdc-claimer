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
    "4UuppBqQpWSsSfVR37ew7UKfUyDUqT6jZnMv1VUhQdwDFF5ecJt4HBPgJsXharT1HvHvBo98bo7fVcHPsUZabbk2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZWRHmkQRssizmesBSPWhbQMMxmbXWgigUg9dyLGWRMkBrrY9AeWgqmMC9oQJs1iGxsExNuV1BQZXSGMXeR2YaDL",
  "key1": "4MqgDbGqUuzBQqYSuoprrqsVKWyKhvB4hTvQU9LMJ3qcQATFiVm6U8pMFSbTsxZZLX1hfKu5KEHaBb9SgwC7S6BK",
  "key2": "2pfv9faWBfciAS18VJ79vDVKSD12WdTjZzGmiKLMaGTbJ1u75rSaoXZDfowVoMJF6rCVFyw56tu7asTwpAcTdjQZ",
  "key3": "GD9X6eJYViWXGfHGEE1RumgZ7nFwpg5T74t7GVsD4tGQPfetLaAMr5aoim9Mt6Cwxw9FwXkZLA7jH7xdPjFutpm",
  "key4": "MYprA1D7zmm1gmff7CrqXXjTDBkymMCHuLb7oWM7vuzhCrjYDGA3EN1cfzjWFkkMdgjQfR1cpf48qZxpsK8v9dx",
  "key5": "3eUEwpkyzMeuNfgtSoSDfXnEgxK6Lv961v4KrLCFo2EVz3zZ52cn3SPf28VfDZnD9UbQrmTyyRmxH2BrxgvoLnb2",
  "key6": "65av6hQN1xCXJfsJZzPM6mH7igDJHC9XQcFM8NxCTfSntYnPZs9qweUU5qoaJqj2deTyHnVWuNWnqsit9DefuFko",
  "key7": "4jcupcG5GJnpkQmNboypWpiZExTbFa3qLUtLVJFjxUgNuuXKSibXcAGYY2ojqigsAdqPfuQFbbvBYrdSfggSomps",
  "key8": "5nkxYvKGjoijAg3sXp4cHjT91EBXQiS5RzWUjEqSEEDuVmwjR53TnV5GgSUopZy4YX3Ldbk3BrKMKj5JEuzTy6nA",
  "key9": "UfmbSMZB7pZrq37A7BBqW5YBz7eGheLPgcnzsjT3ZzshxQGYVTSmyhVJM6wqW5PoRJ4RYFEocGKSKtGWSTCNJ9C",
  "key10": "3wezAiwEe3TdugSUKrrjvrF5BaQhNBmKz8aMQib2HqfQVDJGeKc3YWj9iznBbWTUtUoh3wp2hTsLD7y64DuACxip",
  "key11": "b2Y37dabWf56WifFUgabzwozPp5EtXUH8P4TzhF7c7sQXBA3pqYCh6ZhL7zojYc9ypKv3FG94ei6mhTPwowj8hr",
  "key12": "2o893du2tSE8RrjvHPBuFBnjmq7XSpu2uHVer97oNtMoXuLjMfS6bcqUfxcn2qTmMW6GhyWBkWavYThK7i77yPFz",
  "key13": "5UWpjWbXBfWT1uTg6LrFN4VbzDNs7877LVGUcGGvL3pSDV5ZLHrzJpACuVdBDg3s1zMKPVG5qRqxnQWBHgys2QKi",
  "key14": "4vFg6pDCNz9fR4R7FxU5Qe5RDNDnERtax951esyJd96hv2K1vJvTibPrD6US2KHAtfa3zHpuvpa69tcQSuupp1bT",
  "key15": "2h5N1Sn2vyR1iwxteL1LaCuiDcAUAsWPzKiYHcCYokqR9waVPAGifZ8NTvWP4aV9yETPbGh5gEC2Ly3Uyrkn5C74",
  "key16": "26cqrhrKQKxK2TNqxCUEREG7qR3WuWSKnnXCu6eVoJovizfNNUwS2UabqEjH7JFPF6xQjySpLHwTj8xdtBXRCUWt",
  "key17": "2NJYVSs2rCdBcDPN5XRRH9P6rzB56eKMz4coSsGmUXKtSt82RpUFEdFPDLrzq6b62LPtUcctfADiPMaSwCTLCPGV",
  "key18": "3sE8RqYdMBexeQuy9iyTiHNRrSzTqr5JLkN66qFXUbHamVzYhxqKbrbvZ48yw7CrFtFg8a3sStu7Gcf34CBCMDZD",
  "key19": "5ipuCZ67uUihGzrBkXC2qgpjHHRNxwwxkNYw1snQkd2Q9Lx9fNVaYFrAwQQ5WJYw1LJsNAGCTUxXsHY4PhqGwbA7",
  "key20": "39bZNst5KthUScyjtPxx6Ezp2x9QL5VVstqZ1hSe4tuG7g7Gow6RDqdUrroqVwskjp5AuMgwggXZXE2rZA7HAxYw",
  "key21": "33kSHvQ76YAjLgn1EFD3EG4NKCY3JHhtwGAqspETTcpVJUL7LdAZq7sCW5g1rcpH5SjfsPhQC31i66bzczmFYZMj",
  "key22": "kYpWJrDRjPKf2NFkQ66a2ybNSrprBd5Ms2K8jaj2EKfkdAFyEA4FU2WB4U4sh1rbUBYZhTZxKF4VPijaHXsxdas",
  "key23": "47gwciuKt1YeftLG8BiPksPSDnoRMRsFchxFcKevy4aAfyZaRzh6ku8z3jqGwTWEvqixfSfYfKhWuoXYHkSo6CWQ",
  "key24": "Mjvu8KDLrWXJCT8VHifUUg2JN5qc7Fssgq6amz65bRrSA4LCh5vsqM8whdXeizZfJiCTWQNJ2mig7pgTy5GVDjt",
  "key25": "5nfytZa7uyGp1vcZzs8XjXrGVF5N89LJ2GksB3s8jAJAeh3EgitigbbWgtYpRWqdQTAevV1irZMikSbv3K8LFcwG",
  "key26": "3gTCNbFrk8ojxTyf2r2rPz7VVai2j2hvrDxhA2mtBm5zrgN8ZVqZ5tTPFdFr3CG52kgwYdqDTc5dBJezVhp7swG3",
  "key27": "4EzHc861EWa5SozumHJ4KQMHGzQKj7BQ72fch9qXpHs6451H43ruvCq5EbbKUxjUpX1NqjFYHETZqQhJaSASjFyK",
  "key28": "25syetQLUCy5q5FWqtD3unvD1PEYeTSF1k8UcEfseZX8LeaaNdvhnE7ofFNfJ6jBs99DMMyCDBs88JB7YAZBrx9S",
  "key29": "563hYtwAb6y9noLpr9jUWdNzQFiCozrnFkUqydvL6pCNCZpeNv539kGr4ZfKQeK4XeHjt8c124PTPT6bfD25yoKb",
  "key30": "3f35eFJhBokDX7G9ZsjnjdZ4PqrKmvdLCpfdT4g8u9cBmAP5EMsRLy9wa6kgmEEw4fVUBvvqwcAU5ociTPGDqkVT",
  "key31": "3sQRSg2M44ciHPDbkYPiaDdDXhziwPX2FN7ki8bMYosVG6tm6YQQsqunSCBd2QEyfd9WMiMserdfvFrEaNHWGMoK",
  "key32": "5jJieW9bd9To6A4D2A2AfEQFtWeRHqq4T2N6NzdqZFVegA92gjQGhCS6M6MWAbfnMY4DPSTnFQJc7XgnNHMET4Sd",
  "key33": "4QPie3sFLp4eTiJ4wrypN1nn6DiXvbyCDf8iC1cQjKjzTTX928FajLsJK2UdRjF6yrEu5S219QpkbAeAC8uaXypf",
  "key34": "5GNUScziHQ2xNDJFjgGQH6syZV593D3v6knMKqsgbJCrwumYoxbK66dKKPatu6z2aRybq7kW4jKNx1VHgEVs45zE",
  "key35": "5Dc8azLi6r4JPPHhFZ3Mo6uYZgeyg1UKE3z53DY7bKcJuka4AjPqZ49rVYSnN3h2iwMEasSAWb8ShyjUEeyQS2Rj",
  "key36": "5egZ3W9VYAkq9vr1mtXk6WdK9ib75X7NqmUqGSVWUbvXzVDtznU4Q3cQ7uypDF4QfhKTA6vTQYMTKciLrgGn4rHo",
  "key37": "4TWZ9uu9bm9kosSFLnCuAonazyJzuHdi74m9rx273Y4xbph8Q96xjyM2gtiBGw18ySstH5dJEFj1Q7sAYd4JdnVr",
  "key38": "3jAV5GtvquKKnvceDkjxnhhUGVTJBCcutjMMqd9q3og6msaVJ753SbKBRmdPMdKc88wXG1nJ9qnLRC7T4qcBNQPk",
  "key39": "2QQ44Wx7WnySS6iZkNRhucDPnct4eT1UmCbdBsH3pkDBbnAcboGzBENPVHciaV1AzJxCUHXS5nW6afZ3xnAyJdt7",
  "key40": "3JrPM1WYYT4M4k2RwUY6wzjKSsgEmsJjocW1t2Jm21fxTVYdHAzhT4YTJ8iQs11d1sB8E9BAggaNn5m63MZAo4Hv",
  "key41": "43kWfpotD9HAPN1pNRA2TcKmE3yR7NZqLFe8aypb3WjA2fUDDB8juDCJ1WVbmq74U8WvriXGXhbFpGikA2gmGozp",
  "key42": "4roCMcD7a6mU6QmbTmp46LnYRsy93Wn7k7yTMLUmrFrc3NkrjiDYU26cbyZa8AsSJbkFxt2JGqqyg4P99DoH7PJX"
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
