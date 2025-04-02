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
    "616kv8yEggs8bhPDeMNhfggXZBWkLSFRob8Z1BRPfg2YjvBPdGBjg6jsufrM9vFYrczjpcdgp24MkFhiPGpskAw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xKJ74y4yVWqyoaJt7FpjduAB2ae9ULtHEJ8msksEuCbpGzvjbbrp8eU3nEinHozL37HKnANLAygBMuQnP9NEafE",
  "key1": "3iH8Z3ZiLmrmq26UVqPC7wYH7rhfCK1RTJ7kqQNauEktbnHAH5kejox9QmunEAHsY6Ah32gPm8eTqjiWVjWD3RV",
  "key2": "2MFTZ5xgqs9AJDeqDYSLAcBby32UYcbyLPxNeHNsq8BPiDGcN1pARbofXsNcz8R4i6t75224kjFYqZd9jaSfeWSF",
  "key3": "42Qq39Qo5THqH9DdUna1GyTC8xxonkKRS6Q94kBYmqkgXkLoqpUeZB6VTZwe4Ny3Asdi7uGKVLNdJTf5U4Jb37in",
  "key4": "bz2R9394yGDa4JN4gr2YF4mVTFbwmZhEjTDwD34Wta1mhGMpRKYy3fbBgm15ZRN9qT6ym6tDjSgSMGKuEdehs9B",
  "key5": "4abywGDus9JWZX6a2cjsFvQkFVAyCxmBsMKobFxrs1jues8g4SrVZofG5cb75ioHVwmTxCkA91eKufRBrmLtY9sU",
  "key6": "3JqCXg3fhk9xsUgM1x9fQa1bug2h11GJNZcHxkTDt5ABdUr6ap5jpsPunekF5wUHezno41wmZmXyyC4Bms2BoxqZ",
  "key7": "2MeDiTsZiPPNUfMRzaW6bueAFcPHrVMimuKct9u9PLYRNKeh6MZucFk32eQoX136iToBRXHV9q4isBpairqJ4cEk",
  "key8": "5hVEp22RSrZq1bQ9vSy3KuBF25cta27ggZChVjqahSmYAHsyi8yaSvphxH4sszgxc9cUjcYTrfBcARdya3qDEfs7",
  "key9": "dBe2Pr6N1ekxqcoJE9JQtoZsJZfu9wxMUCcvgQDzfFA4kJebDrPTxXDVtDT92FKhbBirWNXktn7sPVrLQpwVtJK",
  "key10": "EZVK3uH9ckeZkn46udWTaiFkQPxeMGe5RS6VsUnc5TNayJJK7v6GwLzJTjVD696FucQQwW3REheEfatT3kT1o95",
  "key11": "3yexYuw6mKWAMZckMqLNs7MqacQSVcFeyNNZnYp66YwfMVevXZmUnPMPdd6XSQMon6CykEh3YxhEuwNQUHzriRJ6",
  "key12": "66oR7Bngep13VX9oxeJh6vnjrUCHy6j1GaXW48dnE8yjWtgYviWNpVNv8HnK9Zy6RZU4xx9Lvn86fPAZt3gUK9wF",
  "key13": "zfX31d4Yn2yQ3Tr9oQMbVkYXjNJTwQncD3RvfubTwLjWrHkEcZTGcmkUBsK3Hp9zMzok3ENHH68ztkHxBvPiyWp",
  "key14": "3UNkFZcfqS1Yf9gUpiCZuAhHr8Y3ubpQQgU2pvbx1RwhjrpNJdsU7KmaKGtoBgpnpJnbjgcB3teSmgkRcQifYbMD",
  "key15": "5B7J9kFQBazmRZhsNBdz2hL21d6EaHGNbKuYEd9RdYWBrH9sqyPUx6RFz6CvDeDuDCDrRBrRtfJRdmsdKJ8uiFRm",
  "key16": "446cPh3qsZWDbzwKGaFXfh6dNmiyv37nzQZXfXquVh77ZoFL3pvU2rBP89HgbDZQcmpj7U91Ny9UfQfNNybFxngd",
  "key17": "2nujYcRysrWQvTxWtjYt2PXHxgySGWZyubhfAmw2jo41VpYDUrm8BNWm6m9tU17XtSkkdZfFpGdHPHm2kcuHnkBZ",
  "key18": "48FwCnKkAY2MNCSYVCYi3EQ91WEiqYVmBX6DwDGfmyJk4GRhCshph4mUFyrw6A9GqXeoiZ995Nr2kp2SW9Dke7tm",
  "key19": "RVee5JzN1rEmXt6CH3iBTRxgyBLcsDSMCNte8BrhU88NNaNWZaBL8iqxHhNb3hmFNiogWZAfcFd6DZ3J16KzVNN",
  "key20": "2fiSRxLVsFM2mc6h6jC7uWsEAhVABmr2QbRuq71YnWw2jXmVRD1dgqsAUWzXRw78PHvNHEKVtehFE5MWUDxsMpuV",
  "key21": "3ZVHNPGQHXbaYJ9R6pzHt8PjkgPehaNqw22PcHnhhxBe4W5TEUXfyYF7ag14pzsXPAboz2mBLxh6mUuaym2WzL3q",
  "key22": "Y18YMFQe7JbhgXGMTCmC2NqsE8uYCKTpm1yREjvxmb4zewpd9zkWLfRr7iNFJuGUbw79emyvZSnAiB7p8JZcxF1",
  "key23": "2GK2jF7dcYbDddKj8iZxgCv44RS7jUJAGPGoDe9hiHykr7Cmgqv9dT9PT8VJx5Af2LpTWMz7w2FzXWrTmHRe1sQ5",
  "key24": "2v9DRigSACcBpucmMBZwNtw76pHZmEtRm1jn882qTQQcs9GBvaY5dbfsZ6XxxTxU8pz8mhJYzUS8TMVPe1CsCCoQ",
  "key25": "4pfvLwKjraJopLFPkSKMxo5qNGcR5tsGfkXDkA3yn3e2Xhr2jh9Rauhw8YxkWpK75EJkKpe4hxBX5wYUuzd6b7w",
  "key26": "5RH5nDLMyScepFuKtQbo8wCqvMPvCVJksT1AMyZiXKjrqkQjBrXDv65FNJk2uEQ5Gtviti9SHEbKUjeVuJxSDNdH",
  "key27": "5beZd29E52b6SFNSyrpafPaf1yuVBE1P6pSQaXkjSLQCoC6bSXmDXtpMQQ2ZVcWorNYhm2dHBxgRXizRjsVeB8Hz",
  "key28": "4CNiyUSrc99Cnm8C4WNUDgx9ZEQbTRNxEHkVqNhGdN8ma3UiZCfzfCbv22PWTge1aHv7kYC1ptJu46FMaKvHcdAA",
  "key29": "DsXJhYDU5zQSWRtHBzGVS2hPRZKuo8f8fUKXKFnKUh154vsVHpV24uWcqLZckPJXBXePjLg7DJTWNSADuu4poW3",
  "key30": "5nWZKQ5ZwR1h2Sr5if1p5QGwGU6nYDgWbTEwsMyMLToCQRnRcmgCrRqaSwcwiG73ZSnmar3Kh9iLRjiZi6Xrq9ZT",
  "key31": "2X8QdHTK1V4XsvovAVconR52GBr9qmu6g4K1ce28zdFEQFXTVaMJP9zquF3YHK2NwMyxLur4yhHfvHbG1gbQahcV",
  "key32": "4LMZTCaj7SNk7Rw1eMHCP1igCDdkrh7CPwZcznjQ4nRrC6PAB2Urp8FXPmpUxPbibPdhVbPg7i26xuRWrMJgJ1z",
  "key33": "Vwu1yamVymGwcrtsTDgYFRxDN6J7K7r1p5mdTyHqPHfw3pKxd4U7tdZg2aDmz8WUL9q7aCxZWf4CEF7r3A7u4Fr",
  "key34": "2NncGyauiX9scbZUFrfSvFh7UYnQ7Zt6HKKe2RfQVVFFDYHTLm7sqT2upxBJchRQLi9HoFQ7sZSXEWeZUfFoZGP3",
  "key35": "5xecHn3WEfvw9zXt1YvaxqzvZSv5oV4nosrbNxx8sGDFUkx8beZRVMf4ZLSTs7D9meckQUzCpbTjZR4aUKvC76uS",
  "key36": "KCYCWpotGybKtRyXLJxuXbuBseDAYhfUw7N7NKYP3FLEbejAGGAbR5pnkyFRHTW7ii83J2r25vhBACevLqGLQHV",
  "key37": "46SBna57Mj7GuEJxB8wncoVzULGJGQuSuhFXJ2atAXbbzkNutsgGuzN8kSrqD2QJsMa17NvBrGA4aoUGT81RnVPv",
  "key38": "YMsE4vxaRn5NQrHvgSbb5aXJ1py64Qz3KwPLCeyrXRbUkRVke8guNC22qj3mA9TWYmArkg71985WEhyEt2YCKcd",
  "key39": "4Q8dRJYNKHR5VTT8cLyZuXPiKR43B1qYMhg5yAPbZMzL4C4N6M3AaUpkdM3HwTncyG998xSPoSAWMjH7cbKmsXYF",
  "key40": "4FA1U5LV4BCrGU8j3VM9kB4pVbcGhuJ7Qz5cjWYyVYFaLKstQTrwVEorN22yVXc8fnkUnzctcdSTzjWec8wnjt9F",
  "key41": "24GUKqjxV4V8mSNnhDU61YpBCBLFPFj3ETkASnQou4RBuXTnEaDrzfgCDpwdMHusdFaixUCMGtFrQ9wp39fpmvyQ",
  "key42": "5b7bH7ipHt4QLq8XWkcF9foi2AeAkzwA3aii3hEtqKDgJpTj1KmMtQRxnWCWvnEDuTENoo9E3KdwSH5ic5Q7dHsB",
  "key43": "2znpuBhWNAkGKYBr54dhXXt1MjzbthNe5MVaww5Bwk78v6PRS4D273DXyKJACwAbQy22BDF2NEVr3DMu9EJ8GJsU",
  "key44": "2np5H6R11wKcNumb4EgZV6tgoVhRGXhgdARoWvm56FhEqGJ4r6E8b7VZHuvrPEJtA3MHYs1cS2951wMMUmTfSHAn",
  "key45": "xV1ZQbD88wkt1xFn9EpzLFRnBxFJHygCP1bRSgts7Tyh1JH15yH4ZosiHZEoJz1jLesdh9KAFKqP8LE6dZDhx9D"
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
