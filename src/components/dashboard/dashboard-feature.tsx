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
    "5YpQEkX9bDSsBXMFp1KNyMTJjgQcC9yaQKV3prYqVMDQzLhdv8zpANFx2ChaXsYrD8mCUx3XtbhWY8BQisK6k6E2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LLtXmsp9qKdJEahv2yyUEP2fWuxcSccxcwEGgsnpJCTmw1QcoMvrcK5tKrRtbfekAzQ8ULGgdQfdSZWSd1AsQbC",
  "key1": "4RWa9Tgr7VGb3AAzmDB4CDfJJcisRT2nTenoNQJe6cgiTaW75i54vboSxPofZkVeKi9HNUU1EHaQpSZRofsYST7g",
  "key2": "2YRFnEvVfAP158AQnYdZBfgMttDA72PeBcYZQdcNJ9iXRGvFr8JkApLqeWgVLtvaqUGW1LteEidzxvEFETUbCi5L",
  "key3": "5xiYH45GHk3rxNPHtSRJV2C3F52fAZMf2uaUZArHWXw6YBESn259CadKMypzpaSy37Q8B7bhZGgzpkyDP8XkiT1a",
  "key4": "23mwFmX2TGHhFxtJDgBs4GodH6YWQnrzxLdu52H7nyB9idywfBF31GrwTSuhxqCYcm37itp3fX5ngm7vCFJQFyAN",
  "key5": "5zasJe7BjQ4J1mfCqoYudYD73rntBHTGcnMcm1VfCYaXDy476DjQExEBD4fTTaZYjbmF2cQrSh2jiX9J7cqtsKcN",
  "key6": "5nbv1Lkf4fDpbC8B23nVLhEP9paMeT3XNDCJyCteaWR5MjQhVgk5q1rPcdTyBcTAFQu8H6G9baD4ABeiJYzRtG88",
  "key7": "fDTWDGB7dryKwoXbTXrpZJDq9H83Bum7S9kyXjj5orjdYNRu1PqeETv4GUQiSWufRUD2NCyCvV8ScS3gJxFSCMV",
  "key8": "4bst7hV9SvXUBEtWKoSNGCckfhZApfshB7B8McXq1e66gpM3h9HDxwvDJVCPNTKdasWAuEiJcWN78dctbcW8Thh3",
  "key9": "4UG83spGaX1g51uWNKGB4Yd5WhTD94of3RwCKFPB4C4mY4rZhFLVXf4mHc4XMCW4j1KbsHX79y2MY6fAd8Y7YXc9",
  "key10": "5Hyu4WbzNieC41mpof9D1u6SKxK24YbJQXfvofkAURcddJ2VCNoCr7CEEvG1nJmrmuoeRJKS2MXYtUqsBLP9TJAr",
  "key11": "4B6xCt7mbXmMGSLcbvDUYKUc1gwPZGbhUCyEtKgL1YCQ2A9ncfZR89wYbUF9cjj5DEabMxrcXHQdVCVeEoxPEbYu",
  "key12": "4tfk36tpiPeDj9Nc4mfE9jRFAz2jtJpBHpcZwzrph42QxvAMvV2o8kMd24gK2WGEtHT9fEmF966a81WPQDWL8hdN",
  "key13": "2XfJVD2vPboxnspZwtdjDDPktUa3vJqa4GZ25e1sJ5DDwUX91vH25oeNhgBQ1ir7o3yPCPgxt5jtbvYm73jdqr6q",
  "key14": "5fN1oBoeTx8mFLw4HUcmA86iL3UoEuQVu9HcRhFKkjYCj8ojErqhBZw1UX2tTS6VAhe11DpbD5kZQLCpZ1Lzu8gi",
  "key15": "59b7xkvGq7HubtGTBrubCUzNy1Kie54RvigNJK7MrCKmy1fZVqZJ1kWvom2EZ3QjH2XYA9fF6t2anW62kgGZKFc",
  "key16": "LQbBg4F8S4fnbL4zh1NW7nAPY3QiBP2pDBf3fRppBUwjyjLYRanh25tfoAjyJdinUjQRubz4J3mAvdrTgKgFqyH",
  "key17": "5uWEXbGVW3PHC1zxSfZTEt8KbK1YnbqeeN6y4T6kCLPHW4xfSuwdrNe7BuTr7WKpSw6trrDrwYn39Wz7A6nV8TzB",
  "key18": "3VSpVo2nr6uqpfRU7wBxNukm4BHGNR8d3eJs9Dud4ztqzVSW44WNTrKDjmRcG1R8zCqEg2xouRLMbHnR9WvFpRCy",
  "key19": "h7Hq3KJPqAGPGy73TuudCn3qHPU9PfRsKDhGbt9221aq2iSWb851JB1nncjEG3hY1doUp4rgRJiy1FhF2v9THK8",
  "key20": "3SyP4L9zXjw4PxJQjMqosCv2GLpuqxwgoAhr6xJke2PESvzfG6bQ94yGcB3SbGQgLZFs1WyZY2yk3M77gWme36og",
  "key21": "3EwC2zihZa8oX8SSZPju4pyxryxR8XmNivxnQpXEB3LS4Uu21XDhub7kQNbMSDjoWzTG9hyDShUR16gX5AFcBqwR",
  "key22": "5Kv7Anh9kuG5GXVdUtG92UG8H4WiN9NngTyVoEnE3UTr7j76HBLXwXzyrAmCE8Rb6vBkZzoz5bG4meXytnY2HxrP",
  "key23": "43QFj4jmvAQV639iXRNfVAmg19QTFGVg3RMwkYVbffRaAWi6fP7avMxSCnVjhTUWe1cotEerz1qrkf9uvbLHapCw",
  "key24": "5r77526JVLabjnhhiCxy6Bvcf24wq3Xxx3nsWS2taUY5q9uSmjC9masT966DLzaD9D4kGgYJK4erM44Z7aNWe6d6",
  "key25": "21pTDVcN6LXwHjhiw5kAEgLU79YCFQMxT6LMRk8uCRKinzTCepU5h22godLMDB1tYddUcN6BDynt4H7mRoPVGNBQ",
  "key26": "5EiMqQMYh1AtmtwWb5915HRt6gZyFmkwGqpYjJi8H53CyLt62S9eHsNQe1tkLg8GRk8925n57KMdynFamTQNmbrS",
  "key27": "2FuQDaoFnM3y1NFwmZMXTRhzyz2eZge4Q9AvaghC3Vzzgn21DcJdVwVqKiRyLk94hguaYDKQozuRtRHuSF56EnNU",
  "key28": "r95qELpefemUkiHKCRT4oDLPLewXatEbBBWzyUoDas45JZNEbn8if8S5NT4BN91vC36cecpVFhWhH5Ksw4acdgb",
  "key29": "xZHamCxbJcYG76Kpe9JKRDaBBBJwFUiQSuaewt88fTqSzeNLVrSRSgB9S5m4xfkncyKcZusmMnd4Ebc4j43JjBQ",
  "key30": "YSb43HhQYuB8rMmXhoAcKnzhsMdSShMZLmLdbfrapTJKJpe4QBgjmMHTJC2sdn4PzLqqC2Q4HrbBkye7u1EXHaG",
  "key31": "4brbUNGbjXAkkB1cZtytAnopMjgkkhkk2PQLYJkgMKVsRXSDnLKRnX4mYuxcsQhNfynM8MhNbwHygQpiWiyeU13s",
  "key32": "3dn19beHX15Ma1H6knteGLpebe15HjRWfkAgVxqskKPrUWeyhP82GtX2gJ4puE2bby4Y1XfgoxAgVKmRGsW2rq23",
  "key33": "22upvxAxsGbDT5nVbRD53swpUSYmRrAh2A7QsjytsPARoeQB1tLvymmsUoAELjJ8h3er2kkzfNAZghs34MLhh1zW",
  "key34": "3qVnZwGQFpARYf8Nwvu1u9tHPDCzDTHAFu8ziocYftiD13cdJuzgordo7HBMVKyDbX6XPLxXJpk5U6RhLAU51LAF"
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
