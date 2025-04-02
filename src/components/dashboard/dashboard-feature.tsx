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
    "3tmzobys29hRsiwuUBAzuxirEA2GLLrKhSGWWGcoh9c7KPtdJNWUaizpRjekgtf8uzAjxi6ciMCufL8gcUt9npvB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UTS55cwrFDGnzAERprD88YWPrWshhjGHnmEf4dQe9RykmWnFiZTfFDgSdD9BMxFYUETK83vzAtjBxRCpRhrT7Pv",
  "key1": "B5xbGuEiKMLrcRd3WTtjWoxr25E5L1B1a5wWNqscB5G9RxCSJAgSRmFuLCVLmXx9XEiQGWvRsgCo9cVjbwV9DcT",
  "key2": "5qU2AjdaSuWQMjCA67Y4b46PycXu6fAjKL4xmPDSwCRb1uS718sRLqr5Uyowc3AnVhWLdmD67RmE6yVsJh1cU4cW",
  "key3": "237DfZLHitK4aJBZdqKspv58uWVmW4WiM5iPaWMWgddNYU7pb85NHfWPeLMrNTZV5iXJFgqxEJWzG1bozV5sMJxn",
  "key4": "Bua87JrPt3VmogoTDGTdzetLJtgFFEQEkem6LzXR2tLFm2VTXwz4XjZjF1JR8FVZbsLubnsAVaUEnAhwPCqToTW",
  "key5": "59N4MkJTnLZ5dmXZztQbC3xXLkNDUQu2PXMJmifrARmQYEfbMpHnuZfYmAUGGXmxPEJFMpkrhPnNwC2U82P1mwb5",
  "key6": "2fF1wcm6TDBhxyKZr1A8D6UNP2nfzm6riQ6dR3M8BM6PbUFm4LEmQZv9LhaFCdzyfkjZdZGse6yiHTRQQHjoM89X",
  "key7": "21AwxuGnMdxjUF971bMdRRXJjA7FSHyVpNR9L2BCn8j3vLGDKLP59bGQH2KYQsT2ez9K1xkPHJzdEYTxRm1iG8kz",
  "key8": "4SeKorTZNnkBQpsTE63Z5qjXs1XBAG1YRBaNVRojSYN5rAUTYZAgqjk35jZhXyEpJDRpi36PgmaBPSzW9hsr4rX7",
  "key9": "5ZVwM8UFqrodWr6AwodJsQpYQJJEyJt3qJQ4SNRvS6BGqZqAUBogVttamsYVooSaUaSyUMn6sFnq4dBvH3QYt7vp",
  "key10": "5aEMYEg6F5uYq3e5mKuSbDRdw7VxV7DrLsq3wCqPGgcrXPZY18QmnveQQ37MqHsWELcG664cVwkBJ2a217mgdrHF",
  "key11": "4A6xSny9nkjXMxYKrkeQxngp8MGnJQid4cSByx7L6aPhhkYGCJDntKo5NafWe8j1cxUfw5yGLAd8nAqzeAXa18td",
  "key12": "2rs5jaZ2FZ8aQfpjCcCK2mpabrcBTuZNPU58vSXbePJQAKsWJx3gY7FY2G5NVi2EnodJB5HdBRALNayUmFN46uF8",
  "key13": "4naKa5qW5Uc3Vd3t3Wpbwh78EdgzAU4mAkZkveSdc3PXs9nH1wTURkicZsFepkDcxFpES83kJ3xunMrEvdktBTLD",
  "key14": "5jip5edEd1v7rrz45AWZQC9iSAKjTphtgG57UQNocQRMJqFHfe967EZLy1QqndXJ4iHwDVYTf7mLQeoTNpnVNs86",
  "key15": "4Q8jK6s3Rt8EJ3yuXKAJsSSCZD458UCmeZXRC6i2SUsxE2MncUrnw9L5LCSG5Ly23N3QvQGxq8pjRYpmmMSLqdA7",
  "key16": "3w1MrqrcuF6aEYUgPUNioyMteFC9g4NzDrYyYse3qjqVcrrnLi9ctktA6kjgvvc8vcBPWKy9Q975bD8qhDBTxUfy",
  "key17": "4SCv1M59vXp4srfqPHoxou9UQjpzJzR6aKSngaixDmYDvN1J1nTYoihmQmGNF3a9YhMgJnvkn7wM4ZSmmjv8XGCv",
  "key18": "44KfQZ8jvdW6WvoMcEox9exqmZVEKgHHQaXdpSYBsmZgdf7wsnnT8gZCk8pHfni4iUVjWQfR3hfF3XkkkQsnEoYn",
  "key19": "3sFnUQEXAyu8TfRZQo4staFRWGNhJjkXnMbZ6RBGp9VMopPFyCCPRAz1CowswdDhwPQD58XMJWCkmrQneNLia5m8",
  "key20": "2fccvELysVMS2XRf32pmYhLRwbpcPut9PXC5JdvSZWoudUmtmMNwhvU7tVdTjMcpt4UTbgKZKS38DxNS5tN3xCgu",
  "key21": "5GNsdyxG6ZS14jb6Ms4gxa2jtY5FKmxaAj1zKABmwh3Xuwqt6dDSe9a1nBjejHMQe895UNC9xBxk93dwgyoMYAt4",
  "key22": "5tSi6g8fEgjQz3f2cfV3eDLPQckroTJQufLWhhqSBtHbod95rNPBpwfRPcNgeuE4rTZWPYGyzSEfgaL1kbydGx8T",
  "key23": "449T4TgY5Q6bQ2meyzjMpNTPyXyFscHn14GF4iqWATkyzajJ3KxtBJUHaVnGgaD1DdSHoeCLPzFP4BEFMf4ZrCN3",
  "key24": "64tNwLCGkAM8wwpSA46QehSMD2HGyTpV6ZxvPRifoXqPRwQ2hunztvnA314dHDtpuSR2rB4pmzFfZ6MUiFwzEfE9",
  "key25": "4oRuRK3sGSFQNkugeGMLXsLj1M3UzNvd1pSUNue3NPv4XWauV1ooGk9sdWmwr3Uiwab7pzUcaDqntNMjaSCuvyGK",
  "key26": "5ERwxcSvNE6NZnwoPiBKPzgVjd7cdppYdNdgi9y5o55xNTtxWuTUREVmQ6YT5Jbd17wgaNidSBfC75KVmU1eakwY",
  "key27": "dNHsjNqxqAjigpo3iSpombLy1rhmFJwKgTLzq4xpQGcCmc3yY1RoMQWhAGvhCAKyq84gRBf5RQxmwthxkr5qpBW",
  "key28": "3hVsMDxDygxYYaAEPRJSrTvdRoUnw6o54iiFJcq8uzvkv6zPD8ymAVb6zDvwhVZ5a8ZBQFrozwPZH782tQQK2JhB"
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
