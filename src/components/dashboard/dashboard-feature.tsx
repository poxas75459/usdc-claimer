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
    "67EZbk8QQNNPTKqKeBDEQY64t24WGJJFQB7FJk7fC76iQZBYB8zz3nozLSNEH53pFhNRiJLdvWL8tP8nCV4UT5cu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gSotwF7pcr5in5zKnUZfKMPzfyVGYmhypJeS9be86C62njFb4PTMaLkx5xx5tdGfQPydRNtsttYgQA7mpyiaRFT",
  "key1": "5GqULTenurTAf48NmPnDkqcLnHCT8xBTGZ53JqKqQ9W25F5TiWDSNqQLLeTbZJZdCMVGw56PGQGK79RR74xDpFUJ",
  "key2": "5FBG7Z3YArrnbZY9vnRENGHGzAVX7VbgSBCFcXbGk2xqNFy91qWMuPGUxYeD8Vk1LwLwGGJZu9WLPsLRGtH3PbuB",
  "key3": "4sNLjU9steLebdRSq9uSPcfGWEcZ6SGNwSXPxXEj7269mt6rocPRDCgj6MDbr3Rg9pBabPKvewdah5aHF1zfLjHj",
  "key4": "5WrqsN2iqez2sHseTS9FmtndKyQFG6Xm9XFxFskDaVitug5GPidSZR4JG1cYJW25fzjTAzv1WbMMFwZhVmTKqQiz",
  "key5": "2RqaxBXKGiFZVLU8sJYe7B1zjiNmKHJkPxqVSdBKNP3Pz1RThwtovvwutQMVzKw7GpmdHPoToRaBNXpiL6SbfQkq",
  "key6": "PLVnbp93bR9gXjKcYicB2MKsYHAt49XcutfqUwBC5QpiUsG3N3u5otMAK9fyggaG6eUNxYtK7GMMBf6xYrLtYib",
  "key7": "2WbzmypFgwtm67WK33UfNps5YjSWtLWncbT2aEsatTNH8vM3nek2K4yyX9B6VdRoCKVhh1eTthQW9WxapiVjjfpg",
  "key8": "5rKh114wGxWJUHAXP23UPwttS6ChyTpyaBRbaj7Xr3mYGTcrVRDcYRMk7demM7yrFntX3UJToBnAZT66DZ9YP5s8",
  "key9": "4LS9FK2pqLnWcisRaRfrU7FojmxG77KSMWeLP6bEb7oTzq2k9djE21FwPbcF6RRd7sbk8cHTpxP3AkfNCy4gQpz2",
  "key10": "4zT3XWG5HsEhvjgz2sCUyT6HZziWEfSUgf4uDn7ZTXx3NutrTeuPN1fjQTKDjXGc2Wfgfx8e1w7dz91V1WN83vAq",
  "key11": "54VLPNEVXwM8gv3iV213au9urtLSEbT2BaxnM1WpCs2sQC9psuajiLsZz3BGPTVabUNCJck4JT8hhYAJcpJKuZhb",
  "key12": "3YVcr7Gn647o9wAcfi2ofotxBL7C2ZA2STjX79USBVYyoVF4uB5Q2uh2zFqacuDk9x1jWQvUbfmYwoZ3JXiK6NLR",
  "key13": "5TQn8z3E7zcENEdo4fZGYMk9N5F7tfZc3PTrQk5x1XJj1vdtEkExCotGEsz8ZyYWGNmLPYDSbmvz4MFXXUv5zaKp",
  "key14": "54wnfFWDHAN5PJPvTaD7EZ8ZwW3iohxeNxxNFT9jiyk5hmhZxdXqpZx7H8tH3CFgYqAsgxWVuZT1y4KMz2pnjwzv",
  "key15": "67FNZyqvSLgCP4QwybDMgFdNmYGpjS5Xw2Q2fu2S53ZrghyLj8PRpYj5NdyE9zmEHkszWkEd2B9PerC6Z1jNqQpH",
  "key16": "5ZKTd8XnUgDshWdFdLSe1HCn3MY9rprqeRHJHLNghfE6wkotBBhnxen8nNpfHcbdhnWqG53CWZui5xh6QwLmuM3u",
  "key17": "39Aj4peEHvYYVRoFzRQ8Tv5NaRjtHgDWQxS89VpenGCKYtYSAre7iXNbaVC2uZxvLuV3qrCpjihZWSmn3xt1hhyD",
  "key18": "58Z9MBfsFJcD8ynzCFoXDVqzePrU7tYP625FBxRXhfdxnogtPiV2xzfDWdAXfTYZhF9omD1msZ8nLra87J7N46sw",
  "key19": "G8vhvMmqTg2qS69hsL1U3CXCd3mxZQTeU15BkmmUGF7rQzWNYj4b431jgJCHyiFqKLQBRuhY4LpGgyvnLA24dqY",
  "key20": "4AAUGfwobYDRN5SyxPUZgxxv2yfg4UHbi4UMkuvhphmJR6V9KdfSVTd6DNyMQS5MqtyjiPV57X8c2hGQ24vdhRLw",
  "key21": "1mFhCozTcPBeud44oNnhym6uPVmi8ciSbvVD3tuDe4NDdApG2aSrGkP42KUPH7KsfX7ocNXNcrVaUs45hC8U4WU",
  "key22": "7kWoqY7ceSmXdMLbUWo8BJTAomahbBfHcVd9WWWLLnqZZkWTUfQ23cEJRzisd1uacwXb18TPrpwmTeg42jCnFHw",
  "key23": "LoGzHSAuafwZK4WRMXGiZBEqn6mKTV8GgE7hDAWPCdMk4u7wfXd6TZ1jWnXh3Dn68RF5DbWS5KWyotHmj9bXUud",
  "key24": "D7np6f8ZGNM2D8Rj5XpzeTKu12XBkUrj8gSBKqFAZ451yKiSSN7WR7Zickh36qrmJet2aTpEA7cpQk7u8x5VnCq",
  "key25": "4wmNE6stLLdTqha2vRxMUpptMn7shf2HELeksYRwdhYXLVXbm1n9EWucgmSdewRMeF9mufEtvqauzE2vqRXEfnTM",
  "key26": "3eivBqeJtWJ8CaiH62uzYbP6Zv2V6GRY7bewZLHgiWAxN7ULP3uxWoCEHZJEWhztB23sGLfyp4WVGTaGojTA6Ri2",
  "key27": "4zAfVwvnSHkSYCBNRLxY43PkQWMZEHAefQqTGsa2ZokECuR5C2W6T6JWKNUzs1ekbHYjMTusy2afLTz4TEKzcGt1",
  "key28": "2YPkhSacgEH6aCyp5oCkxU2YAtWw1G1ECouvc1LMyYhibUfhG3e6VMRRcH8B9N8usjiUCFbCT4tEwmLVZUsfAf9M",
  "key29": "4QHBNZXsbWVxsP8xD8mmzaCUfUiab7kKzmpjBLns9MZ8A3dZ8PQgCP6b78pozvi5wiUMimV8yBpXWyZM5RbNWthM",
  "key30": "4DkAa5zH4LR7UgvLxELbspFLQkN3F8u4HrGXPP9NCPCH5zRsdkEQesAKSnTSQpZD3JrBDrhsxQpmbrNv2KkAc6GA",
  "key31": "5CgKPreK8zPZ1arRexKkowNZrw61wW98d9WyWtBQyzQLdAK7QSGaFrrNiiv5K8NwNvyY7UgCqg6Y9NW9RuHoue4W",
  "key32": "eqnHKziFhW51gWTr54cdeJYPhzeh2jrEahhotY7dU5jZNZsBQBamFacaKDiDBLeiH2113aSW4bVTNCaKxu3o92R",
  "key33": "Cui3SBbPU2uxWgeyYdL1mw8cUTbx7MgiHn1uwhFxA3Ced5GpJoR6GennpGNWAjiWRsZExfCVvyU8Kj3uHoSdUay"
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
