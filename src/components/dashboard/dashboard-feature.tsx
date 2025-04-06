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
    "5Ggp1jTtyF24rr9LeJoPEucFyQ34AM81St4r2oaLsUPw1Cy32S1jEPv2StHVgRbNDXP6QHDe8eG2bSNUwfthes9a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H9sTNBrTMztDZmHKSYnbfQ9LRJEjBxsbMY3jpj3ytsSx7T8SPvvExETj3eGGCrp2tF5dYoYczyYq5KFN2EsWi8K",
  "key1": "4eRfpwkTUfn9oCzK8BWofKCugYJ5jN4qywFFi8U8y4PquBeuh75xSNbXhpCzDMDAgHkMGnWAUNUKaPu1t7ScmX5e",
  "key2": "krBmToKGzfbix5FdA4eq9miwtab8tvv1VkKN4mPzzpXsjDBNQuy3VrSUmrsV7DbvgobqP2UZC1WPNuWaRGrzADS",
  "key3": "2GYiLRtt2iET9m88nncwyqHSrCuC48LDrGXJJgTWRcVb56KK4eMVQxGw2BA6cyiRqwYsyvSbFgUy5QWJkMAQyx1q",
  "key4": "pS5SVne5HQ5S9a6FUpCBreBA8hb3JujZZDbA4UG1uZtvWmeYqkqxGZtMrpCbd92j1w5pcEaSbsktBo4JnAVcKsL",
  "key5": "4vCWQtPDuoSXZWHkFmnr2qbzELZVsWd5RZFAVBxsiVgu6AtoEhprcFx639G9Fd6n3ytmikfoY3mMLKTypyxFfFKL",
  "key6": "4nYUNBtXFT1GNRySDhCQ3tBRREe1kA9hNojTLioqn67vJYYp7RWz6paaAUkB18jKHd9ZnyFkZTuT6abg6W4bApxP",
  "key7": "38am6VLVTxzRR3rGCv8Sa4SoBYRyio1MwnRF9FXktVWEegNVDRsxXzViYUrRKPUFDDcCHD5o36o9Laei11DRMzB8",
  "key8": "5paqZGFmgJySVGXx2eYsyAdPMEJT9YYbZ69BdtEFp2rFzLbZbaVoQzEGoHttq1faFLDN6wjckjtrLsNjpKg68MVx",
  "key9": "4jaxBMi6wnceE7T7RhSJQfNnsJAZSaLxDU2VLBFZP3jDw961HoAuMcog3BGWhdJr81iY9j6YmfSb2Jn3uPq7AeVc",
  "key10": "25Sr8G2MxboAQQk71xWQvJR77NHtpdU88CLkdkUqzQiWv91TpsV1ocSpGHCCucu5kgo17C58SDf5LHDsSMmah5wy",
  "key11": "4JKtswiPg952Wc2DQNXkNm7mKC6ofvW4zHKCXb8KKE6sVw2i2FDdF9SBjGB4VNdCNnnNvC4FNRy56Psf494vwMox",
  "key12": "2rX7c6ihTZ2HRuQfiFL1QMSEE5xXtPPeU7LLniTdDYNED7PRtmKG5BoKgnMwFNLwrDFB8AfGwmxV33Ae6SK1Xxw4",
  "key13": "2BSUQ2T3bRUhw3u92muzuLaUw94vgykMhkrkjBngh5PM3PfXEVzZRsrxzHmvPCFZFVBKH6yd5ZebQf86FN5w6Urb",
  "key14": "2A76cGnhKVYkcpyfP8JGxEERWHk2XxHqBhgwEwWktn6QvyscPH9y4ebPXpAi2LdMupVXCKAEZBsJqRA8mXJ8C63u",
  "key15": "3Rkuoetpz6mUSvViqZQaQs3otq5xfM8ybhmamB4QSjrZyJXXciN6oHwcEuTQT81cwjGsg7B6jf62NKjN7GVYn1rA",
  "key16": "2EzpLMC2WG6FanDXHzYRzXNSzkgzE4tnzHiP2H4Ng9xPhAk2soo9Y1YJTPGMVPksgiN3Tk3zjwmcDQPLkNRoMGU7",
  "key17": "2SqkoSeDx4fnCrA77GiG3kh328ZxRFQJNKPjkZk7XjsQgkoqyMi3d1z7CE5fVDoo2stUf5TH9j8X3YPfJ9742cTD",
  "key18": "4VHzpougCEtRymp3rKY1VVsfGgQLpQzMtwsVdMP7xgvRVM4A5s6sfe2HBhZbjdwUkXhjNx2CU7a1fPyDvhvCqDCU",
  "key19": "3tR5GcWuWm2NXQZ9mShzNY5QRVQaiqKVZw321kKFt9DudDN874sY15vzFLtEGa6nwnATE2o5qSrmXkXLrWLqSpbp",
  "key20": "4vbsTDpCMTdPLMdX5PHumKnmpt6HjYEnWqQKU8PHBfFuKkWyi22oKkmyMQUHRFyo6Uzk2F7TDDQGFswmWgAqetJC",
  "key21": "5FmxreH2ZwraSusbf6j7RWWuU8syd6NyGYdWLFgZzeN1gLDgZeNSu7c3QfDHtWuSgzZirtCAdqVvUskkaETtK4pf",
  "key22": "66rdBmM2ajsWWEzcHhGVHxAhLRGfk7FQEWpBCpEq6ZkgkfpTgFTnSjn2mXfsAuPXZKNtpt5Lpu1sF3YZ4yzR9KWf",
  "key23": "5vbG8ktB4fajY4xtFaJiK61tKb2LWZYxYS4akQX7XBrvDtW6WmH2UK29tkvSYwrtPhcyrz2FGqiG8Gm1JPE5gAPh",
  "key24": "5zbM5CXEeg77cVGR6CXwrEMDiWqcP3EhT7JHcfXBm8MX3iiAwHqSW1iQC4zgYRrTqTN2WA9Bzcww8khYEZRhZx3T",
  "key25": "wpMHDv7NhZMQP7Tz8ZtXe1dNxsqtrWSDyrs35rV3PQ9Rw6d9WnM5XEhM8QQA8x225S3vUfkGaBDdgTznpt1kS8t",
  "key26": "GUDxemENCF5Z8pbh2ow6ydiVx6YDdp6jUP3kPh96W4q1b5k9FSLcBdLwVEmyzyyiRfFwkmdohkyAnwPDE7Lprmc",
  "key27": "3kxFzcFHhPEebXmogi7EbkG4Zac9xfpqQkR1qofAb9t2FpNPPdcimbwX8r7asZmHmw3tmMwty9DoJDR2nKN5Fbgf",
  "key28": "2nR2SYKwuXDRauoUcijmQi61of18eWKkPuxDaUBR8AdUHvWMRK5YaxsnNMVpqRx2zricYqJ3dqCMM96mchVkRFVN",
  "key29": "3h2HwEcZJzhpfW8t4SQfsxyg6Pfi8jMyyBc3JoJiDd5rvF86U1hSR5otbzSxzjKkB1MbNWKXEgzB7QjUbnXhq7ND",
  "key30": "2vZ7WruT7AHiRvHN9au7LjpyRSPYpVVansV4cuz6QXhLfP3jHQPruepF7mNuRzFvtx8hTXqq3j6g8vVUByKWpgep"
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
