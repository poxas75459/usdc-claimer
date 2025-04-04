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
    "EFG954yS2sSzsUNwuhi3tFTGv4Buaomi5CvZtKxUchwipxp4z62Fc8fH8gNeHsSSdDHhYkBeGZS4WsVuFCKMJKP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PuUzUfD2u669TXaMyDY6JeWcaRs6kdXt55i9tNpviBR8FRKpFCdRFh25rgHXDqwj6gT9KnJsu7V9A5Hazs3boL",
  "key1": "J9w6MAWwBSHfCXnN9WmfDsmVoooJHtgfQ3Uoie41jeBGkRJG21iWfeYo1yLAPPEjUmZmDkLALzRUnCoRXqpMbhd",
  "key2": "2wbJHBw6jSKwKX7vwVnVQHhBkDiiiLQZVFwbevRj9oAeK5PDp1HcK62xtqtkdNvx8K8ugpgn2DBL82MEk4Ev9ykH",
  "key3": "2nRfjztV18r37iqNEKXmUoEiUz11A75AUbzyXoknGFDyMDaj7a8ECy9R5i9WpBjRSzwNHNavk5hLTsxV9xw2ascV",
  "key4": "63F6UCX58eTvQrzm8Wxer74WBHiPSPo8CRwX1YuWdzP8SNwu73fkMkJ5Wtxp5yCofAPavf2p5mFBAsgGHSDeedmq",
  "key5": "2VoSfVCg14zbGns8ComFhPZ51GSjhxzsX8Nk3NQmSCtkFMNzG2KksQuiuEA1WoVZcEDripsdm8F87ndLrruZ8ynG",
  "key6": "3MCq5RKop9z1aanNDhLC34UVppzdFrSCqJkY6VnUFgS9LLZGbrqqwfue3rgsEKZksqdF4hZCudgpQaAEzXn9hepH",
  "key7": "3P3tTjbiJE5CKMXFuBiLRgVwxqPetVTBPJm66c5R5Pmx4bbBjutvrJySYiUwzztYB16By9SqUFivCjYDuNyCU6wJ",
  "key8": "2C5DWxpFWiSQiKVQFpmV6q9mCUvBJcqpvzzyLqvhf4UZAHU4NjK7ax3gK5VC3CjcozfZvNgH9rdRkzbb8e4hFhn8",
  "key9": "2Ayq6mc8mzxtS9B5QwBwFyXJDUc73MZ1c715bR3VMmnKSnXAz5L4b8ofecggKdM72vnABqaPKAy9D4kv67WzKwnE",
  "key10": "2vZRi5jmCfAMTwtNYLF3ShyLevV1FvmNi2RT24HVdKvKUDWtPJTaaGdXL1eSX1jRVRgXQPd3dgJNkKyViuVvSeNj",
  "key11": "3e6y9FRiwNJp8GC92vU38Nwc6CQF6dpAuf7w3S2bRWSeEVXtSsq71UEX2kPenEWa3QpgpRu4FoHgHJoshtpNwDCd",
  "key12": "5k8uoiFahQ65RKgMMXiXtCKGdrrNwk6Vyxk6E9AxY2deschVYqNL8RDZtiRWU9zL7FMpyg7vbkwy8EmdhRJ4T1xn",
  "key13": "5mPA2k9WJuZgAEFFhw5x6egcoZVDimHEdju2A1J19jzNaa83nTMvLXwzvPD7y7UdGcLgt6rZtN1S3vVqq5ihT72N",
  "key14": "4PNDH6636z7gwGMxq4TJ5MXWtzmn1sCUVbu4Vug46GUu9Um8UfNT3iT9pjhCaSMgqj2TL9UKhRheeX4jtB1Bn4yv",
  "key15": "67k979D7cMJS3YTQF7fugeo1i3Ahou2ybSMQctyUikdZrmkgK7DaWYJZNg65dXYbyfraJxL7RgTetdhDGWJbJjfm",
  "key16": "5BNWej3VyJSUhLaYgYRMCZ9HWFXdtMVi1TAgHF8NETUp4hiFxJt5AkPYpJ8xF2KJRQXK3z7yEJWqW8MSy9uJAszA",
  "key17": "52HLokdC6o2BTTunV3FsX5GamdGJn8YDWubvUdasMj8ESVRq3DM2WRq6aSkAkMWDVym3U4TaTAzchb2BkTbeMiB4",
  "key18": "592HKTb9xX46ftFUUYcKEDufhVxB1NpYaFv5bpg3egd1DfN1KjrRpXJ7P2ieVa7RjCopse539PN6bNmksSFm9FkB",
  "key19": "45JGdyKGmVV9iiJtWeAJj55C6VmZWkiHYf1aPwuXzviyV7JNRbG8qup6tS8ArLzJKXSAj6BMC7wAZ7oHYLtLVbfj",
  "key20": "2BvNzq3TkggM2aEzRmUfGQ6gZ7bR5HnFeiexyzgEqRpiimifDpDy3hfyQyCrxbTKo5nsq84t6MBbHvTmHEGtDENp",
  "key21": "4epWihwME8axFvXseE2cbmoDTcEVJ1cihxr6wVbP5W4nwFtqzPJC6J1XxKUAsY78V9M4Wk1rERdanWhryJp5Yq7E",
  "key22": "TUkiCoCVJkYid8XC9z2Th7ta3VRKuMJjDLubeSjxWeFiyK3M5SMX7FjoW5pAC9WZnKg7ss2DfDqfhdRt9nFkHuK",
  "key23": "26B9Lop9ajGQsfaPqgikmdNq2YneaPXob7v8vcgcT8jLXXyvtAaxX1jL1gdUETxLDgQP4cyAHk4ppHQ9fEMg98go",
  "key24": "5qvvugokygfum9r8CKswjKkAhUkrnVsXwtr34JY7GniWSwkMhaBrWJUsQHC9scQHPUc568BxfYxc4EDKLE7k4zFn",
  "key25": "4BsdBrTZPD3bKbDJgvPipWFmPH6quVJwWJeQUwYaZFb8UBDhhaL3yXi5yuCk5Y7ZxAHG1py5Aoii8vmg9DjnTH4m",
  "key26": "2BVAaQ3Av1aHFokgRnTVLzzKZ2Kr9yTDzeVM6atFmsrtL5rwcPWPwhAMFnJCrGxAM4hxGMxqnnLEaXVNhBnZDi2P",
  "key27": "5Sg4A2TzbJjwbETaPx5rLHtbJAMycF16D4GeuFwqny4t1brypQkzVzQJRb3BWHxZpb8smkSo7LeQMZZ34PCvVEDw",
  "key28": "iEDdKkAS9xBcWTT5Md89xCdCeid1kn3WLGB6U8AqJEofFowKccB8aEkkXn99Kcgha2tBhrqYR6XdaCD82L4aMa1",
  "key29": "3exqui7iudeqhSqRWiTYn4JJ5gGbuBhYfTMfbnAuKzuLrYeG7tszeihiitPZn5SNyd1wAr5TgXxMWiU8E5eu8VDw",
  "key30": "5ntRLPYj48Jr9KSnUeYaEk95TAgZcN1Tz4VnpkqgadwgjiiB3J429Qw2ez3iXGz25LWBvDa8JfqxLS3Ff5QeejUs",
  "key31": "2p1VYVny6EUQBuDqbGCupnhwBr5ASNjxQEqUGrfVeSrjeDFAHMoMzd5fbT4JU7nmbwNXmrDfcGiriQo1c21c4ZTc",
  "key32": "2yxzP1v16w25p6FpbrZVC4H8zyXa4FdnfYRHyfJY6Wy3MtrnL7eDZh5C3u4VcTPchXTTPMssJFXpaAfm1r7XT9xm",
  "key33": "4UEnKbLvgF7Pc2bEXgdC497LfyYh87CFUJrosuEwuUxJ4Ta3EYKXXhY2wNmnwUJ8vPZNtbLnag72EqwVwMncTZX7",
  "key34": "3fnaWA29uZpdN33YhQZuGmiZq3UGcBBJ98VtY1tNotd8jC5f8pYA5CpC8dG57L4SDN4LbfS2ZcHMSDnJTPbXnygR",
  "key35": "5TGP55paNDNhdWHgAoWpw5KmKdhPsGt2QwQu8TqYqYrgGEEABBz3jQTefQ8JV5Azouzn2eMAA9ghE8KFAFkzPnz2"
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
