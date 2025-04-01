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
    "KKWH8hpeSwREwQZMSV9Pc2Gbue41bBMmb7PX7zbQmpjebpUA46SUZusUT3NczQSNM1oRXxH77LQrRqZBiFLZdQw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TD8V3M7cghorfi3JtCVrNTqEvtYR82nFwV5s6hQL6fxazWTF4tap14XncbPusJY9TUjTJg6ikYnmayAQigew3zw",
  "key1": "35GebndPuZnN7hrcmNKimo3fR92aeG4BmQEGnwEi9vNLVJUFuLDsxAmJnRdRCXS261PVLdEHF5uWQojfKVGA35ZB",
  "key2": "66PKLFwPk93NwRrFRfiNq2qMMWhgE9YAYjD9UDY31dcqxSh1CxGZJGmJC36qJXBZJHXeunySuNhJPidEKxfew4xp",
  "key3": "4p45d1zUAReBpDPbYP9Tc41t8KsVcmyk1Bq6vqxbkVwV8SdewtTFjXCPNnyDRMz6RpnhEQKqNBiUKkCXiiFkksW5",
  "key4": "4vpCejPRpWS3YnxahtTdEgCsGbkvdwpLAqS8RZ268GpG4rijrDbnqu8j3ReXNz11kT33TcZzS74FJVytDu1vqFmP",
  "key5": "5Ljcxbt1yg5cp1PHezmoK1pvNSHGRpFkHaNrMfTUzHSZ3fwJaFNeAXdVjQA8dvYY5zHKbgWnvbsZmSgNWNdEwvZQ",
  "key6": "4jTX7Ci9ysLfwDc7rqSYLsHUhzFpHnvZYoXy4KFVjxyMBafBWaRWeLZgTW75aMatK1KGscwhDrJVS2F4Q9pjVRSs",
  "key7": "3kurWj9MEtjdwBeaQRDWPUTwCTy8suyt3xhRR874xNaWhyS1Fg6d2NVaf8kgW4h2rVCB5ZdiWoFC8Fb8kxdZVm8T",
  "key8": "5ma9HvbpVzuLA7sbMiibShw4S3HLzp7SJ8Mvy5VXQjLKFboEzR928Qv1ZCNDAy7XggXMh6C93fc22Lay8vkEkgHE",
  "key9": "4m9c4kYKgf7hAVve1vkjto9H44wuANS68esNRukDYeun4X4AmsYmASGjis1KjDg75NYgfMs2cJx3A67soXq3U15A",
  "key10": "BrrzwX9QUToXbBZSAYMw3K5mLv63pgp25pVQMHuhjJSRrq2LCUWfdgcUVLSxmkKM9ucTJAqh6WMLNnWbWSagVJ4",
  "key11": "4KmmJi6teCyv7eJzpNu8TdvtRMuVHTWqMT9QgXMb5ndVPS6BdyHLkkBR6TV5rwzv5HdXQ8wrCVj4r7W79egyRPig",
  "key12": "2aEvJ4tAbpVyamAL9XVvhqtLYHorexgtgNNmjLCEycvnw9jgGz4Hbe1KX5B8KPcESYHMzHFJpuiPb7Wz2wn5K3Yg",
  "key13": "5g4A3L6rPigQwnAu9TfrxY1UD2bHhEVHomrQAN6UvshYcXKHVQE3HTBrT74rEkUSEVvESTQ4U6kGdwMRsbvifHN3",
  "key14": "5FWLTwY9BC4nky2kd4gaTEa2azmzaGJuvEtF7wARWcrfeiCJX6ruzoGtN4gkGdhUD4akzccZeenNknB2dCEiKk23",
  "key15": "51e2wsEzDSKQCQkD8BbPeDXg6rm7Qx8wFnzxCHiKHunvpCkU5QdFGR6dmvv6Cu1wNY4RBVrCMzzLYbNeoaDEcWi5",
  "key16": "3JE5ExYz3tZf3fJ1cAxFwkQuNxctAVrM1JuYFuvhmaXck3eSgatzr7sp3B3iDWKDPR5ReV8mZ4BsH7afHZ3Dt5NS",
  "key17": "5s2RHjFTyqbbj6dwr7WgZGMFFeVg6wN2bJdvhYd8Hmpzs8d5Wjbwnn2iMw2PoFZSApuqUpGYGk7EPYB9cvuh1ugg",
  "key18": "4f6TdR1pXu3c5LXhvGcWVTZg5cxZLfi1Z34U1M8ZPZSSTek6rmhryVdRmhwz2rZUCJvUmzWPqpCjNwKYmPN4beFz",
  "key19": "3kehRw3f7ooUxgCGwMLrWfCB75dGw8pPhGkT3gYfbsdD5ovFNXQFynKziBb2Toa1j63rov5L5wUguPBhHQ8pfego",
  "key20": "2mUdArjz8xJk4E4AFDvWXJcTCXGBjWkkjystUD3jct1jj8d2pCSkGYdg9h2Uq6BxemcYGgpvQskjmaYXkKrhmhic",
  "key21": "4hejyDZLaLpuvKYuGYJCGtPmp4hP5ankaXYYUTPvVjD1CNQLriuDHCN1YJZW88jy1uqrRDDz7CzjzACLpenjodzn",
  "key22": "3ArbBgy3wJgB1JB8NdU9AyPWFxtR6jT6jNc6jXRgvxERQp7g3Vueg7Ps3a2FA9Wzqqbow5sUbLPMTxsbM2e78kuK",
  "key23": "3WxHiiwJUTVGaFVwJRLSRPZGj2BYqgxaL8df2yEtq4faAYafxURpw563gd4D8mwUvcS9xiL4rB9E8997CMLxdJA9",
  "key24": "5hEHbLCVo4NKQ9UTzuTVzgwneeAbzndHqBEWvoLjHZnWQc3K2BPd4hJDcLCPppsqggwLg8LxPVyBspeXw8TSUwJc",
  "key25": "3d3ruhYFs8pEeSE5BSdr6n3c5it4jE72WdSf9FjmbZzeFp5LJfXrobbLhUXoDhnjU4fKHz6LK3YK64JFmEw8Mvs8",
  "key26": "73oxBruZrnnyXmSxQW7J5nWEcB39PxaZDEpkyoQnBwWre2gAAgFp2sttj3mzpJgiwqe7Mw6MWoGDYLxnu7LPiH8",
  "key27": "d3SmfbRr3vdjrejkcw1mxWa9QNMvPDdLv1orhBfNqqkDMaNfsB3jLT2FqrH78sw1M5u6d4x8RbDCroi9bGBozqA",
  "key28": "3boApVhjVEzNPzqdEz9vz4tcsxjhQCWnJzipauKj3Pgz5GYqYgSCZtC7KN7Uqju4pZPndSEpnSG1A9RxVMgJpTS5",
  "key29": "5WQULzsSvvcjmyxJAEWe98cJvs4dmqCABjYDs8hmbH6w3avL36uLkHhtHsJGagv7GJzt8EQWG7y9Ljqw5YJdZent",
  "key30": "5XAMpgNTCcqddNshNLG2GrN5CUAa6XMiPX9rrDHTWmmQL3yjZNd8huTxW4ztcWC57xUA5REJkE4P13fBEyf3y7D5",
  "key31": "3mWGXyQvYSFRrggs9H4Hpfu1ey1SkVVN7VB3P6UzNfs8ujU1fL5EP9hP4DSwuV4JAnzQAiENT6nvefXYY47aATqc",
  "key32": "3RsQyEwio5oox2CnF7ohRZH1Kxi27QKbyam8Yyc1cVgXLwym7QQfqn9LSoZU4UyhD78ps4p5uXAtpMPag59hekGo",
  "key33": "2dC7K4FFnkNGwGCE8oeWqtgNUDn8THEmPoULzLRXL8Esa1Q9FLZmG9pKXuKhT268z95trUo3udAcS6TerhTpAeyp",
  "key34": "5vmWT2873Ww95ASHuvLNy52jsKoLPNnH51urKb5hapk3nPgrSi8RUURtD3CSdb4C62fhWr9GBtCYc75iLsuoRrFZ",
  "key35": "2Vrm8qMoE3qKvxrFQzcksFLfyJTdtGDJ4DTQDivAovB7c2BmAkwYkbJgxp6i5ZDyCLdoUsMidn8XSaERM9NUV9Mt",
  "key36": "4Eg2rjBDDmACGgHfHnq94fgXVsk9m7dfnHjZ6RjpFHdgX2b7MN5U3daugRSfQmd2ijBH1AdFeE7GtMz67Tqym8yw",
  "key37": "Ny4qx3q2HH2j4gW1G8exzkWFk25s7FDvCN5iDW2PKe5vuiyKG1J6HZDcyUf6UK9h6b4TZxuNcrzyTTK2yHpwMkC",
  "key38": "1imEV4zVmnPUbuNNz3EbnDZL6JYE1uePqdjrrMrcNt3HZ4KXmTp571yc87ny6tKoi9bYzZq92iCujqQzNVNkerH"
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
