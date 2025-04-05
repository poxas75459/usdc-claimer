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
    "5MVQzfJ6BW7SqdvcToEQSjMhQriosHAXdpLcPvEDzwe8FRd5ozzpaaCsTLrMvuhGptFDSq9KPAPU7xLMECWxxzHV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eNC1iEQk8aB9iQoyxJYqt1h19mo32juuq7dUzgf5iVwmjfs7eXc5HWCbM7osBL1mbVq8WMCRpkBENpkEcGDLPVD",
  "key1": "51xYjUfgLAKNkztheHQcAqq2TkFEMjYBpTg9aDvz8wwnKW679egAiUGJ81sNnnbPxRt4GiF4XWL7zrR2o6y9Amgk",
  "key2": "aZswJHzGUspUuczYjbtweyXYSMeTL453SmGJ1C5brHpB3Tx729f1q8jMw7W7bZqgQoKdJd6X3ajZza4gzn23Nd4",
  "key3": "3LkkkXWN3CFGyp4zJZop2nexU7tPMe99REkwHWwFwLwAYezB9txYe25vN9WUCMbNw2YCWX3sTnCUz47wiQkU53pZ",
  "key4": "3opdndN5gH2VCFv7AEcNuNwXzECL8CkzPU8CZQ1H2FhhzrbP7sjHgTE6bx9dN9JzbSWTJD8dfdLAjCb9QPYgPuez",
  "key5": "3k95EjkGJLokH43HzS1aBo7b1FnRKTLnnMuM49WqxnvFzddLUKVxjt6CoXaafA2vxVq3L4wEw7PdUWBEEKi4bGDw",
  "key6": "5rnafDN6Sfd8Y3UuDTqwve8ivepfDi1EKkV3whbBUbJtbP5atNZvYyEc24Kn6jDynKEe76jSBqCpaDC1PmiYkBum",
  "key7": "3b3SS8dQdq6n7W3iqGEn5iaN7gtC71dqjKYk8LKnHqc87eoCgcvSDbuXEufMHF1Zm3udoQDS6bXuHwKwcnr76a4g",
  "key8": "4HUEmNNWAMDgoDPkrUFthDJmvaoVhs4EvSMKYtXJ2Bv9finJsyCAhWVKJuqg434yZkhE9JjMMSZuwPCWonjyPULg",
  "key9": "HjsWe4bAiD7GeENDsSxpUDq2i5KHgeogjRRvMhTHSxGR74om2dug83QDfiT9AGmHgUD57sNMt8A6AyTMzMAdrMN",
  "key10": "4jVNd7AHaC3kxZFJ1DKH6h1EuhNhU6QKTX7vTpFeyb8uS9BnpfiiqXqbDNdmP6sbRRcTVMadx3qukQQRoS267saJ",
  "key11": "3oSwHMZy43yW8qWEETqxPgp6dUxA8ArnTcvgrTY66BSGGv17UhgJ4mw5t39FEoQ3tt4DEEWGGPN4hz3jH62x1SwK",
  "key12": "3kSH2sXKCXum31Ys168R9cDM8Gi83v5ytccGrQLZkpDNB7Drhw2ELHduVTty14FQ6rgMCmeYYC2Fe17nTAXYRrCD",
  "key13": "4s8V1LBYWC1uQdMCPzuE9XXjWcJWfSeT2WbsqQJpRwX8vFpfex3kBinwmqShP6qEv62nemmBpbYC88wQ8GSGr2Ai",
  "key14": "4kMhZuxWxrqwVVyBQxZr5zX6GXYtdpmspJCqnr97j218Rgv6FEAL2QSW4MeBSdJwVzzYLXfiBmHskCXtiPNuuupP",
  "key15": "g1gpoLGdVZStn9j1Prhtvzu2s9dmM1nCgQ3PVd1CZeQPsDKwawZX4QoPgm5xVcGVEUF5krtk3PmeK2w8AKQNRer",
  "key16": "4wY5gNZyV8ggBwwksfSsQEAd7cYZ3xuTUwAb9YMWHheRtExHShPQ5Z9nQYxZHJSnKv68eNhHbxnn17DDFiKCM6VZ",
  "key17": "jWYFzxXs4aWuTNCt6r2H297BT4pAsgkQbWEGGiFwrqWNqpMASg9UeY321YmkwcgBbU3qfbLEgpxeRYojGcRLKaW",
  "key18": "4Yek3CH4KDWh3icMJ9RoKgFjAGUzMRCdCvsQBH4Md7j1fF5L1uGdF6tcaQjFKK4oA2khmAGgSWCZAHRmA6xgkc9T",
  "key19": "3AeWW8zhgQ6qt5aifkYxf6mX2BJEaVshWbP9AiUWQyZdw9jLGRZGr9v5CmFxqbHXukapWXzVB42XS43FVvmup3Bc",
  "key20": "4wPai7jz7CQpvqN1jtEXyahecDf13VLYV1zdZYfo49tsmJDaPfbt4B7fdpLRD25c5NjsxjbxG2QdwkvFUMQvWpDg",
  "key21": "5pvUqhWAGFyswLRcETSX77d9kfSHDzaVfaBWQjxm33ocV6hyrWYnPJRw6JADiKcxstcw9EzL3tqm1NwZcryMe8Ps",
  "key22": "2ZT85Nqv2QmZaEcMaZm6996CZYQkpHtwp981FZ8YzwbWr6QnXq2WsuvCsVJ1UD4ikeYhEvcPTG61z8Dg9iq6hJTY",
  "key23": "2PGSo6wkFXpbnMXAMwSZQwyUhTpR7ver86BBQww7Dwj9Z4ZqMGEh7ZoGiv9dQjPekN9XmSisGMxUB5xPjDao9V46",
  "key24": "4xDC5BNbK5wqQBN3Tp8w7S56DhVrbnt1dcdgfEqt3rPR8L311w7RA3FVCWS4XxTgQnBSF1ms3YntKjkR2XGm2PX4",
  "key25": "4iaegHF6H3QM3qNTKRPeYkwyM3FJovwS674wQDXtjRRwtna5WJ2Mpa2JEuRinMobGZRhox1TdesZzS2aXCkUyMoD",
  "key26": "jAEVWLjLWNEzvnjZY6RTs193d7MBo75NWh516p6PG3ThmwJSk716Ni8TNjLwYpFJ7H3fKtVgHsLSdCZxGGD7Npg",
  "key27": "3iviPoJVru2UpKyD8yBMqGiH54imDgZJAc5WfydsbiA8QG9xKAcYLKg8hB1ttY3nmU4x8pL9ANn1krNw2d6PghG4",
  "key28": "2Btm1dDXZBtEQ4X9zBUJdMAJ9ytZMnXoYFkKat3sQ2UW1QPV8ALNXKv7qPfcCq2SwbtaDufe2iwEPm2SfGPaPdVa",
  "key29": "248w8sEBNhVwJ8ztpAFJYwPEcmT7ezrcBPtrZkfjpKnuKi5fGREa32fSsyQiDQbTiF1wVP4iZSSS3eT9bZ1xb5CH",
  "key30": "PRp1SJsQZSYHbwPPtrdMkzW6MqgfhU3qiZKcX5XpcJg16okL2wk225BN9AJmD4A977xLUEhJHt2NLBk5QavRC2t",
  "key31": "2fDU9zHbGAWXmufX2H2Qt5gPJZo6Q9ReFTuDCRLCvFeUe8NQ8xLRNxtMzrnUrsdeVsRqzj8nuMFqzFbRmhgjrTKJ",
  "key32": "2T17KLnonArcyGt3fT7FUbcJRDXSNqU19dCuHPCPehG5jGKyodhjvj2PGZZyCbddSzoNY7D1HUdzeujM61nNbgnh",
  "key33": "3Bo1bwwnkNUVPms4uZXBkx2Mh3Zveyhu5uGAr18udeDq1P4mMxUYJVqfKHxy4WRUzjiwTiXrWnUo7PeHYAiQimF2",
  "key34": "4izUBgYmDy5FJtB12kPetdo4t7MpU1RkmK2uK6yGs5wX6z9CZuoHGAnAwiejgehqSFoPVXdJPFgzG2zoue9dE5Yv",
  "key35": "3s9TkkQnL47T1D9DmeXtYTyDZSz9wNKRgCfSwXmERKgxckoakXPx9dqfv4gr8xFHouYuQTg9PeMnJkoAfJQRuhoz",
  "key36": "4gEmTxbUadcE9sLaNeVC8dccnbGDmm6yjyXMbY4vWV1rkJj1Ae6CNAeCxnWWFtd8nJwAErcWPQWXXj3pK3MoCRJ2",
  "key37": "5Ab2KNXvMzK516c5LVFkc4rpwBFf9CfhypbXeT9cap1LaM9TVXXdrZwqr5jzZ55HjXSuVEKHpzTmTKJ8wDeSArfU",
  "key38": "RBhSwviKd8aCGGFQVMwLpWeXsSFyJPhapJGDCBRwvjBkeYUg8PWHRhxi6E48aF5nCmgGp4GxiuXSXq8U5mAcUVv"
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
