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
    "5mjeeZLCvABYiZRdUH4HAQkLHpSPKc5Pdsbf2AKLxmVahAxsW9MzNjC5wUDoEPndKY4AbGSYMjKZ9FT67KGTGWu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NzNpBN1i7mkt2CDp27jcSNLMXk55EjUwJi7K1Zu8ryPtwVYTGcX5hKV94NAE5EbTesbTeKMtWSgBnejWTwTYDk2",
  "key1": "52gDLcs4LDYcNnY89r7sVPDPmWyXUbghmoSinw49uGa4UhqDnHGHANFt7xA8AHGLpndz1uoSn6vNxmDNGsHqWnBB",
  "key2": "4SpPCJYbCUqrbt4JPgiAg3qeKoXsd3YPQ8BRn3xRPhxEd3eU2CTS9UnFFU1Uamw5jS3chVmRQ9BxAJ4pPagZeYkX",
  "key3": "5oPa8QRaEL7Dnjem3enoqJ16MECWnyHrLdWFuwqwduheBeu9rJR5uHAXRfnbhYJey4uFwEcopvc7DpcutkNzLtkZ",
  "key4": "2nDm9HSNS2xfjm9mmxC731esQ3FJpHcLzB2Vsicmwe3ntUwnoQE9jDMkoPHqVngBiFPGEti3kSKs2CyixAcc8iBX",
  "key5": "5p752zpSwU1tB3NaDrgYKrmk232mg8PkvwQ7errZch9igXPq3cwNzAjhjW4caa4cTucNPA7fRbr5DD3JZSZR66ND",
  "key6": "3UYfep27R6X9R5NMxEFJsR3kmvA3CimUrVkpo9AevX1EUSzP1fL3oPQhUc73jcVcqFQFekgexDeKYbYWToGG5PVs",
  "key7": "2Qrz1VLtnivZSPn644nvTUEhWxaX5tSRGFNgzYHr3Ve21kgKQ1joyMcJrqbXm7AxWn2B8oe7ReJW9HYaMdmVjTD",
  "key8": "42nSnXAAnHKwqbcdL4BmA4UP4k1ckQ89XZuGRyrVou3cyS4GmYP9K7pxdQajAYA1AgHbn8CG43uN5rQzGX7zDmsx",
  "key9": "4XAnLMXkwCZXawPx4J11mD9vrrXC9EEMFhytx84Cho93YXFz5JjZ9TdQtEBdQXSZCReW4v6fhJgLFBYdVbveTHHv",
  "key10": "3aT9aKRD3n8zw5iXX1jMde3mEMWrKTxzwqphdo34ot3QPnN27rEUbZmchmxKKvndZXi49w9WVSgdXtyFKRdfB81e",
  "key11": "3aY56GZoLnjdYGgSMWFmTjNpb3ThPVQJt2NtEyi2uenAGUrq4TDsxkf9CKr3QGMgLE4LoaveTSfCiesYgFEBV9Lt",
  "key12": "9sZcnLdHETyycMvyHZmgm471oJCc3KCGxrvHB6SmiU8qZ9mcm5KwbEttz9VnLbxy2PfWzFLhh8r2ZUvb8BR8GRd",
  "key13": "2v44xqSHzeLJStXJcTcDMPUVPgpecGvgfGfeEWgYsfzStbodfJALqSiKRVnWbmep56toGResXmDTo9Z5AhQYmU9R",
  "key14": "4VbLL434PeqU9VeZ5MUjaTstPooLLdhUtFcbk8eNbsVzm5FXmt8mrbo9s1ZLMaat15uQ7BtxE9todHpeMsStfwdy",
  "key15": "3RQBpLTXVcWdkBWkf1eYF2tqCvHGdfGMTcWNifctZTfTwabgFZq8sgnnE8WMzmtpxzCXqUKdHBatCe8G3M8S9PK7",
  "key16": "3D3EpC6ERuJYT1pyX7y2CP7ctUyd45D8NYVvq7sEqYbi1cAWY8avoLWF2s9fJ59veYRCQGAnLRzU6XeXFene6fdn",
  "key17": "tHjuRQsghm9t8tfjPzSpnyXTDxMTsZ9FUbVN4QdrHT8tgaxQc8mvosrGUKL6wYw3FfWoC6be83X1mJXPnMdFRbs",
  "key18": "4mGmP6idqgxRN1M8uzGc7LFdmnWWzx7fxRRp13DVLnmX3QSweP1Qf7PV3qDGAUBqfFKkaFNyKYKbf8eGXPmBSzzC",
  "key19": "28QD3mHRnNCoV5nZHkT6LT8qb4sjxnaUZvr9QNVKuTmAMAwjeKrbuHPGjFE6s3j6Gtbovq1DVreAic4aAYahcEra",
  "key20": "45kUv5AUCnirnFoa3S5R5uyGGtRm5RftDrd2bouCRAuCgf9F2H2VG1kgCr2t7MsMADTtm265igPYwhmKrVu89Ku",
  "key21": "5JweBqvujZLErVPJ6WzAVbR9a9Vy69cKji6vZfF5rZSyq6HPpQLpgsKfFnYtVYrFDvrau1Urq2yUGbsUNvreody8",
  "key22": "5uGCY1YmjhzGVrvkyHLyRs6H9iRVthZoYg7jGpa6gftx98wm1BayL1QA2XGpfQQDUAQ4nhccQ59eRovjf2QGqV2A",
  "key23": "327dQYa5F74TFV3xq9q4seuzMFxkBrs5kELSeTfB3FhEdj6jU5E6zj893wXYMyWCgfhoQ8XLgfge25t6x41YzFKh",
  "key24": "Be8YXCF7yar7vigh4afHQwLfAE4R7hdvYQcMpxVX13DLBbiQg6atjkRec7sNLeHBVZ7Y3aNjTfnjp3PweDfdZ9G",
  "key25": "5Fs8VojFpaJV89JbjyxF5LmB1Wh721dhiiwHpvothnoVADKJbPu5JfUvjaGLGe86MDEUREbrSMZwhwWnzEecGacR",
  "key26": "32JUYumGYVHcZ43Ljd4GpgDmr2K8Vj7AGF5tTMY2AuRSCSW6PgyGY15QvqvbHtLHuxUcpELp2Q76fP7jJEt3Q46J",
  "key27": "yjJJbiuDyfmiiuAEHN3rHzQCjscSpeBo4RR7mpWPzdXnJtcbqsnFymi2oZ8gVhURioro4JEYt9996AcivLoqmr3",
  "key28": "2orHss9gSykZqt7mTcxGUoJxXbDnbWXVTuaVrtcWBmyzSK2ttWF1CQmYRFccktqH43MTcFMFNPbSHaep6WCYKpMc",
  "key29": "2pYsv78Ap3wgdrMhh9BhaGLgi46KsqybHg5zEtZrVvk9gZRfhgD8G5uPqdLo2y5dYUgjy6FUpitPbvQVUF88v3JF",
  "key30": "3uxzDTMh2aARqKAQKY7AHwDWf7q71DLs6bAhXW477NhaknEyXRzM7Vv1xECbn77R3SdhQifi8wMKsrRwmGQQUCtX",
  "key31": "2FdE81Mh3gc87Yo6vsfATtvn6LDxgwv4zEvGxoDxi1qRhtUVYmVRSxfx1YgW1X5XveCcDF5L87eWgKmukDUjRBwr",
  "key32": "k476KbQmxEkk8UfmM4hrzGJipAc1UAiRT3SuFBo7K9iJg5xfpZoPjUVNC9xxrSaWzfQiqM5z12PsNaxp4iEPGHn"
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
