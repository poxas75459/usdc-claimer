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
    "5QFv7hbNFbzULfKUEb6DPhNiMS3kKkNcZZNU8gaUboXabTiaS7Nz1MmRfk7YdSaUuF6jD9fdckUmcDZDKnGVH1ZG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PDZEiKfn7i1HDAif1Ru8k2vNFRVf1srHVtPnad4MmXVJA35TJaJTWJG6PNp3PNiFjS5HKwAEMsPFTX7UYAnqhPy",
  "key1": "25awPUB1RGMRgN9MWCb39zqSQ9Fc9ofD3kUEqniCZBvYs1Ko8SvXafZAazDTzK4piLecnas9QiPVPmbREBLj3taV",
  "key2": "5uhYrohLMxFyWtQbpZUayMaMwwqrv6Yzqs4kSEsYxpmnMzW3dSTMtXE2M6W7ia75dyJLjp1uPuGUVu5XpnwyQx14",
  "key3": "3ayHoYm6yg3tHTooZxH3AgWL6qVBih1f6PxtXi4WDGjrTkqzTJesmYtRTjiCY9116Lf69xgpPqejdud2zKyKPEKB",
  "key4": "4KQ3V9LEYD7zNufUUqyEWsuuN5W3CMafYYiobxTQCud3bdNfTNrkniB7ZMGih288ButZB2zF5nunMjKdXigkEfVL",
  "key5": "66g6Y1p5oxW62iPBViz4UADqDG2Gvr71LP7CeEDgyMsDKnYDRTEMUWmhCjx3WYj941r4d8F8ocoQvNpDBLcK8WBh",
  "key6": "4BwEiUgPc8s3wrarQtrnzHGLgfmukN7p2UfoHfCM34eBAQZga6uGYzrTtZfaTxaF3XBmg99pKog4emD7qUmNLHmg",
  "key7": "5TFC9zeSiXHAimt1taEwpjQESzA33CAa2GNd8Kywrzs9cAmBmh6CdWNoN8ojACZ2z6iS67FrA7vEh6yMvuV2tU7U",
  "key8": "249F6vfk8PacqLmWsnCdDB6wy1fMJcknE8V49nEaaPckiJP9D2CaHZ8hCZB4b5EGbYQEn6NbzCd2MKTnKTJ4Euxx",
  "key9": "5qZ7HMboa6QUpucE4cAQYhbNjZfJ5YoGTnhSFDSKsAfMNvJnobWhgCJ4skyQvD97q46HgbXFdraUW4mAY4dtqrGL",
  "key10": "455AeRMi2vaEYjgnQS1JGehjwYuCson3a9s2Dhc412mi3gRN8wvmP4bhmKd3WVP3tMzynrMkqGTtftZzeg3q8x8K",
  "key11": "4KVacM5F7xaxr7voK2GcUkGcq26WT7vmjWTBfqA9rikKN7TPERuK62McmPZBDp4LgJf6FTrv1W79utF575jsost1",
  "key12": "4e8zCq23yMDLt7hzcXq3G1YjYzNuobPjJGNGa9Cr25skKf9nLwc3Na1CSkk1jU2rPU3fviZMsMRSxCBrEN7Mhs2W",
  "key13": "4nuGiyHiY19LE74nCHUgJq4Vm9XtYNPEHuSVgfp588UifX6CJgReekQGwihsofeyCTDtiZnTgeLPRWWHvHZtnSwj",
  "key14": "2HGmcQ3mToLaYLeLWLQoYa2EcW28PVaA8EeNRXJ5C4T9pah3kSZkG7o3fG7f32RXofMRy2ak8Hf2ykPKzZp1Jqa",
  "key15": "4vQ4XgEei2wMbwSdEbGpiM8kLdJFdgwU2jyivvosEe9p5eHKUjMaWw7u2XRkXBW9SZVDNusQwUVxceNpHUcT5v52",
  "key16": "4szZ7SnbSayn2WG3z8EETwpFfjoRmEV7VG326HKzRuqWoBQGVr8De9EocmRS3HJ59zBGM6cQBE6tp6G6q5Vc3vY6",
  "key17": "4AiFW7deXaidn8Fu9kDsAQMx3MHbHkFsk6LnxJGvmmzmA5bAgv93EWi38qhbpDdZeRwJszCts6WTdXEu4GSEnuCo",
  "key18": "4er32jNUeacWrSBfiRBAHAKKRzXDhXt6BcVcFYbuX88m72M76q5igdLjvQdxQyYujYJaXttbDnu6f2HHcEUimWN1",
  "key19": "3ELPAK6bkr3dWGyRMAcQWCmVuNSvYXxVQzmUjY5Mc4qxS18kkQwViRFVUXCcbYGVskAP7C3PQLSZysnutyq2XgLB",
  "key20": "4MwuL5cDg3hZDN1rtdTTg5FbFtjf3Bfso4UHfF2QvhNgM69nanDQj9oYkt57sf3H7uJjDa34DnCTy7GVTh4Z558A",
  "key21": "4tBeSd9quVpdZD2iFJtmDN1hCt93EnzC4fs3N2u7qDeXENGN88myxJ5DNZKBPGadAcixbhjr9ZFTmgQQvd6yjWGG",
  "key22": "2Nsv3vKByRsmGV1atYPcwkcCGaisaopdrNHmm2eN89tmvPPZdyi5Le61JLJ2Y32AkVDPamiW6RgHHBpacbMn9DxR",
  "key23": "64oMzhgjgc8bBxFeUwys32L3QMZUvCgER7L93CFcVR6sHZ7ZvpwAmVsizhghQvExqUNSvu4XhuLSTQKzWvJkheC8",
  "key24": "5952CcGcb8m2dTzQMtkffHdXAiSjuCKjaDkAzcNrabEJyLLEUkButtF62J4MJag49Vkv8h1XAmzG1paWvMEEw1jf",
  "key25": "4aBTr8fexjPGYfkXAHG2Hgp7J5skPVH9fekYz1fdcj9qdjBZYKCLidq8XiKG8sSDtXfGgupmCsWUGMx4dSB8HLwW",
  "key26": "5qXoWZFmYwhGMEekuUaWpZUxNdCJ9V7cuHLqTAwNfWhn64JuNDkQppMJs3oS1CA7B7o9bkaQmHAHiU5A7RRmwkRh",
  "key27": "4Rvs4bUBpbDAxoMdwikyMQwpoYRv7aScX2pukQZATfmjYgDMijnZC3kHHAdSQ2vBppjKPcsd3Tg1Fj6QJXHxKJfR",
  "key28": "648DGKXm3a21wveaSPLTxubsZZwZVDRKqJXJ8aX72m9tB8ucggWkg9vdecFKJyooRViteZ2ke6jqPrhBcMSQfxxh"
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
