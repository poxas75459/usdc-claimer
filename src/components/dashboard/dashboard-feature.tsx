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
    "ssAefa5Vdw3acboiUye6kjQSk4S699uVJZGBWseB17A2WEcQfd9hNpueRdgTqDyeegSP4oLpk1uRy4YgUqHySYd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vSdma4qm385DhxsTUqmeHkmaTcFWPpXenzDWPCqFG3ynYuVs3GMBqPU1tAE8nM3tMQYTqiCdJ3HctHDybF7Eqz8",
  "key1": "1Kog4d7c1JVdaV6vLpSVRLQjK6GCaoq59M3fvYo9B15DJbYoWk3sU3Z13DHqsNBXf2Z9azFhNKG8b1Wn7kaePAF",
  "key2": "5B7aK5rNfpy7K5QjTyBfsdqnUTxe3Wyqy553cBA2DxjdjNdkLJo7iGijos3M6jhR9ZaLcgsLKYwJAVHxD97szG2Z",
  "key3": "4fHpniRTP5Stbrv28p822S1dr82SAWwz91SUKN9ujUSLuD18PJE2jhSEXDaH32Q5EajjBxq1MEegtuWtUhwXfdr8",
  "key4": "2MsWQH6T3b2KwH8xS1kSR3KrRFuGnCiagF7UuA1e2dwLNeaZGQWbmrt3CC9F97bAo4tiMBoWXiri46Dp11joUkGP",
  "key5": "4RHyFiBpQe6kCpzACYQB3rDgLc6zCeVYLQuHG2cSXHVh3sed1NLXXUKNr8m5g9V1Jf4AGcWmopsw58wSFugUGoSU",
  "key6": "3Cu1GFGkkcXUCKVWhLJ9wiBh4PV9R2XgR12GRXWWQWTohUgaCdwNuWL4LaLMciqPuXmQs3m1rcwjSaVKiMrFFiJJ",
  "key7": "2kXf2zZ7oTNE4y4dCi8k6545H8wpMUML3RcTW5UbTNLbx1R7R8wiGwKpbzoYguqba4C4o5nQkMZRUXQMBkFzvUqB",
  "key8": "2yqCppMZYJh9D2AYQjQrBxVSgGsF7k1a9YGsafk91vxkkxS95bhqLqo5hwJXHR8eucPC8LQ6J4XEUEFGLLLs4pyX",
  "key9": "4MzVa6vWWwBYooVVFTzGTV697aX83HRTDahvrDY9gJmDspW4DK8aC5QNzdmsqsfUhWHXBDaaZsbiq7UJhW6ArrAQ",
  "key10": "4JBwyifUP3SDGYzXtX1XAwdZXLKou1ZaPuaTxUzUnqhMLhmWrDCnao7BsVBowExiEB4Fxss7KBKd4FLSR1rcako7",
  "key11": "AVxETWGpsM3rDsh9awU2aSFxA8pvaEHQ9Zfa2XvqaDnDp2xU7TLvKyGUC3JYTXv2eYeq6DoqTkoHfExPCRtF1LQ",
  "key12": "2fRn4BRjyP8ara9pBMMTxdjo9zgr64xtigYUQYU6kk7gL8Ys72GqhNmQDZQqqqKUzMdkdobSGG87pS2mJuPBdJ4R",
  "key13": "3scshdC9QbYQoMbHkr2Fe3WiDjW2i5QFQWGmeg52PonypDyHUM1q6P96oEttYmQDd1VkqbZ98XUH3F27g1vNGcWn",
  "key14": "2coFAHz3KGhXsrSLD76pgWTnjhtuevRWKypYNBrvFdEDLSRMywkwVGkT75PP9DG325m31ZGTNM9cko9WpDhi4V5E",
  "key15": "2pniMgFKN1ssmKAvRZkjseCrvVeWcrZG8ZhC7R27NY7nN6mywyCMnvYv8cPwsJmsrniRor3kB9L83zqGxepUkTXD",
  "key16": "3NCGLGWn4AktTJtCRssJCPXe7QvtCRtq7k3xotSmqXF3PhrWSkbjq83bTnZLsiQAZwM8Tf6GonNfU5gMCJ52YG36",
  "key17": "MzYEugPU5xqSvmBrpm2r9FCdaKRMj9aCFhqir72zUNPR1avCLCpL2SkAsXQHE2CDQdM89S8k4H1sFAcvMLSwgRW",
  "key18": "32sXLH9f67rhWvHRGJLRHmUtCHLNXwt2c542oSSc3wPsdBLuVUh5y5sYEKRKg9TUNZVT2UdSVKdHwrwy76LfDJbf",
  "key19": "5eWF2p1YJzD6ywdaRCUWVpwp57K3ozA65H9WGvhusKCTiFZjr5xc4D3xzMGkoTHT2Te1BicVN9GjUN8hebFa6QRE",
  "key20": "5yYgtTB3RiNv9E9BggFEhSrnvCP63BSM1ZMFqZLqtsSpbGJtSxHhsJ9VEzsUhAHHMT22bMswzscwTxkgWnwgr7bE",
  "key21": "GXabpcUzdqaeYDV1r1ansTfz4J5k5NeXdEDUTaaQaQqzChQroLaeK7nGs8zMA6SPYYPMAQPSyLKKehQ9vVZZfkP",
  "key22": "5Sn5uMes3paKNWw1qwum3ddaVoGwFLozwnLKtoZLaym5EtixBpf7DcSCtvPc3egEQDCVWFi3143ydvXtXsUuYG5H",
  "key23": "4DrGqHvErG9K9eASkYwCkaravuSkY4DkVcxEbNxdViYBjgXd5djfaVaixaawCP3EBMFSzb5UCiK9P9t7VCY2Rwrx",
  "key24": "4f4Gz36y8gFvtv2qzAFGudkKvHWpxpVaEtYe68FULAAbXnyJfhvWyow7D94914hQzQiXXYzvoB2eppHFJWxhgciD",
  "key25": "5jfKfAc1A5ubwugyxcAnhk1bKobkNBGLsiwwvUmcqZKBN86GfmKCAm3pfYVW6fD58KbueE53RX67QmDuxghCHXzN",
  "key26": "5LoV7yfPQUjBz1T8yU1fqYB5LxVkZyEbQTRyyZ7CwFkx19es9sZBnhFh4gBXmPetD3u7j3mC9kuq2gFRiZiovsRv",
  "key27": "5EpNbyMYMZAPpBLz234eSCsXwSXRxB9xHBVpbAhKSGeLBQgvfLx8mAuTfGbtX7zmBHY4d9vjosE97B9AxMEBfHGM",
  "key28": "24m5xM7Qvafyc26q73apabRwEGBgFAJdEZgYJQLvaqgVgjsHz3UFb4tHiEZdXPLdakCBSUZhd7RUQhwCgeUDPeYe",
  "key29": "3GZfKX2zj3Y6PgZTyr6G8VL3d53e6rqGHs8hz3iGXbEdYE5CxoWRRVCwyJa5ERyW6SSgiB3Tarx2ukpQTXTqRoVS",
  "key30": "55HDBjMKRyXhCXd5UAetX4A5TqWGRk55azE6RqJcVa89tmbHi1DsUv35fdxeebg858TT8WeHzYb217AmkzGd46sg",
  "key31": "5TRMjmg3w7P2fgzhB1R2wgDBc1QLCrm8pKjGBhxk8ttz3Kri4M5N7UnKFuHUQ5Z8bBFTHYyQHdHoztVwjTANQmUZ",
  "key32": "2xnTwzdUArJ74UXFYn3Z6AsmyEQXXUBQTpr1Saa1H6RWrqahm5MB6wD4yP43hcUdFkugTqRXqCTYovd9meefKggF",
  "key33": "54z6hVfXFH7stcGpwJZ1CQn5z3riJjDYjo6PcuEyKrVnSd4TUzMMtcNzr665VgHpZ3grmwk3PvSRXaBASpXBBwZb",
  "key34": "5Hc97guZKt2E8Wei9fURsik2boT4Kdu88K4RgVJ8ncLbENWbggR9TnoeUi6wQ7aYsLUo9GM5RSBygEmvCuGGHCnP"
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
