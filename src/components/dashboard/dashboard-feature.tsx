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
    "2KWVTSQvUaEsfZFnP5UpgPQGEV6w8PbVfGNk8kTvcHo8TJSp1nytaZ1SCtAXM5EsjMctpD9fU1AUzZX5Z3XeLUhj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BXaRK6VU4MyMiLLDQPiu3qY3spdbQR5vf2UFKLdmhUEwVLF17K9KTuzZUGidaiJF9eZjXsYeDCbDfau2fubhThV",
  "key1": "35hfgY4vgkPhjQLDbpzsi63V56StYBdLBuyEGwzsNEuYfDNHEoraBkWFsh7TyMdN2sZvr9231V1LgsiGWf2q69hx",
  "key2": "3Ap8XZnXXNF12GAxGskXHwNBak9ouKxwoDiE2ePptP1cv63yYBi73LdRezmfpia3oq7YqGJG5jnmGBTaDtrExBJN",
  "key3": "2H6n8qNnSPGvzAKgJJqhPoXLJm3465o7fELdVeF4BsF4ZJyu6BjpkSn773WFz2ks4u3feUJ2oFQu3LVKv6eXiuqm",
  "key4": "3EX33maAVQpi7iCM4NB4NWzZkyysstQzbpTfKFMHRNpDaVkSdVKXvq3g8wzzkY6oQzi6VZTsGCKAvBe2JCyqCpiF",
  "key5": "5yoU4sogEiPJjBp4otdyfBUvpcNKv525TJRnUCsjc877XToqYFC6JbB6N74BRw7iuKsuM9ZLN7D1nU6i28TG9ztS",
  "key6": "53P3H3dyMDk9abgzDj1m9VtJFWqgc6uTssrhQcQSUxVNtXC16saZEyDG2BnfoxFMjZTovW2unp9Gnwrh6YuYsUrb",
  "key7": "3z2uSH72SDBCqaFH2ec4V1h9z21tiR8Sfe9yMkrSJUk9HLkAJu4tHi9myMfcS27KtqXtEpGeiwUNZGL8uTKjofxA",
  "key8": "62HXmbdK56zNvA8euTDzLVnfeei4omqybCapq2KbnECPurFGK5gERbgSZ8AGLq3CmbDk3Fc9WbMoMQyt2TTjY26U",
  "key9": "s5Bm92hG1PagMbmBB7rgbcM69B3YheoQWWaWaGQhGN8BjYAHHDvxw8QfgQVTyCW6UyJy3XYJ4MqEGGRYTM8i9Y5",
  "key10": "5Joj1JcvTyx4FKQQ7aAcfwMSDbFxktsvdP3Y23nFHzpHonPU5e6w6iLvdff9vAmj5rm1jCtCoQx1KDMcEVbaP4MP",
  "key11": "4JmyX52SW51pfAnMuYbKYZj1wsgzQUDUmN4Mav9ZPURF8GHawNCszbotCYWdq7Ck46JzensfHAt4rpZjPUPgXYX4",
  "key12": "5FWeFuaPu3wfCkM7RtKAUd1hFR9AndmcSpNjPmuqPP7ybNRqaT7MLSiKV1PxNVKTJV6Q3TFSqCWzY3msvfxhSGdi",
  "key13": "3Nsioa1wKpxUq2i38fRWexT3Tu7oQBVfasYWwYD9gUQzgZxNrGs7rEcz84NAyE8CeDPTj183eVFXv1Av6eiVB8Jb",
  "key14": "5u643jhEYdjsv3kAHNLC86YioRsXsUW8SPVt2nZmvrbngEwihiv3pYWt7rsF8ZzvskgZ53PxJJxkvWrAk8sdJVVK",
  "key15": "2yT8PYfYNq1RH9Ey1TE6yfG2y5ijN8zsQx9pWpQ48U7eobtzAXbMhpQRCwizyC55QW4VB2VyN3Ezge9jNm4DEzsZ",
  "key16": "5mzk2xCWuhcaiSaquUpAQ3wRTuGxL8uSrpcYpsZSHRxdkZi1kN1eZV8kEPDgQPFTwaQUyY5GYxU7iphqJFewk1Zd",
  "key17": "WSC2pqjpZLsKohX8bN5xUfaSpUKnnENBfdSryLEuQjow1cfc1rAncTSFMH5iUSMn17z91XjrdSgvk8nkL56LXwU",
  "key18": "4fXWD5uXvTtXVUMnAUrhGzcrdFbpPLEerBA9movduZyX5J5QyEpBHbr7uj1nk4R9RziMDFQtnDbQUSzZVCTkvmWS",
  "key19": "59pGb7FgW9wHGpax96zjTPxwL9GCMsYkKP6bFAz7WE9TsBeMhyavbtrbX8u2yUHo9PDq8QRNPp6zccVF7d8d4Qc9",
  "key20": "2pb28Y1zLLXFQ6w5HaTSX35hyZK2WJg6ajb4v5kuhNGtQTpStwSbzUkM7ApRjHWL8phuPcWwVKq8WvRDTDzZhvXL",
  "key21": "3BgaGHawwJxJXKFD8faAA7UpNeKuQU96Dv3bW35UV89JGvp3UScYxV1fDCh6F9eDXvJh9UimLDjw8wKDp4FPAHxh",
  "key22": "4QF5MQdGqm5eC9MLYnWYdf8FHVB2LdEb2LjtUeJCpF2s1eGBnNRzrZRrokQrjpLQVjxudx9tf3uA17Y4dz5mbNtm",
  "key23": "3EMhXXRVaAgvAwP7bgjkrGfxnHJkjPvq1z6pMjkF55DL9UgKd5WiFcUQ4L9N15W7nf98t87XSx25DUjGbbtiL1bn",
  "key24": "26h8TeRB6C5LkZSD3fcN92jxhuqNc45g49xsJAhYvuj4SVv7iMJRYbbpJigh13QhK3717GWUkF5v6rsUEQEuu4Ak",
  "key25": "64e5cmYh6gD4XKreeQHcrHhH3vRFi7LR6UxLCSFMLF1g5UUq78Khn4gZ9Pd2BPZF8VxyZuZFsWxYrQyqQnigH9bg",
  "key26": "5NqVaKBuAfqX9MACi8E7ic2t1U11m7znEKuJdmw3dHjnwGQFAtv9CqEEhfMQeFc5LBaT46YTfTGm7hrVoSt8M7CT",
  "key27": "6b6eZRMc228taLeKthg7QDNVT3DjNAwMUccxGMVdz3mQ8WoZVYrdD5YXbErByB6vYTaRM2hyNQgNZtpA86Qvtxc",
  "key28": "55FLCNULEMV7eFD2V9qHR5kS4WNJQqQp1SHcYEgTn89apSPKZySUprTqCYBdL78qXgH8SeERBsMLcqH3hKw7zLkd",
  "key29": "3SGhsb4eKwZ8ZqhpL1veJ6U9xyitwNiSUAEYtMurRXdsufCHoy68dyzP1pTJJ3YezVtxdxcBxwQoV5qWnah6LTXe",
  "key30": "4syJhXjprDnnMUc1SqnnC7M3JLVJQY79Tgqxe8y6A59pQUkkL5w9erft4AyeLyZVtd14xfnSJHCeRGZGZc5hP2xu",
  "key31": "2vofYSZPJiVddQHpgafsFSuCD6TPfwP8FkSnEdKFWkvSQ1vfU1fPcGwZJAWGUottWrNTfTcj7p3Hru5yevsykaBC",
  "key32": "4wES4yqBoq8CjpQUp5CRiUbXdwT19S6sdEeLPEXZAoE6Nmz2eSKDrSNdL9vGXQwG2RAA4jDJnZaaH5FBtRo356Qz",
  "key33": "41Pxzce1Mf6PR4zwTUCJ5x1eabgQedueGKt3f5x18rnCMWsmrbZBADifC8dtm8JwcYFoazoeuAiY6u8gQCV729MK",
  "key34": "3ii4ANCFPmxc21AoVv4n5dbUyCwsrCQ1m7jDwni4t5e5HqgQSdzFzPjkvEUz7KeGH3dcUyJhuo68PQpibEiB27vC",
  "key35": "4PdY5zHeJHMBtVzZanUp8eajRkgxXE4szKN5xjjSC8z8rALGzFrYboV6TtK3PMNwxJmefPZ3coy5RkgEh542UPJX",
  "key36": "456z5LJ8fHvJZgxdjJNAUXRaeeofvaQ9HtXm5ZyUdSE23L7c9HdQxpYjjgqiSRY8nCfC9oEmvK6HzcSwFfs86ctf",
  "key37": "5jPdyz6ximUxnzUSgC4BgTqdJmpBLSMRVcauPRacQ2p635ASmh9SSbrX81XAWuvjtEKTz4A7jAMuZv62za8UFYUV",
  "key38": "27iA8bHCgKaSgdt4FxfvAxEzWuP7VKsihm9FEYG8sy17ApRKyTZmHPsc1CD682vAtbZeNKraMNoBssPDRogkRED2",
  "key39": "5WA6KBt4nud7q5QpcHmcow5WeejGagjautbhMfon6kKEzEYoof1B78sFFS3QHLTVMoQTjt3GWRrwGa7HoEyokAbs",
  "key40": "2azggkGCWaQg6N19VidfUqUPN71or2xkBQsTFhp2bVXVeBQY1uXDusGEr57bZ7cqvJKRTQrMb793knVkmXyHBuvQ",
  "key41": "3SeHAT2Le3EWpocamy22CGgq7cYwgVT7TVDgmW2uPFsqJCZoM7d7xup9U18MjKbKo2aAdXzq9HrpYiv5NWt5X3Xj",
  "key42": "4PTmBKG5kHf65HQHF8ro4E2T1RRBAp6LtM6gi1tXMxRqARrJhysnfeA5DgQhzb5NwB3MacENUJf6GXrGzCVx9NSf"
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
