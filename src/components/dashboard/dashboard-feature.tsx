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
    "52yFZLHnJUctdACX6sfjfTgKcQe9V27z7jKXL9t68uAZ3m4Dnx33hJ7xShJCPR9LgnFn9LaqB1tdEigMp6KbVFfL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mhBc7cUGJDtqbquCjJxEh284nSsb9n7brr6E3jYG6FJAhR7fdHR4fQJAQubz5ts8Qb44pkYKyGMeeZEToQ92YAu",
  "key1": "2gjyg82jXM5DKuJh27kywpUmCb7VsXEfMspJ5gayRBiXBd2L3NzV19Mp74WZtrto42J9PtKEY7PPe2WmDFBWarqT",
  "key2": "5pcYKNLuWAvvjvSXiRATs7FA1xmGQJyeZBUe8Nhy2YHaufy9HFPM3H596PjFM14nvMeaWETP1SngSAnqVTqQPX9s",
  "key3": "GWYtpXg7W4Tq9CWUUcZCjkoKRWVQYR6qMAm1WxX168JyTgmCCPUNAiU8PmRs93t7cu7g5aXvbyMYaN1RAFYMhPx",
  "key4": "4KSv4C52EuosnqNoRfixY841wy7h1UfxsVhpr6ZQJqnRYNR99zA5UMhW3Ui5s4w349HM1ZFWnRH8MvtTNW4nYNQ8",
  "key5": "4Rn5cLCfHGkK4yRUYihXQ1RVU2XVa3dZf9h2WkqfkPmP3booyt3kwdnrxHVfoBAsnzpWabQDcs6uUGrj6pzEeZcW",
  "key6": "5giHh84Pbyn3VJrkr6SGun1M3sFfKtLR1SaodSD3V1Z1PJ7YN62qjaanfZMhKyZ1HCc5z79ZMKWcpgkDcsAiXnQy",
  "key7": "3uhZgssGSq1Bc7BLNg2K3YiYxrGAind5HZdt24bS5rGvP8moojoyVSCimteh8udow5KZJiFKTFNu5C34JM715SGs",
  "key8": "JCD1SJjwKrd4uUgBRzvVxRriTpYJ3Uf5E7YwyQ2C3U2WQnkcLtmg2ibG5oL9wQndFtxwqXqF1R4HECgD9wG3MPG",
  "key9": "28PcWk6UdXys2pmd4aqBK9Tt8FZc5FUpknTGoGF3LbjdzWiH5iwJGRV1j8eciB4ZTHYgNKrPzBpFkCthznD8MUgw",
  "key10": "4K9TvroGYCmi6ChvnrcPvHFwiU5r28g9YaJa8TrGi8QgFDDkWT5B7kqB2uDhbfkcueJ7YDUbHnD1SitjTXavpQts",
  "key11": "5chrc4dof9vood9D5hGfZGyLg7kKJQ2HgSdgYqH2W8xthqnXuDssUqbPPzebNE4PRQGc2u1sB6rfdH2982DSQpXU",
  "key12": "5JHPDu19hwJAwiRYUwTRPmJheEr5Umk58Jj6iRosL4rHDfp8c3kzZ9pLgS9fFQR8oJ5DysDwi4xzrtkJEiSggQDq",
  "key13": "4fHRwUyUK9v1R8JveYzCi7wLA3QMRDjw6fys3LQTnmPZANYzUrkfWcQZ24Potdz6eeVa6TM7fKbFXyJqURBoiMoz",
  "key14": "GU8irMHJDwdudJhk8dvmYeHNWJps79TiBMim6W5kUqmjpfQYC88xPKu1fLRhqPh6A4wKdPR24zyRangUEPMYBio",
  "key15": "MrGSbbADan3Uu3Mgo2p92CE4LdKgbuhK1JsbYh7T4AREC24F2WSwHiJojfmPrPUmkfMvKaxET2hqffeGUGWFHPu",
  "key16": "4eoSGRmX8XJgyicagHbdLanBcQpnR5Tz3qALV62Br6arNksitFwy3tTkjgAnatAaZV3j33CjBP44Sp15bakACM78",
  "key17": "2e7YnWdr2pW4ayf1Jtt6fc5u4RFzujrqtDq2ZPTq7Q7QejcGz9SBqeDhdw56G2V8oWgQ3tnDv7B8DHyQ8jPSdWhu",
  "key18": "57iELiEYcCheiZkUsjtkrJNZ8L5kRDVJfChghukHnLACdHiryW14XcCVRocBoC3gzmWH2HkkLsfXimhTU1SdVmDD",
  "key19": "wXrg1w7sVgsW8jrfmEVpje6pYftBogbmU9wza6VDHcASoWW2addhfS1v1qM3G9uhGFdALZxmKt5LjoFDrcr4zLk",
  "key20": "4hxYApXZQ2BsMVipNgfrEajGkGFQ64BxMFbDVfF41uhNcbRdHAznrYJxF9vAzMV8i8gUGHeV9ebZu7j8quRJRaYE",
  "key21": "3B6BS4dhnzvvHqqftS3791EXfkgDrkGMJ1RdyB7uL6YmXFdLvWzZ8JxaaeAtudDaUF3DnWsrbQBkwGLGwwZcXEXU",
  "key22": "311WURBco68oeTdMTUBcQ2ss2yQ7nd5thfawEAnk6HqDfFf4n2GJdHj22nwySamQHs78V9cbEYcjKAZgtqkGx7WJ",
  "key23": "3UMZ5A2C3nNMaARMS3ebE6N8GPQzPWM3e1XCYMRGqvng5y4wtr3NTyYZSGVcKGgMniSjauR6G9CxE366qxsZkTi",
  "key24": "3s6zujztprXCwJu9r1w4j1nV1HHJZiHwADuMvphnGLikraGvMDppDSHG7hnrSrDYwSVPgkcAGFG5eRnc6MJwLji6",
  "key25": "P7s46e2813o5w8xfmoJHd2tx3J4B4aGtCUrsXdgVfxEiXw3vQ3SXy9NqzNZEcSentuUCmqJuGM7X92vkbmp1KEB",
  "key26": "5eXTsBd9rdLXaNKDMLCdi1Mz9yfGTEgRgh7pZ6dj9tdMSMtJjKk7dmJusHbHoaZtV4gWTS6AkK59G6Rw4cVe116B",
  "key27": "2xJvNd3FZL7rA9H1SbV5GhkShuHxiwRsu86SuwmmusgH94swgiHmmxiF44pGjZD5j5xLNMte6NAxDpzHMYWgtQ4b",
  "key28": "22p9p6Q1QyeScSWveb1zBxDzbbofyUZGmUKNmcdFf1f4A6exJQFGGv7adAwKnW5xzuMQfTY8Kz5dD7iSzFnzJ339"
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
