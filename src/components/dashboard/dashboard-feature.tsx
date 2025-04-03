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
    "3seRK9K4Xi1ZyT7ACGXxg8RXypBiv751hmAondbwXwYemxXSE3WNyqULrZeDJ1nrf7uRu1BgRyF94YawrvYaVhyQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yj89Lr2yt84QwmRKzZuVGbMfZYgtQAgVCQ3gT21xj2nfL5fcGYwvgJfuawUpXYJ37Ax4wdzBkSTwMVrjFzPg9kA",
  "key1": "2FJ6BnuAbYy43QPwnNfpVPixkGeGCrudoY4np97d5ZiuASLKXfn27saBSmdZXzRQPJKcCMHP8qyQpiMP7RcubT25",
  "key2": "65XaZGeERHYw4zQ2HQXm48c9Mwp4wRnaQZ3u1c3aHKKMoorXweHvsrDMQ1kYZHuEqRf9RwZz8RndMfrzFmvE53FF",
  "key3": "3yean3SWftQpYndJiHpkn2jB2trwtofk4TESxfiAnSKd7Zgcf8XF4MX5oWVY7QetaB7KcyBsnB9eCYxpmA5Ra71u",
  "key4": "4eYo8LJaCSNrUdYxtrcfnLxYSZqwDiyn2oyNJgaxYd5FsUZQgPyq6rnzBD8poyMjeAp6eNThPpw8wM7g6Ct49cnv",
  "key5": "2TTTWsh8PihLvEDEgXdaJVpnzp5Cmp8zwZ4wiAyjwnk1htu9obkh35T4sJq2Ga3HHY1LgCdDKqSjhEAnPYFX2ePs",
  "key6": "yiLH48u8HHKDEPnwD7ZpQ9ja234Wm63PSF4nfDxtfxEXxsaQXytDJwHmVsbbKcyF8HoD3MynyBW7pAQkUreEHK8",
  "key7": "31qFC4jkjQjgRZmjEMNMTKiWMiVqLwuxQVC1puB9L25M5PXDwKJdW724EXGbn1fqbJpvxswDRmqY381Rn2U6Nyum",
  "key8": "21oQ9SRZB9K3rWRAnRrtAcw4JB8VyxT11k6Y8uHj5VYx47sWdV4fAx8tE4RRMh3VWQ8TgiwEqPwdHaqjig4DbMaq",
  "key9": "38swMr64Cd69nbkDLeYB8Z175Vzi1TdM9J4UwQhQHoLJyuVm8Q8nSoaH9dbKy3tGsrbsTaeKFyt8oF7Ztu5oKLkK",
  "key10": "3NaQ1u9kidbcUpddoBoTK85hg2S8vw39PLN39PikPvveGM7tEnrzUU8qmhHEbtCyNhMTLUe2crB4qgk7oiN1KptM",
  "key11": "9WMTy9wVMEEuRfyRrFEPLRj1HDuVgYdZBnYAJ2B3yCJSc5vaoLBDa2WaHuSLqqQP3kJZ346WQB8Jw1pgbzKJQhE",
  "key12": "2B2CUtn7urAbqd7yv9hpeCdvJ8Z4PdbRifMYLeQbw8ZCBqC4vDz4m6nUdzkzPRXyHeGET2heum63SQcH8Cr3KeQR",
  "key13": "3DNwQiQ2b7e3U41XrpycJSYQkdjdd5JQAjQcDmT8wZe3BtiC364x5QL8xxnEGuxJmx1yaRtnaw1UB2gJAXXcQzqF",
  "key14": "31X1uCYCQq7G6vHVmd4dyG7WFNRHrNK6APTcJXDmYbnDkyjym4HAYiQAPdfbGJZgu6Hu2kVTqLsdF7GuJwWHRCcA",
  "key15": "4fafZtUM69zF12M1Arh7ojqabiV26oYk2QN2dhgtY2RG32s2nzNneFWFdZQvsZhmCXSPdTk6kwiHQmv7ngspr6Vm",
  "key16": "4t6AiggCxKDDvmaQbdKAXX2T3bdwYxhvwzfEQTiuAuikeq7RUH4jypmSEBfxNDRtZg4CtxphKidYjJq4NNnxmWz9",
  "key17": "2bwLGnikUJoGh6U5ACLakAXjHQNz67PZcq6ixHmqXRq9r6LB73YYn8umiJq9Ge2Q6bpWmJq6QjySb4kw4VP5uSmq",
  "key18": "3zV4oSwDojnpgsAi9kQvvj8g5qPwcBSdbnxMoYGgm9X68rYdk1DY7HWLnH7xah2wMcZy7vfEuqDZVjvWgWJn5yYq",
  "key19": "5WdBJzgh8i4k4vkt9XM9afWu2xVAdJoZ7hTGoFXTH5KPsrvGzEddm2xnGtAfh5fmhg4vJu79daAqBfaMXyWcaD2D",
  "key20": "iMEthHkAmVmNP7Hiv5HHKS9P3MYqToZg6Z6Zm4Zv1BSK9Wxpu1EwAidjDsDxYKwVy8ZVxkx3g8GHyJnvZAJJaNf",
  "key21": "51wMuT1CLzBGXtTCPaCttvwnPGp3m3UxFmqEgrfK2996iwhE22j4iSq2Rnx9unhcZcDLTv3jWfqbuvivLJGXVB4d",
  "key22": "4Fvmw2cvixmY4MX1XDyB4HiyXprH8ior1nhn8uzM87EhJMXQSpUzribcpjfizSSpjiiZDTZ853LDmqkciC1YCEwd",
  "key23": "6j1qkSusaputfnSdBqvfRWwpSJyLh1d5EdxDdBxcpHFi1zZaCkQUZJwKa7KaiigwWcX6F2YSLFUk89ZU4GNSZPQ",
  "key24": "4J5DJ6Kh7Mj7UcDyinKYsPQWrvqJw3jsXRSzzMra45wS9DkA6UpWJTKhGSSCypohrfMY7FSxXRMJ9kZvigzqzvT3",
  "key25": "4pR1B2mApd2DUtPDC2XqbrZxMHRyp4i9Fc78TPseWhx2kobGFaSVjsmjEMRHAbPHyMUZjN9VWWo6nBLhM1Co2zZt",
  "key26": "37A7WnY3GqqsVo4oNn7Lq2w98KbW1TzPZWEbJfhYws7RPEZbzaZUcqDAt6N77g215XA27GUfkYVG751qsKBRHW12",
  "key27": "2TK7nUVo4iLVxW4x5TYPpjChQKeKFpPVd8SsY4nNt4kcaXVdxA5rPwWzhiJVuFJwV1Jrmr8kHHfe7Arwuik1FjEC",
  "key28": "3YpAfFuFeQe29EYZipujHX4qn4vBE916SZ5Dh9GrSEV7pWkMLnESgXyeudCStFCMz7wHWeNc2oYRewvUgoUJSVDD",
  "key29": "i2FQivWxodBBXjYf1wGyBt23yBVfrG7nE9jek85SVV7pL86WA5dp4oeZspCAJ5kMK4pTqHvBQSL37o3nXouxiE6",
  "key30": "5orSLGW1ZKDVfvN9af9axcspMrwajER3dvf8QjPKeBGGjh4KtkrkU3daYUwxMmjFb69TRf9H1XDZdj1VGarQBhY7",
  "key31": "nte5Z2zMfqgxEBjwHwFSywjXrqWDb9Dg1gLt8Rs1Kn2kbxg84Ld2Gqdv4h3HXV3TsdSqRvbxKBYvGpudc9giDEY",
  "key32": "XE3cXkiBD1gT76ecS1MvbSK7DyM6JiqmHS95RfjzHkc7YaJHTy115fxwgthguV87EYb5arMCriFseecV3UgmCTL",
  "key33": "23BDu9qY4Kw78fuHWMZKWYRfWj7fXoa7DE6o3RDYpeCM2G3u5nna9j6UgyczcuSWsnc5dnL6ZucVFj1MmAAbBCm5",
  "key34": "FddKKh6bFJ5LzLpEeZXho6nLq6GuoG8hwZ2wBrBYBPNRZHYdCcsD3SpUV5YkQvBjhRtrxFFg7jw1LbBxJk664am",
  "key35": "2KWRTbkPcAjpax5wWUi7jUX27dvbDYHaFzmATWvVzV2KMXDP5d8Ex5APgHx3zVxtLax2Xa98uHfcQUJRbd1pwisQ",
  "key36": "3HQDE3aPfrYkwmGSRMBHehTH7Vx5mpJYFLSmUhQnbBsgGUVrJZ1pBxKZDZU5os13CBhcwu8QYRjKHa55cnwEBUrH"
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
