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
    "NLLb3oLtdieKk8x1v615fAEi3672k4MBqtqZDqFb6DQszew98ghMREpU3zRsQKSk1fBLtr1YNwoCsiy2iko7Vmu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KPcxFqom6Pus5HsiLEcDwi72rzj4mi3RRMpZSaCCnw8cRkQFNduZWcrBVTiskkdMnhaXsqr3oe3QtL2hzUyn7c9",
  "key1": "yvz3CPXHZam1Bh8eenAVDVS6i5GBHt4SPuN4UM3n68ch5W7DNiiFf2bPcYr7nfhuUrMSDtRM4c4e2nWN3gZ2dfT",
  "key2": "3LfAVbin8uoDNNNprsaRaH6wHQWAaqfqsRXTB7EkPxFcjeZ1c2XNVy4uJsQT6gFuDKig39iREjAr7BSAqTH4nU1f",
  "key3": "5E78JVc9EeiFJHcmmWBYYTcJyP4wPhP7Vq8rAmvFzPQEaRdtUjvvHsBPF6L6o5VRjWLY13pMbp7pPLB56Rceq6Mg",
  "key4": "5MrNrsYhkyQ4oTKiDf5WRWvDz854FgrVEJLG8orEkBTkg4TnvQwd6FCvfHVauzAdSmrgJHJSkajvcRq7kiFxgvtd",
  "key5": "4WjMXTprY4d7iKDBu7RyPtLSKaXoEHXEqYGyYotvGAfjBiVkwc737UkBUBjHHC1L7dQMUmnSYJpDeJVte8d9GG6k",
  "key6": "3p7bqNk6C6hF1MsQ8sh3aaqRQQGUQBJMXg8NJeHmqrNLVRbze4nc7LqdN4NqC9cAwCBpVKJ3RpG8py9EYSiGQfgP",
  "key7": "61tq1khfcj8T8ZXv1d5usNqEHdhzW6n4b5WxALP93G2Hub1fDNFJiNuFzVLG8686J52sFKxNWwBT691oNZ8rxz9t",
  "key8": "5FQjcQ83Ykn3pkZLJ86zFv7cnpVQKAeYn3u65216pMVkYYsrJ6ezERJ6cdg4Z5ooapA2CkEVazq2eXEQY5irULof",
  "key9": "2WGZdudfbpiDXyE1iwSSBv9v9HYfKRB5Y3Fn4Y3482HoWmW9wfv1eNng9ssLAX5tmQeYwLLmmTp2VRGFFCA76Gm6",
  "key10": "4P8zwg7aiFD5j54ENFEssNBphebkxU6cqAhMc8VgYEPddJQkXHwhwLiAGFRnFSNXkFjrfV7vsJb2AnvdNpp9WzYS",
  "key11": "3vaynKid8kFhaeR2wdnHQwSymk9wM4Sstqn7mY95on28LvsqLczUgrAn4GuzSjAkxzRCTFyXppU36TCx4eh2aknE",
  "key12": "TWEX9nSriPaAvXJVKf5cqGwBLnbnCcEA2CtXVZjx8ZaVKVMaFiykGxQ4qVm8RRnVFxh122rEJFYPXTSwZyALrUX",
  "key13": "EGrDSu3CiCY1rT9BApDd2oJkm1uWn9vRdKtyxYkiXSzo6jH1u367w7Atofut89dKxQNMv61DyNAjFLWrWVvbQek",
  "key14": "2Bx6MESmUD9NTWsS2gi2GDtWrtY15u1PniRGsryiWuBmy4EvfUym7h3U2sEYVsFy2wgB7SyFvFMmfewEN8ShVSkH",
  "key15": "2vCgfhajagnvLiBrkk9cuGHdRCQmLUjBhycg9Dt7wU8AJTF8ZPPxcsG4kbeqe8NL55GnTVcHZ8efenvnW285eYQe",
  "key16": "2WUedS5SYuKQqMuszmMxxkeX64kWoLbZz6upvoQLCT4tQijZFmq51Ersa9d7J1x9GC1YTbtwiqbndZucpQKjz2a7",
  "key17": "62D3b281X9gDoRs8Xj3BpM9AQ877RCbyj6qAzj4JziWbZ28sMiVWydFYftJR7JN3iT6znYxomBMve68xqfVizJgX",
  "key18": "4wbEzD87rEFmr45YUH7GjrULgmoqiucqVcukmhWYoGqMMf1QdqjtpkpQF1SPLSRGNqgERfvtuYUH47wVFf6o3sni",
  "key19": "5H4Q6itLp93LS988UG7auVGv7p8L4LvtouUnicuhPba7hJNuYC26xAiA9DvouXRudEJ4wNX54MJWAsQjZSgMkUnr",
  "key20": "4eMDX5u8D5JEaWcxkktVD3Ut5FSjdYNXHeVP6EVa6PPgvuSY3QBRTDDrfWmTpuREc7qDyFSwXCSf6UpnS3RiZt59",
  "key21": "ChcHhgXvoWcq46eowsxWVSsNaeYKhptZJdSXseMhhUjXKWQKxwGux2FADAi6txrASJp6BTvup9pNBMjWorCqJU6",
  "key22": "CWmA7WDEdF13LaCttNATF1z5feMzVaLxvBg8L5Q7UaLXJEJ9MpNP8Xu7KEkJg4tFs8TJWx4QtNF2P1HoN2PMNAs",
  "key23": "3NTcxHLDVbdEDxn8Pp4HXQzbT9oGDat3EiZp7WJoWvaaJSE5ph2aPPq1VrZcdgaP2yTGYDV4eZxYoiyVATjinmAV",
  "key24": "49EqwZddDciJTjM4rtNc95FfNwAQWK1BjXNMzLY1dvk5MdwkSEDtFzg8TF9kMMp5A7Hw52g4Lztap927fsfbo7GN",
  "key25": "4u2d7F8uvK46B8ksHAEqoacuKSndLV9RZdz8kzWMEgAP3mkimz1VWfWgtWsZiVyd7hBn9gUEUoxtSv1bdEe8RQX9",
  "key26": "3vVZfoVt1oGY7Wnoz1CzW3kvHeWHRHPTKBkPsDaodBpvurRhUNTnXSPBgmPw7ED2gE37YuH8D2uE3EiuUSo5m6EK",
  "key27": "4kQA2n3VhT8baxeYvMhRvoF6Jrc1F5vsrvAZWaY4RK8sp6pv1SCFxHLTr1sAJszyEW4opYm4PcTfEpwQQ6GFQdft",
  "key28": "2wzTTfvUuZJ8cZQkqKQtvCjnCUhMVBvcnM1brZhyJZa859CE4t4xRKRHdbBwg6eLpSZQWbh9sN6GsdmQX1QBFMpH",
  "key29": "2FcaUKy2o11pSezKb7ZhRp3SC1ntyxGAELvefChWtcYjUjR1DsumeufVy6XHMnmP3RHn1XHydZG9up9QvVkTViG3",
  "key30": "5R3Khh9oB1ZDKifQhxTSQ59q6kxNDq1gQPd8XcXPGy6y7rpD7bgHczAX4BKfb5WCVTmJ6LHy1cymT74yhSaiJX2T",
  "key31": "3aCeD2mS3FpPiqdjvMd86CW4ZKEF3iq2zJzL5K355jZms1EEDxsyA85vxzBhmFRbzGsAAiFQrTo8uedQ6Yz3a4gk",
  "key32": "2sKAFKzCEEKBhmxw3iuyWJrZw5D3YjS3ddBzdAkyFjGFXdM7nynYQjNC6emU9rppJZ1hpG7rUnJLzVDJJx53m9T4",
  "key33": "CoCbUr6RRXXea1qDJz1K3zesCtJw627PzAVpAEGxA7wk1kQNnTjoHNXNBAvuVtNffcSWhow7mzxqTmrUYiCgcUE",
  "key34": "2wtb9Ka7ZAVAAgJDtky9cq25CPi3aMHqvKaKWx3fEteGxvRVevu83YmvzVQ2pQ2pgi91zpQoAYqJMrfHLkTTXTnh",
  "key35": "JkVDzyrHuLCMkC1xhbTicak5HkZxx46cpYnzWvR8WW8bg29yTavbGWoJ7rkc8PyNpEXGAQRxKWqf4gwBz7h7389",
  "key36": "2V5tDmZE9Cc7p4DqCDC2N8Fg23sPcpqHYCWGTYTFngWrzSuvcTCxWRpD1tNPXKDXZK7Qmfrs1Ws3jedcKxTg2cT9",
  "key37": "223ASWXMQLeQKNmyNkb27Zv4VHq8SsSuZxzZhEEQSytxWCT22A3swH5rjgYB4anjoJwYNknnuR1vNodJeiJZkHsG",
  "key38": "2DfXk6FxxKY4MLQfVgBfb36xSJBt1WwY2rPXgYTXKRnpDvDGrMSEkBV5skwKvvFL3tbpG6qaTRXuXs7ZG33eGaSf",
  "key39": "zoXrcqhkN1mcwXmpuCWDSA2BQKxh6V2HLmemXyXRQL7rxagRDQnD3sRPCGmXS58uRv7EBJLY7WYgcc1sgqKMd2N",
  "key40": "5nHbjFqV3SSbaumznnQjmiykWXv1WcqStBd6EcxAckoN8Cx8DHgmuXJa7DfibzXRuna5z1C1zaZ5cqodH1He7jPG",
  "key41": "PP9c3W3r1PfVHZcPzMXdsoTw1QNZ8Hw9TZtVVJo5JmvAwHV1iLNDCeg16p3NLSCJZLNquuvzDr26wqhKhdLkSv7",
  "key42": "41dmuVm6iFMS3GE329S4FQhu7cp52oYvFd9Q6VPcs4zz8o2TFvHz2M2Rjz5FCpcRGQQ5Z2PwmKsVEzbUcrKzA9h",
  "key43": "67jBMGFwuLHWGxJQZMcEtcP6tjTRbhYAZZoGZ64Syu4eNfKUXzPiwSFPtPX4erSVcNyHqhTkrjSdmcSPxZx9qSUQ",
  "key44": "4XMm71Ga6jSQoGuAq4TWBW1CGURHqSWqxTcYgDQnCiJdCkC5N9HR9dB5KQSStaFSdBxLu1LRMRE1JtkHT84GfFpp",
  "key45": "U63bHKp5sSez4pQdfbKbNNXuuquaXhybPXiPdCjV2dHghLp7TrwzUW11TkxHMEsNq3zRKYmFfnoprQHYhUkxDeG",
  "key46": "W6JNwYESz5BN5xS4xEHqZJ2r6oRu7L4TpoaJyLQiziGiRovFQnGo9JoGmyEaqc2pwadwoibrzjjzncqLJ9WyfXv",
  "key47": "5FHsVHCNWNfM4JURsPexrg4Q9fkWuUuXCqPPLwYArn5hDETtPraFnUAqPTnhmM6yy6vzuQsDMUr9bH7kVMcKk9Ef",
  "key48": "jd3UdRANaGX9t8zJyg4NSNepZBe99z2B7WJ7XZCuZsCEsaPPcV8GXDAvTGaGdj4wfnxF9PGom6yHMoLKEm9sMNE"
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
