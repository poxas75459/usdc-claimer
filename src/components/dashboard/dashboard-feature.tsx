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
    "2BgJWsGRkQH6FmA64UqqfHVA1KgcMKJYj7fcA4Jz8xsxbeT8cih9W9QL44BVmre2dA2xhX1Eob2A16kVcvEs67UC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49rBpyiur7WnkHhMRZo5PJzoC1mXeKGxNwjjVPKQZNagy1t7xf8gALFg8e26t96hPW3v8qqD1n28PBJiqPwcZGXZ",
  "key1": "2Kfxt1tfxb6z8PaTsxzRqPKZRVXCSNmFKB2qWJRYoYxWQCWDiFgmrYA5pCvQztvipKJgqzC1fyQ8AmgbzW1CLNq8",
  "key2": "3W92yccoLRtCJZia3ytS7zZL2QiBFKWS46p6Ffc5cP7px9W9UGoXrqLSZcVGKbrdBwV1y3aR8FH8cpBqmS58RTe3",
  "key3": "Dx495pnwypdMVWA33Xoz1YAZmo2AZbLkpsTwuN8RXfKA1o883nuntBW2tW9HinYqaDjjyToafU8JEHzEsdnwkL5",
  "key4": "5RdFqNgtRp1qv2LTaLcBznNhafozeWvYLB1RAte2VUsMmrMgbsiMYvGYe8dCNPGue68KjyyF5NCddoEDgwgpchDh",
  "key5": "4MJoVfzkcrABiYB3pAy2P6scKUbiMu1DKMGqHAKUWMbthWsdNe4qDkJR7LA6db9eyPHP9Eqs5YumXr3uahmaVQ6V",
  "key6": "5fzB1dZ7Rupv4Dhd9KXocWQ8LTApqQNzsxUaVsTT7kVdXxtnbskNaTgomR1qCfPVN4N3aJDGQMLXZQch2HffeaAv",
  "key7": "66UzwX1DEzgjyNoermxjxwpibWUVHUEpQzSHX6S8Tsv74GRfSmR288LDtwCcA86mxE6kbAwKJjtAiprLLsfoYFC",
  "key8": "57A54TY8cfLMfYjQMwZLMMEsEY4SHytP6QWyrM2XVEwc58LP18gSkkpc9Fj5RCjx6Npo6SBkecCwnJyCGQ3Dfh1V",
  "key9": "3iwwmNLxN5g6jfGWEBKU4Pfbiu6deFf4X3KU1wTNrDQWDjHwpMymczdCsQnUY4pyfhsiz82meB89SYgV1Wj4ACDq",
  "key10": "dpAVFLkJLPfTXgtGWGihtPjy3XFdPNjQanqjVmLXpFhXdsmE9XjBz8ZURkpRDhU7XypajSnxWHAtdaLw7DkARug",
  "key11": "2hw7mQM5se2ycHEnwVwd5rrpCbS9zQfWEq5wbGghS9iqPxwTxJiuxhwJfGMDHn3ETMdMog9uraQKy1JFxPAEMBf2",
  "key12": "JFgLAnkf2szFLDqdJnGnFxPrF9qQVEjSPWzE84u5WkdC3QC2PScJyTKTXAeNUdpZheovQS86hhcze3h1VGtL3Jt",
  "key13": "oygwD8LvRmpr7hUpRYtiiDaauoBwtHfCVYcrPoxCXp8zBpB5U4BjYPFoNFAd8HNKiUbLXy5EeoxhSfxbLvcQHNd",
  "key14": "5FoCQXMyfaSH5q6YRmBgwGPnAJXxPw155dSLkboa3RrxdNGCZ1bEjLM2VEXmjknrZjeh8WdTJPUMeWgMLSsVVEdr",
  "key15": "2F1ZVkaDmLS9mJKsswHLafLjrq3eeUsp9i7xTV5Uj733B8YWPdvsFTFTTdtcuNYqNFh2BJcCMe91deKFBSTaNcZE",
  "key16": "4JR5WiySxARwjtjZP2pSW7HSUKiXrSRZvjemhNHiWZvtx6HeZg1GZqsKx9aNFgJ26LoonWEadCgRhq4QrbpRGZ1y",
  "key17": "r9CsMUobjJMPg6ZHTu9ypRFCcybuYq4LmQ1smDHeWPUsEYb2jJGVjHZeJZFEKkk9F7GcZNJM2mELgQjYhhbdR1T",
  "key18": "5RwVkW6a3mRGo8wutd12pc76Zfa9oPebkTmdD96PcC64C8b1DKi9Rkzt7dcgQmzBtmkvSEB993Bkh74LcdeagHyX",
  "key19": "4yzmC3Wzx3Fp9swUBM5e96d525FznvBCXDYxhCsXxnct8rTcisp85hve5cjs4WJf8Z4E5qZkG2FCQBPLXFTKoxee",
  "key20": "3KnoDmuKc2JPDXkU2s1o5N49TsBNZhRF6MudXbk8Zh2BMcPvwEqb9FDYhUdu7nKuwiYH3j17J5WkbmTBfKMnAqoK",
  "key21": "3KeUZ9ZWhPh2iCjV9aEL1vYMFgZb7CJVMG64zjYGDbhSviLBNuwHMnrwHNWzG6MTCbnVQSQGYdsHJC1Wrtathokz",
  "key22": "4WSjzNhBZfx7qDLrLiPyhFBeTCfgyZj2n4aQ15NH7G61YHwRWMjNTYr68wJZFcuMZCFH9g5GgfYsEWrWmGPt936i",
  "key23": "2NLejn7WGGkGnMNTcMffSFe1hX6kLMjzESfKJPDZc9RMjqzagydxtDocWrQLmuFcbd8Mev4EHusaTP4mkn1p2J1i",
  "key24": "44fACVUBG1sJWoP2Kd5Xsj3JbKAGdMoEkqvJjX8msZKiTQtrpTc1Mhh6so2B2nfA8mSvHbpFZSUUpJTN2yQrYrZ",
  "key25": "EG6w7DMhUJgFHEo897zw6g9N2DpqpmsH43ybxtejKngYNL4cdRBoi7AHhDBpkMZcmGzcxnKM8XYEqPdpDoKE4MQ"
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
