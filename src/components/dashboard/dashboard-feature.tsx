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
    "4SNdbMnC55cCox2Sr6wVqCs3Rfqz95pvh4xUmxmdMDw3B6SXorxgTPrb7Kn4zjJY9PmbVbMotEJJEes38sL8ymyk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WzameCj2KkDbXTH3WQWc8eCVqs2o7DCbuZ8tQSLNdQhkTxqtA7MzYwwpbMPtcBkBddALkr2VaDdXyLx6b8TFtVh",
  "key1": "4padURVSWFDYtUGRGfSrhcGxeFoRhpC4XReM3jgUwSG8bFGnCAwU2jVcLbDSS4BPsdV85sn4ZSYZ47iU3s9X6seY",
  "key2": "34XnFzrfs4GZrVzWtGtZpbbi5hCUzBysubNUKUFXroQLT7cGeMPiNNBXG7tv5pjdDSwfiq61cEcUNhNf7XijR979",
  "key3": "25NobPRNZW37WwVfHcdWgcAEaRhQtztrZSZnq1UPZ82nfQES8J8KVzVNp5AW2wKAwLLhUTfjZiy9VH8ADMgM63Na",
  "key4": "5eSkE28GPYA7BCG6qdymaqsY4WhdZ1gixpC4r3GJFTNn1yUsCucK9yjKzHsufgty53azmm6nmg8YqozR9FrVaTSb",
  "key5": "2g7uk9xALbAveknPwxsvvbL2zPuNrnMCjSb9ydcHAwaQqSRCb2KCem8X4WWHQ5RX2fWvsR6v1fECRF7UjFsLrMn2",
  "key6": "29sYAwwFzK985SGEMnJndaPSnWPVTBnG5mkLTgFZBx5SLXwritHwBKXsR3p9PtT4uBSQmCDNhQvZ1zWdGrph4qgG",
  "key7": "3MK3SLMthHRrBbFAsNcbgKS5YafpxQ6ePGNZURAkxjHnsUdcxPtpu5ys4wnyzEkSBsFDA3qd2SenWUwPWtmCAGjS",
  "key8": "4qaCtejbTWmGEAm4YMfRNS6eEmDpfuBGgHPQqe8wzMDB77Z8NSroEmcMx4SRxurXo2oseMdmkMX1FH8CxPFkiRvj",
  "key9": "gUXork6bLtpmimbu7h8Ct4QxqXseHsF3Wb8nUhnEuoAEqhJYFwpnqLTVydpHGtFFLv4EnJWYbQMDb2jLdHxQygm",
  "key10": "KxK6CLM5pvYLx5XuyvuGHJSeZ7s9B6nN93uDEMGjQ5sk3SCRm9rTAtbkZPALvVBia2x2sx1nTdtLPsGMWr19epX",
  "key11": "5GpULJifom7kPXDbvDBmFAUSFzqtVZ7miQUwA5ryNceQWmP8N8GoX6nd2RKFWKXgMv2jwupLA8vbU4Q7qd6VnFpn",
  "key12": "66irkrtHq6bq3ubxFhijA5JYnv9uWWE93FR4tSrH3GoQyaGMdCfWMrVMy41jBazrbFdWD7QPrk3itMsN5pYRgddk",
  "key13": "2A2oCPNPSecLYrjNNYtRbArsEpahaFoQPPSDjnq9Z5Ssc9VU6SP9vpMZGvc1ryfx132M8EFnC4J2e8Z9ySs4VRH3",
  "key14": "2bNAbDhphKmu1eWnoqAsctVYQTt2Kg9M5UoHL8q6J7wFZbCNyzar2LTTDjnSzjKY8XZhv9mw1ZaZEHnKf2AZrREt",
  "key15": "52kPHiMygZzAV3sY6dd561cPecMVR4ez8mw6nqAAHXgEezfS6D73Fw9pgPd9Kgk4tgKRx9eywS6Dgn8uvtsSV24r",
  "key16": "4Cu2jfU5cTA4Y41gAAtCGAimRRcK4g7gZns9iLgaHnRc92zmo8ijDvwsaW888Xm7vYUQtzLeBiM3z427AE7BN2R8",
  "key17": "5qPwXJi7zaaj6Jb84xj3WDqzTtrP2brJbjJm72pTWLE1ozPkDSCDiJqhBUb973YUekWR2oYNYuzKuie5fErp5K3q",
  "key18": "4VY7qJfwtv499uqgDYtcikEih1TBynYesHPvoNqv9Z5dgZ84MmgTDWMgm9L44HeQxocTVJUBjogG9d437SuRHTmn",
  "key19": "5NbaSbBGTPiGrsXvGQRHx3CiTGDS3Txt9q7oJDy8Tbcg9aHuD6LiWJ8kXwj6aNKfCEJtARMy4Ko1V54MgVkTQEvu",
  "key20": "5EtaS8d39B5utAAqQ6AVvhCa5hNFYK87yfuGehduK9vP4s22c4vMhkX6gK3pUAaVbP4g8Cfy7E3nN4JXZJUkbKCm",
  "key21": "KgdMefbu4wgcyN7ooU84PiuqcR9XD9W9SD5Luqq44q8AJrz3xA34Aj3j7gfAi69mdGMY3gvNgbxdBCdLkkmhGNG",
  "key22": "2F9BNMSNmnM6Hq7Q1XzRfsWYQXP4sQYNTu9PfFifxUTXiz6da49oYWnFQBdhKziaR5i8v2cr9MfusNhtcri8Phgd",
  "key23": "2j99oM8dQLmPAoztQN5MURZQRmtNG2yuDXcJ7LygatXnPhd5QW4MHw1E9PzdtDYK9YaCrM5ETiYKxEdjSUc8h8ye",
  "key24": "4aGDWdJnQRzTJh9uyRDgnF3psXeWtfb6XS9jtuVU3EbYgebrUJ2BCLVjdCQXpzyKMd57fKt4fp1XdT7iLbJeKUjD",
  "key25": "4HZdJe5eymWMuiXcjUpmXcgWm7pjNZMp8WoGf82UttfP988NVGzrpGqfJcqV5LKj1DWfuuUru3djmxhWNbqbvzE1",
  "key26": "5pgsYWfnxeE2pgEtihYv6HFvuG5n2qpqrTXjFYZwF7KENvuUb3yWAhHBdNPuJVkMJZu33awFmVx2WMbJszdHVANp",
  "key27": "24W2wmF92jLWKp4f2Gv3qnsM3pGJFXv96SSVLCXGZE4ej5S5A1tgd8zrQCGKKAR2CuVRUYrf3WTDkynpdkrJ9yxR",
  "key28": "5vs2dGBULh2zK3mLDN4dhsT8mRGEtYwabzVYAdaj7Ww3y2GJ6MNGSsdN8j2TNdJfLs4AySKYTvqAKntzRynfEMRR",
  "key29": "4H2kf8yLDFgyNARQK68nEaHExJi2P5msaVatyWFaRYYwWSpqG2u5dfbKPcbJwVU3DS7eQog1rFVwwd7DVE8MfceZ",
  "key30": "4xpERWaxez296SHkYDqMc4yEhJqi4v2T4zyP3WqEVTDAQbWginAF9z2skxE3UnxDvPVzNvVTpzqdL3VVPPETMa4U",
  "key31": "3vnjKPPXbD4bwKndhJpk5pyd3QQtNDSd8wbJaCkbQ2qjuj7Fo2H36jUyR79iRU3XN5NvfU8vTiY8Ko6Y7YN16rfY",
  "key32": "5U7N8LEhQ9dzq1KbEZY1DXfqtPbZcT6QrzPjHpe1Hva1KryuMVAYTyBckTpwELpGjxwioAA92M5sbq4pMqcUz68x",
  "key33": "oTo6c7nu7KmCUq4V5TgTVhq2vmNy5NqRDLQvwuXLLxkB5FUs1vxE67NRv1X4QZCxAAUw8DCBNEWwvWB6Gd92pAz",
  "key34": "61z8RJx96QG8c224wCiJiFNEUgogLVoTbuvUUm9n946NTxHaEc71PGTpUjrKzaA5j4geTDu7syoygGoWNveuz61u",
  "key35": "3WCcGsScB2iMo5A7LAVC5ngnVMJVN1WDCcy87krvLUw8z26B1S4JbCgizC6W1vf4iY85hc2gttiX5MkfmJhn6HwW",
  "key36": "2ieT9d4fdZzGQ9eVtckRYA3ukTQhh1NBk1KWqSQpZ15Y1hzTyGC1bYE9C7H3JYjJLAz388WPCJUGin4Zizh8hzk4",
  "key37": "x4V2ujAWyqRGdWpo8LagqpWHX6hv67vPQxGFjwn8xjtJPzfmNykSEWisF7hRBT9uFgd8qQDz7LWnbUYmVcDcVDw",
  "key38": "62En51JoiPnUQJwgDJCgKBAFAjEgydEGQKrWj2okH8JZ1dyMrtyFcSh8NfhzSiLCmoRKXxeut5HsYqouKcBEmoyR",
  "key39": "4r818Mi4SHVqKmrCfhPynmFxiz31KctqXP2v6Mz2YAXvv3xfkvwezoxUBfrUefY6Y21DFrGeZPYj6v4RK19qjbMz",
  "key40": "57wsyRSNdnzqp1o9Q9frR5zXu2qMpQpfCBoH97RWT7TDBiizVFtDefWxtRsRpcKp13SZ3Y32qawocij5Wo86SUML",
  "key41": "4MysJoQUXdHfk4AEsfauH57F42RSLHQCtzUY6vZs47FgrxFXPiHo44LEtoXBct3XMVHRJUS7BfKG2ropVvQLaNsK"
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
