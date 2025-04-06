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
    "3YbTJPdZW6xVWnwRd5mjDKtJ2AkaEq8uRFWmpo4RxN1BFPbkKcuDnpkaphjAUTfmexBx4VEq5Hy7YnZFomVLKUtM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GKT71ZfoowFMXov6CBGt6i5TX25bLWGaVYEPYpfurmer9jzhSHR1J7KUgf8vQaYJZZ4CHTXN5euLBPtvAhEYSgP",
  "key1": "5GyYbtQhi4Uc2yhiHBv8X6NdxuhvD2PmifcoCSHf8m4FVPThq6h8dH3dN6xJWor9Hhj2UG5zipPyFi2ybZu8yFs6",
  "key2": "61RmKk2isDYVxNdz3oQqonHDMfnp48krpMn1CViFCkETTvyhjFKpdxJgaUdbdTTpuZhQ2hFc9zcKeFHnTmwi64mr",
  "key3": "4je8QdmSKsSGq5RrQzUv9CtUjzBf5Uofa8PKKYEH2eRrE6Y3jNYbXr1xcf27uamA2ugwF57w8jzQMZqMn3EPTRLi",
  "key4": "2pQas7FV2AxyaMvYPkPRdP1dy8FGqGoC4T7QSP71Kc7f9NVA7pinuCdkBDN75SQP1BXKuMfZ4GAZgSeEZ1M61D1w",
  "key5": "2t1UYTiESYSfTRNTtbnocrj2P5YCaFWR4Z6MgAZXgfERoCKGugxziKPGBAJ69pVXyAqdmkznAiVxBaUFVbTpE3VX",
  "key6": "2k8Kkxd2PoNxuLzCrwpXayGGAiyS5VcyxU517uVzFpJ3LwqnDRiccvmh9e7dhECNAQD5qonDsEVUJ9BFY3mezDBR",
  "key7": "2opjhT1yJ9ndjc3FRT5hVEoesUCDRgwkXEsomaMHr4KAuEiZZpp6FnXSm54XbBEJvHuryqFEe5NqC3i28HkRvh3o",
  "key8": "5UkC4ujrqqJSbbzbdn7o3rxm2L2UT5JFJaD8hMC7Hao6JA1Fm6Sr1n4rHqwbZwx2sUi2P6jzm7idBaxtavrxo7A5",
  "key9": "ZM1eqKSmc6mRu4Go7bWLUGHE5ypaegfhXtonGMZvFZqJ8wZYJbEpKyxXsV5ESPF1ongdaCBY5DRrSLRp7iVVF1K",
  "key10": "34ZsPvmm1oVrBNz8Nyza9sieWsrh1CCXHbooTi2SnvEXdGGXdU8C9Uaj4qR23EYozjU4t1eVj89hP6hZwr4RKbDf",
  "key11": "4Q9JGJynbmW6qkVAmLpJNaWjpZ292rLxbLevd5Z8B2uWCS88oaamVaSXp3wdNJSUJrMxDv3zqhyo2oA8iNdX7BYX",
  "key12": "92r5YHsCC75oWVEDhdAhTgHGvnVMTa8SVJTbWutZci9amw76cLzypxV3LkL6cNbwvNZg9euUYjRi64d8D2xdzw6",
  "key13": "48U4PKsrfDMbpYDekkngUsmzXTpeW7dvaMZQdj5rD898aBSNjj1yxBeyDxxqgiNYhVuBxjPFRGeRxsekEpPBCSx1",
  "key14": "3xGKFFUSbWXaXvSvNWqs1xWxDnXiddAGacgPGGKCNUFzRMk7KmvpvbnQMKt3F7fCXUHLWnM9xYq8r6T5sQ9px3PY",
  "key15": "3dMSzmUBxoWnx1a2AWSSW6i6jKd4BcLnm1UWU43HB6QD1KoK73yYgJPeddvrCKtmLSx59mqWqLffH8kQkhQSurMC",
  "key16": "3AipKd8kCEUu33USahh7WYaYTX9oW55nZPsbtLRvRfNApMKQqpqfxhXaXjuxyQEixof1Mm2H6c6GSvw7Fq4hY8hu",
  "key17": "4bD1UpRbA6tfqeUTi7vkMtFRdYEhiBmeBV3onpLYPpWrP6gdYrmYnjk9CxdYVXsFASKsmzmkZ3apis3GnMJrVprz",
  "key18": "2ATHC1H3ZQNa6jnoeg1RynfyQPDQE1nThdZfxLShQERMyZFm4r44U6rQUymTS3KMy4sLNn4wkE8rr8Kd1QivaX9d",
  "key19": "Nigr5rJE8dhwV1gfnb8v7a7jNvoYvytTN7ACro6EkrX7jwdUqK2EVSs8Af5myipBAwsKNs2BWqUFyoVH7xNLoi6",
  "key20": "4Vt53q8qdGTAQFTqyet3kXNbyxczwY1feF8yKbLg8eqr8NW4gDgPGXyBGtcHHFC7fjadcDGa9m1dbZgaAF1uF7oL",
  "key21": "4RdGo5x6iiz4agXhgdf7HZAHpSPNJxxpKZ5ygKMppWSFZ5DX8Yeng3XQnarBRk4ohoi5yFttNHPJUuQX2X9qzf1W",
  "key22": "fEBwMn8QBoJUFMX6GVNi6M9Mbm92tufdT9xKXnQjWhuV92QxFHVzXzsCQU16puucDsSL9eXF4YAj8gqtTWTdaMZ",
  "key23": "4HN8EyxnpMZeq1Ad2pKKjCKcZ8GE9tafHmkdrZRvtsVcvEZWJXTAkH8o9g394rgbhinA1ojDG3eWzfWMSLnGXWDE",
  "key24": "odKsNkQYrtN43oYfJS7jdmeatMA2rLXoiz1Y3wLdzzNT3WGpwFqZeFaY241kRFhw431TZpUy2iWZuke58PA5ERm",
  "key25": "4QNXnANZp8fCZnT22uvy5vjRK9gP3aSeD7eodBPjMGhrWLqMwTmadAK9atopB95XMtRu32Wf6coHsw8LoYtbMcUF",
  "key26": "QRkgnRHj5VTjR3R115SKq1UAx23MkMVrPqxxbb9q1fMxPVYwdc7c9baheBiaejatXton8A5snLfNgw6F6aKcJVa"
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
