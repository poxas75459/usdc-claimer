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
    "3G6q4u6GNWQhfd6PxQTgVg57VcSUEQS7sDypyckDLosKZ93L9VeHbPdBToXnnxbyG1WVKxNLnjJZqH9TDKqkyb8S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57DoxJwjfNncrBvk25QcCScHKs6JrMrzCShKv1pmbWr7yvoSVXCUjFmeSst61KocLcd2UHDQFXyGwChDRKqfJivo",
  "key1": "cfqtHAeUCNeNPeuBwpnRpJCB5FfJ9Ct6uwLR1rkuHDGC15jWwocmUo7gvnRmkPvydUvszbSN9ZcviamqBYiNHWn",
  "key2": "5BcE1RKfYdGLpwgxi4a7wtCfZu8m6VienVsyodQmmLsnr7PbA5xyFgUkCs75QMxsjQmPQupMGBnxFEuaopzR5PJH",
  "key3": "5NKf3VsMdKCsDZiEPFQxE8mDds5jkCeMSew4n8hiNUu4cCwnCe9uhN6hr6pCZZhVXdqT6fXH94L5ur5ngUHu28UB",
  "key4": "YdzV1AcJKcT8vGZ1zMqGrrp13hs9Ss8t1JsvguqoDZiGVtgu6RuEDz5mjRmttLwg8RvZXPnKQKjb89C7wUh8gxo",
  "key5": "5TbaxTxAZtrX3L5rLBfhmE13XYVojLqmXTXwsKqcxvwVAPHDmhowJNWPtCMqZjHapfWy7i3VeGPFQm6iaNPXtNEX",
  "key6": "3o6dC9AauFDYzkPXg4TRD2T63jPg9SAnTa3dkf7NVrpBK8xeNyAd6Me7dJQx3xLr8aV6LxSpJf9G2zU1YLnisrXe",
  "key7": "5dFfwMAK7RPUXB5FY92BsQh66KpMyxyi3rfMZ5my1ahcrnchAVvc2zSiuR3JCt6RV9Ttbn9tcyV17xaqNfXKZ7Fv",
  "key8": "4rN44RHrVq8vYNPEyyf7kVJXYsXd77Z6ck5sciHt6daHAa9USZLRBVT1WpAGFykYDx1BD2kDg3m1kaJVb3T12FHc",
  "key9": "3D68ea2bKW8VB19Qu7NxE8zKfkQ4jkYtYjbhJ91cF41aETpjBeFvWnn2oxNKR6uLAfXaqQUciJSWcuawJpvVykPc",
  "key10": "4GxGArfeNBtL8rbsUE7fPJetJMpgvzDBqPtWBWFZrCgnNe1tpq8CLy4Qqo15jmfYJTwvdRECV3DTGT8m6TyZ5L43",
  "key11": "VjUnqfefiuBgWXH4vLS34vrnrv34HmpewzHb3XvyDPgS9WifY1ZS3ZYqsYho3n8G21JGVteps6scemZiBX9qEHU",
  "key12": "3M5pR6VXC1qftyRmgCruxAXH7MJu4wHHUCv31xMi3Pg1doxXJWGbN9tZr4JztjMxhbBbhwaDx8QtEyu2nifEftqq",
  "key13": "26cTGqUp12eeSbN9cMdM8BaDHZZnt6iXcsDSTmd82KHTNsJFr7ZqShKfQeZwZXAiRPLoqJXTxBsdNZMq5sUQhipk",
  "key14": "2GQMEYi7d8A1z9utpCYr3525MQQUJcg22nGV1G6F3Xe3Z8xUHxVWFGe79qKZ4n75pQDwByqrmyEeNixruLG5mBhY",
  "key15": "3Ge88Ndnq7hKS54PMUqvPMxs2AUayZu848LZ1qdNvma2iL9AiJ84aVfYyUf4WmMHgG5dTzy55oxh8mKbThL82x2i",
  "key16": "5ZaGiYBFVUs2J2cWE9KknRGfrPVx4zN4hpigwGBe3tGrPVs12WbfsaAy8y1Dcu4tKo7aVXqsz3bnZNJnLorWbwy6",
  "key17": "4hDXAern5X6im9u94dAvfVVFxJAmKkvBtSw1WD31nUKk1Z9w21ZTBpPzK1fmrWTgP8D8PLVwFs9EbMNyPz9CuCe8",
  "key18": "3TmFZJW3kRLhck1yEfUdKwyA5YadkV1GaV6ZMXATahRGctxLhwkU2X3J1nVHYRwiu5RMEmYSfKKu9jW8nGHcT2SF",
  "key19": "66ZB3NJw2P4E2axqzqRGTVrbdLh5pJyWivbmdb5DHzxmPw24Y5tVJMmyvvfF6Jnw89u5UxEyjy7sthrcuuT3isCM",
  "key20": "5XaFTGAiQ5zJFVU58fq45aWn422KKb6FpnwR8PhQSCUtJcSbLeCX38Zu4HwrRG1tARur3HZjHXQ7o2W9YX6LGp6D",
  "key21": "43b3kyz7bCC85qQVx8xFi1t6PUKbTih9FU8ZfQzuL2R95LScASfRkq1nskKKK26oyqnqVucmUDfifuajwvWZ1ukM",
  "key22": "m94EGyT6aB9SAXKaNAnVjfHRbP3XxrZj2vzyTxU6a3sSCKYshePjiGVKBYebUACq3qgCzqsGvHgCK8WFsh5s7EZ",
  "key23": "2jpi4gnt6MRCSuN9ELR1ko8SG4BjUhN65g3NYLDM9CN7NEGbsCrnTEbagQLtE3E2SSY8ENQ2PraJNfhtzVcttTYg",
  "key24": "62d8E8Xgxz8x45vAPkrwepur26LQsZBPsS2aTU7EJk9wfLr6t73UFhBdkD4nnVbk96LivcpNt287oErf7WN2Zatr",
  "key25": "5CFdzHRgSMRxVEwxQ1p8STe9b73LfteeKAyrKvUHgPYfwUvFxvMPK3hnHd248VRQgspDpK4iVPUAx39GzuRgYF7x"
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
