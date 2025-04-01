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
    "3D1LehYvWuPZXDswXDnYB2mZtRAsnHp4YHbSTsohb9sqiz2Eodf14MXx5QRmVA1HTeieCUBHYk8uRPfqscPhbGSs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4skBhJrWxXFd4n7n3DfBRai4QUn4WiesddxjUbdUWSktRCWcFYMQsmqWio64uU7ugV7Y4EMSvSooQSDn5F521pan",
  "key1": "5GWmLj5tCNWKeeQPDnbB8KALn3hTC2mwu5UqhypuKf4FvfZNk2HN52iHxhVWWhiviQjua6xroffQLNuf6vV9RZoq",
  "key2": "4Kq99ShDQCkdUr4YgHLFVg3HAod8vpFg5eR8zkDbgo5doEQaLaVgi5LCMj8ddc9A6RTZDHRmJKYMxJmhhFUnGHmH",
  "key3": "3R4tKgXczd3RWXG5tKS7jou3adBDryZwnQ1CaqcikVZMjT2CMeXgSGVQB7HGvD5BQzHdCMbA78fjaniM6iE5URCM",
  "key4": "5nSHLTBKpgaFtLr7JyCBoSLu2e8s4rpPm2qGCSt27Qsuan23XAE61qDFAUH958nY6Y1Y5TzrGqqk1sAwjBq2gA3e",
  "key5": "4t5BD4amg2atXNGA4S3mhtiMCbmfJ6VnN14Gd1siP5FWF1NrPHjvpy1pDLykcBEtct26TVoSuXQejJiqT4JiJF2C",
  "key6": "emhm3ebm5Y284GqbaY1vszxUubkspZwxoSq4t4KjLcJV6UJAUJGbmY25e4bKdQ395JpFpkQuG8uc2u1kwAc5quw",
  "key7": "4P3CdHi5VRpvDAVmKEMS9PVnWTLdpbfkxHPaHe2Bxn6p3A7fcV3CT1jA8Mr9yys1mGA4e3xnSZdjNRmfCHN3wE1u",
  "key8": "3jzHfXMJWRx251virXuZr5REehW2NiUj57Q8okeLnDoTskcJP7CtQC13WVoGrApuduz9HHV4NxhvDQ4TkJDhhSy8",
  "key9": "4VHJq6xU2oQan6LWSK6n53SiQTjX1yuMN8SpWbRKDbsJtRoZk7snXoDDYgHigQizj3a7qsMoNQKb1KVdJyzUSHVP",
  "key10": "4Rg8u4fcxomUAV4Vre8PGZJLssFrk6R49DAaXTHnjamEHATYQivdWbpT96wuGkmyaEZvEzW7wzKxNoYKnorGwxXX",
  "key11": "2LARPCBXpSXn6kchknHcDugeVNvCpz3ExTn6oAnajFDJeKp3ynPb4nHG8druW9we2effSgrENnvFSJZkBLbvtK8W",
  "key12": "2LGrR35LtaQ7iLTrEGYJuq6EYqfNnXNUjikz4bD4y4Qfox81LmamXYtwUMcYsDYANPjtC8D3GCbGQEVyi5QHNs1F",
  "key13": "6egffsy1SjGYZYy9pKVqbFaU6G1qrm1dtsYFLBUL7pgq5tUbFwZeXReXxrjWSxUsXkJR7Ujj8BdwiFPsYyjqMXT",
  "key14": "597LHmNUeQC5DVdvKFh5kLrhRa9iap1qyTfeCt9bEPQ8LUjE3Yp6Cii4Y11D8WhGvBx2EMNJ3QyBh4LsyUWruWHy",
  "key15": "2HNpLEQPukdGq3PVfM4YFCcEJbXGHCUM4KKULH49C4h6GF9QGPTjZvqTMVHHK511kpstiwNWEer1ehxc3uN9Ey7e",
  "key16": "5SNM6JkteRqBJr3MKAuLYNP54ujQN4LqfkQuaYfNi9gs1XjYPgHYnPrRUdbWxSxtV5DWmuGb8k6dFT1xUyB1yw7X",
  "key17": "3z9f9SKPSwkoWZVXFRBARFfVof8obKJwj9o95Pmi8W414mcWQsCC6NNieh3Gf22FxetK9TQcdK529ELrvtrqQAFj",
  "key18": "AqqKbtumSw3gmJxzWoK5cExQrg6WxtyQvESJuRQQcuZHLMWY8VDZjTBxHRNGNFwMt4C8bLnF6QCDDjV2ZHR3xD6",
  "key19": "44aZ76vfWx5rTvHSVi3vx67g3Lgu1tq94hwhP93EYxqiA9yY8g5ZBVz367HQPziha8Kw3XU9HhuGpReN77yCjas4",
  "key20": "39qQkj1v5nASndBwqrPcFqgTaRo1ozLrKY6HxxxMXevyTgpCS2eVkLAGW8R9DQpkUdCvYAZLvgsfHkPABTmEwhfv",
  "key21": "44weryPXr1RHu1pVhbmyVJN1Rtr4rrDQ6zU1MdoCsbrbeUunBa3b7i9Q71exwi5TuJX8xUurvZoCqULjrC8EBafV",
  "key22": "PAfhWsL8sB6D9Yg8RQExfXxvYJDuEbtvshG95pxWnA8sHLBSZ52RVZyckN4n6o2tk1phUHre1qdH5pUPDHam7xC",
  "key23": "4FsejTFjAk43kZoNEM9kXFMbrw48z7fimknV6H6v1krQJ9UApDceqvpcGasu9GHTKc8LrWA1rJEZPdBGjHrhaDKn",
  "key24": "5TEb5D7KQ2YqJTZSPqnXSum4JW46cCyWYp4zB15cGF5YJxUfTyc86HFnaUbqsSS9xLc94jUDn9QY7s2BPPaE1TSx",
  "key25": "29pqw7N1DHW8TRpvBm5D1GxPDX8122gEQedoMN145QgjWbG4VahBTQAwG5WymHfuFrGb1bCYZRGXopnRAbrKaokL",
  "key26": "61KshWLY1KFNg9Sf4NNaTou4bdc7U9P3mTMyb6ertq4oTupTPKqYESPhjHuCaVxJbYyq19Y5eceeM3mBq6SngejX",
  "key27": "4mzLsV3wmFYsBbeRZyqS22imm2ze224LvsuvKfU7Vk8b4j93Wip9vncgooUkKbBDX9biHzS9BowQ5Y32eu3DZRnC",
  "key28": "4XE5Rg2Z12giP1DDFHCMEg8rR4j1T1VaUMiZ3XxYtmdkq7HD7JbyYi2t78vTjDZYKe82aQgcPSwHrfjPnvEJ92sv",
  "key29": "42qu5cuRqqrjANmME5vVWprtUo9qyAr3NWB4E5bCPxLfXGgQAaozzQX8HcQBVb93jwy5pvz5VEEC1ojNJ5XqpQxA",
  "key30": "2H9kM3EXSmiS9zpyYfoFd5LS8DGGabfSDPz2EDsqa2rSPNPnQiqFnBEdLGLmJFzLGcn58zxHARQronjP4zyeG4Dx",
  "key31": "5T57pTDYVv4wReoMnSs2ZQLVn986knH9uoMWG7rGpoSZY5mnkgm6eE9cKJHroaRbPGxdp3pvjv3bi7KWKY3YfYND",
  "key32": "2c1aTHhCKhWkzcDj3jXr1JVp1EezmtbgNmAkX7kSZjxvKbPPKK7rB5MravHeteew2SBW73EqXek7cpv8zS22kone",
  "key33": "5qBKHtHH15t61DCTiWWDTLTPr8pmGJzXfLdSp95TDsupmgLS5rYqbjkLq8b4Pm9DL5YSGa62xraXZzvRAGW6S27",
  "key34": "5vvBCBUuq93LqbKEseEAHUi1HnwmsqyVkrYnGE76AXo5D7E1QQxAxMvdYc7ufCGzguWzvES8ikFT9mShMXPJwaed",
  "key35": "2Gt8D7upRC4jAcvJetGtvGr1qskqpACEjDwxK1pwZBA67x2eBcgS1hWEf5n3VY8k7uTVhxUeRbtfUUkNiVriMW5C",
  "key36": "5Nr2jSHRYYhN7wTgsx3Yv9y68HynQtvTTQuxrBMBpzU9b5WQ4sPsq9rE3RR3RqQ1cLD9dmymX8ZJxSYNefr3ZiWP",
  "key37": "3hdL8wzahRhB2rthgCjUmSNsjDLjnRLbb6JPEKppKcCwbVnNViGaPpMWog7Wg4BVAzBWJbvbBm1rPnetUGh6e7iV",
  "key38": "66DjzC3pWFbowVuMNg2UMNCvZhNj5spevcww7XTmGP7WkUrBWdNTCYpcQRwvqi8rqrb2435zzMiEC2mF6bvTSBFX",
  "key39": "ScB39J98hcQxUuzyiXR8hoVfdLgq17a6fJvhWJAawPNesf2AnjamzSFkht8QrVtHFtB6Piu325Z96MGNyp4BsXT",
  "key40": "4P3Dp3eP1koWjAq63nqZfePUXrNuUWqhgNTKVJ37oxSHSUSnkWcUCaWuKa6A7CnC1mK6uURGhVMCzouh1xvnCjYM",
  "key41": "HmQYHLXhPzi2HLqczXtET2YAXtAinwgc1u2M4tZXhcCEZkSRK6fQ38uyPwiXJiuTEAYQgfzCnTojVisqosADrZt",
  "key42": "54Bt9eTLbbahXE54iMRnYt1p4KrgY9D7o3hkvcLFYwm3sirMXn5YrzSUs4vQ5YtLqpnTFJo2JA7B7eDRic9a57Uk",
  "key43": "28gC4prrfjgKBkPa2acGTvCPBPyZ5MvceNZCBbZvqxqkdwJpXDUBW3taU4uJxVKCw2nABCmPpNN6qAT84sb6Z8bZ",
  "key44": "4wXLXeGmAEC8J5DPcEp7wZ3mTahmYKD16NKEmkxiTUhb22QWCbrN7CfQ4Wd7TZw2KZALZcB5VjGUCZyxsEUUkwfc",
  "key45": "32rpgH2XR1skwyevJRYVuge41Y4nXmKTE7DQq82HEn18Pq5s4MwdHaaotpNGdpgh1g2WgtRZTDr5Q5hT87JtBpLB",
  "key46": "2UmrqiAN2Arnr4WPne9LZMP3ckFRBRdRnbSE8nGP7iiMGQ5Ga2Sfa4p1ggE9jbk9obyFwrmLF8nw9EcTwccgc8q5",
  "key47": "CVSH4jPPgYa2E7BcK34PePak2Ri5k3Sd9f9tEyStPk1bmcMLNLCrjCtoGt734ZzKrVGgn5pRHot8u9KXWFKQxPR",
  "key48": "2N7vkH8MyrSC72Kkzn71zMG6XRhY7TLVHtMu14pJDejAe6tZ5b2sT2KEAw6ySFwpxZpfU8Dx8RgjSQgLDetrmgny"
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
