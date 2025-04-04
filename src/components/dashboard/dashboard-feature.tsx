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
    "3CNRZxspLrJv8DYZAD3hKMwLiZeDcBd6hdjbLntF8fN1sskfaRShRGA4TW8QuXSTkrofyzuULQJ3qNq4Y78HrJAH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FXKfobxbc1DURYyBzgDLwifGgRJG54EvadSsh7WCZJSDdE3bmvC44oWETG7NxuQrKwvJWmCYQs7j9JuyYgU7UAv",
  "key1": "KpJWznp1hoWCVcGAgfnpGLxYqvQjU2N7aAWMPGXniLKvG37nhvXmXGZWnnp734kRCREbAqW4Mcqi23kqfCm6UPS",
  "key2": "2jsZLjNXsCbmdNgNkCecvXg7fPiA524BM8o7dBEabQ7VW1irdJEk9dp7USsS7Kmr1S3JhNTjwqDxrmrSk1Cz4dn2",
  "key3": "4G3YhEzs6VUtGeFEDLtab6nv2svrSKXYtDCNPSULDY92CfiUu6WGMivtkzGMZ7Yd9by3PngxTejiAb6AzRxsxESc",
  "key4": "2bcDURnjuPsXLEumVZoYtmLaUaB6zGVJ1Yud7ce7usjZ1hMPwPNxkoEXGSYkmtTFupDwe9v3tDjQM7meEBon8TnQ",
  "key5": "39wswp63HG6q1PMws7qXd1fcK2QWx26AsCNYafSxidPg9Qf6ZbxG4LKVnVW1bZ24wsZT35F96VF6eZQRmMBPc4fo",
  "key6": "4W2SExenZBvWKtkfrofVf21eynv2uYiu4C1g5SCGEGH8g3xYtD3RCHzybs6basSWoivzwMB9pYfyNNEehKaMW8jN",
  "key7": "5N4KDPWJXsYmcz1f5SjYPMorYTCcnW84XUjpq5g61ZqaKfZtvA2YjQ9k1t54L7aA981Mm23sgZV6BPQgoaF34CEr",
  "key8": "5CDu35wje7UewkYYS5DjsrPahz7N4NvRyuwX5dJySHLv7rgmUTEYNoLbMkaPxp6yuqvB9KCjsNGGKndtWw8QU8y1",
  "key9": "2uGcp4QbBBngh5aeEVa4vxQmQto2c1cZRLGJzfHEnAWTfr6cpPbQrMFc45sV5jrD3MZsmKG7cZxyDgnt1aaNd4h",
  "key10": "2i4Yt8peTjF2eeUjHTdXz6zcF52VLKfL6hJUdApcVr9j4J5cpawTx3YyYVV44N2AHmGmDGqtLZ9pgKRZaPcFmHs5",
  "key11": "5wQkRezD924N9S69TVkisDoDWtEFUxdjtFDeMP5uQ2RqBUeU3eMwHWai27egVpWCG8mBbvVTjFL5oRy1pJTVVxFc",
  "key12": "5b66iG6HZBdkpf7GMegG6DTTkzDHLaGGhHLk2odM7srpB86ehLh4YrB5ZwP5tJscdJkqWoCnL3KeS2gdLa66cH8P",
  "key13": "4XY9RgkP4jL8uX6NeLHmxfQ7j5oK62ZXYAQZaL27N3kGC68A64sxgLxdQFepzJGyqTcNijqTZwd4GrJdyirYXmjv",
  "key14": "ns7WGGiauDSFFLah9X33JVZ71YyyKRfxK9j496jKtJEL4GkqWRgpnFU721aXbhsxKvdGCr6EkFPcf1PkLyJFrty",
  "key15": "4PEi9GWKo2irWna2ABemqwGQzPGN78oQb5YsSZ7PCbeTbraskjeMki9KtvHfwwkLA4ckKb8NFbVwDmZVgkifwucU",
  "key16": "4imB7yPBujomQT7UPJUYM36pwmfsujArTB7Cda5cuu9urxL9HoaM78N1t9E5eYseHGdtCdMJg5a9FEW3J6zRc7Ac",
  "key17": "2Ff6F6JuQ2VsTsL1YvPeUbCoZLAWJqibPQFFiNQUVh4hM6EEwwZXy8pXmmgJKEfLND7FdL43tVZivzBZsN1d7LTr",
  "key18": "52h9Rc1hjDaEhWpUz3YoK3vMjensGF6vz7nkqbbR8KgSEmQw6htMbiz7q7whxTdaMDLY3USGgGVgQQLYKrGU5FeW",
  "key19": "GhhnEfjQ6rTDeuKgzNLsMWjEhfequyR2kQLzRqUCZYZ2gXoCuhneJrqyFpdVqrojUBhuUDEWWFoostXx31Dh11z",
  "key20": "eJrvV1eQtsRX9S1JEXfk1g1Nc5pK6oTEtUnRnD8H7MQDASejUTfBs18K289U6JV9wykZsYzs9XuSALwiK4aTNDp",
  "key21": "353y31jXNwTQy89tDz3cxvVRdjh1Aty28ZDNdPYGsfQ7HyVrLvdjdPQP4Hw3NVdkXXop5tFieBygGVEXTSrBrAkc",
  "key22": "3KPsaJrbqKMTeLkK2jhuCnzgto7K9hxoQ6D8BUddaXrDh9rnJhzZk6f83dcZRivTYHCX12ukGocuygo7o8b6pFXj",
  "key23": "2a9L1tdhx4uE4Yb6RXtFNshLSefS21tAn8CVfF9C9398tU6HskDtkQGXYHGjUDhgY2WDBqRJAh9BmcHFxgEQQ67G",
  "key24": "5j7w36e9366AYYaDbsBrZiEtyxD3ymbr9J6vsrFnGyS19LQQoVT45NmiC7L4PfWznUcLtMR4zEN4CcoJ2NVS5SJZ",
  "key25": "62yMyEQn6LqCsC2VKEondP9cUjWMYBzsBASQ2SzHNnBkZnkbP6jc7mJGCHo8c3PfyaVNpcqBTDosCGjM22PY8cuc",
  "key26": "3W9bV5qKvYMNyz4ZJguopduTfc3i6X3PdjnVRQkieeVv1FaaQ7kPRPvW3SJ9NqUxDawodc9WXASvC2xM84CQxQM2",
  "key27": "5AJkWxWS4T7sccomg1j1rkt2Wfepq6JHu8ui33xxCCnipbyKQgetHeAaoc3hk1xuMwFCeao229Au6WpmQgyAbd3s",
  "key28": "8axkrLHSeG37E83zwbejx94ZzMHEa9HPqV7HfyZeLB46wvYtipHyHgxZngJGVmKpnzMcF5N5H9URvGgJWQmCiYp",
  "key29": "4Pu4tQRKBjA9quXB9ju1Ttdgkf7KEzPX5S4nC1RmBYQ725k7XGQwyTsR1hdNhhuJHdpyqYU1r5hkfdiHhMs6E3Lx",
  "key30": "bP3eRwZRtTXpGNrAD6A5GxEU75T3R58jMS6djNweqrR1tTtsQz7dwWsJ8kxe2T5j7uVYtvt27UyP33PzS4mJgvS",
  "key31": "3fBzaMEFiY5YGNbpnMJP3WnTbDu9UcWSCCqBQEoPzNzVXTkikvn2GCJy5tj2XzErM8eaxeM3cEWjLXfUL1WFLqVB",
  "key32": "5L1VQYQJtscnqXNLDnQUP5v87MQ8N7b8umRMHcAg8fN1uBB9BsajRnpfeqGmJFZxcEK5uN7HonwqVxgZSPvy2zJZ",
  "key33": "4yS9fAok6rM36NXM89FAKVBqHtJZeyuc6KcCyyYSiDdeAuVperCjqKingrzdZKgEXXLfmq1Eke57JM7ivQCVXbnQ"
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
