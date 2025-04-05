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
    "279wX2pPtvJpygfUFdk9VFRR97M3DUbjF7rEYd2ZAhS7ywtLHrYvhtcZdbsGaK1DAK57EDqgGnUt1DsmqoBMcEfN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VmPt9pyGippTA8bu1CU4CrdLuuqbfjPBtAUmqcUT5sNsGiZq7Sw5mEf45ircck7Kz4eeNUpbdjFUhUvUCCVLsbV",
  "key1": "5yZ8bYpGcS7JgSz8DPcsQFWpAJxqwN4zgGksB4D2GvZkmpCgpBtxHYMRUZUyMsnGkjreUQa7U8si768NKAnhJSAz",
  "key2": "4HDb2TFeYuURQCxPXXEaYFFiyTN7P5TJjbtbPauyiBrvAKVrnwtbLLNu5TqAUzH5abGsFHuyGMCisr2AcWWPhsA5",
  "key3": "2dEsf7oToJU1N4abcdUith6J4cAbvKWpywNGcAXhsnR5rNKgbtCkJRoEZ5x3sonLF1VqWcXwHaNuTby8c4yKLH8J",
  "key4": "3kjBQjvPe9HjPWU7MSQxr3C4usSQjWE6MmjrwXGh3VhkrJrtBHdcMiZ6P65gv71tsmspSy6eGdUxCMhGNdVi38Uj",
  "key5": "5bUDiyj9MhumRVayJ1ncrryyRELVWmSstMVyacH4Hs16ma72VEEj7rYeR5U7vsNTMRryCGrZxm2FnBCzzEuwraN6",
  "key6": "U26M2aJJdHRffdtwyktE6qJ2dJ5zCvLDtkvMtwD1h9Db8QB8JtRuBJm3AX3BeCSWCTt7wd4FviS59ANeMkpFsU8",
  "key7": "2yAaZ3hKPuXzbqWm37J14SnpNZukdvPSK3YmLmwgKsBjU2PC23XAsNnFF46BCrJgWS9TKB3Bo9P5oySy4WReJcRT",
  "key8": "3NU627hQCKqLgJt1CQdNw2Pfn4Mb89TyLDwboCxsG6DDjL1xksD1mBJgjmy2BEiChdmJnQL7r7Yzjovc6jqyAfMu",
  "key9": "3CskmmxjG61QosUJDpPMXiEFtSZyB3QhkedGUPBKBN6kHR9izEC7999tdsq6ZznDHPJ7F7zVeFQUmwRvVFgsK35E",
  "key10": "2x5EWM7qxXTVC9xYEcmkdZ8Xh5rcZYS26e4v2Gp6DiPs5Evc2eGuMNdb7Vzq3wLmhDfdwgZ5Ja2t6NfBxBvdsPmV",
  "key11": "22FttD6uRUJdotWq6UfRfF9RnFY3sudB5pRd6wxvz1VeHygn2fq1K7r4za2Jj74eqjwVQUvqVtKBZtQprA7ZJ81m",
  "key12": "3haBPWyZGi6V8AkLrBbpcUa4QCZLh8zq75uB8yc6EbvKpFEVBr1dTFZ6RUDq9n5QJex2iM6sv2CGccFFE3uQ3CWa",
  "key13": "4NcavLqmYFUah7oRh3x23XBbYL5kFTqRB3sFk1BFGHFL97Ks4iATs85SYgHTThheowSCrPZMYfMMxsJ8s1cHgh7b",
  "key14": "4GvUZBRTiDKWTDJrK2KVX7mH933m5CpgMUjJfNk1Ppv3vZJSGjGZVyj9Ws7satRQRk9vBndgJh7MP3jwe9thomfv",
  "key15": "3BYtxT1boHNRGXAnAQA53howMVpGasUK4H4fGU1xAqqB5wXuQg1P2jAY5aZjdSSRpHyfBifEqumAZCxbkNfEMb2X",
  "key16": "669gwHkgR9gdZzPtNNTvyNfdhdZC8BKQ7QueHox8yNps2XNuAUKBhSip5nFRHpeimTWWPnwiB8fN8NWXv4MrEF9n",
  "key17": "4viSM8QCvw7fBV3kAf8uDkJb4y2mobdoBWGqcdBaDJKov3FadM96v5Y1rqGELfs6Ts4NCt49rfwFxNVdrdcxh1d5",
  "key18": "53fcB9pkUNuKdQkAPXVep9UswsiN5Nr3rav6wuQaoCzaTqDLP83vZuXgJU8tJzKb7iKuFSytLkt8PPDHUy3zRTD",
  "key19": "3dYQSBs79Q5tJWoK5rhNopBzC1GogbaBkNpDSAZJT1ogLyhgTxHJGUh9DTu4cyRrUpzDJEQKYrqjWXAXKVBgb9QP",
  "key20": "3HNv7wGhY5crk7YSEq62iakduYTtMp8T6BmDjCy7YaxKKmJZULDDCssNVKDs4tDx1oGoF79ifT43zD4RLFbDqZT3",
  "key21": "5NRLHiCRAWpGt5ghwrYacSZeV715AmrH2FSAMCj3JJLSqqg41VdsiFzAdtjZAXtrEjFkixnNvor32sPXphcPhMn4",
  "key22": "hVVupzAmPufMRmjaLtwwZ3dPeTnCB94HtpVpRhaUT3Hmb3mmcL5hz5rJBTcnQjko1Kq7jQwBSpJaswvPPYttKCB",
  "key23": "2TX7zfcUHVKDwdu2X9cmE8Ttj31BNDQyHBvfQzRRKWTpUS3xWRiZPyKGqqBMgaNBDiBL9S29ctRFPMAhYTvWPQuQ",
  "key24": "3TKQo7ixJdzrm5vtYBerHV2fvJSxFuhdDVrZWYaThvZiCR3gG3TWCR2zrmtgEQHvFJjfEqR9xS3YWEURazPhnjFx",
  "key25": "4fQgKSuUCZrhu5Ex6RcpsESqNBdXpC4DooRoCVvbMFxutP71a2t5exX575nvUowfJVvMcazMtvw1QdAcjKu723ds",
  "key26": "5axd4bvwUfq4h8uZaB8GT7TdZ4mP8pUS4YjVCtYhBd3TxN9srtgWTYfwJ8zKdrCbmfjNz3it3WsTHnxRYBiUBdzB"
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
