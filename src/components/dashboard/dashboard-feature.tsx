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
    "51tbCZNMopRcvnRYq1NrPnwZRk9TLDQE8MFDv3W9tXgsfuzHwMpkLFhQhJq1uRSjGHjJ4QAr2yrs2mK2tArzQU4F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7PhPiLq1zQ15VDQ5ih2suHEecMenwFpLZAYoQXKMHVDSmpFLZoXedF66K6Ss5WbsBp7rUz2Vex8Jy6AF8qs4Jvz",
  "key1": "TbMrQmp84QXcH5fb46A619CiryJZPNa2MAZLQp4zb8ggQEra8bjjd7Myqidsc1Y9EZSTNizzFBzZod4UadBo69V",
  "key2": "4YuDqXYHqmMPnku6ggvbgWvy9uiKcF3xR5XqiDFY8XvAZ4aTUpd61wrLEkicsQxpnTX7EHESF8WfZq6yGKTXdp6j",
  "key3": "2asiWbePuzuC35wZJ71TTf8LG11EbJor5vK66YVMa51i35GvJAJ8VDzcuThQPRMiucLVT1kpc2sp8BMtUpkyohEt",
  "key4": "L9XnhiVsgavUtZUuiCuy8Aif6dfvbkyu7CLN4KEzEEZ4nBix9T5Uqf4eATCcsvHMCxm6AtagD39fdVjZ79MY5VZ",
  "key5": "4iyNt6NGRX2hzN6d2AzPC4zz5Roga1Vv4Qjw5uTjvbSmuQ154NKQZtRXCFAEuPfT81hob1q3ENmKtR4ySquBFiUR",
  "key6": "PFuqALvSqb5nv7EXJTVBFWZbM7HzSKDBrEWCot1LdyigKWtYX6UvRAeCp4FxzU5gdwid2PX84XinRHSkCMLUKiP",
  "key7": "NW3Cq6w2EY9aQmcBy2paQ686Qic9cGCSBCjGSWEwhsUTmSc6AkFP5LT8FBeruBNv2fJ34dde9TWuv6qtHztX86z",
  "key8": "2gowUkCjjMrwbBV2eEE47jX1qg5Yz9fQgukS6DPakGMxycEiUggBHxS6iHwpf4stRvMFTE3oizaiXi3TJMzC7nSm",
  "key9": "41VnxFUwvhQhfUKfNdzWYCwEzkvsaqmFepbLwywT7TH6PsZWwcCNJ4FYiwozwSfrnFRhL6R9BcsVB3WmNgueg7bz",
  "key10": "31ktkKvTkpRgheV381wjgwE9YxwX2WSNAReW1ghH4NJ4Mws3mfkF8VK3cg4xVB3Xz3FLZDGn3FWj5WF1jZDi4uJG",
  "key11": "5MH48VK6km77pCZNADwTcUArVsv3VMYp3LZ91q53cAAfsnudsXnePQihj4EjuVxFQLZZb4A4CEq9i2d7zNng5uX2",
  "key12": "4cxyTGnUWbw3DcbwK1KBMJU7ZsV4eRj2pC68kM9bZXqZkG7yZnLCnAwTdijWn2eevkHKeSYBBnvoMmdSEPpV9oNM",
  "key13": "5cDu5FYBzigxartnEAfMYHMNfNfWK663qHdZPJvjmVimsWqCFec9FLxGFi1r169aMNDePXp7LQgo4zguTcXFrTN4",
  "key14": "4BfjPCXojKXrrj61P7ywsYFrHDeXywZtkVPwcDgeXCLXyzMK9zCvsaWKpxCpE8jzUo8gNHLCcYZ5FciijnQYSMTW",
  "key15": "5B19qS3fEKZFgv1r3NT3gTtKMrcwspeYyZywFuURzRQQYoanQRGimvfFngpBY1Gg2jAZeevsaYnUjDvNKrZxaA9S",
  "key16": "5exhwi2feMJDpGBaaEHkPcNAfHodCewZKu73yy3vB7MMgmARsmbb3XYAD5PQ3rqGc7dY935WKmASTgB719ZJG7Xh",
  "key17": "2HZXkN5CKnKkkPMu8eaAComWwhVM4yz9iHKsWZA3nMhP9Yqdr43Y13BFB1pcYPC1weud6d6ZwpyAoYqyLFHJAEDw",
  "key18": "3x6iUMdjFoKd5ouSEghEisRX1ANtm4AwHH15DbTQNPaypGvbWDkd4JWZKt69hd7XdRq2Er63EbnSe2ZFoqbSJW2r",
  "key19": "2U2GNA96BQKSJbGUcgmFXTSrrHenSjN9oAcrAvBkWEqammCH5eLyHEpTy1PMtb6Biggoe6MnL7iTWRWCEtVUBBiD",
  "key20": "5xksphBiwvRFE7wpp4Z83zXvq1su5TyWoSWhKdYUVYwptBH9u4AYy5CUxUJXEyWybxygT4bJoAdC9szPL3x8mz9G",
  "key21": "3kbg522iZtkZcRa4iJhZjx5VyAbu33TSgQM5mAQbunPE1fLqoBTETeS118drRbYBnYostSfbujq1yKyKCWEWffN5",
  "key22": "hdzNUoh9kGA6SNyXWCrzkrM8WRMZv1KhHWFBzSyBDTMA9NawNiJN87htsBJTCpYubXVBkVRaGZ98Minrw7K8asB",
  "key23": "4ipLqjUw8Lh6kz1D9BjzKt8XzVWAqwhV9CxeGCDn1AG6CuLnUSqep9USVyXRazgLH1yR3QnodPAsgUZvsK41tceX",
  "key24": "4QHDF4dCMdXqh4WMH5BK8QeyDQZ8HMj5ujD16AEhpidNBP3MHRvXzk3acWGPW5U8ZNUhJMDTpZvuempMqvnhXfu3",
  "key25": "2d9af6yKr4i3EaFko3Nsm1DM6uTz1iws9hU4uGMTQm5N9o2Bh192fvqGVAXpaRK2TKWSfpduoexQDUkkRPMSyuty",
  "key26": "mvryqfLahhywUh7oB3Uw4kvEQca3ZGrr59YcvCocGgjXwbiKVUvVvQSV2sjjvjBczgp2ko8x8pyEY9uVYnXhynY"
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
