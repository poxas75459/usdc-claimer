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
    "26iDi6qJ8cr3uz9fkpJA5nWXJhAafXjG1AkzfnpFuGALG9My2iUdRuMBYJwwwa5aENuKQtgWvwJaosnNHxgJAEgH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tsoV7zFG5jUKqiKANYMoNUGdoCMahCHU9ve6FYHVLmiQXkc9WbieMocLpBPgxmUWPMTs7g2ttFZu5iEiwGEkoQK",
  "key1": "4wRV7h1nxh1suFsLEBBLsHwyoSXkhK54j1koFxghw7kyMMvRPKvB3PkthNHYiSynAQZELtMuTcHCttKbuCpCm1Eq",
  "key2": "5H51EvA2gkRqXzGntbBBU535agQMEXj8H4AxU6tDRZU54JJAEv9RdZs3j4bZjBTVkH6CXqVG3ypKPR4sK17XG4g2",
  "key3": "3FetnzexTgAeoGvKmZrP7rfqeQA3UPQh9K6okY9A6rWy8tGN1m8thBd98jFaX2NUZwSkX43MioSESC6CpibE82SM",
  "key4": "4q4eXUJdEDR2fcbbARNNSRFFafcrVZw347yYogJviyTux9ez2ewvnASkjaZTJ5mgpdo9BPewuxQWo8Qu86MkNz6w",
  "key5": "5NzSGeqqa3Z2ssm7UrbvreXDgCrrt9VCh9uVdFcSWya5r43LiC5T6gUvVgJHpF8y8eXNX89oKF3QkhYSaes2NR44",
  "key6": "2sA4mB93Sj73EorjFRzR1P64RjDHwZYBXqpWHwKjsxNXZxh9ZtRZo1VbupkWpzVDR7BNFwqMWovP2hbwxsW9L4G6",
  "key7": "3CKEmFWrCssGWRMrCq7XRctsCjPz4WkK2zrhmG1M1noAvKDLZsPzxpQQ6zv3VYk8dBC3CJTyyS2A6rFq5CPv8NE9",
  "key8": "MgHXy1sRwZzazh55f26YNP4Y3a5UJGxLgLS1FnM2YDgjmu1maehxrizWkwNsD4kg5HTEdPN7iYnk7QByLhH99zC",
  "key9": "4ZvFUNh8CdmRkMsSfJ598mxDw5vLx5M9hZ1wBCTR6wGT5vQ6G6NVwGK4Ds1zSVbHspaqpFXZ4hcuvvytNU3en84r",
  "key10": "5dSRCyQgKW2piQfrrY7kK4RkfTTS5B6eT4PE5eC3EPdKHqnT84MnG3mYjAMCjQA19ZF362BAio9WLcT53Tr6qJLd",
  "key11": "4SzC4HCYCphiCRNmTyKA5PjbK3iM13oNv56YxBau32jNE9QbQYapMYPdZZfECKiLnTt8jLzLuSZp8dCYVkpt2FJX",
  "key12": "yhX3KtVhLVBAKEnPPRGmK5uWPyFc7ECbLdEs3CPwLBBb5ksXafmgchcPDuG1w589vRqZPDr8R9FpwnjNMQH2zTT",
  "key13": "3wYH8Ypq5V6TFYtAxWZTgpSmWegi16az8FVi8W7TBeTZtMC2Pk1px84hLmtma4RgEugV9VN3iKZoqFKPfCowbxTn",
  "key14": "3j7K4WLfiwcaQ2MmDBFubiJdbzu13X824pAGk3RBcogMznwP4gL4ayxB2HmLp7BWK6RnjEvDEgRcuxSr3QvL2ZR5",
  "key15": "5mYBUG94RskiwK4PYRCPXgWujSSWF3LGp33Fw5YVPEJsPwJqEnmC2Rt8GK8EZ81hMbRZaxTwcd39nchjyd7PwcE9",
  "key16": "4LShy4n7Bt3dURrJkr4wbEfLq9fTT8SZFQn92HXQXsJwiG6as4LZHw326TFtmEBm2okYV5kmSH61bMSVTqmuCu6p",
  "key17": "2frEd9QTehtyKfj6YaEVajdReEjuHmGGcXd52hYkMUM624UW7jcjtG4DhJCUB2vTpfAbyWJhXhpJfnAU8xu9EUmt",
  "key18": "66PyGPmPyhrJhMC1zCq1jEZr2WhxPeJNdARCH4fTYkxin9Gcsy2497YufNwQPkmnz7TjBNq3N2ddbNiPq5yZRby6",
  "key19": "3UjkdM3DwpPRLVMfi7ggopm88KXSYcSbNH2pEuAqfPtHwaAbdcbchCnbfYmU2huBJE3pMECa2MWnm8HgPE3JRxwN",
  "key20": "2h6aY7fZpXfmBayPLiUF7dNr4hu8HEVQvUPZLdTPSR78e3UnMwnBAfEKTBAdLGWXDAKYcxGMbk2nopJ1Azwymypu",
  "key21": "2g3RZdzBUT5YBSnA9vD4t7VsZX4Ebru3KWXK5iPDx6k6J6u7v6HBZaXEKriqW9rincF9TqupG4iGyFFabghrqFZ6",
  "key22": "4xyFQWLKc1BRauNkNFoFnwLsjBLNzgMNt3WnXibRBTrQ8vFn2jd7H3WDh9EvBddYmXnR5WRgtRqDvhvj7wuTYczg",
  "key23": "3m6Ej6v3VZ9AiBWZm6DZGTDQSaeRTSUMghsEcg2Bv2XZfUJBP2ThKAGp3dsW1cNzGxuxRkEt6F4sXUsWA4VZfg5x",
  "key24": "3hyMZCaTyU7vEtkGboUtjyy5Fq4VRaDQkbXQ28fSHWAbNuPbKuoiNGAdPx7pukbWqQymaQLg4DPjxFR6n5LiTRKN",
  "key25": "5asryce67uanEk8cfXwoakBQgqtSMLYsR19fCAuT1pWuYC6hhPenmvzeJuehz8Z1ozchbkvbyEovdRWijPBM6WiC",
  "key26": "3retaMP7t2vXRYJaLeiCp534RQzAvFBVVhqzawKSCratHANj2Tm3E64Ca6Wq4X96NGS9Cp4UeVXkgqS5CmrSQZzS",
  "key27": "4yNhh7jBFz9ZpENAnfmcnJ2aEqfx2jdygGANagsiZwjjzWnvJ3q4i4WfSNpGur166aBYp3BfpC48nG3vmJUwm5Sn",
  "key28": "2zZK3y7M4SZE2bFToSghjPaEPHn9yboZ8HACfg8XybJomXSigD2ytujC7SRNA5txa4Bjpp3G4T1XjN1nhddGGukv",
  "key29": "2nuDsayZEjHTMxiFeaDJqSrf2AfzMR6V2vmDMAjBo5cTfm7i2pjWM4bafKkAV7kQjVXSntoNVFV85Nz4bCTEehRM",
  "key30": "5VpJ8d266E1AYC6Bvke8spD2mgwiv5rw2cGtcNEuEXERDCDEjhwewhEb9RAShGxYHAd1de3sEizbASWSK61qGEr8",
  "key31": "5NZuqEFLnbFk9S4RvHWRX1vU8s7o7xYHvDtAqhW7DYeLit43BpM8WZfHdNSqXJwsoiqSZPxhMNcJksFByjzUBDx9"
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
