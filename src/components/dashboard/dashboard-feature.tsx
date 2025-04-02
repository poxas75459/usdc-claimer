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
    "eoGw1H1B8g3e5QiDqafwBvsKqxdjdKhJrJfyiw1G2yfEL1kgeEhjJFqVCSCgiyz9Q3LGfhri5hbcTu7vucoth17"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54RXbEZsoLbFvmt1Z1xmhfSySKKnbzyrfa9XFEEDaKaL8UwcuhLpd6jnKK2taNo7YPDh5rrpsrit3yFjysMdyVns",
  "key1": "5iYhVaBFPsTiJ76m4NAvePWAmMQ3ZsWcM34z2iJiaAsmcRWGKkPERewqULwNm8bpoTvXRUahdGYdyeWSE3UvHPkR",
  "key2": "5J4C7RyBV9pKMGsAyUC5saGsFQX6Wy72KJTDvbUGfN5te4kfoKgpzJQQVkBoJ39J2h6d9HYgtvuMSvtdNrHEYNRd",
  "key3": "2tx8byEycdRog9XVa9jPTLmtPL6T6vJhrs1WXLZsnBHCnp4JignfqdM47XyRZKq2MiP8RHbkEpcBTgTh7QFq3swj",
  "key4": "9W5JvALPSWGdAPhN62FPtVBDEiqLnvXUQ1nNAkPt18Ubwi6yGuv9osRbZbRCUxWMofUckPeXMPyVZWTHBmtYihC",
  "key5": "2G1fefk55ahdRL9qTFvnUdBsW4DC3B3FyYWJxwbU9o7Nc4HCXmvhnLqtjerTyWNPb72h6q8f2TXtbpQndfxaJBji",
  "key6": "21k9sW5nHXxEcxvatpzMomquf5YvmxZWGj4qGHv3oW2fbc7zE7ZyWzcFsDF65H2gjaXJfGo12UXridKd19wvD3Rq",
  "key7": "3vsqK6jZGqBWk27afY8cbHYjTbSFQKTsJhNyTQG88s2ZSqZi4uS5jW9jFPZUt8muVwv1bE7PyAUWyU1LPKrVRQyD",
  "key8": "3HsdgtVuNquWtvpSi6uSB4jshidWLQ6Czn5rRpubc892twdyStZ5QTsmrvbeVKqNkitREoeMHriGBZKWAGw12a6v",
  "key9": "378uWZcCqXQBXqGKzDr8NehMR7sdb5pUChrQEyvND4a9dL2dfgxaVAjh1tQdmvDGaCzNmWe8MZvoi2sANgqUfQTP",
  "key10": "5QvtbJNfMUGuRR6bq3HhBtJvSBjQZteHnzPMub6HdZMkerkmuaYmakvPgnG37ewvcVzBoydpwqDkPP73T5zKv2dz",
  "key11": "3gGRSYgSriaDUoScqwAYEMkFPVynL8zsaqaRnoF8N6T74vuJTLrgeLtobPZoBC5E9k9uBqMPdEEfXYqDhJzsMdXS",
  "key12": "5CNmFYgxGkx2MWHXcKrU2vTs4Lzat82tks8vUhTpCBtJCSDEZGgfkBg1PsqTwq38ZkfqAdxXMK5tK4gfprfbjDrh",
  "key13": "2B8sutFGXfWWHCnFVPYgvxD39nTzxcbtbrqZQo5ncF2KRfmz1fSq1z7h4S2x2opBs13pPD1yvxb4xhxrMhvKAL4c",
  "key14": "3k166HTwv8xNQqN55qhfGKvcMropP3N4DgRrDcbjiawwjEVgCh9kPawhLDQh8uvoeadPCNq48YsGHAuf9kd2MHAh",
  "key15": "3EsrZaRs1hEePHRDBpkXSDwe32nP53wYqEf2HpWbzGw49TqjzXvq76NriTcLnK2PNLgzZUfmr4HxH8zqGfCpHbo8",
  "key16": "3v8e38UrAbKW7afyXZiqdiBiPq1gfVup3hL5YhTQjgTtpJY3Etf2XAX6gY2fFAqn3ecsy5951Evkv3vZ9A6ERyYb",
  "key17": "3Jx6YP3h41m9QHHixBb4qhqMWu11hnctgXfwK5WKnjkaVsV2mnemaVQ9bT14mr349Y6zEEUdx4bH1yyySdWHwSz5",
  "key18": "42BmzpQhjnQPJbUTtapnLuknwTSaafZqUTqm52n2ANgnn4wTmJx9UvLL4GddT9Ta3PAvfKcND2WbbE1NAHe4pmDL",
  "key19": "41NLPSLdHRaFyxJxjAA4mHFSecDb2ThCBU556do6aBeFKxCZXkaLerGBroqFD9htUo8PFWDpD4TpjthRPt3BV5ip",
  "key20": "63TquUMcQi1YD3hUJQ94hQc3pgjj9YX476JDi8BMqiDwzwDVjaMUfrJQSugK2hSwLAnhdUCHVpGXe8gJ3iExQomE",
  "key21": "3BxkMXKQXS1PpCgmbBu6QFetBvtaFR5tjadFK2tTawTwzXLm7Zsf5xvEe817imVRZSqbTKqM5Eh54WyrKCwvhHu1",
  "key22": "2oE2tbAKEyBPeoPcbbeE62fgmFVQXjm9ogCJevS9xistUFrouWNamvhVNm9xqtdm51q4hUQ7XVKra56joCM5iFYj",
  "key23": "4xT8rYYjLTBzn7wV7qxPULTjMimKk7ZLDDqK4UK4fGS7RgqgqG7bF4BY1fYTRVRyAfJmSK2gXc43o2mcNFDfCppR",
  "key24": "26nySFJmdse1fq5KM8CEMX23dQws2RkfxqRN3RWLpYZZtdx39368dGZqnkK6YWaCB8oTr9opBF4Bp7pJ37UxTbBR",
  "key25": "5mnjXorbVbjuC2g7YD11mfscdHGRznDsjrp88UbTkkQkE9KwV9tVhfDmk5eeVsVv8ofYLpSSHBMNrpKsgdWztxna",
  "key26": "4Zgtk9W9JspQNZFqFx5VU93qw2ky1x3GLqQ1m6kDJNuuCPbfc7TMYB8QxnyU5oTvTbip1HFPUQPvZXxHB1JkR1Jp",
  "key27": "EMuHSB5bmUzHBaLmsqwW2QzxazDFUh4UMcHjhyj4ndo4ZxLfmUT6v7Y3Acyh2AFcLfMpwnsLxAcTWdWkxqGnvqK",
  "key28": "4prNQq5Cme47d7QsNFK7mqodQKzn7fWZtDrHXMDuufwyieqxDhSXxH71Hm98P8YrV92PojLLS4UgfCsRAzB4xowh",
  "key29": "3EhsKjjGfEGrJoB2QfNGNip5nS8ZfhnpMLkjvFRsJDe5EwdZFTWzapazqAD4i7KAZbZ1HPWth8GvG7zPnVDbceSM",
  "key30": "5cR5m3fSX4dkWVjvfqczwSqvDyRUtSLdr45ggNd11VuPrNHFgknkojgPS5J8ZXooNKrn56rB2PDJVgLn2xaPFm57",
  "key31": "2KJLhhr8fiTtgG5fN6ctEsejk6WgVMRqcw6VbDZ3CmnMMB8B6Fj82w51AyBfEGGKtvW7yoxUeDsVBRjtwtRchApi",
  "key32": "4M5bkfYQRvoUa4PYDevgk1iGARrKxY25CvfWJ2tFTjv2GEACJG9okKfV1iFppfKUWewhN5s5NkqSc3aLEMSWw97g",
  "key33": "4Q27prsotj86oFuWqDo4WmE24yNNK21RThsnNuHekdkuWK9W59ZqdT6hicR9eZJkgFBbUQ2kdgemcWe2YVoF14gk"
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
