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
    "QJy1r4ceWxLT3DFLz8E89kkpzzEpj4bMEtGk1QU78EZxPouxHf7QpA4PkRnxXSSbEY8TkA9Vuot5mEbZkP4oi2m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "469BzvmqDwwf9q28JZ9nJuTtLD7ucTyhrPq6Qib9YqnvuHUYT8ULtNoac2GDpHpMZggi2iVQRgA5bDD1XDKfosE3",
  "key1": "2EfGmDQmfzrbDaR58i7Pzu3psGztEc6gHSsE2MXVWNzAJ8XRckQHjPptCoHCQR1ed5hGKqrWGWfi5b5YF2d8f6rK",
  "key2": "vpWJYW6aNp32etEL3ZZinfwxucB8w3uPG3PS5rRqnx25f5sxX6n1UMgLPFnApGTR1oRiiuWJ1zPkSV9jFSmXLq8",
  "key3": "5gotLxNZ4zWewQWMRiuWmhHWNYAeavwnhrgqaTWY7M4Hxptje7CucWbeEHuynZMwoGkjtnSKWjFNuWsfSWg2VZvB",
  "key4": "54ojK5WxqTWGWp6XkCUAx4wtS4D3EZvYrUz3JEBi2SPUz2aG6PZjPnosn4C68E2xmhLAuQFXaaCHQW6oSXk5qxeT",
  "key5": "3nRhbX4jfqpY7u2MGsfEvHQjszECj37ixHvsyLwZaCbNXmAyoi2aCjq6bedUTa55sYeUgbDyuVYun7CZ3XBnxw7k",
  "key6": "5cXB4XZXZv3dAW5nQzZjDVVQW8xGonUCFrPdg5YpBs2zh954C8QA99jxvDMEmBjNJMR5BTPpqR46ACmdn1XFj77L",
  "key7": "5KFyCPk9dmasThECx62dqVu5ar7ahrRcBMxg9fNBmuJN1MMg7hqAH9mLWJospKmPSMGUsdM1oyriR1QW7Qa7z4G4",
  "key8": "2H8VLHgCCya1xTg8EC6a5BQsKxotFukMGQuPRAKwBPCCdpmpxWS246Frb6v7vWP5Upg6ew9TChuE9ZDWJN4nmpb6",
  "key9": "21NGNY4cKgfWUCyNWBXnrWTVxp83V6wiTcWNrhX6ks61iFkAhTMfc8NGxf3eFqTL7fQG5q98kUnSve5PUJ8wC2u5",
  "key10": "2DADTE4oYEN4o2wmqw3vuTyquWWDc8MiGcYj8PVp2NWAa3axmSsKfoWdUh5ZFv8vfjmZjkLs1avTjvewAD6LoDRB",
  "key11": "2bVPV2d3q8GrfPFWVsSDDbyxmBabDqzxhXX2mXv8Jbe1efwf9VTT8Fcg1V7gCg83NcDgmyZSGATD6z5rAuoryszP",
  "key12": "2FLLVVtEmVstL4TwGZuWwcDCEcnem3DoDqxX9pbZMPynH1dkZtFhJznsvmLDVPWj6xMm9Kz7rctTmDyhVDAACQPP",
  "key13": "jaRoDGkuqA8E7yUazT6EDdoGF1bfuiC8c6BFndK8Lf573oKSdergrQ5EHPmt4ajrzWQYVR5HGgU3ixfFnabCvNt",
  "key14": "2D6Cp2BidiZv1QcgPa3QYfCy8jhgpiXGL4gx68znyCY9cuqQUz8qogSeTabcKPk25S5tQoTa2j4YgFVP46pzSwAJ",
  "key15": "7CbucuqeaRvPpVUPBgmwR6qQCgyi5pN4Fa1mNeHZxknw5XAxCvqZbCpA4tTdssaaPb5TAg4bHhGsYWsZYPjPmHM",
  "key16": "2FYcsUaQRZGWx1XgCLu1qkGGb3YenGRfufb7EpSuFf639B26gYwCptMH3cx3oVjxGdyRikNQbVAroLeQeZ9grRXu",
  "key17": "2g2LqkHoRhwyeTkxtd93mfJNX6KKSxNkDz9Mwr4mLQe7qp6JaBieQbNTyXVNojL8pACAh8TWVjWuVxHVGphQet8q",
  "key18": "JjGE8o9wd1u6Vgz7VPR2jtgmBJv3nk1h6GWfrJaT7Uoo6cjqcHht4aUC3o6NkTxvZ9bkSexAnawneA2HjE3ftTx",
  "key19": "2cQdHzNAGtqJfYmt3S7XGJCD1EM5oSreacCQAALSCVxYi1kTobk7HBqP8JqseXDVM9VtPNyE2rxgeN8N7nu3MNA3",
  "key20": "3MH9M2LZFnhxdK9RLLQmhDo9bmeSFcHS6kymFDLvCXcDeoAZa97UUiHXoPHpf9NCyuWJxg16wVhmDoBe6D3aim6h",
  "key21": "2ZB4KD98Qs2zezhkevCczdLm4JzijxMVrKHTea6BqTP6BtJKZUvnMpYKTr1aRUFWUfW8P6Prs5ay7ykotSsLf6CW",
  "key22": "2dsVPrYnbz7wjCyVhjwsHvG2BN3wHGzb19PNCgSXbKPLFWNSUvSJYs6FX6bn2vdDnxHLvGXDMXSWJP24sAKYTqL7",
  "key23": "34bjVKRca9vGHXH92HsfrpgzQsRaCUqk2bBxsdfqwjxK4RETWfDZcBkSjGG7uY5SCUFBbSo8qxYGFRH8LAPQZE8h",
  "key24": "4h3xEbi8RJWBASiARUEq1wLNwwn3LYVzkfpsijkK3HmwravyFusWQGPp8qrMFkDzTs9pniJTbpWnmyDiuZtXE2CK",
  "key25": "5sn4FYAjadP5bNZ66ri14khyjHE2u9kaBmUNuAx5gyQjJX2iAfLgWBTWvdaeGnDwDVhs3cxtxMu1PfSuYevS1jKu"
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
