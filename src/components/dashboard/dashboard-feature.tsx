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
    "3ErXEqWqJ9nwFwfC1k5XkfeeV57J62DJbcHomvUeVrietK1wZ1W9y8UoJwANcFqZrAYShV2EDKCQ1QuHnsF9YsMw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o4TrgMf8UfUpcuj1QpdVWKkEjwqufE518WSRxqxjQyG5G6bsXJ3nRr3ojvzeMga3wxG99ky9fSav5xE5MJoihX6",
  "key1": "258Pd21MWXJdTgxJtSXFWK9dZJgRRkuvSiavrCcVKAD2ZxjjzPtEgUbktGvFMDLSK9oosYry5fjr9Q9bSBmtBkUU",
  "key2": "rQzRvJoBbNmmPBwzHLgPkBm2tBTMy3aeE4jCXcuXdmSHx7VfiirS4Jk4DJTQAGmXXMZU25j6Aa2zmRMix2L3BFQ",
  "key3": "38tK3XHd1Jtm941DQCcR2E9pkf5pGnmwYjYFhv6FM1yYcAnMPLdhnu4f8zoqNNo5FnJGfv9aL4QhsZJKG6jpmQsx",
  "key4": "385E5oF3y9xJvFU55jBtwGyJXK3UxSaiky5oCAy5s42UAsCCVtXav7XxD58hMaM49n6Ar9R6HmLygFHgHCmVKfbM",
  "key5": "4L2ASXxjtmns3VMY2PxoDLmFvfixMz9DDEYzpTZwXT5ksCfPbjLpCfgEoULNNDNdFC1c6FJwBK7C7RCvMMVH71Jz",
  "key6": "Gk9u31uKVZX2RBFoySUTqbYTiHBNvnUZLhnDrWg4P9agUZTrfqodJ596BBNDYZ7LNeHntCVsDpJw8kwvMBPq2ys",
  "key7": "4nJpH6bp2WPGNAyKViEHesCPu6YhfEbL76UeqpovcnvF7qpfgpZDgZmiJZWCpAHyNFJ4tmJ8vF3uQKng3g6qHNmo",
  "key8": "37T5j4WUptcHz78NhJ77VYfnFrM6xfH9bxJJUTterCEkHtZXeg6kLixMqckmr3s26WAam6Savo9FwpvQWqs9LGX7",
  "key9": "N1jECWWUsiSWteECgrfqrw8CxvMRZhUyx8RT5HNpsEG9ETo28apAae2PfGQdSYpUhc7fsejZeGvdpM8mMqMKw4c",
  "key10": "5MzYCP9BmXjN1R8uiwRexQqCKYC1vXqxRE2m74ajseKbC7XkHEP9sV5CLi4RdZTbqHGjkus4oNJyELQQDD7LSfec",
  "key11": "47J6stba3u7DoBXWQGF4S9G72VsheR1JTwnFZA3GMXBuYpujTS1YRoGy7NQAh9emeqMFAbQ3dNTY29txXbpHQ1oA",
  "key12": "4wZeYwSVzFFU3XBfkZy6NyCJKfaHWpkHgPaX8gCKfpXmD9PW7JeRYHMeLr4bkxqm8yL6SnVRsA9BX7sE2t1A2hyj",
  "key13": "4TJHzk3cetHp26ngDxHrxjByAnaG9DcDQryafFw6sWMyNJaS9xrwJAJs1UhqgPLusdtCm6qQHgpXWkbZD7TTJXek",
  "key14": "KGJUVDiatWZbsKfXwBA3SizBVVREu7adCvDKBivtgMhmF3PwtzaiCFei5zDQJGfxe3GCT27gWqqABNn8m1o7eE7",
  "key15": "2ed1btny2JP8iJ1CFxg9yM2Bx1b6Qa5d5xHrQ7ZGbo8qkrrzsTLFuFBayVtYDFyR36wWYNNjkbjCthYV95oW1yEC",
  "key16": "4KvW4ehKGAtxmmyeePpsf16qLE52eZ6bKLoQG7SmKyz8HrKWwsJeEXt3LZs59CKRz5swzUN6uF2QnpGBKAx2Rnvy",
  "key17": "Nt1vvr66QZ7PWBufzCdjUNGywMD1NhkpCt5MGpurX9t3fHQvLWKeWipXZaFM6y54vhrU8dGCN98nPLgQqZMQdBm",
  "key18": "56cMhYwjDZUZGge5ydw9UmSKv3YzDpqveyDszwbHgfBdBKCTb6WELZN3pd7dMYmaz8eG6fAkY76rgWPw1UgGHdQ2",
  "key19": "xrsCpGmJzP9XT4JzGYj8RQsPdYyABnR2JAoE8rsgcRkXYtje6uU8PcUnM95MqXeKnkY2LYAe4zKHLwWgK4K4ans",
  "key20": "sCaiRVqNiUiSCa2p24mjJz8JHAgnnChPseRDJHr246boXcGcsZszHZtsx1eXgbhDfUnFcM4U2x9FcQqPbScc1Lj",
  "key21": "3fBXiwZnFDKXDYEMD3PPXZaFQei9SAozWBaLfL5MTY1iMVx7PRDvtzGdgqQFyGFe2E78z5xnU2dWtX8H2PkpYuzz",
  "key22": "7Rx3d3haQp43uJT5Rzm414nkgnfj4NmfihmvMswcWdcF2ieejTbj4RjvxRx2SKE5C5S8FDuFsUugWttCMzg2tWG",
  "key23": "GGTP6AVfZdKC3XntuVE79uwW5XWK8c4U3AixsCfjpaZkC2pvPVeuuT2A1kEPHsk7s9AkXrKWREMG6Fdm6iMXpGD",
  "key24": "3vtDPU1M3NWAxU1DwZintw4kT8NSugArqM273BQLCNLUnrDLnYW6A6z73MnBWNYJsY5pn3BZH1yYazt2HqRLz2fq",
  "key25": "49TyYYRd64QnaC7Auy7rLxnA4Dfg8bbuC3sX2K5HudmoM6wG8dtQWCUyFpT173Sogb2J6XQA6APmFRKtpdYiAxYB",
  "key26": "2BBdkEkePCUM6F92vDzGMeRRAJAWg2yeRhSvh4JaQ7MzCqhXC8Yrj95ZnQE3NoggEu15QGVQyc9gRZyZo6s1buzE",
  "key27": "2A5FEMrwTAARa3csahkoCgtC2cxX7kvBgi12Ct1JRs6FvocHkTuh7CynVdkFsbiaWZ9BBDeoGhpaj3Pj8u19TQ6f",
  "key28": "64FYkacCbgmqTz4rq6Ky6u8UGY6jPT5qWXopqvd7YD5MmvAVGPVgVCkrR1gA8re6d1Jp2VX7H2rpBSg1kkYkSRQe",
  "key29": "2D5bRrDxGmme9u3EwBghzV9zrGHa6iwmkWB8cZJscMGWTjQyMsENekBpyKu21B2V1EniEePyEMuCk7b8RVd1vvUq",
  "key30": "5urE7fJebg2wZSSh7faeFBa9LUQPhWCuqLbb81EF3AabbVw9w7dNYQUDU1ARz4m3LNypdyoXTT59a1DqJorGbKwa",
  "key31": "AEcXz6qm9WzMxSQ9eGmqsJJBWT1nA5VgYJzoq32iE4sJ9G9DU4mh1nfEcxVLExYpHsi3mYpi9ak74yeiDspYTx5",
  "key32": "36JMsKK5WBsxQjJuA8fMqJjwGy2A3uadmxKBkryuLsyfMn6tFQyqWLMg5PHhRXaA5PmASaCDmhv5ezxLtNWEG3Vy",
  "key33": "5AnHuKPEjqx7gXEkqt7PGnzG6SdfDS7XHMcZLTNC97EEaFT5vzBB3EGQZuJ83f5VxB6NrGPAZXk8QGvHzW34mANt",
  "key34": "4ynRg9TVcH4ASrnSmiZwc6xogpzZNSMqS8db3AoFowuubMjUS7SCqoqBwa27rG6piAX9EfpU16PXvYHirm3RwGrk",
  "key35": "3EpwLpkp3Pxy3is23fNp3YkpgwyY4pnvXtTFFhqpGRwFiShLJiZWGZtqkTG6kZw1h6dcgd12oGutuv9DAZjCESvy",
  "key36": "4wAZwHd3ThC4E3RgEBrtwspySYSascVR45fvo3yH8suGrWep8TPiD6UHWmr1tDo88fVxZAz62FWKA7VxceVvFsUa",
  "key37": "4C5iWBjZFHx7Ve42nsa4NRB8KDHG1CmyZEjEDUb8kaah1rSmbY1zXyDjDivN5AkVQAVGdXnf4hwPFwHi9brPYBoq",
  "key38": "BYyaTxckz7efeK1uJ7qbAjduQ1SFqKWM9CAVi8HGgx2cFXL2yfoyW1cV2wVP8NHrXZoNTUuz6st9ytpXvgvDWro",
  "key39": "4fKEc6rtnw97ErF4X1bX9HFJE2fB6bAPEX6BUpnBQk1TJkSXiRTBxaBWKN2t9AD3Ehggyf7pkf3TpAmw9ANvqiFp"
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
