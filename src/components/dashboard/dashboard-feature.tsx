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
    "g66g7KKizSWkFwSAAHH1ZrxjfuH4B9TsN6cXyQ8MrzXsFbh2VyWCRD1Hm2AQ1Ttvx2sqqEoWnSHegHCNKj2S7b5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mS9PC65idKKhGQnatEcfuq6hjJsapa2hDEAisXeHJkbaBSpNhLgrXuF7GLcEm2opyWtC7BdSmc6YWSUGP7S9PB5",
  "key1": "51oqbEeRNwni2KFTrAfgqPdqb3pRQcozrk3F9WiSh9qw9ZUvzbwyEzp4YzJuFsm6FUzAKfXLEVK597DFV47nvRx6",
  "key2": "5hkVtyTAUrbnDkqqqDftgRE4fwjsmfb3t1CAReqEGA62rp9Qo8hC68q9fFRWUHzbY9iHz8WbZoVRgitrszqEodZT",
  "key3": "o6nJ6K8JehLUxCK68FenyTuvbaKsMp4CiHgZbJ7DgF5iYBihbPx3X7ZqdSdnp4b3bRTLaV39VAZ5MkY7FbG2eN5",
  "key4": "2yuS3JAYCWJeJe12amL3AMEUCC76vxxEby9VwTfgFewWP1Nqw1hSrvfe5HxS6kDLUjYSUtDDfv4kcSR6UKUgfPEH",
  "key5": "2v9dJcCSD4ADcML3bNhEWkPJnqFkKXkeXsyDBsjWCdPSp5C8PMbuFL9fkjMJjQB85fXYWnSFhBFRiRi2W4DrJG6u",
  "key6": "2jtdJvMo4xP13VLDMYGfLt821HNbreswww55NA9UE2ZrmZipfYSZDbqufr2cisTk1m7FfKUXocJY5CSgJGmg3mwx",
  "key7": "R9oLDATs4rWtnPHBGfbhXXDkYci9FkpNZp17hRoohZNeSvy3HhD2VEv6H3UDSxAn9N1kBngp2JhBr2DagfUsTUv",
  "key8": "2B7fbNCgVafJNiHvfsosfDSAESqK7FDFHCommxMCQ5D5Eesq1EywNLvsa1U8H8YhU24wHQWiLcfD512hvKj4ZEcz",
  "key9": "3Afg3db8DwHwXYih5yYDNqzXwbvnUBMoEcbHHanjQKWxVXSLKVrpfk3TDeCE9N9eCuwxN6vhgex5XtWL9ozUzp98",
  "key10": "3T7KgKFLuVYWtBUtbWCXnGxsWRwQZHiPiWhpnYvfo3Pj3gZBnGj2Xrg7Nfw1CQT2nVUwNmwZubiAcGHsFLZC7Ldi",
  "key11": "yCMZ5HbFJdRVfocmhGMb6wgZ9hiZafwxe2uEnQut1x8sx4qt9XEJTiTAWArqSUrGzbgWXMYKvk1cNCmdcopR2AT",
  "key12": "3MPvG81PeDP4sndV7rxPXoBYK171YtfdR8fUVzqJ8y9crBW9SG8on4g8rJ99yX2niLAcxes2QpYR26TFHYp5Tn54",
  "key13": "2nZ9c9Jbfwwnv7oP2DW6VRsdFDc5qXMkZimGBKoZEwmwtT4oXCsf37Kt5NjDV7aARkiJtQ4UZsX24xZBy6moNdWR",
  "key14": "2H7KAM8Yj36nbYe2vUoLAzf4qRFA6hckmMDhjhHrvv1yzq1SEQfxf41shGPS63XGDPCS4NcEhJvVzK3EJVP2DPY9",
  "key15": "28VoaJjszhgRvpqYU91sQNHmoYjq1ZA1rEq3ev4egwNxTbjhQLtQkUuZHitToSEwc9ffLdFcYGuYPDgZY1N15obq",
  "key16": "4yNxw57M1wS3pD4ndh95RgZiP4G7qRYpYKsrML3ZUsAGxtbGh6XmVRvdKeAfuPqCG22iFE6g9vc4W4aseBedQ5zn",
  "key17": "2z71ZyMMmEGaL9ZfhPb6JZP6hxPtag2XAE5c48wEXN4MYa12c5N2Vwr5iuDbNA5vA1EnBG7yKr8pgozAPst8Mc9f",
  "key18": "5MvE3jLGmhPeS2EshuR4UJMpQVRRwn9hYv36iYs4xYiFkGqQmqFXWS3hpTini8N5mfazgLh4NKV3vkKk7fjSu8Cm",
  "key19": "4q5wFsVWZmX4Ye3WcnadGN5JihhmYbJ7nM4Ga2jXd1sdETT7VXZPkzEWAkZepsxfkUjZtYqfQgJfDpamqesFveu",
  "key20": "2CpxkEeYsxUrPspSJWKS9f9zTWuvZauRdQrgEnLxd5PZ9bRgE4cLLeoc1TtuBSPr1sAFGABNPCpfNhj9nf3jfajg",
  "key21": "3Jat8uSJpbYWUFiwsZuneaKhF3R2wUpL57eoMWtYbi4zvSeHsAdYEgezJcCzkB87fNJva5k3jPdZuz7ZKBWMmRgj",
  "key22": "PbgnvRt1iNyJ2vZXezoHmYgW78Tuoe4E4PvhHd2hBjiLa6FsYhFRrCawPmwhNCoPK6YtDFcxmWFKNo77cfjrCqV",
  "key23": "2w2LEdoL9XXLjA7epmV7d2L4XFZFDh2WgvkLg8ovVMfTFCzYFTP4Y4sLkRsmhAX6sCeZFFaai8njYD1nmEDP2VGe",
  "key24": "5oHgUuo5yN9V8keL4NnxHoETk1QPXcfmFxzGaEHotnJYHYL7vbkDofLgvywsRjvavWnUyhukiwdAHnQ1FJ3nG6Hi",
  "key25": "2dW2PQ2FvDZmykDueeFy8zTr3aUTRDLecj2iRy3wQm3Gi5vBjjgVa7wMFqmGqATdSPfJWhc7DBeyecsYMkCzXtJg",
  "key26": "2JBvxqoPysYBsh4UEbxnS2vPBuVAeUQWTV4dWgV1Xibk7T9tTFyEfFnQbzPcCyss1AWq1vbdZzEnP9XsFm1PF6yd",
  "key27": "4EFhzdyNtKPf9XrExb1N8fDX4NWmgDSxwijsC9QN8zpUKaWsYabfUBSYrcW1Wg7WK1kx4bfzuXasNWxpop6TQRjR",
  "key28": "5BGTjQWqUn9JnDcKZsPVXFHNxxFReYkuhaL3KCHVMd39D894UMy6bn14t3n14UoNq2rD9JqboqfMzhiNeMpewZ4Z",
  "key29": "3ujTFSoLgjUVCLDRoAbLrxqRJ7dLcTidbR6uyah3WbENrb4UrVfbmYZxJLruW85CzrxibtvJtnLSoyxSQSqTkDKM",
  "key30": "Z91P8aUdj2tWxN3vpWkXBdAd3bA1q6uXhfahGEQguUZEpgCsRQjbPpeMVnKi4PQUan7Ukhs3US19xkuRsPidN7U",
  "key31": "2JTwAk5a6FruJk52FxdmeSB4wvVnyL9FoNDfh1c6EkF91wcfQ81R1445ZYnyCh5uwNyeh3PGkD3aq8FS4UxjpKF2",
  "key32": "5cZJ1pTX35N2nj5NVo51yULqoyFzVYpYDdWsPAFaxTX4FPwdbJgYfzsYmYFvPd8i7wMjTvXeARXPuvN1ziTcCGFg",
  "key33": "2Vx557RmiriULHjToWpJnEKz5Fo1asqnrT9AGtPtQsNYkYRh6E9FZrmA4fbMs4PqAs89CpTP4GcZuUscPFAzbSkR",
  "key34": "4aNkwLzQLKdBfekL6Bp2NKjNz1aqUjUzUYBGaqtXxPrN5rwsFY8QycPvueKjc3M1LjbQ2fd2ZcFb6pRK9m1Zg5gc",
  "key35": "2Kdcxew4fGvw7pCigm6mtqvAp8ouSuMProwiGTRkFJwyVCaS6MBBERYPErwAFvuDWZU3gXuQfDu5HcQGPCQfGsj1",
  "key36": "2yy5YR6UCEZJ4Cx6oRYxVSm9BregAB8WNDfS5j25SNaPnqF4Nq35Qbf1bCqVQxHWBWhVzBbUr1EkMqRt3D9pbYkB",
  "key37": "2AV8JBQVXy4SHMULT4Ep9ERb9piZzt5w8gkjpeKzAzft6dPGaKABHTzpGn7DJYYqxigA6FqHhfXsELkbjXe49kLA",
  "key38": "2ZFafNQFVP2K5KRnunP1epAqnsSiMYudf1wNofMNoP7pmHPMYgciq78KffrhpLq3cMv9ciXTq5WNp6rF7mU9eJgm",
  "key39": "5GQiwDJc1sKuKjBKaf5HH4gZWz5BvByUb6fYTzU1j4rXi9osKigPnXJmr2RA5RMhTLXYbqzFfDCBuae7yAcigccy",
  "key40": "pPFus8uuq5KdMg4FuAHM8xNdfcHKAMD7JaAXhYBxRMMWswPBufkcbepVFijJytbJjKi87cTv5d5UUagmpShVRfG"
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
