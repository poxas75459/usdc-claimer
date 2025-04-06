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
    "57MDzMMS4w14W6jUWdgjogGqhJ7L3evMwFAYB1SREmzC7p6kFZFZ4RNbm2sWJ44eDND5J2zr2X3avV8xUR8APnR3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26ZMcr5LKMsggi4Kk2DYNxjcQJ8j6EUsC422gPoAaK3bobFscXfS7KMQkgRGGY4D7uAret1FVur8DrXW5LWAzdsJ",
  "key1": "Dc17J4TqRHS5aD6S3PyCUHbzpTtJKzDzNE8wUyatnPzA3uEEwAy2GS4XgKgBmPz5PiP7uAeEtxg5RSsQHhUbtYP",
  "key2": "3wcaAy4WyiKQESXJJuf99K8vi1uLXzrLC8XZtHndd4W4rzGowzJj84zxP9YpfoxCsBnu1XendUqiGB9Uea4JckiU",
  "key3": "1XkB2XMz8xTg6RUSfiAJzgPEcZWSgoZfttC4LHyJihSQHZWXRAFqQ66FyyhxUvX2jkUjhK92asr3gocLLyM141E",
  "key4": "4x2vpmSoFswH6pBhSn9Tg12RgSFqHnHHZwCeHiZVQNNumFS7aUCHUGVHJZNSQGgoiuiiUKaVDBXKNa9T78GjXAUL",
  "key5": "3C3XvhAvERgNMjL57dKSEUjCSDGkmjsb1KqBZFoPnsMCMFViULYm1BrB1mQw49KXTdxG3kdtezpiTShHTbXzDNxe",
  "key6": "3aQiYA35gz9PVQThZEP2NBrPaLXYdgSzebyHULwiWbNdDCHjZR8ywECSRwaKSHpb9te5JDVVoYVXUS1rooNECUgT",
  "key7": "5aEGLvDzCZr28eUVLypK3szCTgThj7TRqrFBR26ANRByYG1nozZYdg7SLKzQDq3V6i5sAeQkswMhJ8sg1ZjypWva",
  "key8": "5LvjDevUxnZc79jtAGXCaAbXuS1BMiVSyuTjU8sScH6wyyY5DYC5TYZ82jB5pFCBSdM4pMtCXABsMBKNLX6H6swf",
  "key9": "3A3J21HU9aMYLYMMmjiLfqEpytewZNRLYcjzWJ7o7r5Ko97yGUvERE91jZGoC8c48DJ8zeUBimDpviqLyodyNZch",
  "key10": "4C4nFeM7uCd2GA57tFbdXPC9y8DnCVK5DxET7zsHvQj2rouAFKise4vU7cvtYG5hF4fYBdWSkE2uo6tXm6VgrHz3",
  "key11": "3Pyjqo31aKBGAe8a9kBt7wzDgrVUFPjxjFouc3w7jGGpHx69Bv3hNbZfLeEN7bwZUP6yocZQ1ae36nKqd22P1Rwc",
  "key12": "2NFuE9ceMkifYo616pv1ZRporedfbqNMHzC9876ekdYguQ3VKpwuwbkoNPCb11pEvGUtgS6mRA3eUxx22ukGUNEb",
  "key13": "3hhRy4oE3k2syBerqqugCDgypNkB9kZa7nDRcS9GXymmafmVXzhKBRLE7L7QjSk51frxo3hnXkApgui7RBGRpVZU",
  "key14": "3c7fjeVYtPKfwssYeaLjhQUVrFEe38xszsjLY5DonoqqHaRCTVucNQzqsnSenSuyvf5sp16SGV8NgNd27LEiWC1b",
  "key15": "2omUQyvuQaC4R8JnaoezSTKnn8HeMXPjENNYrBrZ3KfApvupC6m5ySSzhGC1y86xNvRydnQrA3QTnupZisUdYPpo",
  "key16": "4ZUtwGsXVh3KkJKZGz741Tf1k3SeFsbCgMvqC9MYV3vnqNmskuY1hEEpyR9aYwNwPEt86Nism3y7QwYp8EZzsSju",
  "key17": "ymUtc58ezF6NGfAsfmhPrPPJVXX6oJ98n9KFUHHeKAX8ss7PMWy9iTEni6qPHF5BhpsyS3q9YQbRubBMmCB14wg",
  "key18": "5piZJruMGM34zEDLWVLu3JztWtFCTugbdC2zD91vQBFGqXvo8Mo3p1n3dUT8zKoHW4u2byJuxE7GvrQNLTqmHX8j",
  "key19": "AVnM7uPMBzBxV88mVJazDJaeKntRuTrsRRKD7u9PYq76MrS97rmt5fuHZDygkHncuJNEqA1r8auseqxBLiVpaNi",
  "key20": "43EbNFfgL6cNsi6VmkowjLqWLWME1ywgXXiPAH173LmNbZ64NM6R9CZhgYFRLZUjYEzxBe4tK4RpFkx8dBaqVA3s",
  "key21": "5Rj36CnYHNHhZrmtPmeEaSd59fp1UoHPiESgx1DE6V7RD9kz9NH82ZkeoJqwN41CYuosnHoDkWZGLVciSP2UQxMF",
  "key22": "xT2TjCTVjfoh4FF7tX8WsMchQY9tMtZPXRqCeAzrNi7fDi4NaeoWCG14vUAsPnuLvZNevZbi7TxWvqA1wwsTVXK",
  "key23": "2SmSFL1syzuhGBTpjrm8NE91YAwv9hmi62t3LEisn7o5qEKoVhZ3bC67JZJHzCE8rUMUZGm68CC2bFaNACMnxcc7",
  "key24": "2gbzkBMzw4duRDAiKDFidV927jXe4pwDmCHQK9HiEp8BJbLrZtJhLVwzozwHsPBCowCRARZ4MZoD9wKwqedimWvA",
  "key25": "36MweFWL1e4HXrVynhi3zxP5AXPaPkcWYGKkSxVP28eeX9BnbzNPnkTvNdK5uHpmTyQt2rXnTVTEYHqm5pNs7QMp",
  "key26": "2VjCJGm4oGzoRdH6xmjk7ojucSr6ioxzST57bzrsW9rMw2paz7eAu8UkZKWBDTSLH7Uu4Cd1Rwu5XQGATZHpts5z",
  "key27": "5pvFP8V5vv3yCbowHuL124jc8LFSn62UdJqa9MtkSCTMN18nMFy5TLo5QY2Tpi8NKeLHWD4fD9n2tih4bfP69skh",
  "key28": "4kqbPUefk1CfVjnqxyYRiSigmSF7cVU6j8zG3R3EPCtiMBZHYqQuCxsyc46vJwMZmKHchkJod9nXfeQspvE4kxTa",
  "key29": "3dLf1wAvpSjh88b73FPJycQwFNBdGwrYpgADXuowBNoTbU3EXt4oCPt59tCJGgug1RPcvMuCJjaVb8NiAhFx52UG",
  "key30": "3y78YTysSxWC7DVRxG9VuArwxNdXZcXCbUGJ7Fn6iFe5MZGz5wyAWppEK6XpM3bZ6bKnJ87qyp5MhP9Hv9uLMwhE",
  "key31": "zbZBoMv9mG2fnEs9kFBe52uKP2eP9h297HGVMXXVTHG6HYnU3tSUjGUwxtB9RsEKJMsLuzRxar66z5mSBeQS3Pb",
  "key32": "DsHRvqk1qo3RjfJv7zYDCyBSvpa1hFcGccF56VCjuosfpAb55x6aENJUoZVLb4rDbktDJcqpF3eSGzxrZrCQyqi",
  "key33": "3XDwXNphwsErdBDLVSmaz9y8kuRFLVJX73EvF7sHFgzLdiwy9iFXKAEKyBi1oUBdMQdXUxmG7xN1xzTBZoYgMKvX",
  "key34": "5V6id3A8ctagwvfcXhFMePcgsLCpM9jbSksf8md2kho3C6gqx3DDEKZ22SitaFWXYR1G1D1c7vQ9Wa3s2QvTkGGi",
  "key35": "4oZ7U51G1px1RcL17vVjn9xGbYSPYowu2WvLnah5XvXQUZFzhyMRXoEvVof2aCuLr2HFEAkij2oGxHBR1JadkGMT",
  "key36": "2Ej2rLWXqhmBTd8AznvPkpUUNcG5myX8vQ9Yz9rUFEA2xdLMh5GY5UrRUhQXiZdxnzU1S43CnrfSEXak1pVaK7AT",
  "key37": "2A9XAgjzWNgSYuWGXLZ7Vyfyi4nbNXSrJ1TGd494roqPcG264d8UoWcoJ3JMoHiussbh67Hy9xU2DqhVU3szrR4A",
  "key38": "42bKY8F2R2ucLSqkDtSeJmMkGSuf6tS728whYGt4myP1jpDeBJxYm9Wv4Mi2VKjRidNLVZS1BFHLxJYwXy1S9ZiA",
  "key39": "4pqRQMXEhqZ9rXQgfukaCqE1gnwfRaiswcp3nA8APiWt1dVfzEDMgZWY2z7cV8pApFha1jLH1VGZUnyxjAPQHMs1",
  "key40": "kESnzrQvHH3euwpT1GuGEKTQxjFdxQ1rxkzFeeni1tuyUtugYVkuNAtTA6WxemcWXU8e6UKh4SXaKSq1QQsyg3c",
  "key41": "Q55WiWbfGaZeSzMUS3SsqEvxEQjMx9pVbzY7o7LXnpvongrjz5dAzmJVQTs1AzqXcwiRqUdVPBCeBia6j8HxumM",
  "key42": "2WdQ95o4azNUjBpvh3A1SUjpJpUZwuyBzrrt1W9fDHCpsEUxFHYBDgh14Rix16ZYNT2UQWsXzFBYhyeQeACNEsX8",
  "key43": "4yVwnh7vT77s8jhBKBJnBJmqj897kHwEcEFUVwPe7QkP1LvBQ1E2YvWha6Su3coFBp3DAYPcfEfoWfhTN42zL17S",
  "key44": "54aexyBNe53Zb9EkQCHTBGBDQx4wSKtpRatwdbgi76WLBefuuA8Tf97YBBSC2pk1p2XYr5AULMHTMZ6zAjzpApKA",
  "key45": "3r9uMbeeEerM4fpNBzFS3WwaWDh3Q9DxBTyAAtxKwExGNaCYVKqpP8SBrQudxviwgorZkcJYgETDYDg8u1MvPqHh",
  "key46": "2dYZqBELSFKBimUNax2ToNKsysWw3sU1yqr4ZNgnusGgdz8rgwFniB6VbQPJRepnuDLjNARVjd2gtzPYtVssvVa2"
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
