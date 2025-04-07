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
    "QpbAiNmWSKgXWDpEpxjjSHZB4VJ8uyLAyF3HCfxpJ2dwyRt4USiZ8P4hDZDpiPwitNKzn8Ko2vPP6SmMcjn8Jh2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y27FhN4ENVE3ZZJ1LsXaxJWsd1suMC8SU91FR92hBmBrecxgriSnoxFX8wbJYo6cjJ7NZZGhyUT9eXowTBjDJw",
  "key1": "5s5Zyo9Y3AeaAXMVHBqD9KsYfdzGxPa4eQGDNMQNBdunUfwZxiaW4FnxWFtraGtcAU73f917uDpdG1oZr2T5krD6",
  "key2": "2KAB28rmVqSPwZvszBv79UUka9FGxLLGhcf6pVeVjRanuRv3eTuUXwvLYWsT5LvJNAkATdB96ptoDAE3tpoGrDQH",
  "key3": "5NBgVCaftyMUvUiF5X1bsV7vL4yZYQ7jTpsH5Zj7rBFM2YtydHMESjM1PNZ5gRm3Sc7nmsU86EyptJoWMSkJwwPb",
  "key4": "5b7twMrtCjFiJr8KNLo9jN41KDrVhm9u5BjHaCtKpFmZZeMueLwQbpCvNxWGZNwG5YfBaQrWyHEfbdbGwJo4SEqF",
  "key5": "69RhE7PGML67WdkSzr56ShNoBjRbHF6UrXuGNJZGPaRLVaQ5it8oZ5wMezi33SDvsMyQDZKUrTXMfDk5sE2y8gE",
  "key6": "3gmgfLx166Vjuz69eYAA5b3kZFzxoaHTvabN4Y2BPQKeXfC2p9D6a1cWry76PLwyKFSDH2JaVyZZ5cpd3LKfaiaD",
  "key7": "RHk6KTTe3JzvTjZpodaw7V4tASGV2vhNeM8TRrAXdbBuNrpsUa74fMmH96gztNTXxGY6L8C9rwk57rzxnCqCbKG",
  "key8": "aydEguNjinbZ7vWTVoPRQqw8jnEf7UPPsDgpDanMu7nuYAneoiPLq8HVsEKLimx59wVFkYJtD87nRYaaD9S4asm",
  "key9": "4Gdgy4TChhX1S7UMDtjvwn6t1R1uS8BA1sDZUsztJzZ5NwivSboCS4NEXWajJZQPfkzVpv9sBhNRZsKDyHhCXJho",
  "key10": "3peNzTMwWTk8y4HevgJ4MGCc58vkmXuavZ4NDrNzaCsYNxRm4gr57SK1TYwga99cp4RDWu4Sny4UsS8H9gotdG5i",
  "key11": "2P4s4Az6KCgkuLWGkhHR4tEzumxyZzcMHpXpuXJMBbwFngX3RyRa3L5bYY2v8R3KoYaHPiiDBRUUc3UPjqycFRpw",
  "key12": "2qXzCUqCn44QuNyqL835yTtmpVDKKJgRjdwh8wf1M8yUqJ8t3WjpqmST53cXqFtfFwgwnuwC41EuAu81aCcRX9ob",
  "key13": "3mDyKsjU3aKD36Fohx4iddLKEDBEyYDrxerxyR9eUH7Jd8iJHcptA4dJUZ4uv7QJRMPRyhRgNdLVoL44DVzTS27w",
  "key14": "3nu9qbQUecurxFxbKjWRkicgxUPtdqXHCPBzFU1xMCAuKXGajR4HcruCN5gXwixdBEmiALdWDsUAnEpgronfUKjw",
  "key15": "28CrzAMGPMKBL96uhsWDmEVtWX94JSdc4Xbt651rrikLdUtGErM5opscySM9GohSf3C1Tpda6nvbPfhm6rn13tuD",
  "key16": "5E8oj8MpZAoVBSxFptSZvhgchHLQTpjynWdAdqGRY4o5uKsytD6nyFT4bERRJoin6Za1gZeWYtYxgo4zHQr3VGwA",
  "key17": "41Y3kE3AaMCboDUCqpnWRRfeXduoXhdz1qsAk5VLLznnUudUao1miewJ4RfQCnceUFVp8MgoBhCjpwuciERWQGCx",
  "key18": "3ddVnSE9GQTyv42CWuvidhon2kri3XrMmtVVVmDzarXbc84PcX5R9rFgwSEttmu6Gcogqs5yUZenK6yjXuVWZu1v",
  "key19": "NA4uYWcpgmz8hSqdsDoNZx6q8ooHmum6Ygfx9j4VrWJ9Fwo4eYnChUVpaEpuZsPhQ812yfhr2Yjf3u7GwcJ2XcE",
  "key20": "4oUCoMPqLtJAkScgQtpHUacP1RdxXK3iFbqP9pcY9gbjzbHWcVWVunUqJVFWNzEoQREpBcHbros9JhWiMTgPHM5V",
  "key21": "4NdJ8cAXHHQrYxkkDySdMvAYHSUaHyApim9B97c9oi8gLT2AEysNLZHwjM3a8zhuFegXXUPMgYR8EBawQy32ZuLs",
  "key22": "5Ekuxim32at9xTGGY4fGEXDM1w9niqibXfX45Q5VfDw2wKVs6a1moVERH2XYrRnedN7jHzk3zRWULyweXU12t9Sd",
  "key23": "CQgyfwbu3DYqd6YBCh2addg9SZHLZBL9zzWaMX5HYoVaidSY9CgBVJLMr1v9DktsMpPcwHyiEVYLH7LhLgnbJ23",
  "key24": "46NCGzjAb2iKRughjFUtWsjPjVMwjKxAWCqQRrJGyjhu1N3xNYTK1kM8f7ggHqJtMaNvQ5akuftEpbUrqZXBPpqX",
  "key25": "1uEr4pA7sPFiHjC5srea3HyEKtXJJrLmQRkvc8ssZ8p3hpm5qy38vBFL7GjmanEHqHrAoXLAUQ4fcwXz2iJqfbK",
  "key26": "Avk2Wb7bzWgmiGnJf9ZpSeqJAoxs9G5ThqqfaLQTjaXzAuTZNSsx9WcF8rQyV2wkZAZCdUX83HhFFfFcW1jsrS6",
  "key27": "4enCAHpeef2EpBhaoxUwy5JoreyHwcXvREbPz3uKozfSSeTVrN3f3A7kMomPbT1f6YUaPJjEmBoPF2MBNH6ZtfYo",
  "key28": "4d2EpLfpk95dXwtzUjU7ZHS7v6Xna5fpYqVpAtn3Up5X7ckX1WnjC4GM4gPvHK1qPQgnBKkYMGeuXHTpuu9CWajA",
  "key29": "3KeyHeLetuZrv4jX5jJdBnvWmK1eQTNA6Qwa882D2HqEiHXbLzRuWLvP1Y4UHta2iGHog576kXSrJqfuFFzejSD"
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
