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
    "37xXNDYokFh2yhrgz5RtjhyNEt93pdZx3GSrupqsQYiFsA8MTQVoNCbVV689e8o5dfG71mfC8DtQS1AEFm1pURF9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yqidYZnQwW4u2DC6Ky33VGdeLJct9HvsquLZbymjY6kB6n7wKyyhy3RvzQqH3KwHGnw5L1frPic5FuJLTXAa949",
  "key1": "42BdVBpvwDMQhSHcaLrHpyvUhZUtzLLUMc9rYRpStW1aBAkjZSP4pXramWEXw2H741sdm1CGr2xKTjUTbdL2XEkC",
  "key2": "57A6ZuNe397axNfBCihaMEBXeViiUL4EBiNepRYATm9LD7kjjm3CpmuGMBgnbMPAiUQAKELWzXyvfGw42EnzWv6R",
  "key3": "3rGt5pCuzRBCW8QPfntrLoQwaSecXZenSibe6xFTFYyWfMj6Ya263XBSxsS4PzYEG2iwvqFZicPWCr8ooMb8NqrJ",
  "key4": "2eYXqvkouBWuci3SEKdgDswauYAaQPzTT6LAQTpAyeygzf8SxzEuidF7QrbC4RLVP5RLD6JLN9RuuVYWCVoa8jrU",
  "key5": "1Cz2yB6h2QahEj35YiGtb5tUHGccUvqE5b15xFs5UiGWNbRJncGLq6hPEtk4Sfu8sVNEa3EzAcm22AQUSmTtG9h",
  "key6": "95r2x6GwAtU6kjSvdR6uDeMxt26ZiytNFdhYLDFx7BhEnkX16kppXwgiDktugWc4KMmG2kryLQM4hjXfPKj3tUf",
  "key7": "55hQ5LcW7N7EAQYhcVSrZze7kXNqZ4jTmp4aZXjFCx34SW8UJdoLg8YKyxJQcnpZFxtPZ1QBgGMcd8A4VLMikc53",
  "key8": "eBUoc3iyDUukEDAe7CyhtQuGjN9npmX5RiSbodfeV4xTojcqx8JngscDjWbnbHxbyR7xcS3kH2ZLWohmtxqexPH",
  "key9": "4MTryP9EHZAXVzdsfnTi8nEJvgXyAQ9P2H2n76DtshRqZfecBLxuZDiVr8WfNx4Q2uQVPm3EEEgx5EdhqacWruBY",
  "key10": "31v2JBqtodB1pJheowP6FxVbBKZBGKK4pGM8pXYk6y4TLr7DdY57qNDGnCjnoKyWGS7pTUSwGoKf6GQhvPeQ1pXq",
  "key11": "4VUrfdGGdZpXNTJSEEWi4Pesr2JD6McpkCdEShxVR8eFk9WtfuYD4wzUMPiNUkMk7KusigPgKewChutb2aqYGoXB",
  "key12": "2CzyMpT4scmHaMHVJoKf4FmMtbG2mKnPRdpaXPnGQBWyiro4HcqU4fsSWydazDP9NNfK6jD2VDcwihFxokUARduc",
  "key13": "3swgN9T13tdAcdtCYmD1UmsNNkMqpXxW3CWBRKYeA8g3zF811vUfGZor6dJWDHAbckTDKJEUSLThz6sK6gUMoAoE",
  "key14": "5JHYFkE4PbWsbSaRRmfL2xrDZNPF55sivrUxHNPHJoqkpZ7W47rx6RSaFxjkNttR7MkuX6bvXDukFy2Xj4UPfHG9",
  "key15": "4jNt4zm817HdH6bM8jyhWZcYjwxPEqeVF519WBD1PFrga1SiDt1FGPhVSsx4caxyt8ht9fK5k83giVqcUth8VR5t",
  "key16": "51Wuo1fBpyTzM6WKAKtFX4KcBR7d3dPPFEMUJbHMGVnnoTwN1HUK8br3fbfF9qkWWiZJfLcedXnLtGvGpNZn6che",
  "key17": "zZShcNqcuuweidy7MzzhEdvfbMScKGGqQu5wEDCKCA2JmTUJwbzizN2B1U43BRw1ofHnP8UQpHCHpea1pHwewfU",
  "key18": "5aJDbyMtwC5D1yQMQtyUvFRNWDggCfkubhsxdLcTxzbqWiesLrpoEsP1t62mPKfKmKCdpx4QzpDQJqdjQJ1EZpYG",
  "key19": "4ctccD3qwQFEZdrhrz9xRucdsHg6gsvu5vYPicsyguVrWsra6s8onSei1k7j29H2TARBdRmyuQfvNKPUbMq4hBZS",
  "key20": "nxDfjgFhhzyH93yJaQmccg9DPF8UksGi9QKJFq9qp73JsJHbs4mGFSAUQR82WEgZ7y7GymStC6TAUgCytJfyutJ",
  "key21": "5pS1yNYTZ6WiWPSyzbUTzBEGqY7VRBXZ5pnDm3No9uw1jXK4XSP5wWZ4jReCUaTomQwhyhf2zpLU23AvGJU9byNB",
  "key22": "348HSfecaM9RaqMJLenPv2QkdcP4Q5r7NXAq9EYu3pg9rEA1FJLRY73G9Vktte2foXZneTn1boamEqSsdf2Pkv1c",
  "key23": "4UDUtaMfwEqbEp37SPS1JLJ9ouPnv5keyu2uTA1QyW4jMfCmEwAZNhPcoJPv1gLdhjFeZ67qM9gdKfrxpnypE8Vq",
  "key24": "3xXc7WEkW4ZtxKGUumVbYPhQzBFckhDS96BcwwFGykp9Pygx6hGmfusKmoskiaAfMeo4abtxs3HgmgWtNcvjCMZt",
  "key25": "41cCNZRWoSayxhNRftxe9CQRVuLzJt5o6BQR93svNWckQBkauv6bHjs8Qd6G3Mg39urqnAxHqxQ3TZA1687Xyxmg",
  "key26": "61nbBvvBdeMtRPCZawxFYwGZV89LhKsfTMnK9is2xnJQKiT2kmYbiUaDRwQjja6HVtkDYNVsYHN8bAhhxPHoUwFt"
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
