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
    "rzscHGUFBk6iyB3FNPRBispqAwePAkPutSAnFmXPZv5ywX49WVZ7rAoYNDGHUFmCApsRSrAbbR9BRnCKXH56eZA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oRyVrPhhmHzyhUF5E8eLpid41i3Sc33F1tK2kHfYG7NKmAYfpGLkqYN5WirAJ62H6TB2iuVACwzqjA123jEefbX",
  "key1": "3NLDCfHuju2DeTsPhW65otdrar97agnU1v9YeG2J3t8nyhtWRQ9zoPUPKBgWTQrZ4Pp181Q2BP1EpKFLtkbgpdRa",
  "key2": "61tvZhGSHiC7uktT8UVbdBe8njrwPvSVPd139QJgi51khqqdHymoyYvqQrWQL2oQWwSxCeVxV8qxGByQRoNUBPJG",
  "key3": "5bfN8XBM7o5BSwnu4EUcxdzi6VQaqUqaCJVtCgUwXJzCGViVf9WbdBnjSNqR75N3d2kGZZEm9yxzgWEUZ22ti3iD",
  "key4": "531giUPfNZ5cjx3ocRqVkjn8TL8vns7tvpUhNmiktHc1fshdGivuVzntz4biPadsuREdTnSziePR9daEKrHq7JvK",
  "key5": "UiNTCUJ9CBUBbbCZYasoLuBY26XfG7RrwBxVEgXxa3AnF2xwvWu7LKRBifmvFHL4i1opibc6hDaRx5AwRnNFEA8",
  "key6": "62uxA4de2u7RUqTSpfYXD9vfcL6HLtKpbAzxKei7CDp66Jad5p2mqUqUqpDkJfSZAM6qjhj3aHnXqKv1hGaf93C3",
  "key7": "3h7oh9Xj1YaazFJriTG95cQJFkFxF4veWegZvydEAsNgomiTwMKEhKXcaw3UxKSe6beo1csUEYhhbQE1D8rrqHQn",
  "key8": "639rsePSvS8kfXxW94LnGZxWi3cZyxuBg3MhfJxKtz8ijKnkYyCJGHbijTYpyPFtshAstFxM3kQDxQtnJqAqr5e4",
  "key9": "5uNKFnXaFqyYS91JBHshDv16ZDJyfvYBpQKm2ShrDQA5o64qcG51BqiGgDHdTqYFn4JrXTCKVti3b4H3DLNRdCfN",
  "key10": "2LTYHuB43qi1fN6NURZwQESVM2qaVmkGbUWChZKYcADrFdSoAXgmyjeWS4mXvcixqKMFLzXuCccPzGM4nra13QxM",
  "key11": "2ykoToFk6qBsQpfpG5rANNUPGySqMd2kbJWDDNiUptjJ3WqHSaHD72kkxvgDxqr9zNGzQmhYfAfYiaFwXubuaU1N",
  "key12": "2QbybmUQuvDQCqNfzxn2QiNq1g8dH1VKQDNSELqtPE3KPdy4ZMKbjyWQ4o3Q1vH5ypU5Wd2BA2ESkxccgK3dMs8M",
  "key13": "3ePmU1yJkg58EWEf7LhktNXAeVoTu9KM52BjUuQwoMFvTSditehLetPJbwdS3VRKVXc62grMcxRV746EK9gr14Gd",
  "key14": "4mbRVBp4wi17QmsJvBoZPR4f5JJuhdbJY3bm6cNM2BkcG6oeUNVVnGJ2vwXhJXqNHiZ83Vq8GzLYCHMkBDtqtdZ2",
  "key15": "5UJmASLGZ6CcYhsNfnUKmpnxvtowjYncu27JvW17MXgpaDj29L6k4Vc64JxrVoKjEKZvk7WjRCqF4A5Ko91oaNye",
  "key16": "3YZhGXevPwoPeBiKP6RvX6hDmqropnvbJCw1qM4ecDAHTHKm4T3dGVy8uqsfczvjfW1xzc2tYizUvVUSTbMeTcph",
  "key17": "5kwwBPvwdLJerDRMm7LGP7SG1BDzA5WsJv6Ty4BukcHJFfU82ouynvWRk16BFATovBp8rtyp1CgEtvPD6Lkrtxus",
  "key18": "3jkYYvooaFTfkR9YaCTxcGRyCVDsUStQv2PZqm9DAKqJtvvFrWk4TMKmQ1P8LfFkZUC1AaEfuWKCV57q89dNAJ7b",
  "key19": "w6vFBVmC36srFTnQhQKxYu1UKY8ztkLgZwza71qSNsquthFfhTf2jxZrPePK57PNne9DpCHHQrJFUdjHMi71Jfd",
  "key20": "3hmUTvUiMY5p4q7YAFDHiMBztnzDcty84ptaocnQxsNvnJZ9DJMvrmEk6fgjcq4XJPwGuXMfQfkVxkc7gPMKK9bq",
  "key21": "rzzCq78EsEQg5ftkseZ7zXscFRGvK7XtQsYQpUEGeacmYUiNH2TSoUdQ4tjDmqEK8PHK1rvkMi7wpz282RhE2o9",
  "key22": "4KSvzNkrrm4B7JcRuMdowDTshdHVcSxfSHJxCyJyLCPWBRUU1tXbzwdRuzY7YUL9t9FrDaWW3CWKCmhfGeCTspKi",
  "key23": "5fDY5rbjeLP21ko4gTUadRUTVZwNrKhBhFKyPDBUsqtRqDUJa71vmVcrEDZVTBN46yCGmSvmhdsFjTFZBpiE19qC",
  "key24": "269jaMZ55TvgETtiCAKDPwsrBzSirgzfJwrXHmfj6ZEek3kUHj7iSBX4hyz8cqj9NX8JqWXSyYoPHN6vy7uA2U96",
  "key25": "38qG7bUtGayz4MCiD42GvhrCoBV7Jfxm7ywGy3XZdwUPP8JMKompgVywgZSAvRKkZhJ6AZVUAndikqN4wTe9sr49",
  "key26": "5zTAtZciEGyvzhB3XMqThwbsQ4qqEKig6PeCBokCsm1WUiEVHpoe2AuvUDNCmovk4jEL2ofjW7gVs7XGnNVzidCw",
  "key27": "5Q1yB7rfPcLL28NCr5jJADNXaeVsfPfya85UrcN7bMdFVL3eHzsRtXN54bbwZdHipNNigLNiumCfPKQNxzat3iSu",
  "key28": "3SskZebD38SnLhKtohaU8HL2Mi3CXtu1i5q82mbJECrtvNmzXFhVfrjNYCd4LmukU9wrkTFH1HHGzQ3yqouWRb5o",
  "key29": "XajtqCwTkkSjzHMgk8fQ4Wv4qyo86TnHB9wwjGdeDgRzXfTpc1G8AzBZussh58GQGfAzFEpkzDYdJak9fCixsZa",
  "key30": "4oywzBfk9U4ZWbumSusUKpTX8xXhkpCwC6XGTEfWRyuXWHRFk62RetWCZECRkxDwszWf7zaqdrVqCHmvEKJnTqfq",
  "key31": "4PVyHLAvcWjG5v3Xz2uBoUYxSfapwXWn4v2eVeYpXefCqxvz6tH1vAj7GCY9chSh2uobREMvB2YMpAFR1KSogDq8",
  "key32": "s8Fuketi5tizqmCDmzYAkCse89gMgeuNiHUA6taPKs4kqYLQy3d6nKtZQzF2JYLrgWbJwgbQCfcsdCtWW694vtb",
  "key33": "2BnhGG7DeC2Q9P5UGBx4HtGjA6TSP9k7mj3xfp4r9M1cZ9veQgJP1qjA29MG6vQYC9ByNoVHZ1HLBWdH8fARArMf",
  "key34": "2DXh2prwN8MCX6NbS5C3SzNZMvv53a5Z3tV9bZ8TLRKbUyvtHPFmvvPVPH4pFHkcWF3jqs9CyZbgFzsh1Mck6DA9",
  "key35": "3xzfjbTfKMQLR8uq1mvpNcKbs5vGJqR2172w7LtT8Kt5qVF44k58EZhBhstsWXQkGLzTii6fUrhoaEpdA1hros7J",
  "key36": "37ckkrcfP5YJCdYaX75GhLeW62B3BTyvvQbEv6qYHH2gmXLnscjyyTyFUh2715MGH8Qc3SozoEz2RMehLzRx6Z4G",
  "key37": "3pcnnEC1ZzHaGQNfAgXrs1aaMWRaM6sF2392BaJZDvgnaCexSv9KW3bbnyEhsFCdD4i7hKK4qxWu4dmXEmVuP5vL"
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
