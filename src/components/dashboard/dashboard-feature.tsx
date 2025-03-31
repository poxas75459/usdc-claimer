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
    "26ByWPnv7PKWufJtBW8SCE56iS38Y4hbxpZAPN3s8K2dHfyU3k72ssxMZ7sWW7AiRqZDeRukbGTddwuXiLsJAAax"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kZothkpKfXA5Sq2Yw5qwcKJ2EM59A8G1gg3Fd7cwDChjWQvD1RXYhzSnASaAqC2DwYdHgxQiYrTUSg6oFateage",
  "key1": "3AtpD6KZ55jK17L4LXCcorGrRFoP3dnXD7nbZvuUmkj5uGGNM996G5uuFSgCq674CtWpHhyBmhrivMByUVyP1nRh",
  "key2": "4boJRoCDfYSY1ShJpXAVzBXU72yehM69pAH5W3zQGor12LvCNbh31QEWoVjvkovKRTX8vUoYN6pVxjAw4DB5wFrp",
  "key3": "5psZySxMtZWEpJ6eLtcFrbnig6LLZ6U5RZNG6aEdchQcFh3VxBGXCDq81Lcre5CaoL7B87kHmofZ4rCR8up9LSut",
  "key4": "5fVsEpThZFPtsqKh9NxSpwCpjmb8SePbAVaYCsowhWzFZuryfhzBaMxH2C6j5uARGKtUK9BMH5EYTdH7ES9unhgt",
  "key5": "55Sp6howbASYK6XfXfhwuM22JJ8tkm1yGjt8xvF2oGmuf31M8oX6F6u3a5uZXb4PyebJNJrPZRqCnNxxLcBUEheX",
  "key6": "4fVmFTjybRoPy7ZPfj9g6BBh8zoDapFDNrotGjVP889JL25Dup8Y5J7uV5fQPFuJwTWKGUx7wjDGmQx6mz93Wf4o",
  "key7": "2f1aZmr96p86vPZjcYChb2NQVnGVWW8HJWWAHoidSRAKpXPzoWbDYcZ8reqiNXoXq4akA2yE86vsZHndqh2wYznd",
  "key8": "3WLD3trx6uz1ZghZeWANo5fLUq8BvhSZvWabXhybnbiBWcqotcj1skFocL6PYuBp69DyMmZRPsGvLkcpocAfPf1N",
  "key9": "4RDf65s2Nxp3T86hyESAPSTKGcLjdkKh4FdABxF2UW13ZYDY79D1VXNeVb9VFpm3FcjV5f3i6ajag99H6rkgdJxs",
  "key10": "Rf1LHgh86mDyLdZcrw7G35QRU56bT4RcXyMWi3rVqiMzFoQwbutVLMewKU8bkeaLuGocNpN5LqfVoGqPczeVGVZ",
  "key11": "319QcBM5CuexP7iZFTUzFKNGFVQK1pASnbGVXo4e1rv98RUvqr9pZirquE1qZyg4PMexGdV3FiPD2gU5Qyuv8bKs",
  "key12": "2UPAqDiU88EDdphx8nF9x7XsPsXQJVgVDQBAkjiYsZ9LYpakycMbwYZLFt3JbW4br39KWG99z6p5Qzh3dnp9YCtJ",
  "key13": "4eg3DDyGE7hUvvDt3YDAZ1FK18JAda9ZxvAhWJbWcvodXrDCqUjThmfbsWtV1bxEP7m7qwznqyhyuTPTk7th1uHj",
  "key14": "28mCpRrs8genMsHbHzNJp8Ku7D7twn8tMq485VhMSuz3WMTV52SC8zhScDwyw6havAXfJANerZSVJgMWFwQnNgqT",
  "key15": "3krKuT9HTXGGNT9geHYsAUXxkWNwrgoGyHR76yHF3ZfNx64CEMjjvva3TyEgFus8WBJT2AJbacSQptFN8zujZ6b7",
  "key16": "5tt5Hbaz6SdJAE81gxeNV1YsG2eNvoyNuFfJRcFgQZiC27rz8dcBYyYg2MhnXnahq5ni3eMhSCUo32KTtLKo5ceT",
  "key17": "5SsrdBYMEvTcrPj4wCQhc1MasyQ8U88k2mM5iNVxfNLyWewtBzfJPJdqnSu1eRgN524SQPZXLGb9HRPxXQYTq8MS",
  "key18": "3niM74tw7McsWJiatNJVd9fUNjuZhaf8uimpDEP1FQZVJZhEEshou4p2Ko32T7Vt1mdYCzqNwTX8Cff24EYCn6th",
  "key19": "m55ExkgibXT3vCcFWCqdrcuJkoaihHPoHG9w7XzBpvDwvEiGD8HSkccUK1tjpvviwxGa8EjbrpjLeDgxotn4YVX",
  "key20": "4hTPtL11eoDrEoyBdp3gegbDxRjhRZbGH2DWsnT2KxnA2FTDKXsCRzZhuRfkfEgjUFxJcJ6v2648ZmNpMoF8NWgC",
  "key21": "4gZqfktbRdfetFch4y7XZMREE7XBhCALjx2FDEazjx4Wd3tBEMbmUFjPcwxn7XkvjufcgDvPY9trXPzXtqKbGUm1",
  "key22": "4Gu7trrNXHpz4M6894x68h2S91r9jv3QzGoUh5zsQpm4x3aCqRZzSkogiTRXqKQeYuExQDteVBJFtDv79zeXcL6p",
  "key23": "2EXPt3eRQvuJ7N13WNKQA85ZjAabQkvTpL5qABhguPzJAFw4vfhVpKkAfnwzwqnGB8ZWxkxPmAcyuiXH8cEBGiZP",
  "key24": "5ozZirDUqav7JJct5oz3yAMiSMRE2gCRS8d6fxMKVgTEvdHc2LH925qmpQxSchfj2DbPbAKsF4t2sBrhFARGrY4u",
  "key25": "5C8KD3oVNnHMkXVkGWM5eZuouju5X9FXDRqEMRTjotddzWPkU7iWfZ6TTryB8g9NWtNjkqiTpSAC6wER8Q6Le5gi",
  "key26": "3gGUVUR817gL7DV3k1vbTTKiHBLHChrPsPfq483hRgnykUkkEdonitE4mLPjKoYD95wVYoQhiKtRVVFa1XcUV5vp",
  "key27": "2WReF2PK5wSqPyHJQRMgUNHdJsjDTzSwFNFWdX54azZzxQJBWaYTC3iTs9h9s1gg5sXyF5qfgwr22nn829nG5LYj",
  "key28": "2LCkRqbqiY2f574oC22GjoqVwkVG3QaDCUwn6uGNEDBBT1tyjFzcHknLzTvp4jTbkKFR7xx58fDSdkGxGHWFpSZX",
  "key29": "BeWdHSwxzpzXvjanhnckrgjJu12xkdavQTC985f4fM5NL3XPTq1uBEoJiHhfh33r6w18dgNxsbNekvZXADwkgnd",
  "key30": "65j8JJmp3hg5ECRNP8voboedKD3NW28f7PiKeXqsEyNbhQjXeng1P8N5oUD77pS3rNoXTtBRqhdAJvonfYzkNwKB",
  "key31": "4cWLM14fC3EyydPMXXDipwGD6gVkSk9XJhSeia3GT7qKNgwtuFdKksWQmkHTzjHYKo13jw5ZUPbENUtGj5e9q2wJ",
  "key32": "3ZEPKXWiKYExSUCoMYAhmKQ8u3GYbWjBuMLLPfTE177ERj2y52kkEvF3oou4LnJL32gz3RrePokk3wzUy7Xmc6Mq",
  "key33": "QmSf7AVrdrL74fzoQmKp1Z3Rx2EUaxLNNQyXGqE4f9ABqukD3qAQG3JKapBaqbT7CioFiptrKSoGjigZ5Kci8gu",
  "key34": "3VCapszabj5HL7BCSoHAgDSbaGruwSyiC1nDyn8Dh1V4cRkDenowxToV3pnhQK5oyYycNNN7tu6Cik2gkYzFC4jj",
  "key35": "TVLdY3bso6qeZv38hoFXcMJuQqBBNC9rNswG9ogz8v999AQUcBfmkSA7LWe4X1HpGDoer6hKkg5TadKAbRjLNXa",
  "key36": "3oWsuby9eTCJfbBNgN4KZ1KTRsfAFHKBccxS8VeQzCQBqYMrNVpn2yrqJVkEPAZz9vAFHgeencwcwR7J2ZcaEn3Y"
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
