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
    "3NSLqcmaPZxw1EwGooGhJig5XnHv69HmEEdkrwvwGrYhJ1t1pHPKCM4x8pRUFrXxUjvyjMYuHRaZ34w2mdjV3vSV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bGRkn7p9XQQ2FucEwU6wwBda49HzA1hKnsMmzen2rXzBfdhaGwSdnuXN6Xd7iKiCoBahj51M3F4Y87r8keue91j",
  "key1": "3fE3CmG1jmpYL6bsozEMZ1nsWC4sSQmGx35rjLA96SZUKNAL2SjERUjLyspDiwqBS4ad2kTbJVAtKNWTmqMTik8T",
  "key2": "54AkyafPb2fchiRwxGPVNTxc7MG6nPtKhLiGEqAiXcescq1H8xJPK4WCWHA5fc7HYCudyxB6JAtJdBuojLmre6FW",
  "key3": "TtXWBzbSMv5Pq4binZYAkZYsoKUV7An4f3s5dUbDznpGTE8BtucGUr3Rz3DtAphSPieTzkBaGS25FJgkxu1PVgj",
  "key4": "4ht6MzbM51hGMDm1sgWazW4VteG2RPTBbjDgaowr9We6GRChF2oUk1NxeA5W3vRLBHxCLCuPSJUJTAZZMRnwAvfC",
  "key5": "52vHRSBuRy8aUphStV5kQJpCPet8zeLhyhTEhUWto7DXam4p2JwP9pgtgZXDYF5BYXNFMGG2aYViADY1PaFpX1iA",
  "key6": "4Zc3YtUBGQ4gPUMcVDn8b9Z964YAvgzjdCS89kMLFuaBUp7zrUvrW2pai6gs4EgrCoLDb9ouUNweDC7fVKkfwfjt",
  "key7": "2EekHv5Ybf3JAExCDwtU3NsEGgWit5MHhRNouLKZVrnxwYDja6sRvnKTvJyNY9qdLA1o9u23cYrbVWkNXFcAk38u",
  "key8": "3V1QLkWwk6dknj11fX3rdHQZpiVSSpo7CiX9esFtSJcmwfEeLNVzT4LimTBPHNprfic5LGsbNStjeuDxft1md2uD",
  "key9": "5HehibDywhCAuEZ1WLZDYkJDVUuR3rAnDytuZXB2HLqWJ4daFcAVJnsFECFgmSHt3dj42Nujzucg5euq61hXGx5H",
  "key10": "2f85usDJXPX5L5ASJqjWktkwW7XcSLq9NCwUXwecS9xPVL6GNXRcdM6ZDnuMwzQHNpG7jfRFRS5StY8t7v4QFcPX",
  "key11": "5QPt16u16bZ6rKkXrnbjfB74n7ax6bxKEP8XHUoj7DJJAUzCFAh4uhsoazSjy9i5c81KiuzsGbYaQNUSae2wxwRF",
  "key12": "2TCWZuvLDyPTSGHeuf112Qc5TkPMyyYrjvUjCvdGfYvtKfGS8jgKicxpYVRZqfVDoSqh4MqFEvM2RsBeY3QsEJFb",
  "key13": "2oyYKnkAy1FKnPTUG1Kw7qz7usktPKoj3TjPj5UxBk6s3E51kHbjYXPw2Y4HkWALyjwDnumufZ1LjVDc4bVZmaqg",
  "key14": "5HRwrV7wAu8TfsUGkskZgS94TByXvs3AiFCnMyyjVSP6hcaBXw2wQH6129voDGdgZfwUf8Pgjrzdz6jASm4g8m9H",
  "key15": "36tDdH9PtsErsoW1JYE4BxEbdR3UWpiQGWdJT6YyYUWpM6aw7e9ouBghnSquc5YLeg61K1UKZe2whZRuWa5TGHV",
  "key16": "3yZAskBFYZSUeTM5LNhtxqKvEMYgouoKvFB4LUCXxe7GdamNpTuMyMjhE9XwtuJuAtHcSuk5AMj3dptNiHrGaAKF",
  "key17": "ubY7XNHtbbRncPdTbTxjt2o5HBw1MXpTpx95Dk48p13kzJCA48DnhSafQMyc5a3tmw81eN3UBP9dphQzEskuMy1",
  "key18": "5ze7xVRPsXEweGgXTpf6Y3WdFLsHEbmBFhHm1EWM9AQjMg6DzUa7GYGxZs5rgUx1o1sATEpwGpsrMXPoHJaarVPt",
  "key19": "2fuBQxK1N2z1mHzkA2h4Nr6odfgmhDNPHXdgeybbar669Su8Acn2qvzP4ZG4Jsvi1jbJpMoMTwSZ5GpdmsR1GCt5",
  "key20": "4BzjmYvxQscNa7cbQZqzr2c2koGRb8orsUwcNNRvjKwqXDFcHiA7u62TyTE9pvYj2JXtEoE5KHW5mfPY3CTehQDP",
  "key21": "5LQYZcqX5ENa4TWFdUutEM2uV5Q2q5A54XvBZk7frkeoqZqZBAk2866bDt1xZdYZLe5UoP5PEeqbCuDdCmREjECZ",
  "key22": "CJkme6tf3vRLYRv3dfM2NYvFfeX37Q4ageomxv55MyxuSSB7PEJiymqGvPUKY2cP54AK5tAsTemf2oTw3yMCpAi",
  "key23": "5vctCEBNQbpwm1CrGXr6DCVmtcrcT275R1v7oPWSjmqVEsczUyiE2Y6EiYbYsdXk1jouh9d38hiYkTxphr9Tza9h",
  "key24": "5bexXrwqahNQvvVaSVnyPjeWcgrZdyLFNxSyaw6wvqAW4zXLMGZnHAPYeNMQF2WaoAD9mEPcuso8QJsiwBUYAu8p",
  "key25": "4n2tDkrRbzz5oYEopaCVwjDKCWAX9frf7izhvUrb16Zwt4Y9wJJpnfeagzoRM2f83VqU6GdDtTtAN4sUMM4eF77n",
  "key26": "4JGtosWnTrW7oRhSPgdUaFA89LhrHKJJ3bWQhAM39VzTC644ARzAxe4oouFdHH6X1rHAKyDwet5AFRB5md7UVDZu"
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
