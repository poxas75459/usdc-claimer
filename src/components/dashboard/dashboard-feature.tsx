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
    "3yUiNPFe5Yv2M59YwYW5FUDmZ9F4YvZ1RsgfZvUvdn7G9GuyJqeyHTaX9BpnrABHPJDVdszZSBcVApJ4PpKqniUH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QPa3VJUQchztVrBJGHk1xPDfUo98RgvhkHhHBwFeY9VF8m4GLFX8KUcTwpzKBgKAuAxvuTewmgJdRnmPsvjiRmx",
  "key1": "3xNW6bQ5B4o91N7nY6y3VKgnJBYgi17Pfp49fDZEcQCLZrsGsEsQkUePpzNJV7CPAp8iVLaE4QwGmmh6R2Xd38WX",
  "key2": "5pC3sVgAbTD77Nh432yMrPtqrJQbqfGFMpPcFUrfXFgAkBPHKHC7JVovaXWLknppj1WBqcrJWRezP5enTbRiZwK",
  "key3": "2m21qAwiGoTKSCnhEsvMMA96bucDWqF5R4NGsmw4mJRvDZHqQbQC2tCLgF6okr79XTrSeXoaCY14JMrEaanzT7Xg",
  "key4": "2LWBVUqAh2qP4Qx3LfYztJ1EhMDVVWv3php8qvWbhRMcyodwCQ9VRvBv8phdJaL1GeeHzto93xE2gTLzJuknvbfb",
  "key5": "5CGKntEtsTzfFXouif2Ezdznwkpw2ViMTgaPcVRLagjJdxnTYCLXiBBHDEEivA3pTxSuaxk3ZNzmf5exH8goaX9u",
  "key6": "3exga5zXPknqgg2pGYkmAoL1X1BCTdkXAtkEqe3mBFeuJkF9eQgNuzyXtVnwFVxwW3TfPoPA5BU14KAdnYF9PsMh",
  "key7": "5a7cjVGMbitYuSCN7cFB99z762Gya7GfPkf8kuMzftsKFAvt4BarJFt9xYaSs2Fw1bPUs1W1LNmU4QVKatWnH8sK",
  "key8": "2oXhpkXxAqNJVjXr8V2cdaZdSGMvtWnwgqrF1553rMnVEDf65qzR4zY3o91Msz6q1LYKvfMFbkYtLpThKxh3cxGp",
  "key9": "DhPpExV4jWBVt28Tqkm9uQHBkrc9L8oBVizReDa5FaNLmoqW68mbVJj2o6bJ5PjTtoDmB8T9kQNzbdFdPurFm5z",
  "key10": "e3JwYwuCQuxit5R4v9SG1uP7Na2SYjiVDv3ftpT8A3SC3v4L3U25UhtEe7pqFoMgy6a8V9CXWsiHE2xS9Vz6YdZ",
  "key11": "5kqUJ3zAbCKdAJ5pLB3in94Rg3MZZPmkvzz2qL6X9pB5YvGct295FzqvfC6vqzJgs5S7B7TUxJrQfQw8urcf1n3Y",
  "key12": "yy1xgA2tZGdquZB1xsXsHUnbcywpbAmCB6xL6Suz6GfqiNwPG5DkaeR3FjrdKEpJ9AVLayiU4FhNmdqgka8DWez",
  "key13": "51pRorvjV4B3dGFXiAUGPqtdaY1A4vgRTBJ6Pfdn9ofdhG6grqvbYEs3ha6osZ7o5j9YqApvcjNXexuMPD3dRDYP",
  "key14": "5zr79ip5MQ74kuNYTaGQuzRjTE82kX7HAnWpeJWXdYBkQvwtUWcN3sRr5BrgNDDMqKochkzXHxWzFG2J1DxdUpmU",
  "key15": "5T75EhuYieBdguo3o3stR2oDqwPTRY9DMyjaVvGJ1ZRe7SEetmzDo4gV5HCBRMMobCi6TCGhoKCjhBd1fDZPsZbc",
  "key16": "4ZMYRyqaFAsSFQRZqF3sJ3fWc1wSWPZcR4Mb8W5fvDCqUuowfXirNtTGpvakb7BTVrhwMuDdnm96YjLYGrCGUnVu",
  "key17": "3qQhaXJTC1L8K1w7e1MdP2PMwwq28S6UzXou6kUbukxnP4Y3coaYRfp482QBJhhki8EMu9sdVS5oJQe4UCvGZzYX",
  "key18": "6KpDGCDrtG9PAv7MuQyThWVnuLDL2Yseb16cF4YChqYW32o9mp19763e3NnVSb31wwYjRWH2feskxmePugFnaoq",
  "key19": "58FwzAtH5crbomKD3PQMarDs8zNFmpVUnw6rWtK3QqbGMnyxDQmpZEdjTgWkjjAZgBzrczSk3nospMDw5jg8zu4J",
  "key20": "waeKEJqTqcBE1HpFj2yFzkxC6qiGNQGYmvMxHQ4R6fQ2y38wm7yQSTeT8sTRK9YTDuVue4MLxvvRpeNJuey4xqT",
  "key21": "2oAVwKXXVrw39xknBZqTx2yBtZLQRoQXmp8AUguitaQbuwCFLDiZDtiUovc2EhV42WnQ183u7et5aK88pGtPy8f4",
  "key22": "5XFGdE4v5P5Ja7so1GvirmyYSy8MzHzmQhMdCTMyywei3bEmbrUXMNTMjCgA6zNFPzZiVaEFD1enzZht842VHgcD",
  "key23": "4bCWecoh1QAK1f1Jg26qLyMz3BCCffShGKGup299GnPMiXEfmsFyBh5vikJ3aajc14raia8EpLnnGqFXmqNA6RkJ",
  "key24": "45Sj4s4aycx83Me6PiYZJdUmMKkTVPnDk3j7YN77CarYePcwHzQj5G5eKKihFXGbzMfzcMEyq22MQkyJYeH6htux",
  "key25": "3BpwAxe66KvnSW24RjL2yB5LPspzkT5pojmSzdv7BZqFJkK663MDTVFq3kDezhR1sGhmGtu9KcA4AN7syLPRHjDS",
  "key26": "4MKxQk1XwcCZPvqj67xThKad175HmDhQE7KcMws9dqKbcvWU62okf6NPoQy3MWZb99zYtFmYEmV8fzag3DfWPE5u",
  "key27": "2828tptbkAdtF3Qx4sqYbwVpQC6a5MjsU8yiEw1WxDMx7h9t7hYMYo9h7f9zbonk98z4ndAnCD13dhvR4F9Jpz3p",
  "key28": "2ZktGH5QX1uv1ViuxoH8cnnDhobMvPyNuYLdXtzzFsSmCpXR781i9WdHcmCER8nzqx8D4UFkGfDU4ySN9jHkKYj6",
  "key29": "5G6CxkqFaa1rr5gnJPzX2ZgWZGEUtpTmDgaiFGLMyLRnUHf2wQtnLr52V7DKhfpCjEGsZQsh58v6nLeT8i2EyfEU",
  "key30": "5tdtn4bzECGrqnzNQS9X1hnxzFHiQ4eBNbV5BeMqLLLAvAkWnr8u2n2aregN3RYD2J9vFcYfJG5qzDYApXmLh9Lv",
  "key31": "5nLhXwnZx5z548WESiauPE9ybzyszcwB2ZwCqj5pbgEPfT8DyPhydq9eBCkqgZBcfoQhFW6UuKprAj511eDgBKfJ",
  "key32": "5YgwRutDDWJ1VLe2jdTd9VRyc8yg6p8Xv1hcAbMgko5uwBmZbgiw2RWVxuYkTL2Rxwu99qJzsE58G6cfAQQDWmzv",
  "key33": "3YCzEVkGtu7vN753MmhQ5GB4rbPRaeiCmYRK8Cy3UPPcmyVct3i4DVLk4jsckWbMzeZ9YW9YHspRcQzzjGyQNGHe",
  "key34": "3KSwmXAEmvzWNYwknSSXjvRSjPXNNp2mfznXh9FKC9oEovjLgX1ufYyKHYufYPoX4WbtKPAEWV4PTULvddaNDazh",
  "key35": "29aLyuTZj3GybLGy5T6UyKKMqSBq5CvF4wEHD4SgKNF3WhnHhuKayStr7hC8t53yt2tvZkkJW2dF44diFrkMEEHf",
  "key36": "cFNyaab5Py9h5pvWUMoV6ucvpNgGmU3CuSSphxKbBFT7iBMF53RDfJQkMYQky6MZLY7Png5tb9YqdtgWDntP3HR",
  "key37": "4sswp5r3soVYyLrnyHP6ueXsYk7wgSvpbFUcFzvZHwt4YRcbEAJ6LNCwhWedU2Ja1rEDwvNpJLphJT1LAWSc7tXG",
  "key38": "53Wi3h2ndebh1VhG1ehk9tzwWTFq22Z5NKvtHhMPz8NeiPaaP8GU5d2e5DpPswsPABb8AdV4GV28r3GifGgtk3NF",
  "key39": "5YcvZdEQRQ79VFncFBiY5MXDXq22YngTjAkRNeaeSNAnSP9vuwkSCeFneBAFjJR7npFuWs8TCQhqis95rfA7rmEw"
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
