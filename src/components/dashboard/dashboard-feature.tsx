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
    "62hZsKzbrBokRhjA86rbVFKLAyRKs1qh7XSTef2ErwTtdcD3fP3sqh3UACoxZJA9tYbGy2SriTEbot1UcPf8mNim"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hcUtdfnS57ggEWSDpMfTy94m5KJ2mbkYs5CDc3gAo4Gkd4sM4Hs6Qx1abHYbo2kJ51Zmpe3HzRFKJy6kEtTYpsJ",
  "key1": "3eodanTmW5GExUtyRSS5JQa7GvTb1NT88DXR1hFkz6nCrsmL9eL2pogLn4QGHhkuVdRpxYXjMbppATMsAFn2Qcen",
  "key2": "5MXPyqL7WXPTMmKak5vHdYc5KFWzQPXoAHzkfhhox7mmJJtTvxnWPd4bE9H6oA7SGwUAkZXoVvy8dHaNnpUwoTzY",
  "key3": "2poE9zoBvBBdpXKYKvyo9GC1n35VSwbx262a4cVrg8AEzDUPYucYSTcvh8rN33fxNzChkszDGKDJt3hMWfdzUNz5",
  "key4": "4pXHCW8XHZGMzU52w1daJTcTcSh2YbBt4QJDnMmfd7zg1w6UUZxFxfwRVqYRc8YtvMZtNXDSzUQtnjVRv3DFDRqw",
  "key5": "5LAudhaweUiSDgpVVzBk5xjMgmcV9rj9dJbknvUpQxZiTN2sqeSPNXT3HWQhVAs7ntUgXM5iEwnPBswMqGFbeiGr",
  "key6": "2LdaR3HdhkzSsBiLs1JDgLt7GjtKncZ5oszSvrF7jkxApBLcHmfubvm5Uo2G7RvpztUuB8rXk3RvGfZZCFCmHrSV",
  "key7": "4meU23wWFcDxzAJ972AvUmdhWihCAZtn9VNJDEwa5oeQGteadMW5YtGYZWPydo2ZiGuhY2z5NKvyYfar8j5r3DXA",
  "key8": "4LE1EFM9jdbQh6kMjytiLb4fRgKL9SxCCJRVe4uUHMR4dJ9SeuckFFAMeK2LGqtkRmEfxw6xn5TWed1mKT9iTB1r",
  "key9": "3Jga46bvS4XHJCzC6CgYjrgBQko2qN6MGdHNrsTHYtqsU5qqvxXy1DusfkY4dPyMwxi8bZpUr9pG9oyYSapVnQXX",
  "key10": "4uroDpHbWZJTm1nrUQfwmJ6aE9yiLDBoj8GTuJEgeviCL9DiSzWcJUDbQq3TkWY4eG9frzRWufuagt29nPNc5PVj",
  "key11": "61jyWUBnmM4L8f6LQVSHykG6DUtCU4CofPe7gM1HfebuAeu4sv9pCkoBwLWC8wpo2N3mPx5MWXkHzrzjgRZAGVdv",
  "key12": "3mJSuUVnXj4voukEvCq3QHZEKACSofjqpezSKFvnq57W7b38MexLHFRYFkhz82zcUe7kQmd14gYjmusNDAhYAzEn",
  "key13": "2sJErAJ8tMkmMjntnRBKGLNrGFm3CTB4bt4W4hpgGdh9g1AFJHrjLDJDPZfYTg1ihWE3ATt5HTLWrjp5U1rbqhzN",
  "key14": "3ir16LZHH2vUFTxinNVN25ko9jPkUmYDHZCCwFHgSB5XSVXZGxMGaFfJg1rkiewsHGDTxiFVvJpgCmo4somGF2Y9",
  "key15": "Lk8p4Fxp5quY3iwANnQpfDBQrb3Jr9gGU7i4cTewDuRQbguJiXvvDjwSc2kzfqyDEDqG5vApKwoXPwRzxGN4sS6",
  "key16": "2vb4VePznDTZnN5U53WJYmAxR1qgmmFoKi6H8xd1pGPvqf4cNWPUqfas6MGBkuafYw8hpupt6TmQ8YPM7JZp3gJ6",
  "key17": "4LA77S7rVtLHSnkA8zr9maFqeiHHmEnou3XLMF9GqnsrCFM88yumvAkpiM5McATnRfwBGcYBhosiau6d6wp6jn5b",
  "key18": "umUiGr6McTf8Qve9AWQPmyCLqZJbZ2snSf6cf3ygKWWUCeSqGUHg51YggpNoRvCoqSrskYKMHeShgFGD94f7PbF",
  "key19": "GVXxCAfTo9wd29e845mpcFj5KB5gSYewSL57ZLEmZ74AY2Ym6FPJe8oahzjkEPLbKMDtjz35CVcwQJVfGUWduon",
  "key20": "4TSm5sYurZoiN5y9yqugh8hiKQ43UgTSsJoV7cYRuzUQD69VmcFmhTuYgvoBapBPjPMPPyDzwMc3mhBSRsoAW8TJ",
  "key21": "2LeFJBKRG2uqHqGFvAwk4d1gdcuFQ1tEoqXcNLjzGqErbT1wi85g2QUg1BsPvgKDwENksiaSuvofLEtgueYbi9tJ",
  "key22": "5Md9xvGQSeDqs6M3BB7eoEouwppRwgitF6tQspJTzeADyG9bhVpiVMVfKi7krfpMgcaxFLxFqgYiYwBrcaTEUgat",
  "key23": "E1ctEH1V4GwYBWLWbQcopTwm9Boi8jRvF7xA42DuVGrfcPNU4nUJvCpeK9BzjnakrNocUM9mRKxrS9NDP6xa1j2",
  "key24": "MY7kpAGBHebiGH9ZbNMvph975c2kBmmwap7tuqedsCxSAva6rNnuVWEEAa23oGLgS8TqMkEfrfdYEmSAkzUNatp",
  "key25": "3c5UBQ5QPLawahStMcoVLFSqQ9wwjVrwfsKhSgHEVGWjyHEiy8V1aVMD4VHCMmYqAtsLkDponbFKVkHohVHZX6Se",
  "key26": "65ZAu5NWz8oHGmBXvCSzBz6Cc9yopdaqhgLzNthSgchU9JP9sKPPAaUe7ews1g4Wni8VZwyqHB6Ei1tVBdmgHh32",
  "key27": "4qDNLn9JK3F2mavpJAPJTBH2sffC4gXWYS2MHnsT951sNkb5Jyn1GqTJNsL859eUKQev12pETKRUa5pVjyitCRnd",
  "key28": "gTSJqdfU1zwSAysc92ZipydggDRsbH8CsvgfNu7ynAAevZ4cRcJkbQouXXVxKQrCTZkrNZR7RDWcsU9orDXvej2",
  "key29": "5arhZx3CoEiTdZ4wRFizqWq4u3yCHPHqnD7aXBq2ogudeeSy8eXGiciC6S2MV1aygE37rBmAA6FViXDybv5zAsEa",
  "key30": "5Y2o38MKyqSsCatFXENMFjofstXgxk4t19MoYEiuqaXB4FPHWPAaFKgBLZMgE3fm5tzrK144joDAKBogayh3XPkn",
  "key31": "3pK3gNPuuiAoq375JVEPT3UMdtd5bz8DDzysynuYFo6rg68vGrDMPkT9iRs83Hp51MKMCMxtMqmZGSYx65xXRGam",
  "key32": "5tmx7AuDV3HPaSoDftrFiDn7xcWdHwJDGKqXyBiDHHR8Kco8wJDK2dAdNwg8PpCG73nRhSrGQrDJ9GJs4PJ5YoHY",
  "key33": "3rN7xfyVHJ1bmu2pa1MoBYyMAoXfXPj7fivXHreagGb838iHJbsp26CTyNC4SJxZymLfKgut8SgfpQsod8CSKraE",
  "key34": "26pc9reCMht6ZeNQLsBg6BLFYb6E5Kpt1PZXWu6j59p5p2n1iSGVjfEfDjRQW52dRKw2KeLo7JSwhFqvvQFGcqkj",
  "key35": "2XNgZeHFKHrDPwk8iTA74eEnrswY9GgWCufZvD4p1E542KEEcX6KzrdFG3syz6t5JF4fWUhecjs2WgW7yQghQ5Uo",
  "key36": "52bDzUNRC1cLeWesC4asLu8QPSJwDH5pzs4PVGP3Mq447Zpo6dFkFRo6sHRVQ3ZPbbfKJn4e4LBQ7DNXUo4UFDFd",
  "key37": "36FxdnfL7fdEHzAo2Ncb2b5GzGaAu1kUy1PmBKUbUZ4BY98Am6G7Uw37HV8NFsmSAAiF2qwBaawBo5mgC9AuX4b7",
  "key38": "2MYKNwjmkWBDti9M5yLU13Vi37Y4gfY1EyyDJi4e3j2gruZfsFgBA6GthHVTCUtjtxyafWfLg8ZAWNLahgoo2rwh",
  "key39": "3NYfYjQ7fMfAZerwSKPxCyoHHgccubRDGQ29PrpqLek1HXHKaeK27VKEm1xdTHs7qYTruhunG6dJCFgSKH7DKa4a",
  "key40": "4tNUrAu7nrr7q3CGYrj3hEWLtJk96XFzfbM5RyiYGtWokjhMGDX2RfmQajNdqkMWAvRjrh4Vc14oDsUctSW1ZUFx",
  "key41": "3jt4M64TsixHtdHugr9ewb7KaKzo7zWHVL3dtC7SwCJUUW1g5nejGfpLhvLmFK6SpeSDdXrAqXpgb22MRfcGbeeM",
  "key42": "ADYCDZ7biht4eFiKW6UCLXdJed1zx8zMV27m9YTya3D6yqVHVYZ1YFbjom2aq3dhtqcADYYFijjSBuCYzwc9xpN",
  "key43": "QLQxnopUfVkMz8S1ZudZ69qfgvZojpuLwxNGKPXoAKYZbaE15UWzDxSCWAgn6ob5vGsJ9V1n9r8NAYMz8fuNbj7",
  "key44": "2nFB8HQG2hk3ZX8P7yF5gUvTn8XxA1MgjE5aq3CzbbvACcMpRDwRLcqnz6KmrJ16WuJ7fmHE928RK2TqhjfUpMBJ",
  "key45": "3GFMF6ajjF86PywR9Q3RZkfLYy3tWbvfX9fN2qE8zNYsu52rAe3UnvtXpqPCnggEdHti6ko7sf61wtk5wGB7q2oY",
  "key46": "5u21kEUNt6863obF5fQ5HD98o9sQ2jMFKeTzT4ip4xkMv1xzy2HKwAYHY6CFqSsNAhj5VkxraDNL1E6SgQjsvWCi",
  "key47": "2Kx9aLxDqNatrHvrmK1wRpNt6LiCfqf2iMgXMcytuiXmYuezVKX7pUbqnGsxzX9DTjs8yKzbEDn3M1D2eRFhQ8LD",
  "key48": "zh1HX9gTP11vQca9dNiMbonDkmRpxR4aiJyz4VBGFQaemAhqnZyRMQ14E89fqq4NNjwgLUJM8qkSzXUDMUewP4B"
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
