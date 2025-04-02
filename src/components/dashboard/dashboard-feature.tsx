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
    "DNkzES77ATpUam865t4mbEya3b4AiYN1fYMjmTALfZFbV9Jn9YXrFZ9tUNsMWGhRAkXAqjwdJoFz8aD93iPeWiQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jr4RUzzTk91bVBFyFCdEmeMxQ13hVd5is1VZbkogoDJZfVrcTL2yp1dCKueadiZT3oEuUCeNAdDDJN8g99pfqEC",
  "key1": "342hKYZifE4FZi3nQfR4QFQiTLBe3Cy6ZBBodW6a1UTiJb1WH3G4k9woeHefwQphLkGFdtSL9M9EYwGMTPpB5fc6",
  "key2": "oH3W8Ks33jDvXZHkYKAu1rW5LBj5xvKVVqovstNwSjkPQDyVJUKFZw5zupNaWZ32y9sBbQgDkkHimsCXoMmMfih",
  "key3": "65MDyE3nxqCUegEZPYUYMpmkPjM5L2YCpQTVuRYcZXYrXmRGojD7zie8Ve2ezhrD67Xg1EELPn7FDKeuyvBU7bin",
  "key4": "3k3uy2YWqikjwQCrB2N26JwrifZeC7JsRYVZVPYfmG5cyySamkLyHXnjEntB9GmXtkZoAqdXSUJeP1WLqhkoTcV7",
  "key5": "3SWDGw1j8VUb7J6StSTksYV4B73gExuDzkCUk1Dr2gb49GSomaU41UqPV9jZ4Ystrkgzi8CiNoECs3aJ6sA2hnH5",
  "key6": "3EWQFZxJjmMLJLGJrxcr9VAqvhposG2pKnnET6FneGDNQMuNS8RG2BXvQJiFaPi5QW3L9JHb7wRXupCYZk7TyN8A",
  "key7": "iNxER8XSSxoLew9nvYXCcQfQ8DDvbaVdPKB1r5uFLayfJeSg75ofymamfJ5tWU9QrrQamWgMvUzaCgHHYA3Tckn",
  "key8": "y9DnkW1XSQ8n7fUCE18iyP2LNddbb1jD6bLAzhW1LhQ13qRWZtFZRQiMPkJSGMSsKtAtQFhXgcarKKRdvt7nKZd",
  "key9": "2W8EbmAy7NyywY2KRP2wujX1ozhnvFHc2v5VGUyxSJcHNYwS7RJ5HdsMKB579me6kzd7fxygCBPGQSEA6fUeEwZT",
  "key10": "3HuhoyRWa15NzfdEBajhCDBan52Z1P9U8SEtR8fc6AzS7gRgcTEVDgoNk2BBcf8WJFLapW2M57DSTbeXNTBu6wYH",
  "key11": "3LHfhnjaxkM9nt2MWb93q8ikVzbASCL81zUhqn55tK8HoiVdjgxS9JX2wGsZ4PSxD78tTTVqfJWjAn2C3LoXmUzr",
  "key12": "4fRheULqGMUGWqacdK5vjKwzKng6BvrKseeqh3SevybCQZAprBZXWSbMVVjVaQYVuRm7EMDDwfXTNP7FzoL9RvCi",
  "key13": "TvKwVhYMk1z15JTYaU8cpttQM5MtYEFCHDmWWHsNAvo3RtbxzS8HsKYpmVTkWuJ4S2X1AZ6e8htw12vxoecrkfJ",
  "key14": "3qM1QvAE8Vk29D7ktHeQs1u1MdPDPvgziwjVsJqeNVcPT2H7LEJtD2Jq2b5CCaTqeXp6R1qvmgEuYv3i49vi2c3j",
  "key15": "51Fmnpa4THGZg7D7uK6UvW2Lp7vZ4rUJUEXWqvLx3VEcc6KVka7QgKNSwKACAi1qLsHW5ZcAMEptYzurp3nnix3V",
  "key16": "5uZx7WLUSYFtJhvPVGAsLLUEae4ehJmvsqPd8iDnB459ZY9u31yiKdmCPvxiE6s4ZwMjbcC7qAoukLwDFe9HPpQJ",
  "key17": "5mtwrZtrENbzziC2HpuQn8TicJBKtpGzcm33igZvdSDG9zpdGWQSN79myZiSwEH185fzH8mN7WH2bBZ4uQc8ZYrN",
  "key18": "3xggH5rb4VR24x5Dh7grW5abDQUkaSL2WZojCpo9mg7w3u4LEbJvvvHFQuT6LkJeLvMcsvLk4DtfBM55xhADGTAP",
  "key19": "5baeRRcTvbfmJgAWKhFVivQe51zwP3y7qNXK7qcrRPKECLG4aGF7H4CGtosxJ9CHjUroumiuPoYV5Yta5WNGmGEi",
  "key20": "2Jr9S98QwQ4GAdJf1oPPZpYQsa5d8oZ4HWFjVxE79mWtPaWJS8uaR8h9KAHmfEgbHmuE36ujbQukydtTikRQKM5a",
  "key21": "4BRBiqUCA16ZBqz2TKZDqREkFb5BrwMv15433hXAwYy1yEMCqoA4itdYD6ZKjtuB28rGdDQVMRFogGwZ6Zke8rxa",
  "key22": "2WuySX6mqygNMGCRGpExNYg1MExt1cDnH7Wc2W1EyrHJRwh2wbqsfwZuPcyhxdkVEJKMzHoFaW4FXz8nxybi1LJT",
  "key23": "2YxPVWg8152zUUySeE6SL5VgZDdK9ikYJ6yFVTSaqaPhq4w2oNGCu7ULJfR5Y5Ck2wwn1GCm6QEMMEYtRDv3pBJb",
  "key24": "7RX1HU8n2MzVBp9mCbvPK36Rq9exUXVsvccJkgJWuRCtJheQLpbJjEWZHtRM9JXydpFWxXSAF8gBhawQXsfvch1",
  "key25": "3C636Z5wz7YRZ3vWKJ9ndwtYFRNjoD2Zxm3Qc2FcDHLgx9GATvdFV5WghvGbA8ozwGpXWujvLhuyx3LU7dTWtMgN",
  "key26": "48TwFJ9FebfPLvRVvitwMzizeFWva4fx8snVB6iyxiGQrTSg1zViSAYSUUjPLtNjKi7Th9QSMEnZqAMkaVszU3Nd",
  "key27": "4rrSMw176iTENr7dGBL7phuoFrSYMZs23x8cSnTwLwMBWk1L7ozXaqfSRnbuY4Em9EUrGPU5iQiyRf3iTLQaDTeV",
  "key28": "4mn4ex2K8xrLVXmkgaBN7w8xQ9aGWykXtDLcRGpb17iG4C73PNBkDDWHJJ9NmqYWB9ufTFH8W2cpeMnBqxTNch8Q",
  "key29": "5KdaZWVSXqgkeSkQEgbVD2dcyK2k1tcPcVA6k49qhxBSV9oxw8qSRNRcGoeMtQ6SRpDsMMxYpJQTcaCrsMvEB9p8",
  "key30": "4SdLTsGUstnuuRcnL6ZsuBTeBCkJJ7hFHpaxNJq1hvUczGqRLXEovZ2JuGVjAv1oat6N9bQJGJuqZDUDvbUYu3rm",
  "key31": "4sn7FeJu16oumBVTDv4rqWwBpMURohkifaYjQdNCbx5nsbziairGTT3x9r1i7LkFLDp3erz6rXamcxPjFJMzXKmQ",
  "key32": "3kPV1oHqjg3eZi13S8ZFeFbQKJvGfWZrwsfAToizkG6kXw6tpEtd8NN4HuygVx4BFod664xsCjrjgXq8yhobE7UX",
  "key33": "3T6CwKDPDLuPxSn4vM5Ve9712JbpVrpbyibb23vJVcK6F5quqxDvH4a89f7RnnjDkcmPEEdb5R2BG293X4hiNLeH",
  "key34": "rhcVEGsM3mWXAJ3UnCXQrpeaKNRpqdhMN3DhwSA5U8hS42WeCgf6CZwC3QuTMeaztxAQrW6SFxanfkaVesp2Lvt"
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
