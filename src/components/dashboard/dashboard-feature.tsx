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
    "4gYnyuyjaR15qg8bXZfMSubnqg51dsxEhpeTzZVaJG7v759ihMwVgtumPKLyhZWnPA3ysnfUJmskdhobwJFWkwA9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bUu3FALVJjd2iJYLXfAP5UZSUj2pGJinj2rjcmYNu4AhbXmhvQQEecCALd8NMzbXzecZf6FdD4dwDaKvU9PAUvS",
  "key1": "5kmoh5LFHb2MvY1V1Big6zg59d11ZJc8kTdU1vEJFB6g4UipSyfE6iVJTPvFwfhUTRy2R3hAZv2Pfa66G3EQNjqr",
  "key2": "3C6YQQ5cR7JbAL2Vb7zCgb8KEXjErPbCnrVArSPY6NQk9dC3xT9mV81VJRjzZYuETqfUatcsT2FDAxyFNaf9bBuu",
  "key3": "2AmCaZKhqTvwZyVHENm9eroUBDjp9BdaJCfr2MdVxFEbd7jHMb86JgjSW4x7DsPGWs45xMecuASawHWfneKEW1Nk",
  "key4": "263qUBG2vJdcuTJGov7HpDW1kMtGqzBJRXRJHvaxLPYvhw33jTNCupq4Gd4Tfv1ySSxvCCCMrKm8wTJ1CZTvMLmG",
  "key5": "5E1NbHTpxsnbiZrYV3huVXCS2fHLstcVjKaou8ZDjjRwPHcDJsKpfz6zVxxjmXqB4UZZampNvqhBBW6UgL2qQYky",
  "key6": "X1TnGLfuYhCP9ZdJjsvQ6BrEPBX9R5DyEMxXuZMntiY41xSACsJzw6KyrvMLqAPCm762VNsJ5mrfYkkiCh8MnPX",
  "key7": "2h9nFvRMgZ7vZgVWwx4W472FRUfD5UfLTG7TcCu7s5SfLZPoEN7NpB5CkG1FF2SRPyMmZnzTMm5FphRhk9XUgVhb",
  "key8": "3j4Yt9i2bryWKzNcuscgnLv4DoVEJJBWPpwhhuVPf2t2wj1FLfZCpZN25iHJjNHTd5HsaMpJDmbcVfH49sDLuuCx",
  "key9": "spK82zyfTfHiTWwowUTFHQQSfsx7rceebP9xPYx9zkTuu6CnDfiL7pKysSi2ckN4EUX4wim4wz5JL8Y2nHYnwqN",
  "key10": "4euY7Sf4GPbFA4C2E7NcGZjoFExy5CWN2ky6ymkmX4UZRB7sDoknJxX477V66RmJzX56qfTgy8sDEiKDU9tqdHjL",
  "key11": "47uewjKEJ7gL3NgtvW7dhHbXfAo1UBxUUhBjA8zqJDAWEj4hJHsnL1R3dPosFGatkrxAgJGxn9nHY7kX9uP2Asic",
  "key12": "mMzkXGMq8ds2ddCVGWotvCfAcq9Dj2vH2XdmT6z329u1m8WiJHyx4724GPvZUYwL9sB5CqiHgaa7CvC7NrZAk28",
  "key13": "Pd9fjLsd4KRwrKgP4wjzq8y53sqzTsezBTHoHZDWzyFbrBvMjDVmXkNxsahCjjTqePwUg6dsM3MVat3PmGCnQx3",
  "key14": "3ir5M5pwK1GTMSQhY6fZg9WXrec917KFsTfpfkmPYMYZEsPDR7P1jFXsmDq7kY628N7VRaNGBakcXs53yYW2uNAU",
  "key15": "4J6uNjrAXKv3V7LktV5zVAp67aA7HEjEKRuQUeYRc11P9QpEA7UXy4LJMmRrapRUEwZHCNwC78JdsoBhDrvPpkT9",
  "key16": "4bBLTaRQHGtLziTNDVXBG8ayu56AyKNUwA1KGLfaP3kmCKabQ5hqLiS9u9hB3mmbRMxWytJpSLR3RW9PWe2MHDWS",
  "key17": "3GLe1owPBNPU337VcfHMK115L167YavPcyCDUqHqTEgQxX652sHHFy4rdpZZawoRG4QvZUeGBEmiBNxLraxnajTp",
  "key18": "3uUWsQ5KRssuwPjuxKR1NX3SuENJHZHUfbwezKE5hEpd13QXLjcnbEHTitu2ZMHAU4tskF5LN3MHzYzPigMPSJ7B",
  "key19": "3vo4LTXNg7Jhg5wzhxqDT2LhmiFZnN1hcje7yPAeFUUzV6CwMDcmnD7NSpjfoTBP4QyGFK36GBhaQTnistjcvuLA",
  "key20": "2jUzft8LSfVattuwsSs1f5sJVsHmC81BByPmJnGLGB2KLZCAKiwXyavd7XLnJivEuLiWR6GavzS3ETGJDmsPv5Cw",
  "key21": "44QiRuPAniWrgv2NLrk2MUzhrHHf6Ev9Q8GYLARGZQCJsY8JFew3KCszFpbUpsjfopaXjDvqsTyLBswZyMVWMY1L",
  "key22": "37LGoKJepT3i8j7GfCcx2tduKvxsaYYdwJ3kQZUvNvy6GRh4MKUktjiotJjeKg59dYPdR2USiaXTWT1rqm7FzNC5",
  "key23": "NPgZ7i2PF8GwPVi6fYPeciu9hT1VvV1aFLBHkkmgMcS7nfFXvcPeyw6GggjSLhrwzPgCVCsrodU8xNGszgZiGth",
  "key24": "3sjdpmQiPDGun9nzxokFLyNCKWgGwNwqEY9JjgnwLyGFUR4BHjtzTT75SGYvkP4Hq3dJUS98FcqX8dGnpuY8NFHN",
  "key25": "4qDUsuYvYbTt4Hfhb8RgQZwyLZMs1Xrsd7CUs614ofWYcN3wbsru6oF1as4RATUpFthmFMfPkvw37sTHs75KQKab",
  "key26": "5FmvnjEEPY8KjFBadXtv8NeLSeTCU3TVLapbuhuMfnDiN18jJ2v8tWrQxsBKEwufgcukX8a6JCYCJcZ6QMhh57tk",
  "key27": "2QXgrnKUGxijKaS89Lh5GS7SQs4suj8vtfT3Yg2LUfcc87oQghay7yQCFSEHmwdV4cqLWVG4XwbnGv9VDM9UfcaM",
  "key28": "5yZdebmefrogV17QbwXoTEpfMEQ94mkbfpchBF7PXaM1htqj2qAKTnQ64kQYBgcGr85WqKfhZhKvSNxeRRFW2yq6",
  "key29": "29VZt6zXc2T65r1E5PRgubSRidPCTiU2B8sxPRnuv6ugjAeKSWf2m16ZiQ9S3cLFtHnKkkrLEF4yviALrZuYzAHX",
  "key30": "TL2eJgNC698bT46cGpDbfHzsNCkTeCJKxkv6fbQXVGkZxmi8z3mXJZVtdFVDwnAgTLjJYdkXbTsU1jsLSSdrYgF",
  "key31": "4tHzhawipnM1cC5hnedHpQwNbfPd78yPm56fVb8ZuwzbdPRicoVWJXQJiJihjvEGofwXBSFAAxBLC4ZM2ZnDQZAc",
  "key32": "5LLJFGQcUmBCzCqVpmhUbBV9qiMMgGtHmZ17ZYbmeMoVUnVU7aS9tt9Qz2QeWkDU5SRzEQDT6uFhAhbYx7PyrYrw",
  "key33": "45ztFuS5T7ingzj1Xu9R1zP3oMd8QeB6cm8VqHer8zZwXxr5FyWyfWmmVCyJkcCdDawnvLoE9tmrtqMo6kCZ9ZXb",
  "key34": "2XpuukzGYDmsngHoD24yyaKgFwAxfiPzcza5rzmpgt4a8YrjmP4ET6g4vu3Nt1hfKd9vvEzm4nAXoFknShwCu9ef",
  "key35": "2XAijMVcE8gqfxfxktJ65ifQn4LFMEgGX6u2TZUsFVxMwcg5F365qXPoAtUC2Le4czWQguL2dVLRufKaYJ2kAEjU",
  "key36": "3tqBbCn6vfMNRFVfFXi7CegP1Ws4KBSeVXzbrAf7EDNUSYo95XogD9ssCpPWRvujHhTRdbdCg1VehVj6AQdcsMi1",
  "key37": "3TH7vfU4M6j3D2Y3sY8fddydjq5ydpuErvK6M45Wfeu5MiH31Z9NznWna596PbW6NwZ8kVUtjJrACUGEHAgGFrGn",
  "key38": "3X3NYcHhb8x1woWie12HSSkAzcAdpBJEndaQytcWoefuF3mq8CFJjkiZmmsBH8TdaYSwSNaoeTTVLmaoFG3Dokfy",
  "key39": "21oas994W5QQWSSQVErwUZrpKB9fLfMmR71hMapctvLSMshYSJQY8XrCCV4jA7Rx6dzsAAD3wWu71sC8uUaYgUQo",
  "key40": "5XZo5tVSeKChTMR3Sb6iXYd9m5AJfEUHrTG32AHT6T1qAzAHHxH5CqjLwRj6TvvewhywRf5kUiAcsGn1r6wESRgU",
  "key41": "4PisiLFsMP6AKLZ88ouiL3ty9fSBsr7UJPnz4MpacYe7AyK8jMZVBVm4chWrGxM7dz6UEpAY264gLT2CKvBeuAB1",
  "key42": "jz9snyWijbZznSHa3M7eXRYBkgP3s9U4GNxm6AfByukZsePzU1XkicapFqJSrj5tpqfDojL64Zu5uL1jYHo7hLw",
  "key43": "3jU32P1ut7sTFymuf9PGMyZQczCSnZCRiw9uXfwwFypEZny5KCs2kMgkck4m9XvKTGkDstc2wah1oUzFZ6deH3Eu",
  "key44": "4vVGiuPMzqnRxyTMoVwKWaJPedqGe5WGKEc9rXxTU6XXAo9JqQXyEPLZ4dCxSZXhekJSRBmwegbfz3qCuY8nCv6J",
  "key45": "pR5n3UH1hYwr8At6CzBKwqBnRsZoqLsCFia2AwrUgdkQHaFQHw2uEq5KXkAsGQXjJubsYoLgaacTJhYWwaeEVTk",
  "key46": "HvjFqddMKphwyRFVqCDDANJvk6ez91QEfGSRGgEWfa5xt6qhMBxrGwhxNAMZ2U3ntZ1uuJ5MgqSDM3mjB4XMfJB",
  "key47": "5xeWvUNid8ou8MegPPRyBEeNvnLtpAVDe9viMvBNEUSPsuPyhPTL7SkXoq5zPKidtiFbgWsTSHPunVUbPe9qULKQ",
  "key48": "21SyMeSeQ8GKscrUtEjXF6v7xQgUrqWeRj3gHUbRByjfdBfUUnagayu3Se4tsnELtbFgqkcATT3SFmNhqnhUQ7b5"
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
