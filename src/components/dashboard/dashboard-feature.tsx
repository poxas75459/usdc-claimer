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
    "EqjCTXYEG3fcBfqsasgU1hmn8CJF9AByqD1yAMZp78JiqyLDYGQSV6d61YorH21CLE3XmkoAaNWmwRJzn6PamDg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D5SyDJoHWZt3s9WDsvg4BG8v2ZxF98ZJEsgqJqpFAy7dmNbcCLVe2EEGEjNsLaZQt82PWmLtHKUww2PStD1PRgP",
  "key1": "4VoggS88FvxdBQm2ZTvCRab2YG9GmsdTX2EgY3CdVdV3ZGiQ3XLBDD1vVXMruWttcY6ozyTcyQKmgYnyxoiRm6Mg",
  "key2": "ZsxAhVZhw84ekD8pJaQhUsjngimJQ7dypWEWuuX6daXXDikKXZyQzop1USd1QurNeEwiwTp4KX16kkiGUAeTqZX",
  "key3": "27ic3fAUPoNcprLruPS7SFq5bUJspdRSvvr4t18pVWiFAKUHDY5ZktwD5cGAT6RhQd6Yr1sjiTmubqvWrNQ7ybZA",
  "key4": "22us6wL1JaK9bemrRkSaEZigojtcWabGUUsZmVA1xDQk1svyZ8n9tJC8rStKV4VFFWojSpPxUafArWyrntYPAT91",
  "key5": "ZApWSAkJ4JRdj9WdeAVvF2TTw34mLMaFvMi8TSnrZMPGfHNa1AUuAyXRVWMniHonX3qdeDZejjbhnUSHqLJoW9Y",
  "key6": "5GKVJ3cRi7kbr7DhVfi4bVmbvFzo6zDnjMBsFYfhLeJUw5k5PwCWYtyVa1x9XRyX2eabXWgo3oF7bAAuxmd2gNJA",
  "key7": "2US5vrXHjFkuoVxN2ZCkuTu2GTaXjJMJFGnnTBwAxPz2Aawe9LGtyxM8oN9W6WcnyDPzN1JzHGcWuwFmrovCWQBa",
  "key8": "2gkHChD2a6pr5CYCqV55GKMcwCYH74StjxqkkZEFZrV5Rh9CN4xAeJYQL7UcNKDAVpm9Lq3PZBgny3vje9VdEWpa",
  "key9": "5MX6ij3HMtwv4ZYnfPX8zbPvP3waKqTdWdkxsmxPAjdNssGTLupxEUgEQU9B5QTThWPFR2J6q8vW6epSYgjvE4ZT",
  "key10": "EuxL7YqE1B2dmdCy7E5twyEhSbfeikLrrhDhsoRQjke5KPGMaDFzbrrDDaWgYw2qzQtBrUGxtZMpnghtDzLA5Km",
  "key11": "2KNuuAXMpReTFUPaAFf5nCftAbtWYWLSQRDyiyY3enhENCCtFQfJ89DBYu4fdAgPNR9cZsNXgFpgDEWKTqMgNjka",
  "key12": "GHX87EHcF2VC1wr3rRh1DteW18pnZhfkkagWEQKwxV98HjjrsXXT5LDV17oKKYSn7zGuw7h5UxZAZnmUVUsFAaR",
  "key13": "4zpKjRi1kaiPnkivk1MGmWyAorAq3euf5EcjVD1RgAij5v8LZD8xEqRk59GJzcqPPPu8eQH7gif7PzkcL8G21RrP",
  "key14": "5pNV9ieZroSkoNakiMSJTdpxH4ox9qtJFie8GkkJ6bBnkyCZFpc6jF5CuUvLeTU7EuQSU4WWZ17Vndk2xzRCwexR",
  "key15": "5WLzQEJY26GM43uFugBmcveXkUssbAmzEZxwnruwynQYme59e2PCmcKkPSauYVhA53UVL9hLP9tiSzWcfXg542Nu",
  "key16": "52cdt2dYd8kcJGn5kBWw31zvXZzxx5gWsziAJM4rGNdvz4TXx6XpoPeZEx5iUF1a7MYjVXGQyHzoiDYL9ZxLhJty",
  "key17": "eC5JbYqzPHpsKRVEzX14MAe2szjsJwNWiCCfvSnNUA2ozxmwYWWyn9t5PkuRgbUj45M66oxDpKdkhCyivUTwNsy",
  "key18": "27zVPec9i3uc3QhiaXRCRCNECJ1egCukagnBf8r32PnqKP9Ggcww3CGAjCMUj6W4TQU8kyJxFw7urwU47n4WWoh3",
  "key19": "J7meNWihJLNwhqBuGRqjTs5YXKyqWoaUHMcSSviHdTiH6VjEoK97z76kte9a8RyjSLqXJWpBouxhFRv4yU3AZfT",
  "key20": "4QR511jUQ3E9K4d3JurzJ7jKe5DJVDuJpvdE1Zj3EsnrmergrffNwffV9A5WWAL9jV2sABxfzF68AiHRbCHypGPi",
  "key21": "2QMn7E23guuUbbLXCu5VxQp8bA58tHket6XmEpeBohATr6QTF5e9622fZmm3kgLjTvrhtDnnL79qakHdmiprgfnp",
  "key22": "3ik9aTxNGDytpzr52vgX6Gii5a3XC2ADQrZQfhbEopLg1aWfz6r9c89Laiq6WfsWthmqXkrLmr59NL1sW5tewXMy",
  "key23": "4mCi3oxi3Mfwk59ik8P6Jh911Rrp8tDKy3j6L1tVgfvojEAWziehJWZVNgAZBgoRc6PmJK34K8naQZbNnHTk7hk6",
  "key24": "2dQFc2tHTEyVUEqHtYkNCQSrnY2PSWiLXXNSuDjqZQeUWS72tBue8HGDMRb5eHDFCyxpqAVkLXw1oHksafRfrA8r",
  "key25": "3wngeWrfxJwkgR2Q5nhZjHYR7cyQyCKgDwcZp1JsKY5sfmTFLfaNBum77s2tc8UxNJXrxqVySzxXcj3FZ1S27F1C",
  "key26": "5W3AxHfQgsdTGcwhkats36CnxDC2oGPGyeQMYqEXKzN949CovG6g3UUCHQc8x9TTUzgYcKpTzX5kGxPymjagB6Xu",
  "key27": "3aEkjagWdN625bXjEvD56Taf7QFcmVKJvZGu7Y2gxnznLR5DZ8HRq1XiTnJuzzMGont18QvyJqYvFYdrBwUM9Q8n"
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
