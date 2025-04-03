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
    "2AFHFgcocbipoUTbSUveoJX3j5FSPNn8YfGjmpGur3aDBck9Sz7W7mxTVnwz99quCkEng4hxYpHT2MYd5YBVsi6Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v5sQ7kCaRFYY1cdExu3LZLAvX3LHx51Q75qrHzvVQNB9GJbCygvhRDSopJwEH3peU8erkuzJZjE7WnHAhc7tgH",
  "key1": "3jjxovja4dygDTuWLdJLYPNbd1t3ZxkiZycLXJpMVA81TRQpLYGKKSHAqz87Fa4isrn8wfgv1rMwvQ7TjU9FDyU",
  "key2": "5kSPg4WroMVcJ4G1HctZcz3C7KN7hx88XrfnhTgzhZ8q94CUhnq1vTJoGRzspgmjodbde1FW1QR4MbLaAdx3GqpE",
  "key3": "67W5acaWfhktGoBA7L5nCMhLrDLk8xKRoxgH7e98P8ChXDb1dc3dMqRWffCkcbJXZHmb2dvM747VNJ4Np363Zejf",
  "key4": "5NYevC8iRp9htVgN5CVzWVPKF3pZjvuHGHMtpNHTALywMEDWG4sSoFpvyEmzmxMDrGJiRcXD2BEsXwvDd8oTN9SZ",
  "key5": "XhWMoxxeXfpCmvGjNiJqgnvpS8ottRjVhwPu8yLJy5LKo14FCq67uyNCuPpdfoRQZX6srYnuayWBRto64bwLaTE",
  "key6": "3prnFEBA1eHrjjGoS6Fj2paq4mQVgJz7PWcT8gyihC5pSr7Fj2LZUktMRGvbCsamg2fw1EGnqoMGYs8P53zfeSk6",
  "key7": "WS5TPYMpAiMGC6bnH6UE9i6QjZNn9ZpscKqHq4ZEUHoA2eKoSj8ZEjHvKPRF3ktqje22KspyoWX7XpYAh4fjFLy",
  "key8": "CUr8TDygtvg3vjDaV2zrjfQb8fhAQuCLCSAjRTX4YjspaLhHzm4dhpMNAXZq3DmRwadeCGHUgMPbCkWmSa4mRbV",
  "key9": "2Zmi3X9m168utstWdHHd96ZMHnyy6tR9U5UygcBfNkHsz6xsv31XERerKvDM9nxr1PM9LRN4zUGxowXErcPp8s5o",
  "key10": "t19bFiH8bp5DMPNM6v7ENYWvxH3qYjqAw2pbEmwxzZH8x7RaPDV7QUgjHRUuSTEbj4j74NfVt2meGiEjSBwBu7o",
  "key11": "t5QognMbew7ThytwiQWdf8JwA3Y3bes7mEgA4B7AcyduGtCuxNJ1doZRHuWWmk3u4gSpLWYVkAALd1s6jVvXBKV",
  "key12": "2uHGCjJzNgwJzoyn7ddbHtMcnC1oXR4CP3aR4gX2csARLH2JvHSWEBRDUV4tc7KwzaoSWZYvrUeo28Ub6Sig7BAh",
  "key13": "4VWLzrPCNCaa7YVS48Upk5fJh96ZmLc9SRoDbzogFtH3Ac3bew4arx4dDwN66QXhk5Esn3vQF3A4pEF9LCKLNdCn",
  "key14": "3De5ExNGaGEVc5s3WqC9PVxK7Pnr4eV8bqvZZrw2PgytCHsXwe1tuGqLFS1KpeHexDvTtCrWAekpZVrngMKvUyed",
  "key15": "5heAifYYqYCiHvvAVKWn2bkDwqHFVNozsvVoWJ3cSVY9DP3o7SvCFz2Hs73eaasmo6282uXFqWyXbbzs2wF3kh2J",
  "key16": "5GyHF4AKPDpbHvEQAKpwq1QGxnwSCJPokPqwhbLDfPbk4oB6RUnHemKjZFkmKE2yTBB2efCHiynZjNza2ojeikef",
  "key17": "4FYznCBMHDKZNFXmx7CYma9GKwbJ8enjWQmc3cW2oRXve4qCxEakhFHAMrCu1NsjLzG4yWpXcBzLkfxDM93Zu5oZ",
  "key18": "7vyjVvk16F5nd5EJsK9NTeDTVcAHgKenvLYeHXtJWiMUiAbDdwk4Z1fS7hutpwFZ4jLGXaztsuaDFqLFDattqY5",
  "key19": "5Xwj1HKVd7EVqdeZ2KpA1veL8v5WBwZqU95bHK77q8hoUn6PmuRtrXEtQWSjUhG9JwNBxfzXFajfAXW4Fxhkt5Tp",
  "key20": "5KVzns5u9XsoPMeqEtpiErMiTaAevkWMMC1pULuppW76v5iuKt3ErQ2CHyd4NCDNDHTkG3rQuXPECLtxGMbei7oV",
  "key21": "4mTC5S7TTPaANuiHgZ2fGqhADotr593bahAKYXQ89RdukeMuUGd3aWqxX5PS5jLT6ooyks5vSFGE8toL8pMpbaHu",
  "key22": "2jqgjmYNwRDGubzanVsUdMPd67TcXPQtsjv79cLtJUK5L6J6CJQrR8xW1dTL9hE89BCRsDwQUJytbtaa3tvAvdyb",
  "key23": "4FPWKUkfHweZbVF6V4Z4D1P9FUBnNjtz9K3Bpmew6FJNcPtQpArytHGujHyWmFBz3CLFj8u1TcvEG5Vh2tPhxh9L",
  "key24": "48JtD3j8PZS9udZFJFH3EwUx8AF7RcTiiE15Xtu1t3qasjFW4MdvcdsEGCR9jW3WJrz1vdaGkjDXV2Xnw9jVF82U",
  "key25": "3D6uo8LdCmEMTkfjBURcARXM9YtLddh5tzxgUij8QMQHVeLKPDZPir1qgVA65LuBHFqfJTVrm5wEujiMt6T5XntS",
  "key26": "5mfN399Zwb91sKfZjkHNrLhNhCspQy3Jj4ZqcU642ntj8r8EnymzREbCRiR4jHmxRDTD7XosZdss6ksxFkVYivLB"
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
