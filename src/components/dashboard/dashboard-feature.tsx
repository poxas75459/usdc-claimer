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
    "2sNr4sKuSXiYqr9RSBwMgE4KjVY3GuvKtvUjzNzcaFchTCvx4fb1jGeMh3pQWF6NxMKESc6SRqMwpnPiPvRW1wXE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K5MjGeMvEHFbp9dVJkBdEYeoRRyoj6VHfQEpQB8kumvg5HeZKYy7PykYjArGAcyjHe2DPFDC1rCi4ZKDkw5iCV4",
  "key1": "3Ab2YRMxCmykpoSQvJt7kUMt3Vzjq95gzrS1j6acFm6qy5EfcDBZbDC8kZX776XMbMzu5uryri5minhFJ2NA1dWU",
  "key2": "2AjAJvy17xz9kTKwSYZfbTQqnnjVtBYwnX3Hs9fDVSrKP4RQYRsAWqUT1M3TecPjU1UNhgx2s73A8MaGyhk2qDcC",
  "key3": "5BqXCqPiwavvPyBZnaKXmE2YrGiniDZk2peGUNUvtzzUpzBGx59z1v3FkBhXqLxZNhutokfvqXmRQXS6MZfQnarY",
  "key4": "3qh59fszFkh6kERzpmaM4JkY7p6RxWT2NgaFVtcuia4VjFcUnL13i5AHHWBVPMZXvMMysyg8YiVuvDQjcpGiGWCC",
  "key5": "5NCADCspsVZH7XabrdF9515GomNJFvrz15m293nCFND1kCgTpnz5U9nCoHdJKQShsiaVFwGjTJ2JS4SSoRnxztom",
  "key6": "ufbXyttZJBkn4G1FPFTkK7Tq81DLRCCFpWXTuYCFxkgpx2xEnZGrX8Lf8JnpYKQdu1gk9t65Rvw3xTnQj5B7GCZ",
  "key7": "2VhNXmMWKqXK9Vv8JQDai6iUfBTwqNiiUdLVv6iQErQoeVciKDLP5D6xvoRHiK5gKxkje9C3LjDiKuty84VCqfYo",
  "key8": "zFLYSq6VPTD31RMoMR9L7KEW3tocQEj5MvtRfJBuG9eHUoznabZxSPGeKhrjhg8SazNU9ZqnN4D5QM3QUm5YiJb",
  "key9": "HmR8pS7scy6zZ9sKmxpQKmGFahz93tQWYEvGzFF4ekNBdNBmLM2tsarDq1sVqYDWw38LAkBpK4jBc8jvfdH9Saz",
  "key10": "2mprkkcZZkZc7spBZeaYvhSwgC9B5Ev3kdAPnqTtEKcFskwqQN1Wr9cmrrnS6ANRk7dcDJ9zkqz4auxA2mXGVgpp",
  "key11": "3giifnWBs3F1jjkodoceXjJqqio2xfwQitV2NkRuZsWfR6h4DPi2XF3e5D1xcoY8RGhpBJAdWPtcMt5nykAxmhfZ",
  "key12": "5ipEPs9SNVWDkfkQSNwZBX939z9hgmYHUH6VKyPcphQ3cNXMXRJageT8kbvJxosU9agmnkPvVkibeC4MKiNYyVmJ",
  "key13": "QYSqhVzSp2mTKjAJ4qWMkxne9KDGCJACHJSiqjzbdP64okCk5jKvAsiQrMpDZWvZbmXyjANEjsh84Q4Ukvms9Jd",
  "key14": "2LUSwh4MiQt9NTAb3sXTGjVXZsq1NkVDrmUHBLXm6Taj1Fk9CkLuY1SyfN7H9e2rQhQ1A2zqK8PhRSpjLCNRMdRD",
  "key15": "3DxAJjhQFrzqsPSu4h4TPvSLd9sPJDCMbfdjoDVKXTBNBfygXzG4uE45WkUzcPQdgSFYnAyzws1CowWKxsKJw17v",
  "key16": "sKcwtvtRfRPyuZb1UYTbD89o5pfpuJbUSFKwBgDxWhSZrogGfSbRVJTL19KvU26Q34veHoRk2tqLVFD1pTUNfjg",
  "key17": "666Qu3LcoSJLRcacjkJNozDVYszdCAJ3xHpmatZFAVRnYFersW3TPVoGRKxwV6q8Qx4LocCGhos1ofmZSu1tYebR",
  "key18": "i6F5gnaZn7vMBSj2P4m253YUwXRuYRCTsVayT9f7gzyf575RG2HwRoV1hZrzU5eqyTkkMLsvZ1VamghnAdLZK7N",
  "key19": "2oBx1K7CuxZn16VkXSbNn3NBCZ8wUSrhRRMWkGTC1EHUwM6jcdaDwav6Edw4vEe7enwgqDxxXtEb1DcZUQA37hgT",
  "key20": "37mPRWfxubGBPBmwe4Fu1Bb8G48jZRK8ZkQ13X9zjEh7PomxqWqCAKe2kpAAiUGKHFNSTVkqiZfYDze9u1YnVcKG",
  "key21": "5iYnz2TsPbcJjAWpHgrT741GJhHxTCLeNQEMAWwDUjsMvbQa6E1dCsu8SkurF1t37auEzq8FYKw9UYDdmbd2G5pB",
  "key22": "3dfe6cWbbmY1hYaRvFLkRkayTd8z5fzkWdYpdMdXEjs7a12RkV3K2wA9xi7V5RcfTJ8PFAMxLPtjh6fFw6ZZeAPo",
  "key23": "5NNnj8gDpcvT2iZyPpBUCXpMLRtYNnZdiwyQUBvwr2KwPdWnM2gpmqYqmVEPb9Q9XxkxCqhLJnSpijk5THtP5CLH",
  "key24": "37vBnPg2adGMrN86eAR1zpWzQRSbi7dPB6t4qK2R5413qhato8FQbwSJi2z8o8sYnkupb6YrThoiEjUNQt2DbcD",
  "key25": "tB3dXQJMdWksAK7xusic1jN3kKMhWHMRsuf15YHsHkNkwusVywQq3fyJkUvsgvznM7APKtHacCpwK5nBSCFFkP2",
  "key26": "2oEmNAvMWUb1qm9tECk26ApVa45dY1hE4sFoVkYyiHo157WVSg4tNfrRQ4mJf47r3VsKcdoidRqUGB89TmchQAsL",
  "key27": "31rkjJeE9FGxzq2i8kZRnpwJdYqSEayTp2dnA5TA9Cy3nSrKQWqidqEgZcDWHafEVxWXkbADCtu1tL8yQXYNE3PZ",
  "key28": "4TCMGvt3B2mG58jUL2LryMekyMevwzn5ojZzbSSxHRwQUYsdtUbC4Kg8QHLmtTQeVaPbVKpebudpQ4jXjvv636Tm",
  "key29": "3Z83ZysBsgZqmHJuuqygQC7HPoWQEQ1dHVmbfAJXjEyMSQsegpnuo6sXvmoUhBo7GoETNbBZgtU9b1F1touGdBXS",
  "key30": "3oizgbnKw1qid9cSsYp69eh8LdnCTrtigY2Hp8WzVowmQyjKzYnws6TMao5AcdkrT2z4sJc54oFSQPqZaL1xZkZc",
  "key31": "4A2jdyDPQeNibiC6X5Kb7dpdPXzPauWr1rCVrVJc8FgaFZNehmhu3rMvS8CCBW4SPAAFy7tbe3vYJhwYRjdMgFPX",
  "key32": "2baQg9KjtfmwTj83PrsSxBPCe6Bu3hJxhVd6cxZn6L22qQ7aisPXi2MMghZgtqhx1u8EDZSyE7abDN3zK4cSWRkY",
  "key33": "5oCec3xR4KqS5SFGKL4Bi8v5ev7EhyqRMwjMjcEqQTgwy3kYmRzw4LTzfkCQfHxLjwgeH5DC4b7CnG71PNzQDn9S",
  "key34": "22H1bFhez7uGi7Dww7KVH4gbqXXxqvNYot4y4ZoyFZPNyEGBREHb88xiHC2tUouGXbM3riAWt7cW6NPPPpz2fXpa",
  "key35": "5fam2gv9prZdFzbk3szsPGqhmCo7GodNcVrBUTvLsKqvTrdEzVJM4dggmnmSu2Lc8rxyMxJqQ9Pu6byRhPVJGJD4",
  "key36": "26z9xXZU5vyM8PAZjefFSJsFufsy3SrYHyhxZoR6sC6ztkwiVv33R64jzCdD4G1JDyuqvqJkqCB4eNzfmk157b94",
  "key37": "3zh8WuDh4zjbBbYqYw2EkQSG3UAt6MXK4CsCy5YtqATXR8uQzrwv4E3Mtheoj2BJTsJy8yYXtKaSrsjY4QiJbk9z",
  "key38": "2qSWxcZDffFYNandt8X5bfGFcggomLy3K4UySZHV3BR6GFyLye7VtyWpdBehpDo38svjPV4eBc1dSkMWrqSwVAuQ",
  "key39": "3muMhjV8rgUuyMWoLz7X81nSM7HkzsgPWfA5QAdKwHG3RYwXsyB1Y9xNtvoJNQz1Mv9TdgMD4JgbimHHMJCEsqdP",
  "key40": "5S4BHKEwCi2Y9mi3mMbGkPMBKsvs17e41pnNmDBU1TuHDtReHZdsgY3b6jtdLYECPfFNLfj2cJ7r4uV9kPcpRi7G",
  "key41": "4m9a83Pbw8KcqQGinNkpNh7G3RWcq8cdd5YF8tzm6R69XbAmVXK9NKPJnBB2PLdgrKUSAH5CzkX7QCVqZkxHpp3Y",
  "key42": "v1GtsF1gYp3gTczjK1tKGr7uc45fhvJL93cBSr3c5Dp4BjWuhmF8L9VSpWzCnSESUEtk2UobHxcy84QR5Hun9ED",
  "key43": "5WcFPggXnfjNRZwjjUqrfehNgUqwtkRzRtFrEvFzBmo8uL6JG4BbC6wriWTtpepfsSz1yyrg41TWdHBsb69ax383",
  "key44": "39wZMBTQNuNNuKBKN6whcu2aanWwpAkvN3wAov5n9KVNXXV1Cxwou147tyySymA9M29QNC6zrbDgfnvUXgwqns53",
  "key45": "4eHXBs9AHzqDJPohLHxawzhH4UzGeaRu2ya9udPPtG6YAWVj3EThqd6FZ7jUzRbjFR5PZVLw2W6UHCTNgYviSiY5",
  "key46": "5gZujgrTThU1xXjuDZn8rQr9YgGjW9waeVqoiFicaDmXZRhADLkhrb21pnxyAJ5G2q5kexaBqSLr57SeU3x4LbmY"
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
