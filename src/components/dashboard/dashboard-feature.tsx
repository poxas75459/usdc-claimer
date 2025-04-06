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
    "31b1Nuk5tvuekuWKmT4HxMMkDKFkUPahxo31eMNsqNKme6VascFvRPmes5zZRRpLodbZ3iM1DKkGSkcjodJhyTYb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SjdrNNkyQNFhF254FXm1mK6TVBPcwhQhWXksthCHma1CyK7tYhZMeefQ5HNYU2xHKZY6SJH2eLdpj3qwzgQhRV2",
  "key1": "5TvzmaR9GJXga3hAJeW9136zjSfDrfDtfbkZUcRt2UkgzYhSbJKJypMpozNQZu6wse422oHt1Uj9GYeqRBi8k4G6",
  "key2": "2tjz5NDiWwoceBSQ5sHfbkDonopjb5y5XAWzmwibtygZvamwVN65esMPEvdcvkHqB7ofGvtG2LmAFfBySFhiHqu1",
  "key3": "2k4nWqmgGc6B6upjknMMaE6r3UWwgbr1VBxD7LMMxKztSi4XsjrDJghWUUB6E45xgkdfAs4uN1Ucyxbu5cDSeu2i",
  "key4": "PYMfzoxYUnvrpaLZqPRVtk6A7X5e1N2YBadYf68fziV7awb4uuoSDnyjfwFpmuwRwEFF8kdE8tuVCXt7iyhi4Mz",
  "key5": "4yKhDZzmJo4fgspuoLv1bzrWHkkijqcvPemEQkVX1bHMWR31CiyJxpahsafyVdBbn6m2KHtUX3ZKPnuMZxssu9pN",
  "key6": "2hfAEFVqgEJqkHo31uqtYssz3BCFh5jfquNAcnnWMdB2sLuAmovCuDk9wKSULpGQs7NmpKazx2fp1JhFuh45SuFP",
  "key7": "3G1w2khtGBupnWq9tv9XxuA2KUd7Zp3o94M2SgHwBFKP6wtcD1XMapaL8NyjmdfAsf5ctZxcNK93FV6X8kwPmr1s",
  "key8": "4iAPUmF9zTWVvZ8pp5doedQjKMWVzhn2oXbqaxbpkAeajn7YLi9wm9N77FjugAUG7va5Y1PFCD9qd8ijGWFReX77",
  "key9": "5moeHHaASUAQWhtHPX7Rku6hcE1PcSWaWTuH3xzEqpT7uJF1kgakmLTWs4h7ZjMUPRTdJe7uMA7kjicUNXCvKPA5",
  "key10": "5iFpyPy1bw6JpLb6BYrX4LAgMhGk3r2yZ7fhFipV9N4cJmKy3mGjZvQZnDMFVoEhs5FdWBU8cANwzJaX6aLHdv6Q",
  "key11": "7X5Wtwp29iz9uueEAD5ok6kZbpqpAyWmgaX8T9JN25Xw4ZPszbshJ9ssLGzTFuHnF7Sp18uk8BxPksE1ZfVrZ5N",
  "key12": "3goxbPqf1Bk7Fn2idiGEaGZwJiLSdhZ7gA4rc4eWCVLD5Tvss4GZDQhproG9GkoAHym3ZLRdQ3GhCa6bY39fsoyv",
  "key13": "55bXakqrYoyZ5bi5f2sWEtuTN8VnYZM7EDmGYfhHWfHpMCWybsZ6QEuhw9yyCuvwmVVvcoBq2AVmakCNmLgDpatb",
  "key14": "PDt9mxvNz38VNVdD54Y7iRzYK4s3sCc2vggfk2qiUE5BaNaRXeZAaiewrxzggZ9jsCs9QHmVaACfBiFmZd7TJ9s",
  "key15": "3DYfp4FHXsQt1DumKJ5jF8rHDFBeQXQXwxQdpxmxLcHdF9bKEsFzjCdRmzSPJMNjFRR2JeYZpqw3vZKfxB1uyqpi",
  "key16": "57E1Tmdf6mY6S3BxRPfo2ZcVjyGNUmvYUocF2G6pggAH16NckhDb1QzXi9UjTgVpSshgnrqJWnukAtBt9T2dY3k7",
  "key17": "5WAMKK8xUoepMtswjkfucqiayaD1LKT9varYagpKHLCHj3EXqSCWM2twEbyZqUFGETJ8dmvBNnttkqAhqzrFNaj6",
  "key18": "5y4tVYqikTkLS2EpBZTQGNZjpxJkk5MqNaHr3eTLJVYYHQ9v4Te6bsd154krgHmSx4owe85BsVvk8npJLzJxui1Q",
  "key19": "5pz1m5CKZkAF3w7iHFge3nm2Zm3C9LfFdC3YhUf4dJUifpQ6q9uLzf1XYUENwiJnFVe23CMLqDyio4AsVyYBK7CE",
  "key20": "5843fKtqJphgEm7v2vYvGEjjUuMfPVP8H5wov8izLG7MYPgKbS98TWDuzkAZcqWMJRJdhVCD4tVEfABGpBnSBGFv",
  "key21": "55jjdV8x4v535tFgchhWU525Rhi35PPwnLvYN3HpFa3YCRKiiBr2PBy9t2zjZb4KfkLvcbm24AwzzSgLoLQDpPge",
  "key22": "5e4duErCcxHywYuosvXhq4VyN2uDVrxrHPpA1ZsKUg2Dv3rdC8bsESngsc8Sj1uh59XEQ91HbBsGDqAnh2kEBypY",
  "key23": "4dYxzxE5Evz3G6XkUwEowua26M914miJ9KiUcXUWNPVbqQkWzcF2EHVsTJvhALt4ePVavjz4peMjeG1b9QzQQRNS",
  "key24": "zHc5KLgdLpQwUyCxYV8irCQ2j3PBS8dypgrZzpPxAu6baXF7Usdrqmv6qbETmvJAXJXFQPEJzaWD3LQmUUhPBGQ",
  "key25": "5XrYxstQ2HfiXgfE7mHRXE2kSugR54xbRpya9rkCddKw5mJrApCNryVS8i7HzNJVZMTSH9KVn5AiKd2kk4cisg1p",
  "key26": "4AREEHNvSfQibEys7UMstZFJmspnkScEtyoVxSNoY62kemMd5NQ1Ro54RvwU43hdKsZvndFUtg6EdGwERg5MwKfp",
  "key27": "4SBJpwL5GZygZnxZtAuuY8mog9z4uTdof8KSxmrQ137Y6HEzevosLKsm4HV942ejMnKVmg3vkSfXZ9kgwV2gXfQ6",
  "key28": "43KjUNk4m5UCfzDwkd5S6S97bahBb4WAVKnmnwv1q8F496m2AeHhMuy2PEKWXX83NNuCtSykhPpKRvpWo4jJ3wsV",
  "key29": "vyA2qU5Hy3AZZvoGhcfnCqKpeqaQAx3FMFGmAj78cWzmKzgve8ANZo4LvERLHsLn2nHChPqvf6PbPNVC4qJQ17X",
  "key30": "3HGp2fBTstfLgsdBPU8MRVYn315h72iuDjSWX2ioUx48PtRcpXccFRkgCGYWh79dpfpuwEyW4gARPhJizcgBNaGh",
  "key31": "btNcjVpED8oPedz8gLBvExfcU87dZFZM6KC85rKsmyA9R8Fa3oHnb2NRBNRDcKBAZc8oxBHkjkxaE6wKitVv8HJ",
  "key32": "p8ensA7AF4f5kYaaX3rWWjEzSo7pSXgtTGxZy4zxx7wvoNvNgPkG6qoX1yJWorVzMdpLPzFmbWNFVskQxbNDjq9",
  "key33": "3j8v4mFQBdU9HkwCNxSG8GdPPd4hLTE53aBftVt3FQ8mPknaJSdE2Sssk6wTyWpy7Sso8WtixwUrqEfLGExwRu7y",
  "key34": "2SbWk73XLPJ6fzdSBBvD622doCpBCq6EAtb44boErcVva9hydoXykvCk3hbHxg82rqaSCS2uuRgvVSMC8jHdh52X",
  "key35": "3jo3uigp1oahfKbG9rvP82wvFodj6PohDmxbivYGHMHGXPr54Uvea6aCxE4yr45ryeCVSd43gJ5ubdt3x5BRzq7r",
  "key36": "4yqUcmrLniwzrjqHv4snChGMfEP1AUrjjszhdtchmZ7auRVf2AMxceieWa7XfNRoEVYNTkY3XeKpPkB4Mhez7Bgx",
  "key37": "5pRM4nN3eEpDAaa9Ysyw3xiX9Tknwh8JZm7PA3YjwKL5NmZ3eGxtmBQPe9vzRdKVoQxqPrVfjZzvDhnmmkzsdFpQ",
  "key38": "HaNG9TobNcNpsMbsz4KbBkT4FrZSy8sp1BX1F5NWPuMzBx6wYVwxVT62sxSaGdmPTJwz5rb8DqGY1hmmWFdYJ6Q",
  "key39": "r5URezNAEJUHGw1PxghyH8CEZRYLsz2hXLa8HoQbVrJ1h2J3QN1GuTE61pAWLeMUQmHnVeh61Thjb8QZPTeL3vw"
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
