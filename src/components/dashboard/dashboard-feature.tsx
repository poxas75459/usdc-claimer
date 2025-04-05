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
    "Zo8sW9N72wW34QSo4tY23PZnpW3kJXPFqxtHng2GLZpYQVsk8BwnAtB3AgLovcxktLMokMoreE3eAike1ardBii"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CpL4mnUsewf984bd2oa5dGRGbQsgbY1bks39dVgukdBJMsUjFSj3hBjRpM81scraRKDjCXaqj1UR88eAgg9SVeg",
  "key1": "fc3DxTuHxSEhjXwHZcUgqdiH5Sz431cFgTZkEQyGbM7YtX6RSh9QAWpbxxw27EQSWbP2EifLti3hFBP6DubkbZX",
  "key2": "ZcB3a9Xycj9Kuv7aFBcQSPhSf9EHWEYHSs8D3nHMdi93fb4bAQfeT7gpgmSY3FW1JpEgW1EherwQCABF4TZZpR4",
  "key3": "Dcyx1aXthcwW7sCih1zhgigRrVwrzeP9UQ6JWVWxg9heE3sZZ46TbnHDqzxgzPCYuXgn8fTRswubKkQD2UKWM6W",
  "key4": "22xN9R4PrYK2HZ2QeBWv5weQAb3pgn98LAamXmjU5D3U6XweH9qXLx1RLLw29uTpLiieT9sGM29n2bH8fDpY6GUN",
  "key5": "5kE5tYtpq7m5e72ammhafe21erYxyD3AKLnicRQ9mAvHuzvtW5fDu3XoH2ywKMod2zbcEQ53CHCshLi6wwKsAAaK",
  "key6": "51uWKssP5ZZwupFjQDBXFiJv67SnsyAKcPfJDhfUHGbgbByzw5RaQoZCNL1VfZvi2y7nm1mdmtWG7kZUxG3e3uNt",
  "key7": "2SoyU3YjBh6Pt5vz4iYoKBBKGi5L8i81vm9qZCKmiWbBV2XfBUETzWwTEBgjGfYia8h8X4hZvyfgpRn4Dim71e5Q",
  "key8": "3cdcSGtJ2dBMA2uL5AySDGL3mWNGT2kv8gkJotepxuy9AidNyJM6rP2jMw47QEryarcLnzxFABRYPBPnZpNjugX3",
  "key9": "4fgZfW3xSJDcHTXNBM6RhPJsTiPaKo9HApQwm2MiZQM3ccx7KWQqN31tVNwtGvNtTZqUK8XAWszkcS6MFfXcERTU",
  "key10": "27nSTHZAohy2dN2qLdyFvS5Xf9MFS9sUNpriVKVBmketuiB8L1kQ2oXtP5Hq29iL1tgceqmZ5YXqDffLRScBADWJ",
  "key11": "5m4tujrAqu1W7BFhtUofefRiQGGZHkkGcY1Co5tLt2dtyswPRpAvT8b31nvdQ2gMp73UnXdzC8VkLKdFvSKjSZ4t",
  "key12": "47nESf9z7pEzMDTiQ5F8NGKyU6tuYoWuHLfUpcPyDMFsG5cjFnYJ4tWSa7uSUUXpYwFVj7dYWuxdTAm7HbFkQoo8",
  "key13": "2RfgM2KKpxBNRNHPEYFRS2qVcNjnwQKAc8aFfZ5jJfFP1bqRejcJd6XT1XnKGuCgpzxQmXjbyQpVdr3i6UvLCbQc",
  "key14": "2AYRdz9akLmZuDpBCGZDTk6642yXJuQQJRfN6gGAuczZ3cXXB9djnV1gGEJbh6rz9ygoV279ShkiS2YvKTd6BJA2",
  "key15": "5DULp4nzmyz6jo1w5EV6KkXpdUgmiySnQbKYoHDR7i2bhm1zEJCY1GkxGZUJVsxgYv8H2M6SNfTyfZMBBRzydo3y",
  "key16": "4q4Ltqtzg5Wd8yE74gQU3cYNLTCbWSXXf8eKmUtBt9o9dk8zS4RL6VcQH2TaB18KQ62fPtyPrN9ZKSCQefQqpq8m",
  "key17": "4Q7rGGLrEg6BxkiPgLoMSW2MhW1XDhQPA9RqqfkvHHkZH2sxa5RGbXBn9vTkvzCPA8TUAYK1qG8Wtm9SoF2r8t9k",
  "key18": "5z4vaauNzMKDwTHjsoB9BDV3xNozSTBLUKjyRSKBuViN5hsKe3Ug6xDryAJLSs1PqG2y9QBY5nwC3v4Ln3VmjdSt",
  "key19": "5b8jkhaDFEYorLhZ6iMz9cU6S32k5o7B6xgSDyqpRmWoyF2WKjYyWN9TBE1ET2MGvDYapX9r5dvGd6VmmnsvGcVu",
  "key20": "5Hq9iKpXEPaCjsDPsQ8ssEgnubxqQWxFNwTFm22YQZtVW9QEz9xxm327cYEDKuc2tEERjCZXqnqpppuCQjv4wVwX",
  "key21": "eTN2W7VSkYfzAZA7KX278h5zr8rpyF8vYy2Zbo3z9QQGSW9sz2aTCW5f2nHrumK42FZs3ngmBg8XG5kDkFFkson",
  "key22": "5msWG5tCdqdbvJXkL4mRWorvQyZjcSqeNLR28PTmVsxyw94c7i9eCeTgPsT5VfZZizhmDKRrFJqACEJoyHWRMq1h",
  "key23": "5drhhNdX4XxsLJMfwGQqpbaZEkp2KdXJLrrf7GDNHFLTsCSAavjfkF3ynsdXKaCAzgXuo5vhXcHzFxsDBTerXYLa",
  "key24": "5noyWs6hc86LHzZ3SvjghzyXqWcdsUsDg1oziGpMvM81pVJA7VARgYzVzKyfMnhEgCP2GtaphocT3Dm3gRdLzRvs",
  "key25": "4XeRi5dNi5zXpPfrAmxieyDNJF9dadQcunpDPYuBp3VyBHfF8Wn8kCfFpfxFjWiEKZiRGh4Ei3yPowej3F4ncXiS",
  "key26": "2eycZMWiDEzdisM6BaBxwQTjG2k9ces6BSnppYvz6fKz1B5N55V6gY7x1HFc6ALEDTMDFGLUr2ce5mMfUb5S9TwW",
  "key27": "3xJU9W7KsCXFanF3HpF91nkqUhPFw7uE2PWZF1QbmKz2b4WrzCS5ywagndK39J42ujMRiMJFJi9UngryQuH1wi8D",
  "key28": "2wP2NvrNf4hwyyNV8gQC8CBuEdPs5Eq9FHnd5Y7HqfxxzxXCYAZJzARvReKe3gwS1Dsb19fq7kjcUCq4MA662xCh",
  "key29": "5KkrP3thiyuMWyubyDGsqaH86oW6iZ78g4rRzkc4Xmzkp1xBvqRXTm97K7CKJzcwDPnwvA4S9V5v6uXneS56XMxb",
  "key30": "2LkuaA9QyfLG3Xcwate59TZL3yKBKfxhMMCGSNXw8jeB2hBPWghctakLSgZ7T5weNx8nJusVbJpiUuWWnuL818tT",
  "key31": "4oy5zKMJXFjuPz5jB7i62STRFii9PD7FTwFC5TYci8kp1z4fgUfrz8fm1nmuKBaK62EA3cCMnbvoQPryrjhCtihy",
  "key32": "5yviHpPcRZ13ttRYZFffJt3mWdXcWN47LfKzQj77qvBEwjDcGaJgJ8TMK2KGfJSNp2GcMsJ1YzduMNjDYXgYD8Co",
  "key33": "4M3y3d5vfHmEJaWUaT1sLv1DjKyDvHk6qktp3DpEHuLYELUoLa6NKKUsoGLspbxwnYaRxWmmvZm7LudDqD5GaZ8r",
  "key34": "5UBuZ3iWJE9qmQvGPghdtDVndQWLVB7RBiKm543pBTNMfGhgymuDR2mTodMARACd3eGhTRLBZZjsBBGyyboRMgNe",
  "key35": "YB2eVoJve2bmnGrzC6dqMW2dY1RMkV3mcs2HjAEVpBkMZav3QMmmuUo7V7AjfC9fE5fykwFVRim6Z5vGVQ5G3UP",
  "key36": "J2MVidCdSD3FgVYriuz9Xxa4Nrq7mmUMcLUCHBQaDoaaX9bqcT4RBkd8ztkHif3SMmLYaRauV1QvwBxQdv8Rrru",
  "key37": "3UynCwSoR1K4FmQrp2hVgJerujAJKwNK6TJPQquYqGegLDZCUryrC52tK6noxB1DRtqSgtN1Yby8ehRPbDoE7W4R",
  "key38": "4nXME3CDXJ4tnvBmeCHSjgoL3SXmgkU7rreaC4jgCZ159ukdwf51CgbncwraM1eQvc8wFBL4JDwpCjTCbbZEndCX",
  "key39": "2oNV85yQtgMHgxprfqj96N6voWtSekpm6X7evm1JkDdkW9qjA5dzJxsAemdmwYwfoZTaCNG8bgiMp3rb2tXPE3ho",
  "key40": "5NLmKLaAoPEw6poHDX9vaBLpJLPLDNW2H7cXzkhCgcZw5n9X4Dn9tiY74AhYBLARbs1CbEVgkFpiHq5im9uDaBiz",
  "key41": "3KAjGUfPJmuiwKcNm6AA5DoGa6C3sXtnBbGupzjekfZQjGtjyxv9VkH7HfcyZwdEFPuC2ba5QXhw134hsR27MrTi",
  "key42": "2GsZDDZz851onL3WMCZ28AuJzDSTurRNNDLjs8Gf5b23FFLQv7oEM2nrP5uPbPszLfSyGV5usP2cbA5dKsqz5W6M"
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
