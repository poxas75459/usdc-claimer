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
    "3UFfG4ZixujiGbKeyhsT9m2HXFJ8BiiwRy8ibHL5BXWzzP4WcWvH9JPEzbauzt1SN4aqhTVk1gTmnNpkpNu2S3b7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eRAxx5mtkubzzW3F5rBTEUrKvhiNyDkv7SuSBBBZR6GfUCAGAE9Wt2xghLtZxkCvjuSHv9STkBd3692Hh3JuV8R",
  "key1": "5ZtM7rjLtsXUdaxZYoqkHxt4g1ED7mnxRbGDkfJHQda88dFNi82scBJsty3BcWscRSJqoDDf3JSCSFJHJ6ykTMLR",
  "key2": "5UvBrt9NGtRd9GcEDZQK84XhfEmu7TX27wbFevEuxtskHkiwZ1ya24PW887CseSkcSqovmerickr1BKTGGSg38Jk",
  "key3": "2wa6v1TYQnHpNjisPiWvjpGf56r3npehrDeM1ih5QKqNujcpPMqRrNRjBUpnbtmXue2QYetEKWeGb1Uy7tz9P36i",
  "key4": "18xp5FfvJc6c3iQCf6u3kCSVRKdhijqTuT49E2vvisnrfoNMpFeFtZicjZa39PxnEJDGxRJubMqqHfQ6VT9PnKf",
  "key5": "46HM5ZFCbvx8eSRxRcPjc5EuJSTHSBGLk4paWch6FVCxRnj7EvAXRtv5UjXi8AHHz34UyexMjfRRTZRSfTB7SP8r",
  "key6": "49CPKKLRqcC5DRmi3M1BwrenqmvJMYG2FqGYWV5fZZcBZvUTz5dddodewYTDUjL3tbgHo7xqCSwvTBhYiq4ahu19",
  "key7": "4JAt7JSY5NrUGfGWfk8kfciVv4BsaXPuZVqrMhSNhSRFL8aWx7MyhgQvFPBatx3Je8883cmCbnSxBfQ5VJUF9bF7",
  "key8": "joKfj1PQFG7J6824iPgZ2wEQZrRp75Ue3BwB6rB8pxSi8XQLgeTzpArw1M8xk1uBoq9kmcE7Jy3BspkPqFdqHz3",
  "key9": "47FeT7Fhu2xTaGBQAZnKdbqZ8o1ePo5Agqz2y6uU72K7kHdNLorEuLEAeKAWz4Qou7femayzz28rCmhUxJDgSXZY",
  "key10": "3MTLQGR4XgGxX7AM6XDsRyb5hmCYtCxvGA2XWvjst4wUWYrWHtAKSck2VpZLne9vZ3LLCxSASoSAmQLVQXfQoDEx",
  "key11": "46NLNkS7iD8zxyPF4Gg8b875awF4eAJuaWoFzpmX4cxRNb67jwq97fZYep3n1GJ3TaZfgiYDgPru92cdddiBpjB2",
  "key12": "3rgJTnxcrz2U5KNXoLiLtkn3nm9Hq376uE9aY8gVSoRKZtz2X5qpTVL4bcWugdn99rwpX2GtkyRP7iYdkuGWdKyj",
  "key13": "5goNaR93GrTi4PVinbQifFVhiq6dRRzAAutEa1DUP25fQm9HVGcgFeDE7MnEabChfvCXHzkLr3ergM8eC2prHUCH",
  "key14": "33a3JhpsHjjedXtaj6ddhrFPn9oqvBhwfVFAUxqzoVpJ71UW8v7eCjWsuLQwaR3xExUAUYdZK5NDQhAirazmmgyj",
  "key15": "58Jjc36Z9sdf33iZawsQ4VbHUUfCHcohymwxVLyMgjNpP6kfHGyHFWivpiZirwi24NhMzoMViiZWmde8YnfE4f7P",
  "key16": "4Wk1ZmTsPSqsSc6tY9TW4PAXnQTH4DtjenosB5EfktyDnwNmNmWhitorTFNPP32GJfNeMCAFgh3poKVjR22MXoCQ",
  "key17": "2wNDd3yuVJxiMLfzBdzvUdvvBvJiJXvXqtchRwyjvsTHeAkNTNLh5NbMf6NAHHsq8F6pq6Ec4H3NRe8WZ5QkqG7i",
  "key18": "2KDEj9wU4PwbAfKAiQfZ6yV4Pja7RLc3n2AhGrp78auKVNxLjyrnPYJvjFcHtF12YxbLHxhX2k3jDmoSKn2EHYFY",
  "key19": "3cmTcSwJLkz6wr3Z1j8CshMY3pu7BQo22xRCUqx6GG5neme68daPQCTN1raJ2U1RJZnjeeLFUjUt9E2xhUTDLLmP",
  "key20": "4seU4wBrLBFnrBQJVjFdtTkvziGCuQM7TV82XNqxmL4n55eEwpWCELaVXgipi4QqXJubtMNB7MEAuPthX9DDi1Jg",
  "key21": "2C2gbcET3KAvciFrCAQxDZzd8g2qgUtkogWmaLrTMNy6iS51ZzU4jZA7EpLWQ49Bk7BHMTG2XmCahErX1karLMHB",
  "key22": "67My4GWR5XyCxeiH4LSB31NoqzhWoQUGAEhQuUMSBGBiY6XmTTeGXpkGgachCt2YYBSLQhMqwF2RwQzosUVUYkhN",
  "key23": "2atdTWhpZLcf3abWvmgFzDe8BQG4t9ByD5XinhhutQnp4AQmeyVrspfVeekzcY35oan8GAjJPvU8g2b6w7q5eHaC",
  "key24": "2G44LU3MoQK1EScgX6g7NDW45S8jM7QvLP855VZ7x6yJF9YpBANZ5y74ee9VGxhdtKVsKEL8MsPvb8uCdy9S1mG6",
  "key25": "376DmaF34Xgpyk71vFb9eQZ9aF6JjNPfv3omhTfcNmm8azWbp9oUb3ARHYQY6RZibw3pZPSwjwCSJ6HwjLwPoZPe",
  "key26": "5yiykzbzkCJN2jPmibCUigQQuufRP91rwcwUp9MZt8QHkE5oR3RmYCk9u8k9BRo9TbQV1ADYs6XzXNPadDvSPbxk",
  "key27": "3RnK7vogZDRLjfQQTToBtVLNHEDiYjUGUvXXFPs9x5KBr7gVCabMaAVwybaDkWe2gazQ9C4K6dxGC3yrCcCTC86k",
  "key28": "q5tUKWEof3A1a248obYmX93QJs76Y2SkqnbKEJxC1ECWLSS3mta86WQnyADsZUmxoE8JWxcWtcaTs8bweteY92b",
  "key29": "5ZVbEk4N44ibWW9wzFY7YrUxhuw2abCjD7vpeRhrUSS5AsSMmyixG6YoRzmMTgnzW5Kfv6HCS4hFWsS5HaBXbRSm"
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
