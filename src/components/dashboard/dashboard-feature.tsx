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
    "29PsAk1ZJuc1kbHpYpeTPMf6BRRCaseQokkobzX4SoX9dqexZZP5WrNkBANZnC1KxaLRy92La5XgEN4wbW62D4Un"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5icXc7GchaQckgkr3nrKgxi2dC2qCVnDJgvoEuWSaWKAbnmCLfyxqUE7SrhkEhSSdFgad4jXBLMvuDDsEYcfpfNQ",
  "key1": "5FCcw2iQzaRxNuW71ptiaH6yooEYi6m7krbmr1Qz7gAsbYfjeFbF4SVgzyWSnHTytDUFeU2na74y9DFoXSJgf8Rr",
  "key2": "2oHZtxS5VcBVR8iPd2dWPRTHYe6vAsv1L7FguDxndwcQLetMx32wcsrtA4SuYF8yWo2DZjeqzGGWz6oEXGRwztYa",
  "key3": "3r2KBSqBcbkKtYV5xLTm9ZcwFxfGWCpwUYLUpgAu5P9tE3sJyfpgB65vnmRUJE3CyvyM4gmJS8ZWPnizhBcYNJ5M",
  "key4": "31W96zvyZ2aGgCg2rGh2KYtHFwdCvBE5C1Dnue28XA22RyuDAuZbDuDuDK1W6rMXUoTxsw9pmZ45Go6Y2X6JuXd7",
  "key5": "4wDasdwjZiAho2nqqvUQxsCEmbh9x34jt8UypY5UrrzJRKf1eo4yJntTWWEn3t7t6pA2DMEUeYCsnYtigB1wpVR8",
  "key6": "4oXihFbc5zuS4ipFqrkTU4ycQqeRRPp6ATHWaoxWEvatYstgJhEiW6n6uc2KVozKnsrTj5VFktvvqg6jVYptULxt",
  "key7": "3QSt1XRo9rGQojNZ3dKM44knKXofkZfzLWzzjHudRLznpGxy2ZWcdEaF9L2e39wuZhEW9QgbEtanyaN6SSjQQ3Ld",
  "key8": "4cK4zwceHgxcpTDtVwGCyfqRu145NZtFBjpCGEMwjXgUEPXWLLo8GgLxjQKHX4Rk8Z4nRAVvpwjacvZWUBmyRDdx",
  "key9": "2mFe2jejDuZums79RATLPpAaqLs4rAYJg8EXrcSbQrmYmr5JgKTGU7bE5bn1YXcdVbFxqPiF172gPApXUN5cnMHD",
  "key10": "5di9EDW4qEGf2eqViDoXG6jkWuVv4dAN5UDsaeSda52p4XZRTriCezmRXwkS1qhJUD6sRwrgCNT6BZTGvvtps77y",
  "key11": "5QWNKpqt172BnQ4oUWKCLPkfiobAWw2z9QWn43GajXQbgr7LLqe9C4dJvTzvU7fUJn1WoeLu5Xg5wGJe5DQTtrNW",
  "key12": "3Y9G2T6Xq64S4M1CPsD3qCvW3khSmpf2nn4n2GbrTwuoKZjgsKREWGh1RqTU32ySzfHGnPVHsbwB2irJdAw75XjE",
  "key13": "4V7mscEybVVh35GikJkYVQUqgiMFHN2uBMFeoW1aUhypnkHhh97BEmweN95xFb1jM63w46UyXEegHt23V5meVLhD",
  "key14": "5F3HpBkkgjMJusf4Hds8a52CSgEuRQ2nbkMMzzcj22DSd3AfxzdbUmdhYUJULjR1sm78hHVU9S6DrHLhRGELkGi1",
  "key15": "4g8eWv852MLtn4qHAq3hCayehGHSnBo1xiTCsXrj25L2bCazbdi2aGReiHLM9AEJtQsX9Yw8JQqLTaX3j1KBwftC",
  "key16": "3oc1Uth68bvgrRcUScpYRiZcc3warPVhYxXdVYBANB1961qBvjscu7FDZWEg26ZfXrh6Pf83n495fu6V2DvAEnz2",
  "key17": "2ifoNDZVSNK4hk6i9goV5e4nhYbB1T4xq9m7ZnmVKZrFq31p2AjXuP1hv39AGqafcrXV5gjGVe53iBkzQgDYedXk",
  "key18": "2FX9yHtVSf8Z9tc61KLoA7xqW51V8uBmP8mWbnmFePVsH3W3EoHpcKJycb7UndrieEkjxgk3QNH9v4STPGURkHMi",
  "key19": "hXhefHUTrf3q4JqYy1YatDAtKKoAB8YUxU6jminr139h7Jkma39KuKVhTcbbN5jtwMNV78UvACNMeuvoUThHgm6",
  "key20": "Yy3ATTJ6dKc4NTxaK4n4w3EU1Vwz9t3isTnpvcd72GSsRd2uALk4Dv1ceEffzz7bwJQdZKpof1Jjxtt18uWmftr",
  "key21": "26fc1YeqjuuADLe4SYujsCtz7BxMQwrbz99KSp7YHFCkYxoF6krN2dm6FZN4UK3tAsDN4iZk1VWyjbk9WA543Ckz",
  "key22": "2tdNLitZ7FSgCZajtgKe98xof1Wz8BxQD7Ga9yJPEPXfecUxV5fv3DYNSHbggyttH1j4LGFNMmAGZxgU9dWXMg52",
  "key23": "64Jnqxtg8jXpQCfjbnW3uPocGSinPWyhHJiXcWQz4WdtxGLQvYXhuD4Raz9qTv8gMCbZ5wXtwxmyCsD5MEr7PxZY",
  "key24": "42C8UYfevnmYKYie5gMtounBEvLgifZuiQWUNz7szUurHE5UbwmegfCMmf8c8PV4jZ7sEUvyt27V4hjR3Y8VhXs3",
  "key25": "2HQyrm6UxdukMGb4FFMz9syiUhu645LGgJ6SFMZ1KnbYMxcqAZNzQ6uXGbFGu9oeWKdgSsdwAH3TEK3BZwr3ou76",
  "key26": "5ptbP7WuK2Gmt6Gy3zegFmaJEYZi4aKF9nTgNZnZrauKm61Ecyypcjn5jxgrhyCu6nnDFL41gaBn5k9k9Pns589W",
  "key27": "5h3xTMuXB1WBDTKqaKkdN1rXdWrUyYvDKAvs9GH1ZaWWTHGnqq3ac6dS3YSXC1t2F6mU8q4sy9DFLBDk7jD4SnLq",
  "key28": "3N5xAWBBsZCkXMCoiwddxML4Cavfv8R9owbRfX1nz4yFApuggHvXo3kkTt4ceykTUAnKtNYNnb5jNiRsdpHbDhr8",
  "key29": "47HJiKocksXkBeHkZj6c6ZvPaaUYdoxBFgj93XAKHPB9fJFvy3pBbMnBU7ffnx6nucPfRCX8S1LXNaBCjEJaGDaD",
  "key30": "5C7Fy5xbK5PnpXy4WKMqd3cRkbmP39BXTfNvaSx5sfD75iU7LA7KYJhR463kMyxAhwMvuBV19hfburUGdbFxgWy4",
  "key31": "KyVs7Yb9P4FBsiERQn7LbDwACAy8yaRsQZwWw15j2P1g6fJ1e7g4yEQuKpnuQcrj1fm9e9xnhzZ8oku5WBYKEUW",
  "key32": "2NwyVF4nj9WewSiLvySD8V2DKweG9Uf3WHHPkYdJ33L9JdvxbaxiU4BBKSDifuCaeoKUfFEaFWSnLa8wCZJqXv2a",
  "key33": "4HDkm7QYKqb1JQt5zsFs9KzKjD4XJfsEQi9q64JQNenGT27nEevchKGbPv9KhNfNVKUjRBgZMjcyHQ62UTeWANV",
  "key34": "4MCRxcEhW2sbYVhnfGe11bnMgS43rpZRGZgk3wDCEBLngQT2iG4xycEs3nQg14qkEH5Y7qs3o4LcvgGoC5sZ5hkQ",
  "key35": "48bbEyMxCT8g1SzAtPjgfa1Soonh27B4Hf5Sxm2RoWcbT55Hi8oT7L6WkimKAEGyuaowrL1CauWCz49YSBGhG6Ds",
  "key36": "2teDCrxBkzT2nrPN4AVQaQ9NUjaK6rQDvYGuVF8huWm3CUdFLhxQRuJryNZBTcJsFEJDzmh8sp6DsrNZfHqtYibT",
  "key37": "8zJZiiLTVbFdLET75FMzfctG84xkiVnJntwbcGxsTbYiqTAEEb8Ysuc8sC4qGoxM7pgJ6YiRTNupayHLmLDputh",
  "key38": "5zKyr8ogG1nuMovMywpKs4unM6RzBuskzi6jWfFrVFk2U87i4Qi4cbJfk9pwzADU6v3LCaBtZRja9Y61tB1Y56ve",
  "key39": "2T7b4iUchmA2yP5LUZzDWoY7G3RCzzZ9Xm4KdgTPHb89xwHoZhknoi3Twa8d12nFn3zuUNRmaYs7NGjPobrbgtHu",
  "key40": "Ej9qGG5fjzXgcgtJQVtYGBAjPYxP5woXSeRmWrT9y8kYpnJV65EVGCbswHf2W5Yf4GuYXaweD7twqqn2wu6LsMQ",
  "key41": "1Mgt98KrGcNaSKpZBhCqJUKuCDcYQCdcJNZEtqHsXPBFDEC46exUsoKv17KYYn9kiDAwybdF81god98YaC5ACSa",
  "key42": "5H1rbYNJdTDwkvzUqaqtHTY2QhhDYiWPDL2SJfMHLsoG3ryeQtdghgwNpupuJMDoAv2gyMGsnTmij5rD6QQe1X6u",
  "key43": "3k85pGt1DhnfCgnxNMo1A7ivhUYDPy7TaSvcQT6b6Rr9y9NQH8AzjcdTYXyCKwbhEj4Mif4NPYsHci75a2UcD7y3"
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
