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
    "Bfg8vpV9ZuAxiB5bW56GiM2hFRKvjhDC9jXoMzhKBdbSaf8uiEg8Y4eqNPmaQFtKzJ9KCcjY4aepaaw8LA8X1j5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eMmdUjN94yh525yugXMSoWTNpbCEsCViwabFbnGzmW6hDxKsmvVsQqqZAnZFg18VaFK2WmrMXhNjocBmmrqhqfB",
  "key1": "3sDk4jC8beggZUL9GVKhPBVKNZ7QPKYvaJuphyhCrRX4vjwFYrPrs7ddJQ4UceNjMEP1TkDkReZqKrR69vY2BD1j",
  "key2": "UNtYmpCGvvUMDUogF7yLefLLqmByoGeuLHA9xLSYnawHZejT4EENFLMkzu6BpEVTdRejbDE4WXFZ9XLNAtbNumN",
  "key3": "4QKViYTRbhMsvZaoH6c1rgSm9GQD1qUGKC1DbnbzihBy1ftuV1xmYk4SXRRJYUfoX9f34heNbJhaVMNwc8wd6PnB",
  "key4": "5X1zHMjEbNS9FPhzfek2ep9N4ssejzssP2rcTKFoQUa8uk4GjtEw2o96Rv83UGeVuDEAGrPDUFGGgQYJCowNg1o3",
  "key5": "57Zkyw6ibLDWa9fmWydyNwhVGBJjzGNkB9dbdxMQ6JvMuHD9AzrfSyHexBWg4QbLVgik9TNekL3DNZRmLdcpzkDL",
  "key6": "UJicF87Gxiq3NGNf5RNCWwfu1KBxxbTj2YYzoDWNVRZNN3t5GQVBkKbJ7izWmjR3C1RNb9pVr31zrhSVPvEvdyf",
  "key7": "46i1KegYLdn51k9GC2Zp3h8DsvECUV3K4XXf3vfzXzCvf2fmzGFfyNdPdMYH7uTEQbJegpvePSSHdxFeSc9iCe3S",
  "key8": "36WqBnNPnm9BerL7hnC3RTJHPPcr2j8TDrc47GzPXoZY3pXQmZNCVgqnhk7QSGst9osmKkYNHWGoKF4XSAkaccwa",
  "key9": "54NKQcJExFWd4WQcsuGwtrMw5SMg3q8F4MXrgyHArYFLA3SBnRuRA6fRVnLdpw6pCVMt4YE8uxV1wvML8MkVFjKk",
  "key10": "2vQNAnKEDxoBDKmvQrjqRoSCrTLF55xdzoPs8SuSdrzaeaqVGcVmizyLr8YdLBnwzoA6dZYhLT9csSnqqrgA8ZcF",
  "key11": "3gCGYEPHAPgNoZeSvBseMSapCFWn7wq7v45eUxpRi3VioG85VUTxjbYrRpE2zEdX6G5QkWzcenZgSHLMTKFofgRM",
  "key12": "4y9t8JwsGQ6YJu7WGtQGC89peiu34BQBBfCRRz12VRK82bgSzdwERkxwgDEdthnonpLopUCyWw24aZt1FmNdtFRJ",
  "key13": "5P7nqnx8SErV8koQ7jQxnwXP9dGbtW5WhZtB3Ty4PrCdFDGNpG895wmQemTB8Z8EcdSSm2KLwsDvJQjhCLGtaJLP",
  "key14": "i6NYnoUBndDFmmxK7FciSoGgRRbYNPzhPockMkV4ZMoMaEFwaW4vYGDbENWZnSxiNASE8Jh7vJdyUv9L8pin6nS",
  "key15": "4VQ4fxbdKtPELpHf7jagQfUkKGePc1eYHAnY3rYJxnF2KyRKKvxNtsb5xfDBnrTV5EVeod9cLH2jBhoZn2sHBWeH",
  "key16": "36wYHqX3bJcgRCHCerE7xN3zVK6MQe7dgWqtv3d9w9tTsatCSKiDVARVc8aPFDUTva5FmPjYwbdYecdUmjuDYQ4r",
  "key17": "2SukQBvrwCYatsSWvNA9SQ926dQpVFM7CrF1qYifYYQWyVhLmik9kZkcj6qVYBCPN7bbdPjztY8xteCDbCTqmorW",
  "key18": "5s5nV2g7eDHGpCCA1iRvWZ2YopknkpNvqk6brJTMmD4RGtkPp98a1FVhrUUQLDvATEcjdRmiVfquNFcoogDBVQwM",
  "key19": "YTGd5G5iWXb4RkGPTnjR3niAUWLaZatweiJa3L3Zo3Kbr3duzWnBGVUzu1uvH8NsYxESqhrb8qwt461MqBKhqu8",
  "key20": "49EvG5SAKu759gNJXqNJQzKRo2knTiQSnoNAD9tAfnFzrbrr68ujTWR9cZGsewqjaWLAoAmdQJCGVHcqnH2Enni1",
  "key21": "5rE5ZAh32ugUmzs5KVjcJWWg44MTMzRnDtdvnX8PwWeNAwkusRhjj1TqwfE7KBmpfpHssXZAvkMf2BowrQ7EcTZ8",
  "key22": "5u8CXnDoPkUoTXDBTiaogL7puu52nrmTxK9mJbwh2dcw36wGZzePRMM6AcLM3zdXTENTpbe4BGYicakFdwgXHWfY",
  "key23": "4eRxC5KE3tmR9aWnLdF9ajX45JyyFgavLstTNnL4g2L8qTouN9ZJBromZCE55uMwtq9BQGjBjNHPJkiqxYFD46xk",
  "key24": "3Pwv5EQJ1axS4a36nAczzhVBfzWpWXykCznkcDtdJD2hQ5kmDQyrXk3BJtVFceRw6gm4GYFDDetQo1LYL8vAiN9x"
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
