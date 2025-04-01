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
    "4Rc4xoMkXHdRENyoYBrzZaYZARWqhfF6gqFkrVztNjUsF8f8Q8g83TU9kNjogZgCD8rBFP8p5zxQfpdjDEifEX2H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f8aUaNZv26ho5SZoDapxuhqZqSwndoWv9iot1XMAek2K6KVnHJHKVpkUfZDCFQ9TQfH5YXpybu6a7nTUYfkWiw2",
  "key1": "3wSKHvjve7JRWDA5agUE7Zap1NcUqCicjZtTQWqhUWcsoubNGZujzrTHb8VMN6TAm44DLCkjPgyazzXuN3aQKz8G",
  "key2": "42YY1pVc1wxsTqxU7vRpY6YJurGj9wvaNmmP1SA6kq4x9aTmLpudiqXWVZv23QgxM6wiKGWQCMTyePAjydUxFaxQ",
  "key3": "5Fhc7QxJJn9uDsi827iXgAFo7VfSKtEY3k4KRVXAYciraK76TRiDwrYB3GgJdZFYgbDkEzWVbr8LcagsCdsajHde",
  "key4": "2au887YPp2FqfinHCeZRZEBvkoSDvjeT6gGEGP7tQ9m3dpuRsybCDjesPuaPrtCQcB2ozg4bbczgY1ETAmoYoAMP",
  "key5": "2K3VKhi3eZgM6xmYuHNo1HHk9q6KzoHWsRyo6KXdtWyD3pjwBMhVSHmUBMCBdb49yuwiPPUiXErjGU1kGfGu1tCb",
  "key6": "4Hy7DcyBaXe4Ajy5AHmRrc8AujxnK8yEsY6ih9MCugUbzaL9GXYAYQQk1BtTkso8anegGhpq9ysVjX6biNk2jtQ7",
  "key7": "2PwhYQSVk71H9hSpsq5hUKFVC958L9STXhuc1zihz9dQc8pWHBkQFcbv8n91cp5PpyyhT1ac82CYHQuYdPrVW6Xr",
  "key8": "5GbRh9WHjF127TgiQWXzWVNij6LqQJn4NHQpzmQx6uYk5tPGAZTZ2Gqs7mcSLgEWTxwqh67SYR8BHw7YwSyquQmb",
  "key9": "21iucGUSHr3YLbBiRGjDAKCaDmA3C4frYoZTvP9T1sQrXUfdfG2xwHJzAK4AgmN3wyUbVSyLHWBGCe83rjbHs9LD",
  "key10": "2ugNqXZguNhvauTpsUhBGVg72zUNvREuoHZsjnZRSPvVZVko1xDSxhRDmycEtprPrKgRnYRxS5x65iU2LZbkzQRp",
  "key11": "RHDKjA98qKc4BeBsNZeqwDEwSKnjHMqHmKx4E4tCrnwWw2zfPg7e7RVu5beDcN7XjDFDqMkCFoqx8L6CmBGWNfd",
  "key12": "2YxYsQmxdMnmMCCRVJeJuTx9ByApyHpYdbHBzKBZ5NeSqpWbbj5H8YL5KaFTAzqcKnNoFZxdwn4v2FS7JHxTXq5p",
  "key13": "4sDjubiGxjbBPwDSPwRqre7grfmsVyxwffP6YFqZ4J2R8xrcoXfDPjAaf2yz7dVQ9eeMgVwEXpUjnYzT9n8wSfS3",
  "key14": "66DdXiSauDsJt3DZ4sEVVjhYimFuEMWq6VJ8Ys7d8qqonWyjh3gnzwc6aaBaNas1D8ciSZJuJu5BEG3zbSMap5zp",
  "key15": "5nnQvo7bP5NhTi3YSVNxUMKXNKcfbaevoDZ8gjpA1ypAJkh9GvNdNaUNx5CXCK3PMJskePyazqjnfR8nMoqBipKf",
  "key16": "5r3VPAFX7y6BeopyxveJsmkNXd4Rr76ByXzHGzE5Ux1zdJgRwHacBsCNBguEnmMgQPNhh8sTifvy6AsAiSyRjXgW",
  "key17": "BGD3fqPqTp9gkEcM9FhkKdweKX7VBN6QnPBBk2hLhtSJfZ6t6ibvMiUDJrmmde6anwriJtKWEdqTJhpqmMa2JbD",
  "key18": "5fJbQofiSmUAhm8Xgpeqc8PqJmiCxYhyUBtwoQLCoJKU69aVXZEh2wVgvhxhGgwZWAYSrKiwBAfNtpjc5vvY5SCR",
  "key19": "2MFyV2qsyQYQGGcTHPykvrYT4NA39YGBbzD7rC5zmUmsRuADKgUdd8gVAJx5byiMnf6M9qgUXea6aDF66BVjS6k2",
  "key20": "2miuAYTu7SJ7UCzyjS2zd7H2bkkW5tbqowL8Bcna5mfTjuHNhp9nSnUW63KrDULkT5ppJvdc3LPv4Y4qKpW7SPkB",
  "key21": "5yfVKyv1ZNQ917izoXWGDaCo5UWC17kRmE4Qjdns6o9fxaUmPaXbKCT4ivPMopFkKrPiABPrD8SK5aUQW7GHBkws",
  "key22": "3fXn5L1oY96d6XMbi3PmD8mfswFXKWPW3eyk1PAKGHLuqacMJULSG5UuqTC3dJc6hu5MYTR7EFYKEiiCyHYivf2H",
  "key23": "3YN1hBv4hN3YWhrGLf1mnNahDWa7gmNesBsnFzJdZoHqPh3AphinUnNfP7Ho268pPdTqQj5CFrP4jELZspbbswN",
  "key24": "5V1UHqPAYdhen5swE8t7WxvvtGuqrqwDqhhHc1HJe3nPX1kfHvT3v8zvwMhEcieG3FxBS6i88VpsxeTaSkeYmR5x",
  "key25": "2gdEQMa99JCsDLx9uVp696wikfY1EpURLeJEQjaEAzbwNCy2yZFz3ERhkmUScP5YEyTY7vNEqLcKxnSpFPQAD6Fc",
  "key26": "p4WnNcNzKrBdw1R84syQdMVXyyCfQre2ipfMkFg7ZQfgnRnQo3miugGuYkWFPZ7znH4ySJYf7fRtuLhAZTSEqx8",
  "key27": "5ga2xuLwULtpVq9tAwvvveQdzd9keuDexNE9w9HzvaTYe7bnDesYuiKhqh5ERBdHhsTWuEXy3y9eju1vQ62u56of",
  "key28": "3156MXUGMXWEa1b3ehzXj8JXvp9rGBitKA4Ks9SmU4rYypU46HRzdPdP5pEoYudUYAX7B3L1QfvBN1tbVCYTU1kN",
  "key29": "3rxWAxLyrwAQSHXhoUZS2r48jmLtx1k7P1weWn8jkSxyBKFmoxySxsXijt9u9s1kuLyE4voBidhkSdr3XA4RF1tV",
  "key30": "4EXPLaiZ4sYXzQU8pCFUfrLL4tEAjPFaY86UhLW6AW9GbPh76Ug5K2Nv1LQEEmWzLPpdPBwg3q3NUu8mD974LLor"
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
