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
    "5PP6QwAj5iYsWkNWc47G9MdYoAEHcNTirAJPR5BETzjcnyVmvmZ1asZ9FgzSPr3bBfUgzJSyHrNtgBtKG9Wiq1ed"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H1D4rFhoeCm4F5q3DNDSSxfLA7xWcmQibdYaExxYhzTcxBksz1UmH4PFSVH5wigWaGvrhzqAr55MGzEpNYc8zF8",
  "key1": "3jB2UGqqcdLHZPBProhHYDg53GwCRb3vtEzAc3QfQ8HfUow26h7isc6rdNbHmme7Bk1p2jLsGVgxQN2D3yQDCVqq",
  "key2": "4N1qkU34zC6H27wBfS2tdPBvcUfsAvccN5dmY7H9VVaALzJ2r2jxHz1KrPkPmFnVyYmrpQs5SjfnsydynWdwJjqL",
  "key3": "5xqEeLjt9wB4Tbum7q2xoiieMnSfPd2t3umZrcpw24fmmPjQscuqN1AxSgt5gtsdDeaW7N4z57ynoHdKPAVmNT6h",
  "key4": "4MeayPaFhwwkNJU53XHGzmCtqH49S9zcqjmJyiru4o7QXa8PbBtCvQ71w3sqUWvqHJgPdvtYdJMshU5Yyq72yKci",
  "key5": "2T4voeTfEfo9wTnXfy3pGSSPMFMWw2aKgDFoqUjBtfz7MJsAbHNjEJgzmG4gQr1ToZFhBZe96KgnbkqwTmGgZbdC",
  "key6": "24W7z6Ppr1Yr1CC6TKPSwHjwGoz6kx1L37ePSUo6Y7BGb9SnJQdKXfMYQUmA3i7kdq2TeVtkX5C5CDJAg3eQTih2",
  "key7": "5KBEh4371DS5ri92ebcoG2dQYeN2RoiBk29B7Hrq1qjHvyR255RLzNjpCBeEB71sBwZNTTxqUmpy1HGBN8iAYBHa",
  "key8": "5cucX1ocJop6iKMhh3RdPHUADWNT6NGJ9wZG8oTpNbuhhnsotN8nfsEc14eU4GVKebMSFjXv2zmRfLzYSYyTBFa5",
  "key9": "4947cZ4NtiVu8MBogFk9gmxjdbWroTHDF3AKpo8DZBPXVJvpqmqdiqHW8gtzcHSs3K5cRFiEEtjtNkTr2yfJp1Fu",
  "key10": "3BmmPY3Cck1Kp6CFLQ98aGNmgLUePqxEXqwGd5FSk39xF4CQxHb1Ph6AaWvd4frE87vpS2juS6wxPiVc4TGjHUwo",
  "key11": "BCnY9W18gvEKcsinuRY26HXdmqSmgJw1VerhSjZVt4ty9vGize7RDtgDt6HUsEAmwRGLuYMfjDx7WG8Y83YMZjD",
  "key12": "WWaU4kJZnBaByQQK1BuBWJqpxy3VTFTQ1s4tcoarsk83Fq5H1bJJXx7siHMq9RJLfzcJx3jTKBboe6UCrG8AZSP",
  "key13": "4nGS64BioPUcEtMgTSyWK7mwrsto2FTqvhXhUDLTcqKhgbnUpC8xL1sEgbRyUKreTXTEAvjM4KGvfUjCDixj8Pb7",
  "key14": "iWa1Gp9GnFPM34dMbQR1JwueyTtcRBe7kFv8QuDN9ALVkwZPoP48MQoPFNWtdB52z2PLJLKdQfx5CuraDcYLtsp",
  "key15": "39FDGMAiUpz2o4hZ11yYAFhd9BvCQtQ9UffM1XQ7J7bQHKkJ7ebST8R7hNxDhgFF3Vk4QjxAfd529AtouAmQkXbJ",
  "key16": "3Sh53ba8NQG1CxFxVe61vecmjbqYcCjgEiTrHSueFbQMJUPFAay3mctAKwwpuKbdBbB6So1tAB18j7WkLZHbdpn1",
  "key17": "3H2MUFYzwzKGCbucATE7Z6QtxpfGjbb51xwDZYHe5ydNxPPSSKNe3btzNgp2GS4Ngp8ZkSffFUui5oQ9tfBvmjJK",
  "key18": "5Eb5VXxPuggPfnbnzsmeTpyifTcP4r7Q34Epj3MEkyo7163vftDGg7R7hLqW1VjZTaVc6b2Yqqc3D3VDBQBTPeBp",
  "key19": "5CPoyTANeSDTkiaiC3WrxU1YFAmACMJrSj9j2pjCnavkrKYBV8Ttq3VdkwFW5vCyxa5zh6u6KCGraDhCLzyHCmjP",
  "key20": "3WmckcpDzKJmoYx8NBTqCk8vkhv6JX8j6XHYp8tzWLxV42q3vL559U7YwvNrJFM25YXL7DSqF4oBDmzQTiopNVEe",
  "key21": "4PBPsk2MWU2KgbYdScypxe7c7P9ZN7ZCzLytvwbLdARTpEE6aLxrbv1uRhR5N9ZnvsQvvkMrYULcWrGgnRmyPcYP",
  "key22": "3f55MYqAYF6qzNFuRNmoTaA2zGwVJuMi8d6kvwnAZepdWJkYVS8Fm5BKiSFio5NTquNmqcuBH7hLSjZHtdRvUhxu",
  "key23": "29WdHgSZTVyB31y5WCcECe3Wbc7E3khamt9CJeiuvJMpCh5UoiP7FfVg62uVQeeULLVL3Us58fL4zYwYwmypaGSW",
  "key24": "3Ys1pRD2M3Snj6PCSZNATNtMmEzXY2ntjXF2z7Vffco2s1riNYXcCHEvzQ7b9JCCdwa8Rmke1RqgLRFH8zhymJuW"
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
