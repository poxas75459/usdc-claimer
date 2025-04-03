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
    "5qdCCu7SGjYnyf547uXkdUVw8HwvTaEig69BSyMKHQiZGhjCAx47mQqRU3pyiTUXtaiK4uRFsSRZm8ygEUWEanTe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JuhCHeZGrwYjZ2xzE1TuMGwyaYE5oTBtNZDZHb1Tqy67m6ykzCcs98aWxuZqeVkkRnQMhEKbzzuodyVHjps9WjX",
  "key1": "4EigfFFqim9euYUmM5u1CdYa5PnhuC25HfxTSNpUxbza1CWEsoMprVwxNibxPoRQ65Dh58RWyoZgpyndxV3FiH7a",
  "key2": "3xmC8oCu4JCi1GhyDZVMCJBtvyF7TPeStE2g72bvRLi76REDuoHbeWzFREsp38vCSwbPkYHEWcXRaxz5job1iLqP",
  "key3": "3nKo6yEiLVycSepeXncf97gbHd6NYBrg9V4BTnG48Z7AUMDymmeHLh2zeL6yd2Xx8upyiNfazhR5E443UpGTYNWi",
  "key4": "VQrkyLvWegcSbgfakhMyPAgWM8yyPPZbh2aoTshL3dvGNcZMiNAyY2FuJz1to8H2DA5ejYpWYbWszPAUCFLBY3g",
  "key5": "3S8LV68vqeUsm6UXEEEkF5w3GW4MRWFuNsfNfkUeigEQaWcmzV5eiJqrpZdqjihkfswAsLkWn97EKSE9fsc6UP4w",
  "key6": "cfEqg9oa7QTu6ZZ4iTEuZpk8v9kSQUuxX6mN3cxeHzCvVXBCZ3Kuzg1s3cviPP1rf6BSQ515rYTLGc3RMD9ZhLW",
  "key7": "599gTfVeZMxuWYeSySRsf6hqenrcWVpzFNZM26pvqdW8i9nKZaAdyi2gv6d7aYKw5V3U1WufMXCBruggRVKHHj5r",
  "key8": "4dxNr97dkbW4UukC4Q37eY8XdehH4aG6KmtLmCmsJAMa4usQe8K3FhsqdirBP43kSVh8xb8F8SMuSNAm2atJoUEj",
  "key9": "2Q2w8PB8nNHSxSb19xPH89c3RgJoXgxPLnpUyMYZuqGWFccLpD5TYmBwr8oiHcNv2fSAkBqp56HXGyKVP91hWTra",
  "key10": "5eoC6y3Q3p5NzvLsCnRzCvE7gbk1hnHTeUkiWmvJHeGn3Ru6vTjujBG7Zegi6peBbHoHufVHKxYVg2vZq6xcP7gE",
  "key11": "p5EuLqGJhqHs5V4WTLKxmHoEEiiiC7VwH5Tbh5y66s5A5AJUhW7uAjrLLBidn3qxWvmns8tJkFZgb4LdzwAdt8P",
  "key12": "3ohtk8ddw24qfxLahTeLJmtuVSzPMhUxhwRWrdx6k8va9aAcPWkUJ9DmswpZR4RtFyvGDngZBsmnUk5qGHm1gXaE",
  "key13": "hy8VimZGW97EvqSzWQXAMpsxDBjtqQjwXY7M67dFS3uzMUpd2yy44yooj1Upn13Ue837mRv9fDSauuMkZo8viNa",
  "key14": "3DS6P8yZvx98tneA4BgbgL9Rq7ZyphiP57CPGJpY9fqc6Ga63qDesdtJtoBGWrSNk2wEe5L8f6aJ7pvKKjZJBFUy",
  "key15": "21ac3SawgtgM1XpVbfcQasadUd4Q94ye2kmqghkc44kvxYv4ip8rANNTreUgw2LnreYnMXeKmiySw2h5ocShYzAY",
  "key16": "5hUPYMUtETF6dCjHT7dtkv5os1zKp8rCpsGG61PXaWXMKmQ6E9uSSME48tcCzaf2hop6xUWALpqqot1Bu5RNP1ZG",
  "key17": "DvtDdfdNagsSJw8W5WP7gmjZxubTrP2ysSYNMTtoP24voEaT59AeDNSEtB6Avr9hctN5dmzpa26RVPtEBq1VqdL",
  "key18": "4d2NJamej52ExM88qZ85QAYA7qShftQuAZ6dUaxKwhd6ABvfZ1WFABaFfLyD4AYA6JY4Fbyss9avmo92Bj8YruXN",
  "key19": "2eXxqyVxULmqAURR7Bpq9nMNW2vkxw25AHZKTi7yiuxiReDKRVQjLVdY2NKdDjgbZxQjvBZzsBBHwgMApWyWgS2q",
  "key20": "3dsqQeDfdaoRcdKdBbMcAzB48vZMPsAR2Pnd22DWmg1gRXyg3WtSVyNLQtpCwFW9pjRcFFFcxZ8c1GVo9UerFRTS",
  "key21": "5ViJwcwXENQAKTVokTrJdjAphriDbykpznfRnkBJKcNuE9ZHXtNA4xmyaEnhmvWFUwJtCHWpQzWChnrsFyunQbCM",
  "key22": "d14cz9E5fmnM8qxJBEV8Ea1q8Mir9Df6HqZreD1KRxE1VTMRZHprWUDzN883HCNdbcUjg9QzaDB8Y23MAjhhnDW",
  "key23": "4iMCiGe6orY75ko1RaXKdVWzY6oMdTbvMdrdnjGqgJ9DCJ4dnyWq8EF2oqLT1kmEb7cXAuUdGhoL7nTxvKM7fJmo",
  "key24": "577dNnKHJnivPZhWJ11s7arux59Ld89LHaBngfcjDme3FsfdaP7MhKSKVtoSCbU8tnVk3ro67aUvmwvvajkEk6pf",
  "key25": "khe5pf497hqPr9Aii4k2tRjzYpFAxo8JLsUMjZ6vHgppJfCQjQohbAu3FqsW8AB3cE2EB2PDnatZhTeYxjbZcn2",
  "key26": "4BJ5Jb4jBUUsF98VMRQm5KVZ7oxaPkeqG3qq57AP7w5xuYJeYA9ArePpACygVBS8uBsWyPp18rSXM5g8sRPrtEGN",
  "key27": "5t8UYypTFzoG6GJCnwLuLWQMcZMBk7466vS6zhvfT4nGXiT1jgitoFxnBv2z4Djk2dDb6xQinNV1LW3NYbKGhoQQ",
  "key28": "4q1NYbBmkTq187TECXaztKLAau7oLKfBzpuLuwW5JG5XcNguXY1f6N8PucixYHdL8a8HDWv3uR7W1XBCRtF3Dj6j",
  "key29": "rGEydDBUuTs4Az61Hog5gShhV3fHY2kLDcpxrdwK9LnKMwkJKoW2dURWuCo38MwjvyHX3KkzvDyfu5nX4EyuUYz",
  "key30": "3DCUMGh9zmMw8kyAuBcyKyqAEJhoem6ZXHJjrhutKsbbhEsa9bkUAUMdbwKfj6D9VM8VzMQUSz1PidqevMR4zC2c",
  "key31": "3m2WNdrzoxqC2dFv71u4UFMoqyRbCEQMpCAZe8HBaTscbqz8BJNBSgTYmU8ayJCeS3w83rnquZCKVgRekZYRQDAx",
  "key32": "4PmXP3qobHXNjoLTetPm7VLoaQAqj7Vf6h6PvwDuZ87arZZErTtebXt3CAm5tXA8k6ibH4U9DPfaws9naKWWHg9j",
  "key33": "5HUozZ3SoJsHHXaEPkHbtFuuPmrovkzJU7sgAd6BEyirtj7PcXREhS5BmGxQLB5yKybic4AU2cZSkz5C8oUdQCU1",
  "key34": "4Uu1gZAZoCfCuofwk7EyXFupSLtwtrxaBokpGEh4iGjQfA3H5YHZhLUGG1FP265DPpb1W8JZFpfffncrghYpJPh2",
  "key35": "2YK5WDqDFLg3dt6EsjZtCDd6aJ3R4PSZBHSWo1XhmrZ2epQj1Sf3sLwVwbUNzveZTPCVwiyU1drWQzXHaAeGH79D",
  "key36": "PeMSnQiXFLfMau4mM5JGYhLCxZUhwjyGyixjnvT97LEfB2XybR5brJ57LEMFuj5rDUPLPAYCPnJ1f3wv5srpJvV",
  "key37": "5Vq2QNSsc3r75d8ELAPhbV47sJ6CL4sZH2rsN9AJnxvKi8zB591eRe18Q6cjkR26eSBsDiCA3sQiQKCurx14dNvj",
  "key38": "prGZ7ACMbEnkjJ7jBZiEknJediwq2xGEEdS5tYuQRHmREHFr58WLmar1M2goJ572EkMQuHNxmAuEqENicRupQ1J"
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
