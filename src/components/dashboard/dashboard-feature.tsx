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
    "2MJbw2YtcNrVuEta9J7oPoTtgCgVcuozJ7yCQQNZp1VConfGaYiDqY3DQWeHbr13ntojXRZJSvoGag7r1eD4Cuev"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W4xeeFGo2yFmQtNo4wKnWUhCWokzhih5qEmduWezz2WKCps6qz8dh9h7AC9opZ1TnTFauJSvspddEsMywXqeZw1",
  "key1": "5yY8eWUpPM18sNBySMtxpSUcP3e9ii1XWn5joNvYPxGgKooV2s2dxqKv3daoHMLxZy3DnMZU77gApCnPzAq8FoQn",
  "key2": "G3czS8vq3xjFKrkeWg82Rq9sMVNV7ETrL2kLJLRhFHgeWQpx2HyWLjqiQ7thzTKCXBggHHYeLMAvkXw1zJAhjXR",
  "key3": "25E7XvjAD1m6ayyUYd6DCSHGw3g6FoamLexcYUS59Kp9KUrXi8aNkfGd1oVAzqSAj5DHGQKL1nJVE8KUeBFEJHnE",
  "key4": "5ph7e1oVymeyrNaEbsw65gGJj7xnj6Ho4k1r6DFYUoGDQtHsnD66JLadStGEWLYS5Cf34rdaskUH5finhQqtJb2w",
  "key5": "46WvRNFucX1BaA4XydgAtLgA8Ssrai7xCG9iGGzbp1xbQVnBFceYwih8U9gttoLyXBgP3nJvvPus5tJ8oQSv7vFA",
  "key6": "28iyZKMyNzk4TfYVxJPGVFPK4EZdLZAUNgBLHUfYyUnKmL3WXbdKMiJigCajxe9svL8NbAF766PwhbUPtK9mTf4B",
  "key7": "zGjSf6ujm1CaAhh751ww2gXw8kNtQhmY7CmVwPZRgDwsbVtqHJaeFUmh1W6uMxtQvpqJiwm74ypERCSPT9rqmdo",
  "key8": "a8uDk2VpELP13HHRSGsi2u3RexPcrQCBH9FX16gQ8iVaBSsFJDYyg7xBh1TknAErAKDYUZvHLkMGZG9GwEybMmK",
  "key9": "5LU58DXtM3sv4rbp94DXfcstLFQ9MPk8gik2MPjgMg8YP2eB8qSmBPkdqSyc2iv24Gha1b8VURVUz7qf4ukeB1PF",
  "key10": "3YN35EC7FCniwwkfeHMM4Gn2hqt88Nq3x6SSXMzbfhCRz7qPLFtcFESN4Toy9XxBxWwSENHnaw8VyBakKYkLnkpb",
  "key11": "J1ZcyQjGKRjVbKpTAYMytStYnELUqATuA7kqsS9qA5QQoZ8eedT7ZMj9Xa6tfdUoP7LnaxdP42P7jCZWah96BUt",
  "key12": "4SQFY4Sa6hxb3War7gpgUo8CJhuJ8gkt8Yy5tkcGCg4cxXSvsKqMQoVd8sKED6NsKLzXD7tFV6ynbinoVGz32zv2",
  "key13": "55ZYJHzXCMFgPdnohDSBMaFytFGXRXE85rb9oFFdBW9VNVDkxf8v5ZkCi5nByT9Yej5X3hLsq4nKHJ1rUh3xJoHs",
  "key14": "4uRZggCHSMjF1ECHXLNgWc5DQ8YVgaz4ne76iLkGE9Y5h3Lds2pEWWpYXY87BYxMN3nXr8rYWivooqgPhoiLWW1j",
  "key15": "3aFPMVqkmbarvaCjJG26N9Hu1SWAszg8vL3ayiHs4u6TfNhqNCc18e4LcAEU5vi7vis92Va2bH5oioT3UBoXdMk",
  "key16": "3LSxHiSEMDmkPLn1FaHHcxuq5N1PDWQ7NMWSTE43svqeowfo6T6qxzE9A7iMSapyhncguX1okxFQ9zDQMkqxJRj4",
  "key17": "4KACgegw6yH4RQoxtVy7w3N3VGmS1CFcQvEb2arPvqEinLx81pFXuDtfpqCgLiegtDrud4xGAYEeHNxWAPoGsp6o",
  "key18": "5XGGRbpxpbPHa8sKPv7NWjYavNhdHDXtQCdMfWZt6bFdgJgzovpZcL5vS2pewzKC5ZiUqxR5djFucGPUeDU5iDYq",
  "key19": "4iyxg1LMT9H9NCxk3UHkLdjSxD7uNyqThwUyfEizWqX8a63t1KnWK9JCccdPbDfVBdLewtGs2VM9VnHs8tnT9hir",
  "key20": "58XVJH6VHSMENL8kup2jwU8fvvBZrMzqB9Cnq4anoAxP8HUhqUk9LYMCyrNXkgHYd8r6ir5ptWkFNVkLXdnBKqsF",
  "key21": "GPDH2iP4TAVVg4VBEVLJ8hvLPE8BGgZ1Wr9jfdrmAWfYdWvkWNTXZzmvnUvVJpCdjR3A5VGhsrqufcSj5TYMR15",
  "key22": "31J8DMe9vrYuQ18GSRHP22zYQ1b2VpTH6caqTCN8oqDGDiKDiYuL1q9BNvied1VWfqTfS8Xrryp5wjxtzZ842oDc",
  "key23": "g1h67SjEsgtMGZZrFDBDAmt6NvFnjTPzJx8hMYLZzEpX1g42CvUX2xTf2w9BJdzBJBUpq5pbiEEXvaNxtZZXbcD",
  "key24": "2iPtG9rw4dvQJQX3jcFPTDY1yKe7mNqTnTTrdTX3wyHX6LeQo6Ksi6tXzogruYUQvwbySmzEG3rm8rr33mJ1bcWE",
  "key25": "GJaokAFev71n7PSfT1FHR7V7Ucvb3C5zpR9nzRFNZ88JrHMXM2oM3jgDrUXjEFiojWZT8Pxk7WEF43TKFEKL2uB",
  "key26": "2weBmyDybGtanAnwEQUP3gGAC89SPeTcS3EhYPW9QmhpRrx9TSGWwbP829r77Yq15CMiKS1EwFL3vni1R8ycSAK6",
  "key27": "46dShsghaxfdDRn6DqVrPiFEVR4Z6gEY2S4vy9wcpyfEzqScuifG37ZByEmHGyx9DjEsXZriLaTcGQ7k5uiggeYd",
  "key28": "2ALT7z59yiYRqfegFNE9Wwrau5DceKWC6FeVC4BM9CmrFeBiEs6B2MbpvHS2RohvhiJ9WQPeeCAJbMEga7Vdqvoi",
  "key29": "4ddtzPxYxtURb7u61RvPvMKQJ1rb6HA84veCq8VDnnwZ4G2ta5vJG9gCA3f7PLcekvFSUSrTeTZRjiK62aqX5ko",
  "key30": "4QEhj2388VX2Xo8K7ZvVkvkAexZBkiVRLFfZFyTH19v2BPsSxiCNyYhQkG4EJ6JASaKTzsPkVa9hMrHXco9EeSYB",
  "key31": "PSLwPZB28sMrCdESQjCkb7q66Di2LnyknGnY2Qrkq6CpgiNFw8mDAsEJoWuz7CTj9zb8Ffxp3ZkZYdAv3o9RmSU",
  "key32": "5pxPPTkcuzZM9UuGnLuEXfokWbwyQ2im85u2K7n72Dq7cjeQGaRBQCo8qkcd5CcP2hfpFHregAKG9WyP2AfRdLny",
  "key33": "3C8q8KX3QqbXHfYAoFB46GK1yEtqmh3eWcpK9GPBJVKSDZNK3CR9QDBCCybCPrWQoxWDxxgMamBwgQhYqTNTuwN6",
  "key34": "3PSE1EQaYW8vPda9yLfkJtjBoK8xNbvCs3C2wKhC4JEmwQa3Eu6xUSQptex61HLYDUc34bNQ3qqDL352zgo7xNRW",
  "key35": "2DYFjbvVVyfHzHerM9C983bJob1QYtqvUtamSFDw7pcJkrU1qQubqgvNJinCuJttmuynZ7y3Pk4RmA6KGo1fK4Dp",
  "key36": "3Lfrh3mn5HX97mDrxkRoe2fpXgqxeMNRdznraSHjFtmeDErX14SvQBm5uUPMNpXkBJYeoKSN8PpcDMbKE11TwB3t",
  "key37": "4zqkY1jzRMYSptsFKkxPaqGTaSwyiaDVZt24WMyN2zfhpFR2nLepTChxvEJC5ZJcBqXg4JqTBp7MZ5B9mWVMqNnx",
  "key38": "5Drm2naH1rZibgH34mTrCaSJVsaiLbupQk9Di62FL4bWQHciBKh7yZndohG4brSmTmfjKM34fs74rFEZ1C4uzbSo"
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
