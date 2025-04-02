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
    "2R7wJto7wMPGkrS63UuWrEzasBAP7eAU52qHDFo59evJQEyH7hyjmvdEsuwVAqfKNXLrp2hSFckjxMy2HcZudXAn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QVayhHjQVCST9K8zdS52T9Jir8N45yQLjSJcURcT49sfBHQ3TuWoZRHsouD4pAw6LSwdsBnhMem4m2QcvN197r1",
  "key1": "43GEUV4e6WZjiyaqbZSKCMqLUb1k3NP6jyN9R3TihGo61CRvaf2JvF9JiZqhMHUmsY2oXK3T7PTnhQuNosuAE6oA",
  "key2": "2gutih8ox7ucYY9TcvaPn6C37kgCgUiWeu4KAZheJecDHPMBiyttEjQudmtdVYaymvfmYMfDQKLycCboRhcsv5UV",
  "key3": "4zdQvJy6mpdxYtEWr1KSstwhswzYRCtQTMtoGZUkaNmCV1drRqEsyb9EQLhNgiq2FiS9DiKcNrdzaxeN7PMDhwEJ",
  "key4": "5scf4xHzEWVVyVqDZ6Juk7N2S9t2vuUTmzo6XTto5n1HS8MSwCECMr9EeFVHKgHpXbWKn5pzHCiGGCpsiWs69LAK",
  "key5": "2gQNUTbcAVpwTmKmeEzRCSVseor6WTmGqWSaci8b5791uNo58aT3vxh2YEkojKpG9CvUhi1tUe6RRm2vzATKdZsf",
  "key6": "5XmRXJVqS1Un4dnrn4Ev5YpQxwBDP3q9vJpbCRhzcS5EcojmqxyDQxQteDCw1MoX4Ky1Ji7R6banC897y8mvf9o",
  "key7": "65WsXgTNeNtk3r6qh3G5GkxBhZj1jHqi7hgLka9W2c1hH5yp9kxeTVTsWsXtXdRV8h3tT9mwf6smTSMMBmnv5uw7",
  "key8": "4zR5oB7KWzCwVsJ1kQRvmC8RbQF86yNbeN49AbtADABHz1r99NkYcRTiwnpLBaFMZwyoS34CDA4A33YqRPwfoxjN",
  "key9": "4TsjepKTHwZiQTHEQbDKAQxkmvhQQxDRycBtJeUKZ5PvEJVV79nMQTTzDJQacJjT8Z85Mr4BZatiHC88LsnHCzpS",
  "key10": "2aL5GpQSsd6sVfRrKz3Sz5eSDeWfxLsBQtfzSZe7EkPn5CSTxkkrrgiE6fNvWMqPgimq7xRWQYrnLA3EmvE1akAY",
  "key11": "5D3kbStn6wYzwG1uXvn2xY5t4QXTuc3p37TkSEnHDTUsn14aqU89jy5hVGSx7fQ9UW7oHBsLB1SaQmLJKK7MezwF",
  "key12": "5oCSzWfZByKHtPPAfmDaSVKV9aGZrjcvvyRo77YNTcPru9xVY35ayPFtNnPzpF3SBm1TY251kPGFg3ZnEy2VFhPY",
  "key13": "2gDjyWe7b7xsHQRMrXtqUFiEcQEDZMkSEMYSf5LnQfFakE6oSfGd7dwwDGGjLHESf7HZnUU4fG4H9M2n2A3XzJ1b",
  "key14": "3951mLDQ36JEANeJbPEW7r2EfK8MAYUgftxuFLqrmpWXhg8d7HNjeTWKuni43YrR72j7dD2bnp7ZUbobHD3S9vrS",
  "key15": "3Z1R1mrdJJnRSRGitwM2p5r2TdgTwnAwk7KfEm9FvL7Mc29iav2kQEnM6ENxvCQ9Zjr3JeS5WdTC9Rh4rbVm6JMj",
  "key16": "4FwC3Nb9Z19tNwKHcGpFiVJ1YtJBMw7AEaayNa8F6R7Qc4m7Nxd3QY6ZGmrowNP3MtbYoD4igVLbD8tWPzm8WMT6",
  "key17": "2Wh2oMRYtuk7ScwNvWQU2UQF7GfJgmHbnYdNgKr7GpEPPGpJDWQvjzAYbW5N7jPdVy9YKiMPsx1H8GA6fep8y4a9",
  "key18": "4p5wpupjKzf8NFWRyksY4NugzfPqoCdBW4SDdnVwBHGEbbamCE4mQGeUwz8WM8TSVDAFSdSDDZP946yW354XvAgw",
  "key19": "2MLvD9fP1mKEqRyrG8kc4HzsaLN6v1eD4AwN4c9KafrYpFRd3drsmQh1P2eFL2uG8vphQFHsc8dYbvGM479oJBvF",
  "key20": "5Gu6QfogAk6c9BJHGGEFbJ7G5mwcGzPCJL3XzEYTDGNuL7efMtEK2fCevpGY6WACxjTz9MDFdJ4hAhyiE4v5YDas",
  "key21": "5ZD2JhBnaMeepmnjd7MKwatCjcypaDYbQgGr7zm4vrNypV3aiJ4xcd1FWEUTn9sZo1vPhSc9rgWPSSduBpTa5pMu",
  "key22": "57xiiv6vgFZQizv6zy7VK534gwXatMu9GFFgv3YKy9VRdd23ZKCszYeWYfbau1mrxqWmoTmxS1qrRAY4S2BJqEyT",
  "key23": "4ADvKeXCvXMtFKfdN4kQK4jnvY9P2fQYjC3FJYwvboP36xTJ8m4EsUoAXUnGfkpfTpc1qdRSAxQZTUBPkxf6WKtA",
  "key24": "5hWycZCyuWpP4z2LY3wPqhnCxCt2q2bHpUPwN6WxJkFiUk56XHvjeyBNQsFwr3371izhhm6Bn5StPRLBCiZL7jTG",
  "key25": "3TcTmbkJMBrAxg1WB6qLP5DE2DBGWBpPNwe2JBV9EnCiv5MTdG7dANfibUbEdMy4xEeA7E7gzwN9buwK3FCQU5EJ",
  "key26": "2uoopTWhSwuDvj7W9sxoXgLhv6bpsc3PYAvs97mXDYHf3ecJjUnnwk6nHV4iCktKpU1j25Fqfifn8dyAGsivYSw5",
  "key27": "2negmifxnAPbHtQkTNRMR7h4rBF2ZNeauqwFacrorJe2tVntFSapMY43PaMtZmtEZF4R54HECt3tJrBbJbTXwcyR",
  "key28": "4RsXPtsV8t8E2VaqR4bUo7rvVgUfg2o5jWcxYkhG23eJvuutzNmCNAPWg5w5EDcA7iZCsH2jsUkdEt5fgg9CkyPR",
  "key29": "5H4XEcdzoTGUGQSPn4BQLkchujtRTBP5rrwo2poTJ9SyVYVRRBAiNpbMerb1qhWBKy2h1zSB3aGGG8qUegKG9Ww4",
  "key30": "5b3FCSjfsWJBbqHnToNgCpqEjZE2SJV4PqJMJyKXovhL6MGUvfZfEVEiiZWKjHrC9VANsErPddiG5HpPg9Kd2hiE",
  "key31": "5oWgSZgtsgJmhZBVPjQzq1DAyPatUpckYA1VrNFbHYB9aW9ihw6YHQs64kiGQxDsBCkks8hmviW2hSRJt23TqarB",
  "key32": "2E7RgFJvqYHdzQuQWxfyzNVGMVrc9h4vCKQwmoh8mDjATwhNZB31RJXgeD19yQeZRHaGEY8rgEg6YseGPrcdJXYs",
  "key33": "3SqaQmmQiQXdHqD9k8VuUUWTort97j67JdtDovv33dgxBVMKGfyoJC1QVdCNHGeJZV78Di1o8Uh2FYaG98ifTKrU",
  "key34": "666UEGs5EkcZKSnibehvoCK4r79NS22jG5Zv7fxgCMvYZv5xwrA73UazE7Tevtnf9bKMo7q3f2gdiGY2GJGAb8Vp",
  "key35": "5EFn9msPhEoZzm4v7zboBZCTqKWgrke2Mtx1aDqJQNtqmtUSnMySZQfPriJ16YTP2HwxYKubStbmBDMj2fVkoXpR",
  "key36": "4zQKErp2TNdDMWGxEofHMmDGPNjYpGNsbGwJqGTSZJTZfqX7sBwAVXBx3gCbUcnd6RYhFqTQ4yaYtv5hXJmg1ciY",
  "key37": "5BK6S8trBED1Xc54XKq6fjbWH8tUF2MFW6biRWu9m2gFcyJcaZ4FCEp4YM1GcKPCgorLcfqpkoruCfCG1jxcjZ1L",
  "key38": "4acfu8csptPQjirzV6svofoF9toqmE36oVTtQj4LPk8TXouNK3z3xxKjkSTDEoEvFfQtJomfTvpttU9QZ1FC8Pkk",
  "key39": "653vCgKzScC4MTLfD92ZFaQPecub6n3MRqqKaaaHRnRZWTpH2hGzd1qLX28YCn9s8fgfrVYh26fdznxsN9rHbKUx",
  "key40": "4ijpKC2hnJGtdQJqyqm81auVjeAjZLpb5BXMWp7jHLB8rzwQxtRPWM3XPy33nDxFKefRucFBXmAJ1mew3H2yxkgf"
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
