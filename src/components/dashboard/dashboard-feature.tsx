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
    "4hkzzuo3jrPJ4GfBPJjML2c9ruwuctmETeY4283VeCkEb5zAzBH7p5nEWThhmxpBva9JM46d2mhZ6yyGT7My7HKL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XQPwxtdowrDfWmW4UAMTTH8NhQq8HoDReWpNe1H1BXapbi29RNKvR1ojoPHe8EEaHuaDXP9CnoHCnwxDAFmGeD8",
  "key1": "3JqvtLzQSZfqDoAvd85aiUbPHaPhdvbK3DPXTEZCPQoJp4Vypq2gMXVY6Haf7tGdpTCK8vb2ofSLSGEntKtzKuDh",
  "key2": "36MzHFjpjEtCGerL6kxSvaBw7qsw6tVYfs5sdVqjX6YAG6vv19KBixnsWvoC2G9W1TcA5wMpbdVLedqxs8A7Q5Hu",
  "key3": "31V6bgSKUZzniRD3GPm4dV7ZQoMW5PFTC8iJLeoQDaMdLJTCsx1op6dczHFtrSZsK1jnyCA5nqFfyvLTyuBWBjuJ",
  "key4": "5jg9qr1QakMAarN2PbnaDn8BU9H2du2zeqiZJ4Ln1vGuCUCtiHveHTSLhEbFNZvFEwHqFTWtmGSFKhK17CeFNM2L",
  "key5": "Zk1k3dYb29FsSLWAKiUB97wUFL9HcVyZf1oZcBwKyPF77h6RG832uY3AMMiykMts2kuFnka8oHLYsDDZiDkuYL1",
  "key6": "48vwSPodVDZgw3nTBCY3hehy8658GaoSFn1GkVspcnD7xfGYEgukYhHLFCKwi893skv5esz7YsjUD6cGh9mUuK6L",
  "key7": "4A6AeY8EQMaJvZ3iNsYjKHf4s45axNvorLBFAcgn3ABe5U4T7knxEdru5Yj5xa5ZWSroJmW7P7aopGGZa5z7EN6x",
  "key8": "5zqmxqhfSdqHjHN56oUFP3f4rqcxRZkBmFRgY5bjxTtStvoV8PyxKqCJZaBTmtZyiJbHsHa6KwMsaDVNppw8oLR4",
  "key9": "oLvbbXCDRanPyUKJGa2AB9KTnWppDgq8z2QDWwniEc3ZsEeoEv6i6ARckoRb5sxa3THzDEcCb2XQQH7paMkRtVu",
  "key10": "5DNW89SWE34Vu8hjDdWR5PAp8ShsXwPB8kviJwn3AVt9rbKWfQ2xnx5kUiuLGKMZUG8or7dkvRoHrkM9VZeLEnPk",
  "key11": "38oWkkAMtrQHyqq5Y3YvZ627WbDUtCH25zBG4A8ocR6KwPSGvR2xWqFcFyhCN9CFJmVoaRv7KdzK5CjAkDaqK96X",
  "key12": "53dkrhRogQZwmjaJUMxt4eUpru242BnFMT7wCXNeH8Az91yBZpS6wij9pURKpeJgneuc2kNtRTeTnGvw5681pZ1t",
  "key13": "4ALC5fVTvbZiMxBjggRzfzdWQbvUt264NiTyvNT4dNR8xtP28JMu9wT3Z2x2pd4ZvAgbSfxjR4nDtYc674eJxj5v",
  "key14": "3S26PB7qDAZYBTFSB5JmHmiZPfHh7vziUprk7cE2fNHhd4oBQFemQpfDpFgfpuF5GULjLE6WmwGuMZizj3HKan5c",
  "key15": "jbhoz3b6QUEQ27LWAKqpd7BX3qzw5PRPP53tPWborxFiyPoDssKMXaqoHNLCCyaucCjkEkpc84XBsiaApVVxTaR",
  "key16": "oBuKViBZAWeYCcvqxnhxiWKwnqGu6xyv4HNRwkFU4QD6m6CAgeGfprisnWps6aY8oY4BtV4P4Ct14xwQ7voVwfF",
  "key17": "37JbYthPnzzKdUnnU1q2NkSDnWpkKqqPTDKxTGHuwKkvTbhQga1DByLLvhhg4tBM2r4AcsUCvubAQYbkdYeLyBXK",
  "key18": "5cczejvpFkt9ckN6f5z2xgHAeqzmZ4vLNQYABkYkh8NK3Y2rdVQtrAPU9GYP2vG3LMWLq32Rega8HyysAtA1qv3b",
  "key19": "n7gNsffjDd8j6h7gX6c9LwCpCDhFskf5ZT9PAqVfwauANRP1asC3X1z94xyQZsNKfdEfEjWt63n1Zkg2sFsLEtQ",
  "key20": "3SBDq71eUv7SPWAn3pyw1ejxpiQJQaWaSiQgqwXxxnQLqXovCaHz8FZ5ZUMysB4KAp4m3zQNMUE7ufFcXnn6vX73",
  "key21": "62Z3tABVnUewDxz8CsbhbgZLoYsPRtfMhAcV9xBJ7b2Mz8gyfVoy1PgKwGodgFXrA9YSQwaEyoo1qqFto67FFJZ8",
  "key22": "4qHKH9PconYz2n2GmmbudXdd7hcScnpsa6WrD998M3x3nkxkNLpHAEKmh2NgooiRjAQeN8RYBtb7Ep5Kkj88X8nY",
  "key23": "2riJvpd4e3CpbZWMzjguHZeqRMmLkrzqviaSUZs2JaqHLCq9JGeiaxoNt4YxVD84Lv2d9W1CiW3cE3cwhcdvyPKn",
  "key24": "635q5eXBgs9FUn39Ykg334qQatrqbTi3NnwVVGJ5Gm46XDa9XiNmSztEi4RBYsFQWrorPwZ7BHDCXHHr91uG3Dj6",
  "key25": "2FaSkFTaDc9onMTtfwSE68y9dpJiXUqPCNThzvEy3pA8mwCXU8aRR1et8gWpWQ8kZiPoEjHLqrFxLpYCz7GJHXQw",
  "key26": "4NDCyvYsQ3NhLbb9Efrr16txDXfaHKs2UsFtgYSU7NaqxGAAK2ZT7nUxAmUp1nBfgD8v8xJerAWqrJEfoBegYcXy",
  "key27": "62fTNXaKd2bL81641rjDUNy8Kas5QVhHB6otJacNmF1V7ZYCzrX1w6268yBc96AZtyF2ZKbxNCHbkexxt4H4uh3C",
  "key28": "4Wn6NH8M8p2tyuViZtBBMHxchFRx4x4iYQYmFwNZgWQE8iiKRvambfYTUQBZxqZLj8zkTjY227NKYEdUKXYcuqrs",
  "key29": "4FoWUS6MqGzi3DKry4PccypkHciGgePwCAZ7wwrZ2h7iqug8AeaK2Vv3M4nRywm1iG1rwiNDpk5JEdtbsLDBXMUr",
  "key30": "3UhiAAYmYJhNDHnDUgqNsizf5NcbbLsTGPzxUmgDuqW7nuXUKRY7yTzh7tCq7HEeqJWyxiMrPzob6rgeDXFTjXQy",
  "key31": "3ynNxXm1uJgny7Rosf1o2y63A1CybDTDQ9vidAnTMg125qj5tpUgPiBwkZ2Sk536edru9cmAUwjJTLsPAuBbFcyV",
  "key32": "4CKshwd9zY9FA6JGLMYT9oyYKNsjNvWJdkurCVsSWP6cjHpyBvUdXJSLN7JH4X47UUzpKo6awvBYpYAa5tnhz578",
  "key33": "2d8HUEoMLZ9QYTTy8ANndtFRFJKkWcdXszYcRveunRViVzjNpYxxrv5e966zvpQq8FMuNCtpmN11pU9qMij5S94y",
  "key34": "4a5iz1uKGhdk5D7ermnLPgqhooNdufdhQWyHPgAC9mvUqhYfg3AcxAc214odNMqFnMzgfNgJqZ2zNHyKwQmcY22r",
  "key35": "51cuMUraMNyS3QNDB4jqszqTWsUs7vpksgs8qy7MXh7SYW2SkLPY8EnpK6pp4QH2oyzrtjRYQU37vakDWJN5yTVp",
  "key36": "5MraPnkjpunGBBa5w2997F2urcQvDxTHQqKnELNy3UWX4N7HXvnemUC9xrbpkZqB28uBreAHe6zTppKZYmcf6ApC"
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
