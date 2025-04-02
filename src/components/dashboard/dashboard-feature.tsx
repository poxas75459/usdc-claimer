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
    "3oRZxpeupxQLNrp7SBRbJcwmr44nUYcvDCvTFJaXXpPcfJVnr48wWSFW1z7pbsV3bub9LWNt72o8PDUCw66pePhN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xjtEq3zSHwZKHYBPQHsEhJPMRdWybDANRV7Aqik15HnkUa5SUQ1pHSwwrngzRqh7ERgMcAeXrs15Vrwy7RFisZ2",
  "key1": "4FmZiDT7agS3M1UaFaxiXFbxgqbR9kXHVh5JYB7tXzUqPbAkYWek6rGrojsjGvF9Bp8BybzfwWxDZ2rNugwnkCXP",
  "key2": "jKh87V3sqGevNcu47bA9HEvwZ5oRaqJnaMbBbbi93oLNas8tYPFRGq5SY8byWKpAMQ4A6YGxUvAMf7PWeriewE1",
  "key3": "5jGmk8b6BEmboFZsxgAVyEx7WvzTUDkFUKxRsiLqz7tpYsr3GaJb7a7fkrbfXg1eC92bDxppWfozAw8SsuN2dx84",
  "key4": "3Lq9pWWDjL7VcX1fJDr1aDrdRiF1BLz3AquXppKju122FiLUA1JQZq3WFZL376rZHuZZPrFW2tfcyi3PMRVGCKu6",
  "key5": "aoEJvanXf4SDXdWYQbn4F4vC25NwMt2p2zBmWpV5u53VLXr4V73qTVT9hrBx4wX1QiJfEtUmibeWWtShfu8pEZC",
  "key6": "4YsH3nEY6aELbv9WWX1PS8ySz8rHgKzKsBCv3VFjsPqcAVDVC9Jiaky2x8yzLSjij7Rf2DjTz8LBHGHmnFMp1L6i",
  "key7": "2gsVKUKjQosPTPCjquzVJTj4cZkk2aiMsmSA2cpdSf5Yi9LHwsyAigWUvD2cP3WY8Ry83Jk22hbupqG2XRPTrSXE",
  "key8": "kkdaDop4tgnJeWVgNyPBNjx63w3a6HmzAajcJB1YQ6ZMmkirH43rqTmjtFhmCnsm8uNctmtCrykEKF2JUoNqo2Q",
  "key9": "EufnzZd5aMyrdxWuddoJNHfJxUdg21wfi2Z8ZZvESMTH7ZdhVVHRUtRGuCrMip4huXLkzpcWj3R378gYFhGu8P1",
  "key10": "4L1QpAk6Znzgzqquox49pBjSXZb4JpuckckqvEQCZdiD5Tk5ij77qfBjtvkZVK9hFxW94kvzbz2Eyok1bLbDSzKy",
  "key11": "2zAjkueNkrED2ubK8aM8Aqihdtye6uq5BzPZHDKwraHhKb1yhiaZeiLh3ovPZJidx3BwP2bR4qeZoBZA86X7wGot",
  "key12": "uav8KoT6QkCgomZGL9EQWaVWzWEY5TUhFjUq1VqrdtuFpKKQV8xV6e3xFBz3qwLshHnfjJiydyz1xnndRbbvykv",
  "key13": "4DQYRNKmfbwDDqryhH5yiBooVvxnHozugDxcQjnxu3beMjMT276TgG5N4B6UgbtYsocXH2XoDAsjbLpDEj8g1phN",
  "key14": "YmD6DF3kiKr3SdPs85i4PTkUz66SUMSeNurd4jygm3cDgvHP6LyrMzybJrogsoRAqdrMouPUyo6jdoQFHVES2rr",
  "key15": "494JQ9yy2FGWtDq5PVH3VeC6vHMmruMk3RsUn3u46UFyDjkdiEhV2vTYRKwQh1wADWdxr4qu2aeCgNxHftpBaNSx",
  "key16": "5pGhCrvv6KHTHoFS5ufVr3NVrVdzLyd8ga7zHQNY5BXSTfGVRgWuJbZHGHNs5CFiib9EG7Eu4UBocdz8VhdSyCc5",
  "key17": "5kYva7Ax2qFYcBQS6ciTxoQ8aQmLxWedNAmCecGw2p8MJrCRJuuf8D1VZvCBfrjRrc51C1pdq4o2a4K9a1XCcWq",
  "key18": "2qrZaUfG8wwB3mVw8SUHnBhFX8vixRehQ2Bk1mdfW2tgSLrQuZMdw92QPCfA84sYsBs9Fm9m7FBiSjmD2GXU9gcJ",
  "key19": "3C1rhJJduBj5yznxvuesskXqbyFo1ppJkc9uPH2nWFpeFi7YrhLCLossCDZ8K5aZvEibSRBMvULXC7a6qxHvc7Ko",
  "key20": "59EFxFVaaXBELJ2TJdkBe84nN2DCg2b9XocsHDsRcr1jDWdWSozSJEvLHx4iBtv97hawfVCpiKhhY92g1t5jgN2W",
  "key21": "2xZs6cs9zS2fj2uhXBJPKZERPuq7q1KYHodPReBFc4TKoSrrFSR7Am4aSJ9Xv3LJVPEGBYrNUxc3iYJmG3rGERsU",
  "key22": "4S8yNNCtHWr9ZXymVmDVtKxdpmW4iFKjMbRmbFfEqdkbPvTWk6oBDweotTcUkysTPgLAQm3KXnAFqdRaB7Ax6sVS",
  "key23": "3TyT7iNB25C4kv7DNQnBCzWK55hpWnCZDbMrVxayDA76y6i985Re75qm4WipGbFrfdq9Evgve5NrBWNmcEHsfZqs",
  "key24": "2RjVN3V9qXQmqPJTNxYCVwGwXuc8Fwvkg861gTZHtp879HXUGMUhRiy3jCWU2f5wqQv6mqAhugmtHiyyfhm2GGbV",
  "key25": "3gEKuogUyVfsX2UF18gv1fbeu5YwhGWUmD1iWycEvsDwUb7oew4zaZWSTuGR5T9wwSndaAVNPQxMUmjWeANiS3Km"
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
