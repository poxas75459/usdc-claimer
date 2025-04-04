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
    "5sVEmPX9ZcVEjJDXhmJNyC3y6pbmJn8FmqCHM4x6HzkDqrTA92ejE1gi6ZSGLE9KwJKJdcfSeHhJfbQt16PB19NM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D9ihz5w4q3E3qkdc5YpQYzHhmoftSJxApir1xVmHMikMi71AdUqf5R5ymqedXxY3EtWVL5U43NcDboV6tQi9Zin",
  "key1": "3Pu1Cr4S4buYYPH4vKrmkU89xn3umt5Mfn6aJbgVafaThbquoX3YA3VC8T1qvXFQ1YJLZuu57MaSPUX6TiF7oq7F",
  "key2": "5HNpKzfeRgbryx8p3cw8mradDdkbBchy54oQLAfnxKg2BV23R6XJ1uKczejhN5ZLSa5cvC7YYdbe4exo1MnzfxhS",
  "key3": "3pphZea635dQrFzuqiX4eXcyt174UHRwpiiPe1iQ3kFsEujfLe5LRHuRGAPFR4Lz27EmXrdBQ3uh2N2Fy7DnvhQS",
  "key4": "66WawMNcY4bxwzwBHkjhZS1YyPs44khRmXoPgvCHxkRACK6BJ5UAtXXcHnJucKQLw1fcccJfqQigHPzTSRGPY4nK",
  "key5": "4PiWU3zYi1E16CwenAvA2DytE8P975vsrEofQbykWsevU5DrKQW2U6SFQPLVsdHHAubf6M5JEM6ipxTF5hAV3DjT",
  "key6": "4QvnZW55nbDXkv8H2mK58kRRNTgN1Cpy7yko6Fbyq55cWegvP8Z2ttsQRBYnhBiFotqbcVyXLionzAFkzvc5n9uV",
  "key7": "52CY2oyuh4vUqgbvPujjf2V3WT7wQ8MxgeFdcniXiGKkD3j7U7WQuuLytKLAJyncZwcoHDLGFQg24NMZGTqv1FiA",
  "key8": "5pj98qsLZvGJhaHVjsZnGonDCuXKFevgXJherVneBNaNDLJ6yZ8F9sBFUwgrQvxL9TMHXDzoMDC4EVnQYCNX5YgJ",
  "key9": "63Dsv1brQ2a1dXSZGguHnurCQh1ghwY5dUGdPRKJxFRGPB52BhUffRuxzD42bPqje3cXAN5RK6rQaV9PBEW5ptSm",
  "key10": "4a79gYPfmhye5VxSNh5hK6Vv21Pp9V8rgvygnrJ12NopPyKtU8xPXcJdTBUJuoUKs41Rp7EdQaxYYBsQpmGZY7fd",
  "key11": "2Vju31CKaVMxnYyeH3D1aETG9xgqHKtaoA143nPTryENyYNnXjFCvKRyv2tJMSSvgJBR51NDeBbm46EJCspmbkX",
  "key12": "4t1dyatWBXVr3GgruASn4emsARpQvmhVB6JeafjAbjZxGHtTP8sScfaRPZQrTWAfb65pnwnNtNvUQoqrV7hGzUU6",
  "key13": "2YxWEdymUdrzduWnjmp2x2rhUgbVTgXtbC1nCWriNQZrjNBrSge3S9GrUAG1dp8NmUcsSsnMLodSTfxnNURnPERn",
  "key14": "5G3nRmDZyEJKq92izWQTyYk8uJnMKA73WHxoBNF4hhwuLkMhftCQ4ocSybdopxZDPP9NNo1QGw5xhC9dQQuXj7iM",
  "key15": "5sVf4RbbRbrgQQdySwLaZWAWkcmTBbxsfR7Z8ub2s7vcmgayGufSyDggdEnkdz7GvMnxL8LCVW2kLosvuAS5KeD",
  "key16": "3tNJDyNEwnqccCcbPihZ5RbrdoFKme3iLpjcoZ3HWNvhJJbvZKrvTP25G2tnvkqDxdbj3W8mKP4awbMqmTLZV1FW",
  "key17": "4mYrce3PNiBdBwU5eKkNBW2D4YwSQN5WhV5gyX7GosvgpXaBsbv9PWw8AckSfid9h9CWQS78tQ8fx9qmBvZEW3mF",
  "key18": "45SwkWJkVedgEWF4L63Arx434SvD6WGGATxDue2Xk3wwdK7bEATMHMRBZzoupZTon3gNhSdRXUN4tiGitm5tL5Ye",
  "key19": "5BY1rtMFmM5xmMzkN57RUgmQ22Vmi9mGjY5FC8miSJ7cfYfWPf1GyBZDoz5pNJTvBTiF16sxvvC5ebraJM4MnoTg",
  "key20": "3saJBaiiiNAsupnqVJRBWYLLemaqHyuHMNQEVarwn8MNCNuzEmHwyYbQvuJhp64EzsfbXGQ5hyhejSkK2xfRoTE",
  "key21": "3s5J29PePvRw6T8TCiJ9gsAoLSvhXb4fwgfvT5K2qFZabF2Ht4CBwmvMkpoBCNaZRDcPZ8QDyd1fuESH7kHUydgt",
  "key22": "2BVE5UuBWgFnptqxQtwAp6j2YZCXpxjKCz27ohJoKfkPLiJ7s5nxBTNzaZpgFG8pzJXzMDGRi7ihKJrHvkd4UqPs",
  "key23": "5gf2s3heRwEpex7AayL57kRSWq1WuQMkdQmDVpGftBepEv52QF6DkkCk5scWabMr4FDViv66EeWgvGscpJqrZT7P",
  "key24": "29U5XZMXVAqQ1BKAj1wffmoaRu6iMZN58DzfCZXJhkdwbtu6GNxsgDTrbLfMZc9LCK964J9AWiBdzxDjjgocB3Jm",
  "key25": "3NFs79qVsf1kpdya1NjF5fRkrtUgD27hnYqcoE4MXaFAwcspc8H7wAUPJccgAiLDFpamLoVpud2puMKMeYknUYov",
  "key26": "32gv7UGZ5icvbarWLFJ7CFkjX5L2CicBNqgaGvWgGotebCqrZuL9AZjTKGFowb87d5985KpvjxFJcFaw7tCvrRfJ",
  "key27": "5Bamn2CoRk3t4gP8yCWy31BakGQx54Pr4xthzQvWpQLdZoKyAv5EVHnmFk96m9Vv4h4zrE55ogSyPiyRfzVGR4jw",
  "key28": "5rJUuizww9HRevprMJo8B5L99Yua39R2tDWHhgXSDgcbLgkT8eueAbrC5n2FdybASxzfqigpHFJB7nLeXFEv2fAx",
  "key29": "3mZskDbwwCixhAisRA9hipSGzUNEEk5UvwpaugpidKAN3XPfb9QnPU95R6Ei583vnrWYucNvX7uJjQD5YvVaCk9q",
  "key30": "5NUQB4Ge7ff3z6ZvtVTUmAAosVhHbxP2tTsjLvYBi8yKJLt3ZBTRxHz2Hs17bLQLkUQSJJSLFQH4hhB5bifzsax1",
  "key31": "4VHb9Q9obDnoo7rFQC9rcXBneEgxfKDiL2zsb8n1SvdGJxCkpCUr49LPgzxDNuTx2xHhuqPYfx7E7QEsX5SGxoSZ",
  "key32": "4LMDvL456EdXhX43VeheyqJfK5i9W4N6V5iLiB4g3ZGS3HbTYZfYVZdvjwnKaSbeJEJHfXVSwt8J7JcQjo5SzEGd",
  "key33": "61ofub5Z2v9wtNJePWCXyu4P3yEq5isjTHVdW7QZtakcTsqqwxqs2fBo4Li7rbvNouWk2x7s6dk1ZRLVGdGPmKqb",
  "key34": "3rUn9hV71MaG8j7ot47uMHAt9eYCktugizMNxVuiP2NS6GXUix87FZNK1ArPiZxn637tnA3MQJLbJJ3WE9xkRPU6",
  "key35": "5E1VFprpiS44CkzudniccDwybmfcEQ1MWLdZ614XssjPgE5gqDWNmCa3mBHMh1h5x2ozeMF6BaAVdBE6iwRtDJA",
  "key36": "4cfwVjMBnjvzQXKXirJM1Skg5sQPD7poDZGfJ6yQNE9wTyYzSRJkyV7w2DSbihEGsZpdWNZJqJpsu6PAQ3MHAVBr"
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
