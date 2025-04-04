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
    "55rp46NUc29jUPcA5ekB5r778aMfWVKTE1MdsZuLxv6uHQsrY5Q6njwY16WHR1vPLjTPqLMCFsNFfLUsM4drfPkd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26cAq6oZqGKuExoJdoYzuYDYfrzJVKyEPP33CXMivPqavdSLA1hyRfvaF3sX9FiC29KpvdPJMESeJ2gtaDjDmf1b",
  "key1": "2gM8rgiz9kdU11oVygTKiKhf4WjbhP77aXZytFSGBJqSLkma3KBtiodMm3GHy5Eb86seUMDu1Cq8WEPfFXRyEnvu",
  "key2": "47fN8FeANBtyosaJu9WFaRe36GQfnHtd3pjA9EM7WsyqM61b4hx4KHghFz4yrv7KMHCpc6vtwAiFSSFJRoi9jMxT",
  "key3": "9QzRwWUYUs6ucEFeugKpdPYFcra8ccwicnCkxsykzGFeAxWrSDfjDtgTg25ZihyzYkBSk8si5zHAZqLmu5zu66W",
  "key4": "2Ls9tiusaCYurdadhxyUE5xt2mM4eskJhHPkYUSF2k9j6HtWvVfqT3Gb9ShEMkbeJNUuVi8qYm8hzJBwwrT5yV52",
  "key5": "26BRL667BF4jvgnn33WGqSVnXcYURfic5oRkagaAXBsngDjoCsQy84KPmBQm7UZEoz4os2dZsw7mYqmjuh8oEyym",
  "key6": "3fD7odzYGeXafPm2Js7Su7cqFNbtfAC3DeVbo8nRR8gn2xyB2JQ5qA4fathKEbw64WAJJB9WenTVKM4doDsJ4gvh",
  "key7": "1EpLFnTHXXddrXVDUKf3cR1ji8jHXjcQq1Z4KggLGNK4k5rjahoZQXSuiCtffkb7JLKwEtsLTLzGdLsL5QPMT2e",
  "key8": "44TFNF3C3XQrZPUkuPaiMNSwQJGmF8Cdhi2rjTajo14q4xEHdDQPbTmaot91AS1mVuofCfKz33oRRjqidFnzDNpF",
  "key9": "5SAVygQumXV2ePJqmNQrHNfqeKKRk8BvcKmTLaJYyE88t68GFCKT3a5qEL6bko6ajhQu3PbeYHqnvi1BY8enzcDH",
  "key10": "9NCf8FM3TphmwZrioPh6Bj1HZqzwjxjWKyUQBbMgo89HWsvcLRpEc9U7h1qkrBEvKGkS5W6mK4ukFezwgTV95Ez",
  "key11": "32SyYut3th6JAPXJqsuBExqKc8fmhhvd7rF4rLbHBk8zDbhR9z7qC4JU7nWdQxJi2cZvj5iqVbEZJbAUVtqpvtBW",
  "key12": "26eR7tusjgFzgvViaZVEVPmPyhZnByxbGqjiYBx3PwAhVYK1mi92ty35FjTVLHQxCcZtQkRUjQoFByHJXj53FbQJ",
  "key13": "4QMwz13mDVsPsfuNm1ZD4GmPY38nvMy9RyMsYspScpHuurYYoS1UEFKnFAXKpiV5159MiWH3o16E6kk3f2G3zbLt",
  "key14": "2gQ4hG8YUWPiMShpbScqcfuJfJpWKVoYDf2FkThLjynf4uXvgELBJxupB9E5pEsYUSDwo6m5xFujMdeBkV6Qnn3N",
  "key15": "4mBZbvPZtzmJYkupxTTCjQCNXb91DB5WShZN1eegg6XoVy7E6Nyfj3jfffRGkvG1TLPPBpkv42FMSxHj1fKQqF6u",
  "key16": "3yekVhV94vW8t2gNWpzyjZZh1KLWoxs7Ssh9L4Va267isXP1VEKEWC2EmQGsid4H9xGrBmpuucxpnQneYbU3eTyM",
  "key17": "4bYkV7f3f8mbqJEDKXfUmV1votBdQKpsBB3QNNzZaDzw2asWGDcHor1oX1wDbVjvqzKbGY95TAHWi96q9DrfTVuU",
  "key18": "5Qe5YBofMhWSZoykwATvWVBqw4HTn71pbzVsxvmLG1JnVbUQHix7BEJZpSysCFrDt86FMvQYBgzpiPzHFsyw5pwz",
  "key19": "xu1cUDAfTnrnEorvMg3xK6kaUVSxfwvjMES5wssjNaSxu9En7LP1PQmSDKeERhpdnCuRGvMUQGdQ1eYvz8UyLsG",
  "key20": "QLi9vYQB492WRtdgU7FXUqakcd8mcNhWtqGRBK9AfmL2wYASf5wFkU3xVyDNAT9tXU22RqwvgBRaddfkaxCNNva",
  "key21": "2XLvHyZUt7hRtr5ftVf65GufyUWs4mWLi7eSmWFjh7DLW1MkQYmWHMbDNf8sqZpyBihGtV4pu8DjRx4GB5MqiW3j",
  "key22": "3vB8pz6UNQFyT1F9Yr9tCedYM16FETTTRjTk6TFediNtAgdrRTGW5Zkv8xksbaJQXbX5my376Sivr5R8vjiA9Hhu",
  "key23": "54RchZhY84Qc1nY1mX2FvvWiAJJTvNCZP8SdWivqPbVEtkmiV64Wi8nGQtokxpMv5xmHbZLmgj5orXeDRLnUyjwS",
  "key24": "4f5xsmgj2sDbqUhV7U2oUzPGibFUUgEbH9hPz42hfXjvpdDShREwFBFvmPcDLWmo87vZ9Nyoy76p6ikmFw9iDbT6",
  "key25": "4nzp31cAk6nMksfBa493YU9796TwkHKXLa8CyRmZCuMrzu2rpYXzfvvxHnzYorK7s5YCtf8uM7VHLSC5tNDDNKbg",
  "key26": "3wGcxyJFkx69LQRjE9UKBwUXhPPYaWooje4axPYgWx5cr4ksQ1VqFVKrnmJNMPtNcrXyUBpdCyRU7AMtYanPC9VN",
  "key27": "4qpph1Kks8qzarhv7F9rrCMCC37c6LV8rHqC3D5geRTMfN44LEMgHK4CupG7bP4j9PUnSHVRQF59Z9w6Z7JYEupv",
  "key28": "3mfM3c3c94tHo5fs8GDWnrP7banvkKjUcVGdSeEr4sJqxmwEv85P4RuB4BpyVNSMbo2NnHuUtkLXicDc7A3NkuH2",
  "key29": "4ZnBXbCWwXqVGnV57tkFGCCZCFjYNE7uGaYmT7PDgZBhjM8Su7p4JVaGMhvs5NfqGmg9brPuihUG5Mn1zrjzVVui"
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
