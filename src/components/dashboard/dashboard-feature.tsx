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
    "2ZR76aYiJXkBx1uuhcrDXUsjk5zDmXqxVmHtiRRqE5jdZFXqwbkyZbuaZ56X1K8jWVtA6nkrxZuS3QCaj2jCqDe2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57QUUFza8dSQn2LGGPgU3qZ5GXrfYvj4b6CDeoEG767uF7NSvSTQtTc4DpTP8EUupsp6guD8WBcHWDLRCz7VLWc2",
  "key1": "3fmR5dvY3LaL6G2AkxZNdHzJJk9jVrVqSKmHCBuGhmXrP3rFmpscbxtrM6gZwLqxWrDMfhKrNysW9fDWq6jEbT3L",
  "key2": "5kPyZvwn65X8NoJyi8GgahXXdeEWF2pgmMrkPz7cnLKd33SGS41LkbgE6uVUriww9WXY4pZ6Ag6R423W31G5qgAc",
  "key3": "322MQ4AcJ1iNgWkx5mxUKPEYjfw5XZyyzeMuShFLHdUD4gBd4wnEmbAMzjpQ77MoYkpjEvjEaer1B1JVyJ3Qj24d",
  "key4": "33KsQRTBsWzsbFsydkVunuGQR6wCKn9ukp8uPCRpNMmP9X9aZz3xUgCBBA5ChJUKMVYmU7Gi4W1TS4jaLN62ZKnh",
  "key5": "44SCCY7rpvF72o88LW6UbNBapV1RbgL3vb6Vf5kSjtahUu1kzDy5ZzAhEJrvKGBnJogMos3AtMYcmVMSMagNsJ1N",
  "key6": "p5Yf9csBQtuMbShakdSUJFMW4ZXXz3vKCuaaQKowec5oArten23WmxKzMPuGkPJWTyabjscqdLywcXzjoM4USD4",
  "key7": "3hG2MQvMK7FEJdLkie8R1Nu3bhJJtZ7wJqkZWZdW6Wrch5dLnuUTTjjQJjdJYYMiAnR2HJjeXPrm4QC9ZjfbyUwN",
  "key8": "5VaphfPqpksv3oQPfSPRLdHuG5oKnCnPdAhXPFCrSN7KYt7hESMh9uVMCKTqG2k1iAhHMa4BasoK3HAh5Si77fD1",
  "key9": "4tEgLZCYytdSsm7LMWyTaQhFnYC5cYzTjnrkciEzAEs8kDsrpCGQQT6QuQkPExczxQT6RKLtXSKh8ZUhE28p6asD",
  "key10": "GbhFUMC6jHADt42vG5TAXeJrx3xfexNimDryMiTfWKgpkWgeQ6tmPffSFsiBrxrr2LU2LAJEy78PxyY6QZh1FR4",
  "key11": "3a93PQF7B9zFEs3UWSowJ3C41uCT7zcMN68TA7ttaqE8LDHTT7od8ZurN1qrbkJz9aPiW9EHfBRPi1ttFzHhjTj3",
  "key12": "35QcJrnmV7jziDsBaQfKUvzofLBK48CsEs5aW6nPUEhSaqyKDdEm2Pqy4BviW3UuRLimvjntMPYmmAd7972ACPPo",
  "key13": "38tbms1Cv6FjgpLu7MeXJszjmNmL21JPYW4WzWWuo2ZZUT5V7xXhrb2azjowr9ja6FVg5QU9SL1irEWoy8pkANKa",
  "key14": "5293WP3gerrq2K94y34TPk8S9Wnw4K7McpcznPDbbJLX15Br9BaexHsDkQmFrLvsA95M85hDSssc7WLKAA7zrssi",
  "key15": "2qoimr5inozLK3H6Dbqqghyi4LdcR4WfzaGJ8iw5LXSrxxCNCYJz3rkia6jfrXGYesR65mztB8R3o3JGX3jL8xRU",
  "key16": "36c9Q4Grj9QCLp7Fd2951eRcTJmPsfLZucArWYLFXiRSZuS2YssgB7avHv22MxzomPJvADk7apqxACSzCQ9hb8c9",
  "key17": "3ddKeWvgonyicMzUgnmqLKPcisDG6qnwKGu3ftt93KdZgtmYXvrjh7QdTu98bDBkdoD9vD9WXe9aAgf9Hgs8E5i9",
  "key18": "DHndEfpWBWUTg6RRRJ9BtLZ9zywgjQw9yAfLL8J984ghY67FiMvwTKVjFwCcTANwLfxfeUEPuEL2hTqh3EJb1MW",
  "key19": "Mpr5xZxq6DCZW9CYpRTZ6Wz3Wrh66vSQwptytdYF1wZy65ZCWrbdHa2JA6Pn6nBq3w7Jy5kv2Zj7tdDUXCiaYLD",
  "key20": "61gLnTM6kjxmiPZhWobKSHAHB7kXmzw9A83PaD274hjRoiVchTg8o61akitY77SVnPAkKtKcTCiWEoU2o7PMibfP",
  "key21": "2YjF1ScUwckiJcQPJdiPKNRMggQGA3a9YyBDDBMqJp2Z83aUWMwhpXuMv2HJvfiTLaQqP5chddUCvxejHqr7Q2y5",
  "key22": "WLRjkCGMVwPvpNUAgH6R5F3pg7M5s36mbRSRJouJktq73EGuNWEyjb7vfgSptkFueEPQecCE85kgGLXVJVE7x5y",
  "key23": "3wdESCKBjrwwgsvxgjwJBArPw6aLh949ZQjqQPdGfrs1y8sMRnc79kswqy9i8fGWbBRBWQ28bd4wsdXoNCVF69se",
  "key24": "4CRBAZB9g1KWiZ1eCNvGadJA4dWnAxxm6dP7wmfNv5r3w65LhkYqvyVWtwwa4u1uEZnQZBWkpUgRwgBqSu88CF3M",
  "key25": "5LCb6TGh1x7UX52f6WBgiudxCczZeT3qsN71PoHMZ2tUz5un7wVSYzs7YGZrf52aHoUp2uBDBBFZc6nQpjeEtqSy",
  "key26": "2oDri7wm3Z6k8CyyAmiotgGYyQUET11KYUpcZBqYFWrbzHmE79AvuaDWKj8izGQJqX1hWvrNSAMboW72sa5jUWeK"
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
