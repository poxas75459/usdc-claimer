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
    "3ZzEwdyvxCskfy8RYwYGtzC1RP2uUM75vhfUzu4euBW57nHP7Nr4PFaGaXvMiDAdxxkoNtaUz2N7fNsEuYcL9SK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63ZafGPyqV1785FXW5z6PWJ8QKj5Qy8MCQv171WSsHPQf3aheApE7YabwRdPVZzznSC8v1UwUaMWAgMCiAHXXxmg",
  "key1": "35K5Q1T6tdoJVcmkFDTCucWZVQi4uPZMcKEBoFogJZ7n3KjPaK1R4o42yF6UPKS1wQLpRE75uGHT7KizWwf82x9D",
  "key2": "aYg6eedLZyeixEmeu1LtESRidDGzZMu2cf4q9GXYQbYfsxJLaSoL7iTuV6RFvWKayL7Gu7uBndPT4UiWH53DhTv",
  "key3": "2uqMV9RdRGFwBpi5PyYJiJZsC6peKFsrR8piwFamyiJpVMfXXgfBCRQoeuaa8cfLdyvctTHf3vLKmtWTUT6YqBbC",
  "key4": "4LyqMpgACcf23aBwqSLfjP4VCUQFk8xiwxGyGWomLu4cYTBFyBdyboTJAYb1ZmycUa3XjnQMMNdbriy9cY9XmuHm",
  "key5": "2cpynh4gepT1AaUPdMPDADqWxGwZvw7wCXmXLkhDUWGDy2NUrY82pZwRPapdcNp98SSVhZKKi2KXiCs1JuH7Tygq",
  "key6": "61VCEErCkb8igvzeLpTqGsyHH4DKWevHe9d7mVdASYJTbQKqLFFwLgzwz3sgjWBYF7MbwoRtq51r4tBXH2AJuiyG",
  "key7": "hoySHu2xwy9iHmU3GYKVdQNUb47ukkT1bsNYM63Y6mBetLrx8htpBuWNL3qx7qnkHbprqZRH5Y3NmktHTCGd5oe",
  "key8": "3aexaqpx64CyjC5JMQNcnxeXzCdLAwZzuCeUrhzsRTEjr1eoVPhBj4ZK6CmrPAeWYMP36cC2bKiLk8ptWbQMecv6",
  "key9": "8BN4BhWuHPLaJtCTjVPM9uP7pEgarny2mSYeVaRR1CYFGVE4jQRRYKGBuUh9VU3gLYuHEqMKpAFXfXtrCibzFye",
  "key10": "Fjhh3LfKDXWCHkqxyb8xsoJrzn8gUUYvGQpda4SpbMQqXFTEDKLrfuorFEnwwKnz7fHaUXAm5yP4NJdcRwh3XTk",
  "key11": "4voELu3NqsoaTQgAfqykZfxZaSpDXDPV4LRwr2UuwSENxEoRcSwMxua9G7d6fxBM5k3LkTpN48T3xTQLuUGkjq6G",
  "key12": "2wJnXKVe1tsHLXbWrn5e25JtB7U91pCiLKbDbUSwJCUfmPf96SWpNEpMrAwZ8FfrcUsjwdfCXYVsrwzePWQpv1Ys",
  "key13": "2kSHC2X1AAfof8Ku16RNNsMiNhNfH2w4RVQ77hqJF1Jw86CT5KSLVknvyhGwRuQxx49odToCVQr1GFtNjbJwMcBL",
  "key14": "3vzJyVJM55K95N3ZAJLjfbXx27GnyGPwcpGXGHhtd5wwTb22tvFp7yALhGj7mpaURhVxELcxTgtRv1P9kGwGzrTt",
  "key15": "46PA4Aa86ACjLXL3gJ28uBVGf5P6SwwbdDppUBTCprTPnqNmbRKnXwQriE3tLQhdBgCojgVvTGLx9WzGpkXqHUq8",
  "key16": "4nFgzxm1AzM2PVjpq7e3MFn61kJqCP6xJUvikTBMUYZDYDZNR5Jece3xiBBK2NJCkWrmoBghoptYUaECzAr8yoNo",
  "key17": "53YMuj2fm7d9UBrJ31KwpxHPEknSSxCEeNxzN93i6HKkAaxL4KnBqqk5fMk3DAhSvwiAcir7ybmFFFQr19PCLum5",
  "key18": "58BM8vdn4zfM8GnCXne73FSWXKiF4fCr2b73p2hgzVVNUdio9KDuk5699e1rUZwtg3kiur28EP57eiP2GhqAnETw",
  "key19": "3v8vS6DgJvtkauR4nZwfJNFmkwKAPADNVMdHWDMGijBqqMkW74wjXKdPzFWmZYRwFyUZQnQ65rPJ7wPE4feEhEFu",
  "key20": "2qfseCaQsXo3tADb4c9ZGAcuP32FjXv6P2mpZksJHBPJ4XapvV8ejiEgXHUbdyrFB395evYMrzGzbQ5ZBiC5y4RF",
  "key21": "xUzb3i1ZMuziE6jcyBhyKKtSAHMTFpSTpw7TbxaZUB1xjBY1AJGJgJfbV3FLZeL6rVdmJcczvwYmqsSTLU3uApy",
  "key22": "4794SNao47s9Ek1Tp3aDMx8poSdjmSm7DJ7ZpMPRZebMWyutyjS2VWTouJxchKEsTUFNnZMR2VEELtdhfwRUHnR3",
  "key23": "4UYC5jnfyB2Waq6hfdfABoixurxS4HUQAqaXFykrwmUpysDnfXJ9bveLMDSG4AoycJXM9CzktwuKZwkoLyTxb7MG",
  "key24": "3Tus2pkLfa1AQwMLyme4x8oWt5WN5mP4p2Yf8GRvKAbqjmpdUPJFrQTTCG3sXJD3humzmNgnExtMWAYGKedQThDS",
  "key25": "2wM4Kh8QMz5iSMhsJKAPAaiDCsmSMxCqeN8GjbHwDYccv2ASDA2cWw8e773cffBY4Ct51pjkWAScUmEVMgQTM651",
  "key26": "2DFNNxdwNVkYuLrhH58D1mcSZfkvcaejBbkWJJFYReHZm4dHgokMdHrECQZiUnhYvuvsLfd6BVXwpvJwZZoTJq97",
  "key27": "51ejHS12gYdprUB69Vw76dC4qkmQnKQexFyHiA1YKxg3QaRPGwHmXmC5QyeKnxZzsSFdFXuNudxbTRcHfJ29NYqs",
  "key28": "3L93PvxfctaSeb83qQsmhY7P7JxeCQfKuMUDjNDkx5s2GsFERxuLLn3D6uDVSfv35YrxVp8QrjFhXRJfdBbUGeHS"
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
