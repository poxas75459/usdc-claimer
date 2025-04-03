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
    "4Cqj9b2kPNNLeQkRLT9CYDDMoof7VYFT6tHjL5izDZcQihtVRrxDqF2BCAH32QoBvnG2LKxTMd9qnKBM5sVzxSZR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EfQZXvEZTYDbwQfnZJAngz9sJL5etD4KBVtX1JJRiTeihDSV12aj1izbWy3VUe7ZpUEEbkLJXBhx8gExGYDhUsX",
  "key1": "2bNoa7YEAt49vGEZmBDF7PJ9y1e28EGEZHvLxj2gCi1vhHaDdXZJPqVPdbUVr48wfqvKmyAvCicR4fgz99rfS7zq",
  "key2": "3HNto6A5Qm8D9TUMcX2uxAPd2P4vCSmQNfRWM5EcDUEawJRBC6r2venwTEWfPZDuMEhTxbhjpQKqdBGuW5cLAQac",
  "key3": "589A4fxRanPf74nzf1MJuFGA1Sq5TGEgeaqh8YViYQ2GGgyMh8pFkvaTFdqc5Etxi6zyCxm95Kevp2T1nWgHPUuE",
  "key4": "m9YHrBE3hr5gt1WPT8ofvJy5JWypPBVRZSQnLr8RD7gq71eRCZuZr5XqiuxZEqotp4Cw7L1HKyRzqAkEkezoXqR",
  "key5": "4GhZm5FHV8Frck6jxLwtdQNe3kiGoWYYqpJ8umjWL9HnMQcmUBfBWZJ2ep6SacAYjTtuNvLMFkuvz8s9YxbgeoAh",
  "key6": "VUP9T5LaUXfoDyNFmnz6xScmCJHqDbcqhQXdvLFpBre5q251REDy47926sncUYcoGY6SwoRzh3FGFifNhR5EWyX",
  "key7": "48ERCeAkSZ8H4yF9j4GvxKeed41K7jtHeFC4hNrNN1PdgxJZe8PL4QRXCLvXsg8oWjjxD2azrLwVmPKC12yPSzfX",
  "key8": "3HwByRKLWPLiK1zZmYMe9acFDTfkYL7rzDkMUxfRyqdbZQZVaXoZJuEH19uSp1ZihRJmQcErZaqRmLeaz72eYXoF",
  "key9": "3rAW4mtc7S2i3VgCgAzJXdJtwTFwzNJzQE6B24NoMzLTdTfbpG3cVkuHMSSzrwmBdBmpW1fg5UzoQ2UNhrZhHoJk",
  "key10": "V6tN8Bw2YK7A7BjtwvayJVnXJenKe8it5ms7qUURgSprBR64qY4SNAHk7YihXCa22bo7HK1gnHaApQsdYTATQ8K",
  "key11": "2LPmYuVkYRATRSJp2JXczS48iEUR11HF5ZaqWGNPNHMwRSDVQ66cuLWe5DyZNCZhUHgjsWzFGuEQXJiDybGMyfET",
  "key12": "2gemVBbFcig7F5JzTDQTco9rH1iwmRkQnjRqb8YZM6uNwAhd8kg8EbHYQRrgBhjkVWgDbzoRfPf5Zmd2VCqjvMMi",
  "key13": "m8zeYnsiViPKB2z44DBxUhnGoUmC2S8yvY6g3gywmAoczKbHhc9zWFxaAjFxYowQTKAi3ZmHZPuhsnwsVWMnkFg",
  "key14": "4RHo6t7Mj8mEoLM2vxMDkJTK88LoLEftZNkGb2vhuU7aFHvF8gPwALpqBAA7Xk27rJat3coM572eE9s5xB66QoQ1",
  "key15": "GVfZyTJjgoxuk1vdchZcJd7WumnC9juUc4CaK9BTZ8kU9GgbdzkLuUTpaNU7DzMJ6PsXpME5vrvenPKkYiN7zLA",
  "key16": "57fYS2nBsjdLB6Xy43BbtKTGtsVSy9rQ7sQYtk74YS8rkaLDmBCgboR5MSX4kfQqPvyh7ADmSNgG3RayxDCXxdYH",
  "key17": "32scLR4KfMgZPsBgcVJhpDFeHStVDwKxyDJNDqYk9HVKC7vba8QDmLEPGr5aG3qPGjnxYBtP1LzDp3qpthMWq8LC",
  "key18": "44nTZdZYTLvoMVhvDyo3CejjNYKWmj4XGabSU1VuTAuBrDk7uhG5U7mFrU1v3f5Jq3pgpkkjMw8NgH35R3AxhvCC",
  "key19": "42k28oTrWNG9SVNTyqxpy5dkWrfk6JupNYEVYuKNF9g19WzNJw6Gjtb8t3NE7C9BsRqc5hisTj9dzbpuUJiSNrrQ",
  "key20": "LW5Q59cy85xm4yAr7Qs1tUbkuuFedPpUCKZDP8tLnfytiWW6T3kGKnvySf5PbAqWykaS3tLq6NT4JYoqB4KdZmS",
  "key21": "4yuNPv7dKTnPkJC6JSrtcNwud5GfBLsAuZ2Q8ZPNevxghyCVL786wnR5HZA3vjeEitjXiVqTmWvnshVWk3oEiqb8",
  "key22": "5koW4Eq5U576w92wEH29LxawhZHj2GvBZUZtCVQdQEWhBpgn489EXXX3RNBZ7HxN54c5ZY9VR6GxiGMRCwdq5gzs",
  "key23": "2sT2umYAZRE4N6z7nehZC5L7SYB3dP9oAnU8BMC7wQFLztUGPSWSHmXDfyPP7vKRiH2yWgyuCR7sdBqCddryqjEi",
  "key24": "3JiqfoCtjyeTJd5Hm842YvvSSNHTkZbhrKcjQpNSCybz5gLGBW4uzSaAMGn4VeMedARjcD5dXyRFqaR8wjgMs4GY",
  "key25": "5eGiQwVyCES35FWXQj7tzHwVQjtkz4q6Lx1k1LRvE4YHxZqkyFMDAFao1qTwKXcYxyGJBMGyhYxPoLAx6zTe3pK3"
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
