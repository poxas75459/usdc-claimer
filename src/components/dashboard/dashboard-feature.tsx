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
    "5yRb6keeVAhpjj4ariWuu5StS4eDbKhTSLK1EV55C6oD9M8BCUiDcJ9FzkE5w6axieZD8VcGuDLPC7GePPNrTLBD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VJcftWxv6mKXirWNpiGnDyMTYPpivx2JUr6ycvBTevAGtBhM98mV8butXs6h3XKS2rd4EnMsoWtP6eGDvQ9QiLs",
  "key1": "TtKLxBkmp78TJ3PGSvNReJFCWxYBjEpejPriiBTDyr9SAj3Az8cddDGCWAg2nkgaxwXtoKo5BCq2p28ojwQ9Esn",
  "key2": "3JuAhJndjtXyoSBRtrqpXxVvrNGsy2MnrTebim7xK13pAz9RkTSLx1EVBhux4PBFb62nfqhopjkK3nEQfsnNiTUd",
  "key3": "3iGhmRGHJ6ft9fbzLXRLu9GDQpHhV9UNgKr8cDBAW3ykEokJLJL8dVMKwXz4jM8oDqoQ8dobiAtvjoUVSuADXWZj",
  "key4": "5aYiAMydpPFgs9USabAjXw2vxbcCHxiuNvRk2Mn2RQbhCZKZLJ15CBMEse39niJ6f7Zw4bS2NP9c6PscHmgYBSs2",
  "key5": "3zdMP2YMkm47qoPJyGnZSdWutiFYQzbEiwygjQmQZjTvY8JfaKiPdVG1BR1kzgUj6HCUvNQqgnyJtqPLL7uiaSqK",
  "key6": "3maZ2ZHrwuMgwF8sPPA7WAmEVbXmKfT3eneEAyYmMK3ppHWAVwmjiLdR9TsheTNFT52AtxLMMJydEXx7wLY9KdW5",
  "key7": "2q3KyFvYcqKNo1Ku33CZpNU2fXgt2d9yspfozihKfQt1WcaN6aPE6gvfNRW9gBdL8ZXNnJRAtz7kCFsszKYWDnoe",
  "key8": "2FfpwEm7VGprVPodujEBgvHt4B8dSinfchvVxv8cqecSQSJNgGv9n6V3xHNF4ZEgSdaJue8wGZgt1nCbuBVsUWfs",
  "key9": "3Akufy6s9xd7zmxTSE92NbqC8ph21zDCkFemmSjWvLqXiokS1hwYzP9DkEzZ28G6T18teB1LkzpUsfsQi94stxGu",
  "key10": "3Qv5Cw1ZEqkAKbF9cyP58gkRXZbFe8ccKQCthqDMTeXwXok2gQm6LUyMo8G6qpUAmVBiauUzZuQmmnbTTG6BV7uk",
  "key11": "3Yj7MqohxmZ5vsE1KfEEk8gGWQkRaH5xaUJE1asKvjvSBj8LDcM5XbEbDRsX4kC8TDwsfR954ZhSNcoLiXdqD1ET",
  "key12": "36G6B8RVQJyZ25utBw6v4Ugn73SePeLwJLFLaECXESFzAYW6KDcmv4zXkymJEDxfXTDJeFJkAS3ZMwfqp1B3iAoE",
  "key13": "3Zm482ExAAcRVn3T6kc3r7VAVDnVBzvNF9mfnwLV9rJeUw9hvG6uCp1szcym4gTpbCmTaKt7tNT2qpj1yL4UQP5K",
  "key14": "2FD6YAfzWmhMdW25YNq1bej44c4o9dsixhmEPVHWPeQiJvjHuPGs8ByeRd4ZR1iGxabVH4qYBjA8nrj4BMVxaHy6",
  "key15": "2cP2Bs2KqupdqBV3B7dEPkfH2XiKfacSkCtXszVSNi9TV4ugXCHHR5EXPK2hBUg1DUioPEgebzH1YDR1mq8CTaN7",
  "key16": "33uXzG5dAtttgdfjkRrBoJp8KXYT62fgjPDYZ4FJgFVyymRc1SrmzUVRmnniLGaKTxwTXZQCithygXZY7ke7G7dU",
  "key17": "5s9TzqrFPv4VsRHxroGEdQL4vF6hCh3WpL98McgJQHqNXzRnJwCeBcqJytf2uLTxHY5c8ZSapU3zjajR35gFjej1",
  "key18": "2T9wN2HFZnMK2GkDep8qVeqrXHxehce9mmrveH7MnyBExTTtnhGSBpmn5ByjwjJFqrF98qYzcPnAxd77GxbkPKV1",
  "key19": "4kbQtZi5jQq7pdQQyANvFtWCohUwtdsJxC8jMymJKoV1ieYQ3kL1JGQQhvy3PTqe78kTNdcrvEBPyjgHmuh1YBL7",
  "key20": "4H5A27Xrzo3RfVbovVo94xm4jDaaZdjw3C7eKBFoWoAET5VCQtThSUamnQPum2QhQZhaAUDpMXijw6UevLqwFGuS",
  "key21": "4wTuY4XeApKUMYYwdf7UQC2iPq5pxqLYoGLnBLTCL2GokZAKY7nYYdJCKzztJEn5QH2jdwNfA3uxUSssP3Fprtd5",
  "key22": "3u81gNwAmniepUsAX16XGwuo6h9ZeBzC3Yb6Jp1j1wAUvWgnm7HjX26TpxGad9xsfqoxFMH5DxPZthcHsLG7j9eM",
  "key23": "5Pt1nkPqogyC5bb7HY3wsfE45f5Z98TLnNT94Ckz3nbyJd9xbqGcfRgw4HwgYdK6bUTfXRi3y6uNEueH4spDtq5f",
  "key24": "2Fp84mKGR5o5aR8EBqARbRq1Sg2Rfuc3AQ32DpxRwuKGNjbu3D9w98PzMhz8g627N34ihJ36xYj21abNKnmysJFb",
  "key25": "4fsdww77YdkPUuwr8AVAjyB9HkWj3gKYjrXPsUUTpZe1ZqvaRNSCGGJtmgxAXoFYhH2VczcN4nNxYXsoyupVsX8r",
  "key26": "DEkCFPaaza3mFZgzVZfCiCFqWcyTHQ1TDXrt2Y1dQbC3kUud2iRNyXQdPG1jDDi7Mx852dUpkzwcW5XEbjrmU1B",
  "key27": "35WGM54MU9LhBC171zzgjTJuy3aNEnGcBKxbUJXGayVREPkwuV3o43dqsBsj1Vma17pSroQ4A2bF7RHkTGqn7BMJ"
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
