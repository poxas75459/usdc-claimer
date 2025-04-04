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
    "3QGiaz9m1o7iU27xFEpMPqEbQQ8MFpRmhx4s26SoujuDJ5yG1KV3s32ci3cHPE9PmiDKpGDeB3FgWpPW2PD2soZF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8aggAxKjmH2dSHGgRzyQAG75kYUnJq1HqLMGNUtA5k8wZaPB3iav3SP5gpEPuSkkFoB9RHLvuLXqUe8d6xmCib1",
  "key1": "61DPvstZoi3b3sPLGMWFtD4dzFNUWteVfBMd6uGb4MAZu6RJcgkYK2jaChAvRDpR6s3gmNWiMxc9f4WExUcYvYFf",
  "key2": "3jWRzHXJjwLWx5sn9ubyWVTgX5A5yyRC4G89iFX79oX3URX16NjSrWebocD2ohRVz2rqsCt15iFS7kkZne6mrb8m",
  "key3": "39LjWJuVgdKHT6QySrjRTTaTjRNftmLxZVwBDkjHsEr25b3xprzqQKz9jFmYiLGe2GuuyRaeT9h1vk75e1GLpMDj",
  "key4": "3yc64w8WAdqsw49XrEYuVxSBFM8APMYkz71ZXrBmVjMzESrDu83ZQXKULtPtWC4YaGajeTDVEBTt37pPwWHd1Koj",
  "key5": "37ZdnUxVbAdWxgZS623QdBf4xFJcYEghMMs55es4JgR2LHv3UhhpQsibx4guacvb1v9NPJ7r2kwP1bSERuEGx1Gm",
  "key6": "65qtzkDjfyfHd4CN7qTUMbpUBfFLexcJVWSCUt1sEXdS5nxTjRLbacwz234hdwARxgDWmyuG1eyWN7sMd6eML8y8",
  "key7": "4Uh7LmNMsXQkbpKxebZJAGWPDTD1SQRdC27akQECyh9M3FFvcQbiMJy7wrPdxepKoHbExgQNqLZ8uy1gawCWxuZJ",
  "key8": "3iX6WRRPg8CPHe7KdicHGMc8K53udafQCjrm4F49z2y8RiSQa51pETmiaTj1usVfGojPM2LTduFYeW7fkw6QPUM",
  "key9": "4g8W3RAJMPFkhCKRj17zCoWoi7Bj7NGJfKniTaMP5KVVzTYbxcjYqpfoVNe798i7JzoGcpw5qRSLYPeF6uNc4VY8",
  "key10": "4sw9FtEfhB3VjfTyKKPJmWrWwVPZn1XJ6iUjbVHMQEf5rK3oMmUdDQ6yWc8pzzw5ZDCfaEqXgD9G3eNWgD5DcDTS",
  "key11": "w98KfD7hKiGUdnrM9n3WUBV2RniBAFfibEEaqRD9tyEtZuJEPGmxRqjFP1cPzsLpysayXvTL5UoNct3diqJPszT",
  "key12": "5xu5eERyVec7Ada3Csfjv6Xfv3Nrg6Wd8uwnfSRc3fiAwiiyFPCkvpL1Kbwej2Gehs7J8AZA17g6fyTgZNcyLyaR",
  "key13": "7wDJLmQ2mYYDozRb5bXfs1hnQ8L93ZbqkhDjkStnwWiQcH7zvQ4Jfq8XJvprzkQLB3VVV2ZZFAMHe4Uq2fWNFPb",
  "key14": "2ZecgQ2skAvr4DvKtwHrxmJTvMZK8ipMveihi8B2whjSWpxrDgxZHf4QeqkAzoVvx4QGdFBRog7xxV49FpTXQLq9",
  "key15": "24LRVtYD1T8XCwiFKCbtGwqBmxV3iZ3ZAT7QXcipEy3cNgUh9ZVHGaFWvYeNprYUx2RRNqnsJw43NktbaA7q2kZA",
  "key16": "HzAa5qi7NLLd6xs8BPHm7b2Cftm8sZssmtqnRBRhB5GxCVCnpiayv4XoBo1M5k2wR2Ux98jBtC4XgDu2sreaUYU",
  "key17": "3NMcB6G8mHJVjTbZcMsyHxEz9pbXyk6CaWp1cB1kMMPf5jYtM3TbTmuXAYKBZBSMrLKrcaYtquk3hnH8yi9YdZQp",
  "key18": "5mmJVDdVZs3ixMeB43KcdTSDriMxakxsy1NMA8Cus1D8hj6b4JJnHMvP82Zc3Mqzsa1REbaT6LwvvE9izQLBw59W",
  "key19": "56pb4B7knajopLhb9gMwbGZxvCBEqoDmvKcRtTRZYeryG2CaQoxZKA1XPfqdaJTxMYTBwScuhs8uPMADircLd5vr",
  "key20": "4iR1ixqsQWE7XfGDASLgKBdoVmCqkg8kAZVcSsyL1r7YGAVb6FbVo6dy11uqhCyDCGVd9CKdetckVMyRnqPSKAhz",
  "key21": "gnTT1dEGgxD6fkEvZSaVNRqSrpLmMTBJiwspy92RaDRLanR4rc7qTH5p7aT4NB64xaMkbDWiJJo1PcTC6NXwW7H",
  "key22": "38AcaJ5qsW8jvhobeTdxKU8WA3s2oaZoYC4dpisTprnoXg6MnT9nrBfAn6G1AZSUJPmK16Hu2sXjYJYjTNkE4QhW",
  "key23": "9cP5uhsJv3WQBJ1MLfssMBNi2ec7YxpRLtHPUu4Nj9qbyNzX62YHszR48L5wAgNawjKZHWKJctkyDZmuAb4ahYu",
  "key24": "4xn7CoCnb4oXiahyJLjpdMySHqE2ZJqCa3EpfQe4irQi6VGamp4AqcTna75vopG3WF4Kq9yo2ijABu8TMw7pdC1y",
  "key25": "276ZCjGRj6F8gqRd238DdhopjUxinFbZwPMLwrbJTX7xNW9YQWABLociLkH3EYz6P2tvp8WjpaB7cs1Gdkh8bpDm",
  "key26": "4hgThkhiqS2ERfU9miUoDq5dNsKYGnNpPqtaaQkJ35a6CrAZ1wcADXmjCMqhD78LQyVEHmfe4z1h34Gve25Ri4Jy",
  "key27": "4UfvMoaP3WQ6X3M8WvCJVcdnVeMCyDpHKrY1AANfykavDyJuHc2hdUjbfWSZZ4dez4wcQcWW1KBXNgoX7vT6BTUq",
  "key28": "2uocARjVvfWXH5ajUtkpsUTkg8pVv7D9CnrRbtL7iqnKxEW9nogB9eeKDnhbUGAHwi77CH5UzELJ7ohnsyQXEYLx"
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
