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
    "3jTj1DXkoQ8av9oxCb54iDh6rdo1JGwpKfGTpTo5cMRM9KQe3qU7uDrr8gy7YC6R1ccqVtRuAaSoj2j5kqWyGtk3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pYgNVCSm1F5h7xCLvHtzLsdtRb4MwYL9KLiGUNL9ikf5XCxbpemy3FuNZ8XrvUH4QtpTgGoH4F3wGWGRGL5rjK8",
  "key1": "4Rs2tm7snEpaRBeEYW93uVUeEcTEpNAXjk1bmfRyqRtVw4Ljmsh2cw54QsQMYhrHjMwoqa95iYtBhgHRpZftV4DR",
  "key2": "58fPqSG2tyadL5GJF525TMi73cW3EeGQeb9RDZAqWLt3knZBLGirewkW151uCVmqBHPAK6q1DYXqJUzBoK5CKsjx",
  "key3": "3K81VoM9Gr5y2uSF3TyJWs34NxhoWEQmSzSAFVHtaeDR82qQpc22Gjb88E756SdwqT4V4AudDwQJ7KHV2rjfsWcn",
  "key4": "w5NtCxqfK9jNSyHy5yxqDyyFjU6nHvMa6DHRK8xAvW3zYZcdDevTGH6VKJKfJhxA4gBzQW5b1iAvXvfctZ3SNza",
  "key5": "3wNNACLZTqJu1zSaoPER3ReZxgKFBjKnTChu77Z2iLEdewWJdYpJ3fhvp5k39LHK8iGMaDRHfUCD1sS3YSBp9DVe",
  "key6": "4Hruz3MAtYCzci3uaVYK7XAYhv1F9Pj9ASRy9x8Cpfk9q3cWCR9FSELsaUiCNh32JbnTmhLKaK9fkKNqKnmVVQRG",
  "key7": "3gMUrPLnY7jjy3UPWXTdLsbhidcB4v3mi1C7d5WGtELffCj3TpQDgAmJz7qXcuzuQ1Gdvc9eA7PUY65UgY5HiS5R",
  "key8": "kBQZb5F4E6Sxyri59d77ADeJgBCzEAhahbDygyxf6fScM54yXqriY7oKCAmGAgfmVEnYeTYJ9dVRYS356LNQLh6",
  "key9": "39WPmYy63oHpbic3XiGJLpyvc6uWv7BC5Lx3RdjnK6R1Tgo4giSjfVZNs6fCC91ixmuU8tkKZ6J6BrnGiT9SzD1Z",
  "key10": "3kx1SxdvGFatsGiTTF6NHG8A6mQvc6ABhz2wgvfzH6cXxS1EZySWc6q31CkFTeftCBBMxemUBTJsRhG3wRr82nb4",
  "key11": "3QF1YAF2pSyFGAda43nc3qDpJmztTKW7UZEdr8zPXQN2D1fqxxSXiYbexuVAYVTdEZyPuUdNbcqCH3o8VdfTJZTa",
  "key12": "25av3BXqQQTxEqLZKXSpy3889XboRYakZ7inHaCfnaLoMaei9h2DotieCeHCXjqqSKZA4j5n4ZcdmPzktsuUd3E5",
  "key13": "3vQs7nJpRgFtFoBsVg75MMnnmwsznEf3JWfq8r4fQSYxqD4vpbDKUQeiyFynhHAQW7WWUxcxBWbUMePFAYUWjii9",
  "key14": "61Y3Hrdtw9fK7ePCGPHwtW4ZdHp3XJzBZxYiHCqYdC41xmuKGQfUwSxMYRwb9kuB1ESfyQ4Y7Xbey42Hm9BAtZAN",
  "key15": "2pjQKAHZhbb5vKqzk66APmgg32YNMTtr5HV7VbrWnJNEpEQ7qNQst9pSuYdg2sFro7nkLmeLGDyPEShhze52YAas",
  "key16": "3Mz8PwqfxoKo1RRTTcgPepiCgsxaCEKhuEbE6FkfHKjCNdS7rLaf4XcD4ra3RzfwoQqw9zEwwLG6CQX2HQ43kXxe",
  "key17": "5aWfi6ps9AU5HLXK4evzRjrywQUepN3WCdaJJwQAr4QBJkVKRzdZ28fV9tXiVNq1kFrjC5hnS2pmocrK1qQJpwuo",
  "key18": "3g2KKXnfb56FirM7M3SCTfpCeeLV5tYMEVgwPfeTmKK5CeLqJP5VomvEQ4XrXZzU2Xsd29wnL5cygdibZ9k9Aq5H",
  "key19": "2bNGHCKwXCr9aKgtvkqnT71bdQRWpJik7D43CEKh35dnnWMP3CM27zxGWoLhkAu2Azg9ZkKaeMuQ6i9qu6eRDeij",
  "key20": "2gXtbTknpTT37Cqv3CdBTPfN2NxfzDK2c8ZxC47L5ckjAKyDW6Rc1DZcEUWub9XAYmzea8URpp9F79F7sZaTqC9y",
  "key21": "5BkRSpR3qFNdi6th8rqVC73RpcFDBx6tZ6Uk1TU5E5f16VsHy5Vg7P1BQCmp7kfaSxhK5TvVxo4VuPqCxeQpUvbR",
  "key22": "4HQKXNk2wsgaeQvBHgLkBx7bRi7kCdLkDWQEt4wy4nRvwCyZ8TtpFV6mabuCXjfcomCVAkAvz1UjjcuKJuKEucRq",
  "key23": "67CLk87yyvct8MNuqP9pgBQFbzTqhfKuAqf6s4EdWvUSsbDqZvunEKyz9CqgDc71yYomrmWC8if5WH1CnNyeh5GS",
  "key24": "3qHJsauRQqCNu6pyztu3V1tH7wp8GS1Q9WRZB9thJp3bgoT628EqFud6bPDKV57bcg6SiMxiQuwDwZf2spKKYYPj",
  "key25": "57B3NmugRyGmFMhh4uajMxNSNrDBDbebuTpZ583gQsYB7vBHfQ88vUasWTpVg6zFUn2eug17KVyvDTyqhw3NHJwb",
  "key26": "5G4FrhfcuuHjhkCu5beh29tnjq6cEA9mgeFM9FdjDohZBQiLM3KLyRaatt4MJ2xC5cPaJ7QovQt332xUQxQwoved",
  "key27": "2o1dGHyvTUSdt3zgYFQHqvKTnApwcrYcg6JBZZPUVwVytRY4VMXb9PyfRUyBkpcCuJ2CmbGHJnfpAAo46LwNEaDt",
  "key28": "3xC3fxffcBT1t9cThcLMNFrGd8JvGocNsVYoZ5Ay1GJDsN3pUtRpttfUPtF86ykdeCSV4CCruRsfZtrEZbSydnB8",
  "key29": "464wdWAmsdziBoS13sfxG89ZcUG1jAQguemAfLTCfn6jQwAMAZKM3QdVaWZ5xyLTWaGUx4gbuw3yoaDiMCFLoyTL",
  "key30": "3igK3qWFqC2hpYBS7qERy1WJZN7NCGMMZhawiBHiiJqBLoQKeHXdPCr98XSo4dpDPKsyZxtYVTQgwp6NDcjkFNyB"
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
