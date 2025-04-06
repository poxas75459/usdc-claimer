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
    "5p1h723gTcFtvrudAHe9PkrbZVDCuibRPkTZJ6ZTRFJNaZXu3rFJRPKNJuJTLokCy6PQ53DJAB53YLw2K7c9JxU3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U32dU5ZXY7gRmeXbUEGbbCoXDFtaudSsJKJXsiUVnTyhGDJZ36DydFS5b8kS4YxGrZ9smw9tMz5ifEzkxY339Js",
  "key1": "iQ24h2gBGknyfs3HkJQ39L51kjBi6uCGAYKmLs9yqsP8JuV2qEptdKph7pQtZictRn6jBvPo89BTGKj83VMBeoG",
  "key2": "32exKxD5iqSEcfi8PFfRbzFaWBsu7THeX2oi2oJ9hVNonm6Lb8BaBTNQUg8rNN9RWf6NAVA1QQ3qkZ641KKufdBY",
  "key3": "488m84UeeKxRhmdkCsVhg78JivG3kjphTL5Lqmn8aCjvx1bUXyYH3imeCN1FpATPrKbHSLyVxkF4cCGBPT2suJCb",
  "key4": "44DWmHtXFRWGV91mH4A9Bd96J4cq5wvCAZPXKt2ZhPy9dnrbuoPWDqXpiNGuKdY64ZE1xyd5nRxtsPkpJTZoHdBj",
  "key5": "5jiVmmrRSNim46gBc91voL2LcjE69YscG8hvaixDVpNivicbqgKtpGxmp4DDkdcbKVnwPace8BXaosbjBqi4ePZW",
  "key6": "4XfC7W3CE6vsWu75TxBuntmVnyHNGLaX3pVEEZis2FeYSKQAn2swciDoqriGLGFN7G475yrzCzwPRgaKDesCZ758",
  "key7": "3krfB7V4ZEaT5i17SW3SvEkBr1eBEPLiPddxfhXJq3acMjgboZHXaCvUATURA13A1KZfy3HNEwLegmEGGxb57X2D",
  "key8": "5pMAg43JynBzA8TEnv2mLKpJqVm14s6jqBtKCkBYV7PEvsLP1nrFvhRMMxYpNWrzc5V1J12Z8VheBf3g9LjAobaa",
  "key9": "3oBkgKaqEXiMAGE9smzUpLrsoYaHAVWTaEDBLdxoXB3MvUENzxnDd9sP1hiNgWhH3j6Qo9ZZQQ1xUeUMaS3fC3NH",
  "key10": "RUQLj8P3oZ3BLQjk2nsRGFsLWwK7RTAEU2MdVdKVnVpKs1NynBpBRqSeRnhZWgrUaLE1PRHpn9heUjhi6v61u4p",
  "key11": "4WBpdHdz8GQMhwA2cgh9vzViufYsU69kJFqss4WVTCXXNaoy9vYYrHAr4gEHxvBKUB1b9Nfjk5kY48KGDE7V3rV3",
  "key12": "3py7pvQdx32VPdHUzXecR6DjVNgQBLSTXkKA34KcMEkESxdEU5XZ9XxsB9y9SjxwN67obfjhTrpfNA7TNKhhvGVp",
  "key13": "37YZTxFT2B4QeGYQ2xnBtFCTkw7F5jupF4iQ5S5KYU2fsMCxoxePFS5dbXzaZ2Gk87VuS7YP1Vb11o5RYEkNmeE5",
  "key14": "3RbvrE7QfdGLSuWHMbe3iuRCqG8wTGatMhnc8yUQiBKiyKtRr25CPhXaxVfv4Tew5oN7JjaLJWajZ9P3y49KUSoJ",
  "key15": "QdwdzavAyA6XeoxFk6ix9fhz8jL9tKrLSrYjqoPRkLwdGXazdsA29TJnHML75gHMM9iqLmpZYCuZjFAoDRN1vEc",
  "key16": "5qpALQFH67tkRXJ5F6fr7rEvafYqZmHLWRKnfdrtZ4pDfaqVRpXyd9YVrJpu9cEr4WKE7WWJZz15LeZgd86GasXm",
  "key17": "4QvhQEY5Qohke755aPY53RdmUEh19hrHQ8FTBKzxwrofEWrQygvZyubQjouC9BaLDy1H84UWAacqvpwpqRn7MVKC",
  "key18": "29qiDyrU1mXCPWzvSkLoaExqzzo7s7QYPE2VXHxBGzq8C6oJhSSzpC8PS28xCoHuHikiWFSeVFc4QPWJ9JY4wuDc",
  "key19": "4HJdD3M8unxJmBAaLhNVxBjDVLJrEMucYdHLwYo2ztMmEZdZyBBTcjnVcHowEZRfGy7TNv7Je88YChp1KowtyVfc",
  "key20": "4EGUjM5WC1JvLuDSYJ4j63X4K5C13dhUxWUscoZs5Am51gAxDwdVy1LYMabaLeKB5gPbBVvXvdzYARzTtE8c2nTe",
  "key21": "2RqW8cYg16RZMws5crTU67KhEUfQA4zDzH6KjYRKsaLhX3781VEiPpdNsi7KfiN2gwkRfxqPKxyUMi1W9Smz7KTp",
  "key22": "3AULLGxeNnXVqcezFakdj9oHAvJuGoj5K73BEbTpuk652RZcfDFEHmEyf1tDLxEkVd49ox4FhK7UgJg343msC1ji",
  "key23": "4HKVaPbNAK2ozA4HKBzdgafJe8aWFHhBHXrZFaYd1zsx6GvkQctvSLy8AmhY6ZjTS3cYKsRv7fCAFwJKyX3oWaeh",
  "key24": "4prrx7it1wE9UqJJn5aBmucBfCnbeA6RfkBU1CuuSRjmEoSLRDUDW8oi11y6sZceDp5BMLbFTYEQqAWTW1ZUcs9D"
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
