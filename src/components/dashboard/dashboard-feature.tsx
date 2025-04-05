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
    "4s8X2AhnSuobg3AL3SUZp8sdQxC47SJtXwuXG98mvuxAV6RHHt9ocEgsHXuB9HzRDSpfRZdPbjf5r4d8yfnLySKq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M9sKEhyEmg2wdZptgZYXYqj9YRa8n71bUYjDRy73XVhjiQSSwHDBgCxvAJAPaWaekS7BL6ynM8KrQdKKt8omWBd",
  "key1": "3uRrks8FxgBViUJ4ekojvFJRdNSTckVB9SAUP1RsE5CeKgm3KDAguyr1kBsSinW2GwQumdTv6UWfLeSZK4TjsqFe",
  "key2": "4MKr3eW5kegTZ39jVKyMh6nwd1VCKciuvkGVKmxNnromJEFfjHooeekU5uhD1o3Wd8TduXMdffJKLptzZceDZcAg",
  "key3": "5U6FtMgXBuxfALmuEfYf4xNAjQt9zP6xQ5NzEukZcdMRxPV6xwNqgpdE7eT8FUPg4uYXDRYp4rgvowwkbAVWZGVU",
  "key4": "4cctpqrq6YbN4kfc5QXN1i7jw6ZAfLcu2zbrMHbgBJDigcoGkP8stseT6BiAN8GfGyUMmJPn4coVLWPmeYxwFpQM",
  "key5": "3eos2KTaLityFJGfP7ZXdgWAU56P2CCNBduTuETnsZoHqUBEk5eUXcB7C6GZpQhXCn9rF7AWZGPedEhJMJpj1Zhh",
  "key6": "jQCPKEZhbTUReAqC15qMLGPvEhCYPRTmgHNhm3YsNEN3UfrayqNAqnLktsgkVcvxy5eiQHMJ3LqcYUVTTGAePPu",
  "key7": "2yHE4toVsQL21BKuZBf34R9HUHTMEQuUv7BPkE9UTdTH4bV89EMtW68Voq6mn4qgtuVihUCCGmRvH8A7HAX314Z4",
  "key8": "5i2UeHtHmyWN2NvB9yT5hCDhJSiDiQFmk3VCMU8fnSmC1gdiTm4EBkGcV35bQz3zHJmMh8oKzvE17HrTFYRkvqu3",
  "key9": "2W6XaMwjyoX2YsFFZaUQkqpVeKxM7sNNBeE2UHK6aihsyKYjg3Mf299Kc4CJofpnKTBYggCKdiamFn4R7Wrjdjtr",
  "key10": "t6rSuvqV9pg2g6oaRaHSDRF17t5b6pVaiRSxYToGgS7BrCYpeXrMQN6MqwdyowXEjMb22ipRnHRpej5Upudph2t",
  "key11": "4qBPqrqSJbrXrq4qGZcpEbJywRDGHRcp7ymbp6AcHAv4wHqkTUsYWt9cScqyFSbeiJX99iLQPoFnx9e3nMdSSpQa",
  "key12": "3yzwz1owEPDMmicexDmb1X9Xd1XLgP9JX9M3XoWDGDtCwzKsQC85fc5dyyUgJdNASc6mi2uDEEbLq2eaL9ykbjPN",
  "key13": "51Ynh5c1VxHzP8nwyBfhCfwGn38eK9R6e5wA741GW9jhWWnbTCqWyXwMApuJxT2NLsqPVfEGkEHUXEkmQawvh8D9",
  "key14": "3vrKzJR2h8os4sDfKitvESUkJJT2Qw8WXVsApbpgKD76aU1vNPsopx7EvKC1ZJBmEKzJ4c2SouGBn4PFgfVkcdUA",
  "key15": "5Pyxs4kc8nFGMMToTc381xwRE8PQfoV2qHojupNzANjbSwW8ARntg8ehP5nicHy5PcdjVMQvd48qkuSNLpqPyCEq",
  "key16": "wEf9vqnUqdoig1PZEr29fdjp6eigQPcVx4AhujtpqaXY5MKewiN5262CCeGxWKZGSK9Ch8o5Dx9mjbLyvQii4A9",
  "key17": "2XQeaQD8PAk74QXCUUB3m1GFPYYQkfJed58edhqrx2dQhhc7C4JQ2HhCDCSC4ZvXwiiQNtHB8Ee1AemPsXQ2Jx6Y",
  "key18": "2SxtoY8tm4rp5HVNHq3bRfrx7KTE22RAZCC8x3EExSt4Wrc2Htg78TR5PU5YxkHb69rfdpgTspJ39PPeKf2Dkf7w",
  "key19": "432g4kA13k9KxkPpjvsuCdfVLMCFXesQjDK6kdjuEECns52WbwU7TgGgUKqEzswBt94Zgs1u7iNkiSU5gf9fZQZF",
  "key20": "4gSHXtqWXAPzBR7N9uVo7wKvefGsRcU1gPBpb5qhsiPbPPD27ndDSXDH8o3mrH8aJkw3cU7e9ugQDG5rJmsK1vQU",
  "key21": "3cwqVzU4dimhNHPfPc2xSMtt1wsJMRY7qTFTVs8dkgZMP8vzN83ZynqrcaH7uM9BMbVTE49LQzDi6pPYdZqysL6X",
  "key22": "3fNxwN71kEbj13AUxfo93W8UQD6u6tv7QpmGvgzLRDuM98s3pFNiCqiVfa8myA8FeJuNj7vJ78umFZWnihLDnX6X",
  "key23": "2PaZbQQDejh2DDPGHgNcVg6KaV3i1LpkqJqWWQicwP8rccDn1JGsULs5CE6KgWKXS3ANrjoXkYG9Ty8FF96w174o",
  "key24": "2K1XTZLyxRNBEPENLi9JsHDpk6vmBvyonjTtGtYyBQA47M3Dvdpg3w6R6kgWNowHPemFbppecj39MAeKVabcjaSX",
  "key25": "xtkJGAMwEasoF49r5QsQcJopWtRN2u14nJrnVHRHLvw5HhL32Z2QGwJ8qMAnB7tLnhNSAFtNUj5R4YBF6We2SPb",
  "key26": "3JiytzLm81Mg4LfNoiRd2YERuQpsuTkVdDzUBsjhpRHb8Fdpu1nWAf1TcbKD9WUp1Qza8CZmMApDQqXDJgzBhYFF",
  "key27": "4fcGP941xxGGkRTbX1WmKrbDEQTodZ1Rh836XUkWaSPYYvwxEXzRwYKsQJJtQ28s7Ekj3DhE2Wpje66aUsMwn6BK"
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
