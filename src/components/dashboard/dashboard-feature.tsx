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
    "49pdsZXHedvaTYsUGeUjk6Ps83vcF3yqEpyyjbFw8RuGfhLPbKtoj18DaJ3v2hyhp9mF7Dfkq3Y8McSYLardebcb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iES7GhNc3bTSNXx1pkedF73ZwkToLVpip22hZQobebZidzTv8LQsmrzyDZ14HSjcmzEKQpwtzVXjEtFfe1MzL1Z",
  "key1": "2rTQ9bfuS4gJKZCM7FPCm24yccR3DuRXWBb2bTRXHtPW1KDtMxAQyD8tCK2igc1xawzfXB9MiFk91Z3jmvvTMZzT",
  "key2": "23FUr4z3MJCwCceh2pv1ZrwR9nK84WiWeemwDEqF2mqMDLetMxKr68hrkQnNV2gj82tWD9n61sQ7aKCGfznPctEJ",
  "key3": "4t6y1zKtjxCWBzUgiUNHxG6FTTNtnRrLFtof67sgtZEtMEgnZBdKxa1rQGSiefhB8HamDTZsrvZ4fbZY1QCkB4h9",
  "key4": "EZf3TSJWtwJ9DXR8AAJDrj56MRRmAbyiiGNgysaYrW9i7pDNKrzb8X2iUUSyZHT6GTaWRz7qqBgBapYcbZ5xJKR",
  "key5": "LxRaVJGcmhS3FmWYkiBsjXV3XyEzKm1kmMBrncwba9twdQ7xvzLXWjCFDkBhuiEtv9UCSYjeX2Lw3XNSxDGpdPv",
  "key6": "k27PbqareiMFtL3eJAqbEfhDBnppEqu24zwebZ9Rmmrpo8TAYjG3e3QyHvgMziLQV4QEZgSyLfTMsLYWEcT3msD",
  "key7": "4L6j5HBwyhXe8U9J9fzxaqaQ2FNJzgxGUFUDWZ4qe3nKvZKPQ6X8qNFGCc1zo8xPD5FbEdtb7R1iXv6Fcs5E8Zd2",
  "key8": "3C6sYWRSB1HPfuLseYxemaP7myFYDpoDj8zehFSTJ7LR6sVZSwtbpAbo78uNZRws3F1f3bpJWueZ3AEnxvHKLtPH",
  "key9": "z6jiK2wAnU1qGJ4ydTDJhkcjRdccsSYY27FNDFhyZeC1cmQKs9UygQX8k7t28aKQf3wu1KZegug7CA8gyfDS9dX",
  "key10": "2f5sjUoCDcev5oyFUneFaFxDNE7duKSHPu3Jz8h5Q6NZg8WRymwXt7GUwf5CDka3KRDPtYDL3S9WTM9GeEq3r2V6",
  "key11": "4mHpVrKWbNsSG6kWqeT41DGozHawZ5fVvPcRog7U2QqyXuCcE3mmzAK5bnLyASH8d49W5pmHtUwi4N7YirPCE2aw",
  "key12": "2QFmHEVJsQB2m9JvLuy4Ns8uQDRxfSQiRxqCtUgtwwHVS5swinLaSsmSboi7Lpp5Pfxff7YuJfEdd9PMNUJnEHUY",
  "key13": "39RRExJmRrnwatYsm9hoN9PnkeK67BDJyXEvkUqaDxZVZcNNZHNVyUSCEFAMpkoFaax4NZPwNovK46ZPyt5VPxs3",
  "key14": "5K27eHnJyMA6KgnB1dQ4YF51WQeSEzbkcV5EeiYmZBR8JwpikAC3HZsknbjL1fE77Mrbov2AN23rC1FBzwNSzwga",
  "key15": "3NMT9EkNrAvqE2pvUEK3Utue41evGuuE3TvE9V2Nyhr7vknXCtpgXER5g1DfrmMNZ8uh4WEF2PLRHZq6cDDg52bj",
  "key16": "5ZaJqKFnSL6HHEAhYjUvvS3ixRoi3fSEBP1wMMkQyjfYXDBSedFQg5B8jBr2z8FfDM36NWoqkVpLpzWWRPSzZJRM",
  "key17": "4LmsgUwxsSocvWaAuNvHo7DhiPa4Uq9Vg3SfKov7W2K6sMEqGdGLNvGjNkqR9w9tHfZqa3PepYZJZ2L9zAqgpvYH",
  "key18": "4dY3NG8KzGGC7PJ5pUUCdqWdZq6VspDVUtonaoaQ5EJ8HQJb6BGfZLiNSjvLtj9C8eead79GuQkTQaXpTr4enJ8E",
  "key19": "2nbmVTe6anUX7MiQS6eNTX5K7gJTRMCXsTbJGyXHq3RLyiJVwhWt7abjWGrVRfiWyP7AJmMC3ftrvG6QM5AnYEJm",
  "key20": "JsVyKTBaXcDWbpZZSxw51stccKtrYgk5RQ6bMtgk8NKDzPFuFAhB64mPHR1BUs1gsxmeo5jmoHSkUqqJ7nW54dk",
  "key21": "5WFgShQ88pK9Bhzje5ZHjvbSnnqiL6caa7FapJMkujs8H3iGdCCCkdcPw7dX41d9Gt95NsSk8xge6PU4HQtruVj4",
  "key22": "5sLaD6gcs5eVF5qLsBiQQmwH4EqKpJiZ2EP97JrsFLgqfErxFoCM676YW7QebdW4YgpcksReTAumvGkgvUhobdpN",
  "key23": "39yuCJqnefrsQufFRuiS8F5X83y1f6xutBLKdaN9ibE4ggF5CgJquNDYoJFckUJBhta4DM5W5hGdD1nHxbMK9FqA",
  "key24": "55ZpVwbvWQBrdnofcpo9yUSiFjvrFHQoNXKENQS4mdnRDGL66eyPtMD4apZnACkvtVDk8LLTwScoC18EMwsnFhVW",
  "key25": "2SoYZipJYqxHvAPFAysX64cWjjrvq2JKYJKBFTW6QHMbL7HmVShryEqfBfG771rg2mVSx3HiVjvhvW7Po9kCp8Se",
  "key26": "27hS1Tw6SKuVnCrMMjwHyZsFKkYJGaMJ3mDd1yDsrhwshYFXsFUzQwLRU8EHG4sKbzDhqa9NLBqvuh9fEuVsv1fe",
  "key27": "4Pz6L4QnYz7cUwyYiiKp6PXXZtdkxLCdpBgxD52uc7wvkKrnW9inPWKq2sWhwejc4o2gWjveuTCbRa7qBGiTLZuB",
  "key28": "3tBaFNfd5w1vhHYYU9cQZfbTL2bKvU2nJtjCrYgfjKv7sbUbrNAu6FKTFNyrH68XEoXDg6CfgBBK5v6K1UXCFueL",
  "key29": "3myvduUyDGqRC2kHYRUobXYRSM56WGnpRggyqcEEow3TTMHEGXM92VnY1snuNG6qspbX1eTPd7mwmaZvDxVmezEX",
  "key30": "631PmKUskbkrV8xGV5NXKRCbz2hGmnN7QfjZDuj5pYirfzfvvM658BYYBGNhvDm4bdw6q569zBZQVr4DBFVNrPSw",
  "key31": "3UBpkE9863GHYQ22FbLJw38JzE67vQvKnjTeoZyPFzVxnnBBmGCDPhwG1AchZNKYLGTsGhs8s6NpwTgdSDwWc8PV"
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
