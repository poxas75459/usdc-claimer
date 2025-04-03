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
    "3hEJd4N4JYBfRNGdoA3c89xRj9Ldoahv47TBRqYLHgtbviG8Jij3u6a7MkghzHphr8vZ2KTvc9rF4etsaNhWSG9J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "249DGHEosqaqnMUrB3NsmyuEcpPvEAJ991czvZvGeNmNo4Cv2vQMLxpuiHpeSw7sWpBT6aCzJDrRN1i22Uy7HjBt",
  "key1": "622y85MfGiKmZ7XumLoeHHUkzJwgu3TKemr12Zfs2MkmdjsUVQnZnZrPsbPotJtsWSjuELx9B2fyXEPsnbnFtSuV",
  "key2": "5zTnXHBDfYZeGccfgmmVJyAby8PdVGMXHkSyTLZdSB8z3tZoBiiPouBdfgtkEbbAcuvAqmV4JXVi6V38DRBdmWjX",
  "key3": "2ZhyMMf5u7A1WQpatXTKJrATAEZz5a8d9G1BewCCh3kWmHUTRBnhEiyrLzwMNLCYYY7RYXWYCRF8rYA8XZuy8ax4",
  "key4": "2fkns5FUMrUwwJiWziRrtsN4gGDY7BsWLGp1sC7vr9cygibJDRDPupyMBjytKErxWc8eidYYYHN9pU12h7Sy9DEw",
  "key5": "4i6PDiCWjyjxxqc7ozNhUv4HCNCvrxzM4tTGsa2a2XTo4jiN31oYnw37siamviwdBsJoVF8jLFWuLMTf3GCPqYwF",
  "key6": "3FbJANXDV5ZHFuyMJxXXhM4iCnJpc935N9Njk5Pdpz2U6dRsCk3QxVn7jBVuYWBigCJh9uKXfcVeQPUgVipVpw8N",
  "key7": "5daorT7uDQw5qVxtry8ddVyPBc5jnX7YmfwD9sZ5pb6KxpFVRi1S7Sbx5mTiSWW74HCX2Wx8T9rAtUZnDZWtSjMu",
  "key8": "AVQUwP5p4k7eJbfASY9vjBP4Lb14mgWnFogKAuxgGuLctyPRtGqb1xYQx7LvoT78q2JrGcQoHd7moqVgbVrVVKo",
  "key9": "5eq8hGfZR6c3syuVgjwwoXBAKA4KgoTqPBq9TE6k8wTrchWjdntLa53NdoaDFn6uiKVUd6cRj3U9GLnW66GsNMKv",
  "key10": "3CG7sAXGSeHCUiybU9JdnDSaY2isy9P4e3AuY4wPUhNn9qb7NyySxUBu6F9trzcsKdC5ivzLDuR89Lj1cMBaaeid",
  "key11": "5QnnF1AhTxvTo7wAntu1xd7xMJt4TkcWkgRUV24CvRaeapjUUeGc3RV83ULCxLWM9wvrxcTVdqR7U78ZfvaZb7Ys",
  "key12": "4oVhTKYYbZvj8MKagENEFqQmugFyXd4PeixgGgrTHuNkmr9bmkV3BXdxAs28sA6CNnzqJvaoFCNpCeUAi9NF9Nak",
  "key13": "4YZyQ1Ke7Bos3y1rSKpFyCkTHBEhE2E3sdP2beKULCN9eihGWKetxUWqAcVR4xtFH8e2bCHeB3iKQeYLCGLMj39B",
  "key14": "5BPzyscBxmXfUYVTRUjjvyquZEDrD7MT6d3WNct3K6ye6VgY2MoBbDF9TewUopT3utZ3c5vY28jT6jWGNLShXsdY",
  "key15": "5bXTx7Yg9fyfRwzAymH72bcn5NWtsW82tBrg8g62cV2ej3asWhcHnbsgBNiXgUGgxzS3JkM46NYzEEuFd3uK7z5h",
  "key16": "2KAAtoLLzozJiqw2HvvpdvyxTAygro2xECScWyWBnkrs8T4PdM78zXE7tzvuh2M6TF7UK4KsyRjBEzfz6vZVnFLK",
  "key17": "5VunGV3f6nYAVr85zickXU6YCiL46mKyJFwSHVZponTvjjtXXToj1ZsZd6bBB9wTBgLjDXFaCTD7g1gVXZeoYYxT",
  "key18": "8Uw79NxYe2NMa38pVUEpWeE3XvsBkLuRL64X9Ye5H5vFGuPB2VExvZ3qHpKt8ZnZJHrSZ8sW6Cn7PUcvHNYWCtx",
  "key19": "2dG8B8jG26tFB51XQEoLiJYKPpJBexSCwV4jq3CcwrH9qTVeJWH55j7hpKWzZoQTyXysX3FHhmA75NBmAdg9roYG",
  "key20": "64ybXcnFjYUcRKwSz6iG84fF3cvU7funA3MNgyKG4GW9EQyGRNFc7bqCEJJKxc3PbVVGo5DA1SgFcawa1FSYqrz9",
  "key21": "2768SuKFpBKN2hA9kRTUPCAU9qtgsTqPtxU7asfYkQAxedn26FQx9cnx6xB4PwvHEP7Gqo1R52nuHposrmxRSYkf",
  "key22": "3CJ5RNJLN9f8c7vR3RvbvUsxm6C5ReAJoAZP5vchwzBHDUezv3JjfNKpdF7xzi7QNAEUaq3YrfRMY1AYtc6xiopG",
  "key23": "54Kapgt6Bigix3KnyZmN8ExqtUbvXiSj9fWWb3pNhvE568Rsu4DdLAfh7bTzeADczqYDH4vqTrgrfhDu8pQ7iVxi",
  "key24": "3GBrqnwCHrnvaFZb5vYYwyU9HD5pSNeUsJVTLM4SHZWS9bJJQfgTakMc1ve4jTg5BdHD8zwrw5E1nc2Q2KbsavmX",
  "key25": "48F8ooXGKqKKeQnkkvm9kc3EMRePyvqryHKs87ebTKRr6nRgRE6kuD2P8ku1t3AUdhaZ96hGowPuddMv5XGfnAKq",
  "key26": "2HEfXVLWiDmwNqZ3ho5cVatmirVzLND7FVADRZLC3szUYKt4UdxxwipE6JmrBo1yA2ivBhxB1Z4sEdPNEwdZjRSz",
  "key27": "D4Dh68dELzKKwRz12YfnZtDUjPa7qEdMxdnMJE2Udxghi8XqgUdSUoSACeJ546AFtLPQmLvJ72qecDKKvMTEsGM",
  "key28": "3fXoeQATomgKtA6EwPCFtKMStWZLoVvoJ7nv197PrdTdkMtKHFVWuEtpqpApdkVBQXF6pFgmPMev2CdW7PiZKaVz",
  "key29": "4VL65HX5EKxAf2cVVxiTW5YUXu7uZ2MKxQcYKDzjv6AzaMc47UDageaPmzKW6SSewpcjUDApgSdpVSqaRi3EhpzE",
  "key30": "4HKNrkeQ4hz1X7FKvNWhap1BT1LxxeNJRfCzyQnVcmoYLHnpKy6uY5HiXNtk1eiaRVPDKMkaPLNsedXg9D1hvdJX",
  "key31": "3vwvmZb2nrYwuDSYYqUrMVycxgg4ND84qXGtAzgbsg95QPBVJ94MBvGooEBDJCJj1qLhan3V7EmMzXxMf5jwjAK5",
  "key32": "5Wja72GXXudVRcdnvLC3RXL2CzrauTS9VgZN1hnuNBvJw4kP42dqsZs1u6UiFVRgFPYJpu22KLeVMbMzrBLtZZd8",
  "key33": "2cL1epGrxkDXeXskZzy4LZG41QouXinZvo4wBfcJg9179oHPKghPxTyN2qTXyZe4p28RBeDQndgQdAj11c5Ydx7p",
  "key34": "4Bfs8YkUHoGeS1VUg2ZahsaJTKe4VNQoFcLTeLzUGNEEM7uUWqsd8mRcvszoymyZMLGBK1BEzXt14NywhzLyckyk",
  "key35": "2gUhJWaofFJcpdpE9f94FhruhpznGqj9K67CcMgKQLjeERKx4AnKoox65qv5g7suPzqndrGegp91CXbVLMXpFRu",
  "key36": "jq6CEbyqhyjQAxwzaPU8XMXgd59ZMEEhHA5bkA6d63z2BmgzcgLX7YWSw2ooSYgALzQgFXJDEvzRHc9FbHKadUo",
  "key37": "yunuNzDNGSTmLHspCNXqQLwoYq4zZCmaFbhbeZa4Xv656c6gDXkZWFqrn2wLtPF2Sijbr26v7SNsohjLyBPMwJk",
  "key38": "5yE6PVo4RWyTmxftBwnU5pc11cq9Bb2EofwBPQf9nJgqH5Tyy3XDEV2wQTiTBXTGTDBngq7UFBYQyAcxZ7Q6LtKm",
  "key39": "2zfCs42V8TBphBeFrTbC4qAkZCH29aQq7KjQcnTgLJtETptEB7jaBFduFLw15SKy7aWBkFPtEYGPZARtX15VyNvc",
  "key40": "vTaQvzzDmJJeCQdu3yqfMmLUiuCU9GkcymHETppitCuxkC4CgNJypHJUJvrSkezpP4GNehLzQ3cWQMdYZapCXne"
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
