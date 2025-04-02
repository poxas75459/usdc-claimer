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
    "36t9DqW1FDTBSYY8BARpJrTgDVAmhcCnJQkSknQuHeUM57TtAkN7yJzR8pLEkxMvk9StfWGgm1hFuVHK4FLvfcYF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z4HiXBoZFR9RK6yDhTYjubmNkmSvDeYh2hXV47XbcU6E96CfjCVcixp5Hv6E4BKnHa1yCpwVHAL1iWzVDhpyxQz",
  "key1": "5LBfNmCzm8SpzwJveBohPST4uSDbxWBR2iczjxiVftyLR9fbqdZgMPybN4Pu62ku1BVG48W7wj6r3Sp2HeQzeWjy",
  "key2": "57B4x3xVXh8en9zryjW2kci9sqNrG9Nu7WgWmra65oKFyk7fTdJnJLW4s9NBeLapaMNmVPMU6GaZXcAEFpQMAPRF",
  "key3": "C225X56yT4mTZ4vfy9wyNZWM8nUt7QvCyQMrUYTU4BEmC176YCHvqSUBbvzy4ccMqXuyuS3nXXpSz2rxD4AyJbV",
  "key4": "2EaqUcdfSjmHL5Tbh1R3e4ZBRqkoWJcm8L9A6Ce7A17ZajhY1bTg3e3SACsLQtZcYLnR2r7sZfGxaA6M3o3qcUoc",
  "key5": "5a6dmLbczSpK79bwc3yAJBv7PMxvYKRBkTLzA8ME1xtn6vy4YcpWP6K5piDJtUuGnncC4qKd5M3QfiCWreaLDgdh",
  "key6": "2byHmpRfxcp7nxiZ3c3yFQpPQ93ayu4LvLAFkjfNHxaprgLAnSdaujw3zaNxWi6NbpKT7AnQiHimSeLnzTm1ZGES",
  "key7": "2k6a9GMwySc1DKRkLPhQJgpUDQM8xeeFSzh1bHc5UhhziQiNsDbW8Nn2bbVv9J1a8GxnTX9xw4Z3coFdy11n8aKq",
  "key8": "4Fmz94hDrQWtGt1ZZtCCCnGUhHHz8izaiF3tzxaJiadzfJQ39YessFwTYatmWKX7RPv6eifnFX9h7xbYTgyKo62Q",
  "key9": "2YPAhnHDs2Erd34oikGas58ihCTM8GJT1Q2GMxyaPr2g7bqcKVvoZxhTEs4u3wg5qus4mRC4JxShFDgKGTgq1WrM",
  "key10": "66Uhwr3KpEyisvuxoShTzR7HfG82EKKRRY3YDGsL85wbcwCGmXQ5PFxqbqg3vEdhQmWdke5WABjMYTjc5C7ZMhet",
  "key11": "48d5Ecw18R54RDmMTYtnLJwu2S93bgm8THyCip8drP8tZ4K5tvibStAY95gWQn9Voj9KNS3LdbgLT2ngaQNqyMpM",
  "key12": "3mDDf86zTxdn4ykp2XuLAC976V2wP5VP9eihZP23dmEwpTWEpYSedzb2NEvNE8QjF1AtYmkm6pQUZUPB7BdaiFXx",
  "key13": "2dE1F9omV4GRer2K7meWnke7TuSUnmc2rsXHLTRhgzRWBBiKwMD8DFK3pUUB7dSznGh9g1g4TBCwEZfFmXkije6H",
  "key14": "2A4o9RQMgXHmzXMqbSo634bzqPbmFBBLyf36HXjynQg13U91fHiattY9nhe7PnLSrgzDBMuS8hYrVspcS2fDB4vP",
  "key15": "5Eznq27Q3bYQ6J4USrTfo3N77xN3HLJy5roNoinEwYDT82TW172obqRi4ZNQ7LrwuvAHqDTRHVbjzN7ojZoJ5zn6",
  "key16": "1QXymPXdPkCmZyZydraMjNe9xq6eFdRCN4AdDBkV3WHd9JhziU7ihvqggnxsfvEmBejbHjQQ4TUsXjZm3BfZoAd",
  "key17": "5xnn4yR854dNeqjxtkoXamX6AhWMbqYuBPkQ7S4WfgmrJGe5sMKCtgE2U7nto4KdZxnaxRRew3XPj7EZFkdkyPue",
  "key18": "3zpHUN2bPwQ8MfBEBaiEHEMzt9NkFbJM2BM3f9FKKgyCWAgGtDzmC7nNHCxGxc912RXDk8aypAoLshstYZ25r2rt",
  "key19": "4AnfHBs5GAVR6zuHQ5Xu2v2YHSvkvgxyiSDFDo68SDk6ZLKDz2Nwkr1feMj4PtxmMvPsEnDrTr7LBtaAW7WynDRg",
  "key20": "61VWSUqJKEtsEZop6ELu5ptuAjzMZGiJx4nS1FnkbDKr8ANkWiZLNb8uu6A2PRVGJRMnEfXrL8dy3B5R4aSB22JV",
  "key21": "5NNiiDPbGYd649tmwCYzL5hYx8FzJmiR3mnk8bRT38AedaYQb9tWRqwH5DzZftxJ2RwGYqBrJ3BqVzACVSasrbpz",
  "key22": "2JGXdiJ4swvAqJdbgdg8wJyYmM374khgf7w66c5oRmf3K3KWVBNWjThHJt2qQDa14Q4iAmXCFBTM3QuvDjL6BHwh",
  "key23": "5DLEcWY3DBfDkxr5DDyHWVn7JayyDCJFbeGFVWr7FfrafCBouT4UWTF72wm41RZo6h21rvvbixheXcMzmPWkGyD6",
  "key24": "egVAXkzUKQzKZKUgdSCBYiee7oRqi4kCL8898BhfGLktgDcbFdRrin1dZGDQFWxZAN8czmx5E4JV3d5AiJCwHAf",
  "key25": "4aJjycBCqs4qiuvdApFpfKBfe9m3k7yeVDBxoDPDDUBaLyGfsmNdeTnedQ5hmRevL7JkRwzTyqc15uBGcZDeyhvp",
  "key26": "dk9WtbYKucyJL8bMHg9HpGR7XqPZTBe89HigjAGbdXyBwAxMx1mpY1LSmhEpFumLEUNNyahWgx4L6irAt6Qu6nh",
  "key27": "5nMkYPv8Yi8BaffsMUfAGT9g9CGU4gwu1XPowXeEHvmbAKJzSDD2UvypULB9hjHwkdYCqYpcbisPGmrjJutaese5"
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
