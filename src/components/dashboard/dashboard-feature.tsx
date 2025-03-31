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
    "4NfVFR3vFEnPsDntvrm4bsfAndr5LP5xpHZGDLVuZZji3QtLYcp1CF9FHDEGnRuoGw7JbvCiBQ9CBHfGshGFjAgT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cMskGNmGmcBvThQWY8P3JBeTts2ZF358JG4fopjVeNNibeGqnePgQCQnFnepn6YJvzb7RRPH5iAM3VxGNVYYdXH",
  "key1": "2TC7R1819KaWNXTkN6iXMy4e5PV9m47UTab75aqBZtRVSgxqtukxytiVsKcgEJZ41CA9hvHxkunedFUpoJ9DC739",
  "key2": "5e9TbehLc5qcCsKKnNUN4sUbi1fFo7Q9khLrayrJbavZtxkviLydjF9pcAtd9gASBT97bkLF8DExdheKgPTYWECg",
  "key3": "4rRRwNATpV14htS2PuHs97aC1A2RUcHpjYY2P1bjeTbXzxJ5avdoUon2LnQ6RnFtH8NuVLBaP6EqTJuYU5gThELB",
  "key4": "4o7dtVTU4WjFBCoNxcUWVEcsH5U952Dogkm5ZndWCy1CDwqNReNXJSFMxoCJUy8moapStFvXvN5kNSa6KquAV9Rh",
  "key5": "4eMXp8tDGb5DZUU8jmELjQBiEPprWamDdkcjxH9EQuej7Doh95qwF4spqDERUVUACYmpqkhfBv7mnqQmcvdqkrYa",
  "key6": "25uuVNtZg98TrgxgfRVbtRBFzKx9215dpNaCU55TDNob5xBjNT3ze4RYmgAbJPEAvHsRKJPrrL3aXdCebUv3BmR8",
  "key7": "3MgNzBdyZW5qB6aUTuBKJvaGrVeKEX572n5bTn2sQ2CRUkZPzeXARabA1hbHhnaznVThHn4o8FTSTVkkSvrcgxLS",
  "key8": "kQA5uE8SouNe3h7fys1dNmdyUST1Ki2upXYyFiXF4hsYmB1AXzAkMmQyp566KNnFZ1WSX82xAJ1RfmQ22Cne9TM",
  "key9": "5pvhzgNPqtD87KKiRyryvVw6nQ21F14E9nqYozq8uZwNxmarYBqHQkHbZE9t9KszqyeSjzwAYzMxT3sE8WPdekcN",
  "key10": "2Z7iTEatZcyMasRwyYbRkqsV3vRyiu7eBWCNbgy2r2WTCxurWbJQ78v7qdueLyp7seHDjYFhhNREMF1mg7L1PKBf",
  "key11": "2URjEaxrna95H5FwekeZmfnpj9ehw1SdtVMvrcNsEK42EWtDmMPzJ1g12HFn6HeerxmeQ4VRNVVegdr4k2nQWyTq",
  "key12": "5qzui4N39JCQUjgGyiugpeUQjgX7foR7SJ2x2AYPpHHVU6orsJsh9NZWDR5reeewpuLnkEMKPTXc1Edswod2Den2",
  "key13": "3GJNczdtGkCGQaAdBwwPdGTGm4iF3gAj3Hb54emxritQb4pSjgDqKDuz5e4f2bfM8zUn6tUiK3BZMzKHb7cN3fbm",
  "key14": "5wGx6n8szTbS3Qa1rxKrE2tcGvTVTqfVyX3AQ5pvc2QGi8McDHSWNYJkb32UjkyGFTFNCYwheo9pA371qAJaQhQg",
  "key15": "3yEmBn4VC5HsaAC1GF7UURVYBcu3qgGCWf1drmXi6yg3sfgUxQHqYb9sbRM1qASMj4zoGJzfZRcJU4fYfZLUmcdo",
  "key16": "4UUyYrEyC53KmUtUunRoyuSJ2eL7XEJv2iVVBXRxSWs4wTpACgvpyz8UyMgRvnPVvXXUoEQb7ZzcgrXaErmM9erf",
  "key17": "5fniLuvuPjrYrNmdMvmvRUF38Hh9R2EjDkBbNbsn1kyPds5hnsCPsiJzmPAVdtPLk6qWMkcodfi9kwSfGDEqTVb1",
  "key18": "8ViYzieFPVeDKNKvUYpCi1PCAjU211pGRrSRJV2dNudm8ahKZwcN3kvfNnpftN4aZrW9wP43zd8RBCKFkM3czrp",
  "key19": "2hZzDD5AkCM3mphqRAjkj3PHmuajqbMyyT6Mgix96sBRfDLz1r2Wy2GFnoMc8mBT28kkUmKGPdfuDNgaQjzncW2z",
  "key20": "3XG1RPMucCi7poN7LbdsUxCSLk7SaahWJNyD1tWJ5mWTtFAK1ajFMn8U95bL4vYjK35sZhnA8KDGKGLagc1f5AXB",
  "key21": "2wrLJ41CPyZjoGy5749VHs1XCZCsic5LGgNQUD3MfRQ3vn8NKJ1asa5uFxzVzC2rD1HiwuJAu6zxrrYRWd21fB8T",
  "key22": "4XLdoBVKrUqWEJAC6UruMsAzY1r6cEDR8jFo8GDw6t4kt28SV3TPC1yrrG3eSxDBsdJobfAE8oAw9t8ULQ4rSqQP",
  "key23": "Cb6pJ12Q1uPus6rH2W9V7PjSqTYartqRTmiz8aWAFu99Qaixh5NqbYJK21AKV7n1CQ9jZJUPgEjKM57cxKiQuZi",
  "key24": "4PQCU3HJM4xfzX43SNmcNUAhCbPvr1tjKFDs9PK5nE6SRqyS8hBCHEk5NzUaXN3J3WUtZyDox7xT8rNbJATT4KDF",
  "key25": "22BG6ZW4xrhjBBt4JPuJXeuDBYhZt2XjUzAACt78ZsMiHMRmD3MJ1zd1irPc8ssKsaH3ybCRDWKonMD5jHbfmro5",
  "key26": "cznDgUUoaCmq5HGnmFCRYR4neDKSeAYSWX61SBKeSKZCd1qrhjbnJtNzZdZyBkX9N2RNTwxKYKsMwdmM9iAQ3aB",
  "key27": "G1QNz67Hb8HTqa6bMukxUg9hRjiAxUpAYCVG5yAStSQJ4ckKbL4qjUysqZWFxXwaEzE1wLhr1vYcjNouw3eDCV3",
  "key28": "5pZq34YqZqE73y4ihYHbF6zMQEK2GCAVS9HVatz7Ws55uiBDeFhi5wrJfnQiWGvEAqS7mvCEkCrDaEeCg3JigCgz",
  "key29": "24zbMn4LTpmUYFcXzrgiaDfvCEcwyy5yGoF5xo7hDGStBiHiJHzwh28662yuHANoCA7jWQPSnpnfEEkSG5tcu1Mg",
  "key30": "2xKVqUpbApdXaYdJ3XaPsjLhJpFXvh4kWpDHyJD8E66YXtYzNZS5HSatsFjicvLNV49q4HM4keQL9FiReGsdpqbk",
  "key31": "3YfdZhzoXsRLkKopcDLQNvTqYAdBF8TFehApTKKavfkrpu46f8gV8N7nTpe4KhhJHhVQBwu9uUBLGyb2emkjkPCa",
  "key32": "4WQZ2jgAc8c8uCbMQMiJqYWTRM8fRQuyDxBgL6zRXxB4yN4RhVumYu889wHypwvJtEt1mpbaj4Zf8kVM5RMUoAV3",
  "key33": "2ky3j6NSPxo1PNUaVx1iSRtkMYJ2jMWGWPabBc7WDrGUAmKD9ppNjLwR2GMGWVMTEsDjCcahBP9xFZw3tJMnzaek",
  "key34": "2xNZ7Dv1fS2ey4weus5gSMgzvdjYgM3qCBnRiTbKeU8m2hsU6oQmxL63goi8CYzFyTCtNW1StpgQGAZJa1R8wraL",
  "key35": "435GY4XLqbSTrozFrEYaiAnEkU1GoSgV1gAfB8jw4xkto4EARKevJNrGWbDJ2vtdbet4h8tQBXDzSCuj3STDcBT7",
  "key36": "3qaQrrj8369pPm6DPXqc7x7HdJxDnaiiFEyEjk964w4GcZgAkwFkdm1rWy7JT3P8opkfqVkFNkbASdC2bazX9Tgy",
  "key37": "64RkerubunsorEVWiRsWvXbxXGM9wUW1zrWBiusvN6V7ADyS9CGaEDyfV6VGRSqgGE6t2paXMsZC1uoE1qgXMYYZ",
  "key38": "2Z1wuZ9SAUL4Lr7rr2SvZESy7iHLJzWcX6PiFrQ2Z7Uhkp6KEKiE1AtwRCVyqG3LBfopVezM1rfWbSNn9cQfhMFP",
  "key39": "361trN1EJ7iBse2DA1KRtpsJubzeqrjWuV3WgCp4JpWsxChpqrzTzZLwH14Gfvw6UK6xpSR32FyiRYpwcm1FWmAQ",
  "key40": "4TSA46HYrWQP6YBBSncnPT474q3CsiNPAfM3dJgAXst7k5hsFbvC8kn6ysYKHwwX5iDEgrqEFnwQHNsyiFQuBDYX",
  "key41": "3BCL1X3dts3kJMRnBqjncaDUkgdaCphtS5Y3Pat6nbnegrSqkwaoBuwTdepXXxai9WhDfZXcR8nMQwYWc4fiKkFq",
  "key42": "235zDrP93DCksX2GCVi1VX88dvLPziL7nZ9hV9viwj8HsXtFEp1na2BzUJ8PAYDLVG4m7F6wsfaJ5d8qKRAkGbKW",
  "key43": "3kxG42meTAUFU1vrYajyJ765MrDFWt3syZb1w7FTNro9zqCLDv5zSx7gnix5wYbpN6yZjeMCYdjgjH56fgW6XSQ",
  "key44": "8t8sifcktBYJFkbZArExTR9QEczFAptQu8VckdiPUg6reJNq21g45yyei8gx1F9aC5h43gJk1m8kyiUtAGjcAix",
  "key45": "2tuRSsKHGnQLphFPRi6z1TRnXkTx5Cr3EtKafCKKgt5gCsU9baSQ92ns52J9uzCnNSXtuGRahWNAaeBroMkjx8eg",
  "key46": "2ggC7o9KPSYZofaZjjdTE95j3EtkQ1senp4c4UEojEK9r6y13gEhVQ8bCeAcr2BnLQgZHitukW5rtUiSgGqNJaJR",
  "key47": "44XM9eW2q6Nn4fFaCjLhSZY3RJ6q3vKAJ2nhzTDykENB6wpXwmT2bT6GhHF6LeMgEHn8g5jzGZEBBFFe6YAzwZAb",
  "key48": "wX3mu5CZ4nwBCg4f9t3TRz9GmURq8MBt1RY9e9sksW87asmWi3o9AwzV1Q9KBWL9ro9s5bv2xiXzL1gqbf2ARt6",
  "key49": "2LfwRE3VYdED34FSjFhmuZJEmYwApKg6RuSZzwRwtunbZw8CNJzTYvrwcBLsVEz4qZZsgcuU7TPtmuMJPXVf2jVR"
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
