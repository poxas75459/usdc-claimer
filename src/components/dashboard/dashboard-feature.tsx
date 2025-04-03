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
    "5p74pwBZRPQZ9pAxvaNoAPjzBPCUt55EpYskiMrhMSaWyYKEYdUhyB6BEF7vaCipQDD3U9pf273ymgFNPQrFhbjy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tWrRM1Y4h6GP36pkYY2f1FAtNyLfKCVgYbhdVzEEYrADBauE29BvtEc6VRf5e5ZHDAbqo61ah54Rvq8brCFXgS3",
  "key1": "3KhBxPGedySavTGr5BcyLtumdP41RmyYZKs7KDd7RMfzWhzWrZCtxEya8ajUHQdzRAdPwzyH8rnGpb5ewqoRQ9CR",
  "key2": "3xGbu24HKsULe5faoLjL2hf2NLUe125puc9uKHvy41qDgRHsufa6pHwJ5Yi5qzY7JrHoVwTESNjxYk542qoTQBaR",
  "key3": "5dcLKWsiTwVVvrFdJzURpqERnyzXCAsAKURbZXghwf7CXVkFiE4uPohX8o13WcinSvanH9wBrJrzTP5VE3FipbiR",
  "key4": "5YNSZ2MTwoL7jDnVMvuGtyCq6cjNzdzPUUvonFvvrcExvsA7NbNfbkC38Lu5L8k2GfFNTshLvxqrMBeMnWmCG94k",
  "key5": "fRcPUEKn8bNindgNxxqLCZJ9kkDGv5NNb4PaS36rjkTDWXND3hzKrZhhvd27rjYsa2wRYUfAACEajMfoRFsYdcd",
  "key6": "5hVgQYaLy9bqrF5MWLPk3UeEo7feTpSpSt2NBeSEarit4teikFFkN74MY1vgiM8PuDPp8UzfKCVkYBSnrTEHo6tP",
  "key7": "4zMppo7LJtjFwmVZzRH3d7GyGJ77KwkiW95ZhYnnX1wiheZHGMSr3exaGHUZgNBhDzJBpmyyRoEKcfNJHS5kav3K",
  "key8": "3xPzT9MK2rsWoMgLDCn86Kwwx1QrUpAvQYcXpB1GBP1cLAeBNFKNiSxwGRReswLDyW6Gc3h4x6aEosBFmDbPS2j6",
  "key9": "2Dqfd9mAeJjyyCmGP8kH2aTFfZ7rgfPP2tQ2w7UTW93sNjj4jBtKgmZPqFHb133MwrdjnnZ8UyfMkPV9AEJFgYRG",
  "key10": "5Bd4anhkWwZsBo2fSYgBFPsH3S3ahEQCRQZxkGTqfYPLEMS4E6VFbLJExx7PM9spxGR7t185H2pUk7fyWshQ4M9F",
  "key11": "3bz7iRDdCMeVVAbiSLgG4C8s5nwwFRyGiYyydt8Q31p2q1WGXyci94SLM2cRDW99a5qDjen7oMBW1stqYXpGjJYh",
  "key12": "58CjziyeAoFQbVjS1imLDFiGKwpKrnAM8KA2zY72TxikqWwfD5njV3oP5CUxmkepQN1AFdR2nFXNrHJDnTBmLCqx",
  "key13": "4kAbFEFHhtA2j9aSusZuQw4DzLxtSdmQti59NtsWxmKXaGBfDSnSPNLwQ9FnEpxppgLKHx15c96jieh4EA45NiUv",
  "key14": "3ywLunTjsmgR4Uw6HDQabGraucRdYQ6o86o1uEkJpsT9Yo28Y7QFfsAZVKptfeYkqH1gMseAv8gZzjS1gQUBtCCP",
  "key15": "2i6eHyfHnMSiihUGo4T11kUz7Ntsq4EXycyLuxryyuiBvwfsqsVbw2MLirhiVsZ67p1nSKAJrgbasStZTGiiCrnT",
  "key16": "4HwdNwrDeB2H7BvFSwnn3MESEJVyo5fc992FpwQgMF7zqWPvofMQdJz1qtyssvPxtYneW9B8qXRwmSiivP6dAe8G",
  "key17": "3wdMpc3pDPuYqJp2Y3SrfWWErUbeNnt3invfDJLNFr3ebH5Tn788ndeLSvk3NJD6MjX1FvEo85ifZWuXgZC25NBR",
  "key18": "46Y5bbAUy4DxgCE9toKWEfnbkJRPdpcmxqwoefMEuqSiU54LqkJtvGhmRApcqZ7dRpYdaD9hQa3iji8H2zcmDBqJ",
  "key19": "2haRtEHUiqZyTA6WDanciSkc9vajVroPzegbMyGK5wtLbwKQQqvV9aKwx54u64qJ3g9sn7prqbNZd5tJqxzsBTGZ",
  "key20": "5TzxEm7gXPH2DFZeM2ggrqQtb4UTriUMKti1ofnNeMcPAwJnxxg49uCzwfsUFwnbfrJfH3XL99funwfM3zo89Jo",
  "key21": "2X8bPJiK7efTxWAhZZYUTDGtpAF9FfYDyjV7HwnCcXJGQXbnoitBRkzARo3dPhJmA7ki43zsQ4TmdcV1DTvnEJVh",
  "key22": "4z6JQLUBQkhi1di9QztfFGebzqntgDPrfFzvrvRJwLbngDQbPV7XJatodp4v4W8gRXdjCu6ceH5h6kiQBUH6LQYE",
  "key23": "x4AiaPY5FFAtWPq38M62LrZsnzxa6uDGy3LUrnBUZ2p16kqXiYH85HJnRqStbP74cDjVo5TdKgwbvv3SrBSXeYi",
  "key24": "4UbLkBtdrtRj6X3oDFuFMX98tGXbdVFkAkV9vWDxJVbqvQXpyscSWRkEZVJqNAfF6yViMTTrAR4LBBSzzgkZUCoK",
  "key25": "3kFeku78q5AW9aWNM3JLLpLqnD3TdjcXCH5dSkoRUVJndLdmRAesENwKfHTgKske82nCZcdZzm2Yq66qAChYkVeR",
  "key26": "2PinocWUiXHExZyrGoN24PDeQzAZGL8rFK9pn5WSpj61TcySgX6yYApKRPSH32Y242FyDS1bCMX3PtaFQFvofRmx",
  "key27": "5NYMb3DYxrTn8VVXeo2cUCVs7oFfx9oZpYt95PQ7dpbXcEneEeU5WP28qRBrAdPkVcU9Vfjqd9FAdZ6xrrroy9cY",
  "key28": "3KKcgXuuW2Hs1MvdGjRPrqGczKEfU2Sv4vk7SFmWNDBtPXCWVbK2jMaWdA9gEnaYt1j5qZcYePSGuWNpjhZCfq3k",
  "key29": "3kqi7wBxyXD5mWPRVeBxw4AXPsDpvpwCkSFspUBZ3hrEuH1EjwN5AY81XiREAdQDzSucioeRMVmztQbH9anwJmp5",
  "key30": "4Q3XdDnQLqy1YpuNntMdTwQMxK9UdkjYQcGAdtXK1ykV7PBxE6CJjxsrohd6mJBsH6oukyquADa4WGWXrmk9kN3Q",
  "key31": "3FRo5Fmz9xAmA8M7NMgtvAAZy7mQQXJ2G3gqXnxZnz6HXGuJm9B6ZdVHQHbMGzPC9zjQccwHS9AnRgBqNdHeSUCr",
  "key32": "3Qy8naxcCU5nYnZW6QqNFAm7iGbvuqmAH5GHAobbYLcNUEd9W6c3GpPepr9wKbjqrzUxntNhL6HkW3ngHkGpMucG",
  "key33": "2WkBEoDgW6DpkANNN2kwUbUeus4P2qaNcmMqXRw7aCqjqYwhBwq9qLMhEx6Cr6mX3teyeFwoEV6Se7cYZ3w434ZP",
  "key34": "4MC9ZZHetaaHeJMJRzQxRARf8MHxby4ZVEXgXr58bvcU3qx1QZBreRSdGW6yaNtcxAj6eEXpsYRJUjD9p4bDerAQ",
  "key35": "5YnmEruwTkRVXU57nXHxstecftuD839yF1XiUhoDRTPGD7jdX6BPn4EiRwSPCfN5DBSU28vre6S4b2DE6DaWW6BK",
  "key36": "3j83gHiJmiYhyNrkJePtG6c1QatAfMco3vZAE6bZA1o5MvAqUury9vep1peRp1aJf4rmiqe8o2zHz9BzvwYXfw8R",
  "key37": "3qGaGU9HiVXa9ZPrKXn6LXfPawukoaTVgf2t43CVFN9iuiFtLDfg8dXT23E1jashUfhYvKiSftLG5muSP65LqkHZ",
  "key38": "xBaUvG5hQgyg2dGAgqgth3pfwZeN24YLoKrmrmm2oYgnPSuWEzA6vpB8j5rwv37xjuGCbTQMNBdxPwvPVEPFnbU",
  "key39": "4fcHgvUUu5C6Au9b99jbyyEYdp7tavzdyVFVoiEUdohsJsfC7TondDXWrsfkAzA278mQLz8wcfM2v9urbD9LtKeN",
  "key40": "BbThFyHeJ6bcXBTF94ZywErrPZcuryeUqQsFTty32VVP7iNdndBNzsbtNCtK9Z9GduX6yb5ksr5Li37FUpsex3m"
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
