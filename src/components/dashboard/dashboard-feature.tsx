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
    "34wr8f96y7kVnVZzJg3QRArUefAEf7LuJEmfe2YJEpMtNymbifjNCpVsGCF247rwVvdaLvbV3XydCGpR5biq7Mq6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qHxnDvaM43URZAUSuPz6rxgm4S2JRfU3J5iv1kJmibUwkp4smNWJDqfafVrrktqHZDNyKVcXa66S2gw4pLQz7vz",
  "key1": "4DbPTbnbiVe2U64uqCcLcnKMpUTkZRsdfEZPX6KbbC1DXrP2NBfJ3VQegFEFDg4s4wgm469baxgsGrBeLXHMiGKg",
  "key2": "oRvidBbxTuMgy5p6XvcaeKt4XCycktaso47Eaz5ts45JYk84yKNGqSz4iZH6McZZCgS2Kh1w2uk9ehptTLivWbu",
  "key3": "55YgodQwi1hqhMdAbDtejhvbX9NPLKmPjnvWUkGdkSvh8B6mwQFwwmVqUjiFh1LTrf8bzetPudChvyeDM7VGSgG3",
  "key4": "5h72kVQGkHEvCbAD3gKHzvSHNcHHTtoHBnqqhytSSwzMYYEMFA7NSMbsNj8uPtkMPBELYb9X7nzJyTrfTrefq8R3",
  "key5": "5w79MG4rfFwYtB1FvS2oiae8gCW1EWyFpyM1Mwww6eqmMeECTajxXTSJNG65XnhvT13kBCYNXZ6oXQbTRQDYkvvX",
  "key6": "5AjiMcQNoMvcZzAR4Z1wwXuwfgmfB2wqBRJMXC4hWVuv97cjuGbjmLJ9EBAtWmmMAFmmJWfMuZBoyWG4DTqFti7S",
  "key7": "52UceXg9piNVti61nFXkzPN3GBeK5Q7TgrATMV9xFBPbwxRF4Dfh9obWYw2ZWqsqjEt8XGavb7qVkUvLzoLtnU2H",
  "key8": "QUXxpC78hmmqqmf6e565a9tRCFb8WbSEEkwbG7iJZRAUPfm9zgWE8mmvaLNPJk8q1RRyVJ416E5MutZKnQaw2jY",
  "key9": "1jR7y5syF8MeuMjE5SYng6fuUA9SXqm2bA9cvMB2WQwsWodLiBJJp3UkRuw6RKa9PgNS7cy2FkrmoJeDMXfhvxD",
  "key10": "2kvQaWdRBhAjgW29RGFUiv3RnFvGXneQnEzj9WCwKvsyWicYNaKj7sHVpFTTuwY8unvBpvYdRxaZNzswhzpmZHja",
  "key11": "4tHHZEHJG8zdVqeQCPFRGkGQ1KYumPqJZgwweb1pzwwMUCPv9DbcTj99Yx2AbwJqGsePtqpVCwBSP9EoENDnjhBR",
  "key12": "5PtvrRnkcVHdUqfLk8h7h9fX7BJrLCp7pKBkfdzqHdTJ6kMHGUoe9ePWs5A7PJxJpUKNjB88L96vQxGm5jPCPMMQ",
  "key13": "54V7PjCmJeKG9wC1tBBsLfBEtRmTYSveRNwhxTkeKrwPQAAP1vszvPT5AfU83o1FtTUsyZ69e8WLKCnZPXJApmxW",
  "key14": "3ARr7iTnWuhyZWgoRnsQeECc1TTFGN672Z4o4GJXaPPgM6VM1cuGWuKReTpiBXGx8y7Edn3QnBwfzyj5AdYgcUhH",
  "key15": "49WoEhgYWAAAeygnRANDoYZM37L7dLfGBGhktrMtNEeo8n4vz6RWvi4XqN7i7m8UgGobfjCHoDLUQRyNwR3Uwxhy",
  "key16": "b5DxCLeHLs1wmF68XL4vyd3csAirSp3KdwjcWCWKNHZzJmLCR2y3ZiNMTVYAX4T8tW1WB1SULGevLzQiGMBJ62o",
  "key17": "2ZHazvfMSH1jKNPvbbn4PqCiVchjwf417L6CgCfDs7L5oH5ZPG2JSKegytn9vZVUtH6SGNkuvRHwNTkjY6WWFLrT",
  "key18": "3qvrbEkYFLDnNuC5sNQSh3CPFyhJSgUAM2MdgUgGtBxbvfh2dATUGYAaQG137GjVm1PtAKtAHcy2bNzntgMcqQEo",
  "key19": "5pteGuqzk4VxW5mfBqKMZZghvD3auuQ2aSpmXqVY84SrRkMhvCt8mwHjnycCenRbqddGqydCjrSMNPsdmqA1ZWqx",
  "key20": "5Nrs1CUje3pnQMWPDWh3yzpgMGWhfj1LsVSvGHqmRoRigckkf9Ae48yzXyatApHtjCmQJqe7Wv1HQ2WifEPyoRPM",
  "key21": "ipTQWFMiJcLoyk1472nmirJNBw52RzRqTfRKz5FTiDdbPt3YeoybWgqLacRGj9rJpND6CpLkcC6v8htR1GKHsmg",
  "key22": "fwBGrPGqqBWyJqUCAQ9D41FfdQEa9pQ7WgtenkxsfmL6drySBe2hCAR8jzAhbRFccCVPRqv3VhWPPLaYJyDyZU3",
  "key23": "8iVh3UVkaDo3dTW32foPg4nzC3iBpvoJomSAskjX8QJovVGPN6LE8w24D5zgnEtUCyovkd9t3YFTK79VAze2SQC",
  "key24": "2xeFBrUbKD2Z6UNXcfSHiutRve2Mkmr3UrmHF3Jt7cTUaB5g4vo3XjPzp4uE5WB5WggG9gN2jVg8wT2FPzGBzfdc",
  "key25": "2poCtHeo5PL7VDMqZh5oHTjACyHzLa5djAxaXsJ1WQZVHD7Yytb5V8iCY6dUhW8MqngG6SMZsynmXaq6hY2tqNbe",
  "key26": "4c8Qb2BsBNdgMqc3WpanBbFjFHijTpuPXvJRyqhG1REToFdQn4tz378jweQgKRU9o45uwiNi1h2czYR73Xe8koJA",
  "key27": "5e2VYPRZ5yECV8V4kKSeFcVPBqRx7m8AC8YWPwCMcgUpGFvSm27nJA19ejT4UCCx7DhceR2eBuRh7hNJxkBGxdKr",
  "key28": "WbS2j4FScYr5Gjh4T5yhcm1iqEWzrzk5eUtoeH2mzc2wiPkffP12aJUJi4PxCTyVJmzQbBtKE6tDkKwkNHitCnr",
  "key29": "2k49ghxyEfBHjgvhUGyZ56bZ17wrg3UvpyWVQAbcLSHgHZ6ac7F6iGAwyEf9KVeBNkCKai64AbL4CQpz7Moms6g8",
  "key30": "4BXGmFUCuyfjAnmzjHf5yKedvwfpr3xjhYBjifkJMaUWXyYwgAV3ZhpAjLdrntz1vJ9TTVFHJPBK58AK6QtBt3UY",
  "key31": "4vNDjYjYotJZe3a4o7eM5g6cyj4GgtM7pjkBGa2GGDvgBxLdounnhjooLAUp5RfG54ZaMTcoWPaNs8BapDMUYV2a",
  "key32": "2BrsbRgdqVuxN4w8oFfDqjC23VANteuVj17VPCo8RRZgD5H4KjFYtSCynKj69mmzgeqbNrL5TBc5Uw9EudxP4Hqh",
  "key33": "2jETc3jfPNka4fdvBXsn1WdQbbe5VHNMWqKAAeZZGu4AL7spPHfCXmjoFZ5WqPq5qf9NRJkLkGFMWDxZoxPPNmZu",
  "key34": "44PJm4CjWkEh7rHBYrfgCHLqcMbkxTVhQPf9Eueu8fdvVcd2wuz3UfUx67ihriJCDPR3rJNhusrLtiZhFkrr4Wj7",
  "key35": "4kTDemQviYEUxMYcmNFtoJzMyKhfBcE1aSXb95ESHmYidY3UGzPUvS68EfpnF7tGy4bh1t6AzSWvXydvEVdveX5Z",
  "key36": "2U95m34Uhkfai5Hb4DBnC675DcoiEnwtY8Z7GziivMRveaZTWcz4aX72HmQKvchpV1iFP98oqEfCDnwqGBgx3uoa",
  "key37": "66TAFs4w8nUPVVgAmmSRctDTaqELqXRkTM6TJn8JUjBZEPc99hDBmDi7ExvCeYofBxPmYSSy2KykrK7Jwv7huyyq",
  "key38": "2gxQMunMyRR2BjNTZjU4vvRSw9eo8CvTAunoJQ4Fj78D6NhEfQ7jYneXJ9Ncup85jqZxtZgAFPq1Je7pjCx17u4y"
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
