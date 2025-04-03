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
    "2coHLRhsszBMDLm8NN6gs9uPzQFS1fJDpmhbiSyPcWPu9vBtFZFTWL8J9QF7fAFmYRRBGANdKz2Lw7zoewYqciaL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "upC9uzFVU9kJYJJLdzMk3u1yuy95RCH5bjGihRA24LwkAVahada66tCgtEXdej2K4NKCQEqf5DudbcWU5dL1xfY",
  "key1": "2aUPvaDAWG8VmXoc5exqg5y5JWoZ7QR4DcDRL3Pyn7rqJJny1PQuFfW4CYSBpWM2DtwRsGA6qrNcX8pz8qxy2WW3",
  "key2": "2enWm3vwqLxQuCczxVaedPHycWZ3bvtLER1Nnarb4a3C7WxwrwCMB3qNt8Nu2oHSHVgHhJbNfGrNum7Z6g2qoqag",
  "key3": "37wxmycuaW4qZqyrp7aAkeCA4VFUh3tXHtMBijD1PDL7iqy8o8MLkLuFKQZrUnVCiHmVEBVGsSHEUJ73i6ZYqHf4",
  "key4": "5m5skGauNmzuzQdFMB2tZDGrbUS6bX5FHH6kwuht7mv25RAwqQNfznLbLoLM72E5LSgJspUfRMBxD8xAoXvZSqqp",
  "key5": "35dXDCQUqvnMa93BVtgZoSvekrymQTzDogAzdXMkFeuHBDAsTJnZhKMk3hFkgmoVTiYAMKKpjxwhmZu8SEtVh9QQ",
  "key6": "5pEL9oYdLgxbzebP7CWeiA2RrZkCTsuatWSn95gpn33uCi45ZF2YNgM7WhV8CFMpMaqtNJZ8bzpFHp1Meaa5EVnN",
  "key7": "3LUm9QQsSyg7URkenmPKJrYRy2XXiEWpfXpWu7S6i3qVMvTL9csPjEBwHWiqxZh1vQZ5c1MHgmnaFSHSCiAuWnNi",
  "key8": "5ekerJj3UDVEnjjUBag4joATLBgygV4rgNLXXzsPhCqZcLTL1gN3DXZ8Ak8rvh1pVijeP26u7b5DKyD7QVavFjQR",
  "key9": "4e1M25BGwXhujFMjgefWbyd1AHEmQ1wcBCHmLfXaUEr6PfUU8iPoJ9zCbMcC1sW9mtU2v2wME6M9k3wJwCZ8saPZ",
  "key10": "5xCdo7S4zWhsG9M2kXPzmisUym5og7BeML5T9eCLFsommr2S6LBVREbyK4DnEwVCmDv9K9wQd8WeJQi36zsx5Jp3",
  "key11": "kk1sDBRmTkRWCyMtuGgVtWshoGeQDz81z2CDFNVZ6c9v8RBNNGyMwTYgSf8mfEsEJ5wXajyHseKFfcMJEVSbzTb",
  "key12": "3rAEbs4oHJmntMgd6qnJJrG6JhLXWysZNYuUWeBynU7Ff7N3asAtcxkF5bEJCQ2eqYqsXdB9NvhcDaxMDgMYFjSc",
  "key13": "3k1fYLz3RunmXZJeisoGtsPR1nDLGZJUg1Cn6jE29aaibYw4w5qFSQPKJrKSYk6d7WkyF1P4pBhBCQaHgY3WzG3M",
  "key14": "2h54WWrNXEeTkuM35Kw5gzgz4HbNziRv6UwQpPHCFaXrzyKDcRWSsMjo9k4uc8UXuQuikVZuKZhSG8w7uHi3ZMoS",
  "key15": "46mBVBBDsKyAzUpCT38KfS1rTZJjNnCNN49NL4rbmR3DAoStmihwiogmB9p56DBaX92F4f378F5SxB3tXxd1UqMd",
  "key16": "3PAFFEKW5X48E1eV27AdsuWRJrHHkgJ87tZ9fiTjroECNkoeAompYTcuNuzg25gFogB9iXENyFXnBkwZqWvRmSDo",
  "key17": "3C6jwUxZRRaWoHHnqAcN13D8jyWbov2ZXhi2kzCaXxUHTiPu6qiLd7wRiA1QY3UU2S5o73XE1af4vwJsjByEwwB3",
  "key18": "3M3rMcbXrvByS55g4pSLTQ6zp91KLygLoywQX6Wp2nQGDvBaCy4jS9pPeujZuuE49tjZS3bSYu1kLVjCqv6X3YwV",
  "key19": "BBLRQmHc5Ekg5FA43ANUwTBdxwyzXMXdHir6vazjayNqVzUVijNKaqmdCbAon49c3jGbjSb9MmNuTwY7oTjfuVL",
  "key20": "rUfw72iPiU7z2CzgyD1Uge122tzKkTaSdNRmauxnYNCuLXwySRYNiCTpecpsuNUPrfRAKcGcVeBYXF8DGU6Ttc9",
  "key21": "bLyRFurTPuN79HoGKjwk5hWUsTnBjMyWVyiubthTfQkwcGNjuJAhp2SCFa7TfaHba5ghWxA3tnw7Z7iLWP34QSb",
  "key22": "XEnr4CUDnVMaZqaV9VeMqsRMDGoukct6a2YpXkTKRQ11VcBV4qFNqHWm3cvA8Mcoa3k12Eap3xiuW6mGd9TZM6o",
  "key23": "3RQK9k4JStovbCzNipo7kmsMj43pcMAPBveAyz4KJoJnhTqqktWMEMLbcFjRSjH3LXxTtLnBro3NdwTWXck3x3VC",
  "key24": "5wRZ1Nk1QY4wQamLsE7BSFMXzdXtjxHhzhKeuymEd4miRUob4CZzYHdiBrX5oLiKs4sqT8gkSZdoBET18jZH12Tw",
  "key25": "4BcXB5muWFC9TUqBM87w7dSuVZg93vtinkrJXoGY88yGcDtQ5sS3p9ACjgJ8SAFiC4bGaZYCHvvGFA8KSD2MQAob",
  "key26": "3ftG1p4gMy21FVmuC9b1JQ6rMwpvoVSuqod1XRFg8f828tWAjjcbaGQTFfRVf5PKaP42vSCRkxaTKcDxM2VfNeN5",
  "key27": "2xmxACUvR5XcJkSuDaX6cup15JdB1qLbDieFhrHbEwCyKBawQxuHeWujHYLEgB9DZpREB5W1a2LXaxdqxioLBCaw",
  "key28": "zaQJtotLdeBfkjJ7w21JiUrPC8ybqxbpYcnK2MJ9iyeNgqJyiyi5ybBV135vZRLue3a7d83TGgoK88WEi5oWLa5",
  "key29": "2NW7hoiaRqzQfm9AjwjEEc8HgjjSS8FGAFhwRrJHDk4A7vqggYjHyAYqvbaD9UFhoomhTzLRMbDoB3UkTFNTUdLQ",
  "key30": "39GcycXfkqjRMpz5WVUY1saTaf44ajCL8bEL8PuooKB8c33tzxySad5r2Reb3yt1kMwbwFp11wMs1BvA5icr3wum",
  "key31": "2eJCweWaryuyEBKawwF3MUJK7PsrHZ7CrZ4yHXhsxWhh9i4xVTkxfuhcxFXaGS5ZFbeNiy9pVnePKoxHqaDhNutv",
  "key32": "4HyHqkhSZTbnxhx4Lx2B3iUb5hxFWejuAnaKTyejRDUtWQn28xmxyKtmyZXB3qXueQ9nRQyRuEtUNUac9zUXRpk9",
  "key33": "4ppxdWnTVqH2feLigWiLoQBmcVTTEe7eYmELXxeRAuhuryc6osy87zFktZLDZst8BSyWbk4mfFtrnC8D1EA9y7HH",
  "key34": "nmw43QZXEcsQKZUP5PD5rzZkGNS426YYXVrHKgpcD3SBKaxUXiQmWohSJWYeHSZWKQT6wFu8LnzJ5Jc8kGyynjw",
  "key35": "4BGu48wYfqv7ja8UEaxS9q1QfPWkJSM6itoYHvoFzTqx8jXLfTmMqQWnJqpQUsd375XQHCS1PCg6iPJmV78xjds",
  "key36": "4ZSqQh75MYgiJMutaongduJJwAdsFPsreaaTTVpJCeBGtRAUnWG3hBr69eUQf31ZQRjQQYJR7DnmuuqoaABUAkGM",
  "key37": "LkeBqeCuVtFkiP2EUpemeY7wN3zT2EAS4nUtvC8gBwg3LYqP7wdvq3diErvuJgFeT4qssYg56juEvkAvw5TY5ew"
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
