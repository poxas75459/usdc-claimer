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
    "31mjcT49FChQMYyeEDCDerqbJgkBsMr7ZPa4msw5KdBrgFYtk68CUUbn95T5epYRe281ge3ZvkJn93rZUavr8oLH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YdF3YHoboRbZ3efmFBbwRBNYx8U4D1QHDmTfee26M5soKkzM9t6oPNsHQB2z1gwFWG66ThFwCVmdBCH7b8bAYaW",
  "key1": "23fX355H6kcEPkPnk173buXyeB991NR6yNCqGkYMJ3MGjRd7gWFTTfS9uRkwvoy4UxC6wXTAooJLrVbWDDfVFpgb",
  "key2": "55ARSFggxM63oTxsAKNGsJ35RJJ5B5t87k4ivM1CN3sTefdKVoprSJ3tcksf2BhAqVQLQzMBKJRHGZKzcSW22TrF",
  "key3": "M1gnz9Lp7trPm2w14EYV1unYzqnRtgRxq6K2TXkDcQNW4F8pe8Z9QE8Y92MJq7jwA3Efr2bUhCfA8nYvi1TSYG6",
  "key4": "4np95N36pSZA75CmogQsRdeCN8aGA5pKbHvo6gigDHJRuYsnRbSdpJafGQvuGmo8FYoGFYrAx2S8j5BUKSt7wcKe",
  "key5": "416D4YiQYPHDmdB2ocEW8pRzrG2wfR4C1te1eCBAmTwbkUayn6yLPJYoZbyBMyYhTRFUYeKsZ82rQn78eSEp3CKP",
  "key6": "23Exio2rwFNoLJBqu7Xum5am694bo2NyysaCjBswi6zHijuaQCREG3GxHFwoeNdYVYQWYpmaQx3vGfLyt6w1w92E",
  "key7": "wjaBZTQvsfcT1pjcRFiYzSSBZhvvxCt2nFqG84TikTWY6MCC8mc5hSKeAjumryaSbYYU5yDt5Uv5yez7pF8RHAH",
  "key8": "4c6mKZFCuHNR2YD9ndxvcuB6wNcdXiM1i1TvupnQ6d1UVX6nSKABKt8YYmRuhw3PsmzysKAFtgRcnZoKEAxJrhXU",
  "key9": "5g7hgQEqKKjKpb32eGsyejipf2vsAqu9gJ4YdsGp7ynvFAuu8BmQDWoX26NqMbTvBbEwAiihpidaTxbEttZBUBkd",
  "key10": "Yt7jEnAksTVhYZHq8fKZkYwPCsfhPwGJUjN7dy6NC67FBq8Amq1SLp6wKNztqh7P3g6byegKivyaU9UM1xiuQdc",
  "key11": "2YzwJfgo9gEBSxsUJqZBPZoJmJnZJA4uvXBoSRkwMmMPszxkXYSa8VmYP91cJsGHeXPWmzPdpGMYbtNGW7w9njTB",
  "key12": "3G6x7erNcRKo7PWrMWvqCAGHUnDXDSUNM7vN9oUgzxC8g9dMB76HX4rrxpdnj12yzia2JQD55fbtt41Bt3BkfJ5b",
  "key13": "4czoCFvoAHYL7gFUMueFxWJ1EwmemQ66M7tXLJw5uX9o3fBDZATBTx2ezmHooVnDypx5Y5HUsV27DSCbgVi2aN9J",
  "key14": "3T1HeNBLpXoHchZdbbjVSiTWJSGGEFqriYZmXDYoaw14YUTgkXm9M1opQ84zTG2nhKikXLyujv5ijdjj1B76cUpd",
  "key15": "2rwXnmGNfysok8cb9QcRhrkmPYnPgb3eWJcN7pLdwcfPsygKSrfBLmaXi21kgRUJVpKHom1fmFUp5ysLVEe2rXYT",
  "key16": "4bqmRns84tzAugPEhDQdUW24UTFdJSxryHU6WunwYgEYWVZ1QRV2Y5bFfbHmRmpttAEJF5WZFZKUJJggrUrHscsX",
  "key17": "3sSKAwFPK7qFxTHS565JP5YH3ZvW7ejHbUXnVLbEfDG3Qw77CKGXwAFY46DuKbXpBQNpEZgapAwYxF89etzAM81P",
  "key18": "2ZZVqNrVkBVqRaEUHbg5MsDEWecmYTTrmg16PzTuHtX9wX6QRiPhsQM7XeLwknbdPzcmxsqUuL8uT84pCrfCaW4N",
  "key19": "4XPieqaGVqM71YsWFPGV56f9DXB4JBWPbBdnyeDEbHp4rGji75H6RxGkkRARXKUHvVhWNVpEAiNJ8J7waTybP6NN",
  "key20": "cQ1xGr3XpYzaL7KDQoryPUPkTFFbHa9QMqQ1gKeZ7noWmkZ6Fuxm21co7APv4xyF6VoUsadB4CfShDa1kNhFf29",
  "key21": "3VWk4Bz7iiTCkRjFQhQw92qYxmWUGUPXy2R77yTScqHWxyCPUEQrF5tvFcoYK8UXMcv8kGVRcXio6pk3KabGHfqN",
  "key22": "37A9MHZCNGxdgfXzHam6rthg2TMg8h8m6o5xgjuoop9UeskMt529xL8m8uW6HA49UmXm7mk6vBNVZ7nyS6UNZZo5",
  "key23": "2XvbjyVEDqU68ArvcYzJ21xaJQy1tkweiN8UbdtzMChunAZ1de9ABCvno9U1MkWytHW2QXwGEqc3PkE5PLp2dhTt",
  "key24": "3AzBwrkXxEh98moWNh5iiTa7HKH681esrG5NF8cLsfBiMNGMy7ArMw1WNpKov67SPR1NimvQ7znhB11WFpqnTnpA"
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
