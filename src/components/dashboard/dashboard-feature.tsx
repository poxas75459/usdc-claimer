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
    "5cgV17rEjn1S6Ta5F5yMk83UAP6BHsFJQ7M6xD1ZdLr3tG8N28RcLiTezKNzeLbGiYUuqQTACZnCGPSUDRmZo6yq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xjDgpwpndUgsd16WgZLcBKTomzWGJGnacj9HkoMbm4dGzYb1RgRgXTZ8gVmSSjNqfLRGvq9sacQDFuzPNHv4xiP",
  "key1": "5ZJNjSLgE1aUNSCNs9Dx37dwcQc5y4WiMPwstaFwr4QSbqZKg3sycZzDDW9eCJLjZkE48A5j2QnGgmg9D3U1Sj4F",
  "key2": "4wujmeUTH6PKhas6q9Snw8GQUnm6KEpQCagAs2VbJFZ75ak245WFP32qjjgoeULo31dUGAZN5KmncnjX7GjFA54S",
  "key3": "2LUFwGbZaofNeL5Xou9LYn31hziBbrC1TMugdCpX66B3Tmki3jA3EdB5fm9EqDHrq1FVf2oUci57cC7VfjoZXGCD",
  "key4": "52fo7pi2FR3g2yCS8TJ5pvCzpyZUZ1SzHD5Aw3M7dCYQWMQgwXG9acKGJyxZF3Dg6YBMejErppF4oGxssV9otcqv",
  "key5": "2HYoNXqGjVYjjPSRXZ6HzPW3wjbsfncCpuxfRCfWXhe1y9iDzZ8VX1de69JbAP6iwSMBQGnfMwpYUXBFCArYyP6L",
  "key6": "2P8gcQSUKJtBu5ab9Tw52dYnSumYfNVmB4dqFucndMPziiSvgKxjgtMKXabhop8uWbPLCKPSXVVXzT9T8am3mvWu",
  "key7": "YcMAhFB8aX8SvQPLDae8jRYGKn7ABnTkXNMJ98fMeH52gLqkXNMSaP3rXPxeXUrhPwBRjd5WvjK8dEmUiHbGfjv",
  "key8": "aAji62kmqZ1yM9zE2PHgbT1ZmZE52ND81fxgwoeVipG9vDF823TWaT6TjrzbD4HVZ61RfefrMTiZu8bnvpbMyju",
  "key9": "2sKHPf4nJxcueZ8aDkJ9BEXeZrkbgQda8KSv2Wx13rmiYxbVoBi9DBrsiKuRdkKcRfgPaRVQuvkiX831NhSHVWrK",
  "key10": "4x6i6cc1ZS7Xx9Mv8Js762VjyJdi2gMdZTBx8DEtqpVcb5rUUvyXMnoXtoT63BCcFYfJK8KBbmGNyhjAgUCqJNyi",
  "key11": "4k5K689z46a8ELnBmX9qz2Hb899MzgsTyzEj3WtrSRDY78P1pyojc7YhXmNCkrzwhQhf2FaXeEYEHLxMkEJ3Rf3a",
  "key12": "2cXaL5FXCJtVafwnwZ4ZLNteZY7mwC3Zs6JG4rWNwFDhwVb7tLk4JqkJA9VVaZPB2mcihRkjJUKEYZDPjU1qSKDT",
  "key13": "4dS5Gi6HHqxg4EuzvUF5avBGMUTpwKrVXvLdXDNMnKAkx2xZRWNJ8XqEsqU7XDumvrG9BbKt7SoaMSKq1Vmmkvh6",
  "key14": "676xYtHhAtfZv1cG9W14b2WhdrfqygFNvnzVnCjWJBnSfATk1UbADTRNL9dLTgw1tBUKvbjFfnE9x9KV1u9jKVVk",
  "key15": "38vFcTkFMcZr3vs5HP7pN9J2wVfC1MBrqazyuETSQWU3ZdLSrHPqxM7WLbMkXVs6wx4nZ3Ye6RMnW5iUFHFdTBWM",
  "key16": "WSqcYFN3kGB18P2BdzMfytFsy2RzF4SyeRtCGDtg3EFhhxxiKdLUAKwFurs8MLfavw6mTsmgnaZPqoh5boJ7udD",
  "key17": "gPY8iBPZScXXBtahfEL6LGHapzsGd1aHKLRsaVxmf23W6JDbRiFZxjuVYpTJU3Lp6viWNPRruyhbpDiu9r9h1vM",
  "key18": "3YM12o1qJxDESEbG9N1c1wphjM4Dh8W28m9FTc3shJR9E5ZXUjVg65WzHNKDWRfX8cW9F2gHF4GKAvLK9ietCWa3",
  "key19": "4B3j2VrdGrz5Vh43dhBVCTXeuf1LoJLXiPkNP3Jq49vaY3zTvpb8M1s7ULtArRYJkXHP12iPxLwFutZNWCvjiS34",
  "key20": "42KnpQ8A96wTySrr9J7AzP9RphtiNSncCF1HrEdrprFnixSRoBPiRqy52MhYArHfbZ2j4HPw171h8NqEqybBt8H5",
  "key21": "4332SfVteyd4NtDqixwEQXgcHeVx5ob73GP5vndpeZU3jEunpgMweJEjjM8eh63Ar3ZiiNVUAeXfDYSxZvXRdK56",
  "key22": "5D7BH6qE4GS4cop2UxpzBZnS1Ng43D23WKRJmnsiG2URjZCznMQoPu9orgUNvMwFiZfeYmwQRrv9sZTL4bRpUzhG",
  "key23": "2VABYWSvJHvDJERW8BLrV7ynpF8cDoZDQoy8wKAK77cXMqe5341ARGSmt1XahFpGP4HHGpYtfphTogdzjadKk8mh",
  "key24": "4GeST1NF1Amdpo2XRbuKcpTwovdDLxG3788KfyPM9Jxee11XSJ3Gto4SPDMqw8tq9tGz61QDNtbUNJksUMRdVhjQ",
  "key25": "5Mmgd4mKRLfjU7Sg2gscjRtxccdorBydJNQNiw9D74NvDYeMNaUASpJ8USrdJGyMppTVZK9QApnFvqN64bAMERMY",
  "key26": "2TBJwAAuXKNxEpjGY9hfXEELaurUCYAw2Mt7cGEQY1poCLdSR6Jek6kALSBT2NFFgmht2cuJkzQPYetdBUNSbTFg",
  "key27": "JEFnSeGKVqqh5bQiYgz7CVtsPSGCDUMhKkaWNnSAPNuzRNTr2T7zVHmZaAfkjS1iax8wgsrf4tzbh6X5rwN4FJG",
  "key28": "2Jj6vNC8GCDFbwKSi97YDsTaGF4BYf84ebshznSjZTPc9mdmLffsGYBTXMaUgiHJDuB98v14KqLg6Si6KNWC6E2U",
  "key29": "2Agb59PPMTvX5211wMqCkZXMreQXCHx4k9CbKz5gyUDchg6qutXPYr6JAYxibxSqqFg1XjioqJ8M3QUd9nbBcTtg",
  "key30": "5s3GahcCz1JKabSAWm3vWek2zSKyW4SAqyNbBtMqHaNLmQ2eYVRrnTUdGCk1RZ4KYu8B1jZWqc737Y1H3MuZnuae",
  "key31": "3xZ1MFPyvVBdvbdveAgWxg6FJUeRu6CL9MXFiKmzDMMLwbU62NvtzYoUWTp9E5TUWVRbWxq8xU1v6fUmm4PR5XxS",
  "key32": "5HS3cJunMAy6rWQZXtLA9TzS4FYJ5ECNdRKu5yLtxoM4ri6zRTrK2p25erTAURziAHUs4o7qhk8KsRmRpvSwc9dB",
  "key33": "5uJiTP5P8Dwu9BSGRBqUBHKhnWFEmiC5aRAsRoVG4by9nyLmT4gowMys6FtnaYvbe4PVFZEP8PAhZwiyg1uF6r8y",
  "key34": "N6oPxeBzS6uCU4e6NCjN21zsrQQq4qbFuyN4DRTLzaCXBsj2wFmZtnhtBVT3q2hdTwzhPDuZBLkcvLLjgi18uNb",
  "key35": "3NoZFiM5ggqeNVM2tkbDB61hEY2oC9tbcXB4Ew2mhMGs1RXhUSFYQ3gDYdZuAYCSojrLKtqDbAsdzkeibvqHZWLA",
  "key36": "4BaCv8Z7TxRkJB67JiV97jXkC5XBB8E6JtAAjvpc8UcQuYUVgvTNkfdyGS2NLNj3zx8jzS9jjeqSjhm71zYtSYNv"
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
