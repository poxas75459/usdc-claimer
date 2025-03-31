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
    "2ctatyWL83QCTosHRh7ZmxoUMTy32bvkoQ8hVmiddZcupJ19Lbrky6tjLc9Ggm5NiGXCWLj8WyUkGVRhQ7RiGnT4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Hg4ogfktQPSy59BEeQG37e9d7V5akWciRp4VZ6WsKppw83j34h2BsURTvVE4Y5D5kfVXBGkh1grX1BxW83NkR1s",
  "key1": "2M8HSG9Y63csufg61ehwaxqg8hHhdebTKEfV6v5FH2942hdwHr26U8qLj8Mydi51LLDJ3CWjP3RkiESCTnbpdqbo",
  "key2": "26DUDMjcnBbH9ucZrtStnWYxir6AtaFynoJYzRTbnxmJcb6muQ42qKtxGfEasppyG98k5WTmwFid1PTdeNdVbS9o",
  "key3": "65CjhSCnkxcu4XZPVo7fvEihA9sdK2LweeyFwR53Dy3jA6GFCAVYcsVV6oHmFBpKJzSR2AvMJnvAYcWozRTissZi",
  "key4": "2VvZkSTDfBafhipmHZKRrNN81SkPvzBQdkHdKSd4ZFioVFurD3EBtMmV5NwrL7hf5cWRt2FFG5R8ZQxG6m6PNcZK",
  "key5": "4DpjD97uein1xRjmszNUg5fActerAvRGkPrJbVCDof9FMkKep15PvgKwUiG399YYzbtmpS2fFoMq5ct1KtARTWA3",
  "key6": "5Gey7xnFYijjGCgpavCZCGnJ6bayMybtA2hRX9TGrU5XqRcH85fkQ4emGoKaGJdCZqcsF9qiJhk5mN5LDinDLC5A",
  "key7": "3KMxVJihKVVrHhgjuEbq9Aqhd1VBr8fMza7moLQdPyvbwBbsZsJc9SBoydaAMzBdqywg9HjfsvqnFCFm9LeUDggX",
  "key8": "BTGgCTLw7qgvkmRRGXf5ajHxYU6k6RGqMvb2ExGWP4bYCQQrhf2Qa5brQY6yBEoE3MsSCz1UZKmyroDc3Vsw8un",
  "key9": "2yga65hjjnjnPbkznncKXWMN2MYhm4MAgQdEPp5afGmSS6WErCzHeHYm5WX7DfKtKBgtyRosFEysM1c4GBsKVXNk",
  "key10": "2f7neSMEYF9Uk9vk86mAzo2xhMnJXVasZK81uqG7N9y2Soc8eZ8FoVvDFSswP7cg3FovWbTvGMuE9M4YGDoutvjP",
  "key11": "5Go7JbGaAtKYqnHhkMEGk79vgA8ohpko1bio4W7Ux9vUxYEscqLoMv5TRPXS1AhxxYAcwLu2hxJknfKa6dDmUjvi",
  "key12": "4fjHyDXP11vTdZ76XMCyYN6jD4YL1Lc5fW8AR4jYPcHveBtWpb8FETrnGz224o9KWkpY2Fm7D5CmbNtJkHoJpaPo",
  "key13": "3ZBXQ6iB29QMfKFeR8LiwLm1P1upZS8KSQbDfvQMFRfy8JoGvh8XApEGfSrNQgwuejUu7VWQgnT2aZUJhTE3ebDQ",
  "key14": "Y9nxtqYz8obmvxwJ1F4q6pCyoTXiWpjETgY45t14G9rbVKRUhZKEsxLidzh9Qse6EquiEcKAT4t56VUN1VgE6Tz",
  "key15": "3fKtJB3f3NQtktCiEDbW17TT25Tvyq8QcrgUbgErTm8Y3ayHspHSWr1XpBdixabe21qGL2mJpD8kmNeWUzKSgUKs",
  "key16": "1gi9TLmQNLR1VDYFuwnbvFQDETbsg5xiaSvzPvhBniLthkjipojV9YqHgcop8Mh1S8iSrpQMPJaSb3VhZRW4dpD",
  "key17": "4ksVVb3XUbNAyUCaAPyhCe1m3jnzvdnxtyZednVA6cChSNWvg6bFREvSXJhns92nA2tXahVUYvwWjsSwMUheRsau",
  "key18": "524KqFjpvhkoMV7pqfQ3xA9LKrBG66RqGqTjVdzyrZxu87cYyieBcimm1L4DjdasriDEATZMMLjq8FN61mVNjXFT",
  "key19": "3nvXP3QxMqmoeD5yiDmB4LxhsgJ8MTQkN4zQ17emJuXrDmivRPqZEcNQudNEudqRFTBKo5qzfeAtk3qNhcuoStxX",
  "key20": "Ayk15V5ykcqsXnwBrErNHiXD8MuhUsGhAozEMneM4bPQa36WU6oTmXfLRXb8MbPmP6TbRePPAZCfeS5AMSof6Tm",
  "key21": "3eePAcy4x86MHY5agsG7cA4KXDMVpKZWvyvTMHE8oVjkfWHchphvKwjnRookTCrijXqchLNgu1cMhAZBXBA5sMCH",
  "key22": "3daSJJNCEhSXrEnQfkuNQTEWAFb2h5rMF5gJGLjyRVz3pC6y5oKsjo1QU9E8ev6toqX1xPaZLcSbzdzSbLmdGEuY",
  "key23": "4sDknhhXBEvJn86ENYRM6cQj7fTGJjo8MMmQRMwAZw1yqZELSwoz4n7zB436UNfgs7WJKCsC9xdWZQ8ggWBAPzEr",
  "key24": "5ckMUfipXyBKStvSbFmtn35QAT8beUeq8GTGXAGNxomUqLPrSfYcHNtsPbRWCDAKh9TLANxrU4qpuJs1kJrwvNzp",
  "key25": "5HKtJeHVRwuTZPLsh3HybMFmud9xNK2mjC3FGLjrRaw9xt6GF6eyeyhCEMZE42EpMFtSDEvByfzs2xCDNLZFkamd",
  "key26": "5GdCy6uTpvWrYKvm5qvLRqdHv7Z6MJ1gSocoqECYJBT34gCcQCf2LQrNxMCndWQLEVs9jTMnsS4S5GH2JVoo6EXe",
  "key27": "4ny3hnkDLEdULG9nMHayW7q9PMFHtSSSckTKx6o1zkB1pHjaTUNdGLDXXU2RbmdyXNe5qYX7ZVcEXVR9mqJZQyac",
  "key28": "55hxs19MHB7fKpMvGRiEXBPLnspTJ1ta1SvR3cYkzkfU7Gz2jMycxK499d8LJgnZyKUKw1upBrXS58ZE19Y6za9K",
  "key29": "J9T3SghXsB7K8jCRdUMiFpNGdfc4AVVQuppixUE7gQxJ16miTLJbn3qzzEAzrp219wd8PqSUhDjaptfSVp78h7J",
  "key30": "46spWu1qtQeGS113kUjjHupgU3D777E4xDf3XjvB2yU7TJr1oLet6bupSJjYEUWumqUTwy3CVSgiAEhEbGzX54Kf",
  "key31": "2CSbkxHymHTR6mA2GTWzUTthQmowJK6arE1egQVam8QSDXUDNRvs8B7qrXhBCw4NvZojfVLopvqPtikfUDrthDem",
  "key32": "3jyyjFpkxFBqch89VnjHnxfCFvzHVdoHM1TcLNLihFYd5fFgF4xQy85sbyJ4HggeDWUz6eLq9Mj67SMtUFwdcPMb",
  "key33": "2MTpcav1NyqpeCCVNZ6Y8buqz3A466vKW9hrfeycuHcMVvqvzEKawgCjMAogNDPydCQp3yGphpKhfr9JndyQhiW2"
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
