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
    "33ch64Nx76uSyGKB2bgyLoZQjkae8qwSbUHhGUUVJPwiMCm8DWXySVbZHJwgQ3ig9BrzJCsaEFoGPDP2D9K2se7s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U2wqe4sPpYH8hDzH3ZRRv9yNfeEErHRHANeL26DTB7Ffmhpdu2CWiZeyHaHYxf3WqzYhuSFU3id9ACDryKfnRHR",
  "key1": "4QqT6JMBP6U6ST84UwKe7SKHPAJkBb4vbZatPMnmW2D2PqJ1VwviMbFoJ9XoWjnKRquwqdv7EEx1Ebnfj1t8wJum",
  "key2": "4GsFm8yCQz4i9cpKaiUWgnft2i2P8QxMrgm4ELkXgCSqjEx4zF7GEUUzYLXLu5NsrTmSThtDUgbGgmNfkodU1uUr",
  "key3": "4fnXcCqaUev2YwPiuA7yNZgo2gweRsirHn7dnwgT2s6SGDg8YfdXrNFwP33UWMb21SB1qydGiDoFTPFJy96Ayse2",
  "key4": "Sn7cbVgexHv7oyY747Q5wVyAisEde9HBsnt3ezKRKnE3o5qn51o4Do6K1Evj3Ni4e5PUgw76o58iabbiB5nLuNe",
  "key5": "2B7cWTQu2DT513Ax1c5ovnWqjsdDqBKk3x9zURSoVVCz9EWXpqm1SKtAJVWSAGSiydggZDrL4RW8QakkWVqZH7mk",
  "key6": "D9bKxANXh5gJStD4wT1353UJf2dUcF1FzxEVxcgdfQptFJmT3LemYkEeMqa1qrga3wkyeCgaQ9FVdbFDtd7mLiZ",
  "key7": "55NS2Bh1txn4EvaHr1twnKaPGusLHNVKEQD1kh3ZSKWnAqhxj1dF51tPEEs7NM3UK4h368JT7vPkfBtTQ2AyKNWs",
  "key8": "3ag4WfKwFDq5XkYoTK9ZNdTqWUDSrHEb37av1sw9UDFpWGZWghfSF4eat4t8P7rNbZXfLwUUU4F8DuyCfcmpXzYU",
  "key9": "JGf6DxJanu2jpD7QKxLFLTbVfoQHVguabCGko6eWxRy94NabDw5DoTThgzb45ZPbtymhb6TXfvCPKXM56gptp83",
  "key10": "3HAro5H8zDbJYmTXkSSQWRewDQoM3P8EWyNceSjUX2pKKRgQPjY784bcUWmXirXLWC3hnhzQUykqt7AwXbrroXra",
  "key11": "59Bu5bN41NLK75TvJqAB6fJbgXDixFcDqqQD6YfD9e2oAVc8X1oWTELjqxtBuuJevRKCJwR4Frr4Zp47k5wc3qLh",
  "key12": "2y3VK9U3bU5Cz4kHK9Vz9oJQ7KtACkrpBXc3qhd1RgBw9MgoHXaLgnybWsKWvY2fyYJGZZFHHiU27BabAvkX8goS",
  "key13": "JfKCiRLbPyrhuXL2HGTkNadt9ZBLwZ5rLugdvXSt96v8xdPuQRccZANYHT36Gia5i9JChAw6evHGTeVFzwoJvKt",
  "key14": "3DtDKf5WcH35EzyFJp4E9oFdxe97HUjgWU4AgJ4pKioENCdDyg9UNt6Fj7YEUG1M6HXXtpmWWWVwUkNT3rxSuPmB",
  "key15": "3U6bhEBfAtWayXBHErAFFLaej5SgtoaM9kXDfm2dGhhWfjWwKj9szceVFAkLrdavcUQJroZNXDDY2A5CeMRt3mRs",
  "key16": "LyeGV7hDKwA2NRBRkyLimHYwuT8NJPx8rnVTj2XwXJM1JTdJ8SPskTNPEp5AZhDYKpfCMqhP4A2wmc11raYyjch",
  "key17": "5kw7fkzq2Xdt7PsKS1ueuEZAACU9GZBWrbbxzNK9gCBHhSxZRhhKKRvkVomAZP7mCappqDyqw2J9Jdfuj8FKEfBS",
  "key18": "2dmRXnchoS4sgqNK4oewnhoCcXZmELrLCgzjyVM5o1KtJYmS8daj8uf3TaLxJQcAPFx44jwvn7yd8khottJHZjuM",
  "key19": "5b4sQWg4mcdrMdzKMTsJ4um5mrvh2SNuVDbzyze82ehsCRmq2e6gwiZfTqLpJigUK4zGt3z9tRh6d3bCpeFX1eQm",
  "key20": "2tmiEAf2BHN854K4xHq6wf8gZs8qB4vbW5XHA4pN1Fn3dNUDAGBchtndyB3gVSrye5TMLx4mP7pfvAfxweR4i4vp",
  "key21": "5cBdAiG2fExSN4nAWjQJN1B2XUQRdE3EM4MpeSvcUbg4jHU7nGe25QPNQcabmboayHCy9zszgjzq2pa84FRWkSsi",
  "key22": "Hhweh7SxUvQJ2tGMr9nX58EMF6NjTm5cN4UvvPktqRmYcarQAboS6EetRbHxQex2xnh5GF3eg1TsgkusfHsgoi7",
  "key23": "4wM3AwiC1TqRvjrkRynM7wW5dc9TxS9V3D24JHPsvKmSnmyZ9tKHgV4QzGuD26uBxhv38XjjCSMYkd7VaRmLB8YL",
  "key24": "3SQf8JQbPVN9CP3y8ST3GE7KuezzfKVKZ7rZcHskcPcd69ebtzLYebPY3GJpZcJoCLSJka5zjzgG3KLfoq3n8soz",
  "key25": "xcZa2pTCPubF8bR9g416trQSgXpDRXxzBzkcrhuy38Dpp8US5TsDUhNsyKuc78NQctAhnoCffDdu6G1LUWgLPrN"
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
