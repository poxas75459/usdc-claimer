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
    "36Wzg86ncFXMz7azPfWScBRzw8uwhYYDgh8jU5UbGFcZAq3MjcjxwbWpB8TJYRBu3c263rw7ci6QP8oShDtDTLGg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FgbKgu7q3dNDAKTozbavUmFzu4yssbg8dbyzH8PH7cZfw3DSu3motfrbFKeGxQ5exHDpzm5ZKWLuMXsgG1hSUWb",
  "key1": "2E6C5A74MS12udk3f9TPW1dHV5kfjoUJUbyLC2HQT7v9gRUBqj4BXZrCZiqRwJoat7Sqogszx9AiTDd85nR3DWW4",
  "key2": "4j2Uxqbet1Pj1Qnk12xEUHdzZMF3uzeFJpB14qCHNc6o3sWMddoaAHPyQFDkyGu8E1Zc6kPamaR7Uc7C4tNz7DgZ",
  "key3": "59PTdGLTYVBHJmEvaiE2YQ9Byzu9ajDwD2ESGJkLfHK25q8xpd4c699SYhybjaGGi47bC9Fd22AZSxTEn6fc7MJS",
  "key4": "2iyYV8T1FbmPwzZvJWmoorKUsN4TBgMVTLWvKaSnwgoBFwwsWUZfPfi6o9VVNkHkYKVEegxBhGW6z6URq6RQgqLN",
  "key5": "5nfZvNtRcBJutj4txfHguYXV4hBMcPFiHxnUTFYvNEtGGTQd7z8D6g4LxuMNaYGGLXkzr7shSksV3Td2NxUztiGE",
  "key6": "5owQxEVtGCLNH6H6etqjArvCtQ3j1BCB5a1FkmTmJ1HuVDBy9eSsYvmgqBKP8qakxPJ8XbQbc1R4suSr9p8f9cy9",
  "key7": "5sXvNv4YE5msmJn7xEjz9gfgWt9qPSteCRgnvDKrA85dfR5RifijU3ywCMiqryxVMp4pwpViuZTsAuZFB4cLJeps",
  "key8": "2JMQEHPxHwyLsdhnAvfvM82cNwQsUh25pRGTQ1h414qrpmmgytj2ruEm5UienkGqDkZdCZEvsjPGa4EtSCWw6Gkb",
  "key9": "4FDFcJ6jvvQ7jcmXkAB8sLZQwiDEkuxpci1okWGt8erBEeZ5tpvY3koPje3Rd3YTxnNjaYmjKSBr5PMRtkxefg76",
  "key10": "5QN3Lw39WhU7oPctEUJtkFAuq4XvfiENLLQZ2vxv2xGjsqeZcjfpUytUK2tK1qnZYFcTobjgdoujpaTkXSD49rvU",
  "key11": "3FAeEAL5WrhA8AdStB5XkzKRD2X5dCgF6Ds4pJWxhztt58Vvzsu7zUucmMddBAsejAsaXk5QFE54E21DNLzBNm6v",
  "key12": "CPNP252y9gHKPWn5zCapNWr3qHNReyhjaBSDGpscJEyh79KVwUbeWgbkCCtpY5Et7LW3tPyktrbC44QhbCruBEu",
  "key13": "2Lbixg6SQ5fTUjobV9KDtPqV5PDTNa9S7GsB4e8NNxd8B3cabnkpc4me74UNY5BhtzzA7EUgYLPCRdm2XUfiGadz",
  "key14": "4f7rYBXCdSgJgbP4z9HDFkgNsdm7McTTL74ZfuEhMEVDqQvgePDieTBpkAUTB1Av7vfzNiSvSZiYUjYcbyyAaPoq",
  "key15": "518FgHk9fcPhfikxotAjfQ81r8h1Ter1tD2PRxygdGwLc32mFqNVvynQCa9Eu1sqgvuxFx5i37bcx82SCYZDsoj4",
  "key16": "41iLLvfBNVqY4aXyR2Njj9rJVd5KQbwTrsqYG3SiH9wuX7nCA6kjL18VxUGB2GmhPuEEoE3yZNyNmp7S3Eze7LiS",
  "key17": "33PZG52f86aYZN7DdhBu8hhU93x84vkzSwCZnH3VqWvn1K9xg8Do7KnH2BCdwooBNwipCQbenezkZVXkjjkrmZyB",
  "key18": "zQe1GSDrAXddNYHgMY5A2dqjy6CursnjxHBThEpN5DFJArGNc2HAeo3ZjUfJe7q2XJHMMCTBtGfV75gU9F4qkFJ",
  "key19": "2DyQV3CDaufWQiF3fuXXPqkxAqdk8sw6bz9faqgvQgN818hixGHyV3qcegGgg2aenF68KHLKL6tp8cxnoH66qH1K",
  "key20": "3FZCmbuCPpaYDr9r22M13dN4zR2E4RGXTqkqgqQ9V6WCvWq2oypi234daL5nTbdVEZgHLYULcqnhcJ81dV7gH7FV",
  "key21": "4iTcqjYrPYgZ5y4q7yvt1eTm2fx1PJXxvJ4az8mTVRv57zoqc6LKJsWqQt96VonoRMSM6b7c52azmaL1KcuTcxN5",
  "key22": "4QszPRLa5afa8ccAseTgQsJPx4jQusZatu14LrWhS6AoZo6XwMxwTwV94K3LaBb7GuFU3w42k1ytnDDVsoXA17uV",
  "key23": "49aSvZxiJzBjmiHfDWixK13STKZ3zhTNB3hopeSPh1sQACqfKN7pVdTQ5usQyPSXnt6UQMF5ZJiRbVf3eFpPA9gM",
  "key24": "2dj96VZ5UuqamV5sRCmpVdNzWCdsaVS148azkofEaD9DRL8aPGfGFMQEmmrKd2vYGVB7EYUih76BSPDpq891B1w3",
  "key25": "dRuxEjzSmHR4weuLjuonNCEcaovejxihPCBy1T7GKfzLmzMtUPMjNWS4mUfdcpHcHiXuL4kRkvKQSzZ7ygZWj6Q"
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
