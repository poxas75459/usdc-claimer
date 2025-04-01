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
    "48cX6tAu9kj549MKkRur324SRJek87gZErTqQNKGYkheEoMKQZsoPWRRczEsq7ZLS2tArJjsjHsLHe1ttaxvf27V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kSCaDCu3Fy1r2vEwoj5qjxnpw7qTyiSymz1ytPzedt4DjCxed2itT9UbDqaXJkST47Jrvv5bSeNn3YWnHoCXjLu",
  "key1": "2p5KXghPfn9UXZSkeh3djTKLRjzVzLRMjbFw9Yp6K9tohMWrc66fb4nv3MxmrqX3ZnYNuDQAqSrbmfZDsLBMZPkH",
  "key2": "38LFkfXSxpc5gNFocb3EwzSu3gVybjZAGA9wfXdCfyw3uvXHmasgw6rcKFLLv1VTM16XyWyJhNq3L1tH1T6FbBhC",
  "key3": "wrrChtCXznRt8SN3GN5KJF3u3PMMdnEhQ2mmvWRHj9svJfSXGYvGSujFTXxTCTNGzPJAs4YFPRuFfgCvVVxPehz",
  "key4": "4sb51aNBPs2r1fGk59m89pc64hohnejSoPFqa3sEUFPxtesbzfyXVYJaoEuQvTu2xwoQ9sJMZAVUrhWnUde6GzU3",
  "key5": "2HAer6rKdFGxdWKCm4rseaZk8pfcFTth487QRC2jvs43XkUcTuW9sKgcv7kdWNDEweTq3jus4pyePk68u8TxXEx8",
  "key6": "3aF82ubUcjNY8Tv8MpBK2B5P6fnUbot5jRRNipRy9ELPDnKfAVFDvQ7xiJdo3zzgd4RmSioGUVFDhFETuShGVtJF",
  "key7": "4FueoyyVENyYgPD6ns7LU5KsPFkFtVrmnM476GvSU8J2YNu8YNTubmDuBh8BZKMG2Enxf1vi7ExUnLehZYWth5U7",
  "key8": "5TNEmekGJ3NnHMEcVGTXAcVQJ3o216xBuC4uKZuMwxAM9pCXnyKyh2Z1bKMYteZaZrwCbw339ME37X3QFYNNacXt",
  "key9": "3dKkyuTjT1JhfrFRVjfyZ3Jzi6mX4JbfpF6KypZEsHJE4nxHuL4cG9Jx12e4SCzAtkuGq1xtrZCWWHnUcsoUr73h",
  "key10": "3ubfUALE58pT4TEdxWENusExmv9t99LL7JPX5edfys6hRyHYotJ1BzjzrLRizeiJgW3DveXFFtdqUTmeouA4Fdjr",
  "key11": "5EiPBqhtVPtHU3vgnzeHaEUwNTPuEgNrmscVschvtVtK9WDcFVTksQ7tncjwJa1HWjDmas8QbxZR77ym7GtypYgs",
  "key12": "5SWcJwXyBHDUwmbB9wUVFaF9FeFcrYfjaLPdZs6FWRQpW5m5NbgZjcUYVUAuVCMXXbfG9YR4aXXdzZwjiFQY1g2o",
  "key13": "5JjGp2cbhXabfNoWGz2eEntbYmryBkJL6avz9SJ13mq9KQVJZuDHXsRwUV3niFkoFohh7je26WjTBZARvbUdaDc9",
  "key14": "3Ne2hPPZAjYAAXYwKm2C1iiHTAk95h7vigvoMLjtqNvb3bEiSovk7yYyewE2A5CatbbVn3QjHUD5jnoBAqHngTUt",
  "key15": "33Ahr5L1gmn4RNMkDvbWnuFQD2EHCWERCJbCMvbw2F8BVYwp6MHqbqnnwSqTDULz5asENGPjEnug5uh59JRwRDBT",
  "key16": "4FTnKPsQuXNvFMcnMXoREiB2cCoSgMqEEWyoP4Erg2Wrzbah2EB9PAxGE4HWaDapwYfiUWb4h6HkgVFQaJKJ6fqi",
  "key17": "4awzjuNVcrPHvnzJodv4fA3t6xyu6hQgXQfXideGJxmEWv1biw32vKaSwUoojf7nsxJmxKJoYGv77nYy6n6FAsG7",
  "key18": "4Gc2W8LThYLsbXUeHHDbLpQB1n9nGidaMZk1f4cFkqGfmEZHFtoS6rAi8SYZ97ghFDx7mvJwf8Hwx3PiYxX6mNYK",
  "key19": "2wKV3wA5tmshfrVfadvJjzXX6JXjPpE8F5wdL632Za1Sa2vN1bHHik7eMLo6XYJpUTKsK6NXdwUsbgGV8e4d4gEF",
  "key20": "uM7MAdCHGWyYV6X94FBG6iuWprSSAy2y8mkj4E3hm2498tKipPUH2rY7sogo8cEMUxrvo8A7mQpq6c5LKR8PfTt",
  "key21": "mntbmq7TomqrWGS4tJri78tQnJ9rgPpJZpxTSVJcBCWTswWjpZByHTyxz1zygqcELadR7Wcsu93dy9E2LaVpa4X",
  "key22": "5DWBL8cpsXDGqEsChKpgpFxyn6unR5gE1XBn9w9WqfqvmpKi6FY8TKVmCB3g5TQHjeYqCPeKwexVyT1ePu6ThqAR",
  "key23": "5iaUKJLzj9hovESFVrkcy1cpcbFeripWDcWEmBCER36ZNr4aAqWvjjfXEULcgdSGpnrPr1SaVnTd5vcL471fRt3P",
  "key24": "5e89KsePTMeRedBLvDwvhfrAZhnqzzYbMzs69dYPKEepN7ud27LycMHn4wrtjzqTqTNoGX13HioXNnjKNWuWcxUG",
  "key25": "Rism8MKNmM75bb9zBMqfNEw2umT43HiAX77uqNGav4LFf7U9pESzW8WZBvNeSsQ9A2ho8EbfXKfPw71BR2r82VY",
  "key26": "5G4kp8oMRYbFDa5uLV8ggtxCqTMw6CfM2StWuT5vua6CMKmRD4igDjta6jDWHwaPyfZGJhUn15DgX12o4cNxa9kX",
  "key27": "fbdmQbtMsQKh6edgdTxBDz6qtLEssy3PxUxzF73gASQwXCgPbLVdjB4o1UQEPoAdWkrqsKJaPfvWW8Xgb2a9WM9",
  "key28": "3voArqi6Rr5Kfpp5duWdbdbHdLJs6v9k128SAYKs3RCrXaA4U3Rt1GRaY92u6qtgit4B2uf4M49GgBQwyxAPrGHD",
  "key29": "t91W89GwApgcEHaeWrwx7zDQ7Z5c91thCdWC9AP1mPAgppjJBJHUM57xw8oZHtRXqxFRZ9qA1UU737StgASBzEk"
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
