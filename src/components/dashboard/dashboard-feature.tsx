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
    "3rV7PWTNdoiqKBcmHZT6c3hQ5SqGKpCqaT7JKKRDpoedkLXhc6LRFGo1fGKXHusyXt48H8MQt8iywGCUqNwEeGk6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Vcuw8B1FmizWio9GC76NEF1EATG8bHyvDnLQB2DonUZMauBWtahiPg7C5oQ9uWu2g4CE9spd8Rq4xZRaPCAUFsu",
  "key1": "4eXwvicr8oVX9cY7EsPefXsu1pGjDuWqATr9Qk8Gh3BLZJ72NAZRPhayzpjzpssyTHCe1Ktw1jmeuCCDVd4zGsU7",
  "key2": "69mLuDttPdZtoLuFpD8hyHXjELzxVjmELtZQb9c7TVTZKEsCjVx7wjYf2DrQdSMKD3BzMBQdnDSczN2iwTsXx3K",
  "key3": "68Y2BBX8kYUFYr3HAQnKtkZyXKzZidLdfkCx3WDS8RaJTk9n949xUnRpNRHJx5Bv5Eh3mU3s9S7YVcnAYJzPRBh",
  "key4": "66XbLPzUFrkqYLas3pEUx1NUp7gcYkw6NekGDQ38G8Zk8dV6FgsrysKzTTQYnd54n1CfKPdViJLfZLCb3s93nA8i",
  "key5": "63LPnVvNAWy6SoVgcKGJf91cuRRHhVkdH7ZpR3PJ6Wg7L8zqE89pRF7hSobxRm1dGby5bv1HNs1vq5WLKo5TkyJE",
  "key6": "3qvrVdgEhwSf1MbAm652jAZauDwp31HS9K2MhyheWvVYCGY6c4KEGzCChJnuSVxjSq6wLXc4h8NELX53xiHqyTi6",
  "key7": "zQKqZM3mHvzKNtYM99Rjux3LoJM5WabZpjQ8jUGUNJUDcGamekWVP5Mgu5rBkvmLzNqjjURtDAvsX6RvjARuTpQ",
  "key8": "5HLY3DvL9zZ6Vf1hEnzzxAz9xoDsuvitCzSqfxDjicKSAQ9g2n1HaVL1zyPdGxYUTEik5riYfs6S4yNTsobzLRMu",
  "key9": "37EsiBLTncbCFceKxjgfW4DuJ4iRtxRRp1kKgyYRWXdaMNtgKg63vJM2AAZu32obmLXZwpqp6zNDStr92sqMx2dE",
  "key10": "5zhkcMJrnYJNdN6ApwCTXgiYYhnisGjWBfV8w99v4NURp6s9YsgtzHL6myYi537dLoVpFE4aBfRoaE67rk9jcPRG",
  "key11": "3XdiHemTDq1f8oerNZ4TJrmoQbCuAZ71MM62WTszzMf2qVqj5vz4jfLusjfv3R7fXNbzKwAoZDo6ajCksvmoD6iw",
  "key12": "3iJWsXUEmYoFwi5USNEvZb9hNfysGyTWd6ULbLzy7Z6eyv6M9CqQ6QJvEag8KcRiw9DcmEd58dfVASPAHnQC2SxC",
  "key13": "74aTyYSSfaVpG6VSCEtteZfxSDs4DsgzwzNBAEXfgF6fccGwNTyreash5TAb6MCKedziPiqK6gFX8zyMnd4dD2s",
  "key14": "28FSGLdzMbSdruLaiNdvytP1MKkq8xiRitKaEAgqTkH36y9hP6QzF7Au5B7gQgz359pT9EcmzdxjedbBqS56MZE2",
  "key15": "612iKceRLFRMcacVCaRVMpXD4Hjm7qrCcBRPLa1JgMHSn4SCAqskjSDY7M6KsYuh59W65n9vCNsLfB3yJZQKLXb6",
  "key16": "65KRVroU15H7ohsypNN1nAktHy4wxhqgbdePdkm3FJ8VG7J43jFunnJ79SR5s5jZ1JYEyTFUkYtvVhtyvUQoJEaB",
  "key17": "4fRuw2DE8wzskpsutJeqrtFNwBMrNxRV2TVKXKN93GmfRvnnk6QYZ6URCXAq2qNsPZhiwT7pifAN1687TwKje5U1",
  "key18": "3xPUJLBwtFCzp4AZ5Qmj5oYHiDYgUJ2iqnVBE2DfLKHA2n9gYFV8yxvxMiaZwBeKgvqjqZxJfmNk63LMe5izyMNo",
  "key19": "TanybSMgLMF9151sztdwcaTwtgcj1xYGBRDeZp2vN4DtNbwA4QgVBRY6xSWFHGzBa3zKWeCMTjQLMLkXEapnnoL",
  "key20": "4idJgvz7hcozGms4FXmZUbGvhtpjq4NtiXrgWPCArGu4rv32MZW3s8ggyWc1nUBorMmpEdwkaupDqerEQDT4jeWf",
  "key21": "2ZgE6aswQjvqmgc1JcFAVYRdtNe9Y9VRtyeHEWGDrYoPc271FvK9UMMRZnKBPkQSFoKPNHL2uDuDyb25vawp8xwm",
  "key22": "2wEJjV2HRqjASZfCMCejkZKmn7pCXnPU6BkcGnoXmZtx3mxKR3CvdfFSQcXhAqXh912wWo1syhnjysmepAcKthHX",
  "key23": "CfRVTW1p4ALHA22mRtRpJhv5Sgkdxa3nqZvYH69mjJd6sJZJKoVjik1atcWrCzjoydu7KGZHeBHnPX8pHRNVuCh",
  "key24": "3Xp6ctKQLMQ8dnPVej3VtHFdCaquLFUtcpaPd9GFS4mWtykFds1XDzfyUmBgNNQbGQbZftbgEqRtRR6C4yhkxt4",
  "key25": "3MovTQ7Qap2peCwSgzQDfJDLH5RUwmyWJDUrhCrEsj8KYHvF2RKr6zy8n73ZRwe6UJ84cypjUQLCjGFX1jRydcCH",
  "key26": "3ACxv7mh9byBN24PChqNXLWHyaJxisYr9iwjfqqqFuhPkEhXkYsoHXcCYvvq4GqVEqEzmGpyw2VZVdfH8G7t4SAs",
  "key27": "39YA5wZnSP3fbU2YRDMAbWTLA4Cs4EVdXsRcVQQBNkqyKiMBvq1PUHspJq9ax5h6Cf74Z9AEZHCgS9QLGYPrEaNN",
  "key28": "23GvBeenw9j2KVjxaAskYtqNotZZLy6jMYHnz91LuPeNZAcLzGyEoD9BEXXmWCaJKA9makca3HZgDnDBpxkf28qV",
  "key29": "wv2mvexvAFf8XbSSqaYwkoXJc6o74EVqMfMypcShjZtYQbUhB2LmSpmzGDX85C5Zu99FtnsKEG4YG2qPFMv3Xpx",
  "key30": "3XfE5Zu5sDfAp6vi5vRi18TJ6TxZTCuLb8qNwMXyspk9AH2xMixvtPkkGNNMcDvKqWcjE6bvVj7exzvnDL6cWqqL",
  "key31": "3HBd4raTbfqwFrNK9nvZaBPuDCvLsr9RD1hYU1LMoHZLE87jhA7NPYEX733sKjfzChyGKuJs5aoD5mmrS1dSTmzF",
  "key32": "2fNb9PFgwLJS2d6w2NdFxkjsjKD2R746fHK2rWwPYRwDHa5xyLHE1WNVRvor42K37rars4paozxoYYVPhRbVKiQG",
  "key33": "4SRnwMF5ajSguwKCvfzwMHJ1wxLh1GyxPXVCsVsAvBuaSMqU8N3swfAZRrjsiAk3n2KzwzygSff19BDv5ZUHhn94",
  "key34": "3gUExuagrtnKQpsVME3eBxSyg6Vk9UmRv5pBhNs6U8eGgfZmro67tspgHDmVGXmNb5688ftbaS2mq2ZKvq4bj2zS",
  "key35": "QZZwwV2iZ9R5tHtXFtvYWvcUz4dE4CxyLvJUocY8xZ3fuL6uNcM3bymKurBTuUZHq1AeXqmQcjnWkDAJuf6rwfY",
  "key36": "3TmVkRY3k9VNTixuo32shi1hjYqHMmY9GgcgMyp9wmUrXtbYEuoN291whEtNT9oJZvseEVRQDyjg4C9o9GNs9Aji",
  "key37": "pSd1Ujx5pTWnNtdvLRTKfqmYbUaZaBoPdWyifcvqbvPkvc26ELrHLc5heqQUtxgPv1gBM8kKbdrBdRqWMYMQ6FN"
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
