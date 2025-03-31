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
    "3dcfzMDnhUNBcSJnA4dBjnitY4rdGAhbLwmHNnEuzXL3Zmp3H8G2hCjmhJ6wWv3yUdAEBpa2JKiPWFzvx1AEEQYu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35QzF18eYjmiphxZUTTn9pECYF1AZcGqTDxyjhXiRWGvYtNrn3wRaHhtYsxj8MrDoGPV9tP28QnEqDJ5xWAUbTfz",
  "key1": "4GF22sNHQsUdud7fGzXAYEL8wnigQEzEgscqPd8oaRZxmNyVD22FRkU4u5Q6X7Mv1hbW3TDAR91JHEpJfAz5TgHQ",
  "key2": "5qQj4qg68z2gH3ieJxfbz4tMYNbRPCgYv1LxkLAkPy63jU5WWnmSq6ERL8A7J9zWRQrjGg43UETcG9TMiHD4btWP",
  "key3": "4NjBxuKQy9Xp3XzKSeNvP3tP1UwkByvn6tdMPUzY3dBXXUjofJ1CJKz7SaM7iVMghdC2FcQxyrPGqTfRzm33sp4d",
  "key4": "5bMuVWGBEbkPnEujNVCMD1Sd3RCTdADf8BURNADxSksEeFupcTGkghEaC9wXfaZQEtmuQu7NjcxkBD66MbosSqDo",
  "key5": "3J361rZsDsWK39wt1UMaPz412ASnFcBJEnSWs5YwGiZ4TWij5x2CDtdDcnJG5rVYZ7Hc8Fj1MTDj9vKGiADJuo7u",
  "key6": "2z1Jat7htnvsZKFyQrnsn4gkR5PfgkW2nvAJdjM79ZrWZzopY1cztJMxtZ7VXi6s3bA8a5QtVW7PTjzoaTPsdhT9",
  "key7": "EiVRs6mEK3wZfAm9Y67f8ajSYV7GKKk4MiqvnzHKRKe1TcCETH8kKVyoJwUzs9Fy5wEmNvQrDeJ6ZMDetpxMdq9",
  "key8": "5SVhbf9U7CaRkMaK9WoD8twa6MpAMztUWkBgLwPHbiNWngJiDyY22fFkr1qA2nqcW6aQW5v4Vsusi4z96n2BVfWT",
  "key9": "29ixechZ1rftRGqf3e7hShvo9BCnHxjErFtmpSfDpsXX1sxYLcTc72VTPzNT7DL6GiHEEciudP4oASBppns1FztW",
  "key10": "2XYSoYsY8CLNE2ARAo3aayrjHN7jpA85oadEqSBRukVmhtptknW9ywuxfYze3AE8661gRfba8dErffJzpPb1wMG",
  "key11": "4rkmbQFAfbdyvoaihXczSQHKx9sKDwPQaq1ueCbPRRTdSGWJtFFouGocDUUAqYWWJRmsaJFBCcuLf8yBPq7AF4VM",
  "key12": "5dLYTcLJuhpdpV7UmiW42XBRrpnSZQt4AQivG2fE5zDQmj48PVvBVaGfaFhkuiezTcJ65crjNMnyHHpETvVPQ7fR",
  "key13": "2aSvdQtiCdJMscAXWiw125UeLaPqyKDHo2fTUScqn3GSnUbxKENW9FPRD49tKpM1xbEYMnJLXComEkqv24UUqd9A",
  "key14": "2B2quMmorZFgb1xjXHBDknjcyzEnQYmCQpHC8WYPP98sVPeVGYwDDZ9SmBT4Hgi3ULMbHpfQQ2tvZzcARjYLdrJ5",
  "key15": "4kc9edT6JA331qyAV7mcM3PNaXLPWV8jzr3BgGQREvw5ju1SosBaWP522NBzRpHUiKJxjRpaLxNz98o4866nUZcL",
  "key16": "2spCZF3huSWpWR5JDi7tJcK8hzcn8NeMaPntTtWGSk6pPsXxpupnQ6jQQ7Fwqdj8mjJHaAqhtiHPLHVCthE4FhYK",
  "key17": "ncjwvSBDYzxBaXJPVdge2oeRw87tCvyuwuqwUUC2uc3dvSa1bnPcXymsMGm6drhCc88XjWRc3oDkaqGdx8FiFBW",
  "key18": "kqrzbn4tm8cA1bc2NsUZpFsGtnbiE8qwGaoiL9VaSxipJy96dn3R9ERqGYeMzJAK1jVQH2RcMbDSzHxFppxdBk7",
  "key19": "5uxr1H5Y1M4bZYcKf2XTRgVdEMPFRgFTxFgbQwG6aoj4DQQCB5WaFnRxbVyDA6pMPXQ8w4T9NJZMxtYrxNm9HQru",
  "key20": "4oDkj4jzL8PacvRTHqLXoJVZ5fzGwqB5u9UQUGJTipPNXzmozMcTpU7TgwktF8m6kKsREUe6VpEwt62JvcEzBVfY",
  "key21": "2dhQDeieStj5G6pMhTAjnqL3VDQHMADVXYqC6ckVgN65k4fsWNnrkPqHuU4jppSqCLSXej3LqjDU887FUN3huK5V",
  "key22": "5mmC9ghkS77sj8FXvQjJHAKjMvKCGHw8hChwVhU3veEzs8zSk4WXnrgod1ybpGZtbo2SRw6PFqxBH5TikCbtkmfD",
  "key23": "3H4FAp1BCQsYhSMNsoAPiF5W3yskUTv2DHgHDvSWj5rE9GSmPCbqfCJ5QEmCr7ePZJZCJzozSmVkqejLSPtoXjND",
  "key24": "3KMwx5pPUChBFxkMRTQ768ABsj4tkK6xxSpFRJcLutciLVzePwJQKY9VMwkkyQ8faa1NKpYmwNPgJk2khUe9TUsZ",
  "key25": "2HrQnd3Rw1LSPqcRS9YKsx1QjQibRFqj9NwEQJg6JHWVWKRdmZUr9rYuKzDEj3A8H3KJvwicCkL2oYugwUfTGm27",
  "key26": "3taKD5Ce4zjCyKBzFX9QpEMCkQQEbUodhcgCH6GWteZK3dAgEz4fmHw1VMYMAMricx1bffzor6tXfXbLnnB6iqwN",
  "key27": "4wFCpXQwhjWVQQY6H15iX9xes2LsjowLuCvkQqucShWfSCvcSZRPzf5AG2bSaUsThvmoAMwKMxQPmoUJCgvTMhx8",
  "key28": "379Adir88VYUL5nVHmf9xV1iRea3MJG73sF7AsNQNygwiq8ZdmQUWF6KyHPL3zSNjU5n4AgTCp2691WiKtbaZiyo",
  "key29": "3A3V1SQvKASenvh23HiA78UbW9QkoESfSnbSRsEqmqfDfgoCcojyKw2qPH9NHrRS67M6iWPzMGjbupft3qLnxWCs",
  "key30": "4Au3Gm57CX6eWKdofWLRtPfqbXyYmb7rFH7UEFnDhcvdwix2nt27LXM4LwDULRsvfP4ZHodmCyGNwLF2MsdKT4U6",
  "key31": "5A7YWBfzJuDaRMX3gx873ohCkjEmAmNtPsQkHqBrivricFqAmLu63y9dsaaMqyZz1kR99ymf17TpBXsr9phZGE5k",
  "key32": "uTLKL2qv9GwDHyKPia8Zhy1rPH3nWqwqbTqiFxF9qYjsWZ5se4YKKvyaxuMb6DPjvP8Dz1rammWtRZA2Ek7yJQt",
  "key33": "26uLuTQ45AV97W6M8wKuomLrL5Q8Mg82gPjLqfLgzq6JYwW4SETUDdV11ZdCDAviFWVDqWz3MrhDUYBp5BUJ1xwX",
  "key34": "3BBRs61L1LTJGYoKYNJDzxPBzN7kudkg3hgRRpA9i7Ge6smmBvxmTrKSCLzp5o4kuvw2y8QVXN5CWqZCHDJveL2y",
  "key35": "3ZwY8NZW9DFkv8pjVYjyjBjeu62efv8nGx8WRFeL9UFT7RoVV1Mvkjj6oWER4rVwaec6brzBDv3gaddVMfparwft",
  "key36": "4y4uZKR4HdfcHMaTFm3VEBoqWacritBoTFehQRzRy4pR6Mm82dF3TZ5gzoz1asaDdSRQYrEPzsEVGFWpS4T2HpUP",
  "key37": "yGeLtWKebHg7hhV2gcbrWjKETeThqh1ViTVcEvJ5UTXaK8W3oQkt4G4zyKngrUymp8kLyEjDNJPyLshbT9TC2DC",
  "key38": "3fg5soVgmZcoSUwU63TGHnppMDhPzCUgK7vP8FEZtsaZPCAFYX6xm3PuTnW7N21JWt66ytm6RtaYNfSngDHEKvpy",
  "key39": "3n5MxLGyvMYEWcvRHT14khpDBw4eAuDgWcQAfgy9ZxCXk9TBirm4aKtHnipTDaeQ1ThCERiVpgQkBe5hZF2U81UV",
  "key40": "7hxo6SunGkYVTwZkTPcDEgPReKJoFcNT7VM8Jh2vWWpxyPLdz8JP2id6fKdqbPF8khqM1BDSHhGsX6sGch5TcWh"
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
