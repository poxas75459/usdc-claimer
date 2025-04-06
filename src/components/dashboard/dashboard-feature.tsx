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
    "4u8yhAzRPN4xWjgmxTHcaS1PiihrBiC83bPwJmMMkeyZeodp7CuU7MxbwdpfEmcK4ysZV2dCHtoB3sNwqzKZNe4o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j7h2hT4DoJNd6Ax1whHPXVQ7fVDGMP4YyvPAjYzJiHVee4LTZM347kpVKzgVYcfGRKxkB4PPYUAFLw6o7Sk1Su7",
  "key1": "uFTGnqQCkgSVMx4G3FuExNMZ9nsqkaY5GnrNGH5P3MWjBUHWhNqk4ZG3MpfDYYUFB6sYRf98LoCeojd1B3JE6F7",
  "key2": "5YxonettMJPv6PdsNXKTbsbLuhnDG7qChCC3S5oDbSA9inx2x8ZCNMhR7tDkLzj2gw4ePH1Wkn3X9cRT9zpW7ery",
  "key3": "bDiUESe4Dr8gNLCLAFS1J52T9EnRP9jKKiKHontgDuAU5rkQZmjVSGrmdtxDXy4S1kcvZq6CQjuFjzTTm2qgLFH",
  "key4": "3PdTQnWaxNWHrSAmbLv78FQfKxtYKipw1uCW4sWhhwWAPMbattxcKgAvcaRaaUaqBGhQzqqm9eiFEUNf6ZULqyjh",
  "key5": "28WBnY28jCadouoPe9bN4a1QrDG7RdPUTL4TEYLaAzoWyt8jmNNTJZSCAixDr1BGLd5grs36qi7LfqpKP2Xqqt3P",
  "key6": "4ajhF1nvEc8R6TkpRCzNqgrgXNvpURUvokeVNJXocTUZjFGLgT4sX1zUQJCQXwHCPWnyQZqvxuk7fAF21iQuENAQ",
  "key7": "3VhnxwV12tAAUfCp912F4Dbpr4uA57XZtzVEqzbBikFazLgT47YnwRLxufwuK6NmhFU7AFxL6S6JHG4z31x2Hyt1",
  "key8": "2ntC9DqUQJkNcDc92Kfa527UL9E9bptp85FKx62kzKzR7SCtm7M7YAZDwUMjyhepgz99FZqKvjwdjP5a56nqan2D",
  "key9": "5GsthMAoUrhepyfryQ12DiMf5X1MNdn2cE6dM4hgVDcmpaEsnqFM97DoENkx3M5ynRvgtFWBCekjhbqNNSZAyeTP",
  "key10": "MzDzsaR2ReADzyTsjmJEY9GkWmCAQwbjsAChJp4eL9Xn26oTn1r4jQRjVKitLRaY5d5v1uDXY5FYu1mTzx5pCN5",
  "key11": "4S6VGzMsgUKwiNyJDD5jPHBTzUCTL2FLwkWuJQoMcGiVf3tD7XuKzaWyvypixyH4Wy3MRBmsB1aMuT5a27Ru9md2",
  "key12": "4tHGXxwZRoVDEvPhwMLCZMwDmz31BR1Hcg4XBKMepkZXiPkVPTcws593uNs9oVyj1HsioCh9KYEi5beWncroD1wf",
  "key13": "4aszN1pdNpRvLVMUZwoJPkm1VkhhpL5EWHvMuVk4njeszesMHvyQqoccCKD3LPavT6gM4tPr6x39e3zopY6NqGkP",
  "key14": "5CnaF52CBj6Apq7Hi4bGTgxTLPBNet96KQVoBuqVFt2vqrNTjEbRZ2UDSyA7ADjvMboDD9rFVEWyaT4q6RJngPd9",
  "key15": "23EEoMhvHH9ipUDUo7hJqkwp6nMxnk1ErvfPB5qziUjk4sBDSJvbcYMgNmk5HtGrJwsEidSSaWHra9sePFmPa2sL",
  "key16": "3KAofKQhc5Ky3mPobcFsgxiJEY4NTfSPd7XHTqTCvbng16xjikcjibnxc7zHJHQioY5S34QvQhrGdRGaiKSDFM6j",
  "key17": "28hVujV6eNGmMqio9ebaia4xWW8oQ8WDTrLsfDymsRitMDPq7AjK2EwPP5mXs4ezApXZ9EPRhtaEyLZjWSw5PDQ6",
  "key18": "5BYoiaXUx8HGNGgssTuKJc5qz5Zdfc5tqgTcSLYNuM2fgDb7obNZL7Qdg34sPBpXFnchYoUUA4pQBFg5dZADdAfa",
  "key19": "2Q2vQEUT1K6siYtdXTqwbp2FSryvbYiwT27Qtn6SCYENhPcM9SQ1fHC99AacvQSwZng6KAey8iQiXRvkNmT7khvU",
  "key20": "3aEvG9TEzDNRBdiZJfGfkb3RCS8AkQThvp6wB4aVsegKfuGAZj4CSbSvTJiBTtvLjDXP2jeufZ5iXFxhDxXWiEBq",
  "key21": "4TBfGHfF3J4zpQr2Ku9XLeMLpC9Qk39QL9sFpc4ZFtSJoMn5JFkQQcRKd7KaDSqyzFPsiQf2vrSqNwyZrVGZqT6n",
  "key22": "5Qe4o22ojkdsq8vFJEwuvv81LWEADjJuUkcFagScLrRnVWdStd1YLrVKDTAqmuJcVJpccwxRDGMrbcSD8qSuoSpT",
  "key23": "62NZNuz4qXHDErcBUpfqUKn8bfTCWabyrDCde6wckibJR7EmcDHTsaA78Lo7HmcuRiZ2ktdYvXA3ns2HXXFoChq5",
  "key24": "2oLNrk285S7pWHVQHim1qXXE4XWdzPU1hBhosQs5nXPK3W8GFtELz5mU8DYaMDLgPbwybxtRYXRaFPWxBrhkSJ5j",
  "key25": "3fnSppVK8EkDKnic2PQ1ewFDGba1iX15TZ8iNM4HDWwQ2BQyaQdjTeFS5MpyfyifCfWwvJ7QU9rUeK8j6kxPDuo4",
  "key26": "2V9HQBWzLW9dsu4qkyEd27aVW3kPVaaGVnASMAdqXPPojXffREETDCw6qkAWRReXDHs1cNZNg9TcPAcD2v4fHYbL",
  "key27": "2CzYi1SxiZQgHs6tGfCAaTc7coZwZbKn8T1xk3YRUXdDot4g56Ky7F9wJ723Zi9bLwko2YS5BZXMvDHszYR5Fy2x",
  "key28": "3tunCSZZtDRAST8KAy9hatwaKqCmqGb8viQVPoB6AeA2j3WTMWwnoSrjoXHMMnKmeCRZDzhAaphvGmK297omT4n6",
  "key29": "5htLxj5xmKWhhmpsv7VpaquoZmCepAtrS2y8toXoHYaR1MuGBbTw7TUMjhWftHe8A4CgqCzGcHAQsQ46Tg8gFjfd",
  "key30": "9CxiwZLa4RegbUoD8hh9XPdZHn4f4LPfPnDCa1fJBsE8q3k7S9phXDJQiQzYEDzAzvHmfVZ5acxfnBcf4UZyLw1",
  "key31": "5aUvMBwNPWoLr9VgYCbUhGuqYfvcJobNj8XsGRKRSY6eMV9oijcyvHLNmhKi2ErLwCAmpParmrvZEHH2L7ZBxRTd",
  "key32": "3apH6vExx13Qj9j4FozpQCh1B1uSEZKzE7RxfXoMMi68pgtjpMwtDUFDCQweRsyruyq1yHctQSJkdp61bTJX9jF2"
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
