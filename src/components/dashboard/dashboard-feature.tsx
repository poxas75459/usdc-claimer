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
    "3iESqWj93MU5CidTDocQytwx2X2KyJLYdVCmci1a7HFVVj3GKfc8rMXW7SNtWHuaA6vfA9wsSkj3MRqeLxkxFD78"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rKmcRx4rZJCgy2Ey3hqx73zD1japjaXv1UQotQYHzGQmDQPyYaDiK83te8YV7wdekf3wJV93gTdLmww9tSkmH7v",
  "key1": "5LMk3SN42yP3RddDaP3dAQ5MCASbD7xaSEhgLCkuyibr7yxPNhTAmaMhBN98JysfsNYshovm4npgURhnKMym4Fgf",
  "key2": "2XRquSBHyiRPHbLWT46zUEv3n7J16GPyMZhiVNi9wcy899cj3da1qNBV71NGVtcTLF8ejL68xzEgxFK6ZAy6CgA5",
  "key3": "5heXABgWS4waXoZ5VymYfaTXKkukcdcFqCopFErvHjrNS36EywTqcYnEqkMihMJebTyuypHDB6rpQ2faQMTuXa4q",
  "key4": "pa7Ti829nSqzk9AMWfBfFAf5BsaPeDGCfzVh9xbHF4wmdqCEVQgugF5VXUthNynuUcWyNjvHgri4dnULYayBjJg",
  "key5": "aDsgBWrgYqNS6ffWGoFHAnxohvfZkDgHimFLDThLq4sahkoyKMWFjecEGKoXXt5M49xk7A9qdd6AhD7KJDR7PpC",
  "key6": "42nUse6YQhBToWZ7tBua4LXYH7b4eNbYCTKdk3QJpHTX8Hf26Qw1MbiYcCwnuJLrymcDNyc8CRNcHArVZPLPebQE",
  "key7": "3CVFRGq9pLi5E9WjB8XvZrrMdevHsZ9EVBZKYVMboj3tY2MXZskXpse9E7Gj93D3NWinRgbZqD8hELiv5sqmzfBh",
  "key8": "2hFnuzuDd7zUnvbH4YXzfE6GABGxpRMhrnbuCi4Lv9ayZJcewy9Y59jqb6xmw1yqtz19Zp4zpaxBUQ8z61aqWF8P",
  "key9": "fKgZQfGgfic7ka7BDr25jB3HtXRUjKbz8zzEcp3mtBzdTq7Md9ZxvKEkx5NCedmWbZ9rJMBvaJ5TCxFqV3K5WqV",
  "key10": "3F7NKG119j8BkNxvPabbKVq7FhKLWbMY1tVXuhhaXuQDjERPDBRyZ81RruTdvDvV6EMzj2YEsNsHPEHfq66Eb8ug",
  "key11": "5cKmrAh6A4Qp8H1Wr5vyayomRhk6WUzhZfxuKEfqPNERQAevTvxrnx7zxrpjDpervgE2rRpHbYxbTSPknbwMnWK3",
  "key12": "ohY2VYkYxs9QyB581XdLvRq7upCFG1hdb5u8MDYmubqUC5dXhWZbCJmSn3SVxs8jvXM1sPBxRtoVuDGYFjX2zRt",
  "key13": "t1YasHYUWFQ1LhgswVLH3C32N6pyKD4g4QbsAu3SbAsGpbUWqWyeuq26zkfWL7Y41FrJMYX2MSF7Epc7TLa2xzx",
  "key14": "5fpuGWg6HVCm2WJzP3M17vrvmSekgdqct4TKLWgFt5zEzEonbBFuyqbpBudtrcHSJ9tdBvXuDV6QW1TTGazoaRXu",
  "key15": "hRJF72qiSVHTRPttLtPebQqip2fp45mSxk5nFY9tMPrkA8Q2WcjMeupZuUSF2pjSyxUbC845sdet3sj1NjUWGwe",
  "key16": "eRgg69BmsEgiTAMSR2F9MFbgQnYDE3zQJrQawSxubi8YwyQaLKGDkkP1eJCGivoxH5d3VFesoJsEoc7mji6jFCV",
  "key17": "CHgMBEQefdpmjkieCw13L8PdXAW7szUqWKwzv6dDHwX3L8B7iZVyWM6JyEg5o1dUrFEJJVXTS87HiT3yRVnGJNW",
  "key18": "2A8K4GFBBoXacpXwZ9S1QuxpCb342pRd7ofNaezCgEmy2Bz59P5Raz4cbfjcuBEqgfmHmHDn9io67U32SFDzx8nW",
  "key19": "5YkA93c2kuGjHtFRKz4e69kXUNzyutP2cPrNyV4LLZfVX31KcMUgG1EDh1Znd2nBM7uvM8GUzffL2CoV7g2k8UBM",
  "key20": "n758KPx8ij76ZHzZfHiC1bNZZG8a7XexXwGotV9c47CBx8HEsNBfpJgFLMQWrsTZVMm4LiGGt7YpVdQSRKz4eE6",
  "key21": "srNGN2Y5r2A6oLZG1SAr3MczkghVoDxdWn8EgWbME7b8SKHgohxvv6nnkFXqzgMogfm6kEL9wXaU5CeCZoXL2PZ",
  "key22": "5S4czmBQjHaZejGEGCc2kjKNxKqgYu4emA8nubz9WKZT1DfpBnHgwTtpyEopFa6Lx2F3QEuDJVcG4jfX4heHUu19",
  "key23": "vC7RfB6TxkkFnVfRP4TyUg65T5PA599wBwWTrD1n5bs6tBJVzC44ioBMu4UWhuUwBA8MfBwLmCHQJKt2qXLuKut",
  "key24": "5P6tVGm6nHNFhZc3cKy2fLpC2a9fcgH9kthPpSqugBmNqvda94Me51SzmF18da1u5AeY5Ww95auo67gf7PatcHki",
  "key25": "3XUYhru53WZ5eBHnVGEf6r17fy1jWRW8zLGkoWYLcJxLZ3tpg4TcNwQpw8mF2Ewthw99ZJPqKRfetsccKp2TiskZ",
  "key26": "2kN8XX6ByE4E6TE2jGLrTvAYiknQbcb92nUs3po8bg9nstsZwNhYwkE1yzU2gmkF9qYXEUiv18bPoHK6LcCVx2zh",
  "key27": "5d3btW8s2JQyYLRr4KJxLFQ1TC4WvUsjE5fK2nPRAtqwVh5CWeUTounsivwnmfNawvZFJuGaApu6dNhbiyo43xj6",
  "key28": "zsGtSATNVNGAkBY85owdULkqQmfJqtCUiwBxdffv7Ju7mqCv7yd4mD1ovabzFL7ZKPmDYWv893KX67medhHkMty",
  "key29": "4hFQdwp8k37VxmQBXDcPrHo4BstP7bY7wGDm39nyyHAiDCtiJEPnSG1jidTY74ezWkvzMaMPdgEqwNUWoZYUq4vV"
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
