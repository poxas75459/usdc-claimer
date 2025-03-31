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
    "4SCMvTxwJ9zMhF9eiv4w8w7GmXPDF1vtyXGmfcwThjWRUqSzArgNsAsZsUhMkhq3ThPzo8EXRfskwPrUrvrNZtji"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28UhaNT4tBCD2xbCwFbcjmnbMo5vmmUfMUQxtVUGn1diZuJFCJbWMwNHuw9Ty3ctY1XGwzN9F4jNCxwpPtHdZMLv",
  "key1": "644SsB8Aa9uciqgHW8K6mjSTBTG1ERVbFpjYfHmUUfg4yEQkHFMoDix12pviwyPzQ9UyoBPs2nFzKUz8Xz2hKnFa",
  "key2": "zkEQRysJ7xerFBvRxGpieZhXWTokTg7jWtK1M6duJVxtrHLa9WuZCD7Ajzjbsenhzb6ZbrZ9pc1nR2TbBdcZoor",
  "key3": "4k9Jne13ieXYPjpGMvRecisYQRP3BkzaLimkMRtxvbVX9Bf92fj41poRJcystiqwQZ1tDDkyaa9PkQd7Y8yw4p8t",
  "key4": "3A1dC3tr4GHj8GDFeA3qobxzhZZUgh4CjwPobx6oZrLtemvhVLVzwpj9NB8a7gTXSncn5McxeYrxNxQLBqZE1yZD",
  "key5": "3AvQ1DbcgeYdoD5q1L1KZrYnfv2sxt9u6vH6aRSm8Fy6eQecEVNECGruxRphuRkHZFFA6id7rSLT2j3HBtvN4nWh",
  "key6": "hhFFQApiFJH2ASwpBn9aDmvag2UV6KbUTHNUpL7M7ybT9H2W6iMzqEMB6m4Mb3iyi4qeVHKRAm7hDepHnc385v8",
  "key7": "5of34uqf1352EXh5MrWdTxEStruqQ3K2aWPLnZQF9JuWELzF5Tz5EGVN3L5UST9Tg9H6PzhAFatjdqkbuiwRnaGR",
  "key8": "2bYeg1d2HszeVvB3AHP6fx135HZ5ukHWKoiqqbrAEiVKcfQ2A9A1FKXeH1bwxQjcRxwbqgE83EtAEDDtwEpGaBG5",
  "key9": "SpLFLyxY75YACinQnfb6jdW5WqGY2RcsYP4FstxZx7D1xLhoGoAYB8UJTGoVhje2EDAjaLZwky2evJEEZFPLCsW",
  "key10": "3dgRdKBwfcQuzJi18omjFrkPTCzos2zhGFpnmwkGTjznoFN3cm7bsu6QEz4GVSK9bcWvHHWgjNU8Sww3RdcLMBHi",
  "key11": "4wRDpF7NZdoiEFW11f8aNT3nrS4wWzHRVjikVFvCnLSpDGSdcFH1VVjPfsBMAZwJCZaVConpFabUwXoViA3d4JcN",
  "key12": "6wUCoVc8kurWBcXKyQruCFbJ244BySRXLvUugJiyZ9ThwoEtcNYeWyXmKmLAGwTHMwUo66XfCNbi2V5JiM1kJzt",
  "key13": "2cqizGU6VTBpotcVL8bDW65uvcXGyzvX7vcJpyavK9JrWJ87bn46DF5aaFd2CbhfDPadfrGqeQcyHcNYGcLUs1KP",
  "key14": "5GtGKzo5PGPcmfvfjLsWJZY5xcZUA6NDwHyJEvgT3ZpXgek9JvM3mXZ6XPw5QMsgRqUVHadxVRfLpVLytpPJkvPq",
  "key15": "4D2U1iQ5WpzdCJjDA3mT6XbDki6mXpa17KHNCTSPVSYPhX5mhK25qHxqkUsW6UscLBTTPjjuR1q781ZQA1FpFkYG",
  "key16": "d5nTR4VSwuVMKvd4LYifruDXiGBXqnbzDQfHPzrPwwZQRP4KA3DB1zENUGouvVbnpYU8WmP7qe5iWzhZTc1kiNW",
  "key17": "3TSot1uAFYkCkXMmwX4B6v5YxVtnDW3wMvsDwvweUv1v14KadhkAd3BWAuN73BKaAvWQ5D1NnnEUybjKkTVfVJE3",
  "key18": "48ht31hoXCq5QTVRL6o99biG4TzKWbLkeeiyypHWKmQEizmRwVmMJuck4i9irNkGZe8DjNQGt8wWwwVzzTfyNmbj",
  "key19": "611hAADdPtrDprqKi8Jk99TUf4mcGNhZeRVU1zmYMFH4VD6JX1qCHa9hbjF4ygPnjZpMtAGcV9YmYMns58uxE2uy",
  "key20": "2mZcWAMCc9JwEBrUfffEDzQzB3FN4CVry22JZWpQC3MeNUGHhTFT2YdaXF2GaepwD2EbeKaFZLv5JXjuEk5T3s6i",
  "key21": "5zQGwcgxemRwwg3diKjayfazz8FxHTi1qFWhkPgbfjrEUwFZ2qMDJTfkt6YVaX3YVW4vYNVQn93AFNEVLekkk8TX",
  "key22": "3pfx16TxusMARfy8XeByUwx5JEcG3qNxzG8xXMqQr7ueik55KAzvMWQyhijfsjrs24oL45Bm1pQE6CowBe4BWDnn",
  "key23": "5BbuCRfdpqi1RXN63UthYV2LSZkoUSTHLArmNCzXnr3QJ7jwbsxvSfetAmKGFTPsWhdWybEAVqTRn1Q8wkB2jF5b",
  "key24": "2BHqHuwPJwZxd9Ko7XkLej4LiwNYeL8ZuNYPs1co8FM9qfJqtySYBVm3M4qRim2zBYk2XcsT7Juwjt1NvMgcM7F5",
  "key25": "63Lux3mPPVc83biSbhVEWr4RQ1GyQKwoLELXTmwwyQ7HrvJpWaVEPn2aGg29jiAx1euhf52QbqUrb4pbQUL9gnyo",
  "key26": "5maj4ETZ3QiP81TJMpQMYCtvD5PyZ97rA1eafJByZjAA2hmqKA6qGL2r1B1ZLsP4MKRoJLyyRVYNsoHrxKNvmYRW",
  "key27": "46Ttpn3RxgFxiLxoRjRR8GMdw3gX831Bo5mdu7dUtEGghC7WVc8dXvoW64y7RXs4F6HUPXVWmgRmaPHFjh27Y2EK",
  "key28": "38ZvczZxPD2mSa8qBXUWtnBEAfL81yyLTGX8uDUiwAmozDRtusQNKsEYiCaXzUDM54Npx9hDMv87sE7zu4eqEmf7",
  "key29": "3gHGHqpNQPu7Y68aZLX9gfq8a6y5G4wEfq7FZ7xPzDqM3itm8spNWKNgtzgiA5bPvFYcMzAzQ9bAxiERCwBqnv3E",
  "key30": "4kamwAXaBtcZm3cTD6Lf4LZrP2uNM44mArpAt9DuR3o7it7t8daiXenTtLKLaLyTGjo5aJ7cPYvgJdjooRXH2PK5",
  "key31": "SNH9Grfw99Z5nzfFPPCNmZHkX4kyKbR3usGidgwYQZbawmhGshfXp5WF1GhXN4CUDUk2EeBdutWkBD49wwUx8Ue",
  "key32": "4jbdvQiFcF4JAeY64UFNnP9Gv3tiUKWEptB5PY47jNpBrf5GCDLjw93fnyt9b1rAE2fzmuEBz5obEb9nCriBRFVS"
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
