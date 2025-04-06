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
    "4oZuVDLr7GvBY1LqG8KKA3RFALEohpyPaac4YEZkvUrU88HFwyHWWKTnn6Sw9HeuzG9xKEQqfiQKvSLxKYEog11L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zHFBRXAph6fz4sMsn5BSyWYt8HUUmpJLxo4WJ6TmVFYJVp4bRmFHTJuavn99LmYmGhAcn1STq7zDVPwQAwDDGbJ",
  "key1": "21irdAt1h6pKsFQUyT4ks5MZLm5eKMRoUtY11RrBST4jqprqD7XhwBfKc9g7gu6h8JNw3ZGfdcogvN9iMZpM7GFa",
  "key2": "2PPd86DMgMXok4UTXP6ypTRw6ck2rEfLdSQqnnvhLSG6U7Xpn5i9yvegQW8R84eccUR9YWP1pJb8bSUm5PrWfFDk",
  "key3": "3MqXNSNQACpHaRJMVAcdPnCY8mhGgqa3TNkFbHnvzzCfoYnWoUszjk6NGrJMP45HkvaLNKTxtsDc19s68jsurpyf",
  "key4": "xBGp4xvyjzag771KsJKHc38BQr4VWenvar65YqCwuh2dzHX82Rq1q5fX2qZtitZRT1FYLKk9aXbFyFeC1ujK5HZ",
  "key5": "62rD5yt75WiZM1TUYgT5MhuZdd4EXUHMYGqUJH1Aq6faFJNsNc18yaaTq7DDZzf7j17DLiDnKm9RSSGx7RKqEef8",
  "key6": "56Y3tE7aSDmYXJzBVp4GX1PRQpTUHWgCLZdW3AYyTrnxy2t41DEpuyAPB2c6sspnTnyvenAL8KMXxcGwXEVSYbFR",
  "key7": "49e1gGaqGizvanKCPPjmEiUdVCNtgNbVqJZwbQTgKQWZhDHXtYG3vAoDBZmVaGnwUFhg5h8cAmSRzMMBqci7UD6g",
  "key8": "3y9wYf5fhUoZawhRV9KFPrtFo5PnUxfWkTigNefYaegTdR8jXihSeNNH9EsXKZZzsKqTRjn785zu5uw73Wz3jBWR",
  "key9": "5kigQvfqPYVpyGaEkVeTSFjj1TuUhGb97iYRutTXEDkTSh42YPz5hw1G9Cxz7vZn6dcVLD922ByNkPPoitH9nALm",
  "key10": "3vygcfkQ2vssb6GPFNmn5Se8ZdhtEBZwNebwcGM5jayMpcYUMoDaPhY9fiPQZLHu5vTjgGEpEtp54tW3nU77v3qj",
  "key11": "5nYv1oe1hB2BArnWCLa6ffTYwuuUm7FdyY53SXGSibT7bU6XoHTWoRG6YL5DTapnY9x99xNsRyJ3VQCT37m2GDM2",
  "key12": "49GRYYZHL1ChfbvGiaNdr7DemL6zYPVw3UGg9FvYtozr5JNcoC8gJDXDiQoBnExp3ip5mT7kMgyarMmVCLcLicaN",
  "key13": "3hofvvzvJMwjBqPF8WjbZoe5YEcxs6iS282ZZptXBfDoKRC8pE8WS7Rdsg8E8Q139FYmwE41dv6f9tLUrWnvr9aw",
  "key14": "dPjUxxs3b7YsPkXCnvTetdhhEG68TLPcdxHTKM9mcYuGW4ipZ3kmPWjXqv96GHTCFPooDugFJjRsV3oTwZtiugc",
  "key15": "2hGQxPn2KYvbC3S3t27Nn2nQFUdVHzGfDXCESPe7JevL4kRaPgxovcF1qeTz4jHKxC5JiuzypGhn2jdGhozjXXvU",
  "key16": "MLGRxvTqnrt5SbfSEu9guiPx1E7z7vXJ7JweAVC3gjMh67HdE5yfgBn49uZE61bbNncuC69qha9fm9sKhLSWgnT",
  "key17": "35F6MBJZv5A554MkcXhmZJ9nBwqaogSLqoB3LD3M9g3NpNbeK5a4kLr4JWBpj1nJGvVcHSKyH1zAcHS8DdY5rE11",
  "key18": "47bpejhQeis18zgm6qkUzzsyGCkSg89xjZ8MS6iqjSQfKMx9ufquJj3RZVLFbYAFau7HNiWRDZbwEp2gbRLbQFu3",
  "key19": "RJV6bQLDucEJBKtGp3Hcub2szCupDXzbvyY2YY316Z9tagJPHSwLrj8z3JvR9wEK3kddBUwqBx7dTTzVgXPfAqE",
  "key20": "5WUgL9wSG591Tvhbs8jb4cykRYkxoThwMEzXzd8kmu9ZpdZb7NHBk5tUHGa3idBnv3bzG4QF2Wt3Zzt73ayEYi4F",
  "key21": "2hcgsy5KbQmD9zeeDmKEg2VMWKAgeUxM34UgLLkTonnVpPh96M8SwdmcKDK1m3jtV9vzsmqUbDNWDifj6z5ntysu",
  "key22": "FyUQQXV8BtjvP5qewYB7gq1wHdpU7eXCw8ESNJSGpMnUZWPj3cGrjv5TgyQxWzwuNQKpkHyYj9rNCbMR68cg11x",
  "key23": "WFgi2WY9x7QqBJNPrZ4bp8ytf3ABvWJ9Cr3S6vMkMBXL5oDjkNkGNStgaqn5WU4JC5srTY4TmNZdgUXdUg7K48S",
  "key24": "2hq5TPi56miSrHCh97VVzY74hkALzxR3d9pC8nyQGhkiQoDbuCq4hEY5UGWQZs4rGrGr5cyefLhEwXcV55HnNnTn",
  "key25": "4RqGKBGhUTBJuPus41S4g2iNeiFZoJoYksRBAFU9XVtncQ5H5udnQRQRLafkMcHVcPpui25tpz8mTPtxD6Zr35HR",
  "key26": "3C6P1fzL1hxXHiAcBwbYFGtjCH4paRYknvNpjC2ReyMRGc1UfRicfwrnRZmz5f4ERArZAzFMM3Fgta2ufsztK6nQ",
  "key27": "BRryDvaUT9T4Kb6aB8Uw5Leq16HPngdkJZLMgvhVFQXzLErxfamUuLmadLNuEAYHT1DrGWQibqaECLtL1tNdMpi",
  "key28": "3gJLXxecJBmAVdvt8XJpoYWynVpzsorjhKRM9X3sAQAZVDzPQ2oNrBK7TgZ7hwYY9koUw6upSMjdLf4w6TqYgGBk",
  "key29": "2CqVdz3s5wVybgPq7nxp3GqaPQrhZQmQEPrYhafCveGQN5AidsLsfu5gvypqYCCJ9wWs1MA67JC3j9eKXSxaC64v",
  "key30": "2kfYwqomQ9rhCBtnvP1DutN91d4S5NRCs6WUMS8qQmXu5vjaeJ8RjGdJ7UpjDLajHzuxSEeadj38BsgUAFSme3U7",
  "key31": "2iewEnjNaoQRCYqAyokpWevQZCRe4KGSgU7bvhQkLcyf9hJ3qcFwZV3hK6B4pNm79LJ8nrE5g18u58rduso3tzHf",
  "key32": "FWxAgNuQeYnMCq2divMnmggUADczBXjrS6LrBjgKoVDQxC1EievpW8gGEnMJV7md482VJvKK8jkuU1cjYzjHHKo",
  "key33": "4TgwgTPCHoMhUgiGYr8yojqFYPjfuUGysJ7TkppAecizM3XV4An5VrHxscTSL7ERNLff5tXB3RQbUGgdTWV3uV8w",
  "key34": "26mPbaJDt5PZv6sNmZ7rRQoGcsRFYPA4pHv95xs9aQiVGwj4cYmZLHk1HUveaYCzXJUUEEu62NXH63km2QEqrNui",
  "key35": "yZNhv13cdqaH9m4CdB35yY3i3KcExgCLCkGaGDqkP9h7ff24Gs7rDJ5dokEmpmoXihMeEacsgCGouDJG2f8f1bG",
  "key36": "4hJucMmDTH3znBybtHp5Wr79bwCUbXTykC9QxchuRnVerpoYptUXPaRqbGMSXcbzVbHnDCMvMCyVSNaMBDKfatZm",
  "key37": "4aRNbWXfwijc2T5ZJXG3PFiFmctvobffSTWBfCtTmVGDRiVwDFAi4gPqt2Sa3rwrJYGxZ4DTRL18tt6Na3V6fzSV",
  "key38": "DYvGkeoHo4ekZkLj9wttTwaooibifhwmSvrj1aYMm9Y91GDZe7EwBjYrMk4JHacMzZq4hGTQD1ZuBCeeH82YHGR"
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
