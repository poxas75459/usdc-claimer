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
    "pvMvio5n7r1uHyMU8zd9HaSWiGqJQmSjUHcJiVGgBhxhEXHQ94wCRDjX6AHNwXeUFXJJdF9KiSo28RN9WffEeDg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q4WJpPcWSacPjtQK3qSYjxGcjtpSg6bPoKZX4GD5VXWyQyT1NQNidXz4JoZthDTATLrbEKS77VyErQB69J9Hp45",
  "key1": "5pKWeTkqkLBMRTXRmx8YcUE8n5H1S1TaQpyABBKjjXAVC5yaDVPc6qnffTP6YxQayGgW2GGPUGkNJe1kZ4wHfpKK",
  "key2": "3jqG6XPrtGZjAF4vra5HKbAi9ouVkU7UHBWizWJUwBLU1Fvhig3q8LCGvFQyWk548Eh1sRxEqafUboHvQ6ixLukv",
  "key3": "5R3TcyJCwrdqb5xM5eD9ESp7meiE9ZNkw276G8nigvNyPTTh9Mv7JGiuQkFFhuL7uwzUAfchWnmhwKoFyrftgYf1",
  "key4": "5WxPUcGmdvLsPVZ3t4nK5jg9kME9sN6PUtQs9Ev7ZtivUJzyraQbxHjPXqnh6dFBd4EK3Joo79PbgJi3mJL1PVGj",
  "key5": "53Zw7EAks9VVFPBi4uHvEviixKmCFYr2eZy5QqBv3HagJ9fFvC7v3sskjSeypnEk3ndU8tq3R6bqu6FrpMW7hYbS",
  "key6": "67kgf9dV2421ou6BwCQdDNQ3L41v6onYupuqTuUKU3M8ygirrpXzMZncZNrCsyBd2D5L55xNiaKJrbQUn6nUhxKs",
  "key7": "5ms2K8dJsa5n66TXhkeV5hFt8AiCjHJre23JBbXhLQ6wjcb6f4t8Ndy7GvqBwb49oCCmduFTSijEh2a1pGrRmuWV",
  "key8": "5u25RKPcZpoFvHQvnjqtRzwn2w7tE9XjX8cjJjJUZoYGQ161PG965b3hgCaSwS2MYzPPPGbngSRCJdah78ogJ1Cs",
  "key9": "3FkCm2MWoQGhvHgdBRdsBuQdRFrCABSVFVqgR6qvWUJtLNgpe8i9RzfrHqTSouwbaBQtsBB6Z8wH5c8sSeFquCU9",
  "key10": "eBGezr7KuhP6USRG4X2qUg7uzpKnZfAEUoQ2ZessMAG483MWuRj2VSk6x8j12P2u7CjeBb7CVMEi2x8MGYnNhkT",
  "key11": "iyK1tgxw42nd5dHM4oviAGmxy4yHJCmo9rdxThQZEWL1p6WGkTZVSRbHGzjxjTWFYMTXvYxyrtKnSHCCJQ8wDXM",
  "key12": "2MveaRtNdRNLUDJrLHqdN5jcQLsJQJwwFXkRpGh51rtH12ZeBExfU3cpVCo5svxyJErNtPMbVWaRsDkQP2ZbWvwQ",
  "key13": "2NSBmFKbvyNMWgaEhUdNcFWsUeCMjXNBTQHHB1ZneqGuA2Yo6UGkS4i8BHDiWA5SmqMv5T8emGUY7GgvEXr8JasC",
  "key14": "4N4oeggGaPAbbDuHpVAchDfBYUw5N4MurHJQkgD9cNLAEtKbbHBtZx5d5WcmSbPwBCyccNTDEf5FkNtcdZJxRVk8",
  "key15": "JPFg2U84we8hCbRg5EmXXj9JxJJQktGeMWGu5Ws6gejtbKf8f7ZSrFSxwpRyJFQ7strHriiNB71eqAyE3rpX9Qw",
  "key16": "55CDhaHYp6JsWFh2qv8omDy7fj4UimpnvBrkwJpqCBW2dq2ukhFbedAWXEL6j3DA1oo9RPZq4rxkom23j2y7SRVN",
  "key17": "32hju9F5JE6gKSAvxYDkvPyrKaMc9G83eBfEzPU8Rkyq2UAN3PsR32PVUbxCChvs4xHyqUgCV3LKg9T4LyxaB5xi",
  "key18": "jHgf78RCvtk5nG3FdcLwENuhGdYrhutTcfLXe4gZBd67enio9UUvmPWPJqPiEBwUdCrWkPqiHQhWHag1FgRk9XZ",
  "key19": "vXXYvWB9ioX4qwK2gDyhE4WNWePAeLwKDchSGqLq5sQvK4o4uwtdTAbDX7CkifZaGikSYQvatdiKSWhPpcsJep4",
  "key20": "4u7ahmURx4XZwhp7wjGwHNXs5TpNEHUx2DVqrxUtuLfcF3eZfmbpa64G6daKcS2JjK8LYAMSwszAJh6Cx3au5LVz",
  "key21": "3yXrrojUpRd5YSzzTp6QRMkihy9FPUyjdDW1sYcPxDGSVFqG1RYeuQYxog37MxCxhc6XqvRJToM3RKj2nYFk7xBH",
  "key22": "2DcY99HfhUh89ML2h6RqgzLkbnXEqeZqo2kdcEXkVAKMQ287wjTNDG8mVjSqXvLSE2aQjLBaXsXx2uxC7TqdDKEp",
  "key23": "2zZ2ry99rF9o4y16zyGmJqg8EEKnqrHRibD7Sttygp41Khm5bWD6cyZWKU4z58YbdjqLifp2nLBcmoFa2x6AZjWD",
  "key24": "5M3JYWPnv3xLyhpoMYrRNxK7HFXv9PPBGfJC5XFg8mvLgWnCLRSZtWwgaDmdLxYgEvKzymWysp4DLrvaKgM6Ryfr",
  "key25": "35mAPBYxC99Xs3LTZ2QpDLUz3Din8iKkrC2oecqehuuxgCSiMUZHdRCAA5FiAGFWqE5s6jCqLoFdv85pH1H3m1S3",
  "key26": "5mco5pok8K1f8vDrnmaW5hbBPdNPAUppgvvkyz3eLVNSDZYYwBWYfKY9ceVmjjT2NfgtDHrYjnVUydzRuQDsvXSN",
  "key27": "4RQb15CUaQsUHZAtJeH4TG3fSwkWZPG1PqGxeQyoREyupknb35JSBL2i1ZZpMwi86mwymKtJaDKmJuNfEEZvFpMK",
  "key28": "4AovhQv2AWr7Ydk4KsSzbagaMmRB47Q2BtoJZaf9wvosciKFiHzEU6WAZ297hpEvbRUuFW8E5kb2M2CoRu8QN18Y",
  "key29": "5KHpTYPHPtgQUBRQYJcMLK9qiPKMmDcz8MP452pZnPpR5CfXRnT6kRDdgq8qAqt4gEGaXPR9D6dT1yB56gsPofAY",
  "key30": "2Hs4CvAe5zthBdBpEnQhJ8WK3QYzEmN8LvcbmUraqbCbafA7pD9FZc8X5zQkttTaavBLfb8gfwXFKEDJuDqKmUhM",
  "key31": "3rkDFp7jhLUuAS83kH8zGBU973DdwfEAa69LKCJ3Nys6VKXwj17bCtQMQDZL2z2CGH9x4YJco8uJGuodH9ahXkhk",
  "key32": "56F2oNqLAeZMYGWxsVE8bDe1qxzi5EYPzAxyhGXwccRLt4QnUEeZB8AWnguEw15UuYn2dtKFaBtYodQr8fkAyzvS",
  "key33": "4Aq1rKaqvA1pQbaZiEJPvrY8dnmA3q9ARyNQ2U8yY6ifccvHm9EaSmpX19ZN24yW3UdmELzJ2yCiKKYnqt2V8ELU",
  "key34": "2new9eFCR2xNJStq1sbxCscUJKN37HqNSyU8KbHfkyare8US6Ar97SV6Trmm8wxUNLCs42N5dfQtDF1ej1ENvs3y",
  "key35": "2iHubdRWU7apaRDwjHYKjVRbi4tQce27LHarCtGjKbMHtWhAaEGRCJVhF2HGpvioikG4Uwt7XQdPFHtBL899heBy",
  "key36": "5JQ48vy1LXpTqUoRpCaL3zhGXGuqu2pU6FTRzXkNyCZeTyk6mQHrNtUbBwin9UHG7XSytKnfo3RAk4RiwaJPhz8Z",
  "key37": "2BGusUYan4gFUB9cQ7gorQiysAUKSZNUFPRZRawR5VFqHAkUqBxq5Mqw8XNszbEKMrqNK1LMmP1goE26DN7rm6uF"
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
