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
    "RKv4FfkrvV6fkV5nAXjqSoxBEeNekgT6u6jgEMcJdUXFUEzqoYoTwsn9ntNETj3Keaod7pRiMhuM6WMp2KH5u1F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bR4Tr5tTgK5E9Qr6UjEj4Ljvn3gu1KdfWvqWEjcpm9wNUtMxQ99ipNZMEfX67BFnj7Kwqc9z2EWnPFeyysvsUyw",
  "key1": "4xbDh6cL1jpwyE7DV1omPqao4tEdo7jhgRqPVJCp1WpK2s1215T7rToZiTPfm4AHbyV83JKNAwX7zhjbE5jFAK9k",
  "key2": "iVGTMjyUGDG6Er2ugDS4o8VV7zUFCKYqtJdgvnd1i4Kex4SuwqgVhPqxXnicFo4xLub5sKBiZDQdPf669hhYhfW",
  "key3": "7B5eYV5Z5UwXUpvnzj43jRWiPPmrN8MshZysFEEQ1E7H6sdaKv2Rsnj7D1J2ZNQ6dJRTynYBLGRqnJiqvMqjfAQ",
  "key4": "5V62oY7i6qGJRRVRCNNzgksT1ZUHjEGAwFrkjBHE1DMNaSsg56LJ5mcjj4SB6c8ZdpxPyNFmUUJZ3BmF5X4DJHrH",
  "key5": "27XmuxyUGW9JxvLUvTYSLqnyP4J9M78nUs1byEigxE3X626sVTanEHbm3QSPrCAYyD6R4s4pUB4eRAujBAaKzP9g",
  "key6": "39MJNhQfDfFPSMGtRiyVDfSrBYhbJEmknUFuyCS2SA33tDn85oUbCTKjpCUFGaDpMKR5T3mbH5LbECUuTk1gr9q",
  "key7": "3AzaTdAZfhS85WfzW1rckunues5uUnDhPyGdQoEAwBeKTTqiztKMwFHnPaoW2Xbk8RAiCAzgMsnGBeRPqdkQrZsj",
  "key8": "5pzrSre1GiJGNRcAeUhcQ3dRrwFixUSpppL2vBnRkdZvcJzJCKAbPhPBXqFcdATc351T7mm7pryTAXAMvvNFgWyb",
  "key9": "5ZoRYmegeX1ELfsFo7ghog7w936FXoxEMYV5w1m5MmTTnQQQg6NT9ws6QePmMbT2ALkUrL7LGbrwUDUGK9RbHzSD",
  "key10": "2t3xbBo2anei5KxuJfRTr28j5PeCVacDgR6x296gHU59MPKQ49X2hQkZ6JH1txM7YPqgAqhXGmnHiY9coKKDu1eQ",
  "key11": "5r1dj64rKUdTUW5ScgbrgbnuRLXkRDuKHun24e7TTEbwBBfAMGCZta9wF1JZuXWbTdD7NvujACZr56bzfCPThsU3",
  "key12": "29ourBcpJyniufdpUTqdtQ5HzvCLgb5oikuoHtZW58eFYj7HRKxBgHugxQBM51auXHNPRQTw9ED5VfGuB7bvfWAM",
  "key13": "2GKRPCknpNpePTSVKARaG1RYHME4rfRzqKcZa8L7vsMafpNxVJ9BTWMByLF16jg39GtLKZnBt9MLHWcsbZ9RGAXv",
  "key14": "2iJX3fi3nAZqA6jHJCEeG6EHLkPcJXLXG8RDdUKU2rhVHCrzuzpEkFBzQNStJPVGbD8moSuf3Hg5XiRYM8JVwBwD",
  "key15": "3cpf7MFZGq82DjVqNybWZm5a1yRYmiALud96K7oaeqx3KfGTQFYrFbTrtXUPmFv9nPgqh4aUgA3VDZVUhY35RfuH",
  "key16": "7wSRnPufmf5B4Aiod4vfygvpBq6n9AuGMiz6DgHUEcw5gxSsfJ4royHMA9qLeUPgLproz1yfMmWrk4j4y1LEFQf",
  "key17": "4qRENLPKyD6YzP2qu9bV7GR954LpX2j9P91piEZgetY1RbBYm46xkbTMJWu8GtAmtwtEbejq3dKCmEP9N5WVpBmB",
  "key18": "55pbaMPLZQH69ZvW8HGRppMbQxmVYvgFih2Apw1LD7b8w6S2BFo9REgmgev7UXC3AGRAfPBLJTjkz71eiwNy6XBB",
  "key19": "2uj3rLmSqe9nNpCHfsLbV3CuvRQpkxfZY8qzdAgo8zdBK2nx7QHjoYFNftyWnBsBuDfzM9Dc5Ywh3xSJ8Wbuhxzb",
  "key20": "3V3eMYpG7YJCgBPGtLoJA78PkaPo7kpKXkcKKjR2sGppfd76KYXJRCdy1Eo34X6bTWuJeSoCy1i2irConcYzbFqD",
  "key21": "225Wvsgbaqkb64771JsbcawG1iHFCWypDbc2aBzjJriWb92JjiAtmHUqYgzE6BeQuNr1oTWML9EzPqJmVw3ZvMqD",
  "key22": "5wxJnaxhTEkdXeiFL1jqhqfkv4FWZCYkVATeDJoLQvfT8tfQCHWw1dhRJfP8xQwXN95mCc9ahB3grWk91HoHYasT",
  "key23": "5Hys28GAPKu1GbkXggcHSn1LPn2HvwiiJEhSBGMXzBYAYxJTLZ66Mt2RPrkD56XbEWMkGFdvMF1ExcZJwCRjrZLP",
  "key24": "p2kS33FdJRdra1hPfL2wXNfxseeAwCGkV5vioVtVrE314gPHcPZFhyJoXfo2RMHnCq9dEWQwHeSJRQD7NBFq8mD",
  "key25": "dC6reX36956KmLN3KwvhPSVQDqAxsJKD5QxNeCS66ocRzn9nRuGiEto9y9i6knLP4b5zhSaJPcEYCFygJTNEtYm"
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
