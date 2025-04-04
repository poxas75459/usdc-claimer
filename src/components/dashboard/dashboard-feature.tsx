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
    "2gJqXp8Pt9wasqS3J1K74SADrnSKPYuV613v1fnAEYLHSe5RWCeSgZ8jiMY6EJiBnC2g5ubX2wvRGGfxBwPLScRY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LL8VM6Dm83XVqxSAGhBwvpawwnpKTCtYNE3m62fz8S9PCqscGCJehVXVYbrY3Y6RDacuWSRMKqUipt3MqY9KgaD",
  "key1": "59oNjeTZYWZpPrsefq8AUa69KXkmDMrtGj4npyZq77ewDMrDJFJZ4BrfC54RgZcQ3sE936EJTDpTo53JMrzgnHdk",
  "key2": "3yywiCfMoHss74Tg1MbC9dCMWW7pwme9iVLHH2Co4pjyeqkDykZNGNNPk7WeaJuJKFkcAe52ARPggXCFp4w8yksU",
  "key3": "3XbX8iQXJyQpRrHmaLQV65c35YbukxP2gkQWyMLTfVL3yEiWWdAZBA4qGgHVvDpx2drY5MHskkGfT1pxskTmvzQd",
  "key4": "57xDrWasXxbRQyo4mmL5V3UHoPMGT7k1QMKk5mm73K8C8EFmzTGYZVwfdU3uLC6tDJmLjQtBx6cUJES7BrpX8Kx8",
  "key5": "558PCvyQ8j6FHK4uaMP5DSEtcyWiMgiWrdW8WrhEXfVYYAiBxcFN59yiaBpsYRcYJFDeKNkoCZhmMWBcznCFFVQZ",
  "key6": "jEjKSU4aMhqdzE8PeXs2XJtcFdA86bJUVea2CpW3BSr1UTLid6Wz82aSNgusSa8jLck2VfoGtv8HHiBZFYhgiuK",
  "key7": "5yw4qreu19nSqhLvW9CxH8LXYeyznfQF6f1oJG1Weg5iWT9bQ8XAmJaYGRorfVT1vYHYRaXzHt14yCZ1siqm9gXa",
  "key8": "4dAg7FfwGhyUQjXtAjHvQ6uuX7gifVgaPVSKqfYu4AH3WG3g3uxPeFYFCGNa1bHiFPgSTrUtbXL6YvGatrHkRrZN",
  "key9": "5bDLWMLSJGvocELPvnPYNYEi7n3qktKSbp5EE4k1iQRJMvUeDZKPSDwmK2ffA7xRBEq7B8yW8SsmuUkpcJ5hzaH5",
  "key10": "4ioCn7HS6fA4omP9Wby4cWcx3ZmiCCzaejffK2WA4KsYpbL5T1PvZSs76RG6RLV4UnfypCbX3EPiFzJvPTq1Zghp",
  "key11": "VsZABV2ZU3AQ6kxZJ4x5Rb9xjPYCQvZ95ekWJUffvuxtrCd8wJGZRZjr7QVwPdT5yQwFh779BcQyF6t3RNzxef8",
  "key12": "X1juJuUqMti8AJ8R4rS5oFiEK8MvEazbBk3FH259pE32jjREE1XwHasNz7uCtBakMGtKTXNrpNp3dc2wf3S47GP",
  "key13": "4wqp4367Y3HNW9QmMRugmWViX114JK6B1nquQPZrrChrKcCXksxqXqAeWYbyGTQgMuTXagY9maF8gAqbyRGCDiaZ",
  "key14": "2tJZs8CGViqt1bi3tvpxnQ7Nr4bpukGc1NL7PXCVcGJcBLxrZKSdfkuvaobnHi82EhWMvzK87uu2AGTvYft744fp",
  "key15": "3adGJWpAH1iE2mTRCXVauYzKa5w5baJa8kzURrvi9QgGGqw4S3gNmnycAuQD9ZuHsiEZZc1NZBZRuX2zxegc3WUK",
  "key16": "4jgJfKzwDVtS7DwWEzVDjA1eCZ4LkvHHa7EsJo8hH4efuiA5xMmofQfvF3TtAtRZzAyjQRqKCAfKqr3uwxTEgSGP",
  "key17": "5sprvrQetARVX8jEu8iqqztWZRJ9Vo3ZrsnqwbEafNDvL3GPKuQi1qHhL1fT4qdsVSe9g1wyyv6U3DvUyoK7T2av",
  "key18": "JKhhv42i1AcCfvRU3U8Hrw157NbirDTQHuCqoxSCESBnnr1sR4yjsb4VAE4RKfzny7nDRBkzQhkotmdgjKC8gjf",
  "key19": "4oTouB3KYw5t9Fkh2WnPjLVdTfwthhxACYW9UYSb6TAvB6syyMAqTmpg8A6Q7pidQKtPCX31PVQzoJXdK2TtpS8N",
  "key20": "4r2FbNJFMgCexAM5hKbt1Lty4uFLfCgD184eE2CSdvorP6LQnXXGq9n17zYruGzLUmm6vM1kAf6TTLrYk3WH6d8E",
  "key21": "5KYVK4qMj23RcwLtade2251CZpwG1qEsaqzEmKJYkuR1sERjBEB6AcParaL2G7mi2yQU4iXnHNJKm2VESLCRUFBJ",
  "key22": "dAuFDe8KL1zvjP6zd7ZgnXbKxsyXshsPN4KXa8rwfyDg8aHAFWGzQz5QUGDJGPDULtecLHw8aZArKrMdqYMvK5M",
  "key23": "2ZyoyACtaKgupLvhzmiMY3dokLfzYTuEsVNLnxEmcFcVrnqHnon41gZpTrycPwNLtLoTKxS7i6o5BwSnn8fgTmYX",
  "key24": "5r9DwYPbwffUxN2aRhn4NC8ooLVUZd6N4pVT2tWiXnAy4ididDub8bJiubXrGAdYU5MJz9qatHZWwfKRoHqE2d5o"
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
