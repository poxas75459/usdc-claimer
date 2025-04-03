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
    "2KWsN4kZyaWNmjP18Twkh1KAPz2fgvfFw4NkhyP8wrr8QCVPi24ahFyAGMrqMNP3PWXZJNZQbWXp2NqAgQwuKBTv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26ude6us2igFFgH68BsBmmNWQVjmBE1orfRLhQYnNPKxBuLQGG4JVbHP4zeFELA7GYfXdUSrP2SmsBu4BRxX3dLz",
  "key1": "4VdVwybbRGB5WxXbSvrYcnpTu1a97R1hUnspmaWn1mvrmxDY3HHSEZD27JMUxYhzGASCW1bKquiqFr5eMiGsSNKT",
  "key2": "4h3aaeySQUhycAcSijUsVCYua7UzCG5PPc8q5L6sUyAmD92hKqDGyiMqjdZ7PjDAVnT7tPADnPN8vKjMCzj38mV5",
  "key3": "nBAxqpfb85gGoVf3ZqEzg7FpLUYLetFpgH5XRYvsFiBdvr7pWRhyWGtbwEbJjcYiv8yVMgfBdz7pzaRst8jcYKz",
  "key4": "2D6ePqkQJ73YPCZRbypMyrQnQB9scRUnzNvAEiZ1wc4s7DtbQzH9yUpMXWgKUE5j3VcgTSi3m83uLCVa2YZu3Twz",
  "key5": "5T6VNtZTBK7Z4miV3Bp9KgnJhKkxNTD3qo4BWSVLM5kPgLSs6dYiFzhdjT4nx3wTaZR1nwuXs2L7e5gHRtpK1nr",
  "key6": "8SxYqQQd9zjS3KmM5aUWKydJ8C4fYqEE476k5RfMpp894uLGE4gcRWg5WMf5j1pk4Q6wr7vkw5muncouotyQdyX",
  "key7": "RdPq3f6JbYYWoPSvFHJh8pyU7EKm3cphk73ZRdY56TPUSw99dUkMswQLChGkhWRzSQKPzUvgmZPd3d7hQB93vpL",
  "key8": "2k9QnXdtjkToKbUUt3mK1A6BqyBYvtSb4sybypHBMzajmrgxxTCFiioAKbiFfmFwRy6pfCpchaex479dyT8YYZ3C",
  "key9": "2pZbQ4CTFc2Jxc5jpDZPsgDv5ARvUwt8sVaSfPp5s518mCuhsinc9kBYGPNL85eJy9827rQsHii89pYBCEqqzogb",
  "key10": "3k2qhCUb2CpPeY1Z8B3f54T9cY2HV5BsmqQT2BJdQPz8iuEX7vDErQQ8mZH3ySrxpUMddwwAR3hJU6bzXPR5uZsm",
  "key11": "4yoihQQ7ppEEJRLrC3zCntcMA54VMkbpsjbRJDww5vJen6ty7dsgPwFbWM5CCTHosn1VGTA61CcUX7d5hJDpW1Mv",
  "key12": "2trtGL4fdLib1JASTjvpuM56XyYneTwnqh8Vwm3UGTP2SRydNk8LoL7Nwn7YjCXfNxtaypHnX4i8SJkZEmDKejFK",
  "key13": "3n3gwENBDDszfnc9NYxkk1yYo7wLaRfAT7zme8NN5kFQJvRVsFwzgKigTWFuQSaBSCZDosurRQxvs95fD25THzrT",
  "key14": "4G9erYvR4qzVkoCEJeXeYffX1q18pj3BERGW19wPiqn9kyProJHhwGHKEj6GGGTL1uSZafiRcwC49tvYQhrks9Au",
  "key15": "2Tr5X4cEhWaVydyeLVxKqrczy7UiRQzvvU3JcYUYtQK27GEZBsWJRE33PQyiZEDCL8KbdhbD27WsGnr45pseNuBz",
  "key16": "3xi8F486MPACBwiQjdeovVoFNQLM5CY7s1Wrto2xU11LB5c3uZ5e1yCRTWWcf2oRNZ4zxR115VNBt7Ds485pnuyN",
  "key17": "5oHetWEDx4ouEFnsXgEmiJaxhF4AnCRx7DLgtXyVJKFD7chFqkFmSrDmQ3MRFxskR5BacQRA3FiWXcnjUZtaUkgC",
  "key18": "32AjCLQ8rvuztzfdJP9FNcUtzfrC8jBk7QtjqfT7EHWpaPKTjYcGA26c6EA931YEEfFzRyohUA6dbnwEqePJafc8",
  "key19": "4Z9MY3opiJkccQCtYz63qpN3YHeWEuYhi27PJv2RpgqgzrzjVrKRa1Btzzq2BVNb26s1DggPDaXPnDjbCyVYnejw",
  "key20": "3XHQhEtYGtzvC8yiw5RxLDB6UoHvvEXbaA6uMRnyMJEFxHQBepoZSi9yAHrPpFKhXzreCg1U2bdkPq8PitZKfJtr",
  "key21": "3oVgkLni7urQhR1v7GJimae5HxnuALmc7444gMWgGZb8G6Pj7r8et3kfxruK3HDd5dKzzoiAZTSeAH8cfpURw7Ko",
  "key22": "5PsV6CBnKSP2SsBPtHX72yu6n471oTjCFsGBf7eQ8yEedHES29TPHZMZ9byGJfCDx42ejFCTP1ZecJ6KQYr3E2E8",
  "key23": "4VBQv2rjY6kjcD7j6TUgp9DddxJZSUyS7QXAN5U124wTVEHu6XtoTHSfibNKcJjnwYVNDZAngnLPX4E4rC9DHD37",
  "key24": "3AhbhTWWyzh5DvigFhQMWRuytkjkh6jbYVnGq55V66bPKmkr3YFMLvDVsGzVHkmF26NEQYRyu7xd5t1MAkcvMyXF",
  "key25": "k1WEUpuywDRyExw911c4tGGdJSWPkuwiWxxdxg5wYQZry6zBtpRNoUG8GS41LJwuZ1PbWHM64gvfT6aQMQFUTmk",
  "key26": "33sCdiTA4zmYy1EKdw79A7dYkMuZ5mgtb2J43FRzbRjauMuB5Ay7s1CKNe319rxKQffebxDBJayvRxXUkkg2fWBf",
  "key27": "4aYqSyb5WGFnPTiG87TeJUFLVykSsKCG7AApbwcDy7kF2ihagdGWATdMpxkDcqbZZALV8VgaBYWhQDYgAHbB49Sm",
  "key28": "26fKGZvmvjXdyeGMW74J7f3wbEerYhsGVrMdKnzNwi32X5cKRD5XhH8kQoLLPfXSMyzkpz7pYcsfnyGSoT4UYaxK",
  "key29": "49KeJpievgiHjB39qC9zKMiG9NGRPQctQ3AyAnoBWkvcvu6uma3yXQc4hqbTj2z9hFYE7Z7rS4HBQo5PbDm12dw9",
  "key30": "2fE76SfKLHAVfuJwftNBTXrQBsbe8E56qoFQ2VNBYr52qKSoSkbYA1A54nQyGpEqh8ReHDo7bvnbxh4SfmswBzLe",
  "key31": "wozE99FKmVnZGbcGeAkjXGQUqSUEFSQ8yrFK5Gt2bUEbsRF1qaKcxp2z5dCMUmfPg16vwup11WXHi1zxZ8xvrqj",
  "key32": "5rCCTsGhL1SyN9aRmLXAH6c57bBUQeznLvdEtN5wNf5MytFD7vU6JtYZDRA26JSe9CiPvkSpbkFR5HYurz3ZStfb",
  "key33": "4L4H4kfCHGGgJ7heRYSSbvVUEDdtsmxH1e83av68ZTPKmeiNgEBGBnaXpRg3GYNiy1GcB7Q2j3DdhcMrrjAV2Hcs",
  "key34": "5udVn1xqx4wjWgohBQ1sWNybpSDvmrrS32uC9tJdLhRc2ujRQK19hT5NFGsdBHiYEkX8jW2AH3ZnhYCkJnzsh6gX",
  "key35": "TexZiKAPCA9XmpU5n3kihrNvL1wnPZ9s9ojm7GFkZuFPPwsEk5WZHjrBj6u1fGPVqsJskyT5jWjfwnu3g3mZkzM",
  "key36": "mjqCW3joWkedYCmrLwb92DMiE4BbySuvUWQ6ScitTW3Bhx5BzDn9aNGgeTFCkd9AZaxEjBkK6ubecaERRq5vBK9"
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
