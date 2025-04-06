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
    "3d7Qg6Gkn3VBpd85DYufCYAUJqbVGbBnvqvZED4AHbPDQwrTsdDQDz8zYb5hhidzabzo7JEVtArTGLsF2tvDU7g5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TopVmYW1171K2gP7eecj9CEeHWbKiqJQT6r6g64vmzzRHkJDsex1BSGCk7xHCGHsq8ieGbixq2Do7BxsLbTBHSu",
  "key1": "4DVzB1pEUzd4RM4RCQZkoy5YScDcci5N7fVbqaVD4jVndTyD3kzU8YvmwjSBCbrGVWAN8tSg4b7FJVk454NCWuLr",
  "key2": "2CpoQ4Q1FWgYkZfFbMoVQ4KPgANmn8XBHhgudL3vLcQB7qj8rHYV6LTL6wjE8uAE2sm5c4L3SZYQbseYkyrPwg98",
  "key3": "2eG8983aEBS9FbnHvNaf5Dmp1DZspzpnWnLhgx1MtHdN7sbGsqijHjzT3HrM9WuJVEpyGbvfE7Mhm3XECvwASn5W",
  "key4": "5Vpkx3bcrEsVistccsTuSQdygjRzMmDn3n8Hd7GQ1p8P6pDeHVmZ7J72yVjSfMDWxZhQnQxPNUMHHcfvshqNDWBW",
  "key5": "XnrevK3v7cgDG13Bw1qrCNbkaGczyheuxUryjzFK3DrxhnJxsrwqZjirHGvUXGJaVZErd9dzrzoZzddbkLJLJVd",
  "key6": "5sMdbCy2KUZdzQEMYzMcZWqjP4cXZXm4noKvmUfYFqJKCLVHHV1zH5dDN9yr43FLXDV3LJQGBK8U8shcHomAjyFR",
  "key7": "43za7jXMbCZ1suvmcVd8BpUbQv4jQCU4wfVUUq1wJvPfc7eP8vWJMBqaV6pbGF5UD1HLSJkHcch7dKXunHZRZM1h",
  "key8": "2V8bZujDxjDoEbbYrP6zVWTPQHQYYTMisx8S4V1QTQu9TaJSseSoqwYHu57P6U3SGEBbx5PfwLJy6qB5L1P1gRSp",
  "key9": "4hy1LS1n9jDexHVQKogeZ5p92e84HVbxjkDNf42mdEKztn7imtVEVHnNsS6FubMFGWUayxzoDxDnFWEr6uS9gzwc",
  "key10": "4yPZpjLxoUQvrp4Y5fi7ABFS332VBnhWEbfzyKUq2c2Fytv7Qo1zZDVXjPaA1V9NGP519TsN2pneGcxhcbX9S8eu",
  "key11": "4nESDD2qZNLaq71Rzq9WaetJuD7rDmigfQVrqK1KCnKp5cv3nKcUTX833XRhuZjaxzti1he4psntWMkLAvjqW94Z",
  "key12": "5yQr8yzD3PT9EhdqXokMkquo4yvVL9fRqkE1GF33dUZBb6cpuvpyEvxjs5Dr6jgFrx35x18GaR2SxWftXcWDcxd3",
  "key13": "4nB9AHJv7h6ZFyG6zo4up6UPhEhNqjDwr7iCRsnp2voNKLz5DoHdaY2MrLWxaonypLAKYVwT9iHdoezUkARGwpmM",
  "key14": "4AzJnZzhCgYtSpyrKPo4pnPkXmnXjoKTZ3QE94Yu5jMGtSPnSdoLNn3cP573XpHPN7c8Lhpb8xuATzcQSQoC2aJs",
  "key15": "44VrvLEaw3WaQFBUpc9H2EtEYFsex5Q5efMEY26zQ8wNbZbVavwNuQ9j9uYaYBPtWUGsoKaZmxqHWAi8BVNpWdRG",
  "key16": "2P5cM7wPPfeS11s8LsYRds3Tkjo1G6s6wnV7Y4juH1QoBsVCTmbdjtAS4doxGxtVS3pGAB53o6723K7GSvkjG2kf",
  "key17": "4GpELNysGSebZ6yCFb7tSJtmWJt379Hw7nNMvSqkpCUKYaKeAiVzdTfsX3xEK3VWXZahsNyqyUarwShQH4uWJEri",
  "key18": "DbzgQny6RMKju2iZwsxjw3ut6QuuAmBWc2ALLmo44B6YXdAosUbabPfzbTtHL7R69x68deyYHmDnBRhV74fLRMi",
  "key19": "4RN76FhgkTVZtj81LCVGZCDWbQEgo518Fvj36ZD5yJonjdTLcWcTiZeSybfiJxuDceKMYSSbvBf3n8G7559kfU5E",
  "key20": "4Mz9VGkvtGkp7H3V7G47yynEsNmhec6f7jE7GPDxh6ViEVq4BKYU2c5nmqBpHQ2yP8xh4bGs2X8TybBbDpdU1Mqf",
  "key21": "2Ekh8tbkq5eGb9Uk5x4UnuJkBApAuqmzsaY4EKErpRY9GoRMgGq4nApGJYDvsGowRzgrvacumSsCWg8HQMf6YPh3",
  "key22": "jJEMhaQxXabjxcGSaRuZGkDyuaXPdCeUg4pkrUYZ2tjTogfGSUWWxYUo4UAUi4wBtBvX2U63iT4eFxNmWYzn7VJ",
  "key23": "2WaE3VkYQnrLjKXMkCNtwawH4Me6cqqEQUyChQwd5kYqwsCQyoeWMEHEyRXhtycSxqPwUeXEMdsK7tHjE2nJeSnv",
  "key24": "5WxdudHuM8ZNW6W3AnHUcLFGVL4pZgotbaFXm3zRmopVsC5i3qLusuQjaGM8fn38dfAKGBT8xBQfyfvKNW1B4r7G",
  "key25": "2C6ucbJbRsciuzGJ1w1MEVweRho9kjSMB2g4tTbBU5gBhTVDKD8Y6zCdBuT86NkGM1CtpMVYKf2iYthH2EFrwDBC",
  "key26": "2WHsrLiMSrPGmNdA8GXD4MdxwGS4DXQHrXWw95tNzCXKRHYSCwRd12Zbog9uxy5huEWoEcfWnYACp89gUM6prVVZ",
  "key27": "5KMxpwBUrh5hFaPR7x74Fz2MhcD5i5PaajHQQpgcVeWuUmJ1KUcL1RGmwAXUmHaGTqiuDX3Z3DuTwWWKEUyoMGbU",
  "key28": "4oqfopvGgQKXfBFX8NBQNs9K8nd6eD4pRMHCHsixVdGH8g6qwCBteFabqpKtfgMz4L9zw1TbnWq5NBHYcDHCzMh4",
  "key29": "4p6KtSjKijkYxutJsUrHUmexLbYirZPDPMPrSLDKjkPJr3y57F92RaDiocKyaw3qCv36CUfK9oMs5PyqYeGCTyYc",
  "key30": "5gMh5LjXHqwUwiubjx9M81194cezvxtLJyxFqmnL6bHVFCmrLSJSnZ2UcHYN593Rhd3xC5aXGsn65f7Kt6u73tSQ",
  "key31": "5qvkuvty6A6ZzU8mapVrB9oEgbWzcRfzstyLo4LvkEuujBmsue88DFUnWugLfM7wdr1ee4iRcDcsKQ7QL99p7BZ",
  "key32": "3Rfs78ZojH7XCMjUGJdUR9kdJnaReqrD84NbYttRjfCgUszc7aNvfagtHYwYZFXr7rv7pc5bTs5FWMQDQWcos4KV",
  "key33": "4ayHLfoURFecXduFJxLTP7NgudS9CgEW9qoaFovFkHQgRjAVPYa5t8EGUHz4QNSNR3p1imNjJpqLkxfvJtLXwHQP",
  "key34": "KASxGRzgkN2wqbdNUQR7KEr9KcDhPWqKudBCYCmjWtnXQc1GV3eTJzampnEkNhCUYcHwznftMWG6ZQjifoXkQaN",
  "key35": "7tsftFj5fWSB2cc6iRGL8kGViJMHnXLPTHTvVt3p8vD9579kE6dV1AXZFnLwLmyWLgPWZct743ocS6ov2BjhLD7",
  "key36": "pZntHT7bDoqFKrbH8zFUV1ct1LTPknVoxYuqomFiPw4MmNVb5sf1DmbHAjnYHqFNMQLPZzFLh6vs3XZkfUeyG4u",
  "key37": "o8mMDjA6RgVDMda8BxXFBurh8M8M8LqQEao8UqrZpcMFbvaMkUfeEhToLBH5rjfLBjAVE1SCUSLc7jkBz2BG4K2"
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
