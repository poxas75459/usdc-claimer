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
    "4UGnjgt4ics2EzsiuR6JSViDoW5Y8F5NhkTyNrM9iugYABXuZFbDLvFebq65Ys7Z5L4WjqWwsa663XASL7B3xUhC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pwWntSw3cCY29DrG53nQ2QhvrNP5irg9WUp92aSpqLmq2UZJ2uoxNpz379A9pLTdp4KTCkCnzFWknBKm27mJDku",
  "key1": "3UTt2gQq6zbEMPph5Gfu8FDmMbAB9miusj7AS1mnQ7KpBKP7VW4Fsta2CjJrewLT8NC2r62fZ8ucvcmYJybMht3x",
  "key2": "4Z4v5zKjFskCMmgAc7jAeHqCBXi6Eue3hdz2xmgpUdGt7PqhJrGft3VXJBX8RxvWDhBJ7JkT4baxvqMDLTDN1FHR",
  "key3": "8XArs6GC8h8G4VV7x5grFvAdnDzH83S55dfQ9D9bGZRTVC68KF7iGgUMmF1mNnYj9Tb3M6iGeDeMEtM4KoMVoKD",
  "key4": "53ZJ3tLzKHpHPA4Qg6QkGanmM4VCiQtW8TmyU8pXdagJHV3sAmDAq2YqLohWzzP2c3bsExGqhA77cvG7CvSNiYj1",
  "key5": "33Zen2Xv3VwRBLKqYx8dgcZKNUp2t2s73uamqoSgi66BVA73LV6HFMP4jWiUQrD4aXnPmT6mC4p2dGs5JyC7ATGe",
  "key6": "355bWfnXbrvmdyAYuLtqFRiGwrpcAYS6bmtTTAMYyuW94AtNe5TsAzxKTaXsCKop8nvstgBwzEDooh6z7MAWEtfR",
  "key7": "55PzsKCAQwzZdR42CJA5KoCq7vqV81i8CkpjWWt8tH6qKNeGXxb1q71tfD5FQvKjCjf1WZw9MQ3FaprGGh2tGjgR",
  "key8": "tGyV6dvhamB3zfTB39duSwCBZ6uY1Rt8CgqcvgHJbmoTPvt9pNzs6LfhzJeHbkDsHSA1Qu3CMkBSifrX7Vs486F",
  "key9": "dB5P8MtdL4hwcM4JGTBFV9pef7axuGpXakxxQZ64Ff3MzDD9ut4z2duz2Zq3bzopkaFsLYZoxKaLNqnc7PLrAeL",
  "key10": "2YCUkC9QNynmLb8ZSn3rYyH849KoEdn3A27aXSKg6NQr8nXGcyAqq4RaQZWdvPCQqEc5kTy83ZP96ykzad3ZM7Lp",
  "key11": "oaoHVUo9jMULCbV1CsXG1dCQozH1Mx6wNem8X4w8sbEbhNgwixtBY8kGPWa9bQ1fCyC51AddSPignV2dZWAJtsn",
  "key12": "uxBRVnQUFkhuGMLRurZGmkV7dfMUGfWniLd25h15a9GRTEG4qHdM1vSKzNRbBGbW3k9yEzoGBN4K7Vbu5VjwvPW",
  "key13": "5vFgV6uCLp2TvvbajpJPDjoHxBr8MYYWyajJrnFmRpTwt9mnsq8u5TQSGoi4RpcfDfsHXKG4VAzDGEh3R14cGi25",
  "key14": "372BpvHLs7twFnw2auqMumG1MC49VTUKFeVxmDmUmkyUwqws9yAD8GdGwLnAtFx3jNhaduL7DuXNyqwx67LKnHCX",
  "key15": "bkPC5jno2afDMph4CtankhR5prSsCAHSMWcywVfn5eTa9q6GwpXPu9Wa4qPSyuB7ApjuB9y9PYhHtVCfycMGAu2",
  "key16": "PxKCG265G8BpBvDWCoR2KjkHe57cyyWuGeEYmiobkYJJzKojkLauRgNRsFig2RDF9EnAAgfFVLM2nqauXSXemtE",
  "key17": "5eU36oFuXP34hS2brRvSGZBEFEhfBzKXsVRDs2EBdbGpammdXjFmxrhbBViXJSHeWjD6C5w4YCcvYv6UbBav73XC",
  "key18": "457JoYYi3mkT7Ab32J8pcA6wch2TriY8Q4HziEsEzpawhQTxsPE8kA1tiF71tYfBRx3CakkYrsW5esrXjtzcii95",
  "key19": "3rDyfX8ZMgTDyg37coQrm4hnFKfDKk7QD2SV1ULerKbSA39X9EfVkyNSqMM75Lt48Vs3RCvtUdiqcHXavUYk57yh",
  "key20": "3XP6tNN1FQh3bYZ7dt3RQSbZcipzG9sR613goPoyy8itk2vTbsSo3qRdP164C1P4P1JA5Vh1Sz2pXfRVhMQ8LNrS",
  "key21": "2tVFGFqHh7PQbqWhHhEw7kPr4FPjg87zd3Wtcy5AcLuz3BwomhXmfPbL7aeXyXKFQJ3voPHw8m5jDiN9qeB5oR83",
  "key22": "5xeQhD56o4FzK326MhvBwT8uxthEK9UtCqg2SPi9FF3QcoD3rVHG1Wz8tJfuZhFkjnFscBF3WH2nPZBAS3F2NC7E",
  "key23": "P9a9xnt1RceK3gyGx1TRApN1ttdREtoUPRantxDe6tiTNoRttuGKXHr7Mmz9cGU7ECGq5tYwseWJZUEgq1wmWmV",
  "key24": "4F5WWzwUu72PrY3RdWKZ7bXzNnU2gokKPkb48qe1Lq3Je2KNL7mSBgA5Xpy1E8SXWLjh88cRWBLDjRiVj7qGAy9m",
  "key25": "377cTJk763ruoLNJFtfLffbQbUthjqk1hBb4WEGf47tgQmroBKGth2P6ZQFBWnDTWLNPNGZzCxk9UKsYgsMQRPEG"
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
