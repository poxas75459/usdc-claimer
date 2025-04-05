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
    "qm9T61bbCYcwB4o42WaBJdQ6UEHtF4HPbkP3TXKDDYskEKNScE4V1qgSbUNc2eUTH1LydXH2Xt8ffNAPX6qYPDU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PE3axpHd8nvey3RxXaChpQvTHfKrkuMhGEzLPZYCwEr3hFYXEBk1vivaqBafNrsdWece4tdE2xpF92raiDcvWro",
  "key1": "2EksC4teMyHKkT7ZbS4LuEc1jQRR9GjuCXhnE1Z8ST1U9ehYJ6VsmzyCgUUstJ6UxbaHbGsFYPRPLkC4nzFG76rL",
  "key2": "4qWMGxZ9CfCiX5z8TVzyA1PtJVnuWixtwX5DdPW71Jw2Z4Hc2ZwK5QpkdQ2q4Povs2aGuNbtZ7FUMVdwcwisimbb",
  "key3": "3op8hJWos6Ak9rg2EeAo5L5d5sfCWTKVjA2NdrPbuhyFKbLfpbn9rRVrvAMbaZ5FG1JaVXhX57VfKmcKAfLUtv89",
  "key4": "HagGceSbPCyfjGgo24e3pPJfNvdbEissaQB1BJnarepMud159feGNnYvhmmVxW3W9cnx5yw5u8AFK47LghKSBLm",
  "key5": "5KeT5FmuB6jsrBwFg9tcMjusF35xgxxmLCWHA5mEMzS2pPxvQuEMyueerpgu9UiBE53kFeJQifsgzUi8aq5Lra3M",
  "key6": "48kJJpMgem56toMuPx6QBxSZ79buF1hVNumxSj4anVhacfMQvT1UbRArpvXxexwwj1wNNxAxj2miGjxsofuEnpLi",
  "key7": "PVnmirV91F5vmPL8zYDGJ3sqZBsV2pmBtGkR7v3RQ11zhEPLKi5RUPNkir2oGxJ2EaXYPe5QsjkWmRY2uMpZ4qT",
  "key8": "5LGzFQMruJto3yf29E496QdnnZY4YY5gxtxvRYRtUm59KKMpZLLFb9ceYnQiTQyt84N9uJmk4E4sj23SVvekWqWs",
  "key9": "4dG2j5EYKdG3ghwpGaUzkDndzzdvW4B5WsVCnXbFQnWqdDDpRtkqEocTVAyxK9WW1LfhzfP9CM37ajXyVTaYahtX",
  "key10": "4RNhWnUUPUnr7w7bvufAMgBCvJ2PZTThkZfHzpSejbogkQvkb5p4aCrY3hCGGH3kgnZvmEpDgxqESh1dPYGxqFXf",
  "key11": "2M2gQXxRyq8ZzF9kYFziBXWkFdueeid4RDeWNVwC38TXBoxdSn1o3SXFzJk4KnKoEj2L4BLmcM1cYiXjSxg2cZjT",
  "key12": "4x5fjgwjdiBbcaTLqXi2cp7sbeBt1oR5CiXFdUfXTWqHhAzmjt2snpbzMBJWGsCAs6EqgzMr4HfTCxtCAPrWsNcX",
  "key13": "637vDWi7NzrLKgZRKMb4QUNsGcBiiSCCehF3to4hh1Mi5QSMrZ9jcX2Qs2mbrxRcTfvCZF1gQAZLMSifM8vcBAi2",
  "key14": "4k3W7oHDxCKK6VWjmJVbun6M1aRXmsKppw2yUBCH3VZ8gXjWNxEnBS4sc4dTc55ZCN387LLsjmSFFSsx8Td71G24",
  "key15": "31fAhCt2kSYqzNNXjTLd8DCQBX99ay7juyJPBNkaLDNkx3ZQaQdAKc1kYZNh9m6QMAcf8hSK6a8wLdPACLGG1jfo",
  "key16": "3s7csM4gFkkT9N8Y1vTU122N4w22QFFkWTbzAn9eaUEzX5tsNFuM7k6U7fzNBwGMDTDJVCa35RKP7xNvBaMYcmp5",
  "key17": "52ZP5nYwJKN4ZvWqDwcbnk2QX1sxyXfNmzf4x2bsS9kcp8dsExJ3N9KmxFB36UYL2h9JfkA2XvwNGumQZnixSv9g",
  "key18": "5NM1NVE52mTPL1D89fpA335wK5cP6exTeonasqXn3RVfKiBXfE7CoMW5dKCWKvErqHERRsSVXg7zdj3owBMwDjQY",
  "key19": "5CBvZ5DvxeVMdj7ae96tLiQMRL9xbnz42CyHkaxvRw7QwYRDiWqWsC6qikHEz17s3HXnNWPd2EG4Pfi8CmZzsB7K",
  "key20": "3w2S81NQttUKypWTt3pfYyzew7uzhKNpWEiSRbn7T7AneaiDbu4Kd7Uqru5mLpnZQkEZ2Kt12WuMkfTkSQ27818g",
  "key21": "ZS4Q5ozHD8CpGE7pvFX3gQpqf3vddrueSY1bkmZpepGuxwodvZ2LbRWKr8eh7rLP8VxGAsTb9dhSDMNne9jikTd",
  "key22": "2oBbtciYvxLc98tPcZ9sduQwydkLteMTT86GM8mi5FS8zujzgtW84zGThJsr4L3MNSixoZV2razSA56jGPRiPFGB",
  "key23": "2DiriV2GoYyfBacjM6Y26CFEhkZ3KPUcHgBqmk4LLK4dbaadXNCaLRjBPkbvBxVnRjzKDVYTKSVG7TpBH8pz3mB5",
  "key24": "UyFExwPUo4JamS2GRhqcq6LZsWQC1VtYJvcys6EWbLvvWsFZy4hAU9G5zNGsuNs8Z8Eqfw25Y4UvrmjVayQjMV9",
  "key25": "D8nQCqReQECDnPMJb1L4AE8xos8LTqB3acjEzDDraUdHYAhWajkUz49WcXLr97fpYF6bc37icF1JcuEsetm1LJU",
  "key26": "4uQRstGt9Jri5GnVem4UpGRBrgXUQce27VBVyr5nRB1MV6eSB11dX3pweHwt1RSCZzcaLWKLqkLpyQu7MtsAKqcA"
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
