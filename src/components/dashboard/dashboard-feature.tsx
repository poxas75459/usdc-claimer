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
    "2udqYKFkSt7g2WVeoCv9jPSer4UtNGhZit1dcEK2m8hKjcraJDZWvRxNi9EXuwMxKaeLfBcs9Dk7fG1KwWGcUMiN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yXd84unXVo5bugdjUjjcAThhEHuFxEeivNci4fWi52yqxLYAKpUk1Av7rv1tUVEjRiCBN8jKyTqupF6Am44LaZh",
  "key1": "RjDyVo9yMkRXKXJniNRQMZfj6YR43AL6E6eLnxjkqdYZ9ALhS2uVmEMu5s7f3d9Q3ZxkpNrFtfA8VfR4ikuGc9a",
  "key2": "4GkcSbVJxAeF9Zbxs8trwDWVgPwNDKbB2KqxKAanFJxPhqDvmmMajCQ2JozgYv6xaucvjBFjvRKL2Aw2WpbXJi9p",
  "key3": "3jkJQUTo1KinWkWa664MX9fLxWdsE6WVFrPf1UVm9hHMYfBBTB9vggvB6S7y2hxdWwUNvQsk4DGboKJDxAUYxrW2",
  "key4": "5v1YHB4qm3aM2muy6uAoNCk9KvNXjYkJ6j8tuoXkjzbo8WUATN8tni2YJTfbdRYGgdG7bhaBYaJB5QzTuBiArtiz",
  "key5": "4NGZKUJeeQk2wFFjnQQRpAxrt5kc6FmLYXQc6SBijZBG3mxahmBMoFNFi1PwUYQ3Xk9oPt8phamtJTdnBNVr6afM",
  "key6": "2PyJp4wFHku2VqGH1jraSM9b8goNJGwMRQoToQE8GSECvSngQa3SZe732KuL2Ad1hfXmGHPv6t3xxSQqENh6Nv9B",
  "key7": "BwVEB8ioQKPmwnqZXZgDmNeCAh2akBtebgJZ2wNHKgb13Aqfwir8t2uip6K7JE7X5iQSidK6tjRYs2z86n2zqhM",
  "key8": "4wXX5nkQFKhbsboMKWwcE5zsX7PaWPPp24ok7wdoiBN6hdW7seuDCC61r6JWLmvLT7QSUeEhYSLs6oAz3W8n11RK",
  "key9": "vCNTRr8juzwHJKUuM4K6w3VYTnjBZDMLjjpMaPVw8A3KtypTw69J5JkPdbtPJXFaoeQu2pGLfcc837s8oNDo1qc",
  "key10": "2kGzLauEr8MYT9MFoEFxD1phPPq7L9sGePzoshN72GPXtPHiqd5xpx19Q3g1C3jGaGxiVZzjtbpeJQsDYtCBC75U",
  "key11": "2M7WQ7ihae9bcEyu9rJk5ZMjUBWesfB7m25xo7GfhnnaCUp3gJ2ko3c2hcfGdetBqZNHorshzNz4sEhRraEK9vSG",
  "key12": "2RpGMLr5ysUGbjXLWThTLrtDs9aqpt633hNtvZXBNqKGZH4TCq5Xpw1YgT7GH3AzsZa8r6enEmP9s4JZKJwXarXL",
  "key13": "3NvFuB4wUs1j2uWUDSn3wT2DtGVBxM9Gjup2jBbg6SkXFA7s5omcRbZKcKztsAvv5tBygoLYHYsSRADpTfhWXSdf",
  "key14": "5H1WP4eza3gUGZdrXQbUFEFjQpga6saMqCQoveZouj55zHPvoetajQpxwBnhFD8PQuEE3T4MZ92Lg6eTH4Hi2CNf",
  "key15": "4DAZrAbzyVXvoxZGbzG5S8zhYnygDP3gvXTyP7xSnEUzQPbrKVca1LMbCBwUhkYHoKhVShCcw7TVSY5aGpWQyqDW",
  "key16": "4G6Uqrb1TnkvdSyGch6gz1UfxGrE4ahP7Lkhp7YEu6PgdZxhMB5VgmxJ5NZDr9zkFGm2fmvLYCBfAuWXVaksizPu",
  "key17": "3xSSLnNJixVUU9ucX4t7e5476y3aByKYxQ48hgd6YHnn5Yiqpzy5E6Fi2SXn4pZgFJSd72v1xdoXrqccnPymAr5d",
  "key18": "5KmyV66SosATZUuM3pBnZLDzK8haT7EceJDhpc2X5BtdCDQVba91E5Z9ZVzomwWqo1bHn2X987dzV63D3c6Am7ZG",
  "key19": "3VnUEJP5dNuesSApcKzjrmVHBQTwFZwhTuCCGtcenbpx9XVnyB1DRAScxqtEUFVgBRDD9PJJTf5iBpVTSsV5ANUf",
  "key20": "YFTPV6Qm8yTs69KiptpGRB8B2dYK121wqm9eqbNaK13F9wDAHNTYen6uWA8MAUtMhFFYEGChiN6cP792jDiKfyw",
  "key21": "2g9FcJDojcAmVEy1xzAQLmad5WmVwTY1aScaGnHaafS11TMDDNo6USihB9196FbT1KreePaa37fSPpPcdMt7xhqn",
  "key22": "5vG917yMUtQmTwgz9AW2ccyMYAYAVHuevdZbyjF1pyCiZRdhBZo9jzaKeTGeMsUxremoKpp822qScKxryvvnJMm",
  "key23": "3bPU3TKyhkbNyJVdgjzd9pkjpmp124Zts5sbMXA7VzHpZnWrgxAEBcmMRZKvSi9s84FkJptMq5d7FsLT9TPEFNqc",
  "key24": "3YezVPYpm5dRQAn5DG1ahKU8tDqNXuwfSzMkt1iSviANtnfKf3Pue7Y4ecdq4f5KGTCp6zEtdXr2HKhocMv2Re9R",
  "key25": "458f6KWBxquUjbo59nU1KSLcUQhVWdpRthc41ZEVoURRMLDX4UBa6qED3vALrDtgYoDNaoXsJCpasMwrTkyNg9tc",
  "key26": "AnD385XUGHS91pVEaYnVogTo5xFKZCd5MrpN6jYiNn2oshRBBxXjGi8Cs9t3y4TM6XdwvnMNKYVKV1v1UmDSbQ7",
  "key27": "3dn5Jhw9bYmUEhhHmCKJ95AYpardvvttQgJi69mxQjmRYktpk8xtdtGYEswus6kpePDC23jYFHXL3ELMZUPQwSRB",
  "key28": "63dgpvSH8DvwC12YrXEF9LfGCoX3C38yuHs6wEu7WWKUqRdKnNbNfVPUKSvHp7sFFZxBLoEfHd91fCUewm2Mbcj9"
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
