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
    "2tSyfZ5mykL9fJ25JiNjhvFdMoQwt9o1r4hCmTDGVrjf4k25Ne4Ha54g3CHL1Ka3bQVMznDoeuu3bGzckBYr9duv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vtcTm4D7aczjdg3LePtiVypqGnadJ57vQuk2wh1DYR99mztPAST3WUUZo6PC77H4vp2k5NL8L7HhCQUvUexKhWX",
  "key1": "4bBxY5YzVkWX2eXbGjegof2GzvTHmPfCFmxCP9xG5XaG5uENcruE6ZDVarguwoEAHeuLXEDHxpbcQPATtnXQxmrh",
  "key2": "3cEqytwd4VrkgSidaPry6ccjgzcSR9m65wGB1LKiGi2QFncduF2cpJRK5bdt4oqcau1xSwUE2czUz8dcD3mTd97v",
  "key3": "3AJWhbfTAzdf4hMufFSa3PoEw8o8ghmr3PGSe9LbN6XYN6vv3ZYW1EGLs5DuS1PeUTGJS2XAyrD6mbrGWf1FcHVW",
  "key4": "3PUwSNCBKNiA229gi5EZPq8UjQYsDM1BhSGbLywGfnNmcheS8qjzRoN7ePeNLvga5pu8v74vAnNiZm7hsErKjQQk",
  "key5": "34MmCq5EBS4ByRis3a1d8L8FD8eM5KWB58ViVEK4JBSsW2VNyzxWTDViJz9quXrNQbgpKvi9W2SfVHeWVHWqyNB5",
  "key6": "3mfeWtKwhpZWPvDygSKnHZ45jkEqo5M2W4duBB5vN541ymkoLn5TyVKu1Y4bFKt4xT3jSgognrX5oy79kygmKBQK",
  "key7": "49pLJztugnd4VBLWZXYNRnRkowC1oKF7YzdzU5VxbRKN9BhPWjPJGbLm5t54yxatBcwR9cmdqkLqL7jtFkVTBNw5",
  "key8": "4uSbu1AuesAcKbE5yhHFoGEkzdER4gxPeueoCM2DH7KMzXaVDyDBgFqxAK2pxMmeUZWdMeUWeJKCH1yeZfef9Abo",
  "key9": "48R8xZYtMozVtpakHmfbpANnCYJ2kZMdLVpwTdwyVnwd1rYQanAV8uGkvMJKGeXpTax1G11xSn5bMiWm2ccohsBE",
  "key10": "opBmneXtW7oCXUACBtWJ2Bv5FZ3wUxVNmjUAMSkNsCpfpDkAgMjn1jUMrE1CnM87vLPSVTnjiAnuaU7mAdzQBo1",
  "key11": "3MpjfPrpgmZYnYLBPS2eD1MVRTJycJ5vN3MB9Hyxx9hRbWebxX56FHWUA57L92puMLPQAdEYyhSc6owETUS4zuj5",
  "key12": "5jXeYYvczQQKRAXyQiKovfGPGWNDLjrgRubtGuAcm8qm8M67VR7LA4B9XD73Ka4YAWujM4whykJpATGLJLoFjuth",
  "key13": "52yxJHURY2EWYMcWoqAZhx4rpfpjL4fNX7fUorNPycLBQvNLuzkdHY8GUAX64i5Gj59MyXj9MX1QsiZmzrAo6SCC",
  "key14": "5RhXEDg3RfszuFdtBsSK7ucrSdzeCoieiL2GeyYYPhQyiEoaPduVrx5SruhqEFsYJSAGDjAAdVyk71EGiA695zgU",
  "key15": "5HNQtH4dCX99bkuDcazQLrN349V3uqtTL4SdFiJmj4gSSYNUDR3bMDsMD7s3wb3pBpSVEvkXxao38hVJhUtxownA",
  "key16": "5GkZtJZeg5dYN4kixNYALkarvugPaM9qvWNvKkZbpQuQ6TM7MKUKot4gAzqWM1NezczmpDcUShfS9gfP1fg5Ga92",
  "key17": "3QkYEEhMoKohAcpHLem3ku1gxGDkz8BdDF2oyixAYdDmwgZ4CZpdtwFgpSFMxpwxiKGnAJb2ot7oCpSmcz18dCbz",
  "key18": "63PoLYW48vpGk5JeZKywqznjmZswxhUgwzdm3tEo44Q3PuCnZ1v4AWKCDHEaJZ7BSktDtQCjf5oa8WRY7oM91zmB",
  "key19": "4rNpD7HLGjmiG2bmjMzwG5XDnpEvCkP5yX6hKwhg3vi1w6sEB4rf1CuLCs1Sm8rJSzbQMsamjpYEM64AKvwsdE4h",
  "key20": "b147hcrr8wjRYbtq42pyWxMNHUyapwSrNbSN2qMs27wm77ZBYNyMT4Mt2c5mBbFRYfsXfXD7LzNghMw76TwhfKC",
  "key21": "QvKNGFag3wxqMrwZdpiRx2rbxX5JjBahxs8u1esHq9axJP89ui5rbxkNSUrWtzobcTuHNgryFggifjk1bw4qR8f",
  "key22": "3s5iHdbhZ6brM4AjPPUeog44DpTapoASZddm8EGAcyFwEbw72z1Pz8MaD2zp6FfbNBH9ZGKx7vjBdhRYe3b7pzGF",
  "key23": "3VSLUNf9S3YSw9f42xc4U8Che6DjNba9P1dvSpSV4reefBF2HPiGAyHtaQnFgN9aBWfHN7P2ibaD8gPySUxtJKyn",
  "key24": "2rhFtm4kQFTHNuyu6WUJDJKmdKfV9qkbrf2n4Fjw6VZSQQmYSJxq3kKjpvuKRQLanev8WRug5ZXtDrMA79MebNWQ",
  "key25": "3TBVHUKD43vk5BAdVZpStP3eccEyDf5h6pP1pT9jpYHQHqGY4r3R1Vi1JVKo4u5HSRS2VpH4efdskQuNYzqzJP1X"
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
