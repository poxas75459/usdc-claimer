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
    "5FAB5e15HYrZsdU4Xt83WUC5CxJhmrSJZGdmVqvvmQNAu195aGrv5GLpv3mn25VgbupsLDuehzbHHyJNWVD9eeJY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NdXujoWYb2SaLdSYyaRJTa9UYA6pnAUfAfHURG4Hbq2FJ3MXbAJwW64yc1qc7QvDh4pMfS6KMCG2K1KPYywyEyR",
  "key1": "2T9JwwSZJ4cJnTXBRg4TpsdmKEPrUy15oQ5UD6bceQ5CfZVxDQRAjjd66EytBw32VDCF29b9N3VCtHR9JqNn3M7X",
  "key2": "3XuhETwhXoPpQvaf4FAGKPmULM29P4ooQ1qeBceh8jyKyW4YgDYk5yio3UbChznCzvmFa8cGo8fBZYaHjRW1HvXo",
  "key3": "4GBZ3thssqT2K7hye1A2qvwg8KctJNj8urEJVxmvtqZ7QWMGEseAU8oZPu2HQngyMxz939mHkpxGzg652cBUSrGn",
  "key4": "PEnUhrNWt8pbK6AjLaFiyRfKFQXyTtoTsBDVq6t2akkhQVumDAjm8Y8zhuR2gH8YL5zzummzVX8LUwYNECTEAWd",
  "key5": "2uRxwnb3aDczEX6r26JNKvb2tZp5QfaYdaqqyYfbeoYfeyd2cBibHkk25Ud5XpvFW1M9Y637vdDahAVxVFB6W8aK",
  "key6": "Hew185DNPy9iSyZuhUJbB3vYn4EyZV3jyf71QLKtgaB4uxo6oET3phzNoXjL2vmvuFDHwazKYApnfS5iJZugyB8",
  "key7": "2apiQgd59cZrycLYTWhGTkWTu8cV1uEJD3rtpQooCGghYwuEw6cUQbmNZEWmEVHy4huW5DYSzSYJzyxzn7rVs4ke",
  "key8": "CBztbCm24fGJm1PnWw1A2UZpYArG3uYirG5URiuvAX72oyRNs4WhML4sqnRb1wbWCWAmY56eDmf1CEVoFHWm6Y6",
  "key9": "2SnhcmCauP9fyuw982ZXjU59XsHHcf5eaLNSGSTuTm29kAsmFSwy2synPY6jBhE4RG75W4aSTs4hQVq7V8V5eNa7",
  "key10": "4nPhPx2Y9FqogwqC4aQs8LPdfGgF5iAeEDGatgLXsnqDTncAsbgYqpYhgrXsYjBgpjkLAg4SBkCnqXrpVTmgMWwZ",
  "key11": "4dwinCebfV3EXcZpV8iKH2x5hdKHR1cBEC5C2EpZj1Cgcrra4PUuDE9h6zbc2cckTch3f7bGXnYEBUMqonYXTjXQ",
  "key12": "5hCfTrrWuFHuwtawLGBvawc5ay66fL81ob1KHZx9KrWZNNTCV8D4G5DsLnqzEqfLCXVpqstYKrwxNf71BX98o3hP",
  "key13": "r6rKDwBgmucw4Ec42ZayLwmYpo4s9rMArqc762qSK5aDNC3BAYtfXV8kNdEDPKHb3EtXZhh8mr8eVZDcdUDj965",
  "key14": "2tq9AgwE4ekyzpovtT4kzEF51aVodXyHwPv6cMUMmD9W89UnsBmHsfjqX7KZTeeFpEJycdGxVT8SqgjrYayi4pHh",
  "key15": "5kmGeZMnteWE7zUxRZT4qq8cCZHioa1TVsFsszXr2bC2o2k4KMMwAytuo6WqxPJauobsS5wKB3Lg5v9KoMcFhCo5",
  "key16": "2Cscr4N6s3EJdtZNiiJTtjo6rg1NQZxmRRz6sHmeegEFospioZivUFHSFjEDKhEbWNFcQot1EXWuPKTT6pmCSK9n",
  "key17": "3RvQiFeeCC2dBWoDWMEqrSbWDGoeZRbgNZ8iFNx6syyKtoU3P8zQq5dQwFAHBRYH1jrKKT5hEZunJhmgWubfnWQy",
  "key18": "34ikg5rF1pMwVfRh8R48L5KNmMWnX8i9BSmyCduCkRDU7m6c5jfKdyZrQfmuC5cJ1vR1RghnRTcgMdccZAjLVb8c",
  "key19": "352qtiHtRgV5TY37HQGdRKQvXnKGMsvT6J4Uspfp7jaqFK5QBXGVbrL4Ygg4tyXSLNDAribQ2v5pwuBf3Aj5BBk9",
  "key20": "3gS8NQC1tkSYjXZb8z7Q44YzErkam7pPVAgVA6eE3P9pqKzTghG49KhF7Vpfq7Vm1d3k6EYbnyLUdnimGQFGbE3m",
  "key21": "39AoC2YENnTw6qH42NBeAkJkCXBdztieNECsXxYT8FrMqnTfFJ3AG8k4TxzPJMAv62tN8bMDscfxLfQBeDXYHtWz",
  "key22": "ej7VpJEFnLtuCUG7CCA8bvzeAWuoFcfrcdq2XXSxWcPTESCerfopHQ2u7Ghq4VnYEmJ45HG1SvsVcf9LppGggR4",
  "key23": "67FB94sj46vmjJsDPfHAreohS1PsAdPfbjLwRxVxSgymwvV3bmYnnvKxP7M7TMvJzaXryKVSF4kF193c5FUQsT4w",
  "key24": "3YEmDhTKtdETBrQ1zFPfNAMxf3tHLoqzEcTthhVUEc2MMrCqThvrYiyuMUk7vDaJAsAukDUnJKMxpcN6pUwXwnt4",
  "key25": "55WZNjodWTazGUTbWzSaFx5zrpCCL4f5AYTFHPhTDAd8zwUbfur7X5uaL7WPWoeUtTFTio4raZe9Vryn13okYWUA",
  "key26": "3avaukSm4XdoDxWx1ioUBkofahwnDS8ENbkKSJjLSypRzne4CMTMJVbR3MSbNtTwnLovW9yhq67X9rCN8gMN7b8c",
  "key27": "2VxqP9hDpxnCAviotZL71JvLYemKNsLmEefsTx8yoERQeYYXGvngUpNGVqSTAP6yAwz22aUQHapDH23QGQLK7NZC",
  "key28": "32JY3mD6pPQC1CD5Ma6PjTeAA8ZQfhZ8epPBaHXwKes6crQBfGfLhcK28BMvV6Ej8cJYAi4WUfsNHVjT8ASbqmTB",
  "key29": "svybTEDfi21gJa32G594ASPknQsrWmtDzeLnCttzEcFqnVKwG1GV3CQ3Took4tGkNiW2oJRzGKSRKzeXZ93QJKw",
  "key30": "4CfD3eLJKoeJeWG3qiogiJxQyRwpSoP5xyiwPVmA1uYcjRvVsWXG9dzceBaozjF5g4g2FYmCYA4yacA4NTvdQbij",
  "key31": "uWCVxLjgcz3NwMqUfKosjV1kuZXa374JvNg9u2oYmv2Kk4oDsfHnWR8aTURCJzgZvFu9QRkueSGRvFzrmDyJVvz",
  "key32": "3FNTemDEXTcdQZ6xxFXRY1bNXgMLTMFovVf6XYcpVcRU4ZDHv2q5vsNurCV6U8NmLTyiioCuE5nrYu1o2F376E6X",
  "key33": "29X7sDewrKuhfG4Nz8cYMXkbgrBZas9xoZKHPS8U55qXaxZZ79VVL3CsLYmibbBHr1zVNKahjke2cmwMojsvxr5h",
  "key34": "4ymxmZ73o1Ny7Yx2PMFbhdaqdh6rXXrUCiJFP4tA7RM94XKmThiEmzL1HeTornbkpvr5RToYjGptGbAQxNvDjVfM",
  "key35": "2abWpu5PKwUCD3bwedgMCxH7rjVrJ2SNha1dd91yBrz7HEy9NLuph4tHFySJwPCuSSU5kEXtw9KGkMgDruf8d2JT"
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
