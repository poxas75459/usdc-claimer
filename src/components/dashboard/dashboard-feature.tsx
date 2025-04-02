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
    "5V8x2BCCGZmRp5bf2mB5GzscDgaawrjrEFexNvF7ZVJFjTKeY6XUp5uvYBJ4nrbLHNamwaKdr4S8B7KS5Z89ZJMH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CjqPagCHyYbbQ4fxUnQt9wseAQoxFaG1mBazYaGo2epnVKWUCjPL3HeNig6Aer9zNwTErLNzv9GxM9QCZE31ZjR",
  "key1": "28ZDpf3fo8u14bRvjAFtop2yxPAXUd6Ku1PjavdRk1kSkdaqEnnEC7Mfr3UneqT2gi8W3aBYDW8WX6kpp16Tsson",
  "key2": "2hnvk1VratBtHh9qZHSwvQ8tW9b4ck9sGvybsbJ3yaVuNUcHXVUgEDA4gZjBJ5trkyKCffwSnj7ichbY1QF5k5cS",
  "key3": "41WfbtLB7Vcn9Gq7He4xgcBrrRdvxBVu8Uj7farDFnwxNoJp7zhhC7X5L9QvfYRPwBtgZwp4c5dZGrArYbmeWwuy",
  "key4": "5r9UUkASpPvWTLhwqJ5K68Upybpgp3mdeVLbGm2qRj7mMrh8EJJfeZ4RNbkJhhtn9pXMz4rPAaQJrkatcmmzfdzS",
  "key5": "5fTKVvHTv7hw3KUJNEqsHPgQqG3SSbusEAk1VRHZp11cNN11pdJRTusoJLW2yYzAQrFsPwTsYnzYiMXByT4xuSVo",
  "key6": "461fRvgzTjgx8hB3Tru1ghxjTZM293wgmKP7s3ziye6aGK8FAtRBEEKDXuMt7546r96om8LXZPjXWyhnE3TL5J6j",
  "key7": "3QjxQUQL8ntZsu4d7NoQt73RKybbNDuikZnf8mtJTjLxmFxTTcSFqq2xG4D65LHgH73Gaj8vB31QRTRocNYknPEy",
  "key8": "4JrMAHh5AoEKWvaxeBLN9JB1wrCy3a3tN6umVubD9G2ZXkqYZqFBKZC1R8GGRVbCJNbfwUtFeQaCAqyHujJKvNgm",
  "key9": "2VbGm8xzfep5uWqzt8trtkY5AL6N918Uz7bDBwh5w2LgR5WjUTinmQT1Jgm6knVVCeBG4K3eFhipHXnB8WdzZpaD",
  "key10": "2DPrf7q6hSNovBu6wzQsR46qhWw76Wda7MtgSzUzwkDSKsBbp6wkg1JtxKPgo1XTRmD46P5BH9GaPfJzR41mLKhW",
  "key11": "5FW5BMLdsXHs3DbjVxAmPtYhLEzWimBK7tDSicHPPHLFGDdewiiT55mrWKhSyTMgbMs6NuJ5Ts78gowNMhPMmtoR",
  "key12": "3XZCj1W1bhiCbb6DjGKQNTSMtSrjWCh3Zc4jferzR7LQvJJNbbYK8KkBtQhE4HXiXT5qCnTDSmPZyepJtj5PEAXH",
  "key13": "2jP4veaw8fAUC2eDtnBmQAMMg8gBdnLBytYPpGi1rnQA9E4PYgoWKBUSjjz9meGRvLupsSVRA7jQggTDvp469pWv",
  "key14": "5bbDcMXGTCw3CDLvmNnMSxtkrrvKgttHB7mUcGwTajjuDkYeBxD1RMxXaGfkPMMg54M12DVtbuaF3uGm2JMiGvky",
  "key15": "22PoYka7Q3JggzRgg7zkv5Gp4aZto9GgeseANWYEGfiNrsE9XXh9jkWdQFP4ggAU8BXrcLFddkWeHa1byn3CakMV",
  "key16": "5u97xGKwFbqhypsU7MLbCdG1yn9MTUmqS6fehcmvuGgmPvona9dLFhc3vS9DTzoj6W4kuzvq5sVKJXKCG8JyDUtM",
  "key17": "E6znbRXL3bkcjSALKn9hB4fpQ42qMDet9W7zEzkDeFsP5Bfc9BBEF6pWjkYT3XeXVizqyaSjyjiBq1xrcqqqn6W",
  "key18": "3KR8d9UJ8L2LqNAF1QmCmSRUniGAgFaKtcWFcdti1c6UEP36f8Qj8eL1qcU62P5MFKdKEMArFHDeD9oeWj4HyMc6",
  "key19": "5akUmGTMKX8vRtX2ifmjVouA6g5D8sPZHpPW3KzdGXnq2z1WUVRK5hSQdq3oMqt6YWHMzGYo1VTs8bdrFQHUveYF",
  "key20": "37ByDWYJEpK2JYJd8dami3u6vrTvaiRFihDWgcrXBJ5P5yycQNACoCvZ6MsyRbcHbe4bwTmiyNNPBoyep9gb2MxW",
  "key21": "3mi2oAdqRPQ4JGXvTR48b6am7Y56U7S3durt9KPFBiWT5F3cB1CUt1kRoZmvkGwysq3jaTUzDXePPsypGbVe55Xc",
  "key22": "3tmkgDosdFQKo7WSrGggScXHmPKLaGftx2UMqKdFgAebV613pNR8yZMN8ZxhFtL9QektPohowi9eRiY3aZAmGkDR",
  "key23": "2zJSg3pre9cn9fFThqyNcvZEqLpuwm1HACos89D3oFVDjeCPZg4tSSMt4T2VaDykDpzCRVCrw9bWmvpf3fTeJwub",
  "key24": "3FS1shsJPPhhhfGhyAgK2zc3pFq7SAbkac1qEmXEDCsRasAoFQJRo9xXnrdeD4RQJ1C5AjKPwsXS4nAg848Ra2RR",
  "key25": "4PzJYqaZq9kBHYdYVAQtoxCo7LwtXgfTwYmXWF73PLSCtm5XiUzRuRUd9okAfaE6ES8XUN8SwjapoMnnx6rAwid6",
  "key26": "3ZZh1zBGG7VtodMco4yptHXA6Ag6vVi2pgDGweyHYV2ZpGkamXsNX1D43FSPHHQaryxesjghpiqdMoYHypHwDJEW",
  "key27": "2CRGecoi8wt5p4j6ooc4ToERPCUfyhAcKqAFr9oybtoi7V14Neb9bvxKAbyJUxHFWxwuq4oRUuohzYxTjFScEKXA"
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
