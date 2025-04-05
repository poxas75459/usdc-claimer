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
    "2krpWwXi3nBS9bcjXa6T5gXgueuXzu4q6HTGPf1MkFA4W8wpi4ZcLHThCLvSAtRpdxRo5qYeyEB7tRaohbpuzyA1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GuAFz1yadBy6mewjpCo38FWH6RebpZz3mFVVLQuDaKFzTyYtsNHx1oMJ5SdFyv54VWXAWHw2zN999KaZzCAA38P",
  "key1": "2GRuQtgCuSjXprfACysYU69vHADS5C9exwAqP3P6NeNXbWY8Af6n3sYbdBdi5YYwnFJFPrD3xoJj3VLhE3ZBcXu1",
  "key2": "5U8rCQ3n1CiU3zxWqEBXwPM18FQ3QKatcVg77mYvB5BYNuHkwTLREj5nEUkoPeZ8GJJ95DsRnWgZQT9WLCdGPCwp",
  "key3": "5czN7H4xiFXuaM4cVp9yVet6bUgB3J1yYsg36LtJn8jPMAx2RR1aKRVj4JFfpJ53bZ8waUdB5xYNCafGFkPYyQse",
  "key4": "5GPhC88m7Y7qfikV5QBvSYneT11riCTYJ4ZpqmirjisgNicmtQqXcBrcNLkTvRMeJBjmiJhKe8YQV74TYJQJYwzz",
  "key5": "4Hiowudpchy3vgwR8fywWcFcabBrrmmTVqgEeEb19YDPpgyoPWPA6RVEqJY5gfwSYkShUnEARxFP2JF4W2FY1fzj",
  "key6": "22gCx9NJE83BWnS6tHbyDmeakuj4pMKz1p62i1o96RBC38JMA7JzauUX1zo8r1dWRNpSeg4ZtJQWQyL1NFpfiGuG",
  "key7": "4icmAoB1SW3nav9k7gkEXNaPFMqjMcuSeSYGQDFLkEeLDXtPbbER6i8yzdv2RwUsW1apKnQnZvWWi574L8pUjd3X",
  "key8": "5ciUTtz9j15UcQhXv1DGiHFC9Gn7Zje8kUyxCmy7opjZUJATCCVbbdF7uhhxaSKh4owkm1p6Xvzeqqh5kfjiHpBJ",
  "key9": "FoQDB74QcYX29xhRFdfyVNe9Ps5JG1bcinHdf1JPARs3heBep3uhBvvbdyB1muFfC4gQkQTyLYv4nG5aiYTSzuP",
  "key10": "3w9Q88weoevw7BetUJWF4LLMLiXVa37rpcVAFYd8BS7BeDHxrbSDm67YZ9Mm8WdwAYrBjFLD79QhcT1VCNKDGLEc",
  "key11": "5SoTxAaEZP9PNHHVWdE4D64NpjpLAkEHMaNYzcfNPehyBgD9rxCNQHrFcAHKqz43ieEdDLhh2ogbryjpLM1MqZg7",
  "key12": "5FN52MgLY9HbLXH5y3Sqb1xXNaYF9Ace6cVny9xUqH5iMptVJ4WMbpyo7zEQHhFCXvPQ7RtHWXFP8DrGRBXUY2qv",
  "key13": "5rn3o1gDyaLVkGEwP2L9iNvnGM2rUyjG83TTZrK9cfHomrFFQ1GvrfA4nDDzraG7eSWEECoi6Fj15Eyu1FAKooxK",
  "key14": "126PuFqk9jFJmDQnaNGfJyUGQt6WzVctTGx3ykBkRZ8wXyLkJgrdaMz9eCZDiqsKPhUP9JasQCvdSchrKPKSynEa",
  "key15": "5ri9nwm3AxUJf6F9Z6JWkdMbm3M9B7uTma3eAQeduPrdKQXPCD8ZHTZKgxaQjA5F5FewtUZJujtvtbAHsWuDgcBG",
  "key16": "4JEhkVq1WQPrjKQhiZm5zoGP16eE7EGDSUpzpnvDRdmVM7CpvvrKS5FHKEudzytT85WZYgmK9HCwMJS37zLoEvzh",
  "key17": "5hhEPybEJx3ztJb29eTbSyqosGrkYQmjU5SzPJ5Y1A6yB1gAHh4LvEFmc9j6UBd1k1dCR2ePp3ZZJpz9zdyAUvGe",
  "key18": "2kpk1LWwE9nwsvPJQak4YRyPkSfgD6o9E57K3n2zpfditKG79tytkvxejpZxJSDd5nRTXTpSu96EMvM9jwHhJC6A",
  "key19": "2nfoBGv8RBtr1qN8vLkwHkdF6sBF7WvgfjHEuPJfVmQ1QsZQE5R8wkRvTctHLbCwfjJWDQ4MoqFvdTzyhgoiXmcq",
  "key20": "2AnWTKTmJH4aYuRWFGZBjqvCSg4aVx8GBdp4FqAXiUegt9e7DmvKpoCy4Nj4M6feBCaCqhy8VdcdUxqbe2FBb2Bf",
  "key21": "4KfNsyh2DQL3csQFtfc7MiQuBfgMBfeKkmwWTW3tWt9riRCs4HbweGjmpKr2Y5QcMz6hLY6NY9MSefjujbZuL7Bf",
  "key22": "5kracgYxBFNXktCv9fuEdh7dN5CS3w3uYArADbuveq98XsREN3cQN5p5aw2c7GR8xPHqZFFbR9M9YVX51yEgmSJC",
  "key23": "3Sb61CAcD7t76MXAagFT9tAjKCZktJx5vhMt13GdFGTsd52urNtfyjoiUeYjdKUPsgv5M3b6hW5vuMCXjvyg3gfK",
  "key24": "siDoqSyKnardBNxvufvduHERs6uw9Jv7c1ZqRyfBoHKqzTCx7CDdxf1euZKDqCdkEhtLMG3PPM4xzgzrWXMx9xe",
  "key25": "3koRedYbxgXo1uKNabKoUfUiVJ1mvSyN9ARVZXCJS3EqVXuNvhJ5CKCqPGtL8RgUzJUaXfnSNXMzxcUyZ27fZAb3",
  "key26": "3Nk1yHETF6eJ3nsRyLktdXyk2j65QrX77WCRk4fUnCYhzeDNuTuup6yPzja1TBKU65H6FdSfgWnaHmajanvkJWEt",
  "key27": "2LEyDN4pr7LG58gpJtnCZtKK1XWCvHSc2C4PhrkK9oHUVVr5boN89uXHxpmGqgQjGhviFoX9T3WEwg2mzULXVCYA",
  "key28": "3n87exDgfzn2PEWp9zJLwWDfBBkNtjn6scABo5TgpEY4CKY6QnqA4qA31Av58cLqiVFGdJPBzE7b8yzBHTiVkHL5",
  "key29": "4un4NxCgePtNKE5wrztMhvzttQQm4hxSQGqGxPuGYksRr4wJEDppCXJzcDUvu6QZ7So7szTuNcwjvCH1VWyyhPES",
  "key30": "2aGxHK8Bi3X9ippQS1J8Zw4bjYasH4mb2eCMjiKdXyVpZB2KygxWotwgauzJ3Vd6xpZAz2bLJdiddSrjQBvhEFc1",
  "key31": "HFUd3oL2vyBTCxtEyKwg7ZMEBXRqoJB5icQBHmHDSvgR93URuQWtgDjhPPPef7qcEx6DYirYoWFJfvACDgrtbEf",
  "key32": "5AsR5tEP5oCcimAfMtQzsRaZgtaLkwH6oCZsKgu87jeNxA8bUL2toprZq6kJ1UqkuxA9vT6frTFkeweWSPC88Rk1",
  "key33": "5qsxzZeB6xAWgtXjWkjyUoU7xGokWar3vDM8ixedDo9kXRYSQbQbLPTS1fANiog99tB3C7JrNQD9GBuqe468c4jk",
  "key34": "4YhrjeLjCuHuUQAtckXkc76xsqT8dEdBpqSNkm1qeNRwLj6KNKgnhP6d3cDtCV75RWF1q4R624vpoSxtiwjzs4vd",
  "key35": "2X7WP8iQTwxuFAxhiyeqoZZZoH6TYZHWa8ChgkHNk78NxeoSR33kqXxJ39pVuSyQCciGEowmQwSUdaHdgGKFSYz6"
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
