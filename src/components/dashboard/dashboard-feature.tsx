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
    "4J9S4srAbCpt35ABLeULvJsYGUNfctGstqJHmCqhYEP2ZpTzWS4wRHTbWGTHauJjXfBS3AuGkWvikZwERjzsPoUx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ADBkUgZt4qrRHVQuZwWvMcbuDYd8MhKAZUFTnVV6aJfudcipddrX6nwEfV9JU3qjMmSBCuuzYd73tMwYVhRZimN",
  "key1": "1FCGi9DzYZwLB1w4vGyFNJLsegYmt3JuiYfqDcyZ9MG1XBRvKgLtnRCBbTReszEsUBDc3TbctEtH6E24Ajp84cE",
  "key2": "2vVuTMNHefuae9T44fzqVnrVHPu3wZJatSSQZfWAfxht27XHU9pN5vTodPYMbpNiwNMiRFGVsZ2wdZJNQLqPvHs2",
  "key3": "5DiPWjoVjwyB1YhVmUCA54zkVmYMSH5mff4ac8AYGdCi6UmMp4Fu6i55M99Yb3WWfcMkogNnd4sxk3ZZoUCAkD5v",
  "key4": "4xHJSdFmac7NAnL9xZMfUAtk5y1V3whn2fkkFhAR5eT1g7XXYu8KNQ4RUH62f8UYp4dYpshc7iKDebhRWsi2m8By",
  "key5": "395ZQko9k88VMiAtNdsijmL34dYqV67Y17k1dqdXWgecr9qJGf8W4yWjB59mtvEoS2ZkaYreKjqLx1EzGQMJJAdT",
  "key6": "RSZW7TTPX1MRgFkEE5Bp8VRvhTyDwoviZmVJXpqwXD8Gh9zgyTheFp3PbJHE4PaYDJK5m2jm5p3zxvmMvvLy1AK",
  "key7": "2JsuZzBh6v4zfPRzuyHcjt5BRFKwVYd5oK26qNethaUdg2rn5m8RH3uk1WzSa5d7tJT8xCjBrjFdQk4kH4ccNdzr",
  "key8": "57X8umhFE1HJf4ruX3zrrL51Eacg9j1sPS3owLUvxcwJQ1WbuNc3dP9Z91BKWjrY6nU3qK8wP3DwLqizoJiu6ANy",
  "key9": "57cDuH8YuTt8MoqqgXEf46NxQbjW5pwc8YJqNcL9qCFGgzYHFa6838UcRJSX4T4KmVm7ZGu3NHbaAYmeNKL8R5vb",
  "key10": "2FaN7RkGNcxa4UQ3y9PSHLDqHLzP5rJGMGdePRp58u3zJQ4ofBJ81rX9v5cJuyPpTXE58fyBWQjHCCTKSeF7iNr4",
  "key11": "3uBLEq56Bdb72pdpin6U83x4dhW7jZyahPPBmA5t2cGas76bsotPqj4HPTvEHbjg3SX2J4qdZwxtbuYNqXG6iwSp",
  "key12": "4HbdvKjv6FVbz2rbmkBqrGgt2DEHxANXYCrqwwB3zpKRqLytt1gQqyVHrMsfwDZoQeCFgrTXrXmJ9dfCupx1hHfB",
  "key13": "5o3LBqGUZVPi3PWhEKAC4oyEcnWgBWu737AL4BEuZJamKZBtWXKtPo4vNxUbe8AixP4k1uFsUX9Z5RHTBsRwpXum",
  "key14": "4CcLwxF9QTP9LPea4s5VWBBNmGYHKEVaMbzbmdECWsRoysiBdx5RxAFbUcXyZTBxn64B7uMCpH7cswgLgNXpGN7b",
  "key15": "2J1oifuthLCQt4TJDo7XoC12NsocBhRd3fKV4ZexerZoS7iRzgDvRhvNH3BbFv3NkvgS4KjTaUwn9jbcMApKH8CD",
  "key16": "4aDmceMwcmgtECKMwv7LCUbbLoEC5J7YqjXUHDdL2kot5boyQeH4StN8D9FjWYKfFY5uvkA7LJCC2cDuguVTzaA2",
  "key17": "yJQm4Ujku7rFAW9pz8yVXkQ3mJYcaU6NAour9xtNrSw2xhcRpuPhAXkZH3mxGB5QYXWN3xZNwHiFySHdhBpoNZ7",
  "key18": "SuVq5MCgt4o7uPKTThZqbKoanCsj5N2L5Qoazym2yYPeV6K5dQuapjXUMtJgjL3cifSVAHKdMMKCSyAbSuv6q1A",
  "key19": "4i7aJ4rDT5gBdC3GV3TwN5miEedEkAuhnxtoqmUkFxxxnyBsMSZqiRkcWJZ35Hygjvx5Y45PDemCLdhQj39QgvN7",
  "key20": "3FbUYdWGwau1GpJMWDH6TSKSa2kxmYd2MkguExgVxuxQndEziTggRdwJBFP67iKpWJnvYRp3yP8hQMM6k5CJtr8Y",
  "key21": "5J3g3HC2339XjeYFy6t17Q2o37NYZRfY1iYRpdhutPrKw6mYyqxGbQ8Y67cb2PGm9bQKr8TwmbTbUbNEAFW3SAab",
  "key22": "3kUswLpuad1P1Ho6FRoFH6crsppgaxz6V3Q4wxPa1QiAbnSHCTaaWeChTn79qAV6zHMCfWyUfnt9b5durGyVk4s7",
  "key23": "3BLKHEV4ryz4bYTg2L9D2S9sZTevvsPDCoxiDbc6WsQi14gVnrZyZvpp5SGrqhtjJgWH7Rbb6aT6r4Lw1FFSB88j",
  "key24": "2uMqq5PnfLz2CAWWiezcvmWSHnwGYPvo8VMpe3qsioyUngzou4zyeMnatdBePs1RNAWJar5Z4C22m1wDZZxb4X9q",
  "key25": "2VvXeYk8gxP31SHDo1FVfCA12F5DUny5qn821yS64Fd2FrqyU25EHWEXboutGnkjz5C814xbcc5kDhgmt6HDjYaU",
  "key26": "2oscifutEakaGLQuAjWHwafeGLYGPugimPZmqoH6meCGE5Uvc2hYxwXz7pYpsbXSjdRiRZbYQKsjoSeb2EqrSxas",
  "key27": "2DCDeN5pACt85Zo9XZwrAUGHcEr1BovpgmVcHPAk77NLqiHbhM7yVTaBZZvsd2Ue8Aehu2Q74yrX7k4t8kDswxSY",
  "key28": "5G4LvZZXLdvg6zyoWfdSJJbKocYC3CBJUfrNbzMEdJdG7M7YVUM4kWFAk9A1a3meMwRUYwUiqMhwkmfJxzYRU8cs",
  "key29": "4uNTvT8hrBK4ivRPnPGs8TwhB5yS1VxyXw1RVns3vtPb15Pxgti8xxQxMVkQ3gAeL3YqCfNvMVCJwASxzXP4cgFm",
  "key30": "3wJeFoHCGkx88N6Qe6mipMegMjQNyZSGZLc8BV9w6N25nfCHnKrtEYY15HZftU73xAAV7Kg7jK69byHtMLDLCiD9",
  "key31": "3MT3ztMViQxcngD1rVcXrWhAKf5PUpcaX13HF4gQi9HxiTmyKRoUf7E2GsVTCWkwywJRMMzny4CKnVkoxUbMNGnZ",
  "key32": "3bUcRUVf77KRGQKYiCuLgrnP5M9y9ULZEDZrEaiqtspjofBto6ZD11EeJkPMCYbgknnyZTakL4hbK67VzKyWXtXG",
  "key33": "4QVN2CvwzqcwtfLGofswKAMqN2f7JT4hS5AeWpzF7AnDSPsTWdjQFUGfDqorBjaSymLYTixQ78YBpARoecJCgw4A"
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
