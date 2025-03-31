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
    "3tuFkv9BDqMp6XtAtSdjdjezMzhM78yseVfX9dqhqHMsSSGWtJURp2sDQao6EdR1W3hw7H51xfQduPgqFoUR54WB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BWLJTv38xNqs12hCPQs9yrnTYDTDZGYGg7UQTCQQKKx2t5GyGXrSV4hm5673wuiRH1Th1cUSQAsufMp797er1wu",
  "key1": "hzzBQfRHs24WFXjqHsiduw7Pk8VGdWcNuawZpiko8a9F5YCBFBEfhxfmAfnzZSC49jM83gNygcAJZL6aWq1Nabo",
  "key2": "3Pdg5ADnMqcZoKmuoSnnq5SM2h6qcsJPwPVkBbBP8vuBv3Pj17ZYYE3BbW3eYGoACqaVHrFgn6EPEV2nb1mMAdZ1",
  "key3": "eyd1f13p7HFM9CCZrahgNFtp2VrFQhRtYRWCpmJnMKUXi2n3uQpLZUji63M7xufra2qC4jCRZUZLLZK3vjbMcA2",
  "key4": "3Ud1SB6k1Mc5y8MmJ3r19bb9a4Ahma92ZEixWf3TwoTqpom84FkAnSX2DTdaqa9PW7EiCgQTp2mucWVbefnfWyHk",
  "key5": "5fQi3cN7hXaegzzXyPfTsJR1MUJvre7P2qfq4ceTQGAwWM6gfMVKZxNJDfWPE5tJguhs5ak7CgekPmtPf7Hepmnh",
  "key6": "4ds2fK5Mwqx4PCBRJY14mLEXkGBueHSAfGQudqoWPEPAKn35wXKBK9cLm5sttkbYHzxtQhPxCzmsEWZajJUyks9j",
  "key7": "5F62r1sC7xcKBwj5uChYqjGWMttttfte3PA7BArmBS9FBQRF4cHYP4Gq6zfwjC4zsjkKMtNYk8Tm96REHtvemKUE",
  "key8": "3fMGxynckERTRvhuEffM5MQyJYR3wKRBvw3gNPFEUNHxe8XLTm99uSuTcZKwBE4hqsy2rgg53QS46qMUnpUMZKGV",
  "key9": "th2Ph6hwqEyfVsVg7Cpy8RsZL7sZu6bDqrYXhXe3bawtkiZcWAn1VEAu6YPLhrXp5tj5Diyx2yiLWoAAj3qiP7F",
  "key10": "4c5nD2KAF4eWxC9rJwv2zdbjDdc4RxDi9bxWYtWUz129e43pJEJ8ukFRNFPGCwVBCvqJiaAW43kMNfogpYN8SJ7V",
  "key11": "2hYjNSSmdJMF6GaLDLA6kG9Bat9MRtGZPD2sRXHovKTxFTjYSoLWapAFzFoDievHvpPaSwEtHx3ij21Br6NocZo6",
  "key12": "2edoCh2V28965qMboPDSU6BBH6AfptwnHar2xGEZhByk7of9Rfu3HYn6GxowJBCmLjWQXnqPNhSxonoKC61J8woS",
  "key13": "4cy5uVXxAS6wvWDMgW95XsAPLewK5Rp4iWjZ24mXYKTfPgiZVg7F5NTLZ6wKZCJdvtuZcBgREh1LLDtNyZNj7zan",
  "key14": "51EviPQAMsnMLGd8hdNCpmZawA8DtFaDCXzeGNo8mNamWieYtmfyKZg98QoPaveYkXuaAogoPThtReraMvf9AuQw",
  "key15": "UgZcCVQkDqZYAWzMPHRNKZYHwT9Pm4DMfw83nYStovhYvpijo1LYXRBMMSkR4oZ2Sv3DGAb7TMKe9bXRko1KEa2",
  "key16": "2DADEj83ipttuTK7fKtQCStfHKCTskMd8QGAS3SSMUS8AHpcRATa3Usq8GGTqXYUrtUT8gFSDPhVZDTWjXjKXgc8",
  "key17": "67FF8iTHVKVba8KkTsfkksKxGqtRghmW3kpHh7u7J8Kx96o9uRLMZ6Y3jETDqR2KAXUp1aXYk5nrXu7BEBxdwraj",
  "key18": "5QvUK8B7NukyVSoFy34RASj8V4oDEPe3wHBN3QcDgF8jBtTLQ65gD21tej9thFT9ChwZ19qX8EHCRPTecC7hHpu9",
  "key19": "42yZGVt8fSA7DVrivQMz57DxtRq38BYq14ZJMNb8QYJ9Y7kpgdd4oe2whjcQAiVELy9USAtj332AvWUTdrFU2vUk",
  "key20": "4RLbTJvnxdJJRJCiwHZ9gtkqdkfa4xD7Sc7CHyFRwsUUTQ7GxiPmJvdfyqBA5TfQHJJnHibpGFyoddZrNEe136FY",
  "key21": "5SUGNZ4bHi4ipWRdbDmvjZS59R1eeC3gzMH3hS9E39SmcjGDMtofPYpm2H9j6ep671GMsBzV35MT2HQ46qanqSuk",
  "key22": "4pJ57Kk7xrhhuXT76K7QRodsMmT9adHckCW6x4pNBytDQFVgHg2JDLUp5Do49tBcoraPXWSxTFae6rTu9uvsZaXg",
  "key23": "22CA2idwpoXJkwEnugCET8ugum5fZRFUH9x5bci8hXD1QfYBws34A1WMoAKom8gPJvNk4ozN1753LL7B3Xfi6HEu",
  "key24": "2XVPHDAjKd12tpHa3jX83DDTGs6zEwwSrrrdqcGWAnCqFdwtvVoMcEdNPoYyZyKWBxhM4ieAEWMTegMi6eHyiyfv",
  "key25": "3XcmJMF2feUU8UXCuTi1RcFhDFrKbTY49Eja4PuJWZsPToxTx3ZDk8aPTJDqSAFCbXmLNXAqgonMn3MGE5SmJPyf",
  "key26": "DCw63WjoYpb8xh9c7gGcHy72bbnkJ4qtzxUCWApSyRD66SasBXbgjaYjgyZZE5dkJWgD4zZ1szPzHjSKKuw8Puu",
  "key27": "2CPnQw8TUq5NQR9sDBjwNpzKp3SD8Z96J3CddhWyXMCBFJBQFzV2J5RuptVauHRgk3NdJqj8C7QcZWgukVaWifNn",
  "key28": "5F5pZG7Lf7y8RYsMGw8Xo78KWfU5ubQaH8Y1k7ag7CccQnKWu5P1Me5gf61riXG4wp51KkTYsLUL2sxwRRziQe7D",
  "key29": "5ANSND1xJfb6oBt2tiRK4sVFDSqas8xPBmbVmdmHq8fSDHtGcNA9KnPJQZRFokNTc4x4arp17R6z2r9b8Eaj1JhM",
  "key30": "4ZqC4QgzYgzWdRzzroyedMALqcXKxJosMtFTrq9t8TSMNH4tmJTe5knRsJ2ygd2xWbfkUnm42bkVC93jLx69279U",
  "key31": "qARCDbmtpXPyQvvyRX5LThhwh1Juxef2jBbqyBMCThBtyPte7C4qiJ3KGktqFyJLx2cbwB5v5ia8cDv2J8N8ach"
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
