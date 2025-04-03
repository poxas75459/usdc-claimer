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
    "4esCVQvLjHMuK8FmxXWArokDCHFVHqnn2Wd1irb3jdvcLeswjgJoKCjH3b5JN3fWTCWrXz9y8PwV4oVNuUEHEDoq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y3X3ATup91aEvdaqD6fEBs6gmJGKppFC5GfxbHAB5oDZoUgLK4NJ2APkKPtZ3Hjzx6jJdtGB2wdxUuDWvBkXmjV",
  "key1": "5bCyoQrmGqqSFL2uASwKqd6b5FP7oCSu5n1uD57cyYHfM7WBqtYBnKGbgah6fLoAUWRhuuRyB4U5eHBojtWfjf7S",
  "key2": "2AwsCehnawxgSrn4HQmyHJkp2YSSpuwAUABmkxsUL1MVDk1m1xhMc7iiavEovipBuULNRYCBhUGqgxKsRoQNvmtK",
  "key3": "3RRSr9nEcRvDgxHLgqrHkx4ovgZouwKYGZxrDqc9ZzH3t2WuetLp56ssqfAZzJTnS9KNhSjUNuw76MFVwXKPWdLN",
  "key4": "3WXTjWkiwZk6tiLWmi63tReEGaER6BcyA9SyPKqB2ytGVratHEMc4iQARCfYXf6pwd1x3Buziddpcm1mhsPsKrce",
  "key5": "3Fp2Gfyzkod7TfmjHL5uLSVMjkQVwqmxr3v9NH6bgmAr3zQWiBj4kmDaTPoXknyi9eSiwnZb1qKW1fWX6gabFfEc",
  "key6": "621wtkFc1Bw5Rq7AZCxFFESYkzP2Dj4aSBKWym1ADTuQHCbJHj15j6kDMFnxaD7guQUxZxkBe9VdsmdnPmV5Yi3n",
  "key7": "4M7kDBxd13jeLFHZLMwALK1T56ceTEGpaP52weiuespukzYqQxXAhzU2WnC8SQXuhdtW799pDP1nNmqTqEP6asqh",
  "key8": "4nRDK6E5HfZVvfUxQxMQZEiCzpx2FcMQdFbFoeFWjLgWXJUFwjQ2akz12W8VE5ozx1YsD7YsouJvK6H6Aex3ThYj",
  "key9": "oi2SPuDaPtVTPo615WztctuBpebvZvLaHXyip7yAUNxghKuGdaWwBcaW7Jt7HrdG7S5fSAtS993wXpYDWGbKkko",
  "key10": "5gLDqScXp36L4gg6YCDbtAfJGge8NHnBX55VzUXkBcXPLX4g1GHwRBuHuxD23yL8nGM3qi9nVwfu14tcZva3W8KY",
  "key11": "5tQVJm3MV4GthWf1KSiQUtm8JqfDNejg8dPmAvrDMFv21ppuBD1K2xeu4eQf6HkU5bGomugf8BMQFAxAHDKYTAag",
  "key12": "34CfBtyZLvZEUWumbrJsTVbSDb5LnvR1phKQuR9F69a9LDL47cCMaYmU2tZwHZcdXtKexp5Cvk3KKuBqmLtoVodf",
  "key13": "5JRTWKDtzdnVYpoFcgMFZ6TSLBQp3DkZoz6R2qXkpKo3x722ASLkS7m8AsLEXJTUD9EX9RRpukEsiauyYNFXuSH6",
  "key14": "PqnbkoDYoEtmMJ9LBw3KywYQHqqURw1hXnMfNYhBWyfAiHH9PVwG6diNqr4SAVqtDieTUwiAchwEV9htm5orGhs",
  "key15": "5rAKfpBWU3C8maUQKqKRuoAmhmkE2G1r8FsEKcTB84HFjUfhXbMtCysHkmKQSg7XhUkrqDLYp24wT3Hi5n8Tsyvp",
  "key16": "3z4sx3JEVFC7b3gPj7gK7jBj1Py2pwz2BNW2dqxSfL2CFooofA3xkwG6YsUr7x5hdkB6ur3pQMTWNwV23jpve2wR",
  "key17": "26zStTfGBC72BXTt4v4cwxgj6Yz5mRDxmryDiB8ioLSLV6K1Wrd5EGxVCLymJSy6eiw94cHZ1sr7fEtyzng3Wf58",
  "key18": "2nXnJXANUMmEoGKsW46E4VwWrzq6yXxX6PjM4bdFKfURJYRpyBxSX3obdzzmtV8DEuV51DpokcAuPxZXsBZbNvok",
  "key19": "3BKvGPhMwcC8bNNGATpqWtFzgWgHKkg8nqxT7BkHdKY93A57ELovmu1eehKbAQtjjV9e7CmdeTwutTPT6uHxLciX",
  "key20": "4h1vv2zXZVNxWy7kKsdo844n3xKhDeCpawX1ti5MVeXgvJqGwX4knVwUvuKte6ma6k76GmyKxzTuKSToeka3YsKt",
  "key21": "3m3LUCVJAdsLrVuSSnwrYFjpTex8ozKxafgnbdmVc2iYdAsHzYes572jEUtGdVuAoVQXxngfBCvLDc6czTEcZdTX",
  "key22": "2Ubb5uVrdn4bsSf8Tcs5ED4yCvBvsLn4iR4Hw1qSy6p9ZCpdD6JLtJsT7VoEEVFV3jahMUUdG7kQVFiveNDABrLs",
  "key23": "wa4Mx8Lu91mPgWwhxbii7fu2ub89znswMVhaEVDwkPhNSWrgjWh5XmxLyUoQqtr8RutdRt7nAHPH7i3aU2w3hvE",
  "key24": "v5ybaL3QRB2J5DD6x4R6PuuEALxh15YzLp7CnCA3f3UXg6meGrXk48wSqN7XFJhk5nsSzbfyJbKSzBKvGYqtr6v",
  "key25": "4rhQjrUJBUKZjVV1wLqcBBD9mFM2pUTZ52WMBC27ka82iRA7VxfHEq8SZa6gmMDhwhW99wAcZWBAJxButP7wYdBf",
  "key26": "GP1ZrxG38Xx7HNpDLiCkY1DNx126FL2kDBGjaaAWqvmNi4jBHEn4xht47zM85bvyietSGYawvrmzs2g5aTp1gKJ",
  "key27": "oTv1jX1EjqY1Ncx8n2bBEqnXFMdf54fAx6idb9wBtLaKoEpKmr4w39Qt7cmy9rMFTJ1ovG4TYZhrz12dwjEc8Y2",
  "key28": "dT1jAoRGmkX3AZEmuZa27PcdjMcox3GtzW5JGPxqzSarHYWnt9a4dhGfraVK6Qth6pTqeEvj7P6jbeKJFxYfPge",
  "key29": "41LxKDXtQjN2UrDKptXnkD1GXdrRaoFC4muxgtk1mCUUrP7FFUyZAyk4MKN2rJLR7cUbUsnj2NDYNFmFZqwLWuqa",
  "key30": "52MA8ZcqeWg5AJB268qbm6hCBSSzPTmsLtDjdh7d2TyjAShz6SEdpe2Zme1T4XKGiJeTgQw611aGTfj118SDquL8"
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
