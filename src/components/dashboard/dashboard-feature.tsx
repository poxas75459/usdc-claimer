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
    "4UUBKa5Py8xMMQAKQhYAkJL9guzeTjADXNmtHcCaPzWYxcDtVaibhg2UgoEgczRoYghXZLbBiu2DFo99LEDEgS6z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45HBDUicof4gG3G6MkcgZ7wH3mP1vGTEzwbUFEuNTL4gGkQyji5Z9SQnr3xczMBeqNqhZWM7TSasRtg2e1Fhx7s8",
  "key1": "5fGwpe8EJQsRaobMx24CeXNvLYqpRXjrBkRW5GRnHgcuMBceXnC9aecfqJKZz2Hc1a22ETzVaxBiBXfPkcs1fkpG",
  "key2": "4sM4hKrp8mZkjDFMXnoZ51WwoBHLzHbv7nPxuRxXwY7muiAKTj591NQHvizrSceYJCSgGAukF5bhKjz1aK5DEwtx",
  "key3": "3tjPtseTJfsDg279TJM8dQ21poEfgJjZctspeq4rcuUPcjg9mnQ7DGXGJtPk6bP5cgXtip5svzchHLw3PuvJzJCs",
  "key4": "4B534pohN8BA4D82o4j5LcxFvJMgCgXFRaqjcZoc4eqLdc5pjiAghuBW2wz4Z1sggP4vMiqehCAJcNAnSKdhtC6s",
  "key5": "4yGkYQrGkiCQuM8sMcvK3XuZjr1Rq9ApgdSx2s92M8zSayXxQj6ZgZgZGvCLewoBKV2g2HV7HwcCubyQGucDGVer",
  "key6": "5S8vxASDj2iTzndhyJq5uMbUZVSscjTpNuZJPmiLZPgxpRBEZUGtmXz6jM2W9BaNBUvMJTQBYewBYDCp32z4anMK",
  "key7": "3gryqwUPwxgi9hV5m5FGoa1D7RX9e34MnpsKozb7SD3DeoHhdgAuJwurb3XwKdLSMBJbnmr7EbxG6sZ2kM3fqDNV",
  "key8": "5Gv6jyE461CFmi534usvqw9fyW2r1664orSJ6e7aVsvA687SvEFKz9ZNyxCNmNaBAMojVoT8GgZWZHm4gmLs6JYt",
  "key9": "51PjJDUrrSSYgBGxuqDWuYJZQXBMw9fEAkDqfRkFrYiqYSG963XgpBcEAiGZEjrnXdMTbuUMpaMjAskmDEHzyMcW",
  "key10": "31kepiKzeohYvjnpqgMBSgySriFbhpoRaK3G3T3JpgH7mz81ghFm9vSJ8TYhGfta2Zaj1hpBp9sM9EJZezofTMRc",
  "key11": "ft8eNouED4GxRA4cA2iXd1cSH4JaaaWB435bfTeLqf1BABjCNRJLVZxMrqFzUgvK76McLWaTtBMXZjid4y5Z538",
  "key12": "4fSHyt17fucZW8ZjHPjR7SgU9Ms5Ta7mVkRE6ymPt8RfoMm7MXFUMM6pVZpT7Rpw7EQfLxE1FQbPAEfW3gckuxEY",
  "key13": "2qEDUE4Uk3AWZaqimmPWvb4F5Emsh9tindTzbTHs1PnQATERk2ucFAWXD5ju289By922GAfnmLbafNe86aX7gcTF",
  "key14": "XaiRMusEHWViEGvSUEcatoJhzFHtWnxZF58dqYFMwZAH1MC6QUeg9Ywq7MtuBKSqpjBqDEfC2EdA5XR6UnWTt3s",
  "key15": "5jcDoZx8Vo3dxQrMnNwj5RTpe1ZMZuzT8ae5tXJ2Dm4myALv4BvrkydMZs4kHZ1HLpjDX85yc4zgDLNHAh5Ctv2A",
  "key16": "4nddGupmHGo9aKgikbEXmuXAGthwNc849mgsahKf3W1yGJi5srd7K42qQtE9EA4knfanZy1xzgxq3vgjTpmbSVXL",
  "key17": "666Pj9NWH2qE2u4mGxWJgbVBUT9cSyR7EfC7VKTvBUJkNv3TArBzq1dLfkSqFUqPo3fTbYMuhQ3jcNBNaqQkv7gZ",
  "key18": "4ZPEus4b8T93Z3tXVmTi8TticUkDcXbrxeMK5ih68oxUuESrBxcHaMXS6qyXacRi7wz61SetgG2XGFYSoNqAnXMe",
  "key19": "aYuAJmfkrqWBN1iyTUXvv75nvPfCgPy41DVnhgDUzPxWkTLJpw1ai99w3KmGGh5Cu8uHhDkEwtf2hTJvRxtGXQh",
  "key20": "3WoPx6ZX57AwCrnR9rUTBajrMCzj8ws4NqKiAATSVQbJZPZNurVvbdRGBgpHZqm2o17XYzovsuaPiUAuCMiCVE21",
  "key21": "3TecPdqh2xPYfLqaHKAPHXcCkmV4L8oHKKnkAtPbyGFpNMwVwHYzBgHDBjLTox8tsPYd5SfknaZW18vA6JMrML37",
  "key22": "5jvJJbZdmgfQPAyuxWm5xUcaWESCnUuG9A7SVai33eSnmac6emGxtoeDTZxNgQeUK5ReM67Pt4hxGdofzgJuLcWd",
  "key23": "4E3LSwreN6KVcoFumjPsZ8aBpW1S22DkvciJaX8qBC8juVoUJthWsagUrY5RNAn579744mTLoSy5CkaCRQs8NsVs",
  "key24": "4Lssingq48YNKtRKvSg34kqZrpiSprPjAoeN8o5dY27TRBmyJm5v55qTHR877dWDQ6nwphaoER2mdaAwPBeBuG6w",
  "key25": "a2v7EfYi77ETYPvm9uaX5oZghRcYyd9p7SHMbGYR46r8iWq7DQw2RWmJkyYVBHLdLaJjGHupJuQ6R1zav4wdAKA",
  "key26": "5pX2kzkNHsXorSmYqfUFEsqqj2q1U8qUBymcqtj21EXnQsrVY6FD3bqoxahtSuoJtHWpftzNbFH2jJE9JQUeuPjs",
  "key27": "3ui2XpmuHTFDspU7AN5xk9myUM8FjCUae9Q3pUHXLD4GqqEmdvr6GSHxRBFmso1GsWiRXRXLLiLYzTuzCJqpReuF"
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
