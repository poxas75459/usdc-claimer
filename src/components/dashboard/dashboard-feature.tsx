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
    "3G7KfNod8W8u6TmwR6TutzTnSRhLxYbsnJk9Qage8ifWLJ5cgBFCPbVCT4anRDE6ZWBRzXgA1Q9pd16xoDGDa9bS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aaUSWNthG5NECAYQqypMFUk9EjrVa1cbxwFjb3wLi3CeeXczxoNvPUGYyMV1QkQXdrz8mPbDXeHKECD1dSbMTkU",
  "key1": "JgZEVyaJeHMyZFGusjWWcRm34DeYQPknim4TmVoCDHFGc2GaWrjPR7SypGwLot8z6anitp8N5EGWrHVUWjYgSox",
  "key2": "2YtGQL4hGwsaksAMZTN2ZUUCJom5jqBLNdqJfnPSmeK1uxwwBYQzTzyBG8yczxN8haW9qeMvg27aVZHJzpxCK4Si",
  "key3": "24QfxCzvfQviVK1gLF7JPvaCApZhesy78sLDgCvYrkHUk3MJb711zUn1Udr6d8cqjF6s4jFnBefk2NVQ4JTp9Lcy",
  "key4": "5qLMYYQBuDr8YWoueqcoisornhioUkRtutxuaChohz3395VDb9uV4r7SynvsvcJCAZze5uUo7JsWXB2oueFZEDLt",
  "key5": "3nF9HcSmbKKFCo8D9wyxHjCmBuHmpUyQqzextYBRea9oNkyetEyDNU4Psf9fDVnYXTc3hAszkNPdr2gSG8xZQjhz",
  "key6": "4P7qSrrV9YFBEhKMBocM7RyrWNeDj72T2fW5HsMVQPTRvWqAqzvwWbVUd68mgX1PAQCkNCNifH7t1fLheAB5xHkz",
  "key7": "3VBEGnwTep5GBNz1yTgsbVkH3SDRD6GiKsPQpMvkXx7zdphTW4jqqpoSyqezoyUsXPKUdFPTSsf8uD5nanL9ihTt",
  "key8": "5QP3gMzLiKL41749qpQ9RLstycnY2jMaaPFtpjdXW1KFnrHx5hmWFmAhb638KWVW269iEuqggHej4b5ub14nG1y6",
  "key9": "4F2FRovZLVGWW4efaJdfRsnY4egenzohdEBZrBU8HxKJQPsEFPjqA4o1XFtUp5QUQHBT9h6JxThdGtfbsDLAN9Sc",
  "key10": "3HD9f3vmcAwxFsq5Z9CAatK2MBc9VAFxdx3afLdVwgjcpzDmJdJqUkeJRU4je2zMsSdBqLwxh8FCBDpjZaneYbKc",
  "key11": "TmLpqRC6W1K67LxebipcpnAjMKdumq667Wjzcuiq8oFgN6vDW4coG6pyAVVPGvyvFA15SAaYLQvmVk8G5NQpn56",
  "key12": "kg7KyKSGE6fQF61SuGB6fpk2CW9BG3DfKnYvpYYLpGY7Nm4LRA2nNf9k5xC1Deyw6qs8dKMXvgSJFGE2xNtCvHZ",
  "key13": "5QanGmtx8eQdd7oAdGiYPATzoBZBjqAypEKz2NjgBpTxzotzSFDyP4ZAejTvmUu4y8fzzCXeUg1EPNPTxs7dcaWm",
  "key14": "3N8uZaDzKZzF6gob54n12yGXfuUqBvQ5sn75Lo381HJcZjJt3SjTRm28oudFG8pcrGPS6N1TitHKjZ7WFenGkbXW",
  "key15": "moQXYD1WN4p3PYmmBDSr1RiuWaxT4u9mSbDHkcHEt7bUhHAKnddC8fwhg23sF8acgFiTtZh2fzEo9q8EA2g67KH",
  "key16": "d2Gbiy9QdEqZvmCFenAZUBW2kxZ57dvkgpc6ciK4J3Aki6a4p9ghjjaT1aPwEcW1cgGnCCyKCyVaC6Tz6TUiv2S",
  "key17": "5ey2FFPb8ytMSP9sVbaNRtZhBevD4YtLmGKNMerf17VN6JPaubbdQuMVgzCAyw3EgECi4FvH66hzKG3EKabNm2xm",
  "key18": "JX7WAj33G5rSiY1vwV35z3SgpiLJpcZfUii5z81XQnQVe6F33LzKdoYn4JtE4raLSJwGh9W89rvsbDovKo3BjNH",
  "key19": "5NoQVtd6hR6AtCicT55reYd7UHNsQKeFXRnU7fpjqpGacDTUenKEFEhws5PikkDqjDqNXKCLN1hZ9RSQu2uJnBGr",
  "key20": "iPKziJhERJwWXt9g2ZRdWDmjTmNE7mz61ZraCjp5h3PC4mRBKr1CaeG6V8paxUuYd9RbzkFNcjFBEX31UfycRYr",
  "key21": "WJDz4KwidVeVQNUPQLALWZ1uSRR2CrQdDa4gU5boUfoFpUUU6AhaJeVGShc8ttrTG8DEh1HGDKCtAGMCwhovQSs",
  "key22": "4KDewwVgD92DLoph8CSdLHtmtFzY1SvUentLYaA741tDejBDVEfEmfsmZDqmNgeV4ybHfFyjkzJAamx3g2wMBbky",
  "key23": "5kWdvmjXfYji1k48isd8iAJoqMCRYH6bMNLmfEpzjtczHpVsW9dNg7oHmReGEJxg3Ppq8FyLM2dvQ6psQBDZEeuM",
  "key24": "5rCqvidFCVEeTrVYdjLiguBGWBxetyuUX79guGh8r6RajArZLRL4ngWe4AtRRrTVY6y3bmdUTBaSPx29Mfb7Skza",
  "key25": "5fLTVhHi5XBDASd3s7bLu9w56LQx9WfVMUR8FQExPdVGL1UtjRP1Zvvq3pDTRN5rABZw4gVtNTUmPyTFWXzGYZnp",
  "key26": "427JaevDPpTXeWCzrCkA261M5ZW1n8s9G3rXpHEQ3zA424WES3CGbmdQgChAARFK1TTHsM7zY4YPzvgW4jXUmZdc",
  "key27": "5c5MQcRKzBVPMnuMUkW2TByWV9V9BcAgXgiJEaihyizsq3TTwvuSDxrioBSw6tRJVwbJF6VDyH71yjq7V6Lo11Fb",
  "key28": "58zjFZETCGFp3E5fWFEUNKxWE3Gx5gsvaJSb5Txs74XyhCUuwTAzqEPik5qZm2xbeuy2S5JBVkQ7wbVE4iGcCj9J",
  "key29": "4Q7mVwDxX9zVj7JE3V6zj4AU9XgcPJJZyt7eN8sWZ2DfHL8HKPnxsts9GLf7BELVZVsEduJMSe7nEEZV7vk6qToZ",
  "key30": "4m2Pz5c8mcPLrWRLgFvzEd8wQwJhVvFpb5PnLiLqP25rkAL9gZ3EGpKRJB73q4SLCmSN7iW24ido5spjxUU8LQVe",
  "key31": "3yaHf8X9DcNrahYN3bukbQN4R3E9GLGY9frZUbeDRUWGJyBrSfLww18j5aNdj6e2HNNDHezku5XRWbT1kCsu3mXK",
  "key32": "2Tyh8VsuMNoSqEo88e36Z3wVTfbZcDrMbU9ggcmptP5VQLCHh9aykyMjMkRwiQBWuVbLgtt9PtT1STbp2kkzf456",
  "key33": "233PCiCmCTdsYc4wDnm3xM4iR9iVjo13ka4HLbdhUNYmdfnaK6AzYsKSrbUBzFmFcfL1NVgPYBzuAYF2HtiMxKy7",
  "key34": "54cssugLyDG4fqRTBZWBsR4FqJ8rwU5eMddsRKn7sfuYTxv2NpzFLgJZS3dqSLVKAaHFNpyJmC2dQt9caasfBgae",
  "key35": "3LmuCYJ1kmr9XuEP8EFd6Z7upet8r4fHbUSdkjRVn2VTKbzq7uLEQN6DrojyatEF5vaMKWJqJP2kGrUb4uMsNqsy",
  "key36": "5Wj72JwFUyegZ5qbTuRr7uALTjo61R7WFyViiWhf29EwBQiV6Sg1zoGdd4M2nanQgAH7RtXW2QYpHyNMwkGYd5Sb",
  "key37": "5DLUmKSTB67zgJAMP5rJxN6MhRpM9C9johggDmvSm5voprh2LXssvpgdHJRFD2uJeT17hdpDP9Z1tQ5bg4mbbKf2",
  "key38": "22gZojv18u3oTXmEDzb2JwaSn8fjWAKNjJk4j1h55tp5wvoPJKezSgTqcoYq5kaND4q2W8GPq1tpjp23YPmN5ioo",
  "key39": "5HfQuTaHXfirhT4PZyKk7UhSgfmGMZwjtgw6abNShX1vatizhEknGrjBjtKMqPKUAKkcRVJ3eJAs4c4Mw9CLtvfC",
  "key40": "68oiAZadEkKDWFNDeSSfADvP1eg7CzMh7Lm9QoLnvSUV9iUXCMEp5aFPekCLSne5s2jTHzyNnZAbYa83KjoTVjR",
  "key41": "66bEpS23ES886sjNu9iyNkhg4fpudas8JUD4PMRp7id9Wep64UfmPQA5fUFipihQpjHhCvvW5q4vxd3fKCy58Y2g",
  "key42": "4jgZoWGeCE46R3uCxBHuwPffU21w4x1dikvDi4Wfs996dDUf5WCoC2qbpLTm5wRiJkYoarkWNXJzh8VnPbUkgJfk",
  "key43": "fPeFd5MxYK9486ntULsswcu3fBGYKxc1WbsPMZdd9rWJQZ58bJBXjJi5fbCBDoGLijLj46JN5KdGz6ptJZ4EpbT",
  "key44": "5puQcGDWu3g8XpHFKwDvEgE7XxNDFSKxEEudmWHUoRYicNLqGt3sVmPDPbMaNXNHfSfPpEN51dKSc58GGBH68o3o",
  "key45": "65NEAbSudfBwhuVEK2C3XNTKfZcEpmSwU6L2UqxVrDwDPBJ7jJH2TEuL9a2tdSH2aeakqw6mNfDraBbDy1ddfMHx",
  "key46": "2oZ6meYQ6hiuCHK7bPWu7wPk1TFJYPfkNnZegZPVVjxH52L7zxBEUh6zMmfdAGMCdTprur8qPPugsnG3KoYj1Kw4",
  "key47": "3MCNFmagaqrnBWJgVCRhFj8RkrXY3v6xTaygSomAdq53DjddgpAzEi29dnZbEB8hLmuH18SyFtMSP4nmXGahzYZo"
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
