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
    "gu1BPRyZgYHfbV3aJ5VMCFpJMLhN8NixPbfeJBNQ4HJRHRjnzsiCP48ZMHKvegrSd68H69V2kTdz1MDB9hjrZ1z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Sg4Sw4eNdeT7GAVjTE5uwTMw3m422YABp5Q1K4kdzmatVcf5D7B2jJFuVeHiTHL7XgszqFhpEtjhZRVkCJ8PBDz",
  "key1": "4jAHPT7Se7E1MhG3dywPFo4cC5vPpbHdLAUzvdLFDEK9za6KsKFYFyW2A2Q7GotWvHXfWQ8XRfa4Mc8t4xzBS7Ns",
  "key2": "3ur2NhztBoDz3LsDCLHwHLc7mwSWZkaQCWYBvVTAgdALqBa55mQbEbekKwX3mijvqsVjf3oSPnxBhXL2nWBzCnCb",
  "key3": "3wPeE4rvm2vcxnhpXnrA3GcUh4VBeXR1f19EgRFQxEPAmeiDQnt293trVp76c6fHjJGhF9B14DDW1ud7EdF2z3XP",
  "key4": "21SFSbwGwRThsQt7ozDgRKm74eaKqsce6CTrbUGqeev5MTPjNPMz3pzajKzYNFYXFcjD3LCxQn4ovB9VMH7ce1Bh",
  "key5": "5HziaeBEed4m7j8ZenfYwGSC3jMbFNKp643mqBiZFABoxznRN1XzKV4YvfEvkJtJeawQjh6mGr5u7DU2dBaCR4yN",
  "key6": "2CcVtUp5p6dckvgkccvBtVgKeu8tjBxbeYTvkR1DXoYULLfifQxmwHBkaBk8F8Q9zA7QKXEWLWYfU5dN76Xr1L8F",
  "key7": "2EPAhZh3Vf5s8vwbj9y96Wdsu5rbbtkC5zzNQttNVNrQtoU52JCXJS1AQTC78Wx6wcFXCSwEmTZJrxzQj3QC978L",
  "key8": "4YeFafsrWknfamnmnuLiyFBxzeKHkxd6Z91gGy6n9JrPc7PUm8pSo2KbRy5Xun7ji9pvn9JM1AXYGLk8R9Bhipvv",
  "key9": "Tnk8WyAb2Jum4KkL7HuqTsQHnaqyqcgSS9R7hNGgTR4GWrayvv2WSDKwHCbnKViXSZ3GvViA7rpwkJhwEB1fFxf",
  "key10": "37f921L2DkX3yNL8d35X4UbTUewv445ieuZ2e1UGEbLNuJp6Q1irV5PfGtfw7rbY8ygC81CPR6ku5TPoE9XXwUXD",
  "key11": "4HHBiNx4bVc2EwBVGXb7LyYAzsZoSUVFTp1jLhxs8VKqzj9hz9UuECmTQMJwZoc9NTwv3SXsVmWza1pj5cxU6zsk",
  "key12": "5PYUzwXHtL896CXHiLZNLbuBzFcm3eXioQnohN6BZhjsodqdw3e7FwzFbYb9xeHoCxBdoCZ7rYkzgWgjnRcH62gV",
  "key13": "2ivNtim6SapLizT49ox5U1LcPDWxJPCx6Zm3pjMPVXVGpeoM2ejdKQt7SJb5wsJGEo4w5FTy59oBPULQJybjL1TW",
  "key14": "2sYgjdFhobC18ebwB3yPuqiEgq7FbxFmFURLvF6oX3ti4GA4V7AApbfow4o2JebYHYpLqm2vvAUDnMDk6EaReUQF",
  "key15": "4i7yyjDNhNEmjMEotrWeVZzt2HnCTEeAdHSSzi3LGtyPDJvxFee3utiTvSgZ7XDTg8ZtZmqXob4oJENH2GxTjvKT",
  "key16": "2yWNRSSFk4ozGRJe2GHD4CStnXuw51M6dT7Bo5wkmbsMqWEqzBFRX9K8tgqikVF3vuSf23tbtPiZ39RnE5Hezipp",
  "key17": "2Afkxx8NdDQdUvkDxpP9kpXVoSWz7n3W8NaW2UihYzCRqYLr5CyFSidvy5regfW6MZjHpLvv9b8m2yt6LrNFB4NW",
  "key18": "597kDeygviuTzRnt7fFGyDtRVtWyh1tubeu5j9YYTqYQWQGhPfs7B5tK9q6A1sqXRAXUPNDoeg387uQn1EC5JVfh",
  "key19": "vsvxcKVxYxVJJASEHqGUDgGGm7Cs2EzVeCAZe5cMejLLm5CH7pCYGwyzX3MUMxWWes4CwVZyE3kHzzYSAHQjAYe",
  "key20": "4YQNBA9ezogBZmchUAxrL48kKnJrHLHjaruVEL6fwtvG74yXqinMiKuXqGviPXob2KeAg6m1vTUxiUNRvfSmSttT",
  "key21": "3NjGeXbBWbtCzhHEysoBqJTv4YzgRBsmsTJMC6g5yvwJPj5RV4SusXadLynxA2QYx8Hs9xyChUFUSWeAKvnokMJC",
  "key22": "rTP5th5UrRM4qbQY9yBRAotwYFXDYGzYK2FWJC6J36RUrsmUsyGjyX9UEdvVSQSjfMdaEi6uSgykX3gy4y5Upfk",
  "key23": "46kqWJy5ipK5b5Kg7Mk8G1t9jN7kze78VjfgduCHmkeaBbkZLc9CattsJwbpRho4ob9bsNZL1bJ6fc5uXubUdqXr",
  "key24": "3vPW9s6vJetw94d6ZLbhDA38mpZ7uDQobUx3NNMiWTdef2jpcVarJPkAx7aBm1iGmNKTjErdtyqXq1nTcmfuaByP",
  "key25": "54FXY1o4HY6n1FHKNg352XPPoVMpApvxfMqc5afrqxuJcpUE2WrfE2NHuyGK8h33HfUzgtpuKDAXUKEZTAv3t13D",
  "key26": "MgoSB4MRy9oPcBwXnmGAsxGMJFS2bQfjGtmhAZvEuBU1tBT3nMur8hGL5FXWRUZdwTLo5zWg5wDWE1b9MXEzhsd",
  "key27": "yMDz13LvWKKFieJFKPSuTMyHTtLgJtCNUZ8ujbMeizLytECF9ejyHwEgoy5hcCYpRVY1hsKGHAAei1AAE88Dybr",
  "key28": "5fk9asNKikRFZutDw5UkPVKSyMrgMoVd8acY3CymBiLmNRJXHvvnXT8gkNKws8L3CHdQ4jKrRk9y5xq5RDZGTSUN",
  "key29": "1uwyBxymJdW7Ao5LPoTU88asHDQX1fjrjGyzHdPXF5Q8TxMqXYRJyAiKkrQU4d1YrfSRrtV1HQNwvQn51hPS8oQ",
  "key30": "4MjvaK4gQ4Dkw5kWoJpVBsDL4n9fGpV3GbW4cyvYVDcioJuHigr9bakbony9epfXtxjiyNots97ZwhX4xWk4gFqL",
  "key31": "31GsAurYbRouc5Txe312wMpWNhtk1HkSswt7o6bW9LJ8Q3oUeYmkmStsqt7GNMnSYasDEXPWdXZEzoNrHfABSQ6K",
  "key32": "4LBAJVA8mqs6fjDHH1ZK7RuXMPz99mX5B9LJt1CG1mwXAGGRoCosJm98GU4ESscKhbAHR5dFH4ZPkxiJDzQnEoeX",
  "key33": "4S6VxfM7j2pJfyBsCKjCxy2WNA1U1Qa1dJyHHe8YxEfr9QjS4hbowqoSdaibrqYyFePyYqxSn4TU6dYzWniTGmEj",
  "key34": "5tcBLwWwwdfS9ttqc1QTedmbh6edR3W4H3AWL9ipUWVyAkaeEhaMdo1qQSZ2eM8ibQ4HLge7ea2rnbKRen8WGq4t",
  "key35": "zbRuuDohXsdpgaS5bk1cfL35btocD4ywZUTAv6QjNAbNMVW4XqSudX9cnk58AkVFRYHwiSqE7LrPYQFWxajh7PU",
  "key36": "3yUNdKvyKoFk5hQobDxYbZF23Z9jSN7FszXL61cZuqvLPbh6Ck3MhFNrV2To8GURnm4xWRJ2rrbkDT9J1gFB7SKu"
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
