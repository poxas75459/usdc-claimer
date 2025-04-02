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
    "rFnuNndQbNTf7K25UYxxoywZKwHYF8dADA72Y64LKTVmMNtHrsq45Tkht6T3pETmCVcCVgX4syo1mZxQbDWt59H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VvSRqGiFpri84md2Pg9xo8Z2Thr39M6kDf4JK1ernNfrvg92KmPaFEjRSRj5VN8WnRqyZcM8o6FkzRgc1TL1ZbE",
  "key1": "4DfoDqgixppkqGVag3Ta5CEa8KnrFC5mLtKaafBk7oMm1x9UUBY47rBVj4JZc72dhnsX9Fnw5CsuJ5izTmDGKBPs",
  "key2": "4r84y7ZxEPE9DQQRQHytqRAd2YAGT8EjogQNZcQuiMzbddvSukw2BBFQdkpouGLVNFFGQB8EkhK66kybd8PJRAoQ",
  "key3": "2tRQz2TpRtKUM2HitaH4UCzjj8eBwASHH8QzdBJx5RM6KN29S9Fre5Z7FFLLW6nhRkNu9RqnPHxcUpZrdwZiWhR8",
  "key4": "4XKAySGNpo7hByikPfaxfTcgqFJs1tT9owW4SWqEy5dMQBLyMdgQYEugQYj892bipig8HhuJuV7BHQVZPMRKUAdq",
  "key5": "4exwHXvAhDg7iQAXKoJMj2frRbnRQuhE1sdbVGQZdJd8fvTvxNvWxBckoP7rAvHhxz1Ch62sckHWRgrdBuYzXZUZ",
  "key6": "Xw1hd965aFgULBUi5RH4b5WHbr4Ho6av5G1oyb35uzTmWDyYA8EwqwdatVCFgYmiqn2DSmN8odiLnopR2CDDhWE",
  "key7": "3WjtxfSQZMeEaigvBHGdcjnSW25M14d2giaCEag14sp2JNVXoLZdhNcQzsY7DLJDkaNCpHoqZe2shDsYTn231DTk",
  "key8": "5CgNgeMLJ2g7iYHZuGEWeTR1RfWVQv6K7kfuEjkmn8tT9tBHJ98cQbgijqx65mhc7EtBjuzNSGtunEsRqKhxE2Ae",
  "key9": "hKfQFaJM2vMsqNMbzCeByHF9jaHSG3RRhMFhtcsXP5MBJ2DZHhR8CWjbPk3tGymjEtLfCfeVH8WdufgkLpoyXJD",
  "key10": "2MuDMmroPTecewMPyAmYrKDxMq4QAwvphNDuUPd6wxaYmVSkrBpZH3QiChft5wSZDKz6QQR6wMmx6tM2oKXY1a2H",
  "key11": "3Mhp4PBm9MWHi5nMvQYqggLXwnh846NhMiwsR46U4MrQHp81mfg88mAgu2ZsFNq82bvQMk94YFhC26hWfNo7zuZb",
  "key12": "4wzNuNRtAnmNMAECUyJDY23GndG8CHQgX4d961wjuJRdc3Z6FWDQ63PT9YDzoaUY4avYBU2wi3yQjpHgha9e2djP",
  "key13": "2w7R2EYTR7F2ctACYBUb5F2ksR7oLrg98XZ6WSrzLeskVKfNSSnAejYpzXZhD5taLDDbLCGENRrGWM4oPAjxpPQ5",
  "key14": "vcAzstfhre1Mw6mfzGde3w31ixA8QeXWvHnuSqGRe9P99S3SpeBrtgzWJw6Ex8StMFz2FcxiaqAxmA6GgJgcJef",
  "key15": "67JHa7p8C7Y6oJ4WWQ6Gagb8ySYWmdru9jDxVJtEAKdmyEumP2t4pmZSccxKEouD5vEqyFSPufP5wEJpKDRuhrLu",
  "key16": "2qKKaJomo13qHDBk5VJnAzvH9KZmSRqaPNsprSneCpdacnWJXp76p9Puz2hKSY1VfPeR3zMVSYb4RMWAwpjg8bni",
  "key17": "2iYHyKMXTruShvinBXf3X8kTYvDKn1ygZ8Fztv4vqftZJuMbCJUoB8UvrX5yYqobL14Nk8Q5hHAbZZXF29gQsxkZ",
  "key18": "2coJg56zHcHNFEBduA6sbeeqUCQoWP6gw1h4FhhAWCkLryKbMj2b6we4sKseZSbdfVayXWNABL8QSZaaLjk6Y7ZB",
  "key19": "2CKBDf6oRhKjgcAvhELyUVsRgU7xdxW9AZJUbbMUZenRjQKMd5545QQPLCWagDGJafG7KJJzCDbdqLqRJhmcFc3c",
  "key20": "E1DRYjHv2WGsgGkY4awMxx5R9uzgrpQNBTswdEc1Y2fXFpwdAPUFDC5qyfJUxDH9eS6B75PoASDtwLemVhxZg6Y",
  "key21": "291KbDDRE3yHEhapFQiTGXCNh7U2sXvFAhgMDQh9fB2wXHyXXnFHgAXiionpScesK5tYoaW214xDkEqydPV3rZB5",
  "key22": "4vQTsmVAidjgcNt38NZhkix4vqLUd3nv2Knh1qwhVhkfUZa8yY79xRE4i65fFrLhRbTHUKBSFM6TFeaMtaRtDqke",
  "key23": "3YWNKTRv2ETX94EEHR7HyBLACGLiG6AgYnGVDJYa5qnz1R1kE9XmB7c9MEMTCG1dhtxzqPNYcCHBsy1PDonp8hjL",
  "key24": "5C8t3ThqtqUPVF6JHkdR77NNHvtPRR39VcSq7ruFW1NPwUFTNBa12CfwczgEGYvjKh2gacwLPE19fb8oF7jh2v75",
  "key25": "2yyZJo1FTnZSqN9iwkdBfjvJGYUPuPr2vVBvNzf3iKTFokdbXxS27UZp5DQrjgSNKUM2t77nhbwTXJyBdcNcJ6QP"
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
