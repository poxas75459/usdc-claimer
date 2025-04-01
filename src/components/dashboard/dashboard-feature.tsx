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
    "25nH7Z4NUPjXo851aK5ADMY5ErQwD8ugJ4Q1mnh7P8DkRqPAZsCqSKSZm1cUNs14d3kSvacSuL9ySCaY6bauYGET"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GeFYgw2K9CCB6KpSPez1CVQnMYTwkdPMR64LEyNopDkfmZQJxNLvt8XgFJMp3WWWK6rJ4Xew3sAYQ29hMkcxXPf",
  "key1": "4jMqfPR9JECyKCxHNMG8Kr9eYwFLWjfhXmt1sG5myBVuD8U5gqC3T7u92hp3LvtnRAUcXExdzn5pVaeHqwmMaN6v",
  "key2": "3gpvtcLDrNP9KGYA34qQEBq4MKBUv4mViu6y8xs9uv1uruoZkRFTh7cVSh3rgorYSHjGzkhrSvZGhhkhz5EW465h",
  "key3": "2oc64iP2jAv9THyGBwsbJYsBzh9SdNBFQPddGrkYMATDs9XSW6TBwSNsJVuW68FXrdUr9EDbh4Vxuxc9YHspNKtH",
  "key4": "42SwCLtjNnuCjX1M9uzjApGDBw2MD3B99faQe6MMHZE2ThMB5hXZnH8gLAwjwJPHazHNfsnRRTyrNyCJ7SnNCt7c",
  "key5": "2WNvYcDnbcsaYWaPRQ9duyTyai5okxETV5zMEjqfs8mujb9Um4Kpn25u4akXnZRGa52hYaZtewY983R8isgYKT4W",
  "key6": "4ynbGfn8tjftHKGHjHQd43e8JYZguLmEL2KDUiDaqa3VUZwYWv4VpDrX47EYT86W7e3FpnG4MHYqii1ZBRcLZvjR",
  "key7": "5whFNMocRexf4Frm7wChcTU86kGE8Trtm7esvdi5xGVXbppQcf2qyW2jX7ioShvkB6Gh2p8KN5fZiMzsrx51pPNK",
  "key8": "4row566NyrjzeiB9nFUVMitca68WVgyhEcth1kdZJWqgrEpg7MzETqkzWBu8PxqdX5S2WxcRweDcdUxsVpeGQ57v",
  "key9": "9XKJk7XPL8HaBDfbKiHg4Zy1F8fXotcaLZrzz482V6QHLtogaGvs9riEDUWLX7p4rA7ZHUByTaMZPh93dgYkweR",
  "key10": "MwVmtTUn6T8AVBDbgzTwTudcHPCnySGcZS1BQMtUkaq7NLRnmrqYzupaFGaXTuks6SG3uLduu3WgZDy4GwKJzkM",
  "key11": "4XxFcptBG6oU1C4FpoEkDsBb2bTwn2Nf5VvKNUUhDC1tgRC9nS3XWdaRr8w7JYqY5ED7ziZiU3MjTv9wnxQxcNj1",
  "key12": "DYnx2gkVBEHb8STUmEvJjuKA2dv8cWNqjzjw96f93hh7NGSQ6LvJJPbuqbQF6BeMGTZoGcmMEriR65KNZLy32XD",
  "key13": "2CsNAtrc7ggRJ6f8rNXjvqjJzSderLwN7cHpsdwCS5FtMeXRJ6mMe5kmEAuzwL8iNckWbsvE492MimkrEUAtf9Mc",
  "key14": "4iDxAbVYU8DWT3YP44BwiGFYQufBk2pjPirnFwNft7pBuZArHXmeTw6aQjCr39ZeQ1jG9e7qpBDhdQKuzqdnLSYa",
  "key15": "3szvj4PRkBW86JDzZEvwZuNoYuMZRuNWGFsQSYLM7NG1pS7zMqraHmJa9MrbYt8xRt59mspYsGDo9mSn21bZUvdt",
  "key16": "eZAsXM3QgBZ26uaYmzjaKiqYJq5Tu8NrqvB7Fwfzaiq3AiRpbyg4dH4rMvfm4fQVmnYVCHaUXMgoTRABkuh4cH9",
  "key17": "BP3GaVyZ6PhSbRbmG47va6NqyXtRDNK4aDBpmTH9DGHbMDNrrb67Z4DdUXRvtPMGouRSGL27FXLd1S55oHsTB8F",
  "key18": "uJynhPAoNLQbqpLTxhoTRtQX13Dz7HzUhBKwbeQgEKpftwMEHvQf6dC2SyFofAW5bRoNpRVptcm7QGakigXxzXX",
  "key19": "2kC5dRCHLzk3mpYsjhUokWfsZaUGxsHScUfibCm16psRMu91H5b6MBXL6KwPn3cPrZ7KXbu2u8shUqr5sRdje13V",
  "key20": "4g7WN762ZdsSX1iut6x8xNGqxwC8N2Sm5gnHeZpWeYVZya1FtMoNrUL6BCdogQj2sbCg79XYzqYHREvWSRa7wxb4",
  "key21": "3dtEh1XFa7YX6NqTjCX9PJu72d3kBgX6ueJaM4g2k9pcJL3iriXZYeuQvpQsnFCNPtKLcfCpTz5PDXmaocJHKZmh",
  "key22": "34SFgBa2Hu77UP8Z6PB86hnWz7h6MdF7QecKKEuqXJ48VyCXEZDWUkREtvA8NfMyDTenWY5zof4Exa46pyBMhgxN",
  "key23": "5UnUZMGbWxF9h2YBhfGhipUF5V8HPTvsfZfLCsRkNfqMZih4xYVJD4jbYqsM4LxNTNMKxrAtDPvWivP7pkhBXafa",
  "key24": "pWtMCyKnREZksjTCUJtGg9JXo2ddH4pq8rb1VRVNsooxmHyEFWUHsQnUJu58mM4gDwAK1zq1bUgx9Tq5Mk9y3sr",
  "key25": "2hBzDykUyykkhkPLWAKPapjywmct3S2rEF7Gb7BGHVnKAnzCB9VMXYPaGqHngRRV7aHPmz8SEykuJM6B9StPXxeL",
  "key26": "Q4KqvXQ1QMf6zJBNR976ZpWFzQyWnFJ38bEj3bPSEMwPSbQncSzvVg4K2gZ31n92dTwdx615DJijHZyKvtQkLyX",
  "key27": "5E31iRk2oSnZ5rXK21jsQWVt7XNkabBsPHQ8roepo3uf7hjmJvDrJUdSaaZDcPgLFzADw7ynUgRwjJf1V6Jm8Z7k",
  "key28": "2N3X1trA96SgLFfrQq3FmstFrCjirRpkKYBdxZYSMVqGpTWxyohUmhvbKVuNwQKqfzPgNKxdBeEogB6K8TawQ5jU",
  "key29": "46RNoJymTh8QrQXKiVfAgBrBYC5HyoNaH5meiDKWKdsJ3a7ZdoA4cr1CcXvXBfjneUdwGLfDB8AxFnJf8hdQJQ7S",
  "key30": "2s2FmXMFP91jivsLQ7zbf2dtVUfRgSAYvJ8UN8vPqxEtkHDoEoPvMKCtu2rXsEa58bVKAD1EvMow2mgGXwNwcmeY",
  "key31": "4yUVRNZ4WmekkR94dP1yDthpPrYssY1nv3qAMrCMkkkdRnASYudsrytpEQaurHxctzC6QVwDAE4E7Bq6gjxVdfSb",
  "key32": "3b4SQUS8v7fbvTxZniKbe5999E3acUPj4pMJuCo9KNVdntnBxyKj4rKcbY8RtVkqFMWHmYx8dBMMDA49rgRbM7cS",
  "key33": "2f3sTZv6htjhePwzoLmB8DWPcmCGQVP51QRYUYHV4HB3fKwaqw9Lfs3rK1wR2eqe8Au35FKQjFnDcdzC9vDxHhgz",
  "key34": "56bH6MGH1wprP9mmoAm5PE9kbMtokioT5LL6s6TQVMduSzTkSAU5tafrgdoYdwZGMadTtxaKCc3VTasqf2CqtBoK",
  "key35": "5QsTFoEMrKFGYcKQuMQq7N4zz16wLsEkuPDLxxWVcCddARQ1xYaB43kpPHrEeZR1HEcVFWTyZ2h8CpPTC7f6dvvW",
  "key36": "32WV7mbsw9ZgK4Z5Hw96g2uC2ihL28MyjRt4dN8C2uHZHNpmxQvHDoo374pRJGaN1jTcp4NtvjGE9F2YxstpDVf8"
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
