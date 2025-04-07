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
    "4HZGkmVZ3KJYUhvWPbF1AiAN3vkiyNBzmQfccF33sXeKry3R9tT1CvBTApwDEpuPZLWyD6c3gm81jeYUmwLuJ1Ck"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iiGq35gbtrfkHmx5twqUCzcdMabgyRWsDc8hKNztRvsJLcEvz4vR5EBfGk4x1CAYeG5e2b6Uwb6mpDF66dRJjWx",
  "key1": "Z7UUyub1BowUTZnVZ1QDiefdk4bJA7TFJDhWr6EFZJcq5PTB6298FrPaXAi1RMGNj81nRg8uqXvjygtNw61gsEH",
  "key2": "3Ethh4FNUZnmi9Q78yAPkLUN6LkRwv2mWD66gDzMtPKrqQfDh1PQzVGP6hfq4DymxBmVvkFrbVonQQN7aZHLBfmv",
  "key3": "145cwm8yth4VsUfXXgcRXMkLsoMBeJAeym1TRFG1xWxrERFN33mniNKBy8vD1jNEFGjvtXPx4seocuNbwrqrRdE",
  "key4": "3UvFK6df3HcMndEskWHk5AMPSYLKYik86qDG3TSzdrSZjzFL9WCCouiUaFmkxS2UNb83cxSuyRmJsy65b8gMaqxD",
  "key5": "5t1fGZQ69ZGSBFjQiw4t8nRyq89vXPEDuKFxCZrHXVaxCt2dV21jM5N9ESXYnErCL5CRHURXsJcn714tvGtvBWc4",
  "key6": "2qiSYX5CDGxMbAMf67Xjkbs2CRhHV924gryw5mM9AQmQ8wE6cSvLftZX1oW98aqnKkppR4m2zuL2PH3UNpW41uW",
  "key7": "4nh32Dt9XSbtiEsZzSV7SZjKtQAn5ADgT1mjDVophM6aDXDTC3mZuZNfbUf13BEXMGwoXjZjMAUwfzg4UkRadiBW",
  "key8": "2GgC3S5c3rpVLHj4QJMzkQBwLNpbo51TWCjvQm9MYwmnE8n4p2r3etAPV3TaB2LL9SSiFfAWtpGhTYM1RVcTzspe",
  "key9": "2yhxQmjQmQanJAAEkc1EkasPJwB5SQ3k87tkugnvaZCscE5QuzkJBPjXmhGktVvEPvKKNDmjDnoBG9i1dBxjJbnD",
  "key10": "4i78XMr2X8Kb2DvNcCoaYkNxiPKRFrFcBG9uEsh53puvjUG8CUKt6R4pwsiB5vXaPPLUxnPmDVVDMi1Wojj1SUMH",
  "key11": "vKxznBwi1KCTFUoDwHSWobkgcqKHgSY2uM5pmfbSfTXUn4PKWBPidGe1zo1re4Bb88RLPwuFadDWH94oN2Fe35M",
  "key12": "tUhb5qRBUkejh8WeaAXNQGNoSLAM1GqB6fKjnQdk5hLvu6AD26f7B9R69qscjG45oXDE362jkY3iqnABJ4rQYjp",
  "key13": "5iz4LFvQFMWu5CKoT7PT5iuPuqNttigrQ2pq7wW9PsYjtGksGZAkWPhEuS6dyWqkZirwoVzJM6E4zEUqSPHeVpbN",
  "key14": "3arwezortQsHdgnFLihyDEUVMrfavaSfSy3tQwHACEGAsCEVm2svnEkiotdTxfS96mXVncTjRo9vsmTCxSxQwGYg",
  "key15": "4auRjFeecqy2kewPRdc9GEq79ArSqJvL2bNjN7EBSw9t6pT2ocBNaq3XCYkZJUzEL6881nj6SK41YsvUpUKuWaX",
  "key16": "m1BNVtJzXwDQJTkSJbeNawkrbRPxdCby1KACjjoqXiUgnK7h7L8CuDfJKGvb14hdij8PYkJkvrUnqv236mpS8PY",
  "key17": "4V5DmF9U7ekYDQdHqjLkWciMMwXBMe91csFFAAeV4JgaaSi7JXmvH4XsydLmZNoA66ji2FnqnRbHUNWyRukv7u63",
  "key18": "5g3fTwv1NZb5dKvStRi5DLHTbd8qnxUVWLCeuRTo7CcQ1X2MtHBr8Peb34f5S4HccuJioGJ7a7DvfNsJUMvFR4Fz",
  "key19": "FpQmQTMnSnTEB739xZVp8YwrhewCQWzkUMewV6rASRufXr92FHkcPbRkE18JBXGSPJdbbYoLmH32ZXAADC81BeR",
  "key20": "4HZfpuBLT8p6nyniwmLcC8NzJhgKQrBy2HhaeLEcBvxPkAwmWMaoi3VYookdpgxPHFmxtubqULWMzdTyaHjsaVh7",
  "key21": "33Q834yveM28pU3ejVpxczQu6QiQmzypPta3HM77F8fCDfUP8WqL7iUtYV71DLkwtYVrs1RE6mqzCYweoGiryHEv",
  "key22": "3EZJ5UZbaJydLH6kF6KYofQuGWRAjFbxJoWUe6HJGHNVJxaTWhigEkrZJaQUKEYAH9k2kgUxQCcFdgWHN8uLwj1s",
  "key23": "3epGA3YSDQDHoCE9CkmRNuKhRhkPKpbM6zEPAV9FgGvYUHaNxZj51F54RLtycpiFbxXbmSx6Tggq1Yji6GpZZYmP",
  "key24": "qxvwSJkm8RHyBVtDDP6xpYt8PSpfLgzQj27DqyPUnxToeKVVfoUsBXYbP6hFiVMzEutvw3J8TNHHNc2P88tRDux",
  "key25": "4VCZP3mCTGnGKTDGjugDS9tXvt3kGk6n4K8iHXh33yiEQShx1zgFp5hArd54jXeZ4qphyoeG73pnn6zLP8oC4gSF",
  "key26": "2PYpyiPkdkM1cxq4kEtW9hu8AKNfbwrU6SxA1TUHe7BzfW7dC6qhx1xnuLRttUGyUp7Fyd9t59yKw9JQhz6KoRkb",
  "key27": "474xgYg7CaK7MyW82sd7UGqL8ZGXMJqrZogr8G4wTSPnUoJ2vsDVSyyjKCzQF3LCarY7JAUuwmioQPkEyH2Sj5h8",
  "key28": "2kqRds7mkzQBArTmEkdPsszYpHPUNERnbZvCrxoK39kLSzeo8sSQw8Gy13ypfGycaGKF3BTUW4mvP5y4yRZvRqd2",
  "key29": "5WwLnHXnFT2jYDT9MxqjUoFphhsdmb3BfAwKf2EuWHCDKwqnsJ9ATN3FccbMNCqwtVTLYWMg4BGwqnLidrDiVVoA",
  "key30": "4xTvL2BVg99XGaL7oYJncVgMkbATUBFTKiZY4Q8MoVKz4JTeVYs8YQX5sXyffNHzBThU6fSAt3Jf85mcu8QgU4bV",
  "key31": "42PViBC94Zyxb9Bjed6cDMZX6sCXvQbjbRGgzs9mkg4hcT2yCqLB3uYq1KuenDqpiyrf5UYYLPn3ns8BGfBS1Lkn",
  "key32": "4RGSYDLfV44zmtEsuNhc2YCf98qeAqktQSxTEQo4Z8u4M5RxLQhpTJxJ3HwicBbTbEDzaiLxQGJ1tHQ1UPicxE9v",
  "key33": "4BAFaJCCRBaQJwstCUsk2UFb8UUnLAF8xU5s6HbMsW4j6D2tz2k9HipQNKsJhi6ezkRX7FzWisTSNpQFA8SmDV4a",
  "key34": "3uAWf4hjy1W5y6gFYcUrn47ho32hn9dJ12dBfUvKvw24Vw4GUZbmmEgSh8oLpJzqNgvcMgdKj6K3U5BDLvsWtPzD",
  "key35": "9ZqQ7W2rn2gNz8TWJNQBEmmPjE7f2AwPJL8YTzioPbEVuZA87mtXo6XRRzk4yyAAcDM1zuAtp4e6nn7kJrwiDj5",
  "key36": "4rPeZHxswyomCJnWdyknGzNwZ9kYGH3kwUMqzaae82Hwmt1MmJ7bEVdZNbmadNkUD38LKJAdwYucKhqrVLWwjQ16",
  "key37": "3y8PjgvnZ5gm2vPSaz5f3MrdnS33nz9rrPHw969Kn5nfCzKquT6EWWbMJ7eaQqYoHmenAzjRDMpyCRNwNox8yYqZ",
  "key38": "2tWHgBuu2uUUiLn1dvJ8Ywwmmo8Qs5GsezZU6RRLXyRhVrsUVyLYgk499DX3C3f2GwMP8xEQqm1bHWthw7zHFWdu",
  "key39": "5wxa66rRNVVBRz7qnJkbZx6tFfHUh1R6HNdmQZycUCbZEkxtcCJyDkFBDKZ1UFijqoWH5zrqBt8izF5oKFWg6NWu",
  "key40": "5GK1AoCuiccsBimYTMZGXr6RUqSzGd71cY8vRQZDx2KQPVtzPWRMvM9Rho9h9YDsWzqiD2X7EmiuTiPwfkTQ42Za",
  "key41": "xz1sv1FEofMy7TLh8gpe5KV8EgdBwVPoKKxKRp6V7FEDw9eq1JFc7QGqXaC17AqjzwAjkTwEUfi8zwcrpMeDiK8",
  "key42": "rFh8qhjNf8Ccx7JmPb29oMKECAc5WrL99e1rYo3ZCsiBN8tNDNAaU5b7tGDYgSnq6xTimGycVyePE27FBpGKr6K",
  "key43": "3NwNCcadw2pkuo5fLVECC6DVHWeKgcyMvY1h8LwMxw9AM8f2V3AeFmwC8RDDthuFaqswcDLX6z835nPhxjMsdCtQ",
  "key44": "4qUJm9vAYNLvonEPxtQ5oQYBegxWBqwdUn3EvJfX8JeMkVri7U92xuJN7pJeyukaKNdf94ViAYaNrH9GWkdw26aP",
  "key45": "4idRZskKMFcLT1W5g9QXfyfqXqihmbCQpw6mxjP4VykVmqTQRajqNPQZ44hcjrFwbMEYiFocq42Wf4CvmzD1YdiG"
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
