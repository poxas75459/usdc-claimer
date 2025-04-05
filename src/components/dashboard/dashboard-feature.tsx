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
    "3m3FC1Z3LTJB7C4UykXupt17cpw1iA9id9MXqHxFkKnYm2U5pFz54fxxC6wpb3AZge9MiGU5pZUwdzf3Y1KPTYTT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36ZqDN1KWbKnzLnjhXc9giZcKWm98BLGRNYLwf79v3j8xE9D1sHTWx5zWq4cx1W2iR5WPycXZNMUXjCo9PRoXLsM",
  "key1": "UVkDzjEMtBRqBNQQGWc9SkS6qFu9T5HW5naUjg9Ja7Udu8mVJ2uvyjLNUwxvMnArPrUVgmv6uUBMoRdq7TkcTB1",
  "key2": "cWjBhHNTaF2Kxd9hxczpwgAyqMUVoa51KjiMKaa8upws78gVymrSQFuH8wkbqRxqjTxniT9WQPr1eDFkpNhyxDS",
  "key3": "3e8uBMxpcUQCCEkAxhDAQDAjKGeA8LPVL6LpFowiNW8LuGnhkHtMjA7AUrcAsGLfv9eguSh8KG95TYuY2i2YDXJ1",
  "key4": "RSFmjHaS8TiTGXzyLqbv8iyMgdGVBJanKBMrL4jjmNWr8CUTCabrnzXCT4kAkddAcRBBr3aag6nizzptmsKvVuz",
  "key5": "SC33QoGNTH33jWkwYWvrskJTmxD7fpJKxroZFnSDP7LG6Cp93BDP2f9pGPbLYvuLdjF7F8ejzS18gkYPX7qzosh",
  "key6": "5Xmx31AN2Yohz1HXyyoMZrkvRTvGo3413R5Ff28J2ixYGqTXU8hKDKfyRpHaUdC8kmu29CnLWfJRXugpkntMh4dm",
  "key7": "5oX9Q3cuG7UcCNHcWDoqyh7kSftgsX4hBXzNyzzpJ6SngXAzagoNVwFK5eUUATy3ErmnUwGjmuhB849LpXeVwvdK",
  "key8": "3RFg9hNzzqALYrTEfnA9t4jxsMF19h5cP2Jrb1zsvrS6E6PoHzhjRLdxN2WmftimE7ekVd7peM5DQoWdYzLEFFrc",
  "key9": "2yzuqPHL6VXytHwSyad9pba7Dq6Fg7TVhc9SRDmy2j1QrqmAbahRGnbq7AsL2f19svNHB8RDGAHZaqj69Uz4roQB",
  "key10": "5oZmiCNMDCGC474GQei3g9VbMqZVvwckdywp7LunLRu9YnT5CjXKjFBiEP7Yg89yr4TCTZ6nqfjpj6TiSzNioLDP",
  "key11": "5ai6wvMG4Gfn6FyqXPvg7WmuGH8g3tzwzJRbCqB3hSHALWLskYJj6r5u2qYzFdjCfBD7qjC3ymZkvYGxFX76WnUd",
  "key12": "2pvZbquRQ7Quf1tpsEDGgi8JdyFgoq6kRqDJ7LMUQin9bhkLA7NFccQFMecjP1M8aoXN6h7tH85dek1fDm1yisLp",
  "key13": "3khnGxXiRymwjg1A1AoEqYx439tHuiXBEp8ZC3Y83Um8rdonrBcF1bM588hkKARgSRKozu8TVHqcWa5F1oyrz6xL",
  "key14": "LjsdpBuXeb7mGQnwr8LDZ2QgMr2JtMmJDBrQqSc2SyT12hQLt2iQtPSLCC2MTUXGnr4UZngvckYpF7fJJS1tinP",
  "key15": "2aECZhv3uzojUBagr4bSvU8ppMyiCuTJim9kVqYckRjntALGGfGWpbt8DALwhaUdzkKK6UuEbQWqBDWvvJLNm3uh",
  "key16": "3gEK9tWSh582uLUpnQVMcEgy1AKe1bVDfGmvuQvurrsTuBnzvUQ9tQZv7kD9ZGzeN7qdFz1jAVNTxN7XBuGfZbg",
  "key17": "2AVHSKSzNz1rf2HevoL7WfKzRsb4Ctiwrj1kr1RfdvBdCxc3TmpYUdVKequJttfJhP5H5yaftHP6ihZfSXZj1qr3",
  "key18": "2XG4EGYMwagVUUWe9M6sQ2qbY9MhYPXzB1bmH3RMm6a4vG6AmhCARPkqkNxX28o6qW4FNSFNz3PM7EYs3yAmaRWn",
  "key19": "aDy7weArgEqemTgiUf6BWVDZ18EFFHQmtK43kXCLEhnBePjMJzSzbiQUW5ueGofNNgdh3Wyu8oxkf7mvYUT4aBL",
  "key20": "56CY7EoURT18PCZHZ2jUyBzfjGhLBFiDACgn7t2vwpeLZ45nrErj3jmLAJ2qeYw1tLUvy2i4Jfi9RT1KDJNaL5Zx",
  "key21": "3CJA37Nf1Ze3x6pGLxadwpMeVAEQRtZBBmotP3mbnCnHMK8WrEFyq7eGPeHyWWBo2ts9VqsCQXiZ9pk9SWtSqfVz",
  "key22": "4cFKThKKDj12EiK4EcZZCQ3WxX2kwwojA242tv22hPMDxAa5Jefzz46wJDccYT5XM9jL7ZKW12jCniJsANYq3Gsk",
  "key23": "3PtigYq89LhsCumSBc2DyXWSLR7FPHgyy3yn3xZS1jBuKKgGkRtsDsXufHMiR1MniiXu733qU9vuuxHFoGQR3tDx",
  "key24": "w1eERVmGxvv48oCwn1FdwkhSCScgLoxPFL1jawGTRDt4sMW9CLAAhRJRyA4SoTNytYUNQDaJvTKkQD8ZXDtxu7v",
  "key25": "3pT2VLT5s1C9HPXeUJBrvYyRaczL1xqLh9adqeL5TdTonbVT5Vb2oKmPmMbHxC9vLh7CxXuX7HvPAoFgAaenPcg3",
  "key26": "3gouRUxdGTYc8WvzwYebkdjBzK1dwB1SBguEieNYriNDVfvnMDGKLxMtUkyTNYxFVvstQJzGfPovm6zCXHVyqf5F",
  "key27": "5LJBn3PvEuBx55bB9WRvo1AMyGgpBQ6aNCP6TtpM7idYUVExdojZKEiveHFyHhkYnGs616r7tzUiZi8vig2y1gNB",
  "key28": "6qfad27tcv1VZsvb3ZL1nq8DD9PcoRqVfkWLYBdeyJzWRmAwHpUJBfTbQJevRS1mgpvUyLtSNNyUL4uqSpMTPoA",
  "key29": "2hdvGBjzTr4QZ9fTQkNUs3jFT61AaTvaut2quEeuBafbvRyKfQi6gMYCLJZD8dUjx8vgyjNzTef5S3Tp8VKLW1TF",
  "key30": "9GJFmcNxEDUdhNvhrmn8RybmNb6DqEPbPUbjRLyfhyXwtVxSAWR5cA6FEGwGBZT4bqJAkbu7ts9kFrXGwPRamP2",
  "key31": "5wi6mkv55Z5kKapnuhVmUxUV8WaNuyVDvgGo1VR3nuRJdFxaA8YDeK3BsuceuDErxB263GSthRdUHLiQp5Njidx6",
  "key32": "44ZexKEFjHvfKqKUwoYnLX2vrHM88S5pRr5Vck5q5FBC4kCkoWh81LyJq6eVJPUqYm4QfQdzUoonaTAqz27dzo9i",
  "key33": "5FtXgxoJZK3WxYc3y69fwe8VDwc3ztFSS3SSkavqJTRA6Asv7DtPotumMr66PvwGzbN9Q1bNvmLpQQPT45M1fj8P",
  "key34": "57tj1iTRFRhNquRf9Bb4CfNFQUjafMocwkHa4CxXKP3MwTiCyUyc73dqFpHCJSX24Gvqf2e2zGYB3aRt224vyfKS",
  "key35": "2LSeckHJZ6UyTpHFD7fwo7AzXbNrcecZvfhJfkYLQZ3NRdRGXX6p13fzipGbS44rrsdowSrLASESi8KvG3kgoQtE",
  "key36": "N1FRyTTsX2DVUcmhUD5cp5BidmFGCu3g4kmEkFeBYSnkSXWXNyMUwCCjPKHLCbkdc3PzMgDDjmhit1hnQFxKrXx",
  "key37": "2LMFpdnkaEXU7f6rW3ee6RxgsjwxmazwDh38Nwc7K9PRdo18V88RcX85y9XaGZ1jnQJ7bdddKnHZfTMbrDvip476",
  "key38": "ig8e9jMAqxcfqrZTdAbwy3bqk73N952j9uUcxhpWZRYyaw3V93EusxXRLw11ezY7vDMTiecREZW5ub2Hep8bzHV",
  "key39": "wpu7wLduRteA2p8JTSufnyx9Z38C2ZPsrcmaRyhzrErYgLLhipx3FaKiCvwwuyqTMa5Fj4SYi4yEY9xJTvDZBJp",
  "key40": "2qCxFsK2nchKL6tGnTAqLTm5837mtmtLnYKXUCjEZVhQeQEnnZBPFm7AcSqQNWHTUwhrHwfmH9BpA9okxyEQ18Cp",
  "key41": "5zGVTWSjjCcVzB2kEGGpqdAVFmjUN52Rbpk4Ku7LBcaxo2qdaDc5NjzSvbid8hnBdYzR12vqPakyRbfTq2WhTj7T"
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
