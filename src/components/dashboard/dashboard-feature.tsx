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
    "2Xfwr5H7RiCVHAxHyuLV8MTJn6A73p6Xot5gjKbKrnSkAR9A4LdFPScM4K9oSEnWJyEkWhinxRHQ85cUYnTYq8vo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RhALGbjAmyYphtWsJyerNvdcBdQGAYzhymxg53kqWDXLFWgZxDhqzzLFFDb5ecF3SnXMAp3gFaTCtwPHx5GhFCw",
  "key1": "qnsRnKbEF7MwTDJtSsrhVgdzLVV4SLbifsLN598znoctZcHjZPmcQcs1EXgayTbVgdVqPceo8DzqEAZwRpiNpqf",
  "key2": "4kw7jqdYLkPLsdDzqc3GEADK1Vgp5DfwSGiFv6PGgg1n28LALmHyymgq1b2Hq5ADvKazBXPsvfweJG1Q4YpPd1mW",
  "key3": "2TabSTDaXErapYUQNNrUaR2uPexG46S7EjUx2sw7ASoA6gwqTPqhiBtZwBRYNBv2XifdU2sb3MhsMXonNdafqtdC",
  "key4": "s8NH3RPsHPFsgvcT9DD7DDmeJf3mTz9uVAVLccfiY4SQFAkUToFFxASxAEmgUBa3GcJdLJ1HYPMvwy2pQRJBfxG",
  "key5": "3Kj3gFh9txAsGAkZAP447dHZwTTHhfhhqShWR2iFedTTCVqBwyRMRpjVoyfiNBcwP9qWH6cT66eEwrJcK7HibqCx",
  "key6": "4kwysqqJZCrYYinFmMs1FJXAHace7mfaVthxoG9AH9ReeMqhJZrfFs7nXZmvQuKynYCDLM433Bg6VfUy6YnPAMp",
  "key7": "65JGmizmm9oNX7km3HGxrapt7J6m3P1Heb8JpuLCy5An9XZ1m5pigbGVVSjfZsyKNPmKTqfkmNJWUvwVwUeMEbz8",
  "key8": "4sAZ8yNbHT3J9MpQA5FfnMmUzZWW2k9qyZnJGGuTG8zx1iXcFJeWvevUtnwXJgWF7sXddPr9uK6Kpz6E7SNNGcmn",
  "key9": "5JsBB9NBpGJFhJeMTkSX8oPmHW53QRkb2SLo31mfM5NidSbBj9KyoktAmvKYiWv2Pi3xoYhTrAxrFWz75RKoRydU",
  "key10": "3JsZjSNipBpMNXxkAsQwZz8RAUeR1QnRxoGh3jVu5Zjf2nDxG1bEh8XknVr3k4JfpE32UYdvQ5gHVWRWLQaDF24z",
  "key11": "2RVxfyvZETwrPARVQ4JXup4RtWq9U33BH8jbFTUU2sAciiHgLCQbHzmdHzE52Y1dnYANu5gXsioXwrYr3EBWLgET",
  "key12": "5cbtkEe4fUkPEQdxRpLP4orrnJzEY339Ha9G4JKGwk4dASJuEFPfWzqxc8UYTLN15vK9zimx1iCB4ix9p1bUB4PG",
  "key13": "4nwpp5fEhyCtAC66tVAMFzjNLTRkJHT9hyLBZG6jrXs4y2spzxcsehZo1mD5ajymZz6BjtjgfjXN5JUbdsRh4efX",
  "key14": "WXZYQz4EZTkvNkaQH8yvCaepdN16C4jKiewNonSZmH1vZ8eDuBAc5Mc3i8jK47EveGEmxKxEpbXSnymvvrJd3AN",
  "key15": "3R2YokfSPAM3esCnTwh9BtJtZaNPmKucraSCPtZsY6fNEX4ZUh5j92bG7Yr2jitrYhNWsop6yiXDs6W6zthXUWYM",
  "key16": "4AMENfzM7vtVpai3sxGG14YaRPqsp3FvYQrcpwHXaT1ehoEkFFU2AW7pUzU8RS36PU4sdB3q2ikpPWBZPGen5kHn",
  "key17": "4qaBhPwDMdfuNK7Ef4YWMWrqD56Vb39yuHYTcF1PHntzSgmktg95a8k3y6Hiqk4h1GuSvV7SexELxC4H9qXoBQ9K",
  "key18": "37WrBUzyQDdrLB3n5A8sK5xUAxH7k4aEwEGquGPZCtMA1BL2Qt7z6bYm2sjS3XCrMZkLZPGDntRrLpFth7RGe1AX",
  "key19": "3Vb6ZH4yLbqGfbuUxh9DoB2mg7FkmHoNN8VK4pnQbeb5ZG8TzcyACSJKkEhCVXL7ejFGgur2jDdi61ssaWCywDo",
  "key20": "3ejAdR21gxxMxq48zRCBisdkUQUMfzp7F7cNYzbPMLsHpzHbUqYQZkHcEAdus9GLzaFoqfd7ae5F25ThATRei7H",
  "key21": "52qwuMFJLeB3SqMaYcJdgtNTAJhAsbfPK9TQejmmd99iwLVwRKk93XntkLWj2bXAebt74NpBt61LYNTNCbQ6VPhu",
  "key22": "3hNQRFJ9WrHuwTWbw1uL5FxCWvuaLfkVeBq5jh2gEVkNkb6NdpRVKEP6pkkL5FB6XxqLUej4bAwizvD6RRKRuAhM",
  "key23": "56wxjgmbUwaQ5KaBHy7sFPcDmhuJsbmuEMxvztG2AwKm9Dfxnh8GbwQYmE8gYk8u6aZf8VGkBkgBmvBqmNAeq8Wb",
  "key24": "33YJyPPHSx4iK1HkUPh4jA3A3V8885EGHdkFo6txU5kSL5UMLtEpYRXj4GbmzXzKCZetHgwKR2FN9SNaym2mwdGs",
  "key25": "4PEKuXWRxXK4pTJ1MfiZtpDF7hrS5ChzakZXHfxoAJAMJFFBeU1sEoPd1ER8X2x4wB7pDLaoutzVLp2RMnPT9Mbc",
  "key26": "5wdzBvkYKryEUpPVXPYMjYcQ6h2wYnanLLe1EbQxiGVkm9CxvHHoFgfyY9iy3xpu3Sa5LPjtxAipzKTsBD1vNpJZ",
  "key27": "44i14LEuKHe7zciWcGHC78XSuyGqW1yjo6qq5rGvdyoBn47bQ6k3yy2CjYcm2fZcR4dmKthUE8c1U6NQwnWUEypt",
  "key28": "55tdezZ2LeStEPnapCp39kJaEYV48MfZJ373FKDWEV6TdiJfkRGtZxoWXwu8gaibyZMr3bJBERkRamxGNRQWg4iy",
  "key29": "2hnx7QKGkah7vUPmXW36UC5fG2fetv9nfb7EcTjAAUwSuk1QX1BREKXvBh54iwbpkH5eCtuiGX1bG1kLfCuVubJt",
  "key30": "5CPjioipn5dbxkdvcn3JNki4aR8oazDS3E8fFtBju1cdtTrMKhNuQcXixsZDnJtEfCgUX2GyRjJNxhpBJdKarMuY",
  "key31": "2VS8KAd2rKKRuMzm2NBMP1A1t9D2FiRA5MALHUAw1GB1BCD7cDYHvk9QAvt7GPsy9ytzxGkg7XnDPpP2TrayDZzG",
  "key32": "46kKrQykEJVQvFZwWHcpMkAiR2jzbkHe4E3vpAkdwwEZpC2yLNJG7ZyNB2ZuLskbY8REP5v5Fb11GzkMmFEhARta",
  "key33": "hGePwzjB36SLpCwJooqAHbwb8a3x4aRjL1QpkUgNoQaU8BhRoNPdDb1vQ4gQUnXggqU56zNyLfsCT7vruKnvPYh",
  "key34": "2grXZYuNaRSYhnUxNkZjk56K5KhEEJHXdBT6NeB6NjvyNHVtqpmBkRCo257kDzsSab7SRUZVnVhVW4m6YfQJuvJJ",
  "key35": "55AS4BLscbW9kNMG9fkD9vWPpRRG1gQyg3Nw4bUZu7tWhbeTu9U7v5JRe3WrVcburomBhCY7w14S3yr8xtq47NrJ",
  "key36": "5TQQMsNwciKZDnaEUiCTQuYUjkLBp86z7Lhic97g8ue3HZk1U1QPoETjZpjYG6J3BW4aS7M7kynsh7cax2erPRYw",
  "key37": "47cKSuq5REnG2pdUgGid12vx9KUGMr7K4EzLMK6QwYAqG8T6erbyWZuhf2BtUs41U6ri21XSufzhPwfZXeX37kUr",
  "key38": "2piR4juU9ivkGjb23ndRHwSiydEVNbcN4QUz8EgXvC9M6w32aETVadWvnS5hGExQjw7GzzU7yHRgAdXsjz1VY8HA"
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
