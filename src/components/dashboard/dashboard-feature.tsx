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
    "25j7uXeNYro7j8HTKh1BQsAodBtw1tT9kXUjpq18ghT28xPKG1AMJQ8RTBomh5r6derP2qkxK66pK4GX6mf2SHU7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52HDURH7jupakPu3Bq6JDMVqXXsdJqAcSwtT4h6tJYcGLAxe5wVszmtTkf3itS6866fAY9ft8uqZLUr2gdsaqhiu",
  "key1": "5DwCpFDTQFk98Vdb9qAVkNjVhHt7WqCmX1Z1Vjp1CrG6QkPGQG34QCLUTe6uvgyp9RtJyHeTYJLaga5mGp45QtGT",
  "key2": "5obSwp4n6hHAWXvd1UN9tmyPWQvtedruivPvJQG95QywRn6pxGovAn5VoWnjWuNmKRoBssjRzSB4peyxTja6qSwo",
  "key3": "2H9q7sFz2twamwMykhiQdJwUxoTY8dAPRMim6PyLvzpULMT7G9xJzTv1SUAKBLJLMWgAUzCJPjuvUHd16MpunZKS",
  "key4": "3r7xv7SFJE4JQuCYfpB1JwaCsaYyTcVzLiXS6LMVfvT3hHFphSt9btKLNNhJ34DgKeJwk1nCtFgPB1Bnyx9NhA1G",
  "key5": "D77rY9KQ5t2rrXvzWZJ2LZWGYN75c83yCUiBYS236CVnFMPfR5VV5Hn8hrEi5es9WaUcPzQcrGi1zM1998idUbL",
  "key6": "jFDWuGUHNZb7XQxEvdbW69f9sfowYa3hpoMjmcE14exWTEsepNzmsCXjRuoUJbz8rtpuTy4b5a1znmEetZLY9Wq",
  "key7": "36pTrrtvg2eB15tJu6zYSYr3raQyXGFw2tc8jBBhtGNxj9hYQLt33Yr2hDsAByagsMAdsuWjxTbSnbJ6XwNTVSjN",
  "key8": "4fAxvjuStHQ1vpKB4sQR4vNBC6rQZhSusRaDvcKDdkNCDFfCjyLBuwRQS4VELeSfp3ensSLi83WrYPjtmtBNruzq",
  "key9": "31o5y4qdBEcHiZtQYTSBqXjPutFsvBz4uWdD7VbU6xBEezh4fZFkL8W8ccRzZxMGr79bQVZE198Ly8S1LZ14kUdC",
  "key10": "4shBEMYRqZdm9u6BvEWpeszTrdXXi6c2y7NRheGDGVm8PZsZ95fCvFAgPM4fNnkhCg8bhcL13pxMMstWAtcTgzn1",
  "key11": "1vWoYQMi31okcwr1JqPtt33LccXJuU6ZZDj7R2bwUdA97yEzM1EMiiRjjcYHjvHdUh93u53z9ep1fU4q3awEtV3",
  "key12": "2ezPDEtAsrgrM4EgpGiMGcioaKye1yvQ29K2ZGDeSuWi1v7uHfBhjKx8TDkNCreBGwqswSfw2cdVu54jaGa5cAWW",
  "key13": "5Q9AwKkobtGRKYRhfNkgSqVe3VkXmVaRzCkoNLEa7sXkDtrE4P8Hvqwi1srasAk1W4qVkBPEFGgwGvPsQnz9Hztj",
  "key14": "4ZWhEubVSNkgrGBEzcHeDCfLTLBvp1frF96cFgvLaFY7PNSsAvWbb1xPtEWmLw24oKYakgCBCcieRHWiCu7vuDg5",
  "key15": "5PtjoGzQWZ27emH3A48bw2dWai1aqK81wZmhUqqbkhKmrPm1QYABYFfgyS2Qw9uPR4gZ7KQ97jMYvhYpj3aUJwpw",
  "key16": "SNvytgyCApdrT54AxJJWptb2dPRkCpsLRowNT9RWLWnBLSfwjn4vDKC2mCanEuDWoZeFfnkhi1rND33Msxuab9Z",
  "key17": "3dou9TmskhRc7zMprHJZCrmaE4tLa65cbzkgsQvJ1kU4vfdio3TVHLavmSxjjXeYGnabVagJ9edahAzYffG6N2zg",
  "key18": "3uuF2reYsJ45dxvdKxHSTBYmCRTyayvBFA38RZqdcxk4KUoHvbp2dCJCcVsg1bffqPvNj1RUsq9pXry6uuFpUGh8",
  "key19": "4XiUEyTvUaKha3JK2AL8pBG5gboXtigXu4vxatDP7HzyYsHdEGT8WWapXDCDvz3FiDBKk4g5QCPYmndFS4YM7fYa",
  "key20": "2rLW36373gcC9FpESoCVB9cae1ovhB94iEkDwCADkXHjfM2DinYRuiESNwFmb5uXdGEEBzaBoMGGGkeRveu9sspE",
  "key21": "5p3BFhTUodNXTCYZNLtSXRhod4dSsUQ4F9kmTofAfMxavtDu6tHTpigSvCT5uNdJTF6PYohsxs1ZUxp3zMDaNe2c",
  "key22": "2TAvWeojEusWxd4cVqLpvA29Xsj1GMoMvVnJmyPyF25YBWkkGsdZdSL73HRLC6b5UhZMXk93yhjVjD7V9mPd7Tzk",
  "key23": "64MLoo4ysmPVMF3Uvywt4pKwzu98B46MFqFLQB7ryBBVpsHU8ynnBzQLZ8TAWjsVoSdijEmBwkU3SFhqbwZS9hj1",
  "key24": "ZxkKv5eLgvcK5Rej2W78RRfEZfg8rbhVRjiEZtV7WDKSzA3dj3amsyVQTkesrsSzKnWgDNerP4ASSaVTuF8gzVC",
  "key25": "3K1odjuyp1kT4m2N8W7PuqSCx5YpqJzksiJ4N2WJumao1xf36ZTXr7y8s71AdtCz8xY4j6EQZAc6q7XbLbAf71aE"
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
