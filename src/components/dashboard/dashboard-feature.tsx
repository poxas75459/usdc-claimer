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
    "e8BdqA3UJ8J67uhyf2TLMjVpFjbNPKZCkwrsvQLUANj6DGkxindCTDRa13U4F2xamMuWBs68yxyQ4CHEKyGzdAh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24tEvHw1VqWNEs5PqCH1B2QYgfgc6dvkh78b5Ei4NUjfEq1RhtrungJ1hZAhaqPjHWkbWZVppG8kYqfge8pi5VqK",
  "key1": "614xH8DnBSuCKRjNwdAzFPCJMS1xXhj9BY1yiCeYkYXMoJMm1mf5FBTgW6xSZxbUJcjQ5QVpL57axMuuibAn2xDi",
  "key2": "386d6kPEZHhf1aRDj8bfawtAE93MUqX9ZjyJgLRv2sEsz4deTdAibdvix5XGYo8939nPSmGcRgXp9dCSkjhPJj9x",
  "key3": "57LeUonFLhs7ECkZYRLcphqzjCgE8DCrej1zmxJseoRSJSnXidBgK16oZFJvmp4dddtmLREPGFGTLPrZa1JZ3T1B",
  "key4": "3jYxobefcRkHSWAkmVo6Va6CxcVWbXnDLSKec4rsJ1dAhEZbu3iZc2sn1UZMN8drbCtSkofLxrTCHG1TM5bDx5wd",
  "key5": "26hGSfozEV4Lg3McZeh5HA5nCnFHjnsodNGV1xx3Gu7Lr8HMto1WhqM1DRNZqq6tni5hSQuQcKCx8P69v1UaxcX7",
  "key6": "5nhHpaMC9MFxTEV1Jxbg9ZqBgoXPHimFSphb1pHSMsNQMiYDt5VPYNMsPdTAgahhNHv4jVNDeKZ8ij1hydzpnWZR",
  "key7": "3bezzpXivuqFkf2vN8wwak5JzfWYcjmeg4qXK5zfjtxvJFSbE9E584bhVudZBEQ2LkA35p7TYachPs3kHhmtujfF",
  "key8": "2NBFpMvwGiBCKxk6CgJVtP18Gwywi9yRFKx73bJDRoHLuAa68P68AvT8ZWXmrntkYXt2dmvaZEWyDBjGX3j72kDf",
  "key9": "2MLgPGpecSHEcJECAAP8etLMnc7YpStyEBcpkioVbu8yYYyXhQ8pAg2gQyLHujN6w7tUTA16WVFFhL5wHU4e2hEy",
  "key10": "2t2JiHMdm5f2JxmPfRKaGzGuLRugzmmfSiJJuZ4FU9nKYdVfmd9RQVf3dxR7oYQeTwyeeFXfiPFELicwzDZ2i3ou",
  "key11": "62stPCw1Su26d1Zgcx2ukn8f68jN1NqrnsChzMaEzKKjtaooVSRmqrTarvrTX1w9gRVHmWNwEbVd5QJCQa6m7Mr3",
  "key12": "36hWQZn8wJziAg9JkmnwEM2kQs5sv2cV1pB4CZ8QHxB4G3rrmKqtHJ9ZVVCQfjUNJFaz4eejVLizJ19T1XVGe2rk",
  "key13": "4ZPper9SoE1pUo2jpe1HCBXdMeVAUS33GJ96nNKkAVD3RrQZZbCz7XPhH5hLxR6sF1sSRb64ovt2qstmV7N6ZdhK",
  "key14": "5EFV5WaZSpWNArCp2muGxZYm8QzxzT1o96tYHzVxSTD2a9585NoBZPsFtVi5egfb5tV6pUexcoLXHcQkPYChVJLy",
  "key15": "2UGVKFrdekuyh3U71hsMXCsEZDC9QqMovxsjhfUQYehyifHtFqvyR7DUkqJqQ4S8GgaMPWAmfqpSf6YxrzHLK7u7",
  "key16": "LgKWXFbeyQuNZTUwPa1QdWYstc4RE8F14Timop6umZd7g8NsWhMyUaxcRsuozCJZ99aq7ffWkAW5mbSazRa2y8G",
  "key17": "5bfkKMTPyAFzGY32d7awvzhwGgt8w4bw8vCUAUiiyPJBSyGrXC5xpuQSwj3useeZUnFU4o2oEP1tXHr8T4T35J6q",
  "key18": "2XvHbUKKsxFiaqzRzpU7nUUD3SUBMamAZoBF3DEgvxaFschGjhed296wMiWi6AQYUN2ri3JVQw4avYw3YEETZp7G",
  "key19": "55pEzbRZCxKnericztMjqUDZ5fYLjCSeyhtRqyh4tREyuxYP91mvrq3i8Zf4KU4AcDDZtQZw9cYG4R8pFnW4hbHb",
  "key20": "2DLq6hLNrQkeNBLjmrGQz7J8WbibhZ7WcvjNat7TCBmcpwBxce7CHWBj8sHZ3LRBRS4PPaLns9HUauxsfHJkBtp",
  "key21": "4uYxnLQwP5wqYRcupFgSc31pZPZdyoZRhtBCPSEvkKq6wd98J4sf1rxJrzgQkLuWHs87V4vY1d2eDZVh5V5KWhKs",
  "key22": "5LQnhMok6rrU1MRp4Jvi5Fr9TUN8HpyVrGy2go9Q8L7PQaRHV1pFAayeiLyhqhrF9CtrznnUogwiYfZrE5odepyf",
  "key23": "4rRgcHpJtVeY4JFvCoSnKcXihnGTqPs81MmKx3sW5dkM24T5cLDdMHC6DWqc9NebTPRHcYx3gmQLEpQ5Hv356Nvo",
  "key24": "3JLYuvL7hrxrF9WsPppwP6bd1e79zUrVTEVNbodPN9gasWNAEWKt1PG28QNRUdhrC4FxQTG9n3j2Qp79ieQBKgyt",
  "key25": "2kiX5SiAmh7r6s3YNYRYNiUpTTFeiGrGrtEoNCd2TBQJvS26GKDte9Y5LDfBcqViKH863yq8AfmukfNTW2VGBThx",
  "key26": "2gKcQyaPuaXRhcmS1Vbr5WdeeMokifK9xXoqfSJB93SFbSWcRwcA6RMRks2hPkTCJiXyzvNFhmZMvUAkNNbfVbAW",
  "key27": "3q7nMndgXyXGtBA8Rh9vGQGrHpq33qiTAuZKoNxmfhEgwE8HugV4DbWDNEApzBPMfCcMYuo13WW5SR6rziVnMAng",
  "key28": "gjXvq68BtZz9ypJXd3XnP42RAdntc2Tn22L4S2LRuerpjJmKYwTuABtmKMfLxTjNeDwcRfJ8FyCdH5tYn2Rw88Z",
  "key29": "4C7HXTxBpN8MwnvfRtZQ2MrkNpHL89GeYPRUPwkBnmYeCsq6faTmUPzVYau1AvmbVEwWDsgK8LVkYb2yEeXHpR95",
  "key30": "3u3e7kR7KM6VMW59Nf5afwbstMqGmK7tR2UhdacyUbweF3k8hrNsJ8sFfVV3K3yp7TkEkgAh45WbNynsu9K4zm9v",
  "key31": "2HgGn8TcVMM4xFM831aYjY2rwd5jaxE6qRKBhpc2DKbi1cSy4qDyQxnyXLnCQyRGFn3RWJHX8toA2JSqXJeGwicf",
  "key32": "v84CWsqFKspuYZP2qemcuzhPm7jZb1sEX5KuKoXZbFWDfAiAAhNZArJz7U5o6EWRgXe9gkRJQMsFCBZHPgWcrVW",
  "key33": "24jnjUDwYMnfDW45aRrgqAzN7bVPWzapYN33txcpPv5xee1ZbizxVMhrP83Pric72T8ur2LeVMD6bexe2jDyfS4H",
  "key34": "ybHhyCBREad5Q1nRmcp2foN8b214DYiXTxygi6q1kNQozGwAUysyRH4hi5jg2mPH7gMgrUqxSQajo7DJVEQCj13",
  "key35": "4oHVadRz7NySv6ugFaHpEdakovxad3U7GPd4dhPVQk2TSGWdndAUjLXebFJqjF2kguyb274xoi5UQHoVUo6e3Kmm",
  "key36": "2FabeaiPrAees1Weqga3P8hHrSdY2kKykG8mtiurQ9BL14Av2PGgiviwQKL8TNvRDEu5pk96NUS6ix73Gi2TooDL",
  "key37": "4waFrQUvMet8N91HcJxGynb9JcVw13vjvBbWgQvHVJRaXsAbRN1o6Jng6uvLye2QkS9Ef94rNTecSTQbBYccfEy",
  "key38": "4XezQ8tFTN1MFAxp8KvPSN1qrfiPySUfXCoCrhVEfdujTYDDe2uddzGV1bE7DM9YumGmTRD3WkHPrsshMCfSxHUV",
  "key39": "4BpqCor34NJicPqs83qqwaEhWaKWfssBaWgSepqutaoViB8b4ttWdRd1wza7R1UCKUCw6CyfavMibHPfZEppwfSm",
  "key40": "53TvNHJQy6szynsEr5wq8nByh3nib88qSTA7RVYHRPb8jKKBN9RpCGeDHRRRBp8BVSU5R7pV7pt7eAdAiyYJcuDU",
  "key41": "4v6MzWdoRiTA1RHdbuKmoyMdrS8z6dFEaq7ibA8PHFiEYtPVgt1jgHigVjBDJhxAR98yL7jyBCGPUvW8q42GNxNQ",
  "key42": "5GCRa9wzxPrKAK2oF6tRd4NdoYftjg3j9yxEA2s2afzgu9J5ggsx89qhuHsK5Mq9mNEp8f4f6dTkSv1pagyRR1Tm"
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
