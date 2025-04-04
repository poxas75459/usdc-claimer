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
    "5niNRPcsiq3nxxb2vUckVSru2PGxbM9EZgZaPTZESKe2AG8oeA6EmUuRoozY6r7uQfjiScAfYdpHQLuKtFbAgEea"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CSXGdTmERKuswSEyirhJjehFyyR86g9WmxEmL4gZLJvWT4SVhnpaNhcw9XFfLacjWgtDfHzVFEPmWcF3kkZjvTu",
  "key1": "XfS8HM9274SxCVX7rbPF3aCG2yaVM82jxQYLP5pyGRVQLQkXNDQcojUYYvU5aj5TNwyCZtH6oPGH3B8zBGgcSA1",
  "key2": "2c5VmjNmfhL9SbdF17JHEvesBRYyL88MgVdPFneK4ZcK1FxUQgWV45Wat57kxSynSfbtE1iLEdcH9xduQbKPVV3",
  "key3": "5PjBtGNkBrUJS13LohgcbN8YYNhncaHTJzqNfKva9Qb6FNF8mfD7QMf2tHiYhC7y6zrioQc3uBMd2AWcTpAq8wpb",
  "key4": "3QxSWSGjmrapnCTtwnkRy3BHDikREJnRyKsjYXxcKZHqL1qh1qT3Fz6gSEQt6gCaTyrufqL5q3NyUhD6hktBjhcb",
  "key5": "2KzaENdA8MidcH745d8MRkG28E5XNChSAVfL7NBvteKGNRU7d3AU1dFRxqDUVgVXrJqSiNMwdsbfeJT9dSfUX3mE",
  "key6": "21WQP7cUuBA8LaThuUSqvjctsipWA9SzsXy5DcwBW1LAc2A9yFFHMtSmamD1ErUUST2NjTJ1Jv5ZA4Ydn77t6Rg5",
  "key7": "3Hed6um33yT2ARPJizJVdhgnTiTz1oWuwVEGqV5HSLnuQgzJPwUKsYcUh1KgX6qQSxJVLaqxGtujt2yHZL99MNSF",
  "key8": "5nHbV1xcnpppGEx72PpHpgCsae8TXp2rCuaJi4faaE9iFP5zDE4yEakkg8BSZpSNF78hWZXomp9GiX6voirPJhdh",
  "key9": "58azW9ny5ZR328QT4imh2T6NE2i6tKXS8A5jGyuWpbub3JD3fRM4c63TeHjJtH4wprrDG5MQCp8yuDfgiEtzLizq",
  "key10": "5mfXjab9hp9GxvwwWjYHWnxd8zdmubwNtyNwhywLq2K2moifHZ9HbnPtu9ihU7hwhktCerWiETExiMZUjFjH63y3",
  "key11": "3UeHwzAg6oos24ZkhzrFtUyF7usWkxShAJMAN4eYxnNwRWP5sgVo7WvzRXWJELXp6psfKS2Bd6U45zqBvxHKYBAf",
  "key12": "3qLFu7Nf6BjbZfEgYKpnXELiiY1VQAbYvdCV6VBsSENKE2zzme6G6eq3kP8QCcm2Uo1J7Hn6jo72ZymtSwpkjUDm",
  "key13": "8XNRqUrWUziZNcKkMXCqpcKDJkRhE3FTmpjG7pmSbFvR7HJxnBzJ1EoayfAUhY6FPBTEznrTtEHKvq1EPfaopnj",
  "key14": "4ErAj7hgBuRvm1vxUyCtxb2tDcB4CjnTigFATL7MawtkA38AnEdtcPfJ9FYdVdJiGD2SR7RKWqz5xK1jkCz2th7A",
  "key15": "pbaTWhtXXS4GxDjaFtMb7Vmmqth7eHZ2pf2y2HAZ8gV53UiGwGUNA2jHemqp58rQXGZzjxsAJLbDmifd4R3e6gB",
  "key16": "4R84bRwnh1xikgiuSQ8yYcwUTw3iXtnMHGXikLZ66hzc6xqhcA8dDrL1oYR4n3MVzDqXMUA8vv3x6riLzgu6iaCq",
  "key17": "3h8v46MSuvYWdbvTpWQ9EH42Rkjp2zqc2pGqh5GnLfPjd8EUci8ps4pRqNiHVF6VJvX7rWrBQUALLyarj64SzDeF",
  "key18": "2gsyZdWu2RSWVcC4D9Y1QJos7V2qfrMinZBiTDrpr5LKGcPJyAcUy6C98Wh4ZgGMtx69fPupUzKda3tu5X8Rc922",
  "key19": "4rPeVViJYqC1xQi79dH2jXc4ar6yytg3QHr2nep8WUKBWqjZpdbkd3NJmqVqcsbM8mLYgssic2kCctSZCe9jZR4K",
  "key20": "5TJNsdPbmBX6P4N6f5V32bsWYBpYYwZukAhL8KyDo8eg1PeSm5Y2v5hUyYVD6AK5kz4LjaRgszbiCJK6gSoJcu5H",
  "key21": "3MADzj49zQD5JLhmz5DHqhT1qV7HXY7Ae2p1V1oZ9ieuHVqaamVruwcagKvWWg4e6YrRJZ4JJngKkfeAXRNbEgH8",
  "key22": "3RWjfxL9osyaTdWShjsZM7h5mgMnmBEFEaX2mhqmQ2AnXnBR9mkJdQWcdb82adQ1Ez2fRL8LRZvdFX5gMHbbrAjV",
  "key23": "2MpKZWcgH3FNai6Jhvsg7cnq5oy6MRgbUmfJUCVyw7q6v7m1VqWj9JdbvAx3nLkNeuVzuW9xiCG4EXCDrCtma4uo",
  "key24": "3hfDCQojsEqCCbtWvM9dnJJjHjFcR5zu6MbHji5X5YqzSS5zsmf1qsESgsnk5BmjM63DhA1xFpDHDoKVESSGaB9i",
  "key25": "2ucfFqSMSnW3aaNCVzUwzKJUhNNd7UufmRKzj9E33cP96aG9CrgnoXzo3DUF2dXXiqbT7yz9TdN4CLQgtepuV5V9",
  "key26": "5Mjqzkr81BigFR1DMxx7zTBhk3mGTVHKqMocBwop9KxUFpHiQ6fjRCiir83oQZVTePDKKKJyDPPZweXayY88xy9e"
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
