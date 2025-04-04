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
    "4rYXEWZ5m2T6yMCn3SVHmaTYV9FuYimMGQf3tseTnFWhJZv7S9bxfav68WTMKVktyFdYTLguvXXM5sH16xhy5XzW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2myZAW3cTfPGA6Y9YznjbMWSqPfvqu1vaBLTVhd9uAUuNwjKyHuzoV1DLXNjUiZdVHdS3V81iyEtoLAReFbP7PQo",
  "key1": "5pa7pYJdieSyR5gZHZAJVYjuJyUJXwV7ymNacjeSrdYShtPSrN82tHH4wrKueRgU8gXJkGK2pJ4f6UuUgV5p6yfQ",
  "key2": "2jxQTSntDEUHjYGp5tqoNbTLR8jeAGdc76G737nvSPco1UWGqvS3qCuSB2NaeBBRR4ZVjRQhRPGp4DF1c7m1paF8",
  "key3": "2TDpku2R6BrN5PoBvwvtUsfSCSF3A4kaY82UUUKTrj869Bq4CKEbFGxd1BiboTJLPoSHwCMPDBk8razjXUNEoysA",
  "key4": "32LxM2caRq9AQ3XKDxRHdUsE765G53AZfa7bHgzXJmz46ojyrDZFoeaaqc6ZZA8GyjicyeRHFeCu3bCt8MkEEzJ1",
  "key5": "HTHcRbqB9Scti79LeqCzrqVK4TtNH5o4TNuPBYA2U4NaTTgFQvqwEF5nsAmRuzj85W4rHyRpbiaYNxay5mYMdQg",
  "key6": "21KJ2873LXAxhuvNY9GDXW1QiuHXGbjRPMHddVHzDQyxUx4wUCcTXHRiaGJBHpSaj5rH2WL9s4QmBiCbc3wh5nBD",
  "key7": "5WqFc4rEzdgDQTFmzdyXKmM9YKSMCsUd5FQ3J7g11Ggd7wJ4s2frGFDNhSEF6MMEm6qRzktYUu7paJkaHpowfqWB",
  "key8": "2vzHq6n1MwQvcHQbmc7RoGFoKuWYXhMNbi8W5kwmSn83qQWUKnfaNoSk9gWCouzAohvfKmM3iAoCe1nwQGXsL6cE",
  "key9": "2kwoXTNaPNUiUQH9DK7Cpt58qBnoZRcG9ccDGt56BxuKapxjgCTsi7gGzbVmUsu2EG1FdPs4CPqPGyK4wJEXAfex",
  "key10": "8b9JQ6VSPiCwcpe1BoPSu741jNuUrQqvsydAFSXAFDVMdHg6VQynvcGamP23C5Lq78QRUWXS9CmA5oAXwxKnd4Q",
  "key11": "5wwPNvGBupuRGMqcyc7FtopVUq2nizSTxTNc2N35XZiosKJGV5JYVgbo1s3DUc2Jc14SF52HynsXHHtEaH6MhiRg",
  "key12": "4Arn95Zx2kg45exkvqeKf4thGWQQKDtmMwQEwXfp2W7kMzEt49gfSXKko9iRzSpeAj7FMzp7eBmTxK5AzBjPit73",
  "key13": "5R4cvz2QphsUT2cgrBVi4b5uB5CLGjfpVs1u8sdDFMyBNigiD46p3ZnoUDTPFBCBBmjjdAXDXogHbB63UjZjsrvn",
  "key14": "3Rv8G6P98cFpfWFzFSPnf7b9z5CKC6bxNvo1xQRYEdgGJ2zn64bBi4q2qRyQVQtu6fjQrE7cEgVygDRPLfLz3Uaz",
  "key15": "26VtxMMTUPGquaX2jmcwsbdkRuvjkEaKoBkBHiUNkpG8Ce4i2gvi1jjTmQdoXmRWuhnQXprFNTbzndV7d9xcZNUx",
  "key16": "4qEv9ekrkC246KmWvRPcCHVJPGbLvuUoc7HPwSqYPWhGYzuvSNKgQU6fRbemDhCE8fvLgtbddEHLr6YanJwf4SD7",
  "key17": "5c5r1dkAvCkHpqCMbg2x1oKGkQx1kLZXA9hsV82o1vCc7zn7ycwbjYtGqWX1WV1ZwWcm1zf7edoZPmkvrsy3PqC7",
  "key18": "4Z839TMF22dcJ9o6P7jouVPnmVHYGHfMwKXFuSoVCNLoJV2AB5bDCQDpPF82R4hC3wbTFZTBwXJeBZyD1uS81cY4",
  "key19": "5a2ofnAxNddQQCeNCmgnjmUsH3UyJZBb22pTi5t74RzFEB62cZfuQUDyYqHmBToM32ecwU3H15DpknfczZSpHA29",
  "key20": "3QieNVLyBsshHVRgNMxfM68Z8GBTjT1XCdAySY62DcuPojPv17dp8AuzeLJa2kBntNPeY4eY2txHQJUqw2VCrN1E",
  "key21": "2JmW6BVWbD25pxWYZav3uoDZvsUw8ENiGRVV8LGRkVsK3u22TdKzxejzQX17tE9ARiZHrLwEHmCFdqGTdM9ihDqE",
  "key22": "41CM8VjGJVJzZKNmTdKAYpPGpJcNypF9uitdzvSfGr8U3s6Gp5GFq9abbKzRXGwJcsBpL2Lk4ERVsG3HGw7AZpLz",
  "key23": "i98TjqTUbyKJ4qJxmYrP4zjcZFBep1TfK75Nr22sC81MviBqvwg5oL33j6C7kGxDS6MGBxXC8zhUkPxBED8dyLY",
  "key24": "5FYYKwg3aMFt7V6sLFSmj8LA4NTFEjNk63tyjKzKSfiAxVQcopvdT7ahoMLa3bwGfjtsLfuaAJxtTyTYRvrEWywf",
  "key25": "28PB58CxkTenjedxX7fwb6rUEQBDyAQsrc2XeuDiTmdi9UvszFXgmwUUtpdQhXk1wU66UaoraGgZpDs64ex8fhCK",
  "key26": "E1sE6ZLZhSukKWzspqCyd1gcfLadGWAWbKc9nn8vkh7g2nicZzkgWa1Ft11XgaGgtgbWVFkyAeJKQiQY5Ya2qoQ",
  "key27": "37Zi7KenhMvj9aguTdXqZg8zm3CjhhfEX5PvYwc4pErN6UzwW5ntgkXHoCvPjA22pxpt7CjvFUcDcL6BJKfRDRcK",
  "key28": "1oSAkYVf3PZbnAGYwakACPkWWRQRrRfWrnVccVu3n5caRE2x17X7HDKyMKcoS3MrBNigKPdgzXgN6KNTaPnPXeE",
  "key29": "4KpX6C9N6jRUUSxisZ9Rxjbwm6okoMeQUneyvPQwqVxfmVFA6hAg7HV9WHCRW2ym14VtP8DAPnEQFWa4u9FXYihH",
  "key30": "5qvbRVqLbKgJ9AZhfpkXNpFsPCj4H3rXuuUSKySjVfHH6GLxDNRktSVfstNnmVRM7JKt9TsDeQEqRQbNN15qS9Ti",
  "key31": "3coZVxQ828C5sjtL36Y1TxZDY1dxmnbyPNtB2yL5ifanyvVtCwk4GB2gke4NM6JoWhgWeHMxfpdUXP5N2kQKk29S",
  "key32": "2AwLToKLAygNrZTb699vcu3bYrFUEsjtHNm6JZVcEveMMvvuuYxkC1TAkHBGLXeVyirvrBjDnM4Pw8dM7dbze1WH",
  "key33": "5nEjvay4PjiqVCM3W6bMZrB2gBbo45sCBqqF8mewHJh9tKUZXzLJCgTVLvaKiPFxCYzVbA7g7cRmc1Up7jrwHjPe",
  "key34": "4c3yMDu1rn3bVvUkRL8b8WjqU4n3y5raKowN74NQ4C6NPvxdiHX6BuFu8yBwz7nxjq6bbPRe9TJiU11RmDXRMSDe",
  "key35": "5UjtwtbfY5H8mWxkeHwuEeYDJM4Txi1HqXZMUXPWrqVKyHemgJ1CFNdfZWKkWEq8NUuKZ8s1Z9nGNjFw1kFvzLw",
  "key36": "38Da79NxTezfHZMhkBrcu92wsAEpdwLVnXsSJMpH4BVE3cokjPVwsYgEMwN642CiwnQNwyQ2n86pXqEHLVh1snQt",
  "key37": "5CgoEUqHLQw5MQctC3cBmDkGyAeeB68maPn766M11tLCSTtrFL7SaycSA62jzrzs4awWDJurYoeqz3Xap3m2bgCy",
  "key38": "4LHLWPXMYqiLtxYpKy38m2pQ8d2KicGhd6ekgW8vgYFoHCPmTxSJN77jPvziVWoYn5HWSq6QXJezGN16wM2yRZDB",
  "key39": "46SPtE2s24zjNUqWjzszUwwZWgytWQ4pdRkPMfZ25vWwhq69q8uGQ2toBdn672AHhGTpvuzdw1nMMY2fwsWVGQgr",
  "key40": "4gBnrLgsfBtzBp8qsqLzPUgUWviX5u971LFj1WubYhxtgWhqV7iRMkrvTugmcxvH916jTsq4HM4fT7R6Ht8SeEfU",
  "key41": "49YDCjD2hQfPY1Dk3H689RHj95fMEMJP32Jh6MPRhbEAZrbg39orgAAim9oXE2kJxDC9y4cJ4CGn2Mp7EYjugHev",
  "key42": "34ENkSRHLHRSQ6g8wLzPoT7YhZSeJeHSJwfHaDqhKASzEKTSaiy2ZKQuyf5HkjyfkRACRp2NzrnnCoeWedzFr64U"
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
