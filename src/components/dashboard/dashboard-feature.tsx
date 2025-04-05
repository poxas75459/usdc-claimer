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
    "51ptCxX4NKadmDys6nmNdqio4VoA3ULT95xLf5gHqD8cBzckm4egkKKXQCPymMuVxkeotCTJS3ZSMByP8RwzwmEd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NGDXA3YxsCtEYmmBCVbkq5UGLTB7HP6phvYEfJJUGcRLJFW4E9bSfqz4dHFyLEuZjqzyNZJ5JQeWhMu2PZzA74W",
  "key1": "4CXggfk4JXgGevjamdgSTS42eF3eZWu3qLT1m9tXn4RHAjknMFevzrxEcQgq73gkJTCEVRwvq4x8ZZjjF8UGNB5c",
  "key2": "44kPk6XtQY3zLj6PRkqG38cjb7jnS8k7s1jNjebjNWCTmFyr8wVxD1MjL7L5HKmEpoxsSJSaYuttZZvz9nqYVdrr",
  "key3": "5YDHNVzAxbmpQpQVkqNnbhstqecyFJv3PuR4SjdSDCMLFjab7vEhiuhH57fXwY8BTvC3gkHBXkrGLvDQyNZktejz",
  "key4": "2LdsaPpaENJfnQ9jEDDrAw5RHx3xL8hHqD46Zm1keu3DwHAggTbHsqVyxfTYaJPKYhWkt7Ht92JY4awEygpXe3jD",
  "key5": "344GijfRCYVT1sUKNggPSRVrDqasLnK21XsmDhXeq5ArcLXekYb3Zg13faa6n7pLCUCb7Bi2FGbzkMiB2ngMMCb5",
  "key6": "3yNRTqzG1ZQE19rcmJP4D7t5G2cR2xb5oc3AV334AGjFDDTvs3JKxP5E16cy2LtNanouHmsnBUqrcEZW5HfoKgDn",
  "key7": "hmgCwtAQgFPXw9yav24to1YcYmJHhub7kn6ymakUyzoXwuNvuKKhmnYNEov3GcKC63PVYezJWAtucr8AAb3jcos",
  "key8": "4J4gFnKSn6iC9fozC8BxEMM162ECvnnMqtV19jGoKhYJ5iK6zxuLTfNGqgzVFfB8o433ANZarQ7WCvuF4RfcR57C",
  "key9": "5qNsbJbWFJgyYziduAhhKQpKev7b97xH18RRrEdBr5qHvNjPvBX8Ris1q1dwQcw3VtUjMbNjJZKqQ5VHCGt7hxg9",
  "key10": "2uS8NWnSV8W77jiPrEyuV9euVBGYFkHXMumTPNKmsodki5zUAksrr479i7ZwggvbfYEqGhTWPWHywqi3ujXFDPhW",
  "key11": "55VjQg74bj85xYoLxgZWgUW7yqE8jKq1SfwD8hAbMf2qdqtyVZMXiGEh3QYG96Tc1Cm4bwXsbihaUESb6VmHzAFs",
  "key12": "AX8cyu7GSQemrRqALnJLqXBLSEaz9J5eBPwxHr813wjkt18DjS4pDaUEfhDgRnmmhp6GNjARtLcwR8wwF6Q4TbD",
  "key13": "3RvX51syo97RpkdrSXHbsUUuKyc9ioMp2fTNL2YfCcSFHLZYHyyM59s2rRPdup6MR6eKvDX8kyLBPgB2hgYi4fCR",
  "key14": "4MS7kJnPSYPw8xJiEEnFNE3URFeAND7JZ8ZFfyZ8nWEaQdcg4BfRMWn4joEALpyBm2C14LmVDRbezFVRBhfFG8b7",
  "key15": "52ukzw67rVgpe6rPceNYriaUSab8QAtcdM2XgDHbY2D2jwsEB9DozqZ9mw99Nj9ABLz1qpuEnEqzkVZyJPALidPs",
  "key16": "2Yi4kcLN5t4wVo6vQLsakMTPsXBufwzDRqwPeyt1AZvXRYTECMx12o9LucmtUSDeHeowMkVwkXL26ouUmRJnYAbx",
  "key17": "2vjHr9jUvjSN9cPCHKD27vtG33mS2SPjB3EgN2CpbbG6TQRohtbRCV1nf8FyTWFVr2sVpMpYvJHnw6Lzpfy8ApK",
  "key18": "5x7GsNwxsqi4ERXh4Qf9h2194TTA7DM4xqSkf2om27geBEFXo1ubLNf8Z8dTs8v8rTPcZhBaY3scozGpbn9hh674",
  "key19": "3BXcRMkhpiPr9PD5764JgWVBuoHPTYFVgiw1M2SdWG87QrsKNSRggcBttCvmZ5YMdRJqCxGQJmd9wotUfZdfaL1T",
  "key20": "5btUNkeCB74N9ETcsn8kqtZ4afjPD2K36NhnVLzxNHMqHekJXbr1juDahkXLSNhPTjXCDT5W4wjPHN5xXhtZAQWe",
  "key21": "2mkAhCNU8q8aqNB1FbrwbHCfGxbef6AqsfjXANACRYHMqE9ofjVXSjXnPgpgP3HZdNBF9knXQcS89UrqNyeniWo5",
  "key22": "5tWfFyqAhpiepV7nEVnSMqNo1K6U7WKux9W9tFZiFBk9LAS8u2E8jZGLjVXUBA9gnuCb5KRPoCsE8LYtzqZGEreT",
  "key23": "5X5wm2Y3LEti8Ludk6nv8o5qa6S9osVZL9fJereVaf8CPovxJbjyurZ8yms14XNPFQrdGMN8Df3CowgqFZBMQayL",
  "key24": "5w4Jqp3KXCveGwH8b4AR79wRA8qCdbZ5nYgV39CbQS4LUxu4rees6nUL5Nxwas4uKiVPHpFxQPoXGm1e1WceNzEX",
  "key25": "3rk7Np55hoKeDCnASyEob5uZW693eRTmXZ5d38MVXrfp36aqdBCdMjyMCkRaB5vXFvTmPhTBQjx18MbtJMSPsko3",
  "key26": "54N8rvLDvawx9xoRqUFpunAi832vFVWnR3bLZDsEpFT7Kh4715TsPZV3bmCq6uabWyeaQaiWYfFiYgG8pi1zrpjh",
  "key27": "5Ndc8M3My6PoXbHVFmrfRjNGQWKboetJ5CGWaQvcGfp5o5z2WYhdeA5gjZw9G7Py4fU1z9Mo1tQobCKuz1u4kNbT",
  "key28": "32R4avxMgvLWTgKxgRUUHpAaFEZ1M6SAgpcJ37UZNxLJNCxPzFzuax8SUwoFVo5uzym49R4j5bsh3RBs5caGsNNC",
  "key29": "5qi68Z1CD2ez3mAc7LA7YtmKQShQPqNTpEHyb1RsmWyRFNZkV2zMeN8gd2dHRiGXDDKGwWSXLvwQ9VJ5WW8ahbLa",
  "key30": "c6tyim8tR3wVbxmnPQSrs2zfYASbNXRw8CToi9gL4s29PRpB7dJXXuWSPnKYCtzHYDm3NY5k48XwoV3biBdYUZb",
  "key31": "45Bzsa5hfkxwko3Qthxa4n5Wde8Hq4yVzWYisT8yuxzJxEohtF7XqrbmdugguatvsNXv9u95r89X6VMknvzYati1",
  "key32": "UqoPRYkFMgMjHWJ3Xaa8SjkiNiJpkJq6g5dFror2szsXWcV3zzEVLKXLfXewXGdyf5M6KHti7kbHbabo3ztMhRu",
  "key33": "e6mEXbS1YqWE4ESQKX8sz2brezdBTeTkn1iaZhf8DEn2ddTDiS1P8yPrUvjUdReMnWQqFmbud9fan2h5LQjXxun",
  "key34": "4DQhfn9wunwyT6PSKwU9ZtE2nBxBmsR2yuwCPQHDK11GGXpQyRtVzh4WjjhzrpEksoNMoG22b7m66dgdYJ7TRrGt",
  "key35": "4krrqeQ8SHiAsV6ACQAqNA2Boqt85QJYeZz2snst8xDWjXNL6srVmTSaB5fRCAFnnf8FPRNhkAGmZzmbUKwKjBZr",
  "key36": "5eKvFUAVCE5TpTxAtwZmXXfgWpBufX9fppwBDxGxqc9r5PgZMPs6eRWQteKUxeeFHKyJNk2TLSosgWLqvgybP3RY",
  "key37": "pxHVNHGv59NeoP8SKNqdgcvxUiXSmPxWsJ1kJ9nhCZFwyqXnqd8WrJASccAXRtg77fX5nJT9WoJRDzYRkyxmKpf",
  "key38": "2bc18cApGNTGeQfA9QjpsqLp9QJChveVM5hJRks2kz4DLxrTLDjpcf2Zns8ejwE2sztHy4aMe6toFYemPifEa3Fk",
  "key39": "2Mk8tyKUudp3bw6xMjjDL2GSaDfDQjmvWL18mJ3pSyGeSnURH55rAvqEoKyJvjrnvAdMgXWAkVnLV4AZkV8GDAhT",
  "key40": "w1wFKRR6VCbRkbRNDDTyVKgLMR4sYxP86HuBmpHywDU9ZZ5Q5t2j6Ci3kc6NZi4M8ZKwCogVj2U6XcjasUjysqE",
  "key41": "45cRLM93bexwrZ61FaCkJP493UXK6RSJ1PofK1HFGvTEyn1aKKw9GSFV24gAab3Ei3CJXcU1NSQNa3z57GcY4w2K",
  "key42": "2GV8e71G9E14kMhwM2BFwWJFLtqZmpigVETqQoM4sfRJ4EpP9hNH7RPxa1kHSSMDWUbPPDEUDEC75EXVjmH5F52g",
  "key43": "5DTewjQBBBMhhi6JRTtiptrU1KJw3kCDEVdkjPAfvapA7mZTZkZzG7MeyuprJzXPVqVSZbfR7wtg14CR7QMQWZEY",
  "key44": "4kKaphfj6K81yNJVDnVf4x24xtQwbiyT3ZwgLdNpG12C2Yq34D5CFLrCC8Mnyw33i5k6SWdJQakQT56SC2WZLr2y",
  "key45": "2YBeb4ZSHNXFGbd5UmNXnghBYSqF1yRQzDGpVHN78cEgF7sv8miitv2eZRgFAVKfYP5Wh78P4BVGE1NyUV9AYYSZ"
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
