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
    "2tcs4qhipz6YqLnBPyZVHAKLD5XTjn8m22NrRr421fFs8uK3RKGUvaV9ESXMqdbkaXuciwQ3LvSrrDP2ewVD41dk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nW266NK8GYpzd8uCtemfCEiMmLUXhuU6gibALyp9dTTdb6cSQrsVqL3jjq62B9yKHMZyRc678KfoCHCpE4z9ffk",
  "key1": "kVaK8Lo6DH7PxKcY5Ud24gwNDgEdrnj6jvJxc9oqSqaWpDUWGWZxESc74SED6Y7Yz6fpCnE1gXrBYeyHtb656XW",
  "key2": "4cSSk5Y4DZXTBZa2BAF1DxEpStUZKQoN76Hs859pb2kzNSMgjD9mf5v3dUayHWZraKjPvCSMzqLb9jmNzTEjpQJc",
  "key3": "4TPE8JbNKjRJUX55Xoc4v1MqFqy5ijhhMRcoAfb5afwQvPLaJ6Art141y3SWCw5ZXB226VuQETS6KJpzt1qWnGz8",
  "key4": "3yRgJrXfLiJMeDNEgAKMMFAPfpXnvPh25yu9SdA7gcWJ2zq1kNmRHe8mfM7hd8A9RXJUAcM1A8qFj5vYRRUEXtRz",
  "key5": "5Q1xZStYREUT53C5JzJ77WdXnGfFxVhnDB9CFoDP8KzCpa3zoggPW5MhKsQbSmq7Qg6FBfqQ9AJ5gKeG3XviW9WN",
  "key6": "5mzdtyNjVDjnowXtVRHpjp5omqeMF7pywMZe69iHZmtTqzggBWvEmFCb1EHqnDsQprxzu6i6LzL1JWegnxiAa3pU",
  "key7": "34EoWEdZwUu1GB8nt3fqS1JRbtvCiuT4txnERwbT3UWz5BNZxvDaX7GpWHCyGmTj5H9d5CQpb1Gt8wzi1uVmSdXM",
  "key8": "5cu5ua8Ps8aarJs567HPRHDH71auoc2A7yqwoxZMqPHCHTXxULzXA1qNtCJe6P69cmnMAK42dVzWUG6mjg75Mogi",
  "key9": "2ZSshmcNGwN5hH1ausVMNWChRGD4oomVZJPzt9dxPnFmnr2urJ78LXuDnvo2KgrHhBvuN1hgQoDxyJG6SHeDT6MV",
  "key10": "gTSKGBpA2wACTcTXajouuvDwSyTAzzEu8wL2U1evjLE2gAHe7woN3uSDAoqX27rDSMaLaP8TaF4js88a5DuKRaw",
  "key11": "3CzUtRGgyALS1ckfxnpv2HvepWP4Drfy98x9za3qxePSy4VDXXiQh8ZwsgKkmCrqbpPTW8zPt7aMd9LgpfY753w7",
  "key12": "54k3cgxewRa4LLz6EnybQeM53jAFxobfnGSQnLXQzzinUr1voF2w1dpqdQKcAxU3PWiu2JN4V94zg5ZwMav2wKgo",
  "key13": "5CP58NMvj35nP6iwKcoAykrGUiRzqTW3owEymEVByAireyq5ZtfWkzEcuWE8J2oNVegAwYRNDiUM7wzUmtsdSvUe",
  "key14": "2PyL2VBeMuFTwSmXttVhvc2xNnQwZFYyWCeXiTbzGpM1GL2XyWBeZxHR1HnwxPk1gU84Q7guReU6aM5q9quJnReS",
  "key15": "3QSevEvMCrxJxu26KSmMPZxtA6GbRayLhXYtjk6HoZGm4QE2SrUCgaCTX2wLYkMGwM7hQajHkmhAVd2x2GHpjxv3",
  "key16": "9CNhVRFD4hCJsUiZwH3byYzYzQHSfmhNA6YuqSf2SZ4GmWe36JSW8c6owJp8uSNtBo2VbUPegGKt4zVjhC8QSjw",
  "key17": "5EBoFcR31S2i2NbhXxU6fcDqT7Ac6ncpzNDJN1wLLGC5a2hs4zeQgGt8qbL8adRWdHKtsJ13MEzGN7m9eS9Cb9we",
  "key18": "paXs8mJfXdYbVrm1AhrU789z4ycLCKVfJjkMe1DGzzzPddSWv5sZKg4sZxix8NdNYjpCvH95YR611wGHbsjRHxv",
  "key19": "2q2DYDY8STSUKpsbYERdcmvoEJF1Qw157tbvBCgb5Z8uPzTg3NVxAa3dJL2iBwknx6xxdrVrg8kiSyS83d9Bz27i",
  "key20": "4f4kmRRGycoAzGt6TcTPrgus1A6vJPUMtPsEzuYqrkj4cXpY6xWtFsqzmQaGAd1qQRBT3PVnYtCpgHPfWC7APeep",
  "key21": "2kA9dLvJdfN25TmZLBfyMLaSyLv1jWBPRAF9YVogWYcCCXBJSDvg5kyvNwL76CHJDFt6SnFxgMqT5D2WCKEhUHzw",
  "key22": "51W2urGnxKHWQiQvTR2sra1iVx7rYfKxVQQ697WoX1bKq57kkTvkxQHJsK9FnHsCSHWykQXY7ouVfbDyC91LSjfN",
  "key23": "5qy4b3BL4pFxPneZz3PcdrTZPqViSXJAQyEvGyDhnvGPsvxiJcGcyZRSrWKJug8wNrmRocyooYmyVNVz5xrGomS8",
  "key24": "5oQr8ir67V6PgS9YhWTPEmn6J2JPnaoyKdeFK4Y5By7CTN3uVah5RbQzJuCtTvgPnEJ4QPrRen5Pa6yVAxqnKFFj",
  "key25": "4a9eA7fB1jF8tMib4zrpK4iwHzNxCxX7hY6fme5xyFCUT7An6ViQeCfAAasTrGDtoAdNyLKtJ485rLdiz53jcaaa"
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
