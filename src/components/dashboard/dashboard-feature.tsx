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
    "33ECuNEdNoSwHLAZRwAE6bpyszge1AU4MVDgiYGLxL8pFdWC4Em5JaGsyhdhQVqXVMBLxbgAUDTiAU8FyQUr52AF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zSGkEddt4FsnHticmsmpS1gXgULcGkeFtSGWKYeVbfQhfz5gkueGoUpYngidQmu6Ch1xLMeMLvKK3HLR2cBBQKa",
  "key1": "2PcvNcaqfCxFsP5Dp4Dswej8fKnCqcA9gL7L6amCfkjmzyZPeWDDYjVKCJGY5DgodJehvCrdy8hq66Yz43Kk71QT",
  "key2": "5KChaAqtqNV7bwLdrHiTa95o8CaSgxz7cvLEYmqvUPsFXpvMZeXQyFh67dMMNYeMnkYaJnk9vP65wdYmE4jq6U4T",
  "key3": "2FiWW5EkSiKYLKKp21T9SVKJHHdcpW4ecAmCWoDH95uWx2XAzDNWXyijXd8KhyLzLE577Bs5JNPXeWv8g7L4iJ4m",
  "key4": "4hTx76bbvbgwPQpJyptmNrDXjtD4gA7Jr6g44XHMsGHn9BjdJqYJ6bUjYhHEdChNdCUVYg1w1oLJf7Jnq26gqnxn",
  "key5": "JtPVzpQmgSBbEdqA7cJFcufhqxxf5wiMF1UjzdZiNYkogNngN5HW7JRm7UhxhFHJaDMwETfQcx7quw7KGizXqX6",
  "key6": "3DfySWsC4M3UFVyTLHgaKezQbb6rSigWKNsk1aPaDsdPQP4t3u73FgNeKXaTXfqpyTru4WrVumG5AonH6m9veXFR",
  "key7": "2RkUzAmD79HeQwMSKqUQU1iBBin7RAnvrc8GQ7U3KcDe8czxn9gwU7jVJTzxYe7XDJhBpPmqpSdWMMyqc8JrnzVq",
  "key8": "3bqMW6VmU1ucH9QH6Q9vEVfBffruDKTRXPe1X8UQAt4aonDARwqMgeA2CyMp3bmv1NX9KK32bQ4vkvHNBkPs6Vkr",
  "key9": "5fZbjiReqw58SUDjUDNQkuyNx4hznywTPHMtTdZamNpbyojuw5X7KZGygMyAjoRYVfvBNwhhAfPEwHc98kAr5A8C",
  "key10": "3GfS55yiWfPrfyuDgaypx3gkcfzumtWA4KPWkziuxzRLVDpGRMyjCK6KDjADtyJiLJ9yqxQnx34x4HG74SBhiBFx",
  "key11": "3g426wszosv3ziKawfMbPPXntnwXLnLga2hm2VHtV1K7XS1KyGL2UPegygdZEuBjsuujhH6uH6LaWBwTRsrdxeK5",
  "key12": "5vo7F6vRarnqUgH4seTdywbrUkwujYFUJ33XX3f9KnZFnMAACwQmYEQ5dxsuN3XAfjiyPsdM3Fb35Phc7k8qeSvx",
  "key13": "2Y2NxQbBTAEWpqmDa5JZRfKhZfytspdwSB8BSfoVrTtyidSt5RZV623hXezgLzRT4VKv6fSVxKMGGRyu5FPfsiQ8",
  "key14": "2uRybGzT2zyiKk5Mo5hX9Ev21bUizUdidgM415aNc1kjMH64hV5JQYSuNSscYh6Zqtf4zD7P98aDo362sro21zQq",
  "key15": "PZe8chraj2N1ECPdXmuZYiGGqxthx3DjVj6PrC7nBGh1JKuMSejmZrd6na76ouem6tox2rw428J7haXs6Q7JCGK",
  "key16": "QTyQor7iZCBgGjWyBDYMMfdVFkr5SXhfATuVXQDGjgL2QMoytj8RxmSSD2DdsyT54sV63ShMyZETwdBPhrwDUgh",
  "key17": "2t4s83Bsbxshtb1cRuETiLRHPxksZv4BbsJYSLDGP2Q7N1eWUDW6Q2JY7WwDhGDBnkGa2tcq4zEgTGGtAGeTcjGb",
  "key18": "5Kub7Y7uCem9oDdXgHBzjahNZwM6gqRnDFWrUqaYMk5tq92y3MK9wzXGjc28U9uDXzAYXNPJstwv8zHvU9btUBnG",
  "key19": "3KEUXE9A3NPmsQGVBer6qS2ThTPSYAD2FjHAqhnwYHXdo89r5prA5PrpXPR8xuEL1dNBX3WTVz5eEBN76c4VtdQm",
  "key20": "2tnYLdDuuKyqfvqSZwFVhEgxk18mWS52Ph6VJFtCkiJqvmZhfGsGjkzgs4MHM3W2yERmjMtTo2UbexEj165MURAV",
  "key21": "5EU6WT6dXaYJhMnbHVpvoYbix3vomLBG2MfzC2fW3N6ZufztQVcZsQMaNbxqFo2DkTcCFRQRoydzQPxr5azYyGHh",
  "key22": "124zx6HP71AwpBQCtrhabvkh9zu6FkvBQuJ68WdBuk2zTMmfiSGgG8ei2qmTtxUm9vrT1e5m82HRBnMQyS8NBxKw",
  "key23": "4L2BBUMxTLC69A3bqa4QFcrhJ2UpUTv2kRkNcHK83p55qb3RZmjgaXmmnnuRRSvG59JpbhLTpLCNPwaKkzhrSpPb",
  "key24": "2zntrMPe7x2sfB2sy63mZPSaV1GB42Mv4PG2LhJu2aZ1PYpvoNL3ZDwfmMfQ8wZ6NV2xhQZJK3Yc1nYWRHmxi1RG",
  "key25": "3jGK8GBDbRLRLYLA1gzaAQzPFB4Jd4M3uZFFsxiNPdnEQNEPPmYp6Vhi5CFbbproC3PoL98691Wnzc2dGDApfcnS",
  "key26": "2SjtEqdorkWSM9SWuTbCqW4hxp2t1jcuAZ9BPJxceyfYRAdZjr4WWcmpUnREY8XuspiUbusgbL3HWGVDt24PjSD2",
  "key27": "2N7o4CXB4wLzdbVeZK6yMjDXvvbu7sayyABNPZFrbPcePUg7m7BWXGJU7mpXtWJzRyQ55kQr3ySh55g788qzTP7p"
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
