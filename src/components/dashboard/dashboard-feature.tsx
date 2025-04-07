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
    "qbnYrLv7JwpVxsqdGGeoxjKVZXa9xF9BmWbzU92f5TSUr1v6AYk9vCh5fKhvw9CJgJMvincrZxvp5HkVgT4d8Ys"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L9icgQUJhWVa1TLfP7G1Ch4vF3YFtt2d8V6Y4Gxdqq71Gru96MWbZPuxzFwApFGAqLppvzCzrgMhN4aqd8xb1ro",
  "key1": "2yLiBUc2cxCaZN4PerizK6uvnG9Rev1pHuX3rf2XmrccJuMfs32dCxv6FuKQmvPqFwBzWBNAoMcYkRjztEXPCs7H",
  "key2": "4AEEZTyT8ygTti74hHznwJSTqXpiw2kBscyXKzFMgXsDSjnryT4hNiunxzgjSuUeCaEMr4u8WPPtuERAakREAqKx",
  "key3": "ygDdcq1kSHULAE2Em8cRS5kRSGhJ7z4HCrdd79y1jwtTjiNPzvwewQz8eUbKzoFAmKomhcuegeCzu9kQVFVVzby",
  "key4": "4cmeFsY66MvBKYQ7CUW5aba8ZWz75VU3q2KapgdHnFx2BVHVGSuDU7yPQuwjZFXJ5DRgtXCSQuiiMUB81bCjMJRr",
  "key5": "4Z8XmSiteqbR6UpuKdg4gDEfmXtWjnp3sKgZy42SfF7coD6iCAi1bBBHztF64bqD2o8VwVTBnW7BcXCaKt3KCxZq",
  "key6": "1gUdkkGeQtP9tckNxbPxHLPdwEQDbcM6PanXphsJQksJefybQkrR7ZgtW8kPiLF8SQEWcRpioBdZmiYn4647cyb",
  "key7": "5Yb846wWauCeGY7hp9ca4e1N6FbLYZpDJ7BBokZvh3KLdAYvbZyDrccrr26cHrEQSouHudnMfin45VAY6WpHzwdy",
  "key8": "2P57Jmy9dYhrdfdrrkbYzeEtAf6sHqqmPjMT3A1yD8MjJu1F31iFWo29YvSQGtvpcSprVJ93tUQD8FrfCHR3y2Us",
  "key9": "h839meZAeFa83QmDgsk8MQd2aHKZ6rJnFjBsTP9aMGLH9RtwaAqPruUvbyfJpdPAh5nfuQR4d3JLyiiK6oWgkCp",
  "key10": "RFCLGMJkBsPsvVe7CRRdungM4kEQm9ijapsWraezQeZ392mJBs7ZwgHdtohSeiU5N5C3MUqo4aZsNMsoM2MgVuB",
  "key11": "qWCkVeK16e2A6csEYaDvGWShJ94oMDUy3zBqFbdWAqcwoFHadtXCyzqtnuL7ahtbfHTz5AsKCjuTzfm9nwYcegK",
  "key12": "4MuUAwcciS58ch9TXLxhdySraV1YAEfzXUCb9KgT2yZWPycx9HYDdACBxTBGJh6q31cTx3hGtsbJKeiUKJGJLn9H",
  "key13": "456dxN9McEdw5gBjmgRCghUbVaZH7PFqDN8hcumpyr6WSLt3fyjgm39d1n1wmoKdTwrdaAm9zjGFeeCJLRPbhDWW",
  "key14": "63hCw8sYbh2wwucvNdAdfLCL5ZJuCfFvRdU87J1MQLwDx225jP44EKnMFg1BGVyq4UTpmeYPJVHo9xMaXzzacHRV",
  "key15": "LnRsqfrgv1QsWKF41rp62bAfwBHSnB9mz18krMmXSs1hdQRVRsbAhiL9nxfXxPcEcUzEEtNxnZhTpx5cAXxziT8",
  "key16": "y5a5vfP7hTZErkKzgJ26Y86Cb8vo1aW2aGxEdS9AnGvMqEkC4ZdqoL3721tWMD8oki2p4A6M55epxzeJSNqxTTR",
  "key17": "hzGCMMfEgNkpG3suEH8KADMVjbQ4CXZzACNpVTNxwez4Z5pjkBqgkQ9KvM9ZSgsQwHGRW6eenDvc4hEenqUy5Vm",
  "key18": "3m3gte46fiJkYsumknLCLNVdzzd8cKGpY5tApZvaKzT7jLNqmsauXxkQKoM2SgRKhvZ5LbBzmXTPKuUMNWxLopN2",
  "key19": "3DcvF4AezQGDVhLRZCfhToRQwcdoCKQPHvay1yVaiWoFF8jw2Vg3hsytvMMXEYdVHv96BndNLtXZmEHGHf1esqE6",
  "key20": "65nM27es4oG4VcXmnC6o6mQjLPp5Arr1JR5XXuoSmP9pFDkkx9tCwLzNnpimT1gr2YpVuMw4bqQ6oerejzEpwpau",
  "key21": "2xzsmLBUXKvQaqRmBiG4qpozLEcPbiMpj82qQF3ePqJ77cMr3HC72fZhQzLXj4gQiidzSQgCg3aU6cVvE63Rb3rX",
  "key22": "2jYwkhm3m7kZm16vnrDEFdZ9NVLwv5twbRfjznPM8jLc7WXdqQqZwbfd9wxS7f6VxarShehB2jtUKub25t8yKk4R",
  "key23": "Jmz9TUUoYCa4R6naFQ9yzGTZkfAqxiMUSn113D95raVtXAo2xjJ364KNy5xEUU3DXjPeHtvEeTzr2qCtNMSBXft",
  "key24": "5cSbZCtXmmsQ5H4obNjkbqC9GJqDzTkWeR3WkQ7SXDEtHJz9dJHoqCvz1LV6Xv1JD3aUcD8DGtAU3Anr9nnm5Ydb",
  "key25": "Jcsu76P546nMqSnQJM6vnw4m5D55SBVZXcieGtxe6ks5UvBKfTBSY6i2RZwsXew1CStrg7XunaER6wiMCAYZ2jb",
  "key26": "4pLW9bs4Ycy31Zkw8izJGkpbZ8cmLxDMutwE9aLYwyCfXqHd21mj7ZEEXjzeHAfMr6KmWburzMM7u6UKwr2aNXX1",
  "key27": "5BsGRyXFvtVHE6d96rqHkBR4pQsPwnPuG6U2BRvYTSsu645uVGQUxL2X7cQ88VP9BZHUTsWx2EWE1B1yCeaCGWHy",
  "key28": "2uL6e9r5SbijMfCVkxMGtvKKXiCh9rkPNyahi26DJSoJoacuqzP7rARtt92cKpngFfX5geq1931taYPQeC1PkRHH",
  "key29": "4tXDqQsSsjwRA1QcboneuGyEn6HYS6GhoipoCf9j134ootpQ5jPqQpHMar3ooLkmie4mcEB28QBT9ptf3qrANjCs",
  "key30": "2jU7RZomfrSeFybBe4ydWEFt4GoET3CTv4BCXFxXU3ssTqhDGGpSjU1saAVzQk4QcpeLMsSaEksgjRk2RZgk9sSv",
  "key31": "Kin5yQYaKzquPW6G2EAS3FRHAka8PeZuFPPFFkJK3gBRBrn2BFERLdeetmQWYKiA1y78DeHGPNCRv3MyJFcktTT",
  "key32": "3RzLUtzewLXrUVYcb8qray7k1RqVqUcadnisfy4bxWtPeZixHzCjiXvb1hhpxXsya6j7Tq5gChBfe1qrNLi5KBFE",
  "key33": "5yEwYXkNUUxjHBW6KvKrfL3wFbwSwj12Lp6mUyUp6B8B5GCETTpCtyTdc5Y7oB65PA3PkBHtZFbhHKoGgjKy9RP5",
  "key34": "53DKXTbMqV5tHWFeTvX3Z5rmenPD4JPeYnvZkh1iHCocn3TnBD2t2VBSkNYQ3QsiH1n24ZjBkPDg9BEbode4XKU2",
  "key35": "rC9ff9DoxDNARnBhnfjos8ii2voLeCuYAubFxuh5BLt6QT56R5WNvF9XjYfooA4ZGg4ME9RVt2DbdGotFyNWMMg",
  "key36": "4dy4Qmbn3f5MvsAZq3tKeYgLgpG33QfyDibwacXq4yvkLkgzR8HeVv8fP4XrvycfjzexcBWPCu33BmeatfcjwytJ",
  "key37": "21V8DpbeEaqpZUb6JWQ6Aa5Fysp4AfCMPVRwoU8pG2gTxNSxMhq9Mp6eEFugFJVdKpoRB4sqHdBN2SxyyLeHUMZ2",
  "key38": "4m1u1f8tYWmWsuN7LLdeWgJ2d1fetfRRTkx1Lfbcik5aHcwrkygcadf8jPTZdRcBsjGEmS47NkzFFKnKwZGVhnsW",
  "key39": "44qhhFkM6SGzkJX57Mh3sostCdAgeXrkMYr68FK55MSUJ4H9SkLnc312yaJWJhcm5PjkGCCJ3sS6m2rx18ECCnQD",
  "key40": "2kCacyNmmssRMT3TDHuCMa8CTHTpWWNbtYCBMsjHEiWuZk1cHwvGMdMQHQ6vXCanqtXQBDdm5WdBSFeCJfBQuYos"
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
