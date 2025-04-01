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
    "2MHxfB3KTQmeEWBzdHGPjcJH3wC65LUz2crcxHtZuETtmHXNNFTCGygEsmmbijjp8FsRFkRzpeQsrUemjQTgf9tc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66EZreV8FRmk5wNNBLHfEx41kZrHVteduFCnvfpNYQ5ejAdor2h9RG5JLQJQ45WawYttjGB3jExTivwPKBDzrVUf",
  "key1": "52EmicP6Qs1aiDa3ANMEmMmXAqy3C7hKqx4VvqsugU623vSDcou15gmJncG5Vs23ZsMxmAVQMhnHswJJNB3Kebjs",
  "key2": "2qbJuAJ2SyMNfgKSDPdnBSX6gCPLU8NUYDP3KvVd8aB88snWEec9VGH7Mcj7KSnXjS4Kk9gXGdkoH8v5pxVrJyGD",
  "key3": "5UyyMRjEBgXbmfFq4umNNHG3sc4H1HQoTmav75GNUAjQtyzCJVNDhpbjY5MMNvjSDAXGvfFmjaTtynJXW97vKWBe",
  "key4": "2zrZEi4RSAyPdy3nK929kxzckowyGpK49MhLDGtUihE8fj8kR5axpQ1UQyzPXCuJ4qdjYSmyY4W3uhBzcWDZU4T2",
  "key5": "3czn7cnaA3CJtB6hraohrc7FfLqqgaijgsyuN9p5iZzE4K2Yw1UDknQqNyQDZF8pSswT6cDY72da6sRJo4QyGFZk",
  "key6": "ZW4zH58dbsFuGZR6wEPzrtUJM345pQbjWyoqMyPGsmDC8ifNShSkqSwWe9Fk84kVjYPhVLoBi7iMwxg2ikauFBF",
  "key7": "639BMN7YFBY4avspWzP81XzVssbWgQhV67bgASzKw7y8XVW12Bp3V3rhm42B7F5M4VLs8E8ywnRWk5rsgBgpuwue",
  "key8": "2NV2wWNvh1BaChAU7wwj7LM3KhDfpkfyJwMC99MsUTTENanEUJyGF4sj5pvFigax6AqgNBMDAvBy2iAoorcbx35K",
  "key9": "2cJjp19GhyRg8J4Bcgmh3bMd5cw16fBenoURqjMCaHY63PmrGuF5AAB7PPymdesiyiLujrxhWZah6e4gcoRujRV3",
  "key10": "4CkKmyW2SaqsXLYMjrXCm7wHHmgBFZneYchomTWRihX7qYE5Xw57TDPLGL9MoK8PERoCaomvMawjPx4wGgNg2u9A",
  "key11": "4iAoDZ7iNZSzDfKCsDaxwHbr1tkE7DDY3n5A9pPWeQ66DkNJdpywuWvftpDtu8uuNKx1KqGo8a6qyWwX9twz9EJy",
  "key12": "3HkNz9NETBK4QejEhj12wVsroa6kabJE9wE7d3rQmK7sgmsyfb1u9A4H7kZoxkMoeQ9VfaqwSoHsXa6FWR6rfv7z",
  "key13": "57qtgxTL24ARvTQtyRNLSjYkvCGKRmPakKe21YVifrMjiFaY87Y6Heq8Ae5VppzAa4yuEq6CiTsHhoKnaevQpeEg",
  "key14": "27HoPrQubaZjTQJ2ji2zc2oybkGNDovewKFaPsDYuX1SFVAZ6BLaiKFatMtjU8W6QrSst9KTivxprvrVGFa647J9",
  "key15": "3za8jZCoCu2FsQ9PsTR6n4phCBziqgpCnwH4AA5x6q4jw8v8RhZyzWym2jnEHh9Bj7tRdqbkUYZykSksvVPDw6EC",
  "key16": "4pYYtM1oajGF3meFFhGHdNq6tdv2r7tT3SDvS3hZqhd3W2MeEDPfuGRPCzCss6YvGw6Vmbqa29u1RtvdzB1VSqM",
  "key17": "5YWMW7ee9AQboYiAaAyV5VoHGbpUaTHXoHuK56FuTHQfabVDp3fsahMgjVsj52MK5ikYfYYqKJ4pZf96BxC1xREQ",
  "key18": "3mvD4TJ2fq4MwCvs1FPw1kVQipFMtC4mWi5noFDSCu9vTmYMJjoqa7QLQ65jRGdWsQ1ssiPK66eW2HV7Y2dZc7mZ",
  "key19": "5EVZikV6X4kXPnsHPUZTbVoHStFnVX3sC8WfFrEs5YApzVeXo8pLUrad4kNKjTrBDuwrrFzpaqA4evFhZQJhh4TS",
  "key20": "23dkbyUD9Lv3Ex3Mw3eXPmYtiKiJdypcRjJLBcuqcR6oyrXcmMmCRDMrEq6LDCe9SqV4rLg4rHkkqE93YmkeboHP",
  "key21": "4FAp8YHfgSAJFu8wx2H81AE8NJyZqaaGHBZkHSV7hw8G7YyNjCGn2JPWdehgCj4ALsjTUfPpsSkHq8x4wZezPi6s",
  "key22": "64WK1ywcGHLSpJaLZn24MsjWd1aCbp756gMyi4YLqEgy6pm8FYFsyUUQ9pULh8dnwAJLKv8VsqFhwb4Htigm4Pe1",
  "key23": "3VJBFV8N8AQeaf6uc9311zpkC5fE6mrLKHsAsnxrGvDwN9Jf1vzcCM7HSC7F762ngKG9mLttYAcdRzQTDxpVvNDQ",
  "key24": "mwRJveM1xpXyKa4Qst44RRvnZtHVqjwCEbQha7c7rzmKMHhBUt7mmgCJGqWxTtdw6DXzEz5m5y7gLiwr6S2y7Cq",
  "key25": "5vszjHfpbni7tnPsU3p6oFEjVpjXh96ELV5ebE6V1mjoq5AwVseq2fnAwvFEAQGgLrztZnS2mnJHyzNhPHYDeXJE",
  "key26": "5NcT9FPNjMcG8k31axWvcWrbsxQvyeU8LU9ogERNh1oz2TpAA6uLBJj6X5saXnmxvCTRVU15jzAEKrqwavwsGf2s"
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
