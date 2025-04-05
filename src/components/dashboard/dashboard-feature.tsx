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
    "3zDkipxn9TiEZDZtE5vZC5rdae4sS9sU56DmRdu9E67g7CznCdcuPzSnZramGRWrhGmTZuoigrPhL7PuYu2nXKLw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VSztBBiQPCvHNnuc1iqeXcbxayJr4EvPwu68hyGgaYiGZUCTSyw6kjzA9wQqqncv2qB6vKqqeGgMLja5iXNwYyT",
  "key1": "5miGxc6PySxN7tbkM9n3CyNWdpz1Nup8L5bXVqgWWtbqfVQJnFdu49zgr4PHUPK6qMMe3yc98Y4GYvcUKmqLLJHb",
  "key2": "LVNaMQAcDZbjJ3ENMYP9TMJFcwyLHxNxx3csAs33isbmeYwRGf1nGG7JW5Be5tviMWvAxCQgiSSAXP9DgA9UgY6",
  "key3": "2efUktEuLhTz6hyGvArTz458MPP7K18XoQNGvL8QjPCnvdQAYWun6NLFgWV1ouKXJwuCQjPhyu1idyicHt3Yo3ob",
  "key4": "5hLJ72fXJpHmoJ3TzMVt79Fiv6iPxGFhmKVAiVfpDiFShjw8YfgdqLKNtD2sFMLGm8kb25EXiKyYQ7zzEvJHPxdf",
  "key5": "4LzeAw3zxCkRwMxLFerZJczkSmPnhN1r2SPnnvZZXwBqGLNKVfSUk1jAvfqj6gACtrNJAproM2JLzEjSWZMPUKDW",
  "key6": "4PRCjpkchAmXg8frjFwfDZ9Q4zU8JnagBfXfzRHH81YU7uC4pv7EeNQJit2bedaXtkyetTQUumQazAKeeFcVLnmA",
  "key7": "353yQh5SxU2y3Ewjp2Bt1TeYx5R5CLduyxYmkFMKiRyRTZ77BE6ifihZJNQy6tspgS2wURQa9G5fN8pSBQkVKL5s",
  "key8": "2zfbbNE6GEhr3xaaWfdGVMLy3MaqJNV2pNDfeSbDhbaoZ615sgsdZvgZAsXmmrNG8TJu2Gdbqig4x3eE94t6xiC7",
  "key9": "4tPtN3qgsxQvzhQFtuWJWk6qyPRK9er3usL2v2CePkabGnh8fZ3tpYq4ChUf2SbdBiCQMSeELTFdzzzkN74LEBU5",
  "key10": "4M7zRH2DQt2pnv4MjEVmkZmQMZEizJNfTgSLVQJRqSZijMLEwL3P8WDSLZvV7DeJ51AUXsLDzvCWpPacX4HwiD2j",
  "key11": "3KxRdmuh3Y8UUCVe5fqcazvsWW8nbeqvpfTPRDis99F6bKqARRsKyqzZZhNxfhJ1fchBDpTJACMJhdiGsMnL8Ewn",
  "key12": "4ztiP4ahHhYDEBF3DQhrkSqiX7gfKrauBoVfYqkns6HKePAGyHRZ9QyGKt5K6e7yS4ucpg2zJqPSnqJeeAbVCmip",
  "key13": "4J8rqU3ae3DaNX3Z2h55CNxzhQyS2NBebbbJP9fhNjXHwa5eeHitqAEw5xn13K9rEybStaRWeBMh6n5DAvbUJugT",
  "key14": "2VNCTHBuVJCxJpE5rdEFEFZYgfnjNUsd3zMscsrKxwbdnHD5yT1eDSadXP72aDoGeMoLToZBcgjHidYBNo9hNnud",
  "key15": "2YNGQBpaiqv4u75PSEeWDfLnQPToxN5ixDkJNDtsw6A789ANbdBt4nXC4c6fHCnoNbF6n3KnSR5px7ioLCSJLvQq",
  "key16": "7LDhtu5UeiVZ5AY5LtKJ6VFVjiS4PJuF4GP42LXipakhAgYJti9K7cSRrtHwULmhb4Z9QU8L3kcNZESWytUbTVr",
  "key17": "2X1zxrE3QjrYberSJMB94pU51KqNHam3UAjQ19JTP96BWx7j3u2LJ314EQLu5RR7GZucy3vHmaRGq3SLSPAjp7zZ",
  "key18": "3YP8kNxTM8AwrvinhwnxEbmAbHPs5fzRhnypE5TBFZye1C5G7R96wFPYhqWSmTBpZWgu9GSpDSLjqnC2vYBjtuTu",
  "key19": "hVD1BBmPyCaKp3wfyGUBmR4GXaCvt4svLMXd3akMCibN4Fgb3TJ8Kv1ztPfyUcTEG6dK4bSHJzMqaacSFQV7nXa",
  "key20": "21XYvQwLnVC6gQAq73dzDBXTuG4eLwo2uzz1S36Apxw4RAZbewCr111xWxXAru2VPtvVqgGXKAWMUiBT4NBJ7HDa",
  "key21": "5SkU4YKHfwCY2KqHZb1nomNH64kKcLgedHpNcTRPdHkGjGc2vJKK5X9YxbY4ZCFXJY5R2agpiPH6ve1ac94rcm4z",
  "key22": "4DzK9i47AHW5voJUHRHnfxUhsQopLtCsMoWGWNKGJju7Wm3xzUhE9nQqzN6oaRg44sCYuPEWkecstQUiA73zCcWV",
  "key23": "RGrwzCTu4GkcPuvhfwhcUVfcbnGEGYaPXvrkvUwKuJ7kcdBRPi6tiLHEUqxJ34yZcebCcwWwhgQxz2ghfhcaTBQ",
  "key24": "4kQ648XccRC1LY4VBtNZT2nPGrgTymyheSFqCXvbD3a9LNLHcak7Gj62Yae3oYK2W9kxNV9kUZKFusnTxikbwDzy",
  "key25": "4JpwSvz7X9iNKoHLvMJTHnGsJ6VVACNAqsjcpS2JRc7Ymgjd14uTk5FEtY7AJg3XiCRrn1wD8BPp6Rau7sqwdS2W",
  "key26": "dKehPhYZt74Nsn9rQ3LV2utm75bncBLYwXGLDWf83536xVfKvV4ShVm2pKvFZsdbtgfCes7pUC6c8xd3kZrMERv",
  "key27": "4aiTGeUVCQTmDDdv8yL6TL9PNqr467YcbpZ6f8mCDxk4XG1ackXFoNDy3sMSRZA49H55HiGoVQucWnwjMgB1SuXG",
  "key28": "3AgZ6fjyRqbSgVr5kzox2RkKWYJSgyrN45PA7mSB4y3yaw2i2hEb7aRyRJpf8CqzLGXFGBLG6gm15J52opBLugy1",
  "key29": "45UvVHS5e15nEVjy4bLrrxoL9Tv89EcgZRbFsQkraPQKvqFBmJfkocYxVsyiMSoskxkWanHUk2wdf5FJhwwT7gNg",
  "key30": "3g96yVPzakNwmf15xaCWL3oCsxJcnsA4Dkmb7uZpscvrAg7xriyM8ZpQcgDtEF8gt2hLbtjPtoGwmFcByDwn19St",
  "key31": "Ye9gQPXXoQanqjHkLpw2U9EVFRL9WpWYA6fpvDUS79uEYqgeq15AvjqbCDxMRacK5CkJZgw1FExNKA1c63fNogg",
  "key32": "4VuNTKAAYuQhGEXTyjz5FvtYcmMNNAnZR5K8yb96v4zDGhN8HhwL6jShL4ttDByS7ZGuuukgwJBRcY3wBuok2WC1",
  "key33": "2ArvszBah6ARJ9negCapTrJNCmzZKeaHK2hXVWjwFnAqGMN5RKVaBWBMoKeF5MgB5vLLLhbmuucBoT2uwArigEjn",
  "key34": "61c1TjCenefTim9TrrDctbKG9twgEJ7LdWAf9otwQGPphot5xMKvEBSAeVc4oSEVtRo4zFEegnGU6dTBLVAuJC24",
  "key35": "1ohtYsbfsb5dobVz3S6rUgqrhM86VkEmPJ5Uy5TQ52oQ3yQHLBH1JquR2Y93t6MPr4UroXWaZrw4Fxgtjdx8bcc",
  "key36": "2SmtVQCrqCqJ3fLUYL4X11FSzqFxUX4AuP6txaw8BZyXTLsLoYFS4U7pNJYCkPrKMxdXZG3ZC6cbCZoX3zdtYNfq",
  "key37": "26NEHmjdnHqPz2r9KyVpKRZydEscwLySVfsqTrmXajW6ZhL66EY967JjLUhS6uyCjEX4RfASBsxCZ9oHJ9SG16pC",
  "key38": "3GLfNYSmLfG5BmcWFggcsHp3S8MG34KMnvXjcLYTp99Hka9LVeoSE4CAQHNcUx6FjxUt6ELSUQdtSUNMYMPwjM7V",
  "key39": "4z6ggkzk4jmTAh7KL7Myhq7ptdW3xj5V6bAjXC2NpXLw69uNLc4M1ZMfVT228R5wAtYfv5qXx42p58cXaEMFd1CE",
  "key40": "45uBS9UX4dFs8NHRwirmVzbq9iVB1aK3ZQCqXVhTXtjrd3RrMEdKDZAwHENMHUuzYq87JxTHeYt5sXPxLyea5MHf",
  "key41": "HQxuBBN4kj9uNAJ1iRAJbodH4NTAcNvpGb3MGjkzEUVDPML51hkJAkFbqzb4j1VTdMzjpnrD3pVoRiQNcLg2gm1",
  "key42": "XYytoNeTogYgWJSrKBdsQYcGNksXAmTzfGVWRfqR265A8k6xtwNGXSuxaoAQy54cwxEjyGTwJNMW72YQTNAptHA",
  "key43": "4Mt6YGRVRaxecaisvHgH3EVE2cpdfTEj8SSKw3A4uAs3JSwCFbzTyZ449GXPB3owqSo3FvaF4frUY2BkWvBK5BBH",
  "key44": "27d2WmbBfsBjirhmQDQB7ZD9cgqEZkZNwVj5TAHTyp6QXChThpdJfRp993kwwVrPd59kTiHUiRG97sj87LyzrCjJ",
  "key45": "2FXs2zhFtviGxb7SdsHkXgjiZ9V93EcB5WEBJ3N9rQJJCDnML7mfUyh4ZPmKC7xLGLJVLxyL9Y4WetzB7jgpgsYQ"
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
