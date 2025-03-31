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
    "3jFXN2SPhYUvoDhgaTJiGrBPsbt74DeZtcQdD5mNktdJbvn8TVqLpMmhWjNHnES78YDNxZDDVCHUhv25KbyhoMuG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TH3P7fkrVTBSfyt5khrHiyAkNuCTyqeJzchyYa1xm8LBF1chkQE9Up2h6qpRL13RzGS7U6JTs6Nja8dwBU6LEMz",
  "key1": "giZbbsZx6as8QLsBwhc2yXmwviV6mnbo3D3gQshPHyW3ssQo45qF16bzAct67uU3GtEjZbdLc4gYuCZhjWRrWqG",
  "key2": "4SyYiBSKj2jycDNqpXj7VSKFzz6Q4XaThXjUyWwZpYgJxbDkW9pYEm96jRRqieSRFwY9T9frGQTSuxo9XX8BTFYb",
  "key3": "g7Gu8iMFhX115Cy2ouwpxQmyK5sVkDCRxQhp5qXKdeHtxgJYwEfTckTufgeKNYZqujbwQKtJ7xGprM1APiybxKQ",
  "key4": "2a6rXNQnG1nicpL9FnupG8J9Bq3W42s2xZKGBoDnw7asozaWkSw4sWsNaTKxhKRVS74vzVFutD3HXJ1EenLqNkD9",
  "key5": "3qWzJBVgbeFgpaYKrJHyFQ2fwoyDiCDB1tjVPqqgrJMfmipzGSswLVK8iBtabRhz4twCGBXRb13VtX7L6EpWReVi",
  "key6": "2pzmXB2LL2YpS7RACw8vnjXP5SfjGraMFpykFo7q5EPy1XH2o8Tj9cWh9fh4SJkaKwoTZUJ13WLNPzt47ZaY1LoK",
  "key7": "2qYAfP8dC2hX44Gszzt9pTH1KG5tGCV3Ggy2JE9i5cewuwbV75V9YuW9FGsvaFLmjaDHMBp7jFNsfb3mMUzcYqs8",
  "key8": "5BBYhSgF29vmEfdGbsZB9us3PWzVGodUpHWXBckK7gzdVaGAgABTvEpdUwJ5Ry72RL54ULAcYpybGwaADzdYEeqy",
  "key9": "SccuPkovJiDwTmYY5ts7cJDasjC9EMKuFmw1MSbzPF2jmRGezDxHSzrvLxVa7MveSEngAemZh3dUA1edYnYHiji",
  "key10": "5Sbqp7d5Rd7dPCWFMYsVXVkD243YxYjcXvFqZDTowT2doCpHjAabBzJc7aRBDT7pL6aXuBWDrK5RvS5r8GK5z7o6",
  "key11": "2wh82EKVBJ8BMbD8YU6y79Uzo4H8Ma3sEuJoDHUG4DE6o3Xaz5BQxrfx58qZRe387RFgzrJHbhrDgmpJ6hee17Un",
  "key12": "4sfPtoxp7H67f3Y6ESeTRfGKsVT77dXUqyTwL5D8yPYArNPZaCyRZWoC7yasN1cs7JKTnzmaz26P9SDWa26kPqPQ",
  "key13": "32He2utGK8onkpaJXFhKKC54buNwojCCCeVh3ft9QfexBgAVW1YDqrp4waByHM9Q4mJYTh7BMBrMxzHtiJHmvU6Q",
  "key14": "3xrH8mVVYSKcYhQP4fHFQcg7Sep3nqaYqAfaCqx2R2xPdWxqGTAPn8vcmcpBoWrTToWCNAvzbCkEf9U6qbJJDLNZ",
  "key15": "4rkKdvzFxUhJG7e7fp5sNzvCZt3ZiAVu8hhCifJ1jJHxsQggtKTzMQMgCdMioj3cBpRF34DAznX8e7CCXA8s1f9r",
  "key16": "2AsLHeesGa2odk88Vr8CLAUUrWGHYDbyj5AV3D4ochfA8URy942qLvisVg4HbuHBGfy4nsRDagevUbASdSaHnVoz",
  "key17": "3ctCQbzXW3CApbbJRqoyXFj4VAGYWKcfibm4wmKSFX97EVkamRAMURc9bjjndF7fXqSbdfzTZudAXohUWpBoiWrE",
  "key18": "g1Wfv4rihxbQXjAfMhJcjSWs3zYazWcAvJESBZq8zGg399UacVhPjDSWj72aCBDr8NoVqXE8FULGbPoZHaPmB7S",
  "key19": "C8UauMZVnZs6CT5nCrz48vzwRPj6KLmCLcQsvqXYECdhZzNx3f2rn8B8eQ7qdQX3Y9b1yqEvZjkdtPcapbyrMMP",
  "key20": "tPSncdMLtmGd5TNUaMR3oQszigPXjCyMbTZTzfRTbf6mExSQj8v1qBFyMPzxZ5Yn7YxTTP4G9VzUa1PzHSeSCGi",
  "key21": "ivqrggQDbEqJnzCzZL5iLx9PpNU76DaHYKRrBWrk9hNmVyKQXrCfyZUwm824GzNvXGbWvbqX6DJyrnoxzhsexZx",
  "key22": "jSsGTNSAwrLCeiWzmofsVq7AdWs8ymKwMEaVaTyJ6YR4yXMcMFjgeqLS78anhBQ7T9qJ9QJQpdBYCLFjmdxuMVF",
  "key23": "5gG8cSCELoGEXrJwgpM8MpFGPNGDoUoL6b1QsvUgdqEXXxtwRG7xpyBD2HFvpMJNceR89y2L9HZHrYCskeL8KDw7",
  "key24": "4ruZE4ePndWHvdD7NC5MYY4ALysTHpPWtqM4iFX3kKvevvRdLYzQJ69xZiE1h2g8X4z4hgNquUUavWBPmBRTUXSp",
  "key25": "5UCdKdsq1jg7B8CTNFaGMahKguYAMREbKxNwm8zvun9xu1XVEuqKxLj1PzThogMuLnxcYw6jNqidqpPYC78T6gKG",
  "key26": "3BpRoDpdQ1apUpMHkAJd5ydApdLAU94d8Q4rjZxJwsuTinthFjpCqUKXWhnFnH4jjEKmggsjrLD8a71ZBJ49T2Db",
  "key27": "qMGkQTHNieadFRNoCj61rzNYt7c58aD3jGWcHFRVHXTNER1ukZLkQq89VaCvqo19EhEh7vnvfM16hsdP4hCB6V4",
  "key28": "4TDmZyV3bUBSdxhUogZRD1nFqukXjgfiBXQD2jWZEmQboMXWKtMjDkGQ9grbRX3Uz4s2exUw6a7oavwgpvz7meso",
  "key29": "5mTcWd1aXsu8hVakHi7WCzHgPjoAe6XeHgje7WZLAKWPss7b7RJpgMn2DY5sWCkKAH3jPgR4VboiqWj25NSXnhmF",
  "key30": "4xqDU5fLz1u4ADwopv7fXGx3vJNcceYka991v78JxLbHGfGqUiv5h93TmocgYfRqDSLo2EL54qwt54bqkxSCmQSc",
  "key31": "3KCbGVaRBjMQCU6JKYoQ6hqeCUyaboUWQwfR1bJ8HUyCBWh4bVjPszgw3MyUm4wYwFjzN7fGLLypPzcGAUY6vdCt",
  "key32": "4uajrUgJEccnG7RasQsgxLgjp87JZT6BUT5kHoqpwSDfY6Rd7jWWRR9DZER2CZSDmnT7ZDhAGV4FTByxNJz6rqGB",
  "key33": "26HtU515pwu4Zv7LC4kf4AUR75HPHSygTFyJpp2ditESWpXLpRsHMdzbi9nDe1p6T6ZgoBTLuVhfUMrSEgrV8KnG",
  "key34": "2vf8v2gPEZMvjE5891rs3n1dzgZkFpYWFXpPeUrXZixVH6y51okr6c58PE1qdCHRAHunfc7bQgpbTL9MFDLtidhg",
  "key35": "233ZfY6vPvukYV8A1abotK3Ru4hYmtvKXVKpzVd5LVUSGfU69oCWBxwGHd5YctTYPhc9edGcq6XpAH5QWevWbQF4",
  "key36": "3h9JtBFm3vyk81RYVEHKFxym3smawzU7b5ZDYZ8KvjsY5SgXMtn2kMtNrmrXJfbCutVw4kyjwkJZMSEefFXXg27F",
  "key37": "3EmhE7Ksh46FyQvsQAz5aNc9jEgNq35Uz6HHmnTBgYuCjVo1Gg7KML5JmRv5dw4Zus41TTyjUDmDabPJ8HQRdNKp",
  "key38": "2FZHykWhuj2eS3VpQQSRqRRKVBzEJD4rvJCXa8CPUYTPVWsgZuQcMf8dG5gj7FsQefwmUKodiGCQNnr88ystwRH9"
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
