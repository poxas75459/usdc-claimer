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
    "2YLYzAgBvbp81A1v6Fwrq94FjuqPeXhXV3BbhViLNAAB6GBsdL5zMiGsCk4hd9EU3yRySUKRmrdZW7zTdmhKDQBy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51tDzSHh4wPfLPqQxMdpFKo3d3kYLVw5YPvciKPgoAG6fhnDcedDbnh2L2QTYNDaPUPZMrXweJiSQt9UrNvJh8q6",
  "key1": "2GiXVht9JuT3py9vB7Ntv1UVV4S2hm5rZsvZgrXpgrqPMDiyb6Z3FUHMPZgZHp3HKCPePRwVqaR39eNJJyfQZzAd",
  "key2": "2DdvTsqNWxcgVpXjyvcgtWVU22jtNgZnAyg9818So3okr2k1ns11dwjkzbgcj5q7TFtCRpVNmpmVg7KPceAruShv",
  "key3": "4356jCg4iikYvWhVJxUzJGR9FzifZ2kQmMd94yG7moctwXyvYRWEAsTni5btWqiho4jpyeWm4JbprRbLZMKpWPnb",
  "key4": "644xatPWE2WrCCX2KT3jqfN2dyLQ91iKpDBUK59VUxTArEihZBtVjdA6PKSJvssKZmeuZafghZZaikRaD91S3kKy",
  "key5": "5wGPeyXqXVzsnceNAZGUPQoJiubavJrnFRkj7to67gHUriaz3mF43C9VNjE4vAaCuZopkfzyxidNsZymQsZCei2u",
  "key6": "h54BUjQKqQCgkXw1U8JnAAx6p8rPwTwrirHugwnBjACsGDqp6W5arYSYJVEKSuvRrMhwTC3RMsK2Mi3vd5ZkavX",
  "key7": "4M3ykE2PFfLVuoJ79aPjfwME1TJvTn1iCCG5qoH4FvuMwrcbAcsGPcCz97HR4S6ZNoYBhmTNs4cDJkBG1syT9KVD",
  "key8": "24qQQnUkV2ANbi1YdmhqsA8CVPqPDQU4VEBVfW8ok3yccVG1r3FSifzhMnxqGsmRfoeCHPSqc5i4GNgmQzvnwET1",
  "key9": "5wtdAcPVYAphCoxUeCNDxQhb3Jkm4wXExqc4APAt2mPRPqn7ve6XuXfdfM9hJjYKEy7kjqEMx3QFNqXP68nLipuH",
  "key10": "SmAdsNU8Qm8Ma7pJ2uNGG24GsrhxkhZnKW4sMvgwjtNf1GxVvtcEZ4n8rh9aFb5cFX7fMiHix2Ry7BQS5M5TLaw",
  "key11": "2CvWjmgeme7e5e8ovvM68usUeQSUkmDw6ewUnxQgPboQF2goow9BqWoJw3AkJ2mGpZDDjQhnAND3VACG681u2epN",
  "key12": "4f8tGHCfeQERcTECEothxzKLnvNRqnEyupvVygmUyR6JiGqnyHq4omiKuiQSotw7fLHj6MysAC6LY8QiC2CPgBmz",
  "key13": "2Sd1ZmcdxEjZp9ZAvpjuCvzmKwMwhc2muaA157MsibQG2dLv2E8nvJtAJNaUW9TkmxD1xoNygrzvEqwUphxKExnk",
  "key14": "2BTXPi9hL4c9E73JhZB5g6VjYtpye76th7MApCVUyVz4sKsUEtuHbnZ1MTn4YCnYcqfzRxRMbWwJjQK7PuzJTG8G",
  "key15": "49DoYBZTRbHb9VstvWjDYcv19nbtUkDR1DiFaHkmUfJC4NybTRqhqLpyW7eKrYN5bskGvGi1Lkiw5n75wL31so6E",
  "key16": "2A2Qk1Sd885kMxgnpbXibTmbocGVy2hy8k1dGVNAHVqa7j62q4VoeeXntqaL22uLPzAYCfuiCn45S4KhVgtArC6d",
  "key17": "2AzEw3qy6XTsSWa7wnjuXqL9QeumMgQz9vzRjLkwB64XeQXVW6LwNhkTygHyiiKg1CcfTXz7YrNrrRtWVBU8BCs8",
  "key18": "5SMP9idJVEUm32igeQE8YVXren9Hx11Y6Fjvt4Pvho3HioMgphmWKXM1WwnT848kr7Ud8rsw5rFRBH3BxThgM7Bm",
  "key19": "3iBs4JRdA3K4ZkQER1u2S3Sfo4f4FnY83xQSvvMRR751ER9nf1YB4mZ4uHtvDM1BpSYCCmJE5v4pcTDwmuJ8Sz2H",
  "key20": "2LgNwp86PH52DDjuhz69GJTVMdyNh1nxrUDcZTE3Qth8UdJ2uGmmmBhesEgjLhhGwPcceaGA2NYX7iCL6Cdzeu6f",
  "key21": "59A9GaL5cQ94SYEkHtDpDcxJscwNtFSkSM3LX7uqtmAmh8oX3TvFgbLeYHKp2LDk62TmpWZuhNBrhWsWbRzV2yv3",
  "key22": "3EhBGvwLj82n3Rn7HtxqzkXhgRZzs5JFRzwc8bex3a8y2kFipBZCRHDtsFawtnkqfURsAXZX633gmBinnzaYNrgn",
  "key23": "488sDFfUzfTqb3tvi9n8Ph1h73cEVEehEsCqULaGgnzXMJyreg4TFdeA1zm9jnq2PfprmGtRSM88f3hbBUZZrRzW",
  "key24": "2yX1S5rUTRnmcpYAM2DqeLuajHAEwmXXupwb4ELF85tne8Z6epkZBJPjYKNMFCz1cFh31MdWJouCtJ3oHCJLJvDT",
  "key25": "23L5bK2NugJftzqrXpZwt5UGNvP54UTzEWpLBp1h3A5n5ZffvUvJrKn5GfW49EXwAxnVHsxkYzrvcBxbjDFfQCtn",
  "key26": "PNx8Z2FydxUk7EKhGs7BJhgG3oAHt96CDPqLh8Q41JT1izdtWGzUo6GZdJeEwWBWYnyRSkJVyHw9TYHcmc8gcrr",
  "key27": "5kqCRtnR6ZNDJRY8vcsT7JNFaThdSjmvuFAgtedXxMFh5fgKje2LpXzMHWDBxvtMXd7QpuU1eu2akZ2NDx37Tjjo",
  "key28": "2u1jX5PFQS8vwbgki7KezkguXgyycujFmyBdQDRbv59tsm7qFmSQ8V1YaG5iQxE3AbNZsqq9qQSaSwrYe2egogF9",
  "key29": "JLoh3cK6HhvWxgKoa3JPRAMhT3QrJN5fRoN3bX25oZbfiFCdXAetQSDPHmSK6aENnHrWBHAEChLLdStz2pqBssi",
  "key30": "PpJRUi2mP2igeWg2FwAq9ZSjg4VK5Btr6smyWe5S3zs6Uc5GemarFvwTkMTWBn4eNx98PYr8ZuMQACPFBxPNbDc",
  "key31": "4yzRpPHhc4W7cCuvqfb5zJDx84WqSD2xhvB9n8QS1afWszcVmoWio7S1ZcCjgZPddipLubwAZuRj61Q3P1UqVxDn",
  "key32": "5odDGrEjZiprPPf7oNiPgQfKjsr9cNNDkvt7C7cBRLXKegK8ejvqBYip2HYG67eeVDuJejdk8cmYQJcGddKn3s7g",
  "key33": "66r6tTp73ieAodMsv8KxJLcnPm1AWW2HDgfuNtCJ1JRqzuu75m5x8G1g3LqNBu3VZxyCjrJVri5vobo2APDdhBkC",
  "key34": "4Tm2ydnk4LHUxu4FF5krE33uWdoAVpvLUZ6nfAcn4cypdGcJFhyF7YzQx9TmMTfHWgupxy87EecxMhjaUhVs4aE4",
  "key35": "4AzcGveV5GV89NbqSEL4B6WchfmKtPyfVtFhYMey8eax8eyy6Cu8amYmHfGKYNzSNpLynK87EG4mNESvTQvLDjGX",
  "key36": "3iVFSHXRfMjTd8CNP6VbEL4chQ5EqFW8T9hSRnUBpDT1gi39vYVHp2ztUH81fezyDwuJewW33nGMy3fUuc41E5L9",
  "key37": "3YUNepJ3muDcGGCmBvZEzf117j7KSgyNzLKvHxrtca2NALZN7j6xiF7kRyYysQrXBvSW9fWvqL47kYoSet13k9iW",
  "key38": "2CTnVcP21jMfc5E75T8g9b9QyPDbdt66SEiic2Nb4KhyYWhyJXcJGFkUSta9RW1EiinuxUe2NJnwu4o9vUmw5jB5",
  "key39": "3J6B4reXaP3RCV5MKc5Eby6Ahd16oHhN5zdupRyDdypfKVFCxFwc5Hy2erRkHTxnvhRrxsM3JFriXmQyqP3wUHUU",
  "key40": "3v1oozm2ziTrKpNwE1HEFNy1WKNxTX8DAaubHWS8gkUDqiMr2ZHwupFDRkUBC5efqCtBVADDxcho7Qkpqv8uaqLZ",
  "key41": "5jW4jd9hyVjaX5nwL7a47kGN9gozYsuUnN2LMPJKGS47TRopbGmYdMgUKCCKnTuZfbBKgqmxTLSmRCfScqxrhaZg"
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
