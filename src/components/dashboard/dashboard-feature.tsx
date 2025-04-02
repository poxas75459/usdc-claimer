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
    "4hzMK2iEHk143hhsNy1wQXtzALV3RGWkTY3kLtWDViEcbHZiNHWZhreNAkRXpRkAeh3WEsjqU6yeHUtot6TbaZZ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gFN2ry6mtEcN12WJ3FR2TPdX9HDXoH1t38wLbJ4MUUepDnHeiGmAojxaJz1PaBKEwGBJJsgZqa6aTRg5NynZxVG",
  "key1": "3hEiLqtRvzRbxt2P668nEjpmpJmokqsLZ6vDV1SAPwXkjYnfLk62A5LqRFoYLP5JhH2GbsXAFhTQLJ99v1nvCfxW",
  "key2": "21SiczvCBVqeWWWbRwJGuxj4hwQS1e2VA7tvN24tQTz3wVEmn9gW66La7UqZxKchfRyM5Y68Q5MBbKQsj97XVhAZ",
  "key3": "3fHPG5K98rVnsnW24j76MdTJqaFCcCnxjFy5uGq9GC8uoNTk5aTWh4xdMFMRUQ9M6nuRzfuNtmti82SXov8E4VT2",
  "key4": "5WEzRV5hHNNx4CveYjfZS6wVrvET9TPsyiQ37aWVtXDVTxCoDHTHVNJ4GC8qpizgGpKytpzRMH5GkmzTkRvgAvm5",
  "key5": "47tGLoUSuNH1Hdqz17Q41nQUgN3qYZWcAEsreePJKUXh63BxbNzDL6zqoG9PoSFLtjgEKFgNiR1H9QFtmyfwiLu9",
  "key6": "5K5ytFeMFVQ2k1ezJ7SPitBwVWRF4mqm33ce9gTMQXD8kkrcd61c1MX8TuVRXo2sLtjdH41qeNQxLwdkP8y2N6s1",
  "key7": "2fWFRGbgxmABtQph91M5m5NMz8kiFeH3iDe4txaPQtsZEUWNS9texpp4TQE7FRZ67c44ot6PPS8zotajKiMEyPYt",
  "key8": "5sP5EhNqnPBmXo355as5LHypv467ERbX66g1q68bJJAEdgd1eXGSd6VKer2S7HxWt7xfUoG5ZURK7k1cftB4kqhL",
  "key9": "42ppW9Do1bLLVm1JDUpSqADp1WSDDQkze6NNDrggmCvqerg2YoJckTTYEYZbTiZ1b8NUyxzeNakYrXyf4zPVGKtR",
  "key10": "3RaRFKBA3udjdHTWv7i2Kndzkqd6EABhfsSfzUCPaV7F8tJsNtFjv2WzJ9niKPSmdeJPAApZjTcxXjsYi5pNrWqP",
  "key11": "A75FiXbFZD2YMVcseWxkRvhHoACBhjwabfRk3m8xqHMDfnDESXPrRJLdKg9QdzcEad5FwZqLXQiWayaGcXVoPgz",
  "key12": "3dr4TUQkWLmN74qT5Rex8PrgiURFXDuYPxpKVtZAFCdTMvdb7kuSLSFkk8M7BebAKc4QGi5xeBaGt6e9r2mDvyib",
  "key13": "5v85dCZ6dt6TZduKmha5vn3U6gLdr3RstzZD3Yoz3PqGfm6HS2P2HRdQVv8jBfqjmjQHgddfL8vVSVzvJdPHCtDy",
  "key14": "3knmoxnEkZ5MqqKxTys8Y1zbSNx9oFCg6B11Thbz71oGk7DiuCyCQwQUGbVbDM6P4wbWVyQJpEgeusq7dfoNmWY2",
  "key15": "2g6zJPjZgf15eEZ6JjvTpYtyKJFCbQpMog9XUU1EZzAVoNMD4xhBWtmJxBavqVKd5QFzhibE6NcDySztpNuDh2J1",
  "key16": "5zHp1a3NF5noGA25hjVEcH83CG942Ge25BYTxFpkRzWNCue2Co6d4k2AZiu3MMTgsLBFmDZKiAEV9Mcs65HYAuQF",
  "key17": "4i6RitVu1GAFex5z8YWH8SEJZkZ8kL5hxEwdXSV5b5frV6GiGGLBVvFz8YVzxR7zTuBfniGBCmpsMWtGduNcVkth",
  "key18": "2Cg3m2DVq4kBpN3HGnE32QTBz4aQM67KeDAAKbhAkBVypiCdDBwD3A4Ui7yimEJvoPphvHXrmfXttjUTUMjk6bqc",
  "key19": "2XV3VvebdNcXuz2staPBeYWVahofPBsbxTRbyjKgu43nyYnfYLgtoGMQjfmbj3S8nVdcZXejUVeyzJHcguNa1Vcs",
  "key20": "tD47x7W2ehJZNYomiGpsvvDtoyH3wqC8VEeHPZqsPKuodtGdHU7qaztKK8uWefYR7P7WygxQPzetm7XXYkqC4q4",
  "key21": "3wmgMahcomZQ8CerQjF3Q3rrQJKdG37Z8ZKP3tR17ouju92UF5kTTG7M4isgwd59Xe6XTxZLPw9FxDps5VBfMCf",
  "key22": "5ufmz8vncFMHqnrBcG5r2TTdaLQU83u1YGfLEHdz7762gcPWg9SssRuDJxN3HfCv5YPzF1eCXtfuKEdaDMDHMY5A",
  "key23": "sdxH9AV7oCxeneT3n5tJfnChD614j5i7X2BTktypX8BVRgTfWWwGm1hSVWkp9fUo4SZT3iGqmB9k2PLfnSqeZfy",
  "key24": "ewRvkj3MvcAFVYFaaiDhtFzNKTpRSpD547nsbjtBjfR4btLcg4LNJeU5LDjRUNAbVRmpZqEpLgqQZdBg1RjC9tV",
  "key25": "2MedFjdwetTPbswcUSqFThDVaTsQE3HACf5gKRcowZDUzxoY1BbJeehgLQzMBBo8NTaPDJGeWBHFtJtPKNNPjFz7",
  "key26": "2kNszHJg8ZrXLLG7vi2ZhVp18xnKd7v8WxobrLXJLsfdbrJX1L4PkBMe8tJwBZHAFNUKj4kiEfamhuFK5nqGCrh5",
  "key27": "ZUqfM9umhzR5SWwQabrgdGWwnjHZjygfwTGrHFUdFXv9UDzt1Hf5PgbDy8E6quzCwrmbhhPLK6UTS24j4EuhP2e",
  "key28": "5oSeVxVduApJFabTnDmJZU6iFyGW34V7q2yBRSWfJM7kBo9ZM84Xm1L9E6wGwyfV116yQiuvbi67MhBFMKUWEXF7",
  "key29": "3HsiyVMcuZhkt96mcr49ko4wnsGbpGKQGhKK7PAgwRzJeXL2b9bBKvHXwEUyJbmUT7JcU95yWDc8c6HVnDKYD57F",
  "key30": "4g9cNr4U6GWkM9LBa6KEr9WErMWyECbTZ7QoHmtJzHFNsdEwdV3FS8f2QF3SJzXR8za8MeHvxBxcNENnCAfjtqLZ",
  "key31": "5u6NeGJDHKNBgj8ueAGoB5djLQ6rERKZm6xdeFkPZUJhqjWRx56eDK411hKKA6sUbEGaXPAeV3e8wNCxRGEWakcc",
  "key32": "51dmH9RdajakU4xBPaimy7XLaWBXQZbjA3XzvwW6oND1vCtUGtjonDmxyHvfVYLUFWhaxbefpBA83Kgw479sczmh",
  "key33": "5LHB75dYxaBSncejwSQ9LNBC8VMkqNM6po893BruN2LXJ3py664hRQLJ15HudUoSLFCsbMyWPR88TMEqrPyvNYqx",
  "key34": "3KdLYNwsm4nGXmgsJ4vjfpKiZM2voMSj4xcyRXknc6krZMSHegvfcjKAo3UAXAzgFTuj2Lyb68D12rhqw4q8DVah",
  "key35": "VcXNu4JnpoPYtbjs41zFMUBSfs5meuQAsSsZL7phdf8Ztg5UKqw9K2dKm8zUoqhuKLqZVMSexanjJfX9RhY9g6V",
  "key36": "4Pu4Bdo9HFLS2JYg4UkJZevmZadTsURuJuDRPnCD2TTW9mHS3gL78zs5yKHnuKc5xdtMwnNE5yhpobpcshnUkYF1",
  "key37": "57aVBvdY4r3LpBGRxZdWLxPrHW9HRBWgp6MdSHWEmYgEamJyatCznR2N6hJXKtqBEFk7WPuH24ixqFHK7h41F5Hq",
  "key38": "3us8PNY9yAVbA4nSebbVVcbV9LGjU5p74xchNYYcUMzzwkudJdUiecuKYxwa3nU9ERpBWvF7ucsjf7ChtTXSWxuh",
  "key39": "43zshQvTqX4qDgUf3iGo79hUzaXgcaHqsGhn7ZB9TScyca8c7uu4vRuvqUzMaeKqZWQBeVmoJbURRLEQ7jfi7Dgz",
  "key40": "4FVSVTeG8dhHucBsftofcwPKH8wC3WoTQa4ZnzV8hZKsXddZU3KnJz7YGE8tdKhuTdKfsDobfd4oiKyHFxRwev9N",
  "key41": "5CwVRdPMsXVyAYc95cqWdBx9nAZSAvwP5Dmg12r6nhFffNWkP6iCTW9N6D4VedjNTyKU64mx8FhWju4HHbxmeDrQ",
  "key42": "3Pm39oAd6XK3QERbaMHuQyYuMk2BcrLDWr4KBRWVeSrRwB5kASGXskxGaNXkBLGjBjPJF8UKocjk65LbJCrXDBbn",
  "key43": "3ixcsQFmmM22ooUPbCoa9yr8urxuuSLftY5VYEparJ8eYTBkAinC84domb4wkh7pGAThdPFUuCr8C5dGR9k7BBHY",
  "key44": "4A78MH2CoCUT1ejFF1dVcWLtpPYNLvQLUYj8Q4teeQwM7tVq1sHDs9d9n21uERqHJT8WQXuQA6LroJ3tb5vi4Fja",
  "key45": "4pAVvqVeAULB6A8LXP226gHwv8Lc3LKyisTTuZwi4SFxcWgVRGEBbcDhSe463mrWjBHDksfZceLuNH63uvfC28Ep",
  "key46": "2gAfMiGPonhiCUXi7Lbbhayj6hxrFG2gQ6WdVzStH8GNSKwe2PB3xirzt5irCg28qSzV3cHkCf7dWsg4rYu4ifFc"
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
