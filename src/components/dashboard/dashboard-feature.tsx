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
    "4q6MmZXcw6shkNsAA5nVinf3YjtcyxdWq48PnB5Nu5GofXLPCt8EPGcqkhh5iZVjfqjf9UxEycoJMoi6jacYxTo3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27q1uyCKQ91ZaRNMke9Y2HMUyQmdUiKZv6e7c4MJTXqiULEhubmFHg6T1PDdaAK9s11gHWQRAZU9YHgdZMAauMav",
  "key1": "rQc3LHdoWzbMoUcE5HU6KqvY93FeH4ZeQ7ojaFq3jeunn4YAKgnArebiNQ4CNEDcpaqzqqzpm1tDFfb7Rypv8Wk",
  "key2": "4PjNGH3cxRr24A7ESjiqL5aVZemcwAT1J5g3Fohf6G9YXNQrKR5c3EKKBvjzr3znLA9Ak4mrxSh5BUhhTFDxtVoF",
  "key3": "2NZERdqDWTwqAorkqNtzmFyfsYFY9nwDxPA8Fqc2m3EjVa4ZX4f1xPxvJ84SsXFyiG6HNAVWgSHbazPupJptCpuy",
  "key4": "hDx5AuKNMXADhUWfxP8XoT4Xh3A3Eno9NSvhks61yD2WRdNeS91fL8ULH6wQMikvGoECnqextTuXTpdMTrxEeJV",
  "key5": "4E32yFafW3u1S1DfvHTWhqRvaGyeHPJ82JVzxzQm3ZJp9htr9xRZicir1abazUCJQN6pHTehoZXaW6W3bY9CA6WB",
  "key6": "2L7vbYmLuLJdaA2p4FEH4RVkHdVzdCihJD5jkUPHu5TFVtMKTcVhGfRiwa8UfaCThu318Y7CzxX4vgNe2ATAcx3H",
  "key7": "2aG1DVUtTDPTkdP45zCFHXiEtqsuBNBGytZk9zWDFwj8an3kw8JCRN2ffpCUtqfJvDRPZBuuxLLE8aUcfSMyTkBa",
  "key8": "zbKAEQtNYhhGr45HHaz6kP7sTuzCGhTHxXd7dDgYUAZaNjJ7HMfNopK8wrdrNBPae7So3g32LeKjdaP9vrTtaDG",
  "key9": "44qxtfLEw6Pxi2EYLwsNFmFf3AouS6e3STJrsvSmwvc8n9QAeBZuBma35KFS2nxhG4nz8RNFnivcW1SSqYi55R3w",
  "key10": "4kB7RLoow2KzJGNS86XPiWg5kmzfgubChjDhXGkecfroRMSwSfA1c3sAQvw85TY4z6DyDpMwEK2PA67F95USuAhY",
  "key11": "fhPnFdvg5oo5Jc3MoemYS3wufMU7XfQYGvkHkCqkPY99FqF3crjs2PdusAJq3WuxcDw1WW5gRajSbQwFP4J1KF7",
  "key12": "3y2f4qZQeD85YFLXfrcNbJT2BgatPAfY1C1CmJ2GfaB7xeLiaAGJWD22gAbRjZ2xWWYcCsskP7Uugaom9v1q4MhS",
  "key13": "5gxzrsM5d86CxtCrRfvNRf3xNrVYdPhiUoBzs6mtqgc98T4Mab95YLg2aBPK873LUkyFRByneeSSjV2q6y7azicu",
  "key14": "3HdzqagoMmbe8rcWKoEZoaxngdhE4GAt15zJzn7SahTgJtbtErMTLzL3UHctaKhRX9ZA2uNpADWvaKc6x4WbyE1r",
  "key15": "5BFtaJPTZp1CtnuEfYLxX5pfpECtCyacBbg5rA5hKnqVH2rTKvieQH15BJRYD7vPvYTcdiqjmvRbkjc2osqpV27g",
  "key16": "SZSiNkFdxpL31WRrzuJqUERwfUWSH72DaxEmhwe81CfRUFfqTKR59dxQPDaBi6wBNzAWCcPx6SVwUAoA49AgmLC",
  "key17": "2LMm4MyAX1JhuGdLTkTn8LcufbodmfeNmLBZLZga9sKGPfZ3oi4MVy1hJG8FWXVCNW99j3aQQzYHNJBdkTiBTwtH",
  "key18": "23D38ARz3MNRsuzbTCRM9sTfXMxhdX5Bw6sPHxXxY2NN7NLipLckwwiW3UnMKw9YaJnzs8So32ygHBGMHKW4ZHyj",
  "key19": "4xoyZjFGM7ayVvZURdbVdvNaQ2ctM9o2nh7izurh8fue24gfKESChf9NBaDQSbjYaCHymRUVWDPC7gykLH5ykcgT",
  "key20": "4MEgvHpXpNBQVrBpvyqovRKrPa5HT4QWDw1Y8ZXogqNsXLBHJu9yvefcE9fXWLRCce8WpAZpxv5qVn6XtEhaPkHo",
  "key21": "2uoRiDgTEbLKwpjcKRhDCpJgj3EuWjgs4SaFcFtt2WgYayC9UHc7RTGwETu4TX7LFrPR6mRWsfUKTQc4BaSNRjyi",
  "key22": "4JmQLon3FiSyE1VTbsVjnyr36AnpERLonUfiWce5Yx9KhjybX2D9Fbnd35juYFD3Bgw9azCZPX4KFjyWCEq5u4zw",
  "key23": "3n1kYSsvbGqpMDNQ5TCLgTevtRb2m1GrPH4iPQx7wenSW36c3PFB4CBtJfVkYEQwddMcoFEYA7Jc2tPQsiENhPbm",
  "key24": "yCtbEAm5QFMbPHCSyA1mf578HzyMFMJWx9xNuCeUp8FMZRFkDsqsoRbDgGt4VV5QmHi6pittoCmmKT44PUtTpUc",
  "key25": "2ArbgMw2iW3tPtWwimWdAwDxf6Jqfc6wZ6cDfqbyP1UjvdhMX18Un3Y2MwGZdZqKQ3aq4kr3svVwTK63AtVUGyQe"
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
