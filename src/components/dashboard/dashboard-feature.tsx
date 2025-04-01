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
    "5wB4J65vrVr9nKKj6LVHFBvunq97WscnDhVbX3PhkVi62awyBW2fzxZv2m1QVV7auf4PJhL5fmwZL4XnDpDWsScc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3azrjQwRQUXhbFZHVuAVRK2sEEDP8YZFmyavx6apt8ogESDU36WM3Fm2jAwXT7xggYohs1CEsNoY53bx6DsGoWb",
  "key1": "2okveyGeSwkHK2aEN8mR1u3WLGErrPCqb9ZxbtJuKVpatiGitzBM8eLvKUSRma2MJ9GtkKum7ZMjrNikM8ZM5dmg",
  "key2": "nXeW2kkuGwDGLToizbRBRDbvBjSHBeTRFfuAsZuCveGd5DkgvskSRTVzo7cC83FG5APoKhX8yVC4JdSCpwtbzKq",
  "key3": "gv9Nkt9Ko2eqk5dq1jjiDNuER2d3vmJDUqUaZSmUY42w7f4wSu5fpWowNT1WAFBpmHx3swa4doGxUB8wjLpH4jX",
  "key4": "3gXxuVVSpduXPfgidKy5BZkHkpZBHrXCgFrYUA2yBLfbTx8qk2Xxadtm7y7shYguGXfqhct7hTPYMYoKZwosphw8",
  "key5": "5K2HY6AB1cj8aj7z7x862f33KTPWJT88AYaxqXcQYFk6vCw5wB4h9jf58qfSmmRLoxysNJhz25ZGoFGSvr8AnDCy",
  "key6": "5hVSVhtf17LFYWwuBz82B7UKB5my3iYvsQWyVmatYUfk3aYTjAy4s9R45BdQGtxB5zP9fAzYq88oaqPDgU6GHKbw",
  "key7": "5o6tyWZoBK9S6rptdC8nsiZCQAmaikjBbu4rULhXieAB5eGnKa2noTWrjoGKVER7AxGUK9DG4LZgH6ZdXUbZekSZ",
  "key8": "51wbdLqsCYfHVDK5rSz9Mw9CQW53qbvS2ZAFb3piipUhMgmmroZwQhRF5qgTnHA8uSNGPB6wdgKceZaRqcjrdhnm",
  "key9": "5N81CaHRhSBtJ4onj1N2ne6ibNwnNmoz2WRcvBRLmBAJWGQLgqdWbcTreNAkXoYCERd9WENwG1AL4cmad9yKJuSB",
  "key10": "44nTbQibiK5aUFn7dJeL7EaTiGUuAdtHHcV1gpcoKgnHt69GaBAwDhWLAdkoN5kiGCHDsrSCdNW5kWbgKP7sPDbb",
  "key11": "4SkMQQKEmW5NzCAB7mXwNQ9kC4bhFNkZKUVutFvPXBzzM1K6xGkV7K4YvB5yLLR2Z7bnPwXyhpn3PJ2SgdNDZpbh",
  "key12": "5a3y4Mms5gyxaUGgeYZJMVQ53pGTTzWHD7h59gFxFLWg9NUpFzjn8EEWNqER585ueKcGRkwVdcXvTHeuDh6q9XAF",
  "key13": "5e3MkigBesF15xRKE3WcEeAV1WqpmmKKaLjbsQ4wDWYhVjYHM3AMeHPvKZ3hb4GjtcD6zn7L1oh6Ka1QjbMkpwjJ",
  "key14": "2bfWFtsCGZdJoxERULCZEKmcJsH2S8FNQpSpdsFLngakQnYyoJSH9tAyip9Vqxv4NQafGMYqDd68oD6HNr1Fkzwg",
  "key15": "49ZVhgt1bdK3QkgxZqekHrd6jRc7x6pWm2Lo1d5EqkYjDZRFJLkMvbetGPh1e14smEqmRipjHtuqr8v1e4fk4nTP",
  "key16": "51cyiemkeaGH3NgUSGLE56v2zNfQ17T1XJJQBXFmtsKu85ZSRWE1nE9cmFi4iXVAYd8uKgD6Bx2iw5CcxY8HEAkh",
  "key17": "2TpwynRbC7aibv4bxMbVf9KJuCc1LHebNSaBYwTimmbZVo5RYUz2Lx1UEB3WtwXth3oMfjMSYYbotGGg1F3sd1CG",
  "key18": "5UdVAsyaJU1CUfECqvpQL8oTUMhSjQpgDLp6VFuG3REqhvKtcgyEhiVLkGtR6HWRwHsRnP898d71vavzugvKxZtE",
  "key19": "4D1et1xjdDyzL7UybHRPz9qX7fgQNr2ycawbusz4aYcTzNQtMjPTtC3rDrMwKuuLYCJjSRiz3MwfREvu8ygbCBjN",
  "key20": "5hiEJyamGiHtY1BsWe6MgZgmRbv1CmtAZxxETi2wtDRLhwiJgAXjhVYFA889MDXdtNtPrbfctcqU8wDT1RnbZV85",
  "key21": "4nwG6cBEeHnqrbYoY5Pnp3RQCnrwcAW6SqZZZHEupxZbAL7vxvaoBLZr2B5s7zFX8oYMRiGdmoRp2LM3wzA8jj1K",
  "key22": "dHffD3gYhBd8MjSPVPBAzFTgtCUZ291uccjncMQwCPXNNnxzzCQcpdVzPV4r7M51kSv4Ljmy8qg2g77jg3XRket",
  "key23": "3JghfXseKYGh7KmnwM5t6VyWvME8AxnFW2yS9DS2nA17RYhh7LgxS4ecxgwww4BJkW2BFsQU8DqPQQ9XFxuFcgfh",
  "key24": "3t5E9ogZ9yhCXR2nkqdDL8j8ggmyWh1QQ3FJbsjzpmJsh7uF46yxBevXXkDs2NkaLb3USGF6mUZaGQ4XhFKYtDEc",
  "key25": "5XBYizXQ1rxN85t5YTJDBmh4acLLe2MAm2xJ9zAriXrLvdeUqsKPs9nW5RKqsEiN3iTZ17g31WgAAbJLbpxU9m6x",
  "key26": "2WCP9gfL2BuYsdrxkfPji6Vkix63NfgBvBcofqHSzrzmNoVPwRCTsA1tjVUSYk5t8sfUjrKvg5KxWv6x7VjbNnyx"
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
