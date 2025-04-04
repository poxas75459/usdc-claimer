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
    "2zQ7cGfrDwhj82ZejdQSdLnsR6XEwtV2UaR7NEqGnxgZR4zBHbNhvu6ccaMW6EbHxgAjPnfuub8rjbzJvq1nS4xL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xQbEWRYBkAPjFZwhe7TYF2oaVbHjsZqY1Uu95DGrzrqpmzLdZRSCYFASNe9Wgp8zREnZu4MtNk6iaVWvUwpMedP",
  "key1": "3YmjveR7facTYKFJeNhkPqRGcuvvvaxLC1wPxL9v8kmTmP4zWjLXZ6zGkUXWDYyeRs4DPhSEXVgjNLAiuTvDrrKB",
  "key2": "53zK7LtFTi3kv9zZSDhu3UXSn8TVg6WXQR7Tdpy6xhW2MxmQL8MvoNDmgNRziQfNbVnNSnieeQGHSZGE4p8DDtho",
  "key3": "3HuvMWR9uZrumf8nYPq6pPYE7Pg2gkx9SXbFyFuC7agsxpyzSCGmemV73nf8vQH5ncUriR1aY9Rt6VnRcJuPPzxQ",
  "key4": "nU3p71y4WXySUqDhvM4SqmqTumRPz5WxDnWm2mU1v4qUyLeTyj4LxiPGWMzqfJLdXfjhgsG9APYXYbkxar1Kw4g",
  "key5": "wDmhDUC4QSMq1oFnE92KwkLuAqRReBaBPzhPZ8ciTSi18KpvFBYzdr1xqbQ2t8gWrYtay6DJCYZ2Rr9HnMn41Ew",
  "key6": "3o3aLgyqh7NTV49cK5U3PEZKktv54hnLDyBeTAfs44zMkf2oZKaGELskNpq6HsQkCbzpUxJ5qS8ArDMfzZ5wgrCF",
  "key7": "2Lbh3BR38EfApvtNpRcTWsJR9Pq6GExMR3uYzPv7gwfkmPS8xNdN6uFAPsWf5LJtWxUYCSPkDvTB9LwYypPy9YgM",
  "key8": "Pc2tCAFRDj5Fpv2T93EfjoTFyDXVqYWyHcwQpU7ocUPTZ3gY6wqjrZ5TXSnDtyE8U8NeUGgbwVqwsGzSNmB6QPk",
  "key9": "TWZ1zxBFUCCnPCsrJAXJ8VPtjP7Jnaajwua9oARPqdomZQpMWmex8i6y92WbkKGgiiEeAEziHB7MsokcnZaBoa2",
  "key10": "5PCk3TeP1nT6ir349yHNAGbCjoYpTtU5Vp8HBdiX9R9Kd9xjZdnyWVKw95bt1gN4NZo2G4qjEp2jTzrWmW4Hru4t",
  "key11": "4EMng8oz5tqyqK5Tubv3NgQtx6RQNSPSBBBnYQgXf9bdLCZwGTMyE5QMVWYdixeuj88xpJqQpiuMvarHqJ4HujWz",
  "key12": "2KizpvAx59zygzuEjNMTJg1NoVqTpeymUPfX8bv9eE1aTQ8qKD7qhhfmwzhEYj2cFF2z93BCS7BkywvwJD16tt1t",
  "key13": "3maWgrU3HeJPcGrh6zhK12WK7Z7wTqi21Axb57x89XCCLPfaEgomF5otgwpqyCYStiTzGfRkVDtZJ1FeRgEoRAie",
  "key14": "3cuXnWnyczJc6aH6ZrXuJgULSR42d12mBd41qznuxMH8tepdDNCgT9o6myzJai8dTvpQTn4pGqeLQDaudt6qqWCJ",
  "key15": "3QdyTB8U2aivoJ7CxsMuCz7idKEpqPUgCJTYL6XQt3PA7StZgwmaaCdUc1UUpXNTkbPNJDwYNqanQ9stRpVjiUL1",
  "key16": "23qx5D4FJFoxuY6rdCKmPDNEeZ6hTao9kxgSYqz3sANB1CkRU88ZAxfFrqYLWHnSeuFix7KbUPRA7ZPwW5zTywGg",
  "key17": "MLCikfUx3KLGsCLMe72DKiiFPJvGFHEnmZWKJSyEJqtUExBW9b1qL5Sa22wPoUuUAUvyECDUpNch3H6y248gVeF",
  "key18": "2wnfdNC3PjFFABLfnuk8Ju8vbMNPnfDq6JzEJnsTEeh1UpQVJKxyJxCX7V5J32h2P24VBe88fjYc55F1eA25phE2",
  "key19": "56oRJTN7459aopTs3Rn2MT9EWLDrwBCbeQdfu8YawZ5UDKBGQKhheMeqSAWQ5dDuTeqqzju76sNn6UA99QcK8tCH",
  "key20": "2sBwm6iUMBUweH5RMZkujBknbabsZ8GDzGU1PVC4ufL59szN6xuTxXu671v3nkDafw89vujfXMtvwdJ1LeS2JkBq",
  "key21": "WFKDnFDcURu8EHonBnmoGuzZk68oANXspzMKBjwRVf58qPm7rVBun5HvjuzQh3qvJGvKafNRZY4izTatxW1PKuX",
  "key22": "Moc48E8yNgjRUgVYJn1kxZP7cXPeMC4irpUMDHUJpsZH2pMvWvNCiPw1zcP1ZmsjXiXMKVMjzk32ZazY7HV8YJH",
  "key23": "4GoQMMWG6jJK5x4u13eR4oSqRR1LgrinoyB8kLfi22LAwov3cM1USntMHY17trsXvb1QFJX754Wqo94zQW1wK3De",
  "key24": "4W6LikcAhrScP524ETAzaMtefbTQUPZ3KiZYfBsowbGs8m1z8gTQS8oHe24GmVFFJGnAcUGASKDKoPoTZyRpQa4z",
  "key25": "5U4E2pMFcgxVLUeZXDCFf8JR5TSyvCXdyaqiTMbPnMDPmvwPimu96eavqogHdLVy9jGwaiSHdSxFvexwwqkZsgge",
  "key26": "4ZXY5gQUnqXtyPXpaeeRdZEdQAj4FTiFDZf75jJo5ijm44hK95D2aoJF3yoZfCKbLV8DGUiG5NgC9XH9mvTxMbCq",
  "key27": "2K7UQEyGqa1zdMs71v6jtwLcStrqVoFd3GGNKktED8FhifQcNsdGUkMjxgKQ3ndCnhoJa5Sf4H9WR2wwdkVsQNbU",
  "key28": "5qksYFP1tQDUijpe8YQBTVxnjUE5zyTeYwuaGrmcFeccstZvG7rVu69n6cf7DKspg7Rv8ouwMS6WfpKdKTwAyvFT",
  "key29": "4CNx1oSBQjRx47hDYae5vBc4tZNppxUefCdUq9QP8DvH1Z7Y4EcEjPXyDVbkgKvMrUZL4h2Rb1UQWA4EDKCdwuoL",
  "key30": "azXZ5FhEHXxvHewu1CD1tmVMnu7riRDroBm2eXfiY5UXWRAQSPR3GjaQDknExSDy8RWv6fzGnRWfNDiqRHg7bLy",
  "key31": "g9jf4y9Gh4rq7caA8pJDZSgj69MTtq1EffU149Z5zEbPUQKs17R19nSZqhJ95K2ywf9LnQsaUib61n9ahNu2YFe",
  "key32": "3ENEjEw7ViBVoN7KprUQJu3EorxUvnThQ91oA7fBHqVdTTki6JfUSw2HvsM8Gxzm6SVuZ1NbrEHR3EWSFtqttQRV",
  "key33": "5utY7iGhuBeyRzoeM13YgeqdXeCKkEL5pq7mpJ4EHNHovvUPw3Etp1NjqGv5USD9sU8945g8WwnexyeirpVkExzA",
  "key34": "2foQVq7P43G1TbrQz91jriQWSsKfv37tDF7xC9mipEhzFF3jmTrkNC9jWWycShxus2owJYgRNEW2TnVoXmFtyUXE",
  "key35": "35FfhegNbhNaJKp94SPBUdm9WDMUJ1iZCWMPhMduSdnfaRJ71cUuZnvUuXhEsvK272GTqybTjHo9kF565tBnD2tt",
  "key36": "2LaCyFHNXdHpo23ANdD16886S8PwCnip7zGLA6AUC6pFkmTquTz4CXkgaycEtR53HzjKjcFY8dKM4iYBt3cz1sww",
  "key37": "2f8iCLdoLgTanZb5CuM3h8z75yZtWgUjbECzXPT7N6jNCeFrf87o2bzoRet93hJ5QVJzAJVfyWCeo7EMBjaQWeVS"
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
