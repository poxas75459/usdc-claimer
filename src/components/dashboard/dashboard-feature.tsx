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
    "eUsFMGf4jk2AhZWjuYgxKgw8f8bCo8Rwg4WnqLRUj7Tfzb5E3QaQb94dByHcv7JRX9fJ1Kg1xTzpLkA8q8QZfNK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QZZAARFZSVKjuT147iB8nbSQUGocHxsto6DnEptrmMGokQUaqr2QcKt2F9cMiT3D5Jzoqir8GMtRExNL3gXp5Rv",
  "key1": "gxVXHHE9SPNTXGatcaMjtsBnN9H1BZnAEDYqzwfwjtpvhgFQS3kmmsb7v9n1MCm7Xx7pzcRbDrFGuDhP2ZZ4xxA",
  "key2": "3x28jEx59HqJmnXtiPU1a4xr8eLQNNExsyh37Ndqen78Kr27KAFprJ5WW9vEbB4kqhf9FkWdZfTZ93URdTmncVzG",
  "key3": "3SYCNBRGUmx1QH9aiCgeXYVKE52z8mFv7sG7GGMtJ9xsBVAJKJfcmzj9LSbiFiGLmLcVZHSSsEE2Lu9G2h6sGBVk",
  "key4": "MTe3knErYnxMZEq38SBaMeQKVgY4PkpJdNScyesj7WT9Waq2SGs7dcUoDMGW92dQUXLWecJjTYWtz256C6HwJN3",
  "key5": "4ihvyqS7wVW4pqRAdqQzycd5C5cuQMuJT2dFMdmB1W5yDq1RonvHuZiZrFgxRHpizK8G7ZgodtPMCZXmnu65r4WB",
  "key6": "3YohDy8uD4dVcBypbcNRuCnN7E8njfTiFhZ4Z4tYp6A9P54rpqJHwfzPES2oCdTQCEjZXnGgvU3kkvmRmZLZniXN",
  "key7": "4fHQWgEqogqb1D4vncAprTEvhmiaAzM6e31j9tUt6y5tTEf9a6fsseA1LnmPNEjASvSNeJfov9i4eURt33odzs3G",
  "key8": "29sHvJBZzuh99BqoXhAUJYB6Xwq8Bu3nkVgvcekAPQ3MyUCVwSxhQFQj1KhHiWCB5i228jkahvkUqC6kKvZ6uHcw",
  "key9": "2TEQJtnQ3RqvxYn7sWE5DrJ7KkG8vWucNY8QDv4YY6sLorod8o8W4b43PejkJUzryVN7UZ1d8Hd3QQHE9uSpWWhR",
  "key10": "4CLpmKYLNMe6tT5m4iJ23Gik18hDzNcm1tcfLv1wiEDPmyaoj15HLHbFXnVjpNvjxkGiPs84Uv4aAWDpZEUUFSpj",
  "key11": "2EXcsnrjNYxjJYybQ7Q7mZGh1xRgPDwSCyYMawzYFdMDpkys3ggQCM2FXb14LFCcUV8vocc7bfLQZ4u1hxGbXLEx",
  "key12": "2XxAFAPNCHibuvVB3giYyZvetnNSvLB7dMDhM7BKGnKiGwywN6y7f3bPcKmun19rguc6E3WT5pz4C2iTVX9RnKCL",
  "key13": "3dYy9uRULKRECWY8tEo5sempqj5cEi1oWN25oQQsbcj6WRxvfscW4DT9hK5gW4HJdq8RdKdom3boincSkpNMAkKE",
  "key14": "3ybQeCVzijzNviUGHtq7yfPGKT1m3iAnBpcMtiq4RMEcpxKhm515p8SPT2VfaMEEwc9fNyxYCJ8mExnAJLsfpeMo",
  "key15": "8d9iNDV26YKXoi8NfBJ4dqScetxMnzUvdpiM1JY7gzzCeq1UwutShjfEQrE9Wq9TyH1zK4zE8kFoPBvDcngvZGt",
  "key16": "4pYJfJcxyY8ft7AP7taqpX4hhNYjngRykKbgQ9EPqGN3aQNeVLt5a9Xr8T5JVgZ7FFYx9GEZXCRs7qKyUDuposhX",
  "key17": "4K6jxjxB5Md8sL9Dmv7XTX57ZVSLgWz3mdAG6fkByWTPU9yShJwbwJejXFTGvbdP3mmRyEGutqt6yQzRGTKPkKvb",
  "key18": "3KAX3YxWQyj4o4AwaCZYUVQGYLx2q7E1Y1qGktdcN5qZjjmx7sjRzCeqYGKsCcg1ngcjxH5rAaPvCoWKgmTxoPgy",
  "key19": "5bUdT8kuutc9zvtA8jaysKUuKhPRKrWv6uW1p9AfLGpnNkA1jbsxSL2DR6a7TVxeBoXD7zChd7YNR3KernmuUXVd",
  "key20": "4hJj6sbd6qMrWkfBx6TkM3B7VbHAxrSEuBYF911Xyu8NhykWd2CmqUZYGEGsToEb1zasmyRA53jwmJLQqP46jRPQ",
  "key21": "6nv2JGNFyUtSoUcg5jDTm98BprMG2y18A63mrjLuSksy71GMyuiSLD7BYkTvBNDGBqtTfKuQjzdCUn8KffgCzuY",
  "key22": "56F3UfZ5UFVoHTdQjMrWEwkeWdHdokBsAP3Y5cb52PYAxopTFNGonQWjVdF9YYy6jwfxN7GRQELM9o3vveJET5U8",
  "key23": "5mo5keEk4dezLy2vTWJU2mBpbZjweh81HmoDAkigP6Aq6dcR9pHpP1eDC32npWC7jdzqu4QdjzqGZspHVKzTiPFa",
  "key24": "3Wt5jwX1mmrv1TzV1f3ADUZZCDjMJoEtmrxE67UcFETZn9eeuaYW5f7whDEWv4AGoUyxFQyiyShssS2mgxAJoZWh",
  "key25": "4GXc29mSo1ehAdkeQ6j46SRh7Z2LUeqkAU62GRToERfQMRj29vsjxCXdQACMmLQwK3LBASe25TUj3chSDgf5Rpnw",
  "key26": "3XLd43UVJJvyhgvUHt6soTBeySsFS4AAbenVNQSMJWUW8aK5QLih5BHaRtvDhbDgFwCk9iawUpsqCCCqYqALUSGg",
  "key27": "3WDAWEg5uUANat1VFsvv9eu7V4CZvprSBvXTmY5AfLThiy6GqNnRs1EoDAuFLdAH9BUg7C4yPgmDGi4NLp6XfrP4"
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
