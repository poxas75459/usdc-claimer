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
    "4PcyfoAiEDUquEQjZTnAL3PPCoaUrMgvS6TM3X1aDPP5T3BLBrKFUsyvNf1pG7A8JBHq8m2irh4vmvUrQC2QohWE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rJuzxj7dQYoHPYbs9JNAxy37KKzLqedoxdir8rgYxDM52SrtTast2Pw2Jd2nvnsaZouFFNas8EjPjKdrZqTKbcL",
  "key1": "4YwYzKUfNyjYfFMb9vxSN8wX6JJudJgJp7JcucML5KPGn7UgmGatMzPQocyy7awm8PxUpMoeiHzgS376yfmmBhEP",
  "key2": "4RtCxKr1kBUFzB1CgwLRXHQgbJvfBasfMXfHyH6MFw5EHk9eQNSFvZKT6M8QyTDaHxyzM5NYrVbkXrBCUQbhYDoK",
  "key3": "WboBitTMbX5rKAGydEN3miJHxKxiPR58HxAdbAzozqzXp8GH9YhD71ou1HjjMT4Jmk2cg8aGqBQT61LykMV6h85",
  "key4": "3Niwb4D95TCdouZSjev6mN9JjxGB4UMDZLTAbUKRzV2CfpPZ3paEvuwLT2RwY1zNiADd2LuyEA8qoevPRNUzo6E8",
  "key5": "2Q8PPGFHv9antwxMUhJ6c8r9bzpgqNkjJTf1eTsfwsij6Edh8HivXS2gNtfrJmcJqLCMdnYuqbBUCC1FXKHKN8gZ",
  "key6": "eBz1Hd3L77xCgUoFZ5YeZ8u9HvT28HRjh2QU7BUDcKPb3BvehmpwaYAnsP9so3FrFgP4SfDtkBAf42YiTCUTSMa",
  "key7": "3AozYosxymQp31XC8DN1iAUJnXNZ7CAx8KzcpyZYV4RqBWYBBVQHpBBCsW79v2jezgFPpZ4RDR5PXSNEs72nrSyQ",
  "key8": "57a4ZAbd5GvRCwBAu6pSAT8NkcF3XTBg7Frh8Tofwk5mr7PwmkNebkFWb1NM4HjVLhebrsyvUzvJTncAhFyvCv4M",
  "key9": "54eyBPBeJhxdehbZL56ympPANAEzQrTH8u9TV8BmdLRKjDsQGT6mWYyUydw2Bmcktui5kXBsVN4sJaJMUbC6rG37",
  "key10": "4k3F6Hwo8rAcyqwsAuvrXr7XHii36QG3YZNwVm12qFmVjPYfpxY1NaHu93ewzPff93fP9tW5wjCMtVWMmUgWBxsh",
  "key11": "SdrMN9wvgESEpaHg7pcnLCVXGALhMtEgT5zVhEjV4RtB611qrPLXXTxBeGkzRoGjeXph6gh3depv9SLGFHH72S4",
  "key12": "3trgkwTKit44E6MXWhMzKjSFq1QfRkw1th8SpdS7UGH9GWUaZy9JE3RkPiwmXV5BbtbPApFU2kL2pwxNNDgCpBdw",
  "key13": "631WnkoGbEoh9AmugYfUasAwqHYY8WgKzXTfJJFm2w1kDnpGk3nmGEckHcixU9th7gDY4iXtnQvjPGMBKMqc5myh",
  "key14": "M76usPxDC162JRQucMx8fN6o1NGumW955d5xtoBwQ4x2bkQiS1vxypcuFPmxy4xxkW5mHafwH3BFEDw2Frb6Pqo",
  "key15": "5BdYVa24xmo7Qw32Lr5rb6USnNLDg7z2vVy7F35rjGWdhRsNWmRzsp8FEjffFFK5ma3gx8idtVEXmPaQDG6rPxvM",
  "key16": "2NgPVoRLnYvwXSiZ125pDJsE4P6zrWLtYm5yCN4aPctxXvkCWCLq7SEQkU83Tzfr1eudRppX27fuM4nL7U7SVbmH",
  "key17": "3qXtbnY7fEScSJFrYFv9zN9K4U3SqWkRgi5xytbAJaAQfdswdinCaPaQ9y8mJjS1qzgYCktUNCYs9n75ymgL4ESM",
  "key18": "2ZJLXhm1cWAadMmUWtxD7giSGjJJaSN7VZcknVD45ukcra3y5zHNoz25W8tLEvBpRrjvjLCWPUhcwpZdqCTwzFp3",
  "key19": "QDucFPo7axrBjciFPv515WXERpJKX9RpgcRazzJA1Xkn8prvrzcVJ288TBPqecCnBjd5esx44mWNkJq8bAYp1SA",
  "key20": "5WuBkJdjRWHkGudFg1kXfZ6LSwy1E99udU6i9zN7CjfbUQPioEims6MGmfHAUZq2PfHmVkuiimNwQzCwhbtVnck5",
  "key21": "PyUapazdminh4eGk8aSBn2giuasj7au6cSowJGESbp4UBw9s5QMPnMWWeXCHuZYX46MoZ5UmrH8XXArBVYh7rw9",
  "key22": "yW3228mpSNeSCbh5sSHV9CStWzYaJvq5yQgHrgrY7zTrTdLLWGZU2qhP7vbGsbNiCrkSsYcbLny2FfM3oRr99rn",
  "key23": "5LFPDrsoD3DmVASorGXPACeAyr1Mo735P9TnDo1CDYd2kdcf5JVyrU59rfUoU29cu7sFUnTCHaxfhiLN8cahPdHF",
  "key24": "4PVr1ykip8eiD8eHfnvcT7cBb96xb4Cc27j4jqw1yamiby3GErfBS6CKdHDa6skervBcu7UrY9dT2ct3ji8zko9F",
  "key25": "48rSgRuVabRm3cMbnVjwFZYHcww2pNgEtbDuNg7XPV8D9XXXXEDdzrYrF7XimYeWqdL9Wz3kuC6E7bXa6Ecqsj3B",
  "key26": "3DNtSSbcFtiLtzGm9zfCr3VqdTsE1FKfGauPCy2wonpk2Ruks6GQfW282axP4b3KZmQZwSLZV5uGXc8JxnCN7zbq",
  "key27": "2UpcmrkV1w1BwmxRTinhUag3knU3N19BCAeB2VXssvxt76Aag991QHvZzqWcCeFnxAXLvhLgtn7XnY7SpuaiRfvT",
  "key28": "4sUx98bcrSvC3rL9G5cv3Rzm8hpLQuXhggbdzWCHjT9KcwxtJGmK3gn9XvwSb7fdtRpnHy6iVU75hFEcCaK39Eyg",
  "key29": "3QmQESh2u1xRDMbrUwgMzq54nwsB5gJfg6raxQezdSHkM2jCij2NA74nmC2uyRNSUqgjrWTKiJjTzdLku4myNx6C",
  "key30": "yDQquyzLBSKmM7zU7d81QNx3sxxqQQfEtqkHjiq39Kqgcbxf94H7T7mHaBx5HdC2hHkYDKfs4gRedC9RQUoNrNj",
  "key31": "ZNWcwVoAaiApXHHzokaX4aeX9DXpRH6Uzy7fiDbzZ1egAPK6hNkGGAjowvkN4MYQ3TovztS2fHbY3zAUJ7u7rDW",
  "key32": "3cG7UuC94oFzJqTsULCU8qaTCBY56ry1i9VWbxpjNhVvLjxWuDsLHEzbyKqQZ7T16C6iLYPEtyrk3VxxJ9g9zAQw",
  "key33": "4gJLGjeasgokcNdFxpRMeYY7P9xoZhYTGYeXBPWFRaPzzd4K7A14Asmm1zgGK1EdFPZ4Wiadjw9gtbKk7w7w8mDg",
  "key34": "3fEGLu9X9snyf5PKSU8VRRACytRbzAnqpjhA8dA4TYp4MDgxv2Wynh79CVg4SuQmrKjNLW8jjHEA7rgLgfj1L8GJ",
  "key35": "23qyCDsUWjNyH7aacEXCtXXuy4FK4nqHEwRwbbpqn5aqLiGHDQobMmxCdeQfvMa9XD1qfJLPsTSxkPvwSrWc94mF",
  "key36": "RgDkrbe2S2Q1aRLP2bmLhGUTBTLV4eTTN1eiNjTT7JRwU6thLuMpkhGGWjPk4sYyvJeLJ4fa8cunyjWxb2bGCCQ",
  "key37": "5DVCAN9QdgnmcQwBBGPGRVj8wG7bPZ6ouUGsNTFH53GaazsA6BWNzgJGM6Dhpk1vcWiTZiFSnip6WoS9qUMMJAs8",
  "key38": "39vHW2Bd3b45sNCi25Vm3jHNb1B5P72awJEoBGYHbcxKX7TQ5Cvvnf3b48ZWfk3Cchz4psaChd7doTwbcguzYGvF",
  "key39": "3e6yDd7sjQNyK3DR3ym4PiRZEKqd3LWJQEvbDUUL1NpNy4hMd4cXcxXrYjwVcvwqhRoreXKM34NAKzKXAJrm8LRz"
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
