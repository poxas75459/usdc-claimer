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
    "5XAT7HsubQ8jp4Xqua3YGfQaFngHcmaA9BnhcGdk9tcVKYM5yh3ELRWHF1mXZTWkK41vXZbLpKyrkbgXqp7xWNi4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mRa1Q91xVuW3vUrG89UmevWVSWzRae2acTXtnp5cwpkmL81oVVNWuttAMjC8MqeYRitQyStidnzKRaj4MvquCFQ",
  "key1": "bSZB5QpxFZoeswE7iEiESiJ5XWM5BxmDNBUqGrd6FCfhc7zWEa8vz81ijwsehzpsqRthGD4vqfbBQL2nF4JB7cd",
  "key2": "3W7SSigX4svBbkoPCZUQWjdQPA6V27fAkT59Z6Pe7KF4S8LF9udAbXFUviNN7X9f1m1Rqanveu5xoqitA9CLsYaS",
  "key3": "3HJKdKH9gAykYrAyG5CxDDCoEsoQDJP5ry2gS7tt1abN3PDTm1Vmv5qRhEWDQk3PkNubD9d9EPc4iXA7Mh9JeSGo",
  "key4": "38FAX2ws7BsNmhFr9LLLC6CsmwcsPZJZh4jtogk3rX8ZAdaYJhxYVVyaVytd3ZR7oW6A8QCL5AxWbpaRpHuY9MHV",
  "key5": "He6ypzduW2shWCCvNeCQjnsqPQvUqGCphTazNR1D9NZv6axiW3skQTTkDUVd5iGXaSzQMevebK3VcwLDnGoRSiY",
  "key6": "5mTQouHiHpSk6B6NC3cQg7zfPk37vBErHJKFiVkcPDNDmf1Q33VWknjYvgNRrJswXCsNjMLc5ntCEUNttaMN77NH",
  "key7": "5sKyygt2iJ84mq7ZMZgbLD8UyT5zkeLqC6vXdq4X7DcUzp5kagNtcu65W22QKHRujLtMdbJ6cPiFC3JzK5qckzmo",
  "key8": "3dmxvudyFC4MM7nPTDYZLf7eFL1Er6zQxox175RhZqyqiPYPsVk1f4EutTTcf87yZphe68d9ihV8gB2skf4c62Rq",
  "key9": "2UXrjU133PVXXUFYwUQYpM3NgE1Qks5sC3QPwRfuHLLUj5MiQc43xoJD1S7k4Q9AtPXN6YRGvQAZMUrQGypT9nBt",
  "key10": "2WYoT9i95HL9pG2KVw1rdkcNesMnyVJGtFNHuaUy3v3dJ99vp3p4GxTKyje4yt4dKZnUEiKELVFR4cDh6AFpqqo7",
  "key11": "53pz7ukp53wdkYfiBddjJZMU7LHHsfCcg5yRiAgy4qmhVVybX61pJegMtXqh9Cr4dYCQUZszsutWrjopqRavuboV",
  "key12": "4YLivbyB7VsQfViJJLTZKYeC9m55vt7H5rRLNF3qs9evwmMArybNGk8gdJKKC2ra5oJH4yrXNMGBmcmMmPkeuCG1",
  "key13": "21ahQfJjHFQMQzEVTGYs4g62vaJVrEBzH6VAq4Jrore7ARg3ErJZG5eLhsisf1VnhwVjqMDvv6o9kjQwToSqfxUT",
  "key14": "3DRZti36BCFgLidtRqsmYNpgif6Akpqmy9sJFvAzcdzz4zXY2cA8VLiTDSFykq6pDZUmchtxDEQpwKSxuWiKyT8h",
  "key15": "5mjujrQYDZA4N4m1pyhj7mc2PSUAKueffBXXUpAmvCHAQUZvS4Pwtj6hBBK6cqfhgd6tk5rZxX9h7F75zn5BwXgU",
  "key16": "Jp2XvcsbhPxc6eMYJ8md5pkGyEc85RyVUBi3qGyf544DiSM545SzLkapA2scpY57GiWTDdzpBoyjyDw2zxmsKTR",
  "key17": "5FrDXdamXmXKUMnBc5oivr51niM1QQxbgJeZ6cvgAqFctxvmwCVPiEpN4yg4gxNRtKgDW8Vyv2RLzBBfS3rCn4Ke",
  "key18": "67EyGM5VVLfhPGxQNPVK3eDoPCfGop41YJwSjd71gkNG6dbt7mxjjBzzXNDdTSGCw1PFMPc3tMUiszwSQJcxnqF",
  "key19": "4zAZ9TH8K1UZLwgnEUDBDkjrCTagVQrahupLXa29Sb932vPCF2Y2e23w7CGvbYrR3GBNf5uVWnuCAHMGgQDcm23k",
  "key20": "3wMwjpS82jCBdPz2v8qwQ7bQCoN913N92gwLzSXcu6sDUDhUazUB8CFmaPrsvaXeokRmx3zQP1zpnzvDTn9LZbQg",
  "key21": "UWK7mdCx1D3EQZUJ4EF5pqBxxEDtmHTf2x5in5VzqW72NRziNYaxYi4zEKTtHTFPAPDYj8dEvNCD4DiGKFfH4cM",
  "key22": "26d5x2rVEq6oKX3w88hESSzj6rMSV1wJHkYRAyms2Rm1THBWRNsYjsdDyJgjboEMNxJAT3UMEnYuHFNkhS3Y9vry",
  "key23": "41Nn4fgQ1BvtHfZpfH2kRPveeKDWA68sjikeGQXGuw8V4ig21VGQFjSUw7kqARfitzy5Zfe7s3GUPUTasaqeoWdi",
  "key24": "i5GG44jfCUWWbyYkdkB5R2rFLLvepoYUpRDHy6MvEqHuFSDBfiT2tjW1F5mFRKzTUqojiBGTnFe6Y2qULWS99ZG",
  "key25": "4d1EXP3B7gH8dY9BTJXCHU3Hc9h19o2Sp9FMf9VdTp6sNHU5kFJrPaCwaXJbgshb4C3mUhpamCt6KNa2kVMASbXu",
  "key26": "e58cZWUQLxjnXJdw7kUWgwPS6NSZREy13twYzau6WzgpmEW6PeQZSi38ay3bCxzsDU9EqZF5VTHakN9dwQt8s7F",
  "key27": "5VuAuB2NXjWuxFDSfjqHYLgWYkiLzTKcQsHQnFHGmrF1NnAmTLN4sRbiTjtQD1UCtvLUYiREB6vNtCfwyciBPEoD",
  "key28": "48dNU5iU3jHE5d6ke9jqnJaCN5sDkXiZjjStRN8Wx1a3Qq75x9JHxrxb64GQAKCvwxUpgq4bWvCmGkaaESeWjxpS",
  "key29": "2DByEju6LkSXGfwGP2ZGg71A2k8jgG57bqyAfKuuoUSc3DijdzVW3TrMwyTFwZxL7aGm7YiVmbLFYknm2tWp3cba",
  "key30": "4EWE3SV62iq36gdKwtiHfs5Gjn3MbaMowN7ky7DkaCNPa1M8rCx9uS44byFrNtZVCvfJSAp9sz5a3yGjWzCk3vNF"
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
