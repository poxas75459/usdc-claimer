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
    "3pMvtHzDG9KVKhmR8xVXmW6hnWcnqxYsGckEi5PoAg8n5YRXmE4pig52XGxjjyi1citxbggDqEw6ZsZWKFVZsEXn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T14AiMZz67jACEcnQFLdgmmeVRFoNcnhLHxaexyavMpETQu639Nt1WmbytSw1xxtpkyG5egmzwvsNMrEf9wHEGP",
  "key1": "3m8GMMvhAE56SpYZANJreMPfvyeeNHxp3W1hzsvt5Ejc1gc8ypDyy16E4c9nHBa75CTiQD2Rx6e8bdmbNwzScH8r",
  "key2": "5rTYvbMkd5nK9dM39XkekxUV1H87dhkMu19feqKqnZqE2cBi47W8zZAqmL7iKySxF9hWizbndKGDGPFbbHSXaR6Z",
  "key3": "4b6SeERnmFeuA13CsNktxpSe7DmXxn2qS7mrhc1hQDJKehumU3uAR3y81SQc33uxqCVLXCzYMDwmxEAMDg3XcUn1",
  "key4": "22wfiZJRQ3KJCTQriP6bSSks5woS7UUXpYW7o41jXiAjqbbftuVd94xX3yjF4i8iTLtzTh2oxFfV2BiJpgpxRQpw",
  "key5": "3tVJ929LSnjBHbKyDvwSTSmPKPFGMDhZuBfWHNKpT8DuJgmkS7PAkVY1koVSU1owd8M5T6VuhQmpAoPBD17kFccp",
  "key6": "21w29Buf4yLuT9j1enECvQYren2TBVNrj6aX3UjpUcBurBVtF2JCaHE25DbRmR33bZ6LgnrhhNnSSayGEiaYn4wv",
  "key7": "3P9cF1U5tbm3A1Ts2eNKFF2PMT7GWa224Q9KqTZWfZNLQpVyM7oYhMSmpXs3ZDENMoCWmyVJRwLL7qJsp1uWCSs5",
  "key8": "3QYL4bLs2d8VQfQtxkxdqr7Zkx62AbuaP11rPkuzxDVRNwaCXHpMVFsQQ8nrwthSaNmHNnbdgdKxJm3JTZf4uDF3",
  "key9": "5yDTgRzoqsGfrRcSArHfQiQThxjrkr8uAbTcQ6pSc6vHVbFE2PpMyPV5TYzmZsuPJQXL4ZYCqNUg6b1j4VFGoKgE",
  "key10": "Rx7XKYCRaSHLyf7tVd86CCKdLznpt8NksT25EZCd67KNT5nXrpP5zHkN3jcPyweb58ASTqiMRvLKXusssdE4WYR",
  "key11": "4djVR7MpqP2kWqF1NzswcZFVmNhxXodBaA8Ncz3iarB8X7tVGRnhho5GtG673kkohGe7JWQEQ8dckuqgJi829aZG",
  "key12": "no9hGAAk6waLpb3cbcMxSJT54B5Howxi4KvmFbn7p7aVSHSRqJpEdx4KoQLP2Dznd4wNq1YovwQWnAmGjX5brHu",
  "key13": "3LTnA9vFQYjnHVgu5Qn3AaHwPSx7J1rTj79WB2CemSYVXDcCXfDxG5C1ah8QgXycfHA8nLAVnTjQ1UeRhDQTGSbf",
  "key14": "3ReBSNqwkEw9wQB4EMEsyHn8VQwQKS1JNeUYLwqDYrBsoVbpnbzvc85vHE1URJTLS3K59WK2dp6aeun4jxp2zXAD",
  "key15": "5FtGLSu9AXEtVGt6UgPjQqrRhjjZoJiXFCNpg5z1zqLqAiEP1UaD9fPWp1BfCuUfPsEhEcriohhuDY4bwBSzmJCx",
  "key16": "4QYvTQoiocE9NZ99MJchL4YRZd6sSbTBb1LnSpg2AXzPRTfgJmHqhWRs22Hrd7LpCq4bjuJL2whf4jyk7tyY9F85",
  "key17": "23DU46QaieE53jXXRvwpShygxYMMwavy57TD5Dr3oWaTu7ebyVXktXWreE8ZcmAY7D9nefbwUdcTSZqXUuoqgyJZ",
  "key18": "5XNhDSvQeQotf7S7ufjXyM4kgcQSrCx67UWcDASCr9tjPhN2tQezSQspAMqt7GjRZMHYUxigBSzStuiga4SiZVHc",
  "key19": "5NBsquJwU6Eyc32VLzwLVSfW3bUcA9mftaAqP3Nn7bZ6vzFcSZgz82XnC2iNMD4rnK5fJnYCFwJLAR3wkaXBhf3V",
  "key20": "21tdKwDW6g8tQ88cjvvmp3N591NRgmdcfjwgYpDwkxUhdNrC7ffvjTvKGChqMpuHfGRSoetmw95Go6MHnKVGauvp",
  "key21": "4gbAs9gwW4pQcE9ntxoGoB8AfCgK3nddeHWfgJfgQSP1pqS1VD4rvLN9cfFbkS6K63Aeywc7PiuHq46RuVTNeBTy",
  "key22": "keQcZbzXfxoNCuEkFY2yDN8iTyXYJd37naHELPaxXXMZPhS2hhm2Kiy3xHueYZWGYh1yhtp2cSEdPpJkfFAiR75",
  "key23": "2MyxFJakeAwYtFA4gE3PC6jGeyUSSs3engq4M7j6AYxUkrMhVPoqbtGpLvT513d41ADYNKW8DVREkLUt9YDB2tKm",
  "key24": "31JBavX7GnXvQguCsCcgRwQf3k2YuBm5ZyFyTGAnPpv1SiajSo9xigfVckHGvdth6eGKBs2SWzpwAbUV4sGPv9uu",
  "key25": "Bv3Fa4DMVwNcJsrWsguQwVBdXBxzVzkFF3eT1KFhW1DsxmVdt7a7zDDpiaKg9Rxz6AUXxCCefSNLgzD3J8ENe5D",
  "key26": "5sRKkpkdNy6XH1ohkR5UeaHixzUUMBJsGBNJHmxXTZbXDG4YUsayDYVYNjw2eYW1jBjY9jjL7vH5MaPi56S9i6ri",
  "key27": "Xrh1j3mm8QzHc9EY3JCNAUQmS4r1XGHfcpt8ucp9Y3rLRLT127kKajkRnhQZBpVn2AxRCWXXurtSTxJZCFpQ8Vw",
  "key28": "3W9YR44WnwCGeBQwGUR2Sw4YGLu3dxZjMRRG7WDL7JbwzwQht75FehBK23t1NENm9wSqunaKoDuDpmELeYeYvpvA",
  "key29": "2QnfvuXHBANFo4z8QAjwUSKTLq9proAWRnbj7H2QXs4pnMoXEMxAuNHSZ7nrNCrBgd5uFPTCC1ktFSNLJcja3pRh"
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
