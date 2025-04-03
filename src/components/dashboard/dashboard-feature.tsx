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
    "2377334efWDFhx5MmgkcQfiNvK1K9Z71Hak3PkWkpZah1Ampr8rtxHWQ1AuLghQHHN8meUQ6nU9id8HJRHopKVo9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DdmD195JG1pR37vyCiDezG6g1ePvqvUpvTr9KSFDEEvsb9jtNgtBVKFvdvfzJAz2fcfhgVtnhnfuLKhDk3C7bnS",
  "key1": "3LcRrf2stbL8kCeck76gPwqtXNnugPkfF3UVHuUsF2horZ89NztX99iBk1zJHyWCdvdf3cwz44cQNVFSyGAGc7Gp",
  "key2": "4bM3cWDBP8cKnf9p8JtWnu6bScvJSqHK8HDR2F6wgbAbtC4CJRfxTT1zab2DKRZ41aF6K496S2vQ7PYiafqBJoCH",
  "key3": "ehQG8VnUwW4rgjc3GFS2u2u42MrqCSZkUCwPnhq5YpLvhKWZESNPo4MU8KU4keW6NaBbxh7EwX62AVYwAdHNdLh",
  "key4": "3uZLZWyuarDrS6Fn92X95qm4i39MoTcbt9nkxrUvBfcYevo6BSyRCUXy6Zgf9B21ojRfpY5MZ3WHEaoQ22gUdCov",
  "key5": "3XSqtQ8HmaXJH2NF9ATXBQ1ucfZ4vAuRuT49YDYKmp5xfgXLLThM3nKaCkSc9ub49PgtS6qbqHXgoQ7si49H4X23",
  "key6": "3DyP5NTodAU7bu3ZBpi4597sTuTfirEGegv5mnHkmQAdNmiTmV3eFJEmshTLLs6GgyihRecsSpWygbrj7ewDdAKj",
  "key7": "Gc5YrvPt9HgZRw7rDM4a2ix76E2sCw4YDvATqXzkBhakj6FdDVAzrNvM8zV4tKWA2TwVu1d1Xhx6JJztCvZZZnZ",
  "key8": "5NnBEAceNYuLfGZKJnjXeBFMaANCM3aNfxdV2nVCtNSGMS2UVxvtAzWouXTcLQoBFNYqHFAu129YqwM1dr7adk8a",
  "key9": "2FrTZowX37yZjj8Q2emmBS4Snnju4Fas1ynu5m833CE9W6g1BpXN9xzKUNBv7Pmts9ih1LhxEVifaUk7vre3PntG",
  "key10": "2BHsuCFvfcJ9nC3c25x9FXzYb5wfDEqfM1dcveoMGUwHdSSds6u6D18SQVsRhxXE6x42xyWpP2Mc1ojwEWiAdHvm",
  "key11": "3HKbQQ59mN6pm4CcT8WAMER64bE8WheX8worrSvBqxZiS19wpFztXRn3gE9cws7ZfEuZNw52doKRRvcweZqXzBwC",
  "key12": "64jJyDsKFK1EVchRbiFDy16SR6HAubagjM5UDGHbmnzzQC3PteKUSGjpWng2PnLsde656zUYFXUQBu5exajSnkvg",
  "key13": "3wdoZ3DHUjN3yL5sCNJe4HvtP34szfLbPAVvAekGwkr63EF89wFrQjB87xPoB6Cq1VL6kCJQfeSjx9sjLk4QQe4N",
  "key14": "2Wtf55iD9eKxuhV4xQ7x9hJM2jV8QwVbB7iRi6eQbNxbW6rBt8Yg891KDuKzgLw6WfWJhLfTzHzuLGM74z9JQ12c",
  "key15": "yqt28By9Bic19cX9FUEY8JCHGAewxiaZWJWnbjzCoVFTLAtfMvmSaT5Lb3tTXgfNESBky5CRgzqzEgMkhTX1qS2",
  "key16": "4QP67uKTF6xBKobGPGdovxHYS64rRYYddzzttKDoHcSQJS42NtvrPwbZZeSAt81tD6J4jE72C9KCNh3WmoaiWkMA",
  "key17": "3XYTrAcwYXfAjDm11wtpVwX8UBV38KdtmtH28BG83ty9pciMqzF7jJnyd7QtuhN2HzfSLJkBn1MAHGNxvchFVkC7",
  "key18": "4hJJrrc7s9mv8rH3X95Lu96BjzaFwbuK7pkxHoy8MYMpocEERSM82VEBvGmD7bGTAUFVWk9rezewnvzw3hkQYPd2",
  "key19": "2RDu9ZWXtucHYwW2cf69mKNYj3dgn6V1qkdWw5RDmWRGTAfNpDjGkvPA66Hjjr3E7z69AnjfKAyYGZ6zFqnJzBpy",
  "key20": "jTFwbKy45u3Dza5tYTMAz5FVwaYcffyRxqUHJnMUkSkfWT7j2FYALoq6vBhudX6aLADZ8oSTYfo7ha9WAWZk1Vd",
  "key21": "axyCsZGLvzYAGhWv1GVFHnCptjhtbBBXa2W7m3s1sgxqA57zhf76CM7or1mUcZNRm3XWwp2cZCse8E7WJK696tG",
  "key22": "5WDSNTcGxbUciQwjr9ypwfbK7LgFk8SWK16napDQajxp3z4R5dS2diAsPrM2737vzkjAcVG5RMg7deHZ2nmx1s95",
  "key23": "4N1GtNJf2kKVqGJbxTPE5EXqNN6eSdvTRteDszgBT4ggaRLM5gLEq3ES1ecDeverQZy56Fpn5pnj5XmqvyWfHfeq",
  "key24": "2rFxpwuAdqmnzGoP2APaDNwQvT1Na2Difdqe6AE6e9YuzzQEtT5hJBSEfeYjrdcWo8XQooZb6ct3LhZ8YGq1GNEs",
  "key25": "9Lo2cZs8YcUNiZmcn2SVKatXnfDJH2BLmu1Nj9aL8iLhaCKr1xP8JdqSgV59EA11M6JFREQQdQtkyh5aAPMhTSf",
  "key26": "5231rNqctawpsKZ1L5zrHdGGo4tziwq7bBqZjmjQW5KquNX5RzHa5c3RUwj7a6z5EJq14yvVXHbT1wUy5MLgRK1p",
  "key27": "zvybbsWK53qmKQSyky2rXjcmAxpaZfQ41V8eCXwCDzA1LPpLyhPw6Qav5ZqB4Gx7ztdg4zG347zQP4jtPTBjkL1",
  "key28": "2Z5iutNhCeYusPvcPWhHbnENLJV1vH1HEviPmpnSrD6323kTawVmYxDfHdSdq4Xk1BbduCgkp2qdJCMqxKyVs6fk",
  "key29": "5711JmeLQ98tyrNLPE3bhVoxdZhyyrdyKXoNq4xJEjaZLx5ENFkkbRfcKFmLucETqeuY3aNvu5JwR8bqEBGeJKJh",
  "key30": "3oogxLtGH7dL1ydt7sCujWaifUH4AF9uYQFDofCeTw8QDezrUbqg7cGKLbjkc3cEbAy5ej3aDdEfnDrcWsfpcADZ",
  "key31": "4Yyw4RSTePAKRT5k7HAb5AV2se62Ey6CZXGHY6RYMF415qbbeFbaRBZT4Ezxzfb6bDSr1hx1TTzf9XFzgWG9aH7t",
  "key32": "3XNjxYJ8QkqYJLxSiDEjwun4FqE4LF579cZvDdr9WJ8AvrfJcHUkfsRog37Ewck9cnx3Kge5vvbepYPGnegGETDW",
  "key33": "5AeJKb7SUanY1Qyz13hb7AcCrNjzridsQa1VL53vDkJ89WqFRbYBHkL7ax4NYZ5xJc29qGctqJANfwGRfJy4CdWh",
  "key34": "67kUSoL9qcutxQVN9Mod3koJ6PfxKyZbtz5wa2eymaxoQi5tXLGo4QvDUUWMfMidRHGT2ZRQ7mrvwCSLZ7vGYzJg",
  "key35": "gVBuiyq68CG9KAEw7N53NJnWN257YP9N9XDFAGX7iJUoBvfCxxQktMZVPFWK8v7bAbmiV97Cckxt3r8YgsmGwCG",
  "key36": "4tbQRYfgU9fVsjS8qne8hLFL4widczLCAYyrLUQCQNErSCpREqcK51MmozMLUXYCoKCDGCSmPYZXtvMuZAFDTYNs",
  "key37": "ogv9r1cpq7A6TMcayC33HDNZaYtbLVSYBkdeNaxRbiakry92c3bkV4CUrZb9fU5ThRz2Mjm7fwSS354DGtpKJ5j",
  "key38": "4JsMrmKyMLbNGrCtrgvkJo7tt66rcW478tQZZCQLH6wn3iAnQkiGkNWETva9f41mXM2rZoGYHrZJBhS4R91ZozuN",
  "key39": "gM8GxxYkAijBcF1XyHwRfsYFrVBpoD3DrbZueDCNMNPmi2KN2fRsUBbqkEg66bJVdrV9r9o25jKpHajUhZFcUch",
  "key40": "3JvrAv6dpVUMP4MYkmDN44EfFaYZBwyU5FRyQTZfneYDqLZrQPGR4xZYHPsbQP4HdC5VivNRpzJGvQmHKijDmPMk",
  "key41": "5PdyNQavDkty9Hz9T5KwHGGWpeQ9SWswgTc7Pr6D2V8uqshvFrV4XWxrzwLaU8QkE5smXFJa2zc1v4R3bGkXvEKG",
  "key42": "bjZ5n5YNLGt4Z9aSUnzhHGg8GM2SLTsQcEq5mGiKxFCzfscRBH9KmfuDYtoxJKJ68dmNsmeYPXygg6TKWZ8hsJb",
  "key43": "2WMoeisRVCWVk8omUo2RRQaJmaQ81u5iYDQ6XUbnfVPgFyCiPeoDBR2Txib2bdxHZVTYjf83jCsMUW21Qv15zXjD",
  "key44": "5t6ebDpAfBv6oQri3ijQ9xfwRbXemauMuTdGoLdn9EFipWsU6Pk3WjZVvv9GPhKXLXs3NgGmCmU4rdMMCwGcRUgu",
  "key45": "255zD6iZG5shzmBK5nb6wU2q4bct2mtjz4rKzn3FQo4XnB27vqUvdiKAxJB8Hjw1LiqJcmjBUiLTgAtb7Tc6zMfd"
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
