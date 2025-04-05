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
    "5csCGQuu3sHaGGBxDQMPoRZnA61e2rJvQCPLSGdj3yZFDf1717SXnEysuLUBXpiWNt27xtTxCg4DDpTWtBR9oaf8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Srn6rbgScACxpGU6RouuDyTPcMmwFAgTPRYjBY9qDnWrSSfeKPCz8isZ67GjBjvQPcEMtXo3j8QXkGGiqr78zdA",
  "key1": "5TWNGGjPk4VvD4ruXWvH5Lntv2jnUh3oyRkieFP2GAy891eKeeYx6ymVMVHjn8uySF53jXg2RTLjL4A5Z52UTHpM",
  "key2": "37CNJv3PrHuvy6bEPyXFfMGiLB1nb5KjaguvsGpgbhX1DBEEaX2zTqdccQMbBzy3MrcoKQFXmUdftYevg7ALfpwu",
  "key3": "yjfkc64QSGP2qXpkRjtYmjAVQTBjriXcDHCkhh2yjJRwwGKuCbb3bKh8P9BVTAy4dLhTPBzjJ1tk4J2HaSzszaY",
  "key4": "3Q4cfCAUZ4HZdqJ2T2TzvPSEQuRndUCQYmVPE5pY96ZrAiWDR5Gp8kvojPbdMNaUvN6n3rHxHAL4NJBYfTtfJ1yq",
  "key5": "2CNeZEwUuMjgHU1LrT2buuZKhBBvJu4sudS4YNFXWLYt5A4UHC8VGCtPowzHtYEvx7JR1LPVJaWxeDWvMkwFGfj",
  "key6": "5b9RTSyXhZ9fKowPpNTkrXxNhaZWFARwCUT7tyYmpzb3Cje6WUrTtfnZqWmjizzL79MFs2TF5Y2G8NYv1XAPmHTA",
  "key7": "2KPKXSZSDRuvdDWbT2BxZPYQs8qBa6ejRdc883RCnwdHW7EuegMt3tkcTxTCQB1aiACWiMKqei3GBjNGD8ogkLPd",
  "key8": "492YFSf2AsLVHSEMTjSK7seG3MDh5KNripNveyNg6nYzLxUMQnd7P4WwHv8rkNEFFDc9A8aBRYAY8A36osrrReMi",
  "key9": "5JWQXRc4BfX4EwzmVSuvJAJBWiqDYL3Nnhdjvpy1KQ1DFzHKKiwc3nZZo76F1FCDvppjsfKHsB2BqyEoX59T4kTH",
  "key10": "2gbpRTg6ceypXb8SMiewN71KTLGa9ufLHVbeRuQ2gicMm2d5zu4Y3ptfP8PWcJAcZk2BPtsbbtppSpv7R3vcMjez",
  "key11": "3mrRtgRMq41AFcQwyW2usoChATFJN2GnvJKw3xXorzt2jqTZUsmy9tNviXMHfHp2TgxR3NWzZHMk9rHiwjpwGKJt",
  "key12": "2Chh9885DtWAXWqg7ErJQQYRMy4KmHRCjFW5EMargQwhGW9RtHg1ZqLxkg1tXxiujwRip6b7bn67Jx8gfyqnmDBE",
  "key13": "44ruB5z8JkUBCW5NTG4oFZb3nFMKY6YG73w6VTUnZaRk97ECYTfYavm8Wdo7BB6D8f37ZnGydLXwgWuu91Sck3LQ",
  "key14": "2wuVvucK8bz7E7EKPo5KEcYAFnAXjtGURufr43RrvXwWV9Dzvnrbj6odJERewsycCH7c7fgpKZqTtCqHci9gfE8B",
  "key15": "3EmsEH274AAnYJNyMnqQp7Q5ZSNcnrNPC8WD7otBozAjzYosGkDP1TPqb7QtH4Kv1xNkbDocyN1FsM7Tqb3fDF3",
  "key16": "3HPWBLdQfGcFkx7uCFh3R3Z4gZSV1unjCQ6NBY1z5kT7mNzJuBnyrHrA4rpU1jprW2VvozrLVWC7JUrD8u1K2eY9",
  "key17": "3QXvrCQExoxMGvKA8Qg8v4Ew9gmLNAnucAHxygDTDJ4nZvXdJhttfkL2wpdo3yFXxo696scpZp2Q9WE2hhsBgfy1",
  "key18": "3Jtwe9z4dWbyyTNGMbqQzEFvRjWzK8LFLLDjXwr3f4AxY6fha3CFJHwF1PnHPsJhEzHhHbWzWfikNeFrvhDtfCKP",
  "key19": "QLN3mffKDmrK1sgXWs5QUvwjCEoUY7p6k8q99x1VtfWYCfd7zxwKgJPCuHqtJoRLbbNcST8ztwkbG7ua3M5LkBQ",
  "key20": "5Z1jLtosd4rxFRtZa1MB4jPjPKPWZmWjzPaVG6raW5foXFJMZzdjesVp7Wyw6mqakX4k6XVhgkMhYx8rkHYB9Fbs",
  "key21": "618Xh2wFtejCZojkDtfyLJDBEmYNpGDKGy2Kp335jBVPaz8263QnRxjihK8cT1ZuSZnZG73TyG8VHtGhoym3QuaG",
  "key22": "2XEPBMqSR4g32jvmcz2UjAKopcKdrNCW2JcBvu3z8v7sfgnWKHcbyeA4XD9QX41CjDB4HqKQy6k5PDNF4jda73qZ",
  "key23": "5Sggaa6vbBuX3EXUeD6djkhRYTjJw5qYnQ3ya15KANvYPB3qTtwVh6PkcySBZ8n76yUEBx4J3LbUYX7dZEqRv8nA",
  "key24": "2vsLMev6bw5SP8RsmAAJsXGCh1xW4m8fXT6tqHm15Y6cjTicTbwJ26rNtTGadJQjChrSivdRuNcdhHqGZ8sUR9Df",
  "key25": "3d2Lij6EBiwCKp9b9A7DDSTBQfvsEBKijER6iZFE4acTuGXqJa9sNkhBg8A6kn7ffruUgq5RFgtNM4qYgaMvg44k",
  "key26": "2HKzqni97dJQfjCZkwPdWvnmDmaePQ3rnn7W6b6f9NzS1FnBKm6TfwvQdPUC9MrRwnrocNDZVMM58BvC2VovYbEm",
  "key27": "2q2xnLou2wPuyKycxvotErYNwErH5Zj2X31CV42aAiWPfvEfcijmYjwwB5uQDtuxTWJbeX7tiKoq5XXemr2RhrXa",
  "key28": "4xDpGaKgSqXwpLLAZbCEbE9TksCJGQ7NwsAVMez5pcWPotm6aVeTdfxEZnmN4J6ohqej8jpsD26Fei1YFvmVu1uu",
  "key29": "3t5cJqfy9natQvvEiwLYRp7vKLzsKX1E3yBau8EtZgP27UBpUQdBt9UXDXNd8mUnpoVDeKrKLqU9fetdcJTVmrQy",
  "key30": "5UC2iqQ5YjaMuRGnu4jrAZXsyo5zpUhmpgvchAYnHWkbsoozb8jiutRR8toRGfeSiYHoMenTSaLQUPn5hiTurJgR",
  "key31": "4j9c8U8eCCxo3UinnkVCxKy73eXWBciN3kb4s6kbU53uWKGhRftLoQpNaWEzTaFaM1gxkb7guBtMEoRcmviLPJGV",
  "key32": "3TZk7ZQu27V7ZFpAE5Nxdaara3QzuuDqBrRGauANuJfQoRtg7ZQvCaAZu6rnAqUd55Cma9H7qKv74H3QtZFnuR2A",
  "key33": "66kbhituhMXgne5hKkg7NgXrfegHYHWMfVR5b8Tpd4L7kZvBZnjnz6u8W6teBvhsnoZT63v68YYrxV8CRqWCCBwt",
  "key34": "5FptSkpRJjaiTUUDSeZoGGaGNUVeugxfZMS8KmegUa2oWMxCbKMhzzSMiVS911D42hKiPPiBp2yzVLT1cqyjwCPp",
  "key35": "3bpSszbmLuufoUgiJDrjLkeHZ75CJKk8bjG8owW8fLS2ogbdLFtS3RoL1y7UrcUBJzRuFRVVmByKVyyyAN9g8QTt",
  "key36": "57RT7P9b4uRSk1PLHeumwK8xCoYqwe4a2DrKtBYEM7GNpQntjrvFNgS4UMsd8i5bc9UYZN44kHUstY48iwSBGb9j",
  "key37": "583pyqTxTu4t95iLtdwYk2itxo8kH6FbBbWqTdpobcErVYRBHGFUPa59tiVQeDFx3UEVDucYRvdC8ZBASzt1FMSx"
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
