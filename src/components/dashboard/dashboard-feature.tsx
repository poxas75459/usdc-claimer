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
    "39LjRq9bezstAczY7C3w12ZDwiMwzNmrsbWU2WyW4g15591emxWLM4Qh2XNw4RjD4kkgqYmSwgvzuJoi7FpaLPrm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YaUQibCAMnxFHARnjfijCFCtPH2S3ddvYP1MQdB4BiVzPf55DAjKwZ1wMxyzxUWtQ3rWvYCBquLMXskxK4WTPDT",
  "key1": "323xqKbxCmduBBeidq5xfhnLjJH186r3hsQD2KxDcgdamLqv1dkfJE9XUUew71jBGdtUWMtrStqe39ma2Gv4f9cY",
  "key2": "2iSjx5Ux5vmvjYF5upw1XF11pMhDuXZr7bFU4ebXuj8FJZUapHznj7vnZ6gU8TdETXdVHqsdedrZdkw7c46qKZ1A",
  "key3": "5ZP7qnTqQW763a3wQLaC7SzfW7HSLFatYPkJSyMrxmSSLQEychmrAykNo5B5gTz6Wb1p1bEBNrzo3vjKLfw9wLbU",
  "key4": "L9LwjrSdN49S3aGL8WtXL1yxUAGarKEo8HNcxtw9N352Vkz7tApJ954QXCYWtRzvJbuYQgkEDzXwyaspLfoZycx",
  "key5": "2ii3SzuonGjkKFuRX5x4E3bVQzGN1wpYpozjK7zLeRshr1Xj4NWcuhsEGCzaNtLV5n95qrv1vvyVe2zgqF6o3hWP",
  "key6": "4xBg9Y4qr7khX2aQSjJFkcgNc1yGUQ15VLAquuS8pExYjWWgzQr2gwkXgZC6XZew6REC72sKWfNVGGZu7WSAgU65",
  "key7": "4xbaziw33AukcAS42mrnfHbjm2ySQzKrod6T9n1vtd962BfrZvApWzyAPh2hav3URdyvgCTEivb3ELUihYmeSHpz",
  "key8": "UC8dtMyWJSREV1DECZhmD64hxg1h4rGzLBzuRBRFExLD6YbriZzVUCu5ua9xYtCzGAz8iooGu7NaUhSJAzAmwYr",
  "key9": "39HGtBnLy8M8USb2qBhcscufdqbktXj6USAMnWnmAqDt23DxZLkr7XsDvQmDfrrtNCKpSKGrkGzYXgxQk9SEt653",
  "key10": "2xuLqbqTxHgL3M17pwDpckxYT4DkWtfkTYmgXLXJA5DAzSygWy6FHnJRtEcsckVW7zwHvTcVeAkU3nyo6Pskfc56",
  "key11": "4Yk39iuczcxmmWimLDvgemhhKfKjjyP3d8ocZ5ahfeqJ9dEK73Af6pD1uwPn9hYEnbmWrJTxZRDqmSF4g9i1cfdf",
  "key12": "vABs9mvTJkWLzUHCU1A3EmAHx5ChabtbpfqEKtJA4JHRUDGB2XyaigRM8rK1u8bKbEKinHHo1T5DB1YcdnkxKrn",
  "key13": "5dDefwYoEgsfpzM1K1VGVrxHvegT1YgFRUENzpPXMfvLbHYnjWcE32aX6FKLHhvgyZXYhGiPjjvA6QBnDx7zfvdY",
  "key14": "3CdxFHTUwDavp1eb2MYzhcL7jWo1ME63UvLiWFvjQ27DpsQ6Tf12rv5Wqjp3iqAZcGHQZpkDNnmtWNdX6vGmhFAN",
  "key15": "2CsG9emnaBdA2n3YABHPXxqjrD6zzc2x2urhiTT7z9TpwPtsRxYuowWmby3mVL11cZNoUQkJwcu2wugi7k1n6Gm8",
  "key16": "3NKrd4H9AbZrwCt5Ff7eiPqig9nsdLHuwP9VHVbJA3Art7qnziwXiRFCPkV6PKAgggCq8gB89R74Jagw9q3JY5BP",
  "key17": "5cs9Z7w86LMVcJVRjMg7RcDEjovFYgYWVUukNUmdzM5LkGCxqRQQE2SB839MTKqAbMpbVY5QXyDNpHAQ4gAJMiNa",
  "key18": "44ouo2RNuzbPF2E4pugPCfE5fy8a7UPeZSuDa2BvjLyMACprqKi5V6rEgb67c9Cg5ZLDGBMc9YmgWwZKdhcvNyF9",
  "key19": "9h7BHsrxEMd5HSJUGy3QnsQKXVRH8RbsW17Ev66s4ifiWWDWZnr2FKNXXyxjEZq6S75AYRSFhfouiGStyW21Ykc",
  "key20": "j9befjEdcVGsWRhGctv8LiM91rAHkDRcTjLcCtF3puFm6LExKa15L3WnP75KrKCwoJEojvx5cgNdRFmcQef1rmQ",
  "key21": "63pAkvHrFy9jL5rxcTxqsES8yVYZgfwuip2oSYa1PjSYL57pQAt45fUbcz95x9Tt8prHDhozTGkfzH7GSBZgr8us",
  "key22": "5jQbGwCRqhmmuQ1eLPHLiPhVnx61KWv57QL3Aw4QYkzfoZLAvnBFn5qR6oYawYpqckhmQazsjoTTDX7N6ALLafQ2",
  "key23": "yardvdEqNkq2u5gebpzq2PYQ62jDy2SSXmLxbLW7qEWStU7pZPgzto3zASJLM7hnmLtV1ecrPxs5kduEQth4ft9",
  "key24": "2vGpYgaNhsd5vtTBoBwzF8adiUn9vGsGHGhUWeKACieovvm4HD8p2tK2yPYqB2UrcLdvUMhsUU1G8uSgnoGWS6dE",
  "key25": "4LPHsjbXAjYaQcsobMcsmikUMa7EC3rr4UTR9fXz1ateqpMt52S4FVLyKDPPsHa8oUCxDynA7tc3Y2k5PEsox3GP",
  "key26": "5ujspoq3ajn2BrA5x9ScZESCYSbcpgvWFmvNePN3s58aHtdk8susVRMx2S43vqANNXUoxtCmf3gD5PHUL8ZB5w6d",
  "key27": "4vbfodEq72oNxktv5Qq7Hv7ZgTdo6MfLmgNKFmZQwjbavgpva6WbGUtvsz4AzKnzmKiSrSED6kTahgrtnnvRnQyP",
  "key28": "2UGT9m8dRkBqfs5jeVhppWkMFhgJZD4qqpm5UasqaEpwPqpQBo1FCpd2Ba4RUWu7M7J16gtZgtjPCwpvFr1SCAc3",
  "key29": "4nhngfweUHsHEi4sC6RsKgATFMasT4oy84vyz7vyNCMYtpeWRG6xHdjjBEScv93V511kJ1XYBqazWvait2YyVzhZ",
  "key30": "3kDHAvyC2WyUQR51xY9C5VQdSF4b8eCQcKJb6bkRJPbHVcspzkdNk4XeVAcg1e9Rd2u9DPU5L3bQAdF3HohCaxwg",
  "key31": "5wxyXoqprNtqVAvyyj4rv2EHsNVkhZwvc7aSHKuUHq5skCF7xkk5YNhuBverJHNSJRZv1VhusDTrM97wUatMbvRb",
  "key32": "54rJw58xsTp1j1pLA4moW8r76tVfsgwdbVWsAshx13Z47xJnH8Ux2JJu4KGTpBaVFUsFBYKM1ndz7n5tvPjn5khi",
  "key33": "gCCD4ZhzxbqEskH9PTHrotnuNGLVdvauL38H49V4cuyoprx73ugdYEAhQnU7s8gPHxenpbnUKR37ywuhbjRhEJ9",
  "key34": "3V3vC5f9bjUvX8xuUEgZLVVYVpQ2oWXsiwfjhYV4siLHWavUvmVAn8DRyQyrDwFoCS76iCP1ymPbWAAoZ6S7GGBL",
  "key35": "hDcHAEWmaGEs83D41L8MXUJenDjZhZrhkNeRWtSrp96EQY3MTm2G4vFcrh4Txi83RxyWR3QybKDD6zrZDPb7Uor",
  "key36": "3Mui8J3SMSaCC1xHBxMszEEhyj5rBof1S8kn4odZjsQTJhwiXnNpEGjhWoYthQbNx9zej2hAQ6nGi8Zw1ySVgNP1",
  "key37": "2Tm4XgZ1Wirsjym8eU23kLGbh4ivzGjkB5k8rYw3eG2mBMZvczayFcvpLwr2F2iZryKftK49JqaYN48hEso7BaVR",
  "key38": "2b7GehNtHS3isVftdQorwFq2iFtzgq8cdMEEdPP1mm2Xng312vZDhz24YvbkVnkjj9fvDUnLnPydEF6BmbvRdu5h",
  "key39": "4AzE7MgnYpHPyCrZFnu85X1jBaPrAh8YBbo1uGnGsRob2Vv794jZZm8Sa3n34bUjE5U6Yvg3o6qG4jEVE2cyUz8p",
  "key40": "3gUCsaF8ro1aB56KGcUf5qfU582LQeBxhcw2NoqfZkJieSFnCsKK8L9GNx2BBMs6jZJgAsGPaMDwsHtPYoqgG6iT",
  "key41": "5Ve4boXcRDYr6bZ9koaQZUisvXhnE88jPvSJpybzAsQ3GkHZ4Sv9LEtA5NXyNfcYshLkShA6FGk8RdT5mpQ3c5aZ",
  "key42": "ATMnfqEnP1LChAixxckZm5DWQ3meTg5aEMwjQPHGWVz9fH2DMxjpc9ZVCufLU8HRS3fqCUmTeaTwDjueHjRDhYP",
  "key43": "CnStWLZJzvVUWSYE1Mrrr5Y5LXvaKVhoH2RS2WAeDzs1u7Xqzz4ugSEryDr8WHu5SsLzYHn56fFRQHfMMzfUDqK",
  "key44": "3KsXjpxwqw98XqL4DvSkxEiqBYf5hVfEMvQVYcAtHm2nCHtKew8GXM8uSNHbCR7aw3m5N3433XZ788SKr7BGEzjr",
  "key45": "jfBa7DtwBZSwqFAYsqkZj4sopnDtn65zhbySVuRVWzmca6Xak928stqGoWCWQApXZZYQhFa4djxPKKWozo9dZWW"
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
