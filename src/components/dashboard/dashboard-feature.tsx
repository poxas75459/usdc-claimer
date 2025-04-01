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
    "3qwPWjU2ChhbzkP15C9nND9Gh6nBzv59JDVoBJ1nzLYqHJ6NCgBEyXbW18GJw88cdxNTMqGsJu6BCRCYhU6ngbep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L6aAUyZUm91R9QnCVEWr2X1jWUnJmfhry6RVnAEnHsVASBHrg6jGmcinDYdJwnA5wBMCjceP1WHJ2nHYYjZoPJ2",
  "key1": "2n5p1gy2fgifwmN6eKEwYvQK7bvfqoh1Lcb2BEtgzzSB8ckpVFwLE9ixwBmEZXVNd2nWcVfZzAsKL3a1uHsja192",
  "key2": "2Rv3wJbCW8hesBWQnBVKXaAwhkUmewdP8WbEntrJB988JR1K7TVSGKn5bxi2Wf2T4ykSd1bRdGyzmwQ7Ux6jAfiK",
  "key3": "47iyvCskXae4bpXivE8opnxrvh6D954fDMaNR4aXc6ZQ1w3toddt8JRkY6YAUt85W1HfVf4K9QQxmY5CWQ6rG1ZU",
  "key4": "3ssiQjaRhCHPjoggYQ1wEJ7PxKPn2bKD94VGG2q6W3AJbv5Dm7d9Lk8GNxS4L8haPL7k7zdTbAGoScGsSWedJHBX",
  "key5": "4TVGiuRpGhMLJkbBFbpLbcWYVLUgDuMcQ8w3cxRPU9tEPjKRQo71SEvv4jZibcmvT6x85NerQ3ztxPBjbt3JDygC",
  "key6": "4hMbE9aaf7wt1zbKgqUW2Kda1QT9pX5pJvuqK2PN5X1Afd6tjCYjcuqRvxHWNFtd3pwsCpWc9mMtCQYt68GLjzgY",
  "key7": "3rgx5D8eCawVt5YW2oBpF6Uz6Yt55LsnGJWqLPvhgRQQKKMmA19x7fzKYu2Pwv5PePjvYdXcw8esLBMBAAV3YLD3",
  "key8": "5XfuLeQC7nHFcMKWc5LwiNDkZorBH5gSbT6RBpLeKpARSUJduNmijmf2kFqBco8TqUnihPyffsNv4C6w7BJA1qti",
  "key9": "38PPQBig6KQPZM3xca8ttygf8qKVXwWgRuwVrX5Hrt15qErmmwqWDrnFY7x2bBDtwnKMANcuPNp9iN6ap6WYRvkY",
  "key10": "31mPomFat34bbUBC4Az89dcsogpqFg3WmWX3vBfLwEtTU4Veg9ioFvjSehz2soFjAe46jCfXbBEQHSPZyALDyzV",
  "key11": "3d5qTqs6oVsinfCT2pxraiZo7PmEvws4ZcJsWSKF3EzqhTdWcywoH6YmupdcM1MNidoWqGVDjnaw8HTSFNS6oM5r",
  "key12": "65YodBSXnBx21jzqZswq78jF5HWKkhd51Hi8YFAd4htnPK7QDdDvzXSjBv1p8R3FBGrFczuSmd23u1f2oFRe8mtm",
  "key13": "5supbmBYL6BUacBWUgqEsmaWRK4yjeNR5o1gqVdiBSZsgsgXkaZhxrj6vxY2jkjNPEfzEfQqFPKdEGb63mq6mPJz",
  "key14": "5JqTRJK5yP2vLFGktsuut6YWBee4cGLN8soynM7WaXXDzGsfsdMvj6fi7UVBxrUcrNy6MSsKB7ZoRC8ZkoFs77jH",
  "key15": "2AHJzb4HnxWtQRsGQph3VbTgPfvSvymKtRqjJFY6EV7pC5uAnHSEodERc5dusBM4jcSxSRdpj8PG31G5nCKk5f6C",
  "key16": "4Xt7MWypbTXT6HrjXg3bVXBC9tccPGMNC8qNW7LfD71KXJoZB4fQMYyv2Anr5Siyfr15anzK6TauQhi2uNhqQKt",
  "key17": "2P4AHkMKuxXJM1xaNVYDXS7gavxYRMX4uEznMbuqCeHqT3GGnKsejG4fSK7CUtCeJw8jQ39uH5XaJhKQK3sxxQZf",
  "key18": "2Cv26rg92My7XJ868e1vPMUnJBVWgDCpoFk7RMS54wpXNtNEss16iwzCnMeomhQ14tAbvRd6DJbjqNwfK74H2ddr",
  "key19": "5oSPHVAsLkh8mwWKFvi1xYqTKbNQvN52RmVDyRKRPjTB4Cq8UCrPe2A2T8jyJhr71PxyLXndYscoEnTRDhDbxHaD",
  "key20": "etXa34zid3mrSi7Zgx9fCTjsJRe5frt4iWDC9UcvYcsPDwgFJucpnFsWXEwTNFo4wnbxT4eZZu3N7hyPYBFCJju",
  "key21": "cgEW4aEuPARb89y5Viok9NZ8qs3A32QqKEryhtBVmegJKrtSX2H17twJ4nTD133a5QXMMqjCeLxBYQSN1bjNvBU",
  "key22": "2LBP8ZSKpGENPK72RTdbXSKBqenFxRndKBHAzu6qttc9b38RWQUhAcS5dMxZpkd5XvjafHVBXAYv3QNyue2CSYAX",
  "key23": "3n1NjoDhTrgVcoT1WqSqwVWhYp2Y7pghws7QRVcvDkWKh2Kbgj2iYCCqxQGbjAGiokofehNkVEud3Ss61uUQumqj",
  "key24": "52k3usb5fiNr27ct6nTzgQcEoBk66aNLsLJWdZiAUHsKTGKM3KUN7Kr8GRt8qmkC6aictFnB9kYtb3U2PGiunjiv",
  "key25": "2wW5QHkCp2cLzZZEGkDjDKkBHaxXeQUH3yM2X1PsTkuzNWxpUZqwHNRt3NtujzbZH4k1yLDzNxxXqMnK6XZz4kpd",
  "key26": "vbtzLFNGgAqcVvq5iEPdJPs9EGXiJjTtY4CCZDR18AWougvJPdLPLCJ41XdXLuRCLH7JgUyEQcngEkrSs7JRmV3",
  "key27": "2MG1bjYhQZiNBMX8MvVzYjJhUDgK9W7adD2JdFWFWnqTPyBrY5ZewQJoCKyya8Kcx7rNZTXuV697JKB8NfAe8gdT",
  "key28": "35XbtKduughtzVqrBbQLPwYhYpLePXUhPoUSd9mRHo7XH1BKiCrq9zTYF6oTruHWLmvt7UJGWLcJDFZZAtueZYbz",
  "key29": "3YceW36bqG72M3mXc6vWQnAY2nHbArGzRMmAbsiuEHcJrWgre7ffgMB1AUhYW4ejUz9vWKkjj4iK8UUvveLAcHNW",
  "key30": "2LgaEA2e74YtkF8DDF2pZHyviXj4bo9NVmDqw5N4irjcSB8QRFfrZ4CFwviZ3NgEUMa9NFXRgR6Ufh9pbnnZE5Es",
  "key31": "34zKozjuZPVmnjSPQzssZ5Hnp5HV7ikQF1kjVSU1e3q6Buarb9BPzGDScX111ezgQPEWAx2CSC5EEuj2koKGmPkt",
  "key32": "4Z5rDAkyPM2dwAnNPAbPbnc4UNivVvNucKiLJK5bheQrNFAz7TuG9q1VRaZ14XUS7F5bTQxQnpraAW7qm6oGjhT",
  "key33": "FP1EXEZYchCCDG6j11wwvU8gcGiEEFZQhRiiPDSwCqRMLR4W3QtdvMLNwgvQVqQuU4PcP55b6g1tHEz7N7VsbkP",
  "key34": "3DGL52xmjieDukXUTFk4AJgKKMfpWA5k2fK7w5kHm6iPSqEkdQWsYoyQ7Km1xdU1oYjiwZ1VaQnv7LHqrCu2eNnp",
  "key35": "64rsrM8K3FDCDfeCQ5VjxG1FdJ9WLmn4nuU8VB7qxuFFb3hhdx1dsR2nNX51ewDQUfLfzRUPM8Hfe5ZiqCiKK27P",
  "key36": "3dU1NFFH1pV4vUCn5HpY9er8Boyi11jacYrvm7rCp1pDnbv32voWfGy2E4oMtJ96txC7V4domcfWtkCMbDJziSeg",
  "key37": "5KtXpMTQu8hXBiLaJ94rkYoFETXDAADdvKBpqNcXTu73FyH3uZrTefBbDJEoS2yBbrkdYUDPX5MipaeNMPiJvWt3",
  "key38": "5Zbj2qhnDMRbpYChfMEPn2cYPsFA672yhRzsvVC13bFn9w9qPE91UK9eyQzCQHfUHmGenR9Ah3LvWZ3ECsS1xk27",
  "key39": "4k7yWTLgfXd7bjxUXsaDAXjQKktWtFEASmVfYJrbY83UEJsfB8HSw1HUk3SLrAa8xZkPrXzCdQ4bvMVFx1HtcTzn",
  "key40": "msAs2KNd2SpeQPJrww6fjmEKbsFu9KaE93Tgt8f51jQ3C8dQ5M3C3We2PBQooyT8DejoRVVhkhS5uckPeJZS4su",
  "key41": "4fmFgwJKBE1yEhouXmAf4Q82oV2c8w5xZGV6NHQEag9hwbwTmcMG8eFDAhu2Tk4eaA4BJ2TvkEJtacTPpFHLptSt",
  "key42": "5sbyG5f8UkHR4TZk5oe9GAb7En21DWXHNJZoPikNNEUkgBhp133P4UmzxLoFFc5h2G3MCmkFYFMcjYugaoYLgUbK",
  "key43": "5rmgVVoN4hA3EUUihcTPFa9ViisebMxzQcgHMDSZbnLkEAVK3wAcmYx6g2EAs7tkePHw8EsQ4iDPr2TNSD6qjPcK",
  "key44": "3tKRRcAAxCW6Fr2WyKtMaYNboSxQo1pRBZP1yFtc6ZTEo6BPYhaHqPLtHjtJ13LxynFd7DTidj2WLasgsdrVw2oh"
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
