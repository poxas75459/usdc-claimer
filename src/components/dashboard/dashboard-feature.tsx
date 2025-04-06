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
    "4YJ2qro8P7A2DC4LAs3qzdksyYccf82oigZ2d82KCWVrMba8aPgJX7NC8MerrGo5ad3ERF4a65b5FPD9op4eUyBk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "666J2yWui2j1EMe6R7XW7v5DyM5YZnpQcXDXUn31pqyHcTShFtF9X54vcZ715dWfSN2q3QgdUXqToYshFbUWf3xo",
  "key1": "5RZbaTax8ayru8ftk9BbZvEnjmYAUQE26TdW4gKoV5eTVC8v86XFpXwPnxZE7MzeGKt7EitpQFxFULb7tdUmF6aC",
  "key2": "4t1v7zPLLxbw4B7D6pgQmgjtXKvJM5UkvSPRqkAsfdBTr2TMdK8TTmf9UDrJht3YDwCLz12qNLvAQRxQRx6PKaqd",
  "key3": "VWCxepj4WAC6q8NFZYMKS1YEfMUEbgYhZvGrD2f2Fa4SaGnt4H8cKi2LRqqnayfeAq7evRWjMXBXTkfKLmiPRpG",
  "key4": "5FMmWmfThzj4q3efiqC22GDk7Znc3hsr1mrP98XL8ucovRZ1ULD1BXA4arWZ4kGcBxjNtE7Wao2G91saAUkHjUPA",
  "key5": "5q9Xn15ddSTfVasfDhqZSYQ7uS4EXcV26ZuV2is36eKYMiau8Pu8CobixT5wXxebpo6dMZjv9uW1TWnQdFGsT91G",
  "key6": "5PJfKtAG7wWKb8MiViRw8219UBccLFLZnstG6eznTDTuTxTcjp8UGqjGyBQXfhw73Lv8jPAiDnKS16Vp4pJxptBq",
  "key7": "2g2VPUSSBXe2o38SxWivDCw4sKhe24py2MvBM7ZLJFqnJGmQ2HJAkc4rdunjUcJNZguqFZtU5AGGNgzpZc9uW873",
  "key8": "5U3h22nUWoPduTaU8RWp5xay3zXEcSbRQ2hQw9Bo8ZzhJqVFDCm7yn5BPvP2Zk2mn413g2rtHg3vtS3ozeUgDrJQ",
  "key9": "39ZCiCcryDNnWAVbG3YacBKpmhhMiFuq1fZ2pgL2s7YUEeygP7475sRRy9esNixtFm4AaSZxZVriAUqNqGq1szyH",
  "key10": "QVyHowxK6sd7ABWzCpVgNxWNoJRnW5P59vKPi2CYq71AkNEG8A7aL1kcJLho6L6oi5tkFDYEYfMMN4W2kfvoVTM",
  "key11": "5f1dTuUvetfLoJGHBbWbEWBoLZV3ahgNeBAivDq2EZ6tim7Zrj6YztrNVCKVzZjbB4jjYEPsryyph8wyHFz1gZvD",
  "key12": "i1tZxGoKr2CTPBLyCaBWPThnR7gP19ZVx1UGn8XnpfDVE88XXWpZngCk7Wv7411MjCAk4hfQNa4dwG1UTiT1dgb",
  "key13": "2ah4WtzGyP2JrFxCHihzg1bw7wwZXB65ueF26cNMTRxbNrjGoLyWv4nSWu6qrs1Kvq6vavYpAoQnhe5db31wQPPW",
  "key14": "CSzEABR4HgiXk3FfoTKDy2ymUaqPYSnpMs73AQeLw7EcuTnjNYJknVg2Ktu7NJet6k2FLk84LoQFfUVvgR9tCTX",
  "key15": "2MBZ7ofswjhAucx9iTfGjdymvjXrRvDV5SyWXN7fuTC2wFEisx6qfdyv8XrSSedfTGogaS5WR1J6p1ktfMiME7Xm",
  "key16": "5LTuWQwzVua7EmXFBJrDSwiwbbWnKrzDEkFpzxwof95xvQDaB9PRtSPWCoDs6CBy8SNaBoX6393RBfELo1cgSeA4",
  "key17": "Lpu1Q3vBCP3dLWSoGkWfcXGTGrMKT2Qpyoam7hCTLWsB129ky8zirrrqeUEie7VfT9prkTmzLRxZ3DGN4PzM35W",
  "key18": "QxUALYYLjC6gheHHi4Hpotbx7iy12HXCV3VTgQWmsP7KamnXmwDM45HDYxVetJz8ygEtW4qwbnfcmyKh7R3mxF8",
  "key19": "4CCFSJzVuq9FdvwHgKkazya9mVZygksAyhaVMrhSFKjenqFZWfLxs3cyT7nXcydz9Ntt5ctGiPkrpnBVQQs5qB4j",
  "key20": "51aozcC4jxKQbnPekw5JdgFDrS2JofiaphzPHfbYnR5AxCkAVSx4MuB8vcyVHL173FCRvicoVvfpJe7wYKXCYfLs",
  "key21": "22mrDq5L8CT1w4hMbb9CAZuc96QJQtusKrE74KpddHgqsAFyuNev8apPn7DNvRZzkRRergNzgoonakVLfJqm7isG",
  "key22": "9pZtKakTPEPqKP6vrFLXwh1vRAc31em2wzdPZsKAjXZpgokNhJYRkiJ6LCsAFc1upgeML52cu5z4X1XQsWmkyYi",
  "key23": "4VBteE7xJoB1PfP14dA4xVpFRG6ijtNc6Zs1nnHPCkFwMDuZuD9vCm8PY1YW8NDScsgNmD3qP3tBEeTiv2VjBKft",
  "key24": "4s1Y3fYfQcetvUdhPFosuDMrtRk41Aye7z7SganUrY4zH69yXemBb5dLMupfoEgrccXJ4i7L9Tsc6XGYe1h5kKr8",
  "key25": "Zteh7QHYV47yz9N1ha1bBhDtJxtCxDwPjRjW6Fy6vFuAJehncR6hL21syGLTq7YRyUwCDTZ8XEThdsFL1iSNJEw",
  "key26": "2GGoKVc57VsMqiP5yjN6wtsmPXoGMUCgjfHhNR9jKN6tTgnnZ1YhC36h3RtzdnJTndzm5MMjeHuqvvjeHj3uRFgw",
  "key27": "2idt7rkKnUD5EJyyTibGGQE4qBMYYSnEY1Amgdfen35K4KDqTnvTyMi3TpkurjJaEjUSG5EGHBfZqBrx3g9MjYnu",
  "key28": "3cEzBap7CQzX2J78FPwdngu1XYnK41bgf2gsqYuPr499FFz5bvSMZhnib6zpWPRsCi6EbuUoDsppojoQSWx5yayg",
  "key29": "3UkxjyKfKV6NkTNLz5cb9iZePyS4PYngAvuixzXfhpkE8u1RgQj2xvkUyXuvFpb73K9Tt8jJG2zn2RpnXMBDVEQN",
  "key30": "sYURjsgTYVHTYnxAzqGRinPbu6vqTHoXpqdHezPEwsPznSDTQEu5QG8jwWrv4czKNfgwxAi4z63e8y22F4E3ui3",
  "key31": "5eeU5FnLS9gHuJ8exBcRmXhXZA6CvJJYJAxRQMYWvJMGorPUE7u9NzQGkzBv6QL4WAr3KQDr4FUiqDHatQgGk5Hi",
  "key32": "5piTjM7cXEXQshkJUDfJnVMEEtT4i8gx7s2ZQhZrRs2a3oTE5HfpocfjN8ePMPX48ChcYSLJ4rJmrRjwMyJnUw2G",
  "key33": "4Zd2sH2dALaqiS1Yt9dthVA8Q9tesBrMZ1wzdyb156uY1JVAWkZMs7Hu47NUddqfv4hWFcS8WsboHufMrAA3qy9U",
  "key34": "4XSJR3CNyuPp3W6MDpVSeiegTcX2vEGV1QEbuXVBmdu6BMnzLc56wtzTHfcwGgiZ2coKAsfRPWe7wKUe6T9cHAGG",
  "key35": "4C95ZmtycrdcAzrtazeqJLi2rNVCSfbSc7jjDt5bk7sEEqyisaybCsXyrdhXUMFvJDveX5E3Rad4QpyhwYrmX8QC",
  "key36": "4pQEstiH6Ft9LYSU8JuUse9JLg5cx1tHEhFCCnVpCkB6oRqd6TjK1z6PoHNPTp8Petcepiki5SBYyFU6Wn1iBLBG",
  "key37": "5dxhBb1CkDAaTmUKAUkMNvxNWZcwMYovEvu5oPLArw7XktzMzwHMZptmMLHMhUjhtVHkUV3pYLehsa8YdC5GAHDU"
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
