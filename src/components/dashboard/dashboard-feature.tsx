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
    "xitq48ewE9E2CCPfQGtHavPMU6RpBUq7ooMPWm6ihDPFJY5A7Mpg5wkkAPBYykq7w32RWm1styn8tmXWX6bgNhF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nURcjX2A6yo6vJtctkdwwvEorjRKBzbHQwFELLdMuamN3bYwrBcMTfxBRjkCAPCmUWBv8sEE9FQsmZeB8SawEmH",
  "key1": "4KpoZfkHFGM3g2AfPFnMhXLH45crvrEjTPCctDTeqm4qEsu15TyhoANtYTrEZh97pXWN324KCZXCihB4DmQVRfBj",
  "key2": "3VUJosuaEpN5kW4bY3Ma4kRnwskviVZCsxqEfxF9SNvWKAipuRmWzwocugKDHf7pfsSTJ6hp7rbnHaop5x2nWpmr",
  "key3": "3bU3McKrZNYNXXe5X67HpGRtvML5VmYy6Tz5rXNWucyh3RSZP3RLCy8zP8ZoFibroeZ3RiF3DjXYC7tvci6hjAMT",
  "key4": "3HdMFFWfveVyck85z9omncVoQsiZTc6vzi5tSpd6d1NUE8SDbhD2eLgjtF6ThfHVwjQ4fdzTFuqdeH5YC8V12zQp",
  "key5": "5iZWgn2uSQJJKaNsujjndd1UEHo1c2vCC83tT9Zcyj6zcjVqX3fuP5REdoGgmxw65eWpy2E9Z9TiR4MVUjWAmCfE",
  "key6": "2tPvZB3GiMuRfcbAMRkVC6X5FrgwXNrwrA9bBbRAEoLfVDuQ3e3f9SMAE1TVRaxvFQLWUiRtopzW1ZSoJ22T84Wn",
  "key7": "2uYWWp4ivZDrr5tE6MTzyvhMrYB7vJTVA3cEtaPfdqVsc6xiehXyt6h82Hyjv4BiWSXZgCRwMHgtig4qpyh2nsnM",
  "key8": "3e6AKHWGHRoMcKt5XGznoix2ugYUc51PdnWhLabPZKwURjhdKBVFQnbRmMDrcqRsQhYTWFDi3BLZSBLJwoaUrUuF",
  "key9": "pAGYaFkCsfqqadEWMFSrDnXx3y5DXezeb3jw4dqFznDt6grgn1hykMLwQAcCpwZhULc7aNoxvtKQaRZsznez1pD",
  "key10": "2teEYN6Muqq3Som36zdwX3srFLtKuywTmsWsxZmRkdci7u3k5Eaywaanmt1geqtngpveebcP96ZjSMiXvbZpS4Yx",
  "key11": "5bzshpm9GU7GG7WqAPPrzM9QdBtYwP4vDg88VAKaThRckr6R21iYejoaFoyjpjuduCJePpJAdWYhvHz24beF8Q5g",
  "key12": "5CKxKXPTm4hGVhGQyRxG5uRfBsyMRdxZ8kshwNZYvgXpWfuxQ4V8ve4mFkfKAKkoFfEQdqJzrtSqUyxiFzc7xk1t",
  "key13": "38w4DS4PDKV4fprTzbeRvkyR2VNhuqMhxxchgYpM1UiA6MSYQaaSbEMBKn1Eeg4JjmbcWY5Hoybvwa6zQgFHioqT",
  "key14": "5bRDkuYyHUipFewVWjbvhnLrcWQYmVhcgtMstiSNDjG7YHy2SVB1QdBLkrm6ATnxCyVKZss7B6xABQJByRqQewWa",
  "key15": "2MVhMsQN7njmLzydunJdkfEc3u7wosQZbPPDX8LQhyBfFd3Pq2pzKj1eS3u3yRN1tiZwSpfpGnXwieqNt3crbpJR",
  "key16": "pgZKYypsaKa1but8WEfi9zQ8qr4AkmqQEjggJD4J4fMasqZbxnBg1eK5vaZfvcjf9NbjdYy4kQSNGSNxzPwpxmn",
  "key17": "23mUyX1Lqhq4bosJZJMAoBK3zDhBAH7djdFt7mx2SXmMP7E1FEbQ2J8P4g8qsWVv9s1K9QqwsVkBA7P93bAFDL48",
  "key18": "kFxSZ4UvuwhrbzoLR7VbgVxM7Z2QJLKxnC4K235atVfPSPKDU8TswgGC8jn8Y8B8b8Hx89iSHWhwhtcudby9XCx",
  "key19": "2gKri6JBJaicYhB9LY7LH3NwVWNKEmYuVgdt5GdSTn3aHuSEWvGgcdUQ36xSNPQLHMFHaLZ5yaPFb3i2AnyE6PNg",
  "key20": "5agwdJw1Emf97DnTNXmS2WTuizUmB3w4WwygoBSawvcyETqBw2avPE8xs6oTkzn7yTT7BWtzGs8dujGinFY1BEqK",
  "key21": "4RZ4B4zEUCZE9ateska14YgxFFDFMYt2ojzTroGooB2sDZhGWEDta4JKYqvbnK43epkqwepeJAcxZ4N2JjfuD7Hf",
  "key22": "BDBHDmc26e5GnokxEfGf59zCveoRLxPcdvUcwr1NsFzrLgWooZsPwugAZf8tdi5zn1HD32G9eLv2msVE6otLHtH",
  "key23": "3w97wVguKvuAuTuMJxH8VffvXJkiuvTAqYX8U7PEHrQ3rH6SDfueYL6GJdZDaqcnr3XbSfmipaXfth8dmgApU1HT",
  "key24": "Rn4fGRqsVYEapkP71E9dQMHP7FFTkTwm7vVK8t8f5HcL5sK1qZuapzi9XyE2iD2x3DXfa6idSPxqwN8tALGV7K7",
  "key25": "5k33coAVK3x9sZuPvnxMwDNPJsbxqeCVXU9r7tB95xFyzgCAH6nhLyztnk2d1JdpX6R6tjyN8wGtSWVK8b8jcjKK"
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
