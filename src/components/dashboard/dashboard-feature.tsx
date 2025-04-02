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
    "xo2L9xsVL1FyCUBWG1974yetWdFjf5RHbRCyWzVQrAywTPbmLQvwE9ZXCGH3p9JsrR2Agyy7YuXEMD9mvpyyZYv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45JuX8dK7DxiS7Cc8zP3seJd3pQBssBy4k25X79uvpsv28ew49EhUUphS2zqFSQVQHXkKoYVDoWXpEyKggjxFaLm",
  "key1": "3XmvD4rxqVxoW5LPh6Sm6BDyMYoTq8u5mgyiEiZEQWZaSMa3TM4yBhA1R8iLZCkrPXhZULUuMagT5Dii7pNV7vyH",
  "key2": "3Y7PDG3ZtxdqBCyiSKJ8KAVuyqEvEEhZ7Ug5Qe1S27y4SdrbrR8BsdtE4M436qPfwcZ6oAhKUkHouEa3kt82YVUj",
  "key3": "3ne7ZB89vahZu1JzABRsJTfQV9CCjuDt94jbzwMTaGxY6CpPjgBWXE6h7Wb8CPv8H12M84qC1dXpfYwPuX9Eq1rW",
  "key4": "3ApSBMvnHjC91s37HmTrWeUe7su7BxhA2mYckRhraUhG5AgK5357D4yM9s7PJJAh8K6Kx6b23TrcA2fJjPwXFc5i",
  "key5": "3mqZb3x7pxi3uofF25TxWDTmf5H6utT6AYjeQmPRgDEF1EXL29v7qQC5K112kgUeXsDmx5qDsztudC4jN1MDjLcc",
  "key6": "4LpQ1rguoiEmVi6xawQp2dj29s72QLi56Uyh3NRVbELBAm8svz7Kb4s79dMYQb3vogYzQisi5JqaMDLe4f74UDD9",
  "key7": "4YZwnX5rNVW5h38onTPFW1xc1ezdMt3Ac7k3EkWSPptkVUH3aKZBSN9vYVoLN4M1gXyriCoHfwc3ZQrsTXshkTM1",
  "key8": "5Hp4KXz7jj3HtqFN9DQcv4HDDB3uJrW5agaqjvFFmDziAcYkkZZCV5Hahq91QpMXvzW8nqXmL6x59cau6G5Gvptx",
  "key9": "5U96HeKygbfpQ3Hp9j8BDTwH11Y8uJwXcM3EN1GJxoPzWX9FpsWS4NSqSiGzXLHr2uc27rpUbXd7hGUgpUuPm6XX",
  "key10": "tAQz6yCegL9yQMhcJ7pvZELtRFtxwQFwvr5BZDn1VpjNnWc4V3nXQr44MYXxUrrP34R56zgYmydnhVDNTzfvb9M",
  "key11": "3tGvz5cWk9WNDTNumYxkGYmY7Hw6gVniqH6fza2MB9pyeQpcVJdUqPb1LejX57zCxNCNxiLPyHLEG4iRsfevCbYv",
  "key12": "4EZpEk2TTTnN1qUbMLim4cWa4L1rsR6JwiFGKa1R3LiqaPAGqTdefjZvraG1RHapW1hpyb9yYwqB4Xbax6E4PGTo",
  "key13": "3XvWPHzpmwPQRtipNGgjmFRVKq5CFMxp1nxsCmPpcHq8HNPajm8tuT6YNgrJB8ZoiFwKmg2wCZ3HrGFyyrhhSAmG",
  "key14": "3FLoywrb8gj1dkibaSLxFPwApTZgjvyHymWchDgVj6CA5BaQqQAyBhErgKrgxYhadF5LzXmAnAvN3FBbMVJiaupd",
  "key15": "7CJarX1LVnu7C16DrKk4PpNt4xuVREgfkLGwwza86P3tCqW4cyZzuTstzWtJfe625Ubje9cQWyF6khBSf32AEPW",
  "key16": "4bsbgBbsRndMb5wzUAzg49R7qHxhq15S3FezWPNK1QkNnA6xujAuLUimxVA8YzRTqRwr8jdyGXUFyQtjcPLio2DS",
  "key17": "4WVox9AfyfVM5DyqkQoqzWbt8qLN7VJkT19bxyQLdYYL7qtCTqjMn1hM6h626k717AP5sDCitZydVCeyse6NtkXk",
  "key18": "hL7jDYZZ3cNwNKHwuF1W4VyShPBjMCECzkpcgkW7x1okyzcJ49SvExb6unyp5W7dhsgLTrX7k3t76cFfMQrW7K9",
  "key19": "4uaow8zmak47urrykQYAGhJBCBSstCZmAhM9THNv1uj354yyjnpb6kqxryWuczjLrjCAbw2XQQM314SPjk1et4kb",
  "key20": "2wyKc2mRwdYXgz6f5JXkj8iC8kheX62FhFRoLFMFR3yWLPAYbJ7zxvBTDXvpiTER4cDpwgi1wP8VVgJAtNQQKbmj",
  "key21": "r3CTTFD5jsScefEwKbphXYdVakNM9ctrUE41bM9f6QCdWQDXoQ7ZeW1jAVdubqrnRtJzP6gSNk7F3myRwn3GXaA",
  "key22": "3KsEXM4MrQ8xVRzf6fD8Uh4XCZYjrTjs3TSJDjFNJwGLELW8Sahu84rj5CSAR3iBkYX3s5swf11QHEwk9jUpVGMF",
  "key23": "NLnTNyFeiykVTYh18LKRAJAWdHA8edR9UUCBrvQYj45f2Y6ZQfbMQpwrJmJ8bERXhpgNK22hR82szNHny3C9CkN",
  "key24": "3f3ffGknhP9w6v5C239F57tqGhezhfyhjomhebhUg5Ku2FatR3PQYb6PpKiD1wnFdM5qkrfXLdyUneXybgX7w68Y",
  "key25": "krbvxqHd5P3Mkiaj59tygg8kxDbju8yhDquH2eHenH94w5ZEhLYA9Bnca7ixX22H7DWuCpS9nvgLV9NeJzHhVY6",
  "key26": "pZJhh7nHJ63YG65NRsznThcy22iKV2weu47gcpe3jqw28rpDr6FZjiAT5iNnb42VQVmC7xHKRuTt5rFN9WCRT4g",
  "key27": "2RQ3iZxwZV2wA6QXa1eXVPj9eZCJJFpx1VhJvxuPhY9ZFbeN7AcAiKEk9m5wKttSptJenQAG4c8MQQBFi8sFTRhh"
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
