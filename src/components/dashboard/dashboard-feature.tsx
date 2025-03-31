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
    "3SrVwMVW44qjwEPNpaaczLt9CK2YjMVKDGn2UjTLWM72sTbX4btKdYo43zdxuUgvoyWG2k6mNwSY4FCWFtJ4tD5J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jeAKDc48FwEEMtKGf7EqzLzsBuxNgxVqc5oQZnDxxLcuJWaF9EqczgLEWmvoubvGsyje783b2UzRbckykJh1PD8",
  "key1": "63WdqYdPfq1XawTpjkvu3kfLRBPF6vCTFebLwsLTyQdDvPBnjFDTsXqmSQ8NLhXtTCDJFn3tyetcEm4wTKmebQ6Y",
  "key2": "4Di5FCqBHPWmdvWFgR898kRdaDEGbzhd9DSAGo3Ax7zQwb6i4tgzkDqXxtfi2ZEX465NaMQ9RBan1kjL2FYovk9G",
  "key3": "5m2RyVShQc7fK2dX1eBbkhUawUKybgQZuJoXuCagV8d165UA1v1eftCYHadB8RgEACjdr1mZw9vVtaqxgqkdeFJw",
  "key4": "4TGJS7gCMbE8KziTh4MLwfjCV2Cgsus2PtqjjLALgtzSryQ5RtCZXe2W9h3wfY2tcLcUkn69f8yxVjyVvtkyLYwN",
  "key5": "4L7CkvDXEgxYEzxvcfrtgCfunHqbqxgBnsLM8Bo5nR7g7HCmgyjWh8PT78n6sZxx4t2AxbcY9LZiEarqQ5yQRhqF",
  "key6": "5n5MdXGpAcj7rtmPoqYRzsZ73XNVMNRwAx4CaLggCzPieeY7VVARnw7mkZi3cKe1pvidTd3CaZX7q5fQDTBdCoe5",
  "key7": "45HBrzE7CH2VxyKvamDGHiZxJJ7KNDtP99kijrH5wTCk3DXCFAzoup9zgTqxRkM2wTnzZrFYpz4tNTy8oWeRHru6",
  "key8": "4gDLNQ3Ay7sYQswvDbZYYfb8Gm1qv6FweofG6D3hbajgsPcWzS8EowbX3rnEbyntMDAtMs9h4AE18qwNEVR1v6vz",
  "key9": "4yypikcJgBfVkqt3m4SLjagZY3vhzU3Nj8UHaszSiKN9sAaQ1sRJuFRGLCASsGU6hN65nCq1Cb8SayLDbn29EL7K",
  "key10": "374cmf8fmmBZHtnAReRarhvze7eW1PGoXkjTnBfb1fjZovyZJdygTJjwf1p4iPGmhTt6JnduqXYmGvjroVEWfBt9",
  "key11": "UBELCi1d9Dx32i7KyU973DgjZ8n6ujQK53r67nQoWH557nS5yjU4peJ1hX7c17UkXUR7vfKSm9M4XgbhRL4u4pJ",
  "key12": "2MUDTeUTxgGmia3CqtBJojAMdr2RdsDHxcTb11hgxdYDJTYwPkDnfghwVHifpS1RMKR48AfAWFeCiSUDzm6mJuR5",
  "key13": "5NeuVhseA8iFZWuLF6HmUZNwRNukiJcqkdbaHCiUXCMGQJVJRSFTBaENEXkgWeCnyrmknVWx5tSfYxfSpTzN5NKe",
  "key14": "4mNxPLrVK2mwpTxAcoe8kj5i8XZFfYmYpjUmzGSxN7nqZCDBg9ZtSCDD2YGpLPV8RRQWnm9Vkh8Ex7heFqMEknNr",
  "key15": "4Hwk1aEvQAp54wDAkuUbt8T4yjwiZE5hBjQNZbGGzwx8D5C5emAVVhfxmXyUNPSUAanETNuQQeAEPKLExGBKvifN",
  "key16": "4VZHX5R3wwT8ozJgt1XYhhtjv7S2bHuNgkCsGzudFePTFaiJF7MLV1wbRKpX8R7T4Fzhz5WsCCuzWHcHYkjsPHRD",
  "key17": "4y8b5GdvQb1GvTCzkV3JeeGncioh4KdWWer4iTZFbY5rj5H2cKmNxaHotyDH2kAMB5qUPy6tCtPpQDgbxtxRtAqq",
  "key18": "4Z6p1VaqDJxajEcGcF9vK46KNEgDgukYKsWG6EzhTg6WEg2nH7SS5PZQyPf6qDdyWtzyxBTNWtaaaAkdtazfzkw4",
  "key19": "41jtqH3VgsdExqLACepci5rGeEbuhAq5Jwez99M1d1mkQ1gpYwGHY86tMFnFapNAjN2K4Btjv3waLFTcCQ6zxB1y",
  "key20": "67ZzAhdRwe6aJ5HZNJbA8CpgXH7fssCBfLpkMBUGpSyQLDSAEx1JHEYsXJNDNcWZtJdhf9yWs78LyZeEZNgX9X44",
  "key21": "4CCvjCHetWhdoBUXrQARxG3CSEDDoEiVZe81o9pqSvE81V5XwUXEFwnxamdxv6BBUWt3pmqF8n51gmGuK54CM4A8",
  "key22": "2dywQJ7Sn1n9K58cnZMXAKGgdVQ3A6jcSzkABAToq81dJCdWytuqtQBqDcXiC1XwwtZWCLVhqhXCpJNLzUiCSwDK",
  "key23": "2jQLcpwAky1DZQMuHmDrtjBwAHrN6uuMGb3zzJiMcuS7jr1Ld2sFKumyzbnKjS75gSe2CibNXC7vMQ127suV3EuP",
  "key24": "2AcxdrE2Tv6g7cp6AvNxjjWp7NWhFXVQhXGek3MvcB3jJcgkXrgdmmtFDmuScL8pE4d3eBZaVZtKPDnQL1uQPs6p",
  "key25": "21CjiBtqCwmFkcTyarAbnRnhSPTrw8KUujV5HsQCaz9qB7pToVVaa5povxVw3M9XHAu7J24mw1vQck5Qoc24WHWG",
  "key26": "63uojgwv2vjwGcThiaU3monZbKRYxvha1b15LMtn3G95sdPMRDN5cJApqYMWoUw6QnJ98BeBwpwCw6cr86NxKG4S",
  "key27": "QFu2Ec8wNoLd9jJubAEfCNa4FFDRYDoAMPucKmKZpPz13q9tobnfYQV3P9hZztdGLNfRXsPaqPxtBPnaVbe6hnL",
  "key28": "3tPA3SmjsEFZGmBp3oQMVRqPWApE8ZkHWQPdVCgUXjgk21j53937VjgQsfHcX6bSXokfTi6C4Vwj64wQ8MrjHNJ2",
  "key29": "5A7N2nnQfB44i1kSDAWFGqmTvX4ME6B2dUeCwBfukENDDuYGNuXR66yDG1Gz9vG7YgGoNBjLQaQVRVdWzqi4r36u",
  "key30": "CKZ48d7u5Y2jw4T6nToiYnLo4BJvdY6ZwVAChivw2vqvKSgMa6a39LXVVVyDSMK5rZMd2zHc3NzeaT4LdZe5kTT",
  "key31": "XWm7mpPu7xLPZ1VYez74koEkN6mz187gJgTN115rKPmL3tH6EcrJbNSDLHZFTw2jd1mcocKUxJe12EvU62nXqri",
  "key32": "5PKenerV4gWVF1XQSm4VC5D2gnTcgCfMT76z9Vv6QvmXCzvfzPs2PpvezWn725Kyb5hAb18TGfGTyMvaGXPYCmZt",
  "key33": "2y4YECQKM2Fno2QDGTiugAGM8ViZVK8uR4vffGm3YdCs7MP8kykUgGEmyD6PAZifDFdAZMW5dGQM7QH4b1Ve6xnN",
  "key34": "4A6MeKcBLKKEEHp8oXsDsfHgHPdWyGefp6QRwcZEhXGDH5oteswUWfM4qVcxWKo2Tamo7KKDKt5hML36wjFrGJQ8",
  "key35": "62owPUgYiVuLgqpiLM4XZCfdsAqTVjEVN2QNvtNiD8W1v17EQYe34KAVXyENNfDqw2pfbSKxchcegJ9mUATG4qek",
  "key36": "oeiM5HjsY19zT9rN5tZ4YPKoE7UL12DY4hsvZJeNrCkDLhQqqpkuorgKzyCCSrM4DNELQpndADBkasRCitU3kaM",
  "key37": "5J7ZPVqYC1hZxiEJNNwqkNGbxLqz9kTgeJdfjc6FCRMhzD96CWMEjabk96fB2RTfzVYxewTA95jHvNyCjYZp69gE",
  "key38": "4zGz1UKVUidfibqpLKWut36KuEXaukL3VJX9HNwpY77MUebespqBut8RqCxE2gNE5w8y1SPTKJqDwx4LCXkD2TC6",
  "key39": "27TC7PWR1y4MAPgKF3D3SFcjhzCvTEAAxKHqZsLaihsKQouocjnxkSdoDt7bWYewp5f1TqdxyvSD8NcDMNygbnYf",
  "key40": "2RzwFo3h1syGFajHKr6e1sDAtWgc2B9xaLar2u1zeHwHCygSHHNCe5u3Gr8BQhgDYJPxnF1nSZxdvWKzVJG4bj35",
  "key41": "2tRLLRW74TLqguUJQ8seFdgmhMjAyQQRBy1xH8rZH6yvD75k1CMRPhRQ4KfWsVKmhwrGg6F6MNm627V4rhGzmpTo",
  "key42": "5xHmAnVfXMvaSK2nGTT95cZaaZEXQ1YTR7USydL5y6cuQLtmJFQzdk65imeLXaY16uZoZVH2CaVmdbs7YSS7hnvQ",
  "key43": "2DTYZzsgz1JF8pfcbMFBNkXvqnULMdJFLWbCbmMSqxewQYTT25jeuDXMBMFZgkGSccYeggaDBGtRwfLZN4psTWVP",
  "key44": "4JMJWpE2vDQLXnNYtQd5vMfcMY4f8tzr5X1hcGDWjXhPYf1gVgXeHzaxLh7ZSYafZcyTWZw5bjG4cHVzkjm4XDRN",
  "key45": "3VPZdp2JYH85YDLGrQ7m3HzzRi8V1fqpFZtYvbm34cXiEBYednanMNsD5rXWxVYAp5Jk5uNsZcdmQTRdSh8TsNrc",
  "key46": "41fMQ2QnHkAyM7BsT1R3gq3qfQ3J9ise7PiBsvW4KKoDUv6s356iEL9juTjmatDwEUvPb4qn9NDPpZXtpB9L1PgY",
  "key47": "2B8zEHNA8iKvBp2aspu6QCdxqcbwMTD9uRxvm9W2yMdbr9WHuV9HFH44GNu5AkLb3a9kQNH7SQQcnf6P4ENMPBVF",
  "key48": "PCYTjj43xHFh9GHQm8KyEmmCL3cvRiLvkj6NrJC2YyPEhJXXBWGvu1aenznammosT1TXzrjXKpj3BWHCuAkL3ek",
  "key49": "4Rr9LiUViQeHhzkKW5cPM8n4qADWL1HVLHj2c8t2MLUKSCkhYVAAbMmAg5M9qhMvmxdMj75NqayPjdM9miur15ik"
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
