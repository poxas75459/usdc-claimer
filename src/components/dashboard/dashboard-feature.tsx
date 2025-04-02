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
    "LE73KyHpLmpo7pjs8XNN35dAQw45cNoerguLQHZfPi9ybT8tj89jEDVQZunvVHfvw38x8vxpaUs1S8j6HhVsaLo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42p92NQ4p9hzTdkCs7cbopcxXxffuHxpp6855YppxNwV76oH6bjrxUHxVpPb3TC16ao41a56t1fkrqz2YB1vdw47",
  "key1": "3ZgJ9f8yc6YAC2hcxa5zQq7tQDNyXVmScoum55LNoX3yj5PSB6xeTsMFp2Sz63xen5t6wzFjcWMpk7vZYVtqFKMo",
  "key2": "4NHdUcnVBPs1CooLtEYohpYXA3GAkf51PE3qZTEJZTGupckKQ45YxDnw1ocNNuyoV8a5p9xUfLKZKegykEcmW5rj",
  "key3": "3G271rAn6LZ2W5RnVztTDrvHyt8sknBPorizjYP4TSzuqGYTMiy7kSd8vTRrRDWm16iqSZ3GMiKVvJY4es162u2X",
  "key4": "4vJU81gr1tDCjXvZPBgzq3K5jCuenUvezsGaVgMstY43gUEZJejegQQqZUWxH55H4nkQx42d4rhnwp848rHZZJdX",
  "key5": "2H86UpyApNoELVu8eemSKmpYW5iDyQhGsD3YKpRS9aTKYZwjvByaWTHnkt1wNouXtEVNfGyizYFnYcRgaXXS74Z7",
  "key6": "4FtqRD4GsW4rFpohsQiimMdFKKfTTBaYT9apo9Pqcku9ruhXRkns4YnoWqXsYREHKdTB5fpuFNSKEdqx2AUUCgxw",
  "key7": "4sspJvfXXEnqTPVrkwDK83jvtknVFhf5RtbeaLtLRTR2DPs9yyUSCHoC65Cgxho5ETpARTvaiubLc3SfXmSqKicp",
  "key8": "5XhA1QyEYLsE1J4rHFAAwLFsJfp74qctedEbCtckeEp6BNYhimvUF9qYnzsQW8C6L1i4RipxirJWR9LYC65mxMF4",
  "key9": "VWqSUtfbzatiWgVL3P3YHwMEyTEopC2sKvwHRHURhbUvQ2XkL8fsn2FnYKMoD9XLYxLbgRgswTgrU4ZrmW1Zniu",
  "key10": "62nPDc78t7Dj2famoVXBnYXfSByfexnaNyLs4qu1LbrMJKU7pbUZAxSoZ9DVW9QcRMsG1EaL6TfUf21piCj9eBRE",
  "key11": "2Q31jnPUCoPFRStoQTmXHkXTvV6t3VRbHkb3ps3qynzmk8KZZYk9uvBA18VeA76NhTYAJBnoxJXWQLnuPgSas8VX",
  "key12": "22pPe7T1rmKjNaZc6BadQdH86jfT3fzUTpyT4kAV6qYfea73rTjBbC23r74a7Rw6opZ6bxFfuGW1FWcduM5xc6vT",
  "key13": "32yGxpuHgrJEJNxLkAFoZTwPFAv5SBSMBATbuBkq9eiBVggoD6k1M6jbREafmDCUgJscbM3XaqkmRRNfkeCs6Bqf",
  "key14": "4iEzqiXvcSEe7nm97nbbtsxnrCpZNYtFTDYjE7EmFbKDYTv7autkxS8xb5dnt5AZURhs83t5zVXj2Qbi7UiBG118",
  "key15": "87V3Ba4mLxfF3E4N4Wz2mbPRZR9ZbdnaWtf8UR5vpG6xr7MSW4yvL1etF7PCL7syKfZpoAgXFQsk6cHXtcXQ5Pa",
  "key16": "8QwwgKxQWLNUiLQExg19Rsdm5gQSKkhr1378WXgtNtihiuiViJNrWjcJRC1h9Ty2ewNUnJneDRwbx7zEmxB1BZH",
  "key17": "3Uu7iqFy5P6fxEf4weyP3UnGpKcYGfVLCLv7HmFxG6BmjS1QjDwjMnzT83cexaNijKNh43FjTow5A79dpsjQy9y9",
  "key18": "4hYoZ2uAZNGXAKnMfUbdRzhkSQ93QiYUfs1EGmPYSUb2Q5J1fuQ9qSmTHgoWC78YFTewSJxBX48P3ojPzzavjfKv",
  "key19": "5XRT5Z5XDuVLB4czb3Mt2uc7SsJ7kuQWtNtQJQG9aFoem1pBYK7szCkUtMu2fm7wQpXzBitFMTnn7QZBfW4TNdqk",
  "key20": "4tDTR2PexbR3H82AWJKTPVb29rHf6APmSy14rdN7Co3WqKXhuv5a4qkMcRzKzxLnpJ2iMYaUJPSth18vcr5F4GzX",
  "key21": "BUbdBYYV2twct35LSvR88pT3Q8bRQX5gHpRaqDqDiC33quC39SjJ2XXVYwNmJkTfhBNEdxfdrH1JDv5C6raDJjJ",
  "key22": "4BhT384HmqYqmbGPMEUera9tCoFUyVV2k4VoDH1C9L8b2LAr2iNA5htV27sJ5Ys4BCD7q15chactQsLjDtpECdTf",
  "key23": "zPpCdTZmZVFiUGuYk2ksVmPDuSyHSC666a89sGcQ5BUVuURcCBiP3NsWPSn2YEbbnyvb23jJpxkSrDnPy6kq1bK",
  "key24": "39yKaWusFyc4CHi6zTbjc3mfpYnQJXCJHKmR6qD8EEz92YHVAG5KX6U6BHpJeN9LZnZJDQn3WtP3aqfSghHr4UnK",
  "key25": "3Euw8hJCHaG8WfqLFH4pN7gqVaJSJXU72xuHsJkpf5iJaHr36DjDc3T4rgEdujBbEuVmWZSBYqQnX7oyiRSBx7Ca",
  "key26": "2HRQp7ZjYx2fz6LBeuaKQa26s1aiVcaaGqnNVL7eD656d1TDCcb7qusj7RqG7GTprgQ7d5icTde2g5RVkqdGyahX",
  "key27": "3MCDrkNrtC3ydo4ZrvJTRex1AoTdcks5Rt8yw8d3fKD8TY2jaBaTjswGAQVf3ZQB6od9mCiw6dHjo4ECUYCQppG4",
  "key28": "3hiFarKSozLTorFXimALJEz5n28bxh6s7K3A1JWfzQFDP9WWRLLYphnUUDoYg8Pccu3zGyxaQ1ZXLweFBYF5DfUP",
  "key29": "47H1wWRYbpAKBVVV3V89x2U9WuSVerdYQ8tfEPKLp7KCZiWy2EcmzjiLcKkdqhNKBDTj4Va35qf4266JUgdrdMZp",
  "key30": "5j2DLWNwVV1FJny1uxzLUji9kj9bcwmX23UjrTuJDBVn8VkCDYubQcxHq5RaTVVVMvq8KBv565q3JxW5jAV6HP8B",
  "key31": "5AJTqKLWQLUqstsRSrdMnvSs4bUu5MzTT8MQtThMUprUp7vwtNu9AQaqM9AiBCKfjpeMBMMkuFghkQbC6FyHPTAg",
  "key32": "5m8gYsnDxKPJaMWzCE2vmzYNBLL5XSEjX1CDmjzZpHVLm2Dm5rEhUoDQ3P56iXVaTa6zPvB7q7iHmt5Qk2PxyzTT",
  "key33": "zrLCjm45Ef5saRpSPbqgpXBk7Aq62b7Lfa5zNg9FPtYzDo98bRjSrmCwBNeRVqAAVUmUAKG2j3iqhcQfxkUe6Z1",
  "key34": "5GNRz3myf2naeCY8C1ZgeuwcWXLpxAgj9o65iMiKFDSauPoUTP712XYCzyMy2nrXDyDu8Trqx2ZgGtuDaWdSw7oc",
  "key35": "5B3Jky8FcDwDx6YKCnshjmRQNdZ5RCtF9wEyqyLrRczen6ZLPM3tGL6VTc74NrWM4y5jimUVV9QVpUsw8jcrEQpN",
  "key36": "5mH82B33jLpTFCtAiHnVh89ziYnA6JTm2FsnkKVakWURywUypTLZ9gjDpSVd1j6ZRLUeRjGQbSfmAA456oaqP8kU",
  "key37": "FYERjzNshdUiyrM2Fs5vKWyAJwntG7SjrkRXHQohHhwdQtJ9zcSJpVJZduVaFsB61ehwnvG2hb28uxjTgvR1N4g",
  "key38": "4eLXnpMxcSTFjWXJY7S42mBckcPETNhvtFs5gxQ36fwh9PmSModVA2d379YDMvAxBDZbsNLRnb16z8TSdXBg3Ycs",
  "key39": "4QhDA2bUNmXREF6c4aEH4XCYAseLSi8KAZFg9dWbLsCrRbUih7LXkMNtVHbGKdMY45cZzgmDuCVT9sm2vc7CywB4",
  "key40": "ZpdMHFr9hnQLZygo3nULiig1j6EXqs4mreXkLTtpqBUNAdcXwJkuuQHNe6CCJfzxH1YpLvHfe6racSr1DqcqeiL"
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
