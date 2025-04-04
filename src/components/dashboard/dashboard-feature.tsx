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
    "3DTCcLbTjGuZ2xFg1vKwqnvgb7xQAnqRTz9P5cMtrH9rMxZK6RMmtjaVzjcsYLUQKCfoeWFvQL5nQWjcD8TmvmUe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pFjE4PAGm8sBNNNykdJXxcEwhQk3s9GjDFTaUaxKijvDWJzyAsN71jEZaDb8UMR1Z8EQ8fd4SqvNfoPs13fHCCu",
  "key1": "5PhWmdb6b85qS1jBgz2KEGZ6wvmXU9TaCZ7neQM4CQXTJdj6epFnq115vMtqAFD5UdMvgjJ2naQwAmvVxfN3tz1m",
  "key2": "77CpPdHPM8CMPcv79gh9e7biNkxpq7fXJaAcSu7orB1EJ2JiZMRHnjufWSfzuBrPzvhe7LnjmHbCbK23SCwwRjC",
  "key3": "YgyXgvwiwGx65NceRhDJdyHRBERitjxgnUz5sT9esWJwkq5Pp5am9yFhDBzGjXNUW5XoQ5wHxkUWiVfnrimbLko",
  "key4": "67oZNaf2mi23Y46AmGKeaBY8KTi4Tk69owRAzRWjQpvsXzFWB2h9FDVSVcKoPyHBNLRe64DmrLLbqJtMB6nc4waH",
  "key5": "3Vqjcq7urWfojz1DHV8fPnpWmg2AYujCaexAXYmW49N3A1cAs3f34hXutYxcP1JwgjLKC1Ke72sc3XXrgNCydFYt",
  "key6": "5u1TCc5SUf2wxWe3BjLqKQEegs1hmZPURTRwQwRdEjMe7kqN941643GDpY7tri7S7f6pwb3ENRK8tSf1wsfEHRa2",
  "key7": "SXXiyUTDF2b93c2H6gn3o1rxiVC9cff3VxbSPZUKopQSku5QDyuhqxg65LbCMSUmF1B2uoWDkxKj1RTBoKeTZWd",
  "key8": "38rwKkXqbbxaHE1bYKKW4EhTsNvJCeCAYZRjHNqbqowQGNzCaExAtvnpXyj6JF23gwwrBeVk33MyaWzq3x8k2A8T",
  "key9": "t3QS3WoGhvfkLci7LVsbi3dHDEwQnv5k7tjLjxmw6JbtjF5CuvrWEdqfaizdRR3nNrBj8idd8Tbr4EEZgVpSXAX",
  "key10": "2oz2B2rUKGPN3eZEeUmVdw4rK9ycSkpLWyzJYY8TLtvq1f4V4wQGQ5f166GumKdDgptYhyAYAfnhCAikM9chsEnL",
  "key11": "5Dm8P4EGDwrQ1fUB6MHEVYAZBE3wq2E2NpFAzjvdGq9TQ5gqFK13bdD7QJp2v2JeY3fYHVsgkgJhrgim5NpCWrsZ",
  "key12": "4Sp1yUTG9vfjuoVvN8sdKCKSjVjHg8bhmibHXSFcp1ziPjwsNG6rqCJhM56KHWu5vh8tTajFy6kEDjQvhBqYSdSJ",
  "key13": "5SHX6gYgZYDTDhQCiE5WSxM5eVNXrT1t25uTNzneVZHqtn8PK1YeoEURCQyR1ueEHKcppTABj1ghJTVjgZ1Cahqb",
  "key14": "5JcGAPEB4a5VS9EGBc4nQ7NiFS4rwVHDMVhDE1W5ugRGwhBcmWXUwDTHVmYLpGWSm7ibCfFQRjWdw8yTZBq3aye",
  "key15": "3PTxP459YW8P2Nj9Dt5wZezKtjevecaZ59dJJqbt8BkfofY2SVxUrk9266prqLKCJsgv22VqeK3QpScz8oXih8dn",
  "key16": "iPrhYU5VuE9GHwkNuqxsuZe6hoeMQzVVpQHDEQyg2v86sgRWoqZbjJ4EeUw5iXkKjaaLAF7Bhe681fJChY6CxSa",
  "key17": "5LLWJZ16VVDBioRtv3QN9JmQakypEmLVRAz9FCm39hQAZrZD2mnvYxEHh9W76cjgiXjRP8nZeNnPiUmZ8nEdXX7y",
  "key18": "3xS2ezjQVDStCpvPPchXTQUcUZDnwmdqXBNktyVdResBZXYyrXyr9QHFmTaTz48sRjbyLQRjNcVFtSBnKnDBQzDc",
  "key19": "deWWsbC5kpmFT6o53XYDw4QVnd8PrsRU26fdaKZ5jwse85wBfKF1Dq9MqmdpdEV3SoiiL9NBNfbbsNpaUAcZes4",
  "key20": "67o31ZeUZ6q5tfnh33MCoY12B3bnUtZFc6pzgNamPFqU4ikj97xnJWvDtPbpvK87HPfxb7RmoGTcSXxAs2w211qZ",
  "key21": "4JvJn81RCyrZgSNNzwh8ZsPEL9DyT1btuQFs1wWeUNsS58vVBmNf1unTAzFMnMQouRZzdANT1PWBiWQEtTmKKkJb",
  "key22": "28eSLUDuz7vr7VNAnYJUQPAgLSMqKrM4VaySmbrKV2HH6a9mwhJHg3FagdgcffihoaCCBcb5epmRidjsGhCFiL82",
  "key23": "5iNPh5bW9NrhvFparrKNHGuEbAY119UdkKgohaKxXpJr5ednqd2xt3TvFUdhrfj1271Gz1XUNxtLDPJ97rTsHUCM",
  "key24": "5bHYZJWwjhGuEwaPXt6sKLDGmPaCroBMpYSpZGerpjJDxHBBR7UEidgJZ4ak3Gk7Qzw9RUsAWaEwgSJhLAVYREQU",
  "key25": "TzWSWzvxRNkaLbgDwvYMwAUvU9xPc2A9XERSrgteo3PsT1LsmK4TBo6WnquARmqbKBVzWu7GvU5Bf96swUsvSSo"
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
