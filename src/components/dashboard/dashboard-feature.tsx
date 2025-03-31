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
    "5hhfAPXqHLPN3SeETTvyBWsGpXTipWdrCUCbVnXC8g7FpAr1mUJbj3jNdFmLBhhJgCmyT86HifV5mJU6q6BHvUPq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rn41U4sqB4vruB8dy9cxtm7idLFhTrbjSQjMB9KswJQuwx9T2CKV7L54wgxabmPAoYA3vyLGxsz5H2BK82753nY",
  "key1": "5W3JE27hnvtFQzFyvnwn4groF9tqtJDMr5qEThPdYW8yySnCsHEuD35FrMQzFg4GhgBBVE5ok7ChHqPKwJM5JyYU",
  "key2": "57SJAiZNE7eForoSdBW41mfP6jqmiSguPZfkRwStNLubEQfVKm5vGW9a5mPEQ7oYduBYPeteLHf7Zj5eWZ9PpyPG",
  "key3": "4zCCvxonD1VLjUXjgXNvkS4U8gubDGkvLN5kYtkKvedNiU5eAf59AtsGuzkkSHdM4LBXK7ZzKdAxfJmiafeJLFyS",
  "key4": "4SJ4U7hzZwFgYJ3SufTbGZzHDE1vcfK6u8hfK4YEfi4io54NVXaFawqK623dsA57Jtjhc762vaa84Sk6e7UBFupj",
  "key5": "mBKcGw6b5NiWrddLHqSb4g5RBsdvdoEC1a3erusYmVb6jfDoJmMaqJir1PgpV9Yh6H8SbyC1xWuvbyvH4eAj6dU",
  "key6": "2TwaEqiZus9jkPAr7T6NQX8FHGmhZYpRbuVWLwXHFtC5bBARVWkVXuKauTVsBBQLqHnTfn3UhGQ1CWEacdUFBXKJ",
  "key7": "aBzYq8r4ZDniaZknYhTLVsLydWLFsZ8jY1HnFFyXWuSu5P9KJUUvmD4r2SWE68BsH7nUNP92Gj1XAFLfL3JWZTP",
  "key8": "42QThSGWVbsc7h2ABn1Aojrt2BVaMtxMemyFK4xJ6xqU3j3VbRNLeTBEC1auBKwjhbp3pmXgQaKySHKtART8EjaV",
  "key9": "cnQDCKnSr7Jz2NeNphQNP28draqNDRGnr2diwP5eoxZRLG6ada2tKWeD2XDiou7Nq5oQHY7917rPmR9Ph3G2pY2",
  "key10": "5ZAtWvXAtK5sWib52Sj8uTgJfbGbvxMDm9nYBtaAZvuy1xPHn4zdKUm5aKyYVgE4JGEVKLUH3XSbnHouiHhhs5Jz",
  "key11": "DcngRG7EqwZt1HteCn3ufbTWMApaGAZHxk1TinMeX2dMzquDAh94NiiLmvELrskhH6kZJDY39UBFJoX1oiFNqKV",
  "key12": "3Kvo5g34qzP4jguKeSpHB3imsFe439UQTXq7kCEF6RTAy4r2ssAqWF5ajKWFXahSiufY1qEoSocsMsb9g2CoG8Af",
  "key13": "36oqwJgm3pqdWdb9xRWbTUSFjrSp18hF2sgysU6dNMr3qmHCkAdjiHGHjxvjq6nVR1HLHnnFRWH3JMyvwDsRmSnd",
  "key14": "yDiXR7MHiL4Wb6CiZu8nfDjhZYChkj87y5YtzEaBTtMY2YQwphfihqbH2JZzdY86717AwbJm5epqiKC5Wqn6LoY",
  "key15": "2rzJcmng2ZzyxM1Wm6cP5oEkZNdjDiVyjyzMfcuMWNi4FyVpJ19jwVogKk44Y5HNpBcjivTuAVaE58Ev11cY7t1T",
  "key16": "2EQVhmzZq41QUfgBJgCaqg1ucrcvgwMiCzov5iFAP7HjGdpEPjgopiGQ35noktSqddtUvs3LXX8FVbMMDh6RCE7D",
  "key17": "ysMBXFaUHm3sBs67Zf1T42pDcMxrjwmS8pqweBWQth1J5hxciXXSQwGyPdsGBkkiKSd3mqMTwPvghBZBSKDCsuD",
  "key18": "45XMWk1UKzrtwsnX4L6qF9Hok7rEWYRCmGf5uVfUXM5vrffgD15xEzxsRqnkpTJmsG3j7Dmm73cprDxeqtuE6kMN",
  "key19": "39fS9dPhmp2uqnLh2VUQsccgYmuqw9jjEBz6xH4GLhW9Fzucj8UNoG7EvdyUrjZsMg2vgLDTupDbzEnhT1GCddmJ",
  "key20": "5YRYir9U9BQhYRVdPf4Q7sm7GYKwLxqkRSiaFvtrkTw6HfoCLRUvURQ8mvJRnsRn6pCshKfjs3SXCV8oS2xGDXD",
  "key21": "2C3Zvhy2AmkK4uXmBXK2UkpTSK5GJSnwwAKB5pFj9ZmcEYfeT5MnN56FVJs1oU1PiKMFLjkpmjDndSDyHVW59uAS",
  "key22": "5LjKTGRXUe4Gb8airjExeiU57TF4BFd84GrHYeFDtWSg81PpfTRSZMAXu7sULruhnu1sh1VR2YeCMsgikofzoNnh",
  "key23": "4gvWQwWjHJEkXGyL3cmiX57fxT8XhZozpF8bEsXphKti3ZfywGfoZ95WenbLg7Dr3E5cpRhx7JZtjXb68Q9MfFy2",
  "key24": "3RuM1hasKyCsdsHJiJRfTWC657dhaShhYEuFdhe9bssmbomv2FSBKEZ5Q2S1iwLo5Qf4KsvSzzp5mjsYg5V1JP7w",
  "key25": "2BVb197fgHsP3ND5sHasXJpwQK52ALt7dhetPpnKfjuntjx9o7Ws5sn8wA2BuYKMP8gYndDZc6evipFQcH9gttoH",
  "key26": "2mY4dZxCwpQGZo8XSsHzxTyUdbRvmqRwEWGSA9zbHGe6QyHgP1yae49xYkoZN51pECZdXb9m7h81LXSHjWAPuqkC"
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
