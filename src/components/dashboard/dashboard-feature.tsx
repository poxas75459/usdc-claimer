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
    "5gSLmLwvZuBLJSC1A6DVA66EnYvxid4TLYCw7V8kPfWpvTFHg8diKDXfu1aWEayP9QeNYsYSeRqzA7vrDZxBPWvX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66jJaEdt2tZ9FMphL6ay77dNydttmau5znAF5J98NNAnBDGJRGpcgDkVf4C38pGfS4KiqFz6HRykcd5hxj2zSDvP",
  "key1": "5QFu6JUG4JicEKzvHh7NK74SC6YvY6JbFVG6spiwkRNSkBWQph8azMuHGX645ce8pRZnnRS8UFuzHMK2sEkdw9jo",
  "key2": "v2mpk6VxNNPQJhRy35Ko11tgzVtNji7dfVmRjwF8ioYZa2uam3kys9D1EQWbVZjXtSjmwtv7dSNZHtqSt3yYXLs",
  "key3": "5kaLrsxZLH2aKSfjZXjs9tk5b5hpiMfkuzK3trGmnNLkx29DdPSVeucCNFAts5KUxn3sbB7RFKtgNAcNV5deYVvs",
  "key4": "4S1P18oncmF7eaXw9Ts3H41TChtVcyhJzg5q9NSomdaxvxGFjzbRwuePy8tmaj8YMwsUxaGbGgDMvb3n78Gc1w64",
  "key5": "23mepLz6o2VPZAzqsmifxc7fWVVQpkSsWLoKaH36Z4nS4Tcu3Yprm9KMHJM5UpozRPFu6nyuYTpcYNWaDCkj29kd",
  "key6": "2kJufQhczYnBihk6wHt1Jc8EtAAccZwbdbLMxJEcB8PsZwUNzaqLZhEu1ZjGqaNaUDDb4TNcLErAzy9xAqKGVpSs",
  "key7": "4VqeXiSpdneAxDf2uDg2BrzRK14k8GvtT6yaeLTPaEpMXHJXewKuhZKFkseBbPwCnusv3bPPtUBpe4hoDGchcVNs",
  "key8": "27qFGf8Cn9K486ncqxSua5YD8AqWhbpQVGa1vDgg5BB3pMWrj9Mm9eXYQNimb1L3wBFwj3QDquetdGz7z9H2EXUn",
  "key9": "2byGqrNCB2CksDv5NYk6MM5Rm5DSwh1GKeo6s9q9EjYZEbHmGKo4CyTMRgU6SDAGv1vp5yWUZYa2R1r2PjowNGw5",
  "key10": "ReTgPN9VdndAxAmpk4ntc8YWsxaBenM9gMamYaXcKaZYDGwHt5EbiJjnkZ6ekZ1ocDYkHHYof9m4JvfLa7AXr3U",
  "key11": "4F5vbCAb8gBjtoq5mx6NoZJVyzc2x4hjxiPZkK9YhApsW5jpgiMv8SWoQk1h1gPyMtLBgKYtBEhWegZYzDqyB2GQ",
  "key12": "us3YuHvsK7fJLcB5wx2VJpwGNz9FeGPives25b33PDrZrhJwopVo41fiLCZNtvC9gXSrpwR4moUq3j6rp2eaxgj",
  "key13": "LYqYwhgaps8iHDdGAye61rxhzYSECenZJbFwbSaGqPHvtzvWo3RoXEXnGb77k4MH7Bo9vDSc5tJtX36rPhDtZJ3",
  "key14": "5F5JDDVP9ydRDQGbQ4VVhWtbu9etQkhhSGZr9fkRqKqz5EWdjmZqJ9DtWyhfrcp1pHcquFtxKWRUPsWnqZCpVgXp",
  "key15": "2jZWMuRS12Xm1jCVMxf7YHypRtFcQN1X2JqA8J1CJa3gXHHZXD65tWEEpyVHod5U7xDQPEazkCcjjhNEf7eUve15",
  "key16": "kekynkBww8skNvP7HKdQCh5jNDqh5kdN141f8DxAJMEz2cQztkaCme2RZaMpGQyKveu6msf1QsA3bvR2HpHkgN2",
  "key17": "4kciJ7Zt4MxepdRwscFkDqJmiyS1nurtA5LAReyAijMr2cxAtnJJKuoZtNf6gQ11SHqHuvNujuYcCqt2f3UxuYKq",
  "key18": "52xqm5Mj1DYsFTykzG9xApoQjNcnWyz5PXoecnKqcem7K4VithtYKbKvMDs4LXeWMFTEc55PepVVx8uQKTh3KTQQ",
  "key19": "4tMSWJcQqSu6T6vbRpjUEZ1BRAFPyed1JGkk5n5k9SPjwCHsiZy36896Cjx6JJpGbpjni5fassL2SfT5Q7TBQrCu",
  "key20": "5qFtSZkZYkj3bEHg5g31nMJjt5L6kjDnyB3xgp783ybK1QyaVyWpxsNDxKpCjwuaSpiHqMjAGYuji9kRwGHNqRCQ",
  "key21": "Yr1A67VoDP8y5bwDmDboSTMFeaqeGY22CMibkUGWESrzg85Lk764P93kkkCiG3cPLjG3nvNgB7XqWnEeQin14fc",
  "key22": "2Ld5qQPNJPMptP2uWN7BS2z66vtFBziQyZo6NgFyFUQMB2kwwbNMa9knQYxSCNPCB65iojmxtvkaczgr36BFZodx",
  "key23": "4rry6G2spQAVgBBiqQq373rr1QPjT57Py87LqyzGosGiNWL9Rjhtncb5wV5wnTybdhUC1CFPhyXDaSyHmUU7Pcuj",
  "key24": "3mK3UFww1qFpNsQEomSzfz7Qa9MJAEvgmum65L7CKjCZpjAarkGkkBu4hYsEwCVejGJN3KpHYCxt17sRyHR8MoKe",
  "key25": "2cpefSMQVDVw92iBpvaDkkRLih1auQRrGfi5xhwwnCKkr7rKdaP3Ct7yDhdafM2gEaRufhNbGvYyzhsEa6kyX6qC",
  "key26": "4bRy63bPheYGhEbjtASx7Pngf2sPzQi8yn3vDD2oFkQQSajtEECjunzztWoB6SdGiZw6Mqcg7v7wV8U1xUZhdsDd",
  "key27": "2Wvz4GxGZEP8FCGZoZ7TGeZMDEC4bP714dSKGUH2PSwy5NzLWMtUjTrWRL2zhC5Lc1ijsg3yNC6scPZEC167pcUN",
  "key28": "5SnqXn8KjUtpZQpHSEHnrWLc5pRThyKsgegGEy8NnajJwcgm4VuCnqeQPhGjJfJhygdpsr7xFi9MDoyfZNPX5zHn",
  "key29": "2DjuBLHrRMWg1zRpnoyBvtxVWH6ge7WD8MEJ48KSjB8Jy6daLMQoKkCSuJyiYkBfvWjx7bSN2GtUbbXfHN8KsSQ5"
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
