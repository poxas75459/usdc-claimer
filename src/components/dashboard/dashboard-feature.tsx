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
    "7wmTQ9LSm4R4uzd6UmaRaAhpUbX7gdM9NNJe7Qfqy6ppMSL3FYyBkae1qP6U7XtwezXCsDov7pG2vUnU714Wt7c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tSLCPN5nTrj2k6SUo6u3EeYK41rb3XKku8uc16TmDu8da7YKCts6uM6Y9iZG8QC5SwbDvgggShvNgJbSQM5Aahg",
  "key1": "4WVj7eTJUyFK2vYcwG1ZwRLs3j34eZy7eBvGgCjBLDqj7ZStLsb747tXsyzm6QWRYWLJf6vstAZNeiTqmMXrAmCJ",
  "key2": "o6N7bTt1a4jyHaX3XbhBb1A9WC5EhBfv6aqmA9VQyznSFrNKYuhRdFNfFthiK7yDciLt16hnvfqKHbaRZzij22x",
  "key3": "5KEzkYPT8k1Zk7F5b3Uh3jxMniiR6mUThyyBL8YPVwUwjhdGVWvnYJjmT9Yi2nHGtoU3haKXVdAxd7AncgNuoyZY",
  "key4": "35sUhbA7WNfHZrrdatLZ81jtZ5nRcWgEBftxrpjBuedWoMphgnj4vmG95HkdfMiu1NQvq9Yjrz92cDuMDrD4uaMc",
  "key5": "3xf2esvLUPY1npA7JCZZdRzM9WhBzc814oM2ravyB6W4PDyFQTugueJypZutF5cBF39PcTu4daE45N6JUuueq5Ca",
  "key6": "3BtLrUzeMgZ8dp5WzeCrS87acYDhidNKY2fHpyWxtoArH5nZpj16gX31jk6Qyuew7T31ad2hx1Y6GDfwhenCmSfZ",
  "key7": "37wyhjHeV9A5sihQRD3hkypw5BNz44RXKhMDvQJTavxBVd4GBtWy84gjQuvyh7QejD2xjeaewwyp1go14FB5eWVF",
  "key8": "2oMXZKagzBbxGEt2NVkdyqGPtwxqcj7HaEVjPbXgcaPbJCx6MCUawE4AV7iyGsfCmoftSkugRJNi6EUEKpHUhDLQ",
  "key9": "5hH5MDEo6UV25bm9PJjti3F1Urjr3G6YWvYXTz38e8MG7UTcsewYU9ViJg4cYFcwFEVk5WU2CNMaVWFiNK9bzfYk",
  "key10": "3m4BL9hhRc1cQV6ZGagGfNXRn3bFs2bGGiySjnC9npP617NFjvHZ7AfxtEywmBe49dAZF5DSGMSAZ48BXcTYwPMS",
  "key11": "3gKBRE2AtFvMaQrxogvEeERyVtSn9XjyygH3RzWxzGVCNDF1tikwQYd2GCY7C6EHyzLLxvLs7ukm8ejGgFihpxMM",
  "key12": "5KwxJSvvV9ZjiUyxa1FeSpySdTKnKTUt3AsxWbHdVGx7mrNyjWyCC4gjy4UuTDUAt3BFcCdV7FX8rSqGpVjpsMiB",
  "key13": "3UXCT16NM3EQW2TjEpfJwyVgx4bFS2NASShcJmwE6gFLUc25parvhC6C1Jvey4PPhgMhP8K8Hon78Q9hsVTvs9iy",
  "key14": "SNsX3bZxjY1xRwN8qi73sKhJuXVq3fwxYVo3i9uLQ2DKDyYyogq4XmJmH9nDx6UP7hR4ytektTwtxwQMEugyXJa",
  "key15": "ZBPpDs6ZGBqq23L8YBxVoZjfWeH8rSn1ChR3L2Azfr1QBhUcZsAmWWZX5D1oS1wCyVQmzsfGaKKfdsYtEi2FNnq",
  "key16": "2FvzV3G8Sm8DEe4VzVmFDV2jMTbhUkHmfcScPwMS2XhopR2jJeZUTu8fACpaS3cwe4hGa3RFQgPsCwgKenN2mjQK",
  "key17": "4UCpqy56HVaa3Jn2RbTdc3DpoNiBKpMXzc3Gmrq8L7gsutL1p6gwgL93UdHgyk1xwUcCWZdgMtQe6rCoEHonNKEY",
  "key18": "3ctF7DL39WrbqHxGeFf2WBmaD1U72FoLC9s1z8XJ2Bm5PUQ3gxYnGW7WgPfCLE5aEF8TQUKJVehjrzGBCrX9DYRC",
  "key19": "45nKVQsY9o1cerGQFpMBp6eguSj5nK73gyoi6fSVSXHRNPW4D5W6YYzL8CBWfKHXuB22UuRBVC12pcDfPwhSWPNw",
  "key20": "3bu7mxwyo2fNutga29moXaMwtaAhuknF8d9vpCVaW8eyqqbv9QuzDo86j8SwTAkn7tZ3mX2SREWt5B8veVtTQrSH",
  "key21": "2SBogZgxgdJGAFdDYmTdffMmmcV1xmXMAwy1CgaUJr3FwS8ksrGohwoWBnHHyWLcmxag5KofdbUQc5uTL9pNqTRp",
  "key22": "nW22DdCEQmZVAWTF4LuAu9KzZHPCqVwUp9EcxuEg4i2vzKS3YUT4CXDTeYAjH4RpWRP1RpZ3xibRL8t7q1uBrRU",
  "key23": "3ws8iSXBK7ChpM1w1S1UGos9aU1CWmDdmMLCfsZXjCQRtaN8d2BA9wnXGYgxGM2M5h4Z5AzpkC7atAMfWgS8WUV7",
  "key24": "5YipymZ3D1NMnEkSLFioqxgcTnuFKKu2sELEXXy5WtmtCtUv9UVH5XMojFyvu9sh6sD2KpLwu8GLAbFFgnadRuwb",
  "key25": "4MUcEemXVE1V9aVJxXN2HNz2vatDkYpckDxAKMKyLtcptAdcaTXSTT7bC1Gh57SXotZS8K5HrKrLeQsS3tTQ6y6v",
  "key26": "32qqwb1MTYuRCCpXc5Eic6nebnjAprPMKioHr6RMRB1zmYrRmFFyMKuss32C86siYqnwY5wmchj4r94atxU8Pra7",
  "key27": "2DwVKoTRWxhJEZHrahzZAogqMCD2PssuJzXJ7dnE6X7SUgWZUAALTNxXMbd1yV9SyTpjyCyTrrDtpHRaYdj11F9w",
  "key28": "5mqtnPRfHPkM9L2v8eKY8yg8gpytBigkUkqZY6qn28k7hFuX5s8ntTL2HxE1Bc1Wy3SAYFPo4696aeya2XLsaykY",
  "key29": "5yZcsLtPH4dS4dnbJtDSciZsuCNRyGwnFcd8TYgDhmAgHhwUaPYHe9y68Yv79ksMeAdh17o7g44KjanGMYqh3w5m",
  "key30": "41icuRhoXcqx4GQ9cyGXrQdRa1MLpomhruKv8DYHc1SEMcHWvSmEEf27886RE5t712PAtoqQRWgFbHYp9PUcojW4",
  "key31": "2nspvZeDvCUmXssjbMEgHmG1S45HcyHYeyxYvN67KXAMpMMx79sJ3dodZMkGa9f1Qu7rRpKuaykHMF4u9xrgA2Lh",
  "key32": "2F8aYLzhDzRjg3FSrsmfkuiVf11W5jgj6qQGaWE6iVJJAtt3p1VN1kZgK64pKTkxhgfMGvVBevYWG3NGTMtxzm5F",
  "key33": "9dRuMPSGY6MKiNHjaoNPdqh76gmsZcqQdPrhcBRcxdzfxpzUS7WxWchAhfJ6wzD5CQeZQPhhhp33ECWhegbCpwe",
  "key34": "5Z4rKW8JLqXsTb3sZH9mxPed4rCNJgCq9BF52cmNFX49LTjaYrHWCs7p1ZLb3nY7zbHRfKWYSVSFDDJerdFVtGyZ",
  "key35": "29sGSHb4cLZPdZNju7AkpbUwh67YmnFQvGPyhWFSNGsUZYYKSBxmkCyhPCEMwefUTd7XxwoMACa9pVyz68vqqvsj",
  "key36": "3g6Z4uP6XtaznjArqD9X7wZv4nt4jT5XESQfnS6W75qj3zgvxYnvmvxXQiduh5YJEg2WmjMMTuyHYaQKVxo6jva2",
  "key37": "5BnJXphoZ8FmmV5YtYAjy6tvN3VkYL4dstQxwd3bLZmdPM1rN8vwgKkvmXZFgdwiGGheK3Yc9vLfrqMLB4Sk5LiM",
  "key38": "2UoTdYF45VFo4rRRYaBsmfKoUhrHLFRZoVhAuVGeEGK3FsATvNeRxMe75icHFxsWMAmN8W6zcdWCm2CpQ178mnzW",
  "key39": "9oVBjKDkPkUrai6DfJmnnYVeh3AR2XTgunrowiB7i4S4H3nGpjEqhSXtThUAU7thuN4MX37ZBVCUFbt7k4sE1up"
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
