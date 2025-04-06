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
    "3NpRxPgxjErZVT9cmnBCUzeMVtjsrJZw2KX5hQnTFyfNdfbJ7mnjxQPhNYhYBk4Gzhp7zuzd72T78XLFuGR4EV2A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YePaAsZXTNmvHePQFkQzGsJGERiBuYTT7pJA3GXqtDPWhhJtNrjChUbwHiekQzMurRZLT2EF5uBDPkhTGi1s8iB",
  "key1": "5QEVvTAKUNiZQMTcNYhZyDs2kvhjmRPN4P8fuQ8y1uw4yPpcwUJr4vSJdPSBaNDLUmeqEoid8z23vrhai5adiro9",
  "key2": "5PntjmWk958Lpe18TgRY9YWPbaP78yp7zcUZt9DJK12u227d4CxFPvVAKamMVtP1PMcSyf3cqBwm8K9z9Q7JcBFQ",
  "key3": "3BP2knDsakbbCx6Ne1DkvUVE7WK4tg3a4Nxsvhah3ddR4KJoyANnKSCbgqUqME3VCrUs6eiyijpwpdmrTM44vA2Y",
  "key4": "58CyvgYH7195uGUoHWLhqaJ3nEZQj9b3LwMxTha9Q4KJtD4JqE84yetHHgaaMaaynAHSgVAgrRmWXBVwSgK5YZW9",
  "key5": "5Q96HHHtzH6hV1bNTszear7GrKnzZbHbmgE8GZR21ov9GCTY38SpmvuUjoRkNMYFMWwUDbCRK1AwcWeMGWk8SrFN",
  "key6": "3zXeJSeH7wD1BqzzK9TdGEKvr5jK8yg4btV1n6Msgrn1qkpiuqMYUr1WgHe6afCUaTwE96NL6XntwDkbtDszQXf3",
  "key7": "ua8QPf2xUnYRuvDRojcUni8VyZ2HwoUe6YNHjFkhXf67xzvo5GUrauAmtoZ8Gc1YnwZAJfP5pLZJ4xiCCjKE4TW",
  "key8": "27eKJF9yXNKmapFYejEEdSoPxdruj8ngxpKF4kg5i1xTPZ3NAPpZ2eDsmEvjEGt58ezvVSxA86S8B4uGjn3AUm1v",
  "key9": "4G9YEGNFb2knhPNK2o9p16yJJW2a5uQSSiuoEAXtr2xN4TXAx7GmHMPywGFPZrggPaPpcF5snVsrvg7tYP6F5iTd",
  "key10": "cuWScnbs73wTm9nPyRkthJpGrnie6UznNLCJ58ZiJq9PsfuQw2H8Mb2T7VWJ8572xQWaLjQ2ZwAL5s1nKudfH83",
  "key11": "3efSJhrxM5gkYCinsLVNgbYH64toTxfPwR4vpY3KGAZ4KT4kRfe4P5PrfSpMecfkaprXReTnhFVZQGjvp2GAp6AJ",
  "key12": "3Tsd1xTDEJJtnB2tv1RB4Q5ZfA3t8Qt4fTxXa5Lr3KKzkFKK2d6DL6krw3dNwSra1sgGxJdkFpPkPwFQ4Mk9tfU3",
  "key13": "2DWhJyfPmDrJFZr4fmpW3XJUhj7nJEZYrKQeREF9pPj4dj6aKkCtryPj43cGsmGeriUjYwSmoZx5dvGk78pT2iuk",
  "key14": "RZLHmqGmSDW1hGJnbBpuj13BWMJo2BZjUe7JH7KckbMghULHFk3VfDtNR4guyAjqbCx4GQFDHsZohy5pM4AiRXM",
  "key15": "46xzdC9D4aUgPiUZVPdSRg3cckVXCZ9z3o7EGVkD9h1cTeEX66YVWdxye8goWx28Mq6bcaZvrffp73pJfG1Xi7NW",
  "key16": "3XyKSSKjhzfHHdgqt87WX1YUp5x7ZDEpVKK4qu8ZjXSs6RnC72er2Z2vC7bWZKDY1KvFMGY7Xe49EYitga9vhbYJ",
  "key17": "62twHqBXeBdXXq6oeYAD3WppujugvPsj8F6wdeAn5fPQzNcUjaDoRUX3ZU7fMEfkGLSAWZwML6SDH1yN7wgmYd3k",
  "key18": "4TEHVptYA8ocJWoRCKPNTzA8XFg1pRAX3NT8oQQoqBtr5yJXz23K1dJH5iNtHGZePerd4sje1UAvF5QeCPSCWJnG",
  "key19": "2Z258za2iFCqSZq11tkWsQnzgYa3mLAXYW3vRp9hmnH3Tnyhwcz7iGfaFHwaC7f9kpiyvBE5YNWkWX512Er82CNQ",
  "key20": "2c9CK2Cp8ygFDBQvsf7UdxQ6oiDDKBHptx8wc4V5nJWqDdFpvPvrWAxzYX8mNp4zpDMPJPDYKWXb1wcM8KBURYZT",
  "key21": "39R838fL63atRM8gxDAAEHUae3GqqQDHZEwCCGnY75Z1AbFmCyg3o9Z6DUV2AHKC5X8ouMawK5wQMaBFbqDKiYnF",
  "key22": "TtUvXEUKMhoKWTv5wKUjBiYEcKow6Y4mSCaYmgxSdccTzJSwiuEe3wEoJSYJNUVEpJZmfQ1jnQcU5xETCZdjUc5",
  "key23": "29xZN3AdPwHGiJtdSAc8VWUapb6sg7mr7zsdKB2tpJKZB5wfduYvXz4NpoiqayZu9DwbZ9ZyWkCkTFTajrYddmkp",
  "key24": "3Cb6iMudWjh5kMT1Q5gCbuwjRjQpSAyUfH8LGqcQqGaGStQYVJ7MYMm1zDvFyUHLQYxiWnwi4iS98AjSch1PQhP5",
  "key25": "2nibbfz6LRwqgVctrJcdugkN1FaAuPp4wzmBfWqG5DS3honJFyv6rRY8HaqY4WksJ9Wun18GZVgAKdiEkJgc3cnD"
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
