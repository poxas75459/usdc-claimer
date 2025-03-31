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
    "3vvNSPKXF3dfDHZRQBB79oCPYnUcU4UTx1XxEvqv8m6dcE6hExjMhJZ3HW6HFRt2xovgUipiVbHFKfXSbqkz4YUS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T3zeMdNqNqhBQTA6q6DgYk34ccPc66eGvmUuH7NTso9aTXJyVMKXzQSPb3S6oVfXqxxeVycAmcfzW84GggH3Jz5",
  "key1": "oPqYaRADn5dnHauDLv9RLJuwXcM46FgVr3hVsaWtx17gUDrVFX85A3PuZDjkAronyU9nQCkuSNbdsfNtdAAWQpP",
  "key2": "5rSt3XhrF8VUYWnt1cFBWyzpjwUjeatzs88wUnYZCg2tADsWqSsdeD2tg31z6YQeRuVf6rtT9RxHp94h3kgDsSCw",
  "key3": "8j5fAm7MRR8CW5Ch9SRzjN5GM7d9nkB6HUmkk5srTFzjfWhA855WseiP4JZpyndwnXLxduHgWNZTJMBst9HoBCo",
  "key4": "61VtYCEGs3ruyEf8LQt1Ac5Ps6mW1GqJSNr5qrtN3B9E2syfp1RtFEvCvSGRKVE1gP99gkgumRHgsACihyQyWvxN",
  "key5": "3F3MSMvTb1EsBQeUF9SzUo4dk2QZGHFH65d1syfjp4Gua5eWxZstV2TR3LcqhUwx9ZYeNXFaxgBEgAn2uHwyMSi",
  "key6": "GcJm3q6NxdakEBtPgsXy2uCrxuStgghgBePvy9p3VmK3PKdQjmxXRY21oqNxugxkK3TNrfwxnYZKjFCTpTGE34a",
  "key7": "4KPC7MJDbMh4JKvND2HNKVf4wcaFYaGYntsc6Ba1EMAGdsGb8s5p1vbM5fZXhNxmeHFN9686HCdzWkVZwnK4QKzw",
  "key8": "4NXZt66skGdzPVZLh54e4dUVDZWMx8T3FEAKbZzqiFZmZKmWEHBVE1aPkVFo2t6oDTdaw6b31tQuTAxVQGwJ3vaT",
  "key9": "2CuHghZdnQXTeijCTgjMwymjxejByAph4cERvSoEhGRN2SDTJvGzdVcXJUDFQtXRNUkezUhUgAeuvrrx8S2as4Vg",
  "key10": "4gubHr9vj48KiUPYTTgoWMTa1Bsg64QqdvYf4j9TY3Pbsmc1mcsNwyz3McUoLCgTTx5kPrYnyiiRDyvXmL9tLeH9",
  "key11": "4MQKjY2VW2JxxnPoxzfzGGkX1wke8ADNyCoRmc3MB4Scrj2Zvz8tDK5vwbFjHqySQCDkCZtDBoweeu6w9nq125eR",
  "key12": "2w2DghKwbDKJM7mmfMpYt5eximLVDSouXaY2P2U2VFjRDA5pSncS92gotMK8GWzS5kfQ6N5hs8TNYcHv4jFidJ8X",
  "key13": "2nbSYVcWftqqNhAXsbC1jvpchkjuNsz5kkSEgBUUCAWWJAA4dXYxz7QNoxnj27LoookQxM5Ge2EbSdAB9vvbfHZD",
  "key14": "4fUMaFVQB3RaktVMvq4fbbHETPT2njBWECaaHpnniDnVjq5bUDxfWbSYTVCAPasX3hSq7Kj1ajEa6gZzSS42RFzF",
  "key15": "24qgQ6ec41FywJrJp5K7eixCRkHHzXUKtkL2X8s8BNphzf3vcK5PYtPioJVyBi28wd7Qzgp1zb6jiVFBL7V4qcqB",
  "key16": "3se65PmHdhPnxNXeNLtFLjdfQGD2fP6mEGEX6G7Ke7TERijEpvsZDBV3icDXHNaHRunCHJfnjH4AFJqaKqHGQ2yx",
  "key17": "2FRX5RVtHU8J1jzwkJT1Sa8focYi725vHkoa81DSBkXroTpwJE5AcRDU6Nxd4NpyaUhiqYULjKq8fxUS34KBzPeZ",
  "key18": "2yuwkHSeuuo29Ro2JqsDotmaQY7LsSqh2i256G4gis2eY1D5zfEtnHFv4cuWdyKd77QdK1AGTnxNJF6EKD7wi3bq",
  "key19": "5LyyumAbwfV8ZJh7LzhEi2u9wYsrK9KWrLNrAj9Kzp1cS9QV6M16w7FgKfLhPDagtdWxbKmSamEG7EdEEwCY6Jbn",
  "key20": "3y3LHkbiEPwvzVSct2q2NTuriGkMcFEUwhBZfpLs7trkbMbCaN3BDQim7hg6jxe782nfARofaBpmtFREcGcmjUcf",
  "key21": "3XmX8iN5tAZBd9ds8X7QVsns5FoSRCDk5mcNfZKNWvn9wxcQGKYyoXTNSUuKRk9XyQFB57R1Tq1MqmFHydfEkr2R",
  "key22": "5btgvpv76n97N2nmWp5XydUoXn7NcmbuUq99sEbtaDecz5HRvch71ViMAVKWB87sBfmHD41q8X7J3uTBa2RiLUD2",
  "key23": "4PwXAAPmTELQvUt5v45nn9A8Dq6EwfgeSnoohbSKYYbdSBittKUYDqPFgujpc5Up9CwprUz3ZgH6zk1VvxH2fxLd",
  "key24": "3AYnTgXoq3hokfhLG389XVPrccVbW3arGapA8hq2D66yQnzA2eXD9js2CWzNVr29BwBRrwvmTvzqb91YaY479vuG",
  "key25": "4XCYnGdeevBUKUzZ2BiZ4wVYgoS9nGmqYzThsHM2UkTiCsHquPFB4EWcV44q2Bh2NLGV4CnnmXWRLWh9wmxsWJZh"
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
