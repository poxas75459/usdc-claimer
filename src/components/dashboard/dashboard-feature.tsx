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
    "VguB1mpMh4JrmNUaNV1iYPmbUTMbquD6tLy9t9rth1qC5EzvKooaVCJfHr19kUEXo28N2mcBbwxJCxByZ59JeQ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z6xLqKLGqgesQTS39cqqBYzoLCakhJXeaQvypn1qUBNQKjcmCNZtR2P1S3vLSf2bieyGm7kDKiABkAtBhvBrxtX",
  "key1": "2vfUXrG499E8fyybgKKycgRoDu4Z2cdhdgGZEmZw4ZDCPP8DnWyAQqFqC6qnapwyb89rsyTM4d9URConuJKu6o5G",
  "key2": "4C9fHZhrgw1nrJVZmENdhH3yuRhVA9Ayb8PMWByaDUX317SKGRHu7RF5K6apURc977pwSbbNEcMZRmZXrBEMKGR3",
  "key3": "5suyyy3q1BPFEo626PJzLqaP7rc34sypHayKRmBy8sxqcWt8w5ywpKpGVMNHst6fSkGFksv78Z2QmYJJ9aTssCD5",
  "key4": "5Y4CBVKVX5MS3ZEXoUZus4SYS498PZSRfq7p3EVQoAb67gZyei3dDiFAnCiVFUy49pgRwxYN1AJv9LCRCXX9HhwT",
  "key5": "5VjrRziAgFswwrAbnJKaWEqytH8srbbzuB3xtYXYYt4M88qZrG7qd6v3cfU7XjLvNPZUU6BVzvdgoQ9pccKeWmxG",
  "key6": "55rJxRJvPsXigPiMPwjH1RTgQwRCMRr4VCMTwayqjWnPPdjFwJFy14au25oUwDYQLjy1NmYmqLqd1GYgJJpSTM23",
  "key7": "Y2GFxgaxcR36Ljh6aXgWBMa7diV3oWA9yDVqgA6DjGmsSRWfuKPeatnhfuwHCZNiMF1usSuAqq34TDaM4aovXpe",
  "key8": "5xmVkbQ6goFEXXteh62qnNQjN1iJHarWDN8VyNE8tHtKtWMPHSdbuzWs3UAaUstHkuKjB6g9FqzVbeNxfJyQ6A4Z",
  "key9": "2zvPKbx8gP8N79z79Rk5LJ1LzYXZYYLnxf4fLB37Utgb594nkqQAkXEr5DrHfirmitVYAtYzg7dATJ649wq4G8GL",
  "key10": "5jJ2qZoGVFThS2zUoi3i5HFL98h5ZYzWwVqdwXS4c9Kgww4BT3HFCarUSPRCdoNS2o5jXPkXCtSLeWQLZ2LBfa5h",
  "key11": "5xGevqVtao4fn7EbEpPkeo1v5wnkQ8JgTFQVqfTBLqNusiH2xy8A64s1aQ3F82X9JEv6BQNarVSHM6xvfmcfaoCy",
  "key12": "23RqcoTtkg7nGZ5RvVfswfe6LuiVVNo7EhTEDcy44m1RxBoGr1UKxQQfE9jabM37fYPYvLv4S8gf3w4AbbaqUPNi",
  "key13": "3t7EEqUxCYGnD8tkqXwcNWgjgXcs1XULLdzUfTTpMbSyGBQ59ioESvLKB6Ap2BhiP5afqzXbnbSEDY9ed1EvUBmL",
  "key14": "4EjsRiim4db667zx23PfmVyN9tgsFXjqK744taussCPquTDqV2N49TybSEQrrwkVty6JByJLMM1SPGDj81xTVajW",
  "key15": "4RsDg9yUmGtZxaiGTcDWxYsoLgM4cLdDPrrTV7n612c7uNtYoNKKyYYjgxwxJRr44oVgN1AKvkZ2GeFdV4VN2F5q",
  "key16": "4v5eMGzLiyY9LKhjcWTNEHDR2GQrrEvMcvK9s9rCuJtjsRoUissuGnoYqc1z8i2ZkqfBcoHX7ACbNPk5yJQVL425",
  "key17": "3c8FNhNTimz1xHS9vL9vH7m9VU2m9ayWoz23oJnXZ8ta6KGjdyPWdLe6CyYAdgMsEzF2TBPur3WDDxQCT3Rp2vQm",
  "key18": "ByPauBEbS979xzkqkBw6K591mDKun4K8753cUAthvd446Uo1uDWWWWMkUXsPJF7mN2zUe1E39iuFYVrdYnXtXe2",
  "key19": "4FCd9x3ZjNJwczzp81Za6vJCKYML1bPCBYn4w9XVL6aJjaczNpWCufKw6Gp9nbi8hZd26ehp1kacpZg8Hx6YDAHX",
  "key20": "5fbm1nEqCnzAztgfHcJe2nJWgaf3EMY1DZSJ9Ed59nAEyev3n2gRLdN2smG6WEF7zhziZZaZ2Njr7atCUqmDqnog",
  "key21": "4mwTFgjSfLsYfeNZ77EnM8hTFTEn6h5qAsSPWZ6gdp1atnNHEtxUUAvMLGPvz79ndDAERGdWNGKR57jpQANLLJKu",
  "key22": "2zyLjENnjmWhvamhJgUtYHp5wADdEER9scbYXUFNfZsSmw4cuXUY87exX2eFcuCN7Fj1Zq4xqMq1GayJLbppLdMB",
  "key23": "3qTLevCE7aVfJAqZh4nmubAYAZPe8pVtb8YmktH7MBUQ1Frn8i2fejE23J76atQUuMxj1K9hhQJXdRTtCnnksgdi",
  "key24": "3zF3ePCAyeKNfNT5NggZ7JR716UaDELKpZmPMWAonQBhDVUJdaSp5Pf7PyRKXtw9gpE6G6iYtweiZdcPWXMAvMk1",
  "key25": "61bHbhzbSL5udSpe5PqegrMkDg13xrsMdVYvuXA8rEsvNwhfLVBd1RjnCTneTcmWdPVUv26m2MGwCD1e1dN13h4J",
  "key26": "5YgskiDLPFEf1GmmAdM5eSe4zMrkCbFmshtLwEUqxWDJm9Q8CLjoztUGgJPmhKKJHN18ar33Ayhk8r91wXhWVxw8",
  "key27": "5JtgfUgsTfzPqfV4mpRgJCG6LLFUhz4Kzin8vxvwqf38Gbfju6yNUfrWxfTqjoc3gu5xSoRiTChSuFmLAr3hDwo6",
  "key28": "39BHh629MW8BPktL3qtPZ6jHYAPAvUcQqUAxYCEvWHuHoYB5SST15WFFWEf1E3fCSyk22GG1uxTDgUtzQmSPjemm",
  "key29": "4FugWRKgiwPkzvytV2q5vATTxL1FL87zw3xieic7NTiBJ7q6jnNnWvdCNrPqXqjDCyWxwUd41Up18eM1XMvJo9Kf",
  "key30": "4jmvkdiwByoC4a4gRCg9q62fiCEhm9AmUbqdVWqyHH9Ln7kPQp32kJY6jTFqWETNTJpLC6mznorhcLRMgkh6tEB6",
  "key31": "2DbFmQ8npqQ6QWuTVGAkktUMjN17aDYFQrpWjqi1sxU9Zok5ta4NquLTo6z5fHqb3mqfYKzjqJdzNGeURcky9ENC",
  "key32": "2PQ9A9GsyHgqyf1VipH7rnZrsDz3WUCc4hCKbzJGAuvSTcw2N5wFbw45NsHsu5WGLUBX5xXGvFVsZjRhvDoBHZoa",
  "key33": "5A5UGHk6ZpS3hptedB3GTcRSkayBcKhGbCmcNBUmEuJMXqj4kE6uMZVN2qiqG6zVz9rwTegS1UGHpCaX9VLVWqMM"
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
