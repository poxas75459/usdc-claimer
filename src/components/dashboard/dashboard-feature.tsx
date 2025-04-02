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
    "4EoF43Jrq3eMrsoh3M3gJr4jKen6MtUiCsfhr11A5jgnL7JY9EyZotH6GKdf8jexLG3FoKzCYAmok1fx2rqJ96zu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58uAWMc4SMfZv4f8pe9hsDjEWhErLWfK5T1xDyW2Emp4dAr9gjsbVjE94oeibVCpF3XYvDyTWZqeLYuxzqv3BuU4",
  "key1": "3oyvFUZfJM2EXTSBTUhswVnhhmHggntzxrUoWkdV1C6NtRaj7EknPz1qfKMj4mVjLofmuzWM4Tm3zMK8GkhCU3h8",
  "key2": "4F6cqn9j6VSQjVWdZ9yhy3KpBKZjniurR8dcQTbe1JYhzcBUrXsiXvBTtPZm93cf62rwWj8cyYVGhWD9EWB2uTAU",
  "key3": "433ujj66XeFiia3Kad8u82vJZeZTTKfJiDV7h5HDHGkC8i2kFpeLaGaoPuytq77smkwxNp5Por3poMW6S37iGfqa",
  "key4": "2HjfZhL9GCeJJQe4kGM3A129EQLYhmpykeB3wpBaWZwFzf22wTiT6LecYMYj6DHnFHc3SShnPwNb37rL8nSaxe7",
  "key5": "4c7D3wccXPXbzaajdMe1e4oF9K5WawXH7caXEB9uVq9YpUQ1W58KABmz5bReihsBBD4d13MqyUPHRYVBWacuUKos",
  "key6": "3qMfQGbBXVsZxt47iVCb8xbKjHH1iXUU2xk2XdxVnQgurtwaRAby8PETb4cmBwmkxnxJN8XMvViB6uPv1w2tSt9",
  "key7": "fy97cfrXVSUE9Am8wUWvrSmVxV7LsE6M1whHtJ1jDYvAhZXRksyWQkQiuXxrhcbr9RRTqpu6Hr1Je47scrTUHop",
  "key8": "DP5cmbuLRW6mVCYER3CeBjryZuhoGirgpaPSMHuZF3cRdzk2gAVRTu7GGdYDgNkSKj1Zw5bpQLNXbZr1gjBgn6E",
  "key9": "3HUGWcDusaX1JXUj4kfchoDSVfcKSnbDTmqCRUVqCRBjWG56eMRRMbrC8pkonkRn5BWAQ69sDJ6ikk2Ke8wkiaef",
  "key10": "5PaaE2F32yvRMSpcQCo9HmRrczzYRHc8cD6HtqaawEZgiRhGkw2QLQgNztCN7jDeNghjADDBL47T3EHVsMdE1hQa",
  "key11": "52UqnrCyDre8nfPnxf8KkERMVNy3qpUraBWue3vhjpMe7NKBA7qhgHg3NMknGG7ZpWqHUHzWGMXEDj6XA4FMvtUj",
  "key12": "5C1o9CyJ64meN5c6pfFmT6gLQBZuZoYLRGmqcfczZNQ9kaxus1yxAKSYUhCDmEEUKKi3vz2rNG4FeZgd4rz2hNrt",
  "key13": "5DdE48KGgFYw7DwprZFAzyZP6k76YF2NeoiDff2Tv6pqN7DxyreXhjBBQrRNsne4bwY55oVHt616V1jVwL9q6qQ1",
  "key14": "2TKszoVFac9sLsWTGX9BiBzB8QwMQt4792fBdhj7JEs4SJmE91NANdn2qaLoDs2qnPAG9GdrCEW2H9acqpM9rtic",
  "key15": "3q2tCnqXC9j3qnPi4YJFkQVACXdjZDxoaQakv8qzVwZdprWQfgio7rdQdk4EkZDxfsFXyPQ2E3Z9ZcLLtEWsyW3C",
  "key16": "GtLn55cFnEmpMjUKJkNENr7uBu5zTZavkuJ1up8e7MDAFgaXqjm5hKBBEFsiJhYL2wukE8Kvwv1sgNDcds84ZqR",
  "key17": "Q7N2waNHs1ffLCTG3R5GwS4DZmjuJcUa9NcX9qhuXY7tj8n23owm263Hsac6VArx3KJVq4WcCwiB1kvCVYcoFkk",
  "key18": "4jko9WP2EMqAivuJHjcZdFYtGSRHCmiy32TbX59h64YRvC1v8RyKs4T5DpYEUCYbavxdjJw4Z91VHFcCa7yWBnvF",
  "key19": "sarcpqsPXtBMfpXqTRrwH8xJeSTiCgxCv8ZBR2XoXtgWkEi9VVjhvbvJfesRePwVh94vqoziYi4HGBS6X8HVvYS",
  "key20": "5VcBtMgmcjY1GitNwfnL2a1TpHyL3zi9HMnRrYRKaELCFU4e5i9HARAbWKzedixYkLyU8agnttn6fceaXDz1jz9k",
  "key21": "4XqfQiYnRY4XfbQ1e5PhRVJU4xt7kNSfucArBYesZTE8mPBgHVdZLBH6phQGLMdiuZFKX94vcvR9ThKuPrJg9H9B",
  "key22": "3JoH4geb44CuKW1Y9mVspWbBurWvikehUJpLQofYUGLjAsxP9Gm5ertwAuiXW2VRKXsYLtYNPPuuKV1NeiWYCJFh",
  "key23": "5eSk8mrbc6VpkNHCpQ4fdcY3TpcWahLU47swKKyWNkvhBGqKZTuSj65eEmkqq41NPaTRUumKcyv7ae8UiAoXU4wn",
  "key24": "4qWXK6ZiqhWRdkW99CdEohkdvB7v9H3TDwBszjW3XH5vABHRVa3xar8nRKRSDxvfjTeVDBvaZa4DAk3sJaxyeVAb",
  "key25": "4nZpjfNYs4twD6BWrANuagQWBroCe5k4Ssdzk9CkVeYeAEDH5iZxwciQ6nym4bSkcE4S2c1bfnPFD1K5iGjicKnp",
  "key26": "oJaxsRD5XMqNfThp5etfedVr1pPenwG5CpaaxxXqnefvk8tUMnvehdgo2W5VqbpmcvcwBHM7kooZTSZWRTJsiHf",
  "key27": "MwLSKVwvm24MLPvSGgfLGcayfRGy8h6WbM9sUku4tdz3pMqhuB3v9y9HiaECGoEWBEWAgYCUmBJGqgZRnrha8Mx",
  "key28": "4d3ett33YJBCQKqqsCDCFoRdMXANKPLjfFrpxsLNWuSBES83vWXoUrtTQLBjf1nW6VeJGku7ffiBM1qyKuJRYWcX",
  "key29": "2c4HrqrANRjYPAuc76gEygSX1CLKBboGE39a5WfpTCyarDzz1LmYHtU7QmQZrrTvSTbdtc1WDim1FWbJS2Fcgdf9",
  "key30": "2iBDBmEHiR8Y1yFpNziWratMSeCpgKtqgvKHRfnKZaqjPw3x4Xz8TEC93aAsBYHsRybhdFGHT8jCs53RZi5yeG6t",
  "key31": "4ugJGqZShWerFSVi4NUB4NDUAXLi9GM3rguXUDpNaMfx7KpxQLpzD6YfjmtJ4JDznWfYk2PFZcdhCnrJn1yXxTR1",
  "key32": "5NwdtS1enpL7JruZF2eoDm24EoSgggTyiBuosYFquqF5DVyRJuiT5wWFTRdGu3Ygn4jGLfTfD7zmWMFS25bscZ9b",
  "key33": "5y3fBohzmqyG5TYnDNFpzPGBrMxusMepgqHroKmdmU1PtGguVVngNCv6dNd9hLBZKmKpiJXWigkyG7JzGcDJmjba",
  "key34": "3fWXhagTCtNyGyo3wm8qF9n2GH2MMpTR1YFszgfDtw4hCoqvSgFvjadYhmyjYSi9ncqQB1AKmrZD5EMmfpHXcRgo",
  "key35": "2L6NeoLE3CisEzhHysUC1kCCBmM3fQjiEy7H1ptHT8XadH7ApevfhmdHjgSKSktS7Bmo1oEhSCiP9wd9fPfoatMx",
  "key36": "46kPb2Ce29bkiTE6crXUJrGBbXvp6AnVh4JZ8gcGEhSZkHcX3Ra2g9HeTb5oF7MzoZfkyWpP5xKUoqBB5h3NMhu9",
  "key37": "2vmNhcRjw8B8UZ3p6H3SpH9QvnX2s6GkDKt5BRgzYjh2x8znTgix3y5Fj4atmuU518cDyaJG7JPQ29AKrM31YKpN",
  "key38": "FXD6GhgJj664Dbgu3Rum9SQMZFRnCLVKnzFUo6uNrnzhfh27MFFZ5ZVbRH2UEBtYh6cNnrTNvwCm6iRRC7G6gGD",
  "key39": "2sPrprrrz6RyifPTvRKpnDcNwuf2QiWQ1DpnKCgR2sJs2B9AczjWZRcV2VteVyBdG7FmZnRcT3QPqVfszjbtFcG3",
  "key40": "5TveX9n7iMh8UybjPs4WaxRXAoBQAbpG9fAjFcLcrYgEZ4yawF8rWt4u2QHNjjjDLfDKXURwUEHbShwdZJNhc863",
  "key41": "2XjtZbGajjCa219FvNLVEScgWivsCDxUMFuNfrHJb44QgMWBXZZLSFVpbW1KdmTW3RxHVSu4zDjA71QbgQ8meybG",
  "key42": "A99UVMpytLuU9f9gDGN5rnHKpixFSe5D3yj3zPHG1FQ9JydLkN7B5DC1HPj3HezYDAV5LcymkW8H7w8weGGAJ2q",
  "key43": "3q4BnjabpiYABaqNtLKLn4ac1Q6dkUKsMMB5LiQAC9pM2yZqQoYPqqWWvuCYu1U2N8m2xshfBDhnu5xHCg8RDr6a",
  "key44": "5Zpmt9RxToDGpDroU6eD3tFMVdysi3Vkg9erZ5CYEd98RU3nPQGcB2S71328FhjN1xqdWdDjtH4scgvYbVe1SzDc",
  "key45": "euRpk6jHaz1oaQyJxRr9diuCmBECrkeuY8khYhJp9eTToRT4oKL4QALT7Y2paBn17qMwP8Uty5kKUaQ2uFroqoy",
  "key46": "48ZdDfiZzXUZuDuuAoG7BobguMmSUKWLiLaM64S87kastaAEs1TJKaXbR7oM1J6PrBt4LEPXcc3FDk89zA16T2Jq"
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
