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
    "4eJXCGNSC69pJa9QsurYuYobqSqqjNagmPJh4C1EvUiJ7a9FdtKGq4J1yobQ67fvpe6yxe23huTMj9R2Ljjv1rCT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hTnuHAi1ceHkWZKs4Y3xG3QTkvDoEehmJqrCMQ35rhAbo5vdw8A9deRZEvyYKsFmepDZojAem2yMzLbet3dYXdE",
  "key1": "3HiAmjkse9V6fJsdQFAiaFwu3K4fhjeeGbQJBWKyL7Fx5Uvfik3QmwF2LEJrf3ViyqYGE7Eu8pEWVva1ujEYYQnB",
  "key2": "5nGhFtJkicoTncUHZHhe8TMTeSy5dV1kQscQYvbfrfa8ogoNKBsmnUBd8J2gnq6WJn6DsEBQXJifEihecczd5n6z",
  "key3": "hJHWcCnhSrUUVXTF2agpUwu9bFvmF5Cofp3MXt8v3JcL7xKHkGzWZNe5cevpxv9RMrjWh11acNdmspoW9jzhb7N",
  "key4": "4ZJyvTh5YCqASbJyHeY8e2WToifLj4GpGDNjM5TxntDiZqv6zmu4Smb5DdsWBfV6hZzBUvAkevAm4bH9suEemskN",
  "key5": "34rMji9fJXnwoTHrLL8rBzo6CqsvNEPZCprzg7SvhgFispptPY6bUpe9qXkwdJnL7fsYwzU5PXJPZa1s6uZ2PjSA",
  "key6": "4btVyQTJG8oDfLDvd5enGqsQvS6AHaRnSk3Q1UAWdst3E5WcN2DVFDpgbiNGCDFg3sMnTKWYE5RvGifrH7nHXpkA",
  "key7": "66Jen3TyURBfMZDKAqbGh4eQAVjDgJj7ogU3A3mNx9n27p7jWDdkDEunvY59sy2g8ySYTVbNFga1itf6Wr7CiaZD",
  "key8": "3UovD5qFqYRDkaWpDRhiCYQLKt6UgrvZuDXhDmm4TuYTuTL1SXdJi9V5Xqr7dRgeprzEWp1NQMNQwKynY2YWJSMX",
  "key9": "4KKTQr34cSwxmTJ435WjgHvr1ri6f8hL9RpYEESpwYLi7Rmwmds6wnTKgAY3vFarvLwURrHUDJSWRqD7QXS2Z8MS",
  "key10": "3mUNDLHyzWXwRe5FweYp3Nzn3YMpmfj2tq9oDv4i9JRN4HbTnA7e9gd3wfWnx46h3SKDBFu8e6u7UvVEABaX5yHV",
  "key11": "5FTLR6hM9TLtXKjJw1kjRDt1uLKLUcD3ZHZX7q4QVerDKSzFwuttNtFNzRT2GB4M7YMTTT5ynmkubhrGHWjMtWrq",
  "key12": "4P2dXnDBenoJLjb8iAh3HPhZDPM9XwrnrAz2AEEq8QrQGDUVNowxm12iSP8FQLdaCrb3hRbs5knYsPMdBovjF3q5",
  "key13": "s2V5J1AQivoSE7n29WMhBjvSr4pBu1aqgGBYR5SV2mzTjeMXvpb1kLkzzrAZUL81uQyGbUoTi9gXLQw6V5rPSzX",
  "key14": "3dtuTZ9oLAaoFVbJ3p3BEuM5L6JkkA76Hc72T3KyabFJUfsWD5LSZzK6hty4mHJqQbhBWpuaLdy7UCdw2WP4fkX6",
  "key15": "4fKt29XwBfU7R3CsEYYSeJ8rHAjk2N4A3NLnMmV8Gm6r2jYvMJ9a3SesH8x76J4vw1xvmnTmNQKMkuR3VtC15bmS",
  "key16": "pePM4rLByCzYenmThi734a2KUKddGrFtvGZthy5ytXnYYEYW11uBRW3wBNq26CLowbAEUtTEUvrsMx26Nco3L4F",
  "key17": "s55RLGMEuUYVT7D9XYxR9hpqebaGbYGtTQwirWmfYZQYjy4phSSLHNCpSurTC38mzXSrE4U8cPAZZiPg1h36bDy",
  "key18": "5QHcUXuRkH9aAkzibtuudiJQKZB2KCcbVekbhDbZQwsJYKCjoQKke3uZuie7tomzK8pEBAe2yeSf6gnW28CAoUmd",
  "key19": "2aP6wHCrvXSz8YwBQ7U5DVmdPeXhJQQutSgoJNPQm11fXLfZLUAUqv5FZDm5wKEmVBarAbFADdRxRQUChzgQEVjN",
  "key20": "4TkxgprPsUzr6A2k5LfQMhYZdRa7FuCDv5KtnsDh6mmDwUk77oig3xydQnhfWjFmoFMnRznSGe6qKnzgBPARvNge",
  "key21": "yJVY7yU5rXuyPPrd5xavG5Fja2qkdat9pQUFhzVYKP8eu8S46U5tnFyARv3ySYL1yJEBHacGwk1s6ud4UEABi22",
  "key22": "5Y9iQWPJmZzbhtk9Xy8LenjDGyFDhTtAMZappZ1KJnbE2sXNLoMxJYPjQfgZDwqkYfDSBDRtKfsQSamLcbCrXd2h",
  "key23": "3X4pmkrmFF8u5UwUnnxY9rm6oX8mYpu1DPXfGVXayMphJbSy7FdinuQ8o7TSoUBLVF9xWTHCwpddrXgVHhR8fUuh",
  "key24": "5NgGV8XX5Lv4CsJ5SxCCaWHYF6mVMBacFQTPNgV954eTduagFvDJvecpYyeNvb3n6bpqV6nrdG8HCnuFpwpKukCb",
  "key25": "4YkuobKQ7bdLVn5d2DujVqJudjpcyZKwuxQ1mhUv4y2Zq58jArreDnoy1hFCNnmp38a7QW6JUsgXvJmpgMKDnaZz",
  "key26": "5j3aowBZX8pvELwYrSqJ9PgSEfMKaN2dxcADqL5q2SUovuF6ZRURCze2YE4v1nL4xfcAbV4an4Fo1PqbSD4r7FG6",
  "key27": "2ry6XGxZYhay1dwPa7MSisup8TGXc6bEoE7pDAotVhLMynp2TLMagWyGLStaM9X3CRBAy8LmAHmBNsc3cpfZxLib"
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
