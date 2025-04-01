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
    "3YzjoxUBN6LFZ56ZWHQw1jW8dpRk8h4wokvr4dovA8fBfWekT4rPMQN8hdxR9tvRtN991u2W3cpfZYqsy5MfwuDg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M3Fi4UcpM1G8R6gNbe4EHQmKALw14JQk8gSja24axZ7FGGAwLT68jMvSXKLJUkDY3PUkx45Z9H69idjqyqP48ig",
  "key1": "qgSsmbzCX6e2vZo5gASaFNJbzhthGf97MXrxVqfkRGDg8N8An4wzugNsdsLiyG6raKrBT4VAFTiAqHwGD67AWSP",
  "key2": "2cCzLApjruQJUtuSk3m1BR116yo9CoR1G5KL6mEm7MmUoDZycNsryvGJte5LXXu91SW4nk4A7aDiK41NctExvjzt",
  "key3": "PhdRbPvpzs7W5FS8b2rfXTe11oZQx1RSJ3mhuj6DQ1GXippqgq2hs32jUkicp9YSojdrDUmXc3Z5avtb1MxeZge",
  "key4": "2zRRm5TvtsebY3AJnxGg32kg4q1bPc2qoezPZHknN1AxREAmzc3ojvYLyVZibpx21pLKjxJ9GL15FU9ykSFCGQ63",
  "key5": "2jLQfQLKdjUxBxA7UAv9TDADW5NmTg9UcfcvLt8daQeAx7Hbk6xXvs4JB4SAFn8pzDY5JWrFRwPupu1xj6mPgtNa",
  "key6": "2LkmG6Kk44BGhQE9LBaFLz676QaTNFmdtVGV37v7eeUCKSpugB2eG4ACVDSyho58N4wkCS1oe8xoUcBw5khcazmq",
  "key7": "4ruTHECf6nEKPAb6DRi6KGaG8cmUvGh6afV4AMa6Zn4NwSE9RCVRSqnrf6yiSzWDD8K2XgCRuHEhwu8emZUqbhX5",
  "key8": "5yTU7LgewfxBv4mdaAXJgmsa38LQwYgTwmKgkcafN9aPqPiHUhmqsy7HavBiFGZEJUW855zWtj9eeLiEkeZMXiFX",
  "key9": "2sZaJiCSdtk88j2CmGw4nZJpTmJK8V2nS9wVrCZuwDtzT6sJGqRTa66bUN7KPCfrrh3uHzJ6g1RxbbMAajySAjpJ",
  "key10": "4iWKEz7A84B2VrpQobtRA2MgXR9VuvYVoFZpC6L1nnUeKte88Pmj17pXLedsGDfyYRCZ2fkp3Ag5o1oWGyTQ19tx",
  "key11": "456mUmqP44X8SfhoarpGrpB7wXeNV1bZiHUCchCuTe1hTHJhtQAnibtQvY5cg8gatHjdq1RBeP7HQ45wwjyb5gBb",
  "key12": "2o9WkqWKn89gUG3SXuERiRUKLr9FvbAdCvZ92XahJ1jqPhQH7iKTzU6kny2wv3V3ZpUm5ruZudKPbExB7J9r8w2z",
  "key13": "4KKvHnj3FbFJp8XXnb8Ektf2tRYLCzsufoNJukQWLFNm4i3xf6VPBptzK2wuhFNpqgi7CgehRECSWYmKWych58h2",
  "key14": "5YuAax1W58cDWsbeWpyXBHrMEiypTR7DV8h8j4exmL1sZyjkPgnuTaqR8DPdiWDmz37PSfmJH87cftEvoJ5HNcPD",
  "key15": "4mDE5DqLEV8zTSjGwG927Xfi4YUzpJoinzsWNRdfV5V9rAxSTV37hKdHuUEzz51L681V6zjkA7xe66h3QyWhHKPi",
  "key16": "4iLyZo95HzybsEGMicAXva7ABk1dG1K9cZtbABNwATKAuqtY1ZJr3g8ZYFt3KrqgAn73yEgGa5anGb3hJtHUeo1u",
  "key17": "2pvGqcRBSnHoSxBjYj8cP8tyQgDCGCo22GsEf3dJef5KwbkpKGdMeMEwTC7cjB4awZVevV1UrNdyQ1w7QbzFUpC",
  "key18": "3AVcvrNghEQY4Z6sV6Xjv73pQA32qiADSDdVwofqzpHzQhbsqH2Dsz5ySvLMXwhjH8cbP8XAmBRdntwLCLbqj3R",
  "key19": "3eBKgMBgQ7zTpEkEmCLUmLbUHoMiMFFEjHYHMQZ8eYxk1G7bwMqxBpeVxfAUjnhjyJoLTFHioNcuSo3QNwf6Gzie",
  "key20": "2FqpZXDEaLpXEwaEQbeKgYdyqhsgfZSGCW3EjD5o7zm5SCVuEFQUdarw1n4TRD1Kdkrsr4TbCbSXkX48JMAshAFS",
  "key21": "5GooU5JE68jgNLU3yrjNujhZ8Yhc8e8q8f67w5wwtZSRwqChvqTD5cwvTk8at5PW8croaHxEBfbhJcgtaqem1cYz",
  "key22": "39ZW1eVNrXN1qQwhHYFmszsfFJ5EKZBEXaDufB81vTCPmFKXwSuijbjsNYca5rDppN3eYP6nwtYPXUfxzw6WMGnz",
  "key23": "43TvoGXuJFHt8MqhhsP9E1Liigueft7fnM64t6mu6pCjX8a5L3UKq6ZhW4i4WNFAbFCVuuUCNzzod6kzppB49dtP",
  "key24": "n3aPvzimaTphkgy5yxWBcyuoPZjZzLfv1Qmhn43H8Ze5ZgJbe4Z1GqiMiqWJqp4DnwmKcrT8GNCCp9LwUr4Kky3",
  "key25": "4ivEeZcYSJ2fPLtHSMbdrPQudRufUcgcqicxYbQyPcM3Lsc3Tkj6xjiMUbz6dXTfjh2vsYV7CGgKKiZ8m9owhpMF",
  "key26": "2uqgCoEsZ82hzVRoDKyCcHdwuyJLmhCnBhojrhTUvB3oimuTNh6qhqLiUxQqjuo9hn1kGtaXg2dQEnx9VLDii6Bz",
  "key27": "qUuC8hfB5fXDJ2JKZ5dKaUWP36Lk9V38tdHdK8E6ToBDgnLtQDR7wF56U4qaQb22oJ4MvRLx5imZinAUBeJ6L32",
  "key28": "JorgVUngDpSmzHwnRh8bupVTk3QXpRMvPkMskLwf8M1F3hVkGbkeB6crZnhHnbbULiaXB5TnBPVeUYwgevVZEgT",
  "key29": "cmvRiTuJArL9MM6GYLgv1vSiU2EhpjieSmtrkHJSui3Z1E2peTw3L8AzsYPWWdYhY1Z6iB9Mtikf3rLPZjuhfH2",
  "key30": "TAMfhykBQYiKfJdATffNGuc7zu9g45KnpvPWD5GiM4usg6k6sHU3TKmhkLzqbBhEbwG1EGmmNwk9YCgKJxz9eEi",
  "key31": "4yM9c8TwygGGmbT5LvyeXpaiDCvgdp9Me9wCkTRSewxXs97KoUcrWzGmdTuMcZzyGYW5tL84vTrHPPgFs3owMHZd",
  "key32": "qQM2Qi3KWebfg5atuiSETWCuD6SfakqJgj4sPHsLtYiTciJMfHzvoZqpvh1KRTSDmMUHdj2DNrmfePnVwC7qAaC",
  "key33": "yxTBUkcRgvSSkff1t78bRNc4wKQdR8BjzfxXLFwoq3jJ6mmXAAfc9gLaGwExUUc6xtTLGyTKasQdX3jbJyNXEam",
  "key34": "56auPb2SdYtPBfcjgFCkyptvTy5wBqmGwJtaCQiKX2cpdGpVBhkzg2BB1RUnKmJJLhF3ZVsunr1sdDxwKqBTKpQs",
  "key35": "2UUfr5UMvV9TtSWEmoxD88297WesVpTAvFdCYVK5QWyCJP9CtbAqF6nzpzEzxBEaxtyHKpv3M65chkCZ64iHd112",
  "key36": "3J11NZsmPFUMsfsak9ebnoyzbYoxxErjWghSYaXbd6ikiGe3428LyWuutRyLUEwcDdrXKe6AxVFvXJKuEkBMrFyf",
  "key37": "MEoXb2ryD86TpgWd4kujqAa8vUN5Z98weWxJ35gguG8hjxf3KuaSNMFgvT832KkR7S4ieioeA4uAHNo1JuH59rd",
  "key38": "2MNzHSpn7m7osjJhTpMNoL5iKuLkTY4cuhtJBSPxjHYbvGBaUbEwpbx6GMrk9s8E7Uv6EPZe7c3aUz3mbcxsVaBe",
  "key39": "1RV16ZJfBLpQW2VUhQLgSTgi6M4jdscoEBWnDmUh1RAbNxhKTncnhJHTjbsCEamvNnZgTdQAAnV3nV1UmiCWa23",
  "key40": "4EhxfuTEiza5c4TDRcp5WyxEHWJqqRJQC6oAMA4NNTtYzXMEDk46gC5PXrKj6LAWiNQJSBgeE2CcYbpHHTGZMXnn",
  "key41": "2ALf5TEw5TtWW7y62rDSBr3Nsa9BEpUJG3yckE56CRrN8jFSn5ELGuN2yVJiL9s3G5w6xWS6r6JQUrS8NQrqCtF5",
  "key42": "5jzWZCbxmkNawQN3sizf7L3bLxxYrXDumCYpDPVpeyLQXQaXpCtae7Jqm28CnkaKoDLur1dya4XqFejQQNi1GBTx",
  "key43": "58EkUogz3fjxQBbgT5iUKKfjckkY8uJRHL2QXHzwP2C572vpAXauEf7r5YxsvRQn9BAVdeHWDTkqmuC115NQUftH",
  "key44": "33CXSAbcwsbT5D5BfuMeVg4cYmxrwWKViVZh73zeNDTkJs2riyCRSiRFvzLMxGf6HwamgNxRLawMgupoNS2EM62K",
  "key45": "48i6Tu8jqsVJKeYxhJYM7at4MDTi8cHHdZt5Kkj9xEXNTjRJSS3tfUrBejop6BFNVAKN73jkue9sBG75hHnp7zD3",
  "key46": "hi8gR72p8fjiAAYZom2AcGxYC2yx8UAwW8UpmYioDizKC5emPxSQbKKfhffXy6rpFi5ggAoLzNHycpEwnEp3hfY",
  "key47": "3SmjMM9ujiJ1AAr6NtKgWWiJMLW7WnQqyv23E12mtr9BhH8v9vNFKG6EmNm5uUTe47PUbPJ4kqjA3oEXEQUfRPSe"
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
