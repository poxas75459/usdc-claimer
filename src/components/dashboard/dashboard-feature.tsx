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
    "3RFu3AYzBbsqBFQ9tSgaBhd4MK4CFZBzVsa11gTijX9UAYfMMhxBjAfpCAJLSYtEmCHVuY79RAjxAUrVkFsAp9Zi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RWeTfUdKd9hofrYfB3WAbjH5cGo9cSeTfHAGiE6zHe89ryUdf84z4hoM1NM8XxNHq5x4eikJrEgPZnDaaBERn2M",
  "key1": "35t33ppD1oixWKo8zP3TL7hUCkrDguKKBmPaV5XwJGyJ1CjHNfqyNZi3GDJuSN6mFUByoZpgK1kuXUYfQTRGfytq",
  "key2": "3za9WKFsbUt939LVfAkoENHQpMjLkau76KvtX3cJsUsGGxaNJCZD3mLLojVavWeGgQBssbux9ePez4LzcGV7tzHp",
  "key3": "4LmLuE11USPre15pLDuUyxef3uDuNhCqgqV8znL5ss3v1FMoSjKPcCyAped8i7U35ojpuZmCtiSxtHPXzYmwskHZ",
  "key4": "5UB2vn6TYQrsi9BLMWS3vxrMnY46kC162uALocZ7hSGwSduo5rh343hYe3uHN7xrYrGztKXKavW8zyP5taCasePR",
  "key5": "5z9r1eAPJP3mH9Xe6f7WMbse8yuLkCsuE55qHb3vqr3jEc5D6Z6btmMDzHHibReFednxRR7LKopHVW5pBCYbLqwY",
  "key6": "3F4LL3xTrqTHDrH8beBCXUYjDDXRdLxJ5yefdnDESdNFEHguArHWs2NyMibM1Jx9kKaaeKSxvSV2y1gW6eoMwwHf",
  "key7": "32FdPLoW3WSSwZSpHsbazbMAXEiUriVwwiySWcNyGd6jFJW9DztwBJo7j8UP9du1ctGFLT3eionjrfPeZJD3dc4D",
  "key8": "5cnhizt9gjkGb2CK7QVjuAuWfM8r2S9w6vmzxXTqib9pWGZoUjQA7wvd2xk59ohuLHg9RD8WhkgEYTRzgB7Tv7YB",
  "key9": "5JtiJHk3ymFMCT6uJXkE22t4usHK7RK3YccVrJWoLZi8FLKZJ2oe85GW7MbU5qBG9Qtk6MX2UG16zJbDE2zyJYBf",
  "key10": "2UiPuYNxnr9onfmWomX65JbGDqyZD3DZrbzKkminuGSc6xcRATCx4rTbeE4FmdGYiVqkeo8maA8kWHS43JeGBADo",
  "key11": "26cAUWpCy6SjTJnndD4paJbtktDhs9JFiWkP2hShPoR1XRCQE12z4N1SCfyyoShDf1nksdVofstSzMbLECPKXpRq",
  "key12": "3Bh6okBzk4KmSn5jV5AScyYgH63UQxqKdbZCkvtmenALWdHQf4wdNeDPTRP5xFSTxAM2CRYmXQMYp4bzW1N93Eo3",
  "key13": "5vm2Gp1kLfVJwwUijutTqeNYrg3PTCxQ87vtVHrF41iaUa6oPbLG4cnPik8SjfJj7kAYeae1ePmgpFtDAWvAuvsU",
  "key14": "2XSnp7Qa3mA942ttj3eEHvRZWkm4o6Wjm9yoAN5VwsrS2MmvKi2cDXfQH3GUbm3L6DrtNSkZkGLQGnjLUT6YeUY8",
  "key15": "46ZHZDJcLMiZVrP8gSKYCUhfLWMkUk4E4m8C1hz2Q333SUAPNDz1Whr3TjPEULJG5Bqj7XWrTJYRu5q2aeyVCttU",
  "key16": "4FD5EJoXStRfLyXtZF61zyELF8N2CwVhKMdTRPPhrz526qcJwbLuCfzhhi9kpUrGeCPeobM35nmi6TqnnsEtbsGX",
  "key17": "4CZozRVhsutRHzg1NujF6hXDLsW1sxA1ZsXXmcmZggbopGmec6TAVGEZdsMkrAQNH1DjERPS5XKaw5U96ndPGMcs",
  "key18": "5y1MvZW2c3yQYkEzJ78Z1B8w6Cf9672ydWsntuZw8fDrz31xCzvbkRkLR2tB9YDT8DENC4cuKpjMRgaa6uoWDvo1",
  "key19": "2qWzCj1yeudmDVtyoiqG8zQBg7mtqPuAoVZW4Rs5Q6vmzNTvM771zMRQSxj9LuneE4dawzuBjg6D4J53ygFkyg48",
  "key20": "3zj7Wz1ymtmfh7Enw6dGKtf5u7iLV7N8wFTNYo1nppfvJgf8ixJhHFLZBBVT9TLiUq8e257CFhAP9HWEetZyboCb",
  "key21": "22miUEC1eLhUJWkLtkBjh2uonLyJBVKZbVkeFBzdDaiihVAwdgqKyfFjRfrWejCUdH8Vxmh1WZMSnzeefPPTp86A",
  "key22": "TSyqFjaXbFSmHwg7ePK9J2wKxN8bP9nPBaSwhhCcgZ6GT6RWUPaJmFLwvBhckVSDfXYSFvWjw7W53bQpwJB8F3s",
  "key23": "5qqGHk1dmHAnEmLMtk1HNio9HSdi3oc4YQUU9u3JvoTJW7y4UNWu5QJNAPWicgRLziF4GSCadCGBrJikTNXrQQGf",
  "key24": "4RSTvNPLEKT2JnXuuwqDcwwfNs2XNwRupQjbT9LACAsctSUEegvmEagix9mosX6ZtwPCPJirjvKzYKv6yMYdYSXU",
  "key25": "3Cg7kD1f892dh95UBh3T3rMpRKY6b4bRYVxd9D8Rpw5sgHXVjofJFwd8GtH2pNgMHgpCZZYzaz6s6gVaNXuReFRD",
  "key26": "4iwPoTNo8YBpvRuPAku77NT9rZyo8BhgWEE3mt1oJpfK28BN1WnxNGNpZkvQpxmrj9QV6EuhCjY5FDa4cUXvBwgK",
  "key27": "4X98GYMwnxXPLf8DheMASRrwERQXA5sAorFzEbecaBL8TJVaBwSJtry1duERwmBVeWVS79n9XkB6Dse6CFLetRt4",
  "key28": "2oq4vZ1PMsJNDUJxcKBFrJ7jfEQ6g8xuWzRG1H7uyoi7rPe8KD5ZaQcroqVRu1hPfdkEN4c6xNdzkkVd4oAskH5K",
  "key29": "3Dtt4kmknUmQ2ai81nnQ54n9MKdRU7GMnGTJzJZhjLixAt8kMHm4ySLEAzR95sHRwyyWmdXR597fFZ5Jc6CB1gZx",
  "key30": "4K8fgecj3ci6nJF4iVcH51QuF2Pq3gKCZgxFZitmb3GbgihtF4i1p2R48QcnX6jDn2MSiVgp1pz6EgCduYDGWPHf",
  "key31": "35vQjSY9YA5sjvSqrcgLMjst42MTrkN6ZNhWzb7gtDhBxYN89qUixr8gr17KSvzvhVaxGHEMGigF7H1Znz1yjTyV",
  "key32": "4U47gxFrEhrtz3MXJKyRQQb3VzAp2NVkJ7esTCqXcmYRzhpipYaW8VzETdcuFHAkKwifLVoH7r8YwXW8aox9d9ce",
  "key33": "QLgSWwPZKeZK7zpv9j4JJpesPUuyhBSSZ4y87Cm82iSLEDs77STAJKmTsi1QoYMHEWak1JQKtCp7SagSixAqmop",
  "key34": "31mQVP16Gvh1C6RGDonzHxbDR3gkeyB7J1opkzwBN4GJe1hCERJWSP4bBSeq1eHLmQN1zbxH4uQkRWwwoLk42dSE",
  "key35": "2Ap1kDhw1Gwd4tLNGhVVVJFUsLucVer6roUbNZHFkVhVFHApTwLGchZQ8bYwezmWLF2HPpKUNhPTUaNPS3Zi2w68",
  "key36": "4Pjs4HKdkLxqvLbDY3FAGBk9cCChbHmy4P657o2fSrjSP37ZHjg6h81goxpSsu9VhdardL2GXLjecmSM8XjCmW1d",
  "key37": "2UR3DW5s1MQiZP7oT3Pz16dREyiGqJ2YjwU6uwvZdo32tRmaqzjHhPLp9u4mzGYoMJW5khtpDnqxyRtmyd6c2arf",
  "key38": "SAMjn7VrqvQgbTaErVTNma63pwQ1TuZseTmWxhivjCDz2T74JWZdgkTBhdJbt7nWEWQrfueReDgpsTriNHY7PoJ",
  "key39": "39SJLv5TbCCLDNqWro8czUFcu6yjaDPw2uLoJ62EBMNWuyjJY5C6raZYQdyDvuPiQgvs6AgxoMfHV3awCXSnPz6x"
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
