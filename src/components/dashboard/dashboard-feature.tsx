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
    "ejgSmM1nWX7SxSYsUwt3vVykaegWMj64kQsu79Cmu5HcHBf6NVRVVhxDUMjHgedE4aKq5u3PLz1DF6B3Z3ZSAUe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L91qz8WXnYEnXuy2zsycyHGSGnTrb3Lc6KdL2yu4Z1oxui3i57Mm2TXpqqGvqj7116reNg9PMw71P5GQkz8bRTN",
  "key1": "2uw2Lnwz9SWuJnBkDA9CadRXhM9cKQ2sWki32L3EHHZPKmqND2FwAUaUKbpyG3RtsSo23fbYgiLLD5FfPfaZkfvX",
  "key2": "4k6WadLkERufWwLyCS22E8T6sPTZ2FLue9odk2Uon699ue4X62wzrP5zf19J69Z5czX2WFzBScWAGhpsS1bmvuMk",
  "key3": "4CWGXYkXkTKNFEAorCySfQqSXqgZZnC8ajhXFvK34JbDxFqSjFCFjRHPKLdPLggcXhgdJk3CiSmpnL8MaJk5Y2XL",
  "key4": "4H2V39UvuJ4adhLUpr3VnPaF173mEQNKpHdaUoyTV8yeqdYWZtzw8eNnomiqj3jGqaX6SBkxag4NSe4PjbRN7Uj5",
  "key5": "4vPVu77tZSVa6CX8jojavJSsUTRE8hR4fYvYsXyUMEwhCWjrT7uUjgPseoFA13Ltsv2XANNbiqsEa8LpghH1c83p",
  "key6": "hAeMkYLWPGdS9otzzoXyxnJndzjXn79SfM7EpaxeT1LYZfTRkN55JfyLiT8uXfLVqqKncP9gu2MywZ5sUkQxh7e",
  "key7": "5uePYgCUgyd3sbyTnH6Bvi4bJADzDL5VyRMjNCzQzCovpJ8H9H8cAvWPJvBed5kL5fV8XaHPD2pU9ye7m8sVcr8Z",
  "key8": "2KNxpXkEf7qjN3YSZ8fSNGm6H3J6QNzU6YRPGth17j65hwYxPk1NbM2y6EXp4151Veodez5LE8xThYpDce8CCTVZ",
  "key9": "4uKJkkFeAeD2D3r6PaSGDGsvwH3MUwUkeaKi7v3pacyYiDYwJ9Bxd69zf9ey4cAwfHmp1zpy11CCyX2WQwJS7rju",
  "key10": "3vi54nAoYRzmDY1zyaP2UoDq3VtiBg8dn7xYnEpnUg88tf4hVgW5TVoxcXY5uqMv6m2frkXsst5MhP9s3FxeC7Tb",
  "key11": "3qZUCKTQKjYfo7WRX2K9sszznqdzyHVCzXnPX7U8AMLHcYFbnhtTn6jHfWmMCDYvxvjxaJfTFXjR5bz96LdshpHH",
  "key12": "2iRRkekBMoSQPurN9imXnhhet9qGuvEFme9tGDw5gjHNLLwEDNhTCCPdcfJxYGdASyKJNDx7X2pJg12TYbPvWiJC",
  "key13": "2aj2485Vi9PQ3EdQQrwY1XvvBjfYLeJvbWEEUqaJ3mbSQGe8qQ9eTKj6DP78jWE4bxGK5nwgQmGgUXnNuX2HbN2S",
  "key14": "4uc4dggtwpbTDdv9coTFYeiDLUwPNtX4w77TqHcBnYKCMtmd2f3tUgEX575Wy5Jc1rmcz3b8S3Ep97S3YrdqC1zY",
  "key15": "3Fpnv4eqJ6GcvxwgKA21p8orERiWKN9xRbw1k8RUy1hMejAm9toRDuMQZZwwFLfeR6S9qcSZp6cmUpFku4j2bwSN",
  "key16": "4cnoKQGZ9YZiVUw5gH9Vt7cQzHYH3jbygLoKWYwy6fRFMnKyq9sWoQkMxXzhCvVF9MeDapprQPkMzBSZ1SFj6g5x",
  "key17": "3qrduPXH6o4iwfkzTskgcuPy6yi2CCJZauHHGycBGUgwMvqFzfbD8dBKmecSRZJboSfFhKXSMeBx4XMLbtsQs1h1",
  "key18": "2u8MkefcGh5dMxKCfmb2uaSyUBrZN3e53MjZVEYy6k5WxGoL6HvjodgLM9n4b9mziKEGihcXRAAmZKbGJMcCvhJ9",
  "key19": "5ZSYKsrXkhQCzu37a9SeZQTXt6N4JucEa2d9aQc3dxTkL97mr7aNqsuVJgrrjnxnyuAXsjwBmm4uM3ysGN6sf6Zg",
  "key20": "3pfqD2MKWBzQbZN7yZC772ACimh8HUvrHhZmdF2cfvYcuwCYGaKNUbDdpM2NqjRrbNEFQJnewvrJJj9PdcyTmHjt",
  "key21": "4Sq7yXRrzXkQL7BRM5VrvFckcVmeGtxWXbQyBRkMWuKDz8Fr7uoBiopDAth7etkzMkCvfkvzvsDHc7qDjP9pimXM",
  "key22": "3ojDfCffw7n9p8JCjGRCXUnfkPDkKfLoU3hst4Pizu6rUzPqT2wGKdDSGMuVcvztVroC15RmxAXy7rVxC37jVCGF",
  "key23": "2WPze2ZdoBrtSdiDVcCirptM425941MLRd6jFHmVNtAu42Pie432tYERMY4xNfLqnQfxdFX28kEsz22WbArfsswM",
  "key24": "4buE3JtK1r2qESXy2MurCCPd7YE4umja3pG6WbgfgUtDd7GvJcQ78Z5LHmkvkD38R9dXMPYayUssjdoGefjs4TeR",
  "key25": "3eV2tsoK4YWqTesPo9mnoU2Ad9m8881rNgx4EXYc6h6k9obzTUCtFU2cpLE1aFm2BZ86YPrLkLQQA2X242SDjUBE",
  "key26": "5BDQ9vcWTegKaekBgvZsswkxwPdogb8z3Dt4pcFpsX7RsQ3hnm6gf3JUnttLYPNYpgRnuv9LBE7Ben4NWBeWQeXD",
  "key27": "5QCyjzsa6GqhFgkVYwyVUY5S9JMvhriZ9LRf3uwPBmzy6qPYxnRfsAtZZq6pfsarPJ6vyT7dtPQYVicL2rwG9kij",
  "key28": "44LCVkeFoHiWy9uPs22cEsCyvBzLpRTDajEWx2iQMhUY2aKKEmJMZcLjb5yqGTy5cT7wsM4p3b8MEy9syeSC979w",
  "key29": "4DZP6kWacRkSMVMEoC25XLC1pZKbn6FB7NTFkeudjFq6tp1RUEbUYnF67uCd9bVipZ2yfZr1CYqei89ZV7bSqejq",
  "key30": "5ZpsErQhtXKiLELHA3pJqApKrCBH8XdfP6kdAoiNU4CwLxagAUbndDvjHmegw7M4JC7fQkdGmnn6Ludb2K8Negad"
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
