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
    "5iTac1rexUpQrUrJ62JhvrWKoDz7rjiXE9262bMksKxe7RpkRsLzQToCFynHaEJM3ithRUkCNKPxo4ABfBJ3kfE1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zv7BNvT5Dr3YoJMuqr8tZvniJvoRuRFa3d9ej1m6qpnCG7ajvjrUyG2mQHVHnkZfbhXAqCBE3jk9y4XLGya7NEG",
  "key1": "5eQYCRiY66L66a5P1aZf7GQ2RNFXmUtsuJgEs6bLnogE3hdMEQchmT69wxPwTUPXMjd4VqCjk5DxyGZZWSrsuiH7",
  "key2": "5p84ybqKj6VJ8ZgU1AQEeF7874RxsgWzVYqpAZc1qZaP5gQtxGy4n4DnGMHaCCgEzX9hvv6VK4VtFMRekCM1sMe9",
  "key3": "56Bni2FMwmBfYib9HFUyLvAfRK91jXJwgnewjDDjEDjQh1ej5RtvtjFh2reHz1gwEYBN2RoHdfEsgbGjGo5ZiB7r",
  "key4": "3zLZLyvCBbCzXGzfvbR3ZWMqLeGEfh7sh1ZrXow2E9HcTYdHUfEbu9Q1CU3SYw9vnpYjwTRYGKCqn3Ui1g835arj",
  "key5": "RWws6u9yR7R4g1T158MQAxkwMarrKyRC8j99dwG9zJwKrzW3YAoL2NnvKNqgEyQaF232uC9qAMsVjD9QUnWn8ZX",
  "key6": "2sYiuTseC5zd59xjJPu7AADGKfNiVvgr9hPL2det67cq2KUpFwyay1mHuyphYeH58P8ZAbm6N5WSZhWQ1AkU2K8f",
  "key7": "2JRz2zF3nWFp9D6MmxusTxQqguZrv5M16iNUQiKZ597zXBjLfL2xTgDDMzjLGFa3R49tVg2N3xvT2A9GUvufBnRU",
  "key8": "5r8XBLbs6FokfQB4jsJ4587csuUxbaCB31wsCtxkYdzM9onf3Br3WPCj945drM3iTHHjro8ypHhQbbU1ZBtdR2KP",
  "key9": "4EcxxtWWcdvSsswMPhhtF8rj24ayapEzTCsB2gzLVYAzxdjDY3SrYk48xqEcdi4R7KpJB3mus4Zc4C6fZDFFwg7",
  "key10": "421rH5p5zwgGFbTcBtEG7dooC563UqvwqznY6DiYYWrsPikV5XFdoLaBJCgKThTDEKU65y5s4HWVzWCbJ74ipo5A",
  "key11": "22Cr7yTGhUBgV6FrGFcz2M1tPN81d7myTjiG8sYLf77FtZs7BZxt2ycQYcra9jXTCBWVCwAYpDAWAsFfHf3yMfQB",
  "key12": "5ifm4vZsL7bixT3rFtYMGgbtzsn26TksjS9tXZrC1Ai5RJDCUHVgYio3CAQC64LJukJDHbkbZyY282mXc6YCAxVE",
  "key13": "4MSRPNmUKfdJBvEPftSxP4mUNLUBkdzkBY5wndZ8GXpsgG7rC4HAn64J4okVifYeZVuTvvbH9jg1dP1vLSkwd3m",
  "key14": "388fimNwpBUQ9CtdfekSBKeiH3voYk5Y6hHBkpkfnSaaXKfAAnSF1jwg8fsSYMfhE4H2BGARdayhyJ9RYTxZRTU",
  "key15": "tiP2idzWwCNM9AkRbijJDDvesfBrXcNvGsjScFYv9YoV4EEoD7SjSa5RDYeG9UicwCWf56WvQP53qdeJQLD3ktX",
  "key16": "3WSh4tHDQFwXpqv2WuHzq9JD6yZV9y5zRWAiSpTrQUnGeziJMw9yG9JaaySvDLnWpxv9qzd2oTz9DkUPgjbekVJu",
  "key17": "3YtVUU8UUcZef7qkEtQCmcujYaJtJ18tWBLW5Y7km6mHeMXYFGvz7hpvDZ6bFhaSkNyvrZQUEtVtguoQzBsTnNxV",
  "key18": "57vAomLGK6jJhaDmWg33wBVBkHSbVXZRQAJvb5Njc4HdT9ScNbwE7xLqsNWXEj9A5n17bvwSzPZ5VW18aNVv7AE6",
  "key19": "2b2qLqynnJsh6XjjAyUdNbu7tdLsJCAKB7Aq7SJPDRbeiZhriR6ch8o2EHRCrAWivwoNDjQerEky1iLz7H7UjZRW",
  "key20": "5cFvhoXxNxa7uww9x3XLwFTDn1MtBrB2K3mkze5oGWCQ9TcS1E9aTvT8RZXi1qJTq6pm9qdzPtsNBoKsUZ8kr1FB",
  "key21": "4kdWSWioRuKLURPQPw6Kt56TdN77daSwKveWkXj7z6j78pAtMJRp4HfWYGqdC9sYBDwoLhmSiyS69fFCLxNscrZ",
  "key22": "3iR7UGfdxev7XTNdXMaa5DnVRypBqKrmccDErvgUyJ2wEQGZhTYqCXApe9M9Ebhr9ZryJLcm3FJNAugLkJdyDjHm",
  "key23": "3SGdZG1VBGzPUbMYqmFj5zoH8hbmsyERM7MgbT1nzfr68SyQzCxoNoo7dVstCLRqmvm4tUuEFVRJfezsHG7eD1V6",
  "key24": "2cJVLZinjAkLoLEWRwQrUvxCAbG6orWgETf5KWVpHhcNxWSq65JDgtVzMjPBWw6oiqN9LP2MpmiHQCWZKm83RAmj",
  "key25": "tcWTZo5BTCd7VXa42nkiHxs2Y8UEWswK5NWFc4xfd66XgSgzQC6NBXPf9m7m639U2PSSUi35Am2BPShd589SyFv",
  "key26": "4yf2N1ZMRrWk4oYirDFwLVaBmisY2TVZbZq3JP3DMz7X5YFkHrhbpJsL8zDKejuQm9ateSaamgHEXGHKDNt65PXr",
  "key27": "2yunvb9Hyycbcm8i4AA2j4rEFkc91EeWCg8xYsUPrrQtEtHQ7mv1hEVC5NK9DuddKYdePMQqHUJ2ThtNvbhKc5s6",
  "key28": "51ARrRbPiS54TncedRm5aG9iFhCV3wXWPNEqUZ1envmxt1K8JQNUBRzxsXTzny6sD6pXgB3LqdETandwPGVpMdzP",
  "key29": "4sXffmZ6GaiyaYNLKCEjtsk6MDmNFuH8H4vam6UpuSfWfoKAwFmVaZAbsrQWynkcGM9nPQ2J5ED2RzaNkrq6Yubf",
  "key30": "22evz8waiM3eoMo4eM2YZmgbqHRsDLrzdMBor1Ltp3agianeMaKwGkLDFiqxUGXAZ3ptBfFmjPq8hLZ7WsnVT2sf",
  "key31": "52FtXMChAyFe8ZTBz1P3u3q36eg48FfUcgFajcmxsdws2mY5Ra4AbRJcubuGXTxDGXNZ7VwsYTS9sW83BTkR31Bm",
  "key32": "4VaWE1wM9dWTR4CTi9B9Te25UxkLNRbWdnEXmn218SLAigYiZ9iJr5JcDit1bCXNNjiL3Wecx3wSo9836b8dLn4X",
  "key33": "25yepTchspdJquWXTMzJNmwPiHNEEaT2e3TfgjVMMw7eHqkqaMU9aM2LLGuFejchY3EnrWs6CnEYdNsT78BxQb6G",
  "key34": "4CqdrFQAhwvifZhfXAjWyWcwe14uwhoXXUNf7WX3kQRd93EjChNczFdmg3rBL2Hyh2CrEoZqc7ByTS6TcZWFd2Si",
  "key35": "2f44bn18h3Kf1dZfbodXWu9wzuqe8j4MiUEPwXULAjgXriuJDG4oJ3ieKixSVz77FbKy3EgG5BmufzWYZGcbd7iP",
  "key36": "YBVnQEkJGX1HtszXTXP9N2q6iS2aqzPpmGdDoeHy4iki9NWrdqgJ1dzXMMGjEWuoGHVeZ1Z8qKtUxWdReaoYck5",
  "key37": "2KnT2NKQdiwZTnknzojsFxmg3a3uGsCLSjiBL1acASjPDykX4R2YBiGdAoLfd98S74Dbe2xhjSj3Vo4cvwk3XsRx",
  "key38": "zsdNMAh6qPPbP4nQzbjSkYFkEC5cRfsGh2y5fAd4rAPhQfxm9CCTdbBRKEBTbhGwQoyZkScrPSrsE5ytvJK76iU",
  "key39": "351HCZc9zHtueCkYJiSM4qGXr5ZoEzVAFeVHr5LAACXG6NkXmiCCnKHi6YqSQtmgWxZh8Baj1wubXQ4BSQtMPzze",
  "key40": "4rtz8G38R2xD7zZ1TJj2wV72GJDBKVwnCtccVDRUC8czwqe3kaCoBtBf54PrY2rxzPSFEe9BRPRBmj1ufhxcxXPk",
  "key41": "5w7Hg4zK7tL9DXeqPmJ5rj5bYQq6GsknyYMNgUTnb3hUPo71e7R5RsPM9LvWJPGtULuQoqAk8g92brKJheZaH3iU",
  "key42": "39phGW6EYmTgR1Ghw1LKBWzSLtVAKMwS1waZfhHRLPSYy3qscDbVshToqxjbBA9KbZ2eXmcMy8szYdomrNYSZE31",
  "key43": "4BXMX7SXjraNweZ5tcfwo4pMtPUfjexLWBJP5AvpsuWA4svf2wgXspMaHCbx3YF4nSL1eQQrTPaVPrbpfx4KgGCf",
  "key44": "5RZ8CwmhLxfHaMnUFRCWs63rBSJqJ1C1gZj98QS8UUi8p5m3bG8oLhWjv6jSChWVZ1iZCTr9q9DVddCLUtcgBGTa",
  "key45": "4mrpc3vq7sFSzdGwgc8tn42E69icL3dGEAqENPTb1EyHh1KRACcXWu965E6cPhaw23xqrgYz8mpMBHKfVHsZ7kn1"
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
