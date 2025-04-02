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
    "5zxo3DjT9a4kSa3K9yuUUvjJpENNW2B4KyMPv8ZovotHz4uFpzmsFV1tTgkSAYgyYbHj93nHWxCdGpevdmAq3dPF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49WqkRQoeMT48R5eb2cXbEEbdMSzhqg8v9eheDskTjAn7ByTNjaQz2Lex39t6HMDm9M5pwLX3SkgkMdLHJfP69ES",
  "key1": "2GTFxWX2PZ9fytitFQkzzHb5V1sufg6B4fRBheLcwXsFPH5LzE3XNfbur9gHVyhQ4UQy7b74UhhWGGaEEAuf81oh",
  "key2": "2bGdVoDFk2e1hEFtZfMZ9D2oLXBskMYrvc2QAoPJTifcLx1LUZ4v5fguR3BAj369e5RPTKnvvsEr635vy6t1uqbL",
  "key3": "31ppf1xmHdpogZwANvFUfbEQuEdKbF6tB47tHFnCx4jxCVpgohAf2mHSUrtqNBokbNfQDhDkdLwyc5nG3Bwrhaxt",
  "key4": "3SeJr9cpSYfN7JNGY8ZmpwQgAg6o8E6h326LeCtbonYifs5M8qixgkpdspCeScwXn6uteGT7AhR1mHQV2gjjLcYx",
  "key5": "2U3T8RmxgPr2UYhemnzkrawwC3XKYZ9Tba1qCTh4to6hS5zK4CoAUhmg9iTG2dECFMrFj6Y6btSfK8gDZTcaXXtH",
  "key6": "5GQAcHbJF2ZiJagEuRiggxQp7E3xKqwwpBU3eQBQ8freBnkfYYC6Q6X2TaYGgJ49Z74AJXfG5VjPkvD9KL6df4Dd",
  "key7": "C3571Fn1HLCrDQhKECcVz9S3KduWbQq9QSvmJGh9pdvTfGktyCi6DFbvJiDTT4FZ4uSmoGaPBVUqi2GRSbDjP3M",
  "key8": "2UR2M8oEHcUqHoqMThK6cA8dPodMbWaGHaSFxNAKZKLRytpKhKT2qhPEQn4XRHNK3Foroy6eXYEb2LvW8TEdSLdx",
  "key9": "2DtAkPMK1neg997VAZ49sxhDjBdum4zoHuJbn78onaDBq8fcAiWybLUYxeFn8yuKX98V6uDGpgYDHGfSEFEuTeNE",
  "key10": "dPgb5BSxJ6qnX7cKryHoa42UQvZ8k6H3FJpcsryfkZjWcjuN1Mh8shAUzHy9tmWqoZkDfCiztX4oULihPyRKu3U",
  "key11": "XnRuRQ8RzSoGnDkjBfymmMWHwb9n3gyLaSa7HDhQTGaFf4rN2Mf65wYtX6HUKhViDJyEzXivdT1ySVos1hJw2oV",
  "key12": "3Tw9Bjo7ujDhDiCMoXbtitxRo9qtvP7DkZLMRnCRcBdebPcLjpBok5PyjTinoMKBtxdgjqqYPxwEXs6bsf5BmpfC",
  "key13": "4pZMwBrUJPpP9PjCvW3fG7s6offSQyDtUYX8TvEmVJvipN8asNbZiunMSomZFpt12KnUEhfw1NWubzJYcdjvonq9",
  "key14": "2qrfRS8Lg78kNEysSikwcwYAuXzbn2iZmcGhVp7RqTn3kuytntTCZqMJvNcmirSnqBUuoeS2FPSniSLDmRsTb8GY",
  "key15": "JgkpteCVKBHNmrxUcoofttcaLgrZX5oZkBtRsf7q9ZU5gDM1SGvQZc4P7ME998qeUyKoGiaB27BhkdKnZo2QmYT",
  "key16": "3UPHBMZuXW8gDApLQzWHMvG7KsspoCZzm7oMN5ChMV4PhGG3NUspHrk6w8oWRDuwHmVu4CMdWsr5MK3zDYdFvzPb",
  "key17": "5udWwHH8bBuBWJSygHU93otHwQ96wz4dFpTmr6qyKQrhxxRd3CVB5YxVs6F7Td1PJnp5ZfX66zVLYGyETmA5S6zE",
  "key18": "5MfXZLWsucPB1DE14C1X3EoMvcmCWweymgVLbKZJg1Lfz9kQDfCsRZTBBUjWxUr96c8CDym4fvnivazaCPJB3cpp",
  "key19": "3dHcwDEVh2A2pZEW4gfugrcr1mEJTYPuWs1SrSCeY65Ye7nCLQ8eL9CWvA1TCRcAoE82gL1uH23ctpuLT7u8EUkF",
  "key20": "3obNp1hMhfatAgdH5NiVTGz3q2cC7UJKi3xgxXuty3uaK7Y48eEq1GutdK7R6mSSecrcYYAAHw4mAicXtN5pz2c9",
  "key21": "5hCZRQtewZ1aYBEV66khSYL9pv1sAZRhvP3nVFbCUuQYoqqAaaDxjchzVp1w9qUcPfj6PnqjK3cBGzsofszwFhS7",
  "key22": "3WJduW4D9YokJR44Da9Ab6N7kbd3kSFjsz8JehYEBEJkQHPXDbnJSpG29QmrGGkuxstaHeW2vEJt4v7bDTpVXEW1",
  "key23": "4mTujs8kER2LgwDRo6xdogWSH34wWta6XxE1dBwRGDK2XNBHUEkXnCgHkaza2FQ229jqxcErwCd8onASvfrJd2tJ",
  "key24": "25SiUt5Nx5vbamnYuiMq1JVmuHDF4JLtmQ3UUcfPz6A6WDDC5kpsP8p2NxHwXNo73utbWcmFeVX2jCjVF5schBkY",
  "key25": "4AhEjw2aByB4tmQ4qCTkCe8icw4dYPtAWpZsPvNi7QM1GTWuwmYxUhJ5WAN5GZE7rbjmqwJbP1fzk3iBusNN4fMK",
  "key26": "KzJ3uJwo8sM5D6dimTrDMsrE3gSs4swaf1NjJ84o8gQXxexyxFnZYm4ihxzV47VzLhdBZD9AB7sXjExJ5wBrm98",
  "key27": "3cnB4BBQiYcK5QVgikXQvcdjAmfHqQie9sQ7d7psevPoFgx93fFTJqLbA5SnSPWKLKGxc9o7F6vXzxgih1USMsaG",
  "key28": "2TrvL4rPwNgxE1TVL2Urymu52iuzJ3qzpjU6XeRXTkEzqUX3KYNMW74UYih5L9hGzatZHw2nYky2ewmdFqmjcmJG",
  "key29": "42ggQ1sdQ3WDXTTkrC4nF5SgyNVuys1E55vsgvwoLo29bhWPojU95XcrpjZ5XCzs4qrts5oLdVUHTeJBPnxZwop4",
  "key30": "5ZY2gBRa3S7Emga5Rs139AbWUzVr5QbhvR1F7TzirfbpKGKpBGjp72NsW7Yjy9MVg6Z2F6cSdWLH4GNM5qsoa4u7",
  "key31": "62EniHHidwdLUaYp9sxBonRB2yjryrCxJHuwdjJxW9pqRF9u34Kq1HWMpy7ZRrY26xYi24Xt8pZxZc87DWHfcTYy",
  "key32": "4Pfwv9h3AVZhxrU2S3grfjdxLZ3wekz1czTaSGC31WYzTJg3gyuKgrQsrJHyCdui5vX2jKd7AHzNL62iPChiyb89",
  "key33": "2dpKUGRV2cWyDTsfW894VYHaFL89yuNnYHQn2nfUnMZUJfC46wabHSnhPueuu8zHf7uXzfDjKQhbxrrcfEJ4p5FB",
  "key34": "4kokH6vTxviBfrqD7wX9pKBpYERpH5HJkRjWxNnByWdEmmTTLRyZz7Bu4eSjzNXnLWKRyjwgW9gbv8ZPjEYRsyTA",
  "key35": "3yRPGw4Akjaw9HAjFFEeQYgji3kUcua9Kwh9Ctxsw9hYrE5GhGFejWQZeAQf9hAF3sGw27enK1e6QGpqZD4NihoE",
  "key36": "2SK74YR9HxwhWDRMJygayynsPXr4FHZkXPzKtZCc9s5syctJZAMR2k1DrnsXkKNy1ezRTw7PtdxdPqr6Ypo45DC7"
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
