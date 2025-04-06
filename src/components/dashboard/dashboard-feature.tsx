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
    "tHei85AaUbizyQoi9yPcw614jrnhN4YDG1TCMv7QzZZjYoN5qmNfdLxEtnpbfKU15n9vB77PN8Z57m8wXuL7Eyv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gfMoa3xnhHGDQwLeofrXzguyM7eoY7MUdC6refhAezNjsiAeypovLzz2ibkcgmHmzCkVkdWj4q3F4vk7cAzgHus",
  "key1": "5nKzDpuGggZUrdLqQBr8GZf6CaEP63hAmfknXbVxwPv2kNyZrgbjUxd2v6vhin5G4yZH9cnRsRRy1tH4pm1Qr3nG",
  "key2": "3YgRbhLXAmYSCRo7q5DwyzibsD9buNNgLBAyWdCNvX1nY7KfiuTjRdeVByCepmL2CMn7ZhJtwtao93ZEujhZ5dqR",
  "key3": "3d9jLWPVzL81ibPedCkJ9GWWKQhH9Nj2JA2pkzD5JLCvE8c9xurTnacp484zYHFAvfPPFFCrX5aZwny5Yk3cYpsc",
  "key4": "Ej3KkngsboSQQzTfksEbkQjh27y66ChV3Je5eGVmf8iYUdDFy7HWces7Vd9WMsz6dCuHYf2eEvx3dPWU7oALLFb",
  "key5": "5ZDGkAnS72wBWNfP4iSMQb3k2NAm3jAwKwPLhC65gnrVKVYfbhMFRnPN2Jheh9nqFK9uAJXdNhm2KApz1qVk87ZH",
  "key6": "5SBjhyAg6QinuLXJDyrB5niMvqyFLDMaefuanprHB3ejtgJB79nFpFPopfzxvGsgCnnKY8FungUMgvwNKPrcedqK",
  "key7": "2BWcAmB9X1PkyGHF1BLFvJNyvKqChP5vEkSYwVYKDoJt28BP8EZNN4ZiWdLFQvC1AxGdDdeXpxBvd2c7mgrLXpth",
  "key8": "37Cfa698Bn4VThsJdyYmZLBXcaJrQccK447Bd8Epw2BAJHiG2vpADEFd3pGFeswsgpg3ZXVb5ZXHP8uBzdjSWkvg",
  "key9": "3kTkVoX6CNAy9oBHrPFiBHoZdbPgRTMAAEcEqv9igtaESrY8u2xSGHTSJU5QRxFoPw6tQNXtNp7AQy2RPwVCmgjm",
  "key10": "5sJtEbzsKaBtzA62Tx1s2jymEqEo7XHy2uNM3enSaKc9Sk3p23ZMfuyFN2wwJSvs7b98NsCHGrEbwy5TwsF851ZA",
  "key11": "G9uEDRQAmwskkfQK7iTxoaZAP6j9ZpEemdVWq6YKWCyV4fV4krSAHZB4ojuAasfbHihf7j8jMx8KqQEXNnXy3VP",
  "key12": "5Lu7J5T6cjiXbzAKt2QCC15V8LjNp14p9oHE7YWfHfWQEFnL2Y4BoHF9piRyEBVegzTco25MCdcx2dQ37ZqMfZND",
  "key13": "H6rV7Q3o7oCisLXsEjTkv5gk78VwAEskyFXdu7avJ6gbyGmvLYsaLUvLr7j4AgFmRWXYJ4KBfoHh76cm58QCrhn",
  "key14": "3VYSc33kTPXMgmpqmwVYBxWkL3hpCBy6f4f6D5SKcYcnHMyt9aaQ92oQc5oxJ461MKbcj3HrKN2jy5VNQDfrRu9t",
  "key15": "5qdJrA2eiFf5mfnsEQGsJdoR4MUrz2T2mka74PsHjj22F3ztcuQhVUgTL8hG4N7WeKEYpreX1DY836ndUBN8eqC3",
  "key16": "43kBim5CYXW9qKChwp7w4MV8Euh6yeM99DweQ4BZ9xTQ64YopKu1jfkRAF2Biwp2DXJ3n1py6qChBcsEgirxERiE",
  "key17": "2MaZnHobhoma3PVSpAeLLzyAuDbeo8Fr1SmrnecbuwPENXdLa7ExvF2MXSoxyXw4ioRHS8RAEx3YdHqQaR2PM5qN",
  "key18": "44VMCKEf2XxrSCrWcHmKtvFoGVuDrqED9mTaMv3rL4ssJhWVLXGKoHfRjQu4iN87uHqZwD5JpQNZkDdhaj1aJ2y1",
  "key19": "TQbtA7KcTnghUD4HhiQUPGcC8kZ1VkCMMZCKPamQZPDJ1hsTiFDcvWW6wKrHgs3Vpkpxj9u6vCFFGKwAe6A6ry3",
  "key20": "5eWAsrZg7hhxAgSD9YAzLC2Nm3QHMadVh1qDBkpvWaii2ah6C6GSXZAbDAs4W2SgBqR14gPAGpyhEyCvUyHPLwUy",
  "key21": "C2fG2rmaYyK4rf7Bt8Gg45UzEYqpdoq9KWghGc6dfciEo8PaqQvciFj55YVz3QM6dmHK8AMkEpqxzGm33XaKJDG",
  "key22": "WyjNhmobkrWFVemMoaGnwxervdDjhUMz78jHjaFq8gs73JEJCsBx9sAQouEMQcFnyLY5p2jWA9dsvoWec3CCqh3",
  "key23": "5QJHU3D6aFg62Drd4MNUwUtnCfbkwWWMpmEzTeDraquhra2WaBLgU7qmUtBqKqzSMhb8uuDbQBuupGAoxVFKJ2DV",
  "key24": "585rUu7FaYepseAv8ZxRhTUgXywXoccYdbTUdbgPcm4r2B899rtzgFHZriE1xGV8gVAQwW2VF55wh7DUF7gcgNLu",
  "key25": "2xZWA8AQiQrAqYb29Hto7GgLmJopYPGwWDgR7t2k9mqSEhD3VgjULbnzN9GRbG1kNvujEo68ppqb1ovmzJyVFmPY",
  "key26": "3WbuPgUu8o7uBzc3KNT7H2AyaxX1Xh3x5J8KcuSodFqRi5Xb49GBk6BRVG7BhHnk7oTnkpJAz6gQVcshcQVLhjj8",
  "key27": "3zY8BFHvYj4nHhgkopF358eLrMmxvHzoSH6DrBbS4cwufitx4YxPF2xPdQ7uWafWPgg2EoPUUftM7cU9AFSMk3AT",
  "key28": "4BD9bt5FG34nw2q9jvC2SNY6dFEa3wvbumBG2hhYgD68fNWBoNDdEiqNKzMevR9BUwASNvYhaLFSRrpwWmKYFhRs",
  "key29": "3jYRZr1UCc8MNFpWNBm8rqbTrG9zSbAP8ZWoSiUTeBKx27MBLcsvfLKbFLMTftv8HQoNnzWHYofoQtRzpYk5Tpaf",
  "key30": "Tzo83i6ugJYYZrTa6LSoHmLBkaefhGDN5oeAUH27uYgZUrNioJYhjQ48V78f4UDHbPu9WbbmVdDUFqVkjHapt6N",
  "key31": "2vWRyxe4pPU5dBWDFt8QoVns5nX9E79dSMkgBHXX9fWmjkmnfxKYousbTGP4TNdzzpbijfq6PpMJbNmBcXua8qbJ",
  "key32": "4M1Gy9X9rtXABfdqTJ8NuSbSBLYR2hpFNY9d6gY9XcfJWxPBpujjgfkcgNfgtH37SQ7qT8WwCix5bDmdNg7dDiqQ",
  "key33": "2gc3vkufHcKsfRGM899EF7L5PSe7nSnPnhAw5WPhRxV6rVAEB2BDzPxU8PdYU41gGx6UHVWE7gN8gUJr5XisEd72",
  "key34": "4Ytdi5BWMWNFghSVdVyM5QdhGvf2Q8u9h1m7cJKTSA3i8HKRWxFdLVbuAmVdLqaxqUMLjfkNN5W4o6x9msu1Vg81",
  "key35": "34i5sqjms258b43T99LQG7AY85HaYXNAaHxkQhV5w8Qb2a1sjJKWSTdDfMh8BG79zurH93RN4c6ssZHCrS8t2xxa"
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
