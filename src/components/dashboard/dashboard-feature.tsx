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
    "3hrTfo437SF6qJhDpDEQM863embmDx3AKrQuNQd7nohTMsMWDqQzbiyMo8VZmiwXvTrKiBeqAdxyohjr7z3ti8y5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LQojScbUZLAz9myMA8hrXFkPtZhjyyxcdEVoj4yhjS5J4xGZRyHEeWprXPKtoBk3Bja3NdAgeAqvjj67AHZ6RdZ",
  "key1": "2GDjxCaUvnZC1fuYkPNihhRQbu57hhv6ST3hyqyvdogfvaDwaZKDN5nQVvqmWEzWQeC4B8NbSAgKyrHs82bhAhYJ",
  "key2": "49AMa1Hoys75oJzH62YApNvNhJVAdbqQkgzfMM5gW6Qqf71aTuDbYvfPXHmknQk35z8dwmAUcsuGYbQWZ1hnG7po",
  "key3": "3zEPFP8ipHq3TngNoLCZchqRhykaV3GBacusETKef94chozVCdbQmZEvpXmvgJqJVaG3ZNktL1vgZ8SmfgndVLo6",
  "key4": "2CUmdoLAiKcGXf1XaKqrgVnay1Zx2HBJmmD32RiM89rEAxUA11Wbup4zTh6qkFTYtCP4mdTU9dN9zJRg28WN3czY",
  "key5": "4X3JkYY2H1en8wJHvaiGcKdtWtLS5augvcy7KFQMAiHAjVbptYzLpiwhPqQmHRCHaLu5SAy7staVFgGDmeLC8LA7",
  "key6": "KJuCF5tQJ6Uh7XZbEUbnQF7hJ9ven46v7FeV9kp18jomgUPaASx9t2hFQwFZHgABxLk7U3VR7f7H2ZP5mfMxbuG",
  "key7": "3Uk8H29fNQsBS2ye5RfBbb19HkKfQHPM2iQoNBYGVWiTMZ1RAq8ZExCrPSbQ4dTVR6KYRu5s1PbQwoMrGvBiswz5",
  "key8": "4QBEX7H3Rcg3WvZrorz2aCJ7q56kc6m3YWaf4doimVm6BCLEtGa4MKQAK4NfhYdxxJm8tn6oVztGMry9gj5WvHkU",
  "key9": "4rKXY66vsCvn7f1yccMp6wWUDTdAc1kZXfDomZ4o6zmmoQ73QKf6ihKxZmPBvyHNDAxpxdjPToyf78MyTB8X9ezm",
  "key10": "5DWRRtYa4KVHjzAbN1g2z2MQTJAC8zPDBn5M4MiUsvWqRU8KtJumBRnw5dCA9W4P3Tkjgpsr5vYUKyPtnNLQuYCy",
  "key11": "3v7TZm7DLiXs9rHH3uGxWQqNWBf83mcZrtCMsbdznwimpq3UVK5u63wP6idnBMSnxf5TLwdJsiYiiCAi84NGGkWw",
  "key12": "56A2NR2Xm8HrQPUFX4m4sgDUGHfyeUthPu4x3pwNWj1kE78xA1wC3kQXmQGQJn7ETSefN7EEAePzWyW2DqpLWMiL",
  "key13": "3v6MstWDQqzcSVjxB7eVyjapUbjAHr9hpKdcfZ2HnwsaTEA94ig755GyP4BRFsqKx2giTT9UuiYnnvEvvXiSwhzM",
  "key14": "47uQK8MBMtmXKbj1Ehj2Fcgy24vEMunB2krxyTSYZ2ndMfT95KTyHENbCE3GywVhLNCMafJd5HhW4RnGBVHdwKvs",
  "key15": "5VA5jA8gVjr7KpmsCeQ4MwASy1cniL2SCzTosHvUhWnkwomzj2HJ8HWqJTZ2Zi49PQEPXobLKb73DmxbRg19n1wd",
  "key16": "5JBXdQsKrwTk7uamuUtZurCCFfS9sG34vctLbMr5hb4Y6Eww2KvwixcVgHHSDA57uaZfEk31QYRxLq3B4BmNqQ3k",
  "key17": "2GwPEqaAX3FX2V57TSUHJPuz4BnWey73pz77wrPav3DopFiM9ZeqcwNULJef6XDxiuvYK6ZiMtAJ729xXhAB2gdU",
  "key18": "5H8CuJbEVLAsqCD3oPFxxvdUBzH4vdVvtMukX19pkxLWACCcsR8TZBKsVMYCNeFEy7BvLFr1wHX6TxBXrCK4g2Le",
  "key19": "4hoHrjwysQZTNz2VCbHGceUcmMgrDE2CKgAGxmjn5dYadbsuLeB4HJUjS283ciavp2SHfp6b5DA45gm9X2UaBF1w",
  "key20": "4byVLb8KioxQDAeQa51QwiQELcawye4gKeUy5kXS5Mu98dKTKsUYeumxnu7SVjXvhjxCTkfTyVnSn4xy9GmR84nq",
  "key21": "63pc6aDfEUhRkLDtBi8bk7fr7oYAyBMgU7Tr9VzU6a2TZxHBKzmQaqazhZHNxhhL5mkvVNNWjJxRPhQPwbh3kJkn",
  "key22": "4BSbNwtQ5bpxLG1UKUkwMZmSN5PqeBiBiKbHXiiuaVT2bxxkqYHZJvpYSEGp958ZGBffFrEeBdo1xuNqeFuUDpZk",
  "key23": "3EBUgYceHKhzFobKnoh5mE2qcwG5LNvLU4PMEp2WuTsRTXp2YxzzTvocH4AXfdZBnsbXoLKfs4GdYFCtkSRj1xSn",
  "key24": "czJMcSSKEGQATJpCCZ269T7V9BvBBtQtnnXqtqmXhby3WttYrrSdwWx3DVXB6jbYNttZ4sVNZs478hzNgisSjMv",
  "key25": "42y8gBqBtT45jhBpP5GXRrQcTz5CEDRWEz8NHg7fHAGsoYKCgptLAYhSGyh8Rec7x2xfnwZ4Hmevq5W476y12uAK",
  "key26": "2NiYzUS4C2VQfwrFcb6RQ9tuQNH57UT6qBUKNRFbnvGg2AwqzptJff8dL3ahHmVLkgT6G5jUpC7ip7wovXXiEj5z",
  "key27": "4Qqe9Tj9hjSEKY2Zkr5m1dQYpLBsC83rtZ7gFMZfGo79pXvFb7SagH4P2cfKMJi1B31RRL6frcUCE7ndx4dJKFY7",
  "key28": "2DgBo213dLLezjefTwoLfjU2e1ZtngP2QUEsJfd9JTkgqxoh5Y2PuP8QYsKRB5GcFe6rxWk1A9a3Yayc2tr9Dv1T",
  "key29": "5HkQSb5gog11fyY1i3J4VdG3UZGzUe6pP4qvUsxvpQ2ot7uUUAkApsjQgVMiJLC9y7hqSD4tni6gVGaWST3ZNrcT"
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
