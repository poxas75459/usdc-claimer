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
    "2UWkcX97KxQCBAPK1vxGAxkunMuZuiGtf2isrfmxZBd1HJby6DRA8Sp1nqAdg41uMVpvnQWCQuR2An9JV8n9A2b7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UCaqRzHnbbMW4QEeLnRdWKqUVDrUR5onnxVW9qbCnNJSNScKijMuHPyVKno6U3fLH88YHLfJP6U68FGwBzK4b6A",
  "key1": "ATqdRcKxRyEgNVbQN9oAKRuWj6gPksxs4dMWaxY2uc5JdpbUFBnZM18xRkZJHur8Gw6CAX6FCBTovX31UyTkfoE",
  "key2": "rQGJMYorYHA9HRf1jqPsDPmmmQkmytKc2faXuXJ1F5oEWPtnBZjvyT5KJJuQebey8rWrigXrgERK3eGvwB2MaSq",
  "key3": "3VXMEn1fLSFdwr3Re1t6VFspoW2nwJehW2xGmH9Ke3Z22PbCVfiajCcybP1i7cb9kWWcK7hz8n93uzf21uexmJX6",
  "key4": "4sH3fbVVv11FwSLdjjJT3m6eDWffr92gVii95BYbifGgAY5i4Ci16ApLmF6duxT1UnzAZrS2XqQm6fx5VQdaWpVV",
  "key5": "2utibdNtjnF7wjbcmEnjcXuPTMKTFcMns2Rq4THnV3WhUMLuNcop5ZUUNQPAfTpo9oCXniA4K19AuWDeJJn5g1JP",
  "key6": "gtMxmDn5EBXz2LeKByRNBWVMWgVSTPFrxVoyAGmQSw3UeGKFdbUkikEgCJaLcbnH9i7Vo3HzJazSvRNiGZcPfy8",
  "key7": "3wb5b2Y8uFEWD85W5AW4YGtk1FNt8hAyYkbFDcQsdHVohxiX7ZrTQAmBVNivG4mtHGxTXq7zZ4ueyrPdWg8vucQ2",
  "key8": "5eC8mHp6tj33bFjNb9zmuxRHtCKALwpysVk7szmZJJqvhCEgYqoHhX7f9DjhBmRskvoB7MKgQyC94Sp6f7STBHJW",
  "key9": "2mFkyB1wv5qnwUCLyFrNd6YF1TyPJvEUcu1uG9WvKNBELT9rRv52rrFSYxEQ65SZ1tgAFj4gT8R33h4pePeK9Xqn",
  "key10": "bbXDziZA73YDbWA2CF2wLygwG6MLoUikjFHpXLLoKokGCDQGXYXjYVXDm1uCxGxxM87PnZpZw4xdfwv6KFsTbvs",
  "key11": "3oDUrjuEkwDoruwnthaNgJNGax6bwSNixEpgvV8NMR7iUTHvQpgudnJ725ue8KdYpbyy8TVZuTjCAfnq1fahDzkp",
  "key12": "JbH71rbS8f3DdeU3wNvJYZmH1ReUi6bn4VUfAMBmH7JD1uG2LhSVfjC7Up17Rv8PZr2GfVN7ZvtisFS9adgAjqd",
  "key13": "5DrsoK2gRpd3ePYSaqqPYEjxjaPu6R7nwzUnDUvgxw5LGhc6wLnzrfY7KPkTzLQ2cgLbWVQYLArVmAcyF6ZrRVEq",
  "key14": "49ifRScp69N1beAEfATxNjjRCyqhuB8JxxVxuxMgmD9A35CrE5cAzzfGFRkNuie3EXokeP7qGFnhbw6NWUhszkik",
  "key15": "5QKaQwXYWN3fj6dPkvvmLJKNjuetgtn7LgU4k9xerrT2usi2MRmduubhEaWF121a34B5DMDEQeFurN552b9M7Td7",
  "key16": "nE2KhXfbJEvyiGRNyKFpFKyXJeRzytXnjAphoBjRKgayYrXL2BLzu9TcEUU7gnPfNF7JBSZ43k3ioaXnV3YSSr3",
  "key17": "5mb38nvQsA5nmhfKhKxgPdHUeRLL3hsnAHRmBoPmkZouqEtqxuDmc3SbNY1RAEQJHtPzNv6HSfspRL6vzCbNYQ66",
  "key18": "HqXnyKp4kX5D5p8nsQEXbp7s4mDkxTY117AK5HMedY3LDQm2LcaZ7FiHVby3uwzUpzv2prR4uq2hWChrWeqW7nd",
  "key19": "4KcNQjWDAZAG5JbuxYxLVLvsLcUjANgH9aH6JJfG3z4BFCftU965CHwhf1tnxibzAYx27ogdbsPYKyPia6Pt3EKj",
  "key20": "4NWpZaR12g5XgxCEUTjCcRLj8gew8uzCCvQMGPAEU6SDURGfYM8igcqDtrQ27sMTwyZTr3H9AJmKyUmEPq5mRZCH",
  "key21": "3n7hyHcTRropVj68HJUXTzchB2AtsSzeqv5b58pesNsiUiccGk2WfhEnvytmERbRfBvAEvMdXD27DgYr8RUkiuTQ",
  "key22": "4hWkey4ftHKoyW1Lyfk1ThSQX5HaEWhjgrw1jsmR9bTZM9994XoRBBxu9SjhFKSW6utefsdS4wzA7EH8XfsQh2Fp",
  "key23": "nprzsssgyZwEJainZ18wktmXcgDJypkU5bmcYM85sUm8AkBz84zB9ki7AzZJ6dBPbiyhrZkwYU5kP49ZZcLxh1z",
  "key24": "3mgnhn4L7Uzk1yGFiNR9e91G3soty1C7qwSWhXYdHaeaRaJDKZuYxpDDyErt2JjbdAUS3bSf8nv9GBEdLJ6cGpWc",
  "key25": "BAC6UpGsE3SgVJxGkhoS6pZ8HFWM3XLpnspAGNcGdh7kQU5VJdTKFNksMP9dYELS4XTEY8HdNhtAh7Wau6FCseb",
  "key26": "HYFAukTygQ9LdXY9Xwgq4xtTwTFkX4hRcS5VpPEfWqeNJk8wjPvdHFdRAqxrcpDgnCuDLxYy4P9R7u9rBY7tj8i",
  "key27": "3MVznzU8cnHqYZe8vY6nSXWkJzPQq8JdAUJScMEv5scpnCzkxFEPheWWaHZcDo1F6XvW1Lzse2embLKdZEzp256j"
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
