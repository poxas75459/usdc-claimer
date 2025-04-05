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
    "2qD6VUWjKrVfoahcAVkLQBqsuqFnvHTfzHExyRbBhfg83fmm3bqaW6UzRUaSmHNgApUubstPUdRjTMHUhHYhAa6o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C62StADiVsfiMnAUVHDCsu169nPmypDdD5p4XtRvTNoLVzmqNmhU4SaAT1zLMazX67hRV7zjBnkdMAspCeCeT4P",
  "key1": "WdQfaWBjRPWh9NNR2orasRbz1pYS34wxajJCJG375zfvT5ujNttxQCwJPoJMi8TsPDEvkeRePAuCMWQYCEQnE5G",
  "key2": "2v2taCN8DrnNkNE9fdXJ4MHMUkfADaXWTr5sMQC1QUkFNxkirZTMhX2m4fubmpeGaTwDDK3mu6eFsJLD4d3e1JkE",
  "key3": "5j5vbs6fsLeynMLMDxH3HU2xf6dFQvzY5jRpGGCgDFgSxNVMJkUdFc5VvHFNGkszjh74VuEM77G1py9kZ2dEgLw9",
  "key4": "5xeLjHAC5DaJEVXG4PB857ZrHW4HdBMe9n4599GGNwSLFAxpVDzoDpsgKeq3w9mt5coaKavtXE6qxF5hEdf9kJFS",
  "key5": "wejnJJSDnSzQoNLq4iUzL6z7CzHBFxa61yQHEUtV4CXzbTMcwKBHpKyHb8rbYUg8zb1wHKVbnCy4R8EZCndR3px",
  "key6": "39Yas4Vgm8fLdp5L77yBM6BxjSjeYDU2eZUb6WH88bGxv9YX84eBcwL6cMVRT9WUzw7E55kLaKUCQ9PquxQCgbCG",
  "key7": "4ss39fxuq3m6e8bJCBQdwLbDNE7AWjs7PV3C2P9gicYeyuq7DJ5SGmcdt2DsEUn3EpykaRoktWS85RgCKV9L3Uhn",
  "key8": "3P3wW2um3Q4WuwzYqQYvvvyWKDAafNzuwPD4DP3otdnrHGBu3BeebV5orJdqfWogSKdM3BZDXLBgxg2D9TFqmyU9",
  "key9": "Nw7KS66sRmvn8C8e5JSsfrsoKuSbJe45Gq72QLZen4piWX8fRvcHi1LmxUTJ9KZAdpocBA9kYFL3euaVWvcXS3f",
  "key10": "23TaUCx3qdyX5P5s2rCWsCLSpscA52BQixdRrqNWYVwvyd7Jym1QUS2ME68LRrteCHAN3d1ohR1Wm4fh9sJsQvqY",
  "key11": "8P5thvo8T2G4gu4i6fH1XsG8qhyAqtra3ptKUxDvbPnp59gF7WKfLJmkGkgqcpQdc9r4E8fvCC6YPazdVGba87q",
  "key12": "3Z8fPatVynT45xwPxNrv17ncHKGqpJqS17kf7V2xkPpvcu74poMzZHnhCJFQ7jaKxQRKVfZrHcTFzKjByyknLTwd",
  "key13": "54mCN4fnYaVnCyb9Pc5okQpNmVZrwaBQV3DVRJNYEmzL13DGgL5XfFMQSArQHmAk3oyC4QrpqTgyaKtABJ4gMv1h",
  "key14": "426ZihG2Wco4PmzeznTR51HiJLRn7XV3VLdBqyRtwTT9tYzMCZbhySTxLcryiBQbrNqds16XqN9RBdtjM9DBBYMZ",
  "key15": "VnP9pMGbuqUagdP22rPGKceocX8PSdcxtHAaXQSuFT5SRv2oP62W1DLpu9pvq7vNmiEK3FzmaatjTqambZmdtep",
  "key16": "MBiXTqWJUw4sTRY7kkPW2FvPym9NYfakKRy5rK3Cc8g3rfbq3i2pWgQbihnEi8m9fUUpzHAiJXF3nkSBjQY1Ezs",
  "key17": "maSHnhtckfS54qsKgrJeXY64ZW2QebNaTWfQ5BXzWJjnaEQWYNuqvhmXNeEpEj1hNNAQjtoERVvYc2Zq2BXNKWe",
  "key18": "51gxWKpnPGmeAiKtvnKSUL2WySAbYwwiKF3qLiQFkH4nVihVpPty2qqvdZWWDdmFxbLAbBjqL7ZTYpUFEhjfDA4E",
  "key19": "5Gb9Sht73gjVMAzAEMoo7rsd1eZ7DSpG5TZr9gh5DaCa8UNiMcU9YXf6W3Qt6TzwzyXRGq74ZdwPnXztjFxS5amH",
  "key20": "2WEzP7R5ni5FXQriUGuhzN4nQpdgJsPHuxUgdBjL7t5ePfqEW9tSqJXQ9jCDnD1aUrCxxYvVvwAUczJRU9qHBk51",
  "key21": "3mxH9bqoByywVYMMYFTDAhH5qtUALV9LDAVALt3xd238DntgbKVSC3anVTYHsoMzL7PWdBuQH7J92LwzyGK5VKGN",
  "key22": "3kYxFXDQpkptaddeDnqmHc9NUxwAP8CHBRbU6TMtNL8GDhmBc4agyW2cp8JLY7tbhw86vpuSBUNPtQfBsWwWFq3x",
  "key23": "42X8TyDm67boSTTkeBb7BYp6U9gzWAJ4uNXGd5v1DRaeNKevcJhtTysjbyqe3QQWM93UKc2poyt4kj4RstHMYJa7",
  "key24": "8c6Z9wTY2QXUfLHCTvFjM7EiAm3FVeYDnpzebWwaY47K4rfgBEDMkR5bH98EKWJCd9nmveY77kYyxsQxqqDgGY1",
  "key25": "31ykc2TyJ5gXPq67J4vSyEpuFXmnvKMdtRdmV2tNHqMi3d6Pe39sL8PhHmQMYcQ3tKhAJEgDsa5QdzZWbXPT1UtU",
  "key26": "61qd311aax6XV5nymakYNYgA9fi5jLTBpKuUGueAKUZhCtEUcJ1EmYXqdgPHQAVWeqXyWuYQnvJyYbJKyHaAX7m2",
  "key27": "3vd6RFF8GGZttJigDpUnTBvyVc9ZR4UDSQMtsc4fqgjgvVfuCznPTBzvDfrynqvjjEnNK84ApFX9xKTiTx2wKUB7",
  "key28": "4fSNM1svuQ5FNggrXDhJY14E44MycM1J9tPRX2RXnkFwg13fkQEuhtqHh8Eyh85mVBie3VVpnTHNwauGzfFCGScE",
  "key29": "56EEbztDCXHezXrmibxt1T9FBCpBq3V3Pz8ZsNSKVvMaALgN7LU2H1mv6RQBeHUnRu4koyEmG1AW5SUHbUBPFJfg",
  "key30": "2PwfFNZCF2ejpBsKJhN3yBFdf3d5MCLotpUD5tBc36m5xjSToq6VMoU1Shcm9txuNZQUzYtiS8xqh69QyCLQqy4M",
  "key31": "5Cf5jYDcW6QujzyjvrwycnvSp9LRf9Zote4Te5fGHFaMqoPLyPgdDYnzvxjDjspZahaSEfBzJoHfeNZH75KwUCoq",
  "key32": "3oyBTmusRPDr5U7AKfez5ZryjEGkF4dQbJyWgvUB7PKGiCLrzWcvmx7K1eVwyzw9GiJFMVRGpg1xzCXxeyP4ppps",
  "key33": "3yGRzQogPUXGMr4h22V6L9ovrUnjzwZTtZv1EAPawYq4m1gUbFqNTudMqg1tJixcV9YpKYLZAH2eESKQkXyZGxwK",
  "key34": "2d81UvMWBxS3T5E5opYE1vYR48922vdxrY35HMKXadgkbxaUY2dQUoWw8DYRVtEPE3azVBpU3kYFLgqEWJeoZ2EN",
  "key35": "2uBREELdenff2XeZtqHb2F2CgPVX5ixBuThE795qJQsFmWpQyT1HrUPmVLBWHqBb7bVqbnQgUmNkQkMqxCR4XwR7"
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
