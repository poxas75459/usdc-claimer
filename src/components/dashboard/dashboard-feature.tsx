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
    "5eBccnh29Es8gniFYxJHCJPFRWtdHdxD6v2JKJ9qPBiGCC1wvYg8rDbyDk7SpHAYtLnfKxXjYJuHYxgPb2kZp2wF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zztiD8okYQfNq1BqHXGKVUF6EksV9NWV9phKPXNRWZhHpFWaxtdV9EDKcQt1qyZxCtNcxkFLmyxskhouSnFPibf",
  "key1": "zHXHozfFAvo8x3YDTgHSJw6afZPcV9EqT4Y4nm9znVdRTdkLCB8R1jZRvgEBt1CU6GbUvtKQNfAAjs67JEQB7HZ",
  "key2": "4p43pyHupmtNVFBE5VbjsU1qJZkzekNuCAo6upqZeirRGsJY7KxqC2muany2qhms4S9MFZA2fCKWGGKvMKZKGJwE",
  "key3": "2kur6ZYGALcq3Xi98RaUdvmF2GWdBFFXYj6Hqya9HRxX1FtYwGydx572hSoESWbT1DSmw3dyzQQn3ZC7TLn6j5ze",
  "key4": "5Rq6bzPuW3gNb1uhbm1m3RmnbYYkDyf3WuoCD3iXUd8notUkP6uE8JNgeR9cbxLgTK7yN6SDSCAErVphW6S1F1GB",
  "key5": "4XgsbkTdKvtR69GLATmcg1BZ1GqRBM4UyaCYdi8cmArP7jPCKXhFxJqVHgkM7Zf6aNcQoiBuUPNTyKoCxD4CcZhe",
  "key6": "43Xa7aKktH6G27dhmMH7dAQtwxMv1e8CvCLfRmx9QSRFccoyGR2taVUCHHVPinCRS34Hk4FgJEkP65NtWvWekoWQ",
  "key7": "5HhVAZsfut5L8imGiC9vEjCHfFTNkbXqoCCeAVLX8mcoogDafJYwsEUrp4L9KZLRhYBEK7kzN37LTrbb3QHjmiNQ",
  "key8": "2iVehaDSC15KWPXKWXKfaeoQ47n4fPVN8VjbzCaEgUdt8xVeGmDxDTF9S6S68aar5mcAsU5X7xQH2RKhj5pwhHju",
  "key9": "BBeaib8SoNqRuzvCab8CaonanLLJJhE99Fb4SF3zW5PzGjsvE8W83Jev2YG4zPz5TS7vvYBv7FFjBkEZwUj5dSX",
  "key10": "3UNT7wDYYrHUFMEnMoKx6YwoVhAoDzanGGSRTXPZ4d8TrfNnevpEUUh2TbJv2iH35sajyoLQQm2EwuFQfh7hTpME",
  "key11": "4qRwY4nfqPxXEcRGeZokXLg8ngN3pLCbDEqQAMhqey7arJ8HQjP1Yvnr1tjWqJipazUfB8fZb4XsJybfV9cr2qkY",
  "key12": "4LnrsDxfuDBaEDvWYED6j5m1bsfrRnBrGDDDsNZuSprQP9AKi6gEK6LsaS7147KVcpLFWkiTd8Qzi8VUf4AmkHrx",
  "key13": "4sM6URXk1Qcd5sXcZpbJ8PR15ojf83h9qweNNFkf22QE7qfWF56GFH8pvJgtrbaTJTiHE5HfBLWoWD3LWg88s7KC",
  "key14": "448WjDo5CzqFEMw26iF2rNAxKGK9xT4xvyPskQwRaVuLRnNUbCDwPGakjKjp6ocQQkbDhRjWLmaQnetY4XtndHvk",
  "key15": "376D9eYHv1dmnT5zEzBt1Fevz2R3LtX4azTmgcBPaspSMxdFD1jFvNSeCe6PGqtosdfq6o9sgRWkVFX8sjrwuP7J",
  "key16": "2Nb6qmb9KSHgVZBm72fCfmQkxdgSg6VYxHPC9m8bMKQ7vmBghMjU6efBTc1MidGWduuAppojpftWFrghNd4MAtUS",
  "key17": "2uNPM6SNfMnX3SLP65Sz4rRaoT5S2W2remVWJewN8Xxzqqngyosj4MD9hq2kiGphvMzjC58EMJRWDvdLy5ybpePN",
  "key18": "2jruk5Epkc3TX9yPfLuJ8jzGgFYkxh4dWe1rXVgM7oxQ5Jebx1KvQLc21fipn9FFbPYq8ac3xnrLq5KmCoPNpLYF",
  "key19": "27E3zSo1xmvtia5QnK6t3G1Cx4XvbCronSVarqk1n6bPhDxDZhvP6LSSQAUBrDLTU8YbSH7bXJ3w8cipRFppgjyo",
  "key20": "237irq29GA6iFBxoSvrc8nnxxVwWBuKDSSQKRY8H6RxyxihiU87Q5Qv1sLSkUmeMpynmqYd96SqLivhzcxzhwDod",
  "key21": "578kP7tcuPLdY75S4N5pKYBvBq1MdVHH2SUnckv7e5faVLQSQ9AJWGxCc7wwfHDLEBg9wFrEFuFNn4FKTkyh3eaE",
  "key22": "2iFM2URzo3qW3ao9jfp89CDVBA2hWyJvdNvkk3X7EEAb2b3BWZARsCXzcTeNGudiiSwJeh4oLzJjXzYByrcytC66",
  "key23": "52QVo6kLCkqkcDW6cWGZmXFkhmUeDvcPs5xDdCNWmxPLjTBMNTo8a9eNh7zRF6t4vocpwyV1FVz6PBQADr5kGAki",
  "key24": "63zHkdBwCrC3CaWU5bX7NGkiDszQeLCVBTjLejjb74MygnUKXAhRBUcwgLkyzcCtxE5Tkbq4FstUerp2gym2q4L3",
  "key25": "2b6vtpJeqmd17vy73Soc9Hgj3S44KAUjPuA5oYEuTTtNYsMcTvM7gw7tPMYMdpNepyMKtDuHRvJp71K8dFDvveJt",
  "key26": "5MeVhWNcouCHfe5WFLkUrRCkQH5hX8wWzpKd766tFYoizDCKYt3hftLvfZw68jj6Va5iU7buZwSMi7DZF4dqmimg",
  "key27": "4gaY6rtG4LHJnQqRhmDzbUNxFHn3vcn9HYT2qrzvQoKrvyBuAcwm8YKQUAtQNv4EEfA6N2HrNcFWemFZ5DY2i3op",
  "key28": "4W576mqBkPgxyEvY2SAJA6dfmSwPi8KWedfJ77VAzhmZp1XWSxwgfJQyhsPDQHttgT7PodV73DUfMz2ikpb1hMLj",
  "key29": "nj6kLfZgNrvcuyaVxajwY85SMLVHufvmoyGgUWtKE3Qgfn2g1Kc5nRBLEh3P3iZHmNvXedmSLAHP4hoKQUEnksq",
  "key30": "5DWm3mWa13mCcg1oJ7WsKxBQEkJ3z1tabNJZryHLq4Dw8FXbhxmg6StAWR2ZNv2FJ5j2v6bZNTuAJMmuMHHnwZ8C",
  "key31": "6K9TB7zkpzBef3fSsAWGRFjqG4JrnZomwabXzpArwUf5qCamiS8TqnZUJ7ab8idryDXGQW2dJ9r6Zofa4ev812E",
  "key32": "EZk7CMce4ojhqBhTKjLoHFcDe8wn4xYGUBB7dpGJZQBTSUNMzEUKAWds8wDwRpuVU54kwU8GDrvrKBa78RJ5xpU",
  "key33": "2uCSEdVkBDYBT6MXWsZ6uUor1KUMi1dWCR8nWBy6Hex6fzoFoQTzJcfhmGhwBFzuUFbeqccvN1kASjJKBRTrrDMb",
  "key34": "65AfswwnTybvSyuu9j1AWgY7fH2EA91AxMC1WijBZicyUkw6HVmk52wqTvLKN4T8n5FbCyRnK4h5Czr8FD85bxcX",
  "key35": "2CZuZEzBAHCwauAYNrxJd5hWFwDgMoYKTgrrAbEqeMwpTEWVdFKZ5L8xfqajWzpBqiarDY4WA4kGscL2e6Cwubot",
  "key36": "5PTzhvZLvBjv1pf6cXdZMTRzaoipsTLe7jRh4H3Boq1U1bKtnKCepugbaiTFfNtQFsYv1fnKMk1aruAV3iHSeyj1",
  "key37": "3jnoVQrtRgX6dCz89nWb8XEgRLxmKKDSgpNDgaoTjnfKmgW9JaxEhwv6VWrkRF7vDwKFZdJXUvWAfUQkD6MHzRsE",
  "key38": "48sxsXSZZ3DRxusRApcAxAp7idvwn4bmtz6H6WmqCXay3zfvnpaDCoS7Zyor1S3XP7auuyUH14ESdYByFz2rMqRk",
  "key39": "5LHEiq6LgNTgCVTUzXbfszF2wbPMtMd1SMn8mH9k3ohttJ14kaRoeWyd9Y3j4dRzP5whKL6MjbQUxwr4yrgtHW6r",
  "key40": "1vNbFtn35qrSvFBZY7uTDZKPZY8MCe9aviSfPZE2wSx47SLDCBT6rZqn3JMe5zKuNii3mUPGG9M9VJgzBMqwSBq",
  "key41": "4PkMvWdpvwGSnA6nk62wXJKRsrwrxBXHd76KJzc9jKYzaPGjeMUaoCnQ5LDAN92BAwY5t6BPHqvh97txirzxBxVs"
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
