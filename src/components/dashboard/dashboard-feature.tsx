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
    "3fjb6qabUY2Liy6U9sBhJkxZ83dsv1jGK6nk8b1w99EPEUKqhZEJej29hKn6GYrttY2u8MQ3wFterPXiyBaLAWaS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iGyD3ZmhyXo57dLMS7uhWpBBXaMWJ83i1JXpSckczwRAJGQT3GFv1HzewS7EuQXe3jAHAJcHF9Lh3E4rqdHAH8Q",
  "key1": "5kWy5iTcQhriFSfZPeXeTUiAeYaoxErEqJmdck7TztA4oCBVunTeCEMSwPpwWo6LDFjzLC1e1mzCeS28qnRxoVLG",
  "key2": "QrBAio2t5MeNzUWy565C7koYkF1Bs5odSnvtNoMgCPcU1U7kw34a7RPJEemFZQZ4cvnVGyompH4p91v3W8kKZD6",
  "key3": "eN6EbmgtjYfSNtLECzP6HiciMRLwCdbdnqStBiZNe3gcyc9JR5SR38kAa1wR4auRkkWLXYZ7L5mzJB5mLFpaao8",
  "key4": "33PhYuSAy9Vny9HC8N1EzpCofsy9UF3keF1zzHaaALVMhV128aanv2ZFHWoWcQ7CBhsoUJ93hVFe84TCbTJwTWmC",
  "key5": "3qATvFShfNs9Yv1kBoj1YrKXk2yHNTJvzNAJNCMuDJiWTLEZMWxAtgVJstdjK4VULsEnEsxfF7PFJsfiedv8bkxr",
  "key6": "3bujBQmryMi7b7t1TBAfafCxw6KFFE6T71oCLyxQHXcHPFTHECHRcJYPpkqCNG7C6mEqK6npBre8BAd49pCVM6AE",
  "key7": "4d57YRNVgamZbnwjw15pad5KKwEr7znyz3PTtGkjoaWtBefGn6QikQqeyXcFkzNs2ENRkiYRdNzpXguask3pShG2",
  "key8": "uz9dKxAbqCcmFoH5zcSvt8hpajHAKHUqVJ7wJ6tGbjoApxS78F9c9xUnT5iPXKCqwV2Jmzuf1BZmKbNY6riBr1R",
  "key9": "5kDdvD6kVK4gs1ZJhTrbpCGtaqC1MwCt8nTPDbfJLuBn5MA2fLkzFrQzQJai85VSSWS1AfbEg2o2fEcBGWuDiAha",
  "key10": "3sEXFtaEbfirJ1ejaWtcCUDatXgcW9d7VqfzVzpcrFAtAcUWQXGQShYDSR8SaEgVSyvyYRscTtA7RvvPoe4Nad4d",
  "key11": "4SuurHPC3oYwccVMhNMVHSg9nPY9z5CriBNrkAQjuqGJjbPwXUJa1HF9dNHcPY1WN9SUvBMKGAge8jFGQJeSzCLE",
  "key12": "4Hv3kwoHhcGv1TMaXKLNMQPK8ZYPqYnmNm3rmEfUWswxxynrQsf5XiYt6SU26KcJckzxS8iAYLduTivQVMHc8A3t",
  "key13": "3fX8RFM3iJLCBRHLquL29YDXFkQX9eFXAceqPgYnrW5rP4T5dMDKzT8MwwHYDAth9kHCsbk7PipZork2d9gUEjZB",
  "key14": "5LKeVqtn4AgrSvGQvHPmTkMDH9nmKT97Fkk8QuVLE6fKCSHDf7djXhxTJ5M8hUZpGec8Un3uZdBLzLtwGL52WAHo",
  "key15": "43SEpsmij2x47mB6Fv4jEnd9gFvDSQyBV2ajYsE3tb92WdfLoRMF1xNP2AQZRga7rifTUonThU25yzDu4cLVYxme",
  "key16": "55vvT99y859wYPMDtVAZrrGjzoY2cKZftGPSJDqzvzdTFop7KPFAxrGjqpt3kqDV1ZPw7AiHVCa8DEYwoVRPeaYv",
  "key17": "65jPs41Boneowimjo6FKntb34RBL24n2jUKBAboWNvbZKP36LtVHy8B3HHEL6ZBiQ2zJA1zhQSUFAFVwJ3TRKtxa",
  "key18": "TTNhvt21dzKEabxT8tLeqPDrJLWeUorvUfqua1bwfQhBuH53kWZpHDsjcGAQBVQ9axwz4SekLQwdPWqnkTznfTv",
  "key19": "4qxJXez4n4ZbRqNke7tpBFpvbLf11wSY87yDy4qQh1eZG7tdhyJFxoq7sSMp6c6DizAtcqwKr9xqRA4a1qNQSZZr",
  "key20": "5wC2GZB174dFozBXJRutbNqZfbftqRM9koWTEwcBnV2qeP2SePkCNYuGjkQr96k4EktrLiYRFwcVquY8Pdxw3Htp",
  "key21": "55x49pWAfX5g96ktJ8RduSKpmL6jD4vjW5TMnwkcBiB7ps3b7KgDn3wyNggXUxNxMs7xkB2KTEGdKsRWkbFEt5US",
  "key22": "4UdCnDxQXh3MQ3mNs7BhDDx3UKxF6JdyAjNYaFjkfRMsCrQmvWwkcMqX3RSxbjSf1S2U5GMkAT5oJprBDzJ2fy9j",
  "key23": "48b2hqYBRCMmn8Hy5Hna8qokC6o9YSf175cbaSDijdfJ2Be53j2m5trVbVY96CTJXqXrdQYbUmHk6M9crwyXni3m",
  "key24": "4F2iRgPqWRfrSckudEi6xrmV4kqNbsrPYytF1ojFquNBrh7Y4iZSGzYtawgYysjVuVAsgrS6PM2vzBsGk6HkK6Fg",
  "key25": "4K3uyKoPjavbJL6vWh3dZKXtRZ5Cf692dXTSfMbFkQqpB8wDe8EEpHZFGBGZXLtPGDrfNf4ZLpmDf2vUScfPK7RG",
  "key26": "4nKpWRe6PDBwsMMKC6UQUyS4WwYykUDxvXTwRV3Mc5fxbjRChFVQdzeF6jzoxDbkKAhFxLSyB6uGRUWHA2by8xL8",
  "key27": "5ZpVPArXM9zf4zD3R9YxSCVPXf3XyAEAcgphbvm1yFVR4QqcD1czdwse8Kz4xYYkPKd2jGPwiDwzGnMcW2PJH1CU",
  "key28": "3iADC6F1GYXbeUfpgULuiZEmqtAu6qQPLrkHPMN89dd1yYHmg2UwBe4c8RsDbr7rAs1HjjY9jAWLRMWMCqymbv6X",
  "key29": "2dAsVF5imjTQ9pf1g4om7i2zTPa4BzPP5RKfmn9nux1uz7pqXRirQDzHeCktXi4wpzTqNszLo1QCsN498vf62uuk",
  "key30": "3cTJHyotaUq8rVapf3NivutssDs2FMWVtqXnvMNzTTQjYydcueAgCiTszK66GQsnwtwf4ssgupbfaobREEaUAfod",
  "key31": "P593f3RDK4yAB9Ra2uFSFRC6GU91cLF8GY9jECS83knosuN3FRAN186V5xKBqzDxt7K723o7FUredEQEHNt12V4",
  "key32": "4Jve22yczapDn9kfbW3nvJ9d71H8WCmNjHnijLSGLeqembM4i5VSTYoF3UZjzW43hQsrAcaTU78rwtgubbikmLSF",
  "key33": "yxcGepBjUsE6SRHuudKwsBk1Hhp4hQiC2MQmfFnsvPvVq7rQ2WZb56Ffnceuwgtcy4ECzcTCNKreJNdpKpvGJYp",
  "key34": "5TuocnoCTHJ9QXedr55zJexVMZkje9rtKRRGxEoPdr6dhiD44n2qcNYHo9aaqeXXs6dZwfpbr8DUueNMfFtGDaT4",
  "key35": "o6FcrBqwbEgzP943GtG2KFNPaDSdmYNvbNYiRBWhYAx6ximB981yXLH4HejVa4m7iPz6e6nVJ7Edr4fvGn2o2uu",
  "key36": "3yuA3ssj889nrsrAjqTQjG5TB3KAnzj6RbrC8AWqrhVJE9cCnoeUUwn7zu9TMJRPpnrTAVQU29Bm3BycrCfC5MnV"
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
