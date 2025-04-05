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
    "4bkrrNRDmnLzf4yQsXnnE8Sb7EPLfbJn3HkLMiMYAECb5JCauHowY6UQukGLqj9aR2i79EJtSfreL7V7iKRjPTDT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mShFLVSpMDHn2zquZ4TZnEC7HkCuyi6j5kieFGbP3egQpjf3GfFWryZvdJYG8UGWXzngUqjU577NQjAPmpN6KJR",
  "key1": "2hD8EsdrdN8DKb4a8pH3qn9MFmvisCHDg4YXEzjwANN876n9spStGo5vwEQpRoYX4sUg5HARNhAGD3hJ1EzTgEqb",
  "key2": "epcGr9nZvgCVssQm9EyhEoLtXhNJbw2wq5Nmgu1AZ6hsUQMCuADApiFvPmV6ZihtKpye81o7uyA1MUepux66c4c",
  "key3": "47foKKFZs7vBr3qa7bNYGpTkW7A63emtQVMWyCvFxVxYnrGtQTU6HkMZfNN6kvaftf7PUXokyZF5yPzK8jVtUvaC",
  "key4": "4hikgTiz1snd7qC15jVo9fMUa8yU6JVeNBgVLrJmF46BCuc7MPQjN9SYw7gUA4PKnA3Be15viPLRrNY1r6ihkD3e",
  "key5": "3D3CpmSiLkVnRYZifu59ZFV3NR8pcMZcXmnxdMTVVuJRyK6vg1kEpCj3eoYNfnorYZp55ZKvo9fAmPJE5a1tiKAz",
  "key6": "4SYBMJhwFmW8MGBJFco9NhJESm7QfKL9GAQoUoTVhzJshgAdR6TFCTYSiqB3CDZXUDAYw2g9HanVxdC4tthy1xJB",
  "key7": "qWWGcYndpiCjGfwtfs9phCnbroTnaSW37ohMVWccXAtbW2kdX7yhX7bKGggouVztiy9887C1zvTtaWPL8zwT265",
  "key8": "Mwyz4pakzRaWW7T3wGmfFrTLwCGhSGmUrYB6zN9EGAsQZYB4xxXAeLZQXTJwZGMFgXhjj6Z9nq59TKX7A9YdWhe",
  "key9": "2ypepqZurj6mcFEJwpCZY5Kq1iMaoCKKdCzDBfKhysy4osQN3FgrLhpsCCjZBuoZFN6xCbzpT8u8KzmtZcjYVknS",
  "key10": "puj6aZn9wPMpSfjbefzXzpXp2yE4ezyffrXaF1FTvpPRQjkphFkhgspUFQQuiD8UT6sCbH7j9vZnon7UkVsWStg",
  "key11": "XSuzFRGswQvctMkUyKM6FzZVY4NzWE76YV5dJ6afzxBxoq2kWtW7nVBDZifUQwNqgAY6cJSn7eRjJ7HF7KSHRNx",
  "key12": "4emqrxzGZMLdYzmS3jqRXPYtTZDJBHvX5KdbgrkmtjoLrWkp9Tn7bHBADZfC6wLtjc1ha7xug5YRvrUsD5qaZ1s5",
  "key13": "2gaStrLkkHm4KFHt8Ha99SexXvr5QQPMoqQW2DbvuADrhfvunwV6wQiqDup53fb7tDRF2f4gxZhPSmXSvv6rg4P5",
  "key14": "49eSNU6d8fV61fPpbsgk9doyTViQTDUXAjNbpre5FzJYgJ3BBQnEo222kvQGh8k3k6N4ZCeZBMBEU6hS1TkcJL7p",
  "key15": "41H4JZFfnMmAmyoYS2aVi9geR6XqprnKspyDJGGqx8NExiaHiqfqrAKe87Yuc8XU8uiD7jdPq353XUMQrGuWxGaZ",
  "key16": "g5BxwTWaEyqcHNkCbrXiNjVKMFAC4nBLzQe6CocAxC7eFvx5HNo1W3MQGnLsTMMSekZtgmXGzxcAWcWQbtgibgQ",
  "key17": "4Xp9qdEokJGFUBThSNmHxVhiJn6nVAdxCEUYWnrb3sRBLh6aapWgWX5ymwMVv5UXAJ7iK4TMV6Ga1ybiN3jUjrJC",
  "key18": "3fA4gxe1onY5p4VwavVQHqWm4PckYj3tGE6hVivbJMmAqqKAXUtfXJDvBJBiCfBKQoRPTrTCi7dyHLV4S6HXbo7k",
  "key19": "292PtTdGxcLXEp6rYiTsPPUwFD9Ctzk1PiGe1zFySL48BAXFEmogS5Aa1mPgDVDyc2NZawXJCeLiegh4TGe8MUDu",
  "key20": "5tQ6swk4HZce4bfePnYPRzU7Bkt7F4inEEb7gg6sUHy17iARQqbNtgJ41S7pQAkH2XbdCHVJ2ts8FkXFDiqtoTUK",
  "key21": "4ko8AoTL9NwXUQvcQ9waUNrwbXQGvQMHamuSwvBhk675VKh9mFU8rb34JM24AsqbTE1bvJwJBjs562ggXyjK5mS9",
  "key22": "2QkifiUyMTdb3MTnDD4EerLqNLQUcbewpR9yfCzGtiZG5g9dH9i79KgLhnYdEBAxhyrES6hNvkHMfTfTcKiwy8DF",
  "key23": "2A3ULFEheHn3BJLkQMEeKPkVu6cS3b25VsuGfaH9buuuqy79o79tvw2fr5cfTT2ZCgb5uB5QhSmWj12qWL31EP7C",
  "key24": "4joFNcE76wpbZ32LPvvXJsCN6FWnmmdw4TP86o8vKCw6kgzf6BgKEHJ6R6KPnR3ejULUrYqfBwb2u4k7oGYZCb4H",
  "key25": "2cmiPSVsvz8RxMk2sMf4jcrTiTy9JgnURQdpfr2hN51CiWGYqyXVQhwJgEJPf3EN2JDfQyvQ4vq54cUNneHLij23",
  "key26": "3qN1b3DmLjJJxgPvSEshNpWCwK1xitCj3CyFvtXHX8y9p2Rzw3W35diUVgAwXeEEuhgfdRvnrHrrnzdp2i6AbEiQ",
  "key27": "38tZFmyR5Q8EyVMDnsP2azfHuMLZwN6RAQdECuJTPgi62NcbJruPe7KwtStRT3yyiPoox4x2qBdoGhhjMtYK9rHH",
  "key28": "4pzewtUNvRi2PLTZZSpbsNqKZXo5iWage2SufPVdTr745LJJpprDWTizzmr4inqUERgP6ovNMgwC9zp1NVLWsULg",
  "key29": "4VhYzZ7vsGF8hgLWKFPLrUjUAbBPgeUacZZmGGPqpb3xSb8b35zpWpVUc17ttKuhkmxHAH7XYcJhUbNZTRPojAjS",
  "key30": "7W9bVxrrERKfwEMBS3qpHC5rSC4ihfzvjSF4YfXxc3zPNDkm4nUWZDdQaUAh1oC2De5oP7xrGJnpFX1A5MJJBQ8",
  "key31": "52CqNotmcsgHx6ASG83WAp5K2qvU4J56ZhKUDtXFx6vwXJ8EvGFy1Ms8SywmLTzqhX8crQvDC18vAHdaE27Lzj8g",
  "key32": "4TEiK1yoFQLvb8HhuysoUBS8BNFHupDHJDXxdWkBLtzJDDm7yZqE5JfuSgwPWgisG4Xs31qoe9CsVV3zu4bpSpx3",
  "key33": "WEdv1Pg8nWt4cxortukwi6fvgyA1fyum5WRqp39Yukc96sTWxHq7rmrnUomsQPMn6ihWH5Kqy53rvv396fJGTqV",
  "key34": "Mqq2hqWkX8EvGnoBtv99qBmgSFMs7ixKLJmCPQwpD6DACFcEmyJ5ayfJo6xkNBAPMUCN56XAipF1zANUh9Cr5Ak"
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
