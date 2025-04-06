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
    "3HXeJQ8mWwaNqsnLg32jUVXRBVBkSaR6NP9gJ89XYjQoFTgDK2UY5yqQEbPUyV92XDED32Nn4iDbdQrjAQokL5cE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TrbWpC2ni96k2t9AE1hnXDvTo5nz1foCE1Bswv4iV2pRph2mEUTdDRhfQsFkewefeBxS21FAfvzp5YJnUS7G9ZG",
  "key1": "E4gXbzYpcuQbNeDz4U6KgVVwouPybqHjw3qcccAVSJcvMtnfjrv9Ymti68KhqonCVNoQsNqwNAgs77vUpSJfkrd",
  "key2": "Wof8CF2uaWpm9PA9s5sf9LhmmCCr2fCPrCTYbv27FMMkNcn8RC5cpFDniMo1Aqd6CkcvMkboAxXh1Jr7eYFQjiP",
  "key3": "4EJVxKSGg1AnRxeH7toDFBd9UY6eY2HdkTUAEquxQvNKNno9iGuX1vGATT3ERLiLfr56MYSBArgCuxidQp3ftoWL",
  "key4": "52wm8hajXmVprA7C7oueZQRXyL9ESL6rHfR35VtdJanZyKLmGgzDudXX4e7mks7EbJMhJaikGst9g2VgXAs12S4J",
  "key5": "2cLSyT157mvrPAMfu4ku15X72reHRmadEb3HdmMZ25hJgJ7jXiVLpb9eCVMi84cuMjNe9vGGKv3vCBC4mhXgoWfb",
  "key6": "4fuzHvkpYFsZnv5sJwL53HYnDwdEpi6cxRvu5kAzVkEB6gxUZAwrF2zb3N98GCeD6WLyzyRaGJUT1torX7LskQ6y",
  "key7": "5nrqVqCvtHtZQGmhCt7wyHaegub4kf9KSEHSXrMagwh6qBczGfUPBdYMgwHQSZJLwtLTyZG4FPqpk4oZswxyqKRj",
  "key8": "2RRREiCaGbPqLpoDeFZnm5Z25wmzVCsV29WwNpV65wpWTsnzpL9fy8TB7Ay9PZr6iczsLF6eibxEQsgjfBTjFvbZ",
  "key9": "3bY1NXpw3uA4nmjmbaD2aousyYTBJsdUcUMjZowV7xXKpQMo5gk2ASNghskkhamzwR6nJKExvbnR83CW4AXHL9Xs",
  "key10": "555deqo2CL4tMpAKNgGKCVMaBtJ9JeqdruYwh9A7n9y9jBc7Dj5PjPZWeTHTfngkvjANTHgnn2GxbkrmiLFN5mn9",
  "key11": "2dsnV1oSwFLB93hcjETYSNJFNZ81hYFyseUEfkNaxPobqgWUvjRin2T9SDMpJTP3qe7ssfQ1Ynd1KY2zNPEaNZHL",
  "key12": "38dA6Cdsj9v9GF1h6VKDJXoV5x78Micfje32bG62jiQGnuxHVwDu4SaRTjj7wsUanEtK2dFpB8p9nSb4QPHinghJ",
  "key13": "56S2sQZ8ZUvCkHrHCYsCpDj6jVqHSsh15XNb5Ds9BzAewbqPu8Gzj2PjfNno7toPAb5NdQujCneyP8wbmBikNvH6",
  "key14": "44ZEDLymJMsbfM2y44M4e8SYtPsUFipzeTB3Apb68KFPB2xVmj6M6vP2AQVsjYSLjBhpuWa4mSZDdJeWetATas1Y",
  "key15": "Ek5HH2nPqcNKz6nWmKLUp5Joc6FHTqnmdenej4Kti5D1c1AxJdSjwz5DRALYJyYiwPVBfu1jWffFMfextLrsK6N",
  "key16": "5Urv5VnrvmhPNM53GyPX4ur8h2VmzksdXWyo1sztvpqzcrx3KuuHYrNFbxgMwmAU4JrmrvZWguFPajzUwV6GvxC3",
  "key17": "4ehrXoTdi376u83YYwPjC7b1o7fGk82QVYJzvqAvTzxg7FFnVpkJudYHbjyEXf5ZD8X9qcSpqgMJ93r6XwEcfZiS",
  "key18": "4jKT7vCi8FrWgy44UPReG4WaKTA8PE8bmRvvm5BaMnLD2SESpiUiMkT4agZQA4e82LWPeDC3dqiLBBp9qGMcTGxS",
  "key19": "61p6i3k3EyXVKVLqyzHZ3T5E1XCNyHVR56gsReaoAtXrzcKEETfHwYr9ZEqfKLcFBLfPpbe1s665m1w51WAgpNr7",
  "key20": "3sVozGrRZjvqixtzQBPo3wjjw2LjhZmgADuorzjh2MSZQg5wd54RzAT6mQmmoA61sNnbn9Y5X4uBP86Ak7cdUkXB",
  "key21": "5VwDJspTHcdy92gCRxbkbqewchjMB2MBV1DTd6p3ocbntMxx5y1gwBh4T4WhFEYQV63hyjRDDp8r9qmN1JmWntb5",
  "key22": "3oZKntjkHTe5QUV4gFSH2vj9aHcB6ZmMX4M7R4WnUZywQKiURBeyrbM7rfxReP9afRiN4SnZXRDgD4fktVWcCAAp",
  "key23": "2H6SnSJw6YRN5YwdAcmhT3ystcUw8Ahk6kS2CiLVvr2nNVQYh9vbtbQXe1AQLcrRDsAi5bbT9vBK4kxUgJ7qEdJn",
  "key24": "5Jdb3VAXoBnTmChzajYWHRmrYTkLUD8H4bddTSo7GPtcGsswFa8yaDDDbXqi4daMWnQCLLCq5cDM7v5vu28ZpzLW",
  "key25": "aGbjiV5o8wpF5kQ4pEWA58Vc1BsdybMdenk7tmzZfA6RE3wWmn2NYMQ3mur9LEFXuTbnWyTsejwcn9SfXarWD8W",
  "key26": "2hDGzJkXV43sschx9v4BbWCQNH1wkBJLoTf558rFA7APPh3Dxd2hTNuFJMAvVZbMLYBW5ApfJr1SGtsnuASzvv6w",
  "key27": "3pVVpBAGxK3hM1yv5sWwV47phbK8oUJqgw1Hmq4eiGgQttxnzQgrHDiE7aaMwS5nAYjViNy1zMy57GPJjDFVisN9",
  "key28": "4GqLtimicU6xoC1dmmkdaRURjiSy3xacmMV3i9VVCEH7TLNY4txz86YARbGbJzLPQXxgii3y6QknJaZR94e2pksJ",
  "key29": "58VxK8wgF3HRhFnk9WUDsTnrsqb1xbT63aVWb8D5iKtFFDm8cRDzMgbdoYgWctupriYwPUTHprPGDFcEndW6XNX2",
  "key30": "3oSsNm6YcW4hH8RfddbbfG7RWsFxqutSebkrurDsX57CbhDH7rM9GXBrg8HxzxPjDKkJCoEgtDjioEc4QFYtcnvn",
  "key31": "5XDLto4SQGii5k2b5oficz3dRffmdZEFeRr8k87NtfY5ne6FkpKKtpWZ8EtyPCfJ1R6EH5gxL9T2ERpRPZgfYHAK",
  "key32": "NbmVVHcMy12QaB2fxVN4C4Gv4pDCQF58c3pLwxCXyiBTzN3jrMkzWEzT3hxaqLvx21SYgdZxjmEX5WjMiKiQHca",
  "key33": "4draaX21SmsKArjPyHymaSPR8hoGrnjYkC3VXBurC4zu1iBRGCAAeFtFjpN2nxEw7ngNy31DsMbrLcWV9z1wEzHA",
  "key34": "3hQNXhjCLoy67mcqC1Hvj8hFr16u8G6ev2rsqV9b7Smw6qEF7jY8frtKL5N4cJ4TWHPG3uYDKfcFkHjKuvruBPPi",
  "key35": "f9AViapWhJZ1Q9KqdVfum5xtDAZZcyBP8fVEmfVrtKLiaJLYvwF64JDkjR5Jqgta1wx63yVKsSzYrQ9eVDffsFD",
  "key36": "4ByXxibxYbT7UgnL9UtsYbvYVHioe6FPpNTAQnZgXE39oMotRUz9Qpo6BVn1YwAV5fbxtcbeKq1M4TKoGrAqi9Vd",
  "key37": "5BCRFEiDRA7k3c4piGUryaGA7WhyjpZfCLeFtpY7hzBnnJvsMP2Ac1cCnof5GGhukszDDjuXzxQ35XR2RsMakz5f",
  "key38": "5bxSPdqUvwqeN5jr1EsFvH3GaefjLDXEVVb8QvSAdXsg6i1WKZ6gYzucmq41x6Zu2FVG2g6ixyCvhtLVYrUeWgFJ",
  "key39": "2o2gedinfLkqJNckzJfqz1dkZEvCNRTGxKgfamrEs4sfnkJTHYUE8GRY9b3ZEN7J9gydbxAatujo5BuBXyRygN1n",
  "key40": "48zznD1XPfVkyUMXSZfaRfHZEzdQykJRYRysty4k6qNQ3JzUCNCXf3sRM8bSsA3m2cRzRgzRimqfZAmWkttAf2Ht",
  "key41": "9EnVFFMARkxpN6djGL4DY2Mg51AVGp6FMka6TiJ7UuVe9PnjU2aigLpNriUVBbfJL7PTs8sZmSKkdqwH8bEE46L",
  "key42": "BVruFzVRjQEU25CF2JWGz8fMWFEbymxpGvwkkppLTEfw7v32BgAEjwm4vDHRFTf62M3Eb4ipp3cnAsLSFcVBxeP",
  "key43": "2HGussKbZ22XX9HviFATamrPu5Wt2yWYqeoWcggRWS4R3sV2CcnUBHgRr8h4epPw68zhq4wYhAWX8S4hNHfgRNdB",
  "key44": "ain53y7DUBvFoZ6KNoMjpZ1XxxjRt86fnSqcXetSdEihsQQ8JZgJ6xZ8rEWMxRV1kozEBjLHQmv8a4BDxUuPRDL",
  "key45": "msBd7Ukz4mbAXRvedavfDzY8B2dBKEoekSH1gBNxGDPMpSJcwk8anEtobt6jG4fo16j77AfPwY5vNdVn4PJe9dw",
  "key46": "61cqLTkUF4TCZdA6stKhi37dWa4K43ssxrVCcXxd7aFGFb8AxWyXTX32r32UWwyvpwDaibxrBsZvsZVt4YbfRaio"
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
