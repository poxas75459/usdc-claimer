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
    "5uQKVksdL43yYjQaiWQNeQoLaBi6LtAa6BDcfm4vfqjWSKbBCsWMDvQqCUFzP4gpJvuswv6z74Laj1aYCk1xKxGJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hHazfESrUHyM8HqhzK7dpZawuvx8dnTaPTkGsVcoy37YquvZFnrjzgzRDRgdsGuiysJ5GKzpnBRmtB1t9JcWyoa",
  "key1": "j8RVi1iydvmbpoprp9j77pp6JMzBzyTHUL2CyLrf6Myp5HRWeth8scHbXokk1hRTtDw4Mb5aWPz4Fm4jPnMv5Xv",
  "key2": "3XcYj8uviTKMbntwdEkbGZmbzy6Rdm6megP2ZaEYrkWpjkJZ6xHe4Y2UKe1Pqa68WLmBvquGVVByPJCzaEzn6e2T",
  "key3": "Z7kUao1wMeURJV6a4CmS918ae1XJvc2rt8TBPW8o2qw5UD4k7xDhLBeuVJnougfLdD5TUPrrqUUbU4zaMTQ2rxx",
  "key4": "4SBxLxCqHoWiVJLSbK7VXbTmKFfVMRCejckS1gu8vNVYVMKXEQNuCxA1LcUxxsARKiCNKGSvHTek2opRjBBw4yLS",
  "key5": "5NJDroGKNCFeL8AoFTmKYgL31Qjrn3WzSTqMxdEZUvU1c7TpQ71a9iP9E6RGsuY8UY4YXhncPzeyJg95EpaU8VG4",
  "key6": "36sn91ftZuHJgZAx6PCLeuvzwUB5Ctk9ARqLYqJDvwkBmc1daFmzoFE3RWXWcfK3iSQ7YQfi56JXBuzjVgLyWB6X",
  "key7": "5pc6Xfaw9bfBs1MbfeoCkFcA3MuXxR4rcCVgRgDEgXMYW64JSzgbqjCLBu435JVcaigSXkFEdqievs8g9W9gvsz7",
  "key8": "295Zth6UocRsyMztcA5kykuazm16Pfi6MD17nRCZ5UMsmmW1CfYDDVBbL6Bbnz8RUaqM2rArgyN3dztDDcUGEEgS",
  "key9": "2hpiMUnohkHCL2TFqg8hGz8NEFFjvbWxxKqSGVQXz9qQTEbtDdvnSh1pAbVVfvb4ykjimNczVhBtXy8rr9tjbRdD",
  "key10": "hW1oJapuDbV6RFYw1rakbHrYSYHjVLAMmtfRPbd8FUfVsd5Q8EcizzmAMF6eyU136mFHyfi9nhuE1CFBTdPYUEo",
  "key11": "58jb2uXY7TMVsxnqksY8DtLg6zm7UezNTPz7Eji51m6CFn4VKWbgCpuwWAyPnZKyb5VCVjFtiq5KbDcehL5Uzu5E",
  "key12": "2UeZsEFRZcezN9XRXuowZeWbNXEFYtca6roMqJc17AQWPTLsNXbge4j8yX1CQx52sCy7LF475M414fT6gMNnjcH",
  "key13": "kESnhDPJkqUyBLaa639CTGF3xiN8byrQwcFZNznwRR6USXEwBuAnDw9zAipatVoxxw8Kxz32pWmNaM39nMKCUTx",
  "key14": "2nBDtPafDyNkAh5WmiTMcw6ZV12UkDbvrUzQMzMP7J2MMjB2GtALGXURzSGGKPsDc28mdh2HYfXRXVyw9Pa5MLHi",
  "key15": "4FXD2BQDd5EjHu2YVC5HLHWV3bKgtexqLBD5rntFSrnHfmdAasjMKFYqSoGbytHHVegL71zL7kcTtJdwaCHt7hgf",
  "key16": "5KhzBycjcBFpj8iWTE4WuwgNzANVTMjxryVMAhxGgrjeiYfBnPqprVh6mYTt9ywrjxUq9Yt4HxeAUG1b28zAYRg7",
  "key17": "yLYBXHS5HQwSGNFYDND3zyaKEtzwhtovQ6c7bRP3VKcMo5astsddxzFqJu4AqDETk5hpC4Q2bKqKaig49VWLpuD",
  "key18": "24jAh7cSxsAWLy6wzTHvfmWDAhBUho2xxSvnbsf4k6JVeNAfwJP7opsJ7X51oYYSsk4oUcmLVPPoHc2x9GKyGJJQ",
  "key19": "LavQWxvgjCRc9mLtJVbPEEnSQ1UfzwhTrxJpDiFA1J7gbHdRt7z6rv19e55dESWa1fxq2Pd7N3CGDfZqwQwwR7S",
  "key20": "3ntW8pAxz2i733dpNwwyM79nN1j6pdDxESNJHi9V51xiv9Jw6rzJBfDhRf7UzqeYUHw9beiiJwz2XPz7ugHygioH",
  "key21": "mBWCXZs2YNKCceb613f1zrUZMJeueCPnzJFAjW8JwRaKYxw9wXUt4UbZ3NNXSdaUzRYEsuiYsBuqPKRkGkbv1RX",
  "key22": "d7WZJqK214eH47LdpCVK8b3cuAiv4RB6cb1H31MfhWkuzjhQXdMNnQamQf53pdQZ7taAZT7a1Gpp14P4RTHr6zq",
  "key23": "4kAw8GDhQFuyEoeBrzouJBVoRHjPUrnj7EX9jVzyi7DnPLNXxiY5oLT3jqAy9D3nteiZzCCannyQiWStxKPwDPrq",
  "key24": "3cNBDuYGbLwkakPm1VJQSfg8hQfmq5RwyxmTUaS7AS7QEz5FmMgG3xbdwtMjLT1pfWxVoDDjSbPw9TFCVqVpLoYf",
  "key25": "4DDfK4hUNJCnvfttXn7Xeac9KmpsVAEV5xCMADSHmKUgrj2UDHFMfuFLuTLDNud5mq8FmvbTxjd7ScY4Z2FgXK9T",
  "key26": "q2eNPmr9on3H8xayatuSzXN8XbCjFumqwVwuwqFr75icXXR4FeiLLJab9TY6UyJr8JrogGTxrUFQosgyig3CGWJ",
  "key27": "HGPFNZ1SoGvpxCcAW9CKdroDxzjVL6yvUjWR9kt8H8a5kSH1Bxb2n3DJ6C86dtwuyxJokKH59ciuSQe63Lp6vpW",
  "key28": "5PRPJ1AW5GMJBHzAgPjicTaDZnsypLZUMnSdxa7gF8UkBUuN8kFPHvJ2PAmbvYSCFT9ktEDJhQ4X3hZUiuUyKX56",
  "key29": "1x9Db88MDGJEr7ZJuAh5hWNUt1bG1Bw8c2e3Z9JeFnpWboRML9sYnfzyyHuZRVQTAwPkJqijMC6akTg2inJ4vpa",
  "key30": "hZp5QkYKT2nJxhHfJVKVme8o3mmauQjJQomFsEAfzPA4WhH1PYz4wXr9SNiaFFtBEPcqSDzrrbqBskmBji6jpSS",
  "key31": "5AFD6Zbi9W2quhx4QxS8XC6Ejk2hV6SqvkaL28n8sPrT5m3JuQ1KNcxxdP6AoJAQancukgCeDxBmmfQfuogzWdKP",
  "key32": "22CuLscjuhMuifutBMx1A9xXQF991b2pjUdGdmjzmdvYBSuHvRZvPpxcvBWgLKTaTqzL4GNJB3VWdLyhZJuem3RV",
  "key33": "23vxQeJKz7Ln4XVZfy8wgTnPP1TkN69jHNgYT7wNg8pFrkx6FMwhcqJhXP72VYF2EKSN7iGPScncY1Mdi7Qi2GoZ",
  "key34": "4Jnbd8YmvHUfRrdacfvhjGZHh78xBm8wdvw8FQ8WxZHdSsemddDMG7rzcuQ2gTDeT9HyuFGJADqqu2auPq6C5d1e",
  "key35": "3LpmAjFCiy6zkrXakPRS69fW2fzFRa4Swwg1W73EwGd55WmiWLNguTbihJj4bm4rfVJDizeeH9XAuowGE9kiBCk2",
  "key36": "5jWKJFzKmEPeuwfNVTF8wi4yrUoGVYRt527NYjq4o329RzRQKZSetsFUzyTu1PdXHGVBgzMBCiCAffumUrdzjtJ"
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
