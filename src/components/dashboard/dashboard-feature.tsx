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
    "u6qzGjMdEHLPYonqd8F9BomQJYAESp3Mgp1vpUKLqHT3uSXemWPxPqWN2ACXWe3R3YHDgh4WR8Aj5u5Fp9d3fq1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q3CQM2AGEyjpxAcZT7vVV5tBWjEfMt4nADzdiYTzUA9wkVw2jzNKAuZTJWkCwHFisSY95pD47s8G6KXSfhnq5Go",
  "key1": "2a3H76y7ZjM5NNHAfxwVyWtvyLe7YVVB33aqjVGNDLxdLDWGsVKJoMV95NTTQXg4ZZ1ENtwpSNmQCDnuUprKFbCZ",
  "key2": "3ya13vUKsGUcwAzUQDygaeRE9Wp6SRfszLNvYa3qrbi1gtB5zYiPZ5JxaV9fcoBM2n3hhq5KhD6QaohGbyANBmxs",
  "key3": "3nCX5x6mvwGFgjUk8DpD6jHLiTeaaeN5ebQ1ByeHE4E4t7vgRhz5HBbzHr967C28fciS9VSWBqkdpRpV4CtWfDih",
  "key4": "3xutvpfF9eMrP493fSmaSVGbKxnui1vvYPBhn1e7B8vRRdfCqRqA29W8i2gtn4XrF9iSUPDSLn3CxT6NBM1am6r5",
  "key5": "4GCafKzmEc8XsPRM3uCBUuLcGqZkAiShzuqs21LBsbpneZ6yyHkjUPykqxRFWwjMvWudHNViKWdLApuqriAzrJDp",
  "key6": "3ThWwkTCron8pa1wN9qxebigyGBa6HN4EEF4B9iJXuinqQzptbqtztk1JB6J9CxjuNbqgSyUMSreGQZpLVTxf8wq",
  "key7": "4mYKy6XsTHoQoAAV7Ar43ZwK89NQToZ4Hnqi6TPp689xucVwnDnVixwcWYE2xETDm3Mqwui3ZUor1Cgut8y7mWxW",
  "key8": "3Nx9uwqpAEYv47Ky7xXjwpmREd6jNNRcgtmJkd3ajt45CMSDJWsWar2ra29ZmYWzsWfZ2X5q2a8QTiip2pw1x78C",
  "key9": "1zuiVYMYHmsLNJitBEkfDWVGUt3yQh3XZEBX8Xi844bQfqE9K6Qi7tqBfH72ny5cCWosP6whjJajL2GoLjGfyCh",
  "key10": "53AJnKeqSGi2yxqveaQCsQhAKPzVS6yZpEdwCfU3vxuC2LvNTQwxDgGUrQgkP9DA2eSpgnoqmmhaBqsHoemncXhM",
  "key11": "2XPbyjoQgXGW2rD8wEFynmqhbbyHHh23Z9BKdcNvPfxVmJsAcNB8myXyfxUReEdtNzADLT3XA8k2Bwq4fSvgZ2fa",
  "key12": "oimrPyZjSPuF2ss1M7QFQk6rK4dRXS8vNTf5aKbBeEqCAsGxNzx583bi6258DNpQnJn6ApUUw7dhmqSkiMvnpMu",
  "key13": "2QkPcb2Roj4aRh5hZXQRJ4L611UeSCsKK5CoLC1W1uD7W9c4HPdGxsZvtfMt1ia3RMtqusQwS3vSh5ztwe2ocQrY",
  "key14": "31X5a58HFQ1rcQhYJBfYqDarn2TSgFHK1yRCPKhLY24oe8DJFc2EyfUC37rR4EhUVnsn3PhxxzV2jeXyAYydr2XT",
  "key15": "2Xt8Vvw1GdZdcEmGqKS47cu278crEFGNtwLXu4DsdvNLFiiURYMgmRuShZTvkUHxx52fn5SZi2ZZWFtcpEsmVijg",
  "key16": "5Mjgy6ugMWWe2paRLww9bD8mvkmyeV56xo2bkDFzwcnUuw98xxW7G1S6xXjseULX23gsRm3vyJpQNRQDs1joiX65",
  "key17": "5vCADvNgfdgtDsTJNWTRqpcq1sUabeuwUWRahGVs2ky7sgH7AWL2hGX57ZuwovTsgFhVhRfCGZZbRaPNfN5NZFN2",
  "key18": "RrsfyVTMmvFDdBtLBCyzKPp1HQKvtyZ7WpkjJJgkXxTNv6q3AoETJFEY1sYKcndqDntUH378s5VU45gVbTJDdvp",
  "key19": "4hSP51E6poFLpdnoKT75PixJo1EhjwYJb5K3UDcLQXXTtuYD9DDQdG1cZEVtSFnSZVCazoxh1EUDbhDBMD7DvJsZ",
  "key20": "5LdL7wEaozfjF2Hhbm5fdtkJ5Pj1pM5TjPRaMmZ9ZiJ1GaxiFgEoYvxLAgxLiuvrSYcaCfLXkgchRKgReCwNkSao",
  "key21": "3zWFb1Si87f8iSAyaNvGK6cgiaDrzpaunax7g63xmpJvfSp8JhgS3zAd2eyDVMpeXerW1cjEiYdwD2ProDVov2Fw",
  "key22": "4g7rHYoGxfjZ8FgBHc2HPV5ARAyCUL3UyKSdte3NpB7CnpWyP5vZWQMdyytgx2ftHUZcfYhRYEezVAcnWDxxgCEr",
  "key23": "4BiGthNmWifLvdHYraSZoyvfY671TPNjD4GnLbJrKrHmBLhB6qvndjUfwtV2RTmaJPjtRrpZenBUGYA2FBJQomor",
  "key24": "3UBkYVJ6ddBFu5VVAvQFgVCxAhaHZm28TXiB3rtMMWvXDFiEbvAg6p79Tf3FJneeqMJc72idBxTJXdksaJLLGdtz",
  "key25": "5MrWYwSGg4PQvGKvZEhsyXZLh5iVBuzV9aL6NJraU4pge7fwnopaFzGaTEh3EZNzAeuLxUaUMXDU85xtgD2UQkgQ",
  "key26": "4weVz9MxAH4vgd19ucBAp8us3r6Biw9JJTvkxsVzvoMFBXyLLwLsXdKZZWKg4GwUBrEABic7KPWN8NLHmpwthkvT",
  "key27": "3vyjNbBPyxUpgkVEYvE5VX9aLaq1fUTBSLkYWgcccBLrqbNNVgDNyijcvqfwhSfHyNXMnjVnkgVEL8chbQtMdfQp",
  "key28": "4sQDv1fmHUDEh4YNTxDDXgB4oP2gofCv7TGo4458ikZTnCR6SFZFitKhVGY2E4ShPa8GPWD2CZXgvTKFruwNweB2",
  "key29": "4aQdofZkditFd4G5B7qh5ZXLcdY4675uUnsCKgQxTpmZ565Ri8RNkXvi19xsNAP5Shdu4urkUm7UoinNTfXEChC6",
  "key30": "5s78By18MoyfH1UDmk12mCmr2CUexuogBM26jfLE2YC9t7sn86WyyXWqd2jp3mhQD2FwsiTXhvkkJMwbAeFCtFVs",
  "key31": "4C2AiPpHYd2zCiBN4YvxX8rJmrzm58X2nsSXgekrFq1gCDcqcZLWg8Zr9WdrczBZoR6XevanPKN5TyznLF4mBaQh",
  "key32": "32rv9Vyd9wEKGSR1mkqqfBcB51Xy1ARMqDizHP6JHu3mip5xF3kQsN3hptkBuYs6fJtk6K6qSNjRx7GcmQoGrLoU",
  "key33": "4hAMEHuoQhM1uyfXPVEopETkUzbzLgEVZ56TYiyFS9imHqGoTotPDgv6yaFkDZ8rZio7ETdgTip4UkynFWBUhWpv",
  "key34": "3CDyxJhBr9bAXytSikLBD4AitoHjEq8uuMh5yqnrVYkbadGgFarnbW84kEjkx5WQutR8atVrTbLi1vQDFP9Z97As",
  "key35": "5CfQMwqLh3fL5B8hokMVbr1CWRFsnX66G4X72FGFGaTzQ1Sj31L2JmdtVym3GLUbRFEELas7qkJ7pdVXmp2yCyUX",
  "key36": "4Gi7Piknjw8HNVPL3ryq8akd3WDBN9DSte7eawZ11RkP3y8znTMi8Yni9guUhsDaQEcBaN1Se7DANKDVvcH7XWr2",
  "key37": "pdzGEDD9erJtaKX3o6DN9rKWvEZihCNNJBenLhtgoZx5c6RYof1KZ81W5XLDUDbfS8M8ZuH1p6ZkuFo8Ypn8fmn",
  "key38": "5vh2S9wpcxutgrYrL8mMz2aHcnf2WqwnB31bHoBt7eTUnqGvBuvT6is82kGe7Qm5eoeLoTfvsTqqWqnsN6e8fqL7",
  "key39": "3aydLZQXpvTVM9dtixRWeQRqFo7hyb4KLyhCZPW51wkEz4oZqJL9JFWgGf4QHCvKECPczsUCK4SeRLzSDganr5oi",
  "key40": "4sZ3ANLzTvZAbxtBuE7hmB4U9WX1d6CYY1BngxqCUZBex1G3vLsR4QFiSQQqhnhPizPhYPTj62Fehx8aUmPUtLg1",
  "key41": "3xn8BKRrj7oFq4ApbJr9T7dLmiADPbFB7xrQUAutgKgnPatViQnaX7XX78qPap7XLHdQmpTZeVS8i52mSBEvz3n7"
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
