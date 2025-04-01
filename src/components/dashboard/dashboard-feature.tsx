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
    "51zK6a7nQ1LUQYgB4Vyvz4MvGmkyXYx2bXCHr1fJEXWT6KJBgHwtkr9LMxUN7siTdPaZfKT7QnKS9giZpS68DU5u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47g57MNjQvqnUrP7LCkzb6YNP9u4usX9M4Kwh4FiqSJChqpAtRsodeVjcX1Q3TBtGrq6hWyg2ZYkC5ad1XB8wymv",
  "key1": "3aL3H7RY8u248yACKLwGKMTJnzNu4ssHcMdwdrLhaEzF3NEGfsRbGfiDs1t62GXpe6GvDhz7aMZFHD5NwLmvv24v",
  "key2": "3JRkqNSuRVEa6NBeHobW5DyfShPtVWmSnyyvquYZgrWUZsAa7MuYkxGzjaZ8JtPKYa46cSoTcpJ42276kcumEBHJ",
  "key3": "2HSqgFi2uHDTHQxeTU2ddCsZWK8L7Wucyc7jBb8538BQ7xV1z73oxSDZ5xzFV7PPuAd3f1cgKRsXPcCA4nBPta6V",
  "key4": "4askDUHzb6BMgY8mmAtLMoCBXiSiRq12by7ecduN4Gn1EppxKz7t36t2ZcAwVF1gYiLaNYFy3hhdsa5ave8gFoqC",
  "key5": "2KQd49Dx6BtX2prUcRGN4fKJ7xbCRKaVExFgf9DF7Zk4Nfxpn3vnp794K7dJkZvuyGW6xD1vyYMwH7KD6PEQkHhU",
  "key6": "TWc1up5ZZoikmfDFjAjoRvfHKgozPfEEBCdDEjFpsnGuNB48LG1ckwxhjY8NPZLsNs7zB55TL3xqRdvT7oYtDFN",
  "key7": "2k6kETyL8xmBpwVnrmXyieRWJTVVKr1G8y1oJqQA9CNTeTtUcb4YwUqNC37z3Tg5gF2TSAzHfMb1zKq1AJ83kze9",
  "key8": "45yBAEWYjT2hDHdWJdZ9aYeiUv1F55aPmadAZVMm9UqXsGHZ4gWJgDSMSh3L8obqEKtM6mzVpR3LzuCsya6XwV3R",
  "key9": "24mZxRTfvboJZjg52D57QRzF7ibrN1b5Z2NbBY7f8gADgpaiX7fV13qQiyadjRCxvpgpd9pqAdd3t4ipMpTUMomx",
  "key10": "2eZ7DfJhqabVTfnyWXYTjcDitQjQr5yDBc7AG5i1CvFPNMHaPtCJHxVruFR4eZ44ftAR6oMprdVyszWJuftrkC52",
  "key11": "4RYkXUvZx86iSNZH79DPwnUnA7SWbPWopuJqYv3LBKQfAdj8QvcfMMx4pMyxMvPCqobQ5JzTfJMrLpfS23qWwofA",
  "key12": "i3VKDBbcB7kvUmyDTy1AbiZexDfTmXxMUYcn1PTU2ZJ24HNCyqkGhEcWanYbsE4933QagYme32JNKS24SrdodDk",
  "key13": "4KbLez9Dzk8MfoMU7qB6vJHaMhuvdJGrQHrwJxMe8CzMtrpNtzcMPnqCe4cFS76rvZDuBfGwRyr3rDka7sMWZyS2",
  "key14": "4G2Hve4dNTmVya7PRmn4XmPHwnmmHhwJok5h43FEruddmhMeuuahSEDhDdzk7CUW1ARy9WUxTs7E2bHmWmfvMSHB",
  "key15": "3aisg5aDCyq9y6cqZc1sDgKcaoVYAYAsZ3YsCGA6AhJ2GhdHdkG8own544pHh3ZZ8JMVqWxWuCNzDexhUn3uXnR6",
  "key16": "mwDKFgPWccdx5F3G9CD7iJcc6kHTdq3Knm58M5oVLzLf4suDS3Pc2ptk5cvEzeoL8j332ceMkWuKDPQ5vVen282",
  "key17": "4RYAErnSR6YuVVDM5TRvTP5g1pPuWDbBW9AzKaHGSmad8sm4cdQfovwiwqjpaYwT4St3Yd5Nd2oavfHgcfB2ip9v",
  "key18": "4XjLhn4JtQdxAD8aAAz1UU7si2pdXm29M8eByGbmbYREuYMchBx9dkKqTXDsZatZaUJ6V2RFp8hd3uVBEcJbWowx",
  "key19": "3K6QD4KhyiBcEQRbqbmfq5wt4wGD4FBkKnYLhwkGpZkzYHh2dDdBPPh6ESzpmCgH1au31SeSLqpEsGRRtC328rZb",
  "key20": "3RFEftpaRyU265eFfFxXo5qSZ5yyTfFeq9eDEPGEy5EFAdSRrmqxZYh6tF9zNj2A16bKYrMzQtTM8hczEF3vfaWh",
  "key21": "4hJkoncgv43PBmX76kiLLsPpUKUyw68JrSLLapeyz8VJWcCQS3nJEFHMnSM3cccEGk1nx2xqNY5SzBPrdGwKJNq6",
  "key22": "3kLNTCxnDyV51XXzr4BUfBhc8sdLBjgpSzk1Ljnpn2HuAuAT5LhR8s9EQWCfjmTjZq2GrCLQcv3eePaMVbJckmeS",
  "key23": "2sxdLxpvPeC6ue7jGFoM3B7RUVFTDVHVf4xtXpbHcTfRWZUFnneMeMhXiX83rQLUNHty8a6Y3hSr1yA2rmbPTSmU",
  "key24": "53MY2n4fNTS9yqJ9aUvJ1aQoJ2tsKY7Rz4g81qawj397KDZqu8ozM37Ui4NzAr3WeQg3rWxaRDoTBW2Cdmpq5Pb2",
  "key25": "36KiGx7dETYndNkPd6KaevacUZ2jTvQS6nnjgNUSB3j6YzTuPyf9xMfxg9eCBfnPeCbcboJxf1cUsYMVEVR7mdkA",
  "key26": "5KxHiy5FbHH6AcwHYKV3Mvqp2N9s6vfAfCtvNWVRZwVGcN2cKNpV9hCRQa5GM7KjPGyFN2QRdUEkjzbPpyvH7rVA",
  "key27": "dt6pzsDg1Mjrmk9QEnZSAAwqSDHppY84rxb6BJR7W3D7D5rPcmtkoQNMvXX9G98oh8EMXc5LFJrpj39f8LxhYqZ",
  "key28": "26PVELCHVJH8vMHp2jkcHa5b4QfMdZDfe8f2CdoRKutTPbDPx4DzEQn6e94w2QLCi1Wia9oVV8RoBcUxHwhSsZdM",
  "key29": "2xdpShjEHgxRj1JSsQ5RmhqLczJd8ENe2S2BCuiadgBVKoSoxD84Kf2okNn2EMHuZYD1qqAvF93d8yoo1GhzFpfh",
  "key30": "sKsxpGi9FAdUW4idBd2QQBGGDzoJtznWTMtiHFB2wP28gLCmxjKiXv7oWh4tVrcvpf7n8Bn6ZzYzSvxdUv9Tekj",
  "key31": "aG8sMLY5Lnu6S6nJKRrrHYfGJkz2ukXunNtr7au28Yb7tZDBbLRyom7r3N3awghMCuuNk8psiRAH69Foz7aQNmL",
  "key32": "2PieDgt7Lr2EVhqWUr2FiXgD5Tfoy55gu8aajD7MDsRwA9WTjacTZfCVoBhf2nkizP4AQZw6ZEGea8SfekVEhnT6"
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
