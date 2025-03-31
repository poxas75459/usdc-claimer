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
    "57kEsQDW7B8FRLbiivKp7kWj3QB1JotbyYFY7wZibGEME3xkuJYHKSXaP4ryD3KfDJsWtTo5pff7ULi8Je9ez8d2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "su7iRaz7KKqvttoCn4hUGKU6f91rcqr1RU8pkmoiaA7Zfq9iX3hcuLxSoNbGx3VFT3KTzhWKGsj2iUnL4Z5YcM7",
  "key1": "oEmDHksttJ1QUd3nbuqyCdyHjrXzwFDGWtkm7sVfZUf8C98uZAM1ieWGhLWbkeKPJ8WmhFSDuTmVzXqBqK883j8",
  "key2": "2Jx9dm3ktdrmduCE4zqF8264qHpWMabRmMxSpTDb8TetTzba6QaZGDJf858fycqACxkG6JNh7wdLcZs3SDQdSJ87",
  "key3": "2JUagtjUJvksX6Vb9xseTEiP8dhghkXsUQfthj4YFTVbdYmvAKoSmK5y6AHTKwoek2utCq9yLmgt2oGMakrNbtRX",
  "key4": "fmuKS5wCc5XQtDHKDH9AXvW3NrifidjEm74S3oWEWLVGwMtDxu98RmctihcucciYB21oMQBYPg8BkdEkG9MGAh9",
  "key5": "5KTKLQqpRob2eLeocXSDoHvYuDcVNoeSzjP9zmpsS574DDrKzGV3QThWUf8tF5FcKCyFbToz5KWr4VNkcUvEeqk6",
  "key6": "52cGJg3RxppGQyRAbFnyGm8V9kWrP7P3iug3L5rp8PEaSvRDpx3PnUHifEs5wcQCbCKK2qVysKW9b8QtEt6ZDwZy",
  "key7": "5h2KPoT8gWJvcGFbJYkSBBnTmpruiBq884a4oH2nk5GJUSasqDtKuFSifvfPUvcKzB9AzW24phRFiTyt2tKD9tFv",
  "key8": "gxnoXeJFX82Q15LAHzSVcbzeacq27NxoUL3YSB3hGTsowDt6YutswbPGmuXJm2oqy8w9uw5m1doWzhRML5jcvkF",
  "key9": "v1g7YHV8af9mhKuFs2TenvYcEnAuhSqvTMyAj5TgexRfz6vcSj88TotttDdcJWjBQZT4h2rn7Uctc1osgHND9po",
  "key10": "CHaQg9D3B3vMFpzPGYvrUkxMWcvZSTFkGCS4AhBfqx4MAWifGgawpZXkUaMmmbft8NpNJcpGbkSYxkrJgRLgkGx",
  "key11": "GuA64cRv3u6Pr6X2xGhavx7SzLMBagfpRbRoMJ3YskvToFx1ePBRR71y52NWQdQm4FUE13DZUVoHqNFrTRGPQ7z",
  "key12": "5YMioCDG7RiePVwrAsiDuQpTcuTfN9N24b4sFbAw4CYCd3Y2UX4Zqj1mvUaQrmFBdasgqnJuyfP5MsmTak3wMfLW",
  "key13": "51TNceNZLYSNYSown76B3pqRw5rWb56caU7ug1BVRkWiTyXcorimK9kfmL7SjFF5wA9gcoh6fhKSEXhu9n64vhpB",
  "key14": "3MHbji9jHf8bah2ddTLS3F4Vk9k8SFrfu63GXDXUzZYTTHsDyEEbMaL87buvC6JkNKXe4ud4NKGoaYQi42KYyHHh",
  "key15": "3CS1cht2qjGKHTaXDNwTjp5hPWx88AB6MP9VNPpekfsK4bznvoMKJXS5AD8NS581WgGDVdnaRYHFTLuLQ4gRhXmF",
  "key16": "3NtaH4rHDA6WSJP8AhHhqMB3ea51JAtXD1NQNDPN3uY5T92bzwBaWFAJtt4C7YEXdqZuWXHhQvQ3NYCu7SJtyaxu",
  "key17": "PUP46CUkjY31uZRpy9DC3bwtdpD8pX3ehvSKyQzr4bp7QHQj3iTSHkxx9EsBdKiUobHuWNAcJdFqwXt9dwzWmsW",
  "key18": "4BirdheEmUN7Z2nV25jZyq7RzsAk8aRDHVa6hC4ZvM5qYPyiiRyJt9e5AoUkJuN7t48YXFuqoZy7JDQmBXBcp7Uc",
  "key19": "3vmUCpNC4RjJ2CAwUnYBc7TCmBvCR1TPkVf4bXnqH73EpRzY4ZaYTRjfwXgVVVxe8MTj2uw7HSsoRoaRs7yEoLa8",
  "key20": "3rCACYPHo73Z9J8DWPaLWWab39Ejk2ziAg2UuQHMrXb66657Z5j3Y7xJVjGtcmz1soRT8obLq1Y8tFYXstvGVV3",
  "key21": "G72jtTdiKBpKJ9Ah4Qtdaf3ZdtxL91WRgwRqEvKV1tpH5MGxrxq3PR24Ja6JvSkmMZkjCpT1fzsKSDQr1TZcJmQ",
  "key22": "5wdvh8oG6M9boqeAsdEbwQ8tjcFH13xYpzQqn3PkUCfbsXnYSdaz3QfDJiwXBFrPNqpRtKT7ZN3NxQfCvTT4Gmn1",
  "key23": "fAv5A89WaaNbcA2tKr35ch8r2WFK1Ye58ALSPUYzH15wkmKKS8u7ZyHDK4qZw5Gn6vJSCeLxdAKzQRHX7LXkzsD",
  "key24": "ZEq1kCymuufx4jDm8jUMMLmgzn2o91ME8oxgsJtVYP41A7XKsorkpKZgwGe3GSrmJ2jXsCG34vFwtv3c6ker8m5",
  "key25": "4fq8Hssp1pgNKnBRTCcs5a8MBeRxjhCVeiEtNjdvH79V3ivUieSRRm129iSH8GJxaGnMiC3wp4Ztmo4wuZJtzDWZ",
  "key26": "668mCNfTcNdRoKgZsvHjTyhfo8TNFgJi6XwfCdWbMNoB5UxwDV7ge3NikW3GtaT41Uek7i6zxZnqWoKMKhvhMQky",
  "key27": "4uvFBMNPjKCkfLbDWv1mGnAdTA8VyR9ybifKJYNdoif8kqYQERKtycmS8NKNGTQC4mJi52f8EcUr5uWe5SwCvvT2",
  "key28": "5As2jCkPWZYtq1Whsg5GCHtGCfUwphunCtvJuKKfJoyiEo8zqva7CFsQCf6wLRcWwHtSQmcLamVsLb9WjgyKRHjm",
  "key29": "4ioPz7mkXmFgkeUdboem7jDqCdU2njDB5TdQeYk9sEmxVeSPvWj7YDjR4UUJgFjMW8TfqFiwGP5AELzb9mGG9XH9",
  "key30": "2sm7KfmXCTf78PVPapV1r8WzX4HomSxPX8Z4wh95n2FjQMMbKfu6JNcsSUoshTh1HVhUAhUGhPffLb3DvWvWHind",
  "key31": "5xymStQQxdLJK9G4s4NNtzCBbMZ1Smabw4zLHEdiD2R2tv14AzjMKg1xExTGcu52eraJtDtDjiWzmLa6uLQ59kyg",
  "key32": "2GJW33MARFPPoeMErAbR1onxUgnb42qvQmFU5W1XjsPtKYA1YCJN2r5gCveJV197p8KJWtSVuRmJjwrK7BkcTQRv",
  "key33": "2YfQp8MUBu2JCcZHqwLNsz1MBqrYwh1q2BsvrcKE5gFYu14YJDqnyFTKN4wge5nDm1YYFCM1hXacS11g7KngQRKW",
  "key34": "5AxvNy4wmaMfp15CFRYvXZy4Th7fWD6puMDUfT25y4cHdVwghusdpMf1zs6ttYHRsakzL6GaSoxVMBh8tYK8bpd4",
  "key35": "RxzBXbdYpvTqXgqo8RbUtjhAiQvCj6xUimhdCJhcPPRV5pk1jYyLiwkrQkoZt5gp3qFqmFVg6Jex7eYRAoGA1q4",
  "key36": "KoL5ZPtHHJCEBbhYjNPK53NkmuxRWZyNM5tZEJKoSnssbfxLrjVPTxhU6sLyYnjf5zdVnaz1PJ3Fz3akWBqs9zf",
  "key37": "4hasuFwNiAHbTiyFvqFJd5WJ2vxjD7sg7ETbHWWiQoap6r4wEDGYsBEG3SygFFm33fpeqy3x2cB9hzHfJj76W3aw",
  "key38": "2u12PP6oTsKVcw8Er4dyC2A7M9zts1RC8XsT32YVD7Dw2eXmZsZzGQFgVtbCXfbf8ggeVhXa8BLTD4ps6Th5SJVy"
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
