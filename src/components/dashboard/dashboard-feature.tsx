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
    "4udLTS8uNm28FPnMjAghEk4iZjtkZ4Ta8e9cZFWmb9cBfpszmjbLztL5dddxTVkSqxrBeUsUXdHRhDfrBXXqY6A6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nVt9Xt9sMAxE8XQ7jU2rXHjzGe5AjkZiqwKzLNfs4WJoz4f8xfV7uX8nGNPRD9othE26iStbojwB1r4SX8XfDUV",
  "key1": "4rxZ92fVoPHwFHPUeMRqjm2NJQQVGcUWfXvQtkBitT7EGnm7jUrZKbWBJuyyvZAhJSkVKtZVs5qUeN1SCApAHXKf",
  "key2": "3HgVsQPqvjERPqFaidtassEDc2gWL8fBrcRUmvJJ59xrFoh6qub5WJYFUbC4i92zE44b6LXxDhqNrLw5ngWTmfww",
  "key3": "2DFH7rWbUf88qFtFf9iA9EzFiMenZEWhtKb4bD97JZRyEk5SaKTHJYxgoygSrtKVCuAoMu7hqFUkHe6GKxFz332v",
  "key4": "2174YcqR7UfFthCtyizKzgM9LE9yVLFxj54pr4xyjGACV7S9JgJYvHRB4xcvosDp39JExwR4iF1cLZ2jaFprzjGN",
  "key5": "kNu52kMYdJN7fAGf14wzt93D7PTq1SvufSRdVpkzqahBVrHYLHByU988pHHdhqhRkfeb8n6jevmTojvtRXduUNu",
  "key6": "5mpeWYwH93gwyC7XgRziYKpYCZrB18R357Xbt83zDj5cdaU419evqJvT2Rnpy4VokKhDBM5ozB8WCgZ48KAgra4M",
  "key7": "3Go7Q9i6yPtUjGfdCemsV2T2kQMuPaZhfQTYpfhdiKFRR5F9RaDrq8SPc5gTgUecsHy9Nki3EYzanYATGHGYpsZG",
  "key8": "2oeZ1w2qC1UrfMTZfsWW1YkXMpZPoV9AQipM8AqgdCeywrQUPT1uffPFNuFXYXESeVym1SmCHDd3Nxpiof31hU71",
  "key9": "iu1KXxMbv1Yrg88rBkqcKLNvJ9CSpuZDt69PkgDDKur6HA8MTWEmTJaDX4m5q6icZhZNoZnn9N8bGoomVpQwLU9",
  "key10": "5Uynr6En91ksgmyfbrZuLzVDkFK46ufup4dUKjgeTmRjdvusPspiP1ZVATC624kGv8Dt5imGhAgLLGJaF1QPzhPC",
  "key11": "fd9qVdLMCjJg7UVeknkb6DCMQ3skyjTtdkyRo4exNki7tta37a8qm4rHeUTZJKAW2X3XqqgwBWi9hn8fNppT2eq",
  "key12": "668yL22Gkec5TNLPnmVfppD5h1u3U2P28eowuzT6x2vrnMQWHJQHBP2D2gMvKzN7YAAYASp59qJqMEXQ8x88WLbt",
  "key13": "4MFsHYgdZg8uAsaGBHpssXp5Sh9zS96haPpTHMxv5ucu84QZsQwYa9pmEjGQi3Y7qVr1cwjKADghWKRwmtp8dLyo",
  "key14": "2QcvUcepRw1Vav62DdprZRD8cXFC3ZujJVjHThbLwDGgtBUFn1Gshm1A81stJx2yGsdLiU9YcZ3zbZ9RarjNQdKJ",
  "key15": "32DsatDuzGzsspjhVo6USJZwdA98a7C781qTKN73nm9U6DDFnSVH4WbkPL7kEGTfE5SWu3taHQGxFHqED3ULCqDs",
  "key16": "CYzwkiziZgZvCCyyyr7dPNHYrWLiJTJSz7v9i6YdS2qSqCT6CdEy8zNAFgNjhiLbAGDRCYP3TjEa2xzq3eYpWxZ",
  "key17": "3ggXEPgyWUGkM2znRvLRcgg7rw2QSLHHc48DspHhyCED2Q9NW9eSMobDXbRX3JoY9AyaWZciv5NdWqUGHCBFQ7n5",
  "key18": "KAzhfGfdVeE893ZfRtsvst24AvKsYBS7qo27kKrtcy3koqM7GHyaJfwW7fPbfsVf4DBgqLqJauQBjP9Su1bPhhh",
  "key19": "4mjsK6BgunewX7ZB3XUQ7RkQSXFtTLkZ7dr7zsDv2L8Fo85YjrsTzskmkyPqDu2KGDByyAHKXQEJ1t8qtM7kFamL",
  "key20": "3VYuA9AvgcF3PYT7uQMrqf89fMHbXnxfAdXRw3KkpT8EabzPwcPZveB6fqv57UF4k9FeG5HagySeiJLbcSdmEvah",
  "key21": "3cHojoDQYzTqn7FaN89vV7PX7HVnCfzT5B66TYx31razVpRyzGDN3Jz1odzGxa9hNg4n9fjJGoQRWnxch3eA2dGA",
  "key22": "279PWeWpF4TAV5VJWT54EA9DNPJgPS3ERpAG2dUABB6xMKB6PUJrEc8eCkspevrwM1M8eVMgayrBxKavrT7Wu25U",
  "key23": "2jxuP2YHDW2LdvGMSRYbnuRMXAYH4NV6qsZzkToKSt2YU1vh744rv4gJixNTDt2CkksaRDMGRU1qNTke8UVowxBv",
  "key24": "4RmqTAE86Y84aum8U5yawwgLHugqJeCmDVNFdxc4Xhh7ux8mr2437WuutADopYJKV4v86z2TTvA6J7d1fn8NWZwA",
  "key25": "4Npr9X4meAo6Peo1mKaCfQEZxkhmHcAP1CEfSXUmzm98hBTzkgxfmYjgJ6QFfRCjNyr8myv9WTZwSPWNeuscXFsA"
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
