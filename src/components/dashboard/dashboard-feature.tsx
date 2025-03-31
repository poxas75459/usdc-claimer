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
    "VPhjjEqComWaiisBvvXcPwE5LPrVbVWry9mW8xo9jz9XFtc1MhzoQuTa2drH7nMyattCpVDmcz8tWKfDqQdJGL8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ev9ypqJpGkVUrbbCLKNqGh31cpNKSBSZq8kwkxhiSYEJ1e5uNNhhehurrKxLsohQJrjF5wiUAkg6qXq1URik6Ue",
  "key1": "474THf8uYYpcGyiarMCf5523VsH4erZNQ66ejdeqbfy4CQT18DjuUvm8U4KsSBjjNw2wdVeUNtpR148Eykxh4Z54",
  "key2": "5XDzan97nArSCdJ3G53fedWs1cAmCo1uAuwggmaJRENPGfYmBjit1Va4yfs7CFN2sjdUP3ySzzpS34RF4en7rXuL",
  "key3": "5zNtcGjERmoXq7oJDLKSE2c1cQdZmBpDZ6T8CpjWZPNbQQwNPHuxiueGCx9j45TDgqVHNdiWEkWdAZEQ3xSUprYh",
  "key4": "33zx4VTnSUuBJUeNE31Cf7eXUwsEJkUGugkSheY7dRrc5n4dQwbc8pUniCG1DzcdaNyjLrdps7upcBSY6eE96LGF",
  "key5": "EaKggDEw8X1ABMq8bciEAou6D9MH4muNGQAuEAkqRBaHib1oCXcfZYA6xLfVev9DNyyJDucHKVtL6sUCeYJwvHq",
  "key6": "41YGEXk6PtqSRwR8AqJ5HUCjZjptgxeA7xGK3SmDjpv2AzsbYwobazkmkTYBFrz6jPm7rZmEnYkBdtqUHK7xvigd",
  "key7": "5hbqFF14vnrTu2HpzBVYYebzKzK2YefBmSXezfdyakjin5HHyhm5HXedpUsggzc5mMeSQWcEuevQgnTmuNJh1Utr",
  "key8": "5pAaSBYRCsvUqDk7W5hu7w3FxYpm8mMcyRmojaTb3Cb8K3b8vhLANgePJxgm3GqLuo4rFX79S6EjRGULWVYcz7Ux",
  "key9": "62btqc8DJyLGZRJSQaZszUmiT8r6AVUZznqkdX8RPxG8HXh9de21cpLq1kzyrYjiVpsGeBcY6wERYzgUkYucukjC",
  "key10": "3G8VovnCmK1iXZcwbWWboA6GFtQuKkXdd4hoj2nzQuaducwucqvyoMEgDHdCoYGpmZMFoRjYYnbaNfyv1o6yZysL",
  "key11": "2o2eujKM1PRDMoWmfsimX1bHHm4kxEGzPXjpT5mauKvEGiHTsnPado92twR4Zdus3y2FEAkYJg3Zr9Vb2LuHJBfL",
  "key12": "2qocnumNwQCohrcg7jtmzQU6r1CxwLF98cRndfmtnjbGntnBP61PzQstLuFrN1A2nSpo5xX3CRcKEKMP2GdZ2CWF",
  "key13": "2nsL1f1TFQ3iitfbeH93RKWxhPCTBtaJoN37N9zVzqQRuGQQK7dgJvFRCGMkKz5XwQ5naCtDRZ4chKDhd8pqmJUi",
  "key14": "3PcwgZmsrMknsRndb2iHC4VJWLfwjwzkj3WFVP8TmYxE4knaVPZcUZTFELZBi1Z7ofShfGL4jyYSALkKK5e6duRz",
  "key15": "2JpC6jqwNg4g8pRsyXyizM6oL99oTv7barqeXdatfXBezrUWsHZqxMoNo3JF8G6zFAjUqt1xn571yK5qhg1hBzWp",
  "key16": "2vJva9RuhEqTTiNvFg2BuRs96PH1D1DxdhCpJuzwvYGXA7JJHxGGCjia5ctwZPhXybv3YGea2jN4TL1MMMKm4CUn",
  "key17": "27e1fRRWXnEncWHEgF5sGkE2n4W51iaTwqRQVzH62LPJF9qoj3JdV1NFVJWgf9WeS4Kfyi35j9raf18jhr5nq54L",
  "key18": "5A4Ut7FGtaoKetYe1UESj1AXia3n22kRxqSKd7tNNLmZUoZrS6vBYSnwE6zJzSkeGGA6sLjDr3jyAnBZfGKomEns",
  "key19": "s6gj5AKzJVcVu1NMR1vBM26CSaugbDjAY2TMpT7XfsjMK4d73CbMaYXd4mtEfL2KJzP1ZbVwWwxmc92Dmg6nJfe",
  "key20": "2amWadqNS6Bu5RxKcCwmkE6G74GmuBmxFmrERpHHvNtssSyMwRe4FfTkTQ21MjhDRA4t13MQjy9BAENBGL6uaLUJ",
  "key21": "5VpwHixaz6txAExVjY5UUYznxJnRvYJVkRwvk1sKir9955D3ZgVrFbDLtG6ioMepXKt1b1FjMU7fjx9P5ptbmmLV",
  "key22": "46nHpnzdrwPuEBU9feUCrS16X27SFbY3w38nqGQM9rg3ZA5y6afSxGuYa9qsSYtKr8tCFBHxWaVuELSxgoYVcZ9Y",
  "key23": "5tnazkir7AQEzzXBQohgKaDf4yD2Zi7rkYBdrMzGZHqAe4pADPBHJQhcKWAENijrqJbcihkoYsFEHoXKSx3xAfoB",
  "key24": "YdikCVDagwegCcDY57svyAPnJq4ojPxELi9TMq45cFrc2sTyXjvkNv4bkJDaBuSqWxFX7XkDsGCUPTMsHLiYaQ2",
  "key25": "3dwv1xKZ2Y8EtwSuor75zu5ZskgsnniTYhMerpmLHZ6RKiVCzPao6McsvkvYfa6ewXfXzdSz7etk7UTqFEvyVSsJ",
  "key26": "2VhtD4cjY1qvhfudoHMcVCEUFkkXgBBKCCGW1VCPpkRS9rG6J7aaepGy4C3eNLMBUAwLdG3F6TRkeAeqht9vWyEm",
  "key27": "3i8MPgdhuaZZvNs6ydzUq7ZvrHnAcpfFwDGACcxyZ1nGfXr9s9Cii8QWvuSrrASPfu4Qf9dGJTMMCKwwgtLP47Y1",
  "key28": "aRw7zxUHAFLxGRZ2XxdPcRR3eukih3s94QozhdLr7gcP1pDFcm9wuAgdPxFv5MKNcB4Re2u8UywnbGUzTUePT3j",
  "key29": "5vnPutRePUVwUrtUoj6ySd85fpGJ51P1t9TuhQ9K7sUj8hRSY7Nq8d3AeNSWGiZpoTu6JyMXKVfRMtcjNaTNdBMr",
  "key30": "2xzskSyiYpK4c2VX2rJPwiD7p4WgoqrqvZ4bgxaoqVBcw4hPfSAMD3eZsy8auSeMBcmokJVZB2gKa6UbCiQwgsV7",
  "key31": "5Z3zhgf6XZBAfVmgD7jWcKvsabVCLSGzxiqcb1ZPbTeQuGYZKfx7B8KYkrDfTtUZ1fzkGo4GsWWpVrvUAE5fL6DP",
  "key32": "3aYYye5MZcmSR7iay98isCzFFkRKLHzwCL29ZoYv28zYmckzXpPX4Usxca3CcS9bpY1FcLobDuEPq6eQ5T1p57DF",
  "key33": "3DerBgY4pQmnKD8Lgdo6biw7wWFwcdbXtn7NsRVpezp5xv6QFNNjvto3w4sqxnwMsPhanTgvpHQ1QZL6za317QyY"
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
