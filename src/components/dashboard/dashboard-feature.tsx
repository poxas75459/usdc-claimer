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
    "Rde8ZRFWecNH3Cv9nNSGuv6fv9kcdVUHm4GCjzqJDN5FetZACB4LnpTGD6Dzs3nN6cGP94k4TTUzKPz7Kt7EA3T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hf1dZi3FwcyfrwKzWBACfHpHhMy2Xibr2eRbTpQnFPpU7Ng4WzxeRbvy1XY8MY2GzGt67qvALDCx6U9zT63BYBx",
  "key1": "3qkQ97dfa2bnsAMSrmGf8ztGf1r1yEpdtUv7YLP9KRPbUsMwk6Uw3sVxGYimXKDAyHCdn62PoUoZj66HpTSdUcAQ",
  "key2": "54oB8f9hUfZ8eQmhXaNJedSFnDdXqWdzJ5W1ZqebPZu3SHC5ZeKYF8fgtviymBLpEUm3QUymr2GEnMg8dEPMBGKQ",
  "key3": "2DqbGhWchwY4sViR2nDYtvPEwNKmaLoAED54xZni7uXiyMn5EKN8VyDHhac855384QX5iez2dAQcEBeg4t9VQhiR",
  "key4": "HD4dNMAqURCMrbYTsFtBTwFKK8suk3X1shUHLaekMXSB7xnpoPvq3pmRnWULXqoKAx1GmgFQ2cXUxTpvCHr7wAq",
  "key5": "5aPd7iC1Ag9AjcTnnXy7wSVXaYXqz8m74HYiCir8okuTY4XZ7bv4wDxKLby3fcnyn8uCpijvJzCX1JLowf339EJZ",
  "key6": "4yQdTyewxaje1jXWW8NBQs73w5Evdc6jjk74eygYEoFdNscjAjyBXBMKQVJWQx1rzbdPTByjXtFD5wDsQzUUvYfu",
  "key7": "5gwXQTkJaXVAkff7Kaipws39RNEDddpn6BhqXeHbeECMAZhddmMSHx1nMuHfGchTbRQft4WkHn14gg3RUnfcST3c",
  "key8": "42gLd2ktkJ5XG37sM5a6enr7YLRh6XYFH6DMhsShJBxmt3ERHDSXur6miw73AE4xoKLwhVHhwiPvq3CZqX9zvBQ",
  "key9": "27dToZFEbvJTNumL4atJUVK3axxp8TfmCoQTA9x4cjss65NmSnzZ6AhxHKE7xxjCzuw1rFj7oaomr1N6hwadgo9q",
  "key10": "4kGqU7oKph7C8TrwYvdML9HTd5pe75sFmRaSRZUQGuAJqGsMPbYUZjxscqsGPpGfm1ci4krT8RPGeJzt3yEDd9zU",
  "key11": "dSUnsoJkc3xQBvRhDfC8fcEeopPtAj94XCaHk3rf83Ff71D9FJByCXHwWUXJZPZi1RJQdbDemKmrMWHU9Pv8woj",
  "key12": "3V74PzYQKSPSGrrNeQxxrdaKTYxWGtc3q1LTDRjhvTDbCkkdPmRtWxMq5UrrREYZQD63K1PUpJYiRqxy32UMqDTi",
  "key13": "2iQe1BxsoRxBLKz8rvEzagcxQSewDnSoB5eJscBtd4FDuV6QEEx1Z6eTc5XEwZyy88pjd6p3J492VwxeTKN6pEqA",
  "key14": "2Y7pSn4NyQ71ApZx1xWA9TfiMyizxHUaohmPgrc6psFWVtcCWYAAXmaM67GP3sTRtjMFZVBo6B9NCoxWaYRJwJPj",
  "key15": "56rcHkQRAqNU8iBHKjJQacaFg5HeiNHyp4GjZiHqUNobbpconyJZLNyG4EEiXKw9YJz7KJuvCHhttdwWWekFAECD",
  "key16": "5LMwSuaAnFh6zfQno7pmhfLmtuYiQebkDBMj72eMgrfvYH5kYMWchmLmWA41CrefwdPgT4iM3UcTaDhWhSbK6rcA",
  "key17": "45gJqCuViwFGAwqKjMWywdA2drst4mX6wqtkkK1XHBktwm82g1FFHMwxFovs8k6m2B9xmTujDawHuFUH2GQ5VsYY",
  "key18": "4vyanNATK32wQJjM8PzGjDH7phgnoYPjJyw1yafnnyfshjbpKMN8YKJwg58U5kTm9FEupVLuS5yceb9Hdfodz5Wi",
  "key19": "5Wf1nTF9dEb76bjG42rpEv2b66To9eouz6v7WNAv3J13twvG2zWqeYdJfemCzui6JqByZr8R9dhUZ7ZSCFTbq8p2",
  "key20": "4PQhvR4fHLpkqB1ZirXCFEP3nfSEV4j2nC9Lp6bVXdqcS8dkP7aLANcAvawEFtLRqLqpHFsCPB7jjGxjke1wvBJs",
  "key21": "2UQztiSj27WQtowsc3E6TXHyd1Sz7RLfEoE8JYSPSeWBg9skhAoy8sopHiMb3VYACXEBXGC5vuHmTvNTJfLp7mgm",
  "key22": "2c7zMBbfRUGaHDTj7VUvUuJoh7YSEHPe2BJHiedhQRQpGNPmfco8cekb3Kk5HdEZ7C6sPZ5xbxHmyEoTyDmLCF45",
  "key23": "2VwM73KY7rHs6xA4FCp69M2AmmygZrNDmfkAjtZFVK7bnrMb9EnVAmKwHfQGY3yGcxQY6TJjzzogCwJ1XA1Cg1n9",
  "key24": "2SUr5Jc7RQ8XCaGsRTDCisVmiqNQLopFq7DiYacJM3XvE67NFiyPcBtohdfc4Pn5sxrZ5sN3HXidYXdB61v17JG7",
  "key25": "5QwDUNANr2aYekpFLC15iuddL7nEWri16mq6ccV42UPBiGymGFqApdZi2UWjt6Gf5VfgfNL8BWJVd1oEJt2D1UnK",
  "key26": "3WHz7vsg28CZE5nfRnsfKu515pA631FTurnbMcmdpU1f18H24xM2QDCjYoaUakAahJwhvtxtvCowmKNYjBkKQYt5",
  "key27": "2xi44HTmrYNxkx5HNMEqWDe3Qh3qFpb8wp5UkLPjgsft9DSb1VeR2qRBRaZ3vEC9vLHDuu2PHoE4mE1Eu8FJTyeM",
  "key28": "66T1SEHXdE27cBqcPYDtpyXq2zEKoy67SAiVJaGeyiFJsfLmLdquR3yUzQqfbeTnjbuvjzXjZNujJjd2y7Dvd3vg",
  "key29": "2AE6FWrSjmtjmgCKZzF62f2HVrEDNidLURcxBAyQdwMxnSNqJHcS23inN8pKMHn81pozbbPk8NzUGFU46U47WUXz"
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
