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
    "5FUso8U9A28NGdEhJzt9q7AmWxdGCRYfuoSCo4b8faPozJNvYCZhf4enaMjMSNeLu1hAGyVyt2CkA8C3P9b1gnDY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GVChnPv6sACTLT8sFnc6ZvbADvpTEvapZMVYDazKgNipyxmJWA5MW7o6msCAHRuyTX4Jb3xYBjbKRTPQFhb1mC5",
  "key1": "59R5kZGiyR1944Bs8PEW2pVk1a3hDgcZV98BP3CBTe63LBTLD8NRpEPGZ33uyN1LdEWJPcMdGAiFqJ5HnXfpfiEz",
  "key2": "3RrdEQvzk9tU5AiwPar12AGWYxjjek6L5ZYFDMRWvcD3tJ7KLwm6zooM2sUTG6zRiFRoz9uQPjqpkuqC1nK2S479",
  "key3": "5fmRREbocmV3iFVaRsJemiex1QUL6B5NC75EFCFsxxjQpsPKn7FZf6EPz9zx9KjMdo4yMR6P7BXDsQryHtJyKQoa",
  "key4": "3T58xiDvLAQZfVJnCE6NsKuuorbW5szaGxLCEp7PdbT7ASdAmHp1tSUNX3UXy2QFxhCY8aEsHVAEgkecbBUdhdrf",
  "key5": "3FLeF7TMY3igK4ic1a7EjhrmMwoYytNmPbyacrg8LxBru5h7ofXQSaax3k58ZBZXdJXmmW9tMrd69Cj2uSTPjkwc",
  "key6": "3ANrho8hjsL69YDrvrLs5kTBF4CaaeRRzJGmeSHFgzMrBoiYVN9yCYccbqkPHMeHtB6KKkmyPrwfDJXCUwYmBDiQ",
  "key7": "4F4Zw7CmbgRfkNZAVbDMcr9YzxQYXEvjb6rhZeTGAQFmLdEAfkZaUXJJLoVfCSa8N9PxcrvUJUoXd7ugNtVM6gyu",
  "key8": "3xckFrefZQSkwPNEqN7Q3rHvZkeCphVZJi33WjJd4e3i9dJAohAae771KbF3G9zVAUYXVimzz96nq8n333d4U22j",
  "key9": "N9xgLfhyYJaKroKrS38au3ZqdPXJ7c9S1UZZ2a6jccqPPuCrxCku2TyRZ2etDVbKa3Q9Kx5coPqrbfqiZRwzF4j",
  "key10": "3mxfdpyG9jafzaNagLy9yX5shFK1oMNUKtsnH2TL3GtnHnGq89Y8Fm5B5ufftfsj3GkuVHqt1pus3NUHvgknWaCt",
  "key11": "4pEyCU3suYxkiF2uBSnR14dSMhwwQBMeBS7k8xwpAavJRgfMPMdUBDa5JjWSVEUPu5JRpDwT4sbBiqaDixArpxTh",
  "key12": "2CELPoaeEWEfv83EHXZnMysgKwsLixe3UMZbGtD9nTGnwqVLhvmKB1PscwEyQr1L6AEt6LAeBTHY588LCBtTJRCf",
  "key13": "2uDtyM6daKRswKkvGtWTwWY4Nzq4X9u3ZRTDXRagn8LwWbZgKRnJTDDEC7Lr8fzaarQfAz3rdVwNk7k3pvuqystB",
  "key14": "37WTb7ncKKZr8MUrWv1fqWA9mwJR5w9EdeaFkSCHjDxG4aGRXN3GmeDUdS6SY46B8uFGSwMsJTndMvS8ChgPqvdd",
  "key15": "5ucyvXPYMRyn2Vc53w6ceaALqaUymtAfJh4XAdxVy12cC68WSSe8WQtRhUV4PeQxWgvNZQCCJ6PXrJMD8qzaq8tC",
  "key16": "5eTnyE4TmFcLLDdiGQLs83YQVH9RhwSAD1wD8wQGYVoM39MFbzuFsd4SuSFMxGbLjcBtSsPVgtL3A2oTPg2a5Xex",
  "key17": "5RsY7gYu3f8tFLY5zWqANvHKF1WGrPtBVh1oivNL1F3rw77yiSBQQqrCUBcMKoafSvhubDW35QGwwGsN47c71PxL",
  "key18": "2JwdydLrckhNDWNs8as1zsgbBnYQVJRq4Y689ywTv6ppAxuGz1irK7srWMjQ8DN1L615DF9DwTkhndDjsVG1XLg4",
  "key19": "2zzEw3cm3ibbW7BFT8uv3G3mCTxRTLXCchFroXhMFkZvcdQ626ehjCdxaQPANSWaKdvCsw7Vwvc1RARKjDUivhGE",
  "key20": "9rce4n1B9VoftHGqLHUqDQpXDYcWP6NDZRpeaLuCyDDPJYNsbsV6LZ9J8Sn4C872XrCcF3Lv9i4Tn51KpcCApru",
  "key21": "2N7ApW6uFYPKZ1tjqSFVBtvskvM9vHBaRve5caTAHsPnAojXmKbuugqiVKFtnZNbMtsQZD64hc9gENwnK7qSXWJ",
  "key22": "33uX4JTB1S3Egc1zg9Q8kcarZmyExMAg6bUsKoevJTwwcYm6ujJRHxogk1ZPnJDJBSmYWUMDEasKk1BCNUs1Nv73",
  "key23": "5vB4ZFhrSrmnoUtUzUHXByigeC4oshVgSyxKs3it2k6Lt9XBz5iN5nqurAMPWLvv8yEtoVSCmoRWdfLUerwXWEbf",
  "key24": "5r3j12oLn9dNtBVg6BDzqn5sWMh5K4F3nCTSUW9wrCW5WMFXrV1VDX1aEsQg9dMQZQdarboibESvMv9Nvb7JaD6j",
  "key25": "P5QtCCAcwQtL3BTkM3PFVubDT4HVf2GmtXd8f7S3TN3NaTM5tLHMFV98mdehggnBXHynWvM31xxjQExaoMhMCAH",
  "key26": "33PsA8M7xCqXxLJJZFyUcJXmefa4sPGC2BzC8AAP1Mun3UP9ze679hpp6SqW44RDzCeaTJJR2etFcoXehUcfvayo",
  "key27": "2gEMmSf3Tj5t9an4f2PseA59b6sCoeFwwR7i1Cu4sGA7yFvoRNEv1SXGNRVkhzhdFTn7kCcAjVCXw1MbuxCqmw8R",
  "key28": "2etZxFMidEwW6CJ8jDYo6fJQEKnAAHFWaraUptHVjmhQwmkHTKUKaVBUVpcREa3UR9SAdhJEzywbsPWGWAUvigkV",
  "key29": "uwHzx1Gce5At1eysMTADEGG2zxRcCKmdrvuGPVPA9birAbNdMr36j6Mj9KnRkBEkjpVBqyhX2nPf6haMpkbV87i"
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
