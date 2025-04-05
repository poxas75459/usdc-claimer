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
    "3sG8BKMTF4pR7kbMnhsQo3sWf9B9KrHysEZDqufJXnEus9cdzkTg3Y5KbhiWXGL9FfPC5CJKE6xso9pQUH7r6gdT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GzToTBMjge6d2LCtfcUjXsyxsNNfBAQifrrBRbg359wAiGC8hvPQjdS4qmoxZgmozwN7rybqaqmc6ycrGg11GA7",
  "key1": "3FY8nn8PnELT7NwVE6pgA8ZuK5NT7LyFeJ3AHpBWxwWZkZTphN7sDmvnx3AUrrZgVcQJmmfU7PUAeCPA9R2xg38Z",
  "key2": "47jkB54E6QkA3T2nnLyKWAn1oKT3wGNecrbkTDDKJXEqo6oxjXPmMALgdfDLtqjsM4oxM4YcgeZF8fJLzqQ8JAP6",
  "key3": "i7WvRJEUiKpumZ6pbBtPjwvDj6iAKdtovVodZjoca9L856To5qs5rnGMK46DYaLGzPsDby9Z3Rs3UKq9odBEEDJ",
  "key4": "41qRMPSrFRhByqhuFRk74PFprCytjPKyfhZU8dLsBFFwZ8mFXgFmgPK1paXHset9yFiWNvSTeCZz5mqijHUAKSU1",
  "key5": "49o7nnVREzGkK2ydW5x1mcJFonN4EN5Wrdi6nFaRePXQMN1tTRhRBqrx5Wng3bxtfXPt9WkDNqKLUGmKzxWah7Hy",
  "key6": "36oE34FNDjgWkTp2Uu9CBYMX5tF3i4Eims6KMM4S8Q482S7wbyhqZMqeeHt3BTbHHxspthni5XRDSYWSt12kx6bF",
  "key7": "5cS9RfDeH3XVGnDey7htPpShYbcEuaxPpLtDa1PhfNe8JFXSdRNKcxejfPHkYyXbrkjfAfP8iqjP9ShctVFB3WCS",
  "key8": "5kjuDBoQpopT6BRiSunWQYf9C4cFjSz3ZBeZWo7pcSwebmFUiK5BAo65rrV9XkptUUBnAb6e53evBJAjQDiX4TAS",
  "key9": "dzjRh76AQzGqtbFPC6ntyK2knE3tKCVqzFPDbRabUSJxXpuijP16G24nmLxXNMfeuiUtrEAyHQASdpKeDuUSkDe",
  "key10": "xbERrPsfeWh3vr6GzTmxU7qFmy2mBtEKwQ1GKFE8kceHrTn3Bf4Qc6NyAKFertnej8bgyTcnwvWKQVjFNMBEpMQ",
  "key11": "2uuyHoUNgLavk7JzC8qPnEpjx9oi2ssrkC1RbCZhFnnE3pbpJCqB4VpKrCaaBKzAaFKzbumUUuMfMojm6yDnECr7",
  "key12": "5JzqcRrbCEvJDU7AjGMPzACgwhQDo8PYmG345vdRLpdk36Gif82PmCsTc42fgEiTwBjsjruWudNUhhRqNvJkXEwG",
  "key13": "3umLQAZGoD1r8JXkvwJ5foPmdhESWwSuiaBaTbAHqbsC2XZMqoUZpwhg5kGTCqwYmmBGopChEPj1Z38vaKjb7Yr",
  "key14": "5ta6bW8CqgDJ4BYT8fMuieZKLdqsLi4AeEKaR1XRMjBWxVenrMNjjKbnKjg8NnLM7DmXMDLMbXxz2HuyWNRwVdKo",
  "key15": "2a3BL4J5c2rQ9x7CLptU6ScfvSxxCXVSH2obNLm5KDGZsbtybijHSg5o7GrcbXjTAwtFsDyh6FatpuDhY2m8V9Xd",
  "key16": "mAhtGekzU4fkQ3xKLxfNo9S5Evj9kSrpHxPTQy6g1BaMFEKZPoncYBGjrW6JD7SWNpztS1qae51MShDNK8TnfuW",
  "key17": "26HW5Kgp1aCjK2Kfv1fa5sLtzrjEp6ixuuGQmhdB6s2qGhjPyBd6M8aFo2nf9QRoVUP5GRYJU1gqRGfHXRKzriNw",
  "key18": "2eYPAFZyfVyiz2ppX8RqwGg2o9znyra6VRevJqgJVE7qXoqH5bvCderGY2WmiW6DGkqpUo4yxaaR2LjPkwH9EQS5",
  "key19": "5Efrx3nFBUhjDk27TRp7RwY2barTs196YRLwi8tYhwJpedVjGcCV9q4eDHVKEpVXYfd46vSdSgP8Yq2RCT3GXxE5",
  "key20": "2biQqZDb7NXphJuKcwSHw3Z3d4TFB4ZqKc63v15veAR9cWJB85Q7wprFxX9Pw6QVgqyoxJ7xiEAu3QSE2mrfdj7G",
  "key21": "3aAjYJrW9vGiTdrJivqb4oywqDHMDVCgTVE6cyzwJscxg1YPTuaiL79Fpg7stXQSjg7JEk2eYW6s2JdzTsPxPJyK",
  "key22": "fVfTbNQppHsayUQcrHZxEpyJsu67aeNSZKZFRzbGVneDByQ67nmvs9NHkwoXoHQTSyxMrv7BUsPH8SKhiT5BXVU",
  "key23": "3Mka8HxoTM3wr28HW7ihq7NeiqsDtBBHrCkY4bR3kSPebdy73c1z8LpU9Jr3xbSo7Jxsix6iKsoSDs6qWWFQK59R",
  "key24": "4s4xTtC4hDyhCVGTS2sFumK7RpbmEPWcERp9MZiwyZTcPCNPWSPq1TAFUNNUbDXNTPR6UQdVE8wNditsQzsvrpSw",
  "key25": "PJW2XyJ7datSpjJtpvoCSF3akwizqi8c2uHPEcNk5jd9pU1FuC1sN4KYkxnobidKoxZFQs6t1ELiRKt9SfK5jNh",
  "key26": "31CKTaqv4bF4cVZWvcAXnctKCtXFW9CirN7wabDduCZbDQadeLCxuSZWe3Ce1DdbEYYCgz7QemzR8kyAwA5MW9fZ",
  "key27": "65Ttm25c2hFeUoVXVAmiiDG9voZ5HSCdfVwVexrHhubuQJtTxdG7A3iRezJpxoPetu3HYnpbDQgL6ZiUF6ceH47C",
  "key28": "4iWLdmmRhppF3wmwtynMeAoXGoMZ3qYUS3mVikCYYVr3gmTgxSJXVitzHRHvhzm6g3xRVwB2zjfppwCjJvKgoUox",
  "key29": "5wF4rHWNsbB52w4Q5fSW1ZaY1aAmYBdNJeoDwWG8oAtpBEcU8JfTYc4cjzDyriGLFA9Gxat7o4jbaAoS2KGKDRK2",
  "key30": "2LedQ68vh9JjYoJjmpJHShiifHEFEfNDAnZfzSJS5ECEGRfg4TLdpdTkxnfdsY3E4c1BcSjzaYMKKxaWpKKLZwxH",
  "key31": "63r6m9Byk71sEdjgZVLn7ypQYYFZC39Zxs3qez3KpLyrP7owWCgYdw8acHTd6tVFaXHRp4AWjCCdDSftnLG1BzRV",
  "key32": "2rvvuqMdm9TWLf6xomx6Nvj3dwwGdPonRrM1jRnEgTjL4488RmrYdUCk4tBdoc26AJ6Szn5RPh91U9pNBYZ6L5Kn",
  "key33": "25aavfDo6uFaRRzgccPHB8akpFRtjTU52eoXTqFA4wpBZiTxtgVMrpvJn8yEQDES8jUxa1VV5L3qaJDWfdy7JCfz",
  "key34": "L5h98Y3uhq5eUSMdtoeModwsmGxHUKsNu9qkUoCA94WSkK5eWaE9zLbzbk6izCZJUhAofzJJWSerHi1AAYx2NiE",
  "key35": "W1VDY3qaYbpPvMLazm7f9ipKfC3JAXsg82s9Dnr4wXVbpCcqBpmuY12NtgU7EWHYt1frHo7owDKqY3a3niK6Mcq",
  "key36": "47CdrSdRTpqywjhLaAjFLJLbZswyYDe8DCM199ahMgJCDyX3GzMXjrzZUm2zjDD7RGKM8VWDKCHEXQLdyigV7mGW",
  "key37": "cwhTrBHpqhbjZES2tJErKmY7tRr2T22Yn8BuZaPFzczzFfGetTVYGSSHAct6tBQ9uy8sv3V3g4SsvenBtgU7jL1",
  "key38": "pXfrz7K6S5rAbKCGKYuXMCtxADJFz9ocinxbmpc9TabDksd4GnaeyuzE4mR6cHpdB9whktpQWJXNdEiCiEwfxNp"
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
