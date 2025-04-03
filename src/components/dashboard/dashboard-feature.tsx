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
    "3LyUAXVxcHgzTJqgHR8TEvySNhTLxFQUKLpDUWhEgPpv3KFwaNXynqukSF39q9rULf9gRXQiGXV3cLAfth4Hjg61"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DDBqwNHmrdX2BQPUY2X4zpcVKG3ogHhK47Lm2m2cHLET4odSRkHiuWLdETqWdTgtuJVssmJ1AcU1ehGueYuhrMY",
  "key1": "5Bz64ZkiAkMsgcm8phxKei85YrMzCwm88VFpzazrmFGMqPHDBLkJzaTkQuEyPdR4Ey4kZLEpKyw3QCxvehUtAC9C",
  "key2": "3emkJ4tzfjuF3AGUS4B2mASYzSKWx5ZcN1uaEF14NNK2jhkv7pBvKQVK1Esmp1sHeYmm635di539DuuiUL5DkyV4",
  "key3": "5rEjYdDiRKbYQsda5Vd2TAsJPT2Coeyxa91kZbbad856qNd2nymk5vUYRkVb29AH5fUiwgESwGDVX9U7qhk5TaZT",
  "key4": "3p1npgDUKob8LcrXmYxkHXZNBqi5ZEyKqG8SwiLpJZZwAvjB2976H4TTgfkEwbimub32bG3rHzaxQcVeXFhkPfoL",
  "key5": "Yq8V9bXf4aqqeCPMa5EwrNu3inFdJqiL3aKdx2ewSvozjfVzkeCkV7d5jpnSwJXAHMCRTRKjjvUFHEHBdcREpjP",
  "key6": "445GipBTXoagUp7sXaE8RHU5p18WzWjbPPTksn7cpXygHHpWvhEcRtpvpvd6xb8m6tmukz6g8thg1M3PZBbzZBXe",
  "key7": "2PYGrC5XcuRr1gV9cCXqruaBPzLkWz7gKD66XaRzHpsvbkh9oANe6cbaNMBLdEm9ThPQVhRRwzarTwGStUgV8UaJ",
  "key8": "5UNTGHgyHpRz8QurP5CVfooERUvV3VmA3Pj2aGZ9xLaQht5eJi2Q7XQ1RngpccwuT9AJrR4vzuxnK278FbJiaNV6",
  "key9": "2oqhtUfm2FB295tCxsSnwBTH19juVufv9qq4kq27tfUnSmvCaNohYPfNSFYqgTH96Bbg2prVCk2H6YwVhQWzGzbA",
  "key10": "3VK8BXz4t1tB66Gw4qKJVK2bD4poBUqgAQE55TZtN2xbpt1V7qAWSDQqKHFhr6mhqCHV5pWZXz1vvSfeGbxamBkc",
  "key11": "5JiR3JJoJxz2ohDkaoUks1QF8YifJpc14ogoKHjL8Wmom5RQEWXgCvHHZHK4juPBCgBiQmpCbaChrzp5Kn3G9Jyt",
  "key12": "27996vwccQzp8rhwoifHL1oWYetuTYpPepVyKGGKwn5qUJXJwnH8qqHSmtrG4XovtHrrBu6u8SJtzcRTzN5viE7h",
  "key13": "3UZ8ZnPA2QcHsGAXA8yGRjYs3TejKLsE57Sctoqb8DcWkbu27jznrg7impxScx3BPJPu65VmSL5i6UC2S67crkXe",
  "key14": "md1sd4UcBkjNwr8C8nhi2PJvnr7ZR6htwmQhzLvx6uoM7QUHTcZrKY6wQoRccAc6CG2Nd3AAKpLKEnx8vZymvcW",
  "key15": "56dV4qH3uuF8uSceL2KZZpuWaCanLi9bCxzFY9NSms2CvBFoQDJ9a5tndvKnMAP5sYp7aHaoTL6xuQXBL3i2epvd",
  "key16": "4PMGanTp6w61JUskHFvUeYGHC9aHfpDb1aHsLDrEWfjHTgJeMdkykNRNXJxG2BVyfAXfqbP2yszQFmyfEEeAtQch",
  "key17": "2NhmtMGhQDn1dv75id2p1dwpT5nosQ1YyTq212Xp16pMdfn4quJeywMvQ7Ng6nHkkojK3PUeRvWPkdF2eV8rbzLf",
  "key18": "26G2H7Qmf5TRTtE4gZbWrF4kUr5QztwHb7196XuksP6KzAQSncD3jYSh1zt3ngzfER3vgkTfeQpDTN4oC2tSDZ2x",
  "key19": "2kVyRhjAnofhRSWgLxFciK7393X1jDMFrCxa8BPReBDQiZ5K5bJNitm7cH6kDaA2NHc5e2TgBfsnSULfGp29XakZ",
  "key20": "66zyVjbhA7qnvvD5Y6SJuYUfsD9senL3vSFaZjEZn2tMYnmaE4zWbdfodyrkGrLHayCVNyPMZEmatYij4hGvW3wp",
  "key21": "5WEsHHyffgC6FCQEZFfhA2itfcRTPfZPorGEdptRWtYWeXrkjMPoARBnNWMASavgSvDSdpyrbxdNViAsTVoVCq54",
  "key22": "65tvmimAPjfAUSRapgQgKSfpo2XgdQDHoeoxHFn3DV4DGaZ36CepD5peyL2RJRtdLfXN6mQBJutDLVjCBw6Ui1PH",
  "key23": "52Ahw4sAVkCjuepparxP29soefoSxxMY9KcQYaUEgCeZo8qwcrMX4HmxMxH9nHL18oSvAr1dDZBUyYpptXAfnGjV",
  "key24": "2fzfeSH2T7aXEoqiE9SoHpBcdhFrtY61LCkG36DSwrWGnz8oTnsfwKCJQwBUF5AQUwRFnSTKye6k2UsM4JFAzevC",
  "key25": "mdUUviwSEwkv7YzZdJ9zXxkwZoyJyqfzCGuZRpq7hBJ3ZCfBCB4VMuyc76mJZXgpsBkThVWdwW59bDWZSA6pVGz",
  "key26": "3GC4x9Py8TZJiZ516civsmfQ6JMnjeEuuBnTQn13BMBfowewUvGVYs9gRnMoXv7WVS1JCyetxrpXq1nyayqbZyui",
  "key27": "5H466EgYUw67njCsFHQLAqLDgAU5yEBwnEr8WyLrCuvWTeiFeJWzquLAZhEd2GzA71WEjyofxw4yVRsgn1yydzny",
  "key28": "2XJnrFvawXkzvesNZHjWsm6UK3qHhnkLbraVdFZzMzvurpqXfD9A2zsPQoyJGRRA1NRWUA2F9aZByZwqkGyFBT6m",
  "key29": "5zxEzc1brWkSGEH9NC2ZpXj2811UQ939iFdJ6pFgzndtsT5AWWDS9cydxuracsQL2iWdc2GWkvSFMmybHHDPGjRY",
  "key30": "3kwiGwmybmxqsmzUXsaWkBdH6uvUJ93ib7qrvrXwVBqwRYLvHC9QRV12i2cW5nqYRmLYydgVnaf1LCD1yuYnDQ4g",
  "key31": "29eWX3a53eqSRY1MYTmW7XDmtyvUAGcqGVN4dZJ2FNNjEvYnkyB663Mx7QKSFhN6rpR12UWJweHGx4soWkE7haFQ",
  "key32": "3pigAPiJX4wD7maMDmQYomS946dWTjdrFZhJi9EjeyGnaX4NTNeePJq4VKWGvzvPgNeZNNBXMe15w5nTDrgzojdo",
  "key33": "2hSeAARzhZebnNwafBXRiDirTW7b9eJr8cjNMLP1NjLphVTyfo2doSe62TjjLWBUe113VeqduyzmVYXiBJGKU4G7",
  "key34": "3aBGgBK3nBHrEYzsf7ctmfZYHMa3pW1becioAbiX5Ps5XYxXfyFGo8eRrMBqi8zQZowPtKeY2ipJ93rPeG4deQx9",
  "key35": "34M9SWK2oQzkd1VScCFzNEEsLjjsK3cB1751fESzbuHKstWuzoVma3HPn5zQyVDpNq9rh7t2ZWrVZW6HYoTBSCPf",
  "key36": "22EZhQcHyims2VAfQFg8FKUKTN4UHYuc5oLroxxxDhBoky6bzUrqDQqsmcAyT6Sq7y3maQPjL2Mg7gpSvkpuE3kG",
  "key37": "33uwsTj4b13gLWtQLTu9Ag7Tk6NXE88geZbZMT7ZbvytuwbaVDzqqiwCCwaX85RnsgwJhK1NCxFqte85KgtG92Jc",
  "key38": "PFtAvvpjqjQHzkWRV6PpHnS89cn1NGQ7rin6UcqdoDhivfJsv8st3wHDCRdkEw3RneWUF367298sae65bzBmn8t",
  "key39": "65pgg1jZSNp1CASJkPRwrRbdDmCZw3Ksz5Hmrc12kpP5kq7xKC8kJwjr98yk3hFvSxW4kLzDv6fjqeQ21CuutnsD",
  "key40": "4as1iRumxGCWd3gmYfwTPRMNLiAsu7eNjW3pi18eh61yqTeRwBHxYjVCSurLd1znhxRnFs7oMgJF1Na3yhwkwdKt",
  "key41": "WV9PHn1FeLrpbzGNgfA6HrXZoGS4MszXfTvwFsLm1zprG3mbpC2vbARtRnaRSVbYn8nowNsJWSXdnLFD3NBzJEy",
  "key42": "3mD3ZN3X2ajjmyfdyhoChefxXREXqHDSQXHv1r1VDMRizSwy9qWA1hh6NgWGWVw7XMWNtcidJq9RgnAvQQqworJL",
  "key43": "49hLYRfn1AfEgGasrtZ8JMkkGH2bb5iMWy6Pkh4QMqM5ZsHMVnuRa7weZh9Yut6hcYgFbhS9qSBmtqduj2gLwCqk",
  "key44": "2L7KGJQ7z7jLhmbNdazk2Uth3dhnQdv946uM9dXV4sFDpuG1euWmmkpATdB99HNhX7867JYmpi4yAEJzMHqNGTK3"
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
