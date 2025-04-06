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
    "2u6PiqVV6YLQcnrXwefvPzxyK6p7WLV5zBvEVVvNWKop7idvkuUtErJxxYbsCKwNDCJbh7NUESHXh6zLnFUfjpZK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SEzc9SZzYee6JDRGCejBCuNDeZQ8UhPZK8yCpYSvnirp4HCr8VAKJQwFTX8N4Rbpk2y9E9fGRPeukVrXC14ojHK",
  "key1": "3oWdEqNAW1sGFAXUtnE3Ef27A6NFJMhPJpTfR5gjBgFRfGpjbeyvtaPkWZGUCeTAZWHHEVteoj3z7h7BYq1hx8Ch",
  "key2": "2NfLZCNqVtn1r4pub7fGAiSpy9WEtq3sJcWfvuRgafEam9FoYKwuxM65e5ghQ3AYyXD9kwyhhAA5zkeANjdnWDPE",
  "key3": "2T9NEaf2o5GgbniY2e7reMmKAs5i9grsagprtj8uPGrngW5WHmu2AeKVTqngMhfmYb4UbA3Fbaxy2ztEFhT1VJF4",
  "key4": "5mePj6kXmjQYePXv6Xeq4WiRAkWPLJBS84v5APTUB1aiNJR8xTQNUti8VGXiXfQQ9A1VM4uePHHiCgFB6un9RqYE",
  "key5": "3vrkRoEMJWq4Wjnyq1g9yMNaf7NjLhpRxeLYYnxzxgF4CBzwyKRFzbrfsoc4H15befipeXtHVHPDGBSCcjsD9gHB",
  "key6": "2F2SP7F1i6wbxeGpkGmAc5bYFHPWmPbeQKhkqd6c9GDhWbdgj6NaXbN2HDA3kqTWRnsCXnj36wNuVHAWxSKvMgyc",
  "key7": "4eAo7eYJ8vPamU6TwWTmVeCzjqsXGBHnsJGGnMcJFcLmWAbEwqrb71xMuqT2iSkSgywTybzCKj24kP77QyEDs9vK",
  "key8": "4CQUaSdoPjhEeTVVQocgq1Z8VJ7r9WfBRNswTzP22ALQExqs1tUo4qYeu77G3zXfDbMSMh3EN6Tu9iPYm35pi37n",
  "key9": "3sWSqiyv9B5tDKPuLwmco5DrzT2LssohaELQkeoeYbXMx2UbSEBmcVcdfkYJiSRLXG8RUMXHyfj4muEcnWEvE3zg",
  "key10": "BzJg2naCLxUPzkQn8kiy3bAS1pXBesWV9x91SVKS6nXj2TGWRAx7K8pPFoerUnghprFdqTJemeUvCYqMz1fZfe4",
  "key11": "4x5kJLGhZHAsB1R4abyTE9p2nLbg8kKayJG9vLo1ujUeX4Nw6aWE9XguD5w7Uy4TC8Jtnw1ymWQXNfr2UwKASdzu",
  "key12": "DuFLXHToYNzJt24UeqAAdSLUpMzoVSEfbsbS4zKtuudDWQusYpA7fMudypt8HMVrHQ536ChEbHKTacVoRu4var3",
  "key13": "2KcxU77CqX39oSP5pbpWX2FVasvXU5HMWR4mKAbY5Cw7yctfnPLNXHbVhC4CjytsPBBmyb2EkqqLtkE8yAVwHVzo",
  "key14": "2m4aeF6arCKu4GccZ9KzCgeVNyf6x4AJQ87D8BP6vC6B1swMiGyUDZ2SDRtsyjDjWUmsLoatNL8QmJ9y63AjfsDr",
  "key15": "2b4nYBJ9tou9giLDYd6yoPzAtHTHC9mL5xG6AwRtNELXhtQGct9R2sbS1E9g8fW7KzAXN5vQ4L5xuWiXnHCxekgB",
  "key16": "5pvNaBXbNGSUaizJNk9Dt4QeKKjXfAFXNHaTF21Bp9oCYUoHtaubgqxHz7fwtKLiPiWVjphRnG5oTJLMkywY8QFG",
  "key17": "47pBs1gbWLW3RoXkJCWrHJiPQemUVvdmPJm5QXhALDwy47rd4LiMJQUdSm5LL5uzHavjJZ7FirWQ3nHBPSEQx873",
  "key18": "oiM8P1QeiU53FAquUatke4R6ReWnpGgFsJYpxxhsECM1knMy8yEAaDRPHfwu9D2c8Q8xoB4FB5v5AqwUf9Ru9Fr",
  "key19": "3NdqzkYJsXMDyDpX1HBh574WiKoiBRHFV1hWoX5SMmWgZvZukCABHmC6ZxF6LR9epftqihqHNDYXx7P23uYsZTgV",
  "key20": "2HoZFEZWbNXzUvg4m5Jxiy1apH9txrhF4WxKF22qqXCZsP6EppCUkuAmrSEQhKXe49FFPeF6WWrLoznPK6SQEbnv",
  "key21": "5hUcatvHUY6RbB8ysS2jCcnFYyvF3RYdtzMH7kwSrqJondtcT34PryiaB1nZWDQsuoAc9wtoZxUtBqi3UmiC2tFx",
  "key22": "5cdHb82asGzCboHHP35AzgePsHQoRVBLWX64VeyWLjJExqaDqQ9ei2cAeqRn3tKP6mKwwL9d3VktMPnqxsw9RVWk",
  "key23": "487qG1o4ns9xdnyQ1bdxLmTyFT7rJikikNBo7EnT5fdevHFtNjZWLZSdSSo56WdErHgpLNv75iqtcfrVLywaQ9m1",
  "key24": "37TkZyrQgrUcXB95kH9UhZBgHvtrLzhCZXsqq2V1UdGDEAU3GjwfEZM7iUgGFCjvWaDPi46rRHeY7hn2gu6PjUpa",
  "key25": "4MWR3xP8oiweEjnY1sB4NQCkimTGrJiULafJobiufzQmbVFVYa5ZCjZN7HYupke5ohhnBQBHyTYAKyf87DbfaDC5",
  "key26": "28qzcguvtHggvupJR9D8CBXXisvqQrFkP1qdQxcJT6ViT4aMHpFPr1pR3UhzACu3KufUN9V6Gb91dxD53mkvkNJf"
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
