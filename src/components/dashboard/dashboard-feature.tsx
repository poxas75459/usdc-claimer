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
    "3YAPxq22Pu3AJZhz9T9bSnZHrzJD7XF1ZonFqCUFavgY3MVJSEBhterfDYXV4KWacpP3bdPsNBkqjejTC6m7qdp2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61H4CqGKAcZEhwgyvLHHpBPjTw1uLGz7fNYJuW9EtDeeXKcWSdL4Be2kMUfxNG8WYeMHondWEx7FDYX8ruQ4rrmi",
  "key1": "ohZHeaDFtScB4RKDtxqyXkT5EhgiMuofayhXETg4sTPg74ofAmQ9W3XWdKcfZLdxvoGYQCSyekChSi28ZcnLBfL",
  "key2": "39jqA6DyuPpndEuw2CED5BZbE5gFtqyXDpyRrqFaeuqpDzkH5TDcvm6t5dzTt2LFHS9NjXCtdPD9uMt4CYttmYoe",
  "key3": "3bLknYrLT6oy6JG6tLrMuh566S8DrMoKtZwvWLnEoxGmZq9RH4va9YHVoyh7iAB5hjVazYUzbduTURdcY1BJwx6s",
  "key4": "4EZNhGF1MmRLh8qpDbDATZC9z3dt47hzAd7wUpE4KM1zYJ5d7vWRiGvyF25pm4S8spnkb96JaBmVdgi1tsBx27o1",
  "key5": "5gUcD8fpyYPxEvkX9qAx2YkUrYYEpGzA5qFcZY2aFsQMNYw9a2VJH8KH8DXT4icWqQRMZaa4NmKA33tUxSnqBFMe",
  "key6": "38LrUpDm1wQHW7LJGG6i1WsQM1YBxKZ4uzJp4YSqtUAKVTtRmWezzNwZTDTvGVhwRkVRLhEydxu8RGBmZcqPRk7P",
  "key7": "2YCz2j1o6vrHHKKuU7E2o1V4uBGNfiWdCwFBaQe2m3absQDLeQtufEbCMCmVj8wkqMA8Eom4F2Q5J4wRyyrHLqFV",
  "key8": "4QrEszGdGzFY7BkCmbmVvYrDcaRp15fwsKBDyNzdje6Y7XZo8n4FuRpcWpTVvBGCocFuWKtde1DDxq9VVP12jK6s",
  "key9": "5EMiJp1WRGK3mTpsdAQiWUuQrSEr3ZKptEjRSPfHYM9KJd1crZLXqjhL2GtsEVESo4jZJXbjP7PcXAbD6vX7QTw9",
  "key10": "3xEPDSSrYe2LZY48jDEyP5tLtbG6roq6HudQo7DSjGUJFGKUH4EfoukiHDBchSCPseEwrvZzggbWGwyoptfezU76",
  "key11": "4N37ZTvUfXTe6F6Vq6B8sHuyp3X43pPohjhPyXS4sqp1s2svYwGmm9LmEHPKQy89xSiaF8Zt9Pkpb4GofhcYeyPh",
  "key12": "3wRNYyXwxYyEFtYE7gJB9Fjm4mLEYaE5KGvfhRoB3LyPhaQxPVFtyzpuntFjvQ83bVYEFYzkGsdvQt5f7QaCExsr",
  "key13": "4n5JN2SzCBno4Az6g5ctJfrMtnVSDXPZgwuAb4poj3otEijPQYj4nRctzFRQArk4qexcaLFErS7abYKDWHPUdTPS",
  "key14": "47qJed2uzxJCJDaMPhXJGRrTWX84PJv8UJ6NgMvbg1QSSF7KjsokmAr9SfUaSuEdXF7N3Bhi1cLFDzjhgXhwE726",
  "key15": "2Nx6wF76pVdL4Rk1vPnS8Z8QRF929FJZ5N3JEJvHtYTwAwGPgicV863rKBHAaspuMYbMg43EmQd5mhDCrdv14qun",
  "key16": "BMDo5ZzKXykpRdeM8iyanoE3wGuoZTxoVsbYB7SwQhvSu3Nynfv8qCaaGC79ZGKTUiUHybnuUpKKCs3UA3HA2BQ",
  "key17": "57NJdcKVZ9baxbfayqwUstuqPk6MnKg1SztBGhk9YkJwW1GgnisHpTCbYJE6dEeWjCtY41SwXDWd8tjC1z7aD6Tb",
  "key18": "41aqYzcxV6rc9ZJoDMPqE921QXa61vNeCc21KTxrLPPn8fZgW7DTfm2LfXhAjbsgzVoQSSt7k7zmJtKJ3krpUBE4",
  "key19": "42Jp69QMEPpzN3UgFsUkYmAXQVkhpdFqcHBjGBuGpN3aUXH5ReuCb35NtrMygedznHkYuD2uqmDsjZRZzQJMDdos",
  "key20": "5SApkR54A6ZtnKHB75Eibjj3vsavXPgTtb1ZgunEcXGZ3hgGjhaZiZ96XJmyWnYooYAWgYnAdB9YJrpWB9Sqyb7p",
  "key21": "5Z78z88ySfdCU6uAovE4S18ofMKFpz4yB46NxJYKGMsu8SMxTo13Qyf5G4zLKjPE4X5aaQMprejjxXpmBcvUzuGr",
  "key22": "5EZinULHZzLB4YB4sLqDRq1MYAx9cMLbE6SHyvnPuTFny3eUMUeWSZit3FbaaHJ9rwUth1abwiBzFUQvfEbP6AcP",
  "key23": "2GWPBTPrqgfjiWfuZHbX3keBPANjdVZvnCuB4Ga6tQfxnzfqKArbQR9tx79tBhU89LbjJuZoEF4HWSYnxYUjW5SC",
  "key24": "354CFittxw5Gd23rRbxugNgq4vW3UsuRXLoQ6fbWGRQnCnTzad3x4QHxRV3VpUHZhLyWLRB7t8AebURKwVfh9Ad4",
  "key25": "3KYgy5t8YLR3Z5QubqezMr4aAbsEhdKE3c7tm74EgSFPwrWkPHttGz8orHbMtjYpbS4t771zUyjAEYr5ioie4DGU",
  "key26": "3547zjrzAqk4zsM1ZPbmzEC6Snts1tBtiAZjXdAU2VrfYzRCdcZaKkJEGHBKhZLZ9LrSHfU1Rf8icJd7SHz7Rmzx",
  "key27": "3vPHtkYUB7AP4iakRMuM6BsaY3e4LHNyZSFi64WqH9Rm1jcqhqbQ2bYVDUH5a8BALW3u8wqgfRyDGU2SpuC8c28N",
  "key28": "3yQHoUAE55FqJmJzrchQpSGbQzMUQYNX7p3inyRA526MANWnQVm4Yi12REswCSSQGy6NDNtfEECxbqaFHdqfivxw",
  "key29": "5uQ8nXhbbTm8J9ozE4Bit3rhr3w1kznxZHFepYpokafJRTgkW5CTV9fBSmXtDY69cSPHwvdQZkewDxoqVgLL79CX",
  "key30": "2EHZMV1Ts57TbpCreacj2aBDxn5Boji6QcsfjYbBMRSi7LMkXVajyxCPcjU3SvV9VoQJkNcs7raduSwAtvHgccU6",
  "key31": "4qd54opTXAkGsfPzxwLsEZSss1oonwQw1sX8bmFvCSugxsNQ4KaW7P1qFPoxSjc9MS9UdMEJkZZFYGNoWyhYgcK4",
  "key32": "6753PNAg9vLhfbR9NsPNJ3595F1Nocsmdf7bj6pxdSTgAHt25kpHAaqdSsCmrKiCAfSUut5jVLoDi7WdYGqsvSsJ",
  "key33": "1EfyC7vaqKqTEii7ayKXYbzpoUEGVz5CRuRf5yyXmHvwbFK6CgocoFVw2Lf67gD6nC4MGqSpMrKefCkR4GcNx5D",
  "key34": "3wjkeyY4B43EyD8daKPehjzwLBUYcBPoHpLCUswYeNHVUna1QEHes6W5h9BHHWc5vh98pbij7Fo42ZYZveAXLwQe"
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
