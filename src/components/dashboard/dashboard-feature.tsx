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
    "3KLKFwujgK8TmCYzvFL2bJXtSfXDED7H1iRh9x9wg5nNzCmgatzARPHtLRpWVpxmCig1pScgrufdt3K28arbMkhv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jcPHcTBJLK3CUQe6MT9fTmWcBBmYco7iTHnWNcBLDnCTL1jyVYkai6rGkogLWum8KiRsHB4mRSXe189iDZnEXXL",
  "key1": "4VZyd1UaYsY9geZguxqxKvzUDx2Uw2w7WYsTJ9NcZZJffruoBF3vLf2KCczBhLCm9dgau7Z9Fh9QMdNVvnVh3ied",
  "key2": "4gpztqEwSZRzKwdb3Pt2QqBgTD4bP6YfRe4vMyoS7neV9joxqFjExo4sFv3mPdzun6jRPoZczUU7HGgDiZoxfnUX",
  "key3": "3Hf4MRsuUNGz2xcJTuw7SvfVV29Pdd1q1W3zx5GcuoKwhqC4j3bWYWLqNxEnKrke88dYd646cD69K1VeGvfpz91Z",
  "key4": "5Sm31z667KxgztsrnzY3Gv6CuUwrdy4eWrn4CU2nxBiaSwy1vXCWRLEGRsCtHZmzAc2mKUeAuaLbinKJTrKnuFNn",
  "key5": "3vtxgBphDeY3dcAUUJBQq9pUsZzRNRVW9FHLWfpoaDCMGBPw6verYkKJndL4KBqMeC3L5Mo9CdvGVuuMbzYXeteF",
  "key6": "4e9BwBfijZsoXFB835rY1SfHAMMUpUyV9Wf7DiRUkAFLBGZETHLQDJt2hQzfRdbNV176zvuSNo2fjsgkkKduvtRk",
  "key7": "4gSPdnKHBympq64Z99iB8tNQ81Qj2WXmg2KwrKiW89FfXgVRAHBLCEUBxwDVcJVfoeWCF1574HGqaPUPx5tgro9k",
  "key8": "2RGruk9Zsndq7tiu1TRRq4KPnWcomnEFQK1TqAQbyREG3GG3U45rvKaNudMkPYddsqCUfPu2WabEiw59N9VMgTEP",
  "key9": "36N3h7RcUmVZG9Hgxb7HYwuojJ9WebPLUSQrK2Z7yyCR8xBCA4iEyTZEjXij92Myq5gE9gFnG1JrNxhXZapTjPzz",
  "key10": "4ED7sbfMBExN1HwQaJpkyWGh77yUKJvyGo13cQNcmSyBzT6x43AoFKmHw6izwSCXPGRvvBE6Qh2p7kyuDKr1v4ht",
  "key11": "4JB37ERahGzgxegCeJG1RBGG7NpaUEyAfzcSUjYJdF936nMaEdEadNzChEd8B2rTTcwNpU4tquddtDiWMKapCJJ8",
  "key12": "2JEnkWFMVrFyerezH7E4NGibMPpNY2x39Kig1ggL1Jnz7KJ9GtidJi5k9RpLMQuZqfR4vtTFNcN2oX6ezHLFsB2p",
  "key13": "5ajbazjrdzAS5mKoxDssBwxjurPzwVeix4djL8q53Tixu99BK4Aq7Q3aGrijrZK7kKossMxXqU6dSKvotimRjHf8",
  "key14": "4kuxbJv1UwcfLgUShBwLcuWXkP8LfEQnWXUvD5AhxS4eXWQef6r8DrUYw94LTgd6afG2mNq9pehAdB2pbwCL9YPH",
  "key15": "3YCTYeLMuR6YHNxkuE6YYhhLo75YU426HRwWf8HDG2exjgboPzR6BtLr39DZBM9Ly2g3Apu2LfyDv6pRzp4TNvNU",
  "key16": "3paRyiAnZdSih4P4XgUzHnautyyc4hnAgtrSofmq72AQq9MUV4hapPdK1sMo8yFSLEWKZkL1DHWuip2iDTx6Xfas",
  "key17": "2hHa3wLXitTGLxB5BVLb3uKAQv6ZnGUpFWamg7sEaymFomMQXYBoJ1A6GtvCmjhjA8d8g8HBccCtN5LykP6S19Ph",
  "key18": "3LjLExSNeQYFcCspuZcHA2BewYMCCexGscgXFq61j18kFjusvcbiPZBccMRWFJKD27piJDuaAyXAHAYntLeiWNZ9",
  "key19": "3NsRyrT5WJuivcC3Xf5im6RbKA3c7nqegMDscoPHa2e1DUGKjBUy3JiEmMCaW7LGQ5iFxbkq2nFg55eHhVgjGRDw",
  "key20": "29DxgRvcYuvm4oSP9kjFqZVfatSnPFETNfAVGS4iDSDJajHoknjuJtEymxNbk8JyXcVe9w7TTR1SjXKivJodjSvg",
  "key21": "5rUkHDhgRLPwrckxWVCb8SZnBHtL2dyC1jh4pVZi9bqiETQncXYZ7MRF3muXCjmT9vqoHk6DsUjeNPA6ePhBq6MP",
  "key22": "3cuq3vG6WkzkrAdW5E4kQgTM7Rtrx5SGj2X8CkkzpJAHpXeP3Bp8TsVQZrupinAMaBigZadABDpAMPw5WnuKTTM8",
  "key23": "2fVEMhKVy9aLvhYXpzZYbRX29cEcZZoUWM8ofekoTBtVNPeW5QpzZuRLJ4PZzVUQMMZ8bboFbvuG6wQ7qvES44Zu",
  "key24": "62rMkN8zRr6VjyNFwhZWKU8DVh45c7mmAb39yvzK8YzJKY8GuysxhWTcCKS6jMThtdCfQDti9Xra9FFfEAVHfzvV",
  "key25": "MhjTKZWUgH8fpyumyYWteBjDaPnDC6Z1ZTNr7Dag71Qic5pob8sgLPKBL4Qdm5wAwFUhRXtNnZ9wx525ZdYKXww",
  "key26": "57qK4JUZHShjndCtQ9GarbFxn3xLix2XWodgSKCeW5FWe11AqZw72cUkJU49Cj6xbZopLnS67Djs49t2XaP98VP3"
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
