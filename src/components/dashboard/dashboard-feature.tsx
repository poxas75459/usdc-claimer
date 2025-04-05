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
    "4sMhJAmghDZ5Gfpk3pRQPmDwA4Dp9fY9KN9zKJKVyEqy2H8XHSL9mfv2FbwGdvGo5CKvpDYPWjy7q2R5Bai1JSJy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Lvtwi91iVqAvmwWhKRaLcnK6TuXRCo82iEotDmRuPTgF6kXjNQ3sD8oiMyWocwvpotgNJsLatRoMHm1oaWNiZbj",
  "key1": "fKmLny6cPWamuZrFLDJxUkLD3kgvJH7d31R1iPDm6Koy31DNHBsnhyDkBiUdErTAug3XupQkeFHKHtLvDp33SN8",
  "key2": "2TMRfxfsXanhJRdSN11MJgTJ2W2pULAvQPbHCBFBFats9GHP7JWJPnSB9yzJC5aQLgg4ymYJKfbGL3nVEiDHbczh",
  "key3": "K7ZnrXjwtrAFaSbD6o8xzqJgwwQg2dypSnVwDaWRZDZ7eaowAJmmFieipQdfBjzEchmUPoPCje7yjogiksy18jd",
  "key4": "upwUPZ4WSJ57xxosrptiiFVB3dmJRXQETy4M2JkBcnS1ESew3aqk5Sggi9zD9nHCqeyk6sPt1HVJUZFQDdCViqo",
  "key5": "5EN4XaQKiHZUXV7PTMra4xGFUuWzKFTYqWrzr55qgrVTSXceTXtrj5YMHLD45N6dUuMorJqVuJyQn9GW6DfWcrN7",
  "key6": "5t8xgYPagBaEwSexbUfoH4XjWkF9ofgKF8YqhkBFnpEHBTV3eZNwaP2UT92dULTXwA458uKN6QwWQWtD9PhzgC1G",
  "key7": "hHSj6DNRmTdPPodgAYgpkRY868ShVtNK2pWTAaA23adqv1wyuo3fsKnk1JyC8sPpjfu82Yj4o6kxMPNzwdZDRVS",
  "key8": "5u5SCxPsmUiwA8BE1q4eC7HEFrSEqrAtaVHHWparniUEgDoPf2Q9MeBVwEjDqHFQJLFsKU6VEa1JTm1BNEEVHKWg",
  "key9": "5nJ7aPnSaG4TXDMpKVG6ZQyGSfqfQVXFkX1xEHkhVaQ2T5TLyYGDskdyLS7YwD5qCkq3rBFSds2EDc692uujib6g",
  "key10": "3Fyp2Wf2DEqJcmexDeFsAZekRf72ogjhncjn3KtkSzBoGSLatcHrk7FfL481s95N6DzqxphSFWZzjYPVUvGhx69y",
  "key11": "2haZptpZAwQ1bPdHXm6Qb8EivzzAMJLyRHDm7XgxD4eEfJjvMG8qf2HCSAE1uXmCjo5JG67VhKioF6BLsTRT1bFu",
  "key12": "2VuGRhq6HX5FRniAPicgtGHbhVWKTMveB6QAofrscqKvDaAT1SRdSSHyMUX7NeAwRbNDF7S9TssMPoSeg7ADrWUu",
  "key13": "Yn73yZ4ZVE5okpqyhzfEno5kuwGWERDMgtGZd3EwrFuM4NUKGZWg1vQxHtiFNKF8di8RwsAZdKnLg1pPBTgdhFc",
  "key14": "3z7EPk9EF1NSmps76EJYXmYAvhzUzsLjfasfj4RY975x1o5uV9cwNGSxTdrg1hq5Wc3i7RFZzn6EepTx5Gs8cs8W",
  "key15": "969mt6bgvyv2SjbrLDxsoWu11w8bVB3bhQ3ZFKuBo95ZrZG7CZTZGZNe3LWQaA1vWKVCTowT5gkgJuZ4f85PHdE",
  "key16": "2mSTiDAqp3qkTCvbCH98dKi3jKobzqebt9ukXKBwBfoG4CcumDcKM4vpEvoNhUfHJq9qNJBWSDoaoaGWL1Fc29VN",
  "key17": "5YzCES8JBeJKpJrSwXLg7g3ys35sUmhgm1k3DH6tJNjKzcTY6DkXvhX9C9XMSmvSX4eVF7n4dxffbrxRdzfmgTGW",
  "key18": "5voGuLwDs9PAs2WgB2hn9xygMcZPyDT3sxohKLUuanYebgDrL2mRGbzTHfkc47henJmWcFtMmzooesohaFLUPbS8",
  "key19": "2zEBU3VZcPxHqX84aUCH8FAjYYPPKTG5G6p5zozb1YXM4qswKyBQhVZhdNxzpMk85dq4TsJrXnAHSCqp9NM4doMV",
  "key20": "2tQg3VSP4XtHaoiQFj9FyVueuujTHnJEFXZdB22S39YuhjnuumuRimZuokUvYa6pWaTpyrrHETZTEwauepUczVFB",
  "key21": "3SxhSTU1oNBPqK3vtVVWf9K1cVmoV11V8eYcNsN9uX86TEPtfztCrXuFojGnH5mjdzRXFkA4v7dwqna948C8iTKp",
  "key22": "38etHNoG2svkpBCnrygkPNfsvbrD6kKpN2eGV76pJpSuo2YraERAf6rUBYje7eDcza4GFAyATHuut2fYweyT9CK3",
  "key23": "5ANMJShRUJJJbXLrsWDS9QJqkHzbzKmv3AZHdUCqv4KdSTMhDc5vqLx3Rqky7rPu2ZuFactDxVZgbBHNSoGFo66W",
  "key24": "sgAkgX2qnAt1s7hJ7tu6Zg4ANT15sz4o8LXZQa9JgLhSbwmwP1fGEfHArhZbNDjN12QbtFmAJoEDbwDJYHv4vu2",
  "key25": "e81oCzvhco6FR3NMHR7MHFcg5hyUZLhEf2rr31CfZB4KQKYiJ88njUKJrbKZjksg6J45e2WmYSH23RV6bUWocMd"
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
