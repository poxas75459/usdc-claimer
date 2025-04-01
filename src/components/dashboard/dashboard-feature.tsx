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
    "jAo4jNpo7W4rDu1nm7apDTrCRtZwdVMC877aLtx18Q9TJqzEF2En31cefpBABjvub7wXuDBjRaAnJFDbHVc16o4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LDSfAuNkZVofyVtGzYLhhFTzoZadXjPGqa99C4DLbj3Qcw9ooqFXgLP3XCo47TgMZQ5NjMjZK9qRZMSBGTpBhvT",
  "key1": "4Fz2JMPZYs1a6UeQYZXphRo8xY8NZQM6Cc9EassgdQP3T87XSEAYwYN5aTHd2AAQtTwWZXUAzdg5TLGuoWhXZXxL",
  "key2": "4M3pDHNmgNJSthk6xYftbgsJgp7MdptPKx2oAiP1AUpPxUWfSSQd7r3wVTKeV3KZHQrwwqXF4avu3uQtFMZHWtHp",
  "key3": "2TXKDk7Mv5d8eDjAQ2paFcBCqqwFot6mTqu8AZiAgB8NSKzUcALuz6XoUvwGncwdfcrJFCeoCxMheT3ZPJzHrShD",
  "key4": "3sizfwgbhdcDoU8cbEJeZ6d6GJLsRES43jJPwALQQiD7MaYyHcpgBdtaeF6PXZpTmcLRYRhCM25bVSDT9bHwn9DU",
  "key5": "7zNc3XAaC5kdGfHRv3ozuqtNBonm8Ng9pQhAEeA1d2oJBoJQfbNsFXakom4KsBN6eAS1LPpYyCnzEAULzHhvprA",
  "key6": "2hggct6nTZ81eSwJ4DVMQzkJZ7unjAoA9eMvZz4KrsY7FqQH98PF2tzme39UiueEdfoQV2Soo6xquoX3XWbcEGUd",
  "key7": "3Cnr2ntZRnYMaVguVmez39ojLLJJ7X3GzzzpeacJjE7i3k6a4MK7zVdzmbXFCabMT2wUimyqWcz8QfQ2MHqZMCoS",
  "key8": "4AdzQqqYRKzZ2348kzmaaJrQR9FbjneiDvGXnrZYrHyQg331pYraWeY5qHNC2RDwH3L3EdUQQD8AbWMWCKV6ByVF",
  "key9": "2PtyQkSAq5BhZnUorvG3KT1ccHxEmiiRggA4ywv5wvpqpZrLsKmoPZo8LcHer6GhgCX3hjgmYv8TUg6KUXQKoEjN",
  "key10": "62xMi1JZSXJvvJuezWMGpERWcEfRbKcTunD3fiYTycTs8481oEwEYp54sPViuv2J8dh2CaudUykr24cNg8at1FTc",
  "key11": "45BzGqdLxiTFtkcJFT4HBTqBiZEBP7BaRJeAo247Q8Tr9mXJwK9jfbiUn5CEeqyYhwTubsowF6A82uFPPVtrWxHJ",
  "key12": "2uVCqiwQrLq6uL5b6m77PrzU6tSPvBbnyphTYkESxE7oqk22zeXuY2m8F56FYUguKT5HqJRG8vBH1XHD8kyWJxYG",
  "key13": "5sNRCxD7EdkZPDWyj7qE45SAd2a814fB3hXrhWa9m9WtXTRDDC3ERBktgdn9ou4qMbg7sCwqDAtCFBxRTbcUmJSx",
  "key14": "5ruV4tJnWyeHxGHjrr2vQN7cpkWFdeviUtxqJ7xXvAEKGfiBwY1Qp9wwTVHJje1ZeRdc3Sfos7qB5odFXqC2CPRb",
  "key15": "2ffqoS365VYv6wQiH3oW83mwg2AAryBDQ1ZkmF7gzNrQnEmmS9MnyQytTmxwXgZFNX3z9s3sKM9YfAXyvVsrWiHT",
  "key16": "22r3opuAZCB6k7FGQqkGSZTPZGycaCxcPGebi4x3KkQHtKG7HFt7juE1C24AXW7vodrRmEyXV25mEZebFaRgo7gZ",
  "key17": "27eK6YVP4N4Sq52fwji3oymGm35Uw7H2jScTV6UEwPfRmY2HpLusSBEE84KWhXCc5SJeH3C6Xh9en2CgdM2caGft",
  "key18": "4yMnxpjAMxN64yS1pJes8fsQjbiSMAdBBhDjxdXjWBooTF6shfZXPVkrxj9B4yLDmdDF7Q65YepUNJQBbkBVVN7J",
  "key19": "2ZhXst1CjTuJ3JPAodQy3kkF3z2TX6uxAT8r5H1cSztwhj9zFyhfhuKF94vwJQdfAo5RkuB6KGZmS61QNmcWZrMW",
  "key20": "3A9NvwgsDjvwWDAvk1XtBj3S92LyNiwaGpQxzo4wPWYfdDVwLtGcdvNCPS81YytiSF5y2jGP5AjTdtbbSWoSqAqD",
  "key21": "4dJVSmUKwVY57S3NUFPHX3mvLzeNtmbzMqxGRSNxVXg71RQzELrNQ3kXQQ6JT4ZXCDcnEi77PCoFHF1ZgurJMhj8",
  "key22": "5Pz2afUtoKGK2WRxzsChHWarnBb49uzfZo7BCWhbZAvnppXjB88LeNpcD4TyHjsrNQZEmZEPpJLeN1kjhbnZ1Pha",
  "key23": "3PWzo7JeaNYSPf3XPBadP1dL8uBYNL9Y4c2886YqxuAWbN3bGULcFkGdMWkDxUQTttJkcRWV7bL57nuPzB59du7h",
  "key24": "G1NAmT1SX6hzpxWBiBoESVKikVAT3CLbjp7UoZ8zTkv6ncfCW5a5JhY9xmqPTfZbLy3cbZsh6J6gvCxhtNcMHMz",
  "key25": "2U8tbnvh9rKcQuVfSjNbFN53yCxaVNAVZwmrQJ9LGrK6iLMNyE7ushKxnXrQRH2E83t8fWmypbCyaHvzN1zBaqcQ",
  "key26": "4NqjjjQoqxgkd9rgqvRtHSoSBg8zEGQ5dP3KJHDX8bgtAHabxdyefQeXVGbgTJjJyaDvWzY3LszKEUiPeALuFAk1",
  "key27": "4QyWLR1W2CT583BjEFPedtD1s67iHrD97WhBJXq5v4t9qzpvMuTrToYRWYGv1bt7JZqNVs4ScscH91eVanyQa9Pj",
  "key28": "3Atu9AoRvKUwvrvyoAKfdakRwjphopg3pFuBPCBH1HNp14EQMvpkz6SigcaE9ujLfMhN8maufvFHyr5KXyR4C9ha",
  "key29": "QsmvF768TLqL6GptG4WyMg5KtQ5Zek6Cdb2exj5U2PPGMpfoA3mWZk8bmYkrMmxDykQsoMbM7wt2es4wdMgoLW8",
  "key30": "35fGRR9VGLubuqN42XtEVCavHsEvanSHJe5gs4UneX1uvzipGu8DZVSpwMypVacF2THJNUNDXYraNq8C9Ni7XDA2",
  "key31": "1hVrzB12n6Qqw5sQHkJjnLHXCgXnQiENWJKczmEQVRbC3XcxgrY9jtGyk9GgArNdrKt8DWMgkFqF9yDAfJ4vVyt",
  "key32": "4cPAykZbGz985v53vtQoDuhfUdDL3o6NFS7Vwd5JYZ65SGKy44B6qhddreHp2mMVNZDTGh5yFR7AKdnPJfZ9UECL",
  "key33": "4VtpPfMjtnyATPmjUYmvzTyhmHoqVRgFsrWBY8icAYNY2U4tr71ue713Xp1eAYV4d3Je3S9M6xB3aYU2bHkLhiSv",
  "key34": "5q62Tzi6oQNUcGbmCp8kjVaYmxFxZzw6wXx1xo4JEPtqtqWeeT5pxee8gERyoPPBU2qF9mBQTMGud6vNWHPYLBUy",
  "key35": "2axEQ82DJseUjU2yCD6RbRZhCeQNMXBbg6Bfug2QZuyPjnX6X4vHfXvzGtJmEThmd7rYeRPx5KKR5Z4mTw7VJPXn",
  "key36": "k3JgWXu3iufhXKXQi44BVaE2VabAEsUKUmzVBEgSLkdMLbHEBoRS2eosTNLWXremsz817UjgegYzpEZNgjzdZfj",
  "key37": "5QP7TWbEE616gPeFKt9EApVj3KEutbi4h1TD5pQzkmXFRUZUQtEEJka2P9a3E6LT6BqTdC9hfkJuVo9fYjXZUeqX",
  "key38": "3U22u6wnxJTaiGEwbuL7iQicbPoJ16nE3SfsoojRgMngiWCxepbMMh91N1cp9FTLqxxZQWoSUvh4tZomyCqJnMuq",
  "key39": "3unuJiZtaBniBGREyxyFJcQBYchZKxEcX91CwvmHALSdxTMteqqjJJFAAwREhL3XiQdJ9KmwejtGyw5svJ8cKMkq",
  "key40": "3KzqQE6CrC963zJJaiYcTgu9V2LWY7kJZ1GpQUgAnGQT67gHJrFRJDE9KHQGcVUTCxUp5dP21ntnhMoPVgqgAyKh",
  "key41": "5HdJDpo7869FgK5ghYBsoraDyR2ZjAna7LnVrBvm3Cd4WfrAEFjxVn9TMZJCuKcMCLq5nHCizqp3UUWiJarQwf3n",
  "key42": "3gUjY4PTCKuLTb4k1CUDj1kKTeEQpND5L8cjzCuHj2EZHKDZdNXryW38oj1KNXX5SwL6zVCoUpaKLpQ32LYx3ie3",
  "key43": "48em3xETasNvntGLomq9Xmd891zXTGJZ3ezYuVBPiS5UoRP3w8L8aVNdqh2DHLd69ZqEk47bJSwRz4aMfi3wan26",
  "key44": "4WfrgVtUowujw4anYJR78S1C9TtpDKX4H2ZWJTVX5mpM9EZtxDwEYkNwxj3myL536LC1syt4jZr3koFhALVqdxdK",
  "key45": "2KVoF6EnsfdYr86DVq5uipV838EoA38qEMDAk6ndMDhUkRnbjsHaEb6peYbL33uL7mKaQgX5b75G42Kj6UUb2QEE"
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
