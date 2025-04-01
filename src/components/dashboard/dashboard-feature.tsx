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
    "47XiKwNxR56NvJ6ALzAuwvYGt7rHf6RRGkUyJPto4m5ynKJYu24fbnzSab2eUrXNuuCJWxz7p7qEVi4QiqzJeQ2z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51UgssTbppWLXBbMtbhEo8Q9Xs9Vfqizns4BmeFcZGJyYWjUhyXhAA2WxLh3QmMZDrmbVc6ai2p92XPN9Cbkk24A",
  "key1": "TF5b1pFi2TLoun1pq7akGs9bz7cHXJnHjtBBXFukCMyjVeM787gAqHioxDNs8TTxFHSRgkAdRFNe296XZfATbZq",
  "key2": "xt9954mGi2GoLTYVRgWFDguSLhGPS3X2DVJiePxfrTQqZ4CgEj3tMBwsKPCfFNrAisNDnhb5bcy63mZ7K5Rn591",
  "key3": "3ourCW33XxC6M9ifaWD2vCzAHfydZPVT5TQpene9JxgD4sp8JFo2B6V6VqjdXx3ycRsJoHAAzMdHaMDrg85r58mc",
  "key4": "Dc5WiGp4yMike7XfB7GLeydeYkzauipqFr6jXDAgcfnms212eJXRwGb7jDdgtA1y26wmmVVBG8S34GGaCjs6vRY",
  "key5": "313L8aSxYwWcwxmXJF29UV8UuoddjDbLCTnrRVA4PWpCPXJ1LRUbMx1mb7jywHBtYnDynUJShXBuwA1d1HKfe47e",
  "key6": "5pfyUdLDVNCMHiCaaE9f5m8d2SHozjQJmPP25WTsAMBJwaY9uXMAgHh4Dsk9MtM4DtNU8KH7v1RdxWnA9hPR79x5",
  "key7": "26P35kEEB1yTQ1Cb3F2ogYCQZAfaCTtPC5sgnuTa5c7sLHAV3HzyBuF5Ln2pXGcdokZknkqGnXist6sojThBUSUv",
  "key8": "2ynC7fJ18socbFSV8foviRQCW6YsLEUytSPup9K8Rd6J9521ZbBRDKdRE3KGC3TyutxK4MTBUsYD8CYL4KsjHPpV",
  "key9": "5YiucwWdPKpNA8jVbGurv8X4d8xeuwfYkvKuTCNYnmNG6xfmLZ8M7EHs5VFLzaRWeaFH5TohoUdLeNU7AaeTjjjP",
  "key10": "3fuHfD92zVH8MJWY64x35k74sCmDQ7EtvDaCFqax6hEN5MJfgehWffxjLtHVsVNyoezcVBub1swDdPPpHh9T7qyC",
  "key11": "ru5tWMjjd9T3pYC4ym5m6NBe7hFQCNpnTwyDVyZWCSPAGVUxYdUhMswGWdA4v6U53Uz3tf6jCiDZHgzsoYNNthc",
  "key12": "41WBjudWcSQ77Tzct95dJEf1biMgGiB58MYZbtqFXEerXeWgTvaQMhfJTqHpRWgbd34FkTnaKwvUmtz65qXmhFux",
  "key13": "3F3jpDeBNpUNtAtQouRDKsd2JSa5JKnRTCWdeebXQFZtAK3111gzNBxe8wGe4DtHfRP2USVpwjsEBLoxekKRsxL6",
  "key14": "5nQgcN3SyReCmHhyNWNXrZEoVxXnxvPJunLJev2f54EQCoXNNnbpj4YVHysTCxkP1j4AZZatPdAs2B6jfmFCbcNN",
  "key15": "3QbtLYkgX67q1advknWssgYNUiWPBgubLRXauFrJcWLsUNPo1k145xyQSrE31jE1yGG3HfiCTrZRcXQxhVXVR9g4",
  "key16": "2Yh9oPnE93wCfQKwdhvvsZUQyEADGBJ6VPV29Gbsrx1g6RjHm2GvynfKU4d2QE2NTc3SVPXiHzN9rVoPnFvJ9tEe",
  "key17": "5NVJnKwmwfVQXHxmEiZgxicZwkipLiXKUpYCnxAdEgEqtLLSHXXxpoVpGaY94zVXupQb7njKm1tRAGBF8zyQ6FyU",
  "key18": "2Twr4iW1NLaikGt1Vz5DPkcYqMMqWtJRYCX5JHMaA2aQnBmPakqcKByhtL4FwBzGCZYhVu1B9zdYePz98iGEf9kC",
  "key19": "4YxwN9CuJCFLKPhReWt9zT5aVQqRV8C2pTrAjDckYk2pSsV2Vr7uPoNPqxSqxfizTdPmFpCHp6bZAffVASoiee6k",
  "key20": "5fNE9NXE3cUEknJjvnkFi3TF9AJr9NJzo6z1wkTGNThciTSyi5KLcn8WxwxTxKTBgcst7SK8rcncKxEokxqfJu68",
  "key21": "3yppo2CjQLGJZrhsibJcSEMHTsALkYVaGtzg1vgA3XkDZApP3YTu8biRzRXVqpVxudg2Qf6X6GFkRBaqq5JtJcHg",
  "key22": "24iKzxNwDtKgqxuxq5MgBbSsCY4XdRVmYH2wegfond4PpiDB82rZLc5HKa1jb5k4AHP6rbTCzLRoWose4Jmy87NY",
  "key23": "22YbpCSpc5ghMvNiAbjAMGnYmhLTmDn2WEnoB2XTwhMsdvxkkoVrCcjsJuHNbwMW4p4YWfHa9oDCnH2HJRdmbXGp",
  "key24": "2A7vYFHFzSk3hjqKGGhdT3yVkQfB7FdcByRcifwMPaE7gRbEfen5owhcfyULWXn4wXCcsV4styKRMRafnYvPP8Mf",
  "key25": "2dRopTTjxTHndYcTGrXYEzXrQ9oNFcVDKF5Wrk1beSEpmhzJ2bzRSNckgWcMEYXfB3TA5TBQNrUoDFRag1iwZ5dv",
  "key26": "4j7SkhcGApYhsyDAE1cSg8zTwEKk67KE7kNJnB93cyMv9cA35KY7ffpBA5VqK2SmnV27cNM3obBpak5HN6mjJgJN",
  "key27": "4k3nEKfUqLrh9dFpQvRbmbEoYDSrJKDsv6PUyzChjSbqkYCjb3N8oSAwz1thrmy6oGAonkdb1sT6vWfv76VhxF5J",
  "key28": "2oVJB2hN2YSktMpsnkVb18m1jBuWfnAedXLrwNb4XiKjuhCiMUTueQgKSCyZtaLdeNY3kyvskZGNWgqsKrkyGng3"
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
