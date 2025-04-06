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
    "4kex7GKLoQdXDN7ThQo6kGw1i7BBW71c6Fayd4guQQCWMxfW3BUdef6hWeYRtyQ1RqwX9irn4xU4ftq2S62SdLtv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YC4PyGPdBm2gNaZqYQCGnvUpL1wiyeCChs2BpuahR6PVjzkHQnhaPLehWGSpTHy9SYdtPAraaXUFwUatMRoHVWE",
  "key1": "328gxKA1XkWpY9Ku4AYz6TWXaQtQ1q3TZ53AKViWXs8UG8DF4SXXWX1UDmC83GeD4JP43LLfhChBdzEVj32p3xF4",
  "key2": "4us1iVhjSRgYLMXj8hn2XQpc4Mk7e19kxdtkRi7YWNBTGAoAZggiD1Pfv9K1pQrGV3To8RP66S7apGRaTmkuW9gF",
  "key3": "2qNEc4t24UVKh6LoK35ZhZos2C14JZszAMfygSHndcXx2nKHvZkYT6RrzGNWHyB8QVCc6K8tRhhS4mhu8QFjeCQR",
  "key4": "3KCL6hJv4P3YdLTwH6KS24FP2FfSx4EtSLmuPVjPwwc7QwRFodqkTTkTLo9hiqLZRNGo8jmFe1Pipdz3w4T2SMwf",
  "key5": "5r9bFNa1HGobM4zecb6w6Ay9dsuMde2eSRBz8xRdEJ85cDuegDAJ4DJN6DJA5f3nnYSiFumeiyaMFEEenCcDD57Z",
  "key6": "5YUB3kgkGkoojev4VwTvJAtJibJVo9axfoQhrFwxfTV4NveYpWTKnoV73uhoUYi8otWZ7rVyFwEmqVEUYJCcJXHR",
  "key7": "2Bz9Sew5VP2T5SHWVJmB56qCYBVRoiXZncUxeSEpuBEz4qp25CHpRE8Uei3bEsQh6FWdTHh2pGj6MWY9BpZUbgeg",
  "key8": "5jfmaNPx5pv4jfGtwynfkJMPhFBX74SQyhvtMZZLyJFHhjaRufjVmhJz8Kt7zCnv1aLADpAfQnwyMM7cqnHaFzL3",
  "key9": "2qw5kMpP4xPQmsKtxmVtPoaJWCPnJpAXqzAKzQbB5nykcnt6qMSYV8sdoerUnepcAbDrT79pZeisVGNNEc5txQ5c",
  "key10": "4HmeB41MbZA8rYW8EmS1GjTQKRsQkZnUFMxhZeESL2FKK8YAPx4Z8QL6WHn1f3swhGJvFMCsgXSuA1PNhHWBsDiM",
  "key11": "2ZWGAvfnShjSV8u2AWrTnA387uuft3bs1pC4iqVXu6aGUuAcn32y16cSa8BJTmsXkfHiCukfZwXhnQ9uxGh4gjCt",
  "key12": "3CjAY2jULmhJp9QnJ5Yf34Su5hN8yEjKE7QTC2U2aCTgYy3yny7uVKFhihDNc61j48mxTsQ8L4XR4vadZg3zB6LZ",
  "key13": "5YNDDkL4f1zcDDzCaDMXwznEpF4amZtrjX6NaDV1c5F2kV74fB9Yc5Y35vTDCabuDKR3WkC9xadUWEKW5bdxQ1M4",
  "key14": "4ADaMQL2iRxBx1jYC5MSJGpbg4xY16pNbK767ZF5QaCAyod1PpDWn12hVNumVYJuJiUx4ESAAmDNkUDwicrhWGMM",
  "key15": "2KhD5kp6QW8M6dxrVGSjHSrVPLNVcX2QcB9MTBJMTUMDx3vbrBxF4bDGSgCd6g73Dwc3DsfWcJM1Xct7FV1qriC4",
  "key16": "5n4CkCpu7Kv59FV9HMhLXb2Rbf8gRLFQAiJZMPcgko7B8ozpzZqJxRSmKLYL8QyADdcEnVeK1szk7owQMJTWkd3",
  "key17": "3q9kzyySC43F3AFA9yh6qxe4owsKn8mMnbHEDCcqxcHonJagFTQk97SeUzGaah13xCaPez3Kimw1T9n9veqWgKaW",
  "key18": "sDLjsvLv9oFTeRRBXRSDdH56rRMGXVRZFdr1BGdbXEKHGtqzUcxZ9XrW549nbSCMKfd9pTDMM8JMawSiJV7N72A",
  "key19": "5V7N3KYeFEnck5XMBKbCLxWnXJvFEzKQswKrGCHkJ2N7Nco9Wa1yTogHMdpcJvHbYPbTLBXUwanLTz6jmwjpBd3G",
  "key20": "sQhTxWaaGtg2SbHcnMdNURg1rgwx918TuEvCEPujuM6LbVzxE7dJnpim2WfwNJQ2K7AQ8jR7ioq31t9zR4SLBCX",
  "key21": "48nRUU1jw3mozSgv8zRwP9FfCKPNHtFRu8HyxVo6tquQpMdfGiKyBzNP3wNhGm6jWDASSBRyWPY9Jy9taPMjBkob",
  "key22": "WSjw713GK3f7nriSpRuZVUoDTFjVCtaH1tzZzwzGLobwu93kQRwq8pWkm6TiPLGxPqtRFRbvZRaaFc4MqQXa2tW",
  "key23": "5F9QXAMrmbQZY7Brriz8axf3SY35KTEWGPnTJs6efTEFosfHKCoN7Bq35zMGhPVJC8ZxBX3X7MVyXrqkSQ8Wqupr",
  "key24": "5A9yaLkuUQc2VsRyGfAYLgMFAertRroZzCi9aAkUPXPZ4A4SW12oUyd5eGTBqjWnrsg2bzo7iD7zHdwF4iV6mESS",
  "key25": "5N35xrx3ii74uv1ZpydMsTPoT8U6TRj7KLdH683S1J4Z7nhWxZAUyqv92vYXRbrLipr8tUNxGBrHsyxBpiyJy9rp",
  "key26": "5t6sBRhhjqFXoJ83CZLbqrTfCqVNoxTAUpFHys1Pw2ThQXYDagsa4redjzZfDNeuT9S699n6NDaa14rbqeUb5gri",
  "key27": "Ad5SQarX9zA5MViTSJTxbLoUoMCyLDM1pj5HKMgSL2rBEsb1sZ6uxpVY8D4QB7HNjZPSWoQKFEjv8X9qtsusuAL",
  "key28": "3WdzAhFJz5FpLdWG1hmWEVPvoDskWReiBYhCmT6EnyZAwTzQ1RsAA4x3SctJtgsVMA9vhwLGLAQR6ZBhZfPNEtTo",
  "key29": "4kXyzxgoLkZgt328f2YmCX3rAHPJUNvuHVYqq6gR4ahv1VA4iDYYJQzzWKooQajWEDPLHpNJohkuvn1LpxVSw1YL",
  "key30": "N8o9VwWuURntbboysHgkzBEX1Gdq7Xjyy6p9cEo6GDu3vLwYKNtbQSVL6bcqq4s4ZsYrJZ3aBxKTStfRfSqnwEk",
  "key31": "3rypFjqZqdT2hvvPsEU3qLDvd1ZLNy7KsFDFBEK8DZ8C4EWc1cmP7Guk5KzBaTnTQmZfgBp3oHug4FRwP4iq4cJG",
  "key32": "61VAMrrikzfyGD9MnpQQaqCmnSDn4uPg1moWbzJawCZjSavapgCGqMmMDGD9uQ3ApVHcdaATUhzVHD8uEjVE5sGJ",
  "key33": "65VxRScoMcPKKyKxBph1yAhPkNBLXaeaZTDNqGbeKFmmovpBPmafCSUNugXevMeVYz1Cn3vveMXkkGmzoZnpZMue",
  "key34": "4NEffMLgT1Ns5ukmXBNQvS6waJ9j3TohpNnrWKyuvuJPHb8WjMa1DcEnnAJUJUBn7aaNiL2b7CyvMipxio5w2QqB"
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
