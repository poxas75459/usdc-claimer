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
    "3okwje9QCN2jbaUD3HDHdGTnJ8ZmQ1CsmJGXXJ1FeLSGwNfJUtQFQAF4k9nNmqcatzBb3sEnmEozM6UMNb5oJHms"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FEUuW1sXezF6CbZSBfEfc7KgptovEHWkWVCphdgjuuGRNxtzbXbtf4auZi3q6dXDC9LXXmDhkb8jpkGFsoiyJm3",
  "key1": "64PzzNLLgfwr4qFmUFV9RTf4K92SYTWnhhmF9hoG6wm1zDHunFS2U7N8moBi1m7nh54udFzR2ppLcKPRber8iMXm",
  "key2": "jXS5iQZZtBbcEBJMDv4qukR5rkL2rZ5S7su8dmLFsaHqzdfVPDgETu7tKNVbKjRoXBLDPCQL43HZRk6JAj99K4g",
  "key3": "558CCR1MFXswfe4pyrBZ4pH7mVhvjzsERmETD9xsFxoeYMmuuepsf6GXVuJAvUqNLnL7tUEPCdQG8SqE4uyszapF",
  "key4": "5eHUad4Sg7UR94T2cCaYJ19MgAkxuR9bRZhod9tU5xMe2Y4iqJsAXohi8THg8hatpS5E82E8XhfKFop38fdMXAF4",
  "key5": "31cgzFJ6sR3pGiqUrTwRrWPA1zzQg1Mgv36sk7iSZaNnZQuMqqtwbNcftwpe9FvUaPLunX6HA6gkQSTzaDrS1x2V",
  "key6": "4Tx7WYnpMA3ZwGgiKCqZXwUPPgidiBDXo7iyEoPnq1dWrKSEL7cnt8T3PESfczJDaV51CBQAo85e5ystrYW2fqEy",
  "key7": "4VHyFDsc36NSeUBcfaY7GT8rXa1YZSHEa5CuJbstVtNiQpPJhmt5LAnBYw4bFzAtRxwiES9AcqGj7ZUoSxqnX3BD",
  "key8": "3BuBgYdKS28rvkvZXcKPejqK429kMzhW1SNanH8G5ycxFPuWVQZdd4XsJJv3Z84Bq9BAZVaMFHvUY7465SJ3Fz9z",
  "key9": "2xuiK2hU5FphBEkDrr9qtkL9hEFHLRm3SZ86LkFLXhsQv4qL3UG5R63f8FnyntUhHaUm4d6r47tTixwhHypVyMYD",
  "key10": "2Be1tM7TG4xDkaYf3z9N2SwBaPDeFydwhEQBbkqXHjyhqjykStmrLc55nm3MUbkCGCs1sgTkAGQANU1e4nvAaSdU",
  "key11": "Be2e4pKoUXjj4v1Vb5CJ6pcLzdvF9QaamMidDih3iwayWW9RxNis4uAinjTJieYG33LeS8S6KdeoTFD1gz8sf1G",
  "key12": "4yM3Uu2baoPmmEZR98yTNLFRJsEPbryuipVbRMoTRUuaat6zZeubKYiz4ou4YnpdEiF8WZ8FhHM7cmEVhfYJc9U",
  "key13": "G1RWxn2skaS8njBNz2edCA4hDEMQCimBCeyEnSWxqWCxBpD2YWxXGg8CTunjsucqA96XM9qVNdzrXjeTiTeCTpB",
  "key14": "4yWtBaM7xwjL7z2JjFqZsViaZrWJcgbPL83E7PQwiwfEVj6Q39VdiEminsNQ473UNj68ZAEsfsVi93NsjrBjYQAN",
  "key15": "4XkfzUr7FvpKFXGuKqvzx77ZRFF5d2dkCF8aLF9mSBBhe9Q2hdXw84A8eB4KUBSc8yUedrCkD6w6RQSqgtYGK2WU",
  "key16": "31c8hfnQnczRUX5U9bcYr2bkXQXYn1T4PvwRcdbitAnDsEGEQoQbAeKGhmnejSXjcaqpmAGsERm8aFkPh4EQ9xNE",
  "key17": "5eG3azhnUK9HfXemDykshR8gzuv6MNFveTPspGRQrqF28S5xudYGHkpNHJ67edLt56uzsceRSt9y9XrmFbm4SJ1Z",
  "key18": "49D23eA5RShCWJdq2JgTgg4JyEfLRcQftSCbobRiYwBYkdMPRAP3RcYgE5iCBYQNcDqFvDYNgrvgx6x6gee8JipE",
  "key19": "58UmhtuvRCGSbeGTyYU2us7ZPXbAUiwF32EnEnjCHFpprnbpM3eLqooUUZWkJT6XC15E9R21CiMUSGsDLhuYu1PT",
  "key20": "NWSB9udXnwrhSupv8NjUqeVHevcD7YYY4ARXxP5hjqEDNaxAX4pSRiZ7CWwMcdmqmWQkWe6kKrQJ8LXUFQGETGn",
  "key21": "2m1TVxMJbjMykSGndcDmfpJouvDbEbbaqgL9YNo2zmgMjRsZF2KtGdQXKUYa9uiUNjHzUFYj8dAfYTUHCUGFtjgw",
  "key22": "5QsnuqF8kgabLZxgNTK4oLDA5VdchcamuWtuQDps41PHxPBL598g7ruf9jzrKyzQ2kNTXtAFgCR9HSSKnGbM6pKb",
  "key23": "qyQMXyoiH7o8xox2HbuVpNKH7UVF7Z6YEYCYChsxegwN9b3CApg4GqFpGmoNQY5z2PhRa1s4z1CVdeBQn4enNVw",
  "key24": "AJHccwDrVd6Cf8xdAqTaGsg1XeJ4GGtBCgzsurE8NhZBAp2dXpnb4oZS8wZHHq9Gw7QesLmM3EMeYQM8j4VsA67",
  "key25": "F21m2CbwCHEU9miLfwA6PEws2VeDfZkFhpxF4jBUnk7GqXXQ4ykFenRwU8wtCk6JChx7dZF6uuAXAtN1ngsw6Vy",
  "key26": "3DcHbSXFz3ubxhXkjbURvQ5auPucmih2wj8NRjSvBxK68ubWt8rTHsk6QqNDMpkm7kQNJwf7LdNyQrRdpz8QRUFQ",
  "key27": "MXkYYzvPQK9jZ5r93k59pJhH2zvQpHKsmTqbVBtd4G1FvxxB2CkiA9TKkiNpoPwrjLxA66dR2s2KTAEkSWeKsJD",
  "key28": "29zW6vKbzNBFmyFDCQMsfcaHYndNwd4YPdNzYdzvsioq1wwAgumJXkgHGCk6R9pjp3vszvH8PtwRdwSMv6PhZ7hc",
  "key29": "YvdPQ3S5wcfKqrXo149M6DxgHjH3HViBeAj5PUCVeLZ35SxKN19FwKz4Bzb2nue4wnMQJJit8T39SMYqb67gC1f",
  "key30": "25wx4TzknXKjo5pWbu386kBsquazS7acQv5PdLyAov6Ph1F1hShRpdXBrXHRW6x4Uw3LHngBHAau2jaJen4QSBF5",
  "key31": "4uutNbMLV1Ki3K9p7UCs13NJJ7ZqcGwokEb6XTjNzUPrfGkqLH8WmjmuY5LmmYT6tEM9Lz5WucXF5ixXGstdTf3A",
  "key32": "5SxvMWN4LiUQjFCbi4XRHY2wtN3jE9fVqTxfjH8B59YdPApeC1h7DCSMALk4P4tSwt5NjK3wEjsxfq53sutAGGki",
  "key33": "2ZN9YRL3y6kC12XsgkZag3pSuDveRQmC2mawv88jjo7faKdb48XY1UJGJCAi8qvcBbBjYAg3iM8WyGe3WEDv39hY",
  "key34": "5SWEJPZxM8iR3H5CB5L7cfefRAEz8fAzMyo9GcrDWbnrM8mSVg8cbNE5qRqbw8NyLU8DTkVYi6sw9TJiUGAzcz7b",
  "key35": "4ViEHr5SA5RCsarPkvkhXXWppxZxkQfZ5K4hjsU4W86JBohUNwToUNo1ZRFM6b5G5riL8rUHYmRwDchZFLz3fy5u",
  "key36": "4nxhA51KpyWr91k7tNkQoC3qXj5ycfzRsTNkchLnJ5Vtaf6zHegq3LhNFvuxYqXUR84mZ9AndbB4DnQV54c6rRK8",
  "key37": "24mTv6DQT3U92nxRpjcd6wuESRFm5yX5YuHwPcmTjJSggQbY2dptyyKpnT2maoGLb7jp37Rvwp4gKuwBCG2MAHTv"
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
