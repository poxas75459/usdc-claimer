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
    "TEXizoewjaK3ke6ZhYQTim6f6U24Kc3zRjqZEtjrknmtVSQcUtxUBoZhquFJuBE8GpTeBrsSRCDtikhnu16bgcZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55s2gzgbfb8MgCNkoGN4WNrD9Y2f4VSwcxuFeSEuMFT7QWGyqDLdHnrqnsAY6BhgyjECytbLECS8TidxunHhcccN",
  "key1": "G51Y6NFzBsXSKno8HGp7nmvAxeCD26ZShVWa6rjn7kw6yqq45CNvzevE3GJia8kB1y1Lzt8n3ZCUpjgcKH5twzf",
  "key2": "2my39b1MNKmq6iyjSwWFKu9arMc5TVB7eTxJFKzkKvV8X7gi7DJ9tbwgGrmRWibwsaFNkQyniWEGgGBwdhy68cUS",
  "key3": "5tQkzSPkZKFLYL3zz5hH7x3aEhqABDAKY3Z7L4wMozejynGjskmNw3EKwCRkSRxXjNRuWQgibEVE8LSqsTu7t4Hj",
  "key4": "261hWencaZ9P83dhioAwDHgQtCoYBjdZkadDsvN2PMFZoFJszrzMd7r9HX6VZoNPBesJGdCFGyeZJgkQfJ5F35SB",
  "key5": "2cGtufvx5gQwReZm7HwL7BKsT8B5oxm9Zx7h1qjuY7NxJqZTGjZWSHfpu1xCXmqyUCuBoKbrpXqYSSi346kWCX2v",
  "key6": "35UD3SaPgcczboqa8QSjQFPzQodWxvqQXHWBVyZ13qRKUo1nZsnZocRju4AYq8wh6EtdeE6aUgrYiTZoDbNkJx3W",
  "key7": "jxDiw9yEsQ3byMK951DSL3KJzFS7cc2upBD68ABUYnHoiKKtAVbbXDt9P7Pou677u68kb8R2Xd1mb8SvkUs3Kja",
  "key8": "3xVt1aRETJNSUfju8HDJNwBxxTNKPa9KSZ9xDsgERwixtvS84EmH6AjsGCkMH1u6Cgc3aqFdsWvfxGV9UUkR8qSq",
  "key9": "5oLTJADScyAg4zaQ3Bq15f9RsvMZzMkvZzo2t81XcGYrNjfVvrGSY7GumqtA5y9KXi4FXupsbGtwuF4ZEpMbxBD5",
  "key10": "51x61eJrjTWiZQEDe4cYXnUEWmra9XMjXVdBbP8Es16pVNtz1r37fptsRD7Uo1aAuo4SFKTr1YgjB5n1ujA9iHDa",
  "key11": "iR4uvhRnjsDVFUeyNNo1Sj2HjLjhzsZYMHAws23aQRkAu1q3yoaqDMzsXvh61eb23ZkSu7ETwBYSuiCUhVBwp4A",
  "key12": "2hV2RCLsGMuABaoiRz4NMgd53FdcCk62hJK9tvTmqphfbV9Cxgn78Jp982Cngkz72zd7d7BpjKm2KaP3Y5QGNSNz",
  "key13": "5fqF5q2VX386a47v6txseUFUxPJH1UEE1pA8H83fVwtoXdShfoELukbvJte9kgnrmhd2GiZm6ksQFYN1ALvJ8oK8",
  "key14": "3pB8hFymydcSD3paBX5oQF8q8rtAj4ApxxmK3SrrxZC4LiW4PG9QBKZ1BUEkqp1cxXxqgfYw6tSSEvej6rJgVubG",
  "key15": "2wMagBEb69aQ1mf9zUgX47UkDxvFqkdVbueKeZejPvXARGfs6HMDKci74cuy8s5yZhak21cC98phFYBWXJvyYJsD",
  "key16": "4i1roAVpsS8EJPBEbRUjG8XEB546b8s5fpeSm2deFxLLDErY5yKGKzdVDgVYY4b5kvwEbVhdtbet2y91YjCfLfnt",
  "key17": "577AnvrK4rGdPAbGH3aU3DXtNZ4sMRpuCYL8Y6hixx5xRhM8xWQXLkspsJoBP8hW3vqop5B2dLdLoFJxKwhmn23s",
  "key18": "eNmbbcYqQctFmsJyMESEknsuc7eGdVumj74w8B8vusoFsZjm1DJ79g2ifvBLxQMxpoJpKChTcjFDEbWA2M3tnJX",
  "key19": "29V3KVSreqxJJ9UqWNAMJgBvSafvjHdHPhMscsUR29jKT79BNGWCPf6i4Y89H5kuWQoSekURFJHm6rZegeK8P3Yb",
  "key20": "3x5hqSR6yYGvArLGNvWtAi25i3jVfWdG8rFr5T5NC53qYAktGmabqdy3zWSNgMKe82Z6p1qJ4t66rjaC1jUUMc6v",
  "key21": "4s7T2QwTVSsX7LPPAP7SuyttXkdsyFhMWfqDWCF6a1AihF5BeoEYW8fDf8SaZKj628etPkKU6XNr6Q3WTe8HHHXQ",
  "key22": "5WVrhzhewxnJaFZhfmv5KHjE5s1yZXppMecVx6j4YuCcj4ppPWX1YRGNpG1R6Jdq8aYwNJHKDAR4enFNV3c5BQGE",
  "key23": "Xvq9k5CpVgz6mX1fJyyoSJ8ZwZfNSQUtQqczyWbAf6HAW7rfRWhgd5aqMAcFi6Pjhr3kf4Xtz8NJqgJ57eWHRY4",
  "key24": "3qR1kDEWwMLWCZvX51yCUAaoDsMqxBBws46Lsa5poqpH6ky17VHD4FfDgNdkpcoPnCzq9fFP8xAKzNhpAPS6AKL1",
  "key25": "T9ApLcxEtpDFSxG6UjZrPDCCzefDZaA6mQaG62zYEYqfJ77rrMDWyWAkuDYX7Wyjma82GLiojP41wCBDCvryNtL",
  "key26": "2ibpbCjELpp1HQyyDRBpjEkS8WSmTTwT2WsajzsdtdubHB7pnMGch4mC3R8X7QkuTjuTmBtwBMwh7SRJsdyZ6zU5",
  "key27": "32AwQmEg1526rDPG1tFMnPuNhTYkbL3cuhensB76zNX9UYP4vjBKqTKtqY4gJv1AR9e7vuVX1qF9VQKZuhUagboX",
  "key28": "4mzmDX5MhhFoJ9eebFDu68K487nrZJSBWma9TndGifdKRYZkZTQeVu1VGVS1j5qDDXq59XUYjYp837XpaYuh3jUs",
  "key29": "5ZdWSGRTPSyxYKr3JQAHQLGjXAfXFAZSc7jECnHtTxvVeh8Y7MVQemEsTtrhVZKYzjmn1kXurfeFR4k7swYvuo7Z",
  "key30": "22SXQNxdQZJuDzTx9WHqtSfmw5s23Bi3DvMZU1Cyi69614cGZU2bZfdzhRLABnSdp8oppnGyhVqeQ5oZwMwsSLoX",
  "key31": "hsbchxAcq9zTJiPNcwfgKVvditfmE9nL3tDoJPxLUiAnwB6HpXTnaCxEZfKTYUeFYRB7CSPg2mKEXxKvL6DPTQE",
  "key32": "NMaHXGmTXC3umxdHqRmCbuqRtt6WAG5Hs9CvrG4VofB9SP5FpJdHjVSpdkGkdN7MWC5NBsoWzoPuafpFd192GP1",
  "key33": "5KoVs4Ff7Xv38xkGhdXmrGmbYhP4Y4EeW5cSJiPfEVNbzDfLWFYfXHrpRmvhcDa1LzPNepQeb9iuqLxXPNDApgMe",
  "key34": "4wijRS4YTMfRAMHrK94wv9jDbHdj5oMHwjPu68QJpkCsXgC98o3RckgEZ5zacSh6U6o4h7zuiDpPTJnepRD8DbhC",
  "key35": "42E8mibp8TFpxcUpsA89np7aqm2Rw3i7NvaZ4ZiiVtPrSyXo8ThEeHX7RxXcwAKuYE9e7f9oP4DwCUUQGGxC9kbT",
  "key36": "bXpz6sNzjc73D3gtXig8UeWr6ULp4yqFmtT6H6QT7nmr5uoG4K9zwGf9oHfY3R4TnkiaAEcGtenoZY4fuXzYc6G",
  "key37": "46ojEFAHm2PU8cqEGWAN2qz8f5fH9BfW3br7tTELVLMwQznFe94DF1pacnNJ1DSPsdtfs6SuqE7KWXkGQqRfjiU3",
  "key38": "4gHSRyVpNwmVG7x2qjoygcy5NyUG8zgGHD2Q6Hhb3LWLJbnjxgCHg7mds54FviLksfoP2D77Ro364wi1daLJauE2",
  "key39": "37rtdgyRCqdpfC4FB3KVaMUnSwfNUnChjoxCfjGWaaQJxbQePE5sNZXqSFTbh6fHP1TCbbpWgkd3K44eGViJfJ5p",
  "key40": "2LQytTFdpJyXDNVdLvB1J4753EZnXv8xt5C6mMWzor59ZtDVrFBwR14Ktrbwbit4pDHUDzKsJx4FdaxYigQwZVEL",
  "key41": "3zMcgvHXf3rdjdY1DTid3aGP4sTACWyPExvRC69Dk6s66WHtrN87NdkqCA5YZKArV8tmanxpVxdVA9uZ6YsbUQWk",
  "key42": "5YCGvfZgioh2oqaAc4bNPixwL1sd8bkoKfJJyJWkEsdGDBDSbvKCgwQbDpeKyfzeequuM6gRdzdLkxNDrpJz676Y"
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
