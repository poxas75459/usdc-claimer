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
    "JaZM6y8ciT8Wfv1khxEkb5iR3wpiqnLryFcgsedG7Hsi1UAtCNFBZoANsQP1HRr7b11jJwK2mdC2HoTkFV3gfnj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32qSuXrdUQhNgXupuTSVoFzzkoBJb35JUVwqPen8z5inJQjKPbzNHzHWB9T47GPKFfLTGTuRPTqed284kgyUDwDV",
  "key1": "611FPtz4usBDFCchsFLxBV7bhrCvRvtVFdg7sRDHkANk764ZTNusRDyz52UwnHRGVpNnwxDNwYmdeT2W7nuzgr72",
  "key2": "26QeZhaSVRVLquaYAYhaphJ6Hwu47hUFdwgJsCyP5yuUabTHzHAxUzLY7MaEthiwWrwqs16QtT7k9WjCePxz8boD",
  "key3": "65C9bUyZZqwNjPCAh7HqWNSJvNBEiAiRgzKqZviSA639xCBXkY4X3hMtuc3YXpgnKCanqzDQNscYx1F8Ryt9ekQf",
  "key4": "yar7EESN33KyUaJJLtKdaUBopoX7gvV3vWMnCyc8HEQMX3rch4ogJms7htm2fybpaMeTr92EoHLjevhnNAntiMs",
  "key5": "3okSF8oanmYnkkmtdssx8KZb4XvmXfWVVHqxTpD2XCHn8RfmqnLPRig4ywig6oxoubySWzVh8T6o1JjxE27PrHKE",
  "key6": "58Aw4GWQWeLcbpCWwdeMtqqtSSn6ov5QXx8R9jXx5vZtaAoU1DWeoQRCWDo5eB9xxAGRbfZ1MfzMfGgAepkKtc6G",
  "key7": "5ejgrD7RNfcprnUtxZvPjNuQMxBVjDTzHzBYzjfiSMfmTZ8SJbwSJjo4FtFo7w53jgkbiszLzC3LKdvwbi9YbZjZ",
  "key8": "NpuY8YqEGBULbF1MXaz6YSy6SePkKjPukj891Vo6RuGURbs1rYJUdCZaBGGzNF1STvsTK2ghyyF5viu19VV4iEP",
  "key9": "2am27eJLvpFQgcAwg6APWDnu8SfKXdqNTyzPFJf7aouZD5Nv4G785ZLfJy8WUYhzCALbpBAmKBNwy9uAtYWJ1NpX",
  "key10": "4v57XYDuzN7Qj1CXsKSq8hFjHBDjXdS4BK9c8zYGNq3EgGbuJZqNdb3qCtbxRzKTkHHaYwq6EUb6ED3TTQV634tv",
  "key11": "3T7aLYzDy7gpamChUrWC1bFKo7BQyJ6Pr1sZWf8KZH92iw5ghS2baHRdbAFfKB3WNdU3FBoDMA4scCaRXb7nHk6z",
  "key12": "415MESyfQDLdVuFfvBq6WFjjD97iytBgaZcqjTiRueVYUSdEiKXpd5oHY6EmY4FRbVUofusB7Aqnro3nmqG8gnvC",
  "key13": "xzpoUPPJkzubS8UYpHSdskQsMkFzA382Ayu6aS7ZvsE4NiHcaMfbbM7ZTxeEtFZYuHb8ieEUYD7onSCpQTuUM2y",
  "key14": "3Sfpcnt8v25ziV1Le6iY4PjywHhqz7N8ekUGUBzGP2BqAbEV5EtQGPowAmT2mD5TdPPqZURNAEECPtF2AE6PWN25",
  "key15": "5KLNs3cuR88DViftrg3TQXENjMbkY31gseAnJGoDxdWXTXXmsdN4bhU1NGoKyZ1KeLyqrTrS1szRh3KyMBfXMcYW",
  "key16": "5UjDpKD2mmQk2SaANwaF3wMvNipYBLmL77mmAtmsvhjsDmmfTGxFGFipLHyHB4PKgrTV99Eyg4pPU7uyYTvd96ra",
  "key17": "5UttcWJa2sw1uipkMfdr7wDsH11246Gbbr5wV5fpXqF2RZVLa8FDEbJbGkBZPqcn1nEhDNpoaC2t2SZi52WJubS8",
  "key18": "4c65oXPMvchgFLGCQk2yvNtH1ejcHtk5L8P54VWtuK8cAFzBXt2UZe43oggvtvv9uqd1EV5JpMZgFZwWgbnbSkib",
  "key19": "REKbB7fEUGVGMFM41bh5dUBuyHYpDz9DQ6AvEQsAF2e37qX6rEx1qeHFc97iEEi45RcC48P1C5JSCCAHtZ65njB",
  "key20": "1tv1AEiMZykqhdMYTVnYH8jfKLHb8wJeT7s7HT9CiqPRWnWEaekasEgisX5K4wMNp9NC32kzyvtUHxnwr38pxm3",
  "key21": "3U8pK2n4BK6rdFau5DDAwkvS89sJ1ioxDCRzYiQuuVAS1mENFEijzru4gArW2vv5Vg9KAroAmzMEcWY8m9r5dgQs",
  "key22": "2xHUmxsrrNA1XWsrLfYUAd21YV9kYiYurnFEAk5Xqe95nr7irDsHoa7fUmwDRH9gdt4jYySXpsNCcRbpPXo7rnyn",
  "key23": "jo4NJNMyCFRB484w8BMVrAM3tPxTEPBCbZnHK3pms1bVxjwbGUg2PmRNwqMfgrRG96RxySvohCXVHWvxR4T9shE",
  "key24": "3j9E9hNWxBaitXQqvDivdegzx2D8ogTYyVsGRwoXhqwhjrS9Rfd65qGEzdqqWtR7R6wpfmfiSFLpbWKsaUjH5hiC",
  "key25": "3MfBiebA7aJSuWp3TZzsJLYBapUFteFAaaC9vcuduBLSGzdtPwjipL4YE1PsD2d5ykK9Git1jvYcS59GLsgUF32R",
  "key26": "3XGLcWzYCazoU4QAFfLrMVBUNTNL8C49VeeSGQvyzu32XX81Dvd6hiL5NrFrn8uZKNhHAxkmzwKsX4qcL2Tjp4yG",
  "key27": "E2AtnSnqSLvCqdqwv3zm5LYo6xDnKMH1Qps1h27VQj6ghkA8HKd3HjSd8SGf4nWVCEDwV7GTHHrxTECmdoYSNrn",
  "key28": "ezZaRFWxny2UFnsW2GrZPU9ZKN8jcG9iDTtEquP3Qj4DaY9mg7wWYPtKJvHnZYeet3dajopYoHdrAyRSzAkEeaZ",
  "key29": "3toJEgz2H883tp3ZavUZ3DahUWfoh6dhhokyENgZsZ7tztzTPQFB2TiDhRN2hfn6eBX5PK9skDbVEZ9fc8DRSFW6",
  "key30": "4V2rBWVJGdoiMA2KyXFiqnaQ8MZHw6Duge6smDb5CQ3aBbPPa1q5CcapDwDtzKXXH7cECnxbvd4Zhx14bzE9rJAq",
  "key31": "3fbiH4L6memf8SBNLdEERRZ8Cbts8tvwfU8FVmjEvGkVc64s5GB9Xie3GGiLTRY9K7inXBtaL8yNMZVy3L9MohB6",
  "key32": "JkzAjcTxiB5hFG48bqDFHXLnTJLVZjRm5jYXHXT77BFbzaVeRsJdTz2M9Ee4LzFgnqucenBXbhB8j8vpRpXSSni",
  "key33": "4WybMg4FGDphTrtFX6xU4KhxK7ozg1ZZzfRoq6GUzEWbwx9k6tgUuRJoA6BzfBMYkr4YxxiieDFrFfZSbE8su8EQ"
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
