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
    "BCT8MQjwo2mi2DXMgiFiLSCvZoHPfCS9s4Vj9VnnQrfGAvBqoU22krdNjxU7kcFB6jReZo9RPCN5TC4RFx8ZRxd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bBbF5ZLKW7cuZ84bsQF8qvxHcGuC1fyc9dRonKaRavemnqyFAygXqiK5jUHJBe81UmCNDS6Mf58Ek3vwPwSFtcL",
  "key1": "En3KuvkBsENZE7xZvLeYiQ8uqyC3s3xJrMwZUq5dTkfD5mzLau2N79pDHSkqadJuHXcX3QcysKq6kN1CNA81yCC",
  "key2": "4UAZXTD3RkarCyHoNCBry5ajJ57jABfbPjEjQN1wW2pYXUvGGmEwPSEGuHruTpU6o9r2wMXuQMRhvw26NBWfs5As",
  "key3": "2JZaZ6p7fEXFkMgfAz77UMCxry2k8AsZnL25vXjC2YBtCJwayccbpyid22TYPCkbdTpwHKsZdRuvwvxBWW5jDKPA",
  "key4": "3ZmjJVdTV9Y7JFaBUWhPpUErLAqb7sVP39cC93dTNKV2ndSSTsxqXJcGtrVZnsEU2Jk73fYHgoNPWEMumi6fn5Xu",
  "key5": "4MED3bCspcENjyYjXQqR3kZKM15KNDxvVihRnNPdDGWeSL4xhvqMJoa8sEQQzNsaPjHQpFYWG3LUyiqdaBiAYxV7",
  "key6": "51UiBfryo3fR12jZaW7a8X1rUahZpgRnNoVijTcESRRHLqe1SaV9DAfhtkwz6YPE7aGCC71uqG42qqQDsbqfSbRs",
  "key7": "2RjjzpPz1YDzH5TA2jqgKyGN9HeXCKH8oojebNGQccfvezDtWyTxVc4vTG9gwj756i7xpVQmnuH4hradL1wNmoyK",
  "key8": "7h9hdBhmuioap8UVzrnThqrbDtuVuasaQw3KSwS9GfjEX1ro6Bs5ic9a4qZmK8y2eALpeBSAoQRFtjsfguxzrgd",
  "key9": "FtKcXmG7VLKSNhZFvUwTMaoGn8LcZNjqWBZkgNMCQ9NG9GqfhpkD1aUdRYPqWyih3fjtNKsBH2AWaLNQwXgw2zJ",
  "key10": "5xfT11USECnvVkXACUUaM57TqFYvsv88PT4d3tLDZr4BMCwbtRneWAduKQ9Ni1ZpvE21qvfWbFrFwt8tP5U7JoFR",
  "key11": "5hxxCjWtNYG1iE2yrFmu2veTbPTAG4n7fX5ciUFPwrirmMRBoTuQtVTeM84fBN4zdm9G5bm7MLzF1mL88WzuGLUX",
  "key12": "4z6vmra7j6K7E1iMm974E1JcJ7RQJQfxdfh5PqZ6yb8rEc2F2Xgha2dew35UxCAzE6bZdQ3Y4hbG49SWttQF83jp",
  "key13": "5ygigsCW1Dh6QUHWEw5nZM4CXVrymferDs6fVcsSU15djUeQiqmusjJF9p1S3c2ptanSbaFpMSvSfRGiS1G7mMC7",
  "key14": "5R9saHEdFbozH795MtsV7bsaJ4WVitLp7kZvZAmjiHESZPnGLYFLwcmgckfDaWvZxYCk7T4W5vCZcKqVyrFsi1Mk",
  "key15": "5DJ4jMkpgfB9EV3uSrYrq6VDUb6gA2qQfpSzWjPC441UjiQBLqsspWdAbWBvw6wsEL6XCvrKkm962trY41eo5jXV",
  "key16": "2rHqVvD6i1JX4RWMY4TTq9GSGxdiHz6jBtuS6SkokPEA9G4ejamoPri9jTQuWt7udEdbQcjUKNK22ibXZBxNYrUh",
  "key17": "322hjki9dnmV5hb3byW82hCVGUtGqFNESEYFebwuEJML4d2aDF3tN2J9M3zpMGVzDosvGRTr397s4sJfn1kXck3H",
  "key18": "2UoZfXY9MfQoQ5LGyLs9Gz7sLxBuqBwYSuvHwKk69aSWbErSkNV8Vjf7vhGzS8SVYU8pCcTpTEU95LmzftHpEKiy",
  "key19": "5SetUMY8Nv2gCQdFXp6arQxicQrUQuaoFuxUnHjUh1FfuyXYRxXhMyuDMtTKAUU9nugcfDU6ce7Rfwz6nc1zFsAB",
  "key20": "5D2FFfVLoWPs4trPdrcvnbmrvKU1cLcFc5Gprs4CZxTHqrdhtkg5fDBhRSLbRuGVRHGLpv158Efip8T6mLfMfkj",
  "key21": "5NgE4pkCh2aYgo7o1EqXBNgqSGoGYi5UtqGLuFVEnJ6qDjnPSTPZtWZ36bYWuZn9osh7nEeK46Reh6px5hgdgBDX",
  "key22": "PMdVuF28Cr85n7ppNh8L4u8oJSxpCRfGqEjqjuKQsRvG4dbpUTFLGLMpDV73e2mBUvpCw72ZFFpG7MEgY91feiN",
  "key23": "5fc4PPsCS1o2FEJzTC3Dm62Cw7MLiYNMegMhDNicZqxQXt4qwAXyMDXmK3zB3kE9qpjRixgGptZgJfWPdnYe7rKt",
  "key24": "4Cbvy1TRM6uyxNPvTZxKif46YqTjLLbJP7yhgr6Tjk3CSVC5i5mZjs958FEwohP57SSAfg1o5Ck7kAAGUqUBo8jL",
  "key25": "QauJao2sYBEut1BQrvV7ZvMmvXHL3Xn78hNx1W5MnMzhCctkExdWbu6kT9qJNRhLvx8dSRWDyepW2Y5iMCqPctF",
  "key26": "4PGCNoR4v4o8oEDTMDQPqAyxEGXE5bfvpzKerY7Csyo3n3JiUFizUDudAXRznrCGndvP5mwg9VvEgNDQCVAvEwYH",
  "key27": "5VcfhS5KKGaE2DKSVajyp2p6rMZBeTTjG7aScSJEAcjmk8xY6rtCnkPgJ5gpqnydAfzAF4Nf51Wss1PxNhbmvAVe",
  "key28": "3mS5f1ire3bGEKCmkrY8cEP99P8dFDwZimuKVk39mn4XR9fNbdkBCQ3sPMur1Rw8ua9HRPi4Wv752M2A82KZGs71",
  "key29": "59yZZXUM2QnUTp6NSvvGDYBvyPvmXMDqWEaAA5Kyf48B5DdmETvxYbVMo3SDYfq34bifAV2Nd2CWBjKiSuWDHVxS",
  "key30": "gk3jJSYs2sHsbb5Cje7MKyZjkVpR1QNVmqDukynC9NMEPpZcRihWY96wdHAUwrbkESmm4HXeMHjF6gdYCUpNUgH",
  "key31": "2s4VPMSRCfDSN7qJynofWK4zQuSNYL8ywyJRhYwPmWGSHST8qDWUik6heRmQZJoQCpRV2a6Sfs1BKc26WLHgP5vC",
  "key32": "4eqE7xRcxHh8opVgHx2UrcGHPENXK4ch3B5bJbF8NU2fG7doj1kExfd7NXXvRs1bBdFsNG9pzCnfnbFGgM2HMsk2",
  "key33": "4Y3baFgKoWcbpDtXHhErdB5hMnEbGyQYaXJUUFVg4i4n58wccBgBMVLUnn52fqgnqtABrAgZ4uruwYWAFcR8CJC5",
  "key34": "5DT2TkMtBjRn3YsA3PQkYcMCuxb7Tw1kf7qveQ9srPziXAAKmzUtML85PNmwgz3DsRgYRQ34dipykajv1N85dvfW",
  "key35": "5hSMPvn8GCSLvF5qSiAxNzU9ab92mTonfkaLJz8tJh6hLqP1SQAfFnfWNMrsFLSHfDJrF3ZbcSTpVnW1QcmHqYXN",
  "key36": "5ED89PGDdPQ5XpksgrcKSXi9rrp9MjS5JKTyYcmpBAkZJDR97HDvPSZo4s9jrErCAL49c7Sn5SjHP3ufF8G6BoF6",
  "key37": "4uyMsqwPtQDt9g6MsHArBdT632Tgh7ZvrnipsmNrHAQcFVTdKTXKKfHoQSRMjCSQ7bYXQ3eQv3YKQgyGgyuNnSg4",
  "key38": "3A8sud2Ey6PgHYSghcAMXUxFjXK78yaF51kXegwvuVDzX8iPXZNnH5AT37zUbo7ozMtHhWBUSLzYS9fKxuaT22te",
  "key39": "49kwErfjUG41NpWk5yJT9zLApsHqTfE4TFjUqXzjzjhomV5f54Qxkc6WXKv5BpuwBcrAeL66VTPgFuGnM5FEkf62",
  "key40": "3B1Z9Jirt9ArHiBdUm7vyZQqFtpXre9scg64XoRWx4TUUicLA5fgt6ZZhvs5KskG9QAR5sjsKaXJZKnGsLwyHeZf",
  "key41": "4FFV5TL3zDLpWDSkjt4ntfYqywvhYnfZHQqS3v86Di2HV3dxtP5TafVdcNQ6kv1QT6fwukgyN4MR1pRHMndLzMUo",
  "key42": "4iqdraVJAhUbyCBF7bnwm1yr877yN8cgz2nEpSi4X9mU1YFbMqf1RghB3DhhxGRdjwZKWPprDB2SDzu2rjaTBWre",
  "key43": "2fH95NGXS2x2y7kikov2kUt86dn39TLQJx2MD3MEA8pVvUgRwjpKoFfqAEBgaYuSjp268RgEJFPzsvc1N4qGUWpZ",
  "key44": "3EHkREmWVVPjS2Ar9BMKZmrFtjmAowutscRqNp5WD6kGiC1aPLcnhgwAJ16aGgohj41bjWywnWdY2RymqdYtiLoL",
  "key45": "5zJEd5oAickCgvwEZVCutQUsNB8kStqtnA4VdejVV7TrTLUYEDc7R3ZmhFQvMGrfj1tGwsCd72NWdoKs6G23qe9A"
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
