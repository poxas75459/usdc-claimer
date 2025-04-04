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
    "26zsCGgcpYDC953A1K17LMxWfKnkS8jsoS5u5fAskc5iv5t6HzMbUQnZE5As6Gy8CfV8Kz38q179kGwdyFz4wf3f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZoDXkHbBYV6tKNW7Bax3hHCF8qPYmkRDUHY6mAbSvVqZE1fCFKwdQ95htRw6EWNWZeWgywd4szV33aiYqSP98Z8",
  "key1": "3uFnC1brGpxexvFcsesS18QkHxdz8jCahLCJ8B3D9ddbz8YqYqc75ZRuQ3f1tmSUSBxkF4JAZp5zQg8dbTzEE6rh",
  "key2": "5fYvk433wGA5FeZHx4AF8mxXZUpccwmdZzbbfZqnrQTJ5hRNoaAVpnSR81cR8Ggb7Jfi6e1NUdBZr5dEMEK9sjuG",
  "key3": "4u7JzAnd4aNLuCQDmg3uzvVM2YfowRjY2LixrocsUURZSebeHjEthFsQuf85ainLspMJ325ebyRvZ7szTJdx8gJR",
  "key4": "5tP4tphEzNAQAT7jNqcbjFTs6FnXxnKxnmNGggmxqfvJE3Ds1rnDLdPuWp7iH4hax4Ra4JYv5G9R9yyjzLvhAbZv",
  "key5": "MzXFPjDkTU252ce5UwBSAJvCBDwQZ1T1PfuzsPwe3PDWGv4SewtGm8pkpVK1pJrYxQsTjxWKZKFWgkY3pAHwnef",
  "key6": "T7dPJRjcvjbhj2rr4UT3PGpRHxENMW72kZs98ovwj7ufGU1rv6sdukTw9j9Y5KCTYDLkSbErAe41YYVHay5HQCT",
  "key7": "4pXbARTB8cTDRNgxDbfoTtt9WGUQ4sGMGuh8BojUXUoeH8dF8uiXsP1LrBeXSkFX76F8feukTvZ9sh8hA6L9bhRF",
  "key8": "3uAVnG2YKfFQKRo7nx24SWvHLNgbvAaRNcGHAjswj1Dc9sdPPcWwvrz8kr1Bz9EQWL1qzwKUyY9Pqn7YFbSSaWc4",
  "key9": "oLuscy8ZbhMUHEmg8tkW6apDT5tUiSsSWTiV7LhHEzmGGghAJepP2JQh2RKYfB4xSMEGkVBuA7inZugKW4XNYoS",
  "key10": "2c6dW88BLaqkoD7N6PUikxqmdig8R1UgSW4sVn77bg53RdMEWNEzzznPr4mAS5wyGiUoYso6huC2WxbhVTGkcjsd",
  "key11": "cyTdpRsr6k3KeQrjtHpWfd5mE4xv8k3my8a4g1sR9RC2znDpvghygEP1bMwPHEt8a7szrhzE23fUUcVUhDFabqT",
  "key12": "2fHN6hosZ2btCt13hbmWMSHrkvesnb1kw3b4YNBc1Z72MiZMxGXxSpjvCyES9yC9ABxR3KmiD5RJWrCfiHxudx9C",
  "key13": "4MyGHoFnLBQdk2xiaQXQSV9jyZAxfsYV53Tg1Cxv33ViB48Hz8MC5ke4ZUuLhU8Dw2pfH2oNxgriCdoQ1VuxTiVK",
  "key14": "3RtiJYBjVwYDy9ZLMniKaotXZpnFQxL7Xywe5XgtGdJNxS5yAA3XXX5HDwE5PuVqv7F8eiS4V2eEHU2CzNJ1LMam",
  "key15": "58uxx715uNWe9GM2d5XYJLVgPAFMWBF977mQVaqgJtVxYK4YCpmfjxyiuqzSfZKfDV2t18ccXq7jPNFSyfbHhu9W",
  "key16": "RZZgsS6TVycBFJBJaqYRrq3K6W9tFSzwAadWS55pSriCYwjuLDSoVinySMjjjqn4Nn2DynksapjsPtVos9q9k3A",
  "key17": "3HU6e491VLeczuTufWgRCPDNYXHAjXo5th3eoFfETXXv9hXrzteqReTiJhJJHJaPfwyNiFg1SB77oqSY6zsrZPgd",
  "key18": "2HXPreGnc8botfpNjfrdTYqiqbUt1jEhYqUVojEcFcfV5RbE9TdV1LdzGeVdYcqNkmvBgpjRQDtBP1BqR9j7LFND",
  "key19": "5mgtVGaRDvezubBgRkVbBm3HxgTTCmZ3qtyeQacGRzKeQdMq3bpopyeEk1QFeekLLVwiuQENCxn9PKk83YMn2hEL",
  "key20": "5J7hCG7xHnTWQmF4k3e2zMereubmVh8LYogEn4LKMC96sbsUcwHaRXxQPYmix4WoLtK9z9Mfsp1fbsmChGKaWmXV",
  "key21": "26HG4nWjsrkW6nSuYagxRrtRKBu51WV48z3AzEo3Y8MZzkXsZx58RKXm16RzB4Wr1BSjhbnQpriXsrMxChTZ7uT2",
  "key22": "4EMfT1Z6F9HTXjzDY4fxLjm2ixjLmj6b7qGWbovpjv6iHeDDr142bTh1XgZ2hR7EmYayPhaqTT2QSMmAMy7fgtQD",
  "key23": "3EDMbaBgBoAcCEYxEzkzF8wDP5PjdFe4LNnAkco3nfnDMrUe4jvXFd2xFekoxce7HaKTdSx9kX7kMQXbiasBvhoa",
  "key24": "DRwBFWZ1GYnCHhJ4ZEWKEJ5vri3svFLpDTyegP1oVEnxfmPYCvCg3GLNojJeCFUJk9TXPJRyJgBje6xAEW8LTdp",
  "key25": "27PRrrBEHaBaDCqH8yLvqXrQE7kceSz6asqx2HLXEKqfVDM5jo8vtWw58Jqec4RKimucfULnFY3KQua68SHf8DCr",
  "key26": "cmAEKPhHJXSFvEvNFtrUpbBXReX6wXZDrek7sjsfZr34WdXziwt7oiydBUpQf2ZUDx5qPntXQtUPJBg9bDURmkL",
  "key27": "3aAn7PR6ocihExcYFAgZX6k9gwUVLLHM2XAcHxqGPZKtkPSvwGXpB6m6L2uga3jw9yZ82ZCKXMw1Mk4jgYxsr3S2",
  "key28": "2bKyNe8ReTVugcqHdD3X1hBcRxyRiFeZoTbDMvDQX9r8p5vLUpf4fZxP5dznWqMaQft5cEYWba26v7Dk1juLbZkt",
  "key29": "2W1SRMw73arek9ZJXktTipcjCbe5MBcKZYYYQSWcLHLUUADZx5U3G6pC5wPFdDp6yrMoPzBWjPD8YoRRMTfUf6bR",
  "key30": "5TcZXjubk4UzkVnvkbdXvyVVeQ4NwJjsJN6zviHgdJzAZXZDyqs8VQWFwiSAR3bFtD3radwbUirzQUg2fRpfCNFs",
  "key31": "n3PYBMjJgoeHCDnVmWdmfWoDQJv3ZPSZ8UanmUZJ1UqGZVm2tazNmBqLWMEd21cGqNojTw5uTesn9TLh8gmANW1",
  "key32": "269vStYK6ckMWqKb8DQuhbvq82XNWBx77XwEgzXNEjL2QXgFha6XnpnufYWFKAxwxDepPKAfLhhmQEn8cV3DpfRt",
  "key33": "2u3Ho7G9A1zNwBksH5iXZuEefNGkrS27ThVLHuM16Jq3SpjdPgW1qjohDeZJGiWmPGEBR9HEXGFa32oM69EbVfgP"
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
