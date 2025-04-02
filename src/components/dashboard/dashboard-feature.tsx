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
    "JYPnDWkshzSrbLXxJ9gtznDHJizPTa1c4zyiaYYy9ZG155gLZfB1Mne7onDdmX3YiVdMPMtHEGh1rfVost4estQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZWn6zzsYL13QqU2zEmYXtJ7n19MeqMQchBc9pzp1CAYFjAQ4YPr9PUSSJUtEXHZEEgyk2UXzqZ57JE3QrjP2dYk",
  "key1": "29qgijj3YxNsKwwuiiixBEGyu33ntkbkxdSCujVe2qo154mvMvt3aW6STbDKtPMTUuf8d2LM9Lys6z4y9zVdnP9E",
  "key2": "2sfu6ouz3B8bRLxxJsq6U1LuPg9ycWb8yyQsn4MrVkcgh7Rkq8NMDuXUiLT6S4kb5VuixTT4q7GvnZRnWw6eYrZU",
  "key3": "86FcmU4X7JanMKNP7J1Gbf7nwaLcXVAMDcN4xwPKM7p8oErcLku83p6MsY2j2SamuJ82S2B7ZczE2HvCSmWvkKE",
  "key4": "h1Y4EQtYsFu6iZ8u62qZrg5jKwngG9D34vsatCnNwJAwEwoG7bcUbAvFG3tzGxpWMuzAzrGoNHn5DDWWdX7zwWj",
  "key5": "67a7m6BcLxyrXg2zcnSBW3AUS93zjzK9QitzV8Zui1MEdEAN3DXLD2wRvtNyQygcmfQi5bJSewDmWZzPg3xdJzHn",
  "key6": "5GfZmB2gGqHAuJHkNoUM1qqvb9uwDrCVYK4sCvfpjvNrvaxJyuFoQgxFaNEhHtC8DfeGGeyKxresjepJtGoYBavC",
  "key7": "4zwmujfbEZwSJRZ8Pc98GiCJCBQ5Gpvum7o6FMCkLrzAfyfr3egxADqAPx1QK1kLHW1Bh1ehhJar4wqSh9K4iWhz",
  "key8": "4GA3NPntUtcvToSGPshcXyUHxoXityDynd9svGfrs1HzuhaA6o4Kcd7DLs7BEopDmL5nZd6cBgZgupZXnrP4XUdn",
  "key9": "3YRUaJcfx4zBFGXUGt1ZkLTKDWKVb5uKY4u8h19tXoS1aUJgZ9X1jiqnQKRzGFDVg4GfPCLEVEp6CCH3F7x3HoAR",
  "key10": "4HYR7FAZNgLzsvwaFknx28dB69b489CzQa1kfeWD24Y8KgLZZcuQLEAEYcL3Wt7ynCiWiFcDJ2yxcgmydFDY9bPu",
  "key11": "3gKe4a7d2Ym17UVXTi7uSsaeCm246mUcL7vZisYi3fUgwBT82BeCpmDViK7ujTX3H2qiUfuaroPbz4K3HZBmW4Co",
  "key12": "3cgrEgbqQheQgdUcwtC4udnajBow2dACpTJrzomxsjpEw8TALYsFgv7xuDct45cw7yNsHBuDjDBMcHAsU7Deht9m",
  "key13": "4Mt9dtJxYLTYn7ubJa8R1mPV1qS286maXrUeCrA1v7qsdYsbaEHry23swQkTiBpq5GC5tqDLkVMckJ78w1fUGrg8",
  "key14": "4gmbGLtasRTxmCNzpeBVHYjAwrdBKFFQKaLU5U1hLb26HxjfhFWCdDKdVvrCpWpxgG3nrvK6FvNiYwwM1igqagWJ",
  "key15": "33dAWXebL2z7saYs9FKfSUbfiq866Pco9RAhmbvqMcQ7jP1nNLaPnScYr7qy9sPRWa7aAMQ7Bp4LN1Qp5jcjwFqh",
  "key16": "5Lv7oVKhM4VQAv8nLS2857fLVmpwKDQN6Ybm2cu4JPBp21zrTMwMhSVJUuM5qDdsYQLaoyoYLWs9UZr88en9hf7B",
  "key17": "23rxfxnVig5UsLZt2Pby8LF9cm3T5KQAmAHxsCQ7gEMdjahEHbxwR49nVeCjcZmZAfDLssn1qfbhhod33WjKjYBx",
  "key18": "2DgiJMkSHGECZNJ4moCs9Gm89anXJxxfibns8VpY33qVeuevDk67gPW3YrVEFjRaj1GSFc6w42bkLvGmaQuVaz3N",
  "key19": "4qLTQ5REEipcf8Ai8aQvtJREQcTwHLsump6KRwAjWZrMpRmys2tArfuHjvUstCezRDmX1Dj37YSizCTteJAFskti",
  "key20": "nDgccxbNscpRteSSU6eQc3ccJtHwmzeyfTzZg9ZZEDGzkEp1Rz4gBLY334VjbjdDHgPVeL5NebRbynFjuSRMtWP",
  "key21": "3r2bHqRx92wEQi3iXr55JgwTNAbyT4ys4ZyNJAVPuFKX4o8RSeTU4pkEv3V85UEhesbRvFWGtckSzUf3jxbb9VZE",
  "key22": "2RPLMPNnR8CtB7FvAVy6QB6jK2kRfQY9Ljh8AMoi8h9aN19f643rUiwYbWWykJ2TxgTLMT9WsaaGHSBgRBhXDrmx",
  "key23": "5ARJSqFvpejq6bYrxKYfRCAVHfHD6Xu9rgxEXhFnkrRHSB6hx9a8Z87MREym5dwXytJ69Rd6hrvwm6JC1XZhdjyh",
  "key24": "2agpACkeYHHMF5m62D4gV9teQb2M5kJezYR4t6z3y246dadKF9b6MhWyEjP4XcKDEVXaaqyNwbEhuT6HK6KJTLf",
  "key25": "4U9WiC8fsF5qPLt6ChMy39MQ3FfRE9hJevmBj5EZsf9KjRuaCj4nQRLRWkHwj8GAjMeL145wMs83vxLvd7qotfiS",
  "key26": "2E6xTEHjc8J7eoJsmB6fG93TrX3UDpAPe49ipCU4Vebgm4C5eDetVDaxetgsaeUvtQLRDoasQpfHbnwWBXxxemUN",
  "key27": "3F8ir7BKb1uFtkJUNQgpNSQVD4M5Cj97Hjfen8bnVAPim8EbCKPdiMTcxujRkhnhtQZkstKWk1SvvqkK9AYHNigp",
  "key28": "3j5Jz7RQEPnfUCRHs5PKqH6T5Yq4i4Pc73ANXgGBu621NC7vJqDNSMtmNg9LWqHkoUU8dBfThbKVsAwhKLyN9EYV",
  "key29": "3nEefcP9MKTcpivLRSRSKx14r9X1n4m8Vr7asss84F59BGH3drzhczRk3PyFRcaonoqoSi7PgRNM1T5XwcJMRns5",
  "key30": "2ZMx5C7raeZpoe5pQjSuDPoKhZHxfwjCE4SvBJE4ZJix5tdgm6BEpzrsFRSGEa9y5PpoEWFWMvTPSKwMrFysGFsD",
  "key31": "HgB9h2yAh9gWnMFQCiHExtWtak7XTVEftYBuDyT61fMzFN6Qg8txPti6n6XwAE8bHXQBdRx2URCwB1nhqULYnLJ",
  "key32": "5VFzszr3QyFRzHn7hpbep55NDiUujiVbjzGcMgXjcq6vSs1uhCirnpztHekwQvVo7S6ocWhYuhmFDyj2WsAgtc4i",
  "key33": "wq573o8tezsqDPsJQ5qX3HvRngs8zdvL3H76YU6nPTiwf8Ek9KmuZ7ZqicCdvH4133rEiYNaYCWX8fGKJXDXuq7",
  "key34": "3dABUtpGyuEbwcYid6vpxyyKEnAXiH14BpspPDC5AkPQT2AKYezKznnJUYbduuopeMYA6JXa9P7yiNw95nVzYMsJ",
  "key35": "39ygGWhiFqMhw42kr7pExatTAZE7g9Xhshpbe8fj9p5xzK5Am6CqFe99rzQ6wAPNEjZ6cWwzW53pJ4etwnjaTRWn"
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
