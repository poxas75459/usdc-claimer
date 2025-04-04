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
    "61pQzpeKukZw1rp1pJKRtP2hUYWk7M2neHeutDtApimKjTybqdxvHzSFJ8aFgzBPUzWgWqiEC486kf7CTRH17DVZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zm1bXrjnLgRmr3kgnVDyCs6FkoNyc4rNkBXeLjDYy4zyuPwq6t2t5zTy7XyUbeQb7TZvRnV4qUeWJKE8GyLFWc4",
  "key1": "3aZpNxPaSD9ZgHd9dvc2m3A96kbJbQLdTHGRxCv79tGUJSpNnSr24a4Skg3v9jAj19z7GYULTgvc3FKzRbcfq37m",
  "key2": "4g7CaiRyUcGTdDgoEuZbqdn6jWJm6a3FqztA5qvr492gTaiBQshmHrNagZv7gQMGy1Vo5XuXQM4mx8Gq8vw2sCab",
  "key3": "2YcyVrCKR6jPZ2hJEgGdLqZEhEZRhdC6k1Lgww9wMREPjnSuMpQjBfssPBkFKSp1D2K2UFNwo5Lp5GrEGqzjADBy",
  "key4": "3HHTRxAdZMx1SnQKZ8uC98mgNGc4XypiVPZFADkDKyPycWWXQnUiy8Ncv23wduqx18HZLWsNknMa3v1stwZGoXHw",
  "key5": "23PCyRFJbgEp3f8fFV7R4BeFhYFV96UYc4GuHb8Nsub4nLPAACHjemvJfj8jv55JqFBn4X8GHqZq1in7iQBk9Yqj",
  "key6": "4b91Ehj7JhFdjvzqab8FsNzqU96roTC4a8iN6ytmBX6bQkeJHVjusPFY4hevH4fe4E9Qcy8DKVyk8WGkb78e3bYA",
  "key7": "3dorQ4Dj16JnPbELnfcs3U9diQCHCXJb3yeas1psPHTEXRHtkw2XrwYK7yNa3BPRGC1BwihpY3g7qboLXbjRdWZH",
  "key8": "2LVNHNe1Ka7TbL1srTQ3vEPbLJC3hnPo6QhNBK9ikn81RGuEksFnmn5dgQQYFm6Ygp1q1ZNmzK8FgJBVaXqDkJeL",
  "key9": "2f1F9DUvESKGSBbbrNxvQ4crABjmRQknzbkzNnsDGbuMhn8QK5p8R9MHTxxrwzFJzzuEqy6wPkf11vppewzJYxNL",
  "key10": "2fhGHxmKCh4ByCHuX7ARBj9yDBrquj2A2Yk77xQ4SPo277xcDMpkwWCm7uD3QncYZ4srkkdrXuKesxP9BXSaxuty",
  "key11": "4iSjLmYvJPxBZMnvqyfTcKd4TVSKNx45vYn9hzaaFp6nfdv3oRfGawo1dBcAWjpBEuYnB1NESGaBq7YPbTFPvmcy",
  "key12": "3ftEdFcgaRK6Nbrb87G1JhF35wS4yadYqueKPTF54SnZGJpyWehQonWCZ2jUouEyugoSyiQTNETh5hsYjATLBCAB",
  "key13": "4dJACS14oXJZuTvbhFSEKNQ7eiGowg3xBjftuXSTZQPefiy5MhFC45sQvzaSKYNbSkopSmWgrVybsXSGmJcNHQui",
  "key14": "8h3ZDMbj3WYXh6no7iLzwCzwFPcZnESA424bDQmj7AqGGYiXEfJ9Hqp241WHsGCqTTbwdsWvU7jHa1Ef2tNQujn",
  "key15": "4TYFDP7MR2Vg9pFyzyhaPLBmb7NwqrZGBv1VX7JHpBPJcfi6PkfqGuZdAvDnzGcB59uUnmCdMXwsKiHNTHq3YD6f",
  "key16": "49Sp9S1etV2hGLYGmaVQsVVfNNL7DVSZ1HEirAsx9BPXpCQ8tpZXHAfRdsxLS1tvsFZbBfv8tEnWUdyesbWxQTdr",
  "key17": "4gGEaibpWJSCWuJvmUb4D69xiKLHryKmezcv8d1i58u5jydtqcatXEZ2YJLgbVfesA6QQJowYHMa8ojhEPg2MAE2",
  "key18": "NCfTHj5duAbsvuNZFuEEyTtsMmZTLiffHiNW55C9znJhCC7kySS5j8Lp2AdLik3KstwSeZLzCGrBPtMf8CY26C3",
  "key19": "5mp4JNnc3ZdoHUXr1puXjBffDmBuzASusFFuUtFmLraZZ7V89C5bWbT9E3UyDAmbdaBkD4hFb2TKAM1REcVuCtX6",
  "key20": "3DVt4JdUqiZzrP8hLgBNxezttxAUBLBU37xxfzgwXqpdniffGLzJREWuMgaezCfr8ZJbp4NPdAiSsskNQAwf6Chg",
  "key21": "duR8iHdU9jmuSvrmT4kCYgqE2eC7HZfBeUz7HxoakaG6jqbXKjnCvjUDdxjE1c2Z4tjq6FC3YsMLaFoErTNnrQf",
  "key22": "3jpNZ8Y8i7nU7scX3zmL81fJK47VpeCQc3rFjfwLdrap8jEktGzNPx6Vvz4dK5HbAfC5MS74yyqfe2nugsxd2ujn",
  "key23": "4ewqSKK2NtgRXU2EjXZ4ViUdXdUvB4MZKa8A7TfNPLRnbxpNKKToSpcjmY7m5BgaXcLH3a9hy2i4mT66RVHNfF2u",
  "key24": "65umq9ahun3vKVDyj4qHDkDV6WsxL3Zx9BBJvLvZ1mALEtZ2CTFcQtsnURYfeEVaqcoVjnxcbjNjPsoBRgoTL6Lg",
  "key25": "3ZDR2mw8AAoVVCbye6qxCGLUgUNmj9KNxpb4GJNuSJMEve9nadWENHUYsh6oSGpicUp5WmXc6HDsMMpUUYBU9uYm",
  "key26": "5XVaZ3znKa2B6jvdsGFhXsNhJZYPbVRRsMR3mZcuEtZ4Jr4MvDzkAcN7QxEp3AgyRr8sXFhWFeCn7DXLcN8qdHd4",
  "key27": "46njTcghMuDudxCkUPs5WG2dQ3bnMtksby3Ezv36bMVtJv7BKVnkhoSkFtFeCmSZMDRt998SLGsv9CwHezahvTfL",
  "key28": "4Pqhso9qcJxxnHTSdMAM4NDRGZFSpVCfGBFZpFfrsWMDZqXyinqay1zW8BtWyQhDsDQ1nSnG7trkNJj9r5CYxUnH",
  "key29": "p5uGxFZH2jXk6W4yLqMDxWqa33fEeKF7xPCF2dgR4HrtxM11g4JUkAMVom3m4342LmFGibUryivB86EdGbdjEca",
  "key30": "oCsY59JdzAj1fshhTW24GAqguMcV4tHkLQvG51uhYYpVdFdupkPvpE1HkxtoG8ytzG7GaHCgp8EaS7GV3isgQ6F",
  "key31": "4QzozpdCvEuunwA38ZgSwAMx8s275VreYNDeZmvtaPa2gCVaz2GqQiSJdJphScEhGzqfv885SRxVUAWfb4iysMLw",
  "key32": "4qDjKRwWZhDEp9KhybdoqXDpvSzzKmBQ3zBDYNv7ZFT9KB1YpDq4m5kwm7iwenAwR7U7n8TkLMXQC7Kh8h5TuM9R",
  "key33": "4LPQVAPiwSWLvEdquhxcmwgkXbjvSt4g5jHWcMhStyrbgojq4m9VpQa3eb7HkARaZZqBccKkA4et258jX7VxzUx",
  "key34": "BZxHUxLzqGbrnNRiak1HxTZt5Sj5z6zEcxPd781TgEmdCMp8xtLiACwG7WyFssRpDv6LTu2sN9pFAKKxdBw6MKC",
  "key35": "56KGewgL1eZDwEgYyGPDXAyyZHr14TN33NfwLzNDQ4Znn7iQqa6oR3LJcHTsWoVaT657th9YRQzCwkePAKzHtLit",
  "key36": "BsVoQD2b9Q5epCGbXoiH3j4Q2oqeZ3M44E4T5vZfQry5epXDgaMDK29NGv9WCzJqnbdKXtSzUKHTCZ2mZvzH83D",
  "key37": "pFWfAP2smr5dgsT3rcQDWUSLie7wxzFkCbHWXFhgF7jFz1B8fHPnFMDRUzQ1uMbJmvnJiVCpBmofUAH39nDJDEk",
  "key38": "3UEAjmP9rHJBT6kfjUnrxpL5ShhQ7WSi1EAwyvJP3vsFspNyRB6mWWhhLpUzNcMkSeZkiffudL8hC5WwGamHKTyF",
  "key39": "2GPDn5jGh1Lpxh2sRS2ptZVCP6SpcuDkJHkwhCVXJvmUQviwJbe1AY6HbnZ18Eic6XMUJiW7o61HbDMCwM3DqWNr",
  "key40": "4uGHE6y6o9NLAK6XpiwLrq5b2LWk3pwL2BpEkNXtt8yA97hTd6qjzZJm2r93dptCGrNrjLY8RbAiPQ3qbjhEn8MF"
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
