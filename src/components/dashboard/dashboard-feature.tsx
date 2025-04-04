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
    "55FHFpm8urUcW83wA4hvBceTBVnfeSqCjJuxAJvYQtGjyqwU1kMEGajX1uWMBsGAdGSKSvokPhXJbgfn3NGH38GL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o1RxptLSbUANmkzBKJHM3sPSgEnxbQgSZJfiaSpqwkxkmH7owMeFPUacmkAu8gLWZWBwKtqKZRvcgEwWqvCD8FV",
  "key1": "2WY5pzpvCddRPKUWwDaV2Ri7WriJM2NEG911pZD54FPudPGiG5hxUUeDRHGPKAzA6FZBRs4KtqQEmJD2GuQGVGVM",
  "key2": "2LvbLEEKkDLLyrxXexQtTKNyakUkF2sU1JfYLaTx4mokqv5S2b5eucU5QbJHE1TXhKDYqeZypEzhoYx9K52AaTnL",
  "key3": "3qsnvrQZdpp34BvBKKcnurxjDnZVKqCgjBDL9w86rT9ZL35BA49tC8xipmKv4nJhp8xKePR3vQcf3EXrRwynAcL6",
  "key4": "5jw1Dum251gZDU2GScDXkSWExHkqp5S7W9697UveDihz1CvNP5d5ke9reaojqpZvDZ9yExG8XbAw3La8Va1txqMf",
  "key5": "3j2GTxmMDasNrtqr5S8CieKgTPLRYsBXDR689Hb3eghxvdZADcd5PuTkJZ4MkQ9j4CU9FzbrHwxVLCU63TbP9vpd",
  "key6": "53a2RXpDzNeuZ6LGJ76bXetfGhKmW5HK8hpxVo51d2R9kjJpdN2jo9k59b8R5kwkT14FZR9mev92eHyqgfwn4yb8",
  "key7": "2HxtXCsRKjtqxejjXrc5pnosz6wD8oj1CoymmRKLk29zsxv9HZjD8xcuLeJKwz9mcDeQrCcjzvjStHF2htaa9TAY",
  "key8": "2ZQuvVW9Gg4N7s4cwKYhSQFyr6dJRsggjzt6xefSk3xAQ7qxhXPUSKxy4P7J3fPhGwqAd5zVT8KbrP4sY4rrWjms",
  "key9": "5wqNitUQFFi6A9NwpSzhNpSzPEnN9zLxvVtiMupnz2Mewwv79uLz67epbiP6cWZ4temsA1wrdsDDPHAbzXxyS73G",
  "key10": "43neEUoZAMMSL6vAyRPy7gN1dFU5Mq1LGeDB6SGgXBUp27B2njWEaj5ssua8zunmyWvjEyCi3Ke2VNcgqzou72XC",
  "key11": "PkaTEtoMNq4Gy7uUmoxnUNhSn7XMMoJVFEduorUBTi8fLCM3ASrp3eAsXYzkbyUQDeaTcFbCkQEEXfZBkz4JMvK",
  "key12": "4yBrzFtVLeyWPrNxESgkAuAjS9ZTqVqcMbWka1CeBxJYqLry6EJbzWrqb5Ca2MchdxmAip3Z12ykskrx7saS7bAC",
  "key13": "EDpt8x4on31ZfqEYojbPLPRn45TZd81oXRsQqrsnbstkN86UArovB9xTyrQz4NdYUeLG11umWVHGsUfPb7nsiMB",
  "key14": "5dgcM9V3i48BfKfXgqo42TjRuRGuuk6hKSwbWjZwrk6hHeWhnRfDCiRp1xNC8BXVHE3EZBL4f3gXG3Xuu9StRmWL",
  "key15": "gaigabwL9aKN95aYQeX79NUK2CebwWADQ1X7BkV6AZs5RgxWQePPCAR6xNemmkmGA87W88ZhYCZJ8jKVFFeD8G3",
  "key16": "5xxYQeLZ4S4vDMBUyiDaF7riZ9xE7ZLnckirhy3qhY8JvPr1wzveZaowJjhRaH2WXf88ZggvKRArodrXRkUrXawB",
  "key17": "2VqvChFpEGaxCtfDXSSUnXujHibMnrduDN8x3YiKGUF2j5mt1oJv3QCjQS24FEiKRRUW2HRe41tBzaRwNw9rRk5o",
  "key18": "2a6gN85jQfxQ6cMdwX8FRYYRLepGqwJ2kkqVCeZz8gnoDA2y9dQnHmn4dzR8HMspuG5XKyedVjPZkYTRGBP6irWt",
  "key19": "2kUewasUHrsqkdpEEvUAwiFDvhDnywgWg4fNMzgFkmenrfB2kKzvjkqtAQ4Cn76QgxYMGWpXP4tJcRHQPDwb1Wo8",
  "key20": "4DEQGyfpDKe64wLQZHK9nhKDbP3BPAMEQRTEymCWeJ3YE76Eik3s6k5rsupoLUGmNAbeKyVYu9LHPKrKMCuum9J7",
  "key21": "3ZUxn6kqaWa8c1BcBJpSZJe1vgk9C2nmAT7GSNvTyone6F2hb1BcS99ZJCXEZHxWYjVTwUXPz7v5rAoFn37UawTY",
  "key22": "3cpJs24ebc1pcHG5FYbqDHN3u2PVjyp9pZNp88YZZhQ14qJVMV82EED9ZBJ6ReoaqRQa3gzLa9QjUD7rfhv4r2s9",
  "key23": "2MdKXAY3vWzcaxodSKJrcCGiVwGYF9eDmTAqRoPAV381KMZQPyZrsukXWNyCscqDQMmuguGzNr14rxsfMSTHLHty",
  "key24": "3ffPCWqiYwSkx6n4xmQT2AtSh71xcAy1fLZFzqCWKTwzBvc1s45LkoNzbfpQJaGUBRjPR6adQtni5t62CA4MkqQj",
  "key25": "3pRjWL5tmkT3M26w8ga3M3hWrKDNCVg2DtJ14KotDaQkNo48HxyWuDJz2262yNTXQRauSxu3QXrYua44qVB2DbPD",
  "key26": "295MS9Da82Uprjyr9GHStWyZmts2m63QYJoTNvFyj6B6TLFpL4KQg6dUbEm896r1GZLhM9kY6bttPvKgWTNUMvD1",
  "key27": "2sG4nbzy9LmrdFG3g5MVfVs7JBMVbHKkmnmPn5k2KnSmKVYKWk6uo3AJNFkqqQKVsYtcjvA245bVKwV6zJNL3ZEv",
  "key28": "5i8G4pBkwEjarQLWeoUiDzeYvzzhQWuutGWnRVpSk68233ad8e9HXSKmKyPqvMBybFJrEdLwx4x84p8LLCQ3Ausn"
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
