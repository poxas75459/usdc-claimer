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
    "4zvYrbfdEi2syoVSczejN4wVoJV6w6cmcP8tzi4rCzuZcdVxRVAFuHKK4StJBmWrt3uzrNv8Dzmopcfdwrhb1FX9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24VqvxsmM5rYvuHbXb7ixCyfQaoEHYbfjngjdKHBFFq3nYNZzJQNQPbHUZfyThmwmawSgHJs2YGV4E7brJewGMiQ",
  "key1": "3VPcCrqNr2GcojkGNQGWF2GzWqC13MwP676AoA2XJf7XAHraf71phoEdsKMXdTVWuff3dSSa7VbGgFzFzBQDwkgh",
  "key2": "32sbguFiMojkuuDkFFJAq4sRJnuz5GZ6cyEq2xmL55dGZz3T1AWjbfv17i55o1Grunk55HPiQGkXUecd9N6woWrw",
  "key3": "2RY7AKtqbc5ZQawaaX1tEWbK8TGpMxEKexZv9Gu9tFtEDRK2rZJWZ6G9V7fqYnoEJeTmPFZ5KRMXLHj9WEeJ4p42",
  "key4": "t29wbzBDhp7iVfcsVefesVEuAzzx1dqGdXz6r4UoFLotFfNY59o3NYexKYMaojauBNGPAzkHdibMdcX6kp8v62W",
  "key5": "swdEtrLQb4xM1djMWoog5kwogZGLsGRZLsgFabcJokitwgiPv5ezobtqw9ujQqFe56V1Nhkm7Tb6FobvD4KgP7D",
  "key6": "64xkkRvqxB5KUP9WStp5fyNUyVL4sxAqyvJ5HoMEKn6jwBqFMJDqEHsYmnmmbyKrkQMXUveVS8QFFEcU11nzx5pM",
  "key7": "3pp2rxHrj1Q4cBF5io3eQAA4K7mpx7TMhp5zgfrXyUwEuXh2LuYYL3CF7TVR8tRMJVskdaNzcwhWvWzpRcFqYme1",
  "key8": "5UzAJSCxFB2XQ4syLSAmHNEfJ9oohE9gjLgM59YQm3C8UsugN7ofvAzjxaDWKy2iz93i9Br33z3LAMHAVVLJRfUj",
  "key9": "2ht5FdWLGWZY6cje4aLDGhSM8fUeCdCHkaeq4hoZK2J8YE34CKJPna8c95d6CtqPqPB2HqzPnpEofPgjs7dpCReb",
  "key10": "39apKZ7QzJqCEg9aBmqpbWhE7pJwGDhZ9ePvGSLNtMXYrzaKyQCj1uENxAHRoAh73SjLx6uwiZLCfy63k57HLjo1",
  "key11": "4xAkXNAHRcht6ms3vP8DgAZiRmzCdCEzseYK7S8jqdi4yDcyy5Vzfnng4Np5TgenwAWhMCbdBQ3rk8Hf9uUti27V",
  "key12": "w1xdtyhD6gepNhnUev2ADnyoNgyFN1g7rKWzCdg5SnBVaCzaWEJW5HzVe4feS53TqFUigHZWJa3T5TKAVFN8K6s",
  "key13": "2K2HYxmkZ5LxnQLEuPRYkB8RW7gfcbE7sGMDAFKAkvxyjbU8bXdDX99eQVjG4zTGmmqWMPqpRDPukh9bRXtcyVn1",
  "key14": "4fN1ew3oqWuG2qLKCMrdVacTwbTAZb3NyhxuivAiUZvFeZiE6YS4bhMBWSFeqdGm5BS7rpdo9uzmBgYxJBphEkgx",
  "key15": "29zPafVRJSRiVGLDcs3fbcsb7ktppeL3rrWyNBLTdg6ZhmZ2rxUkF4V9Y8jXEvKyedku33M1A2e1rWCTnpqGUpUd",
  "key16": "HydzLfbbcGwiee68D6WRNuyfKJdbU9C7crqLxnVk7gB7rjF8Ee4FTwTMfARh81xfEfKUX5qSgui2JyKnWGr1Qz6",
  "key17": "2HJJbw1BtkV6yFiXKvzrjZbNm9rfTzmS5PN1Ur1YnZkW4g8b31Bah1ABYGoPFpQqEHVb7osh4WJWfPHmSuzfZpuy",
  "key18": "291D9CYMtJqeRqxFce8vkLWFigDXTEa2x6ZkLeH92aP3ko4AhauHbEpPDjn2v8CthNByJ5vFzmy9TdEgBxE2faXP",
  "key19": "4rCPDVuw4FUMnKVr5j8SpcwEdFjx7BKc46tx2cdwYsSRBxJe9STV7cNjmgzYWazC6oqWvME8pbuS3JSEvSgmXmQe",
  "key20": "4v4omMx4mQcSXGdUnaDyCy1QQJ7cM68wEQs7zMtnTqUvtS3WfRe5MgRyjAVHETtkCTdZ6weBUPN3XsYSVA6LBHM8",
  "key21": "5NeEv7EgkyvJbNEwXzTcT3qPjndCpjEDQoTiZyPwgYtpeS8qTRma84ZbsuL7FV8zx3smoZ7VS2YdnTgVksFAyXLA",
  "key22": "TDdQySuMJ6XdVyqTeYKo7uwJbYGfWsZEy9H8dqz3xQK2kqawajXDUUFZa6HmVtdDiGePnYbfzN4sfMNnSzBhaBU",
  "key23": "3FqfQXjPx7Ro81MbvViBBFEFhpBKXrnGzC7FZAL3B2YW5U3BtcveZtQ9XRcYocdeqBGfaHtE7PNstHChdsLVHxFF",
  "key24": "3tTVcHZU4hLm1UMiM1ortUsybFBrGYZHzKaesWyLa3ZaqGaRKSQMCjDsgoghSZW4rSizngqqNboKdBz7Yyoztooc",
  "key25": "2e2H3MHjamdUr71FmiwDahfuVfwXTNFa48YhGQy78buExxUoMCCmK1JG6a4iqtjWWrQ6d8QPzMuYnrJ3ooEEmGd5",
  "key26": "2ebi4D5Wbq3ZSZLDDR5u4AMAzt4dC2pB9GVLWvRavxXSqm7gJRivGCR3k7CU55gAzrPCmoy7wXUXWzsL49uZ6QkM",
  "key27": "Ur6ZKrxzSYkmUP1Mq6BJx2gZ739KmfznVK8F3fmTdPXefzPELLx7RVJpsipYwnM9dfGiarKtonoC4LsZAzH472X",
  "key28": "5rFXUKpVQjbQhD8MzGS1SVtE19vd27X4oWz4Z7tPccVuJ3M9yfBa6poFcSzCxXbBrBptjnEzfAXj9fFVMhbdNGqP",
  "key29": "5wfynWMKJiEBLVSjxRH9h8AAqkj4xViVfDNJibpFpqhFBVrPAQE7HkDDJaiChDCi9my79u9ToHDwPkFpWJVxRokc",
  "key30": "Udq8pwUS7S7W66LVYFZJVEkiTzNcZeugqwdeKVfBh8sdm1jHcA7WVqdnV5yfHsPXNdds8zDgF3qo7GFwwhdqPSQ",
  "key31": "3xo8PQC4H8AmwkhCJ3jm9oRqLgDdGA9bomjeTqoeyJGp9GM9BzPYKqFci5X8gUjKbd2fAHgwczecvm8WjBbAs5V9",
  "key32": "4tmSeZedyJDFVwBMSa2bmvenmqthbr75bki59WAS2nmpizRryAP597KZeobH7LpR7a7BXVmNoBq2DAAhHiM3wQRJ",
  "key33": "3eh4SXSKBRstMkHsWEr7Y5RK81Gan6tCXP5tMXSoAojVXnPKowUwq85N5VHMbUpGtNgweMJo6wc7JLtuJ2wN5aCN",
  "key34": "3UPojrm1HFAV7SgorDPuLovSW8Uz3cS5Bt4ptRuQy4BkQy62hmxdymsQpkd6KyqtJ8axM4KBWENBwRbybQg12FFk",
  "key35": "3tDUZkQBB1DF3yXFpQLEKVaPEqunYSCbqczi7PEfwiCrm1JA7c3nUBKjFmnNPTVUgfr6U9KCrLVdU6A17HDLhN9B"
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
