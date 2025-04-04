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
    "4Ly6ydWqBpn1umszjZGcDPbcSgVdmi3Q6P6yjrtmdecSwJBcna6fjdYDSTnP5UdUAE5DyXGfACwFSEawcBUfdZQ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m83ABXQzuQ1DVR3oMuE6dCk1W7EMEJjw1TZG57x9tBf5fV9qkyNejKzkwShqn17QdKJ9aJPxrX649ksFKiXz1H4",
  "key1": "ppzEwcA2wbfDpJFSK34Ngp5JQcBKMyaJWHa6tfKDAEbVAPRnhEyA3E4j4h1FFUEy6KQwyz5AvWsS5Y6ZBeFXJkS",
  "key2": "dQ8gNWrr1KjaW9sNcz74cgWXks8o1UZGNnb4pF9rNm1xLUmnLj8cpQ9qEv7Cv3bp6dY1nRS95jvwCq2BMU2PAcZ",
  "key3": "64cB12BNxQEY4zYAcJ3WAfGmGWsyiqgkjbpdDgwhRQFFpf1JkLt29ZbSBuyJe2KNdsN8UyPyGDsTw6eBhdfLGGef",
  "key4": "3vEQhMS1vGWcuTsk1emmrs7Dreu1KJhd3vm64YqV9NTiAtth7NGEv8hvnzmhB3ZL4Z365CPifgqW5qBLXVSMMhsc",
  "key5": "5VK3CHjMHTERjHncA52fjb53WP9caadaKn3zUxian1zfmHphSdyABRWpSkp2b26vzfbT85D55Gz4nNT1mEgRz1tk",
  "key6": "LzEXrpVo49BAiXUsY7n7kvHUrPEuPbMvkk7UWZwy8azeCqEv6p1Jvi6MbGnpSbJW5kpbvLZhzocA1BGjzC2gYmD",
  "key7": "4idndaiRU9zSExVFF3NjSEpsyiVrR4Khs2NNP5ua2ps3dKNgDdYzMfxXgAe9DUuVuaBQrGU7XNsTJcyGkaz8z2XY",
  "key8": "5UK6hqhncG3GQKv1jGnZBZ9KoRQ7q5N97rLzPepWCKcuKDLLLzWwHyYztV6jPxMuNF3U9eUZ3PEvJCJqKgieNRdM",
  "key9": "33Aw22fr28twyAFCYEnJNgrBNArjfLpSdZQTD5F2sL2UR3fXi2apFhdvg43VumvoKMefAepmkLvD34yHqxpMmg3G",
  "key10": "JG7j2KGpxPLNCazDhHracBRFcq1q3vUGzqRerrkKEoch8aSegnGFBpcoMkeMhrqDS2DBgwijxKfs9yTfeBxFvcm",
  "key11": "4JEdua9nXb5sqaTi1DRU1TUhSRJ96nPjfvTzgrhMY63SobcpSMNgZDsjqiQpPaGQVCHGaVb15pXRdgU23pfeSEFi",
  "key12": "4vgPfReb8C5cQsC2dChpo7pdpJhbyWydxcAHh5LF1ytrB4rfWw9auf4buaYE48rUGi7t1DCTnxa9ncC1oQEAP3T4",
  "key13": "2FUmUqYwEWqj8a12BSRJHnnvNs3qaSiWyae7xfBDSf622dZjTA4ZaZ4tHPS6XvgVcVBAbam2cLCpWi8xTeLf9AhU",
  "key14": "x9qkx9a69gPRXPNCAwmUa3Aikfc6wCXjXMYbYhQq4MqpZDURprCFm4jfh2P6drERboPibRFCKkjtb4UvJV4dVaW",
  "key15": "3k8TZCtBFftVoBCKYN9vj9qvvK6rvE25REDmDvN2RRfpYwM8wpah2ySof7CEeVLzTCg6xhocknErdriiweQ89jR6",
  "key16": "4p5gX4m2uxZtpAuSZsiTKnRw3JgJmY31Muhm5p7zJRfZAsbsMuA6xATrnzbtw1rhXfjGVQbe3ckEAPusJpSjeNdt",
  "key17": "uR4eWHVrezprefyqykiWaLGd9XBVqBqZgStehTTZQ42rFv4sk1fft1VMgJUzkynwADEyY9NSjHtChpYeELGpauD",
  "key18": "3SmhJ1FUH2erJryf6eSE7f5y7S9yJr4mCFHwVmnQC5kwxQcV5RnRr1jnC5aT6fiJiabTLhvBQstwdhJraaEwNq1S",
  "key19": "3MG21EPjntKEJXCN4WmqJa4zMbsJ53RUS82D6cRUxaZuedVgQNeneczSinrgpfQgVrupJXWXidLarLPHazfFn9ZG",
  "key20": "4cSh8wkuZcRNRJdycstAayHQJeGqp1J4gHZqsBJQ9XynNZS5YVwQkVQAWAs9GsbpxsbcFxcLAhjLozJKGEtFBWtQ",
  "key21": "2tGg3QZAsJxT7EMa852xJqVp7SuSSqruQs8vYoubxy1VqAgTTKNyTaRa55bAwnVMGaGah4bRFMKgguocLtHMv6MY",
  "key22": "2rMZjctMfrmpcZdnREFMuFr5bAXuWD6Gzhbq9UudvruDXYULbB8ajfNWrhNfyLV6panSSVReDPnbkAV7VVoBfdoh",
  "key23": "3PWGQ56krQss4qAiPefDWWN8isa1X74mp2TAKN1y5ZD99PPZgJza52542puW2R1U6JCGVgLHhTMhJNvYfBK5HQ6X",
  "key24": "3iCwBS491QJRzZeFQanzvHA9wvp9cGXYGU7DUWo7cv95aHTSFrWwQaWwdirWsZS3mQjWeBDA7rVeo5u8QmCWYB9T",
  "key25": "2E4o8HgLZxki4VPx9gSJQ2FVxj8QR1G1dhcf5YG2fSDoHtkFvE4vMiJxJCjXaVTexQygrU2o7kYLptXSsiMD494g",
  "key26": "5N8HwtQ245JDfihq9np8dgnk7mP2sZWeNE7iFS2PVMVwPiSa8kWa3ZBgBaVjgiBzxuV1D4TLcmcyRGS6JhtCPaHs",
  "key27": "4rNKJSp5Cof4n5B21TK4UtpNvFvVSyYWPmbqYrKjE5d5oodJ5ktBgCeojDEs4AxHSE5gR9o4Si6nDxqVpfWqDxUt",
  "key28": "4PfayVTPH4Y9HrR9SwjkD9BgmDzYykaEJnDN11jVamFAfdprgyVgBdXYJwha4xWEzmYq4THVuH8AcQ4am74amj2K",
  "key29": "5CWEwzSVrub7hrqS73oT2MP9GVrBHyGy5jypRaBYJ8brN1F8zkaSnqCgVRmzRnETPK9YHSwdWz7QnFu6WK7VGXX6"
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
