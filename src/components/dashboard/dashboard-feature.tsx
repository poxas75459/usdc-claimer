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
    "DXprKznTouYoaj64enkHBT6A5CWwDQ7zmH1VeLfvMPia1R6FqYPMUgSv2EKn6yUKXJnBNwSDzt6gkdnUtrir3NM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TujTcwdRH2kKsqAH8YkVMoQSvHiBdcyny1P7Gwk8K6RATCxgboFEfhCPAaiC8SvK1RHfhZUF8HAYe2fsM3EETJv",
  "key1": "41VVVUw6z4Y81KjSF2G8JDBHcScTBGZDi6XiuuJC6KsQSjjubZCY7cXm2YcUUortoS1nUt1k1Bnjm8j33fgPnpsB",
  "key2": "5R4fuJCRXA3YyvTx83J8HqtFYxDg4e2RkT43vmE2Sxmm3QvAK173XeUvL84KCaSvHoHgNuZixGBxYqX9mcqyq9Ve",
  "key3": "4PX2ZD7um8LhWPcxPfB9DxNZTyuL1dfdpEkyC56bkciLVqP4yc8RR798MKnvtQGok6xk2GHz7HTmy549F1PjjnNK",
  "key4": "2qfMw2GbMA1tSqNFn1mauKVLhyzJF4mkdW16DNKbFb9HUGWFp5UWHDimUqHbeSZncYZyGsMoRkyb2DdPqekqy4AH",
  "key5": "HUPvZyvDdCJLSiLkX6yC77ADWesDCKJqGiDdt7QJhM1sV9nXR3efmWSP5Uk69WSCdwz8hSjNT8pNpXCYtY7LKZ6",
  "key6": "jaSi3KPR9SLAJ9cmFUiiibLK6eQ5SqgKoXHcKc2KHBt497hKs2zrBKV5RLum3ptuSaN8n6snrTptctmw8ECiqrx",
  "key7": "549WZKXZ41tSJWHjfXd8TYLrNPP6VgV6a9QzX4DZ9WySGhvvMS4ViY885rKYUF2PnYaDERjCXLQ1Cv2ere2XAANQ",
  "key8": "52ZbcYjdxyoFrnYJ8i46nE8NYo5xsTisweuQwY7BBGxa465jz7FFv7E3qJhuurYUoVZJqdffYUx5DsQzqicuPn8S",
  "key9": "5mG4nm4fzj7VKdAHZoNyUAeA2FrBAmur2aajBRmcnDcW5zDZbFwG7n9r83EoDTPhecdq8xVtsdCaN7a6LKDWQEdp",
  "key10": "2uLhpJYiZDX8KxM1KVPQrjRv8a2gPaXHqeRgz8m8XNotaHUL8MsBVp2KLucnhJZ8rBEt1KaEpwNdoZvKpQZYFXKX",
  "key11": "3rW3DAGZLZhkq5WEjfgQrg3qTidne5bZX64xLasAKtEHSeeEjSJFRn5LAWvTiFsRfNxNKDcweg7jz16kciYezVC8",
  "key12": "UXuqv3cR97K1L5qNskBP62ZkKXu8fdxnQWN5QUQdW1tzonmeDp8F8ZDxVK28oW678Nuw7QgbgZzmyAfCdWbCTRX",
  "key13": "2tu3gwEQZCqsu61Sz91pttY9kB1Ud2eywLGkM7Yw2Cftrzg1YSpPdBkPHvjQjo3bHRL7uwdTHbhSRLa82Trd4c62",
  "key14": "5rjKm9pymZzwUB4NiC9L3Ppii3LvqJSYyP3F6TiPfswJQ5yngaQ6SEXfLuUMzyisU8ruWQLasFoMJHAn61HETP1D",
  "key15": "46Vgo7PARMmonXVMZHgf9cX5FHiWN9jbBdW3vnbUnUeawJCAFA2q5eYauFu1bbiSR66GTMWVbLUrXrPFPAQUH3K",
  "key16": "4qv8ocqiybXRMJPKnqRfZj4KxMgGfNqd2bXdgFB2xEMXwegkUnTiRVtWM7CAKqPEE4jEz2LjiYuv37tNvftry8jB",
  "key17": "66q62j18ocUJaGszTKPKdHpF9TKXGWUSJeNrjr7htWJ3Vz3VtyjEJkkDdhDgpo4G3hhwdUXA2TGaDoPNCTagFByW",
  "key18": "2qo5HoGAyRbPvQVC9Zs8QXGdPpN27DU7nfrzJ5urwXg8oLPupkYnRLt6g71AqDHYhZTN3bPG2AJGWnjw5FzdPX66",
  "key19": "5Nt2r2MWraskmtgb6wVXrmCZHqfES2n3ebLJTKeJ6uahV2UWdNfwvP1WZGSDmHb4DwsVbDCrncWGE46gauZUBYax",
  "key20": "5LVPR9ktZCJnGHaSp5ewG1PvXwWMxG1ygS5WBqXKuR2QxZxzzswGtk7JvVk8YspbECZfAygtUqU4wfygz2AuZsKL",
  "key21": "45DXprCiV6vk4BP4oSQa45XJwji2kjyqSamxXD9iKsfoqM6H1iPi1szd91xZdixfXaaUwbsrqYza1unUm24uxSSu",
  "key22": "45u75P2v5HE3PFdVBb6wU49xSL4h2uHQbLL8Afbbg28nFxsmTC2MEFMhK8JfjmFnjPMDn12wpPC37iZtfpCiSuQN",
  "key23": "3JkhFDvDFK5NyvZpdEym1eX4mg97LvC9cqzDB27tKHrYi2KQco9fuA8inLuGbhGbmqbNkz9ugyv3niVWTjdwX2Xy",
  "key24": "3UWnrEkaBdedAZzCKcKGQbS6b1suN1CepceNPKsbwnPCbQJuy7KmWo45fDsMGUEMc3Gx6hsASe7wHCiMEJ7BrS7a",
  "key25": "2EnDhEPvpMf1eBGfqUcPyLg4RoAeK7sBXCX9aVoMMBzUAyCdQisKJ4KdwSVfdgFk5za6Y81rWVqHAG3Zb14SMXDP",
  "key26": "3RxzJ2ywpmH727Y8YfyZsZoPUmAhWYV8sJ781dJS9pNxT2iUpKrCK9H8mVNF7WdAGj4CmENyoK3bY9abNWsWwY77",
  "key27": "35EXCn5TtsWR7PRxjP589YG4HSkrERiUXPGc5wPRfBDHQ66sMBLKBrswBLPWZs1BsfREezTXV75zq2QVntvuPpSX",
  "key28": "KS917qAkodVjwQw3zu3ajG9NDVSvESyjQHefFPiEeXY4v4Y6vxZgNQjqh9MnUJsMQtAcJbfjRdw3tASKPLUULJC",
  "key29": "4vZR4YZex83b1igVBUff68skkDQ8ZxY1kBQaqvFv1U3TY7R1dJvKaGWU3L2D7LLiwVBkKsNNz7ZErCEJjeLzSiHC",
  "key30": "2zSiXhsVVrRS66YnWXdeyuXmoQdPgjbtBQB9GaVA9bhPBhbhPVbnGzrDdwmN8SgKLrsuCRFnGPw1ew2dZnps8tJc",
  "key31": "2fbAFEYoVG6DD2LB3WZ6DSCJb2jwWDmDCnYi3UT7mypDLdWWFDyaNNtYoccE9TPSLp365UvbFH8wcXZKKKFm8sLx",
  "key32": "3bVxSrYsAobvaSYcQdHWzcsEkcbeQ7Pc7CNtg16ddKK89t3JPGSiXJQf8cCaEYJRU5ar7bf5B1sGn3zL48tpEFv7",
  "key33": "5dqH8vTmaVCjyKp93fj6XsfkX2fQy6biyYztGZ9SWERzVJUjPgF9fCNZtNU2b685BSNVLkPrJnyXz9uDqpPXDTJ2",
  "key34": "5rvCFcqYT79CxMohD5BgkyRRCp3TcTkqyydZjghWFDxnhEL7YvdMsjvC5ugJ6QnDzDNvDpNVZeQryghWrAKgodsa",
  "key35": "5NZ1iDa7uQuVvYmRzL44q5gwwKoYx8whWk9S8BPtaeBoECM243zGQDg9dRm4cKtaPF6u18TryBoRBNBXmv9rTgad"
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
