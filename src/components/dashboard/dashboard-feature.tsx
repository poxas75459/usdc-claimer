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
    "3vrHCwPF3hKGRrcAcyUtc9Na6HHUbwn6ZhXYRV65Uw6yKE2Cc2J9KVaBAvqZgZ7fqVC9b627aNrnBz4vG3buMR9T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HjdAdytCHn58HFBa1FV9yphgUAWv4sAgsdHHcQ49Nw1ypqCTfwJECP82cx5jevFkvXEyaCbzhA2goKTY2BmoTrr",
  "key1": "bkiVCJr5bszGJ1yxXCBEnwDkyhb6gPqGhMGGApFAE6UJcSs33wMfotEpUGU1F6HuhLzt9bgyGdPjaqQckY5AzBC",
  "key2": "4pBt51o5WSLoyQBZw3Uw3bfjzc44qPs3YTCj7sZwMS1NUkMFVEQn9yHT7jYjBhW7m1Y5XgFeQiCYN9buwA2ixhkT",
  "key3": "dMCEuZt3xaDXYELcVZsCUjAmRD9EGpyxFsKa4MrwJhmiKJhtL5mvKuLZucEZaE2xkdC2gaiiMR2mX7A7wBSt2PJ",
  "key4": "48g85j88BYBDYKrQJUjpQkDxUvwZ8zaqpuqqHGN5XFcSq4qDbcK29uMfzbhM1fpCj25f1H6tJg66PE576PX4dmzm",
  "key5": "b393KSLPHyQNqAjxvcpqCwqmmPdCRxxkpJEGSiszFP6uqWoWFwMSH9HwpRYKaiTBKso71ojArH1mevvXfxNs6zK",
  "key6": "2nwm54CuJ4NDkniCzuJfC5v8DqoG1RPJVW5kywAb3Pd4NYQq61z68werowWgWkuhnTDBnvnaLxmT3eVxfqrbatMX",
  "key7": "31kRTEhWjYyEJXWYenx3anVoePZRHb2GgTXFnYBPk5BhBLjh6H7s1PhekarxJ6Bz7Z8tg7VAX82UKtdmFaizQodZ",
  "key8": "3yUq8P3qPmpUsU87Cod2R2vz2NynmsHwCrBjLZejfZo6ryYrV2bPGp5RwProVkR5BrhRS54QwrUjWwYwAcXyDioX",
  "key9": "3wGB81Jt2ZmXdaLk5mYqhBLZx8LR1tpRFRio8NMYA8QLcq1Cf5ykKLxHSbLVMKWy6NeRcpaBE6SyM9v368CFx7fe",
  "key10": "2WAp2n5DmKchoVBzs2xVUsVzNHaDRNBrGbqUH4w1PrMXAZfemGxCgts4hmmFGh8U7hatr4B3q27LB4VfBcqc8BMR",
  "key11": "2nhonHNSd33HKZ8fULJ5CnybygWqrp6zRDosqssXqgzzPQ9Mpvhv5517RsoAa6nrnt4f7QcpJPuQ98rzk4CbmAnT",
  "key12": "4QdSFLajbfv8i4VyV4JwpmSbiQh6978ZXbFBREK9W4BkEuJ3u1sRMPAsNy1VYW7iJ4HW19UXmHqodGtwLDAAqnvh",
  "key13": "3tDcodrxRn4xQbWwZj8WFfPSGhLASUA3yBKkTFcSjswSe3F6PEDGKunax5aCJHaLgVm5aqTQF9aZg2ZsLFGpcZWf",
  "key14": "UuBjWAe5TekEtehEyAzzvxHVYkKaYg3EC8BxerWY1xftmsDg4jYzWpj5yFVD7QvE7mq9GVEXbGvpvT32Hbi7MmU",
  "key15": "3ssg5Kr63ZEmZpwSQwQFBPh6iJcbdXhfa2tzGqNPvoCZAuVEMjtzdfNxpK6dTBfqREDJy5tpGAetwWmBcAJmA7hP",
  "key16": "3XMWa459TUmp8no12jx6C2fp62d8oA2AJ9Cq251SQjZ3ZctTZ79KAbrJmfL9E418F7sfQ7kf2wXrSbPoEVyiR4R6",
  "key17": "3uM5jQasiZyZNMae9CvdB7Yjmx98WeXLod7BvyExgWBAzFCV2fXoAowUxfuYPRmzAiYnG9dgyUR67omNdDwGwp6j",
  "key18": "41t5G3yhbhkWiFabH34NtWHPep5PGCNoSyjRGm2HuCgJSrUZtqECKbSE2efdKatf7Q1eWPJRrdCQEkJPV14vV5j1",
  "key19": "JADEJ9thVKYFdv3pTjbKGkyU3NGscMdCJ3kqBjZM1w4uLZA57hYDx64K5aHSMCs56skxXyGc82GxkhsZMAeaUWM",
  "key20": "2mem3TLp99YSdeWpv3Ccd7qNVP7SckJoFrYsYbe6175rGKESUQBb5xCta9ZRSvBSFr8BWPHGkixphcvnP3vh1tmt",
  "key21": "5QM9iXwxRWGA6dDUsPPbx13ctQVGyPzhkvLg85Tf4pBRDGFRaYxSApYAgMf8j4DL9VuoVhskPj97DrpJecUcLPip",
  "key22": "2UqL6dZsfZyqpk8vQKgRpRDUUEGaxyhCoMTcHk2ReeW1RRSyk29cgURTL7yjk1UDMLjYxFWEdMMYNwnJA2F8CpRx",
  "key23": "45vJDuJDW3myVViFYhhBP6TcBFxVTSSFSkuqUZNbTJVfJAsJ7CBu8X74gaT8Etvx2HDQTa4Zc7wgtXSR3FH3AUKc",
  "key24": "4vQv4qT6ynXsrU4U3tLwRgPEkGJ4SLWZUfPa3pg29y2poFFCFCr1W8BcK7XLDhDW9qUpofEzPtYaEuNq6zE2zZWB",
  "key25": "idZC74Qzx2LQHp7dc8p39VQG6VTeCCGGuxgqJq4JUskXyXnfedG5RJBQmNyCzGwTP2136JjkCKdVNgyMw8sMQmN",
  "key26": "5yoZYKWsjmQCwep5gLZzvFkkj2FGTi1z5ZmNNAdHTPfCEopq45QXkDnC3aVdumYGD6nzxksUvn1NvdiiAn2yyeVU",
  "key27": "3N25doKAZ1UpmAiHB2HV1T3iUeeLvhFffGZX7j2gXefUKQVAAyRN5EwB9AJnoJjjfgbPWKRiAAfUTBRLAB66qus6",
  "key28": "27Mv2nNVJzwdPvDETnLYGmBVh8NQ63jKUTVan1UYUiB6qfi2RMjyNKedDYznzNRsrQHH6RifhDZgMj32p7ezwrK4",
  "key29": "4LA4oDzsGzfxhNjN52ze6Wp3t435uJxc5sJDgX4RKsbzWAmGqgjN2kyPbbsmXVVNHGdHDVws1nW4YVPaSMhN2oCw",
  "key30": "2aEKTSKZCWwsbpLps4Ge1ewXY67MrRn2SpbfBR3QLCBmCr8LLZV9s1Ri9QUeeTiRA738qJbyZXeHCmQnZ2QfLAob",
  "key31": "5oW7UxqVBYCbkFiVtn6UvY6i9USd6SqqViMLVA5QziMBh8heVVhjSsQ5PipjhCLUfFQudUQ9FRKjjGNmURH39oQE",
  "key32": "2Dpf3ABUikJFFYRXVpN1MPg2Rm2S4h5Rm4jnADu2WDMGuqNRPcDkp7dHAxS6xduYtAiUqJ1Z3etLmX2UzfdmyEk9",
  "key33": "23zKNfFyziwRFNYLfGdstikhy9v96N6SVDfz5VV5pG4iYWCfeKiR33UVRTbspDiAXQSkb8hr7YEyR2tLcNG76j6c",
  "key34": "4acV6MnrbtfM9D3vregXxi3J6E5ngoebifTHWCjL7Z7s1AFCZ6qU5YmpWsXDBrUrDbHH5J1PMCLX3vZ4sCrLR5w6",
  "key35": "5VrbxWUqn4S6trPv3868Zh4ifgf9M9TpjsVyaXi4Pg8bR1Ks6J3kjoDReNBjSQVgbNgSGPPKn9Dxg9xknasygDxx",
  "key36": "2dMg3awGptHrmY89kJdrX92RdCFzDKpYDiSKRi1iRsT9Bu3V7Mdu3YAim35ktEktqxkAwtioJiphnnTVGgjnszPJ"
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
