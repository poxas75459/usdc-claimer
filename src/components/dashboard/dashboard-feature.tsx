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
    "2TvJzsu7B7Qme7U8WGFcVqKP1YPQMkhsPiRyMkKCS3sDrD2aKkoVwDZvhEhzRj3TAPwqzUsea8MoYbJBmiC3Ez7Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DrMpwYmVmy8TLTpfNkho5q5DtaZdy8r6VSumooHpHhn8RYki7a3JL4rYJtKxXVWbjwHXWt4FVkvYBi9cMpk8x2T",
  "key1": "4DcMZxM5t32PJ6FdrjGbCwQrt6Ng4eUCZxJHXb2bwJXDm9aBE1o8kqAP9R95jRZmqESTGVNq6g7J4qV6CNMkJnSn",
  "key2": "2BiGACPdrC84FnvzSY7UuPCvrb6VAXe18zMoDAy6T77GwfP5fnRcN1kuQV4BF3N2cecsdsBbYdJ6VpaRMDBY59Vk",
  "key3": "eZ8EFAqgGpRfzWoNCYjWVzufxUwY2CrRenb8tWq4BiEcQPzb7ePPboyw4zPhmVPn7XazHw7ovGP4nYCaabGi3Gy",
  "key4": "3NsdFGzYJuDFpSDjphSJPbiughDRdWqhkXPBfKbfvn5K2iw7JcwCqTe5s5ZHTSfZ4MCyhpi1uKoimLaFNAUSfkWi",
  "key5": "4dxKyNj7habf6bgB8Qh1NEPPM7mqgnM7QR12Rt6r6qxkuASv9xr7swz41Fin98VH7Hopm8MBkM5s4abR8q8KHRYi",
  "key6": "4qysvBkNUbTzm8HGsBZQ6ix9TNiF8ReVvwAqFvC5WyDHd7cz8wW2sLLCUgtmn2wwRjNiyxSB8zdsLRLMww7336j6",
  "key7": "55LK3UozZcAvnprxiFTDEFYgQLkcaX28YeMGnoh3HguHEqq29Sem7rCD5fX6fBz47ww1im3oC4MDw7dLq6EaEJ9U",
  "key8": "2jE2W3VXZCZcSLi5x8q2d3Ve4MBG2DwZqpwYtEPAatBihtYpGmBTzUckpDmP4KKCAWdgWwWr5Lcd1obAAmi933jm",
  "key9": "2FeJ5R4JmQvAzQKi3WLMH6uMZqLabnVcfnsoSixXcucgdrpNKWBYzMVMqF4J8SYtQmbHV22JcA2QoRuo4fHfvz58",
  "key10": "55nQrLqJdggXHoByvE9XrAVidA4nXY6xMwhgTP4Q9eRVUmQ5opoLv2F4f2HtVZJAFmsUKyLfDqwH6C3g3j66WoXC",
  "key11": "2hS6gKqEdX8r6V7i7EfvQ27rwMQ5thASTUbdhgtSfpB5f7e6iahw2XBHbP5GTJiutJzi91c54YgTskbxFmHFwHpo",
  "key12": "5Wpj8PTKstyVNbP5CYQi8mJgBh7CCPYbMT4G5iVz26w3WWZh3Mpxd4Vr4VkXTtZ3kQmMovTKi3bhbB7HdbwU2KJQ",
  "key13": "56m1KHW8Fz9tGHyRTqidynCcUAyaDvyxGQKiXHJKuRRVLtgn6G9bc18VGDRySdhJayg14QwHksDDmZHhbUhDaqRX",
  "key14": "3X4tkZ2C9UpZRKMnL1A82J2Kd9tzuSWjmPZmbomPunpFQRzjbiDD8Ekgt22hRG6nNp83GFegEQhe8XFyUVPCrEG9",
  "key15": "972o8pnbxye4A1gKeRuyde4arUxASnhvcHpub6MtHqAa834AFV5CrYAfiLPyA82AKXgHBYeTDhhD97BopWTLNZ9",
  "key16": "hwKtu35n5Mse4nBhXFHbL7WfP4Yt1RGTC9W8kCvXnLixVQvoPHQ4o5RA6duisBoqP76RG7sgySkSw1ptw23q9HC",
  "key17": "HTtN6ApmEozNVEgfShP9pVnno5efwmeEmx4KjvD5QprdSU9MRdvzo2fnt1FT43N4G13rjiB1xhSRzMzwrYiXptv",
  "key18": "4884ZLM8C82g6Ko5SEXbfGUygfqioaA4GSiEZHhtAUPs5ApFp6v5qtjJzfRCpX9ZkexwjuGXoNeK7mmKX1byGNhk",
  "key19": "524A59c1gtYZvcQRq6h7tLXftiF3Zpf8GL8pRyzr9oFj286judoxfmnSHcn4o4bwt3trkoTKWGzWTVrZca3Lvtej",
  "key20": "595rrj9Kbw3ejb1acqNiqjpH6bgVChU5j5TkVGXRuUkfazDKWMZfkwP6BNgKM6KgdgX3iDLfD4Pb7iRiFDSjv4oC",
  "key21": "2sqrsFiCAAT57JMhWcvw3ecs83kHoARvGzFXhomuzfNZYkjb8DL6EbLCguk23LkUvLe2WmTiAx1Bfirp7prZb8VF",
  "key22": "oZbi7SK4ueLpNzLcSrZa1f4vSfWfWCo8NkA6HM8DPmBmAcRYnRZ1g1TKkZykjiNVbVhYzM7V1o67Th8XUv6DDkn",
  "key23": "3V8mVD1GA9UixiZNfgDho8JSqqauwuXZaCDNAFE6uXguMHDFnA619x3ZdRzXBccz2ULpZtkgt2UqvkNmYKXvMLu4",
  "key24": "49Mg4owNAwFBNkTofA9pT8imvtEgLCNj92B3FXku9DMcokx24vyq114QLr2wFd1Yn9oCTTgxYk6fgnwr7ZCcdctQ",
  "key25": "2wzYZZgxtfY9JTDUzF47LdYKYSRf8Hx1SERdZ3ySkPGMwWpfbavdJSqFm4kmfuBKu7jW27fg9H6wVNRWTkb2pfLx",
  "key26": "2jqaBvaDXztzK5vqmWs58RhRo3h6uH9zBWiPW94u22xTF88pXv4NNaibyD6Dcj1xgHdFpVZA9djuwUnXtKwhRGHs"
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
