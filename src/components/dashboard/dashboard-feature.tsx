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
    "2sW8V63gQfW44gE38nAxyN1SLGS17vEJFJ9NzXU5zrGfUqg4EFaXJU69iFxvfr4fwPNWacpSEGBfhuBE1waawyju"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MbMLopyNHxZ4donVWSebePVec3j5FDAdsnhVkfSiZtqYFK7uXzGmuD74gsUzogZ4aSMfLGgLc1xZXjtDGtJBoyN",
  "key1": "3M27pk63UGqmvUTUEgQ7n1T16KGYJhNndjdBCDbi4y7Yxr62bmTwsidaCu2bxCdoSabkctdj77iZPH2kssyxJtzu",
  "key2": "5nxeu2vHPMBL845yXkudtg5whXRR2YfpfkjyuHPcNZq9RyFBRTjTsgRHSVKEzo4FXDMR44FqHN1hBfqonEnuX2jL",
  "key3": "5xdzLEjP2tEMPBuAo34mCPjEzH9PkyyZEgGy324u9HE9ttHAmbxqX4kmtihmiNLtMq7WGgaoqyyHnnaVm9SCcMrV",
  "key4": "3Xv4CNRJdqCM1RGBHRpPVCX7pYMa2mb6Q2XuioTpGf8AfnpMrWZ5HPQaLmo65t8oxNXpwGp5uAvc1B7hyBbkiG7B",
  "key5": "445LPMEtmAR4gdsk4NacTDaV4rqHaDa2s3eXapZW3x4kTMzccAZnQ5qFS5Z4f1nebuHypiuqX7nY84dferujtQQL",
  "key6": "3AexCnb1LJ2RJd7a8FDqeXCJDPqEwM2fww5s6dGJzJqzmhaQnBhu1DFQTE5QPx5b2Wee9XcrkiEgDbtGNh7pHQeU",
  "key7": "2rFCtw9fvvYFUWooCchP2PWy4hxEuAuYBighKkV71TjoKQC6QdHpp5Vr9xEE4nSz2nqPB2Qp9Mv4MiRNUSFntUSq",
  "key8": "2scz7M1C7bYEVw6PchVonczMrLjZZGp9dzKxhmDMp9SrJtFvbXTgKrqho9f4X7FDLHfbaWzJYL2oQ8euEGWW3qNg",
  "key9": "43AQf4ga6MXa4gecgkJ73uxKxqjBaaizCCPTZyzb47pohhfTbBgRsRLLK5FxzAvt5AdMuboeRVaG3f6AYu6xc8aM",
  "key10": "4p9P2ShtUBr21Eto38VuNN1e7bx7ENs2k3wWakGWDTkNNB72tY9t1Go2WvpVREYYyAqSRt3ZM1wad1svx7r51cH3",
  "key11": "21xwyy1VAUS6Ce4krjbVsupPeqDm1xxj8g4kZe7hLdQepEDUdkvz7Vvzie8Ukwm2Hd8bUQGAZrQPC5HSvuaciX54",
  "key12": "xgSX1n9EyrwB1j86us5zJbVmxz2yLbziSNMhUUkjbFDo5P8eV4X2sY23ZWWWtBnPhvvvfvyRh8wFXsfJqYhXEnT",
  "key13": "3qCwNvvsmXtsYQ4MbqTTrrPxA8WoDSs7f86wCvUefYRgfakxwidrMvbuunRtn5qZNhuMVsAHd4JsXvUYNmE7WLyC",
  "key14": "53DBbwSwXADvc6RaVTWJqJv12XveEPdG8PYynTYf6tvCY6GeMhsDD824KcZTU6aek9Ch3AR2apZ3UATVBKYcYH5",
  "key15": "2MujKeCUYQmLwpGJBgYpCvM5QXPaSEVbYyGAs4FXMkiSBpgyZxa6eYQfBbJubHHdkTNUDLwYAQUmpJLTJPfu3A6C",
  "key16": "5M1fshKuwomUkKGLKv9B9FsT8zQGZtAL1SbPL4wKYCiEzVgBzJCchCmJcjGUxqTZpKZEn3saW3ujPBsmT53Ev8L8",
  "key17": "2FzNDgxtovMNN8ToCYjDd76FXXebZEmZS4uyj3fKTAe2Tt6B6hjFMn4URLtWY99SWbL6mPKU3i92qP6BpS29X8Qa",
  "key18": "4unsnLoN6fhreVXVj4xsoL2X23tYv8rtaf7VYy6xtuKSMY6nDk28xyS55fLv2wiLiCnTy1XVV9wk2aRyiopsnqYh",
  "key19": "3wLQgbs4ndV1a9bRDJWVT5rnCeFyFEkz1CCu1Zzq6Ev7VsbYz7b5JMjKHFxXXaFrHbqzPeb2fAEaP4F9BzxPzfj2",
  "key20": "djBDPeLFuCGpADWKzFdpaoFettyPiT7oC7W4K6AZDUzCkUVJUagibPFLQT6EaAzq7j7wNbtVJhDjNgANGddFSbG",
  "key21": "5pRWmhuYJAziQ92Ls7sdCWbsSWJ21j1AYKmdGMocA8VpDDzNCj7Z6pMxXkRYUDSZibEBpqPtUbcFmH9TXrZYxpBt",
  "key22": "dfYJzExD19afoULPjJHZbYTQTy3AMEEWXR1DRnzrkrVDvdCx9ysEAZqtkCadCQkspnwuXigESgSN6cxg2N4Qu6j",
  "key23": "3jGCNni7vYc3EMaQZG6sErCQhaLQ1kZapkFczA76436FoFow9MSCiW4cwW3HmpArhwHLN7eAZBMdRUaR8B1JYrhj",
  "key24": "2ejgeE7CBPmV14aWbCM3zGmfpJfGAn4anhZoVZbVtzM4tSAPdiPCwHtDW8ZtQNGKeyL5nRJFMnhzjxH8jPR3rrLz",
  "key25": "2udQxgS1CS26QVtJzBu93Pin412TBWMwgimBaCj6gQwaVWXNsMXHxX8Hu3TFLtxVhzVECu4Nnf3yw5JpGUubJaPK",
  "key26": "2EZ84ydxx6rji98VSfBZxyG7hgptB8H8vWW3t1e3cZAyVotMn3YduzdDUwVbjX3GogjUjRn1ZafbPsdgs63kERUq",
  "key27": "5LjZffkbuJSs6f893jD23h8XNspdZDXxVhepDqAR646PxqWSoJXZWARG6XMBQxECuP1vTYmP8a6n4qeYKGEiNiQe",
  "key28": "wysqMS1g94CmHKt52RrhC3NgbDD8pgu1kDs8tJHAMFHQ4qhazcYQzUwvGDuPVzeYU5g13X5b5tU5d7m4bE1iHVr",
  "key29": "3vHMWQdqMhbAWD4uSuDirn5QSNzTK8A23uAJ9h2sazWLQpCKxjyEkYYg7ueASVLa3XnBp9XDsyo381bhvAPVfBL8",
  "key30": "6a6WnnXmsincSwTJmXGUK37FaXZeu4FdPDeG84CJnbrqK1qzUQCgftXJKSgnkmo5cZjBZvmdveqdcbhJqTALaHB",
  "key31": "2tStjaHbTZhNtHdgXH3Xs2sFuvK6FVWK4w6wXchW8D6Djcpc1LipSVRpFNyAyoLNqgvGMfaoDzwKRWdgrYmYHdzF",
  "key32": "5jsjuzukEXvvie73zWXLUDeKtaCBTWtqrh123V7zrwDLJRpky2dEiJhdS86UBi8gvXNzW5hXHTAA6YL2kzhVD2tK",
  "key33": "39PnUsRcfLByiktFSPaapRxjZRKhS5zQKqX1dHYaREa2Psbiao2wYr8M6RFpMjwQCG8zDzsWJN4ZNs54ftx4kjc2",
  "key34": "4LreQdXAjJNvwveG9JVimcvGoxjvWm7hGTfiCKNhUKEbYmN5DXRxYHh7i9U9qbgRrV1zmJFRwYXs8oCsj7SyQRue",
  "key35": "2BdwvX1o9zYi5ZJJFKSVYaERWY1DTPGAqgyWsmofK54wU3nNHngxFNkL1YSrqhj1sNuHyc9hx8zkWSwyK6AidJqY",
  "key36": "3W1tVYU4Qn6xiPhjhFs1T7qkDBHrD6TgMBdAvwn5n8r4NtNb2jxGAEDPCsNbSDzJqPviGw4uGwtiWguSomyX23Bi",
  "key37": "3j5bUNU2dxgc9PcMmgTK48ivUDkJCBJvH7TtJ5RReSpu6NWRkVwVcghsonHjkMrk7hCvz2abKZ2HEJ2jMMTShRNy",
  "key38": "2B4TGm7wMH2HpBbcJVmCBG2JjAtJDbUcnfiGSRdyRLj12PYRTbsmWEazcSWycAH66KZnsZ5qSVb94iommcaCm39V",
  "key39": "2udfXMazkmgzcM8K2BRGYHEEgGAs9j8K4sTyLgSd5ZP8iaABze8KitowVHrdaB5HAxupEmQGr3S9j2vc499Snx6K",
  "key40": "4LghTXy2vgupsvp96ZUv1x5HF2sDCUxYH9aWZFBRXiBcckc9tcLozeKBH2XVQurERULcvNxCXL7tgvkZNQSMgjME",
  "key41": "2LGUi31GnxCHPAhAU9k19ox4kkStqELHyrsMNR3eTV17EoGyK2J6jQJdKBLLtecPAoCre71hhobyBN3WmxDExhBY",
  "key42": "4WACDeZSrgUSa1bjGGRSzBmRySDHAbiWRbCqU96D49pCkQjgRZSKnoJ93EM7Et2GyndjHr5wsi1VZj3iDiPrWNgS",
  "key43": "41CgWbdvhPgrZUGFr8pyWCNCdMpk5MYjNc5uD495AZCxWcKxzWv4PFP9nEX6fefksJ1CCYLG2JkQsfMzCu2vzA6E",
  "key44": "5nbPDfbgjctLjM5G11XknUspiPg7GRjAoEh2vcctUpuUfnJHqBvNmdAA3jtvMTj3kyDAEEKx46wcJ6c1KFpPcFma",
  "key45": "4orM7Jfzv4xLAiZYgUctBKs4bGJUjCbbYRXq44ZHqrRJCXLz2X7ia8auwSymRKZ65c8uU93VTXYKnJSVwQKdm8GY",
  "key46": "5Y7DczY6gdqzfCGxeNJNm6UsYoA7a5myynDt8pPYMuzS9JNBwW7EsYHpiVH6auuJBfZw5xK3Ak7rQgZrCEKt5w1k"
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
