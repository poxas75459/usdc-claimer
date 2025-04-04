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
    "2Ez7oQmQox6XdBRWXZPtTMUhqb5gqCowvsE1fE4S1x9p6kM1MN1wU31bDQpKBBXMRSNurkYTWsLDHdnM2HzW2iAf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "271XC7A9HDjJJurE2FKv3rEFBHQtmbjU4y8DCXpiRjQj4RCHeziaiMEvBLePtHqsuAKbeGHfS8CDu9o6G66yNQ2e",
  "key1": "2ikQZKetGAVGgxLP631Lb8tL44gkHnqtRnbSHdyceU5UGRsvR921amgmfzsu7tPBqXrUMahpZvm5ao4BhWPUrUkW",
  "key2": "2Rf2XFRjkPmY5dRw6fGofnMn2Q5jKa7UrtmYnYbULmYmV3QqYw2CFtrU88wWECntWMvETtecJk69JDfNQu6KwPev",
  "key3": "5ZN8ReWMHxVXB1YyYfX4XYjnDJPJvSHAAVPXaWojjwagu1wRKgsFFV2S9iVTq3aLmCN6kVviGLWztqzWTtbZmary",
  "key4": "5MwgFGXdyzQU44Q1JYBu6iENQVb7kLfoMUSa9cnqxLv3Qxd1y5Xh1gaSAmuFFp2PiQyxoPYGXH9n3Tu818tkpCxP",
  "key5": "45wXQYG3koEvq2Epy49pXA6v4WP1UiRtSPXEmojUMvvwfoJ2YUZ9uoJpjUibxAxq9Twz3A73eq8DvhtLa6jEmhXa",
  "key6": "3RaroLTQm5qjktWJLc7mqZ44Uc8g2DkhPA6a1ou7kpemYTb1uehbPuMSApjGyvCUUjDt52R1BdZD4D74HHtaFZTs",
  "key7": "Wq59raX4ZZC3opBRueysy2oSU5ugmJpUevNJfjK8ZgHDLxqJoecjwN2yJd3umWnDCmYymf9jj5yfcGwWQrZTbgc",
  "key8": "3NpUv34iRQd8qxgj83W92qzP9LVpspiMuXx9qsZK8y7AHHskh8ASPQZD6pTE7aUjoEGhri5xkNw2vFbAfKsCkHZD",
  "key9": "5MgJqzSmUv9SY9GzQpd2Tx9YknVqyzi2rAmFxdaUkvd51JdiCpb7HqKj8SMLS5hmABYHqzM7B5p3jZad2SY1WsxT",
  "key10": "2saoSiMsKyadhi4a6CvssY7AfRgEgn3LPo6GAPJgwRgZ5aCVat1zq3Emg9sPMjuU1Vw7MekuCnESc37VC1oCDNsg",
  "key11": "5CxyiHyW9T41pbkUTJspJDzptCX79bSqDZQxNFBDME8xvFPVr5fXdmE7DFxhaRMycgKSv8bzfypR8DJ5noWWTuA3",
  "key12": "5JxfXxJAnQwuCHv6KL6zYKThVKjJ4dbXSemK33QpDipFgpcCkNnczVagyLoL6QbpkQUmXk2s2zYP7NvhSUeVyMNr",
  "key13": "4QU9XMjtSX2yYhiQDkCJPFEj2pEdby92yV38LRvepVeyXL2WK1h3JeWdMWqvXWd1mTpS7d9TU7hLCfZqvaPW3LhW",
  "key14": "2D2aDgZyHi6z1v6gSzETp1VTWPAJFVEpHUB3VLVo5VPAteVXoFHSf8WeczYXNEhSsBo18B3qV1YRyZy9LnbTUMAt",
  "key15": "58NzfErwi13L32m5JipJFzzKW5HQESi8RdHnE1JpWYKudcXDkPZVdnq8ZiQKFUgd5K64vUTcSsDj5NuTU29dRgu6",
  "key16": "62GgfmtEHnjfwGms4Co5XxhvYNvSSCtKML2c22WoKzfSqY7FeAqW2bVWJrhPWm4zhftE2syW682BmBJ3dTwT5JzU",
  "key17": "5r5x52mw19EsAovXvUC9CznSAxLoNZtibxukTZQ1Ug1r4EmRShDdToVncg5W2ifFZrE9bYfNHuKKGy8Q6N4qGKA2",
  "key18": "2WPrBLBvcd3m6njuYkUReH54KvHH3AGaiLt6hXf55tuVJ5umLcr2LjJpwmBgFvbBvoTJh4qV9RQMMWCXSa8Foy5Y",
  "key19": "2EutPqhhGEvBmVBWF3goHyH3FzeXpJ3QD3CKRxxFZHRCX6Rv1HKFw3aR84CAC8f9a2NoV2BgHqsZfawfLiY9a2sz",
  "key20": "3qhzzp4VdiZcjKhgaHQs7kbtZ3Wyr6CQxzvq88rpPv2eiCPDSbp1ziZ1czM6rWb4Gu7cU3EcGbEaYkHwYmPpQSM9",
  "key21": "4qU4oYnNU2ti6JxSRtNXg4aWaXEqQNXgEMfiAGYSMn9oy649SsxTX1NK243pHqWhxMvUfJm85oNQ2CaxtpD8JBVT",
  "key22": "3xZiGi9srXe6DVbu856cWaQfGvsuzXH3xaBS3rfXLkoA3vozUvvVxHHWkTns5VbPhDPDuptjukLXtuZAJ5QE4H5h",
  "key23": "3LApvXLQ21aMHbahA22PFRr9VkvU4JV8j9vA2FQJT8BX9X8VTRVz8nRyFfiVoPyMvbjrFWUtSdUx9qGPWn2XRLSE",
  "key24": "35gksVZ77noV2hPFkg4zRK7Lx59bdXgBA18CoaEtyNfH1waWaHgdb29xj4PQJHqFRGTxpq6dMWwzc2EjNTomzdTf",
  "key25": "3LNkQWW5zg1DACnk8iZ3gX1DsbWkZ5bKrmNRRnrKtc6Dp1ApwptF9zKhjy1HWtSU1kLASwPN2XYC6nXZhyRhw46J",
  "key26": "3zdVQLy5CxMWHrFiyq2EQ6K4HGUGsu3jjPn3AA9fqyH4d3ioUvFHsiqMtXW2d7X9ph3EC68hSVKPphkvUooz2FDE",
  "key27": "Qac1o2HzQ966dmQ3L2L2UYCrAPVJ3CgTcMiCYjPDkqMYcfUHcCHz3UwDBmRsPdotZDoZE2YWfTddJHU4MXVUEkP",
  "key28": "61asg4yaGDKienaUe2jQ7o8Fd84WrcrZS2G5wcpjQeuy7zkoRqPFMnBeN4h4XAmmd7fq5yY2r8QkGtaVVFWxVBW7",
  "key29": "4vb5NPVv772ERBPnnL5GRPTs2yw1Bi2QoAiZKmuds8GtyNovHkNR67DJVsd3ZFHYFV8ZKjsWm366x9PKn1Du8pct",
  "key30": "3x6xcyVcB5o1vUp79gVhCmJsMwmRQn5fhtaADY4JiLAwvEqVz5VEwzvHyXN6VuRDsnVw8NdTohmXHvnMg26LbCbE",
  "key31": "65Jd1fFgFpiq11dvD6hS4MR5zEfrtFbYPTHx3QpKxFHUeKiXhijPhhs8dvVxbEEPwsgaQ3z4UW4Jh4DHJxDquLtL",
  "key32": "eZ74821nB4kcwv5EkVZToqeTozsf9s9JndNXhq8pX5jtLhR2w4WGQbkkaxSAurYyXxGnLYXJZWBmqBPL8XYCszh",
  "key33": "5gyyq97pi4ik28seyu9awoDxHkkTJ9VJBgSDEsJ1oZamkbz6oDzVBihRjhxgvpqLmfKoskKB9BVm78KujCAfMnpq",
  "key34": "4Aw17HaF2Q6ZLbzhAk1AXYp6MaB1ABYSxGKEiY4UaZkgMnTR5oM8bt2cLFTQYBUZFJJw9M3WyanjjQN9eTi6DqGV",
  "key35": "5QEfcAULMZK3AFueanr6Cz8iPpAyb42KZL27NwB752aJGHDXpWMC9wgyCRuXbDdA8xYZKa1Qy5oGk5REzNjs9st9",
  "key36": "AnCFSbjowrCqiTSwuRCPHb2fngCn34N3gpNjcSGVWhpvaqKF3xqrfph8qEmZgZakFDWi5nLVM6RvrjB1E8JeDqu",
  "key37": "2CSjKC6Wy1GpFYEqBNUf6CSPURNwriPrhFjt75Agyko75nC5zpQnCNDvwSyNM3PsassAqERVtsYGNTe8oq9cN7Lq",
  "key38": "3gHdtyrpiSzkewkrQZKPCxV957UJ32ewGZ1BKyZpkxV9CyUqer5dBzbKJ6ZsQhfnCx5SKwBo8PTthunXTcFVoC7a",
  "key39": "5q9u725uMCo1ktqHRr8zrMoMuavU9A6Fan9JbiHwBTE5LVgiiVzhaGt9uKHcPZ9gbnBQLug9HvPGJcRWuyLb6Tys",
  "key40": "WaFhqdZy9UJx297mqNu1oQZBPXQP1gfAz3e2qzYuAAa3KBXhMa7gidV7Pqrfw1pxq35828AfpkrBVADksmYMNzd",
  "key41": "3HYhoZ2LpHt9ZKJybLMCCXxzgrGUYZRZKgKd1oaDwk5vE1czN49t1XEemAo4M33EMBzSosJUrzdNXiAf8oZmeeB9"
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
