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
    "2MF6kEf88nEQjcJ1bEJwJyYYYtswnoboyb8bGnpBL4KwS4bpaeeNQoKunrXhXdF84dyyVjRjQSEG63jyMcygHtpr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aMvNtd735dF6evD7esTvxrzxd8663nmS2rtfMn2YwDT1ni9nXrz8BFAPFBCyaievSM1zRaz4YLhDU2PEhnAXQfz",
  "key1": "6xFDHPqVzHWuE18hy6AtU5ScmK4co9aUgEFTVMThtyeBXJWZxLXV8okcUb3bztdLWqjVJVaj7d2d5q8nJyjyCti",
  "key2": "4jwAJq82GNVUbw1GCXkTcUkWPNY5bA6SWAZQm39NRRyfv3ZhqQRsUvD6vQiGjH64b9EG7B23PGWpum5fsa1d8dXE",
  "key3": "g6h6h7EpsyqfR6BARJnzGCxQMwfK7yWsUmgyYudh1ZrmvkWRHBZUdjMJDAzmHCJymmogdwE4MEWKUCakWURqpKk",
  "key4": "4BWFKtdJW8QepcnrxyHTH23dUNWFfR8Mdrcjhe3qjsBE4bxTazHQhrD2UzzbcMN1iAagVMAF3s13WmC8BBvgUbyq",
  "key5": "343tRBoV4tgERvbFxSXwoJBay8bqzUFTMY9yg1qujGoLCs8SNPnYdWbUMs29DxbQC3Bhiyz2ntfbSciH34yxjLGQ",
  "key6": "5gCB85PwnNHUCvEYZxB5QnKBYYvVt4tWU9qw77arNo3fCFv5Cm826LBZ1xfKGnPoyNAinBgcbTaAZKDdfyL81bkf",
  "key7": "PHWvtmFbaA6to3c15BWPMVGrd8v4AcWLYeoVRsu8UnLPoKzSPgfa7Dwavka9UewFSKjJhEr6U2QjK5rcwtZSphn",
  "key8": "3MZGQkH1wmvaaF1sDqszDQUG5Zbxjrw2zaJJrwt2JpQYeEmbtD1R68gioT7PfVSnKdrVxXW7aT16kLoNnTyJCEbd",
  "key9": "2imc3is7vUhrA19k6YRhuQCR94ej9BezHgCF2ywzUgNvs11DHFE6fRVburhScSUjavvf4DirWsEf1mr65LcxWpsP",
  "key10": "46EsFWX4y2bkfTAm4S8A7WpLBmwyf53jWEyTLy3SZ73oKaXg7bbP9w4u5pTuKEmuY5vnt8SGqjVRWYXnVeXcFUjb",
  "key11": "58P7BsDNoTyj2onM39RWbvjwmaAWe2AiSRrcvAv3KZGLPYDwyXVyd5XFksat2UcUBFZLFBx7Yr3mnBEHntzAhDT1",
  "key12": "osjrGzkmsUHCJykwCFEKvY3CMTAHzjz5a8QNT49TBMLJLxrVvesu4d7XMhWd8Mci4vAYBodRBW9oAyjCcvLmhkT",
  "key13": "4mjW1YiY21PzjodF883NdRyhjnZBfeeKMgECcjYTMzbRTnj5SDuVaW49xJkeonH6CmUK4jMH8QRGsY2ZgKMP2h2h",
  "key14": "kUeQSzQ1et9TLX7CYWdqBRkibysNkmUm9anP3tr8ZmaLLdASi83c19iu4Y6MDrMA78D9c2krn8gjKYdUAs3GUTF",
  "key15": "62qWJTKSW1bG72JvqrwzXbVWwuUxRuaeXnuBmvaYokbxWzqpugsjqUbDe43AV4njTh911axZidJrjFc2qESTxe7U",
  "key16": "2xDnXLsb31ffSzDoBY8Ku8cHWc6fg4DpypoDQ6ULig33KScmzNWHRAMRb4836h8uDhRDRHvsz4fQ4d9ehhRc2oFK",
  "key17": "2mYQXyrM4P5RuqnKRLd3fGAadMgURjzjWm3sBt6Vj2ENSnAuyCUuSXiiZNq5DSCzYVvmDSqAN8bH5fJXsKksbtcJ",
  "key18": "GYmfSUwwsyBt33hxqcEWcbHmKVFcNeQDYh64dV5S1nJdJrqydftuA8Tz7JH9ymTiDzVmj2mBsxe1p11VSAFBK86",
  "key19": "5xxCFAPqYY7mfSZuYqbPKLnKVijXTr3VPw23qUcGkDkUYnK7qrvUkCYF6tYD42c3jqJNfeG3Fgknu9gwC3F9jCU9",
  "key20": "4ScDTWa4wXZqC1qhqsEmi2Bc2TGPaytmkjpVZnBe5ZrsP4Sam8SQH6RRXXcNYcD23KhG7aruie8K9UGCi5ermTVW",
  "key21": "2bDrb4Lv6EzeLmjQ16oz7RXbjijZbYjxskH77jpqy7HaHhU2cceEUh7jrECkiY1BfxWi3GKe7zDYRbuHwVbP2L3u",
  "key22": "3msg1Jab1jwDgSKDL69nTYvvKQxNtDa1UQSyXpo4GWB1nk4BKNWC5gktnbJTWHGpdEkN22FBB9fVNioU93VmC3wH",
  "key23": "22XYk2gTwxKcgjhmjCCRpBRarKKjE3mEQt5FrQJUTMueN6ZtHHYeMb6XK8Jf9LCME6irNh8WQXDkk4Q1XpS85kTf",
  "key24": "2BJ7nSrz7EPv5khWSowN5PxgpUcaMTDzgSrN7kWLzhGydYRPat3JfHaaGzcdEQuA8FemU4DCuoCsKLCSnRBfVuGD",
  "key25": "2rHPTPxp4GgZAHk3SMAG8E93oSetxizR2sj2Xi6z8JzahqdGCCJcsEjJ5G49WVcimFdzsBqav5L6ws2X4tENabEj",
  "key26": "5ZHmdj1G4PXfvTisFLQTPkhkpGZVqrhPdxCXUkHouPBCNtvf6iWhjwahSHyC7Fa3TeLCjJv4GAuU7jT5Uxo1q9Hi",
  "key27": "4dXUfBmoYwDYKMaczJYVQaAUEJVMRqCQLN4NJUk4UwNh2D5cfFjKR5SPjRGnCZJsqSVwzdq4R8Yzd6ov4kiiHWNE",
  "key28": "5XvfgcPpLEc4N5sWqx97f9v2KkLsh75SKF1xNDfivajDoZYd5YCxSV9w9e34DM5BZ6S6M5Lx8U7yfTPjpkVMHvoG",
  "key29": "3WaMdmH3ox8YVHyw9p3qbJQX1zypTg4NxAooULcKBEujzJih6JtcrZudQiEci18JEgXsrG1bAYgXsrkWiantkkiD"
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
