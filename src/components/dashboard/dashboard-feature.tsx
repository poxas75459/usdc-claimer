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
    "43csUfMPqPNpkBLKkGPFDMnqQ9nz9ATxQd2foaMB6dhQJMUMuphzi3hjAtMMnL4rsNkTJGSxxsGmd29yuumycLxu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NwJ18GA9C8dU6ttDsz4VpEivZoV6DydtCw1YwKcF3h5r2khsvYTC1ZExFcAh2NFcU2D1F468HU17H2jnzdWW8AB",
  "key1": "sS68jD1KebmnigwkjeP9dquQbCXLt4B1zdUBLP3BFGtLbh6kNB3GPM9GCdVLXVrs8CFsmRzkg7Fm6xNLpsp5FnC",
  "key2": "3Ho8m1wST6hWeomd6vbKUUhaWzYR3KkJCFKHU9fczhyxpMPURHZxmaSVzS3TnEfe9yE2qvwRap5cKo91RnmK5xZA",
  "key3": "4czGg8Le6Zm9ayXxeYiaFgepNLrmzzKKjmJr1fVJjH7VXGLeqA1kPhkinmtTk2m55372d7MN5qWj1qYYVMY2SPQW",
  "key4": "4wMbJuhSXBeuQ8kPj6ewrZ5F5nKWEVf5uEhUtfqPufxNxej4afTmCYaDLizp2QxzVPshVwykcJAMjGrSZJKCpvJn",
  "key5": "2hdwxHRExhcqacAAq7ZnEvqcoMmDcx6zfAmBjwM4qaXC2tTqPACAA1bVGrNAeprpqP9gAyBrKHLy37sdyxmavTw8",
  "key6": "2swGqVeBah48Qk2rALLWa6NF56RLp8PYUmti8irNNSNVtgRhNmET9mimwpEoBGCp8tCL1EhkuVoHMw2okq9RVfTn",
  "key7": "4xEV7sUEPTY53wqVqub7DH5jk8SM7sH4FbSc4K3HJpMhuzaCa2wQTCjm5DxWdYi4Y5ErWwKeuF98Y8Hu2MtdFa86",
  "key8": "EebNYp3sEVZFGAQeEMSB7rYzZn3rrxqNkQQBxY9kkFbKtoMYPsT8mAtDgrehxCirw2gSZuEGR1gxy7UhJCuKnEa",
  "key9": "2r9bcNXT1hcL1oyBxMedgt17yVwH8VGnJ2K6xqxaAcp3odKGjPbXw1WUMrxAfjeTKZAH37ntQa8bKUQ3QGSmc7hr",
  "key10": "5P1T5gyXGF3hpWijoJu4KqtfamzawPJEmQym5oFge9WNd8otfHMyDnnpMD7mnCJtvB2h4PDYAubpfU4GrC2eNPEx",
  "key11": "4VvEsCso6wYH6Ahp8PZmFXz4pb387JLTdNR1QxBPCq4efM5WbU9VWoJVW5oZTvYZ56W5cJ7FNcCu9sQ5u5g8C4oi",
  "key12": "5oQJTrkAcqo3jhA4sBDYdn6QBPQXvWA39GeMbSYWwm7yeFfrtagLXjMkAPw16tf4Sm3nWUWFGvzzyVjHKCRGJQQo",
  "key13": "ZDMqMXs8tLrxirm6NrwLnenYhyjEqzapZnrBvh5bTAJwqKhxGptmwQV3c84ULJ5RHsY9PtjVf8QjDjiLpb397gJ",
  "key14": "2cxuQ485vXjtH88LidX5mmfwGUmD9G93ChBHK82Xx2vE8WLNRxc5iuTgpiqzi9FALhfNj9UXimwbiYyAbADYc4to",
  "key15": "53MJaYsgyutMtpthXMkkcaHV5htwxfCHLdL9kZQZinSeq434MKddZVaPtqssbN46Nn3zZqUt4zJxgo4aj13wvzFs",
  "key16": "2Fu45juFsy4NKhYLv73egKNW6j7cztaZiGVGE16qV5sgT6jpiZSPA9iDu3qRjsn2VpbTYNAgq5kv4n489aby7C4E",
  "key17": "4N2mCfL7NUP19PR8xz3RmMnviGs6sSgqCV9ED7JLjXLyTheEXMB7TaJ9AcjHUoMxgux27F71ETS61Y2gXybFpLMt",
  "key18": "3wKVGZExH1agJXLevbhs7aYa6AVJRHoVkij3mmYY2NQJHeWnuPCjdZS72gPjB8DD9VXQWLj2RLU23YcYXJoccdAT",
  "key19": "3JVaSgwY5CWgobdBTH5yuinv1JLf7gpqnY5y5S7B4yACw8suT7jkvHcpLzDzJ5cqBhvzLRzpscBE7PZQudAW2EhQ",
  "key20": "49gWdSzd5nnq4Jzy49MUEu25KCLaM7RhK7HyDXm1HsydYNK6R6MZnVvUyX6gfyhBQ3SLh2DhYuxGVP9yDVKrdUmJ",
  "key21": "SoSoxRu2e9BxgLiXDZz12uVbChTvyCwqJsuMXyrFLUu1xui2MGayT9AKua9ELqYW4KRyuF2m4RmxfDkYv7Jzmnw",
  "key22": "28hfnc94qnbnUx4zpDX3RKzYJskjH4Dhz4muW174fdWMfDJUHp7h64fRgMipaDw8riWS8oazv5WXdHjfiM7B4pmB",
  "key23": "3DJXAUH6raokCoZn4Styu9drhdniDkQECdzLBr3n4hUsRK6pooJo55YhiD6KyJ59mbPCLWSUucCNpNufDj3qfUh2",
  "key24": "5KhwDQhRg4AyeryZGb5T73MSoXGnkgxV9r2M1fqH7Lqi1V79BUjXdLrw9HMhVj8JUFWiTeffZCUFPmxPkcy7PA1D",
  "key25": "4EoQ5h8ki6VppdWYhpcADfpLqHNZR2XFuv4RgcYg8PdaJzo2Dit26G26YpCkryHoGAZKb4wJgLmEPB46F4Wbiynb",
  "key26": "3C9BfVgfeeN5N7NyepVehf8QnaoAVCNFg1vT86dEF5u5RuErm5EUEYioFyv2R6Sp86EYYS2STaFTadJKUET2QKL2",
  "key27": "xQnQwQQK2c9vb7kPHgstYTfNuoEWxModt3J95VAXqCth7pVELjazbaSsYEzb8hnFpxqfWatHMCcVUCcu7g3x28S",
  "key28": "4QwpzzoLMje7CFTRT3LHAcs3ZbjbkKQCBWCh4ZBX2HaZpDuNmr66S3aPaKVRoLZ56pVjx9m5bPHYZ4gkYPh8YUtp",
  "key29": "5sosPhBDUhHieQgPVuhD7y1qwV7caHRQymTLKnTkhSZtgY76i78zcJNvD1964DnrYXLndtLjhpoiGeP1CLKY7PZk",
  "key30": "2q8YQYTK1rW1B59kHD78ynJTkWwEtziV7yG212go7Hi8DtfazLEXxNgUNVZBxqZw2V6YQ6Qv1oMQyfC81rCB1U5d",
  "key31": "BqQCDVUw6U7TuevtzW8SLU62sV9fMxZGZbwC26jUCvCUQvkWLfBoUgkyV3zw5xSkV9Gzy8raCTmZjacAsEU7mFL",
  "key32": "5omYfb7z5ajf9dKAhCZu6awS2zrT4MHWexBHexHUQxjSaUeJ4nCNwDL9iFY9rjc8uvv3xYbPTuUhyuXjSsY88jYj",
  "key33": "52m9cx5gcrwqLtpbwXYbwDwZVPJXVQmJwWZt57EwkAY4fRYRoUx5dCBbTrxhZGFnWM17sqxsreStXaPZRKQ5Tx7r",
  "key34": "2XbUcoK17vv7mT6rK2Le39NuJuLUKHrPpUWC47wPxzS5xSoYrbDS4p4cWGHJkYkejULS5jivpEXdJBkGCN4RDNH6",
  "key35": "33Gcxge497jURsNBq6FZ2M4eVaKVwqAToq3LYrsijB6CzYgZsZZ2yrSHRK4eaWnqqoV2UD4cHfBpdYowi9ueEbhX",
  "key36": "4g9XfSrcVcBigemHQ76vYczi3ygRgF9t4nagepC3GoR6UnDLvnxoQstckb4vfR6RRsnMBTrdT1GQ4rg3wj7du82K",
  "key37": "3nH7HX1q9gDmMM8QL5vw5w2TjAx4323wVF5GDNeSBpgA55p3UrBnuExRQQJJ285tfGkevJwNgm8yticu1sh4BdCZ"
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
