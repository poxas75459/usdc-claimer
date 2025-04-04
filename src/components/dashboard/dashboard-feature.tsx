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
    "m9u3ZmubibHnKFCafpTuJeP3sppon2h3L1Q9xhvfe7oTekcnqGxW8NjCttj2XBFYuKp1YWLY48R6DJCjGz3Vnks"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pLk4XuKHUGFWs6auk9GNkqKaSE9KifW7Gi7xc3uyMkNT9VGsYSNypuspVwU3CkS4AWnR2MaFMnEzA9oZYarhgSM",
  "key1": "26g7Xb315TruGWKFkmSGPXUGPTk7jCvReGEzQRchPmmD72PFnyjvuCruWtHTLwjk6bjsp5nBJyrGUmU3hMpzMSBt",
  "key2": "Up9ZTBkD7DYFhxbq4z7gHA6g7ooti16bhyEtYbkSCyvpNkqviEcjoHGWUpQHfUaaXu4NhYirZdJK511ci6vy7Cv",
  "key3": "2uZeQHoE6RTXJrBJBTLp2FVUU32ncNeiTBFdCovZGP3f178JMn9Mcgnp1ajWJk9CVvCd1tz8rz7JJfhfrtb5tSPe",
  "key4": "4cadEvibdrkNn2bSLjbHRKkyjrw5cewGzqWX6Msu4abYB3hkb8SpxnL1tPTC9QNTJUbycnrLt88kNEVCat4dS6oF",
  "key5": "2iktCRHDhKue4P2vmw7vLNJpwrWbLkHjSy1WxL3bRXE1aSvca1W171k22ocSA7NFeH9msMVv4BwZ133g9hby8fhK",
  "key6": "2g4MjeG7Y4YZbh438P2YpSxAc2AjxRrauWvCBgjr21vERx8xnCcKhRXHy6y1DYU2VxuegTEQGD6nHBUds1Msnw3m",
  "key7": "3ZJTUACqV7HvLHdwrzzerPtG2sdBiAEWuAPHofhK1pdpFALsPakTThoBP5GrJJVmRCHunoWAzNXbUzYQmDq6GvNx",
  "key8": "61E8dpcaeEHi9Qzyo3wGJ8AkPVHF8CrkR8ZB7WdrFdoZu6h4xnyQRkjbEJGUFtU2V2M2z99vN5a6TVFbvSYZDv5Y",
  "key9": "3ryVMeM4536HtqJrgCr1M8cwf2fM81dY75HnhiQ399sdXu7DJkWJgjvTKToPSVEZpjr1TnY7ZcRXTSFb2jY3kZJo",
  "key10": "4Fto8Hp6qqtKeE2uJa4gTsTycH8oASZZiZ9fgq6FsXPWpsFKXtQfk7ZXMaiy8EhmkYnNKT4fCAnyWbsaZeDAdLi6",
  "key11": "JTUCEnem8WmZqzEKsZFoxAhYWdnyS3N32cf1Hb7xeqsCEGZSZ4Ce19eci5ZvFTxYEBqpG9TEGGiEd5iM8SGeAKY",
  "key12": "LjNhQpfCBDM1MSQGbjyYU3n8sL5hxHAjyBMp8EsjMkZYGvsaqzQnTZANJnnfgnMAmrqi7kYUVXuEz4q3P1pTPeL",
  "key13": "SDNja2WLpMoZpv2VpbyDyzoXyPEA19UxbNsVSzH161oBVa2QbDgw8M5LRnUUCEeJegFZ6Km4RZBxL4hviWdWLr7",
  "key14": "5HzBBtRXhRRvXyTPvHj5tUfqzSajLbBWUjd6Yh3ukU5NV8vizR5EMV3uDULm4YoJT43GwKC4tzkRyXAzVfhKAzQz",
  "key15": "3jhewSzH9nJzeNL7xHcZSUxaBBwnVmFKbWYKtx9DALC3VeKZrQE4FjXCcpf7ZbQUKSNoQGdsTRCqLofQtvE3A3RG",
  "key16": "5Gmz56MACaQGQMEePi9PrrcW9KBYTMo15qtAyjoQc1UtkdwjUMFfMuviUDC3bbQD5DHFqr4kwqjWHz5Rn47FAUKt",
  "key17": "5NV7SrJcTjypBJhry31f4LFfwNG3oJjYTZFpEKzxeLCb24drN2DwQyT4KWx46zxgbqzgEGAxECkQGpsfB7MpS6Th",
  "key18": "4Dr4JtLt4ZmsSWhFAEngJKzigfzHcb6ozzqhpjFGGAGrrojeLeXLAd5aUtnoMMwaFJdGpE3Rf6Y1Nr8FBATSznX6",
  "key19": "28FprntQPCrW7T75wANEjyWbfmu9LNKe64Xjr6UFkTS4EcCK6tKAftg1FHFRpLXowLtk3obvQkYspFVED5tt3Uw8",
  "key20": "kJ9VKUg8F63k9j8xvC4SSzmuwchf7LnSSyj6skJkKFzXbxDzf251EXMFXeopFWdbLUiqfmP1EbqUSuyGFYAp7tc",
  "key21": "29ej4nkrT33AQXTuLNgEFKmgmwDwyEopH1eNBgcJ3sDeD6Pd5YyesiDuFTWKfKCAQWdLMt2x2MtsRGg8dMJRfEoj",
  "key22": "4FBQEo75x1qL8tU4KxahTdqX42zVZzYwUqyeEGzdvYfiR2ymXHXaxgqNJivnbapX4MoepjaRWyHLY6pjmwHEUQRX",
  "key23": "4qQtVxLFtyYKru5g8oqeu8qZiivnzW4qGhEPwAbgfgQEHArw6GELKJdrJdiav7zoAAHTJeBAUBtc5rtHRYR4k65a",
  "key24": "3tWuMM1VoShMfNuCmMKeemZB2rmDteLy5dkFKYQL2sA4p66uShgLbGyvC4Be32nqkt4SmLMLqaghmtm2SUBmeWhF",
  "key25": "2XFbFEEbvo9uDGArQPWsLWu7gbKEF2hCw8baKQuqTEQDk36AqCVwaoPUy7TAFUTbJBAWEBCSqWNpw7UFxFoVAQKT",
  "key26": "5o14vzddH2DwZpvSyDLNRzesuYggriprR8QSv3PV2A7ia6S4qXWzQ9KzPZRf2YoSTLN9pRYvez2ryFtYdcAGnahS",
  "key27": "NQPdjvta7DsNw1FoRuJxrmSwV88tFsNRAkyknCPp3GujHKzdJbFRx1JkxVfgwz5scKifbZZHYJHwdjrtx91vw4W",
  "key28": "yUvhmkxMEQiseguDAfy6JPHrGceLwnXqqAvrRtxi8DNtY6f7NhRN7D27DbybzcHM6qdAih9vcLsEd4TT5JiwhBg",
  "key29": "V33FCEYQVaxxX1zYDgNnq1JQTMLrGD7GXLSP9c5Ff4KgbwaRY1BRA8R36JDsd3FfM6rnkF2rAqC5FUVxujADpyG",
  "key30": "3cjSeVTfLNojeCcGreBZQdHcqnQtMVSRnwR1pRJDv8TyxaZb19Qj8m1bQV6RMfRXnaCweeApxNaKDUrazNUfxGvN"
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
