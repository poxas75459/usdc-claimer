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
    "2Sov42MgnG9HpMmDVNw5AqEfPXPhW3mn2TLQj4SGa1Tno9aJoWuEDL6Kmap4rMj7KYhTrmG3f13RbokMbGpAWPWw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QPMqpgAezYZSyuhqVJs8ArgWEhACtUYwccaUek14XzFYr6SdniFXZndidg69BxfafQg6azWudFDf9TFHs2CdFAe",
  "key1": "5H9uQZSATqCwFw5wSxRAi5YsruHxfCc3t4tRYpUZzvuh4w9tdhohnefxMPKfbcWLnsQnFJyrufpic2u8BUaRiyXv",
  "key2": "56gfT6gMFXuiqTR3dHkm5jCRDPemRT3sSp8oVYaLmXhmHoR5gA1A9YWVUdtjhFgUgoXs5DmJ6aq3eVq77SzsRHVN",
  "key3": "2cViByeLKAgXeeJfd3EGrTXNhK8kvFehqzxDBm6oMMyVjLYLk1uw9xomPijJ9n2jpZj4aBWHBnEYthqg5LudL2Fd",
  "key4": "3GwBE3UGsh1aCeGbBRfcjyXD5QLAbdiLtYqVsVLtGALw2NjwCGQDws3aZuVqg51wKAvXQU5rvSPY6gokMuGPLBe9",
  "key5": "57AvGAPbUUqAy6nPxEDQmaC2tQCa4HXdzT9qzJkymnG2263vQabVkD3uHQSPU7dhauDzBSriAWWN1ZFNK6MgSo8t",
  "key6": "7sftWL1VEVp4vJqyrvy9Sky5PzveAwKgNDhWR8wdK7SJb6HetaQEVGmAkDL2Uqz6tb4UfUz4PRFBjgpkjKjg1kd",
  "key7": "54gTFtnVwPVuaFTjBvzfEw7a9mggGJaQ2kym8NLUrPsP1MSrnCvzCDzWgY9KezSwsc6Ln4ep45ztEBNzq78ogxmL",
  "key8": "4gkx6yHEWzs11paErecpJZdiRctZwfRpKeSQgwFHGfK1YBhJAx7uQ8Kun8GqVXQMQNvkKQvvhPV4HfaKdfo7do7p",
  "key9": "53X6iCZb8QEwPZLU9cekkXYD1VGLp9cq7kqidnVEnuLSguvKRNrtE6YeuithTqnMqPn1hbVroKnaC6ecTE7cs3gw",
  "key10": "5m9V9zaVbBY6iRKbX6mB4fV8URG5Ch1WAEBfcgUCBDTZLMj2pz8mVf6txqxMEKSJ7avzqiZ62vEkuq6gNmCGoFmG",
  "key11": "2or7FFKpiKg6EuNQUvqHqbPJ4nEAao8jktjirzJjHDzzbT3nKpDb88YDkNotWAkC3Ps21CStsRX1teQduz4BsGJ",
  "key12": "2dMQpxygvNSB4e7AjkaDGrkAModcNCZY83qX1B3UrNJ6ZF3LEZV1RfEb6hDLQbTAam3u2MQSWZkhYnBePw5sM8bG",
  "key13": "5csKZDzdoxzcjFCPZXVhBTfK8BErmbwNh3uEYb492wxKE2Mci6xtjFqzbSZdtKQiMrrgo9ArSfQap9THFMx8j8Mi",
  "key14": "54jXCiig47zSMdFZ9YL1NdqY24Jkcdo1Cf497QwwUdKjEQ8M4PNqCEdBpcJSbCxQjbazAVAMMuEhAnCBW4RJNmMY",
  "key15": "2ajNARYzpXkaLWhb4ZxfkWJPC2JTcZX3Xxx8t3Fwxs9mucqpLpmH4K7cGqzJxYFwVTwFPXVeBYA56r9hbEoXFHwT",
  "key16": "sHLiJ4nMStW7Rf8wByQJU9THyRVeDwgGMrGmcwRMQ8TCGWekWsMuNDQgEBQqj978nxLtFYNakBb18AzVSasgxqf",
  "key17": "4sXEpNQM6y8uovx25f18E9ro4AzyydCLfu654rkuqXnj89ADZCpjscrPBYDkvSFLmVqKQWoq18jSzX9C94QiUfvp",
  "key18": "7wsUKswyRY4yojPZh5Aq699yapWmfKikj6xeCzcmSfJf4RNSWrvDDR5r8hXVhecEDN9k4FEAQGjgwsqHxDLYCXL",
  "key19": "3GxB7hWKdb7kvwS62SWbkzzerQNh4RPxtxaLioy276dVBWy3vTzEXDeVzSzguD8guaoHSvusyzZsmeiqimvm4ip4",
  "key20": "477dm6guGP3Ka5HPQaRQD3y8c6HG8uELKxR992SSQfYZK2anvxhnKSJwN1js15KEEnhsU9aeBRvjCe1sQXX5TXQw",
  "key21": "3tXBE6dr2xVZvTGRAnqrMfHm36kpZFix6TEVh9wHXJtJikuYVr9MM4a6XhgiG9YbPud3KyWUPdyCdz4bXgr6FudH",
  "key22": "3tuP8EQVYmApiavVUbFamziL7nFujQNpQwf3ecvDcZvvsHqPj98FZbbmp92puu13oyfS7ow3Q9CsiBuFNW5hCoD6",
  "key23": "5UHHxhdfyXokf9roKHdjxZndwYBTQQchBrwQpGRW4pM2agpXs1W849F7N39u4WscxqSuw5u2wvUGY27W4bWhHqWn",
  "key24": "4Gw7oJJQx35qt6KFdjH7Zoq8ew8GBSazmRJgjEnzawaNGVfww2s6WTxzX7vHehtgJSTt7kULgpQvat4zd6HkVMwS",
  "key25": "3WjBiCukucnQJ9cfoYDnndtN5kwQYz82Ev9YBmyRVeDKd4WbsB2nuxbBCck1R6ZMQSu4kd6MLeo889BDhnrti2em",
  "key26": "4RAts4SMMsUST4g7K3EZ6ULEPGPzaVKem4862kr7ufDp8Aw8VoKGFBY5vStxbZcyJ4vey4R3pJTdH69ChjvzLEEM",
  "key27": "2BWZ6c6XdfE5kQsUaqxFVyGUsYJ1oGh66iMkD36HJCWmJob2NBJhXK2KAomxuHStShLZYrdwG7HEr3rknnr8tFTg"
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
