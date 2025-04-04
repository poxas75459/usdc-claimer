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
    "2thnAS9d7CLNNh8xbkMiiebRLck3eYPh4WqrVNx1RjttY13pHoeNPcPGUFmaRR5KdFa5RDS9Yf23hfQTq7shgUFx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KC4xSC9qdBho8JKjm1WnSJVyWCtpsXADgxEVu3br6s88TJV75ZQ3LBvowpmRCPtjyX5omiiLBYqxnRM2f7K1UNG",
  "key1": "4MmfDqtUj7gyaZeokrVx6NAjD4PJ3tnb5ui3d1zutrziT4YhQzBp6BwVc7JcFzWZDDEyoZJKkZc2JkwVB7E5xGXj",
  "key2": "45K57QmHYBQMdqh7D5iWcFRXrfPanjksNaUMXmWy8xzTdSujaCJMYLVTR5oQxRHbqUozE9zUiQi6C6kMo8bj1Bdv",
  "key3": "26jmU9N9ho2ft6QSVst8sKnCm6ZmHT86Rq44FxJnSkkjaqWHvyM4xp97CWuWVRJTcVn2s4UqS99XZEw8Db7wFaTK",
  "key4": "66mHjyTCvssYy8fT2tkx3ZxfNMFfoL1xjkNwNNHrt1kLnV3fGF9mezEJb5agv5VwrRPjvvvWky17rUv1psxRe42m",
  "key5": "3rSr1onu8RhdWtDqbW2MwkRMemT4osRfxCHcWWRve9KretHGikJAMH83CmWJ5DFc9cyY7by8nDuXnCx5St9jSUso",
  "key6": "uv97bqCkE56b2N4pXUejPyqJzfAo1u1LTuJcdYMNvdaMdBxaQs6nqQpDNsV9Sr5ssaHpA1exqGgze6hrsZFuPG6",
  "key7": "S9Ps3UapLpSSDjnUaG387emKmbDRds2NYYLh6qJfNbp3psQfeGTGntRf44ZEes5oedg9BeuLnxTFJZmpqP1NfLo",
  "key8": "4jBAzVibVWZnxAMjEnVsGcwRZ1dCNnaq6QGaGz6YxL259Tc6utyvSziCqq7fQ196AtL15m3Twj4BGpnPjGU2TSc4",
  "key9": "39K3mqfuC3ZvEcimLti3vKeS3DoBqLstyGqsY1GbtNGhAoKdjxggMRQt57Nje2zvdSAHQgZjsT9TiQs8p8A7r17U",
  "key10": "HotHHG4EVEMRbcucsM1a2edUV44E8cfchtfoo5B2Bgx9k1kdihFeaCKkSuWqoMKUkUeXLzwSWRp9sRCrPsWh7va",
  "key11": "VH24c16HLvCK7aHsxtJrsahLnZ5GXmL4s1jzJSfx5i3ngozuED3zpJSfTgfove8xadeucGJYvRx4jfRF4k95ohf",
  "key12": "2LjogPoUrqQbiFcRnKDnmE7EGRQBHaaNyd9xe6vFYnNULd3NqBBSNp2RFEHqUk2awhhpGS6ZPBZR4EX54zoNc7Fi",
  "key13": "QbupbVxf1KTXR6BfQxbEDH1zC7jfZ4UGLvE64ukAtWG9Qu1oZMjyad6N39k9JczHN3kxgkNNcDxbArgVMrDyHS4",
  "key14": "4U5C3hQeg7kFGjqAKe6kwmz4buQAt11Q4S8hNrudD7EDVHs8qtJoSJB8z6AmL2mRQFHAjMp8rjGKmBSBFF7W8SMS",
  "key15": "2WZKiZ4KB6eK9VQeDbQd2VAsBeyrnngWpd9ekHqjWxseuVXSSNYxy7KQXGG3VqubqgiFRFU6pSmDGJRiKAPLTBVh",
  "key16": "ZkUH4iR5mwPvaXJiBgaBxaKnFbKZdUxqMUr7cgeVaiv4H1KmigcUAvgwiXkczQXhwtsMTEuT8j9YNmkTJ2M5A29",
  "key17": "kYLFFcRpNC21zPLM9ESHVTUazEJuZuB2itosxZw4j37zDsrxQDt2PGpo1e6YL9KqHAuyqPCTHxaLQiMc4hdMuDg",
  "key18": "364JJLwc8Yr3Sqv7s941esYWmzRk1hET6ZKCm78hoH33hFmPCbZENidsUA1Ka7uSjQx5t2jrrYEFkqonX63jro4B",
  "key19": "2wL5UUsddN37fdsA7dpk6JX37KWdsd6XPgCv6Bpo7DyqBSapNHmLvEBSQLyGZmudVhZkVz5wma49M6DfdW4b4oAL",
  "key20": "5BsDzjXav8VuHp3ZYsiJeR6udhVC9cbGcscvGUsB82ymmh73bD2jgDQV3szPUBi9h1i4Agge4i49YEWXJyMtgtNM",
  "key21": "9amhzHyUJHmnA8k4ZvXpbHYaWdY9tvW6FkP21dKJ6gQo8yvyK9FXHBRuXjViFmUKkhQuiQXj5nuHq6sX5Lnvjjx",
  "key22": "3KJwi2KkXiDHwwAPqsGoz7kHo8PP8XnudHy1HeSxoTUj81Loy2WTiAGrdn6ePbpYSJghvLDjK9SH9dwH7LoHkoYb",
  "key23": "64Q4LKmULP3kv64njiiFCiJQtYBBxxkji4UnRxYhdrhe1ArnrjN8L57Thhm84gUA1UDVPeUiVYTfNp8MkahVyeS4",
  "key24": "3uvRFAuGMzqcTHz6H44LyPn5nfzaDiXVfnQfEFcbJDsjikcBuBL6qRtopxRtiBAQwJssbn44joRxcqXPCZ3SHjSc",
  "key25": "4kTanhdCJhdMSq5gBh7PZ5QE9qoVMWT8y5U38b2iWTDgw5qAJhShpc2yDnXW2Ye7xEYtA8UjhRcUig5mPGWbvuKE",
  "key26": "3a95dco9vSFtWBWd13aH4CDRoSChAzgHsDMzKgAp4mxkjbFiCGRYp68spGiSxuRJXXkiTfZyNkCcU2eabGxfBctp",
  "key27": "bMnvLcNpsyLXReLewph2XJnALkiJW6QV3a2JK9nQg5yMvr1nZvT3x18FSjVoGkNYLyUuPYq7dsLwLTusWtSKkPj",
  "key28": "4B28ZagfVrguFzezLCk7gVacj8pKuXbMA9R7FhmWEYBsALfDRxJvpMtqmGc71gQNRmqPAZ1Mf2jV7AGLbDTchBUj"
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
