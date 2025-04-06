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
    "37bDYS9FGYvkAssbyxBPMDqBybis6X9EpSicjig9H8hvXvBRBPtyA7NxAsmUDHct9xMNcia19VNKvJAKzv1R8RHJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zxa25XHxi5oFwAJWDxKi1RxM7ttfr18KYqkKf9PKtgTLGzoxSrJvNwTNXqmXp9XpLK3iRDVB2jf7TbjMcpJMsBL",
  "key1": "z68YdHbpohkDhPFf6nzZ6S6MQkVxRQio9hKFDDJxozfVUWd36QKCTWu1kTGoH4WmfoGE2g3F9aQHHSmGkwuWZvL",
  "key2": "pvpkVqfHefQTanzyKXYq2WoNk8pYPnNynjCgouEYxj21gtEe1VKzRQdxnWdHimEZGWsykUAHfMpcxhBdRN6dRm7",
  "key3": "672ZmqrUUSfcpXSrB5yaHorHnNvsjpTRwmsJmk1H4MrQkYEmGxpLAWAQBSSTrHZfvtHEwEFpq2VAXmemxZouMQb",
  "key4": "3ihdK5kABKYKie1trDvCUHt1oMe3aQ7vGxvv32yQSTZPyCQo1oedypvLfdis749xKBmss51sy8jHyy69YiwpAytr",
  "key5": "29dtUX1VCJtrX7pMn86NWX61hewbNFA1uzm89p5kz1tq93uLHQqV5UWbvEKuTMiVEz3g6LsJXXCHeRZGQUJWr986",
  "key6": "4FDimDzLDjru2xzKZVf111k84YGV1myopJWGtUn5oN6fu225eNEjJSK3MGDy71GVZafdb78Gmp2Zjc89fMJHPjEh",
  "key7": "3Neasw9B5x3QbSAWf34nrqsaWoiSr7edK36ojb64g3RptTAJGH24sTy2D3M5LHxbwqXEV5N61ZPHDS69fes6hCu8",
  "key8": "5nRHboPJ8ryfZeL7G7iNgpqXmE5oBGjAFW388yJXp52RNivMpEsy8CLuEBZynCPPxCKzX6H2uk8KpKoDe4Q2omAc",
  "key9": "3ThacpGt1bx9eNpzcfpMYcF4Q9FYBSEXXTKRXDXJn6jYJaWH2ZMdCMBgzVFzpdUxqHT6VZrc1s9x7iWBRjwWfh2W",
  "key10": "5JWYHiJZeH7uSfGoCP2GPyCrQefdpFFaAjoWpfxU2aQwwi7kcoia8Lv2vByaDDT99rH72VCgPkjCzfpBv35e2rdj",
  "key11": "4SmqXWWNJktgYNEptnVfRsGy9nJ8FMK16RDBZ2KsTtykWB2t4UqKynznLPifTop3a4TC92enrAF9AhhYy6WG5fj2",
  "key12": "65mB7aNKpkf3KvVNXnM8zhVzgrkx3oZwGGNcRQo8jneKxxo5tuCeF4kvKkvPde5Hoe2KdTctNVumrTrZB5qrySpo",
  "key13": "3NVS4Uc8N358RwmgHhYu9qDhLsNGCPRfUseh8wMtHBRhaSexVd5J73hJHPS9yiwwEbHvv7TxmepGvTf2sPzHqH4j",
  "key14": "2jWHE3sV1RuaCk4NHnq5PfTrtQjtTassCPTXSJzrh4Hgdx73hoodM1Bp5BYXzTUYfVhCfp3vhrGXKZXo3EqjPDZo",
  "key15": "5zHTdZLSNgi2RYnjiWxMkgEWFJb9m2B35GAN6HaF5dBK1rvJBbWu5WUpseMGCWCWTovoTARCvRg5hQMabSivKQTG",
  "key16": "2oSHtXsUF9iyWw5JpwWrwEgdScjEvMQFt9rKkGo5g56E9eb9jwKHwnygoPzNLaxeDR59XEhbc3DuqQcjJSnay3NK",
  "key17": "2BHSv61zNSXgvuhd3V2jvxcfsU9wJmWUuAAhGw8gnE6ZerWtmAWiZm11KVYiCTRD7sFZe4kXv9tqpkkqg77BmLqC",
  "key18": "54E6k4TXzt4CXJYi47UQW9H9j6gw9ogEa7NZ91FprqVbG9DgZ6B8KBbFzi7ih6VW6yUKoxjSjx7yAeG3sg2UcCQu",
  "key19": "2jRKbtbwLKqxUUQYeJjLVjZVcErTFqhM2gg1kiWDawJrmHsFoaiXd1YE1VfdqgaCMhhhzT7K5PPVTtFZ2Hj4TQEk",
  "key20": "LMcQTBBV9GyFQMntGKxT8QukKv4N9LofPwJiuYVZtimPgoPLHiBkJ4Cag1B3iPteaqDzVHDdUkFG6dnAfw8GUoE",
  "key21": "64Rn6Pc36murX1AHtjYVGS2NxxwwXwr2jbQQeZhhPjnkSVdajdzPagW9QHLeyiPEcLVnjodr2HKai1SW6Hs6QJJk",
  "key22": "o5oNdiUHGWta3DDbQRJHYSkivCK1sosyW1AfD3gAgyaZYMXEstcyQfzaA9eHH25yc7ByCfLqTNQbRa8ddiMk14d",
  "key23": "jxQuTmpFh3PDePZeDGVuYKxWX8HWBQqyoTGimbEzWvUcu6DthR4yVRAuE4m7P2XAMvazxW5Jy8zv7aiztG4q4cm",
  "key24": "3hBM4ryueNMLFkconDHQZCdvenegyb4BdJUCDU2D7zWaf9AemLr7BvHJkurWfPGpE1aReep7AxDcy1Te1WyQwGDQ",
  "key25": "2ukkNbwkgBF35HwLa8nhQM1eTZbcWhtDg6fVUVummxZGoKq5K6Qzmmscfg8RbyYyCMqVn72UN6MCPtdgEPKaEM9r",
  "key26": "2zoK8SmzzF3YaJw3tJ1Rb2gXuD9cUgg6rKTbRTZzKakf3KvZt37PiYSood1oNsqUZVZQWNUJYTf5bhdqAka3xxSt",
  "key27": "3M1HBT3fS9M3aa3yeafNtTAR3ZRGuzE8eAoZqkFmp6Nc1qa598uWh9Z57DTFqxkWBzhytzAyLbC22DnAbCEoNMZA",
  "key28": "4f859TBeFFmcwgKRicNtypZfvpijob259gjehApfWNnmz8pdRGRBYRLLux4cAm22kGKhBiSEZRY4RBNokQt8yqBx",
  "key29": "QQtPUN1pvosvQumM4zkadwKYv8wPNwVfZ6HBr2DtAKb88LRCrgg81tyLvCzyr3moKrunq2XXDZX83etiJpG1a6f",
  "key30": "tSLdrPDU71qoe4tHe5d6Enz5Vp9bv3LoP7G6W81WUnTk7SnAetGF5omvQ8ArtTyYmufRD6MAZE8LYX282FVzUfY",
  "key31": "R7CYvneuiGjJCGK98D352FFkuduVG9KKpj4dmEPcUXkZwGMmdAji2iWPqKeeB8jtoBVSS5xNmoJu5pr7WF7PmmA",
  "key32": "SScXd88bcJ7dTbgDnpwdGMdiEmURoZoX1TXuUWgFBJYf1RYAzhptoj8jP8trM2iCBcdZnhRPhEwGzt1RA9tbp4C",
  "key33": "VCpUpZAhiCEiyfjL9HjZKPs7oZGgEwHgXj7K9WijN633L7yrRGjX3ySB3WcR29kPF3ubEBezApBE8t246rFRw9i",
  "key34": "5gCcDAYxHLsQuEKnfhWB14akFGVLDjFfxLB7eUx5rspg5Yw7UvgCdEzuDw7JApcsisJU65UrFFTx7syavzP6e2kB"
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
