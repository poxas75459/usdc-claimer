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
    "4JA3kg245gaENNkC7bJaVqmXZT2UZ3PbBGe1shN1qd6jmcBrREsR5xzrhjwzD9RpsA3qWRaf1eVom8s7kJKp4M3u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RcCBcxm5SoSJpyG9rmoRxB1dYndhzTLp1bb3LfeuoubTXEoDZir56XwUd81dSVXEg7vbBhwG3rsD6dudcPGFaxw",
  "key1": "Y2twduMV9pCfaf3RcEMhucrdNK2z29bG44fShRHvmVaZdLP7HJEJSoxzmUqYas3mPCwF2dviAGCA8mAfSbz2n8Z",
  "key2": "64wKwy4nSXTg7Dc38zGMJswdugKW5EiwaWnqMQKvxEE83tdhSWDAcJXdvtSfXMMzTYoAeVGTSpMkWWKes8JY6925",
  "key3": "5DYkbDF7pyaAC6GGUkXjVG6JmQ58wJHjbmbzbyXdV8v3MJNEQ8qJi2FCMG5nXgYYP6x8PFSeDjzJNaLPebwQ8aQu",
  "key4": "5AeMj4fvq6PAKxfAVdSCiZhfwWHSiSBab7Mhdg2xtVEbXVwcvqaykXKdquN5Enatz73VXzAbHbxeJWNqPz66vAVa",
  "key5": "2VHqYr7ZK8pXBy3NJSvXkZ9d7kQBDSZK1Z9bqomQ5z3tKE4PYtyycHaqD4Nop6A9dGo9BkfyH93tqfxrbgYxxcgo",
  "key6": "5zWFeaxSYnturosyFchzUBqBTp8qa1Nig4BDEAtoYKyYpgoNBJEQimP2krTHW1A3y7og3nWMpHPvG4PDr4U5VJtD",
  "key7": "26H2fiEj4j7afJKs2WGECnyiJG6oH4QSfhKbnz6rUVqkWvY1HhNoamx8Wu3yvSGrJiQBQv48dD9YM4oh9JgBinVs",
  "key8": "666Bszada2aC8uZfdkJF5vzcT1Y7eXEhtHEXg8vGudbcRK5FCMooeX9pCL98NpfD9FYaHK2deKd5xUWddvonma8g",
  "key9": "3tnLFTYbZgyGobm9rd4FLudnsTCaPoZpPUaz5V8c6HFdy5zyqdPaj1xU2jqDpWV9U8nMgJQHAu5w65eiktUVRFsS",
  "key10": "5XVTdZvh8wXY7gCMg5GA35vwe4ywiBFEmDkm1Zp4eiEeUJndgnpZZf8Epb1kWq6gNMRsJKWqTkMcVL9HYZ7L96FD",
  "key11": "3fguXtyncAPcjuGHTjbNn9t1Xh9qn1iSahY7q1eBuKChMnv2A3RofrzXxduvnFWEJGRNjhuVoPXMq4fdquzDg5jm",
  "key12": "3bz1L54Nw1fUWHyKT3ihQoRUhSd7JHAVZXYtTgWoMKpSAm6wDgy4PJFFFyd4PZW4xqXNfXQPr1QEygj7ABWd5Jei",
  "key13": "4gBZ3yf4WGnyheHnkzChqjfqLY8KcXD6Qwyt71cwgdMnYvCBuVgPon8h5XYApeghXUomyYUExZCeHE1RdkbnG4bu",
  "key14": "53JeqiDFRRjAk1mJYbd8NPrjefDt8pDgKqkLn1yGmJdboKzoQw9qJeD4AXSmKFXxA8hLgANtnmoXvetVg6fZCcfR",
  "key15": "4QQFsE5QmJVvPD1dbmnkZK5NDaFxn9PeHvcpqV7WTC6AHF86ZiRNSfxXaxvVYq5SCpZbjqQVBJxxVH47xZF7D2fD",
  "key16": "5ANLJLcZZmZCn6LfTTonMrhWJ6cUw9wrrAbYVXDGdeegB97hFfWgFoo44W6KWgC45yjmKD21vETc9ov2dTNK3qQ4",
  "key17": "uv9oSdMgu9FdTTVDo6rbUbR2T8bHM6cxKoFPUcrpf85PPC5buVQzGXxijMejz4T3xCfvVGzh9j4q3ZGFcamgKUQ",
  "key18": "4XcLC2oF6GP5c8txJnSduXLMmBbXPh5oEoDtemWQsqcM2QpTSox4enBQttgJ3nXLSftSGvSjGWUvyVVwewupe6Gu",
  "key19": "22FbxE6VFSTdPbUnRGocUai8Pbktw8Amofxw2NhBjfQxWRvi2E1udgPQghTPRzmKdGRcjfmjcdoT4pdafK5WLYtr",
  "key20": "4uR9ZoYiBWaz7uG7WtEQYXtbbcpzbYxPYmYyJezCAmjwU2foPSAeWxUpCXFavcDw56uqQigBrHhGPbmFkVSuFxhe",
  "key21": "nFUSoA9apZsJdXKyCn4Ro1KAXm8SAPoRED787HfNXnieR1DfSgU3m9qqgZMxucjQVU6oSUUNBB2aYG56o8nw4J2",
  "key22": "26UqCGGvqLMQFJNBJsvQCCjCXVeCk7EN3ADdZMcQgoUVu2cQ364SBuhKhn7aBChi1WjfuF5dSNVV9U7HaaJipeRM",
  "key23": "5N7ezao6HVgAHncCkAXNK34FiQXve3LVULJxaFP3NBLo4HDuTTXQxkPWyhADazJYpbnb39FWhswRJkeC6uDBwCJp",
  "key24": "5ME1SApr7uqvKJt3oNQNRofJx8uzeBHeYyUHoSbPweBm8PKb4PBohiypvURiVS7mKuDvWcqokF4mXRPYBRn8FooC",
  "key25": "rVPcwYnn1NudL1vLFBqHhGZSPUhhTem9tWRzwsBSt4C8BzoYwF4cLp5TQQcUmAnmD8PFGpKzio2vxucuYn3Ubz9",
  "key26": "53jvfQZRAJH3JEYDFVM63Z8fDX59aMW2M4JW6uttQNiW4PtgmPfsLLz5ZopxCqb9fgFmQVeimXovdfZfHFawiMrD",
  "key27": "3keTyFkCGTxscQQZB42oR9USVuM9vU9Bhybn91iFb3MMM5YasfbnVyPeQuLkf8xD3mgKMG27GjoEbaY1WLE1nEhZ",
  "key28": "2861a6eiEef2ScEAjdAbBivmwEu7sonMa6Sr6B6EJh9C6LxyzjzPNemmHPvDRN5ANjsWE46rxSXA6W14dTHjy3C3",
  "key29": "25BGPzMVs3UWdg5ivW6XTPrjWgQjLwHSGbnQVUYwDjtZSodYmYAPKdwJoYSbAHwfBEjsyLAV3bjTWKGGLJN1TSaz",
  "key30": "5MYhAxCXxuhJVQrPpasgZFXiHevETsJXHjQkJjSUajjPJ99RFbejh7MqnGx7fhTXq4bAbKVSZu6gVrPDxBUZ26Mb",
  "key31": "4s3JUVKG6X4xjWoqChcJFhTxUHCGXjSmk8VXvoiaLZWYd2xQ3DLnQ5fUeZDstgzx2Lj9Jj5akKioTrnUwT4H5krz",
  "key32": "rEiDT6pBezYZYZLD7p61WcKZhEmhbtcPVaFzDCC6SUweoZc1fqPBWXUxZLkUkkeVePnv7R9zeRadipUBThfE58u",
  "key33": "4Gj3bguDhGdLBnrnDofh8FBjZ8xk84j1XWyc9Ux5c76PXQ5o4jirrjMaxBcu68mhhaw2xNhoNi3JDBiGGbEhvLqC",
  "key34": "4VvCV7AW8gwW3m2DXP4BPJANh3mxAUM6uhdGCfHhvnNyqLtbPbNRXAyKVdiyXh2VkhNiyRaPChufdKbuQhxXtF2L",
  "key35": "3tA4hcUEPcSjNKJmmexcRm5r2voHWQdVibpGLsnktQT9NCQuFgnN3gKq1gVhVxReHxASPvZc8zu4FUpWSZLnjrP3",
  "key36": "59V7MN4zFzX1fXXbUFAxXVMM9R5pf9Aec4HnD6tbVEZFqrHUYYJ5imjhXWKhpFT39TGJ7KcdnbRtSYv52hdoeYgv",
  "key37": "3HnhXXyRdVagKSWax4o5eCdtJJS6m8RLLXB4qcNAsXWXZ2ncCrSYKS9QLo74NcBksiZAvv76xUGzVsoSmcEq75gH",
  "key38": "5ZuRDMvfZ2GRoJXcPCDhPP9oKCZoQpa5XjbrinoofA9wdUbSCX1mUzuoJggcuKq8o3F93U2PtJNqKxPyVVDGmJ7i",
  "key39": "3N4w93e14vDqfd1SQotQjJCkoQxyzbDKBSgkZmPm1EBokKGX3WiBusJsyMYEbrP2oyJwaDpdxfpsX7rxuma8Kky3",
  "key40": "36h3HdfGqBLYR9DKVj76iQuQKuDq7Tmqs9yfLchQVNJSFrx1srxEQ7vQ66TxZjnQg4JUQNMohjktsDi9pdcf4fMk",
  "key41": "4qBPgPreUqVxqfDfLYRH7N7UXvssaYPJd64dPfKh2Mfa8PfyHWbEMt7SitwZexrhDVopt6ve4p4hrA9JbP7pL5LN",
  "key42": "3c7cfAYvMGnyv4kbmgGxtx9aUcg5a6aocRahxt6eLXAXzWt2eSKdT3EvBe6UAceKfj1Y6UZNEJLjvQ158WA9Stn5",
  "key43": "5yQC8qqdTQkZrfLhJSpXLRog5GtnB3wZoFWH29AFunvUcx7sNNStPJ1NG9y18vbu6y7dpJNv429iJrKEqBJFxRbY",
  "key44": "ywECqwVLVkUxFcAWvGmPzCZ8wHVWQ6iG4MgKavXdmew9PSgmVVUm2kJwjzVoVmdUXHV1WtJ4b2DMvgUuKbuENWw",
  "key45": "3Q9nHNkBA822LnNeXFV5nWURgvsenvedsMsianJZeimHULSwbLY1UZftEGHyG9F5vSztzt6V47vBXZfaCYBmeQwG",
  "key46": "5DZoodFfqDKkLDTkKUCR8YJvPPbnniRtpUovUqabTyumhAHA6HdngZc2LpJi4ueo3fQ6hexJd6PhQXa73zHLCQ9D",
  "key47": "61mDGHQzojhur1yTedK6EMAqZZTjog6a4so89HV4z1CH3hEWQNkNtP4is13kfKgMEPCQxk28NrQmnZkA9ByuTH8H",
  "key48": "4fdj9pUxpmkxh8RfpDeRR96WZDFoNnynq8WJTQvMLpZqxmnAZqdNvMhxLfBUGm5h4sat2sqSs7nQAoZFLEDYsKV7"
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
