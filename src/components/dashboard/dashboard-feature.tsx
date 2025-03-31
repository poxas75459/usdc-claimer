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
    "4twvj7bGdJVNE4MEoiatgd7RA35816v5dpKfzBc1k589CgCGQf3AVERg2hHNZ5SQWmBddweYWazoCk5SeA2p8ijc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27KFwegtkw71x54YMEdzxU4npqCg9At2gCALHQ8RKrzDHFLjqDk5pZixfFv3wvYv8VJALrqN6EipJGhKHEoX5RXa",
  "key1": "37NUGGsd8dAhstyWseWD16anDyWCs8G5kwrSfAv4aak2Esjho5ic3U5QnsdxEQzBgUEDj7ExBsYdrVCqMSo65feQ",
  "key2": "5L3dVJziXNYY5MHRSbR49E2eXCzUfPgVD77N7Q48bybYgYWu2DQoUnpgfyP2mPGTsUKdMHx3ZPTZoC1o3nvLS7ds",
  "key3": "2gL1hJxgC9EQcpNWLa88Pk79ubXLQq2VwnoBbofLW6zWpa5smK6eiPR5bP2gSwRPNQMWfjPMyGAUULL3bzr2j1Pd",
  "key4": "59VcsKmmsRUxc596uqqSsDzzo6QviKXk2UAiCWxNWD39UZY8ZpcZpzeqS2gy5NMtE8KRGiRcnoCv49NY3MBdpFde",
  "key5": "5QcwgjZrc4o5UeiHPBdLyKHGr5TKvh4QoFDympsqTZADYZQtZj3RHDPbmsSC8ryMe92FJa1mDZBjtEc11pcbvRDh",
  "key6": "65TezXMCHMThKLdu48wLcdKcMEorTaG2mHU1Q6LUr1ThvpjrUEYbrwmoYuRPiovns1hdJ6zPajJfgMjt7bJ7aCGF",
  "key7": "5NZ4u8FQY9Ma9pyMQAhXhLnq3pUQ2TkLTyxSor5oTf4GY6tP3KY5D3WFUAemrNTeHouhNHcPurH1LMdNuNkSKWn9",
  "key8": "5SdE1LXztRmuE6wZvG7ADQoWZuX8sZkkGH2GMhq1uPYA1d4tKds86UA1wB7FXjQkp54PiZj4cxWXu1VS7fVp1Xz6",
  "key9": "3zLAY9hsDkUQyBEYj4CbroDLq13o9sAzEZxfgPi3bURDnCsJULCEQr7z7WuoJgJJ5XwMEe7gYJgmZm5EpBcmh8EG",
  "key10": "3YtvgNZXNLB1R8vZqEUYGDaPymqoAPmRG79cvBDibgxjni6PqdcjRoH96P3Z7fEc3LicN9fSabA6rw86YHY36XW9",
  "key11": "4Kv1RWipaJZr4yiTTFCZDfkij2dkFsTareWzHDvXZgKaumV5xyvxHRKpahewhyK9dVcr3uB64GUYrR83aLWuqYjQ",
  "key12": "3Z3w4UF29VhFai1mjvxJZbQ9GjX34h51iYaPR6sNyvYxZJPnvHVBFSrUknTa7GqywsWYn5pKyV5cLpJPMy5DsUwJ",
  "key13": "3Cx7nY2QrQR3FqAB6nkhhRALLFJjQgzPR4AbjE9kJeig69NrcXWZhw2c9MDYmMNzofT22Hwo3Etd73ZFmSvDuoSf",
  "key14": "Aer3mPeGFXM7mJX8tWdfTzbcxnNAR2wFnggK9Na1NPTREEGtBW4rUsP1cH4RAh6p5RbjSQsfeUf5h5iQxK2r5rK",
  "key15": "121c2NLnUpn1wUgg2KQsKN9PWhvaE9ZmSWFbFKWaypC478SFykNfGaN3SXgkKndbavZ8TSCPdBoKPqUASSeiwUAP",
  "key16": "4c3GbyLuzf1ANhdDiGWxTSdz5hN8rLVfBw6GWiGbB7Z9jZxJXp5FduphzwpYEhWvAzaSBNDFNjnazDZVMD14j7om",
  "key17": "4Exiaga6V8pw3brqWfMF81LxrtpLkkPrd7jzgc4fDnw5Fze5pkju1TYkjR1L2UA9TxnJo2zHcEDHVjdeapxXDi8Y",
  "key18": "5e1FvHJXEeAoziDx9N2s9MkxyrRTQaYvgJJhBennC1R3Ji7sU8brecxF7vXJVusKYg3M2KvVVoojioB58mNG1XT",
  "key19": "25JtRcL5yEWkdG2KUq9hyXxA4e8z74D9c9e2dMrQQXx3xSotc6scGw9JmTNRXBRsgx7eAzHyvWYTyZ48sNXE4iwE",
  "key20": "5ZUxV8StE7uVPohf4oUac9tAar2ZDoVrwTEn2C3TnWdsCZKF1WvBrUmUx8E8tKMP8KjxxNReKBCYVxhmK1zCZBkQ",
  "key21": "39dXVLhqi4aaDAkAd8xAoqsp7fxawJgy6tn3yRf2oJyJcU19rmdRG9cokV6LYfvKzAFKJ812auV2pmqq9xsykf8z",
  "key22": "5DKDrgBWgTz9k4ruYKRdkf2P3NgheBMSA9h7d7ynhVM9AWNopNKp6PeJ4B23aiVg4Vt44o6GuX5z8SQGaVnNVtVs",
  "key23": "5rEBBBhh2qo9Ei1GQzzQhDUTmP6cwyuc3qFXuCepxnf6iTXeGm3mLKJZeAs7BPv42sWwBNVTdwxUiptVwCEL1yUM",
  "key24": "2NPszW8fkYdp31LS2EWewheVPVwtqWE6r9ZJQjToAYkbjpuYBdi6Ho1JkSXbKDvtFR7cdCtTPhbgo3xNnqyW5Ukp",
  "key25": "29fEf7t6iwfghiU57Bhyd2P1SCBPQS7gCFhhz12sWSXFUSSkm4zqDk8a6xcAut47Ka5p3r1x9sQ9uvHShUzy1DQn",
  "key26": "4NAiwXQPY5LQsAhGUQ35GNWyZLtAvg7rxBsN5JxP2UaHjnzHQ4eW1NidqJ1yy6D8WE1BRtcYdgVWXKSBQ4veSATy",
  "key27": "4zDcdKPNNP3h1PMmCoKKQ5fTTmevRbkCNMFDzrzrUaMj18qpsQtMLj7Ad8sA8nmQAwrrHCbdAGgDVLfkvS8j4YUK",
  "key28": "5B9LQqWCUevzznY3wF1kjUqDiU1UXWW2hzfmbBUF5Jtn4R2Zm3SHWMvRV7KEMaWcidvmPTfVJy6rKR8VyKchxN8Y",
  "key29": "CgSfaVmvX6f1gVzaPUrbFNRFVXXB7BjAFkpduBbwqboWf1zYJKDJhAjqmZXXp7MLEXkrR7FkJZR3DRF5WQTvy6a",
  "key30": "5F8Eu6CuQeKyagcWaqihBThWrNQv6s58qFQDokHkN1D3oQY6eYUTRFyrEqDpZe3GQd1BALst5kjxusH54fEk2VV7",
  "key31": "rcjqug1oMLDtRrGPr3F2AXpJ9ydo1s9nwtAHbBF6Vs63jbs2DJXuACDQoDKcqEP8uxxjYrFFXvXPVWrLPjPPUtD",
  "key32": "3CPpQ7sQqqctmQwomxsEWVqYBoUEqTS39mXapJhCamw2frxhFM38AosYuVSXxEWJKCXQDTst8XW8apt9wki3935J",
  "key33": "4gbo4gfhSFMefpALV8DARs6aRjckFUQ5FW6BBxKyJgjTBPCFKQF8nLyPXs6v4StAaWGKpED2AH6QuQM6wYb1UnZC",
  "key34": "5LmeJ3jNea6hv2Y2i843n1F7nct4SuZYdDsYvLGT2LBnU7xSBPvgs9AYUVGCgE5rnJ2wdcwSLkU4a2TS4pdp8A3N",
  "key35": "5YAsS9iNLeTF8CVquzv1mKhv9WyAb9ZVkah48GebYYj2NWkMVWoQqFBV14FMaF9NsCUZc5rdFyt4XakytNt3Q9oN",
  "key36": "2Ax2ApYsizHkp15BqrNEUCZzqv7DCia5PmqVkPRic8C3PpkWMeT4F1xRTMJMABzkSZLKkdY6AWdfj43zW5g1uA6U",
  "key37": "3QUBUUbwUUoiyjNo9PHUJZW7sn9UdQ3vkYNtp5rxbvAB3ZgpQBCZkBox4rPrKk56LTjez5vsR9nWZT9yXx3zvhgL",
  "key38": "BTtrJvoEv2Q6tjj2dV9WCr1aZcoSwqEPwQKRVZdpVynPGEgaxuMGLnx4d5zQuWgDHW4Ffgd3iQik4E5oAEFLYu6",
  "key39": "5f8xNWhdLjvNdMMUdphiJMPicxUnSoNcm4VSQeC7vkHAPPraGzz8JwgwEmSnsSFdGsBCaRe8mhruTegwSc39gY7G",
  "key40": "4dY9z8UYKC3rpgoGwbW4ANrdBxhsEhpFHgsk3hifwM6yQsX6YNKNfsHLY5AHiNQ6jpCrURZKYLuW1VnEhokCmboA",
  "key41": "2qfK4dP7JnHrWaJyT4ZpakjxtSpZdee9uVuGg3bf1E81SkuMu7nLWwDLeYGQUVbtZLJ3vsQ51hE2zU1PugHCSqgc",
  "key42": "3g4UDFxaM5iAUJmoG9TkxMWQQc2NxgMLCBESvP5Zob5iUApAfUYPDRJDfBG5wSoPgvCGomz8xDkZtvhj4cCTVQq5",
  "key43": "2NYv564EF7e8dx2bsqvNgC7iXnPKtaRWTUmnkVt3srfCuX8ajsHA8ryEApedKL4c4hygzh9GCfTCatfp7E81iqof",
  "key44": "2fKUjPVSSApvfNk99io6KwZmF8smRTBTQ9yXGgjALuxZ6iPxkrcueEFAKkuF6F8UneXaMXyRYnmLmTW3TD5bgU5y",
  "key45": "3xgZWnJ3JdtHHZnQSymkZ18jNmBzh2SwpWCtW6Qo3k9yAXKFcSuoW1xvNAArWXY1k2qevqecoU9Jh4UktqhA6L7Q",
  "key46": "o48yLvGiJpz2c9U3yiVbppUirqDii8SeZYy2rN4PSvFVjcKktLZQkKX7K1dYw2pE5bq1Uq7vTHFGhaJWoWeAhZC",
  "key47": "34ezammWJeEM3BfSAa75mpJgsJ8tbZ2Nidv5kr15Jo3JV29VvFFoaEHXFj2mBHpDQt5NYvLeqwVpx2BpRSR85vis",
  "key48": "58Ud3uaixg1CXkUx79QauxsCZf6zG6JYyTWSekCVnPGPJK4d9HNuBdzyb27NRahXa1rrCiHdjTPu9QkwpwowQozC"
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
