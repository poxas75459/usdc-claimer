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
    "hZ1jf6Jp143DnGxNZGij2GTLyZqUsCc9DXHWUSRVJL4wq79KU5oJGEKiKJ6xttsaWWSrWHnv1j8gpWAqLR8FX7D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43YGyHzcGUdg8xFANg6kLtDof3bEXAiXg5igkWHiAZoGV2SwyPjGXWFEMuJU1yNe8s7VXVN3DtZUW3azxpQTFMAk",
  "key1": "436BtCpTQLdt9KwkoYVric94gFCu96j4XzGg3qg67MtBa3ygaJXJpMXkfFZprwa6AatSdmmZTuE8Snmf4B61JM3y",
  "key2": "5EWXYsoNi6dMdV8dZENu1dQdYGjQ4gW6Dy6xLSXaRHQct7AsRZUiHaSxN8cL5TAmi2Apn317468wo2HyW2DevQDP",
  "key3": "4Eo7kDTjKiPBGcR5imPmXKvGXsV4e3DBRZg6ay4WTmxaRx3tGaWMqEZVXPFT3Vr8JKfrJAxPCMVFK4cCNBPqva4C",
  "key4": "4KBEp6oGU585XwExMdDraHUXDTkbUFbi8QYTMhoGU2DcKwSUDoWcekwe1GBCB9UyEgRpEJJTW4Zr2CDnJD15GUoU",
  "key5": "41ogzqK1gZJCXCNJrfFfYc1J8nAGc6qMLw8E44mZWb8i5AWwRkn23JCkwu1Wc9Ta8PPF476AkAsMbYavQvxAUVqz",
  "key6": "5SQrwebjVVEVwk89DYbWgb4P3xzF44fhddxrYUJugkebTKCVD7ALL28x1hwQF77Fe9CxTf9wewPyG5KbhgrdieY9",
  "key7": "41oVhmiqq1GVmNHm2k1MyBcyVi8Mc8XPEAkiJdtpzaLt13kXKgCpyLLvhNv6FtG3TUSF1J8ojZea6rYmcSZd2Q74",
  "key8": "jQnkMzYtJiSbsSdsjrpmCYigCJ5kBUq6DB5YXkLbRdEYo8vNvkzdxJp2oz6Tmsyup6ViZsHHcYreg6SLJx7fXky",
  "key9": "3Xxyc5ucFevNtyhdDqjTFMvcdpVN7Sx6QfmciZxHMr9sBex9gTRrECGhtePLbPLEVTBoLymAja4yqE9yguWdvStb",
  "key10": "5UceWCLZPSg6CBpQr3VPNL2Tg9LanLs3cnNvnWMqdLgV7QrVDN6WeyCzJVp4n6fLKVNWZcMX7d3m6d7z7PqyoLQy",
  "key11": "yakkSMWEUn43dHfdwprDVmJdB6DaqKkwY916BAue1f5sMLZTsrNrFVZ4PEr3xxRsqeeD4LhZnUB8QuibhdYh2MC",
  "key12": "5ebpgbw4zdMtw8ZRcoADKYytBaaEN27yWzvkhPUYkW9RBPSz38jQFDK8tfvMvUsoPtphXGPTyJRXGgPvsgsXCq2Z",
  "key13": "oqvZv8yGWBgYAdHwvfs4ABJYKGSqCBKg2ENpnr9pq2jE622AVJUJPDuaScs5GZmqg1eeB12xJTNB7WFsFq6DfWF",
  "key14": "4w7LXWZWjMmStFw5GsGGvgoMCWMnnnp4eUZiMJX6LejVt7mo4a3YMHYC7Y3wdUWDYgaF4zie8nXS9mbK4JFhpiQe",
  "key15": "4XmTu4oHmUj4fVzmHgmyXsmuzM3Rfd57nwydinJrs75x6mEqTAcKJTVFKhAePo263mLAh5MUBe6569HaNEMjDFYc",
  "key16": "3qyEgJt1ywSxeW7v9rVoUo7fdNVDXB22eKrVAKLsfayj3xPF2DSeaamXbYd43i5tr2oJoaWqqo4uJGyNNuv8pJc9",
  "key17": "3AQ5iLvSUHKbfFGFEMXoc1fQk3L2Fop4KFFLYYMybMApnqJhyZ65mLceqW8g3TmidUSdbR24L6cQNpoNWyh5Wfgw",
  "key18": "5HZBEL1RUyQYq3JHFhV1WDRoCzWDZ42swssEMgQb6pvi253LrQa5m8xLfECqMGqC1aB6iJkpqVKLGBURXnV8wBz5",
  "key19": "4VYKTR6SmoqNZP9ztj1PmftR79TfXPBkhL2YNB6tCP61H1cvVz5bzbxky9mXdRkBVMAnZj6oXtwahuRVEjsVSdm9",
  "key20": "5ytU5knZoAXGWWoFCGXmogUUcvrUVH2oY3iEmCjTDQ3yf9vxdR6KxJyM82HJCMFMqSaxpQ6YWHxKe7FY13JgTuKP",
  "key21": "qnwwMrrZsbD83G7mCvCnjJrKqSizZj6FwGunP5dZQ4dAQScpzi1ZpysZRiWwnmiBRhtj2Wu3zTwwNaVvnJVMc1K",
  "key22": "2MKXgkumVGYD8Bz3myes5BRWGWEsPDpbTfC7qrdnzZyESQqeETEG2gfiLU8hvcgaF7733kD4rfm8bJysad8PPAmM",
  "key23": "5TqSgUsabzMwJtrAdjYecwGdjmyJy49XunQ2ubp3HsUPmVPgzfABGZUuJLdXAVSs1AFRW1dyXmfcREvqUrzxzZi2",
  "key24": "4ufXNfkY11JwMW5qpJN2k7u2o7yux6EpJFsqbuAccAUAiFMJ5WmLA9vkwzmwQJVvczQhKzYPfMxP3UcbLqiYCJ8p",
  "key25": "3ccZfBg6fJ2qj4zoSddKbZ2fhkMHHukPAjREjMRUtwCc9VmCu5Tica26apzMqH79wmzpvHC7ZNWkEC5MoiNXH6xy",
  "key26": "58VErXhwS7CNFidNmFPbh1J6g8izKGuk9N38bsvdhkVJe73hJeqcZ4aYNgq7YA4U38srXSRhJ7gfJxZ7XjXAD2wL",
  "key27": "3iZm6MHvaUmbTyst14QGdRMgE7efGCo65hp3azTQbETatYoaWM7VJwrL1vyqbf2tJjQ9hx8ckL6Wuk2PQbXFJvt9",
  "key28": "36PpnXbi92ea2ebZ54xCiiFe5pJWfLCdvu3NxKjkY2FCNxcpkPK9yTX9zipxckAg4Phhn6VxfMNYp2rzcq2WdUPc",
  "key29": "33TAatndBtxJcR1s8KbghqVWk89ZC1Rm6KfKLJ8VWbNevThtQ5DLZgDR8yJDMJSoboSFXY3HDRCUWGL5fGxjfNfw",
  "key30": "5NFhRxoP7G9p1ieB6RJFehoQ1tkeqqJYhjBw41fxWcNwbN1t7wUJfqjhBDG27Xh4BwnYCb6rrVT71efCe6uVEyKc",
  "key31": "2cGuGmwnhyEhd6zGPBsxuXn4JWK5KmEeUiREjsb6yCG8LMGf8fcqANonY1N2kYYbNh7Go9CiKmzn86djuerXSuur",
  "key32": "1yeyjm7CeFe4LJLbhLxzVefDKkCnEW7iXRb2sjhTV8T9JwTounw4sNTZcCpCT3sQBadiTeyU4HmV5wc5SXGtp7G",
  "key33": "9eXN7UW6DhjMqy3vwMQ7FWZmJuFAo2ufz7LrTzV5mYatJVUwbrAaGyy7YEEyebn87w6rBMsDkZnfsAwjqnsrnc9",
  "key34": "3VYiS1nPzsGqMPM7j6RowdHuoVePExgGiXW4hpZ3Ar1GfKj9GXNSpatTaSauQdBC3xJLdhNyd3VSq9twxvnHTYgk"
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
