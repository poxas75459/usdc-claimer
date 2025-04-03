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
    "UjPAAtNtvBkx7KHXv5vKDwJFxzLkextpRcDB778CZ2nbLpzyeZwWBebAK3tqKtVWzsFJAXANSHgkjiLssVvpyrR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ksCH3KCPGGB8vuhnB1CGthM7C43ScL4KKxD2oVaMukuY9svPkF9vjmbiLqQQD577PjJfiH5nYu6KGPJadtDVMYB",
  "key1": "5PKFYU79HS22YsiofxrUtNoPbWoPCQ2HtGzorx8MACQBGVq2qydj1U4GnyCyuNMqNNr7htVYzSLgKfN83uP2Qz1z",
  "key2": "4jPMRS6BNUKU7XtYerGCeoFKg8Q6XHbG3yhKakxNixHRXHogHzccWAL7MK72eCoVKx5f3tvZHAx1SRXY7ApbYbsu",
  "key3": "3RrbjZtLiX6S22EVMPiMg1iBaLFrPCBN99fn5RV7Y3SyfJjnYXYgmPaCZ5e4ZXwYL1VqKLwoaGmjVC7mSFicyyb7",
  "key4": "2N8xs83huzbG4bMsvmjkYJV41SfiPUuvnupfr8rbwqq8R4qxCt2MQprr62DU4u2dKb21sJzGLpsw8rw6UQ48hTyB",
  "key5": "49S9kfaNsWCfSX6HfegNYTkuxXrKVjZHyLPSsf3xXrhG1mHonipXrTCRPgn4WgNNiF16A2TKSWXEKZFHMFAaiPLr",
  "key6": "3jgW3126tM2DR3bLVTh9ULvttYQBpDuwbJTaxn56SzCozgzoYZFwwJdqXxJE87nXCrnPV5gUJzPQ2wfF5dDavjZX",
  "key7": "uYvEBHQnF6F7ES1HsabXAHDit9XNLRDCZLVrWrt1YrVkR2saoja9iPA2dF7Vthghb77uhneQW9LUvVCmpdPNDuJ",
  "key8": "1kZeMDSfAHyMLW9WEVT4UGwfYAJBFRZEPDWGE4TNkgCjfebvBZS6AFxqSZbGbh65J8cuHUhFxCSmehYfiYdyEvy",
  "key9": "4CcEZEicFuvp6z1L7q4fUKgmKwXv5YC9GpKskwwHZeVTVmwdt6MU564FgiEAFYL9mfKYEAgzsD5usrbHeRfD2Daa",
  "key10": "4XTpaYsMWwbTidtjz7K4CuMjQWcZT7G1nCRPEe423JCtpNKHLJNDM5qpxLKVtBhG8cFHiRNWxYaAjSB52c6NGP4u",
  "key11": "3mWnkcKS9m3bQpW395WsjgRLPqJw9MHuJyBFHnryFRoYrW3KrNDTXF8X8X19q5tMYhWPJKvJaipGwvLG5NF9JqqF",
  "key12": "4JgRD4YKvUB8RGCKgCnE89vXHLivR2qqXRNwLfy9DWkW1pVgJVGNiRYtUSzjHjpcx7MzuJZRj8gVsdAbdMFNCNSv",
  "key13": "2Dg2SnkLMmov16WoyJZ1CEf3QEdSQtJSsmztiTNL3nfXbW5EazesbLpLGvowaLQZyoKoc3Ly8kW34uNMvy6fxrgz",
  "key14": "4Ya3piD5TSQJefPpwQqL4n2jbwLdPkGEhVKvXk6nkvyfJDLetcBErjU5BcPCcee434wNgsoLCswcqMjc2Uaok4Aq",
  "key15": "3kfvF7FZpqcYBDRxvY2dwX6wyKsWua4C2XwqwxAGieZAjD5wxWPhgZToizP7h1VQjD7z7M4VXSbPEBPcWQnmwfd3",
  "key16": "p2bSX5Uizfw7udZQaCzvWEkkoxwVgbTdRYtmgiUsiLo9PEokP2KhY5zzAKezoruAYc75MbkmpxuM1npDKGR9n2W",
  "key17": "2EdyDDXMFeUq1SX7wXzob5N5y8LauU25h8MspjvnmVg8qG8fKt6mmJjgLS2Em61px5pbnPKNqdssUVpbttNrhkjF",
  "key18": "3HDEsEskEtyjSwDnSptq1Qo5A7M87wYUBouwJM5E1MCGpcN7gjhE2BUhUwAa2x5xBRFWn6vaP8Uu83kDB3vgMgsa",
  "key19": "2pwXTuWeWHezkHZM8ycAZ4seKgdLEGWwSYNQTVg1kDymNh32EAFgfENsuzgQxthQH6GbPXqD3hGTRdNvJmpsPff7",
  "key20": "2DGtUBdhyYHLdZE8p2PXdhzFFwvCHHigGSdeWa6Jk2A9bi617teBe8fDQsB7GdGeFZoT49tLd857U5PvxCEj1QWZ",
  "key21": "RGptpHRnP6qYQeSdRR1cjFr3Zc9pMk6CR8JJ3VEzMrJt73HkPshgSk9EDJ51TYWKFkpgXCq5T6jFFKWqmsa2Y5o",
  "key22": "2VgmYAc6TqKwLLnrebytHuDCGozuZAPZBwZxSFXHFBizxGk321FDqJgNEK2buntzVDfK8txTATDSH2iiXjs4HpS6",
  "key23": "27sTfnBetLk8PHkawZHaW649Djdu3HoDVBB5hP7eLLvgt4kK5JbS8KGi69WeSMqcKe4gJ7fQ1nNQwAdx1G9L8BNF",
  "key24": "2yh92aqDpxtBYJh3miSEdtEottMzSMLcrCxzmeHTrZeeuwts7LnUz8H5zWiXgn6BBZktCXY9LJEL6ErVphabBPzT",
  "key25": "2ZAajNnmWn5wV2co4y1N52muw6Qj6Kh8q1W1aP5JtCeQxbN5yxaVXQFLgWZTSmwQ8JFs1v1pvTMrhArvb2uSxamB",
  "key26": "2EacqQtKBT5wMnJyXYs57vgMw9SVrF8VuATupYxAwkMat2PX4LghWN8PbXrPQXZPXgqhLLEFPYi6wdWyhiBGJJHL",
  "key27": "3yLEjiZpke3s28sDatzyj5EV9CnxuNrqj6oCpm95GGHKhxbW7yQy52ZBVymamXqrNRN3qh8M4mh39TofbFLkrqLY",
  "key28": "2oX7yD8K7QeN5h67jyhtMKpZMTz51hUMfKSbjGEfRi9Fjhd14HmGkUE8ZfninAkAZaHt3N4DkbJdXhfNYNqHDWpY",
  "key29": "RfEaJdHjnBcp2KC7mGsFfVn6HX1rhmn95imqZBMifh7dwqYUw8zcLZYY9REo5dism2ACKmx9hDWkndFXnGx3ojj",
  "key30": "5fWgTmeE5v2DhTE5WoSuPQ5ZScYp7H3CLRCRexoGU4tigN8CMUqMHSPfFjFnqeLZ1Bpbo7HcbgMVfCsN1egMSVd3",
  "key31": "4mhgXMA7r5YmAENft55TSYfyMxqMsTFikQR1WyCAxAqvUvszLeX72QqfU52d5QyyrgQY1ZGk2hZSypYqqSWuVXzJ",
  "key32": "i3KLio7M8aDbHFeo6KTFj9apmt9g8Dfrx2pZHBKscHmWhbTXzGgobnvaAn5PpR8bg41MNLp675fx52Ff8LCfrfb",
  "key33": "3TUWXvttmeC5QRNMkV8ALMkLwuE2C57vQGMBkWa3QdbpmtbVf6HP717myiCvpc6c4vuJaC5QFSirQGBuyKFWzaE",
  "key34": "QNYTUvgwAaDENpBsFE2XCaDoVjU2cwy2NijYWvfooep6kbqa92QDvj4ScTmCXqoabBSm5duKkA2A94ad31YGwmc",
  "key35": "fNPMSAfRGVBJNPjj9EgFBduRChDeboSRaNqXXUS8S3XJbTrDL43eKLFJ3kwvvhZ9BjdGvMn12QivPpNdf9Cs6LL",
  "key36": "27ySe2orMCUparGYdmEQDi5w4SzkpPPqo282VfmCKQZizD5SPCiXgznfot1ryq1mB34Sh6u4huZ6Em3QjNE8mHcD"
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
