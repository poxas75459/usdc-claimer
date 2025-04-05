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
    "3N7umuxnnaebNhU9pYoyw9kRjudW6Go7zWzSw3eT8MqagBx5Wq9kYkmMmsT8reuK1jj4Y5dDS8sczc7nsrwHHinU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ckfsPeAK1XeaaxLZUXD2swd9nHr25U9Q7c17U19APWTBMEv1Mg8fexTJtY9R199MdieNbKQ2vDRj6yQsyHaMvkQ",
  "key1": "TFnNLnvPRyhDj7hZZLRVcNykSpBDzo9wjwFJ5TbSgmHueyYAzagLBmZouQvP3TW9woGeG3fCRNTWvQxuWuRbidk",
  "key2": "3RbPucfV8e3zJPkvhvitDa57Cxj7vaJW4ewau9ds3mUGBnJznXXZ3FD4P9KyHeMZGwmzkfVPmhb7h4CXvYi34A1G",
  "key3": "4eBTGYscsxwFLFJHudhvQuMum7iQ6ppbWs9CBR5Crqovxo14u4fnNesCN8QUzapLc49Vkz3R5Kzsztve96D3Hob1",
  "key4": "4iLH6q8P46NB17vuDGTgxC8N14YwGaJN3NhMhirffuzAtgHytzFGPgVTshTNge47TKt8fmQ8r7bNovd49bv7GXSV",
  "key5": "2bwBaxgdLtDwiY5fMTeoofFgsaVEBjmHvJZKHkrEDxrkNaiYv7Xv17TLBxXQPUnkzzSxmKUKtSqWJRWA5iaGvGRv",
  "key6": "4s9KvLQo6AsAYHDAL3Hb9XGx36ypLppcXfRoBAcVTrvRd4HoDXBZidVRoK5X5CFzBYncqTnDMGEULBSAHp3PZAB3",
  "key7": "5y3umDGC9X2riDYfMi2asYTDttoWZQM28rymuy7xAB4FpV8pitHwtRbtwgKbadE8gPgjEvoJr5FtCv8zHjtWntoh",
  "key8": "3SEEXBAMvUbrNAftkTz6Dakr8NiGeuNyFV2JN8F7Cun8avM3tE7PdGaRuhgFQUc5mkym8s4jasa6tzdAUJXL1neX",
  "key9": "3QZKvUGjYFpfoNZmZx4eFs2H41pdPmGEdUgBRDue93u8dEhqotirk7C6h9AjJJcAWwf3RRwP2FZa19LwwyDqYssG",
  "key10": "5Xh1dW1uCifbM39PTqqoMHEkPHvgCs8pfJb6rFcbWF8cjwcWCfoMkZvyJjWjtZg8WFXG8XzLwP1npLSweFTDCkZJ",
  "key11": "3AUQuY4d8iJvG5sXjVHThNybWiL9vzio24pEvP5As9nJWoCq5DQ9SvePLPSHo5kshS5iPX8o6rqGUPHAsxaF1GUB",
  "key12": "2DFB1JPVo3ZBkLukU4hN6FJy6mWMQvdjdBb1LG9t9KpVgohco6ZnioZNoDaLj747bGuBRhBj1fRDVEK3JvWkzGgK",
  "key13": "3Ukx6KPW7384agyFczZQmphFiuJQ1RAMmnBaZ9BTiQJZL1QJLExbKaADdWdrA7b7gdd5drGTRbQxhnNGL3h7eMvr",
  "key14": "4NJ4scR9okSDr3ya1asgqSFKnpG9meZtH3gmPt4pgvufg5mFraiVRq57Z9EsmtkDQSJ5qtUoDwvHW9GjkFCoQAjs",
  "key15": "5Qahh6faExwJqFxsBnUY2KhfaeQdYTYqFJun5w2RfKLNcDeFk7F7TDLbQGL8qzPgqk5X9UfFwAUE74ZneRGRdKXj",
  "key16": "4Csz3nLe6NncFJGZAnyhzeZJr7CiPKHJvqRnGvFWisUBUhKjq4rD4Xe2bT7864gTFTFULYdwjmV4iKAJsrMJ8NZa",
  "key17": "61kYsU74Lh8YZ1hWBZeoWRGQ6K6urSJX2qA2WTdaggmtBLTCjtwUzLTanQPPqf4ADYdFu3CrWzmjfj1n1p5iuPhS",
  "key18": "2ShdFonvb1Upgm7bfXbiNqxXKA9KhmmWe73mTjJUmweZC3GyzZi8RpoAe8PrToATegMWsTMGJPEyrhvaBMGrUkje",
  "key19": "gF4WmXKhUXffMRi5M79oGNkaAfYAAnp535DVpRRV49cNX6Su5KtLs3FU36TZK7PoRcFfM4MbDzKMJV6gUMQcoii",
  "key20": "5vCSnGztUiGj5Rg5YgW91GUGrZv4W1ctdej8j1gxCZ2QjGPYzLNc1Gj95shqByn7GexWRfJ2urTNzFgngMEeVRwz",
  "key21": "4wYUM7duyc3WFbm42Z7RopATs3RSBQE5RPUHJtSmbPB9yHFk2EK9z5arA7WG7DiywZGgGvdFjNRQfLnkcwJLme4f",
  "key22": "rKfJ3ZrosxCBdXgz9qgTaCWSR72y2Hq2UqwwENJp7qSTY8UyT7GE6GZh3nhEqkHNDD19yXsqGB6UgnqmKYiekce",
  "key23": "5TMjNyqyAiSzRreBffDpdoQqPEnTZ6wCrsRRYfdeETwBLCoPN7oeKqG1r5L19bVRFjzfz2ueD8ANrGZU651YmUmx",
  "key24": "R55cjBDpBs2UE3hodLpiqoZnVkiYtN8gZoES7GRUkd4WPWy7jCcY9bfs7jDTVHNCFsduBQvkDCGZC5vSP492Gaq",
  "key25": "5rHRxQ2THf6W6o7De4dSVTP3hViwNeovBXVfzCDkNxwWJ8hitNJEthP4ejJLPvnSh1fuEe7uG2EEsysyYGy5FLhX",
  "key26": "5X6w9maWGN8ThgRRQE29NacEVPXAhDCxDH3UQyFCX4eSJ31V4YpAbjxh3dYojRYr2qkokTATKKDRvctBQvWVCjCQ",
  "key27": "5rUBrV2Huvp3hjD2vnsEamiF95BDYz5tHct59jV4EmCWUDn6qyCS7eimvAQTw7Mio3DqWGQx7dsLWGXusUM4vfTw",
  "key28": "2dKWwPcCC9jGPUgtmBaSx1tedeepfSfWGSmzcfCbPqSsCxvwXC5wSJxKrkyjExeyePCpFAzuqcxhoQKxwemnnww8",
  "key29": "4Sc4TDAKZH9kKXYFELm8wuJsR7FwLyAc4n2Y9qD5pFzg4QSbjVTM63RfUm6GoMtvJCKbXwv1CTj9kUNi1XFDPzxr",
  "key30": "3o6KDX4qyAbXk5gohJ3NJUe3BCVGGMSgcvh9WXC8uGvRA6mQm4Vi4D1fe7oL1z19b5a5HPqb1yoGks3ryDh89gTS",
  "key31": "2ZcQRLgcsHN5ZaLUWTgCWMxLeg53Fpq3RhjtmpfcocLgmwo4oWTAdM3oSKKGn8pGdcNUnZk8GEx5fzxf836ZDevm",
  "key32": "FxnF59tXr9rWwBihNnsMcyoLhb43MuMaPcYzixYZ41AWanRzgwCLBRMVk9UrVXS2VBoxmCmz4zpmv56GbdZLXQv",
  "key33": "2vP3occSmNwHQygne8pCNJvWRgB6hGdgxxkXE9SJ89CN9Khx2p8sfQ5YLKY2MBisWwQvDM5hfhDk22avD2FWnTg5",
  "key34": "3c8GkyjsPKSuA1up7xXvA9YLPjC8d8cBGpGqf71PiXa5iDhQAowKZTKRMCfoYf3R3L3BRztV1bRhKL7g8DMbRbxa",
  "key35": "4czz822oafxSz4ssZo24fyZenWDbbmsf6anLAyHsEZMHvWbgxgDdD2nuTggt89hhvqdXn79ww47VDWyJndpvngmZ",
  "key36": "2sRjmHYDMXAxSawSK292gtHWdXc5qYLoSEic3JtXFeRPZgv4KMtdRcZosSZnJWPFdB4Zj4MTwjBoRC9bTimSVpdT",
  "key37": "2L8TrgWRtPbAHPwR798QRS4759CkaKP5d1uZxUPMybwc7fAd82pUru578tWcxzi56FgnyQLeLX5RY7Rw3YNZmmQX",
  "key38": "5wqGjDu6omZRe6tkYYwPwxUEpPd5XfxpndU5uZXMcwfEASXuqE4ykL5VqhB1zivAytzaywQhYKQRX9cTUyAyugJn",
  "key39": "8dtPcQZxmrmsxsKW7T1UBKVDRgD8rhNngZyM5TBY5SPBFyFXTFm7ETqxSEqfJit9LLspvVn8Qz7U2frTARtiKd9",
  "key40": "XjJbK2aeZQ4c7Q9yjhrabbvKucNSawq7fgq7H5KRRKZ8nxQRyJT5WsaDaLPbxsDQc8z2fAsmhtnqzVaouvc1KHa",
  "key41": "5sPRCx1TAd5LNq7YCzCiJ48Ltsznk2p1ufPuK5anYhKYPpM4mB1MfDbvpBbJ55pVUzg2NJkhXUxZ1JbwsjZ7YLyx",
  "key42": "24WtSaLurrtCcu9hZ679rFTrMF9Xhcck3X3YxRmYjisLPF4pLioxEMjXybWqDe5aLid8rxxt3TkArFosqqsxXV9v",
  "key43": "64crUQxc77KmAWtseSJwkZWtU3bUFqRkfMcuRTgEh8A2LCVJrz6AHUT7weiYpfQ2EvQXADY4qLqXGeBeEeXgknpj",
  "key44": "2pjq6aZ6hn5naRGJixHn4fuz2gHWzGLogaZTcdJ1CfNX6wnyEZrGoa5bdCHgBBj5mLKnSw5cPn2zz2znHGbsjfCD"
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
