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
    "RjNBZXiVmokMkAQiqtZrRzhm515TmF1CSd2qvktdxi2xkbMsxwHSMck2WdWak1icaxCEaRrTaHaBhtVy7Zn4FME"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T5znfHwEsd9KRiJTLAvWnCUE8AKkt2iqc86x2q6Q3cd89vr92xZtkDtxXmKWZAp2KM3y5S5VcsBKYwtJLXCXXio",
  "key1": "3LhgpbyuQR5MLNPEH9e9KmMDbKtmH1SkfkPvgQK1YS7vvBi8oerh7oX1dNztAxt4YiyRDRUr2Skh4oD26W1w49RJ",
  "key2": "4Sxap4mW7FZ5phCi9BULY9cqbXTjkz4KqzJNqRc9gbcg22P9EwhDHg5j8oRYRWFdrrJw4avuU1zTPHEEyzCzGiqj",
  "key3": "2wi7GVZxSoL2e3p8HmR4XkCxFwPD5w9xiYSTtkzNpoakdnwT5t8ZZBsK1bWQaissc7eCDYjWAwQVNE9yGcTnkDe4",
  "key4": "5fzPEgFuwbwQfbsKSi8KQ5XCfREB7apF5LrnCYXnFanTKPU7M4yoaMnYGswLSLWwKD2xARtSWGaWCsoTiBVbS99G",
  "key5": "2QUEqPx9ijT6XDhNG8v27Gv5Wp2nzNF6xE7zQ8jhBa4uedegKCk9QXHN3sGExEPgE8hjKechVGH4LCc29Y2hLrRG",
  "key6": "5sVNxiwwLX5Yy1zPWzSdwbcayTskKZy3dAzc8mjWWZyhW4d6Lz1VuMuVA5e7UtmVtEbAVdkNkwPLmFnC2gmjhR1B",
  "key7": "3VxnubUNiz3Gjz31gferranMYgjKmsrXwfsDt4BF1pVJJfZfR4bdSVUTTkdtMYYprewk44dYLTCTNnrd6fBr7nFB",
  "key8": "EtfCbTCE5AVxR3GKCSBr3pkFZ5vyusXrbg1NxoVXqMfPUCyasC8diLQB8qxWTXRr6dxD6Cph3L6d3APPc3nWpQZ",
  "key9": "5nK9cir2WCCaQ97MWaXiXZb7NhadGgMPQZZtWZopogW29qwE1eoGNhgwC9YWDxjR7ujhBhNQhNmP9xrXFd3xzED2",
  "key10": "yJKtCdRV7akBdD2dAjpba6jJ4et4re4FPGV34tkefmhG3Sq3pqV1LF5JakbdUbLnXUkZmoPZdVteAKLx2TWrX4L",
  "key11": "VYxNWHDRzHCk8pYshfb2KoW2qnyqhiqPQPoMoZPQhnWc6ykJkxvsRnweirjEmjiBfMveZVwSXMdrByhSsHrnVvy",
  "key12": "HHzmG2DtddMiEGqMZcHAkjhK6VKhf5pxH1DqaGrx87RwwATFPn91iHcHuhrp5RTcZZcjBzXFEfY5gMFujpUEtuT",
  "key13": "5aXay6o6VunPd5WzNtxtqt1cWYJBUjLNgbp4FqaBVYrA4LjqFBqxD3SPBjKP7fD4R5vXghRq6n1dGXK9FbbK8zkj",
  "key14": "2qHymC1AmxJLJPxGgZDi4fwmVGF9F5Ez3oe2L19qkEkD5opB3QDw4cDBrxjWoVLdPjHuxKS4iiXyrKcRrwxZknsc",
  "key15": "4rnCFizAEur3ms9WcQ79b2op9JohGUxdUNJqfAdQPnPHcoESuSLxQ77vU4EMzDfBdsxtraSBHewAai9HJ2if2LXN",
  "key16": "4onGthSxqAEiLFhCubQ7wbnEKdX4ypEMmL9KN5TKH5jYCaGo4FJCv5dMsg99JNwhnGNQZDA62NDbXgLntXUZrd4w",
  "key17": "mLWcHS1VQKrLuoBkWLrxtD4X24ymAcV8AxVnT3fHtwaDSzxTJT5u8WMpHn11nCgGUTKs7Kk8SyMWxZe7BeVMEWv",
  "key18": "T3gspJuCZd4j7YjJ9QNwCbS166LHVPVgpA8Rzuq5h9MMqSWM3qkmUNzQ6JNRoimvE85HRZ1yHQtcQpW2bUY3WW6",
  "key19": "4H8XmwaLy8jYx9Nnk3EBieXiAAtjq7cKA2NcJykzZa2aPddp2csvTVYQSZ5k35QWaphMKoCwCL6xC2chmqCi2zCk",
  "key20": "2zXzwqbM9RFPmdrf3h2AmXJ6fSLKsBqKnXWEvREenjqH495qzEZPMKBwhKinhw3atHLRoLRwfWjT3FAghhaSzZ9F",
  "key21": "562nKXkTCNb5GWjtnPquzNCxooLXFaGbT4ESFS2j6B9An7kQKWAbE9VcgkA87FFMgnBF67Fz5hmKYQVE9PVCD1FB",
  "key22": "45R3J7ZXdXsuT3aVzDHhKvJn445QWRTXvgUtC7j6npkdyD5taqDFLBqAgr519dKbJ29rrsu7HopookEqrfWcbpxY",
  "key23": "GmAwSSw1THoXwQ3986XREYB8hYQT68sPENMZGx95PzMjzjG7ZCh5oq4EgY1wzdLDY81yCwm1sveNVirhSeQwzgF",
  "key24": "2CfbW9rfCv9PsPoUNi7h7CujEMHkCoeXCQwYSzGQydbC2zDZcnEA8QQPC57u3f51qdWWTdSNiV4Ad8WLVCswxrSm",
  "key25": "5po5hcqHwGZQWE7ADq5sp4xoniQFBSDt8VHBfvFXcwRLSSArv17eTfAkGMGiX8fAUUNaoCrrzHDj2E52JaAcPGH2",
  "key26": "2DLPvMbP9Z97A1Bkpp496kL9UBovMJKJX7SZH44xv6VxMRHnJUKtJygXaEuK9hjqFyFVvk2TKCicMw57955iZtNM",
  "key27": "3CjzXaaRVZkpVHnEHXTpL8YDtdNUZrmCEzvkuJEFHyaWD2Pox4bJVGzsdpfDbgnfHcqM6UGiXYPPwSJiucAENxXd",
  "key28": "8f9qiirTwiUkQWch6pLVkaQTRGJPmYCz6CadsW2fvHjLjs9hnhUxta6iTDudB3ewUMzKfzYi1TY7Dof9bNi6H2S",
  "key29": "4x45PeVkKjLLpXjAcbooUqTuf9mVrTzDcQZJQSXwvJo9d45LCXxciHzJ5yqQfiFefJrRxnxsnpvGSSgR2KUKuwG4",
  "key30": "sZGnA8EZesifCF2oqpEcX2LtvNTRVE2HNSNGJgmBrBAJ7QnTGKi2aJMdEc3cXkGQQbrfGnZpAn8D2qZ9MYnfSyN"
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
