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
    "2qQLcf9BXYMH4ZuGTwhfECQXjPvHQjuQUAr7BYLGSvww6CH1Hvxp7MogQ24EqZBKdMqGctcgL8GUiAyf3Qimni2f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5si4Sczaqr574jyubsw3MQZu4sLs1rmwgzVrXdW2vT8szA7Yxifwrg55hqfSEShBzsoNJJHpdnyqdDyNo5Znjbgo",
  "key1": "5EoHuNDsj4PzHrKtugpe8gWjLpmUUJSfTeTLidwNT11nDTpR9gksDGXQS9jug6qoQj1rS6kj4ZbuFH9SxCjeGZWf",
  "key2": "3seyZWb6Vw2K2nx71EB48ucTr3zUM4QQfjGAdkmP3FJSFCqbyRu7WQ1LrVJRFSQhAyq86vyXeWykhYVMzAZADuah",
  "key3": "47YP7zFxMPsDooWfe9utH731A7q9HHhGfnucKcNYJgWdrt6c7bc7fMDTEjvSga7idC2M61F2wmpWqTdHWYb5inFQ",
  "key4": "D476kHhjQAUhpEzPBPhgjVwHjynDunqdDQ7BkFsKDErRWzfxgPCpMMoK5JSzrti7AS4VF6pvQoXRAWj2BjJPAAu",
  "key5": "4G5nyVjQ494bBTZZanCgHUMehusBbWs87dn1GtdhjiLuBjcqqkMbUL9mJ69wFQBBZYZaLgBraVhxioZ51ZnppNN7",
  "key6": "4VtGp87qtbFD8ZwemP5gMLdJ2GupbaGMhLmTxzgfK9a57nxRNaV7hoDX96D7GAvRKEcW4woqAsE6VjEhvAoe21fw",
  "key7": "4HYSw6XCw2HTQ2GvbvCnQcLXMcNhzLeHJrpo87zWKANB5i5ACzFVzf1BngFbbkyPFiiBnEz9KfdYEyAiEq7tnu4g",
  "key8": "4F2hhd3sJ6F2tW9MiWa3JyJ1BjFVpqsAn4MnHcYx2uWzyYXfNbKZUDMmkpap7VsEkxzLZajUCLESiyHAFrW4gd29",
  "key9": "5ocbihbPWFbugjySwJeMT3ANcmAk4C6C8aHjTiJJMV3JGrDAAESvrGkAhMr8hvPfChxTwyeUQ9oatb7tpA7cffZH",
  "key10": "4Zg9S9kPjUoC5HodpVTGAAfdQL4Z12vtxPapnXwVp5rhGaAXZQSxtbps531ns6YRfFNgbQSTsE8syYSF6wFGhzK9",
  "key11": "2g4XckuxF1tudikoRhmD6tNJg2KAsFGjbBthWzwsYThos8eQGg29pHaJxsPTUBxjf59oZ2nwwyPwsCmJSinDDvob",
  "key12": "61Z2suLkgF1pWrTYu13D9h9bLY47PBG2RUiae6zFeCnVszEbRKWEFqu4un81tPx8zVE6e2HvkKmQkefH56888DdM",
  "key13": "4gCVgNw6Qnxsgw9jbfnqAxsGtCTQWmqgFAsDkbyZMmWtMZa1arugurXQKGdMXg2gesQ76tU6WoV8BJg6Rg2DsTqB",
  "key14": "4ycYnbZZ6mxQixArjmocJrGDr93pgwnCh3SwZfdSj8WDWpZFXJnE5WpW4x7dkmn7Th6rHBJKxmHKyzknoLypvk6G",
  "key15": "35CExnPoUL1RrmTJ3NEH5Vge5rr3Ka2G9UQPRCz9wnfkAtKeT36pXkZYiJyWxweh2CuKWCqb8S7giCysPxFJ1mwP",
  "key16": "4aYr3ahT5TB6co9LPz4x8Go4ijzmZ8pBAHpAZP4c6jhFHkTBN3XL4TxUnxX32DrJ3EWW698d7bK8vBasyWgvsi4t",
  "key17": "rmyvig1Bdt2utsEkmw65dWNKF4CMxEXf3aSBid9gncp6K91ZTpNpcQqraG6uvwhgDeCp7KoS6Ydj99foshNZyXb",
  "key18": "5NDpjaqZUwZofy1dSKLjYXNGpsz6GDLJMJTSHxdLU6xzUQKKzhx4im4e4MKf39hSymjRMkceQbAhdbmTYVz7HyCH",
  "key19": "Tiv1PrEGze9Xeg7Apz3UyrVhxM9VWTUTxmDpQ28aacJ3buR3eRx2tDjKL1gSaCFi5EKd2ptvyBuGVSq3tSEZJdp",
  "key20": "2LFeK4Y8Gs5XKYj285bqbErzbm4psBmbNoqAcoM4jPHoFDRU6W5ZUqG9QUV2PHRY9fyNyf5B2kXpvN5uCDi4znVB",
  "key21": "45ZjYuPDLiyu3jLP2ZLjSVSCZpSbuFNS2mmFb2hpFmfYZHP5pokMFVrhsSsgU5hgmo8XP3XXYR1h85fxzYn4aE9P",
  "key22": "5cD7ybYDiUBzQ4o4yqCfGCmZzozwSiiiDFmZiuw1hbcyoNn99twtTGxGe7Am67MLZUyF73RySLpALdh9UcwjmHq8",
  "key23": "28qnzZ64aVREkLDes8CrmTQXPLNcSAa41tpuZYR3UvXEfPA3LA9G1yrsrT9kuQE2Lqb8wJDiZq2MhmtdWqYVtJmC",
  "key24": "53QFvRiwJwqXxGYD5NQfae41VwzzPPn6u1eQ8dMz2wz8176g2p7TGw73zRxv1m9VP1f1FYAd4yE7u66MNAHR3KYr",
  "key25": "4aa2p2J6WUJ4S33qSVZyk3DPW5cSYEL58ePsQfzbjifmCjK3xkhh6vwbmsNw54e54xgsuRsnvHUH2pKgsyLtLCMW",
  "key26": "5GkcghUNYDVbKsNQaBfHUdBDVjjQQpct5AdLNaedW7romaBUwyr5TBbM8QmwcBzrsVLkZKP5kpn4Lgmt9wWySK6b",
  "key27": "zkhEYHwxURKNQCp4o87ssAVUHFjcU45uTJcNskEbuxUbrT5NVTd4rQjeYNTdNEvdh7t3YATXx5J4t2qDQEwKuaP",
  "key28": "2YLmMqngTnwbGC5oR3BpvtaNDS7tmdLxWh6Yax2dTJ1s4cTs9sL1Cw5goKPsebrfd4NhKNShmbTG23XCy6HsCCPS",
  "key29": "5xUkoPGQTBivB7tR2PN8M8sGCoJixTPLfU12VARk6EfrVz9No1U5Y3T26Gx5up39p3PHWMSA8ecqgzbr53bemsse",
  "key30": "5mH9hX3dNQunxAvqage8WhyGm9fhCxiwPCfcYH9MrfD1CnYXmNnjws7QrdWrTdvUNXm4MUHkUS3zLnwSSfhUeDCX",
  "key31": "U9DRhcH2Xjyv3ubs8M3NcjNGtqsxUiyXTYVqNAuZq7wJyij8EZornkjq3RoxC121Qv7vfmXBgXtgeDHr6UEEhcW",
  "key32": "5RHJCZGSfqsDHoRFNKdxpSUdusB8W2aXLWg5SPKand9w6UsQ7mzMg4euEJwjY59yQbn84e27kjRForoWa8PG31ia",
  "key33": "3FoKpMYBjekR6oDfE4Bj5opBX2aX1iLRthYTbavW9wNS1YHNzVbFroUK1UT5NJ3yhRR9KHVpztKNWde452QRqcRN",
  "key34": "muFThNAwhzZUtPy14Qn976RxGRDP5U3dLfdc4FndpUNsyXHb2hHijYv6HtRQq39QZ8S6J93WuSj5uyig4SCZsFR",
  "key35": "5HkGTBoantZWLfuT5vfdCJLADUApxVYcrjKWBXYo6Y8XmqjonjtTUstN5ycLwJWw2DE3QaptsgCyn6Z7K395iNET",
  "key36": "5jG7smoqZgK9xc6GKvQkqzXaQ2DfSJVqrmm5t1qoV7Nb1VbnkGwRu82AxWZ7tSjtPkdmB6MEspuh2Pk5gmzbRFnL",
  "key37": "4x2KXKtvfdSu94gtTqzTPxfCFTywhMyStyFkQYtQJDsCUEVyKsW6Ta6TJF2fSFCP86FDwFGU2q7CV1L6JCX98rvp",
  "key38": "3yWK7UBRPvxVWmuE2M7XNipmTRuMkaQLjY9Y5xgiihxdPdZW1NcKWpmioRH8etj1Y8n5eswW3ahfgdWbGAYzExPx",
  "key39": "2ayXMhW1fNCzR3JfQACtGgkG3gLrsLyvfRCkb3VvBbdysSrGJA9Rkkd8Qz2wqr25XM29cG9SMHLGpE5Zdat86sGg",
  "key40": "5Kx6jXkP18oWxUitNtxuhnXtMo8eAaaGnJBMbC18PEVNuc1yHAgRMrJjj7NhRDFoX4wbxaqe4XZ6RqgNibVhKN6v",
  "key41": "2hRZ4YCiCpHoZJ1fhX4eDeRJRC99xDDUQZEqi7kRK3SbN5ebNmPPdQzrM3GhomXtybenP5kTgT6Kt8MCjRVy6Qcx",
  "key42": "2fAXYUktFfiWbEqahGvZG2njxqDUHNSU4CG63d9tToCuedVEkqxhjerNXWoYyixu2Q79tQYZ5KbRvG8YRZzDnQcJ",
  "key43": "ER5Zrx9VHuJYAQXfDJNsk8UCQ9zWgSRnM4fqWLdv8535Zq49wZseUZKuccxVQ1FZ585N4wDxrt6chhPK4VN4o8G",
  "key44": "5xvsaftDFSj89CfPC9TxYmjxwAovQfUAieShuVRfuJLTGZAuwGs9Mxeo5H5MnPu1UfXv4ghdfSW1UgyekRnhSr1C"
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
