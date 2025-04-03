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
    "3m6WwEQz16rZr728qo8dtLgqCd9ZR2KDyianXiFTEMUsvRFzJphTYBXAppA4woL7gJSb28FfQGsFyiZx8okbZCrq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Uykja2pvWUcRAvxkPjH7QAG3hRW5UoVuKmNnQMR9feuAFxPzgGhhNivCaM6ztW7uxpnyzazuwXJXaYrnpYWLzRk",
  "key1": "24RwCAYNxCF8p93gEarAqxjekiT18EFoJqtdKopS1YkJr9aVRqvG4Gjmg8NvLkXM6c5jWBpyprDTUgex8FKBdew6",
  "key2": "5yP45Tye6ZPSqJFzggCYrgwWQYFNkMRhWnCefsGaFsMPtXemCSUzU7zwsqmB8ir6jiZTzsLnMePNSb8EYSiNku1t",
  "key3": "4FnPvG8mwGgAm5EdamJKteZbkrQqQqNytTHP1So7PUR9Emk94X4zq24J5aVPQQYHptHWgLj5WKA5EkCr7dSD1tui",
  "key4": "4UU9ZCqYG62GharDxG4T22xor5EesLbCxmb6L9CJzVVPUmCtVbHWtsbRuNZtnfMbLYw9du4hoKXscfPjcXXU3JqM",
  "key5": "3UeRpiBgqqXfQX1cxv7iSyoc6dtzB85qKtYRSeZ6YA5w3aTPcAwUp7ymvFrNDrn2aMr7sxN923GKozNzY1Jh3oEJ",
  "key6": "2MnCna2TAhsvDyxHvYwxCzkQmExh6riWEgxftMCfyxttGqSqvRUJ2qV5FEkeHSWiGWP9zkNsFRgVTtxSYrFogWwz",
  "key7": "5XuCo7EbhvZfmsw3L17inFjfCqzRJh8GF5dCYkAoQiL1Ec2i1khruBwhSmibxQmf6kL4etuB8TR59b3pXaqb5Zpz",
  "key8": "2zBQb7zqddDaRQGwGhPmfgPbJ3gHn1QEZmZ8imCWLdJSdKvcbMURUds5dpQEf6FtzaN3LLtzLePSLxvNyWVr4waV",
  "key9": "5j4kMNzGBKepoRd8CERZzS6hoE9P5uVcUC7TB4BLjApd3EfiFXQZJfhyZEzCaAuPMvvWLjr1P6WpEi2KiHv5gV1A",
  "key10": "3a7FitjGmpd1mrstYR6dMUQ8VwEeLnixtsSp3fsabwGPQVCyYi9qRo4N5jwn26KHzZ7NoacAFv286fvhx7JQgsuL",
  "key11": "2NuU35GFNgJV3u1U7pngWxnZPYV9aUdYhm3RxEGGihtS8r3Uvcx4JxxUuwUaDdAZcgQ5Fx2nAthBE1VEhboMtZXt",
  "key12": "5j62ayoJmGsAye3NBDSYBHMuwiQ2ZATgA4EyUHowsDmxbNGdnqwd3jJKbeHrPaNHzbLJXBmt8xe9byhtBnn36spQ",
  "key13": "4QxLLLWZkn8AhMQriXDqcvBucSj8a8XD9B6x2QdevMkLAFn3cwKa2ijreRdk5NCcFo6LHBnGpTp7xPpYY57meT8U",
  "key14": "39ufBBbdsxHrhMhdewPGo3TPEEh35FiBHz7o1ygi7CHwqr2DejZbm4Q6nKVgoRSsuaLeaPr7quuRCpAo6WPXk4Kx",
  "key15": "4UhdWSZMZy9Tj11o3j6N2c8n5gnPDHJbrFV7L624RPBtjq4yxNxdLCsBQkdu4MaqRcU9C2GtwFRQ6inx9fpcv921",
  "key16": "65E3EqgpNxSNuUyHVNUnSXEmkxY5RmUcUwWSGjKZYKKqBgM4KgwbrRmqz3P5WxaB4ccG58KfP2pEPeAixNx2WX9V",
  "key17": "42SG4oZXUVQvXsYMz14Uu39bWkDvPxUywz2u4b7MUu4f5WYy6NiR2weimXzhprc2Fz6Ni9NDAfVUzzDTTvqi446y",
  "key18": "4d7hzPGvRHeT9iTCoarDd1W6wonv5cNGBDYvUk8WVVdtwLZ2NgM4y8Cz9Hov4rNnJx7yJ7qPcbxFVFytoJKiDVnD",
  "key19": "2xbzVUn45St36VWS7UEwaVM6jmk1dVYYWND3HgcrP18hLPsYf11xQTyiQAj4pRWnDwjDq1SyAe1Y5q9fUuodnXQH",
  "key20": "WRVJ4kLcLEgUTxuc65ovukxVy1H5mtbSGrm9mAg58LdZvDok95aDRjQ34T2z6NaoJg6Am3tAPsEKu97S7c4STdB",
  "key21": "2nJXC9WknGn6zVqt26gA26wnJU1KqNSad5oU9bdXfedH1iBwUReQV6fgSgAJPBVzMGUwMFNzRgAqWSe9tYyHuoHq",
  "key22": "4oVCb7kLb7a4VjQD8xauRMt3NQMVt7k5FuvK2vVuJaioRKBWw2avBD2Ko352jFQKsvD9WRkAPVWjUZZjQSfNaaWu",
  "key23": "2y2yZTxQNhikSsJ2dPDNvBaWn5Q7QkwS25TUusPXcY698XHnGR3sxxNuUFMSfryFtHkqUmRKT323yi6HG5JwKb5V",
  "key24": "Y8Q4NFRWfc78f7RXZx1R75mqE9jTTmzBUELSrZoHXqogiAVfbZ8S5H436LND8hoq1PnhaE1K6yaaEDhN53egLRe",
  "key25": "3HzYhUs2eCnFj1cnBbwTgm1xgrATmsbsDTAaUVpa31CUMTrn2dEeASWYkPgw7nK2JvEB8ScMQuF7oR4UmswMjZfZ",
  "key26": "3ZXSe4oH9qqohkBq8vFYh5zeB38WjScCgxhVH41C5KejBe6EwUitPuxDSt53ZcPBovR1L1BcQG4rEV511SQdyLfQ",
  "key27": "2WmgQcbwZDUuQpLiU45SXMX2UEnNJGM7QtdyhvgLD91Bsmd6MgdmTaAwS4rzkNeh17UvXwFfm2VkPYmnzdt5My2K",
  "key28": "CQemtCabYm16HEN75XbSExsBgdQBpAQGAyLUzGxzVXLqUAa7tBwG7CQAd2HE16J8Kd1Riawom1ewjWPSHSrVJvv",
  "key29": "3s8XGRJTHWjB2hVGzRFrWD5xMpqtg4VvsCmYFVCA1Y63rARMReYCazPvLQQ4eTB11sSpX4vE8Rm69QC1YmPF3Yo9"
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
