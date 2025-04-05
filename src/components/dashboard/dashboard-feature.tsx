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
    "48op2y6Qn61AdKwJSxYowBnXmixZG7cyFZGonHwCqUruvcM3RFVnsQcpdrUBJ3GSntAWCSLrMf82zv8JijpafNq1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y7P5LPmjveppr8jguohSgzeGvTLReVTTCH5qLqvdwDZd1KAW9vNQna3UFTUHMuMCX6QztWbHirtoDKBopZB5za3",
  "key1": "qpLYAAxfDvTgGJwi42PQTSnHoTzrsKw86PKsZiLQ97rNNu92CmQFdvjsYodtLoJ54Wi9t3BvsKS45MsiKdQsrKX",
  "key2": "3WE8LFkG3H5C2stGc5HjAMjAwpY1EZzSi5hfSPUUWSsKaiWLuZx6bmVjowHbanApJP1UCLfMYcgvmBt9k6KhvHbt",
  "key3": "413bAgivK3L84m9NEEby91GuQkUJfhDc8ck19E5kWVmdZp3Y5zucYJpsioWu9YLesxehgXpQME37veTADiKTss9T",
  "key4": "LqSTQHFkHZzAmUP4jiovN9Npc9UiVwi4TcFFV4iJZg2ip9XBKkrdkaHfExEuTrJg1vFM2uvADKpYGHptWtyqQJP",
  "key5": "2yHAT2zukGMHiFBwZ8oHSYQxr1C6PgxrRMYUpiQBmgx3kr47nhj3x68d2RGoAVwevT5FMd6pEy9JgbNK344dpqCH",
  "key6": "BRy3rkUpvYTZdU1kzVbtCtmfTw6ue9soSHkwbtiE1CmZu6cEsPTK1XunCnsQvbCzxSvhTos1XgBaJFtpSbnPpdJ",
  "key7": "4znr1A8dkbTKbApbAXAuJEhyzmQbzP8d6TiK5PWLDDiWisBJWDe5qk3qJ6NmX1jb41BSz6515v84CR1NrnwwKDnL",
  "key8": "5H1y7tPWj8PF8VhBeEYPrxDsMrcnnhYyjSF3N3SHih4yQpdxK5xrXSKPWRabbyy5j8gxfgAxChar58SP7NJFpd2a",
  "key9": "3L9KvY4bJ5md4b4Fi2otuvbm5VAqTJgxjGH3b4nSMfnK2jyS2W22Xn77QUtJrbf9eXPdYt5YEvxA4vPm4w3btGAR",
  "key10": "5HxQjmVt7kkSWDwBEfRESut228fyF1edgA7uCebds3BLy827x1hiU89cxMU7JZjLdnrgBPmiWVn4KgAq8e3i7GLy",
  "key11": "2eEKPFNPEDxLVA3hW2Gr9EjYQScgUkDAHMWE7AoWzzCavQ1EMDTWkRyQpQheinmxvPB6iyxxr79QmcGvvvCRfKxb",
  "key12": "hyUNXxssU8M2yqdDxWYR13t6Q7uti8LgheRZ2h4L2pHJCi3qAySa26PUeQCupJhznjsSr6YrLLj6m2JrVdnLLi9",
  "key13": "4HP7Wryg1tBrtoVBn2QY3KAx3QujtTwxREnVoTzMHNorQJni7BkYtjXXAu9KAq6yfqzkiQf4qivw8bcZ6cDP9Qp6",
  "key14": "616w1tcJYS7pbJnjydbNi65yxM4TdoXS8Xi3H3MsFJJhhgMhNHwWVeDYcmw8w5CzMUEJQk14XMNT2rRp9saiLwqX",
  "key15": "4Pq5DrEdx2bFVvQkVUdFzL8tgN428XH335uo7gd9yCrtTWktCHR3GzjYuUqUhe4WRqmJXmKu9pN2hrzPG2axFaeS",
  "key16": "2oym8LrbfPNUdMBFdJCjasA7cxsph2j9yYAxqJKCeXC34fEPpPrdDRhJbkRYwsfru8yJnnZ42NLFvEfLPqsgpKGj",
  "key17": "4peVqG7enok7iycZcNmn2DKqhtrE15yxwJtQFMWAn8QHyKfPLKpH3PnmE3nLb2o2wNdU9akS8ZyRR8d47woRRDpF",
  "key18": "62icZ8myJ6dmBbqGdfUvgZHcDVUshSPo5BvueWEbKr5jCpBM7tNMhpzzzz7JqhHaTjdJVSa7GmrsYj6wh4zUozok",
  "key19": "3fbbiEk6yBe661rPMVBccf2xXVeYmFUTvm2d1BSB3qCRV8u2Doj5XAnzPW9yXXU6PPbvC1iBmjEewbxUAfcS8JVE",
  "key20": "66RTbaxNvAFGn5Uv4ayde7y2LZxxUyhjUmEX61sZtq8rcBuQekJipUQnEL1BgGb6uJBErzqZ8572qeQ3c14oQYUR",
  "key21": "5z7KdN5tm81g4sF42PecMCi2jRxNykrgJe5SJG1bkv3CgfEZvfYZMixWX8fLu2u9qqcQk9GeJdFJaFvfN2LRbeE1",
  "key22": "52AsciyQCox6mzK6DYDGZdLMRvSjgmffvrUUCJ3iANLhpfVjbpSvRympZx8BQcpSuBPAaZgVFdTv9zLyCEqBkFEQ",
  "key23": "3uHeKy2CRUvRsBpNEphBCEf3TWeZ1uvu8TVvURRQ6TCkSjCt1Uw3WFdEGSoy6SzTWKM2qYkLYByhx1nKT5kAXKy6",
  "key24": "5Wme7dSAeqTk1EFDj1M2XijWW5QcXB6DTajic6myFu4EUxZ7AYMWkBFGk8y93M8Z1QcyY6wMhwmE6JcuUMBP7uTr",
  "key25": "2NXsSh57Zn8Y76m5ohcybhab229e8FMUpjZ43MjFYyah2SQWLe8BYB7gHLBKRjWf8tndPK51QJFBXecZkWXjFUNu",
  "key26": "3FTJHzEv3vKZuweip9c7vhEyUkbHqzBubWQghdJzzNf1ucsyA38ZL8XoBDP8e5Z7Kqzra4zPu9wNT7FAghPgs3Ug",
  "key27": "5ksSUPTCQBhLV9wqk5TyemqSnVW6xeed19pCoit7wWKiF1fQLGvhBmrsZGgJUKsxaznmcxsGNbtzu9NhpWkMVY4t",
  "key28": "2TpX2UTVyHhJ5i9wTcdX73ns7cSoDwPcHLyDNa8yXhpdRKzz29hPed6Zn6KpJbCmansdvSaWqJxtMWrHYR4vtnhD",
  "key29": "212oGfhhgZ7tyk3R1NoSmBNrWXHxkcQZijJ4TzMor51fsJSbqUQRpkckq8i2DsxRQdZaqTrs7EdvxkFyTo5zPwLu"
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
