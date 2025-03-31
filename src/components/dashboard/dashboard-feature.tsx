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
    "5Y2XXH3n9NAcTfrQvM9hd24h1qNzWZvgpaZqR7GdPa4abBukvyYZoS3LwA2zRByJjRr79jBC2HbwJh4TVZKyifEx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5np2mjkwHn19ixV6MTCK2f2zyRAgfDuDcPt21gdZwTQceM5MRZbTzu4wqBkVPfYrYo8M94t6zgv1X8pdL2eHJ1cD",
  "key1": "4vgfVR2TMgmEQAzJNQDgVRsmbEhgJeNtbMz5brHecSb7J1pk8jcshFA4MQ1Wo3Prh8kuixEJ41u9Me9KSekoRnL9",
  "key2": "GZZctv271UiEL8JkBZP8RfwB5C4Si3WhbdgWhmgDuq3WraPmCFqbyMsY9QhCTKiaXT8KqaDPZKJHPRwtfsA7cwd",
  "key3": "42SxWZqZsNUZnEP4SzcLnobqDwAnYYZ6wPQ9GmXnyU8z98qATsFUhLfYVphft8h3jyrgBD6f972sTS32h1jddFFo",
  "key4": "3WeJ7Gpv26C5mL4eUq8W1E3Xi7XY9myS6BtKBNk6BYB3vW96UZ9WgGmZwUvcVyRUsduyV24LDpH9wPoKjBecEU9A",
  "key5": "5cKt5hYVwyjMpeDAe866sWtCYHvUwgVZaeradweL6GBoWtz1UN1nFvYwFT8iy4RsmUQTD4USKVtWDb2TbzQ1VrTX",
  "key6": "5mDyF4xy4YJtW9BrrP5qEN6WDXrviE2th2eVec63Y1vqELrKRcLemJcXxNrwvEYgqbi2757w6etR6pRDwgRDwS7Y",
  "key7": "253LJMkF1WmNY4ijEnn5i63jgfcnMsxvrEvAnM5jcb3eR3GUSRPtYMQCsSCa2jP58TDXnfPJqnpF2AJRSc4rjNV3",
  "key8": "3QpUKgyn22tLVP81ViZGvTR4b5bhY1ZiXiRvBF38QxqNLEutWeK7FfmzpCmS3LCe7wHzGgyhbKar6HeDu2dP3M6p",
  "key9": "3DzYrzKFC1FovzDkziSEemuBgTgGoFau26hXmJ52BQhWAeuNm1e1kY6d7kQWLc8pXvuGDvb5M8tGHRAXEWomnTfR",
  "key10": "5dk3RBvDSeasFLou9WFDFmnuqsjKMtcvonDepxfbSVJNGgJmidugdu43yJmMSJnC2WcgFimDn8QtndioeDQze5EN",
  "key11": "4dsZGpSiwCLNLwUNhmyJX7eR3B9iWs123ZpWFQQ9q1KqCEEV8WCHjSdY4ikvuCBq9bv2yRFRuBjnWR7hMSvq8wS8",
  "key12": "2Sqabi3kT58g7n5M4HzUbk2XvcDD5gPbFSr5r3zz3u1PANjVjV57whAEKn65c3U4gQW69Uzu53oQwVebXyTs6gkv",
  "key13": "H3GyfPFBJtQtyaywzzkr7zVMpnFojsFagULzkduEEf7eF7WDNg3R7DxyWne5TpPQeXSFmVnxkPWEei1bpmFiS3T",
  "key14": "5xA9tkJtHhkknzf3TpEU6NRubsF6gWymNDQXiq4yEVGFNWtwSBqYhnz61HVa7aZ9eh1Nh7vpwvFgm7QQ2puM4HtS",
  "key15": "3pejzSJa4F1id4rD9fWZtxWApKcUSXb1Rnr2yU1fsH1H6h1gpUe95BMGBau35CmPaGt5sauyozSvAP2Bd1DW9zTG",
  "key16": "476oHziSwyVrexmdYxAjJPh8EqNdMhQ4QAbCqxiWX6R8dB1U1XQpQFdeKNGze9r6oLYMGQc53mXknW7rxm2QHKxM",
  "key17": "T8ubfkcygZVj152XeSmyBX47UZbo56MW1ohMnU9jhRRDc8UWkd1itqhtySYRgHdWwKFjmh2XxpnDj46KfdFLS98",
  "key18": "5T4aWf2aHu1kD8nWgpbQaCFevNHmvX8ChVY6TqCFCwAVmUw3LPXUhFLRvcNi9aBGsngBXqNf1fPw4c9eDBZwhyPi",
  "key19": "4ZLvfFSZTqt152E4ZrpdkPXPNiAppHPJ23GAkmHSzTnRGcFS8Zz12ps3PfXoti3qNSym1SzPqn7VLeo4Cw7WFLT9",
  "key20": "m8TpcnBV3wJN6ZU29AKJawFU5McUvdCooahvMY7579cexUgNf3VukwZ4xhxNQNzJPxYGauAFXojwCZrGLaVG5aP",
  "key21": "3pwUKA58uznrYx2n5P2vyQSaejaFK6XAK1Qv8Ffwadp7upM53zMxvZQkZx58d35wpJoofeM2hFdfjAKCtqTJDAe7",
  "key22": "3irfpYYg9GNWcjLSYhAbXmM4ZYKorBCwDATDqdkReGJoKnyQJJ9V2CXWYZf9NALh73BKVaBCMrz4px2RLeKSGvDn",
  "key23": "4jGqoXEX7ARExp7nMqhb9VSRkaqWkLDixpCvwz9Qq3YcoWnMTnk1fxp5ZsWYggR1p8ucoH4Z8P7YX1XGfbc1dDsp",
  "key24": "2U5dKrVLygndT8Cir5gEtXNLovzjxzPw6GWBKkeDVqWTCZJTxYeLdmxtpA1VXt53zsGcryAtLk9B8DpdLCjGAGyx",
  "key25": "3L26UvEMRcFGhwDdLm7FhQUbEWhye4Qt2Ukwfeoe6kDFqsXMx1RwbeMFWoXApjKoSZ8MvCkzvYXGgjQs5tMUr5HX",
  "key26": "4bCxkUpU5PjmhB6GwCwubcB4wx2LHhUcVDeiQfQhG6z9YReu5QxfSQ6a7V7nw3bxMcD5XxVjaVPCmwqFHwhJJbhF"
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
