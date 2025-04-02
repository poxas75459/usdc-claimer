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
    "bh4hSKNcP6YUrpFX1ow5tNppseSNPRjeB6bKdF1ikSg9btTT6cTYGaFGviexXmJLm6RqU5UCAthuSGrSttTQ99p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27GhvbPxmLdRK7EBNWTA4y3tCM1PiX4bHwkebNQyhFM9Wmrv7R9cncPTRBiB8B45LCnmrrnYgfz7pABiU9dXhsAv",
  "key1": "2S2qwjDiHQrSAxGPc1yVMx5YycWZ1F6F2kzEX3TvsP2KkX4XXEZbkWCPdEv4sSSwGbUuS3SoJAbVtcBoMWqN8NRD",
  "key2": "5DaxWzzfC4d2PASUXEhm3MMCVaaEWguuucgdQyYVuVzd6XSJ5EoygTvxr3Tx5GAzJ4MeurqRnEAcFesP7fKtEuj1",
  "key3": "37jgyCBzVS184rkb53tziigSgwALHmmbszwxsg12fXEFJ45RA2y29RnVHBAS9Brez85pgPD9gzeYBuhbyXog4P2Y",
  "key4": "37pL2k1HTW4bkfAizv1qbBXucs6DxcoDMThTMeBzKEubkY1Py22xb1uNdyqnefxe6LSBY9cn87UedQsNr5Jv3Ben",
  "key5": "2xaYopjzdzfQVYgC2pkEXsLk9p3Aye1fEvHo98HGBPNmDbGbqFoz4tjHy1Frn1HfdCfPzJsquXLF7KmNGj5spkPc",
  "key6": "5VNujYrVMUh7ccja6x1rcuorDrJxToLDUBQjQi5gQryeXYzE68jxWXwHhYMbAp6YFdHKG7SkJp7f8W6Q9ByA7pN2",
  "key7": "3pH49eZhMR3TPmrcGBEUAKN5kNGpWFmhmUFGF3GKg6QMzf2RE3rq9r6rUhGap7u7bu3LtwXxp4RW5Vzsy5epd4Ge",
  "key8": "3L1d1SKJw6GsDSDrbfdJZB3PAAcgWZ2F5u5jQRARkk9fghKjNS9R2DGs5UiSif3ivPpJmpyGqrqmJHkic8Uf9rhD",
  "key9": "4qZmnoEBwwfGEi4eoMTaKGVoYFoAAKKxBxi1Sg3mHBZjfK3XA8vz5ZQovSnDVjd94iWhWXEPthLPZ4qmrvBFxDwk",
  "key10": "7XAbDLrFoBAYHcyb1ycbBYTu8K2TGWm3CW61k4okcUvuotTr7fJwY3JXsumUot2gLAtonTYCzVxTF7obrvU7GVL",
  "key11": "5X5gZ7FW5RdQ9obXtumkGU1DDtDvktbkyfMvFFr6FF2QheYTiiiBYih3TKFTXtMfR68p66grNFJWyMKu2CVFmj3j",
  "key12": "2azfPDxh8tt493eBgoHw5hEqZJuakqTH8h2o5heN3rWrNCREFkXpzbB2JfLPTuuQ3Bn3VuHD1LnQM1qQjSYfDUnJ",
  "key13": "TWnpALT8PJzy1BMUP3RDKBuzq6yT9sh3kULGUpuWbXinkwhCSxZJUWE8fR9nt8xaxVGbf9ASX2ABd7kPTjeSj2i",
  "key14": "2KHWrcC1Woy7wPWYcRT5aE9xxRWhY4d5RwaNLeCWXGtKiKJLj2hVXZxPukbya4tMotyebyVtTmnukzmLjz81xjG5",
  "key15": "24PSHTm5koiPJ9Sq5XpyhEn9xoimRAQrtL5A2GKWbdS4NdhM7rfGgW7kRHPZGFPxTTDEYcUABSLnW1wyzMVZRXw9",
  "key16": "3yonbg9UNv3jBm3bFvPSHi8roiJdtDwqtFJfohzkHHN8pg5D1Qm8CTq5NtNgyApHpR5nWkeMUVncEfZTgZsAQS4Q",
  "key17": "DNp8oeh9dcB1Tp2mgF1QXWDodGQ4B52ZCcsraHPmNQV5E3t28w5ExR9PGrecUZvDdZZLxwdYUNfpn95dZx5Nm3D",
  "key18": "4u1QmToJuAdtLJeb3Qxxw4wFJp5LGWhxKhdvEtVSjqrRUbWqmAWnUfXRxWR1p3icr695HGVbFaHsQmj5kJ8HDaVs",
  "key19": "DjjHzgBEms81ZLn5AN6hnF9d8Tww9MavtQzTNFUExj3dH4NnKdUj7CEBEBy6obC3GwjeZCRaUnkrwFgjqdgapUB",
  "key20": "VK1KKUJip9HLPxMk5xLPGm6tKctKCkFgqGqrMgX3qrt1vxNP1vMs7QH5yiALBMKbB5tnesXrDwNUYP2yUfgsVx4",
  "key21": "pb5rwGDrBJCqEYXyWqbptG6C7hvhTpFXFxCP98tqiCYYcVirBpmnzonPFTnj6eA3i45pzXk9myZHMG5fmyNAD8s",
  "key22": "8UzcWUgtUHSBeGMbRKoRWjWGa7Cof79hYKkgLtUtkovQK2hpbHXz427AnMJ4s1nUvnr4BZdWLM2UFH5swy5oB5U",
  "key23": "64vgx6AfMgyi4EmgDDgmZLL4K5KykMKn2AWpm6CiSap3JtouwuKdFn5YaZAW2qVuAfVoxW86RJsCpzzToPQyKDmQ",
  "key24": "565Z44xZ4zDEzXC117PB7JNJHkpid5yfpt8rQktf2Y4wcEMaHe4JjqVKPoJbPubtrEHdauMWyQpPvvqJKTsnjNME",
  "key25": "3chKkubyKJu2JiJhQievpmu7UbHDAviEmJyZfqA8zfLtRG8vVzoY7K35k38ZywaBxeaLFhpUGhwYP5nXZQXp8Wd2",
  "key26": "5PMfeeShHUhXdPdi5WdS1p74yxJftWj5WVLdHJCT6veK8VVtnmekqPsBUN4v7re1WmsV9bUrUxZ4ni6m8mKjsEE6",
  "key27": "45CmAQ55c2j4Pyqe58RgA75W4FxUVXyixUWBved3Q9EuAJtJ84EMakttpwDRVGngPxCFih2YM7g7aaNfohKaffFx",
  "key28": "5is1SbzgWD1qnjoXqSUax1qiDpG8GdQs96XnA8tpeaVthqpJdVrRUYAm9s27n3d4iJfXz2S4PLgQJ7vqHLUK4dyL",
  "key29": "4xHFvavPZnSdBSGNAHhwiPq9XJNzS6S3VnPaq9UVgJ9WvZGMinrFFvhStNmMhizNgxQZNcBQoj15Gok5fJpfWXFn",
  "key30": "34xmY9dAzncQy4DwYsdaSdLFRZrGacfsb1PHspHZRNA7sL9BeTutCUbNros5oquP6vh1NUCGyycNAx4E2P6smwkL"
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
