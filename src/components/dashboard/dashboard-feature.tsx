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
    "5DUJn98zD6rn3PrReBzJvVRnKDvkww5rp8oc6uhZiQF63QDYGXrB4eqxfCf29HQUstcNRPdYZn79ebXZZhLfPSoY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xeFAsLxuxsQ7uGUUg7MzgAw98EWWDmWueC7fSBbwX3mGhspDJU5b9gwkmr4yuio5m1Huem5tGf1ZTGCe6QXL2ea",
  "key1": "4CPNg84hqm7jsuUMsHXxz5qM8pWsX54zxuJvHDXBFXqauhzq98inDswxaLdmpAtjwTCoH1LX2BbNGDXrrPoL9oHW",
  "key2": "4n1pYzsp5Rbb8W4Ui7HekzoGNp4ty4qkeYv4JGA61ge95NVjczmCSJidz49KdLGDAhxoCE5DsqPSqdy2JZvGD8NC",
  "key3": "2iEu5V5ZKCzyBVszwPGfKKvsyWXg33agzVetS3BiEnCYdbimyf4VopokKjZmPNxQnZLvKmQdMT8CW9PfT2vAh9nC",
  "key4": "2ykHDhz3Jnia97yDsd6x3p4Exubpxpf84DkbveUCbFzgk3Vh5SeQGY9gAqekD5db1Gqwa81vQXV6ZjiVRADx5GW3",
  "key5": "2YiBcUxNM4wze9Z329M6b2zRgKiAQMcMmmdNVLP9tiaBW4CzbdVr5FjBXZGR3EgvbxYeZSFTbE7tVeo7ms9gieZS",
  "key6": "4YQWvBv4p3hEAeVnXMr2EqznTY4iLZC9i6bRmpeg21n3tMEiQ1RYaZ1wAKQGVoLVqUDu6f5MpJ7Jdv3Rk4UuFNGg",
  "key7": "3bRR4EZV9DxLd7MfjgBN19KGzL59pWCLxmC5edgzVKX6mCs9QjXyQA8DvXj7RdoAE68H4ifh3dztuba6TTRhGuPK",
  "key8": "3jrwrW7wt4tn8QgpZXuvKyPSGthDyJUoH84qVCjkkxKcsNXbF33PRGd6aZim6o2hUyV8oZF9rx2bDbcBfv8bECPK",
  "key9": "4zaoo7X9G5nyxqXxzxrPAkdnyq1gFNMx9yGTAXCsCKRnJLPGPsHZHyMULpTrsqjBQo4ZdA6iQGituzpN1nCgq8eS",
  "key10": "2J7hBSrcSkZ9Mg8jnAaEf4H2ocShNMiQdcSiDywLuNQsFu2A8uRraxY2zF1SnEibC4r9Zz2ZE8LuKp5Jus8Ro1DP",
  "key11": "5ZeBBFhiecmee74ENBLG64vqXQAvEVyCTJiHfTnSPEGh3UG8iQdZAaCiDuh7tR6dhqekYqZtv9Qy3wVHcQ4Tj5bo",
  "key12": "26ugX32YXW4SHbmujHU3HHAqyFLiAuBHyB7KNaj65V7s2BhwTX5eyyn5ZdmpeMfbpibgdyLYJH1UpsPYD9sgQZmD",
  "key13": "3d2qE4VBUFzu4oeb91cUUc9xpHFQiyejSHy33PaLy3nEy7yas59Juw6DN4d651J9HLwf55jYK1ozgf5itGCNAfaq",
  "key14": "2C4ok3J73AYsbKDYkJ2aQH2nGzVF3BG68c648SVkfncJwHVwY8HbQZAy9vawLmNs3ahf7N1mchSXhmJVzdRzxGtE",
  "key15": "2hT5d1XqdBG2v4JRELMfbFP4ChEGtT9Cyodr52bEt2AhtMXTAhLhcTXatMdF9kh21Yg1EwdK1w8euYTfTUqjD14N",
  "key16": "4JRgJFmGYKvnoNk9CX1qJh9aUShYMJaxz6QYdEXkqojEmQ5FXHNoqXB5it4G18kPUhWK3tHCPzjCYxHVHMiXdKp8",
  "key17": "5xTy6ykci6TLwUwGwyacXgW5U5Sn2cbsoxBKERs9sDuPA63NaBADE9BAZf4iiiZQEbgzsrqfYZyah6YGpEXuqyjF",
  "key18": "3UJEpsH6FgaZK1UyJoWN3kwTSLRWYCnN77fFbLTnTkYMQSeijbvDECPesTpH2PA4nN2rVwpT4qE3prcqL87HczfR",
  "key19": "3vGUm6EdBfyoQTDGmbBctEB8jzgZaFAnsDkHZ9m3K9xLJ1da3vhFvxrFCbna2EhMvcAdDQUcMNg6zeBajMsppZW2",
  "key20": "HAGSzfu7HVQ4WLkg9CZVe1VtsWAfnxxhMMP8CTFb2d93rXjNw3QgSbiD22vzw5Qk5iMLwx8eEJ4ZSEpnS5s1pPt",
  "key21": "3csWezLyHzzNxZgDtLJpw6anjBNZvWvUEiDkUQKgFtss6pScmNm3LYDPHGcnHoYkqDBzpRKN1itTNc9Digb2WZJV",
  "key22": "5C6SCwKzWKXnuH5DWubJm2oFFEMFcK3zJiqLUSPaFK6ZvFftEERN5k936aC1B6Ba9NYrebRUkQVt5r5qyELCADv1",
  "key23": "5iHufnwHv6PJh3VSRWAVLCKYz96TQKPHQt6RkLQjBbNba5JhoTnzj3vAkbpafefuUuQRHafwD9sppdkXZXnRuFZw",
  "key24": "3gsF4EcyS5sVJd9Zfq1kDyTC9qLzsiZrUduHZkPeaoXgVfqTGnjqiV4jWDxU7roTLJFjd2RTUVNVFaXamd26n39w",
  "key25": "2npCvXgPMZgG4bof4Qx3bwhLt6NmZkCvPWBCcV8NheR7jnLpMzkhmFtE7LDqiGk6txTUejLPpyjGoPSagYhmDqmj",
  "key26": "dmudNxJxq17dwgHGdHh6h1pUL7NGE3S3DMektN61PdzGEpumeL9XxbatN8XJkwqMSJqtow7mfpgXbKc5eL78ZqF",
  "key27": "3EMMpNs9BoXxz9DkzZeH1Ecv9hYiJiZnPyvjUUWJbEnWkJDzgJx5KzQS88mJckd21n5Qu281gJhWELkdu6YRqLC3",
  "key28": "2m6QspKBvsvT5vKyLmQ4vTqNrCZdhTF4aBjdnz7RMs9ndXUv8FPvH4HbcBFDwP8U8mTPLb82jKaWW5CKMUEhFB8t",
  "key29": "2snk1fGeVQXZ1cCiozxuy98yPJhGUk7aLzaarHbvxPP4Gf6UkvB9fKWHLBwyYtXmFaKtkUGjv6AcQCz5hi7xWav1",
  "key30": "3DK1RUFGbFnenYAnAqZB41tmiKC1rJsHvYNutspubdC26VpnUNtKBnK1dHKBeVYbRp6Es8gaJWHjPF2QN67ggVyu",
  "key31": "57zaBJCb2pRmVPuoTnQj4kGUKtt2vQjWUjce4JkruN3Uuc6fh5Gjk8DhSd4b9BYFHFN4tY9Wm4dvrFRpbr3XBxSX",
  "key32": "3uNKVvYjNc65ZPApenkfCjTjppRCNBihdcrE8TW9TiEhHkdHq1HNptpMWEXtC1ibVtMppG8kCSmWHDKTzjoyMnoy",
  "key33": "591KEXre4QUX3w95zvRQJ7sF8JVgFN4fmntEjbHRiLFR9YRY1TeJJSoiFxJiLqB7xzYp1nv2bwLZmRKaf9xVdGdZ",
  "key34": "2fBUZ4RhAwKWvbG4YmqreVzufqHbzmR641fcchum1DzqXFj4Ys9sAnqC6wMNsTn2y6aKQN1eMEk1JS6jhywtj7vB",
  "key35": "3GTFrWMsWcxjgRDGzthyTJ6LhLxQYLuBwD3XBoLKShbUmrJCC9zz7xsLnuyDaEcZuVdJRNi2KftkjUVV3xAt9mrT",
  "key36": "1252yyMqGLmLYqNUmvPYCCRtH35vtxipZXat1eUHZL44Tdi3iQKMzQdcMzkHgnF7Csn43ecDhurWPcmBH97aLgj3",
  "key37": "56i3ihevH5ftZUztKjsi33xLomXsQdMvP2r3yS2iHQDoxuriPzyW3opzn3HY73AKaeakQo5UBVKaLd8uMPYdZNHs",
  "key38": "4Q4JPkzm4yAUo9LWvXg8kYfnsrSbwvatW4KJsA3aG57V8P9mS3txCztDVjmPZ1AvKzM5fp1fTUxjwd7y1dMvom5n",
  "key39": "hbPMoyD22KQbgxzmPVuTcS98YUUMQLXrECDkCQMyurbymENoN8tdKqmJDd35mwZbfri1TE5cvg22g8Tw4GosMXG",
  "key40": "5UHAS5EPKnJEikEy9X34EmTEbt6MwUjCHGWKuPteb6Ty8ov8aQXVndohRxHPEWKweEHE3zfSM37LjUX4hWtyieGn",
  "key41": "3nxP4bZDtLXxrLcCby3j6WvZuBwvzFguHmGAWjcDz7v39YatLCbnms7oGbSM4uYkbRmNSPbgi6sVqT1hKCzFmJzT",
  "key42": "53PWhS7yv5AR7dREkf1s9Q1gJJ38EcAJx39D8dHgwRAGfVvKcSyGbKgyi7VA6oEWJv5vaUhBY6Eu7McdjYoSGom6",
  "key43": "2adEFggJjpeeErRFoqRpRJw7pQx58QqeSrzs8w8wcprroM5eEq5ks1gp6z6haYuwEq88UCqdTKsQm41RHf5xXmtU",
  "key44": "2wK8J5tjw2ioD7fSxsQVRrKmSf5iPCfsU9D4ZejALq3KR1K51LsdSfp6DDzr4BxevLzhWYDxPzUCMUh4N5tMez6g",
  "key45": "2xtR5H785uehkdtZ3w9kH74Rzqaab8vFWrcxDS2dPm2TwLa3igBx3mQjT9MzCkb18DXh2Absdfzt32JHGUQf1544"
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
