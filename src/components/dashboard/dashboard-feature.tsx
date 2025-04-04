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
    "5MarbHn469TqhBokbGZdhEkZGqQE5SEq2YrzEbS7RS4LqvsP8o6UCcykdCqSnJRoCskwo1uPzncsLue4gCRkHsx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F4vRCyNvaWyD7GX3vMtoQJ54DvKPs6Nvhnw3mVS9vKHo1dELMG9mmYLapd4ePBE7Sooy4ZAky1yiFMVQ2Kmiedp",
  "key1": "2CuajhXPn4fNud76CnPeVwdyXX1q1T3a8Ty7MHkJyXevfwFnRCCFCRuAAtymMdwHuEcNnUUaN8ewv4LStcZKHpfe",
  "key2": "56MvHhg53aqpZFJ6XEncYZJEcmjbdW1zyCiQbApKs4sUQLsxKnTmFpJdgAStiRJxMz4mMsvmZQ8ZyYCviubS28hC",
  "key3": "3pmqmcckyooB9uTNTUuBpf4oSqZA19N4cUonWE43JxXt7bWgWfz6A2WvrWVAew8W2oXT71ce8AMQ4EG2oNjTVmWp",
  "key4": "2bXWmUneaCxJA2Ti2pYGit9kr8tjEShqYyhqMYUcMBru8rn2Jq8KXc2DpmDYWGCWgLSmzpruzZL9MbGrzcpRa1CF",
  "key5": "42VBgdgmoppZ6BoAoiYkWcVNtQSMu1oD8M6AGTqTi8vZM79PQAQaVqdzD9xBAJZFbxXTaus4uQHDcsainyoP4Gjr",
  "key6": "2k6XPQRFAV2iXoCCmNUWt2LwXkMBBfMQFVhYUXS3BUBXXQmMC6oK3menU5Tt3vobz5QBFLZtUCTpgGrNt5ZQ2b9T",
  "key7": "4w9VAPppMhvJS6EcayE1Cffzt6pPfcLPyW5ocbRSnrp5UTAB1tsz7tAeBmwk4cEKcMz1eoeuNQKtEMK5UdhjuvQu",
  "key8": "29zdQ56woga1g74Bfvqmndd4M88be1TsuLVaRhoeu24qU2LdhZ76EKz28odTd1CSktS7PEvNreRbfN1322TtjVZR",
  "key9": "5KqCCEAXzJuApigXdR31j6TuMrUMr1gFHudbeRDSQUvjyjN89TfESnRHiyRB7Hy6X8YMm738eXJTsDkncy9AimNL",
  "key10": "5tiXRMGVxhKT1oRdJmKmsQt8sVH5sGWbKorpEKRBbZc6qZFwnegeNcNdqNhk191FSYaUTo6zdmhnisVap8Umh6U3",
  "key11": "4qg91tuD34RCdJaTk1qYT53a3e4MxyuX1BtvSc7LqSg5yUNzYo9viPA87RSM8AnuZpLBtWQXE1a2CtrrXJxqp4VC",
  "key12": "3PM3GytVpgjUaXyocfcc4VZFAoenTah1GpaNtyGkBwGooWKBM9uHT4indYjYfQhM9VDSpx4U5JY1Ghe9iHsBgau6",
  "key13": "3RhCdgc5Pf9WcG6atoyibaeNRjdAt7oAwUFjrzsbbRjYNKSLSUwTdmNTHBea7BUZwHbbLkhvzHy39sY5i1Rzob6w",
  "key14": "3Y7JFrHb1oUXvHYF7KNHRXvcsJ2XRScp5nHLt6tDytizYhJNTueqdnCk2NhGkY5aDjSKprFGv1DVZYfeYcYdvJFb",
  "key15": "2F9g56cj645BczhFyL7UomgAW7Ybyh5t6db66e1dB7mn6ZJbKrdJxhLiYTijG7W8K83GjiGb6cYwrsPfnUouHibu",
  "key16": "uboQPxngLmfBm3fe1dJzGE7kCE13gRZJ9h2Qv9SLMJbxVybzgzf6MYUfDZMP3dYiYKx3nXwH5BqvSixB6uidfoM",
  "key17": "46B7qdRPyuL5nG1gopWArArpcJeVLthJHShYcpZ4ntSYArzhrr2nbGUXvWt25V68NrRQ37GbqrQbUTnPqCJp5VgY",
  "key18": "5rSAuPHUG7ywf36rFyKB9c71fiUVGE8Zi9K1AktA6jWsmJPHSw7f2onxKb4sZayrJ1yj4Bk4KjCXxuLgDBrTWQAE",
  "key19": "2dNcwLujGTjt5gTRP27Vpg1PBSqA3Grk9q6r6LjgPL9tHkRQMQXPsk6NcScWBamxCtSKZQUU4oxErY8VgmUAb1Z",
  "key20": "WxazSUo4FyUZ9UMUJXBMhPd72eX6xDjyLYxLqSAbKxVTqmASwfN4uw6TJ1TwGNCmuJpy57JJ5i958Ce1mx65Zuv",
  "key21": "5g6LJFDv1Ddj1n4bLMP6HUs8vGgRWXCaAhg3eXmY3eevweeGbGzcvNPHGbbikQawDxSTWA356qe49xseZLPvxp9A",
  "key22": "4D7fNCxm1rtbyibb6429yz1yfK6rQD3PGqNjm4VTr9zbW78zB6RZ9nuq8cyRn4vBCx5WYiVAxobpA7zq9CeXvNHB",
  "key23": "26HcJBgBH1sXjATyGa9CNXSPbBPKARLWEjywVQtiaPzXg2RWNSzuEkFiGqLYLQAMoNM3YMk1q296eWnLzj9kYAax",
  "key24": "5gZ8sQvS2bLNgCdnGZhBYfieVcCt29e8re7oHmyAhCKf1zyxXBL51jocRUuxEL3S2bKXvNQEDXCBdZctRWCtCEWy",
  "key25": "4imQ4vLEsTV6HmLoKgBXdgLkJQSaQTs7pz1KCmZxoUDNQbtFr47ZFezgRELRJoFpb8MmtQLmyi218tYuLKcLxrS1",
  "key26": "3RWTsVg88919sk1RL9fw8yhMVjQ1QDtpinZzvAZxyfuTjvACTeoXWp286MBLTGuMcWKwaXdWhusUa1CRmfQuMbeq",
  "key27": "21R5Aq3YPeGRLmjTfaJFhJ3rWWZs8JnU6KTgXa1sus5ELsePKsQVMAgpHnhk5WRcTJ7rGp5cPSSNBP1LqukiLCSA",
  "key28": "23fZggNcEG4MNr3iba7h3BMDNvMbYmPBoanNypZCooFjjeTa6fqohquNpff7yiYSLpytJMzdG85cvPBHwfCkJbLq"
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
