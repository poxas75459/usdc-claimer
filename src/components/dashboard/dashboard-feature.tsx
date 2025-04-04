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
    "5KFw6UM1LVu92QbPAbxS88embtQnpG2PXECy3eSYapgS6s776NwzKXond1PbuebY3uqB7EcGEWts5tQ4cNxveYWU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58eh2AjwotvraJYHdNKt4xcDYuzZwVLzLodMhBYnh8rDvB2XyCgmH85sfXQXREgTpF5soXhHZiFvsgMUWMLNMwHa",
  "key1": "5besqFi6Qs315LU8oEU87LabW8STJVr6NcGyJR1zf8tv22XhqDWAMWu5L9hfi9qDtuoSvZsYj2vLagUFEkdKu9f2",
  "key2": "4JpD1rihUrevnNBWyunWP2xTwYMGvAUL53efHfHc4pt2JB2inbvom84wkzNCrRwVGoAfZZJ9ybc3dHvEpStbLmv4",
  "key3": "4B6iYeCnpRdQpFqkBH7M1LRByRa6hDCe7jkDWw6hgftHLWFk8Nte3VQ2BJ2UFePULCFYojL481b49DHRBh8cjHLB",
  "key4": "34C8bYGw2GHC7D9P3JEYhThq2qYKQSaoUUcC6K1Xd41ZtMa48LaeQSE8GtxsUB4M5roSaz4mGWU7y21tTHbTrtHv",
  "key5": "3jJa9eZo9kbQgv1weMNiSkrLMXvd6pBcNwRJSvzwKDMB9R2m98gWTaU1EhD2MT4DT1bpMhLyDrJtfYMatG66Lzoe",
  "key6": "c18HnuttgfDUz71npFYjop8v6AQHYxjWDkNx4bp6GBDWdKUWY6aDZ6StwT3VQbDruDURB1aN4RzHsGUeVqyVqri",
  "key7": "65p3wPaZ6jQMTDHE5H7EBHmm2PWqerzSDrCsE2nzQkdfGEZkLyWjotdSwJKo6ckedJKR9JYrZvb8s11NHPqMvDVc",
  "key8": "2i3qz6nBbEpwM24a3L92nthPCLdZM98ZyJDbVyvF8FDYXhnZ7Av41HiXnKcWWggkXrMFkMBT4rmJP4Hj76but8uP",
  "key9": "4Z4CV12Dwo7h1mHHWUdbgvT3NHok6skK7q88dm1XcidUzyRW2K9YS15cF54PjnwWfgxDvo9ugcU2zvHkcqELY276",
  "key10": "3WCeMLtx6QeUKbtQMm5x4vLhBBMVPuoXfkRU9EQb5kcGSViMuQmgNY43ESu7cVn6mYrLQydPbwZ9ieE2xhUE7uv6",
  "key11": "3hchXTSYu4UnEWVjcT856C2VugsFtAiNizdcabLjr7wM6Lkxc7XAyXDyCuggiJkT9MPJhTmoXPto8KsQ9Cyw7zFT",
  "key12": "5QHobtdDfGAboMM7zhAza9FBsJqsJuDTCDueCzTC7zPsXTnHpfZBWPbEnoSsShLoYrEuXgw2nvB7qGHJximU3yie",
  "key13": "2YjDB56S7tmDkq5Y6FWsnTa3FDQ631gbzzyJbDnDs2q8anP943Vxq8ZyhWgyMrckiQAHPdrRjATzMMR7xY3PaKr1",
  "key14": "5Q796hFa54SKzwF5bhMbzm1MiCBh9ANQ4vZsgxombDTQxQHNdeHxF1r6YPxcoZhDJGKoJ5wnMXh3gEBmFNJMLKmX",
  "key15": "2QSYEd4mFUuqqrFaPbTsjs8x3yerZTdyRoy8kRYEkPdvvq7scUJJFhP7G2MsvtQAFKp3VmKpRMs9hRXnMqECdZMo",
  "key16": "5nT8p5iX7LBH6WPbMorajPGDZjgtcwRDNhizMuecNppENXKfY41NEAPyVZp4jfZCXG7WABCpojojWUrnb1uRoiY2",
  "key17": "4hHLGWJHyb79vjSYKYYMFFcHzxq41qPLSeiRS8CXLuvsGJxHx9Bw7ADAtt3RMrqTeaGDCRbbrMWNfusADLLtY3LV",
  "key18": "5qHunfdA374eZVmXpRETLFjVM1z9xdfBFuKpCsKHFB5GfCqBV2236hXnvtbgurcLJFX6STM7YgMbPFWkT4UWLJLF",
  "key19": "3QRDYMrGqmY9HifTExnBEScVJPyRsxPsgknDBvW8hoj6NT4QYqB5JEqi2jGfBXyye2Qn6mmepiig32zneJVuqZQa",
  "key20": "WAfjWVy5zJnkVvW7vaEmQyuh6sNb12cUBVaZJWWJUVBrHbbowGxUpP7JF9QzhxqFLSCUTxtG4yqnMeuNu8KHddS",
  "key21": "3Svo7Tk5M2Njyx83EsCuXJ2ki3DtbALwNSV2CnA6vVUN48X9ffvWv9xhWkJzCn8r1zkqPipEtEGnQwr4q7cRt3Kd",
  "key22": "24449J3GLvg4o8QM9T859cjoLBuH6k2tbpQDDhW1jeRQTRVvpKq66U2K5CDom8Ew9AhXRbhuzSJNuWFjnhW4iqFd",
  "key23": "65TdwVKBuMhJEsMRCEAw4wn2KoPsFaoDTXk4UGZWAdNN1HjJHvae3m8iXgpEv8L6B6Z4vYSxLw9ov3Ed4kREnLrX",
  "key24": "2XqYuVPXV1ocjtXzEQoEBsB2H1U81LMktvfvzJSsmGvtyj6Dv7ZtFMmvabxDNyHBf2XX3eEtjoFMr37jKT1ZdG5i",
  "key25": "2RwTn4QLw8CbYNFDTsj6YmA1sqPqa5uK47crEXNJtgBv1f45tF47ufSQQXpR32sZ4o5JDWuFRPg2VWKTKVD6p8g9",
  "key26": "3g6jUbqBjcMNWVeUBrMZ1VQ3WyFNRTEmt4uQ1YLhZbgjXXysw1CuhFcTxtqCKER36TeJWCKERBgZuVRwkGfTBY2T",
  "key27": "4W5hG7eZ992VKiLpNURd9MXFXNuw6oa29d3WAtVKmixHdiB2sAWg1UYGJxVSB3DXJY37TngDsmFYDtLcZJKvDPVm",
  "key28": "4wabUa8yxtRcsQ8CP4GoaCYaBvdUAbB41jbrKkV5bXHHRMbRZETsteRdFmjMjdiwf9wr5LRrRGro7xtNudjbwTkg"
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
