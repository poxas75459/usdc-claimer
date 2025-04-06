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
    "5QFFq9tkaLNFHaJdC3yTk63ngnFqBYAvLoKNV5KppzikLWeaaxE36JB2jUDa4RnzzrogSAZHY2uR9fNYwBCpvHYn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wG3Vdju9KzmWtde5mkGro9gAGgsWjGESJkvytXtbSYVszSSmSjffmvxEGHREYp18WbWpU2EbLSWtLoBV5eAsMu4",
  "key1": "25B9HBD4rYifNYh1Y7oDTsj41nBkFKx1cKoeTd3wqmgc3atriURyo6xMZmbw9eSHNkjeND3XZAUgw3EPDvU7Y6xy",
  "key2": "3ek8MWnRknuS3tBD6zTC5hzUrqN69HQgiqJGLywFizjcBbVqewoYLhuZrM5pMaefvBU7xmDAKEBm8CAm5ZVKrUNe",
  "key3": "5BnaGjUeKggKf95DSPWL99peu5Zf1M1pQPmae2DuZAQDJsEa1LypFRT7SszK3B5H37uCz7qsorKxg7R4fnTLwaoi",
  "key4": "PPHLmnUQBgC2BP2yQRoTq46dnYX26q9AfoLhEyFxgzbpuBbjZMZCuJT3FigCxXE4dxChAAUMbgekvpnczRW39N1",
  "key5": "5QJLgXxiGLYFjEmtCfgjndeJwdKUhnjLBcoGxu3zbUQ3Vj4oC5m52GuERoymY9HtqYzNyJfrjARjkePo8A9YJKGp",
  "key6": "2VkghGVNQtjdzDeS61yS35LyZRJ8p1R7QEg1m5UVVzyLKtc6kP3zUTvtx5MCuF5ea26C2n47h6CB5GmpPWfsEsx7",
  "key7": "5uR4v5z6t1EFFpCurbfSWKvPC2TDeJbgefN1W4QZ34GJmeWYeEXM9fNdDb1uxhss4CigrwFfQYshMVX8rjBbpE1J",
  "key8": "HuhWyYojExmFyt82ANhytMCe4Nuf53xSM9wQJtTFML2ZHAJo2eMugzQBmQyxj97fEEsrhHx8zqpx7ovrMCrDiR7",
  "key9": "5XnMnkpufBCnBBDvVPRcxkXYa73D2bbT4Nv7nL7NAAk8ezxaHq6uUj16DBipZddJf8PUhLvsi4BThXCxxec3AVQk",
  "key10": "4ak1ZLUwgdAvxhAPWiicVuD5Jm7nksXc7QoaA9N8wZ1nW9hH7eYyHoRtNLRGA1CVbhRn5MdWHWVPZ2wzCtgayYZ1",
  "key11": "2SQnqCs8tvq2ZgQzLAiLZ18u4EfyhZYgXkwYXvvJ56WBLssWvjo9HGSVoQv56FcZXEMG71f2TZ65kcv4dR11UBQ6",
  "key12": "5Azqq7PU4sPMreZKjgE9nfqvxqFUgB8JVq8s9teDWojpfcy2sLPeSTBEibBF3Ygnu7ogfXueBpf6ksae5JEXtynK",
  "key13": "59RbaavvccZ7MyhuNTwkcrhLWmUFGjQrnnrGTya36RfREQQ4Dn7qpR6G6x7Xy2hgNzewN8yPNHUpSxgieXXWAP7U",
  "key14": "5aZMugh3jmSTmVxVXcVVjxmQZgqK3w6DCgbVwN16axgQ6sxbF5He46tHZpurVPPrTsKhKB27RXkbv5qZScggqscy",
  "key15": "vSVDGzfbheB9Tap14rwdu9UZS9EzqVAvmUj9AetnoBoKu8FTTNtYvFDmcyrvkWSdnDfVM1tRG6FmruvXEv6A8m8",
  "key16": "3377yJ41jHmHZMiLE8tgYiBKgrjuKSF9WXKoE4NXc5cphnnPJyp8uLNbZ8QcE1yMhFuEqkCqSR21FwxwC3Yv5sTC",
  "key17": "2ggCE1QpsKnrT33xUbjrdieDczvhVbedMHvPTHqiG5x75YA3SNELzZXhoiE7jRYvwHdw3Ri8ekY3JUCZFQC5oEgV",
  "key18": "Wg9qB1XV2Y9KX5eRC5VU75y1ab1kCfWMdCn8tDYSr6AcW7nX4fXY7EqmPBkPhBJSFUmhejH6dUsq3ZGSWLCH9p5",
  "key19": "5BpbDJPNMpmKLJxAnxkuEBgoHuaeUDM2bWcw28aKrQssJLHwEHucpyAEdP4ja1D49Gd9HeBEbbrNVX8nc6hVs6Nu",
  "key20": "57st5iP2Dv5qsmcxRJWeyo4FYRQHLskpKxcHFhK1QXBWe9qPmoH98k6JJVJgxAZTJg5Hfn2vWubULNxzJes1xikp",
  "key21": "4oUx1VUMhGz6DDGgGpeoxHroJmFUFRiYAkEtuLjquhVsjuSkSsdqNX6mjSZrMgqUqgYdrqm9kVBESkY7rigwQ7Tz",
  "key22": "5XzqfufDi8wgz9TTS5yBQ261j3RPExfz1NgHUdNhAEJDH7rdWb3Np4YADAEPBRxMLecUVgoZJd4SgcBH1ksUPU6S",
  "key23": "3xuBoU3CzMzUHyAnte8vUXU6dTijaYMchXRvVxnVEXGZLNEBoryFXkh25HkPPMVX8JxEMjYp2CweALbXJiLnVYoU",
  "key24": "2mwd65NRxMi6PKtuhMMcn8nWEAVvCZPQuMrvpZPVgRzcb98BmGBNWzkdBNF6kLKDC1BGUHfDYNgqEqVK8BNPJGcM",
  "key25": "4NUtuWAG7xoUk733Zc5Ty8dvUizinqVpHK8JkWYaQUNS85ob8wxJ43X9KYdXnRUeDQh5BXR794vcn5sCENHGRqm1",
  "key26": "2cmGqcmBXDwi5G3p9guFpfEFWPDgj1gahQjLHWYJTo7gRD9g28jsw8zHMUYW1z1M2xCQ3VMdbLQcnZbYXU2V2cKf",
  "key27": "4kkHqnkVhpDXMRMRnooohYHZy3ooWDEdsHNAjJCiSXsj4hiRN46MueQPEiSs8Z1LmyTrTAeGh95GBwXvq5bFGnS6",
  "key28": "5NxEndsJT5gKBqRSNEWspaVC2hiJAFyV5MzPuvxJqUso6TKwe4jfvXT5Coqd7F7W6ojQxU8puuu26t89K3H4cEuy",
  "key29": "qEVuaEknHeyPVdSDyMNSVk23t5EGugzY8SWt6Bm8Ri4qkc8P8boUV8BABUKUocD5gJA39nwKbtLd2SfV4Wj3LgP",
  "key30": "3k45HEnYzqNaAAoZt93VLBacd4L1CEgkL7rcfAR6nKwfw88kFN3mM9uFKHdKg6Rv33JnMKY9DT8tdo465zxBBUa5",
  "key31": "5ujhVTe8WkMfjcV1LREUsatj6Ry8BBwNDox7HmC7feXTnd1WZ8L4oo6Z3NUv569bpbFttgEZSsKZHixbFkL366jh",
  "key32": "2nfEuNbVH3XjEPNcgA8Pazay6AqUWFPM8Gpg3fjLDJ7ZEouzJbZqAGhgJs6esiHABcjZz9tNJHVNRucCyDA6QgLf",
  "key33": "5DhUp7m5zHsUyCiH9GRZ64gTR79qYveNYJxZJBgX3qLQj1ofezskKyPfDYcSucfNF9CMeML8KxcQf2DJ3uZnLvJm",
  "key34": "4H7TJZvR6cG96ywjvBH9AfmNwXFEo9mNT9en8iyZyrhsjWzB6HrzVijLG5dyNqBMXaaWza5TcHis2RhBjtUJBoXu"
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
